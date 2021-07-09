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
    if (!application) {
      return Promise.reject(new Error('OKTA API createApplication parameter application is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API deleteApplication parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API getApplication parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API updateApplication parameter appId is required.'));
    }
    if (!application) {
      return Promise.reject(new Error('OKTA API updateApplication parameter application is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API listCsrsForApplication parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API generateCsrForApplication parameter appId is required.'));
    }
    if (!csrMetadata) {
      return Promise.reject(new Error('OKTA API generateCsrForApplication parameter csrMetadata is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API revokeCsrFromApplication parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API revokeCsrFromApplication parameter csrId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API getCsrForApplication parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API getCsrForApplication parameter csrId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishCerCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishCerCert parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishCerCert parameter certificate is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCert parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCert parameter certificate is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishDerCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishDerCert parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishDerCert parameter certificate is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCert parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCert parameter certificate is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCert parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCert parameter certificate is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API listApplicationKeys parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API generateApplicationKey parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API getApplicationKey parameter appId is required.'));
    }
    if (!keyId) {
      return Promise.reject(new Error('OKTA API getApplicationKey parameter keyId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API cloneApplicationKey parameter appId is required.'));
    }
    if (!keyId) {
      return Promise.reject(new Error('OKTA API cloneApplicationKey parameter keyId is required.'));
    }
    if (!queryParameters) {
      return Promise.reject(new Error('OKTA API cloneApplicationKey parameter queryParameters is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API listScopeConsentGrants parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API grantConsentToScope parameter appId is required.'));
    }
    if (!oAuth2ScopeConsentGrant) {
      return Promise.reject(new Error('OKTA API grantConsentToScope parameter oAuth2ScopeConsentGrant is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API revokeScopeConsentGrant parameter appId is required.'));
    }
    if (!grantId) {
      return Promise.reject(new Error('OKTA API revokeScopeConsentGrant parameter grantId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API getScopeConsentGrant parameter appId is required.'));
    }
    if (!grantId) {
      return Promise.reject(new Error('OKTA API getScopeConsentGrant parameter grantId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API listApplicationGroupAssignments parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API deleteApplicationGroupAssignment parameter appId is required.'));
    }
    if (!groupId) {
      return Promise.reject(new Error('OKTA API deleteApplicationGroupAssignment parameter groupId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API getApplicationGroupAssignment parameter appId is required.'));
    }
    if (!groupId) {
      return Promise.reject(new Error('OKTA API getApplicationGroupAssignment parameter groupId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API createApplicationGroupAssignment parameter appId is required.'));
    }
    if (!groupId) {
      return Promise.reject(new Error('OKTA API createApplicationGroupAssignment parameter groupId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API activateApplication parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API deactivateApplication parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API revokeOAuth2TokensForApplication parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API listOAuth2TokensForApplication parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API revokeOAuth2TokenForApplication parameter appId is required.'));
    }
    if (!tokenId) {
      return Promise.reject(new Error('OKTA API revokeOAuth2TokenForApplication parameter tokenId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API getOAuth2TokenForApplication parameter appId is required.'));
    }
    if (!tokenId) {
      return Promise.reject(new Error('OKTA API getOAuth2TokenForApplication parameter tokenId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API listApplicationUsers parameter appId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API assignUserToApplication parameter appId is required.'));
    }
    if (!appUser) {
      return Promise.reject(new Error('OKTA API assignUserToApplication parameter appUser is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API deleteApplicationUser parameter appId is required.'));
    }
    if (!userId) {
      return Promise.reject(new Error('OKTA API deleteApplicationUser parameter userId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API getApplicationUser parameter appId is required.'));
    }
    if (!userId) {
      return Promise.reject(new Error('OKTA API getApplicationUser parameter userId is required.'));
    }
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
    if (!appId) {
      return Promise.reject(new Error('OKTA API updateApplicationUser parameter appId is required.'));
    }
    if (!userId) {
      return Promise.reject(new Error('OKTA API updateApplicationUser parameter userId is required.'));
    }
    if (!appUser) {
      return Promise.reject(new Error('OKTA API updateApplicationUser parameter appUser is required.'));
    }
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
    if (!authorizationServer) {
      return Promise.reject(new Error('OKTA API createAuthorizationServer parameter authorizationServer is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API deleteAuthorizationServer parameter authServerId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API getAuthorizationServer parameter authServerId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServer parameter authServerId is required.'));
    }
    if (!authorizationServer) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServer parameter authorizationServer is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listOAuth2Claims parameter authServerId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API createOAuth2Claim parameter authServerId is required.'));
    }
    if (!oAuth2Claim) {
      return Promise.reject(new Error('OKTA API createOAuth2Claim parameter oAuth2Claim is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API deleteOAuth2Claim parameter authServerId is required.'));
    }
    if (!claimId) {
      return Promise.reject(new Error('OKTA API deleteOAuth2Claim parameter claimId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API getOAuth2Claim parameter authServerId is required.'));
    }
    if (!claimId) {
      return Promise.reject(new Error('OKTA API getOAuth2Claim parameter claimId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API updateOAuth2Claim parameter authServerId is required.'));
    }
    if (!claimId) {
      return Promise.reject(new Error('OKTA API updateOAuth2Claim parameter claimId is required.'));
    }
    if (!oAuth2Claim) {
      return Promise.reject(new Error('OKTA API updateOAuth2Claim parameter oAuth2Claim is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listOAuth2ClientsForAuthorizationServer parameter authServerId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API revokeRefreshTokensForAuthorizationServerAndClient parameter authServerId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API revokeRefreshTokensForAuthorizationServerAndClient parameter clientId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listRefreshTokensForAuthorizationServerAndClient parameter authServerId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API listRefreshTokensForAuthorizationServerAndClient parameter clientId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API revokeRefreshTokenForAuthorizationServerAndClient parameter authServerId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API revokeRefreshTokenForAuthorizationServerAndClient parameter clientId is required.'));
    }
    if (!tokenId) {
      return Promise.reject(new Error('OKTA API revokeRefreshTokenForAuthorizationServerAndClient parameter tokenId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API getRefreshTokenForAuthorizationServerAndClient parameter authServerId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API getRefreshTokenForAuthorizationServerAndClient parameter clientId is required.'));
    }
    if (!tokenId) {
      return Promise.reject(new Error('OKTA API getRefreshTokenForAuthorizationServerAndClient parameter tokenId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listAuthorizationServerKeys parameter authServerId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API rotateAuthorizationServerKeys parameter authServerId is required.'));
    }
    if (!jwkUse) {
      return Promise.reject(new Error('OKTA API rotateAuthorizationServerKeys parameter jwkUse is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API activateAuthorizationServer parameter authServerId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API deactivateAuthorizationServer parameter authServerId is required.'));
    }
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
   * @returns {Promise<Collection>} A collection that will yield {@link AuthorizationServerPolicy} instances.
   */
  listAuthorizationServerPolicies(authServerId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listAuthorizationServerPolicies parameter authServerId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.AuthorizationServerPolicy),
    );
  }

  /**
   *
   * @param authServerId {String}
   * @param {AuthorizationServerPolicy} authorizationServerPolicy
   * @description
   * Success
   * @returns {Promise<AuthorizationServerPolicy>}
   */
  createAuthorizationServerPolicy(authServerId, authorizationServerPolicy) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicy parameter authServerId is required.'));
    }
    if (!authorizationServerPolicy) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicy parameter authorizationServerPolicy is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: authorizationServerPolicy
      },
      { resources }
    );
    return request.then(jsonRes => new models.AuthorizationServerPolicy(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param policyId {String}
   * @description
   * Success
   */
  deleteAuthorizationServerPolicy(authServerId, policyId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API deleteAuthorizationServerPolicy parameter authServerId is required.'));
    }
    if (!policyId) {
      return Promise.reject(new Error('OKTA API deleteAuthorizationServerPolicy parameter policyId is required.'));
    }
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
   * @returns {Promise<AuthorizationServerPolicy>}
   */
  getAuthorizationServerPolicy(authServerId, policyId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API getAuthorizationServerPolicy parameter authServerId is required.'));
    }
    if (!policyId) {
      return Promise.reject(new Error('OKTA API getAuthorizationServerPolicy parameter policyId is required.'));
    }
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
    return request.then(jsonRes => new models.AuthorizationServerPolicy(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param policyId {String}
   * @param {AuthorizationServerPolicy} authorizationServerPolicy
   * @description
   * Success
   * @returns {Promise<AuthorizationServerPolicy>}
   */
  updateAuthorizationServerPolicy(authServerId, policyId, authorizationServerPolicy) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicy parameter authServerId is required.'));
    }
    if (!policyId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicy parameter policyId is required.'));
    }
    if (!authorizationServerPolicy) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicy parameter authorizationServerPolicy is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: authorizationServerPolicy
      },
      { resources }
    );
    return request.then(jsonRes => new models.AuthorizationServerPolicy(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param policyId {String}
   * @description
   * Activate Authorization Server Policy
   */
  activateAuthorizationServerPolicy(authServerId, policyId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API activateAuthorizationServerPolicy parameter authServerId is required.'));
    }
    if (!policyId) {
      return Promise.reject(new Error('OKTA API activateAuthorizationServerPolicy parameter policyId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
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
   * @param policyId {String}
   * @description
   * Deactivate Authorization Server Policy
   */
  deactivateAuthorizationServerPolicy(authServerId, policyId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API deactivateAuthorizationServerPolicy parameter authServerId is required.'));
    }
    if (!policyId) {
      return Promise.reject(new Error('OKTA API deactivateAuthorizationServerPolicy parameter policyId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
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
   * @param policyId {String}
   * @param authServerId {String}
   * @description
   * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
   * @returns {Promise<Collection>} A collection that will yield {@link AuthorizationServerPolicyRule} instances.
   */
  listAuthorizationServerPolicyRules(policyId, authServerId) {
    if (!policyId) {
      return Promise.reject(new Error('OKTA API listAuthorizationServerPolicyRules parameter policyId is required.'));
    }
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listAuthorizationServerPolicyRules parameter authServerId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules`;

    return new Collection(
      this,
      url,
      new ModelFactory(models.AuthorizationServerPolicyRule),
    );
  }

  /**
   *
   * @param policyId {String}
   * @param authServerId {String}
   * @param {AuthorizationServerPolicyRule} authorizationServerPolicyRule
   * @description
   * Creates a policy rule for the specified Custom Authorization Server and Policy.
   * @returns {Promise<AuthorizationServerPolicyRule>}
   */
  createAuthorizationServerPolicyRule(policyId, authServerId, authorizationServerPolicyRule) {
    if (!policyId) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicyRule parameter policyId is required.'));
    }
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicyRule parameter authServerId is required.'));
    }
    if (!authorizationServerPolicyRule) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicyRule parameter authorizationServerPolicyRule is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: authorizationServerPolicyRule
      },
      { resources }
    );
    return request.then(jsonRes => new models.AuthorizationServerPolicyRule(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param authServerId {String}
   * @param ruleId {String}
   * @description
   * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.
   */
  deleteAuthorizationServerPolicyRule(policyId, authServerId, ruleId) {
    if (!policyId) {
      return Promise.reject(new Error('OKTA API deleteAuthorizationServerPolicyRule parameter policyId is required.'));
    }
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API deleteAuthorizationServerPolicyRule parameter authServerId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API deleteAuthorizationServerPolicyRule parameter ruleId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}`,
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
   * @param policyId {String}
   * @param authServerId {String}
   * @param ruleId {String}
   * @description
   * Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.
   * @returns {Promise<AuthorizationServerPolicyRule>}
   */
  getAuthorizationServerPolicyRule(policyId, authServerId, ruleId) {
    if (!policyId) {
      return Promise.reject(new Error('OKTA API getAuthorizationServerPolicyRule parameter policyId is required.'));
    }
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API getAuthorizationServerPolicyRule parameter authServerId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API getAuthorizationServerPolicyRule parameter ruleId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.AuthorizationServerPolicyRule(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param authServerId {String}
   * @param ruleId {String}
   * @param {AuthorizationServerPolicyRule} authorizationServerPolicyRule
   * @description
   * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
   * @returns {Promise<AuthorizationServerPolicyRule>}
   */
  updateAuthorizationServerPolicyRule(policyId, authServerId, ruleId, authorizationServerPolicyRule) {
    if (!policyId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicyRule parameter policyId is required.'));
    }
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicyRule parameter authServerId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicyRule parameter ruleId is required.'));
    }
    if (!authorizationServerPolicyRule) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicyRule parameter authorizationServerPolicyRule is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: authorizationServerPolicyRule
      },
      { resources }
    );
    return request.then(jsonRes => new models.AuthorizationServerPolicyRule(jsonRes, this));
  }

  /**
   *
   * @param authServerId {String}
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Activate Authorization Server Policy Rule
   */
  activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API activateAuthorizationServerPolicyRule parameter authServerId is required.'));
    }
    if (!policyId) {
      return Promise.reject(new Error('OKTA API activateAuthorizationServerPolicyRule parameter policyId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API activateAuthorizationServerPolicyRule parameter ruleId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
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
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Deactivate Authorization Server Policy Rule
   */
  deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API deactivateAuthorizationServerPolicyRule parameter authServerId is required.'));
    }
    if (!policyId) {
      return Promise.reject(new Error('OKTA API deactivateAuthorizationServerPolicyRule parameter policyId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API deactivateAuthorizationServerPolicyRule parameter ruleId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/authorizationServers/${authServerId}/policies/${policyId}`,
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listOAuth2Scopes parameter authServerId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API createOAuth2Scope parameter authServerId is required.'));
    }
    if (!oAuth2Scope) {
      return Promise.reject(new Error('OKTA API createOAuth2Scope parameter oAuth2Scope is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API deleteOAuth2Scope parameter authServerId is required.'));
    }
    if (!scopeId) {
      return Promise.reject(new Error('OKTA API deleteOAuth2Scope parameter scopeId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API getOAuth2Scope parameter authServerId is required.'));
    }
    if (!scopeId) {
      return Promise.reject(new Error('OKTA API getOAuth2Scope parameter scopeId is required.'));
    }
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
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API updateOAuth2Scope parameter authServerId is required.'));
    }
    if (!scopeId) {
      return Promise.reject(new Error('OKTA API updateOAuth2Scope parameter scopeId is required.'));
    }
    if (!oAuth2Scope) {
      return Promise.reject(new Error('OKTA API updateOAuth2Scope parameter oAuth2Scope is required.'));
    }
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
    if (!eventHook) {
      return Promise.reject(new Error('OKTA API createEventHook parameter eventHook is required.'));
    }
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
    if (!eventHookId) {
      return Promise.reject(new Error('OKTA API deleteEventHook parameter eventHookId is required.'));
    }
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
    if (!eventHookId) {
      return Promise.reject(new Error('OKTA API getEventHook parameter eventHookId is required.'));
    }
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
    if (!eventHookId) {
      return Promise.reject(new Error('OKTA API updateEventHook parameter eventHookId is required.'));
    }
    if (!eventHook) {
      return Promise.reject(new Error('OKTA API updateEventHook parameter eventHook is required.'));
    }
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
    if (!eventHookId) {
      return Promise.reject(new Error('OKTA API activateEventHook parameter eventHookId is required.'));
    }
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
    if (!eventHookId) {
      return Promise.reject(new Error('OKTA API deactivateEventHook parameter eventHookId is required.'));
    }
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
    if (!eventHookId) {
      return Promise.reject(new Error('OKTA API verifyEventHook parameter eventHookId is required.'));
    }
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
    if (!featureId) {
      return Promise.reject(new Error('OKTA API getFeature parameter featureId is required.'));
    }
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
    if (!featureId) {
      return Promise.reject(new Error('OKTA API listFeatureDependencies parameter featureId is required.'));
    }
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
    if (!featureId) {
      return Promise.reject(new Error('OKTA API listFeatureDependents parameter featureId is required.'));
    }
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
    if (!featureId) {
      return Promise.reject(new Error('OKTA API updateFeatureLifecycle parameter featureId is required.'));
    }
    if (!lifecycle) {
      return Promise.reject(new Error('OKTA API updateFeatureLifecycle parameter lifecycle is required.'));
    }
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
   * @param {String} [queryParams.expand]
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
    if (!group) {
      return Promise.reject(new Error('OKTA API createGroup parameter group is required.'));
    }
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
    if (!groupRule) {
      return Promise.reject(new Error('OKTA API createGroupRule parameter groupRule is required.'));
    }
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
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API deleteGroupRule parameter ruleId is required.'));
    }
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
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API getGroupRule parameter ruleId is required.'));
    }
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
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API updateGroupRule parameter ruleId is required.'));
    }
    if (!groupRule) {
      return Promise.reject(new Error('OKTA API updateGroupRule parameter groupRule is required.'));
    }
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
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API activateGroupRule parameter ruleId is required.'));
    }
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
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API deactivateGroupRule parameter ruleId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API deleteGroup parameter groupId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API getGroup parameter groupId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API updateGroup parameter groupId is required.'));
    }
    if (!group) {
      return Promise.reject(new Error('OKTA API updateGroup parameter group is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listAssignedApplicationsForGroup parameter groupId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listGroupAssignedRoles parameter groupId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API assignRoleToGroup parameter groupId is required.'));
    }
    if (!assignRoleRequest) {
      return Promise.reject(new Error('OKTA API assignRoleToGroup parameter assignRoleRequest is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API removeRoleFromGroup parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API removeRoleFromGroup parameter roleId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API getRole parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API getRole parameter roleId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listApplicationTargetsForApplicationAdministratorRoleForGroup parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API listApplicationTargetsForApplicationAdministratorRoleForGroup parameter roleId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup parameter roleId is required.'));
    }
    if (!appName) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup parameter appName is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAdminRoleGivenToGroup parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAdminRoleGivenToGroup parameter roleId is required.'));
    }
    if (!appName) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAdminRoleGivenToGroup parameter appName is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromAdministratorRoleGivenToGroup parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromAdministratorRoleGivenToGroup parameter roleId is required.'));
    }
    if (!appName) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromAdministratorRoleGivenToGroup parameter appName is required.'));
    }
    if (!applicationId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromAdministratorRoleGivenToGroup parameter applicationId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API addApplicationInstanceTargetToAppAdminRoleGivenToGroup parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API addApplicationInstanceTargetToAppAdminRoleGivenToGroup parameter roleId is required.'));
    }
    if (!appName) {
      return Promise.reject(new Error('OKTA API addApplicationInstanceTargetToAppAdminRoleGivenToGroup parameter appName is required.'));
    }
    if (!applicationId) {
      return Promise.reject(new Error('OKTA API addApplicationInstanceTargetToAppAdminRoleGivenToGroup parameter applicationId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listGroupTargetsForGroupRole parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API listGroupTargetsForGroupRole parameter roleId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API removeGroupTargetFromGroupAdministratorRoleGivenToGroup parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API removeGroupTargetFromGroupAdministratorRoleGivenToGroup parameter roleId is required.'));
    }
    if (!targetGroupId) {
      return Promise.reject(new Error('OKTA API removeGroupTargetFromGroupAdministratorRoleGivenToGroup parameter targetGroupId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API addGroupTargetToGroupAdministratorRoleForGroup parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API addGroupTargetToGroupAdministratorRoleForGroup parameter roleId is required.'));
    }
    if (!targetGroupId) {
      return Promise.reject(new Error('OKTA API addGroupTargetToGroupAdministratorRoleForGroup parameter targetGroupId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listGroupUsers parameter groupId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API removeUserFromGroup parameter groupId is required.'));
    }
    if (!userId) {
      return Promise.reject(new Error('OKTA API removeUserFromGroup parameter userId is required.'));
    }
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
    if (!groupId) {
      return Promise.reject(new Error('OKTA API addUserToGroup parameter groupId is required.'));
    }
    if (!userId) {
      return Promise.reject(new Error('OKTA API addUserToGroup parameter userId is required.'));
    }
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
    if (!identityProvider) {
      return Promise.reject(new Error('OKTA API createIdentityProvider parameter identityProvider is required.'));
    }
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
    if (!jsonWebKey) {
      return Promise.reject(new Error('OKTA API createIdentityProviderKey parameter jsonWebKey is required.'));
    }
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
    if (!keyId) {
      return Promise.reject(new Error('OKTA API deleteIdentityProviderKey parameter keyId is required.'));
    }
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
    if (!keyId) {
      return Promise.reject(new Error('OKTA API getIdentityProviderKey parameter keyId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API deleteIdentityProvider parameter idpId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API getIdentityProvider parameter idpId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API updateIdentityProvider parameter idpId is required.'));
    }
    if (!identityProvider) {
      return Promise.reject(new Error('OKTA API updateIdentityProvider parameter identityProvider is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API listCsrsForIdentityProvider parameter idpId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API generateCsrForIdentityProvider parameter idpId is required.'));
    }
    if (!csrMetadata) {
      return Promise.reject(new Error('OKTA API generateCsrForIdentityProvider parameter csrMetadata is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API revokeCsrForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API revokeCsrForIdentityProvider parameter csrId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API getCsrForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API getCsrForIdentityProvider parameter csrId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishCerCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishCerCertForIdentityProvider parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishCerCertForIdentityProvider parameter certificate is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCertForIdentityProvider parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCertForIdentityProvider parameter certificate is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishDerCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishDerCertForIdentityProvider parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishDerCertForIdentityProvider parameter certificate is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCertForIdentityProvider parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCertForIdentityProvider parameter certificate is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCertForIdentityProvider parameter csrId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCertForIdentityProvider parameter certificate is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API listIdentityProviderSigningKeys parameter idpId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API generateIdentityProviderSigningKey parameter idpId is required.'));
    }
    if (!queryParameters) {
      return Promise.reject(new Error('OKTA API generateIdentityProviderSigningKey parameter queryParameters is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API getIdentityProviderSigningKey parameter idpId is required.'));
    }
    if (!keyId) {
      return Promise.reject(new Error('OKTA API getIdentityProviderSigningKey parameter keyId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API cloneIdentityProviderKey parameter idpId is required.'));
    }
    if (!keyId) {
      return Promise.reject(new Error('OKTA API cloneIdentityProviderKey parameter keyId is required.'));
    }
    if (!queryParameters) {
      return Promise.reject(new Error('OKTA API cloneIdentityProviderKey parameter queryParameters is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API activateIdentityProvider parameter idpId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API deactivateIdentityProvider parameter idpId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API listIdentityProviderApplicationUsers parameter idpId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API unlinkUserFromIdentityProvider parameter idpId is required.'));
    }
    if (!userId) {
      return Promise.reject(new Error('OKTA API unlinkUserFromIdentityProvider parameter userId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API getIdentityProviderApplicationUser parameter idpId is required.'));
    }
    if (!userId) {
      return Promise.reject(new Error('OKTA API getIdentityProviderApplicationUser parameter userId is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API linkUserToIdentityProvider parameter idpId is required.'));
    }
    if (!userId) {
      return Promise.reject(new Error('OKTA API linkUserToIdentityProvider parameter userId is required.'));
    }
    if (!userIdentityProviderLinkRequest) {
      return Promise.reject(new Error('OKTA API linkUserToIdentityProvider parameter userIdentityProviderLinkRequest is required.'));
    }
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
    if (!idpId) {
      return Promise.reject(new Error('OKTA API listSocialAuthTokens parameter idpId is required.'));
    }
    if (!userId) {
      return Promise.reject(new Error('OKTA API listSocialAuthTokens parameter userId is required.'));
    }
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
    if (!inlineHook) {
      return Promise.reject(new Error('OKTA API createInlineHook parameter inlineHook is required.'));
    }
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
    if (!inlineHookId) {
      return Promise.reject(new Error('OKTA API deleteInlineHook parameter inlineHookId is required.'));
    }
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
    if (!inlineHookId) {
      return Promise.reject(new Error('OKTA API getInlineHook parameter inlineHookId is required.'));
    }
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
    if (!inlineHookId) {
      return Promise.reject(new Error('OKTA API updateInlineHook parameter inlineHookId is required.'));
    }
    if (!inlineHook) {
      return Promise.reject(new Error('OKTA API updateInlineHook parameter inlineHook is required.'));
    }
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
    if (!inlineHookId) {
      return Promise.reject(new Error('OKTA API executeInlineHook parameter inlineHookId is required.'));
    }
    if (!inlineHookPayload) {
      return Promise.reject(new Error('OKTA API executeInlineHook parameter inlineHookPayload is required.'));
    }
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
    if (!inlineHookId) {
      return Promise.reject(new Error('OKTA API activateInlineHook parameter inlineHookId is required.'));
    }
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
    if (!inlineHookId) {
      return Promise.reject(new Error('OKTA API deactivateInlineHook parameter inlineHookId is required.'));
    }
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
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.sourceId]
   * @param {String} [queryParams.targetId]
   * @description
   * Enumerates Profile Mappings in your organization with pagination.
   * @returns {Promise<Collection>} A collection that will yield {@link ProfileMapping} instances.
   */
  listProfileMappings(queryParameters) {
    let url = `${this.baseUrl}/api/v1/mappings`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.ProfileMapping),
    );
  }

  /**
   *
   * @param mappingId {String}
   * @description
   * Fetches a single Profile Mapping referenced by its ID.
   * @returns {Promise<ProfileMapping>}
   */
  getProfileMapping(mappingId) {
    if (!mappingId) {
      return Promise.reject(new Error('OKTA API getProfileMapping parameter mappingId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/mappings/${mappingId}`;

    const resources = [
      `${this.baseUrl}/api/v1/mappings/${mappingId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.ProfileMapping(jsonRes, this));
  }

  /**
   *
   * @param mappingId {String}
   * @param {ProfileMapping} profileMapping
   * @description
   * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings.
   * @returns {Promise<ProfileMapping>}
   */
  updateProfileMapping(mappingId, profileMapping) {
    if (!mappingId) {
      return Promise.reject(new Error('OKTA API updateProfileMapping parameter mappingId is required.'));
    }
    if (!profileMapping) {
      return Promise.reject(new Error('OKTA API updateProfileMapping parameter profileMapping is required.'));
    }
    let url = `${this.baseUrl}/api/v1/mappings/${mappingId}`;

    const resources = [
      `${this.baseUrl}/api/v1/mappings/${mappingId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: profileMapping
      },
      { resources }
    );
    return request.then(jsonRes => new models.ProfileMapping(jsonRes, this));
  }

  /**
   *
   * @param appInstanceId {String}
   * @description
   * Fetches the Schema for an App User
   * @returns {Promise<UserSchema>}
   */
  getApplicationUserSchema(appInstanceId) {
    if (!appInstanceId) {
      return Promise.reject(new Error('OKTA API getApplicationUserSchema parameter appInstanceId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/meta/schemas/apps/${appInstanceId}/default`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/schemas/apps/${appInstanceId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.UserSchema(jsonRes, this));
  }

  /**
   *
   * @param appInstanceId {String}
   * @param {UserSchema} userSchema
   * @description
   * Partial updates on the User Profile properties of the Application User Schema.
   * @returns {Promise<UserSchema>}
   */
  updateApplicationUserProfile(appInstanceId, userSchema) {
    if (!appInstanceId) {
      return Promise.reject(new Error('OKTA API updateApplicationUserProfile parameter appInstanceId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/meta/schemas/apps/${appInstanceId}/default`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/schemas/apps/${appInstanceId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: userSchema
      },
      { resources }
    );
    return request.then(jsonRes => new models.UserSchema(jsonRes, this));
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
    if (!linkedObject) {
      return Promise.reject(new Error('OKTA API addLinkedObjectDefinition parameter linkedObject is required.'));
    }
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
    if (!linkedObjectName) {
      return Promise.reject(new Error('OKTA API deleteLinkedObjectDefinition parameter linkedObjectName is required.'));
    }
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
    if (!linkedObjectName) {
      return Promise.reject(new Error('OKTA API getLinkedObjectDefinition parameter linkedObjectName is required.'));
    }
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
   * @param schemaId {String}
   * @description
   * Fetches the schema for a Schema Id.
   * @returns {Promise<UserSchema>}
   */
  getUserSchema(schemaId) {
    if (!schemaId) {
      return Promise.reject(new Error('OKTA API getUserSchema parameter schemaId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/meta/schemas/user/${schemaId}`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/schemas/user/${schemaId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.UserSchema(jsonRes, this));
  }

  /**
   *
   * @param schemaId {String}
   * @param {UserSchema} userSchema
   * @description
   * Partial updates on the User Profile properties of the user schema.
   * @returns {Promise<UserSchema>}
   */
  updateUserProfile(schemaId, userSchema) {
    if (!schemaId) {
      return Promise.reject(new Error('OKTA API updateUserProfile parameter schemaId is required.'));
    }
    if (!userSchema) {
      return Promise.reject(new Error('OKTA API updateUserProfile parameter userSchema is required.'));
    }
    let url = `${this.baseUrl}/api/v1/meta/schemas/user/${schemaId}`;

    const resources = [
      `${this.baseUrl}/api/v1/meta/schemas/user/${schemaId}`
    ];

    const request = this.http.postJson(
      url,
      {
        body: userSchema
      },
      { resources }
    );
    return request.then(jsonRes => new models.UserSchema(jsonRes, this));
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
    if (!userType) {
      return Promise.reject(new Error('OKTA API createUserType parameter userType is required.'));
    }
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
    if (!typeId) {
      return Promise.reject(new Error('OKTA API deleteUserType parameter typeId is required.'));
    }
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
    if (!typeId) {
      return Promise.reject(new Error('OKTA API getUserType parameter typeId is required.'));
    }
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
    if (!typeId) {
      return Promise.reject(new Error('OKTA API updateUserType parameter typeId is required.'));
    }
    if (!userType) {
      return Promise.reject(new Error('OKTA API updateUserType parameter userType is required.'));
    }
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
    if (!typeId) {
      return Promise.reject(new Error('OKTA API replaceUserType parameter typeId is required.'));
    }
    if (!userType) {
      return Promise.reject(new Error('OKTA API replaceUserType parameter userType is required.'));
    }
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
   * @returns {Promise<Collection>} A collection that will yield {@link AuthorizationServerPolicy} instances.
   */
  listPolicies(queryParameters) {
    if (!queryParameters) {
      return Promise.reject(new Error('OKTA API listPolicies parameter queryParameters is required.'));
    }
    let url = `${this.baseUrl}/api/v1/policies`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.AuthorizationServerPolicy),
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
    if (!policy) {
      return Promise.reject(new Error('OKTA API createPolicy parameter policy is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API deletePolicy parameter policyId is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API getPolicy parameter policyId is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API updatePolicy parameter policyId is required.'));
    }
    if (!policy) {
      return Promise.reject(new Error('OKTA API updatePolicy parameter policy is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API activatePolicy parameter policyId is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API deactivatePolicy parameter policyId is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API listPolicyRules parameter policyId is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API createPolicyRule parameter policyId is required.'));
    }
    if (!policyRule) {
      return Promise.reject(new Error('OKTA API createPolicyRule parameter policyRule is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API deletePolicyRule parameter policyId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API deletePolicyRule parameter ruleId is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API getPolicyRule parameter policyId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API getPolicyRule parameter ruleId is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API updatePolicyRule parameter policyId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API updatePolicyRule parameter ruleId is required.'));
    }
    if (!policyRule) {
      return Promise.reject(new Error('OKTA API updatePolicyRule parameter policyRule is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API activatePolicyRule parameter policyId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API activatePolicyRule parameter ruleId is required.'));
    }
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
    if (!policyId) {
      return Promise.reject(new Error('OKTA API deactivatePolicyRule parameter policyId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API deactivatePolicyRule parameter ruleId is required.'));
    }
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
    if (!createSessionRequest) {
      return Promise.reject(new Error('OKTA API createSession parameter createSessionRequest is required.'));
    }
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
    if (!sessionId) {
      return Promise.reject(new Error('OKTA API endSession parameter sessionId is required.'));
    }
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
    if (!sessionId) {
      return Promise.reject(new Error('OKTA API getSession parameter sessionId is required.'));
    }
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
    if (!sessionId) {
      return Promise.reject(new Error('OKTA API refreshSession parameter sessionId is required.'));
    }
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
    if (!smsTemplate) {
      return Promise.reject(new Error('OKTA API createSmsTemplate parameter smsTemplate is required.'));
    }
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
    if (!templateId) {
      return Promise.reject(new Error('OKTA API deleteSmsTemplate parameter templateId is required.'));
    }
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
    if (!templateId) {
      return Promise.reject(new Error('OKTA API getSmsTemplate parameter templateId is required.'));
    }
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
    if (!templateId) {
      return Promise.reject(new Error('OKTA API partialUpdateSmsTemplate parameter templateId is required.'));
    }
    if (!smsTemplate) {
      return Promise.reject(new Error('OKTA API partialUpdateSmsTemplate parameter smsTemplate is required.'));
    }
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
    if (!templateId) {
      return Promise.reject(new Error('OKTA API updateSmsTemplate parameter templateId is required.'));
    }
    if (!smsTemplate) {
      return Promise.reject(new Error('OKTA API updateSmsTemplate parameter smsTemplate is required.'));
    }
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
   * @description
   * Gets current ThreatInsight configuration
   * @returns {Promise<ThreatInsightConfiguration>}
   */
  getCurrentConfiguration() {
    let url = `${this.baseUrl}/api/v1/threats/configuration`;

    const resources = [];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.ThreatInsightConfiguration(jsonRes, this));
  }

  /**
   *
   * @param {ThreatInsightConfiguration} threatInsightConfiguration
   * @description
   * Updates ThreatInsight configuration
   * @returns {Promise<ThreatInsightConfiguration>}
   */
  updateConfiguration(threatInsightConfiguration) {
    if (!threatInsightConfiguration) {
      return Promise.reject(new Error('OKTA API updateConfiguration parameter threatInsightConfiguration is required.'));
    }
    let url = `${this.baseUrl}/api/v1/threats/configuration`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: threatInsightConfiguration
      },
      { resources }
    );
    return request.then(jsonRes => new models.ThreatInsightConfiguration(jsonRes, this));
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
    if (!trustedOrigin) {
      return Promise.reject(new Error('OKTA API createOrigin parameter trustedOrigin is required.'));
    }
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
    if (!trustedOriginId) {
      return Promise.reject(new Error('OKTA API deleteOrigin parameter trustedOriginId is required.'));
    }
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
    if (!trustedOriginId) {
      return Promise.reject(new Error('OKTA API getOrigin parameter trustedOriginId is required.'));
    }
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
    if (!trustedOriginId) {
      return Promise.reject(new Error('OKTA API updateOrigin parameter trustedOriginId is required.'));
    }
    if (!trustedOrigin) {
      return Promise.reject(new Error('OKTA API updateOrigin parameter trustedOrigin is required.'));
    }
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
    if (!trustedOriginId) {
      return Promise.reject(new Error('OKTA API activateOrigin parameter trustedOriginId is required.'));
    }
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
    if (!trustedOriginId) {
      return Promise.reject(new Error('OKTA API deactivateOrigin parameter trustedOriginId is required.'));
    }
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
    if (!createUserRequest) {
      return Promise.reject(new Error('OKTA API createUser parameter createUserRequest is required.'));
    }
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
    if (!associatedUserId) {
      return Promise.reject(new Error('OKTA API setLinkedObjectForUser parameter associatedUserId is required.'));
    }
    if (!primaryRelationshipName) {
      return Promise.reject(new Error('OKTA API setLinkedObjectForUser parameter primaryRelationshipName is required.'));
    }
    if (!primaryUserId) {
      return Promise.reject(new Error('OKTA API setLinkedObjectForUser parameter primaryUserId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API deactivateOrDeleteUser parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API getUser parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API partialUpdateUser parameter userId is required.'));
    }
    if (!user) {
      return Promise.reject(new Error('OKTA API partialUpdateUser parameter user is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API updateUser parameter userId is required.'));
    }
    if (!user) {
      return Promise.reject(new Error('OKTA API updateUser parameter user is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listAppLinks parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listUserClients parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API revokeGrantsForUserAndClient parameter userId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API revokeGrantsForUserAndClient parameter clientId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listGrantsForUserAndClient parameter userId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API listGrantsForUserAndClient parameter clientId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API revokeTokensForUserAndClient parameter userId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API revokeTokensForUserAndClient parameter clientId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listRefreshTokensForUserAndClient parameter userId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API listRefreshTokensForUserAndClient parameter clientId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API revokeTokenForUserAndClient parameter userId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API revokeTokenForUserAndClient parameter clientId is required.'));
    }
    if (!tokenId) {
      return Promise.reject(new Error('OKTA API revokeTokenForUserAndClient parameter tokenId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API getRefreshTokenForUserAndClient parameter userId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API getRefreshTokenForUserAndClient parameter clientId is required.'));
    }
    if (!tokenId) {
      return Promise.reject(new Error('OKTA API getRefreshTokenForUserAndClient parameter tokenId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API changePassword parameter userId is required.'));
    }
    if (!changePasswordRequest) {
      return Promise.reject(new Error('OKTA API changePassword parameter changePasswordRequest is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API changeRecoveryQuestion parameter userId is required.'));
    }
    if (!userCredentials) {
      return Promise.reject(new Error('OKTA API changeRecoveryQuestion parameter userCredentials is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API forgotPasswordGenerateOneTimeToken parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API forgotPasswordSetNewPassword parameter userId is required.'));
    }
    if (!userCredentials) {
      return Promise.reject(new Error('OKTA API forgotPasswordSetNewPassword parameter userCredentials is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listFactors parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API enrollFactor parameter userId is required.'));
    }
    if (!userFactor) {
      return Promise.reject(new Error('OKTA API enrollFactor parameter userFactor is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listSupportedFactors parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listSupportedSecurityQuestions parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API deleteFactor parameter userId is required.'));
    }
    if (!factorId) {
      return Promise.reject(new Error('OKTA API deleteFactor parameter factorId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API getFactor parameter userId is required.'));
    }
    if (!factorId) {
      return Promise.reject(new Error('OKTA API getFactor parameter factorId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API activateFactor parameter userId is required.'));
    }
    if (!factorId) {
      return Promise.reject(new Error('OKTA API activateFactor parameter factorId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API getFactorTransactionStatus parameter userId is required.'));
    }
    if (!factorId) {
      return Promise.reject(new Error('OKTA API getFactorTransactionStatus parameter factorId is required.'));
    }
    if (!transactionId) {
      return Promise.reject(new Error('OKTA API getFactorTransactionStatus parameter transactionId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API verifyFactor parameter userId is required.'));
    }
    if (!factorId) {
      return Promise.reject(new Error('OKTA API verifyFactor parameter factorId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API revokeUserGrants parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listUserGrants parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API revokeUserGrant parameter userId is required.'));
    }
    if (!grantId) {
      return Promise.reject(new Error('OKTA API revokeUserGrant parameter grantId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API getUserGrant parameter userId is required.'));
    }
    if (!grantId) {
      return Promise.reject(new Error('OKTA API getUserGrant parameter grantId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listUserGroups parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listUserIdentityProviders parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API activateUser parameter userId is required.'));
    }
    if (!queryParameters) {
      return Promise.reject(new Error('OKTA API activateUser parameter queryParameters is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API deactivateUser parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API expirePassword parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/expire_password?tempPassword=false`;

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
    if (!userId) {
      return Promise.reject(new Error('OKTA API expirePasswordAndGetTemporaryPassword parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/expire_password?tempPassword=true`;

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
    if (!userId) {
      return Promise.reject(new Error('OKTA API reactivateUser parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API resetFactors parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API resetPassword parameter userId is required.'));
    }
    if (!queryParameters) {
      return Promise.reject(new Error('OKTA API resetPassword parameter queryParameters is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API suspendUser parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API unlockUser parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API unsuspendUser parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API removeLinkedObjectForUser parameter userId is required.'));
    }
    if (!relationshipName) {
      return Promise.reject(new Error('OKTA API removeLinkedObjectForUser parameter relationshipName is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API getLinkedObjectsForUser parameter userId is required.'));
    }
    if (!relationshipName) {
      return Promise.reject(new Error('OKTA API getLinkedObjectsForUser parameter relationshipName is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listAssignedRolesForUser parameter userId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API assignRoleToUser parameter userId is required.'));
    }
    if (!assignRoleRequest) {
      return Promise.reject(new Error('OKTA API assignRoleToUser parameter assignRoleRequest is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API removeRoleFromUser parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API removeRoleFromUser parameter roleId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listApplicationTargetsForApplicationAdministratorRoleForUser parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API listApplicationTargetsForApplicationAdministratorRoleForUser parameter roleId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API addAllAppsAsTargetToRole parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API addAllAppsAsTargetToRole parameter roleId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromApplicationAdministratorRoleForUser parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromApplicationAdministratorRoleForUser parameter roleId is required.'));
    }
    if (!appName) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromApplicationAdministratorRoleForUser parameter appName is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAdminRoleForUser parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAdminRoleForUser parameter roleId is required.'));
    }
    if (!appName) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAdminRoleForUser parameter appName is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromAdministratorRoleForUser parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromAdministratorRoleForUser parameter roleId is required.'));
    }
    if (!appName) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromAdministratorRoleForUser parameter appName is required.'));
    }
    if (!applicationId) {
      return Promise.reject(new Error('OKTA API removeApplicationTargetFromAdministratorRoleForUser parameter applicationId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAppAdminRoleForUser parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAppAdminRoleForUser parameter roleId is required.'));
    }
    if (!appName) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAppAdminRoleForUser parameter appName is required.'));
    }
    if (!applicationId) {
      return Promise.reject(new Error('OKTA API addApplicationTargetToAppAdminRoleForUser parameter applicationId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API listGroupTargetsForRole parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API listGroupTargetsForRole parameter roleId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API removeGroupTargetFromRole parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API removeGroupTargetFromRole parameter roleId is required.'));
    }
    if (!groupId) {
      return Promise.reject(new Error('OKTA API removeGroupTargetFromRole parameter groupId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API addGroupTargetToRole parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API addGroupTargetToRole parameter roleId is required.'));
    }
    if (!groupId) {
      return Promise.reject(new Error('OKTA API addGroupTargetToRole parameter groupId is required.'));
    }
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
    if (!userId) {
      return Promise.reject(new Error('OKTA API clearUserSessions parameter userId is required.'));
    }
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

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @description
   * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
   * @returns {Promise<Collection>} A collection that will yield {@link NetworkZone} instances.
   */
  listNetworkZones(queryParameters) {
    let url = `${this.baseUrl}/api/v1/zones`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this,
      url,
      new ModelFactory(models.NetworkZone),
    );
  }

  /**
   *
   * @param {NetworkZone} networkZone
   * @description
   * Adds a new network zone to your Okta organization.
   * @returns {Promise<NetworkZone>}
   */
  createNetworkZone(networkZone) {
    if (!networkZone) {
      return Promise.reject(new Error('OKTA API createNetworkZone parameter networkZone is required.'));
    }
    let url = `${this.baseUrl}/api/v1/zones`;

    const resources = [];

    const request = this.http.postJson(
      url,
      {
        body: networkZone
      },
      { resources }
    );
    return request.then(jsonRes => new models.NetworkZone(jsonRes, this));
  }

  /**
   *
   * @param zoneId {String}
   * @description
   * Removes network zone.
   */
  deleteNetworkZone(zoneId) {
    if (!zoneId) {
      return Promise.reject(new Error('OKTA API deleteNetworkZone parameter zoneId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/zones/${zoneId}`;

    const resources = [
      `${this.baseUrl}/api/v1/zones/${zoneId}`
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
   * @param zoneId {String}
   * @description
   * Fetches a network zone from your Okta organization by `id`.
   * @returns {Promise<NetworkZone>}
   */
  getNetworkZone(zoneId) {
    if (!zoneId) {
      return Promise.reject(new Error('OKTA API getNetworkZone parameter zoneId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/zones/${zoneId}`;

    const resources = [
      `${this.baseUrl}/api/v1/zones/${zoneId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.NetworkZone(jsonRes, this));
  }

  /**
   *
   * @param zoneId {String}
   * @param {NetworkZone} networkZone
   * @description
   * Updates a network zone in your organization.
   * @returns {Promise<NetworkZone>}
   */
  updateNetworkZone(zoneId, networkZone) {
    if (!zoneId) {
      return Promise.reject(new Error('OKTA API updateNetworkZone parameter zoneId is required.'));
    }
    if (!networkZone) {
      return Promise.reject(new Error('OKTA API updateNetworkZone parameter networkZone is required.'));
    }
    let url = `${this.baseUrl}/api/v1/zones/${zoneId}`;

    const resources = [
      `${this.baseUrl}/api/v1/zones/${zoneId}`
    ];

    const request = this.http.putJson(
      url,
      {
        body: networkZone
      },
      { resources }
    );
    return request.then(jsonRes => new models.NetworkZone(jsonRes, this));
  }

  /**
   *
   * @param zoneId {String}
   * @description
   * Activate Network Zone
   */
  activateNetworkZone(zoneId) {
    if (!zoneId) {
      return Promise.reject(new Error('OKTA API activateNetworkZone parameter zoneId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/zones/${zoneId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/zones/${zoneId}`
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
   * @param zoneId {String}
   * @description
   * Deactivates a network zone.
   */
  deactivateNetworkZone(zoneId) {
    if (!zoneId) {
      return Promise.reject(new Error('OKTA API deactivateNetworkZone parameter zoneId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/zones/${zoneId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/zones/${zoneId}`
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

}

module.exports = GeneratedApiClient;
