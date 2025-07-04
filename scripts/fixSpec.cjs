/* eslint-disable quotes */

const _ = require('lodash');
const fs = require('fs');
const yaml = require('js-yaml');
const mappings = require('./mappings/index.cjs');
const packageJson = require('../package.json');

// Use true to apply tag/method/params renames (new to old) in the spec for compatibility with previous SDK versions
const isBackwardCompatibility = true;


// Some schemas for reponse are missing discriminators
const addCustomDiscriminatorToResponse = (schema) => {
  const customDiscriminatorsForEndpointsResponses = [
    {
      propertyName: 'type',
      mapping: {
        'CUSTOM': '#/components/schemas/CustomRole',
        '*': '#/components/schemas/StandardRole'
      }
    },
  ];

  if (schema['type'] === 'array' && schema['items']?.['oneOf']?.length > 1) {
    for (const discriminator of customDiscriminatorsForEndpointsResponses) {
      const oneOfRefSchemas = Object.values(discriminator.mapping);
      const shouldHaveDiscriminator = schema['items']['oneOf'].filter(s => oneOfRefSchemas.includes(s?.['$ref'])).length === oneOfRefSchemas.length;
      const alreadtyHasDiscriminator = !!schema['items'].discriminator;
      if (shouldHaveDiscriminator && !alreadtyHasDiscriminator) {
        schema['items'].discriminator = {...discriminator, mapping: {...discriminator.mapping}};
        return discriminator;
      }
    }
  } else if (schema['oneOf']?.length > 1) {
    for (const discriminator of customDiscriminatorsForEndpointsResponses) {
      const oneOfRefSchemas = Object.values(discriminator.mapping);
      const shouldHaveDiscriminator = schema['oneOf'].filter(s => oneOfRefSchemas.includes(s?.['$ref'])).length === oneOfRefSchemas.length;
      const alreadtyHasDiscriminator = !!schema.discriminator;
      if (shouldHaveDiscriminator && !alreadtyHasDiscriminator) {
        schema.discriminator = {...discriminator, mapping: {...discriminator.mapping}};
        return discriminator;
      }
    }
  }
  return undefined;
};

// For backward compatibility - rename path, path parameters, body name
function applyParameterRenames(spec3) {
  const pathParameterRenames = {};
  const pathRenames = {};
  const bodyNameRenames = {};

  const pathParamsRenamesNew2Old = {};
  for (const opId in mappings.pathParamsRenames) {
    pathParamsRenamesNew2Old[opId] = Object.fromEntries(Object.entries(mappings.pathParamsRenames[opId]).map(a => a.reverse()));
  }
  const bodyNameRenamesNew2Old = {};
  for (const opId in mappings.bodyNameRenames) {
    bodyNameRenamesNew2Old[opId] = Object.fromEntries(Object.entries(mappings.bodyNameRenames[opId]).map(a => a.reverse()));
  }
  const methodRenamesNew2Old = Object.fromEntries(Object.entries(mappings.methodRenames).map(a => a.reverse()));

  if (isBackwardCompatibility) {
    for (const httpPath in spec3.paths) {
      const pathSpec = spec3.paths[httpPath];
      for (const httpMethod in pathSpec) {
        if (!['parameters'].includes(httpMethod)) {
          const endpoint = spec3.paths[httpPath][httpMethod];
          const operationId = methodRenamesNew2Old[endpoint.operationId] ?? endpoint.operationId;

          const pathParamsRenames = pathParamsRenamesNew2Old[operationId];
          if (pathParamsRenames) {
            // Rename path
            let newHttpPath = httpPath;
            for (const key in pathParamsRenames) {
              const newKey = pathParamsRenames[key];
              newHttpPath = newHttpPath.replace('{' + key + '}', '{' + newKey + '}');
              if (httpPath !== newHttpPath) {
                pathRenames[httpPath] = newHttpPath;
              }
            }
            // Clone parameters with new names
            for (const parameter of pathSpec.parameters ?? []) {
              const refKey = parameter['$ref']?.replace('#/components/parameters/', '');
              const refParam = spec3.components.parameters[refKey];
              if (refKey && pathParamsRenames[refParam?.name]) {
                const name = refParam.name;
                const newName = pathParamsRenames[name];
                const refRename = pathParameterRenames[refKey];
                if (refRename && refRename[0] === name && refRename[1] === newName) {
                  const newRefKey = refRename[2];
                  parameter['$ref'] = '#/components/parameters/' + newRefKey;
                } else {
                  const newRefParam = _.clone(refParam);
                  newRefParam.name = newName;
                  const newRefKey = refKey + '_' + newName;
                  spec3.components.parameters[newRefKey] = newRefParam;
                  parameter['$ref'] = '#/components/parameters/' + newRefKey;
                  pathParameterRenames[refKey] = [name, newName, newRefKey];
                }
              }
            }
            // Also fix name of parameters inside endpoints if there are any (example: getHookKey)
            for (const parameter of endpoint.parameters ?? []) {
              if (parameter['in'] === 'path' && parameter.name && pathParamsRenames[parameter.name]) {
                const newName = pathParamsRenames[parameter.name];
                parameter.name = newName;
              }
            }
          }

          // Override body name
          const bodyNameRename = bodyNameRenamesNew2Old[operationId];
          if (bodyNameRename) {
            const newBodyName = Object.values(bodyNameRename)[0];
            if (endpoint['x-codegen-request-body-name'] !== newBodyName) {
              endpoint['x-codegen-request-body-name'] = newBodyName;
              bodyNameRenames[operationId] = bodyNameRename;
            }
          }
        }
      }
    }

    // Apply path renames
    const origPaths = spec3.paths;
    const origPathKeys = Object.keys(origPaths);
    spec3.paths = {};
    for (const k of origPathKeys) {
      const key = pathRenames[k] ?? k;
      spec3.paths[key] = origPaths[k];
    }
  }

  return {
    pathRenames,
    pathParameterRenames,
    bodyNameRenames,
  };
}

