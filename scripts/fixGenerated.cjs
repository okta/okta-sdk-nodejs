/* eslint-disable quotes */

const fs = require('fs');
const path = require('path');
const globby = require('globby');
const yaml = require('js-yaml');

let replaceInFileSync; // to be imported from ESM 'replace-in-file'

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

const removeIncorrectDiscriminator = (discriminatorName, spec3Meta) => {
  const regex = new RegExp(`^(\\s*)(this\\.${discriminatorName} = '(.+?)';)`, 'gm');
  let result = {};
  const _res = replaceInFileSync({
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
      const fundKeys = Object.keys(mapping || {}).filter(k => mapping[k] === className);
      const foundKey = fundKeys.length === 1 ? fundKeys[0] : undefined;
      result[fileName] = [grpValue, foundKey];
      if (foundKey) {
        return grpSpaces + 'this.' + discriminatorName + ' = ' + JSON.stringify(foundKey) + ';';
      }
      if (parentClassName) {
        console.warn(`! Can't detect key for discriminator "${discriminatorName}" for ${fileName}`);
      }
      return grpSpaces + '// ' + grpLine;
      // return match; // as-is
    }
  });
  return result;
};

const removeIncorrectDiscriminators = (spec3Meta) => {
  const decsriminatorNames = [
    ...Object.keys(spec3Meta.discriminators),
    // for JsonWebKey1
    'kty'
  ];
  const totalRes = {};
  for (const decsriminatorName of decsriminatorNames) {
    const res = removeIncorrectDiscriminator(decsriminatorName, spec3Meta);
    if (Object.keys(res).length) {
      totalRes[decsriminatorName] = res;
    }
  }
  return totalRes;
};

const fixRespondAsync = () => {
  const res = replaceInFileSync({
    files: 'src/generated/**/*.ts',
    from: '\'\'respond-async\'\'',
    to: '\'respond-async\'',
  });
  return res
    .filter(result => result.hasChanged)
    .map(result => result.file);
};

const removeAllOf = () => {
  // eslint-disable-next-line quotes
  const regexExport = new RegExp("\\s*export \\* from '[^']+/\\w+AllOf';?", 'g');
  // eslint-disable-next-line quotes
  const regexImport = new RegExp("\\s*import {\\s*\\w+(\\s*,\\s*\\w+)*\\s*} from '[^']+/\\w+AllOf';?", 'g');
  // eslint-disable-next-line quotes
  const regexTypeMap = new RegExp("\\s*'\\w+AllOf':\\s+\\w+AllOf,", 'g');
  const regexAllOfInsideClass = new RegExp('(\\w+)AllOf(\\w+)(?<!AllOf)(?=\\W|$)', 'g');
  const regexAllOfInsideFileName = new RegExp('^(\\w+)AllOf(\\w+)(?<!AllOf)$', '');
  const regexAllOfFileName = new RegExp('^(\\w+)AllOf$', '');

  const allOfClasses = {};
  const renamedFiles = {};
  const removedFiles = [];

  // Find files with "AllOf" in the name
  const allOfFiles = globby.sync([
    'src/generated/**/*AllOf*.ts',
    'src/generated/**/*AllOf*.md',
  ]);

  // Rename files having "AllOf" in the middle
  // Remove files ending with "AllOf"
  for (const filePath of allOfFiles) {
    const fileName = path.basename(filePath, path.extname(filePath));
    let newFileName = allOfClasses[fileName];
    if (!newFileName && regexAllOfInsideFileName.test(fileName)) {
      // there can be multiple occurrences of "AllOf" in class
      newFileName = fileName.replaceAll(/AllOf/g, '');
      allOfClasses[fileName] = newFileName;
    }

    if (newFileName) {
      const newFileFullName = newFileName + path.extname(filePath);
      const newFilePath = path.join(path.dirname(filePath), newFileFullName);
      fs.renameSync(filePath, newFilePath);
      renamedFiles[filePath] = newFileName;
    } else if (regexAllOfFileName.test(fileName)) {
      fs.unlinkSync(filePath);
      removedFiles.push(filePath);
    }
  }

  // Remove occurrences of classes ending with "AllOf"
  const resRemove = replaceInFileSync({
    files: [
      'src/generated/**/*.ts',
      'src/generated/**/*.md',
    ],
    from: [regexExport, regexImport, regexTypeMap],
    to: '',
  });

  // Rename occurrences of classes having "AllOf" in the middle
  const resReplace = replaceInFileSync({
    files: [
      'src/generated/**/*.ts',
      'src/generated/**/*.md',
    ],
    from: regexAllOfInsideClass,
    // eslint-disable-next-line no-unused-vars
    to: (match, _grp1, _grp2, _fileLength, fileContents, pathName) => {
      if (!allOfClasses[match]) {
        // there can be multiple occurrences of "AllOf" in class
        allOfClasses[match] = match.replaceAll(/AllOf/g, '');
      }
      return allOfClasses[match];
    },
  });

  // result
  let changedFiles = [...resRemove, ...resReplace]
    .filter(result => result.hasChanged)
    .map(result => result.file);
  changedFiles = [...new Set(changedFiles)];

  return {
    changedFiles,
    renamedFiles,
    removedFiles,
  };
};

async function main() {
  try {
    ({ replaceInFileSync } = await import('replace-in-file'));
    // const openApiGeneratorVersion = process.argv[2] || '6';
    const yamlFile = 'spec/management.yaml';
    const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
    const spec3 = yaml.load(yamlStr);
    const spec3Meta = getSpec3Meta(spec3);

    // remove lines that are breaking TS compilation (incorrectly generated discriminator properties)
    const removeIncorrectDiscriminatorsResult = removeIncorrectDiscriminators(spec3Meta);
    console.log('Fix/remove incorrect discriminators result =', removeIncorrectDiscriminatorsResult);

    // fix '' with '
    const fixRespondAsyncResult = fixRespondAsync();
    console.log('Fix \'respond-async\' =', fixRespondAsyncResult);

    // remove *AllOf
    const removeAllOfResult = removeAllOf();
    console.log('Remove *AllOf = ' + JSON.stringify(removeAllOfResult, null, 4));

  } catch (error) {
    console.error('Error occurred:', error);
  }
}

main();
