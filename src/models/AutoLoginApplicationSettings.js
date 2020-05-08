/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettings = require('./ApplicationSettings');
const AutoLoginApplicationSettingsSignOn = require('./AutoLoginApplicationSettingsSignOn');

/**
 * @class AutoLoginApplicationSettings
 * @extends ApplicationSettings
 * @property { AutoLoginApplicationSettingsSignOn } signOn
 */
class AutoLoginApplicationSettings extends ApplicationSettings {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.signOn) {
      this.signOn = new AutoLoginApplicationSettingsSignOn(this.signOn);
    }
  }

}

module.exports = AutoLoginApplicationSettings;