// For backward compatibility - change tags, operationId
function applyTagsAndOperationRenames(spec3) {
  const apiTagChanges = {};
  const operationRenames = {};

  const methodRenamesNew2Old = Object.fromEntries(Object.entries(mappings.methodRenames).map(a => a.reverse()));

  if (isBackwardCompatibility) {
    for (const httpPath in spec3.paths) {
      for (const httpMethod in spec3.paths[httpPath]) {
        if (!['parameters'].includes(httpMethod)) {
          const endpoint = spec3.paths[httpPath][httpMethod];
          // API consilidation - tags changes
          if (endpoint.tags) {
            const oldTags = endpoint.tags;
            const newTags = oldTags.map(tag => {
              const groupTags = [];
              for (const groupApiName in mappings.apiConsolidation) {
                if (mappings.apiConsolidation[groupApiName].apis.includes(tag) && groupApiName !== tag) {
                  groupTags.push(groupApiName);
                }
              }
              return groupTags.length ? groupTags : [tag];
            }).flat();
            if (JSON.stringify(oldTags) !== JSON.stringify(newTags)) {
              endpoint.tags = newTags;
              if (oldTags.length === 1) {
                apiTagChanges[oldTags[0]] = (newTags.length === 1 ? newTags[0] : newTags);
              } else {
                apiTagChanges[JSON.stringify(oldTags)] = newTags;
              }
            }
          }
          // Method rename
          if (methodRenamesNew2Old[endpoint.operationId]) {
            operationRenames[endpoint.operationId] = methodRenamesNew2Old[endpoint.operationId];
            endpoint.operationId = methodRenamesNew2Old[endpoint.operationId];
          }
        }
      }
    }
  }

  return {
    apiTagChanges,
    operationRenames,
  };
}

