/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordPolicyRecoveryQuestionComplexity = require('./PasswordPolicyRecoveryQuestionComplexity');

/**
 * @class PasswordPolicyRecoveryQuestionProperties
 * @extends Resource
 * @property { PasswordPolicyRecoveryQuestionComplexity } complexity
 */
class PasswordPolicyRecoveryQuestionProperties extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.complexity) {
      this.complexity = new PasswordPolicyRecoveryQuestionComplexity(this.complexity);
    }
  }

}

module.exports = PasswordPolicyRecoveryQuestionProperties;
