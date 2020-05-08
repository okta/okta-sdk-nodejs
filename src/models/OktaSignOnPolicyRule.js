/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var PolicyRule = require('./PolicyRule');
const OktaSignOnPolicyRuleActions = require('./OktaSignOnPolicyRuleActions');
const OktaSignOnPolicyRuleConditions = require('./OktaSignOnPolicyRuleConditions');

/**
 * @class OktaSignOnPolicyRule
 * @extends PolicyRule
 * @property { OktaSignOnPolicyRuleActions } actions
 * @property { OktaSignOnPolicyRuleConditions } conditions
 * @property { string } name
 */
class OktaSignOnPolicyRule extends PolicyRule {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.actions) {
      this.actions = new OktaSignOnPolicyRuleActions(this.actions);
    }
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new OktaSignOnPolicyRuleConditions(this.conditions);
    }
  }

}

module.exports = OktaSignOnPolicyRule;
