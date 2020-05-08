/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettings = require('./ApplicationSettings');
const BasicApplicationSettingsApplication = require('./BasicApplicationSettingsApplication');

/**
 * @class BasicApplicationSettings
 * @extends ApplicationSettings
 * @property { BasicApplicationSettingsApplication } app
 */
class BasicApplicationSettings extends ApplicationSettings {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.app) {
      this.app = new BasicApplicationSettingsApplication(this.app);
    }
  }

}

module.exports = BasicApplicationSettings;
