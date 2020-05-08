/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettings = require('./ApplicationSettings');
const SwaThreeFieldApplicationSettingsApplication = require('./SwaThreeFieldApplicationSettingsApplication');

/**
 * @class SwaThreeFieldApplicationSettings
 * @extends ApplicationSettings
 * @property { SwaThreeFieldApplicationSettingsApplication } app
 */
class SwaThreeFieldApplicationSettings extends ApplicationSettings {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.app) {
      this.app = new SwaThreeFieldApplicationSettingsApplication(this.app);
    }
  }

}

module.exports = SwaThreeFieldApplicationSettings;
