/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class SocialAuthToken
 * @extends Resource
 * @property { dateTime } expiresAt
 * @property { string } id
 * @property { array } scopes
 * @property { string } token
 * @property { string } tokenAuthScheme
 * @property { string } tokenType
 */
class SocialAuthToken extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = SocialAuthToken;
