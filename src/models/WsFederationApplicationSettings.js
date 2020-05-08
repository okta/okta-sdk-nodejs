/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettings = require('./ApplicationSettings');
const WsFederationApplicationSettingsApplication = require('./WsFederationApplicationSettingsApplication');

/**
 * @class WsFederationApplicationSettings
 * @extends ApplicationSettings
 * @property { WsFederationApplicationSettingsApplication } app
 */
class WsFederationApplicationSettings extends ApplicationSettings {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.app) {
      this.app = new WsFederationApplicationSettingsApplication(this.app);
    }
  }

}

module.exports = WsFederationApplicationSettings;
