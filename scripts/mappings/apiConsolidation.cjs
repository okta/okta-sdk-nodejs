// For backward compatibility with 7.0 group some APIs (identified by `tags` in spec)
const apiConsolidation = {
  // keys are tags in spec used to generate 7.0
  // values of `apis` are tags in newest spec, corresponding APIs will be consolidated to a single API as before (in 7.0  )
  Application: {
    apis: [
      'Application',
      'ApplicationUsers',
      'ApplicationGroups',
      'ApplicationConnections',
      'ApplicationTokens',
      'ApplicationGrants',
      'ApplicationSSOCredentialKey',
      'ApplicationFeatures',
      'ApplicationLogos',
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
    ]
  },
  Customization: {
    apis: [
      'Brands',
      'Themes',
      'CustomTemplates',
    ]
  },
  RoleAssignment: {
    apis: [
      'RoleAssignmentAUser',
      'RoleAssignmentBGroup',
    ]
  },
  RoleTarget: {
    apis: [
      'RoleBTargetAdmin',
    ]
  },
  Group: {
    apis: [
      'Group',
      'GroupRule',
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
    ]
  },
  OrgSetting: {
    apis: [
      'OrgSettingGeneral',
      'OrgSettingContact',
      'OrgSettingCustomization',
      'OrgSettingCommunication',
      'OrgSettingSupport',
    ]
  },
};

module.exports = {
  apiConsolidation
};
