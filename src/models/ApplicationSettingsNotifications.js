/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ApplicationSettingsNotificationsVpn = require('./ApplicationSettingsNotificationsVpn');

/**
 * @class ApplicationSettingsNotifications
 * @extends Resource
 * @property { ApplicationSettingsNotificationsVpn } vpn
 */
class ApplicationSettingsNotifications extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.vpn) {
      this.vpn = new ApplicationSettingsNotificationsVpn(this.vpn);
    }
  }

}

module.exports = ApplicationSettingsNotifications;
