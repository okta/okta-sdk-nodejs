/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const U2fUserFactorProfile = require('./U2fUserFactorProfile');

/**
 * @class U2fUserFactor
 * @extends UserFactor
 * @property { U2fUserFactorProfile } profile
 */
class U2fUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new U2fUserFactorProfile(this.profile);
    }
  }

}

module.exports = U2fUserFactor;
