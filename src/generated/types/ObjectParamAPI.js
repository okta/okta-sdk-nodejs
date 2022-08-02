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


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUserTypeApi = exports.ObjectUserFactorApi = exports.ObjectUserApi = exports.ObjectTrustedOriginApi = exports.ObjectThreatInsightApi = exports.ObjectTemplateApi = exports.ObjectSystemLogApi = exports.ObjectSubscriptionApi = exports.ObjectSessionApi = exports.ObjectSchemaApi = exports.ObjectProfileMappingApi = exports.ObjectPrincipalRateLimitApi = exports.ObjectPolicyApi = exports.ObjectOrgSettingApi = exports.ObjectNetworkZoneApi = exports.ObjectLinkedObjectApi = exports.ObjectInlineHookApi = exports.ObjectIdentityProviderApi = exports.ObjectGroupApi = exports.ObjectFeatureApi = exports.ObjectEventHookApi = exports.ObjectDomainApi = exports.ObjectCustomizationApi = exports.ObjectCAPTCHAApi = exports.ObjectBehaviorApi = exports.ObjectAuthorizationServerApi = exports.ObjectAuthenticatorApi = exports.ObjectApplicationApi = exports.ObjectApiTokenApi = exports.ObjectAgentPoolsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectAgentPoolsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAgentPoolsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates scheduled Agent pool update
      * Activate an Agent Pool update
      * @param param the request object
      */
    activateAgentPoolsUpdate(param, options) {
        return this.api.activateAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.
      * Create an Agent Pool update
      * @param param the request object
      */
    createAgentPoolsUpdate(param, options) {
        return this.api.createAgentPoolsUpdate(param.poolId, param.AgentPoolUpdate, options).toPromise();
    }
    /**
      * Deactivates scheduled Agent pool update
      * Deactivate an Agent Pool update
      * @param param the request object
      */
    deactivateAgentPoolsUpdate(param, options) {
        return this.api.deactivateAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Deletes Agent pool update
      * Delete an Agent Pool update
      * @param param the request object
      */
    deleteAgentPoolsUpdate(param, options) {
        return this.api.deleteAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Fetches AgentPools based on request parameters for a given org
      * List all Agent Pools
      * @param param the request object
      */
    getAgentPools(param = {}, options) {
        return this.api.getAgentPools(param.limitPerPoolType, param.poolType, param.after, options).toPromise();
    }
    /**
      * Gets Agent pool update from updateId
      * Retrieve an Agent Pool update by id
      * @param param the request object
      */
    getAgentPoolsUpdateInstance(param, options) {
        return this.api.getAgentPoolsUpdateInstance(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Gets the current state of the agent pool update instance settings
      * Retrieve an Agent Pool update's settings
      * @param param the request object
      */
    getAgentPoolsUpdateSettings(param, options) {
        return this.api.getAgentPoolsUpdateSettings(param.poolId, options).toPromise();
    }
    /**
      * Gets List of Agent pool updates
      * List all Agent Pool updates
      * @param param the request object
      */
    getAgentPoolsUpdates(param, options) {
        return this.api.getAgentPoolsUpdates(param.poolId, param.scheduled, options).toPromise();
    }
    /**
      * Pauses running or queued Agent pool update
      * Pause an Agent Pool update
      * @param param the request object
      */
    pauseAgentPoolsUpdate(param, options) {
        return this.api.pauseAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Resumes running or queued Agent pool update
      * Resume an Agent Pool update
      * @param param the request object
      */
    resumeAgentPoolsUpdate(param, options) {
        return this.api.resumeAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Retries Agent pool update
      * Retry an Agent Pool update
      * @param param the request object
      */
    retryAgentPoolsUpdate(param, options) {
        return this.api.retryAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Updates Agent pool update settings
      * Update an Agent pool update settings
      * @param param the request object
      */
    setAgentPoolsUpdateSettings(param, options) {
        return this.api.setAgentPoolsUpdateSettings(param.poolId, param.AgentPoolUpdateSetting, options).toPromise();
    }
    /**
      * Stops Agent pool update
      * Stop an Agent Pool update
      * @param param the request object
      */
    stopAgentPoolsUpdate(param, options) {
        return this.api.stopAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Updates Agent pool update and return latest agent pool update
      * Update an Agent Pool update by id
      * @param param the request object
      */
    updateAgentPoolsUpdate(param, options) {
        return this.api.updateAgentPoolsUpdate(param.poolId, param.updateId, param.AgentPoolUpdate, options).toPromise();
    }
}
exports.ObjectAgentPoolsApi = ObjectAgentPoolsApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectApiTokenApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableApiTokenApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Get the metadata for an active API token by id.
      * Retrieve an API Token's Metadata
      * @param param the request object
      */
    getApiToken(param, options) {
        return this.api.getApiToken(param.apiTokenId, options).toPromise();
    }
    /**
      * Enumerates the metadata of the active API tokens in your organization.
      * List all API Token Metadata
      * @param param the request object
      */
    listApiTokens(param = {}, options) {
        return this.api.listApiTokens(param.after, param.limit, param.q, options).toPromise();
    }
    /**
      * Revoke an API token by id.
      * Revoke an API Token
      * @param param the request object
      */
    revokeApiToken(param, options) {
        return this.api.revokeApiToken(param.apiTokenId, options).toPromise();
    }
    /**
      * Revokes the API token provided in the Authorization header.
      * Revoke the Current API Token
      * @param param the request object
      */
    revokeCurrentApiToken(param = {}, options) {
        return this.api.revokeCurrentApiToken(options).toPromise();
    }
}
exports.ObjectApiTokenApi = ObjectApiTokenApi;
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectApplicationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an inactive application.
      * Activate an Application
      * @param param the request object
      */
    activateApplication(param, options) {
        return this.api.activateApplication(param.appId, options).toPromise();
    }
    /**
      * Activates the default Provisioning Connection for an application.
      * Activate the default Provisioning Connection
      * @param param the request object
      */
    activateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.activateDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
      * Assign a User
      * @param param the request object
      */
    assignUserToApplication(param, options) {
        return this.api.assignUserToApplication(param.appId, param.appUser, options).toPromise();
    }
    /**
      * Clones a X.509 certificate for an application key credential from a source application to target application.
      * Clone a Key Credential
      * @param param the request object
      */
    cloneApplicationKey(param, options) {
        return this.api.cloneApplicationKey(param.appId, param.keyId, param.targetAid, options).toPromise();
    }
    /**
      * Adds a new application to your Okta organization.
      * Create an Application
      * @param param the request object
      */
    createApplication(param, options) {
        return this.api.createApplication(param.application, param.activate, param.OktaAccessGateway_Agent, options).toPromise();
    }
    /**
      * Assigns a group to an application
      * Assign a Group
      * @param param the request object
      */
    createApplicationGroupAssignment(param, options) {
        return this.api.createApplicationGroupAssignment(param.appId, param.groupId, param.applicationGroupAssignment, options).toPromise();
    }
    /**
      * Deactivates an active application.
      * Deactivate an Application
      * @param param the request object
      */
    deactivateApplication(param, options) {
        return this.api.deactivateApplication(param.appId, options).toPromise();
    }
    /**
      * Deactivates the default Provisioning Connection for an application.
      * Deactivate the default Provisioning Connection for an Application
      * @param param the request object
      */
    deactivateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.deactivateDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Removes an inactive application.
      * Delete an Application
      * @param param the request object
      */
    deleteApplication(param, options) {
        return this.api.deleteApplication(param.appId, options).toPromise();
    }
    /**
      * Removes a group assignment from an application.
      * Unassign a Group
      * @param param the request object
      */
    deleteApplicationGroupAssignment(param, options) {
        return this.api.deleteApplicationGroupAssignment(param.appId, param.groupId, options).toPromise();
    }
    /**
      * Removes an assignment for a user from an application.
      * Unassign a User
      * @param param the request object
      */
    deleteApplicationUser(param, options) {
        return this.api.deleteApplicationUser(param.appId, param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Generates a new X.509 certificate for an application key credential
      * Generate a Key Credential
      * @param param the request object
      */
    generateApplicationKey(param, options) {
        return this.api.generateApplicationKey(param.appId, param.validityYears, options).toPromise();
    }
    /**
      * Generates a new key pair and returns the Certificate Signing Request for it.
      * Generate a Certificate Signing Request
      * @param param the request object
      */
    generateCsrForApplication(param, options) {
        return this.api.generateCsrForApplication(param.appId, param.metadata, options).toPromise();
    }
    /**
      * Fetches an application from your Okta organization by `id`.
      * Retrieve an Application
      * @param param the request object
      */
    getApplication(param, options) {
        return this.api.getApplication(param.appId, param.expand, options).toPromise();
    }
    /**
      * Fetches an application group assignment
      * Retrieve an Assigned Group
      * @param param the request object
      */
    getApplicationGroupAssignment(param, options) {
        return this.api.getApplicationGroupAssignment(param.appId, param.groupId, param.expand, options).toPromise();
    }
    /**
      * Gets a specific application key credential by kid
      * Retrieve a Key Credential
      * @param param the request object
      */
    getApplicationKey(param, options) {
        return this.api.getApplicationKey(param.appId, param.keyId, options).toPromise();
    }
    /**
      * Fetches a specific user assignment for application by `id`.
      * Retrieve an Assigned User
      * @param param the request object
      */
    getApplicationUser(param, options) {
        return this.api.getApplicationUser(param.appId, param.userId, param.expand, options).toPromise();
    }
    /**
      * Fetches a certificate signing request for the app by `id`.
      * Retrieve a Certificate Signing Request
      * @param param the request object
      */
    getCsrForApplication(param, options) {
        return this.api.getCsrForApplication(param.appId, param.csrId, options).toPromise();
    }
    /**
      * Get default Provisioning Connection for application
      * Retrieve the default Provisioning Connection
      * @param param the request object
      */
    getDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.getDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Fetches a Feature object for an application.
      * Retrieve a Feature
      * @param param the request object
      */
    getFeatureForApplication(param, options) {
        return this.api.getFeatureForApplication(param.appId, param.name, options).toPromise();
    }
    /**
      * Gets a token for the specified application
      * Retrieve an OAuth 2.0 Token
      * @param param the request object
      */
    getOAuth2TokenForApplication(param, options) {
        return this.api.getOAuth2TokenForApplication(param.appId, param.tokenId, param.expand, options).toPromise();
    }
    /**
      * Fetches a single scope consent grant for the application
      * Retrieve a Scope Consent Grant
      * @param param the request object
      */
    getScopeConsentGrant(param, options) {
        return this.api.getScopeConsentGrant(param.appId, param.grantId, param.expand, options).toPromise();
    }
    /**
      * Grants consent for the application to request an OAuth 2.0 Okta scope
      * Grant Consent to Scope
      * @param param the request object
      */
    grantConsentToScope(param, options) {
        return this.api.grantConsentToScope(param.appId, param.oAuth2ScopeConsentGrant, options).toPromise();
    }
    /**
      * Enumerates group assignments for an application.
      * List all Assigned Groups
      * @param param the request object
      */
    listApplicationGroupAssignments(param, options) {
        return this.api.listApplicationGroupAssignments(param.appId, param.q, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Enumerates key credentials for an application
      * List all Key Credentials
      * @param param the request object
      */
    listApplicationKeys(param, options) {
        return this.api.listApplicationKeys(param.appId, options).toPromise();
    }
    /**
      * Enumerates all assigned [application users](#application-user-model) for an application.
      * List all Assigned Users
      * @param param the request object
      */
    listApplicationUsers(param, options) {
        return this.api.listApplicationUsers(param.appId, param.q, param.query_scope, param.after, param.limit, param.filter, param.expand, options).toPromise();
    }
    /**
      * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
      * List all Applications
      * @param param the request object
      */
    listApplications(param = {}, options) {
        return this.api.listApplications(param.q, param.after, param.limit, param.filter, param.expand, param.includeNonDeleted, options).toPromise();
    }
    /**
      * Enumerates Certificate Signing Requests for an application
      * List all Certificate Signing Requests
      * @param param the request object
      */
    listCsrsForApplication(param, options) {
        return this.api.listCsrsForApplication(param.appId, options).toPromise();
    }
    /**
      * List Features for application
      * List all Features
      * @param param the request object
      */
    listFeaturesForApplication(param, options) {
        return this.api.listFeaturesForApplication(param.appId, options).toPromise();
    }
    /**
      * Lists all tokens for the application
      * List all OAuth 2.0 Tokens
      * @param param the request object
      */
    listOAuth2TokensForApplication(param, options) {
        return this.api.listOAuth2TokensForApplication(param.appId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all scope consent grants for the application
      * List all Scope Consent Grants
      * @param param the request object
      */
    listScopeConsentGrants(param, options) {
        return this.api.listScopeConsentGrants(param.appId, param.expand, options).toPromise();
    }
    /**
      * Updates a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish a Certificate Signing Request
      * @param param the request object
      */
    publishCsrFromApplication(param, options) {
        return this.api.publishCsrFromApplication(param.appId, param.csrId, param.body, options).toPromise();
    }
    /**
      * Revokes a certificate signing request and deletes the key pair from the application.
      * Revoke a Certificate Signing Request
      * @param param the request object
      */
    revokeCsrFromApplication(param, options) {
        return this.api.revokeCsrFromApplication(param.appId, param.csrId, options).toPromise();
    }
    /**
      * Revokes the specified token for the specified application
      * Revoke an OAuth 2.0 Token
      * @param param the request object
      */
    revokeOAuth2TokenForApplication(param, options) {
        return this.api.revokeOAuth2TokenForApplication(param.appId, param.tokenId, options).toPromise();
    }
    /**
      * Revokes all tokens for the specified application
      * Revoke all OAuth 2.0 Tokens
      * @param param the request object
      */
    revokeOAuth2TokensForApplication(param, options) {
        return this.api.revokeOAuth2TokensForApplication(param.appId, options).toPromise();
    }
    /**
      * Revokes permission for the application to request the given scope
      * Revoke a Scope Consent Grant
      * @param param the request object
      */
    revokeScopeConsentGrant(param, options) {
        return this.api.revokeScopeConsentGrant(param.appId, param.grantId, options).toPromise();
    }
    /**
      * Set default Provisioning Connection for application
      * Update the default Provisioning Connection
      * @param param the request object
      */
    setDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.setDefaultProvisioningConnectionForApplication(param.appId, param.ProvisioningConnectionRequest, param.activate, options).toPromise();
    }
    /**
      * Updates an application in your organization.
      * Replace an Application
      * @param param the request object
      */
    updateApplication(param, options) {
        return this.api.updateApplication(param.appId, param.application, options).toPromise();
    }
    /**
      * Updates a user's profile for an application
      * Update an Application Profile for Assigned User
      * @param param the request object
      */
    updateApplicationUser(param, options) {
        return this.api.updateApplicationUser(param.appId, param.userId, param.appUser, options).toPromise();
    }
    /**
      * Updates a Feature object for an application.
      * Update a Feature
      * @param param the request object
      */
    updateFeatureForApplication(param, options) {
        return this.api.updateFeatureForApplication(param.appId, param.name, param.CapabilitiesObject, options).toPromise();
    }
    /**
      * The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * Upload a Logo
      * @param param the request object
      */
    uploadApplicationLogo(param, options) {
        return this.api.uploadApplicationLogo(param.appId, param.file, options).toPromise();
    }
}
exports.ObjectApplicationApi = ObjectApplicationApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectAuthenticatorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableAuthenticatorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an authenticator by `authenticatorId`.
      * Activate an Authenticator
      * @param param the request object
      */
    activateAuthenticator(param, options) {
        return this.api.activateAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Deactivates an authenticator by `authenticatorId`.
      * Deactivate an Authenticator
      * @param param the request object
      */
    deactivateAuthenticator(param, options) {
        return this.api.deactivateAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
      * Retrieve an Authenticator
      * @param param the request object
      */
    getAuthenticator(param, options) {
        return this.api.getAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Enumerates authenticators in your organization.
      * List all Authenticators
      * @param param the request object
      */
    listAuthenticators(param = {}, options) {
        return this.api.listAuthenticators(options).toPromise();
    }
    /**
      * Updates an authenticator
      * Replace an Authenticator
      * @param param the request object
      */
    updateAuthenticator(param, options) {
        return this.api.updateAuthenticator(param.authenticatorId, param.authenticator, options).toPromise();
    }
}
exports.ObjectAuthenticatorApi = ObjectAuthenticatorApi;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectAuthorizationServerApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableAuthorizationServerApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Activate an Authorization Server
      * @param param the request object
      */
    activateAuthorizationServer(param, options) {
        return this.api.activateAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Activate Authorization Server Policy
      * Activate a Policy
      * @param param the request object
      */
    activateAuthorizationServerPolicy(param, options) {
        return this.api.activateAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Activate Authorization Server Policy Rule
      * Activate a Policy Rule
      * @param param the request object
      */
    activateAuthorizationServerPolicyRule(param, options) {
        return this.api.activateAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Success
      * Create an Authorization Server
      * @param param the request object
      */
    createAuthorizationServer(param, options) {
        return this.api.createAuthorizationServer(param.authorizationServer, options).toPromise();
    }
    /**
      * Success
      * Create a Policy
      * @param param the request object
      */
    createAuthorizationServerPolicy(param, options) {
        return this.api.createAuthorizationServerPolicy(param.authServerId, param.policy, options).toPromise();
    }
    /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy.
      * Create a Policy Rule
      * @param param the request object
      */
    createAuthorizationServerPolicyRule(param, options) {
        return this.api.createAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.policyRule, options).toPromise();
    }
    /**
      * Success
      * Create a Custom Token Claim
      * @param param the request object
      */
    createOAuth2Claim(param, options) {
        return this.api.createOAuth2Claim(param.authServerId, param.oAuth2Claim, options).toPromise();
    }
    /**
      * Success
      * Create a Custom Token Scope
      * @param param the request object
      */
    createOAuth2Scope(param, options) {
        return this.api.createOAuth2Scope(param.authServerId, param.oAuth2Scope, options).toPromise();
    }
    /**
      * Success
      * Deactivate an Authorization Server
      * @param param the request object
      */
    deactivateAuthorizationServer(param, options) {
        return this.api.deactivateAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Deactivate Authorization Server Policy
      * Deactivate a Policy
      * @param param the request object
      */
    deactivateAuthorizationServerPolicy(param, options) {
        return this.api.deactivateAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Deactivate Authorization Server Policy Rule
      * Deactivate a Policy Rule
      * @param param the request object
      */
    deactivateAuthorizationServerPolicyRule(param, options) {
        return this.api.deactivateAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Success
      * Delete an Authorization Server
      * @param param the request object
      */
    deleteAuthorizationServer(param, options) {
        return this.api.deleteAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * Delete a Policy
      * @param param the request object
      */
    deleteAuthorizationServerPolicy(param, options) {
        return this.api.deleteAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Delete a Policy Rule
      * @param param the request object
      */
    deleteAuthorizationServerPolicyRule(param, options) {
        return this.api.deleteAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.ruleId, options).toPromise();
    }
    /**
      * Success
      * Delete a Custom Token Claim
      * @param param the request object
      */
    deleteOAuth2Claim(param, options) {
        return this.api.deleteOAuth2Claim(param.authServerId, param.claimId, options).toPromise();
    }
    /**
      * Success
      * Delete a Custom Token Scope
      * @param param the request object
      */
    deleteOAuth2Scope(param, options) {
        return this.api.deleteOAuth2Scope(param.authServerId, param.scopeId, options).toPromise();
    }
    /**
      * Success
      * Retrieve an Authorization Server
      * @param param the request object
      */
    getAuthorizationServer(param, options) {
        return this.api.getAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * Retrieve a Policy
      * @param param the request object
      */
    getAuthorizationServerPolicy(param, options) {
        return this.api.getAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.
      * Retrieve a Policy Rule
      * @param param the request object
      */
    getAuthorizationServerPolicyRule(param, options) {
        return this.api.getAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.ruleId, options).toPromise();
    }
    /**
      * Success
      * Retrieve a Custom Token Claim
      * @param param the request object
      */
    getOAuth2Claim(param, options) {
        return this.api.getOAuth2Claim(param.authServerId, param.claimId, options).toPromise();
    }
    /**
      * Success
      * Retrieve a Custom Token Scope
      * @param param the request object
      */
    getOAuth2Scope(param, options) {
        return this.api.getOAuth2Scope(param.authServerId, param.scopeId, options).toPromise();
    }
    /**
      * Success
      * Retrieve a Refresh Token for a Client
      * @param param the request object
      */
    getRefreshTokenForAuthorizationServerAndClient(param, options) {
        return this.api.getRefreshTokenForAuthorizationServerAndClient(param.authServerId, param.clientId, param.tokenId, param.expand, options).toPromise();
    }
    /**
      * Success
      * List all Credential Keys
      * @param param the request object
      */
    listAuthorizationServerKeys(param, options) {
        return this.api.listAuthorizationServerKeys(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * List all Policies
      * @param param the request object
      */
    listAuthorizationServerPolicies(param, options) {
        return this.api.listAuthorizationServerPolicies(param.authServerId, options).toPromise();
    }
    /**
      * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
      * List all Policy Rules
      * @param param the request object
      */
    listAuthorizationServerPolicyRules(param, options) {
        return this.api.listAuthorizationServerPolicyRules(param.policyId, param.authServerId, options).toPromise();
    }
    /**
      * Success
      * List all Authorization Servers
      * @param param the request object
      */
    listAuthorizationServers(param = {}, options) {
        return this.api.listAuthorizationServers(param.q, param.limit, param.after, options).toPromise();
    }
    /**
      * Success
      * List all Custom Token Claims
      * @param param the request object
      */
    listOAuth2Claims(param, options) {
        return this.api.listOAuth2Claims(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * List all Clients
      * @param param the request object
      */
    listOAuth2ClientsForAuthorizationServer(param, options) {
        return this.api.listOAuth2ClientsForAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * List all Custom Token Scopes
      * @param param the request object
      */
    listOAuth2Scopes(param, options) {
        return this.api.listOAuth2Scopes(param.authServerId, param.q, param.filter, param.cursor, param.limit, options).toPromise();
    }
    /**
      * Success
      * List all Refresh Tokens for a Client
      * @param param the request object
      */
    listRefreshTokensForAuthorizationServerAndClient(param, options) {
        return this.api.listRefreshTokensForAuthorizationServerAndClient(param.authServerId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Success
      * Revoke a Refresh Token for a Client
      * @param param the request object
      */
    revokeRefreshTokenForAuthorizationServerAndClient(param, options) {
        return this.api.revokeRefreshTokenForAuthorizationServerAndClient(param.authServerId, param.clientId, param.tokenId, options).toPromise();
    }
    /**
      * Success
      * Revoke all Refresh Tokens for a Client
      * @param param the request object
      */
    revokeRefreshTokensForAuthorizationServerAndClient(param, options) {
        return this.api.revokeRefreshTokensForAuthorizationServerAndClient(param.authServerId, param.clientId, options).toPromise();
    }
    /**
      * Success
      * Rotate all Credential Keys
      * @param param the request object
      */
    rotateAuthorizationServerKeys(param, options) {
        return this.api.rotateAuthorizationServerKeys(param.authServerId, param.use, options).toPromise();
    }
    /**
      * Success
      * Replace an Authorization Server
      * @param param the request object
      */
    updateAuthorizationServer(param, options) {
        return this.api.updateAuthorizationServer(param.authServerId, param.authorizationServer, options).toPromise();
    }
    /**
      * Success
      * Replace a Policy
      * @param param the request object
      */
    updateAuthorizationServerPolicy(param, options) {
        return this.api.updateAuthorizationServerPolicy(param.authServerId, param.policyId, param.policy, options).toPromise();
    }
    /**
      * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Replace a Policy Rule
      * @param param the request object
      */
    updateAuthorizationServerPolicyRule(param, options) {
        return this.api.updateAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.ruleId, param.policyRule, options).toPromise();
    }
    /**
      * Success
      * Replace a Custom Token Claim
      * @param param the request object
      */
    updateOAuth2Claim(param, options) {
        return this.api.updateOAuth2Claim(param.authServerId, param.claimId, param.oAuth2Claim, options).toPromise();
    }
    /**
      * Success
      * Replace a Custom Token Scope
      * @param param the request object
      */
    updateOAuth2Scope(param, options) {
        return this.api.updateOAuth2Scope(param.authServerId, param.scopeId, param.oAuth2Scope, options).toPromise();
    }
}
exports.ObjectAuthorizationServerApi = ObjectAuthorizationServerApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectBehaviorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableBehaviorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activate Behavior Detection Rule
      * Activate a Behavior Detection Rule
      * @param param the request object
      */
    activateBehaviorDetectionRule(param, options) {
        return this.api.activateBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Adds a new Behavior Detection Rule to your organization.
      * Create a Behavior Detection Rule
      * @param param the request object
      */
    createBehaviorDetectionRule(param, options) {
        return this.api.createBehaviorDetectionRule(param.rule, options).toPromise();
    }
    /**
      * Deactivate Behavior Detection Rule
      * Deactivate a Behavior Detection Rule
      * @param param the request object
      */
    deactivateBehaviorDetectionRule(param, options) {
        return this.api.deactivateBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Delete a Behavior Detection Rule by `behaviorId`.
      * Delete a Behavior Detection Rule
      * @param param the request object
      */
    deleteBehaviorDetectionRule(param, options) {
        return this.api.deleteBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Fetches a Behavior Detection Rule by `behaviorId`.
      * Retrieve a Behavior Detection Rule
      * @param param the request object
      */
    getBehaviorDetectionRule(param, options) {
        return this.api.getBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Enumerates Behavior Detection Rules in your organization with pagination.
      * List all Behavior Detection Rules
      * @param param the request object
      */
    listBehaviorDetectionRules(param = {}, options) {
        return this.api.listBehaviorDetectionRules(options).toPromise();
    }
    /**
      * Update a Behavior Detection Rule by `behaviorId`.
      * Replace a Behavior Detection Rule
      * @param param the request object
      */
    updateBehaviorDetectionRule(param, options) {
        return this.api.updateBehaviorDetectionRule(param.behaviorId, param.rule, options).toPromise();
    }
}
exports.ObjectBehaviorApi = ObjectBehaviorApi;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectCAPTCHAApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableCAPTCHAApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Adds a new CAPTCHA instance to your organization. In the current release, we only allow one CAPTCHA instance per org.
      * Create a CAPTCHA instance
      * @param param the request object
      */
    createCaptchaInstance(param, options) {
        return this.api.createCaptchaInstance(param.instance, options).toPromise();
    }
    /**
      * Delete a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete a CAPTCHA Instance
      * @param param the request object
      */
    deleteCaptchaInstance(param, options) {
        return this.api.deleteCaptchaInstance(param.captchaId, options).toPromise();
    }
    /**
      * Fetches a CAPTCHA instance by `captchaId`.
      * Retrieve a CAPTCHA Instance
      * @param param the request object
      */
    getCaptchaInstance(param, options) {
        return this.api.getCaptchaInstance(param.captchaId, options).toPromise();
    }
    /**
      * Enumerates CAPTCHA instances in your organization with pagination. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      * @param param the request object
      */
    listCaptchaInstances(param = {}, options) {
        return this.api.listCaptchaInstances(options).toPromise();
    }
    /**
      * Partially update a CAPTCHA instance by `captchaId`.
      * Update a CAPTCHA instance
      * @param param the request object
      */
    partialUpdateCaptchaInstance(param, options) {
        return this.api.partialUpdateCaptchaInstance(param.captchaId, param.instance, options).toPromise();
    }
    /**
      * Update a CAPTCHA instance by `captchaId`.
      * Replace a CAPTCHA instance
      * @param param the request object
      */
    updateCaptchaInstance(param, options) {
        return this.api.updateCaptchaInstance(param.captchaId, param.instance, options).toPromise();
    }
}
exports.ObjectCAPTCHAApi = ObjectCAPTCHAApi;
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectCustomizationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableCustomizationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new email customization.
      * Create an Email Customization
      * @param param the request object
      */
    createEmailCustomization(param, options) {
        return this.api.createEmailCustomization(param.brandId, param.templateName, param.instance, options).toPromise();
    }
    /**
      * Deletes all customizations for an email template.
      * Delete all Email Customizations
      * @param param the request object
      */
    deleteAllCustomizations(param, options) {
        return this.api.deleteAllCustomizations(param.brandId, param.templateName, options).toPromise();
    }
    /**
      * Deletes a Theme background image.
      * Delete the Background Image
      * @param param the request object
      */
    deleteBrandThemeBackgroundImage(param, options) {
        return this.api.deleteBrandThemeBackgroundImage(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Deletes a Theme favicon. The theme will use the default Okta favicon.
      * Delete the Favicon
      * @param param the request object
      */
    deleteBrandThemeFavicon(param, options) {
        return this.api.deleteBrandThemeFavicon(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the Logo
      * @param param the request object
      */
    deleteBrandThemeLogo(param, options) {
        return this.api.deleteBrandThemeLogo(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Deletes an email customization by its unique identifier.
      * Delete an Email Customization
      * @param param the request object
      */
    deleteEmailCustomization(param, options) {
        return this.api.deleteEmailCustomization(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Fetches a brand by `brandId`
      * Retrieve a Brand
      * @param param the request object
      */
    getBrand(param, options) {
        return this.api.getBrand(param.brandId, options).toPromise();
    }
    /**
      * Fetches a theme for a brand
      * Retrieve a Theme
      * @param param the request object
      */
    getBrandTheme(param, options) {
        return this.api.getBrandTheme(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Generates a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview an Email Customization
      * @param param the request object
      */
    getCustomizationPreview(param, options) {
        return this.api.getCustomizationPreview(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Gets an email customization by its unique identifier.
      * Retrieve an Email Customization
      * @param param the request object
      */
    getEmailCustomization(param, options) {
        return this.api.getEmailCustomization(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Gets an email template's default content.
      * Retrieve an Email Template Default Content
      * @param param the request object
      */
    getEmailDefaultContent(param, options) {
        return this.api.getEmailDefaultContent(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Generates a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview the Email Template Default Content
      * @param param the request object
      */
    getEmailDefaultPreview(param, options) {
        return this.api.getEmailDefaultPreview(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Gets an email template's settings.
      * Retrieve the Email Template Settings
      * @param param the request object
      */
    getEmailSettings(param, options) {
        return this.api.getEmailSettings(param.brandId, param.templateName, options).toPromise();
    }
    /**
      * Gets the details of an email template by name.
      * Retrieve an Email Template
      * @param param the request object
      */
    getEmailTemplate(param, options) {
        return this.api.getEmailTemplate(param.brandId, param.templateName, param.expand, options).toPromise();
    }
    /**
      * List all the themes in your brand
      * List all Themes
      * @param param the request object
      */
    listBrandThemes(param, options) {
        return this.api.listBrandThemes(param.brandId, options).toPromise();
    }
    /**
      * List all the brands in your org.
      * List all Brands
      * @param param the request object
      */
    listBrands(param = {}, options) {
        return this.api.listBrands(options).toPromise();
    }
    /**
      * Lists all customizations of an email template.
      * List all Email Customizations
      * @param param the request object
      */
    listEmailCustomizations(param, options) {
        return this.api.listEmailCustomizations(param.brandId, param.templateName, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all email templates.
      * List all Email Templates
      * @param param the request object
      */
    listEmailTemplates(param, options) {
        return this.api.listEmailTemplates(param.brandId, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Previews the error page.
      * Preview the Error Page
      * @param param the request object
      */
    previewErrorPage(param, options) {
        return this.api.previewErrorPage(param.brandId, param.CustomizablePage, options).toPromise();
    }
    /**
      * Preview the sign-in page.
      * Preview the Sign-in Page.
      * @param param the request object
      */
    previewSignInPage(param, options) {
        return this.api.previewSignInPage(param.brandId, param.SignInPage, options).toPromise();
    }
    /**
      * Replaces the error page.
      * Replace the Error Page
      * @param param the request object
      */
    replaceErrorPage(param, options) {
        return this.api.replaceErrorPage(param.brandId, param.CustomizablePage, options).toPromise();
    }
    /**
      * Replaces the sign-in page.
      * Replace the Sign-in Page
      * @param param the request object
      */
    replaceSignInPage(param, options) {
        return this.api.replaceSignInPage(param.brandId, param.SignInPage, options).toPromise();
    }
    /**
      * Replaces the sign-out page settings.
      * Replace the Sign-out Page Settings
      * @param param the request object
      */
    replaceSignOutPageSettings(param, options) {
        return this.api.replaceSignOutPageSettings(param.brandId, param.HostedPage, options).toPromise();
    }
    /**
      * Resets the error page.
      * Reset the Error Page
      * @param param the request object
      */
    resetErrorPage(param, options) {
        return this.api.resetErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Reset the sign-in page.
      * Reset the Sign-in Page
      * @param param the request object
      */
    resetSignInPage(param, options) {
        return this.api.resetSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the error page.
      * Retrieve the Error Page
      * @param param the request object
      */
    retrieveErrorPage(param, options) {
        return this.api.retrieveErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the sign-in page.
      * Retrieve the Sign-in Page
      * @param param the request object
      */
    retrieveSignInPage(param, options) {
        return this.api.retrieveSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the sign-out page settings.
      * Retrieve the Sign-out Page Settings
      * @param param the request object
      */
    retrieveSignOutPageSettings(param, options) {
        return this.api.retrieveSignOutPageSettings(param.brandId, options).toPromise();
    }
    /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
      * Send a Test Email
      * @param param the request object
      */
    sendTestEmail(param, options) {
        return this.api.sendTestEmail(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Updates a brand by `brandId`
      * Replace a Brand
      * @param param the request object
      */
    updateBrand(param, options) {
        return this.api.updateBrand(param.brandId, param.brand, options).toPromise();
    }
    /**
      * Updates a theme for a brand
      * Replace a Theme
      * @param param the request object
      */
    updateBrandTheme(param, options) {
        return this.api.updateBrandTheme(param.brandId, param.themeId, param.theme, options).toPromise();
    }
    /**
      * Updates an existing email customization using the property values provided.
      * Replace an Email Customization
      * @param param the request object
      */
    updateEmailCustomization(param, options) {
        return this.api.updateEmailCustomization(param.brandId, param.templateName, param.customizationId, param.instance, options).toPromise();
    }
    /**
      * Updates an email template's settings.
      * Replace the Email Template Settings
      * @param param the request object
      */
    updateEmailSettings(param, options) {
        return this.api.updateEmailSettings(param.brandId, param.templateName, param.EmailSettings, options).toPromise();
    }
    /**
      * Updates the background image for your Theme
      * Upload the Background Image
      * @param param the request object
      */
    uploadBrandThemeBackgroundImage(param, options) {
        return this.api.uploadBrandThemeBackgroundImage(param.brandId, param.themeId, param.file, options).toPromise();
    }
    /**
      * Updates the favicon for your theme
      * Upload the Favicon
      * @param param the request object
      */
    uploadBrandThemeFavicon(param, options) {
        return this.api.uploadBrandThemeFavicon(param.brandId, param.themeId, param.file, options).toPromise();
    }
    /**
      * Updates the logo for your Theme
      * Upload the Logo
      * @param param the request object
      */
    uploadBrandThemeLogo(param, options) {
        return this.api.uploadBrandThemeLogo(param.brandId, param.themeId, param.file, options).toPromise();
    }
}
exports.ObjectCustomizationApi = ObjectCustomizationApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectDomainApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableDomainApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates the Certificate for the Domain.
      * Replace the Certificate
      * @param param the request object
      */
    createCertificate(param, options) {
        return this.api.createCertificate(param.domainId, param.certificate, options).toPromise();
    }
    /**
      * Creates your domain.
      * Create a Domain
      * @param param the request object
      */
    createDomain(param, options) {
        return this.api.createDomain(param.domain, options).toPromise();
    }
    /**
      * Deletes a Domain by `id`.
      * Delete a Domain
      * @param param the request object
      */
    deleteDomain(param, options) {
        return this.api.deleteDomain(param.domainId, options).toPromise();
    }
    /**
      * Fetches a Domain by `id`.
      * Retrieve a Domain
      * @param param the request object
      */
    getDomain(param, options) {
        return this.api.getDomain(param.domainId, options).toPromise();
    }
    /**
      * List all verified custom Domains for the org.
      * List all Domains
      * @param param the request object
      */
    listDomains(param = {}, options) {
        return this.api.listDomains(options).toPromise();
    }
    /**
      * Verifies the Domain by `id`.
      * Verify a Domain
      * @param param the request object
      */
    verifyDomain(param, options) {
        return this.api.verifyDomain(param.domainId, options).toPromise();
    }
}
exports.ObjectDomainApi = ObjectDomainApi;
const ObservableAPI_10 = require("./ObservableAPI");
class ObjectEventHookApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableEventHookApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Activate an Event Hook
      * @param param the request object
      */
    activateEventHook(param, options) {
        return this.api.activateEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Success
      * Create an Event Hook
      * @param param the request object
      */
    createEventHook(param, options) {
        return this.api.createEventHook(param.eventHook, options).toPromise();
    }
    /**
      * Success
      * Deactivate an Event Hook
      * @param param the request object
      */
    deactivateEventHook(param, options) {
        return this.api.deactivateEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Success
      * Delete an Event Hook
      * @param param the request object
      */
    deleteEventHook(param, options) {
        return this.api.deleteEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Success
      * Retrieve an Event Hook
      * @param param the request object
      */
    getEventHook(param, options) {
        return this.api.getEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Success
      * List all Event Hooks
      * @param param the request object
      */
    listEventHooks(param = {}, options) {
        return this.api.listEventHooks(options).toPromise();
    }
    /**
      * Success
      * Replace an Event Hook
      * @param param the request object
      */
    updateEventHook(param, options) {
        return this.api.updateEventHook(param.eventHookId, param.eventHook, options).toPromise();
    }
    /**
      * Success
      * Verify an Event Hook
      * @param param the request object
      */
    verifyEventHook(param, options) {
        return this.api.verifyEventHook(param.eventHookId, options).toPromise();
    }
}
exports.ObjectEventHookApi = ObjectEventHookApi;
const ObservableAPI_11 = require("./ObservableAPI");
class ObjectFeatureApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableFeatureApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Retrieve a Feature
      * @param param the request object
      */
    getFeature(param, options) {
        return this.api.getFeature(param.featureId, options).toPromise();
    }
    /**
      * Success
      * List all Dependencies
      * @param param the request object
      */
    listFeatureDependencies(param, options) {
        return this.api.listFeatureDependencies(param.featureId, options).toPromise();
    }
    /**
      * Success
      * List all Dependents
      * @param param the request object
      */
    listFeatureDependents(param, options) {
        return this.api.listFeatureDependents(param.featureId, options).toPromise();
    }
    /**
      * Success
      * List all Features
      * @param param the request object
      */
    listFeatures(param = {}, options) {
        return this.api.listFeatures(options).toPromise();
    }
    /**
      * Success
      * Update a Feature Lifecycle
      * @param param the request object
      */
    updateFeatureLifecycle(param, options) {
        return this.api.updateFeatureLifecycle(param.featureId, param.lifecycle, param.mode, options).toPromise();
    }
}
exports.ObjectFeatureApi = ObjectFeatureApi;
const ObservableAPI_12 = require("./ObservableAPI");
class ObjectGroupApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableGroupApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a specific group rule by id from your organization
      * Activate a Group Rule
      * @param param the request object
      */
    activateGroupRule(param, options) {
        return this.api.activateGroupRule(param.ruleId, options).toPromise();
    }
    /**
      * Add App Instance Target to App Administrator Role given to a Group
      * Assign an Application Instance Target to Application Administrator Role
      * @param param the request object
      */
    addApplicationInstanceTargetToAppAdminRoleGivenToGroup(param, options) {
        return this.api.addApplicationInstanceTargetToAppAdminRoleGivenToGroup(param.groupId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Success
      * Assign an Application Target to Administrator Role
      * @param param the request object
      */
    addApplicationTargetToAdminRoleGivenToGroup(param, options) {
        return this.api.addApplicationTargetToAdminRoleGivenToGroup(param.groupId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Enumerates group targets for a group role.
      * Assign a Group Target for Group Role
      * @param param the request object
      */
    addGroupTargetToGroupAdministratorRoleForGroup(param, options) {
        return this.api.addGroupTargetToGroupAdministratorRoleForGroup(param.groupId, param.roleId, param.targetGroupId, options).toPromise();
    }
    /**
      * Adds a user to a group with 'OKTA_GROUP' type.
      * Assign a User
      * @param param the request object
      */
    addUserToGroup(param, options) {
        return this.api.addUserToGroup(param.groupId, param.userId, options).toPromise();
    }
    /**
      * Assigns a Role to a Group
      * Assign a Role
      * @param param the request object
      */
    assignRoleToGroup(param, options) {
        return this.api.assignRoleToGroup(param.groupId, param.assignRoleRequest, param.disableNotifications, options).toPromise();
    }
    /**
      * Adds a new group with `OKTA_GROUP` type to your organization.
      * Create a Group
      * @param param the request object
      */
    createGroup(param, options) {
        return this.api.createGroup(param.group, options).toPromise();
    }
    /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition
      * Create a Group Rule
      * @param param the request object
      */
    createGroupRule(param, options) {
        return this.api.createGroupRule(param.groupRule, options).toPromise();
    }
    /**
      * Deactivates a specific group rule by id from your organization
      * Deactivate a Group Rule
      * @param param the request object
      */
    deactivateGroupRule(param, options) {
        return this.api.deactivateGroupRule(param.ruleId, options).toPromise();
    }
    /**
      * Removes a group with `OKTA_GROUP` type from your organization.
      * Delete a Group
      * @param param the request object
      */
    deleteGroup(param, options) {
        return this.api.deleteGroup(param.groupId, options).toPromise();
    }
    /**
      * Removes a specific group rule by id from your organization
      * Delete a group Rule
      * @param param the request object
      */
    deleteGroupRule(param, options) {
        return this.api.deleteGroupRule(param.ruleId, param.removeUsers, options).toPromise();
    }
    /**
      * Fetches a group from your organization.
      * List all Group Rules
      * @param param the request object
      */
    getGroup(param, options) {
        return this.api.getGroup(param.groupId, options).toPromise();
    }
    /**
      * Fetches a specific group rule by id from your organization
      * Retrieve a Group Rule
      * @param param the request object
      */
    getGroupRule(param, options) {
        return this.api.getGroupRule(param.ruleId, param.expand, options).toPromise();
    }
    /**
      * Success
      * Retrieve a Role
      * @param param the request object
      */
    getRole(param, options) {
        return this.api.getRole(param.groupId, param.roleId, options).toPromise();
    }
    /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for an Application Administrator Role
      * @param param the request object
      */
    listApplicationTargetsForApplicationAdministratorRoleForGroup(param, options) {
        return this.api.listApplicationTargetsForApplicationAdministratorRoleForGroup(param.groupId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Enumerates all applications that are assigned to a group.
      * List all Assigned Applications
      * @param param the request object
      */
    listAssignedApplicationsForGroup(param, options) {
        return this.api.listAssignedApplicationsForGroup(param.groupId, param.after, param.limit, options).toPromise();
    }
    /**
      * Success
      * List all Assigned Roles
      * @param param the request object
      */
    listGroupAssignedRoles(param, options) {
        return this.api.listGroupAssignedRoles(param.groupId, param.expand, options).toPromise();
    }
    /**
      * Lists all group rules for your organization.
      * List all Group Rules
      * @param param the request object
      */
    listGroupRules(param = {}, options) {
        return this.api.listGroupRules(param.limit, param.after, param.search, param.expand, options).toPromise();
    }
    /**
      * Enumerates group targets for a group role.
      * List all Group Targets for a Group Role
      * @param param the request object
      */
    listGroupTargetsForGroupRole(param, options) {
        return this.api.listGroupTargetsForGroupRole(param.groupId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Enumerates all users that are a member of a group.
      * List all Member Users
      * @param param the request object
      */
    listGroupUsers(param, options) {
        return this.api.listGroupUsers(param.groupId, param.after, param.limit, options).toPromise();
    }
    /**
      * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
      * List all Groups
      * @param param the request object
      */
    listGroups(param = {}, options) {
        return this.api.listGroups(param.q, param.search, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Remove App Instance Target to App Administrator Role given to a Group
      * Delete an Application Instance Target to Application Administrator Role
      * @param param the request object
      */
    removeApplicationTargetFromAdministratorRoleGivenToGroup(param, options) {
        return this.api.removeApplicationTargetFromAdministratorRoleGivenToGroup(param.groupId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Success
      * Delete an Application Target from Application Administrator Role
      * @param param the request object
      */
    removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(param, options) {
        return this.api.removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(param.groupId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * remove group target for a group role.
      * Delete a Group Target for Group Role
      * @param param the request object
      */
    removeGroupTargetFromGroupAdministratorRoleGivenToGroup(param, options) {
        return this.api.removeGroupTargetFromGroupAdministratorRoleGivenToGroup(param.groupId, param.roleId, param.targetGroupId, options).toPromise();
    }
    /**
      * Unassigns a Role from a Group
      * Delete a Role
      * @param param the request object
      */
    removeRoleFromGroup(param, options) {
        return this.api.removeRoleFromGroup(param.groupId, param.roleId, options).toPromise();
    }
    /**
      * Removes a user from a group with 'OKTA_GROUP' type.
      * Unassign a User
      * @param param the request object
      */
    removeUserFromGroup(param, options) {
        return this.api.removeUserFromGroup(param.groupId, param.userId, options).toPromise();
    }
    /**
      * Updates the profile for a group with `OKTA_GROUP` type from your organization.
      * Replace a Group
      * @param param the request object
      */
    updateGroup(param, options) {
        return this.api.updateGroup(param.groupId, param.group, options).toPromise();
    }
    /**
      * Updates a group rule. Only `INACTIVE` rules can be updated.
      * Replace a Group Rule
      * @param param the request object
      */
    updateGroupRule(param, options) {
        return this.api.updateGroupRule(param.ruleId, param.groupRule, options).toPromise();
    }
}
exports.ObjectGroupApi = ObjectGroupApi;
const ObservableAPI_13 = require("./ObservableAPI");
class ObjectIdentityProviderApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableIdentityProviderApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an inactive IdP.
      * Activate an Identity Provider
      * @param param the request object
      */
    activateIdentityProvider(param, options) {
        return this.api.activateIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
      * Clone a Signing Credential Key
      * @param param the request object
      */
    cloneIdentityProviderKey(param, options) {
        return this.api.cloneIdentityProviderKey(param.idpId, param.keyId, param.targetIdpId, options).toPromise();
    }
    /**
      * Adds a new IdP to your organization.
      * Create an Identity Provider
      * @param param the request object
      */
    createIdentityProvider(param, options) {
        return this.api.createIdentityProvider(param.identityProvider, options).toPromise();
    }
    /**
      * Adds a new X.509 certificate credential to the IdP key store.
      * Create an X.509 Certificate Public Key
      * @param param the request object
      */
    createIdentityProviderKey(param, options) {
        return this.api.createIdentityProviderKey(param.jsonWebKey, options).toPromise();
    }
    /**
      * Deactivates an active IdP.
      * Deactivate an Identity Provider
      * @param param the request object
      */
    deactivateIdentityProvider(param, options) {
        return this.api.deactivateIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Removes an IdP from your organization.
      * Delete an Identity Provider
      * @param param the request object
      */
    deleteIdentityProvider(param, options) {
        return this.api.deleteIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.
      * Delete a Signing Credential Key
      * @param param the request object
      */
    deleteIdentityProviderKey(param, options) {
        return this.api.deleteIdentityProviderKey(param.keyId, options).toPromise();
    }
    /**
      * Generates a new key pair and returns a Certificate Signing Request for it.
      * Generate a Certificate Signing Request
      * @param param the request object
      */
    generateCsrForIdentityProvider(param, options) {
        return this.api.generateCsrForIdentityProvider(param.idpId, param.metadata, options).toPromise();
    }
    /**
      * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
      * Generate a new Signing Credential Key
      * @param param the request object
      */
    generateIdentityProviderSigningKey(param, options) {
        return this.api.generateIdentityProviderSigningKey(param.idpId, param.validityYears, options).toPromise();
    }
    /**
      * Gets a specific Certificate Signing Request model by id
      * Retrieve a Certificate Signing Request
      * @param param the request object
      */
    getCsrForIdentityProvider(param, options) {
        return this.api.getCsrForIdentityProvider(param.idpId, param.csrId, options).toPromise();
    }
    /**
      * Fetches an IdP by `id`.
      * Retrieve an Identity Provider
      * @param param the request object
      */
    getIdentityProvider(param, options) {
        return this.api.getIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Fetches a linked IdP user by ID
      * Retrieve a User
      * @param param the request object
      */
    getIdentityProviderApplicationUser(param, options) {
        return this.api.getIdentityProviderApplicationUser(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Gets a specific IdP Key Credential by `kid`
      * Retrieve an Credential Key
      * @param param the request object
      */
    getIdentityProviderKey(param, options) {
        return this.api.getIdentityProviderKey(param.keyId, options).toPromise();
    }
    /**
      * Gets a specific IdP Key Credential by `kid`
      * Retrieve a Signing Credential Key
      * @param param the request object
      */
    getIdentityProviderSigningKey(param, options) {
        return this.api.getIdentityProviderSigningKey(param.idpId, param.keyId, options).toPromise();
    }
    /**
      * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
      * Link a User to a Social IdP
      * @param param the request object
      */
    linkUserToIdentityProvider(param, options) {
        return this.api.linkUserToIdentityProvider(param.idpId, param.userId, param.userIdentityProviderLinkRequest, options).toPromise();
    }
    /**
      * Enumerates Certificate Signing Requests for an IdP
      * List all Certificate Signing Requests
      * @param param the request object
      */
    listCsrsForIdentityProvider(param, options) {
        return this.api.listCsrsForIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Find all the users linked to an identity provider
      * List all Users
      * @param param the request object
      */
    listIdentityProviderApplicationUsers(param, options) {
        return this.api.listIdentityProviderApplicationUsers(param.idpId, options).toPromise();
    }
    /**
      * Enumerates IdP key credentials.
      * List all Credential Keys
      * @param param the request object
      */
    listIdentityProviderKeys(param = {}, options) {
        return this.api.listIdentityProviderKeys(param.after, param.limit, options).toPromise();
    }
    /**
      * Enumerates signing key credentials for an IdP
      * List all Signing Credential Keys
      * @param param the request object
      */
    listIdentityProviderSigningKeys(param, options) {
        return this.api.listIdentityProviderSigningKeys(param.idpId, options).toPromise();
    }
    /**
      * Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all Identity Providers
      * @param param the request object
      */
    listIdentityProviders(param = {}, options) {
        return this.api.listIdentityProviders(param.q, param.after, param.limit, param.type, options).toPromise();
    }
    /**
      * Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.
      * List all Tokens from a OIDC Identity Provider
      * @param param the request object
      */
    listSocialAuthTokens(param, options) {
        return this.api.listSocialAuthTokens(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
      * Publish a Certificate Signing Request
      * @param param the request object
      */
    publishCsrForIdentityProvider(param, options) {
        return this.api.publishCsrForIdentityProvider(param.idpId, param.csrId, param.body, options).toPromise();
    }
    /**
      * Revoke a Certificate Signing Request and delete the key pair from the IdP
      * Revoke a Certificate Signing Request
      * @param param the request object
      */
    revokeCsrForIdentityProvider(param, options) {
        return this.api.revokeCsrForIdentityProvider(param.idpId, param.csrId, options).toPromise();
    }
    /**
      * Removes the link between the Okta user and the IdP user.
      * Unlink a User from IdP
      * @param param the request object
      */
    unlinkUserFromIdentityProvider(param, options) {
        return this.api.unlinkUserFromIdentityProvider(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Updates the configuration for an IdP.
      * Replace an Identity Provider
      * @param param the request object
      */
    updateIdentityProvider(param, options) {
        return this.api.updateIdentityProvider(param.idpId, param.identityProvider, options).toPromise();
    }
}
exports.ObjectIdentityProviderApi = ObjectIdentityProviderApi;
const ObservableAPI_14 = require("./ObservableAPI");
class ObjectInlineHookApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableInlineHookApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates the Inline Hook matching the provided id
      * Activate an Inline Hook
      * @param param the request object
      */
    activateInlineHook(param, options) {
        return this.api.activateInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Success
      * Create an Inline Hook
      * @param param the request object
      */
    createInlineHook(param, options) {
        return this.api.createInlineHook(param.inlineHook, options).toPromise();
    }
    /**
      * Deactivates the Inline Hook matching the provided id
      * Deactivate an Inline Hook
      * @param param the request object
      */
    deactivateInlineHook(param, options) {
        return this.api.deactivateInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete an Inline Hook
      * @param param the request object
      */
    deleteInlineHook(param, options) {
        return this.api.deleteInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute an Inline Hook
      * @param param the request object
      */
    executeInlineHook(param, options) {
        return this.api.executeInlineHook(param.inlineHookId, param.payloadData, options).toPromise();
    }
    /**
      * Gets an inline hook by ID
      * Retrieve an Inline Hook
      * @param param the request object
      */
    getInlineHook(param, options) {
        return this.api.getInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Success
      * List all Inline Hooks
      * @param param the request object
      */
    listInlineHooks(param = {}, options) {
        return this.api.listInlineHooks(param.type, options).toPromise();
    }
    /**
      * Updates an inline hook by ID
      * Replace an Inline Hook
      * @param param the request object
      */
    updateInlineHook(param, options) {
        return this.api.updateInlineHook(param.inlineHookId, param.inlineHook, options).toPromise();
    }
}
exports.ObjectInlineHookApi = ObjectInlineHookApi;
const ObservableAPI_15 = require("./ObservableAPI");
class ObjectLinkedObjectApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableLinkedObjectApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Create a Linked Object Definition
      * @param param the request object
      */
    addLinkedObjectDefinition(param, options) {
        return this.api.addLinkedObjectDefinition(param.linkedObject, options).toPromise();
    }
    /**
      * Success
      * Delete a Linked Object Definition
      * @param param the request object
      */
    deleteLinkedObjectDefinition(param, options) {
        return this.api.deleteLinkedObjectDefinition(param.linkedObjectName, options).toPromise();
    }
    /**
      * Success
      * Retrieve a Linked Object Definition
      * @param param the request object
      */
    getLinkedObjectDefinition(param, options) {
        return this.api.getLinkedObjectDefinition(param.linkedObjectName, options).toPromise();
    }
    /**
      * Success
      * List all Linked Object Definitions
      * @param param the request object
      */
    listLinkedObjectDefinitions(param = {}, options) {
        return this.api.listLinkedObjectDefinitions(options).toPromise();
    }
}
exports.ObjectLinkedObjectApi = ObjectLinkedObjectApi;
const ObservableAPI_16 = require("./ObservableAPI");
class ObjectNetworkZoneApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableNetworkZoneApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activate Network Zone
      * Activate a Network Zone
      * @param param the request object
      */
    activateNetworkZone(param, options) {
        return this.api.activateNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Adds a new network zone to your Okta organization.
      * Create a Network Zone
      * @param param the request object
      */
    createNetworkZone(param, options) {
        return this.api.createNetworkZone(param.zone, options).toPromise();
    }
    /**
      * Deactivates a network zone.
      * Deactivate a Network Zone
      * @param param the request object
      */
    deactivateNetworkZone(param, options) {
        return this.api.deactivateNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Removes network zone.
      * Delete a Network Zone
      * @param param the request object
      */
    deleteNetworkZone(param, options) {
        return this.api.deleteNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Fetches a network zone from your Okta organization by `id`.
      * Retrieve a Network Zone
      * @param param the request object
      */
    getNetworkZone(param, options) {
        return this.api.getNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
      * List all Network Zones
      * @param param the request object
      */
    listNetworkZones(param = {}, options) {
        return this.api.listNetworkZones(param.after, param.limit, param.filter, options).toPromise();
    }
    /**
      * Updates a network zone in your organization.
      * Replace a Network Zone
      * @param param the request object
      */
    updateNetworkZone(param, options) {
        return this.api.updateNetworkZone(param.zoneId, param.zone, options).toPromise();
    }
}
exports.ObjectNetworkZoneApi = ObjectNetworkZoneApi;
const ObservableAPI_17 = require("./ObservableAPI");
class ObjectOrgSettingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableOrgSettingApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * A list of email addresses to be removed from the set of email addresses that are bounced.
      * Remove Emails from Email Provider Bounce List
      * @param param the request object
      */
    bulkRemoveEmailAddressBounces(param = {}, options) {
        return this.api.bulkRemoveEmailAddressBounces(param.BouncesRemoveListObj, options).toPromise();
    }
    /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
      * Extend Okta Support Access
      * @param param the request object
      */
    extendOktaSupport(param = {}, options) {
        return this.api.extendOktaSupport(options).toPromise();
    }
    /**
      * Gets Okta Communication Settings of your organization.
      * Retreive the Okta Communication Settings
      * @param param the request object
      */
    getOktaCommunicationSettings(param = {}, options) {
        return this.api.getOktaCommunicationSettings(options).toPromise();
    }
    /**
      * Gets Contact Types of your organization.
      * Retrieve the Org Contact Types
      * @param param the request object
      */
    getOrgContactTypes(param = {}, options) {
        return this.api.getOrgContactTypes(options).toPromise();
    }
    /**
      * Retrieves the URL of the User associated with the specified Contact Type.
      * Retrieve the User of the Contact Type
      * @param param the request object
      */
    getOrgContactUser(param, options) {
        return this.api.getOrgContactUser(param.contactType, options).toPromise();
    }
    /**
      * Gets Okta Support Settings of your organization.
      * Retrieve the Okta Support Settings
      * @param param the request object
      */
    getOrgOktaSupportSettings(param = {}, options) {
        return this.api.getOrgOktaSupportSettings(options).toPromise();
    }
    /**
      * Gets preferences of your organization.
      * Retrieve the Org Preferences
      * @param param the request object
      */
    getOrgPreferences(param = {}, options) {
        return this.api.getOrgPreferences(options).toPromise();
    }
    /**
      * Get settings of your organization.
      * Retrieve the Org Settings
      * @param param the request object
      */
    getOrgSettings(param = {}, options) {
        return this.api.getOrgSettings(options).toPromise();
    }
    /**
      * Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.
      * Grant Okta Support Access to your Org
      * @param param the request object
      */
    grantOktaSupport(param = {}, options) {
        return this.api.grantOktaSupport(options).toPromise();
    }
    /**
      * Hide the Okta UI footer for all end users of your organization.
      * Update the Preference to Hide the Okta Dashboard Footer
      * @param param the request object
      */
    hideOktaUIFooter(param = {}, options) {
        return this.api.hideOktaUIFooter(options).toPromise();
    }
    /**
      * Opts in all users of this org to Okta Communication emails.
      * Opt in all Users to Okta Communication emails
      * @param param the request object
      */
    optInUsersToOktaCommunicationEmails(param = {}, options) {
        return this.api.optInUsersToOktaCommunicationEmails(options).toPromise();
    }
    /**
      * Opts out all users of this org from Okta Communication emails.
      * Opt out all Users from Okta Communication emails
      * @param param the request object
      */
    optOutUsersFromOktaCommunicationEmails(param = {}, options) {
        return this.api.optOutUsersFromOktaCommunicationEmails(options).toPromise();
    }
    /**
      * Partial update settings of your organization.
      * Update the Org Settings
      * @param param the request object
      */
    partialUpdateOrgSetting(param = {}, options) {
        return this.api.partialUpdateOrgSetting(param.OrgSetting, options).toPromise();
    }
    /**
      * Revokes Okta Support access to your organization.
      * Revoke Okta Support Access
      * @param param the request object
      */
    revokeOktaSupport(param = {}, options) {
        return this.api.revokeOktaSupport(options).toPromise();
    }
    /**
      * Makes the Okta UI footer visible for all end users of your organization.
      * Update the Preference to Show the Okta Dashboard Footer
      * @param param the request object
      */
    showOktaUIFooter(param = {}, options) {
        return this.api.showOktaUIFooter(options).toPromise();
    }
    /**
      * Updates the User associated with the specified Contact Type.
      * Replace the User of the Contact Type
      * @param param the request object
      */
    updateOrgContactUser(param, options) {
        return this.api.updateOrgContactUser(param.contactType, param.orgContactUser, options).toPromise();
    }
    /**
      * Updates the logo for your organization.
      * Upload the Org Logo
      * @param param the request object
      */
    updateOrgLogo(param, options) {
        return this.api.updateOrgLogo(param.file, options).toPromise();
    }
    /**
      * Update settings of your organization.
      * Replace the Org Settings
      * @param param the request object
      */
    updateOrgSetting(param, options) {
        return this.api.updateOrgSetting(param.orgSetting, options).toPromise();
    }
}
exports.ObjectOrgSettingApi = ObjectOrgSettingApi;
const ObservableAPI_18 = require("./ObservableAPI");
class ObjectPolicyApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservablePolicyApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a policy.
      * Activate a Policy
      * @param param the request object
      */
    activatePolicy(param, options) {
        return this.api.activatePolicy(param.policyId, options).toPromise();
    }
    /**
      * Activates a policy rule.
      * Activate a Policy Rule
      * @param param the request object
      */
    activatePolicyRule(param, options) {
        return this.api.activatePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Clones an existing policy.
      * Clone an existing policy
      * @param param the request object
      */
    clonePolicy(param, options) {
        return this.api.clonePolicy(param.policyId, options).toPromise();
    }
    /**
      * Creates a policy.
      * Create a Policy
      * @param param the request object
      */
    createPolicy(param, options) {
        return this.api.createPolicy(param.policy, param.activate, options).toPromise();
    }
    /**
      * Creates a policy rule.
      * Create a Policy Rule
      * @param param the request object
      */
    createPolicyRule(param, options) {
        return this.api.createPolicyRule(param.policyId, param.policyRule, options).toPromise();
    }
    /**
      * Deactivates a policy.
      * Deactivate a Policy
      * @param param the request object
      */
    deactivatePolicy(param, options) {
        return this.api.deactivatePolicy(param.policyId, options).toPromise();
    }
    /**
      * Deactivates a policy rule.
      * Deactivate a Policy Rule
      * @param param the request object
      */
    deactivatePolicyRule(param, options) {
        return this.api.deactivatePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Removes a policy.
      * Delete a Policy
      * @param param the request object
      */
    deletePolicy(param, options) {
        return this.api.deletePolicy(param.policyId, options).toPromise();
    }
    /**
      * Removes a policy rule.
      * Delete a Policy Rule
      * @param param the request object
      */
    deletePolicyRule(param, options) {
        return this.api.deletePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Gets a policy.
      * Retrieve a Policy
      * @param param the request object
      */
    getPolicy(param, options) {
        return this.api.getPolicy(param.policyId, param.expand, options).toPromise();
    }
    /**
      * Gets a policy rule.
      * Retrieve a Policy Rule
      * @param param the request object
      */
    getPolicyRule(param, options) {
        return this.api.getPolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Gets all policies with the specified type.
      * List all Policies
      * @param param the request object
      */
    listPolicies(param, options) {
        return this.api.listPolicies(param.type, param.status, param.expand, options).toPromise();
    }
    /**
      * Enumerates all policy rules.
      * List all Policy Rules
      * @param param the request object
      */
    listPolicyRules(param, options) {
        return this.api.listPolicyRules(param.policyId, options).toPromise();
    }
    /**
      * Updates a policy.
      * Replace a Policy
      * @param param the request object
      */
    updatePolicy(param, options) {
        return this.api.updatePolicy(param.policyId, param.policy, options).toPromise();
    }
    /**
      * Updates a policy rule.
      * Replace a Policy Rule
      * @param param the request object
      */
    updatePolicyRule(param, options) {
        return this.api.updatePolicyRule(param.policyId, param.ruleId, param.policyRule, options).toPromise();
    }
}
exports.ObjectPolicyApi = ObjectPolicyApi;
const ObservableAPI_19 = require("./ObservableAPI");
class ObjectPrincipalRateLimitApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservablePrincipalRateLimitApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Adds a new Principal Rate Limit entity to your organization. In the current release, we only allow one Principal Rate Limit entity per org and principal.
      * Create a Principal Rate Limit
      * @param param the request object
      */
    createPrincipalRateLimitEntity(param, options) {
        return this.api.createPrincipalRateLimitEntity(param.entity, options).toPromise();
    }
    /**
      * Delete a Principal Rate Limit.
      * Delete a Principal Rate Limit
      * @param param the request object
      */
    deletePrincipalRateLimitEntity(param, options) {
        return this.api.deletePrincipalRateLimitEntity(param.principalRateLimitId, options).toPromise();
    }
    /**
      * Fetches a Principal Rate Limit entity by `principalRateLimitId`.
      * Retrieve a Principal Rate Limit
      * @param param the request object
      */
    getPrincipalRateLimitEntity(param, options) {
        return this.api.getPrincipalRateLimitEntity(param.principalRateLimitId, options).toPromise();
    }
    /**
      * Lists all Principal Rate Limit entities considering the provided parameters.
      * List all Principal Rate Limits
      * @param param the request object
      */
    listPrincipalRateLimitEntities(param = {}, options) {
        return this.api.listPrincipalRateLimitEntities(param.filter, param.after, param.limit, options).toPromise();
    }
    /**
      * Update a  Principal Rate Limit entity by `principalRateLimitId`.
      * Replace a Principal Rate Limit
      * @param param the request object
      */
    updatePrincipalRateLimitEntity(param, options) {
        return this.api.updatePrincipalRateLimitEntity(param.principalRateLimitId, param.entity, options).toPromise();
    }
}
exports.ObjectPrincipalRateLimitApi = ObjectPrincipalRateLimitApi;
const ObservableAPI_20 = require("./ObservableAPI");
class ObjectProfileMappingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservableProfileMappingApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Fetches a single Profile Mapping referenced by its ID.
      * Retrieve a Profile Mapping
      * @param param the request object
      */
    getProfileMapping(param, options) {
        return this.api.getProfileMapping(param.mappingId, options).toPromise();
    }
    /**
      * Enumerates Profile Mappings in your organization with pagination.
      * List all Profile Mappings
      * @param param the request object
      */
    listProfileMappings(param = {}, options) {
        return this.api.listProfileMappings(param.after, param.limit, param.sourceId, param.targetId, options).toPromise();
    }
    /**
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings.
      * Update a Profile Mapping
      * @param param the request object
      */
    updateProfileMapping(param, options) {
        return this.api.updateProfileMapping(param.mappingId, param.profileMapping, options).toPromise();
    }
}
exports.ObjectProfileMappingApi = ObjectProfileMappingApi;
const ObservableAPI_21 = require("./ObservableAPI");
class ObjectSchemaApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservableSchemaApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Fetches the Schema for an App User
      * Retrieve the default Application User Schema for an Application
      * @param param the request object
      */
    getApplicationUserSchema(param, options) {
        return this.api.getApplicationUserSchema(param.appInstanceId, options).toPromise();
    }
    /**
      * Fetches the group schema
      * Retrieve the default Group Schema
      * @param param the request object
      */
    getGroupSchema(param = {}, options) {
        return this.api.getGroupSchema(options).toPromise();
    }
    /**
      * Fetches the schema for a Schema Id.
      * Retrieve a User Schema
      * @param param the request object
      */
    getUserSchema(param, options) {
        return this.api.getUserSchema(param.schemaId, options).toPromise();
    }
    /**
      * Partial updates on the User Profile properties of the Application User Schema.
      * Update the default Application User Schema for an Application
      * @param param the request object
      */
    updateApplicationUserProfile(param, options) {
        return this.api.updateApplicationUserProfile(param.appInstanceId, param.body, options).toPromise();
    }
    /**
      * Updates, adds or removes one or more custom Group Profile properties in the schema
      * Update the default Group Schema
      * @param param the request object
      */
    updateGroupSchema(param = {}, options) {
        return this.api.updateGroupSchema(param.GroupSchema, options).toPromise();
    }
    /**
      * Partial updates on the User Profile properties of the user schema.
      * Update a User Schema
      * @param param the request object
      */
    updateUserProfile(param, options) {
        return this.api.updateUserProfile(param.schemaId, param.userSchema, options).toPromise();
    }
}
exports.ObjectSchemaApi = ObjectSchemaApi;
const ObservableAPI_22 = require("./ObservableAPI");
class ObjectSessionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableSessionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
      * Create a Session with Session Token
      * @param param the request object
      */
    createSession(param, options) {
        return this.api.createSession(param.createSessionRequest, options).toPromise();
    }
    /**
      * End a session.
      * Delete a Session
      * @param param the request object
      */
    endSession(param, options) {
        return this.api.endSession(param.sessionId, options).toPromise();
    }
    /**
      * Get details about a session.
      * Retrieve a Session
      * @param param the request object
      */
    getSession(param, options) {
        return this.api.getSession(param.sessionId, options).toPromise();
    }
    /**
      * Refresh a session.
      * Refresh a Session
      * @param param the request object
      */
    refreshSession(param, options) {
        return this.api.refreshSession(param.sessionId, options).toPromise();
    }
}
exports.ObjectSessionApi = ObjectSessionApi;
const ObservableAPI_23 = require("./ObservableAPI");
class ObjectSubscriptionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableSubscriptionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * When roleType Get subscriptions of a Role with a specific notification type. Else when roleId Get subscription of a Custom Role with a specific notification type.
      * List all Subscriptions of a Custom Role with a specific notification type
      * @param param the request object
      */
    getRoleSubscriptionByNotificationType(param, options) {
        return this.api.getRoleSubscriptionByNotificationType(param.roleTypeOrRoleId, param.notificationType, options).toPromise();
    }
    /**
      * Get the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions by type
      * @param param the request object
      */
    getUserSubscriptionByNotificationType(param, options) {
        return this.api.getUserSubscriptionByNotificationType(param.userId, param.notificationType, options).toPromise();
    }
    /**
      * When roleType List all subscriptions of a Role. Else when roleId List subscriptions of a Custom Role
      * List all Subscriptions of a Custom Role
      * @param param the request object
      */
    listRoleSubscriptions(param, options) {
        return this.api.listRoleSubscriptions(param.roleTypeOrRoleId, options).toPromise();
    }
    /**
      * List subscriptions of a User. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions
      * @param param the request object
      */
    listUserSubscriptions(param, options) {
        return this.api.listUserSubscriptions(param.userId, options).toPromise();
    }
    /**
      * When roleType Subscribes a Role to a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Subscribes a Custom Role to a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
      * Subscribe a Custom Role to a specific notification type
      * @param param the request object
      */
    subscribeRoleSubscriptionByNotificationType(param, options) {
        return this.api.subscribeRoleSubscriptionByNotificationType(param.roleTypeOrRoleId, param.notificationType, options).toPromise();
    }
    /**
      * Subscribes a User to a specific notification type. Only the current User can subscribe to a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Subscribe to a specific notification type
      * @param param the request object
      */
    subscribeUserSubscriptionByNotificationType(param, options) {
        return this.api.subscribeUserSubscriptionByNotificationType(param.userId, param.notificationType, options).toPromise();
    }
    /**
      * When roleType Unsubscribes a Role from a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Unsubscribes a Custom Role from a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
      * Unsubscribe a Custom Role from a specific notification type
      * @param param the request object
      */
    unsubscribeRoleSubscriptionByNotificationType(param, options) {
        return this.api.unsubscribeRoleSubscriptionByNotificationType(param.roleTypeOrRoleId, param.notificationType, options).toPromise();
    }
    /**
      * Unsubscribes a User from a specific notification type. Only the current User can unsubscribe from a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Unsubscribe from a specific notification type
      * @param param the request object
      */
    unsubscribeUserSubscriptionByNotificationType(param, options) {
        return this.api.unsubscribeUserSubscriptionByNotificationType(param.userId, param.notificationType, options).toPromise();
    }
}
exports.ObjectSubscriptionApi = ObjectSubscriptionApi;
const ObservableAPI_24 = require("./ObservableAPI");
class ObjectSystemLogApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableSystemLogApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * List all System Log Events
      * @param param the request object
      */
    getLogs(param = {}, options) {
        return this.api.getLogs(param.since, param.until, param.filter, param.q, param.limit, param.sortOrder, param.after, options).toPromise();
    }
}
exports.ObjectSystemLogApi = ObjectSystemLogApi;
const ObservableAPI_25 = require("./ObservableAPI");
class ObjectTemplateApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservableTemplateApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Adds a new custom SMS template to your organization.
      * Create an SMS Template
      * @param param the request object
      */
    createSmsTemplate(param, options) {
        return this.api.createSmsTemplate(param.smsTemplate, options).toPromise();
    }
    /**
      * Removes an SMS template.
      * Delete an SMS Template
      * @param param the request object
      */
    deleteSmsTemplate(param, options) {
        return this.api.deleteSmsTemplate(param.templateId, options).toPromise();
    }
    /**
      * Fetches a specific template by `id`
      * Retrieve an SMS Template
      * @param param the request object
      */
    getSmsTemplate(param, options) {
        return this.api.getSmsTemplate(param.templateId, options).toPromise();
    }
    /**
      * Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.
      * List all SMS Templates
      * @param param the request object
      */
    listSmsTemplates(param = {}, options) {
        return this.api.listSmsTemplates(param.templateType, options).toPromise();
    }
    /**
      * Updates only some of the SMS template properties:
      * Update an SMS Template
      * @param param the request object
      */
    partialUpdateSmsTemplate(param, options) {
        return this.api.partialUpdateSmsTemplate(param.templateId, param.smsTemplate, options).toPromise();
    }
    /**
      * Updates the SMS template.
      * Replace an SMS Template
      * @param param the request object
      */
    updateSmsTemplate(param, options) {
        return this.api.updateSmsTemplate(param.templateId, param.smsTemplate, options).toPromise();
    }
}
exports.ObjectTemplateApi = ObjectTemplateApi;
const ObservableAPI_26 = require("./ObservableAPI");
class ObjectThreatInsightApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservableThreatInsightApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Gets current ThreatInsight configuration
      * Retrieve the ThreatInsight Configuration
      * @param param the request object
      */
    getCurrentConfiguration(param = {}, options) {
        return this.api.getCurrentConfiguration(options).toPromise();
    }
    /**
      * Updates ThreatInsight configuration
      * Update the ThreatInsight Configuration
      * @param param the request object
      */
    updateConfiguration(param, options) {
        return this.api.updateConfiguration(param.threatInsightConfiguration, options).toPromise();
    }
}
exports.ObjectThreatInsightApi = ObjectThreatInsightApi;
const ObservableAPI_27 = require("./ObservableAPI");
class ObjectTrustedOriginApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_27.ObservableTrustedOriginApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Activate a Trusted Origin
      * @param param the request object
      */
    activateOrigin(param, options) {
        return this.api.activateOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Success
      * Create a Trusted Origin
      * @param param the request object
      */
    createOrigin(param, options) {
        return this.api.createOrigin(param.trustedOrigin, options).toPromise();
    }
    /**
      * Success
      * Deactivate a Trusted Origin
      * @param param the request object
      */
    deactivateOrigin(param, options) {
        return this.api.deactivateOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Success
      * Delete a Trusted Origin
      * @param param the request object
      */
    deleteOrigin(param, options) {
        return this.api.deleteOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Success
      * Retrieve a Trusted Origin
      * @param param the request object
      */
    getOrigin(param, options) {
        return this.api.getOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Success
      * List all Trusted Origins
      * @param param the request object
      */
    listOrigins(param = {}, options) {
        return this.api.listOrigins(param.q, param.filter, param.after, param.limit, options).toPromise();
    }
    /**
      * Success
      * Replace a Trusted Origin
      * @param param the request object
      */
    updateOrigin(param, options) {
        return this.api.updateOrigin(param.trustedOriginId, param.trustedOrigin, options).toPromise();
    }
}
exports.ObjectTrustedOriginApi = ObjectTrustedOriginApi;
const ObservableAPI_28 = require("./ObservableAPI");
class ObjectUserApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_28.ObservableUserApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
      * Activate a User
      * @param param the request object
      */
    activateUser(param, options) {
        return this.api.activateUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Assign all Apps as Target to Role
      * Assign all Apps as Target to Role
      * @param param the request object
      */
    addAllAppsAsTargetToRole(param, options) {
        return this.api.addAllAppsAsTargetToRole(param.userId, param.roleId, options).toPromise();
    }
    /**
      * Success
      * Assign an Application Target to Administrator Role
      * @param param the request object
      */
    addApplicationTargetToAdminRoleForUser(param, options) {
        return this.api.addApplicationTargetToAdminRoleForUser(param.userId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Add App Instance Target to App Administrator Role given to a User
      * Assign an Application Instance Target to an Application Administrator Role
      * @param param the request object
      */
    addApplicationTargetToAppAdminRoleForUser(param, options) {
        return this.api.addApplicationTargetToAppAdminRoleForUser(param.userId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Assign a Group Target to Role
      * Assign a Group Target to Role
      * @param param the request object
      */
    addGroupTargetToRole(param, options) {
        return this.api.addGroupTargetToRole(param.userId, param.roleId, param.groupId, options).toPromise();
    }
    /**
      * Assigns a role to a user.
      * Assign a Role
      * @param param the request object
      */
    assignRoleToUser(param, options) {
        return this.api.assignRoleToUser(param.userId, param.assignRoleRequest, param.disableNotifications, options).toPromise();
    }
    /**
      * Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
      * Change Password
      * @param param the request object
      */
    changePassword(param, options) {
        return this.api.changePassword(param.userId, param.changePasswordRequest, param.strict, options).toPromise();
    }
    /**
      * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
      * Change Recovery Question
      * @param param the request object
      */
    changeRecoveryQuestion(param, options) {
        return this.api.changeRecoveryQuestion(param.userId, param.userCredentials, options).toPromise();
    }
    /**
      * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Delete all User Sessions
      * @param param the request object
      */
    clearUserSessions(param, options) {
        return this.api.clearUserSessions(param.userId, param.oauthTokens, options).toPromise();
    }
    /**
      * Creates a new user in your Okta organization with or without credentials.
      * Create a User
      * @param param the request object
      */
    createUser(param, options) {
        return this.api.createUser(param.body, param.activate, param.provider, param.nextLogin, options).toPromise();
    }
    /**
      * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
      * Delete a User
      * @param param the request object
      */
    deactivateOrDeleteUser(param, options) {
        return this.api.deactivateOrDeleteUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
      * Deactivate a User
      * @param param the request object
      */
    deactivateUser(param, options) {
        return this.api.deactivateUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
      * Expire Password
      * @param param the request object
      */
    expirePassword(param, options) {
        return this.api.expirePassword(param.userId, options).toPromise();
    }
    /**
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response.
      * Expire Password and Set Temporary Password
      * @param param the request object
      */
    expirePasswordAndGetTemporaryPassword(param, options) {
        return this.api.expirePasswordAndGetTemporaryPassword(param.userId, options).toPromise();
    }
    /**
      * Initiate forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
      * Initiate Forgot Password
      * @param param the request object
      */
    forgotPassword(param, options) {
        return this.api.forgotPassword(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct.
      * Reset Password with Recovery Question
      * @param param the request object
      */
    forgotPasswordSetNewPassword(param, options) {
        return this.api.forgotPasswordSetNewPassword(param.userId, param.userCredentials, param.sendEmail, options).toPromise();
    }
    /**
      * Get linked objects for a user, relationshipName can be a primary or associated relationship name
      * List all Linked Objects
      * @param param the request object
      */
    getLinkedObjectsForUser(param, options) {
        return this.api.getLinkedObjectsForUser(param.userId, param.relationshipName, param.after, param.limit, options).toPromise();
    }
    /**
      * Gets a refresh token issued for the specified User and Client.
      * Retrieve a Refresh Token for a Client
      * @param param the request object
      */
    getRefreshTokenForUserAndClient(param, options) {
        return this.api.getRefreshTokenForUserAndClient(param.userId, param.clientId, param.tokenId, param.expand, param.limit, param.after, options).toPromise();
    }
    /**
      * Fetches a user from your Okta organization.
      * Retrieve a User
      * @param param the request object
      */
    getUser(param, options) {
        return this.api.getUser(param.userId, options).toPromise();
    }
    /**
      * Gets a grant for the specified user
      * Retrieve a User Grant
      * @param param the request object
      */
    getUserGrant(param, options) {
        return this.api.getUserGrant(param.userId, param.grantId, param.expand, options).toPromise();
    }
    /**
      * Gets role that is assigned to user.
      * Retrieve a Role
      * @param param the request object
      */
    getUserRole(param, options) {
        return this.api.getUserRole(param.userId, param.roleId, options).toPromise();
    }
    /**
      * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
      * List all Assigned Application Links
      * @param param the request object
      */
    listAppLinks(param, options) {
        return this.api.listAppLinks(param.userId, options).toPromise();
    }
    /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for Application Administrator Role
      * @param param the request object
      */
    listApplicationTargetsForApplicationAdministratorRoleForUser(param, options) {
        return this.api.listApplicationTargetsForApplicationAdministratorRoleForUser(param.userId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all roles assigned to a user.
      * List all Assigned Roles
      * @param param the request object
      */
    listAssignedRolesForUser(param, options) {
        return this.api.listAssignedRolesForUser(param.userId, param.expand, options).toPromise();
    }
    /**
      * Lists all grants for a specified user and client
      * List all Grants for a Client
      * @param param the request object
      */
    listGrantsForUserAndClient(param, options) {
        return this.api.listGrantsForUserAndClient(param.userId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Success
      * List all Group Targets for Role
      * @param param the request object
      */
    listGroupTargetsForRole(param, options) {
        return this.api.listGroupTargetsForRole(param.userId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all refresh tokens issued for the specified User and Client.
      * List all Refresh Tokens for a Client
      * @param param the request object
      */
    listRefreshTokensForUserAndClient(param, options) {
        return this.api.listRefreshTokensForUserAndClient(param.userId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all client resources for which the specified user has grants or tokens.
      * List all Clients
      * @param param the request object
      */
    listUserClients(param, options) {
        return this.api.listUserClients(param.userId, options).toPromise();
    }
    /**
      * Lists all grants for the specified user
      * List all User Grants
      * @param param the request object
      */
    listUserGrants(param, options) {
        return this.api.listUserGrants(param.userId, param.scopeId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Fetches the groups of which the user is a member.
      * List all Groups
      * @param param the request object
      */
    listUserGroups(param, options) {
        return this.api.listUserGroups(param.userId, options).toPromise();
    }
    /**
      * Lists the IdPs associated with the user.
      * List all Identity Providers
      * @param param the request object
      */
    listUserIdentityProviders(param, options) {
        return this.api.listUserIdentityProviders(param.userId, options).toPromise();
    }
    /**
      * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List all Users
      * @param param the request object
      */
    listUsers(param = {}, options) {
        return this.api.listUsers(param.after, param.q, param.limit, param.filter, param.search, param.sortBy, param.sortOrder, options).toPromise();
    }
    /**
      * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
      * Update a User
      * @param param the request object
      */
    partialUpdateUser(param, options) {
        return this.api.partialUpdateUser(param.userId, param.user, param.strict, options).toPromise();
    }
    /**
      * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
      * Reactivate a User
      * @param param the request object
      */
    reactivateUser(param, options) {
        return this.api.reactivateUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Remove App Instance Target to App Administrator Role given to a User
      * Unassign an Application Instance Target to Application Administrator Role
      * @param param the request object
      */
    removeApplicationTargetFromAdministratorRoleForUser(param, options) {
        return this.api.removeApplicationTargetFromAdministratorRoleForUser(param.userId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Success
      * Unassign an Application Target from Application Administrator Role
      * @param param the request object
      */
    removeApplicationTargetFromApplicationAdministratorRoleForUser(param, options) {
        return this.api.removeApplicationTargetFromApplicationAdministratorRoleForUser(param.userId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Unassign a Group Target from Role
      * Unassign a Group Target from Role
      * @param param the request object
      */
    removeGroupTargetFromRole(param, options) {
        return this.api.removeGroupTargetFromRole(param.userId, param.roleId, param.groupId, options).toPromise();
    }
    /**
      * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Delete a Linked Object
      * @param param the request object
      */
    removeLinkedObjectForUser(param, options) {
        return this.api.removeLinkedObjectForUser(param.userId, param.relationshipName, options).toPromise();
    }
    /**
      * Unassigns a role from a user.
      * Delete a Role
      * @param param the request object
      */
    removeRoleFromUser(param, options) {
        return this.api.removeRoleFromUser(param.userId, param.roleId, options).toPromise();
    }
    /**
      * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset all Factors
      * @param param the request object
      */
    resetFactors(param, options) {
        return this.api.resetFactors(param.userId, options).toPromise();
    }
    /**
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Reset Password
      * @param param the request object
      */
    resetPassword(param, options) {
        return this.api.resetPassword(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Revokes all grants for the specified user and client
      * Revoke all Grants for a Client
      * @param param the request object
      */
    revokeGrantsForUserAndClient(param, options) {
        return this.api.revokeGrantsForUserAndClient(param.userId, param.clientId, options).toPromise();
    }
    /**
      * Revokes the specified refresh token.
      * Revoke a Token for a Client
      * @param param the request object
      */
    revokeTokenForUserAndClient(param, options) {
        return this.api.revokeTokenForUserAndClient(param.userId, param.clientId, param.tokenId, options).toPromise();
    }
    /**
      * Revokes all refresh tokens issued for the specified User and Client.
      * Revoke all Refresh Tokens for a Client
      * @param param the request object
      */
    revokeTokensForUserAndClient(param, options) {
        return this.api.revokeTokensForUserAndClient(param.userId, param.clientId, options).toPromise();
    }
    /**
      * Revokes one grant for a specified user
      * Revoke a User Grant
      * @param param the request object
      */
    revokeUserGrant(param, options) {
        return this.api.revokeUserGrant(param.userId, param.grantId, options).toPromise();
    }
    /**
      * Revokes all grants for a specified user
      * Revoke all User Grants
      * @param param the request object
      */
    revokeUserGrants(param, options) {
        return this.api.revokeUserGrants(param.userId, options).toPromise();
    }
    /**
      * Sets a linked object for two users.
      * Create a Linked Object for two User
      * @param param the request object
      */
    setLinkedObjectForUser(param, options) {
        return this.api.setLinkedObjectForUser(param.associatedUserId, param.primaryRelationshipName, param.primaryUserId, options).toPromise();
    }
    /**
      * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
      * Suspend a User
      * @param param the request object
      */
    suspendUser(param, options) {
        return this.api.suspendUser(param.userId, options).toPromise();
    }
    /**
      * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
      * Unlock a User
      * @param param the request object
      */
    unlockUser(param, options) {
        return this.api.unlockUser(param.userId, options).toPromise();
    }
    /**
      * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a User
      * @param param the request object
      */
    unsuspendUser(param, options) {
        return this.api.unsuspendUser(param.userId, options).toPromise();
    }
    /**
      * Update a user's profile and/or credentials using strict-update semantics.
      * Replace a User
      * @param param the request object
      */
    updateUser(param, options) {
        return this.api.updateUser(param.userId, param.user, param.strict, options).toPromise();
    }
}
exports.ObjectUserApi = ObjectUserApi;
const ObservableAPI_29 = require("./ObservableAPI");
class ObjectUserFactorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_29.ObservableUserFactorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate a Factor
      * @param param the request object
      */
    activateFactor(param, options) {
        return this.api.activateFactor(param.userId, param.factorId, param.body, options).toPromise();
    }
    /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
      * Delete a Factor
      * @param param the request object
      */
    deleteFactor(param, options) {
        return this.api.deleteFactor(param.userId, param.factorId, param.removeEnrollmentRecovery, options).toPromise();
    }
    /**
      * Enrolls a user with a supported factor.
      * Enroll a Factor
      * @param param the request object
      */
    enrollFactor(param, options) {
        return this.api.enrollFactor(param.userId, param.body, param.updatePhone, param.templateId, param.tokenLifetimeSeconds, param.activate, options).toPromise();
    }
    /**
      * Fetches a factor for the specified user
      * Retrieve a Factor
      * @param param the request object
      */
    getFactor(param, options) {
        return this.api.getFactor(param.userId, param.factorId, options).toPromise();
    }
    /**
      * Polls factors verification transaction for status.
      * Retrieve a Factor Transaction Status
      * @param param the request object
      */
    getFactorTransactionStatus(param, options) {
        return this.api.getFactorTransactionStatus(param.userId, param.factorId, param.transactionId, options).toPromise();
    }
    /**
      * Enumerates all the enrolled factors for the specified user
      * List all Factors
      * @param param the request object
      */
    listFactors(param, options) {
        return this.api.listFactors(param.userId, options).toPromise();
    }
    /**
      * Enumerates all the supported factors that can be enrolled for the specified user
      * List all Supported Factors
      * @param param the request object
      */
    listSupportedFactors(param, options) {
        return this.api.listSupportedFactors(param.userId, options).toPromise();
    }
    /**
      * Enumerates all available security questions for a user's `question` factor
      * List all Supported Security Questions
      * @param param the request object
      */
    listSupportedSecurityQuestions(param, options) {
        return this.api.listSupportedSecurityQuestions(param.userId, options).toPromise();
    }
    /**
      * Verifies an OTP for a `token` or `token:hardware` factor
      * Verify an MFA Factor
      * @param param the request object
      */
    verifyFactor(param, options) {
        return this.api.verifyFactor(param.userId, param.factorId, param.templateId, param.tokenLifetimeSeconds, param.X_Forwarded_For, param.User_Agent, param.Accept_Language, param.body, options).toPromise();
    }
}
exports.ObjectUserFactorApi = ObjectUserFactorApi;
const ObservableAPI_30 = require("./ObservableAPI");
class ObjectUserTypeApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_30.ObservableUserTypeApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * Create a User Type
      * @param param the request object
      */
    createUserType(param, options) {
        return this.api.createUserType(param.userType, options).toPromise();
    }
    /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * Delete a User Type
      * @param param the request object
      */
    deleteUserType(param, options) {
        return this.api.deleteUserType(param.typeId, options).toPromise();
    }
    /**
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Retrieve a User Type
      * @param param the request object
      */
    getUserType(param, options) {
        return this.api.getUserType(param.typeId, options).toPromise();
    }
    /**
      * Fetches all User Types in your org
      * List all User Types
      * @param param the request object
      */
    listUserTypes(param = {}, options) {
        return this.api.listUserTypes(options).toPromise();
    }
    /**
      * Replace an existing User Type
      * Replace a User Type
      * @param param the request object
      */
    replaceUserType(param, options) {
        return this.api.replaceUserType(param.typeId, param.userType, options).toPromise();
    }
    /**
      * Updates an existing User Type
      * Update a User Type
      * @param param the request object
      */
    updateUserType(param, options) {
        return this.api.updateUserType(param.typeId, param.userType, options).toPromise();
    }
}
exports.ObjectUserTypeApi = ObjectUserTypeApi;
