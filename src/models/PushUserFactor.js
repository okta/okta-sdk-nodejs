/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const PushUserFactorProfile = require('./PushUserFactorProfile');

/**
 * @class PushUserFactor
 * @extends UserFactor
 * @property { dateTime } expiresAt
 * @property { FactorResultType } factorResult
 * @property { PushUserFactorProfile } profile
 */
class PushUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new PushUserFactorProfile(this.profile);
    }
  }

}

module.exports = PushUserFactor;
