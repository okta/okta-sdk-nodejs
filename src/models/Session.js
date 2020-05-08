/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const SessionIdentityProvider = require('./SessionIdentityProvider');

/**
 * @class Session
 * @extends Resource
 * @property { hash } _links
 * @property { array } amr
 * @property { dateTime } createdAt
 * @property { dateTime } expiresAt
 * @property { string } id
 * @property { SessionIdentityProvider } idp
 * @property { dateTime } lastFactorVerification
 * @property { dateTime } lastPasswordVerification
 * @property { string } login
 * @property { SessionStatus } status
 * @property { string } userId
 */
class Session extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.idp) {
      this.idp = new SessionIdentityProvider(this.idp);
    }
  }

  delete() {
    return this.client.endSession(this.id);
  }

  /**
   * @returns {Promise<Session>}
   */
  refresh() {
    return this.client.refreshSession(this.id);
  }
}

module.exports = Session;
