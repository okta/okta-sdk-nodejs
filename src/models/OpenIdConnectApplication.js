/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const OAuthApplicationCredentials = require('./OAuthApplicationCredentials');
const OpenIdConnectApplicationSettings = require('./OpenIdConnectApplicationSettings');

/**
 * @class OpenIdConnectApplication
 * @extends Application
 * @property { OAuthApplicationCredentials } credentials
 * @property { object } name
 * @property { OpenIdConnectApplicationSettings } settings
 */
class OpenIdConnectApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new OAuthApplicationCredentials(this.credentials);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new OpenIdConnectApplicationSettings(this.settings);
    }
  }

}

module.exports = OpenIdConnectApplication;
