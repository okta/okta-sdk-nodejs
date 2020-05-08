/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const IdentityProviderCredentialsClient = require('./IdentityProviderCredentialsClient');
const IdentityProviderCredentialsSigning = require('./IdentityProviderCredentialsSigning');
const IdentityProviderCredentialsTrust = require('./IdentityProviderCredentialsTrust');

/**
 * @class IdentityProviderCredentials
 * @extends Resource
 * @property { IdentityProviderCredentialsClient } client
 * @property { IdentityProviderCredentialsSigning } signing
 * @property { IdentityProviderCredentialsTrust } trust
 */
class IdentityProviderCredentials extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.client) {
      this.client = new IdentityProviderCredentialsClient(this.client);
    }
    if (resourceJson && resourceJson.signing) {
      this.signing = new IdentityProviderCredentialsSigning(this.signing);
    }
    if (resourceJson && resourceJson.trust) {
      this.trust = new IdentityProviderCredentialsTrust(this.trust);
    }
  }

}

module.exports = IdentityProviderCredentials;
