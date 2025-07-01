const _ = require('lodash');
const ts = require('typescript');

const fileObjectParamAPI = './src/generated/types/ObjectParamAPI.js';
const fileClient = './src/client.js';

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
function parseGeneratedClient() {
  const file = fileObjectParamAPI;
  const program = ts.createProgram([file], { allowJs: true });
  const sourceFile = program.getSourceFile(file);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const res = {};

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
            if (!res[className]) {
              res[className] = {};
            }
            res[className][methodName] = params;
          }
        }
      });
    }
  });

  return res;
}

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
  const generatedApis = parseGeneratedClient();
  const { usedApiClasses } = parseClient();
  const res = findUnusedApis(generatedApis, usedApiClasses);
  console.log(res);
}

main();
