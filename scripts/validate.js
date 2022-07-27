const _ = require('lodash');
const SwaggerParser = require('@apidevtools/swagger-parser');
const spec2 = require('../node_modules/@okta/openapi/dist/spec.json');
const { getV3MethodName } = require('../templates/helpers/operation-v3');
const ts = require('typescript');

const fileGeneratedClient = './src/generated-client.js';
const fileObjectParamAPI = './src/generated/types/ObjectParamAPI.js';

function parseSpec2(spec2) {
  const ops = {};
  for (const path in spec2.paths) {
    for (const method in spec2.paths[path]) {
      const op = spec2.paths[path][method];
      if (op['x-okta-multi-operation']) {
        for (const subOp of op['x-okta-multi-operation']) {
          const operationId = getV3MethodName(subOp.operationId);
          const mergedOp = {
            ..._.omit(op, ['x-okta-multi-operation']),
            ...subOp,
            parameters: [
              ...(op.parameters || []),
              ...(subOp.parameters || []),
            ]
          };
          ops[operationId] = mergedOp;
        }
      } else {
        const operationId = getV3MethodName(op.operationId);
        ops[operationId] = op;
      }
    }
  }
  return ops;
}

function parseSpec3(spec3, spec3Raw) {
  const ops = {};
  for (const path in spec3.paths) {
    for (const method in spec3.paths[path]) {
      if (method !== 'parameters') {
        const commonParameters = spec3.paths[path].parameters || [];
        const op = spec3.paths[path][method];
        let bodyName = op['x-codegen-request-body-name'];
        let formDataName;
        if (!bodyName && op.requestBody) {
          const rawOp = spec3Raw.paths[path][method];
          const firstContentType = Object.keys(rawOp.requestBody.content)[0];
          if (firstContentType === 'application/json') {
            bodyName = _.last(Object.values(rawOp.requestBody.content)[0].schema['$ref']?.split('/'));
          } else if (firstContentType === 'multipart/form-data') {
            formDataName = 'file';
          } else {
            bodyName = 'body';
          }
        }
        ops[op.operationId] = {
          ...op,
          bodyName,
          formDataName,
          parameters: [
            ...commonParameters,
            ...(op.parameters || [])
          ]
        };
      }
    }
  }
  return ops;
}

function parseClient2() {
  const file = fileGeneratedClient;
  const program = ts.createProgram([file], { allowJs: true });
  const sourceFile = program.getSourceFile(file);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const res = {};

  ts.forEachChild(sourceFile, rootNode => {
    if (rootNode?.name?.text === 'GeneratedApiClient') {
      ts.forEachChild(rootNode, funcNode => {
        const funcName = funcNode?.name?.text;
        if (funcName) {
          const funcArgs = funcNode?.parameters?.map(n => n.name.text);
          const funcBody = funcNode?.body?.statements?.map(st => {
            const text = printer.printNode(ts.EmitHint.Unspecified, st, sourceFile);
            const paramsRegex = /params\.(\w+) = (?:(\w+)\.)?(\w+)/g;
            let paramsMatch, paramsResults = [];
            do {
              paramsMatch = paramsRegex.exec(text);
              if (paramsMatch) {
                paramsResults.push(paramsMatch.slice(1, 4));
              }
            } while (paramsMatch);
            const regexReturn = /return this\.(\w+)\.(\w+)\(params\)/;
            const returnMatch = text.match(regexReturn)?.slice(1, 3);
            if (returnMatch) {
              return {
                apiName: returnMatch[0],
                methodName: returnMatch[1],
              };
            } else if (paramsResults) {
              return {
                params: paramsResults
              };
            }
            return undefined;
          }).filter(st => !!st).reduce((info, st) => {
            if (st.params) {
              const params = info.params || {};
              st.params.map(([dst, srcObj, src]) => {
                params[dst] = [src, srcObj];
              });
              info = { ...info, params };
            } else {
              info = { ...info, ...st };
            }
            return info;
          }, {});

          res[funcName] = {
            ...funcBody,
            args: funcArgs,
          };
        }
      });
    }
  });

  return res;
}

