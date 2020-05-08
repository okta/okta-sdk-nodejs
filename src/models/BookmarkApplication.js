/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const BookmarkApplicationSettings = require('./BookmarkApplicationSettings');

/**
 * @class BookmarkApplication
 * @extends Application
 * @property { object } name
 * @property { BookmarkApplicationSettings } settings
 */
class BookmarkApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.settings) {
      this.settings = new BookmarkApplicationSettings(this.settings);
    }
  }

}

module.exports = BookmarkApplication;
