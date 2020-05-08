/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettings = require('./ApplicationSettings');
const SecurePasswordStoreApplicationSettingsApplication = require('./SecurePasswordStoreApplicationSettingsApplication');

/**
 * @class SecurePasswordStoreApplicationSettings
 * @extends ApplicationSettings
 * @property { SecurePasswordStoreApplicationSettingsApplication } app
 */
class SecurePasswordStoreApplicationSettings extends ApplicationSettings {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.app) {
      this.app = new SecurePasswordStoreApplicationSettingsApplication(this.app);
    }
  }

}

module.exports = SecurePasswordStoreApplicationSettings;
