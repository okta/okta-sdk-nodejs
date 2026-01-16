// Please run `yarn build:validateGenerated` to fill this mapping
// Keep it empty if you want to make breaking changes
const bodyNameRenames = {
  // values are old -> new
  createAgentPoolsUpdate: { AgentPoolUpdate: 'agentPoolUpdate' },
  updateAgentPoolsUpdate: { AgentPoolUpdate: 'agentPoolUpdate' },
  updateAgentPoolsUpdateSettings: { AgentPoolUpdateSetting: 'agentPoolUpdateSetting' },
  updateDefaultProvisioningConnectionForApplication: {
    ProvisioningConnectionRequest: 'updateDefaultProvisioningConnectionForApplicationRequest'
  },
  updateFeatureForApplication: { CapabilitiesObject: 'updateFeatureForApplicationRequest' },
  replaceCustomDomain: { UpdateDomain: 'updateDomain' },
  createBrand: { CreateBrandRequest: 'createBrandRequest' },
  replaceCustomizedErrorPage: { ErrorPage: 'errorPage' },
  replaceCustomizedSignInPage: { SignInPage: 'signInPage' },
  replaceEmailSettings: { EmailSettings: 'emailSettings' },
  replacePreviewErrorPage: { ErrorPage: 'errorPage' },
  replacePreviewSignInPage: { SignInPage: 'signInPage' },
  replaceSignOutPageSettings: { HostedPage: 'hostedPage' },
  assignGroupOwner: { GroupOwner: 'assignGroupOwnerRequestBody' },
  uploadIdentitySourceDataForDelete: { BulkDeleteRequestBody: 'bulkDeleteRequestBody' },
  uploadIdentitySourceDataForUpsert: { BulkUpsertRequestBody: 'bulkUpsertRequestBody' },
  createInlineHook: { inlineHook: 'inlineHookCreate' },
  bulkRemoveEmailAddressBounces: { BouncesRemoveListObj: 'bouncesRemoveListObj' },
  updateOrgSettings: { OrgSetting: 'orgSetting' },
  replaceRateLimitSettingsAdminNotifications: { RateLimitAdminNotifications: 'rateLimitAdminNotifications' },
  updateGroupSchema: { GroupSchema: 'groupSchema' },

  // manual
  assignRoleToClient: { assignRoleRequest: 'assignRoleToClientRequest' },
};

module.exports = {
  bodyNameRenames
};
