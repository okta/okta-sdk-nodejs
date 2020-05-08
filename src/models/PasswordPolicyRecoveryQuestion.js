/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyRecoveryQuestionProperties = require('./PasswordPolicyRecoveryQuestionProperties');

/**
 * @class PasswordPolicyRecoveryQuestion
 * @extends Resource
 * @property { PasswordPolicyRecoveryQuestionProperties } properties
 * @property { string } status
 */
class PasswordPolicyRecoveryQuestion extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.properties) {
      this.properties = new PasswordPolicyRecoveryQuestionProperties(this.properties);
    }
  }

}

module.exports = PasswordPolicyRecoveryQuestion;
