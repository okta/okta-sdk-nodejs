/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
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
      this.password = new PasswordCredential(resourceJson.password);
    }
    if (resourceJson && resourceJson.provider) {
      this.provider = new AuthenticationProvider(resourceJson.provider);
    }
    if (resourceJson && resourceJson.recovery_question) {
      this.recovery_question = new RecoveryQuestionCredential(resourceJson.recovery_question);
    }
  }

}

module.exports = UserCredentials;
