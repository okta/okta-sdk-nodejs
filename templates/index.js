const _ = require('lodash');
const { isV3Api, v3ApiByOperationId, getV3MethodName } = require('./helpers/operation-v3');
const codegenConfig = require('./swagger-codegen-config.json');
const { useObjectParameters } = codegenConfig.additionalProperties;

const js = module.exports;
const operationUtils = require('./helpers/operation');
const { convertSwaggerToTSType } = require('./helpers/typescript-formatter');

/**
 * Easy lookup of models from the models array
 *
 * @class ModelResolver
 */
class ModelResolver {
  constructor(models) {
    this.models = models;
    this.enums = new Set();
    models.forEach(model => {
      if (model.enum) {
        this.enums.add(model.modelName);
      }
    });
  }

  getByName(name) {
    const match = this.models.filter(model => model.modelName === name);
    return match && match[0];
  }

  isEnum(name) {
    return this.enums.has(name);
  }
}

/**
 * This file is used by the @okta/openapi generator.  It defines language-specific
 * post-processing of the JSON spec, as well as handebars helpers.  This file is meant
 * to give you control over the data that handlebars uses when processing your templates
 */

js.process = ({spec, operations, models, handlebars}) => {

  // A map of operation Id's do their definition, so that
  // we can reference them when building out methods for x-okta-links

  // Collect all the operations

  const templates = [];

  const modelResolver = new ModelResolver(models);

  // Add a property to the operation that lets the client template know if the response needs resolution
  // Group header parameters into a property
  operations.forEach(operation => {
    const responseModelName = operation.responseModel;
    if (responseModelName) {
      const model = modelResolver.getByName(responseModelName);
      if (model.requiresResolution) {
        operation.responseModelRequiresResolution = true;
      }
    }
    operation.headerParams = operation.parameters.filter(param => param.in === 'header').map(param => ({...param, name: param.name.replace(/-/g, '_')}));
  });

  templates.push({
    src: 'index.d.ts.hbs',
    dest: 'src/types/index.d.ts',
    context: {models}
  });

  templates.push({
    src: 'generated-client.d.ts.hbs',
    dest: 'src/types/generated-client.d.ts',
    context: {operations, spec}
  });

  templates.push({
    src: 'generated-client.js.hbs',
    dest: 'src/generated-client.js',
    context: {operations, spec}
  });

  // Add helpers

  // Register Operation helpers
  Object.keys(operationUtils).forEach(key => handlebars.registerHelper(key, operationUtils[key]));

  // TODO: move helpers to modules
  const paramMatcher = /{(.*?)}/g;
  handlebars.registerHelper('replacePathParams', (path) => {
    // Everywhere there's a {id}, replace it with {opts.id}
    if (paramMatcher.test(path)) {
      const matches = path.match(paramMatcher);
      for (let match of matches) {
        const param = match.slice(1);
        path = path.replace(match, `\${${param}`);
      }
    }
    return new handlebars.SafeString(path);
  });

  handlebars.registerHelper('getAffectedResources', (path) => {
    const resources = [];
    let pl = path.length;
    while (pl--) {
      if (path[pl] === '}') {
        const resourcePath = path.slice(0, pl + 1).replace(/{/g, '${');
        resources.push('${this.baseUrl}' + resourcePath);
      }
    }
    const lines = JSON.stringify(resources, null, 2).replace(/"/g, '`').split('\n');
    const indented = [lines[0]];
    for (let l = 1, ll = lines.length; l < ll; l++) {
      indented.push(`    ${lines[l]}`);
    }
    return indented.join('\n');
  });

  handlebars.registerHelper('convertSwaggerToTSType', convertSwaggerToTSType);

  handlebars.registerHelper('isV3Api', isV3Api);
  handlebars.registerHelper('v3ApiByOperationId', v3ApiByOperationId);
  handlebars.registerHelper('getV3MethodName', getV3MethodName);
  handlebars.registerHelper('toCamelCase', _.camelCase);
  handlebars.registerHelper('useObjectParameters', () => useObjectParameters);

  return templates;
};
