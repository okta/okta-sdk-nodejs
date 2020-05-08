/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const SchemeApplicationCredentials = require('./SchemeApplicationCredentials');
const AutoLoginApplicationSettings = require('./AutoLoginApplicationSettings');

/**
 * @class AutoLoginApplication
 * @extends Application
 * @property { SchemeApplicationCredentials } credentials
 * @property { AutoLoginApplicationSettings } settings
 */
class AutoLoginApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new SchemeApplicationCredentials(this.credentials);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new AutoLoginApplicationSettings(this.settings);
    }
  }

}

module.exports = AutoLoginApplication;
