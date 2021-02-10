const _ = require('lodash');

const getBodyModelName = operation => {
  const { bodyModel, parameters } = operation;
  let bodyModelName = bodyModel;
  if (bodyModel === 'string') {
    const bodyParam = parameters.find(param => param.in === 'body');
    if (bodyParam) {
      bodyModelName = bodyParam.name;
    }
  }
  return bodyModelName;
};

const getBodyModelNameInCamelCase = operation => _.camelCase(getBodyModelName(operation));

const getOperationArgument = operation => {
  const { bodyModel, method, pathParams, queryParams } = operation;

  const args = pathParams.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);

  if ((method === 'post' || method === 'put') && bodyModel) {
    const bodyModelName = getBodyModelNameInCamelCase(operation);
    if (bodyModelName) {
      args.push(bodyModelName);
    }
  }

  if (queryParams.length) {
    args.push('queryParameters');
  }

  return args;
}

const operationArgumentBuilder = (operation) => {
  const args = getOperationArgument(operation);
  return args.join(', ');
}

const getRequiredOperationParams = operation => { 
  const args = getOperationArgument(operation);
  return operation.parameters.filter(({ name, required }) => {
    return args.includes(name) && required;
  });
}

const getHttpMethod = ({ consumes, produces, method, responseModel }) => {
  let res;
  switch (method) {
    case 'get':
      res = 'getJson';
      break;
    case 'post':
    case 'put':
      if (consumes.includes('application/json') && produces.includes('application/json') && responseModel) {
        res = `${method}Json`;
      } else {
        res = method;
      }
      break;
    default:
      res = method;
      break;
  }

  return res;
};

const hasRequest = (operation) => {
  const { method, bodyModel } = operation;
  if (method === 'post' || method === 'put') {
    return hasHeaders(operation) || bodyModel;
  }
  return false;
};

const hasHeaders = (operation) => {
  const { consumes, produces, bodyModel } = operation;
  const httpMethod = getHttpMethod(operation);
  return httpMethod.indexOf('Json') === -1 && (consumes.length || produces.length);
};

const shouldResolveJson = (operation) => {
  return hasHeaders(operation) 
    && hasRequest(operation) 
    && operation.responseModel 
    && operation.produces.includes('application/json');
};

const jsdocBuilder = (operation) => {
  const lines = ['*'];

  if (operation.pathParams.length) {
    operation.pathParams.map(argument => {
      return `   * @param ${argument.name} {String}`;
    }).forEach(line => lines.push(line));
  }

  if (!operation.isArray && operation.bodyModel) {
    lines.push(`   * @param {${operation.bodyModel}} ${_.camelCase(operation.bodyModel)}`);
  }

  if (operation.queryParams.length) {
    lines.push('   * @param {Object} queryParams Map of query parameters to add to this request');
    operation.queryParams.map((param) => {
      return `   * @param {String} [queryParams.${param.name}]`;
    }).forEach(line => lines.push(line));
  }
  lines.push('   * @description');

  if (operation.description) {
    lines.push(`   * ${operation.description}`);
  } else {
    // TODO: Once documentation is parsed correctly, this line can be omitted.
    lines.push(`   * Convenience method for ${operation.path}`);
  }

  if (operation.responseModel) {
    if (operation.isArray) {
      lines.push(`   * @returns {Promise<Collection>} A collection that will yield {@link ${operation.responseModel}} instances.`)
    } else {
      lines.push(`   * @returns {Promise<${operation.responseModel}>}`)
    }
  }

  return lines.join('\n');
};

const typeScriptTypeDefinitionBuilder = (operation) => {
  let parameters = {};
  if (operation.pathParams.length) {
    parameters = operation.pathParams.reduce((memo, parameter) => {
      return {
        ...memo,
        [parameter.name]: 'string'
      }
    }, {})
  }

  if (!operation.isArray && operation.bodyModel) {
    const bodyModelName = getBodyModelName(operation);
    if (bodyModelName) {
      parameters = {
        ...parameters,
        [_.camelCase(bodyModelName)]: operation.bodyModel
      };
    }
  }

  let queryParameters;
  if (operation.queryParams.length) {
    queryParameters = operation.queryParams.map(({name}) => name)

    let queryParametersString = '{ \n';
    queryParameters.forEach(parameter => {
      queryParametersString += `    ${parameter}: string,\n`
    })
    queryParametersString += '  }'

    parameters = {
      ...parameters,
      queryParameters: queryParametersString
    }
  }
  let returnType;
  if (operation.responseModel) {
    if (operation.isArray) {
      returnType = 'Promise<Collection>';
    } else {
      returnType = `Promise<${operation.responseModel}>`;
    }
  }
  const parametersString = Object.keys(parameters).reduce((memo, key, index, collection) => {
    let isFinalParameter = index === collection.length - 1;
    return memo + `${key}: ${parameters[key]}${isFinalParameter ? '' : ', '}`
  }, '');
  return `${operation.operationId}(${parametersString}): ${returnType};`;
};

module.exports = {
  getBodyModelNameInCamelCase,
  operationArgumentBuilder,
  getRequiredOperationParams,
  hasRequest,
  hasHeaders,
  getHttpMethod,
  shouldResolveJson,
  jsdocBuilder,
  typeScriptTypeDefinitionBuilder,
}
