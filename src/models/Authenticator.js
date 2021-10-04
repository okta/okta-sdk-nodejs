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
 * @property { AuthenticatorSettings } settings
 * @property { AuthenticatorStatus } status
 * @property { AuthenticatorType } type
 */
class Authenticator extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['_links']) {
      this['_links'] = resourceJson['_links'];
    }
    if (resourceJson && resourceJson['created']) {
      this['created'] = resourceJson['created'];
    }
    if (resourceJson && resourceJson['id']) {
      this['id'] = resourceJson['id'];
    }
    if (resourceJson && resourceJson['key']) {
      this['key'] = resourceJson['key'];
    }
    if (resourceJson && resourceJson['lastUpdated']) {
      this['lastUpdated'] = resourceJson['lastUpdated'];
    }
    if (resourceJson && resourceJson['name']) {
      this['name'] = resourceJson['name'];
    }
    if (resourceJson && resourceJson['settings']) {
      this['settings'] = new AuthenticatorSettings(resourceJson['settings']);
    }
    if (resourceJson && resourceJson['status']) {
      this['status'] = resourceJson['status'];
    }
    if (resourceJson && resourceJson['type']) {
      this['type'] = resourceJson['type'];
    }
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
