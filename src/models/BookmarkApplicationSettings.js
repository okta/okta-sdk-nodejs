/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettings = require('./ApplicationSettings');
const BookmarkApplicationSettingsApplication = require('./BookmarkApplicationSettingsApplication');

/**
 * @class BookmarkApplicationSettings
 * @extends ApplicationSettings
 * @property { BookmarkApplicationSettingsApplication } app
 */
class BookmarkApplicationSettings extends ApplicationSettings {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.app) {
      this.app = new BookmarkApplicationSettingsApplication(this.app);
    }
  }

}

module.exports = BookmarkApplicationSettings;
