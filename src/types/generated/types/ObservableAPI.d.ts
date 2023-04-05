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
import { Observable } from '../rxjsStub';
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
import { ApplicationLayout } from '../models/ApplicationLayout';
import { ApplicationLayouts } from '../models/ApplicationLayouts';
import { AssignRoleRequest } from '../models/AssignRoleRequest';
import { Authenticator } from '../models/Authenticator';
import { AuthorizationServer } from '../models/AuthorizationServer';
import { AuthorizationServerPolicy } from '../models/AuthorizationServerPolicy';
import { AuthorizationServerPolicyRule } from '../models/AuthorizationServerPolicyRule';
import { BehaviorRule } from '../models/BehaviorRule';
import { BouncesRemoveListObj } from '../models/BouncesRemoveListObj';
import { BouncesRemoveListResult } from '../models/BouncesRemoveListResult';
import { Brand } from '../models/Brand';
import { BrandDomains } from '../models/BrandDomains';
import { BrandRequest } from '../models/BrandRequest';
import { BulkDeleteRequestBody } from '../models/BulkDeleteRequestBody';
import { BulkUpsertRequestBody } from '../models/BulkUpsertRequestBody';
import { CAPTCHAInstance } from '../models/CAPTCHAInstance';
import { CapabilitiesObject } from '../models/CapabilitiesObject';
import { CatalogApplication } from '../models/CatalogApplication';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { CreateBrandRequest } from '../models/CreateBrandRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateUserRequest } from '../models/CreateUserRequest';
import { Csr } from '../models/Csr';
import { CsrMetadata } from '../models/CsrMetadata';
import { Device } from '../models/Device';
import { DeviceAssurance } from '../models/DeviceAssurance';
import { Domain } from '../models/Domain';
import { DomainCertificate } from '../models/DomainCertificate';
import { DomainListResponse } from '../models/DomainListResponse';
import { DomainResponse } from '../models/DomainResponse';
import { EmailCustomization } from '../models/EmailCustomization';
import { EmailDefaultContent } from '../models/EmailDefaultContent';
import { EmailDomain } from '../models/EmailDomain';
import { EmailDomainListResponse } from '../models/EmailDomainListResponse';
import { EmailDomainResponse } from '../models/EmailDomainResponse';
import { EmailPreview } from '../models/EmailPreview';
import { EmailSettings } from '../models/EmailSettings';
import { EmailTemplate } from '../models/EmailTemplate';
import { ErrorPage } from '../models/ErrorPage';
import { EventHook } from '../models/EventHook';
import { Feature } from '../models/Feature';
import { ForgotPasswordResponse } from '../models/ForgotPasswordResponse';
import { Group } from '../models/Group';
import { GroupOwner } from '../models/GroupOwner';
import { GroupRule } from '../models/GroupRule';
import { GroupSchema } from '../models/GroupSchema';
import { HookKey } from '../models/HookKey';
import { HostedPage } from '../models/HostedPage';
import { IamRole } from '../models/IamRole';
import { IamRoles } from '../models/IamRoles';
import { IdentityProvider } from '../models/IdentityProvider';
import { IdentityProviderApplicationUser } from '../models/IdentityProviderApplicationUser';
import { IdentitySourceSession } from '../models/IdentitySourceSession';
import { ImageUploadResponse } from '../models/ImageUploadResponse';
import { InlineHook } from '../models/InlineHook';
import { InlineHookPayload } from '../models/InlineHookPayload';
import { InlineHookResponse } from '../models/InlineHookResponse';
import { JsonWebKey } from '../models/JsonWebKey';
import { JwkUse } from '../models/JwkUse';
import { KeyRequest } from '../models/KeyRequest';
import { LinkedObject } from '../models/LinkedObject';
import { LogEvent } from '../models/LogEvent';
import { LogStream } from '../models/LogStream';
import { LogStreamSchema } from '../models/LogStreamSchema';
import { LogStreamType } from '../models/LogStreamType';
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
import { PageRoot } from '../models/PageRoot';
import { PerClientRateLimitSettings } from '../models/PerClientRateLimitSettings';
import { Permission } from '../models/Permission';
import { Permissions } from '../models/Permissions';
import { Policy } from '../models/Policy';
import { PolicyRule } from '../models/PolicyRule';
import { PrincipalRateLimitEntity } from '../models/PrincipalRateLimitEntity';
import { ProfileMapping } from '../models/ProfileMapping';
import { ProviderType } from '../models/ProviderType';
import { ProvisioningConnection } from '../models/ProvisioningConnection';
import { ProvisioningConnectionRequest } from '../models/ProvisioningConnectionRequest';
import { PushProvider } from '../models/PushProvider';
import { RateLimitAdminNotifications } from '../models/RateLimitAdminNotifications';
import { ResetPasswordToken } from '../models/ResetPasswordToken';
import { ResourceSet } from '../models/ResourceSet';
import { ResourceSetBindingAddMembersRequest } from '../models/ResourceSetBindingAddMembersRequest';
import { ResourceSetBindingCreateRequest } from '../models/ResourceSetBindingCreateRequest';
import { ResourceSetBindingMember } from '../models/ResourceSetBindingMember';
import { ResourceSetBindingMembers } from '../models/ResourceSetBindingMembers';
import { ResourceSetBindingResponse } from '../models/ResourceSetBindingResponse';
import { ResourceSetBindings } from '../models/ResourceSetBindings';
import { ResourceSetResourcePatchRequest } from '../models/ResourceSetResourcePatchRequest';
import { ResourceSetResources } from '../models/ResourceSetResources';
import { ResourceSets } from '../models/ResourceSets';
import { ResponseLinks } from '../models/ResponseLinks';
import { RiskEvent } from '../models/RiskEvent';
import { RiskProvider } from '../models/RiskProvider';
import { Role } from '../models/Role';
import { SecurityQuestion } from '../models/SecurityQuestion';
import { Session } from '../models/Session';
import { SignInPage } from '../models/SignInPage';
import { SmsTemplate } from '../models/SmsTemplate';
import { SmsTemplateType } from '../models/SmsTemplateType';
import { SocialAuthToken } from '../models/SocialAuthToken';
import { Subscription } from '../models/Subscription';
import { TempPassword } from '../models/TempPassword';
import { Theme } from '../models/Theme';
import { ThemeResponse } from '../models/ThemeResponse';
import { ThreatInsightConfiguration } from '../models/ThreatInsightConfiguration';
import { TrustedOrigin } from '../models/TrustedOrigin';
import { UpdateDomain } from '../models/UpdateDomain';
import { UpdateEmailDomain } from '../models/UpdateEmailDomain';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserActivationToken } from '../models/UserActivationToken';
import { UserBlock } from '../models/UserBlock';
import { UserCredentials } from '../models/UserCredentials';
import { UserFactor } from '../models/UserFactor';
import { UserIdentityProviderLinkRequest } from '../models/UserIdentityProviderLinkRequest';
import { UserLockoutSettings } from '../models/UserLockoutSettings';
import { UserNextLogin } from '../models/UserNextLogin';
import { UserSchema } from '../models/UserSchema';
import { UserType } from '../models/UserType';
import { VerifyFactorRequest } from '../models/VerifyFactorRequest';
import { VerifyUserFactorResponse } from '../models/VerifyUserFactorResponse';
import { WellKnownAppAuthenticatorConfiguration } from '../models/WellKnownAppAuthenticatorConfiguration';
import { WellKnownOrgMetadata } from '../models/WellKnownOrgMetadata';
import { AgentPoolsApiRequestFactory, AgentPoolsApiResponseProcessor } from '../apis/AgentPoolsApi';
export declare class ObservableAgentPoolsApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: AgentPoolsApiRequestFactory, responseProcessor?: AgentPoolsApiResponseProcessor);
  /**
      * Activates scheduled Agent pool update
      * Activate an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  activateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.
      * Create an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdate
      */
  createAgentPoolsUpdate(poolId: string, AgentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Deactivates scheduled Agent pool update
      * Deactivate an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deactivateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Deletes Agent pool update
      * Delete an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deleteAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves Agent pool update from updateId
      * Retrieve an Agent Pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  getAgentPoolsUpdateInstance(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Retrieves the current state of the agent pool update instance settings
      * Retrieve an Agent Pool update's settings
      * @param poolId Id of the agent pool for which the settings will apply
      */
  getAgentPoolsUpdateSettings(poolId: string, _options?: Configuration): Observable<AgentPoolUpdateSetting>;
  /**
      * Lists all agent pools with pagination support
      * List all Agent Pools
      * @param limitPerPoolType Maximum number of AgentPools being returned
      * @param poolType Agent type to search for
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listAgentPools(limitPerPoolType?: number, poolType?: AgentType, after?: string, _options?: Configuration): Observable<Collection<AgentPool>>;
  /**
      * Lists all agent pool updates
      * List all Agent Pool updates
      * @param poolId Id of the agent pool for which the settings will apply
      * @param scheduled Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates.
      */
  listAgentPoolsUpdates(poolId: string, scheduled?: boolean, _options?: Configuration): Observable<Collection<AgentPoolUpdate>>;
  /**
      * Pauses running or queued Agent pool update
      * Pause an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  pauseAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Resumes running or queued Agent pool update
      * Resume an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  resumeAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Retries Agent pool update
      * Retry an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  retryAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Stops Agent pool update
      * Stop an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  stopAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Updates Agent pool update and return latest agent pool update
      * Update an Agent Pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      * @param AgentPoolUpdate
      */
  updateAgentPoolsUpdate(poolId: string, updateId: string, AgentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Updates an agent pool update settings
      * Update an Agent Pool update settings
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdateSetting
      */
  updateAgentPoolsUpdateSettings(poolId: string, AgentPoolUpdateSetting: AgentPoolUpdateSetting, _options?: Configuration): Observable<AgentPoolUpdateSetting>;
}
import { ApiTokenApiRequestFactory, ApiTokenApiResponseProcessor } from '../apis/ApiTokenApi';
export declare class ObservableApiTokenApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ApiTokenApiRequestFactory, responseProcessor?: ApiTokenApiResponseProcessor);
  /**
      * Retrieves the metadata for an active API token by id
      * Retrieve an API Token's Metadata
      * @param apiTokenId id of the API Token
      */
  getApiToken(apiTokenId: string, _options?: Configuration): Observable<ApiToken>;
  /**
      * Lists all the metadata of the active API tokens
      * List all API Token Metadata
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param q Finds a token that matches the name or clientName.
      */
  listApiTokens(after?: string, limit?: number, q?: string, _options?: Configuration): Observable<Collection<ApiToken>>;
  /**
      * Revokes an API token by `apiTokenId`
      * Revoke an API Token
      * @param apiTokenId id of the API Token
      */
  revokeApiToken(apiTokenId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes the API token provided in the Authorization header
      * Revoke the Current API Token
      */
  revokeCurrentApiToken(_options?: Configuration): Observable<void>;
}
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor } from '../apis/ApplicationApi';
export declare class ObservableApplicationApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ApplicationApiRequestFactory, responseProcessor?: ApplicationApiResponseProcessor);
  /**
      * Activates an inactive application
      * Activate an Application
      * @param appId
      */
  activateApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Activates the default Provisioning Connection for an application
      * Activate the default Provisioning Connection
      * @param appId
      */
  activateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns an application to a policy identified by `policyId`. If the application was previously assigned to another policy, this removes that assignment.
      * Assign an Application to a Policy
      * @param appId
      * @param policyId
      */
  assignApplicationPolicy(appId: string, policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns a group to an application
      * Assign a Group
      * @param appId
      * @param groupId
      * @param applicationGroupAssignment
      */
  assignGroupToApplication(appId: string, groupId: string, applicationGroupAssignment?: ApplicationGroupAssignment, _options?: Configuration): Observable<ApplicationGroupAssignment>;
  /**
      * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
      * Assign a User
      * @param appId
      * @param appUser
      */
  assignUserToApplication(appId: string, appUser: AppUser, _options?: Configuration): Observable<AppUser>;
  /**
      * Clones a X.509 certificate for an application key credential from a source application to target application.
      * Clone a Key Credential
      * @param appId
      * @param keyId
      * @param targetAid Unique key of the target Application
      */
  cloneApplicationKey(appId: string, keyId: string, targetAid: string, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Creates a new application to your Okta organization
      * Create an Application
      * @param application
      * @param activate Executes activation lifecycle operation when creating the app
      * @param OktaAccessGateway_Agent
      */
  createApplication(application: Application, activate?: boolean, OktaAccessGateway_Agent?: string, _options?: Configuration): Observable<Application>;
  /**
      * Deactivates an active application
      * Deactivate an Application
      * @param appId
      */
  deactivateApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates the default Provisioning Connection for an application
      * Deactivate the default Provisioning Connection for an Application
      * @param appId
      */
  deactivateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes an inactive application
      * Delete an Application
      * @param appId
      */
  deleteApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Generates a new X.509 certificate for an application key credential
      * Generate a Key Credential
      * @param appId
      * @param validityYears
      */
  generateApplicationKey(appId: string, validityYears?: number, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Generates a new key pair and returns the Certificate Signing Request for it
      * Generate a Certificate Signing Request
      * @param appId
      * @param metadata
      */
  generateCsrForApplication(appId: string, metadata: CsrMetadata, _options?: Configuration): Observable<Csr>;
  /**
      * Retrieves an application from your Okta organization by `id`
      * Retrieve an Application
      * @param appId
      * @param expand
      */
  getApplication(appId: string, expand?: string, _options?: Configuration): Observable<Application>;
  /**
      * Retrieves an application group assignment
      * Retrieve an Assigned Group
      * @param appId
      * @param groupId
      * @param expand
      */
  getApplicationGroupAssignment(appId: string, groupId: string, expand?: string, _options?: Configuration): Observable<ApplicationGroupAssignment>;
  /**
      * Retrieves a specific application key credential by kid
      * Retrieve a Key Credential
      * @param appId
      * @param keyId
      */
  getApplicationKey(appId: string, keyId: string, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Retrieves a specific user assignment for application by `id`
      * Retrieve an Assigned User
      * @param appId
      * @param userId
      * @param expand
      */
  getApplicationUser(appId: string, userId: string, expand?: string, _options?: Configuration): Observable<AppUser>;
  /**
      * Retrieves a certificate signing request for the app by `id`
      * Retrieve a Certificate Signing Request
      * @param appId
      * @param csrId
      */
  getCsrForApplication(appId: string, csrId: string, _options?: Configuration): Observable<Csr>;
  /**
      * Retrieves the default Provisioning Connection for application
      * Retrieve the default Provisioning Connection
      * @param appId
      */
  getDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Observable<ProvisioningConnection>;
  /**
      * Retrieves a Feature object for an application
      * Retrieve a Feature
      * @param appId
      * @param name
      */
  getFeatureForApplication(appId: string, name: string, _options?: Configuration): Observable<ApplicationFeature>;
  /**
      * Retrieves a token for the specified application
      * Retrieve an OAuth 2.0 Token
      * @param appId
      * @param tokenId
      * @param expand
      */
  getOAuth2TokenForApplication(appId: string, tokenId: string, expand?: string, _options?: Configuration): Observable<OAuth2Token>;
  /**
      * Retrieves a single scope consent grant for the application
      * Retrieve a Scope Consent Grant
      * @param appId
      * @param grantId
      * @param expand
      */
  getScopeConsentGrant(appId: string, grantId: string, expand?: string, _options?: Configuration): Observable<OAuth2ScopeConsentGrant>;
  /**
      * Grants consent for the application to request an OAuth 2.0 Okta scope
      * Grant Consent to Scope
      * @param appId
      * @param oAuth2ScopeConsentGrant
      */
  grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant, _options?: Configuration): Observable<OAuth2ScopeConsentGrant>;
  /**
      * Lists all group assignments for an application
      * List all Assigned Groups
      * @param appId
      * @param q
      * @param after Specifies the pagination cursor for the next page of assignments
      * @param limit Specifies the number of results for a page
      * @param expand
      */
  listApplicationGroupAssignments(appId: string, q?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Observable<Collection<ApplicationGroupAssignment>>;
  /**
      * Lists all key credentials for an application
      * List all Key Credentials
      * @param appId
      */
  listApplicationKeys(appId: string, _options?: Configuration): Observable<Collection<JsonWebKey>>;
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
  listApplicationUsers(appId: string, q?: string, query_scope?: string, after?: string, limit?: number, filter?: string, expand?: string, _options?: Configuration): Observable<Collection<AppUser>>;
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
  listApplications(q?: string, after?: string, limit?: number, filter?: string, expand?: string, includeNonDeleted?: boolean, _options?: Configuration): Observable<Collection<Application>>;
  /**
      * Lists all Certificate Signing Requests for an application
      * List all Certificate Signing Requests
      * @param appId
      */
  listCsrsForApplication(appId: string, _options?: Configuration): Observable<Collection<Csr>>;
  /**
      * Lists all features for an application
      * List all Features
      * @param appId
      */
  listFeaturesForApplication(appId: string, _options?: Configuration): Observable<Collection<ApplicationFeature>>;
  /**
      * Lists all tokens for the application
      * List all OAuth 2.0 Tokens
      * @param appId
      * @param expand
      * @param after
      * @param limit
      */
  listOAuth2TokensForApplication(appId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2Token>>;
  /**
      * Lists all scope consent grants for the application
      * List all Scope Consent Grants
      * @param appId
      * @param expand
      */
  listScopeConsentGrants(appId: string, expand?: string, _options?: Configuration): Observable<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Publishes a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish a Certificate Signing Request
      * @param appId
      * @param csrId
      * @param body
      */
  publishCsrFromApplication(appId: string, csrId: string, body: HttpFile, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Replaces an application
      * Replace an Application
      * @param appId
      * @param application
      */
  replaceApplication(appId: string, application: Application, _options?: Configuration): Observable<Application>;
  /**
      * Revokes a certificate signing request and deletes the key pair from the application
      * Revoke a Certificate Signing Request
      * @param appId
      * @param csrId
      */
  revokeCsrFromApplication(appId: string, csrId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes the specified token for the specified application
      * Revoke an OAuth 2.0 Token
      * @param appId
      * @param tokenId
      */
  revokeOAuth2TokenForApplication(appId: string, tokenId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all tokens for the specified application
      * Revoke all OAuth 2.0 Tokens
      * @param appId
      */
  revokeOAuth2TokensForApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes permission for the application to request the given scope
      * Revoke a Scope Consent Grant
      * @param appId
      * @param grantId
      */
  revokeScopeConsentGrant(appId: string, grantId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a group from an application
      * Unassign a Group
      * @param appId
      * @param groupId
      */
  unassignApplicationFromGroup(appId: string, groupId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a user from an application
      * Unassign a User
      * @param appId
      * @param userId
      * @param sendEmail
      */
  unassignUserFromApplication(appId: string, userId: string, sendEmail?: boolean, _options?: Configuration): Observable<void>;
  /**
      * Updates a user's profile for an application
      * Update an Application Profile for Assigned User
      * @param appId
      * @param userId
      * @param appUser
      */
  updateApplicationUser(appId: string, userId: string, appUser: AppUser, _options?: Configuration): Observable<AppUser>;
  /**
      * Updates the default provisioning connection for application
      * Update the default Provisioning Connection
      * @param appId
      * @param ProvisioningConnectionRequest
      * @param activate
      */
  updateDefaultProvisioningConnectionForApplication(appId: string, ProvisioningConnectionRequest: ProvisioningConnectionRequest, activate?: boolean, _options?: Configuration): Observable<ProvisioningConnection>;
  /**
      * Updates a Feature object for an application
      * Update a Feature
      * @param appId
      * @param name
      * @param CapabilitiesObject
      */
  updateFeatureForApplication(appId: string, name: string, CapabilitiesObject: CapabilitiesObject, _options?: Configuration): Observable<ApplicationFeature>;
  /**
      * Uploads a logo for the application. The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * Upload a Logo
      * @param appId
      * @param file
      */
  uploadApplicationLogo(appId: string, file: HttpFile, _options?: Configuration): Observable<void>;
}
import { AttackProtectionApiRequestFactory, AttackProtectionApiResponseProcessor } from '../apis/AttackProtectionApi';
export declare class ObservableAttackProtectionApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: AttackProtectionApiRequestFactory, responseProcessor?: AttackProtectionApiResponseProcessor);
  /**
      * Retrieves the User Lockout Settings for an org
      * Retrieve the User Lockout Settings
      */
  getUserLockoutSettings(_options?: Configuration): Observable<Collection<UserLockoutSettings>>;
  /**
      * Replaces the User Lockout Settings for an org
      * Replace the User Lockout Settings
      * @param lockoutSettings
      */
  replaceUserLockoutSettings(lockoutSettings: UserLockoutSettings, _options?: Configuration): Observable<UserLockoutSettings>;
}
import { AuthenticatorApiRequestFactory, AuthenticatorApiResponseProcessor } from '../apis/AuthenticatorApi';
export declare class ObservableAuthenticatorApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: AuthenticatorApiRequestFactory, responseProcessor?: AuthenticatorApiResponseProcessor);
  /**
      * Activates an authenticator by `authenticatorId`
      * Activate an Authenticator
      * @param authenticatorId
      */
  activateAuthenticator(authenticatorId: string, _options?: Configuration): Observable<Authenticator>;
  /**
      * Creates an authenticator. You can use this operation as part of the \"Create a custom authenticator\" flow. See the [Custom authenticator integration guide](https://developer.okta.com/docs/guides/authenticators-custom-authenticator/android/main/).
      * Create an Authenticator
      * @param authenticator
      * @param activate Whether to execute the activation lifecycle operation when Okta creates the authenticator
      */
  createAuthenticator(authenticator: Authenticator, activate?: boolean, _options?: Configuration): Observable<Authenticator>;
  /**
      * Deactivates an authenticator by `authenticatorId`
      * Deactivate an Authenticator
      * @param authenticatorId
      */
  deactivateAuthenticator(authenticatorId: string, _options?: Configuration): Observable<Authenticator>;
  /**
      * Retrieves an authenticator from your Okta organization by `authenticatorId`
      * Retrieve an Authenticator
      * @param authenticatorId
      */
  getAuthenticator(authenticatorId: string, _options?: Configuration): Observable<Authenticator>;
  /**
      * Retrieves the well-known app authenticator configuration, which includes an app authenticator's settings, supported methods and various other configuration details
      * Retrieve the Well-Known App Authenticator Configuration
      * @param oauthClientId Filters app authenticator configurations by &#x60;oauthClientId&#x60;
      */
  getWellKnownAppAuthenticatorConfiguration(oauthClientId: string, _options?: Configuration): Observable<Collection<WellKnownAppAuthenticatorConfiguration>>;
  /**
      * Lists all authenticators
      * List all Authenticators
      */
  listAuthenticators(_options?: Configuration): Observable<Collection<Authenticator>>;
  /**
      * Replaces an authenticator
      * Replace an Authenticator
      * @param authenticatorId
      * @param authenticator
      */
  replaceAuthenticator(authenticatorId: string, authenticator: Authenticator, _options?: Configuration): Observable<Authenticator>;
}
import { AuthorizationServerApiRequestFactory, AuthorizationServerApiResponseProcessor } from '../apis/AuthorizationServerApi';
export declare class ObservableAuthorizationServerApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: AuthorizationServerApiRequestFactory, responseProcessor?: AuthorizationServerApiResponseProcessor);
  /**
      * Activates an authorization server
      * Activate an Authorization Server
      * @param authServerId
      */
  activateAuthorizationServer(authServerId: string, _options?: Configuration): Observable<void>;
  /**
      * Activates an authorization server policy
      * Activate a Policy
      * @param authServerId
      * @param policyId
      */
  activateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Activates an authorization server policy rule
      * Activate a Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  activateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Creates an authorization server
      * Create an Authorization Server
      * @param authorizationServer
      */
  createAuthorizationServer(authorizationServer: AuthorizationServer, _options?: Configuration): Observable<AuthorizationServer>;
  /**
      * Creates a policy
      * Create a Policy
      * @param authServerId
      * @param policy
      */
  createAuthorizationServerPolicy(authServerId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Observable<AuthorizationServerPolicy>;
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy
      * Create a Policy Rule
      * @param policyId
      * @param authServerId
      * @param policyRule
      */
  createAuthorizationServerPolicyRule(policyId: string, authServerId: string, policyRule: AuthorizationServerPolicyRule, _options?: Configuration): Observable<AuthorizationServerPolicyRule>;
  /**
      * Creates a custom token claim
      * Create a Custom Token Claim
      * @param authServerId
      * @param oAuth2Claim
      */
  createOAuth2Claim(authServerId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Observable<OAuth2Claim>;
  /**
      * Creates a custom token scope
      * Create a Custom Token Scope
      * @param authServerId
      * @param oAuth2Scope
      */
  createOAuth2Scope(authServerId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Observable<OAuth2Scope>;
  /**
      * Deactivates an authorization server
      * Deactivate an Authorization Server
      * @param authServerId
      */
  deactivateAuthorizationServer(authServerId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates an authorization server policy
      * Deactivate a Policy
      * @param authServerId
      * @param policyId
      */
  deactivateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates an authorization server policy rule
      * Deactivate a Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  deactivateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes an authorization server
      * Delete an Authorization Server
      * @param authServerId
      */
  deleteAuthorizationServer(authServerId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a policy
      * Delete a Policy
      * @param authServerId
      * @param policyId
      */
  deleteAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
      * Delete a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  deleteAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a custom token claim
      * Delete a Custom Token Claim
      * @param authServerId
      * @param claimId
      */
  deleteOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a custom token scope
      * Delete a Custom Token Scope
      * @param authServerId
      * @param scopeId
      */
  deleteOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an authorization server
      * Retrieve an Authorization Server
      * @param authServerId
      */
  getAuthorizationServer(authServerId: string, _options?: Configuration): Observable<AuthorizationServer>;
  /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param authServerId
      * @param policyId
      */
  getAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Observable<AuthorizationServerPolicy>;
  /**
      * Retrieves a policy rule by `ruleId`
      * Retrieve a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  getAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, _options?: Configuration): Observable<AuthorizationServerPolicyRule>;
  /**
      * Retrieves a custom token claim
      * Retrieve a Custom Token Claim
      * @param authServerId
      * @param claimId
      */
  getOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Observable<OAuth2Claim>;
  /**
      * Retrieves a custom token scope
      * Retrieve a Custom Token Scope
      * @param authServerId
      * @param scopeId
      */
  getOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Observable<OAuth2Scope>;
  /**
      * Retrieves a refresh token for a client
      * Retrieve a Refresh Token for a Client
      * @param authServerId
      * @param clientId
      * @param tokenId
      * @param expand
      */
  getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, expand?: string, _options?: Configuration): Observable<OAuth2RefreshToken>;
  /**
      * Lists all credential keys
      * List all Credential Keys
      * @param authServerId
      */
  listAuthorizationServerKeys(authServerId: string, _options?: Configuration): Observable<Collection<JsonWebKey>>;
  /**
      * Lists all policies
      * List all Policies
      * @param authServerId
      */
  listAuthorizationServerPolicies(authServerId: string, _options?: Configuration): Observable<Collection<AuthorizationServerPolicy>>;
  /**
      * Lists all policy rules for the specified Custom Authorization Server and Policy
      * List all Policy Rules
      * @param policyId
      * @param authServerId
      */
  listAuthorizationServerPolicyRules(policyId: string, authServerId: string, _options?: Configuration): Observable<Collection<AuthorizationServerPolicyRule>>;
  /**
      * Lists all authorization servers
      * List all Authorization Servers
      * @param q
      * @param limit
      * @param after
      */
  listAuthorizationServers(q?: string, limit?: number, after?: string, _options?: Configuration): Observable<Collection<AuthorizationServer>>;
  /**
      * Lists all custom token claims
      * List all Custom Token Claims
      * @param authServerId
      */
  listOAuth2Claims(authServerId: string, _options?: Configuration): Observable<Collection<OAuth2Claim>>;
  /**
      * Lists all clients
      * List all Clients
      * @param authServerId
      */
  listOAuth2ClientsForAuthorizationServer(authServerId: string, _options?: Configuration): Observable<Collection<OAuth2Client>>;
  /**
      * Lists all custom token scopes
      * List all Custom Token Scopes
      * @param authServerId
      * @param q
      * @param filter
      * @param cursor
      * @param limit
      */
  listOAuth2Scopes(authServerId: string, q?: string, filter?: string, cursor?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2Scope>>;
  /**
      * Lists all refresh tokens for a client
      * List all Refresh Tokens for a Client
      * @param authServerId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2RefreshToken>>;
  /**
      * Replaces an authorization server
      * Replace an Authorization Server
      * @param authServerId
      * @param authorizationServer
      */
  replaceAuthorizationServer(authServerId: string, authorizationServer: AuthorizationServer, _options?: Configuration): Observable<AuthorizationServer>;
  /**
      * Replaces a policy
      * Replace a Policy
      * @param authServerId
      * @param policyId
      * @param policy
      */
  replaceAuthorizationServerPolicy(authServerId: string, policyId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Observable<AuthorizationServerPolicy>;
  /**
      * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
      * Replace a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      * @param policyRule
      */
  replaceAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, policyRule: AuthorizationServerPolicyRule, _options?: Configuration): Observable<AuthorizationServerPolicyRule>;
  /**
      * Replaces a custom token claim
      * Replace a Custom Token Claim
      * @param authServerId
      * @param claimId
      * @param oAuth2Claim
      */
  replaceOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Observable<OAuth2Claim>;
  /**
      * Replaces a custom token scope
      * Replace a Custom Token Scope
      * @param authServerId
      * @param scopeId
      * @param oAuth2Scope
      */
  replaceOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Observable<OAuth2Scope>;
  /**
      * Revokes a refresh token for a client
      * Revoke a Refresh Token for a Client
      * @param authServerId
      * @param clientId
      * @param tokenId
      */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all refresh tokens for a client
      * Revoke all Refresh Tokens for a Client
      * @param authServerId
      * @param clientId
      */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, _options?: Configuration): Observable<void>;
  /**
      * Rotates all credential keys
      * Rotate all Credential Keys
      * @param authServerId
      * @param use
      */
  rotateAuthorizationServerKeys(authServerId: string, use: JwkUse, _options?: Configuration): Observable<Collection<JsonWebKey>>;
}
import { BehaviorApiRequestFactory, BehaviorApiResponseProcessor } from '../apis/BehaviorApi';
export declare class ObservableBehaviorApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: BehaviorApiRequestFactory, responseProcessor?: BehaviorApiResponseProcessor);
  /**
      * Activates a behavior detection rule
      * Activate a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  activateBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Observable<BehaviorRule>;
  /**
      * Creates a new behavior detection rule
      * Create a Behavior Detection Rule
      * @param rule
      */
  createBehaviorDetectionRule(rule: BehaviorRule, _options?: Configuration): Observable<BehaviorRule>;
  /**
      * Deactivates a behavior detection rule
      * Deactivate a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deactivateBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Observable<BehaviorRule>;
  /**
      * Deletes a Behavior Detection Rule by `behaviorId`
      * Delete a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deleteBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a Behavior Detection Rule by `behaviorId`
      * Retrieve a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  getBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Observable<BehaviorRule>;
  /**
      * Lists all behavior detection rules with pagination support
      * List all Behavior Detection Rules
      */
  listBehaviorDetectionRules(_options?: Configuration): Observable<Collection<BehaviorRule>>;
  /**
      * Replaces a Behavior Detection Rule by `behaviorId`
      * Replace a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      * @param rule
      */
  replaceBehaviorDetectionRule(behaviorId: string, rule: BehaviorRule, _options?: Configuration): Observable<BehaviorRule>;
}
import { CAPTCHAApiRequestFactory, CAPTCHAApiResponseProcessor } from '../apis/CAPTCHAApi';
export declare class ObservableCAPTCHAApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: CAPTCHAApiRequestFactory, responseProcessor?: CAPTCHAApiResponseProcessor);
  /**
      * Creates a new CAPTCHA instance. In the current release, we only allow one CAPTCHA instance per org.
      * Create a CAPTCHA instance
      * @param instance
      */
  createCaptchaInstance(instance: CAPTCHAInstance, _options?: Configuration): Observable<CAPTCHAInstance>;
  /**
      * Deletes a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete a CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  deleteCaptchaInstance(captchaId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a CAPTCHA instance by `captchaId`
      * Retrieve a CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  getCaptchaInstance(captchaId: string, _options?: Configuration): Observable<CAPTCHAInstance>;
  /**
      * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      */
  listCaptchaInstances(_options?: Configuration): Observable<Collection<CAPTCHAInstance>>;
  /**
      * Replaces a CAPTCHA instance by `captchaId`
      * Replace a CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  replaceCaptchaInstance(captchaId: string, instance: CAPTCHAInstance, _options?: Configuration): Observable<CAPTCHAInstance>;
  /**
      * Partially updates a CAPTCHA instance by `captchaId`
      * Update a CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  updateCaptchaInstance(captchaId: string, instance: CAPTCHAInstance, _options?: Configuration): Observable<CAPTCHAInstance>;
}
import { CustomDomainApiRequestFactory, CustomDomainApiResponseProcessor } from '../apis/CustomDomainApi';
export declare class ObservableCustomDomainApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: CustomDomainApiRequestFactory, responseProcessor?: CustomDomainApiResponseProcessor);
  /**
      * Creates your Custom Domain
      * Create a Custom Domain
      * @param domain
      */
  createCustomDomain(domain: Domain, _options?: Configuration): Observable<DomainResponse>;
  /**
      * Deletes a Custom Domain by `id`
      * Delete a Custom Domain
      * @param domainId
      */
  deleteCustomDomain(domainId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a Custom Domain by `id`
      * Retrieve a Custom Domain
      * @param domainId
      */
  getCustomDomain(domainId: string, _options?: Configuration): Observable<DomainResponse>;
  /**
      * Lists all verified Custom Domains for the org
      * List all Custom Domains
      */
  listCustomDomains(_options?: Configuration): Observable<DomainListResponse>;
  /**
      * Replaces a Custom Domain by `id`
      * Replace a Custom Domain's brandId
      * @param domainId
      * @param UpdateDomain
      */
  replaceCustomDomain(domainId: string, UpdateDomain: UpdateDomain, _options?: Configuration): Observable<DomainResponse>;
  /**
      * Creates or replaces the certificate for the custom domain
      * Upsert the Certificate
      * @param domainId
      * @param certificate
      */
  upsertCertificate(domainId: string, certificate: DomainCertificate, _options?: Configuration): Observable<void>;
  /**
      * Verifies the Custom Domain by `id`
      * Verify a Custom Domain
      * @param domainId
      */
  verifyDomain(domainId: string, _options?: Configuration): Observable<DomainResponse>;
}
import { CustomizationApiRequestFactory, CustomizationApiResponseProcessor } from '../apis/CustomizationApi';
export declare class ObservableCustomizationApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: CustomizationApiRequestFactory, responseProcessor?: CustomizationApiResponseProcessor);
  /**
      * Creates new brand in your org
      * Create a Brand
      * @param CreateBrandRequest
      */
  createBrand(CreateBrandRequest?: CreateBrandRequest, _options?: Configuration): Observable<Brand>;
  /**
      * Creates a new email customization
      * Create an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param instance
      */
  createEmailCustomization(brandId: string, templateName: string, instance?: EmailCustomization, _options?: Configuration): Observable<EmailCustomization>;
  /**
      * Deletes all customizations for an email template
      * Delete all Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  deleteAllCustomizations(brandId: string, templateName: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a brand by its unique identifier
      * Delete a brand
      * @param brandId The ID of the brand.
      */
  deleteBrand(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a Theme background image
      * Delete the Background Image
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  deleteBrandThemeBackgroundImage(brandId: string, themeId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a Theme favicon. The theme will use the default Okta favicon.
      * Delete the Favicon
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  deleteBrandThemeFavicon(brandId: string, themeId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the Logo
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  deleteBrandThemeLogo(brandId: string, themeId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the customized error page. As a result, the default error page appears in your live environment.
      * Delete the Customized Error Page
      * @param brandId The ID of the brand.
      */
  deleteCustomizedErrorPage(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
      * Delete the Customized Sign-in Page
      * @param brandId The ID of the brand.
      */
  deleteCustomizedSignInPage(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes an email customization by its unique identifier
      * Delete an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  deleteEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Delete the Preview Error Page
      * @param brandId The ID of the brand.
      */
  deletePreviewErrorPage(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Delete the Preview Sign-in Page
      * @param brandId The ID of the brand.
      */
  deletePreviewSignInPage(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a brand by `brandId`
      * Retrieve a Brand
      * @param brandId The ID of the brand.
      */
  getBrand(brandId: string, _options?: Configuration): Observable<Brand>;
  /**
      * Retrieves a theme for a brand
      * Retrieve a Theme
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  getBrandTheme(brandId: string, themeId: string, _options?: Configuration): Observable<ThemeResponse>;
  /**
      * Retrieves a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getCustomizationPreview(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Observable<EmailPreview>;
  /**
      * Retrieves the customized error page. The customized error page appears in your live environment.
      * Retrieve the Customized Error Page
      * @param brandId The ID of the brand.
      */
  getCustomizedErrorPage(brandId: string, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
      * Retrieve the Customized Sign-in Page
      * @param brandId The ID of the brand.
      */
  getCustomizedSignInPage(brandId: string, _options?: Configuration): Observable<SignInPage>;
  /**
      * Retrieves the default error page. The default error page appears when no customized error page exists.
      * Retrieve the Default Error Page
      * @param brandId The ID of the brand.
      */
  getDefaultErrorPage(brandId: string, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
      * Retrieve the Default Sign-in Page
      * @param brandId The ID of the brand.
      */
  getDefaultSignInPage(brandId: string, _options?: Configuration): Observable<SignInPage>;
  /**
      * Retrieves an email customization by its unique identifier
      * Retrieve an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Observable<EmailCustomization>;
  /**
      * Retrieves an email template's default content
      * Retrieve an Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultContent(brandId: string, templateName: string, language?: string, _options?: Configuration): Observable<EmailDefaultContent>;
  /**
      * Retrieves a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of the Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultPreview(brandId: string, templateName: string, language?: string, _options?: Configuration): Observable<EmailPreview>;
  /**
      * Retrieves an email template's settings
      * Retrieve the Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  getEmailSettings(brandId: string, templateName: string, _options?: Configuration): Observable<EmailSettings>;
  /**
      * Retrieves the details of an email template by name
      * Retrieve an Email Template
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getEmailTemplate(brandId: string, templateName: string, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Observable<EmailTemplate>;
  /**
      * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Error Page Sub-Resources
      * @param brandId The ID of the brand.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getErrorPage(brandId: string, expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>, _options?: Configuration): Observable<PageRoot>;
  /**
      * Retrieves the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Retrieve the Preview Error Page Preview
      * @param brandId The ID of the brand.
      */
  getPreviewErrorPage(brandId: string, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Retrieve the Preview Sign-in Page Preview
      * @param brandId The ID of the brand.
      */
  getPreviewSignInPage(brandId: string, _options?: Configuration): Observable<SignInPage>;
  /**
      * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Sign-in Page Sub-Resources
      * @param brandId The ID of the brand.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getSignInPage(brandId: string, expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>, _options?: Configuration): Observable<PageRoot>;
  /**
      * Retrieves the sign-out page settings
      * Retrieve the Sign-out Page Settings
      * @param brandId The ID of the brand.
      */
  getSignOutPageSettings(brandId: string, _options?: Configuration): Observable<HostedPage>;
  /**
      * Lists all sign-in widget versions supported by the current org
      * List all Sign-in Widget Versions
      * @param brandId The ID of the brand.
      */
  listAllSignInWidgetVersions(brandId: string, _options?: Configuration): Observable<Collection<string>>;
  /**
      * Lists all domains associated with a brand by `brandId`
      * List all Domains associated with a Brand
      * @param brandId The ID of the brand.
      */
  listBrandDomains(brandId: string, _options?: Configuration): Observable<BrandDomains>;
  /**
      * Lists all the themes in your brand
      * List all Themes
      * @param brandId The ID of the brand.
      */
  listBrandThemes(brandId: string, _options?: Configuration): Observable<Collection<ThemeResponse>>;
  /**
      * Lists all the brands in your org
      * List all Brands
      */
  listBrands(_options?: Configuration): Observable<Collection<Brand>>;
  /**
      * Lists all customizations of an email template
      * List all Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      */
  listEmailCustomizations(brandId: string, templateName: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<EmailCustomization>>;
  /**
      * Lists all email templates
      * List all Email Templates
      * @param brandId The ID of the brand.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param expand Specifies additional metadata to be included in the response.
      */
  listEmailTemplates(brandId: string, after?: string, limit?: number, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Observable<Collection<EmailTemplate>>;
  /**
      * Replaces a brand by `brandId`
      * Replace a Brand
      * @param brandId The ID of the brand.
      * @param brand
      */
  replaceBrand(brandId: string, brand: BrandRequest, _options?: Configuration): Observable<Brand>;
  /**
      * Replaces a theme for a brand
      * Replace a Theme
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param theme
      */
  replaceBrandTheme(brandId: string, themeId: string, theme: Theme, _options?: Configuration): Observable<ThemeResponse>;
  /**
      * Replaces the customized error page. The customized error page appears in your live environment.
      * Replace the Customized Error Page
      * @param brandId The ID of the brand.
      * @param ErrorPage
      */
  replaceCustomizedErrorPage(brandId: string, ErrorPage: ErrorPage, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
      * Replace the Customized Sign-in Page
      * @param brandId The ID of the brand.
      * @param SignInPage
      */
  replaceCustomizedSignInPage(brandId: string, SignInPage: SignInPage, _options?: Configuration): Observable<SignInPage>;
  /**
      * Replaces an existing email customization using the property values provided
      * Replace an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      * @param instance Request
      */
  replaceEmailCustomization(brandId: string, templateName: string, customizationId: string, instance?: EmailCustomization, _options?: Configuration): Observable<EmailCustomization>;
  /**
      * Replaces an email template's settings
      * Replace the Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param EmailSettings
      */
  replaceEmailSettings(brandId: string, templateName: string, EmailSettings?: EmailSettings, _options?: Configuration): Observable<void>;
  /**
      * Replaces the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Replace the Preview Error Page
      * @param brandId The ID of the brand.
      * @param ErrorPage
      */
  replacePreviewErrorPage(brandId: string, ErrorPage: ErrorPage, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Replace the Preview Sign-in Page
      * @param brandId The ID of the brand.
      * @param SignInPage
      */
  replacePreviewSignInPage(brandId: string, SignInPage: SignInPage, _options?: Configuration): Observable<SignInPage>;
  /**
      * Replaces the sign-out page settings
      * Replace the Sign-out Page Settings
      * @param brandId The ID of the brand.
      * @param HostedPage
      */
  replaceSignOutPageSettings(brandId: string, HostedPage: HostedPage, _options?: Configuration): Observable<HostedPage>;
  /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
      * Send a Test Email
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  sendTestEmail(brandId: string, templateName: string, language?: string, _options?: Configuration): Observable<void>;
  /**
      * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
      * Upload the Background Image
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param file
      */
  uploadBrandThemeBackgroundImage(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Observable<ImageUploadResponse>;
  /**
      * Uploads and replaces the favicon for the theme
      * Upload the Favicon
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param file
      */
  uploadBrandThemeFavicon(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Observable<ImageUploadResponse>;
  /**
      * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Logo
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param file
      */
  uploadBrandThemeLogo(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Observable<ImageUploadResponse>;
}
import { DeviceApiRequestFactory, DeviceApiResponseProcessor } from '../apis/DeviceApi';
export declare class ObservableDeviceApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: DeviceApiRequestFactory, responseProcessor?: DeviceApiResponseProcessor);
  /**
      * Activates a device by `deviceId`
      * Activate a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  activateDevice(deviceId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates a device by `deviceId`
      * Deactivate a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deactivateDevice(deviceId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a device by `deviceId`
      * Delete a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deleteDevice(deviceId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a device by `deviceId`
      * Retrieve a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  getDevice(deviceId: string, _options?: Configuration): Observable<Device>;
  /**
      * Lists all devices with pagination support.  A subset of Devices can be returned that match a supported search criteria using the `search` query parameter.  Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request.  > **Note:** Listing devices with `search` should not be used as a part of any critical flows—such as authentication or updates—to prevent potential data loss. `search` results may not reflect the latest information, as this endpoint uses a search index which may not be up-to-date with recent updates to the object. <br> Don't use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss. <br> Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation equires [URL encoding](http://en.wikipedia.org/wiki/Percent-encoding). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
      * List all Devices
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param search SCIM filter expression that filters the results. Searches include all Device &#x60;profile&#x60; properties, as well as the Device &#x60;id&#x60;, &#x60;status&#x60; and &#x60;lastUpdated&#x60; properties.
      */
  listDevices(after?: string, limit?: number, search?: string, _options?: Configuration): Observable<Collection<Device>>;
  /**
      * Suspends a device by `deviceId`
      * Suspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  suspendDevice(deviceId: string, _options?: Configuration): Observable<void>;
  /**
      * Unsuspends a device by `deviceId`
      * Unsuspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  unsuspendDevice(deviceId: string, _options?: Configuration): Observable<void>;
}
import { DeviceAssuranceApiRequestFactory, DeviceAssuranceApiResponseProcessor } from '../apis/DeviceAssuranceApi';
export declare class ObservableDeviceAssuranceApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: DeviceAssuranceApiRequestFactory, responseProcessor?: DeviceAssuranceApiResponseProcessor);
  /**
      * Creates a new Device Assurance Policy
      * Create a Device Assurance Policy
      * @param deviceAssurance
      */
  createDeviceAssurancePolicy(deviceAssurance: DeviceAssurance, _options?: Configuration): Observable<DeviceAssurance>;
  /**
      * Deletes a Device Assurance Policy by `deviceAssuranceId`. If the Device Assurance Policy is currently being used in the org Authentication Policies, the delete will not be allowed.
      * Delete a Device Assurance Policy
      * @param deviceAssuranceId Id of the Device Assurance Policy
      */
  deleteDeviceAssurancePolicy(deviceAssuranceId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a Device Assurance Policy by `deviceAssuranceId`
      * Retrieve a Device Assurance Policy
      * @param deviceAssuranceId Id of the Device Assurance Policy
      */
  getDeviceAssurancePolicy(deviceAssuranceId: string, _options?: Configuration): Observable<DeviceAssurance>;
  /**
      * Lists all device assurance policies
      * List all Device Assurance Policies
      */
  listDeviceAssurancePolicies(_options?: Configuration): Observable<Collection<DeviceAssurance>>;
  /**
      * Replaces a Device Assurance Policy by `deviceAssuranceId`
      * Replace a Device Assurance Policy
      * @param deviceAssuranceId Id of the Device Assurance Policy
      * @param deviceAssurance
      */
  replaceDeviceAssurancePolicy(deviceAssuranceId: string, deviceAssurance: DeviceAssurance, _options?: Configuration): Observable<DeviceAssurance>;
}
import { EmailDomainApiRequestFactory, EmailDomainApiResponseProcessor } from '../apis/EmailDomainApi';
export declare class ObservableEmailDomainApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: EmailDomainApiRequestFactory, responseProcessor?: EmailDomainApiResponseProcessor);
  /**
      * Creates an Email Domain in your org, along with associated username and sender display name
      * Create an Email Domain
      * @param emailDomain
      */
  createEmailDomain(emailDomain: EmailDomain, _options?: Configuration): Observable<EmailDomainResponse>;
  /**
      * Deletes an Email Domain by `emailDomainId`
      * Delete an Email Domain
      * @param emailDomainId
      */
  deleteEmailDomain(emailDomainId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an Email Domain by `emailDomainId`, along with associated username and sender display name
      * Retrieve a Email Domain
      * @param emailDomainId
      */
  getEmailDomain(emailDomainId: string, _options?: Configuration): Observable<EmailDomainResponse>;
  /**
      * Lists all brands linked to an email domain
      * List all brands linked to an email domain
      * @param emailDomainId
      */
  listEmailDomainBrands(emailDomainId: string, _options?: Configuration): Observable<Collection<Brand>>;
  /**
      * Lists all the Email Domains in your org, along with associated username and sender display name
      * List all Email Domains
      */
  listEmailDomains(_options?: Configuration): Observable<EmailDomainListResponse>;
  /**
      * Replaces associated username and sender display name by `emailDomainId`
      * Replace an Email Domain
      * @param emailDomainId
      * @param updateEmailDomain
      */
  replaceEmailDomain(emailDomainId: string, updateEmailDomain: UpdateEmailDomain, _options?: Configuration): Observable<EmailDomainResponse>;
  /**
      * Verifies an Email Domain by `emailDomainId`
      * Verify an Email Domain
      * @param emailDomainId
      */
  verifyEmailDomain(emailDomainId: string, _options?: Configuration): Observable<EmailDomainResponse>;
}
import { EventHookApiRequestFactory, EventHookApiResponseProcessor } from '../apis/EventHookApi';
export declare class ObservableEventHookApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: EventHookApiRequestFactory, responseProcessor?: EventHookApiResponseProcessor);
  /**
      * Activates an event hook
      * Activate an Event Hook
      * @param eventHookId
      */
  activateEventHook(eventHookId: string, _options?: Configuration): Observable<EventHook>;
  /**
      * Creates an event hook
      * Create an Event Hook
      * @param eventHook
      */
  createEventHook(eventHook: EventHook, _options?: Configuration): Observable<EventHook>;
  /**
      * Deactivates an event hook
      * Deactivate an Event Hook
      * @param eventHookId
      */
  deactivateEventHook(eventHookId: string, _options?: Configuration): Observable<EventHook>;
  /**
      * Deletes an event hook
      * Delete an Event Hook
      * @param eventHookId
      */
  deleteEventHook(eventHookId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an event hook
      * Retrieve an Event Hook
      * @param eventHookId
      */
  getEventHook(eventHookId: string, _options?: Configuration): Observable<EventHook>;
  /**
      * Lists all event hooks
      * List all Event Hooks
      */
  listEventHooks(_options?: Configuration): Observable<Collection<EventHook>>;
  /**
      * Replaces an event hook
      * Replace an Event Hook
      * @param eventHookId
      * @param eventHook
      */
  replaceEventHook(eventHookId: string, eventHook: EventHook, _options?: Configuration): Observable<EventHook>;
  /**
      * Verifies an event hook
      * Verify an Event Hook
      * @param eventHookId
      */
  verifyEventHook(eventHookId: string, _options?: Configuration): Observable<EventHook>;
}
import { FeatureApiRequestFactory, FeatureApiResponseProcessor } from '../apis/FeatureApi';
export declare class ObservableFeatureApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: FeatureApiRequestFactory, responseProcessor?: FeatureApiResponseProcessor);
  /**
      * Retrieves a feature
      * Retrieve a Feature
      * @param featureId
      */
  getFeature(featureId: string, _options?: Configuration): Observable<Feature>;
  /**
      * Lists all dependencies
      * List all Dependencies
      * @param featureId
      */
  listFeatureDependencies(featureId: string, _options?: Configuration): Observable<Collection<Feature>>;
  /**
      * Lists all dependents
      * List all Dependents
      * @param featureId
      */
  listFeatureDependents(featureId: string, _options?: Configuration): Observable<Collection<Feature>>;
  /**
      * Lists all features
      * List all Features
      */
  listFeatures(_options?: Configuration): Observable<Collection<Feature>>;
  /**
      * Updates a feature lifecycle
      * Update a Feature Lifecycle
      * @param featureId
      * @param lifecycle
      * @param mode
      */
  updateFeatureLifecycle(featureId: string, lifecycle: string, mode?: string, _options?: Configuration): Observable<Feature>;
}
import { GroupApiRequestFactory, GroupApiResponseProcessor } from '../apis/GroupApi';
export declare class ObservableGroupApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: GroupApiRequestFactory, responseProcessor?: GroupApiResponseProcessor);
  /**
      * Activates a specific group rule by `ruleId`
      * Activate a Group Rule
      * @param ruleId
      */
  activateGroupRule(ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns a group owner
      * Assign a Group Owner
      * @param groupId
      * @param GroupOwner
      */
  assignGroupOwner(groupId: string, GroupOwner: GroupOwner, _options?: Configuration): Observable<GroupOwner>;
  /**
      * Assigns a user to a group with 'OKTA_GROUP' type
      * Assign a User
      * @param groupId
      * @param userId
      */
  assignUserToGroup(groupId: string, userId: string, _options?: Configuration): Observable<void>;
  /**
      * Creates a new group with `OKTA_GROUP` type
      * Create a Group
      * @param group
      */
  createGroup(group: Group, _options?: Configuration): Observable<Group>;
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition
      * Create a Group Rule
      * @param groupRule
      */
  createGroupRule(groupRule: GroupRule, _options?: Configuration): Observable<GroupRule>;
  /**
      * Deactivates a specific group rule by `ruleId`
      * Deactivate a Group Rule
      * @param ruleId
      */
  deactivateGroupRule(ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a group with `OKTA_GROUP` type
      * Delete a Group
      * @param groupId
      */
  deleteGroup(groupId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a group owner from a specific group
      * Delete a Group Owner
      * @param groupId
      * @param ownerId
      */
  deleteGroupOwner(groupId: string, ownerId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a specific group rule by `ruleId`
      * Delete a group Rule
      * @param ruleId
      * @param removeUsers Indicates whether to keep or remove users from groups assigned by this rule.
      */
  deleteGroupRule(ruleId: string, removeUsers?: boolean, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a group by `groupId`
      * Retrieve a Group
      * @param groupId
      */
  getGroup(groupId: string, _options?: Configuration): Observable<Group>;
  /**
      * Retrieves a specific group rule by `ruleId`
      * Retrieve a Group Rule
      * @param ruleId
      * @param expand
      */
  getGroupRule(ruleId: string, expand?: string, _options?: Configuration): Observable<GroupRule>;
  /**
      * Lists all applications that are assigned to a group
      * List all Assigned Applications
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of app results for a page
      */
  listAssignedApplicationsForGroup(groupId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<Application>>;
  /**
      * Lists all owners for a specific group
      * List all Group Owners
      * @param groupId
      * @param filter SCIM Filter expression for group owners. Allows to filter owners by type.
      * @param after Specifies the pagination cursor for the next page of owners
      * @param limit Specifies the number of owner results in a page
      */
  listGroupOwners(groupId: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<GroupOwner>>;
  /**
      * Lists all group rules
      * List all Group Rules
      * @param limit Specifies the number of rule results in a page
      * @param after Specifies the pagination cursor for the next page of rules
      * @param search Specifies the keyword to search fules for
      * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
      */
  listGroupRules(limit?: number, after?: string, search?: string, expand?: string, _options?: Configuration): Observable<Collection<GroupRule>>;
  /**
      * Lists all users that are a member of a group
      * List all Member Users
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of users
      * @param limit Specifies the number of user results in a page
      */
  listGroupUsers(groupId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<User>>;
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
  listGroups(q?: string, filter?: string, after?: string, limit?: number, expand?: string, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Observable<Collection<Group>>;
  /**
      * Replaces the profile for a group with `OKTA_GROUP` type
      * Replace a Group
      * @param groupId
      * @param group
      */
  replaceGroup(groupId: string, group: Group, _options?: Configuration): Observable<Group>;
  /**
      * Replaces a group rule. Only `INACTIVE` rules can be updated.
      * Replace a Group Rule
      * @param ruleId
      * @param groupRule
      */
  replaceGroupRule(ruleId: string, groupRule: GroupRule, _options?: Configuration): Observable<GroupRule>;
  /**
      * Unassigns a user from a group with 'OKTA_GROUP' type
      * Unassign a User
      * @param groupId
      * @param userId
      */
  unassignUserFromGroup(groupId: string, userId: string, _options?: Configuration): Observable<void>;
}
import { HookKeyApiRequestFactory, HookKeyApiResponseProcessor } from '../apis/HookKeyApi';
export declare class ObservableHookKeyApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: HookKeyApiRequestFactory, responseProcessor?: HookKeyApiResponseProcessor);
  /**
      * Creates a key
      * Create a key
      * @param keyRequest
      */
  createHookKey(keyRequest: KeyRequest, _options?: Configuration): Observable<HookKey>;
  /**
      * Deletes a key by `hookKeyId`. Once deleted, the Hook Key is unrecoverable. As a safety precaution, unused keys are eligible for deletion.
      * Delete a key
      * @param hookKeyId
      */
  deleteHookKey(hookKeyId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a key by `hookKeyId`
      * Retrieve a key
      * @param hookKeyId
      */
  getHookKey(hookKeyId: string, _options?: Configuration): Observable<HookKey>;
  /**
      * Retrieves a public key by `keyId`
      * Retrieve a public key
      * @param keyId
      */
  getPublicKey(keyId: string, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Lists all keys
      * List all keys
      */
  listHookKeys(_options?: Configuration): Observable<Collection<HookKey>>;
  /**
      * Replaces a key by `hookKeyId`
      * Replace a key
      * @param hookKeyId
      * @param keyRequest
      */
  replaceHookKey(hookKeyId: string, keyRequest: KeyRequest, _options?: Configuration): Observable<HookKey>;
}
import { IdentityProviderApiRequestFactory, IdentityProviderApiResponseProcessor } from '../apis/IdentityProviderApi';
export declare class ObservableIdentityProviderApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: IdentityProviderApiRequestFactory, responseProcessor?: IdentityProviderApiResponseProcessor);
  /**
      * Activates an inactive IdP
      * Activate an Identity Provider
      * @param idpId
      */
  activateIdentityProvider(idpId: string, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
      * Clone a Signing Credential Key
      * @param idpId
      * @param keyId
      * @param targetIdpId
      */
  cloneIdentityProviderKey(idpId: string, keyId: string, targetIdpId: string, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Creates a new identity provider integration
      * Create an Identity Provider
      * @param identityProvider
      */
  createIdentityProvider(identityProvider: IdentityProvider, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Creates a new X.509 certificate credential to the IdP key store.
      * Create an X.509 Certificate Public Key
      * @param jsonWebKey
      */
  createIdentityProviderKey(jsonWebKey: JsonWebKey, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Deactivates an active IdP
      * Deactivate an Identity Provider
      * @param idpId
      */
  deactivateIdentityProvider(idpId: string, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Deletes an identity provider integration by `idpId`
      * Delete an Identity Provider
      * @param idpId
      */
  deleteIdentityProvider(idpId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP
      * Delete a Signing Credential Key
      * @param keyId
      */
  deleteIdentityProviderKey(keyId: string, _options?: Configuration): Observable<void>;
  /**
      * Generates a new key pair and returns a Certificate Signing Request for it
      * Generate a Certificate Signing Request
      * @param idpId
      * @param metadata
      */
  generateCsrForIdentityProvider(idpId: string, metadata: CsrMetadata, _options?: Configuration): Observable<Csr>;
  /**
      * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
      * Generate a new Signing Credential Key
      * @param idpId
      * @param validityYears expiry of the IdP Key Credential
      */
  generateIdentityProviderSigningKey(idpId: string, validityYears: number, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Retrieves a specific Certificate Signing Request model by id
      * Retrieve a Certificate Signing Request
      * @param idpId
      * @param csrId
      */
  getCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Observable<Csr>;
  /**
      * Retrieves an identity provider integration by `idpId`
      * Retrieve an Identity Provider
      * @param idpId
      */
  getIdentityProvider(idpId: string, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Retrieves a linked IdP user by ID
      * Retrieve a User
      * @param idpId
      * @param userId
      */
  getIdentityProviderApplicationUser(idpId: string, userId: string, _options?: Configuration): Observable<IdentityProviderApplicationUser>;
  /**
      * Retrieves a specific IdP Key Credential by `kid`
      * Retrieve an Credential Key
      * @param keyId
      */
  getIdentityProviderKey(keyId: string, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Retrieves a specific IdP Key Credential by `kid`
      * Retrieve a Signing Credential Key
      * @param idpId
      * @param keyId
      */
  getIdentityProviderSigningKey(idpId: string, keyId: string, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
      * Link a User to a Social IdP
      * @param idpId
      * @param userId
      * @param userIdentityProviderLinkRequest
      */
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest, _options?: Configuration): Observable<IdentityProviderApplicationUser>;
  /**
      * Lists all Certificate Signing Requests for an IdP
      * List all Certificate Signing Requests
      * @param idpId
      */
  listCsrsForIdentityProvider(idpId: string, _options?: Configuration): Observable<Collection<Csr>>;
  /**
      * Lists all users linked to the identity provider
      * List all Users
      * @param idpId
      */
  listIdentityProviderApplicationUsers(idpId: string, _options?: Configuration): Observable<Collection<IdentityProviderApplicationUser>>;
  /**
      * Lists all IdP key credentials
      * List all Credential Keys
      * @param after Specifies the pagination cursor for the next page of keys
      * @param limit Specifies the number of key results in a page
      */
  listIdentityProviderKeys(after?: string, limit?: number, _options?: Configuration): Observable<Collection<JsonWebKey>>;
  /**
      * Lists all signing key credentials for an IdP
      * List all Signing Credential Keys
      * @param idpId
      */
  listIdentityProviderSigningKeys(idpId: string, _options?: Configuration): Observable<Collection<JsonWebKey>>;
  /**
      * Lists all identity provider integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all Identity Providers
      * @param q Searches the name property of IdPs for matching value
      * @param after Specifies the pagination cursor for the next page of IdPs
      * @param limit Specifies the number of IdP results in a page
      * @param type Filters IdPs by type
      */
  listIdentityProviders(q?: string, after?: string, limit?: number, type?: string, _options?: Configuration): Observable<Collection<IdentityProvider>>;
  /**
      * Lists the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth
      * List all Tokens from a OIDC Identity Provider
      * @param idpId
      * @param userId
      */
  listSocialAuthTokens(idpId: string, userId: string, _options?: Configuration): Observable<Collection<SocialAuthToken>>;
  /**
      * Publishes a certificate signing request with a signed X.509 certificate and adds it into the signing key credentials for the IdP
      * Publish a Certificate Signing Request
      * @param idpId
      * @param csrId
      * @param body
      */
  publishCsrForIdentityProvider(idpId: string, csrId: string, body: HttpFile, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Replaces an identity provider integration by `idpId`
      * Replace an Identity Provider
      * @param idpId
      * @param identityProvider
      */
  replaceIdentityProvider(idpId: string, identityProvider: IdentityProvider, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Revokes a certificate signing request and deletes the key pair from the IdP
      * Revoke a Certificate Signing Request
      * @param idpId
      * @param csrId
      */
  revokeCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Observable<void>;
  /**
      * Unlinks the link between the Okta user and the IdP user
      * Unlink a User from IdP
      * @param idpId
      * @param userId
      */
  unlinkUserFromIdentityProvider(idpId: string, userId: string, _options?: Configuration): Observable<void>;
}
import { IdentitySourceApiRequestFactory, IdentitySourceApiResponseProcessor } from '../apis/IdentitySourceApi';
export declare class ObservableIdentitySourceApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: IdentitySourceApiRequestFactory, responseProcessor?: IdentitySourceApiResponseProcessor);
  /**
      * Creates an identity source session for the given identity source instance
      * Create an Identity Source Session
      * @param identitySourceId
      */
  createIdentitySourceSession(identitySourceId: string, _options?: Configuration): Observable<Collection<IdentitySourceSession>>;
  /**
      * Deletes an identity source session for a given `identitySourceId` and `sessionId`
      * Delete an Identity Source Session
      * @param identitySourceId
      * @param sessionId
      */
  deleteIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an identity source session for a given identity source id and session id
      * Retrieve an Identity Source Session
      * @param identitySourceId
      * @param sessionId
      */
  getIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Observable<IdentitySourceSession>;
  /**
      * Lists all identity source sessions for the given identity source instance
      * List all Identity Source Sessions
      * @param identitySourceId
      */
  listIdentitySourceSessions(identitySourceId: string, _options?: Configuration): Observable<Collection<IdentitySourceSession>>;
  /**
      * Starts the import from the identity source described by the uploaded bulk operations
      * Start the import from the Identity Source
      * @param identitySourceId
      * @param sessionId
      */
  startImportFromIdentitySource(identitySourceId: string, sessionId: string, _options?: Configuration): Observable<Collection<IdentitySourceSession>>;
  /**
      * Uploads entities that need to be deleted in Okta from the identity source for the given session
      * Upload the data to be deleted in Okta
      * @param identitySourceId
      * @param sessionId
      * @param BulkDeleteRequestBody
      */
  uploadIdentitySourceDataForDelete(identitySourceId: string, sessionId: string, BulkDeleteRequestBody?: BulkDeleteRequestBody, _options?: Configuration): Observable<void>;
  /**
      * Uploads entities that need to be upserted in Okta from the identity source for the given session
      * Upload the data to be upserted in Okta
      * @param identitySourceId
      * @param sessionId
      * @param BulkUpsertRequestBody
      */
  uploadIdentitySourceDataForUpsert(identitySourceId: string, sessionId: string, BulkUpsertRequestBody?: BulkUpsertRequestBody, _options?: Configuration): Observable<void>;
}
import { InlineHookApiRequestFactory, InlineHookApiResponseProcessor } from '../apis/InlineHookApi';
export declare class ObservableInlineHookApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: InlineHookApiRequestFactory, responseProcessor?: InlineHookApiResponseProcessor);
  /**
      * Activates the inline hook by `inlineHookId`
      * Activate an Inline Hook
      * @param inlineHookId
      */
  activateInlineHook(inlineHookId: string, _options?: Configuration): Observable<InlineHook>;
  /**
      * Creates an inline hook
      * Create an Inline Hook
      * @param inlineHook
      */
  createInlineHook(inlineHook: InlineHook, _options?: Configuration): Observable<InlineHook>;
  /**
      * Deactivates the inline hook by `inlineHookId`
      * Deactivate an Inline Hook
      * @param inlineHookId
      */
  deactivateInlineHook(inlineHookId: string, _options?: Configuration): Observable<InlineHook>;
  /**
      * Deletes an inline hook by `inlineHookId`. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete an Inline Hook
      * @param inlineHookId
      */
  deleteInlineHook(inlineHookId: string, _options?: Configuration): Observable<void>;
  /**
      * Executes the inline hook by `inlineHookId` using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute an Inline Hook
      * @param inlineHookId
      * @param payloadData
      */
  executeInlineHook(inlineHookId: string, payloadData: InlineHookPayload, _options?: Configuration): Observable<InlineHookResponse>;
  /**
      * Retrieves an inline hook by `inlineHookId`
      * Retrieve an Inline Hook
      * @param inlineHookId
      */
  getInlineHook(inlineHookId: string, _options?: Configuration): Observable<InlineHook>;
  /**
      * Lists all inline hooks
      * List all Inline Hooks
      * @param type
      */
  listInlineHooks(type?: string, _options?: Configuration): Observable<Collection<InlineHook>>;
  /**
      * Replaces an inline hook by `inlineHookId`
      * Replace an Inline Hook
      * @param inlineHookId
      * @param inlineHook
      */
  replaceInlineHook(inlineHookId: string, inlineHook: InlineHook, _options?: Configuration): Observable<InlineHook>;
}
import { LinkedObjectApiRequestFactory, LinkedObjectApiResponseProcessor } from '../apis/LinkedObjectApi';
export declare class ObservableLinkedObjectApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: LinkedObjectApiRequestFactory, responseProcessor?: LinkedObjectApiResponseProcessor);
  /**
      * Creates a linked object definition
      * Create a Linked Object Definition
      * @param linkedObject
      */
  createLinkedObjectDefinition(linkedObject: LinkedObject, _options?: Configuration): Observable<LinkedObject>;
  /**
      * Deletes a linked object definition
      * Delete a Linked Object Definition
      * @param linkedObjectName
      */
  deleteLinkedObjectDefinition(linkedObjectName: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a linked object definition
      * Retrieve a Linked Object Definition
      * @param linkedObjectName
      */
  getLinkedObjectDefinition(linkedObjectName: string, _options?: Configuration): Observable<LinkedObject>;
  /**
      * Lists all linked object definitions
      * List all Linked Object Definitions
      */
  listLinkedObjectDefinitions(_options?: Configuration): Observable<Collection<LinkedObject>>;
}
import { LogStreamApiRequestFactory, LogStreamApiResponseProcessor } from '../apis/LogStreamApi';
export declare class ObservableLogStreamApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: LogStreamApiRequestFactory, responseProcessor?: LogStreamApiResponseProcessor);
  /**
      * Activates a log stream by `logStreamId`
      * Activate a Log Stream
      * @param logStreamId id of the log stream
      */
  activateLogStream(logStreamId: string, _options?: Configuration): Observable<LogStream>;
  /**
      * Creates a new log stream
      * Create a Log Stream
      * @param instance
      */
  createLogStream(instance: LogStream, _options?: Configuration): Observable<LogStream>;
  /**
      * Deactivates a log stream by `logStreamId`
      * Deactivate a Log Stream
      * @param logStreamId id of the log stream
      */
  deactivateLogStream(logStreamId: string, _options?: Configuration): Observable<LogStream>;
  /**
      * Deletes a log stream by `logStreamId`
      * Delete a Log Stream
      * @param logStreamId id of the log stream
      */
  deleteLogStream(logStreamId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a log stream by `logStreamId`
      * Retrieve a Log Stream
      * @param logStreamId id of the log stream
      */
  getLogStream(logStreamId: string, _options?: Configuration): Observable<LogStream>;
  /**
      * Lists all log streams. You can request a paginated list or a subset of Log Streams that match a supported filter expression.
      * List all Log Streams
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param filter SCIM filter expression that filters the results. This expression only supports the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60;.
      */
  listLogStreams(after?: string, limit?: number, filter?: string, _options?: Configuration): Observable<Collection<LogStream>>;
  /**
      * Replaces a log stream by `logStreamId`
      * Replace a Log Stream
      * @param logStreamId id of the log stream
      * @param instance
      */
  replaceLogStream(logStreamId: string, instance: LogStream, _options?: Configuration): Observable<LogStream>;
}
import { NetworkZoneApiRequestFactory, NetworkZoneApiResponseProcessor } from '../apis/NetworkZoneApi';
export declare class ObservableNetworkZoneApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: NetworkZoneApiRequestFactory, responseProcessor?: NetworkZoneApiResponseProcessor);
  /**
      * Activates a network zone by `zoneId`
      * Activate a Network Zone
      * @param zoneId
      */
  activateNetworkZone(zoneId: string, _options?: Configuration): Observable<NetworkZone>;
  /**
      * Creates a new network zone. * At least one of either the `gateways` attribute or `proxies` attribute must be defined when creating a Network Zone. * At least one of the following attributes must be defined: `proxyType`, `locations`, or `asns`.
      * Create a Network Zone
      * @param zone
      */
  createNetworkZone(zone: NetworkZone, _options?: Configuration): Observable<NetworkZone>;
  /**
      * Deactivates a network zone by `zoneId`
      * Deactivate a Network Zone
      * @param zoneId
      */
  deactivateNetworkZone(zoneId: string, _options?: Configuration): Observable<NetworkZone>;
  /**
      * Deletes network zone by `zoneId`
      * Delete a Network Zone
      * @param zoneId
      */
  deleteNetworkZone(zoneId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a network zone by `zoneId`
      * Retrieve a Network Zone
      * @param zoneId
      */
  getNetworkZone(zoneId: string, _options?: Configuration): Observable<NetworkZone>;
  /**
      * Lists all network zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id` and `usage` properties. See [Filtering](https://developer.okta.com/docs/reference/core-okta-api/#filter) for more information on the expressions that are used in filtering.
      * List all Network Zones
      * @param after Specifies the pagination cursor for the next page of network zones
      * @param limit Specifies the number of results for a page
      * @param filter Filters zones by usage or id expression
      */
  listNetworkZones(after?: string, limit?: number, filter?: string, _options?: Configuration): Observable<Collection<NetworkZone>>;
  /**
      * Replaces a network zone by `zoneId`. The replaced network zone type must be the same as the existing type. You may replace the usage (`POLICY`, `BLOCKLIST`) of a network zone by updating the `usage` attribute.
      * Replace a Network Zone
      * @param zoneId
      * @param zone
      */
  replaceNetworkZone(zoneId: string, zone: NetworkZone, _options?: Configuration): Observable<NetworkZone>;
}
import { OrgSettingApiRequestFactory, OrgSettingApiResponseProcessor } from '../apis/OrgSettingApi';
export declare class ObservableOrgSettingApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: OrgSettingApiRequestFactory, responseProcessor?: OrgSettingApiResponseProcessor);
  /**
      * Removes a list of email addresses to be removed from the set of email addresses that are bounced
      * Remove Emails from Email Provider Bounce List
      * @param BouncesRemoveListObj
      */
  bulkRemoveEmailAddressBounces(BouncesRemoveListObj?: BouncesRemoveListObj, _options?: Configuration): Observable<BouncesRemoveListResult>;
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
      * Extend Okta Support Access
      */
  extendOktaSupport(_options?: Configuration): Observable<OrgOktaSupportSettingsObj>;
  /**
      * Retrieves Okta Communication Settings of your organization
      * Retrieve the Okta Communication Settings
      */
  getOktaCommunicationSettings(_options?: Configuration): Observable<OrgOktaCommunicationSetting>;
  /**
      * Retrieves Contact Types of your organization
      * Retrieve the Org Contact Types
      */
  getOrgContactTypes(_options?: Configuration): Observable<Collection<OrgContactTypeObj>>;
  /**
      * Retrieves the URL of the User associated with the specified Contact Type
      * Retrieve the User of the Contact Type
      * @param contactType
      */
  getOrgContactUser(contactType: string, _options?: Configuration): Observable<OrgContactUser>;
  /**
      * Retrieves Okta Support Settings of your organization
      * Retrieve the Okta Support Settings
      */
  getOrgOktaSupportSettings(_options?: Configuration): Observable<OrgOktaSupportSettingsObj>;
  /**
      * Retrieves preferences of your organization
      * Retrieve the Org Preferences
      */
  getOrgPreferences(_options?: Configuration): Observable<OrgPreferences>;
  /**
      * Retrieves the org settings
      * Retrieve the Org Settings
      */
  getOrgSettings(_options?: Configuration): Observable<OrgSetting>;
  /**
      * Retrieves the well-known org metadata, which includes the id, configured custom domains, authentication pipeline, and various other org settings
      * Retrieve the Well-Known Org Metadata
      */
  getWellknownOrgMetadata(_options?: Configuration): Observable<WellKnownOrgMetadata>;
  /**
      * Grants Okta Support temporary access your org as an administrator for eight hours
      * Grant Okta Support Access to your Org
      */
  grantOktaSupport(_options?: Configuration): Observable<OrgOktaSupportSettingsObj>;
  /**
      * Opts in all users of this org to Okta Communication emails
      * Opt in all Users to Okta Communication emails
      */
  optInUsersToOktaCommunicationEmails(_options?: Configuration): Observable<OrgOktaCommunicationSetting>;
  /**
      * Opts out all users of this org from Okta Communication emails
      * Opt out all Users from Okta Communication emails
      */
  optOutUsersFromOktaCommunicationEmails(_options?: Configuration): Observable<OrgOktaCommunicationSetting>;
  /**
      * Replaces the User associated with the specified Contact Type
      * Replace the User of the Contact Type
      * @param contactType
      * @param orgContactUser
      */
  replaceOrgContactUser(contactType: string, orgContactUser: OrgContactUser, _options?: Configuration): Observable<OrgContactUser>;
  /**
      * Replaces the settings of your organization
      * Replace the Org Settings
      * @param orgSetting
      */
  replaceOrgSettings(orgSetting: OrgSetting, _options?: Configuration): Observable<OrgSetting>;
  /**
      * Revokes Okta Support access to your organization
      * Revoke Okta Support Access
      */
  revokeOktaSupport(_options?: Configuration): Observable<OrgOktaSupportSettingsObj>;
  /**
      * Updates the preference hide the Okta UI footer for all end users of your organization
      * Update the Preference to Hide the Okta Dashboard Footer
      */
  updateOrgHideOktaUIFooter(_options?: Configuration): Observable<OrgPreferences>;
  /**
      * Partially updates the org settings depending on provided fields
      * Update the Org Settings
      * @param OrgSetting
      */
  updateOrgSettings(OrgSetting?: OrgSetting, _options?: Configuration): Observable<OrgSetting>;
  /**
      * Updates the preference to show the Okta UI footer for all end users of your organization
      * Update the Preference to Show the Okta Dashboard Footer
      */
  updateOrgShowOktaUIFooter(_options?: Configuration): Observable<OrgPreferences>;
  /**
      * Uploads and replaces the logo for your organization. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Org Logo
      * @param file
      */
  uploadOrgLogo(file: HttpFile, _options?: Configuration): Observable<void>;
}
import { PolicyApiRequestFactory, PolicyApiResponseProcessor } from '../apis/PolicyApi';
export declare class ObservablePolicyApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: PolicyApiRequestFactory, responseProcessor?: PolicyApiResponseProcessor);
  /**
      * Activates a policy
      * Activate a Policy
      * @param policyId
      */
  activatePolicy(policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Activates a policy rule
      * Activate a Policy Rule
      * @param policyId
      * @param ruleId
      */
  activatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Clones an existing policy
      * Clone an existing policy
      * @param policyId
      */
  clonePolicy(policyId: string, _options?: Configuration): Observable<Policy>;
  /**
      * Creates a policy
      * Create a Policy
      * @param policy
      * @param activate
      */
  createPolicy(policy: Policy, activate?: boolean, _options?: Configuration): Observable<Policy>;
  /**
      * Creates a policy rule
      * Create a Policy Rule
      * @param policyId
      * @param policyRule
      */
  createPolicyRule(policyId: string, policyRule: PolicyRule, _options?: Configuration): Observable<PolicyRule>;
  /**
      * Deactivates a policy
      * Deactivate a Policy
      * @param policyId
      */
  deactivatePolicy(policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates a policy rule
      * Deactivate a Policy Rule
      * @param policyId
      * @param ruleId
      */
  deactivatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a policy
      * Delete a Policy
      * @param policyId
      */
  deletePolicy(policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a policy rule
      * Delete a Policy Rule
      * @param policyId
      * @param ruleId
      */
  deletePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param policyId
      * @param expand
      */
  getPolicy(policyId: string, expand?: string, _options?: Configuration): Observable<Policy>;
  /**
      * Retrieves a policy rule
      * Retrieve a Policy Rule
      * @param policyId
      * @param ruleId
      */
  getPolicyRule(policyId: string, ruleId: string, _options?: Configuration): Observable<PolicyRule>;
  /**
      * Lists all policies with the specified type
      * List all Policies
      * @param type
      * @param status
      * @param expand
      */
  listPolicies(type: string, status?: string, expand?: string, _options?: Configuration): Observable<Collection<Policy>>;
  /**
      * Lists all applications mapped to a policy identified by `policyId`
      * List all Applications mapped to a Policy
      * @param policyId
      */
  listPolicyApps(policyId: string, _options?: Configuration): Observable<Collection<Application>>;
  /**
      * Lists all policy rules
      * List all Policy Rules
      * @param policyId
      */
  listPolicyRules(policyId: string, _options?: Configuration): Observable<Collection<PolicyRule>>;
  /**
      * Replaces a policy
      * Replace a Policy
      * @param policyId
      * @param policy
      */
  replacePolicy(policyId: string, policy: Policy, _options?: Configuration): Observable<Policy>;
  /**
      * Replaces a policy rules
      * Replace a Policy Rule
      * @param policyId
      * @param ruleId
      * @param policyRule
      */
  replacePolicyRule(policyId: string, ruleId: string, policyRule: PolicyRule, _options?: Configuration): Observable<PolicyRule>;
}
import { PrincipalRateLimitApiRequestFactory, PrincipalRateLimitApiResponseProcessor } from '../apis/PrincipalRateLimitApi';
export declare class ObservablePrincipalRateLimitApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: PrincipalRateLimitApiRequestFactory, responseProcessor?: PrincipalRateLimitApiResponseProcessor);
  /**
      * Creates a new Principal Rate Limit entity. In the current release, we only allow one Principal Rate Limit entity per org and principal.
      * Create a Principal Rate Limit
      * @param entity
      */
  createPrincipalRateLimitEntity(entity: PrincipalRateLimitEntity, _options?: Configuration): Observable<PrincipalRateLimitEntity>;
  /**
      * Retrieves a Principal Rate Limit entity by `principalRateLimitId`
      * Retrieve a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      */
  getPrincipalRateLimitEntity(principalRateLimitId: string, _options?: Configuration): Observable<PrincipalRateLimitEntity>;
  /**
      * Lists all Principal Rate Limit entities considering the provided parameters
      * List all Principal Rate Limits
      * @param filter
      * @param after
      * @param limit
      */
  listPrincipalRateLimitEntities(filter?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<PrincipalRateLimitEntity>>;
  /**
      * Replaces a principal rate limit entity by `principalRateLimitId`
      * Replace a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      * @param entity
      */
  replacePrincipalRateLimitEntity(principalRateLimitId: string, entity: PrincipalRateLimitEntity, _options?: Configuration): Observable<PrincipalRateLimitEntity>;
}
import { ProfileMappingApiRequestFactory, ProfileMappingApiResponseProcessor } from '../apis/ProfileMappingApi';
export declare class ObservableProfileMappingApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ProfileMappingApiRequestFactory, responseProcessor?: ProfileMappingApiResponseProcessor);
  /**
      * Retrieves a single Profile Mapping referenced by its ID
      * Retrieve a Profile Mapping
      * @param mappingId
      */
  getProfileMapping(mappingId: string, _options?: Configuration): Observable<ProfileMapping>;
  /**
      * Lists all profile mappings with pagination
      * List all Profile Mappings
      * @param after
      * @param limit
      * @param sourceId
      * @param targetId
      */
  listProfileMappings(after?: string, limit?: number, sourceId?: string, targetId?: string, _options?: Configuration): Observable<Collection<ProfileMapping>>;
  /**
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings
      * Update a Profile Mapping
      * @param mappingId
      * @param profileMapping
      */
  updateProfileMapping(mappingId: string, profileMapping: ProfileMapping, _options?: Configuration): Observable<ProfileMapping>;
}
import { PushProviderApiRequestFactory, PushProviderApiResponseProcessor } from '../apis/PushProviderApi';
export declare class ObservablePushProviderApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: PushProviderApiRequestFactory, responseProcessor?: PushProviderApiResponseProcessor);
  /**
      * Creates a new push provider
      * Create a Push Provider
      * @param pushProvider
      */
  createPushProvider(pushProvider: PushProvider, _options?: Configuration): Observable<PushProvider>;
  /**
      * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
      * Delete a Push Provider
      * @param pushProviderId Id of the push provider
      */
  deletePushProvider(pushProviderId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a push provider by `pushProviderId`
      * Retrieve a Push Provider
      * @param pushProviderId Id of the push provider
      */
  getPushProvider(pushProviderId: string, _options?: Configuration): Observable<PushProvider>;
  /**
      * Lists all push providers
      * List all Push Providers
      * @param type Filters push providers by &#x60;providerType&#x60;
      */
  listPushProviders(type?: ProviderType, _options?: Configuration): Observable<Collection<PushProvider>>;
  /**
      * Replaces a push provider by `pushProviderId`
      * Replace a Push Provider
      * @param pushProviderId Id of the push provider
      * @param pushProvider
      */
  replacePushProvider(pushProviderId: string, pushProvider: PushProvider, _options?: Configuration): Observable<PushProvider>;
}
import { RateLimitSettingsApiRequestFactory, RateLimitSettingsApiResponseProcessor } from '../apis/RateLimitSettingsApi';
export declare class ObservableRateLimitSettingsApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: RateLimitSettingsApiRequestFactory, responseProcessor?: RateLimitSettingsApiResponseProcessor);
  /**
      * Retrieves the currently configured Rate Limit Admin Notification Settings
      * Retrieve the Rate Limit Admin Notification Settings
      */
  getRateLimitSettingsAdminNotifications(_options?: Configuration): Observable<RateLimitAdminNotifications>;
  /**
      * Retrieves the currently configured Per-Client Rate Limit Settings
      * Retrieve the Per-Client Rate Limit Settings
      */
  getRateLimitSettingsPerClient(_options?: Configuration): Observable<PerClientRateLimitSettings>;
  /**
      * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
      * Replace the Rate Limit Admin Notification Settings
      * @param RateLimitAdminNotifications
      */
  replaceRateLimitSettingsAdminNotifications(RateLimitAdminNotifications: RateLimitAdminNotifications, _options?: Configuration): Observable<RateLimitAdminNotifications>;
  /**
      * Replaces the Per-Client Rate Limit Settings and returns the configured properties
      * Replace the Per-Client Rate Limit Settings
      * @param perClientRateLimitSettings
      */
  replaceRateLimitSettingsPerClient(perClientRateLimitSettings: PerClientRateLimitSettings, _options?: Configuration): Observable<PerClientRateLimitSettings>;
}
import { ResourceSetApiRequestFactory, ResourceSetApiResponseProcessor } from '../apis/ResourceSetApi';
export declare class ObservableResourceSetApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ResourceSetApiRequestFactory, responseProcessor?: ResourceSetApiResponseProcessor);
  /**
      * Adds more members to a resource set binding
      * Add more Members to a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  addMembersToBinding(resourceSetId: string, roleIdOrLabel: string, instance: ResourceSetBindingAddMembersRequest, _options?: Configuration): Observable<ResourceSetBindingResponse>;
  /**
      * Adds more resources to a resource set
      * Add more Resource to a resource set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param instance
      */
  addResourceSetResource(resourceSetId: string, instance: ResourceSetResourcePatchRequest, _options?: Configuration): Observable<ResourceSet>;
  /**
      * Creates a new resource set
      * Create a Resource Set
      * @param instance
      */
  createResourceSet(instance: ResourceSet, _options?: Configuration): Observable<ResourceSet>;
  /**
      * Creates a new resource set binding
      * Create a Resource Set Binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param instance
      */
  createResourceSetBinding(resourceSetId: string, instance: ResourceSetBindingCreateRequest, _options?: Configuration): Observable<ResourceSetBindingResponse>;
  /**
      * Deletes a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Delete a Binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteBinding(resourceSetId: string, roleIdOrLabel: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a role by `resourceSetId`
      * Delete a Resource Set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      */
  deleteResourceSet(resourceSetId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a resource identified by `resourceId` from a resource set
      * Delete a Resource from a resource set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param resourceId &#x60;id&#x60; of a resource
      */
  deleteResourceSetResource(resourceSetId: string, resourceId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Retrieve a Binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getBinding(resourceSetId: string, roleIdOrLabel: string, _options?: Configuration): Observable<ResourceSetBindingResponse>;
  /**
      * Retrieves a member identified by `memberId` for a binding
      * Retrieve a Member of a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of a member
      */
  getMemberOfBinding(resourceSetId: string, roleIdOrLabel: string, memberId: string, _options?: Configuration): Observable<ResourceSetBindingMember>;
  /**
      * Retrieves a resource set by `resourceSetId`
      * Retrieve a Resource Set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      */
  getResourceSet(resourceSetId: string, _options?: Configuration): Observable<ResourceSet>;
  /**
      * Lists all resource set bindings with pagination support
      * List all Bindings
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listBindings(resourceSetId: string, after?: string, _options?: Configuration): Observable<ResourceSetBindings>;
  /**
      * Lists all members of a resource set binding with pagination support
      * List all Members of a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listMembersOfBinding(resourceSetId: string, roleIdOrLabel: string, after?: string, _options?: Configuration): Observable<ResourceSetBindingMembers>;
  /**
      * Lists all resources that make up the resource set
      * List all Resources of a resource set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      */
  listResourceSetResources(resourceSetId: string, _options?: Configuration): Observable<ResourceSetResources>;
  /**
      * Lists all resource sets with pagination support
      * List all Resource Sets
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listResourceSets(after?: string, _options?: Configuration): Observable<ResourceSets>;
  /**
      * Replaces a resource set by `resourceSetId`
      * Replace a Resource Set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param instance
      */
  replaceResourceSet(resourceSetId: string, instance: ResourceSet, _options?: Configuration): Observable<ResourceSet>;
  /**
      * Unassigns a member identified by `memberId` from a binding
      * Unassign a Member from a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of a member
      */
  unassignMemberFromBinding(resourceSetId: string, roleIdOrLabel: string, memberId: string, _options?: Configuration): Observable<void>;
}
import { RiskEventApiRequestFactory, RiskEventApiResponseProcessor } from '../apis/RiskEventApi';
export declare class ObservableRiskEventApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: RiskEventApiRequestFactory, responseProcessor?: RiskEventApiResponseProcessor);
  /**
      * Sends multiple IP risk events to Okta. This request is used by a third-party risk provider to send IP risk events to Okta. The third-party risk provider needs to be registered with Okta before they can send events to Okta. See [Risk Providers](/openapi/okta-management/management/tag/RiskProvider/). This API has a rate limit of 30 requests per minute. You can include multiple risk events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. Prioritize sending high risk signals if you have a burst of signals to send that would exceed the maximum request limits.
      * Send multiple Risk Events
      * @param instance
      */
  sendRiskEvents(instance: Array<RiskEvent>, _options?: Configuration): Observable<void>;
}
import { RiskProviderApiRequestFactory, RiskProviderApiResponseProcessor } from '../apis/RiskProviderApi';
export declare class ObservableRiskProviderApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: RiskProviderApiRequestFactory, responseProcessor?: RiskProviderApiResponseProcessor);
  /**
      * Creates a Risk Provider object. A maximum of three Risk Provider objects can be created.
      * Create a Risk Provider
      * @param instance
      */
  createRiskProvider(instance: RiskProvider, _options?: Configuration): Observable<RiskProvider>;
  /**
      * Deletes a Risk Provider object by its ID
      * Delete a Risk Provider
      * @param riskProviderId &#x60;id&#x60; of the Risk Provider object
      */
  deleteRiskProvider(riskProviderId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a Risk Provider object by ID
      * Retrieve a Risk Provider
      * @param riskProviderId &#x60;id&#x60; of the Risk Provider object
      */
  getRiskProvider(riskProviderId: string, _options?: Configuration): Observable<RiskProvider>;
  /**
      * Lists all Risk Provider objects
      * List all Risk Providers
      */
  listRiskProviders(_options?: Configuration): Observable<Collection<RiskProvider>>;
  /**
      * Replaces the properties for a given Risk Provider object ID
      * Replace a Risk Provider
      * @param riskProviderId &#x60;id&#x60; of the Risk Provider object
      * @param instance
      */
  replaceRiskProvider(riskProviderId: string, instance: RiskProvider, _options?: Configuration): Observable<RiskProvider>;
}
import { RoleApiRequestFactory, RoleApiResponseProcessor } from '../apis/RoleApi';
export declare class ObservableRoleApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: RoleApiRequestFactory, responseProcessor?: RoleApiResponseProcessor);
  /**
      * Creates a new role
      * Create a Role
      * @param instance
      */
  createRole(instance: IamRole, _options?: Configuration): Observable<IamRole>;
  /**
      * Creates a permission specified by `permissionType` to the role
      * Create a Permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An okta permission type
      */
  createRolePermission(roleIdOrLabel: string, permissionType: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a role by `roleIdOrLabel`
      * Delete a Role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteRole(roleIdOrLabel: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a permission from a role by `permissionType`
      * Delete a Permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An okta permission type
      */
  deleteRolePermission(roleIdOrLabel: string, permissionType: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a role by `roleIdOrLabel`
      * Retrieve a Role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getRole(roleIdOrLabel: string, _options?: Configuration): Observable<IamRole>;
  /**
      * Retrieves a permission by `permissionType`
      * Retrieve a Permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An okta permission type
      */
  getRolePermission(roleIdOrLabel: string, permissionType: string, _options?: Configuration): Observable<Permission>;
  /**
      * Lists all permissions of the role by `roleIdOrLabel`
      * List all Permissions
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  listRolePermissions(roleIdOrLabel: string, _options?: Configuration): Observable<Permissions>;
  /**
      * Lists all roles with pagination support
      * List all Roles
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listRoles(after?: string, _options?: Configuration): Observable<IamRoles>;
  /**
      * Replaces a role by `roleIdOrLabel`
      * Replace a Role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  replaceRole(roleIdOrLabel: string, instance: IamRole, _options?: Configuration): Observable<IamRole>;
}
import { RoleAssignmentApiRequestFactory, RoleAssignmentApiResponseProcessor } from '../apis/RoleAssignmentApi';
export declare class ObservableRoleAssignmentApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: RoleAssignmentApiRequestFactory, responseProcessor?: RoleAssignmentApiResponseProcessor);
  /**
      * Assigns a role to a group
      * Assign a Role to a Group
      * @param groupId
      * @param assignRoleRequest
      * @param disableNotifications Setting this to &#x60;true&#x60; grants the group third-party admin status
      */
  assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: boolean, _options?: Configuration): Observable<Role | void>;
  /**
      * Assigns a role to a user identified by `userId`
      * Assign a Role to a User
      * @param userId
      * @param assignRoleRequest
      * @param disableNotifications Setting this to &#x60;true&#x60; grants the user third-party admin status
      */
  assignRoleToUser(userId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: boolean, _options?: Configuration): Observable<Role>;
  /**
      * Retrieves a role identified by `roleId` assigned to group identified by `groupId`
      * Retrieve a Role assigned to Group
      * @param groupId
      * @param roleId
      */
  getGroupAssignedRole(groupId: string, roleId: string, _options?: Configuration): Observable<Role>;
  /**
      * Retrieves a role identified by `roleId` assigned to a user identified by `userId`
      * Retrieve a Role assigned to a User
      * @param userId
      * @param roleId
      */
  getUserAssignedRole(userId: string, roleId: string, _options?: Configuration): Observable<Role>;
  /**
      * Lists all roles assigned to a user identified by `userId`
      * List all Roles assigned to a User
      * @param userId
      * @param expand
      */
  listAssignedRolesForUser(userId: string, expand?: string, _options?: Configuration): Observable<Collection<Role>>;
  /**
      * Lists all assigned roles of group identified by `groupId`
      * List all Assigned Roles of Group
      * @param groupId
      * @param expand
      */
  listGroupAssignedRoles(groupId: string, expand?: string, _options?: Configuration): Observable<Collection<Role>>;
  /**
      * Unassigns a role identified by `roleId` assigned to group identified by `groupId`
      * Unassign a Role from a Group
      * @param groupId
      * @param roleId
      */
  unassignRoleFromGroup(groupId: string, roleId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a role identified by `roleId` from a user identified by `userId`
      * Unassign a Role from a User
      * @param userId
      * @param roleId
      */
  unassignRoleFromUser(userId: string, roleId: string, _options?: Configuration): Observable<void>;
}
import { RoleTargetApiRequestFactory, RoleTargetApiResponseProcessor } from '../apis/RoleTargetApi';
export declare class ObservableRoleTargetApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: RoleTargetApiRequestFactory, responseProcessor?: RoleTargetApiResponseProcessor);
  /**
      * Assigns all Apps as Target to Role
      * Assign all Apps as Target to Role
      * @param userId
      * @param roleId
      */
  assignAllAppsAsTargetToRoleForUser(userId: string, roleId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns App Instance Target to App Administrator Role given to a Group
      * Assign an Application Instance Target to Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  assignAppInstanceTargetToAppAdminRoleForGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns anapplication instance target to appplication administrator role
      * Assign an Application Instance Target to an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  assignAppInstanceTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  assignAppTargetToAdminRoleForGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  assignAppTargetToAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns a group target to a group role
      * Assign a Group Target to a Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  assignGroupTargetToGroupAdminRole(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns a Group Target to Role
      * Assign a Group Target to Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  assignGroupTargetToUserRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Observable<void>;
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for an Application Administrator Role
      * @param groupId
      * @param roleId
      * @param after
      * @param limit
      */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<CatalogApplication>>;
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for Application Administrator Role
      * @param userId
      * @param roleId
      * @param after
      * @param limit
      */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<CatalogApplication>>;
  /**
      * Lists all group targets for a group role
      * List all Group Targets for a Group Role
      * @param groupId
      * @param roleId
      * @param after
      * @param limit
      */
  listGroupTargetsForGroupRole(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<Group>>;
  /**
      * Lists all group targets for role
      * List all Group Targets for Role
      * @param userId
      * @param roleId
      * @param after
      * @param limit
      */
  listGroupTargetsForRole(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<Group>>;
  /**
      * Unassigns an application instance target from an application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  unassignAppInstanceTargetFromAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns an application instance target from application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  unassignAppInstanceTargetToAppAdminRoleForGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  unassignAppTargetFromAppAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  unassignAppTargetToAdminRoleForGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a group target from a group role
      * Unassign a Group Target from a Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  unassignGroupTargetFromGroupAdminRole(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a Group Target from Role
      * Unassign a Group Target from Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  unassignGroupTargetFromUserAdminRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Observable<void>;
}
import { SchemaApiRequestFactory, SchemaApiResponseProcessor } from '../apis/SchemaApi';
export declare class ObservableSchemaApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SchemaApiRequestFactory, responseProcessor?: SchemaApiResponseProcessor);
  /**
      * Retrieves the UI schema for an Application given `appName`, `section` and `operation`
      * Retrieve the UI schema for a section
      * @param appName
      * @param section
      * @param operation
      */
  getAppUISchema(appName: string, section: string, operation: string, _options?: Configuration): Observable<ApplicationLayout>;
  /**
      * Retrieves the links for UI schemas for an Application given `appName`
      * Retrieve the links for UI schemas for an Application
      * @param appName
      */
  getAppUISchemaLinks(appName: string, _options?: Configuration): Observable<ApplicationLayouts>;
  /**
      * Retrieves the Schema for an App User
      * Retrieve the default Application User Schema for an Application
      * @param appInstanceId
      */
  getApplicationUserSchema(appInstanceId: string, _options?: Configuration): Observable<UserSchema>;
  /**
      * Retrieves the group schema
      * Retrieve the default Group Schema
      */
  getGroupSchema(_options?: Configuration): Observable<GroupSchema>;
  /**
      * Retrieves the schema for a Log Stream type. The `logStreamType` element in the URL specifies the Log Stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
      * Retrieve the Log Stream Schema for the schema type
      * @param logStreamType
      */
  getLogStreamSchema(logStreamType: LogStreamType, _options?: Configuration): Observable<LogStreamSchema>;
  /**
      * Retrieves the schema for a Schema Id
      * Retrieve a User Schema
      * @param schemaId
      */
  getUserSchema(schemaId: string, _options?: Configuration): Observable<UserSchema>;
  /**
      * Lists the schema for all log stream types visible for this org
      * List the Log Stream Schemas
      */
  listLogStreamSchemas(_options?: Configuration): Observable<Collection<LogStreamSchema>>;
  /**
      * Partially updates on the User Profile properties of the Application User Schema
      * Update the default Application User Schema for an Application
      * @param appInstanceId
      * @param body
      */
  updateApplicationUserProfile(appInstanceId: string, body?: UserSchema, _options?: Configuration): Observable<UserSchema>;
  /**
      * Updates the default group schema. This updates, adds, or removes one or more custom Group Profile properties in the schema.
      * Update the default Group Schema
      * @param GroupSchema
      */
  updateGroupSchema(GroupSchema?: GroupSchema, _options?: Configuration): Observable<GroupSchema>;
  /**
      * Partially updates on the User Profile properties of the user schema
      * Update a User Schema
      * @param schemaId
      * @param userSchema
      */
  updateUserProfile(schemaId: string, userSchema: UserSchema, _options?: Configuration): Observable<UserSchema>;
}
import { SessionApiRequestFactory, SessionApiResponseProcessor } from '../apis/SessionApi';
export declare class ObservableSessionApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SessionApiRequestFactory, responseProcessor?: SessionApiResponseProcessor);
  /**
      * Creates a new Session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
      * Create a Session with session token
      * @param createSessionRequest
      */
  createSession(createSessionRequest: CreateSessionRequest, _options?: Configuration): Observable<Session>;
  /**
      * Retrieves information about the Session specified by the given session ID
      * Retrieve a Session
      * @param sessionId &#x60;id&#x60; of a valid Session
      */
  getSession(sessionId: string, _options?: Configuration): Observable<Session>;
  /**
      * Refreshes an existing Session using the `id` for that Session. A successful response contains the refreshed Session with an updated `expiresAt` timestamp.
      * Refresh a Session
      * @param sessionId &#x60;id&#x60; of a valid Session
      */
  refreshSession(sessionId: string, _options?: Configuration): Observable<Session>;
  /**
      * Revokes the specified Session
      * Revoke a Session
      * @param sessionId &#x60;id&#x60; of a valid Session
      */
  revokeSession(sessionId: string, _options?: Configuration): Observable<void>;
}
import { SubscriptionApiRequestFactory, SubscriptionApiResponseProcessor } from '../apis/SubscriptionApi';
export declare class ObservableSubscriptionApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SubscriptionApiRequestFactory, responseProcessor?: SubscriptionApiResponseProcessor);
  /**
      * Lists all subscriptions of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role
      * @param roleTypeOrRoleId
      */
  listRoleSubscriptions(roleTypeOrRoleId: string, _options?: Configuration): Observable<Collection<Subscription>>;
  /**
      * Lists all subscriptions with a specific notification type of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role with a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  listRoleSubscriptionsByNotificationType(roleTypeOrRoleId: string, notificationType: string, _options?: Configuration): Observable<Subscription>;
  /**
      * Lists all subscriptions of a user. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions
      * @param userId
      */
  listUserSubscriptions(userId: string, _options?: Configuration): Observable<Collection<Subscription>>;
  /**
      * Lists all the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions by type
      * @param userId
      * @param notificationType
      */
  listUserSubscriptionsByNotificationType(userId: string, notificationType: string, _options?: Configuration): Observable<Subscription>;
  /**
      * Subscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` to a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
      * Subscribe a Custom Role to a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string, _options?: Configuration): Observable<void>;
  /**
      * Subscribes a User to a specific notification type. Only the current User can subscribe to a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Subscribe to a specific notification type
      * @param userId
      * @param notificationType
      */
  subscribeUserSubscriptionByNotificationType(userId: string, notificationType: string, _options?: Configuration): Observable<void>;
  /**
      * Unsubscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` from a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
      * Unsubscribe a Custom Role from a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string, _options?: Configuration): Observable<void>;
  /**
      * Unsubscribes a User from a specific notification type. Only the current User can unsubscribe from a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Unsubscribe from a specific notification type
      * @param userId
      * @param notificationType
      */
  unsubscribeUserSubscriptionByNotificationType(userId: string, notificationType: string, _options?: Configuration): Observable<void>;
}
import { SystemLogApiRequestFactory, SystemLogApiResponseProcessor } from '../apis/SystemLogApi';
export declare class ObservableSystemLogApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SystemLogApiRequestFactory, responseProcessor?: SystemLogApiResponseProcessor);
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
  listLogEvents(since?: Date, until?: Date, filter?: string, q?: string, limit?: number, sortOrder?: string, after?: string, _options?: Configuration): Observable<Collection<LogEvent>>;
}
import { TemplateApiRequestFactory, TemplateApiResponseProcessor } from '../apis/TemplateApi';
export declare class ObservableTemplateApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: TemplateApiRequestFactory, responseProcessor?: TemplateApiResponseProcessor);
  /**
      * Creates a new custom SMS template
      * Create an SMS Template
      * @param smsTemplate
      */
  createSmsTemplate(smsTemplate: SmsTemplate, _options?: Configuration): Observable<SmsTemplate>;
  /**
      * Deletes an SMS template
      * Delete an SMS Template
      * @param templateId
      */
  deleteSmsTemplate(templateId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a specific template by `id`
      * Retrieve an SMS Template
      * @param templateId
      */
  getSmsTemplate(templateId: string, _options?: Configuration): Observable<SmsTemplate>;
  /**
      * Lists all custom SMS templates. A subset of templates can be returned that match a template type.
      * List all SMS Templates
      * @param templateType
      */
  listSmsTemplates(templateType?: SmsTemplateType, _options?: Configuration): Observable<Collection<SmsTemplate>>;
  /**
      * Replaces the SMS template
      * Replace an SMS Template
      * @param templateId
      * @param smsTemplate
      */
  replaceSmsTemplate(templateId: string, smsTemplate: SmsTemplate, _options?: Configuration): Observable<SmsTemplate>;
  /**
      * Updates an SMS template
      * Update an SMS Template
      * @param templateId
      * @param smsTemplate
      */
  updateSmsTemplate(templateId: string, smsTemplate: SmsTemplate, _options?: Configuration): Observable<SmsTemplate>;
}
import { ThreatInsightApiRequestFactory, ThreatInsightApiResponseProcessor } from '../apis/ThreatInsightApi';
export declare class ObservableThreatInsightApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ThreatInsightApiRequestFactory, responseProcessor?: ThreatInsightApiResponseProcessor);
  /**
      * Retrieves current ThreatInsight configuration
      * Retrieve the ThreatInsight Configuration
      */
  getCurrentConfiguration(_options?: Configuration): Observable<ThreatInsightConfiguration>;
  /**
      * Updates ThreatInsight configuration
      * Update the ThreatInsight Configuration
      * @param threatInsightConfiguration
      */
  updateConfiguration(threatInsightConfiguration: ThreatInsightConfiguration, _options?: Configuration): Observable<ThreatInsightConfiguration>;
}
import { TrustedOriginApiRequestFactory, TrustedOriginApiResponseProcessor } from '../apis/TrustedOriginApi';
export declare class ObservableTrustedOriginApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: TrustedOriginApiRequestFactory, responseProcessor?: TrustedOriginApiResponseProcessor);
  /**
      * Activates a trusted origin
      * Activate a Trusted Origin
      * @param trustedOriginId
      */
  activateTrustedOrigin(trustedOriginId: string, _options?: Configuration): Observable<TrustedOrigin>;
  /**
      * Creates a trusted origin
      * Create a Trusted Origin
      * @param trustedOrigin
      */
  createTrustedOrigin(trustedOrigin: TrustedOrigin, _options?: Configuration): Observable<TrustedOrigin>;
  /**
      * Deactivates a trusted origin
      * Deactivate a Trusted Origin
      * @param trustedOriginId
      */
  deactivateTrustedOrigin(trustedOriginId: string, _options?: Configuration): Observable<TrustedOrigin>;
  /**
      * Deletes a trusted origin
      * Delete a Trusted Origin
      * @param trustedOriginId
      */
  deleteTrustedOrigin(trustedOriginId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a trusted origin
      * Retrieve a Trusted Origin
      * @param trustedOriginId
      */
  getTrustedOrigin(trustedOriginId: string, _options?: Configuration): Observable<TrustedOrigin>;
  /**
      * Lists all trusted origins
      * List all Trusted Origins
      * @param q
      * @param filter
      * @param after
      * @param limit
      */
  listTrustedOrigins(q?: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<TrustedOrigin>>;
  /**
      * Replaces a trusted origin
      * Replace a Trusted Origin
      * @param trustedOriginId
      * @param trustedOrigin
      */
  replaceTrustedOrigin(trustedOriginId: string, trustedOrigin: TrustedOrigin, _options?: Configuration): Observable<TrustedOrigin>;
}
import { UserApiRequestFactory, UserApiResponseProcessor } from '../apis/UserApi';
export declare class ObservableUserApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor);
  /**
      * Activates a user. This operation can only be performed on users with a `STAGED` status. Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation. The user will have a status of `ACTIVE` when the activation process is complete. > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Activate a User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  activateUser(userId: string, sendEmail: boolean, _options?: Configuration): Observable<UserActivationToken>;
  /**
      * Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
      * Change Password
      * @param userId
      * @param changePasswordRequest
      * @param strict
      */
  changePassword(userId: string, changePasswordRequest: ChangePasswordRequest, strict?: boolean, _options?: Configuration): Observable<UserCredentials>;
  /**
      * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
      * Change Recovery Question
      * @param userId
      * @param userCredentials
      */
  changeRecoveryQuestion(userId: string, userCredentials: UserCredentials, _options?: Configuration): Observable<UserCredentials>;
  /**
      * Creates a new user in your Okta organization with or without credentials<br> > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Create a User
      * @param body
      * @param activate Executes activation lifecycle operation when creating the user
      * @param provider Indicates whether to create a user with a specified authentication provider
      * @param nextLogin With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in.
      */
  createUser(body: CreateUserRequest, activate?: boolean, provider?: boolean, nextLogin?: UserNextLogin, _options?: Configuration): Observable<User>;
  /**
      * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
      * Deactivate a User
      * @param userId
      * @param sendEmail
      */
  deactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Observable<void>;
  /**
      * Deletes linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Delete a Linked Object
      * @param userId
      * @param relationshipName
      */
  deleteLinkedObjectForUser(userId: string, relationshipName: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**. Calling this on an `ACTIVE` user will transition the user to `DEPROVISIONED`.
      * Delete a User
      * @param userId
      * @param sendEmail
      */
  deleteUser(userId: string, sendEmail?: boolean, _options?: Configuration): Observable<void>;
  /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login
      * Expire Password
      * @param userId
      */
  expirePassword(userId: string, _options?: Configuration): Observable<User>;
  /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response
      * Expire Password and Set Temporary Password
      * @param userId
      * @param revokeSessions When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
      */
  expirePasswordAndGetTemporaryPassword(userId: string, revokeSessions?: boolean, _options?: Configuration): Observable<TempPassword>;
  /**
      * Initiates the forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
      * Initiate Forgot Password
      * @param userId
      * @param sendEmail
      */
  forgotPassword(userId: string, sendEmail?: boolean, _options?: Configuration): Observable<ForgotPasswordResponse>;
  /**
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct
      * Reset Password with Recovery Question
      * @param userId
      * @param userCredentials
      * @param sendEmail
      */
  forgotPasswordSetNewPassword(userId: string, userCredentials: UserCredentials, sendEmail?: boolean, _options?: Configuration): Observable<UserCredentials>;
  /**
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Generate a Reset Password Token
      * @param userId
      * @param sendEmail
      * @param revokeSessions When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
      */
  generateResetPasswordToken(userId: string, sendEmail: boolean, revokeSessions?: boolean, _options?: Configuration): Observable<ResetPasswordToken>;
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
  getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, expand?: string, limit?: number, after?: string, _options?: Configuration): Observable<OAuth2RefreshToken>;
  /**
      * Retrieves a user from your Okta organization
      * Retrieve a User
      * @param userId
      * @param expand Specifies additional metadata to include in the response. Possible value: &#x60;blocks&#x60;
      */
  getUser(userId: string, expand?: string, _options?: Configuration): Observable<User>;
  /**
      * Retrieves a grant for the specified user
      * Retrieve a User Grant
      * @param userId
      * @param grantId
      * @param expand
      */
  getUserGrant(userId: string, grantId: string, expand?: string, _options?: Configuration): Observable<OAuth2ScopeConsentGrant>;
  /**
      * Lists all appLinks for all direct or indirect (via group membership) assigned applications
      * List all Assigned Application Links
      * @param userId
      */
  listAppLinks(userId: string, _options?: Configuration): Observable<Collection<AppLink>>;
  /**
      * Lists all grants for a specified user and client
      * List all Grants for a Client
      * @param userId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listGrantsForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Lists all linked objects for a user, relationshipName can be a primary or associated relationship name
      * List all Linked Objects
      * @param userId
      * @param relationshipName
      * @param after
      * @param limit
      */
  listLinkedObjectsForUser(userId: string, relationshipName: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<ResponseLinks>>;
  /**
      * Lists all refresh tokens issued for the specified User and Client
      * List all Refresh Tokens for a Client
      * @param userId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listRefreshTokensForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2RefreshToken>>;
  /**
      * Lists information about how the user is blocked from accessing their account
      * List all User Blocks
      * @param userId
      */
  listUserBlocks(userId: string, _options?: Configuration): Observable<Collection<UserBlock>>;
  /**
      * Lists all client resources for which the specified user has grants or tokens
      * List all Clients
      * @param userId
      */
  listUserClients(userId: string, _options?: Configuration): Observable<Collection<OAuth2Client>>;
  /**
      * Lists all grants for the specified user
      * List all User Grants
      * @param userId
      * @param scopeId
      * @param expand
      * @param after
      * @param limit
      */
  listUserGrants(userId: string, scopeId?: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Lists all groups of which the user is a member
      * List all Groups
      * @param userId
      */
  listUserGroups(userId: string, _options?: Configuration): Observable<Collection<Group>>;
  /**
      * Lists the IdPs associated with the user
      * List all Identity Providers
      * @param userId
      */
  listUserIdentityProviders(userId: string, _options?: Configuration): Observable<Collection<IdentityProvider>>;
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
  listUsers(q?: string, after?: string, limit?: number, filter?: string, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Observable<Collection<User>>;
  /**
      * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
      * Reactivate a User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  reactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Observable<UserActivationToken>;
  /**
      * Replaces a user's profile and/or credentials using strict-update semantics
      * Replace a User
      * @param userId
      * @param user
      * @param strict
      */
  replaceUser(userId: string, user: UpdateUserRequest, strict?: boolean, _options?: Configuration): Observable<User>;
  /**
      * Resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset all Factors
      * @param userId
      */
  resetFactors(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all grants for the specified user and client
      * Revoke all Grants for a Client
      * @param userId
      * @param clientId
      */
  revokeGrantsForUserAndClient(userId: string, clientId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes the specified refresh token
      * Revoke a Token for a Client
      * @param userId
      * @param clientId
      * @param tokenId
      */
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all refresh tokens issued for the specified User and Client
      * Revoke all Refresh Tokens for a Client
      * @param userId
      * @param clientId
      */
  revokeTokensForUserAndClient(userId: string, clientId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes one grant for a specified user
      * Revoke a User Grant
      * @param userId
      * @param grantId
      */
  revokeUserGrant(userId: string, grantId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all grants for a specified user
      * Revoke all User Grants
      * @param userId
      */
  revokeUserGrants(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Revoke all User Sessions
      * @param userId
      * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
      */
  revokeUserSessions(userId: string, oauthTokens?: boolean, _options?: Configuration): Observable<void>;
  /**
      * Creates a linked object for two users
      * Create a Linked Object for two User
      * @param associatedUserId
      * @param primaryRelationshipName
      * @param primaryUserId
      */
  setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string, _options?: Configuration): Observable<void>;
  /**
      * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
      * Suspend a User
      * @param userId
      */
  suspendUser(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that is blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password.
      * Unlock a User
      * @param userId
      */
  unlockUser(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a User
      * @param userId
      */
  unsuspendUser(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Updates a user partially determined by the request parameters
      * Update a User
      * @param userId
      * @param user
      * @param strict
      */
  updateUser(userId: string, user: UpdateUserRequest, strict?: boolean, _options?: Configuration): Observable<User>;
}
import { UserFactorApiRequestFactory, UserFactorApiResponseProcessor } from '../apis/UserFactorApi';
export declare class ObservableUserFactorApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: UserFactorApiRequestFactory, responseProcessor?: UserFactorApiResponseProcessor);
  /**
      * Activates a factor. The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate a Factor
      * @param userId
      * @param factorId
      * @param body
      */
  activateFactor(userId: string, factorId: string, body?: ActivateFactorRequest, _options?: Configuration): Observable<UserFactor>;
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
  enrollFactor(userId: string, body: UserFactor, updatePhone?: boolean, templateId?: string, tokenLifetimeSeconds?: number, activate?: boolean, _options?: Configuration): Observable<UserFactor>;
  /**
      * Retrieves a factor for the specified user
      * Retrieve a Factor
      * @param userId
      * @param factorId
      */
  getFactor(userId: string, factorId: string, _options?: Configuration): Observable<UserFactor>;
  /**
      * Retrieves the factors verification transaction status
      * Retrieve a Factor Transaction Status
      * @param userId
      * @param factorId
      * @param transactionId
      */
  getFactorTransactionStatus(userId: string, factorId: string, transactionId: string, _options?: Configuration): Observable<VerifyUserFactorResponse>;
  /**
      * Lists all the enrolled factors for the specified user
      * List all Factors
      * @param userId
      */
  listFactors(userId: string, _options?: Configuration): Observable<Collection<UserFactor>>;
  /**
      * Lists all the supported factors that can be enrolled for the specified user
      * List all Supported Factors
      * @param userId
      */
  listSupportedFactors(userId: string, _options?: Configuration): Observable<Collection<UserFactor>>;
  /**
      * Lists all available security questions for a user's `question` factor
      * List all Supported Security Questions
      * @param userId
      */
  listSupportedSecurityQuestions(userId: string, _options?: Configuration): Observable<Collection<SecurityQuestion>>;
  /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor
      * Unenroll a Factor
      * @param userId
      * @param factorId
      * @param removeEnrollmentRecovery
      */
  unenrollFactor(userId: string, factorId: string, removeEnrollmentRecovery?: boolean, _options?: Configuration): Observable<void>;
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
  verifyFactor(userId: string, factorId: string, templateId?: string, tokenLifetimeSeconds?: number, X_Forwarded_For?: string, User_Agent?: string, Accept_Language?: string, body?: VerifyFactorRequest, _options?: Configuration): Observable<VerifyUserFactorResponse>;
}
import { UserTypeApiRequestFactory, UserTypeApiResponseProcessor } from '../apis/UserTypeApi';
export declare class ObservableUserTypeApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: UserTypeApiRequestFactory, responseProcessor?: UserTypeApiResponseProcessor);
  /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * Create a User Type
      * @param userType
      */
  createUserType(userType: UserType, _options?: Configuration): Observable<UserType>;
  /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * Delete a User Type
      * @param typeId
      */
  deleteUserType(typeId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Retrieve a User Type
      * @param typeId
      */
  getUserType(typeId: string, _options?: Configuration): Observable<UserType>;
  /**
      * Lists all User Types in your org
      * List all User Types
      */
  listUserTypes(_options?: Configuration): Observable<Collection<UserType>>;
  /**
      * Replaces an existing user type
      * Replace a User Type
      * @param typeId
      * @param userType
      */
  replaceUserType(typeId: string, userType: UserType, _options?: Configuration): Observable<UserType>;
  /**
      * Updates an existing User Type
      * Update a User Type
      * @param typeId
      * @param userType
      */
  updateUserType(typeId: string, userType: UserType, _options?: Configuration): Observable<UserType>;
}
