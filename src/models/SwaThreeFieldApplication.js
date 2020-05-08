/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var BrowserPluginApplication = require('./BrowserPluginApplication');
const SwaThreeFieldApplicationSettings = require('./SwaThreeFieldApplicationSettings');

/**
 * @class SwaThreeFieldApplication
 * @extends BrowserPluginApplication
 * @property { object } name
 * @property { SwaThreeFieldApplicationSettings } settings
 */
class SwaThreeFieldApplication extends BrowserPluginApplication {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.settings) {
      this.settings = new SwaThreeFieldApplicationSettings(this.settings);
    }
  }

}

module.exports = SwaThreeFieldApplication;
