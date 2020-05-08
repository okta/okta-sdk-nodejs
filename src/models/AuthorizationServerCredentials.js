/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const AuthorizationServerCredentialsSigningConfig = require('./AuthorizationServerCredentialsSigningConfig');

/**
 * @class AuthorizationServerCredentials
 * @extends Resource
 * @property { AuthorizationServerCredentialsSigningConfig } signing
 */
class AuthorizationServerCredentials extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.signing) {
      this.signing = new AuthorizationServerCredentialsSigningConfig(this.signing);
    }
  }

}

module.exports = AuthorizationServerCredentials;
