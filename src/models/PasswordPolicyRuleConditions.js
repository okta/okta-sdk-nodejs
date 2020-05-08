/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PolicyNetworkCondition = require('./PolicyNetworkCondition');
const PolicyPeopleCondition = require('./PolicyPeopleCondition');

/**
 * @class PasswordPolicyRuleConditions
 * @extends Resource
 * @property { PolicyNetworkCondition } network
 * @property { PolicyPeopleCondition } people
 */
class PasswordPolicyRuleConditions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.network) {
      this.network = new PolicyNetworkCondition(this.network);
    }
    if (resourceJson && resourceJson.people) {
      this.people = new PolicyPeopleCondition(this.people);
    }
  }

}

module.exports = PasswordPolicyRuleConditions;
