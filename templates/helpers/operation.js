const _ = require('lodash');
const {
  formatImportStatements,
  formatMethodSignature,
} = require('./typescript-formatter');
const { isV3Api, getV3ArgumentsOverride } = require('./operation-v3');


const MODELS_SHOULD_NOT_PROCESS = ['object', 'string', 'undefined', 'Promise'];

// BEGIN Work around spec mismatches and upstream parsing inconsistencies.
// The below map is used to block redefining(overriding) properties listed as values in models specified as keys.
// It is also consulted with for excluding the blocklisted properties from intialization in constructor,
// adding to jsDoc parameters and skipping imports.
// This is done to avoid property type conflicts between parent and descendant models.
// These models' respective superclasses are expected to provide a correct property type.
const RESTRICTED_MODEL_PROPERTY_OVERRIDES = {
  BookmarkApplication: ['name'],
  BasicAuthApplication: ['name'],
  OpenIdConnectApplication: ['name'],
  WsFederationApplication: ['name'],
  SwaThreeFieldApplication: ['name'],
  SwaApplication: ['name'],
  SecurePasswordStoreApplication: ['name'],
  Org2OrgApplication: ['name'],
};

// properties which should not be included into request payload
const RESTRICTED_MODEL_PROPERTIES = {
  Theme: ['id', 'backgroundImage', 'favicon', 'logo', '_links']
};
// END Work around spec mismatches and upstream parsing inconsistencies.

const KNOWN_CONFLICTING_PROPERTY_NAMES = {
  UserFactor: ['verify'],
  OrgPreferences: ['showEndUserFooter']
};

const PROPERTY_NAME_CHARACTERS_REQUIRE_ESCAPING = ['#'];
const OPTIONS_TYPE_SUFFIX = 'Options';


const MODELS_IMPORTING_GENERATED_MODELS_WITH_OPTIONS_SUFFIX = [
  'PasswordPolicyDelegationSettings'
];


const NO_OPTIONS_TYPE_MODELS = [
  'PasswordPolicyDelegationSettings', // conflicting name

  'Application',
  'BookmarkApplication',
  'BasicAuthApplication',
  'BrowserPluginApplication',
  'SwaApplication',
  'SwaThreeFieldApplication',
  'SecurePasswordStoreApplication',
  'AutoLoginApplication',
  'SamlApplication',
  'WsFederationApplication',
  'OpenIdConnectApplication'
];

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

