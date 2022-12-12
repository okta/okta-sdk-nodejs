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
  ],
  NetworkZoneApi: [
    'listNetworkZones',
    'createNetworkZone',
    'deleteNetworkZone',
    'getNetworkZone',
    'updateNetworkZone',
    'activateNetworkZone',
    'deactivateNetworkZone'
  ],
  ThreatInsightApi: [
    'getCurrentConfiguration',
    'updateConfiguration'
  ],
  OrgSettingApi: [
    'bulkRemoveEmailAddressBounces',
    'extendOktaSupport',
    'getOktaCommunicationSettings',
    'getOrgContactTypes',
    'getOrgContactUser',
    'getOrgOktaSupportSettings',
    'getOrgPreferences',
    'getOrgSettings',
    'grantOktaSupport',
    'hideOktaUIFooter',
    'optInUsersToOktaCommunicationEmails',
    'optOutUsersFromOktaCommunicationEmails',
    'partialUpdateOrgSetting',
    'revokeOktaSupport',
    'showOktaUIFooter',
    'updateOrgContactUser',
    'updateOrgLogo',
    'updateOrgSetting'
  ],
  ApplicationApi: [
    'activateApplication',
    'activateDefaultProvisioningConnectionForApplication',
    'assignUserToApplication',
    'cloneApplicationKey',
    'createApplication',
    'createApplicationGroupAssignment',
    'deactivateApplication',
    'deactivateDefaultProvisioningConnectionForApplication',
    'deleteApplication',
    'deleteApplicationGroupAssignment',
    'deleteApplicationUser',
    'generateApplicationKey',
    'generateCsrForApplication',
    'getApplication',
    'getApplicationGroupAssignment',
    'getApplicationKey',
    'getApplicationUser',
    'getCsrForApplication',
    'getDefaultProvisioningConnectionForApplication',
    'getFeatureForApplication',
    'getOAuth2TokenForApplication',
    'getScopeConsentGrant',
    'grantConsentToScope',
    'listApplicationGroupAssignments',
    'listApplicationKeys',
    'listApplicationUsers',
    'listApplications',
    'listCsrsForApplication',
    'listFeaturesForApplication',
    'listOAuth2TokensForApplication',
    'listScopeConsentGrants',
    'publishCerCert',
    'revokeCsrFromApplication',
    'revokeOAuth2TokenForApplication',
    'revokeOAuth2TokensForApplication',
    'revokeScopeConsentGrant',
    'setDefaultProvisioningConnectionForApplication',
    'updateApplication',
    'updateApplicationUser',
    'updateFeatureForApplication',
    'uploadApplicationLogo',
    // obsolete
    'publishBinaryCerCert',
    'publishDerCert',
    'publishBinaryDerCert',
    'publishBinaryPemCert'
  ],
  AuthorizationServerApi: [
    'activateAuthorizationServer',
    'activateAuthorizationServerPolicy',
    'activateAuthorizationServerPolicyRule',
    'createAuthorizationServer',
    'createAuthorizationServerPolicy',
    'createAuthorizationServerPolicyRule',
    'createOAuth2Claim',
    'createOAuth2Scope',
    'deactivateAuthorizationServer',
    'deactivateAuthorizationServerPolicy',
    'deactivateAuthorizationServerPolicyRule',
    'deleteAuthorizationServer',
    'deleteAuthorizationServerPolicy',
    'deleteAuthorizationServerPolicyRule',
    'deleteOAuth2Claim',
    'deleteOAuth2Scope',
    'getAuthorizationServer',
    'getAuthorizationServerPolicy',
    'getAuthorizationServerPolicyRule',
    'getOAuth2Claim',
    'getOAuth2Scope',
    'getRefreshTokenForAuthorizationServerAndClient',
    'listAuthorizationServerKeys',
    'listAuthorizationServerPolicies',
    'listAuthorizationServerPolicyRules',
    'listAuthorizationServers',
    'listOAuth2Claims',
    'listOAuth2ClientsForAuthorizationServer',
    'listOAuth2Scopes',
    'listRefreshTokensForAuthorizationServerAndClient',
    'revokeRefreshTokenForAuthorizationServerAndClient',
    'revokeRefreshTokensForAuthorizationServerAndClient',
    'rotateAuthorizationServerKeys',
    'updateAuthorizationServer',
    'updateAuthorizationServerPolicy',
    'updateAuthorizationServerPolicyRule',
    'updateOAuth2Claim',
    'updateOAuth2Scope',
  ],
  CustomizationApi: [
    'deleteBrandThemeBackgroundImage',
    'deleteBrandThemeFavicon',
    'deleteBrandThemeLogo',
    'deleteEmailTemplateCustomization',
    'createEmailTemplateCustomization',
    'deleteEmailTemplateCustomizations',
    'listEmailTemplateCustomizations',
    'getEmailTemplateCustomization',
    'getEmailTemplateCustomizationPreview',
    'getEmailTemplateDefaultContent',
    'getEmailTemplateDefaultContentPreview',
    'updateEmailTemplateCustomization',
    'listEmailTemplates',
    'sendTestEmail',
    'getEmailSettings',
    'getEmailTemplate',
    'deleteAllCustomizations',
    'getBrand',
    'getBrandTheme',
    'listBrandThemes',
    'listBrands',
    'updateBrand',
    'updateBrandTheme',
    'uploadBrandThemeBackgroundImage',
    'uploadBrandThemeFavicon',
    'uploadBrandThemeLogo',
  ],
  TrustedOriginApi: [
    'activateOrigin',
    'createOrigin',
    'deactivateOrigin',
    'deleteOrigin',
    'getOrigin',
    'listOrigins',
    'updateOrigin',
  ],
  UserFactorApi: [
    'activateFactor',
    'deleteFactor',
    'enrollFactor',
    'getFactor',
    'getFactorTransactionStatus',
    'listFactors',
    'listSupportedFactors',
    'listSupportedSecurityQuestions',
    'verifyFactor',
  ],
  UserApi: [
    'activateUser',
    'addAllAppsAsTargetToRole',
    'addApplicationTargetToAdminRoleForUser',
    'addApplicationTargetToAppAdminRoleForUser',
    'addGroupTargetToRole',
    'assignRoleToUser',
    'changePassword',
    'changeRecoveryQuestion',
    'clearUserSessions',
    'createUser',
    'deactivateOrDeleteUser',
    'deactivateUser',
    'expirePassword',
    'expirePasswordAndGetTemporaryPassword',
    'forgotPasswordGenerateOneTimeToken',
    'forgotPasswordSetNewPassword',
    'getLinkedObjectsForUser',
    'getRefreshTokenForUserAndClient',
    'getUser',
    'getUserGrant',
    'getUserRole',
    'listAppLinks',
    'listApplicationTargetsForApplicationAdministratorRoleForUser',
    'listAssignedRolesForUser',
    'listGrantsForUserAndClient',
    'listGroupTargetsForRole',
    'listRefreshTokensForUserAndClient',
    'listUserClients',
    'listUserGrants',
    'listUserGroups',
    'listUserIdentityProviders',
    'listUsers',
    'partialUpdateUser',
    'reactivateUser',
    'removeApplicationTargetFromAdministratorRoleForUser',
    'removeApplicationTargetFromApplicationAdministratorRoleForUser',
    'removeGroupTargetFromRole',
    'removeLinkedObjectForUser',
    'removeRoleFromUser',
    'resetFactors',
    'resetPassword',
    'revokeGrantsForUserAndClient',
    'revokeTokenForUserAndClient',
    'revokeTokensForUserAndClient',
    'revokeUserGrant',
    'revokeUserGrants',
    'setLinkedObjectForUser',
    'suspendUser',
    'unlockUser',
    'unsuspendUser',
    'updateUser',
  ],
  IdentityProviderApi: [
    'activateIdentityProvider',
    'cloneIdentityProviderKey',
    'createIdentityProvider',
    'createIdentityProviderKey',
    'deactivateIdentityProvider',
    'deleteIdentityProvider',
    'deleteIdentityProviderKey',
    'generateCsrForIdentityProvider',
    'generateIdentityProviderSigningKey',
    'getCsrForIdentityProvider',
    'getIdentityProvider',
    'getIdentityProviderApplicationUser',
    'getIdentityProviderKey',
    'getIdentityProviderSigningKey',
    'linkUserToIdentityProvider',
    'listCsrsForIdentityProvider',
    'listIdentityProviderApplicationUsers',
    'listIdentityProviderKeys',
    'listIdentityProviderSigningKeys',
    'listIdentityProviders',
    'listSocialAuthTokens',
    'publishCerCertForIdentityProvider',
    'revokeCsrForIdentityProvider',
    'unlinkUserFromIdentityProvider',
    'updateIdentityProvider',
    // obsolete
    'publishBinaryCerCertForIdentityProvider',
    'publishDerCertForIdentityProvider',
    'publishBinaryDerCertForIdentityProvider',
    'publishBinaryPemCertForIdentityProvider',
  ],
  SessionApi: [
    'createSession',
    'endSession',
    'getSession',
    'refreshSession',
  ],
  TemplateApi: [
    'createSmsTemplate',
    'deleteSmsTemplate',
    'getSmsTemplate',
    'listSmsTemplates',
    'partialUpdateSmsTemplate',
    'updateSmsTemplate'
  ],
  PolicyApi: [
    'activatePolicy',
    'activatePolicyRule',
    'clonePolicy',
    'createPolicy',
    'createPolicyRule',
    'deactivatePolicy',
    'deactivatePolicyRule',
    'deletePolicy',
    'deletePolicyRule',
    'getPolicy',
    'getPolicyRule',
    'listPolicies',
    'listPolicyRules',
    'updatePolicy',
    'updatePolicyRule'
  ],
  SubscriptionApi: [
    'getRoleSubscriptionByNotificationType',
    'getUserSubscriptionByNotificationType',
    'listRoleSubscriptions',
    'listUserSubscriptions',
    'subscribeRoleSubscriptionByNotificationType',
    'subscribeUserSubscriptionByNotificationType',
    'unsubscribeRoleSubscriptionByNotificationType',
    'unsubscribeUserSubscriptionByNotificationType',
  ]
};

