/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordCredentialHash = require('./PasswordCredentialHash');
const PasswordCredentialHook = require('./PasswordCredentialHook');

/**
 * @class PasswordCredential
 * @extends Resource
 * @property { PasswordCredentialHash } hash
 * @property { PasswordCredentialHook } hook
 * @property { password } value
 */
class PasswordCredential extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.hash) {
      this.hash = new PasswordCredentialHash(this.hash);
    }
    if (resourceJson && resourceJson.hook) {
      this.hook = new PasswordCredentialHook(this.hook);
    }
  }

}

module.exports = PasswordCredential;
