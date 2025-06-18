import { replaceInFileSync } from 'replace-in-file';
import fs from 'fs';
import path from 'path';
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
  let result = {};
  replaceInFileSync({
    files: 'src/generated/models/*.ts',
    from: regex,
    to: (match, grpSpaces, grpLine, grpValue, _fileLength, fileContents, pathName) => {
      const fileName = path.basename(pathName, path.extname(pathName));
      let [_, className, parentClassName] = fileContents.match(/class (\w+) extends (\w+)/m) || [];
      className = className || fileName;
      let baseClassName = parentClassName;
      let mapping = spec3Meta.discriminators[discriminatorName]?.[baseClassName];
      while (!mapping && baseClassName) {
        const baseClassContents = fs.readFileSync('src/generated/models/' + baseClassName + '.ts', { encoding: 'utf8' });
        [_, _, baseClassName] = baseClassContents.match(/class (\w+) extends (\w+)/m) || [];
        if (baseClassName) {
          mapping = spec3Meta.discriminators[discriminatorName]?.[baseClassName];
        } else {
          break; // it's base class in hierarchy
        }
      }
      const foundKey = Object.keys(mapping || {}).find(k => mapping[k] === className);
      result[fileName] = [grpValue, foundKey];
      if (foundKey) {
        return grpSpaces + 'this.' + discriminatorName + ' = ' + JSON.stringify(foundKey) + ';';
      }
      if (parentClassName) {
        console.warn(`Can't detect key for descriminator "${discriminatorName}" for ${fileName}`);
      }
      return grpSpaces + '// ' + grpLine;
      // return match; // as-is
    }
  });
  return result;
};

async function main() {
  try {
    const yamlFile = 'spec/management.yaml';  
    const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
    const spec3 = yaml.load(yamlStr);
    const spec3Meta = getSpec3Meta(spec3);

    // remove lines that are breaking TS compilation (incorrectly generated discriminator properties)
    const removeIncorrectDiscriminatorsResult = await removeIncorrectDiscriminators(spec3Meta);
    console.log('Fix/remove incorrect descriminators result =', removeIncorrectDiscriminatorsResult);


  } catch (error) {
    console.error('Error occurred:', error);
  }
}

main();
