/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const OAuth2Actor = require('./OAuth2Actor');

/**
 * @class OAuth2ScopeConsentGrant
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } clientId
 * @property { dateTime } created
 * @property { OAuth2Actor } createdBy
 * @property { string } id
 * @property { string } issuer
 * @property { dateTime } lastUpdated
 * @property { string } scopeId
 * @property { OAuth2ScopeConsentGrantSource } source
 * @property { OAuth2ScopeConsentGrantStatus } status
 */
class OAuth2ScopeConsentGrant extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.createdBy) {
      this.createdBy = new OAuth2Actor(this.createdBy);
    }
  }

}

module.exports = OAuth2ScopeConsentGrant;
