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
exports.ObjectUserTypeApi = exports.ObjectUserFactorApi = exports.ObjectUserApi = exports.ObjectTrustedOriginApi = exports.ObjectThreatInsightApi = exports.ObjectTemplateApi = exports.ObjectSystemLogApi = exports.ObjectSubscriptionApi = exports.ObjectSessionApi = exports.ObjectSchemaApi = exports.ObjectRoleTargetApi = exports.ObjectRoleAssignmentApi = exports.ObjectRoleApi = exports.ObjectRiskProviderApi = exports.ObjectRiskEventApi = exports.ObjectResourceSetApi = exports.ObjectRateLimitSettingsApi = exports.ObjectPushProviderApi = exports.ObjectProfileMappingApi = exports.ObjectPrincipalRateLimitApi = exports.ObjectPolicyApi = exports.ObjectOrgSettingApi = exports.ObjectNetworkZoneApi = exports.ObjectLogStreamApi = exports.ObjectLinkedObjectApi = exports.ObjectInlineHookApi = exports.ObjectIdentitySourceApi = exports.ObjectIdentityProviderApi = exports.ObjectHookKeyApi = exports.ObjectGroupApi = exports.ObjectFeatureApi = exports.ObjectEventHookApi = exports.ObjectEmailDomainApi = exports.ObjectDeviceAssuranceApi = exports.ObjectDeviceApi = exports.ObjectCustomizationApi = exports.ObjectCustomDomainApi = exports.ObjectCAPTCHAApi = exports.ObjectBehaviorApi = exports.ObjectAuthorizationServerApi = exports.ObjectAuthenticatorApi = exports.ObjectAttackProtectionApi = exports.ObjectApplicationApi = exports.ObjectApiTokenApi = exports.ObjectAgentPoolsApi = void 0;
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
      * Retrieves Agent pool update from updateId
      * Retrieve an Agent Pool update by id
      * @param param the request object
      */
    getAgentPoolsUpdateInstance(param, options) {
        return this.api.getAgentPoolsUpdateInstance(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Retrieves the current state of the agent pool update instance settings
      * Retrieve an Agent Pool update's settings
      * @param param the request object
      */
    getAgentPoolsUpdateSettings(param, options) {
        return this.api.getAgentPoolsUpdateSettings(param.poolId, options).toPromise();
    }
    /**
      * Lists all agent pools with pagination support
      * List all Agent Pools
      * @param param the request object
      */
    listAgentPools(param = {}, options) {
        return this.api.listAgentPools(param.limitPerPoolType, param.poolType, param.after, options).toPromise();
    }
    /**
      * Lists all agent pool updates
      * List all Agent Pool updates
      * @param param the request object
      */
    listAgentPoolsUpdates(param, options) {
        return this.api.listAgentPoolsUpdates(param.poolId, param.scheduled, options).toPromise();
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
    /**
      * Updates an agent pool update settings
      * Update an Agent Pool update settings
      * @param param the request object
      */
    updateAgentPoolsUpdateSettings(param, options) {
        return this.api.updateAgentPoolsUpdateSettings(param.poolId, param.AgentPoolUpdateSetting, options).toPromise();
    }
}
exports.ObjectAgentPoolsApi = ObjectAgentPoolsApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectApiTokenApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableApiTokenApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the metadata for an active API token by id
      * Retrieve an API Token's Metadata
      * @param param the request object
      */
    getApiToken(param, options) {
        return this.api.getApiToken(param.apiTokenId, options).toPromise();
    }
    /**
      * Lists all the metadata of the active API tokens
      * List all API Token Metadata
      * @param param the request object
      */
    listApiTokens(param = {}, options) {
        return this.api.listApiTokens(param.after, param.limit, param.q, options).toPromise();
    }
    /**
      * Revokes an API token by `apiTokenId`
      * Revoke an API Token
      * @param param the request object
      */
    revokeApiToken(param, options) {
        return this.api.revokeApiToken(param.apiTokenId, options).toPromise();
    }
    /**
      * Revokes the API token provided in the Authorization header
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
      * Activates an inactive application
      * Activate an Application
      * @param param the request object
      */
    activateApplication(param, options) {
        return this.api.activateApplication(param.appId, options).toPromise();
    }
    /**
      * Activates the default Provisioning Connection for an application
      * Activate the default Provisioning Connection
      * @param param the request object
      */
    activateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.activateDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Assigns an application to a policy identified by `policyId`. If the application was previously assigned to another policy, this removes that assignment.
      * Assign an Application to a Policy
      * @param param the request object
      */
    assignApplicationPolicy(param, options) {
        return this.api.assignApplicationPolicy(param.appId, param.policyId, options).toPromise();
    }
    /**
      * Assigns a group to an application
      * Assign a Group
      * @param param the request object
      */
    assignGroupToApplication(param, options) {
        return this.api.assignGroupToApplication(param.appId, param.groupId, param.applicationGroupAssignment, options).toPromise();
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
      * Creates a new application to your Okta organization
      * Create an Application
      * @param param the request object
      */
    createApplication(param, options) {
        return this.api.createApplication(param.application, param.activate, param.OktaAccessGateway_Agent, options).toPromise();
    }
    /**
      * Deactivates an active application
      * Deactivate an Application
      * @param param the request object
      */
    deactivateApplication(param, options) {
        return this.api.deactivateApplication(param.appId, options).toPromise();
    }
    /**
      * Deactivates the default Provisioning Connection for an application
      * Deactivate the default Provisioning Connection for an Application
      * @param param the request object
      */
    deactivateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.deactivateDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Deletes an inactive application
      * Delete an Application
      * @param param the request object
      */
    deleteApplication(param, options) {
        return this.api.deleteApplication(param.appId, options).toPromise();
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
      * Generates a new key pair and returns the Certificate Signing Request for it
      * Generate a Certificate Signing Request
      * @param param the request object
      */
    generateCsrForApplication(param, options) {
        return this.api.generateCsrForApplication(param.appId, param.metadata, options).toPromise();
    }
    /**
      * Retrieves an application from your Okta organization by `id`
      * Retrieve an Application
      * @param param the request object
      */
    getApplication(param, options) {
        return this.api.getApplication(param.appId, param.expand, options).toPromise();
    }
    /**
      * Retrieves an application group assignment
      * Retrieve an Assigned Group
      * @param param the request object
      */
    getApplicationGroupAssignment(param, options) {
        return this.api.getApplicationGroupAssignment(param.appId, param.groupId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a specific application key credential by kid
      * Retrieve a Key Credential
      * @param param the request object
      */
    getApplicationKey(param, options) {
        return this.api.getApplicationKey(param.appId, param.keyId, options).toPromise();
    }
    /**
      * Retrieves a specific user assignment for application by `id`
      * Retrieve an Assigned User
      * @param param the request object
      */
    getApplicationUser(param, options) {
        return this.api.getApplicationUser(param.appId, param.userId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a certificate signing request for the app by `id`
      * Retrieve a Certificate Signing Request
      * @param param the request object
      */
    getCsrForApplication(param, options) {
        return this.api.getCsrForApplication(param.appId, param.csrId, options).toPromise();
    }
    /**
      * Retrieves the default Provisioning Connection for application
      * Retrieve the default Provisioning Connection
      * @param param the request object
      */
    getDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.getDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Retrieves a Feature object for an application
      * Retrieve a Feature
      * @param param the request object
      */
    getFeatureForApplication(param, options) {
        return this.api.getFeatureForApplication(param.appId, param.name, options).toPromise();
    }
    /**
      * Retrieves a token for the specified application
      * Retrieve an OAuth 2.0 Token
      * @param param the request object
      */
    getOAuth2TokenForApplication(param, options) {
        return this.api.getOAuth2TokenForApplication(param.appId, param.tokenId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a single scope consent grant for the application
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
      * Lists all group assignments for an application
      * List all Assigned Groups
      * @param param the request object
      */
    listApplicationGroupAssignments(param, options) {
        return this.api.listApplicationGroupAssignments(param.appId, param.q, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Lists all key credentials for an application
      * List all Key Credentials
      * @param param the request object
      */
    listApplicationKeys(param, options) {
        return this.api.listApplicationKeys(param.appId, options).toPromise();
    }
    /**
      * Lists all assigned [application users](#application-user-model) for an application
      * List all Assigned Users
      * @param param the request object
      */
    listApplicationUsers(param, options) {
        return this.api.listApplicationUsers(param.appId, param.q, param.query_scope, param.after, param.limit, param.filter, param.expand, options).toPromise();
    }
    /**
      * Lists all applications with pagination. A subset of apps can be returned that match a supported filter expression or query.
      * List all Applications
      * @param param the request object
      */
    listApplications(param = {}, options) {
        return this.api.listApplications(param.q, param.after, param.limit, param.filter, param.expand, param.includeNonDeleted, options).toPromise();
    }
    /**
      * Lists all Certificate Signing Requests for an application
      * List all Certificate Signing Requests
      * @param param the request object
      */
    listCsrsForApplication(param, options) {
        return this.api.listCsrsForApplication(param.appId, options).toPromise();
    }
    /**
      * Lists all features for an application
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
      * Publishes a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish a Certificate Signing Request
      * @param param the request object
      */
    publishCsrFromApplication(param, options) {
        return this.api.publishCsrFromApplication(param.appId, param.csrId, param.body, options).toPromise();
    }
    /**
      * Replaces an application
      * Replace an Application
      * @param param the request object
      */
    replaceApplication(param, options) {
        return this.api.replaceApplication(param.appId, param.application, options).toPromise();
    }
    /**
      * Revokes a certificate signing request and deletes the key pair from the application
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
      * Unassigns a group from an application
      * Unassign a Group
      * @param param the request object
      */
    unassignApplicationFromGroup(param, options) {
        return this.api.unassignApplicationFromGroup(param.appId, param.groupId, options).toPromise();
    }
    /**
      * Unassigns a user from an application
      * Unassign a User
      * @param param the request object
      */
    unassignUserFromApplication(param, options) {
        return this.api.unassignUserFromApplication(param.appId, param.userId, param.sendEmail, options).toPromise();
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
      * Updates the default provisioning connection for application
      * Update the default Provisioning Connection
      * @param param the request object
      */
    updateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.updateDefaultProvisioningConnectionForApplication(param.appId, param.ProvisioningConnectionRequest, param.activate, options).toPromise();
    }
    /**
      * Updates a Feature object for an application
      * Update a Feature
      * @param param the request object
      */
    updateFeatureForApplication(param, options) {
        return this.api.updateFeatureForApplication(param.appId, param.name, param.CapabilitiesObject, options).toPromise();
    }
    /**
      * Uploads a logo for the application. The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * Upload a Logo
      * @param param the request object
      */
    uploadApplicationLogo(param, options) {
        return this.api.uploadApplicationLogo(param.appId, param.file, options).toPromise();
    }
}
exports.ObjectApplicationApi = ObjectApplicationApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectAttackProtectionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableAttackProtectionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the User Lockout Settings for an org
      * Retrieve the User Lockout Settings
      * @param param the request object
      */
    getUserLockoutSettings(param = {}, options) {
        return this.api.getUserLockoutSettings(options).toPromise();
    }
    /**
      * Replaces the User Lockout Settings for an org
      * Replace the User Lockout Settings
      * @param param the request object
      */
    replaceUserLockoutSettings(param, options) {
        return this.api.replaceUserLockoutSettings(param.lockoutSettings, options).toPromise();
    }
}
exports.ObjectAttackProtectionApi = ObjectAttackProtectionApi;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectAuthenticatorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableAuthenticatorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an authenticator by `authenticatorId`
      * Activate an Authenticator
      * @param param the request object
      */
    activateAuthenticator(param, options) {
        return this.api.activateAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Creates an authenticator. You can use this operation as part of the \"Create a custom authenticator\" flow. See the [Custom authenticator integration guide](https://developer.okta.com/docs/guides/authenticators-custom-authenticator/android/main/).
      * Create an Authenticator
      * @param param the request object
      */
    createAuthenticator(param, options) {
        return this.api.createAuthenticator(param.authenticator, param.activate, options).toPromise();
    }
    /**
      * Deactivates an authenticator by `authenticatorId`
      * Deactivate an Authenticator
      * @param param the request object
      */
    deactivateAuthenticator(param, options) {
        return this.api.deactivateAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Retrieves an authenticator from your Okta organization by `authenticatorId`
      * Retrieve an Authenticator
      * @param param the request object
      */
    getAuthenticator(param, options) {
        return this.api.getAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Retrieves the well-known app authenticator configuration, which includes an app authenticator's settings, supported methods and various other configuration details
      * Retrieve the Well-Known App Authenticator Configuration
      * @param param the request object
      */
    getWellKnownAppAuthenticatorConfiguration(param, options) {
        return this.api.getWellKnownAppAuthenticatorConfiguration(param.oauthClientId, options).toPromise();
    }
    /**
      * Lists all authenticators
      * List all Authenticators
      * @param param the request object
      */
    listAuthenticators(param = {}, options) {
        return this.api.listAuthenticators(options).toPromise();
    }
    /**
      * Replaces an authenticator
      * Replace an Authenticator
      * @param param the request object
      */
    replaceAuthenticator(param, options) {
        return this.api.replaceAuthenticator(param.authenticatorId, param.authenticator, options).toPromise();
    }
}
exports.ObjectAuthenticatorApi = ObjectAuthenticatorApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectAuthorizationServerApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableAuthorizationServerApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an authorization server
      * Activate an Authorization Server
      * @param param the request object
      */
    activateAuthorizationServer(param, options) {
        return this.api.activateAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Activates an authorization server policy
      * Activate a Policy
      * @param param the request object
      */
    activateAuthorizationServerPolicy(param, options) {
        return this.api.activateAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Activates an authorization server policy rule
      * Activate a Policy Rule
      * @param param the request object
      */
    activateAuthorizationServerPolicyRule(param, options) {
        return this.api.activateAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Creates an authorization server
      * Create an Authorization Server
      * @param param the request object
      */
    createAuthorizationServer(param, options) {
        return this.api.createAuthorizationServer(param.authorizationServer, options).toPromise();
    }
    /**
      * Creates a policy
      * Create a Policy
      * @param param the request object
      */
    createAuthorizationServerPolicy(param, options) {
        return this.api.createAuthorizationServerPolicy(param.authServerId, param.policy, options).toPromise();
    }
    /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy
      * Create a Policy Rule
      * @param param the request object
      */
    createAuthorizationServerPolicyRule(param, options) {
        return this.api.createAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.policyRule, options).toPromise();
    }
    /**
      * Creates a custom token claim
      * Create a Custom Token Claim
      * @param param the request object
      */
    createOAuth2Claim(param, options) {
        return this.api.createOAuth2Claim(param.authServerId, param.oAuth2Claim, options).toPromise();
    }
    /**
      * Creates a custom token scope
      * Create a Custom Token Scope
      * @param param the request object
      */
    createOAuth2Scope(param, options) {
        return this.api.createOAuth2Scope(param.authServerId, param.oAuth2Scope, options).toPromise();
    }
    /**
      * Deactivates an authorization server
      * Deactivate an Authorization Server
      * @param param the request object
      */
    deactivateAuthorizationServer(param, options) {
        return this.api.deactivateAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Deactivates an authorization server policy
      * Deactivate a Policy
      * @param param the request object
      */
    deactivateAuthorizationServerPolicy(param, options) {
        return this.api.deactivateAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Deactivates an authorization server policy rule
      * Deactivate a Policy Rule
      * @param param the request object
      */
    deactivateAuthorizationServerPolicyRule(param, options) {
        return this.api.deactivateAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Deletes an authorization server
      * Delete an Authorization Server
      * @param param the request object
      */
    deleteAuthorizationServer(param, options) {
        return this.api.deleteAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Deletes a policy
      * Delete a Policy
      * @param param the request object
      */
    deleteAuthorizationServerPolicy(param, options) {
        return this.api.deleteAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
      * Delete a Policy Rule
      * @param param the request object
      */
    deleteAuthorizationServerPolicyRule(param, options) {
        return this.api.deleteAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.ruleId, options).toPromise();
    }
    /**
      * Deletes a custom token claim
      * Delete a Custom Token Claim
      * @param param the request object
      */
    deleteOAuth2Claim(param, options) {
        return this.api.deleteOAuth2Claim(param.authServerId, param.claimId, options).toPromise();
    }
    /**
      * Deletes a custom token scope
      * Delete a Custom Token Scope
      * @param param the request object
      */
    deleteOAuth2Scope(param, options) {
        return this.api.deleteOAuth2Scope(param.authServerId, param.scopeId, options).toPromise();
    }
    /**
      * Retrieves an authorization server
      * Retrieve an Authorization Server
      * @param param the request object
      */
    getAuthorizationServer(param, options) {
        return this.api.getAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param param the request object
      */
    getAuthorizationServerPolicy(param, options) {
        return this.api.getAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Retrieves a policy rule by `ruleId`
      * Retrieve a Policy Rule
      * @param param the request object
      */
    getAuthorizationServerPolicyRule(param, options) {
        return this.api.getAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.ruleId, options).toPromise();
    }
    /**
      * Retrieves a custom token claim
      * Retrieve a Custom Token Claim
      * @param param the request object
      */
    getOAuth2Claim(param, options) {
        return this.api.getOAuth2Claim(param.authServerId, param.claimId, options).toPromise();
    }
    /**
      * Retrieves a custom token scope
      * Retrieve a Custom Token Scope
      * @param param the request object
      */
    getOAuth2Scope(param, options) {
        return this.api.getOAuth2Scope(param.authServerId, param.scopeId, options).toPromise();
    }
    /**
      * Retrieves a refresh token for a client
      * Retrieve a Refresh Token for a Client
      * @param param the request object
      */
    getRefreshTokenForAuthorizationServerAndClient(param, options) {
        return this.api.getRefreshTokenForAuthorizationServerAndClient(param.authServerId, param.clientId, param.tokenId, param.expand, options).toPromise();
    }
    /**
      * Lists all credential keys
      * List all Credential Keys
      * @param param the request object
      */
    listAuthorizationServerKeys(param, options) {
        return this.api.listAuthorizationServerKeys(param.authServerId, options).toPromise();
    }
    /**
      * Lists all policies
      * List all Policies
      * @param param the request object
      */
    listAuthorizationServerPolicies(param, options) {
        return this.api.listAuthorizationServerPolicies(param.authServerId, options).toPromise();
    }
    /**
      * Lists all policy rules for the specified Custom Authorization Server and Policy
      * List all Policy Rules
      * @param param the request object
      */
    listAuthorizationServerPolicyRules(param, options) {
        return this.api.listAuthorizationServerPolicyRules(param.policyId, param.authServerId, options).toPromise();
    }
    /**
      * Lists all authorization servers
      * List all Authorization Servers
      * @param param the request object
      */
    listAuthorizationServers(param = {}, options) {
        return this.api.listAuthorizationServers(param.q, param.limit, param.after, options).toPromise();
    }
    /**
      * Lists all custom token claims
      * List all Custom Token Claims
      * @param param the request object
      */
    listOAuth2Claims(param, options) {
        return this.api.listOAuth2Claims(param.authServerId, options).toPromise();
    }
    /**
      * Lists all clients
      * List all Clients
      * @param param the request object
      */
    listOAuth2ClientsForAuthorizationServer(param, options) {
        return this.api.listOAuth2ClientsForAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Lists all custom token scopes
      * List all Custom Token Scopes
      * @param param the request object
      */
    listOAuth2Scopes(param, options) {
        return this.api.listOAuth2Scopes(param.authServerId, param.q, param.filter, param.cursor, param.limit, options).toPromise();
    }
    /**
      * Lists all refresh tokens for a client
      * List all Refresh Tokens for a Client
      * @param param the request object
      */
    listRefreshTokensForAuthorizationServerAndClient(param, options) {
        return this.api.listRefreshTokensForAuthorizationServerAndClient(param.authServerId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Replaces an authorization server
      * Replace an Authorization Server
      * @param param the request object
      */
    replaceAuthorizationServer(param, options) {
        return this.api.replaceAuthorizationServer(param.authServerId, param.authorizationServer, options).toPromise();
    }
    /**
      * Replaces a policy
      * Replace a Policy
      * @param param the request object
      */
    replaceAuthorizationServerPolicy(param, options) {
        return this.api.replaceAuthorizationServerPolicy(param.authServerId, param.policyId, param.policy, options).toPromise();
    }
    /**
      * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
      * Replace a Policy Rule
      * @param param the request object
      */
    replaceAuthorizationServerPolicyRule(param, options) {
        return this.api.replaceAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.ruleId, param.policyRule, options).toPromise();
    }
    /**
      * Replaces a custom token claim
      * Replace a Custom Token Claim
      * @param param the request object
      */
    replaceOAuth2Claim(param, options) {
        return this.api.replaceOAuth2Claim(param.authServerId, param.claimId, param.oAuth2Claim, options).toPromise();
    }
    /**
      * Replaces a custom token scope
      * Replace a Custom Token Scope
      * @param param the request object
      */
    replaceOAuth2Scope(param, options) {
        return this.api.replaceOAuth2Scope(param.authServerId, param.scopeId, param.oAuth2Scope, options).toPromise();
    }
    /**
      * Revokes a refresh token for a client
      * Revoke a Refresh Token for a Client
      * @param param the request object
      */
    revokeRefreshTokenForAuthorizationServerAndClient(param, options) {
        return this.api.revokeRefreshTokenForAuthorizationServerAndClient(param.authServerId, param.clientId, param.tokenId, options).toPromise();
    }
    /**
      * Revokes all refresh tokens for a client
      * Revoke all Refresh Tokens for a Client
      * @param param the request object
      */
    revokeRefreshTokensForAuthorizationServerAndClient(param, options) {
        return this.api.revokeRefreshTokensForAuthorizationServerAndClient(param.authServerId, param.clientId, options).toPromise();
    }
    /**
      * Rotates all credential keys
      * Rotate all Credential Keys
      * @param param the request object
      */
    rotateAuthorizationServerKeys(param, options) {
        return this.api.rotateAuthorizationServerKeys(param.authServerId, param.use, options).toPromise();
    }
}
exports.ObjectAuthorizationServerApi = ObjectAuthorizationServerApi;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectBehaviorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableBehaviorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a behavior detection rule
      * Activate a Behavior Detection Rule
      * @param param the request object
      */
    activateBehaviorDetectionRule(param, options) {
        return this.api.activateBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Creates a new behavior detection rule
      * Create a Behavior Detection Rule
      * @param param the request object
      */
    createBehaviorDetectionRule(param, options) {
        return this.api.createBehaviorDetectionRule(param.rule, options).toPromise();
    }
    /**
      * Deactivates a behavior detection rule
      * Deactivate a Behavior Detection Rule
      * @param param the request object
      */
    deactivateBehaviorDetectionRule(param, options) {
        return this.api.deactivateBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Deletes a Behavior Detection Rule by `behaviorId`
      * Delete a Behavior Detection Rule
      * @param param the request object
      */
    deleteBehaviorDetectionRule(param, options) {
        return this.api.deleteBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Retrieves a Behavior Detection Rule by `behaviorId`
      * Retrieve a Behavior Detection Rule
      * @param param the request object
      */
    getBehaviorDetectionRule(param, options) {
        return this.api.getBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Lists all behavior detection rules with pagination support
      * List all Behavior Detection Rules
      * @param param the request object
      */
    listBehaviorDetectionRules(param = {}, options) {
        return this.api.listBehaviorDetectionRules(options).toPromise();
    }
    /**
      * Replaces a Behavior Detection Rule by `behaviorId`
      * Replace a Behavior Detection Rule
      * @param param the request object
      */
    replaceBehaviorDetectionRule(param, options) {
        return this.api.replaceBehaviorDetectionRule(param.behaviorId, param.rule, options).toPromise();
    }
}
exports.ObjectBehaviorApi = ObjectBehaviorApi;
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectCAPTCHAApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableCAPTCHAApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new CAPTCHA instance. In the current release, we only allow one CAPTCHA instance per org.
      * Create a CAPTCHA instance
      * @param param the request object
      */
    createCaptchaInstance(param, options) {
        return this.api.createCaptchaInstance(param.instance, options).toPromise();
    }
    /**
      * Deletes a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete a CAPTCHA Instance
      * @param param the request object
      */
    deleteCaptchaInstance(param, options) {
        return this.api.deleteCaptchaInstance(param.captchaId, options).toPromise();
    }
    /**
      * Retrieves a CAPTCHA instance by `captchaId`
      * Retrieve a CAPTCHA Instance
      * @param param the request object
      */
    getCaptchaInstance(param, options) {
        return this.api.getCaptchaInstance(param.captchaId, options).toPromise();
    }
    /**
      * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      * @param param the request object
      */
    listCaptchaInstances(param = {}, options) {
        return this.api.listCaptchaInstances(options).toPromise();
    }
    /**
      * Replaces a CAPTCHA instance by `captchaId`
      * Replace a CAPTCHA instance
      * @param param the request object
      */
    replaceCaptchaInstance(param, options) {
        return this.api.replaceCaptchaInstance(param.captchaId, param.instance, options).toPromise();
    }
    /**
      * Partially updates a CAPTCHA instance by `captchaId`
      * Update a CAPTCHA instance
      * @param param the request object
      */
    updateCaptchaInstance(param, options) {
        return this.api.updateCaptchaInstance(param.captchaId, param.instance, options).toPromise();
    }
}
exports.ObjectCAPTCHAApi = ObjectCAPTCHAApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectCustomDomainApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableCustomDomainApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates your Custom Domain
      * Create a Custom Domain
      * @param param the request object
      */
    createCustomDomain(param, options) {
        return this.api.createCustomDomain(param.domain, options).toPromise();
    }
    /**
      * Deletes a Custom Domain by `id`
      * Delete a Custom Domain
      * @param param the request object
      */
    deleteCustomDomain(param, options) {
        return this.api.deleteCustomDomain(param.domainId, options).toPromise();
    }
    /**
      * Retrieves a Custom Domain by `id`
      * Retrieve a Custom Domain
      * @param param the request object
      */
    getCustomDomain(param, options) {
        return this.api.getCustomDomain(param.domainId, options).toPromise();
    }
    /**
      * Lists all verified Custom Domains for the org
      * List all Custom Domains
      * @param param the request object
      */
    listCustomDomains(param = {}, options) {
        return this.api.listCustomDomains(options).toPromise();
    }
    /**
      * Replaces a Custom Domain by `id`
      * Replace a Custom Domain's brandId
      * @param param the request object
      */
    replaceCustomDomain(param, options) {
        return this.api.replaceCustomDomain(param.domainId, param.UpdateDomain, options).toPromise();
    }
    /**
      * Creates or replaces the certificate for the custom domain
      * Upsert the Certificate
      * @param param the request object
      */
    upsertCertificate(param, options) {
        return this.api.upsertCertificate(param.domainId, param.certificate, options).toPromise();
    }
    /**
      * Verifies the Custom Domain by `id`
      * Verify a Custom Domain
      * @param param the request object
      */
    verifyDomain(param, options) {
        return this.api.verifyDomain(param.domainId, options).toPromise();
    }
}
exports.ObjectCustomDomainApi = ObjectCustomDomainApi;
const ObservableAPI_10 = require("./ObservableAPI");
class ObjectCustomizationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableCustomizationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates new brand in your org
      * Create a Brand
      * @param param the request object
      */
    createBrand(param = {}, options) {
        return this.api.createBrand(param.CreateBrandRequest, options).toPromise();
    }
    /**
      * Creates a new email customization
      * Create an Email Customization
      * @param param the request object
      */
    createEmailCustomization(param, options) {
        return this.api.createEmailCustomization(param.brandId, param.templateName, param.instance, options).toPromise();
    }
    /**
      * Deletes all customizations for an email template
      * Delete all Email Customizations
      * @param param the request object
      */
    deleteAllCustomizations(param, options) {
        return this.api.deleteAllCustomizations(param.brandId, param.templateName, options).toPromise();
    }
    /**
      * Deletes a brand by its unique identifier
      * Delete a brand
      * @param param the request object
      */
    deleteBrand(param, options) {
        return this.api.deleteBrand(param.brandId, options).toPromise();
    }
    /**
      * Deletes a Theme background image
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
      * Deletes the customized error page. As a result, the default error page appears in your live environment.
      * Delete the Customized Error Page
      * @param param the request object
      */
    deleteCustomizedErrorPage(param, options) {
        return this.api.deleteCustomizedErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
      * Delete the Customized Sign-in Page
      * @param param the request object
      */
    deleteCustomizedSignInPage(param, options) {
        return this.api.deleteCustomizedSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Deletes an email customization by its unique identifier
      * Delete an Email Customization
      * @param param the request object
      */
    deleteEmailCustomization(param, options) {
        return this.api.deleteEmailCustomization(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Deletes the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Delete the Preview Error Page
      * @param param the request object
      */
    deletePreviewErrorPage(param, options) {
        return this.api.deletePreviewErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Delete the Preview Sign-in Page
      * @param param the request object
      */
    deletePreviewSignInPage(param, options) {
        return this.api.deletePreviewSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves a brand by `brandId`
      * Retrieve a Brand
      * @param param the request object
      */
    getBrand(param, options) {
        return this.api.getBrand(param.brandId, options).toPromise();
    }
    /**
      * Retrieves a theme for a brand
      * Retrieve a Theme
      * @param param the request object
      */
    getBrandTheme(param, options) {
        return this.api.getBrandTheme(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Retrieves a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of an Email Customization
      * @param param the request object
      */
    getCustomizationPreview(param, options) {
        return this.api.getCustomizationPreview(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Retrieves the customized error page. The customized error page appears in your live environment.
      * Retrieve the Customized Error Page
      * @param param the request object
      */
    getCustomizedErrorPage(param, options) {
        return this.api.getCustomizedErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
      * Retrieve the Customized Sign-in Page
      * @param param the request object
      */
    getCustomizedSignInPage(param, options) {
        return this.api.getCustomizedSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the default error page. The default error page appears when no customized error page exists.
      * Retrieve the Default Error Page
      * @param param the request object
      */
    getDefaultErrorPage(param, options) {
        return this.api.getDefaultErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
      * Retrieve the Default Sign-in Page
      * @param param the request object
      */
    getDefaultSignInPage(param, options) {
        return this.api.getDefaultSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves an email customization by its unique identifier
      * Retrieve an Email Customization
      * @param param the request object
      */
    getEmailCustomization(param, options) {
        return this.api.getEmailCustomization(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Retrieves an email template's default content
      * Retrieve an Email Template Default Content
      * @param param the request object
      */
    getEmailDefaultContent(param, options) {
        return this.api.getEmailDefaultContent(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Retrieves a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of the Email Template Default Content
      * @param param the request object
      */
    getEmailDefaultPreview(param, options) {
        return this.api.getEmailDefaultPreview(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Retrieves an email template's settings
      * Retrieve the Email Template Settings
      * @param param the request object
      */
    getEmailSettings(param, options) {
        return this.api.getEmailSettings(param.brandId, param.templateName, options).toPromise();
    }
    /**
      * Retrieves the details of an email template by name
      * Retrieve an Email Template
      * @param param the request object
      */
    getEmailTemplate(param, options) {
        return this.api.getEmailTemplate(param.brandId, param.templateName, param.expand, options).toPromise();
    }
    /**
      * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Error Page Sub-Resources
      * @param param the request object
      */
    getErrorPage(param, options) {
        return this.api.getErrorPage(param.brandId, param.expand, options).toPromise();
    }
    /**
      * Retrieves the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Retrieve the Preview Error Page Preview
      * @param param the request object
      */
    getPreviewErrorPage(param, options) {
        return this.api.getPreviewErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Retrieve the Preview Sign-in Page Preview
      * @param param the request object
      */
    getPreviewSignInPage(param, options) {
        return this.api.getPreviewSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Sign-in Page Sub-Resources
      * @param param the request object
      */
    getSignInPage(param, options) {
        return this.api.getSignInPage(param.brandId, param.expand, options).toPromise();
    }
    /**
      * Retrieves the sign-out page settings
      * Retrieve the Sign-out Page Settings
      * @param param the request object
      */
    getSignOutPageSettings(param, options) {
        return this.api.getSignOutPageSettings(param.brandId, options).toPromise();
    }
    /**
      * Lists all sign-in widget versions supported by the current org
      * List all Sign-in Widget Versions
      * @param param the request object
      */
    listAllSignInWidgetVersions(param, options) {
        return this.api.listAllSignInWidgetVersions(param.brandId, options).toPromise();
    }
    /**
      * Lists all domains associated with a brand by `brandId`
      * List all Domains associated with a Brand
      * @param param the request object
      */
    listBrandDomains(param, options) {
        return this.api.listBrandDomains(param.brandId, options).toPromise();
    }
    /**
      * Lists all the themes in your brand
      * List all Themes
      * @param param the request object
      */
    listBrandThemes(param, options) {
        return this.api.listBrandThemes(param.brandId, options).toPromise();
    }
    /**
      * Lists all the brands in your org
      * List all Brands
      * @param param the request object
      */
    listBrands(param = {}, options) {
        return this.api.listBrands(options).toPromise();
    }
    /**
      * Lists all customizations of an email template
      * List all Email Customizations
      * @param param the request object
      */
    listEmailCustomizations(param, options) {
        return this.api.listEmailCustomizations(param.brandId, param.templateName, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all email templates
      * List all Email Templates
      * @param param the request object
      */
    listEmailTemplates(param, options) {
        return this.api.listEmailTemplates(param.brandId, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Replaces a brand by `brandId`
      * Replace a Brand
      * @param param the request object
      */
    replaceBrand(param, options) {
        return this.api.replaceBrand(param.brandId, param.brand, options).toPromise();
    }
    /**
      * Replaces a theme for a brand
      * Replace a Theme
      * @param param the request object
      */
    replaceBrandTheme(param, options) {
        return this.api.replaceBrandTheme(param.brandId, param.themeId, param.theme, options).toPromise();
    }
    /**
      * Replaces the customized error page. The customized error page appears in your live environment.
      * Replace the Customized Error Page
      * @param param the request object
      */
    replaceCustomizedErrorPage(param, options) {
        return this.api.replaceCustomizedErrorPage(param.brandId, param.ErrorPage, options).toPromise();
    }
    /**
      * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
      * Replace the Customized Sign-in Page
      * @param param the request object
      */
    replaceCustomizedSignInPage(param, options) {
        return this.api.replaceCustomizedSignInPage(param.brandId, param.SignInPage, options).toPromise();
    }
    /**
      * Replaces an existing email customization using the property values provided
      * Replace an Email Customization
      * @param param the request object
      */
    replaceEmailCustomization(param, options) {
        return this.api.replaceEmailCustomization(param.brandId, param.templateName, param.customizationId, param.instance, options).toPromise();
    }
    /**
      * Replaces an email template's settings
      * Replace the Email Template Settings
      * @param param the request object
      */
    replaceEmailSettings(param, options) {
        return this.api.replaceEmailSettings(param.brandId, param.templateName, param.EmailSettings, options).toPromise();
    }
    /**
      * Replaces the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Replace the Preview Error Page
      * @param param the request object
      */
    replacePreviewErrorPage(param, options) {
        return this.api.replacePreviewErrorPage(param.brandId, param.ErrorPage, options).toPromise();
    }
    /**
      * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Replace the Preview Sign-in Page
      * @param param the request object
      */
    replacePreviewSignInPage(param, options) {
        return this.api.replacePreviewSignInPage(param.brandId, param.SignInPage, options).toPromise();
    }
    /**
      * Replaces the sign-out page settings
      * Replace the Sign-out Page Settings
      * @param param the request object
      */
    replaceSignOutPageSettings(param, options) {
        return this.api.replaceSignOutPageSettings(param.brandId, param.HostedPage, options).toPromise();
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
      * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
      * Upload the Background Image
      * @param param the request object
      */
    uploadBrandThemeBackgroundImage(param, options) {
        return this.api.uploadBrandThemeBackgroundImage(param.brandId, param.themeId, param.file, options).toPromise();
    }
    /**
      * Uploads and replaces the favicon for the theme
      * Upload the Favicon
      * @param param the request object
      */
    uploadBrandThemeFavicon(param, options) {
        return this.api.uploadBrandThemeFavicon(param.brandId, param.themeId, param.file, options).toPromise();
    }
    /**
      * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Logo
      * @param param the request object
      */
    uploadBrandThemeLogo(param, options) {
        return this.api.uploadBrandThemeLogo(param.brandId, param.themeId, param.file, options).toPromise();
    }
}
exports.ObjectCustomizationApi = ObjectCustomizationApi;
const ObservableAPI_11 = require("./ObservableAPI");
class ObjectDeviceApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableDeviceApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a device by `deviceId`
      * Activate a Device
      * @param param the request object
      */
    activateDevice(param, options) {
        return this.api.activateDevice(param.deviceId, options).toPromise();
    }
    /**
      * Deactivates a device by `deviceId`
      * Deactivate a Device
      * @param param the request object
      */
    deactivateDevice(param, options) {
        return this.api.deactivateDevice(param.deviceId, options).toPromise();
    }
    /**
      * Deletes a device by `deviceId`
      * Delete a Device
      * @param param the request object
      */
    deleteDevice(param, options) {
        return this.api.deleteDevice(param.deviceId, options).toPromise();
    }
    /**
      * Retrieves a device by `deviceId`
      * Retrieve a Device
      * @param param the request object
      */
    getDevice(param, options) {
        return this.api.getDevice(param.deviceId, options).toPromise();
    }
    /**
      * Lists all devices with pagination support.  A subset of Devices can be returned that match a supported search criteria using the `search` query parameter.  Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request.  > **Note:** Listing devices with `search` should not be used as a part of any critical flows—such as authentication or updates—to prevent potential data loss. `search` results may not reflect the latest information, as this endpoint uses a search index which may not be up-to-date with recent updates to the object. <br> Don't use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss. <br> Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation equires [URL encoding](http://en.wikipedia.org/wiki/Percent-encoding). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
      * List all Devices
      * @param param the request object
      */
    listDevices(param = {}, options) {
        return this.api.listDevices(param.after, param.limit, param.search, options).toPromise();
    }
    /**
      * Suspends a device by `deviceId`
      * Suspend a Device
      * @param param the request object
      */
    suspendDevice(param, options) {
        return this.api.suspendDevice(param.deviceId, options).toPromise();
    }
    /**
      * Unsuspends a device by `deviceId`
      * Unsuspend a Device
      * @param param the request object
      */
    unsuspendDevice(param, options) {
        return this.api.unsuspendDevice(param.deviceId, options).toPromise();
    }
}
exports.ObjectDeviceApi = ObjectDeviceApi;
const ObservableAPI_12 = require("./ObservableAPI");
class ObjectDeviceAssuranceApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableDeviceAssuranceApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new Device Assurance Policy
      * Create a Device Assurance Policy
      * @param param the request object
      */
    createDeviceAssurancePolicy(param, options) {
        return this.api.createDeviceAssurancePolicy(param.deviceAssurance, options).toPromise();
    }
    /**
      * Deletes a Device Assurance Policy by `deviceAssuranceId`. If the Device Assurance Policy is currently being used in the org Authentication Policies, the delete will not be allowed.
      * Delete a Device Assurance Policy
      * @param param the request object
      */
    deleteDeviceAssurancePolicy(param, options) {
        return this.api.deleteDeviceAssurancePolicy(param.deviceAssuranceId, options).toPromise();
    }
    /**
      * Retrieves a Device Assurance Policy by `deviceAssuranceId`
      * Retrieve a Device Assurance Policy
      * @param param the request object
      */
    getDeviceAssurancePolicy(param, options) {
        return this.api.getDeviceAssurancePolicy(param.deviceAssuranceId, options).toPromise();
    }
    /**
      * Lists all device assurance policies
      * List all Device Assurance Policies
      * @param param the request object
      */
    listDeviceAssurancePolicies(param = {}, options) {
        return this.api.listDeviceAssurancePolicies(options).toPromise();
    }
    /**
      * Replaces a Device Assurance Policy by `deviceAssuranceId`
      * Replace a Device Assurance Policy
      * @param param the request object
      */
    replaceDeviceAssurancePolicy(param, options) {
        return this.api.replaceDeviceAssurancePolicy(param.deviceAssuranceId, param.deviceAssurance, options).toPromise();
    }
}
exports.ObjectDeviceAssuranceApi = ObjectDeviceAssuranceApi;
const ObservableAPI_13 = require("./ObservableAPI");
class ObjectEmailDomainApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableEmailDomainApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates an Email Domain in your org, along with associated username and sender display name
      * Create an Email Domain
      * @param param the request object
      */
    createEmailDomain(param, options) {
        return this.api.createEmailDomain(param.emailDomain, options).toPromise();
    }
    /**
      * Deletes an Email Domain by `emailDomainId`
      * Delete an Email Domain
      * @param param the request object
      */
    deleteEmailDomain(param, options) {
        return this.api.deleteEmailDomain(param.emailDomainId, options).toPromise();
    }
    /**
      * Retrieves an Email Domain by `emailDomainId`, along with associated username and sender display name
      * Retrieve a Email Domain
      * @param param the request object
      */
    getEmailDomain(param, options) {
        return this.api.getEmailDomain(param.emailDomainId, options).toPromise();
    }
    /**
      * Lists all brands linked to an email domain
      * List all brands linked to an email domain
      * @param param the request object
      */
    listEmailDomainBrands(param, options) {
        return this.api.listEmailDomainBrands(param.emailDomainId, options).toPromise();
    }
    /**
      * Lists all the Email Domains in your org, along with associated username and sender display name
      * List all Email Domains
      * @param param the request object
      */
    listEmailDomains(param = {}, options) {
        return this.api.listEmailDomains(options).toPromise();
    }
    /**
      * Replaces associated username and sender display name by `emailDomainId`
      * Replace an Email Domain
      * @param param the request object
      */
    replaceEmailDomain(param, options) {
        return this.api.replaceEmailDomain(param.emailDomainId, param.updateEmailDomain, options).toPromise();
    }
    /**
      * Verifies an Email Domain by `emailDomainId`
      * Verify an Email Domain
      * @param param the request object
      */
    verifyEmailDomain(param, options) {
        return this.api.verifyEmailDomain(param.emailDomainId, options).toPromise();
    }
}
exports.ObjectEmailDomainApi = ObjectEmailDomainApi;
const ObservableAPI_14 = require("./ObservableAPI");
class ObjectEventHookApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableEventHookApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an event hook
      * Activate an Event Hook
      * @param param the request object
      */
    activateEventHook(param, options) {
        return this.api.activateEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Creates an event hook
      * Create an Event Hook
      * @param param the request object
      */
    createEventHook(param, options) {
        return this.api.createEventHook(param.eventHook, options).toPromise();
    }
    /**
      * Deactivates an event hook
      * Deactivate an Event Hook
      * @param param the request object
      */
    deactivateEventHook(param, options) {
        return this.api.deactivateEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Deletes an event hook
      * Delete an Event Hook
      * @param param the request object
      */
    deleteEventHook(param, options) {
        return this.api.deleteEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Retrieves an event hook
      * Retrieve an Event Hook
      * @param param the request object
      */
    getEventHook(param, options) {
        return this.api.getEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Lists all event hooks
      * List all Event Hooks
      * @param param the request object
      */
    listEventHooks(param = {}, options) {
        return this.api.listEventHooks(options).toPromise();
    }
    /**
      * Replaces an event hook
      * Replace an Event Hook
      * @param param the request object
      */
    replaceEventHook(param, options) {
        return this.api.replaceEventHook(param.eventHookId, param.eventHook, options).toPromise();
    }
    /**
      * Verifies an event hook
      * Verify an Event Hook
      * @param param the request object
      */
    verifyEventHook(param, options) {
        return this.api.verifyEventHook(param.eventHookId, options).toPromise();
    }
}
exports.ObjectEventHookApi = ObjectEventHookApi;
const ObservableAPI_15 = require("./ObservableAPI");
class ObjectFeatureApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableFeatureApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves a feature
      * Retrieve a Feature
      * @param param the request object
      */
    getFeature(param, options) {
        return this.api.getFeature(param.featureId, options).toPromise();
    }
    /**
      * Lists all dependencies
      * List all Dependencies
      * @param param the request object
      */
    listFeatureDependencies(param, options) {
        return this.api.listFeatureDependencies(param.featureId, options).toPromise();
    }
    /**
      * Lists all dependents
      * List all Dependents
      * @param param the request object
      */
    listFeatureDependents(param, options) {
        return this.api.listFeatureDependents(param.featureId, options).toPromise();
    }
    /**
      * Lists all features
      * List all Features
      * @param param the request object
      */
    listFeatures(param = {}, options) {
        return this.api.listFeatures(options).toPromise();
    }
    /**
      * Updates a feature lifecycle
      * Update a Feature Lifecycle
      * @param param the request object
      */
    updateFeatureLifecycle(param, options) {
        return this.api.updateFeatureLifecycle(param.featureId, param.lifecycle, param.mode, options).toPromise();
    }
}
exports.ObjectFeatureApi = ObjectFeatureApi;
const ObservableAPI_16 = require("./ObservableAPI");
class ObjectGroupApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableGroupApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a specific group rule by `ruleId`
      * Activate a Group Rule
      * @param param the request object
      */
    activateGroupRule(param, options) {
        return this.api.activateGroupRule(param.ruleId, options).toPromise();
    }
    /**
      * Assigns a group owner
      * Assign a Group Owner
      * @param param the request object
      */
    assignGroupOwner(param, options) {
        return this.api.assignGroupOwner(param.groupId, param.GroupOwner, options).toPromise();
    }
    /**
      * Assigns a user to a group with 'OKTA_GROUP' type
      * Assign a User
      * @param param the request object
      */
    assignUserToGroup(param, options) {
        return this.api.assignUserToGroup(param.groupId, param.userId, options).toPromise();
    }
    /**
      * Creates a new group with `OKTA_GROUP` type
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
      * Deactivates a specific group rule by `ruleId`
      * Deactivate a Group Rule
      * @param param the request object
      */
    deactivateGroupRule(param, options) {
        return this.api.deactivateGroupRule(param.ruleId, options).toPromise();
    }
    /**
      * Deletes a group with `OKTA_GROUP` type
      * Delete a Group
      * @param param the request object
      */
    deleteGroup(param, options) {
        return this.api.deleteGroup(param.groupId, options).toPromise();
    }
    /**
      * Deletes a group owner from a specific group
      * Delete a Group Owner
      * @param param the request object
      */
    deleteGroupOwner(param, options) {
        return this.api.deleteGroupOwner(param.groupId, param.ownerId, options).toPromise();
    }
    /**
      * Deletes a specific group rule by `ruleId`
      * Delete a group Rule
      * @param param the request object
      */
    deleteGroupRule(param, options) {
        return this.api.deleteGroupRule(param.ruleId, param.removeUsers, options).toPromise();
    }
    /**
      * Retrieves a group by `groupId`
      * Retrieve a Group
      * @param param the request object
      */
    getGroup(param, options) {
        return this.api.getGroup(param.groupId, options).toPromise();
    }
    /**
      * Retrieves a specific group rule by `ruleId`
      * Retrieve a Group Rule
      * @param param the request object
      */
    getGroupRule(param, options) {
        return this.api.getGroupRule(param.ruleId, param.expand, options).toPromise();
    }
    /**
      * Lists all applications that are assigned to a group
      * List all Assigned Applications
      * @param param the request object
      */
    listAssignedApplicationsForGroup(param, options) {
        return this.api.listAssignedApplicationsForGroup(param.groupId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all owners for a specific group
      * List all Group Owners
      * @param param the request object
      */
    listGroupOwners(param, options) {
        return this.api.listGroupOwners(param.groupId, param.filter, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all group rules
      * List all Group Rules
      * @param param the request object
      */
    listGroupRules(param = {}, options) {
        return this.api.listGroupRules(param.limit, param.after, param.search, param.expand, options).toPromise();
    }
    /**
      * Lists all users that are a member of a group
      * List all Member Users
      * @param param the request object
      */
    listGroupUsers(param, options) {
        return this.api.listGroupUsers(param.groupId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all groups with pagination support. A subset of groups can be returned that match a supported filter expression or query.
      * List all Groups
      * @param param the request object
      */
    listGroups(param = {}, options) {
        return this.api.listGroups(param.q, param.filter, param.after, param.limit, param.expand, param.search, param.sortBy, param.sortOrder, options).toPromise();
    }
    /**
      * Replaces the profile for a group with `OKTA_GROUP` type
      * Replace a Group
      * @param param the request object
      */
    replaceGroup(param, options) {
        return this.api.replaceGroup(param.groupId, param.group, options).toPromise();
    }
    /**
      * Replaces a group rule. Only `INACTIVE` rules can be updated.
      * Replace a Group Rule
      * @param param the request object
      */
    replaceGroupRule(param, options) {
        return this.api.replaceGroupRule(param.ruleId, param.groupRule, options).toPromise();
    }
    /**
      * Unassigns a user from a group with 'OKTA_GROUP' type
      * Unassign a User
      * @param param the request object
      */
    unassignUserFromGroup(param, options) {
        return this.api.unassignUserFromGroup(param.groupId, param.userId, options).toPromise();
    }
}
exports.ObjectGroupApi = ObjectGroupApi;
const ObservableAPI_17 = require("./ObservableAPI");
class ObjectHookKeyApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableHookKeyApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a key
      * Create a key
      * @param param the request object
      */
    createHookKey(param, options) {
        return this.api.createHookKey(param.keyRequest, options).toPromise();
    }
    /**
      * Deletes a key by `hookKeyId`. Once deleted, the Hook Key is unrecoverable. As a safety precaution, unused keys are eligible for deletion.
      * Delete a key
      * @param param the request object
      */
    deleteHookKey(param, options) {
        return this.api.deleteHookKey(param.hookKeyId, options).toPromise();
    }
    /**
      * Retrieves a key by `hookKeyId`
      * Retrieve a key
      * @param param the request object
      */
    getHookKey(param, options) {
        return this.api.getHookKey(param.hookKeyId, options).toPromise();
    }
    /**
      * Retrieves a public key by `keyId`
      * Retrieve a public key
      * @param param the request object
      */
    getPublicKey(param, options) {
        return this.api.getPublicKey(param.keyId, options).toPromise();
    }
    /**
      * Lists all keys
      * List all keys
      * @param param the request object
      */
    listHookKeys(param = {}, options) {
        return this.api.listHookKeys(options).toPromise();
    }
    /**
      * Replaces a key by `hookKeyId`
      * Replace a key
      * @param param the request object
      */
    replaceHookKey(param, options) {
        return this.api.replaceHookKey(param.hookKeyId, param.keyRequest, options).toPromise();
    }
}
exports.ObjectHookKeyApi = ObjectHookKeyApi;
const ObservableAPI_18 = require("./ObservableAPI");
class ObjectIdentityProviderApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableIdentityProviderApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an inactive IdP
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
      * Creates a new identity provider integration
      * Create an Identity Provider
      * @param param the request object
      */
    createIdentityProvider(param, options) {
        return this.api.createIdentityProvider(param.identityProvider, options).toPromise();
    }
    /**
      * Creates a new X.509 certificate credential to the IdP key store.
      * Create an X.509 Certificate Public Key
      * @param param the request object
      */
    createIdentityProviderKey(param, options) {
        return this.api.createIdentityProviderKey(param.jsonWebKey, options).toPromise();
    }
    /**
      * Deactivates an active IdP
      * Deactivate an Identity Provider
      * @param param the request object
      */
    deactivateIdentityProvider(param, options) {
        return this.api.deactivateIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Deletes an identity provider integration by `idpId`
      * Delete an Identity Provider
      * @param param the request object
      */
    deleteIdentityProvider(param, options) {
        return this.api.deleteIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP
      * Delete a Signing Credential Key
      * @param param the request object
      */
    deleteIdentityProviderKey(param, options) {
        return this.api.deleteIdentityProviderKey(param.keyId, options).toPromise();
    }
    /**
      * Generates a new key pair and returns a Certificate Signing Request for it
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
      * Retrieves a specific Certificate Signing Request model by id
      * Retrieve a Certificate Signing Request
      * @param param the request object
      */
    getCsrForIdentityProvider(param, options) {
        return this.api.getCsrForIdentityProvider(param.idpId, param.csrId, options).toPromise();
    }
    /**
      * Retrieves an identity provider integration by `idpId`
      * Retrieve an Identity Provider
      * @param param the request object
      */
    getIdentityProvider(param, options) {
        return this.api.getIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Retrieves a linked IdP user by ID
      * Retrieve a User
      * @param param the request object
      */
    getIdentityProviderApplicationUser(param, options) {
        return this.api.getIdentityProviderApplicationUser(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Retrieves a specific IdP Key Credential by `kid`
      * Retrieve an Credential Key
      * @param param the request object
      */
    getIdentityProviderKey(param, options) {
        return this.api.getIdentityProviderKey(param.keyId, options).toPromise();
    }
    /**
      * Retrieves a specific IdP Key Credential by `kid`
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
      * Lists all Certificate Signing Requests for an IdP
      * List all Certificate Signing Requests
      * @param param the request object
      */
    listCsrsForIdentityProvider(param, options) {
        return this.api.listCsrsForIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Lists all users linked to the identity provider
      * List all Users
      * @param param the request object
      */
    listIdentityProviderApplicationUsers(param, options) {
        return this.api.listIdentityProviderApplicationUsers(param.idpId, options).toPromise();
    }
    /**
      * Lists all IdP key credentials
      * List all Credential Keys
      * @param param the request object
      */
    listIdentityProviderKeys(param = {}, options) {
        return this.api.listIdentityProviderKeys(param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all signing key credentials for an IdP
      * List all Signing Credential Keys
      * @param param the request object
      */
    listIdentityProviderSigningKeys(param, options) {
        return this.api.listIdentityProviderSigningKeys(param.idpId, options).toPromise();
    }
    /**
      * Lists all identity provider integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all Identity Providers
      * @param param the request object
      */
    listIdentityProviders(param = {}, options) {
        return this.api.listIdentityProviders(param.q, param.after, param.limit, param.type, options).toPromise();
    }
    /**
      * Lists the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth
      * List all Tokens from a OIDC Identity Provider
      * @param param the request object
      */
    listSocialAuthTokens(param, options) {
        return this.api.listSocialAuthTokens(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Publishes a certificate signing request with a signed X.509 certificate and adds it into the signing key credentials for the IdP
      * Publish a Certificate Signing Request
      * @param param the request object
      */
    publishCsrForIdentityProvider(param, options) {
        return this.api.publishCsrForIdentityProvider(param.idpId, param.csrId, param.body, options).toPromise();
    }
    /**
      * Replaces an identity provider integration by `idpId`
      * Replace an Identity Provider
      * @param param the request object
      */
    replaceIdentityProvider(param, options) {
        return this.api.replaceIdentityProvider(param.idpId, param.identityProvider, options).toPromise();
    }
    /**
      * Revokes a certificate signing request and deletes the key pair from the IdP
      * Revoke a Certificate Signing Request
      * @param param the request object
      */
    revokeCsrForIdentityProvider(param, options) {
        return this.api.revokeCsrForIdentityProvider(param.idpId, param.csrId, options).toPromise();
    }
    /**
      * Unlinks the link between the Okta user and the IdP user
      * Unlink a User from IdP
      * @param param the request object
      */
    unlinkUserFromIdentityProvider(param, options) {
        return this.api.unlinkUserFromIdentityProvider(param.idpId, param.userId, options).toPromise();
    }
}
exports.ObjectIdentityProviderApi = ObjectIdentityProviderApi;
const ObservableAPI_19 = require("./ObservableAPI");
class ObjectIdentitySourceApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableIdentitySourceApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates an identity source session for the given identity source instance
      * Create an Identity Source Session
      * @param param the request object
      */
    createIdentitySourceSession(param, options) {
        return this.api.createIdentitySourceSession(param.identitySourceId, options).toPromise();
    }
    /**
      * Deletes an identity source session for a given `identitySourceId` and `sessionId`
      * Delete an Identity Source Session
      * @param param the request object
      */
    deleteIdentitySourceSession(param, options) {
        return this.api.deleteIdentitySourceSession(param.identitySourceId, param.sessionId, options).toPromise();
    }
    /**
      * Retrieves an identity source session for a given identity source id and session id
      * Retrieve an Identity Source Session
      * @param param the request object
      */
    getIdentitySourceSession(param, options) {
        return this.api.getIdentitySourceSession(param.identitySourceId, param.sessionId, options).toPromise();
    }
    /**
      * Lists all identity source sessions for the given identity source instance
      * List all Identity Source Sessions
      * @param param the request object
      */
    listIdentitySourceSessions(param, options) {
        return this.api.listIdentitySourceSessions(param.identitySourceId, options).toPromise();
    }
    /**
      * Starts the import from the identity source described by the uploaded bulk operations
      * Start the import from the Identity Source
      * @param param the request object
      */
    startImportFromIdentitySource(param, options) {
        return this.api.startImportFromIdentitySource(param.identitySourceId, param.sessionId, options).toPromise();
    }
    /**
      * Uploads entities that need to be deleted in Okta from the identity source for the given session
      * Upload the data to be deleted in Okta
      * @param param the request object
      */
    uploadIdentitySourceDataForDelete(param, options) {
        return this.api.uploadIdentitySourceDataForDelete(param.identitySourceId, param.sessionId, param.BulkDeleteRequestBody, options).toPromise();
    }
    /**
      * Uploads entities that need to be upserted in Okta from the identity source for the given session
      * Upload the data to be upserted in Okta
      * @param param the request object
      */
    uploadIdentitySourceDataForUpsert(param, options) {
        return this.api.uploadIdentitySourceDataForUpsert(param.identitySourceId, param.sessionId, param.BulkUpsertRequestBody, options).toPromise();
    }
}
exports.ObjectIdentitySourceApi = ObjectIdentitySourceApi;
const ObservableAPI_20 = require("./ObservableAPI");
class ObjectInlineHookApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservableInlineHookApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates the inline hook by `inlineHookId`
      * Activate an Inline Hook
      * @param param the request object
      */
    activateInlineHook(param, options) {
        return this.api.activateInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Creates an inline hook
      * Create an Inline Hook
      * @param param the request object
      */
    createInlineHook(param, options) {
        return this.api.createInlineHook(param.inlineHook, options).toPromise();
    }
    /**
      * Deactivates the inline hook by `inlineHookId`
      * Deactivate an Inline Hook
      * @param param the request object
      */
    deactivateInlineHook(param, options) {
        return this.api.deactivateInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Deletes an inline hook by `inlineHookId`. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete an Inline Hook
      * @param param the request object
      */
    deleteInlineHook(param, options) {
        return this.api.deleteInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Executes the inline hook by `inlineHookId` using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute an Inline Hook
      * @param param the request object
      */
    executeInlineHook(param, options) {
        return this.api.executeInlineHook(param.inlineHookId, param.payloadData, options).toPromise();
    }
    /**
      * Retrieves an inline hook by `inlineHookId`
      * Retrieve an Inline Hook
      * @param param the request object
      */
    getInlineHook(param, options) {
        return this.api.getInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Lists all inline hooks
      * List all Inline Hooks
      * @param param the request object
      */
    listInlineHooks(param = {}, options) {
        return this.api.listInlineHooks(param.type, options).toPromise();
    }
    /**
      * Replaces an inline hook by `inlineHookId`
      * Replace an Inline Hook
      * @param param the request object
      */
    replaceInlineHook(param, options) {
        return this.api.replaceInlineHook(param.inlineHookId, param.inlineHook, options).toPromise();
    }
}
exports.ObjectInlineHookApi = ObjectInlineHookApi;
const ObservableAPI_21 = require("./ObservableAPI");
class ObjectLinkedObjectApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservableLinkedObjectApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a linked object definition
      * Create a Linked Object Definition
      * @param param the request object
      */
    createLinkedObjectDefinition(param, options) {
        return this.api.createLinkedObjectDefinition(param.linkedObject, options).toPromise();
    }
    /**
      * Deletes a linked object definition
      * Delete a Linked Object Definition
      * @param param the request object
      */
    deleteLinkedObjectDefinition(param, options) {
        return this.api.deleteLinkedObjectDefinition(param.linkedObjectName, options).toPromise();
    }
    /**
      * Retrieves a linked object definition
      * Retrieve a Linked Object Definition
      * @param param the request object
      */
    getLinkedObjectDefinition(param, options) {
        return this.api.getLinkedObjectDefinition(param.linkedObjectName, options).toPromise();
    }
    /**
      * Lists all linked object definitions
      * List all Linked Object Definitions
      * @param param the request object
      */
    listLinkedObjectDefinitions(param = {}, options) {
        return this.api.listLinkedObjectDefinitions(options).toPromise();
    }
}
exports.ObjectLinkedObjectApi = ObjectLinkedObjectApi;
const ObservableAPI_22 = require("./ObservableAPI");
class ObjectLogStreamApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableLogStreamApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a log stream by `logStreamId`
      * Activate a Log Stream
      * @param param the request object
      */
    activateLogStream(param, options) {
        return this.api.activateLogStream(param.logStreamId, options).toPromise();
    }
    /**
      * Creates a new log stream
      * Create a Log Stream
      * @param param the request object
      */
    createLogStream(param, options) {
        return this.api.createLogStream(param.instance, options).toPromise();
    }
    /**
      * Deactivates a log stream by `logStreamId`
      * Deactivate a Log Stream
      * @param param the request object
      */
    deactivateLogStream(param, options) {
        return this.api.deactivateLogStream(param.logStreamId, options).toPromise();
    }
    /**
      * Deletes a log stream by `logStreamId`
      * Delete a Log Stream
      * @param param the request object
      */
    deleteLogStream(param, options) {
        return this.api.deleteLogStream(param.logStreamId, options).toPromise();
    }
    /**
      * Retrieves a log stream by `logStreamId`
      * Retrieve a Log Stream
      * @param param the request object
      */
    getLogStream(param, options) {
        return this.api.getLogStream(param.logStreamId, options).toPromise();
    }
    /**
      * Lists all log streams. You can request a paginated list or a subset of Log Streams that match a supported filter expression.
      * List all Log Streams
      * @param param the request object
      */
    listLogStreams(param = {}, options) {
        return this.api.listLogStreams(param.after, param.limit, param.filter, options).toPromise();
    }
    /**
      * Replaces a log stream by `logStreamId`
      * Replace a Log Stream
      * @param param the request object
      */
    replaceLogStream(param, options) {
        return this.api.replaceLogStream(param.logStreamId, param.instance, options).toPromise();
    }
}
exports.ObjectLogStreamApi = ObjectLogStreamApi;
const ObservableAPI_23 = require("./ObservableAPI");
class ObjectNetworkZoneApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableNetworkZoneApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a network zone by `zoneId`
      * Activate a Network Zone
      * @param param the request object
      */
    activateNetworkZone(param, options) {
        return this.api.activateNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Creates a new network zone. * At least one of either the `gateways` attribute or `proxies` attribute must be defined when creating a Network Zone. * At least one of the following attributes must be defined: `proxyType`, `locations`, or `asns`.
      * Create a Network Zone
      * @param param the request object
      */
    createNetworkZone(param, options) {
        return this.api.createNetworkZone(param.zone, options).toPromise();
    }
    /**
      * Deactivates a network zone by `zoneId`
      * Deactivate a Network Zone
      * @param param the request object
      */
    deactivateNetworkZone(param, options) {
        return this.api.deactivateNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Deletes network zone by `zoneId`
      * Delete a Network Zone
      * @param param the request object
      */
    deleteNetworkZone(param, options) {
        return this.api.deleteNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Retrieves a network zone by `zoneId`
      * Retrieve a Network Zone
      * @param param the request object
      */
    getNetworkZone(param, options) {
        return this.api.getNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Lists all network zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id` and `usage` properties. See [Filtering](https://developer.okta.com/docs/reference/core-okta-api/#filter) for more information on the expressions that are used in filtering.
      * List all Network Zones
      * @param param the request object
      */
    listNetworkZones(param = {}, options) {
        return this.api.listNetworkZones(param.after, param.limit, param.filter, options).toPromise();
    }
    /**
      * Replaces a network zone by `zoneId`. The replaced network zone type must be the same as the existing type. You may replace the usage (`POLICY`, `BLOCKLIST`) of a network zone by updating the `usage` attribute.
      * Replace a Network Zone
      * @param param the request object
      */
    replaceNetworkZone(param, options) {
        return this.api.replaceNetworkZone(param.zoneId, param.zone, options).toPromise();
    }
}
exports.ObjectNetworkZoneApi = ObjectNetworkZoneApi;
const ObservableAPI_24 = require("./ObservableAPI");
class ObjectOrgSettingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableOrgSettingApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Removes a list of email addresses to be removed from the set of email addresses that are bounced
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
      * Retrieves Okta Communication Settings of your organization
      * Retrieve the Okta Communication Settings
      * @param param the request object
      */
    getOktaCommunicationSettings(param = {}, options) {
        return this.api.getOktaCommunicationSettings(options).toPromise();
    }
    /**
      * Retrieves Contact Types of your organization
      * Retrieve the Org Contact Types
      * @param param the request object
      */
    getOrgContactTypes(param = {}, options) {
        return this.api.getOrgContactTypes(options).toPromise();
    }
    /**
      * Retrieves the URL of the User associated with the specified Contact Type
      * Retrieve the User of the Contact Type
      * @param param the request object
      */
    getOrgContactUser(param, options) {
        return this.api.getOrgContactUser(param.contactType, options).toPromise();
    }
    /**
      * Retrieves Okta Support Settings of your organization
      * Retrieve the Okta Support Settings
      * @param param the request object
      */
    getOrgOktaSupportSettings(param = {}, options) {
        return this.api.getOrgOktaSupportSettings(options).toPromise();
    }
    /**
      * Retrieves preferences of your organization
      * Retrieve the Org Preferences
      * @param param the request object
      */
    getOrgPreferences(param = {}, options) {
        return this.api.getOrgPreferences(options).toPromise();
    }
    /**
      * Retrieves the org settings
      * Retrieve the Org Settings
      * @param param the request object
      */
    getOrgSettings(param = {}, options) {
        return this.api.getOrgSettings(options).toPromise();
    }
    /**
      * Retrieves the well-known org metadata, which includes the id, configured custom domains, authentication pipeline, and various other org settings
      * Retrieve the Well-Known Org Metadata
      * @param param the request object
      */
    getWellknownOrgMetadata(param = {}, options) {
        return this.api.getWellknownOrgMetadata(options).toPromise();
    }
    /**
      * Grants Okta Support temporary access your org as an administrator for eight hours
      * Grant Okta Support Access to your Org
      * @param param the request object
      */
    grantOktaSupport(param = {}, options) {
        return this.api.grantOktaSupport(options).toPromise();
    }
    /**
      * Opts in all users of this org to Okta Communication emails
      * Opt in all Users to Okta Communication emails
      * @param param the request object
      */
    optInUsersToOktaCommunicationEmails(param = {}, options) {
        return this.api.optInUsersToOktaCommunicationEmails(options).toPromise();
    }
    /**
      * Opts out all users of this org from Okta Communication emails
      * Opt out all Users from Okta Communication emails
      * @param param the request object
      */
    optOutUsersFromOktaCommunicationEmails(param = {}, options) {
        return this.api.optOutUsersFromOktaCommunicationEmails(options).toPromise();
    }
    /**
      * Replaces the User associated with the specified Contact Type
      * Replace the User of the Contact Type
      * @param param the request object
      */
    replaceOrgContactUser(param, options) {
        return this.api.replaceOrgContactUser(param.contactType, param.orgContactUser, options).toPromise();
    }
    /**
      * Replaces the settings of your organization
      * Replace the Org Settings
      * @param param the request object
      */
    replaceOrgSettings(param, options) {
        return this.api.replaceOrgSettings(param.orgSetting, options).toPromise();
    }
    /**
      * Revokes Okta Support access to your organization
      * Revoke Okta Support Access
      * @param param the request object
      */
    revokeOktaSupport(param = {}, options) {
        return this.api.revokeOktaSupport(options).toPromise();
    }
    /**
      * Updates the preference hide the Okta UI footer for all end users of your organization
      * Update the Preference to Hide the Okta Dashboard Footer
      * @param param the request object
      */
    updateOrgHideOktaUIFooter(param = {}, options) {
        return this.api.updateOrgHideOktaUIFooter(options).toPromise();
    }
    /**
      * Partially updates the org settings depending on provided fields
      * Update the Org Settings
      * @param param the request object
      */
    updateOrgSettings(param = {}, options) {
        return this.api.updateOrgSettings(param.OrgSetting, options).toPromise();
    }
    /**
      * Updates the preference to show the Okta UI footer for all end users of your organization
      * Update the Preference to Show the Okta Dashboard Footer
      * @param param the request object
      */
    updateOrgShowOktaUIFooter(param = {}, options) {
        return this.api.updateOrgShowOktaUIFooter(options).toPromise();
    }
    /**
      * Uploads and replaces the logo for your organization. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Org Logo
      * @param param the request object
      */
    uploadOrgLogo(param, options) {
        return this.api.uploadOrgLogo(param.file, options).toPromise();
    }
}
exports.ObjectOrgSettingApi = ObjectOrgSettingApi;
const ObservableAPI_25 = require("./ObservableAPI");
class ObjectPolicyApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservablePolicyApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a policy
      * Activate a Policy
      * @param param the request object
      */
    activatePolicy(param, options) {
        return this.api.activatePolicy(param.policyId, options).toPromise();
    }
    /**
      * Activates a policy rule
      * Activate a Policy Rule
      * @param param the request object
      */
    activatePolicyRule(param, options) {
        return this.api.activatePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Clones an existing policy
      * Clone an existing policy
      * @param param the request object
      */
    clonePolicy(param, options) {
        return this.api.clonePolicy(param.policyId, options).toPromise();
    }
    /**
      * Creates a policy
      * Create a Policy
      * @param param the request object
      */
    createPolicy(param, options) {
        return this.api.createPolicy(param.policy, param.activate, options).toPromise();
    }
    /**
      * Creates a policy rule
      * Create a Policy Rule
      * @param param the request object
      */
    createPolicyRule(param, options) {
        return this.api.createPolicyRule(param.policyId, param.policyRule, options).toPromise();
    }
    /**
      * Deactivates a policy
      * Deactivate a Policy
      * @param param the request object
      */
    deactivatePolicy(param, options) {
        return this.api.deactivatePolicy(param.policyId, options).toPromise();
    }
    /**
      * Deactivates a policy rule
      * Deactivate a Policy Rule
      * @param param the request object
      */
    deactivatePolicyRule(param, options) {
        return this.api.deactivatePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Deletes a policy
      * Delete a Policy
      * @param param the request object
      */
    deletePolicy(param, options) {
        return this.api.deletePolicy(param.policyId, options).toPromise();
    }
    /**
      * Deletes a policy rule
      * Delete a Policy Rule
      * @param param the request object
      */
    deletePolicyRule(param, options) {
        return this.api.deletePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param param the request object
      */
    getPolicy(param, options) {
        return this.api.getPolicy(param.policyId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a policy rule
      * Retrieve a Policy Rule
      * @param param the request object
      */
    getPolicyRule(param, options) {
        return this.api.getPolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Lists all policies with the specified type
      * List all Policies
      * @param param the request object
      */
    listPolicies(param, options) {
        return this.api.listPolicies(param.type, param.status, param.expand, options).toPromise();
    }
    /**
      * Lists all applications mapped to a policy identified by `policyId`
      * List all Applications mapped to a Policy
      * @param param the request object
      */
    listPolicyApps(param, options) {
        return this.api.listPolicyApps(param.policyId, options).toPromise();
    }
    /**
      * Lists all policy rules
      * List all Policy Rules
      * @param param the request object
      */
    listPolicyRules(param, options) {
        return this.api.listPolicyRules(param.policyId, options).toPromise();
    }
    /**
      * Replaces a policy
      * Replace a Policy
      * @param param the request object
      */
    replacePolicy(param, options) {
        return this.api.replacePolicy(param.policyId, param.policy, options).toPromise();
    }
    /**
      * Replaces a policy rules
      * Replace a Policy Rule
      * @param param the request object
      */
    replacePolicyRule(param, options) {
        return this.api.replacePolicyRule(param.policyId, param.ruleId, param.policyRule, options).toPromise();
    }
}
exports.ObjectPolicyApi = ObjectPolicyApi;
const ObservableAPI_26 = require("./ObservableAPI");
class ObjectPrincipalRateLimitApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservablePrincipalRateLimitApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new Principal Rate Limit entity. In the current release, we only allow one Principal Rate Limit entity per org and principal.
      * Create a Principal Rate Limit
      * @param param the request object
      */
    createPrincipalRateLimitEntity(param, options) {
        return this.api.createPrincipalRateLimitEntity(param.entity, options).toPromise();
    }
    /**
      * Retrieves a Principal Rate Limit entity by `principalRateLimitId`
      * Retrieve a Principal Rate Limit
      * @param param the request object
      */
    getPrincipalRateLimitEntity(param, options) {
        return this.api.getPrincipalRateLimitEntity(param.principalRateLimitId, options).toPromise();
    }
    /**
      * Lists all Principal Rate Limit entities considering the provided parameters
      * List all Principal Rate Limits
      * @param param the request object
      */
    listPrincipalRateLimitEntities(param = {}, options) {
        return this.api.listPrincipalRateLimitEntities(param.filter, param.after, param.limit, options).toPromise();
    }
    /**
      * Replaces a principal rate limit entity by `principalRateLimitId`
      * Replace a Principal Rate Limit
      * @param param the request object
      */
    replacePrincipalRateLimitEntity(param, options) {
        return this.api.replacePrincipalRateLimitEntity(param.principalRateLimitId, param.entity, options).toPromise();
    }
}
exports.ObjectPrincipalRateLimitApi = ObjectPrincipalRateLimitApi;
const ObservableAPI_27 = require("./ObservableAPI");
class ObjectProfileMappingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_27.ObservableProfileMappingApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves a single Profile Mapping referenced by its ID
      * Retrieve a Profile Mapping
      * @param param the request object
      */
    getProfileMapping(param, options) {
        return this.api.getProfileMapping(param.mappingId, options).toPromise();
    }
    /**
      * Lists all profile mappings with pagination
      * List all Profile Mappings
      * @param param the request object
      */
    listProfileMappings(param = {}, options) {
        return this.api.listProfileMappings(param.after, param.limit, param.sourceId, param.targetId, options).toPromise();
    }
    /**
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings
      * Update a Profile Mapping
      * @param param the request object
      */
    updateProfileMapping(param, options) {
        return this.api.updateProfileMapping(param.mappingId, param.profileMapping, options).toPromise();
    }
}
exports.ObjectProfileMappingApi = ObjectProfileMappingApi;
const ObservableAPI_28 = require("./ObservableAPI");
class ObjectPushProviderApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_28.ObservablePushProviderApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new push provider
      * Create a Push Provider
      * @param param the request object
      */
    createPushProvider(param, options) {
        return this.api.createPushProvider(param.pushProvider, options).toPromise();
    }
    /**
      * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
      * Delete a Push Provider
      * @param param the request object
      */
    deletePushProvider(param, options) {
        return this.api.deletePushProvider(param.pushProviderId, options).toPromise();
    }
    /**
      * Retrieves a push provider by `pushProviderId`
      * Retrieve a Push Provider
      * @param param the request object
      */
    getPushProvider(param, options) {
        return this.api.getPushProvider(param.pushProviderId, options).toPromise();
    }
    /**
      * Lists all push providers
      * List all Push Providers
      * @param param the request object
      */
    listPushProviders(param = {}, options) {
        return this.api.listPushProviders(param.type, options).toPromise();
    }
    /**
      * Replaces a push provider by `pushProviderId`
      * Replace a Push Provider
      * @param param the request object
      */
    replacePushProvider(param, options) {
        return this.api.replacePushProvider(param.pushProviderId, param.pushProvider, options).toPromise();
    }
}
exports.ObjectPushProviderApi = ObjectPushProviderApi;
const ObservableAPI_29 = require("./ObservableAPI");
class ObjectRateLimitSettingsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_29.ObservableRateLimitSettingsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the currently configured Rate Limit Admin Notification Settings
      * Retrieve the Rate Limit Admin Notification Settings
      * @param param the request object
      */
    getRateLimitSettingsAdminNotifications(param = {}, options) {
        return this.api.getRateLimitSettingsAdminNotifications(options).toPromise();
    }
    /**
      * Retrieves the currently configured Per-Client Rate Limit Settings
      * Retrieve the Per-Client Rate Limit Settings
      * @param param the request object
      */
    getRateLimitSettingsPerClient(param = {}, options) {
        return this.api.getRateLimitSettingsPerClient(options).toPromise();
    }
    /**
      * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
      * Replace the Rate Limit Admin Notification Settings
      * @param param the request object
      */
    replaceRateLimitSettingsAdminNotifications(param, options) {
        return this.api.replaceRateLimitSettingsAdminNotifications(param.RateLimitAdminNotifications, options).toPromise();
    }
    /**
      * Replaces the Per-Client Rate Limit Settings and returns the configured properties
      * Replace the Per-Client Rate Limit Settings
      * @param param the request object
      */
    replaceRateLimitSettingsPerClient(param, options) {
        return this.api.replaceRateLimitSettingsPerClient(param.perClientRateLimitSettings, options).toPromise();
    }
}
exports.ObjectRateLimitSettingsApi = ObjectRateLimitSettingsApi;
const ObservableAPI_30 = require("./ObservableAPI");
class ObjectResourceSetApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_30.ObservableResourceSetApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Adds more members to a resource set binding
      * Add more Members to a binding
      * @param param the request object
      */
    addMembersToBinding(param, options) {
        return this.api.addMembersToBinding(param.resourceSetId, param.roleIdOrLabel, param.instance, options).toPromise();
    }
    /**
      * Adds more resources to a resource set
      * Add more Resource to a resource set
      * @param param the request object
      */
    addResourceSetResource(param, options) {
        return this.api.addResourceSetResource(param.resourceSetId, param.instance, options).toPromise();
    }
    /**
      * Creates a new resource set
      * Create a Resource Set
      * @param param the request object
      */
    createResourceSet(param, options) {
        return this.api.createResourceSet(param.instance, options).toPromise();
    }
    /**
      * Creates a new resource set binding
      * Create a Resource Set Binding
      * @param param the request object
      */
    createResourceSetBinding(param, options) {
        return this.api.createResourceSetBinding(param.resourceSetId, param.instance, options).toPromise();
    }
    /**
      * Deletes a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Delete a Binding
      * @param param the request object
      */
    deleteBinding(param, options) {
        return this.api.deleteBinding(param.resourceSetId, param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Deletes a role by `resourceSetId`
      * Delete a Resource Set
      * @param param the request object
      */
    deleteResourceSet(param, options) {
        return this.api.deleteResourceSet(param.resourceSetId, options).toPromise();
    }
    /**
      * Deletes a resource identified by `resourceId` from a resource set
      * Delete a Resource from a resource set
      * @param param the request object
      */
    deleteResourceSetResource(param, options) {
        return this.api.deleteResourceSetResource(param.resourceSetId, param.resourceId, options).toPromise();
    }
    /**
      * Retrieves a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Retrieve a Binding
      * @param param the request object
      */
    getBinding(param, options) {
        return this.api.getBinding(param.resourceSetId, param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Retrieves a member identified by `memberId` for a binding
      * Retrieve a Member of a binding
      * @param param the request object
      */
    getMemberOfBinding(param, options) {
        return this.api.getMemberOfBinding(param.resourceSetId, param.roleIdOrLabel, param.memberId, options).toPromise();
    }
    /**
      * Retrieves a resource set by `resourceSetId`
      * Retrieve a Resource Set
      * @param param the request object
      */
    getResourceSet(param, options) {
        return this.api.getResourceSet(param.resourceSetId, options).toPromise();
    }
    /**
      * Lists all resource set bindings with pagination support
      * List all Bindings
      * @param param the request object
      */
    listBindings(param, options) {
        return this.api.listBindings(param.resourceSetId, param.after, options).toPromise();
    }
    /**
      * Lists all members of a resource set binding with pagination support
      * List all Members of a binding
      * @param param the request object
      */
    listMembersOfBinding(param, options) {
        return this.api.listMembersOfBinding(param.resourceSetId, param.roleIdOrLabel, param.after, options).toPromise();
    }
    /**
      * Lists all resources that make up the resource set
      * List all Resources of a resource set
      * @param param the request object
      */
    listResourceSetResources(param, options) {
        return this.api.listResourceSetResources(param.resourceSetId, options).toPromise();
    }
    /**
      * Lists all resource sets with pagination support
      * List all Resource Sets
      * @param param the request object
      */
    listResourceSets(param = {}, options) {
        return this.api.listResourceSets(param.after, options).toPromise();
    }
    /**
      * Replaces a resource set by `resourceSetId`
      * Replace a Resource Set
      * @param param the request object
      */
    replaceResourceSet(param, options) {
        return this.api.replaceResourceSet(param.resourceSetId, param.instance, options).toPromise();
    }
    /**
      * Unassigns a member identified by `memberId` from a binding
      * Unassign a Member from a binding
      * @param param the request object
      */
    unassignMemberFromBinding(param, options) {
        return this.api.unassignMemberFromBinding(param.resourceSetId, param.roleIdOrLabel, param.memberId, options).toPromise();
    }
}
exports.ObjectResourceSetApi = ObjectResourceSetApi;
const ObservableAPI_31 = require("./ObservableAPI");
class ObjectRiskEventApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_31.ObservableRiskEventApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Sends multiple IP risk events to Okta. This request is used by a third-party risk provider to send IP risk events to Okta. The third-party risk provider needs to be registered with Okta before they can send events to Okta. See [Risk Providers](/openapi/okta-management/management/tag/RiskProvider/). This API has a rate limit of 30 requests per minute. You can include multiple risk events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. Prioritize sending high risk signals if you have a burst of signals to send that would exceed the maximum request limits.
      * Send multiple Risk Events
      * @param param the request object
      */
    sendRiskEvents(param, options) {
        return this.api.sendRiskEvents(param.instance, options).toPromise();
    }
}
exports.ObjectRiskEventApi = ObjectRiskEventApi;
const ObservableAPI_32 = require("./ObservableAPI");
class ObjectRiskProviderApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_32.ObservableRiskProviderApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a Risk Provider object. A maximum of three Risk Provider objects can be created.
      * Create a Risk Provider
      * @param param the request object
      */
    createRiskProvider(param, options) {
        return this.api.createRiskProvider(param.instance, options).toPromise();
    }
    /**
      * Deletes a Risk Provider object by its ID
      * Delete a Risk Provider
      * @param param the request object
      */
    deleteRiskProvider(param, options) {
        return this.api.deleteRiskProvider(param.riskProviderId, options).toPromise();
    }
    /**
      * Retrieves a Risk Provider object by ID
      * Retrieve a Risk Provider
      * @param param the request object
      */
    getRiskProvider(param, options) {
        return this.api.getRiskProvider(param.riskProviderId, options).toPromise();
    }
    /**
      * Lists all Risk Provider objects
      * List all Risk Providers
      * @param param the request object
      */
    listRiskProviders(param = {}, options) {
        return this.api.listRiskProviders(options).toPromise();
    }
    /**
      * Replaces the properties for a given Risk Provider object ID
      * Replace a Risk Provider
      * @param param the request object
      */
    replaceRiskProvider(param, options) {
        return this.api.replaceRiskProvider(param.riskProviderId, param.instance, options).toPromise();
    }
}
exports.ObjectRiskProviderApi = ObjectRiskProviderApi;
const ObservableAPI_33 = require("./ObservableAPI");
class ObjectRoleApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_33.ObservableRoleApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new role
      * Create a Role
      * @param param the request object
      */
    createRole(param, options) {
        return this.api.createRole(param.instance, options).toPromise();
    }
    /**
      * Creates a permission specified by `permissionType` to the role
      * Create a Permission
      * @param param the request object
      */
    createRolePermission(param, options) {
        return this.api.createRolePermission(param.roleIdOrLabel, param.permissionType, options).toPromise();
    }
    /**
      * Deletes a role by `roleIdOrLabel`
      * Delete a Role
      * @param param the request object
      */
    deleteRole(param, options) {
        return this.api.deleteRole(param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Deletes a permission from a role by `permissionType`
      * Delete a Permission
      * @param param the request object
      */
    deleteRolePermission(param, options) {
        return this.api.deleteRolePermission(param.roleIdOrLabel, param.permissionType, options).toPromise();
    }
    /**
      * Retrieves a role by `roleIdOrLabel`
      * Retrieve a Role
      * @param param the request object
      */
    getRole(param, options) {
        return this.api.getRole(param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Retrieves a permission by `permissionType`
      * Retrieve a Permission
      * @param param the request object
      */
    getRolePermission(param, options) {
        return this.api.getRolePermission(param.roleIdOrLabel, param.permissionType, options).toPromise();
    }
    /**
      * Lists all permissions of the role by `roleIdOrLabel`
      * List all Permissions
      * @param param the request object
      */
    listRolePermissions(param, options) {
        return this.api.listRolePermissions(param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Lists all roles with pagination support
      * List all Roles
      * @param param the request object
      */
    listRoles(param = {}, options) {
        return this.api.listRoles(param.after, options).toPromise();
    }
    /**
      * Replaces a role by `roleIdOrLabel`
      * Replace a Role
      * @param param the request object
      */
    replaceRole(param, options) {
        return this.api.replaceRole(param.roleIdOrLabel, param.instance, options).toPromise();
    }
}
exports.ObjectRoleApi = ObjectRoleApi;
const ObservableAPI_34 = require("./ObservableAPI");
class ObjectRoleAssignmentApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_34.ObservableRoleAssignmentApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Assigns a role to a group
      * Assign a Role to a Group
      * @param param the request object
      */
    assignRoleToGroup(param, options) {
        return this.api.assignRoleToGroup(param.groupId, param.assignRoleRequest, param.disableNotifications, options).toPromise();
    }
    /**
      * Assigns a role to a user identified by `userId`
      * Assign a Role to a User
      * @param param the request object
      */
    assignRoleToUser(param, options) {
        return this.api.assignRoleToUser(param.userId, param.assignRoleRequest, param.disableNotifications, options).toPromise();
    }
    /**
      * Retrieves a role identified by `roleId` assigned to group identified by `groupId`
      * Retrieve a Role assigned to Group
      * @param param the request object
      */
    getGroupAssignedRole(param, options) {
        return this.api.getGroupAssignedRole(param.groupId, param.roleId, options).toPromise();
    }
    /**
      * Retrieves a role identified by `roleId` assigned to a user identified by `userId`
      * Retrieve a Role assigned to a User
      * @param param the request object
      */
    getUserAssignedRole(param, options) {
        return this.api.getUserAssignedRole(param.userId, param.roleId, options).toPromise();
    }
    /**
      * Lists all roles assigned to a user identified by `userId`
      * List all Roles assigned to a User
      * @param param the request object
      */
    listAssignedRolesForUser(param, options) {
        return this.api.listAssignedRolesForUser(param.userId, param.expand, options).toPromise();
    }
    /**
      * Lists all assigned roles of group identified by `groupId`
      * List all Assigned Roles of Group
      * @param param the request object
      */
    listGroupAssignedRoles(param, options) {
        return this.api.listGroupAssignedRoles(param.groupId, param.expand, options).toPromise();
    }
    /**
      * Unassigns a role identified by `roleId` assigned to group identified by `groupId`
      * Unassign a Role from a Group
      * @param param the request object
      */
    unassignRoleFromGroup(param, options) {
        return this.api.unassignRoleFromGroup(param.groupId, param.roleId, options).toPromise();
    }
    /**
      * Unassigns a role identified by `roleId` from a user identified by `userId`
      * Unassign a Role from a User
      * @param param the request object
      */
    unassignRoleFromUser(param, options) {
        return this.api.unassignRoleFromUser(param.userId, param.roleId, options).toPromise();
    }
}
exports.ObjectRoleAssignmentApi = ObjectRoleAssignmentApi;
const ObservableAPI_35 = require("./ObservableAPI");
class ObjectRoleTargetApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_35.ObservableRoleTargetApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Assigns all Apps as Target to Role
      * Assign all Apps as Target to Role
      * @param param the request object
      */
    assignAllAppsAsTargetToRoleForUser(param, options) {
        return this.api.assignAllAppsAsTargetToRoleForUser(param.userId, param.roleId, options).toPromise();
    }
    /**
      * Assigns App Instance Target to App Administrator Role given to a Group
      * Assign an Application Instance Target to Application Administrator Role
      * @param param the request object
      */
    assignAppInstanceTargetToAppAdminRoleForGroup(param, options) {
        return this.api.assignAppInstanceTargetToAppAdminRoleForGroup(param.groupId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Assigns anapplication instance target to appplication administrator role
      * Assign an Application Instance Target to an Application Administrator Role
      * @param param the request object
      */
    assignAppInstanceTargetToAppAdminRoleForUser(param, options) {
        return this.api.assignAppInstanceTargetToAppAdminRoleForUser(param.userId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param param the request object
      */
    assignAppTargetToAdminRoleForGroup(param, options) {
        return this.api.assignAppTargetToAdminRoleForGroup(param.groupId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param param the request object
      */
    assignAppTargetToAdminRoleForUser(param, options) {
        return this.api.assignAppTargetToAdminRoleForUser(param.userId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Assigns a group target to a group role
      * Assign a Group Target to a Group Role
      * @param param the request object
      */
    assignGroupTargetToGroupAdminRole(param, options) {
        return this.api.assignGroupTargetToGroupAdminRole(param.groupId, param.roleId, param.targetGroupId, options).toPromise();
    }
    /**
      * Assigns a Group Target to Role
      * Assign a Group Target to Role
      * @param param the request object
      */
    assignGroupTargetToUserRole(param, options) {
        return this.api.assignGroupTargetToUserRole(param.userId, param.roleId, param.groupId, options).toPromise();
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
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for Application Administrator Role
      * @param param the request object
      */
    listApplicationTargetsForApplicationAdministratorRoleForUser(param, options) {
        return this.api.listApplicationTargetsForApplicationAdministratorRoleForUser(param.userId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all group targets for a group role
      * List all Group Targets for a Group Role
      * @param param the request object
      */
    listGroupTargetsForGroupRole(param, options) {
        return this.api.listGroupTargetsForGroupRole(param.groupId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all group targets for role
      * List all Group Targets for Role
      * @param param the request object
      */
    listGroupTargetsForRole(param, options) {
        return this.api.listGroupTargetsForRole(param.userId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Unassigns an application instance target from an application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param param the request object
      */
    unassignAppInstanceTargetFromAdminRoleForUser(param, options) {
        return this.api.unassignAppInstanceTargetFromAdminRoleForUser(param.userId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Unassigns an application instance target from application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param param the request object
      */
    unassignAppInstanceTargetToAppAdminRoleForGroup(param, options) {
        return this.api.unassignAppInstanceTargetToAppAdminRoleForGroup(param.groupId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from an Application Administrator Role
      * @param param the request object
      */
    unassignAppTargetFromAppAdminRoleForUser(param, options) {
        return this.api.unassignAppTargetFromAppAdminRoleForUser(param.userId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from Application Administrator Role
      * @param param the request object
      */
    unassignAppTargetToAdminRoleForGroup(param, options) {
        return this.api.unassignAppTargetToAdminRoleForGroup(param.groupId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Unassigns a group target from a group role
      * Unassign a Group Target from a Group Role
      * @param param the request object
      */
    unassignGroupTargetFromGroupAdminRole(param, options) {
        return this.api.unassignGroupTargetFromGroupAdminRole(param.groupId, param.roleId, param.targetGroupId, options).toPromise();
    }
    /**
      * Unassigns a Group Target from Role
      * Unassign a Group Target from Role
      * @param param the request object
      */
    unassignGroupTargetFromUserAdminRole(param, options) {
        return this.api.unassignGroupTargetFromUserAdminRole(param.userId, param.roleId, param.groupId, options).toPromise();
    }
}
exports.ObjectRoleTargetApi = ObjectRoleTargetApi;
const ObservableAPI_36 = require("./ObservableAPI");
class ObjectSchemaApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_36.ObservableSchemaApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the UI schema for an Application given `appName`, `section` and `operation`
      * Retrieve the UI schema for a section
      * @param param the request object
      */
    getAppUISchema(param, options) {
        return this.api.getAppUISchema(param.appName, param.section, param.operation, options).toPromise();
    }
    /**
      * Retrieves the links for UI schemas for an Application given `appName`
      * Retrieve the links for UI schemas for an Application
      * @param param the request object
      */
    getAppUISchemaLinks(param, options) {
        return this.api.getAppUISchemaLinks(param.appName, options).toPromise();
    }
    /**
      * Retrieves the Schema for an App User
      * Retrieve the default Application User Schema for an Application
      * @param param the request object
      */
    getApplicationUserSchema(param, options) {
        return this.api.getApplicationUserSchema(param.appInstanceId, options).toPromise();
    }
    /**
      * Retrieves the group schema
      * Retrieve the default Group Schema
      * @param param the request object
      */
    getGroupSchema(param = {}, options) {
        return this.api.getGroupSchema(options).toPromise();
    }
    /**
      * Retrieves the schema for a Log Stream type. The `logStreamType` element in the URL specifies the Log Stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
      * Retrieve the Log Stream Schema for the schema type
      * @param param the request object
      */
    getLogStreamSchema(param, options) {
        return this.api.getLogStreamSchema(param.logStreamType, options).toPromise();
    }
    /**
      * Retrieves the schema for a Schema Id
      * Retrieve a User Schema
      * @param param the request object
      */
    getUserSchema(param, options) {
        return this.api.getUserSchema(param.schemaId, options).toPromise();
    }
    /**
      * Lists the schema for all log stream types visible for this org
      * List the Log Stream Schemas
      * @param param the request object
      */
    listLogStreamSchemas(param = {}, options) {
        return this.api.listLogStreamSchemas(options).toPromise();
    }
    /**
      * Partially updates on the User Profile properties of the Application User Schema
      * Update the default Application User Schema for an Application
      * @param param the request object
      */
    updateApplicationUserProfile(param, options) {
        return this.api.updateApplicationUserProfile(param.appInstanceId, param.body, options).toPromise();
    }
    /**
      * Updates the default group schema. This updates, adds, or removes one or more custom Group Profile properties in the schema.
      * Update the default Group Schema
      * @param param the request object
      */
    updateGroupSchema(param = {}, options) {
        return this.api.updateGroupSchema(param.GroupSchema, options).toPromise();
    }
    /**
      * Partially updates on the User Profile properties of the user schema
      * Update a User Schema
      * @param param the request object
      */
    updateUserProfile(param, options) {
        return this.api.updateUserProfile(param.schemaId, param.userSchema, options).toPromise();
    }
}
exports.ObjectSchemaApi = ObjectSchemaApi;
const ObservableAPI_37 = require("./ObservableAPI");
class ObjectSessionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_37.ObservableSessionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new Session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
      * Create a Session with session token
      * @param param the request object
      */
    createSession(param, options) {
        return this.api.createSession(param.createSessionRequest, options).toPromise();
    }
    /**
      * Retrieves information about the Session specified by the given session ID
      * Retrieve a Session
      * @param param the request object
      */
    getSession(param, options) {
        return this.api.getSession(param.sessionId, options).toPromise();
    }
    /**
      * Refreshes an existing Session using the `id` for that Session. A successful response contains the refreshed Session with an updated `expiresAt` timestamp.
      * Refresh a Session
      * @param param the request object
      */
    refreshSession(param, options) {
        return this.api.refreshSession(param.sessionId, options).toPromise();
    }
    /**
      * Revokes the specified Session
      * Revoke a Session
      * @param param the request object
      */
    revokeSession(param, options) {
        return this.api.revokeSession(param.sessionId, options).toPromise();
    }
}
exports.ObjectSessionApi = ObjectSessionApi;
const ObservableAPI_38 = require("./ObservableAPI");
class ObjectSubscriptionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_38.ObservableSubscriptionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Lists all subscriptions of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role
      * @param param the request object
      */
    listRoleSubscriptions(param, options) {
        return this.api.listRoleSubscriptions(param.roleTypeOrRoleId, options).toPromise();
    }
    /**
      * Lists all subscriptions with a specific notification type of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role with a specific notification type
      * @param param the request object
      */
    listRoleSubscriptionsByNotificationType(param, options) {
        return this.api.listRoleSubscriptionsByNotificationType(param.roleTypeOrRoleId, param.notificationType, options).toPromise();
    }
    /**
      * Lists all subscriptions of a user. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions
      * @param param the request object
      */
    listUserSubscriptions(param, options) {
        return this.api.listUserSubscriptions(param.userId, options).toPromise();
    }
    /**
      * Lists all the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions by type
      * @param param the request object
      */
    listUserSubscriptionsByNotificationType(param, options) {
        return this.api.listUserSubscriptionsByNotificationType(param.userId, param.notificationType, options).toPromise();
    }
    /**
      * Subscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` to a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
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
      * Unsubscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` from a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
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
const ObservableAPI_39 = require("./ObservableAPI");
class ObjectSystemLogApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_39.ObservableSystemLogApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Lists all system log events. The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * List all System Log Events
      * @param param the request object
      */
    listLogEvents(param = {}, options) {
        return this.api.listLogEvents(param.since, param.until, param.filter, param.q, param.limit, param.sortOrder, param.after, options).toPromise();
    }
}
exports.ObjectSystemLogApi = ObjectSystemLogApi;
const ObservableAPI_40 = require("./ObservableAPI");
class ObjectTemplateApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_40.ObservableTemplateApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new custom SMS template
      * Create an SMS Template
      * @param param the request object
      */
    createSmsTemplate(param, options) {
        return this.api.createSmsTemplate(param.smsTemplate, options).toPromise();
    }
    /**
      * Deletes an SMS template
      * Delete an SMS Template
      * @param param the request object
      */
    deleteSmsTemplate(param, options) {
        return this.api.deleteSmsTemplate(param.templateId, options).toPromise();
    }
    /**
      * Retrieves a specific template by `id`
      * Retrieve an SMS Template
      * @param param the request object
      */
    getSmsTemplate(param, options) {
        return this.api.getSmsTemplate(param.templateId, options).toPromise();
    }
    /**
      * Lists all custom SMS templates. A subset of templates can be returned that match a template type.
      * List all SMS Templates
      * @param param the request object
      */
    listSmsTemplates(param = {}, options) {
        return this.api.listSmsTemplates(param.templateType, options).toPromise();
    }
    /**
      * Replaces the SMS template
      * Replace an SMS Template
      * @param param the request object
      */
    replaceSmsTemplate(param, options) {
        return this.api.replaceSmsTemplate(param.templateId, param.smsTemplate, options).toPromise();
    }
    /**
      * Updates an SMS template
      * Update an SMS Template
      * @param param the request object
      */
    updateSmsTemplate(param, options) {
        return this.api.updateSmsTemplate(param.templateId, param.smsTemplate, options).toPromise();
    }
}
exports.ObjectTemplateApi = ObjectTemplateApi;
const ObservableAPI_41 = require("./ObservableAPI");
class ObjectThreatInsightApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_41.ObservableThreatInsightApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves current ThreatInsight configuration
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
const ObservableAPI_42 = require("./ObservableAPI");
class ObjectTrustedOriginApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_42.ObservableTrustedOriginApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a trusted origin
      * Activate a Trusted Origin
      * @param param the request object
      */
    activateTrustedOrigin(param, options) {
        return this.api.activateTrustedOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Creates a trusted origin
      * Create a Trusted Origin
      * @param param the request object
      */
    createTrustedOrigin(param, options) {
        return this.api.createTrustedOrigin(param.trustedOrigin, options).toPromise();
    }
    /**
      * Deactivates a trusted origin
      * Deactivate a Trusted Origin
      * @param param the request object
      */
    deactivateTrustedOrigin(param, options) {
        return this.api.deactivateTrustedOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Deletes a trusted origin
      * Delete a Trusted Origin
      * @param param the request object
      */
    deleteTrustedOrigin(param, options) {
        return this.api.deleteTrustedOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Retrieves a trusted origin
      * Retrieve a Trusted Origin
      * @param param the request object
      */
    getTrustedOrigin(param, options) {
        return this.api.getTrustedOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Lists all trusted origins
      * List all Trusted Origins
      * @param param the request object
      */
    listTrustedOrigins(param = {}, options) {
        return this.api.listTrustedOrigins(param.q, param.filter, param.after, param.limit, options).toPromise();
    }
    /**
      * Replaces a trusted origin
      * Replace a Trusted Origin
      * @param param the request object
      */
    replaceTrustedOrigin(param, options) {
        return this.api.replaceTrustedOrigin(param.trustedOriginId, param.trustedOrigin, options).toPromise();
    }
}
exports.ObjectTrustedOriginApi = ObjectTrustedOriginApi;
const ObservableAPI_43 = require("./ObservableAPI");
class ObjectUserApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_43.ObservableUserApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a user. This operation can only be performed on users with a `STAGED` status. Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation. The user will have a status of `ACTIVE` when the activation process is complete. > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Activate a User
      * @param param the request object
      */
    activateUser(param, options) {
        return this.api.activateUser(param.userId, param.sendEmail, options).toPromise();
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
      * Creates a new user in your Okta organization with or without credentials<br> > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Create a User
      * @param param the request object
      */
    createUser(param, options) {
        return this.api.createUser(param.body, param.activate, param.provider, param.nextLogin, options).toPromise();
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
      * Deletes linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Delete a Linked Object
      * @param param the request object
      */
    deleteLinkedObjectForUser(param, options) {
        return this.api.deleteLinkedObjectForUser(param.userId, param.relationshipName, options).toPromise();
    }
    /**
      * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**. Calling this on an `ACTIVE` user will transition the user to `DEPROVISIONED`.
      * Delete a User
      * @param param the request object
      */
    deleteUser(param, options) {
        return this.api.deleteUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login
      * Expire Password
      * @param param the request object
      */
    expirePassword(param, options) {
        return this.api.expirePassword(param.userId, options).toPromise();
    }
    /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response
      * Expire Password and Set Temporary Password
      * @param param the request object
      */
    expirePasswordAndGetTemporaryPassword(param, options) {
        return this.api.expirePasswordAndGetTemporaryPassword(param.userId, param.revokeSessions, options).toPromise();
    }
    /**
      * Initiates the forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
      * Initiate Forgot Password
      * @param param the request object
      */
    forgotPassword(param, options) {
        return this.api.forgotPassword(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct
      * Reset Password with Recovery Question
      * @param param the request object
      */
    forgotPasswordSetNewPassword(param, options) {
        return this.api.forgotPasswordSetNewPassword(param.userId, param.userCredentials, param.sendEmail, options).toPromise();
    }
    /**
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Generate a Reset Password Token
      * @param param the request object
      */
    generateResetPasswordToken(param, options) {
        return this.api.generateResetPasswordToken(param.userId, param.sendEmail, param.revokeSessions, options).toPromise();
    }
    /**
      * Retrieves a refresh token issued for the specified User and Client
      * Retrieve a Refresh Token for a Client
      * @param param the request object
      */
    getRefreshTokenForUserAndClient(param, options) {
        return this.api.getRefreshTokenForUserAndClient(param.userId, param.clientId, param.tokenId, param.expand, param.limit, param.after, options).toPromise();
    }
    /**
      * Retrieves a user from your Okta organization
      * Retrieve a User
      * @param param the request object
      */
    getUser(param, options) {
        return this.api.getUser(param.userId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a grant for the specified user
      * Retrieve a User Grant
      * @param param the request object
      */
    getUserGrant(param, options) {
        return this.api.getUserGrant(param.userId, param.grantId, param.expand, options).toPromise();
    }
    /**
      * Lists all appLinks for all direct or indirect (via group membership) assigned applications
      * List all Assigned Application Links
      * @param param the request object
      */
    listAppLinks(param, options) {
        return this.api.listAppLinks(param.userId, options).toPromise();
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
      * Lists all linked objects for a user, relationshipName can be a primary or associated relationship name
      * List all Linked Objects
      * @param param the request object
      */
    listLinkedObjectsForUser(param, options) {
        return this.api.listLinkedObjectsForUser(param.userId, param.relationshipName, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all refresh tokens issued for the specified User and Client
      * List all Refresh Tokens for a Client
      * @param param the request object
      */
    listRefreshTokensForUserAndClient(param, options) {
        return this.api.listRefreshTokensForUserAndClient(param.userId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists information about how the user is blocked from accessing their account
      * List all User Blocks
      * @param param the request object
      */
    listUserBlocks(param, options) {
        return this.api.listUserBlocks(param.userId, options).toPromise();
    }
    /**
      * Lists all client resources for which the specified user has grants or tokens
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
      * Lists all groups of which the user is a member
      * List all Groups
      * @param param the request object
      */
    listUserGroups(param, options) {
        return this.api.listUserGroups(param.userId, options).toPromise();
    }
    /**
      * Lists the IdPs associated with the user
      * List all Identity Providers
      * @param param the request object
      */
    listUserIdentityProviders(param, options) {
        return this.api.listUserIdentityProviders(param.userId, options).toPromise();
    }
    /**
      * Lists all users that do not have a status of 'DEPROVISIONED' (by default), up to the maximum (200 for most orgs), with pagination.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List all Users
      * @param param the request object
      */
    listUsers(param = {}, options) {
        return this.api.listUsers(param.q, param.after, param.limit, param.filter, param.search, param.sortBy, param.sortOrder, options).toPromise();
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
      * Replaces a user's profile and/or credentials using strict-update semantics
      * Replace a User
      * @param param the request object
      */
    replaceUser(param, options) {
        return this.api.replaceUser(param.userId, param.user, param.strict, options).toPromise();
    }
    /**
      * Resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset all Factors
      * @param param the request object
      */
    resetFactors(param, options) {
        return this.api.resetFactors(param.userId, options).toPromise();
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
      * Revokes the specified refresh token
      * Revoke a Token for a Client
      * @param param the request object
      */
    revokeTokenForUserAndClient(param, options) {
        return this.api.revokeTokenForUserAndClient(param.userId, param.clientId, param.tokenId, options).toPromise();
    }
    /**
      * Revokes all refresh tokens issued for the specified User and Client
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
      * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Revoke all User Sessions
      * @param param the request object
      */
    revokeUserSessions(param, options) {
        return this.api.revokeUserSessions(param.userId, param.oauthTokens, options).toPromise();
    }
    /**
      * Creates a linked object for two users
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
      * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that is blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password.
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
      * Updates a user partially determined by the request parameters
      * Update a User
      * @param param the request object
      */
    updateUser(param, options) {
        return this.api.updateUser(param.userId, param.user, param.strict, options).toPromise();
    }
}
exports.ObjectUserApi = ObjectUserApi;
const ObservableAPI_44 = require("./ObservableAPI");
class ObjectUserFactorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_44.ObservableUserFactorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a factor. The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate a Factor
      * @param param the request object
      */
    activateFactor(param, options) {
        return this.api.activateFactor(param.userId, param.factorId, param.body, options).toPromise();
    }
    /**
      * Enrolls a user with a supported factor
      * Enroll a Factor
      * @param param the request object
      */
    enrollFactor(param, options) {
        return this.api.enrollFactor(param.userId, param.body, param.updatePhone, param.templateId, param.tokenLifetimeSeconds, param.activate, options).toPromise();
    }
    /**
      * Retrieves a factor for the specified user
      * Retrieve a Factor
      * @param param the request object
      */
    getFactor(param, options) {
        return this.api.getFactor(param.userId, param.factorId, options).toPromise();
    }
    /**
      * Retrieves the factors verification transaction status
      * Retrieve a Factor Transaction Status
      * @param param the request object
      */
    getFactorTransactionStatus(param, options) {
        return this.api.getFactorTransactionStatus(param.userId, param.factorId, param.transactionId, options).toPromise();
    }
    /**
      * Lists all the enrolled factors for the specified user
      * List all Factors
      * @param param the request object
      */
    listFactors(param, options) {
        return this.api.listFactors(param.userId, options).toPromise();
    }
    /**
      * Lists all the supported factors that can be enrolled for the specified user
      * List all Supported Factors
      * @param param the request object
      */
    listSupportedFactors(param, options) {
        return this.api.listSupportedFactors(param.userId, options).toPromise();
    }
    /**
      * Lists all available security questions for a user's `question` factor
      * List all Supported Security Questions
      * @param param the request object
      */
    listSupportedSecurityQuestions(param, options) {
        return this.api.listSupportedSecurityQuestions(param.userId, options).toPromise();
    }
    /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor
      * Unenroll a Factor
      * @param param the request object
      */
    unenrollFactor(param, options) {
        return this.api.unenrollFactor(param.userId, param.factorId, param.removeEnrollmentRecovery, options).toPromise();
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
const ObservableAPI_45 = require("./ObservableAPI");
class ObjectUserTypeApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_45.ObservableUserTypeApi(configuration, requestFactory, responseProcessor);
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
      * Retrieves a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Retrieve a User Type
      * @param param the request object
      */
    getUserType(param, options) {
        return this.api.getUserType(param.typeId, options).toPromise();
    }
    /**
      * Lists all User Types in your org
      * List all User Types
      * @param param the request object
      */
    listUserTypes(param = {}, options) {
        return this.api.listUserTypes(options).toPromise();
    }
    /**
      * Replaces an existing user type
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
