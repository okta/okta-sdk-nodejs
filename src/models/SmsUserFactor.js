/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const SmsUserFactorProfile = require('./SmsUserFactorProfile');

/**
 * @class SmsUserFactor
 * @extends UserFactor
 * @property { SmsUserFactorProfile } profile
 */
class SmsUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new SmsUserFactorProfile(this.profile);
    }
  }

}

module.exports = SmsUserFactor;
