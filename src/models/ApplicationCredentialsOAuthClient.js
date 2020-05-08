/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class ApplicationCredentialsOAuthClient
 * @extends Resource
 * @property { boolean } autoKeyRotation
 * @property { string } client_id
 * @property { string } client_secret
 * @property { OAuthEndpointAuthenticationMethod } token_endpoint_auth_method
 */
class ApplicationCredentialsOAuthClient extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = ApplicationCredentialsOAuthClient;