const getOperationArgument = (operation, apiVersion) => {
  const { bodyModel, method, pathParams, queryParams, formData, parameters } = operation;
  const optionalArgs = [];
  const requiredArgs = [];

  const requiredBodyArgs = [];
  const optionalBodyArgs = [];

  const pathParamArgs = pathParams.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);

  if ((method === 'post' || method === 'put') && bodyModel) {
    const bodyModelName = getBodyModelNameInCamelCase(operation);
    if (bodyModelName) {
      if (hasRequiredParameterInRequestMedia(parameters, 'body')) {
        requiredBodyArgs.push(bodyModelName);
      } else {
        optionalBodyArgs.push(bodyModelName);
      }
    }
  }

  requiredArgs.push(...pathParamArgs);
  requiredArgs.push(...requiredBodyArgs);
  optionalArgs.push(...optionalBodyArgs);

  if (queryParams.length) {
    let qp = ['queryParameters'];
    if (apiVersion === 'v3') {
      qp = queryParams.map(({name}) => name);
    }
    if (hasRequiredParameterInRequestMedia(parameters, 'query')) {
      requiredArgs.push(...qp);
    } else {
      optionalArgs.push(...qp);
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

  return [requiredArgs, optionalArgs];
};

const hasRequiredParameterInRequestMedia = (parameters, requestMedia) =>
  parameters.find(({in: paramMedia, required}) => paramMedia === requestMedia && required);

const operationArgumentBuilder = (operation, apiVersion) => {
  const [requiredArgs, optionalArgs] = getOperationArgument(operation, apiVersion);
  return requiredArgs.concat(optionalArgs).join(', ');
};

const getRequiredOperationParams = operation => {
  return getOperationArgument(operation).shift();
};

const getHttpMethod = ({
  consumes,
  produces,
  method,
  responseModel,
  formData,
  parameters = [],
  responses
}) => {
  let res;
  const hasModelParameterInBody = parameters.some(parameter => parameter.in === 'body' && parameter.schema && parameter.schema.$ref);
  switch (method) {
    case 'get':
      res = 'getJson';
      break;
    case 'post':
    case 'put':
      if (
        consumes.includes('application/json')
        && produces.includes('application/json')
        && (responseModel || hasModelParameterInBody)
        && typeof responses['204'] === 'undefined'
      ) {
        res = `${method}Json`;
      } else if (
        consumes.includes('application/json')
        && (responseModel || hasModelParameterInBody)
        && typeof responses['204'] !== 'undefined'
      ) {
        res = `${method}JsonNoContent`;
      } else if (formData.length) {
        res = 'postFormDataFile';
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

  if (operation.formData.length) {
    lines.push(`   * @param {${operation.formData[0].name}} fs.ReadStream`);
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
      lines.push(`   * @returns {Collection} A collection that will yield {@link ${operation.responseModel}} instances.`);
    } else {
      lines.push(`   * @returns {Promise<${operation.responseModel}>}`);
    }
  }

  return lines.join('\n');
};

const typeScriptOperationSignatureBuilder = operation => {
  const [args, returnType] = getOperationArgumentsAndReturnType(operation, { tagV3Methods: true});
  return formatMethodSignature(operation.operationId, args, returnType, { tagV3Methods: true });
};

const typeScriptModelMethodSignatureBuilder = (method, modelName) => {
  const [args, returnType] = getModelMethodArgumentsAndReturnType(method, modelName);
  return formatMethodSignature(method.alias, args, returnType);
};

const typeScriptClientImportBuilder = operations => {
  const operationsImportTypes = operations.reduce((acc, operation) => {
    const [args, returnType] = getOperationArgumentsAndReturnType(operation, { tagV3Methods: true });
    const typeNames = convertTypeObjectsToTypeNames(args, returnType);
    const importableTypes = typeNames.filter(isImportableType);
    if (!isV3Api(operation.operationId)) {
      return acc.concat(importableTypes);
    } else {
      return acc;
    }
  }, []);

  const uniqueImportTypes = new Set([...operationsImportTypes]);
  NO_OPTIONS_TYPE_MODELS.forEach(modelName => {
    uniqueImportTypes.delete(`${modelName}Options`);
  });

  return formatImportStatements(uniqueImportTypes, {
    isModelToModelImport: false,
    sourceFileSuffixToTrim: OPTIONS_TYPE_SUFFIX
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
  // Skip import for the following cases:
  // - model methods returning self type
  // - CRUD operations with self type arguments
  // - models that generate auxiliary *Options class
  importTypes.delete(model.modelName);
  let sourceFileSuffixToTrim;
  // remove *Options type from imports unless it is a type coming from spec
  if (!MODELS_IMPORTING_GENERATED_MODELS_WITH_OPTIONS_SUFFIX.includes(model.modelName)) {
    importTypes.delete(`${model.modelName}${OPTIONS_TYPE_SUFFIX}`);
    sourceFileSuffixToTrim = OPTIONS_TYPE_SUFFIX;
  }
  return formatImportStatements(importTypes, {
    isModelToModelImport: true,
    sourceFileSuffixToTrim
  }, model.modelName);
};

const getOperationArgumentsAndReturnType = (operation, options = { tagV3Methods: false }) => {
  const { operationId, bodyModel, method, pathParams, queryParams, formData, parameters } = operation;
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
        operation.bodyModel : isV3Api(operationId) && options.tagV3Methods ? `${operation.bodyModel}` : `${operation.bodyModel}${OPTIONS_TYPE_SUFFIX}`;
      const bodyParamNameCamelCase = _.camelCase(bodyParamName);
      const v3ParamOverride = getV3ArgumentsOverride(bodyParamNameCamelCase);
      args.set(v3ParamOverride && options.tagV3Methods ? v3ParamOverride[0] : bodyParamNameCamelCase, {
        isRequired: hasRequiredParameterInRequestMedia(parameters, 'body'),
        type: v3ParamOverride && options.tagV3Methods ? v3ParamOverride[1] : modelPropertiesType,
        namespace: isV3Api(operationId) && options.tagV3Methods ? 'v3' : '',
      });
    }
  }

  if (queryParams.length) {
    args.set('queryParameters', {
      isRequired: hasRequiredParameterInRequestMedia(parameters, 'query'),
      type: queryParams,
    });
  }

  if (formData.length) {
    args.set(formData[0].name, {
      isRequired: hasRequiredParameterInRequestMedia(parameters, 'formData'),
      type: 'ReadStream',
    });
  }

  let genericType = 'Promise';
  let genericParameterType = isV3Api(operationId) && options.tagV3Methods ? 'void' : 'Response';
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
    const methodArguments = method.arguments || [];
    const matchingArgument = methodArguments.find(argument => argument.dest === param.name);
    // path param should be added to model method arguments if its corresponding 'operation' param does not have src property set
    if (matchingArgument && matchingArgument.src) {
      args.delete(param.name);
    }
  });

  const bodyModelName = getBodyModelName(operation);
  if (bodyModelName && bodyModelName === modelName) {
    args.delete(_.camelCase(operation.bodyModel));
  }

  return [args, returnType];
};

