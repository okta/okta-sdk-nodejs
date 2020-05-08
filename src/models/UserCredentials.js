/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordCredential = require('./PasswordCredential');
const AuthenticationProvider = require('./AuthenticationProvider');
const RecoveryQuestionCredential = require('./RecoveryQuestionCredential');

/**
 * @class UserCredentials
 * @extends Resource
 * @property { PasswordCredential } password
 * @property { AuthenticationProvider } provider
 * @property { RecoveryQuestionCredential } recovery_question
 */
class UserCredentials extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.password) {
      this.password = new PasswordCredential(this.password);
    }
    if (resourceJson && resourceJson.provider) {
      this.provider = new AuthenticationProvider(this.provider);
    }
    if (resourceJson && resourceJson.recovery_question) {
      this.recovery_question = new RecoveryQuestionCredential(this.recovery_question);
    }
  }

}

module.exports = UserCredentials;
