/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationCredentials = require('./ApplicationCredentials');
const ApplicationCredentialsOAuthClient = require('./ApplicationCredentialsOAuthClient');

/**
 * @class OAuthApplicationCredentials
 * @extends ApplicationCredentials
 * @property { ApplicationCredentialsOAuthClient } oauthClient
 */
class OAuthApplicationCredentials extends ApplicationCredentials {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.oauthClient) {
      this.oauthClient = new ApplicationCredentialsOAuthClient(this.oauthClient);
    }
  }

}

module.exports = OAuthApplicationCredentials;
