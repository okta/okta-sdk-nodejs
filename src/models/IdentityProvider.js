/*!
 * Copyright (c) 2017-2020, Okta, Inc. and/or its affiliates. All rights reserved.
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
const IdentityProviderPolicy = require('./IdentityProviderPolicy');
const Protocol = require('./Protocol');

/**
 * @class IdentityProvider
 * @extends Resource
 * @property { hash } _links
 * @property { dateTime } created
 * @property { string } id
 * @property { string } issuerMode
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { IdentityProviderPolicy } policy
 * @property { Protocol } protocol
 * @property { string } status
 * @property { string } type
 */
class IdentityProvider extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.policy) {
      this.policy = new IdentityProviderPolicy(resourceJson.policy);
    }
    if (resourceJson && resourceJson.protocol) {
      this.protocol = new Protocol(resourceJson.protocol);
    }
  }

  /**
   * @returns {Promise<IdentityProvider>}
   */
  update() {
    return this.client.updateIdentityProvider(this.id, this);
  }
  delete() {
    return this.client.deleteIdentityProvider(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Csr} instances.
   */
  listSigningCsrs() {
    return this.client.listCsrsForIdentityProvider(this.id);
  }

  /**
   * @param {CsrMetadata} csrMetadata
   * @returns {Promise<Csr>}
   */
  generateCsr(csrMetadata) {
    return this.client.generateCsrForIdentityProvider(this.id, csrMetadata);
  }

  /**
   * @param {string} csrId
   */
  deleteSigningCsr(csrId) {
    return this.client.revokeCsrForIdentityProvider(this.id, csrId);
  }

  /**
   * @param {string} csrId
   * @returns {Promise<Csr>}
   */
  getSigningCsr(csrId) {
    return this.client.getCsrForIdentityProvider(this.id, csrId);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listSigningKeys() {
    return this.client.listIdentityProviderSigningKeys(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<JsonWebKey>}
   */
  generateSigningKey(queryParameters) {
    return this.client.generateIdentityProviderSigningKey(this.id, queryParameters);
  }

  /**
   * @param {string} keyId
   * @returns {Promise<JsonWebKey>}
   */
  getSigningKey(keyId) {
    return this.client.getIdentityProviderSigningKey(this.id, keyId);
  }

  /**
   * @param {string} keyId
   * @param {object} queryParameters
   * @returns {Promise<JsonWebKey>}
   */
  cloneKey(keyId, queryParameters) {
    return this.client.cloneIdentityProviderKey(this.id, keyId, queryParameters);
  }

  /**
   * @returns {Promise<IdentityProvider>}
   */
  activate() {
    return this.client.activateIdentityProvider(this.id);
  }

  /**
   * @returns {Promise<IdentityProvider>}
   */
  deactivate() {
    return this.client.deactivateIdentityProvider(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link IdentityProviderApplicationUser} instances.
   */
  listUsers() {
    return this.client.listIdentityProviderApplicationUsers(this.id);
  }

  /**
   * @param {string} userId
   */
  unlinkUser(userId) {
    return this.client.unlinkUserFromIdentityProvider(this.id, userId);
  }

  /**
   * @param {string} userId
   * @returns {Promise<IdentityProviderApplicationUser>}
   */
  getUser(userId) {
    return this.client.getIdentityProviderApplicationUser(this.id, userId);
  }

  /**
   * @param {string} userId
   * @param {UserIdentityProviderLinkRequest} userIdentityProviderLinkRequest
   * @returns {Promise<IdentityProviderApplicationUser>}
   */
  linkUser(userId, userIdentityProviderLinkRequest) {
    return this.client.linkUserToIdentityProvider(this.id, userId, userIdentityProviderLinkRequest);
  }

  /**
   * @param {string} userId
   * @returns {Promise<Collection>} A collection that will yield {@link SocialAuthToken} instances.
   */
  listSocialAuthTokens(userId) {
    return this.client.listSocialAuthTokens(this.id, userId);
  }
}

module.exports = IdentityProvider;
