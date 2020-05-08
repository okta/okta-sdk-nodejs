/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class OpenIdConnectApplicationSettingsClient
 * @extends Resource
 * @property { OpenIdConnectApplicationType } application_type
 * @property { string } client_uri
 * @property { OpenIdConnectApplicationConsentMethod } consent_method
 * @property { array } grant_types
 * @property { string } logo_uri
 * @property { string } policy_uri
 * @property { array } post_logout_redirect_uris
 * @property { array } redirect_uris
 * @property { array } response_types
 * @property { string } tos_uri
 */
class OpenIdConnectApplicationSettingsClient extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = OpenIdConnectApplicationSettingsClient;
