/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var PolicyRule = require('./PolicyRule');
const PasswordPolicyRuleActions = require('./PasswordPolicyRuleActions');
const PasswordPolicyRuleConditions = require('./PasswordPolicyRuleConditions');

/**
 * @class PasswordPolicyRule
 * @extends PolicyRule
 * @property { PasswordPolicyRuleActions } actions
 * @property { PasswordPolicyRuleConditions } conditions
 * @property { string } name
 */
class PasswordPolicyRule extends PolicyRule {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.actions) {
      this.actions = new PasswordPolicyRuleActions(this.actions);
    }
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new PasswordPolicyRuleConditions(this.conditions);
    }
  }

}

module.exports = PasswordPolicyRule;
