/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class PasswordPolicyPasswordSettingsAge
 * @extends Resource
 * @property { integer } expireWarnDays
 * @property { integer } historyCount
 * @property { integer } maxAgeDays
 * @property { integer } minAgeMinutes
 */
class PasswordPolicyPasswordSettingsAge extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = PasswordPolicyPasswordSettingsAge;
