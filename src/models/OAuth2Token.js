/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class OAuth2Token
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } clientId
 * @property { dateTime } created
 * @property { dateTime } expiresAt
 * @property { string } id
 * @property { string } issuer
 * @property { dateTime } lastUpdated
 * @property { array } scopes
 * @property { string } status
 * @property { string } userId
 */
class OAuth2Token extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = OAuth2Token;
