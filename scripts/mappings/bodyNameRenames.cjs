// Please run `yarn build:validateGenerated` to fill this mapping
// Keep it empty if you want to make breaking changes
const bodyNameRenames = {
  // values are old -> new
  updateDefaultProvisioningConnectionForApplication: {
    ProvisioningConnectionRequest: 'updateDefaultProvisioningConnectionForApplicationRequest'
  },
  updateFeatureForApplication: { CapabilitiesObject: 'updateFeatureForApplicationRequest' },
  assignGroupOwner: { GroupOwner: 'AssignGroupOwnerRequestBody' },
  createInlineHook: { inlineHook: 'inlineHookCreate' },

  // manual
  assignRoleToClient: { assignRoleRequest: 'assignRoleToClientRequest' },
};

module.exports = {
  bodyNameRenames
};
