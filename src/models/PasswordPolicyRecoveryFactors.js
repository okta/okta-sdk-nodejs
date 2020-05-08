/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyRecoveryFactorSettings = require('./PasswordPolicyRecoveryFactorSettings');
const PasswordPolicyRecoveryEmail = require('./PasswordPolicyRecoveryEmail');
const PasswordPolicyRecoveryQuestion = require('./PasswordPolicyRecoveryQuestion');

/**
 * @class PasswordPolicyRecoveryFactors
 * @extends Resource
 * @property { PasswordPolicyRecoveryFactorSettings } okta_call
 * @property { PasswordPolicyRecoveryEmail } okta_email
 * @property { PasswordPolicyRecoveryFactorSettings } okta_sms
 * @property { PasswordPolicyRecoveryQuestion } recovery_question
 */
class PasswordPolicyRecoveryFactors extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.okta_call) {
      this.okta_call = new PasswordPolicyRecoveryFactorSettings(this.okta_call);
    }
    if (resourceJson && resourceJson.okta_email) {
      this.okta_email = new PasswordPolicyRecoveryEmail(this.okta_email);
    }
    if (resourceJson && resourceJson.okta_sms) {
      this.okta_sms = new PasswordPolicyRecoveryFactorSettings(this.okta_sms);
    }
    if (resourceJson && resourceJson.recovery_question) {
      this.recovery_question = new PasswordPolicyRecoveryQuestion(this.recovery_question);
    }
  }

}

module.exports = PasswordPolicyRecoveryFactors;
