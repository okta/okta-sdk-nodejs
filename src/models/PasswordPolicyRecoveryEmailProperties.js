/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyRecoveryEmailRecoveryToken = require('./PasswordPolicyRecoveryEmailRecoveryToken');

/**
 * @class PasswordPolicyRecoveryEmailProperties
 * @extends Resource
 * @property { PasswordPolicyRecoveryEmailRecoveryToken } recoveryToken
 */
class PasswordPolicyRecoveryEmailProperties extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.recoveryToken) {
      this.recoveryToken = new PasswordPolicyRecoveryEmailRecoveryToken(this.recoveryToken);
    }
  }

}

module.exports = PasswordPolicyRecoveryEmailProperties;
