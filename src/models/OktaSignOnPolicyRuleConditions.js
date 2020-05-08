/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PolicyRuleAuthContextCondition = require('./PolicyRuleAuthContextCondition');
const PolicyNetworkCondition = require('./PolicyNetworkCondition');
const PolicyPeopleCondition = require('./PolicyPeopleCondition');

/**
 * @class OktaSignOnPolicyRuleConditions
 * @extends Resource
 * @property { PolicyRuleAuthContextCondition } authContext
 * @property { PolicyNetworkCondition } network
 * @property { PolicyPeopleCondition } people
 */
class OktaSignOnPolicyRuleConditions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.authContext) {
      this.authContext = new PolicyRuleAuthContextCondition(this.authContext);
    }
    if (resourceJson && resourceJson.network) {
      this.network = new PolicyNetworkCondition(this.network);
    }
    if (resourceJson && resourceJson.people) {
      this.people = new PolicyPeopleCondition(this.people);
    }
  }

}

module.exports = OktaSignOnPolicyRuleConditions;
