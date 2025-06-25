// @ts-ignore
import _ from 'lodash';
import fs from 'fs';
import yaml from 'js-yaml';


function patchSpec3(spec3, openApiGeneratorVersion) {
  const schemasToForcePrefix = [
    'BehaviorRule',
    'PolicyRule',
    'InlineHookChannel',
  ];
  const schemasToForceExtensible = [
    'UserProfile',
  ];

  const typeMap = [];
  const emptySchemas = [];
  const extensibleSchemas = [];
  const forcedExtensibleSchemas = [];
  const arrayPropsWithoutItems = [];
  const badDateTimeProps = [];
  const fixedAdditionalPropertiesTrue = [];
  const manualFixes = [];
  const manualPathsFixes = [];
  const ffAmends = [];

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
                const schema = typedContent.schema;
                if (schema['$ref'] && schema.type === 'object') {
                  delete schema.type;
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
    const schema = spec3.components.schemas[schemaKey];

    if (schema.type === 'object' && !schema.properties && !schema.additionalProperties) {
      schema.additionalProperties = {};
      emptySchemas.push(schemaKey);
    }
    if (schema.additionalProperties === true) {
      // fix for openapi-generator v6
      fixedAdditionalPropertiesTrue.push({ schemaKey });
      schema.additionalProperties = {};
    }
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

    if (schema.properties) {
      for (let propName in schema.properties) {
        const prop = schema.properties[propName];
        if (prop.type === 'array' && !prop.items) {
          arrayPropsWithoutItems.push({ schemaKey, propName });

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
            console.warn(`Can't resolve item type for array ${schemaKey}.${propName}`);
          }
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
            manualFixes.push({ schemaKey, propName });
          }
        }

        ffAmendsMerge(prop, () => {
          ffAmends.push({ schemaKey, propName });
        });

        if (prop['$ref'] && prop['type'] === 'object') {
          manualFixes.push({ schemaKey, propName });
          delete prop['type'];
        }

        // // Special fix of `allOf` not being an array in UserSchemaPropertiesProfile for openapi-generator v6
        // if (schemaKey === 'UserSchemaPropertiesProfile' && propName === 'allOf' && prop.type === 'array' && prop.items) {
        //   const items = Array.isArray(prop.items) ? prop.items : [prop.items];
        //   const newProp = items;
        //   schema.properties[propName] = newProp;
        //   manualFixes.push({ schemaKey, propName });
        // }
      }
    }

    // Special fix for UserFactorPushTransactionSuccess which will not be generated without a fix
    if (schemaKey === 'UserFactorPushTransactionSuccess' && schema['$ref']) {
      schema['allOf'] = [
        { ... schema }
      ];
      delete schema['$ref'];
      manualFixes.push({ schemaKey });
    }

    if (schema.discriminator) {
      // x-okta-feature-flag-amends
      ffAmendsMerge(schema.discriminator, () => {
        ffAmends.push({ schemaKey, propName: "discriminator" });
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
        const addPrefix = hasNameConflicts || schemasToForcePrefix.includes(schemaKey);
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
    manualFixes,
    manualPathsFixes,
    ffAmends,
  };
}

async function main() {
  const openApiGeneratorVersion = process.argv[2] || '6';
  const yamlFile = process.argv[3] || 'spec/management.yaml';
  const yamlFixedFile = process.argv[4] || 'spec/management.yaml';
  const typeMapMustache = 'templates/openapi-generator' + (openApiGeneratorVersion === '7' ? '-7' : '') + '/model/typeMap.mustache';

  const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
  const yamlStrFixed = yamlStr
    .replaceAll('../oauth/dist/oauth.yaml', 'oauth.yaml')
    // to prevent warn in console
    // [main] WARN  o.o.c.l.AbstractTypeScriptClientCodegen - Error (model name matches existing language type) cannot be used as a model name. Renamed to ModelError
    .replaceAll("'#/components/schemas/Error'", "'#/components/schemas/ModelError'")
    .replace(/^    Error:$/m, '    ModelError:');
  const spec3 = yaml.load(yamlStrFixed);

  const {
    typeMap, emptySchemas, extensibleSchemas, forcedExtensibleSchemas, arrayPropsWithoutItems, badDateTimeProps, fixedAdditionalPropertiesTrue, manualFixes, manualPathsFixes, ffAmends
  } = patchSpec3(spec3, openApiGeneratorVersion);
  console.log(`Fixed empty schemas: ${emptySchemas.join(', ')}`);
  console.log(`Found extensible schemas: ${extensibleSchemas.join(', ')}`);
  console.log(`Forced extensible schemas: ${forcedExtensibleSchemas.join(', ')}`);
  console.log(`Properties without items: ${arrayPropsWithoutItems.map(({ schemaKey, propName }) => `${schemaKey}.${propName}`).join(', ')}`);
  console.log(`Properties with bad date-time default value: ${badDateTimeProps.map(({ schemaKey, propName }) => `${schemaKey}.${propName}`).join(', ')}`);
  console.log(`Fixed additionalProperties=true: ${fixedAdditionalPropertiesTrue.map(({ schemaKey, propName }) => (propName ? `${schemaKey}.${propName}` : schemaKey)).join(', ')}`);
  console.log(`Manual schema fixes: ${manualFixes.map(({ schemaKey, propName }) => (propName ? `${schemaKey}.${propName}` : schemaKey)).join(', ')}`);
  console.log('Manual paths fixes:', manualPathsFixes);
  console.log(`Merged using x-okta-feature-flag-amends: ${ffAmends.map(({ schemaKey, propName }) => (propName ? `${schemaKey}.${propName}` : schemaKey)).join(', ')}`);

  const yamlFixedStr = yaml.dump(spec3, {
    lineWidth: -1
  });
  fs.writeFileSync(yamlFixedFile, yamlFixedStr);
  console.log(`Fixed file ${yamlFixedFile}`);

  // TODO: remove
  const typeMapStr = typeMap.map(([k, v, schemaKey, addPrefix]) =>
    addPrefix ? `  '__${schemaKey}__${k}': ${v},` : `  '__${k}': ${v},`
  ).join('\n');
  fs.writeFileSync(typeMapMustache, typeMapStr);
  console.log(`Fixed file ${typeMapMustache}`);
}

main();
