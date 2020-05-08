/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const OAuth2Actor = require('./OAuth2Actor');

/**
 * @class OAuth2RefreshToken
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } clientId
 * @property { dateTime } created
 * @property { OAuth2Actor } createdBy
 * @property { dateTime } expiresAt
 * @property { string } id
 * @property { string } issuer
 * @property { dateTime } lastUpdated
 * @property { array } scopes
 * @property { string } status
 * @property { string } userId
 */
class OAuth2RefreshToken extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.createdBy) {
      this.createdBy = new OAuth2Actor(this.createdBy);
    }
  }

}

module.exports = OAuth2RefreshToken;
