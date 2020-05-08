/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class SamlApplicationSettingsSignOn
 * @extends Resource
 * @property { boolean } assertionSigned
 * @property { array } attributeStatements
 * @property { string } audience
 * @property { string } audienceOverride
 * @property { string } authnContextClassRef
 * @property { string } defaultRelayState
 * @property { string } destination
 * @property { string } destinationOverride
 * @property { string } digestAlgorithm
 * @property { boolean } honorForceAuthn
 * @property { string } idpIssuer
 * @property { string } recipient
 * @property { string } recipientOverride
 * @property { boolean } requestCompressed
 * @property { boolean } responseSigned
 * @property { string } signatureAlgorithm
 * @property { string } spIssuer
 * @property { string } ssoAcsUrl
 * @property { string } ssoAcsUrlOverride
 * @property { string } subjectNameIdFormat
 * @property { string } subjectNameIdTemplate
 */
class SamlApplicationSettingsSignOn extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = SamlApplicationSettingsSignOn;
