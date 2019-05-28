/*!
 * Copyright (c) 2017-2019, Okta, Inc. and/or its affiliates. All rights reserved.
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

var ApplicationCredentials = require('./ApplicationCredentials');
const ApplicationCredentialsOAuthClient = require('./ApplicationCredentialsOAuthClient');

/**
 * @class OAuthApplicationCredentials
 * @extends ApplicationCredentials
 * @property { ApplicationCredentialsOAuthClient } oauthClient
 */
class OAuthApplicationCredentials extends ApplicationCredentials {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.oauthClient) {
      this.oauthClient = new ApplicationCredentialsOAuthClient(this.oauthClient);
    }
  }

}

module.exports = OAuthApplicationCredentials;
