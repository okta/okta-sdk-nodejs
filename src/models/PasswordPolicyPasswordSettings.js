/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyPasswordSettingsAge = require('./PasswordPolicyPasswordSettingsAge');
const PasswordPolicyPasswordSettingsComplexity = require('./PasswordPolicyPasswordSettingsComplexity');
const PasswordPolicyPasswordSettingsLockout = require('./PasswordPolicyPasswordSettingsLockout');

/**
 * @class PasswordPolicyPasswordSettings
 * @extends Resource
 * @property { PasswordPolicyPasswordSettingsAge } age
 * @property { PasswordPolicyPasswordSettingsComplexity } complexity
 * @property { PasswordPolicyPasswordSettingsLockout } lockout
 */
class PasswordPolicyPasswordSettings extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.age) {
      this.age = new PasswordPolicyPasswordSettingsAge(this.age);
    }
    if (resourceJson && resourceJson.complexity) {
      this.complexity = new PasswordPolicyPasswordSettingsComplexity(this.complexity);
    }
    if (resourceJson && resourceJson.lockout) {
      this.lockout = new PasswordPolicyPasswordSettingsLockout(this.lockout);
    }
  }

}

module.exports = PasswordPolicyPasswordSettings;
