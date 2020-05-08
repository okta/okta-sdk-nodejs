/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettings = require('./ApplicationSettings');
const SwaApplicationSettingsApplication = require('./SwaApplicationSettingsApplication');

/**
 * @class SwaApplicationSettings
 * @extends ApplicationSettings
 * @property { SwaApplicationSettingsApplication } app
 */
class SwaApplicationSettings extends ApplicationSettings {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.app) {
      this.app = new SwaApplicationSettingsApplication(this.app);
    }
  }

}

module.exports = SwaApplicationSettings;
