const _ = require('lodash');
const { isConflictingPropertyName, containsRestrictedChars, isRestrictedPropertyOverride } = require('./helpers/operation');
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
  operations.forEach(operation => {
    const responseModelName = operation.responseModel;
    if (responseModelName) {
      const model = modelResolver.getByName(responseModelName);
      if (model.requiresResolution) {
        operation.responseModelRequiresResolution = true;
      }
    }
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

  // add all the models and any related factories
  for (let model of models) {
    let jsTemplateName = 'model.js.hbs';
    let dtsTemplateName = 'model.d.ts.hbs';
    if (model.enum) {
      jsTemplateName = 'enum.js.hbs';
      dtsTemplateName = 'enum.d.ts.hbs';
    }

    templates.push({
      src: jsTemplateName,
      dest: `src/models/${model.modelName}.js`,
      context: model
    });

    templates.push({
      src: dtsTemplateName,
      dest: `src/types/models/${model.modelName}.d.ts`,
      context: model
    });

    if (model.resolutionStrategy) {
      const mapping = Object.entries(model.resolutionStrategy.valueToModelMapping).map(([propertyValue, className]) => {
        const classModel = models.filter(model => model.modelName === className)[0];
        return { propertyValue, modelName: classModel.resolutionStrategy ? `new factories.${className}()` : `models.${className}` };
      });
      templates.push({
        src: 'factory.js.hbs',
        dest: `src/factories/${model.modelName}Factory.js`,
        context: {
          parentModelName: model.modelName,
          mapping,
          propertyName: model.resolutionStrategy.propertyName
        }
      });
    }
  }

  templates.push({
    src: 'model.index.js.hbs',
    dest: 'src/models/index.js',
    context: { models }
  });

  templates.push({
    src: 'factories.index.js.hbs',
    dest: 'src/factories/index.js',
    context: { models: models.filter(model => model.requiresResolution) }
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
        const param = match.slice(1, match.length - 1);
        path = path.replace(match, `\${encodeURIComponent(${param})}`);
      }
    }
    return new handlebars.SafeString(path);
  });

  handlebars.registerHelper('modelImportBuilder', function (modelResolver, model) {
    if (!model.properties) {
      return;
    }
    const importStatements = new Set();
    model.properties.forEach(property => {
      const shouldProcess = operationUtils.isImportablePropertyType(property, model.modelName);
      const isEnum = property.isEnum || modelResolver.isEnum(property.model);
      if (shouldProcess && !isEnum) {
        importStatements.add(`const ${property.model} = require('./${property.model}');`);
      }
    });
    return Array.from(importStatements).join('\n');
  }.bind(null, modelResolver));

  handlebars.registerHelper('propertyCastBuilder', function (modelResolver, model) {
    if (!model.properties) {
      return;
    }
    const constructorStatements = [];

    model.properties.forEach(property => {
      if (isRestrictedPropertyOverride(model.modelName, property.propertyName)) {
        return;
      }
      let propertyName = property.propertyName;
      let dedupedPropertyName = propertyName;

      const propertyAccessor = propName => containsRestrictedChars(propName) ? `['${propName}']` : `.${propName}`;
      let propertyExistsOrHasTruthyValue = propName => `resourceJson${propertyAccessor(propName)}`;
      let isConflicting = isConflictingPropertyName(model.modelName, propertyName);
      if (isConflicting) {
        dedupedPropertyName = `_${propertyName}`;
        // for confilicting properties with primitive types, property value `false` can be misinterpreted as a non-existing property
        propertyExistsOrHasTruthyValue = propName => `Object.prototype.hasOwnProperty.call(resourceJson, '${propName}')`;
        // remove property set by parent Resource class
        constructorStatements.push(`    delete this['${property.propertyName}'];`);
      }

      const isEnum = property.isEnum || modelResolver.isEnum(property.model);
      let requiresInstantiation = !property.isHash && !isEnum && property.model && !['boolean', 'string', 'object'].includes(property.model);

      if (requiresInstantiation || isConflicting) {
        constructorStatements.push(`    if (resourceJson && ${propertyExistsOrHasTruthyValue(propertyName)}) {`);
        if (property.isArray) {
          constructorStatements.push(`      this${propertyAccessor(dedupedPropertyName)} = resourceJson${propertyAccessor(propertyName)}.map(resourceItem => new ${property.model}(resourceItem));`);
        } else if (property.model) {
          constructorStatements.push(`      this${propertyAccessor(dedupedPropertyName)} = new ${property.model}(resourceJson${propertyAccessor(propertyName)});`);
        } else {
          // explicitly assign non-instantiatable property only if it conflicts with method name
          constructorStatements.push(`      this${propertyAccessor(dedupedPropertyName)} = resourceJson${propertyAccessor(propertyName)};`);
        }
        constructorStatements.push('    }');
      }
    });
    return constructorStatements.join('\n');
  }.bind(null, modelResolver));

  handlebars.registerHelper('modelMethodPublicArgumentBuilder', (method, modelName) => {
    const args = [];

    const operation = method.operation;

    operation.pathParams.forEach(param => {
      const methodArguments = method.arguments || [];
      const matchingArgument = methodArguments.filter(argument => argument.dest === param.name)[0];
      if (!matchingArgument || !matchingArgument.src) {
        args.push(param.name);
      }
    });

    if ((operation.method === 'post' || operation.method === 'put') && operation.bodyModel && (operation.bodyModel !== modelName)) {
      args.push(_.camelCase(operation.bodyModel));
    }

    if (operation.queryParams.length) {
      args.push('queryParameters');
    }

    if (operation.formData.length) {
      args.push(operation.formData[0].name);
    }

    return args.join(', ');
  });

  handlebars.registerHelper('modelMethodProxyArgumentBuilder', (method, modelName) => {

    const args = [];

    const operation = method.operation;

    operation.pathParams.forEach(param => {
      const methodArguments = method.arguments || [];
      const matchingArgument = methodArguments.filter(argument => argument.dest === param.name)[0];
      if (matchingArgument && matchingArgument.src) {
        args.push(`this.${matchingArgument.src}`);
      } else {
        args.push(param.name);
      }
    });

    if ((operation.method === 'post' || operation.method === 'put') && operation.bodyModel) {
      args.push(operation.bodyModel === modelName ? 'this' : _.camelCase(operation.bodyModel));
    }

    if (operation.queryParams.length) {
      args.push('queryParameters');
    }

    if (operation.formData.length) {
      args.push(operation.formData[0].name);
    }

    return args.join(', ');
  });

  handlebars.registerHelper('modelMethodPublicArgumentJsDocBuilder', (method, modelName) => {

    const args = [];

    const operation = method.operation;

    operation.pathParams.forEach(param => {
      const methodArguments = method.arguments || [];
      const matchingArgument = methodArguments.filter(argument => argument.dest === param.name)[0];
      if (!matchingArgument || !matchingArgument.src) {
        args.push(`@param {${param.type}} ${param.name}`);
      }
    });

    if ((operation.method === 'post' || operation.method === 'put') && operation.bodyModel && (operation.bodyModel !== modelName)) {
      args.push(`@param {${operation.bodyModel}} ${_.camelCase(operation.bodyModel)}`);
    }

    if (operation.queryParams.length) {
      args.push('@param {object} queryParameters');
    }

    if (operation.formData.length) {
      args.push(`@param {${operation.formData[0].name}} fs.ReadStream`);
    }

    if (operation.responseModel) {
      if (operation.isArray) {
        args.push(`@returns {Collection} A collection that will yield {@link ${operation.responseModel}} instances.`);
      } else {
        args.push(`@returns {Promise<${operation.responseModel}>}`);
      }
    }

    if (!args.length) {
      return;
    }

    const output = '/**\n   * ' + args.join('\n   * ') + '\n   */\n  ';
    return output;
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

  handlebars.registerHelper('toEnumKey', (str) => {
    if (str && typeof str === 'string') {
      return str.toUpperCase().replace(/[:\-._]/g, '_');
    }
    return '';
  });
  return templates;
};
