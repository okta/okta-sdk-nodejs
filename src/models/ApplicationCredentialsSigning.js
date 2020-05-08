/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class ApplicationCredentialsSigning
 * @extends Resource
 * @property { string } kid
 * @property { dateTime } lastRotated
 * @property { dateTime } nextRotation
 * @property { string } rotationMode
 * @property { ApplicationCredentialsSigningUse } use
 */
class ApplicationCredentialsSigning extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = ApplicationCredentialsSigning;
