function formatMethodSignature(methodName, args, returnType) {
  return `${methodName}(${formatArguments(args)}): ${formatParameterizedReturnType(returnType)};`;
}

function formatParameterizedReturnType({genericType, genericParameterType}) {
  return `${genericType}<${genericParameterType}>`;
}

function formatArguments(args) {
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
}

function formatObjectLiteralType(typeProps) {
  let objectLiteralType = '{\n';
  typeProps.forEach(prop => {
    const isRequired = prop.required ? '' : '?';
    const propType = convertSwaggerToTSType(prop.type);
    objectLiteralType += `    ${prop.name}${isRequired}: ${propType},\n`;
  });
  objectLiteralType += '  }';
  return objectLiteralType;
}

function formatInterfaceProperties(props) {
  const [_, __, indentLevel = 1] = Array.from(arguments);
  let padding = new Array(indentLevel).fill('  ').join('');
  return Object.keys(props).reduce((formattedProperies, propName) => {
    const propType = props[propName];
    if (typeof propType === 'object') {
      formattedProperies += `${padding}${propName}: {\n${formatInterfaceProperties(propType, __, indentLevel + 1)}${padding}};\n`;
    } else {
      const isRequired = propType.required ? '' : '?';
      formattedProperies += `${padding}${propName}${isRequired}: ${convertSwaggerToTSType(propType)};\n`;
    }
    return formattedProperies;
  }, '');
}

function formatImportStatements(importTypes, {
  isModelToModelImport = true,
  sourceFileSuffixToTrim = ''
} = {}) {
  const importStatements = [];
  importTypes.forEach(type => {
    if (type === 'Response') {
      importStatements.push('import { Response } from \'node-fetch\';');
    } else if (type === 'ReadStream') {
      importStatements.push('import { ReadStream } from \'fs\';');
    } else if (type === 'Collection') {
      importStatements.push(`import { Collection } from '${isModelToModelImport ? '..' : '.'}/collection';`);
    } else {
      const importSource = type.replace(sourceFileSuffixToTrim, '');
      importStatements.push(`import { ${type} } from '${isModelToModelImport ? './' : './models/'}${importSource}';`);
    }
  });
  return importStatements.join('\n');
}

function convertSwaggerToTSType(swaggerType, collectionElementType) {
  return {
    array: `${collectionElementType}[]`,
    integer: 'number',
    double: 'number',
    hash: '{[name: string]: unknown}',
    dateTime: 'string',
    password: 'string',
    object: 'Record<string, unknown>'
  }[swaggerType] || swaggerType;
}

module.exports = {
  formatMethodSignature,
  formatImportStatements,
  convertSwaggerToTSType,
  formatInterfaceProperties,
};
