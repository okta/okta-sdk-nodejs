/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const WebUserFactorProfile = require('./WebUserFactorProfile');

/**
 * @class WebUserFactor
 * @extends UserFactor
 * @property { WebUserFactorProfile } profile
 */
class WebUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new WebUserFactorProfile(this.profile);
    }
  }

}

module.exports = WebUserFactor;
