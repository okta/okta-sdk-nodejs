/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettings = require('./ApplicationSettings');
const OpenIdConnectApplicationSettingsClient = require('./OpenIdConnectApplicationSettingsClient');

/**
 * @class OpenIdConnectApplicationSettings
 * @extends ApplicationSettings
 * @property { OpenIdConnectApplicationSettingsClient } oauthClient
 */
class OpenIdConnectApplicationSettings extends ApplicationSettings {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.oauthClient) {
      this.oauthClient = new OpenIdConnectApplicationSettingsClient(this.oauthClient);
    }
  }

}

module.exports = OpenIdConnectApplicationSettings;
