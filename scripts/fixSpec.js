import _ from 'lodash';
import fs from 'fs';
import yaml from 'js-yaml';


function patchSpec3(spec3) {
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
  const missingItems = [];
  const badDateTimeValues = [];

  for (const schemaKey in spec3.components.schemas) {
    const schema = spec3.components.schemas[schemaKey];
    if (schema.type === 'object' && !schema.properties) {
      schema.additionalProperties = {};
      emptySchemas.push(schemaKey);
    }
    if (schema['x-okta-extensible']) {
      extensibleSchemas.push(schemaKey);
    } else if (schemasToForceExtensible.includes(schemaKey)) {
      schema['x-okta-extensible'] = true;
      forcedExtensibleSchemas.push(schemaKey);
    }

    if (schema.properties) {
      for (let propName in schema.properties) {
        const prop = schema.properties[propName];
        if (prop.type === 'array' && !prop.items) {
          missingItems.push({
            schemaKey,
            propName,
          });

          // Fixes
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
          badDateTimeValues.push({
            schemaKey,
            propName,
          });
        }

        // Special fix for error `attribute components.schemas.UserSchemaAttribute.items is missing`
        if (schemaKey === 'UserSchemaAttribute' && propName === 'default') {
          if (prop.oneOf) {
            prop.oneOf.forEach((v, i) => {
              if (v.type === 'array' && !v.items) {
                prop.oneOf[i].items = { type: 'string' };;
              }
            });
          }
        }
      }
    }

    if (schema.discriminator) {
      const { mapping } = schema.discriminator;
      if (mapping) {
        const map = Object.keys(mapping).reduce((acc, key) => {
          const refSchemaKey = mapping[key].replace(/^#\/components\/schemas\/(.+)/, '$1');
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
    missingItems,
    badDateTimeValues,
  };
}

async function main() {
  const yamlFile = process.argv[2] || 'spec/management.yaml';
  const yamlFixedFile = process.argv[3] || 'spec/management.yaml';
  const typeMapMustache = 'templates/openapi-generator/model/typeMap.mustache';

  const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
  const yamlStrFixed = yamlStr.replaceAll('../oauth/dist/oauth.yaml', 'oauth.yaml');
  const spec3 = yaml.load(yamlStrFixed);

  const { typeMap, emptySchemas, extensibleSchemas, forcedExtensibleSchemas, missingItems, badDateTimeValues } = patchSpec3(spec3);
  console.log(`Fixed empty schemas: ${emptySchemas.join(', ')}`);
  console.log(`Found extensible schemas: ${extensibleSchemas.join(', ')}`);
  console.log(`Forced extensible schemas: ${forcedExtensibleSchemas.join(', ')}`);
  console.log(`Properties without items: ${missingItems.map(({ schemaKey, propName }) => `${schemaKey}.${propName}`).join(', ')}`);
  console.log(`Properties with bad date-time default value: ${badDateTimeValues.map(({ schemaKey, propName }) => `${schemaKey}.${propName}`).join(', ')}`);

  const yamlFixedStr = yaml.dump(spec3, {
    lineWidth: -1
  });
  fs.writeFileSync(yamlFixedFile, yamlFixedStr);
  console.log(`Fixed file ${yamlFixedFile}`);

  const typeMapStr = typeMap.map(([k, v, schemaKey, addPrefix]) =>
    addPrefix ? `  '${schemaKey}_${k}': ${v},` : `  '${k}': ${v},`
  ).join('\n');
  fs.writeFileSync(typeMapMustache, typeMapStr);
  console.log(`Fixed file ${typeMapMustache}`);
}

main();
