/* eslint-disable quotes */

const _ = require('lodash');
const fs = require('fs');
const yaml = require('js-yaml');
const { apiConsolidation } = require('./mappings/apiConsolidation.cjs');

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

  if (schema['type'] === 'array' && schema['items']['oneOf']?.length > 1) {
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

function patchSpec3(spec3) {
  // Schemas to add `x-okta-extensible`
  const schemasToForceExtensible = [
    'UserProfile',
  ];

  // See file `typeMap.mustache` which contains type mappings based on discriminator values.
  // For simplicity most of keys in mappings are simple, but you can choose classes to add its name as a prefix
  //  to be more explicit and prevent possible naming collision issues.
  const schemasToForceDiscriminatorPrefixInTypeMap = [
    'BehaviorRule',
    'PolicyRule',
    'InlineHookChannel',
  ];

  // Some schemas can have extra properties and/or enum values based on FF so we need to merge schemas with mixins based on FF
  const ffAmendsMerge = (obj, onSuccess) => {
    if (obj?.['x-okta-feature-flag-amends']) {
      const ff = Object.keys(obj['x-okta-feature-flag-amends'])[0];
      _.mergeWith(obj, obj['x-okta-feature-flag-amends'][ff], (objValue, srcValue) => {
        if (Array.isArray(objValue)) {
          return [...new Set(objValue.concat(srcValue))];
        }
      });
      onSuccess();
    }
  };

  const typeMap = [];
  const emptySchemas = [];
  const extensibleSchemas = [];
  const forcedExtensibleSchemas = [];
  const arrayPropsWithoutItems = [];
  const badDateTimeProps = [];
  const fixedAdditionalPropertiesTrue = [];
  const manualSchemaFixes = [];
  const manualPathsFixes = [];
  const ffAmends = [];
  const customDescriminatorsForEndpoints = [];
  const apiTagChanges = {};

  for (const httpPath in spec3.paths) {
    for (const httpMethod in spec3.paths[httpPath]) {
      if (!['parameters'].includes(httpMethod)) {
        const endpoint = spec3.paths[httpPath][httpMethod];
        // API consilidation
        if (endpoint.tags) {
          const oldTags = endpoint.tags;
          const newTags = oldTags.map(tag => {
            const groupTags = [];
            for (const groupApiName in apiConsolidation) {
              if (apiConsolidation[groupApiName].apis.includes(tag) && groupApiName !== tag) {
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
        // Modify request
        if (endpoint?.requestBody?.content) {
          for (const contentType in endpoint.requestBody.content) {
            const typedContent = endpoint.requestBody.content[contentType];
            if (typedContent?.schema) {
              const schema = typedContent.schema;
              if (schema['oneOf'] && schema.type === 'object' && Object.keys(schema).length === 2) {
                delete schema.type;
                manualPathsFixes.push({ httpMethod, httpPath, contentType, key: schema });
              }
            }
          }
        }
        // Modify response
        for (const responseCode in endpoint.responses) {
          const response = endpoint.responses[responseCode];
          if (response?.content) {
            for (const mimeType in response?.content) {
              const typedContent = response.content[mimeType];
              if (typedContent?.schema) {
                let schema = typedContent.schema;
                const isListEndpoint = endpoint.operationId && endpoint.operationId.startsWith('list') && endpoint.operationId.endsWith('s')
                  && httpMethod === 'get' && responseCode === '200';
                const isOneRef = schema['$ref'] && Object.keys(schema).length === 1;
                const refSchemaKey = isOneRef ? schema['$ref'].replace('#/components/schemas/', '') : undefined;

                if (schema['$ref'] && schema.type === 'object' && Object.keys(schema).length === 2) {
                  delete schema.type;
                  manualPathsFixes.push({ httpMethod, httpPath, responseCode, mimeType, key: schema });
                }
                if (schema['oneOf'] && schema.type === 'object' && Object.keys(schema).length === 2) {
                  delete schema.type;
                  manualPathsFixes.push({ httpMethod, httpPath, responseCode, mimeType, key: schema });
                }

                // Special fix to add discriminators
                const maybeAddedCustomDiscriminator = addCustomDiscriminatorToResponse(schema);
                if (maybeAddedCustomDiscriminator) {
                  customDescriminatorsForEndpoints.push({ httpMethod, httpPath, discriminator: maybeAddedCustomDiscriminator });
                }

                // Special fix for /api/v1/policies - should return array (Policies, not Policy)
                if (httpPath === '/api/v1/policies' && isListEndpoint && refSchemaKey === 'Policy') {
                  schema = {
                    type: 'array',
                    items: schema
                  };
                  typedContent.schema = schema;
                  manualPathsFixes.push({ httpMethod, httpPath, responseCode, mimeType, key: schema });
                }
              }
            }
          }
        }
      }
    }
  }

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

    // x-okta-feature-flag-amends
    ffAmendsMerge(schema, () => {
      ffAmends.push({ schemaKey });
    });

    if (schema.oneOf) {
      schema.oneOf.forEach((one, i) => {
        // x-okta-feature-flag-amends
        ffAmendsMerge(one, () => {
          ffAmends.push({ schemaKey, propName: `oneOf[${i}]` });
        });
      });
    }

    if (schema.allOf) {
      schema.allOf.forEach((one, i) => {
        // x-okta-feature-flag-amends
        ffAmendsMerge(one, () => {
          ffAmends.push({ schemaKey, propName: `allOf[${i}]` });
        });
      });
    }

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

    if (schema.properties) {
      for (let propName in schema.properties) {
        const prop = schema.properties[propName];
        if (prop.type === 'array' && !prop.items) {
          // Manual fixes
          // TODO: check again, prepare PR for okta-oas3
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
            prop.items = {
              '$ref': '#/components/schemas/InlineHookResponseCommands'
            };
          } else {
            console.warn(`! Can't resolve item type for array ${schemaKey}.${propName}`);
          }

          arrayPropsWithoutItems.push({ schemaKey, propName, fixed: !!prop.items });
        }

        if (prop.format === 'date-time' && prop.default === 'Assigned') {
          delete prop.default;
          badDateTimeProps.push({ schemaKey, propName });
        }

        if (prop.additionalProperties === true) {
          // fix for openapi-generator v6
          fixedAdditionalPropertiesTrue.push({ schemaKey, propName });
          prop.additionalProperties = {};
        }

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
            manualSchemaFixes.push({ schemaKey, propName });
          }
        }

        // x-okta-feature-flag-amends
        ffAmendsMerge(prop, () => {
          ffAmends.push({ schemaKey, propName });
        });

        if (prop['$ref'] && prop['type'] === 'object') {
          manualSchemaFixes.push({ schemaKey, propName });
          delete prop['type'];
        }

        const isInlineModel = prop['type'] === 'object' && !!prop['properties']
          || !!prop['allOf'] && prop['allOf'].length > 1;
        if (isInlineModel) {
          const inlineClassName = schemaKey.replaceAll('AllOf', '') + _.upperFirst(propName.replace(/^_+/, ''));
          if (spec3.components.schemas[inlineClassName]) {
            console.warn('! Found possible naming collision between ', {schemaKey: inlineClassName}, ' and ', {schemaKey, propName});
            console.log(`  Consider using --model-name-mappings ${schemaKey}_${propName}=${inlineClassName}Inline`);
          }
        }
      }
    }

    if (schema.discriminator) {
      // x-okta-feature-flag-amends
      ffAmendsMerge(schema.discriminator, () => {
        ffAmends.push({ schemaKey, propName: 'discriminator' });
      });

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
    typeMap,
    emptySchemas,
    extensibleSchemas,
    forcedExtensibleSchemas,
    arrayPropsWithoutItems,
    badDateTimeProps,
    fixedAdditionalPropertiesTrue,
    manualSchemaFixes,
    manualPathsFixes,
    ffAmends,
    customDescriminatorsForEndpoints,
    apiTagChanges,
  };
}

async function main() {
  const yamlFile = process.argv[2] || 'spec/management.yaml';
  const yamlFixedFile = process.argv[3] || 'spec/management.yaml';
  const typeMapMustache = 'templates/openapi-generator/model/typeMap.mustache';

  const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
  const yamlStrFixed = yamlStr
    .replaceAll('../oauth/dist/oauth.yaml', 'oauth.yaml')
    // to prevent warn in console
    // [main] WARN  o.o.c.l.AbstractTypeScriptClientCodegen - Error (model name matches existing language type) cannot be used as a model name. Renamed to ModelError
    .replaceAll("'#/components/schemas/Error'", "'#/components/schemas/ModelError'")
    .replace(/^[ ]{4}Error:$/m, '    ModelError:');
  const spec3 = yaml.load(yamlStrFixed);

  const {
    typeMap, emptySchemas, extensibleSchemas, forcedExtensibleSchemas, arrayPropsWithoutItems, badDateTimeProps,
    fixedAdditionalPropertiesTrue, manualSchemaFixes, manualPathsFixes, ffAmends, customDescriminatorsForEndpoints, apiTagChanges
  } = patchSpec3(spec3);

  console.log(`Fixed empty schemas: ${emptySchemas.join(', ')}`);
  console.log(`[Note] Found extensible schemas: ${extensibleSchemas.join(', ')}`);
  console.log(`Forced extensible schemas: ${forcedExtensibleSchemas.join(', ')}`);
  console.log(`Properties without items: ${arrayPropsWithoutItems.map(({ schemaKey, propName }) => `${schemaKey}.${propName}`).join(', ')}`);
  console.log(`Fixed properties with bad date-time default value: ${badDateTimeProps.map(({ schemaKey, propName }) => `${schemaKey}.${propName}`).join(', ')}`);
  console.log(`Fixed additionalProperties=true: ${fixedAdditionalPropertiesTrue.map(({ schemaKey, propName }) => (propName ? `${schemaKey}.${propName}` : schemaKey)).join(', ')}`);
  console.log(`Manual schema fixes: ${manualSchemaFixes.map(({ schemaKey, propName }) => (propName ? `${schemaKey}.${propName}` : schemaKey)).join(', ')}`);
  console.log('Manual paths fixes:', manualPathsFixes);
  console.log(`Merged using x-okta-feature-flag-amends: ${ffAmends.map(({ schemaKey, propName }) => (propName ? `${schemaKey}.${propName}` : schemaKey)).join(', ')}`);
  console.log('Manually added discriminatoes for endpoints:', customDescriminatorsForEndpoints);
  console.log('API tag changes: ', apiTagChanges);

  const yamlFixedStr = yaml.dump(spec3, {
    lineWidth: -1
  });
  fs.writeFileSync(yamlFixedFile, yamlFixedStr);
  console.log(`Fixed file ${yamlFixedFile}`);

  // TODO: remove?
  // Previously we had to use type mappings manually added in typeMap.mustache
  // But now classes can have `discriminator` and `mapping` static properties (eg. see model `generated/models/Policy.js`)
  // If it now resolves previous issues then typeMap file and corresponding code should be removed
  const typeMapStr = typeMap.map(([k, v, schemaKey, addPrefix]) =>
    addPrefix ? `  '__${schemaKey}__${k}': ${v},` : `  '__${k}': ${v},`
  ).join('\n');
  fs.writeFileSync(typeMapMustache, typeMapStr);
  console.log(`Fixed file ${typeMapMustache}`);
}

main();
