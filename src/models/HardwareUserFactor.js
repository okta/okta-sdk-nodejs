/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const HardwareUserFactorProfile = require('./HardwareUserFactorProfile');

/**
 * @class HardwareUserFactor
 * @extends UserFactor
 * @property { HardwareUserFactorProfile } profile
 */
class HardwareUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new HardwareUserFactorProfile(this.profile);
    }
  }

}

module.exports = HardwareUserFactor;
