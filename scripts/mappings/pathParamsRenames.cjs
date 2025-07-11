// Please run `yarn build:validateGenerated` to fill this mapping
// Keep it empty if you want to make breaking changes
const pathParamsRenames = {
  // values are old -> new
  getFeatureForApplication: { name: 'featureName' },
  updateFeatureForApplication: { name: 'featureName' },
  activateGroupRule: { ruleId: 'groupRuleId' },
  deactivateGroupRule: { ruleId: 'groupRuleId' },
  deleteGroupRule: { ruleId: 'groupRuleId' },
  getGroupRule: { ruleId: 'groupRuleId' },
  replaceGroupRule: { ruleId: 'groupRuleId' },
  deleteHookKey: { hookKeyId: 'id' },
  getHookKey: { hookKeyId: 'id' },
  replaceHookKey: { hookKeyId: 'id' },
  cloneIdentityProviderKey: { keyId: 'kid' },
  deleteIdentityProviderKey: { keyId: 'kid' },
  getCsrForIdentityProvider: { csrId: 'idpCsrId' },
  getIdentityProviderKey: { keyId: 'kid' },
  getIdentityProviderSigningKey: { keyId: 'kid' },
  publishCsrForIdentityProvider: { csrId: 'idpCsrId' },
  revokeCsrForIdentityProvider: { csrId: 'idpCsrId' },
  addMembersToBinding: { resourceSetId: 'resourceSetIdOrLabel' },
  addResourceSetResource: { resourceSetId: 'resourceSetIdOrLabel' },
  createResourceSetBinding: { resourceSetId: 'resourceSetIdOrLabel' },
  deleteBinding: { resourceSetId: 'resourceSetIdOrLabel' },
  deleteResourceSet: { resourceSetId: 'resourceSetIdOrLabel' },
  deleteResourceSetResource: { resourceSetId: 'resourceSetIdOrLabel' },
  getBinding: { resourceSetId: 'resourceSetIdOrLabel' },
  getMemberOfBinding: { resourceSetId: 'resourceSetIdOrLabel' },
  getResourceSet: { resourceSetId: 'resourceSetIdOrLabel' },
  listBindings: { resourceSetId: 'resourceSetIdOrLabel' },
  listMembersOfBinding: { resourceSetId: 'resourceSetIdOrLabel' },
  listResourceSetResources: { resourceSetId: 'resourceSetIdOrLabel' },
  replaceResourceSet: { resourceSetId: 'resourceSetIdOrLabel' },
  unassignMemberFromBinding: { resourceSetId: 'resourceSetIdOrLabel' },
  getGroupAssignedRole: { roleId: 'roleAssignmentId' },
  getUserAssignedRole: { roleId: 'roleAssignmentId' },
  unassignRoleFromGroup: { roleId: 'roleAssignmentId' },
  unassignRoleFromUser: { roleId: 'roleAssignmentId' },
  assignAllAppsAsTargetToRoleForUser: { roleId: 'roleAssignmentId' },
  assignAppInstanceTargetToAppAdminRoleForGroup: { roleId: 'roleAssignmentId', applicationId: 'appId' },
  assignAppInstanceTargetToAppAdminRoleForUser: { roleId: 'roleAssignmentId', applicationId: 'appId' },
  assignAppTargetToAdminRoleForGroup: { roleId: 'roleAssignmentId' },
  assignAppTargetToAdminRoleForUser: { roleId: 'roleAssignmentId' },
  assignGroupTargetToGroupAdminRole: { roleId: 'roleAssignmentId' },
  assignGroupTargetToUserRole: { roleId: 'roleAssignmentId' },
  listApplicationTargetsForApplicationAdministratorRoleForGroup: { roleId: 'roleAssignmentId' },
  listApplicationTargetsForApplicationAdministratorRoleForUser: { roleId: 'roleAssignmentId' },
  listGroupTargetsForGroupRole: { roleId: 'roleAssignmentId' },
  listGroupTargetsForRole: { roleId: 'roleAssignmentId' },
  unassignAppInstanceTargetFromAdminRoleForUser: { roleId: 'roleAssignmentId', applicationId: 'appId' },
  unassignAppInstanceTargetToAppAdminRoleForGroup: { roleId: 'roleAssignmentId', applicationId: 'appId' },
  unassignAppTargetFromAppAdminRoleForUser: { roleId: 'roleAssignmentId' },
  unassignAppTargetToAdminRoleForGroup: { roleId: 'roleAssignmentId' },
  unassignGroupTargetFromGroupAdminRole: { roleId: 'roleAssignmentId' },
  unassignGroupTargetFromUserAdminRole: { roleId: 'roleAssignmentId' },
  getApplicationUserSchema: { appInstanceId: 'appId' },
  updateApplicationUserProfile: { appInstanceId: 'appId' },
  listRoleSubscriptions: { roleTypeOrRoleId: 'roleRef' },
  listRoleSubscriptionsByNotificationType: { roleTypeOrRoleId: 'roleRef' },
  subscribeRoleSubscriptionByNotificationType: { roleTypeOrRoleId: 'roleRef' },
  unsubscribeRoleSubscriptionByNotificationType: { roleTypeOrRoleId: 'roleRef' },
  activateUser: { userId: 'id' },
  deactivateUser: { userId: 'id' },
  deleteLinkedObjectForUser: { userId: 'userIdOrLogin' },
  deleteUser: { userId: 'id' },
  expirePassword: { userId: 'id' },
  expirePasswordAndGetTemporaryPassword: { userId: 'id' },
  generateResetPasswordToken: { userId: 'id' },
  getUser: { userId: 'id' },
  listAppLinks: { userId: 'id' },
  listLinkedObjectsForUser: { userId: 'userIdOrLogin' },
  listUserBlocks: { userId: 'id' },
  listUserGroups: { userId: 'id' },
  listUserIdentityProviders: { userId: 'id' },
  reactivateUser: { userId: 'id' },
  replaceUser: { userId: 'id' },
  resetFactors: { userId: 'id' },
  setLinkedObjectForUser: { associatedUserId: 'userIdOrLogin' },
  suspendUser: { userId: 'id' },
  unlockUser: { userId: 'id' },
  unsuspendUser: { userId: 'id' },
  updateUser: { userId: 'id' }
};

module.exports = {
  pathParamsRenames
};
