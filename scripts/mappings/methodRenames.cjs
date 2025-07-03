// Please run `yarn build:validateGenerated` to fill this mapping
const methodRenames = {
  // new -> old
  addGroup: 'createGroup',
  listOrgContactTypes: 'getOrgContactTypes',
  setOrgHideOktaUIFooter: 'updateOrgHideOktaUIFooter',
  setOrgShowOktaUIFooter: 'updateOrgShowOktaUIFooter',
  addResourceSetResources: 'addResourceSetResource',
  listSubscriptionsRole: 'listRoleSubscriptions',
  getSubscriptionsNotificationTypeRole: 'listRoleSubscriptionsByNotificationType',
  listSubscriptionsUser: 'listUserSubscriptions',
  getSubscriptionsNotificationTypeUser: 'listUserSubscriptionsByNotificationType',
  subscribeByNotificationTypeRole: 'subscribeRoleSubscriptionByNotificationType',
  subscribeByNotificationTypeUser: 'subscribeUserSubscriptionByNotificationType',
  unsubscribeByNotificationTypeRole: 'unsubscribeRoleSubscriptionByNotificationType',
  unsubscribeByNotificationTypeUser: 'unsubscribeUserSubscriptionByNotificationType',
  expirePasswordWithTempPassword: 'expirePasswordAndGetTemporaryPassword',
  resetPassword: 'generateResetPasswordToken',
  assignLinkedObjectValueForPrimary: 'setLinkedObjectForUser'
};

module.exports = {
  methodRenames
};
