/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var UserFactor = require('./UserFactor');
const TokenUserFactorProfile = require('./TokenUserFactorProfile');

/**
 * @class TokenUserFactor
 * @extends UserFactor
 * @property { TokenUserFactorProfile } profile
 */
class TokenUserFactor extends UserFactor {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new TokenUserFactorProfile(this.profile);
    }
  }

}

module.exports = TokenUserFactor;
