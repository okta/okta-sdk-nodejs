/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class PasswordPolicyPasswordSettingsLockout
 * @extends Resource
 * @property { integer } autoUnlockMinutes
 * @property { integer } maxAttempts
 * @property { boolean } showLockoutFailures
 * @property { array } userLockoutNotificationChannels
 */
class PasswordPolicyPasswordSettingsLockout extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = PasswordPolicyPasswordSettingsLockout;
