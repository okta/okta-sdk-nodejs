/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var ApplicationSettingsApplication = require('./ApplicationSettingsApplication');


/**
 * @class WsFederationApplicationSettingsApplication
 * @extends ApplicationSettingsApplication
 * @property { string } attributeStatements
 * @property { string } audienceRestriction
 * @property { string } authnContextClassRef
 * @property { string } groupFilter
 * @property { string } groupName
 * @property { string } groupValueFormat
 * @property { string } nameIDFormat
 * @property { string } realm
 * @property { string } siteURL
 * @property { string } usernameAttribute
 * @property { boolean } wReplyOverride
 * @property { string } wReplyURL
 */
class WsFederationApplicationSettingsApplication extends ApplicationSettingsApplication {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = WsFederationApplicationSettingsApplication;
