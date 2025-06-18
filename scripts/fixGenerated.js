import { replaceInFile } from 'replace-in-file';
import fs from 'fs';
import yaml from 'js-yaml';

const getSpec3Meta = (spec3) => {
  const discriminators = {};

  for (const schemaKey in spec3.components.schemas) {
    const schema = spec3.components.schemas[schemaKey];
    if (schema.discriminator) {
      const { propertyName, mapping } = schema.discriminator;
      if (!discriminators[propertyName]) {
        discriminators[propertyName] = {};
      }
      for (let k in mapping) {
        let v = mapping[k];
        const r = v.match(/^#\/components\/schemas\/(.+)/);
        if (r) {
          v = r[1];
        }
        mapping[k] = v;
      }
      discriminators[propertyName][schemaKey] = mapping;
    }
  }

  return {
    discriminators
  };
};

const removeIncorrectDiscriminators = async (spec3Meta) => {
  const decsriminatorNames = Object.keys(spec3Meta.discriminators);
  const totalRes = {};
  for (const decsriminatorName of decsriminatorNames) {
    const res = await removeIncorrectDiscriminator(decsriminatorName, spec3Meta);
    totalRes[decsriminatorName] = res;
  }
  return totalRes;
};

const removeIncorrectDiscriminator = async (discriminatorName, spec3Meta) => {
  const regex = new RegExp(`^(\\s*)(this\\.${discriminatorName} = '(.+?)';)`, "gm");
  const result = await replaceInFile({
    files: 'src/generated/models/*.ts',
    from: regex,
    to: (match, grpSpaces, grpLine, _grpValue, _fileLength, fileContents, _fileName) => {
      let [_, className, baseClassName] = fileContents.match(/class (\w+) extends (\w+)/m) || [];
      let mapping = spec3Meta.discriminators[discriminatorName]?.[baseClassName];
      while (!mapping) {
        let baseClassContents = fs.readFileSync('src/generated/models/' + baseClassName + '.ts', { encoding: 'utf8' });
        if (baseClassContents) {
          [_, _, baseClassName] = baseClassContents.match(/class (\w+) extends (\w+)/m) || [];
          if (baseClassName) {
            mapping = spec3Meta.discriminators[discriminatorName]?.[baseClassName];
          } else {
            mapping = {};
          }
        }
      }
      const foundKey = Object.keys(mapping || {}).find(k => mapping[k] === className);
      if (foundKey) {
        return grpSpaces + 'this.' + discriminatorName + ' = ' + JSON.stringify(foundKey) + ';';
      }
      if (!baseClassName) {
        return grpSpaces + '// ' + grpLine;
      }
      console.warn(`Can't detect key for descriminator "${discriminatorName}" for class ${className} (base ${baseClassName})`);
      return grpSpaces + '// ' + grpLine;
      // return match; // as-is
    }
  });
  return result
    .filter(result => result.hasChanged)
    .map(result => result.file);
};

async function main() {
  try {
    const yamlFile = 'spec/management.yaml';  
    const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
    const spec3 = yaml.load(yamlStr);
    const spec3Meta = getSpec3Meta(spec3);

    // remove lines that are breaking TS compilation (incorrectly generated discriminator properties)
    const removeIncorrectDiscriminatorsResult = await removeIncorrectDiscriminators(spec3Meta);
    console.log('Remove incorrect descriminators result =', removeIncorrectDiscriminatorsResult);


  } catch (error) {
    console.error('Error occurred:', error);
  }
}

main();