function fixResponses(spec3) {
  const customDescriminatorsForEndpoints = [];
  const manualPathsFixes = [];

  for (const httpPath in spec3.paths) {
    for (const httpMethod in spec3.paths[httpPath]) {
      if (!['parameters'].includes(httpMethod)) {
        const endpoint = spec3.paths[httpPath][httpMethod];
        for (const responseCode in endpoint.responses) {
          const response = endpoint.responses[responseCode];
          if (response?.content) {
            for (const mimeType in response?.content) {
              const typedContent = response.content[mimeType];
              if (typedContent?.schema) {
                let schema = typedContent.schema;
                const isListEndpoint = endpoint.operationId && endpoint.operationId.startsWith('list') && endpoint.operationId.endsWith('s')
                  && httpMethod === 'get' && responseCode.startsWith('2');
                const isOneRef = schema['$ref'] && Object.keys(schema).length === 1;
                const refSchemaKey = isOneRef ? schema['$ref'].replace('#/components/schemas/', '') : undefined;

                // remove unnecessary type: 'object' for $ref
                // resolves error:
                // ERROR o.o.codegen.InlineModelResolver - Illegal schema found with $ref combined with other properties, no properties should be defined alongside a $ref
                if (schema['$ref'] && schema.type === 'object' && Object.keys(schema).length === 2) {
                  delete schema.type;
                  manualPathsFixes.push({ httpMethod, httpPath, key: schema });
                }

                // add missing discriminators
                const maybeAddedCustomDiscriminator = addCustomDiscriminatorToResponse(schema);
                if (maybeAddedCustomDiscriminator) {
                  customDescriminatorsForEndpoints.push({ httpMethod, httpPath, discriminator: maybeAddedCustomDiscriminator });
                }

                // Special fix for /api/v1/policies - should return array of Policy, not single Policy
                if (httpPath === '/api/v1/policies' && isListEndpoint && refSchemaKey === 'Policy') {
                  schema = {
                    type: 'array',
                    items: schema
                  };
                  typedContent.schema = schema;
                  manualPathsFixes.push({ httpMethod, httpPath, key: schema });
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    manualPathsFixes,
    customDescriminatorsForEndpoints,
  };
}

// Some schemas can have extra properties and/or enum values based on FF so we need to merge schemas with mixins based on FF
// Uses x-okta-feature-flag-amends
function applyFFAments(spec3) {
  const ffAmends = [];

  const ffAmendsMerge = (obj, onSuccess) => {
    if (obj?.['x-okta-feature-flag-amends']) {
      const ff = Object.keys(obj['x-okta-feature-flag-amends'])[0];
      const oldObjStr = JSON.stringify(obj);
      _.mergeWith(obj, obj['x-okta-feature-flag-amends'][ff], (objValue, srcValue) => {
        if (Array.isArray(objValue)) {
          return [...new Set(objValue.concat(srcValue))];
        }
      });
      const newObjStr = JSON.stringify(obj);
      if (oldObjStr !== newObjStr) {
        onSuccess();
      }
    }
  };

  for (const schemaKey in spec3.components.schemas) {
    let schema = spec3.components.schemas[schemaKey];

    ffAmendsMerge(schema, () => {
      ffAmends.push({ schemaKey });
    });

    if (schema.oneOf) {
      schema.oneOf.forEach((one, i) => {
        ffAmendsMerge(one, () => {
          ffAmends.push({ schemaKey, propName: `oneOf[${i}]` });
        });
      });
    }

    if (schema.allOf) {
      schema.allOf.forEach((one, i) => {
        ffAmendsMerge(one, () => {
          ffAmends.push({ schemaKey, propName: `allOf[${i}]` });
        });
      });
    }

    if (schema.properties) {
      for (let propName in schema.properties) {
        const prop = schema.properties[propName];
        ffAmendsMerge(prop, () => {
          ffAmends.push({ schemaKey, propName });
        });
      }
    }

    if (schema.discriminator) {
      // x-okta-feature-flag-amends
      ffAmendsMerge(schema.discriminator, () => {
        ffAmends.push({ schemaKey, propName: 'discriminator' });
      });
    }
  }

  return {
    ffAmends
  };
}

function buildTypeMap(spec3) {
  const typeMap = [];

  // See file `typeMap.mustache` which contains type mappings based on discriminator values.
  // For simplicity most of keys in mappings are simple, but you can choose classes to add its name as a prefix
  //  to be more explicit and prevent possible naming collision issues.
  const schemasToForceDiscriminatorPrefixInTypeMap = [
    'BehaviorRule',
    'PolicyRule',
    'InlineHookChannel',
  ];

  for (const schemaKey in spec3.components.schemas) {
    let schema = spec3.components.schemas[schemaKey];
    if (schema.discriminator) {
      const { mapping } = schema.discriminator;
      if (mapping) {
        const map = Object.keys(mapping).reduce((acc, key) => {
          let refSchemaKey = mapping[key].replace(/^#\/components\/schemas\/(.+)/, '$1');
          // fix issues with orgBillingContactType, orgTechnicalContactType
          refSchemaKey = _.upperFirst(refSchemaKey);
          return {...acc, [key]: refSchemaKey};
        }, {});
        const hasNameConflicts = typeMap.filter(([k]) => !!map[k]).length > 0;
        const addPrefix = hasNameConflicts || schemasToForceDiscriminatorPrefixInTypeMap.includes(schemaKey);
        for (const [k, v] of Object.entries(map)) {
          typeMap.push([k, v, schemaKey, addPrefix]);
        }
      }
    }
  }

  return {
    typeMap
  };
}

// TODO: remove?
// Previously we had to use type mappings manually added in typeMap.mustache
// But now classes can have `discriminator` and `mapping` static properties (eg. see model `generated/models/Policy.js`)
// If it now resolves previous issues then typeMap file and corresponding code should be removed
function writeTypeMap(typeMap) {
  const typeMapMustache = 'templates/openapi-generator/model/typeMap.mustache';
  const typeMapMustacheStr = fs.readFileSync(typeMapMustache, { encoding: 'utf8' });
  const newTypeMapStr = typeMap.map(([k, v, schemaKey, addPrefix]) =>
    addPrefix ? `  '__${schemaKey}__${k}': ${v},` : `  '__${k}': ${v},`
  ).join('\n');
  if (typeMapMustacheStr !== newTypeMapStr) {
    fs.writeFileSync(typeMapMustache, newTypeMapStr);
    console.log(`Fixed file ${typeMapMustache}`);
  }
}

function fixExtensibleSchemas(spec3) {
  const emptySchemas = [];
  const extensibleSchemas = [];
  const forcedExtensibleSchemas = [];
  const fixedAdditionalPropertiesTrue = [];

  // Schemas to add `x-okta-extensible`
  const schemasToForceExtensible = [
    'UserProfile',
  ];

  for (const schemaKey in spec3.components.schemas) {
    let schema = spec3.components.schemas[schemaKey];

    if (schema.type === 'object' && !schema.properties && !schema.additionalProperties) {
      schema.additionalProperties = {};
      emptySchemas.push(schemaKey);
    }
    if (schema.additionalProperties === true) {
      // fix for openapi-generator v6
      fixedAdditionalPropertiesTrue.push({ schemaKey });
      schema.additionalProperties = {};
    }

    // x-okta-extensible
    if (schema['x-okta-extensible']) {
      extensibleSchemas.push(schemaKey);
    } else if (schemasToForceExtensible.includes(schemaKey)) {
      schema['x-okta-extensible'] = true;
      forcedExtensibleSchemas.push(schemaKey);
    }


    if (schema.properties) {
      for (let propName in schema.properties) {
        const prop = schema.properties[propName];

        if (prop.additionalProperties === true) {
          // fix for openapi-generator v6
          fixedAdditionalPropertiesTrue.push({ schemaKey, propName });
          prop.additionalProperties = {};
        }
      }
    }
  }

  return {
    emptySchemas,
    extensibleSchemas,
    forcedExtensibleSchemas,
    fixedAdditionalPropertiesTrue,
  };
}

function fixSchemaErrors(spec3) {
  const manualSchemaFixes = [];

  for (const schemaKey in spec3.components.schemas) {
    let schema = spec3.components.schemas[schemaKey];

    // Special fix for ByDurationExpiry
    if (schema.allOf && Object.keys(schema).length > 1) {
      const otherPropsKeys = Object.keys(schema).filter(k => k !== 'allOf');
      const otherProps = Object.fromEntries(otherPropsKeys.map(k => [k, schema[k]]));
      if (schemaKey === 'ByDurationExpiry') {
        schema.allOf.push(otherProps);
        for (const k of otherPropsKeys) {
          delete schema[k];
        }
        manualSchemaFixes.push({ schemaKey, propName: 'allOf' });
      }
    }

    if (schema.allOf && Object.keys(schema).length === 1 && schema.allOf.length === 1) {
      const one = schema.allOf[0];
      const isOneRef = one?.['$ref'] && Object.keys(one).length === 1;
      const refSchemaKey = isOneRef ? one['$ref'].replace('#/components/schemas/', '') : undefined;
      const refSchema = refSchemaKey ? spec3.components.schemas[refSchemaKey] : undefined;
      if (!isOneRef) {
        schema = one;
        spec3.components.schemas[schemaKey] = schema;
        manualSchemaFixes.push({ schemaKey, propName: 'allOf' });
      } else if (schemaKey === 'ByDateTimeExpiry') {
        // Special fix for ByDateTimeExpiry
        schema.allOf.push({
          description: refSchema.description,
        });
        manualSchemaFixes.push({ schemaKey, propName: 'allOf' });
      }
    }

    // Special fix for UserFactorPushTransactionSuccess which will not be generated without a fix
    if (schemaKey === 'UserFactorPushTransactionSuccess' && schema['$ref']) {
      schema['allOf'] = [
        { ... schema }
      ];
      delete schema['$ref'];
      manualSchemaFixes.push({ schemaKey });
    }
  }

  return {
    manualSchemaFixes
  };
}

function fixSchemaPropsErrors(spec3) {
  const manualSchemaPropsFixes = [];
  const badDateTimeProps = [];

  for (const schemaKey in spec3.components.schemas) {
    let schema = spec3.components.schemas[schemaKey];
    if (schema.properties) {
      for (let propName in schema.properties) {
        const prop = schema.properties[propName];

        // Special fix for error `attribute components.schemas.UserSchemaAttribute.items is missing`
        if (schemaKey === 'UserSchemaAttribute' && propName === 'default' && prop.oneOf) {
          let fixed = false;
          prop.oneOf.forEach((one, i) => {
            if (one.type === 'array' && !one.items) {
              prop.oneOf[i].items = { type: 'string' };
              fixed = true;
            }
          });
          if (fixed) {
            manualSchemaPropsFixes.push({ schemaKey, propName });
          }
        }

        // remove unnecessary type: 'object' for $ref
        // resolves error:
        // ERROR o.o.codegen.InlineModelResolver - Illegal schema found with $ref combined with other properties, no properties should be defined alongside a $ref
        if (prop['$ref'] && prop['type'] === 'object') {
          manualSchemaPropsFixes.push({ schemaKey, propName });
          delete prop['type'];
        }

        if (prop.format === 'date-time' && prop.default === 'Assigned') {
          delete prop.default;
          badDateTimeProps.push({ schemaKey, propName });
        }

        const isInlineModel = prop['type'] === 'object' && !!prop['properties']
          || !!prop['allOf'] && prop['allOf'].length > 1;
        if (isInlineModel) {
          const inlineClassName = schemaKey.replaceAll('AllOf', '') + _.upperFirst(propName.replace(/^_+/, ''));
          if (spec3.components.schemas[inlineClassName]) {
            const suggestedFlag = `--model-name-mappings ${schemaKey}_${propName}=${inlineClassName}Inline`;
            const isFlagExist = packageJson["scripts"]["build:generate"]?.includes(suggestedFlag);
            if (!isFlagExist) {
              console.warn('! Found possible naming collision between ', {schemaKey: inlineClassName}, ' and ', {schemaKey, propName});
              console.log(`  Consider using ${suggestedFlag}`);
            }
          }
        }
      }
    }
  }

  return {
    manualSchemaPropsFixes,
    badDateTimeProps
  };
}

function fixSchemaBadArrayProps(spec3) {
  const arrayPropsWithoutItems = [];

  for (const schemaKey in spec3.components.schemas) {
    let schema = spec3.components.schemas[schemaKey];

    if (schema.properties) {
      for (let propName in schema.properties) {
        const prop = schema.properties[propName];
        if (prop.type === 'array' && !prop.items) {
          // Manual fixes
          // TODO: should be fixed in okta-oas3
          if (schemaKey === 'CreateIamRoleRequest' && propName === 'permissions') {
            prop.items = {
              '$ref': '#/components/schemas/Permission'
            };
          } else if (schemaKey === 'DevicePostureChecks' && propName === 'include') {
            prop.items = {
              type: 'object',
              properties: {
                variableName: { type: 'string' },
                value: { type: 'string' }
              }
            };
          } else if (schemaKey === 'Error409' && propName === 'errorCauses') {
            prop.items = {
              '$ref': '#/components/schemas/ErrorCause'
            };
          } else if (['PersonalAppsBlockList', 'RealmAssignment', 'RealmProfile'].includes(schemaKey) && propName === 'domains') {
            prop.items = { type: 'string' };
          } else if (schemaKey === 'RegistrationInlineHookResponse' && propName === 'commands') {
            const registrationResponse = spec3.components.schemas['RegistrationResponse'];
            if (registrationResponse) {
              const items = registrationResponse.properties.commands?.items;
              if (items) {
                prop.items = _.clone(items);
              }
            }
            if (!prop.items) {
              prop.items = {
                '$ref': '#/components/schemas/InlineHookResponseCommands'
              };
            }
          } else {
            console.warn(`! Can't resolve item type for array ${schemaKey}.${propName}`);
          }

          arrayPropsWithoutItems.push({ schemaKey, propName, fixed: !!prop.items });
        }
      }
    }
  }

  return {
    arrayPropsWithoutItems,
  };
}

function loadSpec(yamlFile) {
  const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
  const yamlStrFixed = yamlStr
    .replaceAll('../oauth/dist/oauth.yaml', 'oauth.yaml')
    // to prevent warn in console
    // [main] WARN  o.o.c.l.AbstractTypeScriptClientCodegen - Error (model name matches existing language type) cannot be used as a model name. Renamed to ModelError
    .replaceAll("'#/components/schemas/Error'", "'#/components/schemas/ModelError'")
    .replace(/^[ ]{4}Error:$/m, '    ModelError:');

  const spec3 = yaml.load(yamlStrFixed);

  // `src/client.js` exports `Client` class which is a base class for performing API requests
  // But spec also have `Client` model which is not hoever yet used (it is used in `oauth.yaml` spec only)
  // If it's not used we can safely delete `Client` model to prevent breaking chnages
  const doesSpecUseClientSchema = yamlStrFixed.indexOf('\'#/components/schemas/Client\'') !== -1;
  if (!doesSpecUseClientSchema && isBackwardCompatibility) {
    delete spec3.components.schemas['Client'];
  }

  return {
    spec3, yamlStr
  };
}


async function main() {
  const yamlFile = process.argv[2] || 'spec/management.yaml';
  const yamlFixedFile = process.argv[3] || 'spec/management.yaml';

  const { spec3, yamlStr } = loadSpec(yamlFile);

  // Apply fixes
  const { pathRenames, pathParameterRenames, bodyNameRenames } = applyParameterRenames(spec3);
  const { apiTagChanges, operationRenames } = applyTagsAndOperationRenames(spec3);
  const { manualPathsFixes, customDescriminatorsForEndpoints } = fixResponses(spec3);
  const { ffAmends } = applyFFAments(spec3);
  const { typeMap } = buildTypeMap(spec3);
  const {
    emptySchemas, forcedExtensibleSchemas, fixedAdditionalPropertiesTrue
  } = fixExtensibleSchemas(spec3);
  const { manualSchemaFixes } = fixSchemaErrors(spec3);
  const { manualSchemaPropsFixes, badDateTimeProps } = fixSchemaPropsErrors(spec3);
  const { arrayPropsWithoutItems } = fixSchemaBadArrayProps(spec3);

  // Log fix results
  console.log(`Fixed empty schemas: ${emptySchemas.join(', ')}`);
  console.log(`Forced extensible schemas: ${forcedExtensibleSchemas.join(', ')}`);
  console.log('Fixed properties without items:', arrayPropsWithoutItems);
  console.log(`Fixed properties with bad date-time default value: ${badDateTimeProps.map(({ schemaKey, propName }) => `${schemaKey}.${propName}`).join(', ')}`);
  console.log(`Fixed additionalProperties=true: ${fixedAdditionalPropertiesTrue.map(({ schemaKey, propName }) => (propName ? `${schemaKey}.${propName}` : schemaKey)).join(', ')}`);
  console.log(`Fixed schemas: ${manualSchemaFixes.map(({ schemaKey, propName }) => (propName ? `${schemaKey}.${propName}` : schemaKey)).join(', ')}`);
  console.log(`Fixed schema props: ${manualSchemaPropsFixes.map(({ schemaKey, propName }) => `${schemaKey}.${propName}`).join(', ')}`);
  console.log('Fixed paths:', manualPathsFixes);
  console.log(`Merged using x-okta-feature-flag-amends: ${ffAmends.map(({ schemaKey, propName }) => (propName ? `${schemaKey}.${propName}` : schemaKey)).join(', ')}`);
  console.log('Manually added discriminatoes for endpoints:', customDescriminatorsForEndpoints);
  console.log('API tag changes: ', apiTagChanges);
  console.log('API operationId renames: ', operationRenames);
  console.log('API path renames: ', pathRenames);
  console.log('API path parameter renames: ', pathParameterRenames);
  console.log('API body name renames: ', bodyNameRenames);

  // Write fixed file
  const yamlFixedStr = yaml.dump(spec3, {
    lineWidth: -1
  });
  if (yamlStr !== yamlFixedStr) {
    fs.writeFileSync(yamlFixedFile, yamlFixedStr);
    console.log(`Fixed file ${yamlFixedFile}`);
  }

  // Write typeMap
  writeTypeMap(typeMap);
}

main();
