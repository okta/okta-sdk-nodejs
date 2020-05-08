/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const CallUserFactorProfile = require('./CallUserFactorProfile');

/**
 * @class CallUserFactor
 * @extends UserFactor
 * @property { CallUserFactorProfile } profile
 */
class CallUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new CallUserFactorProfile(this.profile);
    }
  }

}

module.exports = CallUserFactor;
