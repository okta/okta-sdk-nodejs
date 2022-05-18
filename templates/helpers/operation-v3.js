const fs = require('fs');
const path = require('path');

let v3Models = fs.readdirSync(path.join(__dirname, '../../src/types/v3/models/'));
v3Models = v3Models.map(fileName => fileName.split('.').shift().replace('-', ''));

const V3ApiOperations = {
  UserTypeApi: [
    'createUserType',
    'deleteUserType',
    'listUserTypes',
    'getUserType',
    'updateUserType',
    'replaceUserType'
  ],
  AuthenticatorApi: [
    'activateAuthenticator',
    'deactivateAuthenticator',
    'getAuthenticator',
    'listAuthenticators',
    'updateAuthenticator',
  ],
  SchemaApi: [
    'getApplicationUserSchema',
    'getGroupSchema',
    'getUserSchema',
    'updateApplicationUserProfile',
    'updateGroupSchema',
    'updateUserProfile',
  ],
  InlineHookApi: [
    'activateInlineHook',
    'createInlineHook',
    'deactivateInlineHook',
    'deleteInlineHook',
    'executeInlineHook',
    'getInlineHook',
    'listInlineHooks',
    'updateInlineHook',
  ],
  ProfileMappingApi: [
    'listProfileMappings',
    'updateProfileMapping',
    'getProfileMapping',
  ],
  DomainApi: [
    'createCertificate',
    'createDomain',
    'getDomain',
    'deleteDomain',
    'listDomains',
    'verifyDomain'
  ],
  LinkedObjectApi: [
    'addLinkedObjectDefinition',
    'getLinkedObjectDefinition',
    'deleteLinkedObjectDefinition',
    'listLinkedObjectDefinitions'
  ]
};

function isV3Model(modelName) {
  let regex = new RegExp(`^${modelName}$`, 'i');
  return v3Models.some(v3Model => regex.test(v3Model));
}

function isV3Api(operationId) {
  return Object.values(V3ApiOperations).find((operations) => operations.includes(operationId));
}

function v3ApiByOperationId(operationId) {
  const [api, _] = Object.entries(V3ApiOperations).find(([_, operations]) => operations.includes(operationId));
  return api;
}

module.exports = {
  isV3Model,
  isV3Api,
  v3ApiByOperationId,
};
