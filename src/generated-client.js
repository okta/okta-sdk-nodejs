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

const qs = require('querystring');

const Collection = require('./collection');
const models = require('./models');
const factories = require('./factories');
const ModelFactory = require('./model-factory');

/**
 * Auto-Generated API client, implements the operations as defined in the OpenaAPI JSON spec
 *
 * @class GeneratedApiClient
 */
class GeneratedApiClient {

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.includeNonDeleted]
   * @description
   * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
   * @returns {Promise<Collection>} A collection that will yield {@link Application} instances.
   */
  listApplications(queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new factories.Application(),
    );
  }

  /**
   *
   * @param {Application} application
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
   * Adds a new application to your Okta organization.
   * @returns {Promise<Application>}
   */
  createApplication(application, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: application
      },
      { resources }
    );
    return request.then(jsonRes => new factories.Application().createInstance(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @description
   * Removes an inactive application.
   */
  deleteApplication(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches an application from your Okta organization by `id`.
   * @returns {Promise<Application>}
   */
  getApplication(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new factories.Application().createInstance(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param {Application} application
   * @description
   * Updates an application in your organization.
   * @returns {Promise<Application>}
   */
  updateApplication(appId, application) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: application
      },
      { resources }
    );
    return request.then(jsonRes => new factories.Application().createInstance(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @description
   * Enumerates Certificate Signing Requests for an application
   * @returns {Promise<Collection>} A collection that will yield {@link Csr} instances.
   */
  listCsrsForApplication(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.Csr),
    );
  }

  /**
   *
   * @param appId {String}
   * @param {CsrMetadata} csrMetadata
   * @description
   * Generates a new key pair and returns the Certificate Signing Request for it.
   * @returns {Promise<Csr>}
   */
  generateCsrForApplication(appId, csrMetadata) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: csrMetadata
      },
      { resources }
    );
    return request.then(jsonRes => new models.Csr(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}
   */
  revokeCsrFromApplication(appId, csrId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}
   * @returns {Promise<Csr>}
   */
  getCsrForApplication(appId, csrId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Csr(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishCerCert(appId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/x-x509-ca-cert', 'Accept': 'application/json', 'Content-Transfer-Encoding': 'base64',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryCerCert(appId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/x-x509-ca-cert', 'Accept': 'application/json',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishDerCert(appId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/pkix-cert', 'Accept': 'application/json', 'Content-Transfer-Encoding': 'base64',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryDerCert(appId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/pkix-cert', 'Accept': 'application/json',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryPemCert(appId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/x-pem-file', 'Accept': 'application/json',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @description
   * Enumerates key credentials for an application
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listApplicationKeys(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.JsonWebKey),
    );
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.validityYears]
   * @description
   * Generates a new X.509 certificate for an application key credential
   * @returns {Promise<JsonWebKey>}
   */
  generateApplicationKey(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/generate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param keyId {String}
   * @description
   * Gets a specific application key credential by kid
   * @returns {Promise<JsonWebKey>}
   */
  getApplicationKey(appId, keyId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param keyId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.targetAid]
   * @description
   * Clones a X.509 certificate for an application key credential from a source application to target application.
   * @returns {Promise<JsonWebKey>}
   */
  cloneApplicationKey(appId, keyId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}/clone`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all scope consent grants for the application
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2ScopeConsentGrant} instances.
   */
  listScopeConsentGrants(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/grants`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2ScopeConsentGrant),
    );
  }

  /**
   *
   * @param appId {String}
   * @param {OAuth2ScopeConsentGrant} oAuth2ScopeConsentGrant
   * @description
   * Grants consent for the application to request an OAuth 2.0 Okta scope
   * @returns {Promise<OAuth2ScopeConsentGrant>}
   */
  grantConsentToScope(appId, oAuth2ScopeConsentGrant) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/grants`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: oAuth2ScopeConsentGrant
      },
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2ScopeConsentGrant(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param grantId {String}
   * @description
   * Revokes permission for the application to request the given scope
   */
  revokeScopeConsentGrant(appId, grantId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/grants/${grantId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/grants/${grantId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param grantId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches a single scope consent grant for the application
   * @returns {Promise<OAuth2ScopeConsentGrant>}
   */
  getScopeConsentGrant(appId, grantId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/grants/${grantId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/grants/${grantId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2ScopeConsentGrant(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
   * Enumerates group assignments for an application.
   * @returns {Promise<Collection>} A collection that will yield {@link ApplicationGroupAssignment} instances.
   */
  listApplicationGroupAssignments(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.ApplicationGroupAssignment),
    );
  }

  /**
   *
   * @param appId {String}
   * @param groupId {String}
   * @description
   * Removes a group assignment from an application.
   */
  deleteApplicationGroupAssignment(appId, groupId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches an application group assignment
   * @returns {Promise<ApplicationGroupAssignment>}
   */
  getApplicationGroupAssignment(appId, groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.ApplicationGroupAssignment(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param groupId {String}
   * @param {ApplicationGroupAssignment} applicationGroupAssignment
   * @description
   * Assigns a group to an application
   * @returns {Promise<ApplicationGroupAssignment>}
   */
  createApplicationGroupAssignment(appId, groupId, applicationGroupAssignment) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: applicationGroupAssignment
      },
      { resources }
    );
    return request.then(jsonRes => new models.ApplicationGroupAssignment(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @description
   * Activates an inactive application.
   */
  activateApplication(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param appId {String}
   * @description
   * Deactivates an active application.
   */
  deactivateApplication(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param appId {String}
   * @description
   * Revokes all tokens for the specified application
   */
  revokeOAuth2TokensForApplication(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/tokens`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Lists all tokens for the application
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Token} instances.
   */
  listOAuth2TokensForApplication(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/tokens`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2Token),
    );
  }

  /**
   *
   * @param appId {String}
   * @param tokenId {String}
   * @description
   * Revokes the specified token for the specified application
   */
  revokeOAuth2TokenForApplication(appId, tokenId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/tokens/${tokenId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/tokens/${tokenId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param tokenId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Gets a token for the specified application
   * @returns {Promise<OAuth2Token>}
   */
  getOAuth2TokenForApplication(appId, tokenId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/tokens/${tokenId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/tokens/${tokenId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2Token(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.query_scope]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.expand]
   * @description
   * Enumerates all assigned [application users](#application-user-model) for an application.
   * @returns {Promise<Collection>} A collection that will yield {@link AppUser} instances.
   */
  listApplicationUsers(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.AppUser),
    );
  }

  /**
   *
   * @param appId {String}
   * @param {AppUser} appUser
   * @description
   * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
   * @returns {Promise<AppUser>}
   */
  assignUserToApplication(appId, appUser) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: appUser
      },
      { resources }
    );
    return request.then(jsonRes => new models.AppUser(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Removes an assignment for a user from an application.
   */
  deleteApplicationUser(appId, userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches a specific user assignment for application by `id`.
   * @returns {Promise<AppUser>}
   */
  getApplicationUser(appId, userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.AppUser(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param userId {String}
   * @param {AppUser} appUser
   * @description
   * Updates a user's profile for an application
   * @returns {Promise<AppUser>}
   */
  updateApplicationUser(appId, userId, appUser) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: appUser
      },
      { resources }
    );
    return request.then(jsonRes => new models.AppUser(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.after]
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link AuthorizationServer} instances.
   */
  listAuthorizationServers(queryParameters) {
    let url = `${this.baseUrl}/api/v1/authorizationServers`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.AuthorizationServer),
    );
  }

  /**
   *
   * @param {AuthorizationServer} authorizationServer
   * @description
   * Success
   * @returns {Promise<AuthorizationServer>}
   */
  createAuthorizationServer(authorizationServer) {
    let url = `${this.baseUrl}/api/v1/authorizationServers`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: authorizationServer
      },
      { resources }
    );
    return request.then(jsonRes => new models.AuthorizationServer(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   */
  deleteAuthorizationServer(authServerId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Promise<AuthorizationServer>}
   */
  getAuthorizationServer(authServerId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.AuthorizationServer(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param {AuthorizationServer} authorizationServer
   * @description
   * Success
   * @returns {Promise<AuthorizationServer>}
   */
  updateAuthorizationServer(authServerId, authorizationServer) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: authorizationServer
      },
      { resources }
    );
    return request.then(jsonRes => new models.AuthorizationServer(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Claim} instances.
   */
  listOAuth2Claims(authServerId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/claims`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2Claim),
    );
  }

  /**
   *
   * @param authServerId {String}
   * @param {OAuth2Claim} oAuth2Claim
   * @description
   * Success
   * @returns {Promise<OAuth2Claim>}
   */
  createOAuth2Claim(authServerId, oAuth2Claim) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/claims`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: oAuth2Claim
      },
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2Claim(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param claimId {String}
   * @description
   * Success
   */
  deleteOAuth2Claim(authServerId, claimId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/claims/${claimId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/claims/${claimId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param authServerId {String}
   * @param claimId {String}
   * @description
   * Success
   * @returns {Promise<OAuth2Claim>}
   */
  getOAuth2Claim(authServerId, claimId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/claims/${claimId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/claims/${claimId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2Claim(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param claimId {String}
   * @param {OAuth2Claim} oAuth2Claim
   * @description
   * Success
   * @returns {Promise<OAuth2Claim>}
   */
  updateOAuth2Claim(authServerId, claimId, oAuth2Claim) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/claims/${claimId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/claims/${claimId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: oAuth2Claim
      },
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2Claim(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Client} instances.
   */
  listOAuth2ClientsForAuthorizationServer(authServerId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2Client),
    );
  }

  /**
   *
   * @param authServerId {String}
   * @param clientId {String}
   * @description
   * Success
   */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients/${clientId}/tokens`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients/${clientId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param authServerId {String}
   * @param clientId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2RefreshToken} instances.
   */
  listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients/${clientId}/tokens`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2RefreshToken),
    );
  }

  /**
   *
   * @param authServerId {String}
   * @param clientId {String}
   * @param tokenId {String}
   * @description
   * Success
   */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients/${clientId}/tokens/${tokenId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients/${clientId}/tokens/${tokenId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients/${clientId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param authServerId {String}
   * @param clientId {String}
   * @param tokenId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Success
   * @returns {Promise<OAuth2RefreshToken>}
   */
  getRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients/${clientId}/tokens/${tokenId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients/${clientId}/tokens/${tokenId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/clients/${clientId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2RefreshToken(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listAuthorizationServerKeys(authServerId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/credentials/keys`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.JsonWebKey),
    );
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  rotateAuthorizationServerKeys(authServerId, jwkUse) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/credentials/lifecycle/keyRotate`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.JsonWebKey),
      { method: 'post', body: JSON.stringify(jwkUse) }
    );
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   */
  activateAuthorizationServer(authServerId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   */
  deactivateAuthorizationServer(authServerId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link Policy} instances.
   */
  listAuthorizationServerPolicies(authServerId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies`;

    return new Collection(
      this,
      url,
      new factories.Policy(),
    );
  }

  /**
   *
   * @param authServerId {String}
   * @param {Policy} policy
   * @description
   * Success
   * @returns {Promise<Policy>}
   */
  createAuthorizationServerPolicy(authServerId, policy) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: policy
      },
      { resources }
    );
    return request.then(jsonRes => new factories.Policy().createInstance(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param policyId {String}
   * @description
   * Success
   */
  deleteAuthorizationServerPolicy(authServerId, policyId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param authServerId {String}
   * @param policyId {String}
   * @description
   * Success
   * @returns {Promise<Policy>}
   */
  getAuthorizationServerPolicy(authServerId, policyId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new factories.Policy().createInstance(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param policyId {String}
   * @param {Policy} policy
   * @description
   * Success
   * @returns {Promise<Policy>}
   */
  updateAuthorizationServerPolicy(authServerId, policyId, policy) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: policy
      },
      { resources }
    );
    return request.then(jsonRes => new factories.Policy().createInstance(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.cursor]
   * @param {String} [queryParams.limit]
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Scope} instances.
   */
  listOAuth2Scopes(authServerId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/scopes`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2Scope),
    );
  }

  /**
   *
   * @param authServerId {String}
   * @param {OAuth2Scope} oAuth2Scope
   * @description
   * Success
   * @returns {Promise<OAuth2Scope>}
   */
  createOAuth2Scope(authServerId, oAuth2Scope) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/scopes`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: oAuth2Scope
      },
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2Scope(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param scopeId {String}
   * @description
   * Success
   */
  deleteOAuth2Scope(authServerId, scopeId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/scopes/${scopeId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/scopes/${scopeId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param authServerId {String}
   * @param scopeId {String}
   * @description
   * Success
   * @returns {Promise<OAuth2Scope>}
   */
  getOAuth2Scope(authServerId, scopeId) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/scopes/${scopeId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/scopes/${scopeId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2Scope(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param scopeId {String}
   * @param {OAuth2Scope} oAuth2Scope
   * @description
   * Success
   * @returns {Promise<OAuth2Scope>}
   */
  updateOAuth2Scope(authServerId, scopeId, oAuth2Scope) {
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/scopes/${scopeId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/scopes/${scopeId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: oAuth2Scope
      },
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2Scope(jsonRes, this));
  }

  /**
   *
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link EventHook} instances.
   */
  listEventHooks() {
    let url = `${this.baseUrl}/api/v1/eventHooks`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.EventHook),
    );
  }

  /**
   *
   * @param {EventHook} eventHook
   * @description
   * Success
   * @returns {Promise<EventHook>}
   */
  createEventHook(eventHook) {
    let url = `${this.baseUrl}/api/v1/eventHooks`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: eventHook
      },
      { resources }
    );
    return request.then(jsonRes => new models.EventHook(jsonRes, this));
  }

  /**
   *
   * @param eventHookId {String}
   * @description
   * Success
   */
  deleteEventHook(eventHookId) {
    let url = `${this.baseUrl}/api/v1/eventHooks/${eventHookId}`;

    const resources = [
      `${this.baseUrl}/api/v1/eventHooks/${eventHookId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param eventHookId {String}
   * @description
   * Success
   * @returns {Promise<EventHook>}
   */
  getEventHook(eventHookId) {
    let url = `${this.baseUrl}/api/v1/eventHooks/${eventHookId}`;

    const resources = [
      `${this.baseUrl}/api/v1/eventHooks/${eventHookId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.EventHook(jsonRes, this));
  }

  /**
   *
   * @param eventHookId {String}
   * @param {EventHook} eventHook
   * @description
   * Success
   * @returns {Promise<EventHook>}
   */
  updateEventHook(eventHookId, eventHook) {
    let url = `${this.baseUrl}/api/v1/eventHooks/${eventHookId}`;

    const resources = [
      `${this.baseUrl}/api/v1/eventHooks/${eventHookId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: eventHook
      },
      { resources }
    );
    return request.then(jsonRes => new models.EventHook(jsonRes, this));
  }

  /**
   *
   * @param eventHookId {String}
   * @description
   * Success
   * @returns {Promise<EventHook>}
   */
  activateEventHook(eventHookId) {
    let url = `${this.baseUrl}/api/v1/eventHooks/${eventHookId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/eventHooks/${eventHookId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.EventHook(jsonRes, this));
  }

  /**
   *
   * @param eventHookId {String}
   * @description
   * Success
   * @returns {Promise<EventHook>}
   */
  deactivateEventHook(eventHookId) {
    let url = `${this.baseUrl}/api/v1/eventHooks/${eventHookId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/eventHooks/${eventHookId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.EventHook(jsonRes, this));
  }

  /**
   *
   * @param eventHookId {String}
   * @description
   * Success
   * @returns {Promise<EventHook>}
   */
  verifyEventHook(eventHookId) {
    let url = `${this.baseUrl}/api/v1/eventHooks/${eventHookId}/lifecycle/verify`;

    const resources = [
      `${this.baseUrl}/api/v1/eventHooks/${eventHookId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.EventHook(jsonRes, this));
  }

  /**
   *
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link Feature} instances.
   */
  listFeatures() {
    let url = `${this.baseUrl}/api/v1/features`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.Feature),
    );
  }

  /**
   *
   * @param featureId {String}
   * @description
   * Success
   * @returns {Promise<Feature>}
   */
  getFeature(featureId) {
    let url = `${this.baseUrl}/api/v1/features/${featureId}`;

    const resources = [
      `${this.baseUrl}/api/v1/features/${featureId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Feature(jsonRes, this));
  }

  /**
   *
   * @param featureId {String}
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link Feature} instances.
   */
  listFeatureDependencies(featureId) {
    let url = `${this.baseUrl}/api/v1/features/${featureId}/dependencies`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.Feature),
    );
  }

  /**
   *
   * @param featureId {String}
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link Feature} instances.
   */
  listFeatureDependents(featureId) {
    let url = `${this.baseUrl}/api/v1/features/${featureId}/dependents`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.Feature),
    );
  }

  /**
   *
   * @param featureId {String}
   * @param lifecycle {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.mode]
   * @description
   * Success
   * @returns {Promise<Feature>}
   */
  updateFeatureLifecycle(featureId, lifecycle, queryParameters) {
    let url = `${this.baseUrl}/api/v1/features/${featureId}/${lifecycle}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/features/${featureId}/${lifecycle}`,
      `${this.baseUrl}/api/v1/features/${featureId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Feature(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
   */
  listGroups(queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.Group),
    );
  }

  /**
   *
   * @param {Group} group
   * @description
   * Adds a new group with `OKTA_GROUP` type to your organization.
   * @returns {Promise<Group>}
   */
  createGroup(group) {
    let url = `${this.baseUrl}/api/v1/groups`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: group
      },
      { resources }
    );
    return request.then(jsonRes => new models.Group(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.search]
   * @param {String} [queryParams.expand]
   * @description
   * Lists all group rules for your organization.
   * @returns {Promise<Collection>} A collection that will yield {@link GroupRule} instances.
   */
  listGroupRules(queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/rules`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.GroupRule),
    );
  }

  /**
   *
   * @param {GroupRule} groupRule
   * @description
   * Creates a group rule to dynamically add users to the specified group if they match the condition
   * @returns {Promise<GroupRule>}
   */
  createGroupRule(groupRule) {
    let url = `${this.baseUrl}/api/v1/groups/rules`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: groupRule
      },
      { resources }
    );
    return request.then(jsonRes => new models.GroupRule(jsonRes, this));
  }

  /**
   *
   * @param ruleId {String}
   * @description
   * Removes a specific group rule by id from your organization
   */
  deleteGroupRule(ruleId) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param ruleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches a specific group rule by id from your organization
   * @returns {Promise<GroupRule>}
   */
  getGroupRule(ruleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.GroupRule(jsonRes, this));
  }

  /**
   *
   * @param ruleId {String}
   * @param {GroupRule} groupRule
   * @description
   * Updates a group rule. Only `INACTIVE` rules can be updated.
   * @returns {Promise<GroupRule>}
   */
  updateGroupRule(ruleId, groupRule) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: groupRule
      },
      { resources }
    );
    return request.then(jsonRes => new models.GroupRule(jsonRes, this));
  }

  /**
   *
   * @param ruleId {String}
   * @description
   * Activates a specific group rule by id from your organization
   */
  activateGroupRule(ruleId) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param ruleId {String}
   * @description
   * Deactivates a specific group rule by id from your organization
   */
  deactivateGroupRule(ruleId) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @description
   * Removes a group with `OKTA_GROUP` type from your organization.
   */
  deleteGroup(groupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @description
   * Lists all group rules for your organization.
   * @returns {Promise<Group>}
   */
  getGroup(groupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Group(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param {Group} group
   * @description
   * Updates the profile for a group with `OKTA_GROUP` type from your organization.
   * @returns {Promise<Group>}
   */
  updateGroup(groupId, group) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: group
      },
      { resources }
    );
    return request.then(jsonRes => new models.Group(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Enumerates all applications that are assigned to a group.
   * @returns {Promise<Collection>} A collection that will yield {@link Application} instances.
   */
  listAssignedApplicationsForGroup(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new factories.Application(),
    );
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link Role} instances.
   */
  listGroupAssignedRoles(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.Role),
    );
  }

  /**
   *
   * @param groupId {String}
   * @param {AssignRoleRequest} assignRoleRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.disableNotifications]
   * @description
   * Assigns a Role to a Group
   * @returns {Promise<Role>}
   */
  assignRoleToGroup(groupId, assignRoleRequest, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: assignRoleRequest
      },
      { resources }
    );
    return request.then(jsonRes => new models.Role(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @description
   * Unassigns a Role from a Group
   */
  removeRoleFromGroup(groupId, roleId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @description
   * Success
   * @returns {Promise<Role>}
   */
  getRole(groupId, roleId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Role(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
   * @returns {Promise<Collection>} A collection that will yield {@link CatalogApplication} instances.
   */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.CatalogApplication),
    );
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @param appName {String}
   * @description
   * Success
   */
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId, roleId, appName) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}`,
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @param appName {String}
   * @description
   * Success
   */
  addApplicationTargetToAdminRoleGivenToGroup(groupId, roleId, appName) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}`,
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.put(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @param appName {String}
   * @param applicationId {String}
   * @description
   * Remove App Instance Target to App Administrator Role given to a Group
   */
  removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId, roleId, appName, applicationId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}/${applicationId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}/${applicationId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}`,
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @param appName {String}
   * @param applicationId {String}
   * @description
   * Add App Instance Target to App Administrator Role given to a Group
   */
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId, roleId, appName, applicationId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}/${applicationId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}/${applicationId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/catalog/apps/${appName}`,
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.put(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
   */
  listGroupTargetsForGroupRole(groupId, roleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.Group),
    );
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @param targetGroupId {String}
   * @description
   * Convenience method for /api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId}
   */
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId, roleId, targetGroupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/groups/${targetGroupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/groups/${targetGroupId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param roleId {String}
   * @param targetGroupId {String}
   * @description
   * Convenience method for /api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId}
   */
  addGroupTargetToGroupAdministratorRoleForGroup(groupId, roleId, targetGroupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/groups/${targetGroupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}/targets/groups/${targetGroupId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.put(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Enumerates all users that are a member of a group.
   * @returns {Promise<Collection>} A collection that will yield {@link User} instances.
   */
  listGroupUsers(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.User),
    );
  }

  /**
   *
   * @param groupId {String}
   * @param userId {String}
   * @description
   * Removes a user from a group with 'OKTA_GROUP' type.
   */
  removeUserFromGroup(groupId, userId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param userId {String}
   * @description
   * Adds a user to a group with 'OKTA_GROUP' type.
   */
  addUserToGroup(groupId, userId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.put(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.type]
   * @description
   * Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
   * @returns {Promise<Collection>} A collection that will yield {@link IdentityProvider} instances.
   */
  listIdentityProviders(queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.IdentityProvider),
    );
  }

  /**
   *
   * @param {IdentityProvider} identityProvider
   * @description
   * Adds a new IdP to your organization.
   * @returns {Promise<IdentityProvider>}
   */
  createIdentityProvider(identityProvider) {
    let url = `${this.baseUrl}/api/v1/idps`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: identityProvider
      },
      { resources }
    );
    return request.then(jsonRes => new models.IdentityProvider(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Enumerates IdP key credentials.
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listIdentityProviderKeys(queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.JsonWebKey),
    );
  }

  /**
   *
   * @param {JsonWebKey} jsonWebKey
   * @description
   * Adds a new X.509 certificate credential to the IdP key store.
   * @returns {Promise<JsonWebKey>}
   */
  createIdentityProviderKey(jsonWebKey) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: jsonWebKey
      },
      { resources }
    );
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param keyId {String}
   * @description
   * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.
   */
  deleteIdentityProviderKey(keyId) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys/${keyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/credentials/keys/${keyId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param keyId {String}
   * @description
   * Gets a specific IdP Key Credential by `kid`
   * @returns {Promise<JsonWebKey>}
   */
  getIdentityProviderKey(keyId) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys/${keyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/credentials/keys/${keyId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @description
   * Removes an IdP from your organization.
   */
  deleteIdentityProvider(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param idpId {String}
   * @description
   * Fetches an IdP by `id`.
   * @returns {Promise<IdentityProvider>}
   */
  getIdentityProvider(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.IdentityProvider(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param {IdentityProvider} identityProvider
   * @description
   * Updates the configuration for an IdP.
   * @returns {Promise<IdentityProvider>}
   */
  updateIdentityProvider(idpId, identityProvider) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: identityProvider
      },
      { resources }
    );
    return request.then(jsonRes => new models.IdentityProvider(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @description
   * Enumerates Certificate Signing Requests for an IdP
   * @returns {Promise<Collection>} A collection that will yield {@link Csr} instances.
   */
  listCsrsForIdentityProvider(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.Csr),
    );
  }

  /**
   *
   * @param idpId {String}
   * @param {CsrMetadata} csrMetadata
   * @description
   * Generates a new key pair and returns a Certificate Signing Request for it.
   * @returns {Promise<Csr>}
   */
  generateCsrForIdentityProvider(idpId, csrMetadata) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: csrMetadata
      },
      { resources }
    );
    return request.then(jsonRes => new models.Csr(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @description
   * Revoke a Certificate Signing Request and delete the key pair from the IdP
   */
  revokeCsrForIdentityProvider(idpId, csrId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @description
   * Gets a specific Certificate Signing Request model by id
   * @returns {Promise<Csr>}
   */
  getCsrForIdentityProvider(idpId, csrId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Csr(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishCerCertForIdentityProvider(idpId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/x-x509-ca-cert', 'Accept': 'application/json', 'Content-Transfer-Encoding': 'base64',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryCerCertForIdentityProvider(idpId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/x-x509-ca-cert', 'Accept': 'application/json',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishDerCertForIdentityProvider(idpId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/pkix-cert', 'Accept': 'application/json', 'Content-Transfer-Encoding': 'base64',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryDerCertForIdentityProvider(idpId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/pkix-cert', 'Accept': 'application/json',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} string
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryPemCertForIdentityProvider(idpId, csrId, certificate) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}/lifecycle/publish`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs/${csrId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/x-pem-file', 'Accept': 'application/json',
        },
        body: certificate
      },
      { resources }
    ).then(res => res.json());
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @description
   * Enumerates signing key credentials for an IdP
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listIdentityProviderSigningKeys(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.JsonWebKey),
    );
  }

  /**
   *
   * @param idpId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.validityYears]
   * @description
   * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
   * @returns {Promise<JsonWebKey>}
   */
  generateIdentityProviderSigningKey(idpId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys/generate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param keyId {String}
   * @description
   * Gets a specific IdP Key Credential by `kid`
   * @returns {Promise<JsonWebKey>}
   */
  getIdentityProviderSigningKey(idpId, keyId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys/${keyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys/${keyId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param keyId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.targetIdpId]
   * @description
   * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
   * @returns {Promise<JsonWebKey>}
   */
  cloneIdentityProviderKey(idpId, keyId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys/${keyId}/clone`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys/${keyId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @description
   * Activates an inactive IdP.
   * @returns {Promise<IdentityProvider>}
   */
  activateIdentityProvider(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.IdentityProvider(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @description
   * Deactivates an active IdP.
   * @returns {Promise<IdentityProvider>}
   */
  deactivateIdentityProvider(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.IdentityProvider(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @description
   * Find all the users linked to an identity provider
   * @returns {Promise<Collection>} A collection that will yield {@link IdentityProviderApplicationUser} instances.
   */
  listIdentityProviderApplicationUsers(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/users`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.IdentityProviderApplicationUser),
    );
  }

  /**
   *
   * @param idpId {String}
   * @param userId {String}
   * @description
   * Removes the link between the Okta user and the IdP user.
   */
  unlinkUserFromIdentityProvider(idpId, userId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/users/${userId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/users/${userId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param idpId {String}
   * @param userId {String}
   * @description
   * Fetches a linked IdP user by ID
   * @returns {Promise<IdentityProviderApplicationUser>}
   */
  getIdentityProviderApplicationUser(idpId, userId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/users/${userId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/users/${userId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.IdentityProviderApplicationUser(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param userId {String}
   * @param {UserIdentityProviderLinkRequest} userIdentityProviderLinkRequest
   * @description
   * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
   * @returns {Promise<IdentityProviderApplicationUser>}
   */
  linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/users/${userId}`;

    const resources = [
      `${this.baseUrl}/api/v1/idps/${idpId}/users/${userId}`,
      `${this.baseUrl}/api/v1/idps/${idpId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: userIdentityProviderLinkRequest
      },
      { resources }
    );
    return request.then(jsonRes => new models.IdentityProviderApplicationUser(jsonRes, this));
  }

  /**
   *
   * @param idpId {String}
   * @param userId {String}
   * @description
   * Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.
   * @returns {Promise<Collection>} A collection that will yield {@link SocialAuthToken} instances.
   */
  listSocialAuthTokens(idpId, userId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/users/${userId}/credentials/tokens`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.SocialAuthToken),
    );
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.type]
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link InlineHook} instances.
   */
  listInlineHooks(queryParameters) {
    let url = `${this.baseUrl}/api/v1/inlineHooks`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.InlineHook),
    );
  }

  /**
   *
   * @param {InlineHook} inlineHook
   * @description
   * Success
   * @returns {Promise<InlineHook>}
   */
  createInlineHook(inlineHook) {
    let url = `${this.baseUrl}/api/v1/inlineHooks`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: inlineHook
      },
      { resources }
    );
    return request.then(jsonRes => new models.InlineHook(jsonRes, this));
  }

  /**
   *
   * @param inlineHookId {String}
   * @description
   * Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
   */
  deleteInlineHook(inlineHookId) {
    let url = `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}`;

    const resources = [
      `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param inlineHookId {String}
   * @description
   * Gets an inline hook by ID
   * @returns {Promise<InlineHook>}
   */
  getInlineHook(inlineHookId) {
    let url = `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}`;

    const resources = [
      `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.InlineHook(jsonRes, this));
  }

  /**
   *
   * @param inlineHookId {String}
   * @param {InlineHook} inlineHook
   * @description
   * Updates an inline hook by ID
   * @returns {Promise<InlineHook>}
   */
  updateInlineHook(inlineHookId, inlineHook) {
    let url = `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}`;

    const resources = [
      `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: inlineHook
      },
      { resources }
    );
    return request.then(jsonRes => new models.InlineHook(jsonRes, this));
  }

  /**
   *
   * @param inlineHookId {String}
   * @param {InlineHookPayload} inlineHookPayload
   * @description
   * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
   * @returns {Promise<InlineHookResponse>}
   */
  executeInlineHook(inlineHookId, inlineHookPayload) {
    let url = `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}/execute`;

    const resources = [
      `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: inlineHookPayload
      },
      { resources }
    );
    return request.then(jsonRes => new models.InlineHookResponse(jsonRes, this));
  }

  /**
   *
   * @param inlineHookId {String}
   * @description
   * Activates the Inline Hook matching the provided id
   * @returns {Promise<InlineHook>}
   */
  activateInlineHook(inlineHookId) {
    let url = `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.InlineHook(jsonRes, this));
  }

  /**
   *
   * @param inlineHookId {String}
   * @description
   * Deactivates the Inline Hook matching the provided id
   * @returns {Promise<InlineHook>}
   */
  deactivateInlineHook(inlineHookId) {
    let url = `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/inlineHooks/${inlineHookId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.InlineHook(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.since]
   * @param {String} [queryParams.until]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.sortOrder]
   * @param {String} [queryParams.after]
   * @description
   * The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
   * @returns {Promise<Collection>} A collection that will yield {@link LogEvent} instances.
   */
  getLogs(queryParameters) {
    let url = `${this.baseUrl}/api/v1/logs`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.LogEvent),
    );
  }

  /**
   *
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link LinkedObject} instances.
   */
  listLinkedObjectDefinitions() {
    let url = `${this.baseUrl}/api/v1/meta/schemas/user/linkedObjects`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.LinkedObject),
    );
  }

  /**
   *
   * @param {LinkedObject} linkedObject
   * @description
   * Success
   * @returns {Promise<LinkedObject>}
   */
  addLinkedObjectDefinition(linkedObject) {
    let url = `${this.baseUrl}/api/v1/meta/schemas/user/linkedObjects`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: linkedObject
      },
      { resources }
    );
    return request.then(jsonRes => new models.LinkedObject(jsonRes, this));
  }

  /**
   *
   * @param linkedObjectName {String}
   * @description
   * Success
   */
  deleteLinkedObjectDefinition(linkedObjectName) {
    let url = `${this.baseUrl}/api/v1/meta/schemas/user/linkedObjects/${linkedObjectName}`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/schemas/user/linkedObjects/${linkedObjectName}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param linkedObjectName {String}
   * @description
   * Success
   * @returns {Promise<LinkedObject>}
   */
  getLinkedObjectDefinition(linkedObjectName) {
    let url = `${this.baseUrl}/api/v1/meta/schemas/user/linkedObjects/${linkedObjectName}`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/schemas/user/linkedObjects/${linkedObjectName}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.LinkedObject(jsonRes, this));
  }

  /**
   *
   * @description
   * Fetches all User Types in your org
   * @returns {Promise<Collection>} A collection that will yield {@link UserType} instances.
   */
  listUserTypes() {
    let url = `${this.baseUrl}/api/v1/meta/types/user`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.UserType),
    );
  }

  /**
   *
   * @param {UserType} userType
   * @description
   * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
   * @returns {Promise<UserType>}
   */
  createUserType(userType) {
    let url = `${this.baseUrl}/api/v1/meta/types/user`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: userType
      },
      { resources }
    );
    return request.then(jsonRes => new models.UserType(jsonRes, this));
  }

  /**
   *
   * @param typeId {String}
   * @description
   * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
   */
  deleteUserType(typeId) {
    let url = `${this.baseUrl}/api/v1/meta/types/user/${typeId}`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/types/user/${typeId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param typeId {String}
   * @description
   * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
   * @returns {Promise<UserType>}
   */
  getUserType(typeId) {
    let url = `${this.baseUrl}/api/v1/meta/types/user/${typeId}`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/types/user/${typeId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.UserType(jsonRes, this));
  }

  /**
   *
   * @param typeId {String}
   * @param {UserType} userType
   * @description
   * Updates an existing User Type
   * @returns {Promise<UserType>}
   */
  updateUserType(typeId, userType) {
    let url = `${this.baseUrl}/api/v1/meta/types/user/${typeId}`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/types/user/${typeId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: userType
      },
      { resources }
    );
    return request.then(jsonRes => new models.UserType(jsonRes, this));
  }

  /**
   *
   * @param typeId {String}
   * @param {UserType} userType
   * @description
   * Replace an existing User Type
   * @returns {Promise<UserType>}
   */
  replaceUserType(typeId, userType) {
    let url = `${this.baseUrl}/api/v1/meta/types/user/${typeId}`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/types/user/${typeId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: userType
      },
      { resources }
    );
    return request.then(jsonRes => new models.UserType(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.type]
   * @param {String} [queryParams.status]
   * @param {String} [queryParams.expand]
   * @description
   * Gets all policies with the specified type.
   * @returns {Promise<Collection>} A collection that will yield {@link Policy} instances.
   */
  listPolicies(queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new factories.Policy(),
    );
  }

  /**
   *
   * @param {Policy} policy
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
   * Creates a policy.
   * @returns {Promise<Policy>}
   */
  createPolicy(policy, queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: policy
      },
      { resources }
    );
    return request.then(jsonRes => new factories.Policy().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @description
   * Removes a policy.
   */
  deletePolicy(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Gets a policy.
   * @returns {Promise<Policy>}
   */
  getPolicy(policyId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new factories.Policy().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param {Policy} policy
   * @description
   * Updates a policy.
   * @returns {Promise<Policy>}
   */
  updatePolicy(policyId, policy) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: policy
      },
      { resources }
    );
    return request.then(jsonRes => new factories.Policy().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @description
   * Activates a policy.
   */
  activatePolicy(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @description
   * Deactivates a policy.
   */
  deactivatePolicy(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @description
   * Enumerates all policy rules.
   * @returns {Promise<Collection>} A collection that will yield {@link PolicyRule} instances.
   */
  listPolicyRules(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules`;

    return new Collection(
      this,
      url,
      new factories.PolicyRule(),
    );
  }

  /**
   *
   * @param policyId {String}
   * @param {PolicyRule} policyRule
   * @description
   * Creates a policy rule.
   * @returns {Promise<PolicyRule>}
   */
  createPolicyRule(policyId, policyRule) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: policyRule
      },
      { resources }
    );
    return request.then(jsonRes => new factories.PolicyRule().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Removes a policy rule.
   */
  deletePolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Gets a policy rule.
   * @returns {Promise<PolicyRule>}
   */
  getPolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new factories.PolicyRule().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @param {PolicyRule} policyRule
   * @description
   * Updates a policy rule.
   * @returns {Promise<PolicyRule>}
   */
  updatePolicyRule(policyId, ruleId, policyRule) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: policyRule
      },
      { resources }
    );
    return request.then(jsonRes => new factories.PolicyRule().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Activates a policy rule.
   */
  activatePolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Deactivates a policy rule.
   */
  deactivatePolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param {CreateSessionRequest} createSessionRequest
   * @description
   * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
   * @returns {Promise<Session>}
   */
  createSession(createSessionRequest) {
    let url = `${this.baseUrl}/api/v1/sessions`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: createSessionRequest
      },
      { resources }
    );
    return request.then(jsonRes => new models.Session(jsonRes, this));
  }

  /**
   *
   * @param sessionId {String}
   * @description
   * Convenience method for /api/v1/sessions/{sessionId}
   */
  endSession(sessionId) {
    let url = `${this.baseUrl}/api/v1/sessions/${sessionId}`;

    const resources = [
      `${this.baseUrl}/api/v1/sessions/${sessionId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param sessionId {String}
   * @description
   * Get details about a session.
   * @returns {Promise<Session>}
   */
  getSession(sessionId) {
    let url = `${this.baseUrl}/api/v1/sessions/${sessionId}`;

    const resources = [
      `${this.baseUrl}/api/v1/sessions/${sessionId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Session(jsonRes, this));
  }

  /**
   *
   * @param sessionId {String}
   * @description
   * Convenience method for /api/v1/sessions/{sessionId}/lifecycle/refresh
   * @returns {Promise<Session>}
   */
  refreshSession(sessionId) {
    let url = `${this.baseUrl}/api/v1/sessions/${sessionId}/lifecycle/refresh`;

    const resources = [
      `${this.baseUrl}/api/v1/sessions/${sessionId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Session(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.templateType]
   * @description
   * Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.
   * @returns {Promise<Collection>} A collection that will yield {@link SmsTemplate} instances.
   */
  listSmsTemplates(queryParameters) {
    let url = `${this.baseUrl}/api/v1/templates/sms`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.SmsTemplate),
    );
  }

  /**
   *
   * @param {SmsTemplate} smsTemplate
   * @description
   * Adds a new custom SMS template to your organization.
   * @returns {Promise<SmsTemplate>}
   */
  createSmsTemplate(smsTemplate) {
    let url = `${this.baseUrl}/api/v1/templates/sms`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: smsTemplate
      },
      { resources }
    );
    return request.then(jsonRes => new models.SmsTemplate(jsonRes, this));
  }

  /**
   *
   * @param templateId {String}
   * @description
   * Removes an SMS template.
   */
  deleteSmsTemplate(templateId) {
    let url = `${this.baseUrl}/api/v1/templates/sms/${templateId}`;

    const resources = [
      `${this.baseUrl}/api/v1/templates/sms/${templateId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param templateId {String}
   * @description
   * Fetches a specific template by `id`
   * @returns {Promise<SmsTemplate>}
   */
  getSmsTemplate(templateId) {
    let url = `${this.baseUrl}/api/v1/templates/sms/${templateId}`;

    const resources = [
      `${this.baseUrl}/api/v1/templates/sms/${templateId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.SmsTemplate(jsonRes, this));
  }

  /**
   *
   * @param templateId {String}
   * @param {SmsTemplate} smsTemplate
   * @description
   * Updates only some of the SMS template properties:
   * @returns {Promise<SmsTemplate>}
   */
  partialUpdateSmsTemplate(templateId, smsTemplate) {
    let url = `${this.baseUrl}/api/v1/templates/sms/${templateId}`;

    const resources = [
      `${this.baseUrl}/api/v1/templates/sms/${templateId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: smsTemplate
      },
      { resources }
    );
    return request.then(jsonRes => new models.SmsTemplate(jsonRes, this));
  }

  /**
   *
   * @param templateId {String}
   * @param {SmsTemplate} smsTemplate
   * @description
   * Updates the SMS template.
   * @returns {Promise<SmsTemplate>}
   */
  updateSmsTemplate(templateId, smsTemplate) {
    let url = `${this.baseUrl}/api/v1/templates/sms/${templateId}`;

    const resources = [
      `${this.baseUrl}/api/v1/templates/sms/${templateId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: smsTemplate
      },
      { resources }
    );
    return request.then(jsonRes => new models.SmsTemplate(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link TrustedOrigin} instances.
   */
  listOrigins(queryParameters) {
    let url = `${this.baseUrl}/api/v1/trustedOrigins`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.TrustedOrigin),
    );
  }

  /**
   *
   * @param {TrustedOrigin} trustedOrigin
   * @description
   * Success
   * @returns {Promise<TrustedOrigin>}
   */
  createOrigin(trustedOrigin) {
    let url = `${this.baseUrl}/api/v1/trustedOrigins`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: trustedOrigin
      },
      { resources }
    );
    return request.then(jsonRes => new models.TrustedOrigin(jsonRes, this));
  }

  /**
   *
   * @param trustedOriginId {String}
   * @description
   * Success
   */
  deleteOrigin(trustedOriginId) {
    let url = `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}`;

    const resources = [
      `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param trustedOriginId {String}
   * @description
   * Success
   * @returns {Promise<TrustedOrigin>}
   */
  getOrigin(trustedOriginId) {
    let url = `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}`;

    const resources = [
      `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.TrustedOrigin(jsonRes, this));
  }

  /**
   *
   * @param trustedOriginId {String}
   * @param {TrustedOrigin} trustedOrigin
   * @description
   * Success
   * @returns {Promise<TrustedOrigin>}
   */
  updateOrigin(trustedOriginId, trustedOrigin) {
    let url = `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}`;

    const resources = [
      `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: trustedOrigin
      },
      { resources }
    );
    return request.then(jsonRes => new models.TrustedOrigin(jsonRes, this));
  }

  /**
   *
   * @param trustedOriginId {String}
   * @description
   * Success
   * @returns {Promise<TrustedOrigin>}
   */
  activateOrigin(trustedOriginId) {
    let url = `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.TrustedOrigin(jsonRes, this));
  }

  /**
   *
   * @param trustedOriginId {String}
   * @description
   * Success
   * @returns {Promise<TrustedOrigin>}
   */
  deactivateOrigin(trustedOriginId) {
    let url = `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/trustedOrigins/${trustedOriginId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.TrustedOrigin(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.search]
   * @param {String} [queryParams.sortBy]
   * @param {String} [queryParams.sortOrder]
   * @description
   * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
   * @returns {Promise<Collection>} A collection that will yield {@link User} instances.
   */
  listUsers(queryParameters) {
    let url = `${this.baseUrl}/api/v1/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.User),
    );
  }

  /**
   *
   * @param {CreateUserRequest} createUserRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @param {String} [queryParams.provider]
   * @param {String} [queryParams.nextLogin]
   * @description
   * Creates a new user in your Okta organization with or without credentials.
   * @returns {Promise<User>}
   */
  createUser(createUserRequest, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: createUserRequest
      },
      { resources }
    );
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param associatedUserId {String}
   * @param primaryRelationshipName {String}
   * @param primaryUserId {String}
   * @description
   * Convenience method for /api/v1/users/{associatedUserId}/linkedObjects/{primaryRelationshipName}/{primaryUserId}
   */
  setLinkedObjectForUser(associatedUserId, primaryRelationshipName, primaryUserId) {
    let url = `${this.baseUrl}/api/v1/users/${associatedUserId}/linkedObjects/${primaryRelationshipName}/${primaryUserId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${associatedUserId}/linkedObjects/${primaryRelationshipName}/${primaryUserId}`,
      `${this.baseUrl}/api/v1/users/${associatedUserId}/linkedObjects/${primaryRelationshipName}`,
      `${this.baseUrl}/api/v1/users/${associatedUserId}`
    ];

    const request = this.http.put(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
   */
  deactivateOrDeleteUser(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @description
   * Fetches a user from your Okta organization.
   * @returns {Promise<User>}
   */
  getUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {User} user
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.strict]
   * @description
   * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
   * @returns {Promise<User>}
   */
  partialUpdateUser(userId, user, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: user
      },
      { resources }
    );
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {User} user
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.strict]
   * @description
   * Update a user's profile and/or credentials using strict-update semantics.
   * @returns {Promise<User>}
   */
  updateUser(userId, user, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: user
      },
      { resources }
    );
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
   * @returns {Promise<Collection>} A collection that will yield {@link AppLink} instances.
   */
  listAppLinks(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/appLinks`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.AppLink),
    );
  }

  /**
   *
   * @param userId {String}
   * @description
   * Lists all client resources for which the specified user has grants or tokens.
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Client} instances.
   */
  listUserClients(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/clients`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2Client),
    );
  }

  /**
   *
   * @param userId {String}
   * @param clientId {String}
   * @description
   * Revokes all grants for the specified user and client
   */
  revokeGrantsForUserAndClient(userId, clientId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}/grants`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param clientId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Lists all grants for a specified user and client
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2ScopeConsentGrant} instances.
   */
  listGrantsForUserAndClient(userId, clientId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}/grants`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2ScopeConsentGrant),
    );
  }

  /**
   *
   * @param userId {String}
   * @param clientId {String}
   * @description
   * Revokes all refresh tokens issued for the specified User and Client.
   */
  revokeTokensForUserAndClient(userId, clientId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}/tokens`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param clientId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Lists all refresh tokens issued for the specified User and Client.
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2RefreshToken} instances.
   */
  listRefreshTokensForUserAndClient(userId, clientId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}/tokens`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2RefreshToken),
    );
  }

  /**
   *
   * @param userId {String}
   * @param clientId {String}
   * @param tokenId {String}
   * @description
   * Revokes the specified refresh token.
   */
  revokeTokenForUserAndClient(userId, clientId, tokenId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}/tokens/${tokenId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}/tokens/${tokenId}`,
      `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param clientId {String}
   * @param tokenId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.after]
   * @description
   * Gets a refresh token issued for the specified User and Client.
   * @returns {Promise<OAuth2RefreshToken>}
   */
  getRefreshTokenForUserAndClient(userId, clientId, tokenId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}/tokens/${tokenId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}/tokens/${tokenId}`,
      `${this.baseUrl}/api/v1/users/${userId}/clients/${clientId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2RefreshToken(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {ChangePasswordRequest} changePasswordRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.strict]
   * @description
   * Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
   * @returns {Promise<UserCredentials>}
   */
  changePassword(userId, changePasswordRequest, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/change_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: changePasswordRequest
      },
      { resources }
    );
    return request.then(jsonRes => new models.UserCredentials(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {UserCredentials} userCredentials
   * @description
   * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
   * @returns {Promise<UserCredentials>}
   */
  changeRecoveryQuestion(userId, userCredentials) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/change_recovery_question`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: userCredentials
      },
      { resources }
    );
    return request.then(jsonRes => new models.UserCredentials(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Generates a one-time token (OTT) that can be used to reset a user's password
   * @returns {Promise<ForgotPasswordResponse>}
   */
  forgotPasswordGenerateOneTimeToken(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/forgot_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.ForgotPasswordResponse(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {UserCredentials} userCredentials
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Sets a new password for a user by validating the user's answer to their current recovery question
   * @returns {Promise<ForgotPasswordResponse>}
   */
  forgotPasswordSetNewPassword(userId, userCredentials, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/forgot_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: userCredentials
      },
      { resources }
    );
    return request.then(jsonRes => new models.ForgotPasswordResponse(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all the enrolled factors for the specified user
   * @returns {Promise<Collection>} A collection that will yield {@link UserFactor} instances.
   */
  listFactors(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors`;

    return new Collection(
      this,
      url,
      new factories.UserFactor(),
    );
  }

  /**
   *
   * @param userId {String}
   * @param {UserFactor} userFactor
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.updatePhone]
   * @param {String} [queryParams.templateId]
   * @param {String} [queryParams.tokenLifetimeSeconds]
   * @param {String} [queryParams.activate]
   * @description
   * Enrolls a user with a supported factor.
   * @returns {Promise<UserFactor>}
   */
  enrollFactor(userId, userFactor, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: userFactor
      },
      { resources }
    );
    return request.then(jsonRes => new factories.UserFactor().createInstance(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all the supported factors that can be enrolled for the specified user
   * @returns {Promise<Collection>} A collection that will yield {@link UserFactor} instances.
   */
  listSupportedFactors(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/catalog`;

    return new Collection(
      this,
      url,
      new factories.UserFactor(),
    );
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all available security questions for a user's `question` factor
   * @returns {Promise<Collection>} A collection that will yield {@link SecurityQuestion} instances.
   */
  listSupportedSecurityQuestions(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/questions`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.SecurityQuestion),
    );
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @description
   * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
   */
  deleteFactor(userId, factorId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @description
   * Fetches a factor for the specified user
   * @returns {Promise<UserFactor>}
   */
  getFactor(userId, factorId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new factories.UserFactor().createInstance(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {ActivateFactorRequest} activateFactorRequest
   * @description
   * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
   * @returns {Promise<UserFactor>}
   */
  activateFactor(userId, factorId, activateFactorRequest) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: activateFactorRequest
      },
      { resources }
    );
    return request.then(jsonRes => new factories.UserFactor().createInstance(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param transactionId {String}
   * @description
   * Polls factors verification transaction for status.
   * @returns {Promise<VerifyUserFactorResponse>}
   */
  getFactorTransactionStatus(userId, factorId, transactionId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}/transactions/${transactionId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}/transactions/${transactionId}`,
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.VerifyUserFactorResponse(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {VerifyFactorRequest} verifyFactorRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.templateId]
   * @param {String} [queryParams.tokenLifetimeSeconds]
   * @description
   * Verifies an OTP for a `token` or `token:hardware` factor
   * @returns {Promise<VerifyUserFactorResponse>}
   */
  verifyFactor(userId, factorId, verifyFactorRequest, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}/verify`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: verifyFactorRequest
      },
      { resources }
    );
    return request.then(jsonRes => new models.VerifyUserFactorResponse(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Revokes all grants for a specified user
   */
  revokeUserGrants(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/grants`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.scopeId]
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Lists all grants for the specified user
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2ScopeConsentGrant} instances.
   */
  listUserGrants(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/grants`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.OAuth2ScopeConsentGrant),
    );
  }

  /**
   *
   * @param userId {String}
   * @param grantId {String}
   * @description
   * Revokes one grant for a specified user
   */
  revokeUserGrant(userId, grantId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/grants/${grantId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/grants/${grantId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param grantId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Gets a grant for the specified user
   * @returns {Promise<OAuth2ScopeConsentGrant>}
   */
  getUserGrant(userId, grantId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/grants/${grantId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/grants/${grantId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.OAuth2ScopeConsentGrant(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Fetches the groups of which the user is a member.
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
   */
  listUserGroups(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/groups`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.Group),
    );
  }

  /**
   *
   * @param userId {String}
   * @description
   * Lists the IdPs associated with the user.
   * @returns {Promise<Collection>} A collection that will yield {@link IdentityProvider} instances.
   */
  listUserIdentityProviders(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/idps`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.IdentityProvider),
    );
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
   * @returns {Promise<UserActivationToken>}
   */
  activateUser(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/activate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.UserActivationToken(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Deactivates a user.  This operation can only be performed on users that do not have a `DEPROVISIONED` status.  Deactivation of a user is an asynchronous operation.  The user will have the `transitioningToStatus` property with a value of `DEPROVISIONED` during deactivation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `DEPROVISIONED` when the deactivation process is complete.
   */
  deactivateUser(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/deactivate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @description
   * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
   * @returns {Promise<User>}
   */
  expirePassword(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/expire_password?tempPassword&#x3D;false`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * This operation transitions the user to the status of `PASSWORD_EXPIRED` and the user's password is reset to a temporary password that is returned.
   * @returns {Promise<TempPassword>}
   */
  expirePasswordAndGetTemporaryPassword(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/expire_password?tempPassword&#x3D;true`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.TempPassword(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
   * @returns {Promise<UserActivationToken>}
   */
  reactivateUser(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/reactivate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.UserActivationToken(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
   */
  resetFactors(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/reset_factors`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
   * @returns {Promise<ResetPasswordToken>}
   */
  resetPassword(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/reset_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.ResetPasswordToken(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
   */
  suspendUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/suspend`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @description
   * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
   */
  unlockUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/unlock`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @description
   * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
   */
  unsuspendUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/unsuspend`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param relationshipName {String}
   * @description
   * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
   */
  removeLinkedObjectForUser(userId, relationshipName) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/linkedObjects/${relationshipName}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/linkedObjects/${relationshipName}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param relationshipName {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Get linked objects for a user, relationshipName can be a primary or associated relationship name
   * @returns {Promise<Collection>} A collection that will yield {@link ResponseLinks} instances.
   */
  getLinkedObjectsForUser(userId, relationshipName, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/linkedObjects/${relationshipName}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.ResponseLinks),
    );
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all roles assigned to a user.
   * @returns {Promise<Collection>} A collection that will yield {@link Role} instances.
   */
  listAssignedRolesForUser(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.Role),
    );
  }

  /**
   *
   * @param userId {String}
   * @param {AssignRoleRequest} assignRoleRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.disableNotifications]
   * @description
   * Assigns a role to a user.
   * @returns {Promise<Role>}
   */
  assignRoleToUser(userId, assignRoleRequest, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: assignRoleRequest
      },
      { resources }
    );
    return request.then(jsonRes => new models.Role(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @description
   * Unassigns a role from a user.
   */
  removeRoleFromUser(userId, roleId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
   * @returns {Promise<Collection>} A collection that will yield {@link CatalogApplication} instances.
   */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId, roleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.CatalogApplication),
    );
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @description
   * Success
   */
  addAllAppsAsTargetToRole(userId, roleId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.put(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param appName {String}
   * @description
   * Success
   */
  removeApplicationTargetFromApplicationAdministratorRoleForUser(userId, roleId, appName) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param appName {String}
   * @description
   * Success
   */
  addApplicationTargetToAdminRoleForUser(userId, roleId, appName) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.put(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param appName {String}
   * @param applicationId {String}
   * @description
   * Remove App Instance Target to App Administrator Role given to a User
   */
  removeApplicationTargetFromAdministratorRoleForUser(userId, roleId, appName, applicationId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}/${applicationId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}/${applicationId}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param appName {String}
   * @param applicationId {String}
   * @description
   * Add App Instance Target to App Administrator Role given to a User
   */
  addApplicationTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}/${applicationId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}/${applicationId}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/catalog/apps/${appName}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.put(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
   */
  listGroupTargetsForRole(userId, roleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.Group),
    );
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
   * Success
   */
  removeGroupTargetFromRole(userId, roleId, groupId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
   * Success
   */
  addGroupTargetToRole(userId, roleId, groupId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.put(
      url,
      {
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json',
        },
      },
      { resources }
    );
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.oauthTokens]
   * @description
   * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
   */
  clearUserSessions(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/sessions`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(
      url,
      null,
      { resources }
    );
    return request;
  }

}

module.exports = GeneratedApiClient;
