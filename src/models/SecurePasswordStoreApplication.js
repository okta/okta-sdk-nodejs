/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const SchemeApplicationCredentials = require('./SchemeApplicationCredentials');
const SecurePasswordStoreApplicationSettings = require('./SecurePasswordStoreApplicationSettings');

/**
 * @class SecurePasswordStoreApplication
 * @extends Application
 * @property { SchemeApplicationCredentials } credentials
 * @property { object } name
 * @property { SecurePasswordStoreApplicationSettings } settings
 */
class SecurePasswordStoreApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new SchemeApplicationCredentials(this.credentials);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new SecurePasswordStoreApplicationSettings(this.settings);
    }
  }

}

module.exports = SecurePasswordStoreApplication;
