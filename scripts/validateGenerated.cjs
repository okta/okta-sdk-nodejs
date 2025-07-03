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
      const rfClassName = rootNode?.name?.text;
      if (rootNode.kind === ts.SyntaxKind.ClassDeclaration && rfClassName?.indexOf('RequestFactory') !== -1) {
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
    });

    console.log(apis[className])
  }

  return apis;
}

const getSpec3Meta = () => {
  const yamlStr = fs.readFileSync(fileSpec, { encoding: 'utf8' });
  const spec3 = yaml.load(yamlStr);
  // const discriminators = {};

  // for (const schemaKey in spec3.components.schemas) {
  //   const schema = spec3.components.schemas[schemaKey];
  //   if (schema.discriminator) {
  //     const { propertyName, mapping } = schema.discriminator;
  //     if (!discriminators[propertyName]) {
  //       discriminators[propertyName] = {};
  //     }
  //     for (let k in mapping) {
  //       let v = mapping[k];
  //       const r = v.match(/^#\/components\/schemas\/(.+)/);
  //       if (r) {
  //         v = r[1];
  //       }
  //       mapping[k] = v;
  //     }
  //     discriminators[propertyName][schemaKey] = mapping;
  //   }
  // }

  // return {
  //   discriminators
  // };
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


async function main() {
  const spec3Meta = getSpec3Meta();

  const generatedApis = parseGeneratedClient();
  //console.log(generatedApis)
  const { usedApiClasses } = parseClient();
  const res = findUnusedApis(generatedApis, usedApiClasses);
  console.log(res);
}

main();
