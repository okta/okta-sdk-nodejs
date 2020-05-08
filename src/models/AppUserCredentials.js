/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const AppUserPasswordCredential = require('./AppUserPasswordCredential');

/**
 * @class AppUserCredentials
 * @extends Resource
 * @property { AppUserPasswordCredential } password
 * @property { string } userName
 */
class AppUserCredentials extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.password) {
      this.password = new AppUserPasswordCredential(this.password);
    }
  }

}

module.exports = AppUserCredentials;
