/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Policy = require('./Policy');
const PasswordPolicyConditions = require('./PasswordPolicyConditions');
const PasswordPolicySettings = require('./PasswordPolicySettings');

/**
 * @class PasswordPolicy
 * @extends Policy
 * @property { PasswordPolicyConditions } conditions
 * @property { PasswordPolicySettings } settings
 */
class PasswordPolicy extends Policy {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new PasswordPolicyConditions(this.conditions);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new PasswordPolicySettings(this.settings);
    }
  }

}

module.exports = PasswordPolicy;
