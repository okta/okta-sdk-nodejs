/* eslint-disable quotes */

// This file is intended to fix generated code after running `yarn build:generate`
//
// - If enum value contains `-` it will be wrapped with `''` which is incorrect sequence in JS
//   We should replace `''` with `'` (eg. see `'respond-async'` for `Prefer` parameter for `deactivateUser` operation)
// - Some classes are generated with unnecassary `AllOf` in the name (eg. `DeviceListAllOfEmbedded`)
//   For convinience we remove it from the name (eg. rename to `DeviceListEmbedded`)
// - There are some unnecessary html escapings like &#39; for ' that triggers lint warnings
// - Apply body parameter renames according to mapping in `mappings/bodyNameRenames.cjs`

const fs = require('fs');
const path = require('path');
const globby = require('globby');
const yaml = require('js-yaml');
const _ = require('lodash');
const mappings = require('./mappings/index.cjs');

let replaceInFileSync; // to be imported from ESM 'replace-in-file'

const getSpecMeta = (spec) => {
  const discriminators = {};

  for (const schemaKey in spec.components.schemas) {
    const schema = spec.components.schemas[schemaKey];
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

const removeIncorrectDiscriminator = (discriminatorName, specMeta, oauthSpecMeta) => {
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
      let mapping = specMeta.discriminators[discriminatorName]?.[baseClassName];
      if (!mapping && baseClassName?.endsWith('1')) {
        // management.yaml has own `JsonWebKey` and refers to `JsonWebKey` in oauth.yaml which has class name `JsonWebKey1`
        mapping = oauthSpecMeta.discriminators[discriminatorName]?.[baseClassName.slice(0, -1)];
      }
      while (!mapping && baseClassName) {
        const baseClassContents = fs.readFileSync('src/generated/models/' + baseClassName + '.ts', { encoding: 'utf8' });
        [_, _, baseClassName] = baseClassContents.match(/class (\w+) extends (\w+)/m) || [];
        if (baseClassName) {
          mapping = specMeta.discriminators[discriminatorName]?.[baseClassName];
        } else {
          break; // it's base class in hierarchy
        }
      }
      const foundKeys = Object.keys(mapping || {}).filter(k => mapping[k] === className);
      const foundKey = foundKeys.length === 1 ? foundKeys[0] : undefined;
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

const removeIncorrectDiscriminators = (specMeta, oauthSpecMeta) => {
  const decsriminatorNames = [
    ...Object.keys(specMeta.discriminators),
    ...Object.keys(oauthSpecMeta.discriminators),
  ];
  const totalRes = {};
  for (const decsriminatorName of decsriminatorNames) {
    const res = removeIncorrectDiscriminator(decsriminatorName, specMeta, oauthSpecMeta);
    if (Object.keys(res).length) {
      totalRes[decsriminatorName] = res;
    }
  }
  return totalRes;
};

const fixEscapings = () => {
  const res = replaceInFileSync({
    files: 'src/generated/**/*.ts',
    from: /^.*throw new ApiException.*'.*&#39;.*'.*$/mg,
    to: (match) => {
      return match.replaceAll('&#39;', '\'');
    },
  });
  return res
    .filter(result => result.hasChanged)
    .map(result => result.file);
};

/**
 * Fix discriminated union types to make TypeScript properly narrow types based on discriminator property.
 *
 * The issue: OpenAPI Generator has a bug where it generates the 'type' discriminator property as
 * optional ('type'?:) even when the OpenAPI spec explicitly lists 'type' in the schema's 'required'
 * array. This prevents TypeScript from using it as a discriminant for union type narrowing.
 *
 * Example — without this fix:
 *   class ProtocolOidc { 'type'?: ProtocolOidcTypeEnum; ... }   // optional → no narrowing
 *
 * Example — after this fix:
 *   class ProtocolOidc { 'type': ProtocolOidcTypeEnum; ... }    // required → TypeScript can narrow
 *
 * Scope: Only targets schemas where ALL of the following are true in the OpenAPI spec:
 *   1. 'type' is listed in the schema's 'required' array.
 *   2. The 'type' property has exactly one enum value (i.e. it is a literal discriminator tag).
 *
 * This ensures we never accidentally break schemas where 'type' is legitimately optional
 * (e.g. CreateGroupRuleRequest, SamlAttributeStatement, AuthorizationServerPolicyRule, etc.).
 *
 * @param {object} spec      - Parsed management.yaml spec object
 * @param {object} oauthSpec - Parsed oauth.yaml spec object
 */
const fixDiscriminatedUnions = (spec, oauthSpec) => {
  // Build the set of class names that should have 'type' made required.
  const classesNeedingRequiredType = new Set();

  for (const specDoc of [spec, oauthSpec]) {
    if (!specDoc?.components?.schemas) continue;
    for (const schemaName in specDoc.components.schemas) {
      const schema = specDoc.components.schemas[schemaName];
      const required = schema.required || [];
      const typeProperty = (schema.properties || {}).type;
      // Only fix schemas where 'type' is explicitly required and is a single-value
      // enum (the hallmark of a discriminator literal tag).
      if (required.includes('type') && typeProperty?.enum?.length === 1) {
        classesNeedingRequiredType.add(schemaName);
      }
    }
  }

  if (classesNeedingRequiredType.size === 0) {
    return [];
  }

  // Target only the specific model files that need the fix — do NOT apply globally.
  // These files only exist during build (after build:generate, before build:emitTypes).
  const targetFiles = [...classesNeedingRequiredType].map(
    name => `src/generated/models/${name}.ts`
  );

  const result = replaceInFileSync({
    files: targetFiles,
    from: /^(\s+)'(type)'\?: (\w+TypeEnum);$/gm,
    to: (_match, indent, propName, enumType) => `${indent}'${propName}': ${enumType};`,
    // allowEmptyPaths prevents ENOENT if a target file doesn't exist
    // (e.g. when build:fixGenerated is run without build:generate, or
    // if a future spec change removes one of the target schemas).
    allowEmptyPaths: true,
  });

  return result
    .filter(r => r.hasChanged)
    .map(r => r.file);
};

const fixRespondAsync = () => {
  const res = replaceInFileSync({
    files: 'src/generated/**/*.ts',
    from: /''respond-async''/g,
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

const renameBodyParams = () => {
  const renames = [];
  for (const opId in mappings.bodyNameRenames) {
    const oldKeyName = Object.keys(mappings.bodyNameRenames[opId])[0];
    const isFirstLetterInUpperCase = oldKeyName[0] === oldKeyName[0].toUpperCase();
    if (isFirstLetterInUpperCase) {
      const newKeyName = _.lowerFirst(oldKeyName);
      renames.push({
        key:  oldKeyName,
        from: [
          new RegExp(`  ${newKeyName}: `, 'g'),
          new RegExp(`  ${newKeyName}\\?: `, 'g'),
          new RegExp(`param\\.${newKeyName},`, 'g'),
        ],
        to: [
          `  ${oldKeyName}: `,
          `  ${oldKeyName}?: `,
          `param.${oldKeyName},`,
        ]
      });
    }
  }

  const renamesResult = {};
  for (const rename of renames) {
    const { from, to, key } = rename;
    const res = replaceInFileSync({
      files: [
        'src/generated/types/ObjectParamAPI.ts',
      ],
      from,
      to,
    });
    renamesResult[key] = renamesResult[key] || res[0].hasChanged;
  }

  return renamesResult;
};

const fixApplicationDiscriminator = () => {
  // Fix ObjectSerializer to check 'name' property for OIN apps when signOnMode is ambiguous
  const oinAppMappings = {
    'google': 'GoogleApplication',
    'office365': 'Office365Application',
    'okta_org2org': 'Org2OrgApplication',
    'salesforce': 'SalesforceApplication',
    'slack': 'SlackApplication',
    'trendmicroapexoneservice': 'TrendMicroApexOneServiceApplication',
    'zscaler_byz': 'ZscalerbyzApplication'
  };

  // Read the ObjectSerializer.ts file
  const objSerializerPath = 'src/generated/models/ObjectSerializer.ts';
  if (!fs.existsSync(objSerializerPath)) {
    console.warn(`ObjectSerializer.ts not found at ${objSerializerPath}, skipping Application discriminator fix`);
    return { modified: false, skipped: true };
  }
  
  let content = fs.readFileSync(objSerializerPath, { encoding: 'utf8' });
  let modifications = 0;

  // 1. Add OIN app name mappings to classMap after __SAML_2_0
  const samlMappingRegex = /('__SAML_2_0': SamlApplication,)/;
  if (content.match(samlMappingRegex)) {
    const oinMappings = Object.entries(oinAppMappings)
      .map(([name, className]) => `  '__${name}': ${className}`)
      .join(',\n');
    
    content = content.replace(
      samlMappingRegex,
      `$1\n${oinMappings},`
    );
    modifications++;
  }

  // 2. Modify findCorrectType to check 'name' property for Application types with SAML signOnMode
  const findCorrectTypeRegex = /(if \(mapping != undefined && mapping\[discriminatorType\]\) \{\s+return mapping\[discriminatorType\];[^\}]+\})/;
  const findCorrectTypeMatch = content.match(findCorrectTypeRegex);
  
  if (findCorrectTypeMatch) {
    // Insert check for Application name property before the existing discriminator checks
    const newCode = `// For Application type, also check 'name' property for OIN apps
                  if (expectedType === 'Application' && data['name']) {
                      const nameMapping = typeMap[\`__\${data['name']}\`];
                      if (nameMapping) {
                          return \`__\${data['name']}\`;
                      }
                  }
                  ${findCorrectTypeMatch[1]}`;
    
    content = content.replace(findCorrectTypeRegex, newCode);
    modifications++;
  }

  if (modifications > 0) {
    fs.writeFileSync(objSerializerPath, content, { encoding: 'utf8' });
    return { modified: true, file: objSerializerPath, modifications };
  }
  
  return { modified: false };
};

async function main() {
  try {
    // Use ESM import
    ({ replaceInFileSync } = await import('replace-in-file'));

    const yamlFile = 'spec/management.yaml';
    const yamlStr = fs.readFileSync(yamlFile, { encoding: 'utf8' });
    const spec = yaml.load(yamlStr);
    const specMeta = getSpecMeta(spec);

    // management.yaml has a reference to `JsonWebKey` in oauth.yaml
    const oauthYamlFile = 'spec/oauth.yaml';
    const oauthYamlStr = fs.readFileSync(oauthYamlFile, { encoding: 'utf8' });
    const oauthSpec = yaml.load(oauthYamlStr);
    const oauthSpecMeta = getSpecMeta(oauthSpec);

    // remove lines that are breaking TS compilation (incorrectly generated discriminator properties)
    const removeIncorrectDiscriminatorsResult = removeIncorrectDiscriminators(specMeta, oauthSpecMeta);
    console.log('Fix/remove incorrect discriminators result =', removeIncorrectDiscriminatorsResult);

    // fix Application discriminator to support OIN apps by name
    const fixApplicationDiscriminatorResult = fixApplicationDiscriminator();
    console.log('Fix Application discriminator for OIN apps =', fixApplicationDiscriminatorResult);

    // fix '' with '
    const fixRespondAsyncResult = fixRespondAsync();
    console.log('Fix \'respond-async\' =', fixRespondAsyncResult);

    // replace body parameter names
    const bodyParameterRenames = renameBodyParams();
    console.log('Replace body parameter names =', bodyParameterRenames);

    // remove *AllOf
    const removeAllOfResult = removeAllOf();
    console.log('Remove *AllOf = ' + JSON.stringify(removeAllOfResult, null, 4));

    // fix some unnecessary html escapings like &#39; for '
    const fixEscapingsResult = fixEscapings();
    console.log('Fix escapings =', fixEscapingsResult);

    // fix discriminated union types to enable proper type narrowing
    // Pass both specs so the function can target only schemas where 'type' is truly required.
    const fixDiscriminatedUnionsResult = fixDiscriminatedUnions(spec, oauthSpec);
    console.log('Fix discriminated unions =', fixDiscriminatedUnionsResult);

  } catch (error) {
    console.error('Error occurred:', error);
  }
}

main();