function getV3ReturnType(operationId) {
  return {
    assignRoleToGroup: 'Role | void',
    getEmailTemplateDefaultContent: 'EmailDefaultContent',
    getEmailTemplateDefaultContentPreview: 'EmailPreview',
    createEmailTemplateCustomization: 'EmailCustomization',
    getEmailTemplateCustomizationPreview: 'EmailPreview',
    getEmailTemplateCustomization: 'EmailCustomization',
    listEmailTemplateCustomizations: 'EmailCustomization',
    updateEmailTemplateCustomization: 'EmailCustomization',

  }[operationId];
}

function getV3ArgumentsOverride(argumentName, operationId) {
  const mapping = {
    emailTemplateTestRequest: ['language', 'string'],
    emailTemplateCustomizationRequest: ['instance', 'EmailCustomization'],
    userIdString: ['orgContactUser', 'OrgContactUser'],
    networkZone: ['zone', 'NetworkZone'],
    csrMetadata: ['metadata', 'CsrMetadata'],
    userFactor: ['body', 'UserFactor'],
    activateFactorRequest: ['body', 'ActivateFactorRequest'],
    verifyFactorRequest: ['body', 'VerifyFactorRequest'],
    authorizationServerPolicyRule: ['policyRule', 'AuthorizationServerPolicyRule'],
    authorizationServerPolicy: ['policy', 'AuthorizationServerPolicy'],
    inlineHookPayload: ['payloadData', 'InlineHookPayload'],
    capabilitiesObject: ['CapabilitiesObject', 'CapabilitiesObject'],
    provisioningConnectionRequest: ['ProvisioningConnectionRequest', 'ProvisioningConnectionRequest'],
    jwkUse: ['use', 'JwkUse'],
    groupSchema: ['GroupSchema', 'GroupSchema'],
    domainCertificate: ['certificate', 'DomainCertificate'],
    createUserRequest: ['body', 'CreateUserRequest'],
    userSchema: ['body', 'UserSchema', [
      'updateApplicationUserProfile'
    ]],
    certificate: ['body', 'string', [
      'publishCerCert',
      'publishCerCertForIdentityProvider',
      // obsolete
      'publishBinaryCerCert',
      'publishDerCert',
      'publishBinaryDerCert',
      'publishBinaryPemCert',
      'publishBinaryCerCertForIdentityProvider',
      'publishDerCertForIdentityProvider',
      'publishBinaryDerCertForIdentityProvider',
      'publishBinaryPemCertForIdentityProvider',
    ]],
    orgSetting: ['OrgSetting', 'OrgSetting', [
      'partialUpdateOrgSetting'
    ]],
  };
  let ovr = mapping[argumentName];
  if (ovr && ovr[2] && operationId && !ovr[2].includes(operationId)) {
    ovr = undefined;
  }
  return ovr;
}

