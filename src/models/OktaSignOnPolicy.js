/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Policy = require('./Policy');
const OktaSignOnPolicyConditions = require('./OktaSignOnPolicyConditions');

/**
 * @class OktaSignOnPolicy
 * @extends Policy
 * @property { OktaSignOnPolicyConditions } conditions
 */
class OktaSignOnPolicy extends Policy {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new OktaSignOnPolicyConditions(this.conditions);
    }
  }

}

module.exports = OktaSignOnPolicy;
