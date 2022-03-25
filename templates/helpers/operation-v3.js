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
  ]
};

// TODO: make build script read these from v3/models
const V3Models = [
  'AllowedForEnum',
  'AuthenticatorProviderConfigurationUserNameTemplate',
  'AuthenticatorProviderConfigruation',
  'AuthenticatorProvider',
  'AuthenticatorSetting',
  'AuthenticatorStatus',
  'AuthenticatorType',
  'Authenticator',
  'ChannelBinding',
  'Compliance',
  'FipsEnum',
  'RequiredEnum',
  'UserType',
  'UserVerificationEnum'
];

function isV3Model(modelName) {
  return V3Models.includes(modelName);
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
