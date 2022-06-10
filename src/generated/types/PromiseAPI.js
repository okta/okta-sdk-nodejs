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


'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PromiseUserTypeApi = exports.PromiseUserFactorApi = exports.PromiseUserApi = exports.PromiseTrustedOriginApi = exports.PromiseThreatInsightApi = exports.PromiseTemplateApi = exports.PromiseSystemLogApi = exports.PromiseSubscriptionApi = exports.PromiseSessionApi = exports.PromiseSchemaApi = exports.PromiseProfileMappingApi = exports.PromisePrincipalRateLimitApi = exports.PromisePolicyApi = exports.PromiseOrgSettingApi = exports.PromiseNetworkZoneApi = exports.PromiseLinkedObjectApi = exports.PromiseInlineHookApi = exports.PromiseIdentityProviderApi = exports.PromiseGroupApi = exports.PromiseFeatureApi = exports.PromiseEventHookApi = exports.PromiseDomainApi = exports.PromiseCustomizationApi = exports.PromiseCAPTCHAApi = exports.PromiseBehaviorApi = exports.PromiseAuthorizationServerApi = exports.PromiseAuthenticatorApi = exports.PromiseApplicationApi = exports.PromiseApiTokenApi = exports.PromiseAgentPoolsApi = void 0;
const ObservableAPI_1 = require('./ObservableAPI');
class PromiseAgentPoolsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_1.ObservableAgentPoolsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates scheduled Agent pool update
      * Activate Agent pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  activateAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.activateAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.
      * Create an Agent pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdate
      */
  createAgentPoolsUpdate(poolId, AgentPoolUpdate, _options) {
    const result = this.api.createAgentPoolsUpdate(poolId, AgentPoolUpdate, _options);
    return result.toPromise();
  }
  /**
      * Deactivates scheduled Agent pool update
      * Deactivate Agent pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deactivateAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.deactivateAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Deletes Agent pool update
      * Delete Agent pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deleteAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.deleteAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Fetches AgentPools based on request parameters for a given org
      * Fetch AgentPools
      * @param limitPerPoolType Maximum number of AgentPools being returned
      * @param poolType Agent type to search for
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      */
  getAgentPools(limitPerPoolType, poolType, after, _options) {
    const result = this.api.getAgentPools(limitPerPoolType, poolType, after, _options);
    return result.toPromise();
  }
  /**
      * Gets Agent pool update from updateId
      * Get Agent pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  getAgentPoolsUpdateInstance(poolId, updateId, _options) {
    const result = this.api.getAgentPoolsUpdateInstance(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Gets the current state of the agent pool update instance settings
      * Get Agent pool update settings
      * @param poolId Id of the agent pool for which the settings will apply
      */
  getAgentPoolsUpdateSettings(poolId, _options) {
    const result = this.api.getAgentPoolsUpdateSettings(poolId, _options);
    return result.toPromise();
  }
  /**
      * Gets List of Agent pool updates
      * List Agent pool updates
      * @param poolId Id of the agent pool for which the settings will apply
      * @param scheduled Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates.
      */
  getAgentPoolsUpdates(poolId, scheduled, _options) {
    const result = this.api.getAgentPoolsUpdates(poolId, scheduled, _options);
    return result.toPromise();
  }
  /**
      * Pauses running or queued Agent pool update
      * Pause Agent pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  pauseAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.pauseAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Resumes running or queued Agent pool update
      * Resume Agent pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  resumeAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.resumeAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Retries Agent pool update
      * Retry Agent pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  retryAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.retryAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Updates Agent pool update settings
      * Update Agent pool update settings
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdateSetting
      */
  setAgentPoolsUpdateSettings(poolId, AgentPoolUpdateSetting, _options) {
    const result = this.api.setAgentPoolsUpdateSettings(poolId, AgentPoolUpdateSetting, _options);
    return result.toPromise();
  }
  /**
      * Stops Agent pool update
      * Stop Agent pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  stopAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.stopAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Updates Agent pool update and return latest agent pool update
      * Change Agent pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      * @param AgentPoolUpdate
      */
  updateAgentPoolsUpdate(poolId, updateId, AgentPoolUpdate, _options) {
    const result = this.api.updateAgentPoolsUpdate(poolId, updateId, AgentPoolUpdate, _options);
    return result.toPromise();
  }
}
exports.PromiseAgentPoolsApi = PromiseAgentPoolsApi;
const ObservableAPI_2 = require('./ObservableAPI');
class PromiseApiTokenApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_2.ObservableApiTokenApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Get the metadata for an active API token by id.
      * Get the Metadata for an API Token
      * @param apiTokenId id of the API Token
      */
  getApiToken(apiTokenId, _options) {
    const result = this.api.getApiToken(apiTokenId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates the metadata of the active API tokens in your organization.
      * List API Token Metadata
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param q Finds a token that matches the name or clientName.
      */
  listApiTokens(after, limit, q, _options) {
    const result = this.api.listApiTokens(after, limit, q, _options);
    return result.toPromise();
  }
  /**
      * Revoke an API token by id.
      * Revoke an API Token
      * @param apiTokenId id of the API Token
      */
  revokeApiToken(apiTokenId, _options) {
    const result = this.api.revokeApiToken(apiTokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the API token provided in the Authorization header.
      * Revoke the Current API Token
      */
  revokeCurrentApiToken(_options) {
    const result = this.api.revokeCurrentApiToken(_options);
    return result.toPromise();
  }
}
exports.PromiseApiTokenApi = PromiseApiTokenApi;
const ObservableAPI_3 = require('./ObservableAPI');
class PromiseApplicationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_3.ObservableApplicationApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an inactive application.
      * Activate Application
      * @param appId
      */
  activateApplication(appId, _options) {
    const result = this.api.activateApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Activates the default Provisioning Connection for an application.
      * Activate default Provisioning Connection for application
      * @param appId
      */
  activateDefaultProvisioningConnectionForApplication(appId, _options) {
    const result = this.api.activateDefaultProvisioningConnectionForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
      * Assign User to Application for SSO & Provisioning
      * @param appId
      * @param appUser
      */
  assignUserToApplication(appId, appUser, _options) {
    const result = this.api.assignUserToApplication(appId, appUser, _options);
    return result.toPromise();
  }
  /**
      * Clones a X.509 certificate for an application key credential from a source application to target application.
      * Clone Application Key Credential
      * @param appId
      * @param keyId
      * @param targetAid Unique key of the target Application
      */
  cloneApplicationKey(appId, keyId, targetAid, _options) {
    const result = this.api.cloneApplicationKey(appId, keyId, targetAid, _options);
    return result.toPromise();
  }
  /**
      * Adds a new application to your Okta organization.
      * Add Application
      * @param application
      * @param activate Executes activation lifecycle operation when creating the app
      * @param OktaAccessGateway_Agent
      */
  createApplication(application, activate, OktaAccessGateway_Agent, _options) {
    const result = this.api.createApplication(application, activate, OktaAccessGateway_Agent, _options);
    return result.toPromise();
  }
  /**
      * Assigns a group to an application
      * Assign Group to Application
      * @param appId
      * @param groupId
      * @param applicationGroupAssignment
      */
  createApplicationGroupAssignment(appId, groupId, applicationGroupAssignment, _options) {
    const result = this.api.createApplicationGroupAssignment(appId, groupId, applicationGroupAssignment, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an active application.
      * Deactivate Application
      * @param appId
      */
  deactivateApplication(appId, _options) {
    const result = this.api.deactivateApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates the default Provisioning Connection for an application.
      * Deactivate default Provisioning Connection for application
      * @param appId
      */
  deactivateDefaultProvisioningConnectionForApplication(appId, _options) {
    const result = this.api.deactivateDefaultProvisioningConnectionForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Removes an inactive application.
      * Delete Application
      * @param appId
      */
  deleteApplication(appId, _options) {
    const result = this.api.deleteApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Removes a group assignment from an application.
      * Remove Group from Application
      * @param appId
      * @param groupId
      */
  deleteApplicationGroupAssignment(appId, groupId, _options) {
    const result = this.api.deleteApplicationGroupAssignment(appId, groupId, _options);
    return result.toPromise();
  }
  /**
      * Removes an assignment for a user from an application.
      * Remove User from Application
      * @param appId
      * @param userId
      * @param sendEmail
      */
  deleteApplicationUser(appId, userId, sendEmail, _options) {
    const result = this.api.deleteApplicationUser(appId, userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Generates a new X.509 certificate for an application key credential
      * Generate Key Credential for Application
      * @param appId
      * @param validityYears
      */
  generateApplicationKey(appId, validityYears, _options) {
    const result = this.api.generateApplicationKey(appId, validityYears, _options);
    return result.toPromise();
  }
  /**
      * Generates a new key pair and returns the Certificate Signing Request for it.
      * Generate Certificate Signing Request for Application
      * @param appId
      * @param metadata
      */
  generateCsrForApplication(appId, metadata, _options) {
    const result = this.api.generateCsrForApplication(appId, metadata, _options);
    return result.toPromise();
  }
  /**
      * Fetches an application from your Okta organization by `id`.
      * Get Application
      * @param appId
      * @param expand
      */
  getApplication(appId, expand, _options) {
    const result = this.api.getApplication(appId, expand, _options);
    return result.toPromise();
  }
  /**
      * Fetches an application group assignment
      * Get Assigned Group for Application
      * @param appId
      * @param groupId
      * @param expand
      */
  getApplicationGroupAssignment(appId, groupId, expand, _options) {
    const result = this.api.getApplicationGroupAssignment(appId, groupId, expand, _options);
    return result.toPromise();
  }
  /**
      * Gets a specific application key credential by kid
      * Get Key Credential for Application
      * @param appId
      * @param keyId
      */
  getApplicationKey(appId, keyId, _options) {
    const result = this.api.getApplicationKey(appId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a specific user assignment for application by `id`.
      * Get Assigned User for Application
      * @param appId
      * @param userId
      * @param expand
      */
  getApplicationUser(appId, userId, expand, _options) {
    const result = this.api.getApplicationUser(appId, userId, expand, _options);
    return result.toPromise();
  }
  /**
      * Fetches a certificate signing request for the app by `id`.
      * Get Certificate Signing Request
      * @param appId
      * @param csrId
      */
  getCsrForApplication(appId, csrId, _options) {
    const result = this.api.getCsrForApplication(appId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Get default Provisioning Connection for application
      * Fetches the default Provisioning Connection for an application.
      * @param appId
      */
  getDefaultProvisioningConnectionForApplication(appId, _options) {
    const result = this.api.getDefaultProvisioningConnectionForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a Feature object for an application.
      * Fetches a Feature object for an application.
      * @param appId
      * @param name
      */
  getFeatureForApplication(appId, name, _options) {
    const result = this.api.getFeatureForApplication(appId, name, _options);
    return result.toPromise();
  }
  /**
      * Gets a token for the specified application
      * Get OAuth 2.0 Token for Application
      * @param appId
      * @param tokenId
      * @param expand
      */
  getOAuth2TokenForApplication(appId, tokenId, expand, _options) {
    const result = this.api.getOAuth2TokenForApplication(appId, tokenId, expand, _options);
    return result.toPromise();
  }
  /**
      * Fetches a single scope consent grant for the application
      * Get Scope Consent Grant for Application
      * @param appId
      * @param grantId
      * @param expand
      */
  getScopeConsentGrant(appId, grantId, expand, _options) {
    const result = this.api.getScopeConsentGrant(appId, grantId, expand, _options);
    return result.toPromise();
  }
  /**
      * Grants consent for the application to request an OAuth 2.0 Okta scope
      * Grant Consent to Scope for Application
      * @param appId
      * @param oAuth2ScopeConsentGrant
      */
  grantConsentToScope(appId, oAuth2ScopeConsentGrant, _options) {
    const result = this.api.grantConsentToScope(appId, oAuth2ScopeConsentGrant, _options);
    return result.toPromise();
  }
  /**
      * Enumerates group assignments for an application.
      * List Groups Assigned to Application
      * @param appId
      * @param q
      * @param after Specifies the pagination cursor for the next page of assignments
      * @param limit Specifies the number of results for a page
      * @param expand
      */
  listApplicationGroupAssignments(appId, q, after, limit, expand, _options) {
    const result = this.api.listApplicationGroupAssignments(appId, q, after, limit, expand, _options);
    return result.toPromise();
  }
  /**
      * Enumerates key credentials for an application
      * List Key Credentials for Application
      * @param appId
      */
  listApplicationKeys(appId, _options) {
    const result = this.api.listApplicationKeys(appId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates all assigned [application users](#application-user-model) for an application.
      * List Users Assigned to Application
      * @param appId
      * @param q
      * @param query_scope
      * @param after specifies the pagination cursor for the next page of assignments
      * @param limit specifies the number of results for a page
      * @param filter
      * @param expand
      */
  listApplicationUsers(appId, q, query_scope, after, limit, filter, expand, _options) {
    const result = this.api.listApplicationUsers(appId, q, query_scope, after, limit, filter, expand, _options);
    return result.toPromise();
  }
  /**
      * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
      * List Applications
      * @param q
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of results for a page
      * @param filter Filters apps by status, user.id, group.id or credentials.signing.kid expression
      * @param expand Traverses users link relationship and optionally embeds Application User resource
      * @param includeNonDeleted
      */
  listApplications(q, after, limit, filter, expand, includeNonDeleted, _options) {
    const result = this.api.listApplications(q, after, limit, filter, expand, includeNonDeleted, _options);
    return result.toPromise();
  }
  /**
      * Enumerates Certificate Signing Requests for an application
      * List Certificate Signing Requests for Application
      * @param appId
      */
  listCsrsForApplication(appId, _options) {
    const result = this.api.listCsrsForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * List Features for application
      * Fetches the Feature objects for an application.
      * @param appId
      */
  listFeaturesForApplication(appId, _options) {
    const result = this.api.listFeaturesForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all tokens for the application
      * Lists OAuth 2.0 Tokens for Application
      * @param appId
      * @param expand
      * @param after
      * @param limit
      */
  listOAuth2TokensForApplication(appId, expand, after, limit, _options) {
    const result = this.api.listOAuth2TokensForApplication(appId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all scope consent grants for the application
      * List Scope Consent Grants for Application
      * @param appId
      * @param expand
      */
  listScopeConsentGrants(appId, expand, _options) {
    const result = this.api.listScopeConsentGrants(appId, expand, _options);
    return result.toPromise();
  }
  /**
      * Updates a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish Certificate Signing Request
      * @param appId
      * @param csrId
      * @param body
      */
  publishCsrFromApplication(appId, csrId, body, _options) {
    const result = this.api.publishCsrFromApplication(appId, csrId, body, _options);
    return result.toPromise();
  }
  /**
      * Revokes a certificate signing request and deletes the key pair from the application.
      * Revoke Certificate Signing Request
      * @param appId
      * @param csrId
      */
  revokeCsrFromApplication(appId, csrId, _options) {
    const result = this.api.revokeCsrFromApplication(appId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the specified token for the specified application
      * Revoke an OAuth 2.0 Token for Application
      * @param appId
      * @param tokenId
      */
  revokeOAuth2TokenForApplication(appId, tokenId, _options) {
    const result = this.api.revokeOAuth2TokenForApplication(appId, tokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all tokens for the specified application
      * Revoke All OAuth 2.0 Tokens for Application
      * @param appId
      */
  revokeOAuth2TokensForApplication(appId, _options) {
    const result = this.api.revokeOAuth2TokensForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Revokes permission for the application to request the given scope
      * Revoke Scope Consent Grant for Application
      * @param appId
      * @param grantId
      */
  revokeScopeConsentGrant(appId, grantId, _options) {
    const result = this.api.revokeScopeConsentGrant(appId, grantId, _options);
    return result.toPromise();
  }
  /**
      * Set default Provisioning Connection for application
      * Sets the default Provisioning Connection for an application.
      * @param appId
      * @param ProvisioningConnectionRequest
      * @param activate
      */
  setDefaultProvisioningConnectionForApplication(appId, ProvisioningConnectionRequest, activate, _options) {
    const result = this.api.setDefaultProvisioningConnectionForApplication(appId, ProvisioningConnectionRequest, activate, _options);
    return result.toPromise();
  }
  /**
      * Updates an application in your organization.
      * Update Application
      * @param appId
      * @param application
      */
  updateApplication(appId, application, _options) {
    const result = this.api.updateApplication(appId, application, _options);
    return result.toPromise();
  }
  /**
      * Updates a user's profile for an application
      * Update Application Profile for Assigned User
      * @param appId
      * @param userId
      * @param appUser
      */
  updateApplicationUser(appId, userId, appUser, _options) {
    const result = this.api.updateApplicationUser(appId, userId, appUser, _options);
    return result.toPromise();
  }
  /**
      * Updates a Feature object for an application.
      * Updates a Feature object for an application.
      * @param appId
      * @param name
      * @param CapabilitiesObject
      */
  updateFeatureForApplication(appId, name, CapabilitiesObject, _options) {
    const result = this.api.updateFeatureForApplication(appId, name, CapabilitiesObject, _options);
    return result.toPromise();
  }
  /**
      * Update the logo for an application.
      * The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * @param appId
      * @param file
      */
  uploadApplicationLogo(appId, file, _options) {
    const result = this.api.uploadApplicationLogo(appId, file, _options);
    return result.toPromise();
  }
}
exports.PromiseApplicationApi = PromiseApplicationApi;
const ObservableAPI_4 = require('./ObservableAPI');
class PromiseAuthenticatorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_4.ObservableAuthenticatorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an authenticator by `authenticatorId`.
      * Activate Authenticator
      * @param authenticatorId
      */
  activateAuthenticator(authenticatorId, _options) {
    const result = this.api.activateAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authenticator by `authenticatorId`.
      * Deactivate Authenticator
      * @param authenticatorId
      */
  deactivateAuthenticator(authenticatorId, _options) {
    const result = this.api.deactivateAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
      * Get Authenticator
      * @param authenticatorId
      */
  getAuthenticator(authenticatorId, _options) {
    const result = this.api.getAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates authenticators in your organization.
      * List Authenticators
      */
  listAuthenticators(_options) {
    const result = this.api.listAuthenticators(_options);
    return result.toPromise();
  }
  /**
      * Updates an authenticator
      * Update Authenticator
      * @param authenticatorId
      * @param authenticator
      */
  updateAuthenticator(authenticatorId, authenticator, _options) {
    const result = this.api.updateAuthenticator(authenticatorId, authenticator, _options);
    return result.toPromise();
  }
}
exports.PromiseAuthenticatorApi = PromiseAuthenticatorApi;
const ObservableAPI_5 = require('./ObservableAPI');
class PromiseAuthorizationServerApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_5.ObservableAuthorizationServerApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Success
      * Activate Authorization Server
      * @param authServerId
      */
  activateAuthorizationServer(authServerId, _options) {
    const result = this.api.activateAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Activate Authorization Server Policy
      * Activate Authorization Server Policy
      * @param authServerId
      * @param policyId
      */
  activateAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.activateAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Activate Authorization Server Policy Rule
      * Activate Authorization Server Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const result = this.api.activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Create Authorization Server
      * @param authorizationServer
      */
  createAuthorizationServer(authorizationServer, _options) {
    const result = this.api.createAuthorizationServer(authorizationServer, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Create Authorization Server Policy
      * @param authServerId
      * @param policy
      */
  createAuthorizationServerPolicy(authServerId, policy, _options) {
    const result = this.api.createAuthorizationServerPolicy(authServerId, policy, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy.
      * Create Authorization Server Policy Rule
      * @param policyId
      * @param authServerId
      * @param policyRule
      */
  createAuthorizationServerPolicyRule(policyId, authServerId, policyRule, _options) {
    const result = this.api.createAuthorizationServerPolicyRule(policyId, authServerId, policyRule, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Create Custom OAuth 2.0 Token Claim
      * @param authServerId
      * @param oAuth2Claim
      */
  createOAuth2Claim(authServerId, oAuth2Claim, _options) {
    const result = this.api.createOAuth2Claim(authServerId, oAuth2Claim, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Create Oauth2scope
      * @param authServerId
      * @param oAuth2Scope
      */
  createOAuth2Scope(authServerId, oAuth2Scope, _options) {
    const result = this.api.createOAuth2Scope(authServerId, oAuth2Scope, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Deactivate Authorization Server
      * @param authServerId
      */
  deactivateAuthorizationServer(authServerId, _options) {
    const result = this.api.deactivateAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Deactivate Authorization Server Policy
      * Deactivate Authorization Server Policy
      * @param authServerId
      * @param policyId
      */
  deactivateAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.deactivateAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Deactivate Authorization Server Policy Rule
      * Deactivate Authorization Server Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const result = this.api.deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Delete Authorization Server
      * @param authServerId
      */
  deleteAuthorizationServer(authServerId, _options) {
    const result = this.api.deleteAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Delete Authorization Server Policy
      * @param authServerId
      * @param policyId
      */
  deleteAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.deleteAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Delete Authorization Server Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  deleteAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options) {
    const result = this.api.deleteAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Delete Custom OAuth 2.0 Token Claim
      * @param authServerId
      * @param claimId
      */
  deleteOAuth2Claim(authServerId, claimId, _options) {
    const result = this.api.deleteOAuth2Claim(authServerId, claimId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Delete Oauth2scope
      * @param authServerId
      * @param scopeId
      */
  deleteOAuth2Scope(authServerId, scopeId, _options) {
    const result = this.api.deleteOAuth2Scope(authServerId, scopeId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Get Authorization Server
      * @param authServerId
      */
  getAuthorizationServer(authServerId, _options) {
    const result = this.api.getAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Get Authorization Server Policy
      * @param authServerId
      * @param policyId
      */
  getAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.getAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.
      * Get Authorization Server Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  getAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options) {
    const result = this.api.getAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Get Oauth2claim
      * @param authServerId
      * @param claimId
      */
  getOAuth2Claim(authServerId, claimId, _options) {
    const result = this.api.getOAuth2Claim(authServerId, claimId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Get Oauth2scope
      * @param authServerId
      * @param scopeId
      */
  getOAuth2Scope(authServerId, scopeId, _options) {
    const result = this.api.getOAuth2Scope(authServerId, scopeId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Get Refresh Token for Authorization Server and Client
      * @param authServerId
      * @param clientId
      * @param tokenId
      * @param expand
      */
  getRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, expand, _options) {
    const result = this.api.getRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, expand, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Authorization Server Keys
      * @param authServerId
      */
  listAuthorizationServerKeys(authServerId, _options) {
    const result = this.api.listAuthorizationServerKeys(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Authorization Server Policies
      * @param authServerId
      */
  listAuthorizationServerPolicies(authServerId, _options) {
    const result = this.api.listAuthorizationServerPolicies(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
      * List Authorization Server Policy Rules
      * @param policyId
      * @param authServerId
      */
  listAuthorizationServerPolicyRules(policyId, authServerId, _options) {
    const result = this.api.listAuthorizationServerPolicyRules(policyId, authServerId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Authorization Servers
      * @param q
      * @param limit
      * @param after
      */
  listAuthorizationServers(q, limit, after, _options) {
    const result = this.api.listAuthorizationServers(q, limit, after, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Custom OAuth 2.0 Token Claims
      * @param authServerId
      */
  listOAuth2Claims(authServerId, _options) {
    const result = this.api.listOAuth2Claims(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Oauth2clients for Authorization Server
      * @param authServerId
      */
  listOAuth2ClientsForAuthorizationServer(authServerId, _options) {
    const result = this.api.listOAuth2ClientsForAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Oauth2scopes
      * @param authServerId
      * @param q
      * @param filter
      * @param cursor
      * @param limit
      */
  listOAuth2Scopes(authServerId, q, filter, cursor, limit, _options) {
    const result = this.api.listOAuth2Scopes(authServerId, q, filter, cursor, limit, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Refresh Tokens for Authorization Server and Client
      * @param authServerId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, expand, after, limit, _options) {
    const result = this.api.listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Revoke Refresh Token for Authorization Server and Client
      * @param authServerId
      * @param clientId
      * @param tokenId
      */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, _options) {
    const result = this.api.revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Revoke Refresh Tokens for Authorization Server and Client
      * @param authServerId
      * @param clientId
      */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, _options) {
    const result = this.api.revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Rotate Authorization Server Keys
      * @param authServerId
      * @param use
      */
  rotateAuthorizationServerKeys(authServerId, use, _options) {
    const result = this.api.rotateAuthorizationServerKeys(authServerId, use, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Update Authorization Server
      * @param authServerId
      * @param authorizationServer
      */
  updateAuthorizationServer(authServerId, authorizationServer, _options) {
    const result = this.api.updateAuthorizationServer(authServerId, authorizationServer, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Update Authorization Server Policy
      * @param authServerId
      * @param policyId
      * @param policy
      */
  updateAuthorizationServerPolicy(authServerId, policyId, policy, _options) {
    const result = this.api.updateAuthorizationServerPolicy(authServerId, policyId, policy, _options);
    return result.toPromise();
  }
  /**
      * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Update Authorization Server Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      * @param policyRule
      */
  updateAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule, _options) {
    const result = this.api.updateAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Update Custom OAuth 2.0 Token Claim
      * @param authServerId
      * @param claimId
      * @param oAuth2Claim
      */
  updateOAuth2Claim(authServerId, claimId, oAuth2Claim, _options) {
    const result = this.api.updateOAuth2Claim(authServerId, claimId, oAuth2Claim, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Update Oauth2scope
      * @param authServerId
      * @param scopeId
      * @param oAuth2Scope
      */
  updateOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options) {
    const result = this.api.updateOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options);
    return result.toPromise();
  }
}
exports.PromiseAuthorizationServerApi = PromiseAuthorizationServerApi;
const ObservableAPI_6 = require('./ObservableAPI');
class PromiseBehaviorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_6.ObservableBehaviorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activate Behavior Detection Rule
      * Activate Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  activateBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.activateBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Adds a new Behavior Detection Rule to your organization.
      * Create new Behavior Detection Rule
      * @param rule
      */
  createBehaviorDetectionRule(rule, _options) {
    const result = this.api.createBehaviorDetectionRule(rule, _options);
    return result.toPromise();
  }
  /**
      * Deactivate Behavior Detection Rule
      * Deactivate Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deactivateBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.deactivateBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Delete a Behavior Detection Rule by `behaviorId`.
      * Delete Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deleteBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.deleteBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a Behavior Detection Rule by `behaviorId`.
      * Get Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  getBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.getBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates Behavior Detection Rules in your organization with pagination.
      * List Behavior Detection Rules
      */
  listBehaviorDetectionRules(_options) {
    const result = this.api.listBehaviorDetectionRules(_options);
    return result.toPromise();
  }
  /**
      * Update a Behavior Detection Rule by `behaviorId`.
      * Update Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      * @param rule
      */
  updateBehaviorDetectionRule(behaviorId, rule, _options) {
    const result = this.api.updateBehaviorDetectionRule(behaviorId, rule, _options);
    return result.toPromise();
  }
}
exports.PromiseBehaviorApi = PromiseBehaviorApi;
const ObservableAPI_7 = require('./ObservableAPI');
class PromiseCAPTCHAApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_7.ObservableCAPTCHAApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Adds a new CAPTCHA instance to your organization. In the current release, we only allow one CAPTCHA instance per org.
      * Create new CAPTCHA instance
      * @param instance
      */
  createCaptchaInstance(instance, _options) {
    const result = this.api.createCaptchaInstance(instance, _options);
    return result.toPromise();
  }
  /**
      * Delete a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  deleteCaptchaInstance(captchaId, _options) {
    const result = this.api.deleteCaptchaInstance(captchaId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a CAPTCHA instance by `captchaId`.
      * Get CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  getCaptchaInstance(captchaId, _options) {
    const result = this.api.getCaptchaInstance(captchaId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates CAPTCHA instances in your organization with pagination. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List CAPTCHA instances
      */
  listCaptchaInstances(_options) {
    const result = this.api.listCaptchaInstances(_options);
    return result.toPromise();
  }
  /**
      * Partially update a CAPTCHA instance by `captchaId`.
      * Partial Update CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  partialUpdateCaptchaInstance(captchaId, instance, _options) {
    const result = this.api.partialUpdateCaptchaInstance(captchaId, instance, _options);
    return result.toPromise();
  }
  /**
      * Update a CAPTCHA instance by `captchaId`.
      * Update CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  updateCaptchaInstance(captchaId, instance, _options) {
    const result = this.api.updateCaptchaInstance(captchaId, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseCAPTCHAApi = PromiseCAPTCHAApi;
const ObservableAPI_8 = require('./ObservableAPI');
class PromiseCustomizationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_8.ObservableCustomizationApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new email customization.
      * Create Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param instance
      */
  createEmailCustomization(brandId, templateName, instance, _options) {
    const result = this.api.createEmailCustomization(brandId, templateName, instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes all customizations for an email template.
      * Delete All Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  deleteAllCustomizations(brandId, templateName, _options) {
    const result = this.api.deleteAllCustomizations(brandId, templateName, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Theme background image
      * Deletes a Theme background image
      * @param brandId
      * @param themeId
      */
  deleteBrandThemeBackgroundImage(brandId, themeId, _options) {
    const result = this.api.deleteBrandThemeBackgroundImage(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Theme favicon. The org then uses the Okta default favicon.
      * Deletes a Theme favicon. The org then uses the Okta default favicon.
      * @param brandId
      * @param themeId
      */
  deleteBrandThemeFavicon(brandId, themeId, _options) {
    const result = this.api.deleteBrandThemeFavicon(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Theme logo. The org then uses the Okta default logo.
      * Deletes a Theme logo. The org then uses the Okta default logo.
      * @param brandId
      * @param themeId
      */
  deleteBrandThemeLogo(brandId, themeId, _options) {
    const result = this.api.deleteBrandThemeLogo(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an email customization by its unique identifier.
      * Delete Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  deleteEmailCustomization(brandId, templateName, customizationId, _options) {
    const result = this.api.deleteEmailCustomization(brandId, templateName, customizationId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a brand by `brandId`
      * Get Brand
      * @param brandId
      */
  getBrand(brandId, _options) {
    const result = this.api.getBrand(brandId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a theme for a brand
      * Get a theme for a brand
      * @param brandId
      * @param themeId
      */
  getBrandTheme(brandId, themeId, _options) {
    const result = this.api.getBrandTheme(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Generates a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getCustomizationPreview(brandId, templateName, customizationId, _options) {
    const result = this.api.getCustomizationPreview(brandId, templateName, customizationId, _options);
    return result.toPromise();
  }
  /**
      * Gets an email customization by its unique identifier.
      * Get Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getEmailCustomization(brandId, templateName, customizationId, _options) {
    const result = this.api.getEmailCustomization(brandId, templateName, customizationId, _options);
    return result.toPromise();
  }
  /**
      * Gets an email template's default content.
      * Get Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultContent(brandId, templateName, language, _options) {
    const result = this.api.getEmailDefaultContent(brandId, templateName, language, _options);
    return result.toPromise();
  }
  /**
      * Generates a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultPreview(brandId, templateName, language, _options) {
    const result = this.api.getEmailDefaultPreview(brandId, templateName, language, _options);
    return result.toPromise();
  }
  /**
      * Gets an email template's settings.
      * Get Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  getEmailSettings(brandId, templateName, _options) {
    const result = this.api.getEmailSettings(brandId, templateName, _options);
    return result.toPromise();
  }
  /**
      * Gets the details of an email template by name.
      * Get Email Template
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getEmailTemplate(brandId, templateName, expand, _options) {
    const result = this.api.getEmailTemplate(brandId, templateName, expand, _options);
    return result.toPromise();
  }
  /**
      * List all the themes in your brand
      * Get Brand Themes
      * @param brandId
      */
  listBrandThemes(brandId, _options) {
    const result = this.api.listBrandThemes(brandId, _options);
    return result.toPromise();
  }
  /**
      * List all the brands in your org.
      * List Brands
      */
  listBrands(_options) {
    const result = this.api.listBrands(_options);
    return result.toPromise();
  }
  /**
      * Lists all customizations of an email template.
      * List Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      */
  listEmailCustomizations(brandId, templateName, after, limit, _options) {
    const result = this.api.listEmailCustomizations(brandId, templateName, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all email templates.
      * List Email Templates
      * @param brandId The ID of the brand.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param expand Specifies additional metadata to be included in the response.
      */
  listEmailTemplates(brandId, after, limit, expand, _options) {
    const result = this.api.listEmailTemplates(brandId, after, limit, expand, _options);
    return result.toPromise();
  }
  /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
      * Send Test Email
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  sendTestEmail(brandId, templateName, language, _options) {
    const result = this.api.sendTestEmail(brandId, templateName, language, _options);
    return result.toPromise();
  }
  /**
      * Updates a brand by `brandId`
      * Update Brand
      * @param brandId
      * @param brand
      */
  updateBrand(brandId, brand, _options) {
    const result = this.api.updateBrand(brandId, brand, _options);
    return result.toPromise();
  }
  /**
      * Updates a theme for a brand
      * Update a theme for a brand
      * @param brandId
      * @param themeId
      * @param theme
      */
  updateBrandTheme(brandId, themeId, theme, _options) {
    const result = this.api.updateBrandTheme(brandId, themeId, theme, _options);
    return result.toPromise();
  }
  /**
      * Updates an existing email customization using the property values provided.
      * Update Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      * @param instance Request
      */
  updateEmailCustomization(brandId, templateName, customizationId, instance, _options) {
    const result = this.api.updateEmailCustomization(brandId, templateName, customizationId, instance, _options);
    return result.toPromise();
  }
  /**
      * Updates an email template's settings.
      * Update Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param EmailSettings
      */
  updateEmailSettings(brandId, templateName, EmailSettings, _options) {
    const result = this.api.updateEmailSettings(brandId, templateName, EmailSettings, _options);
    return result.toPromise();
  }
  /**
      * Updates the background image for your Theme
      * Updates the background image for your Theme
      * @param brandId
      * @param themeId
      */
  uploadBrandThemeBackgroundImage(brandId, themeId, _options) {
    const result = this.api.uploadBrandThemeBackgroundImage(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Updates the favicon for your theme
      * Updates the favicon for your theme
      * @param brandId
      * @param themeId
      */
  uploadBrandThemeFavicon(brandId, themeId, _options) {
    const result = this.api.uploadBrandThemeFavicon(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Updates the logo for your Theme
      * Update a themes logo
      * @param brandId
      * @param themeId
      */
  uploadBrandThemeLogo(brandId, themeId, _options) {
    const result = this.api.uploadBrandThemeLogo(brandId, themeId, _options);
    return result.toPromise();
  }
}
exports.PromiseCustomizationApi = PromiseCustomizationApi;
const ObservableAPI_9 = require('./ObservableAPI');
class PromiseDomainApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_9.ObservableDomainApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates the Certificate for the Domain.
      * Create Certificate
      * @param domainId
      * @param certificate
      */
  createCertificate(domainId, certificate, _options) {
    const result = this.api.createCertificate(domainId, certificate, _options);
    return result.toPromise();
  }
  /**
      * Creates your domain.
      * Create Domain
      * @param domain
      */
  createDomain(domain, _options) {
    const result = this.api.createDomain(domain, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Domain by `id`.
      * Delete Domain
      * @param domainId
      */
  deleteDomain(domainId, _options) {
    const result = this.api.deleteDomain(domainId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a Domain by `id`.
      * Get Domain
      * @param domainId
      */
  getDomain(domainId, _options) {
    const result = this.api.getDomain(domainId, _options);
    return result.toPromise();
  }
  /**
      * List all verified custom Domains for the org.
      * List Domains
      */
  listDomains(_options) {
    const result = this.api.listDomains(_options);
    return result.toPromise();
  }
  /**
      * Verifies the Domain by `id`.
      * Verify Domain
      * @param domainId
      */
  verifyDomain(domainId, _options) {
    const result = this.api.verifyDomain(domainId, _options);
    return result.toPromise();
  }
}
exports.PromiseDomainApi = PromiseDomainApi;
const ObservableAPI_10 = require('./ObservableAPI');
class PromiseEventHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_10.ObservableEventHookApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Success
      * Activate Event Hook
      * @param eventHookId
      */
  activateEventHook(eventHookId, _options) {
    const result = this.api.activateEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Create Event Hook
      * @param eventHook
      */
  createEventHook(eventHook, _options) {
    const result = this.api.createEventHook(eventHook, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Deactivate Event Hook
      * @param eventHookId
      */
  deactivateEventHook(eventHookId, _options) {
    const result = this.api.deactivateEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Delete Event Hook
      * @param eventHookId
      */
  deleteEventHook(eventHookId, _options) {
    const result = this.api.deleteEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Get Event Hook
      * @param eventHookId
      */
  getEventHook(eventHookId, _options) {
    const result = this.api.getEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Event Hooks
      */
  listEventHooks(_options) {
    const result = this.api.listEventHooks(_options);
    return result.toPromise();
  }
  /**
      * Success
      * Update Event Hook
      * @param eventHookId
      * @param eventHook
      */
  updateEventHook(eventHookId, eventHook, _options) {
    const result = this.api.updateEventHook(eventHookId, eventHook, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Verify Event Hook
      * @param eventHookId
      */
  verifyEventHook(eventHookId, _options) {
    const result = this.api.verifyEventHook(eventHookId, _options);
    return result.toPromise();
  }
}
exports.PromiseEventHookApi = PromiseEventHookApi;
const ObservableAPI_11 = require('./ObservableAPI');
class PromiseFeatureApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_11.ObservableFeatureApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Success
      * Get Feature
      * @param featureId
      */
  getFeature(featureId, _options) {
    const result = this.api.getFeature(featureId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Feature Dependencies
      * @param featureId
      */
  listFeatureDependencies(featureId, _options) {
    const result = this.api.listFeatureDependencies(featureId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Feature Dependents
      * @param featureId
      */
  listFeatureDependents(featureId, _options) {
    const result = this.api.listFeatureDependents(featureId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Features
      */
  listFeatures(_options) {
    const result = this.api.listFeatures(_options);
    return result.toPromise();
  }
  /**
      * Success
      * Update Feature Lifecycle
      * @param featureId
      * @param lifecycle
      * @param mode
      */
  updateFeatureLifecycle(featureId, lifecycle, mode, _options) {
    const result = this.api.updateFeatureLifecycle(featureId, lifecycle, mode, _options);
    return result.toPromise();
  }
}
exports.PromiseFeatureApi = PromiseFeatureApi;
const ObservableAPI_12 = require('./ObservableAPI');
class PromiseGroupApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_12.ObservableGroupApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a specific group rule by id from your organization
      * Activate a group Rule
      * @param ruleId
      */
  activateGroupRule(ruleId, _options) {
    const result = this.api.activateGroupRule(ruleId, _options);
    return result.toPromise();
  }
  /**
      * Add App Instance Target to App Administrator Role given to a Group
      * Add App Instance Target to App Administrator Role given to a Group
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId, roleId, appName, applicationId, _options) {
    const result = this.api.addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Add Application Target to Admin Role Given to Group
      * @param groupId
      * @param roleId
      * @param appName
      */
  addApplicationTargetToAdminRoleGivenToGroup(groupId, roleId, appName, _options) {
    const result = this.api.addApplicationTargetToAdminRoleGivenToGroup(groupId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Enumerates group targets for a group role.
      * Add Group Target for Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  addGroupTargetToGroupAdministratorRoleForGroup(groupId, roleId, targetGroupId, _options) {
    const result = this.api.addGroupTargetToGroupAdministratorRoleForGroup(groupId, roleId, targetGroupId, _options);
    return result.toPromise();
  }
  /**
      * Adds a user to a group with 'OKTA_GROUP' type.
      * Add User to Group
      * @param groupId
      * @param userId
      */
  addUserToGroup(groupId, userId, _options) {
    const result = this.api.addUserToGroup(groupId, userId, _options);
    return result.toPromise();
  }
  /**
      * Assigns a Role to a Group
      * Assign Role to Group
      * @param groupId
      * @param assignRoleRequest
      * @param disableNotifications
      */
  assignRoleToGroup(groupId, assignRoleRequest, disableNotifications, _options) {
    const result = this.api.assignRoleToGroup(groupId, assignRoleRequest, disableNotifications, _options);
    return result.toPromise();
  }
  /**
      * Adds a new group with `OKTA_GROUP` type to your organization.
      * Add Group
      * @param group
      */
  createGroup(group, _options) {
    const result = this.api.createGroup(group, _options);
    return result.toPromise();
  }
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition
      * Create Group Rule
      * @param groupRule
      */
  createGroupRule(groupRule, _options) {
    const result = this.api.createGroupRule(groupRule, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a specific group rule by id from your organization
      * Deactivate a group Rule
      * @param ruleId
      */
  deactivateGroupRule(ruleId, _options) {
    const result = this.api.deactivateGroupRule(ruleId, _options);
    return result.toPromise();
  }
  /**
      * Removes a group with `OKTA_GROUP` type from your organization.
      * Remove Group
      * @param groupId
      */
  deleteGroup(groupId, _options) {
    const result = this.api.deleteGroup(groupId, _options);
    return result.toPromise();
  }
  /**
      * Removes a specific group rule by id from your organization
      * Delete a group Rule
      * @param ruleId
      * @param removeUsers Indicates whether to keep or remove users from groups assigned by this rule.
      */
  deleteGroupRule(ruleId, removeUsers, _options) {
    const result = this.api.deleteGroupRule(ruleId, removeUsers, _options);
    return result.toPromise();
  }
  /**
      * Fetches a group from your organization.
      * List Group Rules
      * @param groupId
      */
  getGroup(groupId, _options) {
    const result = this.api.getGroup(groupId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a specific group rule by id from your organization
      * Get Group Rule
      * @param ruleId
      * @param expand
      */
  getGroupRule(ruleId, expand, _options) {
    const result = this.api.getGroupRule(ruleId, expand, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Get Role
      * @param groupId
      * @param roleId
      */
  getRole(groupId, roleId, _options) {
    const result = this.api.getRole(groupId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List Application Targets for Application Administrator Role for Group
      * @param groupId
      * @param roleId
      * @param after
      * @param limit
      */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, after, limit, _options) {
    const result = this.api.listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Enumerates all applications that are assigned to a group.
      * List Assigned Applications
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of app results for a page
      */
  listAssignedApplicationsForGroup(groupId, after, limit, _options) {
    const result = this.api.listAssignedApplicationsForGroup(groupId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Group Assigned Roles
      * @param groupId
      * @param expand
      */
  listGroupAssignedRoles(groupId, expand, _options) {
    const result = this.api.listGroupAssignedRoles(groupId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all group rules for your organization.
      * List Group Rules
      * @param limit Specifies the number of rule results in a page
      * @param after Specifies the pagination cursor for the next page of rules
      * @param search Specifies the keyword to search fules for
      * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
      */
  listGroupRules(limit, after, search, expand, _options) {
    const result = this.api.listGroupRules(limit, after, search, expand, _options);
    return result.toPromise();
  }
  /**
      * Enumerates group targets for a group role.
      * List Group Targets for Group Role
      * @param groupId
      * @param roleId
      * @param after
      * @param limit
      */
  listGroupTargetsForGroupRole(groupId, roleId, after, limit, _options) {
    const result = this.api.listGroupTargetsForGroupRole(groupId, roleId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Enumerates all users that are a member of a group.
      * List Group Members
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of users
      * @param limit Specifies the number of user results in a page
      */
  listGroupUsers(groupId, after, limit, _options) {
    const result = this.api.listGroupUsers(groupId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
      * List Groups
      * @param q Searches the name property of groups for matching value
      * @param search Filter expression for groups
      * @param after Specifies the pagination cursor for the next page of groups
      * @param limit Specifies the number of group results in a page
      * @param expand If specified, it causes additional metadata to be included in the response.
      */
  listGroups(q, search, after, limit, expand, _options) {
    const result = this.api.listGroups(q, search, after, limit, expand, _options);
    return result.toPromise();
  }
  /**
      * Remove App Instance Target to App Administrator Role given to a Group
      * Remove App Instance Target to App Administrator Role given to a Group
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId, roleId, appName, applicationId, _options) {
    const result = this.api.removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Remove Application Target from Application Administrator Role Given to Group
      * @param groupId
      * @param roleId
      * @param appName
      */
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId, roleId, appName, _options) {
    const result = this.api.removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * remove group target for a group role.
      * Delete Group Target for Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId, roleId, targetGroupId, _options) {
    const result = this.api.removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId, roleId, targetGroupId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a Role from a Group
      * Remove Role from Group
      * @param groupId
      * @param roleId
      */
  removeRoleFromGroup(groupId, roleId, _options) {
    const result = this.api.removeRoleFromGroup(groupId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Removes a user from a group with 'OKTA_GROUP' type.
      * Remove User from Group
      * @param groupId
      * @param userId
      */
  removeUserFromGroup(groupId, userId, _options) {
    const result = this.api.removeUserFromGroup(groupId, userId, _options);
    return result.toPromise();
  }
  /**
      * Updates the profile for a group with `OKTA_GROUP` type from your organization.
      * Update Group
      * @param groupId
      * @param group
      */
  updateGroup(groupId, group, _options) {
    const result = this.api.updateGroup(groupId, group, _options);
    return result.toPromise();
  }
  /**
      * Updates a group rule. Only `INACTIVE` rules can be updated.
      * Update Group Rule
      * @param ruleId
      * @param groupRule
      */
  updateGroupRule(ruleId, groupRule, _options) {
    const result = this.api.updateGroupRule(ruleId, groupRule, _options);
    return result.toPromise();
  }
}
exports.PromiseGroupApi = PromiseGroupApi;
const ObservableAPI_13 = require('./ObservableAPI');
class PromiseIdentityProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_13.ObservableIdentityProviderApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an inactive IdP.
      * Activate Identity Provider
      * @param idpId
      */
  activateIdentityProvider(idpId, _options) {
    const result = this.api.activateIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
      * Clone Signing Key Credential for IdP
      * @param idpId
      * @param keyId
      * @param targetIdpId
      */
  cloneIdentityProviderKey(idpId, keyId, targetIdpId, _options) {
    const result = this.api.cloneIdentityProviderKey(idpId, keyId, targetIdpId, _options);
    return result.toPromise();
  }
  /**
      * Adds a new IdP to your organization.
      * Add Identity Provider
      * @param identityProvider
      */
  createIdentityProvider(identityProvider, _options) {
    const result = this.api.createIdentityProvider(identityProvider, _options);
    return result.toPromise();
  }
  /**
      * Adds a new X.509 certificate credential to the IdP key store.
      * Add X.509 Certificate Public Key for Identity Providers
      * @param jsonWebKey
      */
  createIdentityProviderKey(jsonWebKey, _options) {
    const result = this.api.createIdentityProviderKey(jsonWebKey, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an active IdP.
      * Deactivate Identity Provider
      * @param idpId
      */
  deactivateIdentityProvider(idpId, _options) {
    const result = this.api.deactivateIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Removes an IdP from your organization.
      * Delete Identity Provider
      * @param idpId
      */
  deleteIdentityProvider(idpId, _options) {
    const result = this.api.deleteIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.
      * Delete Key
      * @param keyId
      */
  deleteIdentityProviderKey(keyId, _options) {
    const result = this.api.deleteIdentityProviderKey(keyId, _options);
    return result.toPromise();
  }
  /**
      * Generates a new key pair and returns a Certificate Signing Request for it.
      * Generate Certificate Signing Request for IdP
      * @param idpId
      * @param metadata
      */
  generateCsrForIdentityProvider(idpId, metadata, _options) {
    const result = this.api.generateCsrForIdentityProvider(idpId, metadata, _options);
    return result.toPromise();
  }
  /**
      * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
      * Generate New IdP Signing Key Credential
      * @param idpId
      * @param validityYears expiry of the IdP Key Credential
      */
  generateIdentityProviderSigningKey(idpId, validityYears, _options) {
    const result = this.api.generateIdentityProviderSigningKey(idpId, validityYears, _options);
    return result.toPromise();
  }
  /**
      * Gets a specific Certificate Signing Request model by id
      * Get Csr for Identity Provider
      * @param idpId
      * @param csrId
      */
  getCsrForIdentityProvider(idpId, csrId, _options) {
    const result = this.api.getCsrForIdentityProvider(idpId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Fetches an IdP by `id`.
      * Get Identity Provider
      * @param idpId
      */
  getIdentityProvider(idpId, _options) {
    const result = this.api.getIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a linked IdP user by ID
      * Get Identity Provider Application User
      * @param idpId
      * @param userId
      */
  getIdentityProviderApplicationUser(idpId, userId, _options) {
    const result = this.api.getIdentityProviderApplicationUser(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Gets a specific IdP Key Credential by `kid`
      * Get Identity Provider Key
      * @param keyId
      */
  getIdentityProviderKey(keyId, _options) {
    const result = this.api.getIdentityProviderKey(keyId, _options);
    return result.toPromise();
  }
  /**
      * Gets a specific IdP Key Credential by `kid`
      * Get Signing Key Credential for IdP
      * @param idpId
      * @param keyId
      */
  getIdentityProviderSigningKey(idpId, keyId, _options) {
    const result = this.api.getIdentityProviderSigningKey(idpId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
      * Link a user to a Social IdP without a transaction
      * @param idpId
      * @param userId
      * @param userIdentityProviderLinkRequest
      */
  linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options) {
    const result = this.api.linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options);
    return result.toPromise();
  }
  /**
      * Enumerates Certificate Signing Requests for an IdP
      * List Certificate Signing Requests for IdP
      * @param idpId
      */
  listCsrsForIdentityProvider(idpId, _options) {
    const result = this.api.listCsrsForIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Find all the users linked to an identity provider
      * Find Users
      * @param idpId
      */
  listIdentityProviderApplicationUsers(idpId, _options) {
    const result = this.api.listIdentityProviderApplicationUsers(idpId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates IdP key credentials.
      * List Identity Provider Keys
      * @param after Specifies the pagination cursor for the next page of keys
      * @param limit Specifies the number of key results in a page
      */
  listIdentityProviderKeys(after, limit, _options) {
    const result = this.api.listIdentityProviderKeys(after, limit, _options);
    return result.toPromise();
  }
  /**
      * Enumerates signing key credentials for an IdP
      * List Signing Key Credentials for IdP
      * @param idpId
      */
  listIdentityProviderSigningKeys(idpId, _options) {
    const result = this.api.listIdentityProviderSigningKeys(idpId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List Identity Providers
      * @param q Searches the name property of IdPs for matching value
      * @param after Specifies the pagination cursor for the next page of IdPs
      * @param limit Specifies the number of IdP results in a page
      * @param type Filters IdPs by type
      */
  listIdentityProviders(q, after, limit, type, _options) {
    const result = this.api.listIdentityProviders(q, after, limit, type, _options);
    return result.toPromise();
  }
  /**
      * Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.
      * Social Authentication Token Operation
      * @param idpId
      * @param userId
      */
  listSocialAuthTokens(idpId, userId, _options) {
    const result = this.api.listSocialAuthTokens(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
      * Publish Csr for Identity Provider
      * @param idpId
      * @param csrId
      * @param body
      */
  publishCsrForIdentityProvider(idpId, csrId, body, _options) {
    const result = this.api.publishCsrForIdentityProvider(idpId, csrId, body, _options);
    return result.toPromise();
  }
  /**
      * Revoke a Certificate Signing Request and delete the key pair from the IdP
      * Revoke Csr for Identity Provider
      * @param idpId
      * @param csrId
      */
  revokeCsrForIdentityProvider(idpId, csrId, _options) {
    const result = this.api.revokeCsrForIdentityProvider(idpId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Removes the link between the Okta user and the IdP user.
      * Unlink User from IdP
      * @param idpId
      * @param userId
      */
  unlinkUserFromIdentityProvider(idpId, userId, _options) {
    const result = this.api.unlinkUserFromIdentityProvider(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Updates the configuration for an IdP.
      * Update Identity Provider
      * @param idpId
      * @param identityProvider
      */
  updateIdentityProvider(idpId, identityProvider, _options) {
    const result = this.api.updateIdentityProvider(idpId, identityProvider, _options);
    return result.toPromise();
  }
}
exports.PromiseIdentityProviderApi = PromiseIdentityProviderApi;
const ObservableAPI_14 = require('./ObservableAPI');
class PromiseInlineHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_14.ObservableInlineHookApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates the Inline Hook matching the provided id
      * Activate Inline Hook
      * @param inlineHookId
      */
  activateInlineHook(inlineHookId, _options) {
    const result = this.api.activateInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Create Inline Hook
      * @param inlineHook
      */
  createInlineHook(inlineHook, _options) {
    const result = this.api.createInlineHook(inlineHook, _options);
    return result.toPromise();
  }
  /**
      * Deactivates the Inline Hook matching the provided id
      * Deactivate Inline Hook
      * @param inlineHookId
      */
  deactivateInlineHook(inlineHookId, _options) {
    const result = this.api.deactivateInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete Inline Hook
      * @param inlineHookId
      */
  deleteInlineHook(inlineHookId, _options) {
    const result = this.api.deleteInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute Inline Hook
      * @param inlineHookId
      * @param payloadData
      */
  executeInlineHook(inlineHookId, payloadData, _options) {
    const result = this.api.executeInlineHook(inlineHookId, payloadData, _options);
    return result.toPromise();
  }
  /**
      * Gets an inline hook by ID
      * Get Inline Hook
      * @param inlineHookId
      */
  getInlineHook(inlineHookId, _options) {
    const result = this.api.getInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Inline Hooks
      * @param type
      */
  listInlineHooks(type, _options) {
    const result = this.api.listInlineHooks(type, _options);
    return result.toPromise();
  }
  /**
      * Updates an inline hook by ID
      * Update Inline Hook
      * @param inlineHookId
      * @param inlineHook
      */
  updateInlineHook(inlineHookId, inlineHook, _options) {
    const result = this.api.updateInlineHook(inlineHookId, inlineHook, _options);
    return result.toPromise();
  }
}
exports.PromiseInlineHookApi = PromiseInlineHookApi;
const ObservableAPI_15 = require('./ObservableAPI');
class PromiseLinkedObjectApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_15.ObservableLinkedObjectApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Success
      * Add Linked Object Definition
      * @param linkedObject
      */
  addLinkedObjectDefinition(linkedObject, _options) {
    const result = this.api.addLinkedObjectDefinition(linkedObject, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Delete Linked Object Definition
      * @param linkedObjectName
      */
  deleteLinkedObjectDefinition(linkedObjectName, _options) {
    const result = this.api.deleteLinkedObjectDefinition(linkedObjectName, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Get Linked Object Definition
      * @param linkedObjectName
      */
  getLinkedObjectDefinition(linkedObjectName, _options) {
    const result = this.api.getLinkedObjectDefinition(linkedObjectName, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Linked Object Definitions
      */
  listLinkedObjectDefinitions(_options) {
    const result = this.api.listLinkedObjectDefinitions(_options);
    return result.toPromise();
  }
}
exports.PromiseLinkedObjectApi = PromiseLinkedObjectApi;
const ObservableAPI_16 = require('./ObservableAPI');
class PromiseNetworkZoneApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_16.ObservableNetworkZoneApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activate Network Zone
      * Activate Network Zone
      * @param zoneId
      */
  activateNetworkZone(zoneId, _options) {
    const result = this.api.activateNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Adds a new network zone to your Okta organization.
      * Add Network Zone
      * @param zone
      */
  createNetworkZone(zone, _options) {
    const result = this.api.createNetworkZone(zone, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a network zone.
      * Deactivate Network Zone
      * @param zoneId
      */
  deactivateNetworkZone(zoneId, _options) {
    const result = this.api.deactivateNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Removes network zone.
      * Delete Network Zone
      * @param zoneId
      */
  deleteNetworkZone(zoneId, _options) {
    const result = this.api.deleteNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a network zone from your Okta organization by `id`.
      * Get Network Zone
      * @param zoneId
      */
  getNetworkZone(zoneId, _options) {
    const result = this.api.getNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
      * List Network Zones
      * @param after Specifies the pagination cursor for the next page of network zones
      * @param limit Specifies the number of results for a page
      * @param filter Filters zones by usage or id expression
      */
  listNetworkZones(after, limit, filter, _options) {
    const result = this.api.listNetworkZones(after, limit, filter, _options);
    return result.toPromise();
  }
  /**
      * Updates a network zone in your organization.
      * Update Network Zone
      * @param zoneId
      * @param zone
      */
  updateNetworkZone(zoneId, zone, _options) {
    const result = this.api.updateNetworkZone(zoneId, zone, _options);
    return result.toPromise();
  }
}
exports.PromiseNetworkZoneApi = PromiseNetworkZoneApi;
const ObservableAPI_17 = require('./ObservableAPI');
class PromiseOrgSettingApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_17.ObservableOrgSettingApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * A list of email addresses to be removed from the set of email addresses that are bounced.
      * Remove Emails from Email Provider Bounce List
      * @param BouncesRemoveListObj
      */
  bulkRemoveEmailAddressBounces(BouncesRemoveListObj, _options) {
    const result = this.api.bulkRemoveEmailAddressBounces(BouncesRemoveListObj, _options);
    return result.toPromise();
  }
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
      * Extend Okta Support
      */
  extendOktaSupport(_options) {
    const result = this.api.extendOktaSupport(_options);
    return result.toPromise();
  }
  /**
      * Gets Okta Communication Settings of your organization.
      * Get Okta Communication Settings
      */
  getOktaCommunicationSettings(_options) {
    const result = this.api.getOktaCommunicationSettings(_options);
    return result.toPromise();
  }
  /**
      * Gets Contact Types of your organization.
      * Get org contact types
      */
  getOrgContactTypes(_options) {
    const result = this.api.getOrgContactTypes(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the URL of the User associated with the specified Contact Type.
      * Get org contact user
      * @param contactType
      */
  getOrgContactUser(contactType, _options) {
    const result = this.api.getOrgContactUser(contactType, _options);
    return result.toPromise();
  }
  /**
      * Gets Okta Support Settings of your organization.
      * Get Okta Support settings
      */
  getOrgOktaSupportSettings(_options) {
    const result = this.api.getOrgOktaSupportSettings(_options);
    return result.toPromise();
  }
  /**
      * Gets preferences of your organization.
      * Get org preferences
      */
  getOrgPreferences(_options) {
    const result = this.api.getOrgPreferences(_options);
    return result.toPromise();
  }
  /**
      * Get settings of your organization.
      * Get org settings
      */
  getOrgSettings(_options) {
    const result = this.api.getOrgSettings(_options);
    return result.toPromise();
  }
  /**
      * Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.
      * Grant Okta Support
      */
  grantOktaSupport(_options) {
    const result = this.api.grantOktaSupport(_options);
    return result.toPromise();
  }
  /**
      * Hide the Okta UI footer for all end users of your organization.
      * Show Okta UI Footer
      */
  hideOktaUIFooter(_options) {
    const result = this.api.hideOktaUIFooter(_options);
    return result.toPromise();
  }
  /**
      * Opts in all users of this org to Okta Communication emails.
      * Opt in all users to Okta Communication emails
      */
  optInUsersToOktaCommunicationEmails(_options) {
    const result = this.api.optInUsersToOktaCommunicationEmails(_options);
    return result.toPromise();
  }
  /**
      * Opts out all users of this org from Okta Communication emails.
      * Opt out all users from Okta Communication emails
      */
  optOutUsersFromOktaCommunicationEmails(_options) {
    const result = this.api.optOutUsersFromOktaCommunicationEmails(_options);
    return result.toPromise();
  }
  /**
      * Partial update settings of your organization.
      * Partial update Org Setting
      * @param OrgSetting
      */
  partialUpdateOrgSetting(OrgSetting, _options) {
    const result = this.api.partialUpdateOrgSetting(OrgSetting, _options);
    return result.toPromise();
  }
  /**
      * Revokes Okta Support access to your organization.
      * Extend Okta Support
      */
  revokeOktaSupport(_options) {
    const result = this.api.revokeOktaSupport(_options);
    return result.toPromise();
  }
  /**
      * Makes the Okta UI footer visible for all end users of your organization.
      * Show Okta UI Footer
      */
  showOktaUIFooter(_options) {
    const result = this.api.showOktaUIFooter(_options);
    return result.toPromise();
  }
  /**
      * Updates the User associated with the specified Contact Type.
      * Update org contact user
      * @param contactType
      * @param orgContactUser
      */
  updateOrgContactUser(contactType, orgContactUser, _options) {
    const result = this.api.updateOrgContactUser(contactType, orgContactUser, _options);
    return result.toPromise();
  }
  /**
      * Updates the logo for your organization.
      * Update org logo
      */
  updateOrgLogo(_options) {
    const result = this.api.updateOrgLogo(_options);
    return result.toPromise();
  }
  /**
      * Update settings of your organization.
      * Update Org setting
      * @param orgSetting
      */
  updateOrgSetting(orgSetting, _options) {
    const result = this.api.updateOrgSetting(orgSetting, _options);
    return result.toPromise();
  }
}
exports.PromiseOrgSettingApi = PromiseOrgSettingApi;
const ObservableAPI_18 = require('./ObservableAPI');
class PromisePolicyApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_18.ObservablePolicyApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a policy.
      * Activate Policy
      * @param policyId
      */
  activatePolicy(policyId, _options) {
    const result = this.api.activatePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Activates a policy rule.
      * Activate Policy Rule
      * @param policyId
      * @param ruleId
      */
  activatePolicyRule(policyId, ruleId, _options) {
    const result = this.api.activatePolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy.
      * Create Policy
      * @param policy
      * @param activate
      */
  createPolicy(policy, activate, _options) {
    const result = this.api.createPolicy(policy, activate, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy rule.
      * Create Policy Rule
      * @param policyId
      * @param policyRule
      */
  createPolicyRule(policyId, policyRule, _options) {
    const result = this.api.createPolicyRule(policyId, policyRule, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a policy.
      * Deactivate Policy
      * @param policyId
      */
  deactivatePolicy(policyId, _options) {
    const result = this.api.deactivatePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a policy rule.
      * Deactivate Policy Rule
      * @param policyId
      * @param ruleId
      */
  deactivatePolicyRule(policyId, ruleId, _options) {
    const result = this.api.deactivatePolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Removes a policy.
      * Delete Policy
      * @param policyId
      */
  deletePolicy(policyId, _options) {
    const result = this.api.deletePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Removes a policy rule.
      * Delete Policy Rule
      * @param policyId
      * @param ruleId
      */
  deletePolicyRule(policyId, ruleId, _options) {
    const result = this.api.deletePolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Gets a policy.
      * Get Policy
      * @param policyId
      * @param expand
      */
  getPolicy(policyId, expand, _options) {
    const result = this.api.getPolicy(policyId, expand, _options);
    return result.toPromise();
  }
  /**
      * Gets a policy rule.
      * Get Policy Rule
      * @param policyId
      * @param ruleId
      */
  getPolicyRule(policyId, ruleId, _options) {
    const result = this.api.getPolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Gets all policies with the specified type.
      * List Policies
      * @param type
      * @param status
      * @param expand
      */
  listPolicies(type, status, expand, _options) {
    const result = this.api.listPolicies(type, status, expand, _options);
    return result.toPromise();
  }
  /**
      * Enumerates all policy rules.
      * List Policy Rules
      * @param policyId
      */
  listPolicyRules(policyId, _options) {
    const result = this.api.listPolicyRules(policyId, _options);
    return result.toPromise();
  }
  /**
      * Updates a policy.
      * Update Policy
      * @param policyId
      * @param policy
      */
  updatePolicy(policyId, policy, _options) {
    const result = this.api.updatePolicy(policyId, policy, _options);
    return result.toPromise();
  }
  /**
      * Updates a policy rule.
      * Update Policy Rule
      * @param policyId
      * @param ruleId
      * @param policyRule
      */
  updatePolicyRule(policyId, ruleId, policyRule, _options) {
    const result = this.api.updatePolicyRule(policyId, ruleId, policyRule, _options);
    return result.toPromise();
  }
}
exports.PromisePolicyApi = PromisePolicyApi;
const ObservableAPI_19 = require('./ObservableAPI');
class PromisePrincipalRateLimitApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_19.ObservablePrincipalRateLimitApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Adds a new Principal Rate Limit entity to your organization. In the current release, we only allow one Principal Rate Limit entity per org and principal.
      * Create Principal Rate Limit entity
      * @param entity
      */
  createPrincipalRateLimitEntity(entity, _options) {
    const result = this.api.createPrincipalRateLimitEntity(entity, _options);
    return result.toPromise();
  }
  /**
      * Fetches a Principal Rate Limit entity by `principalRateLimitId`.
      * Get Principal Rate Limit entity
      * @param principalRateLimitId id of the Principal Rate Limit
      */
  getPrincipalRateLimitEntity(principalRateLimitId, _options) {
    const result = this.api.getPrincipalRateLimitEntity(principalRateLimitId, _options);
    return result.toPromise();
  }
  /**
      * Lists all Principal Rate Limit entities considering the provided parameters.
      * List Principal Rate Limit entities
      * @param filter
      * @param after
      * @param limit
      */
  listPrincipalRateLimitEntities(filter, after, limit, _options) {
    const result = this.api.listPrincipalRateLimitEntities(filter, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Update a  Principal Rate Limit entity by `principalRateLimitId`.
      * Update Principal Rate Limit entity
      * @param principalRateLimitId id of the Principal Rate Limit
      * @param entity
      */
  updatePrincipalRateLimitEntity(principalRateLimitId, entity, _options) {
    const result = this.api.updatePrincipalRateLimitEntity(principalRateLimitId, entity, _options);
    return result.toPromise();
  }
}
exports.PromisePrincipalRateLimitApi = PromisePrincipalRateLimitApi;
const ObservableAPI_20 = require('./ObservableAPI');
class PromiseProfileMappingApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_20.ObservableProfileMappingApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Fetches a single Profile Mapping referenced by its ID.
      * Get Profile Mapping
      * @param mappingId
      */
  getProfileMapping(mappingId, _options) {
    const result = this.api.getProfileMapping(mappingId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates Profile Mappings in your organization with pagination.
      * List Profile Mappings
      * @param after
      * @param limit
      * @param sourceId
      * @param targetId
      */
  listProfileMappings(after, limit, sourceId, targetId, _options) {
    const result = this.api.listProfileMappings(after, limit, sourceId, targetId, _options);
    return result.toPromise();
  }
  /**
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings.
      * Update Profile Mapping
      * @param mappingId
      * @param profileMapping
      */
  updateProfileMapping(mappingId, profileMapping, _options) {
    const result = this.api.updateProfileMapping(mappingId, profileMapping, _options);
    return result.toPromise();
  }
}
exports.PromiseProfileMappingApi = PromiseProfileMappingApi;
const ObservableAPI_21 = require('./ObservableAPI');
class PromiseSchemaApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_21.ObservableSchemaApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Fetches the Schema for an App User
      * Fetches the Schema for an App User
      * @param appInstanceId
      */
  getApplicationUserSchema(appInstanceId, _options) {
    const result = this.api.getApplicationUserSchema(appInstanceId, _options);
    return result.toPromise();
  }
  /**
      * Fetches the group schema
      * Fetches the group schema
      */
  getGroupSchema(_options) {
    const result = this.api.getGroupSchema(_options);
    return result.toPromise();
  }
  /**
      * Fetches the schema for a Schema Id.
      * Fetches the schema for a Schema Id.
      * @param schemaId
      */
  getUserSchema(schemaId, _options) {
    const result = this.api.getUserSchema(schemaId, _options);
    return result.toPromise();
  }
  /**
      * Partial updates on the User Profile properties of the Application User Schema.
      * Partial updates on the User Profile properties of the Application User Schema.
      * @param appInstanceId
      * @param body
      */
  updateApplicationUserProfile(appInstanceId, body, _options) {
    const result = this.api.updateApplicationUserProfile(appInstanceId, body, _options);
    return result.toPromise();
  }
  /**
      * Updates, adds ore removes one or more custom Group Profile properties in the schema
      * Updates, adds ore removes one or more custom Group Profile properties in the schema
      * @param GroupSchema
      */
  updateGroupSchema(GroupSchema, _options) {
    const result = this.api.updateGroupSchema(GroupSchema, _options);
    return result.toPromise();
  }
  /**
      * Partial updates on the User Profile properties of the user schema.
      * Update User Profile
      * @param schemaId
      * @param userSchema
      */
  updateUserProfile(schemaId, userSchema, _options) {
    const result = this.api.updateUserProfile(schemaId, userSchema, _options);
    return result.toPromise();
  }
}
exports.PromiseSchemaApi = PromiseSchemaApi;
const ObservableAPI_22 = require('./ObservableAPI');
class PromiseSessionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_22.ObservableSessionApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
      * Create Session with Session Token
      * @param createSessionRequest
      */
  createSession(createSessionRequest, _options) {
    const result = this.api.createSession(createSessionRequest, _options);
    return result.toPromise();
  }
  /**
      * End a session.
      * End Session
      * @param sessionId
      */
  endSession(sessionId, _options) {
    const result = this.api.endSession(sessionId, _options);
    return result.toPromise();
  }
  /**
      * Get details about a session.
      * Get Session
      * @param sessionId
      */
  getSession(sessionId, _options) {
    const result = this.api.getSession(sessionId, _options);
    return result.toPromise();
  }
  /**
      * Refresh a session.
      * Refresh Session
      * @param sessionId
      */
  refreshSession(sessionId, _options) {
    const result = this.api.refreshSession(sessionId, _options);
    return result.toPromise();
  }
}
exports.PromiseSessionApi = PromiseSessionApi;
const ObservableAPI_23 = require('./ObservableAPI');
class PromiseSubscriptionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_23.ObservableSubscriptionApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * When roleType Get subscriptions of a Role with a specific notification type. Else when roleId Get subscription of a Custom Role with a specific notification type.
      * Get subscriptions of a Custom Role with a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  getRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const result = this.api.getRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * Get the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * Get the subscription of a User with a specific notification type
      * @param userId
      * @param notificationType
      */
  getUserSubscriptionByNotificationType(userId, notificationType, _options) {
    const result = this.api.getUserSubscriptionByNotificationType(userId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * When roleType List all subscriptions of a Role. Else when roleId List subscriptions of a Custom Role
      * List all subscriptions of a Custom Role
      * @param roleTypeOrRoleId
      */
  listRoleSubscriptions(roleTypeOrRoleId, _options) {
    const result = this.api.listRoleSubscriptions(roleTypeOrRoleId, _options);
    return result.toPromise();
  }
  /**
      * List subscriptions of a User. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List subscriptions of a User
      * @param userId
      */
  listUserSubscriptions(userId, _options) {
    const result = this.api.listUserSubscriptions(userId, _options);
    return result.toPromise();
  }
  /**
      * When roleType Subscribes a Role to a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Subscribes a Custom Role to a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
      * Subscribe a Custom Role to a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const result = this.api.subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * Subscribes a User to a specific notification type. Only the current User can subscribe to a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Subscribe to a specific notification type
      * @param userId
      * @param notificationType
      */
  subscribeUserSubscriptionByNotificationType(userId, notificationType, _options) {
    const result = this.api.subscribeUserSubscriptionByNotificationType(userId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * When roleType Unsubscribes a Role from a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Unsubscribes a Custom Role from a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
      * Unsubscribe a Custom Role from a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const result = this.api.unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * Unsubscribes a User from a specific notification type. Only the current User can unsubscribe from a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Unsubscribe from a specific notification type
      * @param userId
      * @param notificationType
      */
  unsubscribeUserSubscriptionByNotificationType(userId, notificationType, _options) {
    const result = this.api.unsubscribeUserSubscriptionByNotificationType(userId, notificationType, _options);
    return result.toPromise();
  }
}
exports.PromiseSubscriptionApi = PromiseSubscriptionApi;
const ObservableAPI_24 = require('./ObservableAPI');
class PromiseSystemLogApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_24.ObservableSystemLogApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * Fetch a list of events from your Okta organization system log.
      * @param since
      * @param until
      * @param filter
      * @param q
      * @param limit
      * @param sortOrder
      * @param after
      */
  getLogs(since, until, filter, q, limit, sortOrder, after, _options) {
    const result = this.api.getLogs(since, until, filter, q, limit, sortOrder, after, _options);
    return result.toPromise();
  }
}
exports.PromiseSystemLogApi = PromiseSystemLogApi;
const ObservableAPI_25 = require('./ObservableAPI');
class PromiseTemplateApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_25.ObservableTemplateApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Adds a new custom SMS template to your organization.
      * Add SMS Template
      * @param smsTemplate
      */
  createSmsTemplate(smsTemplate, _options) {
    const result = this.api.createSmsTemplate(smsTemplate, _options);
    return result.toPromise();
  }
  /**
      * Removes an SMS template.
      * Remove SMS Template
      * @param templateId
      */
  deleteSmsTemplate(templateId, _options) {
    const result = this.api.deleteSmsTemplate(templateId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a specific template by `id`
      * Get SMS Template
      * @param templateId
      */
  getSmsTemplate(templateId, _options) {
    const result = this.api.getSmsTemplate(templateId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.
      * List SMS Templates
      * @param templateType
      */
  listSmsTemplates(templateType, _options) {
    const result = this.api.listSmsTemplates(templateType, _options);
    return result.toPromise();
  }
  /**
      * Updates only some of the SMS template properties:
      * Partial SMS Template Update
      * @param templateId
      * @param smsTemplate
      */
  partialUpdateSmsTemplate(templateId, smsTemplate, _options) {
    const result = this.api.partialUpdateSmsTemplate(templateId, smsTemplate, _options);
    return result.toPromise();
  }
  /**
      * Updates the SMS template.
      * Update SMS Template
      * @param templateId
      * @param smsTemplate
      */
  updateSmsTemplate(templateId, smsTemplate, _options) {
    const result = this.api.updateSmsTemplate(templateId, smsTemplate, _options);
    return result.toPromise();
  }
}
exports.PromiseTemplateApi = PromiseTemplateApi;
const ObservableAPI_26 = require('./ObservableAPI');
class PromiseThreatInsightApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_26.ObservableThreatInsightApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Gets current ThreatInsight configuration
      * Get Current Configuration
      */
  getCurrentConfiguration(_options) {
    const result = this.api.getCurrentConfiguration(_options);
    return result.toPromise();
  }
  /**
      * Updates ThreatInsight configuration
      * Update Configuration
      * @param threatInsightConfiguration
      */
  updateConfiguration(threatInsightConfiguration, _options) {
    const result = this.api.updateConfiguration(threatInsightConfiguration, _options);
    return result.toPromise();
  }
}
exports.PromiseThreatInsightApi = PromiseThreatInsightApi;
const ObservableAPI_27 = require('./ObservableAPI');
class PromiseTrustedOriginApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_27.ObservableTrustedOriginApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Success
      * Activate Trusted Origin
      * @param trustedOriginId
      */
  activateOrigin(trustedOriginId, _options) {
    const result = this.api.activateOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Create Trusted Origin
      * @param trustedOrigin
      */
  createOrigin(trustedOrigin, _options) {
    const result = this.api.createOrigin(trustedOrigin, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Deactivate Trusted Origin
      * @param trustedOriginId
      */
  deactivateOrigin(trustedOriginId, _options) {
    const result = this.api.deactivateOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Delete Trusted Origin
      * @param trustedOriginId
      */
  deleteOrigin(trustedOriginId, _options) {
    const result = this.api.deleteOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Get Trusted Origin
      * @param trustedOriginId
      */
  getOrigin(trustedOriginId, _options) {
    const result = this.api.getOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Trusted Origins
      * @param q
      * @param filter
      * @param after
      * @param limit
      */
  listOrigins(q, filter, after, limit, _options) {
    const result = this.api.listOrigins(q, filter, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Update Trusted Origin
      * @param trustedOriginId
      * @param trustedOrigin
      */
  updateOrigin(trustedOriginId, trustedOrigin, _options) {
    const result = this.api.updateOrigin(trustedOriginId, trustedOrigin, _options);
    return result.toPromise();
  }
}
exports.PromiseTrustedOriginApi = PromiseTrustedOriginApi;
const ObservableAPI_28 = require('./ObservableAPI');
class PromiseUserApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_28.ObservableUserApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
      * Activate User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  activateUser(userId, sendEmail, _options) {
    const result = this.api.activateUser(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Add All Apps as Target to Role
      * @param userId
      * @param roleId
      */
  addAllAppsAsTargetToRole(userId, roleId, _options) {
    const result = this.api.addAllAppsAsTargetToRole(userId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Add Application Target to Admin Role for User
      * @param userId
      * @param roleId
      * @param appName
      */
  addApplicationTargetToAdminRoleForUser(userId, roleId, appName, _options) {
    const result = this.api.addApplicationTargetToAdminRoleForUser(userId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Add App Instance Target to App Administrator Role given to a User
      * Add App Instance Target to App Administrator Role given to a User
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  addApplicationTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    const result = this.api.addApplicationTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Add Group Target to Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  addGroupTargetToRole(userId, roleId, groupId, _options) {
    const result = this.api.addGroupTargetToRole(userId, roleId, groupId, _options);
    return result.toPromise();
  }
  /**
      * Assigns a role to a user.
      * Assign Role to User
      * @param userId
      * @param assignRoleRequest
      * @param disableNotifications
      */
  assignRoleToUser(userId, assignRoleRequest, disableNotifications, _options) {
    const result = this.api.assignRoleToUser(userId, assignRoleRequest, disableNotifications, _options);
    return result.toPromise();
  }
  /**
      * Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
      * Change Password
      * @param userId
      * @param changePasswordRequest
      * @param strict
      */
  changePassword(userId, changePasswordRequest, strict, _options) {
    const result = this.api.changePassword(userId, changePasswordRequest, strict, _options);
    return result.toPromise();
  }
  /**
      * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
      * Change Recovery Question
      * @param userId
      * @param userCredentials
      */
  changeRecoveryQuestion(userId, userCredentials, _options) {
    const result = this.api.changeRecoveryQuestion(userId, userCredentials, _options);
    return result.toPromise();
  }
  /**
      * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Clear User Sessions
      * @param userId
      * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
      */
  clearUserSessions(userId, oauthTokens, _options) {
    const result = this.api.clearUserSessions(userId, oauthTokens, _options);
    return result.toPromise();
  }
  /**
      * Creates a new user in your Okta organization with or without credentials.
      * Create User
      * @param body
      * @param activate Executes activation lifecycle operation when creating the user
      * @param provider Indicates whether to create a user with a specified authentication provider
      * @param nextLogin With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in.
      */
  createUser(body, activate, provider, nextLogin, _options) {
    const result = this.api.createUser(body, activate, provider, nextLogin, _options);
    return result.toPromise();
  }
  /**
      * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
      * Delete User
      * @param userId
      * @param sendEmail
      */
  deactivateOrDeleteUser(userId, sendEmail, _options) {
    const result = this.api.deactivateOrDeleteUser(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
      * Deactivate User
      * @param userId
      * @param sendEmail
      */
  deactivateUser(userId, sendEmail, _options) {
    const result = this.api.deactivateUser(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
      * Expire Password
      * @param userId
      */
  expirePassword(userId, _options) {
    const result = this.api.expirePassword(userId, _options);
    return result.toPromise();
  }
  /**
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response.
      * Expire Password and Set Temporary Password
      * @param userId
      */
  expirePasswordAndGetTemporaryPassword(userId, _options) {
    const result = this.api.expirePasswordAndGetTemporaryPassword(userId, _options);
    return result.toPromise();
  }
  /**
      * Initiate forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
      * Initiate Forgot Password
      * @param userId
      * @param sendEmail
      */
  forgotPassword(userId, sendEmail, _options) {
    const result = this.api.forgotPassword(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct.
      * Reset Password with Recovery Question
      * @param userId
      * @param userCredentials
      * @param sendEmail
      */
  forgotPasswordSetNewPassword(userId, userCredentials, sendEmail, _options) {
    const result = this.api.forgotPasswordSetNewPassword(userId, userCredentials, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Get linked objects for a user, relationshipName can be a primary or associated relationship name
      * Get Linked Objects for User
      * @param userId
      * @param relationshipName
      * @param after
      * @param limit
      */
  getLinkedObjectsForUser(userId, relationshipName, after, limit, _options) {
    const result = this.api.getLinkedObjectsForUser(userId, relationshipName, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Gets a refresh token issued for the specified User and Client.
      * Get Refresh Token for User and Client
      * @param userId
      * @param clientId
      * @param tokenId
      * @param expand
      * @param limit
      * @param after
      */
  getRefreshTokenForUserAndClient(userId, clientId, tokenId, expand, limit, after, _options) {
    const result = this.api.getRefreshTokenForUserAndClient(userId, clientId, tokenId, expand, limit, after, _options);
    return result.toPromise();
  }
  /**
      * Fetches a user from your Okta organization.
      * Get User
      * @param userId
      */
  getUser(userId, _options) {
    const result = this.api.getUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Gets a grant for the specified user
      * Get User Grant
      * @param userId
      * @param grantId
      * @param expand
      */
  getUserGrant(userId, grantId, expand, _options) {
    const result = this.api.getUserGrant(userId, grantId, expand, _options);
    return result.toPromise();
  }
  /**
      * Gets role that is assigned to user.
      * Get User Role
      * @param userId
      * @param roleId
      */
  getUserRole(userId, roleId, _options) {
    const result = this.api.getUserRole(userId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
      * Get Assigned App Links
      * @param userId
      */
  listAppLinks(userId, _options) {
    const result = this.api.listAppLinks(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List Application Targets for Application Administrator Role for User
      * @param userId
      * @param roleId
      * @param after
      * @param limit
      */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId, roleId, after, limit, _options) {
    const result = this.api.listApplicationTargetsForApplicationAdministratorRoleForUser(userId, roleId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all roles assigned to a user.
      * List Assigned Roles for User
      * @param userId
      * @param expand
      */
  listAssignedRolesForUser(userId, expand, _options) {
    const result = this.api.listAssignedRolesForUser(userId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all grants for a specified user and client
      * List Grants for User and Client
      * @param userId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listGrantsForUserAndClient(userId, clientId, expand, after, limit, _options) {
    const result = this.api.listGrantsForUserAndClient(userId, clientId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Success
      * List Group Targets for Role
      * @param userId
      * @param roleId
      * @param after
      * @param limit
      */
  listGroupTargetsForRole(userId, roleId, after, limit, _options) {
    const result = this.api.listGroupTargetsForRole(userId, roleId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all refresh tokens issued for the specified User and Client.
      * List Refresh Tokens for User and Client
      * @param userId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listRefreshTokensForUserAndClient(userId, clientId, expand, after, limit, _options) {
    const result = this.api.listRefreshTokensForUserAndClient(userId, clientId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all client resources for which the specified user has grants or tokens.
      * List User Clients
      * @param userId
      */
  listUserClients(userId, _options) {
    const result = this.api.listUserClients(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all grants for the specified user
      * List User Grants
      * @param userId
      * @param scopeId
      * @param expand
      * @param after
      * @param limit
      */
  listUserGrants(userId, scopeId, expand, after, limit, _options) {
    const result = this.api.listUserGrants(userId, scopeId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Fetches the groups of which the user is a member.
      * Get Member Groups
      * @param userId
      */
  listUserGroups(userId, _options) {
    const result = this.api.listUserGroups(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists the IdPs associated with the user.
      * Listing IdPs associated with a user
      * @param userId
      */
  listUserIdentityProviders(userId, _options) {
    const result = this.api.listUserIdentityProviders(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List Users
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      * @param q Finds a user that matches firstName, lastName, and email properties
      * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
      * @param filter Filters users with a supported expression for a subset of properties
      * @param search Searches for users with a supported filtering  expression for most properties
      * @param sortBy
      * @param sortOrder
      */
  listUsers(after, q, limit, filter, search, sortBy, sortOrder, _options) {
    const result = this.api.listUsers(after, q, limit, filter, search, sortBy, sortOrder, _options);
    return result.toPromise();
  }
  /**
      * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
      * Partial Update User
      * @param userId
      * @param user
      * @param strict
      */
  partialUpdateUser(userId, user, strict, _options) {
    const result = this.api.partialUpdateUser(userId, user, strict, _options);
    return result.toPromise();
  }
  /**
      * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
      * Reactivate User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  reactivateUser(userId, sendEmail, _options) {
    const result = this.api.reactivateUser(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Remove App Instance Target to App Administrator Role given to a User
      * Remove App Instance Target to App Administrator Role given to a User
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  removeApplicationTargetFromAdministratorRoleForUser(userId, roleId, appName, applicationId, _options) {
    const result = this.api.removeApplicationTargetFromAdministratorRoleForUser(userId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Remove Application Target from Application Administrator Role for User
      * @param userId
      * @param roleId
      * @param appName
      */
  removeApplicationTargetFromApplicationAdministratorRoleForUser(userId, roleId, appName, _options) {
    const result = this.api.removeApplicationTargetFromApplicationAdministratorRoleForUser(userId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Success
      * Remove Group Target from Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  removeGroupTargetFromRole(userId, roleId, groupId, _options) {
    const result = this.api.removeGroupTargetFromRole(userId, roleId, groupId, _options);
    return result.toPromise();
  }
  /**
      * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Remove Linked Object for User
      * @param userId
      * @param relationshipName
      */
  removeLinkedObjectForUser(userId, relationshipName, _options) {
    const result = this.api.removeLinkedObjectForUser(userId, relationshipName, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a role from a user.
      * Remove Role from User
      * @param userId
      * @param roleId
      */
  removeRoleFromUser(userId, roleId, _options) {
    const result = this.api.removeRoleFromUser(userId, roleId, _options);
    return result.toPromise();
  }
  /**
      * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset Factors
      * @param userId
      */
  resetFactors(userId, _options) {
    const result = this.api.resetFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Reset Password
      * @param userId
      * @param sendEmail
      */
  resetPassword(userId, sendEmail, _options) {
    const result = this.api.resetPassword(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Revokes all grants for the specified user and client
      * Revoke Grants for User and Client
      * @param userId
      * @param clientId
      */
  revokeGrantsForUserAndClient(userId, clientId, _options) {
    const result = this.api.revokeGrantsForUserAndClient(userId, clientId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the specified refresh token.
      * Revoke Token for User and Client
      * @param userId
      * @param clientId
      * @param tokenId
      */
  revokeTokenForUserAndClient(userId, clientId, tokenId, _options) {
    const result = this.api.revokeTokenForUserAndClient(userId, clientId, tokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all refresh tokens issued for the specified User and Client.
      * Revoke Tokens for User and Client
      * @param userId
      * @param clientId
      */
  revokeTokensForUserAndClient(userId, clientId, _options) {
    const result = this.api.revokeTokensForUserAndClient(userId, clientId, _options);
    return result.toPromise();
  }
  /**
      * Revokes one grant for a specified user
      * Revoke User Grant
      * @param userId
      * @param grantId
      */
  revokeUserGrant(userId, grantId, _options) {
    const result = this.api.revokeUserGrant(userId, grantId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all grants for a specified user
      * Revoke User Grants
      * @param userId
      */
  revokeUserGrants(userId, _options) {
    const result = this.api.revokeUserGrants(userId, _options);
    return result.toPromise();
  }
  /**
      * Sets a linked object for a user.
      * Set Linked Object for User
      * @param associatedUserId
      * @param primaryRelationshipName
      * @param primaryUserId
      */
  setLinkedObjectForUser(associatedUserId, primaryRelationshipName, primaryUserId, _options) {
    const result = this.api.setLinkedObjectForUser(associatedUserId, primaryRelationshipName, primaryUserId, _options);
    return result.toPromise();
  }
  /**
      * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
      * Suspend User
      * @param userId
      */
  suspendUser(userId, _options) {
    const result = this.api.suspendUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
      * Unlock User
      * @param userId
      */
  unlockUser(userId, _options) {
    const result = this.api.unlockUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend User
      * @param userId
      */
  unsuspendUser(userId, _options) {
    const result = this.api.unsuspendUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Update a user's profile and/or credentials using strict-update semantics.
      * Update User
      * @param userId
      * @param user
      * @param strict
      */
  updateUser(userId, user, strict, _options) {
    const result = this.api.updateUser(userId, user, strict, _options);
    return result.toPromise();
  }
}
exports.PromiseUserApi = PromiseUserApi;
const ObservableAPI_29 = require('./ObservableAPI');
class PromiseUserFactorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_29.ObservableUserFactorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate Factor
      * @param userId
      * @param factorId
      * @param body
      */
  activateFactor(userId, factorId, body, _options) {
    const result = this.api.activateFactor(userId, factorId, body, _options);
    return result.toPromise();
  }
  /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
      * Delete Factor
      * @param userId
      * @param factorId
      * @param removeEnrollmentRecovery
      */
  deleteFactor(userId, factorId, removeEnrollmentRecovery, _options) {
    const result = this.api.deleteFactor(userId, factorId, removeEnrollmentRecovery, _options);
    return result.toPromise();
  }
  /**
      * Enrolls a user with a supported factor.
      * Enroll Factor
      * @param userId
      * @param body Factor
      * @param updatePhone
      * @param templateId id of SMS template (only for SMS factor)
      * @param tokenLifetimeSeconds
      * @param activate
      */
  enrollFactor(userId, body, updatePhone, templateId, tokenLifetimeSeconds, activate, _options) {
    const result = this.api.enrollFactor(userId, body, updatePhone, templateId, tokenLifetimeSeconds, activate, _options);
    return result.toPromise();
  }
  /**
      * Fetches a factor for the specified user
      * Get Factor
      * @param userId
      * @param factorId
      */
  getFactor(userId, factorId, _options) {
    const result = this.api.getFactor(userId, factorId, _options);
    return result.toPromise();
  }
  /**
      * Polls factors verification transaction for status.
      * Get Factor Transaction Status
      * @param userId
      * @param factorId
      * @param transactionId
      */
  getFactorTransactionStatus(userId, factorId, transactionId, _options) {
    const result = this.api.getFactorTransactionStatus(userId, factorId, transactionId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates all the enrolled factors for the specified user
      * List Factors
      * @param userId
      */
  listFactors(userId, _options) {
    const result = this.api.listFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates all the supported factors that can be enrolled for the specified user
      * List Supported Factors
      * @param userId
      */
  listSupportedFactors(userId, _options) {
    const result = this.api.listSupportedFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates all available security questions for a user's `question` factor
      * List Supported Security Questions
      * @param userId
      */
  listSupportedSecurityQuestions(userId, _options) {
    const result = this.api.listSupportedSecurityQuestions(userId, _options);
    return result.toPromise();
  }
  /**
      * Verifies an OTP for a `token` or `token:hardware` factor
      * Verify MFA Factor
      * @param userId
      * @param factorId
      * @param templateId
      * @param tokenLifetimeSeconds
      * @param X_Forwarded_For
      * @param User_Agent
      * @param Accept_Language
      * @param body
      */
  verifyFactor(userId, factorId, templateId, tokenLifetimeSeconds, X_Forwarded_For, User_Agent, Accept_Language, body, _options) {
    const result = this.api.verifyFactor(userId, factorId, templateId, tokenLifetimeSeconds, X_Forwarded_For, User_Agent, Accept_Language, body, _options);
    return result.toPromise();
  }
}
exports.PromiseUserFactorApi = PromiseUserFactorApi;
const ObservableAPI_30 = require('./ObservableAPI');
class PromiseUserTypeApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_30.ObservableUserTypeApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * Create User Type
      * @param userType
      */
  createUserType(userType, _options) {
    const result = this.api.createUserType(userType, _options);
    return result.toPromise();
  }
  /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * Delete User Type
      * @param typeId
      */
  deleteUserType(typeId, _options) {
    const result = this.api.deleteUserType(typeId, _options);
    return result.toPromise();
  }
  /**
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Get User Type
      * @param typeId
      */
  getUserType(typeId, _options) {
    const result = this.api.getUserType(typeId, _options);
    return result.toPromise();
  }
  /**
      * Fetches all User Types in your org
      * List User Types
      */
  listUserTypes(_options) {
    const result = this.api.listUserTypes(_options);
    return result.toPromise();
  }
  /**
      * Replace an existing User Type
      * Replace User Type
      * @param typeId
      * @param userType
      */
  replaceUserType(typeId, userType, _options) {
    const result = this.api.replaceUserType(typeId, userType, _options);
    return result.toPromise();
  }
  /**
      * Updates an existing User Type
      * Update User Type
      * @param typeId
      * @param userType
      */
  updateUserType(typeId, userType, _options) {
    const result = this.api.updateUserType(typeId, userType, _options);
    return result.toPromise();
  }
}
exports.PromiseUserTypeApi = PromiseUserTypeApi;
