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
  ],
  SystemLogApi: [
    'getLogs'
  ],
  FeatureApi: [
    'getFeature',
    'listFeatures',
    'listFeatureDependencies',
    'listFeatureDependents',
    'updateFeatureLifecycle'
  ],
  GroupApi: [
    'activateGroupRule',
    'addApplicationInstanceTargetToAppAdminRoleGivenToGroup',
    'addApplicationTargetToAdminRoleGivenToGroup',
    'addGroupTargetToGroupAdministratorRoleForGroup',
    'addUserToGroup',
    'assignRoleToGroup',
    'createGroup',
    'createGroupRule',
    'deactivateGroupRule',
    'deleteGroup',
    'deleteGroupRule',
    'getGroup',
    'getGroupRule',
    'getRole',
    'listApplicationTargetsForApplicationAdministratorRoleForGroup',
    'listAssignedApplicationsForGroup',
    'listGroupAssignedRoles',
    'listGroupRules',
    'listGroupTargetsForGroupRole',
    'listGroupUsers',
    'listGroups',
    'removeApplicationTargetFromAdministratorRoleGivenToGroup',
    'removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup',
    'removeGroupTargetFromGroupAdministratorRoleGivenToGroup',
    'removeRoleFromGroup',
    'removeUserFromGroup',
    'updateGroup',
    'updateGroupRule',
  ],
  EventHookApi: [
    'activateEventHook',
    'createEventHook',
    'deactivateEventHook',
    'deleteEventHook',
    'getEventHook',
    'listEventHooks',
    'updateEventHook',
    'verifyEventHook',
  ]
};

function getV3ReturnType(operationId) {
  return {
    assignRoleToGroup: 'Role | void'
  }[operationId];
}

function isV3Api(operationId) {
  return Object.values(V3ApiOperations).find((operations) => operations.includes(operationId));
}

function v3ApiByOperationId(operationId) {
  const [api, _] = Object.entries(V3ApiOperations).find(([_, operations]) => operations.includes(operationId));
  return api;
}

module.exports = {
  isV3Api,
  v3ApiByOperationId,
  getV3ReturnType,
};
