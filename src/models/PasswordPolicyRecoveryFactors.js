/*!
 * Copyright (c) 2017-2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


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
