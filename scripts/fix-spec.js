const _ = require('lodash');
const fs = require('fs');
const yaml = require('js-yaml');


function patchSpec3(spec3) {
  for (const schemaKey in spec3.components.schemas) {
    const schema = spec3.components.schemas[schemaKey];
    if (schema.type === 'object' && !schema.properties) {
      schema.additionalProperties = {};
      console.log(`Empty schema ${schemaKey}`);
    }
    if (schemaKey === 'UserProfile') {
      schema['x-okta-extensible'] = true;
    }
    if (schema['x-okta-extensible']) {
      console.log(`Extensible schema ${schemaKey}`);
    }

    if (schema.discriminator) {
      const { mapping } = schema.discriminator;
      if (mapping) {
        // const typeMap = Object.keys(mapping).reduce((acc, key) => {
        //   const refSchemaKey = mapping[key].replace(/^#\/components\/schemas\/(.+)/, '$1');
        //   return {...acc, [key]: refSchemaKey};
        // }, {});
        // for (const [k, v] of Object.entries(typeMap)) {
        //   // todo: add to ObjectSerializer
        // }
      }
    }
  }



}

async function main() {
  const yamlFile = process.argv[2] || 'spec/management.yaml';
  const yamlFixedFile = process.argv[3] || 'spec/management.yaml';
  const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
  const spec3 = yaml.load(yamlStr);
  patchSpec3(spec3);
  const yamlFixedStr = yaml.dump(spec3, {
    lineWidth: -1
  });
  fs.writeFileSync(yamlFixedFile, yamlFixedStr);
}

main();
