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
import { APIServiceIntegrationInstance } from '../models/APIServiceIntegrationInstance';
import { APIServiceIntegrationInstanceSecret } from '../models/APIServiceIntegrationInstanceSecret';
import { AdminConsoleSettings } from '../models/AdminConsoleSettings';
import { AgentAction } from '../models/AgentAction';
import { AgentPool } from '../models/AgentPool';
import { AgentPoolUpdate } from '../models/AgentPoolUpdate';
import { AgentPoolUpdateSetting } from '../models/AgentPoolUpdateSetting';
import { AgentType } from '../models/AgentType';
import { ApiToken } from '../models/ApiToken';
import { ApiTokenUpdate } from '../models/ApiTokenUpdate';
import { AppConnectionUserProvisionJWKResponse } from '../models/AppConnectionUserProvisionJWKResponse';
import { AppServiceAccount } from '../models/AppServiceAccount';
import { AppServiceAccountForUpdate } from '../models/AppServiceAccountForUpdate';
import { AppUser } from '../models/AppUser';
import { AppUserAssignRequest } from '../models/AppUserAssignRequest';
import { AppUserUpdateRequest } from '../models/AppUserUpdateRequest';
import { Application } from '../models/Application';
import { ApplicationFeature } from '../models/ApplicationFeature';
import { ApplicationFeatureType } from '../models/ApplicationFeatureType';
import { ApplicationGroupAssignment } from '../models/ApplicationGroupAssignment';
import { ApplicationLayout } from '../models/ApplicationLayout';
import { ApplicationLayouts } from '../models/ApplicationLayouts';
import { AssignGroupOwnerRequestBody } from '../models/AssignGroupOwnerRequestBody';
import { AssignRoleToGroupRequest } from '../models/AssignRoleToGroupRequest';
import { AssignRoleToUser201Response } from '../models/AssignRoleToUser201Response';
import { AssignRoleToUserRequest } from '../models/AssignRoleToUserRequest';
import { AssignedAppLink } from '../models/AssignedAppLink';
import { AssociatedServerMediated } from '../models/AssociatedServerMediated';
import { AttackProtectionAuthenticatorSettings } from '../models/AttackProtectionAuthenticatorSettings';
import { AuthenticatorBase } from '../models/AuthenticatorBase';
import { AuthenticatorEnrollment } from '../models/AuthenticatorEnrollment';
import { AuthenticatorEnrollmentCreateRequest } from '../models/AuthenticatorEnrollmentCreateRequest';
import { AuthenticatorEnrollmentCreateRequestTac } from '../models/AuthenticatorEnrollmentCreateRequestTac';
import { AuthenticatorMethodBase } from '../models/AuthenticatorMethodBase';
import { AuthenticatorMethodType } from '../models/AuthenticatorMethodType';
import { AuthorizationServer } from '../models/AuthorizationServer';
import { AuthorizationServerJsonWebKey } from '../models/AuthorizationServerJsonWebKey';
import { AuthorizationServerPolicy } from '../models/AuthorizationServerPolicy';
import { AuthorizationServerPolicyRule } from '../models/AuthorizationServerPolicyRule';
import { AuthorizationServerPolicyRuleRequest } from '../models/AuthorizationServerPolicyRuleRequest';
import { AutoAssignAdminAppSetting } from '../models/AutoAssignAdminAppSetting';
import { BehaviorRule } from '../models/BehaviorRule';
import { BouncesRemoveListObj } from '../models/BouncesRemoveListObj';
import { BouncesRemoveListResult } from '../models/BouncesRemoveListResult';
import { Brand } from '../models/Brand';
import { BrandDomains } from '../models/BrandDomains';
import { BrandRequest } from '../models/BrandRequest';
import { BrandWithEmbedded } from '../models/BrandWithEmbedded';
import { BulkDeleteRequestBody } from '../models/BulkDeleteRequestBody';
import { BulkGroupDeleteRequestBody } from '../models/BulkGroupDeleteRequestBody';
import { BulkGroupMembershipsDeleteRequestBody } from '../models/BulkGroupMembershipsDeleteRequestBody';
import { BulkGroupMembershipsUpsertRequestBody } from '../models/BulkGroupMembershipsUpsertRequestBody';
import { BulkGroupUpsertRequestBody } from '../models/BulkGroupUpsertRequestBody';
import { BulkUpsertRequestBody } from '../models/BulkUpsertRequestBody';
import { BundleEntitlementsResponse } from '../models/BundleEntitlementsResponse';
import { CAPTCHAInstance } from '../models/CAPTCHAInstance';
import { CapabilityType } from '../models/CapabilityType';
import { CatalogApplication } from '../models/CatalogApplication';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { ChildOrg } from '../models/ChildOrg';
import { ClientPrivilegesSetting } from '../models/ClientPrivilegesSetting';
import { CreateBrandRequest } from '../models/CreateBrandRequest';
import { CreateGroupPushMappingRequest } from '../models/CreateGroupPushMappingRequest';
import { CreateGroupRequest } from '../models/CreateGroupRequest';
import { CreateGroupRuleRequest } from '../models/CreateGroupRuleRequest';
import { CreateIamRoleRequest } from '../models/CreateIamRoleRequest';
import { CreateOrUpdatePolicy } from '../models/CreateOrUpdatePolicy';
import { CreateRealmAssignmentRequest } from '../models/CreateRealmAssignmentRequest';
import { CreateRealmRequest } from '../models/CreateRealmRequest';
import { CreateResourceSetRequest } from '../models/CreateResourceSetRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateUISchema } from '../models/CreateUISchema';
import { CreateUpdateIamRolePermissionRequest } from '../models/CreateUpdateIamRolePermissionRequest';
import { CreateUserRequest } from '../models/CreateUserRequest';
import { Csr } from '../models/Csr';
import { CsrMetadata } from '../models/CsrMetadata';
import { DesktopMFAEnforceNumberMatchingChallengeOrgSetting } from '../models/DesktopMFAEnforceNumberMatchingChallengeOrgSetting';
import { DesktopMFARecoveryPinOrgSetting } from '../models/DesktopMFARecoveryPinOrgSetting';
import { DetailedHookKeyInstance } from '../models/DetailedHookKeyInstance';
import { Device } from '../models/Device';
import { DeviceAssurance } from '../models/DeviceAssurance';
import { DeviceIntegrations } from '../models/DeviceIntegrations';
import { DeviceList } from '../models/DeviceList';
import { DevicePostureCheck } from '../models/DevicePostureCheck';
import { DeviceUser } from '../models/DeviceUser';
import { DomainCertificate } from '../models/DomainCertificate';
import { DomainListResponse } from '../models/DomainListResponse';
import { DomainRequest } from '../models/DomainRequest';
import { DomainResponse } from '../models/DomainResponse';
import { EmailCustomization } from '../models/EmailCustomization';
import { EmailDefaultContent } from '../models/EmailDefaultContent';
import { EmailDomain } from '../models/EmailDomain';
import { EmailDomainResponse } from '../models/EmailDomainResponse';
import { EmailDomainResponseWithEmbedded } from '../models/EmailDomainResponseWithEmbedded';
import { EmailPreview } from '../models/EmailPreview';
import { EmailServerListResponse } from '../models/EmailServerListResponse';
import { EmailServerPost } from '../models/EmailServerPost';
import { EmailServerRequest } from '../models/EmailServerRequest';
import { EmailServerResponse } from '../models/EmailServerResponse';
import { EmailSettings } from '../models/EmailSettings';
import { EmailSettingsResponse } from '../models/EmailSettingsResponse';
import { EmailTemplateResponse } from '../models/EmailTemplateResponse';
import { EmailTestAddresses } from '../models/EmailTestAddresses';
import { Embedded } from '../models/Embedded';
import { EnrollmentActivationRequest } from '../models/EnrollmentActivationRequest';
import { EnrollmentActivationResponse } from '../models/EnrollmentActivationResponse';
import { EnrollmentInitializationRequest } from '../models/EnrollmentInitializationRequest';
import { EnrollmentInitializationResponse } from '../models/EnrollmentInitializationResponse';
import { EntitlementValuesResponse } from '../models/EntitlementValuesResponse';
import { ErrorPage } from '../models/ErrorPage';
import { EventHook } from '../models/EventHook';
import { ExecuteInlineHook200Response } from '../models/ExecuteInlineHook200Response';
import { ExecuteInlineHookRequest } from '../models/ExecuteInlineHookRequest';
import { Feature } from '../models/Feature';
import { FeatureLifecycle } from '../models/FeatureLifecycle';
import { FederatedClaim } from '../models/FederatedClaim';
import { FederatedClaimRequestBody } from '../models/FederatedClaimRequestBody';
import { ForgotPasswordResponse } from '../models/ForgotPasswordResponse';
import { FulfillmentRequest } from '../models/FulfillmentRequest';
import { GetDRStatus200Response } from '../models/GetDRStatus200Response';
import { GetSsfStreams200Response } from '../models/GetSsfStreams200Response';
import { GovernanceBundle } from '../models/GovernanceBundle';
import { GovernanceBundleCreateRequest } from '../models/GovernanceBundleCreateRequest';
import { GovernanceBundleUpdateRequest } from '../models/GovernanceBundleUpdateRequest';
import { GovernanceBundlesResponse } from '../models/GovernanceBundlesResponse';
import { Group } from '../models/Group';
import { GroupOwner } from '../models/GroupOwner';
import { GroupPushMapping } from '../models/GroupPushMapping';
import { GroupRule } from '../models/GroupRule';
import { GroupSchema } from '../models/GroupSchema';
import { HookKey } from '../models/HookKey';
import { HostedPage } from '../models/HostedPage';
import { IamRole } from '../models/IamRole';
import { IamRoles } from '../models/IamRoles';
import { IdPCertificateCredential } from '../models/IdPCertificateCredential';
import { IdPCsr } from '../models/IdPCsr';
import { IdPKeyCredential } from '../models/IdPKeyCredential';
import { IdentityProvider } from '../models/IdentityProvider';
import { IdentityProviderApplicationUser } from '../models/IdentityProviderApplicationUser';
import { IdentityProviderType } from '../models/IdentityProviderType';
import { IdentitySourceSession } from '../models/IdentitySourceSession';
import { ImageUploadResponse } from '../models/ImageUploadResponse';
import { InlineHook } from '../models/InlineHook';
import { InlineHookCreate } from '../models/InlineHookCreate';
import { InlineHookCreateResponse } from '../models/InlineHookCreateResponse';
import { InlineHookReplace } from '../models/InlineHookReplace';
import { JsonPatchOperation } from '../models/JsonPatchOperation';
import { JsonWebKey } from '../models/JsonWebKey';
import { JwkUse } from '../models/JwkUse';
import { KeepCurrent } from '../models/KeepCurrent';
import { KeyRequest } from '../models/KeyRequest';
import { LinkedObject } from '../models/LinkedObject';
import { ListGroupAssignedRoles200ResponseInner } from '../models/ListGroupAssignedRoles200ResponseInner';
import { ListProfileMappings } from '../models/ListProfileMappings';
import { ListRoleSubscriptionsRoleTypeOrRoleIdParameter } from '../models/ListRoleSubscriptionsRoleTypeOrRoleIdParameter';
import { LogEvent } from '../models/LogEvent';
import { LogStream } from '../models/LogStream';
import { LogStreamPutSchema } from '../models/LogStreamPutSchema';
import { LogStreamSchema } from '../models/LogStreamSchema';
import { LogStreamType } from '../models/LogStreamType';
import { NetworkZone } from '../models/NetworkZone';
import { NotificationType } from '../models/NotificationType';
import { OAuth2Claim } from '../models/OAuth2Claim';
import { OAuth2Client } from '../models/OAuth2Client';
import { OAuth2ClientJsonWebKey } from '../models/OAuth2ClientJsonWebKey';
import { OAuth2ClientJsonWebKeyRequestBody } from '../models/OAuth2ClientJsonWebKeyRequestBody';
import { OAuth2ClientSecret } from '../models/OAuth2ClientSecret';
import { OAuth2ClientSecretRequestBody } from '../models/OAuth2ClientSecretRequestBody';
import { OAuth2RefreshToken } from '../models/OAuth2RefreshToken';
import { OAuth2Scope } from '../models/OAuth2Scope';
import { OAuth2ScopeConsentGrant } from '../models/OAuth2ScopeConsentGrant';
import { OAuthProvisioningEnabledApp } from '../models/OAuthProvisioningEnabledApp';
import { OktaPersonalAdminFeatureSettings } from '../models/OktaPersonalAdminFeatureSettings';
import { OktaSupportCase } from '../models/OktaSupportCase';
import { OktaSupportCases } from '../models/OktaSupportCases';
import { OperationRequest } from '../models/OperationRequest';
import { OperationResponse } from '../models/OperationResponse';
import { OptInStatusResponse } from '../models/OptInStatusResponse';
import { OrgAerialConsent } from '../models/OrgAerialConsent';
import { OrgAerialConsentDetails } from '../models/OrgAerialConsentDetails';
import { OrgAerialConsentRevoked } from '../models/OrgAerialConsentRevoked';
import { OrgCAPTCHASettings } from '../models/OrgCAPTCHASettings';
import { OrgCWOConnection } from '../models/OrgCWOConnection';
import { OrgCWOConnectionPatchRequest } from '../models/OrgCWOConnectionPatchRequest';
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
import { PersonalAppsBlockList } from '../models/PersonalAppsBlockList';
import { PinRequest } from '../models/PinRequest';
import { Policy } from '../models/Policy';
import { PolicyMapping } from '../models/PolicyMapping';
import { PolicyMappingRequest } from '../models/PolicyMappingRequest';
import { PolicyRule } from '../models/PolicyRule';
import { PostAPIServiceIntegrationInstance } from '../models/PostAPIServiceIntegrationInstance';
import { PostAPIServiceIntegrationInstanceRequest } from '../models/PostAPIServiceIntegrationInstanceRequest';
import { PrincipalRateLimitEntity } from '../models/PrincipalRateLimitEntity';
import { PrivilegedResource } from '../models/PrivilegedResource';
import { PrivilegedResourceAccountAppResponse } from '../models/PrivilegedResourceAccountAppResponse';
import { PrivilegedResourceFilters } from '../models/PrivilegedResourceFilters';
import { PrivilegedResourceUpdateRequest } from '../models/PrivilegedResourceUpdateRequest';
import { ProfileMapping } from '../models/ProfileMapping';
import { ProfileMappingRequest } from '../models/ProfileMappingRequest';
import { ProviderType } from '../models/ProviderType';
import { ProvisioningConnectionResponse } from '../models/ProvisioningConnectionResponse';
import { PushProvider } from '../models/PushProvider';
import { RateLimitAdminNotifications } from '../models/RateLimitAdminNotifications';
import { RateLimitWarningThresholdRequest } from '../models/RateLimitWarningThresholdRequest';
import { RateLimitWarningThresholdResponse } from '../models/RateLimitWarningThresholdResponse';
import { Realm } from '../models/Realm';
import { RealmAssignment } from '../models/RealmAssignment';
import { ReplaceUserClassification } from '../models/ReplaceUserClassification';
import { ResendUserFactor } from '../models/ResendUserFactor';
import { ResetPasswordToken } from '../models/ResetPasswordToken';
import { ResourceSet } from '../models/ResourceSet';
import { ResourceSetBindingAddMembersRequest } from '../models/ResourceSetBindingAddMembersRequest';
import { ResourceSetBindingCreateRequest } from '../models/ResourceSetBindingCreateRequest';
import { ResourceSetBindingEditResponse } from '../models/ResourceSetBindingEditResponse';
import { ResourceSetBindingMember } from '../models/ResourceSetBindingMember';
import { ResourceSetBindingMembers } from '../models/ResourceSetBindingMembers';
import { ResourceSetBindingResponse } from '../models/ResourceSetBindingResponse';
import { ResourceSetBindings } from '../models/ResourceSetBindings';
import { ResourceSetResource } from '../models/ResourceSetResource';
import { ResourceSetResourcePatchRequest } from '../models/ResourceSetResourcePatchRequest';
import { ResourceSetResourcePostRequest } from '../models/ResourceSetResourcePostRequest';
import { ResourceSetResourcePutRequest } from '../models/ResourceSetResourcePutRequest';
import { ResourceSetResources } from '../models/ResourceSetResources';
import { ResourceSets } from '../models/ResourceSets';
import { ResponseLinks } from '../models/ResponseLinks';
import { RiskEvent } from '../models/RiskEvent';
import { RiskProvider } from '../models/RiskProvider';
import { RoleAssignedUsers } from '../models/RoleAssignedUsers';
import { RoleGovernance } from '../models/RoleGovernance';
import { RoleGovernanceResources } from '../models/RoleGovernanceResources';
import { RoleGovernanceSource } from '../models/RoleGovernanceSource';
import { RoleTarget } from '../models/RoleTarget';
import { RotatePasswordRequest } from '../models/RotatePasswordRequest';
import { SecurityEventsProviderRequest } from '../models/SecurityEventsProviderRequest';
import { SecurityEventsProviderResponse } from '../models/SecurityEventsProviderResponse';
import { ServiceAccount } from '../models/ServiceAccount';
import { ServiceAccountForUpdate } from '../models/ServiceAccountForUpdate';
import { Session } from '../models/Session';
import { SignInPage } from '../models/SignInPage';
import { SimulatePolicyBody } from '../models/SimulatePolicyBody';
import { SimulatePolicyResponse } from '../models/SimulatePolicyResponse';
import { SmsTemplate } from '../models/SmsTemplate';
import { SmsTemplateType } from '../models/SmsTemplateType';
import { SocialAuthToken } from '../models/SocialAuthToken';
import { StartOrgFailback200Response } from '../models/StartOrgFailback200Response';
import { StartOrgFailbackRequest } from '../models/StartOrgFailbackRequest';
import { StartOrgFailover200Response } from '../models/StartOrgFailover200Response';
import { StartOrgFailoverRequest } from '../models/StartOrgFailoverRequest';
import { StreamConfiguration } from '../models/StreamConfiguration';
import { StreamConfigurationCreateRequest } from '../models/StreamConfigurationCreateRequest';
import { StreamStatus } from '../models/StreamStatus';
import { StreamVerificationRequest } from '../models/StreamVerificationRequest';
import { SubmissionRequest } from '../models/SubmissionRequest';
import { SubmissionResponse } from '../models/SubmissionResponse';
import { Subscription } from '../models/Subscription';
import { TacAuthenticatorEnrollment } from '../models/TacAuthenticatorEnrollment';
import { TestInfo } from '../models/TestInfo';
import { ThemeResponse } from '../models/ThemeResponse';
import { ThirdPartyAdminSetting } from '../models/ThirdPartyAdminSetting';
import { ThreatInsightConfiguration } from '../models/ThreatInsightConfiguration';
import { TrustedOrigin } from '../models/TrustedOrigin';
import { TrustedOriginWrite } from '../models/TrustedOriginWrite';
import { UISchemasResponseObject } from '../models/UISchemasResponseObject';
import { UpdateDefaultProvisioningConnectionForApplicationRequest } from '../models/UpdateDefaultProvisioningConnectionForApplicationRequest';
import { UpdateDomain } from '../models/UpdateDomain';
import { UpdateEmailDomain } from '../models/UpdateEmailDomain';
import { UpdateFeatureForApplicationRequest } from '../models/UpdateFeatureForApplicationRequest';
import { UpdateGroupPushMappingRequest } from '../models/UpdateGroupPushMappingRequest';
import { UpdateIamRoleRequest } from '../models/UpdateIamRoleRequest';
import { UpdateRealmAssignmentRequest } from '../models/UpdateRealmAssignmentRequest';
import { UpdateRealmRequest } from '../models/UpdateRealmRequest';
import { UpdateThemeRequest } from '../models/UpdateThemeRequest';
import { UpdateUISchema } from '../models/UpdateUISchema';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { UploadYubikeyOtpTokenSeedRequest } from '../models/UploadYubikeyOtpTokenSeedRequest';
import { User } from '../models/User';
import { UserActivationToken } from '../models/UserActivationToken';
import { UserBlock } from '../models/UserBlock';
import { UserClassification } from '../models/UserClassification';
import { UserCredentials } from '../models/UserCredentials';
import { UserDevice } from '../models/UserDevice';
import { UserFactor } from '../models/UserFactor';
import { UserFactorActivateRequest } from '../models/UserFactorActivateRequest';
import { UserFactorActivateResponse } from '../models/UserFactorActivateResponse';
import { UserFactorPushTransaction } from '../models/UserFactorPushTransaction';
import { UserFactorSecurityQuestionProfile } from '../models/UserFactorSecurityQuestionProfile';
import { UserFactorSupported } from '../models/UserFactorSupported';
import { UserFactorVerifyRequest } from '../models/UserFactorVerifyRequest';
import { UserFactorVerifyResponse } from '../models/UserFactorVerifyResponse';
import { UserFactorVerifyResponseWaiting } from '../models/UserFactorVerifyResponseWaiting';
import { UserFactorYubikeyOtpToken } from '../models/UserFactorYubikeyOtpToken';
import { UserGetSingleton } from '../models/UserGetSingleton';
import { UserIdentityProviderLinkRequest } from '../models/UserIdentityProviderLinkRequest';
import { UserLockoutSettings } from '../models/UserLockoutSettings';
import { UserNextLogin } from '../models/UserNextLogin';
import { UserRiskGetResponse } from '../models/UserRiskGetResponse';
import { UserRiskPutResponse } from '../models/UserRiskPutResponse';
import { UserRiskRequest } from '../models/UserRiskRequest';
import { UserSchema } from '../models/UserSchema';
import { UserType } from '../models/UserType';
import { UserTypePostRequest } from '../models/UserTypePostRequest';
import { UserTypePutRequest } from '../models/UserTypePutRequest';
import { WebAuthnPreregistrationFactor } from '../models/WebAuthnPreregistrationFactor';
import { WellKnownAppAuthenticatorConfiguration } from '../models/WellKnownAppAuthenticatorConfiguration';
import { WellKnownOrgMetadata } from '../models/WellKnownOrgMetadata';
import { WellKnownSSFMetadata } from '../models/WellKnownSSFMetadata';
import { AgentPoolsApiRequestFactory, AgentPoolsApiResponseProcessor } from '../apis/AgentPoolsApi';
export declare class ObservableAgentPoolsApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: AgentPoolsApiRequestFactory, responseProcessor?: AgentPoolsApiResponseProcessor);
  /**
      * Activates a scheduled agent pool update
      * Activate an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  activateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Creates an agent pool update
      * Create an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param agentPoolUpdate
      */
  createAgentPoolsUpdate(poolId: string, agentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Deactivates scheduled agent pool update
      * Deactivate an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  deactivateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Deletes agent pool update
      * Delete an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  deleteAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an agent pool update by its `updateId`
      * Retrieve an agent pool update by ID
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  getAgentPoolsUpdateInstance(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Retrieves the current state of the agent pool update instance settings
      * Retrieve an agent pool update\'s settings
      * @param poolId ID of the agent pool for which the settings apply to
      */
  getAgentPoolsUpdateSettings(poolId: string, _options?: Configuration): Observable<AgentPoolUpdateSetting>;
  /**
      * Lists all agent pools with pagination support
      * List all agent pools
      * @param limitPerPoolType Maximum number of agent pools returned
      * @param poolType Agent type to search for
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listAgentPools(limitPerPoolType?: number, poolType?: AgentType, after?: string, _options?: Configuration): Observable<Collection<AgentPool>>;
  /**
      * Lists all agent pool updates
      * List all agent pool updates
      * @param poolId ID of the agent pool for which the settings apply to
      * @param scheduled Return only scheduled or ad-hoc updates. If this parameter isn\&#39;t provided, Okta returns the entire list of updates.
      */
  listAgentPoolsUpdates(poolId: string, scheduled?: boolean, _options?: Configuration): Observable<Collection<AgentPoolUpdate>>;
  /**
      * Pauses a running or queued agent pool update
      * Pause an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  pauseAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Resumes a running or queued agent pool update
      * Resume an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  resumeAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Retries an agent pool update if the update is unsuccessful or communication with Okta was interrupted during an agent auto-update
      * Retry an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  retryAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Stops an agent pool update
      * Stop an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  stopAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Updates an agent pool update instance and returns the latest agent pool update
      * Update an agent pool update by ID
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      * @param agentPoolUpdate
      */
  updateAgentPoolsUpdate(poolId: string, updateId: string, agentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Observable<AgentPoolUpdate>;
  /**
      * Updates an agent pool update instance settings
      * Update an agent pool update settings
      * @param poolId ID of the agent pool for which the settings apply to
      * @param agentPoolUpdateSetting
      */
  updateAgentPoolsUpdateSettings(poolId: string, agentPoolUpdateSetting: AgentPoolUpdateSetting, _options?: Configuration): Observable<AgentPoolUpdateSetting>;
}
import { ApiTokenApiRequestFactory, ApiTokenApiResponseProcessor } from '../apis/ApiTokenApi';
export declare class ObservableApiTokenApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ApiTokenApiRequestFactory, responseProcessor?: ApiTokenApiResponseProcessor);
  /**
      * Retrieves the metadata for an active API token by `apiTokenId`
      * Retrieve an API token\'s metadata
      * @param apiTokenId id of the API Token
      */
  getApiToken(apiTokenId: string, _options?: Configuration): Observable<ApiToken>;
  /**
      * Lists all the metadata of the active API tokens
      * List all API token metadata
      */
  listApiTokens(_options?: Configuration): Observable<Collection<ApiToken>>;
  /**
      * Revokes an API token by `apiTokenId`
      * Revoke an API token
      * @param apiTokenId id of the API Token
      */
  revokeApiToken(apiTokenId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes the API token provided in the Authorization header
      * Revoke the current API token
      */
  revokeCurrentApiToken(_options?: Configuration): Observable<void>;
  /**
      * Upserts an API Token Network Condition by `apiTokenId`
      * Upsert an API token network condition
      * @param apiTokenId id of the API Token
      * @param apiTokenUpdate
      */
  upsertApiToken(apiTokenId: string, apiTokenUpdate: ApiTokenUpdate, _options?: Configuration): Observable<ApiToken>;
}
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor } from '../apis/ApplicationApi';
export declare class ObservableApplicationApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ApplicationApiRequestFactory, responseProcessor?: ApplicationApiResponseProcessor);
  /**
      * Activates an inactive application
      * Activate an application
      * @param appId Application ID
      */
  activateApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Activates the default provisioning connection for an app
      * Activate the default provisioning connection
      * @param appId Application ID
      */
  activateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Activates an OAuth 2.0 Client JSON Web Key by `keyId`
      * Activate an OAuth 2.0 client JSON Web Key
      * @param appId Application ID
      * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      */
  activateOAuth2ClientJsonWebKey(appId: string, keyId: string, _options?: Configuration): Observable<OAuth2ClientJsonWebKey>;
  /**
      * Activates an OAuth 2.0 Client Secret by `secretId`
      * Activate an OAuth 2.0 client secret
      * @param appId Application ID
      * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      */
  activateOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Observable<OAuth2ClientSecret>;
  /**
      * Adds a new JSON Web Key to the client`s JSON Web Keys. > **Note:** This API doesn\'t allow you to add a key if the existing key doesn\'t have a `kid`. This is also consistent with how the [Dynamic Client Registration](/openapi/okta-oauth/oauth/tag/Client/) or [Applications](/openapi/okta-management/management/tag/Application/) APIs behave, as they don\'t allow the creation of multiple keys without `kids`. Use the [Replace an Application](/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) or the [Replace a Client Application](/openapi/okta-oauth/oauth/tag/Client/#tag/Client/operation/replaceClient) operation to update the JWKS or [Delete an OAuth 2.0 Client JSON Web Key](/openapi/okta-management/management/tag/ApplicationSSOCredentialOAuth2ClientAuth/#tag/ApplicationSSOCredentialOAuth2ClientAuth/operation/deletejwk) and re-add the key with a `kid`.
      * Add a JSON Web Key
      * @param appId Application ID
      * @param oAuth2ClientJsonWebKeyRequestBody
      */
  addJwk(appId: string, oAuth2ClientJsonWebKeyRequestBody: OAuth2ClientJsonWebKeyRequestBody, _options?: Configuration): Observable<OAuth2ClientJsonWebKey>;
  /**
      * Assigns an app to an [authentication policy](/openapi/okta-management/management/tag/Policy/), identified by `policyId`. If the app was previously assigned to another policy, this operation replaces that assignment with the updated policy identified by `policyId`.  > **Note:** When you [merge duplicate authentication policies](https://help.okta.com/okta_help.htm?type=oie&id=ext-merge-auth-policies), the policy and mapping CRUD operations may be unavailable during the consolidation. When the consolidation is complete, you receive an email with merged results.
      * Assign an authentication policy
      * @param appId Application ID
      * @param policyId &#x60;id&#x60; of the Policy
      */
  assignApplicationPolicy(appId: string, policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns a [Group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) to an app, which in turn assigns the app to each [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) that belongs to the group.  The resulting application user [scope](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/#tag/ApplicationUsers/operation/listApplicationUsers!c=200&path=scope&t=response) is `GROUP` since the assignment was from the group membership.
      * Assign an application group
      * @param appId Application ID
      * @param groupId The &#x60;id&#x60; of the group
      * @param applicationGroupAssignment
      */
  assignGroupToApplication(appId: string, groupId: string, applicationGroupAssignment?: ApplicationGroupAssignment, _options?: Configuration): Observable<ApplicationGroupAssignment>;
  /**
      * Assigns a user to an app for:    * SSO only<br>     Assignments to SSO apps typically don\'t include a user profile.     However, if your SSO app requires a profile but doesn\'t have provisioning enabled, you can add profile attributes in the request body.    * SSO and provisioning<br>     Assignments to SSO and provisioning apps typically include credentials and an app-specific profile.     Profile mappings defined for the app are applied first before applying any profile properties that are specified in the request body.     > **Notes:**     > * When Universal Directory is enabled, you can only specify profile properties that aren\'t defined in profile mappings.     > * Omit mapped properties during assignment to minimize assignment errors.
      * Assign an application user
      * @param appId Application ID
      * @param appUser
      */
  assignUserToApplication(appId: string, appUser: AppUserAssignRequest, _options?: Configuration): Observable<AppUser>;
  /**
      * Clones an X.509 certificate for an Application Key Credential from a source app to a target app.  For step-by-step instructions to clone a credential, see [Share application key credentials for IdPs across apps](https://developer.okta.com/docs/guides/sharing-cert/main/). > **Note:** Sharing certificates isn\'t a recommended security practice.
      * Clone a key credential
      * @param appId Application ID
      * @param keyId ID of the Key Credential for the application
      * @param targetAid Unique key of the target Application
      */
  cloneApplicationKey(appId: string, keyId: string, targetAid: string, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Configures a capability (`SSO` or `PROVISIONING`) in the app instance by automatically exchanging configuration information.
      * Configure a capability in the app instance
      * @param appId Application ID
      * @param capabilityType Capability type
      */
  configureCapabilityApplication(appId: string, capabilityType: CapabilityType, _options?: Configuration): Observable<void>;
  /**
      * Creates an app instance in your Okta org.  You can either create an OIN app instance or a custom app instance: * OIN app instances have prescribed `name` (key app definition) and `signOnMode` options. See the [OIN schemas](/openapi/okta-management/management/tag/Application/#tag/Application/schema/GoogleApplication) for the request body. * For custom app instances, select the [signOnMode](/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=0/signOnMode&t=request) that pertains to your app and specify the required parameters in the request body.
      * Create an application
      * @param application
      * @param activate Executes activation lifecycle operation when creating the app
      * @param oktaAccessGatewayAgent
      */
  createApplication(application: Application, activate?: boolean, oktaAccessGatewayAgent?: string, _options?: Configuration): Observable<Application>;
  /**
      * Creates a CWO connection
      * Create a CWO connection
      * @param appId Application ID
      * @param orgCWOConnection
      */
  createCWOConnection(appId: string, orgCWOConnection: OrgCWOConnection, _options?: Configuration): Observable<OrgCWOConnection>;
  /**
      * Creates a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
      * Create a federated claim
      * @param appId Application ID
      * @param federatedClaimRequestBody
      */
  createFederatedClaim(appId: string, federatedClaimRequestBody: FederatedClaimRequestBody, _options?: Configuration): Observable<FederatedClaim>;
  /**
      * Creates an OAuth 2.0 Client Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects. > **Note:** This API lets you bring your own secret. If [token_endpoint_auth_method](/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=4/credentials/oauthClient/token_endpoint_auth_method&t=request) of the app is `client_secret_jwt`, then the minimum length of `client_secret` is 32 characters. If no secret is specified in the request, Okta adds a new system-generated secret.
      * Create an OAuth 2.0 client secret
      * @param appId Application ID
      * @param oAuth2ClientSecretRequestBody
      */
  createOAuth2ClientSecret(appId: string, oAuth2ClientSecretRequestBody?: OAuth2ClientSecretRequestBody, _options?: Configuration): Observable<OAuth2ClientSecret>;
  /**
      * Deactivates an active application  > **Note:** Deactivating an app triggers a full reconciliation of all users assigned to the app by groups. This reconcile process removes the app assignment for the deactivated app, and might also correct assignments that were supposed to be removed but failed previously.
      * Deactivate an application
      * @param appId Application ID
      */
  deactivateApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates the default provisioning connection for an app
      * Deactivate the default provisioning connection
      * @param appId Application ID
      */
  deactivateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates an OAuth 2.0 Client JSON Web Key by `keyId`.
      * Deactivate an OAuth 2.0 client JSON Web Key
      * @param appId Application ID
      * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      */
  deactivateOAuth2ClientJsonWebKey(appId: string, keyId: string, _options?: Configuration): Observable<OAuth2ClientJsonWebKey>;
  /**
      * Deactivates an OAuth 2.0 Client Secret by `secretId`. You can\'t deactivate a secret if it\'s the only secret of the client.
      * Deactivate an OAuth 2.0 client secret
      * @param appId Application ID
      * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      */
  deactivateOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Observable<OAuth2ClientSecret>;
  /**
      * Deletes an inactive application
      * Delete an application
      * @param appId Application ID
      */
  deleteApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a CWO connection
      * Delete a CWO connection
      * @param appId Application ID
      * @param connectionId Connection ID
      */
  deleteCWOConnection(appId: string, connectionId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a federated claim by `claimId`
      * Delete a federated claim
      * @param appId Application ID
      * @param claimId The unique &#x60;id&#x60; of the federated claim
      */
  deleteFederatedClaim(appId: string, claimId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes an OAuth 2.0 Client Secret by `secretId`. You can only delete an inactive Secret.
      * Delete an OAuth 2.0 client secret
      * @param appId Application ID
      * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      */
  deleteOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes an OAuth 2.0 Client JSON Web Key by `keyId`. You can only delete an inactive key.
      * Delete an OAuth 2.0 client JSON Web Key
      * @param appId Application ID
      * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      */
  deletejwk(appId: string, keyId: string, _options?: Configuration): Observable<void>;
  /**
      * Generates a new X.509 certificate for an app key credential > **Note:** To update an Application with the newly generated key credential, use the [Replace an Application](/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) request with the new [credentials.signing.kid](/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing/kid&t=request) value in the request body. You can provide just the [Signing Credential object](/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing&t=request) instead of the entire [Application Credential object](/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials&t=request).
      * Generate a key credential
      * @param appId Application ID
      * @param validityYears Expiry years of the Application Key Credential
      */
  generateApplicationKey(appId: string, validityYears: number, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Generates a new key pair and returns the Certificate Signing Request(CSR) for it. The information in a CSR is used by the Certificate Authority (CA) to verify and create your certificate. It also contains the public key that is included in your certificate.  Returns CSR in `pkcs#10` format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`. > **Note:** The key pair isn\'t listed in the Key Credentials for the app until it\'s published.
      * Generate a certificate signing request
      * @param appId Application ID
      * @param metadata
      */
  generateCsrForApplication(appId: string, metadata: CsrMetadata, _options?: Configuration): Observable<string>;
  /**
      * Retrieves inbound and outbound CWO connections for a given app
      * Retrieve all CWO connections
      * @param appId Application ID
      */
  getAllCWOConnections(appId: string, _options?: Configuration): Observable<Collection<OrgCWOConnection>>;
  /**
      * Retrieves an application from your Okta organization by `id`
      * Retrieve an application
      * @param appId Application ID
      * @param expand An optional query parameter to return the specified [Application User](/openapi/okta-management/management/tag/ApplicationUsers/) in the &#x60;_embedded&#x60; property. Valid value: &#x60;expand&#x3D;user/{userId}&#x60;
      */
  getApplication(appId: string, expand?: string, _options?: Configuration): Observable<Application>;
  /**
      * Retrieves an app group assignment
      * Retrieve an application group
      * @param appId Application ID
      * @param groupId The &#x60;id&#x60; of the group
      * @param expand An optional query parameter to return the corresponding assigned [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) or  the group assignment metadata details in the &#x60;_embedded&#x60; property.
      */
  getApplicationGroupAssignment(appId: string, groupId: string, expand?: string, _options?: Configuration): Observable<ApplicationGroupAssignment>;
  /**
      * Retrieves a specific Application Key Credential by `kid`
      * Retrieve a key credential
      * @param appId Application ID
      * @param keyId ID of the Key Credential for the application
      */
  getApplicationKey(appId: string, keyId: string, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Retrieves a specific user assignment for a specific app
      * Retrieve an application user
      * @param appId Application ID
      * @param userId ID of an existing Okta user
      * @param expand An optional query parameter to return the corresponding [User](/openapi/okta-management/management/tag/User/) object in the &#x60;_embedded&#x60; property. Valid value: &#x60;user&#x60;
      */
  getApplicationUser(appId: string, userId: string, expand?: string, _options?: Configuration): Observable<AppUser>;
  /**
      * Retrieves a CWO connection for an app
      * Retrieve a CWO connection
      * @param appId Application ID
      * @param connectionId Connection ID
      */
  getCWOConnection(appId: string, connectionId: string, _options?: Configuration): Observable<OrgCWOConnection>;
  /**
      * Retrieves a Certificate Signing Request (CSR) for the app by `csrId`.  Returns a Base64-encoded CSR in DER format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`.
      * Retrieve a certificate signing request
      * @param appId Application ID
      * @param csrId &#x60;id&#x60; of the CSR
      */
  getCsrForApplication(appId: string, csrId: string, _options?: Configuration): Observable<Csr>;
  /**
      * Retrieves the default provisioning connection for an app
      * Retrieve the default provisioning connection
      * @param appId Application ID
      */
  getDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Observable<ProvisioningConnectionResponse>;
  /**
      * Retrieves a Feature object for an app
      * Retrieve a feature
      * @param appId Application ID
      * @param name Name of the Feature
      */
  getFeatureForApplication(appId: string, name: ApplicationFeatureType, _options?: Configuration): Observable<ApplicationFeature>;
  /**
      * Retrieves a federated claim by `claimId`
      * Retrieve a federated claim
      * @param appId Application ID
      * @param claimId The unique &#x60;id&#x60; of the federated claim
      */
  getFederatedClaim(appId: string, claimId: string, _options?: Configuration): Observable<FederatedClaimRequestBody>;
  /**
      * Retrieves an OAuth 2.0 Client JSON Web Key by `keyId`.
      * Retrieve an OAuth 2.0 client JSON Web Key
      * @param appId Application ID
      * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      */
  getJwk(appId: string, keyId: string, _options?: Configuration): Observable<OAuth2ClientJsonWebKey>;
  /**
      * Retrieves the OAuth 2.0 authorization code from the app\'s authorization server. Use this authorization code to exchange for an access token through another endpoint to enable Express Configuration on behalf of the user.
      * Retrieve the OAuth 2.0 authorization code for Express Configuration.
      * @param appId Application ID
      * @param token XSRF token
      * @param capabilityType The capability type (for example, &#x60;SSO&#x60;) for which the user intends to perform Express Configuration.
      */
  getOAuth2AccessTokenForExpressConfiguration(appId: string, token?: string, capabilityType?: CapabilityType, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an OAuth 2.0 Client Secret by `secretId`
      * Retrieve an OAuth 2.0 client secret
      * @param appId Application ID
      * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      */
  getOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Observable<OAuth2ClientSecret>;
  /**
      * Retrieves a refresh token for the specified app
      * Retrieve an application token
      * @param appId Application ID
      * @param tokenId &#x60;id&#x60; of Token
      * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      */
  getOAuth2TokenForApplication(appId: string, tokenId: string, expand?: string, _options?: Configuration): Observable<OAuth2RefreshToken>;
  /**
      * Retrieves a single scope consent Grant object for the app
      * Retrieve an app grant
      * @param appId Application ID
      * @param grantId Grant ID
      * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      */
  getScopeConsentGrant(appId: string, grantId: string, expand?: string, _options?: Configuration): Observable<OAuth2ScopeConsentGrant>;
  /**
      * Retrieves a JWKS for the default provisioning connection.  This can be used by the OAuth 2.0 app\'s `jwk_uri` property in the target org.
      * Retrieve a JSON Web Key Set (JWKS) for the default provisioning connection
      * @param appId Application ID
      */
  getUserProvisioningConnectionJWKS(appId: string, _options?: Configuration): Observable<AppConnectionUserProvisionJWKResponse>;
  /**
      * Grants consent for the app to request an OAuth 2.0 Okta scope
      * Grant consent to scope
      * @param appId Application ID
      * @param oAuth2ScopeConsentGrant
      */
  grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant, _options?: Configuration): Observable<OAuth2ScopeConsentGrant>;
  /**
      * Lists all app group assignments
      * List all application groups
      * @param appId Application ID
      * @param q Specifies a filter for a list of assigned groups returned based on their names. The value of &#x60;q&#x60; is matched against the group &#x60;name&#x60;.  This filter only supports the &#x60;startsWith&#x60; operation that matches the &#x60;q&#x60; string against the beginning of the [group name](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!c&#x3D;200&amp;path&#x3D;profile/name&amp;t&#x3D;response).
      * @param after Specifies the pagination cursor for the &#x60;next&#x60; page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
      * @param expand An optional query parameter to return the corresponding assigned [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) or  the group assignment metadata details in the &#x60;_embedded&#x60; property.
      */
  listApplicationGroupAssignments(appId: string, q?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Observable<Collection<ApplicationGroupAssignment>>;
  /**
      * Lists all key credentials for an app
      * List all key credentials
      * @param appId Application ID
      */
  listApplicationKeys(appId: string, _options?: Configuration): Observable<Collection<JsonWebKey>>;
  /**
      * Lists all assigned users for an app
      * List all application users
      * @param appId Application ID
      * @param after Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
      * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
      * @param q Specifies a filter for the list of application users returned based on their profile attributes. The value of &#x60;q&#x60; is matched against the beginning of the following profile attributes: &#x60;userName&#x60;, &#x60;firstName&#x60;, &#x60;lastName&#x60;, and &#x60;email&#x60;. This filter only supports the &#x60;startsWith&#x60; operation that matches the &#x60;q&#x60; string against the beginning of the attribute values. &gt; **Note:** For OIDC apps, user profiles don\&#39;t contain the &#x60;firstName&#x60; or &#x60;lastName&#x60; attributes. Therefore, the query only matches against the &#x60;userName&#x60; or &#x60;email&#x60; attributes.
      * @param expand An optional query parameter to return the corresponding [User](/openapi/okta-management/management/tag/User/) object in the &#x60;_embedded&#x60; property. Valid value: &#x60;user&#x60;
      */
  listApplicationUsers(appId: string, after?: string, limit?: number, q?: string, expand?: string, _options?: Configuration): Observable<Collection<AppUser>>;
  /**
      * Lists all apps in the org with pagination. A subset of apps can be returned that match a supported filter expression or query. The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the header contains a `next` link. Treat the link as an opaque value (follow it, don\'t parse it).  > **Note:** To list all of a member\'s assigned app links, use the [List all assigned app links endpoint in the User Resources API](/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listAppLinks).
      * List all applications
      * @param q Searches for apps with &#x60;name&#x60; or &#x60;label&#x60; properties that starts with the &#x60;q&#x60; value using the &#x60;startsWith&#x60; operation
      * @param after Specifies the [pagination](/#pagination) cursor for the next page of results. Treat this as an opaque value obtained through the &#x60;next&#x60; link relationship.
      * @param useOptimization Specifies whether to use query optimization. If you specify &#x60;useOptimization&#x3D;true&#x60; in the request query, the response contains a subset of app instance properties.
      * @param limit Specifies the number of results per page
      * @param filter Filters apps by &#x60;status&#x60;, &#x60;user.id&#x60;, &#x60;group.id&#x60;, &#x60;credentials.signing.kid&#x60; or &#x60;name&#x60; expression that supports the &#x60;eq&#x60; operator
      * @param expand An optional parameter used for link expansion to embed more resources in the response. Only supports &#x60;expand&#x3D;user/{userId}&#x60; and must be used with the &#x60;user.id eq \&quot;{userId}\&quot;&#x60; filter query for the same user. Returns the assigned [application user](/openapi/okta-management/management/tag/ApplicationUsers/) in the &#x60;_embedded&#x60; property.
      * @param includeNonDeleted Specifies whether to include non-active, but not deleted apps in the results
      */
  listApplications(q?: string, after?: string, useOptimization?: boolean, limit?: number, filter?: string, expand?: string, includeNonDeleted?: boolean, _options?: Configuration): Observable<Collection<Application>>;
  /**
      * Lists all Certificate Signing Requests for an application
      * List all certificate signing requests
      * @param appId Application ID
      */
  listCsrsForApplication(appId: string, _options?: Configuration): Observable<Collection<Csr>>;
  /**
      * Lists all features for an app > **Note:** This request returns an error if provisioning isn\'t enabled for the app. > To set up provisioning, see [Update the default provisioning connection](/openapi/okta-management/management/tag/ApplicationConnections/#tag/ApplicationConnections/operation/updateDefaultProvisioningConnectionForApplication).
      * List all features
      * @param appId Application ID
      */
  listFeaturesForApplication(appId: string, _options?: Configuration): Observable<Collection<ApplicationFeature>>;
  /**
      * Lists all federated claims for your app
      * List all configured federated claims
      * @param appId Application ID
      */
  listFederatedClaims(appId: string, _options?: Configuration): Observable<Collection<FederatedClaim>>;
  /**
      * Lists all JSON Web Keys for an OAuth 2.0 client app
      * List all the OAuth 2.0 client JSON Web Keys
      * @param appId Application ID
      */
  listJwk(appId: string, _options?: Configuration): Observable<Collection<OAuth2ClientJsonWebKey>>;
  /**
      * Lists all client secrets for an OAuth 2.0 client app
      * List all OAuth 2.0 client secrets
      * @param appId Application ID
      */
  listOAuth2ClientSecrets(appId: string, _options?: Configuration): Observable<Collection<OAuth2ClientSecret>>;
  /**
      * Lists all refresh tokens for an app  > **Note:** The results are [paginated](/#pagination) according to the `limit` parameter. > If there are multiple pages of results, the Link header contains a `next` link that you need to use as an opaque value (follow it, don\'t parse it).
      * List all application refresh tokens
      * @param appId Application ID
      * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      * @param after Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listOAuth2TokensForApplication(appId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2RefreshToken>>;
  /**
      * Lists all scope consent Grants for the app
      * List all app grants
      * @param appId Application ID
      * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      */
  listScopeConsentGrants(appId: string, expand?: string, _options?: Configuration): Observable<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Previews the SSO SAML metadata for an application
      * Preview the application SAML metadata
      * @param appId Application ID
      * @param kid
      */
  previewSAMLmetadataForApplication(appId: string, kid: string, _options?: Configuration): Observable<string>;
  /**
      * Publishes a Certificate Signing Request (CSR) for the app with a signed X.509 certificate and adds it into the Application Key Credentials. > **Note:** Publishing a certificate completes the lifecycle of the CSR and it\'s no longer accessible.
      * Publish a certificate signing request
      * @param appId Application ID
      * @param csrId &#x60;id&#x60; of the CSR
      * @param body
      */
  publishCsrFromApplication(appId: string, csrId: string, body: HttpFile, _options?: Configuration): Observable<JsonWebKey>;
  /**
      * Replaces properties for an application > **Notes:** > * All required properties must be specified in the request body > * You can\'t modify system-assigned properties, such as `id`, `name`, `status`, `created`, and `lastUpdated`. The values for these properties in the PUT request body are ignored.
      * Replace an application
      * @param appId Application ID
      * @param application
      */
  replaceApplication(appId: string, application: Application, _options?: Configuration): Observable<Application>;
  /**
      * Replaces a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
      * Replace a federated claim
      * @param appId Application ID
      * @param claimId The unique &#x60;id&#x60; of the federated claim
      * @param federatedClaim
      */
  replaceFederatedClaim(appId: string, claimId: string, federatedClaim?: FederatedClaim, _options?: Configuration): Observable<FederatedClaim>;
  /**
      * Revokes a Certificate Signing Request and deletes the key pair from the app
      * Revoke a certificate signing request
      * @param appId Application ID
      * @param csrId &#x60;id&#x60; of the CSR
      */
  revokeCsrFromApplication(appId: string, csrId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes the specified token for the specified app
      * Revoke an application token
      * @param appId Application ID
      * @param tokenId &#x60;id&#x60; of Token
      */
  revokeOAuth2TokenForApplication(appId: string, tokenId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all OAuth 2.0 refresh tokens for the specified app. Any access tokens issued with these refresh tokens are also revoked, but access tokens issued without a refresh token aren\'t affected.
      * Revoke all application tokens
      * @param appId Application ID
      */
  revokeOAuth2TokensForApplication(appId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes permission for the app to grant the given scope
      * Revoke an app grant
      * @param appId Application ID
      * @param grantId Grant ID
      */
  revokeScopeConsentGrant(appId: string, grantId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a Group from an app
      * Unassign an application group
      * @param appId Application ID
      * @param groupId The &#x60;id&#x60; of the group
      */
  unassignApplicationFromGroup(appId: string, groupId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a user from an app  For directories like Active Directory and LDAP, they act as the owner of the user\'s credential with Okta delegating authentication (DelAuth) to that directory. If this request is successful for a user when DelAuth is enabled, then the user is in a state with no password. You can then reset the user\'s password.  > **Important:** This is a destructive operation. You can\'t recover the user\'s app profile. If the app is enabled for provisioning and configured to deactivate users, the user is also deactivated in the target app.
      * Unassign an application user
      * @param appId Application ID
      * @param userId ID of an existing Okta user
      * @param sendEmail Sends a deactivation email to the administrator if &#x60;true&#x60;
      */
  unassignUserFromApplication(appId: string, userId: string, sendEmail?: boolean, _options?: Configuration): Observable<void>;
  /**
      * Updates the profile or credentials of a user assigned to an app
      * Update an application user
      * @param appId Application ID
      * @param userId ID of an existing Okta user
      * @param appUser
      */
  updateApplicationUser(appId: string, userId: string, appUser: AppUserUpdateRequest, _options?: Configuration): Observable<AppUser>;
  /**
      * Updates a CWO connection
      * Update a CWO connection
      * @param appId Application ID
      * @param connectionId Connection ID
      * @param orgCWOConnectionPatchRequest
      */
  updateCWOConnection(appId: string, connectionId: string, orgCWOConnectionPatchRequest: OrgCWOConnectionPatchRequest, _options?: Configuration): Observable<OrgCWOConnection>;
  /**
      * Updates the default provisioning connection for an app
      * Update the default provisioning connection
      * @param appId Application ID
      * @param provisioningConnectionRequest
      * @param activate Activates the provisioning connection
      */
  updateDefaultProvisioningConnectionForApplication(appId: string, provisioningConnectionRequest: UpdateDefaultProvisioningConnectionForApplicationRequest, activate?: boolean, _options?: Configuration): Observable<ProvisioningConnectionResponse>;
  /**
      * Updates a Feature object for an app > **Note:** This endpoint supports partial updates.
      * Update a feature
      * @param appId Application ID
      * @param name Name of the Feature
      * @param capabilitiesObject
      */
  updateFeatureForApplication(appId: string, name: ApplicationFeatureType, capabilitiesObject: UpdateFeatureForApplicationRequest, _options?: Configuration): Observable<ApplicationFeature>;
  /**
      * Updates a group assignment to an app
      * Update an application group
      * @param appId Application ID
      * @param groupId The &#x60;id&#x60; of the group
      * @param jsonPatchOperation
      */
  updateGroupAssignmentToApplication(appId: string, groupId: string, jsonPatchOperation?: Array<JsonPatchOperation>, _options?: Configuration): Observable<ApplicationGroupAssignment>;
  /**
      * Uploads a logo for the app instance. If the app already has a logo, this operation replaces the previous logo.  The logo is visible in the Admin Console as an icon for your app instance. If you have one `appLink` object configured, this logo also appears in the End-User Dashboard as an icon for your app. > **Note:** If you have multiple `appLink` objects, use the Admin Console to add logos for each app link. > You can\'t use the API to add logos for multiple app links.
      * Upload an application logo
      * @param appId Application ID
      * @param file The image file containing the logo.  The file must be in PNG, JPG, SVG, or GIF format, and less than one MB in size. For best results, use an image with a transparent background and a square dimension of 200 x 200 pixels to prevent upscaling.  &gt; **Notes:** &gt; * Only SVG files encoded in UTF-8 are supported. For example, &#x60;&lt;xml version&#x3D;\\\&quot;1.0\\\&quot; encoding&#x3D;\\\&quot;UTF-8\\\&quot;&gt;&#x60; is a valid SVG file declaration. &gt; * &#x60;multipart/form-data&#x60; isn\\\&#39;t supported for Python. Remove the &#x60;\\\&quot;Content-Type\\\&quot;: \\\&quot;multipart/form-data\\\&quot;&#x60; line if you use the Python request sample code.
      */
  uploadApplicationLogo(appId: string, file: HttpFile, _options?: Configuration): Observable<void>;
  /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for an OAuth 2.0-based connection. Currently, this operation only supports `office365`,`google`, `zoomus`, and `slack` apps.
      * Verify the provisioning connection
      * @param appName
      * @param appId Application ID
      * @param code
      * @param state
      */
  verifyProvisioningConnectionForApplication(appName: OAuthProvisioningEnabledApp, appId: string, code?: string, state?: string, _options?: Configuration): Observable<void>;
  /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Google Workspace (`google`) OAuth 2.0-based connection.
      * Verify the provisioning connection for Google Workspace
      * @param appId Application ID
      * @param code
      * @param state
      */
  verifyProvisioningConnectionForGoogleApplication(appId: string, code?: string, state?: string, _options?: Configuration): Observable<void>;
  /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Microsoft Office 365 (`office365`) OAuth 2.0-based connection.
      * Verify the provisioning connection for Microsoft Office 365
      * @param appId Application ID
      * @param code
      * @param state
      */
  verifyProvisioningConnectionForOfficeApplication(appId: string, code?: string, state?: string, _options?: Configuration): Observable<void>;
}
import { AttackProtectionApiRequestFactory, AttackProtectionApiResponseProcessor } from '../apis/AttackProtectionApi';
export declare class ObservableAttackProtectionApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: AttackProtectionApiRequestFactory, responseProcessor?: AttackProtectionApiResponseProcessor);
  /**
      * Retrieves the Authenticator Settings for an org
      * Retrieve the authenticator settings
      */
  getAuthenticatorSettings(_options?: Configuration): Observable<Collection<AttackProtectionAuthenticatorSettings>>;
  /**
      * Retrieves the User Lockout Settings for an org
      * Retrieve the user lockout settings
      */
  getUserLockoutSettings(_options?: Configuration): Observable<Collection<UserLockoutSettings>>;
  /**
      * Replaces the Authenticator Settings for an org
      * Replace the authenticator settings
      * @param authenticatorSettings
      */
  replaceAuthenticatorSettings(authenticatorSettings: AttackProtectionAuthenticatorSettings, _options?: Configuration): Observable<AttackProtectionAuthenticatorSettings>;
  /**
      * Replaces the User Lockout Settings for an org
      * Replace the user lockout settings
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
      * Activate an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      */
  activateAuthenticator(authenticatorId: string, _options?: Configuration): Observable<AuthenticatorBase>;
  /**
      * Activates a method for an authenticator identified by `authenticatorId` and `methodType`
      * Activate an authenticator method
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param methodType Type of authenticator method
      */
  activateAuthenticatorMethod(authenticatorId: string, methodType: AuthenticatorMethodType, _options?: Configuration): Observable<AuthenticatorMethodBase>;
  /**
      * Creates an authenticator
      * Create an authenticator
      * @param authenticator
      * @param activate Whether to execute the activation lifecycle operation when Okta creates the authenticator
      */
  createAuthenticator(authenticator: AuthenticatorBase, activate?: boolean, _options?: Configuration): Observable<AuthenticatorBase>;
  /**
      * Deactivates an authenticator by `authenticatorId`
      * Deactivate an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      */
  deactivateAuthenticator(authenticatorId: string, _options?: Configuration): Observable<AuthenticatorBase>;
  /**
      * Deactivates a method for an authenticator identified by `authenticatorId` and `methodType`
      * Deactivate an authenticator method
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param methodType Type of authenticator method
      */
  deactivateAuthenticatorMethod(authenticatorId: string, methodType: AuthenticatorMethodType, _options?: Configuration): Observable<AuthenticatorMethodBase>;
  /**
      * Retrieves an authenticator from your Okta organization by `authenticatorId`
      * Retrieve an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      */
  getAuthenticator(authenticatorId: string, _options?: Configuration): Observable<AuthenticatorBase>;
  /**
      * Retrieves a method identified by `methodType` of an authenticator identified by `authenticatorId`
      * Retrieve an authenticator method
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param methodType Type of authenticator method
      */
  getAuthenticatorMethod(authenticatorId: string, methodType: AuthenticatorMethodType, _options?: Configuration): Observable<AuthenticatorMethodBase>;
  /**
      * Retrieves the well-known app authenticator configuration. Includes an app authenticator\'s settings, supported methods, and other details.
      * Retrieve the well-known app authenticator configuration
      * @param oauthClientId Filters app authenticator configurations by &#x60;oauthClientId&#x60;
      */
  getWellKnownAppAuthenticatorConfiguration(oauthClientId: string, _options?: Configuration): Observable<Collection<WellKnownAppAuthenticatorConfiguration>>;
  /**
      * Lists all methods of an authenticator identified by `authenticatorId`
      * List all methods of an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      */
  listAuthenticatorMethods(authenticatorId: string, _options?: Configuration): Observable<Collection<AuthenticatorMethodBase>>;
  /**
      * Lists all authenticators
      * List all authenticators
      */
  listAuthenticators(_options?: Configuration): Observable<Collection<AuthenticatorBase>>;
  /**
      * Replaces the properties for an authenticator identified by `authenticatorId`
      * Replace an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param authenticator
      */
  replaceAuthenticator(authenticatorId: string, authenticator: AuthenticatorBase, _options?: Configuration): Observable<AuthenticatorBase>;
  /**
      * Replaces a method of `methodType` for an authenticator identified by `authenticatorId`
      * Replace an authenticator method
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param methodType Type of authenticator method
      * @param authenticatorMethodBase
      */
  replaceAuthenticatorMethod(authenticatorId: string, methodType: AuthenticatorMethodType, authenticatorMethodBase?: AuthenticatorMethodBase, _options?: Configuration): Observable<AuthenticatorMethodBase>;
}
import { AuthorizationServerApiRequestFactory, AuthorizationServerApiResponseProcessor } from '../apis/AuthorizationServerApi';
export declare class ObservableAuthorizationServerApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: AuthorizationServerApiRequestFactory, responseProcessor?: AuthorizationServerApiResponseProcessor);
  /**
      * Activates an authorization server
      * Activate an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  activateAuthorizationServer(authServerId: string, _options?: Configuration): Observable<void>;
  /**
      * Activates an authorization server policy
      * Activate a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  activateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Activates an authorization server policy rule
      * Activate a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  activateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Creates trusted relationships between the given authorization server and other authorization servers
      * Create an associated authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param associatedServerMediated
      */
  createAssociatedServers(authServerId: string, associatedServerMediated: AssociatedServerMediated, _options?: Configuration): Observable<Collection<AuthorizationServer>>;
  /**
      * Creates an authorization server
      * Create an authorization server
      * @param authorizationServer
      */
  createAuthorizationServer(authorizationServer: AuthorizationServer, _options?: Configuration): Observable<AuthorizationServer>;
  /**
      * Creates a policy
      * Create a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policy
      */
  createAuthorizationServerPolicy(authServerId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Observable<AuthorizationServerPolicy>;
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy
      * Create a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policyRule
      */
  createAuthorizationServerPolicyRule(authServerId: string, policyId: string, policyRule: AuthorizationServerPolicyRuleRequest, _options?: Configuration): Observable<AuthorizationServerPolicyRule>;
  /**
      * Creates a custom token Claim for a custom authorization server
      * Create a custom token claim
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param oAuth2Claim
      */
  createOAuth2Claim(authServerId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Observable<OAuth2Claim>;
  /**
      * Creates a custom token scope
      * Create a custom token scope
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param oAuth2Scope
      */
  createOAuth2Scope(authServerId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Observable<OAuth2Scope>;
  /**
      * Deactivates an authorization server
      * Deactivate an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  deactivateAuthorizationServer(authServerId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates an authorization server policy
      * Deactivate a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  deactivateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates an authorization server policy rule
      * Deactivate a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  deactivateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes an associated Authorization Server
      * Delete an associated authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param associatedServerId &#x60;id&#x60; of the associated Authorization Server
      */
  deleteAssociatedServer(authServerId: string, associatedServerId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes an authorization server
      * Delete an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  deleteAuthorizationServer(authServerId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a policy
      * Delete a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  deleteAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
      * Delete a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  deleteAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a custom token Claim specified by the `claimId`
      * Delete a custom token claim
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param claimId &#x60;id&#x60; of Claim
      */
  deleteOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a custom token scope
      * Delete a custom token scope
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param scopeId &#x60;id&#x60; of Scope
      */
  deleteOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an authorization server
      * Retrieve an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  getAuthorizationServer(authServerId: string, _options?: Configuration): Observable<AuthorizationServer>;
  /**
      * Retrieves an Authorization Server Key specified by the `keyId`
      * Retrieve an authorization server key
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param keyId &#x60;id&#x60; of the certificate key
      */
  getAuthorizationServerKey(authServerId: string, keyId: string, _options?: Configuration): Observable<AuthorizationServerJsonWebKey>;
  /**
      * Retrieves a policy
      * Retrieve a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  getAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Observable<AuthorizationServerPolicy>;
  /**
      * Retrieves a policy rule by `ruleId`
      * Retrieve a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  getAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Observable<AuthorizationServerPolicyRule>;
  /**
      * Retrieves a custom token Claim by the specified `claimId`
      * Retrieve a custom token claim
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param claimId &#x60;id&#x60; of Claim
      */
  getOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Observable<OAuth2Claim>;
  /**
      * Retrieves a custom token scope
      * Retrieve a custom token scope
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param scopeId &#x60;id&#x60; of Scope
      */
  getOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Observable<OAuth2Scope>;
  /**
      * Retrieves a refresh token for a Client
      * Retrieve a refresh token for a client
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param clientId Client app ID
      * @param tokenId &#x60;id&#x60; of Token
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      */
  getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, expand?: string, _options?: Configuration): Observable<OAuth2RefreshToken>;
  /**
      * Lists all associated Authorization Servers by trusted type for the given `authServerId`
      * List all associated authorization servers
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param trusted Searches trusted authorization servers when &#x60;true&#x60; or searches untrusted authorization servers when &#x60;false&#x60;
      * @param q Searches for the name or audience of the associated authorization servers
      * @param limit Specifies the number of results for a page
      * @param after Specifies the pagination cursor for the next page of the associated authorization servers
      */
  listAssociatedServersByTrustedType(authServerId: string, trusted?: boolean, q?: string, limit?: number, after?: string, _options?: Configuration): Observable<Collection<AuthorizationServer>>;
  /**
      * Lists all of the current, future, and expired Keys used by the Custom Authorization Server
      * List all credential keys
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  listAuthorizationServerKeys(authServerId: string, _options?: Configuration): Observable<Collection<AuthorizationServerJsonWebKey>>;
  /**
      * Lists all policies
      * List all policies
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  listAuthorizationServerPolicies(authServerId: string, _options?: Configuration): Observable<Collection<AuthorizationServerPolicy>>;
  /**
      * Lists all policy rules for the specified Custom Authorization Server and Policy
      * List all policy rules
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  listAuthorizationServerPolicyRules(authServerId: string, policyId: string, _options?: Configuration): Observable<Collection<AuthorizationServerPolicyRule>>;
  /**
      * Lists all custom authorization servers in the org
      * List all authorization servers
      * @param q Searches the &#x60;name&#x60; and &#x60;audiences&#x60; of authorization servers for matching values
      * @param limit Specifies the number of authorization server results on a page. Maximum value: 200
      * @param after Specifies the pagination cursor for the next page of authorization servers. Treat as an opaque value and obtain through the next link relationship.
      */
  listAuthorizationServers(q?: string, limit?: number, after?: string, _options?: Configuration): Observable<Collection<AuthorizationServer>>;
  /**
      * Lists all custom token Claims defined for a specified custom authorization server
      * List all custom token claims
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  listOAuth2Claims(authServerId: string, _options?: Configuration): Observable<Collection<OAuth2Claim>>;
  /**
      * Lists all client resources for which the specified authorization server has tokens.  > **Note:** To list a specific user\'s client resources for which they have tokens or grants, use the [List all clients endpoint in the User Resources API](/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserClients).
      * List all client resources for an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  listOAuth2ClientsForAuthorizationServer(authServerId: string, _options?: Configuration): Observable<Collection<OAuth2Client>>;
  /**
      * Lists all custom token scopes
      * List all custom token scopes
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param q Searches the &#x60;name&#x60; of Custom Token Scopes for matching values
      * @param filter Filter expression for Custom Token Scopes
      * @param after Specifies the pagination cursor for the next page of scopes. Treat the after cursor as an opaque value and obtain it through the next link relationship. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listOAuth2Scopes(authServerId: string, q?: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2Scope>>;
  /**
      * Lists all refresh tokens issued by an authorization server for a specific Client
      * List all refresh tokens for a client
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param clientId Client app ID
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @param after Specifies the pagination cursor for the next page of tokens
      * @param limit The maximum number of tokens to return (maximum 200)
      */
  listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2RefreshToken>>;
  /**
      * Replaces an authorization server
      * Replace an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param authorizationServer
      */
  replaceAuthorizationServer(authServerId: string, authorizationServer: AuthorizationServer, _options?: Configuration): Observable<AuthorizationServer>;
  /**
      * Replaces a policy
      * Replace a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policy
      */
  replaceAuthorizationServerPolicy(authServerId: string, policyId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Observable<AuthorizationServerPolicy>;
  /**
      * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
      * Replace a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      * @param policyRule
      */
  replaceAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, policyRule: AuthorizationServerPolicyRuleRequest, _options?: Configuration): Observable<AuthorizationServerPolicyRule>;
  /**
      * Replaces a custom token Claim specified by the `claimId`
      * Replace a custom token claim
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param claimId &#x60;id&#x60; of Claim
      * @param oAuth2Claim
      */
  replaceOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Observable<OAuth2Claim>;
  /**
      * Replaces a custom token scope
      * Replace a custom token scope
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param scopeId &#x60;id&#x60; of Scope
      * @param oAuth2Scope
      */
  replaceOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Observable<OAuth2Scope>;
  /**
      * Revokes a refresh token for a Client
      * Revoke a refresh token for a client
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param clientId Client app ID
      * @param tokenId &#x60;id&#x60; of Token
      */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all refresh tokens for a Client
      * Revoke all refresh tokens for a client
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param clientId Client app ID
      */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, _options?: Configuration): Observable<void>;
  /**
      * Rotates the current Keys for a Custom Authorization Server. If you rotate Keys, the `ACTIVE` Key becomes the `EXPIRED` Key, the `NEXT` Key becomes the `ACTIVE` Key, and the Custom Authorization Server immediately begins using the new active Key to sign tokens.  > **Note:** Okta rotates your Keys automatically in `AUTO` mode. You can rotate Keys yourself in either mode. If Keys are rotated manually, you should invalidate any intermediate cache. and fetch the Keys again using the Keys endpoint.
      * Rotate all credential keys
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param use
      */
  rotateAuthorizationServerKeys(authServerId: string, use: JwkUse, _options?: Configuration): Observable<Collection<AuthorizationServerJsonWebKey>>;
}
import { BehaviorApiRequestFactory, BehaviorApiResponseProcessor } from '../apis/BehaviorApi';
export declare class ObservableBehaviorApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: BehaviorApiRequestFactory, responseProcessor?: BehaviorApiResponseProcessor);
  /**
      * Activates a behavior detection rule
      * Activate a behavior detection rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  activateBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Observable<BehaviorRule>;
  /**
      * Creates a new behavior detection rule
      * Create a behavior detection rule
      * @param rule
      */
  createBehaviorDetectionRule(rule: BehaviorRule, _options?: Configuration): Observable<BehaviorRule>;
  /**
      * Deactivates a behavior detection rule
      * Deactivate a behavior detection rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deactivateBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Observable<BehaviorRule>;
  /**
      * Deletes a Behavior Detection Rule by `behaviorId`
      * Delete a behavior detection rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deleteBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a Behavior Detection Rule by `behaviorId`
      * Retrieve a behavior detection rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  getBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Observable<BehaviorRule>;
  /**
      * Lists all behavior detection rules with pagination support
      * List all behavior detection rules
      */
  listBehaviorDetectionRules(_options?: Configuration): Observable<Collection<BehaviorRule>>;
  /**
      * Replaces a Behavior Detection Rule by `behaviorId`
      * Replace a behavior detection rule
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
      * Creates a new CAPTCHA instance. Currently, an org can only configure a single CAPTCHA instance.
      * Create a CAPTCHA instance
      * @param instance
      */
  createCaptchaInstance(instance: CAPTCHAInstance, _options?: Configuration): Observable<CAPTCHAInstance>;
  /**
      * Deletes a specified CAPTCHA instance > **Note:** If your CAPTCHA instance is still associated with your org, the request fails. You must first update your Org-wide CAPTCHA settings to remove the CAPTCHA instance.
      * Delete a CAPTCHA instance
      * @param captchaId The unique key used to identify your CAPTCHA instance
      */
  deleteCaptchaInstance(captchaId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the CAPTCHA settings object for your organization
      * Delete the org-wide CAPTCHA settings
      */
  deleteOrgCaptchaSettings(_options?: Configuration): Observable<void>;
  /**
      * Retrieves the properties of a specified CAPTCHA instance
      * Retrieve a CAPTCHA instance
      * @param captchaId The unique key used to identify your CAPTCHA instance
      */
  getCaptchaInstance(captchaId: string, _options?: Configuration): Observable<CAPTCHAInstance>;
  /**
      * Retrieves the CAPTCHA settings object for your organization > **Note**: If the current organization hasn\'t configured CAPTCHA Settings, the request returns an empty object.
      * Retrieve the org-wide CAPTCHA settings
      */
  getOrgCaptchaSettings(_options?: Configuration): Observable<OrgCAPTCHASettings>;
  /**
      * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      */
  listCaptchaInstances(_options?: Configuration): Observable<Collection<CAPTCHAInstance>>;
  /**
      * Replaces the properties for a specified CAPTCHA instance
      * Replace a CAPTCHA instance
      * @param captchaId The unique key used to identify your CAPTCHA instance
      * @param instance
      */
  replaceCaptchaInstance(captchaId: string, instance: CAPTCHAInstance, _options?: Configuration): Observable<CAPTCHAInstance>;
  /**
      * Replaces the CAPTCHA settings object for your organization > **Note**: You can disable CAPTCHA for your organization by setting `captchaId` and `enabledPages` to `null`.
      * Replace the org-wide CAPTCHA settings
      * @param orgCAPTCHASettings
      */
  replacesOrgCaptchaSettings(orgCAPTCHASettings: OrgCAPTCHASettings, _options?: Configuration): Observable<OrgCAPTCHASettings>;
  /**
      * Partially updates the properties of a specified CAPTCHA instance
      * Update a CAPTCHA instance
      * @param captchaId The unique key used to identify your CAPTCHA instance
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
      * Creates your custom domain
      * Create a Custom Domain
      * @param domain
      */
  createCustomDomain(domain: DomainRequest, _options?: Configuration): Observable<DomainResponse>;
  /**
      * Deletes a custom domain by `domainId`
      * Delete a custom domain
      * @param domainId &#x60;id&#x60; of the Domain
      */
  deleteCustomDomain(domainId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a custom domain by `domainId`
      * Retrieve a custom domain
      * @param domainId &#x60;id&#x60; of the Domain
      */
  getCustomDomain(domainId: string, _options?: Configuration): Observable<DomainResponse>;
  /**
      * Lists all verified custom domains for the org
      * List all Custom Domains
      */
  listCustomDomains(_options?: Configuration): Observable<DomainListResponse>;
  /**
      * Replaces a custom domain\'s brand
      * Replace a custom domain\'s brand
      * @param domainId &#x60;id&#x60; of the Domain
      * @param updateDomain
      */
  replaceCustomDomain(domainId: string, updateDomain: UpdateDomain, _options?: Configuration): Observable<DomainResponse>;
  /**
      * Upserts (creates or renews) the `MANUAL` certificate for the custom domain  > **Notes:** > * If the existing `certificateSourceType` is `OKTA_MANAGED`, this operation changes the source type to `MANUAL`. Okta no longer manages and renews certificates for this domain after you provide a user-managed certificate. > * Okta supports TLS certificates and private keys that are PEM-encoded and 2048, 3072, or 4096 bits. See the [Custom domain guide](https://developer.okta.com/docs/guides/custom-url-domain/main/) for more details.
      * Upsert the custom domain\'s certificate
      * @param domainId &#x60;id&#x60; of the Domain
      * @param certificate
      */
  upsertCertificate(domainId: string, certificate: DomainCertificate, _options?: Configuration): Observable<void>;
  /**
      * Verifies the custom domain and validity of DNS records by `domainId`. Furthermore, if the `certificateSourceType` in the domain is `OKTA_MANAGED`, then an attempt is made to obtain and install a certificate. After a certificate is obtained and installed by Okta, Okta manages the certificate including certificate renewal.
      * Verify a custom domain
      * @param domainId &#x60;id&#x60; of the Domain
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
      * Removes emails from an email service bounce list.  The emails submitted in this operation are removed from the bounce list by an asynchronous job. Any email address that passes validation is accepted for the removal process, even if there are other email addresses in the request that failed validation.  > **Note:** If there are validation errors for all email addresses, a `200 OK` HTTP status is still returned.
      * Remove bounced emails
      * @param bouncesRemoveListObj
      */
  bulkRemoveEmailAddressBounces(bouncesRemoveListObj?: BouncesRemoveListObj, _options?: Configuration): Observable<BouncesRemoveListResult>;
  /**
      * Creates a new brand in your org
      * Create a brand
      * @param createBrandRequest
      */
  createBrand(createBrandRequest?: CreateBrandRequest, _options?: Configuration): Observable<Brand>;
  /**
      * Creates a new Email Customization  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, you can create a customization for any BCP47 language in addition to the Okta-supported languages.
      * Create an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param instance
      */
  createEmailCustomization(brandId: string, templateName: string, instance?: EmailCustomization, _options?: Configuration): Observable<EmailCustomization>;
  /**
      * Deletes all customizations for an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all customizations are deleted, including customizations for additional languages. If disabled, only customizations in Okta-supported languages are deleted.
      * Delete all email customizations
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      */
  deleteAllCustomizations(brandId: string, templateName: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a brand by `brandId`
      * Delete a brand
      * @param brandId The ID of the brand
      */
  deleteBrand(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a theme background image
      * Delete the background image
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      */
  deleteBrandThemeBackgroundImage(brandId: string, themeId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a theme favicon. The theme will use the default Okta favicon.
      * Delete the favicon
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      */
  deleteBrandThemeFavicon(brandId: string, themeId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the logo
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      */
  deleteBrandThemeLogo(brandId: string, themeId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the customized error page. As a result, the default error page appears in your live environment.
      * Delete the customized error page
      * @param brandId The ID of the brand
      */
  deleteCustomizedErrorPage(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
      * Delete the customized sign-in page
      * @param brandId The ID of the brand
      */
  deleteCustomizedSignInPage(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes an Email Customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, deletion of an existing additional language customization by ID doesn\'t register.
      * Delete an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param customizationId The ID of the email customization
      */
  deleteEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Delete the preview error page
      * @param brandId The ID of the brand
      */
  deletePreviewErrorPage(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Delete the preview sign-in page
      * @param brandId The ID of the brand
      */
  deletePreviewSignInPage(brandId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a brand by `brandId`
      * Retrieve a brand
      * @param brandId The ID of the brand
      * @param expand Specifies additional metadata to be included in the response
      */
  getBrand(brandId: string, expand?: Array<'themes' | 'domains' | 'emailDomain'>, _options?: Configuration): Observable<BrandWithEmbedded>;
  /**
      * Retrieves a theme for a brand
      * Retrieve a theme
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      */
  getBrandTheme(brandId: string, themeId: string, _options?: Configuration): Observable<ThemeResponse>;
  /**
      * Retrieves a Preview of an Email Customization. All variable references are populated from the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests for the preview of an additional language customization by ID return a `404 Not Found` error response.
      * Retrieve a preview of an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param customizationId The ID of the email customization
      */
  getCustomizationPreview(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Observable<EmailPreview>;
  /**
      * Retrieves the customized error page. The customized error page appears in your live environment.
      * Retrieve the customized error page
      * @param brandId The ID of the brand
      */
  getCustomizedErrorPage(brandId: string, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
      * Retrieve the customized sign-in page
      * @param brandId The ID of the brand
      */
  getCustomizedSignInPage(brandId: string, _options?: Configuration): Observable<SignInPage>;
  /**
      * Retrieves the default error page. The default error page appears when no customized error page exists.
      * Retrieve the default error page
      * @param brandId The ID of the brand
      */
  getDefaultErrorPage(brandId: string, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
      * Retrieve the default sign-in page
      * @param brandId The ID of the brand
      */
  getDefaultSignInPage(brandId: string, _options?: Configuration): Observable<SignInPage>;
  /**
      * Retrieves an email customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to retrieve an additional language customization by ID result in a `404 Not Found` error response.
      * Retrieve an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param customizationId The ID of the email customization
      */
  getEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Observable<EmailCustomization>;
  /**
      * Retrieves an email template\'s default content  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
      * Retrieve an email template default content
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param language The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
      */
  getEmailDefaultContent(brandId: string, templateName: string, language?: string, _options?: Configuration): Observable<EmailDefaultContent>;
  /**
      * Retrieves a preview of an Email Template\'s default content. All variable references are populated using the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
      * Retrieve a preview of the email template default content
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param language The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
      */
  getEmailDefaultPreview(brandId: string, templateName: string, language?: string, _options?: Configuration): Observable<EmailPreview>;
  /**
      * Retrieves an email template\'s settings
      * Retrieve the email template settings
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      */
  getEmailSettings(brandId: string, templateName: string, _options?: Configuration): Observable<EmailSettingsResponse>;
  /**
      * Retrieves the details of an email template by name
      * Retrieve an email template
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param expand Specifies additional metadata to be included in the response
      */
  getEmailTemplate(brandId: string, templateName: string, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Observable<EmailTemplateResponse>;
  /**
      * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the error page sub-resources
      * @param brandId The ID of the brand
      * @param expand Specifies additional metadata to be included in the response
      */
  getErrorPage(brandId: string, expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>, _options?: Configuration): Observable<PageRoot>;
  /**
      * Retrieves the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Retrieve the preview error page preview
      * @param brandId The ID of the brand
      */
  getPreviewErrorPage(brandId: string, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Retrieve the preview sign-in page preview
      * @param brandId The ID of the brand
      */
  getPreviewSignInPage(brandId: string, _options?: Configuration): Observable<SignInPage>;
  /**
      * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the sign-in page sub-resources
      * @param brandId The ID of the brand
      * @param expand Specifies additional metadata to be included in the response
      */
  getSignInPage(brandId: string, expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>, _options?: Configuration): Observable<PageRoot>;
  /**
      * Retrieves the sign-out page settings
      * Retrieve the sign-out page settings
      * @param brandId The ID of the brand
      */
  getSignOutPageSettings(brandId: string, _options?: Configuration): Observable<HostedPage>;
  /**
      * Lists all sign-in widget versions supported by the current org
      * List all Sign-In Widget versions
      * @param brandId The ID of the brand
      */
  listAllSignInWidgetVersions(brandId: string, _options?: Configuration): Observable<Collection<string>>;
  /**
      * Lists all domains associated with a brand by `brandId`
      * List all domains associated with a brand
      * @param brandId The ID of the brand
      */
  listBrandDomains(brandId: string, _options?: Configuration): Observable<BrandDomains>;
  /**
      * Lists all the themes in your brand.  > **Important:** Currently each org supports only one theme, therefore this contains a single object only.
      * List all themes
      * @param brandId The ID of the brand
      */
  listBrandThemes(brandId: string, _options?: Configuration): Observable<Collection<ThemeResponse>>;
  /**
      * Lists all the brands in your org
      * List all brands
      * @param expand Specifies additional metadata to be included in the response
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      * @param q Searches the records for matching value
      */
  listBrands(expand?: Array<'themes' | 'domains' | 'emailDomain'>, after?: string, limit?: number, q?: string, _options?: Configuration): Observable<Collection<BrandWithEmbedded>>;
  /**
      * Lists all customizations of an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all existing customizations are retrieved, including customizations for additional languages. If disabled, only customizations for Okta-supported languages are returned.
      * List all email customizations
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listEmailCustomizations(brandId: string, templateName: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<EmailCustomization>>;
  /**
      * Lists all supported email templates
      * List all email templates
      * @param brandId The ID of the brand
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      * @param expand Specifies additional metadata to be included in the response
      */
  listEmailTemplates(brandId: string, after?: string, limit?: number, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Observable<Collection<EmailTemplateResponse>>;
  /**
      * Replaces a brand by `brandId`  Passing an invalid `brandId` returns a `404 Not Found` status code with the error code `E0000007`.  Not providing `agreeToCustomPrivacyPolicy` with `customPrivacyPolicyUrl` returns a `400 Bad Request` status code with the error code `E0000001`.
      * Replace a brand
      * @param brandId The ID of the brand
      * @param brand
      */
  replaceBrand(brandId: string, brand: BrandRequest, _options?: Configuration): Observable<Brand>;
  /**
      * Replaces a theme for a brand
      * Replace a theme
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      * @param theme
      */
  replaceBrandTheme(brandId: string, themeId: string, theme: UpdateThemeRequest, _options?: Configuration): Observable<ThemeResponse>;
  /**
      * Replaces the customized error page. The customized error page appears in your live environment.
      * Replace the customized error page
      * @param brandId The ID of the brand
      * @param errorPage
      */
  replaceCustomizedErrorPage(brandId: string, errorPage: ErrorPage, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
      * Replace the customized sign-in page
      * @param brandId The ID of the brand
      * @param signInPage
      */
  replaceCustomizedSignInPage(brandId: string, signInPage: SignInPage, _options?: Configuration): Observable<SignInPage>;
  /**
      * Replaces an email customization using property values  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to update a customization for an additional language return a `404 Not Found` error response.
      * Replace an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param customizationId The ID of the email customization
      * @param instance Request
      */
  replaceEmailCustomization(brandId: string, templateName: string, customizationId: string, instance?: EmailCustomization, _options?: Configuration): Observable<EmailCustomization>;
  /**
      * Replaces an email template\'s settings
      * Replace the email template settings
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param emailSettings
      */
  replaceEmailSettings(brandId: string, templateName: string, emailSettings?: EmailSettings, _options?: Configuration): Observable<EmailSettings>;
  /**
      * Replaces the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Replace the preview error page
      * @param brandId The ID of the brand
      * @param errorPage
      */
  replacePreviewErrorPage(brandId: string, errorPage: ErrorPage, _options?: Configuration): Observable<ErrorPage>;
  /**
      * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Replace the preview sign-in page
      * @param brandId The ID of the brand
      * @param signInPage
      */
  replacePreviewSignInPage(brandId: string, signInPage: SignInPage, _options?: Configuration): Observable<SignInPage>;
  /**
      * Replaces the sign-out page settings
      * Replace the sign-out page settings
      * @param brandId The ID of the brand
      * @param hostedPage
      */
  replaceSignOutPageSettings(brandId: string, hostedPage: HostedPage, _options?: Configuration): Observable<HostedPage>;
  /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled and the `language` parameter is an additional language, the test email uses the customization corresponding to the language. 2. The email template\'s default customization. 3. The email template’s default content, translated to the current user\'s language.
      * Send a test email
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param language The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
      */
  sendTestEmail(brandId: string, templateName: string, language?: string, _options?: Configuration): Observable<void>;
  /**
      * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
      * Upload the background image
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      * @param file
      */
  uploadBrandThemeBackgroundImage(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Observable<ImageUploadResponse>;
  /**
      * Uploads and replaces the favicon for the theme
      * Upload the favicon
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      * @param file
      */
  uploadBrandThemeFavicon(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Observable<ImageUploadResponse>;
  /**
      * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the logo
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
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
      * Activates a device by setting its status to `ACTIVE` by `deviceId`. Activated devices are used to create and delete device user links.
      * Activate a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  activateDevice(deviceId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates a device by setting its status to `DEACTIVATED` by `deviceId`. Deactivation causes a device to lose all device user links. Set the device status to `DEACTIVATED` before deleting it. > **Note:** When deactivating a Device, keep in mind the following:   - Device deactivation is a destructive operation for device factors and client certificates. Device reenrollment using Okta Verify allows end users to set up new factors on the device.   - Device deletion removes the device record from Okta. Reenrollment creates a new device record.
      * Deactivate a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deactivateDevice(deviceId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes (permanently) a device by `deviceId` if it has a status of `DEACTIVATED`. You can transition the device to `DEACTIVATED` status using the [Deactivate a Device](/openapi/okta-management/management/tag/Device/#tag/Device/operation/deactivateDevice) endpoint. This request is destructive and deletes all of the profile data related to the device. Once deleted, device data can\'t be recovered. However, reenrollment creates a new device record. > **Note:** Attempts to delete a device that isn\'t in a `DEACTIVATED` state raise an error.
      * Delete a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deleteDevice(deviceId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a device by `deviceId`
      * Retrieve a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  getDevice(deviceId: string, _options?: Configuration): Observable<Device>;
  /**
      * Lists all Users for a device by `deviceId`
      * List all users for a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  listDeviceUsers(deviceId: string, _options?: Configuration): Observable<Collection<DeviceUser>>;
  /**
      * Lists all devices with pagination support.  >**Note:** To list all devices enrolled by a user, use the [List all devices endpoint in the User Resources API](/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserDevices).  You can return a subset of devices that match a supported search criteria using the `search` query parameter. Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request. > **Note:** Listing devices with `search` should not be used as a part of any critical flow, such as authentication or updates, to prevent potential data loss. `search` results may not reflect the latest information, as this endpoint uses a search index which may not be up-to-date with recent updates to the object.  Don\'t use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss.   Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation requires [URL encoding](https://www.w3.org/TR/html4/interact/forms.html#h-17.13.4.1). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
      * List all devices
      * @param after
      * @param limit A limit on the number of objects to return (recommend &#x60;20&#x60;)
      * @param search A SCIM filter expression that filters the results. Searches include all device &#x60;profile&#x60; properties and the device &#x60;id&#x60;, &#x60;status&#x60;, and &#x60;lastUpdated&#x60; properties.  Searches for devices can be filtered by the contains (&#x60;co&#x60;) operator. You can only use &#x60;co&#x60; with these select device profile attributes: &#x60;profile.displayName&#x60;, &#x60;profile.serialNumber&#x60;, &#x60;profile.imei&#x60;, &#x60;profile.meid&#x60;, &#x60;profile.udid&#x60;, and &#x60;profile.sid&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @param expand Includes associated user details and management status for the device in the &#x60;_embedded&#x60; attribute
      */
  listDevices(after?: string, limit?: number, search?: string, expand?: 'user' | 'userSummary', _options?: Configuration): Observable<Collection<DeviceList>>;
  /**
      * Suspends a device by setting its status to `SUSPENDED`. Use suspended devices to create and delete device user links. You can only unsuspend or deactivate suspended devices. > **Note:** `SUSPENDED` status is meant to be temporary, so it isn\'t destructive.
      * Suspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  suspendDevice(deviceId: string, _options?: Configuration): Observable<void>;
  /**
      * Unsuspends a device by returning its `status` to `ACTIVE`. >**Note:** Only devices with a `SUSPENDED` status can be unsuspended.
      * Unsuspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  unsuspendDevice(deviceId: string, _options?: Configuration): Observable<void>;
}
import { DeviceAccessApiRequestFactory, DeviceAccessApiResponseProcessor } from '../apis/DeviceAccessApi';
export declare class ObservableDeviceAccessApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: DeviceAccessApiRequestFactory, responseProcessor?: DeviceAccessApiResponseProcessor);
  /**
      * Retrieves the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
      * Retrieve the Desktop MFA Enforce Number Matching Challenge org setting
      */
  getDesktopMFAEnforceNumberMatchingChallengeOrgSetting(_options?: Configuration): Observable<DesktopMFAEnforceNumberMatchingChallengeOrgSetting>;
  /**
      * Retrieves the status of the Desktop MFA Recovery PIN feature. That is, whether or not the feature is enabled for your org.
      * Retrieve the Desktop MFA Recovery PIN org setting
      */
  getDesktopMFARecoveryPinOrgSetting(_options?: Configuration): Observable<DesktopMFARecoveryPinOrgSetting>;
  /**
      * Replaces the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
      * Replace the Desktop MFA Enforce Number Matching Challenge org setting
      * @param desktopMFAEnforceNumberMatchingChallengeOrgSetting
      */
  replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting(desktopMFAEnforceNumberMatchingChallengeOrgSetting: DesktopMFAEnforceNumberMatchingChallengeOrgSetting, _options?: Configuration): Observable<DesktopMFAEnforceNumberMatchingChallengeOrgSetting>;
  /**
      * Replaces the Desktop MFA Recovery PIN feature for your org
      * Replace the Desktop MFA Recovery PIN org setting
      * @param desktopMFARecoveryPinOrgSetting
      */
  replaceDesktopMFARecoveryPinOrgSetting(desktopMFARecoveryPinOrgSetting: DesktopMFARecoveryPinOrgSetting, _options?: Configuration): Observable<DesktopMFARecoveryPinOrgSetting>;
}
import { DeviceAssuranceApiRequestFactory, DeviceAssuranceApiResponseProcessor } from '../apis/DeviceAssuranceApi';
export declare class ObservableDeviceAssuranceApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: DeviceAssuranceApiRequestFactory, responseProcessor?: DeviceAssuranceApiResponseProcessor);
  /**
      * Creates a new device assurance policy
      * Create a device assurance policy
      * @param deviceAssurance
      */
  createDeviceAssurancePolicy(deviceAssurance: DeviceAssurance, _options?: Configuration): Observable<DeviceAssurance>;
  /**
      * Deletes a device assurance policy by `deviceAssuranceId`. If the device assurance policy is currently being used in the org Authentication Policies, the delete will not be allowed.
      * Delete a device assurance policy
      * @param deviceAssuranceId Id of the device assurance policy
      */
  deleteDeviceAssurancePolicy(deviceAssuranceId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a device assurance policy by `deviceAssuranceId`
      * Retrieve a device assurance policy
      * @param deviceAssuranceId Id of the device assurance policy
      */
  getDeviceAssurancePolicy(deviceAssuranceId: string, _options?: Configuration): Observable<DeviceAssurance>;
  /**
      * Lists all device assurance policies
      * List all device assurance policies
      */
  listDeviceAssurancePolicies(_options?: Configuration): Observable<Collection<DeviceAssurance>>;
  /**
      * Replaces a device assurance policy by `deviceAssuranceId`
      * Replace a device assurance policy
      * @param deviceAssuranceId Id of the device assurance policy
      * @param deviceAssurance
      */
  replaceDeviceAssurancePolicy(deviceAssuranceId: string, deviceAssurance: DeviceAssurance, _options?: Configuration): Observable<DeviceAssurance>;
}
import { DeviceIntegrationsApiRequestFactory, DeviceIntegrationsApiResponseProcessor } from '../apis/DeviceIntegrationsApi';
export declare class ObservableDeviceIntegrationsApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: DeviceIntegrationsApiRequestFactory, responseProcessor?: DeviceIntegrationsApiResponseProcessor);
  /**
      * Activates a device integration and populates the related configurations by `deviceIntegrationId`
      * Activate a device integration
      * @param deviceIntegrationId The ID of the device integration
      */
  activateDeviceIntegration(deviceIntegrationId: string, _options?: Configuration): Observable<DeviceIntegrations>;
  /**
      * Deactivates a device integration by `deviceIntegrationId`
      * Deactivate a device integration
      * @param deviceIntegrationId The ID of the device integration
      */
  deactivateDeviceIntegration(deviceIntegrationId: string, _options?: Configuration): Observable<DeviceIntegrations>;
  /**
      * Retrieves a device integration by `deviceIntegrationId`
      * Retrieve a device integration
      * @param deviceIntegrationId The ID of the device integration
      */
  getDeviceIntegration(deviceIntegrationId: string, _options?: Configuration): Observable<DeviceIntegrations>;
  /**
      * Lists all device integrations for your org. Examples include Device Posture Provider, Windows Security Center, Chrome Device Trust, OSQuery, and Android Device Trust.
      * List all device integrations
      */
  listDeviceIntegrations(_options?: Configuration): Observable<Collection<DeviceIntegrations>>;
}
import { DevicePostureCheckApiRequestFactory, DevicePostureCheckApiResponseProcessor } from '../apis/DevicePostureCheckApi';
export declare class ObservableDevicePostureCheckApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: DevicePostureCheckApiRequestFactory, responseProcessor?: DevicePostureCheckApiResponseProcessor);
  /**
      * Creates a device posture check
      * Create a device posture check
      * @param devicePostureCheck
      */
  createDevicePostureCheck(devicePostureCheck: DevicePostureCheck, _options?: Configuration): Observable<DevicePostureCheck>;
  /**
      * Deletes a device posture check by `postureCheckId`. You can\'t delete the device posture check if it\'s used in a device assurance policy.
      * Delete a device posture check
      * @param postureCheckId ID of the device posture check
      */
  deleteDevicePostureCheck(postureCheckId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a device posture check by `postureCheckId`
      * Retrieve a device posture check
      * @param postureCheckId ID of the device posture check
      */
  getDevicePostureCheck(postureCheckId: string, _options?: Configuration): Observable<DevicePostureCheck>;
  /**
      * Lists all default device posture checks. Default device posture checks are defined by Okta. Their type will always be `BUILTIN`.
      * List all default device posture checks
      */
  listDefaultDevicePostureChecks(_options?: Configuration): Observable<Collection<DevicePostureCheck>>;
  /**
      * Lists all device posture checks
      * List all device posture checks
      */
  listDevicePostureChecks(_options?: Configuration): Observable<Collection<DevicePostureCheck>>;
  /**
      * Replaces a device posture check by `postureCheckId`
      * Replace a device posture check
      * @param postureCheckId ID of the device posture check
      * @param devicePostureCheck
      */
  replaceDevicePostureCheck(postureCheckId: string, devicePostureCheck: DevicePostureCheck, _options?: Configuration): Observable<DevicePostureCheck>;
}
import { DirectoriesIntegrationApiRequestFactory, DirectoriesIntegrationApiResponseProcessor } from '../apis/DirectoriesIntegrationApi';
export declare class ObservableDirectoriesIntegrationApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: DirectoriesIntegrationApiRequestFactory, responseProcessor?: DirectoriesIntegrationApiResponseProcessor);
  /**
      * Updates an Active Directory group membership directly in Active Directory  > **Note:** See **Before you begin: Active Directory integration with the following setup** in the [Use Okta Access Certifications to manage AD group membership](https://help.okta.com/okta_help.htm?type=oie&id=ad-bidirectional-group-mgt-configure) product documentation.
      * Update an Active Directory group membership
      * @param appInstanceId ID of the Active Directory app instance in Okta
      * @param agentAction
      */
  updateADGroupMembership(appInstanceId: string, agentAction: AgentAction, _options?: Configuration): Observable<void>;
}
import { DisasterRecoveryApiRequestFactory, DisasterRecoveryApiResponseProcessor } from '../apis/DisasterRecoveryApi';
export declare class ObservableDisasterRecoveryApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: DisasterRecoveryApiRequestFactory, responseProcessor?: DisasterRecoveryApiResponseProcessor);
  /**
      * Retrieves the failover or failback status for all the domains for your org
      * Retrieve the disaster recovery status for all domains for your org
      */
  getDRStatus(_options?: Configuration): Observable<GetDRStatus200Response>;
  /**
      * Retrieves the failover or failback status for the domain specified in the request path
      * Retrieve the disaster recovery status for a domain
      * @param domain The Okta domain name of your org or one of your custom domains
      */
  getDRStatusForDomain(domain: string, _options?: Configuration): Observable<GetDRStatus200Response>;
  /**
      * Starts the failback of your org
      * Start the failback of your org
      * @param startOrgFailbackRequest The request body is optional. You can specify a list of domains to failback, an empty object (&#x60;{}&#x60;), or no payload.
      */
  startOrgFailback(startOrgFailbackRequest?: StartOrgFailbackRequest, _options?: Configuration): Observable<StartOrgFailback200Response>;
  /**
      * Starts the failover of your org
      * Start the failover of your org
      * @param startOrgFailoverRequest The request body is optional. You can specify a list of domains to failover, an empty object (&#x60;{}&#x60;), or no payload.
      */
  startOrgFailover(startOrgFailoverRequest?: StartOrgFailoverRequest, _options?: Configuration): Observable<StartOrgFailover200Response>;
}
import { EmailDomainApiRequestFactory, EmailDomainApiResponseProcessor } from '../apis/EmailDomainApi';
export declare class ObservableEmailDomainApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: EmailDomainApiRequestFactory, responseProcessor?: EmailDomainApiResponseProcessor);
  /**
      * Creates an Email Domain in your org
      * Create an email domain
      * @param emailDomain
      * @param expand Specifies additional metadata to be included in the response
      */
  createEmailDomain(emailDomain: EmailDomain, expand?: Array<'brands'>, _options?: Configuration): Observable<EmailDomainResponse>;
  /**
      * Deletes an Email Domain by `emailDomainId`
      * Delete an email domain
      * @param emailDomainId
      * @param expand Specifies additional metadata to be included in the response
      */
  deleteEmailDomain(emailDomainId: string, expand?: Array<'brands'>, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an Email Domain by `emailDomainId`
      * Retrieve an email domain
      * @param emailDomainId
      * @param expand Specifies additional metadata to be included in the response
      */
  getEmailDomain(emailDomainId: string, expand?: Array<'brands'>, _options?: Configuration): Observable<EmailDomainResponseWithEmbedded>;
  /**
      * Lists all the Email Domains in your org
      * List all email domains
      * @param expand Specifies additional metadata to be included in the response
      */
  listEmailDomains(expand?: Array<'brands'>, _options?: Configuration): Observable<Collection<EmailDomainResponseWithEmbedded>>;
  /**
      * Replaces associated username and sender display name by `emailDomainId`
      * Replace an email domain
      * @param emailDomainId
      * @param updateEmailDomain
      * @param expand Specifies additional metadata to be included in the response
      */
  replaceEmailDomain(emailDomainId: string, updateEmailDomain: UpdateEmailDomain, expand?: Array<'brands'>, _options?: Configuration): Observable<EmailDomainResponse>;
  /**
      * Verifies an Email Domain by `emailDomainId`
      * Verify an email domain
      * @param emailDomainId
      */
  verifyEmailDomain(emailDomainId: string, _options?: Configuration): Observable<EmailDomainResponse>;
}
import { EmailServerApiRequestFactory, EmailServerApiResponseProcessor } from '../apis/EmailServerApi';
export declare class ObservableEmailServerApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: EmailServerApiRequestFactory, responseProcessor?: EmailServerApiResponseProcessor);
  /**
      * Creates a custom email SMTP server configuration for your org
      * Create a custom SMTP server
      * @param emailServerPost
      */
  createEmailServer(emailServerPost?: EmailServerPost, _options?: Configuration): Observable<EmailServerResponse>;
  /**
      * Deletes the specified custom SMTP server configuration
      * Delete an SMTP server configuration
      * @param emailServerId
      */
  deleteEmailServer(emailServerId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves the specified custom SMTP server configuration
      * Retrieve an SMTP server configuration
      * @param emailServerId
      */
  getEmailServer(emailServerId: string, _options?: Configuration): Observable<EmailServerListResponse>;
  /**
      * Lists all the enrolled custom SMTP server configurations
      * List all enrolled SMTP servers
      */
  listEmailServers(_options?: Configuration): Observable<EmailServerListResponse>;
  /**
      * Tests the specified custom SMTP Server configuration
      * Test an SMTP server configuration
      * @param emailServerId
      * @param emailTestAddresses
      */
  testEmailServer(emailServerId: string, emailTestAddresses?: EmailTestAddresses, _options?: Configuration): Observable<void>;
  /**
      * Updates the specified custom SMTP server configuration
      * Update an SMTP server configuration
      * @param emailServerId
      * @param emailServerRequest
      */
  updateEmailServer(emailServerId: string, emailServerRequest?: EmailServerRequest, _options?: Configuration): Observable<EmailServerResponse>;
}
import { EventHookApiRequestFactory, EventHookApiResponseProcessor } from '../apis/EventHookApi';
export declare class ObservableEventHookApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: EventHookApiRequestFactory, responseProcessor?: EventHookApiResponseProcessor);
  /**
      * Activates the event hook that matches the provided `id`
      * Activate an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      */
  activateEventHook(eventHookId: string, _options?: Configuration): Observable<EventHook>;
  /**
      * Creates a new event hook for your organization in `ACTIVE` status. You pass an event hook object in the JSON payload of your request. That object represents the set of required information about the event hook you\'re registering, including:   * The URI of your external service   * The [events](https://developer.okta.com/docs/reference/api/event-types/) in Okta you want to subscribe to   * An optional event hook filter that can reduce the number of event hook calls. This is a self-service Early Access (EA) feature.     See [Create an event hook filter](https://developer.okta.com/docs/concepts/event-hooks/#create-an-event-hook-filter).      Additionally, you can specify a secret API key for Okta to pass to your external service endpoint for security verification. Note that the API key you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs. Optionally, you can specify extra headers that Okta passes to your external service with each call. Your external service must use a valid HTTPS endpoint.
      * Create an event hook
      * @param eventHook
      */
  createEventHook(eventHook: EventHook, _options?: Configuration): Observable<EventHook>;
  /**
      * Deactivates the event hook that matches the provided `id`
      * Deactivate an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      */
  deactivateEventHook(eventHookId: string, _options?: Configuration): Observable<EventHook>;
  /**
      * Deletes the event hook that matches the provided `id`. After deletion, the event hook is unrecoverable. As a safety precaution, you can only delete event hooks with a status of `INACTIVE`.
      * Delete an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      */
  deleteEventHook(eventHookId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an event hook
      * Retrieve an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      */
  getEventHook(eventHookId: string, _options?: Configuration): Observable<EventHook>;
  /**
      * Lists all event hooks
      * List all event hooks
      */
  listEventHooks(_options?: Configuration): Observable<Collection<EventHook>>;
  /**
      * Replaces an event hook. Okta validates the new properties before replacing the existing values. Some event hook properties are immutable and can\'t be updated. Refer to the parameter description in the request body schema.  >**Note:** Updating the `channel` property requires you to verify the hook again.
      * Replace an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      * @param eventHook
      */
  replaceEventHook(eventHookId: string, eventHook: EventHook, _options?: Configuration): Observable<EventHook>;
  /**
      * Verifies that the event hook matches the provided `eventHookId`. To verify ownership, your endpoint must send information back to Okta in JSON format. See [Event hooks](https://developer.okta.com/docs/concepts/event-hooks/#one-time-verification-request).  Only `ACTIVE` and `VERIFIED` event hooks can receive events from Okta.  If a response is not received within 3 seconds, the outbound request times out. One retry is attempted after a timeout or error response. If a successful response still isn\'t received, this operation returns a 400 error with more information about the failure.
      * Verify an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
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
      * Retrieves a feature by ID
      * Retrieve a feature
      * @param featureId &#x60;id&#x60; of the feature
      */
  getFeature(featureId: string, _options?: Configuration): Observable<Feature>;
  /**
      * Lists all feature dependencies for a specified feature.  A feature\'s dependencies are the features that it requires to be enabled in order for itself to be enabled.
      * List all dependencies
      * @param featureId &#x60;id&#x60; of the feature
      */
  listFeatureDependencies(featureId: string, _options?: Configuration): Observable<Collection<Feature>>;
  /**
      * Lists all feature dependents for the specified feature.  A feature\'s dependents are the features that need to be disabled in order for the feature itself to be disabled.
      * List all dependents
      * @param featureId &#x60;id&#x60; of the feature
      */
  listFeatureDependents(featureId: string, _options?: Configuration): Observable<Collection<Feature>>;
  /**
      * Lists all self-service features for your org
      * List all features
      */
  listFeatures(_options?: Configuration): Observable<Collection<Feature>>;
  /**
      * Updates a feature\'s lifecycle status. Use this endpoint to enable or disable a feature for your org.  Use the `mode=force` parameter to override dependency restrictions for a particular feature. Normally, you can\'t enable a feature if it has one or more dependencies that aren\'t enabled.  When you use the `mode=force` parameter while enabling a feature, Okta first tries to enable any disabled features that this feature may have as dependencies. If you don\'t pass the `mode=force` parameter and the feature has dependencies that need to be enabled before the feature is enabled, a 400 error is returned.  When you use the `mode=force` parameter while disabling a feature, Okta first tries to disable any enabled features that this feature may have as dependents. If you don\'t pass the `mode=force` parameter and the feature has dependents that need to be disabled before the feature is disabled, a 400 error is returned.  The following chart shows the different state transitions for a feature.  ![State transitions of a feature](../../../../../images/features/update-ssfeat-flowchart.png \'#width=500px;\')
      * Update a feature lifecycle
      * @param featureId &#x60;id&#x60; of the feature
      * @param lifecycle Whether to &#x60;ENABLE&#x60; or &#x60;DISABLE&#x60; the feature
      * @param mode Indicates if you want to force enable or disable a feature. Supported value is &#x60;force&#x60;.
      */
  updateFeatureLifecycle(featureId: string, lifecycle: FeatureLifecycle, mode?: string, _options?: Configuration): Observable<Feature>;
}
import { GovernanceBundleApiRequestFactory, GovernanceBundleApiResponseProcessor } from '../apis/GovernanceBundleApi';
export declare class ObservableGovernanceBundleApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: GovernanceBundleApiRequestFactory, responseProcessor?: GovernanceBundleApiResponseProcessor);
  /**
      * Creates a Governance Bundle for the Admin Console in RAMP
      * Create a governance bundle for the Admin Console in RAMP
      * @param governanceBundleCreateRequest
      */
  createGovernanceBundle(governanceBundleCreateRequest: GovernanceBundleCreateRequest, _options?: Configuration): Observable<GovernanceBundle>;
  /**
      * Deletes a Governance Bundle from RAMP
      * Delete a governance bundle from RAMP
      * @param bundleId The &#x60;id&#x60; of a bundle
      */
  deleteGovernanceBundle(bundleId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a Governance Bundle from RAMP
      * Retrieve a governance bundle from RAMP
      * @param bundleId The &#x60;id&#x60; of a bundle
      */
  getGovernanceBundle(bundleId: string, _options?: Configuration): Observable<GovernanceBundle>;
  /**
      * Retrieves the opt-in status of the Admin Console from RAMP
      * Retrieve the opt-in status from RAMP
      */
  getOptInStatus(_options?: Configuration): Observable<OptInStatusResponse>;
  /**
      * Lists all Entitlement Values specific to a Bundle Entitlement
      * List all entitlement values for a bundle entitlement
      * @param bundleId The &#x60;id&#x60; of a bundle
      * @param entitlementId The &#x60;id&#x60; of a bundle entitlement
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listBundleEntitlementValues(bundleId: string, entitlementId: string, after?: string, limit?: number, _options?: Configuration): Observable<EntitlementValuesResponse>;
  /**
      * Lists all Entitlements specific to a Governance Bundle
      * List all entitlements for a governance bundle
      * @param bundleId The &#x60;id&#x60; of a bundle
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listBundleEntitlements(bundleId: string, after?: string, limit?: number, _options?: Configuration): Observable<BundleEntitlementsResponse>;
  /**
      * Lists all Governance Bundles for the Admin Console in your org
      * List all governance bundles for the Admin Console
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listGovernanceBundles(after?: string, limit?: number, _options?: Configuration): Observable<GovernanceBundlesResponse>;
  /**
      * Opts in the Admin Console to RAMP
      * Opt in the Admin Console to RAMP
      */
  optIn(_options?: Configuration): Observable<OptInStatusResponse>;
  /**
      * Opts out the Admin Console from RAMP
      * Opt out the Admin Console from RAMP
      */
  optOut(_options?: Configuration): Observable<OptInStatusResponse>;
  /**
      * Replaces a Governance Bundle in RAMP
      * Replace a governance bundle in RAMP
      * @param bundleId The &#x60;id&#x60; of a bundle
      * @param governanceBundleUpdateRequest
      */
  replaceGovernanceBundle(bundleId: string, governanceBundleUpdateRequest: GovernanceBundleUpdateRequest, _options?: Configuration): Observable<GovernanceBundle>;
}
import { GroupApiRequestFactory, GroupApiResponseProcessor } from '../apis/GroupApi';
export declare class ObservableGroupApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: GroupApiRequestFactory, responseProcessor?: GroupApiResponseProcessor);
  /**
      * Activates a specific group rule by ID from your org
      * Activate a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      */
  activateGroupRule(ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns a user to a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Assign a user to a group
      * @param groupId The &#x60;id&#x60; of the group
      * @param userId ID of an existing Okta user
      */
  assignUserToGroup(groupId: string, userId: string, _options?: Configuration): Observable<void>;
  /**
      * Adds a new group with the `OKTA_GROUP` type to your org. > **Note:** App import operations are responsible for syncing groups with `APP_GROUP` type such as Active Directory groups. See [About groups](https://help.okta.com/okta_help.htm?id=Directory_Groups) in the help documentation.
      * Add a group
      * @param group
      */
  createGroup(group: CreateGroupRequest, _options?: Configuration): Observable<Group>;
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition > **Note:** Group rules are created with the status set to `\'INACTIVE\'`.
      * Create a group rule
      * @param groupRule
      */
  createGroupRule(groupRule: CreateGroupRuleRequest, _options?: Configuration): Observable<GroupRule>;
  /**
      * Deactivates a specific group rule by ID from your org
      * Deactivate a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      */
  deactivateGroupRule(ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a group of the `OKTA_GROUP` or `APP_GROUP` type from your org. > **Note:** You can\'t remove groups of type `APP_GROUP` if they are used in a group push mapping.
      * Delete a group
      * @param groupId The &#x60;id&#x60; of the group
      */
  deleteGroup(groupId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a specific group rule by `groupRuleId`
      * Delete a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      * @param removeUsers If set to &#x60;true&#x60;, removes users from groups assigned by this rule
      */
  deleteGroupRule(ruleId: string, removeUsers?: boolean, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a specific group by `id` from your org
      * Retrieve a group
      * @param groupId The &#x60;id&#x60; of the group
      */
  getGroup(groupId: string, _options?: Configuration): Observable<Group>;
  /**
      * Retrieves a specific group rule by ID from your org
      * Retrieve a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
      */
  getGroupRule(ruleId: string, expand?: string, _options?: Configuration): Observable<GroupRule>;
  /**
      * Lists all apps that are assigned to a group. See [Application Groups API](/openapi/okta-management/management/tag/ApplicationGroups/).
      * List all assigned apps
      * @param groupId The &#x60;id&#x60; of the group
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of app results for a page
      */
  listAssignedApplicationsForGroup(groupId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<Application>>;
  /**
      * Lists all group rules for your org
      * List all group rules
      * @param limit Specifies the number of rule results in a page
      * @param after Specifies the pagination cursor for the next page of rules
      * @param search Specifies the keyword to search rules for
      * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then displays group names
      */
  listGroupRules(limit?: number, after?: string, search?: string, expand?: string, _options?: Configuration): Observable<Collection<GroupRule>>;
  /**
      * Lists all users that are a member of a group. The default user limit is set to a very high number due to historical reasons that are no longer valid for most orgs. This will change in a future version of this API. The recommended page limit is now `limit=200`.
      * List all member users
      * @param groupId The &#x60;id&#x60; of the group
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of user results in a page
      */
  listGroupUsers(groupId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<User>>;
  /**
      * Lists all groups with pagination support.  > **Note:** To list all groups belonging to a member, use the [List all groups endpoint in the User Resources API](/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserGroups).  The number of groups returned depends on the specified [`limit`](/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!in=query&path=limit&t=request), if you have a search, filter, and/or query parameter set, and if that parameter is not null. We recommend using a limit less than or equal to 200.  A subset of groups can be returned that match a supported filter expression, query, or search criteria.  > **Note:** Results from the filter or query parameter are driven from an eventually consistent datasource. The synchronization lag is typically less than one second.
      * List all groups
      * @param search Searches for groups with a supported [filtering](https://developer.okta.com/docs/api/#filter) expression for all properties except for &#x60;_embedded&#x60;, &#x60;_links&#x60;, and &#x60;objectClass&#x60;. This operation supports [pagination](https://developer.okta.com/docs/api/#pagination).  Using search requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding), for example, &#x60;search&#x3D;type eq \&quot;OKTA_GROUP\&quot;&#x60; is encoded as &#x60;search&#x3D;type+eq+%22OKTA_GROUP%22&#x60;.  This operation searches many properties:  * Any group profile attribute, including imported app group profile attributes. * The top-level properties: &#x60;id&#x60;, &#x60;created&#x60;, &#x60;lastMembershipUpdated&#x60;, &#x60;lastUpdated&#x60;, and &#x60;type&#x60;. * The [source](/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!c&#x3D;200&amp;path&#x3D;_links/source&amp;t&#x3D;response) of groups with type of &#x60;APP_GROUP&#x60;, accessed as &#x60;source.id&#x60;.  You can also use the &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters.  Searches for groups can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. You can only use &#x60;co&#x60; with these select profile attributes: &#x60;profile.name&#x60; and &#x60;profile.description&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @param filter Filter expression for groups. See [Filter](https://developer.okta.com/docs/api/#filter).  &gt; **Note:** All filters must be [URL encoded](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;filter&#x3D;lastUpdated gt \&quot;2013-06-01T00:00:00.000Z\&quot;&#x60; is encoded as &#x60;filter&#x3D;lastUpdated%20gt%20%222013-06-01T00:00:00.000Z%22&#x60;.
      * @param q Finds a group that matches the &#x60;name&#x60; property. &gt; **Note:** Paging and searching are currently mutually exclusive. You can\&#39;t page a query. The default limit for a query is 300 results. Query is intended for an auto-complete picker use case where users refine their search string to constrain the results.
      * @param after Specifies the pagination cursor for the next page of groups. The &#x60;after&#x60; cursor should be treated as an opaque value and obtained through the next link relation. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of group results in a page.  Okta recommends using a specific value other than the default or maximum. If your request times out, retry your request with a smaller &#x60;limit&#x60; and [page the results](https://developer.okta.com/docs/api/#pagination).  The Okta default &#x60;Everyone&#x60; group isn\&#39;t returned for users with a group admin role.
      * @param expand If specified, additional metadata is included in the response. Possible values are &#x60;stats&#x60; and &#x60;app&#x60;. This additional metadata is listed in the [&#x60;_embedded&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/addGroup!c&#x3D;200&amp;path&#x3D;_embedded&amp;t&#x3D;response) property of the response.  &gt; **Note:** You can use the &#x60;stats&#x60; value to return the number of users within a group. This is listed as the &#x60;_embedded.stats.usersCount&#x60; value in the response. See this [Knowledge Base article](https://support.okta.com/help/s/article/Is-there-an-API-that-returns-the-number-of-users-in-a-group?language&#x3D;en_US) for more information and an example.
      * @param sortBy Specifies field to sort by **(for search queries only)**. &#x60;sortBy&#x60; can be any single property, for example &#x60;sortBy&#x3D;profile.name&#x60;.
      * @param sortOrder Specifies sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present. Groups with the same value for the &#x60;sortBy&#x60; property are ordered by &#x60;id&#x60;\&#39;.
      */
  listGroups(search?: string, filter?: string, q?: string, after?: string, limit?: number, expand?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Observable<Collection<Group>>;
  /**
      * Replaces the profile for a group of `OKTA_GROUP` type from your org. > **Note :** You only can modify profiles for groups of the `OKTA_GROUP` type. > > App imports are responsible for updating profiles for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Replace a group
      * @param groupId The &#x60;id&#x60; of the group
      * @param group
      */
  replaceGroup(groupId: string, group: CreateGroupRequest, _options?: Configuration): Observable<Group>;
  /**
      * Replaces a group rule > **Notes:** You can only update rules with a group whose status is set to `\'INACTIVE\'`. > > You currently can\'t update the `action` section.
      * Replace a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      * @param groupRule
      */
  replaceGroupRule(ruleId: string, groupRule: GroupRule, _options?: Configuration): Observable<GroupRule>;
  /**
      * Unassigns a user from a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. > > App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Unassign a user from a group
      * @param groupId The &#x60;id&#x60; of the group
      * @param userId ID of an existing Okta user
      */
  unassignUserFromGroup(groupId: string, userId: string, _options?: Configuration): Observable<void>;
}
import { GroupOwnerApiRequestFactory, GroupOwnerApiResponseProcessor } from '../apis/GroupOwnerApi';
export declare class ObservableGroupOwnerApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: GroupOwnerApiRequestFactory, responseProcessor?: GroupOwnerApiResponseProcessor);
  /**
      * Assigns a group owner
      * Assign a group owner
      * @param groupId The &#x60;id&#x60; of the group
      * @param groupOwner
      */
  assignGroupOwner(groupId: string, groupOwner: AssignGroupOwnerRequestBody, _options?: Configuration): Observable<GroupOwner>;
  /**
      * Deletes a group owner from a specific group
      * Delete a group owner
      * @param groupId The &#x60;id&#x60; of the group
      * @param ownerId The &#x60;id&#x60; of the group owner
      */
  deleteGroupOwner(groupId: string, ownerId: string, _options?: Configuration): Observable<void>;
  /**
      * Lists all owners for a specific group
      * List all group owners
      * @param groupId The &#x60;id&#x60; of the group
      * @param search SCIM filter expression for group owners. Allows you to filter owners by type.
      * @param after Specifies the pagination cursor for the next page of owners
      * @param limit Specifies the number of owner results in a page
      */
  listGroupOwners(groupId: string, search?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<GroupOwner>>;
}
import { GroupPushMappingApiRequestFactory, GroupPushMappingApiResponseProcessor } from '../apis/GroupPushMappingApi';
export declare class ObservableGroupPushMappingApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: GroupPushMappingApiRequestFactory, responseProcessor?: GroupPushMappingApiResponseProcessor);
  /**
      * Creates or links a group push mapping
      * Create a group push mapping
      * @param appId Application ID
      * @param body
      */
  createGroupPushMapping(appId: string, body: CreateGroupPushMappingRequest, _options?: Configuration): Observable<GroupPushMapping>;
  /**
      * Deletes a specific group push mapping. The group push mapping must be in an `INACTIVE` state.
      * Delete a group push mapping
      * @param appId Application ID
      * @param mappingId Group push mapping ID
      * @param deleteTargetGroup If set to &#x60;true&#x60;, the target group is also deleted. If set to &#x60;false&#x60;, the target group isn\&#39;t deleted.
      */
  deleteGroupPushMapping(appId: string, mappingId: string, deleteTargetGroup: boolean, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a group push mapping by ID
      * Retrieve a group push mapping
      * @param appId Application ID
      * @param mappingId Group push mapping ID
      */
  getGroupPushMapping(appId: string, mappingId: string, _options?: Configuration): Observable<GroupPushMapping>;
  /**
      * Lists all group push mappings with pagination support
      * List all group push mappings
      * @param appId Application ID
      * @param after Specifies the pagination cursor for the next page of mappings
      * @param limit Specifies the number of results returned
      * @param search Searches for group push mappings with a supported [filtering](https://developer.okta.com/docs/api/#filter) expression for all properties except for &#x60;_links&#x60;. This operation supports [pagination](https://developer.okta.com/docs/api/#pagination).  Using search requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding), for example, &#x60;search&#x3D;status eq \&quot;ACTIVE\&quot;&#x60; is encoded as &#x60;search&#x3D;status+eq+%22ACTIVE%22&#x60;. See [Special characters](https://developer.okta.com/docs/api/#special-characters).   You can also use the &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters.  Searches for group push mappings can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @param sortBy Specifies field to sort by **(for search queries only)**. &#x60;sortBy&#x60; can be any single property.
      * @param sortOrder Specifies sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present. Group push mappings with the same value for the &#x60;sortBy&#x60; property are ordered by &#x60;id&#x60;.
      */
  listGroupPushMappings(appId: string, after?: string, limit?: number, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Observable<Collection<GroupPushMapping>>;
  /**
      * Updates the status of a group push mapping
      * Update a group push mapping
      * @param appId Application ID
      * @param mappingId Group push mapping ID
      * @param body
      */
  updateGroupPushMapping(appId: string, mappingId: string, body: UpdateGroupPushMappingRequest, _options?: Configuration): Observable<GroupPushMapping>;
}
import { HookKeyApiRequestFactory, HookKeyApiResponseProcessor } from '../apis/HookKeyApi';
export declare class ObservableHookKeyApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: HookKeyApiRequestFactory, responseProcessor?: HookKeyApiResponseProcessor);
  /**
      * Creates a key for use with other parts of the application, such as inline hooks  > **Note:**  Use the key name to access this key for inline hook operations.  The total number of keys that you can create in an Okta org is limited to 50.   The response is a [Key object](https://developer.okta.com/docs/reference/api/hook-keys/#key-object) that represents the   key that you create. The `id` property in the response serves as the unique ID for the key, which you can specify when   invoking other CRUD operations. The `keyId` provided in the response is the alias of the public key that you can use to get   details of the public key data in a separate call.  > **Note:** The keyId is the alias of the public key that you can use to retrieve the public key.
      * Create a key
      * @param keyRequest
      */
  createHookKey(keyRequest: KeyRequest, _options?: Configuration): Observable<DetailedHookKeyInstance>;
  /**
      * Deletes a key by `id`. After being deleted, the key is unrecoverable.  As a safety precaution, only keys that aren\'t being used are eligible for deletion.
      * Delete a key
      * @param hookKeyId ID of the Hook Key
      */
  deleteHookKey(hookKeyId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves the public portion of the Key object using the `id` parameter  >**Note:** The `?expand=publickey` query parameter optionally returns the full object including the details of the public key in the response body\'s `_embedded` property.
      * Retrieve a key by ID
      * @param hookKeyId ID of the Hook Key
      */
  getHookKey(hookKeyId: string, _options?: Configuration): Observable<HookKey>;
  /**
      * Retrieves a public key by `keyId`  >**Note:** keyId is the alias of the public key.
      * Retrieve a public key
      * @param keyId id\&quot; of the Public Key
      */
  getPublicKey(keyId: string, _options?: Configuration): Observable<Embedded>;
  /**
      * Lists all keys
      * List all keys
      */
  listHookKeys(_options?: Configuration): Observable<Collection<HookKey>>;
  /**
      * Replaces a key by `id`  This request replaces existing properties after passing validation.  > **Note:** The only parameter that you can update is the name of the key, which must be unique at all times.
      * Replace a key
      * @param hookKeyId ID of the Hook Key
      * @param keyRequest
      */
  replaceHookKey(hookKeyId: string, keyRequest: KeyRequest, _options?: Configuration): Observable<DetailedHookKeyInstance>;
}
import { IdentityProviderApiRequestFactory, IdentityProviderApiResponseProcessor } from '../apis/IdentityProviderApi';
export declare class ObservableIdentityProviderApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: IdentityProviderApiRequestFactory, responseProcessor?: IdentityProviderApiResponseProcessor);
  /**
      * Activates an inactive identity provider (IdP)
      * Activate an IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  activateIdentityProvider(idpId: string, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Clones an X.509 certificate for an identity provider (IdP) signing key credential from a source IdP to target IdP > **Caution:** Sharing certificates isn\'t a recommended security practice.  > **Note:** If the key is already present in the list of key credentials for the target IdP, you receive a 400 error response.
      * Clone a signing key credential for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      * @param targetIdpId &#x60;id&#x60; of the target IdP
      */
  cloneIdentityProviderKey(idpId: string, keyId: string, targetIdpId: string, _options?: Configuration): Observable<IdPKeyCredential>;
  /**
      * Creates a new identity provider (IdP) integration.  #### SAML 2.0 IdP  You must first add the IdP\'s signature certificate to the IdP key store before you can add a SAML 2.0 IdP with a `kid` credential reference.   Don\'t use `fromURI` to automatically redirect a user to a particular app after successfully authenticating with a third-party IdP. Instead, use SAML deep links. Using `fromURI` isn\'t tested or supported. For more information about using deep links when signing users in using an SP-initiated flow, see [Understanding SP-Initiated Login flow](https://developer.okta.com/docs/concepts/saml/#understanding-sp-initiated-login-flow).  Use SAML deep links to automatically redirect the user to an app after successfully authenticating with a third-party IdP. To use deep links, assemble these three parts into a URL:  * SP ACS URL<br> For example: `https://${yourOktaDomain}/sso/saml2/:idpId` * The app to which the user is automatically redirected after successfully authenticating with the IdP <br> For example: `/app/:app-location/:appId/sso/saml` * Optionally, if the app is an outbound SAML app, you can specify the `relayState` passed to it.<br> For example: `?RelayState=:anyUrlEncodedValue`  The deep link for the above three parts is:<br> `https://${yourOktaDomain}/sso/saml2/:idpId/app/:app-location/:appId/sso/saml?RelayState=:anyUrlEncodedValue`  #### Smart Card X509 IdP  You must first add the IdP\'s server certificate to the IdP key store before you can add a Smart Card `X509` IdP with a `kid` credential reference. You need to upload the whole trust chain as a single key using the [Key Store API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderKeys/#tag/IdentityProviderKeys/operation/createIdentityProviderKey). Depending on the information stored in the smart card, select the proper [template](https://developer.okta.com/docs/reference/okta-expression-language/#idp-user-profile) `idpuser.subjectAltNameEmail` or `idpuser.subjectAltNameUpn`.  #### Identity verification vendors as identity providers  Identity verification vendors (IDVs) work like IdPs, with a few key differences. IDVs verify your user\'s identities by requiring them to submit a proof of identity. There are many ways to verify user identities. For example, a proof of identity can be a selfie to determine liveliness or it can be requiring users to submit a photo of their driver\'s license and matching that information with a database.  There are three IDVs that you can configure as IdPs in your org by creating an account with the vendor, and then creating an IdP integration. Control how the IDVs verify your users by using [Okta account management policy rules](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).  * [Persona](https://withpersona.com/)  * [CLEAR Verified](https://www.clearme.com/)  * [Incode](https://incode.com/)
      * Create an IdP
      * @param identityProvider IdP settings
      */
  createIdentityProvider(identityProvider: IdentityProvider, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Creates a new X.509 certificate credential in the identity provider (IdP) key store > **Note:** RSA-based certificates are supported for all IdP types. Okta currently supports EC-based certificates only for the `X509` IdP type. For EC-based certificates we support only P-256, P-384, and P-521 curves.
      * Create an IdP key credential
      * @param jsonWebKey
      */
  createIdentityProviderKey(jsonWebKey: IdPCertificateCredential, _options?: Configuration): Observable<IdPKeyCredential>;
  /**
      * Deactivates an active identity provider (IdP)
      * Deactivate an IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  deactivateIdentityProvider(idpId: string, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Deletes an identity provider (IdP) integration by `idpId` * All existing IdP users are unlinked with the highest order profile source taking precedence for each IdP user. * Unlinked users keep their existing authentication provider such as `FEDERATION` or `SOCIAL`.
      * Delete an IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  deleteIdentityProvider(idpId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a specific identity provider (IdP) key credential by `kid` if it isn\'t currently being used by an active or inactive IdP
      * Delete an IdP key credential
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      */
  deleteIdentityProviderKey(keyId: string, _options?: Configuration): Observable<void>;
  /**
      * Generates a new key pair and returns a certificate signing request (CSR) for it > **Note:** The private key isn\'t listed in the [signing key credentials for the identity provider (IdP)](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderSigningKeys/#tag/IdentityProviderSigningKeys/operation/listIdentityProviderSigningKeys) until it\'s published.
      * Generate a certificate signing request
      * @param idpId &#x60;id&#x60; of IdP
      * @param metadata
      */
  generateCsrForIdentityProvider(idpId: string, metadata: CsrMetadata, _options?: Configuration): Observable<IdPCsr>;
  /**
      * Generates a new X.509 certificate for an identity provider (IdP) signing key credential to be used for signing assertions sent to the IdP. IdP signing keys are read-only. > **Note:** To update an IdP with the newly generated key credential, [update your IdP](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider) using the returned key\'s `kid` in the [signing credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/credentials/signing/kid&t=request).
      * Generate a new signing key credential for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param validityYears expiry of the IdP key credential
      */
  generateIdentityProviderSigningKey(idpId: string, validityYears: number, _options?: Configuration): Observable<IdPKeyCredential>;
  /**
      * Retrieves a specific certificate signing request (CSR) by `id`
      * Retrieve a certificate signing request
      * @param idpId &#x60;id&#x60; of IdP
      * @param csrId &#x60;id&#x60; of the IdP CSR
      */
  getCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Observable<IdPCsr>;
  /**
      * Retrieves an identity provider (IdP) integration by `idpId`
      * Retrieve an IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  getIdentityProvider(idpId: string, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Retrieves a linked identity provider (IdP) user by ID
      * Retrieve a user for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  getIdentityProviderApplicationUser(idpId: string, userId: string, _options?: Configuration): Observable<IdentityProviderApplicationUser>;
  /**
      * Retrieves a specific identity provider (IdP) key credential by `kid`
      * Retrieve an IdP key credential
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      */
  getIdentityProviderKey(keyId: string, _options?: Configuration): Observable<IdPKeyCredential>;
  /**
      * Retrieves a specific identity provider (IdP) key credential by `kid`
      * Retrieve a signing key credential for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      */
  getIdentityProviderSigningKey(idpId: string, keyId: string, _options?: Configuration): Observable<IdPKeyCredential>;
  /**
      * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
      * Link a user to IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      * @param userIdentityProviderLinkRequest
      */
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest, _options?: Configuration): Observable<IdentityProviderApplicationUser>;
  /**
      * Lists the active signing key credential for an identity provider (IdP)
      * List the active signing key credential for IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  listActiveIdentityProviderSigningKey(idpId: string, _options?: Configuration): Observable<Collection<IdPKeyCredential>>;
  /**
      * Lists all certificate signing requests (CSRs) for an identity provider (IdP)
      * List all certificate signing requests
      * @param idpId &#x60;id&#x60; of IdP
      */
  listCsrsForIdentityProvider(idpId: string, _options?: Configuration): Observable<Collection<IdPCsr>>;
  /**
      * Lists all the users linked to an identity provider (IdP)
      * List all users for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param q Searches the records for matching value
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      * @param expand Expand user data
      */
  listIdentityProviderApplicationUsers(idpId: string, q?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Observable<Collection<IdentityProviderApplicationUser>>;
  /**
      * Lists all identity provider (IdP) key credentials
      * List all IdP key credentials
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listIdentityProviderKeys(after?: string, limit?: number, _options?: Configuration): Observable<Collection<IdPKeyCredential>>;
  /**
      * Lists all signing key credentials for an identity provider (IdP)
      * List all signing key credentials for IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  listIdentityProviderSigningKeys(idpId: string, _options?: Configuration): Observable<Collection<IdPKeyCredential>>;
  /**
      * Lists all identity provider (IdP) integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all IdPs
      * @param q Searches the &#x60;name&#x60; property of IdPs for matching value
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      * @param type Filters IdPs by &#x60;type&#x60;
      */
  listIdentityProviders(q?: string, after?: string, limit?: number, type?: IdentityProviderType, _options?: Configuration): Observable<Collection<IdentityProvider>>;
  /**
      * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
      * List all tokens from OIDC IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  listSocialAuthTokens(idpId: string, userId: string, _options?: Configuration): Observable<Collection<SocialAuthToken>>;
  /**
      * Lists the identity providers (IdPs) associated with the user
      * List all IdPs for user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listUserIdentityProviders(userId: string, _options?: Configuration): Observable<Collection<IdentityProvider>>;
  /**
      * Publishes the certificate signing request (CSR) with a signed X.509 certificate and adds it into the signing key credentials for the identity provider (IdP) > **Notes:** > * Publishing a certificate completes the lifecycle of the CSR, and it\'s no longer accessible. > * If the validity period of the certificate is less than 90 days, a 400 error response is returned.
      * Publish a certificate signing request
      * @param idpId &#x60;id&#x60; of IdP
      * @param csrId &#x60;id&#x60; of the IdP CSR
      * @param body
      */
  publishCsrForIdentityProvider(idpId: string, csrId: string, body: HttpFile, _options?: Configuration): Observable<IdPKeyCredential>;
  /**
      * Replaces an identity provider (IdP) integration by `idpId`
      * Replace an IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param identityProvider Updated configuration for the IdP
      */
  replaceIdentityProvider(idpId: string, identityProvider: IdentityProvider, _options?: Configuration): Observable<IdentityProvider>;
  /**
      * Replaces an identity provider (IdP) key credential by `kid`
      * Replace an IdP key credential
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      * @param idPKeyCredential Updated IdP key credential
      */
  replaceIdentityProviderKey(keyId: string, idPKeyCredential: IdPKeyCredential, _options?: Configuration): Observable<IdPKeyCredential>;
  /**
      * Revokes a certificate signing request (CSR) and deletes the key pair from the identity provider (IdP)
      * Revoke a certificate signing request
      * @param idpId &#x60;id&#x60; of IdP
      * @param csrId &#x60;id&#x60; of the IdP CSR
      */
  revokeCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Observable<void>;
  /**
      * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
      * Unlink a user from IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
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
      * Create an identity source session
      * @param identitySourceId The ID of the identity source for which the session is created
      */
  createIdentitySourceSession(identitySourceId: string, _options?: Configuration): Observable<IdentitySourceSession>;
  /**
      * Deletes an identity source session for a given identity source ID and session Id
      * Delete an identity source session
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      */
  deleteIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an identity source session for a given identity source ID and session ID
      * Retrieve an identity source session
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      */
  getIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Observable<IdentitySourceSession>;
  /**
      * Lists all identity source sessions for the given identity source instance
      * List all identity source sessions
      * @param identitySourceId The ID of the identity source for which the session is created
      */
  listIdentitySourceSessions(identitySourceId: string, _options?: Configuration): Observable<Collection<IdentitySourceSession>>;
  /**
      * Starts the import from the identity source described by the uploaded bulk operations
      * Start the import from the identity source
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      */
  startImportFromIdentitySource(identitySourceId: string, sessionId: string, _options?: Configuration): Observable<IdentitySourceSession>;
  /**
      * Uploads external IDs of entities that need to be deleted in Okta from the identity source for the given session
      * Upload the data to be deleted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkDeleteRequestBody
      */
  uploadIdentitySourceDataForDelete(identitySourceId: string, sessionId: string, bulkDeleteRequestBody?: BulkDeleteRequestBody, _options?: Configuration): Observable<void>;
  /**
      * Uploads entities that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the data to be upserted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkUpsertRequestBody
      */
  uploadIdentitySourceDataForUpsert(identitySourceId: string, sessionId: string, bulkUpsertRequestBody?: BulkUpsertRequestBody, _options?: Configuration): Observable<void>;
  /**
      * Uploads the group memberships that need to be deleted in Okta from the identity source for the given session
      * Upload the group memberships to be deleted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkGroupMembershipsDeleteRequestBody
      */
  uploadIdentitySourceGroupMembershipsForDelete(identitySourceId: string, sessionId: string, bulkGroupMembershipsDeleteRequestBody?: BulkGroupMembershipsDeleteRequestBody, _options?: Configuration): Observable<void>;
  /**
      * Uploads the group memberships that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the group memberships to be upserted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkGroupMembershipsUpsertRequestBody
      */
  uploadIdentitySourceGroupMembershipsForUpsert(identitySourceId: string, sessionId: string, bulkGroupMembershipsUpsertRequestBody?: BulkGroupMembershipsUpsertRequestBody, _options?: Configuration): Observable<void>;
  /**
      * Uploads external IDs of groups that need to be deleted in Okta from the identity source for the given session
      * Upload the group external IDs to be deleted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkGroupDeleteRequestBody
      */
  uploadIdentitySourceGroupsDataForDelete(identitySourceId: string, sessionId: string, bulkGroupDeleteRequestBody?: BulkGroupDeleteRequestBody, _options?: Configuration): Observable<void>;
  /**
      * Uploads the group profiles without memberships that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the group profiles without memberships to be upserted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkGroupUpsertRequestBody
      */
  uploadIdentitySourceGroupsForUpsert(identitySourceId: string, sessionId: string, bulkGroupUpsertRequestBody?: BulkGroupUpsertRequestBody, _options?: Configuration): Observable<void>;
}
import { InlineHookApiRequestFactory, InlineHookApiResponseProcessor } from '../apis/InlineHookApi';
export declare class ObservableInlineHookApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: InlineHookApiRequestFactory, responseProcessor?: InlineHookApiResponseProcessor);
  /**
      * Activates the inline hook by `inlineHookId`
      * Activate an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      */
  activateInlineHook(inlineHookId: string, _options?: Configuration): Observable<InlineHook>;
  /**
      * Creates an inline hook  This endpoint creates an inline hook for your org in an `ACTIVE` status. You need to pass an inline hooks object in the JSON payload of your request.  That object represents the set of required information about the inline hook that you\'re registering, including:  * The URI of your external service endpoint * The type of inline hook you\'re registering * The type of authentication you\'re registering  There are two authentication options that you can configure for your inline hook: HTTP headers and OAuth 2.0 tokens.  HTTP headers let you specify a secret API key that you want Okta to pass to your external service endpoint (so that your external service can check for its presence as a security measure).  >**Note:** The API key that you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs.  You can also optionally specify extra headers that you want Okta to pass to your external service with each call.  To configure HTTP header authentication, see parameters for the `config` object.  OAuth 2.0 tokens provide enhanced security between Okta and your external service. You can configure these tokens for the following types&mdash;client secret and private key.  >**Note:** Your external service\'s endpoint needs to be a valid HTTPS endpoint. The URI you specify should always begin with `https://`.  The total number of inline hooks that you can create in an Okta org is limited to 50, which is a combined total for any combination of inline hook types.
      * Create an inline hook
      * @param inlineHook
      */
  createInlineHook(inlineHook: InlineHookCreate, _options?: Configuration): Observable<InlineHookCreateResponse>;
  /**
      * Deactivates the inline hook by `inlineHookId`
      * Deactivate an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      */
  deactivateInlineHook(inlineHookId: string, _options?: Configuration): Observable<InlineHook>;
  /**
      * Deletes an inline hook by `inlineHookId`. After it\'s deleted, the inline hook is unrecoverable. As a safety precaution, only inline hooks with a status of `INACTIVE` are eligible for deletion.
      * Delete an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      */
  deleteInlineHook(inlineHookId: string, _options?: Configuration): Observable<void>;
  /**
      * Executes the inline hook that matches the provided `inlineHookId` by using the request body as the input. This inline hook sends the provided  data through the `channel` object and returns a response if it matches the correct data contract. Otherwise it returns an error. You need to  construct a JSON payload that matches the payloads that Okta would send to your external service for this inline hook type.  A timeout of three seconds is enforced on all outbound requests, with one retry in the event of a timeout or an error response from the remote system.  If a successful response isn\'t received after the request, a 400 error is returned with more information about what failed.  >**Note:** This execution endpoint isn\'t tied to any other functionality in Okta, and you should only use it for testing purposes.
      * Execute an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      * @param payloadData
      */
  executeInlineHook(inlineHookId: string, payloadData: ExecuteInlineHookRequest, _options?: Configuration): Observable<ExecuteInlineHook200Response>;
  /**
      * Retrieves an inline hook by `inlineHookId`
      * Retrieve an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      */
  getInlineHook(inlineHookId: string, _options?: Configuration): Observable<InlineHook>;
  /**
      * Lists all inline hooks or all inline hooks of a specific type.  When listing a specific inline hook, you need to specify its type. The following types are currently supported:   | Type Value                         | Name                                                           |   |------------------------------------|----------------------------------------------------------------|   | `com.okta.import.transform`        | [User import inline hook](/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createUserImportInlineHook)       |   | `com.okta.oauth2.tokens.transform` | [Token inline hook](/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTokenInlineHook)               |   | `com.okta.saml.tokens.transform`   | [SAML assertion inline hook](/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createSAMLAssertionInlineHook)       |   | `com.okta.telephony.provider`      | [Telephony inline hook](/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTelephonyInlineHook) |   | `com.okta.user.credential.password.import` | [Password import inline hook](/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createPasswordImportInlineHook)|   | `com.okta.user.pre-registration`   | [Registration inline hook](/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/create-registration-hook) |
      * List all inline hooks
      * @param type One of the supported inline hook types
      */
  listInlineHooks(type?: 'com.okta.import.transform' | 'com.okta.oauth2.tokens.transform' | 'com.okta.saml.tokens.transform' | 'com.okta.user.credential.password.import' | 'com.okta.user.pre-registration' | 'com.okta.telephony.provider', _options?: Configuration): Observable<Collection<InlineHook>>;
  /**
      * Replaces an inline hook by `inlineHookId`. The submitted inline hook properties replace the existing properties after passing validation.  >**Note:** Some properties are immutable and can\'t be updated.
      * Replace an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      * @param inlineHook
      */
  replaceInlineHook(inlineHookId: string, inlineHook: InlineHookReplace, _options?: Configuration): Observable<InlineHook>;
  /**
      * Updates an inline hook by `inlineHookId`
      * Update an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      * @param inlineHook
      */
  updateInlineHook(inlineHookId: string, inlineHook: InlineHookReplace, _options?: Configuration): Observable<InlineHook>;
}
import { IntegrationsApiRequestFactory, IntegrationsApiResponseProcessor } from '../apis/IntegrationsApi';
export declare class ObservableIntegrationsApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: IntegrationsApiRequestFactory, responseProcessor?: IntegrationsApiResponseProcessor);
  /**
      * Activates an API Service Integration instance Secret by `secretId`
      * Activate an API service integration instance secret
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
      */
  activateApiServiceIntegrationInstanceSecret(apiServiceId: string, secretId: string, _options?: Configuration): Observable<APIServiceIntegrationInstanceSecret>;
  /**
      * Creates and authorizes an API Service Integration instance
      * Create an API service integration instance
      * @param postAPIServiceIntegrationInstanceRequest
      */
  createApiServiceIntegrationInstance(postAPIServiceIntegrationInstanceRequest: PostAPIServiceIntegrationInstanceRequest, _options?: Configuration): Observable<PostAPIServiceIntegrationInstance>;
  /**
      * Creates an API Service Integration instance Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects.
      * Create an API service integration instance secret
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      */
  createApiServiceIntegrationInstanceSecret(apiServiceId: string, _options?: Configuration): Observable<APIServiceIntegrationInstanceSecret>;
  /**
      * Creates an OIN Integration submission for verification and publication
      * Create an OIN integration
      * @param submissionRequest
      */
  createSubmission(submissionRequest?: SubmissionRequest, _options?: Configuration): Observable<SubmissionResponse>;
  /**
      * Deactivates an API Service Integration instance Secret by `secretId`
      * Deactivate an API service integration instance secret
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
      */
  deactivateApiServiceIntegrationInstanceSecret(apiServiceId: string, secretId: string, _options?: Configuration): Observable<APIServiceIntegrationInstanceSecret>;
  /**
      * Deletes an API Service Integration instance by `id`. This operation also revokes access to scopes that were previously granted to this API Service Integration instance.
      * Delete an API service integration instance
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      */
  deleteApiServiceIntegrationInstance(apiServiceId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes an API Service Integration instance Secret by `secretId`. You can only delete an inactive Secret.
      * Delete an API service integration instance secret
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
      */
  deleteApiServiceIntegrationInstanceSecret(apiServiceId: string, secretId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an API Service Integration instance by `id`
      * Retrieve an API service integration instance
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      */
  getApiServiceIntegrationInstance(apiServiceId: string, _options?: Configuration): Observable<APIServiceIntegrationInstance>;
  /**
      * Retrieves an OIN Integration by ID
      * Retrieve an OIN integration
      * @param submissionId OIN Integration ID
      */
  getSubmissionByOperationId(submissionId: string, _options?: Configuration): Observable<SubmissionResponse>;
  /**
      * Retrieves the testing information for an existing OIN Integration
      * Retrieve an OIN integration testing information
      * @param submissionId OIN Integration ID
      */
  getSubmissionTestInfo(submissionId: string, _options?: Configuration): Observable<TestInfo>;
  /**
      * Lists all client secrets for an API Service Integration instance by `apiServiceId`
      * List all API service integration instance secrets
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      */
  listApiServiceIntegrationInstanceSecrets(apiServiceId: string, _options?: Configuration): Observable<Collection<APIServiceIntegrationInstanceSecret>>;
  /**
      * Lists all API Service Integration instances with a pagination option
      * List all API service integration instances
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listApiServiceIntegrationInstances(after?: string, _options?: Configuration): Observable<Collection<APIServiceIntegrationInstance>>;
  /**
      * Lists all OIN Integration submissions created through the org
      * List all OIN integrations
      * @param limit A limit on the number of objects to return
      * @param after Specify the pagination cursor (OIN Integration instance &#x60;id&#x60;) for the next page of OIN Integrations.
      */
  listSubmissions(limit?: number, after?: string, _options?: Configuration): Observable<Collection<SubmissionResponse>>;
  /**
      * Replaces the properties of an OIN Integration identified by ID
      * Replace an OIN integration
      * @param submissionId OIN Integration ID
      * @param submissionRequest
      */
  replaceSubmission(submissionId: string, submissionRequest?: SubmissionRequest, _options?: Configuration): Observable<SubmissionResponse>;
  /**
      * Submits an OIN Integration for Okta verification
      * Submit an OIN integration
      * @param submissionId OIN Integration ID
      */
  submitSubmission(submissionId: string, _options?: Configuration): Observable<void>;
  /**
      * Uploads a logo to your org. The image uploaded must adhere to the [OIN logo guidelines](https://developer.okta.com/docs/guides/submit-app-prereq/main/#logo-guidelines). Use the URL returned in the response header to specify the [`logo`](/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission!path=logo&t=request) parameter when you [create your OIN Integration submission](/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission). This logo appears in the OIN catalog for your app integration.
      * Upload an OIN integration logo
      * @param file
      */
  uploadSubmissionLogo(file?: HttpFile, _options?: Configuration): Observable<void>;
  /**
      * Upserts (adds or replaces) testing information for an OIN Integration
      * Upsert an OIN integration testing information
      * @param submissionId OIN Integration ID
      * @param testInfo
      */
  upsertSubmissionTestInfo(submissionId: string, testInfo?: TestInfo, _options?: Configuration): Observable<TestInfo>;
}
import { LinkedObjectApiRequestFactory, LinkedObjectApiResponseProcessor } from '../apis/LinkedObjectApi';
export declare class ObservableLinkedObjectApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: LinkedObjectApiRequestFactory, responseProcessor?: LinkedObjectApiResponseProcessor);
  /**
      * Creates a Linked Object definition
      * Create a linked object definition
      * @param linkedObject
      */
  createLinkedObjectDefinition(linkedObject: LinkedObject, _options?: Configuration): Observable<LinkedObject>;
  /**
      * Deletes the Linked Object definition specified by either the `primary` or `associated` name. The entire definition is removed, regardless of which name that you specify.
      * Delete a linked object definition
      * @param linkedObjectName Primary or Associated name
      */
  deleteLinkedObjectDefinition(linkedObjectName: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a Linked Object definition
      * Retrieve a linked object definition
      * @param linkedObjectName Primary or Associated name
      */
  getLinkedObjectDefinition(linkedObjectName: string, _options?: Configuration): Observable<LinkedObject>;
  /**
      * Lists all Linked Object definitions
      * List all linked object definitions
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
      * Activate a log stream
      * @param logStreamId Unique identifier for the log stream
      */
  activateLogStream(logStreamId: string, _options?: Configuration): Observable<LogStream>;
  /**
      * Creates a new log stream object
      * Create a log stream
      * @param instance
      */
  createLogStream(instance: LogStream, _options?: Configuration): Observable<LogStream>;
  /**
      * Deactivates a log stream by `logStreamId`
      * Deactivate a log stream
      * @param logStreamId Unique identifier for the log stream
      */
  deactivateLogStream(logStreamId: string, _options?: Configuration): Observable<LogStream>;
  /**
      * Deletes a log stream object from your org by ID
      * Delete a log stream
      * @param logStreamId Unique identifier for the log stream
      */
  deleteLogStream(logStreamId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a log stream object by ID
      * Retrieve a log stream
      * @param logStreamId Unique identifier for the log stream
      */
  getLogStream(logStreamId: string, _options?: Configuration): Observable<LogStream>;
  /**
      * Lists all log stream objects in your org. You can request a paginated list or a subset of log streams that match a supported filter expression.
      * List all log streams
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      * @param filter An expression that [filters](/#filter) the returned objects. You can only use the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60; properties in the filter expression.
      */
  listLogStreams(after?: string, limit?: number, filter?: string, _options?: Configuration): Observable<Collection<LogStream>>;
  /**
      * Replaces the log stream object properties for a given ID.  This operation is typically used to update the configuration of a log stream. Depending on the type of log stream you want to update, certain properties can\'t be modified after the log stream is initially created. Use the [Retrieve the log stream schema for the schema type](/openapi/okta-management/management/tag/Schema/#tag/Schema/operation/getLogStreamSchema) request to determine which properties you can update for the specific log stream type. Log stream properties with the `\"writeOnce\" : true` attribute can\'t be updated after creation. You must still specify these `writeOnce` properties in the request body with the original values in the PUT request.  > **Note:** You don\'t have to specify properties that have both the `\"writeOnce\": true` and the `\"writeOnly\": true` attributes in the PUT request body. These property values are ignored even if you add them in the PUT request body.
      * Replace a log stream
      * @param logStreamId Unique identifier for the log stream
      * @param instance
      */
  replaceLogStream(logStreamId: string, instance: LogStreamPutSchema, _options?: Configuration): Observable<LogStream>;
}
import { NetworkZoneApiRequestFactory, NetworkZoneApiResponseProcessor } from '../apis/NetworkZoneApi';
export declare class ObservableNetworkZoneApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: NetworkZoneApiRequestFactory, responseProcessor?: NetworkZoneApiResponseProcessor);
  /**
      * Activates a Network Zone by `zoneId`
      * Activate a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      */
  activateNetworkZone(zoneId: string, _options?: Configuration): Observable<NetworkZone>;
  /**
      * Creates a Network Zone * For an IP Network Zone, you must define either `gateways` or `proxies`. * For a Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `proxyType`. * For an Enhanced Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `ipServiceCategories`.
      * Create a network zone
      * @param zone
      */
  createNetworkZone(zone: NetworkZone, _options?: Configuration): Observable<NetworkZone>;
  /**
      * Deactivates a Network Zone by `zoneId`
      * Deactivate a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      */
  deactivateNetworkZone(zoneId: string, _options?: Configuration): Observable<NetworkZone>;
  /**
      * Deletes a Network Zone by `zoneId` > **Notes:** > * You can\'t delete a Network Zone that\'s used by a [Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) or [Rule](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyRules). > * For Okta Identity Engine orgs, you can\'t delete a Network Zone with an ACTIVE `status`. <x-lifecycle class=\"oie\"></x-lifecycle>
      * Delete a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      */
  deleteNetworkZone(zoneId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a Network Zone by `zoneId`
      * Retrieve a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      */
  getNetworkZone(zoneId: string, _options?: Configuration): Observable<NetworkZone>;
  /**
      * Lists all Network Zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id`, `usage`, and `system` properties. See [Filter](https://developer.okta.com/docs/api/#filter) for more information on the expressions that are used in filtering.
      * List all network zones
      * @param after
      * @param limit
      * @param filter
      */
  listNetworkZones(after?: string, limit?: number, filter?: string, _options?: Configuration): Observable<Collection<NetworkZone>>;
  /**
      * Replaces a Network Zone by `zoneId`. The replaced Network Zone type must be the same as the existing type. You can replace the usage (`POLICY`, `BLOCKLIST`) of a Network Zone by updating the `usage` attribute.  **IP exempt zone**<br> If you have the IP exempt zone feature enabled, you can allow traffic from specific gateway IPs irrespective of Okta ThreatInsight configurations, blocked network zones, or IP change events within Identity Threat Protection with Okta AI.<br> <br> When you enable this feature, Okta creates a zone called `DefaultExemptIpZone`. Gateway IPs that you add to this zone always have access to Okta resources. See [IP exempt zone](https://help.okta.com/okta_help.htm?type=oie&id=csh-about-ip-exempt-zone).  > **Note:** You can\'t add trusted proxy IPs to this zone, delete the zone, or create additional exempt IP zones.
      * Replace a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      * @param zone
      */
  replaceNetworkZone(zoneId: string, zone: NetworkZone, _options?: Configuration): Observable<NetworkZone>;
}
import { OktaApplicationSettingsApiRequestFactory, OktaApplicationSettingsApiResponseProcessor } from '../apis/OktaApplicationSettingsApi';
export declare class ObservableOktaApplicationSettingsApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: OktaApplicationSettingsApiRequestFactory, responseProcessor?: OktaApplicationSettingsApiResponseProcessor);
  /**
      * Retrieves the settings for an Okta app (also known as an Okta first-party app)
      * Retrieve the Okta application settings
      * @param appName The key name for the Okta app.&lt;br&gt; Supported apps:   * Okta Admin Console (&#x60;admin-console&#x60;)
      */
  getFirstPartyAppSettings(appName: string, _options?: Configuration): Observable<AdminConsoleSettings>;
  /**
      * Replaces the settings for an Okta app (also known as an Okta first-party app)
      * Replace the Okta application settings
      * @param appName The key name for the Okta app.&lt;br&gt; Supported apps:   * Okta Admin Console (&#x60;admin-console&#x60;)
      * @param adminConsoleSettings
      */
  replaceFirstPartyAppSettings(appName: string, adminConsoleSettings: AdminConsoleSettings, _options?: Configuration): Observable<AdminConsoleSettings>;
}
import { OktaPersonalSettingsApiRequestFactory, OktaPersonalSettingsApiResponseProcessor } from '../apis/OktaPersonalSettingsApi';
export declare class ObservableOktaPersonalSettingsApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: OktaPersonalSettingsApiRequestFactory, responseProcessor?: OktaPersonalSettingsApiResponseProcessor);
  /**
      * Lists all blocked email domains which are excluded from app migration
      * List all blocked email domains
      */
  listPersonalAppsExportBlockList(_options?: Configuration): Observable<PersonalAppsBlockList>;
  /**
      * Replaces the list of blocked email domains which are excluded from app migration
      * Replace the blocked email domains
      * @param personalAppsBlockList
      */
  replaceBlockedEmailDomains(personalAppsBlockList: PersonalAppsBlockList, _options?: Configuration): Observable<void>;
  /**
      * Replaces Okta Personal admin settings in a Workforce org
      * Replace the Okta Personal admin settings
      * @param oktaPersonalAdminFeatureSettings
      */
  replaceOktaPersonalAdminSettings(oktaPersonalAdminFeatureSettings: OktaPersonalAdminFeatureSettings, _options?: Configuration): Observable<void>;
}
import { OrgCreatorApiRequestFactory, OrgCreatorApiResponseProcessor } from '../apis/OrgCreatorApi';
export declare class ObservableOrgCreatorApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: OrgCreatorApiRequestFactory, responseProcessor?: OrgCreatorApiResponseProcessor);
  /**
      * Creates an org (child org) that has the same features as the current requesting org (parent org). A child org inherits any new features added to the parent org, but new features added to the child org aren\'t propagated back to the parent org. > **Notes:** > * Some features associated with products, such as Atspoke, Workflows, and Okta Identity Governance, aren\'t propagated to the child org. > * Wait at least 30 seconds after a 201-Created response before you make API requests to the new child org. > * For rate limits, see [Org creation rate limits](https://developer.okta.com/docs/reference/rl-additional-limits/#org-creation-rate-limits).
      * Create an org
      * @param childOrg
      */
  createChildOrg(childOrg?: ChildOrg, _options?: Configuration): Observable<ChildOrg>;
}
import { OrgSettingApiRequestFactory, OrgSettingApiResponseProcessor } from '../apis/OrgSettingApi';
export declare class ObservableOrgSettingApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: OrgSettingApiRequestFactory, responseProcessor?: OrgSettingApiResponseProcessor);
  /**
      * Assigns the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) as the default role for new public client apps
      * Assign the default public client app role setting
      * @param clientPrivilegesSetting
      */
  assignClientPrivilegesSetting(clientPrivilegesSetting?: ClientPrivilegesSetting, _options?: Configuration): Observable<ClientPrivilegesSetting>;
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to extend Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Extend Okta Support access
      */
  extendOktaSupport(_options?: Configuration): Observable<void>;
  /**
      * Retrieves the Okta Aerial consent grant details for your Org. Returns a 404 Not Found error if no consent has been granted.
      * Retrieve Okta Aerial consent for your org
      */
  getAerialConsent(_options?: Configuration): Observable<OrgAerialConsentDetails>;
  /**
      * Retrieves the org setting to automatically assign the Okta Admin Console when an admin role is assigned
      * Retrieve the Okta Admin Console assignment setting
      */
  getAutoAssignAdminAppSetting(_options?: Configuration): Observable<AutoAssignAdminAppSetting>;
  /**
      * Retrieves the org setting to assign the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) to new public client apps
      * Retrieve the default public client app role setting
      */
  getClientPrivilegesSetting(_options?: Configuration): Observable<ClientPrivilegesSetting>;
  /**
      * Retrieves Okta Communication Settings of your org
      * Retrieve the Okta communication settings
      */
  getOktaCommunicationSettings(_options?: Configuration): Observable<OrgOktaCommunicationSetting>;
  /**
      * Lists all org contact types for your Okta org
      * List all org contact types
      */
  getOrgContactTypes(_options?: Configuration): Observable<Collection<OrgContactTypeObj>>;
  /**
      * Retrieves the ID and the user resource associated with the specified contact type
      * Retrieve the contact type user
      * @param contactType
      */
  getOrgContactUser(contactType: 'BILLING' | 'TECHNICAL', _options?: Configuration): Observable<OrgContactUser>;
  /**
      * Retrieves Okta Support Settings for your org
      * Retrieve the Okta Support settings
      */
  getOrgOktaSupportSettings(_options?: Configuration): Observable<OrgOktaSupportSettingsObj>;
  /**
      * Retrieves preferences of your Okta org
      * Retrieve the org preferences
      */
  getOrgPreferences(_options?: Configuration): Observable<OrgPreferences>;
  /**
      * Retrieves the Org General Settings
      * Retrieve the Org general settings
      */
  getOrgSettings(_options?: Configuration): Observable<OrgSetting>;
  /**
      * Retrieves the third-party admin setting. See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
      * Retrieve the org third-party admin setting
      */
  getThirdPartyAdminSetting(_options?: Configuration): Observable<ThirdPartyAdminSetting>;
  /**
      * Retrieves the org metadata, which includes the org ID, configured custom domains, and authentication pipeline
      * Retrieve the Org metadata
      */
  getWellknownOrgMetadata(_options?: Configuration): Observable<WellKnownOrgMetadata>;
  /**
      * Grants an Okta Aerial account consent to manage your org. If the org is a child org, consent is taken from the parent org. Grant calls directly to the child are not allowed.
      * Grant Okta Aerial access to your org
      * @param orgAerialConsent
      */
  grantAerialConsent(orgAerialConsent?: OrgAerialConsent, _options?: Configuration): Observable<OrgAerialConsentDetails>;
  /**
      * Grants Okta Support temporary access to your org as an administrator for eight hours  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to grant Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Grant Okta Support access
      */
  grantOktaSupport(_options?: Configuration): Observable<void>;
  /**
      * Lists all Okta Support cases that the requesting principal has permission to view
      * List all Okta Support cases
      */
  listOktaSupportCases(_options?: Configuration): Observable<OktaSupportCases>;
  /**
      * Opts in all users of this org to Okta communication emails
      * Opt in to Okta user communication emails
      */
  optInUsersToOktaCommunicationEmails(_options?: Configuration): Observable<OrgOktaCommunicationSetting>;
  /**
      * Opts out all users of this org from Okta communication emails
      * Opt out of Okta user communication emails
      */
  optOutUsersFromOktaCommunicationEmails(_options?: Configuration): Observable<OrgOktaCommunicationSetting>;
  /**
      * Replaces the user associated with the specified contact type
      * Replace the contact type user
      * @param contactType
      * @param orgContactUser
      */
  replaceOrgContactUser(contactType: 'BILLING' | 'TECHNICAL', orgContactUser: OrgContactUser, _options?: Configuration): Observable<OrgContactUser>;
  /**
      * Replaces the Org General Settings for your Okta org
      * Replace the Org general settings
      * @param orgSetting
      */
  replaceOrgSettings(orgSetting: OrgSetting, _options?: Configuration): Observable<OrgSetting>;
  /**
      * Revokes access of an Okta Aerial account to your Org. The revoke operation will fail if the org has already been added to an Aerial account.
      * Revoke Okta Aerial access to your org
      * @param orgAerialConsent
      */
  revokeAerialConsent(orgAerialConsent?: OrgAerialConsent, _options?: Configuration): Observable<OrgAerialConsentRevoked>;
  /**
      * Revokes Okta Support access to your org  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to revoke Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Revoke Okta Support access
      */
  revokeOktaSupport(_options?: Configuration): Observable<void>;
  /**
      * Updates the org setting to automatically assign the Okta Admin Console when an admin role is assigned  > **Note:** This setting doesn\'t apply to the `SUPER_ADMIN` role. > When you assign the `SUPER_ADMIN` role to a user, the Admin Console is always assigned to the user regardless of the `autoAssignAdminAppSetting` setting.
      * Update the Okta Admin Console assignment setting
      * @param autoAssignAdminAppSetting
      */
  updateAutoAssignAdminAppSetting(autoAssignAdminAppSetting?: AutoAssignAdminAppSetting, _options?: Configuration): Observable<AutoAssignAdminAppSetting>;
  /**
      * Updates access to the org for an Okta Support case:  * You can enable, disable, or extend access to your org for an Okta Support case.  * You can approve Okta Support access to your org for self-assigned cases. A self-assigned case is created and assigned by the same Okta Support user.
      * Update an Okta Support case
      * @param caseNumber
      * @param oktaSupportCase
      */
  updateOktaSupportCase(caseNumber: string, oktaSupportCase?: OktaSupportCase, _options?: Configuration): Observable<OktaSupportCase>;
  /**
      * Sets the preference to hide the Okta End-User Dashboard footer for all end users of your org
      * Set the hide dashboard footer preference
      */
  updateOrgHideOktaUIFooter(_options?: Configuration): Observable<OrgPreferences>;
  /**
      * Updates partial Org General Settings
      * Update the Org general settings
      * @param orgSetting
      */
  updateOrgSettings(orgSetting?: OrgSetting, _options?: Configuration): Observable<OrgSetting>;
  /**
      * Sets the preference to show the Okta UI footer for all end users of your org
      * Set the show dashboard footer preference
      */
  updateOrgShowOktaUIFooter(_options?: Configuration): Observable<OrgPreferences>;
  /**
      * Updates the third-party admin setting. This setting allows third-party admins to perform administrative actions in the Admin Console, but they can\'t do any of the following:   * Receive Okta admin email notifications   * Contact Okta support   * Sign in to the Okta Help Center  See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
      * Update the org third-party admin setting
      * @param thirdPartyAdminSetting
      */
  updateThirdPartyAdminSetting(thirdPartyAdminSetting: ThirdPartyAdminSetting, _options?: Configuration): Observable<ThirdPartyAdminSetting>;
  /**
      * Uploads and replaces the logo for your organization
      * Upload the org logo
      * @param file The file must be in PNG, JPG, or GIF format and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
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
      * Activate a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  activatePolicy(policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Activates a policy rule identified by `policyId` and `ruleId`
      * Activate a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  activatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Clones an existing policy
      * Clone an existing policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  clonePolicy(policyId: string, _options?: Configuration): Observable<Policy>;
  /**
      * Creates a policy. There are many types of policies that you can create. See [Policies](https://developer.okta.com/docs/concepts/policies/) for an overview of the types of policies available and links to more indepth information.
      * Create a policy
      * @param policy
      * @param activate This query parameter is only valid for Classic Engine orgs.
      */
  createPolicy(policy: CreateOrUpdatePolicy, activate?: boolean, _options?: Configuration): Observable<CreateOrUpdatePolicy>;
  /**
      * Creates a policy rule  > **Note:** You can\'t create additional rules for the `PROFILE_ENROLLMENT` or `POST_AUTH_SESSION` policies.
      * Create a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policyRule
      * @param limit Defines the number of policy rules returned. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param activate Set this parameter to &#x60;false&#x60; to create an &#x60;INACTIVE&#x60; rule.
      */
  createPolicyRule(policyId: string, policyRule: PolicyRule, limit?: string, activate?: boolean, _options?: Configuration): Observable<PolicyRule>;
  /**
      * Creates a policy or policy rule simulation. The access simulation evaluates policy and policy rules based on the existing policy rule configuration. The evaluation result simulates what the real-world authentication flow is and what policy rules have been applied or matched to the authentication flow.
      * Create a policy simulation
      * @param simulatePolicy
      * @param expand Use &#x60;expand&#x3D;EVALUATED&#x60; to include a list of evaluated but not matched policies and policy rules. Use &#x60;expand&#x3D;RULE&#x60; to include details about why a rule condition wasn\&#39;t matched.
      */
  createPolicySimulation(simulatePolicy: Array<SimulatePolicyBody>, expand?: string, _options?: Configuration): Observable<SimulatePolicyResponse>;
  /**
      * Deactivates a policy
      * Deactivate a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  deactivatePolicy(policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Deactivates a policy rule identified by `policyId` and `ruleId`
      * Deactivate a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  deactivatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a policy
      * Delete a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  deletePolicy(policyId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes the resource mapping for a policy identified by `policyId` and `mappingId`
      * Delete a policy resource mapping
      * @param policyId &#x60;id&#x60; of the Policy
      * @param mappingId &#x60;id&#x60; of the policy resource Mapping
      */
  deletePolicyResourceMapping(policyId: string, mappingId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a policy rule identified by `policyId` and `ruleId`
      * Delete a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  deletePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a policy
      * Retrieve a policy
      * @param policyId &#x60;id&#x60; of the Policy
      * @param expand
      */
  getPolicy(policyId: string, expand?: string, _options?: Configuration): Observable<Policy>;
  /**
      * Retrieves a resource mapping for a policy identified by `policyId` and `mappingId`
      * Retrieve a policy resource mapping
      * @param policyId &#x60;id&#x60; of the Policy
      * @param mappingId &#x60;id&#x60; of the policy resource Mapping
      */
  getPolicyMapping(policyId: string, mappingId: string, _options?: Configuration): Observable<PolicyMapping>;
  /**
      * Retrieves a policy rule
      * Retrieve a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  getPolicyRule(policyId: string, ruleId: string, _options?: Configuration): Observable<PolicyRule>;
  /**
      * Lists all policies with the specified type
      * List all policies
      * @param type Specifies the type of policy to return. The following policy types are available only with the Okta Identity Engine - &#x60;ACCESS_POLICY&#x60;, &#x60;PROFILE_ENROLLMENT&#x60;, &#x60;POST_AUTH_SESSION&#x60;, and &#x60;ENTITY_RISK&#x60;.
      * @param status Refines the query by the &#x60;status&#x60; of the policy - &#x60;ACTIVE&#x60; or &#x60;INACTIVE&#x60;
      * @param q Refines the query by policy name prefix (startWith method) passed in as &#x60;q&#x3D;string&#x60;
      * @param expand
      * @param sortBy Refines the query by sorting on the policy &#x60;name&#x60; in ascending order
      * @param limit Defines the number of policies returned, see [Pagination](https://developer.okta.com/docs/api/#pagination)
      * @param resourceId Reference to the associated authorization server
      * @param after End page cursor for pagination, see [Pagination](https://developer.okta.com/docs/api/#pagination)
      */
  listPolicies(type: 'OKTA_SIGN_ON' | 'PASSWORD' | 'MFA_ENROLL' | 'IDP_DISCOVERY' | 'ACCESS_POLICY' | 'PROFILE_ENROLLMENT' | 'POST_AUTH_SESSION' | 'ENTITY_RISK', status?: string, q?: string, expand?: string, sortBy?: string, limit?: string, resourceId?: string, after?: string, _options?: Configuration): Observable<Collection<Policy>>;
  /**
      * Lists all applications mapped to a policy identified by `policyId`  > **Note:** Use [List all resources mapped to a Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyMappings) to list all applications mapped to a policy.
      * List all apps mapped to a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  listPolicyApps(policyId: string, _options?: Configuration): Observable<Collection<Application>>;
  /**
      * Lists all resources mapped to a policy identified by `policyId`
      * List all resources mapped to a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  listPolicyMappings(policyId: string, _options?: Configuration): Observable<Collection<PolicyMapping>>;
  /**
      * Lists all policy rules
      * List all policy rules
      * @param policyId &#x60;id&#x60; of the Policy
      * @param limit Defines the number of policy rules returned. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listPolicyRules(policyId: string, limit?: string, _options?: Configuration): Observable<Collection<PolicyRule>>;
  /**
      * Maps a resource to a policy identified by `policyId`
      * Map a resource to a policy
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policyMappingRequest
      */
  mapResourceToPolicy(policyId: string, policyMappingRequest: PolicyMappingRequest, _options?: Configuration): Observable<PolicyMapping>;
  /**
      * Replaces the properties of a policy identified by `policyId`
      * Replace a policy
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policy
      */
  replacePolicy(policyId: string, policy: CreateOrUpdatePolicy, _options?: Configuration): Observable<Policy>;
  /**
      * Replaces the properties for a policy rule identified by `policyId` and `ruleId`
      * Replace a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
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
      * Creates a new principal rate limit entity. Okta only allows one principal rate limit entity per org and principal.
      * Create a principal rate limit
      * @param entity
      */
  createPrincipalRateLimitEntity(entity: PrincipalRateLimitEntity, _options?: Configuration): Observable<PrincipalRateLimitEntity>;
  /**
      * Retrieves a principal rate limit entity by `principalRateLimitId`
      * Retrieve a principal rate limit
      * @param principalRateLimitId ID of the principal rate limit
      */
  getPrincipalRateLimitEntity(principalRateLimitId: string, _options?: Configuration): Observable<PrincipalRateLimitEntity>;
  /**
      * Lists all Principal Rate Limit entities considering the provided parameters
      * List all principal rate limits
      * @param filter Filters the list of principal rate limit entities by the provided principal type (&#x60;principalType&#x60;). For example, &#x60;filter&#x3D;principalType eq \&quot;SSWS_TOKEN\&quot;&#x60; or &#x60;filter&#x3D;principalType eq \&quot;OAUTH_CLIENT\&quot;&#x60;.
      * @param after The cursor to use for pagination. It\&#39;s an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of items to return in a single response page.
      */
  listPrincipalRateLimitEntities(filter: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<PrincipalRateLimitEntity>>;
  /**
      * Replaces a principal rate limit entity by `principalRateLimitId`
      * Replace a principal rate limit
      * @param principalRateLimitId ID of the principal rate limit
      * @param entity
      */
  replacePrincipalRateLimitEntity(principalRateLimitId: string, entity: PrincipalRateLimitEntity, _options?: Configuration): Observable<PrincipalRateLimitEntity>;
}
import { PrivilegedResourceApiRequestFactory, PrivilegedResourceApiResponseProcessor } from '../apis/PrivilegedResourceApi';
export declare class ObservablePrivilegedResourceApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: PrivilegedResourceApiRequestFactory, responseProcessor?: PrivilegedResourceApiResponseProcessor);
  /**
      * Claims a specified privileged resource for management. This also marks the `status` as `ACTIVE`.
      * Claim a privileged resource for management
      * @param id ID of an existing privileged resource
      */
  claimPrivilegedResource(id: string, _options?: Configuration): Observable<PrivilegedResource>;
  /**
      * Creates a privileged resource either in Okta or for a specified external app. After creation, the `status` param is set to `CREATED`.
      * Create a privileged resource
      * @param privilegedResource
      */
  createPrivilegedResource(privilegedResource: PrivilegedResource, _options?: Configuration): Observable<PrivilegedResource>;
  /**
      * Deletes a privileged resource specified by ID. This also marks the `status` as `INACTIVE`.
      * Delete a privileged resource
      * @param id ID of an existing privileged resource
      */
  deletePrivilegedResource(id: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a privileged resource specified by ID
      * Retrieve a privileged resource
      * @param id ID of an existing privileged resource
      */
  getPrivilegedResource(id: string, _options?: Configuration): Observable<PrivilegedResource>;
  /**
      * Retrieves privileged resources that were filtered based on the search and filtering criteria specified in the query parameters
      * Retrieve the privileged resources
      * @param containerId ID of an existing container, such as an app instance
      * @param lastUpdated Last updated timestamp query parameter
      * @param status The status of the privileged resource to filter on
      * @param limit Specifies the batch size of the results to be returned
      * @param after The cursor used for pagination. It represents the last privileged resource ID returned in the previous fetch operation.
      */
  getPrivilegedResources(containerId: string, lastUpdated?: string, status?: string, limit?: number, after?: string, _options?: Configuration): Observable<Collection<PrivilegedResourceAccountAppResponse>>;
  /**
      * Prepares the privileged resources by scanning imported app users and applying the privileged resource filtering criteria.  If the request contains the `lastUpdated` parameter, the privileged resource criteria filters out the imported app users that were last updated after the timestamp.  The value of the `lastUpdated` query parameter should be what the client received in the `ETag` header included in the last response of the previous resource fetch cycle.
      * Prepare the privileged resources
      * @param containerId ID of an existing container, such as an app instance
      * @param lastUpdated Last updated timestamp query parameter
      */
  preparePrivilegedResourcesToBeFetched(containerId: string, lastUpdated?: string, _options?: Configuration): Observable<void>;
  /**
      * Replaces or creates filters used to identify privileged resources. These filters are used during the privileged resource retrieval operation.
      * Replace the filters
      * @param containerId ID of an existing container, such as an app instance
      * @param privilegedResourceFilters
      */
  replaceFiltersForPrivilegedResourceIdentification(containerId: string, privilegedResourceFilters: PrivilegedResourceFilters, _options?: Configuration): Observable<void>;
  /**
      * Replaces a privileged resource specified by ID
      * Replace a privileged resource
      * @param id ID of an existing privileged resource
      * @param privilegedResourceUpdateRequest
      */
  replacePrivilegedResource(id: string, privilegedResourceUpdateRequest: PrivilegedResourceUpdateRequest, _options?: Configuration): Observable<PrivilegedResource>;
  /**
      * Rotates the password for a specified privileged resource
      * Rotate the password for a privileged resource
      * @param id ID of an existing privileged resource
      * @param rotatePasswordRequest
      */
  rotatePasswordForPrivilegedResource(id: string, rotatePasswordRequest: RotatePasswordRequest, _options?: Configuration): Observable<PrivilegedResource>;
}
import { ProfileMappingApiRequestFactory, ProfileMappingApiResponseProcessor } from '../apis/ProfileMappingApi';
export declare class ObservableProfileMappingApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ProfileMappingApiRequestFactory, responseProcessor?: ProfileMappingApiResponseProcessor);
  /**
      * Retrieves a single profile mapping referenced by its ID
      * Retrieve a profile mapping
      * @param mappingId &#x60;id&#x60; of the Mapping
      */
  getProfileMapping(mappingId: string, _options?: Configuration): Observable<ProfileMapping>;
  /**
      * Lists all profile mappings in your org with [pagination](https://developer.okta.com/docs/api/#pagination). You can return a subset of profile mappings that match a supported `sourceId` and/or `targetId`.  The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the Link header contains a `next` link that you should treat as an opaque value (follow it, don\'t parse it). See [Link Header](https://developer.okta.com/docs/api/#link-header).  The response is a collection of profile mappings that include a subset of the profile mapping object\'s parameters. The profile mapping object describes the properties mapping between an Okta user and an app user profile using [JSON Schema Draft 4](https://datatracker.ietf.org/doc/html/draft-zyp-json-schema-04).
      * List all profile mappings
      * @param after Mapping &#x60;id&#x60; that specifies the pagination cursor for the next page of mappings
      * @param limit Specifies the number of results per page
      * @param sourceId The user type or app instance ID that acts as the source of expressions in a mapping. If this parameter is included, all returned mappings have this as their &#x60;source.id&#x60;.
      * @param targetId The user type or app instance ID that acts as the target of expressions in a mapping. If this parameter is included, all returned mappings have this as their &#x60;target.id&#x60;.
      */
  listProfileMappings(after?: string, limit?: number, sourceId?: string, targetId?: string, _options?: Configuration): Observable<Collection<ListProfileMappings>>;
  /**
      * Updates an existing profile mapping by adding, updating, or removing one or many property mappings
      * Update a profile mapping
      * @param mappingId &#x60;id&#x60; of the Mapping
      * @param profileMapping
      */
  updateProfileMapping(mappingId: string, profileMapping: ProfileMappingRequest, _options?: Configuration): Observable<ProfileMapping>;
}
import { PushProviderApiRequestFactory, PushProviderApiResponseProcessor } from '../apis/PushProviderApi';
export declare class ObservablePushProviderApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: PushProviderApiRequestFactory, responseProcessor?: PushProviderApiResponseProcessor);
  /**
      * Creates a new push provider. Each Push Provider must have a unique `name`.
      * Create a push provider
      * @param pushProvider
      */
  createPushProvider(pushProvider: PushProvider, _options?: Configuration): Observable<PushProvider>;
  /**
      * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
      * Delete a push provider
      * @param pushProviderId Id of the push provider
      */
  deletePushProvider(pushProviderId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a push provider by `pushProviderId`
      * Retrieve a push provider
      * @param pushProviderId Id of the push provider
      */
  getPushProvider(pushProviderId: string, _options?: Configuration): Observable<PushProvider>;
  /**
      * Lists all push providers
      * List all push providers
      * @param type Filters push providers by &#x60;providerType&#x60;
      */
  listPushProviders(type?: ProviderType, _options?: Configuration): Observable<Collection<PushProvider>>;
  /**
      * Replaces a push provider by `pushProviderId`
      * Replace a push provider
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
      * Retrieve the rate limit admin notification settings
      */
  getRateLimitSettingsAdminNotifications(_options?: Configuration): Observable<RateLimitAdminNotifications>;
  /**
      * Retrieves the currently configured Per-Client Rate Limit Settings
      * Retrieve the per-client rate limit settings
      */
  getRateLimitSettingsPerClient(_options?: Configuration): Observable<PerClientRateLimitSettings>;
  /**
      * Retrieves the currently configured threshold for warning notifications when the API\'s rate limit is exceeded
      * Retrieve the rate limit warning threshold percentage
      */
  getRateLimitSettingsWarningThreshold(_options?: Configuration): Observable<RateLimitWarningThresholdResponse>;
  /**
      * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
      * Replace the rate limit admin notification settings
      * @param rateLimitAdminNotifications
      */
  replaceRateLimitSettingsAdminNotifications(rateLimitAdminNotifications: RateLimitAdminNotifications, _options?: Configuration): Observable<RateLimitAdminNotifications>;
  /**
      * Replaces the Per-Client Rate Limit Settings and returns the configured properties
      * Replace the per-client rate limit settings
      * @param perClientRateLimitSettings
      */
  replaceRateLimitSettingsPerClient(perClientRateLimitSettings: PerClientRateLimitSettings, _options?: Configuration): Observable<PerClientRateLimitSettings>;
  /**
      * Replaces the Rate Limit Warning Threshold Percentage and returns the configured property
      * Replace the rate limit warning threshold percentage
      * @param rateLimitWarningThreshold
      */
  replaceRateLimitSettingsWarningThreshold(rateLimitWarningThreshold?: RateLimitWarningThresholdRequest, _options?: Configuration): Observable<RateLimitWarningThresholdResponse>;
}
import { RealmApiRequestFactory, RealmApiResponseProcessor } from '../apis/RealmApi';
export declare class ObservableRealmApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: RealmApiRequestFactory, responseProcessor?: RealmApiResponseProcessor);
  /**
      * Creates a new realm
      * Create a realm
      * @param body
      */
  createRealm(body: CreateRealmRequest, _options?: Configuration): Observable<Realm>;
  /**
      * Deletes a realm permanently. This operation can only be performed after disassociating other entities like users and identity providers from a realm.
      * Delete a realm
      * @param realmId ID of the realm
      */
  deleteRealm(realmId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a realm
      * Retrieve a realm
      * @param realmId ID of the realm
      */
  getRealm(realmId: string, _options?: Configuration): Observable<Realm>;
  /**
      * Lists all Realms
      * List all realms
      * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;search&#x60; is provided.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param search Searches for realms with a supported filtering expression for most properties.  Searches for realms can be filtered by the contains (&#x60;co&#x60;) operator. You can only use &#x60;co&#x60; with the &#x60;profile.name&#x60; property. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @param sortBy Specifies the field to sort by and can be any single property (for search queries only)
      * @param sortOrder Specifies the sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
      */
  listRealms(limit?: number, after?: string, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Observable<Collection<Realm>>;
  /**
      * Replaces the realm profile
      * Replace the realm profile
      * @param realmId ID of the realm
      * @param body
      */
  replaceRealm(realmId: string, body: UpdateRealmRequest, _options?: Configuration): Observable<Realm>;
}
import { RealmAssignmentApiRequestFactory, RealmAssignmentApiResponseProcessor } from '../apis/RealmAssignmentApi';
export declare class ObservableRealmAssignmentApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: RealmAssignmentApiRequestFactory, responseProcessor?: RealmAssignmentApiResponseProcessor);
  /**
      * Activates a realm assignment
      * Activate a realm assignment
      * @param assignmentId ID of the realm assignment
      */
  activateRealmAssignment(assignmentId: string, _options?: Configuration): Observable<void>;
  /**
      * Creates a new realm assignment
      * Create a realm assignment
      * @param body
      */
  createRealmAssignment(body: CreateRealmAssignmentRequest, _options?: Configuration): Observable<RealmAssignment>;
  /**
      * Deactivates a realm assignment
      * Deactivate a realm assignment
      * @param assignmentId ID of the realm assignment
      */
  deactivateRealmAssignment(assignmentId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a realm assignment
      * Delete a realm assignment
      * @param assignmentId ID of the realm assignment
      */
  deleteRealmAssignment(assignmentId: string, _options?: Configuration): Observable<void>;
  /**
      * Executes a realm assignment
      * Execute a realm assignment
      * @param body
      */
  executeRealmAssignment(body: OperationRequest, _options?: Configuration): Observable<OperationResponse>;
  /**
      * Retrieves a realm assignment
      * Retrieve a realm assignment
      * @param assignmentId ID of the realm assignment
      */
  getRealmAssignment(assignmentId: string, _options?: Configuration): Observable<RealmAssignment>;
  /**
      * Lists all realm assignment operations. The upper limit is 200 and operations are sorted in descending order from most recent to oldest by ID.
      * List all realm assignment operations
      * @param limit A limit on the number of objects to return
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listRealmAssignmentOperations(limit?: number, after?: string, _options?: Configuration): Observable<Collection<OperationResponse>>;
  /**
      * Lists all realm assignments
      * List all realm assignments
      * @param limit A limit on the number of objects to return
      * @param after The cursor used for pagination. It represents the priority of the last realm assignment returned in the previous fetch operation.
      */
  listRealmAssignments(limit?: number, after?: string, _options?: Configuration): Observable<Collection<RealmAssignment>>;
  /**
      * Replaces a realm assignment
      * Replace a realm assignment
      * @param assignmentId ID of the realm assignment
      * @param body
      */
  replaceRealmAssignment(assignmentId: string, body: UpdateRealmAssignmentRequest, _options?: Configuration): Observable<RealmAssignment>;
}
import { ResourceSetApiRequestFactory, ResourceSetApiResponseProcessor } from '../apis/ResourceSetApi';
export declare class ObservableResourceSetApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ResourceSetApiRequestFactory, responseProcessor?: ResourceSetApiResponseProcessor);
  /**
      * Adds more members to a role resource set binding
      * Add more role resource set binding members
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  addMembersToBinding(resourceSetId: string, roleIdOrLabel: string, instance: ResourceSetBindingAddMembersRequest, _options?: Configuration): Observable<ResourceSetBindingEditResponse>;
  /**
      * Adds a resource with conditions for a resource set
      * Add a resource set resource with conditions
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param instance
      */
  addResourceSetResource(resourceSetId: string, instance: ResourceSetResourcePostRequest, _options?: Configuration): Observable<ResourceSetResource>;
  /**
      * Adds more resources to a resource set
      * Add more resources to a resource set
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param instance
      */
  addResourceSetResources(resourceSetId: string, instance: ResourceSetResourcePatchRequest, _options?: Configuration): Observable<ResourceSet>;
  /**
      * Creates a new resource set. See [Supported resources](/openapi/okta-management/guides/roles/#supported-resources).  > **Note:** The maximum number of `resources` allowed in a resource set object is 1000. Resources are identified by either an Okta Resource Name (ORN) or by a REST URL format. See [Okta Resource Name](/openapi/okta-management/guides/roles/#okta-resource-name-orn).
      * Create a resource set
      * @param instance
      */
  createResourceSet(instance: CreateResourceSetRequest, _options?: Configuration): Observable<ResourceSet>;
  /**
      * Creates a binding for the resource set, custom role, and members (users or groups)
      * Create a role resource set binding
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param instance
      */
  createResourceSetBinding(resourceSetId: string, instance: ResourceSetBindingCreateRequest, _options?: Configuration): Observable<ResourceSetBindingEditResponse>;
  /**
      * Deletes a binding of a role (identified by `roleIdOrLabel`) and a resource set (identified by `resourceSetIdOrLabel`)
      * Delete a role resource set binding
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteBinding(resourceSetId: string, roleIdOrLabel: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a resource set by `resourceSetIdOrLabel`
      * Delete a resource set
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      */
  deleteResourceSet(resourceSetId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a resource (identified by `resourceId`) from a resource set
      * Delete a resource set resource
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param resourceId &#x60;id&#x60; of the resource
      */
  deleteResourceSetResource(resourceSetId: string, resourceId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves the binding of a role (identified by `roleIdOrLabel`) for a resource set (identified by `resourceSetIdOrLabel`)
      * Retrieve a role resource set binding
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getBinding(resourceSetId: string, roleIdOrLabel: string, _options?: Configuration): Observable<ResourceSetBindingResponse>;
  /**
      * Retrieves a member (identified by `memberId`) that belongs to a role resource set binding
      * Retrieve a role resource set binding member
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of the member
      */
  getMemberOfBinding(resourceSetId: string, roleIdOrLabel: string, memberId: string, _options?: Configuration): Observable<ResourceSetBindingMember>;
  /**
      * Retrieves a resource set by `resourceSetIdOrLabel`
      * Retrieve a resource set
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      */
  getResourceSet(resourceSetId: string, _options?: Configuration): Observable<ResourceSet>;
  /**
      * Retrieves a resource identified by `resourceId` in a resource set
      * Retrieve a resource set resource
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param resourceId &#x60;id&#x60; of the resource
      */
  getResourceSetResource(resourceSetId: string, resourceId: string, _options?: Configuration): Observable<ResourceSetResource>;
  /**
      * Lists all bindings for a resource set with pagination support.  The returned `roles` array contains the roles for each binding associated with the specified resource set. If there are more than 100 bindings for the specified resource set, `links.next` provides the resource with pagination for the next list of bindings.
      * List all role resource set bindings
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listBindings(resourceSetId: string, after?: string, _options?: Configuration): Observable<ResourceSetBindings>;
  /**
      * Lists all members of a role resource set binding with pagination support
      * List all role resource set binding members
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listMembersOfBinding(resourceSetId: string, roleIdOrLabel: string, after?: string, _options?: Configuration): Observable<ResourceSetBindingMembers>;
  /**
      * Lists all resources for the resource set
      * List all resource set resources
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      */
  listResourceSetResources(resourceSetId: string, _options?: Configuration): Observable<ResourceSetResources>;
  /**
      * Lists all resource sets with pagination support
      * List all resource sets
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listResourceSets(after?: string, _options?: Configuration): Observable<ResourceSets>;
  /**
      * Replaces the label and description of a resource set
      * Replace a resource set
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param instance
      */
  replaceResourceSet(resourceSetId: string, instance: ResourceSet, _options?: Configuration): Observable<ResourceSet>;
  /**
      * Replaces the conditions of a resource identified by `resourceId` in a resource set
      * Replace the resource set resource conditions
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param resourceId &#x60;id&#x60; of the resource
      * @param resourceSetResourcePutRequest
      */
  replaceResourceSetResource(resourceSetId: string, resourceId: string, resourceSetResourcePutRequest: ResourceSetResourcePutRequest, _options?: Configuration): Observable<ResourceSetResource>;
  /**
      * Unassigns a member (identified by `memberId`) from a role resource set binding
      * Unassign a role resource set binding member
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of the member
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
      * Send multiple risk events
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
      * Creates a risk provider object. You can create a maximum of three risk provider objects.
      * Create a risk provider
      * @param instance
      */
  createRiskProvider(instance: RiskProvider, _options?: Configuration): Observable<RiskProvider>;
  /**
      * Deletes a risk provider object by its ID
      * Delete a risk provider
      * @param riskProviderId &#x60;id&#x60; of the risk provider object
      */
  deleteRiskProvider(riskProviderId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a risk provider object by ID
      * Retrieve a risk provider
      * @param riskProviderId &#x60;id&#x60; of the risk provider object
      */
  getRiskProvider(riskProviderId: string, _options?: Configuration): Observable<RiskProvider>;
  /**
      * Lists all risk provider objects
      * List all risk providers
      */
  listRiskProviders(_options?: Configuration): Observable<Collection<RiskProvider>>;
  /**
      * Replaces the properties for a given risk provider object ID
      * Replace a risk provider
      * @param riskProviderId &#x60;id&#x60; of the risk provider object
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
      * Creates a custom role
      * Create a custom role
      * @param instance
      */
  createRole(instance: CreateIamRoleRequest, _options?: Configuration): Observable<IamRole>;
  /**
      * Creates a permission (specified by `permissionType`) for a custom role
      * Create a custom role permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An Okta [permission](/openapi/okta-management/guides/permissions)
      * @param instance
      */
  createRolePermission(roleIdOrLabel: string, permissionType: string, instance?: CreateUpdateIamRolePermissionRequest, _options?: Configuration): Observable<void>;
  /**
      * Deletes a custom role by `roleIdOrLabel`
      * Delete a custom role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteRole(roleIdOrLabel: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a permission (identified by `permissionType`) from a custom role
      * Delete a custom role permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An Okta [permission](/openapi/okta-management/guides/permissions)
      */
  deleteRolePermission(roleIdOrLabel: string, permissionType: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a role by `roleIdOrLabel`
      * Retrieve a role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getRole(roleIdOrLabel: string, _options?: Configuration): Observable<IamRole>;
  /**
      * Retrieves a permission (identified by `permissionType`) for a custom role
      * Retrieve a custom role permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An Okta [permission](/openapi/okta-management/guides/permissions)
      */
  getRolePermission(roleIdOrLabel: string, permissionType: string, _options?: Configuration): Observable<Permission>;
  /**
      * Lists all permissions for a custom role by `roleIdOrLabel`
      * List all custom role permissions
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  listRolePermissions(roleIdOrLabel: string, _options?: Configuration): Observable<Permissions>;
  /**
      * Lists all custom roles with pagination support
      * List all custom roles
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listRoles(after?: string, _options?: Configuration): Observable<IamRoles>;
  /**
      * Replaces the label and description for a custom role by `roleIdOrLabel`
      * Replace a custom role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  replaceRole(roleIdOrLabel: string, instance: UpdateIamRoleRequest, _options?: Configuration): Observable<IamRole>;
  /**
      * Replaces a permission (specified by `permissionType`) for a custom role
      * Replace a custom role permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An Okta [permission](/openapi/okta-management/guides/permissions)
      * @param instance
      */
  replaceRolePermission(roleIdOrLabel: string, permissionType: string, instance?: CreateUpdateIamRolePermissionRequest, _options?: Configuration): Observable<Permission>;
}
import { RoleAssignmentApiRequestFactory, RoleAssignmentApiResponseProcessor } from '../apis/RoleAssignmentApi';
export declare class ObservableRoleAssignmentApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: RoleAssignmentApiRequestFactory, responseProcessor?: RoleAssignmentApiResponseProcessor);
  /**
      * Assigns a [standard role](/openapi/okta-management/guides/roles/#standard-roles) to a client app.  You can also assign a custom role to a client app, but the preferred method to assign a custom role to a client is to create a binding between the custom role, the resource set, and the client app. See [Create a role resource set binding](/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a client role
      * @param clientId Client app ID
      * @param assignRoleRequest
      */
  assignRoleToClient(clientId: string, assignRoleRequest: AssignRoleToGroupRequest, _options?: Configuration): Observable<ListGroupAssignedRoles200ResponseInner>;
  /**
      * Assigns a [standard role](/openapi/okta-management/guides/roles/#standard-roles) to a group.  You can also assign a custom role to a group, but the preferred method to assign a custom role to a group is to create a binding between the custom role, the resource set, and the group. See [Create a role resource set binding](/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a role to a group
      * @param groupId The &#x60;id&#x60; of the group
      * @param assignRoleRequest
      * @param disableNotifications Grants the group third-party admin status when set to &#x60;true&#x60;
      */
  assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleToGroupRequest, disableNotifications?: boolean, _options?: Configuration): Observable<ListGroupAssignedRoles200ResponseInner | void>;
  /**
      * Assigns a [standard role](/openapi/okta-management/guides/roles/#standard-roles) to a user.  You can also assign a custom role to a user, but the preferred method to assign a custom role to a user is to create a binding between the custom role, the resource set, and the user. See [Create a role resource set binding](/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a user role
      * @param userId ID of an existing Okta user
      * @param assignRoleRequest
      * @param disableNotifications Setting this to &#x60;true&#x60; grants the user third-party admin status
      */
  assignRoleToUser(userId: string, assignRoleRequest: AssignRoleToUserRequest, disableNotifications?: boolean, _options?: Configuration): Observable<AssignRoleToUser201Response>;
  /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a client app (identified by `clientId`)
      * Unassign a client role
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      */
  deleteRoleFromClient(clientId: string, roleAssignmentId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a role assigned to a group (identified by the `groupId`). The `roleAssignmentId` is the unique identifier for either a standard role group assignment object or a custom role resource set binding object.
      * Retrieve a group role assignment
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      */
  getGroupAssignedRole(groupId: string, roleId: string, _options?: Configuration): Observable<ListGroupAssignedRoles200ResponseInner>;
  /**
      * Retrieves a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve a user role governance source
      * @param userId ID of an existing Okta user
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param grantId Grant ID
      */
  getRoleAssignmentGovernanceGrant(userId: string, roleAssignmentId: string, grantId: string, _options?: Configuration): Observable<RoleGovernanceSource>;
  /**
      * Retrieves the resources of a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve the user role governance source resources
      * @param userId ID of an existing Okta user
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param grantId Grant ID
      */
  getRoleAssignmentGovernanceGrantResources(userId: string, roleAssignmentId: string, grantId: string, _options?: Configuration): Observable<RoleGovernanceResources>;
  /**
      * Retrieves a role assigned to a user (identified by `userId`). The `roleAssignmentId` parameter is the unique identifier for either a standard role assignment object or a custom role resource set binding object.
      * Retrieve a user role assignment
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      */
  getUserAssignedRole(userId: string, roleId: string, _options?: Configuration): Observable<ListGroupAssignedRoles200ResponseInner>;
  /**
      * Retrieves the governance sources of a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve all user role governance sources
      * @param userId ID of an existing Okta user
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      */
  getUserAssignedRoleGovernance(userId: string, roleAssignmentId: string, _options?: Configuration): Observable<RoleGovernance>;
  /**
      * Lists all roles assigned to a user (identified by `userId`)
      * List all user role assignments
      * @param userId ID of an existing Okta user
      * @param expand An optional parameter used to return targets configured for the standard role assignment in the &#x60;embedded&#x60; property. Supported values: &#x60;targets/groups&#x60; or &#x60;targets/catalog/apps&#x60;
      */
  listAssignedRolesForUser(userId: string, expand?: string, _options?: Configuration): Observable<Collection<ListGroupAssignedRoles200ResponseInner>>;
  /**
      * Lists all assigned roles of a group by `groupId`
      * List all group role assignments
      * @param groupId The &#x60;id&#x60; of the group
      * @param expand An optional parameter used to return targets configured for the standard role assignment in the &#x60;embedded&#x60; property. Supported values: &#x60;targets/groups&#x60; or &#x60;targets/catalog/apps&#x60;
      */
  listGroupAssignedRoles(groupId: string, expand?: string, _options?: Configuration): Observable<Collection<ListGroupAssignedRoles200ResponseInner>>;
  /**
      * Lists all roles assigned to a client app identified by `clientId`
      * List all client role assignments
      * @param clientId Client app ID
      */
  listRolesForClient(clientId: string, _options?: Configuration): Observable<Collection<ListGroupAssignedRoles200ResponseInner>>;
  /**
      * Lists all users with role assignments
      * List all users with role assignments
      * @param after Specifies the pagination cursor for the next page of targets
      * @param limit Specifies the number of results returned. Defaults to &#x60;100&#x60;.
      */
  listUsersWithRoleAssignments(after?: string, limit?: number, _options?: Configuration): Observable<RoleAssignedUsers>;
  /**
      * Retrieves a role assignment (identified by `roleAssignmentId`) for a client app (identified by `clientId`)
      * Retrieve a client role
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      */
  retrieveClientRole(clientId: string, roleAssignmentId: string, _options?: Configuration): Observable<ListGroupAssignedRoles200ResponseInner>;
  /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a group (identified by the `groupId`)
      * Unassign a group role
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      */
  unassignRoleFromGroup(groupId: string, roleId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a user (identified by `userId`)
      * Unassign a user role
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
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
      * Assigns all apps as target to an `APP_ADMIN` role
      * Assign all apps as target to admin role
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      */
  assignAllAppsAsTargetToRoleForUser(userId: string, roleId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
      * Assign a group role app instance target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param applicationId Application ID
      */
  assignAppInstanceTargetToAppAdminRoleForGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to an admin user. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permission to the same OIN app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
      * Assign an admin role app instance target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param applicationId Application ID
      */
  assignAppInstanceTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to a client. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage only specific configurations of the Salesforce app.
      * Assign a client role app instance target
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param appId Application ID
      */
  assignAppTargetInstanceRoleForClient(clientId: string, roleAssignmentId: string, appName: string, appId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns an OIN app target for an `APP_ADMIN` role assignment to a client. When you assign an app target from the OIN catalog, you reduce the scope of the role assignment. The role assignment applies to only app instances that are included in the specified OIN app target.  An assigned OIN app target overrides any existing app instance targets. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the administrator for all Facebook instances.
      * Assign a client role app target
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  assignAppTargetRoleToClient(clientId: string, roleAssignmentId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns an OIN app target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target. An OIN app target that\'s assigned to the role overrides any existing instance targets of the OIN app. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app with `facebook` for `appName` makes that user the administrator for all Facebook instances.
      * Assign a group role app target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  assignAppTargetToAdminRoleForGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns an OIN app target for an `APP_ADMIN` role assignment to an admin user. When you assign the first app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  Assigning an OIN app target overrides any existing app instance targets of the OIN app. For example, if a user was assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the admin for all Facebook instances.
      * Assign an admin role app target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  assignAppTargetToAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns a group target to a [`USER_ADMIN`](/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets, but applies only to the specified target.
      * Assign a client role group target
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param groupId The &#x60;id&#x60; of the group
      */
  assignGroupTargetRoleForClient(clientId: string, roleAssignmentId: string, groupId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns a group target to a [`USER_ADMIN`](/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
      * Assign a group role group target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param targetGroupId
      */
  assignGroupTargetToGroupAdminRole(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Observable<void>;
  /**
      * Assigns a group target for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
      * Assign an admin role group target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param groupId The &#x60;id&#x60; of the group
      */
  assignGroupTargetToUserRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves all role targets for an `APP_ADMIN`, `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user by user or group assignment type. If the role isn\'t scoped to specific group targets or any app targets, an empty array `[]` is returned.
      * Retrieve a role target by assignment type
      * @param userId ID of an existing Okta user
      * @param roleIdOrEncodedRoleId The &#x60;id&#x60; of the role or Base32 encoded &#x60;id&#x60; of the role name
      * @param assignmentType Specifies the assignment type of the user
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  getRoleTargetsByUserIdAndRoleId(userId: string, roleIdOrEncodedRoleId: string, assignmentType?: 'USER' | 'GROUP', after?: string, limit?: number, _options?: Configuration): Observable<Collection<RoleTarget>>;
  /**
      * Lists all OIN app targets for an `APP_ADMIN` role that\'s assigned to a client (by `clientId`).
      * List all client role app targets
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listAppTargetRoleToClient(clientId: string, roleAssignmentId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<CatalogApplication>>;
  /**
      * Lists all app targets for an `APP_ADMIN` role assignment to a group. The response includes a list of OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app doesn\'t.
      * List all group role app targets
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<CatalogApplication>>;
  /**
      * Lists all app targets for an `APP_ADMIN` role assigned to a user. The response is a list that includes OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app payload doesn\'t.
      * List all admin role app targets
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<CatalogApplication>>;
  /**
      * Lists all group targets for a [`USER_ADMIN`](/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
      * List all client role group targets
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listGroupTargetRoleForClient(clientId: string, roleAssignmentId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<Group>>;
  /**
      * Lists all group targets for a [`USER_ADMIN`](/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
      * List all group role group targets
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listGroupTargetsForGroupRole(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<Group>>;
  /**
      * Lists all group targets for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. If the role isn\'t scoped to specific group targets, an empty array `[]` is returned.
      * List all admin role group targets
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listGroupTargetsForRole(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<Group>>;
  /**
      * Unassigns an app instance target from a role assignment to a client app  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all the apps, delete the role assignment with the instance target and create another one.  See [Unassign a client role](/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role app instance target
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param appId Application ID
      */
  removeAppTargetInstanceRoleForClient(clientId: string, roleAssignmentId: string, appName: string, appId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns an OIN app target for a role assignment to a client app  > **Note:** You can\'t remove the last OIN app target from a role assignment. > If you need a role assignment that applies to all apps, delete the role assignment with the target and create another one. See [Unassign a client role](/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role app target
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  removeAppTargetRoleFromClient(clientId: string, roleAssignmentId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a Group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app.  > **Note:** You can\'t remove the last group target from a role assignment. If you need a role assignment that applies to all groups, delete the role assignment with the target and create another one. See [Unassign a client role](/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role group target
      * @param clientId Client app ID
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param groupId The &#x60;id&#x60; of the group
      */
  removeGroupTargetRoleFromClient(clientId: string, roleAssignmentId: string, groupId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns an app instance target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last app instance target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment and recreate a new one.
      * Unassign an admin role app instance target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param applicationId Application ID
      */
  unassignAppInstanceTargetFromAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns an app instance target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
      * Unassign a group role app instance target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param applicationId Application ID
      */
  unassignAppInstanceTargetToAppAdminRoleForGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns an OIN app target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last OIN app target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment to the user and recreate a new one.
      * Unassign an admin role app target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  unassignAppTargetFromAppAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns an OIN app target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
      * Unassign a group role app target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  unassignAppTargetToAdminRoleForGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a group target from a [`USER_ADMIN`](/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group.
      * Unassign a group role group target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param targetGroupId
      */
  unassignGroupTargetFromGroupAdminRole(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Observable<void>;
  /**
      * Unassigns a group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last group target from a role assignment since this causes an exception. > If you need a role assignment that applies to all groups, delete the role assignment to the user and recreate a new one.
      * Unassign an admin role group target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param groupId The &#x60;id&#x60; of the group
      */
  unassignGroupTargetFromUserAdminRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Observable<void>;
}
import { SSFReceiverApiRequestFactory, SSFReceiverApiResponseProcessor } from '../apis/SSFReceiverApi';
export declare class ObservableSSFReceiverApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SSFReceiverApiRequestFactory, responseProcessor?: SSFReceiverApiResponseProcessor);
  /**
      * Activates a Security Events Provider instance by setting its status to `ACTIVE`. This operation resumes the flow of events from the Security Events Provider to Okta.
      * Activate a security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      */
  activateSecurityEventsProviderInstance(securityEventProviderId: string, _options?: Configuration): Observable<SecurityEventsProviderResponse>;
  /**
      * Creates a Security Events Provider instance
      * Create a security events provider
      * @param instance
      */
  createSecurityEventsProviderInstance(instance: SecurityEventsProviderRequest, _options?: Configuration): Observable<SecurityEventsProviderResponse>;
  /**
      * Deactivates a Security Events Provider instance by setting its status to `INACTIVE`. This operation stops the flow of events from the Security Events Provider to Okta.
      * Deactivate a security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      */
  deactivateSecurityEventsProviderInstance(securityEventProviderId: string, _options?: Configuration): Observable<SecurityEventsProviderResponse>;
  /**
      * Deletes a Security Events Provider instance specified by `id`
      * Delete a security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      */
  deleteSecurityEventsProviderInstance(securityEventProviderId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves the Security Events Provider instance specified by `id`
      * Retrieve the security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      */
  getSecurityEventsProviderInstance(securityEventProviderId: string, _options?: Configuration): Observable<SecurityEventsProviderResponse>;
  /**
      * Lists all Security Events Provider instances
      * List all security events providers
      */
  listSecurityEventsProviderInstances(_options?: Configuration): Observable<Collection<SecurityEventsProviderResponse>>;
  /**
      * Replaces a Security Events Provider instance specified by `id`
      * Replace a security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      * @param instance
      */
  replaceSecurityEventsProviderInstance(securityEventProviderId: string, instance: SecurityEventsProviderRequest, _options?: Configuration): Observable<SecurityEventsProviderResponse>;
}
import { SSFSecurityEventTokenApiRequestFactory, SSFSecurityEventTokenApiResponseProcessor } from '../apis/SSFSecurityEventTokenApi';
export declare class ObservableSSFSecurityEventTokenApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SSFSecurityEventTokenApiRequestFactory, responseProcessor?: SSFSecurityEventTokenApiResponseProcessor);
  /**
      * Publishes a Security Event Token (SET) sent by a Security Events Provider. After the token is verified, Okta ingests the event and performs any appropriate action.
      * Publish a security event token
      * @param securityEventToken The request body is a signed [SET](https://datatracker.ietf.org/doc/html/rfc8417), which is a type of JSON Web Token (JWT).  For SET JWT header and body descriptions, see [SET JWT header](/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtHeader) and [SET JWT body payload](/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtBody).
      */
  publishSecurityEventTokens(securityEventToken: string, _options?: Configuration): Observable<void>;
}
import { SSFTransmitterApiRequestFactory, SSFTransmitterApiResponseProcessor } from '../apis/SSFTransmitterApi';
export declare class ObservableSSFTransmitterApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SSFTransmitterApiRequestFactory, responseProcessor?: SSFTransmitterApiResponseProcessor);
  /**
      * Creates an SSF Stream for an event receiver to start receiving security events in the form of Security Event Tokens (SETs) from Okta.  An SSF Stream is associated with the Client ID of the OAuth 2.0 access token used to create the stream. The Client ID is provided by Okta for an [OAuth 2.0 app integration](https://help.okta.com/okta_help.htm?id=ext_Apps_App_Integration_Wizard-oidc). One SSF Stream is allowed for each Client ID, hence, one SSF Stream is allowed for each app integration in Okta.  A maximum of 10 SSF Stream configurations can be created for one org.
      * Create an SSF stream
      * @param instance
      */
  createSsfStream(instance: StreamConfigurationCreateRequest, _options?: Configuration): Observable<StreamConfiguration>;
  /**
      * Deletes the specified SSF Stream.  If the `stream_id` is not provided in the query string, the associated stream with the Client ID (through the request OAuth 2.0 access token) is deleted. Otherwise, the SSF Stream with the `stream_id` is deleted, if found.
      * Delete an SSF stream
      * @param streamId The ID of the specified SSF Stream configuration
      */
  deleteSsfStream(streamId?: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves the status of an SSF Stream. The status indicates whether the transmitter is able to transmit events over the stream.
      * Retrieve the SSF Stream status
      * @param streamId The ID of the specified SSF Stream configuration
      */
  getSsfStreamStatus(streamId: string, _options?: Configuration): Observable<StreamStatus>;
  /**
      * Retrieves either a list of all known SSF Stream configurations or the individual configuration if specified by ID.  As Stream configurations are tied to a Client ID, only the Stream associated with the Client ID of the request OAuth 2.0 access token can be viewed.
      * Retrieve the SSF stream configuration(s)
      * @param streamId The ID of the specified SSF Stream configuration
      */
  getSsfStreams(streamId?: string, _options?: Configuration): Observable<GetSsfStreams200Response>;
  /**
      * Retrieves SSF Transmitter configuration metadata. This includes all supported endpoints and key information about certain properties of the Okta org as the transmitter, such as `delivery_methods_supported`, `issuer`, and `jwks_uri`.
      * Retrieve the SSF transmitter metadata
      */
  getWellknownSsfMetadata(_options?: Configuration): Observable<WellKnownSSFMetadata>;
  /**
      * Replaces all properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is replaced.
      * Replace an SSF stream
      * @param instance
      */
  replaceSsfStream(instance: StreamConfiguration, _options?: Configuration): Observable<StreamConfiguration>;
  /**
      * Updates properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is updated.
      * Update an SSF stream
      * @param instance
      */
  updateSsfStream(instance: StreamConfiguration, _options?: Configuration): Observable<StreamConfiguration>;
  /**
      * Verifies an SSF Stream by publishing a Verification Event requested by a Security Events Provider.  > **Note:** A successful response doesn\'t indicate that the Verification Event     was transmitted successfully, only that Okta has transmitted the event or will     at some point in the future. The SSF Receiver is responsible for validating and acknowledging     successful transmission of the request by responding with HTTP Response Status Code 202.
      * Verify an SSF stream
      * @param instance
      */
  verifySsfStream(instance: StreamVerificationRequest, _options?: Configuration): Observable<void>;
}
import { SchemaApiRequestFactory, SchemaApiResponseProcessor } from '../apis/SchemaApi';
export declare class ObservableSchemaApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SchemaApiRequestFactory, responseProcessor?: SchemaApiResponseProcessor);
  /**
      * Retrieves the default schema for an app user.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
      * Retrieve the default app user schema for an app
      * @param appInstanceId Application ID
      */
  getApplicationUserSchema(appInstanceId: string, _options?: Configuration): Observable<UserSchema>;
  /**
      * Retrieves the group schema  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
      * Retrieve the default group schema
      */
  getGroupSchema(_options?: Configuration): Observable<GroupSchema>;
  /**
      * Retrieves the schema for a log stream type. The `logStreamType` element in the URL specifies the log stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
      * Retrieve the log stream schema for the schema type
      * @param logStreamType
      */
  getLogStreamSchema(logStreamType: LogStreamType, _options?: Configuration): Observable<LogStreamSchema>;
  /**
      * Retrieves the schema for a user type
      * Retrieve a user schema
      * @param schemaId Schema ID. You can also use &#x60;default&#x60; to refer to the default user type schema.
      */
  getUserSchema(schemaId: string, _options?: Configuration): Observable<UserSchema>;
  /**
      * Lists the schema for all log stream types visible for this org
      * List the log stream schemas
      */
  listLogStreamSchemas(_options?: Configuration): Observable<Collection<LogStreamSchema>>;
  /**
      * Updates the app user schema. This updates, adds, or removes one or more custom profile properties or the nullability of a base property in the app user schema for an app. Changing a base property\'s nullability (for example, the value of its `required` field) is allowed only if it is nullable in the default predefined schema for the app.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
      * Update the app user profile schema for an app
      * @param appInstanceId Application ID
      * @param body
      */
  updateApplicationUserProfile(appInstanceId: string, body?: UserSchema, _options?: Configuration): Observable<UserSchema>;
  /**
      * Updates the group profile schema. This updates, adds, or removes one or more custom profile properties in a group schema. Currently Okta does not support changing base group profile properties.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
      * Update the group profile schema
      * @param groupSchema
      */
  updateGroupSchema(groupSchema?: GroupSchema, _options?: Configuration): Observable<GroupSchema>;
  /**
      * Updates a user schema. Use this request to update, add, or remove one or more profile properties in a user schema. If you specify `default` for the `schemaId`, updates will apply to the default user type.  Unlike custom user profile properties, limited changes are allowed to base user profile properties (permissions, nullability of the `firstName` and `lastName` properties, or pattern for `login`). You can\'t remove a property from the default schema if it\'s being referenced as a [`matchAttribute`](/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/createIdentityProvider!path=policy/subject/matchAttribute&t=request) in `SAML2` IdPs. Currently, all validation of SAML assertions are only performed against the default user type.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.
      * Update a user schema
      * @param schemaId Schema ID. You can also use &#x60;default&#x60; to refer to the default user type schema.
      * @param userSchema
      */
  updateUserProfile(schemaId: string, userSchema: UserSchema, _options?: Configuration): Observable<UserSchema>;
}
import { ServiceAccountApiRequestFactory, ServiceAccountApiResponseProcessor } from '../apis/ServiceAccountApi';
export declare class ObservableServiceAccountApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: ServiceAccountApiRequestFactory, responseProcessor?: ServiceAccountApiResponseProcessor);
  /**
      * Creates a new app service account for managing an app account
      * Create an app service account
      * @param body
      */
  createAppServiceAccount(body: AppServiceAccount, _options?: Configuration): Observable<AppServiceAccount>;
  /**
      * Creates a new service account for managing an Okta User or SaaS app account
      * Create a service account
      * @param body
      */
  createServiceAccount(body: ServiceAccount, _options?: Configuration): Observable<ServiceAccount>;
  /**
      * Deletes an app service account specified by ID
      * Delete an app service account
      * @param id ID of an existing service account
      */
  deleteAppServiceAccount(id: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a service account specified by ID
      * Delete a service account
      * @param id ID of an existing service account
      */
  deleteServiceAccount(id: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves an app service account specified by ID
      * Retrieve an app service account
      * @param id ID of an existing service account
      */
  getAppServiceAccount(id: string, _options?: Configuration): Observable<AppServiceAccount>;
  /**
      * Retrieves a service account specified by ID
      * Retrieve a service account
      * @param id ID of an existing service account
      */
  getServiceAccount(id: string, _options?: Configuration): Observable<ServiceAccount>;
  /**
      * Lists all app service accounts
      * List all app service accounts
      * @param limit A limit on the number of objects to return
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param match Searches for app service accounts where the account name (&#x60;name&#x60;), username (&#x60;username&#x60;), app instance label (&#x60;containerInstanceName&#x60;), or OIN app key name (&#x60;containerGlobalName&#x60;) contains the given value
      */
  listAppServiceAccounts(limit?: number, after?: string, match?: string, _options?: Configuration): Observable<Collection<AppServiceAccount>>;
  /**
      * Lists all service accounts
      * List all service accounts
      * @param limit Specifies the number of results returned
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param q Searches for service accounts where the account name, username, app instance name, or global app name contains the given value
      */
  listServiceAccounts(limit?: number, after?: string, q?: string, _options?: Configuration): Observable<Collection<ServiceAccount>>;
  /**
      * Updates an existing app service account specified by ID
      * Update an existing app service account
      * @param id ID of an existing service account
      * @param body
      */
  updateAppServiceAccount(id: string, body?: AppServiceAccountForUpdate, _options?: Configuration): Observable<AppServiceAccount>;
  /**
      * Updates a service account specified by ID
      * Update a service account
      * @param id ID of an existing service account
      * @param body
      */
  updateServiceAccount(id: string, body?: ServiceAccountForUpdate, _options?: Configuration): Observable<ServiceAccount>;
}
import { SessionApiRequestFactory, SessionApiResponseProcessor } from '../apis/SessionApi';
export declare class ObservableSessionApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SessionApiRequestFactory, responseProcessor?: SessionApiResponseProcessor);
  /**
      * Closes the Session for the user who is currently signed in. Use this method in a browser-based application to sign out a user.  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Close the current session
      * @param cookie
      */
  closeCurrentSession(cookie?: string, _options?: Configuration): Observable<void>;
  /**
      * Creates a new Session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
      * Create a session with session token
      * @param createSessionRequest
      */
  createSession(createSessionRequest: CreateSessionRequest, _options?: Configuration): Observable<Session>;
  /**
      * Retrieves Session information for the current user. Use this method in a browser-based application to determine if the user is signed in.   > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Retrieve the current session
      * @param cookie
      */
  getCurrentSession(cookie?: string, _options?: Configuration): Observable<Session>;
  /**
      * Retrieves information about the Session specified by the given session ID
      * Retrieve a session
      * @param sessionId &#x60;id&#x60; of the Session
      */
  getSession(sessionId: string, _options?: Configuration): Observable<Session>;
  /**
      * Refreshes the Session for the current user  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Refresh the current session
      * @param cookie
      */
  refreshCurrentSession(cookie?: string, _options?: Configuration): Observable<Session>;
  /**
      * Refreshes an existing Session using the `id` for that Session. A successful response contains the refreshed Session with an updated `expiresAt` timestamp.
      * Refresh a session
      * @param sessionId &#x60;id&#x60; of the Session
      */
  refreshSession(sessionId: string, _options?: Configuration): Observable<Session>;
  /**
      * Revokes the specified Session
      * Revoke a session
      * @param sessionId &#x60;id&#x60; of the Session
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
      * Lists all subscriptions available to a specified Role
      * List all subscriptions for a role
      * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](/openapi/okta-management/guides/roles/#standard-roles).
      */
  listRoleSubscriptions(roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter, _options?: Configuration): Observable<Collection<Subscription>>;
  /**
      * Retrieves a subscription by `notificationType` for a specified Role
      * Retrieve a subscription for a role
      * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](/openapi/okta-management/guides/roles/#standard-roles).
      * @param notificationType
      */
  listRoleSubscriptionsByNotificationType(roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter, notificationType: NotificationType, _options?: Configuration): Observable<Subscription>;
  /**
      * Lists all subscriptions available to a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
      * List all subscriptions for a user
      * @param userId ID of an existing Okta user
      */
  listUserSubscriptions(userId: string, _options?: Configuration): Observable<Collection<Subscription>>;
  /**
      * Retrieves a subscription by `notificationType` for a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
      * Retrieve a subscription for a user
      * @param notificationType
      * @param userId ID of an existing Okta user
      */
  listUserSubscriptionsByNotificationType(notificationType: NotificationType, userId: string, _options?: Configuration): Observable<Subscription>;
  /**
      * Subscribes a Role to a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
      * Subscribe a role to a specific notification type
      * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](/openapi/okta-management/guides/roles/#standard-roles).
      * @param notificationType
      */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter, notificationType: NotificationType, _options?: Configuration): Observable<void>;
  /**
      * Subscribes the current user to a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
      * Subscribe a user to a specific notification type
      * @param notificationType
      * @param userId ID of an existing Okta user
      */
  subscribeUserSubscriptionByNotificationType(notificationType: NotificationType, userId: string, _options?: Configuration): Observable<void>;
  /**
      * Unsubscribes a Role from a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
      * Unsubscribe a role from a specific notification type
      * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](/openapi/okta-management/guides/roles/#standard-roles).
      * @param notificationType
      */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter, notificationType: NotificationType, _options?: Configuration): Observable<void>;
  /**
      * Unsubscribes the current user from a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
      * Unsubscribe a user from a specific notification type
      * @param notificationType
      * @param userId ID of an existing Okta user
      */
  unsubscribeUserSubscriptionByNotificationType(notificationType: NotificationType, userId: string, _options?: Configuration): Observable<void>;
}
import { SystemLogApiRequestFactory, SystemLogApiResponseProcessor } from '../apis/SystemLogApi';
export declare class ObservableSystemLogApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: SystemLogApiRequestFactory, responseProcessor?: SystemLogApiResponseProcessor);
  /**
      * Lists all System Log events  See [System Log query](https://developer.okta.com/docs/reference/system-log-query/) for further details and examples, and [System Log filters and search](https://help.okta.com/okta_help.htm?type=oie&id=csh-syslog-filters) for common use cases.  By default, 100 System Log events are returned. If there are more events, see the [header link](https://developer.okta.com/docs/api/#link-header) for the `next` link, or increase the number of returned objects using the `limit` parameter.  >**Note:** The value of the `clientSecret` property in the System Log is secured by a hashing function, and isn\'t the value used during authentication.
      * List all System Log events
      * @param since Filters the lower time bound of the log events &#x60;published&#x60; property for bounded queries or persistence time for polling queries
      * @param until Filters the upper time bound of the log events &#x60;published&#x60; property for bounded queries or persistence time for polling queries.
      * @param after Retrieves the next page of results. Okta returns a link in the HTTP Header (&#x60;rel&#x3D;next&#x60;) that includes the after query parameter
      * @param filter Filter expression that filters the results. All operators except [ ] are supported. See [Filter](https://developer.okta.com/docs/api/#filter) and [Operators](https://developer.okta.com/docs/api/#operators).
      * @param q Filters log events results by one or more case insensitive keywords.
      * @param limit Sets the number of results that are returned in the response
      * @param sortOrder The order of the returned events that are sorted by the &#x60;published&#x60; property
      */
  listLogEvents(since?: string, until?: string, after?: string, filter?: string, q?: string, limit?: number, sortOrder?: 'ASCENDING' | 'DESCENDING', _options?: Configuration): Observable<Collection<LogEvent>>;
}
import { TemplateApiRequestFactory, TemplateApiResponseProcessor } from '../apis/TemplateApi';
export declare class ObservableTemplateApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: TemplateApiRequestFactory, responseProcessor?: TemplateApiResponseProcessor);
  /**
      * Creates a new custom SMS template
      * Create an SMS template
      * @param smsTemplate
      */
  createSmsTemplate(smsTemplate: SmsTemplate, _options?: Configuration): Observable<SmsTemplate>;
  /**
      * Deletes an SMS template
      * Delete an SMS template
      * @param templateId &#x60;id&#x60; of the Template
      */
  deleteSmsTemplate(templateId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a specific template by `id`
      * Retrieve an SMS template
      * @param templateId &#x60;id&#x60; of the Template
      */
  getSmsTemplate(templateId: string, _options?: Configuration): Observable<SmsTemplate>;
  /**
      * Lists all custom SMS templates. A subset of templates can be returned that match a template type.
      * List all SMS templates
      * @param templateType
      */
  listSmsTemplates(templateType?: SmsTemplateType, _options?: Configuration): Observable<Collection<SmsTemplate>>;
  /**
      * Replaces the SMS Template > **Notes:** You can\'t update the default SMS Template.
      * Replace an SMS template
      * @param templateId &#x60;id&#x60; of the Template
      * @param smsTemplate
      */
  replaceSmsTemplate(templateId: string, smsTemplate: SmsTemplate, _options?: Configuration): Observable<SmsTemplate>;
  /**
      * Updates only some of the SMS Template properties:   * All properties within the custom SMS Template that have values are updated.   * Any translation that doesn\'t exist is added.   * Any translation with a null or empty value is removed.   * Any translation with non-empty/null value is updated.
      * Update an SMS template
      * @param templateId &#x60;id&#x60; of the Template
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
      * Retrieves the ThreatInsight configuration for the org
      * Retrieve the ThreatInsight configuration
      */
  getCurrentConfiguration(_options?: Configuration): Observable<ThreatInsightConfiguration>;
  /**
      * Updates the ThreatInsight configuration for the org
      * Update the ThreatInsight configuration
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
      * Activates a trusted origin. Sets the `status` to `ACTIVE`.
      * Activate a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      */
  activateTrustedOrigin(trustedOriginId: string, _options?: Configuration): Observable<TrustedOrigin>;
  /**
      * Creates a trusted origin
      * Create a trusted origin
      * @param trustedOrigin
      */
  createTrustedOrigin(trustedOrigin: TrustedOriginWrite, _options?: Configuration): Observable<TrustedOrigin>;
  /**
      * Deactivates a trusted origin. Sets the `status` to `INACTIVE`.
      * Deactivate a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      */
  deactivateTrustedOrigin(trustedOriginId: string, _options?: Configuration): Observable<TrustedOrigin>;
  /**
      * Deletes a trusted origin
      * Delete a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      */
  deleteTrustedOrigin(trustedOriginId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a trusted origin
      * Retrieve a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      */
  getTrustedOrigin(trustedOriginId: string, _options?: Configuration): Observable<TrustedOrigin>;
  /**
      * Lists all trusted origins
      * List all trusted origins
      * @param q A search string that prefix matches against the &#x60;name&#x60; and &#x60;origin&#x60;
      * @param filter [Filter](https://developer.okta.com/docs/api/#filter) trusted origins with a supported expression for a subset of properties. You can filter on the following properties: &#x60;name&#x60;, &#x60;origin&#x60;, &#x60;status&#x60;, and &#x60;type&#x60; (type of scopes).
      * @param after After cursor provided by a prior request
      * @param limit Specifies the number of results
      */
  listTrustedOrigins(q?: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<TrustedOrigin>>;
  /**
      * Replaces a trusted origin
      * Replace a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      * @param trustedOrigin
      */
  replaceTrustedOrigin(trustedOriginId: string, trustedOrigin: TrustedOrigin, _options?: Configuration): Observable<TrustedOrigin>;
}
import { UISchemaApiRequestFactory, UISchemaApiResponseProcessor } from '../apis/UISchemaApi';
export declare class ObservableUISchemaApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: UISchemaApiRequestFactory, responseProcessor?: UISchemaApiResponseProcessor);
  /**
      * Creates an input for an enrollment form
      * Create a UI schema
      * @param uischemabody
      */
  createUISchema(uischemabody: CreateUISchema, _options?: Configuration): Observable<UISchemasResponseObject>;
  /**
      * Deletes a UI Schema by `id`
      * Delete a UI schema
      * @param id The unique ID of the UI Schema
      */
  deleteUISchemas(id: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves the UI schema for an application given `appName`, `section` and `operation`
      * Retrieve the UI schema for a section
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param section
      * @param operation
      */
  getAppUISchema(appName: string, section: string, operation: string, _options?: Configuration): Observable<ApplicationLayout>;
  /**
      * Retrieves the links for UI schemas for an application given `appName`
      * Retrieve the links for UI schemas for an application
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  getAppUISchemaLinks(appName: string, _options?: Configuration): Observable<ApplicationLayouts>;
  /**
      * Retrieves a UI Schema by `id`
      * Retrieve a UI schema
      * @param id The unique ID of the UI Schema
      */
  getUISchema(id: string, _options?: Configuration): Observable<UISchemasResponseObject>;
  /**
      * Lists all UI Schemas in your org
      * List all UI schemas
      */
  listUISchemas(_options?: Configuration): Observable<Collection<UISchemasResponseObject>>;
  /**
      * Replaces a UI Schema by `id`
      * Replace a UI schema
      * @param id The unique ID of the UI Schema
      * @param updateUISchemaBody
      */
  replaceUISchemas(id: string, updateUISchemaBody: UpdateUISchema, _options?: Configuration): Observable<UISchemasResponseObject>;
}
import { UserApiRequestFactory, UserApiResponseProcessor } from '../apis/UserApi';
export declare class ObservableUserApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor);
  /**
      * Activates a user.  Perform this operation only on users with a `STAGED` or `DEPROVISIONED` status. Activation of a user is an asynchronous operation. * The user has the `transitioningToStatus` property with an `ACTIVE` value during activation. This indicates that the user hasn\'t completed the asynchronous operation. * The user has an `ACTIVE` status when the activation process completes.  Users who don\'t have a password must complete the welcome flow by visiting the activation link to complete the transition to `ACTIVE` status.  > **Note:** If you want to send a branded user activation email, change the subdomain of your request to the custom domain that\'s associated with the brand. > For example, change `subdomain.okta.com` to `custom.domain.one`. See [Multibrand and custom domains](https://developer.okta.com/docs/concepts/brands/#multibrand-and-custom-domains).  > **Note:** If you have optional password enabled, visiting the activation link is optional for users who aren\'t required to enroll a password. > See [Create user with optional password](/openapi/okta-management/management/tag/User/#create-user-with-optional-password).  > **Legal disclaimer** > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Activate a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail Sends an activation email to the user if &#x60;true&#x60;
      */
  activateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Observable<UserActivationToken>;
  /**
      * Updates a user\'s password by validating the user\'s current password.  This operation provides an option to delete all the sessions of the specified user. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared.  You can only perform this operation on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).  The user transitions to `ACTIVE` status when successfully invoked in `RECOVERY` status.  > **Note:** The Okta account management policy doesn\'t support the `/users/{userId}/credentials/change_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
      * Update password
      * @param userId ID of an existing Okta user
      * @param changePasswordRequest
      * @param strict If true, validates against the password minimum age policy
      */
  changePassword(userId: string, changePasswordRequest: ChangePasswordRequest, strict?: boolean, _options?: Configuration): Observable<UserCredentials>;
  /**
      * Updates a user\'s recovery question and answer credential by validating the user\'s current password. You can only perform this operation on users in `STAGED`, `ACTIVE`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).
      * Update recovery question
      * @param userId ID of an existing Okta user
      * @param userCredentials
      */
  changeRecoveryQuestion(userId: string, userCredentials: UserCredentials, _options?: Configuration): Observable<UserCredentials>;
  /**
      * Creates a new user in your Okta org with or without credentials.<br> > **Legal Disclaimer** > > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.  All responses return the created user. Activation of a user is an asynchronous operation. The system performs group reconciliation during activation and assigns the user to all apps via direct or indirect relationships (group memberships). * The user\'s `transitioningToStatus` property is `ACTIVE` during activation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s `status` is `ACTIVE` when the activation process is complete.  The user is emailed a one-time activation token if activated without a password.  > **Note:** If the user is assigned to an app that is configured for provisioning, the activation process triggers downstream provisioning to the app.  It is possible for a user to sign in before these apps have been successfully provisioned for the user.  > **Important:** Do not generate or send a one-time activation token when activating users with an assigned password. Users should sign in with their assigned password.  For more information about the various scenarios of creating a user listed in the examples, see the [User creation scenarios](/openapi/okta-management/management/tag/User/#user-creation-scenarios) section.
      * Create a user
      * @param body
      * @param activate Executes an [activation lifecycle](/openapi/okta-management/management/tag/UserLifecycle/#tag/UserLifecycle/operation/activateUser) operation when creating the user
      * @param provider Indicates whether to create a user with a specified authentication provider
      * @param nextLogin With &#x60;activate&#x3D;true&#x60;, if &#x60;nextLogin&#x3D;changePassword&#x60;, a user is created, activated, and the password is set to &#x60;EXPIRED&#x60;. The user must change it the next time they sign in.
      */
  createUser(body: CreateUserRequest, activate?: boolean, provider?: boolean, nextLogin?: UserNextLogin, _options?: Configuration): Observable<User>;
  /**
      * Deactivates a user.  Perform this operation only on users that do not have a `DEPROVISIONED` status. * The user\'s `transitioningToStatus` property is `DEPROVISIONED` during deactivation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s status is `DEPROVISIONED` when the deactivation process is complete.  > **Important:** Deactivating a user is a **destructive** operation. The user is deprovisioned from all assigned apps, which might destroy their data such as email or files. **This action cannot be recovered!**  You can also perform user deactivation asynchronously. To invoke asynchronous user deactivation, pass an HTTP header `Prefer: respond-async` with the request.
      * Deactivate a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail Sends a deactivation email to the admin if &#x60;true&#x60;
      * @param prefer Request asynchronous processing
      */
  deactivateUser(userId: string, sendEmail?: boolean, prefer?: 'respond-async', _options?: Configuration): Observable<void>;
  /**
      * Deletes any existing relationship between the `associated` and `primary` user. For the `associated` user, this is specified by the ID. The `primary` name specifies the relationship.  The operation is successful if the relationship is deleted. The operation is also successful if the specified user isn\'t in the `associated` relationship for any instance of the specified `primary` and thus, no relationship is found.
      * Delete a linked object value
      * @param userId If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
      * @param relationshipName Name of the &#x60;primary&#x60; or &#x60;associated&#x60; relationship being queried
      */
  deleteLinkedObjectForUser(userId: string, relationshipName: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  > **Warning:** This action can\'t be recovered!  This operation on a user that hasn\'t been deactivated causes that user to be deactivated. A second delete operation is required to delete the user.  > **Note:** You can also perform user deletion asynchronously. To invoke asynchronous user deletion, pass an HTTP header `Prefer: respond-async` with the request.  This header is also supported by user deactivation, which is performed if the delete endpoint is invoked on a user that hasn\'t been deactivated.
      * Delete a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail Sends a deactivation email to the admin if &#x60;true&#x60;
      * @param prefer
      */
  deleteUser(userId: string, sendEmail?: boolean, prefer?: 'respond-async', _options?: Configuration): Observable<void>;
  /**
      * Ends Okta sessions for the currently signed in user. By default, the current session remains active. Use this method in a browser-based app. > **Note:** This operation requires a session cookie for the user. The API token isn\'t allowed for this operation.
      * End a current user session
      * @param keepCurrent
      */
  endUserSessions(keepCurrent?: KeepCurrent, _options?: Configuration): Observable<void>;
  /**
      * Expires the password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.  > **Note:** The Okta account management policy doesn\'t support the `/users/{id}/lifecycle/expire_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
      * Expire the password
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  expirePassword(userId: string, _options?: Configuration): Observable<User>;
  /**
      * Expires the password and resets the user\'s password to a temporary password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. The user\'s password is reset to a temporary password that\'s returned, and then the user\'s password is expired. If `revokeSessions` is included in the request with a value of `true`, the user\'s current outstanding sessions are revoked and require re-authentication. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.
      * Expire the password with a temporary password
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param revokeSessions Revokes the user\&#39;s existing sessions if &#x60;true&#x60;
      */
  expirePasswordAndGetTemporaryPassword(userId: string, revokeSessions?: boolean, _options?: Configuration): Observable<User>;
  /**
      * Starts the forgot password flow.  Generates a one-time token (OTT) that you can use to reset a user\'s password.  The user must validate their security question\'s answer when visiting the reset link. Perform this operation only on users with an `ACTIVE` status and a valid [recovery question credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/recovery_question&t=request).  > **Note:** If you have migrated to Identity Engine, you can allow users to recover passwords with any enrolled MFA authenticator. See [Self-service account recovery](https://help.okta.com/oie/en-us/content/topics/identity-engine/authenticators/configure-sspr.htm?cshid=ext-config-sspr).  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.  If `sendEmail` is `false`, returns a link for the user to reset their password. This operation doesn\'t affect the status of the user.
      * Start forgot password flow
      * @param userId ID of an existing Okta user
      * @param sendEmail Sends a forgot password email to the user if &#x60;true&#x60;
      */
  forgotPassword(userId: string, sendEmail?: boolean, _options?: Configuration): Observable<ForgotPasswordResponse>;
  /**
      * Resets the user\'s password to the specified password if the provided answer to the recovery question is correct. You must include the recovery question answer with the submission.
      * Reset password with recovery question
      * @param userId ID of an existing Okta user
      * @param userCredentials
      * @param sendEmail
      */
  forgotPasswordSetNewPassword(userId: string, userCredentials: UserCredentials, sendEmail?: boolean, _options?: Configuration): Observable<UserCredentials>;
  /**
      * Resets a password. Generates a one-time token (OTT) that you can use to reset a user\'s password. You can automatically email the OTT link to the user or return the OTT to the API caller and distribute using a custom flow.  This operation transitions the user to the `RECOVERY` status. The user is then not able to sign in or initiate a forgot password flow until they complete the reset flow.  This operation provides an option to delete all the user\'s sessions. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared. > **Note:** You can also use this API to convert a user with the Okta credential provider to use a federated provider. After this conversion, the user can\'t directly sign in with a password. > To convert a federated user back to an Okta user, use the default API call.  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.   If `sendEmail` is `false`, returns a link for the user to reset their password.
      * Reset a password
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail
      * @param revokeSessions Revokes all user sessions, except for the current session, if set to &#x60;true&#x60;
      */
  generateResetPasswordToken(userId: string, sendEmail: boolean, revokeSessions?: boolean, _options?: Configuration): Observable<ResetPasswordToken>;
  /**
      * Retrieves a linked identity provider (IdP) user by ID
      * Retrieve a user for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  getIdentityProviderApplicationUser(idpId: string, userId: string, _options?: Configuration): Observable<IdentityProviderApplicationUser>;
  /**
      * Retrieves a refresh token issued for the specified user and client
      * Retrieve a refresh token for a client
      * @param userId ID of an existing Okta user
      * @param clientId Client app ID
      * @param tokenId &#x60;id&#x60; of Token
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      */
  getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, expand?: string, _options?: Configuration): Observable<OAuth2RefreshToken>;
  /**
      * Retrieves a user from your Okta org.  You can substitute `me` for the `id` to fetch the current user linked to an API token or session cookie.  * The request returns the user linked to the API token that is specified in the Authorization header, not the user linked to the active session. Details of the admin user who granted the API token is returned.  * When the end user has an active Okta session, it is typically a CORS request from the browser. Therefore, it\'s possible to retrieve the current user without the Authorization header.  When fetching a user by `login` or `login shortname`, [URL encode](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) the request parameter to ensure that special characters are escaped properly. Logins with a `/` character can only be fetched by `id` due to URL issues with escaping the `/` character. If you don\'t know a user\'s ID, you can use the [List all users](/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers) endpoint to find it.  > **Note:** Some browsers block third-party cookies by default, which disrupts Okta functionality in certain flows. See [Mitigate the impact of third-party cookie deprecation](https://help.okta.com/okta_help.htm?type=oie&id=ext-third-party-cookies).
      * Retrieve a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param contentType Specifies the media type of the resource. Optional &#x60;okta-response&#x60; value can be included for performance optimization.  Complex DelAuth configurations may degrade performance when fetching specific parts of the response, and passing this parameter can omit these parts, bypassing the bottleneck.  Enum values for &#x60;okta-response&#x60;:   * &#x60;omitCredentials&#x60;: Omits the credentials subobject from the response.   * &#x60;omitCredentialsLinks&#x60;: Omits the following HAL links from the response: Update password, Change recovery question, Start forgot password flow, Reset password, Reset factors, Unlock.   * &#x60;omitTransitioningToStatus&#x60;: Omits the &#x60;transitioningToStatus&#x60; field from the response.
      * @param expand An optional parameter to include metadata in the &#x60;_embedded&#x60; attribute. Valid value: &#x60;blocks&#x60;.
      */
  getUser(userId: string, contentType?: string, expand?: string, _options?: Configuration): Observable<UserGetSingleton>;
  /**
      * Retrieves a user\'s classification
      * Retrieve a user\'s classification
      * @param userId ID of an existing Okta user
      */
  getUserClassification(userId: string, _options?: Configuration): Observable<UserClassification>;
  /**
      * Retrieves a grant for the specified user
      * Retrieve a user grant
      * @param userId ID of an existing Okta user
      * @param grantId Grant ID
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      */
  getUserGrant(userId: string, grantId: string, expand?: string, _options?: Configuration): Observable<OAuth2ScopeConsentGrant>;
  /**
      * Retrieves the user risk object for a user ID
      * Retrieve the user\'s risk
      * @param userId ID of an existing Okta user
      */
  getUserRisk(userId: string, _options?: Configuration): Observable<UserRiskGetResponse>;
  /**
      * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
      * Link a user to IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      * @param userIdentityProviderLinkRequest
      */
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest, _options?: Configuration): Observable<IdentityProviderApplicationUser>;
  /**
      * Lists all app links for all direct or indirect (through group membership) assigned apps.  > **Note:** To list all apps in an org, use the [List all applications endpoint in the Applications API](/openapi/okta-management/management/tag/Application/#tag/Application/operation/listApplications).
      * List all assigned app links
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listAppLinks(userId: string, _options?: Configuration): Observable<Collection<AssignedAppLink>>;
  /**
      * Lists all grants for a specified user and client
      * List all grants for a client
      * @param userId ID of an existing Okta user
      * @param clientId Client app ID
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of tokens to return
      */
  listGrantsForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Lists all the users linked to an identity provider (IdP)
      * List all users for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param q Searches the records for matching value
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit A limit on the number of objects to return
      * @param expand Expand user data
      */
  listIdentityProviderApplicationUsers(idpId: string, q?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Observable<Collection<IdentityProviderApplicationUser>>;
  /**
      * Lists either the `self` link for the primary user or all associated users in the relationship specified by `relationshipName`. If the specified user isn\'t associated in any relationship, an empty array is returned.  Use `me` instead of `id` to specify the current session user.
      * List the primary or all of the associated linked object values
      * @param userId If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
      * @param relationshipName Name of the &#x60;primary&#x60; or &#x60;associated&#x60; relationship being queried
      */
  listLinkedObjectsForUser(userId: string, relationshipName: string, _options?: Configuration): Observable<Collection<ResponseLinks>>;
  /**
      * Lists all refresh tokens issued for the specified user and client
      * List all refresh tokens for a client
      * @param userId ID of an existing Okta user
      * @param clientId Client app ID
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of tokens to return
      */
  listRefreshTokensForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2RefreshToken>>;
  /**
      * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
      * List all tokens from OIDC IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  listSocialAuthTokens(idpId: string, userId: string, _options?: Configuration): Observable<Collection<SocialAuthToken>>;
  /**
      * Lists information about how the user is blocked from accessing their account
      * List all user blocks
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listUserBlocks(userId: string, _options?: Configuration): Observable<Collection<UserBlock>>;
  /**
      * Lists all client resources for which the specified user has grants or tokens.  > **Note:** To list all client resources for which a specified authorization server has tokens, use the [List all client resources for an authorization server in the Authorization Servers API](/openapi/okta-management/management/tag/AuthorizationServerClients/#tag/AuthorizationServerClients/operation/listOAuth2ClientsForAuthorizationServer).
      * List all clients
      * @param userId ID of an existing Okta user
      */
  listUserClients(userId: string, _options?: Configuration): Observable<Collection<OAuth2Client>>;
  /**
      * Lists all devices enrolled by a user.  > **Note:** To list all devices registered to an org, use the [List all devices endpoint in the Devices API](/openapi/okta-management/management/tag/Device/#tag/Device/operation/listDevices).
      * List all devices
      * @param userId ID of an existing Okta user
      */
  listUserDevices(userId: string, _options?: Configuration): Observable<Collection<UserDevice>>;
  /**
      * Lists all grants for the specified user
      * List all user grants
      * @param userId ID of an existing Okta user
      * @param scopeId The scope ID to filter on
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of grants to return
      */
  listUserGrants(userId: string, scopeId?: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Observable<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Lists all groups of which the user is a member. > **Note:** To list all groups in your org, use the [List all groups endpoints in the Groups API](/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups).
      * List all groups
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listUserGroups(userId: string, _options?: Configuration): Observable<Collection<Group>>;
  /**
      * Lists the identity providers (IdPs) associated with the user
      * List all IdPs for user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listUserIdentityProviders(userId: string, _options?: Configuration): Observable<Collection<IdentityProvider>>;
  /**
      * Lists users in your org, with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria. Different results are returned depending on specified queries in the request.  > **Note:** This operation omits users that have a status of `DEPROVISIONED` in the response. To return all users, use a filter or search query instead.
      * List all users
      * @param contentType Specifies the media type of the resource. Optional &#x60;okta-response&#x60; value can be included for performance optimization.  Complex DelAuth configurations may degrade performance when fetching specific parts of the response, and passing this parameter can omit these parts, bypassing the bottleneck.  Enum values for &#x60;okta-response&#x60;:   * &#x60;omitCredentials&#x60;: Omits the credentials subobject from the response.   * &#x60;omitCredentialsLinks&#x60;: Omits the following HAL links from the response: Update password, Change recovery question, Start forgot password flow, Reset password, Reset factors, Unlock.   * &#x60;omitTransitioningToStatus&#x60;: Omits the &#x60;transitioningToStatus&#x60; field from the response.
      * @param search Searches for users with a supported filtering expression for most properties. Okta recommends using this parameter for optimal search performance.   &gt; **Note:** Using an overly complex or long search query can result in an error.  This operation supports [pagination](https://developer.okta.com/docs/api/#pagination). Use an ID lookup for records that you update to ensure your results contain the latest data. Returned users include those with the &#x60;DEPROVISIONED&#x60; status.  Property names in the search parameter are case sensitive, whereas operators (&#x60;eq&#x60;, &#x60;sw&#x60;, and so on) and string values are case insensitive. Unlike with user logins, diacritical marks are significant in search string values: a search for &#x60;isaac.brock&#x60; finds &#x60;Isaac.Brock&#x60;, but doesn\&#39;t find a property whose value is &#x60;isáàc.bröck&#x60;.   This operation requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;search&#x3D;profile.department eq \&quot;Engineering\&quot;&#x60; is encoded as &#x60;search&#x3D;profile.department%20eq%20%22Engineering%22&#x60;. If you use the special character &#x60;\&quot;&#x60; within a quoted string, it must also be escaped &#x60;\\&#x60; and encoded. For example, &#x60;search&#x3D;profile.lastName eq \&quot;bob\&quot;smith\&quot;&#x60; is encoded as &#x60;search&#x3D;profile.lastName%20eq%20%22bob%5C%22smith%22&#x60;. See [Special Characters](https://developer.okta.com/docs/api/#special-characters).  This operation searches many properties:   * Any user profile attribute, including custom-defined attributes   * The top-level properties: &#x60;id&#x60;, &#x60;status&#x60;, &#x60;created&#x60;, &#x60;activated&#x60;, &#x60;statusChanged&#x60;, and &#x60;lastUpdated&#x60;   * The [user type](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/#tag/UserType/operation/updateUserType) accessed as &#x60;type.id&#x60;  &gt; **Note:** &lt;x-lifecycle class&#x3D;\&quot;ea\&quot;&gt;&lt;/x-lifecycle&gt; The ability to search by user classification is available as an [Early Access](https://developer.okta.com/docs/api/openapi/okta-management/guides/release-lifecycle/#early-access-ea) feature. The &#x60;classification.type&#x60; property cannot be used in conjunction with other search terms. You can search using &#x60;classification.type eq \&quot;LITE\&quot;&#x60; or &#x60;classification.type eq \&quot;STANDARD\&quot;&#x60;.  You can also use &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters. The &#x60;ne&#x60; (not equal) operator isn\&#39;t supported, but you can obtain the same result by using &#x60;lt ... or ... gt&#x60;. For example, to see all users except those that have a status of &#x60;STAGED&#x60;, use &#x60;(status lt \&quot;STAGED\&quot; or status gt \&quot;STAGED\&quot;)&#x60;.  You can search properties that are arrays. If any element matches the search term, the entire array (object) is returned. Okta follows the [SCIM Protocol Specification](https://tools.ietf.org/html/rfc7644#section-3.4.2.2) for searching arrays. You can search multiple arrays, multiple values in an array, as well as using the standard logical and filtering operators. See [Filter](https://developer.okta.com/docs/reference/core-okta-api/#filter).  Searches for users can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. You can only use &#x60;co&#x60; with these select user profile attributes: &#x60;profile.firstName&#x60;, &#x60;profile.lastName&#x60;, &#x60;profile.email&#x60;, and &#x60;profile.login&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @param filter Filters users with a supported expression for a subset of properties.   &gt; **Note:** Returned users include those with the &#x60;DEPROVISIONED&#x60; status.  This requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;filter&#x3D;lastUpdated gt \&quot;2013-06-01T00:00:00.000Z\&quot;&#x60; is encoded as &#x60;filter&#x3D;lastUpdated%20gt%20%222013-06-01T00:00:00.000Z%22&#x60;. Filtering is case-sensitive for property names and query values, while operators are case-insensitive.  Filtering supports the following limited number of properties: &#x60;status&#x60;, &#x60;lastUpdated&#x60;, &#x60;id&#x60;, &#x60;profile.login&#x60;, &#x60;profile.email&#x60;, &#x60;profile.firstName&#x60;, and &#x60;profile.lastName&#x60;.  Additionally, filtering supports only the equal &#x60;eq&#x60; operator from the standard Okta API filtering semantics, except in the case of the &#x60;lastUpdated&#x60; property. This property can also use the inequality operators (&#x60;gt&#x60;, &#x60;ge&#x60;, &#x60;lt&#x60;, and &#x60;le&#x60;). For logical operators, only the logical operators &#x60;and&#x60; and &#x60;or&#x60; are supported. The &#x60;not&#x60; operator isn\&#39;t supported. See [Filter](https://developer.okta.com/docs/api/#filter) and [Operators](https://developer.okta.com/docs/api/#operators).
      * @param q Finds users who match the specified query. This doesn\&#39;t support pagination.  &gt; **Note:** For optimal performance, use the &#x60;search&#x60; parameter instead.  Use the &#x60;q&#x60; parameter for simple queries, such as a lookup of users by name when creating a people picker.  The value of &#x60;q&#x60; is matched against &#x60;firstName&#x60;, &#x60;lastName&#x60;, or &#x60;email&#x60;. This performs a &#x60;startsWith&#x60; match, but this is an implementation detail and can change without notice. You don\&#39;t need to specify &#x60;firstName&#x60;, &#x60;lastName&#x60;, or &#x60;email&#x60;.  &gt; **Note:** Using the &#x60;q&#x60; parameter in a request omits users that have a status of &#x60;DEPROVISIONED&#x60;. To return all users, use a filter or search query instead.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
      * @param sortBy Specifies field to sort by (for search queries only). This can be any single property, for example &#x60;sortBy&#x3D;profile.lastName&#x60;. Users with the same value for the &#x60;sortBy&#x60; property will be ordered by &#x60;id&#x60;.
      * @param sortOrder Specifies the sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn\&#39;t case sensitive. &#x60;sortOrder&#x60; is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
      * @param expand A parameter to include metadata in the &#x60;_embedded&#x60; property. Supported value: &#x60;classification&#x60;.
      */
  listUsers(contentType?: string, search?: string, filter?: string, q?: string, after?: string, limit?: number, sortBy?: string, sortOrder?: string, expand?: string, _options?: Configuration): Observable<Collection<User>>;
  /**
      * Reactivates a user.  Perform this operation only on users with a `PROVISIONED` or `RECOVERY` [status](/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!c=200&path=status&t=response). This operation restarts the activation workflow if for some reason the user activation wasn\'t completed when using the `activationToken` from [Activate User](/openapi/okta-management/management/tag/UserLifecycle/#tag/UserLifecycle/operation/activateUser).  Users that don\'t have a password must complete the flow by completing the [Reset password](/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword) flow and MFA enrollment steps to transition the user to `ACTIVE` status.  If `sendEmail` is `false`, returns an activation link for the user to set up their account. The activation token can be used to create a custom activation link.
      * Reactivate a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail Sends an activation email to the user if &#x60;true&#x60;
      */
  reactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Observable<UserActivationToken>;
  /**
      * Replaces a user\'s profile, credentials, or both using strict-update semantics.  All profile properties must be specified when updating a user\'s profile with a `PUT` method. Any property not specified in the request is deleted. > **Important:** Don\'t use a `PUT` method for partial updates.
      * Replace a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param user
      * @param strict If &#x60;true&#x60;, validates against minimum age and history password policy
      * @param ifMatch The ETag value of the user\&#39;s expected current state. This becomes a conditional request used for concurrency control. See [Conditional Requests and Entity Tags](/#conditional-requests-and-entity-tags).
      */
  replaceUser(userId: string, user: UpdateUserRequest, strict?: boolean, ifMatch?: string, _options?: Configuration): Observable<User>;
  /**
      * Replaces the user\'s classification
      * Replace the user\'s classification
      * @param userId ID of an existing Okta user
      * @param replaceUserClassification
      */
  replaceUserClassification(userId: string, replaceUserClassification: ReplaceUserClassification, _options?: Configuration): Observable<UserClassification>;
  /**
      * Resets all factors for the specified user. All MFA factor enrollments return to the unenrolled state. The user\'s status remains `ACTIVE`. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset the factors
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  resetFactors(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all grants for the specified user and client
      * Revoke all grants for a client
      * @param userId ID of an existing Okta user
      * @param clientId Client app ID
      */
  revokeGrantsForUserAndClient(userId: string, clientId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes the specified refresh token
      * Revoke a token for a client
      * @param userId ID of an existing Okta user
      * @param clientId Client app ID
      * @param tokenId &#x60;id&#x60; of Token
      */
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all refresh tokens issued for the specified user and client
      * Revoke all refresh tokens for a client
      * @param userId ID of an existing Okta user
      * @param clientId Client app ID
      */
  revokeTokensForUserAndClient(userId: string, clientId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes one grant for a specified user
      * Revoke a user grant
      * @param userId ID of an existing Okta user
      * @param grantId Grant ID
      */
  revokeUserGrant(userId: string, grantId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all grants for a specified user
      * Revoke all user grants
      * @param userId ID of an existing Okta user
      */
  revokeUserGrants(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user. > **Note:** This operation doesn\'t clear the sessions created for web or native apps.
      * Revoke all user sessions
      * @param userId ID of an existing Okta user
      * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
      */
  revokeUserSessions(userId: string, oauthTokens?: boolean, _options?: Configuration): Observable<void>;
  /**
      * Assigns the first user as the `associated` and the second user as the `primary` for the specified relationship.  If the first user is already associated with a different `primary` for this relationship, the previous link is removed. A linked object relationship can specify only one primary user for an associated user.
      * Assign a linked object value for primary
      * @param associatedUserId If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
      * @param primaryRelationshipName Name of the &#x60;primary&#x60; relationship being assigned
      * @param primaryUserId User ID to be assigned to the &#x60;primary&#x60; relationship for the &#x60;associated&#x60; user
      */
  setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string, _options?: Configuration): Observable<void>;
  /**
      * Suspends a user. Perform this operation only on users with an `ACTIVE` status. The user has a `SUSPENDED` status when the process completes.  Suspended users can\'t sign in to Okta. They can only be unsuspended or deactivated. Their group and app assignments are retained.
      * Suspend a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  suspendUser(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
      * Unlink a user from IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  unlinkUserFromIdentityProvider(idpId: string, userId: string, _options?: Configuration): Observable<void>;
  /**
      * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that\'s blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password. > **Note:** This operation works with Okta-sourced users. It doesn\'t support directory-sourced accounts such as Active Directory.
      * Unlock a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  unlockUser(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state. This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  unsuspendUser(userId: string, _options?: Configuration): Observable<void>;
  /**
      * Updates a user\'s profile or credentials with partial update semantics.  > **Important:** Use the `POST` method for partial updates. Unspecified properties are set to null with `PUT`.  `profile` and `credentials` can be updated independently or together with a single request. > **Note**: Currently, the user type of a user can only be changed via a full replacement PUT operation. If the request parameters of a partial update include the type element from the user object, the value must match the existing type of the user. Only admins are permitted to change the user type of a user; end users are not allowed to change their own user type.  > **Note**: To update a current user\'s profile with partial semantics, the `/api/v1/users/me` endpoint can be invoked. > > A user can only update profile properties for which the user has write access. Within the profile, if the user tries to update the primary or the secondary email IDs, verification emails are sent to those email IDs, and the fields are updated only upon verification.  If you are using this endpoint to set a password, it sets a password without validating existing user credentials. This is an administrative operation. For operations that validate credentials, refer to the [Reset password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword), [Start forgot password flow](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/forgotPassword), and [Update password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/changePassword) endpoints.
      * Update a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param user
      * @param strict If true, validates against minimum age and history password policy
      * @param ifMatch The ETag value of the user\&#39;s expected current state. This becomes a conditional request used for concurrency control. See [Conditional Requests and Entity Tags](/#conditional-requests-and-entity-tags).
      */
  updateUser(userId: string, user: UpdateUserRequest, strict?: boolean, ifMatch?: string, _options?: Configuration): Observable<User>;
  /**
      * Upserts (creates or updates) the user risk object for a user ID
      * Upsert the user\'s risk
      * @param userId ID of an existing Okta user
      * @param userRiskRequest
      */
  upsertUserRisk(userId: string, userRiskRequest: UserRiskRequest, _options?: Configuration): Observable<UserRiskPutResponse>;
}
import { UserAuthenticatorEnrollmentsApiRequestFactory, UserAuthenticatorEnrollmentsApiResponseProcessor } from '../apis/UserAuthenticatorEnrollmentsApi';
export declare class ObservableUserAuthenticatorEnrollmentsApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: UserAuthenticatorEnrollmentsApiRequestFactory, responseProcessor?: UserAuthenticatorEnrollmentsApiResponseProcessor);
  /**
      * Creates a Phone authenticator enrollment that\'s automatically activated
      * Create an auto-activated Phone authenticator enrollment
      * @param userId ID of an existing Okta user
      * @param authenticator
      */
  createAuthenticatorEnrollment(userId: string, authenticator: AuthenticatorEnrollmentCreateRequest, _options?: Configuration): Observable<AuthenticatorEnrollment>;
  /**
      * Creates an auto-activated Temporary Access Code (TAC) authenticator enrollment
      * Create an auto-activated TAC authenticator enrollment
      * @param userId ID of an existing Okta user
      * @param authenticator
      */
  createTacAuthenticatorEnrollment(userId: string, authenticator: AuthenticatorEnrollmentCreateRequestTac, _options?: Configuration): Observable<TacAuthenticatorEnrollment>;
  /**
      * Deletes an existing enrollment for the specified user. The user can enroll the authenticator again.
      * Delete an authenticator enrollment
      * @param userId ID of an existing Okta user
      * @param enrollmentId Unique identifier of an enrollment
      */
  deleteAuthenticatorEnrollment(userId: string, enrollmentId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a user\'s authenticator enrollment by `enrollmentId`
      * Retrieve an authenticator enrollment
      * @param userId ID of an existing Okta user
      * @param enrollmentId Unique identifier of an enrollment
      */
  getAuthenticatorEnrollment(userId: string, enrollmentId: string, _options?: Configuration): Observable<AuthenticatorEnrollment>;
  /**
      * Lists all authenticator enrollments of the specified user
      * List all authenticator enrollments
      * @param userId ID of an existing Okta user
      */
  listAuthenticatorEnrollments(userId: string, _options?: Configuration): Observable<AuthenticatorEnrollment>;
}
import { UserFactorApiRequestFactory, UserFactorApiResponseProcessor } from '../apis/UserFactorApi';
export declare class ObservableUserFactorApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: UserFactorApiRequestFactory, responseProcessor?: UserFactorApiResponseProcessor);
  /**
      * Activates a factor. Some factors (`call`, `email`, `push`, `sms`, `token:software:totp`, `u2f`, and `webauthn`) require activation to complete the enrollment process.  Okta enforces a rate limit of five activation attempts within five minutes. After a user exceeds the rate limit, Okta returns an error message.  > **Notes:**  > * If the user exceeds their SMS, call, or email factor activation rate limit, then an [OTP resend request](./#tag/UserFactor/operation/resendEnrollFactor) isn\'t allowed for the same factor. > * You can\'t use the Factors API to activate Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).
      * Activate a factor
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param body
      */
  activateFactor(userId: string, factorId: string, body?: UserFactorActivateRequest, _options?: Configuration): Observable<UserFactorActivateResponse>;
  /**
      * Enrolls a supported factor for the specified user  > **Notes:**  >   * All responses return the enrolled factor with a status of either `PENDING_ACTIVATION` or `ACTIVE`. >   * You can\'t use the Factors API to enroll Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).  #### Additional SMS/Call factor information  * **Rate limits**: Okta may return a `429 Too Many Requests` status code if you attempt to resend an SMS or a voice call challenge (OTP) within the same time window. The current [rate limit](https://developer.okta.com/docs/reference/rate-limits/) is one SMS/CALL challenge per phone number every 30 seconds.  * **Existing phone numbers**: Okta may return a `400 Bad Request` status code if a user attempts to enroll with a different phone number when the user has an existing mobile phone or has an existing phone with voice call capability. A user can enroll only one mobile phone for `sms` and enroll only one voice call capable phone for `call` factor.  #### Additional WebAuthn factor information  * For detailed information on the WebAuthn standard, including an up-to-date list of supported browsers, see [webauthn.me](https://a0.to/webauthnme-okta-docs).  * When you enroll a WebAuthn factor, the `activation` object in `_embedded` contains properties used to help the client to create a new WebAuthn credential for use with Okta. See the [WebAuthn spec for PublicKeyCredentialCreationOptions](https://www.w3.org/TR/webauthn/#dictionary-makecredentialoptions).  #### Additional Custom TOTP factor information  * The enrollment process involves passing both the `factorProfileId` and `sharedSecret` properties for a token.  * A factor profile represents a particular configuration of the Custom TOTP factor. It includes certain properties that match the hardware token that end users possess, such as the HMAC algorithm, passcode length, and time interval. There can be multiple Custom TOTP factor profiles per org, but users can only enroll in one Custom TOTP factor. Admins can [create Custom TOTP factor profiles](https://help.okta.com/okta_help.htm?id=ext-mfa-totp) in the Admin Console. Then, copy the `factorProfileId` from the Admin Console into the API request.  * <x-lifecycle class=\"oie\"></x-lifecycle> For Custom TOTP enrollment, Okta automaticaly enrolls a user with a `token:software:totp` factor and the `push` factor if the user isn\'t currently enrolled with these factors.
      * Enroll a factor
      * @param userId ID of an existing Okta user
      * @param body Factor
      * @param updatePhone If &#x60;true&#x60;, indicates that you are replacing the currently registered phone number for the specified user. This parameter is ignored if the existing phone number is used by an activated factor.
      * @param templateId ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors. If the provided ID doesn\&#39;t exist, the default template is used instead.
      * @param tokenLifetimeSeconds Defines how long the token remains valid
      * @param activate If &#x60;true&#x60;, the factor is immediately activated as part of the enrollment. An activation process isn\&#39;t required. Currently auto-activation is supported by &#x60;sms&#x60;, &#x60;call&#x60;, &#x60;email&#x60; and &#x60;token:hotp&#x60; (Custom TOTP) factors.
      * @param acceptLanguage An ISO 639-1 two-letter language code that defines a localized message to send. This parameter is only used by &#x60;sms&#x60; factors. If a localized message doesn\&#39;t exist or the &#x60;templateId&#x60; is incorrect, the default template is used instead.
      */
  enrollFactor(userId: string, body: UserFactor, updatePhone?: boolean, templateId?: string, tokenLifetimeSeconds?: number, activate?: boolean, acceptLanguage?: string, _options?: Configuration): Observable<UserFactor>;
  /**
      * Retrieves an existing factor for the specified user
      * Retrieve a factor
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      */
  getFactor(userId: string, factorId: string, _options?: Configuration): Observable<UserFactor>;
  /**
      * Retrieves the status of a `push` factor verification transaction   > **Note:**  > The response body for a number matching push challenge to an Okta Verify `push` factor enrollment is different from the response body of a standard push challenge.   > The number matching push challenge [response body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus!c=200&path=1/_embedded&t=response) contains the correct answer for the challenge.  > Use [Verify a factor](/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor) to configure which challenge is sent.
      * Retrieve a factor transaction status
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param transactionId ID of an existing factor verification transaction
      */
  getFactorTransactionStatus(userId: string, factorId: string, transactionId: string, _options?: Configuration): Observable<UserFactorPushTransaction>;
  /**
      * Retrieves the specified YubiKey OTP token by `id`
      * Retrieve a YubiKey OTP token
      * @param tokenId ID of a YubiKey token
      */
  getYubikeyOtpTokenById(tokenId: string, _options?: Configuration): Observable<UserFactorYubikeyOtpToken>;
  /**
      * Lists all enrolled factors for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only enrolled factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all enrolled factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
      * List all enrolled factors
      * @param userId ID of an existing Okta user
      */
  listFactors(userId: string, _options?: Configuration): Observable<Collection<UserFactor>>;
  /**
      * Lists all the supported factors that can be enrolled for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all supported factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
      * List all supported factors
      * @param userId ID of an existing Okta user
      */
  listSupportedFactors(userId: string, _options?: Configuration): Observable<Collection<UserFactorSupported>>;
  /**
      * Lists all available security questions for the specified user
      * List all supported security questions
      * @param userId ID of an existing Okta user
      */
  listSupportedSecurityQuestions(userId: string, _options?: Configuration): Observable<Collection<UserFactorSecurityQuestionProfile>>;
  /**
      * Lists all YubiKey OTP tokens
      * List all YubiKey OTP tokens
      * @param after Specifies the pagination cursor for the next page of tokens
      * @param expand Embeds the [user](/openapi/okta-management/management/tag/User/) resource if the YubiKey token is assigned to a user and &#x60;expand&#x60; is set to &#x60;user&#x60;
      * @param filter The expression used to filter tokens
      * @param forDownload Returns tokens in a CSV to download instead of in the response. When you use this query parameter, the &#x60;limit&#x60; default changes to 1000.
      * @param limit Specifies the number of results per page
      * @param sortBy The value of how the tokens are sorted
      * @param sortOrder Specifies the sort order, either &#x60;ASC&#x60; or &#x60;DESC&#x60;
      */
  listYubikeyOtpTokens(after?: string, expand?: string, filter?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified', forDownload?: boolean, limit?: number, sortBy?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified', sortOrder?: 'ASC' | 'DESC', _options?: Configuration): Observable<Collection<UserFactorYubikeyOtpToken>>;
  /**
      * Resends an `sms`, `call`, or `email` factor challenge as part of an enrollment flow.  For `call` and `sms` factors, Okta enforces a rate limit of one OTP challenge per device every 30 seconds. You can configure your `sms` and `call` factors to use a third-party telephony provider. See the [Telephony inline hook reference](https://developer.okta.com/docs/reference/telephony-hook/). Okta alternates between SMS providers with every resend request to ensure delivery of SMS and Call OTPs across different carriers.  > **Note:** Resend operations aren\'t allowed after a factor exceeds the activation rate limit. See [Activate a factor](./#tag/UserFactor/operation/activateFactor).
      * Resend a factor enrollment
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param resendUserFactor
      * @param templateId ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors.
      */
  resendEnrollFactor(userId: string, factorId: string, resendUserFactor: ResendUserFactor, templateId?: string, _options?: Configuration): Observable<ResendUserFactor>;
  /**
      * Unenrolls an existing factor for the specified user. You can\'t unenroll a factor from a deactivated user. Unenrolling a factor allows the user to enroll a new factor.  > **Note:** If you unenroll the `push` or the `signed_nonce` factors, Okta also unenrolls any other `totp`, `signed_nonce`, or Okta Verify `push` factors associated with the user.
      * Unenroll a factor
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param removeRecoveryEnrollment If &#x60;true&#x60;, removes the phone number as both a recovery method and a factor. This parameter is only used for the &#x60;sms&#x60; and &#x60;call&#x60; factors.
      */
  unenrollFactor(userId: string, factorId: string, removeRecoveryEnrollment?: boolean, _options?: Configuration): Observable<void>;
  /**
      * Uploads a seed for a user to enroll a YubiKey OTP
      * Upload a YubiKey OTP seed
      * @param uploadYubikeyOtpTokenSeedRequest
      * @param after Specifies the pagination cursor for the next page of tokens
      * @param expand Embeds the [user](/openapi/okta-management/management/tag/User/) resource if the YubiKey token is assigned to a user and &#x60;expand&#x60; is set to &#x60;user&#x60;
      * @param filter The expression used to filter tokens
      * @param forDownload Returns tokens in a CSV to download instead of in the response. When you use this query parameter, the &#x60;limit&#x60; default changes to 1000.
      * @param limit Specifies the number of results per page
      * @param sortBy The value of how the tokens are sorted
      * @param sortOrder Specifies the sort order, either &#x60;ASC&#x60; or &#x60;DESC&#x60;
      */
  uploadYubikeyOtpTokenSeed(uploadYubikeyOtpTokenSeedRequest: UploadYubikeyOtpTokenSeedRequest, after?: string, expand?: string, filter?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified', forDownload?: boolean, limit?: number, sortBy?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified', sortOrder?: 'ASC' | 'DESC', _options?: Configuration): Observable<UserFactorYubikeyOtpToken>;
  /**
      * Verifies an OTP for a factor. Some factors (`call`, `email`, `push`, `sms`, `u2f`, and `webauthn`) must first issue a challenge before you can verify the factor. Do this by making a request without a body. After a challenge is issued, make another request to verify the factor.  > **Notes:** > - You can send standard push challenges or number matching push challenges to Okta Verify `push` factor enrollments. Use a [request body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!path=2/useNumberMatchingChallenge&t=request) for number matching push challenges.  > - To verify a `push` factor, use the **poll** link returned when you issue the challenge. See [Retrieve a factor transaction status](/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus).
      * Verify a factor
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param templateId ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors.
      * @param tokenLifetimeSeconds Defines how long the token remains valid
      * @param xForwardedFor Public IP address for the user agent
      * @param userAgent Type of user agent detected when the request is made. Required to verify &#x60;push&#x60; factors.
      * @param acceptLanguage An ISO 639-1 two-letter language code that defines a localized message to send. This parameter is only used by &#x60;sms&#x60; factors. If a localized message doesn\&#39;t exist or the &#x60;templateId&#x60; is incorrect, the default template is used instead.
      * @param body Verifies an OTP for a factor. Some factors (&#x60;call&#x60;, &#x60;email&#x60;, &#x60;push&#x60;, &#x60;sms&#x60;, &#x60;u2f&#x60;, and &#x60;webauthn&#x60;) must first issue a challenge before you can verify the factor. Do this by making a request without a body. After a challenge is issued, make another request to verify the factor.  &gt; **Note:** &gt; Unlike standard push challenges that don\&#39;t require a request body, a number matching [&#x60;push&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!path&#x3D;2/useNumberMatchingChallenge&amp;t&#x3D;request) challenge requires a request body. &#x60;useNumberMatchingChallenge&#x60; must be set to &#x60;true&#x60;. &gt; When a number matching challenge is issued for an Okta Verify &#x60;push&#x60; factor enrollment, a &#x60;correctAnswer&#x60; challenge object is returned in the [&#x60;_embedded&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!c&#x3D;200&amp;path&#x3D;_embedded&amp;t&#x3D;response) object.
      */
  verifyFactor(userId: string, factorId: string, templateId?: string, tokenLifetimeSeconds?: number, xForwardedFor?: string, userAgent?: string, acceptLanguage?: string, body?: UserFactorVerifyRequest, _options?: Configuration): Observable<UserFactorVerifyResponse | UserFactorVerifyResponseWaiting>;
}
import { UserTypeApiRequestFactory, UserTypeApiResponseProcessor } from '../apis/UserTypeApi';
export declare class ObservableUserTypeApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: UserTypeApiRequestFactory, responseProcessor?: UserTypeApiResponseProcessor);
  /**
      * Creates a new user type. Okta automatically creates a `default` user type for your org. You may add up to nine additional user types. > **Note**: New user types are based on the current default schema template. Modifications to this schema do not automatically propagate to previously created user types.
      * Create a user type
      * @param userType
      */
  createUserType(userType: UserType, _options?: Configuration): Observable<UserType>;
  /**
      * Deletes a user type permanently. > **Note**: You can\'t delete the default user type or a user type that is currently assigned to users.
      * Delete a user type
      * @param typeId
      */
  deleteUserType(typeId: string, _options?: Configuration): Observable<void>;
  /**
      * Retrieves a user type by ID. Use `default` to fetch the default user type.
      * Retrieve a user type
      * @param typeId
      */
  getUserType(typeId: string, _options?: Configuration): Observable<UserType>;
  /**
      * Lists all user types in your org
      * List all user types
      */
  listUserTypes(_options?: Configuration): Observable<Collection<UserType>>;
  /**
      * Replaces an existing user type. This operation is a full update. > **Note**: The `name` of an existing user type can\'t be changed, but must be part of the request body. You can only replace the `displayName` and `description` elements.
      * Replace a user type
      * @param typeId
      * @param userType
      */
  replaceUserType(typeId: string, userType?: UserTypePutRequest, _options?: Configuration): Observable<UserType>;
  /**
      * Updates an existing user type. This operation is a partial update. > **Note**: You can only update the `displayName` and `description` elements. The `name` of an existing user type can\'t be changed.
      * Update a user type
      * @param typeId
      * @param userType
      */
  updateUserType(typeId: string, userType: UserTypePostRequest, _options?: Configuration): Observable<UserType>;
}
import { WebAuthnPreregistrationApiRequestFactory, WebAuthnPreregistrationApiResponseProcessor } from '../apis/WebAuthnPreregistrationApi';
export declare class ObservableWebAuthnPreregistrationApi {
  private requestFactory;
  private responseProcessor;
  private configuration;
  constructor(configuration: Configuration, requestFactory?: WebAuthnPreregistrationApiRequestFactory, responseProcessor?: WebAuthnPreregistrationApiResponseProcessor);
  /**
      * Activates a preregistered WebAuthn factor. As part of this operation, Okta first decrypts and verifies the factor PIN and enrollment data sent by the fulfillment provider.
      * Activate a preregistered WebAuthn factor
      * @param body Enrollment activation request
      */
  activatePreregistrationEnrollment(body?: EnrollmentActivationRequest, _options?: Configuration): Observable<EnrollmentActivationResponse>;
  /**
      * Assigns the fulfillment error status to a WebAuthn preregistration factor for a user. The `/mark-error` path indicates that the specific `FULFILLMENT_ERRORED` AuthFactor status is set on the enrollment.
      * Assign the fulfillment error status to a WebAuthn preregistration factor
      * @param userId ID of an existing Okta user
      * @param authenticatorEnrollmentId ID for a WebAuthn preregistration factor in Okta
      */
  assignFulfillmentErrorWebAuthnPreregistrationFactor(userId: string, authenticatorEnrollmentId: string, _options?: Configuration): Observable<void>;
  /**
      * Deletes a specific WebAuthn preregistration factor for a user
      * Delete a WebAuthn preregistration factor
      * @param userId ID of an existing Okta user
      * @param authenticatorEnrollmentId ID for a WebAuthn preregistration factor in Okta
      */
  deleteWebAuthnPreregistrationFactor(userId: string, authenticatorEnrollmentId: string, _options?: Configuration): Observable<void>;
  /**
      * Enrolls a preregistered WebAuthn factor. This WebAuthn factor has a longer challenge timeout period to accommodate the fulfillment request process. As part of this operation, Okta generates elliptic curve (EC) key-pairs used to encrypt the factor PIN and enrollment data sent by the fulfillment provider.
      * Enroll a preregistered WebAuthn factor
      * @param body Enrollment initialization request
      */
  enrollPreregistrationEnrollment(body?: EnrollmentInitializationRequest, _options?: Configuration): Observable<EnrollmentInitializationResponse>;
  /**
      * Generates a fulfillment request by sending a WebAuthn preregistration event to start the flow. The WebAuthn preregistration integration for Okta Workflows uses a preregistration event to populate the fulfillment request.
      * Generate a fulfillment request
      * @param body Fulfillment request
      */
  generateFulfillmentRequest(body?: FulfillmentRequest, _options?: Configuration): Observable<void>;
  /**
      * Lists all WebAuthn preregistration factors for the specified user
      * List all WebAuthn preregistration factors
      * @param userId ID of an existing Okta user
      */
  listWebAuthnPreregistrationFactors(userId: string, _options?: Configuration): Observable<Collection<WebAuthnPreregistrationFactor>>;
  /**
      * Sends the decoded PIN for the specified WebAuthn preregistration enrollment. PINs are sent to the user\'s email. To resend the PIN, call this operation again.
      * Send a PIN to user
      * @param body Send PIN request
      */
  sendPin(body?: PinRequest, _options?: Configuration): Observable<void>;
}
