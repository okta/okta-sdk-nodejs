/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ApplicationSettingsNotificationsVpnNetwork = require('./ApplicationSettingsNotificationsVpnNetwork');

/**
 * @class ApplicationSettingsNotificationsVpn
 * @extends Resource
 * @property { string } helpUrl
 * @property { string } message
 * @property { ApplicationSettingsNotificationsVpnNetwork } network
 */
class ApplicationSettingsNotificationsVpn extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.network) {
      this.network = new ApplicationSettingsNotificationsVpnNetwork(this.network);
    }
  }

}

module.exports = ApplicationSettingsNotificationsVpn;
