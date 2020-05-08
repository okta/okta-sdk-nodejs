/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyRuleAction = require('./PasswordPolicyRuleAction');

/**
 * @class PasswordPolicyRuleActions
 * @extends Resource
 * @property { PasswordPolicyRuleAction } passwordChange
 * @property { PasswordPolicyRuleAction } selfServicePasswordReset
 * @property { PasswordPolicyRuleAction } selfServiceUnlock
 */
class PasswordPolicyRuleActions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.passwordChange) {
      this.passwordChange = new PasswordPolicyRuleAction(this.passwordChange);
    }
    if (resourceJson && resourceJson.selfServicePasswordReset) {
      this.selfServicePasswordReset = new PasswordPolicyRuleAction(this.selfServicePasswordReset);
    }
    if (resourceJson && resourceJson.selfServiceUnlock) {
      this.selfServiceUnlock = new PasswordPolicyRuleAction(this.selfServiceUnlock);
    }
  }

}

module.exports = PasswordPolicyRuleActions;
