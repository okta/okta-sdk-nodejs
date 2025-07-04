const { apiConsolidation } = require('./apiConsolidation.cjs');
const { methodRenames } = require('./methodRenames.cjs');
const { pathParamsRenames } = require('./pathParamsRenames.cjs');
const { bodyNameRenames } = require('./bodyNameRenames.cjs');

// Schemas to add `x-okta-extensible`
const schemasToForceExtensible = [
  'UserProfile',
];

// See file `typeMap.mustache` which contains type mappings based on discriminator values.
// For simplicity most of keys in mappings are simple, but you can choose classes to add its name as a prefix
//  to be more explicit and prevent possible naming collision issues.
const schemasToForceDiscriminatorPrefixInTypeMap = [
  'BehaviorRule',
  'PolicyRule',
  'InlineHookChannel',
];

const customDiscriminatorsForEndpointsResponses = [
  {
    propertyName: 'type',
    mapping: {
      'CUSTOM': '#/components/schemas/CustomRole',
      '*': '#/components/schemas/StandardRole'
    }
  },
];

module.exports = {
  apiConsolidation,
  methodRenames,
  pathParamsRenames,
  bodyNameRenames,
  schemasToForceExtensible,
  schemasToForceDiscriminatorPrefixInTypeMap,
  customDiscriminatorsForEndpointsResponses,
};