function parseClient3() {
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

function checkClients(c2, c3) {
  for (const funcName in c2) {
    const {
      args,
      params,
      apiName,
      methodName,
    } = c2[funcName];
    const className = apiName ? (apiName[0].toUpperCase() + apiName.slice(1)) : null;
    const expectedParams = c3?.[className]?.[methodName];
    if (!expectedParams) {
      console.warn(
        funcName.padEnd(50, ' '),
        'no v3 bridge'
      );
    } else {
      const missingParams = expectedParams.filter(p => !params[p]);
      const excessParams = Object.keys(params).filter(p => expectedParams.indexOf(p) === -1);
      const parts = [];
      if (missingParams.length) {
        parts.push(`missing params ${missingParams}`);
      }
      if (excessParams.length) {
        parts.push(`excess params ${excessParams}`);
      }
      const unusedArgs = args.filter(arg => !params[arg] && !Object.values(params).find(p => p[1] === arg));
      if (unusedArgs.length) {
        parts.push(`unused args ${unusedArgs}`);
      }
      for (const p in params) {
        const [src, srcObj] = params[p];
        const srcArg = srcObj || src;
        if (args.indexOf(srcArg) === -1) {
          parts.push(`unknown source of param ${p} <- ${src}`);
        }
      }
      if (parts.length) {
        console.error(
          funcName.padEnd(50, ' '),
          parts.join(', ')
        );
      }
    }
  }
}

function checkSpecs(ops2, ops3) {
  for (const opId in ops2) {
    const op2 = ops2[opId];
    const op3 = ops3[opId];
    if (op2 && !op3) {
      console.warn(
        opId.padEnd(50, ' '),
        ''.padEnd(10, ' '),
        ''.padEnd(50, ' '),
        'missing in v3'
      );
    } else if (op2 && op3) {
      for (const paramType of ['query', 'path', 'header']) {
        const params2 = op2.parameters.filter(p => p.in === paramType).map(p => p.name);
        const params3 = op3.parameters.filter(p => p.in === paramType).map(p => p.name);
        if (!_.isEqual(params2, params3)) {
          console.error(
            opId.padEnd(50, ' '),
            paramType.padEnd(10, ' '),
            `v2 - ${params2}`.padEnd(50, ' '),
            `v3 - ${params3}`.padEnd(50, ' '),
          );
        }
      }

      const body2 = op2.parameters.filter(p => p.in === 'body').map(p => p.name).shift();
      const body3 = op3.bodyName;
      if (body2 !== body3) {
        console.error(
          opId.padEnd(50, ' '),
          'body'.padEnd(10, ' '),
          `v2 - ${body2 || ''}`.padEnd(50, ' '),
          `v3 - ${body3 || ''}`.padEnd(50, ' '),
        );
      }

      const form2 = op2.parameters.filter(p => p.in === 'formData').map(p => p.name).shift();
      const form3 = op3.formDataName;
      if (form2 !== form3) {
        console.error(
          opId.padEnd(50, ' '),
          'formData'.padEnd(10, ' '),
          `v2 - ${form2 || ''}`.padEnd(50, ' '),
          `v3 - ${form3 || ''}`.padEnd(50, ' '),
        );
      }
    }
  }
}

async function main() {
  const yaml = process.argv[2] || 'spec/management.yaml';
  const spec3 = await SwaggerParser.dereference(yaml);
  const spec3Raw = await SwaggerParser.parse(yaml);

  const ops2 = parseSpec2(spec2);
  const ops3 = parseSpec3(spec3, spec3Raw);

  const c2 = parseClient2();
  const c3 = parseClient3();

  console.log('\nDifferences in specs:\n');
  checkSpecs(ops2, ops3);

  console.log('\nDifferences in clients:\n');
  checkClients(c2, c3);
}

main();
