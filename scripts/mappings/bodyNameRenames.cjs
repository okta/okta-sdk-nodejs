// Please run `yarn build:validateGenerated` to fill this mapping
const bodyNameRenames = {
  // values are old -> new
  updateDefaultProvisioningConnectionForApplication: {
    ProvisioningConnectionRequest: 'updateDefaultProvisioningConnectionForApplicationRequest'
  },
  updateFeatureForApplication: { CapabilitiesObject: 'updateFeatureForApplicationRequest' },
  assignGroupOwner: { GroupOwner: 'AssignGroupOwnerRequestBody' },
  createInlineHook: { inlineHook: 'inlineHookCreate' },
};

module.exports = {
  bodyNameRenames
};