function getV3MethodName(v2OperationId) {
  return {
    createEmailTemplateCustomization: 'createEmailCustomization',
    deleteEmailTemplateCustomizations: 'deleteAllCustomizations',
    deleteEmailTemplateCustomization: 'deleteEmailCustomization',
    listEmailTemplateCustomizations: 'listEmailCustomizations',
    getEmailTemplateCustomization: 'getEmailCustomization',
    getEmailTemplateCustomizationPreview: 'getCustomizationPreview',
    getEmailTemplateDefaultContent: 'getEmailDefaultContent',
    getEmailTemplateDefaultContentPreview: 'getEmailDefaultPreview',
    updateEmailTemplateCustomization: 'updateEmailCustomization',
    publishCerCertForIdentityProvider: 'publishCsrForIdentityProvider',
    publishCerCert: 'publishCsrFromApplication',
    forgotPasswordGenerateOneTimeToken: 'forgotPassword',
    // obsolete
    publishBinaryCerCert: 'publishCsrFromApplication',
    publishDerCert: 'publishCsrFromApplication',
    publishBinaryDerCert: 'publishCsrFromApplication',
    publishBinaryPemCert: 'publishCsrFromApplication',
    publishBinaryCerCertForIdentityProvider: 'publishCsrForIdentityProvider',
    publishDerCertForIdentityProvider: 'publishCsrForIdentityProvider',
    publishBinaryDerCertForIdentityProvider: 'publishCsrForIdentityProvider',
    publishBinaryPemCertForIdentityProvider: 'publishCsrForIdentityProvider',
    deactivateOrDeleteUser: 'deleteUser',
  }[v2OperationId] || v2OperationId;
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
  getV3ArgumentsOverride,
  getV3MethodName,
};