const convertTypeObjectsToTypeNames = (args, returnType,) => {
  const argTypes = Array.from(args.values()).map(arg => arg.type);
  return [...argTypes, returnType.genericType, returnType.genericParameterType];
};

const isImportablePropertyType = (property, hostModelName) => {
  const isRestricted = isRestrictedPropertyOverride(hostModelName, property.propertyName);
  // array properties do not have $ref specified for non-primitive model types
  return (property.$ref || property.isArray) && isImportableType(property.model) && !isRestricted;
};

const isRestrictedPropertyOverride = (modelName, propertyName) => {
  return RESTRICTED_MODEL_PROPERTY_OVERRIDES[modelName] &&
    RESTRICTED_MODEL_PROPERTY_OVERRIDES[modelName].includes(propertyName);
};
const isImportableType = type => {
  // query parameters are converted into array of parameter types
  return !MODELS_SHOULD_NOT_PROCESS.includes(type) && !Array.isArray(type);
};

const isConflictingPropertyName = (modelName, propertyName) =>
  KNOWN_CONFLICTING_PROPERTY_NAMES[modelName] &&
    KNOWN_CONFLICTING_PROPERTY_NAMES[modelName].includes(propertyName);

const containsRestrictedChars = (propertyName) =>
  PROPERTY_NAME_CHARACTERS_REQUIRE_ESCAPING.find(char => propertyName.includes(char));

const sanitizeModelPropertyName = (modelName, propertyName) => {
  let sanitizedPropertyName = propertyName;


  if (containsRestrictedChars(propertyName)) {
    sanitizedPropertyName = `'${propertyName}'`;
  }

  if (isConflictingPropertyName(modelName, propertyName)) {
    sanitizedPropertyName = `_${propertyName}`;
  }

  return sanitizedPropertyName;
};

const shouldGenerateOptionsType = modelName => {
  return !NO_OPTIONS_TYPE_MODELS.includes(modelName);
};

const getRestrictedProperties = modelName => RESTRICTED_MODEL_PROPERTIES[modelName] || [];

const containsRestrictedProperties = modelName => Boolean(getRestrictedProperties(modelName).length);

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
  sanitizeModelPropertyName,
  containsRestrictedChars,
  isConflictingPropertyName,
  isImportablePropertyType,
  isRestrictedPropertyOverride,
  shouldGenerateOptionsType,
  getRestrictedProperties,
  containsRestrictedProperties,
  hasRequiredParameterInRequestMedia,
};
