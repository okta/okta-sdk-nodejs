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
    const params = {};
    if (queryParameters) {
      params.q = queryParameters.q;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
      params.filter = queryParameters.filter;
      params.expand = queryParameters.expand;
      params.includeNonDeleted = queryParameters.includeNonDeleted;
    }
    return this.applicationApi.listApplications(params);
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
  createApplication(application, queryParameters, headerParameters) {
    if (!application) {
      return Promise.reject(new Error('OKTA API createApplication parameter application is required.'));
    }
    const params = {};
    params.application = application;
    if (queryParameters) {
      params.activate = queryParameters.activate;
    }
    if (headerParameters) {
      params.OktaAccessGateway_Agent = headerParameters.OktaAccessGateway_Agent;
    }
    return this.applicationApi.createApplication(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.deleteApplication(params);
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
    const params = {};
    params.appId = appId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.applicationApi.getApplication(params);
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
    const params = {};
    params.appId = appId;
    params.application = application;
    return this.applicationApi.updateApplication(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.getDefaultProvisioningConnectionForApplication(params);
  }

  /**
   *
   * @param appId {String}
   * @param {ProvisioningConnectionRequest} ProvisioningConnectionRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
   * Set default Provisioning Connection for application
   * @returns {Promise<ProvisioningConnection>}
   */
  setDefaultProvisioningConnectionForApplication(appId, ProvisioningConnectionRequest, queryParameters) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API setDefaultProvisioningConnectionForApplication parameter appId is required.'));
    }
    if (!ProvisioningConnectionRequest) {
      return Promise.reject(new Error('OKTA API setDefaultProvisioningConnectionForApplication parameter ProvisioningConnectionRequest is required.'));
    }
    const params = {};
    params.appId = appId;
    params.ProvisioningConnectionRequest = ProvisioningConnectionRequest;
    if (queryParameters) {
      params.activate = queryParameters.activate;
    }
    return this.applicationApi.setDefaultProvisioningConnectionForApplication(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.activateDefaultProvisioningConnectionForApplication(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.deactivateDefaultProvisioningConnectionForApplication(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.listCsrsForApplication(params);
  }

  /**
   *
   * @param appId {String}
   * @param {CsrMetadata} metadata
   * @description
   * Generates a new key pair and returns the Certificate Signing Request for it.
   * @returns {Promise<Csr>}
   */
  generateCsrForApplication(appId, metadata) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API generateCsrForApplication parameter appId is required.'));
    }
    if (!metadata) {
      return Promise.reject(new Error('OKTA API generateCsrForApplication parameter metadata is required.'));
    }
    const params = {};
    params.appId = appId;
    params.metadata = metadata;
    return this.applicationApi.generateCsrForApplication(params);
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
    const params = {};
    params.appId = appId;
    params.csrId = csrId;
    return this.applicationApi.revokeCsrFromApplication(params);
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
    const params = {};
    params.appId = appId;
    params.csrId = csrId;
    return this.applicationApi.getCsrForApplication(params);
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishCerCert(appId, csrId, body) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishCerCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishCerCert parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishCerCert parameter body is required.'));
    }
    const params = {};
    params.appId = appId;
    params.csrId = csrId;
    params.body = body;
    return this.applicationApi.publishCsrFromApplication(params);
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryCerCert(appId, csrId, body) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCert parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCert parameter body is required.'));
    }
    const params = {};
    params.appId = appId;
    params.csrId = csrId;
    params.body = body;
    return this.applicationApi.publishCsrFromApplication(params);
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishDerCert(appId, csrId, body) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishDerCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishDerCert parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishDerCert parameter body is required.'));
    }
    const params = {};
    params.appId = appId;
    params.csrId = csrId;
    params.body = body;
    return this.applicationApi.publishCsrFromApplication(params);
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryDerCert(appId, csrId, body) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCert parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCert parameter body is required.'));
    }
    const params = {};
    params.appId = appId;
    params.csrId = csrId;
    params.body = body;
    return this.applicationApi.publishCsrFromApplication(params);
  }

  /**
   *
   * @param appId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Convenience method for /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryPemCert(appId, csrId, body) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCert parameter appId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCert parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCert parameter body is required.'));
    }
    const params = {};
    params.appId = appId;
    params.csrId = csrId;
    params.body = body;
    return this.applicationApi.publishCsrFromApplication(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.listApplicationKeys(params);
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
    const params = {};
    params.appId = appId;
    if (queryParameters) {
      params.validityYears = queryParameters.validityYears;
    }
    return this.applicationApi.generateApplicationKey(params);
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
    const params = {};
    params.appId = appId;
    params.keyId = keyId;
    return this.applicationApi.getApplicationKey(params);
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
    const params = {};
    params.appId = appId;
    params.keyId = keyId;
    if (queryParameters) {
      params.targetAid = queryParameters.targetAid;
    }
    return this.applicationApi.cloneApplicationKey(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.listFeaturesForApplication(params);
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
    const params = {};
    params.appId = appId;
    params.name = name;
    return this.applicationApi.getFeatureForApplication(params);
  }

  /**
   *
   * @param appId {String}
   * @param name {String}
   * @param {CapabilitiesObject} CapabilitiesObject
   * @description
   * Updates a Feature object for an application.
   * @returns {Promise<ApplicationFeature>}
   */
  updateFeatureForApplication(appId, name, CapabilitiesObject) {
    if (!appId) {
      return Promise.reject(new Error('OKTA API updateFeatureForApplication parameter appId is required.'));
    }
    if (!name) {
      return Promise.reject(new Error('OKTA API updateFeatureForApplication parameter name is required.'));
    }
    if (!CapabilitiesObject) {
      return Promise.reject(new Error('OKTA API updateFeatureForApplication parameter CapabilitiesObject is required.'));
    }
    const params = {};
    params.appId = appId;
    params.name = name;
    params.CapabilitiesObject = CapabilitiesObject;
    return this.applicationApi.updateFeatureForApplication(params);
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
    const params = {};
    params.appId = appId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.applicationApi.listScopeConsentGrants(params);
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
    const params = {};
    params.appId = appId;
    params.oAuth2ScopeConsentGrant = oAuth2ScopeConsentGrant;
    return this.applicationApi.grantConsentToScope(params);
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
    const params = {};
    params.appId = appId;
    params.grantId = grantId;
    return this.applicationApi.revokeScopeConsentGrant(params);
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
    const params = {};
    params.appId = appId;
    params.grantId = grantId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.applicationApi.getScopeConsentGrant(params);
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
    const params = {};
    params.appId = appId;
    if (queryParameters) {
      params.q = queryParameters.q;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
      params.expand = queryParameters.expand;
    }
    return this.applicationApi.listApplicationGroupAssignments(params);
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
    const params = {};
    params.appId = appId;
    params.groupId = groupId;
    return this.applicationApi.deleteApplicationGroupAssignment(params);
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
    const params = {};
    params.appId = appId;
    params.groupId = groupId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.applicationApi.getApplicationGroupAssignment(params);
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
    const params = {};
    params.appId = appId;
    params.groupId = groupId;
    params.applicationGroupAssignment = applicationGroupAssignment;
    return this.applicationApi.createApplicationGroupAssignment(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.activateApplication(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.deactivateApplication(params);
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
    const params = {};
    params.appId = appId;
    params.file = file;
    return this.applicationApi.uploadApplicationLogo(params);
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
    const params = {};
    params.appId = appId;
    return this.applicationApi.revokeOAuth2TokensForApplication(params);
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
    const params = {};
    params.appId = appId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.applicationApi.listOAuth2TokensForApplication(params);
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
    const params = {};
    params.appId = appId;
    params.tokenId = tokenId;
    return this.applicationApi.revokeOAuth2TokenForApplication(params);
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
    const params = {};
    params.appId = appId;
    params.tokenId = tokenId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.applicationApi.getOAuth2TokenForApplication(params);
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
    const params = {};
    params.appId = appId;
    if (queryParameters) {
      params.q = queryParameters.q;
      params.query_scope = queryParameters.query_scope;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
      params.filter = queryParameters.filter;
      params.expand = queryParameters.expand;
    }
    return this.applicationApi.listApplicationUsers(params);
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
    const params = {};
    params.appId = appId;
    params.appUser = appUser;
    return this.applicationApi.assignUserToApplication(params);
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
    const params = {};
    params.appId = appId;
    params.userId = userId;
    if (queryParameters) {
      params.sendEmail = queryParameters.sendEmail;
    }
    return this.applicationApi.deleteApplicationUser(params);
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
    const params = {};
    params.appId = appId;
    params.userId = userId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.applicationApi.getApplicationUser(params);
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
    const params = {};
    params.appId = appId;
    params.userId = userId;
    params.appUser = appUser;
    return this.applicationApi.updateApplicationUser(params);
  }

  /**
   *
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link Authenticator} instances.
   */
  listAuthenticators() {
    const params = {};
    return this.authenticatorApi.listAuthenticators(params);
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
    const params = {};
    params.authenticatorId = authenticatorId;
    return this.authenticatorApi.getAuthenticator(params);
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
    const params = {};
    params.authenticatorId = authenticatorId;
    params.authenticator = authenticator;
    return this.authenticatorApi.updateAuthenticator(params);
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
    const params = {};
    params.authenticatorId = authenticatorId;
    return this.authenticatorApi.activateAuthenticator(params);
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
    const params = {};
    params.authenticatorId = authenticatorId;
    return this.authenticatorApi.deactivateAuthenticator(params);
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
    const params = {};
    if (queryParameters) {
      params.q = queryParameters.q;
      params.limit = queryParameters.limit;
      params.after = queryParameters.after;
    }
    return this.authorizationServerApi.listAuthorizationServers(params);
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
    const params = {};
    params.authorizationServer = authorizationServer;
    return this.authorizationServerApi.createAuthorizationServer(params);
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
    const params = {};
    params.authServerId = authServerId;
    return this.authorizationServerApi.deleteAuthorizationServer(params);
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
    const params = {};
    params.authServerId = authServerId;
    return this.authorizationServerApi.getAuthorizationServer(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.authorizationServer = authorizationServer;
    return this.authorizationServerApi.updateAuthorizationServer(params);
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
    const params = {};
    params.authServerId = authServerId;
    return this.authorizationServerApi.listOAuth2Claims(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.oAuth2Claim = oAuth2Claim;
    return this.authorizationServerApi.createOAuth2Claim(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.claimId = claimId;
    return this.authorizationServerApi.deleteOAuth2Claim(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.claimId = claimId;
    return this.authorizationServerApi.getOAuth2Claim(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.claimId = claimId;
    params.oAuth2Claim = oAuth2Claim;
    return this.authorizationServerApi.updateOAuth2Claim(params);
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
    const params = {};
    params.authServerId = authServerId;
    return this.authorizationServerApi.listOAuth2ClientsForAuthorizationServer(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.clientId = clientId;
    return this.authorizationServerApi.revokeRefreshTokensForAuthorizationServerAndClient(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.clientId = clientId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.authorizationServerApi.listRefreshTokensForAuthorizationServerAndClient(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.clientId = clientId;
    params.tokenId = tokenId;
    return this.authorizationServerApi.revokeRefreshTokenForAuthorizationServerAndClient(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.clientId = clientId;
    params.tokenId = tokenId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.authorizationServerApi.getRefreshTokenForAuthorizationServerAndClient(params);
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
    const params = {};
    params.authServerId = authServerId;
    return this.authorizationServerApi.listAuthorizationServerKeys(params);
  }

  /**
   *
   * @param authServerId {String}
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link JsonWebKey} instances.
   */
  rotateAuthorizationServerKeys(authServerId, use) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API rotateAuthorizationServerKeys parameter authServerId is required.'));
    }
    if (!use) {
      return Promise.reject(new Error('OKTA API rotateAuthorizationServerKeys parameter use is required.'));
    }
    const params = {};
    params.authServerId = authServerId;
    params.use = use;
    return this.authorizationServerApi.rotateAuthorizationServerKeys(params);
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
    const params = {};
    params.authServerId = authServerId;
    return this.authorizationServerApi.activateAuthorizationServer(params);
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
    const params = {};
    params.authServerId = authServerId;
    return this.authorizationServerApi.deactivateAuthorizationServer(params);
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
    const params = {};
    params.authServerId = authServerId;
    return this.authorizationServerApi.listAuthorizationServerPolicies(params);
  }

  /**
   *
   * @param authServerId {String}
   * @param {AuthorizationServerPolicy} policy
   * @description
   * Success
   * @returns {Promise<AuthorizationServerPolicy>}
   */
  createAuthorizationServerPolicy(authServerId, policy) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicy parameter authServerId is required.'));
    }
    if (!policy) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicy parameter policy is required.'));
    }
    const params = {};
    params.authServerId = authServerId;
    params.policy = policy;
    return this.authorizationServerApi.createAuthorizationServerPolicy(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.policyId = policyId;
    return this.authorizationServerApi.deleteAuthorizationServerPolicy(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.policyId = policyId;
    return this.authorizationServerApi.getAuthorizationServerPolicy(params);
  }

  /**
   *
   * @param authServerId {String}
   * @param policyId {String}
   * @param {AuthorizationServerPolicy} policy
   * @description
   * Success
   * @returns {Promise<AuthorizationServerPolicy>}
   */
  updateAuthorizationServerPolicy(authServerId, policyId, policy) {
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicy parameter authServerId is required.'));
    }
    if (!policyId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicy parameter policyId is required.'));
    }
    if (!policy) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicy parameter policy is required.'));
    }
    const params = {};
    params.authServerId = authServerId;
    params.policyId = policyId;
    params.policy = policy;
    return this.authorizationServerApi.updateAuthorizationServerPolicy(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.policyId = policyId;
    return this.authorizationServerApi.activateAuthorizationServerPolicy(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.policyId = policyId;
    return this.authorizationServerApi.deactivateAuthorizationServerPolicy(params);
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
    const params = {};
    params.policyId = policyId;
    params.authServerId = authServerId;
    return this.authorizationServerApi.listAuthorizationServerPolicyRules(params);
  }

  /**
   *
   * @param policyId {String}
   * @param authServerId {String}
   * @param {AuthorizationServerPolicyRule} policyRule
   * @description
   * Creates a policy rule for the specified Custom Authorization Server and Policy.
   * @returns {Promise<AuthorizationServerPolicyRule>}
   */
  createAuthorizationServerPolicyRule(policyId, authServerId, policyRule) {
    if (!policyId) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicyRule parameter policyId is required.'));
    }
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicyRule parameter authServerId is required.'));
    }
    if (!policyRule) {
      return Promise.reject(new Error('OKTA API createAuthorizationServerPolicyRule parameter policyRule is required.'));
    }
    const params = {};
    params.policyId = policyId;
    params.authServerId = authServerId;
    params.policyRule = policyRule;
    return this.authorizationServerApi.createAuthorizationServerPolicyRule(params);
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
    const params = {};
    params.policyId = policyId;
    params.authServerId = authServerId;
    params.ruleId = ruleId;
    return this.authorizationServerApi.deleteAuthorizationServerPolicyRule(params);
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
    const params = {};
    params.policyId = policyId;
    params.authServerId = authServerId;
    params.ruleId = ruleId;
    return this.authorizationServerApi.getAuthorizationServerPolicyRule(params);
  }

  /**
   *
   * @param policyId {String}
   * @param authServerId {String}
   * @param ruleId {String}
   * @param {AuthorizationServerPolicyRule} policyRule
   * @description
   * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
   * @returns {Promise<AuthorizationServerPolicyRule>}
   */
  updateAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule) {
    if (!policyId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicyRule parameter policyId is required.'));
    }
    if (!authServerId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicyRule parameter authServerId is required.'));
    }
    if (!ruleId) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicyRule parameter ruleId is required.'));
    }
    if (!policyRule) {
      return Promise.reject(new Error('OKTA API updateAuthorizationServerPolicyRule parameter policyRule is required.'));
    }
    const params = {};
    params.policyId = policyId;
    params.authServerId = authServerId;
    params.ruleId = ruleId;
    params.policyRule = policyRule;
    return this.authorizationServerApi.updateAuthorizationServerPolicyRule(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.policyId = policyId;
    params.ruleId = ruleId;
    return this.authorizationServerApi.activateAuthorizationServerPolicyRule(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.policyId = policyId;
    params.ruleId = ruleId;
    return this.authorizationServerApi.deactivateAuthorizationServerPolicyRule(params);
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
    const params = {};
    params.authServerId = authServerId;
    if (queryParameters) {
      params.q = queryParameters.q;
      params.filter = queryParameters.filter;
      params.cursor = queryParameters.cursor;
      params.limit = queryParameters.limit;
    }
    return this.authorizationServerApi.listOAuth2Scopes(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.oAuth2Scope = oAuth2Scope;
    return this.authorizationServerApi.createOAuth2Scope(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.scopeId = scopeId;
    return this.authorizationServerApi.deleteOAuth2Scope(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.scopeId = scopeId;
    return this.authorizationServerApi.getOAuth2Scope(params);
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
    const params = {};
    params.authServerId = authServerId;
    params.scopeId = scopeId;
    params.oAuth2Scope = oAuth2Scope;
    return this.authorizationServerApi.updateOAuth2Scope(params);
  }

  /**
   *
   * @description
   * List all the brands in your org.
   * @returns {Collection} A collection that will yield {@link Brand} instances.
   */
  listBrands() {
    const params = {};
    return this.customizationApi.listBrands(params);
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
    const params = {};
    params.brandId = brandId;
    return this.customizationApi.getBrand(params);
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
    const params = {};
    params.brandId = brandId;
    params.brand = brand;
    return this.customizationApi.updateBrand(params);
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
    const params = {};
    params.brandId = brandId;
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.customizationApi.listEmailTemplates(params);
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
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    return this.customizationApi.getEmailTemplate(params);
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
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    return this.customizationApi.deleteAllCustomizations(params);
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
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    return this.customizationApi.listEmailCustomizations(params);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @param {EmailCustomization} instance
   * @description
   * Create an email customization
   * @returns {Promise<EmailTemplateCustomization>}
   */
  createEmailTemplateCustomization(brandId, templateName, instance) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API createEmailTemplateCustomization parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API createEmailTemplateCustomization parameter templateName is required.'));
    }
    if (!instance) {
      return Promise.reject(new Error('OKTA API createEmailTemplateCustomization parameter instance is required.'));
    }
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    params.instance = instance;
    return this.customizationApi.createEmailCustomization(params);
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
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    params.customizationId = customizationId;
    return this.customizationApi.deleteEmailCustomization(params);
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
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    params.customizationId = customizationId;
    return this.customizationApi.getEmailCustomization(params);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @param customizationId {String}
   * @param {EmailCustomization} instance
   * @description
   * Update an email customization
   * @returns {Promise<EmailTemplateCustomization>}
   */
  updateEmailTemplateCustomization(brandId, templateName, customizationId, instance) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API updateEmailTemplateCustomization parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API updateEmailTemplateCustomization parameter templateName is required.'));
    }
    if (!customizationId) {
      return Promise.reject(new Error('OKTA API updateEmailTemplateCustomization parameter customizationId is required.'));
    }
    if (!instance) {
      return Promise.reject(new Error('OKTA API updateEmailTemplateCustomization parameter instance is required.'));
    }
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    params.customizationId = customizationId;
    params.instance = instance;
    return this.customizationApi.updateEmailCustomization(params);
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
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    params.customizationId = customizationId;
    return this.customizationApi.getCustomizationPreview(params);
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
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    return this.customizationApi.getEmailDefaultContent(params);
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
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    return this.customizationApi.getEmailDefaultPreview(params);
  }

  /**
   *
   * @param brandId {String}
   * @param templateName {String}
   * @param {string} language
   * @description
   * Send a test email to the current users primary and secondary email addresses. The email content is selected based on the following priority: An email customization specifically for the users locale. The default language of email customizations. The email templates default content.
   */
  sendTestEmail(brandId, templateName, language) {
    if (!brandId) {
      return Promise.reject(new Error('OKTA API sendTestEmail parameter brandId is required.'));
    }
    if (!templateName) {
      return Promise.reject(new Error('OKTA API sendTestEmail parameter templateName is required.'));
    }
    if (!language) {
      return Promise.reject(new Error('OKTA API sendTestEmail parameter language is required.'));
    }
    const params = {};
    params.brandId = brandId;
    params.templateName = templateName;
    params.language = language;
    return this.customizationApi.sendTestEmail(params);
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
    const params = {};
    params.brandId = brandId;
    return this.customizationApi.listBrandThemes(params);
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
    const params = {};
    params.brandId = brandId;
    params.themeId = themeId;
    return this.customizationApi.getBrandTheme(params);
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
    const params = {};
    params.brandId = brandId;
    params.themeId = themeId;
    params.theme = theme;
    return this.customizationApi.updateBrandTheme(params);
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
    const params = {};
    params.brandId = brandId;
    params.themeId = themeId;
    return this.customizationApi.deleteBrandThemeBackgroundImage(params);
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
    const params = {};
    params.brandId = brandId;
    params.themeId = themeId;
    params.file = file;
    return this.customizationApi.uploadBrandThemeBackgroundImage(params);
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
    const params = {};
    params.brandId = brandId;
    params.themeId = themeId;
    return this.customizationApi.deleteBrandThemeFavicon(params);
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
    const params = {};
    params.brandId = brandId;
    params.themeId = themeId;
    params.file = file;
    return this.customizationApi.uploadBrandThemeFavicon(params);
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
    const params = {};
    params.brandId = brandId;
    params.themeId = themeId;
    return this.customizationApi.deleteBrandThemeLogo(params);
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
    const params = {};
    params.brandId = brandId;
    params.themeId = themeId;
    params.file = file;
    return this.customizationApi.uploadBrandThemeLogo(params);
  }

  /**
   *
   * @description
   * List all verified custom Domains for the org.
   * @returns {Promise<DomainListResponse>}
   */
  listDomains() {
    const params = {};
    return this.domainApi.listDomains(params);
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
    const params = {};
    params.domain = domain;
    return this.domainApi.createDomain(params);
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
    const params = {};
    params.domainId = domainId;
    return this.domainApi.deleteDomain(params);
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
    const params = {};
    params.domainId = domainId;
    return this.domainApi.getDomain(params);
  }

  /**
   *
   * @param domainId {String}
   * @param {DomainCertificate} certificate
   * @description
   * Creates the Certificate for the Domain.
   */
  createCertificate(domainId, certificate) {
    if (!domainId) {
      return Promise.reject(new Error('OKTA API createCertificate parameter domainId is required.'));
    }
    if (!certificate) {
      return Promise.reject(new Error('OKTA API createCertificate parameter certificate is required.'));
    }
    const params = {};
    params.domainId = domainId;
    params.certificate = certificate;
    return this.domainApi.createCertificate(params);
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
    const params = {};
    params.domainId = domainId;
    return this.domainApi.verifyDomain(params);
  }

  /**
   *
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link EventHook} instances.
   */
  listEventHooks() {
    const params = {};
    return this.eventHookApi.listEventHooks(params);
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
    const params = {};
    params.eventHook = eventHook;
    return this.eventHookApi.createEventHook(params);
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
    const params = {};
    params.eventHookId = eventHookId;
    return this.eventHookApi.deleteEventHook(params);
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
    const params = {};
    params.eventHookId = eventHookId;
    return this.eventHookApi.getEventHook(params);
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
    const params = {};
    params.eventHookId = eventHookId;
    params.eventHook = eventHook;
    return this.eventHookApi.updateEventHook(params);
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
    const params = {};
    params.eventHookId = eventHookId;
    return this.eventHookApi.activateEventHook(params);
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
    const params = {};
    params.eventHookId = eventHookId;
    return this.eventHookApi.deactivateEventHook(params);
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
    const params = {};
    params.eventHookId = eventHookId;
    return this.eventHookApi.verifyEventHook(params);
  }

  /**
   *
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link Feature} instances.
   */
  listFeatures() {
    const params = {};
    return this.featureApi.listFeatures(params);
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
    const params = {};
    params.featureId = featureId;
    return this.featureApi.getFeature(params);
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
    const params = {};
    params.featureId = featureId;
    return this.featureApi.listFeatureDependencies(params);
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
    const params = {};
    params.featureId = featureId;
    return this.featureApi.listFeatureDependents(params);
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
    const params = {};
    params.featureId = featureId;
    params.lifecycle = lifecycle;
    if (queryParameters) {
      params.mode = queryParameters.mode;
    }
    return this.featureApi.updateFeatureLifecycle(params);
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
    const params = {};
    if (queryParameters) {
      params.q = queryParameters.q;
      params.filter = queryParameters.filter;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
      params.expand = queryParameters.expand;
      params.search = queryParameters.search;
    }
    return this.groupApi.listGroups(params);
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
    const params = {};
    params.group = group;
    return this.groupApi.createGroup(params);
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
    const params = {};
    if (queryParameters) {
      params.limit = queryParameters.limit;
      params.after = queryParameters.after;
      params.search = queryParameters.search;
      params.expand = queryParameters.expand;
    }
    return this.groupApi.listGroupRules(params);
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
    const params = {};
    params.groupRule = groupRule;
    return this.groupApi.createGroupRule(params);
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
    const params = {};
    params.ruleId = ruleId;
    if (queryParameters) {
      params.removeUsers = queryParameters.removeUsers;
    }
    return this.groupApi.deleteGroupRule(params);
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
    const params = {};
    params.ruleId = ruleId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.groupApi.getGroupRule(params);
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
    const params = {};
    params.ruleId = ruleId;
    params.groupRule = groupRule;
    return this.groupApi.updateGroupRule(params);
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
    const params = {};
    params.ruleId = ruleId;
    return this.groupApi.activateGroupRule(params);
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
    const params = {};
    params.ruleId = ruleId;
    return this.groupApi.deactivateGroupRule(params);
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
    const params = {};
    params.groupId = groupId;
    return this.groupApi.deleteGroup(params);
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
    const params = {};
    params.groupId = groupId;
    return this.groupApi.getGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.group = group;
    return this.groupApi.updateGroup(params);
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
    const params = {};
    params.groupId = groupId;
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.groupApi.listAssignedApplicationsForGroup(params);
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
    const params = {};
    params.groupId = groupId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.roleAssignmentApi.listGroupAssignedRoles(params);
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
    const params = {};
    params.groupId = groupId;
    params.assignRoleRequest = assignRoleRequest;
    if (queryParameters) {
      params.disableNotifications = queryParameters.disableNotifications;
    }
    return this.roleAssignmentApi.assignRoleToGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    return this.roleAssignmentApi.unassignRoleFromGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    return this.groupApi.getRole(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.roleTargetApi.listApplicationTargetsForApplicationAdministratorRoleForGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    params.appName = appName;
    return this.groupApi.removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    params.appName = appName;
    return this.groupApi.addApplicationTargetToAdminRoleGivenToGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    params.appName = appName;
    params.applicationId = applicationId;
    return this.groupApi.removeApplicationTargetFromAdministratorRoleGivenToGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    params.appName = appName;
    params.applicationId = applicationId;
    return this.groupApi.addApplicationInstanceTargetToAppAdminRoleGivenToGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.groupApi.listGroupTargetsForGroupRole(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    params.targetGroupId = targetGroupId;
    return this.groupApi.removeGroupTargetFromGroupAdministratorRoleGivenToGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.roleId = roleId;
    params.targetGroupId = targetGroupId;
    return this.groupApi.addGroupTargetToGroupAdministratorRoleForGroup(params);
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
    const params = {};
    params.groupId = groupId;
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.groupApi.listGroupUsers(params);
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
    const params = {};
    params.groupId = groupId;
    params.userId = userId;
    return this.groupApi.removeUserFromGroup(params);
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
    const params = {};
    params.groupId = groupId;
    params.userId = userId;
    return this.groupApi.addUserToGroup(params);
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
    const params = {};
    if (queryParameters) {
      params.q = queryParameters.q;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
      params.type = queryParameters.type;
    }
    return this.identityProviderApi.listIdentityProviders(params);
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
    const params = {};
    params.identityProvider = identityProvider;
    return this.identityProviderApi.createIdentityProvider(params);
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
    const params = {};
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.identityProviderApi.listIdentityProviderKeys(params);
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
    const params = {};
    params.jsonWebKey = jsonWebKey;
    return this.identityProviderApi.createIdentityProviderKey(params);
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
    const params = {};
    params.keyId = keyId;
    return this.identityProviderApi.deleteIdentityProviderKey(params);
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
    const params = {};
    params.keyId = keyId;
    return this.identityProviderApi.getIdentityProviderKey(params);
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
    const params = {};
    params.idpId = idpId;
    return this.identityProviderApi.deleteIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    return this.identityProviderApi.getIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    params.identityProvider = identityProvider;
    return this.identityProviderApi.updateIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    return this.identityProviderApi.listCsrsForIdentityProvider(params);
  }

  /**
   *
   * @param idpId {String}
   * @param {CsrMetadata} metadata
   * @description
   * Generates a new key pair and returns a Certificate Signing Request for it.
   * @returns {Promise<Csr>}
   */
  generateCsrForIdentityProvider(idpId, metadata) {
    if (!idpId) {
      return Promise.reject(new Error('OKTA API generateCsrForIdentityProvider parameter idpId is required.'));
    }
    if (!metadata) {
      return Promise.reject(new Error('OKTA API generateCsrForIdentityProvider parameter metadata is required.'));
    }
    const params = {};
    params.idpId = idpId;
    params.metadata = metadata;
    return this.identityProviderApi.generateCsrForIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    params.csrId = csrId;
    return this.identityProviderApi.revokeCsrForIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    params.csrId = csrId;
    return this.identityProviderApi.getCsrForIdentityProvider(params);
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishCerCertForIdentityProvider(idpId, csrId, body) {
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishCerCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishCerCertForIdentityProvider parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishCerCertForIdentityProvider parameter body is required.'));
    }
    const params = {};
    params.idpId = idpId;
    params.csrId = csrId;
    params.body = body;
    return this.identityProviderApi.publishCsrForIdentityProvider(params);
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryCerCertForIdentityProvider(idpId, csrId, body) {
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCertForIdentityProvider parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishBinaryCerCertForIdentityProvider parameter body is required.'));
    }
    const params = {};
    params.idpId = idpId;
    params.csrId = csrId;
    params.body = body;
    return this.identityProviderApi.publishCsrForIdentityProvider(params);
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishDerCertForIdentityProvider(idpId, csrId, body) {
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishDerCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishDerCertForIdentityProvider parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishDerCertForIdentityProvider parameter body is required.'));
    }
    const params = {};
    params.idpId = idpId;
    params.csrId = csrId;
    params.body = body;
    return this.identityProviderApi.publishCsrForIdentityProvider(params);
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryDerCertForIdentityProvider(idpId, csrId, body) {
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCertForIdentityProvider parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishBinaryDerCertForIdentityProvider parameter body is required.'));
    }
    const params = {};
    params.idpId = idpId;
    params.csrId = csrId;
    params.body = body;
    return this.identityProviderApi.publishCsrForIdentityProvider(params);
  }

  /**
   *
   * @param idpId {String}
   * @param csrId {String}
   * @param {string} body
   * @description
   * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
   * @returns {Promise<JsonWebKey>}
   */
  publishBinaryPemCertForIdentityProvider(idpId, csrId, body) {
    if (!idpId) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCertForIdentityProvider parameter idpId is required.'));
    }
    if (!csrId) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCertForIdentityProvider parameter csrId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API publishBinaryPemCertForIdentityProvider parameter body is required.'));
    }
    const params = {};
    params.idpId = idpId;
    params.csrId = csrId;
    params.body = body;
    return this.identityProviderApi.publishCsrForIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    return this.identityProviderApi.listIdentityProviderSigningKeys(params);
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
    const params = {};
    params.idpId = idpId;
    if (queryParameters) {
      params.validityYears = queryParameters.validityYears;
    }
    return this.identityProviderApi.generateIdentityProviderSigningKey(params);
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
    const params = {};
    params.idpId = idpId;
    params.keyId = keyId;
    return this.identityProviderApi.getIdentityProviderSigningKey(params);
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
    const params = {};
    params.idpId = idpId;
    params.keyId = keyId;
    if (queryParameters) {
      params.targetIdpId = queryParameters.targetIdpId;
    }
    return this.identityProviderApi.cloneIdentityProviderKey(params);
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
    const params = {};
    params.idpId = idpId;
    return this.identityProviderApi.activateIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    return this.identityProviderApi.deactivateIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    return this.identityProviderApi.listIdentityProviderApplicationUsers(params);
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
    const params = {};
    params.idpId = idpId;
    params.userId = userId;
    return this.identityProviderApi.unlinkUserFromIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    params.userId = userId;
    return this.identityProviderApi.getIdentityProviderApplicationUser(params);
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
    const params = {};
    params.idpId = idpId;
    params.userId = userId;
    params.userIdentityProviderLinkRequest = userIdentityProviderLinkRequest;
    return this.identityProviderApi.linkUserToIdentityProvider(params);
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
    const params = {};
    params.idpId = idpId;
    params.userId = userId;
    return this.identityProviderApi.listSocialAuthTokens(params);
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
    const params = {};
    if (queryParameters) {
      params.type = queryParameters.type;
    }
    return this.inlineHookApi.listInlineHooks(params);
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
    const params = {};
    params.inlineHook = inlineHook;
    return this.inlineHookApi.createInlineHook(params);
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
    const params = {};
    params.inlineHookId = inlineHookId;
    return this.inlineHookApi.deleteInlineHook(params);
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
    const params = {};
    params.inlineHookId = inlineHookId;
    return this.inlineHookApi.getInlineHook(params);
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
    const params = {};
    params.inlineHookId = inlineHookId;
    params.inlineHook = inlineHook;
    return this.inlineHookApi.updateInlineHook(params);
  }

  /**
   *
   * @param inlineHookId {String}
   * @param {InlineHookPayload} payloadData
   * @description
   * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
   * @returns {Promise<InlineHookResponse>}
   */
  executeInlineHook(inlineHookId, payloadData) {
    if (!inlineHookId) {
      return Promise.reject(new Error('OKTA API executeInlineHook parameter inlineHookId is required.'));
    }
    if (!payloadData) {
      return Promise.reject(new Error('OKTA API executeInlineHook parameter payloadData is required.'));
    }
    const params = {};
    params.inlineHookId = inlineHookId;
    params.payloadData = payloadData;
    return this.inlineHookApi.executeInlineHook(params);
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
    const params = {};
    params.inlineHookId = inlineHookId;
    return this.inlineHookApi.activateInlineHook(params);
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
    const params = {};
    params.inlineHookId = inlineHookId;
    return this.inlineHookApi.deactivateInlineHook(params);
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
    const params = {};
    if (queryParameters) {
      params.since = queryParameters.since;
      params.until = queryParameters.until;
      params.filter = queryParameters.filter;
      params.q = queryParameters.q;
      params.limit = queryParameters.limit;
      params.sortOrder = queryParameters.sortOrder;
      params.after = queryParameters.after;
    }
    return this.systemLogApi.getLogs(params);
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
    const params = {};
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
      params.sourceId = queryParameters.sourceId;
      params.targetId = queryParameters.targetId;
    }
    return this.profileMappingApi.listProfileMappings(params);
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
    const params = {};
    params.mappingId = mappingId;
    return this.profileMappingApi.getProfileMapping(params);
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
    const params = {};
    params.mappingId = mappingId;
    params.profileMapping = profileMapping;
    return this.profileMappingApi.updateProfileMapping(params);
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
    const params = {};
    params.appInstanceId = appInstanceId;
    return this.schemaApi.getApplicationUserSchema(params);
  }

  /**
   *
   * @param appInstanceId {String}
   * @param {UserSchema} body
   * @description
   * Partial updates on the User Profile properties of the Application User Schema.
   * @returns {Promise<UserSchema>}
   */
  updateApplicationUserProfile(appInstanceId, body) {
    if (!appInstanceId) {
      return Promise.reject(new Error('OKTA API updateApplicationUserProfile parameter appInstanceId is required.'));
    }
    const params = {};
    params.appInstanceId = appInstanceId;
    params.body = body;
    return this.schemaApi.updateApplicationUserProfile(params);
  }

  /**
   *
   * @description
   * Fetches the group schema
   * @returns {Promise<GroupSchema>}
   */
  getGroupSchema() {
    const params = {};
    return this.schemaApi.getGroupSchema(params);
  }

  /**
   *
   * @param {GroupSchema} GroupSchema
   * @description
   * Updates, adds ore removes one or more custom Group Profile properties in the schema
   * @returns {Promise<GroupSchema>}
   */
  updateGroupSchema(GroupSchema) {
    const params = {};
    params.GroupSchema = GroupSchema;
    return this.schemaApi.updateGroupSchema(params);
  }

  /**
   *
   * @description
   * Success
   * @returns {Collection} A collection that will yield {@link LinkedObject} instances.
   */
  listLinkedObjectDefinitions() {
    const params = {};
    return this.linkedObjectApi.listLinkedObjectDefinitions(params);
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
    const params = {};
    params.linkedObject = linkedObject;
    return this.linkedObjectApi.addLinkedObjectDefinition(params);
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
    const params = {};
    params.linkedObjectName = linkedObjectName;
    return this.linkedObjectApi.deleteLinkedObjectDefinition(params);
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
    const params = {};
    params.linkedObjectName = linkedObjectName;
    return this.linkedObjectApi.getLinkedObjectDefinition(params);
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
    const params = {};
    params.schemaId = schemaId;
    return this.schemaApi.getUserSchema(params);
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
    const params = {};
    params.schemaId = schemaId;
    params.userSchema = userSchema;
    return this.schemaApi.updateUserProfile(params);
  }

  /**
   *
   * @description
   * Fetches all User Types in your org
   * @returns {Collection} A collection that will yield {@link UserType} instances.
   */
  listUserTypes() {
    const params = {};
    return this.userTypeApi.listUserTypes(params);
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
    const params = {};
    params.userType = userType;
    return this.userTypeApi.createUserType(params);
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
    const params = {};
    params.typeId = typeId;
    return this.userTypeApi.deleteUserType(params);
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
    const params = {};
    params.typeId = typeId;
    return this.userTypeApi.getUserType(params);
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
    const params = {};
    params.typeId = typeId;
    params.userType = userType;
    return this.userTypeApi.updateUserType(params);
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
    const params = {};
    params.typeId = typeId;
    params.userType = userType;
    return this.userTypeApi.replaceUserType(params);
  }

  /**
   *
   * @description
   * Get settings of your organization.
   * @returns {Promise<OrgSetting>}
   */
  getOrgSettings() {
    const params = {};
    return this.orgSettingApi.getOrgSettings(params);
  }

  /**
   *
   * @param {OrgSetting} OrgSetting
   * @description
   * Partial update settings of your organization.
   * @returns {Promise<OrgSetting>}
   */
  partialUpdateOrgSetting(OrgSetting) {
    if (!OrgSetting) {
      return Promise.reject(new Error('OKTA API partialUpdateOrgSetting parameter OrgSetting is required.'));
    }
    const params = {};
    params.OrgSetting = OrgSetting;
    return this.orgSettingApi.partialUpdateOrgSetting(params);
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
    const params = {};
    params.orgSetting = orgSetting;
    return this.orgSettingApi.updateOrgSetting(params);
  }

  /**
   *
   * @description
   * Gets Contact Types of your organization.
   * @returns {Collection} A collection that will yield {@link OrgContactTypeObj} instances.
   */
  getOrgContactTypes() {
    const params = {};
    return this.orgSettingApi.getOrgContactTypes(params);
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
    const params = {};
    params.contactType = contactType;
    return this.orgSettingApi.getOrgContactUser(params);
  }

  /**
   *
   * @param contactType {String}
   * @param {OrgContactUser} orgContactUser
   * @description
   * Updates the User associated with the specified Contact Type.
   * @returns {Promise<OrgContactUser>}
   */
  updateOrgContactUser(contactType, orgContactUser) {
    if (!contactType) {
      return Promise.reject(new Error('OKTA API updateOrgContactUser parameter contactType is required.'));
    }
    if (!orgContactUser) {
      return Promise.reject(new Error('OKTA API updateOrgContactUser parameter orgContactUser is required.'));
    }
    const params = {};
    params.contactType = contactType;
    params.orgContactUser = orgContactUser;
    return this.orgSettingApi.updateOrgContactUser(params);
  }

  /**
   *
   * @param {file} fs.ReadStream
   * @description
   * Updates the logo for your organization.
   */
  updateOrgLogo(file) {
    const params = {};
    params.file = file;
    return this.orgSettingApi.updateOrgLogo(params);
  }

  /**
   *
   * @description
   * Gets preferences of your organization.
   * @returns {Promise<OrgPreferences>}
   */
  getOrgPreferences() {
    const params = {};
    return this.orgSettingApi.getOrgPreferences(params);
  }

  /**
   *
   * @description
   * Hide the Okta UI footer for all end users of your organization.
   * @returns {Promise<OrgPreferences>}
   */
  hideOktaUIFooter() {
    const params = {};
    return this.orgSettingApi.hideOktaUIFooter(params);
  }

  /**
   *
   * @description
   * Makes the Okta UI footer visible for all end users of your organization.
   * @returns {Promise<OrgPreferences>}
   */
  showOktaUIFooter() {
    const params = {};
    return this.orgSettingApi.showOktaUIFooter(params);
  }

  /**
   *
   * @description
   * Gets Okta Communication Settings of your organization.
   * @returns {Promise<OrgOktaCommunicationSetting>}
   */
  getOktaCommunicationSettings() {
    const params = {};
    return this.orgSettingApi.getOktaCommunicationSettings(params);
  }

  /**
   *
   * @description
   * Opts in all users of this org to Okta Communication emails.
   * @returns {Promise<OrgOktaCommunicationSetting>}
   */
  optInUsersToOktaCommunicationEmails() {
    const params = {};
    return this.orgSettingApi.optInUsersToOktaCommunicationEmails(params);
  }

  /**
   *
   * @description
   * Opts out all users of this org from Okta Communication emails.
   * @returns {Promise<OrgOktaCommunicationSetting>}
   */
  optOutUsersFromOktaCommunicationEmails() {
    const params = {};
    return this.orgSettingApi.optOutUsersFromOktaCommunicationEmails(params);
  }

  /**
   *
   * @description
   * Gets Okta Support Settings of your organization.
   * @returns {Promise<OrgOktaSupportSettingsObj>}
   */
  getOrgOktaSupportSettings() {
    const params = {};
    return this.orgSettingApi.getOrgOktaSupportSettings(params);
  }

  /**
   *
   * @description
   * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
   * @returns {Promise<OrgOktaSupportSettingsObj>}
   */
  extendOktaSupport() {
    const params = {};
    return this.orgSettingApi.extendOktaSupport(params);
  }

  /**
   *
   * @description
   * Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.
   * @returns {Promise<OrgOktaSupportSettingsObj>}
   */
  grantOktaSupport() {
    const params = {};
    return this.orgSettingApi.grantOktaSupport(params);
  }

  /**
   *
   * @description
   * Revokes Okta Support access to your organization.
   * @returns {Promise<OrgOktaSupportSettingsObj>}
   */
  revokeOktaSupport() {
    const params = {};
    return this.orgSettingApi.revokeOktaSupport(params);
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
    const params = {};
    if (queryParameters) {
      params.type = queryParameters.type;
      params.status = queryParameters.status;
      params.expand = queryParameters.expand;
    }
    return this.policyApi.listPolicies(params);
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
    const params = {};
    params.policy = policy;
    if (queryParameters) {
      params.activate = queryParameters.activate;
    }
    return this.policyApi.createPolicy(params);
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
    const params = {};
    params.policyId = policyId;
    return this.policyApi.deletePolicy(params);
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
    const params = {};
    params.policyId = policyId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.policyApi.getPolicy(params);
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
    const params = {};
    params.policyId = policyId;
    params.policy = policy;
    return this.policyApi.updatePolicy(params);
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
    const params = {};
    params.policyId = policyId;
    return this.policyApi.activatePolicy(params);
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
    const params = {};
    params.policyId = policyId;
    return this.policyApi.deactivatePolicy(params);
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
    const params = {};
    params.policyId = policyId;
    return this.policyApi.listPolicyRules(params);
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
    const params = {};
    params.policyId = policyId;
    params.policyRule = policyRule;
    return this.policyApi.createPolicyRule(params);
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
    const params = {};
    params.policyId = policyId;
    params.ruleId = ruleId;
    return this.policyApi.deletePolicyRule(params);
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
    const params = {};
    params.policyId = policyId;
    params.ruleId = ruleId;
    return this.policyApi.getPolicyRule(params);
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
    const params = {};
    params.policyId = policyId;
    params.ruleId = ruleId;
    params.policyRule = policyRule;
    return this.policyApi.updatePolicyRule(params);
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
    const params = {};
    params.policyId = policyId;
    params.ruleId = ruleId;
    return this.policyApi.activatePolicyRule(params);
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
    const params = {};
    params.policyId = policyId;
    params.ruleId = ruleId;
    return this.policyApi.deactivatePolicyRule(params);
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
    const params = {};
    params.roleTypeOrRoleId = roleTypeOrRoleId;
    return this.subscriptionApi.listRoleSubscriptions(params);
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
    const params = {};
    params.roleTypeOrRoleId = roleTypeOrRoleId;
    params.notificationType = notificationType;
    return this.subscriptionApi.listRoleSubscriptionsByNotificationType(params);
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
    const params = {};
    params.roleTypeOrRoleId = roleTypeOrRoleId;
    params.notificationType = notificationType;
    return this.subscriptionApi.subscribeRoleSubscriptionByNotificationType(params);
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
    const params = {};
    params.roleTypeOrRoleId = roleTypeOrRoleId;
    params.notificationType = notificationType;
    return this.subscriptionApi.unsubscribeRoleSubscriptionByNotificationType(params);
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
    const params = {};
    params.createSessionRequest = createSessionRequest;
    return this.sessionApi.createSession(params);
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
    const params = {};
    params.sessionId = sessionId;
    return this.sessionApi.endSession(params);
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
    const params = {};
    params.sessionId = sessionId;
    return this.sessionApi.getSession(params);
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
    const params = {};
    params.sessionId = sessionId;
    return this.sessionApi.refreshSession(params);
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
    const params = {};
    if (queryParameters) {
      params.templateType = queryParameters.templateType;
    }
    return this.templateApi.listSmsTemplates(params);
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
    const params = {};
    params.smsTemplate = smsTemplate;
    return this.templateApi.createSmsTemplate(params);
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
    const params = {};
    params.templateId = templateId;
    return this.templateApi.deleteSmsTemplate(params);
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
    const params = {};
    params.templateId = templateId;
    return this.templateApi.getSmsTemplate(params);
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
    const params = {};
    params.templateId = templateId;
    params.smsTemplate = smsTemplate;
    return this.templateApi.partialUpdateSmsTemplate(params);
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
    const params = {};
    params.templateId = templateId;
    params.smsTemplate = smsTemplate;
    return this.templateApi.updateSmsTemplate(params);
  }

  /**
   *
   * @description
   * Gets current ThreatInsight configuration
   * @returns {Promise<ThreatInsightConfiguration>}
   */
  getCurrentConfiguration() {
    const params = {};
    return this.threatInsightApi.getCurrentConfiguration(params);
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
    const params = {};
    params.threatInsightConfiguration = threatInsightConfiguration;
    return this.threatInsightApi.updateConfiguration(params);
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
    const params = {};
    if (queryParameters) {
      params.q = queryParameters.q;
      params.filter = queryParameters.filter;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.trustedOriginApi.listOrigins(params);
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
    const params = {};
    params.trustedOrigin = trustedOrigin;
    return this.trustedOriginApi.createOrigin(params);
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
    const params = {};
    params.trustedOriginId = trustedOriginId;
    return this.trustedOriginApi.deleteOrigin(params);
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
    const params = {};
    params.trustedOriginId = trustedOriginId;
    return this.trustedOriginApi.getOrigin(params);
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
    const params = {};
    params.trustedOriginId = trustedOriginId;
    params.trustedOrigin = trustedOrigin;
    return this.trustedOriginApi.updateOrigin(params);
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
    const params = {};
    params.trustedOriginId = trustedOriginId;
    return this.trustedOriginApi.activateOrigin(params);
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
    const params = {};
    params.trustedOriginId = trustedOriginId;
    return this.trustedOriginApi.deactivateOrigin(params);
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
    const params = {};
    if (queryParameters) {
      params.q = queryParameters.q;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
      params.filter = queryParameters.filter;
      params.search = queryParameters.search;
      params.sortBy = queryParameters.sortBy;
      params.sortOrder = queryParameters.sortOrder;
    }
    return this.userApi.listUsers(params);
  }

  /**
   *
   * @param {CreateUserRequest} body
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @param {String} [queryParams.provider]
   * @param {String} [queryParams.nextLogin]
   * @description
   * Creates a new user in your Okta organization with or without credentials.
   * @returns {Promise<User>}
   */
  createUser(body, queryParameters) {
    if (!body) {
      return Promise.reject(new Error('OKTA API createUser parameter body is required.'));
    }
    const params = {};
    params.body = body;
    if (queryParameters) {
      params.activate = queryParameters.activate;
      params.provider = queryParameters.provider;
      params.nextLogin = queryParameters.nextLogin;
    }
    return this.userApi.createUser(params);
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
    const params = {};
    params.associatedUserId = associatedUserId;
    params.primaryRelationshipName = primaryRelationshipName;
    params.primaryUserId = primaryUserId;
    return this.userApi.setLinkedObjectForUser(params);
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
    const params = {};
    params.userId = userId;
    if (queryParameters) {
      params.sendEmail = queryParameters.sendEmail;
    }
    return this.userApi.deleteUser(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.getUser(params);
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
    const params = {};
    params.userId = userId;
    params.user = user;
    if (queryParameters) {
      params.strict = queryParameters.strict;
    }
    return this.userApi.partialUpdateUser(params);
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
    const params = {};
    params.userId = userId;
    params.user = user;
    if (queryParameters) {
      params.strict = queryParameters.strict;
    }
    return this.userApi.updateUser(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.listAppLinks(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.listUserClients(params);
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
    const params = {};
    params.userId = userId;
    params.clientId = clientId;
    return this.userApi.revokeGrantsForUserAndClient(params);
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
    const params = {};
    params.userId = userId;
    params.clientId = clientId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.userApi.listGrantsForUserAndClient(params);
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
    const params = {};
    params.userId = userId;
    params.clientId = clientId;
    return this.userApi.revokeTokensForUserAndClient(params);
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
    const params = {};
    params.userId = userId;
    params.clientId = clientId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.userApi.listRefreshTokensForUserAndClient(params);
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
    const params = {};
    params.userId = userId;
    params.clientId = clientId;
    params.tokenId = tokenId;
    return this.userApi.revokeTokenForUserAndClient(params);
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
    const params = {};
    params.userId = userId;
    params.clientId = clientId;
    params.tokenId = tokenId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
      params.limit = queryParameters.limit;
      params.after = queryParameters.after;
    }
    return this.userApi.getRefreshTokenForUserAndClient(params);
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
    const params = {};
    params.userId = userId;
    params.changePasswordRequest = changePasswordRequest;
    if (queryParameters) {
      params.strict = queryParameters.strict;
    }
    return this.userApi.changePassword(params);
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
    const params = {};
    params.userId = userId;
    params.userCredentials = userCredentials;
    return this.userApi.changeRecoveryQuestion(params);
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
    const params = {};
    params.userId = userId;
    if (queryParameters) {
      params.sendEmail = queryParameters.sendEmail;
    }
    return this.userApi.forgotPassword(params);
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
    const params = {};
    params.userId = userId;
    params.userCredentials = userCredentials;
    if (queryParameters) {
      params.sendEmail = queryParameters.sendEmail;
    }
    return this.userApi.forgotPasswordSetNewPassword(params);
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
    const params = {};
    params.userId = userId;
    return this.userFactorApi.listFactors(params);
  }

  /**
   *
   * @param userId {String}
   * @param {UserFactor} body
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.updatePhone]
   * @param {String} [queryParams.templateId]
   * @param {String} [queryParams.tokenLifetimeSeconds]
   * @param {String} [queryParams.activate]
   * @description
   * Enrolls a user with a supported factor.
   * @returns {Promise<UserFactor>}
   */
  enrollFactor(userId, body, queryParameters) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API enrollFactor parameter userId is required.'));
    }
    if (!body) {
      return Promise.reject(new Error('OKTA API enrollFactor parameter body is required.'));
    }
    const params = {};
    params.userId = userId;
    params.body = body;
    if (queryParameters) {
      params.updatePhone = queryParameters.updatePhone;
      params.templateId = queryParameters.templateId;
      params.tokenLifetimeSeconds = queryParameters.tokenLifetimeSeconds;
      params.activate = queryParameters.activate;
    }
    return this.userFactorApi.enrollFactor(params);
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
    const params = {};
    params.userId = userId;
    return this.userFactorApi.listSupportedFactors(params);
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
    const params = {};
    params.userId = userId;
    return this.userFactorApi.listSupportedSecurityQuestions(params);
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
    const params = {};
    params.userId = userId;
    params.factorId = factorId;
    return this.userFactorApi.deleteFactor(params);
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
    const params = {};
    params.userId = userId;
    params.factorId = factorId;
    return this.userFactorApi.getFactor(params);
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {ActivateFactorRequest} body
   * @description
   * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
   * @returns {Promise<UserFactor>}
   */
  activateFactor(userId, factorId, body) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API activateFactor parameter userId is required.'));
    }
    if (!factorId) {
      return Promise.reject(new Error('OKTA API activateFactor parameter factorId is required.'));
    }
    const params = {};
    params.userId = userId;
    params.factorId = factorId;
    params.body = body;
    return this.userFactorApi.activateFactor(params);
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
    const params = {};
    params.userId = userId;
    params.factorId = factorId;
    params.transactionId = transactionId;
    return this.userFactorApi.getFactorTransactionStatus(params);
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {VerifyFactorRequest} body
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.templateId]
   * @param {String} [queryParams.tokenLifetimeSeconds]
   * @description
   * Verifies an OTP for a `token` or `token:hardware` factor
   * @returns {Promise<VerifyUserFactorResponse>}
   */
  verifyFactor(userId, factorId, body, queryParameters, headerParameters) {
    if (!userId) {
      return Promise.reject(new Error('OKTA API verifyFactor parameter userId is required.'));
    }
    if (!factorId) {
      return Promise.reject(new Error('OKTA API verifyFactor parameter factorId is required.'));
    }
    const params = {};
    params.userId = userId;
    params.factorId = factorId;
    params.body = body;
    if (queryParameters) {
      params.templateId = queryParameters.templateId;
      params.tokenLifetimeSeconds = queryParameters.tokenLifetimeSeconds;
    }
    if (headerParameters) {
      params.X_Forwarded_For = headerParameters.X_Forwarded_For;
      params.User_Agent = headerParameters.User_Agent;
      params.Accept_Language = headerParameters.Accept_Language;
    }
    return this.userFactorApi.verifyFactor(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.revokeUserGrants(params);
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
    const params = {};
    params.userId = userId;
    if (queryParameters) {
      params.scopeId = queryParameters.scopeId;
      params.expand = queryParameters.expand;
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.userApi.listUserGrants(params);
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
    const params = {};
    params.userId = userId;
    params.grantId = grantId;
    return this.userApi.revokeUserGrant(params);
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
    const params = {};
    params.userId = userId;
    params.grantId = grantId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.userApi.getUserGrant(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.listUserGroups(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.listUserIdentityProviders(params);
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
    const params = {};
    params.userId = userId;
    if (queryParameters) {
      params.sendEmail = queryParameters.sendEmail;
    }
    return this.userApi.activateUser(params);
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
    const params = {};
    params.userId = userId;
    if (queryParameters) {
      params.sendEmail = queryParameters.sendEmail;
    }
    return this.userApi.deactivateUser(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.expirePassword(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.expirePasswordAndGetTemporaryPassword(params);
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
    const params = {};
    params.userId = userId;
    if (queryParameters) {
      params.sendEmail = queryParameters.sendEmail;
    }
    return this.userApi.reactivateUser(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.resetFactors(params);
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
    const params = {};
    params.userId = userId;
    if (queryParameters) {
      params.sendEmail = queryParameters.sendEmail;
    }
    return this.userApi.resetPassword(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.suspendUser(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.unlockUser(params);
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
    const params = {};
    params.userId = userId;
    return this.userApi.unsuspendUser(params);
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
    const params = {};
    params.userId = userId;
    params.relationshipName = relationshipName;
    return this.userApi.removeLinkedObjectForUser(params);
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
    const params = {};
    params.userId = userId;
    params.relationshipName = relationshipName;
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.userApi.getLinkedObjectsForUser(params);
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
    const params = {};
    params.userId = userId;
    if (queryParameters) {
      params.expand = queryParameters.expand;
    }
    return this.roleAssignmentApi.listAssignedRolesForUser(params);
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
    const params = {};
    params.userId = userId;
    params.assignRoleRequest = assignRoleRequest;
    if (queryParameters) {
      params.disableNotifications = queryParameters.disableNotifications;
    }
    return this.roleAssignmentApi.assignRoleToUser(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    return this.userApi.unassignRoleFromUser(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    return this.userApi.getUserRole(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.userApi.listApplicationTargetsForApplicationAdministratorRoleForUser(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    return this.userApi.addAllAppsAsTargetToRole(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    params.appName = appName;
    return this.userApi.removeApplicationTargetFromApplicationAdministratorRoleForUser(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    params.appName = appName;
    return this.userApi.addApplicationTargetToAdminRoleForUser(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    params.appName = appName;
    params.applicationId = applicationId;
    return this.userApi.removeApplicationTargetFromAdministratorRoleForUser(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    params.appName = appName;
    params.applicationId = applicationId;
    return this.userApi.addApplicationTargetToAppAdminRoleForUser(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
    }
    return this.userApi.listGroupTargetsForRole(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    params.groupId = groupId;
    return this.userApi.unassignGroupTargetFromUserAdminRole(params);
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
    const params = {};
    params.userId = userId;
    params.roleId = roleId;
    params.groupId = groupId;
    return this.userApi.assignGroupTargetToUserRole(params);
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
    const params = {};
    params.userId = userId;
    if (queryParameters) {
      params.oauthTokens = queryParameters.oauthTokens;
    }
    return this.userApi.clearUserSessions(params);
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
    const params = {};
    params.userId = userId;
    return this.subscriptionApi.listUserSubscriptions(params);
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
    const params = {};
    params.userId = userId;
    params.notificationType = notificationType;
    return this.subscriptionApi.listUserSubscriptionsByNotificationType(params);
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
    const params = {};
    params.userId = userId;
    params.notificationType = notificationType;
    return this.subscriptionApi.subscribeUserSubscriptionByNotificationType(params);
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
    const params = {};
    params.userId = userId;
    params.notificationType = notificationType;
    return this.subscriptionApi.unsubscribeUserSubscriptionByNotificationType(params);
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
    const params = {};
    if (queryParameters) {
      params.after = queryParameters.after;
      params.limit = queryParameters.limit;
      params.filter = queryParameters.filter;
    }
    return this.networkZoneApi.listNetworkZones(params);
  }

  /**
   *
   * @param {NetworkZone} zone
   * @description
   * Adds a new network zone to your Okta organization.
   * @returns {Promise<NetworkZone>}
   */
  createNetworkZone(zone) {
    if (!zone) {
      return Promise.reject(new Error('OKTA API createNetworkZone parameter zone is required.'));
    }
    const params = {};
    params.zone = zone;
    return this.networkZoneApi.createNetworkZone(params);
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
    const params = {};
    params.zoneId = zoneId;
    return this.networkZoneApi.deleteNetworkZone(params);
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
    const params = {};
    params.zoneId = zoneId;
    return this.networkZoneApi.getNetworkZone(params);
  }

  /**
   *
   * @param zoneId {String}
   * @param {NetworkZone} zone
   * @description
   * Updates a network zone in your organization.
   * @returns {Promise<NetworkZone>}
   */
  updateNetworkZone(zoneId, zone) {
    if (!zoneId) {
      return Promise.reject(new Error('OKTA API updateNetworkZone parameter zoneId is required.'));
    }
    if (!zone) {
      return Promise.reject(new Error('OKTA API updateNetworkZone parameter zone is required.'));
    }
    const params = {};
    params.zoneId = zoneId;
    params.zone = zone;
    return this.networkZoneApi.updateNetworkZone(params);
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
    const params = {};
    params.zoneId = zoneId;
    return this.networkZoneApi.activateNetworkZone(params);
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
    const params = {};
    params.zoneId = zoneId;
    return this.networkZoneApi.deactivateNetworkZone(params);
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
