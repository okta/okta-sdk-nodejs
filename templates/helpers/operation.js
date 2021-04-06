const _ = require('lodash');

const MODELS_SHOULD_NOT_PROCESS = ['object', 'string', 'undefined', 'Promise'];

// BEGIN Work around spec mismatches and upstream parsing inconsistencies.
// The below map is used to block redefining(overriding) properties listed as values in models specified as keys.
// It is also consulted with for excluding the blocklisted properties from intialization in constructor,
// adding to jsDoc parameters and skipping imports.
// This is done to avoid property type conflicts between parent and descendant models.
// These models' respective superclasses are expected to provide a correct property type.
const RESTRICTED_MODEL_PROPERTY_OVERRIDES = {
  OktaSignOnPolicy: ['conditions'],
  PasswordPolicy: ['conditions'],
  BookmarkApplication: ['name'],
  BasicAuthApplication: ['name'],
  OpenIdConnectApplication: ['name'],
  WsFederationApplication: ['name'],
  SwaThreeFieldApplication: ['name'],
  SwaApplication: ['name'],
  SecurePasswordStoreApplication: ['name'],
};
const KNOWN_CONFLICTING_PROPERTY_NAMES = {
  UserFactor: ['verify'],
};
const PROPERTY_NAME_CHARACTERS_REQUIRE_ESCAPING = ['#'];
// END Work around spec mismatches and upstream parsing inconsistencies.

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
};

const operationArgumentBuilder = (operation) => {
  const args = getOperationArgument(operation);
  return args.join(', ');
};

const getRequiredOperationParams = operation => {
  const args = getOperationArgument(operation);
  return operation.parameters.filter(({ name, required }) => {
    return args.includes(name) && required;
  });
};

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
  const { consumes, produces } = operation;
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
      lines.push(`   * @returns {Promise<Collection>} A collection that will yield {@link ${operation.responseModel}} instances.`);
    } else {
      lines.push(`   * @returns {Promise<${operation.responseModel}>}`);
    }
  }

  return lines.join('\n');
};

const typeScriptOperationSignatureBuilder = operation => {
  const [args, returnType] = getOperationArgumentsAndReturnType(operation);
  return `${operation.operationId}(${formatTypeScriptArguments(args)}): ${formatReturnType(returnType)};`;
};

const typeScriptModelMethodSignatureBuilder = (method, modelName) => {
  const [args, returnType] = getModelMethodArgumentsAndReturnType(method, modelName);
  return `(${formatTypeScriptArguments(args)}): ${formatReturnType(returnType)};`;
};

const typeScriptClientImportBuilder = operations => {
  const operationsImportTypes = operations.reduce((acc, operation) => {
    const [args, returnType] = getOperationArgumentsAndReturnType(operation);
    const typeNames = convertTypeObjectsToTypeNames(args, returnType);
    const importableTypes = typeNames.filter(isImportableType);
    return acc.concat(importableTypes);
  }, []);

  return formatImportStatements(new Set([...operationsImportTypes]), {
    isModelToModelImport: false
  });
};

const typeScriptModelImportBuilder = model => {
  const {properties, methods} = model;
  if (!properties && !methods) {
    return;
  }

  const methodsImportTypes = model.methods.reduce((acc, method) => {
    const [args, returnType] = getModelMethodArgumentsAndReturnType(method, model.modelName);
    const typeNames = convertTypeObjectsToTypeNames(args, returnType);
    const importableTypes = typeNames.filter(isImportableType);
    return acc.concat(importableTypes);
  }, []);

  // CRUD operations return Promise<Resource> or Promise<Response> - we want Response to be included into imports.
  const selfInvocableOperations = model.crud.filter(crud => ['update', 'delete'].includes(crud.alias));
  const crudImportTypes = selfInvocableOperations.reduce((acc, crud) => {
    const [args, returnType] = getOperationArgumentsAndReturnType(crud.operation);
    const typeNames = convertTypeObjectsToTypeNames(args, returnType);
    const importableTypes = typeNames.filter(isImportableType);
    return acc.concat(importableTypes);
  }, []);

  const propertiesImportTypes = [];
  properties.forEach(property => {
    if (isImportablePropertyType(property, model.modelName)) {
      propertiesImportTypes.push(property.model);
    }
  });

  const importTypes = new Set([...methodsImportTypes, ...crudImportTypes, ...propertiesImportTypes]);
  // model methods returning model type and CRUD operations referencing self
  importTypes.delete(model.modelName);
  importTypes.delete(`${model.modelName}OptionsType`);

  return formatImportStatements(importTypes);
};

