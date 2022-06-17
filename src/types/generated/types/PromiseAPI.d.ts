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


import { Collection } from '../../collection';
import { HttpFile } from '../http/http';
import { Configuration } from '../configuration';
import { ActivateFactorRequest } from '../models/ActivateFactorRequest';
import { AgentPool } from '../models/AgentPool';
import { AgentPoolUpdate } from '../models/AgentPoolUpdate';
import { AgentPoolUpdateSetting } from '../models/AgentPoolUpdateSetting';
import { AgentType } from '../models/AgentType';
import { ApiToken } from '../models/ApiToken';
import { AppLink } from '../models/AppLink';
import { AppUser } from '../models/AppUser';
import { Application } from '../models/Application';
import { ApplicationFeature } from '../models/ApplicationFeature';
import { ApplicationGroupAssignment } from '../models/ApplicationGroupAssignment';
import { AssignRoleRequest } from '../models/AssignRoleRequest';
import { Authenticator } from '../models/Authenticator';
import { AuthorizationServer } from '../models/AuthorizationServer';
import { AuthorizationServerPolicy } from '../models/AuthorizationServerPolicy';
import { AuthorizationServerPolicyRule } from '../models/AuthorizationServerPolicyRule';
import { BehaviorRule } from '../models/BehaviorRule';
import { BouncesRemoveListObj } from '../models/BouncesRemoveListObj';
import { BouncesRemoveListResult } from '../models/BouncesRemoveListResult';
import { Brand } from '../models/Brand';
import { CAPTCHAInstance } from '../models/CAPTCHAInstance';
import { CapabilitiesObject } from '../models/CapabilitiesObject';
import { CatalogApplication } from '../models/CatalogApplication';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateUserRequest } from '../models/CreateUserRequest';
import { Csr } from '../models/Csr';
import { CsrMetadata } from '../models/CsrMetadata';
import { Domain } from '../models/Domain';
import { DomainCertificate } from '../models/DomainCertificate';
import { DomainListResponse } from '../models/DomainListResponse';
import { DomainResponse } from '../models/DomainResponse';
import { EmailCustomization } from '../models/EmailCustomization';
import { EmailDefaultContent } from '../models/EmailDefaultContent';
import { EmailPreview } from '../models/EmailPreview';
import { EmailSettings } from '../models/EmailSettings';
import { EmailTemplate } from '../models/EmailTemplate';
import { EventHook } from '../models/EventHook';
import { Feature } from '../models/Feature';
import { ForgotPasswordResponse } from '../models/ForgotPasswordResponse';
import { Group } from '../models/Group';
import { GroupRule } from '../models/GroupRule';
import { GroupSchema } from '../models/GroupSchema';
import { IdentityProvider } from '../models/IdentityProvider';
import { IdentityProviderApplicationUser } from '../models/IdentityProviderApplicationUser';
import { ImageUploadResponse } from '../models/ImageUploadResponse';
import { InlineHook } from '../models/InlineHook';
import { InlineHookResponse } from '../models/InlineHookResponse';
import { JsonWebKey } from '../models/JsonWebKey';
import { JwkUse } from '../models/JwkUse';
import { LinkedObject } from '../models/LinkedObject';
import { LogEvent } from '../models/LogEvent';
import { NetworkZone } from '../models/NetworkZone';
import { OAuth2Claim } from '../models/OAuth2Claim';
import { OAuth2Client } from '../models/OAuth2Client';
import { OAuth2RefreshToken } from '../models/OAuth2RefreshToken';
import { OAuth2Scope } from '../models/OAuth2Scope';
import { OAuth2ScopeConsentGrant } from '../models/OAuth2ScopeConsentGrant';
import { OAuth2Token } from '../models/OAuth2Token';
import { OrgContactTypeObj } from '../models/OrgContactTypeObj';
import { OrgContactUser } from '../models/OrgContactUser';
import { OrgOktaCommunicationSetting } from '../models/OrgOktaCommunicationSetting';
import { OrgOktaSupportSettingsObj } from '../models/OrgOktaSupportSettingsObj';
import { OrgPreferences } from '../models/OrgPreferences';
import { OrgSetting } from '../models/OrgSetting';
import { Policy } from '../models/Policy';
import { PolicyRule } from '../models/PolicyRule';
import { PrincipalRateLimitEntity } from '../models/PrincipalRateLimitEntity';
import { ProfileMapping } from '../models/ProfileMapping';
import { ProvisioningConnection } from '../models/ProvisioningConnection';
import { ProvisioningConnectionRequest } from '../models/ProvisioningConnectionRequest';
import { ResetPasswordToken } from '../models/ResetPasswordToken';
import { Role } from '../models/Role';
import { SecurityQuestion } from '../models/SecurityQuestion';
import { Session } from '../models/Session';
import { SmsTemplate } from '../models/SmsTemplate';
import { SmsTemplateType } from '../models/SmsTemplateType';
import { SocialAuthToken } from '../models/SocialAuthToken';
import { Subscription } from '../models/Subscription';
import { TempPassword } from '../models/TempPassword';
import { Theme } from '../models/Theme';
import { ThemeResponse } from '../models/ThemeResponse';
import { ThreatInsightConfiguration } from '../models/ThreatInsightConfiguration';
import { TrustedOrigin } from '../models/TrustedOrigin';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserActivationToken } from '../models/UserActivationToken';
import { UserCredentials } from '../models/UserCredentials';
import { UserFactor } from '../models/UserFactor';
import { UserIdentityProviderLinkRequest } from '../models/UserIdentityProviderLinkRequest';
import { UserNextLogin } from '../models/UserNextLogin';
import { UserSchema } from '../models/UserSchema';
import { UserType } from '../models/UserType';
import { VerifyFactorRequest } from '../models/VerifyFactorRequest';
import { VerifyUserFactorResponse } from '../models/VerifyUserFactorResponse';
import { AgentPoolsApiRequestFactory, AgentPoolsApiResponseProcessor } from '../apis/AgentPoolsApi';
export declare class PromiseAgentPoolsApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AgentPoolsApiRequestFactory, responseProcessor?: AgentPoolsApiResponseProcessor);
  /**
      * Activates scheduled Agent pool update
      * Activate an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  activateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.
      * Create an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdate
      */
  createAgentPoolsUpdate(poolId: string, AgentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Deactivates scheduled Agent pool update
      * Deactivate an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deactivateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Deletes Agent pool update
      * Delete an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deleteAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<void>;
  /**
      * Fetches AgentPools based on request parameters for a given org
      * List all Agent Pools
      * @param limitPerPoolType Maximum number of AgentPools being returned
      * @param poolType Agent type to search for
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      */
  getAgentPools(limitPerPoolType?: number, poolType?: AgentType, after?: string, _options?: Configuration): Promise<Collection<AgentPool>>;
  /**
      * Gets Agent pool update from updateId
      * Retrieve an Agent Pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  getAgentPoolsUpdateInstance(poolId: string, updateId: string, _options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Gets the current state of the agent pool update instance settings
      * Retrieve an Agent Pool update's settings
      * @param poolId Id of the agent pool for which the settings will apply
      */
  getAgentPoolsUpdateSettings(poolId: string, _options?: Configuration): Promise<AgentPoolUpdateSetting>;
  /**
      * Gets List of Agent pool updates
      * List all Agent Pool updates
      * @param poolId Id of the agent pool for which the settings will apply
      * @param scheduled Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates.
      */
  getAgentPoolsUpdates(poolId: string, scheduled?: boolean, _options?: Configuration): Promise<Collection<AgentPoolUpdate>>;
  /**
      * Pauses running or queued Agent pool update
      * Pause an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  pauseAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Resumes running or queued Agent pool update
      * Resume an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  resumeAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Retries Agent pool update
      * Retry an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  retryAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Updates Agent pool update settings
      * Update an Agent pool update settings
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdateSetting
      */
  setAgentPoolsUpdateSettings(poolId: string, AgentPoolUpdateSetting: AgentPoolUpdateSetting, _options?: Configuration): Promise<AgentPoolUpdateSetting>;
  /**
      * Stops Agent pool update
      * Stop an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  stopAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Updates Agent pool update and return latest agent pool update
      * Update an Agent Pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      * @param AgentPoolUpdate
      */
  updateAgentPoolsUpdate(poolId: string, updateId: string, AgentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Promise<AgentPoolUpdate>;
}
import { ApiTokenApiRequestFactory, ApiTokenApiResponseProcessor } from '../apis/ApiTokenApi';
export declare class PromiseApiTokenApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ApiTokenApiRequestFactory, responseProcessor?: ApiTokenApiResponseProcessor);
  /**
      * Get the metadata for an active API token by id.
      * Retrieve an API Token's Metadata
      * @param apiTokenId id of the API Token
      */
  getApiToken(apiTokenId: string, _options?: Configuration): Promise<ApiToken>;
  /**
      * Enumerates the metadata of the active API tokens in your organization.
      * List all API Token Metadata
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param q Finds a token that matches the name or clientName.
      */
  listApiTokens(after?: string, limit?: number, q?: string, _options?: Configuration): Promise<Collection<ApiToken>>;
  /**
      * Revoke an API token by id.
      * Revoke an API Token
      * @param apiTokenId id of the API Token
      */
  revokeApiToken(apiTokenId: string, _options?: Configuration): Promise<void>;
  /**
      * Revokes the API token provided in the Authorization header.
      * Revoke the Current API Token
      */
  revokeCurrentApiToken(_options?: Configuration): Promise<void>;
}
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor } from '../apis/ApplicationApi';
export declare class PromiseApplicationApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ApplicationApiRequestFactory, responseProcessor?: ApplicationApiResponseProcessor);
  /**
      * Activates an inactive application.
      * Activate an Application
      * @param appId
      */
  activateApplication(appId: string, _options?: Configuration): Promise<void>;
  /**
      * Activates the default Provisioning Connection for an application.
      * Activate the default Provisioning Connection
      * @param appId
      */
  activateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Promise<void>;
  /**
      * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
      * Assign a User
      * @param appId
      * @param appUser
      */
  assignUserToApplication(appId: string, appUser: AppUser, _options?: Configuration): Promise<AppUser>;
  /**
      * Clones a X.509 certificate for an application key credential from a source application to target application.
      * Clone a Key Credential
      * @param appId
      * @param keyId
      * @param targetAid Unique key of the target Application
      */
  cloneApplicationKey(appId: string, keyId: string, targetAid: string, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Adds a new application to your Okta organization.
      * Create an Application
      * @param application
      * @param activate Executes activation lifecycle operation when creating the app
      * @param OktaAccessGateway_Agent
      */
  createApplication(application: Application, activate?: boolean, OktaAccessGateway_Agent?: string, _options?: Configuration): Promise<Application>;
  /**
      * Assigns a group to an application
      * Assign a Group
      * @param appId
      * @param groupId
      * @param applicationGroupAssignment
      */
  createApplicationGroupAssignment(appId: string, groupId: string, applicationGroupAssignment?: ApplicationGroupAssignment, _options?: Configuration): Promise<ApplicationGroupAssignment>;
  /**
      * Deactivates an active application.
      * Deactivate an Application
      * @param appId
      */
  deactivateApplication(appId: string, _options?: Configuration): Promise<void>;
  /**
      * Deactivates the default Provisioning Connection for an application.
      * Deactivate the default Provisioning Connection for an Application
      * @param appId
      */
  deactivateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Promise<void>;
  /**
      * Removes an inactive application.
      * Delete an Application
      * @param appId
      */
  deleteApplication(appId: string, _options?: Configuration): Promise<void>;
  /**
      * Removes a group assignment from an application.
      * Unassign a Group
      * @param appId
      * @param groupId
      */
  deleteApplicationGroupAssignment(appId: string, groupId: string, _options?: Configuration): Promise<void>;
  /**
      * Removes an assignment for a user from an application.
      * Unassign a User
      * @param appId
      * @param userId
      * @param sendEmail
      */
  deleteApplicationUser(appId: string, userId: string, sendEmail?: boolean, _options?: Configuration): Promise<void>;
  /**
      * Generates a new X.509 certificate for an application key credential
      * Generate a Key Credential
      * @param appId
      * @param validityYears
      */
  generateApplicationKey(appId: string, validityYears?: number, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Generates a new key pair and returns the Certificate Signing Request for it.
      * Generate a Certificate Signing Request
      * @param appId
      * @param metadata
      */
  generateCsrForApplication(appId: string, metadata: CsrMetadata, _options?: Configuration): Promise<Csr>;
  /**
      * Fetches an application from your Okta organization by `id`.
      * Retrieve an Application
      * @param appId
      * @param expand
      */
  getApplication(appId: string, expand?: string, _options?: Configuration): Promise<Application>;
  /**
      * Fetches an application group assignment
      * Retrieve an Assigned Group
      * @param appId
      * @param groupId
      * @param expand
      */
  getApplicationGroupAssignment(appId: string, groupId: string, expand?: string, _options?: Configuration): Promise<ApplicationGroupAssignment>;
  /**
      * Gets a specific application key credential by kid
      * Retrieve a Key Credential
      * @param appId
      * @param keyId
      */
  getApplicationKey(appId: string, keyId: string, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Fetches a specific user assignment for application by `id`.
      * Retrieve an Assigned User
      * @param appId
      * @param userId
      * @param expand
      */
  getApplicationUser(appId: string, userId: string, expand?: string, _options?: Configuration): Promise<AppUser>;
  /**
      * Fetches a certificate signing request for the app by `id`.
      * Retrieve a Certificate Signing Request
      * @param appId
      * @param csrId
      */
  getCsrForApplication(appId: string, csrId: string, _options?: Configuration): Promise<Csr>;
  /**
      * Get default Provisioning Connection for application
      * Retrieve the default Provisioning Connection
      * @param appId
      */
  getDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Promise<ProvisioningConnection>;
  /**
      * Fetches a Feature object for an application.
      * Retrieve a Feature
      * @param appId
      * @param name
      */
  getFeatureForApplication(appId: string, name: string, _options?: Configuration): Promise<ApplicationFeature>;
  /**
      * Gets a token for the specified application
      * Retrieve an OAuth 2.0 Token
      * @param appId
      * @param tokenId
      * @param expand
      */
  getOAuth2TokenForApplication(appId: string, tokenId: string, expand?: string, _options?: Configuration): Promise<OAuth2Token>;
  /**
      * Fetches a single scope consent grant for the application
      * Retrieve a Scope Consent Grant
      * @param appId
      * @param grantId
      * @param expand
      */
  getScopeConsentGrant(appId: string, grantId: string, expand?: string, _options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Grants consent for the application to request an OAuth 2.0 Okta scope
      * Grant Consent to Scope
      * @param appId
      * @param oAuth2ScopeConsentGrant
      */
  grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant, _options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Enumerates group assignments for an application.
      * List all Assigned Groups
      * @param appId
      * @param q
      * @param after Specifies the pagination cursor for the next page of assignments
      * @param limit Specifies the number of results for a page
      * @param expand
      */
  listApplicationGroupAssignments(appId: string, q?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Promise<Collection<ApplicationGroupAssignment>>;
  /**
      * Enumerates key credentials for an application
      * List all Key Credentials
      * @param appId
      */
  listApplicationKeys(appId: string, _options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Enumerates all assigned [application users](#application-user-model) for an application.
      * List all Assigned Users
      * @param appId
      * @param q
      * @param query_scope
      * @param after specifies the pagination cursor for the next page of assignments
      * @param limit specifies the number of results for a page
      * @param filter
      * @param expand
      */
  listApplicationUsers(appId: string, q?: string, query_scope?: string, after?: string, limit?: number, filter?: string, expand?: string, _options?: Configuration): Promise<Collection<AppUser>>;
  /**
      * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
      * List all Applications
      * @param q
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of results for a page
      * @param filter Filters apps by status, user.id, group.id or credentials.signing.kid expression
      * @param expand Traverses users link relationship and optionally embeds Application User resource
      * @param includeNonDeleted
      */
  listApplications(q?: string, after?: string, limit?: number, filter?: string, expand?: string, includeNonDeleted?: boolean, _options?: Configuration): Promise<Collection<Application>>;
  /**
      * Enumerates Certificate Signing Requests for an application
      * List all Certificate Signing Requests
      * @param appId
      */
  listCsrsForApplication(appId: string, _options?: Configuration): Promise<Collection<Csr>>;
  /**
      * List Features for application
      * List all Features
      * @param appId
      */
  listFeaturesForApplication(appId: string, _options?: Configuration): Promise<Collection<ApplicationFeature>>;
  /**
      * Lists all tokens for the application
      * List all OAuth 2.0 Tokens
      * @param appId
      * @param expand
      * @param after
      * @param limit
      */
  listOAuth2TokensForApplication(appId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<OAuth2Token>>;
  /**
      * Lists all scope consent grants for the application
      * List all Scope Consent Grants
      * @param appId
      * @param expand
      */
  listScopeConsentGrants(appId: string, expand?: string, _options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Updates a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish a Certificate Signing Request
      * @param appId
      * @param csrId
      * @param body
      */
  publishCsrFromApplication(appId: string, csrId: string, body: HttpFile, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Revokes a certificate signing request and deletes the key pair from the application.
      * Revoke a Certificate Signing Request
      * @param appId
      * @param csrId
      */
  revokeCsrFromApplication(appId: string, csrId: string, _options?: Configuration): Promise<void>;
  /**
      * Revokes the specified token for the specified application
      * Revoke an OAuth 2.0 Token
      * @param appId
      * @param tokenId
      */
  revokeOAuth2TokenForApplication(appId: string, tokenId: string, _options?: Configuration): Promise<void>;
  /**
      * Revokes all tokens for the specified application
      * Revoke all OAuth 2.0 Tokens
      * @param appId
      */
  revokeOAuth2TokensForApplication(appId: string, _options?: Configuration): Promise<void>;
  /**
      * Revokes permission for the application to request the given scope
      * Revoke a Scope Consent Grant
      * @param appId
      * @param grantId
      */
  revokeScopeConsentGrant(appId: string, grantId: string, _options?: Configuration): Promise<void>;
  /**
      * Set default Provisioning Connection for application
      * Update the default Provisioning Connection
      * @param appId
      * @param ProvisioningConnectionRequest
      * @param activate
      */
  setDefaultProvisioningConnectionForApplication(appId: string, ProvisioningConnectionRequest: ProvisioningConnectionRequest, activate?: boolean, _options?: Configuration): Promise<ProvisioningConnection>;
  /**
      * Updates an application in your organization.
      * Replace an Application
      * @param appId
      * @param application
      */
  updateApplication(appId: string, application: Application, _options?: Configuration): Promise<Application>;
  /**
      * Updates a user's profile for an application
      * Update an Application Profile for Assigned User
      * @param appId
      * @param userId
      * @param appUser
      */
  updateApplicationUser(appId: string, userId: string, appUser: AppUser, _options?: Configuration): Promise<AppUser>;
  /**
      * Updates a Feature object for an application.
      * Update a Feature
      * @param appId
      * @param name
      * @param CapabilitiesObject
      */
  updateFeatureForApplication(appId: string, name: string, CapabilitiesObject: CapabilitiesObject, _options?: Configuration): Promise<ApplicationFeature>;
  /**
      * The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * Upload a Logo
      * @param appId
      * @param file
      */
  uploadApplicationLogo(appId: string, file: HttpFile, _options?: Configuration): Promise<void>;
}
import { AuthenticatorApiRequestFactory, AuthenticatorApiResponseProcessor } from '../apis/AuthenticatorApi';
export declare class PromiseAuthenticatorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AuthenticatorApiRequestFactory, responseProcessor?: AuthenticatorApiResponseProcessor);
  /**
      * Activates an authenticator by `authenticatorId`.
      * Activate an Authenticator
      * @param authenticatorId
      */
  activateAuthenticator(authenticatorId: string, _options?: Configuration): Promise<Authenticator>;
  /**
      * Deactivates an authenticator by `authenticatorId`.
      * Deactivate an Authenticator
      * @param authenticatorId
      */
  deactivateAuthenticator(authenticatorId: string, _options?: Configuration): Promise<Authenticator>;
  /**
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
      * Retrieve an Authenticator
      * @param authenticatorId
      */
  getAuthenticator(authenticatorId: string, _options?: Configuration): Promise<Authenticator>;
  /**
      * Enumerates authenticators in your organization.
      * List all Authenticators
      */
  listAuthenticators(_options?: Configuration): Promise<Collection<Authenticator>>;
  /**
      * Updates an authenticator
      * Replace an Authenticator
      * @param authenticatorId
      * @param authenticator
      */
  updateAuthenticator(authenticatorId: string, authenticator: Authenticator, _options?: Configuration): Promise<Authenticator>;
}
import { AuthorizationServerApiRequestFactory, AuthorizationServerApiResponseProcessor } from '../apis/AuthorizationServerApi';
export declare class PromiseAuthorizationServerApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AuthorizationServerApiRequestFactory, responseProcessor?: AuthorizationServerApiResponseProcessor);
  /**
      * Success
      * Activate an Authorization Server
      * @param authServerId
      */
  activateAuthorizationServer(authServerId: string, _options?: Configuration): Promise<void>;
  /**
      * Activate Authorization Server Policy
      * Activate a Policy
      * @param authServerId
      * @param policyId
      */
  activateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<void>;
  /**
      * Activate Authorization Server Policy Rule
      * Activate a Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  activateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Create an Authorization Server
      * @param authorizationServer
      */
  createAuthorizationServer(authorizationServer: AuthorizationServer, _options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Success
      * Create a Policy
      * @param authServerId
      * @param policy
      */
  createAuthorizationServerPolicy(authServerId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Promise<void | AuthorizationServerPolicy>;
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy.
      * Create a Policy Rule
      * @param policyId
      * @param authServerId
      * @param policyRule
      */
  createAuthorizationServerPolicyRule(policyId: string, authServerId: string, policyRule: AuthorizationServerPolicyRule, _options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Success
      * Create a Custom Token Claim
      * @param authServerId
      * @param oAuth2Claim
      */
  createOAuth2Claim(authServerId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Promise<void | OAuth2Claim>;
  /**
      * Success
      * Create a Custom Token Scope
      * @param authServerId
      * @param oAuth2Scope
      */
  createOAuth2Scope(authServerId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Promise<void | OAuth2Scope>;
  /**
      * Success
      * Deactivate an Authorization Server
      * @param authServerId
      */
  deactivateAuthorizationServer(authServerId: string, _options?: Configuration): Promise<void>;
  /**
      * Deactivate Authorization Server Policy
      * Deactivate a Policy
      * @param authServerId
      * @param policyId
      */
  deactivateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<void>;
  /**
      * Deactivate Authorization Server Policy Rule
      * Deactivate a Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  deactivateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Delete an Authorization Server
      * @param authServerId
      */
  deleteAuthorizationServer(authServerId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Delete a Policy
      * @param authServerId
      * @param policyId
      */
  deleteAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<void>;
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Delete a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  deleteAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Delete a Custom Token Claim
      * @param authServerId
      * @param claimId
      */
  deleteOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Delete a Custom Token Scope
      * @param authServerId
      * @param scopeId
      */
  deleteOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Retrieve an Authorization Server
      * @param authServerId
      */
  getAuthorizationServer(authServerId: string, _options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Success
      * Retrieve a Policy
      * @param authServerId
      * @param policyId
      */
  getAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.
      * Retrieve a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  getAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, _options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Success
      * Retrieve a Custom Token Claim
      * @param authServerId
      * @param claimId
      */
  getOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Success
      * Retrieve a Custom Token Scope
      * @param authServerId
      * @param scopeId
      */
  getOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Promise<OAuth2Scope>;
  /**
      * Success
      * Retrieve a Refresh Token for a Client
      * @param authServerId
      * @param clientId
      * @param tokenId
      * @param expand
      */
  getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, expand?: string, _options?: Configuration): Promise<OAuth2RefreshToken>;
  /**
      * Success
      * List all Credential Keys
      * @param authServerId
      */
  listAuthorizationServerKeys(authServerId: string, _options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Success
      * List all Policies
      * @param authServerId
      */
  listAuthorizationServerPolicies(authServerId: string, _options?: Configuration): Promise<Collection<AuthorizationServerPolicy>>;
  /**
      * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
      * List all Policy Rules
      * @param policyId
      * @param authServerId
      */
  listAuthorizationServerPolicyRules(policyId: string, authServerId: string, _options?: Configuration): Promise<Collection<AuthorizationServerPolicyRule>>;
  /**
      * Success
      * List all Authorization Servers
      * @param q
      * @param limit
      * @param after
      */
  listAuthorizationServers(q?: string, limit?: string, after?: string, _options?: Configuration): Promise<Collection<AuthorizationServer>>;
  /**
      * Success
      * List all Custom Token Claims
      * @param authServerId
      */
  listOAuth2Claims(authServerId: string, _options?: Configuration): Promise<Collection<OAuth2Claim>>;
  /**
      * Success
      * List all Clients
      * @param authServerId
      */
  listOAuth2ClientsForAuthorizationServer(authServerId: string, _options?: Configuration): Promise<Collection<OAuth2Client>>;
  /**
      * Success
      * List all Custom Token Scopes
      * @param authServerId
      * @param q
      * @param filter
      * @param cursor
      * @param limit
      */
  listOAuth2Scopes(authServerId: string, q?: string, filter?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Collection<OAuth2Scope>>;
  /**
      * Success
      * List all Refresh Tokens for a Client
      * @param authServerId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<OAuth2RefreshToken>>;
  /**
      * Success
      * Revoke a Refresh Token for a Client
      * @param authServerId
      * @param clientId
      * @param tokenId
      */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Revoke all Refresh Tokens for a Client
      * @param authServerId
      * @param clientId
      */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Rotate all Credential Keys
      * @param authServerId
      * @param use
      */
  rotateAuthorizationServerKeys(authServerId: string, use: JwkUse, _options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Success
      * Replace an Authorization Server
      * @param authServerId
      * @param authorizationServer
      */
  updateAuthorizationServer(authServerId: string, authorizationServer: AuthorizationServer, _options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Success
      * Replace a Policy
      * @param authServerId
      * @param policyId
      * @param policy
      */
  updateAuthorizationServerPolicy(authServerId: string, policyId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Replace a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      * @param policyRule
      */
  updateAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, policyRule: AuthorizationServerPolicyRule, _options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Success
      * Replace a Custom Token Claim
      * @param authServerId
      * @param claimId
      * @param oAuth2Claim
      */
  updateOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Success
      * Replace a Custom Token Scope
      * @param authServerId
      * @param scopeId
      * @param oAuth2Scope
      */
  updateOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Promise<OAuth2Scope>;
}
import { BehaviorApiRequestFactory, BehaviorApiResponseProcessor } from '../apis/BehaviorApi';
export declare class PromiseBehaviorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: BehaviorApiRequestFactory, responseProcessor?: BehaviorApiResponseProcessor);
  /**
      * Activate Behavior Detection Rule
      * Activate a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  activateBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Promise<BehaviorRule>;
  /**
      * Adds a new Behavior Detection Rule to your organization.
      * Create a Behavior Detection Rule
      * @param rule
      */
  createBehaviorDetectionRule(rule: BehaviorRule, _options?: Configuration): Promise<BehaviorRule>;
  /**
      * Deactivate Behavior Detection Rule
      * Deactivate a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deactivateBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Promise<BehaviorRule>;
  /**
      * Delete a Behavior Detection Rule by `behaviorId`.
      * Delete a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deleteBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Promise<void>;
  /**
      * Fetches a Behavior Detection Rule by `behaviorId`.
      * Retrieve a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  getBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Promise<Collection<BehaviorRule>>;
  /**
      * Enumerates Behavior Detection Rules in your organization with pagination.
      * List all Behavior Detection Rules
      */
  listBehaviorDetectionRules(_options?: Configuration): Promise<Collection<BehaviorRule>>;
  /**
      * Update a Behavior Detection Rule by `behaviorId`.
      * Replace a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      * @param rule
      */
  updateBehaviorDetectionRule(behaviorId: string, rule: BehaviorRule, _options?: Configuration): Promise<BehaviorRule>;
}
import { CAPTCHAApiRequestFactory, CAPTCHAApiResponseProcessor } from '../apis/CAPTCHAApi';
export declare class PromiseCAPTCHAApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: CAPTCHAApiRequestFactory, responseProcessor?: CAPTCHAApiResponseProcessor);
  /**
      * Adds a new CAPTCHA instance to your organization. In the current release, we only allow one CAPTCHA instance per org.
      * Create a CAPTCHA instance
      * @param instance
      */
  createCaptchaInstance(instance: CAPTCHAInstance, _options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Delete a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete a CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  deleteCaptchaInstance(captchaId: string, _options?: Configuration): Promise<void>;
  /**
      * Fetches a CAPTCHA instance by `captchaId`.
      * Retrieve a CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  getCaptchaInstance(captchaId: string, _options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Enumerates CAPTCHA instances in your organization with pagination. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      */
  listCaptchaInstances(_options?: Configuration): Promise<Collection<CAPTCHAInstance>>;
  /**
      * Partially update a CAPTCHA instance by `captchaId`.
      * Update a CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  partialUpdateCaptchaInstance(captchaId: string, instance: CAPTCHAInstance, _options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Update a CAPTCHA instance by `captchaId`.
      * Replace a CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  updateCaptchaInstance(captchaId: string, instance: CAPTCHAInstance, _options?: Configuration): Promise<CAPTCHAInstance>;
}
import { CustomizationApiRequestFactory, CustomizationApiResponseProcessor } from '../apis/CustomizationApi';
export declare class PromiseCustomizationApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: CustomizationApiRequestFactory, responseProcessor?: CustomizationApiResponseProcessor);
  /**
      * Creates a new email customization.
      * Create an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param instance
      */
  createEmailCustomization(brandId: string, templateName: string, instance?: EmailCustomization, _options?: Configuration): Promise<EmailCustomization>;
  /**
      * Deletes all customizations for an email template.
      * Delete all Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  deleteAllCustomizations(brandId: string, templateName: string, _options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme background image.
      * Delete the Background Image
      * @param brandId
      * @param themeId
      */
  deleteBrandThemeBackgroundImage(brandId: string, themeId: string, _options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme favicon. The theme will use the default Okta favicon.
      * Delete the Favicon
      * @param brandId
      * @param themeId
      */
  deleteBrandThemeFavicon(brandId: string, themeId: string, _options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the Logo
      * @param brandId
      * @param themeId
      */
  deleteBrandThemeLogo(brandId: string, themeId: string, _options?: Configuration): Promise<void>;
  /**
      * Deletes an email customization by its unique identifier.
      * Delete an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  deleteEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<void>;
  /**
      * Fetches a brand by `brandId`
      * Retrieve a Brand
      * @param brandId
      */
  getBrand(brandId: string, _options?: Configuration): Promise<Brand>;
  /**
      * Fetches a theme for a brand
      * Retrieve a Theme
      * @param brandId
      * @param themeId
      */
  getBrandTheme(brandId: string, themeId: string, _options?: Configuration): Promise<ThemeResponse>;
  /**
      * Generates a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getCustomizationPreview(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<EmailPreview>;
  /**
      * Gets an email customization by its unique identifier.
      * Retrieve an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<EmailCustomization>;
  /**
      * Gets an email template's default content.
      * Retrieve an Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultContent(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<EmailDefaultContent>;
  /**
      * Generates a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview the Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultPreview(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<EmailPreview>;
  /**
      * Gets an email template's settings.
      * Retrieve the Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  getEmailSettings(brandId: string, templateName: string, _options?: Configuration): Promise<EmailSettings>;
  /**
      * Gets the details of an email template by name.
      * Retrieve an Email Template
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getEmailTemplate(brandId: string, templateName: string, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Promise<EmailTemplate>;
  /**
      * List all the themes in your brand
      * List all Themes
      * @param brandId
      */
  listBrandThemes(brandId: string, _options?: Configuration): Promise<Collection<ThemeResponse>>;
  /**
      * List all the brands in your org.
      * List all Brands
      */
  listBrands(_options?: Configuration): Promise<Collection<Brand>>;
  /**
      * Lists all customizations of an email template.
      * List all Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      */
  listEmailCustomizations(brandId: string, templateName: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<EmailCustomization>>;
  /**
      * Lists all email templates.
      * List all Email Templates
      * @param brandId The ID of the brand.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param expand Specifies additional metadata to be included in the response.
      */
  listEmailTemplates(brandId: string, after?: string, limit?: number, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Promise<Collection<EmailTemplate>>;
  /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
      * Send a Test Email
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  sendTestEmail(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<void>;
  /**
      * Updates a brand by `brandId`
      * Replace a Brand
      * @param brandId
      * @param brand
      */
  updateBrand(brandId: string, brand: Brand, _options?: Configuration): Promise<Brand>;
  /**
      * Updates a theme for a brand
      * Replace a Theme
      * @param brandId
      * @param themeId
      * @param theme
      */
  updateBrandTheme(brandId: string, themeId: string, theme: Theme, _options?: Configuration): Promise<ThemeResponse>;
  /**
      * Updates an existing email customization using the property values provided.
      * Replace an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      * @param instance Request
      */
  updateEmailCustomization(brandId: string, templateName: string, customizationId: string, instance?: EmailCustomization, _options?: Configuration): Promise<EmailCustomization>;
  /**
      * Updates an email template's settings.
      * Replace the Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param EmailSettings
      */
  updateEmailSettings(brandId: string, templateName: string, EmailSettings?: EmailSettings, _options?: Configuration): Promise<void>;
  /**
      * Updates the background image for your Theme
      * Upload the Background Image
      * @param brandId
      * @param themeId
      */
  uploadBrandThemeBackgroundImage(brandId: string, themeId: string, _options?: Configuration): Promise<ImageUploadResponse>;
  /**
      * Updates the favicon for your theme
      * Upload the Favicon
      * @param brandId
      * @param themeId
      */
  uploadBrandThemeFavicon(brandId: string, themeId: string, _options?: Configuration): Promise<ImageUploadResponse>;
  /**
      * Updates the logo for your Theme
      * Upload the Logo
      * @param brandId
      * @param themeId
      */
  uploadBrandThemeLogo(brandId: string, themeId: string, _options?: Configuration): Promise<ImageUploadResponse>;
}
import { DomainApiRequestFactory, DomainApiResponseProcessor } from '../apis/DomainApi';
export declare class PromiseDomainApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: DomainApiRequestFactory, responseProcessor?: DomainApiResponseProcessor);
  /**
      * Creates the Certificate for the Domain.
      * Replace the Certificate
      * @param domainId
      * @param certificate
      */
  createCertificate(domainId: string, certificate: DomainCertificate, _options?: Configuration): Promise<void>;
  /**
      * Creates your domain.
      * Create a Domain
      * @param domain
      */
  createDomain(domain: Domain, _options?: Configuration): Promise<DomainResponse>;
  /**
      * Deletes a Domain by `id`.
      * Delete a Domain
      * @param domainId
      */
  deleteDomain(domainId: string, _options?: Configuration): Promise<void>;
  /**
      * Fetches a Domain by `id`.
      * Retrieve a Domain
      * @param domainId
      */
  getDomain(domainId: string, _options?: Configuration): Promise<DomainResponse>;
  /**
      * List all verified custom Domains for the org.
      * List all Domains
      */
  listDomains(_options?: Configuration): Promise<DomainListResponse>;
  /**
      * Verifies the Domain by `id`.
      * Verify a Domain
      * @param domainId
      */
  verifyDomain(domainId: string, _options?: Configuration): Promise<DomainResponse>;
}
import { EventHookApiRequestFactory, EventHookApiResponseProcessor } from '../apis/EventHookApi';
export declare class PromiseEventHookApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: EventHookApiRequestFactory, responseProcessor?: EventHookApiResponseProcessor);
  /**
      * Success
      * Activate an Event Hook
      * @param eventHookId
      */
  activateEventHook(eventHookId: string, _options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * Create an Event Hook
      * @param eventHook
      */
  createEventHook(eventHook: EventHook, _options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * Deactivate an Event Hook
      * @param eventHookId
      */
  deactivateEventHook(eventHookId: string, _options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * Delete an Event Hook
      * @param eventHookId
      */
  deleteEventHook(eventHookId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Retrieve an Event Hook
      * @param eventHookId
      */
  getEventHook(eventHookId: string, _options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * List all Event Hooks
      */
  listEventHooks(_options?: Configuration): Promise<Collection<EventHook>>;
  /**
      * Success
      * Replace an Event Hook
      * @param eventHookId
      * @param eventHook
      */
  updateEventHook(eventHookId: string, eventHook: EventHook, _options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * Verify an Event Hook
      * @param eventHookId
      */
  verifyEventHook(eventHookId: string, _options?: Configuration): Promise<EventHook>;
}
import { FeatureApiRequestFactory, FeatureApiResponseProcessor } from '../apis/FeatureApi';
export declare class PromiseFeatureApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: FeatureApiRequestFactory, responseProcessor?: FeatureApiResponseProcessor);
  /**
      * Success
      * Retrieve a Feature
      * @param featureId
      */
  getFeature(featureId: string, _options?: Configuration): Promise<Feature>;
  /**
      * Success
      * List all Dependencies
      * @param featureId
      */
  listFeatureDependencies(featureId: string, _options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Success
      * List all Dependents
      * @param featureId
      */
  listFeatureDependents(featureId: string, _options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Success
      * List all Features
      */
  listFeatures(_options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Success
      * Update a Feature Lifecycle
      * @param featureId
      * @param lifecycle
      * @param mode
      */
  updateFeatureLifecycle(featureId: string, lifecycle: string, mode?: string, _options?: Configuration): Promise<Feature>;
}
import { GroupApiRequestFactory, GroupApiResponseProcessor } from '../apis/GroupApi';
export declare class PromiseGroupApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: GroupApiRequestFactory, responseProcessor?: GroupApiResponseProcessor);
  /**
      * Activates a specific group rule by id from your organization
      * Activate a Group Rule
      * @param ruleId
      */
  activateGroupRule(ruleId: string, _options?: Configuration): Promise<void>;
  /**
      * Add App Instance Target to App Administrator Role given to a Group
      * Assign an Application Instance Target to Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Assign an Application Target to Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  addApplicationTargetToAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Promise<void>;
  /**
      * Enumerates group targets for a group role.
      * Assign a Group Target for Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  addGroupTargetToGroupAdministratorRoleForGroup(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Promise<void>;
  /**
      * Adds a user to a group with 'OKTA_GROUP' type.
      * Assign a User
      * @param groupId
      * @param userId
      */
  addUserToGroup(groupId: string, userId: string, _options?: Configuration): Promise<void>;
  /**
      * Assigns a Role to a Group
      * Assign a Role
      * @param groupId
      * @param assignRoleRequest
      * @param disableNotifications
      */
  assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: boolean, _options?: Configuration): Promise<Role | void>;
  /**
      * Adds a new group with `OKTA_GROUP` type to your organization.
      * Create a Group
      * @param group
      */
  createGroup(group: Group, _options?: Configuration): Promise<Group>;
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition
      * Create a Group Rule
      * @param groupRule
      */
  createGroupRule(groupRule: GroupRule, _options?: Configuration): Promise<GroupRule>;
  /**
      * Deactivates a specific group rule by id from your organization
      * Deactivate a Group Rule
      * @param ruleId
      */
  deactivateGroupRule(ruleId: string, _options?: Configuration): Promise<void>;
  /**
      * Removes a group with `OKTA_GROUP` type from your organization.
      * Delete a Group
      * @param groupId
      */
  deleteGroup(groupId: string, _options?: Configuration): Promise<void>;
  /**
      * Removes a specific group rule by id from your organization
      * Delete a group Rule
      * @param ruleId
      * @param removeUsers Indicates whether to keep or remove users from groups assigned by this rule.
      */
  deleteGroupRule(ruleId: string, removeUsers?: boolean, _options?: Configuration): Promise<void>;
  /**
      * Fetches a group from your organization.
      * List all Group Rules
      * @param groupId
      */
  getGroup(groupId: string, _options?: Configuration): Promise<Group>;
  /**
      * Fetches a specific group rule by id from your organization
      * Retrieve a Group Rule
      * @param ruleId
      * @param expand
      */
  getGroupRule(ruleId: string, expand?: string, _options?: Configuration): Promise<GroupRule>;
  /**
      * Success
      * Retrieve a Role
      * @param groupId
      * @param roleId
      */
  getRole(groupId: string, roleId: string, _options?: Configuration): Promise<Role>;
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for an Application Administrator Role
      * @param groupId
      * @param roleId
      * @param after
      * @param limit
      */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<CatalogApplication>>;
  /**
      * Enumerates all applications that are assigned to a group.
      * List all Assigned Applications
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of app results for a page
      */
  listAssignedApplicationsForGroup(groupId: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<Application>>;
  /**
      * Success
      * List all Assigned Roles
      * @param groupId
      * @param expand
      */
  listGroupAssignedRoles(groupId: string, expand?: string, _options?: Configuration): Promise<Collection<Role>>;
  /**
      * Lists all group rules for your organization.
      * List all Group Rules
      * @param limit Specifies the number of rule results in a page
      * @param after Specifies the pagination cursor for the next page of rules
      * @param search Specifies the keyword to search fules for
      * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
      */
  listGroupRules(limit?: number, after?: string, search?: string, expand?: string, _options?: Configuration): Promise<Collection<GroupRule>>;
  /**
      * Enumerates group targets for a group role.
      * List all Group Targets for a Group Role
      * @param groupId
      * @param roleId
      * @param after
      * @param limit
      */
  listGroupTargetsForGroupRole(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<Group>>;
  /**
      * Enumerates all users that are a member of a group.
      * List all Member Users
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of users
      * @param limit Specifies the number of user results in a page
      */
  listGroupUsers(groupId: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<User>>;
  /**
      * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
      * List all Groups
      * @param q Searches the name property of groups for matching value
      * @param search Filter expression for groups
      * @param after Specifies the pagination cursor for the next page of groups
      * @param limit Specifies the number of group results in a page
      * @param expand If specified, it causes additional metadata to be included in the response.
      */
  listGroups(q?: string, search?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Promise<Collection<Group>>;
  /**
      * Remove App Instance Target to App Administrator Role given to a Group
      * Delete an Application Instance Target to Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Delete an Application Target from Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Promise<void>;
  /**
      * remove group target for a group role.
      * Delete a Group Target for Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Promise<void>;
  /**
      * Unassigns a Role from a Group
      * Delete a Role
      * @param groupId
      * @param roleId
      */
  removeRoleFromGroup(groupId: string, roleId: string, _options?: Configuration): Promise<void>;
  /**
      * Removes a user from a group with 'OKTA_GROUP' type.
      * Unassign a User
      * @param groupId
      * @param userId
      */
  removeUserFromGroup(groupId: string, userId: string, _options?: Configuration): Promise<void>;
  /**
      * Updates the profile for a group with `OKTA_GROUP` type from your organization.
      * Replace a Group
      * @param groupId
      * @param group
      */
  updateGroup(groupId: string, group: Group, _options?: Configuration): Promise<Group>;
  /**
      * Updates a group rule. Only `INACTIVE` rules can be updated.
      * Replace a Group Rule
      * @param ruleId
      * @param groupRule
      */
  updateGroupRule(ruleId: string, groupRule: GroupRule, _options?: Configuration): Promise<GroupRule>;
}
import { IdentityProviderApiRequestFactory, IdentityProviderApiResponseProcessor } from '../apis/IdentityProviderApi';
export declare class PromiseIdentityProviderApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: IdentityProviderApiRequestFactory, responseProcessor?: IdentityProviderApiResponseProcessor);
  /**
      * Activates an inactive IdP.
      * Activate an Identity Provider
      * @param idpId
      */
  activateIdentityProvider(idpId: string, _options?: Configuration): Promise<IdentityProvider>;
  /**
      * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
      * Clone a Signing Credential Key
      * @param idpId
      * @param keyId
      * @param targetIdpId
      */
  cloneIdentityProviderKey(idpId: string, keyId: string, targetIdpId: string, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Adds a new IdP to your organization.
      * Create an Identity Provider
      * @param identityProvider
      */
  createIdentityProvider(identityProvider: IdentityProvider, _options?: Configuration): Promise<IdentityProvider>;
  /**
      * Adds a new X.509 certificate credential to the IdP key store.
      * Create an X.509 Certificate Public Key
      * @param jsonWebKey
      */
  createIdentityProviderKey(jsonWebKey: JsonWebKey, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Deactivates an active IdP.
      * Deactivate an Identity Provider
      * @param idpId
      */
  deactivateIdentityProvider(idpId: string, _options?: Configuration): Promise<IdentityProvider>;
  /**
      * Removes an IdP from your organization.
      * Delete an Identity Provider
      * @param idpId
      */
  deleteIdentityProvider(idpId: string, _options?: Configuration): Promise<void>;
  /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.
      * Delete a Signing Credential Key
      * @param keyId
      */
  deleteIdentityProviderKey(keyId: string, _options?: Configuration): Promise<void>;
  /**
      * Generates a new key pair and returns a Certificate Signing Request for it.
      * Generate a Certificate Signing Request
      * @param idpId
      * @param metadata
      */
  generateCsrForIdentityProvider(idpId: string, metadata: CsrMetadata, _options?: Configuration): Promise<Csr>;
  /**
      * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
      * Generate a new Signing Credential Key
      * @param idpId
      * @param validityYears expiry of the IdP Key Credential
      */
  generateIdentityProviderSigningKey(idpId: string, validityYears: number, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Gets a specific Certificate Signing Request model by id
      * Retrieve a Certificate Signing Request
      * @param idpId
      * @param csrId
      */
  getCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Promise<Csr>;
  /**
      * Fetches an IdP by `id`.
      * Retrieve an Identity Provider
      * @param idpId
      */
  getIdentityProvider(idpId: string, _options?: Configuration): Promise<IdentityProvider>;
  /**
      * Fetches a linked IdP user by ID
      * Retrieve a User
      * @param idpId
      * @param userId
      */
  getIdentityProviderApplicationUser(idpId: string, userId: string, _options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Gets a specific IdP Key Credential by `kid`
      * Retrieve an Credential Key
      * @param keyId
      */
  getIdentityProviderKey(keyId: string, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Gets a specific IdP Key Credential by `kid`
      * Retrieve a Signing Credential Key
      * @param idpId
      * @param keyId
      */
  getIdentityProviderSigningKey(idpId: string, keyId: string, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
      * Link a User to a Social IdP
      * @param idpId
      * @param userId
      * @param userIdentityProviderLinkRequest
      */
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest, _options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Enumerates Certificate Signing Requests for an IdP
      * List all Certificate Signing Requests
      * @param idpId
      */
  listCsrsForIdentityProvider(idpId: string, _options?: Configuration): Promise<Collection<Csr>>;
  /**
      * Find all the users linked to an identity provider
      * List all Users
      * @param idpId
      */
  listIdentityProviderApplicationUsers(idpId: string, _options?: Configuration): Promise<Collection<IdentityProviderApplicationUser>>;
  /**
      * Enumerates IdP key credentials.
      * List all Credential Keys
      * @param after Specifies the pagination cursor for the next page of keys
      * @param limit Specifies the number of key results in a page
      */
  listIdentityProviderKeys(after?: string, limit?: number, _options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Enumerates signing key credentials for an IdP
      * List all Signing Credential Keys
      * @param idpId
      */
  listIdentityProviderSigningKeys(idpId: string, _options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all Identity Providers
      * @param q Searches the name property of IdPs for matching value
      * @param after Specifies the pagination cursor for the next page of IdPs
      * @param limit Specifies the number of IdP results in a page
      * @param type Filters IdPs by type
      */
  listIdentityProviders(q?: string, after?: string, limit?: number, type?: string, _options?: Configuration): Promise<Collection<IdentityProvider>>;
  /**
      * Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.
      * List all Tokens from a OIDC Identity Provider
      * @param idpId
      * @param userId
      */
  listSocialAuthTokens(idpId: string, userId: string, _options?: Configuration): Promise<Collection<SocialAuthToken>>;
  /**
      * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
      * Publish a Certificate Signing Request
      * @param idpId
      * @param csrId
      * @param body
      */
  publishCsrForIdentityProvider(idpId: string, csrId: string, body: HttpFile, _options?: Configuration): Promise<JsonWebKey>;
  /**
      * Revoke a Certificate Signing Request and delete the key pair from the IdP
      * Revoke a Certificate Signing Request
      * @param idpId
      * @param csrId
      */
  revokeCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Promise<void>;
  /**
      * Removes the link between the Okta user and the IdP user.
      * Unlink a User from IdP
      * @param idpId
      * @param userId
      */
  unlinkUserFromIdentityProvider(idpId: string, userId: string, _options?: Configuration): Promise<void>;
  /**
      * Updates the configuration for an IdP.
      * Replace an Identity Provider
      * @param idpId
      * @param identityProvider
      */
  updateIdentityProvider(idpId: string, identityProvider: IdentityProvider, _options?: Configuration): Promise<IdentityProvider>;
}
import { InlineHookApiRequestFactory, InlineHookApiResponseProcessor } from '../apis/InlineHookApi';
export declare class PromiseInlineHookApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: InlineHookApiRequestFactory, responseProcessor?: InlineHookApiResponseProcessor);
  /**
      * Activates the Inline Hook matching the provided id
      * Activate an Inline Hook
      * @param inlineHookId
      */
  activateInlineHook(inlineHookId: string, _options?: Configuration): Promise<InlineHook>;
  /**
      * Success
      * Create an Inline Hook
      * @param inlineHook
      */
  createInlineHook(inlineHook: InlineHook, _options?: Configuration): Promise<InlineHook>;
  /**
      * Deactivates the Inline Hook matching the provided id
      * Deactivate an Inline Hook
      * @param inlineHookId
      */
  deactivateInlineHook(inlineHookId: string, _options?: Configuration): Promise<InlineHook>;
  /**
      * Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete an Inline Hook
      * @param inlineHookId
      */
  deleteInlineHook(inlineHookId: string, _options?: Configuration): Promise<void>;
  /**
      * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute an Inline Hook
      * @param inlineHookId
      * @param payloadData
      */
  executeInlineHook(inlineHookId: string, payloadData: any, _options?: Configuration): Promise<InlineHookResponse>;
  /**
      * Gets an inline hook by ID
      * Retrieve an Inline Hook
      * @param inlineHookId
      */
  getInlineHook(inlineHookId: string, _options?: Configuration): Promise<InlineHook>;
  /**
      * Success
      * List all Inline Hooks
      * @param type
      */
  listInlineHooks(type?: string, _options?: Configuration): Promise<Collection<InlineHook>>;
  /**
      * Updates an inline hook by ID
      * Replace an Inline Hook
      * @param inlineHookId
      * @param inlineHook
      */
  updateInlineHook(inlineHookId: string, inlineHook: InlineHook, _options?: Configuration): Promise<InlineHook>;
}
import { LinkedObjectApiRequestFactory, LinkedObjectApiResponseProcessor } from '../apis/LinkedObjectApi';
export declare class PromiseLinkedObjectApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: LinkedObjectApiRequestFactory, responseProcessor?: LinkedObjectApiResponseProcessor);
  /**
      * Success
      * Create a Linked Object Definition
      * @param linkedObject
      */
  addLinkedObjectDefinition(linkedObject: LinkedObject, _options?: Configuration): Promise<LinkedObject>;
  /**
      * Success
      * Delete a Linked Object Definition
      * @param linkedObjectName
      */
  deleteLinkedObjectDefinition(linkedObjectName: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Retrieve a Linked Object Definition
      * @param linkedObjectName
      */
  getLinkedObjectDefinition(linkedObjectName: string, _options?: Configuration): Promise<LinkedObject>;
  /**
      * Success
      * List all Linked Object Definitions
      */
  listLinkedObjectDefinitions(_options?: Configuration): Promise<Collection<LinkedObject>>;
}
import { NetworkZoneApiRequestFactory, NetworkZoneApiResponseProcessor } from '../apis/NetworkZoneApi';
export declare class PromiseNetworkZoneApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: NetworkZoneApiRequestFactory, responseProcessor?: NetworkZoneApiResponseProcessor);
  /**
      * Activate Network Zone
      * Activate a Network Zone
      * @param zoneId
      */
  activateNetworkZone(zoneId: string, _options?: Configuration): Promise<NetworkZone>;
  /**
      * Adds a new network zone to your Okta organization.
      * Create a Network Zone
      * @param zone
      */
  createNetworkZone(zone: NetworkZone, _options?: Configuration): Promise<NetworkZone>;
  /**
      * Deactivates a network zone.
      * Deactivate a Network Zone
      * @param zoneId
      */
  deactivateNetworkZone(zoneId: string, _options?: Configuration): Promise<NetworkZone>;
  /**
      * Removes network zone.
      * Delete a Network Zone
      * @param zoneId
      */
  deleteNetworkZone(zoneId: string, _options?: Configuration): Promise<void>;
  /**
      * Fetches a network zone from your Okta organization by `id`.
      * Retrieve a Network Zone
      * @param zoneId
      */
  getNetworkZone(zoneId: string, _options?: Configuration): Promise<NetworkZone>;
  /**
      * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
      * List all Network Zones
      * @param after Specifies the pagination cursor for the next page of network zones
      * @param limit Specifies the number of results for a page
      * @param filter Filters zones by usage or id expression
      */
  listNetworkZones(after?: string, limit?: number, filter?: string, _options?: Configuration): Promise<Collection<NetworkZone>>;
  /**
      * Updates a network zone in your organization.
      * Replace a Network Zone
      * @param zoneId
      * @param zone
      */
  updateNetworkZone(zoneId: string, zone: NetworkZone, _options?: Configuration): Promise<NetworkZone>;
}
import { OrgSettingApiRequestFactory, OrgSettingApiResponseProcessor } from '../apis/OrgSettingApi';
export declare class PromiseOrgSettingApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: OrgSettingApiRequestFactory, responseProcessor?: OrgSettingApiResponseProcessor);
  /**
      * A list of email addresses to be removed from the set of email addresses that are bounced.
      * Remove Emails from Email Provider Bounce List
      * @param BouncesRemoveListObj
      */
  bulkRemoveEmailAddressBounces(BouncesRemoveListObj?: BouncesRemoveListObj, _options?: Configuration): Promise<BouncesRemoveListResult>;
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
      * Extend Okta Support Access
      */
  extendOktaSupport(_options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Gets Okta Communication Settings of your organization.
      * Retreive the Okta Communication Settings
      */
  getOktaCommunicationSettings(_options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Gets Contact Types of your organization.
      * Retrieve the Org Contact Types
      */
  getOrgContactTypes(_options?: Configuration): Promise<Collection<OrgContactTypeObj>>;
  /**
      * Retrieves the URL of the User associated with the specified Contact Type.
      * Retrieve the User of the Contact Type
      * @param contactType
      */
  getOrgContactUser(contactType: string, _options?: Configuration): Promise<OrgContactUser>;
  /**
      * Gets Okta Support Settings of your organization.
      * Retrieve the Okta Support Settings
      */
  getOrgOktaSupportSettings(_options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Gets preferences of your organization.
      * Retrieve the Org Preferences
      */
  getOrgPreferences(_options?: Configuration): Promise<OrgPreferences>;
  /**
      * Get settings of your organization.
      * Retrieve the Org Settings
      */
  getOrgSettings(_options?: Configuration): Promise<OrgSetting>;
  /**
      * Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.
      * Grant Okta Support Access to your Org
      */
  grantOktaSupport(_options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Hide the Okta UI footer for all end users of your organization.
      * Update the Preference to Hide the Okta Dashboard Footer
      */
  hideOktaUIFooter(_options?: Configuration): Promise<OrgPreferences>;
  /**
      * Opts in all users of this org to Okta Communication emails.
      * Opt in all Users to Okta Communication emails
      */
  optInUsersToOktaCommunicationEmails(_options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Opts out all users of this org from Okta Communication emails.
      * Opt out all Users from Okta Communication emails
      */
  optOutUsersFromOktaCommunicationEmails(_options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Partial update settings of your organization.
      * Update the Org Settings
      * @param OrgSetting
      */
  partialUpdateOrgSetting(OrgSetting?: OrgSetting, _options?: Configuration): Promise<OrgSetting>;
  /**
      * Revokes Okta Support access to your organization.
      * Revoke Okta Support Access
      */
  revokeOktaSupport(_options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Makes the Okta UI footer visible for all end users of your organization.
      * Update the Preference to Show the Okta Dashboard Footer
      */
  showOktaUIFooter(_options?: Configuration): Promise<OrgPreferences>;
  /**
      * Updates the User associated with the specified Contact Type.
      * Replace the User of the Contact Type
      * @param contactType
      * @param orgContactUser
      */
  updateOrgContactUser(contactType: string, orgContactUser: OrgContactUser, _options?: Configuration): Promise<OrgContactUser>;
  /**
      * Updates the logo for your organization.
      * Upload the Org Logo
      */
  updateOrgLogo(_options?: Configuration): Promise<void>;
  /**
      * Update settings of your organization.
      * Replace the Org Settings
      * @param orgSetting
      */
  updateOrgSetting(orgSetting: OrgSetting, _options?: Configuration): Promise<OrgSetting>;
}
import { PolicyApiRequestFactory, PolicyApiResponseProcessor } from '../apis/PolicyApi';
export declare class PromisePolicyApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: PolicyApiRequestFactory, responseProcessor?: PolicyApiResponseProcessor);
  /**
      * Activates a policy.
      * Activate a Policy
      * @param policyId
      */
  activatePolicy(policyId: string, _options?: Configuration): Promise<void>;
  /**
      * Activates a policy rule.
      * Activate a Policy Rule
      * @param policyId
      * @param ruleId
      */
  activatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<void>;
  /**
      * Creates a policy.
      * Create a Policy
      * @param policy
      * @param activate
      */
  createPolicy(policy: Policy, activate?: boolean, _options?: Configuration): Promise<Policy>;
  /**
      * Creates a policy rule.
      * Create a Policy Rule
      * @param policyId
      * @param policyRule
      */
  createPolicyRule(policyId: string, policyRule: PolicyRule, _options?: Configuration): Promise<PolicyRule>;
  /**
      * Deactivates a policy.
      * Deactivate a Policy
      * @param policyId
      */
  deactivatePolicy(policyId: string, _options?: Configuration): Promise<void>;
  /**
      * Deactivates a policy rule.
      * Deactivate a Policy Rule
      * @param policyId
      * @param ruleId
      */
  deactivatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<void>;
  /**
      * Removes a policy.
      * Delete a Policy
      * @param policyId
      */
  deletePolicy(policyId: string, _options?: Configuration): Promise<void>;
  /**
      * Removes a policy rule.
      * Delete a Policy Rule
      * @param policyId
      * @param ruleId
      */
  deletePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<void>;
  /**
      * Gets a policy.
      * Retrieve a Policy
      * @param policyId
      * @param expand
      */
  getPolicy(policyId: string, expand?: string, _options?: Configuration): Promise<Policy>;
  /**
      * Gets a policy rule.
      * Retrieve a Policy Rule
      * @param policyId
      * @param ruleId
      */
  getPolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<PolicyRule>;
  /**
      * Gets all policies with the specified type.
      * List all Policies
      * @param type
      * @param status
      * @param expand
      */
  listPolicies(type: string, status?: string, expand?: string, _options?: Configuration): Promise<Collection<Policy>>;
  /**
      * Enumerates all policy rules.
      * List all Policy Rules
      * @param policyId
      */
  listPolicyRules(policyId: string, _options?: Configuration): Promise<Collection<PolicyRule>>;
  /**
      * Updates a policy.
      * Replace a Policy
      * @param policyId
      * @param policy
      */
  updatePolicy(policyId: string, policy: Policy, _options?: Configuration): Promise<Policy>;
  /**
      * Updates a policy rule.
      * Replace a Policy Rule
      * @param policyId
      * @param ruleId
      * @param policyRule
      */
  updatePolicyRule(policyId: string, ruleId: string, policyRule: PolicyRule, _options?: Configuration): Promise<PolicyRule>;
}
import { PrincipalRateLimitApiRequestFactory, PrincipalRateLimitApiResponseProcessor } from '../apis/PrincipalRateLimitApi';
export declare class PromisePrincipalRateLimitApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: PrincipalRateLimitApiRequestFactory, responseProcessor?: PrincipalRateLimitApiResponseProcessor);
  /**
      * Adds a new Principal Rate Limit entity to your organization. In the current release, we only allow one Principal Rate Limit entity per org and principal.
      * Create a Principal Rate Limit
      * @param entity
      */
  createPrincipalRateLimitEntity(entity: PrincipalRateLimitEntity, _options?: Configuration): Promise<PrincipalRateLimitEntity>;
  /**
      * Fetches a Principal Rate Limit entity by `principalRateLimitId`.
      * Retrieve a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      */
  getPrincipalRateLimitEntity(principalRateLimitId: string, _options?: Configuration): Promise<PrincipalRateLimitEntity>;
  /**
      * Lists all Principal Rate Limit entities considering the provided parameters.
      * List all Principal Rate Limits
      * @param filter
      * @param after
      * @param limit
      */
  listPrincipalRateLimitEntities(filter?: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<PrincipalRateLimitEntity>>;
  /**
      * Update a  Principal Rate Limit entity by `principalRateLimitId`.
      * Replace a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      * @param entity
      */
  updatePrincipalRateLimitEntity(principalRateLimitId: string, entity: PrincipalRateLimitEntity, _options?: Configuration): Promise<PrincipalRateLimitEntity>;
}
import { ProfileMappingApiRequestFactory, ProfileMappingApiResponseProcessor } from '../apis/ProfileMappingApi';
export declare class PromiseProfileMappingApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ProfileMappingApiRequestFactory, responseProcessor?: ProfileMappingApiResponseProcessor);
  /**
      * Fetches a single Profile Mapping referenced by its ID.
      * Retrieve a Profile Mapping
      * @param mappingId
      */
  getProfileMapping(mappingId: string, _options?: Configuration): Promise<ProfileMapping>;
  /**
      * Enumerates Profile Mappings in your organization with pagination.
      * List all Profile Mappings
      * @param after
      * @param limit
      * @param sourceId
      * @param targetId
      */
  listProfileMappings(after?: string, limit?: number, sourceId?: string, targetId?: string, _options?: Configuration): Promise<Collection<ProfileMapping>>;
  /**
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings.
      * Update a Profile Mapping
      * @param mappingId
      * @param profileMapping
      */
  updateProfileMapping(mappingId: string, profileMapping: ProfileMapping, _options?: Configuration): Promise<ProfileMapping>;
}
import { SchemaApiRequestFactory, SchemaApiResponseProcessor } from '../apis/SchemaApi';
export declare class PromiseSchemaApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SchemaApiRequestFactory, responseProcessor?: SchemaApiResponseProcessor);
  /**
      * Fetches the Schema for an App User
      * Retrieve the default Application User Schema for an Application
      * @param appInstanceId
      */
  getApplicationUserSchema(appInstanceId: string, _options?: Configuration): Promise<UserSchema>;
  /**
      * Fetches the group schema
      * Retrieve the default Group Schema
      */
  getGroupSchema(_options?: Configuration): Promise<GroupSchema>;
  /**
      * Fetches the schema for a Schema Id.
      * Retrieve a User Schema
      * @param schemaId
      */
  getUserSchema(schemaId: string, _options?: Configuration): Promise<UserSchema>;
  /**
      * Partial updates on the User Profile properties of the Application User Schema.
      * Update the default Application User Schema for an Application
      * @param appInstanceId
      * @param body
      */
  updateApplicationUserProfile(appInstanceId: string, body?: UserSchema, _options?: Configuration): Promise<UserSchema>;
  /**
      * Updates, adds or removes one or more custom Group Profile properties in the schema
      * Update the default Group Schema
      * @param GroupSchema
      */
  updateGroupSchema(GroupSchema?: GroupSchema, _options?: Configuration): Promise<GroupSchema>;
  /**
      * Partial updates on the User Profile properties of the user schema.
      * Update a User Schema
      * @param schemaId
      * @param userSchema
      */
  updateUserProfile(schemaId: string, userSchema: UserSchema, _options?: Configuration): Promise<UserSchema>;
}
import { SessionApiRequestFactory, SessionApiResponseProcessor } from '../apis/SessionApi';
export declare class PromiseSessionApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SessionApiRequestFactory, responseProcessor?: SessionApiResponseProcessor);
  /**
      * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
      * Create a Session with Session Token
      * @param createSessionRequest
      */
  createSession(createSessionRequest: CreateSessionRequest, _options?: Configuration): Promise<Session>;
  /**
      * End a session.
      * Delete a Session
      * @param sessionId
      */
  endSession(sessionId: string, _options?: Configuration): Promise<void>;
  /**
      * Get details about a session.
      * Retrieve a Session
      * @param sessionId
      */
  getSession(sessionId: string, _options?: Configuration): Promise<Session>;
  /**
      * Refresh a session.
      * Refresh a Session
      * @param sessionId
      */
  refreshSession(sessionId: string, _options?: Configuration): Promise<Session>;
}
import { SubscriptionApiRequestFactory, SubscriptionApiResponseProcessor } from '../apis/SubscriptionApi';
export declare class PromiseSubscriptionApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SubscriptionApiRequestFactory, responseProcessor?: SubscriptionApiResponseProcessor);
  /**
      * When roleType Get subscriptions of a Role with a specific notification type. Else when roleId Get subscription of a Custom Role with a specific notification type.
      * List all Subscriptions of a Custom Role with a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  getRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string, _options?: Configuration): Promise<Subscription>;
  /**
      * Get the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions by type
      * @param userId
      * @param notificationType
      */
  getUserSubscriptionByNotificationType(userId: string, notificationType: string, _options?: Configuration): Promise<Subscription>;
  /**
      * When roleType List all subscriptions of a Role. Else when roleId List subscriptions of a Custom Role
      * List all Subscriptions of a Custom Role
      * @param roleTypeOrRoleId
      */
  listRoleSubscriptions(roleTypeOrRoleId: string, _options?: Configuration): Promise<Collection<Subscription>>;
  /**
      * List subscriptions of a User. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions
      * @param userId
      */
  listUserSubscriptions(userId: string, _options?: Configuration): Promise<Collection<Subscription>>;
  /**
      * When roleType Subscribes a Role to a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Subscribes a Custom Role to a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
      * Subscribe a Custom Role to a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string, _options?: Configuration): Promise<void>;
  /**
      * Subscribes a User to a specific notification type. Only the current User can subscribe to a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Subscribe to a specific notification type
      * @param userId
      * @param notificationType
      */
  subscribeUserSubscriptionByNotificationType(userId: string, notificationType: string, _options?: Configuration): Promise<void>;
  /**
      * When roleType Unsubscribes a Role from a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Unsubscribes a Custom Role from a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
      * Unsubscribe a Custom Role from a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string, _options?: Configuration): Promise<void>;
  /**
      * Unsubscribes a User from a specific notification type. Only the current User can unsubscribe from a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Unsubscribe from a specific notification type
      * @param userId
      * @param notificationType
      */
  unsubscribeUserSubscriptionByNotificationType(userId: string, notificationType: string, _options?: Configuration): Promise<void>;
}
import { SystemLogApiRequestFactory, SystemLogApiResponseProcessor } from '../apis/SystemLogApi';
export declare class PromiseSystemLogApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SystemLogApiRequestFactory, responseProcessor?: SystemLogApiResponseProcessor);
  /**
      * The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * List all System Log Events
      * @param since
      * @param until
      * @param filter
      * @param q
      * @param limit
      * @param sortOrder
      * @param after
      */
  getLogs(since?: Date, until?: Date, filter?: string, q?: string, limit?: number, sortOrder?: string, after?: string, _options?: Configuration): Promise<Collection<LogEvent>>;
}
import { TemplateApiRequestFactory, TemplateApiResponseProcessor } from '../apis/TemplateApi';
export declare class PromiseTemplateApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: TemplateApiRequestFactory, responseProcessor?: TemplateApiResponseProcessor);
  /**
      * Adds a new custom SMS template to your organization.
      * Create an SMS Template
      * @param smsTemplate
      */
  createSmsTemplate(smsTemplate: SmsTemplate, _options?: Configuration): Promise<SmsTemplate>;
  /**
      * Removes an SMS template.
      * Delete an SMS Template
      * @param templateId
      */
  deleteSmsTemplate(templateId: string, _options?: Configuration): Promise<void>;
  /**
      * Fetches a specific template by `id`
      * Retrieve an SMS Template
      * @param templateId
      */
  getSmsTemplate(templateId: string, _options?: Configuration): Promise<SmsTemplate>;
  /**
      * Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.
      * List all SMS Templates
      * @param templateType
      */
  listSmsTemplates(templateType?: SmsTemplateType, _options?: Configuration): Promise<Collection<SmsTemplate>>;
  /**
      * Updates only some of the SMS template properties:
      * Update an SMS Template
      * @param templateId
      * @param smsTemplate
      */
  partialUpdateSmsTemplate(templateId: string, smsTemplate: SmsTemplate, _options?: Configuration): Promise<SmsTemplate>;
  /**
      * Updates the SMS template.
      * Replace an SMS Template
      * @param templateId
      * @param smsTemplate
      */
  updateSmsTemplate(templateId: string, smsTemplate: SmsTemplate, _options?: Configuration): Promise<SmsTemplate>;
}
import { ThreatInsightApiRequestFactory, ThreatInsightApiResponseProcessor } from '../apis/ThreatInsightApi';
export declare class PromiseThreatInsightApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ThreatInsightApiRequestFactory, responseProcessor?: ThreatInsightApiResponseProcessor);
  /**
      * Gets current ThreatInsight configuration
      * Retrieve the ThreatInsight Configuration
      */
  getCurrentConfiguration(_options?: Configuration): Promise<ThreatInsightConfiguration>;
  /**
      * Updates ThreatInsight configuration
      * Update the ThreatInsight Configuration
      * @param threatInsightConfiguration
      */
  updateConfiguration(threatInsightConfiguration: ThreatInsightConfiguration, _options?: Configuration): Promise<ThreatInsightConfiguration>;
}
import { TrustedOriginApiRequestFactory, TrustedOriginApiResponseProcessor } from '../apis/TrustedOriginApi';
export declare class PromiseTrustedOriginApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: TrustedOriginApiRequestFactory, responseProcessor?: TrustedOriginApiResponseProcessor);
  /**
      * Success
      * Activate a Trusted Origin
      * @param trustedOriginId
      */
  activateOrigin(trustedOriginId: string, _options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Success
      * Create a Trusted Origin
      * @param trustedOrigin
      */
  createOrigin(trustedOrigin: TrustedOrigin, _options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Success
      * Deactivate a Trusted Origin
      * @param trustedOriginId
      */
  deactivateOrigin(trustedOriginId: string, _options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Success
      * Delete a Trusted Origin
      * @param trustedOriginId
      */
  deleteOrigin(trustedOriginId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Retrieve a Trusted Origin
      * @param trustedOriginId
      */
  getOrigin(trustedOriginId: string, _options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Success
      * List all Trusted Origins
      * @param q
      * @param filter
      * @param after
      * @param limit
      */
  listOrigins(q?: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<TrustedOrigin>>;
  /**
      * Success
      * Replace a Trusted Origin
      * @param trustedOriginId
      * @param trustedOrigin
      */
  updateOrigin(trustedOriginId: string, trustedOrigin: TrustedOrigin, _options?: Configuration): Promise<TrustedOrigin>;
}
import { UserApiRequestFactory, UserApiResponseProcessor } from '../apis/UserApi';
export declare class PromiseUserApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor);
  /**
      * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
      * Activate a User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  activateUser(userId: string, sendEmail: boolean, _options?: Configuration): Promise<UserActivationToken>;
  /**
      * Assign all Apps as Target to Role
      * Assign all Apps as Target to Role
      * @param userId
      * @param roleId
      */
  addAllAppsAsTargetToRole(userId: string, roleId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Assign an Application Target to Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  addApplicationTargetToAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Promise<void>;
  /**
      * Add App Instance Target to App Administrator Role given to a User
      * Assign an Application Instance Target to an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  addApplicationTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<void>;
  /**
      * Assign a Group Target to Role
      * Assign a Group Target to Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  addGroupTargetToRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Promise<void>;
  /**
      * Assigns a role to a user.
      * Assign a Role
      * @param userId
      * @param assignRoleRequest
      * @param disableNotifications
      */
  assignRoleToUser(userId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: boolean, _options?: Configuration): Promise<Role>;
  /**
      * Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
      * Change Password
      * @param userId
      * @param changePasswordRequest
      * @param strict
      */
  changePassword(userId: string, changePasswordRequest: ChangePasswordRequest, strict?: boolean, _options?: Configuration): Promise<UserCredentials>;
  /**
      * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
      * Change Recovery Question
      * @param userId
      * @param userCredentials
      */
  changeRecoveryQuestion(userId: string, userCredentials: UserCredentials, _options?: Configuration): Promise<UserCredentials>;
  /**
      * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Delete all User Sessions
      * @param userId
      * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
      */
  clearUserSessions(userId: string, oauthTokens?: boolean, _options?: Configuration): Promise<void>;
  /**
      * Creates a new user in your Okta organization with or without credentials.
      * Create a User
      * @param body
      * @param activate Executes activation lifecycle operation when creating the user
      * @param provider Indicates whether to create a user with a specified authentication provider
      * @param nextLogin With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in.
      */
  createUser(body: CreateUserRequest, activate?: boolean, provider?: boolean, nextLogin?: UserNextLogin, _options?: Configuration): Promise<User>;
  /**
      * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
      * Delete a User
      * @param userId
      * @param sendEmail
      */
  deactivateOrDeleteUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<void>;
  /**
      * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
      * Deactivate a User
      * @param userId
      * @param sendEmail
      */
  deactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<void>;
  /**
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
      * Expire Password
      * @param userId
      */
  expirePassword(userId: string, _options?: Configuration): Promise<User>;
  /**
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response.
      * Expire Password and Set Temporary Password
      * @param userId
      */
  expirePasswordAndGetTemporaryPassword(userId: string, _options?: Configuration): Promise<TempPassword>;
  /**
      * Initiate forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
      * Initiate Forgot Password
      * @param userId
      * @param sendEmail
      */
  forgotPassword(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<ForgotPasswordResponse>;
  /**
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct.
      * Reset Password with Recovery Question
      * @param userId
      * @param userCredentials
      * @param sendEmail
      */
  forgotPasswordSetNewPassword(userId: string, userCredentials: UserCredentials, sendEmail?: boolean, _options?: Configuration): Promise<UserCredentials>;
  /**
      * Get linked objects for a user, relationshipName can be a primary or associated relationship name
      * List all Linked Objects
      * @param userId
      * @param relationshipName
      * @param after
      * @param limit
      */
  getLinkedObjectsForUser(userId: string, relationshipName: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<any>>;
  /**
      * Gets a refresh token issued for the specified User and Client.
      * Retrieve a Refresh Token for a Client
      * @param userId
      * @param clientId
      * @param tokenId
      * @param expand
      * @param limit
      * @param after
      */
  getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, expand?: string, limit?: number, after?: string, _options?: Configuration): Promise<OAuth2RefreshToken>;
  /**
      * Fetches a user from your Okta organization.
      * Retrieve a User
      * @param userId
      */
  getUser(userId: string, _options?: Configuration): Promise<User>;
  /**
      * Gets a grant for the specified user
      * Retrieve a User Grant
      * @param userId
      * @param grantId
      * @param expand
      */
  getUserGrant(userId: string, grantId: string, expand?: string, _options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Gets role that is assigned to user.
      * Retrieve a Role
      * @param userId
      * @param roleId
      */
  getUserRole(userId: string, roleId: string, _options?: Configuration): Promise<Role>;
  /**
      * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
      * List all Assigned Application Links
      * @param userId
      */
  listAppLinks(userId: string, _options?: Configuration): Promise<Collection<AppLink>>;
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for Application Administrator Role
      * @param userId
      * @param roleId
      * @param after
      * @param limit
      */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<CatalogApplication>>;
  /**
      * Lists all roles assigned to a user.
      * List all Assigned Roles
      * @param userId
      * @param expand
      */
  listAssignedRolesForUser(userId: string, expand?: string, _options?: Configuration): Promise<Collection<Role>>;
  /**
      * Lists all grants for a specified user and client
      * List all Grants for a Client
      * @param userId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listGrantsForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Success
      * List all Group Targets for Role
      * @param userId
      * @param roleId
      * @param after
      * @param limit
      */
  listGroupTargetsForRole(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<Group>>;
  /**
      * Lists all refresh tokens issued for the specified User and Client.
      * List all Refresh Tokens for a Client
      * @param userId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listRefreshTokensForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<OAuth2RefreshToken>>;
  /**
      * Lists all client resources for which the specified user has grants or tokens.
      * List all Clients
      * @param userId
      */
  listUserClients(userId: string, _options?: Configuration): Promise<Collection<OAuth2Client>>;
  /**
      * Lists all grants for the specified user
      * List all User Grants
      * @param userId
      * @param scopeId
      * @param expand
      * @param after
      * @param limit
      */
  listUserGrants(userId: string, scopeId?: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Fetches the groups of which the user is a member.
      * List all Groups
      * @param userId
      */
  listUserGroups(userId: string, _options?: Configuration): Promise<Collection<Group>>;
  /**
      * Lists the IdPs associated with the user.
      * List all Identity Providers
      * @param userId
      */
  listUserIdentityProviders(userId: string, _options?: Configuration): Promise<Collection<IdentityProvider>>;
  /**
      * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List all Users
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      * @param q Finds a user that matches firstName, lastName, and email properties
      * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
      * @param filter Filters users with a supported expression for a subset of properties
      * @param search Searches for users with a supported filtering  expression for most properties
      * @param sortBy
      * @param sortOrder
      */
  listUsers(after?: string, q?: string, limit?: number, filter?: string, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Promise<Collection<User>>;
  /**
      * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
      * Update a User
      * @param userId
      * @param user
      * @param strict
      */
  partialUpdateUser(userId: string, user: UpdateUserRequest, strict?: boolean, _options?: Configuration): Promise<User>;
  /**
      * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
      * Reactivate a User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  reactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<UserActivationToken>;
  /**
      * Remove App Instance Target to App Administrator Role given to a User
      * Unassign an Application Instance Target to Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  removeApplicationTargetFromAdministratorRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<void>;
  /**
      * Success
      * Unassign an Application Target from Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  removeApplicationTargetFromApplicationAdministratorRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Promise<void>;
  /**
      * Unassign a Group Target from Role
      * Unassign a Group Target from Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  removeGroupTargetFromRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Promise<void>;
  /**
      * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Delete a Linked Object
      * @param userId
      * @param relationshipName
      */
  removeLinkedObjectForUser(userId: string, relationshipName: string, _options?: Configuration): Promise<void>;
  /**
      * Unassigns a role from a user.
      * Delete a Role
      * @param userId
      * @param roleId
      */
  removeRoleFromUser(userId: string, roleId: string, _options?: Configuration): Promise<void>;
  /**
      * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset all Factors
      * @param userId
      */
  resetFactors(userId: string, _options?: Configuration): Promise<void>;
  /**
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Reset Password
      * @param userId
      * @param sendEmail
      */
  resetPassword(userId: string, sendEmail: boolean, _options?: Configuration): Promise<ResetPasswordToken>;
  /**
      * Revokes all grants for the specified user and client
      * Revoke all Grants for a Client
      * @param userId
      * @param clientId
      */
  revokeGrantsForUserAndClient(userId: string, clientId: string, _options?: Configuration): Promise<void>;
  /**
      * Revokes the specified refresh token.
      * Revoke a Token for a Client
      * @param userId
      * @param clientId
      * @param tokenId
      */
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string, _options?: Configuration): Promise<void>;
  /**
      * Revokes all refresh tokens issued for the specified User and Client.
      * Revoke all Refresh Tokens for a Client
      * @param userId
      * @param clientId
      */
  revokeTokensForUserAndClient(userId: string, clientId: string, _options?: Configuration): Promise<void>;
  /**
      * Revokes one grant for a specified user
      * Revoke a User Grant
      * @param userId
      * @param grantId
      */
  revokeUserGrant(userId: string, grantId: string, _options?: Configuration): Promise<void>;
  /**
      * Revokes all grants for a specified user
      * Revoke all User Grants
      * @param userId
      */
  revokeUserGrants(userId: string, _options?: Configuration): Promise<void>;
  /**
      * Sets a linked object for two users.
      * Create a Linked Object for two User
      * @param associatedUserId
      * @param primaryRelationshipName
      * @param primaryUserId
      */
  setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string, _options?: Configuration): Promise<void>;
  /**
      * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
      * Suspend a User
      * @param userId
      */
  suspendUser(userId: string, _options?: Configuration): Promise<void>;
  /**
      * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
      * Unlock a User
      * @param userId
      */
  unlockUser(userId: string, _options?: Configuration): Promise<void>;
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a User
      * @param userId
      */
  unsuspendUser(userId: string, _options?: Configuration): Promise<void>;
  /**
      * Update a user's profile and/or credentials using strict-update semantics.
      * Replace a User
      * @param userId
      * @param user
      * @param strict
      */
  updateUser(userId: string, user: UpdateUserRequest, strict?: boolean, _options?: Configuration): Promise<User>;
}
import { UserFactorApiRequestFactory, UserFactorApiResponseProcessor } from '../apis/UserFactorApi';
export declare class PromiseUserFactorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UserFactorApiRequestFactory, responseProcessor?: UserFactorApiResponseProcessor);
  /**
      * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate a Factor
      * @param userId
      * @param factorId
      * @param body
      */
  activateFactor(userId: string, factorId: string, body?: ActivateFactorRequest, _options?: Configuration): Promise<UserFactor>;
  /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
      * Delete a Factor
      * @param userId
      * @param factorId
      * @param removeEnrollmentRecovery
      */
  deleteFactor(userId: string, factorId: string, removeEnrollmentRecovery?: boolean, _options?: Configuration): Promise<void>;
  /**
      * Enrolls a user with a supported factor.
      * Enroll a Factor
      * @param userId
      * @param body Factor
      * @param updatePhone
      * @param templateId id of SMS template (only for SMS factor)
      * @param tokenLifetimeSeconds
      * @param activate
      */
  enrollFactor(userId: string, body: UserFactor, updatePhone?: boolean, templateId?: string, tokenLifetimeSeconds?: number, activate?: boolean, _options?: Configuration): Promise<UserFactor>;
  /**
      * Fetches a factor for the specified user
      * Retrieve a Factor
      * @param userId
      * @param factorId
      */
  getFactor(userId: string, factorId: string, _options?: Configuration): Promise<UserFactor>;
  /**
      * Polls factors verification transaction for status.
      * Retrieve a Factor Transaction Status
      * @param userId
      * @param factorId
      * @param transactionId
      */
  getFactorTransactionStatus(userId: string, factorId: string, transactionId: string, _options?: Configuration): Promise<VerifyUserFactorResponse>;
  /**
      * Enumerates all the enrolled factors for the specified user
      * List all Factors
      * @param userId
      */
  listFactors(userId: string, _options?: Configuration): Promise<Collection<UserFactor>>;
  /**
      * Enumerates all the supported factors that can be enrolled for the specified user
      * List all Supported Factors
      * @param userId
      */
  listSupportedFactors(userId: string, _options?: Configuration): Promise<Collection<UserFactor>>;
  /**
      * Enumerates all available security questions for a user's `question` factor
      * List all Supported Security Questions
      * @param userId
      */
  listSupportedSecurityQuestions(userId: string, _options?: Configuration): Promise<Collection<SecurityQuestion>>;
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
  verifyFactor(userId: string, factorId: string, templateId?: string, tokenLifetimeSeconds?: number, X_Forwarded_For?: string, User_Agent?: string, Accept_Language?: string, body?: VerifyFactorRequest, _options?: Configuration): Promise<VerifyUserFactorResponse>;
}
import { UserTypeApiRequestFactory, UserTypeApiResponseProcessor } from '../apis/UserTypeApi';
export declare class PromiseUserTypeApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UserTypeApiRequestFactory, responseProcessor?: UserTypeApiResponseProcessor);
  /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * Create a User Type
      * @param userType
      */
  createUserType(userType: UserType, _options?: Configuration): Promise<UserType>;
  /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * Delete a User Type
      * @param typeId
      */
  deleteUserType(typeId: string, _options?: Configuration): Promise<void>;
  /**
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Retrieve a User Type
      * @param typeId
      */
  getUserType(typeId: string, _options?: Configuration): Promise<UserType>;
  /**
      * Fetches all User Types in your org
      * List all User Types
      */
  listUserTypes(_options?: Configuration): Promise<Collection<UserType>>;
  /**
      * Replace an existing User Type
      * Replace a User Type
      * @param typeId
      * @param userType
      */
  replaceUserType(typeId: string, userType: UserType, _options?: Configuration): Promise<UserType>;
  /**
      * Updates an existing User Type
      * Update a User Type
      * @param typeId
      * @param userType
      */
  updateUserType(typeId: string, userType: UserType, _options?: Configuration): Promise<UserType>;
}
