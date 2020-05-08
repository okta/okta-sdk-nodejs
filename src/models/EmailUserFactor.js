/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const EmailUserFactorProfile = require('./EmailUserFactorProfile');

/**
 * @class EmailUserFactor
 * @extends UserFactor
 * @property { EmailUserFactorProfile } profile
 */
class EmailUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new EmailUserFactorProfile(this.profile);
    }
  }

}

module.exports = EmailUserFactor;