const getOperationArgumentsAndReturnType = operation => {
  const { bodyModel, method, pathParams, queryParams } = operation;
  const args = new Map();

  pathParams.forEach(pathParam => {
    args.set(pathParam.name, {
      isRequired: pathParam.required,
      type: 'string',
    });
  });

  if ((method === 'post' || method === 'put') && bodyModel) {
    const bodyParamName = getBodyModelName(operation);
    if (bodyParamName) {
      const modelPropertiesType = operation.bodyModel === 'string' ?
        operation.bodyModel :  `${operation.bodyModel}OptionsType`;
      args.set(_.camelCase(bodyParamName), {
        isRequired: true,
        type: modelPropertiesType,
      });
    }
  }

  if (queryParams.length) {
    const isRequired = queryParams.reduce((acc, param) => acc || param.required, false);
    args.set('queryParameters', {
      isRequired,
      type: queryParams,
    });
  }

  let genericType = 'Promise';
  let genericParameterType = 'Response';
  if (operation.responseModel) {
    genericParameterType = operation.responseModel;
    if (operation.isArray) {
      genericType = 'Collection';
    }
  }
  return [args, {genericType, genericParameterType}];
};

const getModelMethodArgumentsAndReturnType = (method, modelName) => {
  const { operation } = method;
  const [args, returnType] = getOperationArgumentsAndReturnType(operation);

  operation.pathParams.forEach(param => {
    const matchingArgument = method.arguments.find(argument => argument.dest === param.name);
    if (matchingArgument) {
      args.delete(param.name);
    }
  });

  const bodyModelName = getBodyModelName(operation);
  if (bodyModelName && bodyModelName === modelName) {
    args.delete(_.camelCase(operation.bodyModel));
  }
  return [args, returnType];
};

const convertTypeObjectsToTypeNames = (args, returnType) => {
  const argTypes = Array.from(args.values()).map(arg => arg.type);
  return [...argTypes, returnType.genericType, returnType.genericParameterType];
};

const formatTypeScriptArguments = args => {
  const typedArgs = [];
  for (let [argName, {type, isRequired}] of args) {
    let argument = `${argName}${isRequired ? '' : '?'}`;
    if (Array.isArray(type)) {
      argument = `${argument}: ${formatObjectLiteralType(type)}`;
    } else {
      argument = `${argument}: ${type}`;
    }
    typedArgs.push(argument);
  }
  return typedArgs.join(', ');
};

const formatReturnType = ({genericType, genericParameterType}) =>
  `${genericType}<${genericParameterType}>`;

const formatObjectLiteralType = typeProps => {
  let objectLiteralType = '{\n';
  typeProps.forEach(prop => {
    const isRequired = prop.required ? '' : '?';
    const propType = convertSwaggerToTSType(prop.type);
    objectLiteralType += `    ${prop.name}${isRequired}: ${propType},\n`;
  });
  objectLiteralType += '  }';
  return objectLiteralType;
};

const formatImportStatements = (importTypes, {
  isModelToModelImport = true
} = {}) => {
  const importStatements = [];
  importTypes.forEach(type => {
    if (type === 'Response') {
      importStatements.push('import { Response } from \'node-fetch\';');
    } else if (type === 'Collection') {
      importStatements.push(`import { Collection } from '${isModelToModelImport ? '..' : '.'}/collection';`);
    } else {
      importStatements.push(`import { ${type} } from '${isModelToModelImport ? './' : './models/'}${type.replace('OptionsType', '')}';`);
    }
  });
  return importStatements.join('\n');
};

const convertSwaggerToTSType = swaggerType => {
  return {
    array: '[]',
    integer: 'number',
    double: 'number',
    hash: '{[name: string]: unknown}',
    dateTime: 'string',
    password: 'string',
    object: 'Record<string, unknown>'
  }[swaggerType] || swaggerType;
};

const isImportablePropertyType = (property, hostModelName) => {
  const isRestricted = isRestrictedPropertyOverride(hostModelName, property.propertyName);
  return property.$ref && isImportableType(property.model) && !isRestricted;
};

const isRestrictedPropertyOverride = (modelName, propertyName) => {
  return RESTRICTED_MODEL_PROPERTY_OVERRIDES[modelName] &&
    RESTRICTED_MODEL_PROPERTY_OVERRIDES[modelName].includes(propertyName);
};
const isImportableType = type =>
  !MODELS_SHOULD_NOT_PROCESS.includes(type) && !Array.isArray(type);

const sanitizeModelPropertyName = (modelName, propertyName) => {
  let sanitizedPropertyName = propertyName;

  const containsRestrictedChars =
    PROPERTY_NAME_CHARACTERS_REQUIRE_ESCAPING.find(char => propertyName.includes(char));

  if (KNOWN_CONFLICTING_PROPERTY_NAMES[modelName] &&
      KNOWN_CONFLICTING_PROPERTY_NAMES[modelName].includes(propertyName)) {
    sanitizedPropertyName = `_${propertyName}`;
  }

  if (containsRestrictedChars) {
    sanitizedPropertyName = `'${propertyName}'`;
  }

  return sanitizedPropertyName;
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
  typeScriptOperationSignatureBuilder,
  typeScriptModelImportBuilder,
  typeScriptModelMethodSignatureBuilder,
  typeScriptClientImportBuilder,
  convertSwaggerToTSType,
  sanitizeModelPropertyName,
  isImportablePropertyType,
  isRestrictedPropertyOverride,
};
