/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyDelegationSettingsOptions = require('./PasswordPolicyDelegationSettingsOptions');

/**
 * @class PasswordPolicyDelegationSettings
 * @extends Resource
 * @property { PasswordPolicyDelegationSettingsOptions } options
 */
class PasswordPolicyDelegationSettings extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.options) {
      this.options = new PasswordPolicyDelegationSettingsOptions(this.options);
    }
  }

}

module.exports = PasswordPolicyDelegationSettings;
