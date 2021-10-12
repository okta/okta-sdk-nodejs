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
const ApplicationAccessibility = require('./ApplicationAccessibility');
const ApplicationCredentials = require('./ApplicationCredentials');
const ApplicationLicensing = require('./ApplicationLicensing');
const ApplicationSettings = require('./ApplicationSettings');
const ApplicationVisibility = require('./ApplicationVisibility');

/**
 * @class Application
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { ApplicationAccessibility } accessibility
 * @property { dateTime } created
 * @property { ApplicationCredentials } credentials
 * @property { array } features
 * @property { string } id
 * @property { string } label
 * @property { dateTime } lastUpdated
 * @property { ApplicationLicensing } licensing
 * @property { string } name
 * @property { hash } profile
 * @property { ApplicationSettings } settings
 * @property { ApplicationSignOnMode } signOnMode
 * @property { string } status
 * @property { ApplicationVisibility } visibility
 */
class Application extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.accessibility) {
      this.accessibility = new ApplicationAccessibility(resourceJson.accessibility);
    }
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new ApplicationCredentials(resourceJson.credentials);
    }
    if (resourceJson && resourceJson.licensing) {
      this.licensing = new ApplicationLicensing(resourceJson.licensing);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new ApplicationSettings(resourceJson.settings);
    }
    if (resourceJson && resourceJson.visibility) {
      this.visibility = new ApplicationVisibility(resourceJson.visibility);
    }
  }

  /**
   * @returns {Promise<Application>}
   */
  update() {
    return this.httpClient.updateApplication(this.id, this);
  }
  delete() {
    return this.httpClient.deleteApplication(this.id);
  }

  activate() {
    return this.httpClient.activateApplication(this.id);
  }

  deactivate() {
    return this.httpClient.deactivateApplication(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link AppUser} instances.
   */
  listApplicationUsers(queryParameters) {
    return this.httpClient.listApplicationUsers(this.id, queryParameters);
  }

  /**
   * @param {AppUser} appUser
   * @returns {Promise<AppUser>}
   */
  assignUserToApplication(appUser) {
    return this.httpClient.assignUserToApplication(this.id, appUser);
  }

  /**
   * @param {string} userId
   * @param {object} queryParameters
   * @returns {Promise<AppUser>}
   */
  getApplicationUser(userId, queryParameters) {
    return this.httpClient.getApplicationUser(this.id, userId, queryParameters);
  }

  /**
   * @param {string} groupId
   * @param {ApplicationGroupAssignment} applicationGroupAssignment
   * @returns {Promise<ApplicationGroupAssignment>}
   */
  createApplicationGroupAssignment(groupId, applicationGroupAssignment) {
    return this.httpClient.createApplicationGroupAssignment(this.id, groupId, applicationGroupAssignment);
  }

  /**
   * @param {string} groupId
   * @param {object} queryParameters
   * @returns {Promise<ApplicationGroupAssignment>}
   */
  getApplicationGroupAssignment(groupId, queryParameters) {
    return this.httpClient.getApplicationGroupAssignment(this.id, groupId, queryParameters);
  }

  /**
   * @param {string} keyId
   * @param {object} queryParameters
   * @returns {Promise<JsonWebKey>}
   */
  cloneApplicationKey(keyId, queryParameters) {
    return this.httpClient.cloneApplicationKey(this.id, keyId, queryParameters);
  }

  /**
   * @param {string} keyId
   * @returns {Promise<JsonWebKey>}
   */
  getApplicationKey(keyId) {
    return this.httpClient.getApplicationKey(this.id, keyId);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link ApplicationGroupAssignment} instances.
   */
  listGroupAssignments(queryParameters) {
    return this.httpClient.listApplicationGroupAssignments(this.id, queryParameters);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listKeys() {
    return this.httpClient.listApplicationKeys(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<JsonWebKey>}
   */
  generateKey(queryParameters) {
    return this.httpClient.generateApplicationKey(this.id, queryParameters);
  }

  /**
   * @param {CsrMetadata} csrMetadata
   * @returns {Promise<Csr>}
   */
  generateCsr(csrMetadata) {
    return this.httpClient.generateCsrForApplication(this.id, csrMetadata);
  }

  /**
   * @param {string} csrId
   * @returns {Promise<Csr>}
   */
  getCsr(csrId) {
    return this.httpClient.getCsrForApplication(this.id, csrId);
  }

  /**
   * @param {string} csrId
   */
  revokeCsr(csrId) {
    return this.httpClient.revokeCsrFromApplication(this.id, csrId);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Csr} instances.
   */
  listCsrs() {
    return this.httpClient.listCsrsForApplication(this.id);
  }

  /**
   * @param {string} csrId
   * @param {string} string
   * @returns {Promise<JsonWebKey>}
   */
  publishCerCert(csrId, string) {
    return this.httpClient.publishCerCert(this.id, csrId, string);
  }

  /**
   * @param {string} csrId
   * @param {string} string
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryCerCert(csrId, string) {
    return this.httpClient.publishBinaryCerCert(this.id, csrId, string);
  }

  /**
   * @param {string} csrId
   * @param {string} string
   * @returns {Promise<JsonWebKey>}
   */
  publishDerCert(csrId, string) {
    return this.httpClient.publishDerCert(this.id, csrId, string);
  }

  /**
   * @param {string} csrId
   * @param {string} string
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryDerCert(csrId, string) {
    return this.httpClient.publishBinaryDerCert(this.id, csrId, string);
  }

  /**
   * @param {string} csrId
   * @param {string} string
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryPemCert(csrId, string) {
    return this.httpClient.publishBinaryPemCert(this.id, csrId, string);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Token} instances.
   */
  listOAuth2Tokens(queryParameters) {
    return this.httpClient.listOAuth2TokensForApplication(this.id, queryParameters);
  }

  /**
   * @param {string} tokenId
   */
  revokeOAuth2TokenForApplication(tokenId) {
    return this.httpClient.revokeOAuth2TokenForApplication(this.id, tokenId);
  }

  /**
   * @param {string} tokenId
   * @param {object} queryParameters
   * @returns {Promise<OAuth2Token>}
   */
  getOAuth2Token(tokenId, queryParameters) {
    return this.httpClient.getOAuth2TokenForApplication(this.id, tokenId, queryParameters);
  }

  revokeOAuth2Tokens() {
    return this.httpClient.revokeOAuth2TokensForApplication(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2ScopeConsentGrant} instances.
   */
  listScopeConsentGrants(queryParameters) {
    return this.httpClient.listScopeConsentGrants(this.id, queryParameters);
  }

  /**
   * @param {OAuth2ScopeConsentGrant} oAuth2ScopeConsentGrant
   * @returns {Promise<OAuth2ScopeConsentGrant>}
   */
  grantConsentToScope(oAuth2ScopeConsentGrant) {
    return this.httpClient.grantConsentToScope(this.id, oAuth2ScopeConsentGrant);
  }

  /**
   * @param {string} grantId
   */
  revokeScopeConsentGrant(grantId) {
    return this.httpClient.revokeScopeConsentGrant(this.id, grantId);
  }

  /**
   * @param {string} grantId
   * @param {object} queryParameters
   * @returns {Promise<OAuth2ScopeConsentGrant>}
   */
  getScopeConsentGrant(grantId, queryParameters) {
    return this.httpClient.getScopeConsentGrant(this.id, grantId, queryParameters);
  }
}

module.exports = Application;
