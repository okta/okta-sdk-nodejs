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
const AuthenticatorProvider = require('./AuthenticatorProvider');
const AuthenticatorSettings = require('./AuthenticatorSettings');

/**
 * @class Authenticator
 * @extends Resource
 * @property { hash } _links
 * @property { dateTime } created
 * @property { string } id
 * @property { string } key
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { AuthenticatorProvider } provider
 * @property { AuthenticatorSettings } settings
 * @property { AuthenticatorStatus } status
 * @property { AuthenticatorType } type
 */
class Authenticator extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.provider) {
      this.provider = new AuthenticatorProvider(resourceJson.provider);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new AuthenticatorSettings(resourceJson.settings);
    }
  }

  /**
   * @returns {Promise<Authenticator>}
   */
  update() {
    return this.httpClient.updateAuthenticator(this.id, this);
  }

  /**
   * @returns {Promise<Authenticator>}
   */
  activate() {
    return this.httpClient.activateAuthenticator(this.id);
  }

  /**
   * @returns {Promise<Authenticator>}
   */
  deactivate() {
    return this.httpClient.deactivateAuthenticator(this.id);
  }
}

module.exports = Authenticator;
