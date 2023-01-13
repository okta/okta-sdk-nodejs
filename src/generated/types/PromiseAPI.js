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
exports.PromiseUserTypeApi = exports.PromiseUserFactorApi = exports.PromiseUserApi = exports.PromiseTrustedOriginApi = exports.PromiseThreatInsightApi = exports.PromiseTemplateApi = exports.PromiseSystemLogApi = exports.PromiseSubscriptionApi = exports.PromiseSessionApi = exports.PromiseSchemaApi = exports.PromiseRoleTargetApi = exports.PromiseRoleAssignmentApi = exports.PromiseRoleApi = exports.PromiseRiskProviderApi = exports.PromiseRiskEventApi = exports.PromiseResourceSetApi = exports.PromiseRateLimitSettingsApi = exports.PromisePushProviderApi = exports.PromiseProfileMappingApi = exports.PromisePrincipalRateLimitApi = exports.PromisePolicyApi = exports.PromiseOrgSettingApi = exports.PromiseNetworkZoneApi = exports.PromiseLogStreamApi = exports.PromiseLinkedObjectApi = exports.PromiseInlineHookApi = exports.PromiseIdentitySourceApi = exports.PromiseIdentityProviderApi = exports.PromiseHookKeyApi = exports.PromiseGroupApi = exports.PromiseFeatureApi = exports.PromiseEventHookApi = exports.PromiseEmailDomainApi = exports.PromiseDeviceAssuranceApi = exports.PromiseDeviceApi = exports.PromiseCustomizationApi = exports.PromiseCustomDomainApi = exports.PromiseCAPTCHAApi = exports.PromiseBehaviorApi = exports.PromiseAuthorizationServerApi = exports.PromiseAuthenticatorApi = exports.PromiseAttackProtectionApi = exports.PromiseApplicationApi = exports.PromiseApiTokenApi = exports.PromiseAgentPoolsApi = void 0;
const ObservableAPI_1 = require('./ObservableAPI');
class PromiseAgentPoolsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_1.ObservableAgentPoolsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates scheduled Agent pool update
      * Activate an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  activateAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.activateAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.
      * Create an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdate
      */
  createAgentPoolsUpdate(poolId, AgentPoolUpdate, _options) {
    const result = this.api.createAgentPoolsUpdate(poolId, AgentPoolUpdate, _options);
    return result.toPromise();
  }
  /**
      * Deactivates scheduled Agent pool update
      * Deactivate an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deactivateAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.deactivateAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Deletes Agent pool update
      * Delete an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deleteAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.deleteAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves Agent pool update from updateId
      * Retrieve an Agent Pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  getAgentPoolsUpdateInstance(poolId, updateId, _options) {
    const result = this.api.getAgentPoolsUpdateInstance(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the current state of the agent pool update instance settings
      * Retrieve an Agent Pool update's settings
      * @param poolId Id of the agent pool for which the settings will apply
      */
  getAgentPoolsUpdateSettings(poolId, _options) {
    const result = this.api.getAgentPoolsUpdateSettings(poolId, _options);
    return result.toPromise();
  }
  /**
      * Lists all agent pools with pagination support
      * List all Agent Pools
      * @param limitPerPoolType Maximum number of AgentPools being returned
      * @param poolType Agent type to search for
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listAgentPools(limitPerPoolType, poolType, after, _options) {
    const result = this.api.listAgentPools(limitPerPoolType, poolType, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all agent pool updates
      * List all Agent Pool updates
      * @param poolId Id of the agent pool for which the settings will apply
      * @param scheduled Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates.
      */
  listAgentPoolsUpdates(poolId, scheduled, _options) {
    const result = this.api.listAgentPoolsUpdates(poolId, scheduled, _options);
    return result.toPromise();
  }
  /**
      * Pauses running or queued Agent pool update
      * Pause an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  pauseAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.pauseAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Resumes running or queued Agent pool update
      * Resume an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  resumeAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.resumeAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Retries Agent pool update
      * Retry an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  retryAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.retryAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Stops Agent pool update
      * Stop an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  stopAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.stopAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Updates Agent pool update and return latest agent pool update
      * Update an Agent Pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      * @param AgentPoolUpdate
      */
  updateAgentPoolsUpdate(poolId, updateId, AgentPoolUpdate, _options) {
    const result = this.api.updateAgentPoolsUpdate(poolId, updateId, AgentPoolUpdate, _options);
    return result.toPromise();
  }
  /**
      * Updates an agent pool update settings
      * Update an Agent Pool update settings
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdateSetting
      */
  updateAgentPoolsUpdateSettings(poolId, AgentPoolUpdateSetting, _options) {
    const result = this.api.updateAgentPoolsUpdateSettings(poolId, AgentPoolUpdateSetting, _options);
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
      * Retrieves the metadata for an active API token by id
      * Retrieve an API Token's Metadata
      * @param apiTokenId id of the API Token
      */
  getApiToken(apiTokenId, _options) {
    const result = this.api.getApiToken(apiTokenId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the metadata of the active API tokens
      * List all API Token Metadata
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param q Finds a token that matches the name or clientName.
      */
  listApiTokens(after, limit, q, _options) {
    const result = this.api.listApiTokens(after, limit, q, _options);
    return result.toPromise();
  }
  /**
      * Revokes an API token by `apiTokenId`
      * Revoke an API Token
      * @param apiTokenId id of the API Token
      */
  revokeApiToken(apiTokenId, _options) {
    const result = this.api.revokeApiToken(apiTokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the API token provided in the Authorization header
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
      * Activates an inactive application
      * Activate an Application
      * @param appId
      */
  activateApplication(appId, _options) {
    const result = this.api.activateApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Activates the default Provisioning Connection for an application
      * Activate the default Provisioning Connection
      * @param appId
      */
  activateDefaultProvisioningConnectionForApplication(appId, _options) {
    const result = this.api.activateDefaultProvisioningConnectionForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Assigns an application to a policy identified by `policyId`. If the application was previously assigned to another policy, this removes that assignment.
      * Assign an Application to a Policy
      * @param appId
      * @param policyId
      */
  assignApplicationPolicy(appId, policyId, _options) {
    const result = this.api.assignApplicationPolicy(appId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Assigns a group to an application
      * Assign a Group
      * @param appId
      * @param groupId
      * @param applicationGroupAssignment
      */
  assignGroupToApplication(appId, groupId, applicationGroupAssignment, _options) {
    const result = this.api.assignGroupToApplication(appId, groupId, applicationGroupAssignment, _options);
    return result.toPromise();
  }
  /**
      * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
      * Assign a User
      * @param appId
      * @param appUser
      */
  assignUserToApplication(appId, appUser, _options) {
    const result = this.api.assignUserToApplication(appId, appUser, _options);
    return result.toPromise();
  }
  /**
      * Clones a X.509 certificate for an application key credential from a source application to target application.
      * Clone a Key Credential
      * @param appId
      * @param keyId
      * @param targetAid Unique key of the target Application
      */
  cloneApplicationKey(appId, keyId, targetAid, _options) {
    const result = this.api.cloneApplicationKey(appId, keyId, targetAid, _options);
    return result.toPromise();
  }
  /**
      * Creates a new application to your Okta organization
      * Create an Application
      * @param application
      * @param activate Executes activation lifecycle operation when creating the app
      * @param OktaAccessGateway_Agent
      */
  createApplication(application, activate, OktaAccessGateway_Agent, _options) {
    const result = this.api.createApplication(application, activate, OktaAccessGateway_Agent, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an active application
      * Deactivate an Application
      * @param appId
      */
  deactivateApplication(appId, _options) {
    const result = this.api.deactivateApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates the default Provisioning Connection for an application
      * Deactivate the default Provisioning Connection for an Application
      * @param appId
      */
  deactivateDefaultProvisioningConnectionForApplication(appId, _options) {
    const result = this.api.deactivateDefaultProvisioningConnectionForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an inactive application
      * Delete an Application
      * @param appId
      */
  deleteApplication(appId, _options) {
    const result = this.api.deleteApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Generates a new X.509 certificate for an application key credential
      * Generate a Key Credential
      * @param appId
      * @param validityYears
      */
  generateApplicationKey(appId, validityYears, _options) {
    const result = this.api.generateApplicationKey(appId, validityYears, _options);
    return result.toPromise();
  }
  /**
      * Generates a new key pair and returns the Certificate Signing Request for it
      * Generate a Certificate Signing Request
      * @param appId
      * @param metadata
      */
  generateCsrForApplication(appId, metadata, _options) {
    const result = this.api.generateCsrForApplication(appId, metadata, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an application from your Okta organization by `id`
      * Retrieve an Application
      * @param appId
      * @param expand
      */
  getApplication(appId, expand, _options) {
    const result = this.api.getApplication(appId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an application group assignment
      * Retrieve an Assigned Group
      * @param appId
      * @param groupId
      * @param expand
      */
  getApplicationGroupAssignment(appId, groupId, expand, _options) {
    const result = this.api.getApplicationGroupAssignment(appId, groupId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific application key credential by kid
      * Retrieve a Key Credential
      * @param appId
      * @param keyId
      */
  getApplicationKey(appId, keyId, _options) {
    const result = this.api.getApplicationKey(appId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific user assignment for application by `id`
      * Retrieve an Assigned User
      * @param appId
      * @param userId
      * @param expand
      */
  getApplicationUser(appId, userId, expand, _options) {
    const result = this.api.getApplicationUser(appId, userId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a certificate signing request for the app by `id`
      * Retrieve a Certificate Signing Request
      * @param appId
      * @param csrId
      */
  getCsrForApplication(appId, csrId, _options) {
    const result = this.api.getCsrForApplication(appId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the default Provisioning Connection for application
      * Retrieve the default Provisioning Connection
      * @param appId
      */
  getDefaultProvisioningConnectionForApplication(appId, _options) {
    const result = this.api.getDefaultProvisioningConnectionForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Feature object for an application
      * Retrieve a Feature
      * @param appId
      * @param name
      */
  getFeatureForApplication(appId, name, _options) {
    const result = this.api.getFeatureForApplication(appId, name, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a token for the specified application
      * Retrieve an OAuth 2.0 Token
      * @param appId
      * @param tokenId
      * @param expand
      */
  getOAuth2TokenForApplication(appId, tokenId, expand, _options) {
    const result = this.api.getOAuth2TokenForApplication(appId, tokenId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a single scope consent grant for the application
      * Retrieve a Scope Consent Grant
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
      * Grant Consent to Scope
      * @param appId
      * @param oAuth2ScopeConsentGrant
      */
  grantConsentToScope(appId, oAuth2ScopeConsentGrant, _options) {
    const result = this.api.grantConsentToScope(appId, oAuth2ScopeConsentGrant, _options);
    return result.toPromise();
  }
  /**
      * Lists all group assignments for an application
      * List all Assigned Groups
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
      * Lists all key credentials for an application
      * List all Key Credentials
      * @param appId
      */
  listApplicationKeys(appId, _options) {
    const result = this.api.listApplicationKeys(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all assigned [application users](#application-user-model) for an application
      * List all Assigned Users
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
      * Lists all applications with pagination. A subset of apps can be returned that match a supported filter expression or query.
      * List all Applications
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
      * Lists all Certificate Signing Requests for an application
      * List all Certificate Signing Requests
      * @param appId
      */
  listCsrsForApplication(appId, _options) {
    const result = this.api.listCsrsForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all features for an application
      * List all Features
      * @param appId
      */
  listFeaturesForApplication(appId, _options) {
    const result = this.api.listFeaturesForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all tokens for the application
      * List all OAuth 2.0 Tokens
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
      * List all Scope Consent Grants
      * @param appId
      * @param expand
      */
  listScopeConsentGrants(appId, expand, _options) {
    const result = this.api.listScopeConsentGrants(appId, expand, _options);
    return result.toPromise();
  }
  /**
      * Publishes a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish a Certificate Signing Request
      * @param appId
      * @param csrId
      * @param body
      */
  publishCsrFromApplication(appId, csrId, body, _options) {
    const result = this.api.publishCsrFromApplication(appId, csrId, body, _options);
    return result.toPromise();
  }
  /**
      * Replaces an application
      * Replace an Application
      * @param appId
      * @param application
      */
  replaceApplication(appId, application, _options) {
    const result = this.api.replaceApplication(appId, application, _options);
    return result.toPromise();
  }
  /**
      * Revokes a certificate signing request and deletes the key pair from the application
      * Revoke a Certificate Signing Request
      * @param appId
      * @param csrId
      */
  revokeCsrFromApplication(appId, csrId, _options) {
    const result = this.api.revokeCsrFromApplication(appId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the specified token for the specified application
      * Revoke an OAuth 2.0 Token
      * @param appId
      * @param tokenId
      */
  revokeOAuth2TokenForApplication(appId, tokenId, _options) {
    const result = this.api.revokeOAuth2TokenForApplication(appId, tokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all tokens for the specified application
      * Revoke all OAuth 2.0 Tokens
      * @param appId
      */
  revokeOAuth2TokensForApplication(appId, _options) {
    const result = this.api.revokeOAuth2TokensForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Revokes permission for the application to request the given scope
      * Revoke a Scope Consent Grant
      * @param appId
      * @param grantId
      */
  revokeScopeConsentGrant(appId, grantId, _options) {
    const result = this.api.revokeScopeConsentGrant(appId, grantId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a group from an application
      * Unassign a Group
      * @param appId
      * @param groupId
      */
  unassignApplicationFromGroup(appId, groupId, _options) {
    const result = this.api.unassignApplicationFromGroup(appId, groupId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a user from an application
      * Unassign a User
      * @param appId
      * @param userId
      * @param sendEmail
      */
  unassignUserFromApplication(appId, userId, sendEmail, _options) {
    const result = this.api.unassignUserFromApplication(appId, userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Updates a user's profile for an application
      * Update an Application Profile for Assigned User
      * @param appId
      * @param userId
      * @param appUser
      */
  updateApplicationUser(appId, userId, appUser, _options) {
    const result = this.api.updateApplicationUser(appId, userId, appUser, _options);
    return result.toPromise();
  }
  /**
      * Updates the default provisioning connection for application
      * Update the default Provisioning Connection
      * @param appId
      * @param ProvisioningConnectionRequest
      * @param activate
      */
  updateDefaultProvisioningConnectionForApplication(appId, ProvisioningConnectionRequest, activate, _options) {
    const result = this.api.updateDefaultProvisioningConnectionForApplication(appId, ProvisioningConnectionRequest, activate, _options);
    return result.toPromise();
  }
  /**
      * Updates a Feature object for an application
      * Update a Feature
      * @param appId
      * @param name
      * @param CapabilitiesObject
      */
  updateFeatureForApplication(appId, name, CapabilitiesObject, _options) {
    const result = this.api.updateFeatureForApplication(appId, name, CapabilitiesObject, _options);
    return result.toPromise();
  }
  /**
      * Uploads a logo for the application. The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * Upload a Logo
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
class PromiseAttackProtectionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_4.ObservableAttackProtectionApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the User Lockout Settings for an org
      * Retrieve the User Lockout Settings
      */
  getUserLockoutSettings(_options) {
    const result = this.api.getUserLockoutSettings(_options);
    return result.toPromise();
  }
  /**
      * Replaces the User Lockout Settings for an org
      * Replace the User Lockout Settings
      * @param lockoutSettings
      */
  replaceUserLockoutSettings(lockoutSettings, _options) {
    const result = this.api.replaceUserLockoutSettings(lockoutSettings, _options);
    return result.toPromise();
  }
}
exports.PromiseAttackProtectionApi = PromiseAttackProtectionApi;
const ObservableAPI_5 = require('./ObservableAPI');
class PromiseAuthenticatorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_5.ObservableAuthenticatorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an authenticator by `authenticatorId`
      * Activate an Authenticator
      * @param authenticatorId
      */
  activateAuthenticator(authenticatorId, _options) {
    const result = this.api.activateAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Creates an authenticator. You can use this operation as part of the \"Create a custom authenticator\" flow. See the [Custom authenticator integration guide](https://developer.okta.com/docs/guides/authenticators-custom-authenticator/android/main/).
      * Create an Authenticator
      * @param authenticator
      * @param activate Whether to execute the activation lifecycle operation when Okta creates the authenticator
      */
  createAuthenticator(authenticator, activate, _options) {
    const result = this.api.createAuthenticator(authenticator, activate, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authenticator by `authenticatorId`
      * Deactivate an Authenticator
      * @param authenticatorId
      */
  deactivateAuthenticator(authenticatorId, _options) {
    const result = this.api.deactivateAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an authenticator from your Okta organization by `authenticatorId`
      * Retrieve an Authenticator
      * @param authenticatorId
      */
  getAuthenticator(authenticatorId, _options) {
    const result = this.api.getAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the well-known app authenticator configuration, which includes an app authenticator's settings, supported methods and various other configuration details
      * Retrieve the Well-Known App Authenticator Configuration
      * @param oauthClientId Filters app authenticator configurations by &#x60;oauthClientId&#x60;
      */
  getWellKnownAppAuthenticatorConfiguration(oauthClientId, _options) {
    const result = this.api.getWellKnownAppAuthenticatorConfiguration(oauthClientId, _options);
    return result.toPromise();
  }
  /**
      * Lists all authenticators
      * List all Authenticators
      */
  listAuthenticators(_options) {
    const result = this.api.listAuthenticators(_options);
    return result.toPromise();
  }
  /**
      * Replaces an authenticator
      * Replace an Authenticator
      * @param authenticatorId
      * @param authenticator
      */
  replaceAuthenticator(authenticatorId, authenticator, _options) {
    const result = this.api.replaceAuthenticator(authenticatorId, authenticator, _options);
    return result.toPromise();
  }
}
exports.PromiseAuthenticatorApi = PromiseAuthenticatorApi;
const ObservableAPI_6 = require('./ObservableAPI');
class PromiseAuthorizationServerApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_6.ObservableAuthorizationServerApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an authorization server
      * Activate an Authorization Server
      * @param authServerId
      */
  activateAuthorizationServer(authServerId, _options) {
    const result = this.api.activateAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Activates an authorization server policy
      * Activate a Policy
      * @param authServerId
      * @param policyId
      */
  activateAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.activateAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Activates an authorization server policy rule
      * Activate a Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const result = this.api.activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Creates an authorization server
      * Create an Authorization Server
      * @param authorizationServer
      */
  createAuthorizationServer(authorizationServer, _options) {
    const result = this.api.createAuthorizationServer(authorizationServer, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy
      * Create a Policy
      * @param authServerId
      * @param policy
      */
  createAuthorizationServerPolicy(authServerId, policy, _options) {
    const result = this.api.createAuthorizationServerPolicy(authServerId, policy, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy
      * Create a Policy Rule
      * @param policyId
      * @param authServerId
      * @param policyRule
      */
  createAuthorizationServerPolicyRule(policyId, authServerId, policyRule, _options) {
    const result = this.api.createAuthorizationServerPolicyRule(policyId, authServerId, policyRule, _options);
    return result.toPromise();
  }
  /**
      * Creates a custom token claim
      * Create a Custom Token Claim
      * @param authServerId
      * @param oAuth2Claim
      */
  createOAuth2Claim(authServerId, oAuth2Claim, _options) {
    const result = this.api.createOAuth2Claim(authServerId, oAuth2Claim, _options);
    return result.toPromise();
  }
  /**
      * Creates a custom token scope
      * Create a Custom Token Scope
      * @param authServerId
      * @param oAuth2Scope
      */
  createOAuth2Scope(authServerId, oAuth2Scope, _options) {
    const result = this.api.createOAuth2Scope(authServerId, oAuth2Scope, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authorization server
      * Deactivate an Authorization Server
      * @param authServerId
      */
  deactivateAuthorizationServer(authServerId, _options) {
    const result = this.api.deactivateAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authorization server policy
      * Deactivate a Policy
      * @param authServerId
      * @param policyId
      */
  deactivateAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.deactivateAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authorization server policy rule
      * Deactivate a Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const result = this.api.deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an authorization server
      * Delete an Authorization Server
      * @param authServerId
      */
  deleteAuthorizationServer(authServerId, _options) {
    const result = this.api.deleteAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a policy
      * Delete a Policy
      * @param authServerId
      * @param policyId
      */
  deleteAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.deleteAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
      * Delete a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  deleteAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options) {
    const result = this.api.deleteAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a custom token claim
      * Delete a Custom Token Claim
      * @param authServerId
      * @param claimId
      */
  deleteOAuth2Claim(authServerId, claimId, _options) {
    const result = this.api.deleteOAuth2Claim(authServerId, claimId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a custom token scope
      * Delete a Custom Token Scope
      * @param authServerId
      * @param scopeId
      */
  deleteOAuth2Scope(authServerId, scopeId, _options) {
    const result = this.api.deleteOAuth2Scope(authServerId, scopeId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an authorization server
      * Retrieve an Authorization Server
      * @param authServerId
      */
  getAuthorizationServer(authServerId, _options) {
    const result = this.api.getAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param authServerId
      * @param policyId
      */
  getAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.getAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a policy rule by `ruleId`
      * Retrieve a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  getAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options) {
    const result = this.api.getAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a custom token claim
      * Retrieve a Custom Token Claim
      * @param authServerId
      * @param claimId
      */
  getOAuth2Claim(authServerId, claimId, _options) {
    const result = this.api.getOAuth2Claim(authServerId, claimId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a custom token scope
      * Retrieve a Custom Token Scope
      * @param authServerId
      * @param scopeId
      */
  getOAuth2Scope(authServerId, scopeId, _options) {
    const result = this.api.getOAuth2Scope(authServerId, scopeId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a refresh token for a client
      * Retrieve a Refresh Token for a Client
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
      * Lists all credential keys
      * List all Credential Keys
      * @param authServerId
      */
  listAuthorizationServerKeys(authServerId, _options) {
    const result = this.api.listAuthorizationServerKeys(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all policies
      * List all Policies
      * @param authServerId
      */
  listAuthorizationServerPolicies(authServerId, _options) {
    const result = this.api.listAuthorizationServerPolicies(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all policy rules for the specified Custom Authorization Server and Policy
      * List all Policy Rules
      * @param policyId
      * @param authServerId
      */
  listAuthorizationServerPolicyRules(policyId, authServerId, _options) {
    const result = this.api.listAuthorizationServerPolicyRules(policyId, authServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all authorization servers
      * List all Authorization Servers
      * @param q
      * @param limit
      * @param after
      */
  listAuthorizationServers(q, limit, after, _options) {
    const result = this.api.listAuthorizationServers(q, limit, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom token claims
      * List all Custom Token Claims
      * @param authServerId
      */
  listOAuth2Claims(authServerId, _options) {
    const result = this.api.listOAuth2Claims(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all clients
      * List all Clients
      * @param authServerId
      */
  listOAuth2ClientsForAuthorizationServer(authServerId, _options) {
    const result = this.api.listOAuth2ClientsForAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom token scopes
      * List all Custom Token Scopes
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
      * Lists all refresh tokens for a client
      * List all Refresh Tokens for a Client
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
      * Replaces an authorization server
      * Replace an Authorization Server
      * @param authServerId
      * @param authorizationServer
      */
  replaceAuthorizationServer(authServerId, authorizationServer, _options) {
    const result = this.api.replaceAuthorizationServer(authServerId, authorizationServer, _options);
    return result.toPromise();
  }
  /**
      * Replaces a policy
      * Replace a Policy
      * @param authServerId
      * @param policyId
      * @param policy
      */
  replaceAuthorizationServerPolicy(authServerId, policyId, policy, _options) {
    const result = this.api.replaceAuthorizationServerPolicy(authServerId, policyId, policy, _options);
    return result.toPromise();
  }
  /**
      * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
      * Replace a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      * @param policyRule
      */
  replaceAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule, _options) {
    const result = this.api.replaceAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule, _options);
    return result.toPromise();
  }
  /**
      * Replaces a custom token claim
      * Replace a Custom Token Claim
      * @param authServerId
      * @param claimId
      * @param oAuth2Claim
      */
  replaceOAuth2Claim(authServerId, claimId, oAuth2Claim, _options) {
    const result = this.api.replaceOAuth2Claim(authServerId, claimId, oAuth2Claim, _options);
    return result.toPromise();
  }
  /**
      * Replaces a custom token scope
      * Replace a Custom Token Scope
      * @param authServerId
      * @param scopeId
      * @param oAuth2Scope
      */
  replaceOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options) {
    const result = this.api.replaceOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options);
    return result.toPromise();
  }
  /**
      * Revokes a refresh token for a client
      * Revoke a Refresh Token for a Client
      * @param authServerId
      * @param clientId
      * @param tokenId
      */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, _options) {
    const result = this.api.revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all refresh tokens for a client
      * Revoke all Refresh Tokens for a Client
      * @param authServerId
      * @param clientId
      */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, _options) {
    const result = this.api.revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, _options);
    return result.toPromise();
  }
  /**
      * Rotates all credential keys
      * Rotate all Credential Keys
      * @param authServerId
      * @param use
      */
  rotateAuthorizationServerKeys(authServerId, use, _options) {
    const result = this.api.rotateAuthorizationServerKeys(authServerId, use, _options);
    return result.toPromise();
  }
}
exports.PromiseAuthorizationServerApi = PromiseAuthorizationServerApi;
const ObservableAPI_7 = require('./ObservableAPI');
class PromiseBehaviorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_7.ObservableBehaviorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a behavior detection rule
      * Activate a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  activateBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.activateBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new behavior detection rule
      * Create a Behavior Detection Rule
      * @param rule
      */
  createBehaviorDetectionRule(rule, _options) {
    const result = this.api.createBehaviorDetectionRule(rule, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a behavior detection rule
      * Deactivate a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deactivateBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.deactivateBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Behavior Detection Rule by `behaviorId`
      * Delete a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deleteBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.deleteBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Behavior Detection Rule by `behaviorId`
      * Retrieve a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  getBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.getBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Lists all behavior detection rules with pagination support
      * List all Behavior Detection Rules
      */
  listBehaviorDetectionRules(_options) {
    const result = this.api.listBehaviorDetectionRules(_options);
    return result.toPromise();
  }
  /**
      * Replaces a Behavior Detection Rule by `behaviorId`
      * Replace a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      * @param rule
      */
  replaceBehaviorDetectionRule(behaviorId, rule, _options) {
    const result = this.api.replaceBehaviorDetectionRule(behaviorId, rule, _options);
    return result.toPromise();
  }
}
exports.PromiseBehaviorApi = PromiseBehaviorApi;
const ObservableAPI_8 = require('./ObservableAPI');
class PromiseCAPTCHAApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_8.ObservableCAPTCHAApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new CAPTCHA instance. In the current release, we only allow one CAPTCHA instance per org.
      * Create a CAPTCHA instance
      * @param instance
      */
  createCaptchaInstance(instance, _options) {
    const result = this.api.createCaptchaInstance(instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete a CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  deleteCaptchaInstance(captchaId, _options) {
    const result = this.api.deleteCaptchaInstance(captchaId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a CAPTCHA instance by `captchaId`
      * Retrieve a CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  getCaptchaInstance(captchaId, _options) {
    const result = this.api.getCaptchaInstance(captchaId, _options);
    return result.toPromise();
  }
  /**
      * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      */
  listCaptchaInstances(_options) {
    const result = this.api.listCaptchaInstances(_options);
    return result.toPromise();
  }
  /**
      * Replaces a CAPTCHA instance by `captchaId`
      * Replace a CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  replaceCaptchaInstance(captchaId, instance, _options) {
    const result = this.api.replaceCaptchaInstance(captchaId, instance, _options);
    return result.toPromise();
  }
  /**
      * Partially updates a CAPTCHA instance by `captchaId`
      * Update a CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  updateCaptchaInstance(captchaId, instance, _options) {
    const result = this.api.updateCaptchaInstance(captchaId, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseCAPTCHAApi = PromiseCAPTCHAApi;
const ObservableAPI_9 = require('./ObservableAPI');
class PromiseCustomDomainApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_9.ObservableCustomDomainApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates your Custom Domain
      * Create a Custom Domain
      * @param domain
      */
  createCustomDomain(domain, _options) {
    const result = this.api.createCustomDomain(domain, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Custom Domain by `id`
      * Delete a Custom Domain
      * @param domainId
      */
  deleteCustomDomain(domainId, _options) {
    const result = this.api.deleteCustomDomain(domainId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Custom Domain by `id`
      * Retrieve a Custom Domain
      * @param domainId
      */
  getCustomDomain(domainId, _options) {
    const result = this.api.getCustomDomain(domainId, _options);
    return result.toPromise();
  }
  /**
      * Lists all verified Custom Domains for the org
      * List all Custom Domains
      */
  listCustomDomains(_options) {
    const result = this.api.listCustomDomains(_options);
    return result.toPromise();
  }
  /**
      * Replaces a Custom Domain by `id`
      * Replace a Custom Domain's brandId
      * @param domainId
      * @param UpdateDomain
      */
  replaceCustomDomain(domainId, UpdateDomain, _options) {
    const result = this.api.replaceCustomDomain(domainId, UpdateDomain, _options);
    return result.toPromise();
  }
  /**
      * Creates or replaces the certificate for the custom domain
      * Upsert the Certificate
      * @param domainId
      * @param certificate
      */
  upsertCertificate(domainId, certificate, _options) {
    const result = this.api.upsertCertificate(domainId, certificate, _options);
    return result.toPromise();
  }
  /**
      * Verifies the Custom Domain by `id`
      * Verify a Custom Domain
      * @param domainId
      */
  verifyDomain(domainId, _options) {
    const result = this.api.verifyDomain(domainId, _options);
    return result.toPromise();
  }
}
exports.PromiseCustomDomainApi = PromiseCustomDomainApi;
const ObservableAPI_10 = require('./ObservableAPI');
class PromiseCustomizationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_10.ObservableCustomizationApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates new brand in your org
      * Create a Brand
      * @param CreateBrandRequest
      */
  createBrand(CreateBrandRequest, _options) {
    const result = this.api.createBrand(CreateBrandRequest, _options);
    return result.toPromise();
  }
  /**
      * Creates a new email customization
      * Create an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param instance
      */
  createEmailCustomization(brandId, templateName, instance, _options) {
    const result = this.api.createEmailCustomization(brandId, templateName, instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes all customizations for an email template
      * Delete all Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  deleteAllCustomizations(brandId, templateName, _options) {
    const result = this.api.deleteAllCustomizations(brandId, templateName, _options);
    return result.toPromise();
  }
  /**
      * Deletes a brand by its unique identifier
      * Delete a brand
      * @param brandId The ID of the brand.
      */
  deleteBrand(brandId, _options) {
    const result = this.api.deleteBrand(brandId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Theme background image
      * Delete the Background Image
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  deleteBrandThemeBackgroundImage(brandId, themeId, _options) {
    const result = this.api.deleteBrandThemeBackgroundImage(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Theme favicon. The theme will use the default Okta favicon.
      * Delete the Favicon
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  deleteBrandThemeFavicon(brandId, themeId, _options) {
    const result = this.api.deleteBrandThemeFavicon(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the Logo
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  deleteBrandThemeLogo(brandId, themeId, _options) {
    const result = this.api.deleteBrandThemeLogo(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the customized error page. As a result, the default error page appears in your live environment.
      * Delete the Customized Error Page
      * @param brandId The ID of the brand.
      */
  deleteCustomizedErrorPage(brandId, _options) {
    const result = this.api.deleteCustomizedErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
      * Delete the Customized Sign-in Page
      * @param brandId The ID of the brand.
      */
  deleteCustomizedSignInPage(brandId, _options) {
    const result = this.api.deleteCustomizedSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an email customization by its unique identifier
      * Delete an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  deleteEmailCustomization(brandId, templateName, customizationId, _options) {
    const result = this.api.deleteEmailCustomization(brandId, templateName, customizationId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Delete the Preview Error Page
      * @param brandId The ID of the brand.
      */
  deletePreviewErrorPage(brandId, _options) {
    const result = this.api.deletePreviewErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Delete the Preview Sign-in Page
      * @param brandId The ID of the brand.
      */
  deletePreviewSignInPage(brandId, _options) {
    const result = this.api.deletePreviewSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a brand by `brandId`
      * Retrieve a Brand
      * @param brandId The ID of the brand.
      */
  getBrand(brandId, _options) {
    const result = this.api.getBrand(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a theme for a brand
      * Retrieve a Theme
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  getBrandTheme(brandId, themeId, _options) {
    const result = this.api.getBrandTheme(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getCustomizationPreview(brandId, templateName, customizationId, _options) {
    const result = this.api.getCustomizationPreview(brandId, templateName, customizationId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the customized error page. The customized error page appears in your live environment.
      * Retrieve the Customized Error Page
      * @param brandId The ID of the brand.
      */
  getCustomizedErrorPage(brandId, _options) {
    const result = this.api.getCustomizedErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
      * Retrieve the Customized Sign-in Page
      * @param brandId The ID of the brand.
      */
  getCustomizedSignInPage(brandId, _options) {
    const result = this.api.getCustomizedSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the default error page. The default error page appears when no customized error page exists.
      * Retrieve the Default Error Page
      * @param brandId The ID of the brand.
      */
  getDefaultErrorPage(brandId, _options) {
    const result = this.api.getDefaultErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
      * Retrieve the Default Sign-in Page
      * @param brandId The ID of the brand.
      */
  getDefaultSignInPage(brandId, _options) {
    const result = this.api.getDefaultSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an email customization by its unique identifier
      * Retrieve an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getEmailCustomization(brandId, templateName, customizationId, _options) {
    const result = this.api.getEmailCustomization(brandId, templateName, customizationId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an email template's default content
      * Retrieve an Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultContent(brandId, templateName, language, _options) {
    const result = this.api.getEmailDefaultContent(brandId, templateName, language, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of the Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultPreview(brandId, templateName, language, _options) {
    const result = this.api.getEmailDefaultPreview(brandId, templateName, language, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an email template's settings
      * Retrieve the Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  getEmailSettings(brandId, templateName, _options) {
    const result = this.api.getEmailSettings(brandId, templateName, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the details of an email template by name
      * Retrieve an Email Template
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getEmailTemplate(brandId, templateName, expand, _options) {
    const result = this.api.getEmailTemplate(brandId, templateName, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Error Page Sub-Resources
      * @param brandId The ID of the brand.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getErrorPage(brandId, expand, _options) {
    const result = this.api.getErrorPage(brandId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Retrieve the Preview Error Page Preview
      * @param brandId The ID of the brand.
      */
  getPreviewErrorPage(brandId, _options) {
    const result = this.api.getPreviewErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Retrieve the Preview Sign-in Page Preview
      * @param brandId The ID of the brand.
      */
  getPreviewSignInPage(brandId, _options) {
    const result = this.api.getPreviewSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Sign-in Page Sub-Resources
      * @param brandId The ID of the brand.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getSignInPage(brandId, expand, _options) {
    const result = this.api.getSignInPage(brandId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the sign-out page settings
      * Retrieve the Sign-out Page Settings
      * @param brandId The ID of the brand.
      */
  getSignOutPageSettings(brandId, _options) {
    const result = this.api.getSignOutPageSettings(brandId, _options);
    return result.toPromise();
  }
  /**
      * Lists all sign-in widget versions supported by the current org
      * List all Sign-in Widget Versions
      * @param brandId The ID of the brand.
      */
  listAllSignInWidgetVersions(brandId, _options) {
    const result = this.api.listAllSignInWidgetVersions(brandId, _options);
    return result.toPromise();
  }
  /**
      * Lists all domains associated with a brand by `brandId`
      * List all Domains associated with a Brand
      * @param brandId The ID of the brand.
      */
  listBrandDomains(brandId, _options) {
    const result = this.api.listBrandDomains(brandId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the themes in your brand
      * List all Themes
      * @param brandId The ID of the brand.
      */
  listBrandThemes(brandId, _options) {
    const result = this.api.listBrandThemes(brandId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the brands in your org
      * List all Brands
      */
  listBrands(_options) {
    const result = this.api.listBrands(_options);
    return result.toPromise();
  }
  /**
      * Lists all customizations of an email template
      * List all Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      */
  listEmailCustomizations(brandId, templateName, after, limit, _options) {
    const result = this.api.listEmailCustomizations(brandId, templateName, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all email templates
      * List all Email Templates
      * @param brandId The ID of the brand.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param expand Specifies additional metadata to be included in the response.
      */
  listEmailTemplates(brandId, after, limit, expand, _options) {
    const result = this.api.listEmailTemplates(brandId, after, limit, expand, _options);
    return result.toPromise();
  }
  /**
      * Replaces a brand by `brandId`
      * Replace a Brand
      * @param brandId The ID of the brand.
      * @param brand
      */
  replaceBrand(brandId, brand, _options) {
    const result = this.api.replaceBrand(brandId, brand, _options);
    return result.toPromise();
  }
  /**
      * Replaces a theme for a brand
      * Replace a Theme
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param theme
      */
  replaceBrandTheme(brandId, themeId, theme, _options) {
    const result = this.api.replaceBrandTheme(brandId, themeId, theme, _options);
    return result.toPromise();
  }
  /**
      * Replaces the customized error page. The customized error page appears in your live environment.
      * Replace the Customized Error Page
      * @param brandId The ID of the brand.
      * @param ErrorPage
      */
  replaceCustomizedErrorPage(brandId, ErrorPage, _options) {
    const result = this.api.replaceCustomizedErrorPage(brandId, ErrorPage, _options);
    return result.toPromise();
  }
  /**
      * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
      * Replace the Customized Sign-in Page
      * @param brandId The ID of the brand.
      * @param SignInPage
      */
  replaceCustomizedSignInPage(brandId, SignInPage, _options) {
    const result = this.api.replaceCustomizedSignInPage(brandId, SignInPage, _options);
    return result.toPromise();
  }
  /**
      * Replaces an existing email customization using the property values provided
      * Replace an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      * @param instance Request
      */
  replaceEmailCustomization(brandId, templateName, customizationId, instance, _options) {
    const result = this.api.replaceEmailCustomization(brandId, templateName, customizationId, instance, _options);
    return result.toPromise();
  }
  /**
      * Replaces an email template's settings
      * Replace the Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param EmailSettings
      */
  replaceEmailSettings(brandId, templateName, EmailSettings, _options) {
    const result = this.api.replaceEmailSettings(brandId, templateName, EmailSettings, _options);
    return result.toPromise();
  }
  /**
      * Replaces the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Replace the Preview Error Page
      * @param brandId The ID of the brand.
      * @param ErrorPage
      */
  replacePreviewErrorPage(brandId, ErrorPage, _options) {
    const result = this.api.replacePreviewErrorPage(brandId, ErrorPage, _options);
    return result.toPromise();
  }
  /**
      * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Replace the Preview Sign-in Page
      * @param brandId The ID of the brand.
      * @param SignInPage
      */
  replacePreviewSignInPage(brandId, SignInPage, _options) {
    const result = this.api.replacePreviewSignInPage(brandId, SignInPage, _options);
    return result.toPromise();
  }
  /**
      * Replaces the sign-out page settings
      * Replace the Sign-out Page Settings
      * @param brandId The ID of the brand.
      * @param HostedPage
      */
  replaceSignOutPageSettings(brandId, HostedPage, _options) {
    const result = this.api.replaceSignOutPageSettings(brandId, HostedPage, _options);
    return result.toPromise();
  }
  /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
      * Send a Test Email
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  sendTestEmail(brandId, templateName, language, _options) {
    const result = this.api.sendTestEmail(brandId, templateName, language, _options);
    return result.toPromise();
  }
  /**
      * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
      * Upload the Background Image
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param file
      */
  uploadBrandThemeBackgroundImage(brandId, themeId, file, _options) {
    const result = this.api.uploadBrandThemeBackgroundImage(brandId, themeId, file, _options);
    return result.toPromise();
  }
  /**
      * Uploads and replaces the favicon for the theme
      * Upload the Favicon
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param file
      */
  uploadBrandThemeFavicon(brandId, themeId, file, _options) {
    const result = this.api.uploadBrandThemeFavicon(brandId, themeId, file, _options);
    return result.toPromise();
  }
  /**
      * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Logo
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param file
      */
  uploadBrandThemeLogo(brandId, themeId, file, _options) {
    const result = this.api.uploadBrandThemeLogo(brandId, themeId, file, _options);
    return result.toPromise();
  }
}
exports.PromiseCustomizationApi = PromiseCustomizationApi;
const ObservableAPI_11 = require('./ObservableAPI');
class PromiseDeviceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_11.ObservableDeviceApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a device by `deviceId`
      * Activate a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  activateDevice(deviceId, _options) {
    const result = this.api.activateDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a device by `deviceId`
      * Deactivate a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deactivateDevice(deviceId, _options) {
    const result = this.api.deactivateDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a device by `deviceId`
      * Delete a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deleteDevice(deviceId, _options) {
    const result = this.api.deleteDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a device by `deviceId`
      * Retrieve a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  getDevice(deviceId, _options) {
    const result = this.api.getDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Lists all devices with pagination support.  A subset of Devices can be returned that match a supported search criteria using the `search` query parameter.  Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request.  > **Note:** Listing devices with `search` should not be used as a part of any critical flows—such as authentication or updates—to prevent potential data loss. `search` results may not reflect the latest information, as this endpoint uses a search index which may not be up-to-date with recent updates to the object. <br> Don't use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss. <br> Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation equires [URL encoding](http://en.wikipedia.org/wiki/Percent-encoding). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
      * List all Devices
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param search SCIM filter expression that filters the results. Searches include all Device &#x60;profile&#x60; properties, as well as the Device &#x60;id&#x60;, &#x60;status&#x60; and &#x60;lastUpdated&#x60; properties.
      */
  listDevices(after, limit, search, _options) {
    const result = this.api.listDevices(after, limit, search, _options);
    return result.toPromise();
  }
  /**
      * Suspends a device by `deviceId`
      * Suspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  suspendDevice(deviceId, _options) {
    const result = this.api.suspendDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Unsuspends a device by `deviceId`
      * Unsuspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  unsuspendDevice(deviceId, _options) {
    const result = this.api.unsuspendDevice(deviceId, _options);
    return result.toPromise();
  }
}
exports.PromiseDeviceApi = PromiseDeviceApi;
const ObservableAPI_12 = require('./ObservableAPI');
class PromiseDeviceAssuranceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_12.ObservableDeviceAssuranceApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new Device Assurance Policy
      * Create a Device Assurance Policy
      * @param deviceAssurance
      */
  createDeviceAssurancePolicy(deviceAssurance, _options) {
    const result = this.api.createDeviceAssurancePolicy(deviceAssurance, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Device Assurance Policy by `deviceAssuranceId`. If the Device Assurance Policy is currently being used in the org Authentication Policies, the delete will not be allowed.
      * Delete a Device Assurance Policy
      * @param deviceAssuranceId Id of the Device Assurance Policy
      */
  deleteDeviceAssurancePolicy(deviceAssuranceId, _options) {
    const result = this.api.deleteDeviceAssurancePolicy(deviceAssuranceId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Device Assurance Policy by `deviceAssuranceId`
      * Retrieve a Device Assurance Policy
      * @param deviceAssuranceId Id of the Device Assurance Policy
      */
  getDeviceAssurancePolicy(deviceAssuranceId, _options) {
    const result = this.api.getDeviceAssurancePolicy(deviceAssuranceId, _options);
    return result.toPromise();
  }
  /**
      * Lists all device assurance policies
      * List all Device Assurance Policies
      */
  listDeviceAssurancePolicies(_options) {
    const result = this.api.listDeviceAssurancePolicies(_options);
    return result.toPromise();
  }
  /**
      * Replaces a Device Assurance Policy by `deviceAssuranceId`
      * Replace a Device Assurance Policy
      * @param deviceAssuranceId Id of the Device Assurance Policy
      * @param deviceAssurance
      */
  replaceDeviceAssurancePolicy(deviceAssuranceId, deviceAssurance, _options) {
    const result = this.api.replaceDeviceAssurancePolicy(deviceAssuranceId, deviceAssurance, _options);
    return result.toPromise();
  }
}
exports.PromiseDeviceAssuranceApi = PromiseDeviceAssuranceApi;
const ObservableAPI_13 = require('./ObservableAPI');
class PromiseEmailDomainApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_13.ObservableEmailDomainApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates an Email Domain in your org, along with associated username and sender display name
      * Create an Email Domain
      * @param emailDomain
      */
  createEmailDomain(emailDomain, _options) {
    const result = this.api.createEmailDomain(emailDomain, _options);
    return result.toPromise();
  }
  /**
      * Deletes an Email Domain by `emailDomainId`
      * Delete an Email Domain
      * @param emailDomainId
      */
  deleteEmailDomain(emailDomainId, _options) {
    const result = this.api.deleteEmailDomain(emailDomainId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an Email Domain by `emailDomainId`, along with associated username and sender display name
      * Retrieve a Email Domain
      * @param emailDomainId
      */
  getEmailDomain(emailDomainId, _options) {
    const result = this.api.getEmailDomain(emailDomainId, _options);
    return result.toPromise();
  }
  /**
      * Lists all brands linked to an email domain
      * List all brands linked to an email domain
      * @param emailDomainId
      */
  listEmailDomainBrands(emailDomainId, _options) {
    const result = this.api.listEmailDomainBrands(emailDomainId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the Email Domains in your org, along with associated username and sender display name
      * List all Email Domains
      */
  listEmailDomains(_options) {
    const result = this.api.listEmailDomains(_options);
    return result.toPromise();
  }
  /**
      * Replaces associated username and sender display name by `emailDomainId`
      * Replace an Email Domain
      * @param emailDomainId
      * @param updateEmailDomain
      */
  replaceEmailDomain(emailDomainId, updateEmailDomain, _options) {
    const result = this.api.replaceEmailDomain(emailDomainId, updateEmailDomain, _options);
    return result.toPromise();
  }
  /**
      * Verifies an Email Domain by `emailDomainId`
      * Verify an Email Domain
      * @param emailDomainId
      */
  verifyEmailDomain(emailDomainId, _options) {
    const result = this.api.verifyEmailDomain(emailDomainId, _options);
    return result.toPromise();
  }
}
exports.PromiseEmailDomainApi = PromiseEmailDomainApi;
const ObservableAPI_14 = require('./ObservableAPI');
class PromiseEventHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_14.ObservableEventHookApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an event hook
      * Activate an Event Hook
      * @param eventHookId
      */
  activateEventHook(eventHookId, _options) {
    const result = this.api.activateEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Creates an event hook
      * Create an Event Hook
      * @param eventHook
      */
  createEventHook(eventHook, _options) {
    const result = this.api.createEventHook(eventHook, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an event hook
      * Deactivate an Event Hook
      * @param eventHookId
      */
  deactivateEventHook(eventHookId, _options) {
    const result = this.api.deactivateEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an event hook
      * Delete an Event Hook
      * @param eventHookId
      */
  deleteEventHook(eventHookId, _options) {
    const result = this.api.deleteEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an event hook
      * Retrieve an Event Hook
      * @param eventHookId
      */
  getEventHook(eventHookId, _options) {
    const result = this.api.getEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Lists all event hooks
      * List all Event Hooks
      */
  listEventHooks(_options) {
    const result = this.api.listEventHooks(_options);
    return result.toPromise();
  }
  /**
      * Replaces an event hook
      * Replace an Event Hook
      * @param eventHookId
      * @param eventHook
      */
  replaceEventHook(eventHookId, eventHook, _options) {
    const result = this.api.replaceEventHook(eventHookId, eventHook, _options);
    return result.toPromise();
  }
  /**
      * Verifies an event hook
      * Verify an Event Hook
      * @param eventHookId
      */
  verifyEventHook(eventHookId, _options) {
    const result = this.api.verifyEventHook(eventHookId, _options);
    return result.toPromise();
  }
}
exports.PromiseEventHookApi = PromiseEventHookApi;
const ObservableAPI_15 = require('./ObservableAPI');
class PromiseFeatureApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_15.ObservableFeatureApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves a feature
      * Retrieve a Feature
      * @param featureId
      */
  getFeature(featureId, _options) {
    const result = this.api.getFeature(featureId, _options);
    return result.toPromise();
  }
  /**
      * Lists all dependencies
      * List all Dependencies
      * @param featureId
      */
  listFeatureDependencies(featureId, _options) {
    const result = this.api.listFeatureDependencies(featureId, _options);
    return result.toPromise();
  }
  /**
      * Lists all dependents
      * List all Dependents
      * @param featureId
      */
  listFeatureDependents(featureId, _options) {
    const result = this.api.listFeatureDependents(featureId, _options);
    return result.toPromise();
  }
  /**
      * Lists all features
      * List all Features
      */
  listFeatures(_options) {
    const result = this.api.listFeatures(_options);
    return result.toPromise();
  }
  /**
      * Updates a feature lifecycle
      * Update a Feature Lifecycle
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
const ObservableAPI_16 = require('./ObservableAPI');
class PromiseGroupApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_16.ObservableGroupApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a specific group rule by `ruleId`
      * Activate a Group Rule
      * @param ruleId
      */
  activateGroupRule(ruleId, _options) {
    const result = this.api.activateGroupRule(ruleId, _options);
    return result.toPromise();
  }
  /**
      * Assigns a group owner
      * Assign a Group Owner
      * @param groupId
      * @param GroupOwner
      */
  assignGroupOwner(groupId, GroupOwner, _options) {
    const result = this.api.assignGroupOwner(groupId, GroupOwner, _options);
    return result.toPromise();
  }
  /**
      * Assigns a user to a group with 'OKTA_GROUP' type
      * Assign a User
      * @param groupId
      * @param userId
      */
  assignUserToGroup(groupId, userId, _options) {
    const result = this.api.assignUserToGroup(groupId, userId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new group with `OKTA_GROUP` type
      * Create a Group
      * @param group
      */
  createGroup(group, _options) {
    const result = this.api.createGroup(group, _options);
    return result.toPromise();
  }
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition
      * Create a Group Rule
      * @param groupRule
      */
  createGroupRule(groupRule, _options) {
    const result = this.api.createGroupRule(groupRule, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a specific group rule by `ruleId`
      * Deactivate a Group Rule
      * @param ruleId
      */
  deactivateGroupRule(ruleId, _options) {
    const result = this.api.deactivateGroupRule(ruleId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a group with `OKTA_GROUP` type
      * Delete a Group
      * @param groupId
      */
  deleteGroup(groupId, _options) {
    const result = this.api.deleteGroup(groupId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a group owner from a specific group
      * Delete a Group Owner
      * @param groupId
      * @param ownerId
      */
  deleteGroupOwner(groupId, ownerId, _options) {
    const result = this.api.deleteGroupOwner(groupId, ownerId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a specific group rule by `ruleId`
      * Delete a group Rule
      * @param ruleId
      * @param removeUsers Indicates whether to keep or remove users from groups assigned by this rule.
      */
  deleteGroupRule(ruleId, removeUsers, _options) {
    const result = this.api.deleteGroupRule(ruleId, removeUsers, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a group by `groupId`
      * Retrieve a Group
      * @param groupId
      */
  getGroup(groupId, _options) {
    const result = this.api.getGroup(groupId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific group rule by `ruleId`
      * Retrieve a Group Rule
      * @param ruleId
      * @param expand
      */
  getGroupRule(ruleId, expand, _options) {
    const result = this.api.getGroupRule(ruleId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all applications that are assigned to a group
      * List all Assigned Applications
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of app results for a page
      */
  listAssignedApplicationsForGroup(groupId, after, limit, _options) {
    const result = this.api.listAssignedApplicationsForGroup(groupId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all owners for a specific group
      * List all Group Owners
      * @param groupId
      * @param filter SCIM Filter expression for group owners. Allows to filter owners by type.
      * @param after Specifies the pagination cursor for the next page of owners
      * @param limit Specifies the number of owner results in a page
      */
  listGroupOwners(groupId, filter, after, limit, _options) {
    const result = this.api.listGroupOwners(groupId, filter, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all group rules
      * List all Group Rules
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
      * Lists all users that are a member of a group
      * List all Member Users
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of users
      * @param limit Specifies the number of user results in a page
      */
  listGroupUsers(groupId, after, limit, _options) {
    const result = this.api.listGroupUsers(groupId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all groups with pagination support. A subset of groups can be returned that match a supported filter expression or query.
      * List all Groups
      * @param q Searches the name property of groups for matching value
      * @param filter Filter expression for groups
      * @param after Specifies the pagination cursor for the next page of groups
      * @param limit Specifies the number of group results in a page
      * @param expand If specified, it causes additional metadata to be included in the response.
      * @param search Searches for groups with a supported filtering expression for all attributes except for _embedded, _links, and objectClass
      * @param sortBy Specifies field to sort by and can be any single property (for search queries only).
      * @param sortOrder Specifies sort order &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; is not present. Groups with the same value for the &#x60;sortBy&#x60; parameter are ordered by &#x60;id&#x60;.
      */
  listGroups(q, filter, after, limit, expand, search, sortBy, sortOrder, _options) {
    const result = this.api.listGroups(q, filter, after, limit, expand, search, sortBy, sortOrder, _options);
    return result.toPromise();
  }
  /**
      * Replaces the profile for a group with `OKTA_GROUP` type
      * Replace a Group
      * @param groupId
      * @param group
      */
  replaceGroup(groupId, group, _options) {
    const result = this.api.replaceGroup(groupId, group, _options);
    return result.toPromise();
  }
  /**
      * Replaces a group rule. Only `INACTIVE` rules can be updated.
      * Replace a Group Rule
      * @param ruleId
      * @param groupRule
      */
  replaceGroupRule(ruleId, groupRule, _options) {
    const result = this.api.replaceGroupRule(ruleId, groupRule, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a user from a group with 'OKTA_GROUP' type
      * Unassign a User
      * @param groupId
      * @param userId
      */
  unassignUserFromGroup(groupId, userId, _options) {
    const result = this.api.unassignUserFromGroup(groupId, userId, _options);
    return result.toPromise();
  }
}
exports.PromiseGroupApi = PromiseGroupApi;
const ObservableAPI_17 = require('./ObservableAPI');
class PromiseHookKeyApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_17.ObservableHookKeyApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a key
      * Create a key
      * @param keyRequest
      */
  createHookKey(keyRequest, _options) {
    const result = this.api.createHookKey(keyRequest, _options);
    return result.toPromise();
  }
  /**
      * Deletes a key by `hookKeyId`. Once deleted, the Hook Key is unrecoverable. As a safety precaution, unused keys are eligible for deletion.
      * Delete a key
      * @param hookKeyId
      */
  deleteHookKey(hookKeyId, _options) {
    const result = this.api.deleteHookKey(hookKeyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a key by `hookKeyId`
      * Retrieve a key
      * @param hookKeyId
      */
  getHookKey(hookKeyId, _options) {
    const result = this.api.getHookKey(hookKeyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a public key by `keyId`
      * Retrieve a public key
      * @param keyId
      */
  getPublicKey(keyId, _options) {
    const result = this.api.getPublicKey(keyId, _options);
    return result.toPromise();
  }
  /**
      * Lists all keys
      * List all keys
      */
  listHookKeys(_options) {
    const result = this.api.listHookKeys(_options);
    return result.toPromise();
  }
  /**
      * Replaces a key by `hookKeyId`
      * Replace a key
      * @param hookKeyId
      * @param keyRequest
      */
  replaceHookKey(hookKeyId, keyRequest, _options) {
    const result = this.api.replaceHookKey(hookKeyId, keyRequest, _options);
    return result.toPromise();
  }
}
exports.PromiseHookKeyApi = PromiseHookKeyApi;
const ObservableAPI_18 = require('./ObservableAPI');
class PromiseIdentityProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_18.ObservableIdentityProviderApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an inactive IdP
      * Activate an Identity Provider
      * @param idpId
      */
  activateIdentityProvider(idpId, _options) {
    const result = this.api.activateIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
      * Clone a Signing Credential Key
      * @param idpId
      * @param keyId
      * @param targetIdpId
      */
  cloneIdentityProviderKey(idpId, keyId, targetIdpId, _options) {
    const result = this.api.cloneIdentityProviderKey(idpId, keyId, targetIdpId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new identity provider integration
      * Create an Identity Provider
      * @param identityProvider
      */
  createIdentityProvider(identityProvider, _options) {
    const result = this.api.createIdentityProvider(identityProvider, _options);
    return result.toPromise();
  }
  /**
      * Creates a new X.509 certificate credential to the IdP key store.
      * Create an X.509 Certificate Public Key
      * @param jsonWebKey
      */
  createIdentityProviderKey(jsonWebKey, _options) {
    const result = this.api.createIdentityProviderKey(jsonWebKey, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an active IdP
      * Deactivate an Identity Provider
      * @param idpId
      */
  deactivateIdentityProvider(idpId, _options) {
    const result = this.api.deactivateIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an identity provider integration by `idpId`
      * Delete an Identity Provider
      * @param idpId
      */
  deleteIdentityProvider(idpId, _options) {
    const result = this.api.deleteIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP
      * Delete a Signing Credential Key
      * @param keyId
      */
  deleteIdentityProviderKey(keyId, _options) {
    const result = this.api.deleteIdentityProviderKey(keyId, _options);
    return result.toPromise();
  }
  /**
      * Generates a new key pair and returns a Certificate Signing Request for it
      * Generate a Certificate Signing Request
      * @param idpId
      * @param metadata
      */
  generateCsrForIdentityProvider(idpId, metadata, _options) {
    const result = this.api.generateCsrForIdentityProvider(idpId, metadata, _options);
    return result.toPromise();
  }
  /**
      * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
      * Generate a new Signing Credential Key
      * @param idpId
      * @param validityYears expiry of the IdP Key Credential
      */
  generateIdentityProviderSigningKey(idpId, validityYears, _options) {
    const result = this.api.generateIdentityProviderSigningKey(idpId, validityYears, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific Certificate Signing Request model by id
      * Retrieve a Certificate Signing Request
      * @param idpId
      * @param csrId
      */
  getCsrForIdentityProvider(idpId, csrId, _options) {
    const result = this.api.getCsrForIdentityProvider(idpId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an identity provider integration by `idpId`
      * Retrieve an Identity Provider
      * @param idpId
      */
  getIdentityProvider(idpId, _options) {
    const result = this.api.getIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a linked IdP user by ID
      * Retrieve a User
      * @param idpId
      * @param userId
      */
  getIdentityProviderApplicationUser(idpId, userId, _options) {
    const result = this.api.getIdentityProviderApplicationUser(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific IdP Key Credential by `kid`
      * Retrieve an Credential Key
      * @param keyId
      */
  getIdentityProviderKey(keyId, _options) {
    const result = this.api.getIdentityProviderKey(keyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific IdP Key Credential by `kid`
      * Retrieve a Signing Credential Key
      * @param idpId
      * @param keyId
      */
  getIdentityProviderSigningKey(idpId, keyId, _options) {
    const result = this.api.getIdentityProviderSigningKey(idpId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
      * Link a User to a Social IdP
      * @param idpId
      * @param userId
      * @param userIdentityProviderLinkRequest
      */
  linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options) {
    const result = this.api.linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options);
    return result.toPromise();
  }
  /**
      * Lists all Certificate Signing Requests for an IdP
      * List all Certificate Signing Requests
      * @param idpId
      */
  listCsrsForIdentityProvider(idpId, _options) {
    const result = this.api.listCsrsForIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Lists all users linked to the identity provider
      * List all Users
      * @param idpId
      */
  listIdentityProviderApplicationUsers(idpId, _options) {
    const result = this.api.listIdentityProviderApplicationUsers(idpId, _options);
    return result.toPromise();
  }
  /**
      * Lists all IdP key credentials
      * List all Credential Keys
      * @param after Specifies the pagination cursor for the next page of keys
      * @param limit Specifies the number of key results in a page
      */
  listIdentityProviderKeys(after, limit, _options) {
    const result = this.api.listIdentityProviderKeys(after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all signing key credentials for an IdP
      * List all Signing Credential Keys
      * @param idpId
      */
  listIdentityProviderSigningKeys(idpId, _options) {
    const result = this.api.listIdentityProviderSigningKeys(idpId, _options);
    return result.toPromise();
  }
  /**
      * Lists all identity provider integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all Identity Providers
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
      * Lists the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth
      * List all Tokens from a OIDC Identity Provider
      * @param idpId
      * @param userId
      */
  listSocialAuthTokens(idpId, userId, _options) {
    const result = this.api.listSocialAuthTokens(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Publishes a certificate signing request with a signed X.509 certificate and adds it into the signing key credentials for the IdP
      * Publish a Certificate Signing Request
      * @param idpId
      * @param csrId
      * @param body
      */
  publishCsrForIdentityProvider(idpId, csrId, body, _options) {
    const result = this.api.publishCsrForIdentityProvider(idpId, csrId, body, _options);
    return result.toPromise();
  }
  /**
      * Replaces an identity provider integration by `idpId`
      * Replace an Identity Provider
      * @param idpId
      * @param identityProvider
      */
  replaceIdentityProvider(idpId, identityProvider, _options) {
    const result = this.api.replaceIdentityProvider(idpId, identityProvider, _options);
    return result.toPromise();
  }
  /**
      * Revokes a certificate signing request and deletes the key pair from the IdP
      * Revoke a Certificate Signing Request
      * @param idpId
      * @param csrId
      */
  revokeCsrForIdentityProvider(idpId, csrId, _options) {
    const result = this.api.revokeCsrForIdentityProvider(idpId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Unlinks the link between the Okta user and the IdP user
      * Unlink a User from IdP
      * @param idpId
      * @param userId
      */
  unlinkUserFromIdentityProvider(idpId, userId, _options) {
    const result = this.api.unlinkUserFromIdentityProvider(idpId, userId, _options);
    return result.toPromise();
  }
}
exports.PromiseIdentityProviderApi = PromiseIdentityProviderApi;
const ObservableAPI_19 = require('./ObservableAPI');
class PromiseIdentitySourceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_19.ObservableIdentitySourceApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates an identity source session for the given identity source instance
      * Create an Identity Source Session
      * @param identitySourceId
      */
  createIdentitySourceSession(identitySourceId, _options) {
    const result = this.api.createIdentitySourceSession(identitySourceId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an identity source session for a given `identitySourceId` and `sessionId`
      * Delete an Identity Source Session
      * @param identitySourceId
      * @param sessionId
      */
  deleteIdentitySourceSession(identitySourceId, sessionId, _options) {
    const result = this.api.deleteIdentitySourceSession(identitySourceId, sessionId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an identity source session for a given identity source id and session id
      * Retrieve an Identity Source Session
      * @param identitySourceId
      * @param sessionId
      */
  getIdentitySourceSession(identitySourceId, sessionId, _options) {
    const result = this.api.getIdentitySourceSession(identitySourceId, sessionId, _options);
    return result.toPromise();
  }
  /**
      * Lists all identity source sessions for the given identity source instance
      * List all Identity Source Sessions
      * @param identitySourceId
      */
  listIdentitySourceSessions(identitySourceId, _options) {
    const result = this.api.listIdentitySourceSessions(identitySourceId, _options);
    return result.toPromise();
  }
  /**
      * Starts the import from the identity source described by the uploaded bulk operations
      * Start the import from the Identity Source
      * @param identitySourceId
      * @param sessionId
      */
  startImportFromIdentitySource(identitySourceId, sessionId, _options) {
    const result = this.api.startImportFromIdentitySource(identitySourceId, sessionId, _options);
    return result.toPromise();
  }
  /**
      * Uploads entities that need to be deleted in Okta from the identity source for the given session
      * Upload the data to be deleted in Okta
      * @param identitySourceId
      * @param sessionId
      * @param BulkDeleteRequestBody
      */
  uploadIdentitySourceDataForDelete(identitySourceId, sessionId, BulkDeleteRequestBody, _options) {
    const result = this.api.uploadIdentitySourceDataForDelete(identitySourceId, sessionId, BulkDeleteRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Uploads entities that need to be upserted in Okta from the identity source for the given session
      * Upload the data to be upserted in Okta
      * @param identitySourceId
      * @param sessionId
      * @param BulkUpsertRequestBody
      */
  uploadIdentitySourceDataForUpsert(identitySourceId, sessionId, BulkUpsertRequestBody, _options) {
    const result = this.api.uploadIdentitySourceDataForUpsert(identitySourceId, sessionId, BulkUpsertRequestBody, _options);
    return result.toPromise();
  }
}
exports.PromiseIdentitySourceApi = PromiseIdentitySourceApi;
const ObservableAPI_20 = require('./ObservableAPI');
class PromiseInlineHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_20.ObservableInlineHookApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates the inline hook by `inlineHookId`
      * Activate an Inline Hook
      * @param inlineHookId
      */
  activateInlineHook(inlineHookId, _options) {
    const result = this.api.activateInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Creates an inline hook
      * Create an Inline Hook
      * @param inlineHook
      */
  createInlineHook(inlineHook, _options) {
    const result = this.api.createInlineHook(inlineHook, _options);
    return result.toPromise();
  }
  /**
      * Deactivates the inline hook by `inlineHookId`
      * Deactivate an Inline Hook
      * @param inlineHookId
      */
  deactivateInlineHook(inlineHookId, _options) {
    const result = this.api.deactivateInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an inline hook by `inlineHookId`. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete an Inline Hook
      * @param inlineHookId
      */
  deleteInlineHook(inlineHookId, _options) {
    const result = this.api.deleteInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Executes the inline hook by `inlineHookId` using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute an Inline Hook
      * @param inlineHookId
      * @param payloadData
      */
  executeInlineHook(inlineHookId, payloadData, _options) {
    const result = this.api.executeInlineHook(inlineHookId, payloadData, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an inline hook by `inlineHookId`
      * Retrieve an Inline Hook
      * @param inlineHookId
      */
  getInlineHook(inlineHookId, _options) {
    const result = this.api.getInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Lists all inline hooks
      * List all Inline Hooks
      * @param type
      */
  listInlineHooks(type, _options) {
    const result = this.api.listInlineHooks(type, _options);
    return result.toPromise();
  }
  /**
      * Replaces an inline hook by `inlineHookId`
      * Replace an Inline Hook
      * @param inlineHookId
      * @param inlineHook
      */
  replaceInlineHook(inlineHookId, inlineHook, _options) {
    const result = this.api.replaceInlineHook(inlineHookId, inlineHook, _options);
    return result.toPromise();
  }
}
exports.PromiseInlineHookApi = PromiseInlineHookApi;
const ObservableAPI_21 = require('./ObservableAPI');
class PromiseLinkedObjectApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_21.ObservableLinkedObjectApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a linked object definition
      * Create a Linked Object Definition
      * @param linkedObject
      */
  createLinkedObjectDefinition(linkedObject, _options) {
    const result = this.api.createLinkedObjectDefinition(linkedObject, _options);
    return result.toPromise();
  }
  /**
      * Deletes a linked object definition
      * Delete a Linked Object Definition
      * @param linkedObjectName
      */
  deleteLinkedObjectDefinition(linkedObjectName, _options) {
    const result = this.api.deleteLinkedObjectDefinition(linkedObjectName, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a linked object definition
      * Retrieve a Linked Object Definition
      * @param linkedObjectName
      */
  getLinkedObjectDefinition(linkedObjectName, _options) {
    const result = this.api.getLinkedObjectDefinition(linkedObjectName, _options);
    return result.toPromise();
  }
  /**
      * Lists all linked object definitions
      * List all Linked Object Definitions
      */
  listLinkedObjectDefinitions(_options) {
    const result = this.api.listLinkedObjectDefinitions(_options);
    return result.toPromise();
  }
}
exports.PromiseLinkedObjectApi = PromiseLinkedObjectApi;
const ObservableAPI_22 = require('./ObservableAPI');
class PromiseLogStreamApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_22.ObservableLogStreamApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a log stream by `logStreamId`
      * Activate a Log Stream
      * @param logStreamId id of the log stream
      */
  activateLogStream(logStreamId, _options) {
    const result = this.api.activateLogStream(logStreamId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new log stream
      * Create a Log Stream
      * @param instance
      */
  createLogStream(instance, _options) {
    const result = this.api.createLogStream(instance, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a log stream by `logStreamId`
      * Deactivate a Log Stream
      * @param logStreamId id of the log stream
      */
  deactivateLogStream(logStreamId, _options) {
    const result = this.api.deactivateLogStream(logStreamId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a log stream by `logStreamId`
      * Delete a Log Stream
      * @param logStreamId id of the log stream
      */
  deleteLogStream(logStreamId, _options) {
    const result = this.api.deleteLogStream(logStreamId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a log stream by `logStreamId`
      * Retrieve a Log Stream
      * @param logStreamId id of the log stream
      */
  getLogStream(logStreamId, _options) {
    const result = this.api.getLogStream(logStreamId, _options);
    return result.toPromise();
  }
  /**
      * Lists all log streams. You can request a paginated list or a subset of Log Streams that match a supported filter expression.
      * List all Log Streams
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param filter SCIM filter expression that filters the results. This expression only supports the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60;.
      */
  listLogStreams(after, limit, filter, _options) {
    const result = this.api.listLogStreams(after, limit, filter, _options);
    return result.toPromise();
  }
  /**
      * Replaces a log stream by `logStreamId`
      * Replace a Log Stream
      * @param logStreamId id of the log stream
      * @param instance
      */
  replaceLogStream(logStreamId, instance, _options) {
    const result = this.api.replaceLogStream(logStreamId, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseLogStreamApi = PromiseLogStreamApi;
const ObservableAPI_23 = require('./ObservableAPI');
class PromiseNetworkZoneApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_23.ObservableNetworkZoneApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a network zone by `zoneId`
      * Activate a Network Zone
      * @param zoneId
      */
  activateNetworkZone(zoneId, _options) {
    const result = this.api.activateNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new network zone. * At least one of either the `gateways` attribute or `proxies` attribute must be defined when creating a Network Zone. * At least one of the following attributes must be defined: `proxyType`, `locations`, or `asns`.
      * Create a Network Zone
      * @param zone
      */
  createNetworkZone(zone, _options) {
    const result = this.api.createNetworkZone(zone, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a network zone by `zoneId`
      * Deactivate a Network Zone
      * @param zoneId
      */
  deactivateNetworkZone(zoneId, _options) {
    const result = this.api.deactivateNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Deletes network zone by `zoneId`
      * Delete a Network Zone
      * @param zoneId
      */
  deleteNetworkZone(zoneId, _options) {
    const result = this.api.deleteNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a network zone by `zoneId`
      * Retrieve a Network Zone
      * @param zoneId
      */
  getNetworkZone(zoneId, _options) {
    const result = this.api.getNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Lists all network zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id` and `usage` properties. See [Filtering](https://developer.okta.com/docs/reference/core-okta-api/#filter) for more information on the expressions that are used in filtering.
      * List all Network Zones
      * @param after Specifies the pagination cursor for the next page of network zones
      * @param limit Specifies the number of results for a page
      * @param filter Filters zones by usage or id expression
      */
  listNetworkZones(after, limit, filter, _options) {
    const result = this.api.listNetworkZones(after, limit, filter, _options);
    return result.toPromise();
  }
  /**
      * Replaces a network zone by `zoneId`. The replaced network zone type must be the same as the existing type. You may replace the usage (`POLICY`, `BLOCKLIST`) of a network zone by updating the `usage` attribute.
      * Replace a Network Zone
      * @param zoneId
      * @param zone
      */
  replaceNetworkZone(zoneId, zone, _options) {
    const result = this.api.replaceNetworkZone(zoneId, zone, _options);
    return result.toPromise();
  }
}
exports.PromiseNetworkZoneApi = PromiseNetworkZoneApi;
const ObservableAPI_24 = require('./ObservableAPI');
class PromiseOrgSettingApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_24.ObservableOrgSettingApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Removes a list of email addresses to be removed from the set of email addresses that are bounced
      * Remove Emails from Email Provider Bounce List
      * @param BouncesRemoveListObj
      */
  bulkRemoveEmailAddressBounces(BouncesRemoveListObj, _options) {
    const result = this.api.bulkRemoveEmailAddressBounces(BouncesRemoveListObj, _options);
    return result.toPromise();
  }
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
      * Extend Okta Support Access
      */
  extendOktaSupport(_options) {
    const result = this.api.extendOktaSupport(_options);
    return result.toPromise();
  }
  /**
      * Retrieves Okta Communication Settings of your organization
      * Retrieve the Okta Communication Settings
      */
  getOktaCommunicationSettings(_options) {
    const result = this.api.getOktaCommunicationSettings(_options);
    return result.toPromise();
  }
  /**
      * Retrieves Contact Types of your organization
      * Retrieve the Org Contact Types
      */
  getOrgContactTypes(_options) {
    const result = this.api.getOrgContactTypes(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the URL of the User associated with the specified Contact Type
      * Retrieve the User of the Contact Type
      * @param contactType
      */
  getOrgContactUser(contactType, _options) {
    const result = this.api.getOrgContactUser(contactType, _options);
    return result.toPromise();
  }
  /**
      * Retrieves Okta Support Settings of your organization
      * Retrieve the Okta Support Settings
      */
  getOrgOktaSupportSettings(_options) {
    const result = this.api.getOrgOktaSupportSettings(_options);
    return result.toPromise();
  }
  /**
      * Retrieves preferences of your organization
      * Retrieve the Org Preferences
      */
  getOrgPreferences(_options) {
    const result = this.api.getOrgPreferences(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the org settings
      * Retrieve the Org Settings
      */
  getOrgSettings(_options) {
    const result = this.api.getOrgSettings(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the well-known org metadata, which includes the id, configured custom domains, authentication pipeline, and various other org settings
      * Retrieve the Well-Known Org Metadata
      */
  getWellknownOrgMetadata(_options) {
    const result = this.api.getWellknownOrgMetadata(_options);
    return result.toPromise();
  }
  /**
      * Grants Okta Support temporary access your org as an administrator for eight hours
      * Grant Okta Support Access to your Org
      */
  grantOktaSupport(_options) {
    const result = this.api.grantOktaSupport(_options);
    return result.toPromise();
  }
  /**
      * Opts in all users of this org to Okta Communication emails
      * Opt in all Users to Okta Communication emails
      */
  optInUsersToOktaCommunicationEmails(_options) {
    const result = this.api.optInUsersToOktaCommunicationEmails(_options);
    return result.toPromise();
  }
  /**
      * Opts out all users of this org from Okta Communication emails
      * Opt out all Users from Okta Communication emails
      */
  optOutUsersFromOktaCommunicationEmails(_options) {
    const result = this.api.optOutUsersFromOktaCommunicationEmails(_options);
    return result.toPromise();
  }
  /**
      * Replaces the User associated with the specified Contact Type
      * Replace the User of the Contact Type
      * @param contactType
      * @param orgContactUser
      */
  replaceOrgContactUser(contactType, orgContactUser, _options) {
    const result = this.api.replaceOrgContactUser(contactType, orgContactUser, _options);
    return result.toPromise();
  }
  /**
      * Replaces the settings of your organization
      * Replace the Org Settings
      * @param orgSetting
      */
  replaceOrgSettings(orgSetting, _options) {
    const result = this.api.replaceOrgSettings(orgSetting, _options);
    return result.toPromise();
  }
  /**
      * Revokes Okta Support access to your organization
      * Revoke Okta Support Access
      */
  revokeOktaSupport(_options) {
    const result = this.api.revokeOktaSupport(_options);
    return result.toPromise();
  }
  /**
      * Updates the preference hide the Okta UI footer for all end users of your organization
      * Update the Preference to Hide the Okta Dashboard Footer
      */
  updateOrgHideOktaUIFooter(_options) {
    const result = this.api.updateOrgHideOktaUIFooter(_options);
    return result.toPromise();
  }
  /**
      * Partially updates the org settings depending on provided fields
      * Update the Org Settings
      * @param OrgSetting
      */
  updateOrgSettings(OrgSetting, _options) {
    const result = this.api.updateOrgSettings(OrgSetting, _options);
    return result.toPromise();
  }
  /**
      * Updates the preference to show the Okta UI footer for all end users of your organization
      * Update the Preference to Show the Okta Dashboard Footer
      */
  updateOrgShowOktaUIFooter(_options) {
    const result = this.api.updateOrgShowOktaUIFooter(_options);
    return result.toPromise();
  }
  /**
      * Uploads and replaces the logo for your organization. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Org Logo
      * @param file
      */
  uploadOrgLogo(file, _options) {
    const result = this.api.uploadOrgLogo(file, _options);
    return result.toPromise();
  }
}
exports.PromiseOrgSettingApi = PromiseOrgSettingApi;
const ObservableAPI_25 = require('./ObservableAPI');
class PromisePolicyApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_25.ObservablePolicyApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a policy
      * Activate a Policy
      * @param policyId
      */
  activatePolicy(policyId, _options) {
    const result = this.api.activatePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Activates a policy rule
      * Activate a Policy Rule
      * @param policyId
      * @param ruleId
      */
  activatePolicyRule(policyId, ruleId, _options) {
    const result = this.api.activatePolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Clones an existing policy
      * Clone an existing policy
      * @param policyId
      */
  clonePolicy(policyId, _options) {
    const result = this.api.clonePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy
      * Create a Policy
      * @param policy
      * @param activate
      */
  createPolicy(policy, activate, _options) {
    const result = this.api.createPolicy(policy, activate, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy rule
      * Create a Policy Rule
      * @param policyId
      * @param policyRule
      */
  createPolicyRule(policyId, policyRule, _options) {
    const result = this.api.createPolicyRule(policyId, policyRule, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a policy
      * Deactivate a Policy
      * @param policyId
      */
  deactivatePolicy(policyId, _options) {
    const result = this.api.deactivatePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a policy rule
      * Deactivate a Policy Rule
      * @param policyId
      * @param ruleId
      */
  deactivatePolicyRule(policyId, ruleId, _options) {
    const result = this.api.deactivatePolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a policy
      * Delete a Policy
      * @param policyId
      */
  deletePolicy(policyId, _options) {
    const result = this.api.deletePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a policy rule
      * Delete a Policy Rule
      * @param policyId
      * @param ruleId
      */
  deletePolicyRule(policyId, ruleId, _options) {
    const result = this.api.deletePolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param policyId
      * @param expand
      */
  getPolicy(policyId, expand, _options) {
    const result = this.api.getPolicy(policyId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a policy rule
      * Retrieve a Policy Rule
      * @param policyId
      * @param ruleId
      */
  getPolicyRule(policyId, ruleId, _options) {
    const result = this.api.getPolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Lists all policies with the specified type
      * List all Policies
      * @param type
      * @param status
      * @param expand
      */
  listPolicies(type, status, expand, _options) {
    const result = this.api.listPolicies(type, status, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all applications mapped to a policy identified by `policyId`
      * List all Applications mapped to a Policy
      * @param policyId
      */
  listPolicyApps(policyId, _options) {
    const result = this.api.listPolicyApps(policyId, _options);
    return result.toPromise();
  }
  /**
      * Lists all policy rules
      * List all Policy Rules
      * @param policyId
      */
  listPolicyRules(policyId, _options) {
    const result = this.api.listPolicyRules(policyId, _options);
    return result.toPromise();
  }
  /**
      * Replaces a policy
      * Replace a Policy
      * @param policyId
      * @param policy
      */
  replacePolicy(policyId, policy, _options) {
    const result = this.api.replacePolicy(policyId, policy, _options);
    return result.toPromise();
  }
  /**
      * Replaces a policy rules
      * Replace a Policy Rule
      * @param policyId
      * @param ruleId
      * @param policyRule
      */
  replacePolicyRule(policyId, ruleId, policyRule, _options) {
    const result = this.api.replacePolicyRule(policyId, ruleId, policyRule, _options);
    return result.toPromise();
  }
}
exports.PromisePolicyApi = PromisePolicyApi;
const ObservableAPI_26 = require('./ObservableAPI');
class PromisePrincipalRateLimitApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_26.ObservablePrincipalRateLimitApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new Principal Rate Limit entity. In the current release, we only allow one Principal Rate Limit entity per org and principal.
      * Create a Principal Rate Limit
      * @param entity
      */
  createPrincipalRateLimitEntity(entity, _options) {
    const result = this.api.createPrincipalRateLimitEntity(entity, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Principal Rate Limit entity by `principalRateLimitId`
      * Retrieve a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      */
  getPrincipalRateLimitEntity(principalRateLimitId, _options) {
    const result = this.api.getPrincipalRateLimitEntity(principalRateLimitId, _options);
    return result.toPromise();
  }
  /**
      * Lists all Principal Rate Limit entities considering the provided parameters
      * List all Principal Rate Limits
      * @param filter
      * @param after
      * @param limit
      */
  listPrincipalRateLimitEntities(filter, after, limit, _options) {
    const result = this.api.listPrincipalRateLimitEntities(filter, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Replaces a principal rate limit entity by `principalRateLimitId`
      * Replace a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      * @param entity
      */
  replacePrincipalRateLimitEntity(principalRateLimitId, entity, _options) {
    const result = this.api.replacePrincipalRateLimitEntity(principalRateLimitId, entity, _options);
    return result.toPromise();
  }
}
exports.PromisePrincipalRateLimitApi = PromisePrincipalRateLimitApi;
const ObservableAPI_27 = require('./ObservableAPI');
class PromiseProfileMappingApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_27.ObservableProfileMappingApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves a single Profile Mapping referenced by its ID
      * Retrieve a Profile Mapping
      * @param mappingId
      */
  getProfileMapping(mappingId, _options) {
    const result = this.api.getProfileMapping(mappingId, _options);
    return result.toPromise();
  }
  /**
      * Lists all profile mappings with pagination
      * List all Profile Mappings
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
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings
      * Update a Profile Mapping
      * @param mappingId
      * @param profileMapping
      */
  updateProfileMapping(mappingId, profileMapping, _options) {
    const result = this.api.updateProfileMapping(mappingId, profileMapping, _options);
    return result.toPromise();
  }
}
exports.PromiseProfileMappingApi = PromiseProfileMappingApi;
const ObservableAPI_28 = require('./ObservableAPI');
class PromisePushProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_28.ObservablePushProviderApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new push provider
      * Create a Push Provider
      * @param pushProvider
      */
  createPushProvider(pushProvider, _options) {
    const result = this.api.createPushProvider(pushProvider, _options);
    return result.toPromise();
  }
  /**
      * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
      * Delete a Push Provider
      * @param pushProviderId Id of the push provider
      */
  deletePushProvider(pushProviderId, _options) {
    const result = this.api.deletePushProvider(pushProviderId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a push provider by `pushProviderId`
      * Retrieve a Push Provider
      * @param pushProviderId Id of the push provider
      */
  getPushProvider(pushProviderId, _options) {
    const result = this.api.getPushProvider(pushProviderId, _options);
    return result.toPromise();
  }
  /**
      * Lists all push providers
      * List all Push Providers
      * @param type Filters push providers by &#x60;providerType&#x60;
      */
  listPushProviders(type, _options) {
    const result = this.api.listPushProviders(type, _options);
    return result.toPromise();
  }
  /**
      * Replaces a push provider by `pushProviderId`
      * Replace a Push Provider
      * @param pushProviderId Id of the push provider
      * @param pushProvider
      */
  replacePushProvider(pushProviderId, pushProvider, _options) {
    const result = this.api.replacePushProvider(pushProviderId, pushProvider, _options);
    return result.toPromise();
  }
}
exports.PromisePushProviderApi = PromisePushProviderApi;
const ObservableAPI_29 = require('./ObservableAPI');
class PromiseRateLimitSettingsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_29.ObservableRateLimitSettingsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the currently configured Rate Limit Admin Notification Settings
      * Retrieve the Rate Limit Admin Notification Settings
      */
  getRateLimitSettingsAdminNotifications(_options) {
    const result = this.api.getRateLimitSettingsAdminNotifications(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the currently configured Per-Client Rate Limit Settings
      * Retrieve the Per-Client Rate Limit Settings
      */
  getRateLimitSettingsPerClient(_options) {
    const result = this.api.getRateLimitSettingsPerClient(_options);
    return result.toPromise();
  }
  /**
      * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
      * Replace the Rate Limit Admin Notification Settings
      * @param RateLimitAdminNotifications
      */
  replaceRateLimitSettingsAdminNotifications(RateLimitAdminNotifications, _options) {
    const result = this.api.replaceRateLimitSettingsAdminNotifications(RateLimitAdminNotifications, _options);
    return result.toPromise();
  }
  /**
      * Replaces the Per-Client Rate Limit Settings and returns the configured properties
      * Replace the Per-Client Rate Limit Settings
      * @param perClientRateLimitSettings
      */
  replaceRateLimitSettingsPerClient(perClientRateLimitSettings, _options) {
    const result = this.api.replaceRateLimitSettingsPerClient(perClientRateLimitSettings, _options);
    return result.toPromise();
  }
}
exports.PromiseRateLimitSettingsApi = PromiseRateLimitSettingsApi;
const ObservableAPI_30 = require('./ObservableAPI');
class PromiseResourceSetApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_30.ObservableResourceSetApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Adds more members to a resource set binding
      * Add more Members to a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  addMembersToBinding(resourceSetId, roleIdOrLabel, instance, _options) {
    const result = this.api.addMembersToBinding(resourceSetId, roleIdOrLabel, instance, _options);
    return result.toPromise();
  }
  /**
      * Adds more resources to a resource set
      * Add more Resource to a resource set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param instance
      */
  addResourceSetResource(resourceSetId, instance, _options) {
    const result = this.api.addResourceSetResource(resourceSetId, instance, _options);
    return result.toPromise();
  }
  /**
      * Creates a new resource set
      * Create a Resource Set
      * @param instance
      */
  createResourceSet(instance, _options) {
    const result = this.api.createResourceSet(instance, _options);
    return result.toPromise();
  }
  /**
      * Creates a new resource set binding
      * Create a Resource Set Binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param instance
      */
  createResourceSetBinding(resourceSetId, instance, _options) {
    const result = this.api.createResourceSetBinding(resourceSetId, instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Delete a Binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteBinding(resourceSetId, roleIdOrLabel, _options) {
    const result = this.api.deleteBinding(resourceSetId, roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Deletes a role by `resourceSetId`
      * Delete a Resource Set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      */
  deleteResourceSet(resourceSetId, _options) {
    const result = this.api.deleteResourceSet(resourceSetId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a resource identified by `resourceId` from a resource set
      * Delete a Resource from a resource set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param resourceId &#x60;id&#x60; of a resource
      */
  deleteResourceSetResource(resourceSetId, resourceId, _options) {
    const result = this.api.deleteResourceSetResource(resourceSetId, resourceId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Retrieve a Binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getBinding(resourceSetId, roleIdOrLabel, _options) {
    const result = this.api.getBinding(resourceSetId, roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a member identified by `memberId` for a binding
      * Retrieve a Member of a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of a member
      */
  getMemberOfBinding(resourceSetId, roleIdOrLabel, memberId, _options) {
    const result = this.api.getMemberOfBinding(resourceSetId, roleIdOrLabel, memberId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a resource set by `resourceSetId`
      * Retrieve a Resource Set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      */
  getResourceSet(resourceSetId, _options) {
    const result = this.api.getResourceSet(resourceSetId, _options);
    return result.toPromise();
  }
  /**
      * Lists all resource set bindings with pagination support
      * List all Bindings
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listBindings(resourceSetId, after, _options) {
    const result = this.api.listBindings(resourceSetId, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all members of a resource set binding with pagination support
      * List all Members of a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listMembersOfBinding(resourceSetId, roleIdOrLabel, after, _options) {
    const result = this.api.listMembersOfBinding(resourceSetId, roleIdOrLabel, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all resources that make up the resource set
      * List all Resources of a resource set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      */
  listResourceSetResources(resourceSetId, _options) {
    const result = this.api.listResourceSetResources(resourceSetId, _options);
    return result.toPromise();
  }
  /**
      * Lists all resource sets with pagination support
      * List all Resource Sets
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listResourceSets(after, _options) {
    const result = this.api.listResourceSets(after, _options);
    return result.toPromise();
  }
  /**
      * Replaces a resource set by `resourceSetId`
      * Replace a Resource Set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param instance
      */
  replaceResourceSet(resourceSetId, instance, _options) {
    const result = this.api.replaceResourceSet(resourceSetId, instance, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a member identified by `memberId` from a binding
      * Unassign a Member from a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of a member
      */
  unassignMemberFromBinding(resourceSetId, roleIdOrLabel, memberId, _options) {
    const result = this.api.unassignMemberFromBinding(resourceSetId, roleIdOrLabel, memberId, _options);
    return result.toPromise();
  }
}
exports.PromiseResourceSetApi = PromiseResourceSetApi;
const ObservableAPI_31 = require('./ObservableAPI');
class PromiseRiskEventApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_31.ObservableRiskEventApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Sends multiple IP risk events to Okta. This request is used by a third-party risk provider to send IP risk events to Okta. The third-party risk provider needs to be registered with Okta before they can send events to Okta. See [Risk Providers](/openapi/okta-management/management/tag/RiskProvider/). This API has a rate limit of 30 requests per minute. You can include multiple risk events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. Prioritize sending high risk signals if you have a burst of signals to send that would exceed the maximum request limits.
      * Send multiple Risk Events
      * @param instance
      */
  sendRiskEvents(instance, _options) {
    const result = this.api.sendRiskEvents(instance, _options);
    return result.toPromise();
  }
}
exports.PromiseRiskEventApi = PromiseRiskEventApi;
const ObservableAPI_32 = require('./ObservableAPI');
class PromiseRiskProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_32.ObservableRiskProviderApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a Risk Provider object. A maximum of three Risk Provider objects can be created.
      * Create a Risk Provider
      * @param instance
      */
  createRiskProvider(instance, _options) {
    const result = this.api.createRiskProvider(instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Risk Provider object by its ID
      * Delete a Risk Provider
      * @param riskProviderId &#x60;id&#x60; of the Risk Provider object
      */
  deleteRiskProvider(riskProviderId, _options) {
    const result = this.api.deleteRiskProvider(riskProviderId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Risk Provider object by ID
      * Retrieve a Risk Provider
      * @param riskProviderId &#x60;id&#x60; of the Risk Provider object
      */
  getRiskProvider(riskProviderId, _options) {
    const result = this.api.getRiskProvider(riskProviderId, _options);
    return result.toPromise();
  }
  /**
      * Lists all Risk Provider objects
      * List all Risk Providers
      */
  listRiskProviders(_options) {
    const result = this.api.listRiskProviders(_options);
    return result.toPromise();
  }
  /**
      * Replaces the properties for a given Risk Provider object ID
      * Replace a Risk Provider
      * @param riskProviderId &#x60;id&#x60; of the Risk Provider object
      * @param instance
      */
  replaceRiskProvider(riskProviderId, instance, _options) {
    const result = this.api.replaceRiskProvider(riskProviderId, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseRiskProviderApi = PromiseRiskProviderApi;
const ObservableAPI_33 = require('./ObservableAPI');
class PromiseRoleApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_33.ObservableRoleApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new role
      * Create a Role
      * @param instance
      */
  createRole(instance, _options) {
    const result = this.api.createRole(instance, _options);
    return result.toPromise();
  }
  /**
      * Creates a permission specified by `permissionType` to the role
      * Create a Permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An okta permission type
      */
  createRolePermission(roleIdOrLabel, permissionType, _options) {
    const result = this.api.createRolePermission(roleIdOrLabel, permissionType, _options);
    return result.toPromise();
  }
  /**
      * Deletes a role by `roleIdOrLabel`
      * Delete a Role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteRole(roleIdOrLabel, _options) {
    const result = this.api.deleteRole(roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Deletes a permission from a role by `permissionType`
      * Delete a Permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An okta permission type
      */
  deleteRolePermission(roleIdOrLabel, permissionType, _options) {
    const result = this.api.deleteRolePermission(roleIdOrLabel, permissionType, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a role by `roleIdOrLabel`
      * Retrieve a Role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getRole(roleIdOrLabel, _options) {
    const result = this.api.getRole(roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a permission by `permissionType`
      * Retrieve a Permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An okta permission type
      */
  getRolePermission(roleIdOrLabel, permissionType, _options) {
    const result = this.api.getRolePermission(roleIdOrLabel, permissionType, _options);
    return result.toPromise();
  }
  /**
      * Lists all permissions of the role by `roleIdOrLabel`
      * List all Permissions
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  listRolePermissions(roleIdOrLabel, _options) {
    const result = this.api.listRolePermissions(roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Lists all roles with pagination support
      * List all Roles
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listRoles(after, _options) {
    const result = this.api.listRoles(after, _options);
    return result.toPromise();
  }
  /**
      * Replaces a role by `roleIdOrLabel`
      * Replace a Role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  replaceRole(roleIdOrLabel, instance, _options) {
    const result = this.api.replaceRole(roleIdOrLabel, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseRoleApi = PromiseRoleApi;
const ObservableAPI_34 = require('./ObservableAPI');
class PromiseRoleAssignmentApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_34.ObservableRoleAssignmentApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Assigns a role to a group
      * Assign a Role to a Group
      * @param groupId
      * @param assignRoleRequest
      * @param disableNotifications Setting this to &#x60;true&#x60; grants the group third-party admin status
      */
  assignRoleToGroup(groupId, assignRoleRequest, disableNotifications, _options) {
    const result = this.api.assignRoleToGroup(groupId, assignRoleRequest, disableNotifications, _options);
    return result.toPromise();
  }
  /**
      * Assigns a role to a user identified by `userId`
      * Assign a Role to a User
      * @param userId
      * @param assignRoleRequest
      * @param disableNotifications Setting this to &#x60;true&#x60; grants the user third-party admin status
      */
  assignRoleToUser(userId, assignRoleRequest, disableNotifications, _options) {
    const result = this.api.assignRoleToUser(userId, assignRoleRequest, disableNotifications, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a role identified by `roleId` assigned to group identified by `groupId`
      * Retrieve a Role assigned to Group
      * @param groupId
      * @param roleId
      */
  getGroupAssignedRole(groupId, roleId, _options) {
    const result = this.api.getGroupAssignedRole(groupId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a role identified by `roleId` assigned to a user identified by `userId`
      * Retrieve a Role assigned to a User
      * @param userId
      * @param roleId
      */
  getUserAssignedRole(userId, roleId, _options) {
    const result = this.api.getUserAssignedRole(userId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Lists all roles assigned to a user identified by `userId`
      * List all Roles assigned to a User
      * @param userId
      * @param expand
      */
  listAssignedRolesForUser(userId, expand, _options) {
    const result = this.api.listAssignedRolesForUser(userId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all assigned roles of group identified by `groupId`
      * List all Assigned Roles of Group
      * @param groupId
      * @param expand
      */
  listGroupAssignedRoles(groupId, expand, _options) {
    const result = this.api.listGroupAssignedRoles(groupId, expand, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a role identified by `roleId` assigned to group identified by `groupId`
      * Unassign a Role from a Group
      * @param groupId
      * @param roleId
      */
  unassignRoleFromGroup(groupId, roleId, _options) {
    const result = this.api.unassignRoleFromGroup(groupId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a role identified by `roleId` from a user identified by `userId`
      * Unassign a Role from a User
      * @param userId
      * @param roleId
      */
  unassignRoleFromUser(userId, roleId, _options) {
    const result = this.api.unassignRoleFromUser(userId, roleId, _options);
    return result.toPromise();
  }
}
exports.PromiseRoleAssignmentApi = PromiseRoleAssignmentApi;
const ObservableAPI_35 = require('./ObservableAPI');
class PromiseRoleTargetApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_35.ObservableRoleTargetApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Assigns all Apps as Target to Role
      * Assign all Apps as Target to Role
      * @param userId
      * @param roleId
      */
  assignAllAppsAsTargetToRoleForUser(userId, roleId, _options) {
    const result = this.api.assignAllAppsAsTargetToRoleForUser(userId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Assigns App Instance Target to App Administrator Role given to a Group
      * Assign an Application Instance Target to Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  assignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options) {
    const result = this.api.assignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Assigns anapplication instance target to appplication administrator role
      * Assign an Application Instance Target to an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  assignAppInstanceTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    const result = this.api.assignAppInstanceTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  assignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options) {
    const result = this.api.assignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  assignAppTargetToAdminRoleForUser(userId, roleId, appName, _options) {
    const result = this.api.assignAppTargetToAdminRoleForUser(userId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Assigns a group target to a group role
      * Assign a Group Target to a Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  assignGroupTargetToGroupAdminRole(groupId, roleId, targetGroupId, _options) {
    const result = this.api.assignGroupTargetToGroupAdminRole(groupId, roleId, targetGroupId, _options);
    return result.toPromise();
  }
  /**
      * Assigns a Group Target to Role
      * Assign a Group Target to Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  assignGroupTargetToUserRole(userId, roleId, groupId, _options) {
    const result = this.api.assignGroupTargetToUserRole(userId, roleId, groupId, _options);
    return result.toPromise();
  }
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for an Application Administrator Role
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
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for Application Administrator Role
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
      * Lists all group targets for a group role
      * List all Group Targets for a Group Role
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
      * Lists all group targets for role
      * List all Group Targets for Role
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
      * Unassigns an application instance target from an application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  unassignAppInstanceTargetFromAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    const result = this.api.unassignAppInstanceTargetFromAdminRoleForUser(userId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns an application instance target from application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  unassignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options) {
    const result = this.api.unassignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  unassignAppTargetFromAppAdminRoleForUser(userId, roleId, appName, _options) {
    const result = this.api.unassignAppTargetFromAppAdminRoleForUser(userId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  unassignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options) {
    const result = this.api.unassignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a group target from a group role
      * Unassign a Group Target from a Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  unassignGroupTargetFromGroupAdminRole(groupId, roleId, targetGroupId, _options) {
    const result = this.api.unassignGroupTargetFromGroupAdminRole(groupId, roleId, targetGroupId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a Group Target from Role
      * Unassign a Group Target from Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  unassignGroupTargetFromUserAdminRole(userId, roleId, groupId, _options) {
    const result = this.api.unassignGroupTargetFromUserAdminRole(userId, roleId, groupId, _options);
    return result.toPromise();
  }
}
exports.PromiseRoleTargetApi = PromiseRoleTargetApi;
const ObservableAPI_36 = require('./ObservableAPI');
class PromiseSchemaApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_36.ObservableSchemaApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the UI schema for an Application given `appName`, `section` and `operation`
      * Retrieve the UI schema for a section
      * @param appName
      * @param section
      * @param operation
      */
  getAppUISchema(appName, section, operation, _options) {
    const result = this.api.getAppUISchema(appName, section, operation, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the links for UI schemas for an Application given `appName`
      * Retrieve the links for UI schemas for an Application
      * @param appName
      */
  getAppUISchemaLinks(appName, _options) {
    const result = this.api.getAppUISchemaLinks(appName, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the Schema for an App User
      * Retrieve the default Application User Schema for an Application
      * @param appInstanceId
      */
  getApplicationUserSchema(appInstanceId, _options) {
    const result = this.api.getApplicationUserSchema(appInstanceId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the group schema
      * Retrieve the default Group Schema
      */
  getGroupSchema(_options) {
    const result = this.api.getGroupSchema(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the schema for a Log Stream type. The `logStreamType` element in the URL specifies the Log Stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
      * Retrieve the Log Stream Schema for the schema type
      * @param logStreamType
      */
  getLogStreamSchema(logStreamType, _options) {
    const result = this.api.getLogStreamSchema(logStreamType, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the schema for a Schema Id
      * Retrieve a User Schema
      * @param schemaId
      */
  getUserSchema(schemaId, _options) {
    const result = this.api.getUserSchema(schemaId, _options);
    return result.toPromise();
  }
  /**
      * Lists the schema for all log stream types visible for this org
      * List the Log Stream Schemas
      */
  listLogStreamSchemas(_options) {
    const result = this.api.listLogStreamSchemas(_options);
    return result.toPromise();
  }
  /**
      * Partially updates on the User Profile properties of the Application User Schema
      * Update the default Application User Schema for an Application
      * @param appInstanceId
      * @param body
      */
  updateApplicationUserProfile(appInstanceId, body, _options) {
    const result = this.api.updateApplicationUserProfile(appInstanceId, body, _options);
    return result.toPromise();
  }
  /**
      * Updates the default group schema. This updates, adds, or removes one or more custom Group Profile properties in the schema.
      * Update the default Group Schema
      * @param GroupSchema
      */
  updateGroupSchema(GroupSchema, _options) {
    const result = this.api.updateGroupSchema(GroupSchema, _options);
    return result.toPromise();
  }
  /**
      * Partially updates on the User Profile properties of the user schema
      * Update a User Schema
      * @param schemaId
      * @param userSchema
      */
  updateUserProfile(schemaId, userSchema, _options) {
    const result = this.api.updateUserProfile(schemaId, userSchema, _options);
    return result.toPromise();
  }
}
exports.PromiseSchemaApi = PromiseSchemaApi;
const ObservableAPI_37 = require('./ObservableAPI');
class PromiseSessionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_37.ObservableSessionApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new Session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
      * Create a Session with session token
      * @param createSessionRequest
      */
  createSession(createSessionRequest, _options) {
    const result = this.api.createSession(createSessionRequest, _options);
    return result.toPromise();
  }
  /**
      * Retrieves information about the Session specified by the given session ID
      * Retrieve a Session
      * @param sessionId &#x60;id&#x60; of a valid Session
      */
  getSession(sessionId, _options) {
    const result = this.api.getSession(sessionId, _options);
    return result.toPromise();
  }
  /**
      * Refreshes an existing Session using the `id` for that Session. A successful response contains the refreshed Session with an updated `expiresAt` timestamp.
      * Refresh a Session
      * @param sessionId &#x60;id&#x60; of a valid Session
      */
  refreshSession(sessionId, _options) {
    const result = this.api.refreshSession(sessionId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the specified Session
      * Revoke a Session
      * @param sessionId &#x60;id&#x60; of a valid Session
      */
  revokeSession(sessionId, _options) {
    const result = this.api.revokeSession(sessionId, _options);
    return result.toPromise();
  }
}
exports.PromiseSessionApi = PromiseSessionApi;
const ObservableAPI_38 = require('./ObservableAPI');
class PromiseSubscriptionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_38.ObservableSubscriptionApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Lists all subscriptions of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role
      * @param roleTypeOrRoleId
      */
  listRoleSubscriptions(roleTypeOrRoleId, _options) {
    const result = this.api.listRoleSubscriptions(roleTypeOrRoleId, _options);
    return result.toPromise();
  }
  /**
      * Lists all subscriptions with a specific notification type of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role with a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  listRoleSubscriptionsByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const result = this.api.listRoleSubscriptionsByNotificationType(roleTypeOrRoleId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * Lists all subscriptions of a user. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions
      * @param userId
      */
  listUserSubscriptions(userId, _options) {
    const result = this.api.listUserSubscriptions(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions by type
      * @param userId
      * @param notificationType
      */
  listUserSubscriptionsByNotificationType(userId, notificationType, _options) {
    const result = this.api.listUserSubscriptionsByNotificationType(userId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * Subscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` to a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
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
      * Unsubscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` from a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
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
const ObservableAPI_39 = require('./ObservableAPI');
class PromiseSystemLogApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_39.ObservableSystemLogApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Lists all system log events. The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * List all System Log Events
      * @param since
      * @param until
      * @param filter
      * @param q
      * @param limit
      * @param sortOrder
      * @param after
      */
  listLogEvents(since, until, filter, q, limit, sortOrder, after, _options) {
    const result = this.api.listLogEvents(since, until, filter, q, limit, sortOrder, after, _options);
    return result.toPromise();
  }
}
exports.PromiseSystemLogApi = PromiseSystemLogApi;
const ObservableAPI_40 = require('./ObservableAPI');
class PromiseTemplateApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_40.ObservableTemplateApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new custom SMS template
      * Create an SMS Template
      * @param smsTemplate
      */
  createSmsTemplate(smsTemplate, _options) {
    const result = this.api.createSmsTemplate(smsTemplate, _options);
    return result.toPromise();
  }
  /**
      * Deletes an SMS template
      * Delete an SMS Template
      * @param templateId
      */
  deleteSmsTemplate(templateId, _options) {
    const result = this.api.deleteSmsTemplate(templateId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific template by `id`
      * Retrieve an SMS Template
      * @param templateId
      */
  getSmsTemplate(templateId, _options) {
    const result = this.api.getSmsTemplate(templateId, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom SMS templates. A subset of templates can be returned that match a template type.
      * List all SMS Templates
      * @param templateType
      */
  listSmsTemplates(templateType, _options) {
    const result = this.api.listSmsTemplates(templateType, _options);
    return result.toPromise();
  }
  /**
      * Replaces the SMS template
      * Replace an SMS Template
      * @param templateId
      * @param smsTemplate
      */
  replaceSmsTemplate(templateId, smsTemplate, _options) {
    const result = this.api.replaceSmsTemplate(templateId, smsTemplate, _options);
    return result.toPromise();
  }
  /**
      * Updates an SMS template
      * Update an SMS Template
      * @param templateId
      * @param smsTemplate
      */
  updateSmsTemplate(templateId, smsTemplate, _options) {
    const result = this.api.updateSmsTemplate(templateId, smsTemplate, _options);
    return result.toPromise();
  }
}
exports.PromiseTemplateApi = PromiseTemplateApi;
const ObservableAPI_41 = require('./ObservableAPI');
class PromiseThreatInsightApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_41.ObservableThreatInsightApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves current ThreatInsight configuration
      * Retrieve the ThreatInsight Configuration
      */
  getCurrentConfiguration(_options) {
    const result = this.api.getCurrentConfiguration(_options);
    return result.toPromise();
  }
  /**
      * Updates ThreatInsight configuration
      * Update the ThreatInsight Configuration
      * @param threatInsightConfiguration
      */
  updateConfiguration(threatInsightConfiguration, _options) {
    const result = this.api.updateConfiguration(threatInsightConfiguration, _options);
    return result.toPromise();
  }
}
exports.PromiseThreatInsightApi = PromiseThreatInsightApi;
const ObservableAPI_42 = require('./ObservableAPI');
class PromiseTrustedOriginApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_42.ObservableTrustedOriginApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a trusted origin
      * Activate a Trusted Origin
      * @param trustedOriginId
      */
  activateTrustedOrigin(trustedOriginId, _options) {
    const result = this.api.activateTrustedOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Creates a trusted origin
      * Create a Trusted Origin
      * @param trustedOrigin
      */
  createTrustedOrigin(trustedOrigin, _options) {
    const result = this.api.createTrustedOrigin(trustedOrigin, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a trusted origin
      * Deactivate a Trusted Origin
      * @param trustedOriginId
      */
  deactivateTrustedOrigin(trustedOriginId, _options) {
    const result = this.api.deactivateTrustedOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a trusted origin
      * Delete a Trusted Origin
      * @param trustedOriginId
      */
  deleteTrustedOrigin(trustedOriginId, _options) {
    const result = this.api.deleteTrustedOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a trusted origin
      * Retrieve a Trusted Origin
      * @param trustedOriginId
      */
  getTrustedOrigin(trustedOriginId, _options) {
    const result = this.api.getTrustedOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Lists all trusted origins
      * List all Trusted Origins
      * @param q
      * @param filter
      * @param after
      * @param limit
      */
  listTrustedOrigins(q, filter, after, limit, _options) {
    const result = this.api.listTrustedOrigins(q, filter, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Replaces a trusted origin
      * Replace a Trusted Origin
      * @param trustedOriginId
      * @param trustedOrigin
      */
  replaceTrustedOrigin(trustedOriginId, trustedOrigin, _options) {
    const result = this.api.replaceTrustedOrigin(trustedOriginId, trustedOrigin, _options);
    return result.toPromise();
  }
}
exports.PromiseTrustedOriginApi = PromiseTrustedOriginApi;
const ObservableAPI_43 = require('./ObservableAPI');
class PromiseUserApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_43.ObservableUserApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a user. This operation can only be performed on users with a `STAGED` status. Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation. The user will have a status of `ACTIVE` when the activation process is complete. > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Activate a User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  activateUser(userId, sendEmail, _options) {
    const result = this.api.activateUser(userId, sendEmail, _options);
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
      * Creates a new user in your Okta organization with or without credentials<br> > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Create a User
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
      * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
      * Deactivate a User
      * @param userId
      * @param sendEmail
      */
  deactivateUser(userId, sendEmail, _options) {
    const result = this.api.deactivateUser(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Deletes linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Delete a Linked Object
      * @param userId
      * @param relationshipName
      */
  deleteLinkedObjectForUser(userId, relationshipName, _options) {
    const result = this.api.deleteLinkedObjectForUser(userId, relationshipName, _options);
    return result.toPromise();
  }
  /**
      * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**. Calling this on an `ACTIVE` user will transition the user to `DEPROVISIONED`.
      * Delete a User
      * @param userId
      * @param sendEmail
      */
  deleteUser(userId, sendEmail, _options) {
    const result = this.api.deleteUser(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login
      * Expire Password
      * @param userId
      */
  expirePassword(userId, _options) {
    const result = this.api.expirePassword(userId, _options);
    return result.toPromise();
  }
  /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response
      * Expire Password and Set Temporary Password
      * @param userId
      * @param revokeSessions When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
      */
  expirePasswordAndGetTemporaryPassword(userId, revokeSessions, _options) {
    const result = this.api.expirePasswordAndGetTemporaryPassword(userId, revokeSessions, _options);
    return result.toPromise();
  }
  /**
      * Initiates the forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
      * Initiate Forgot Password
      * @param userId
      * @param sendEmail
      */
  forgotPassword(userId, sendEmail, _options) {
    const result = this.api.forgotPassword(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct
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
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Generate a Reset Password Token
      * @param userId
      * @param sendEmail
      * @param revokeSessions When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
      */
  generateResetPasswordToken(userId, sendEmail, revokeSessions, _options) {
    const result = this.api.generateResetPasswordToken(userId, sendEmail, revokeSessions, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a refresh token issued for the specified User and Client
      * Retrieve a Refresh Token for a Client
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
      * Retrieves a user from your Okta organization
      * Retrieve a User
      * @param userId
      * @param expand Specifies additional metadata to include in the response. Possible value: &#x60;blocks&#x60;
      */
  getUser(userId, expand, _options) {
    const result = this.api.getUser(userId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a grant for the specified user
      * Retrieve a User Grant
      * @param userId
      * @param grantId
      * @param expand
      */
  getUserGrant(userId, grantId, expand, _options) {
    const result = this.api.getUserGrant(userId, grantId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all appLinks for all direct or indirect (via group membership) assigned applications
      * List all Assigned Application Links
      * @param userId
      */
  listAppLinks(userId, _options) {
    const result = this.api.listAppLinks(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all grants for a specified user and client
      * List all Grants for a Client
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
      * Lists all linked objects for a user, relationshipName can be a primary or associated relationship name
      * List all Linked Objects
      * @param userId
      * @param relationshipName
      * @param after
      * @param limit
      */
  listLinkedObjectsForUser(userId, relationshipName, after, limit, _options) {
    const result = this.api.listLinkedObjectsForUser(userId, relationshipName, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all refresh tokens issued for the specified User and Client
      * List all Refresh Tokens for a Client
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
      * Lists information about how the user is blocked from accessing their account
      * List all User Blocks
      * @param userId
      */
  listUserBlocks(userId, _options) {
    const result = this.api.listUserBlocks(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all client resources for which the specified user has grants or tokens
      * List all Clients
      * @param userId
      */
  listUserClients(userId, _options) {
    const result = this.api.listUserClients(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all grants for the specified user
      * List all User Grants
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
      * Lists all groups of which the user is a member
      * List all Groups
      * @param userId
      */
  listUserGroups(userId, _options) {
    const result = this.api.listUserGroups(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists the IdPs associated with the user
      * List all Identity Providers
      * @param userId
      */
  listUserIdentityProviders(userId, _options) {
    const result = this.api.listUserIdentityProviders(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all users that do not have a status of 'DEPROVISIONED' (by default), up to the maximum (200 for most orgs), with pagination.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List all Users
      * @param q Finds a user that matches firstName, lastName, and email properties
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
      * @param filter Filters users with a supported expression for a subset of properties
      * @param search Searches for users with a supported filtering expression for most properties. Okta recommends using this parameter for search for best performance.
      * @param sortBy
      * @param sortOrder
      */
  listUsers(q, after, limit, filter, search, sortBy, sortOrder, _options) {
    const result = this.api.listUsers(q, after, limit, filter, search, sortBy, sortOrder, _options);
    return result.toPromise();
  }
  /**
      * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
      * Reactivate a User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  reactivateUser(userId, sendEmail, _options) {
    const result = this.api.reactivateUser(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Replaces a user's profile and/or credentials using strict-update semantics
      * Replace a User
      * @param userId
      * @param user
      * @param strict
      */
  replaceUser(userId, user, strict, _options) {
    const result = this.api.replaceUser(userId, user, strict, _options);
    return result.toPromise();
  }
  /**
      * Resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset all Factors
      * @param userId
      */
  resetFactors(userId, _options) {
    const result = this.api.resetFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all grants for the specified user and client
      * Revoke all Grants for a Client
      * @param userId
      * @param clientId
      */
  revokeGrantsForUserAndClient(userId, clientId, _options) {
    const result = this.api.revokeGrantsForUserAndClient(userId, clientId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the specified refresh token
      * Revoke a Token for a Client
      * @param userId
      * @param clientId
      * @param tokenId
      */
  revokeTokenForUserAndClient(userId, clientId, tokenId, _options) {
    const result = this.api.revokeTokenForUserAndClient(userId, clientId, tokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all refresh tokens issued for the specified User and Client
      * Revoke all Refresh Tokens for a Client
      * @param userId
      * @param clientId
      */
  revokeTokensForUserAndClient(userId, clientId, _options) {
    const result = this.api.revokeTokensForUserAndClient(userId, clientId, _options);
    return result.toPromise();
  }
  /**
      * Revokes one grant for a specified user
      * Revoke a User Grant
      * @param userId
      * @param grantId
      */
  revokeUserGrant(userId, grantId, _options) {
    const result = this.api.revokeUserGrant(userId, grantId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all grants for a specified user
      * Revoke all User Grants
      * @param userId
      */
  revokeUserGrants(userId, _options) {
    const result = this.api.revokeUserGrants(userId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Revoke all User Sessions
      * @param userId
      * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
      */
  revokeUserSessions(userId, oauthTokens, _options) {
    const result = this.api.revokeUserSessions(userId, oauthTokens, _options);
    return result.toPromise();
  }
  /**
      * Creates a linked object for two users
      * Create a Linked Object for two User
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
      * Suspend a User
      * @param userId
      */
  suspendUser(userId, _options) {
    const result = this.api.suspendUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that is blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password.
      * Unlock a User
      * @param userId
      */
  unlockUser(userId, _options) {
    const result = this.api.unlockUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a User
      * @param userId
      */
  unsuspendUser(userId, _options) {
    const result = this.api.unsuspendUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Updates a user partially determined by the request parameters
      * Update a User
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
const ObservableAPI_44 = require('./ObservableAPI');
class PromiseUserFactorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_44.ObservableUserFactorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a factor. The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate a Factor
      * @param userId
      * @param factorId
      * @param body
      */
  activateFactor(userId, factorId, body, _options) {
    const result = this.api.activateFactor(userId, factorId, body, _options);
    return result.toPromise();
  }
  /**
      * Enrolls a user with a supported factor
      * Enroll a Factor
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
      * Retrieves a factor for the specified user
      * Retrieve a Factor
      * @param userId
      * @param factorId
      */
  getFactor(userId, factorId, _options) {
    const result = this.api.getFactor(userId, factorId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the factors verification transaction status
      * Retrieve a Factor Transaction Status
      * @param userId
      * @param factorId
      * @param transactionId
      */
  getFactorTransactionStatus(userId, factorId, transactionId, _options) {
    const result = this.api.getFactorTransactionStatus(userId, factorId, transactionId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the enrolled factors for the specified user
      * List all Factors
      * @param userId
      */
  listFactors(userId, _options) {
    const result = this.api.listFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the supported factors that can be enrolled for the specified user
      * List all Supported Factors
      * @param userId
      */
  listSupportedFactors(userId, _options) {
    const result = this.api.listSupportedFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all available security questions for a user's `question` factor
      * List all Supported Security Questions
      * @param userId
      */
  listSupportedSecurityQuestions(userId, _options) {
    const result = this.api.listSupportedSecurityQuestions(userId, _options);
    return result.toPromise();
  }
  /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor
      * Unenroll a Factor
      * @param userId
      * @param factorId
      * @param removeEnrollmentRecovery
      */
  unenrollFactor(userId, factorId, removeEnrollmentRecovery, _options) {
    const result = this.api.unenrollFactor(userId, factorId, removeEnrollmentRecovery, _options);
    return result.toPromise();
  }
  /**
      * Verifies an OTP for a `token` or `token:hardware` factor
      * Verify an MFA Factor
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
const ObservableAPI_45 = require('./ObservableAPI');
class PromiseUserTypeApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_45.ObservableUserTypeApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * Create a User Type
      * @param userType
      */
  createUserType(userType, _options) {
    const result = this.api.createUserType(userType, _options);
    return result.toPromise();
  }
  /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * Delete a User Type
      * @param typeId
      */
  deleteUserType(typeId, _options) {
    const result = this.api.deleteUserType(typeId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Retrieve a User Type
      * @param typeId
      */
  getUserType(typeId, _options) {
    const result = this.api.getUserType(typeId, _options);
    return result.toPromise();
  }
  /**
      * Lists all User Types in your org
      * List all User Types
      */
  listUserTypes(_options) {
    const result = this.api.listUserTypes(_options);
    return result.toPromise();
  }
  /**
      * Replaces an existing user type
      * Replace a User Type
      * @param typeId
      * @param userType
      */
  replaceUserType(typeId, userType, _options) {
    const result = this.api.replaceUserType(typeId, userType, _options);
    return result.toPromise();
  }
  /**
      * Updates an existing User Type
      * Update a User Type
      * @param typeId
      * @param userType
      */
  updateUserType(typeId, userType, _options) {
    const result = this.api.updateUserType(typeId, userType, _options);
    return result.toPromise();
  }
}
exports.PromiseUserTypeApi = PromiseUserTypeApi;
