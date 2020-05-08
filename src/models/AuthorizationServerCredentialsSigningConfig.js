/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class AuthorizationServerCredentialsSigningConfig
 * @extends Resource
 * @property { string } kid
 * @property { dateTime } lastRotated
 * @property { dateTime } nextRotation
 * @property { AuthorizationServerCredentialsRotationMode } rotationMode
 * @property { AuthorizationServerCredentialsUse } use
 */
class AuthorizationServerCredentialsSigningConfig extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = AuthorizationServerCredentialsSigningConfig;
