/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const OktaSignOnPolicyRuleSignonActions = require('./OktaSignOnPolicyRuleSignonActions');

/**
 * @class OktaSignOnPolicyRuleActions
 * @extends Resource
 * @property { OktaSignOnPolicyRuleSignonActions } signon
 */
class OktaSignOnPolicyRuleActions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.signon) {
      this.signon = new OktaSignOnPolicyRuleSignonActions(this.signon);
    }
  }

}

module.exports = OktaSignOnPolicyRuleActions;
