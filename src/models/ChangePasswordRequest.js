/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordCredential = require('./PasswordCredential');

/**
 * @class ChangePasswordRequest
 * @extends Resource
 * @property { PasswordCredential } newPassword
 * @property { PasswordCredential } oldPassword
 */
class ChangePasswordRequest extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.newPassword) {
      this.newPassword = new PasswordCredential(this.newPassword);
    }
    if (resourceJson && resourceJson.oldPassword) {
      this.oldPassword = new PasswordCredential(this.oldPassword);
    }
  }

}

module.exports = ChangePasswordRequest;
