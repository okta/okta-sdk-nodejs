/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const WsFederationApplicationSettings = require('./WsFederationApplicationSettings');

/**
 * @class WsFederationApplication
 * @extends Application
 * @property { object } name
 * @property { WsFederationApplicationSettings } settings
 */
class WsFederationApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.settings) {
      this.settings = new WsFederationApplicationSettings(this.settings);
    }
  }

}

module.exports = WsFederationApplication;
