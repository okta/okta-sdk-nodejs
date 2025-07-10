// For backward compatibility with 7.0 - group some APIs (identified by `tags` in spec)
const apiConsolidation = {
  // keys are tags in spec used to generate 7.0
  // values of `apis` are tags in newest spec, corresponding APIs will be consolidated to a single API as before (in 7.0)
  // Also see `x-tagGroups` in `management.yaml`
  Application: {
    apis: [
      'Application',
      'ApplicationUsers',
      'ApplicationGroups',
      'ApplicationConnections',
      'ApplicationTokens',
      'ApplicationGrants',
      'ApplicationFeatures',
      'ApplicationLogos',
      'ApplicationCWOConnections',
      'ApplicationExpressConfiguration',
      'ApplicationPolicies',
      'ApplicationSSO',
      'ApplicationSSOCredentialKey',
      'ApplicationSSOCredentialOAuth2ClientAuth',
      'ApplicationSSOFederatedClaims',
    ]
  },
  AuthorizationServer: {
    apis: [
      'AuthorizationServer',
      'AuthorizationServerScopes',
      'AuthorizationServerClaims',
      'AuthorizationServerKeys',
      'AuthorizationServerPolicies',
      'AuthorizationServerRules',
      'AuthorizationServerAssoc',
      'AuthorizationServerClients',
    ]
  },
  Customization: {
    apis: [
      'Brands',
      'Themes',
      'CustomTemplates',
      'EmailCustomization',
      'CustomPages',
    ]
  },
  RoleAssignment: {
    apis: [
      'RoleAssignmentAUser',
      'RoleAssignmentBGroup',
      'RoleAssignmentClient',
    ]
  },
  RoleTarget: {
    apis: [
      'RoleBTargetAdmin',
      'RoleBTargetBGroup',
      'RoleBTargetClient',
    ]
  },
  Group: {
    apis: [
      'Group',
      'GroupRule',
      'GroupOwner'
    ]
  },
  IdentityProvider: {
    apis: [
      'IdentityProvider',
      'IdentityProviderUsers',
      'IdentityProviderKeys',
      'IdentityProviderSigningKeys',
    ]
  },
  User: {
    apis: [
      'User',
      'UserLifecycle',
      'UserSessions',
      'UserResources',
      'UserCred',
      'UserGrant',
      'IdentityProviderUsers',
      'UserLinkedObject',
      'UserClassification',
      'UserOAuth',
      'UserRisk',
    ]
  },
  OrgSetting: {
    apis: [
      'OrgSettingGeneral',
      'OrgSettingContact',
      'OrgSettingCustomization',
      'OrgSettingCommunication',
      'OrgSettingSupport',
      'OrgSettingAdmin',
      'OrgSettingMetadata',
    ]
  },
  ResourceSet: {
    apis: [
      'RoleCResourceSet',
      'RoleCResourceSetResource',
      'RoleDResourceSetBinding',
      'RoleDResourceSetBindingMember',
    ]
  },
  Role: {
    apis: [
      'RoleECustom',
      'RoleECustomPermission',
    ]
  },
};

module.exports = {
  apiConsolidation
};
