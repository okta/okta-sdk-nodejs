const { getBodyModelNameInCamelCase, hasRequiredParameterInRequestMedia } = require('./operation');

const V3ApiOperations = {
  UserTypeApi: [
    'createUserType',
    'deleteUserType',
    'listUserTypes',
    'getUserType',
    'updateUserType',
    'replaceUserType'
  ],
};

function isV3Api(operationId) {
  return Object.values(V3ApiOperations).find((operations) => operations.includes(operationId));
}

function v3ApiByOperationId(operationId) {
  const [api, _] = Object.entries(V3ApiOperations).find(([_, operations]) => operations.includes(operationId));
  return api;
}

const getOperationArgumentV3Format = operation => {
  const { bodyModel, method, pathParams, queryParams, formData, parameters } = operation;
  const optionalArgs = [];
  let requiredArgs = [];
  if ((method === 'post' || method === 'put') && bodyModel) {
    const bodyModelName = getBodyModelNameInCamelCase(operation);
    if (bodyModelName) {
      if (hasRequiredParameterInRequestMedia(parameters, 'body')) {
        requiredArgs.push(bodyModelName);
      } else {
        optionalArgs.push(bodyModelName);
      }
    }
  }

  requiredArgs = requiredArgs.concat(pathParams.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []));


  if (queryParams.length) {
    if (hasRequiredParameterInRequestMedia(parameters, 'query')) {
      requiredArgs.push('queryParameters');
    } else {
      optionalArgs.push('queryParameters');
    }
  }

  if (formData.length) {
    let formDataParameter = formData[0].name;
    if (hasRequiredParameterInRequestMedia(parameters, 'formData')) {
      optionalArgs.push(formDataParameter);
    } else {
      optionalArgs.push(formDataParameter);
    }
  }

  return requiredArgs.concat(optionalArgs).join(', ');
};


module.exports = {
  isV3Api,
  v3ApiByOperationId,
  getOperationArgumentV3Format,
};
