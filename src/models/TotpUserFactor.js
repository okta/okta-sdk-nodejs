/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const TotpUserFactorProfile = require('./TotpUserFactorProfile');

/**
 * @class TotpUserFactor
 * @extends UserFactor
 * @property { TotpUserFactorProfile } profile
 */
class TotpUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new TotpUserFactorProfile(this.profile);
    }
  }

}

module.exports = TotpUserFactor;
