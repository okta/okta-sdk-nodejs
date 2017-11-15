const _ = require('lodash');
const js = module.exports;

/**
 * Easy lookup of models from the models array
 *
 * @class ModelResolver
 */
class ModelResolver {
  constructor(models) {
    this.models = models
  }
  getByName(name) {
    const match = this.models.filter(model => model.modelName === name);
    return match && match[0];
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

  const extensibleModels = new Set();

  const modelGraph = {} ;

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
    src: 'generated-client.js.hbs',
    dest: 'src/generated-client.js',
    context: {operations, spec}
  });

  // add all the models and any related factories
  for (let model of models) {
    templates.push({
      src: 'model.js.hbs',
      dest: `src/models/${model.modelName}.js`,
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
    return path;
  });

  handlebars.registerHelper('modelImportBuilder', (model) => {
    if (!model.properties) {
      return;
    }
    const importStatements = new Set();
    model.properties.forEach(property => {
      if (property.$ref && property.model !== 'object' && !property.isEnum) {
        importStatements.add(`const ${property.model} = require('./${property.model}');`);
      }
    });
    return Array.from(importStatements).join('\n');
  });

  handlebars.registerHelper('propertyCastBuilder', (model) => {
    if (!model.properties) {
      return;
    }
    const constructorStatements = [];
    model.properties.forEach(property => {
      if (property.$ref && property.model !== 'object' && !property.isEnum) {
        constructorStatements.push(`    if (resourceJson && resourceJson.${property.propertyName}) {`);
        constructorStatements.push(`      this.${property.propertyName} = new ${property.model}(this.${property.propertyName});`);
        constructorStatements.push(`    }`);
      }
    });
    return constructorStatements.join('\n');
  });

  handlebars.registerHelper('operationArgumentBuilder', (operation) => {

    const args = [];

    operation.pathParams.map((arg) => args.push(arg.name));

    if ((operation.method === 'post' || operation.method === 'put') && operation.bodyModel) {
      args.push(_.camelCase(operation.bodyModel));
    }

    if (operation.queryParams.length) {
      args.push('queryParameters');
    }

    return args.join(', ');
  });

  handlebars.registerHelper('modelMethodPublicArgumentBuilder', (method, modelName) => {

    const args = [];

    const operation = method.operation;

    operation.pathParams.forEach(param => {
      const matchingArgument = method.arguments.filter(argument => argument.dest === param.name)[0];
      if (!matchingArgument || !matchingArgument.src){
        args.push(param.name);
      }
    });

    if ((operation.method === 'post' || operation.method === 'put') && operation.bodyModel && (operation.bodyModel !== modelName)) {
      args.push(_.camelCase(operation.bodyModel));
    }

    if (operation.queryParams.length) {
      args.push('queryParameters');
    }

    return args.join(', ');
  });

  handlebars.registerHelper('modelMethodProxyArgumentBuilder', (method, modelName) => {

    const args = [];

    const operation = method.operation;

    operation.pathParams.forEach(param => {
      const matchingArgument = method.arguments.filter(argument => argument.dest === param.name)[0];
      if (matchingArgument && matchingArgument.src){
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

    return args.join(', ');
  });

  handlebars.registerHelper('jsdocBuilder', (operation) => {
    const lines = ['*'];

    if (operation.pathParams.length) {
      operation.pathParams.map(argument => {
        return `   * @param ${argument.name} {String}`;
      }).forEach(line => lines.push(line));
    }

    if (operation.bodyModel) {
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

    return lines.join('\n');
  });

  return templates;
};