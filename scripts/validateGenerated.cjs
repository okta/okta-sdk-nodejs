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

  for (const className in /*res*/ {AgentPoolsApi: 1}) { //todo
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

            const regexMethod = /makeRequestContext\(path, .*HttpMethodEnum\.(\w+),/;
            const methodMatch = text.match(regexMethod);
            if (methodMatch) {
              const method = methodMatch[1].toLowerCase();
              Object.assign(apiMeta, {
                method,
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
              const queryParams = [];
              const regexQueryParams = /requestContext\.setQueryParam\((".+?"),/g;
              const queryParamsMatch = text.matchAll(regexQueryParams);
              if (queryParamsMatch) {
                for (const m of queryParamsMatch) {
                  queryParams.push(JSON.parse(m[1]));
                }
              }
              const maybeBodyParams = [...apiMeta.params].filter(p => !pathParams.includes(p) && !queryParams.includes(p));
              if (apiMeta.method && apiMeta.method !== 'get' && maybeBodyParams.length > 1) {
                console.warn(`! Can't detect single body param for ${className}.${methodName}:`, maybeBodyParams);
              }
              const bodyParam = maybeBodyParams.length === 1 ? maybeBodyParams[0] : undefined;
              Object.assign(apiMeta, {
                path,
                starPath,
                pathParams,
                queryParams,
                bodyParam,
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
              const returnType = JSON.parse(bodyMatch[1]);
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
        for (const tag of endpoint.tags) {
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
                refSchemaKey = param['$ref'].replace('#/components/schemas/', '');
                param = spec3.components.schemas[refSchemaKey];
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
          let bodyParam;
          if (endpoint.requestBody?.content) {
            for (const contentType in endpoint.requestBody.content) {
              const typedContent = endpoint.requestBody.content[contentType];
              if (typedContent?.schema) {
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
                  bodyParam = refSchemaKey;
                  if (isArray) {
                    bodyParam = `Array<${bodyParam}>`;
                  }
                } else {
                  console.warn(`! Can't detect request body name for ${className}.${methodName} (${contentType})`, typedContent);
                }
              }
            }
          }
          // Process response type
          let returnType;
          for (const responseCode in endpoint.responses) {
            const response = endpoint.responses[responseCode];
            if (response?.content) {
              for (const contentType in response?.content) {
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
                    returnType = refSchemaKey;
                    if (isArray) {
                      returnType = `Array<${returnType}>`;
                    }
                  } else {
                    console.warn(`! Can't detect response name for ${className}.${methodName} (${contentType})`, typedContent);
                  }
                }
              }
            }
          }

          apis[className][methodName] = {
            path,
            starPath,
            pathParams,
            queryParams,
            bodyParam,
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

}


async function main() {
  const specApis = getSpec3Meta();
  const generatedApis = parseGeneratedClient();
  const { usedApiClasses } = parseClient();
  const { unusedApis } = findUnusedApis(generatedApis, usedApiClasses);
  console.log('Unused APIs: ', unusedApis);
  const diffs = findApiDiffs(specApis, generatedApis);
  console.log('Diffs: ', diffs);
}

main();
