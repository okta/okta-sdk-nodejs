/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PolicyPeopleCondition = require('./PolicyPeopleCondition');

/**
 * @class OktaSignOnPolicyConditions
 * @extends Resource
 * @property { PolicyPeopleCondition } people
 */
class OktaSignOnPolicyConditions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.people) {
      this.people = new PolicyPeopleCondition(this.people);
    }
  }

}

module.exports = OktaSignOnPolicyConditions;
