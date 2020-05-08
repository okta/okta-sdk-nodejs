/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationCredentials = require('./ApplicationCredentials');
const PasswordCredential = require('./PasswordCredential');
const ApplicationCredentialsSigning = require('./ApplicationCredentialsSigning');

/**
 * @class SchemeApplicationCredentials
 * @extends ApplicationCredentials
 * @property { PasswordCredential } password
 * @property { boolean } revealPassword
 * @property { ApplicationCredentialsScheme } scheme
 * @property { ApplicationCredentialsSigning } signing
 * @property { string } userName
 */
class SchemeApplicationCredentials extends ApplicationCredentials {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.password) {
      this.password = new PasswordCredential(this.password);
    }
    if (resourceJson && resourceJson.signing) {
      this.signing = new ApplicationCredentialsSigning(this.signing);
    }
  }

}

module.exports = SchemeApplicationCredentials;
