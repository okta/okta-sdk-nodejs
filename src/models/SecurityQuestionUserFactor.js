/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const SecurityQuestionUserFactorProfile = require('./SecurityQuestionUserFactorProfile');

/**
 * @class SecurityQuestionUserFactor
 * @extends UserFactor
 * @property { SecurityQuestionUserFactorProfile } profile
 */
class SecurityQuestionUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new SecurityQuestionUserFactorProfile(this.profile);
    }
  }

}

module.exports = SecurityQuestionUserFactor;
