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
const AuthorizationServerCredentials = require('./AuthorizationServerCredentials');

/**
 * @class AuthorizationServer
 * @extends Resource
 * @property { hash } _links
 * @property { array } audiences
 * @property { dateTime } created
 * @property { AuthorizationServerCredentials } credentials
 * @property { string } description
 * @property { string } id
 * @property { string } issuer
 * @property { string } issuerMode
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { string } status
 */
class AuthorizationServer extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new AuthorizationServerCredentials(resourceJson.credentials);
    }
  }

  /**
   * @returns {Promise<AuthorizationServer>}
   */
  update() {
    return this.client.updateAuthorizationServer(this.id, this);
  }
  delete() {
    return this.client.deleteAuthorizationServer(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Claim} instances.
   */
  listOAuth2Claims() {
    return this.client.listOAuth2Claims(this.id);
  }

  /**
   * @param {OAuth2Claim} oAuth2Claim
   * @returns {Promise<OAuth2Claim>}
   */
  createOAuth2Claim(oAuth2Claim) {
    return this.client.createOAuth2Claim(this.id, oAuth2Claim);
  }

  /**
   * @param {string} claimId
   */
  deleteOAuth2Claim(claimId) {
    return this.client.deleteOAuth2Claim(this.id, claimId);
  }

  /**
   * @param {string} claimId
   * @returns {Promise<OAuth2Claim>}
   */
  getOAuth2Claim(claimId) {
    return this.client.getOAuth2Claim(this.id, claimId);
  }

  /**
   * @param {string} claimId
   * @param {OAuth2Claim} oAuth2Claim
   * @returns {Promise<OAuth2Claim>}
   */
  updateOAuth2Claim(claimId, oAuth2Claim) {
    return this.client.updateOAuth2Claim(this.id, claimId, oAuth2Claim);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Client} instances.
   */
  listOAuth2Clients() {
    return this.client.listOAuth2ClientsForAuthorizationServer(this.id);
  }

  /**
   * @param {string} clientId
   */
  revokeRefreshTokensForClient(clientId) {
    return this.client.revokeRefreshTokensForAuthorizationServerAndClient(this.id, clientId);
  }

  /**
   * @param {string} clientId
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2RefreshToken} instances.
   */
  listRefreshTokensForClient(clientId, queryParameters) {
    return this.client.listRefreshTokensForAuthorizationServerAndClient(this.id, clientId, queryParameters);
  }

  /**
   * @param {string} clientId
   * @param {string} tokenId
   * @param {object} queryParameters
   * @returns {Promise<OAuth2RefreshToken>}
   */
  getRefreshTokenForClient(clientId, tokenId, queryParameters) {
    return this.client.getRefreshTokenForAuthorizationServerAndClient(this.id, clientId, tokenId, queryParameters);
  }

  /**
   * @param {string} clientId
   * @param {string} tokenId
   */
  revokeRefreshTokenForClient(clientId, tokenId) {
    return this.client.revokeRefreshTokenForAuthorizationServerAndClient(this.id, clientId, tokenId);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listKeys() {
    return this.client.listAuthorizationServerKeys(this.id);
  }

  /**
   * @param {JwkUse} jwkUse
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  rotateKeys(jwkUse) {
    return this.client.rotateAuthorizationServerKeys(this.id, jwkUse);
  }

  activate() {
    return this.client.activateAuthorizationServer(this.id);
  }

  deactivate() {
    return this.client.deactivateAuthorizationServer(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Policy} instances.
   */
  listPolicies() {
    return this.client.listAuthorizationServerPolicies(this.id);
  }

  /**
   * @param {Policy} policy
   * @returns {Promise<Policy>}
   */
  createPolicy(policy) {
    return this.client.createAuthorizationServerPolicy(this.id, policy);
  }

  /**
   * @param {string} policyId
   */
  deletePolicy(policyId) {
    return this.client.deleteAuthorizationServerPolicy(this.id, policyId);
  }

  /**
   * @param {string} policyId
   * @returns {Promise<Policy>}
   */
  getPolicy(policyId) {
    return this.client.getAuthorizationServerPolicy(this.id, policyId);
  }

  /**
   * @param {string} policyId
   * @param {Policy} policy
   * @returns {Promise<Policy>}
   */
  updatePolicy(policyId, policy) {
    return this.client.updateAuthorizationServerPolicy(this.id, policyId, policy);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Scope} instances.
   */
  listOAuth2Scopes(queryParameters) {
    return this.client.listOAuth2Scopes(this.id, queryParameters);
  }

  /**
   * @param {OAuth2Scope} oAuth2Scope
   * @returns {Promise<OAuth2Scope>}
   */
  createOAuth2Scope(oAuth2Scope) {
    return this.client.createOAuth2Scope(this.id, oAuth2Scope);
  }

  /**
   * @param {string} scopeId
   */
  deleteOAuth2Scope(scopeId) {
    return this.client.deleteOAuth2Scope(this.id, scopeId);
  }

  /**
   * @param {string} scopeId
   * @returns {Promise<OAuth2Scope>}
   */
  getOAuth2Scope(scopeId) {
    return this.client.getOAuth2Scope(this.id, scopeId);
  }

  /**
   * @param {string} scopeId
   * @param {OAuth2Scope} oAuth2Scope
   * @returns {Promise<OAuth2Scope>}
   */
  updateOAuth2Scope(scopeId, oAuth2Scope) {
    return this.client.updateOAuth2Scope(this.id, scopeId, oAuth2Scope);
  }
}

module.exports = AuthorizationServer;
