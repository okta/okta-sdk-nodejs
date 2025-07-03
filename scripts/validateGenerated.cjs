const _ = require('lodash');
const ts = require('typescript');
const fs = require('fs');
const yaml = require('js-yaml');

const fileObjectParamAPI = './src/generated/types/ObjectParamAPI.js';
const pathGeneratedAPIs = './src/generated/apis/';
const fileClient = './src/client.js';
const fileSpec = './spec/management.yaml';

// Parse `client.js` to build list of imported apis
function parseClient() {
  let usedApiClasses = [];
  const file = fileClient;
  const program = ts.createProgram([file], { allowJs: true });
  const sourceFile = program.getSourceFile(file);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  ts.forEachChild(sourceFile, rootNode => {
    if (rootNode.kind === ts.SyntaxKind.VariableStatement) {
      const text = printer.printNode(ts.EmitHint.Unspecified, rootNode, sourceFile);
      if (text.includes('require("./generated")')) {
        usedApiClasses = rootNode.declarationList.declarations?.[0].name.elements.map(e => e.name?.text);
      }
    }
  });
  return {
    usedApiClasses,
  };
}

// Parse `ObjectParamAPI.js` to build list of params for each method in each api
// Parse APIs to get paths for each method
function parseGeneratedClient() {
  const file = fileObjectParamAPI;
  const program = ts.createProgram([file], { allowJs: true });
  const sourceFile = program.getSourceFile(file);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const apis = {};

  ts.forEachChild(sourceFile, rootNode => {
    const objClassName = rootNode?.name?.text;
    if (rootNode.kind === ts.SyntaxKind.ClassDeclaration && objClassName?.indexOf('Api') !== -1 && objClassName?.indexOf('Object') === 0) {
      const className = objClassName.slice('Object'.length);
      ts.forEachChild(rootNode, funcNode => {
        const methodName = funcNode?.name?.text;
        if (funcNode.kind === ts.SyntaxKind.MethodDeclaration) {
          const text = printer.printNode(ts.EmitHint.Unspecified, funcNode, sourceFile);
          const regexReturn = /return this\.api\.(\w+)\((.+?)\)/;
          const returnMatch = text.match(regexReturn);
          let params;
          if (returnMatch) {
            params = returnMatch[2].split(', ').filter(arg => arg.startsWith('param.')).map(arg => arg.split('param.')[1]);
            if (!apis[className]) {
              apis[className] = {};
            }
            apis[className][methodName] = {
              params
            };
          }
        }
      });
    }
  });

  for (const className in apis) {
    const apiFile = pathGeneratedAPIs + className + '.js';
    const apiProgram = ts.createProgram([file], { allowJs: true });
    const apiSourceFile = apiProgram.getSourceFile(apiFile);
    ts.forEachChild(apiSourceFile, rootNode => {
      // Process RequestFactory class
      if (rootNode.kind === ts.SyntaxKind.ClassDeclaration && rootNode?.name?.text?.indexOf('RequestFactory') !== -1) {
        ts.forEachChild(rootNode, funcNode => {
          const methodName = funcNode?.name?.text;
          if (funcNode.kind === ts.SyntaxKind.MethodDeclaration) {
            const apiMeta = apis[className][methodName];
            const text = printer.printNode(ts.EmitHint.Unspecified, funcNode, apiSourceFile);

            const regexMethod = /makeRequestContext\(path, .*HttpMethodEnum\.(\w+)/;
            const methodMatch = text.match(regexMethod);
            if (methodMatch) {
              const httpMethod = methodMatch[1].toLowerCase();
              Object.assign(apiMeta, {
                httpMethod,
              });
            }

            const regexPath = /const path = (".+");/;
            const pathMatch = text.match(regexPath);
            if (pathMatch) {
              const path = JSON.parse(pathMatch[1]);
              const regexPathParams = /{(.+?)}/g;
              const pathParams = [];
              const starPath = path.replaceAll(regexPathParams, (_paramWithBrackets, paramName) => {
                pathParams.push(paramName);
                return '*';
              });

              const headerParams = [];
              const regexHeaderParams = /requestContext\.setHeaderParam\((".+?"),.*ObjectSerializer\.serialize\((.+?),/g;
              const headerParamsMatch = text.matchAll(regexHeaderParams);
              if (headerParamsMatch) {
                for (const m of headerParamsMatch) {
                  headerParams.push(m[2]);
                }
              }

              const queryParams = [];
              const regexQueryParams = /requestContext\.setQueryParam\((".+?"),/g;
              const queryParamsMatch = text.matchAll(regexQueryParams);
              if (queryParamsMatch) {
                for (const m of queryParamsMatch) {
                  queryParams.push(JSON.parse(m[1]));
                }
              }

              let bodyParams = [...apiMeta.params].filter(p => !pathParams.includes(p) && !queryParams.includes(p) && !headerParams.includes(p));
              if (apiMeta.httpMethod && apiMeta.httpMethod !== 'get' && bodyParams.length > 1) {
                console.warn(`Detected multiple body params for ${className}.${methodName} in generated client:`, bodyParams);
              }
              if (!bodyParams.length) {
                bodyParams = undefined;
              }
              Object.assign(apiMeta, {
                path,
                starPath,
                pathParams,
                queryParams,
                bodyParams,
              });
            }
          }
        });
      }
      // Process ResponseProcessor class
      if (rootNode.kind === ts.SyntaxKind.ClassDeclaration && rootNode?.name?.text?.indexOf('ResponseProcessor') !== -1) {
        ts.forEachChild(rootNode, funcNode => {
          const methodName = funcNode?.name?.text;
          if (funcNode.kind === ts.SyntaxKind.MethodDeclaration) {
            const apiMeta = apis[className][methodName];
            const text = printer.printNode(ts.EmitHint.Unspecified, funcNode, apiSourceFile);

            const regexBody = /const body = .*?ObjectSerializer\.deserialize\(.*?ObjectSerializer\.parse\(.*\), (".+?"), ".*"\);\s*return body;/m;
            const bodyMatch = text.match(regexBody);
            if (bodyMatch) {
              let returnType = JSON.parse(bodyMatch[1]);
              if (returnType === 'void') {
                returnType = undefined;
              }
              Object.assign(apiMeta, {
                returnType,
              });
            }
          }
        });
      }
    });
  }

  return apis;
}

const getSpec3Meta = () => {
  const yamlStr = fs.readFileSync(fileSpec, { encoding: 'utf8' });
  const spec3 = yaml.load(yamlStr);

  const apis = {};

  for (const httpPath in spec3.paths) {
    for (const httpMethod in spec3.paths[httpPath]) {
      if (!['parameters'].includes(httpMethod)) {
        const endpoint = spec3.paths[httpPath][httpMethod];
        for (const tag of endpoint.tags || []) {
          const className = tag + 'Api';
          if (!apis[className]) {
            apis[className] = {};
          }
          const methodName = endpoint.operationId;
          const path = httpPath;
          const regexPathParams = /{(.+?)}/g;
          const pathParams = [];
          const starPath = path.replaceAll(regexPathParams, (_paramWithBrackets, paramName) => {
            pathParams.push(paramName);
            return '*';
          });
          // Process parameters
          const queryParams = [];
          if (endpoint.parameters) {
            for (let param of endpoint.parameters) {
              let refSchemaKey;
              if (param?.['$ref']) {
                refSchemaKey = param['$ref'].replace(/#\/components\/(parameters|schemas)\//, '');
                param = spec3.components.parameters[refSchemaKey] ?? spec3.components.schemas[refSchemaKey];
              }
              let paramName = param?.['name'];
              if (!paramName) {
                console.warn(`! Can't detect param name for ${className}.${methodName}`, param);
                if (refSchemaKey) {
                  paramName = refSchemaKey;
                } else {
                  continue;
                }
              }
              if (param?.['in'] === 'path' && !pathParams.includes(paramName)) {
                pathParams.push(paramName);
              } else if (param?.['in'] === 'query' && !queryParams.includes(paramName)) {
                queryParams.push(paramName);
              }
            }
          }
          // Process request body
          let bodyParams;
          if (endpoint.requestBody) {
            const contentTypes = Object.keys(endpoint.requestBody?.content ?? {});
            const contentType = contentTypes[0];
            const typedContent = endpoint.requestBody.content?.[contentType];
            if (typedContent?.schema) {
              let schema = typedContent.schema;
              let refSchemaKey;
              let isArray = schema['type'] === 'array';
              if (isArray) {
                schema = schema['items'];
              }
              if (schema['$ref']) {
                refSchemaKey = schema['$ref'].replace('#/components/schemas/', '').replace('#/components/requestBodies/', '');
              }
              if (refSchemaKey) {
                if (isArray) {
                  bodyParams = [`Array<${refSchemaKey}>`];
                } else {
                  bodyParams = [refSchemaKey];
                }
              }
              if (!bodyParams && schema['oneOf']) {
                // example: updateDefaultProvisioningConnectionForApplication
                bodyParams = [`${methodName}Request`];
              }
              if (!bodyParams && schema['type'] === 'object' && schema['properties']) {
                // examples: uploadYubikeyOtpTokenSeed, uploadBrandThemeBackgroundImage
                bodyParams = Object.keys(schema['properties']);
                if (httpMethod !== 'get' && bodyParams.length > 1) {
                  console.warn(`Detected multiple body params for ${className}.${methodName} in spec:`, bodyParams);
                }
              }
            }
            if (!bodyParams && contentTypes.includes('application/x-x509-ca-cert')) {
              // example: publishCsrFromApplication
              bodyParams = ['body'];
            }
            if (endpoint['x-codegen-request-body-name']) {
              // override
              bodyParams = [
                endpoint['x-codegen-request-body-name']
              ];
            }
            if (!bodyParams) {
              console.warn(`! Can't detect request body name for ${className}.${methodName} (${contentTypes.join(', ')})`, typedContent?.schema);
            }
          }
          // Process response type
          let returnType;
          for (const responseCode in endpoint.responses) {
            const response = endpoint.responses[responseCode];
            if (response?.content) {
              const contentTypes = Object.keys(response?.content);
              let contentType = contentTypes?.[0];
              if (contentTypes.length > 1 && contentType.includes('application/json')) {
                contentType = 'application/json';
              }
              const typedContent = response.content[contentType];
              if (responseCode.startsWith('2') && typedContent?.schema) {
                // 2xx response schema
                let schema = typedContent.schema;
                let refSchemaKey;
                let isArray = schema['type'] === 'array';
                if (isArray) {
                  schema = schema['items'];
                }
                if (schema['$ref']) {
                  refSchemaKey = schema['$ref'].replace('#/components/schemas/', '');
                }
                if (refSchemaKey) {
                  returnType = isArray ? `Array<${refSchemaKey}>` : refSchemaKey;
                }
                if (!returnType && schema['oneOf']) {
                  // examples: getGroupAssignedRole, listGroupAssignedRoles, executeInlineHook, getSsfStreams
                  returnType = schema['oneOf'].map(t => {
                    let isArray = t['type'] === 'array';
                    let tRefSchemaKey;
                    if (isArray) {
                      t = t['items'];
                    }
                    if (t['$ref']) {
                      tRefSchemaKey = t['$ref'].replace('#/components/schemas/', '');
                    }
                    if (tRefSchemaKey) {
                      return isArray ? `Array<${tRefSchemaKey}>` : tRefSchemaKey;
                    }
                  }).join('|');
                  if (isArray) {
                    returnType = `Array<${returnType}>`;
                  }
                }
                if (!returnType && schema['type'] === 'string') {
                  // example: previewSAMLmetadataForApplication, listAllSignInWidgetVersions
                  returnType = isArray ? `Array<${schema['type']}>` : schema['type'];
                }
                if (!returnType) {
                  console.warn(`! Can't detect response type for ${className}.${methodName} (${contentType})`, schema);
                }
              }
            }
          }

          apis[className][methodName] = {
            httpMethod,
            path,
            starPath,
            pathParams,
            queryParams,
            bodyParams,
            returnType,
          };
        }
      }
    }
  }

  return apis;
};

function findUnusedApis(generatedApis, usedApiClasses) {
  let unusedApis = [];
  for (const apiClassName in generatedApis) {
    if (!usedApiClasses.includes(apiClassName)) {
      unusedApis.push(apiClassName);
    }
  }
  return {
    unusedApis
  };
}

function findApiDiffs(specApis, generatedApis) {
  const classRenames = {}, methodRenames = {}, removedApis = [];
  const pathParamsRenames = {}, returnTypeDiffs = {}, bodyNameRenames = {}, queryParamDiffs = {};

  for (const className in generatedApis) {
    for (const methodName in generatedApis[className]) {
      const generatedMethod = generatedApis[className][methodName];
      let specMethod = specApis?.[className]?.[methodName];
      let classRename, methodRename;
      if (!specMethod) {
        for (const specClassName in specApis) {
          for (const specMethodName in specApis[specClassName]) {
            const maybeMethod = specApis[specClassName][specMethodName];
            if (maybeMethod.starPath === generatedMethod.starPath && maybeMethod.httpMethod === generatedMethod.httpMethod) {
              specMethod = maybeMethod;
              if (specClassName !== className) {
                classRename = {className, specClassName};
              }
              if (specMethodName !== methodName) {
                methodRename = {methodName, specMethodName};
              }
              break;
            }
          }
          if (specMethod) {
            break;
          }
        }
      }
      if (!specMethod) {
        removedApis.push({
          className,
          methodName,
          generatedMethod,
        });
      } else {
        if (classRename) {
          classRenames[classRename.specClassName] = classRename.className;
        }
        if (methodRename) {
          methodRenames[methodRename.specMethodName] = methodRename.methodName;
        }
        if (JSON.stringify(specMethod.pathParams) !== JSON.stringify(generatedMethod.pathParams)) {
          pathParamsRenames[methodName] = {};
          generatedMethod.pathParams.map((existingParam, i) => {
            const specParam = specMethod.pathParams[i];
            if (existingParam !== specParam) {
              pathParamsRenames[methodName][existingParam] = specParam;
            }
          });
        }
        if (JSON.stringify(specMethod.queryParams) !== JSON.stringify(generatedMethod.queryParams)) {
          const missingInSpec = generatedMethod.queryParams.filter(p => !specMethod.queryParams.includes(p));
          const excessInSpec = specMethod.queryParams.filter(p => !generatedMethod.queryParams.includes(p));
          if (missingInSpec.length) {
            queryParamDiffs[methodName] = {
              // inSpec: specMethod.queryParams,
              // inGen: generatedMethod.queryParams,
              missingInSpec,
              excessInSpec,
            };
          }
        }
        if (JSON.stringify(specMethod.bodyParams) !== JSON.stringify(generatedMethod.bodyParams)) {
          bodyNameRenames[methodName] = {};
          bodyNameRenames[methodName][generatedMethod.bodyParams?.[0]] = specMethod.bodyParams?.[0];
        }
        if (specMethod.returnType !== generatedMethod.returnType) {
          returnTypeDiffs[methodName] = {};
          returnTypeDiffs[methodName][generatedMethod.returnType] = specMethod.returnType;
        }
      }
    }
  }

  return {
    classRenames,
    methodRenames,
    removedApis,
    pathParamsRenames,
    returnTypeDiffs,
    bodyNameRenames,
    queryParamDiffs,
  };
}


async function main() {
  const specApis = getSpec3Meta();
  const generatedApis = parseGeneratedClient();
  const { usedApiClasses } = parseClient();
  const { unusedApis } = findUnusedApis(generatedApis, usedApiClasses);
  const {
    classRenames, methodRenames, removedApis, pathParamsRenames, returnTypeDiffs, bodyNameRenames, queryParamDiffs,
  } = findApiDiffs(specApis, generatedApis);

  console.log('\n');
  if (unusedApis.length) {
    console.log('Unused (generated but not exported) APIs:');
    console.log(unusedApis);
    console.log('Please add those APIs to src/client.js and src/types/client.d.ts');
    console.log('\n-----------\n');
  }
  if (Object.keys(classRenames).length) {
    console.log('Breaking class renames (new -> old):');
    console.log(classRenames);
    console.log('To make changes to class names non-breaking please edit scripts/mappings/apiConsolidation.cjs before running "yarn build"');
    console.log('\n-----------\n');
  }
  if (Object.keys(methodRenames).length) {
    console.log('Breaking method renames (new -> old):');
    console.log(methodRenames);
    console.log('To make changes to method names non-breaking please copy this mapping to scripts/mappings/maethodRenames.cjs before running "yarn build"');
    console.log('\n-----------\n');
    // TODO: generate mapping - for operationId
  }
  if (Object.keys(pathParamsRenames).length) {
    console.log('Breaking changes to path params (old -> new):');
    console.log(pathParamsRenames);
    console.log('\n-----------\n');
    // TODO: generate mapping - for {name} in path
  }
  if (Object.keys(bodyNameRenames).length) {
    console.log('Breaking changes to body parameter type (old -> new):');
    console.log(bodyNameRenames);
    console.log('\n-----------\n');
    // TODO: generate mapping - for x-codegen-request-body-name
  }
  if (Object.keys(queryParamDiffs).length) {
    console.log('Possibly breaking changes to query params (old -> new):');
    console.log(queryParamDiffs);
    console.log('\n-----------\n');
  }
  if (Object.keys(returnTypeDiffs).length) {
    console.log('Possibly breaking changes to return types (old -> new):');
    console.log(returnTypeDiffs);
    console.log('\n-----------\n');
  }
  if (removedApis.length) {
    console.log('!!! Note that there are removed methods: \n');
    console.log(removedApis);
  }
}

main();
