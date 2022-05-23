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
exports.ObjectUserTypeApi = exports.ObjectUserFactorApi = exports.ObjectUserApi = exports.ObjectTrustedOriginApi = exports.ObjectThreatInsightApi = exports.ObjectTemplateApi = exports.ObjectSystemLogApi = exports.ObjectSubscriptionApi = exports.ObjectSessionApi = exports.ObjectSchemaApi = exports.ObjectProfileMappingApi = exports.ObjectPolicyApi = exports.ObjectOrgSettingApi = exports.ObjectNetworkZoneApi = exports.ObjectLinkedObjectApi = exports.ObjectInlineHookApi = exports.ObjectIdentityProviderApi = exports.ObjectGroupApi = exports.ObjectFeatureApi = exports.ObjectEventHookApi = exports.ObjectDomainApi = exports.ObjectCustomizationApi = exports.ObjectCAPTCHAApi = exports.ObjectAuthorizationServerApi = exports.ObjectAuthenticatorApi = exports.ObjectApplicationApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectApplicationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an inactive application.
      * Activate Application
      * @param param the request object
      */
    activateApplication(param, options) {
        return this.api.activateApplication(param.appId, options).toPromise();
    }
    /**
      * Activates the default Provisioning Connection for an application.
      * Activate default Provisioning Connection for application
      * @param param the request object
      */
    activateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.activateDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
      * Assign User to Application for SSO & Provisioning
      * @param param the request object
      */
    assignUserToApplication(param, options) {
        return this.api.assignUserToApplication(param.appId, param.appUser, options).toPromise();
    }
    /**
      * Clones a X.509 certificate for an application key credential from a source application to target application.
      * Clone Application Key Credential
      * @param param the request object
      */
    cloneApplicationKey(param, options) {
        return this.api.cloneApplicationKey(param.appId, param.keyId, param.targetAid, options).toPromise();
    }
    /**
      * Adds a new application to your Okta organization.
      * Add Application
      * @param param the request object
      */
    createApplication(param, options) {
        return this.api.createApplication(param.application, param.activate, param.OktaAccessGateway_Agent, options).toPromise();
    }
    /**
      * Assigns a group to an application
      * Assign Group to Application
      * @param param the request object
      */
    createApplicationGroupAssignment(param, options) {
        return this.api.createApplicationGroupAssignment(param.appId, param.groupId, param.applicationGroupAssignment, options).toPromise();
    }
    /**
      * Deactivates an active application.
      * Deactivate Application
      * @param param the request object
      */
    deactivateApplication(param, options) {
        return this.api.deactivateApplication(param.appId, options).toPromise();
    }
    /**
      * Deactivates the default Provisioning Connection for an application.
      * Deactivate default Provisioning Connection for application
      * @param param the request object
      */
    deactivateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.deactivateDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Removes an inactive application.
      * Delete Application
      * @param param the request object
      */
    deleteApplication(param, options) {
        return this.api.deleteApplication(param.appId, options).toPromise();
    }
    /**
      * Removes a group assignment from an application.
      * Remove Group from Application
      * @param param the request object
      */
    deleteApplicationGroupAssignment(param, options) {
        return this.api.deleteApplicationGroupAssignment(param.appId, param.groupId, options).toPromise();
    }
    /**
      * Removes an assignment for a user from an application.
      * Remove User from Application
      * @param param the request object
      */
    deleteApplicationUser(param, options) {
        return this.api.deleteApplicationUser(param.appId, param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Generates a new X.509 certificate for an application key credential
      * Generate Key Credential for Application
      * @param param the request object
      */
    generateApplicationKey(param, options) {
        return this.api.generateApplicationKey(param.appId, param.validityYears, options).toPromise();
    }
    /**
      * Generates a new key pair and returns the Certificate Signing Request for it.
      * Generate Certificate Signing Request for Application
      * @param param the request object
      */
    generateCsrForApplication(param, options) {
        return this.api.generateCsrForApplication(param.appId, param.metadata, options).toPromise();
    }
    /**
      * Fetches an application from your Okta organization by `id`.
      * Get Application
      * @param param the request object
      */
    getApplication(param, options) {
        return this.api.getApplication(param.appId, param.expand, options).toPromise();
    }
    /**
      * Fetches an application group assignment
      * Get Assigned Group for Application
      * @param param the request object
      */
    getApplicationGroupAssignment(param, options) {
        return this.api.getApplicationGroupAssignment(param.appId, param.groupId, param.expand, options).toPromise();
    }
    /**
      * Gets a specific application key credential by kid
      * Get Key Credential for Application
      * @param param the request object
      */
    getApplicationKey(param, options) {
        return this.api.getApplicationKey(param.appId, param.keyId, options).toPromise();
    }
    /**
      * Fetches a specific user assignment for application by `id`.
      * Get Assigned User for Application
      * @param param the request object
      */
    getApplicationUser(param, options) {
        return this.api.getApplicationUser(param.appId, param.userId, param.expand, options).toPromise();
    }
    /**
      * Fetches a certificate signing request for the app by `id`.
      * Get Certificate Signing Request
      * @param param the request object
      */
    getCsrForApplication(param, options) {
        return this.api.getCsrForApplication(param.appId, param.csrId, options).toPromise();
    }
    /**
      * Get default Provisioning Connection for application
      * Fetches the default Provisioning Connection for an application.
      * @param param the request object
      */
    getDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.getDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Fetches a Feature object for an application.
      * Fetches a Feature object for an application.
      * @param param the request object
      */
    getFeatureForApplication(param, options) {
        return this.api.getFeatureForApplication(param.appId, param.name, options).toPromise();
    }
    /**
      * Gets a token for the specified application
      * Get OAuth 2.0 Token for Application
      * @param param the request object
      */
    getOAuth2TokenForApplication(param, options) {
        return this.api.getOAuth2TokenForApplication(param.appId, param.tokenId, param.expand, options).toPromise();
    }
    /**
      * Fetches a single scope consent grant for the application
      * Get Scope Consent Grant for Application
      * @param param the request object
      */
    getScopeConsentGrant(param, options) {
        return this.api.getScopeConsentGrant(param.appId, param.grantId, param.expand, options).toPromise();
    }
    /**
      * Grants consent for the application to request an OAuth 2.0 Okta scope
      * Grant Consent to Scope for Application
      * @param param the request object
      */
    grantConsentToScope(param, options) {
        return this.api.grantConsentToScope(param.appId, param.oAuth2ScopeConsentGrant, options).toPromise();
    }
    /**
      * Enumerates group assignments for an application.
      * List Groups Assigned to Application
      * @param param the request object
      */
    listApplicationGroupAssignments(param, options) {
        return this.api.listApplicationGroupAssignments(param.appId, param.q, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Enumerates key credentials for an application
      * List Key Credentials for Application
      * @param param the request object
      */
    listApplicationKeys(param, options) {
        return this.api.listApplicationKeys(param.appId, options).toPromise();
    }
    /**
      * Enumerates all assigned [application users](#application-user-model) for an application.
      * List Users Assigned to Application
      * @param param the request object
      */
    listApplicationUsers(param, options) {
        return this.api.listApplicationUsers(param.appId, param.q, param.query_scope, param.after, param.limit, param.filter, param.expand, options).toPromise();
    }
    /**
      * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
      * List Applications
      * @param param the request object
      */
    listApplications(param = {}, options) {
        return this.api.listApplications(param.q, param.after, param.limit, param.filter, param.expand, param.includeNonDeleted, options).toPromise();
    }
    /**
      * Enumerates Certificate Signing Requests for an application
      * List Certificate Signing Requests for Application
      * @param param the request object
      */
    listCsrsForApplication(param, options) {
        return this.api.listCsrsForApplication(param.appId, options).toPromise();
    }
    /**
      * List Features for application
      * Fetches the Feature objects for an application.
      * @param param the request object
      */
    listFeaturesForApplication(param, options) {
        return this.api.listFeaturesForApplication(param.appId, options).toPromise();
    }
    /**
      * Lists all tokens for the application
      * Lists OAuth 2.0 Tokens for Application
      * @param param the request object
      */
    listOAuth2TokensForApplication(param, options) {
        return this.api.listOAuth2TokensForApplication(param.appId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all scope consent grants for the application
      * List Scope Consent Grants for Application
      * @param param the request object
      */
    listScopeConsentGrants(param, options) {
        return this.api.listScopeConsentGrants(param.appId, param.expand, options).toPromise();
    }
    /**
      * Updates a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish Certificate Signing Request
      * @param param the request object
      */
    publishCsrFromApplication(param, options) {
        return this.api.publishCsrFromApplication(param.appId, param.csrId, param.body, options).toPromise();
    }
    /**
      * Revokes a certificate signing request and deletes the key pair from the application.
      * Revoke Certificate Signing Request
      * @param param the request object
      */
    revokeCsrFromApplication(param, options) {
        return this.api.revokeCsrFromApplication(param.appId, param.csrId, options).toPromise();
    }
    /**
      * Revokes the specified token for the specified application
      * Revoke an OAuth 2.0 Token for Application
      * @param param the request object
      */
    revokeOAuth2TokenForApplication(param, options) {
        return this.api.revokeOAuth2TokenForApplication(param.appId, param.tokenId, options).toPromise();
    }
    /**
      * Revokes all tokens for the specified application
      * Revoke All OAuth 2.0 Tokens for Application
      * @param param the request object
      */
    revokeOAuth2TokensForApplication(param, options) {
        return this.api.revokeOAuth2TokensForApplication(param.appId, options).toPromise();
    }
    /**
      * Revokes permission for the application to request the given scope
      * Revoke Scope Consent Grant for Application
      * @param param the request object
      */
    revokeScopeConsentGrant(param, options) {
        return this.api.revokeScopeConsentGrant(param.appId, param.grantId, options).toPromise();
    }
    /**
      * Set default Provisioning Connection for application
      * Sets the default Provisioning Connection for an application.
      * @param param the request object
      */
    setDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.setDefaultProvisioningConnectionForApplication(param.appId, param.ProvisioningConnectionRequest, param.activate, options).toPromise();
    }
    /**
      * Updates an application in your organization.
      * Update Application
      * @param param the request object
      */
    updateApplication(param, options) {
        return this.api.updateApplication(param.appId, param.application, options).toPromise();
    }
    /**
      * Updates a user's profile for an application
      * Update Application Profile for Assigned User
      * @param param the request object
      */
    updateApplicationUser(param, options) {
        return this.api.updateApplicationUser(param.appId, param.userId, param.appUser, options).toPromise();
    }
    /**
      * Updates a Feature object for an application.
      * Updates a Feature object for an application.
      * @param param the request object
      */
    updateFeatureForApplication(param, options) {
        return this.api.updateFeatureForApplication(param.appId, param.name, param.CapabilitiesObject, options).toPromise();
    }
    /**
      * Update the logo for an application.
      * The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * @param param the request object
      */
    uploadApplicationLogo(param, options) {
        return this.api.uploadApplicationLogo(param.appId, param.file, options).toPromise();
    }
}
exports.ObjectApplicationApi = ObjectApplicationApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectAuthenticatorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAuthenticatorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an authenticator by `authenticatorId`.
      * Activate Authenticator
      * @param param the request object
      */
    activateAuthenticator(param, options) {
        return this.api.activateAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Deactivates an authenticator by `authenticatorId`.
      * Deactivate Authenticator
      * @param param the request object
      */
    deactivateAuthenticator(param, options) {
        return this.api.deactivateAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
      * Get Authenticator
      * @param param the request object
      */
    getAuthenticator(param, options) {
        return this.api.getAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Enumerates authenticators in your organization.
      * List Authenticators
      * @param param the request object
      */
    listAuthenticators(param = {}, options) {
        return this.api.listAuthenticators(options).toPromise();
    }
    /**
      * Updates an authenticator
      * Update Authenticator
      * @param param the request object
      */
    updateAuthenticator(param, options) {
        return this.api.updateAuthenticator(param.authenticatorId, param.authenticator, options).toPromise();
    }
}
exports.ObjectAuthenticatorApi = ObjectAuthenticatorApi;
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectAuthorizationServerApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableAuthorizationServerApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Activate Authorization Server
      * @param param the request object
      */
    activateAuthorizationServer(param, options) {
        return this.api.activateAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Activate Authorization Server Policy
      * Activate Authorization Server Policy
      * @param param the request object
      */
    activateAuthorizationServerPolicy(param, options) {
        return this.api.activateAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Activate Authorization Server Policy Rule
      * Activate Authorization Server Policy Rule
      * @param param the request object
      */
    activateAuthorizationServerPolicyRule(param, options) {
        return this.api.activateAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Success
      * Create Authorization Server
      * @param param the request object
      */
    createAuthorizationServer(param, options) {
        return this.api.createAuthorizationServer(param.authorizationServer, options).toPromise();
    }
    /**
      * Success
      * Create Authorization Server Policy
      * @param param the request object
      */
    createAuthorizationServerPolicy(param, options) {
        return this.api.createAuthorizationServerPolicy(param.authServerId, param.policy, options).toPromise();
    }
    /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy.
      * Create Authorization Server Policy Rule
      * @param param the request object
      */
    createAuthorizationServerPolicyRule(param, options) {
        return this.api.createAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.policyRule, options).toPromise();
    }
    /**
      * Success
      * Create Custom OAuth 2.0 Token Claim
      * @param param the request object
      */
    createOAuth2Claim(param, options) {
        return this.api.createOAuth2Claim(param.authServerId, param.oAuth2Claim, options).toPromise();
    }
    /**
      * Success
      * Create Oauth2scope
      * @param param the request object
      */
    createOAuth2Scope(param, options) {
        return this.api.createOAuth2Scope(param.authServerId, param.oAuth2Scope, options).toPromise();
    }
    /**
      * Success
      * Deactivate Authorization Server
      * @param param the request object
      */
    deactivateAuthorizationServer(param, options) {
        return this.api.deactivateAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Deactivate Authorization Server Policy
      * Deactivate Authorization Server Policy
      * @param param the request object
      */
    deactivateAuthorizationServerPolicy(param, options) {
        return this.api.deactivateAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Deactivate Authorization Server Policy Rule
      * Deactivate Authorization Server Policy Rule
      * @param param the request object
      */
    deactivateAuthorizationServerPolicyRule(param, options) {
        return this.api.deactivateAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Success
      * Delete Authorization Server
      * @param param the request object
      */
    deleteAuthorizationServer(param, options) {
        return this.api.deleteAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * Delete Authorization Server Policy
      * @param param the request object
      */
    deleteAuthorizationServerPolicy(param, options) {
        return this.api.deleteAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Delete Authorization Server Policy Rule
      * @param param the request object
      */
    deleteAuthorizationServerPolicyRule(param, options) {
        return this.api.deleteAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.ruleId, options).toPromise();
    }
    /**
      * Success
      * Delete Custom OAuth 2.0 Token Claim
      * @param param the request object
      */
    deleteOAuth2Claim(param, options) {
        return this.api.deleteOAuth2Claim(param.authServerId, param.claimId, options).toPromise();
    }
    /**
      * Success
      * Delete Oauth2scope
      * @param param the request object
      */
    deleteOAuth2Scope(param, options) {
        return this.api.deleteOAuth2Scope(param.authServerId, param.scopeId, options).toPromise();
    }
    /**
      * Success
      * Get Authorization Server
      * @param param the request object
      */
    getAuthorizationServer(param, options) {
        return this.api.getAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * Get Authorization Server Policy
      * @param param the request object
      */
    getAuthorizationServerPolicy(param, options) {
        return this.api.getAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.
      * Get Authorization Server Policy Rule
      * @param param the request object
      */
    getAuthorizationServerPolicyRule(param, options) {
        return this.api.getAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.ruleId, options).toPromise();
    }
    /**
      * Success
      * Get Oauth2claim
      * @param param the request object
      */
    getOAuth2Claim(param, options) {
        return this.api.getOAuth2Claim(param.authServerId, param.claimId, options).toPromise();
    }
    /**
      * Success
      * Get Oauth2scope
      * @param param the request object
      */
    getOAuth2Scope(param, options) {
        return this.api.getOAuth2Scope(param.authServerId, param.scopeId, options).toPromise();
    }
    /**
      * Success
      * Get Refresh Token for Authorization Server and Client
      * @param param the request object
      */
    getRefreshTokenForAuthorizationServerAndClient(param, options) {
        return this.api.getRefreshTokenForAuthorizationServerAndClient(param.authServerId, param.clientId, param.tokenId, param.expand, options).toPromise();
    }
    /**
      * Success
      * List Authorization Server Keys
      * @param param the request object
      */
    listAuthorizationServerKeys(param, options) {
        return this.api.listAuthorizationServerKeys(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * List Authorization Server Policies
      * @param param the request object
      */
    listAuthorizationServerPolicies(param, options) {
        return this.api.listAuthorizationServerPolicies(param.authServerId, options).toPromise();
    }
    /**
      * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
      * List Authorization Server Policy Rules
      * @param param the request object
      */
    listAuthorizationServerPolicyRules(param, options) {
        return this.api.listAuthorizationServerPolicyRules(param.policyId, param.authServerId, options).toPromise();
    }
    /**
      * Success
      * List Authorization Servers
      * @param param the request object
      */
    listAuthorizationServers(param = {}, options) {
        return this.api.listAuthorizationServers(param.q, param.limit, param.after, options).toPromise();
    }
    /**
      * Success
      * List Custom OAuth 2.0 Token Claims
      * @param param the request object
      */
    listOAuth2Claims(param, options) {
        return this.api.listOAuth2Claims(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * List Oauth2clients for Authorization Server
      * @param param the request object
      */
    listOAuth2ClientsForAuthorizationServer(param, options) {
        return this.api.listOAuth2ClientsForAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Success
      * List Oauth2scopes
      * @param param the request object
      */
    listOAuth2Scopes(param, options) {
        return this.api.listOAuth2Scopes(param.authServerId, param.q, param.filter, param.cursor, param.limit, options).toPromise();
    }
    /**
      * Success
      * List Refresh Tokens for Authorization Server and Client
      * @param param the request object
      */
    listRefreshTokensForAuthorizationServerAndClient(param, options) {
        return this.api.listRefreshTokensForAuthorizationServerAndClient(param.authServerId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Success
      * Revoke Refresh Token for Authorization Server and Client
      * @param param the request object
      */
    revokeRefreshTokenForAuthorizationServerAndClient(param, options) {
        return this.api.revokeRefreshTokenForAuthorizationServerAndClient(param.authServerId, param.clientId, param.tokenId, options).toPromise();
    }
    /**
      * Success
      * Revoke Refresh Tokens for Authorization Server and Client
      * @param param the request object
      */
    revokeRefreshTokensForAuthorizationServerAndClient(param, options) {
        return this.api.revokeRefreshTokensForAuthorizationServerAndClient(param.authServerId, param.clientId, options).toPromise();
    }
    /**
      * Success
      * Rotate Authorization Server Keys
      * @param param the request object
      */
    rotateAuthorizationServerKeys(param, options) {
        return this.api.rotateAuthorizationServerKeys(param.authServerId, param.use, options).toPromise();
    }
    /**
      * Success
      * Update Authorization Server
      * @param param the request object
      */
    updateAuthorizationServer(param, options) {
        return this.api.updateAuthorizationServer(param.authServerId, param.authorizationServer, options).toPromise();
    }
    /**
      * Success
      * Update Authorization Server Policy
      * @param param the request object
      */
    updateAuthorizationServerPolicy(param, options) {
        return this.api.updateAuthorizationServerPolicy(param.authServerId, param.policyId, param.policy, options).toPromise();
    }
    /**
      * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Update Authorization Server Policy Rule
      * @param param the request object
      */
    updateAuthorizationServerPolicyRule(param, options) {
        return this.api.updateAuthorizationServerPolicyRule(param.policyId, param.authServerId, param.ruleId, param.policyRule, options).toPromise();
    }
    /**
      * Success
      * Update Custom OAuth 2.0 Token Claim
      * @param param the request object
      */
    updateOAuth2Claim(param, options) {
        return this.api.updateOAuth2Claim(param.authServerId, param.claimId, param.oAuth2Claim, options).toPromise();
    }
    /**
      * Success
      * Update Oauth2scope
      * @param param the request object
      */
    updateOAuth2Scope(param, options) {
        return this.api.updateOAuth2Scope(param.authServerId, param.scopeId, param.oAuth2Scope, options).toPromise();
    }
}
exports.ObjectAuthorizationServerApi = ObjectAuthorizationServerApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectCAPTCHAApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableCAPTCHAApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Adds a new CAPTCHA instance to your organization. In the current release, we only allow one CAPTCHA instance per org.
      * Create new CAPTCHA instance
      * @param param the request object
      */
    createCaptchaInstance(param, options) {
        return this.api.createCaptchaInstance(param.instance, options).toPromise();
    }
    /**
      * Delete a CAPTCHA instance by `id`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete CAPTCHA Instance
      * @param param the request object
      */
    deleteCaptchaInstance(param, options) {
        return this.api.deleteCaptchaInstance(param.captchaId, options).toPromise();
    }
    /**
      * Fetches a CAPTCHA instance by `id`.
      * Get CAPTCHA Instance
      * @param param the request object
      */
    getCaptchaInstance(param, options) {
        return this.api.getCaptchaInstance(param.captchaId, options).toPromise();
    }
    /**
      * Enumerates CAPTCHA instances in your organization with pagination. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List CAPTCHA instances
      * @param param the request object
      */
    listCaptchaInstances(param = {}, options) {
        return this.api.listCaptchaInstances(options).toPromise();
    }
    /**
      * Partially update a CAPTCHA instance by `id`.
      * Partial Update CAPTCHA instance
      * @param param the request object
      */
    partialUpdateCaptchaInstance(param, options) {
        return this.api.partialUpdateCaptchaInstance(param.captchaId, param.instance, options).toPromise();
    }
    /**
      * Update a CAPTCHA instance by `id`.
      * Update CAPTCHA instance
      * @param param the request object
      */
    updateCaptchaInstance(param, options) {
        return this.api.updateCaptchaInstance(param.captchaId, param.instance, options).toPromise();
    }
}
exports.ObjectCAPTCHAApi = ObjectCAPTCHAApi;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectCustomizationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableCustomizationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new email customization.
      * Create Email Customization
      * @param param the request object
      */
    createEmailCustomization(param, options) {
        return this.api.createEmailCustomization(param.brandId, param.templateName, param.instance, options).toPromise();
    }
    /**
      * Deletes all customizations for an email template.
      * Delete All Email Customizations
      * @param param the request object
      */
    deleteAllCustomizations(param, options) {
        return this.api.deleteAllCustomizations(param.brandId, param.templateName, options).toPromise();
    }
    /**
      * Deletes a Theme background image
      * Deletes a Theme background image
      * @param param the request object
      */
    deleteBrandThemeBackgroundImage(param, options) {
        return this.api.deleteBrandThemeBackgroundImage(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Deletes a Theme favicon. The org then uses the Okta default favicon.
      * Deletes a Theme favicon. The org then uses the Okta default favicon.
      * @param param the request object
      */
    deleteBrandThemeFavicon(param, options) {
        return this.api.deleteBrandThemeFavicon(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Deletes a Theme logo. The org then uses the Okta default logo.
      * Deletes a Theme logo. The org then uses the Okta default logo.
      * @param param the request object
      */
    deleteBrandThemeLogo(param, options) {
        return this.api.deleteBrandThemeLogo(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Deletes an email customization by its unique identifier.
      * Delete Email Customization
      * @param param the request object
      */
    deleteEmailCustomization(param, options) {
        return this.api.deleteEmailCustomization(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Fetches a brand by `brandId`
      * Get Brand
      * @param param the request object
      */
    getBrand(param, options) {
        return this.api.getBrand(param.brandId, options).toPromise();
    }
    /**
      * Fetches a theme for a brand
      * Get a theme for a brand
      * @param param the request object
      */
    getBrandTheme(param, options) {
        return this.api.getBrandTheme(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Generates a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview Email Customization
      * @param param the request object
      */
    getCustomizationPreview(param, options) {
        return this.api.getCustomizationPreview(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Gets an email customization by its unique identifier.
      * Get Email Customization
      * @param param the request object
      */
    getEmailCustomization(param, options) {
        return this.api.getEmailCustomization(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Gets an email template's default content.
      * Get Email Template Default Content
      * @param param the request object
      */
    getEmailDefaultContent(param, options) {
        return this.api.getEmailDefaultContent(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Generates a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview Email Template Default Content
      * @param param the request object
      */
    getEmailDefaultPreview(param, options) {
        return this.api.getEmailDefaultPreview(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Gets the details of an email template by name.
      * Get Email Template
      * @param param the request object
      */
    getEmailTemplate(param, options) {
        return this.api.getEmailTemplate(param.brandId, param.templateName, options).toPromise();
    }
    /**
      * List all the themes in your brand
      * Get Brand Themes
      * @param param the request object
      */
    listBrandThemes(param, options) {
        return this.api.listBrandThemes(param.brandId, options).toPromise();
    }
    /**
      * List all the brands in your org.
      * List Brands
      * @param param the request object
      */
    listBrands(param = {}, options) {
        return this.api.listBrands(options).toPromise();
    }
    /**
      * Lists all customizations of an email template.
      * List Email Customizations
      * @param param the request object
      */
    listEmailCustomizations(param, options) {
        return this.api.listEmailCustomizations(param.brandId, param.templateName, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all email templates.
      * List Email Templates
      * @param param the request object
      */
    listEmailTemplates(param, options) {
        return this.api.listEmailTemplates(param.brandId, param.after, param.limit, options).toPromise();
    }
    /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
      * Send Test Email
      * @param param the request object
      */
    sendTestEmail(param, options) {
        return this.api.sendTestEmail(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Updates a brand by `brandId`
      * Update Brand
      * @param param the request object
      */
    updateBrand(param, options) {
        return this.api.updateBrand(param.brandId, param.brand, options).toPromise();
    }
    /**
      * Updates a theme for a brand
      * Update a theme for a brand
      * @param param the request object
      */
    updateBrandTheme(param, options) {
        return this.api.updateBrandTheme(param.brandId, param.themeId, param.theme, options).toPromise();
    }
    /**
      * Updates an existing email customization using the property values provided.
      * Update Email Customization
      * @param param the request object
      */
    updateEmailCustomization(param, options) {
        return this.api.updateEmailCustomization(param.brandId, param.templateName, param.customizationId, param.instance, options).toPromise();
    }
    /**
      * Updates the background image for your Theme
      * Updates the background image for your Theme
      * @param param the request object
      */
    uploadBrandThemeBackgroundImage(param, options) {
        return this.api.uploadBrandThemeBackgroundImage(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Updates the favicon for your theme
      * Updates the favicon for your theme
      * @param param the request object
      */
    uploadBrandThemeFavicon(param, options) {
        return this.api.uploadBrandThemeFavicon(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Updates the logo for your Theme
      * Update a themes logo
      * @param param the request object
      */
    uploadBrandThemeLogo(param, options) {
        return this.api.uploadBrandThemeLogo(param.brandId, param.themeId, options).toPromise();
    }
}
exports.ObjectCustomizationApi = ObjectCustomizationApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectDomainApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableDomainApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates the Certificate for the Domain.
      * Create Certificate
      * @param param the request object
      */
    createCertificate(param, options) {
        return this.api.createCertificate(param.domainId, param.certificate, options).toPromise();
    }
    /**
      * Creates your domain.
      * Create Domain
      * @param param the request object
      */
    createDomain(param, options) {
        return this.api.createDomain(param.domain, options).toPromise();
    }
    /**
      * Deletes a Domain by `id`.
      * Delete Domain
      * @param param the request object
      */
    deleteDomain(param, options) {
        return this.api.deleteDomain(param.domainId, options).toPromise();
    }
    /**
      * Fetches a Domain by `id`.
      * Get Domain
      * @param param the request object
      */
    getDomain(param, options) {
        return this.api.getDomain(param.domainId, options).toPromise();
    }
    /**
      * List all verified custom Domains for the org.
      * List Domains
      * @param param the request object
      */
    listDomains(param = {}, options) {
        return this.api.listDomains(options).toPromise();
    }
    /**
      * Verifies the Domain by `id`.
      * Verify Domain
      * @param param the request object
      */
    verifyDomain(param, options) {
        return this.api.verifyDomain(param.domainId, options).toPromise();
    }
}
exports.ObjectDomainApi = ObjectDomainApi;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectEventHookApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableEventHookApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Activate Event Hook
      * @param param the request object
      */
    activateEventHook(param, options) {
        return this.api.activateEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Success
      * Create Event Hook
      * @param param the request object
      */
    createEventHook(param, options) {
        return this.api.createEventHook(param.eventHook, options).toPromise();
    }
    /**
      * Success
      * Deactivate Event Hook
      * @param param the request object
      */
    deactivateEventHook(param, options) {
        return this.api.deactivateEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Success
      * Delete Event Hook
      * @param param the request object
      */
    deleteEventHook(param, options) {
        return this.api.deleteEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Success
      * Get Event Hook
      * @param param the request object
      */
    getEventHook(param, options) {
        return this.api.getEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Success
      * List Event Hooks
      * @param param the request object
      */
    listEventHooks(param = {}, options) {
        return this.api.listEventHooks(options).toPromise();
    }
    /**
      * Success
      * Update Event Hook
      * @param param the request object
      */
    updateEventHook(param, options) {
        return this.api.updateEventHook(param.eventHookId, param.eventHook, options).toPromise();
    }
    /**
      * Success
      * Verify Event Hook
      * @param param the request object
      */
    verifyEventHook(param, options) {
        return this.api.verifyEventHook(param.eventHookId, options).toPromise();
    }
}
exports.ObjectEventHookApi = ObjectEventHookApi;
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectFeatureApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableFeatureApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Get Feature
      * @param param the request object
      */
    getFeature(param, options) {
        return this.api.getFeature(param.featureId, options).toPromise();
    }
    /**
      * Success
      * List Feature Dependencies
      * @param param the request object
      */
    listFeatureDependencies(param, options) {
        return this.api.listFeatureDependencies(param.featureId, options).toPromise();
    }
    /**
      * Success
      * List Feature Dependents
      * @param param the request object
      */
    listFeatureDependents(param, options) {
        return this.api.listFeatureDependents(param.featureId, options).toPromise();
    }
    /**
      * Success
      * List Features
      * @param param the request object
      */
    listFeatures(param = {}, options) {
        return this.api.listFeatures(options).toPromise();
    }
    /**
      * Success
      * Update Feature Lifecycle
      * @param param the request object
      */
    updateFeatureLifecycle(param, options) {
        return this.api.updateFeatureLifecycle(param.featureId, param.lifecycle, param.mode, options).toPromise();
    }
}
exports.ObjectFeatureApi = ObjectFeatureApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectGroupApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableGroupApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a specific group rule by id from your organization
      * Activate a group Rule
      * @param param the request object
      */
    activateGroupRule(param, options) {
        return this.api.activateGroupRule(param.ruleId, options).toPromise();
    }
    /**
      * Add App Instance Target to App Administrator Role given to a Group
      * Add App Instance Target to App Administrator Role given to a Group
      * @param param the request object
      */
    addApplicationInstanceTargetToAppAdminRoleGivenToGroup(param, options) {
        return this.api.addApplicationInstanceTargetToAppAdminRoleGivenToGroup(param.groupId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Success
      * Add Application Target to Admin Role Given to Group
      * @param param the request object
      */
    addApplicationTargetToAdminRoleGivenToGroup(param, options) {
        return this.api.addApplicationTargetToAdminRoleGivenToGroup(param.groupId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Enumerates group targets for a group role.
      * Add Group Target for Group Role
      * @param param the request object
      */
    addGroupTargetToGroupAdministratorRoleForGroup(param, options) {
        return this.api.addGroupTargetToGroupAdministratorRoleForGroup(param.groupId, param.roleId, param.targetGroupId, options).toPromise();
    }
    /**
      * Adds a user to a group with 'OKTA_GROUP' type.
      * Add User to Group
      * @param param the request object
      */
    addUserToGroup(param, options) {
        return this.api.addUserToGroup(param.groupId, param.userId, options).toPromise();
    }
    /**
      * Assigns a Role to a Group
      * Assign Role to Group
      * @param param the request object
      */
    assignRoleToGroup(param, options) {
        return this.api.assignRoleToGroup(param.groupId, param.assignRoleRequest, param.disableNotifications, options).toPromise();
    }
    /**
      * Adds a new group with `OKTA_GROUP` type to your organization.
      * Add Group
      * @param param the request object
      */
    createGroup(param, options) {
        return this.api.createGroup(param.group, options).toPromise();
    }
    /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition
      * Create Group Rule
      * @param param the request object
      */
    createGroupRule(param, options) {
        return this.api.createGroupRule(param.groupRule, options).toPromise();
    }
    /**
      * Deactivates a specific group rule by id from your organization
      * Deactivate a group Rule
      * @param param the request object
      */
    deactivateGroupRule(param, options) {
        return this.api.deactivateGroupRule(param.ruleId, options).toPromise();
    }
    /**
      * Removes a group with `OKTA_GROUP` type from your organization.
      * Remove Group
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
      * List Group Rules
      * @param param the request object
      */
    getGroup(param, options) {
        return this.api.getGroup(param.groupId, options).toPromise();
    }
    /**
      * Fetches a specific group rule by id from your organization
      * Get Group Rule
      * @param param the request object
      */
    getGroupRule(param, options) {
        return this.api.getGroupRule(param.ruleId, param.expand, options).toPromise();
    }
    /**
      * Success
      * Get Role
      * @param param the request object
      */
    getRole(param, options) {
        return this.api.getRole(param.groupId, param.roleId, options).toPromise();
    }
    /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List Application Targets for Application Administrator Role for Group
      * @param param the request object
      */
    listApplicationTargetsForApplicationAdministratorRoleForGroup(param, options) {
        return this.api.listApplicationTargetsForApplicationAdministratorRoleForGroup(param.groupId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Enumerates all applications that are assigned to a group.
      * List Assigned Applications
      * @param param the request object
      */
    listAssignedApplicationsForGroup(param, options) {
        return this.api.listAssignedApplicationsForGroup(param.groupId, param.after, param.limit, options).toPromise();
    }
    /**
      * Success
      * List Group Assigned Roles
      * @param param the request object
      */
    listGroupAssignedRoles(param, options) {
        return this.api.listGroupAssignedRoles(param.groupId, param.expand, options).toPromise();
    }
    /**
      * Lists all group rules for your organization.
      * List Group Rules
      * @param param the request object
      */
    listGroupRules(param = {}, options) {
        return this.api.listGroupRules(param.limit, param.after, param.search, param.expand, options).toPromise();
    }
    /**
      * Enumerates group targets for a group role.
      * List Group Targets for Group Role
      * @param param the request object
      */
    listGroupTargetsForGroupRole(param, options) {
        return this.api.listGroupTargetsForGroupRole(param.groupId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Enumerates all users that are a member of a group.
      * List Group Members
      * @param param the request object
      */
    listGroupUsers(param, options) {
        return this.api.listGroupUsers(param.groupId, param.after, param.limit, options).toPromise();
    }
    /**
      * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
      * List Groups
      * @param param the request object
      */
    listGroups(param = {}, options) {
        return this.api.listGroups(param.q, param.search, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Remove App Instance Target to App Administrator Role given to a Group
      * Remove App Instance Target to App Administrator Role given to a Group
      * @param param the request object
      */
    removeApplicationTargetFromAdministratorRoleGivenToGroup(param, options) {
        return this.api.removeApplicationTargetFromAdministratorRoleGivenToGroup(param.groupId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Success
      * Remove Application Target from Application Administrator Role Given to Group
      * @param param the request object
      */
    removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(param, options) {
        return this.api.removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(param.groupId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * remove group target for a group role.
      * Delete Group Target for Group Role
      * @param param the request object
      */
    removeGroupTargetFromGroupAdministratorRoleGivenToGroup(param, options) {
        return this.api.removeGroupTargetFromGroupAdministratorRoleGivenToGroup(param.groupId, param.roleId, param.targetGroupId, options).toPromise();
    }
    /**
      * Unassigns a Role from a Group
      * Remove Role from Group
      * @param param the request object
      */
    removeRoleFromGroup(param, options) {
        return this.api.removeRoleFromGroup(param.groupId, param.roleId, options).toPromise();
    }
    /**
      * Removes a user from a group with 'OKTA_GROUP' type.
      * Remove User from Group
      * @param param the request object
      */
    removeUserFromGroup(param, options) {
        return this.api.removeUserFromGroup(param.groupId, param.userId, options).toPromise();
    }
    /**
      * Updates the profile for a group with `OKTA_GROUP` type from your organization.
      * Update Group
      * @param param the request object
      */
    updateGroup(param, options) {
        return this.api.updateGroup(param.groupId, param.group, options).toPromise();
    }
    /**
      * Updates a group rule. Only `INACTIVE` rules can be updated.
      * Update Group Rule
      * @param param the request object
      */
    updateGroupRule(param, options) {
        return this.api.updateGroupRule(param.ruleId, param.groupRule, options).toPromise();
    }
}
exports.ObjectGroupApi = ObjectGroupApi;
const ObservableAPI_10 = require("./ObservableAPI");
class ObjectIdentityProviderApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableIdentityProviderApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an inactive IdP.
      * Activate Identity Provider
      * @param param the request object
      */
    activateIdentityProvider(param, options) {
        return this.api.activateIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
      * Clone Signing Key Credential for IdP
      * @param param the request object
      */
    cloneIdentityProviderKey(param, options) {
        return this.api.cloneIdentityProviderKey(param.idpId, param.keyId, param.targetIdpId, options).toPromise();
    }
    /**
      * Adds a new IdP to your organization.
      * Add Identity Provider
      * @param param the request object
      */
    createIdentityProvider(param, options) {
        return this.api.createIdentityProvider(param.identityProvider, options).toPromise();
    }
    /**
      * Adds a new X.509 certificate credential to the IdP key store.
      * Add X.509 Certificate Public Key for Identity Providers
      * @param param the request object
      */
    createIdentityProviderKey(param, options) {
        return this.api.createIdentityProviderKey(param.jsonWebKey, options).toPromise();
    }
    /**
      * Deactivates an active IdP.
      * Deactivate Identity Provider
      * @param param the request object
      */
    deactivateIdentityProvider(param, options) {
        return this.api.deactivateIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Removes an IdP from your organization.
      * Delete Identity Provider
      * @param param the request object
      */
    deleteIdentityProvider(param, options) {
        return this.api.deleteIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.
      * Delete Key
      * @param param the request object
      */
    deleteIdentityProviderKey(param, options) {
        return this.api.deleteIdentityProviderKey(param.keyId, options).toPromise();
    }
    /**
      * Generates a new key pair and returns a Certificate Signing Request for it.
      * Generate Certificate Signing Request for IdP
      * @param param the request object
      */
    generateCsrForIdentityProvider(param, options) {
        return this.api.generateCsrForIdentityProvider(param.idpId, param.metadata, options).toPromise();
    }
    /**
      * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
      * Generate New IdP Signing Key Credential
      * @param param the request object
      */
    generateIdentityProviderSigningKey(param, options) {
        return this.api.generateIdentityProviderSigningKey(param.idpId, param.validityYears, options).toPromise();
    }
    /**
      * Gets a specific Certificate Signing Request model by id
      * Get Csr for Identity Provider
      * @param param the request object
      */
    getCsrForIdentityProvider(param, options) {
        return this.api.getCsrForIdentityProvider(param.idpId, param.csrId, options).toPromise();
    }
    /**
      * Fetches an IdP by `id`.
      * Get Identity Provider
      * @param param the request object
      */
    getIdentityProvider(param, options) {
        return this.api.getIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Fetches a linked IdP user by ID
      * Get Identity Provider Application User
      * @param param the request object
      */
    getIdentityProviderApplicationUser(param, options) {
        return this.api.getIdentityProviderApplicationUser(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Gets a specific IdP Key Credential by `kid`
      * Get Identity Provider Key
      * @param param the request object
      */
    getIdentityProviderKey(param, options) {
        return this.api.getIdentityProviderKey(param.keyId, options).toPromise();
    }
    /**
      * Gets a specific IdP Key Credential by `kid`
      * Get Signing Key Credential for IdP
      * @param param the request object
      */
    getIdentityProviderSigningKey(param, options) {
        return this.api.getIdentityProviderSigningKey(param.idpId, param.keyId, options).toPromise();
    }
    /**
      * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
      * Link a user to a Social IdP without a transaction
      * @param param the request object
      */
    linkUserToIdentityProvider(param, options) {
        return this.api.linkUserToIdentityProvider(param.idpId, param.userId, param.userIdentityProviderLinkRequest, options).toPromise();
    }
    /**
      * Enumerates Certificate Signing Requests for an IdP
      * List Certificate Signing Requests for IdP
      * @param param the request object
      */
    listCsrsForIdentityProvider(param, options) {
        return this.api.listCsrsForIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Find all the users linked to an identity provider
      * Find Users
      * @param param the request object
      */
    listIdentityProviderApplicationUsers(param, options) {
        return this.api.listIdentityProviderApplicationUsers(param.idpId, options).toPromise();
    }
    /**
      * Enumerates IdP key credentials.
      * List Identity Provider Keys
      * @param param the request object
      */
    listIdentityProviderKeys(param = {}, options) {
        return this.api.listIdentityProviderKeys(param.after, param.limit, options).toPromise();
    }
    /**
      * Enumerates signing key credentials for an IdP
      * List Signing Key Credentials for IdP
      * @param param the request object
      */
    listIdentityProviderSigningKeys(param, options) {
        return this.api.listIdentityProviderSigningKeys(param.idpId, options).toPromise();
    }
    /**
      * Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List Identity Providers
      * @param param the request object
      */
    listIdentityProviders(param = {}, options) {
        return this.api.listIdentityProviders(param.q, param.after, param.limit, param.type, options).toPromise();
    }
    /**
      * Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.
      * Social Authentication Token Operation
      * @param param the request object
      */
    listSocialAuthTokens(param, options) {
        return this.api.listSocialAuthTokens(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
      * Publish Csr for Identity Provider
      * @param param the request object
      */
    publishCsrForIdentityProvider(param, options) {
        return this.api.publishCsrForIdentityProvider(param.idpId, param.csrId, param.body, options).toPromise();
    }
    /**
      * Revoke a Certificate Signing Request and delete the key pair from the IdP
      * Revoke Csr for Identity Provider
      * @param param the request object
      */
    revokeCsrForIdentityProvider(param, options) {
        return this.api.revokeCsrForIdentityProvider(param.idpId, param.csrId, options).toPromise();
    }
    /**
      * Removes the link between the Okta user and the IdP user.
      * Unlink User from IdP
      * @param param the request object
      */
    unlinkUserFromIdentityProvider(param, options) {
        return this.api.unlinkUserFromIdentityProvider(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Updates the configuration for an IdP.
      * Update Identity Provider
      * @param param the request object
      */
    updateIdentityProvider(param, options) {
        return this.api.updateIdentityProvider(param.idpId, param.identityProvider, options).toPromise();
    }
}
exports.ObjectIdentityProviderApi = ObjectIdentityProviderApi;
const ObservableAPI_11 = require("./ObservableAPI");
class ObjectInlineHookApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableInlineHookApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates the Inline Hook matching the provided id
      * Activate Inline Hook
      * @param param the request object
      */
    activateInlineHook(param, options) {
        return this.api.activateInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Success
      * Create Inline Hook
      * @param param the request object
      */
    createInlineHook(param, options) {
        return this.api.createInlineHook(param.inlineHook, options).toPromise();
    }
    /**
      * Deactivates the Inline Hook matching the provided id
      * Deactivate Inline Hook
      * @param param the request object
      */
    deactivateInlineHook(param, options) {
        return this.api.deactivateInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete Inline Hook
      * @param param the request object
      */
    deleteInlineHook(param, options) {
        return this.api.deleteInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute Inline Hook
      * @param param the request object
      */
    executeInlineHook(param, options) {
        return this.api.executeInlineHook(param.inlineHookId, param.payloadData, options).toPromise();
    }
    /**
      * Gets an inline hook by ID
      * Get Inline Hook
      * @param param the request object
      */
    getInlineHook(param, options) {
        return this.api.getInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Success
      * List Inline Hooks
      * @param param the request object
      */
    listInlineHooks(param = {}, options) {
        return this.api.listInlineHooks(param.type, options).toPromise();
    }
    /**
      * Updates an inline hook by ID
      * Update Inline Hook
      * @param param the request object
      */
    updateInlineHook(param, options) {
        return this.api.updateInlineHook(param.inlineHookId, param.inlineHook, options).toPromise();
    }
}
exports.ObjectInlineHookApi = ObjectInlineHookApi;
const ObservableAPI_12 = require("./ObservableAPI");
class ObjectLinkedObjectApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableLinkedObjectApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Add Linked Object Definition
      * @param param the request object
      */
    addLinkedObjectDefinition(param, options) {
        return this.api.addLinkedObjectDefinition(param.linkedObject, options).toPromise();
    }
    /**
      * Success
      * Delete Linked Object Definition
      * @param param the request object
      */
    deleteLinkedObjectDefinition(param, options) {
        return this.api.deleteLinkedObjectDefinition(param.linkedObjectName, options).toPromise();
    }
    /**
      * Success
      * Get Linked Object Definition
      * @param param the request object
      */
    getLinkedObjectDefinition(param, options) {
        return this.api.getLinkedObjectDefinition(param.linkedObjectName, options).toPromise();
    }
    /**
      * Success
      * List Linked Object Definitions
      * @param param the request object
      */
    listLinkedObjectDefinitions(param = {}, options) {
        return this.api.listLinkedObjectDefinitions(options).toPromise();
    }
}
exports.ObjectLinkedObjectApi = ObjectLinkedObjectApi;
const ObservableAPI_13 = require("./ObservableAPI");
class ObjectNetworkZoneApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableNetworkZoneApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activate Network Zone
      * Activate Network Zone
      * @param param the request object
      */
    activateNetworkZone(param, options) {
        return this.api.activateNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Adds a new network zone to your Okta organization.
      * Add Network Zone
      * @param param the request object
      */
    createNetworkZone(param, options) {
        return this.api.createNetworkZone(param.zone, options).toPromise();
    }
    /**
      * Deactivates a network zone.
      * Deactivate Network Zone
      * @param param the request object
      */
    deactivateNetworkZone(param, options) {
        return this.api.deactivateNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Removes network zone.
      * Delete Network Zone
      * @param param the request object
      */
    deleteNetworkZone(param, options) {
        return this.api.deleteNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Fetches a network zone from your Okta organization by `id`.
      * Get Network Zone
      * @param param the request object
      */
    getNetworkZone(param, options) {
        return this.api.getNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
      * List Network Zones
      * @param param the request object
      */
    listNetworkZones(param = {}, options) {
        return this.api.listNetworkZones(param.after, param.limit, param.filter, options).toPromise();
    }
    /**
      * Updates a network zone in your organization.
      * Update Network Zone
      * @param param the request object
      */
    updateNetworkZone(param, options) {
        return this.api.updateNetworkZone(param.zoneId, param.zone, options).toPromise();
    }
}
exports.ObjectNetworkZoneApi = ObjectNetworkZoneApi;
const ObservableAPI_14 = require("./ObservableAPI");
class ObjectOrgSettingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableOrgSettingApi(configuration, requestFactory, responseProcessor);
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
      * Extend Okta Support
      * @param param the request object
      */
    extendOktaSupport(param = {}, options) {
        return this.api.extendOktaSupport(options).toPromise();
    }
    /**
      * Gets Okta Communication Settings of your organization.
      * Get Okta Communication Settings
      * @param param the request object
      */
    getOktaCommunicationSettings(param = {}, options) {
        return this.api.getOktaCommunicationSettings(options).toPromise();
    }
    /**
      * Gets Contact Types of your organization.
      * Get org contact types
      * @param param the request object
      */
    getOrgContactTypes(param = {}, options) {
        return this.api.getOrgContactTypes(options).toPromise();
    }
    /**
      * Retrieves the URL of the User associated with the specified Contact Type.
      * Get org contact user
      * @param param the request object
      */
    getOrgContactUser(param, options) {
        return this.api.getOrgContactUser(param.contactType, options).toPromise();
    }
    /**
      * Gets Okta Support Settings of your organization.
      * Get Okta Support settings
      * @param param the request object
      */
    getOrgOktaSupportSettings(param = {}, options) {
        return this.api.getOrgOktaSupportSettings(options).toPromise();
    }
    /**
      * Gets preferences of your organization.
      * Get org preferences
      * @param param the request object
      */
    getOrgPreferences(param = {}, options) {
        return this.api.getOrgPreferences(options).toPromise();
    }
    /**
      * Get settings of your organization.
      * Get org settings
      * @param param the request object
      */
    getOrgSettings(param = {}, options) {
        return this.api.getOrgSettings(options).toPromise();
    }
    /**
      * Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.
      * Grant Okta Support
      * @param param the request object
      */
    grantOktaSupport(param = {}, options) {
        return this.api.grantOktaSupport(options).toPromise();
    }
    /**
      * Hide the Okta UI footer for all end users of your organization.
      * Show Okta UI Footer
      * @param param the request object
      */
    hideOktaUIFooter(param = {}, options) {
        return this.api.hideOktaUIFooter(options).toPromise();
    }
    /**
      * Opts in all users of this org to Okta Communication emails.
      * Opt in all users to Okta Communication emails
      * @param param the request object
      */
    optInUsersToOktaCommunicationEmails(param = {}, options) {
        return this.api.optInUsersToOktaCommunicationEmails(options).toPromise();
    }
    /**
      * Opts out all users of this org from Okta Communication emails.
      * Opt out all users from Okta Communication emails
      * @param param the request object
      */
    optOutUsersFromOktaCommunicationEmails(param = {}, options) {
        return this.api.optOutUsersFromOktaCommunicationEmails(options).toPromise();
    }
    /**
      * Partial update settings of your organization.
      * Partial update Org Setting
      * @param param the request object
      */
    partialUpdateOrgSetting(param = {}, options) {
        return this.api.partialUpdateOrgSetting(param.OrgSetting, options).toPromise();
    }
    /**
      * Revokes Okta Support access to your organization.
      * Extend Okta Support
      * @param param the request object
      */
    revokeOktaSupport(param = {}, options) {
        return this.api.revokeOktaSupport(options).toPromise();
    }
    /**
      * Makes the Okta UI footer visible for all end users of your organization.
      * Show Okta UI Footer
      * @param param the request object
      */
    showOktaUIFooter(param = {}, options) {
        return this.api.showOktaUIFooter(options).toPromise();
    }
    /**
      * Updates the User associated with the specified Contact Type.
      * Update org contact user
      * @param param the request object
      */
    updateOrgContactUser(param, options) {
        return this.api.updateOrgContactUser(param.contactType, param.orgContactUser, options).toPromise();
    }
    /**
      * Updates the logo for your organization.
      * Update org logo
      * @param param the request object
      */
    updateOrgLogo(param = {}, options) {
        return this.api.updateOrgLogo(options).toPromise();
    }
    /**
      * Update settings of your organization.
      * Update Org setting
      * @param param the request object
      */
    updateOrgSetting(param, options) {
        return this.api.updateOrgSetting(param.orgSetting, options).toPromise();
    }
}
exports.ObjectOrgSettingApi = ObjectOrgSettingApi;
const ObservableAPI_15 = require("./ObservableAPI");
class ObjectPolicyApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservablePolicyApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a policy.
      * Activate Policy
      * @param param the request object
      */
    activatePolicy(param, options) {
        return this.api.activatePolicy(param.policyId, options).toPromise();
    }
    /**
      * Activates a policy rule.
      * Activate Policy Rule
      * @param param the request object
      */
    activatePolicyRule(param, options) {
        return this.api.activatePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Creates a policy.
      * Create Policy
      * @param param the request object
      */
    createPolicy(param, options) {
        return this.api.createPolicy(param.policy, param.activate, options).toPromise();
    }
    /**
      * Creates a policy rule.
      * Create Policy Rule
      * @param param the request object
      */
    createPolicyRule(param, options) {
        return this.api.createPolicyRule(param.policyId, param.policyRule, options).toPromise();
    }
    /**
      * Deactivates a policy.
      * Deactivate Policy
      * @param param the request object
      */
    deactivatePolicy(param, options) {
        return this.api.deactivatePolicy(param.policyId, options).toPromise();
    }
    /**
      * Deactivates a policy rule.
      * Deactivate Policy Rule
      * @param param the request object
      */
    deactivatePolicyRule(param, options) {
        return this.api.deactivatePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Removes a policy.
      * Delete Policy
      * @param param the request object
      */
    deletePolicy(param, options) {
        return this.api.deletePolicy(param.policyId, options).toPromise();
    }
    /**
      * Removes a policy rule.
      * Delete Policy Rule
      * @param param the request object
      */
    deletePolicyRule(param, options) {
        return this.api.deletePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Gets a policy.
      * Get Policy
      * @param param the request object
      */
    getPolicy(param, options) {
        return this.api.getPolicy(param.policyId, param.expand, options).toPromise();
    }
    /**
      * Gets a policy rule.
      * Get Policy Rule
      * @param param the request object
      */
    getPolicyRule(param, options) {
        return this.api.getPolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Gets all policies with the specified type.
      * List Policies
      * @param param the request object
      */
    listPolicies(param, options) {
        return this.api.listPolicies(param.type, param.status, param.expand, options).toPromise();
    }
    /**
      * Enumerates all policy rules.
      * List Policy Rules
      * @param param the request object
      */
    listPolicyRules(param, options) {
        return this.api.listPolicyRules(param.policyId, options).toPromise();
    }
    /**
      * Updates a policy.
      * Update Policy
      * @param param the request object
      */
    updatePolicy(param, options) {
        return this.api.updatePolicy(param.policyId, param.policy, options).toPromise();
    }
    /**
      * Updates a policy rule.
      * Update Policy Rule
      * @param param the request object
      */
    updatePolicyRule(param, options) {
        return this.api.updatePolicyRule(param.policyId, param.ruleId, param.policyRule, options).toPromise();
    }
}
exports.ObjectPolicyApi = ObjectPolicyApi;
const ObservableAPI_16 = require("./ObservableAPI");
class ObjectProfileMappingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableProfileMappingApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Fetches a single Profile Mapping referenced by its ID.
      * Get Profile Mapping
      * @param param the request object
      */
    getProfileMapping(param, options) {
        return this.api.getProfileMapping(param.mappingId, options).toPromise();
    }
    /**
      * Enumerates Profile Mappings in your organization with pagination.
      * List Profile Mappings
      * @param param the request object
      */
    listProfileMappings(param = {}, options) {
        return this.api.listProfileMappings(param.after, param.limit, param.sourceId, param.targetId, options).toPromise();
    }
    /**
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings.
      * Update Profile Mapping
      * @param param the request object
      */
    updateProfileMapping(param, options) {
        return this.api.updateProfileMapping(param.mappingId, param.profileMapping, options).toPromise();
    }
}
exports.ObjectProfileMappingApi = ObjectProfileMappingApi;
const ObservableAPI_17 = require("./ObservableAPI");
class ObjectSchemaApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableSchemaApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Fetches the Schema for an App User
      * Fetches the Schema for an App User
      * @param param the request object
      */
    getApplicationUserSchema(param, options) {
        return this.api.getApplicationUserSchema(param.appInstanceId, options).toPromise();
    }
    /**
      * Fetches the group schema
      * Fetches the group schema
      * @param param the request object
      */
    getGroupSchema(param = {}, options) {
        return this.api.getGroupSchema(options).toPromise();
    }
    /**
      * Fetches the schema for a Schema Id.
      * Fetches the schema for a Schema Id.
      * @param param the request object
      */
    getUserSchema(param, options) {
        return this.api.getUserSchema(param.schemaId, options).toPromise();
    }
    /**
      * Partial updates on the User Profile properties of the Application User Schema.
      * Partial updates on the User Profile properties of the Application User Schema.
      * @param param the request object
      */
    updateApplicationUserProfile(param, options) {
        return this.api.updateApplicationUserProfile(param.appInstanceId, param.body, options).toPromise();
    }
    /**
      * Updates, adds ore removes one or more custom Group Profile properties in the schema
      * Updates, adds ore removes one or more custom Group Profile properties in the schema
      * @param param the request object
      */
    updateGroupSchema(param = {}, options) {
        return this.api.updateGroupSchema(param.GroupSchema, options).toPromise();
    }
    /**
      * Partial updates on the User Profile properties of the user schema.
      * Update User Profile
      * @param param the request object
      */
    updateUserProfile(param, options) {
        return this.api.updateUserProfile(param.schemaId, param.userSchema, options).toPromise();
    }
}
exports.ObjectSchemaApi = ObjectSchemaApi;
const ObservableAPI_18 = require("./ObservableAPI");
class ObjectSessionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableSessionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
      * Create Session with Session Token
      * @param param the request object
      */
    createSession(param, options) {
        return this.api.createSession(param.createSessionRequest, options).toPromise();
    }
    /**
      * End a session.
      * End Session
      * @param param the request object
      */
    endSession(param, options) {
        return this.api.endSession(param.sessionId, options).toPromise();
    }
    /**
      * Get details about a session.
      * Get Session
      * @param param the request object
      */
    getSession(param, options) {
        return this.api.getSession(param.sessionId, options).toPromise();
    }
    /**
      * Refresh a session.
      * Refresh Session
      * @param param the request object
      */
    refreshSession(param, options) {
        return this.api.refreshSession(param.sessionId, options).toPromise();
    }
}
exports.ObjectSessionApi = ObjectSessionApi;
const ObservableAPI_19 = require("./ObservableAPI");
class ObjectSubscriptionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableSubscriptionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * When roleType Get subscriptions of a Role with a specific notification type. Else when roleId Get subscription of a Custom Role with a specific notification type.
      * Get subscriptions of a Custom Role with a specific notification type
      * @param param the request object
      */
    getRoleSubscriptionByNotificationType(param, options) {
        return this.api.getRoleSubscriptionByNotificationType(param.roleTypeOrRoleId, param.notificationType, options).toPromise();
    }
    /**
      * Get the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * Get the subscription of a User with a specific notification type
      * @param param the request object
      */
    getUserSubscriptionByNotificationType(param, options) {
        return this.api.getUserSubscriptionByNotificationType(param.userId, param.notificationType, options).toPromise();
    }
    /**
      * When roleType List all subscriptions of a Role. Else when roleId List subscriptions of a Custom Role
      * List all subscriptions of a Custom Role
      * @param param the request object
      */
    listRoleSubscriptions(param, options) {
        return this.api.listRoleSubscriptions(param.roleTypeOrRoleId, options).toPromise();
    }
    /**
      * List subscriptions of a User. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List subscriptions of a User
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
const ObservableAPI_20 = require("./ObservableAPI");
class ObjectSystemLogApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservableSystemLogApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * Fetch a list of events from your Okta organization system log.
      * @param param the request object
      */
    getLogs(param = {}, options) {
        return this.api.getLogs(param.since, param.until, param.filter, param.q, param.limit, param.sortOrder, param.after, options).toPromise();
    }
}
exports.ObjectSystemLogApi = ObjectSystemLogApi;
const ObservableAPI_21 = require("./ObservableAPI");
class ObjectTemplateApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservableTemplateApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Adds a new custom SMS template to your organization.
      * Add SMS Template
      * @param param the request object
      */
    createSmsTemplate(param, options) {
        return this.api.createSmsTemplate(param.smsTemplate, options).toPromise();
    }
    /**
      * Removes an SMS template.
      * Remove SMS Template
      * @param param the request object
      */
    deleteSmsTemplate(param, options) {
        return this.api.deleteSmsTemplate(param.templateId, options).toPromise();
    }
    /**
      * Fetches a specific template by `id`
      * Get SMS Template
      * @param param the request object
      */
    getSmsTemplate(param, options) {
        return this.api.getSmsTemplate(param.templateId, options).toPromise();
    }
    /**
      * Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.
      * List SMS Templates
      * @param param the request object
      */
    listSmsTemplates(param = {}, options) {
        return this.api.listSmsTemplates(param.templateType, options).toPromise();
    }
    /**
      * Updates only some of the SMS template properties:
      * Partial SMS Template Update
      * @param param the request object
      */
    partialUpdateSmsTemplate(param, options) {
        return this.api.partialUpdateSmsTemplate(param.templateId, param.smsTemplate, options).toPromise();
    }
    /**
      * Updates the SMS template.
      * Update SMS Template
      * @param param the request object
      */
    updateSmsTemplate(param, options) {
        return this.api.updateSmsTemplate(param.templateId, param.smsTemplate, options).toPromise();
    }
}
exports.ObjectTemplateApi = ObjectTemplateApi;
const ObservableAPI_22 = require("./ObservableAPI");
class ObjectThreatInsightApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableThreatInsightApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Gets current ThreatInsight configuration
      * Get Current Configuration
      * @param param the request object
      */
    getCurrentConfiguration(param = {}, options) {
        return this.api.getCurrentConfiguration(options).toPromise();
    }
    /**
      * Updates ThreatInsight configuration
      * Update Configuration
      * @param param the request object
      */
    updateConfiguration(param, options) {
        return this.api.updateConfiguration(param.threatInsightConfiguration, options).toPromise();
    }
}
exports.ObjectThreatInsightApi = ObjectThreatInsightApi;
const ObservableAPI_23 = require("./ObservableAPI");
class ObjectTrustedOriginApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableTrustedOriginApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Success
      * Activate Trusted Origin
      * @param param the request object
      */
    activateOrigin(param, options) {
        return this.api.activateOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Success
      * Create Trusted Origin
      * @param param the request object
      */
    createOrigin(param, options) {
        return this.api.createOrigin(param.trustedOrigin, options).toPromise();
    }
    /**
      * Success
      * Deactivate Trusted Origin
      * @param param the request object
      */
    deactivateOrigin(param, options) {
        return this.api.deactivateOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Success
      * Delete Trusted Origin
      * @param param the request object
      */
    deleteOrigin(param, options) {
        return this.api.deleteOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Success
      * Get Trusted Origin
      * @param param the request object
      */
    getOrigin(param, options) {
        return this.api.getOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Success
      * List Trusted Origins
      * @param param the request object
      */
    listOrigins(param = {}, options) {
        return this.api.listOrigins(param.q, param.filter, param.after, param.limit, options).toPromise();
    }
    /**
      * Success
      * Update Trusted Origin
      * @param param the request object
      */
    updateOrigin(param, options) {
        return this.api.updateOrigin(param.trustedOriginId, param.trustedOrigin, options).toPromise();
    }
}
exports.ObjectTrustedOriginApi = ObjectTrustedOriginApi;
const ObservableAPI_24 = require("./ObservableAPI");
class ObjectUserApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableUserApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
      * Activate User
      * @param param the request object
      */
    activateUser(param, options) {
        return this.api.activateUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Success
      * Add All Apps as Target to Role
      * @param param the request object
      */
    addAllAppsAsTargetToRole(param, options) {
        return this.api.addAllAppsAsTargetToRole(param.userId, param.roleId, options).toPromise();
    }
    /**
      * Success
      * Add Application Target to Admin Role for User
      * @param param the request object
      */
    addApplicationTargetToAdminRoleForUser(param, options) {
        return this.api.addApplicationTargetToAdminRoleForUser(param.userId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Add App Instance Target to App Administrator Role given to a User
      * Add App Instance Target to App Administrator Role given to a User
      * @param param the request object
      */
    addApplicationTargetToAppAdminRoleForUser(param, options) {
        return this.api.addApplicationTargetToAppAdminRoleForUser(param.userId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Success
      * Add Group Target to Role
      * @param param the request object
      */
    addGroupTargetToRole(param, options) {
        return this.api.addGroupTargetToRole(param.userId, param.roleId, param.groupId, options).toPromise();
    }
    /**
      * Assigns a role to a user.
      * Assign Role to User
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
      * Clear User Sessions
      * @param param the request object
      */
    clearUserSessions(param, options) {
        return this.api.clearUserSessions(param.userId, param.oauthTokens, options).toPromise();
    }
    /**
      * Creates a new user in your Okta organization with or without credentials.
      * Create User
      * @param param the request object
      */
    createUser(param, options) {
        return this.api.createUser(param.body, param.activate, param.provider, param.nextLogin, options).toPromise();
    }
    /**
      * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
      * Delete User
      * @param param the request object
      */
    deactivateOrDeleteUser(param, options) {
        return this.api.deactivateOrDeleteUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
      * Deactivate User
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
      * Get Linked Objects for User
      * @param param the request object
      */
    getLinkedObjectsForUser(param, options) {
        return this.api.getLinkedObjectsForUser(param.userId, param.relationshipName, param.after, param.limit, options).toPromise();
    }
    /**
      * Gets a refresh token issued for the specified User and Client.
      * Get Refresh Token for User and Client
      * @param param the request object
      */
    getRefreshTokenForUserAndClient(param, options) {
        return this.api.getRefreshTokenForUserAndClient(param.userId, param.clientId, param.tokenId, param.expand, param.limit, param.after, options).toPromise();
    }
    /**
      * Fetches a user from your Okta organization.
      * Get User
      * @param param the request object
      */
    getUser(param, options) {
        return this.api.getUser(param.userId, options).toPromise();
    }
    /**
      * Gets a grant for the specified user
      * Get User Grant
      * @param param the request object
      */
    getUserGrant(param, options) {
        return this.api.getUserGrant(param.userId, param.grantId, param.expand, options).toPromise();
    }
    /**
      * Gets role that is assigned to user.
      * Get User Role
      * @param param the request object
      */
    getUserRole(param, options) {
        return this.api.getUserRole(param.userId, param.roleId, options).toPromise();
    }
    /**
      * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
      * Get Assigned App Links
      * @param param the request object
      */
    listAppLinks(param, options) {
        return this.api.listAppLinks(param.userId, options).toPromise();
    }
    /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List Application Targets for Application Administrator Role for User
      * @param param the request object
      */
    listApplicationTargetsForApplicationAdministratorRoleForUser(param, options) {
        return this.api.listApplicationTargetsForApplicationAdministratorRoleForUser(param.userId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all roles assigned to a user.
      * List Assigned Roles for User
      * @param param the request object
      */
    listAssignedRolesForUser(param, options) {
        return this.api.listAssignedRolesForUser(param.userId, param.expand, options).toPromise();
    }
    /**
      * Lists all grants for a specified user and client
      * List Grants for User and Client
      * @param param the request object
      */
    listGrantsForUserAndClient(param, options) {
        return this.api.listGrantsForUserAndClient(param.userId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Success
      * List Group Targets for Role
      * @param param the request object
      */
    listGroupTargetsForRole(param, options) {
        return this.api.listGroupTargetsForRole(param.userId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all refresh tokens issued for the specified User and Client.
      * List Refresh Tokens for User and Client
      * @param param the request object
      */
    listRefreshTokensForUserAndClient(param, options) {
        return this.api.listRefreshTokensForUserAndClient(param.userId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all client resources for which the specified user has grants or tokens.
      * List User Clients
      * @param param the request object
      */
    listUserClients(param, options) {
        return this.api.listUserClients(param.userId, options).toPromise();
    }
    /**
      * Lists all grants for the specified user
      * List User Grants
      * @param param the request object
      */
    listUserGrants(param, options) {
        return this.api.listUserGrants(param.userId, param.scopeId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Fetches the groups of which the user is a member.
      * Get Member Groups
      * @param param the request object
      */
    listUserGroups(param, options) {
        return this.api.listUserGroups(param.userId, options).toPromise();
    }
    /**
      * Lists the IdPs associated with the user.
      * Listing IdPs associated with a user
      * @param param the request object
      */
    listUserIdentityProviders(param, options) {
        return this.api.listUserIdentityProviders(param.userId, options).toPromise();
    }
    /**
      * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List Users
      * @param param the request object
      */
    listUsers(param = {}, options) {
        return this.api.listUsers(param.q, param.after, param.limit, param.filter, param.search, param.sortBy, param.sortOrder, options).toPromise();
    }
    /**
      * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
      * Partial Update User
      * @param param the request object
      */
    partialUpdateUser(param, options) {
        return this.api.partialUpdateUser(param.userId, param.user, param.strict, options).toPromise();
    }
    /**
      * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
      * Reactivate User
      * @param param the request object
      */
    reactivateUser(param, options) {
        return this.api.reactivateUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Remove App Instance Target to App Administrator Role given to a User
      * Remove App Instance Target to App Administrator Role given to a User
      * @param param the request object
      */
    removeApplicationTargetFromAdministratorRoleForUser(param, options) {
        return this.api.removeApplicationTargetFromAdministratorRoleForUser(param.userId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Success
      * Remove Application Target from Application Administrator Role for User
      * @param param the request object
      */
    removeApplicationTargetFromApplicationAdministratorRoleForUser(param, options) {
        return this.api.removeApplicationTargetFromApplicationAdministratorRoleForUser(param.userId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Success
      * Remove Group Target from Role
      * @param param the request object
      */
    removeGroupTargetFromRole(param, options) {
        return this.api.removeGroupTargetFromRole(param.userId, param.roleId, param.groupId, options).toPromise();
    }
    /**
      * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Remove Linked Object for User
      * @param param the request object
      */
    removeLinkedObjectForUser(param, options) {
        return this.api.removeLinkedObjectForUser(param.userId, param.relationshipName, options).toPromise();
    }
    /**
      * Unassigns a role from a user.
      * Remove Role from User
      * @param param the request object
      */
    removeRoleFromUser(param, options) {
        return this.api.removeRoleFromUser(param.userId, param.roleId, options).toPromise();
    }
    /**
      * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset Factors
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
      * Revoke Grants for User and Client
      * @param param the request object
      */
    revokeGrantsForUserAndClient(param, options) {
        return this.api.revokeGrantsForUserAndClient(param.userId, param.clientId, options).toPromise();
    }
    /**
      * Revokes the specified refresh token.
      * Revoke Token for User and Client
      * @param param the request object
      */
    revokeTokenForUserAndClient(param, options) {
        return this.api.revokeTokenForUserAndClient(param.userId, param.clientId, param.tokenId, options).toPromise();
    }
    /**
      * Revokes all refresh tokens issued for the specified User and Client.
      * Revoke Tokens for User and Client
      * @param param the request object
      */
    revokeTokensForUserAndClient(param, options) {
        return this.api.revokeTokensForUserAndClient(param.userId, param.clientId, options).toPromise();
    }
    /**
      * Revokes one grant for a specified user
      * Revoke User Grant
      * @param param the request object
      */
    revokeUserGrant(param, options) {
        return this.api.revokeUserGrant(param.userId, param.grantId, options).toPromise();
    }
    /**
      * Revokes all grants for a specified user
      * Revoke User Grants
      * @param param the request object
      */
    revokeUserGrants(param, options) {
        return this.api.revokeUserGrants(param.userId, options).toPromise();
    }
    /**
      * Sets a linked object for a user.
      * Set Linked Object for User
      * @param param the request object
      */
    setLinkedObjectForUser(param, options) {
        return this.api.setLinkedObjectForUser(param.associatedUserId, param.primaryRelationshipName, param.primaryUserId, options).toPromise();
    }
    /**
      * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
      * Suspend User
      * @param param the request object
      */
    suspendUser(param, options) {
        return this.api.suspendUser(param.userId, options).toPromise();
    }
    /**
      * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
      * Unlock User
      * @param param the request object
      */
    unlockUser(param, options) {
        return this.api.unlockUser(param.userId, options).toPromise();
    }
    /**
      * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend User
      * @param param the request object
      */
    unsuspendUser(param, options) {
        return this.api.unsuspendUser(param.userId, options).toPromise();
    }
    /**
      * Update a user's profile and/or credentials using strict-update semantics.
      * Update User
      * @param param the request object
      */
    updateUser(param, options) {
        return this.api.updateUser(param.userId, param.user, param.strict, options).toPromise();
    }
}
exports.ObjectUserApi = ObjectUserApi;
const ObservableAPI_25 = require("./ObservableAPI");
class ObjectUserFactorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservableUserFactorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate Factor
      * @param param the request object
      */
    activateFactor(param, options) {
        return this.api.activateFactor(param.userId, param.factorId, param.body, options).toPromise();
    }
    /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
      * Delete Factor
      * @param param the request object
      */
    deleteFactor(param, options) {
        return this.api.deleteFactor(param.userId, param.factorId, options).toPromise();
    }
    /**
      * Enrolls a user with a supported factor.
      * Enroll Factor
      * @param param the request object
      */
    enrollFactor(param, options) {
        return this.api.enrollFactor(param.userId, param.body, param.updatePhone, param.templateId, param.tokenLifetimeSeconds, param.activate, options).toPromise();
    }
    /**
      * Fetches a factor for the specified user
      * Get Factor
      * @param param the request object
      */
    getFactor(param, options) {
        return this.api.getFactor(param.userId, param.factorId, options).toPromise();
    }
    /**
      * Polls factors verification transaction for status.
      * Get Factor Transaction Status
      * @param param the request object
      */
    getFactorTransactionStatus(param, options) {
        return this.api.getFactorTransactionStatus(param.userId, param.factorId, param.transactionId, options).toPromise();
    }
    /**
      * Enumerates all the enrolled factors for the specified user
      * List Factors
      * @param param the request object
      */
    listFactors(param, options) {
        return this.api.listFactors(param.userId, options).toPromise();
    }
    /**
      * Enumerates all the supported factors that can be enrolled for the specified user
      * List Supported Factors
      * @param param the request object
      */
    listSupportedFactors(param, options) {
        return this.api.listSupportedFactors(param.userId, options).toPromise();
    }
    /**
      * Enumerates all available security questions for a user's `question` factor
      * List Supported Security Questions
      * @param param the request object
      */
    listSupportedSecurityQuestions(param, options) {
        return this.api.listSupportedSecurityQuestions(param.userId, options).toPromise();
    }
    /**
      * Verifies an OTP for a `token` or `token:hardware` factor
      * Verify MFA Factor
      * @param param the request object
      */
    verifyFactor(param, options) {
        return this.api.verifyFactor(param.userId, param.factorId, param.templateId, param.tokenLifetimeSeconds, param.X_Forwarded_For, param.User_Agent, param.Accept_Language, param.body, options).toPromise();
    }
}
exports.ObjectUserFactorApi = ObjectUserFactorApi;
const ObservableAPI_26 = require("./ObservableAPI");
class ObjectUserTypeApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservableUserTypeApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * Create User Type
      * @param param the request object
      */
    createUserType(param, options) {
        return this.api.createUserType(param.userType, options).toPromise();
    }
    /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * Delete User Type
      * @param param the request object
      */
    deleteUserType(param, options) {
        return this.api.deleteUserType(param.typeId, options).toPromise();
    }
    /**
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Get User Type
      * @param param the request object
      */
    getUserType(param, options) {
        return this.api.getUserType(param.typeId, options).toPromise();
    }
    /**
      * Fetches all User Types in your org
      * List User Types
      * @param param the request object
      */
    listUserTypes(param = {}, options) {
        return this.api.listUserTypes(options).toPromise();
    }
    /**
      * Replace an existing User Type
      * Replace User Type
      * @param param the request object
      */
    replaceUserType(param, options) {
        return this.api.replaceUserType(param.typeId, param.userType, options).toPromise();
    }
    /**
      * Updates an existing User Type
      * Update User Type
      * @param param the request object
      */
    updateUserType(param, options) {
        return this.api.updateUserType(param.typeId, param.userType, options).toPromise();
    }
}
exports.ObjectUserTypeApi = ObjectUserTypeApi;
