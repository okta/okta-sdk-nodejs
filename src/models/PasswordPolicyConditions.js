/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyAuthenticationProviderCondition = require('./PasswordPolicyAuthenticationProviderCondition');
const PolicyPeopleCondition = require('./PolicyPeopleCondition');

/**
 * @class PasswordPolicyConditions
 * @extends Resource
 * @property { PasswordPolicyAuthenticationProviderCondition } authProvider
 * @property { PolicyPeopleCondition } people
 */
class PasswordPolicyConditions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.authProvider) {
      this.authProvider = new PasswordPolicyAuthenticationProviderCondition(this.authProvider);
    }
    if (resourceJson && resourceJson.people) {
      this.people = new PolicyPeopleCondition(this.people);
    }
  }

}

module.exports = PasswordPolicyConditions;
