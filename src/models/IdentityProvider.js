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
      this.policy = new IdentityProviderPolicy(this.policy);
    }
    if (resourceJson && resourceJson.protocol) {
      this.protocol = new Protocol(this.protocol);
    }
  }

  /**
   * @param {string} idpId
   * @returns {Promise<IdentityProvider>}
   */
  update(idpId) {
    return this.client.updateIdentityProvider(idpId, this);
  }
  /**
   * @param {string} idpId
   */
  delete(idpId) {
    return this.client.deleteIdentityProvider(idpId);
  }

  /**
   * @param {string} idpId
   * @returns {Promise<Collection>} A collection that will yield {@link CSR} instances.
   */
  listSigningCsrs(idpId) {
    return this.client.listCsrsForIdentityProvider(idpId);
  }

  /**
   * @param {string} idpId
   * @param {CSRMetadata} csrMetadata
   * @returns {Promise<CSR>}
   */
  generateCsr(idpId, csrMetadata) {
    return this.client.generateCsrForIdentityProvider(idpId, csrMetadata);
  }

  /**
   * @param {string} idpId
   * @param {string} csrId
   */
  deleteSigningCsr(idpId, csrId) {
    return this.client.revokeCsrForIdentityProvider(idpId, csrId);
  }

  /**
   * @param {string} idpId
   * @param {string} csrId
   * @returns {Promise<CSR>}
   */
  getSigningCsr(idpId, csrId) {
    return this.client.getCsrForIdentityProvider(idpId, csrId);
  }

  /**
   * @param {string} idpId
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listSigningKeys(idpId) {
    return this.client.listIdentityProviderSigningKeys(idpId);
  }

  /**
   * @param {string} idpId
   * @param {object} queryParameters
   * @returns {Promise<JsonWebKey>}
   */
  generateSigningKey(idpId, queryParameters) {
    return this.client.generateIdentityProviderSigningKey(idpId, queryParameters);
  }

  /**
   * @param {string} idpId
   * @param {string} keyId
   * @returns {Promise<JsonWebKey>}
   */
  getSigningKey(idpId, keyId) {
    return this.client.getIdentityProviderSigningKey(idpId, keyId);
  }

  /**
   * @param {string} idpId
   * @param {string} keyId
   * @param {object} queryParameters
   * @returns {Promise<JsonWebKey>}
   */
  cloneKey(idpId, keyId, queryParameters) {
    return this.client.cloneIdentityProviderKey(idpId, keyId, queryParameters);
  }

  /**
   * @param {string} idpId
   * @returns {Promise<IdentityProvider>}
   */
  activate(idpId) {
    return this.client.activateIdentityProvider(idpId);
  }

  /**
   * @param {string} idpId
   * @returns {Promise<IdentityProvider>}
   */
  deactivate(idpId) {
    return this.client.deactivateIdentityProvider(idpId);
  }

  /**
   * @param {string} idpId
   * @returns {Promise<Collection>} A collection that will yield {@link IdentityProviderApplicationUser} instances.
   */
  listUsers(idpId) {
    return this.client.listIdentityProviderApplicationUsers(idpId);
  }

  /**
   * @param {string} idpId
   * @param {string} userId
   */
  unlinkUser(idpId, userId) {
    return this.client.unlinkUserFromIdentityProvider(idpId, userId);
  }

  /**
   * @param {string} idpId
   * @param {string} userId
   * @returns {Promise<IdentityProviderApplicationUser>}
   */
  getUser(idpId, userId) {
    return this.client.getIdentityProviderApplicationUser(idpId, userId);
  }

  /**
   * @param {string} idpId
   * @param {string} userId
   * @param {UserIdentityProviderLinkRequest} userIdentityProviderLinkRequest
   * @returns {Promise<IdentityProviderApplicationUser>}
   */
  linkUser(idpId, userId, userIdentityProviderLinkRequest) {
    return this.client.linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest);
  }

  /**
   * @param {string} idpId
   * @param {string} userId
   * @returns {Promise<Collection>} A collection that will yield {@link SocialAuthToken} instances.
   */
  listSocialAuthTokens(idpId, userId) {
    return this.client.listSocialAuthTokens(idpId, userId);
  }
}

module.exports = IdentityProvider;
