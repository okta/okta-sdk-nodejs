/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const OktaSignOnPolicyRuleSignonSessionActions = require('./OktaSignOnPolicyRuleSignonSessionActions');

/**
 * @class OktaSignOnPolicyRuleSignonActions
 * @extends Resource
 * @property { string } access
 * @property { integer } factorLifetime
 * @property { string } factorPromptMode
 * @property { boolean } rememberDeviceByDefault
 * @property { boolean } requireFactor
 * @property { OktaSignOnPolicyRuleSignonSessionActions } session
 */
class OktaSignOnPolicyRuleSignonActions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.session) {
      this.session = new OktaSignOnPolicyRuleSignonSessionActions(this.session);
    }
  }

}

module.exports = OktaSignOnPolicyRuleSignonActions;
