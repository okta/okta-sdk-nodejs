// Please run `yarn build:validateGenerated` to fill this mapping
// Keep it empty if you want to make breaking changes
const methodRenames = {
  // old -> new
  createGroup: 'addGroup',
  getOrgContactTypes: 'listOrgContactTypes',
  updateOrgHideOktaUIFooter: 'setOrgHideOktaUIFooter',
  updateOrgShowOktaUIFooter: 'setOrgShowOktaUIFooter',
  listRoleSubscriptions: 'listSubscriptionsRole',
  listRoleSubscriptionsByNotificationType: 'getSubscriptionsNotificationTypeRole',
  listUserSubscriptions: 'listSubscriptionsUser',
  listUserSubscriptionsByNotificationType: 'getSubscriptionsNotificationTypeUser',
  subscribeRoleSubscriptionByNotificationType: 'subscribeByNotificationTypeRole',
  subscribeUserSubscriptionByNotificationType: 'subscribeByNotificationTypeUser',
  unsubscribeRoleSubscriptionByNotificationType: 'unsubscribeByNotificationTypeRole',
  unsubscribeUserSubscriptionByNotificationType: 'unsubscribeByNotificationTypeUser',
  expirePasswordAndGetTemporaryPassword: 'expirePasswordWithTempPassword',
  generateResetPasswordToken: 'resetPassword',
  setLinkedObjectForUser: 'assignLinkedObjectValueForPrimary'
};

module.exports = {
  methodRenames
};
