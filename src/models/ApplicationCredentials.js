/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ApplicationCredentialsSigning = require('./ApplicationCredentialsSigning');
const ApplicationCredentialsUsernameTemplate = require('./ApplicationCredentialsUsernameTemplate');

/**
 * @class ApplicationCredentials
 * @extends Resource
 * @property { ApplicationCredentialsSigning } signing
 * @property { ApplicationCredentialsUsernameTemplate } userNameTemplate
 */
class ApplicationCredentials extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.signing) {
      this.signing = new ApplicationCredentialsSigning(this.signing);
    }
    if (resourceJson && resourceJson.userNameTemplate) {
      this.userNameTemplate = new ApplicationCredentialsUsernameTemplate(this.userNameTemplate);
    }
  }

}

module.exports = ApplicationCredentials;
