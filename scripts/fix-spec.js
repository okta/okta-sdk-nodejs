const _ = require('lodash');
const fs = require('fs');
const yaml = require('js-yaml');


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
  };
}

async function main() {
  const yamlFile = process.argv[2] || 'spec/management.yaml';
  const yamlFixedFile = process.argv[3] || 'spec/management.yaml';
  const typeMapMustache = 'templates/openapi-generator/model/typeMap.mustache';

  const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
  const spec3 = yaml.load(yamlStr);

  const { typeMap, emptySchemas, extensibleSchemas, forcedExtensibleSchemas } = patchSpec3(spec3);
  console.log(`Fixed empty schemas: ${emptySchemas.join(', ')}`);
  console.log(`Found extensible schemas: ${extensibleSchemas.join(', ')}`);
  console.log(`Forced extensible schemas: ${forcedExtensibleSchemas.join(', ')}`);

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
