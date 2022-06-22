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

const { Collection } = require('./collection');
const models = require('./models');
const factories = require('./factories');
const { ModelFactory } = require('./model-factory');

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
   * @returns {Collection} A collection that will yield {@link Application} instances.
   */
  listApplications(queryParameters) {
    let q;
    let after;
    let limit;
    let filter;
    let expand;
    let includeNonDeleted;
    if (queryParameters) {
      q = queryParameters.q;
      after = queryParameters.after;
      limit = queryParameters.limit;
      filter = queryParameters.filter;
      expand = queryParameters.expand;
      includeNonDeleted = queryParameters.includeNonDeleted;
    }
    return this.applicationApi.listApplications(q, after, limit, filter, expand, includeNonDeleted);
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
    let activate;
    if (queryParameters) {
      activate = queryParameters.activate;
    }
    return this.applicationApi.createApplication(application, activate);
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
    return this.applicationApi.deleteApplication(appId);
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
    let expand;
    if (queryParameters) {
      expand = queryParameters.expand;
    }
    return this.applicationApi.getApplication(appId, expand);
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
    return this.applicationApi.updateApplication(appId, application);
  }

  /**
   *
   * @param appId {String}
   * @description
   * Get default Provisioning Connection for application
   * @returns {Promise<ProvisioningConnection>}
   */
  getDefaultProvisioningConnectionForApplication(appId) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API getDefaultProvisioningConnectionForApplication parameter appId is required.'));
    }
    return this.applicationApi.getDefaultProvisioningConnectionForApplication(appId);
  }

  /**
   *
   * @param appId {String}
   * @param {ProvisioningConnectionRequest} provisioningConnectionRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
   * Set default Provisioning Connection for application
   * @returns {Promise<ProvisioningConnection>}
   */
  setDefaultProvisioningConnectionForApplication(appId, provisioningConnectionRequest, queryParameters) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API setDefaultProvisioningConnectionForApplication parameter appId is required.'));
    }
    if (!provisioningConnectionRequest) {
      return Promise.reject(new Error('OKTA API setDefaultProvisioningConnectionForApplication parameter provisioningConnectionRequest is required.'));
    }
    let activate;
    if (queryParameters) {
      activate = queryParameters.activate;
    }
    return this.applicationApi.setDefaultProvisioningConnectionForApplication(appId, provisioningConnectionRequest, activate);
  }

  /**
   *
   * @param appId {String}
   * @description
   * Activates the default Provisioning Connection for an application.
   */
  activateDefaultProvisioningConnectionForApplication(appId) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API activateDefaultProvisioningConnectionForApplication parameter appId is required.'));
    }
    return this.applicationApi.activateDefaultProvisioningConnectionForApplication(appId);
  }

  /**
   *
   * @param appId {String}
   * @description
   * Deactivates the default Provisioning Connection for an application.
   */
  deactivateDefaultProvisioningConnectionForApplication(appId) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API deactivateDefaultProvisioningConnectionForApplication parameter appId is required.'));
    }
    return this.applicationApi.deactivateDefaultProvisioningConnectionForApplication(appId);
  }

  /**
   *
   * @param appId {String}
   * @description
   * Enumerates Certificate Signing Requests for an application
   * @returns {Collection} A collection that will yield {@link Csr} instances.
   */
  listCsrsForApplication(appId) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API listCsrsForApplication parameter appId is required.'));
    }
    return this.applicationApi.listCsrsForApplication(appId);
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
    return this.applicationApi.generateCsrForApplication(appId, csrMetadata);
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
    return this.applicationApi.revokeCsrFromApplication(appId, csrId);
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
    return this.applicationApi.getCsrForApplication(appId, csrId);
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
   * @returns {Collection} A collection that will yield {@link JsonWebKey} instances.
   */
  listApplicationKeys(appId) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API listApplicationKeys parameter appId is required.'));
    }
    return this.applicationApi.listApplicationKeys(appId);
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
    let validityYears;
    if (queryParameters) {
      validityYears = queryParameters.validityYears;
    }
    return this.applicationApi.generateApplicationKey(appId, validityYears);
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
    return this.applicationApi.getApplicationKey(appId, keyId);
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
    let targetAid;
    if (queryParameters) {
      targetAid = queryParameters.targetAid;
    }
    return this.applicationApi.cloneApplicationKey(appId, keyId, targetAid);
  }

  /**
   *
   * @param appId {String}
   * @description
   * List Features for application
   * @returns {Collection} A collection that will yield {@link ApplicationFeature} instances.
   */
  listFeaturesForApplication(appId) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API listFeaturesForApplication parameter appId is required.'));
    }
    return this.applicationApi.listFeaturesForApplication(appId);
  }

  /**
   *
   * @param appId {String}
   * @param name {String}
   * @description
   * Fetches a Feature object for an application.
   * @returns {Promise<ApplicationFeature>}
   */
  getFeatureForApplication(appId, name) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API getFeatureForApplication parameter appId is required.'));
    }
    if (!name) {
      return Promise.reject(new Error('OKTA API getFeatureForApplication parameter name is required.'));
    }
    return this.applicationApi.getFeatureForApplication(appId, name);
  }

  /**
   *
   * @param appId {String}
   * @param name {String}
   * @param {CapabilitiesObject} capabilitiesObject
   * @description
   * Updates a Feature object for an application.
   * @returns {Promise<ApplicationFeature>}
   */
  updateFeatureForApplication(appId, name, capabilitiesObject) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API updateFeatureForApplication parameter appId is required.'));
    }
    if (!name) {
      return Promise.reject(new Error('OKTA API updateFeatureForApplication parameter name is required.'));
    }
    if (!capabilitiesObject) {
      return Promise.reject(new Error('OKTA API updateFeatureForApplication parameter capabilitiesObject is required.'));
    }
    return this.applicationApi.updateFeatureForApplication(appId, name, capabilitiesObject);
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all scope consent grants for the application
   * @returns {Collection} A collection that will yield {@link OAuth2ScopeConsentGrant} instances.
   */
  listScopeConsentGrants(appId, queryParameters) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API listScopeConsentGrants parameter appId is required.'));
    }
    let expand;
    if (queryParameters) {
      expand = queryParameters.expand;
    }
    return this.applicationApi.listScopeConsentGrants(appId, expand);
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
    return this.applicationApi.grantConsentToScope(appId, oAuth2ScopeConsentGrant);
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
    return this.applicationApi.revokeScopeConsentGrant(appId, grantId);
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
    let expand;
    if (queryParameters) {
      expand = queryParameters.expand;
    }
    return this.applicationApi.getScopeConsentGrant(appId, grantId, expand);
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
   * @returns {Collection} A collection that will yield {@link ApplicationGroupAssignment} instances.
   */
  listApplicationGroupAssignments(appId, queryParameters) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API listApplicationGroupAssignments parameter appId is required.'));
    }
    let q;
    let after;
    let limit;
    let expand;
    if (queryParameters) {
      q = queryParameters.q;
      after = queryParameters.after;
      limit = queryParameters.limit;
      expand = queryParameters.expand;
    }
    return this.applicationApi.listApplicationGroupAssignments(appId, q, after, limit, expand);
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
    return this.applicationApi.deleteApplicationGroupAssignment(appId, groupId);
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
    let expand;
    if (queryParameters) {
      expand = queryParameters.expand;
    }
    return this.applicationApi.getApplicationGroupAssignment(appId, groupId, expand);
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
    return this.applicationApi.createApplicationGroupAssignment(appId, groupId, applicationGroupAssignment);
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
    return this.applicationApi.activateApplication(appId);
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
    return this.applicationApi.deactivateApplication(appId);
  }

  /**
   *
   * @param appId {String}
   * @param {file} fs.ReadStream
   * @description
   * Update the logo for an application.
   */
  uploadApplicationLogo(appId, file) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API uploadApplicationLogo parameter appId is required.'));
    }
    return this.applicationApi.uploadApplicationLogo(appId, file);
  }

  /**
   *
   * @param appId {String}
   * @param policyId {String}
   * @description
   * Assign an application to a specific policy. This unassigns the application from its currently assigned policy.
   */
  updateApplicationPolicy(appId, policyId) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API updateApplicationPolicy parameter appId is required.'));
    }
    if (!policyId) {
      return Promise.reject(new Error('OKTA API updateApplicationPolicy parameter policyId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/apps/${appId}/policies/${policyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/policies/${policyId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
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
   * @param appId {String}
   * @description
   * Revokes all tokens for the specified application
   */
  revokeOAuth2TokensForApplication(appId) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API revokeOAuth2TokensForApplication parameter appId is required.'));
    }
    return this.applicationApi.revokeOAuth2TokensForApplication(appId);
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
   * @returns {Collection} A collection that will yield {@link OAuth2Token} instances.
   */
  listOAuth2TokensForApplication(appId, queryParameters) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API listOAuth2TokensForApplication parameter appId is required.'));
    }
    let expand;
    let after;
    let limit;
    if (queryParameters) {
      expand = queryParameters.expand;
      after = queryParameters.after;
      limit = queryParameters.limit;
    }
    return this.applicationApi.listOAuth2TokensForApplication(appId, expand, after, limit);
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
    return this.applicationApi.revokeOAuth2TokenForApplication(appId, tokenId);
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
    let expand;
    if (queryParameters) {
      expand = queryParameters.expand;
    }
    return this.applicationApi.getOAuth2TokenForApplication(appId, tokenId, expand);
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
   * @returns {Collection} A collection that will yield {@link AppUser} instances.
   */
  listApplicationUsers(appId, queryParameters) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API listApplicationUsers parameter appId is required.'));
    }
    let q;
    let query_scope;
    let after;
    let limit;
    let filter;
    let expand;
    if (queryParameters) {
      q = queryParameters.q;
      query_scope = queryParameters.query_scope;
      after = queryParameters.after;
      limit = queryParameters.limit;
      filter = queryParameters.filter;
      expand = queryParameters.expand;
    }
    return this.applicationApi.listApplicationUsers(appId, q, query_scope, after, limit, filter, expand);
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
    return this.applicationApi.assignUserToApplication(appId, appUser);
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
    let sendEmail;
    if (queryParameters) {
      sendEmail = queryParameters.sendEmail;
    }
    return this.applicationApi.deleteApplicationUser(appId, userId, sendEmail);
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
    let expand;
    if (queryParameters) {
      expand = queryParameters.expand;
    }
    return this.applicationApi.getApplicationUser(appId, userId, expand);
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
    return this.applicationApi.updateApplicationUser(appId, userId, appUser);
  }

  /**
   *
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link Authenticator} instances.
   */
  listAuthenticators() {
    return this.authenticatorApi.listAuthenticators();
  }

  /**
   *
   * @param authenticatorId {String}
   * @description
   * Success
   * @returns {Promise<Authenticator>}
   */
  getAuthenticator(authenticatorId) {
    if (!authenticatorId) {
      return Promise.reject(new Error('OKTA API getAuthenticator parameter authenticatorId is required.'));
    }
    return this.authenticatorApi.getAuthenticator(authenticatorId);
  }

  /**
   *
   * @param authenticatorId {String}
   * @param {Authenticator} authenticator
   * @description
   * Updates an authenticator
   * @returns {Promise<Authenticator>}
   */
  updateAuthenticator(authenticatorId, authenticator) {
    if (!authenticatorId) {
      return Promise.reject(new Error('OKTA API updateAuthenticator parameter authenticatorId is required.'));
    }
    if (!authenticator) {
      return Promise.reject(new Error('OKTA API updateAuthenticator parameter authenticator is required.'));
    }
    return this.authenticatorApi.updateAuthenticator(authenticatorId, authenticator);
  }

  /**
   *
   * @param authenticatorId {String}
   * @description
   * Success
   * @returns {Promise<Authenticator>}
   */
  activateAuthenticator(authenticatorId) {
    if (!authenticatorId) {
      return Promise.reject(new Error('OKTA API activateAuthenticator parameter authenticatorId is required.'));
    }
    return this.authenticatorApi.activateAuthenticator(authenticatorId);
  }

  /**
   *
   * @param authenticatorId {String}
   * @description
   * Success
   * @returns {Promise<Authenticator>}
   */
  deactivateAuthenticator(authenticatorId) {
    if (!authenticatorId) {
      return Promise.reject(new Error('OKTA API deactivateAuthenticator parameter authenticatorId is required.'));
    }
    return this.authenticatorApi.deactivateAuthenticator(authenticatorId);
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.after]
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link AuthorizationServer} instances.
   */
  listAuthorizationServers(queryParameters) {
    let q;
    let limit;
    let after;
    if (queryParameters) {
      q = queryParameters.q;
      limit = queryParameters.limit;
      after = queryParameters.after;
    }
    return this.authorizationServerApi.listAuthorizationServers(q, limit, after);
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
    return this.authorizationServerApi.createAuthorizationServer(authorizationServer);
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
    return this.authorizationServerApi.deleteAuthorizationServer(authServerId);
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
    return this.authorizationServerApi.getAuthorizationServer(authServerId);
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
    return this.authorizationServerApi.updateAuthorizationServer(authServerId, authorizationServer);
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link OAuth2Claim} instances.
   */
  listOAuth2Claims(authServerId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listOAuth2Claims parameter authServerId is required.'));
    }
    return this.authorizationServerApi.listOAuth2Claims(authServerId);
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
    return this.authorizationServerApi.createOAuth2Claim(authServerId, oAuth2Claim);
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
    return this.authorizationServerApi.deleteOAuth2Claim(authServerId, claimId);
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
    return this.authorizationServerApi.getOAuth2Claim(authServerId, claimId);
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
    return this.authorizationServerApi.updateOAuth2Claim(authServerId, claimId, oAuth2Claim);
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link OAuth2Client} instances.
   */
  listOAuth2ClientsForAuthorizationServer(authServerId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listOAuth2ClientsForAuthorizationServer parameter authServerId is required.'));
    }
    return this.authorizationServerApi.listOAuth2ClientsForAuthorizationServer(authServerId);
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
    return this.authorizationServerApi.revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId);
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
   * @returns {Collection} A collection that will yield {@link OAuth2RefreshToken} instances.
   */
  listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, queryParameters) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listRefreshTokensForAuthorizationServerAndClient parameter authServerId is required.'));
    }
    if (!clientId) {
      return Promise.reject(new Error('OKTA API listRefreshTokensForAuthorizationServerAndClient parameter clientId is required.'));
    }
    let expand;
    let after;
    let limit;
    if (queryParameters) {
      expand = queryParameters.expand;
      after = queryParameters.after;
      limit = queryParameters.limit;
    }
    return this.authorizationServerApi.listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, expand, after, limit);
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
    return this.authorizationServerApi.revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId);
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
    let expand;
    if (queryParameters) {
      expand = queryParameters.expand;
    }
    return this.authorizationServerApi.getRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, expand);
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link JsonWebKey} instances.
   */
  listAuthorizationServerKeys(authServerId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listAuthorizationServerKeys parameter authServerId is required.'));
    }
    return this.authorizationServerApi.listAuthorizationServerKeys(authServerId);
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link JsonWebKey} instances.
   */
  rotateAuthorizationServerKeys(authServerId, jwkUse) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API rotateAuthorizationServerKeys parameter authServerId is required.'));
    }
    if (!jwkUse) {
      return Promise.reject(new Error('OKTA API rotateAuthorizationServerKeys parameter jwkUse is required.'));
    }
    return this.authorizationServerApi.rotateAuthorizationServerKeys(authServerId, jwkUse);
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
    return this.authorizationServerApi.activateAuthorizationServer(authServerId);
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
    return this.authorizationServerApi.deactivateAuthorizationServer(authServerId);
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link AuthorizationServerPolicy} instances.
   */
  listAuthorizationServerPolicies(authServerId) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listAuthorizationServerPolicies parameter authServerId is required.'));
    }
    return this.authorizationServerApi.listAuthorizationServerPolicies(authServerId);
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
    return this.authorizationServerApi.createAuthorizationServerPolicy(authServerId, authorizationServerPolicy);
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
    return this.authorizationServerApi.deleteAuthorizationServerPolicy(authServerId, policyId);
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
    return this.authorizationServerApi.getAuthorizationServerPolicy(authServerId, policyId);
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
    return this.authorizationServerApi.updateAuthorizationServerPolicy(authServerId, policyId, authorizationServerPolicy);
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
    return this.authorizationServerApi.activateAuthorizationServerPolicy(authServerId, policyId);
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
    return this.authorizationServerApi.deactivateAuthorizationServerPolicy(authServerId, policyId);
  }

  /**
   *
   * @param policyId {String}
   * @param authServerId {String}
   * @description
   * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
   * @returns {Collection} A collection that will yield {@link AuthorizationServerPolicyRule} instances.
   */
  listAuthorizationServerPolicyRules(policyId, authServerId) {
    if (!policyId) {
      return Promise.reject(new Error('OKTA API listAuthorizationServerPolicyRules parameter policyId is required.'));
    }
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listAuthorizationServerPolicyRules parameter authServerId is required.'));
    }
    return this.authorizationServerApi.listAuthorizationServerPolicyRules(policyId, authServerId);
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
    return this.authorizationServerApi.createAuthorizationServerPolicyRule(policyId, authServerId, authorizationServerPolicyRule);
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
    return this.authorizationServerApi.deleteAuthorizationServerPolicyRule(policyId, authServerId, ruleId);
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
    return this.authorizationServerApi.getAuthorizationServerPolicyRule(policyId, authServerId, ruleId);
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
    return this.authorizationServerApi.updateAuthorizationServerPolicyRule(policyId, authServerId, ruleId, authorizationServerPolicyRule);
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
    return this.authorizationServerApi.activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId);
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
    return this.authorizationServerApi.deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId);
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
   * @returns {Collection} A collection that will yield {@link OAuth2Scope} instances.
   */
  listOAuth2Scopes(authServerId, queryParameters) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API listOAuth2Scopes parameter authServerId is required.'));
    }
    let q;
    let filter;
    let cursor;
    let limit;
    if (queryParameters) {
      q = queryParameters.q;
      filter = queryParameters.filter;
      cursor = queryParameters.cursor;
      limit = queryParameters.limit;
    }
    return this.authorizationServerApi.listOAuth2Scopes(authServerId, q, filter, cursor, limit);
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
    return this.authorizationServerApi.createOAuth2Scope(authServerId, oAuth2Scope);
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
    return this.authorizationServerApi.deleteOAuth2Scope(authServerId, scopeId);
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
    return this.authorizationServerApi.getOAuth2Scope(authServerId, scopeId);
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
    return this.authorizationServerApi.updateOAuth2Scope(authServerId, scopeId, oAuth2Scope);
  }

  /**
   *
   * @description
   * List all the brands in your org.
   * @returns {Collection} A collection that will yield {@link Brand} instances.
   */
  listBrands() {
    return this.customizationApi.listBrands();
  }

  /**
   *
   * @param brandId {String}
   * @description
   * Fetches a brand by `brandId`
   * @returns {Promise<Brand>}
   */
  getBrand(brandId) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API getBrand parameter brandId is required.'));
    }
    return this.customizationApi.getBrand(brandId);
  }

  /**
   *
   * @param brandId {String}
   * @param {Brand} brand
   * @description
   * Updates a brand by `brandId`
   * @returns {Promise<Brand>}
   */
  updateBrand(brandId, brand) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API updateBrand parameter brandId is required.'));
    }
    if (!brand) {
      return Promise.reject(new Error('OKTA API updateBrand parameter brand is required.'));
    }
    return this.customizationApi.updateBrand(brandId, brand);
  }

  /**
   *
   * @param brandId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * List email templates in your organization with pagination.
   * @returns {Collection} A collection that will yield {@link EmailTemplate} instances.
   */
  listEmailTemplates(brandId, queryParameters) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API listEmailTemplates parameter brandId is required.'));
    }
    let after;
    let limit;
    if (queryParameters) {
      after = queryParameters.after;
      limit = queryParameters.limit;
    }
    return this.customizationApi.listEmailTemplates(brandId, after, limit);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @description
   * Fetch an email template by templateName
   * @returns {Promise<EmailTemplate>}
   */
  getEmailTemplate(brandId, templateName) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API getEmailTemplate parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API getEmailTemplate parameter templateName is required.'));
    }
    return this.customizationApi.getEmailTemplate(brandId, templateName);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @description
   * Delete all customizations for an email template. Also known as “Reset to Default”.
   */
  deleteEmailTemplateCustomizations(brandId, templateName) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API deleteEmailTemplateCustomizations parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API deleteEmailTemplateCustomizations parameter templateName is required.'));
    }
    return this.customizationApi.deleteAllCustomizations(brandId, templateName);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @description
   * List all email customizations for an email template
   * @returns {Collection} A collection that will yield {@link EmailTemplateCustomization} instances.
   */
  listEmailTemplateCustomizations(brandId, templateName) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API listEmailTemplateCustomizations parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API listEmailTemplateCustomizations parameter templateName is required.'));
    }
    return this.customizationApi.listEmailCustomizations(brandId, templateName);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @param {EmailTemplateCustomizationRequest} emailTemplateCustomizationRequest
   * @description
   * Create an email customization
   * @returns {Promise<EmailTemplateCustomization>}
   */
  createEmailTemplateCustomization(brandId, templateName, emailTemplateCustomizationRequest) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API createEmailTemplateCustomization parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API createEmailTemplateCustomization parameter templateName is required.'));
    }
    if (!emailTemplateCustomizationRequest) {
      return Promise.reject(new Error('OKTA API createEmailTemplateCustomization parameter emailTemplateCustomizationRequest is required.'));
    }
    return this.customizationApi.createEmailCustomization(brandId, templateName, emailTemplateCustomizationRequest);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @param customizationId {String}
   * @description
   * Delete an email customization
   */
  deleteEmailTemplateCustomization(brandId, templateName, customizationId) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API deleteEmailTemplateCustomization parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API deleteEmailTemplateCustomization parameter templateName is required.'));
    }
    if (!customizationId) {
      return Promise.reject(new Error('OKTA API deleteEmailTemplateCustomization parameter customizationId is required.'));
    }
    return this.customizationApi.deleteEmailCustomization(brandId, templateName, customizationId);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @param customizationId {String}
   * @description
   * Fetch an email customization by id.
   * @returns {Promise<EmailTemplateCustomization>}
   */
  getEmailTemplateCustomization(brandId, templateName, customizationId) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API getEmailTemplateCustomization parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API getEmailTemplateCustomization parameter templateName is required.'));
    }
    if (!customizationId) {
      return Promise.reject(new Error('OKTA API getEmailTemplateCustomization parameter customizationId is required.'));
    }
    return this.customizationApi.getEmailCustomization(brandId, templateName, customizationId);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @param customizationId {String}
   * @param {EmailTemplateCustomizationRequest} emailTemplateCustomizationRequest
   * @description
   * Update an email customization
   * @returns {Promise<EmailTemplateCustomization>}
   */
  updateEmailTemplateCustomization(brandId, templateName, customizationId, emailTemplateCustomizationRequest) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API updateEmailTemplateCustomization parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API updateEmailTemplateCustomization parameter templateName is required.'));
    }
    if (!customizationId) {
      return Promise.reject(new Error('OKTA API updateEmailTemplateCustomization parameter customizationId is required.'));
    }
    if (!emailTemplateCustomizationRequest) {
      return Promise.reject(new Error('OKTA API updateEmailTemplateCustomization parameter emailTemplateCustomizationRequest is required.'));
    }
    return this.customizationApi.updateEmailCustomization(brandId, templateName, customizationId, emailTemplateCustomizationRequest);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @param customizationId {String}
   * @description
   * Get a preview of an email template customization.
   * @returns {Promise<EmailTemplateContent>}
   */
  getEmailTemplateCustomizationPreview(brandId, templateName, customizationId) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API getEmailTemplateCustomizationPreview parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API getEmailTemplateCustomizationPreview parameter templateName is required.'));
    }
    if (!customizationId) {
      return Promise.reject(new Error('OKTA API getEmailTemplateCustomizationPreview parameter customizationId is required.'));
    }
    return this.customizationApi.getCustomizationPreview(brandId, templateName, customizationId);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @description
   * Fetch the default content for an email template.
   * @returns {Promise<EmailTemplateContent>}
   */
  getEmailTemplateDefaultContent(brandId, templateName) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API getEmailTemplateDefaultContent parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API getEmailTemplateDefaultContent parameter templateName is required.'));
    }
    return this.customizationApi.getEmailDefaultContent(brandId, templateName);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @description
   * Fetch a preview of an email template's default content by populating velocity references with the current user's environment.
   * @returns {Promise<EmailTemplateContent>}
   */
  getEmailTemplateDefaultContentPreview(brandId, templateName) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API getEmailTemplateDefaultContentPreview parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API getEmailTemplateDefaultContentPreview parameter templateName is required.'));
    }
    return this.customizationApi.getEmailDefaultPreview(brandId, templateName);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @param {EmailTemplateTestRequest} emailTemplateTestRequest
   * @description
   * Send a test email to the current users primary and secondary email addresses. The email content is selected based on the following priority: An email customization specifically for the users locale. The default language of email customizations. The email templates default content.
   */
  sendTestEmail(brandId, templateName, emailTemplateTestRequest) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API sendTestEmail parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API sendTestEmail parameter templateName is required.'));
    }
    if (!emailTemplateTestRequest) {
      return Promise.reject(new Error('OKTA API sendTestEmail parameter emailTemplateTestRequest is required.'));
    }
    return this.customizationApi.sendTestEmail(brandId, templateName, emailTemplateTestRequest);
  }

  /**
   *
   * @param brandId {String}
   * @description
   * List all the themes in your brand
   * @returns {Collection} A collection that will yield {@link ThemeResponse} instances.
   */
  listBrandThemes(brandId) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API listBrandThemes parameter brandId is required.'));
    }
    return this.customizationApi.listBrandThemes(brandId);
  }

  /**
   *
   * @param brandId {String}
   * @param themeId {String}
   * @description
   * Fetches a theme for a brand
   * @returns {Promise<ThemeResponse>}
   */
  getBrandTheme(brandId, themeId) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API getBrandTheme parameter brandId is required.'));
    }
    if (!themeId) {
      return Promise.reject(new Error('OKTA API getBrandTheme parameter themeId is required.'));
    }
    return this.customizationApi.getBrandTheme(brandId, themeId);
  }

  /**
   *
   * @param brandId {String}
   * @param themeId {String}
   * @param {Theme} theme
   * @description
   * Updates a theme for a brand
   * @returns {Promise<ThemeResponse>}
   */
  updateBrandTheme(brandId, themeId, theme) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API updateBrandTheme parameter brandId is required.'));
    }
    if (!themeId) {
      return Promise.reject(new Error('OKTA API updateBrandTheme parameter themeId is required.'));
    }
    if (!theme) {
      return Promise.reject(new Error('OKTA API updateBrandTheme parameter theme is required.'));
    }
    return this.customizationApi.updateBrandTheme(brandId, themeId, theme);
  }

  /**
   *
   * @param brandId {String}
   * @param themeId {String}
   * @description
   * Deletes a Theme background image
   */
  deleteBrandThemeBackgroundImage(brandId, themeId) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API deleteBrandThemeBackgroundImage parameter brandId is required.'));
    }
    if (!themeId) {
      return Promise.reject(new Error('OKTA API deleteBrandThemeBackgroundImage parameter themeId is required.'));
    }
    return this.customizationApi.deleteBrandThemeBackgroundImage(brandId, themeId);
  }

  /**
   *
   * @param brandId {String}
   * @param themeId {String}
   * @param {file} fs.ReadStream
   * @description
   * Updates the background image for your Theme
   * @returns {Promise<ImageUploadResponse>}
   */
  uploadBrandThemeBackgroundImage(brandId, themeId, file) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API uploadBrandThemeBackgroundImage parameter brandId is required.'));
    }
    if (!themeId) {
      return Promise.reject(new Error('OKTA API uploadBrandThemeBackgroundImage parameter themeId is required.'));
    }
    return this.customizationApi.uploadBrandThemeBackgroundImage(brandId, themeId, file);
  }

  /**
   *
   * @param brandId {String}
   * @param themeId {String}
   * @description
   * Deletes a Theme favicon. The org then uses the Okta default favicon.
   */
  deleteBrandThemeFavicon(brandId, themeId) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API deleteBrandThemeFavicon parameter brandId is required.'));
    }
    if (!themeId) {
      return Promise.reject(new Error('OKTA API deleteBrandThemeFavicon parameter themeId is required.'));
    }
    return this.customizationApi.deleteBrandThemeFavicon(brandId, themeId);
  }

  /**
   *
   * @param brandId {String}
   * @param themeId {String}
   * @param {file} fs.ReadStream
   * @description
   * Updates the favicon for your theme
   * @returns {Promise<ImageUploadResponse>}
   */
  uploadBrandThemeFavicon(brandId, themeId, file) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API uploadBrandThemeFavicon parameter brandId is required.'));
    }
    if (!themeId) {
      return Promise.reject(new Error('OKTA API uploadBrandThemeFavicon parameter themeId is required.'));
    }
    return this.customizationApi.uploadBrandThemeFavicon(brandId, themeId, file);
  }

  /**
   *
   * @param brandId {String}
   * @param themeId {String}
   * @description
   * Deletes a Theme logo. The org then uses the Okta default logo.
   */
  deleteBrandThemeLogo(brandId, themeId) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API deleteBrandThemeLogo parameter brandId is required.'));
    }
    if (!themeId) {
      return Promise.reject(new Error('OKTA API deleteBrandThemeLogo parameter themeId is required.'));
    }
    return this.customizationApi.deleteBrandThemeLogo(brandId, themeId);
  }

  /**
   *
   * @param brandId {String}
   * @param themeId {String}
   * @param {file} fs.ReadStream
   * @description
   * Updates the logo for your Theme
   * @returns {Promise<ImageUploadResponse>}
   */
  uploadBrandThemeLogo(brandId, themeId, file) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API uploadBrandThemeLogo parameter brandId is required.'));
    }
    if (!themeId) {
      return Promise.reject(new Error('OKTA API uploadBrandThemeLogo parameter themeId is required.'));
    }
    return this.customizationApi.uploadBrandThemeLogo(brandId, themeId, file);
  }

  /**
   *
   * @description
   * List all verified custom Domains for the org.
   * @returns {Promise<DomainListResponse>}
   */
  listDomains() {
    return this.domainApi.listDomains();
  }

  /**
   *
   * @param {Domain} domain
   * @description
   * Creates your domain.
   * @returns {Promise<Domain>}
   */
  createDomain(domain) {
    if (!domain) {
      return Promise.reject(new Error('OKTA API createDomain parameter domain is required.'));
    }
    return this.domainApi.createDomain(domain);
  }

  /**
   *
   * @param domainId {String}
   * @description
   * Deletes a Domain by `id`.
   */
  deleteDomain(domainId) {
    if (!domainId) {
      return Promise.reject(new Error('OKTA API deleteDomain parameter domainId is required.'));
    }
    return this.domainApi.deleteDomain(domainId);
  }

  /**
   *
   * @param domainId {String}
   * @description
   * Fetches a Domain by `id`.
   * @returns {Promise<Domain>}
   */
  getDomain(domainId) {
    if (!domainId) {
      return Promise.reject(new Error('OKTA API getDomain parameter domainId is required.'));
    }
    return this.domainApi.getDomain(domainId);
  }

  /**
   *
   * @param domainId {String}
   * @param {DomainCertificate} domainCertificate
   * @description
   * Creates the Certificate for the Domain.
   */
  createCertificate(domainId, domainCertificate) {
    if (!domainId) {
      return Promise.reject(new Error('OKTA API createCertificate parameter domainId is required.'));
    }
    if (!domainCertificate) {
      return Promise.reject(new Error('OKTA API createCertificate parameter domainCertificate is required.'));
    }
    return this.domainApi.createCertificate(domainId, domainCertificate);
  }

  /**
   *
   * @param domainId {String}
   * @description
   * Verifies the Domain by `id`.
   * @returns {Promise<Domain>}
   */
  verifyDomain(domainId) {
    if (!domainId) {
      return Promise.reject(new Error('OKTA API verifyDomain parameter domainId is required.'));
    }
    return this.domainApi.verifyDomain(domainId);
  }

  /**
   *
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link EventHook} instances.
   */
  listEventHooks() {
    return this.eventHookApi.listEventHooks();
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
    return this.eventHookApi.createEventHook(eventHook);
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
    return this.eventHookApi.deleteEventHook(eventHookId);
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
    return this.eventHookApi.getEventHook(eventHookId);
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
    return this.eventHookApi.updateEventHook(eventHookId, eventHook);
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
    return this.eventHookApi.activateEventHook(eventHookId);
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
    return this.eventHookApi.deactivateEventHook(eventHookId);
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
    return this.eventHookApi.verifyEventHook(eventHookId);
  }

  /**
   *
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link Feature} instances.
   */
  listFeatures() {
    return this.featureApi.listFeatures();
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
    return this.featureApi.getFeature(featureId);
  }

  /**
   *
   * @param featureId {String}
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link Feature} instances.
   */
  listFeatureDependencies(featureId) {
    if (!featureId) {
      return Promise.reject(new Error('OKTA API listFeatureDependencies parameter featureId is required.'));
    }
    return this.featureApi.listFeatureDependencies(featureId);
  }

  /**
   *
   * @param featureId {String}
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link Feature} instances.
   */
  listFeatureDependents(featureId) {
    if (!featureId) {
      return Promise.reject(new Error('OKTA API listFeatureDependents parameter featureId is required.'));
    }
    return this.featureApi.listFeatureDependents(featureId);
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
    let mode;
    if (queryParameters) {
      mode = queryParameters.mode;
    }
    return this.featureApi.updateFeatureLifecycle(featureId, lifecycle, mode);
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.search]
   * @description
   * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
   * @returns {Collection} A collection that will yield {@link Group} instances.
   */
  listGroups(queryParameters) {
    let q;
    let filter;
    let after;
    let limit;
    let expand;
    let search;
    if (queryParameters) {
      q = queryParameters.q;
      filter = queryParameters.filter;
      after = queryParameters.after;
      limit = queryParameters.limit;
      expand = queryParameters.expand;
      search = queryParameters.search;
    }
    return this.groupApi.listGroups(q, filter, after, limit, expand, search);
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
    return this.groupApi.createGroup(group);
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
   * @returns {Collection} A collection that will yield {@link GroupRule} instances.
   */
  listGroupRules(queryParameters) {
    let limit;
    let after;
    let search;
    let expand;
    if (queryParameters) {
      limit = queryParameters.limit;
      after = queryParameters.after;
      search = queryParameters.search;
      expand = queryParameters.expand;
    }
    return this.groupApi.listGroupRules(limit, after, search, expand);
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
    return this.groupApi.createGroupRule(groupRule);
  }

  /**
   *
   * @param ruleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.removeUsers]
   * @description
   * Removes a specific group rule by id from your organization
   */
  deleteGroupRule(ruleId, queryParameters) {
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API deleteGroupRule parameter ruleId is required.'));
    }
    let removeUsers;
    if (queryParameters) {
      removeUsers = queryParameters.removeUsers;
    }
    return this.groupApi.deleteGroupRule(ruleId, removeUsers);
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
    let expand;
    if (queryParameters) {
      expand = queryParameters.expand;
    }
    return this.groupApi.getGroupRule(ruleId, expand);
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
    return this.groupApi.updateGroupRule(ruleId, groupRule);
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
    return this.groupApi.activateGroupRule(ruleId);
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
    return this.groupApi.deactivateGroupRule(ruleId);
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
    return this.groupApi.deleteGroup(groupId);
  }

  /**
   *
   * @param groupId {String}
   * @description
   * Fetches a group from your organization.
   * @returns {Promise<Group>}
   */
  getGroup(groupId) {
    if (!groupId) {
      return Promise.reject(new Error('OKTA API getGroup parameter groupId is required.'));
    }
    return this.groupApi.getGroup(groupId);
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
    return this.groupApi.updateGroup(groupId, group);
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Enumerates all applications that are assigned to a group.
   * @returns {Collection} A collection that will yield {@link Application} instances.
   */
  listAssignedApplicationsForGroup(groupId, queryParameters) {
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listAssignedApplicationsForGroup parameter groupId is required.'));
    }
    let after;
    let limit;
    if (queryParameters) {
      after = queryParameters.after;
      limit = queryParameters.limit;
    }
    return this.groupApi.listAssignedApplicationsForGroup(groupId, after, limit);
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link Role} instances.
   */
  listGroupAssignedRoles(groupId, queryParameters) {
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listGroupAssignedRoles parameter groupId is required.'));
    }
    let expand;
    if (queryParameters) {
      expand = queryParameters.expand;
    }
    return this.groupApi.listGroupAssignedRoles(groupId, expand);
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
    let disableNotifications;
    if (queryParameters) {
      disableNotifications = queryParameters.disableNotifications;
    }
    return this.groupApi.assignRoleToGroup(groupId, assignRoleRequest, disableNotifications);
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
    return this.groupApi.removeRoleFromGroup(groupId, roleId);
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
    return this.groupApi.getRole(groupId, roleId);
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
   * @returns {Collection} A collection that will yield {@link CatalogApplication} instances.
   */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, queryParameters) {
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listApplicationTargetsForApplicationAdministratorRoleForGroup parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API listApplicationTargetsForApplicationAdministratorRoleForGroup parameter roleId is required.'));
    }
    let after;
    let limit;
    if (queryParameters) {
      after = queryParameters.after;
      limit = queryParameters.limit;
    }
    return this.groupApi.listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, after, limit);
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
    return this.groupApi.removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId, roleId, appName);
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
    return this.groupApi.addApplicationTargetToAdminRoleGivenToGroup(groupId, roleId, appName);
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
    return this.groupApi.removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId, roleId, appName, applicationId);
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
    return this.groupApi.addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId, roleId, appName, applicationId);
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
   * @returns {Collection} A collection that will yield {@link Group} instances.
   */
  listGroupTargetsForGroupRole(groupId, roleId, queryParameters) {
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listGroupTargetsForGroupRole parameter groupId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API listGroupTargetsForGroupRole parameter roleId is required.'));
    }
    let after;
    let limit;
    if (queryParameters) {
      after = queryParameters.after;
      limit = queryParameters.limit;
    }
    return this.groupApi.listGroupTargetsForGroupRole(groupId, roleId, after, limit);
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
    return this.groupApi.removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId, roleId, targetGroupId);
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
    return this.groupApi.addGroupTargetToGroupAdministratorRoleForGroup(groupId, roleId, targetGroupId);
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Enumerates all users that are a member of a group.
   * @returns {Collection} A collection that will yield {@link User} instances.
   */
  listGroupUsers(groupId, queryParameters) {
    if (!groupId) {
      return Promise.reject(new Error('OKTA API listGroupUsers parameter groupId is required.'));
    }
    let after;
    let limit;
    if (queryParameters) {
      after = queryParameters.after;
      limit = queryParameters.limit;
    }
    return this.groupApi.listGroupUsers(groupId, after, limit);
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
    return this.groupApi.removeUserFromGroup(groupId, userId);
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
    return this.groupApi.addUserToGroup(groupId, userId);
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
   * @returns {Collection} A collection that will yield {@link IdentityProvider} instances.
   */
  listIdentityProviders(queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.IdentityProvider, this),
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
   * @returns {Collection} A collection that will yield {@link JsonWebKey} instances.
   */
  listIdentityProviderKeys(queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.JsonWebKey, this),
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
   * @returns {Collection} A collection that will yield {@link Csr} instances.
   */
  listCsrsForIdentityProvider(idpId) {
    if (!idpId) {
      return Promise.reject(new Error('OKTA API listCsrsForIdentityProvider parameter idpId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/csrs`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.Csr, this),
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
   * @returns {Collection} A collection that will yield {@link JsonWebKey} instances.
   */
  listIdentityProviderSigningKeys(idpId) {
    if (!idpId) {
      return Promise.reject(new Error('OKTA API listIdentityProviderSigningKeys parameter idpId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.JsonWebKey, this),
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
   * @returns {Collection} A collection that will yield {@link IdentityProviderApplicationUser} instances.
   */
  listIdentityProviderApplicationUsers(idpId) {
    if (!idpId) {
      return Promise.reject(new Error('OKTA API listIdentityProviderApplicationUsers parameter idpId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/users`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.IdentityProviderApplicationUser, this),
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
   * @returns {Collection} A collection that will yield {@link SocialAuthToken} instances.
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
      this.http,
      url,
      new ModelFactory(models.SocialAuthToken, this),
    );
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.type]
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link InlineHook} instances.
   */
  listInlineHooks(queryParameters) {
    let type;
    if (queryParameters) {
      type = queryParameters.type;
    }
    return this.inlineHookApi.listInlineHooks(type);
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
    return this.inlineHookApi.createInlineHook(inlineHook);
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
    return this.inlineHookApi.deleteInlineHook(inlineHookId);
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
    return this.inlineHookApi.getInlineHook(inlineHookId);
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
    return this.inlineHookApi.updateInlineHook(inlineHookId, inlineHook);
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
    return this.inlineHookApi.executeInlineHook(inlineHookId, inlineHookPayload);
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
    return this.inlineHookApi.activateInlineHook(inlineHookId);
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
    return this.inlineHookApi.deactivateInlineHook(inlineHookId);
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
   * @returns {Collection} A collection that will yield {@link LogEvent} instances.
   */
  getLogs(queryParameters) {
    let since;
    let until;
    let filter;
    let q;
    let limit;
    let sortOrder;
    let after;
    if (queryParameters) {
      since = queryParameters.since;
      until = queryParameters.until;
      filter = queryParameters.filter;
      q = queryParameters.q;
      limit = queryParameters.limit;
      sortOrder = queryParameters.sortOrder;
      after = queryParameters.after;
    }
    return this.systemLogApi.getLogs(since, until, filter, q, limit, sortOrder, after);
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
   * @returns {Collection} A collection that will yield {@link ProfileMapping} instances.
   */
  listProfileMappings(queryParameters) {
    let after;
    let limit;
    let sourceId;
    let targetId;
    if (queryParameters) {
      after = queryParameters.after;
      limit = queryParameters.limit;
      sourceId = queryParameters.sourceId;
      targetId = queryParameters.targetId;
    }
    return this.profileMappingApi.listProfileMappings(after, limit, sourceId, targetId);
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
    return this.profileMappingApi.getProfileMapping(mappingId);
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
    return this.profileMappingApi.updateProfileMapping(mappingId, profileMapping);
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
    return this.schemaApi.getApplicationUserSchema(appInstanceId);
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
    return this.schemaApi.updateApplicationUserProfile(appInstanceId, userSchema);
  }

  /**
   *
   * @description
   * Fetches the group schema
   * @returns {Promise<GroupSchema>}
   */
  getGroupSchema() {
    return this.schemaApi.getGroupSchema();
  }

  /**
   *
   * @param {GroupSchema} groupSchema
   * @description
   * Updates, adds ore removes one or more custom Group Profile properties in the schema
   * @returns {Promise<GroupSchema>}
   */
  updateGroupSchema(groupSchema) {
    return this.schemaApi.updateGroupSchema(groupSchema);
  }

  /**
   *
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link LinkedObject} instances.
   */
  listLinkedObjectDefinitions() {
    return this.linkedObjectApi.listLinkedObjectDefinitions();
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
    return this.linkedObjectApi.addLinkedObjectDefinition(linkedObject);
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
    return this.linkedObjectApi.deleteLinkedObjectDefinition(linkedObjectName);
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
    return this.linkedObjectApi.getLinkedObjectDefinition(linkedObjectName);
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
    return this.schemaApi.getUserSchema(schemaId);
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
    return this.schemaApi.updateUserProfile(schemaId, userSchema);
  }

  /**
   *
   * @description
   * Fetches all User Types in your org
   * @returns {Collection} A collection that will yield {@link UserType} instances.
   */
  listUserTypes() {
    return this.userTypeApi.listUserTypes();
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
    return this.userTypeApi.createUserType(userType);
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
    return this.userTypeApi.deleteUserType(typeId);
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
    return this.userTypeApi.getUserType(typeId);
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
    return this.userTypeApi.updateUserType(typeId, userType);
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
    return this.userTypeApi.replaceUserType(typeId, userType);
  }

  /**
   *
   * @description
   * Get settings of your organization.
   * @returns {Promise<OrgSetting>}
   */
  getOrgSettings() {
    return this.orgSettingApi.getOrgSettings();
  }

  /**
   *
   * @param {OrgSetting} orgSetting
   * @description
   * Partial update settings of your organization.
   * @returns {Promise<OrgSetting>}
   */
  partialUpdateOrgSetting(orgSetting) {
    if (!orgSetting) {
      return Promise.reject(new Error('OKTA API partialUpdateOrgSetting parameter orgSetting is required.'));
    }
    return this.orgSettingApi.partialUpdateOrgSetting(orgSetting);
  }

  /**
   *
   * @param {OrgSetting} orgSetting
   * @description
   * Update settings of your organization.
   * @returns {Promise<OrgSetting>}
   */
  updateOrgSetting(orgSetting) {
    if (!orgSetting) {
      return Promise.reject(new Error('OKTA API updateOrgSetting parameter orgSetting is required.'));
    }
    return this.orgSettingApi.updateOrgSetting(orgSetting);
  }

  /**
   *
   * @description
   * Gets Contact Types of your organization.
   * @returns {Collection} A collection that will yield {@link OrgContactTypeObj} instances.
   */
  getOrgContactTypes() {
    return this.orgSettingApi.getOrgContactTypes();
  }

  /**
   *
   * @param contactType {String}
   * @description
   * Retrieves the URL of the User associated with the specified Contact Type.
   * @returns {Promise<OrgContactUser>}
   */
  getOrgContactUser(contactType) {
    if (!contactType) {
      return Promise.reject(new Error('OKTA API getOrgContactUser parameter contactType is required.'));
    }
    return this.orgSettingApi.getOrgContactUser(contactType);
  }

  /**
   *
   * @param contactType {String}
   * @param {UserIdString} userIdString
   * @description
   * Updates the User associated with the specified Contact Type.
   * @returns {Promise<OrgContactUser>}
   */
  updateOrgContactUser(contactType, userIdString) {
    if (!contactType) {
      return Promise.reject(new Error('OKTA API updateOrgContactUser parameter contactType is required.'));
    }
    if (!userIdString) {
      return Promise.reject(new Error('OKTA API updateOrgContactUser parameter userIdString is required.'));
    }
    return this.orgSettingApi.updateOrgContactUser(contactType, userIdString);
  }

  /**
   *
   * @param {file} fs.ReadStream
   * @description
   * Updates the logo for your organization.
   */
  updateOrgLogo(file) {
    return this.orgSettingApi.updateOrgLogo(file);
  }

  /**
   *
   * @description
   * Gets preferences of your organization.
   * @returns {Promise<OrgPreferences>}
   */
  getOrgPreferences() {
    return this.orgSettingApi.getOrgPreferences();
  }

  /**
   *
   * @description
   * Hide the Okta UI footer for all end users of your organization.
   * @returns {Promise<OrgPreferences>}
   */
  hideOktaUIFooter() {
    return this.orgSettingApi.hideOktaUIFooter();
  }

  /**
   *
   * @description
   * Makes the Okta UI footer visible for all end users of your organization.
   * @returns {Promise<OrgPreferences>}
   */
  showOktaUIFooter() {
    return this.orgSettingApi.showOktaUIFooter();
  }

  /**
   *
   * @description
   * Gets Okta Communication Settings of your organization.
   * @returns {Promise<OrgOktaCommunicationSetting>}
   */
  getOktaCommunicationSettings() {
    return this.orgSettingApi.getOktaCommunicationSettings();
  }

  /**
   *
   * @description
   * Opts in all users of this org to Okta Communication emails.
   * @returns {Promise<OrgOktaCommunicationSetting>}
   */
  optInUsersToOktaCommunicationEmails() {
    return this.orgSettingApi.optInUsersToOktaCommunicationEmails();
  }

  /**
   *
   * @description
   * Opts out all users of this org from Okta Communication emails.
   * @returns {Promise<OrgOktaCommunicationSetting>}
   */
  optOutUsersFromOktaCommunicationEmails() {
    return this.orgSettingApi.optOutUsersFromOktaCommunicationEmails();
  }

  /**
   *
   * @description
   * Gets Okta Support Settings of your organization.
   * @returns {Promise<OrgOktaSupportSettingsObj>}
   */
  getOrgOktaSupportSettings() {
    return this.orgSettingApi.getOrgOktaSupportSettings();
  }

  /**
   *
   * @description
   * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
   * @returns {Promise<OrgOktaSupportSettingsObj>}
   */
  extendOktaSupport() {
    return this.orgSettingApi.extendOktaSupport();
  }

  /**
   *
   * @description
   * Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.
   * @returns {Promise<OrgOktaSupportSettingsObj>}
   */
  grantOktaSupport() {
    return this.orgSettingApi.grantOktaSupport();
  }

  /**
   *
   * @description
   * Revokes Okta Support access to your organization.
   * @returns {Promise<OrgOktaSupportSettingsObj>}
   */
  revokeOktaSupport() {
    return this.orgSettingApi.revokeOktaSupport();
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.type]
   * @param {String} [queryParams.status]
   * @param {String} [queryParams.expand]
   * @description
   * Gets all policies with the specified type.
   * @returns {Collection} A collection that will yield {@link Policy} instances.
   */
  listPolicies(queryParameters) {
    if (!queryParameters) {
      return Promise.reject(new Error('OKTA API listPolicies parameter queryParameters is required.'));
    }
    let url = `${this.baseUrl}/api/v1/policies`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this.http,
      url,
      new factories.Policy(this),
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
    return request.then(jsonRes => new factories.Policy(this).createInstance(jsonRes));
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
    return request.then(jsonRes => new factories.Policy(this).createInstance(jsonRes));
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
    return request.then(jsonRes => new factories.Policy(this).createInstance(jsonRes));
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
   * @returns {Collection} A collection that will yield {@link PolicyRule} instances.
   */
  listPolicyRules(policyId) {
    if (!policyId) {
      return Promise.reject(new Error('OKTA API listPolicyRules parameter policyId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules`;

    return new Collection(
      this.http,
      url,
      new factories.PolicyRule(this),
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
    return request.then(jsonRes => new factories.PolicyRule(this).createInstance(jsonRes));
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
    return request.then(jsonRes => new factories.PolicyRule(this).createInstance(jsonRes));
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
    return request.then(jsonRes => new factories.PolicyRule(this).createInstance(jsonRes));
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
   * @param roleTypeOrRoleId {String}
   * @description
   * When roleType List all subscriptions of a Role. Else when roleId List subscriptions of a Custom Role
   * @returns {Collection} A collection that will yield {@link Subscription} instances.
   */
  listRoleSubscriptions(roleTypeOrRoleId) {
    if (!roleTypeOrRoleId) {
      return Promise.reject(new Error('OKTA API listRoleSubscriptions parameter roleTypeOrRoleId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}/subscriptions`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.Subscription, this),
    );
  }

  /**
   *
   * @param roleTypeOrRoleId {String}
   * @param notificationType {String}
   * @description
   * When roleType Get subscriptions of a Role with a specific notification type. Else when roleId Get subscription of a Custom Role with a specific notification type.
   * @returns {Promise<Subscription>}
   */
  getRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType) {
    if (!roleTypeOrRoleId) {
      return Promise.reject(new Error('OKTA API getRoleSubscriptionByNotificationType parameter roleTypeOrRoleId is required.'));
    }
    if (!notificationType) {
      return Promise.reject(new Error('OKTA API getRoleSubscriptionByNotificationType parameter notificationType is required.'));
    }
    let url = `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}/subscriptions/${notificationType}`;

    const resources = [
      `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}/subscriptions/${notificationType}`,
      `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Subscription(jsonRes, this));
  }

  /**
   *
   * @param roleTypeOrRoleId {String}
   * @param notificationType {String}
   * @description
   * When roleType Subscribes a Role to a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Subscribes a Custom Role to a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
   */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType) {
    if (!roleTypeOrRoleId) {
      return Promise.reject(new Error('OKTA API subscribeRoleSubscriptionByNotificationType parameter roleTypeOrRoleId is required.'));
    }
    if (!notificationType) {
      return Promise.reject(new Error('OKTA API subscribeRoleSubscriptionByNotificationType parameter notificationType is required.'));
    }
    let url = `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}/subscriptions/${notificationType}/subscribe`;

    const resources = [
      `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}/subscriptions/${notificationType}`,
      `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}`
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
   * @param roleTypeOrRoleId {String}
   * @param notificationType {String}
   * @description
   * When roleType Unsubscribes a Role from a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Unsubscribes a Custom Role from a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
   */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType) {
    if (!roleTypeOrRoleId) {
      return Promise.reject(new Error('OKTA API unsubscribeRoleSubscriptionByNotificationType parameter roleTypeOrRoleId is required.'));
    }
    if (!notificationType) {
      return Promise.reject(new Error('OKTA API unsubscribeRoleSubscriptionByNotificationType parameter notificationType is required.'));
    }
    let url = `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}/subscriptions/${notificationType}/unsubscribe`;

    const resources = [
      `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}/subscriptions/${notificationType}`,
      `${this.baseUrl}/api/v1/roles/${roleTypeOrRoleId}`
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
   * @returns {Collection} A collection that will yield {@link SmsTemplate} instances.
   */
  listSmsTemplates(queryParameters) {
    let url = `${this.baseUrl}/api/v1/templates/sms`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.SmsTemplate, this),
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
    return this.threatInsightApi.getCurrentConfiguration();
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
    return this.threatInsightApi.updateConfiguration(threatInsightConfiguration);
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
   * @returns {Collection} A collection that will yield {@link TrustedOrigin} instances.
   */
  listOrigins(queryParameters) {
    let url = `${this.baseUrl}/api/v1/trustedOrigins`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.TrustedOrigin, this),
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
   * @returns {Collection} A collection that will yield {@link User} instances.
   */
  listUsers(queryParameters) {
    let url = `${this.baseUrl}/api/v1/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.User, this),
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
   * @returns {Collection} A collection that will yield {@link AppLink} instances.
   */
  listAppLinks(userId) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listAppLinks parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/appLinks`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.AppLink, this),
    );
  }

  /**
   *
   * @param userId {String}
   * @description
   * Lists all client resources for which the specified user has grants or tokens.
   * @returns {Collection} A collection that will yield {@link OAuth2Client} instances.
   */
  listUserClients(userId) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listUserClients parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/clients`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.OAuth2Client, this),
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
   * @returns {Collection} A collection that will yield {@link OAuth2ScopeConsentGrant} instances.
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
      this.http,
      url,
      new ModelFactory(models.OAuth2ScopeConsentGrant, this),
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
   * @returns {Collection} A collection that will yield {@link OAuth2RefreshToken} instances.
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
      this.http,
      url,
      new ModelFactory(models.OAuth2RefreshToken, this),
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
   * @returns {Collection} A collection that will yield {@link UserFactor} instances.
   */
  listFactors(userId) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listFactors parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors`;

    return new Collection(
      this.http,
      url,
      new factories.UserFactor(this),
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
    return request.then(jsonRes => new factories.UserFactor(this).createInstance(jsonRes));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all the supported factors that can be enrolled for the specified user
   * @returns {Collection} A collection that will yield {@link UserFactor} instances.
   */
  listSupportedFactors(userId) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listSupportedFactors parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/catalog`;

    return new Collection(
      this.http,
      url,
      new factories.UserFactor(this),
    );
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all available security questions for a user's `question` factor
   * @returns {Collection} A collection that will yield {@link SecurityQuestion} instances.
   */
  listSupportedSecurityQuestions(userId) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listSupportedSecurityQuestions parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/questions`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.SecurityQuestion, this),
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
    return request.then(jsonRes => new factories.UserFactor(this).createInstance(jsonRes));
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
    return request.then(jsonRes => new factories.UserFactor(this).createInstance(jsonRes));
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
   * @returns {Collection} A collection that will yield {@link OAuth2ScopeConsentGrant} instances.
   */
  listUserGrants(userId, queryParameters) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listUserGrants parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/grants`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.OAuth2ScopeConsentGrant, this),
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
   * @returns {Collection} A collection that will yield {@link Group} instances.
   */
  listUserGroups(userId) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listUserGroups parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/groups`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.Group, this),
    );
  }

  /**
   *
   * @param userId {String}
   * @description
   * Lists the IdPs associated with the user.
   * @returns {Collection} A collection that will yield {@link IdentityProvider} instances.
   */
  listUserIdentityProviders(userId) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listUserIdentityProviders parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/idps`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.IdentityProvider, this),
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
   * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
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
   * @returns {Collection} A collection that will yield {@link ResponseLinks} instances.
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
      this.http,
      url,
      new ModelFactory(models.ResponseLinks, this),
    );
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all roles assigned to a user.
   * @returns {Collection} A collection that will yield {@link Role} instances.
   */
  listAssignedRolesForUser(userId, queryParameters) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listAssignedRolesForUser parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.Role, this),
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
   * @description
   * Gets role that is assigne to user.
   * @returns {Promise<Role>}
   */
  getUserRole(userId, roleId) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API getUserRole parameter userId is required.'));
    }
    if (!roleId) {
      return Promise.reject(new Error('OKTA API getUserRole parameter roleId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
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
   * @param userId {String}
   * @param roleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
   * @returns {Collection} A collection that will yield {@link CatalogApplication} instances.
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
      this.http,
      url,
      new ModelFactory(models.CatalogApplication, this),
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
   * @returns {Collection} A collection that will yield {@link Group} instances.
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
      this.http,
      url,
      new ModelFactory(models.Group, this),
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
   * @param userId {String}
   * @description
   * List subscriptions of a User. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
   * @returns {Collection} A collection that will yield {@link Subscription} instances.
   */
  listUserSubscriptions(userId) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API listUserSubscriptions parameter userId is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/subscriptions`;

    return new Collection(
      this.http,
      url,
      new ModelFactory(models.Subscription, this),
    );
  }

  /**
   *
   * @param userId {String}
   * @param notificationType {String}
   * @description
   * Get the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
   * @returns {Promise<Subscription>}
   */
  getUserSubscriptionByNotificationType(userId, notificationType) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API getUserSubscriptionByNotificationType parameter userId is required.'));
    }
    if (!notificationType) {
      return Promise.reject(new Error('OKTA API getUserSubscriptionByNotificationType parameter notificationType is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/subscriptions/${notificationType}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/subscriptions/${notificationType}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.getJson(
      url,
      null,
      { resources }
    );
    return request.then(jsonRes => new models.Subscription(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param notificationType {String}
   * @description
   * Subscribes a User to a specific notification type. Only the current User can subscribe to a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
   */
  subscribeUserSubscriptionByNotificationType(userId, notificationType) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API subscribeUserSubscriptionByNotificationType parameter userId is required.'));
    }
    if (!notificationType) {
      return Promise.reject(new Error('OKTA API subscribeUserSubscriptionByNotificationType parameter notificationType is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/subscriptions/${notificationType}/subscribe`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/subscriptions/${notificationType}`,
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
   * @param notificationType {String}
   * @description
   * Unsubscribes a User from a specific notification type. Only the current User can unsubscribe from a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
   */
  unsubscribeUserSubscriptionByNotificationType(userId, notificationType) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API unsubscribeUserSubscriptionByNotificationType parameter userId is required.'));
    }
    if (!notificationType) {
      return Promise.reject(new Error('OKTA API unsubscribeUserSubscriptionByNotificationType parameter notificationType is required.'));
    }
    let url = `${this.baseUrl}/api/v1/users/${userId}/subscriptions/${notificationType}/unsubscribe`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/subscriptions/${notificationType}`,
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
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @description
   * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
   * @returns {Collection} A collection that will yield {@link NetworkZone} instances.
   */
  listNetworkZones(queryParameters) {
    let after;
    let limit;
    let filter;
    if (queryParameters) {
      after = queryParameters.after;
      limit = queryParameters.limit;
      filter = queryParameters.filter;
    }
    return this.networkZoneApi.listNetworkZones(after, limit, filter);
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
    return this.networkZoneApi.createNetworkZone(networkZone);
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
    return this.networkZoneApi.deleteNetworkZone(zoneId);
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
    return this.networkZoneApi.getNetworkZone(zoneId);
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
    return this.networkZoneApi.updateNetworkZone(zoneId, networkZone);
  }

  /**
   *
   * @param zoneId {String}
   * @description
   * Activate Network Zone
   * @returns {Promise<NetworkZone>}
   */
  activateNetworkZone(zoneId) {
    if (!zoneId) {
      return Promise.reject(new Error('OKTA API activateNetworkZone parameter zoneId is required.'));
    }
    return this.networkZoneApi.activateNetworkZone(zoneId);
  }

  /**
   *
   * @param zoneId {String}
   * @description
   * Deactivates a network zone.
   * @returns {Promise<NetworkZone>}
   */
  deactivateNetworkZone(zoneId) {
    if (!zoneId) {
      return Promise.reject(new Error('OKTA API deactivateNetworkZone parameter zoneId is required.'));
    }
    return this.networkZoneApi.deactivateNetworkZone(zoneId);
  }

  _removeRestrictedModelProperties(instance, restrictedProperties) {
    const allowedProperties = Object.keys(instance).filter(propertyName => !restrictedProperties.includes(propertyName));
    return allowedProperties.reduce((properties, propertyName) => ({
      ...properties,
      [propertyName]: instance[propertyName]
    }), Object.create(null));
  }
}

module.exports = GeneratedApiClient;
