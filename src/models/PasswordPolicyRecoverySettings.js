/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyRecoveryFactors = require('./PasswordPolicyRecoveryFactors');

/**
 * @class PasswordPolicyRecoverySettings
 * @extends Resource
 * @property { PasswordPolicyRecoveryFactors } factors
 */
class PasswordPolicyRecoverySettings extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.factors) {
      this.factors = new PasswordPolicyRecoveryFactors(this.factors);
    }
  }

}

module.exports = PasswordPolicyRecoverySettings;
