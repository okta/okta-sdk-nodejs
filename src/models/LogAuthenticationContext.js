/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const LogIssuer = require('./LogIssuer');

/**
 * @class LogAuthenticationContext
 * @extends Resource
 * @property { LogAuthenticationProvider } authenticationProvider
 * @property { integer } authenticationStep
 * @property { LogCredentialProvider } credentialProvider
 * @property { LogCredentialType } credentialType
 * @property { string } externalSessionId
 * @property { string } interface
 * @property { LogIssuer } issuer
 */
class LogAuthenticationContext extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.issuer) {
      this.issuer = new LogIssuer(this.issuer);
    }
  }

}

module.exports = LogAuthenticationContext;
