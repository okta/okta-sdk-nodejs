/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const SamlApplicationSettings = require('./SamlApplicationSettings');

/**
 * @class SamlApplication
 * @extends Application
 * @property { SamlApplicationSettings } settings
 */
class SamlApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.settings) {
      this.settings = new SamlApplicationSettings(this.settings);
    }
  }

}

module.exports = SamlApplication;
