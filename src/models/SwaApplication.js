/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var BrowserPluginApplication = require('./BrowserPluginApplication');
const SwaApplicationSettings = require('./SwaApplicationSettings');

/**
 * @class SwaApplication
 * @extends BrowserPluginApplication
 * @property { object } name
 * @property { SwaApplicationSettings } settings
 */
class SwaApplication extends BrowserPluginApplication {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.settings) {
      this.settings = new SwaApplicationSettings(this.settings);
    }
  }

}

module.exports = SwaApplication;
