/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const SchemeApplicationCredentials = require('./SchemeApplicationCredentials');

/**
 * @class BrowserPluginApplication
 * @extends Application
 * @property { SchemeApplicationCredentials } credentials
 */
class BrowserPluginApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new SchemeApplicationCredentials(this.credentials);
    }
  }

}

module.exports = BrowserPluginApplication;
