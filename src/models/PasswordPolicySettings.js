/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyDelegationSettings = require('./PasswordPolicyDelegationSettings');
const PasswordPolicyPasswordSettings = require('./PasswordPolicyPasswordSettings');
const PasswordPolicyRecoverySettings = require('./PasswordPolicyRecoverySettings');

/**
 * @class PasswordPolicySettings
 * @extends Resource
 * @property { PasswordPolicyDelegationSettings } delegation
 * @property { PasswordPolicyPasswordSettings } password
 * @property { PasswordPolicyRecoverySettings } recovery
 */
class PasswordPolicySettings extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.delegation) {
      this.delegation = new PasswordPolicyDelegationSettings(this.delegation);
    }
    if (resourceJson && resourceJson.password) {
      this.password = new PasswordPolicyPasswordSettings(this.password);
    }
    if (resourceJson && resourceJson.recovery) {
      this.recovery = new PasswordPolicyRecoverySettings(this.recovery);
    }
  }

}

module.exports = PasswordPolicySettings;
