/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ApplicationSettingsApplication = require('./ApplicationSettingsApplication');
const ApplicationSettingsNotifications = require('./ApplicationSettingsNotifications');

/**
 * @class ApplicationSettings
 * @extends Resource
 * @property { ApplicationSettingsApplication } app
 * @property { boolean } implicitAssignment
 * @property { string } inlineHookId
 * @property { ApplicationSettingsNotifications } notifications
 */
class ApplicationSettings extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.app) {
      this.app = new ApplicationSettingsApplication(this.app);
    }
    if (resourceJson && resourceJson.notifications) {
      this.notifications = new ApplicationSettingsNotifications(this.notifications);
    }
  }

}

module.exports = ApplicationSettings;
