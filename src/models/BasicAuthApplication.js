/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const SchemeApplicationCredentials = require('./SchemeApplicationCredentials');
const BasicApplicationSettings = require('./BasicApplicationSettings');

/**
 * @class BasicAuthApplication
 * @extends Application
 * @property { SchemeApplicationCredentials } credentials
 * @property { object } name
 * @property { BasicApplicationSettings } settings
 */
class BasicAuthApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new SchemeApplicationCredentials(this.credentials);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new BasicApplicationSettings(this.settings);
    }
  }

}

module.exports = BasicAuthApplication;
