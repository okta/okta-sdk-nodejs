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
const ApplicationCredentialsSigning = require('./ApplicationCredentialsSigning');
const ApplicationCredentialsUsernameTemplate = require('./ApplicationCredentialsUsernameTemplate');

/**
 * @class ApplicationCredentials
 * @extends Resource
 * @property { ApplicationCredentialsSigning } signing
 * @property { ApplicationCredentialsUsernameTemplate } userNameTemplate
 */
class ApplicationCredentials extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.signing) {
      this.signing = new ApplicationCredentialsSigning(this.signing);
    }
    if (resourceJson && resourceJson.userNameTemplate) {
      this.userNameTemplate = new ApplicationCredentialsUsernameTemplate(this.userNameTemplate);
    }
  }

}

module.exports = ApplicationCredentials;
