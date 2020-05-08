/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettings = require('./ApplicationSettings');
const SamlApplicationSettingsSignOn = require('./SamlApplicationSettingsSignOn');

/**
 * @class SamlApplicationSettings
 * @extends ApplicationSettings
 * @property { SamlApplicationSettingsSignOn } signOn
 */
class SamlApplicationSettings extends ApplicationSettings {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.signOn) {
      this.signOn = new SamlApplicationSettingsSignOn(this.signOn);
    }
  }

}

module.exports = SamlApplicationSettings;
