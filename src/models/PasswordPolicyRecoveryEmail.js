/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyRecoveryEmailProperties = require('./PasswordPolicyRecoveryEmailProperties');

/**
 * @class PasswordPolicyRecoveryEmail
 * @extends Resource
 * @property { PasswordPolicyRecoveryEmailProperties } properties
 * @property { string } status
 */
class PasswordPolicyRecoveryEmail extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.properties) {
      this.properties = new PasswordPolicyRecoveryEmailProperties(this.properties);
    }
  }

}

module.exports = PasswordPolicyRecoveryEmail;
