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
import { BulkUpsertRequestBody } from '../models/BulkUpsertRequestBody';
import { BundleEntitlementsResponse } from '../models/BundleEntitlementsResponse';
import { CAPTCHAInstance } from '../models/CAPTCHAInstance';
import { CapabilityType } from '../models/CapabilityType';
import { CatalogApplication } from '../models/CatalogApplication';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { ChildOrg } from '../models/ChildOrg';
import { ClientPrivilegesSetting } from '../models/ClientPrivilegesSetting';
import { CreateBrandRequest } from '../models/CreateBrandRequest';
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
export interface AgentPoolsApiActivateAgentPoolsUpdateRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApiactivateAgentPoolsUpdate
      */
    poolId: string;
    /**
      * Id of the update
      * @type string
      * @memberof AgentPoolsApiactivateAgentPoolsUpdate
      */
    updateId: string;
}
export interface AgentPoolsApiCreateAgentPoolsUpdateRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApicreateAgentPoolsUpdate
      */
    poolId: string;
    /**
      *
      * @type AgentPoolUpdate
      * @memberof AgentPoolsApicreateAgentPoolsUpdate
      */
    AgentPoolUpdate: AgentPoolUpdate;
}
export interface AgentPoolsApiDeactivateAgentPoolsUpdateRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApideactivateAgentPoolsUpdate
      */
    poolId: string;
    /**
      * Id of the update
      * @type string
      * @memberof AgentPoolsApideactivateAgentPoolsUpdate
      */
    updateId: string;
}
export interface AgentPoolsApiDeleteAgentPoolsUpdateRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApideleteAgentPoolsUpdate
      */
    poolId: string;
    /**
      * Id of the update
      * @type string
      * @memberof AgentPoolsApideleteAgentPoolsUpdate
      */
    updateId: string;
}
export interface AgentPoolsApiGetAgentPoolsUpdateInstanceRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApigetAgentPoolsUpdateInstance
      */
    poolId: string;
    /**
      * Id of the update
      * @type string
      * @memberof AgentPoolsApigetAgentPoolsUpdateInstance
      */
    updateId: string;
}
export interface AgentPoolsApiGetAgentPoolsUpdateSettingsRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApigetAgentPoolsUpdateSettings
      */
    poolId: string;
}
export interface AgentPoolsApiListAgentPoolsRequest {
    /**
      * Maximum number of AgentPools being returned
      * @type number
      * @memberof AgentPoolsApilistAgentPools
      */
    limitPerPoolType?: number;
    /**
      * Agent type to search for
      * @type AgentType
      * @memberof AgentPoolsApilistAgentPools
      */
    poolType?: AgentType;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof AgentPoolsApilistAgentPools
      */
    after?: string;
}
export interface AgentPoolsApiListAgentPoolsUpdatesRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApilistAgentPoolsUpdates
      */
    poolId: string;
    /**
      * Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates.
      * @type boolean
      * @memberof AgentPoolsApilistAgentPoolsUpdates
      */
    scheduled?: boolean;
}
export interface AgentPoolsApiPauseAgentPoolsUpdateRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApipauseAgentPoolsUpdate
      */
    poolId: string;
    /**
      * Id of the update
      * @type string
      * @memberof AgentPoolsApipauseAgentPoolsUpdate
      */
    updateId: string;
}
export interface AgentPoolsApiResumeAgentPoolsUpdateRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApiresumeAgentPoolsUpdate
      */
    poolId: string;
    /**
      * Id of the update
      * @type string
      * @memberof AgentPoolsApiresumeAgentPoolsUpdate
      */
    updateId: string;
}
export interface AgentPoolsApiRetryAgentPoolsUpdateRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApiretryAgentPoolsUpdate
      */
    poolId: string;
    /**
      * Id of the update
      * @type string
      * @memberof AgentPoolsApiretryAgentPoolsUpdate
      */
    updateId: string;
}
export interface AgentPoolsApiStopAgentPoolsUpdateRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApistopAgentPoolsUpdate
      */
    poolId: string;
    /**
      * Id of the update
      * @type string
      * @memberof AgentPoolsApistopAgentPoolsUpdate
      */
    updateId: string;
}
export interface AgentPoolsApiUpdateAgentPoolsUpdateRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApiupdateAgentPoolsUpdate
      */
    poolId: string;
    /**
      * Id of the update
      * @type string
      * @memberof AgentPoolsApiupdateAgentPoolsUpdate
      */
    updateId: string;
    /**
      *
      * @type AgentPoolUpdate
      * @memberof AgentPoolsApiupdateAgentPoolsUpdate
      */
    AgentPoolUpdate: AgentPoolUpdate;
}
export interface AgentPoolsApiUpdateAgentPoolsUpdateSettingsRequest {
    /**
      * Id of the agent pool for which the settings will apply
      * @type string
      * @memberof AgentPoolsApiupdateAgentPoolsUpdateSettings
      */
    poolId: string;
    /**
      *
      * @type AgentPoolUpdateSetting
      * @memberof AgentPoolsApiupdateAgentPoolsUpdateSettings
      */
    AgentPoolUpdateSetting: AgentPoolUpdateSetting;
}
export declare class ObjectAgentPoolsApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AgentPoolsApiRequestFactory, responseProcessor?: AgentPoolsApiResponseProcessor);
  /**
      * Activates scheduled Agent pool update
      * Activate an agent pool update
      * @param param the request object
      */
  activateAgentPoolsUpdate(param: AgentPoolsApiActivateAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.
      * Create an agent pool update
      * @param param the request object
      */
  createAgentPoolsUpdate(param: AgentPoolsApiCreateAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Deactivates scheduled Agent pool update
      * Deactivate an agent pool update
      * @param param the request object
      */
  deactivateAgentPoolsUpdate(param: AgentPoolsApiDeactivateAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Deletes Agent pool update
      * Delete an agent pool update
      * @param param the request object
      */
  deleteAgentPoolsUpdate(param: AgentPoolsApiDeleteAgentPoolsUpdateRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves Agent pool update from updateId
      * Retrieve an agent pool update by ID
      * @param param the request object
      */
  getAgentPoolsUpdateInstance(param: AgentPoolsApiGetAgentPoolsUpdateInstanceRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Retrieves the current state of the agent pool update instance settings
      * Retrieve an agent pool update\'s settings
      * @param param the request object
      */
  getAgentPoolsUpdateSettings(param: AgentPoolsApiGetAgentPoolsUpdateSettingsRequest, options?: Configuration): Promise<AgentPoolUpdateSetting>;
  /**
      * Lists all agent pools with pagination support
      * List all agent pools
      * @param param the request object
      */
  listAgentPools(param?: AgentPoolsApiListAgentPoolsRequest, options?: Configuration): Promise<Collection<AgentPool>>;
  /**
      * Lists all agent pool updates
      * List all agent pool updates
      * @param param the request object
      */
  listAgentPoolsUpdates(param: AgentPoolsApiListAgentPoolsUpdatesRequest, options?: Configuration): Promise<Collection<AgentPoolUpdate>>;
  /**
      * Pauses running or queued Agent pool update
      * Pause an agent pool update
      * @param param the request object
      */
  pauseAgentPoolsUpdate(param: AgentPoolsApiPauseAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Resumes running or queued Agent pool update
      * Resume an agent pool update
      * @param param the request object
      */
  resumeAgentPoolsUpdate(param: AgentPoolsApiResumeAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Retries Agent pool update
      * Retry an agent pool update
      * @param param the request object
      */
  retryAgentPoolsUpdate(param: AgentPoolsApiRetryAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Stops Agent pool update
      * Stop an agent pool update
      * @param param the request object
      */
  stopAgentPoolsUpdate(param: AgentPoolsApiStopAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Updates Agent pool update and return latest agent pool update
      * Update an agent pool update by ID
      * @param param the request object
      */
  updateAgentPoolsUpdate(param: AgentPoolsApiUpdateAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Updates an agent pool update settings
      * Update an agent pool update settings
      * @param param the request object
      */
  updateAgentPoolsUpdateSettings(param: AgentPoolsApiUpdateAgentPoolsUpdateSettingsRequest, options?: Configuration): Promise<AgentPoolUpdateSetting>;
}
import { ApiServiceIntegrationsApiRequestFactory, ApiServiceIntegrationsApiResponseProcessor } from '../apis/ApiServiceIntegrationsApi';
export interface ApiServiceIntegrationsApiActivateApiServiceIntegrationInstanceSecretRequest {
    /**
      * &#x60;id&#x60; of the API Service Integration instance
      * @type string
      * @memberof ApiServiceIntegrationsApiactivateApiServiceIntegrationInstanceSecret
      */
    apiServiceId: string;
    /**
      * &#x60;id&#x60; of the API Service Integration instance Secret
      * @type string
      * @memberof ApiServiceIntegrationsApiactivateApiServiceIntegrationInstanceSecret
      */
    secretId: string;
}
export interface ApiServiceIntegrationsApiCreateApiServiceIntegrationInstanceRequest {
    /**
      *
      * @type PostAPIServiceIntegrationInstanceRequest
      * @memberof ApiServiceIntegrationsApicreateApiServiceIntegrationInstance
      */
    postAPIServiceIntegrationInstanceRequest: PostAPIServiceIntegrationInstanceRequest;
}
export interface ApiServiceIntegrationsApiCreateApiServiceIntegrationInstanceSecretRequest {
    /**
      * &#x60;id&#x60; of the API Service Integration instance
      * @type string
      * @memberof ApiServiceIntegrationsApicreateApiServiceIntegrationInstanceSecret
      */
    apiServiceId: string;
}
export interface ApiServiceIntegrationsApiDeactivateApiServiceIntegrationInstanceSecretRequest {
    /**
      * &#x60;id&#x60; of the API Service Integration instance
      * @type string
      * @memberof ApiServiceIntegrationsApideactivateApiServiceIntegrationInstanceSecret
      */
    apiServiceId: string;
    /**
      * &#x60;id&#x60; of the API Service Integration instance Secret
      * @type string
      * @memberof ApiServiceIntegrationsApideactivateApiServiceIntegrationInstanceSecret
      */
    secretId: string;
}
export interface ApiServiceIntegrationsApiDeleteApiServiceIntegrationInstanceRequest {
    /**
      * &#x60;id&#x60; of the API Service Integration instance
      * @type string
      * @memberof ApiServiceIntegrationsApideleteApiServiceIntegrationInstance
      */
    apiServiceId: string;
}
export interface ApiServiceIntegrationsApiDeleteApiServiceIntegrationInstanceSecretRequest {
    /**
      * &#x60;id&#x60; of the API Service Integration instance
      * @type string
      * @memberof ApiServiceIntegrationsApideleteApiServiceIntegrationInstanceSecret
      */
    apiServiceId: string;
    /**
      * &#x60;id&#x60; of the API Service Integration instance Secret
      * @type string
      * @memberof ApiServiceIntegrationsApideleteApiServiceIntegrationInstanceSecret
      */
    secretId: string;
}
export interface ApiServiceIntegrationsApiGetApiServiceIntegrationInstanceRequest {
    /**
      * &#x60;id&#x60; of the API Service Integration instance
      * @type string
      * @memberof ApiServiceIntegrationsApigetApiServiceIntegrationInstance
      */
    apiServiceId: string;
}
export interface ApiServiceIntegrationsApiListApiServiceIntegrationInstanceSecretsRequest {
    /**
      * &#x60;id&#x60; of the API Service Integration instance
      * @type string
      * @memberof ApiServiceIntegrationsApilistApiServiceIntegrationInstanceSecrets
      */
    apiServiceId: string;
}
export interface ApiServiceIntegrationsApiListApiServiceIntegrationInstancesRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof ApiServiceIntegrationsApilistApiServiceIntegrationInstances
      */
    after?: string;
}
export declare class ObjectApiServiceIntegrationsApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ApiServiceIntegrationsApiRequestFactory, responseProcessor?: ApiServiceIntegrationsApiResponseProcessor);
  /**
      * Activates an API Service Integration instance Secret by `secretId`
      * Activate an API service integration instance secret
      * @param param the request object
      */
  activateApiServiceIntegrationInstanceSecret(param: ApiServiceIntegrationsApiActivateApiServiceIntegrationInstanceSecretRequest, options?: Configuration): Promise<APIServiceIntegrationInstanceSecret>;
  /**
      * Creates and authorizes an API Service Integration instance
      * Create an API service integration instance
      * @param param the request object
      */
  createApiServiceIntegrationInstance(param: ApiServiceIntegrationsApiCreateApiServiceIntegrationInstanceRequest, options?: Configuration): Promise<PostAPIServiceIntegrationInstance>;
  /**
      * Creates an API Service Integration instance Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects.
      * Create an API service integration instance secret
      * @param param the request object
      */
  createApiServiceIntegrationInstanceSecret(param: ApiServiceIntegrationsApiCreateApiServiceIntegrationInstanceSecretRequest, options?: Configuration): Promise<APIServiceIntegrationInstanceSecret>;
  /**
      * Deactivates an API Service Integration instance Secret by `secretId`
      * Deactivate an API service integration instance secret
      * @param param the request object
      */
  deactivateApiServiceIntegrationInstanceSecret(param: ApiServiceIntegrationsApiDeactivateApiServiceIntegrationInstanceSecretRequest, options?: Configuration): Promise<APIServiceIntegrationInstanceSecret>;
  /**
      * Deletes an API Service Integration instance by `id`. This operation also revokes access to scopes that were previously granted to this API Service Integration instance.
      * Delete an API service integration instance
      * @param param the request object
      */
  deleteApiServiceIntegrationInstance(param: ApiServiceIntegrationsApiDeleteApiServiceIntegrationInstanceRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an API Service Integration instance Secret by `secretId`. You can only delete an inactive Secret.
      * Delete an API service integration instance secret
      * @param param the request object
      */
  deleteApiServiceIntegrationInstanceSecret(param: ApiServiceIntegrationsApiDeleteApiServiceIntegrationInstanceSecretRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an API Service Integration instance by `id`
      * Retrieve an API service integration instance
      * @param param the request object
      */
  getApiServiceIntegrationInstance(param: ApiServiceIntegrationsApiGetApiServiceIntegrationInstanceRequest, options?: Configuration): Promise<APIServiceIntegrationInstance>;
  /**
      * Lists all client secrets for an API Service Integration instance by `apiServiceId`
      * List all API service integration instance secrets
      * @param param the request object
      */
  listApiServiceIntegrationInstanceSecrets(param: ApiServiceIntegrationsApiListApiServiceIntegrationInstanceSecretsRequest, options?: Configuration): Promise<Collection<APIServiceIntegrationInstanceSecret>>;
  /**
      * Lists all API Service Integration instances with a pagination option
      * List all API service integration instances
      * @param param the request object
      */
  listApiServiceIntegrationInstances(param?: ApiServiceIntegrationsApiListApiServiceIntegrationInstancesRequest, options?: Configuration): Promise<Collection<APIServiceIntegrationInstance>>;
}
import { ApiTokenApiRequestFactory, ApiTokenApiResponseProcessor } from '../apis/ApiTokenApi';
export interface ApiTokenApiGetApiTokenRequest {
    /**
      * id of the API Token
      * @type string
      * @memberof ApiTokenApigetApiToken
      */
    apiTokenId: string;
}
export interface ApiTokenApiListApiTokensRequest {
}
export interface ApiTokenApiRevokeApiTokenRequest {
    /**
      * id of the API Token
      * @type string
      * @memberof ApiTokenApirevokeApiToken
      */
    apiTokenId: string;
}
export interface ApiTokenApiRevokeCurrentApiTokenRequest {
}
export interface ApiTokenApiUpsertApiTokenRequest {
    /**
      * id of the API Token
      * @type string
      * @memberof ApiTokenApiupsertApiToken
      */
    apiTokenId: string;
    /**
      *
      * @type ApiTokenUpdate
      * @memberof ApiTokenApiupsertApiToken
      */
    apiTokenUpdate: ApiTokenUpdate;
}
export declare class ObjectApiTokenApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ApiTokenApiRequestFactory, responseProcessor?: ApiTokenApiResponseProcessor);
  /**
      * Retrieves the metadata for an active API token by `apiTokenId`
      * Retrieve an API token\'s metadata
      * @param param the request object
      */
  getApiToken(param: ApiTokenApiGetApiTokenRequest, options?: Configuration): Promise<ApiToken>;
  /**
      * Lists all the metadata of the active API tokens
      * List all API token metadata
      * @param param the request object
      */
  listApiTokens(param?: ApiTokenApiListApiTokensRequest, options?: Configuration): Promise<Collection<ApiToken>>;
  /**
      * Revokes an API token by `apiTokenId`
      * Revoke an API token
      * @param param the request object
      */
  revokeApiToken(param: ApiTokenApiRevokeApiTokenRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes the API token provided in the Authorization header
      * Revoke the current API token
      * @param param the request object
      */
  revokeCurrentApiToken(param?: ApiTokenApiRevokeCurrentApiTokenRequest, options?: Configuration): Promise<void>;
  /**
      * Upserts an API Token Network Condition by `apiTokenId`
      * Upsert an API token network condition
      * @param param the request object
      */
  upsertApiToken(param: ApiTokenApiUpsertApiTokenRequest, options?: Configuration): Promise<ApiToken>;
}
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor } from '../apis/ApplicationApi';
export interface ApplicationApiActivateApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiactivateApplication
      */
    appId: string;
}
export interface ApplicationApiActivateDefaultProvisioningConnectionForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiactivateDefaultProvisioningConnectionForApplication
      */
    appId: string;
}
export interface ApplicationApiActivateOAuth2ClientJsonWebKeyRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiactivateOAuth2ClientJsonWebKey
      */
    appId: string;
    /**
      * Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      * @type string
      * @memberof ApplicationApiactivateOAuth2ClientJsonWebKey
      */
    keyId: string;
}
export interface ApplicationApiActivateOAuth2ClientSecretRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiactivateOAuth2ClientSecret
      */
    appId: string;
    /**
      * Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      * @type string
      * @memberof ApplicationApiactivateOAuth2ClientSecret
      */
    secretId: string;
}
export interface ApplicationApiAddJwkRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiaddJwk
      */
    appId: string;
    /**
      *
      * @type OAuth2ClientJsonWebKeyRequestBody
      * @memberof ApplicationApiaddJwk
      */
    oAuth2ClientJsonWebKeyRequestBody: OAuth2ClientJsonWebKeyRequestBody;
}
export interface ApplicationApiAssignApplicationPolicyRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiassignApplicationPolicy
      */
    appId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof ApplicationApiassignApplicationPolicy
      */
    policyId: string;
}
export interface ApplicationApiAssignGroupToApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiassignGroupToApplication
      */
    appId: string;
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof ApplicationApiassignGroupToApplication
      */
    groupId: string;
    /**
      *
      * @type ApplicationGroupAssignment
      * @memberof ApplicationApiassignGroupToApplication
      */
    applicationGroupAssignment?: ApplicationGroupAssignment;
}
export interface ApplicationApiAssignUserToApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiassignUserToApplication
      */
    appId: string;
    /**
      *
      * @type AppUserAssignRequest
      * @memberof ApplicationApiassignUserToApplication
      */
    appUser: AppUserAssignRequest;
}
export interface ApplicationApiCloneApplicationKeyRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApicloneApplicationKey
      */
    appId: string;
    /**
      * ID of the Key Credential for the application
      * @type string
      * @memberof ApplicationApicloneApplicationKey
      */
    keyId: string;
    /**
      * Unique key of the target Application
      * @type string
      * @memberof ApplicationApicloneApplicationKey
      */
    targetAid: string;
}
export interface ApplicationApiConfigureCapabilityApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiconfigureCapabilityApplication
      */
    appId: string;
    /**
      * Capability type
      * @type CapabilityType
      * @memberof ApplicationApiconfigureCapabilityApplication
      */
    capabilityType: CapabilityType;
}
export interface ApplicationApiCreateApplicationRequest {
    /**
      *
      * @type Application
      * @memberof ApplicationApicreateApplication
      */
    application: Application;
    /**
      * Executes activation lifecycle operation when creating the app
      * @type boolean
      * @memberof ApplicationApicreateApplication
      */
    activate?: boolean;
    /**
      *
      * @type string
      * @memberof ApplicationApicreateApplication
      */
    oktaAccessGatewayAgent?: string;
}
export interface ApplicationApiCreateCWOConnectionRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApicreateCWOConnection
      */
    appId: string;
    /**
      *
      * @type OrgCWOConnection
      * @memberof ApplicationApicreateCWOConnection
      */
    orgCWOConnection: OrgCWOConnection;
}
export interface ApplicationApiCreateFederatedClaimRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApicreateFederatedClaim
      */
    appId: string;
    /**
      *
      * @type FederatedClaimRequestBody
      * @memberof ApplicationApicreateFederatedClaim
      */
    federatedClaimRequestBody: FederatedClaimRequestBody;
}
export interface ApplicationApiCreateOAuth2ClientSecretRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApicreateOAuth2ClientSecret
      */
    appId: string;
    /**
      *
      * @type OAuth2ClientSecretRequestBody
      * @memberof ApplicationApicreateOAuth2ClientSecret
      */
    oAuth2ClientSecretRequestBody?: OAuth2ClientSecretRequestBody;
}
export interface ApplicationApiDeactivateApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApideactivateApplication
      */
    appId: string;
}
export interface ApplicationApiDeactivateDefaultProvisioningConnectionForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApideactivateDefaultProvisioningConnectionForApplication
      */
    appId: string;
}
export interface ApplicationApiDeactivateOAuth2ClientJsonWebKeyRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApideactivateOAuth2ClientJsonWebKey
      */
    appId: string;
    /**
      * Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      * @type string
      * @memberof ApplicationApideactivateOAuth2ClientJsonWebKey
      */
    keyId: string;
}
export interface ApplicationApiDeactivateOAuth2ClientSecretRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApideactivateOAuth2ClientSecret
      */
    appId: string;
    /**
      * Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      * @type string
      * @memberof ApplicationApideactivateOAuth2ClientSecret
      */
    secretId: string;
}
export interface ApplicationApiDeleteApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApideleteApplication
      */
    appId: string;
}
export interface ApplicationApiDeleteCWOConnectionRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApideleteCWOConnection
      */
    appId: string;
    /**
      * Connection ID
      * @type string
      * @memberof ApplicationApideleteCWOConnection
      */
    connectionId: string;
}
export interface ApplicationApiDeleteFederatedClaimRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApideleteFederatedClaim
      */
    appId: string;
    /**
      * The unique &#x60;id&#x60; of the federated claim
      * @type string
      * @memberof ApplicationApideleteFederatedClaim
      */
    claimId: string;
}
export interface ApplicationApiDeleteOAuth2ClientSecretRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApideleteOAuth2ClientSecret
      */
    appId: string;
    /**
      * Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      * @type string
      * @memberof ApplicationApideleteOAuth2ClientSecret
      */
    secretId: string;
}
export interface ApplicationApiDeletejwkRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApideletejwk
      */
    appId: string;
    /**
      * Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      * @type string
      * @memberof ApplicationApideletejwk
      */
    keyId: string;
}
export interface ApplicationApiGenerateApplicationKeyRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigenerateApplicationKey
      */
    appId: string;
    /**
      * Expiry years of the Application Key Credential
      * @type number
      * @memberof ApplicationApigenerateApplicationKey
      */
    validityYears: number;
}
export interface ApplicationApiGenerateCsrForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigenerateCsrForApplication
      */
    appId: string;
    /**
      *
      * @type CsrMetadata
      * @memberof ApplicationApigenerateCsrForApplication
      */
    metadata: CsrMetadata;
}
export interface ApplicationApiGetAllCWOConnectionsRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetAllCWOConnections
      */
    appId: string;
}
export interface ApplicationApiGetApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetApplication
      */
    appId: string;
    /**
      * An optional query parameter to return the specified [Application User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/) in the &#x60;_embedded&#x60; property. Valid value: &#x60;expand&#x3D;user/{userId}&#x60;
      * @type string
      * @memberof ApplicationApigetApplication
      */
    expand?: string;
}
export interface ApplicationApiGetApplicationGroupAssignmentRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetApplicationGroupAssignment
      */
    appId: string;
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof ApplicationApigetApplicationGroupAssignment
      */
    groupId: string;
    /**
      * An optional query parameter to return the corresponding assigned [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) or  the group assignment metadata details in the &#x60;_embedded&#x60; property.
      * @type string
      * @memberof ApplicationApigetApplicationGroupAssignment
      */
    expand?: string;
}
export interface ApplicationApiGetApplicationKeyRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetApplicationKey
      */
    appId: string;
    /**
      * ID of the Key Credential for the application
      * @type string
      * @memberof ApplicationApigetApplicationKey
      */
    keyId: string;
}
export interface ApplicationApiGetApplicationUserRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetApplicationUser
      */
    appId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof ApplicationApigetApplicationUser
      */
    userId: string;
    /**
      * An optional query parameter to return the corresponding [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) object in the &#x60;_embedded&#x60; property. Valid value: &#x60;user&#x60;
      * @type string
      * @memberof ApplicationApigetApplicationUser
      */
    expand?: string;
}
export interface ApplicationApiGetCWOConnectionRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetCWOConnection
      */
    appId: string;
    /**
      * Connection ID
      * @type string
      * @memberof ApplicationApigetCWOConnection
      */
    connectionId: string;
}
export interface ApplicationApiGetCsrForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetCsrForApplication
      */
    appId: string;
    /**
      * &#x60;id&#x60; of the CSR
      * @type string
      * @memberof ApplicationApigetCsrForApplication
      */
    csrId: string;
}
export interface ApplicationApiGetDefaultProvisioningConnectionForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetDefaultProvisioningConnectionForApplication
      */
    appId: string;
}
export interface ApplicationApiGetFeatureForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetFeatureForApplication
      */
    appId: string;
    /**
      * Name of the Feature
      * @type ApplicationFeatureType
      * @memberof ApplicationApigetFeatureForApplication
      */
    name: ApplicationFeatureType;
}
export interface ApplicationApiGetFederatedClaimRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetFederatedClaim
      */
    appId: string;
    /**
      * The unique &#x60;id&#x60; of the federated claim
      * @type string
      * @memberof ApplicationApigetFederatedClaim
      */
    claimId: string;
}
export interface ApplicationApiGetJwkRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetJwk
      */
    appId: string;
    /**
      * Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      * @type string
      * @memberof ApplicationApigetJwk
      */
    keyId: string;
}
export interface ApplicationApiGetOAuth2AccessTokenForExpressConfigurationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetOAuth2AccessTokenForExpressConfiguration
      */
    appId: string;
    /**
      * XSRF token
      * @type string
      * @memberof ApplicationApigetOAuth2AccessTokenForExpressConfiguration
      */
    token?: string;
    /**
      * The capability type (for example, &#x60;SSO&#x60;) for which the user intends to perform Express Configuration.
      * @type CapabilityType
      * @memberof ApplicationApigetOAuth2AccessTokenForExpressConfiguration
      */
    capabilityType?: CapabilityType;
}
export interface ApplicationApiGetOAuth2ClientSecretRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetOAuth2ClientSecret
      */
    appId: string;
    /**
      * Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      * @type string
      * @memberof ApplicationApigetOAuth2ClientSecret
      */
    secretId: string;
}
export interface ApplicationApiGetOAuth2TokenForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetOAuth2TokenForApplication
      */
    appId: string;
    /**
      * &#x60;id&#x60; of Token
      * @type string
      * @memberof ApplicationApigetOAuth2TokenForApplication
      */
    tokenId: string;
    /**
      * An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      * @type string
      * @memberof ApplicationApigetOAuth2TokenForApplication
      */
    expand?: string;
}
export interface ApplicationApiGetScopeConsentGrantRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetScopeConsentGrant
      */
    appId: string;
    /**
      * Grant ID
      * @type string
      * @memberof ApplicationApigetScopeConsentGrant
      */
    grantId: string;
    /**
      * An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      * @type string
      * @memberof ApplicationApigetScopeConsentGrant
      */
    expand?: string;
}
export interface ApplicationApiGetUserProvisioningConnectionJWKSRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigetUserProvisioningConnectionJWKS
      */
    appId: string;
}
export interface ApplicationApiGrantConsentToScopeRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApigrantConsentToScope
      */
    appId: string;
    /**
      *
      * @type OAuth2ScopeConsentGrant
      * @memberof ApplicationApigrantConsentToScope
      */
    oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant;
}
export interface ApplicationApiListApplicationGroupAssignmentsRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    appId: string;
    /**
      * Specifies a filter for a list of assigned groups returned based on their names. The value of &#x60;q&#x60; is matched against the group &#x60;name&#x60;.  This filter only supports the &#x60;startsWith&#x60; operation that matches the &#x60;q&#x60; string against the beginning of the [group name](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!c&#x3D;200&amp;path&#x3D;profile/name&amp;t&#x3D;response).
      * @type string
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    q?: string;
    /**
      * Specifies the pagination cursor for the &#x60;next&#x60; page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    after?: string;
    /**
      * Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
      * @type number
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    limit?: number;
    /**
      * An optional query parameter to return the corresponding assigned [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) or  the group assignment metadata details in the &#x60;_embedded&#x60; property.
      * @type string
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    expand?: string;
}
export interface ApplicationApiListApplicationKeysRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistApplicationKeys
      */
    appId: string;
}
export interface ApplicationApiListApplicationUsersRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    appId: string;
    /**
      * Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    after?: string;
    /**
      * Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
      * @type number
      * @memberof ApplicationApilistApplicationUsers
      */
    limit?: number;
    /**
      * Specifies a filter for the list of application users returned based on their profile attributes. The value of &#x60;q&#x60; is matched against the beginning of the following profile attributes: &#x60;userName&#x60;, &#x60;firstName&#x60;, &#x60;lastName&#x60;, and &#x60;email&#x60;. This filter only supports the &#x60;startsWith&#x60; operation that matches the &#x60;q&#x60; string against the beginning of the attribute values. &gt; **Note:** For OIDC apps, user profiles don\&#39;t contain the &#x60;firstName&#x60; or &#x60;lastName&#x60; attributes. Therefore, the query only matches against the &#x60;userName&#x60; or &#x60;email&#x60; attributes.
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    q?: string;
    /**
      * An optional query parameter to return the corresponding [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) object in the &#x60;_embedded&#x60; property. Valid value: &#x60;user&#x60;
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    expand?: string;
}
export interface ApplicationApiListApplicationsRequest {
    /**
      * Searches for apps with &#x60;name&#x60; or &#x60;label&#x60; properties that starts with the &#x60;q&#x60; value using the &#x60;startsWith&#x60; operation
      * @type string
      * @memberof ApplicationApilistApplications
      */
    q?: string;
    /**
      * Specifies the [pagination](/#pagination) cursor for the next page of results. Treat this as an opaque value obtained through the &#x60;next&#x60; link relationship.
      * @type string
      * @memberof ApplicationApilistApplications
      */
    after?: string;
    /**
      * Specifies whether to use query optimization. If you specify &#x60;useOptimization&#x3D;true&#x60; in the request query, the response contains a subset of app instance properties.
      * @type boolean
      * @memberof ApplicationApilistApplications
      */
    useOptimization?: boolean;
    /**
      * Specifies the number of results per page
      * @type number
      * @memberof ApplicationApilistApplications
      */
    limit?: number;
    /**
      * Filters apps by &#x60;status&#x60;, &#x60;user.id&#x60;, &#x60;group.id&#x60;, &#x60;credentials.signing.kid&#x60; or &#x60;name&#x60; expression that supports the &#x60;eq&#x60; operator
      * @type string
      * @memberof ApplicationApilistApplications
      */
    filter?: string;
    /**
      * An optional parameter used for link expansion to embed more resources in the response. Only supports &#x60;expand&#x3D;user/{userId}&#x60; and must be used with the &#x60;user.id eq \&quot;{userId}\&quot;&#x60; filter query for the same user. Returns the assigned [application user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/) in the &#x60;_embedded&#x60; property.
      * @type string
      * @memberof ApplicationApilistApplications
      */
    expand?: string;
    /**
      * Specifies whether to include non-active, but not deleted apps in the results
      * @type boolean
      * @memberof ApplicationApilistApplications
      */
    includeNonDeleted?: boolean;
}
export interface ApplicationApiListCsrsForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistCsrsForApplication
      */
    appId: string;
}
export interface ApplicationApiListFeaturesForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistFeaturesForApplication
      */
    appId: string;
}
export interface ApplicationApiListFederatedClaimsRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistFederatedClaims
      */
    appId: string;
}
export interface ApplicationApiListJwkRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistJwk
      */
    appId: string;
}
export interface ApplicationApiListOAuth2ClientSecretsRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistOAuth2ClientSecrets
      */
    appId: string;
}
export interface ApplicationApiListOAuth2TokensForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistOAuth2TokensForApplication
      */
    appId: string;
    /**
      * An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      * @type string
      * @memberof ApplicationApilistOAuth2TokensForApplication
      */
    expand?: string;
    /**
      * Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
      * @type string
      * @memberof ApplicationApilistOAuth2TokensForApplication
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof ApplicationApilistOAuth2TokensForApplication
      */
    limit?: number;
}
export interface ApplicationApiListScopeConsentGrantsRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApilistScopeConsentGrants
      */
    appId: string;
    /**
      * An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      * @type string
      * @memberof ApplicationApilistScopeConsentGrants
      */
    expand?: string;
}
export interface ApplicationApiPreviewSAMLmetadataForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApipreviewSAMLmetadataForApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApipreviewSAMLmetadataForApplication
      */
    kid: string;
}
export interface ApplicationApiPublishCsrFromApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApipublishCsrFromApplication
      */
    appId: string;
    /**
      * &#x60;id&#x60; of the CSR
      * @type string
      * @memberof ApplicationApipublishCsrFromApplication
      */
    csrId: string;
    /**
      *
      * @type HttpFile
      * @memberof ApplicationApipublishCsrFromApplication
      */
    body: HttpFile;
}
export interface ApplicationApiReplaceApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApireplaceApplication
      */
    appId: string;
    /**
      *
      * @type Application
      * @memberof ApplicationApireplaceApplication
      */
    application: Application;
}
export interface ApplicationApiReplaceFederatedClaimRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApireplaceFederatedClaim
      */
    appId: string;
    /**
      * The unique &#x60;id&#x60; of the federated claim
      * @type string
      * @memberof ApplicationApireplaceFederatedClaim
      */
    claimId: string;
    /**
      *
      * @type FederatedClaim
      * @memberof ApplicationApireplaceFederatedClaim
      */
    federatedClaim?: FederatedClaim;
}
export interface ApplicationApiRevokeCsrFromApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApirevokeCsrFromApplication
      */
    appId: string;
    /**
      * &#x60;id&#x60; of the CSR
      * @type string
      * @memberof ApplicationApirevokeCsrFromApplication
      */
    csrId: string;
}
export interface ApplicationApiRevokeOAuth2TokenForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApirevokeOAuth2TokenForApplication
      */
    appId: string;
    /**
      * &#x60;id&#x60; of Token
      * @type string
      * @memberof ApplicationApirevokeOAuth2TokenForApplication
      */
    tokenId: string;
}
export interface ApplicationApiRevokeOAuth2TokensForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApirevokeOAuth2TokensForApplication
      */
    appId: string;
}
export interface ApplicationApiRevokeScopeConsentGrantRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApirevokeScopeConsentGrant
      */
    appId: string;
    /**
      * Grant ID
      * @type string
      * @memberof ApplicationApirevokeScopeConsentGrant
      */
    grantId: string;
}
export interface ApplicationApiUnassignApplicationFromGroupRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiunassignApplicationFromGroup
      */
    appId: string;
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof ApplicationApiunassignApplicationFromGroup
      */
    groupId: string;
}
export interface ApplicationApiUnassignUserFromApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiunassignUserFromApplication
      */
    appId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof ApplicationApiunassignUserFromApplication
      */
    userId: string;
    /**
      * Sends a deactivation email to the administrator if &#x60;true&#x60;
      * @type boolean
      * @memberof ApplicationApiunassignUserFromApplication
      */
    sendEmail?: boolean;
}
export interface ApplicationApiUpdateApplicationUserRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiupdateApplicationUser
      */
    appId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof ApplicationApiupdateApplicationUser
      */
    userId: string;
    /**
      *
      * @type AppUserUpdateRequest
      * @memberof ApplicationApiupdateApplicationUser
      */
    appUser: AppUserUpdateRequest;
}
export interface ApplicationApiUpdateCWOConnectionRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiupdateCWOConnection
      */
    appId: string;
    /**
      * Connection ID
      * @type string
      * @memberof ApplicationApiupdateCWOConnection
      */
    connectionId: string;
    /**
      *
      * @type OrgCWOConnectionPatchRequest
      * @memberof ApplicationApiupdateCWOConnection
      */
    orgCWOConnectionPatchRequest: OrgCWOConnectionPatchRequest;
}
export interface ApplicationApiUpdateDefaultProvisioningConnectionForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiupdateDefaultProvisioningConnectionForApplication
      */
    appId: string;
    /**
      *
      * @type UpdateDefaultProvisioningConnectionForApplicationRequest
      * @memberof ApplicationApiupdateDefaultProvisioningConnectionForApplication
      */
    ProvisioningConnectionRequest: UpdateDefaultProvisioningConnectionForApplicationRequest;
    /**
      * Activates the provisioning connection
      * @type boolean
      * @memberof ApplicationApiupdateDefaultProvisioningConnectionForApplication
      */
    activate?: boolean;
}
export interface ApplicationApiUpdateFeatureForApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiupdateFeatureForApplication
      */
    appId: string;
    /**
      * Name of the Feature
      * @type ApplicationFeatureType
      * @memberof ApplicationApiupdateFeatureForApplication
      */
    name: ApplicationFeatureType;
    /**
      *
      * @type UpdateFeatureForApplicationRequest
      * @memberof ApplicationApiupdateFeatureForApplication
      */
    CapabilitiesObject: UpdateFeatureForApplicationRequest;
}
export interface ApplicationApiUpdateGroupAssignmentToApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiupdateGroupAssignmentToApplication
      */
    appId: string;
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof ApplicationApiupdateGroupAssignmentToApplication
      */
    groupId: string;
    /**
      *
      * @type Array&lt;JsonPatchOperation&gt;
      * @memberof ApplicationApiupdateGroupAssignmentToApplication
      */
    jsonPatchOperation?: Array<JsonPatchOperation>;
}
export interface ApplicationApiUploadApplicationLogoRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiuploadApplicationLogo
      */
    appId: string;
    /**
      * The image file containing the logo.  The file must be in PNG, JPG, SVG, or GIF format, and less than one MB in size. For best results, use an image with a transparent background and a square dimension of 200 x 200 pixels to prevent upscaling.  &gt; **Notes:** &gt; * Only SVG files encoded in UTF-8 are supported. For example, &#x60;&lt;xml version&#x3D;\\\&quot;1.0\\\&quot; encoding&#x3D;\\\&quot;UTF-8\\\&quot;&gt;&#x60; is a valid SVG file declaration. &gt; * &#x60;multipart/form-data&#x60; isn\\\&#39;t supported for Python. Remove the &#x60;\\\&quot;Content-Type\\\&quot;: \\\&quot;multipart/form-data\\\&quot;&#x60; line if you use the Python request sample code.
      * @type HttpFile
      * @memberof ApplicationApiuploadApplicationLogo
      */
    file: HttpFile;
}
export interface ApplicationApiVerifyProvisioningConnectionForApplicationRequest {
    /**
      *
      * @type OAuthProvisioningEnabledApp
      * @memberof ApplicationApiverifyProvisioningConnectionForApplication
      */
    appName: OAuthProvisioningEnabledApp;
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiverifyProvisioningConnectionForApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiverifyProvisioningConnectionForApplication
      */
    code?: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiverifyProvisioningConnectionForApplication
      */
    state?: string;
}
export interface ApplicationApiVerifyProvisioningConnectionForGoogleApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiverifyProvisioningConnectionForGoogleApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiverifyProvisioningConnectionForGoogleApplication
      */
    code?: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiverifyProvisioningConnectionForGoogleApplication
      */
    state?: string;
}
export interface ApplicationApiVerifyProvisioningConnectionForOfficeApplicationRequest {
    /**
      * Application ID
      * @type string
      * @memberof ApplicationApiverifyProvisioningConnectionForOfficeApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiverifyProvisioningConnectionForOfficeApplication
      */
    code?: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiverifyProvisioningConnectionForOfficeApplication
      */
    state?: string;
}
export declare class ObjectApplicationApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ApplicationApiRequestFactory, responseProcessor?: ApplicationApiResponseProcessor);
  /**
      * Activates an inactive application
      * Activate an application
      * @param param the request object
      */
  activateApplication(param: ApplicationApiActivateApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Activates the default provisioning connection for an app
      * Activate the default provisioning connection
      * @param param the request object
      */
  activateDefaultProvisioningConnectionForApplication(param: ApplicationApiActivateDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Activates an OAuth 2.0 Client JSON Web Key by `keyId`
      * Activate an OAuth 2.0 client JSON Web Key
      * @param param the request object
      */
  activateOAuth2ClientJsonWebKey(param: ApplicationApiActivateOAuth2ClientJsonWebKeyRequest, options?: Configuration): Promise<OAuth2ClientJsonWebKey>;
  /**
      * Activates an OAuth 2.0 Client Secret by `secretId`
      * Activate an OAuth 2.0 client secret
      * @param param the request object
      */
  activateOAuth2ClientSecret(param: ApplicationApiActivateOAuth2ClientSecretRequest, options?: Configuration): Promise<OAuth2ClientSecret>;
  /**
      * Adds a new JSON Web Key to the client`s JSON Web Keys. > **Note:** This API doesn\'t allow you to add a key if the existing key doesn\'t have a `kid`. This is also consistent with how the [Dynamic Client Registration](/openapi/okta-oauth/oauth/tag/Client/) or [Applications](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/) APIs behave, as they don\'t allow the creation of multiple keys without `kids`. Use the [Replace an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) or the [Replace a Client Application](/openapi/okta-oauth/oauth/tag/Client/#tag/Client/operation/replaceClient) operation to update the JWKS or [Delete an OAuth 2.0 Client JSON Web Key](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationSSOCredentialOAuth2ClientAuth/#tag/ApplicationSSOCredentialOAuth2ClientAuth/operation/deletejwk) and re-add the key with a `kid`.
      * Add a JSON Web Key
      * @param param the request object
      */
  addJwk(param: ApplicationApiAddJwkRequest, options?: Configuration): Promise<OAuth2ClientJsonWebKey>;
  /**
      * Assigns an app to an [authentication policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/), identified by `policyId`. If the app was previously assigned to another policy, this operation replaces that assignment with the updated policy identified by `policyId`.  > **Note:** When you [merge duplicate authentication policies](https://help.okta.com/okta_help.htm?type=oie&id=ext-merge-auth-policies), the policy and mapping CRUD operations may be unavailable during the consolidation. When the consolidation is complete, you receive an email with merged results.
      * Assign an authentication policy
      * @param param the request object
      */
  assignApplicationPolicy(param: ApplicationApiAssignApplicationPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a [Group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) to an app, which in turn assigns the app to each [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) that belongs to the group.  The resulting application user [scope](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/#tag/ApplicationUsers/operation/listApplicationUsers!c=200&path=scope&t=response) is `GROUP` since the assignment was from the group membership.
      * Assign an application group
      * @param param the request object
      */
  assignGroupToApplication(param: ApplicationApiAssignGroupToApplicationRequest, options?: Configuration): Promise<ApplicationGroupAssignment>;
  /**
      * Assigns a user to an app for:    * SSO only<br>     Assignments to SSO apps typically don\'t include a user profile.     However, if your SSO app requires a profile but doesn\'t have provisioning enabled, you can add profile attributes in the request body.    * SSO and provisioning<br>     Assignments to SSO and provisioning apps typically include credentials and an app-specific profile.     Profile mappings defined for the app are applied first before applying any profile properties that are specified in the request body.     > **Notes:**     > * When Universal Directory is enabled, you can only specify profile properties that aren\'t defined in profile mappings.     > * Omit mapped properties during assignment to minimize assignment errors.
      * Assign an application user
      * @param param the request object
      */
  assignUserToApplication(param: ApplicationApiAssignUserToApplicationRequest, options?: Configuration): Promise<AppUser>;
  /**
      * Clones an X.509 certificate for an Application Key Credential from a source app to a target app.  For step-by-step instructions to clone a credential, see [Share application key credentials for IdPs across apps](https://developer.okta.com/docs/guides/sharing-cert/main/). > **Note:** Sharing certificates isn\'t a recommended security practice.
      * Clone a key credential
      * @param param the request object
      */
  cloneApplicationKey(param: ApplicationApiCloneApplicationKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Configures a capability (`SSO` or `PROVISIONING`) in the app instance by automatically exchanging configuration information.
      * Configure a capability in the app instance
      * @param param the request object
      */
  configureCapabilityApplication(param: ApplicationApiConfigureCapabilityApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Creates an app instance in your Okta org.  You can either create an OIN app instance or a custom app instance: * OIN app instances have prescribed `name` (key app definition) and `signOnMode` options. See the [OIN schemas](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/schema/GoogleApplication) for the request body. * For custom app instances, select the [signOnMode](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=0/signOnMode&t=request) that pertains to your app and specify the required parameters in the request body.
      * Create an application
      * @param param the request object
      */
  createApplication(param: ApplicationApiCreateApplicationRequest, options?: Configuration): Promise<Application>;
  /**
      * Creates a CWO connection
      * Create a CWO connection
      * @param param the request object
      */
  createCWOConnection(param: ApplicationApiCreateCWOConnectionRequest, options?: Configuration): Promise<OrgCWOConnection>;
  /**
      * Creates a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
      * Create a federated claim
      * @param param the request object
      */
  createFederatedClaim(param: ApplicationApiCreateFederatedClaimRequest, options?: Configuration): Promise<FederatedClaim>;
  /**
      * Creates an OAuth 2.0 Client Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects. > **Note:** This API lets you bring your own secret. If [token_endpoint_auth_method](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=4/credentials/oauthClient/token_endpoint_auth_method&t=request) of the app is `client_secret_jwt`, then the minimum length of `client_secret` is 32 characters. If no secret is specified in the request, Okta adds a new system-generated secret.
      * Create an OAuth 2.0 client secret
      * @param param the request object
      */
  createOAuth2ClientSecret(param: ApplicationApiCreateOAuth2ClientSecretRequest, options?: Configuration): Promise<OAuth2ClientSecret>;
  /**
      * Deactivates an active application
      * Deactivate an application
      * @param param the request object
      */
  deactivateApplication(param: ApplicationApiDeactivateApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates the default provisioning connection for an app
      * Deactivate the default provisioning connection
      * @param param the request object
      */
  deactivateDefaultProvisioningConnectionForApplication(param: ApplicationApiDeactivateDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates an OAuth 2.0 Client JSON Web Key by `keyId`.
      * Deactivate an OAuth 2.0 client JSON Web Key
      * @param param the request object
      */
  deactivateOAuth2ClientJsonWebKey(param: ApplicationApiDeactivateOAuth2ClientJsonWebKeyRequest, options?: Configuration): Promise<OAuth2ClientJsonWebKey>;
  /**
      * Deactivates an OAuth 2.0 Client Secret by `secretId`. You can\'t deactivate a secret if it\'s the only secret of the client.
      * Deactivate an OAuth 2.0 client secret
      * @param param the request object
      */
  deactivateOAuth2ClientSecret(param: ApplicationApiDeactivateOAuth2ClientSecretRequest, options?: Configuration): Promise<OAuth2ClientSecret>;
  /**
      * Deletes an inactive application
      * Delete an application
      * @param param the request object
      */
  deleteApplication(param: ApplicationApiDeleteApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a CWO connection
      * Delete a CWO connection
      * @param param the request object
      */
  deleteCWOConnection(param: ApplicationApiDeleteCWOConnectionRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a federated claim by `claimId`
      * Delete a federated claim
      * @param param the request object
      */
  deleteFederatedClaim(param: ApplicationApiDeleteFederatedClaimRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an OAuth 2.0 Client Secret by `secretId`. You can only delete an inactive Secret.
      * Delete an OAuth 2.0 client secret
      * @param param the request object
      */
  deleteOAuth2ClientSecret(param: ApplicationApiDeleteOAuth2ClientSecretRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an OAuth 2.0 Client JSON Web Key by `keyId`. You can only delete an inactive key.
      * Delete an OAuth 2.0 client JSON Web Key
      * @param param the request object
      */
  deletejwk(param: ApplicationApiDeletejwkRequest, options?: Configuration): Promise<void>;
  /**
      * Generates a new X.509 certificate for an app key credential > **Note:** To update an Application with the newly generated key credential, use the [Replace an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) request with the new [credentials.signing.kid](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing/kid&t=request) value in the request body. You can provide just the [Signing Credential object](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing&t=request) instead of the entire [Application Credential object](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials&t=request).
      * Generate a key credential
      * @param param the request object
      */
  generateApplicationKey(param: ApplicationApiGenerateApplicationKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Generates a new key pair and returns the Certificate Signing Request(CSR) for it. The information in a CSR is used by the Certificate Authority (CA) to verify and create your certificate. It also contains the public key that is included in your certificate.  Returns CSR in `pkcs#10` format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`. > **Note:** The key pair isn\'t listed in the Key Credentials for the app until it\'s published.
      * Generate a certificate signing request
      * @param param the request object
      */
  generateCsrForApplication(param: ApplicationApiGenerateCsrForApplicationRequest, options?: Configuration): Promise<string>;
  /**
      * Retrieves inbound and outbound CWO connections for a given app
      * Retrieve all CWO connections
      * @param param the request object
      */
  getAllCWOConnections(param: ApplicationApiGetAllCWOConnectionsRequest, options?: Configuration): Promise<Collection<OrgCWOConnection>>;
  /**
      * Retrieves an application from your Okta organization by `id`
      * Retrieve an application
      * @param param the request object
      */
  getApplication(param: ApplicationApiGetApplicationRequest, options?: Configuration): Promise<Application>;
  /**
      * Retrieves an app group assignment
      * Retrieve an application group
      * @param param the request object
      */
  getApplicationGroupAssignment(param: ApplicationApiGetApplicationGroupAssignmentRequest, options?: Configuration): Promise<ApplicationGroupAssignment>;
  /**
      * Retrieves a specific Application Key Credential by `kid`
      * Retrieve a key credential
      * @param param the request object
      */
  getApplicationKey(param: ApplicationApiGetApplicationKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Retrieves a specific user assignment for a specific app
      * Retrieve an application user
      * @param param the request object
      */
  getApplicationUser(param: ApplicationApiGetApplicationUserRequest, options?: Configuration): Promise<AppUser>;
  /**
      * Retrieves a CWO connection for an app
      * Retrieve a CWO connection
      * @param param the request object
      */
  getCWOConnection(param: ApplicationApiGetCWOConnectionRequest, options?: Configuration): Promise<OrgCWOConnection>;
  /**
      * Retrieves a Certificate Signing Request (CSR) for the app by `csrId`.  Returns a Base64-encoded CSR in DER format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`.
      * Retrieve a certificate signing request
      * @param param the request object
      */
  getCsrForApplication(param: ApplicationApiGetCsrForApplicationRequest, options?: Configuration): Promise<Csr>;
  /**
      * Retrieves the default provisioning connection for an app
      * Retrieve the default provisioning connection
      * @param param the request object
      */
  getDefaultProvisioningConnectionForApplication(param: ApplicationApiGetDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<ProvisioningConnectionResponse>;
  /**
      * Retrieves a Feature object for an app
      * Retrieve a feature
      * @param param the request object
      */
  getFeatureForApplication(param: ApplicationApiGetFeatureForApplicationRequest, options?: Configuration): Promise<ApplicationFeature>;
  /**
      * Retrieves a federated claim by `claimId`
      * Retrieve a federated claim
      * @param param the request object
      */
  getFederatedClaim(param: ApplicationApiGetFederatedClaimRequest, options?: Configuration): Promise<FederatedClaimRequestBody>;
  /**
      * Retrieves an OAuth 2.0 Client JSON Web Key by `keyId`.
      * Retrieve an OAuth 2.0 client JSON Web Key
      * @param param the request object
      */
  getJwk(param: ApplicationApiGetJwkRequest, options?: Configuration): Promise<OAuth2ClientJsonWebKey>;
  /**
      * Retrieves the OAuth 2.0 authorization code from the app\'s authorization server. Use this authorization code to exchange for an access token through another endpoint to enable Express Configuration on behalf of the user.
      * Retrieve the OAuth 2.0 authorization code for Express Configuration.
      * @param param the request object
      */
  getOAuth2AccessTokenForExpressConfiguration(param: ApplicationApiGetOAuth2AccessTokenForExpressConfigurationRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an OAuth 2.0 Client Secret by `secretId`
      * Retrieve an OAuth 2.0 client secret
      * @param param the request object
      */
  getOAuth2ClientSecret(param: ApplicationApiGetOAuth2ClientSecretRequest, options?: Configuration): Promise<OAuth2ClientSecret>;
  /**
      * Retrieves a refresh token for the specified app
      * Retrieve an application token
      * @param param the request object
      */
  getOAuth2TokenForApplication(param: ApplicationApiGetOAuth2TokenForApplicationRequest, options?: Configuration): Promise<OAuth2RefreshToken>;
  /**
      * Retrieves a single scope consent Grant object for the app
      * Retrieve an app grant
      * @param param the request object
      */
  getScopeConsentGrant(param: ApplicationApiGetScopeConsentGrantRequest, options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Retrieves a JWKS for the default provisioning connection.  This can be used by the OAuth 2.0 app\'s `jwk_uri` property in the target org.
      * Retrieve a JSON Web Key Set (JWKS) for the default provisioning connection
      * @param param the request object
      */
  getUserProvisioningConnectionJWKS(param: ApplicationApiGetUserProvisioningConnectionJWKSRequest, options?: Configuration): Promise<AppConnectionUserProvisionJWKResponse>;
  /**
      * Grants consent for the app to request an OAuth 2.0 Okta scope
      * Grant consent to scope
      * @param param the request object
      */
  grantConsentToScope(param: ApplicationApiGrantConsentToScopeRequest, options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Lists all app group assignments
      * List all application groups
      * @param param the request object
      */
  listApplicationGroupAssignments(param: ApplicationApiListApplicationGroupAssignmentsRequest, options?: Configuration): Promise<Collection<ApplicationGroupAssignment>>;
  /**
      * Lists all key credentials for an app
      * List all key credentials
      * @param param the request object
      */
  listApplicationKeys(param: ApplicationApiListApplicationKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Lists all assigned users for an app
      * List all application users
      * @param param the request object
      */
  listApplicationUsers(param: ApplicationApiListApplicationUsersRequest, options?: Configuration): Promise<Collection<AppUser>>;
  /**
      * Lists all apps in the org with pagination. A subset of apps can be returned that match a supported filter expression or query. The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the header contains a `next` link. Treat the link as an opaque value (follow it, don\'t parse it).  > **Note:** To list all of a member\'s assigned app links, use the [List all assigned app links endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listAppLinks).
      * List all applications
      * @param param the request object
      */
  listApplications(param?: ApplicationApiListApplicationsRequest, options?: Configuration): Promise<Collection<Application>>;
  /**
      * Lists all Certificate Signing Requests for an application
      * List all certificate signing requests
      * @param param the request object
      */
  listCsrsForApplication(param: ApplicationApiListCsrsForApplicationRequest, options?: Configuration): Promise<Collection<Csr>>;
  /**
      * Lists all features for an app > **Note:** This request returns an error if provisioning isn\'t enabled for the app. > To set up provisioning, see [Update the default provisioning connection](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationConnections/#tag/ApplicationConnections/operation/updateDefaultProvisioningConnectionForApplication).
      * List all features
      * @param param the request object
      */
  listFeaturesForApplication(param: ApplicationApiListFeaturesForApplicationRequest, options?: Configuration): Promise<Collection<ApplicationFeature>>;
  /**
      * Lists all federated claims for your app
      * List all configured federated claims
      * @param param the request object
      */
  listFederatedClaims(param: ApplicationApiListFederatedClaimsRequest, options?: Configuration): Promise<Collection<FederatedClaim>>;
  /**
      * Lists all JSON Web Keys for an OAuth 2.0 client app
      * List all the OAuth 2.0 client JSON Web Keys
      * @param param the request object
      */
  listJwk(param: ApplicationApiListJwkRequest, options?: Configuration): Promise<Collection<OAuth2ClientJsonWebKey>>;
  /**
      * Lists all client secrets for an OAuth 2.0 client app
      * List all OAuth 2.0 client secrets
      * @param param the request object
      */
  listOAuth2ClientSecrets(param: ApplicationApiListOAuth2ClientSecretsRequest, options?: Configuration): Promise<Collection<OAuth2ClientSecret>>;
  /**
      * Lists all refresh tokens for an app  > **Note:** The results are [paginated](/#pagination) according to the `limit` parameter. > If there are multiple pages of results, the Link header contains a `next` link that you need to use as an opaque value (follow it, don\'t parse it).
      * List all application refresh tokens
      * @param param the request object
      */
  listOAuth2TokensForApplication(param: ApplicationApiListOAuth2TokensForApplicationRequest, options?: Configuration): Promise<Collection<OAuth2RefreshToken>>;
  /**
      * Lists all scope consent Grants for the app
      * List all app grants
      * @param param the request object
      */
  listScopeConsentGrants(param: ApplicationApiListScopeConsentGrantsRequest, options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Previews the SSO SAML metadata for an application
      * Preview the application SAML metadata
      * @param param the request object
      */
  previewSAMLmetadataForApplication(param: ApplicationApiPreviewSAMLmetadataForApplicationRequest, options?: Configuration): Promise<string>;
  /**
      * Publishes a Certificate Signing Request (CSR) for the app with a signed X.509 certificate and adds it into the Application Key Credentials. > **Note:** Publishing a certificate completes the lifecycle of the CSR and it\'s no longer accessible.
      * Publish a certificate signing request
      * @param param the request object
      */
  publishCsrFromApplication(param: ApplicationApiPublishCsrFromApplicationRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Replaces properties for an application > **Notes:** > * All required properties must be specified in the request body > * You can\'t modify system-assigned properties, such as `id`, `name`, `status`, `created`, and `lastUpdated`. The values for these properties in the PUT request body are ignored.
      * Replace an application
      * @param param the request object
      */
  replaceApplication(param: ApplicationApiReplaceApplicationRequest, options?: Configuration): Promise<Application>;
  /**
      * Replaces a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
      * Replace a federated claim
      * @param param the request object
      */
  replaceFederatedClaim(param: ApplicationApiReplaceFederatedClaimRequest, options?: Configuration): Promise<FederatedClaim>;
  /**
      * Revokes a Certificate Signing Request and deletes the key pair from the app
      * Revoke a certificate signing request
      * @param param the request object
      */
  revokeCsrFromApplication(param: ApplicationApiRevokeCsrFromApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes the specified token for the specified app
      * Revoke an application token
      * @param param the request object
      */
  revokeOAuth2TokenForApplication(param: ApplicationApiRevokeOAuth2TokenForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all OAuth 2.0 refresh tokens for the specified app. Any access tokens issued with these refresh tokens are also revoked, but access tokens issued without a refresh token aren\'t affected.
      * Revoke all application tokens
      * @param param the request object
      */
  revokeOAuth2TokensForApplication(param: ApplicationApiRevokeOAuth2TokensForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes permission for the app to grant the given scope
      * Revoke an app grant
      * @param param the request object
      */
  revokeScopeConsentGrant(param: ApplicationApiRevokeScopeConsentGrantRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a Group from an app
      * Unassign an application group
      * @param param the request object
      */
  unassignApplicationFromGroup(param: ApplicationApiUnassignApplicationFromGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a user from an app  For directories like Active Directory and LDAP, they act as the owner of the user\'s credential with Okta delegating authentication (DelAuth) to that directory. If this request is successful for a user when DelAuth is enabled, then the user is in a state with no password. You can then reset the user\'s password.  > **Important:** This is a destructive operation. You can\'t recover the user\'s app profile. If the app is enabled for provisioning and configured to deactivate users, the user is also deactivated in the target app.
      * Unassign an application user
      * @param param the request object
      */
  unassignUserFromApplication(param: ApplicationApiUnassignUserFromApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Updates the profile or credentials of a user assigned to an app
      * Update an application user
      * @param param the request object
      */
  updateApplicationUser(param: ApplicationApiUpdateApplicationUserRequest, options?: Configuration): Promise<AppUser>;
  /**
      * Updates a CWO connection
      * Update a CWO connection
      * @param param the request object
      */
  updateCWOConnection(param: ApplicationApiUpdateCWOConnectionRequest, options?: Configuration): Promise<OrgCWOConnection>;
  /**
      * Updates the default provisioning connection for an app
      * Update the default provisioning connection
      * @param param the request object
      */
  updateDefaultProvisioningConnectionForApplication(param: ApplicationApiUpdateDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<ProvisioningConnectionResponse>;
  /**
      * Updates a Feature object for an app > **Note:** This endpoint supports partial updates.
      * Update a feature
      * @param param the request object
      */
  updateFeatureForApplication(param: ApplicationApiUpdateFeatureForApplicationRequest, options?: Configuration): Promise<ApplicationFeature>;
  /**
      * Updates a group assignment to an app
      * Update an application group
      * @param param the request object
      */
  updateGroupAssignmentToApplication(param: ApplicationApiUpdateGroupAssignmentToApplicationRequest, options?: Configuration): Promise<ApplicationGroupAssignment>;
  /**
      * Uploads a logo for the app instance. If the app already has a logo, this operation replaces the previous logo.  The logo is visible in the Admin Console as an icon for your app instance. If you have one `appLink` object configured, this logo also appears in the End-User Dashboard as an icon for your app. > **Note:** If you have multiple `appLink` objects, use the Admin Console to add logos for each app link. > You can\'t use the API to add logos for multiple app links.
      * Upload an application logo
      * @param param the request object
      */
  uploadApplicationLogo(param: ApplicationApiUploadApplicationLogoRequest, options?: Configuration): Promise<void>;
  /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for an OAuth 2.0-based connection. Currently, this operation only supports `office365`,`google`, `zoomus`, and `slack` apps.
      * Verify the provisioning connection
      * @param param the request object
      */
  verifyProvisioningConnectionForApplication(param: ApplicationApiVerifyProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Google Workspace (`google`) OAuth 2.0-based connection.
      * Verify the provisioning connection for Google Workspace
      * @param param the request object
      */
  verifyProvisioningConnectionForGoogleApplication(param: ApplicationApiVerifyProvisioningConnectionForGoogleApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Microsoft Office 365 (`office365`) OAuth 2.0-based connection.
      * Verify the provisioning connection for Microsoft Office 365
      * @param param the request object
      */
  verifyProvisioningConnectionForOfficeApplication(param: ApplicationApiVerifyProvisioningConnectionForOfficeApplicationRequest, options?: Configuration): Promise<void>;
}
import { AttackProtectionApiRequestFactory, AttackProtectionApiResponseProcessor } from '../apis/AttackProtectionApi';
export interface AttackProtectionApiGetAuthenticatorSettingsRequest {
}
export interface AttackProtectionApiGetUserLockoutSettingsRequest {
}
export interface AttackProtectionApiReplaceAuthenticatorSettingsRequest {
    /**
      *
      * @type AttackProtectionAuthenticatorSettings
      * @memberof AttackProtectionApireplaceAuthenticatorSettings
      */
    authenticatorSettings: AttackProtectionAuthenticatorSettings;
}
export interface AttackProtectionApiReplaceUserLockoutSettingsRequest {
    /**
      *
      * @type UserLockoutSettings
      * @memberof AttackProtectionApireplaceUserLockoutSettings
      */
    lockoutSettings: UserLockoutSettings;
}
export declare class ObjectAttackProtectionApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AttackProtectionApiRequestFactory, responseProcessor?: AttackProtectionApiResponseProcessor);
  /**
      * Retrieves the Authenticator Settings for an org
      * Retrieve the authenticator settings
      * @param param the request object
      */
  getAuthenticatorSettings(param?: AttackProtectionApiGetAuthenticatorSettingsRequest, options?: Configuration): Promise<Collection<AttackProtectionAuthenticatorSettings>>;
  /**
      * Retrieves the User Lockout Settings for an org
      * Retrieve the user lockout settings
      * @param param the request object
      */
  getUserLockoutSettings(param?: AttackProtectionApiGetUserLockoutSettingsRequest, options?: Configuration): Promise<Collection<UserLockoutSettings>>;
  /**
      * Replaces the Authenticator Settings for an org
      * Replace the authenticator settings
      * @param param the request object
      */
  replaceAuthenticatorSettings(param: AttackProtectionApiReplaceAuthenticatorSettingsRequest, options?: Configuration): Promise<AttackProtectionAuthenticatorSettings>;
  /**
      * Replaces the User Lockout Settings for an org
      * Replace the user lockout settings
      * @param param the request object
      */
  replaceUserLockoutSettings(param: AttackProtectionApiReplaceUserLockoutSettingsRequest, options?: Configuration): Promise<UserLockoutSettings>;
}
import { AuthenticatorApiRequestFactory, AuthenticatorApiResponseProcessor } from '../apis/AuthenticatorApi';
export interface AuthenticatorApiActivateAuthenticatorRequest {
    /**
      * &#x60;id&#x60; of the authenticator
      * @type string
      * @memberof AuthenticatorApiactivateAuthenticator
      */
    authenticatorId: string;
}
export interface AuthenticatorApiActivateAuthenticatorMethodRequest {
    /**
      * &#x60;id&#x60; of the authenticator
      * @type string
      * @memberof AuthenticatorApiactivateAuthenticatorMethod
      */
    authenticatorId: string;
    /**
      * Type of authenticator method
      * @type AuthenticatorMethodType
      * @memberof AuthenticatorApiactivateAuthenticatorMethod
      */
    methodType: AuthenticatorMethodType;
}
export interface AuthenticatorApiCreateAuthenticatorRequest {
    /**
      *
      * @type AuthenticatorBase
      * @memberof AuthenticatorApicreateAuthenticator
      */
    authenticator: AuthenticatorBase;
    /**
      * Whether to execute the activation lifecycle operation when Okta creates the authenticator
      * @type boolean
      * @memberof AuthenticatorApicreateAuthenticator
      */
    activate?: boolean;
}
export interface AuthenticatorApiDeactivateAuthenticatorRequest {
    /**
      * &#x60;id&#x60; of the authenticator
      * @type string
      * @memberof AuthenticatorApideactivateAuthenticator
      */
    authenticatorId: string;
}
export interface AuthenticatorApiDeactivateAuthenticatorMethodRequest {
    /**
      * &#x60;id&#x60; of the authenticator
      * @type string
      * @memberof AuthenticatorApideactivateAuthenticatorMethod
      */
    authenticatorId: string;
    /**
      * Type of authenticator method
      * @type AuthenticatorMethodType
      * @memberof AuthenticatorApideactivateAuthenticatorMethod
      */
    methodType: AuthenticatorMethodType;
}
export interface AuthenticatorApiGetAuthenticatorRequest {
    /**
      * &#x60;id&#x60; of the authenticator
      * @type string
      * @memberof AuthenticatorApigetAuthenticator
      */
    authenticatorId: string;
}
export interface AuthenticatorApiGetAuthenticatorMethodRequest {
    /**
      * &#x60;id&#x60; of the authenticator
      * @type string
      * @memberof AuthenticatorApigetAuthenticatorMethod
      */
    authenticatorId: string;
    /**
      * Type of authenticator method
      * @type AuthenticatorMethodType
      * @memberof AuthenticatorApigetAuthenticatorMethod
      */
    methodType: AuthenticatorMethodType;
}
export interface AuthenticatorApiGetWellKnownAppAuthenticatorConfigurationRequest {
    /**
      * Filters app authenticator configurations by &#x60;oauthClientId&#x60;
      * @type string
      * @memberof AuthenticatorApigetWellKnownAppAuthenticatorConfiguration
      */
    oauthClientId: string;
}
export interface AuthenticatorApiListAuthenticatorMethodsRequest {
    /**
      * &#x60;id&#x60; of the authenticator
      * @type string
      * @memberof AuthenticatorApilistAuthenticatorMethods
      */
    authenticatorId: string;
}
export interface AuthenticatorApiListAuthenticatorsRequest {
}
export interface AuthenticatorApiReplaceAuthenticatorRequest {
    /**
      * &#x60;id&#x60; of the authenticator
      * @type string
      * @memberof AuthenticatorApireplaceAuthenticator
      */
    authenticatorId: string;
    /**
      *
      * @type AuthenticatorBase
      * @memberof AuthenticatorApireplaceAuthenticator
      */
    authenticator: AuthenticatorBase;
}
export interface AuthenticatorApiReplaceAuthenticatorMethodRequest {
    /**
      * &#x60;id&#x60; of the authenticator
      * @type string
      * @memberof AuthenticatorApireplaceAuthenticatorMethod
      */
    authenticatorId: string;
    /**
      * Type of authenticator method
      * @type AuthenticatorMethodType
      * @memberof AuthenticatorApireplaceAuthenticatorMethod
      */
    methodType: AuthenticatorMethodType;
    /**
      *
      * @type AuthenticatorMethodBase
      * @memberof AuthenticatorApireplaceAuthenticatorMethod
      */
    authenticatorMethodBase?: AuthenticatorMethodBase;
}
export declare class ObjectAuthenticatorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AuthenticatorApiRequestFactory, responseProcessor?: AuthenticatorApiResponseProcessor);
  /**
      * Activates an authenticator by `authenticatorId`
      * Activate an authenticator
      * @param param the request object
      */
  activateAuthenticator(param: AuthenticatorApiActivateAuthenticatorRequest, options?: Configuration): Promise<AuthenticatorBase>;
  /**
      * Activates a method for an authenticator identified by `authenticatorId` and `methodType`
      * Activate an authenticator method
      * @param param the request object
      */
  activateAuthenticatorMethod(param: AuthenticatorApiActivateAuthenticatorMethodRequest, options?: Configuration): Promise<AuthenticatorMethodBase>;
  /**
      * Creates an authenticator
      * Create an authenticator
      * @param param the request object
      */
  createAuthenticator(param: AuthenticatorApiCreateAuthenticatorRequest, options?: Configuration): Promise<AuthenticatorBase>;
  /**
      * Deactivates an authenticator by `authenticatorId`
      * Deactivate an authenticator
      * @param param the request object
      */
  deactivateAuthenticator(param: AuthenticatorApiDeactivateAuthenticatorRequest, options?: Configuration): Promise<AuthenticatorBase>;
  /**
      * Deactivates a method for an authenticator identified by `authenticatorId` and `methodType`
      * Deactivate an authenticator method
      * @param param the request object
      */
  deactivateAuthenticatorMethod(param: AuthenticatorApiDeactivateAuthenticatorMethodRequest, options?: Configuration): Promise<AuthenticatorMethodBase>;
  /**
      * Retrieves an authenticator from your Okta organization by `authenticatorId`
      * Retrieve an authenticator
      * @param param the request object
      */
  getAuthenticator(param: AuthenticatorApiGetAuthenticatorRequest, options?: Configuration): Promise<AuthenticatorBase>;
  /**
      * Retrieves a method identified by `methodType` of an authenticator identified by `authenticatorId`
      * Retrieve an authenticator method
      * @param param the request object
      */
  getAuthenticatorMethod(param: AuthenticatorApiGetAuthenticatorMethodRequest, options?: Configuration): Promise<AuthenticatorMethodBase>;
  /**
      * Retrieves the well-known app authenticator configuration. Includes an app authenticator\'s settings, supported methods, and other details.
      * Retrieve the well-known app authenticator configuration
      * @param param the request object
      */
  getWellKnownAppAuthenticatorConfiguration(param: AuthenticatorApiGetWellKnownAppAuthenticatorConfigurationRequest, options?: Configuration): Promise<Collection<WellKnownAppAuthenticatorConfiguration>>;
  /**
      * Lists all methods of an authenticator identified by `authenticatorId`
      * List all methods of an authenticator
      * @param param the request object
      */
  listAuthenticatorMethods(param: AuthenticatorApiListAuthenticatorMethodsRequest, options?: Configuration): Promise<Collection<AuthenticatorMethodBase>>;
  /**
      * Lists all authenticators
      * List all authenticators
      * @param param the request object
      */
  listAuthenticators(param?: AuthenticatorApiListAuthenticatorsRequest, options?: Configuration): Promise<Collection<AuthenticatorBase>>;
  /**
      * Replaces the properties for an authenticator identified by `authenticatorId`
      * Replace an authenticator
      * @param param the request object
      */
  replaceAuthenticator(param: AuthenticatorApiReplaceAuthenticatorRequest, options?: Configuration): Promise<AuthenticatorBase>;
  /**
      * Replaces a method of `methodType` for an authenticator identified by `authenticatorId`
      * Replace an authenticator method
      * @param param the request object
      */
  replaceAuthenticatorMethod(param: AuthenticatorApiReplaceAuthenticatorMethodRequest, options?: Configuration): Promise<AuthenticatorMethodBase>;
}
import { AuthorizationServerApiRequestFactory, AuthorizationServerApiResponseProcessor } from '../apis/AuthorizationServerApi';
export interface AuthorizationServerApiActivateAuthorizationServerRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiActivateAuthorizationServerPolicyRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicy
      */
    policyId: string;
}
export interface AuthorizationServerApiActivateAuthorizationServerPolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicyRule
      */
    ruleId: string;
}
export interface AuthorizationServerApiCreateAssociatedServersRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApicreateAssociatedServers
      */
    authServerId: string;
    /**
      *
      * @type AssociatedServerMediated
      * @memberof AuthorizationServerApicreateAssociatedServers
      */
    associatedServerMediated: AssociatedServerMediated;
}
export interface AuthorizationServerApiCreateAuthorizationServerRequest {
    /**
      *
      * @type AuthorizationServer
      * @memberof AuthorizationServerApicreateAuthorizationServer
      */
    authorizationServer: AuthorizationServer;
}
export interface AuthorizationServerApiCreateAuthorizationServerPolicyRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApicreateAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      *
      * @type AuthorizationServerPolicy
      * @memberof AuthorizationServerApicreateAuthorizationServerPolicy
      */
    policy: AuthorizationServerPolicy;
}
export interface AuthorizationServerApiCreateAuthorizationServerPolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApicreateAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApicreateAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      *
      * @type AuthorizationServerPolicyRuleRequest
      * @memberof AuthorizationServerApicreateAuthorizationServerPolicyRule
      */
    policyRule: AuthorizationServerPolicyRuleRequest;
}
export interface AuthorizationServerApiCreateOAuth2ClaimRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApicreateOAuth2Claim
      */
    authServerId: string;
    /**
      *
      * @type OAuth2Claim
      * @memberof AuthorizationServerApicreateOAuth2Claim
      */
    oAuth2Claim: OAuth2Claim;
}
export interface AuthorizationServerApiCreateOAuth2ScopeRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApicreateOAuth2Scope
      */
    authServerId: string;
    /**
      *
      * @type OAuth2Scope
      * @memberof AuthorizationServerApicreateOAuth2Scope
      */
    oAuth2Scope: OAuth2Scope;
}
export interface AuthorizationServerApiDeactivateAuthorizationServerRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiDeactivateAuthorizationServerPolicyRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicy
      */
    policyId: string;
}
export interface AuthorizationServerApiDeactivateAuthorizationServerPolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicyRule
      */
    ruleId: string;
}
export interface AuthorizationServerApiDeleteAssociatedServerRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApideleteAssociatedServer
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the associated Authorization Server
      * @type string
      * @memberof AuthorizationServerApideleteAssociatedServer
      */
    associatedServerId: string;
}
export interface AuthorizationServerApiDeleteAuthorizationServerRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiDeleteAuthorizationServerPolicyRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicy
      */
    policyId: string;
}
export interface AuthorizationServerApiDeleteAuthorizationServerPolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicyRule
      */
    ruleId: string;
}
export interface AuthorizationServerApiDeleteOAuth2ClaimRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApideleteOAuth2Claim
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of Claim
      * @type string
      * @memberof AuthorizationServerApideleteOAuth2Claim
      */
    claimId: string;
}
export interface AuthorizationServerApiDeleteOAuth2ScopeRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApideleteOAuth2Scope
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of Scope
      * @type string
      * @memberof AuthorizationServerApideleteOAuth2Scope
      */
    scopeId: string;
}
export interface AuthorizationServerApiGetAuthorizationServerRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiGetAuthorizationServerKeyRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerKey
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the certificate key
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerKey
      */
    keyId: string;
}
export interface AuthorizationServerApiGetAuthorizationServerPolicyRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicy
      */
    policyId: string;
}
export interface AuthorizationServerApiGetAuthorizationServerPolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicyRule
      */
    ruleId: string;
}
export interface AuthorizationServerApiGetOAuth2ClaimRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApigetOAuth2Claim
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of Claim
      * @type string
      * @memberof AuthorizationServerApigetOAuth2Claim
      */
    claimId: string;
}
export interface AuthorizationServerApiGetOAuth2ScopeRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApigetOAuth2Scope
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of Scope
      * @type string
      * @memberof AuthorizationServerApigetOAuth2Scope
      */
    scopeId: string;
}
export interface AuthorizationServerApiGetRefreshTokenForAuthorizationServerAndClientRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApigetRefreshTokenForAuthorizationServerAndClient
      */
    authServerId: string;
    /**
      * Client app ID
      * @type string
      * @memberof AuthorizationServerApigetRefreshTokenForAuthorizationServerAndClient
      */
    clientId: string;
    /**
      * &#x60;id&#x60; of Token
      * @type string
      * @memberof AuthorizationServerApigetRefreshTokenForAuthorizationServerAndClient
      */
    tokenId: string;
    /**
      * Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @type string
      * @memberof AuthorizationServerApigetRefreshTokenForAuthorizationServerAndClient
      */
    expand?: string;
}
export interface AuthorizationServerApiListAssociatedServersByTrustedTypeRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApilistAssociatedServersByTrustedType
      */
    authServerId: string;
    /**
      * Searches trusted authorization servers when &#x60;true&#x60; or searches untrusted authorization servers when &#x60;false&#x60;
      * @type boolean
      * @memberof AuthorizationServerApilistAssociatedServersByTrustedType
      */
    trusted?: boolean;
    /**
      * Searches for the name or audience of the associated authorization servers
      * @type string
      * @memberof AuthorizationServerApilistAssociatedServersByTrustedType
      */
    q?: string;
    /**
      * Specifies the number of results for a page
      * @type number
      * @memberof AuthorizationServerApilistAssociatedServersByTrustedType
      */
    limit?: number;
    /**
      * Specifies the pagination cursor for the next page of the associated authorization servers
      * @type string
      * @memberof AuthorizationServerApilistAssociatedServersByTrustedType
      */
    after?: string;
}
export interface AuthorizationServerApiListAuthorizationServerKeysRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServerKeys
      */
    authServerId: string;
}
export interface AuthorizationServerApiListAuthorizationServerPoliciesRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServerPolicies
      */
    authServerId: string;
}
export interface AuthorizationServerApiListAuthorizationServerPolicyRulesRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServerPolicyRules
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServerPolicyRules
      */
    policyId: string;
}
export interface AuthorizationServerApiListAuthorizationServersRequest {
    /**
      * Searches the &#x60;name&#x60; and &#x60;audiences&#x60; of authorization servers for matching values
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServers
      */
    q?: string;
    /**
      * Specifies the number of authorization server results on a page. Maximum value: 200
      * @type number
      * @memberof AuthorizationServerApilistAuthorizationServers
      */
    limit?: number;
    /**
      * Specifies the pagination cursor for the next page of authorization servers. Treat as an opaque value and obtain through the next link relationship.
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServers
      */
    after?: string;
}
export interface AuthorizationServerApiListOAuth2ClaimsRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Claims
      */
    authServerId: string;
}
export interface AuthorizationServerApiListOAuth2ClientsForAuthorizationServerRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApilistOAuth2ClientsForAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiListOAuth2ScopesRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    authServerId: string;
    /**
      * Searches the &#x60;name&#x60; of Custom Token Scopes for matching values
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    q?: string;
    /**
      * Filter expression for Custom Token Scopes
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    filter?: string;
    /**
      * Specifies the pagination cursor for the next page of scopes. Treat the after cursor as an opaque value and obtain it through the next link relationship. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    after?: string;
    /**
      * Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type number
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    limit?: number;
}
export interface AuthorizationServerApiListRefreshTokensForAuthorizationServerAndClientRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    authServerId: string;
    /**
      * Client app ID
      * @type string
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    clientId: string;
    /**
      * Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @type string
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    expand?: string;
    /**
      * Specifies the pagination cursor for the next page of tokens
      * @type string
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    after?: string;
    /**
      * The maximum number of tokens to return (maximum 200)
      * @type number
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    limit?: number;
}
export interface AuthorizationServerApiReplaceAuthorizationServerRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServer
      */
    authServerId: string;
    /**
      *
      * @type AuthorizationServer
      * @memberof AuthorizationServerApireplaceAuthorizationServer
      */
    authorizationServer: AuthorizationServer;
}
export interface AuthorizationServerApiReplaceAuthorizationServerPolicyRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicy
      */
    policyId: string;
    /**
      *
      * @type AuthorizationServerPolicy
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicy
      */
    policy: AuthorizationServerPolicy;
}
export interface AuthorizationServerApiReplaceAuthorizationServerPolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicyRule
      */
    ruleId: string;
    /**
      *
      * @type AuthorizationServerPolicyRuleRequest
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicyRule
      */
    policyRule: AuthorizationServerPolicyRuleRequest;
}
export interface AuthorizationServerApiReplaceOAuth2ClaimRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApireplaceOAuth2Claim
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of Claim
      * @type string
      * @memberof AuthorizationServerApireplaceOAuth2Claim
      */
    claimId: string;
    /**
      *
      * @type OAuth2Claim
      * @memberof AuthorizationServerApireplaceOAuth2Claim
      */
    oAuth2Claim: OAuth2Claim;
}
export interface AuthorizationServerApiReplaceOAuth2ScopeRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApireplaceOAuth2Scope
      */
    authServerId: string;
    /**
      * &#x60;id&#x60; of Scope
      * @type string
      * @memberof AuthorizationServerApireplaceOAuth2Scope
      */
    scopeId: string;
    /**
      *
      * @type OAuth2Scope
      * @memberof AuthorizationServerApireplaceOAuth2Scope
      */
    oAuth2Scope: OAuth2Scope;
}
export interface AuthorizationServerApiRevokeRefreshTokenForAuthorizationServerAndClientRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokenForAuthorizationServerAndClient
      */
    authServerId: string;
    /**
      * Client app ID
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokenForAuthorizationServerAndClient
      */
    clientId: string;
    /**
      * &#x60;id&#x60; of Token
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokenForAuthorizationServerAndClient
      */
    tokenId: string;
}
export interface AuthorizationServerApiRevokeRefreshTokensForAuthorizationServerAndClientRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokensForAuthorizationServerAndClient
      */
    authServerId: string;
    /**
      * Client app ID
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokensForAuthorizationServerAndClient
      */
    clientId: string;
}
export interface AuthorizationServerApiRotateAuthorizationServerKeysRequest {
    /**
      * &#x60;id&#x60; of the Authorization Server
      * @type string
      * @memberof AuthorizationServerApirotateAuthorizationServerKeys
      */
    authServerId: string;
    /**
      *
      * @type JwkUse
      * @memberof AuthorizationServerApirotateAuthorizationServerKeys
      */
    use: JwkUse;
}
export declare class ObjectAuthorizationServerApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AuthorizationServerApiRequestFactory, responseProcessor?: AuthorizationServerApiResponseProcessor);
  /**
      * Activates an authorization server
      * Activate an authorization server
      * @param param the request object
      */
  activateAuthorizationServer(param: AuthorizationServerApiActivateAuthorizationServerRequest, options?: Configuration): Promise<void>;
  /**
      * Activates an authorization server policy
      * Activate a policy
      * @param param the request object
      */
  activateAuthorizationServerPolicy(param: AuthorizationServerApiActivateAuthorizationServerPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Activates an authorization server policy rule
      * Activate a policy rule
      * @param param the request object
      */
  activateAuthorizationServerPolicyRule(param: AuthorizationServerApiActivateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Creates trusted relationships between the given authorization server and other authorization servers
      * Create an associated authorization server
      * @param param the request object
      */
  createAssociatedServers(param: AuthorizationServerApiCreateAssociatedServersRequest, options?: Configuration): Promise<Collection<AuthorizationServer>>;
  /**
      * Creates an authorization server
      * Create an authorization server
      * @param param the request object
      */
  createAuthorizationServer(param: AuthorizationServerApiCreateAuthorizationServerRequest, options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Creates a policy
      * Create a policy
      * @param param the request object
      */
  createAuthorizationServerPolicy(param: AuthorizationServerApiCreateAuthorizationServerPolicyRequest, options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy
      * Create a policy rule
      * @param param the request object
      */
  createAuthorizationServerPolicyRule(param: AuthorizationServerApiCreateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Creates a custom token Claim for a custom authorization server
      * Create a custom token claim
      * @param param the request object
      */
  createOAuth2Claim(param: AuthorizationServerApiCreateOAuth2ClaimRequest, options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Creates a custom token scope
      * Create a custom token scope
      * @param param the request object
      */
  createOAuth2Scope(param: AuthorizationServerApiCreateOAuth2ScopeRequest, options?: Configuration): Promise<OAuth2Scope>;
  /**
      * Deactivates an authorization server
      * Deactivate an authorization server
      * @param param the request object
      */
  deactivateAuthorizationServer(param: AuthorizationServerApiDeactivateAuthorizationServerRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates an authorization server policy
      * Deactivate a policy
      * @param param the request object
      */
  deactivateAuthorizationServerPolicy(param: AuthorizationServerApiDeactivateAuthorizationServerPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates an authorization server policy rule
      * Deactivate a policy rule
      * @param param the request object
      */
  deactivateAuthorizationServerPolicyRule(param: AuthorizationServerApiDeactivateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an associated Authorization Server
      * Delete an associated authorization server
      * @param param the request object
      */
  deleteAssociatedServer(param: AuthorizationServerApiDeleteAssociatedServerRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an authorization server
      * Delete an authorization server
      * @param param the request object
      */
  deleteAuthorizationServer(param: AuthorizationServerApiDeleteAuthorizationServerRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a policy
      * Delete a policy
      * @param param the request object
      */
  deleteAuthorizationServerPolicy(param: AuthorizationServerApiDeleteAuthorizationServerPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
      * Delete a policy rule
      * @param param the request object
      */
  deleteAuthorizationServerPolicyRule(param: AuthorizationServerApiDeleteAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a custom token Claim specified by the `claimId`
      * Delete a custom token claim
      * @param param the request object
      */
  deleteOAuth2Claim(param: AuthorizationServerApiDeleteOAuth2ClaimRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a custom token scope
      * Delete a custom token scope
      * @param param the request object
      */
  deleteOAuth2Scope(param: AuthorizationServerApiDeleteOAuth2ScopeRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an authorization server
      * Retrieve an authorization server
      * @param param the request object
      */
  getAuthorizationServer(param: AuthorizationServerApiGetAuthorizationServerRequest, options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Retrieves an Authorization Server Key specified by the `keyId`
      * Retrieve an authorization server key
      * @param param the request object
      */
  getAuthorizationServerKey(param: AuthorizationServerApiGetAuthorizationServerKeyRequest, options?: Configuration): Promise<AuthorizationServerJsonWebKey>;
  /**
      * Retrieves a policy
      * Retrieve a policy
      * @param param the request object
      */
  getAuthorizationServerPolicy(param: AuthorizationServerApiGetAuthorizationServerPolicyRequest, options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Retrieves a policy rule by `ruleId`
      * Retrieve a policy rule
      * @param param the request object
      */
  getAuthorizationServerPolicyRule(param: AuthorizationServerApiGetAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Retrieves a custom token Claim by the specified `claimId`
      * Retrieve a custom token claim
      * @param param the request object
      */
  getOAuth2Claim(param: AuthorizationServerApiGetOAuth2ClaimRequest, options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Retrieves a custom token scope
      * Retrieve a custom token scope
      * @param param the request object
      */
  getOAuth2Scope(param: AuthorizationServerApiGetOAuth2ScopeRequest, options?: Configuration): Promise<OAuth2Scope>;
  /**
      * Retrieves a refresh token for a Client
      * Retrieve a refresh token for a client
      * @param param the request object
      */
  getRefreshTokenForAuthorizationServerAndClient(param: AuthorizationServerApiGetRefreshTokenForAuthorizationServerAndClientRequest, options?: Configuration): Promise<OAuth2RefreshToken>;
  /**
      * Lists all associated Authorization Servers by trusted type for the given `authServerId`
      * List all associated authorization servers
      * @param param the request object
      */
  listAssociatedServersByTrustedType(param: AuthorizationServerApiListAssociatedServersByTrustedTypeRequest, options?: Configuration): Promise<Collection<AuthorizationServer>>;
  /**
      * Lists all of the current, future, and expired Keys used by the Custom Authorization Server
      * List all credential keys
      * @param param the request object
      */
  listAuthorizationServerKeys(param: AuthorizationServerApiListAuthorizationServerKeysRequest, options?: Configuration): Promise<Collection<AuthorizationServerJsonWebKey>>;
  /**
      * Lists all policies
      * List all policies
      * @param param the request object
      */
  listAuthorizationServerPolicies(param: AuthorizationServerApiListAuthorizationServerPoliciesRequest, options?: Configuration): Promise<Collection<AuthorizationServerPolicy>>;
  /**
      * Lists all policy rules for the specified Custom Authorization Server and Policy
      * List all policy rules
      * @param param the request object
      */
  listAuthorizationServerPolicyRules(param: AuthorizationServerApiListAuthorizationServerPolicyRulesRequest, options?: Configuration): Promise<Collection<AuthorizationServerPolicyRule>>;
  /**
      * Lists all custom authorization servers in the org
      * List all authorization servers
      * @param param the request object
      */
  listAuthorizationServers(param?: AuthorizationServerApiListAuthorizationServersRequest, options?: Configuration): Promise<Collection<AuthorizationServer>>;
  /**
      * Lists all custom token Claims defined for a specified custom authorization server
      * List all custom token claims
      * @param param the request object
      */
  listOAuth2Claims(param: AuthorizationServerApiListOAuth2ClaimsRequest, options?: Configuration): Promise<Collection<OAuth2Claim>>;
  /**
      * Lists all client resources for which the specified authorization server has tokens.  > **Note:** To list a specific user\'s client resources for which they have tokens or grants, use the [List all clients endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserClients).
      * List all client resources for an authorization server
      * @param param the request object
      */
  listOAuth2ClientsForAuthorizationServer(param: AuthorizationServerApiListOAuth2ClientsForAuthorizationServerRequest, options?: Configuration): Promise<Collection<OAuth2Client>>;
  /**
      * Lists all custom token scopes
      * List all custom token scopes
      * @param param the request object
      */
  listOAuth2Scopes(param: AuthorizationServerApiListOAuth2ScopesRequest, options?: Configuration): Promise<Collection<OAuth2Scope>>;
  /**
      * Lists all refresh tokens issued by an authorization server for a specific Client
      * List all refresh tokens for a client
      * @param param the request object
      */
  listRefreshTokensForAuthorizationServerAndClient(param: AuthorizationServerApiListRefreshTokensForAuthorizationServerAndClientRequest, options?: Configuration): Promise<Collection<OAuth2RefreshToken>>;
  /**
      * Replaces an authorization server
      * Replace an authorization server
      * @param param the request object
      */
  replaceAuthorizationServer(param: AuthorizationServerApiReplaceAuthorizationServerRequest, options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Replaces a policy
      * Replace a policy
      * @param param the request object
      */
  replaceAuthorizationServerPolicy(param: AuthorizationServerApiReplaceAuthorizationServerPolicyRequest, options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
      * Replace a policy rule
      * @param param the request object
      */
  replaceAuthorizationServerPolicyRule(param: AuthorizationServerApiReplaceAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Replaces a custom token Claim specified by the `claimId`
      * Replace a custom token claim
      * @param param the request object
      */
  replaceOAuth2Claim(param: AuthorizationServerApiReplaceOAuth2ClaimRequest, options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Replaces a custom token scope
      * Replace a custom token scope
      * @param param the request object
      */
  replaceOAuth2Scope(param: AuthorizationServerApiReplaceOAuth2ScopeRequest, options?: Configuration): Promise<OAuth2Scope>;
  /**
      * Revokes a refresh token for a Client
      * Revoke a refresh token for a client
      * @param param the request object
      */
  revokeRefreshTokenForAuthorizationServerAndClient(param: AuthorizationServerApiRevokeRefreshTokenForAuthorizationServerAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all refresh tokens for a Client
      * Revoke all refresh tokens for a client
      * @param param the request object
      */
  revokeRefreshTokensForAuthorizationServerAndClient(param: AuthorizationServerApiRevokeRefreshTokensForAuthorizationServerAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Rotates the current Keys for a Custom Authorization Server. If you rotate Keys, the `ACTIVE` Key becomes the `EXPIRED` Key, the `NEXT` Key becomes the `ACTIVE` Key, and the Custom Authorization Server immediately begins using the new active Key to sign tokens.  > **Note:** Okta rotates your Keys automatically in `AUTO` mode. You can rotate Keys yourself in either mode. If Keys are rotated manually, you should invalidate any intermediate cache. and fetch the Keys again using the Keys endpoint.
      * Rotate all credential keys
      * @param param the request object
      */
  rotateAuthorizationServerKeys(param: AuthorizationServerApiRotateAuthorizationServerKeysRequest, options?: Configuration): Promise<Collection<AuthorizationServerJsonWebKey>>;
}
import { BehaviorApiRequestFactory, BehaviorApiResponseProcessor } from '../apis/BehaviorApi';
export interface BehaviorApiActivateBehaviorDetectionRuleRequest {
    /**
      * id of the Behavior Detection Rule
      * @type string
      * @memberof BehaviorApiactivateBehaviorDetectionRule
      */
    behaviorId: string;
}
export interface BehaviorApiCreateBehaviorDetectionRuleRequest {
    /**
      *
      * @type BehaviorRule
      * @memberof BehaviorApicreateBehaviorDetectionRule
      */
    rule: BehaviorRule;
}
export interface BehaviorApiDeactivateBehaviorDetectionRuleRequest {
    /**
      * id of the Behavior Detection Rule
      * @type string
      * @memberof BehaviorApideactivateBehaviorDetectionRule
      */
    behaviorId: string;
}
export interface BehaviorApiDeleteBehaviorDetectionRuleRequest {
    /**
      * id of the Behavior Detection Rule
      * @type string
      * @memberof BehaviorApideleteBehaviorDetectionRule
      */
    behaviorId: string;
}
export interface BehaviorApiGetBehaviorDetectionRuleRequest {
    /**
      * id of the Behavior Detection Rule
      * @type string
      * @memberof BehaviorApigetBehaviorDetectionRule
      */
    behaviorId: string;
}
export interface BehaviorApiListBehaviorDetectionRulesRequest {
}
export interface BehaviorApiReplaceBehaviorDetectionRuleRequest {
    /**
      * id of the Behavior Detection Rule
      * @type string
      * @memberof BehaviorApireplaceBehaviorDetectionRule
      */
    behaviorId: string;
    /**
      *
      * @type BehaviorRule
      * @memberof BehaviorApireplaceBehaviorDetectionRule
      */
    rule: BehaviorRule;
}
export declare class ObjectBehaviorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: BehaviorApiRequestFactory, responseProcessor?: BehaviorApiResponseProcessor);
  /**
      * Activates a behavior detection rule
      * Activate a behavior detection rule
      * @param param the request object
      */
  activateBehaviorDetectionRule(param: BehaviorApiActivateBehaviorDetectionRuleRequest, options?: Configuration): Promise<BehaviorRule>;
  /**
      * Creates a new behavior detection rule
      * Create a behavior detection rule
      * @param param the request object
      */
  createBehaviorDetectionRule(param: BehaviorApiCreateBehaviorDetectionRuleRequest, options?: Configuration): Promise<BehaviorRule>;
  /**
      * Deactivates a behavior detection rule
      * Deactivate a behavior detection rule
      * @param param the request object
      */
  deactivateBehaviorDetectionRule(param: BehaviorApiDeactivateBehaviorDetectionRuleRequest, options?: Configuration): Promise<BehaviorRule>;
  /**
      * Deletes a Behavior Detection Rule by `behaviorId`
      * Delete a behavior detection rule
      * @param param the request object
      */
  deleteBehaviorDetectionRule(param: BehaviorApiDeleteBehaviorDetectionRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a Behavior Detection Rule by `behaviorId`
      * Retrieve a behavior detection rule
      * @param param the request object
      */
  getBehaviorDetectionRule(param: BehaviorApiGetBehaviorDetectionRuleRequest, options?: Configuration): Promise<BehaviorRule>;
  /**
      * Lists all behavior detection rules with pagination support
      * List all behavior detection rules
      * @param param the request object
      */
  listBehaviorDetectionRules(param?: BehaviorApiListBehaviorDetectionRulesRequest, options?: Configuration): Promise<Collection<BehaviorRule>>;
  /**
      * Replaces a Behavior Detection Rule by `behaviorId`
      * Replace a behavior detection rule
      * @param param the request object
      */
  replaceBehaviorDetectionRule(param: BehaviorApiReplaceBehaviorDetectionRuleRequest, options?: Configuration): Promise<BehaviorRule>;
}
import { CAPTCHAApiRequestFactory, CAPTCHAApiResponseProcessor } from '../apis/CAPTCHAApi';
export interface CAPTCHAApiCreateCaptchaInstanceRequest {
    /**
      *
      * @type CAPTCHAInstance
      * @memberof CAPTCHAApicreateCaptchaInstance
      */
    instance: CAPTCHAInstance;
}
export interface CAPTCHAApiDeleteCaptchaInstanceRequest {
    /**
      * The unique key used to identify your CAPTCHA instance
      * @type string
      * @memberof CAPTCHAApideleteCaptchaInstance
      */
    captchaId: string;
}
export interface CAPTCHAApiDeleteOrgCaptchaSettingsRequest {
}
export interface CAPTCHAApiGetCaptchaInstanceRequest {
    /**
      * The unique key used to identify your CAPTCHA instance
      * @type string
      * @memberof CAPTCHAApigetCaptchaInstance
      */
    captchaId: string;
}
export interface CAPTCHAApiGetOrgCaptchaSettingsRequest {
}
export interface CAPTCHAApiListCaptchaInstancesRequest {
}
export interface CAPTCHAApiReplaceCaptchaInstanceRequest {
    /**
      * The unique key used to identify your CAPTCHA instance
      * @type string
      * @memberof CAPTCHAApireplaceCaptchaInstance
      */
    captchaId: string;
    /**
      *
      * @type CAPTCHAInstance
      * @memberof CAPTCHAApireplaceCaptchaInstance
      */
    instance: CAPTCHAInstance;
}
export interface CAPTCHAApiReplacesOrgCaptchaSettingsRequest {
    /**
      *
      * @type OrgCAPTCHASettings
      * @memberof CAPTCHAApireplacesOrgCaptchaSettings
      */
    orgCAPTCHASettings: OrgCAPTCHASettings;
}
export interface CAPTCHAApiUpdateCaptchaInstanceRequest {
    /**
      * The unique key used to identify your CAPTCHA instance
      * @type string
      * @memberof CAPTCHAApiupdateCaptchaInstance
      */
    captchaId: string;
    /**
      *
      * @type CAPTCHAInstance
      * @memberof CAPTCHAApiupdateCaptchaInstance
      */
    instance: CAPTCHAInstance;
}
export declare class ObjectCAPTCHAApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: CAPTCHAApiRequestFactory, responseProcessor?: CAPTCHAApiResponseProcessor);
  /**
      * Creates a new CAPTCHA instance. Currently, an org can only configure a single CAPTCHA instance.
      * Create a CAPTCHA instance
      * @param param the request object
      */
  createCaptchaInstance(param: CAPTCHAApiCreateCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Deletes a specified CAPTCHA instance > **Note:** If your CAPTCHA instance is still associated with your org, the request fails. You must first update your Org-wide CAPTCHA settings to remove the CAPTCHA instance.
      * Delete a CAPTCHA instance
      * @param param the request object
      */
  deleteCaptchaInstance(param: CAPTCHAApiDeleteCaptchaInstanceRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the CAPTCHA settings object for your organization
      * Delete the org-wide CAPTCHA settings
      * @param param the request object
      */
  deleteOrgCaptchaSettings(param?: CAPTCHAApiDeleteOrgCaptchaSettingsRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves the properties of a specified CAPTCHA instance
      * Retrieve a CAPTCHA instance
      * @param param the request object
      */
  getCaptchaInstance(param: CAPTCHAApiGetCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Retrieves the CAPTCHA settings object for your organization > **Note**: If the current organization hasn\'t configured CAPTCHA Settings, the request returns an empty object.
      * Retrieve the org-wide CAPTCHA settings
      * @param param the request object
      */
  getOrgCaptchaSettings(param?: CAPTCHAApiGetOrgCaptchaSettingsRequest, options?: Configuration): Promise<OrgCAPTCHASettings>;
  /**
      * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      * @param param the request object
      */
  listCaptchaInstances(param?: CAPTCHAApiListCaptchaInstancesRequest, options?: Configuration): Promise<Collection<CAPTCHAInstance>>;
  /**
      * Replaces the properties for a specified CAPTCHA instance
      * Replace a CAPTCHA instance
      * @param param the request object
      */
  replaceCaptchaInstance(param: CAPTCHAApiReplaceCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Replaces the CAPTCHA settings object for your organization > **Note**: You can disable CAPTCHA for your organization by setting `captchaId` and `enabledPages` to `null`.
      * Replace the org-wide CAPTCHA settings
      * @param param the request object
      */
  replacesOrgCaptchaSettings(param: CAPTCHAApiReplacesOrgCaptchaSettingsRequest, options?: Configuration): Promise<OrgCAPTCHASettings>;
  /**
      * Partially updates the properties of a specified CAPTCHA instance
      * Update a CAPTCHA instance
      * @param param the request object
      */
  updateCaptchaInstance(param: CAPTCHAApiUpdateCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
}
import { CustomDomainApiRequestFactory, CustomDomainApiResponseProcessor } from '../apis/CustomDomainApi';
export interface CustomDomainApiCreateCustomDomainRequest {
    /**
      *
      * @type DomainRequest
      * @memberof CustomDomainApicreateCustomDomain
      */
    domain: DomainRequest;
}
export interface CustomDomainApiDeleteCustomDomainRequest {
    /**
      * &#x60;id&#x60; of the Domain
      * @type string
      * @memberof CustomDomainApideleteCustomDomain
      */
    domainId: string;
}
export interface CustomDomainApiGetCustomDomainRequest {
    /**
      * &#x60;id&#x60; of the Domain
      * @type string
      * @memberof CustomDomainApigetCustomDomain
      */
    domainId: string;
}
export interface CustomDomainApiListCustomDomainsRequest {
}
export interface CustomDomainApiReplaceCustomDomainRequest {
    /**
      * &#x60;id&#x60; of the Domain
      * @type string
      * @memberof CustomDomainApireplaceCustomDomain
      */
    domainId: string;
    /**
      *
      * @type UpdateDomain
      * @memberof CustomDomainApireplaceCustomDomain
      */
    UpdateDomain: UpdateDomain;
}
export interface CustomDomainApiUpsertCertificateRequest {
    /**
      * &#x60;id&#x60; of the Domain
      * @type string
      * @memberof CustomDomainApiupsertCertificate
      */
    domainId: string;
    /**
      *
      * @type DomainCertificate
      * @memberof CustomDomainApiupsertCertificate
      */
    certificate: DomainCertificate;
}
export interface CustomDomainApiVerifyDomainRequest {
    /**
      * &#x60;id&#x60; of the Domain
      * @type string
      * @memberof CustomDomainApiverifyDomain
      */
    domainId: string;
}
export declare class ObjectCustomDomainApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: CustomDomainApiRequestFactory, responseProcessor?: CustomDomainApiResponseProcessor);
  /**
      * Creates your custom domain
      * Create a Custom Domain
      * @param param the request object
      */
  createCustomDomain(param: CustomDomainApiCreateCustomDomainRequest, options?: Configuration): Promise<DomainResponse>;
  /**
      * Deletes a custom domain by `domainId`
      * Delete a custom domain
      * @param param the request object
      */
  deleteCustomDomain(param: CustomDomainApiDeleteCustomDomainRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a custom domain by `domainId`
      * Retrieve a custom domain
      * @param param the request object
      */
  getCustomDomain(param: CustomDomainApiGetCustomDomainRequest, options?: Configuration): Promise<DomainResponse>;
  /**
      * Lists all verified custom domains for the org
      * List all Custom Domains
      * @param param the request object
      */
  listCustomDomains(param?: CustomDomainApiListCustomDomainsRequest, options?: Configuration): Promise<DomainListResponse>;
  /**
      * Replaces a custom domain\'s brand
      * Replace a custom domain\'s brand
      * @param param the request object
      */
  replaceCustomDomain(param: CustomDomainApiReplaceCustomDomainRequest, options?: Configuration): Promise<DomainResponse>;
  /**
      * Upserts (creates or renews) the `MANUAL` certificate for the custom domain  > **Notes:** > * If the existing `certificateSourceType` is `OKTA_MANAGED`, this operation changes the source type to `MANUAL`. Okta no longer manages and renews certificates for this domain after you provide a user-managed certificate. > * Okta supports TLS certificates and private keys that are PEM-encoded and 2048, 3072, or 4096 bits. See the [Custom domain guide](https://developer.okta.com/docs/guides/custom-url-domain/main/) for more details.
      * Upsert the custom domain\'s certificate
      * @param param the request object
      */
  upsertCertificate(param: CustomDomainApiUpsertCertificateRequest, options?: Configuration): Promise<void>;
  /**
      * Verifies the custom domain and validity of DNS records by `domainId`. Furthermore, if the `certificateSourceType` in the domain is `OKTA_MANAGED`, then an attempt is made to obtain and install a certificate. After a certificate is obtained and installed by Okta, Okta manages the certificate including certificate renewal.
      * Verify a custom domain
      * @param param the request object
      */
  verifyDomain(param: CustomDomainApiVerifyDomainRequest, options?: Configuration): Promise<DomainResponse>;
}
import { CustomRoleApiRequestFactory, CustomRoleApiResponseProcessor } from '../apis/CustomRoleApi';
export interface CustomRoleApiCreateRoleRequest {
    /**
      *
      * @type CreateIamRoleRequest
      * @memberof CustomRoleApicreateRole
      */
    instance: CreateIamRoleRequest;
}
export interface CustomRoleApiCreateRolePermissionRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof CustomRoleApicreateRolePermission
      */
    roleIdOrLabel: string;
    /**
      * An Okta [permission](https://developer.okta.com/docs/api/openapi/okta-management/guides/permissions)
      * @type string
      * @memberof CustomRoleApicreateRolePermission
      */
    permissionType: string;
    /**
      *
      * @type CreateUpdateIamRolePermissionRequest
      * @memberof CustomRoleApicreateRolePermission
      */
    instance?: CreateUpdateIamRolePermissionRequest;
}
export interface CustomRoleApiDeleteRoleRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof CustomRoleApideleteRole
      */
    roleIdOrLabel: string;
}
export interface CustomRoleApiDeleteRolePermissionRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof CustomRoleApideleteRolePermission
      */
    roleIdOrLabel: string;
    /**
      * An Okta [permission](https://developer.okta.com/docs/api/openapi/okta-management/guides/permissions)
      * @type string
      * @memberof CustomRoleApideleteRolePermission
      */
    permissionType: string;
}
export interface CustomRoleApiGetRoleRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof CustomRoleApigetRole
      */
    roleIdOrLabel: string;
}
export interface CustomRoleApiGetRolePermissionRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof CustomRoleApigetRolePermission
      */
    roleIdOrLabel: string;
    /**
      * An Okta [permission](https://developer.okta.com/docs/api/openapi/okta-management/guides/permissions)
      * @type string
      * @memberof CustomRoleApigetRolePermission
      */
    permissionType: string;
}
export interface CustomRoleApiListRolePermissionsRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof CustomRoleApilistRolePermissions
      */
    roleIdOrLabel: string;
}
export interface CustomRoleApiListRolesRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof CustomRoleApilistRoles
      */
    after?: string;
}
export interface CustomRoleApiReplaceRoleRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof CustomRoleApireplaceRole
      */
    roleIdOrLabel: string;
    /**
      *
      * @type UpdateIamRoleRequest
      * @memberof CustomRoleApireplaceRole
      */
    instance: UpdateIamRoleRequest;
}
export interface CustomRoleApiReplaceRolePermissionRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof CustomRoleApireplaceRolePermission
      */
    roleIdOrLabel: string;
    /**
      * An Okta [permission](https://developer.okta.com/docs/api/openapi/okta-management/guides/permissions)
      * @type string
      * @memberof CustomRoleApireplaceRolePermission
      */
    permissionType: string;
    /**
      *
      * @type CreateUpdateIamRolePermissionRequest
      * @memberof CustomRoleApireplaceRolePermission
      */
    instance?: CreateUpdateIamRolePermissionRequest;
}
export declare class ObjectCustomRoleApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: CustomRoleApiRequestFactory, responseProcessor?: CustomRoleApiResponseProcessor);
  /**
      * Creates a custom role
      * Create a custom role
      * @param param the request object
      */
  createRole(param: CustomRoleApiCreateRoleRequest, options?: Configuration): Promise<IamRole>;
  /**
      * Creates a permission (specified by `permissionType`) for a custom role
      * Create a custom role permission
      * @param param the request object
      */
  createRolePermission(param: CustomRoleApiCreateRolePermissionRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a custom role by `roleIdOrLabel`
      * Delete a custom role
      * @param param the request object
      */
  deleteRole(param: CustomRoleApiDeleteRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a permission (identified by `permissionType`) from a custom role
      * Delete a custom role permission
      * @param param the request object
      */
  deleteRolePermission(param: CustomRoleApiDeleteRolePermissionRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a role by `roleIdOrLabel`
      * Retrieve a role
      * @param param the request object
      */
  getRole(param: CustomRoleApiGetRoleRequest, options?: Configuration): Promise<IamRole>;
  /**
      * Retrieves a permission (identified by `permissionType`) for a custom role
      * Retrieve a custom role permission
      * @param param the request object
      */
  getRolePermission(param: CustomRoleApiGetRolePermissionRequest, options?: Configuration): Promise<Permission>;
  /**
      * Lists all permissions for a custom role by `roleIdOrLabel`
      * List all custom role permissions
      * @param param the request object
      */
  listRolePermissions(param: CustomRoleApiListRolePermissionsRequest, options?: Configuration): Promise<Permissions>;
  /**
      * Lists all custom roles with pagination support
      * List all custom roles
      * @param param the request object
      */
  listRoles(param?: CustomRoleApiListRolesRequest, options?: Configuration): Promise<IamRoles>;
  /**
      * Replaces the label and description for a custom role by `roleIdOrLabel`
      * Replace a custom role
      * @param param the request object
      */
  replaceRole(param: CustomRoleApiReplaceRoleRequest, options?: Configuration): Promise<IamRole>;
  /**
      * Replaces a permission (specified by `permissionType`) for a custom role
      * Replace a custom role permission
      * @param param the request object
      */
  replaceRolePermission(param: CustomRoleApiReplaceRolePermissionRequest, options?: Configuration): Promise<Permission>;
}
import { CustomizationApiRequestFactory, CustomizationApiResponseProcessor } from '../apis/CustomizationApi';
export interface CustomizationApiBulkRemoveEmailAddressBouncesRequest {
    /**
      *
      * @type BouncesRemoveListObj
      * @memberof CustomizationApibulkRemoveEmailAddressBounces
      */
    BouncesRemoveListObj?: BouncesRemoveListObj;
}
export interface CustomizationApiCreateBrandRequest {
    /**
      *
      * @type CreateBrandRequest
      * @memberof CustomizationApicreateBrand
      */
    CreateBrandRequest?: CreateBrandRequest;
}
export interface CustomizationApiCreateEmailCustomizationRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApicreateEmailCustomization
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApicreateEmailCustomization
      */
    templateName: string;
    /**
      *
      * @type EmailCustomization
      * @memberof CustomizationApicreateEmailCustomization
      */
    instance?: EmailCustomization;
}
export interface CustomizationApiDeleteAllCustomizationsRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideleteAllCustomizations
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApideleteAllCustomizations
      */
    templateName: string;
}
export interface CustomizationApiDeleteBrandRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideleteBrand
      */
    brandId: string;
}
export interface CustomizationApiDeleteBrandThemeBackgroundImageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideleteBrandThemeBackgroundImage
      */
    brandId: string;
    /**
      * The ID of the theme
      * @type string
      * @memberof CustomizationApideleteBrandThemeBackgroundImage
      */
    themeId: string;
}
export interface CustomizationApiDeleteBrandThemeFaviconRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideleteBrandThemeFavicon
      */
    brandId: string;
    /**
      * The ID of the theme
      * @type string
      * @memberof CustomizationApideleteBrandThemeFavicon
      */
    themeId: string;
}
export interface CustomizationApiDeleteBrandThemeLogoRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideleteBrandThemeLogo
      */
    brandId: string;
    /**
      * The ID of the theme
      * @type string
      * @memberof CustomizationApideleteBrandThemeLogo
      */
    themeId: string;
}
export interface CustomizationApiDeleteCustomizedErrorPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideleteCustomizedErrorPage
      */
    brandId: string;
}
export interface CustomizationApiDeleteCustomizedSignInPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideleteCustomizedSignInPage
      */
    brandId: string;
}
export interface CustomizationApiDeleteEmailCustomizationRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideleteEmailCustomization
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApideleteEmailCustomization
      */
    templateName: string;
    /**
      * The ID of the email customization
      * @type string
      * @memberof CustomizationApideleteEmailCustomization
      */
    customizationId: string;
}
export interface CustomizationApiDeletePreviewErrorPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideletePreviewErrorPage
      */
    brandId: string;
}
export interface CustomizationApiDeletePreviewSignInPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApideletePreviewSignInPage
      */
    brandId: string;
}
export interface CustomizationApiGetBrandRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetBrand
      */
    brandId: string;
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;themes&#39; | &#39;domains&#39; | &#39;emailDomain&#39;&gt;
      * @memberof CustomizationApigetBrand
      */
    expand?: Array<'themes' | 'domains' | 'emailDomain'>;
}
export interface CustomizationApiGetBrandThemeRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetBrandTheme
      */
    brandId: string;
    /**
      * The ID of the theme
      * @type string
      * @memberof CustomizationApigetBrandTheme
      */
    themeId: string;
}
export interface CustomizationApiGetCustomizationPreviewRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetCustomizationPreview
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApigetCustomizationPreview
      */
    templateName: string;
    /**
      * The ID of the email customization
      * @type string
      * @memberof CustomizationApigetCustomizationPreview
      */
    customizationId: string;
}
export interface CustomizationApiGetCustomizedErrorPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetCustomizedErrorPage
      */
    brandId: string;
}
export interface CustomizationApiGetCustomizedSignInPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetCustomizedSignInPage
      */
    brandId: string;
}
export interface CustomizationApiGetDefaultErrorPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetDefaultErrorPage
      */
    brandId: string;
}
export interface CustomizationApiGetDefaultSignInPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetDefaultSignInPage
      */
    brandId: string;
}
export interface CustomizationApiGetEmailCustomizationRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetEmailCustomization
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApigetEmailCustomization
      */
    templateName: string;
    /**
      * The ID of the email customization
      * @type string
      * @memberof CustomizationApigetEmailCustomization
      */
    customizationId: string;
}
export interface CustomizationApiGetEmailDefaultContentRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetEmailDefaultContent
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApigetEmailDefaultContent
      */
    templateName: string;
    /**
      * The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
      * @type string
      * @memberof CustomizationApigetEmailDefaultContent
      */
    language?: string;
}
export interface CustomizationApiGetEmailDefaultPreviewRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetEmailDefaultPreview
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApigetEmailDefaultPreview
      */
    templateName: string;
    /**
      * The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
      * @type string
      * @memberof CustomizationApigetEmailDefaultPreview
      */
    language?: string;
}
export interface CustomizationApiGetEmailSettingsRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetEmailSettings
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApigetEmailSettings
      */
    templateName: string;
}
export interface CustomizationApiGetEmailTemplateRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetEmailTemplate
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApigetEmailTemplate
      */
    templateName: string;
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;settings&#39; | &#39;customizationCount&#39;&gt;
      * @memberof CustomizationApigetEmailTemplate
      */
    expand?: Array<'settings' | 'customizationCount'>;
}
export interface CustomizationApiGetErrorPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetErrorPage
      */
    brandId: string;
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;default&#39; | &#39;customized&#39; | &#39;customizedUrl&#39; | &#39;preview&#39; | &#39;previewUrl&#39;&gt;
      * @memberof CustomizationApigetErrorPage
      */
    expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>;
}
export interface CustomizationApiGetPreviewErrorPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetPreviewErrorPage
      */
    brandId: string;
}
export interface CustomizationApiGetPreviewSignInPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetPreviewSignInPage
      */
    brandId: string;
}
export interface CustomizationApiGetSignInPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetSignInPage
      */
    brandId: string;
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;default&#39; | &#39;customized&#39; | &#39;customizedUrl&#39; | &#39;preview&#39; | &#39;previewUrl&#39;&gt;
      * @memberof CustomizationApigetSignInPage
      */
    expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>;
}
export interface CustomizationApiGetSignOutPageSettingsRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApigetSignOutPageSettings
      */
    brandId: string;
}
export interface CustomizationApiListAllSignInWidgetVersionsRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApilistAllSignInWidgetVersions
      */
    brandId: string;
}
export interface CustomizationApiListBrandDomainsRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApilistBrandDomains
      */
    brandId: string;
}
export interface CustomizationApiListBrandThemesRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApilistBrandThemes
      */
    brandId: string;
}
export interface CustomizationApiListBrandsRequest {
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;themes&#39; | &#39;domains&#39; | &#39;emailDomain&#39;&gt;
      * @memberof CustomizationApilistBrands
      */
    expand?: Array<'themes' | 'domains' | 'emailDomain'>;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof CustomizationApilistBrands
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof CustomizationApilistBrands
      */
    limit?: number;
    /**
      * Searches the records for matching value
      * @type string
      * @memberof CustomizationApilistBrands
      */
    q?: string;
}
export interface CustomizationApiListEmailCustomizationsRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApilistEmailCustomizations
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApilistEmailCustomizations
      */
    templateName: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof CustomizationApilistEmailCustomizations
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof CustomizationApilistEmailCustomizations
      */
    limit?: number;
}
export interface CustomizationApiListEmailTemplatesRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApilistEmailTemplates
      */
    brandId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof CustomizationApilistEmailTemplates
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof CustomizationApilistEmailTemplates
      */
    limit?: number;
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;settings&#39; | &#39;customizationCount&#39;&gt;
      * @memberof CustomizationApilistEmailTemplates
      */
    expand?: Array<'settings' | 'customizationCount'>;
}
export interface CustomizationApiReplaceBrandRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApireplaceBrand
      */
    brandId: string;
    /**
      *
      * @type BrandRequest
      * @memberof CustomizationApireplaceBrand
      */
    brand: BrandRequest;
}
export interface CustomizationApiReplaceBrandThemeRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApireplaceBrandTheme
      */
    brandId: string;
    /**
      * The ID of the theme
      * @type string
      * @memberof CustomizationApireplaceBrandTheme
      */
    themeId: string;
    /**
      *
      * @type UpdateThemeRequest
      * @memberof CustomizationApireplaceBrandTheme
      */
    theme: UpdateThemeRequest;
}
export interface CustomizationApiReplaceCustomizedErrorPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApireplaceCustomizedErrorPage
      */
    brandId: string;
    /**
      *
      * @type ErrorPage
      * @memberof CustomizationApireplaceCustomizedErrorPage
      */
    ErrorPage: ErrorPage;
}
export interface CustomizationApiReplaceCustomizedSignInPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApireplaceCustomizedSignInPage
      */
    brandId: string;
    /**
      *
      * @type SignInPage
      * @memberof CustomizationApireplaceCustomizedSignInPage
      */
    SignInPage: SignInPage;
}
export interface CustomizationApiReplaceEmailCustomizationRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApireplaceEmailCustomization
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApireplaceEmailCustomization
      */
    templateName: string;
    /**
      * The ID of the email customization
      * @type string
      * @memberof CustomizationApireplaceEmailCustomization
      */
    customizationId: string;
    /**
      * Request
      * @type EmailCustomization
      * @memberof CustomizationApireplaceEmailCustomization
      */
    instance?: EmailCustomization;
}
export interface CustomizationApiReplaceEmailSettingsRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApireplaceEmailSettings
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApireplaceEmailSettings
      */
    templateName: string;
    /**
      *
      * @type EmailSettings
      * @memberof CustomizationApireplaceEmailSettings
      */
    EmailSettings?: EmailSettings;
}
export interface CustomizationApiReplacePreviewErrorPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApireplacePreviewErrorPage
      */
    brandId: string;
    /**
      *
      * @type ErrorPage
      * @memberof CustomizationApireplacePreviewErrorPage
      */
    ErrorPage: ErrorPage;
}
export interface CustomizationApiReplacePreviewSignInPageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApireplacePreviewSignInPage
      */
    brandId: string;
    /**
      *
      * @type SignInPage
      * @memberof CustomizationApireplacePreviewSignInPage
      */
    SignInPage: SignInPage;
}
export interface CustomizationApiReplaceSignOutPageSettingsRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApireplaceSignOutPageSettings
      */
    brandId: string;
    /**
      *
      * @type HostedPage
      * @memberof CustomizationApireplaceSignOutPageSettings
      */
    HostedPage: HostedPage;
}
export interface CustomizationApiSendTestEmailRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApisendTestEmail
      */
    brandId: string;
    /**
      * The name of the email template
      * @type string
      * @memberof CustomizationApisendTestEmail
      */
    templateName: string;
    /**
      * The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
      * @type string
      * @memberof CustomizationApisendTestEmail
      */
    language?: string;
}
export interface CustomizationApiUploadBrandThemeBackgroundImageRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApiuploadBrandThemeBackgroundImage
      */
    brandId: string;
    /**
      * The ID of the theme
      * @type string
      * @memberof CustomizationApiuploadBrandThemeBackgroundImage
      */
    themeId: string;
    /**
      *
      * @type HttpFile
      * @memberof CustomizationApiuploadBrandThemeBackgroundImage
      */
    file: HttpFile;
}
export interface CustomizationApiUploadBrandThemeFaviconRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApiuploadBrandThemeFavicon
      */
    brandId: string;
    /**
      * The ID of the theme
      * @type string
      * @memberof CustomizationApiuploadBrandThemeFavicon
      */
    themeId: string;
    /**
      *
      * @type HttpFile
      * @memberof CustomizationApiuploadBrandThemeFavicon
      */
    file: HttpFile;
}
export interface CustomizationApiUploadBrandThemeLogoRequest {
    /**
      * The ID of the brand
      * @type string
      * @memberof CustomizationApiuploadBrandThemeLogo
      */
    brandId: string;
    /**
      * The ID of the theme
      * @type string
      * @memberof CustomizationApiuploadBrandThemeLogo
      */
    themeId: string;
    /**
      *
      * @type HttpFile
      * @memberof CustomizationApiuploadBrandThemeLogo
      */
    file: HttpFile;
}
export declare class ObjectCustomizationApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: CustomizationApiRequestFactory, responseProcessor?: CustomizationApiResponseProcessor);
  /**
      * Removes emails from an email service bounce list.  The emails submitted in this operation are removed from the bounce list by an asynchronous job. Any email address that passes validation is accepted for the removal process, even if there are other email addresses in the request that failed validation.  > **Note:** If there are validation errors for all email addresses, a `200 OK` HTTP status is still returned.
      * Remove bounced emails
      * @param param the request object
      */
  bulkRemoveEmailAddressBounces(param?: CustomizationApiBulkRemoveEmailAddressBouncesRequest, options?: Configuration): Promise<BouncesRemoveListResult>;
  /**
      * Creates a new brand in your org
      * Create a brand
      * @param param the request object
      */
  createBrand(param?: CustomizationApiCreateBrandRequest, options?: Configuration): Promise<Brand>;
  /**
      * Creates a new Email Customization  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, you can create a customization for any BCP47 language in addition to the Okta-supported languages.
      * Create an email customization
      * @param param the request object
      */
  createEmailCustomization(param: CustomizationApiCreateEmailCustomizationRequest, options?: Configuration): Promise<EmailCustomization>;
  /**
      * Deletes all customizations for an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all customizations are deleted, including customizations for additional languages. If disabled, only customizations in Okta-supported languages are deleted.
      * Delete all email customizations
      * @param param the request object
      */
  deleteAllCustomizations(param: CustomizationApiDeleteAllCustomizationsRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a brand by `brandId`
      * Delete a brand
      * @param param the request object
      */
  deleteBrand(param: CustomizationApiDeleteBrandRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a theme background image
      * Delete the background image
      * @param param the request object
      */
  deleteBrandThemeBackgroundImage(param: CustomizationApiDeleteBrandThemeBackgroundImageRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a theme favicon. The theme will use the default Okta favicon.
      * Delete the favicon
      * @param param the request object
      */
  deleteBrandThemeFavicon(param: CustomizationApiDeleteBrandThemeFaviconRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the logo
      * @param param the request object
      */
  deleteBrandThemeLogo(param: CustomizationApiDeleteBrandThemeLogoRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the customized error page. As a result, the default error page appears in your live environment.
      * Delete the customized error page
      * @param param the request object
      */
  deleteCustomizedErrorPage(param: CustomizationApiDeleteCustomizedErrorPageRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
      * Delete the customized sign-in page
      * @param param the request object
      */
  deleteCustomizedSignInPage(param: CustomizationApiDeleteCustomizedSignInPageRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an Email Customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, deletion of an existing additional language customization by ID doesn\'t register.
      * Delete an email customization
      * @param param the request object
      */
  deleteEmailCustomization(param: CustomizationApiDeleteEmailCustomizationRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Delete the preview error page
      * @param param the request object
      */
  deletePreviewErrorPage(param: CustomizationApiDeletePreviewErrorPageRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Delete the preview sign-in page
      * @param param the request object
      */
  deletePreviewSignInPage(param: CustomizationApiDeletePreviewSignInPageRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a brand by `brandId`
      * Retrieve a brand
      * @param param the request object
      */
  getBrand(param: CustomizationApiGetBrandRequest, options?: Configuration): Promise<BrandWithEmbedded>;
  /**
      * Retrieves a theme for a brand
      * Retrieve a theme
      * @param param the request object
      */
  getBrandTheme(param: CustomizationApiGetBrandThemeRequest, options?: Configuration): Promise<ThemeResponse>;
  /**
      * Retrieves a Preview of an Email Customization. All variable references are populated from the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests for the preview of an additional language customization by ID return a `404 Not Found` error response.
      * Retrieve a preview of an email customization
      * @param param the request object
      */
  getCustomizationPreview(param: CustomizationApiGetCustomizationPreviewRequest, options?: Configuration): Promise<EmailPreview>;
  /**
      * Retrieves the customized error page. The customized error page appears in your live environment.
      * Retrieve the customized error page
      * @param param the request object
      */
  getCustomizedErrorPage(param: CustomizationApiGetCustomizedErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
      * Retrieve the customized sign-in page
      * @param param the request object
      */
  getCustomizedSignInPage(param: CustomizationApiGetCustomizedSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Retrieves the default error page. The default error page appears when no customized error page exists.
      * Retrieve the default error page
      * @param param the request object
      */
  getDefaultErrorPage(param: CustomizationApiGetDefaultErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
      * Retrieve the default sign-in page
      * @param param the request object
      */
  getDefaultSignInPage(param: CustomizationApiGetDefaultSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Retrieves an email customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to retrieve an additional language customization by ID result in a `404 Not Found` error response.
      * Retrieve an email customization
      * @param param the request object
      */
  getEmailCustomization(param: CustomizationApiGetEmailCustomizationRequest, options?: Configuration): Promise<EmailCustomization>;
  /**
      * Retrieves an email template\'s default content  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
      * Retrieve an email template default content
      * @param param the request object
      */
  getEmailDefaultContent(param: CustomizationApiGetEmailDefaultContentRequest, options?: Configuration): Promise<EmailDefaultContent>;
  /**
      * Retrieves a preview of an Email Template\'s default content. All variable references are populated using the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
      * Retrieve a preview of the email template default content
      * @param param the request object
      */
  getEmailDefaultPreview(param: CustomizationApiGetEmailDefaultPreviewRequest, options?: Configuration): Promise<EmailPreview>;
  /**
      * Retrieves an email template\'s settings
      * Retrieve the email template settings
      * @param param the request object
      */
  getEmailSettings(param: CustomizationApiGetEmailSettingsRequest, options?: Configuration): Promise<EmailSettingsResponse>;
  /**
      * Retrieves the details of an email template by name
      * Retrieve an email template
      * @param param the request object
      */
  getEmailTemplate(param: CustomizationApiGetEmailTemplateRequest, options?: Configuration): Promise<EmailTemplateResponse>;
  /**
      * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the error page sub-resources
      * @param param the request object
      */
  getErrorPage(param: CustomizationApiGetErrorPageRequest, options?: Configuration): Promise<PageRoot>;
  /**
      * Retrieves the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Retrieve the preview error page preview
      * @param param the request object
      */
  getPreviewErrorPage(param: CustomizationApiGetPreviewErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Retrieve the preview sign-in page preview
      * @param param the request object
      */
  getPreviewSignInPage(param: CustomizationApiGetPreviewSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the sign-in page sub-resources
      * @param param the request object
      */
  getSignInPage(param: CustomizationApiGetSignInPageRequest, options?: Configuration): Promise<PageRoot>;
  /**
      * Retrieves the sign-out page settings
      * Retrieve the sign-out page settings
      * @param param the request object
      */
  getSignOutPageSettings(param: CustomizationApiGetSignOutPageSettingsRequest, options?: Configuration): Promise<HostedPage>;
  /**
      * Lists all sign-in widget versions supported by the current org
      * List all Sign-In Widget versions
      * @param param the request object
      */
  listAllSignInWidgetVersions(param: CustomizationApiListAllSignInWidgetVersionsRequest, options?: Configuration): Promise<Collection<string>>;
  /**
      * Lists all domains associated with a brand by `brandId`
      * List all domains associated with a brand
      * @param param the request object
      */
  listBrandDomains(param: CustomizationApiListBrandDomainsRequest, options?: Configuration): Promise<BrandDomains>;
  /**
      * Lists all the themes in your brand.  > **Important:** Currently each org supports only one theme, therefore this contains a single object only.
      * List all themes
      * @param param the request object
      */
  listBrandThemes(param: CustomizationApiListBrandThemesRequest, options?: Configuration): Promise<Collection<ThemeResponse>>;
  /**
      * Lists all the brands in your org
      * List all brands
      * @param param the request object
      */
  listBrands(param?: CustomizationApiListBrandsRequest, options?: Configuration): Promise<Collection<BrandWithEmbedded>>;
  /**
      * Lists all customizations of an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all existing customizations are retrieved, including customizations for additional languages. If disabled, only customizations for Okta-supported languages are returned.
      * List all email customizations
      * @param param the request object
      */
  listEmailCustomizations(param: CustomizationApiListEmailCustomizationsRequest, options?: Configuration): Promise<Collection<EmailCustomization>>;
  /**
      * Lists all supported email templates
      * List all email templates
      * @param param the request object
      */
  listEmailTemplates(param: CustomizationApiListEmailTemplatesRequest, options?: Configuration): Promise<Collection<EmailTemplateResponse>>;
  /**
      * Replaces a brand by `brandId`  Passing an invalid `brandId` returns a `404 Not Found` status code with the error code `E0000007`.  Not providing `agreeToCustomPrivacyPolicy` with `customPrivacyPolicyUrl` returns a `400 Bad Request` status code with the error code `E0000001`.
      * Replace a brand
      * @param param the request object
      */
  replaceBrand(param: CustomizationApiReplaceBrandRequest, options?: Configuration): Promise<Brand>;
  /**
      * Replaces a theme for a brand
      * Replace a theme
      * @param param the request object
      */
  replaceBrandTheme(param: CustomizationApiReplaceBrandThemeRequest, options?: Configuration): Promise<ThemeResponse>;
  /**
      * Replaces the customized error page. The customized error page appears in your live environment.
      * Replace the customized error page
      * @param param the request object
      */
  replaceCustomizedErrorPage(param: CustomizationApiReplaceCustomizedErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
      * Replace the customized sign-in page
      * @param param the request object
      */
  replaceCustomizedSignInPage(param: CustomizationApiReplaceCustomizedSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Replaces an email customization using property values  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to update a customization for an additional language return a `404 Not Found` error response.
      * Replace an email customization
      * @param param the request object
      */
  replaceEmailCustomization(param: CustomizationApiReplaceEmailCustomizationRequest, options?: Configuration): Promise<EmailCustomization>;
  /**
      * Replaces an email template\'s settings
      * Replace the email template settings
      * @param param the request object
      */
  replaceEmailSettings(param: CustomizationApiReplaceEmailSettingsRequest, options?: Configuration): Promise<EmailSettings>;
  /**
      * Replaces the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Replace the preview error page
      * @param param the request object
      */
  replacePreviewErrorPage(param: CustomizationApiReplacePreviewErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Replace the preview sign-in page
      * @param param the request object
      */
  replacePreviewSignInPage(param: CustomizationApiReplacePreviewSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Replaces the sign-out page settings
      * Replace the sign-out page settings
      * @param param the request object
      */
  replaceSignOutPageSettings(param: CustomizationApiReplaceSignOutPageSettingsRequest, options?: Configuration): Promise<HostedPage>;
  /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled and the `language` parameter is an additional language, the test email uses the customization corresponding to the language. 2. The email template\'s default customization. 3. The email template’s default content, translated to the current user\'s language.
      * Send a test email
      * @param param the request object
      */
  sendTestEmail(param: CustomizationApiSendTestEmailRequest, options?: Configuration): Promise<void>;
  /**
      * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
      * Upload the background image
      * @param param the request object
      */
  uploadBrandThemeBackgroundImage(param: CustomizationApiUploadBrandThemeBackgroundImageRequest, options?: Configuration): Promise<ImageUploadResponse>;
  /**
      * Uploads and replaces the favicon for the theme
      * Upload the favicon
      * @param param the request object
      */
  uploadBrandThemeFavicon(param: CustomizationApiUploadBrandThemeFaviconRequest, options?: Configuration): Promise<ImageUploadResponse>;
  /**
      * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the logo
      * @param param the request object
      */
  uploadBrandThemeLogo(param: CustomizationApiUploadBrandThemeLogoRequest, options?: Configuration): Promise<ImageUploadResponse>;
}
import { DeviceApiRequestFactory, DeviceApiResponseProcessor } from '../apis/DeviceApi';
export interface DeviceApiActivateDeviceRequest {
    /**
      * &#x60;id&#x60; of the device
      * @type string
      * @memberof DeviceApiactivateDevice
      */
    deviceId: string;
}
export interface DeviceApiDeactivateDeviceRequest {
    /**
      * &#x60;id&#x60; of the device
      * @type string
      * @memberof DeviceApideactivateDevice
      */
    deviceId: string;
}
export interface DeviceApiDeleteDeviceRequest {
    /**
      * &#x60;id&#x60; of the device
      * @type string
      * @memberof DeviceApideleteDevice
      */
    deviceId: string;
}
export interface DeviceApiGetDeviceRequest {
    /**
      * &#x60;id&#x60; of the device
      * @type string
      * @memberof DeviceApigetDevice
      */
    deviceId: string;
}
export interface DeviceApiListDeviceUsersRequest {
    /**
      * &#x60;id&#x60; of the device
      * @type string
      * @memberof DeviceApilistDeviceUsers
      */
    deviceId: string;
}
export interface DeviceApiListDevicesRequest {
    /**
      *
      * @type string
      * @memberof DeviceApilistDevices
      */
    after?: string;
    /**
      * A limit on the number of objects to return (recommend &#x60;20&#x60;)
      * @type number
      * @memberof DeviceApilistDevices
      */
    limit?: number;
    /**
      * A SCIM filter expression that filters the results. Searches include all device &#x60;profile&#x60; properties and the device &#x60;id&#x60;, &#x60;status&#x60;, and &#x60;lastUpdated&#x60; properties.  Searches for devices can be filtered by the contains (&#x60;co&#x60;) operator. You can only use &#x60;co&#x60; with these select device profile attributes: &#x60;profile.displayName&#x60;, &#x60;profile.serialNumber&#x60;, &#x60;profile.imei&#x60;, &#x60;profile.meid&#x60;, &#x60;profile.udid&#x60;, and &#x60;profile.sid&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @type string
      * @memberof DeviceApilistDevices
      */
    search?: string;
    /**
      * Includes associated user details and management status for the device in the &#x60;_embedded&#x60; attribute
      * @type &#39;user&#39; | &#39;userSummary&#39;
      * @memberof DeviceApilistDevices
      */
    expand?: 'user' | 'userSummary';
}
export interface DeviceApiSuspendDeviceRequest {
    /**
      * &#x60;id&#x60; of the device
      * @type string
      * @memberof DeviceApisuspendDevice
      */
    deviceId: string;
}
export interface DeviceApiUnsuspendDeviceRequest {
    /**
      * &#x60;id&#x60; of the device
      * @type string
      * @memberof DeviceApiunsuspendDevice
      */
    deviceId: string;
}
export declare class ObjectDeviceApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: DeviceApiRequestFactory, responseProcessor?: DeviceApiResponseProcessor);
  /**
      * Activates a device by setting its status to `ACTIVE` by `deviceId`. Activated devices are used to create and delete device user links.
      * Activate a device
      * @param param the request object
      */
  activateDevice(param: DeviceApiActivateDeviceRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates a device by setting its status to `DEACTIVATED` by `deviceId`. Deactivation causes a device to lose all device user links. Set the device status to `DEACTIVATED` before deleting it. > **Note:** When deactivating a Device, keep in mind the following:   - Device deactivation is a destructive operation for device factors and client certificates. Device reenrollment using Okta Verify allows end users to set up new factors on the device.   - Device deletion removes the device record from Okta. Reenrollment creates a new device record.
      * Deactivate a device
      * @param param the request object
      */
  deactivateDevice(param: DeviceApiDeactivateDeviceRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes (permanently) a device by `deviceId` if it has a status of `DEACTIVATED`. You can transition the device to `DEACTIVATED` status using the [Deactivate a Device](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Device/#tag/Device/operation/deactivateDevice) endpoint. This request is destructive and deletes all of the profile data related to the device. Once deleted, device data can\'t be recovered. However, reenrollment creates a new device record. > **Note:** Attempts to delete a device that isn\'t in a `DEACTIVATED` state raise an error.
      * Delete a device
      * @param param the request object
      */
  deleteDevice(param: DeviceApiDeleteDeviceRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a device by `deviceId`
      * Retrieve a device
      * @param param the request object
      */
  getDevice(param: DeviceApiGetDeviceRequest, options?: Configuration): Promise<Device>;
  /**
      * Lists all Users for a device by `deviceId`
      * List all users for a device
      * @param param the request object
      */
  listDeviceUsers(param: DeviceApiListDeviceUsersRequest, options?: Configuration): Promise<Collection<DeviceUser>>;
  /**
      * Lists all devices with pagination support.  >**Note:** To list all devices enrolled by a user, use the [List all devices endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserDevices).  You can return a subset of devices that match a supported search criteria using the `search` query parameter. Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request. > **Note:** Listing devices with `search` should not be used as a part of any critical flow, such as authentication or updates, to prevent potential data loss. `search` results may not reflect the latest information, as this endpoint uses a search index which may not be up-to-date with recent updates to the object.  Don\'t use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss.   Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation requires [URL encoding](https://www.w3.org/TR/html4/interact/forms.html#h-17.13.4.1). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
      * List all devices
      * @param param the request object
      */
  listDevices(param?: DeviceApiListDevicesRequest, options?: Configuration): Promise<Collection<DeviceList>>;
  /**
      * Suspends a device by setting its status to `SUSPENDED`. Use suspended devices to create and delete device user links. You can only unsuspend or deactivate suspended devices. > **Note:** `SUSPENDED` status is meant to be temporary, so it isn\'t destructive.
      * Suspend a Device
      * @param param the request object
      */
  suspendDevice(param: DeviceApiSuspendDeviceRequest, options?: Configuration): Promise<void>;
  /**
      * Unsuspends a device by returning its `status` to `ACTIVE`. >**Note:** Only devices with a `SUSPENDED` status can be unsuspended.
      * Unsuspend a Device
      * @param param the request object
      */
  unsuspendDevice(param: DeviceApiUnsuspendDeviceRequest, options?: Configuration): Promise<void>;
}
import { DeviceAccessApiRequestFactory, DeviceAccessApiResponseProcessor } from '../apis/DeviceAccessApi';
export interface DeviceAccessApiGetDesktopMFAEnforceNumberMatchingChallengeOrgSettingRequest {
}
export interface DeviceAccessApiGetDesktopMFARecoveryPinOrgSettingRequest {
}
export interface DeviceAccessApiReplaceDesktopMFAEnforceNumberMatchingChallengeOrgSettingRequest {
    /**
      *
      * @type DesktopMFAEnforceNumberMatchingChallengeOrgSetting
      * @memberof DeviceAccessApireplaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting
      */
    desktopMFAEnforceNumberMatchingChallengeOrgSetting: DesktopMFAEnforceNumberMatchingChallengeOrgSetting;
}
export interface DeviceAccessApiReplaceDesktopMFARecoveryPinOrgSettingRequest {
    /**
      *
      * @type DesktopMFARecoveryPinOrgSetting
      * @memberof DeviceAccessApireplaceDesktopMFARecoveryPinOrgSetting
      */
    desktopMFARecoveryPinOrgSetting: DesktopMFARecoveryPinOrgSetting;
}
export declare class ObjectDeviceAccessApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: DeviceAccessApiRequestFactory, responseProcessor?: DeviceAccessApiResponseProcessor);
  /**
      * Retrieves the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
      * Retrieve the Desktop MFA Enforce Number Matching Challenge org setting
      * @param param the request object
      */
  getDesktopMFAEnforceNumberMatchingChallengeOrgSetting(param?: DeviceAccessApiGetDesktopMFAEnforceNumberMatchingChallengeOrgSettingRequest, options?: Configuration): Promise<DesktopMFAEnforceNumberMatchingChallengeOrgSetting>;
  /**
      * Retrieves the status of the Desktop MFA Recovery PIN feature. That is, whether or not the feature is enabled for your org.
      * Retrieve the Desktop MFA Recovery PIN org setting
      * @param param the request object
      */
  getDesktopMFARecoveryPinOrgSetting(param?: DeviceAccessApiGetDesktopMFARecoveryPinOrgSettingRequest, options?: Configuration): Promise<DesktopMFARecoveryPinOrgSetting>;
  /**
      * Replaces the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
      * Replace the Desktop MFA Enforce Number Matching Challenge org setting
      * @param param the request object
      */
  replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting(param: DeviceAccessApiReplaceDesktopMFAEnforceNumberMatchingChallengeOrgSettingRequest, options?: Configuration): Promise<DesktopMFAEnforceNumberMatchingChallengeOrgSetting>;
  /**
      * Replaces the Desktop MFA Recovery PIN feature for your org
      * Replace the Desktop MFA Recovery PIN org setting
      * @param param the request object
      */
  replaceDesktopMFARecoveryPinOrgSetting(param: DeviceAccessApiReplaceDesktopMFARecoveryPinOrgSettingRequest, options?: Configuration): Promise<DesktopMFARecoveryPinOrgSetting>;
}
import { DeviceAssuranceApiRequestFactory, DeviceAssuranceApiResponseProcessor } from '../apis/DeviceAssuranceApi';
export interface DeviceAssuranceApiCreateDeviceAssurancePolicyRequest {
    /**
      *
      * @type DeviceAssurance
      * @memberof DeviceAssuranceApicreateDeviceAssurancePolicy
      */
    deviceAssurance: DeviceAssurance;
}
export interface DeviceAssuranceApiDeleteDeviceAssurancePolicyRequest {
    /**
      * Id of the device assurance policy
      * @type string
      * @memberof DeviceAssuranceApideleteDeviceAssurancePolicy
      */
    deviceAssuranceId: string;
}
export interface DeviceAssuranceApiGetDeviceAssurancePolicyRequest {
    /**
      * Id of the device assurance policy
      * @type string
      * @memberof DeviceAssuranceApigetDeviceAssurancePolicy
      */
    deviceAssuranceId: string;
}
export interface DeviceAssuranceApiListDeviceAssurancePoliciesRequest {
}
export interface DeviceAssuranceApiReplaceDeviceAssurancePolicyRequest {
    /**
      * Id of the device assurance policy
      * @type string
      * @memberof DeviceAssuranceApireplaceDeviceAssurancePolicy
      */
    deviceAssuranceId: string;
    /**
      *
      * @type DeviceAssurance
      * @memberof DeviceAssuranceApireplaceDeviceAssurancePolicy
      */
    deviceAssurance: DeviceAssurance;
}
export declare class ObjectDeviceAssuranceApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: DeviceAssuranceApiRequestFactory, responseProcessor?: DeviceAssuranceApiResponseProcessor);
  /**
      * Creates a new device assurance policy
      * Create a device assurance policy
      * @param param the request object
      */
  createDeviceAssurancePolicy(param: DeviceAssuranceApiCreateDeviceAssurancePolicyRequest, options?: Configuration): Promise<DeviceAssurance>;
  /**
      * Deletes a device assurance policy by `deviceAssuranceId`. If the device assurance policy is currently being used in the org Authentication Policies, the delete will not be allowed.
      * Delete a device assurance policy
      * @param param the request object
      */
  deleteDeviceAssurancePolicy(param: DeviceAssuranceApiDeleteDeviceAssurancePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a device assurance policy by `deviceAssuranceId`
      * Retrieve a device assurance policy
      * @param param the request object
      */
  getDeviceAssurancePolicy(param: DeviceAssuranceApiGetDeviceAssurancePolicyRequest, options?: Configuration): Promise<DeviceAssurance>;
  /**
      * Lists all device assurance policies
      * List all device assurance policies
      * @param param the request object
      */
  listDeviceAssurancePolicies(param?: DeviceAssuranceApiListDeviceAssurancePoliciesRequest, options?: Configuration): Promise<Collection<DeviceAssurance>>;
  /**
      * Replaces a device assurance policy by `deviceAssuranceId`
      * Replace a device assurance policy
      * @param param the request object
      */
  replaceDeviceAssurancePolicy(param: DeviceAssuranceApiReplaceDeviceAssurancePolicyRequest, options?: Configuration): Promise<DeviceAssurance>;
}
import { DeviceIntegrationsApiRequestFactory, DeviceIntegrationsApiResponseProcessor } from '../apis/DeviceIntegrationsApi';
export interface DeviceIntegrationsApiActivateDeviceIntegrationRequest {
    /**
      * The ID of the device integration
      * @type string
      * @memberof DeviceIntegrationsApiactivateDeviceIntegration
      */
    deviceIntegrationId: string;
}
export interface DeviceIntegrationsApiDeactivateDeviceIntegrationRequest {
    /**
      * The ID of the device integration
      * @type string
      * @memberof DeviceIntegrationsApideactivateDeviceIntegration
      */
    deviceIntegrationId: string;
}
export interface DeviceIntegrationsApiGetDeviceIntegrationRequest {
    /**
      * The ID of the device integration
      * @type string
      * @memberof DeviceIntegrationsApigetDeviceIntegration
      */
    deviceIntegrationId: string;
}
export interface DeviceIntegrationsApiListDeviceIntegrationsRequest {
}
export declare class ObjectDeviceIntegrationsApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: DeviceIntegrationsApiRequestFactory, responseProcessor?: DeviceIntegrationsApiResponseProcessor);
  /**
      * Activates a device integration and populates the related configurations by `deviceIntegrationId`
      * Activate a device integration
      * @param param the request object
      */
  activateDeviceIntegration(param: DeviceIntegrationsApiActivateDeviceIntegrationRequest, options?: Configuration): Promise<DeviceIntegrations>;
  /**
      * Deactivates a device integration by `deviceIntegrationId`
      * Deactivate a device integration
      * @param param the request object
      */
  deactivateDeviceIntegration(param: DeviceIntegrationsApiDeactivateDeviceIntegrationRequest, options?: Configuration): Promise<DeviceIntegrations>;
  /**
      * Retrieves a device integration by `deviceIntegrationId`
      * Retrieve a device integration
      * @param param the request object
      */
  getDeviceIntegration(param: DeviceIntegrationsApiGetDeviceIntegrationRequest, options?: Configuration): Promise<DeviceIntegrations>;
  /**
      * Lists all device integrations for your org. Examples include Device Posture Provider, Windows Security Center, Chrome Device Trust, OSQuery, and Android Device Trust.
      * List all device integrations
      * @param param the request object
      */
  listDeviceIntegrations(param?: DeviceIntegrationsApiListDeviceIntegrationsRequest, options?: Configuration): Promise<Collection<DeviceIntegrations>>;
}
import { DevicePostureCheckApiRequestFactory, DevicePostureCheckApiResponseProcessor } from '../apis/DevicePostureCheckApi';
export interface DevicePostureCheckApiCreateDevicePostureCheckRequest {
    /**
      *
      * @type DevicePostureCheck
      * @memberof DevicePostureCheckApicreateDevicePostureCheck
      */
    devicePostureCheck: DevicePostureCheck;
}
export interface DevicePostureCheckApiDeleteDevicePostureCheckRequest {
    /**
      * ID of the device posture check
      * @type string
      * @memberof DevicePostureCheckApideleteDevicePostureCheck
      */
    postureCheckId: string;
}
export interface DevicePostureCheckApiGetDevicePostureCheckRequest {
    /**
      * ID of the device posture check
      * @type string
      * @memberof DevicePostureCheckApigetDevicePostureCheck
      */
    postureCheckId: string;
}
export interface DevicePostureCheckApiListDefaultDevicePostureChecksRequest {
}
export interface DevicePostureCheckApiListDevicePostureChecksRequest {
}
export interface DevicePostureCheckApiReplaceDevicePostureCheckRequest {
    /**
      * ID of the device posture check
      * @type string
      * @memberof DevicePostureCheckApireplaceDevicePostureCheck
      */
    postureCheckId: string;
    /**
      *
      * @type DevicePostureCheck
      * @memberof DevicePostureCheckApireplaceDevicePostureCheck
      */
    devicePostureCheck: DevicePostureCheck;
}
export declare class ObjectDevicePostureCheckApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: DevicePostureCheckApiRequestFactory, responseProcessor?: DevicePostureCheckApiResponseProcessor);
  /**
      * Creates a device posture check
      * Create a device posture check
      * @param param the request object
      */
  createDevicePostureCheck(param: DevicePostureCheckApiCreateDevicePostureCheckRequest, options?: Configuration): Promise<DevicePostureCheck>;
  /**
      * Deletes a device posture check by `postureCheckId`. You can\'t delete the device posture check if it\'s used in a device assurance policy.
      * Delete a device posture check
      * @param param the request object
      */
  deleteDevicePostureCheck(param: DevicePostureCheckApiDeleteDevicePostureCheckRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a device posture check by `postureCheckId`
      * Retrieve a device posture check
      * @param param the request object
      */
  getDevicePostureCheck(param: DevicePostureCheckApiGetDevicePostureCheckRequest, options?: Configuration): Promise<DevicePostureCheck>;
  /**
      * Lists all default device posture checks. Default device posture checks are defined by Okta. Their type will always be `BUILTIN`.
      * List all default device posture checks
      * @param param the request object
      */
  listDefaultDevicePostureChecks(param?: DevicePostureCheckApiListDefaultDevicePostureChecksRequest, options?: Configuration): Promise<Collection<DevicePostureCheck>>;
  /**
      * Lists all device posture checks
      * List all device posture checks
      * @param param the request object
      */
  listDevicePostureChecks(param?: DevicePostureCheckApiListDevicePostureChecksRequest, options?: Configuration): Promise<Collection<DevicePostureCheck>>;
  /**
      * Replaces a device posture check by `postureCheckId`
      * Replace a device posture check
      * @param param the request object
      */
  replaceDevicePostureCheck(param: DevicePostureCheckApiReplaceDevicePostureCheckRequest, options?: Configuration): Promise<DevicePostureCheck>;
}
import { DirectoriesIntegrationApiRequestFactory, DirectoriesIntegrationApiResponseProcessor } from '../apis/DirectoriesIntegrationApi';
export interface DirectoriesIntegrationApiUpdateADGroupMembershipRequest {
    /**
      * ID of the Active Directory app instance in Okta
      * @type string
      * @memberof DirectoriesIntegrationApiupdateADGroupMembership
      */
    appInstanceId: string;
    /**
      *
      * @type AgentAction
      * @memberof DirectoriesIntegrationApiupdateADGroupMembership
      */
    agentAction: AgentAction;
}
export declare class ObjectDirectoriesIntegrationApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: DirectoriesIntegrationApiRequestFactory, responseProcessor?: DirectoriesIntegrationApiResponseProcessor);
  /**
      * Updates an Active Directory group membership directly in Active Directory  > **Note:** See **Before you begin: Active Directory integration with the following setup** in the [Use Okta Access Certifications to manage AD group membership](https://help.okta.com/okta_help.htm?type=oie&id=ad-bidirectional-group-mgt-configure) product documentation.
      * Update an Active Directory group membership
      * @param param the request object
      */
  updateADGroupMembership(param: DirectoriesIntegrationApiUpdateADGroupMembershipRequest, options?: Configuration): Promise<void>;
}
import { DisasterRecoveryApiRequestFactory, DisasterRecoveryApiResponseProcessor } from '../apis/DisasterRecoveryApi';
export interface DisasterRecoveryApiGetDRStatusRequest {
}
export interface DisasterRecoveryApiGetDRStatusForDomainRequest {
    /**
      * The Okta domain name of your org or one of your custom domains
      * @type string
      * @memberof DisasterRecoveryApigetDRStatusForDomain
      */
    domain: string;
}
export interface DisasterRecoveryApiStartOrgFailbackRequest {
    /**
      * The request body is optional. You can specify a list of domains to failback, an empty object (&#x60;{}&#x60;), or no payload.
      * @type StartOrgFailbackRequest
      * @memberof DisasterRecoveryApistartOrgFailback
      */
    startOrgFailbackRequest?: StartOrgFailbackRequest;
}
export interface DisasterRecoveryApiStartOrgFailoverRequest {
    /**
      * The request body is optional. You can specify a list of domains to failover, an empty object (&#x60;{}&#x60;), or no payload.
      * @type StartOrgFailoverRequest
      * @memberof DisasterRecoveryApistartOrgFailover
      */
    startOrgFailoverRequest?: StartOrgFailoverRequest;
}
export declare class ObjectDisasterRecoveryApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: DisasterRecoveryApiRequestFactory, responseProcessor?: DisasterRecoveryApiResponseProcessor);
  /**
      * Retrieves the failover or failback status for all the domains for your org
      * Retrieve the disaster recovery status for all domains for your org
      * @param param the request object
      */
  getDRStatus(param?: DisasterRecoveryApiGetDRStatusRequest, options?: Configuration): Promise<GetDRStatus200Response>;
  /**
      * Retrieves the failover or failback status for the domain specified in the request path
      * Retrieve the disaster recovery status for a domain
      * @param param the request object
      */
  getDRStatusForDomain(param: DisasterRecoveryApiGetDRStatusForDomainRequest, options?: Configuration): Promise<GetDRStatus200Response>;
  /**
      * Starts the failback of your org
      * Start the failback of your org
      * @param param the request object
      */
  startOrgFailback(param?: DisasterRecoveryApiStartOrgFailbackRequest, options?: Configuration): Promise<StartOrgFailback200Response>;
  /**
      * Starts the failover of your org
      * Start the failover of your org
      * @param param the request object
      */
  startOrgFailover(param?: DisasterRecoveryApiStartOrgFailoverRequest, options?: Configuration): Promise<StartOrgFailover200Response>;
}
import { EmailDomainApiRequestFactory, EmailDomainApiResponseProcessor } from '../apis/EmailDomainApi';
export interface EmailDomainApiCreateEmailDomainRequest {
    /**
      *
      * @type EmailDomain
      * @memberof EmailDomainApicreateEmailDomain
      */
    emailDomain: EmailDomain;
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;brands&#39;&gt;
      * @memberof EmailDomainApicreateEmailDomain
      */
    expand?: Array<'brands'>;
}
export interface EmailDomainApiDeleteEmailDomainRequest {
    /**
      *
      * @type string
      * @memberof EmailDomainApideleteEmailDomain
      */
    emailDomainId: string;
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;brands&#39;&gt;
      * @memberof EmailDomainApideleteEmailDomain
      */
    expand?: Array<'brands'>;
}
export interface EmailDomainApiGetEmailDomainRequest {
    /**
      *
      * @type string
      * @memberof EmailDomainApigetEmailDomain
      */
    emailDomainId: string;
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;brands&#39;&gt;
      * @memberof EmailDomainApigetEmailDomain
      */
    expand?: Array<'brands'>;
}
export interface EmailDomainApiListEmailDomainsRequest {
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;brands&#39;&gt;
      * @memberof EmailDomainApilistEmailDomains
      */
    expand?: Array<'brands'>;
}
export interface EmailDomainApiReplaceEmailDomainRequest {
    /**
      *
      * @type string
      * @memberof EmailDomainApireplaceEmailDomain
      */
    emailDomainId: string;
    /**
      *
      * @type UpdateEmailDomain
      * @memberof EmailDomainApireplaceEmailDomain
      */
    updateEmailDomain: UpdateEmailDomain;
    /**
      * Specifies additional metadata to be included in the response
      * @type Array&lt;&#39;brands&#39;&gt;
      * @memberof EmailDomainApireplaceEmailDomain
      */
    expand?: Array<'brands'>;
}
export interface EmailDomainApiVerifyEmailDomainRequest {
    /**
      *
      * @type string
      * @memberof EmailDomainApiverifyEmailDomain
      */
    emailDomainId: string;
}
export declare class ObjectEmailDomainApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: EmailDomainApiRequestFactory, responseProcessor?: EmailDomainApiResponseProcessor);
  /**
      * Creates an Email Domain in your org
      * Create an email domain
      * @param param the request object
      */
  createEmailDomain(param: EmailDomainApiCreateEmailDomainRequest, options?: Configuration): Promise<EmailDomainResponse>;
  /**
      * Deletes an Email Domain by `emailDomainId`
      * Delete an email domain
      * @param param the request object
      */
  deleteEmailDomain(param: EmailDomainApiDeleteEmailDomainRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an Email Domain by `emailDomainId`
      * Retrieve an email domain
      * @param param the request object
      */
  getEmailDomain(param: EmailDomainApiGetEmailDomainRequest, options?: Configuration): Promise<EmailDomainResponseWithEmbedded>;
  /**
      * Lists all the Email Domains in your org
      * List all email domains
      * @param param the request object
      */
  listEmailDomains(param?: EmailDomainApiListEmailDomainsRequest, options?: Configuration): Promise<Collection<EmailDomainResponseWithEmbedded>>;
  /**
      * Replaces associated username and sender display name by `emailDomainId`
      * Replace an email domain
      * @param param the request object
      */
  replaceEmailDomain(param: EmailDomainApiReplaceEmailDomainRequest, options?: Configuration): Promise<EmailDomainResponse>;
  /**
      * Verifies an Email Domain by `emailDomainId`
      * Verify an email domain
      * @param param the request object
      */
  verifyEmailDomain(param: EmailDomainApiVerifyEmailDomainRequest, options?: Configuration): Promise<EmailDomainResponse>;
}
import { EmailServerApiRequestFactory, EmailServerApiResponseProcessor } from '../apis/EmailServerApi';
export interface EmailServerApiCreateEmailServerRequest {
    /**
      *
      * @type EmailServerPost
      * @memberof EmailServerApicreateEmailServer
      */
    emailServerPost?: EmailServerPost;
}
export interface EmailServerApiDeleteEmailServerRequest {
    /**
      *
      * @type string
      * @memberof EmailServerApideleteEmailServer
      */
    emailServerId: string;
}
export interface EmailServerApiGetEmailServerRequest {
    /**
      *
      * @type string
      * @memberof EmailServerApigetEmailServer
      */
    emailServerId: string;
}
export interface EmailServerApiListEmailServersRequest {
}
export interface EmailServerApiTestEmailServerRequest {
    /**
      *
      * @type string
      * @memberof EmailServerApitestEmailServer
      */
    emailServerId: string;
    /**
      *
      * @type EmailTestAddresses
      * @memberof EmailServerApitestEmailServer
      */
    emailTestAddresses?: EmailTestAddresses;
}
export interface EmailServerApiUpdateEmailServerRequest {
    /**
      *
      * @type string
      * @memberof EmailServerApiupdateEmailServer
      */
    emailServerId: string;
    /**
      *
      * @type EmailServerRequest
      * @memberof EmailServerApiupdateEmailServer
      */
    emailServerRequest?: EmailServerRequest;
}
export declare class ObjectEmailServerApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: EmailServerApiRequestFactory, responseProcessor?: EmailServerApiResponseProcessor);
  /**
      * Creates a custom email SMTP server configuration for your org
      * Create a custom SMTP server
      * @param param the request object
      */
  createEmailServer(param?: EmailServerApiCreateEmailServerRequest, options?: Configuration): Promise<EmailServerResponse>;
  /**
      * Deletes the specified custom SMTP server configuration
      * Delete an SMTP server configuration
      * @param param the request object
      */
  deleteEmailServer(param: EmailServerApiDeleteEmailServerRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves the specified custom SMTP server configuration
      * Retrieve an SMTP server configuration
      * @param param the request object
      */
  getEmailServer(param: EmailServerApiGetEmailServerRequest, options?: Configuration): Promise<EmailServerListResponse>;
  /**
      * Lists all the enrolled custom SMTP server configurations
      * List all enrolled SMTP servers
      * @param param the request object
      */
  listEmailServers(param?: EmailServerApiListEmailServersRequest, options?: Configuration): Promise<EmailServerListResponse>;
  /**
      * Tests the specified custom SMTP Server configuration
      * Test an SMTP server configuration
      * @param param the request object
      */
  testEmailServer(param: EmailServerApiTestEmailServerRequest, options?: Configuration): Promise<void>;
  /**
      * Updates the specified custom SMTP server configuration
      * Update an SMTP server configuration
      * @param param the request object
      */
  updateEmailServer(param: EmailServerApiUpdateEmailServerRequest, options?: Configuration): Promise<EmailServerResponse>;
}
import { EventHookApiRequestFactory, EventHookApiResponseProcessor } from '../apis/EventHookApi';
export interface EventHookApiActivateEventHookRequest {
    /**
      * &#x60;id&#x60; of the Event Hook
      * @type string
      * @memberof EventHookApiactivateEventHook
      */
    eventHookId: string;
}
export interface EventHookApiCreateEventHookRequest {
    /**
      *
      * @type EventHook
      * @memberof EventHookApicreateEventHook
      */
    eventHook: EventHook;
}
export interface EventHookApiDeactivateEventHookRequest {
    /**
      * &#x60;id&#x60; of the Event Hook
      * @type string
      * @memberof EventHookApideactivateEventHook
      */
    eventHookId: string;
}
export interface EventHookApiDeleteEventHookRequest {
    /**
      * &#x60;id&#x60; of the Event Hook
      * @type string
      * @memberof EventHookApideleteEventHook
      */
    eventHookId: string;
}
export interface EventHookApiGetEventHookRequest {
    /**
      * &#x60;id&#x60; of the Event Hook
      * @type string
      * @memberof EventHookApigetEventHook
      */
    eventHookId: string;
}
export interface EventHookApiListEventHooksRequest {
}
export interface EventHookApiReplaceEventHookRequest {
    /**
      * &#x60;id&#x60; of the Event Hook
      * @type string
      * @memberof EventHookApireplaceEventHook
      */
    eventHookId: string;
    /**
      *
      * @type EventHook
      * @memberof EventHookApireplaceEventHook
      */
    eventHook: EventHook;
}
export interface EventHookApiVerifyEventHookRequest {
    /**
      * &#x60;id&#x60; of the Event Hook
      * @type string
      * @memberof EventHookApiverifyEventHook
      */
    eventHookId: string;
}
export declare class ObjectEventHookApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: EventHookApiRequestFactory, responseProcessor?: EventHookApiResponseProcessor);
  /**
      * Activates the event hook that matches the provided `id`
      * Activate an event hook
      * @param param the request object
      */
  activateEventHook(param: EventHookApiActivateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Creates a new event hook for your organization in `ACTIVE` status. You pass an event hook object in the JSON payload of your request. That object represents the set of required information about the event hook you\'re registering, including:   * The URI of your external service   * The [events](https://developer.okta.com/docs/reference/api/event-types/) in Okta you want to subscribe to   * An optional event hook filter that can reduce the number of event hook calls. This is a self-service Early Access (EA) feature.     See [Create an event hook filter](https://developer.okta.com/docs/concepts/event-hooks/#create-an-event-hook-filter).      Additionally, you can specify a secret API key for Okta to pass to your external service endpoint for security verification. Note that the API key you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs. Optionally, you can specify extra headers that Okta passes to your external service with each call. Your external service must use a valid HTTPS endpoint.
      * Create an event hook
      * @param param the request object
      */
  createEventHook(param: EventHookApiCreateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Deactivates the event hook that matches the provided `id`
      * Deactivate an event hook
      * @param param the request object
      */
  deactivateEventHook(param: EventHookApiDeactivateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Deletes the event hook that matches the provided `id`. After deletion, the event hook is unrecoverable. As a safety precaution, you can only delete event hooks with a status of `INACTIVE`.
      * Delete an event hook
      * @param param the request object
      */
  deleteEventHook(param: EventHookApiDeleteEventHookRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an event hook
      * Retrieve an event hook
      * @param param the request object
      */
  getEventHook(param: EventHookApiGetEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Lists all event hooks
      * List all event hooks
      * @param param the request object
      */
  listEventHooks(param?: EventHookApiListEventHooksRequest, options?: Configuration): Promise<Collection<EventHook>>;
  /**
      * Replaces an event hook. Okta validates the new properties before replacing the existing values. Some event hook properties are immutable and can\'t be updated. Refer to the parameter description in the request body schema.  >**Note:** Updating the `channel` property requires you to verify the hook again.
      * Replace an event hook
      * @param param the request object
      */
  replaceEventHook(param: EventHookApiReplaceEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Verifies that the event hook matches the provided `eventHookId`. To verify ownership, your endpoint must send information back to Okta in JSON format. See [Event hooks](https://developer.okta.com/docs/concepts/event-hooks/#one-time-verification-request).  Only `ACTIVE` and `VERIFIED` event hooks can receive events from Okta.  If a response is not received within 3 seconds, the outbound request times out. One retry is attempted after a timeout or error response. If a successful response still isn\'t received, this operation returns a 400 error with more information about the failure.
      * Verify an event hook
      * @param param the request object
      */
  verifyEventHook(param: EventHookApiVerifyEventHookRequest, options?: Configuration): Promise<EventHook>;
}
import { FeatureApiRequestFactory, FeatureApiResponseProcessor } from '../apis/FeatureApi';
export interface FeatureApiGetFeatureRequest {
    /**
      * &#x60;id&#x60; of the feature
      * @type string
      * @memberof FeatureApigetFeature
      */
    featureId: string;
}
export interface FeatureApiListFeatureDependenciesRequest {
    /**
      * &#x60;id&#x60; of the feature
      * @type string
      * @memberof FeatureApilistFeatureDependencies
      */
    featureId: string;
}
export interface FeatureApiListFeatureDependentsRequest {
    /**
      * &#x60;id&#x60; of the feature
      * @type string
      * @memberof FeatureApilistFeatureDependents
      */
    featureId: string;
}
export interface FeatureApiListFeaturesRequest {
}
export interface FeatureApiUpdateFeatureLifecycleRequest {
    /**
      * &#x60;id&#x60; of the feature
      * @type string
      * @memberof FeatureApiupdateFeatureLifecycle
      */
    featureId: string;
    /**
      * Whether to &#x60;ENABLE&#x60; or &#x60;DISABLE&#x60; the feature
      * @type FeatureLifecycle
      * @memberof FeatureApiupdateFeatureLifecycle
      */
    lifecycle: FeatureLifecycle;
    /**
      * Indicates if you want to force enable or disable a feature. Supported value is &#x60;force&#x60;.
      * @type string
      * @memberof FeatureApiupdateFeatureLifecycle
      */
    mode?: string;
}
export declare class ObjectFeatureApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: FeatureApiRequestFactory, responseProcessor?: FeatureApiResponseProcessor);
  /**
      * Retrieves a feature by ID
      * Retrieve a feature
      * @param param the request object
      */
  getFeature(param: FeatureApiGetFeatureRequest, options?: Configuration): Promise<Feature>;
  /**
      * Lists all feature dependencies for a specified feature.  A feature\'s dependencies are the features that it requires to be enabled in order for itself to be enabled.
      * List all dependencies
      * @param param the request object
      */
  listFeatureDependencies(param: FeatureApiListFeatureDependenciesRequest, options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Lists all feature dependents for the specified feature.  A feature\'s dependents are the features that need to be disabled in order for the feature itself to be disabled.
      * List all dependents
      * @param param the request object
      */
  listFeatureDependents(param: FeatureApiListFeatureDependentsRequest, options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Lists all self-service features for your org
      * List all features
      * @param param the request object
      */
  listFeatures(param?: FeatureApiListFeaturesRequest, options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Updates a feature\'s lifecycle status. Use this endpoint to enable or disable a feature for your org.  Use the `mode=force` parameter to override dependency restrictions for a particular feature. Normally, you can\'t enable a feature if it has one or more dependencies that aren\'t enabled.  When you use the `mode=force` parameter while enabling a feature, Okta first tries to enable any disabled features that this feature may have as dependencies. If you don\'t pass the `mode=force` parameter and the feature has dependencies that need to be enabled before the feature is enabled, a 400 error is returned.  When you use the `mode=force` parameter while disabling a feature, Okta first tries to disable any enabled features that this feature may have as dependents. If you don\'t pass the `mode=force` parameter and the feature has dependents that need to be disabled before the feature is disabled, a 400 error is returned.  The following chart shows the different state transitions for a feature.  ![State transitions of a feature](../../../../../images/features/update-ssfeat-flowchart.png \'#width=500px;\')
      * Update a feature lifecycle
      * @param param the request object
      */
  updateFeatureLifecycle(param: FeatureApiUpdateFeatureLifecycleRequest, options?: Configuration): Promise<Feature>;
}
import { GovernanceBundleApiRequestFactory, GovernanceBundleApiResponseProcessor } from '../apis/GovernanceBundleApi';
export interface GovernanceBundleApiCreateGovernanceBundleRequest {
    /**
      *
      * @type GovernanceBundleCreateRequest
      * @memberof GovernanceBundleApicreateGovernanceBundle
      */
    governanceBundleCreateRequest: GovernanceBundleCreateRequest;
}
export interface GovernanceBundleApiDeleteGovernanceBundleRequest {
    /**
      * The &#x60;id&#x60; of a bundle
      * @type string
      * @memberof GovernanceBundleApideleteGovernanceBundle
      */
    bundleId: string;
}
export interface GovernanceBundleApiGetGovernanceBundleRequest {
    /**
      * The &#x60;id&#x60; of a bundle
      * @type string
      * @memberof GovernanceBundleApigetGovernanceBundle
      */
    bundleId: string;
}
export interface GovernanceBundleApiGetOptInStatusRequest {
}
export interface GovernanceBundleApiListBundleEntitlementValuesRequest {
    /**
      * The &#x60;id&#x60; of a bundle
      * @type string
      * @memberof GovernanceBundleApilistBundleEntitlementValues
      */
    bundleId: string;
    /**
      * The &#x60;id&#x60; of a bundle entitlement
      * @type string
      * @memberof GovernanceBundleApilistBundleEntitlementValues
      */
    entitlementId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof GovernanceBundleApilistBundleEntitlementValues
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof GovernanceBundleApilistBundleEntitlementValues
      */
    limit?: number;
}
export interface GovernanceBundleApiListBundleEntitlementsRequest {
    /**
      * The &#x60;id&#x60; of a bundle
      * @type string
      * @memberof GovernanceBundleApilistBundleEntitlements
      */
    bundleId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof GovernanceBundleApilistBundleEntitlements
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof GovernanceBundleApilistBundleEntitlements
      */
    limit?: number;
}
export interface GovernanceBundleApiListGovernanceBundlesRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof GovernanceBundleApilistGovernanceBundles
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof GovernanceBundleApilistGovernanceBundles
      */
    limit?: number;
}
export interface GovernanceBundleApiOptInRequest {
}
export interface GovernanceBundleApiOptOutRequest {
}
export interface GovernanceBundleApiReplaceGovernanceBundleRequest {
    /**
      * The &#x60;id&#x60; of a bundle
      * @type string
      * @memberof GovernanceBundleApireplaceGovernanceBundle
      */
    bundleId: string;
    /**
      *
      * @type GovernanceBundleUpdateRequest
      * @memberof GovernanceBundleApireplaceGovernanceBundle
      */
    governanceBundleUpdateRequest: GovernanceBundleUpdateRequest;
}
export declare class ObjectGovernanceBundleApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: GovernanceBundleApiRequestFactory, responseProcessor?: GovernanceBundleApiResponseProcessor);
  /**
      * Creates a Governance Bundle for the Admin Console in RAMP
      * Create a governance bundle for the Admin Console in RAMP
      * @param param the request object
      */
  createGovernanceBundle(param: GovernanceBundleApiCreateGovernanceBundleRequest, options?: Configuration): Promise<GovernanceBundle>;
  /**
      * Deletes a Governance Bundle from RAMP
      * Delete a governance bundle from RAMP
      * @param param the request object
      */
  deleteGovernanceBundle(param: GovernanceBundleApiDeleteGovernanceBundleRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a Governance Bundle from RAMP
      * Retrieve a governance bundle from RAMP
      * @param param the request object
      */
  getGovernanceBundle(param: GovernanceBundleApiGetGovernanceBundleRequest, options?: Configuration): Promise<GovernanceBundle>;
  /**
      * Retrieves the opt-in status of the Admin Console from RAMP
      * Retrieve the opt-in status from RAMP
      * @param param the request object
      */
  getOptInStatus(param?: GovernanceBundleApiGetOptInStatusRequest, options?: Configuration): Promise<OptInStatusResponse>;
  /**
      * Lists all Entitlement Values specific to a Bundle Entitlement
      * List all entitlement values for a bundle entitlement
      * @param param the request object
      */
  listBundleEntitlementValues(param: GovernanceBundleApiListBundleEntitlementValuesRequest, options?: Configuration): Promise<EntitlementValuesResponse>;
  /**
      * Lists all Entitlements specific to a Governance Bundle
      * List all entitlements for a governance bundle
      * @param param the request object
      */
  listBundleEntitlements(param: GovernanceBundleApiListBundleEntitlementsRequest, options?: Configuration): Promise<BundleEntitlementsResponse>;
  /**
      * Lists all Governance Bundles for the Admin Console in your org
      * List all governance bundles for the Admin Console
      * @param param the request object
      */
  listGovernanceBundles(param?: GovernanceBundleApiListGovernanceBundlesRequest, options?: Configuration): Promise<GovernanceBundlesResponse>;
  /**
      * Opts in the Admin Console to RAMP
      * Opt in the Admin Console to RAMP
      * @param param the request object
      */
  optIn(param?: GovernanceBundleApiOptInRequest, options?: Configuration): Promise<OptInStatusResponse>;
  /**
      * Opts out the Admin Console from RAMP
      * Opt out the Admin Console from RAMP
      * @param param the request object
      */
  optOut(param?: GovernanceBundleApiOptOutRequest, options?: Configuration): Promise<OptInStatusResponse>;
  /**
      * Replaces a Governance Bundle in RAMP
      * Replace a governance bundle in RAMP
      * @param param the request object
      */
  replaceGovernanceBundle(param: GovernanceBundleApiReplaceGovernanceBundleRequest, options?: Configuration): Promise<GovernanceBundle>;
}
import { GroupApiRequestFactory, GroupApiResponseProcessor } from '../apis/GroupApi';
export interface GroupApiActivateGroupRuleRequest {
    /**
      * The &#x60;id&#x60; of the group rule
      * @type string
      * @memberof GroupApiactivateGroupRule
      */
    ruleId: string;
}
export interface GroupApiAssignGroupOwnerRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApiassignGroupOwner
      */
    groupId: string;
    /**
      *
      * @type AssignGroupOwnerRequestBody
      * @memberof GroupApiassignGroupOwner
      */
    GroupOwner: AssignGroupOwnerRequestBody;
}
export interface GroupApiAssignUserToGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApiassignUserToGroup
      */
    groupId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof GroupApiassignUserToGroup
      */
    userId: string;
}
export interface GroupApiCreateGroupRequest {
    /**
      *
      * @type CreateGroupRequest
      * @memberof GroupApicreateGroup
      */
    group: CreateGroupRequest;
}
export interface GroupApiCreateGroupRuleRequest {
    /**
      *
      * @type CreateGroupRuleRequest
      * @memberof GroupApicreateGroupRule
      */
    groupRule: CreateGroupRuleRequest;
}
export interface GroupApiDeactivateGroupRuleRequest {
    /**
      * The &#x60;id&#x60; of the group rule
      * @type string
      * @memberof GroupApideactivateGroupRule
      */
    ruleId: string;
}
export interface GroupApiDeleteGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApideleteGroup
      */
    groupId: string;
}
export interface GroupApiDeleteGroupOwnerRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApideleteGroupOwner
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the group owner
      * @type string
      * @memberof GroupApideleteGroupOwner
      */
    ownerId: string;
}
export interface GroupApiDeleteGroupRuleRequest {
    /**
      * The &#x60;id&#x60; of the group rule
      * @type string
      * @memberof GroupApideleteGroupRule
      */
    ruleId: string;
    /**
      * If set to &#x60;true&#x60;, removes users from groups assigned by this rule
      * @type boolean
      * @memberof GroupApideleteGroupRule
      */
    removeUsers?: boolean;
}
export interface GroupApiGetGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApigetGroup
      */
    groupId: string;
}
export interface GroupApiGetGroupRuleRequest {
    /**
      * The &#x60;id&#x60; of the group rule
      * @type string
      * @memberof GroupApigetGroupRule
      */
    ruleId: string;
    /**
      * If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
      * @type string
      * @memberof GroupApigetGroupRule
      */
    expand?: string;
}
export interface GroupApiListAssignedApplicationsForGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApilistAssignedApplicationsForGroup
      */
    groupId: string;
    /**
      * Specifies the pagination cursor for the next page of apps
      * @type string
      * @memberof GroupApilistAssignedApplicationsForGroup
      */
    after?: string;
    /**
      * Specifies the number of app results for a page
      * @type number
      * @memberof GroupApilistAssignedApplicationsForGroup
      */
    limit?: number;
}
export interface GroupApiListGroupOwnersRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApilistGroupOwners
      */
    groupId: string;
    /**
      * SCIM filter expression for group owners. Allows you to filter owners by type.
      * @type string
      * @memberof GroupApilistGroupOwners
      */
    search?: string;
    /**
      * Specifies the pagination cursor for the next page of owners
      * @type string
      * @memberof GroupApilistGroupOwners
      */
    after?: string;
    /**
      * Specifies the number of owner results in a page
      * @type number
      * @memberof GroupApilistGroupOwners
      */
    limit?: number;
}
export interface GroupApiListGroupRulesRequest {
    /**
      * Specifies the number of rule results in a page
      * @type number
      * @memberof GroupApilistGroupRules
      */
    limit?: number;
    /**
      * Specifies the pagination cursor for the next page of rules
      * @type string
      * @memberof GroupApilistGroupRules
      */
    after?: string;
    /**
      * Specifies the keyword to search rules for
      * @type string
      * @memberof GroupApilistGroupRules
      */
    search?: string;
    /**
      * If specified as &#x60;groupIdToGroupNameMap&#x60;, then displays group names
      * @type string
      * @memberof GroupApilistGroupRules
      */
    expand?: string;
}
export interface GroupApiListGroupUsersRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApilistGroupUsers
      */
    groupId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof GroupApilistGroupUsers
      */
    after?: string;
    /**
      * Specifies the number of user results in a page
      * @type number
      * @memberof GroupApilistGroupUsers
      */
    limit?: number;
}
export interface GroupApiListGroupsRequest {
    /**
      * Searches for groups with a supported [filtering](https://developer.okta.com/docs/api/#filter) expression for all properties except for &#x60;_embedded&#x60;, &#x60;_links&#x60;, and &#x60;objectClass&#x60;. This operation supports [pagination](https://developer.okta.com/docs/api/#pagination).  Using search requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding), for example, &#x60;search&#x3D;type eq \&quot;OKTA_GROUP\&quot;&#x60; is encoded as &#x60;search&#x3D;type+eq+%22OKTA_GROUP%22&#x60;.  This operation searches many properties:  * Any group profile attribute, including imported app group profile attributes. * The top-level properties: &#x60;id&#x60;, &#x60;created&#x60;, &#x60;lastMembershipUpdated&#x60;, &#x60;lastUpdated&#x60;, and &#x60;type&#x60;. * The [source](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!c&#x3D;200&amp;path&#x3D;_links/source&amp;t&#x3D;response) of groups with type of &#x60;APP_GROUP&#x60;, accessed as &#x60;source.id&#x60;.  You can also use the &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters.  Searches for groups can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. You can only use &#x60;co&#x60; with these select profile attributes: &#x60;profile.name&#x60; and &#x60;profile.description&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @type string
      * @memberof GroupApilistGroups
      */
    search?: string;
    /**
      * Filter expression for groups. See [Filter](https://developer.okta.com/docs/api/#filter).  &gt; **Note:** All filters must be [URL encoded](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;filter&#x3D;lastUpdated gt \&quot;2013-06-01T00:00:00.000Z\&quot;&#x60; is encoded as &#x60;filter&#x3D;lastUpdated%20gt%20%222013-06-01T00:00:00.000Z%22&#x60;.
      * @type string
      * @memberof GroupApilistGroups
      */
    filter?: string;
    /**
      * Finds a group that matches the &#x60;name&#x60; property. &gt; **Note:** Paging and searching are currently mutually exclusive. You can\&#39;t page a query. The default limit for a query is 300 results. Query is intended for an auto-complete picker use case where users refine their search string to constrain the results.
      * @type string
      * @memberof GroupApilistGroups
      */
    q?: string;
    /**
      * Specifies the pagination cursor for the next page of groups. The &#x60;after&#x60; cursor should be treated as an opaque value and obtained through the next link relation. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof GroupApilistGroups
      */
    after?: string;
    /**
      * Specifies the number of group results in a page.  Okta recommends using a specific value other than the default or maximum. If your request times out, retry your request with a smaller &#x60;limit&#x60; and [page the results](https://developer.okta.com/docs/api/#pagination).  The Okta default &#x60;Everyone&#x60; group isn\&#39;t returned for users with a group admin role.
      * @type number
      * @memberof GroupApilistGroups
      */
    limit?: number;
    /**
      * If specified, additional metadata is included in the response. Possible values are &#x60;stats&#x60; and &#x60;app&#x60;. This additional metadata is listed in the [&#x60;_embedded&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/addGroup!c&#x3D;200&amp;path&#x3D;_embedded&amp;t&#x3D;response) property of the response.  &gt; **Note:** You can use the &#x60;stats&#x60; value to return the number of users within a group. This is listed as the &#x60;_embedded.stats.usersCount&#x60; value in the response. See this [Knowledge Base article](https://support.okta.com/help/s/article/Is-there-an-API-that-returns-the-number-of-users-in-a-group?language&#x3D;en_US) for more information and an example.
      * @type string
      * @memberof GroupApilistGroups
      */
    expand?: string;
    /**
      * Specifies field to sort by **(for search queries only)**. &#x60;sortBy&#x60; can be any single property, for example &#x60;sortBy&#x3D;profile.name&#x60;.
      * @type string
      * @memberof GroupApilistGroups
      */
    sortBy?: string;
    /**
      * Specifies sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present. Groups with the same value for the &#x60;sortBy&#x60; property are ordered by &#x60;id&#x60;\&#39;.
      * @type string
      * @memberof GroupApilistGroups
      */
    sortOrder?: string;
}
export interface GroupApiReplaceGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApireplaceGroup
      */
    groupId: string;
    /**
      *
      * @type CreateGroupRequest
      * @memberof GroupApireplaceGroup
      */
    group: CreateGroupRequest;
}
export interface GroupApiReplaceGroupRuleRequest {
    /**
      * The &#x60;id&#x60; of the group rule
      * @type string
      * @memberof GroupApireplaceGroupRule
      */
    ruleId: string;
    /**
      *
      * @type GroupRule
      * @memberof GroupApireplaceGroupRule
      */
    groupRule: GroupRule;
}
export interface GroupApiUnassignUserFromGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof GroupApiunassignUserFromGroup
      */
    groupId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof GroupApiunassignUserFromGroup
      */
    userId: string;
}
export declare class ObjectGroupApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: GroupApiRequestFactory, responseProcessor?: GroupApiResponseProcessor);
  /**
      * Activates a specific group rule by ID from your org
      * Activate a group rule
      * @param param the request object
      */
  activateGroupRule(param: GroupApiActivateGroupRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a group owner
      * Assign a group owner
      * @param param the request object
      */
  assignGroupOwner(param: GroupApiAssignGroupOwnerRequest, options?: Configuration): Promise<GroupOwner>;
  /**
      * Assigns a user to a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Assign a user to a group
      * @param param the request object
      */
  assignUserToGroup(param: GroupApiAssignUserToGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Adds a new group with the `OKTA_GROUP` type to your org. > **Note:** App import operations are responsible for syncing groups with `APP_GROUP` type such as Active Directory groups. See [About groups](https://help.okta.com/okta_help.htm?id=Directory_Groups) in the help documentation.
      * Add a group
      * @param param the request object
      */
  createGroup(param: GroupApiCreateGroupRequest, options?: Configuration): Promise<Group>;
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition > **Note:** Group rules are created with the status set to `\'INACTIVE\'`.
      * Create a group rule
      * @param param the request object
      */
  createGroupRule(param: GroupApiCreateGroupRuleRequest, options?: Configuration): Promise<GroupRule>;
  /**
      * Deactivates a specific group rule by ID from your org
      * Deactivate a group rule
      * @param param the request object
      */
  deactivateGroupRule(param: GroupApiDeactivateGroupRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a group of the `OKTA_GROUP` or `APP_GROUP` type from your org. > **Note:** You can\'t remove groups of type `APP_GROUP` if they are used in a group push mapping.
      * Delete a group
      * @param param the request object
      */
  deleteGroup(param: GroupApiDeleteGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a group owner from a specific group
      * Delete a group owner
      * @param param the request object
      */
  deleteGroupOwner(param: GroupApiDeleteGroupOwnerRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a specific group rule by `groupRuleId`
      * Delete a group rule
      * @param param the request object
      */
  deleteGroupRule(param: GroupApiDeleteGroupRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a specific group by `id` from your org
      * Retrieve a group
      * @param param the request object
      */
  getGroup(param: GroupApiGetGroupRequest, options?: Configuration): Promise<Group>;
  /**
      * Retrieves a specific group rule by ID from your org
      * Retrieve a group rule
      * @param param the request object
      */
  getGroupRule(param: GroupApiGetGroupRuleRequest, options?: Configuration): Promise<GroupRule>;
  /**
      * Lists all apps that are assigned to a group. See [Application Groups API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationGroups/).
      * List all assigned apps
      * @param param the request object
      */
  listAssignedApplicationsForGroup(param: GroupApiListAssignedApplicationsForGroupRequest, options?: Configuration): Promise<Collection<Application>>;
  /**
      * Lists all owners for a specific group
      * List all group owners
      * @param param the request object
      */
  listGroupOwners(param: GroupApiListGroupOwnersRequest, options?: Configuration): Promise<Collection<GroupOwner>>;
  /**
      * Lists all group rules for your org
      * List all group rules
      * @param param the request object
      */
  listGroupRules(param?: GroupApiListGroupRulesRequest, options?: Configuration): Promise<Collection<GroupRule>>;
  /**
      * Lists all users that are a member of a group. The default user limit is set to a very high number due to historical reasons that are no longer valid for most orgs. This will change in a future version of this API. The recommended page limit is now `limit=200`.
      * List all member users
      * @param param the request object
      */
  listGroupUsers(param: GroupApiListGroupUsersRequest, options?: Configuration): Promise<Collection<User>>;
  /**
      * Lists all groups with pagination support.  > **Note:** To list all groups belonging to a member, use the [List all groups endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserGroups).  The number of groups returned depends on the specified [`limit`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!in=query&path=limit&t=request), if you have a search, filter, and/or query parameter set, and if that parameter is not null. We recommend using a limit less than or equal to 200.  A subset of groups can be returned that match a supported filter expression, query, or search criteria.  > **Note:** Results from the filter or query parameter are driven from an eventually consistent datasource. The synchronization lag is typically less than one second.
      * List all groups
      * @param param the request object
      */
  listGroups(param?: GroupApiListGroupsRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Replaces the profile for a group of `OKTA_GROUP` type from your org. > **Note :** You only can modify profiles for groups of the `OKTA_GROUP` type. > > App imports are responsible for updating profiles for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Replace a group
      * @param param the request object
      */
  replaceGroup(param: GroupApiReplaceGroupRequest, options?: Configuration): Promise<Group>;
  /**
      * Replaces a group rule > **Notes:** You can only update rules with a group whose status is set to `\'INACTIVE\'`. > > You currently can\'t update the `action` section.
      * Replace a group rule
      * @param param the request object
      */
  replaceGroupRule(param: GroupApiReplaceGroupRuleRequest, options?: Configuration): Promise<GroupRule>;
  /**
      * Unassigns a user from a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. > > App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Unassign a user from a group
      * @param param the request object
      */
  unassignUserFromGroup(param: GroupApiUnassignUserFromGroupRequest, options?: Configuration): Promise<void>;
}
import { HookKeyApiRequestFactory, HookKeyApiResponseProcessor } from '../apis/HookKeyApi';
export interface HookKeyApiCreateHookKeyRequest {
    /**
      *
      * @type KeyRequest
      * @memberof HookKeyApicreateHookKey
      */
    keyRequest: KeyRequest;
}
export interface HookKeyApiDeleteHookKeyRequest {
    /**
      * ID of the Hook Key
      * @type string
      * @memberof HookKeyApideleteHookKey
      */
    hookKeyId: string;
}
export interface HookKeyApiGetHookKeyRequest {
    /**
      * ID of the Hook Key
      * @type string
      * @memberof HookKeyApigetHookKey
      */
    hookKeyId: string;
}
export interface HookKeyApiGetPublicKeyRequest {
    /**
      * id\&quot; of the Public Key
      * @type string
      * @memberof HookKeyApigetPublicKey
      */
    keyId: string;
}
export interface HookKeyApiListHookKeysRequest {
}
export interface HookKeyApiReplaceHookKeyRequest {
    /**
      * ID of the Hook Key
      * @type string
      * @memberof HookKeyApireplaceHookKey
      */
    hookKeyId: string;
    /**
      *
      * @type KeyRequest
      * @memberof HookKeyApireplaceHookKey
      */
    keyRequest: KeyRequest;
}
export declare class ObjectHookKeyApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: HookKeyApiRequestFactory, responseProcessor?: HookKeyApiResponseProcessor);
  /**
      * Creates a key for use with other parts of the application, such as inline hooks  > **Note:**  Use the key name to access this key for inline hook operations.  The total number of keys that you can create in an Okta org is limited to 50.   The response is a [Key object](https://developer.okta.com/docs/reference/api/hook-keys/#key-object) that represents the   key that you create. The `id` property in the response serves as the unique ID for the key, which you can specify when   invoking other CRUD operations. The `keyId` provided in the response is the alias of the public key that you can use to get   details of the public key data in a separate call.  > **Note:** The keyId is the alias of the public key that you can use to retrieve the public key.
      * Create a key
      * @param param the request object
      */
  createHookKey(param: HookKeyApiCreateHookKeyRequest, options?: Configuration): Promise<DetailedHookKeyInstance>;
  /**
      * Deletes a key by `id`. After being deleted, the key is unrecoverable.  As a safety precaution, only keys that aren\'t being used are eligible for deletion.
      * Delete a key
      * @param param the request object
      */
  deleteHookKey(param: HookKeyApiDeleteHookKeyRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves the public portion of the Key object using the `id` parameter  >**Note:** The `?expand=publickey` query parameter optionally returns the full object including the details of the public key in the response body\'s `_embedded` property.
      * Retrieve a key by ID
      * @param param the request object
      */
  getHookKey(param: HookKeyApiGetHookKeyRequest, options?: Configuration): Promise<HookKey>;
  /**
      * Retrieves a public key by `keyId`  >**Note:** keyId is the alias of the public key.
      * Retrieve a public key
      * @param param the request object
      */
  getPublicKey(param: HookKeyApiGetPublicKeyRequest, options?: Configuration): Promise<Embedded>;
  /**
      * Lists all keys
      * List all keys
      * @param param the request object
      */
  listHookKeys(param?: HookKeyApiListHookKeysRequest, options?: Configuration): Promise<Collection<HookKey>>;
  /**
      * Replaces a key by `id`  This request replaces existing properties after passing validation.  > **Note:** The only parameter that you can update is the name of the key, which must be unique at all times.
      * Replace a key
      * @param param the request object
      */
  replaceHookKey(param: HookKeyApiReplaceHookKeyRequest, options?: Configuration): Promise<DetailedHookKeyInstance>;
}
import { IdentityProviderApiRequestFactory, IdentityProviderApiResponseProcessor } from '../apis/IdentityProviderApi';
export interface IdentityProviderApiActivateIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApiactivateIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiCloneIdentityProviderKeyRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApicloneIdentityProviderKey
      */
    idpId: string;
    /**
      * Unique &#x60;id&#x60; of the IdP key credential
      * @type string
      * @memberof IdentityProviderApicloneIdentityProviderKey
      */
    keyId: string;
    /**
      * &#x60;id&#x60; of the target IdP
      * @type string
      * @memberof IdentityProviderApicloneIdentityProviderKey
      */
    targetIdpId: string;
}
export interface IdentityProviderApiCreateIdentityProviderRequest {
    /**
      * IdP settings
      * @type IdentityProvider
      * @memberof IdentityProviderApicreateIdentityProvider
      */
    identityProvider: IdentityProvider;
}
export interface IdentityProviderApiCreateIdentityProviderKeyRequest {
    /**
      *
      * @type IdPCertificateCredential
      * @memberof IdentityProviderApicreateIdentityProviderKey
      */
    jsonWebKey: IdPCertificateCredential;
}
export interface IdentityProviderApiDeactivateIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApideactivateIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiDeleteIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApideleteIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiDeleteIdentityProviderKeyRequest {
    /**
      * Unique &#x60;id&#x60; of the IdP key credential
      * @type string
      * @memberof IdentityProviderApideleteIdentityProviderKey
      */
    keyId: string;
}
export interface IdentityProviderApiGenerateCsrForIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApigenerateCsrForIdentityProvider
      */
    idpId: string;
    /**
      *
      * @type CsrMetadata
      * @memberof IdentityProviderApigenerateCsrForIdentityProvider
      */
    metadata: CsrMetadata;
}
export interface IdentityProviderApiGenerateIdentityProviderSigningKeyRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApigenerateIdentityProviderSigningKey
      */
    idpId: string;
    /**
      * expiry of the IdP key credential
      * @type number
      * @memberof IdentityProviderApigenerateIdentityProviderSigningKey
      */
    validityYears: number;
}
export interface IdentityProviderApiGetCsrForIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApigetCsrForIdentityProvider
      */
    idpId: string;
    /**
      * &#x60;id&#x60; of the IdP CSR
      * @type string
      * @memberof IdentityProviderApigetCsrForIdentityProvider
      */
    csrId: string;
}
export interface IdentityProviderApiGetIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApigetIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiGetIdentityProviderApplicationUserRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderApplicationUser
      */
    idpId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderApplicationUser
      */
    userId: string;
}
export interface IdentityProviderApiGetIdentityProviderKeyRequest {
    /**
      * Unique &#x60;id&#x60; of the IdP key credential
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderKey
      */
    keyId: string;
}
export interface IdentityProviderApiGetIdentityProviderSigningKeyRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderSigningKey
      */
    idpId: string;
    /**
      * Unique &#x60;id&#x60; of the IdP key credential
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderSigningKey
      */
    keyId: string;
}
export interface IdentityProviderApiLinkUserToIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApilinkUserToIdentityProvider
      */
    idpId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof IdentityProviderApilinkUserToIdentityProvider
      */
    userId: string;
    /**
      *
      * @type UserIdentityProviderLinkRequest
      * @memberof IdentityProviderApilinkUserToIdentityProvider
      */
    userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest;
}
export interface IdentityProviderApiListActiveIdentityProviderSigningKeyRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApilistActiveIdentityProviderSigningKey
      */
    idpId: string;
}
export interface IdentityProviderApiListCsrsForIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApilistCsrsForIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiListIdentityProviderApplicationUsersRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApilistIdentityProviderApplicationUsers
      */
    idpId: string;
    /**
      * Searches the records for matching value
      * @type string
      * @memberof IdentityProviderApilistIdentityProviderApplicationUsers
      */
    q?: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof IdentityProviderApilistIdentityProviderApplicationUsers
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof IdentityProviderApilistIdentityProviderApplicationUsers
      */
    limit?: number;
    /**
      * Expand user data
      * @type string
      * @memberof IdentityProviderApilistIdentityProviderApplicationUsers
      */
    expand?: string;
}
export interface IdentityProviderApiListIdentityProviderKeysRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof IdentityProviderApilistIdentityProviderKeys
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof IdentityProviderApilistIdentityProviderKeys
      */
    limit?: number;
}
export interface IdentityProviderApiListIdentityProviderSigningKeysRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApilistIdentityProviderSigningKeys
      */
    idpId: string;
}
export interface IdentityProviderApiListIdentityProvidersRequest {
    /**
      * Searches the &#x60;name&#x60; property of IdPs for matching value
      * @type string
      * @memberof IdentityProviderApilistIdentityProviders
      */
    q?: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof IdentityProviderApilistIdentityProviders
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof IdentityProviderApilistIdentityProviders
      */
    limit?: number;
    /**
      * Filters IdPs by &#x60;type&#x60;
      * @type IdentityProviderType
      * @memberof IdentityProviderApilistIdentityProviders
      */
    type?: IdentityProviderType;
}
export interface IdentityProviderApiListSocialAuthTokensRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApilistSocialAuthTokens
      */
    idpId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof IdentityProviderApilistSocialAuthTokens
      */
    userId: string;
}
export interface IdentityProviderApiListUserIdentityProvidersRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof IdentityProviderApilistUserIdentityProviders
      */
    userId: string;
}
export interface IdentityProviderApiPublishCsrForIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApipublishCsrForIdentityProvider
      */
    idpId: string;
    /**
      * &#x60;id&#x60; of the IdP CSR
      * @type string
      * @memberof IdentityProviderApipublishCsrForIdentityProvider
      */
    csrId: string;
    /**
      *
      * @type HttpFile
      * @memberof IdentityProviderApipublishCsrForIdentityProvider
      */
    body: HttpFile;
}
export interface IdentityProviderApiReplaceIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApireplaceIdentityProvider
      */
    idpId: string;
    /**
      * Updated configuration for the IdP
      * @type IdentityProvider
      * @memberof IdentityProviderApireplaceIdentityProvider
      */
    identityProvider: IdentityProvider;
}
export interface IdentityProviderApiReplaceIdentityProviderKeyRequest {
    /**
      * Unique &#x60;id&#x60; of the IdP key credential
      * @type string
      * @memberof IdentityProviderApireplaceIdentityProviderKey
      */
    keyId: string;
    /**
      * Updated IdP key credential
      * @type IdPKeyCredential
      * @memberof IdentityProviderApireplaceIdentityProviderKey
      */
    idPKeyCredential: IdPKeyCredential;
}
export interface IdentityProviderApiRevokeCsrForIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApirevokeCsrForIdentityProvider
      */
    idpId: string;
    /**
      * &#x60;id&#x60; of the IdP CSR
      * @type string
      * @memberof IdentityProviderApirevokeCsrForIdentityProvider
      */
    csrId: string;
}
export interface IdentityProviderApiUnlinkUserFromIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof IdentityProviderApiunlinkUserFromIdentityProvider
      */
    idpId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof IdentityProviderApiunlinkUserFromIdentityProvider
      */
    userId: string;
}
export declare class ObjectIdentityProviderApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: IdentityProviderApiRequestFactory, responseProcessor?: IdentityProviderApiResponseProcessor);
  /**
      * Activates an inactive identity provider (IdP)
      * Activate an IdP
      * @param param the request object
      */
  activateIdentityProvider(param: IdentityProviderApiActivateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Clones an X.509 certificate for an identity provider (IdP) signing key credential from a source IdP to target IdP > **Caution:** Sharing certificates isn\'t a recommended security practice.  > **Note:** If the key is already present in the list of key credentials for the target IdP, you receive a 400 error response.
      * Clone a signing key credential for IdP
      * @param param the request object
      */
  cloneIdentityProviderKey(param: IdentityProviderApiCloneIdentityProviderKeyRequest, options?: Configuration): Promise<IdPKeyCredential>;
  /**
      * Creates a new identity provider (IdP) integration.  #### SAML 2.0 IdP  You must first add the IdP\'s signature certificate to the IdP key store before you can add a SAML 2.0 IdP with a `kid` credential reference.   Don\'t use `fromURI` to automatically redirect a user to a particular app after successfully authenticating with a third-party IdP. Instead, use SAML deep links. Using `fromURI` isn\'t tested or supported. For more information about using deep links when signing users in using an SP-initiated flow, see [Understanding SP-Initiated Login flow](https://developer.okta.com/docs/concepts/saml/#understanding-sp-initiated-login-flow).  Use SAML deep links to automatically redirect the user to an app after successfully authenticating with a third-party IdP. To use deep links, assemble these three parts into a URL:  * SP ACS URL<br> For example: `https://${yourOktaDomain}/sso/saml2/:idpId` * The app to which the user is automatically redirected after successfully authenticating with the IdP <br> For example: `/app/:app-location/:appId/sso/saml` * Optionally, if the app is an outbound SAML app, you can specify the `relayState` passed to it.<br> For example: `?RelayState=:anyUrlEncodedValue`  The deep link for the above three parts is:<br> `https://${yourOktaDomain}/sso/saml2/:idpId/app/:app-location/:appId/sso/saml?RelayState=:anyUrlEncodedValue`  #### Smart Card X509 IdP  You must first add the IdP\'s server certificate to the IdP key store before you can add a Smart Card `X509` IdP with a `kid` credential reference. You need to upload the whole trust chain as a single key using the [Key Store API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderKeys/#tag/IdentityProviderKeys/operation/createIdentityProviderKey). Depending on the information stored in the smart card, select the proper [template](https://developer.okta.com/docs/reference/okta-expression-language/#idp-user-profile) `idpuser.subjectAltNameEmail` or `idpuser.subjectAltNameUpn`.  #### Identity verification vendors as identity providers  Identity verification vendors (IDVs) work like IdPs, with a few key differences. IDVs verify your user\'s identities by requiring them to submit a proof of identity. There are many ways to verify user identities. For example, a proof of identity can be a selfie to determine liveliness or it can be requiring users to submit a photo of their driver\'s license and matching that information with a database.  There are three IDVs that you can configure as IdPs in your org by creating an account with the vendor, and then creating an IdP integration. Control how the IDVs verify your users by using [Okta account management policy rules](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).  * [Persona](https://withpersona.com/)  * [CLEAR Verified](https://www.clearme.com/) <x-lifecycle class=\"ea\"></x-lifecycle>  * [Incode](https://incode.com/) <x-lifecycle class=\"ea\"></x-lifecycle>
      * Create an IdP
      * @param param the request object
      */
  createIdentityProvider(param: IdentityProviderApiCreateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Creates a new X.509 certificate credential in the identity provider (IdP) key store > **Note:** RSA-based certificates are supported for all IdP types. Okta currently supports EC-based certificates only for the `X509` IdP type. For EC-based certificates we support only P-256, P-384, and P-521 curves.
      * Create an IdP key credential
      * @param param the request object
      */
  createIdentityProviderKey(param: IdentityProviderApiCreateIdentityProviderKeyRequest, options?: Configuration): Promise<IdPKeyCredential>;
  /**
      * Deactivates an active identity provider (IdP)
      * Deactivate an IdP
      * @param param the request object
      */
  deactivateIdentityProvider(param: IdentityProviderApiDeactivateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Deletes an identity provider (IdP) integration by `idpId` * All existing IdP users are unlinked with the highest order profile source taking precedence for each IdP user. * Unlinked users keep their existing authentication provider such as `FEDERATION` or `SOCIAL`.
      * Delete an IdP
      * @param param the request object
      */
  deleteIdentityProvider(param: IdentityProviderApiDeleteIdentityProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a specific identity provider (IdP) key credential by `kid` if it isn\'t currently being used by an active or inactive IdP
      * Delete an IdP key credential
      * @param param the request object
      */
  deleteIdentityProviderKey(param: IdentityProviderApiDeleteIdentityProviderKeyRequest, options?: Configuration): Promise<void>;
  /**
      * Generates a new key pair and returns a certificate signing request (CSR) for it > **Note:** The private key isn\'t listed in the [signing key credentials for the identity provider (IdP)](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderSigningKeys/#tag/IdentityProviderSigningKeys/operation/listIdentityProviderSigningKeys) until it\'s published.
      * Generate a certificate signing request
      * @param param the request object
      */
  generateCsrForIdentityProvider(param: IdentityProviderApiGenerateCsrForIdentityProviderRequest, options?: Configuration): Promise<IdPCsr>;
  /**
      * Generates a new X.509 certificate for an identity provider (IdP) signing key credential to be used for signing assertions sent to the IdP. IdP signing keys are read-only. > **Note:** To update an IdP with the newly generated key credential, [update your IdP](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider) using the returned key\'s `kid` in the [signing credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/credentials/signing/kid&t=request).
      * Generate a new signing key credential for IdP
      * @param param the request object
      */
  generateIdentityProviderSigningKey(param: IdentityProviderApiGenerateIdentityProviderSigningKeyRequest, options?: Configuration): Promise<IdPKeyCredential>;
  /**
      * Retrieves a specific certificate signing request (CSR) by `id`
      * Retrieve a certificate signing request
      * @param param the request object
      */
  getCsrForIdentityProvider(param: IdentityProviderApiGetCsrForIdentityProviderRequest, options?: Configuration): Promise<IdPCsr>;
  /**
      * Retrieves an identity provider (IdP) integration by `idpId`
      * Retrieve an IdP
      * @param param the request object
      */
  getIdentityProvider(param: IdentityProviderApiGetIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Retrieves a linked identity provider (IdP) user by ID
      * Retrieve a user for IdP
      * @param param the request object
      */
  getIdentityProviderApplicationUser(param: IdentityProviderApiGetIdentityProviderApplicationUserRequest, options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Retrieves a specific identity provider (IdP) key credential by `kid`
      * Retrieve an IdP key credential
      * @param param the request object
      */
  getIdentityProviderKey(param: IdentityProviderApiGetIdentityProviderKeyRequest, options?: Configuration): Promise<IdPKeyCredential>;
  /**
      * Retrieves a specific identity provider (IdP) key credential by `kid`
      * Retrieve a signing key credential for IdP
      * @param param the request object
      */
  getIdentityProviderSigningKey(param: IdentityProviderApiGetIdentityProviderSigningKeyRequest, options?: Configuration): Promise<IdPKeyCredential>;
  /**
      * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
      * Link a user to IdP
      * @param param the request object
      */
  linkUserToIdentityProvider(param: IdentityProviderApiLinkUserToIdentityProviderRequest, options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Lists the active signing key credential for an identity provider (IdP)
      * List the active signing key credential for IdP
      * @param param the request object
      */
  listActiveIdentityProviderSigningKey(param: IdentityProviderApiListActiveIdentityProviderSigningKeyRequest, options?: Configuration): Promise<Collection<IdPKeyCredential>>;
  /**
      * Lists all certificate signing requests (CSRs) for an identity provider (IdP)
      * List all certificate signing requests
      * @param param the request object
      */
  listCsrsForIdentityProvider(param: IdentityProviderApiListCsrsForIdentityProviderRequest, options?: Configuration): Promise<Collection<IdPCsr>>;
  /**
      * Lists all the users linked to an identity provider (IdP)
      * List all users for IdP
      * @param param the request object
      */
  listIdentityProviderApplicationUsers(param: IdentityProviderApiListIdentityProviderApplicationUsersRequest, options?: Configuration): Promise<Collection<IdentityProviderApplicationUser>>;
  /**
      * Lists all identity provider (IdP) key credentials
      * List all IdP key credentials
      * @param param the request object
      */
  listIdentityProviderKeys(param?: IdentityProviderApiListIdentityProviderKeysRequest, options?: Configuration): Promise<Collection<IdPKeyCredential>>;
  /**
      * Lists all signing key credentials for an identity provider (IdP)
      * List all signing key credentials for IdP
      * @param param the request object
      */
  listIdentityProviderSigningKeys(param: IdentityProviderApiListIdentityProviderSigningKeysRequest, options?: Configuration): Promise<Collection<IdPKeyCredential>>;
  /**
      * Lists all identity provider (IdP) integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all IdPs
      * @param param the request object
      */
  listIdentityProviders(param?: IdentityProviderApiListIdentityProvidersRequest, options?: Configuration): Promise<Collection<IdentityProvider>>;
  /**
      * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
      * List all tokens from OIDC IdP
      * @param param the request object
      */
  listSocialAuthTokens(param: IdentityProviderApiListSocialAuthTokensRequest, options?: Configuration): Promise<Collection<SocialAuthToken>>;
  /**
      * Lists the identity providers (IdPs) associated with the user
      * List all IdPs for user
      * @param param the request object
      */
  listUserIdentityProviders(param: IdentityProviderApiListUserIdentityProvidersRequest, options?: Configuration): Promise<Collection<IdentityProvider>>;
  /**
      * Publishes the certificate signing request (CSR) with a signed X.509 certificate and adds it into the signing key credentials for the identity provider (IdP) > **Notes:** > * Publishing a certificate completes the lifecycle of the CSR, and it\'s no longer accessible. > * If the validity period of the certificate is less than 90 days, a 400 error response is returned.
      * Publish a certificate signing request
      * @param param the request object
      */
  publishCsrForIdentityProvider(param: IdentityProviderApiPublishCsrForIdentityProviderRequest, options?: Configuration): Promise<IdPKeyCredential>;
  /**
      * Replaces an identity provider (IdP) integration by `idpId`
      * Replace an IdP
      * @param param the request object
      */
  replaceIdentityProvider(param: IdentityProviderApiReplaceIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Replaces an identity provider (IdP) key credential by `kid`
      * Replace an IdP key credential
      * @param param the request object
      */
  replaceIdentityProviderKey(param: IdentityProviderApiReplaceIdentityProviderKeyRequest, options?: Configuration): Promise<IdPKeyCredential>;
  /**
      * Revokes a certificate signing request (CSR) and deletes the key pair from the identity provider (IdP)
      * Revoke a certificate signing request
      * @param param the request object
      */
  revokeCsrForIdentityProvider(param: IdentityProviderApiRevokeCsrForIdentityProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
      * Unlink a user from IdP
      * @param param the request object
      */
  unlinkUserFromIdentityProvider(param: IdentityProviderApiUnlinkUserFromIdentityProviderRequest, options?: Configuration): Promise<void>;
}
import { IdentitySourceApiRequestFactory, IdentitySourceApiResponseProcessor } from '../apis/IdentitySourceApi';
export interface IdentitySourceApiCreateIdentitySourceSessionRequest {
    /**
      * The ID of the identity source for which the session is created
      * @type string
      * @memberof IdentitySourceApicreateIdentitySourceSession
      */
    identitySourceId: string;
}
export interface IdentitySourceApiDeleteIdentitySourceSessionRequest {
    /**
      * The ID of the identity source for which the session is created
      * @type string
      * @memberof IdentitySourceApideleteIdentitySourceSession
      */
    identitySourceId: string;
    /**
      * The ID of the identity source session
      * @type string
      * @memberof IdentitySourceApideleteIdentitySourceSession
      */
    sessionId: string;
}
export interface IdentitySourceApiGetIdentitySourceSessionRequest {
    /**
      * The ID of the identity source for which the session is created
      * @type string
      * @memberof IdentitySourceApigetIdentitySourceSession
      */
    identitySourceId: string;
    /**
      * The ID of the identity source session
      * @type string
      * @memberof IdentitySourceApigetIdentitySourceSession
      */
    sessionId: string;
}
export interface IdentitySourceApiListIdentitySourceSessionsRequest {
    /**
      * The ID of the identity source for which the session is created
      * @type string
      * @memberof IdentitySourceApilistIdentitySourceSessions
      */
    identitySourceId: string;
}
export interface IdentitySourceApiStartImportFromIdentitySourceRequest {
    /**
      * The ID of the identity source for which the session is created
      * @type string
      * @memberof IdentitySourceApistartImportFromIdentitySource
      */
    identitySourceId: string;
    /**
      * The ID of the identity source session
      * @type string
      * @memberof IdentitySourceApistartImportFromIdentitySource
      */
    sessionId: string;
}
export interface IdentitySourceApiUploadIdentitySourceDataForDeleteRequest {
    /**
      * The ID of the identity source for which the session is created
      * @type string
      * @memberof IdentitySourceApiuploadIdentitySourceDataForDelete
      */
    identitySourceId: string;
    /**
      * The ID of the identity source session
      * @type string
      * @memberof IdentitySourceApiuploadIdentitySourceDataForDelete
      */
    sessionId: string;
    /**
      *
      * @type BulkDeleteRequestBody
      * @memberof IdentitySourceApiuploadIdentitySourceDataForDelete
      */
    BulkDeleteRequestBody?: BulkDeleteRequestBody;
}
export interface IdentitySourceApiUploadIdentitySourceDataForUpsertRequest {
    /**
      * The ID of the identity source for which the session is created
      * @type string
      * @memberof IdentitySourceApiuploadIdentitySourceDataForUpsert
      */
    identitySourceId: string;
    /**
      * The ID of the identity source session
      * @type string
      * @memberof IdentitySourceApiuploadIdentitySourceDataForUpsert
      */
    sessionId: string;
    /**
      *
      * @type BulkUpsertRequestBody
      * @memberof IdentitySourceApiuploadIdentitySourceDataForUpsert
      */
    BulkUpsertRequestBody?: BulkUpsertRequestBody;
}
export declare class ObjectIdentitySourceApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: IdentitySourceApiRequestFactory, responseProcessor?: IdentitySourceApiResponseProcessor);
  /**
      * Creates an identity source session for the given identity source instance
      * Create an identity source session
      * @param param the request object
      */
  createIdentitySourceSession(param: IdentitySourceApiCreateIdentitySourceSessionRequest, options?: Configuration): Promise<IdentitySourceSession>;
  /**
      * Deletes an identity source session for a given identity source ID and session Id
      * Delete an identity source session
      * @param param the request object
      */
  deleteIdentitySourceSession(param: IdentitySourceApiDeleteIdentitySourceSessionRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an identity source session for a given identity source ID and session ID
      * Retrieve an identity source session
      * @param param the request object
      */
  getIdentitySourceSession(param: IdentitySourceApiGetIdentitySourceSessionRequest, options?: Configuration): Promise<IdentitySourceSession>;
  /**
      * Lists all identity source sessions for the given identity source instance
      * List all identity source sessions
      * @param param the request object
      */
  listIdentitySourceSessions(param: IdentitySourceApiListIdentitySourceSessionsRequest, options?: Configuration): Promise<Collection<IdentitySourceSession>>;
  /**
      * Starts the import from the identity source described by the uploaded bulk operations
      * Start the import from the identity source
      * @param param the request object
      */
  startImportFromIdentitySource(param: IdentitySourceApiStartImportFromIdentitySourceRequest, options?: Configuration): Promise<IdentitySourceSession>;
  /**
      * Uploads external IDs of entities that need to be deleted in Okta from the identity source for the given session
      * Upload the data to be deleted in Okta
      * @param param the request object
      */
  uploadIdentitySourceDataForDelete(param: IdentitySourceApiUploadIdentitySourceDataForDeleteRequest, options?: Configuration): Promise<void>;
  /**
      * Uploads entities that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the data to be upserted in Okta
      * @param param the request object
      */
  uploadIdentitySourceDataForUpsert(param: IdentitySourceApiUploadIdentitySourceDataForUpsertRequest, options?: Configuration): Promise<void>;
}
import { InlineHookApiRequestFactory, InlineHookApiResponseProcessor } from '../apis/InlineHookApi';
export interface InlineHookApiActivateInlineHookRequest {
    /**
      * &#x60;id&#x60; of the inline hook
      * @type string
      * @memberof InlineHookApiactivateInlineHook
      */
    inlineHookId: string;
}
export interface InlineHookApiCreateInlineHookRequest {
    /**
      *
      * @type InlineHookCreate
      * @memberof InlineHookApicreateInlineHook
      */
    inlineHook: InlineHookCreate;
}
export interface InlineHookApiDeactivateInlineHookRequest {
    /**
      * &#x60;id&#x60; of the inline hook
      * @type string
      * @memberof InlineHookApideactivateInlineHook
      */
    inlineHookId: string;
}
export interface InlineHookApiDeleteInlineHookRequest {
    /**
      * &#x60;id&#x60; of the inline hook
      * @type string
      * @memberof InlineHookApideleteInlineHook
      */
    inlineHookId: string;
}
export interface InlineHookApiExecuteInlineHookRequest {
    /**
      * &#x60;id&#x60; of the inline hook
      * @type string
      * @memberof InlineHookApiexecuteInlineHook
      */
    inlineHookId: string;
    /**
      *
      * @type ExecuteInlineHookRequest
      * @memberof InlineHookApiexecuteInlineHook
      */
    payloadData: ExecuteInlineHookRequest;
}
export interface InlineHookApiGetInlineHookRequest {
    /**
      * &#x60;id&#x60; of the inline hook
      * @type string
      * @memberof InlineHookApigetInlineHook
      */
    inlineHookId: string;
}
export interface InlineHookApiListInlineHooksRequest {
    /**
      * One of the supported inline hook types
      * @type &#39;com.okta.import.transform&#39; | &#39;com.okta.oauth2.tokens.transform&#39; | &#39;com.okta.saml.tokens.transform&#39; | &#39;com.okta.user.credential.password.import&#39; | &#39;com.okta.user.pre-registration&#39; | &#39;com.okta.telephony.provider&#39;
      * @memberof InlineHookApilistInlineHooks
      */
    type?: 'com.okta.import.transform' | 'com.okta.oauth2.tokens.transform' | 'com.okta.saml.tokens.transform' | 'com.okta.user.credential.password.import' | 'com.okta.user.pre-registration' | 'com.okta.telephony.provider';
}
export interface InlineHookApiReplaceInlineHookRequest {
    /**
      * &#x60;id&#x60; of the inline hook
      * @type string
      * @memberof InlineHookApireplaceInlineHook
      */
    inlineHookId: string;
    /**
      *
      * @type InlineHookReplace
      * @memberof InlineHookApireplaceInlineHook
      */
    inlineHook: InlineHookReplace;
}
export interface InlineHookApiUpdateInlineHookRequest {
    /**
      * &#x60;id&#x60; of the inline hook
      * @type string
      * @memberof InlineHookApiupdateInlineHook
      */
    inlineHookId: string;
    /**
      *
      * @type InlineHookReplace
      * @memberof InlineHookApiupdateInlineHook
      */
    inlineHook: InlineHookReplace;
}
export declare class ObjectInlineHookApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: InlineHookApiRequestFactory, responseProcessor?: InlineHookApiResponseProcessor);
  /**
      * Activates the inline hook by `inlineHookId`
      * Activate an inline hook
      * @param param the request object
      */
  activateInlineHook(param: InlineHookApiActivateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Creates an inline hook  This endpoint creates an inline hook for your org in an `ACTIVE` status. You need to pass an inline hooks object in the JSON payload of your request.  That object represents the set of required information about the inline hook that you\'re registering, including:  * The URI of your external service endpoint * The type of inline hook you\'re registering * The type of authentication you\'re registering  There are two authentication options that you can configure for your inline hook: HTTP headers and OAuth 2.0 tokens.  HTTP headers let you specify a secret API key that you want Okta to pass to your external service endpoint (so that your external service can check for its presence as a security measure).  >**Note:** The API key that you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs.  You can also optionally specify extra headers that you want Okta to pass to your external service with each call.  To configure HTTP header authentication, see parameters for the `config` object.  OAuth 2.0 tokens provide enhanced security between Okta and your external service. You can configure these tokens for the following types&mdash;client secret and private key.  >**Note:** Your external service\'s endpoint needs to be a valid HTTPS endpoint. The URI you specify should always begin with `https://`.  The total number of inline hooks that you can create in an Okta org is limited to 50, which is a combined total for any combination of inline hook types.
      * Create an inline hook
      * @param param the request object
      */
  createInlineHook(param: InlineHookApiCreateInlineHookRequest, options?: Configuration): Promise<InlineHookCreateResponse>;
  /**
      * Deactivates the inline hook by `inlineHookId`
      * Deactivate an inline hook
      * @param param the request object
      */
  deactivateInlineHook(param: InlineHookApiDeactivateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Deletes an inline hook by `inlineHookId`. After it\'s deleted, the inline hook is unrecoverable. As a safety precaution, only inline hooks with a status of `INACTIVE` are eligible for deletion.
      * Delete an inline hook
      * @param param the request object
      */
  deleteInlineHook(param: InlineHookApiDeleteInlineHookRequest, options?: Configuration): Promise<void>;
  /**
      * Executes the inline hook that matches the provided `inlineHookId` by using the request body as the input. This inline hook sends the provided  data through the `channel` object and returns a response if it matches the correct data contract. Otherwise it returns an error. You need to  construct a JSON payload that matches the payloads that Okta would send to your external service for this inline hook type.  A timeout of three seconds is enforced on all outbound requests, with one retry in the event of a timeout or an error response from the remote system.  If a successful response isn\'t received after the request, a 400 error is returned with more information about what failed.  >**Note:** This execution endpoint isn\'t tied to any other functionality in Okta, and you should only use it for testing purposes.
      * Execute an inline hook
      * @param param the request object
      */
  executeInlineHook(param: InlineHookApiExecuteInlineHookRequest, options?: Configuration): Promise<ExecuteInlineHook200Response>;
  /**
      * Retrieves an inline hook by `inlineHookId`
      * Retrieve an inline hook
      * @param param the request object
      */
  getInlineHook(param: InlineHookApiGetInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Lists all inline hooks or all inline hooks of a specific type.  When listing a specific inline hook, you need to specify its type. The following types are currently supported:   | Type Value                         | Name                                                           |   |------------------------------------|----------------------------------------------------------------|   | `com.okta.import.transform`        | [User import inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createUserImportInlineHook)       |   | `com.okta.oauth2.tokens.transform` | [Token inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTokenInlineHook)               |   | `com.okta.saml.tokens.transform`   | [SAML assertion inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createSAMLAssertionInlineHook)       |   | `com.okta.telephony.provider`      | [Telephony inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTelephonyInlineHook) |   | `com.okta.user.credential.password.import` | [Password import inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createPasswordImportInlineHook)|   | `com.okta.user.pre-registration`   | [Registration inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/create-registration-hook) |
      * List all inline hooks
      * @param param the request object
      */
  listInlineHooks(param?: InlineHookApiListInlineHooksRequest, options?: Configuration): Promise<Collection<InlineHook>>;
  /**
      * Replaces an inline hook by `inlineHookId`. The submitted inline hook properties replace the existing properties after passing validation.  >**Note:** Some properties are immutable and can\'t be updated.
      * Replace an inline hook
      * @param param the request object
      */
  replaceInlineHook(param: InlineHookApiReplaceInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Updates an inline hook by `inlineHookId`
      * Update an inline hook
      * @param param the request object
      */
  updateInlineHook(param: InlineHookApiUpdateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
}
import { LinkedObjectApiRequestFactory, LinkedObjectApiResponseProcessor } from '../apis/LinkedObjectApi';
export interface LinkedObjectApiCreateLinkedObjectDefinitionRequest {
    /**
      *
      * @type LinkedObject
      * @memberof LinkedObjectApicreateLinkedObjectDefinition
      */
    linkedObject: LinkedObject;
}
export interface LinkedObjectApiDeleteLinkedObjectDefinitionRequest {
    /**
      * Primary or Associated name
      * @type string
      * @memberof LinkedObjectApideleteLinkedObjectDefinition
      */
    linkedObjectName: string;
}
export interface LinkedObjectApiGetLinkedObjectDefinitionRequest {
    /**
      * Primary or Associated name
      * @type string
      * @memberof LinkedObjectApigetLinkedObjectDefinition
      */
    linkedObjectName: string;
}
export interface LinkedObjectApiListLinkedObjectDefinitionsRequest {
}
export declare class ObjectLinkedObjectApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: LinkedObjectApiRequestFactory, responseProcessor?: LinkedObjectApiResponseProcessor);
  /**
      * Creates a Linked Object definition
      * Create a linked object definition
      * @param param the request object
      */
  createLinkedObjectDefinition(param: LinkedObjectApiCreateLinkedObjectDefinitionRequest, options?: Configuration): Promise<LinkedObject>;
  /**
      * Deletes the Linked Object definition specified by either the `primary` or `associated` name. The entire definition is removed, regardless of which name that you specify.
      * Delete a linked object definition
      * @param param the request object
      */
  deleteLinkedObjectDefinition(param: LinkedObjectApiDeleteLinkedObjectDefinitionRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a Linked Object definition
      * Retrieve a linked object definition
      * @param param the request object
      */
  getLinkedObjectDefinition(param: LinkedObjectApiGetLinkedObjectDefinitionRequest, options?: Configuration): Promise<LinkedObject>;
  /**
      * Lists all Linked Object definitions
      * List all linked object definitions
      * @param param the request object
      */
  listLinkedObjectDefinitions(param?: LinkedObjectApiListLinkedObjectDefinitionsRequest, options?: Configuration): Promise<Collection<LinkedObject>>;
}
import { LogStreamApiRequestFactory, LogStreamApiResponseProcessor } from '../apis/LogStreamApi';
export interface LogStreamApiActivateLogStreamRequest {
    /**
      * Unique identifier for the log stream
      * @type string
      * @memberof LogStreamApiactivateLogStream
      */
    logStreamId: string;
}
export interface LogStreamApiCreateLogStreamRequest {
    /**
      *
      * @type LogStream
      * @memberof LogStreamApicreateLogStream
      */
    instance: LogStream;
}
export interface LogStreamApiDeactivateLogStreamRequest {
    /**
      * Unique identifier for the log stream
      * @type string
      * @memberof LogStreamApideactivateLogStream
      */
    logStreamId: string;
}
export interface LogStreamApiDeleteLogStreamRequest {
    /**
      * Unique identifier for the log stream
      * @type string
      * @memberof LogStreamApideleteLogStream
      */
    logStreamId: string;
}
export interface LogStreamApiGetLogStreamRequest {
    /**
      * Unique identifier for the log stream
      * @type string
      * @memberof LogStreamApigetLogStream
      */
    logStreamId: string;
}
export interface LogStreamApiListLogStreamsRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof LogStreamApilistLogStreams
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof LogStreamApilistLogStreams
      */
    limit?: number;
    /**
      * An expression that [filters](/#filter) the returned objects. You can only use the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60; properties in the filter expression.
      * @type string
      * @memberof LogStreamApilistLogStreams
      */
    filter?: string;
}
export interface LogStreamApiReplaceLogStreamRequest {
    /**
      * Unique identifier for the log stream
      * @type string
      * @memberof LogStreamApireplaceLogStream
      */
    logStreamId: string;
    /**
      *
      * @type LogStreamPutSchema
      * @memberof LogStreamApireplaceLogStream
      */
    instance: LogStreamPutSchema;
}
export declare class ObjectLogStreamApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: LogStreamApiRequestFactory, responseProcessor?: LogStreamApiResponseProcessor);
  /**
      * Activates a log stream by `logStreamId`
      * Activate a log stream
      * @param param the request object
      */
  activateLogStream(param: LogStreamApiActivateLogStreamRequest, options?: Configuration): Promise<LogStream>;
  /**
      * Creates a new log stream object
      * Create a log stream
      * @param param the request object
      */
  createLogStream(param: LogStreamApiCreateLogStreamRequest, options?: Configuration): Promise<LogStream>;
  /**
      * Deactivates a log stream by `logStreamId`
      * Deactivate a log stream
      * @param param the request object
      */
  deactivateLogStream(param: LogStreamApiDeactivateLogStreamRequest, options?: Configuration): Promise<LogStream>;
  /**
      * Deletes a log stream object from your org by ID
      * Delete a log stream
      * @param param the request object
      */
  deleteLogStream(param: LogStreamApiDeleteLogStreamRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a log stream object by ID
      * Retrieve a log stream
      * @param param the request object
      */
  getLogStream(param: LogStreamApiGetLogStreamRequest, options?: Configuration): Promise<LogStream>;
  /**
      * Lists all log stream objects in your org. You can request a paginated list or a subset of log streams that match a supported filter expression.
      * List all log streams
      * @param param the request object
      */
  listLogStreams(param?: LogStreamApiListLogStreamsRequest, options?: Configuration): Promise<Collection<LogStream>>;
  /**
      * Replaces the log stream object properties for a given ID.  This operation is typically used to update the configuration of a log stream. Depending on the type of log stream you want to update, certain properties can\'t be modified after the log stream is initially created. Use the [Retrieve the log stream schema for the schema type](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Schema/#tag/Schema/operation/getLogStreamSchema) request to determine which properties you can update for the specific log stream type. Log stream properties with the `\"writeOnce\" : true` attribute can\'t be updated after creation. You must still specify these `writeOnce` properties in the request body with the original values in the PUT request.  > **Note:** You don\'t have to specify properties that have both the `\"writeOnce\": true` and the `\"writeOnly\": true` attributes in the PUT request body. These property values are ignored even if you add them in the PUT request body.
      * Replace a log stream
      * @param param the request object
      */
  replaceLogStream(param: LogStreamApiReplaceLogStreamRequest, options?: Configuration): Promise<LogStream>;
}
import { NetworkZoneApiRequestFactory, NetworkZoneApiResponseProcessor } from '../apis/NetworkZoneApi';
export interface NetworkZoneApiActivateNetworkZoneRequest {
    /**
      * &#x60;id&#x60; of the Network Zone
      * @type string
      * @memberof NetworkZoneApiactivateNetworkZone
      */
    zoneId: string;
}
export interface NetworkZoneApiCreateNetworkZoneRequest {
    /**
      *
      * @type NetworkZone
      * @memberof NetworkZoneApicreateNetworkZone
      */
    zone: NetworkZone;
}
export interface NetworkZoneApiDeactivateNetworkZoneRequest {
    /**
      * &#x60;id&#x60; of the Network Zone
      * @type string
      * @memberof NetworkZoneApideactivateNetworkZone
      */
    zoneId: string;
}
export interface NetworkZoneApiDeleteNetworkZoneRequest {
    /**
      * &#x60;id&#x60; of the Network Zone
      * @type string
      * @memberof NetworkZoneApideleteNetworkZone
      */
    zoneId: string;
}
export interface NetworkZoneApiGetNetworkZoneRequest {
    /**
      * &#x60;id&#x60; of the Network Zone
      * @type string
      * @memberof NetworkZoneApigetNetworkZone
      */
    zoneId: string;
}
export interface NetworkZoneApiListNetworkZonesRequest {
    /**
      *
      * @type string
      * @memberof NetworkZoneApilistNetworkZones
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof NetworkZoneApilistNetworkZones
      */
    limit?: number;
    /**
      *
      * @type string
      * @memberof NetworkZoneApilistNetworkZones
      */
    filter?: string;
}
export interface NetworkZoneApiReplaceNetworkZoneRequest {
    /**
      * &#x60;id&#x60; of the Network Zone
      * @type string
      * @memberof NetworkZoneApireplaceNetworkZone
      */
    zoneId: string;
    /**
      *
      * @type NetworkZone
      * @memberof NetworkZoneApireplaceNetworkZone
      */
    zone: NetworkZone;
}
export declare class ObjectNetworkZoneApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: NetworkZoneApiRequestFactory, responseProcessor?: NetworkZoneApiResponseProcessor);
  /**
      * Activates a Network Zone by `zoneId`
      * Activate a network zone
      * @param param the request object
      */
  activateNetworkZone(param: NetworkZoneApiActivateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Creates a Network Zone * For an IP Network Zone, you must define either `gateways` or `proxies`. * For a Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `proxyType`. * For an Enhanced Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `ipServiceCategories`.
      * Create a network zone
      * @param param the request object
      */
  createNetworkZone(param: NetworkZoneApiCreateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Deactivates a Network Zone by `zoneId`
      * Deactivate a network zone
      * @param param the request object
      */
  deactivateNetworkZone(param: NetworkZoneApiDeactivateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Deletes a Network Zone by `zoneId` > **Notes:** > * You can\'t delete a Network Zone that\'s used by a [Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) or [Rule](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyRules). > * For Okta Identity Engine orgs, you can\'t delete a Network Zone with an ACTIVE `status`. <x-lifecycle class=\"oie\"></x-lifecycle>
      * Delete a network zone
      * @param param the request object
      */
  deleteNetworkZone(param: NetworkZoneApiDeleteNetworkZoneRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a Network Zone by `zoneId`
      * Retrieve a network zone
      * @param param the request object
      */
  getNetworkZone(param: NetworkZoneApiGetNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Lists all Network Zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id`, `usage`, and `system` properties. See [Filter](https://developer.okta.com/docs/api/#filter) for more information on the expressions that are used in filtering.
      * List all network zones
      * @param param the request object
      */
  listNetworkZones(param?: NetworkZoneApiListNetworkZonesRequest, options?: Configuration): Promise<Collection<NetworkZone>>;
  /**
      * Replaces a Network Zone by `zoneId`. The replaced Network Zone type must be the same as the existing type. You can replace the usage (`POLICY`, `BLOCKLIST`) of a Network Zone by updating the `usage` attribute.  **IP exempt zone**<br> If you have the IP exempt zone feature enabled, you can allow traffic from specific gateway IPs irrespective of Okta ThreatInsight configurations, blocked network zones, or IP change events within Identity Threat Protection with Okta AI.<br> <br> When you enable this feature, Okta creates a zone called `DefaultExemptIpZone`. Gateway IPs that you add to this zone always have access to Okta resources. See [IP exempt zone](https://help.okta.com/okta_help.htm?type=oie&id=csh-about-ip-exempt-zone).  > **Note:** You can\'t add trusted proxy IPs to this zone, delete the zone, or create additional exempt IP zones.
      * Replace a network zone
      * @param param the request object
      */
  replaceNetworkZone(param: NetworkZoneApiReplaceNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
}
import { OktaApplicationSettingsApiRequestFactory, OktaApplicationSettingsApiResponseProcessor } from '../apis/OktaApplicationSettingsApi';
export interface OktaApplicationSettingsApiGetFirstPartyAppSettingsRequest {
    /**
      * The key name for the Okta app.&lt;br&gt; Supported apps:   * Okta Admin Console (&#x60;admin-console&#x60;)
      * @type string
      * @memberof OktaApplicationSettingsApigetFirstPartyAppSettings
      */
    appName: string;
}
export interface OktaApplicationSettingsApiReplaceFirstPartyAppSettingsRequest {
    /**
      * The key name for the Okta app.&lt;br&gt; Supported apps:   * Okta Admin Console (&#x60;admin-console&#x60;)
      * @type string
      * @memberof OktaApplicationSettingsApireplaceFirstPartyAppSettings
      */
    appName: string;
    /**
      *
      * @type AdminConsoleSettings
      * @memberof OktaApplicationSettingsApireplaceFirstPartyAppSettings
      */
    adminConsoleSettings: AdminConsoleSettings;
}
export declare class ObjectOktaApplicationSettingsApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: OktaApplicationSettingsApiRequestFactory, responseProcessor?: OktaApplicationSettingsApiResponseProcessor);
  /**
      * Retrieves the settings for an Okta app (also known as an Okta first-party app)
      * Retrieve the Okta application settings
      * @param param the request object
      */
  getFirstPartyAppSettings(param: OktaApplicationSettingsApiGetFirstPartyAppSettingsRequest, options?: Configuration): Promise<AdminConsoleSettings>;
  /**
      * Replaces the settings for an Okta app (also known as an Okta first-party app)
      * Replace the Okta application settings
      * @param param the request object
      */
  replaceFirstPartyAppSettings(param: OktaApplicationSettingsApiReplaceFirstPartyAppSettingsRequest, options?: Configuration): Promise<AdminConsoleSettings>;
}
import { OktaPersonalSettingsApiRequestFactory, OktaPersonalSettingsApiResponseProcessor } from '../apis/OktaPersonalSettingsApi';
export interface OktaPersonalSettingsApiListPersonalAppsExportBlockListRequest {
}
export interface OktaPersonalSettingsApiReplaceBlockedEmailDomainsRequest {
    /**
      *
      * @type PersonalAppsBlockList
      * @memberof OktaPersonalSettingsApireplaceBlockedEmailDomains
      */
    personalAppsBlockList: PersonalAppsBlockList;
}
export interface OktaPersonalSettingsApiReplaceOktaPersonalAdminSettingsRequest {
    /**
      *
      * @type OktaPersonalAdminFeatureSettings
      * @memberof OktaPersonalSettingsApireplaceOktaPersonalAdminSettings
      */
    oktaPersonalAdminFeatureSettings: OktaPersonalAdminFeatureSettings;
}
export declare class ObjectOktaPersonalSettingsApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: OktaPersonalSettingsApiRequestFactory, responseProcessor?: OktaPersonalSettingsApiResponseProcessor);
  /**
      * Lists all blocked email domains which are excluded from app migration
      * List all blocked email domains
      * @param param the request object
      */
  listPersonalAppsExportBlockList(param?: OktaPersonalSettingsApiListPersonalAppsExportBlockListRequest, options?: Configuration): Promise<PersonalAppsBlockList>;
  /**
      * Replaces the list of blocked email domains which are excluded from app migration
      * Replace the blocked email domains
      * @param param the request object
      */
  replaceBlockedEmailDomains(param: OktaPersonalSettingsApiReplaceBlockedEmailDomainsRequest, options?: Configuration): Promise<void>;
  /**
      * Replaces Okta Personal admin settings in a Workforce org
      * Replace the Okta Personal admin settings
      * @param param the request object
      */
  replaceOktaPersonalAdminSettings(param: OktaPersonalSettingsApiReplaceOktaPersonalAdminSettingsRequest, options?: Configuration): Promise<void>;
}
import { OrgCreatorApiRequestFactory, OrgCreatorApiResponseProcessor } from '../apis/OrgCreatorApi';
export interface OrgCreatorApiCreateChildOrgRequest {
    /**
      *
      * @type ChildOrg
      * @memberof OrgCreatorApicreateChildOrg
      */
    childOrg?: ChildOrg;
}
export declare class ObjectOrgCreatorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: OrgCreatorApiRequestFactory, responseProcessor?: OrgCreatorApiResponseProcessor);
  /**
      * Creates an org (child org) that has the same features as the current requesting org (parent org). A child org inherits any new features added to the parent org, but new features added to the child org aren\'t propagated back to the parent org. > **Notes:** > * Some features associated with products, such as Atspoke, Workflows, and Okta Identity Governance, aren\'t propagated to the child org. > * Wait at least 30 seconds after a 201-Created response before you make API requests to the new child org. > * For rate limits, see [Org creation rate limits](https://developer.okta.com/docs/reference/rl-additional-limits/#org-creation-rate-limits).
      * Create an org
      * @param param the request object
      */
  createChildOrg(param?: OrgCreatorApiCreateChildOrgRequest, options?: Configuration): Promise<ChildOrg>;
}
import { OrgSettingApiRequestFactory, OrgSettingApiResponseProcessor } from '../apis/OrgSettingApi';
export interface OrgSettingApiAssignClientPrivilegesSettingRequest {
    /**
      *
      * @type ClientPrivilegesSetting
      * @memberof OrgSettingApiassignClientPrivilegesSetting
      */
    clientPrivilegesSetting?: ClientPrivilegesSetting;
}
export interface OrgSettingApiExtendOktaSupportRequest {
}
export interface OrgSettingApiGetAerialConsentRequest {
}
export interface OrgSettingApiGetAutoAssignAdminAppSettingRequest {
}
export interface OrgSettingApiGetClientPrivilegesSettingRequest {
}
export interface OrgSettingApiGetOktaCommunicationSettingsRequest {
}
export interface OrgSettingApiGetOrgContactTypesRequest {
}
export interface OrgSettingApiGetOrgContactUserRequest {
    /**
      *
      * @type &#39;BILLING&#39; | &#39;TECHNICAL&#39;
      * @memberof OrgSettingApigetOrgContactUser
      */
    contactType: 'BILLING' | 'TECHNICAL';
}
export interface OrgSettingApiGetOrgOktaSupportSettingsRequest {
}
export interface OrgSettingApiGetOrgPreferencesRequest {
}
export interface OrgSettingApiGetOrgSettingsRequest {
}
export interface OrgSettingApiGetThirdPartyAdminSettingRequest {
}
export interface OrgSettingApiGetWellknownOrgMetadataRequest {
}
export interface OrgSettingApiGrantAerialConsentRequest {
    /**
      *
      * @type OrgAerialConsent
      * @memberof OrgSettingApigrantAerialConsent
      */
    orgAerialConsent?: OrgAerialConsent;
}
export interface OrgSettingApiGrantOktaSupportRequest {
}
export interface OrgSettingApiListOktaSupportCasesRequest {
}
export interface OrgSettingApiOptInUsersToOktaCommunicationEmailsRequest {
}
export interface OrgSettingApiOptOutUsersFromOktaCommunicationEmailsRequest {
}
export interface OrgSettingApiReplaceOrgContactUserRequest {
    /**
      *
      * @type &#39;BILLING&#39; | &#39;TECHNICAL&#39;
      * @memberof OrgSettingApireplaceOrgContactUser
      */
    contactType: 'BILLING' | 'TECHNICAL';
    /**
      *
      * @type OrgContactUser
      * @memberof OrgSettingApireplaceOrgContactUser
      */
    orgContactUser: OrgContactUser;
}
export interface OrgSettingApiReplaceOrgSettingsRequest {
    /**
      *
      * @type OrgSetting
      * @memberof OrgSettingApireplaceOrgSettings
      */
    OrgSetting: OrgSetting;
}
export interface OrgSettingApiRevokeAerialConsentRequest {
    /**
      *
      * @type OrgAerialConsent
      * @memberof OrgSettingApirevokeAerialConsent
      */
    orgAerialConsent?: OrgAerialConsent;
}
export interface OrgSettingApiRevokeOktaSupportRequest {
}
export interface OrgSettingApiUpdateAutoAssignAdminAppSettingRequest {
    /**
      *
      * @type AutoAssignAdminAppSetting
      * @memberof OrgSettingApiupdateAutoAssignAdminAppSetting
      */
    autoAssignAdminAppSetting?: AutoAssignAdminAppSetting;
}
export interface OrgSettingApiUpdateOktaSupportCaseRequest {
    /**
      *
      * @type string
      * @memberof OrgSettingApiupdateOktaSupportCase
      */
    caseNumber: string;
    /**
      *
      * @type OktaSupportCase
      * @memberof OrgSettingApiupdateOktaSupportCase
      */
    oktaSupportCase?: OktaSupportCase;
}
export interface OrgSettingApiUpdateOrgHideOktaUIFooterRequest {
}
export interface OrgSettingApiUpdateOrgSettingsRequest {
    /**
      *
      * @type OrgSetting
      * @memberof OrgSettingApiupdateOrgSettings
      */
    OrgSetting?: OrgSetting;
}
export interface OrgSettingApiUpdateOrgShowOktaUIFooterRequest {
}
export interface OrgSettingApiUpdateThirdPartyAdminSettingRequest {
    /**
      *
      * @type ThirdPartyAdminSetting
      * @memberof OrgSettingApiupdateThirdPartyAdminSetting
      */
    thirdPartyAdminSetting: ThirdPartyAdminSetting;
}
export interface OrgSettingApiUploadOrgLogoRequest {
    /**
      * The file must be in PNG, JPG, or GIF format and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * @type HttpFile
      * @memberof OrgSettingApiuploadOrgLogo
      */
    file: HttpFile;
}
export declare class ObjectOrgSettingApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: OrgSettingApiRequestFactory, responseProcessor?: OrgSettingApiResponseProcessor);
  /**
      * Assigns the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) as the default role for new public client apps
      * Assign the default public client app role setting
      * @param param the request object
      */
  assignClientPrivilegesSetting(param?: OrgSettingApiAssignClientPrivilegesSettingRequest, options?: Configuration): Promise<ClientPrivilegesSetting>;
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to extend Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Extend Okta Support access
      * @param param the request object
      */
  extendOktaSupport(param?: OrgSettingApiExtendOktaSupportRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves the Okta Aerial consent grant details for your Org. Returns a 404 Not Found error if no consent has been granted.
      * Retrieve Okta Aerial consent for your org
      * @param param the request object
      */
  getAerialConsent(param?: OrgSettingApiGetAerialConsentRequest, options?: Configuration): Promise<OrgAerialConsentDetails>;
  /**
      * Retrieves the org setting to automatically assign the Okta Admin Console when an admin role is assigned
      * Retrieve the Okta Admin Console assignment setting
      * @param param the request object
      */
  getAutoAssignAdminAppSetting(param?: OrgSettingApiGetAutoAssignAdminAppSettingRequest, options?: Configuration): Promise<AutoAssignAdminAppSetting>;
  /**
      * Retrieves the org setting to assign the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) to new public client apps
      * Retrieve the default public client app role setting
      * @param param the request object
      */
  getClientPrivilegesSetting(param?: OrgSettingApiGetClientPrivilegesSettingRequest, options?: Configuration): Promise<ClientPrivilegesSetting>;
  /**
      * Retrieves Okta Communication Settings of your org
      * Retrieve the Okta communication settings
      * @param param the request object
      */
  getOktaCommunicationSettings(param?: OrgSettingApiGetOktaCommunicationSettingsRequest, options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Lists all org contact types for your Okta org
      * List all org contact types
      * @param param the request object
      */
  getOrgContactTypes(param?: OrgSettingApiGetOrgContactTypesRequest, options?: Configuration): Promise<Collection<OrgContactTypeObj>>;
  /**
      * Retrieves the ID and the user resource associated with the specified contact type
      * Retrieve the contact type user
      * @param param the request object
      */
  getOrgContactUser(param: OrgSettingApiGetOrgContactUserRequest, options?: Configuration): Promise<OrgContactUser>;
  /**
      * Retrieves Okta Support Settings for your org
      * Retrieve the Okta Support settings
      * @param param the request object
      */
  getOrgOktaSupportSettings(param?: OrgSettingApiGetOrgOktaSupportSettingsRequest, options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Retrieves preferences of your Okta org
      * Retrieve the org preferences
      * @param param the request object
      */
  getOrgPreferences(param?: OrgSettingApiGetOrgPreferencesRequest, options?: Configuration): Promise<OrgPreferences>;
  /**
      * Retrieves the Org General Settings
      * Retrieve the Org general settings
      * @param param the request object
      */
  getOrgSettings(param?: OrgSettingApiGetOrgSettingsRequest, options?: Configuration): Promise<OrgSetting>;
  /**
      * Retrieves the third-party admin setting. See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
      * Retrieve the org third-party admin setting
      * @param param the request object
      */
  getThirdPartyAdminSetting(param?: OrgSettingApiGetThirdPartyAdminSettingRequest, options?: Configuration): Promise<ThirdPartyAdminSetting>;
  /**
      * Retrieves the org metadata, which includes the org ID, configured custom domains, and authentication pipeline
      * Retrieve the Org metadata
      * @param param the request object
      */
  getWellknownOrgMetadata(param?: OrgSettingApiGetWellknownOrgMetadataRequest, options?: Configuration): Promise<WellKnownOrgMetadata>;
  /**
      * Grants an Okta Aerial account consent to manage your org. If the org is a child org, consent is taken from the parent org. Grant calls directly to the child are not allowed.
      * Grant Okta Aerial access to your org
      * @param param the request object
      */
  grantAerialConsent(param?: OrgSettingApiGrantAerialConsentRequest, options?: Configuration): Promise<OrgAerialConsentDetails>;
  /**
      * Grants Okta Support temporary access to your org as an administrator for eight hours  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to grant Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Grant Okta Support access
      * @param param the request object
      */
  grantOktaSupport(param?: OrgSettingApiGrantOktaSupportRequest, options?: Configuration): Promise<void>;
  /**
      * Lists all Okta Support cases that the requesting principal has permission to view
      * List all Okta Support cases
      * @param param the request object
      */
  listOktaSupportCases(param?: OrgSettingApiListOktaSupportCasesRequest, options?: Configuration): Promise<OktaSupportCases>;
  /**
      * Opts in all users of this org to Okta communication emails
      * Opt in to Okta user communication emails
      * @param param the request object
      */
  optInUsersToOktaCommunicationEmails(param?: OrgSettingApiOptInUsersToOktaCommunicationEmailsRequest, options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Opts out all users of this org from Okta communication emails
      * Opt out of Okta user communication emails
      * @param param the request object
      */
  optOutUsersFromOktaCommunicationEmails(param?: OrgSettingApiOptOutUsersFromOktaCommunicationEmailsRequest, options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Replaces the user associated with the specified contact type
      * Replace the contact type user
      * @param param the request object
      */
  replaceOrgContactUser(param: OrgSettingApiReplaceOrgContactUserRequest, options?: Configuration): Promise<OrgContactUser>;
  /**
      * Replaces the Org General Settings for your Okta org
      * Replace the Org general settings
      * @param param the request object
      */
  replaceOrgSettings(param: OrgSettingApiReplaceOrgSettingsRequest, options?: Configuration): Promise<OrgSetting>;
  /**
      * Revokes access of an Okta Aerial account to your Org. The revoke operation will fail if the org has already been added to an Aerial account.
      * Revoke Okta Aerial access to your org
      * @param param the request object
      */
  revokeAerialConsent(param?: OrgSettingApiRevokeAerialConsentRequest, options?: Configuration): Promise<OrgAerialConsentRevoked>;
  /**
      * Revokes Okta Support access to your org  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to revoke Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Revoke Okta Support access
      * @param param the request object
      */
  revokeOktaSupport(param?: OrgSettingApiRevokeOktaSupportRequest, options?: Configuration): Promise<void>;
  /**
      * Updates the org setting to automatically assign the Okta Admin Console when an admin role is assigned  > **Note:** This setting doesn\'t apply to the `SUPER_ADMIN` role. > When you assign the `SUPER_ADMIN` role to a user, the Admin Console is always assigned to the user regardless of the `autoAssignAdminAppSetting` setting.
      * Update the Okta Admin Console assignment setting
      * @param param the request object
      */
  updateAutoAssignAdminAppSetting(param?: OrgSettingApiUpdateAutoAssignAdminAppSettingRequest, options?: Configuration): Promise<AutoAssignAdminAppSetting>;
  /**
      * Updates access to the org for an Okta Support case:  * You can enable, disable, or extend access to your org for an Okta Support case.  * You can approve Okta Support access to your org for self-assigned cases. A self-assigned case is created and assigned by the same Okta Support user.
      * Update an Okta Support case
      * @param param the request object
      */
  updateOktaSupportCase(param: OrgSettingApiUpdateOktaSupportCaseRequest, options?: Configuration): Promise<OktaSupportCase>;
  /**
      * Sets the preference to hide the Okta End-User Dashboard footer for all end users of your org
      * Set the hide dashboard footer preference
      * @param param the request object
      */
  updateOrgHideOktaUIFooter(param?: OrgSettingApiUpdateOrgHideOktaUIFooterRequest, options?: Configuration): Promise<OrgPreferences>;
  /**
      * Updates partial Org General Settings
      * Update the Org general settings
      * @param param the request object
      */
  updateOrgSettings(param?: OrgSettingApiUpdateOrgSettingsRequest, options?: Configuration): Promise<OrgSetting>;
  /**
      * Sets the preference to show the Okta UI footer for all end users of your org
      * Set the show dashboard footer preference
      * @param param the request object
      */
  updateOrgShowOktaUIFooter(param?: OrgSettingApiUpdateOrgShowOktaUIFooterRequest, options?: Configuration): Promise<OrgPreferences>;
  /**
      * Updates the third-party admin setting. This setting allows third-party admins to perform administrative actions in the Admin Console, but they can\'t do any of the following:   * Receive Okta admin email notifications   * Contact Okta support   * Sign in to the Okta Help Center  See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
      * Update the org third-party admin setting
      * @param param the request object
      */
  updateThirdPartyAdminSetting(param: OrgSettingApiUpdateThirdPartyAdminSettingRequest, options?: Configuration): Promise<ThirdPartyAdminSetting>;
  /**
      * Uploads and replaces the logo for your organization
      * Upload the org logo
      * @param param the request object
      */
  uploadOrgLogo(param: OrgSettingApiUploadOrgLogoRequest, options?: Configuration): Promise<void>;
}
import { PolicyApiRequestFactory, PolicyApiResponseProcessor } from '../apis/PolicyApi';
export interface PolicyApiActivatePolicyRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApiactivatePolicy
      */
    policyId: string;
}
export interface PolicyApiActivatePolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApiactivatePolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof PolicyApiactivatePolicyRule
      */
    ruleId: string;
}
export interface PolicyApiClonePolicyRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApiclonePolicy
      */
    policyId: string;
}
export interface PolicyApiCreatePolicyRequest {
    /**
      *
      * @type CreateOrUpdatePolicy
      * @memberof PolicyApicreatePolicy
      */
    policy: CreateOrUpdatePolicy;
    /**
      * This query parameter is only valid for Classic Engine orgs.
      * @type boolean
      * @memberof PolicyApicreatePolicy
      */
    activate?: boolean;
}
export interface PolicyApiCreatePolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApicreatePolicyRule
      */
    policyId: string;
    /**
      *
      * @type PolicyRule
      * @memberof PolicyApicreatePolicyRule
      */
    policyRule: PolicyRule;
    /**
      * Defines the number of policy rules returned. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof PolicyApicreatePolicyRule
      */
    limit?: string;
    /**
      * Set this parameter to &#x60;false&#x60; to create an &#x60;INACTIVE&#x60; rule.
      * @type boolean
      * @memberof PolicyApicreatePolicyRule
      */
    activate?: boolean;
}
export interface PolicyApiCreatePolicySimulationRequest {
    /**
      *
      * @type Array&lt;SimulatePolicyBody&gt;
      * @memberof PolicyApicreatePolicySimulation
      */
    simulatePolicy: Array<SimulatePolicyBody>;
    /**
      * Use &#x60;expand&#x3D;EVALUATED&#x60; to include a list of evaluated but not matched policies and policy rules. Use &#x60;expand&#x3D;RULE&#x60; to include details about why a rule condition wasn\&#39;t matched.
      * @type string
      * @memberof PolicyApicreatePolicySimulation
      */
    expand?: string;
}
export interface PolicyApiDeactivatePolicyRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApideactivatePolicy
      */
    policyId: string;
}
export interface PolicyApiDeactivatePolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApideactivatePolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof PolicyApideactivatePolicyRule
      */
    ruleId: string;
}
export interface PolicyApiDeletePolicyRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApideletePolicy
      */
    policyId: string;
}
export interface PolicyApiDeletePolicyResourceMappingRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApideletePolicyResourceMapping
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy resource Mapping
      * @type string
      * @memberof PolicyApideletePolicyResourceMapping
      */
    mappingId: string;
}
export interface PolicyApiDeletePolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApideletePolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof PolicyApideletePolicyRule
      */
    ruleId: string;
}
export interface PolicyApiGetPolicyRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApigetPolicy
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof PolicyApigetPolicy
      */
    expand?: string;
}
export interface PolicyApiGetPolicyMappingRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApigetPolicyMapping
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy resource Mapping
      * @type string
      * @memberof PolicyApigetPolicyMapping
      */
    mappingId: string;
}
export interface PolicyApiGetPolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApigetPolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof PolicyApigetPolicyRule
      */
    ruleId: string;
}
export interface PolicyApiListPoliciesRequest {
    /**
      * Specifies the type of policy to return. The following policy types are available only with the Okta Identity Engine - &#x60;ACCESS_POLICY&#x60;, &#x60;PROFILE_ENROLLMENT&#x60;, &#x60;POST_AUTH_SESSION&#x60;, and &#x60;ENTITY_RISK&#x60;.
      * @type &#39;OKTA_SIGN_ON&#39; | &#39;PASSWORD&#39; | &#39;MFA_ENROLL&#39; | &#39;IDP_DISCOVERY&#39; | &#39;ACCESS_POLICY&#39; | &#39;PROFILE_ENROLLMENT&#39; | &#39;POST_AUTH_SESSION&#39; | &#39;ENTITY_RISK&#39;
      * @memberof PolicyApilistPolicies
      */
    type: 'OKTA_SIGN_ON' | 'PASSWORD' | 'MFA_ENROLL' | 'IDP_DISCOVERY' | 'ACCESS_POLICY' | 'PROFILE_ENROLLMENT' | 'POST_AUTH_SESSION' | 'ENTITY_RISK';
    /**
      * Refines the query by the &#x60;status&#x60; of the policy - &#x60;ACTIVE&#x60; or &#x60;INACTIVE&#x60;
      * @type string
      * @memberof PolicyApilistPolicies
      */
    status?: string;
    /**
      * Refines the query by policy name prefix (startWith method) passed in as &#x60;q&#x3D;string&#x60;
      * @type string
      * @memberof PolicyApilistPolicies
      */
    q?: string;
    /**
      *
      * @type string
      * @memberof PolicyApilistPolicies
      */
    expand?: string;
    /**
      * Refines the query by sorting on the policy &#x60;name&#x60; in ascending order
      * @type string
      * @memberof PolicyApilistPolicies
      */
    sortBy?: string;
    /**
      * Defines the number of policies returned, see [Pagination](https://developer.okta.com/docs/api/#pagination)
      * @type string
      * @memberof PolicyApilistPolicies
      */
    limit?: string;
    /**
      * Reference to the associated authorization server
      * @type string
      * @memberof PolicyApilistPolicies
      */
    resourceId?: string;
    /**
      * End page cursor for pagination, see [Pagination](https://developer.okta.com/docs/api/#pagination)
      * @type string
      * @memberof PolicyApilistPolicies
      */
    after?: string;
}
export interface PolicyApiListPolicyAppsRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApilistPolicyApps
      */
    policyId: string;
}
export interface PolicyApiListPolicyMappingsRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApilistPolicyMappings
      */
    policyId: string;
}
export interface PolicyApiListPolicyRulesRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApilistPolicyRules
      */
    policyId: string;
    /**
      * Defines the number of policy rules returned. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof PolicyApilistPolicyRules
      */
    limit?: string;
}
export interface PolicyApiMapResourceToPolicyRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApimapResourceToPolicy
      */
    policyId: string;
    /**
      *
      * @type PolicyMappingRequest
      * @memberof PolicyApimapResourceToPolicy
      */
    policyMappingRequest: PolicyMappingRequest;
}
export interface PolicyApiReplacePolicyRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApireplacePolicy
      */
    policyId: string;
    /**
      *
      * @type CreateOrUpdatePolicy
      * @memberof PolicyApireplacePolicy
      */
    policy: CreateOrUpdatePolicy;
}
export interface PolicyApiReplacePolicyRuleRequest {
    /**
      * &#x60;id&#x60; of the Policy
      * @type string
      * @memberof PolicyApireplacePolicyRule
      */
    policyId: string;
    /**
      * &#x60;id&#x60; of the policy rule
      * @type string
      * @memberof PolicyApireplacePolicyRule
      */
    ruleId: string;
    /**
      *
      * @type PolicyRule
      * @memberof PolicyApireplacePolicyRule
      */
    policyRule: PolicyRule;
}
export declare class ObjectPolicyApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: PolicyApiRequestFactory, responseProcessor?: PolicyApiResponseProcessor);
  /**
      * Activates a policy
      * Activate a policy
      * @param param the request object
      */
  activatePolicy(param: PolicyApiActivatePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Activates a policy rule identified by `policyId` and `ruleId`
      * Activate a policy rule
      * @param param the request object
      */
  activatePolicyRule(param: PolicyApiActivatePolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Clones an existing policy
      * Clone an existing policy
      * @param param the request object
      */
  clonePolicy(param: PolicyApiClonePolicyRequest, options?: Configuration): Promise<Policy>;
  /**
      * Creates a policy. There are many types of policies that you can create. See [Policies](https://developer.okta.com/docs/concepts/policies/) for an overview of the types of policies available and links to more indepth information.
      * Create a policy
      * @param param the request object
      */
  createPolicy(param: PolicyApiCreatePolicyRequest, options?: Configuration): Promise<CreateOrUpdatePolicy>;
  /**
      * Creates a policy rule  > **Note:** You can\'t create additional rules for the `PROFILE_ENROLLMENT` or `POST_AUTH_SESSION` policies.
      * Create a policy rule
      * @param param the request object
      */
  createPolicyRule(param: PolicyApiCreatePolicyRuleRequest, options?: Configuration): Promise<PolicyRule>;
  /**
      * Creates a policy or policy rule simulation. The access simulation evaluates policy and policy rules based on the existing policy rule configuration. The evaluation result simulates what the real-world authentication flow is and what policy rules have been applied or matched to the authentication flow.
      * Create a policy simulation
      * @param param the request object
      */
  createPolicySimulation(param: PolicyApiCreatePolicySimulationRequest, options?: Configuration): Promise<SimulatePolicyResponse>;
  /**
      * Deactivates a policy
      * Deactivate a policy
      * @param param the request object
      */
  deactivatePolicy(param: PolicyApiDeactivatePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates a policy rule identified by `policyId` and `ruleId`
      * Deactivate a policy rule
      * @param param the request object
      */
  deactivatePolicyRule(param: PolicyApiDeactivatePolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a policy
      * Delete a policy
      * @param param the request object
      */
  deletePolicy(param: PolicyApiDeletePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the resource mapping for a policy identified by `policyId` and `mappingId`
      * Delete a policy resource mapping
      * @param param the request object
      */
  deletePolicyResourceMapping(param: PolicyApiDeletePolicyResourceMappingRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a policy rule identified by `policyId` and `ruleId`
      * Delete a policy rule
      * @param param the request object
      */
  deletePolicyRule(param: PolicyApiDeletePolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a policy
      * Retrieve a policy
      * @param param the request object
      */
  getPolicy(param: PolicyApiGetPolicyRequest, options?: Configuration): Promise<Policy>;
  /**
      * Retrieves a resource mapping for a policy identified by `policyId` and `mappingId`
      * Retrieve a policy resource mapping
      * @param param the request object
      */
  getPolicyMapping(param: PolicyApiGetPolicyMappingRequest, options?: Configuration): Promise<PolicyMapping>;
  /**
      * Retrieves a policy rule
      * Retrieve a policy rule
      * @param param the request object
      */
  getPolicyRule(param: PolicyApiGetPolicyRuleRequest, options?: Configuration): Promise<PolicyRule>;
  /**
      * Lists all policies with the specified type
      * List all policies
      * @param param the request object
      */
  listPolicies(param: PolicyApiListPoliciesRequest, options?: Configuration): Promise<Collection<Policy>>;
  /**
      * Lists all applications mapped to a policy identified by `policyId`  > **Note:** Use [List all resources mapped to a Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyMappings) to list all applications mapped to a policy.
      * List all apps mapped to a policy
      * @param param the request object
      */
  listPolicyApps(param: PolicyApiListPolicyAppsRequest, options?: Configuration): Promise<Collection<Application>>;
  /**
      * Lists all resources mapped to a policy identified by `policyId`
      * List all resources mapped to a policy
      * @param param the request object
      */
  listPolicyMappings(param: PolicyApiListPolicyMappingsRequest, options?: Configuration): Promise<Collection<PolicyMapping>>;
  /**
      * Lists all policy rules
      * List all policy rules
      * @param param the request object
      */
  listPolicyRules(param: PolicyApiListPolicyRulesRequest, options?: Configuration): Promise<Collection<PolicyRule>>;
  /**
      * Maps a resource to a policy identified by `policyId`
      * Map a resource to a policy
      * @param param the request object
      */
  mapResourceToPolicy(param: PolicyApiMapResourceToPolicyRequest, options?: Configuration): Promise<PolicyMapping>;
  /**
      * Replaces the properties of a policy identified by `policyId`
      * Replace a policy
      * @param param the request object
      */
  replacePolicy(param: PolicyApiReplacePolicyRequest, options?: Configuration): Promise<Policy>;
  /**
      * Replaces the properties for a policy rule identified by `policyId` and `ruleId`
      * Replace a policy rule
      * @param param the request object
      */
  replacePolicyRule(param: PolicyApiReplacePolicyRuleRequest, options?: Configuration): Promise<PolicyRule>;
}
import { PrincipalRateLimitApiRequestFactory, PrincipalRateLimitApiResponseProcessor } from '../apis/PrincipalRateLimitApi';
export interface PrincipalRateLimitApiCreatePrincipalRateLimitEntityRequest {
    /**
      *
      * @type PrincipalRateLimitEntity
      * @memberof PrincipalRateLimitApicreatePrincipalRateLimitEntity
      */
    entity: PrincipalRateLimitEntity;
}
export interface PrincipalRateLimitApiGetPrincipalRateLimitEntityRequest {
    /**
      * ID of the principal rate limit
      * @type string
      * @memberof PrincipalRateLimitApigetPrincipalRateLimitEntity
      */
    principalRateLimitId: string;
}
export interface PrincipalRateLimitApiListPrincipalRateLimitEntitiesRequest {
    /**
      * Filters the list of principal rate limit entities by the provided principal type (&#x60;principalType&#x60;). For example, &#x60;filter&#x3D;principalType eq \&quot;SSWS_TOKEN\&quot;&#x60; or &#x60;filter&#x3D;principalType eq \&quot;OAUTH_CLIENT\&quot;&#x60;.
      * @type string
      * @memberof PrincipalRateLimitApilistPrincipalRateLimitEntities
      */
    filter: string;
    /**
      * The cursor to use for pagination. It\&#39;s an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof PrincipalRateLimitApilistPrincipalRateLimitEntities
      */
    after?: string;
    /**
      * Specifies the number of items to return in a single response page.
      * @type number
      * @memberof PrincipalRateLimitApilistPrincipalRateLimitEntities
      */
    limit?: number;
}
export interface PrincipalRateLimitApiReplacePrincipalRateLimitEntityRequest {
    /**
      * ID of the principal rate limit
      * @type string
      * @memberof PrincipalRateLimitApireplacePrincipalRateLimitEntity
      */
    principalRateLimitId: string;
    /**
      *
      * @type PrincipalRateLimitEntity
      * @memberof PrincipalRateLimitApireplacePrincipalRateLimitEntity
      */
    entity: PrincipalRateLimitEntity;
}
export declare class ObjectPrincipalRateLimitApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: PrincipalRateLimitApiRequestFactory, responseProcessor?: PrincipalRateLimitApiResponseProcessor);
  /**
      * Creates a new principal rate limit entity. Okta only allows one principal rate limit entity per org and principal.
      * Create a principal rate limit
      * @param param the request object
      */
  createPrincipalRateLimitEntity(param: PrincipalRateLimitApiCreatePrincipalRateLimitEntityRequest, options?: Configuration): Promise<PrincipalRateLimitEntity>;
  /**
      * Retrieves a principal rate limit entity by `principalRateLimitId`
      * Retrieve a principal rate limit
      * @param param the request object
      */
  getPrincipalRateLimitEntity(param: PrincipalRateLimitApiGetPrincipalRateLimitEntityRequest, options?: Configuration): Promise<PrincipalRateLimitEntity>;
  /**
      * Lists all Principal Rate Limit entities considering the provided parameters
      * List all principal rate limits
      * @param param the request object
      */
  listPrincipalRateLimitEntities(param: PrincipalRateLimitApiListPrincipalRateLimitEntitiesRequest, options?: Configuration): Promise<Collection<PrincipalRateLimitEntity>>;
  /**
      * Replaces a principal rate limit entity by `principalRateLimitId`
      * Replace a principal rate limit
      * @param param the request object
      */
  replacePrincipalRateLimitEntity(param: PrincipalRateLimitApiReplacePrincipalRateLimitEntityRequest, options?: Configuration): Promise<PrincipalRateLimitEntity>;
}
import { PrivilegedResourceApiRequestFactory, PrivilegedResourceApiResponseProcessor } from '../apis/PrivilegedResourceApi';
export interface PrivilegedResourceApiClaimPrivilegedResourceRequest {
    /**
      * ID of an existing privileged resource
      * @type string
      * @memberof PrivilegedResourceApiclaimPrivilegedResource
      */
    id: string;
}
export interface PrivilegedResourceApiCreatePrivilegedResourceRequest {
    /**
      *
      * @type PrivilegedResource
      * @memberof PrivilegedResourceApicreatePrivilegedResource
      */
    privilegedResource: PrivilegedResource;
}
export interface PrivilegedResourceApiDeletePrivilegedResourceRequest {
    /**
      * ID of an existing privileged resource
      * @type string
      * @memberof PrivilegedResourceApideletePrivilegedResource
      */
    id: string;
}
export interface PrivilegedResourceApiGetPrivilegedResourceRequest {
    /**
      * ID of an existing privileged resource
      * @type string
      * @memberof PrivilegedResourceApigetPrivilegedResource
      */
    id: string;
}
export interface PrivilegedResourceApiGetPrivilegedResourcesRequest {
    /**
      * ID of an existing container, such as an app instance
      * @type string
      * @memberof PrivilegedResourceApigetPrivilegedResources
      */
    containerId: string;
    /**
      * Last updated timestamp query parameter
      * @type string
      * @memberof PrivilegedResourceApigetPrivilegedResources
      */
    lastUpdated?: string;
    /**
      * The status of the privileged resource to filter on
      * @type string
      * @memberof PrivilegedResourceApigetPrivilegedResources
      */
    status?: string;
    /**
      * Specifies the batch size of the results to be returned
      * @type number
      * @memberof PrivilegedResourceApigetPrivilegedResources
      */
    limit?: number;
    /**
      * The cursor used for pagination. It represents the last privileged resource ID returned in the previous fetch operation.
      * @type string
      * @memberof PrivilegedResourceApigetPrivilegedResources
      */
    after?: string;
}
export interface PrivilegedResourceApiPreparePrivilegedResourcesToBeFetchedRequest {
    /**
      * ID of an existing container, such as an app instance
      * @type string
      * @memberof PrivilegedResourceApipreparePrivilegedResourcesToBeFetched
      */
    containerId: string;
    /**
      * Last updated timestamp query parameter
      * @type string
      * @memberof PrivilegedResourceApipreparePrivilegedResourcesToBeFetched
      */
    lastUpdated?: string;
}
export interface PrivilegedResourceApiReplaceFiltersForPrivilegedResourceIdentificationRequest {
    /**
      * ID of an existing container, such as an app instance
      * @type string
      * @memberof PrivilegedResourceApireplaceFiltersForPrivilegedResourceIdentification
      */
    containerId: string;
    /**
      *
      * @type PrivilegedResourceFilters
      * @memberof PrivilegedResourceApireplaceFiltersForPrivilegedResourceIdentification
      */
    privilegedResourceFilters: PrivilegedResourceFilters;
}
export interface PrivilegedResourceApiReplacePrivilegedResourceRequest {
    /**
      * ID of an existing privileged resource
      * @type string
      * @memberof PrivilegedResourceApireplacePrivilegedResource
      */
    id: string;
    /**
      *
      * @type PrivilegedResourceUpdateRequest
      * @memberof PrivilegedResourceApireplacePrivilegedResource
      */
    privilegedResourceUpdateRequest: PrivilegedResourceUpdateRequest;
}
export interface PrivilegedResourceApiRotatePasswordForPrivilegedResourceRequest {
    /**
      * ID of an existing privileged resource
      * @type string
      * @memberof PrivilegedResourceApirotatePasswordForPrivilegedResource
      */
    id: string;
    /**
      *
      * @type RotatePasswordRequest
      * @memberof PrivilegedResourceApirotatePasswordForPrivilegedResource
      */
    rotatePasswordRequest: RotatePasswordRequest;
}
export declare class ObjectPrivilegedResourceApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: PrivilegedResourceApiRequestFactory, responseProcessor?: PrivilegedResourceApiResponseProcessor);
  /**
      * Claims a specified privileged resource for management. This also marks the `status` as `ACTIVE`.
      * Claim a privileged resource for management
      * @param param the request object
      */
  claimPrivilegedResource(param: PrivilegedResourceApiClaimPrivilegedResourceRequest, options?: Configuration): Promise<PrivilegedResource>;
  /**
      * Creates a privileged resource either in Okta or for a specified external app. After creation, the `status` param is set to `CREATED`.
      * Create a privileged resource
      * @param param the request object
      */
  createPrivilegedResource(param: PrivilegedResourceApiCreatePrivilegedResourceRequest, options?: Configuration): Promise<PrivilegedResource>;
  /**
      * Deletes a privileged resource specified by ID. This also marks the `status` as `INACTIVE`.
      * Delete a privileged resource
      * @param param the request object
      */
  deletePrivilegedResource(param: PrivilegedResourceApiDeletePrivilegedResourceRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a privileged resource specified by ID
      * Retrieve a privileged resource
      * @param param the request object
      */
  getPrivilegedResource(param: PrivilegedResourceApiGetPrivilegedResourceRequest, options?: Configuration): Promise<PrivilegedResource>;
  /**
      * Retrieves privileged resources that were filtered based on the search and filtering criteria specified in the query parameters
      * Retrieve the privileged resources
      * @param param the request object
      */
  getPrivilegedResources(param: PrivilegedResourceApiGetPrivilegedResourcesRequest, options?: Configuration): Promise<Collection<PrivilegedResourceAccountAppResponse>>;
  /**
      * Prepares the privileged resources by scanning imported app users and applying the privileged resource filtering criteria.  If the request contains the `lastUpdated` parameter, the privileged resource criteria filters out the imported app users that were last updated after the timestamp.  The value of the `lastUpdated` query parameter should be what the client received in the `ETag` header included in the last response of the previous resource fetch cycle.
      * Prepare the privileged resources
      * @param param the request object
      */
  preparePrivilegedResourcesToBeFetched(param: PrivilegedResourceApiPreparePrivilegedResourcesToBeFetchedRequest, options?: Configuration): Promise<void>;
  /**
      * Replaces or creates filters used to identify privileged resources. These filters are used during the privileged resource retrieval operation.
      * Replace the filters
      * @param param the request object
      */
  replaceFiltersForPrivilegedResourceIdentification(param: PrivilegedResourceApiReplaceFiltersForPrivilegedResourceIdentificationRequest, options?: Configuration): Promise<void>;
  /**
      * Replaces a privileged resource specified by ID
      * Replace a privileged resource
      * @param param the request object
      */
  replacePrivilegedResource(param: PrivilegedResourceApiReplacePrivilegedResourceRequest, options?: Configuration): Promise<PrivilegedResource>;
  /**
      * Rotates the password for a specified privileged resource
      * Rotate the password for a privileged resource
      * @param param the request object
      */
  rotatePasswordForPrivilegedResource(param: PrivilegedResourceApiRotatePasswordForPrivilegedResourceRequest, options?: Configuration): Promise<PrivilegedResource>;
}
import { ProfileMappingApiRequestFactory, ProfileMappingApiResponseProcessor } from '../apis/ProfileMappingApi';
export interface ProfileMappingApiGetProfileMappingRequest {
    /**
      * &#x60;id&#x60; of the Mapping
      * @type string
      * @memberof ProfileMappingApigetProfileMapping
      */
    mappingId: string;
}
export interface ProfileMappingApiListProfileMappingsRequest {
    /**
      * Mapping &#x60;id&#x60; that specifies the pagination cursor for the next page of mappings
      * @type string
      * @memberof ProfileMappingApilistProfileMappings
      */
    after?: string;
    /**
      * Specifies the number of results per page
      * @type number
      * @memberof ProfileMappingApilistProfileMappings
      */
    limit?: number;
    /**
      * The user type or app instance ID that acts as the source of expressions in a mapping. If this parameter is included, all returned mappings have this as their &#x60;source.id&#x60;.
      * @type string
      * @memberof ProfileMappingApilistProfileMappings
      */
    sourceId?: string;
    /**
      * The user type or app instance ID that acts as the target of expressions in a mapping. If this parameter is included, all returned mappings have this as their &#x60;target.id&#x60;.
      * @type string
      * @memberof ProfileMappingApilistProfileMappings
      */
    targetId?: string;
}
export interface ProfileMappingApiUpdateProfileMappingRequest {
    /**
      * &#x60;id&#x60; of the Mapping
      * @type string
      * @memberof ProfileMappingApiupdateProfileMapping
      */
    mappingId: string;
    /**
      *
      * @type ProfileMappingRequest
      * @memberof ProfileMappingApiupdateProfileMapping
      */
    profileMapping: ProfileMappingRequest;
}
export declare class ObjectProfileMappingApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ProfileMappingApiRequestFactory, responseProcessor?: ProfileMappingApiResponseProcessor);
  /**
      * Retrieves a single profile mapping referenced by its ID
      * Retrieve a profile mapping
      * @param param the request object
      */
  getProfileMapping(param: ProfileMappingApiGetProfileMappingRequest, options?: Configuration): Promise<ProfileMapping>;
  /**
      * Lists all profile mappings in your org with [pagination](https://developer.okta.com/docs/api/#pagination). You can return a subset of profile mappings that match a supported `sourceId` and/or `targetId`.  The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the Link header contains a `next` link that you should treat as an opaque value (follow it, don\'t parse it). See [Link Header](https://developer.okta.com/docs/api/#link-header).  The response is a collection of profile mappings that include a subset of the profile mapping object\'s parameters. The profile mapping object describes the properties mapping between an Okta user and an app user profile using [JSON Schema Draft 4](https://datatracker.ietf.org/doc/html/draft-zyp-json-schema-04).
      * List all profile mappings
      * @param param the request object
      */
  listProfileMappings(param?: ProfileMappingApiListProfileMappingsRequest, options?: Configuration): Promise<Collection<ListProfileMappings>>;
  /**
      * Updates an existing profile mapping by adding, updating, or removing one or many property mappings
      * Update a profile mapping
      * @param param the request object
      */
  updateProfileMapping(param: ProfileMappingApiUpdateProfileMappingRequest, options?: Configuration): Promise<ProfileMapping>;
}
import { PushProviderApiRequestFactory, PushProviderApiResponseProcessor } from '../apis/PushProviderApi';
export interface PushProviderApiCreatePushProviderRequest {
    /**
      *
      * @type PushProvider
      * @memberof PushProviderApicreatePushProvider
      */
    pushProvider: PushProvider;
}
export interface PushProviderApiDeletePushProviderRequest {
    /**
      * Id of the push provider
      * @type string
      * @memberof PushProviderApideletePushProvider
      */
    pushProviderId: string;
}
export interface PushProviderApiGetPushProviderRequest {
    /**
      * Id of the push provider
      * @type string
      * @memberof PushProviderApigetPushProvider
      */
    pushProviderId: string;
}
export interface PushProviderApiListPushProvidersRequest {
    /**
      * Filters push providers by &#x60;providerType&#x60;
      * @type ProviderType
      * @memberof PushProviderApilistPushProviders
      */
    type?: ProviderType;
}
export interface PushProviderApiReplacePushProviderRequest {
    /**
      * Id of the push provider
      * @type string
      * @memberof PushProviderApireplacePushProvider
      */
    pushProviderId: string;
    /**
      *
      * @type PushProvider
      * @memberof PushProviderApireplacePushProvider
      */
    pushProvider: PushProvider;
}
export declare class ObjectPushProviderApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: PushProviderApiRequestFactory, responseProcessor?: PushProviderApiResponseProcessor);
  /**
      * Creates a new push provider. Each Push Provider must have a unique `name`.
      * Create a push provider
      * @param param the request object
      */
  createPushProvider(param: PushProviderApiCreatePushProviderRequest, options?: Configuration): Promise<PushProvider>;
  /**
      * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
      * Delete a push provider
      * @param param the request object
      */
  deletePushProvider(param: PushProviderApiDeletePushProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a push provider by `pushProviderId`
      * Retrieve a push provider
      * @param param the request object
      */
  getPushProvider(param: PushProviderApiGetPushProviderRequest, options?: Configuration): Promise<PushProvider>;
  /**
      * Lists all push providers
      * List all push providers
      * @param param the request object
      */
  listPushProviders(param?: PushProviderApiListPushProvidersRequest, options?: Configuration): Promise<Collection<PushProvider>>;
  /**
      * Replaces a push provider by `pushProviderId`
      * Replace a push provider
      * @param param the request object
      */
  replacePushProvider(param: PushProviderApiReplacePushProviderRequest, options?: Configuration): Promise<PushProvider>;
}
import { RateLimitSettingsApiRequestFactory, RateLimitSettingsApiResponseProcessor } from '../apis/RateLimitSettingsApi';
export interface RateLimitSettingsApiGetRateLimitSettingsAdminNotificationsRequest {
}
export interface RateLimitSettingsApiGetRateLimitSettingsPerClientRequest {
}
export interface RateLimitSettingsApiGetRateLimitSettingsWarningThresholdRequest {
}
export interface RateLimitSettingsApiReplaceRateLimitSettingsAdminNotificationsRequest {
    /**
      *
      * @type RateLimitAdminNotifications
      * @memberof RateLimitSettingsApireplaceRateLimitSettingsAdminNotifications
      */
    RateLimitAdminNotifications: RateLimitAdminNotifications;
}
export interface RateLimitSettingsApiReplaceRateLimitSettingsPerClientRequest {
    /**
      *
      * @type PerClientRateLimitSettings
      * @memberof RateLimitSettingsApireplaceRateLimitSettingsPerClient
      */
    perClientRateLimitSettings: PerClientRateLimitSettings;
}
export interface RateLimitSettingsApiReplaceRateLimitSettingsWarningThresholdRequest {
    /**
      *
      * @type RateLimitWarningThresholdRequest
      * @memberof RateLimitSettingsApireplaceRateLimitSettingsWarningThreshold
      */
    rateLimitWarningThreshold?: RateLimitWarningThresholdRequest;
}
export declare class ObjectRateLimitSettingsApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RateLimitSettingsApiRequestFactory, responseProcessor?: RateLimitSettingsApiResponseProcessor);
  /**
      * Retrieves the currently configured Rate Limit Admin Notification Settings
      * Retrieve the rate limit admin notification settings
      * @param param the request object
      */
  getRateLimitSettingsAdminNotifications(param?: RateLimitSettingsApiGetRateLimitSettingsAdminNotificationsRequest, options?: Configuration): Promise<RateLimitAdminNotifications>;
  /**
      * Retrieves the currently configured Per-Client Rate Limit Settings
      * Retrieve the per-client rate limit settings
      * @param param the request object
      */
  getRateLimitSettingsPerClient(param?: RateLimitSettingsApiGetRateLimitSettingsPerClientRequest, options?: Configuration): Promise<PerClientRateLimitSettings>;
  /**
      * Retrieves the currently configured threshold for warning notifications when the API\'s rate limit is exceeded
      * Retrieve the rate limit warning threshold percentage
      * @param param the request object
      */
  getRateLimitSettingsWarningThreshold(param?: RateLimitSettingsApiGetRateLimitSettingsWarningThresholdRequest, options?: Configuration): Promise<RateLimitWarningThresholdResponse>;
  /**
      * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
      * Replace the rate limit admin notification settings
      * @param param the request object
      */
  replaceRateLimitSettingsAdminNotifications(param: RateLimitSettingsApiReplaceRateLimitSettingsAdminNotificationsRequest, options?: Configuration): Promise<RateLimitAdminNotifications>;
  /**
      * Replaces the Per-Client Rate Limit Settings and returns the configured properties
      * Replace the per-client rate limit settings
      * @param param the request object
      */
  replaceRateLimitSettingsPerClient(param: RateLimitSettingsApiReplaceRateLimitSettingsPerClientRequest, options?: Configuration): Promise<PerClientRateLimitSettings>;
  /**
      * Replaces the Rate Limit Warning Threshold Percentage and returns the configured property
      * Replace the rate limit warning threshold percentage
      * @param param the request object
      */
  replaceRateLimitSettingsWarningThreshold(param?: RateLimitSettingsApiReplaceRateLimitSettingsWarningThresholdRequest, options?: Configuration): Promise<RateLimitWarningThresholdResponse>;
}
import { RealmApiRequestFactory, RealmApiResponseProcessor } from '../apis/RealmApi';
export interface RealmApiCreateRealmRequest {
    /**
      *
      * @type CreateRealmRequest
      * @memberof RealmApicreateRealm
      */
    body: CreateRealmRequest;
}
export interface RealmApiDeleteRealmRequest {
    /**
      * ID of the realm
      * @type string
      * @memberof RealmApideleteRealm
      */
    realmId: string;
}
export interface RealmApiGetRealmRequest {
    /**
      * ID of the realm
      * @type string
      * @memberof RealmApigetRealm
      */
    realmId: string;
}
export interface RealmApiListRealmsRequest {
    /**
      * Specifies the number of results returned. Defaults to 10 if &#x60;search&#x60; is provided.
      * @type number
      * @memberof RealmApilistRealms
      */
    limit?: number;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof RealmApilistRealms
      */
    after?: string;
    /**
      * Searches for realms with a supported filtering expression for most properties.  Searches for realms can be filtered by the contains (&#x60;co&#x60;) operator. You can only use &#x60;co&#x60; with the &#x60;profile.name&#x60; property. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @type string
      * @memberof RealmApilistRealms
      */
    search?: string;
    /**
      * Specifies the field to sort by and can be any single property (for search queries only)
      * @type string
      * @memberof RealmApilistRealms
      */
    sortBy?: string;
    /**
      * Specifies the sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
      * @type string
      * @memberof RealmApilistRealms
      */
    sortOrder?: string;
}
export interface RealmApiReplaceRealmRequest {
    /**
      * ID of the realm
      * @type string
      * @memberof RealmApireplaceRealm
      */
    realmId: string;
    /**
      *
      * @type UpdateRealmRequest
      * @memberof RealmApireplaceRealm
      */
    body: UpdateRealmRequest;
}
export declare class ObjectRealmApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RealmApiRequestFactory, responseProcessor?: RealmApiResponseProcessor);
  /**
      * Creates a new realm
      * Create a realm
      * @param param the request object
      */
  createRealm(param: RealmApiCreateRealmRequest, options?: Configuration): Promise<Realm>;
  /**
      * Deletes a realm permanently. This operation can only be performed after disassociating other entities like users and identity providers from a realm.
      * Delete a realm
      * @param param the request object
      */
  deleteRealm(param: RealmApiDeleteRealmRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a realm
      * Retrieve a realm
      * @param param the request object
      */
  getRealm(param: RealmApiGetRealmRequest, options?: Configuration): Promise<Realm>;
  /**
      * Lists all Realms
      * List all realms
      * @param param the request object
      */
  listRealms(param?: RealmApiListRealmsRequest, options?: Configuration): Promise<Collection<Realm>>;
  /**
      * Replaces the realm profile
      * Replace the realm profile
      * @param param the request object
      */
  replaceRealm(param: RealmApiReplaceRealmRequest, options?: Configuration): Promise<Realm>;
}
import { RealmAssignmentApiRequestFactory, RealmAssignmentApiResponseProcessor } from '../apis/RealmAssignmentApi';
export interface RealmAssignmentApiActivateRealmAssignmentRequest {
    /**
      * ID of the realm assignment
      * @type string
      * @memberof RealmAssignmentApiactivateRealmAssignment
      */
    assignmentId: string;
}
export interface RealmAssignmentApiCreateRealmAssignmentRequest {
    /**
      *
      * @type CreateRealmAssignmentRequest
      * @memberof RealmAssignmentApicreateRealmAssignment
      */
    body: CreateRealmAssignmentRequest;
}
export interface RealmAssignmentApiDeactivateRealmAssignmentRequest {
    /**
      * ID of the realm assignment
      * @type string
      * @memberof RealmAssignmentApideactivateRealmAssignment
      */
    assignmentId: string;
}
export interface RealmAssignmentApiDeleteRealmAssignmentRequest {
    /**
      * ID of the realm assignment
      * @type string
      * @memberof RealmAssignmentApideleteRealmAssignment
      */
    assignmentId: string;
}
export interface RealmAssignmentApiExecuteRealmAssignmentRequest {
    /**
      *
      * @type OperationRequest
      * @memberof RealmAssignmentApiexecuteRealmAssignment
      */
    body: OperationRequest;
}
export interface RealmAssignmentApiGetRealmAssignmentRequest {
    /**
      * ID of the realm assignment
      * @type string
      * @memberof RealmAssignmentApigetRealmAssignment
      */
    assignmentId: string;
}
export interface RealmAssignmentApiListRealmAssignmentOperationsRequest {
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof RealmAssignmentApilistRealmAssignmentOperations
      */
    limit?: number;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof RealmAssignmentApilistRealmAssignmentOperations
      */
    after?: string;
}
export interface RealmAssignmentApiListRealmAssignmentsRequest {
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof RealmAssignmentApilistRealmAssignments
      */
    limit?: number;
    /**
      * The cursor used for pagination. It represents the priority of the last realm assignment returned in the previous fetch operation.
      * @type string
      * @memberof RealmAssignmentApilistRealmAssignments
      */
    after?: string;
}
export interface RealmAssignmentApiReplaceRealmAssignmentRequest {
    /**
      * ID of the realm assignment
      * @type string
      * @memberof RealmAssignmentApireplaceRealmAssignment
      */
    assignmentId: string;
    /**
      *
      * @type UpdateRealmAssignmentRequest
      * @memberof RealmAssignmentApireplaceRealmAssignment
      */
    body: UpdateRealmAssignmentRequest;
}
export declare class ObjectRealmAssignmentApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RealmAssignmentApiRequestFactory, responseProcessor?: RealmAssignmentApiResponseProcessor);
  /**
      * Activates a realm assignment
      * Activate a realm assignment
      * @param param the request object
      */
  activateRealmAssignment(param: RealmAssignmentApiActivateRealmAssignmentRequest, options?: Configuration): Promise<void>;
  /**
      * Creates a new realm assignment
      * Create a realm assignment
      * @param param the request object
      */
  createRealmAssignment(param: RealmAssignmentApiCreateRealmAssignmentRequest, options?: Configuration): Promise<RealmAssignment>;
  /**
      * Deactivates a realm assignment
      * Deactivate a realm assignment
      * @param param the request object
      */
  deactivateRealmAssignment(param: RealmAssignmentApiDeactivateRealmAssignmentRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a realm assignment
      * Delete a realm assignment
      * @param param the request object
      */
  deleteRealmAssignment(param: RealmAssignmentApiDeleteRealmAssignmentRequest, options?: Configuration): Promise<void>;
  /**
      * Executes a realm assignment
      * Execute a realm assignment
      * @param param the request object
      */
  executeRealmAssignment(param: RealmAssignmentApiExecuteRealmAssignmentRequest, options?: Configuration): Promise<OperationResponse>;
  /**
      * Retrieves a realm assignment
      * Retrieve a realm assignment
      * @param param the request object
      */
  getRealmAssignment(param: RealmAssignmentApiGetRealmAssignmentRequest, options?: Configuration): Promise<RealmAssignment>;
  /**
      * Lists all realm assignment operations. The upper limit is 200 and operations are sorted in descending order from most recent to oldest by ID.
      * List all realm assignment operations
      * @param param the request object
      */
  listRealmAssignmentOperations(param?: RealmAssignmentApiListRealmAssignmentOperationsRequest, options?: Configuration): Promise<Collection<OperationResponse>>;
  /**
      * Lists all realm assignments
      * List all realm assignments
      * @param param the request object
      */
  listRealmAssignments(param?: RealmAssignmentApiListRealmAssignmentsRequest, options?: Configuration): Promise<Collection<RealmAssignment>>;
  /**
      * Replaces a realm assignment
      * Replace a realm assignment
      * @param param the request object
      */
  replaceRealmAssignment(param: RealmAssignmentApiReplaceRealmAssignmentRequest, options?: Configuration): Promise<RealmAssignment>;
}
import { ResourceSetApiRequestFactory, ResourceSetApiResponseProcessor } from '../apis/ResourceSetApi';
export interface ResourceSetApiAddMembersToBindingRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApiaddMembersToBinding
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof ResourceSetApiaddMembersToBinding
      */
    roleIdOrLabel: string;
    /**
      *
      * @type ResourceSetBindingAddMembersRequest
      * @memberof ResourceSetApiaddMembersToBinding
      */
    instance: ResourceSetBindingAddMembersRequest;
}
export interface ResourceSetApiAddResourceSetResourceRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApiaddResourceSetResource
      */
    resourceSetId: string;
    /**
      *
      * @type ResourceSetResourcePostRequest
      * @memberof ResourceSetApiaddResourceSetResource
      */
    instance: ResourceSetResourcePostRequest;
}
export interface ResourceSetApiAddResourceSetResourcesRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApiaddResourceSetResources
      */
    resourceSetId: string;
    /**
      *
      * @type ResourceSetResourcePatchRequest
      * @memberof ResourceSetApiaddResourceSetResources
      */
    instance: ResourceSetResourcePatchRequest;
}
export interface ResourceSetApiCreateResourceSetRequest {
    /**
      *
      * @type CreateResourceSetRequest
      * @memberof ResourceSetApicreateResourceSet
      */
    instance: CreateResourceSetRequest;
}
export interface ResourceSetApiCreateResourceSetBindingRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApicreateResourceSetBinding
      */
    resourceSetId: string;
    /**
      *
      * @type ResourceSetBindingCreateRequest
      * @memberof ResourceSetApicreateResourceSetBinding
      */
    instance: ResourceSetBindingCreateRequest;
}
export interface ResourceSetApiDeleteBindingRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApideleteBinding
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof ResourceSetApideleteBinding
      */
    roleIdOrLabel: string;
}
export interface ResourceSetApiDeleteResourceSetRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApideleteResourceSet
      */
    resourceSetId: string;
}
export interface ResourceSetApiDeleteResourceSetResourceRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApideleteResourceSetResource
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; of the resource
      * @type string
      * @memberof ResourceSetApideleteResourceSetResource
      */
    resourceId: string;
}
export interface ResourceSetApiGetBindingRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApigetBinding
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof ResourceSetApigetBinding
      */
    roleIdOrLabel: string;
}
export interface ResourceSetApiGetMemberOfBindingRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApigetMemberOfBinding
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof ResourceSetApigetMemberOfBinding
      */
    roleIdOrLabel: string;
    /**
      * &#x60;id&#x60; of the member
      * @type string
      * @memberof ResourceSetApigetMemberOfBinding
      */
    memberId: string;
}
export interface ResourceSetApiGetResourceSetRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApigetResourceSet
      */
    resourceSetId: string;
}
export interface ResourceSetApiGetResourceSetResourceRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApigetResourceSetResource
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; of the resource
      * @type string
      * @memberof ResourceSetApigetResourceSetResource
      */
    resourceId: string;
}
export interface ResourceSetApiListBindingsRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApilistBindings
      */
    resourceSetId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof ResourceSetApilistBindings
      */
    after?: string;
}
export interface ResourceSetApiListMembersOfBindingRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApilistMembersOfBinding
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof ResourceSetApilistMembersOfBinding
      */
    roleIdOrLabel: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof ResourceSetApilistMembersOfBinding
      */
    after?: string;
}
export interface ResourceSetApiListResourceSetResourcesRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApilistResourceSetResources
      */
    resourceSetId: string;
}
export interface ResourceSetApiListResourceSetsRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof ResourceSetApilistResourceSets
      */
    after?: string;
}
export interface ResourceSetApiReplaceResourceSetRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApireplaceResourceSet
      */
    resourceSetId: string;
    /**
      *
      * @type ResourceSet
      * @memberof ResourceSetApireplaceResourceSet
      */
    instance: ResourceSet;
}
export interface ResourceSetApiReplaceResourceSetResourceRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApireplaceResourceSetResource
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; of the resource
      * @type string
      * @memberof ResourceSetApireplaceResourceSetResource
      */
    resourceId: string;
    /**
      *
      * @type ResourceSetResourcePutRequest
      * @memberof ResourceSetApireplaceResourceSetResource
      */
    resourceSetResourcePutRequest: ResourceSetResourcePutRequest;
}
export interface ResourceSetApiUnassignMemberFromBindingRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @type string
      * @memberof ResourceSetApiunassignMemberFromBinding
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof ResourceSetApiunassignMemberFromBinding
      */
    roleIdOrLabel: string;
    /**
      * &#x60;id&#x60; of the member
      * @type string
      * @memberof ResourceSetApiunassignMemberFromBinding
      */
    memberId: string;
}
export declare class ObjectResourceSetApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ResourceSetApiRequestFactory, responseProcessor?: ResourceSetApiResponseProcessor);
  /**
      * Adds more members to a role resource set binding
      * Add more role resource set binding members
      * @param param the request object
      */
  addMembersToBinding(param: ResourceSetApiAddMembersToBindingRequest, options?: Configuration): Promise<ResourceSetBindingEditResponse>;
  /**
      * Adds a resource with conditions for a resource set
      * Add a resource set resource with conditions
      * @param param the request object
      */
  addResourceSetResource(param: ResourceSetApiAddResourceSetResourceRequest, options?: Configuration): Promise<ResourceSetResource>;
  /**
      * Adds more resources to a resource set
      * Add more resources to a resource set
      * @param param the request object
      */
  addResourceSetResources(param: ResourceSetApiAddResourceSetResourcesRequest, options?: Configuration): Promise<ResourceSet>;
  /**
      * Creates a new resource set. See [Supported resources](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#supported-resources).  > **Note:** The maximum number of `resources` allowed in a resource set object is 1000. Resources are identified by either an Okta Resource Name (ORN) or by a REST URL format. See [Okta Resource Name](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#okta-resource-name-orn).
      * Create a resource set
      * @param param the request object
      */
  createResourceSet(param: ResourceSetApiCreateResourceSetRequest, options?: Configuration): Promise<ResourceSet>;
  /**
      * Creates a binding for the resource set, custom role, and members (users or groups)
      * Create a role resource set binding
      * @param param the request object
      */
  createResourceSetBinding(param: ResourceSetApiCreateResourceSetBindingRequest, options?: Configuration): Promise<ResourceSetBindingEditResponse>;
  /**
      * Deletes a binding of a role (identified by `roleIdOrLabel`) and a resource set (identified by `resourceSetIdOrLabel`)
      * Delete a role resource set binding
      * @param param the request object
      */
  deleteBinding(param: ResourceSetApiDeleteBindingRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a resource set by `resourceSetIdOrLabel`
      * Delete a resource set
      * @param param the request object
      */
  deleteResourceSet(param: ResourceSetApiDeleteResourceSetRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a resource (identified by `resourceId`) from a resource set
      * Delete a resource set resource
      * @param param the request object
      */
  deleteResourceSetResource(param: ResourceSetApiDeleteResourceSetResourceRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves the binding of a role (identified by `roleIdOrLabel`) for a resource set (identified by `resourceSetIdOrLabel`)
      * Retrieve a role resource set binding
      * @param param the request object
      */
  getBinding(param: ResourceSetApiGetBindingRequest, options?: Configuration): Promise<ResourceSetBindingResponse>;
  /**
      * Retrieves a member (identified by `memberId`) that belongs to a role resource set binding
      * Retrieve a role resource set binding member
      * @param param the request object
      */
  getMemberOfBinding(param: ResourceSetApiGetMemberOfBindingRequest, options?: Configuration): Promise<ResourceSetBindingMember>;
  /**
      * Retrieves a resource set by `resourceSetIdOrLabel`
      * Retrieve a resource set
      * @param param the request object
      */
  getResourceSet(param: ResourceSetApiGetResourceSetRequest, options?: Configuration): Promise<ResourceSet>;
  /**
      * Retrieves a resource identified by `resourceId` in a resource set
      * Retrieve a resource set resource
      * @param param the request object
      */
  getResourceSetResource(param: ResourceSetApiGetResourceSetResourceRequest, options?: Configuration): Promise<ResourceSetResource>;
  /**
      * Lists all bindings for a resource set with pagination support.  The returned `roles` array contains the roles for each binding associated with the specified resource set. If there are more than 100 bindings for the specified resource set, `links.next` provides the resource with pagination for the next list of bindings.
      * List all role resource set bindings
      * @param param the request object
      */
  listBindings(param: ResourceSetApiListBindingsRequest, options?: Configuration): Promise<ResourceSetBindings>;
  /**
      * Lists all members of a role resource set binding with pagination support
      * List all role resource set binding members
      * @param param the request object
      */
  listMembersOfBinding(param: ResourceSetApiListMembersOfBindingRequest, options?: Configuration): Promise<ResourceSetBindingMembers>;
  /**
      * Lists all resources for the resource set
      * List all resource set resources
      * @param param the request object
      */
  listResourceSetResources(param: ResourceSetApiListResourceSetResourcesRequest, options?: Configuration): Promise<ResourceSetResources>;
  /**
      * Lists all resource sets with pagination support
      * List all resource sets
      * @param param the request object
      */
  listResourceSets(param?: ResourceSetApiListResourceSetsRequest, options?: Configuration): Promise<ResourceSets>;
  /**
      * Replaces the label and description of a resource set
      * Replace a resource set
      * @param param the request object
      */
  replaceResourceSet(param: ResourceSetApiReplaceResourceSetRequest, options?: Configuration): Promise<ResourceSet>;
  /**
      * Replaces the conditions of a resource identified by `resourceId` in a resource set
      * Replace the resource set resource conditions
      * @param param the request object
      */
  replaceResourceSetResource(param: ResourceSetApiReplaceResourceSetResourceRequest, options?: Configuration): Promise<ResourceSetResource>;
  /**
      * Unassigns a member (identified by `memberId`) from a role resource set binding
      * Unassign a role resource set binding member
      * @param param the request object
      */
  unassignMemberFromBinding(param: ResourceSetApiUnassignMemberFromBindingRequest, options?: Configuration): Promise<void>;
}
import { RiskEventApiRequestFactory, RiskEventApiResponseProcessor } from '../apis/RiskEventApi';
export interface RiskEventApiSendRiskEventsRequest {
    /**
      *
      * @type Array&lt;RiskEvent&gt;
      * @memberof RiskEventApisendRiskEvents
      */
    instance: Array<RiskEvent>;
}
export declare class ObjectRiskEventApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RiskEventApiRequestFactory, responseProcessor?: RiskEventApiResponseProcessor);
  /**
      * Sends multiple IP risk events to Okta. This request is used by a third-party risk provider to send IP risk events to Okta. The third-party risk provider needs to be registered with Okta before they can send events to Okta. See [Risk Providers](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RiskProvider/). This API has a rate limit of 30 requests per minute. You can include multiple risk events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. Prioritize sending high risk signals if you have a burst of signals to send that would exceed the maximum request limits.
      * Send multiple risk events
      * @param param the request object
      */
  sendRiskEvents(param: RiskEventApiSendRiskEventsRequest, options?: Configuration): Promise<void>;
}
import { RiskProviderApiRequestFactory, RiskProviderApiResponseProcessor } from '../apis/RiskProviderApi';
export interface RiskProviderApiCreateRiskProviderRequest {
    /**
      *
      * @type RiskProvider
      * @memberof RiskProviderApicreateRiskProvider
      */
    instance: RiskProvider;
}
export interface RiskProviderApiDeleteRiskProviderRequest {
    /**
      * &#x60;id&#x60; of the risk provider object
      * @type string
      * @memberof RiskProviderApideleteRiskProvider
      */
    riskProviderId: string;
}
export interface RiskProviderApiGetRiskProviderRequest {
    /**
      * &#x60;id&#x60; of the risk provider object
      * @type string
      * @memberof RiskProviderApigetRiskProvider
      */
    riskProviderId: string;
}
export interface RiskProviderApiListRiskProvidersRequest {
}
export interface RiskProviderApiReplaceRiskProviderRequest {
    /**
      * &#x60;id&#x60; of the risk provider object
      * @type string
      * @memberof RiskProviderApireplaceRiskProvider
      */
    riskProviderId: string;
    /**
      *
      * @type RiskProvider
      * @memberof RiskProviderApireplaceRiskProvider
      */
    instance: RiskProvider;
}
export declare class ObjectRiskProviderApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RiskProviderApiRequestFactory, responseProcessor?: RiskProviderApiResponseProcessor);
  /**
      * Creates a risk provider object. You can create a maximum of three risk provider objects.
      * Create a risk provider
      * @param param the request object
      */
  createRiskProvider(param: RiskProviderApiCreateRiskProviderRequest, options?: Configuration): Promise<RiskProvider>;
  /**
      * Deletes a risk provider object by its ID
      * Delete a risk provider
      * @param param the request object
      */
  deleteRiskProvider(param: RiskProviderApiDeleteRiskProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a risk provider object by ID
      * Retrieve a risk provider
      * @param param the request object
      */
  getRiskProvider(param: RiskProviderApiGetRiskProviderRequest, options?: Configuration): Promise<RiskProvider>;
  /**
      * Lists all risk provider objects
      * List all risk providers
      * @param param the request object
      */
  listRiskProviders(param?: RiskProviderApiListRiskProvidersRequest, options?: Configuration): Promise<Collection<RiskProvider>>;
  /**
      * Replaces the properties for a given risk provider object ID
      * Replace a risk provider
      * @param param the request object
      */
  replaceRiskProvider(param: RiskProviderApiReplaceRiskProviderRequest, options?: Configuration): Promise<RiskProvider>;
}
import { RoleAssignmentApiRequestFactory, RoleAssignmentApiResponseProcessor } from '../apis/RoleAssignmentApi';
export interface RoleAssignmentApiAssignRoleToClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleAssignmentApiassignRoleToClient
      */
    clientId: string;
    /**
      *
      * @type AssignRoleToGroupRequest
      * @memberof RoleAssignmentApiassignRoleToClient
      */
    assignRoleRequest: AssignRoleToGroupRequest;
}
export interface RoleAssignmentApiAssignRoleToGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleAssignmentApiassignRoleToGroup
      */
    groupId: string;
    /**
      *
      * @type AssignRoleToGroupRequest
      * @memberof RoleAssignmentApiassignRoleToGroup
      */
    assignRoleRequest: AssignRoleToGroupRequest;
    /**
      * Grants the group third-party admin status when set to &#x60;true&#x60;
      * @type boolean
      * @memberof RoleAssignmentApiassignRoleToGroup
      */
    disableNotifications?: boolean;
}
export interface RoleAssignmentApiAssignRoleToUserRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleAssignmentApiassignRoleToUser
      */
    userId: string;
    /**
      *
      * @type AssignRoleToUserRequest
      * @memberof RoleAssignmentApiassignRoleToUser
      */
    assignRoleRequest: AssignRoleToUserRequest;
    /**
      * Setting this to &#x60;true&#x60; grants the user third-party admin status
      * @type boolean
      * @memberof RoleAssignmentApiassignRoleToUser
      */
    disableNotifications?: boolean;
}
export interface RoleAssignmentApiDeleteRoleFromClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleAssignmentApideleteRoleFromClient
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleAssignmentApideleteRoleFromClient
      */
    roleAssignmentId: string;
}
export interface RoleAssignmentApiGetGroupAssignedRoleRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleAssignmentApigetGroupAssignedRole
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleAssignmentApigetGroupAssignedRole
      */
    roleId: string;
}
export interface RoleAssignmentApiGetRoleAssignmentGovernanceGrantRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleAssignmentApigetRoleAssignmentGovernanceGrant
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleAssignmentApigetRoleAssignmentGovernanceGrant
      */
    roleAssignmentId: string;
    /**
      * Grant ID
      * @type string
      * @memberof RoleAssignmentApigetRoleAssignmentGovernanceGrant
      */
    grantId: string;
}
export interface RoleAssignmentApiGetRoleAssignmentGovernanceGrantResourcesRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleAssignmentApigetRoleAssignmentGovernanceGrantResources
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleAssignmentApigetRoleAssignmentGovernanceGrantResources
      */
    roleAssignmentId: string;
    /**
      * Grant ID
      * @type string
      * @memberof RoleAssignmentApigetRoleAssignmentGovernanceGrantResources
      */
    grantId: string;
}
export interface RoleAssignmentApiGetUserAssignedRoleRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleAssignmentApigetUserAssignedRole
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleAssignmentApigetUserAssignedRole
      */
    roleId: string;
}
export interface RoleAssignmentApiGetUserAssignedRoleGovernanceRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleAssignmentApigetUserAssignedRoleGovernance
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleAssignmentApigetUserAssignedRoleGovernance
      */
    roleAssignmentId: string;
}
export interface RoleAssignmentApiListAssignedRolesForUserRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleAssignmentApilistAssignedRolesForUser
      */
    userId: string;
    /**
      * An optional parameter used to return targets configured for the standard role assignment in the &#x60;embedded&#x60; property. Supported values: &#x60;targets/groups&#x60; or &#x60;targets/catalog/apps&#x60;
      * @type string
      * @memberof RoleAssignmentApilistAssignedRolesForUser
      */
    expand?: string;
}
export interface RoleAssignmentApiListGroupAssignedRolesRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleAssignmentApilistGroupAssignedRoles
      */
    groupId: string;
    /**
      * An optional parameter used to return targets configured for the standard role assignment in the &#x60;embedded&#x60; property. Supported values: &#x60;targets/groups&#x60; or &#x60;targets/catalog/apps&#x60;
      * @type string
      * @memberof RoleAssignmentApilistGroupAssignedRoles
      */
    expand?: string;
}
export interface RoleAssignmentApiListRolesForClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleAssignmentApilistRolesForClient
      */
    clientId: string;
}
export interface RoleAssignmentApiListUsersWithRoleAssignmentsRequest {
    /**
      * Specifies the pagination cursor for the next page of targets
      * @type string
      * @memberof RoleAssignmentApilistUsersWithRoleAssignments
      */
    after?: string;
    /**
      * Specifies the number of results returned. Defaults to &#x60;100&#x60;.
      * @type number
      * @memberof RoleAssignmentApilistUsersWithRoleAssignments
      */
    limit?: number;
}
export interface RoleAssignmentApiRetrieveClientRoleRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleAssignmentApiretrieveClientRole
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleAssignmentApiretrieveClientRole
      */
    roleAssignmentId: string;
}
export interface RoleAssignmentApiUnassignRoleFromGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleAssignmentApiunassignRoleFromGroup
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleAssignmentApiunassignRoleFromGroup
      */
    roleId: string;
}
export interface RoleAssignmentApiUnassignRoleFromUserRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleAssignmentApiunassignRoleFromUser
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleAssignmentApiunassignRoleFromUser
      */
    roleId: string;
}
export declare class ObjectRoleAssignmentApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RoleAssignmentApiRequestFactory, responseProcessor?: RoleAssignmentApiResponseProcessor);
  /**
      * Assigns a [standard role](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles) to a client app.  You can also assign a custom role to a client app, but the preferred method to assign a custom role to a client is to create a binding between the custom role, the resource set, and the client app. See [Create a role resource set binding](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a client role
      * @param param the request object
      */
  assignRoleToClient(param: RoleAssignmentApiAssignRoleToClientRequest, options?: Configuration): Promise<ListGroupAssignedRoles200ResponseInner>;
  /**
      * Assigns a [standard role](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles) to a group.  You can also assign a custom role to a group, but the preferred method to assign a custom role to a group is to create a binding between the custom role, the resource set, and the group. See [Create a role resource set binding](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a role to a group
      * @param param the request object
      */
  assignRoleToGroup(param: RoleAssignmentApiAssignRoleToGroupRequest, options?: Configuration): Promise<ListGroupAssignedRoles200ResponseInner | void>;
  /**
      * Assigns a [standard role](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles) to a user.  You can also assign a custom role to a user, but the preferred method to assign a custom role to a user is to create a binding between the custom role, the resource set, and the user. See [Create a role resource set binding](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a user role
      * @param param the request object
      */
  assignRoleToUser(param: RoleAssignmentApiAssignRoleToUserRequest, options?: Configuration): Promise<AssignRoleToUser201Response>;
  /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a client app (identified by `clientId`)
      * Unassign a client role
      * @param param the request object
      */
  deleteRoleFromClient(param: RoleAssignmentApiDeleteRoleFromClientRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a role assigned to a group (identified by the `groupId`). The `roleAssignmentId` is the unique identifier for either a standard role group assignment object or a custom role resource set binding object.
      * Retrieve a group role assignment
      * @param param the request object
      */
  getGroupAssignedRole(param: RoleAssignmentApiGetGroupAssignedRoleRequest, options?: Configuration): Promise<ListGroupAssignedRoles200ResponseInner>;
  /**
      * Retrieves a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve a user role governance source
      * @param param the request object
      */
  getRoleAssignmentGovernanceGrant(param: RoleAssignmentApiGetRoleAssignmentGovernanceGrantRequest, options?: Configuration): Promise<RoleGovernanceSource>;
  /**
      * Retrieves the resources of a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve the user role governance source resources
      * @param param the request object
      */
  getRoleAssignmentGovernanceGrantResources(param: RoleAssignmentApiGetRoleAssignmentGovernanceGrantResourcesRequest, options?: Configuration): Promise<RoleGovernanceResources>;
  /**
      * Retrieves a role assigned to a user (identified by `userId`). The `roleAssignmentId` parameter is the unique identifier for either a standard role assignment object or a custom role resource set binding object.
      * Retrieve a user role assignment
      * @param param the request object
      */
  getUserAssignedRole(param: RoleAssignmentApiGetUserAssignedRoleRequest, options?: Configuration): Promise<ListGroupAssignedRoles200ResponseInner>;
  /**
      * Retrieves the governance sources of a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve all user role governance sources
      * @param param the request object
      */
  getUserAssignedRoleGovernance(param: RoleAssignmentApiGetUserAssignedRoleGovernanceRequest, options?: Configuration): Promise<RoleGovernance>;
  /**
      * Lists all roles assigned to a user (identified by `userId`)
      * List all user role assignments
      * @param param the request object
      */
  listAssignedRolesForUser(param: RoleAssignmentApiListAssignedRolesForUserRequest, options?: Configuration): Promise<Collection<ListGroupAssignedRoles200ResponseInner>>;
  /**
      * Lists all assigned roles of a group by `groupId`
      * List all group role assignments
      * @param param the request object
      */
  listGroupAssignedRoles(param: RoleAssignmentApiListGroupAssignedRolesRequest, options?: Configuration): Promise<Collection<ListGroupAssignedRoles200ResponseInner>>;
  /**
      * Lists all roles assigned to a client app identified by `clientId`
      * List all client role assignments
      * @param param the request object
      */
  listRolesForClient(param: RoleAssignmentApiListRolesForClientRequest, options?: Configuration): Promise<Collection<ListGroupAssignedRoles200ResponseInner>>;
  /**
      * Lists all users with role assignments
      * List all users with role assignments
      * @param param the request object
      */
  listUsersWithRoleAssignments(param?: RoleAssignmentApiListUsersWithRoleAssignmentsRequest, options?: Configuration): Promise<RoleAssignedUsers>;
  /**
      * Retrieves a role assignment (identified by `roleAssignmentId`) for a client app (identified by `clientId`)
      * Retrieve a client role
      * @param param the request object
      */
  retrieveClientRole(param: RoleAssignmentApiRetrieveClientRoleRequest, options?: Configuration): Promise<ListGroupAssignedRoles200ResponseInner>;
  /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a group (identified by the `groupId`)
      * Unassign a group role
      * @param param the request object
      */
  unassignRoleFromGroup(param: RoleAssignmentApiUnassignRoleFromGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a user (identified by `userId`)
      * Unassign a user role
      * @param param the request object
      */
  unassignRoleFromUser(param: RoleAssignmentApiUnassignRoleFromUserRequest, options?: Configuration): Promise<void>;
}
import { RoleTargetApiRequestFactory, RoleTargetApiResponseProcessor } from '../apis/RoleTargetApi';
export interface RoleTargetApiAssignAllAppsAsTargetToRoleForUserRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApiassignAllAppsAsTargetToRoleForUser
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignAllAppsAsTargetToRoleForUser
      */
    roleId: string;
}
export interface RoleTargetApiAssignAppInstanceTargetToAppAdminRoleForGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForGroup
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForGroup
      */
    roleId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForGroup
      */
    appName: string;
    /**
      * Application ID
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForGroup
      */
    applicationId: string;
}
export interface RoleTargetApiAssignAppInstanceTargetToAppAdminRoleForUserRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForUser
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForUser
      */
    roleId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForUser
      */
    appName: string;
    /**
      * Application ID
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForUser
      */
    applicationId: string;
}
export interface RoleTargetApiAssignAppTargetInstanceRoleForClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleTargetApiassignAppTargetInstanceRoleForClient
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignAppTargetInstanceRoleForClient
      */
    roleAssignmentId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiassignAppTargetInstanceRoleForClient
      */
    appName: string;
    /**
      * Application ID
      * @type string
      * @memberof RoleTargetApiassignAppTargetInstanceRoleForClient
      */
    appId: string;
}
export interface RoleTargetApiAssignAppTargetRoleToClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleTargetApiassignAppTargetRoleToClient
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignAppTargetRoleToClient
      */
    roleAssignmentId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiassignAppTargetRoleToClient
      */
    appName: string;
}
export interface RoleTargetApiAssignAppTargetToAdminRoleForGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForGroup
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForGroup
      */
    roleId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForGroup
      */
    appName: string;
}
export interface RoleTargetApiAssignAppTargetToAdminRoleForUserRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForUser
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForUser
      */
    roleId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForUser
      */
    appName: string;
}
export interface RoleTargetApiAssignGroupTargetRoleForClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleTargetApiassignGroupTargetRoleForClient
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignGroupTargetRoleForClient
      */
    roleAssignmentId: string;
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiassignGroupTargetRoleForClient
      */
    groupId: string;
}
export interface RoleTargetApiAssignGroupTargetToGroupAdminRoleRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToGroupAdminRole
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToGroupAdminRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToGroupAdminRole
      */
    targetGroupId: string;
}
export interface RoleTargetApiAssignGroupTargetToUserRoleRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToUserRole
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToUserRole
      */
    roleId: string;
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToUserRole
      */
    groupId: string;
}
export interface RoleTargetApiGetRoleTargetsByUserIdAndRoleIdRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApigetRoleTargetsByUserIdAndRoleId
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role or Base32 encoded &#x60;id&#x60; of the role name
      * @type string
      * @memberof RoleTargetApigetRoleTargetsByUserIdAndRoleId
      */
    roleIdOrEncodedRoleId: string;
    /**
      * Specifies the assignment type of the user
      * @type &#39;USER&#39; | &#39;GROUP&#39;
      * @memberof RoleTargetApigetRoleTargetsByUserIdAndRoleId
      */
    assignmentType?: 'USER' | 'GROUP';
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof RoleTargetApigetRoleTargetsByUserIdAndRoleId
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof RoleTargetApigetRoleTargetsByUserIdAndRoleId
      */
    limit?: number;
}
export interface RoleTargetApiListAppTargetRoleToClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleTargetApilistAppTargetRoleToClient
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApilistAppTargetRoleToClient
      */
    roleAssignmentId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof RoleTargetApilistAppTargetRoleToClient
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof RoleTargetApilistAppTargetRoleToClient
      */
    limit?: number;
}
export interface RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    roleId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    limit?: number;
}
export interface RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForUserRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    roleId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    limit?: number;
}
export interface RoleTargetApiListGroupTargetRoleForClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleTargetApilistGroupTargetRoleForClient
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApilistGroupTargetRoleForClient
      */
    roleAssignmentId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof RoleTargetApilistGroupTargetRoleForClient
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof RoleTargetApilistGroupTargetRoleForClient
      */
    limit?: number;
}
export interface RoleTargetApiListGroupTargetsForGroupRoleRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForGroupRole
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForGroupRole
      */
    roleId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForGroupRole
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof RoleTargetApilistGroupTargetsForGroupRole
      */
    limit?: number;
}
export interface RoleTargetApiListGroupTargetsForRoleRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForRole
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForRole
      */
    roleId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForRole
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof RoleTargetApilistGroupTargetsForRole
      */
    limit?: number;
}
export interface RoleTargetApiRemoveAppTargetInstanceRoleForClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleTargetApiremoveAppTargetInstanceRoleForClient
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiremoveAppTargetInstanceRoleForClient
      */
    roleAssignmentId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiremoveAppTargetInstanceRoleForClient
      */
    appName: string;
    /**
      * Application ID
      * @type string
      * @memberof RoleTargetApiremoveAppTargetInstanceRoleForClient
      */
    appId: string;
}
export interface RoleTargetApiRemoveAppTargetRoleFromClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleTargetApiremoveAppTargetRoleFromClient
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiremoveAppTargetRoleFromClient
      */
    roleAssignmentId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiremoveAppTargetRoleFromClient
      */
    appName: string;
}
export interface RoleTargetApiRemoveGroupTargetRoleFromClientRequest {
    /**
      * Client app ID
      * @type string
      * @memberof RoleTargetApiremoveGroupTargetRoleFromClient
      */
    clientId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiremoveGroupTargetRoleFromClient
      */
    roleAssignmentId: string;
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiremoveGroupTargetRoleFromClient
      */
    groupId: string;
}
export interface RoleTargetApiUnassignAppInstanceTargetFromAdminRoleForUserRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetFromAdminRoleForUser
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetFromAdminRoleForUser
      */
    roleId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetFromAdminRoleForUser
      */
    appName: string;
    /**
      * Application ID
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetFromAdminRoleForUser
      */
    applicationId: string;
}
export interface RoleTargetApiUnassignAppInstanceTargetToAppAdminRoleForGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetToAppAdminRoleForGroup
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetToAppAdminRoleForGroup
      */
    roleId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetToAppAdminRoleForGroup
      */
    appName: string;
    /**
      * Application ID
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetToAppAdminRoleForGroup
      */
    applicationId: string;
}
export interface RoleTargetApiUnassignAppTargetFromAppAdminRoleForUserRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApiunassignAppTargetFromAppAdminRoleForUser
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiunassignAppTargetFromAppAdminRoleForUser
      */
    roleId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiunassignAppTargetFromAppAdminRoleForUser
      */
    appName: string;
}
export interface RoleTargetApiUnassignAppTargetToAdminRoleForGroupRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiunassignAppTargetToAdminRoleForGroup
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiunassignAppTargetToAdminRoleForGroup
      */
    roleId: string;
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof RoleTargetApiunassignAppTargetToAdminRoleForGroup
      */
    appName: string;
}
export interface RoleTargetApiUnassignGroupTargetFromGroupAdminRoleRequest {
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromGroupAdminRole
      */
    groupId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromGroupAdminRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromGroupAdminRole
      */
    targetGroupId: string;
}
export interface RoleTargetApiUnassignGroupTargetFromUserAdminRoleRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromUserAdminRole
      */
    userId: string;
    /**
      * The &#x60;id&#x60; of the role assignment
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromUserAdminRole
      */
    roleId: string;
    /**
      * The &#x60;id&#x60; of the group
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromUserAdminRole
      */
    groupId: string;
}
export declare class ObjectRoleTargetApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RoleTargetApiRequestFactory, responseProcessor?: RoleTargetApiResponseProcessor);
  /**
      * Assigns all apps as target to an `APP_ADMIN` role
      * Assign all apps as target to admin role
      * @param param the request object
      */
  assignAllAppsAsTargetToRoleForUser(param: RoleTargetApiAssignAllAppsAsTargetToRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
      * Assign a group role app instance target
      * @param param the request object
      */
  assignAppInstanceTargetToAppAdminRoleForGroup(param: RoleTargetApiAssignAppInstanceTargetToAppAdminRoleForGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to an admin user. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permission to the same OIN app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
      * Assign an admin role app instance target
      * @param param the request object
      */
  assignAppInstanceTargetToAppAdminRoleForUser(param: RoleTargetApiAssignAppInstanceTargetToAppAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to a client. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage only specific configurations of the Salesforce app.
      * Assign a client role app instance target
      * @param param the request object
      */
  assignAppTargetInstanceRoleForClient(param: RoleTargetApiAssignAppTargetInstanceRoleForClientRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an OIN app target for an `APP_ADMIN` role assignment to a client. When you assign an app target from the OIN catalog, you reduce the scope of the role assignment. The role assignment applies to only app instances that are included in the specified OIN app target.  An assigned OIN app target overrides any existing app instance targets. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the administrator for all Facebook instances.
      * Assign a client role app target
      * @param param the request object
      */
  assignAppTargetRoleToClient(param: RoleTargetApiAssignAppTargetRoleToClientRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an OIN app target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target. An OIN app target that\'s assigned to the role overrides any existing instance targets of the OIN app. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app with `facebook` for `appName` makes that user the administrator for all Facebook instances.
      * Assign a group role app target
      * @param param the request object
      */
  assignAppTargetToAdminRoleForGroup(param: RoleTargetApiAssignAppTargetToAdminRoleForGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an OIN app target for an `APP_ADMIN` role assignment to an admin user. When you assign the first app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  Assigning an OIN app target overrides any existing app instance targets of the OIN app. For example, if a user was assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the admin for all Facebook instances.
      * Assign an admin role app target
      * @param param the request object
      */
  assignAppTargetToAdminRoleForUser(param: RoleTargetApiAssignAppTargetToAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets, but applies only to the specified target.
      * Assign a client role group target
      * @param param the request object
      */
  assignGroupTargetRoleForClient(param: RoleTargetApiAssignGroupTargetRoleForClientRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
      * Assign a group role group target
      * @param param the request object
      */
  assignGroupTargetToGroupAdminRole(param: RoleTargetApiAssignGroupTargetToGroupAdminRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a group target for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
      * Assign an admin role group target
      * @param param the request object
      */
  assignGroupTargetToUserRole(param: RoleTargetApiAssignGroupTargetToUserRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves all role targets for an `APP_ADMIN`, `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user by user or group assignment type. If the role isn\'t scoped to specific group targets or any app targets, an empty array `[]` is returned.
      * Retrieve a role target by assignment type
      * @param param the request object
      */
  getRoleTargetsByUserIdAndRoleId(param: RoleTargetApiGetRoleTargetsByUserIdAndRoleIdRequest, options?: Configuration): Promise<Collection<RoleTarget>>;
  /**
      * Lists all OIN app targets for an `APP_ADMIN` role that\'s assigned to a client (by `clientId`).
      * List all client role app targets
      * @param param the request object
      */
  listAppTargetRoleToClient(param: RoleTargetApiListAppTargetRoleToClientRequest, options?: Configuration): Promise<Collection<CatalogApplication>>;
  /**
      * Lists all app targets for an `APP_ADMIN` role assignment to a group. The response includes a list of OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app doesn\'t.
      * List all group role app targets
      * @param param the request object
      */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(param: RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForGroupRequest, options?: Configuration): Promise<Collection<CatalogApplication>>;
  /**
      * Lists all app targets for an `APP_ADMIN` role assigned to a user. The response is a list that includes OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app payload doesn\'t.
      * List all admin role app targets
      * @param param the request object
      */
  listApplicationTargetsForApplicationAdministratorRoleForUser(param: RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForUserRequest, options?: Configuration): Promise<Collection<CatalogApplication>>;
  /**
      * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
      * List all client role group targets
      * @param param the request object
      */
  listGroupTargetRoleForClient(param: RoleTargetApiListGroupTargetRoleForClientRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
      * List all group role group targets
      * @param param the request object
      */
  listGroupTargetsForGroupRole(param: RoleTargetApiListGroupTargetsForGroupRoleRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Lists all group targets for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. If the role isn\'t scoped to specific group targets, an empty array `[]` is returned.
      * List all admin role group targets
      * @param param the request object
      */
  listGroupTargetsForRole(param: RoleTargetApiListGroupTargetsForRoleRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Unassigns an app instance target from a role assignment to a client app  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all the apps, delete the role assignment with the instance target and create another one.  See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role app instance target
      * @param param the request object
      */
  removeAppTargetInstanceRoleForClient(param: RoleTargetApiRemoveAppTargetInstanceRoleForClientRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns an OIN app target for a role assignment to a client app  > **Note:** You can\'t remove the last OIN app target from a role assignment. > If you need a role assignment that applies to all apps, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role app target
      * @param param the request object
      */
  removeAppTargetRoleFromClient(param: RoleTargetApiRemoveAppTargetRoleFromClientRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a Group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app.  > **Note:** You can\'t remove the last group target from a role assignment. If you need a role assignment that applies to all groups, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role group target
      * @param param the request object
      */
  removeGroupTargetRoleFromClient(param: RoleTargetApiRemoveGroupTargetRoleFromClientRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns an app instance target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last app instance target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment and recreate a new one.
      * Unassign an admin role app instance target
      * @param param the request object
      */
  unassignAppInstanceTargetFromAdminRoleForUser(param: RoleTargetApiUnassignAppInstanceTargetFromAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns an app instance target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
      * Unassign a group role app instance target
      * @param param the request object
      */
  unassignAppInstanceTargetToAppAdminRoleForGroup(param: RoleTargetApiUnassignAppInstanceTargetToAppAdminRoleForGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns an OIN app target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last OIN app target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment to the user and recreate a new one.
      * Unassign an admin role app target
      * @param param the request object
      */
  unassignAppTargetFromAppAdminRoleForUser(param: RoleTargetApiUnassignAppTargetFromAppAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns an OIN app target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
      * Unassign a group role app target
      * @param param the request object
      */
  unassignAppTargetToAdminRoleForGroup(param: RoleTargetApiUnassignAppTargetToAdminRoleForGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a group target from a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group.
      * Unassign a group role group target
      * @param param the request object
      */
  unassignGroupTargetFromGroupAdminRole(param: RoleTargetApiUnassignGroupTargetFromGroupAdminRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last group target from a role assignment since this causes an exception. > If you need a role assignment that applies to all groups, delete the role assignment to the user and recreate a new one.
      * Unassign an admin role group target
      * @param param the request object
      */
  unassignGroupTargetFromUserAdminRole(param: RoleTargetApiUnassignGroupTargetFromUserAdminRoleRequest, options?: Configuration): Promise<void>;
}
import { SSFReceiverApiRequestFactory, SSFReceiverApiResponseProcessor } from '../apis/SSFReceiverApi';
export interface SSFReceiverApiActivateSecurityEventsProviderInstanceRequest {
    /**
      * &#x60;id&#x60; of the Security Events Provider instance
      * @type string
      * @memberof SSFReceiverApiactivateSecurityEventsProviderInstance
      */
    securityEventProviderId: string;
}
export interface SSFReceiverApiCreateSecurityEventsProviderInstanceRequest {
    /**
      *
      * @type SecurityEventsProviderRequest
      * @memberof SSFReceiverApicreateSecurityEventsProviderInstance
      */
    instance: SecurityEventsProviderRequest;
}
export interface SSFReceiverApiDeactivateSecurityEventsProviderInstanceRequest {
    /**
      * &#x60;id&#x60; of the Security Events Provider instance
      * @type string
      * @memberof SSFReceiverApideactivateSecurityEventsProviderInstance
      */
    securityEventProviderId: string;
}
export interface SSFReceiverApiDeleteSecurityEventsProviderInstanceRequest {
    /**
      * &#x60;id&#x60; of the Security Events Provider instance
      * @type string
      * @memberof SSFReceiverApideleteSecurityEventsProviderInstance
      */
    securityEventProviderId: string;
}
export interface SSFReceiverApiGetSecurityEventsProviderInstanceRequest {
    /**
      * &#x60;id&#x60; of the Security Events Provider instance
      * @type string
      * @memberof SSFReceiverApigetSecurityEventsProviderInstance
      */
    securityEventProviderId: string;
}
export interface SSFReceiverApiListSecurityEventsProviderInstancesRequest {
}
export interface SSFReceiverApiReplaceSecurityEventsProviderInstanceRequest {
    /**
      * &#x60;id&#x60; of the Security Events Provider instance
      * @type string
      * @memberof SSFReceiverApireplaceSecurityEventsProviderInstance
      */
    securityEventProviderId: string;
    /**
      *
      * @type SecurityEventsProviderRequest
      * @memberof SSFReceiverApireplaceSecurityEventsProviderInstance
      */
    instance: SecurityEventsProviderRequest;
}
export declare class ObjectSSFReceiverApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SSFReceiverApiRequestFactory, responseProcessor?: SSFReceiverApiResponseProcessor);
  /**
      * Activates a Security Events Provider instance by setting its status to `ACTIVE`. This operation resumes the flow of events from the Security Events Provider to Okta.
      * Activate a security events provider
      * @param param the request object
      */
  activateSecurityEventsProviderInstance(param: SSFReceiverApiActivateSecurityEventsProviderInstanceRequest, options?: Configuration): Promise<SecurityEventsProviderResponse>;
  /**
      * Creates a Security Events Provider instance
      * Create a security events provider
      * @param param the request object
      */
  createSecurityEventsProviderInstance(param: SSFReceiverApiCreateSecurityEventsProviderInstanceRequest, options?: Configuration): Promise<SecurityEventsProviderResponse>;
  /**
      * Deactivates a Security Events Provider instance by setting its status to `INACTIVE`. This operation stops the flow of events from the Security Events Provider to Okta.
      * Deactivate a security events provider
      * @param param the request object
      */
  deactivateSecurityEventsProviderInstance(param: SSFReceiverApiDeactivateSecurityEventsProviderInstanceRequest, options?: Configuration): Promise<SecurityEventsProviderResponse>;
  /**
      * Deletes a Security Events Provider instance specified by `id`
      * Delete a security events provider
      * @param param the request object
      */
  deleteSecurityEventsProviderInstance(param: SSFReceiverApiDeleteSecurityEventsProviderInstanceRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves the Security Events Provider instance specified by `id`
      * Retrieve the security events provider
      * @param param the request object
      */
  getSecurityEventsProviderInstance(param: SSFReceiverApiGetSecurityEventsProviderInstanceRequest, options?: Configuration): Promise<SecurityEventsProviderResponse>;
  /**
      * Lists all Security Events Provider instances
      * List all security events providers
      * @param param the request object
      */
  listSecurityEventsProviderInstances(param?: SSFReceiverApiListSecurityEventsProviderInstancesRequest, options?: Configuration): Promise<Collection<SecurityEventsProviderResponse>>;
  /**
      * Replaces a Security Events Provider instance specified by `id`
      * Replace a security events provider
      * @param param the request object
      */
  replaceSecurityEventsProviderInstance(param: SSFReceiverApiReplaceSecurityEventsProviderInstanceRequest, options?: Configuration): Promise<SecurityEventsProviderResponse>;
}
import { SSFSecurityEventTokenApiRequestFactory, SSFSecurityEventTokenApiResponseProcessor } from '../apis/SSFSecurityEventTokenApi';
export interface SSFSecurityEventTokenApiPublishSecurityEventTokensRequest {
    /**
      * The request body is a signed [SET](https://datatracker.ietf.org/doc/html/rfc8417), which is a type of JSON Web Token (JWT).  For SET JWT header and body descriptions, see [SET JWT header](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtHeader) and [SET JWT body payload](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtBody).
      * @type string
      * @memberof SSFSecurityEventTokenApipublishSecurityEventTokens
      */
    securityEventToken: string;
}
export declare class ObjectSSFSecurityEventTokenApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SSFSecurityEventTokenApiRequestFactory, responseProcessor?: SSFSecurityEventTokenApiResponseProcessor);
  /**
      * Publishes a Security Event Token (SET) sent by a Security Events Provider. After the token is verified, Okta ingests the event and performs any appropriate action.
      * Publish a security event token
      * @param param the request object
      */
  publishSecurityEventTokens(param: SSFSecurityEventTokenApiPublishSecurityEventTokensRequest, options?: Configuration): Promise<void>;
}
import { SSFTransmitterApiRequestFactory, SSFTransmitterApiResponseProcessor } from '../apis/SSFTransmitterApi';
export interface SSFTransmitterApiCreateSsfStreamRequest {
    /**
      *
      * @type StreamConfigurationCreateRequest
      * @memberof SSFTransmitterApicreateSsfStream
      */
    instance: StreamConfigurationCreateRequest;
}
export interface SSFTransmitterApiDeleteSsfStreamRequest {
    /**
      * The ID of the specified SSF Stream configuration
      * @type string
      * @memberof SSFTransmitterApideleteSsfStream
      */
    streamId?: string;
}
export interface SSFTransmitterApiGetSsfStreamStatusRequest {
    /**
      * The ID of the specified SSF Stream configuration
      * @type string
      * @memberof SSFTransmitterApigetSsfStreamStatus
      */
    streamId: string;
}
export interface SSFTransmitterApiGetSsfStreamsRequest {
    /**
      * The ID of the specified SSF Stream configuration
      * @type string
      * @memberof SSFTransmitterApigetSsfStreams
      */
    streamId?: string;
}
export interface SSFTransmitterApiGetWellknownSsfMetadataRequest {
}
export interface SSFTransmitterApiReplaceSsfStreamRequest {
    /**
      *
      * @type StreamConfiguration
      * @memberof SSFTransmitterApireplaceSsfStream
      */
    instance: StreamConfiguration;
}
export interface SSFTransmitterApiUpdateSsfStreamRequest {
    /**
      *
      * @type StreamConfiguration
      * @memberof SSFTransmitterApiupdateSsfStream
      */
    instance: StreamConfiguration;
}
export interface SSFTransmitterApiVerifySsfStreamRequest {
    /**
      *
      * @type StreamVerificationRequest
      * @memberof SSFTransmitterApiverifySsfStream
      */
    instance: StreamVerificationRequest;
}
export declare class ObjectSSFTransmitterApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SSFTransmitterApiRequestFactory, responseProcessor?: SSFTransmitterApiResponseProcessor);
  /**
      * Creates an SSF Stream for an event receiver to start receiving security events in the form of Security Event Tokens (SETs) from Okta.  An SSF Stream is associated with the Client ID of the OAuth 2.0 access token used to create the stream. The Client ID is provided by Okta for an [OAuth 2.0 app integration](https://help.okta.com/okta_help.htm?id=ext_Apps_App_Integration_Wizard-oidc). One SSF Stream is allowed for each Client ID, hence, one SSF Stream is allowed for each app integration in Okta.  A maximum of 10 SSF Stream configurations can be created for one org.
      * Create an SSF stream
      * @param param the request object
      */
  createSsfStream(param: SSFTransmitterApiCreateSsfStreamRequest, options?: Configuration): Promise<StreamConfiguration>;
  /**
      * Deletes the specified SSF Stream.  If the `stream_id` is not provided in the query string, the associated stream with the Client ID (through the request OAuth 2.0 access token) is deleted. Otherwise, the SSF Stream with the `stream_id` is deleted, if found.
      * Delete an SSF stream
      * @param param the request object
      */
  deleteSsfStream(param?: SSFTransmitterApiDeleteSsfStreamRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves the status of an SSF Stream. The status indicates whether the transmitter is able to transmit events over the stream.
      * Retrieve the SSF Stream status
      * @param param the request object
      */
  getSsfStreamStatus(param: SSFTransmitterApiGetSsfStreamStatusRequest, options?: Configuration): Promise<StreamStatus>;
  /**
      * Retrieves either a list of all known SSF Stream configurations or the individual configuration if specified by ID.  As Stream configurations are tied to a Client ID, only the Stream associated with the Client ID of the request OAuth 2.0 access token can be viewed.
      * Retrieve the SSF stream configuration(s)
      * @param param the request object
      */
  getSsfStreams(param?: SSFTransmitterApiGetSsfStreamsRequest, options?: Configuration): Promise<GetSsfStreams200Response>;
  /**
      * Retrieves SSF Transmitter configuration metadata. This includes all supported endpoints and key information about certain properties of the Okta org as the transmitter, such as `delivery_methods_supported`, `issuer`, and `jwks_uri`.
      * Retrieve the SSF transmitter metadata
      * @param param the request object
      */
  getWellknownSsfMetadata(param?: SSFTransmitterApiGetWellknownSsfMetadataRequest, options?: Configuration): Promise<WellKnownSSFMetadata>;
  /**
      * Replaces all properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is replaced.
      * Replace an SSF stream
      * @param param the request object
      */
  replaceSsfStream(param: SSFTransmitterApiReplaceSsfStreamRequest, options?: Configuration): Promise<StreamConfiguration>;
  /**
      * Updates properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is updated.
      * Update an SSF stream
      * @param param the request object
      */
  updateSsfStream(param: SSFTransmitterApiUpdateSsfStreamRequest, options?: Configuration): Promise<StreamConfiguration>;
  /**
      * Verifies an SSF Stream by publishing a Verification Event requested by a Security Events Provider.  > **Note:** A successful response doesn\'t indicate that the Verification Event     was transmitted successfully, only that Okta has transmitted the event or will     at some point in the future. The SSF Receiver is responsible for validating and acknowledging     successful transmission of the request by responding with HTTP Response Status Code 202.
      * Verify an SSF stream
      * @param param the request object
      */
  verifySsfStream(param: SSFTransmitterApiVerifySsfStreamRequest, options?: Configuration): Promise<void>;
}
import { SchemaApiRequestFactory, SchemaApiResponseProcessor } from '../apis/SchemaApi';
export interface SchemaApiGetApplicationUserSchemaRequest {
    /**
      * Application ID
      * @type string
      * @memberof SchemaApigetApplicationUserSchema
      */
    appInstanceId: string;
}
export interface SchemaApiGetGroupSchemaRequest {
}
export interface SchemaApiGetLogStreamSchemaRequest {
    /**
      *
      * @type LogStreamType
      * @memberof SchemaApigetLogStreamSchema
      */
    logStreamType: LogStreamType;
}
export interface SchemaApiGetUserSchemaRequest {
    /**
      * Schema ID. You can also use &#x60;default&#x60; to refer to the default user type schema.
      * @type string
      * @memberof SchemaApigetUserSchema
      */
    schemaId: string;
}
export interface SchemaApiListLogStreamSchemasRequest {
}
export interface SchemaApiUpdateApplicationUserProfileRequest {
    /**
      * Application ID
      * @type string
      * @memberof SchemaApiupdateApplicationUserProfile
      */
    appInstanceId: string;
    /**
      *
      * @type UserSchema
      * @memberof SchemaApiupdateApplicationUserProfile
      */
    body?: UserSchema;
}
export interface SchemaApiUpdateGroupSchemaRequest {
    /**
      *
      * @type GroupSchema
      * @memberof SchemaApiupdateGroupSchema
      */
    GroupSchema?: GroupSchema;
}
export interface SchemaApiUpdateUserProfileRequest {
    /**
      * Schema ID. You can also use &#x60;default&#x60; to refer to the default user type schema.
      * @type string
      * @memberof SchemaApiupdateUserProfile
      */
    schemaId: string;
    /**
      *
      * @type UserSchema
      * @memberof SchemaApiupdateUserProfile
      */
    userSchema: UserSchema;
}
export declare class ObjectSchemaApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SchemaApiRequestFactory, responseProcessor?: SchemaApiResponseProcessor);
  /**
      * Retrieves the default schema for an app user.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
      * Retrieve the default app user schema for an app
      * @param param the request object
      */
  getApplicationUserSchema(param: SchemaApiGetApplicationUserSchemaRequest, options?: Configuration): Promise<UserSchema>;
  /**
      * Retrieves the group schema  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
      * Retrieve the default group schema
      * @param param the request object
      */
  getGroupSchema(param?: SchemaApiGetGroupSchemaRequest, options?: Configuration): Promise<GroupSchema>;
  /**
      * Retrieves the schema for a log stream type. The `logStreamType` element in the URL specifies the log stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
      * Retrieve the log stream schema for the schema type
      * @param param the request object
      */
  getLogStreamSchema(param: SchemaApiGetLogStreamSchemaRequest, options?: Configuration): Promise<LogStreamSchema>;
  /**
      * Retrieves the schema for a user type
      * Retrieve a user schema
      * @param param the request object
      */
  getUserSchema(param: SchemaApiGetUserSchemaRequest, options?: Configuration): Promise<UserSchema>;
  /**
      * Lists the schema for all log stream types visible for this org
      * List the log stream schemas
      * @param param the request object
      */
  listLogStreamSchemas(param?: SchemaApiListLogStreamSchemasRequest, options?: Configuration): Promise<Collection<LogStreamSchema>>;
  /**
      * Updates the app user schema. This updates, adds, or removes one or more custom profile properties or the nullability of a base property in the app user schema for an app. Changing a base property\'s nullability (for example, the value of its `required` field) is allowed only if it is nullable in the default predefined schema for the app.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
      * Update the app user profile schema for an app
      * @param param the request object
      */
  updateApplicationUserProfile(param: SchemaApiUpdateApplicationUserProfileRequest, options?: Configuration): Promise<UserSchema>;
  /**
      * Updates the group profile schema. This updates, adds, or removes one or more custom profile properties in a group schema. Currently Okta does not support changing base group profile properties.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
      * Update the group profile schema
      * @param param the request object
      */
  updateGroupSchema(param?: SchemaApiUpdateGroupSchemaRequest, options?: Configuration): Promise<GroupSchema>;
  /**
      * Updates a user schema. Use this request to update, add, or remove one or more profile properties in a user schema. If you specify `default` for the `schemaId`, updates will apply to the default user type.  Unlike custom user profile properties, limited changes are allowed to base user profile properties (permissions, nullability of the `firstName` and `lastName` properties, or pattern for `login`). You can\'t remove a property from the default schema if it\'s being referenced as a [`matchAttribute`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/createIdentityProvider!path=policy/subject/matchAttribute&t=request) in `SAML2` IdPs. Currently, all validation of SAML assertions are only performed against the default user type.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.
      * Update a user schema
      * @param param the request object
      */
  updateUserProfile(param: SchemaApiUpdateUserProfileRequest, options?: Configuration): Promise<UserSchema>;
}
import { ServiceAccountApiRequestFactory, ServiceAccountApiResponseProcessor } from '../apis/ServiceAccountApi';
export interface ServiceAccountApiCreateAppServiceAccountRequest {
    /**
      *
      * @type AppServiceAccount
      * @memberof ServiceAccountApicreateAppServiceAccount
      */
    body: AppServiceAccount;
}
export interface ServiceAccountApiCreateServiceAccountRequest {
    /**
      *
      * @type ServiceAccount
      * @memberof ServiceAccountApicreateServiceAccount
      */
    body: ServiceAccount;
}
export interface ServiceAccountApiDeleteAppServiceAccountRequest {
    /**
      * ID of an existing service account
      * @type string
      * @memberof ServiceAccountApideleteAppServiceAccount
      */
    id: string;
}
export interface ServiceAccountApiDeleteServiceAccountRequest {
    /**
      * ID of an existing service account
      * @type string
      * @memberof ServiceAccountApideleteServiceAccount
      */
    id: string;
}
export interface ServiceAccountApiGetAppServiceAccountRequest {
    /**
      * ID of an existing service account
      * @type string
      * @memberof ServiceAccountApigetAppServiceAccount
      */
    id: string;
}
export interface ServiceAccountApiGetServiceAccountRequest {
    /**
      * ID of an existing service account
      * @type string
      * @memberof ServiceAccountApigetServiceAccount
      */
    id: string;
}
export interface ServiceAccountApiListAppServiceAccountsRequest {
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof ServiceAccountApilistAppServiceAccounts
      */
    limit?: number;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof ServiceAccountApilistAppServiceAccounts
      */
    after?: string;
    /**
      * Searches for app service accounts where the account name (&#x60;name&#x60;), username (&#x60;username&#x60;), app instance label (&#x60;containerInstanceName&#x60;), or OIN app key name (&#x60;containerGlobalName&#x60;) contains the given value
      * @type string
      * @memberof ServiceAccountApilistAppServiceAccounts
      */
    match?: string;
}
export interface ServiceAccountApiListServiceAccountsRequest {
    /**
      * Specifies the number of results returned
      * @type number
      * @memberof ServiceAccountApilistServiceAccounts
      */
    limit?: number;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof ServiceAccountApilistServiceAccounts
      */
    after?: string;
    /**
      * Searches for service accounts where the account name, username, app instance name, or global app name contains the given value
      * @type string
      * @memberof ServiceAccountApilistServiceAccounts
      */
    q?: string;
}
export interface ServiceAccountApiUpdateAppServiceAccountRequest {
    /**
      * ID of an existing service account
      * @type string
      * @memberof ServiceAccountApiupdateAppServiceAccount
      */
    id: string;
    /**
      *
      * @type AppServiceAccountForUpdate
      * @memberof ServiceAccountApiupdateAppServiceAccount
      */
    body?: AppServiceAccountForUpdate;
}
export interface ServiceAccountApiUpdateServiceAccountRequest {
    /**
      * ID of an existing service account
      * @type string
      * @memberof ServiceAccountApiupdateServiceAccount
      */
    id: string;
    /**
      *
      * @type ServiceAccountForUpdate
      * @memberof ServiceAccountApiupdateServiceAccount
      */
    body?: ServiceAccountForUpdate;
}
export declare class ObjectServiceAccountApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ServiceAccountApiRequestFactory, responseProcessor?: ServiceAccountApiResponseProcessor);
  /**
      * Creates a new app service account for managing an app account
      * Create an app service account
      * @param param the request object
      */
  createAppServiceAccount(param: ServiceAccountApiCreateAppServiceAccountRequest, options?: Configuration): Promise<AppServiceAccount>;
  /**
      * Creates a new service account for managing an Okta User or SaaS app account
      * Create a service account
      * @param param the request object
      */
  createServiceAccount(param: ServiceAccountApiCreateServiceAccountRequest, options?: Configuration): Promise<ServiceAccount>;
  /**
      * Deletes an app service account specified by ID
      * Delete an app service account
      * @param param the request object
      */
  deleteAppServiceAccount(param: ServiceAccountApiDeleteAppServiceAccountRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a service account specified by ID
      * Delete a service account
      * @param param the request object
      */
  deleteServiceAccount(param: ServiceAccountApiDeleteServiceAccountRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an app service account specified by ID
      * Retrieve an app service account
      * @param param the request object
      */
  getAppServiceAccount(param: ServiceAccountApiGetAppServiceAccountRequest, options?: Configuration): Promise<AppServiceAccount>;
  /**
      * Retrieves a service account specified by ID
      * Retrieve a service account
      * @param param the request object
      */
  getServiceAccount(param: ServiceAccountApiGetServiceAccountRequest, options?: Configuration): Promise<ServiceAccount>;
  /**
      * Lists all app service accounts
      * List all app service accounts
      * @param param the request object
      */
  listAppServiceAccounts(param?: ServiceAccountApiListAppServiceAccountsRequest, options?: Configuration): Promise<Collection<AppServiceAccount>>;
  /**
      * Lists all service accounts
      * List all service accounts
      * @param param the request object
      */
  listServiceAccounts(param?: ServiceAccountApiListServiceAccountsRequest, options?: Configuration): Promise<Collection<ServiceAccount>>;
  /**
      * Updates an existing app service account specified by ID
      * Update an existing app service account
      * @param param the request object
      */
  updateAppServiceAccount(param: ServiceAccountApiUpdateAppServiceAccountRequest, options?: Configuration): Promise<AppServiceAccount>;
  /**
      * Updates a service account specified by ID
      * Update a service account
      * @param param the request object
      */
  updateServiceAccount(param: ServiceAccountApiUpdateServiceAccountRequest, options?: Configuration): Promise<ServiceAccount>;
}
import { SessionApiRequestFactory, SessionApiResponseProcessor } from '../apis/SessionApi';
export interface SessionApiCloseCurrentSessionRequest {
    /**
      *
      * @type string
      * @memberof SessionApicloseCurrentSession
      */
    cookie?: string;
}
export interface SessionApiCreateSessionRequest {
    /**
      *
      * @type CreateSessionRequest
      * @memberof SessionApicreateSession
      */
    createSessionRequest: CreateSessionRequest;
}
export interface SessionApiGetCurrentSessionRequest {
    /**
      *
      * @type string
      * @memberof SessionApigetCurrentSession
      */
    cookie?: string;
}
export interface SessionApiGetSessionRequest {
    /**
      * &#x60;id&#x60; of the Session
      * @type string
      * @memberof SessionApigetSession
      */
    sessionId: string;
}
export interface SessionApiRefreshCurrentSessionRequest {
    /**
      *
      * @type string
      * @memberof SessionApirefreshCurrentSession
      */
    cookie?: string;
}
export interface SessionApiRefreshSessionRequest {
    /**
      * &#x60;id&#x60; of the Session
      * @type string
      * @memberof SessionApirefreshSession
      */
    sessionId: string;
}
export interface SessionApiRevokeSessionRequest {
    /**
      * &#x60;id&#x60; of the Session
      * @type string
      * @memberof SessionApirevokeSession
      */
    sessionId: string;
}
export declare class ObjectSessionApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SessionApiRequestFactory, responseProcessor?: SessionApiResponseProcessor);
  /**
      * Closes the Session for the user who is currently signed in. Use this method in a browser-based application to sign out a user.  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Close the current session
      * @param param the request object
      */
  closeCurrentSession(param?: SessionApiCloseCurrentSessionRequest, options?: Configuration): Promise<void>;
  /**
      * Creates a new Session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
      * Create a session with session token
      * @param param the request object
      */
  createSession(param: SessionApiCreateSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * Retrieves Session information for the current user. Use this method in a browser-based application to determine if the user is signed in.   > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Retrieve the current session
      * @param param the request object
      */
  getCurrentSession(param?: SessionApiGetCurrentSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * Retrieves information about the Session specified by the given session ID
      * Retrieve a session
      * @param param the request object
      */
  getSession(param: SessionApiGetSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * Refreshes the Session for the current user  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Refresh the current session
      * @param param the request object
      */
  refreshCurrentSession(param?: SessionApiRefreshCurrentSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * Refreshes an existing Session using the `id` for that Session. A successful response contains the refreshed Session with an updated `expiresAt` timestamp.
      * Refresh a session
      * @param param the request object
      */
  refreshSession(param: SessionApiRefreshSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * Revokes the specified Session
      * Revoke a session
      * @param param the request object
      */
  revokeSession(param: SessionApiRevokeSessionRequest, options?: Configuration): Promise<void>;
}
import { SubscriptionApiRequestFactory, SubscriptionApiResponseProcessor } from '../apis/SubscriptionApi';
export interface SubscriptionApiListRoleSubscriptionsRequest {
    /**
      * A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
      * @type ListRoleSubscriptionsRoleTypeOrRoleIdParameter
      * @memberof SubscriptionApilistRoleSubscriptions
      */
    roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter;
}
export interface SubscriptionApiListRoleSubscriptionsByNotificationTypeRequest {
    /**
      * A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
      * @type ListRoleSubscriptionsRoleTypeOrRoleIdParameter
      * @memberof SubscriptionApilistRoleSubscriptionsByNotificationType
      */
    roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter;
    /**
      *
      * @type NotificationType
      * @memberof SubscriptionApilistRoleSubscriptionsByNotificationType
      */
    notificationType: NotificationType;
}
export interface SubscriptionApiListUserSubscriptionsRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof SubscriptionApilistUserSubscriptions
      */
    userId: string;
}
export interface SubscriptionApiListUserSubscriptionsByNotificationTypeRequest {
    /**
      *
      * @type NotificationType
      * @memberof SubscriptionApilistUserSubscriptionsByNotificationType
      */
    notificationType: NotificationType;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof SubscriptionApilistUserSubscriptionsByNotificationType
      */
    userId: string;
}
export interface SubscriptionApiSubscribeRoleSubscriptionByNotificationTypeRequest {
    /**
      * A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
      * @type ListRoleSubscriptionsRoleTypeOrRoleIdParameter
      * @memberof SubscriptionApisubscribeRoleSubscriptionByNotificationType
      */
    roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter;
    /**
      *
      * @type NotificationType
      * @memberof SubscriptionApisubscribeRoleSubscriptionByNotificationType
      */
    notificationType: NotificationType;
}
export interface SubscriptionApiSubscribeUserSubscriptionByNotificationTypeRequest {
    /**
      *
      * @type NotificationType
      * @memberof SubscriptionApisubscribeUserSubscriptionByNotificationType
      */
    notificationType: NotificationType;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof SubscriptionApisubscribeUserSubscriptionByNotificationType
      */
    userId: string;
}
export interface SubscriptionApiUnsubscribeRoleSubscriptionByNotificationTypeRequest {
    /**
      * A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
      * @type ListRoleSubscriptionsRoleTypeOrRoleIdParameter
      * @memberof SubscriptionApiunsubscribeRoleSubscriptionByNotificationType
      */
    roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter;
    /**
      *
      * @type NotificationType
      * @memberof SubscriptionApiunsubscribeRoleSubscriptionByNotificationType
      */
    notificationType: NotificationType;
}
export interface SubscriptionApiUnsubscribeUserSubscriptionByNotificationTypeRequest {
    /**
      *
      * @type NotificationType
      * @memberof SubscriptionApiunsubscribeUserSubscriptionByNotificationType
      */
    notificationType: NotificationType;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof SubscriptionApiunsubscribeUserSubscriptionByNotificationType
      */
    userId: string;
}
export declare class ObjectSubscriptionApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SubscriptionApiRequestFactory, responseProcessor?: SubscriptionApiResponseProcessor);
  /**
      * Lists all subscriptions available to a specified Role
      * List all subscriptions for a role
      * @param param the request object
      */
  listRoleSubscriptions(param: SubscriptionApiListRoleSubscriptionsRequest, options?: Configuration): Promise<Collection<Subscription>>;
  /**
      * Retrieves a subscription by `notificationType` for a specified Role
      * Retrieve a subscription for a role
      * @param param the request object
      */
  listRoleSubscriptionsByNotificationType(param: SubscriptionApiListRoleSubscriptionsByNotificationTypeRequest, options?: Configuration): Promise<Subscription>;
  /**
      * Lists all subscriptions available to a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
      * List all subscriptions for a user
      * @param param the request object
      */
  listUserSubscriptions(param: SubscriptionApiListUserSubscriptionsRequest, options?: Configuration): Promise<Collection<Subscription>>;
  /**
      * Retrieves a subscription by `notificationType` for a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
      * Retrieve a subscription for a user
      * @param param the request object
      */
  listUserSubscriptionsByNotificationType(param: SubscriptionApiListUserSubscriptionsByNotificationTypeRequest, options?: Configuration): Promise<Subscription>;
  /**
      * Subscribes a Role to a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
      * Subscribe a role to a specific notification type
      * @param param the request object
      */
  subscribeRoleSubscriptionByNotificationType(param: SubscriptionApiSubscribeRoleSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<void>;
  /**
      * Subscribes the current user to a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
      * Subscribe a user to a specific notification type
      * @param param the request object
      */
  subscribeUserSubscriptionByNotificationType(param: SubscriptionApiSubscribeUserSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<void>;
  /**
      * Unsubscribes a Role from a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
      * Unsubscribe a role from a specific notification type
      * @param param the request object
      */
  unsubscribeRoleSubscriptionByNotificationType(param: SubscriptionApiUnsubscribeRoleSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<void>;
  /**
      * Unsubscribes the current user from a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
      * Unsubscribe a user from a specific notification type
      * @param param the request object
      */
  unsubscribeUserSubscriptionByNotificationType(param: SubscriptionApiUnsubscribeUserSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<void>;
}
import { SystemLogApiRequestFactory, SystemLogApiResponseProcessor } from '../apis/SystemLogApi';
export interface SystemLogApiListLogEventsRequest {
    /**
      * Filters the lower time bound of the log events &#x60;published&#x60; property for bounded queries or persistence time for polling queries
      * @type string
      * @memberof SystemLogApilistLogEvents
      */
    since?: string;
    /**
      * Filters the upper time bound of the log events &#x60;published&#x60; property for bounded queries or persistence time for polling queries.
      * @type string
      * @memberof SystemLogApilistLogEvents
      */
    until?: string;
    /**
      * Retrieves the next page of results. Okta returns a link in the HTTP Header (&#x60;rel&#x3D;next&#x60;) that includes the after query parameter
      * @type string
      * @memberof SystemLogApilistLogEvents
      */
    after?: string;
    /**
      * Filter expression that filters the results. All operators except [ ] are supported. See [Filter](https://developer.okta.com/docs/api/#filter) and [Operators](https://developer.okta.com/docs/api/#operators).
      * @type string
      * @memberof SystemLogApilistLogEvents
      */
    filter?: string;
    /**
      * Filters log events results by one or more case insensitive keywords.
      * @type string
      * @memberof SystemLogApilistLogEvents
      */
    q?: string;
    /**
      * Sets the number of results that are returned in the response
      * @type number
      * @memberof SystemLogApilistLogEvents
      */
    limit?: number;
    /**
      * The order of the returned events that are sorted by the &#x60;published&#x60; property
      * @type &#39;ASCENDING&#39; | &#39;DESCENDING&#39;
      * @memberof SystemLogApilistLogEvents
      */
    sortOrder?: 'ASCENDING' | 'DESCENDING';
}
export declare class ObjectSystemLogApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SystemLogApiRequestFactory, responseProcessor?: SystemLogApiResponseProcessor);
  /**
      * Lists all System Log events  See [System Log query](https://developer.okta.com/docs/reference/system-log-query/) for further details and examples, and [System Log filters and search](https://help.okta.com/okta_help.htm?type=oie&id=csh-syslog-filters) for common use cases.  By default, 100 System Log events are returned. If there are more events, see the [header link](https://developer.okta.com/docs/api/#link-header) for the `next` link, or increase the number of returned objects using the `limit` parameter.  >**Note:** The value of the `clientSecret` property in the System Log is secured by a hashing function, and isn\'t the value used during authentication.
      * List all System Log events
      * @param param the request object
      */
  listLogEvents(param?: SystemLogApiListLogEventsRequest, options?: Configuration): Promise<Collection<LogEvent>>;
}
import { TemplateApiRequestFactory, TemplateApiResponseProcessor } from '../apis/TemplateApi';
export interface TemplateApiCreateSmsTemplateRequest {
    /**
      *
      * @type SmsTemplate
      * @memberof TemplateApicreateSmsTemplate
      */
    smsTemplate: SmsTemplate;
}
export interface TemplateApiDeleteSmsTemplateRequest {
    /**
      * &#x60;id&#x60; of the Template
      * @type string
      * @memberof TemplateApideleteSmsTemplate
      */
    templateId: string;
}
export interface TemplateApiGetSmsTemplateRequest {
    /**
      * &#x60;id&#x60; of the Template
      * @type string
      * @memberof TemplateApigetSmsTemplate
      */
    templateId: string;
}
export interface TemplateApiListSmsTemplatesRequest {
    /**
      *
      * @type SmsTemplateType
      * @memberof TemplateApilistSmsTemplates
      */
    templateType?: SmsTemplateType;
}
export interface TemplateApiReplaceSmsTemplateRequest {
    /**
      * &#x60;id&#x60; of the Template
      * @type string
      * @memberof TemplateApireplaceSmsTemplate
      */
    templateId: string;
    /**
      *
      * @type SmsTemplate
      * @memberof TemplateApireplaceSmsTemplate
      */
    smsTemplate: SmsTemplate;
}
export interface TemplateApiUpdateSmsTemplateRequest {
    /**
      * &#x60;id&#x60; of the Template
      * @type string
      * @memberof TemplateApiupdateSmsTemplate
      */
    templateId: string;
    /**
      *
      * @type SmsTemplate
      * @memberof TemplateApiupdateSmsTemplate
      */
    smsTemplate: SmsTemplate;
}
export declare class ObjectTemplateApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: TemplateApiRequestFactory, responseProcessor?: TemplateApiResponseProcessor);
  /**
      * Creates a new custom SMS template
      * Create an SMS template
      * @param param the request object
      */
  createSmsTemplate(param: TemplateApiCreateSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
  /**
      * Deletes an SMS template
      * Delete an SMS template
      * @param param the request object
      */
  deleteSmsTemplate(param: TemplateApiDeleteSmsTemplateRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a specific template by `id`
      * Retrieve an SMS template
      * @param param the request object
      */
  getSmsTemplate(param: TemplateApiGetSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
  /**
      * Lists all custom SMS templates. A subset of templates can be returned that match a template type.
      * List all SMS templates
      * @param param the request object
      */
  listSmsTemplates(param?: TemplateApiListSmsTemplatesRequest, options?: Configuration): Promise<Collection<SmsTemplate>>;
  /**
      * Replaces the SMS Template > **Notes:** You can\'t update the default SMS Template.
      * Replace an SMS template
      * @param param the request object
      */
  replaceSmsTemplate(param: TemplateApiReplaceSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
  /**
      * Updates only some of the SMS Template properties:   * All properties within the custom SMS Template that have values are updated.   * Any translation that doesn\'t exist is added.   * Any translation with a null or empty value is removed.   * Any translation with non-empty/null value is updated.
      * Update an SMS template
      * @param param the request object
      */
  updateSmsTemplate(param: TemplateApiUpdateSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
}
import { ThreatInsightApiRequestFactory, ThreatInsightApiResponseProcessor } from '../apis/ThreatInsightApi';
export interface ThreatInsightApiGetCurrentConfigurationRequest {
}
export interface ThreatInsightApiUpdateConfigurationRequest {
    /**
      *
      * @type ThreatInsightConfiguration
      * @memberof ThreatInsightApiupdateConfiguration
      */
    threatInsightConfiguration: ThreatInsightConfiguration;
}
export declare class ObjectThreatInsightApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ThreatInsightApiRequestFactory, responseProcessor?: ThreatInsightApiResponseProcessor);
  /**
      * Retrieves the ThreatInsight configuration for the org
      * Retrieve the ThreatInsight configuration
      * @param param the request object
      */
  getCurrentConfiguration(param?: ThreatInsightApiGetCurrentConfigurationRequest, options?: Configuration): Promise<ThreatInsightConfiguration>;
  /**
      * Updates the ThreatInsight configuration for the org
      * Update the ThreatInsight configuration
      * @param param the request object
      */
  updateConfiguration(param: ThreatInsightApiUpdateConfigurationRequest, options?: Configuration): Promise<ThreatInsightConfiguration>;
}
import { TrustedOriginApiRequestFactory, TrustedOriginApiResponseProcessor } from '../apis/TrustedOriginApi';
export interface TrustedOriginApiActivateTrustedOriginRequest {
    /**
      * &#x60;id&#x60; of the trusted origin
      * @type string
      * @memberof TrustedOriginApiactivateTrustedOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiCreateTrustedOriginRequest {
    /**
      *
      * @type TrustedOriginWrite
      * @memberof TrustedOriginApicreateTrustedOrigin
      */
    trustedOrigin: TrustedOriginWrite;
}
export interface TrustedOriginApiDeactivateTrustedOriginRequest {
    /**
      * &#x60;id&#x60; of the trusted origin
      * @type string
      * @memberof TrustedOriginApideactivateTrustedOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiDeleteTrustedOriginRequest {
    /**
      * &#x60;id&#x60; of the trusted origin
      * @type string
      * @memberof TrustedOriginApideleteTrustedOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiGetTrustedOriginRequest {
    /**
      * &#x60;id&#x60; of the trusted origin
      * @type string
      * @memberof TrustedOriginApigetTrustedOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiListTrustedOriginsRequest {
    /**
      * A search string that prefix matches against the &#x60;name&#x60; and &#x60;origin&#x60;
      * @type string
      * @memberof TrustedOriginApilistTrustedOrigins
      */
    q?: string;
    /**
      * [Filter](https://developer.okta.com/docs/api/#filter) trusted origins with a supported expression for a subset of properties. You can filter on the following properties: &#x60;name&#x60;, &#x60;origin&#x60;, &#x60;status&#x60;, and &#x60;type&#x60; (type of scopes).
      * @type string
      * @memberof TrustedOriginApilistTrustedOrigins
      */
    filter?: string;
    /**
      * After cursor provided by a prior request
      * @type string
      * @memberof TrustedOriginApilistTrustedOrigins
      */
    after?: string;
    /**
      * Specifies the number of results
      * @type number
      * @memberof TrustedOriginApilistTrustedOrigins
      */
    limit?: number;
}
export interface TrustedOriginApiReplaceTrustedOriginRequest {
    /**
      * &#x60;id&#x60; of the trusted origin
      * @type string
      * @memberof TrustedOriginApireplaceTrustedOrigin
      */
    trustedOriginId: string;
    /**
      *
      * @type TrustedOrigin
      * @memberof TrustedOriginApireplaceTrustedOrigin
      */
    trustedOrigin: TrustedOrigin;
}
export declare class ObjectTrustedOriginApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: TrustedOriginApiRequestFactory, responseProcessor?: TrustedOriginApiResponseProcessor);
  /**
      * Activates a trusted origin. Sets the `status` to `ACTIVE`.
      * Activate a trusted origin
      * @param param the request object
      */
  activateTrustedOrigin(param: TrustedOriginApiActivateTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Creates a trusted origin
      * Create a trusted origin
      * @param param the request object
      */
  createTrustedOrigin(param: TrustedOriginApiCreateTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Deactivates a trusted origin. Sets the `status` to `INACTIVE`.
      * Deactivate a trusted origin
      * @param param the request object
      */
  deactivateTrustedOrigin(param: TrustedOriginApiDeactivateTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Deletes a trusted origin
      * Delete a trusted origin
      * @param param the request object
      */
  deleteTrustedOrigin(param: TrustedOriginApiDeleteTrustedOriginRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a trusted origin
      * Retrieve a trusted origin
      * @param param the request object
      */
  getTrustedOrigin(param: TrustedOriginApiGetTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Lists all trusted origins
      * List all trusted origins
      * @param param the request object
      */
  listTrustedOrigins(param?: TrustedOriginApiListTrustedOriginsRequest, options?: Configuration): Promise<Collection<TrustedOrigin>>;
  /**
      * Replaces a trusted origin
      * Replace a trusted origin
      * @param param the request object
      */
  replaceTrustedOrigin(param: TrustedOriginApiReplaceTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
}
import { UISchemaApiRequestFactory, UISchemaApiResponseProcessor } from '../apis/UISchemaApi';
export interface UISchemaApiCreateUISchemaRequest {
    /**
      *
      * @type CreateUISchema
      * @memberof UISchemaApicreateUISchema
      */
    uischemabody: CreateUISchema;
}
export interface UISchemaApiDeleteUISchemasRequest {
    /**
      * The unique ID of the UI Schema
      * @type string
      * @memberof UISchemaApideleteUISchemas
      */
    id: string;
}
export interface UISchemaApiGetAppUISchemaRequest {
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof UISchemaApigetAppUISchema
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof UISchemaApigetAppUISchema
      */
    section: string;
    /**
      *
      * @type string
      * @memberof UISchemaApigetAppUISchema
      */
    operation: string;
}
export interface UISchemaApiGetAppUISchemaLinksRequest {
    /**
      * Name of the app definition (the OIN catalog app key name)
      * @type string
      * @memberof UISchemaApigetAppUISchemaLinks
      */
    appName: string;
}
export interface UISchemaApiGetUISchemaRequest {
    /**
      * The unique ID of the UI Schema
      * @type string
      * @memberof UISchemaApigetUISchema
      */
    id: string;
}
export interface UISchemaApiListUISchemasRequest {
}
export interface UISchemaApiReplaceUISchemasRequest {
    /**
      * The unique ID of the UI Schema
      * @type string
      * @memberof UISchemaApireplaceUISchemas
      */
    id: string;
    /**
      *
      * @type UpdateUISchema
      * @memberof UISchemaApireplaceUISchemas
      */
    updateUISchemaBody: UpdateUISchema;
}
export declare class ObjectUISchemaApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UISchemaApiRequestFactory, responseProcessor?: UISchemaApiResponseProcessor);
  /**
      * Creates an input for an enrollment form
      * Create a UI schema
      * @param param the request object
      */
  createUISchema(param: UISchemaApiCreateUISchemaRequest, options?: Configuration): Promise<UISchemasResponseObject>;
  /**
      * Deletes a UI Schema by `id`
      * Delete a UI schema
      * @param param the request object
      */
  deleteUISchemas(param: UISchemaApiDeleteUISchemasRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves the UI schema for an application given `appName`, `section` and `operation`
      * Retrieve the UI schema for a section
      * @param param the request object
      */
  getAppUISchema(param: UISchemaApiGetAppUISchemaRequest, options?: Configuration): Promise<ApplicationLayout>;
  /**
      * Retrieves the links for UI schemas for an application given `appName`
      * Retrieve the links for UI schemas for an application
      * @param param the request object
      */
  getAppUISchemaLinks(param: UISchemaApiGetAppUISchemaLinksRequest, options?: Configuration): Promise<ApplicationLayouts>;
  /**
      * Retrieves a UI Schema by `id`
      * Retrieve a UI schema
      * @param param the request object
      */
  getUISchema(param: UISchemaApiGetUISchemaRequest, options?: Configuration): Promise<UISchemasResponseObject>;
  /**
      * Lists all UI Schemas in your org
      * List all UI schemas
      * @param param the request object
      */
  listUISchemas(param?: UISchemaApiListUISchemasRequest, options?: Configuration): Promise<Collection<UISchemasResponseObject>>;
  /**
      * Replaces a UI Schema by `id`
      * Replace a UI schema
      * @param param the request object
      */
  replaceUISchemas(param: UISchemaApiReplaceUISchemasRequest, options?: Configuration): Promise<UISchemasResponseObject>;
}
import { UserApiRequestFactory, UserApiResponseProcessor } from '../apis/UserApi';
export interface UserApiActivateUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApiactivateUser
      */
    userId: string;
    /**
      * Sends an activation email to the user if &#x60;true&#x60;
      * @type boolean
      * @memberof UserApiactivateUser
      */
    sendEmail?: boolean;
}
export interface UserApiChangePasswordRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApichangePassword
      */
    userId: string;
    /**
      *
      * @type ChangePasswordRequest
      * @memberof UserApichangePassword
      */
    changePasswordRequest: ChangePasswordRequest;
    /**
      * If true, validates against the password minimum age policy
      * @type boolean
      * @memberof UserApichangePassword
      */
    strict?: boolean;
}
export interface UserApiChangeRecoveryQuestionRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApichangeRecoveryQuestion
      */
    userId: string;
    /**
      *
      * @type UserCredentials
      * @memberof UserApichangeRecoveryQuestion
      */
    userCredentials: UserCredentials;
}
export interface UserApiCreateUserRequest {
    /**
      *
      * @type CreateUserRequest
      * @memberof UserApicreateUser
      */
    body: CreateUserRequest;
    /**
      * Executes an [activation lifecycle](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserLifecycle/#tag/UserLifecycle/operation/activateUser) operation when creating the user
      * @type boolean
      * @memberof UserApicreateUser
      */
    activate?: boolean;
    /**
      * Indicates whether to create a user with a specified authentication provider
      * @type boolean
      * @memberof UserApicreateUser
      */
    provider?: boolean;
    /**
      * With &#x60;activate&#x3D;true&#x60;, if &#x60;nextLogin&#x3D;changePassword&#x60;, a user is created, activated, and the password is set to &#x60;EXPIRED&#x60;. The user must change it the next time they sign in.
      * @type UserNextLogin
      * @memberof UserApicreateUser
      */
    nextLogin?: UserNextLogin;
}
export interface UserApiDeactivateUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApideactivateUser
      */
    userId: string;
    /**
      * Sends a deactivation email to the admin if &#x60;true&#x60;
      * @type boolean
      * @memberof UserApideactivateUser
      */
    sendEmail?: boolean;
    /**
      * Request asynchronous processing
      * @type &#39;respond-async&#39;
      * @memberof UserApideactivateUser
      */
    prefer?: 'respond-async';
}
export interface UserApiDeleteLinkedObjectForUserRequest {
    /**
      * If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
      * @type string
      * @memberof UserApideleteLinkedObjectForUser
      */
    userId: string;
    /**
      * Name of the &#x60;primary&#x60; or &#x60;associated&#x60; relationship being queried
      * @type string
      * @memberof UserApideleteLinkedObjectForUser
      */
    relationshipName: string;
}
export interface UserApiDeleteUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApideleteUser
      */
    userId: string;
    /**
      * Sends a deactivation email to the admin if &#x60;true&#x60;
      * @type boolean
      * @memberof UserApideleteUser
      */
    sendEmail?: boolean;
    /**
      *
      * @type &#39;respond-async&#39;
      * @memberof UserApideleteUser
      */
    prefer?: 'respond-async';
}
export interface UserApiEndUserSessionsRequest {
    /**
      *
      * @type KeepCurrent
      * @memberof UserApiendUserSessions
      */
    keepCurrent?: KeepCurrent;
}
export interface UserApiExpirePasswordRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApiexpirePassword
      */
    userId: string;
}
export interface UserApiExpirePasswordAndGetTemporaryPasswordRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApiexpirePasswordAndGetTemporaryPassword
      */
    userId: string;
    /**
      * Revokes the user\&#39;s existing sessions if &#x60;true&#x60;
      * @type boolean
      * @memberof UserApiexpirePasswordAndGetTemporaryPassword
      */
    revokeSessions?: boolean;
}
export interface UserApiForgotPasswordRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApiforgotPassword
      */
    userId: string;
    /**
      * Sends a forgot password email to the user if &#x60;true&#x60;
      * @type boolean
      * @memberof UserApiforgotPassword
      */
    sendEmail?: boolean;
}
export interface UserApiForgotPasswordSetNewPasswordRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApiforgotPasswordSetNewPassword
      */
    userId: string;
    /**
      *
      * @type UserCredentials
      * @memberof UserApiforgotPasswordSetNewPassword
      */
    userCredentials: UserCredentials;
    /**
      *
      * @type boolean
      * @memberof UserApiforgotPasswordSetNewPassword
      */
    sendEmail?: boolean;
}
export interface UserApiGenerateResetPasswordTokenRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApigenerateResetPasswordToken
      */
    userId: string;
    /**
      *
      * @type boolean
      * @memberof UserApigenerateResetPasswordToken
      */
    sendEmail: boolean;
    /**
      * Revokes all user sessions, except for the current session, if set to &#x60;true&#x60;
      * @type boolean
      * @memberof UserApigenerateResetPasswordToken
      */
    revokeSessions?: boolean;
}
export interface UserApiGetIdentityProviderApplicationUserRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof UserApigetIdentityProviderApplicationUser
      */
    idpId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApigetIdentityProviderApplicationUser
      */
    userId: string;
}
export interface UserApiGetRefreshTokenForUserAndClientRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    userId: string;
    /**
      * Client app ID
      * @type string
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    clientId: string;
    /**
      * &#x60;id&#x60; of Token
      * @type string
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    tokenId: string;
    /**
      * Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @type string
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    expand?: string;
}
export interface UserApiGetUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApigetUser
      */
    userId: string;
    /**
      * Specifies the media type of the resource. Optional &#x60;okta-response&#x60; value can be included for performance optimization.  Complex DelAuth configurations may degrade performance when fetching specific parts of the response, and passing this parameter can omit these parts, bypassing the bottleneck.  Enum values for &#x60;okta-response&#x60;:   * &#x60;omitCredentials&#x60;: Omits the credentials subobject from the response.   * &#x60;omitCredentialsLinks&#x60;: Omits the following HAL links from the response: Update password, Change recovery question, Start forgot password flow, Reset password, Reset factors, Unlock.   * &#x60;omitTransitioningToStatus&#x60;: Omits the &#x60;transitioningToStatus&#x60; field from the response.
      * @type string
      * @memberof UserApigetUser
      */
    contentType?: string;
    /**
      * An optional parameter to include metadata in the &#x60;_embedded&#x60; attribute. Valid value: &#x60;blocks&#x60;.
      * @type string
      * @memberof UserApigetUser
      */
    expand?: string;
}
export interface UserApiGetUserClassificationRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApigetUserClassification
      */
    userId: string;
}
export interface UserApiGetUserGrantRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApigetUserGrant
      */
    userId: string;
    /**
      * Grant ID
      * @type string
      * @memberof UserApigetUserGrant
      */
    grantId: string;
    /**
      * Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @type string
      * @memberof UserApigetUserGrant
      */
    expand?: string;
}
export interface UserApiGetUserRiskRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApigetUserRisk
      */
    userId: string;
}
export interface UserApiLinkUserToIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof UserApilinkUserToIdentityProvider
      */
    idpId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApilinkUserToIdentityProvider
      */
    userId: string;
    /**
      *
      * @type UserIdentityProviderLinkRequest
      * @memberof UserApilinkUserToIdentityProvider
      */
    userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest;
}
export interface UserApiListAppLinksRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApilistAppLinks
      */
    userId: string;
}
export interface UserApiListGrantsForUserAndClientRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApilistGrantsForUserAndClient
      */
    userId: string;
    /**
      * Client app ID
      * @type string
      * @memberof UserApilistGrantsForUserAndClient
      */
    clientId: string;
    /**
      * Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @type string
      * @memberof UserApilistGrantsForUserAndClient
      */
    expand?: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof UserApilistGrantsForUserAndClient
      */
    after?: string;
    /**
      * Specifies the number of tokens to return
      * @type number
      * @memberof UserApilistGrantsForUserAndClient
      */
    limit?: number;
}
export interface UserApiListIdentityProviderApplicationUsersRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof UserApilistIdentityProviderApplicationUsers
      */
    idpId: string;
    /**
      * Searches the records for matching value
      * @type string
      * @memberof UserApilistIdentityProviderApplicationUsers
      */
    q?: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof UserApilistIdentityProviderApplicationUsers
      */
    after?: string;
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof UserApilistIdentityProviderApplicationUsers
      */
    limit?: number;
    /**
      * Expand user data
      * @type string
      * @memberof UserApilistIdentityProviderApplicationUsers
      */
    expand?: string;
}
export interface UserApiListLinkedObjectsForUserRequest {
    /**
      * If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
      * @type string
      * @memberof UserApilistLinkedObjectsForUser
      */
    userId: string;
    /**
      * Name of the &#x60;primary&#x60; or &#x60;associated&#x60; relationship being queried
      * @type string
      * @memberof UserApilistLinkedObjectsForUser
      */
    relationshipName: string;
}
export interface UserApiListRefreshTokensForUserAndClientRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    userId: string;
    /**
      * Client app ID
      * @type string
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    clientId: string;
    /**
      * Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @type string
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    expand?: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    after?: string;
    /**
      * Specifies the number of tokens to return
      * @type number
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    limit?: number;
}
export interface UserApiListSocialAuthTokensRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof UserApilistSocialAuthTokens
      */
    idpId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApilistSocialAuthTokens
      */
    userId: string;
}
export interface UserApiListUserBlocksRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApilistUserBlocks
      */
    userId: string;
}
export interface UserApiListUserClientsRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApilistUserClients
      */
    userId: string;
}
export interface UserApiListUserDevicesRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApilistUserDevices
      */
    userId: string;
}
export interface UserApiListUserGrantsRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApilistUserGrants
      */
    userId: string;
    /**
      * The scope ID to filter on
      * @type string
      * @memberof UserApilistUserGrants
      */
    scopeId?: string;
    /**
      * Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @type string
      * @memberof UserApilistUserGrants
      */
    expand?: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof UserApilistUserGrants
      */
    after?: string;
    /**
      * Specifies the number of grants to return
      * @type number
      * @memberof UserApilistUserGrants
      */
    limit?: number;
}
export interface UserApiListUserGroupsRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApilistUserGroups
      */
    userId: string;
}
export interface UserApiListUserIdentityProvidersRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApilistUserIdentityProviders
      */
    userId: string;
}
export interface UserApiListUsersRequest {
    /**
      * Specifies the media type of the resource. Optional &#x60;okta-response&#x60; value can be included for performance optimization.  Complex DelAuth configurations may degrade performance when fetching specific parts of the response, and passing this parameter can omit these parts, bypassing the bottleneck.  Enum values for &#x60;okta-response&#x60;:   * &#x60;omitCredentials&#x60;: Omits the credentials subobject from the response.   * &#x60;omitCredentialsLinks&#x60;: Omits the following HAL links from the response: Update password, Change recovery question, Start forgot password flow, Reset password, Reset factors, Unlock.   * &#x60;omitTransitioningToStatus&#x60;: Omits the &#x60;transitioningToStatus&#x60; field from the response.
      * @type string
      * @memberof UserApilistUsers
      */
    contentType?: string;
    /**
      * Searches for users with a supported filtering expression for most properties. Okta recommends using this parameter for optimal search performance.   &gt; **Note:** Using an overly complex or long search query can result in an error.  This operation supports [pagination](https://developer.okta.com/docs/api/#pagination). Use an ID lookup for records that you update to ensure your results contain the latest data. Returned users include those with the &#x60;DEPROVISIONED&#x60; status.  Property names in the search parameter are case sensitive, whereas operators (&#x60;eq&#x60;, &#x60;sw&#x60;, and so on) and string values are case insensitive. Unlike with user logins, diacritical marks are significant in search string values: a search for &#x60;isaac.brock&#x60; finds &#x60;Isaac.Brock&#x60;, but doesn\&#39;t find a property whose value is &#x60;isáàc.bröck&#x60;.   This operation requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;search&#x3D;profile.department eq \&quot;Engineering\&quot;&#x60; is encoded as &#x60;search&#x3D;profile.department%20eq%20%22Engineering%22&#x60;. If you use the special character &#x60;\&quot;&#x60; within a quoted string, it must also be escaped &#x60;\\&#x60; and encoded. For example, &#x60;search&#x3D;profile.lastName eq \&quot;bob\&quot;smith\&quot;&#x60; is encoded as &#x60;search&#x3D;profile.lastName%20eq%20%22bob%5C%22smith%22&#x60;. See [Special Characters](https://developer.okta.com/docs/api/#special-characters).  This operation searches many properties:   * Any user profile attribute, including custom-defined attributes   * The top-level properties: &#x60;id&#x60;, &#x60;status&#x60;, &#x60;created&#x60;, &#x60;activated&#x60;, &#x60;statusChanged&#x60;, and &#x60;lastUpdated&#x60;   * The [user type](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/#tag/UserType/operation/updateUserType) accessed as &#x60;type.id&#x60;  &gt; **Note:** &lt;x-lifecycle class&#x3D;\&quot;ea\&quot;&gt;&lt;/x-lifecycle&gt; The ability to search by user classification is available as an [Early Access](https://developer.okta.com/docs/api/openapi/okta-management/guides/release-lifecycle/#early-access-ea) feature. The &#x60;classification.type&#x60; property cannot be used in conjunction with other search terms. You can search using &#x60;classification.type eq \&quot;LITE\&quot;&#x60; or &#x60;classification.type eq \&quot;STANDARD\&quot;&#x60;.  You can also use &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters. The &#x60;ne&#x60; (not equal) operator isn\&#39;t supported, but you can obtain the same result by using &#x60;lt ... or ... gt&#x60;. For example, to see all users except those that have a status of &#x60;STAGED&#x60;, use &#x60;(status lt \&quot;STAGED\&quot; or status gt \&quot;STAGED\&quot;)&#x60;.  You can search properties that are arrays. If any element matches the search term, the entire array (object) is returned. Okta follows the [SCIM Protocol Specification](https://tools.ietf.org/html/rfc7644#section-3.4.2.2) for searching arrays. You can search multiple arrays, multiple values in an array, as well as using the standard logical and filtering operators. See [Filter](https://developer.okta.com/docs/reference/core-okta-api/#filter).  Searches for users can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. You can only use &#x60;co&#x60; with these select user profile attributes: &#x60;profile.firstName&#x60;, &#x60;profile.lastName&#x60;, &#x60;profile.email&#x60;, and &#x60;profile.login&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @type string
      * @memberof UserApilistUsers
      */
    search?: string;
    /**
      * Filters users with a supported expression for a subset of properties.   &gt; **Note:** Returned users include those with the &#x60;DEPROVISIONED&#x60; status.  This requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;filter&#x3D;lastUpdated gt \&quot;2013-06-01T00:00:00.000Z\&quot;&#x60; is encoded as &#x60;filter&#x3D;lastUpdated%20gt%20%222013-06-01T00:00:00.000Z%22&#x60;. Filtering is case-sensitive for property names and query values, while operators are case-insensitive.  Filtering supports the following limited number of properties: &#x60;status&#x60;, &#x60;lastUpdated&#x60;, &#x60;id&#x60;, &#x60;profile.login&#x60;, &#x60;profile.email&#x60;, &#x60;profile.firstName&#x60;, and &#x60;profile.lastName&#x60;.  Additionally, filtering supports only the equal &#x60;eq&#x60; operator from the standard Okta API filtering semantics, except in the case of the &#x60;lastUpdated&#x60; property. This property can also use the inequality operators (&#x60;gt&#x60;, &#x60;ge&#x60;, &#x60;lt&#x60;, and &#x60;le&#x60;). For logical operators, only the logical operators &#x60;and&#x60; and &#x60;or&#x60; are supported. The &#x60;not&#x60; operator isn\&#39;t supported. See [Filter](https://developer.okta.com/docs/api/#filter) and [Operators](https://developer.okta.com/docs/api/#operators).
      * @type string
      * @memberof UserApilistUsers
      */
    filter?: string;
    /**
      * Finds users who match the specified query. This doesn\&#39;t support pagination.  &gt; **Note:** For optimal performance, use the &#x60;search&#x60; parameter instead.  Use the &#x60;q&#x60; parameter for simple queries, such as a lookup of users by name when creating a people picker.  The value of &#x60;q&#x60; is matched against &#x60;firstName&#x60;, &#x60;lastName&#x60;, or &#x60;email&#x60;. This performs a &#x60;startsWith&#x60; match, but this is an implementation detail and can change without notice. You don\&#39;t need to specify &#x60;firstName&#x60;, &#x60;lastName&#x60;, or &#x60;email&#x60;.  &gt; **Note:** Using the &#x60;q&#x60; parameter in a request omits users that have a status of &#x60;DEPROVISIONED&#x60;. To return all users, use a filter or search query instead.
      * @type string
      * @memberof UserApilistUsers
      */
    q?: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @type string
      * @memberof UserApilistUsers
      */
    after?: string;
    /**
      * Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
      * @type number
      * @memberof UserApilistUsers
      */
    limit?: number;
    /**
      * Specifies field to sort by (for search queries only). This can be any single property, for example &#x60;sortBy&#x3D;profile.lastName&#x60;. Users with the same value for the &#x60;sortBy&#x60; property will be ordered by &#x60;id&#x60;.
      * @type string
      * @memberof UserApilistUsers
      */
    sortBy?: string;
    /**
      * Specifies the sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn\&#39;t case sensitive. &#x60;sortOrder&#x60; is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
      * @type string
      * @memberof UserApilistUsers
      */
    sortOrder?: string;
    /**
      * A parameter to include metadata in the &#x60;_embedded&#x60; property. Supported value: &#x60;classification&#x60;.
      * @type string
      * @memberof UserApilistUsers
      */
    expand?: string;
}
export interface UserApiReactivateUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApireactivateUser
      */
    userId: string;
    /**
      * Sends an activation email to the user if &#x60;true&#x60;
      * @type boolean
      * @memberof UserApireactivateUser
      */
    sendEmail?: boolean;
}
export interface UserApiReplaceUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApireplaceUser
      */
    userId: string;
    /**
      *
      * @type UpdateUserRequest
      * @memberof UserApireplaceUser
      */
    user: UpdateUserRequest;
    /**
      * If &#x60;true&#x60;, validates against minimum age and history password policy
      * @type boolean
      * @memberof UserApireplaceUser
      */
    strict?: boolean;
    /**
      * The ETag value of the user\&#39;s expected current state. This becomes a conditional request used for concurrency control. See [Conditional Requests and Entity Tags](/#conditional-requests-and-entity-tags).
      * @type string
      * @memberof UserApireplaceUser
      */
    ifMatch?: string;
}
export interface UserApiReplaceUserClassificationRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApireplaceUserClassification
      */
    userId: string;
    /**
      *
      * @type ReplaceUserClassification
      * @memberof UserApireplaceUserClassification
      */
    replaceUserClassification: ReplaceUserClassification;
}
export interface UserApiResetFactorsRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApiresetFactors
      */
    userId: string;
}
export interface UserApiRevokeGrantsForUserAndClientRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApirevokeGrantsForUserAndClient
      */
    userId: string;
    /**
      * Client app ID
      * @type string
      * @memberof UserApirevokeGrantsForUserAndClient
      */
    clientId: string;
}
export interface UserApiRevokeTokenForUserAndClientRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApirevokeTokenForUserAndClient
      */
    userId: string;
    /**
      * Client app ID
      * @type string
      * @memberof UserApirevokeTokenForUserAndClient
      */
    clientId: string;
    /**
      * &#x60;id&#x60; of Token
      * @type string
      * @memberof UserApirevokeTokenForUserAndClient
      */
    tokenId: string;
}
export interface UserApiRevokeTokensForUserAndClientRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApirevokeTokensForUserAndClient
      */
    userId: string;
    /**
      * Client app ID
      * @type string
      * @memberof UserApirevokeTokensForUserAndClient
      */
    clientId: string;
}
export interface UserApiRevokeUserGrantRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApirevokeUserGrant
      */
    userId: string;
    /**
      * Grant ID
      * @type string
      * @memberof UserApirevokeUserGrant
      */
    grantId: string;
}
export interface UserApiRevokeUserGrantsRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApirevokeUserGrants
      */
    userId: string;
}
export interface UserApiRevokeUserSessionsRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApirevokeUserSessions
      */
    userId: string;
    /**
      * Revoke issued OpenID Connect and OAuth refresh and access tokens
      * @type boolean
      * @memberof UserApirevokeUserSessions
      */
    oauthTokens?: boolean;
}
export interface UserApiSetLinkedObjectForUserRequest {
    /**
      * If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
      * @type string
      * @memberof UserApisetLinkedObjectForUser
      */
    associatedUserId: string;
    /**
      * Name of the &#x60;primary&#x60; relationship being assigned
      * @type string
      * @memberof UserApisetLinkedObjectForUser
      */
    primaryRelationshipName: string;
    /**
      * User ID to be assigned to the &#x60;primary&#x60; relationship for the &#x60;associated&#x60; user
      * @type string
      * @memberof UserApisetLinkedObjectForUser
      */
    primaryUserId: string;
}
export interface UserApiSuspendUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApisuspendUser
      */
    userId: string;
}
export interface UserApiUnlinkUserFromIdentityProviderRequest {
    /**
      * &#x60;id&#x60; of IdP
      * @type string
      * @memberof UserApiunlinkUserFromIdentityProvider
      */
    idpId: string;
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApiunlinkUserFromIdentityProvider
      */
    userId: string;
}
export interface UserApiUnlockUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApiunlockUser
      */
    userId: string;
}
export interface UserApiUnsuspendUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApiunsuspendUser
      */
    userId: string;
}
export interface UserApiUpdateUserRequest {
    /**
      * An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @type string
      * @memberof UserApiupdateUser
      */
    userId: string;
    /**
      *
      * @type UpdateUserRequest
      * @memberof UserApiupdateUser
      */
    user: UpdateUserRequest;
    /**
      * If true, validates against minimum age and history password policy
      * @type boolean
      * @memberof UserApiupdateUser
      */
    strict?: boolean;
    /**
      * The ETag value of the user\&#39;s expected current state. This becomes a conditional request used for concurrency control. See [Conditional Requests and Entity Tags](/#conditional-requests-and-entity-tags).
      * @type string
      * @memberof UserApiupdateUser
      */
    ifMatch?: string;
}
export interface UserApiUpsertUserRiskRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserApiupsertUserRisk
      */
    userId: string;
    /**
      *
      * @type UserRiskRequest
      * @memberof UserApiupsertUserRisk
      */
    userRiskRequest: UserRiskRequest;
}
export declare class ObjectUserApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor);
  /**
      * Activates a user.  Perform this operation only on users with a `STAGED` or `DEPROVISIONED` status. Activation of a user is an asynchronous operation. * The user has the `transitioningToStatus` property with an `ACTIVE` value during activation. This indicates that the user hasn\'t completed the asynchronous operation. * The user has an `ACTIVE` status when the activation process completes.  Users who don\'t have a password must complete the welcome flow by visiting the activation link to complete the transition to `ACTIVE` status.  > **Note:** If you want to send a branded user activation email, change the subdomain of your request to the custom domain that\'s associated with the brand. > For example, change `subdomain.okta.com` to `custom.domain.one`. See [Multibrand and custom domains](https://developer.okta.com/docs/concepts/brands/#multibrand-and-custom-domains).  > **Note:** If you have optional password enabled, visiting the activation link is optional for users who aren\'t required to enroll a password. > See [Create user with optional password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#create-user-with-optional-password).  > **Legal disclaimer** > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Activate a user
      * @param param the request object
      */
  activateUser(param: UserApiActivateUserRequest, options?: Configuration): Promise<UserActivationToken>;
  /**
      * Updates a user\'s password by validating the user\'s current password.  This operation provides an option to delete all the sessions of the specified user. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared.  You can only perform this operation on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).  The user transitions to `ACTIVE` status when successfully invoked in `RECOVERY` status.  > **Note:** The Okta account management policy doesn\'t support the `/users/{userId}/credentials/change_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
      * Update password
      * @param param the request object
      */
  changePassword(param: UserApiChangePasswordRequest, options?: Configuration): Promise<UserCredentials>;
  /**
      * Updates a user\'s recovery question and answer credential by validating the user\'s current password. You can only perform this operation on users in `STAGED`, `ACTIVE`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).
      * Update recovery question
      * @param param the request object
      */
  changeRecoveryQuestion(param: UserApiChangeRecoveryQuestionRequest, options?: Configuration): Promise<UserCredentials>;
  /**
      * Creates a new user in your Okta org with or without credentials.<br> > **Legal Disclaimer** > > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.  All responses return the created user. Activation of a user is an asynchronous operation. The system performs group reconciliation during activation and assigns the user to all apps via direct or indirect relationships (group memberships). * The user\'s `transitioningToStatus` property is `ACTIVE` during activation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s `status` is `ACTIVE` when the activation process is complete.  The user is emailed a one-time activation token if activated without a password.  > **Note:** If the user is assigned to an app that is configured for provisioning, the activation process triggers downstream provisioning to the app.  It is possible for a user to sign in before these apps have been successfully provisioned for the user.  > **Important:** Do not generate or send a one-time activation token when activating users with an assigned password. Users should sign in with their assigned password.  For more information about the various scenarios of creating a user listed in the examples, see the [User creation scenarios](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#user-creation-scenarios) section.
      * Create a user
      * @param param the request object
      */
  createUser(param: UserApiCreateUserRequest, options?: Configuration): Promise<User>;
  /**
      * Deactivates a user.  Perform this operation only on users that do not have a `DEPROVISIONED` status. * The user\'s `transitioningToStatus` property is `DEPROVISIONED` during deactivation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s status is `DEPROVISIONED` when the deactivation process is complete.  > **Important:** Deactivating a user is a **destructive** operation. The user is deprovisioned from all assigned apps, which might destroy their data such as email or files. **This action cannot be recovered!**  You can also perform user deactivation asynchronously. To invoke asynchronous user deactivation, pass an HTTP header `Prefer: respond-async` with the request.
      * Deactivate a user
      * @param param the request object
      */
  deactivateUser(param: UserApiDeactivateUserRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes any existing relationship between the `associated` and `primary` user. For the `associated` user, this is specified by the ID. The `primary` name specifies the relationship.  The operation is successful if the relationship is deleted. The operation is also successful if the specified user isn\'t in the `associated` relationship for any instance of the specified `primary` and thus, no relationship is found.
      * Delete a linked object value
      * @param param the request object
      */
  deleteLinkedObjectForUser(param: UserApiDeleteLinkedObjectForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  > **Warning:** This action can\'t be recovered!  This operation on a user that hasn\'t been deactivated causes that user to be deactivated. A second delete operation is required to delete the user.  > **Note:** You can also perform user deletion asynchronously. To invoke asynchronous user deletion, pass an HTTP header `Prefer: respond-async` with the request.  This header is also supported by user deactivation, which is performed if the delete endpoint is invoked on a user that hasn\'t been deactivated.
      * Delete a user
      * @param param the request object
      */
  deleteUser(param: UserApiDeleteUserRequest, options?: Configuration): Promise<void>;
  /**
      * Ends Okta sessions for the currently signed in user. By default, the current session remains active. Use this method in a browser-based app. > **Note:** This operation requires a session cookie for the user. The API token isn\'t allowed for this operation.
      * End a current user session
      * @param param the request object
      */
  endUserSessions(param?: UserApiEndUserSessionsRequest, options?: Configuration): Promise<void>;
  /**
      * Expires the password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.  > **Note:** The Okta account management policy doesn\'t support the `/users/{id}/lifecycle/expire_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
      * Expire the password
      * @param param the request object
      */
  expirePassword(param: UserApiExpirePasswordRequest, options?: Configuration): Promise<User>;
  /**
      * Expires the password and resets the user\'s password to a temporary password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. The user\'s password is reset to a temporary password that\'s returned, and then the user\'s password is expired. If `revokeSessions` is included in the request with a value of `true`, the user\'s current outstanding sessions are revoked and require re-authentication. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.
      * Expire the password with a temporary password
      * @param param the request object
      */
  expirePasswordAndGetTemporaryPassword(param: UserApiExpirePasswordAndGetTemporaryPasswordRequest, options?: Configuration): Promise<User>;
  /**
      * Starts the forgot password flow.  Generates a one-time token (OTT) that you can use to reset a user\'s password.  The user must validate their security question\'s answer when visiting the reset link. Perform this operation only on users with an `ACTIVE` status and a valid [recovery question credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/recovery_question&t=request).  > **Note:** If you have migrated to Identity Engine, you can allow users to recover passwords with any enrolled MFA authenticator. See [Self-service account recovery](https://help.okta.com/oie/en-us/content/topics/identity-engine/authenticators/configure-sspr.htm?cshid=ext-config-sspr).  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.  If `sendEmail` is `false`, returns a link for the user to reset their password. This operation doesn\'t affect the status of the user.
      * Start forgot password flow
      * @param param the request object
      */
  forgotPassword(param: UserApiForgotPasswordRequest, options?: Configuration): Promise<ForgotPasswordResponse>;
  /**
      * Resets the user\'s password to the specified password if the provided answer to the recovery question is correct. You must include the recovery question answer with the submission.
      * Reset password with recovery question
      * @param param the request object
      */
  forgotPasswordSetNewPassword(param: UserApiForgotPasswordSetNewPasswordRequest, options?: Configuration): Promise<UserCredentials>;
  /**
      * Resets a password. Generates a one-time token (OTT) that you can use to reset a user\'s password. You can automatically email the OTT link to the user or return the OTT to the API caller and distribute using a custom flow.  This operation transitions the user to the `RECOVERY` status. The user is then not able to sign in or initiate a forgot password flow until they complete the reset flow.  This operation provides an option to delete all the user\'s sessions. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared. > **Note:** You can also use this API to convert a user with the Okta credential provider to use a federated provider. After this conversion, the user can\'t directly sign in with a password. > To convert a federated user back to an Okta user, use the default API call.  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.   If `sendEmail` is `false`, returns a link for the user to reset their password.
      * Reset a password
      * @param param the request object
      */
  generateResetPasswordToken(param: UserApiGenerateResetPasswordTokenRequest, options?: Configuration): Promise<ResetPasswordToken>;
  /**
      * Retrieves a linked identity provider (IdP) user by ID
      * Retrieve a user for IdP
      * @param param the request object
      */
  getIdentityProviderApplicationUser(param: UserApiGetIdentityProviderApplicationUserRequest, options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Retrieves a refresh token issued for the specified user and client
      * Retrieve a refresh token for a client
      * @param param the request object
      */
  getRefreshTokenForUserAndClient(param: UserApiGetRefreshTokenForUserAndClientRequest, options?: Configuration): Promise<OAuth2RefreshToken>;
  /**
      * Retrieves a user from your Okta org.  You can substitute `me` for the `id` to fetch the current user linked to an API token or session cookie.  * The request returns the user linked to the API token that is specified in the Authorization header, not the user linked to the active session. Details of the admin user who granted the API token is returned.  * When the end user has an active Okta session, it is typically a CORS request from the browser. Therefore, it\'s possible to retrieve the current user without the Authorization header.  When fetching a user by `login` or `login shortname`, [URL encode](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) the request parameter to ensure that special characters are escaped properly. Logins with a `/` character can only be fetched by `id` due to URL issues with escaping the `/` character. If you don\'t know a user\'s ID, you can use the [List all users](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers) endpoint to find it.  > **Note:** Some browsers block third-party cookies by default, which disrupts Okta functionality in certain flows. See [Mitigate the impact of third-party cookie deprecation](https://help.okta.com/okta_help.htm?type=oie&id=ext-third-party-cookies).
      * Retrieve a user
      * @param param the request object
      */
  getUser(param: UserApiGetUserRequest, options?: Configuration): Promise<UserGetSingleton>;
  /**
      * Retrieves a user\'s classification
      * Retrieve a user\'s classification
      * @param param the request object
      */
  getUserClassification(param: UserApiGetUserClassificationRequest, options?: Configuration): Promise<UserClassification>;
  /**
      * Retrieves a grant for the specified user
      * Retrieve a user grant
      * @param param the request object
      */
  getUserGrant(param: UserApiGetUserGrantRequest, options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Retrieves the user risk object for a user ID
      * Retrieve the user\'s risk
      * @param param the request object
      */
  getUserRisk(param: UserApiGetUserRiskRequest, options?: Configuration): Promise<UserRiskGetResponse>;
  /**
      * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
      * Link a user to IdP
      * @param param the request object
      */
  linkUserToIdentityProvider(param: UserApiLinkUserToIdentityProviderRequest, options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Lists all app links for all direct or indirect (through group membership) assigned apps.  > **Note:** To list all apps in an org, use the [List all applications endpoint in the Applications API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/listApplications).
      * List all assigned app links
      * @param param the request object
      */
  listAppLinks(param: UserApiListAppLinksRequest, options?: Configuration): Promise<Collection<AssignedAppLink>>;
  /**
      * Lists all grants for a specified user and client
      * List all grants for a client
      * @param param the request object
      */
  listGrantsForUserAndClient(param: UserApiListGrantsForUserAndClientRequest, options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Lists all the users linked to an identity provider (IdP)
      * List all users for IdP
      * @param param the request object
      */
  listIdentityProviderApplicationUsers(param: UserApiListIdentityProviderApplicationUsersRequest, options?: Configuration): Promise<Collection<IdentityProviderApplicationUser>>;
  /**
      * Lists either the `self` link for the primary user or all associated users in the relationship specified by `relationshipName`. If the specified user isn\'t associated in any relationship, an empty array is returned.  Use `me` instead of `id` to specify the current session user.
      * List the primary or all of the associated linked object values
      * @param param the request object
      */
  listLinkedObjectsForUser(param: UserApiListLinkedObjectsForUserRequest, options?: Configuration): Promise<Collection<ResponseLinks>>;
  /**
      * Lists all refresh tokens issued for the specified user and client
      * List all refresh tokens for a client
      * @param param the request object
      */
  listRefreshTokensForUserAndClient(param: UserApiListRefreshTokensForUserAndClientRequest, options?: Configuration): Promise<Collection<OAuth2RefreshToken>>;
  /**
      * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
      * List all tokens from OIDC IdP
      * @param param the request object
      */
  listSocialAuthTokens(param: UserApiListSocialAuthTokensRequest, options?: Configuration): Promise<Collection<SocialAuthToken>>;
  /**
      * Lists information about how the user is blocked from accessing their account
      * List all user blocks
      * @param param the request object
      */
  listUserBlocks(param: UserApiListUserBlocksRequest, options?: Configuration): Promise<Collection<UserBlock>>;
  /**
      * Lists all client resources for which the specified user has grants or tokens.  > **Note:** To list all client resources for which a specified authorization server has tokens, use the [List all client resources for an authorization server in the Authorization Servers API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AuthorizationServerClients/#tag/AuthorizationServerClients/operation/listOAuth2ClientsForAuthorizationServer).
      * List all clients
      * @param param the request object
      */
  listUserClients(param: UserApiListUserClientsRequest, options?: Configuration): Promise<Collection<OAuth2Client>>;
  /**
      * Lists all devices enrolled by a user.  > **Note:** To list all devices registered to an org, use the [List all devices endpoint in the Devices API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Device/#tag/Device/operation/listDevices).
      * List all devices
      * @param param the request object
      */
  listUserDevices(param: UserApiListUserDevicesRequest, options?: Configuration): Promise<Collection<UserDevice>>;
  /**
      * Lists all grants for the specified user
      * List all user grants
      * @param param the request object
      */
  listUserGrants(param: UserApiListUserGrantsRequest, options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Lists all groups of which the user is a member. > **Note:** To list all groups in your org, use the [List all groups endpoints in the Groups API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups).
      * List all groups
      * @param param the request object
      */
  listUserGroups(param: UserApiListUserGroupsRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Lists the identity providers (IdPs) associated with the user
      * List all IdPs for user
      * @param param the request object
      */
  listUserIdentityProviders(param: UserApiListUserIdentityProvidersRequest, options?: Configuration): Promise<Collection<IdentityProvider>>;
  /**
      * Lists users in your org, with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria. Different results are returned depending on specified queries in the request.  > **Note:** This operation omits users that have a status of `DEPROVISIONED` in the response. To return all users, use a filter or search query instead.
      * List all users
      * @param param the request object
      */
  listUsers(param?: UserApiListUsersRequest, options?: Configuration): Promise<Collection<User>>;
  /**
      * Reactivates a user.  Perform this operation only on users with a `PROVISIONED` or `RECOVERY` [status](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!c=200&path=status&t=response). This operation restarts the activation workflow if for some reason the user activation wasn\'t completed when using the `activationToken` from [Activate User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserLifecycle/#tag/UserLifecycle/operation/activateUser).  Users that don\'t have a password must complete the flow by completing the [Reset password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword) flow and MFA enrollment steps to transition the user to `ACTIVE` status.  If `sendEmail` is `false`, returns an activation link for the user to set up their account. The activation token can be used to create a custom activation link.
      * Reactivate a user
      * @param param the request object
      */
  reactivateUser(param: UserApiReactivateUserRequest, options?: Configuration): Promise<UserActivationToken>;
  /**
      * Replaces a user\'s profile, credentials, or both using strict-update semantics.  All profile properties must be specified when updating a user\'s profile with a `PUT` method. Any property not specified in the request is deleted. > **Important:** Don\'t use a `PUT` method for partial updates.
      * Replace a user
      * @param param the request object
      */
  replaceUser(param: UserApiReplaceUserRequest, options?: Configuration): Promise<User>;
  /**
      * Replaces the user\'s classification
      * Replace the user\'s classification
      * @param param the request object
      */
  replaceUserClassification(param: UserApiReplaceUserClassificationRequest, options?: Configuration): Promise<UserClassification>;
  /**
      * Resets all factors for the specified user. All MFA factor enrollments return to the unenrolled state. The user\'s status remains `ACTIVE`. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset the factors
      * @param param the request object
      */
  resetFactors(param: UserApiResetFactorsRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all grants for the specified user and client
      * Revoke all grants for a client
      * @param param the request object
      */
  revokeGrantsForUserAndClient(param: UserApiRevokeGrantsForUserAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes the specified refresh token
      * Revoke a token for a client
      * @param param the request object
      */
  revokeTokenForUserAndClient(param: UserApiRevokeTokenForUserAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all refresh tokens issued for the specified user and client
      * Revoke all refresh tokens for a client
      * @param param the request object
      */
  revokeTokensForUserAndClient(param: UserApiRevokeTokensForUserAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes one grant for a specified user
      * Revoke a user grant
      * @param param the request object
      */
  revokeUserGrant(param: UserApiRevokeUserGrantRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all grants for a specified user
      * Revoke all user grants
      * @param param the request object
      */
  revokeUserGrants(param: UserApiRevokeUserGrantsRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user. > **Note:** This operation doesn\'t clear the sessions created for web or native apps.
      * Revoke all user sessions
      * @param param the request object
      */
  revokeUserSessions(param: UserApiRevokeUserSessionsRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns the first user as the `associated` and the second user as the `primary` for the specified relationship.  If the first user is already associated with a different `primary` for this relationship, the previous link is removed. A linked object relationship can specify only one primary user for an associated user.
      * Assign a linked object value for primary
      * @param param the request object
      */
  setLinkedObjectForUser(param: UserApiSetLinkedObjectForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Suspends a user. Perform this operation only on users with an `ACTIVE` status. The user has a `SUSPENDED` status when the process completes.  Suspended users can\'t sign in to Okta. They can only be unsuspended or deactivated. Their group and app assignments are retained.
      * Suspend a user
      * @param param the request object
      */
  suspendUser(param: UserApiSuspendUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
      * Unlink a user from IdP
      * @param param the request object
      */
  unlinkUserFromIdentityProvider(param: UserApiUnlinkUserFromIdentityProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that\'s blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password. > **Note:** This operation works with Okta-sourced users. It doesn\'t support directory-sourced accounts such as Active Directory.
      * Unlock a user
      * @param param the request object
      */
  unlockUser(param: UserApiUnlockUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state. This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a user
      * @param param the request object
      */
  unsuspendUser(param: UserApiUnsuspendUserRequest, options?: Configuration): Promise<void>;
  /**
      * Updates a user\'s profile or credentials with partial update semantics.  > **Important:** Use the `POST` method for partial updates. Unspecified properties are set to null with `PUT`.  `profile` and `credentials` can be updated independently or together with a single request. > **Note**: Currently, the user type of a user can only be changed via a full replacement PUT operation. If the request parameters of a partial update include the type element from the user object, the value must match the existing type of the user. Only admins are permitted to change the user type of a user; end users are not allowed to change their own user type.  > **Note**: To update a current user\'s profile with partial semantics, the `/api/v1/users/me` endpoint can be invoked. > > A user can only update profile properties for which the user has write access. Within the profile, if the user tries to update the primary or the secondary email IDs, verification emails are sent to those email IDs, and the fields are updated only upon verification.  If you are using this endpoint to set a password, it sets a password without validating existing user credentials. This is an administrative operation. For operations that validate credentials, refer to the [Reset password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword), [Start forgot password flow](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/forgotPassword), and [Update password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/changePassword) endpoints.
      * Update a user
      * @param param the request object
      */
  updateUser(param: UserApiUpdateUserRequest, options?: Configuration): Promise<User>;
  /**
      * Upserts (creates or updates) the user risk object for a user ID
      * Upsert the user\'s risk
      * @param param the request object
      */
  upsertUserRisk(param: UserApiUpsertUserRiskRequest, options?: Configuration): Promise<UserRiskPutResponse>;
}
import { UserFactorApiRequestFactory, UserFactorApiResponseProcessor } from '../apis/UserFactorApi';
export interface UserFactorApiActivateFactorRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApiactivateFactor
      */
    userId: string;
    /**
      * ID of an existing user factor
      * @type string
      * @memberof UserFactorApiactivateFactor
      */
    factorId: string;
    /**
      *
      * @type UserFactorActivateRequest
      * @memberof UserFactorApiactivateFactor
      */
    body?: UserFactorActivateRequest;
}
export interface UserFactorApiEnrollFactorRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApienrollFactor
      */
    userId: string;
    /**
      * Factor
      * @type UserFactor
      * @memberof UserFactorApienrollFactor
      */
    body: UserFactor;
    /**
      * If &#x60;true&#x60;, indicates that you are replacing the currently registered phone number for the specified user. This parameter is ignored if the existing phone number is used by an activated factor.
      * @type boolean
      * @memberof UserFactorApienrollFactor
      */
    updatePhone?: boolean;
    /**
      * ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors. If the provided ID doesn\&#39;t exist, the default template is used instead.
      * @type string
      * @memberof UserFactorApienrollFactor
      */
    templateId?: string;
    /**
      * Defines how long the token remains valid
      * @type number
      * @memberof UserFactorApienrollFactor
      */
    tokenLifetimeSeconds?: number;
    /**
      * If &#x60;true&#x60;, the factor is immediately activated as part of the enrollment. An activation process isn\&#39;t required. Currently auto-activation is supported by &#x60;sms&#x60;, &#x60;call&#x60;, &#x60;email&#x60; and &#x60;token:hotp&#x60; (Custom TOTP) factors.
      * @type boolean
      * @memberof UserFactorApienrollFactor
      */
    activate?: boolean;
    /**
      * An ISO 639-1 two-letter language code that defines a localized message to send. This parameter is only used by &#x60;sms&#x60; factors. If a localized message doesn\&#39;t exist or the &#x60;templateId&#x60; is incorrect, the default template is used instead.
      * @type string
      * @memberof UserFactorApienrollFactor
      */
    acceptLanguage?: string;
}
export interface UserFactorApiGetFactorRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApigetFactor
      */
    userId: string;
    /**
      * ID of an existing user factor
      * @type string
      * @memberof UserFactorApigetFactor
      */
    factorId: string;
}
export interface UserFactorApiGetFactorTransactionStatusRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApigetFactorTransactionStatus
      */
    userId: string;
    /**
      * ID of an existing user factor
      * @type string
      * @memberof UserFactorApigetFactorTransactionStatus
      */
    factorId: string;
    /**
      * ID of an existing factor verification transaction
      * @type string
      * @memberof UserFactorApigetFactorTransactionStatus
      */
    transactionId: string;
}
export interface UserFactorApiGetYubikeyOtpTokenByIdRequest {
    /**
      * ID of a YubiKey token
      * @type string
      * @memberof UserFactorApigetYubikeyOtpTokenById
      */
    tokenId: string;
}
export interface UserFactorApiListFactorsRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApilistFactors
      */
    userId: string;
}
export interface UserFactorApiListSupportedFactorsRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApilistSupportedFactors
      */
    userId: string;
}
export interface UserFactorApiListSupportedSecurityQuestionsRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApilistSupportedSecurityQuestions
      */
    userId: string;
}
export interface UserFactorApiListYubikeyOtpTokensRequest {
    /**
      * Specifies the pagination cursor for the next page of tokens
      * @type string
      * @memberof UserFactorApilistYubikeyOtpTokens
      */
    after?: string;
    /**
      * Embeds the [user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) resource if the YubiKey token is assigned to a user and &#x60;expand&#x60; is set to &#x60;user&#x60;
      * @type string
      * @memberof UserFactorApilistYubikeyOtpTokens
      */
    expand?: string;
    /**
      * The expression used to filter tokens
      * @type &#39;profile.email&#39; | &#39;profile.serial&#39; | &#39;activated&#39; | &#39;user.id&#39; | &#39;created&#39; | &#39;status&#39; | &#39;lastVerified&#39;
      * @memberof UserFactorApilistYubikeyOtpTokens
      */
    filter?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified';
    /**
      * Returns tokens in a CSV to download instead of in the response. When you use this query parameter, the &#x60;limit&#x60; default changes to 1000.
      * @type boolean
      * @memberof UserFactorApilistYubikeyOtpTokens
      */
    forDownload?: boolean;
    /**
      * Specifies the number of results per page
      * @type number
      * @memberof UserFactorApilistYubikeyOtpTokens
      */
    limit?: number;
    /**
      * The value of how the tokens are sorted
      * @type &#39;profile.email&#39; | &#39;profile.serial&#39; | &#39;activated&#39; | &#39;user.id&#39; | &#39;created&#39; | &#39;status&#39; | &#39;lastVerified&#39;
      * @memberof UserFactorApilistYubikeyOtpTokens
      */
    sortBy?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified';
    /**
      * Specifies the sort order, either &#x60;ASC&#x60; or &#x60;DESC&#x60;
      * @type &#39;ASC&#39; | &#39;DESC&#39;
      * @memberof UserFactorApilistYubikeyOtpTokens
      */
    sortOrder?: 'ASC' | 'DESC';
}
export interface UserFactorApiResendEnrollFactorRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApiresendEnrollFactor
      */
    userId: string;
    /**
      * ID of an existing user factor
      * @type string
      * @memberof UserFactorApiresendEnrollFactor
      */
    factorId: string;
    /**
      *
      * @type ResendUserFactor
      * @memberof UserFactorApiresendEnrollFactor
      */
    resendUserFactor: ResendUserFactor;
    /**
      * ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors.
      * @type string
      * @memberof UserFactorApiresendEnrollFactor
      */
    templateId?: string;
}
export interface UserFactorApiUnenrollFactorRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApiunenrollFactor
      */
    userId: string;
    /**
      * ID of an existing user factor
      * @type string
      * @memberof UserFactorApiunenrollFactor
      */
    factorId: string;
    /**
      * If &#x60;true&#x60;, removes the phone number as both a recovery method and a factor. This parameter is only used for the &#x60;sms&#x60; and &#x60;call&#x60; factors.
      * @type boolean
      * @memberof UserFactorApiunenrollFactor
      */
    removeRecoveryEnrollment?: boolean;
}
export interface UserFactorApiUploadYubikeyOtpTokenSeedRequest {
    /**
      *
      * @type UploadYubikeyOtpTokenSeedRequest
      * @memberof UserFactorApiuploadYubikeyOtpTokenSeed
      */
    uploadYubikeyOtpTokenSeedRequest: UploadYubikeyOtpTokenSeedRequest;
    /**
      * Specifies the pagination cursor for the next page of tokens
      * @type string
      * @memberof UserFactorApiuploadYubikeyOtpTokenSeed
      */
    after?: string;
    /**
      * Embeds the [user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) resource if the YubiKey token is assigned to a user and &#x60;expand&#x60; is set to &#x60;user&#x60;
      * @type string
      * @memberof UserFactorApiuploadYubikeyOtpTokenSeed
      */
    expand?: string;
    /**
      * The expression used to filter tokens
      * @type &#39;profile.email&#39; | &#39;profile.serial&#39; | &#39;activated&#39; | &#39;user.id&#39; | &#39;created&#39; | &#39;status&#39; | &#39;lastVerified&#39;
      * @memberof UserFactorApiuploadYubikeyOtpTokenSeed
      */
    filter?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified';
    /**
      * Returns tokens in a CSV to download instead of in the response. When you use this query parameter, the &#x60;limit&#x60; default changes to 1000.
      * @type boolean
      * @memberof UserFactorApiuploadYubikeyOtpTokenSeed
      */
    forDownload?: boolean;
    /**
      * Specifies the number of results per page
      * @type number
      * @memberof UserFactorApiuploadYubikeyOtpTokenSeed
      */
    limit?: number;
    /**
      * The value of how the tokens are sorted
      * @type &#39;profile.email&#39; | &#39;profile.serial&#39; | &#39;activated&#39; | &#39;user.id&#39; | &#39;created&#39; | &#39;status&#39; | &#39;lastVerified&#39;
      * @memberof UserFactorApiuploadYubikeyOtpTokenSeed
      */
    sortBy?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified';
    /**
      * Specifies the sort order, either &#x60;ASC&#x60; or &#x60;DESC&#x60;
      * @type &#39;ASC&#39; | &#39;DESC&#39;
      * @memberof UserFactorApiuploadYubikeyOtpTokenSeed
      */
    sortOrder?: 'ASC' | 'DESC';
}
export interface UserFactorApiVerifyFactorRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    userId: string;
    /**
      * ID of an existing user factor
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    factorId: string;
    /**
      * ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors.
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    templateId?: string;
    /**
      * Defines how long the token remains valid
      * @type number
      * @memberof UserFactorApiverifyFactor
      */
    tokenLifetimeSeconds?: number;
    /**
      * Public IP address for the user agent
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    xForwardedFor?: string;
    /**
      * Type of user agent detected when the request is made. Required to verify &#x60;push&#x60; factors.
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    userAgent?: string;
    /**
      * An ISO 639-1 two-letter language code that defines a localized message to send. This parameter is only used by &#x60;sms&#x60; factors. If a localized message doesn\&#39;t exist or the &#x60;templateId&#x60; is incorrect, the default template is used instead.
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    acceptLanguage?: string;
    /**
      * Verifies an OTP for a factor. Some factors (&#x60;call&#x60;, &#x60;email&#x60;, &#x60;push&#x60;, &#x60;sms&#x60;, &#x60;u2f&#x60;, and &#x60;webauthn&#x60;) must first issue a challenge before you can verify the factor. Do this by making a request without a body. After a challenge is issued, make another request to verify the factor.  &gt; **Note:** &gt; Unlike standard push challenges that don\&#39;t require a request body, a number matching [&#x60;push&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!path&#x3D;2/useNumberMatchingChallenge&amp;t&#x3D;request) challenge requires a request body. &#x60;useNumberMatchingChallenge&#x60; must be set to &#x60;true&#x60;. &gt; When a number matching challenge is issued for an Okta Verify &#x60;push&#x60; factor enrollment, a &#x60;correctAnswer&#x60; challenge object is returned in the [&#x60;_embedded&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!c&#x3D;200&amp;path&#x3D;_embedded&amp;t&#x3D;response) object.
      * @type UserFactorVerifyRequest
      * @memberof UserFactorApiverifyFactor
      */
    body?: UserFactorVerifyRequest;
}
export declare class ObjectUserFactorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UserFactorApiRequestFactory, responseProcessor?: UserFactorApiResponseProcessor);
  /**
      * Activates a factor. Some factors (`call`, `email`, `push`, `sms`, `token:software:totp`, `u2f`, and `webauthn`) require activation to complete the enrollment process.  Okta enforces a rate limit of five activation attempts within five minutes. After a user exceeds the rate limit, Okta returns an error message.  > **Notes:**  > * If the user exceeds their SMS, call, or email factor activation rate limit, then an [OTP resend request](./#tag/UserFactor/operation/resendEnrollFactor) isn\'t allowed for the same factor. > * You can\'t use the Factors API to activate Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).
      * Activate a factor
      * @param param the request object
      */
  activateFactor(param: UserFactorApiActivateFactorRequest, options?: Configuration): Promise<UserFactorActivateResponse>;
  /**
      * Enrolls a supported factor for the specified user  > **Notes:**  >   * All responses return the enrolled factor with a status of either `PENDING_ACTIVATION` or `ACTIVE`. >   * You can\'t use the Factors API to enroll Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).  #### Additional SMS/Call factor information  * **Rate limits**: Okta may return a `429 Too Many Requests` status code if you attempt to resend an SMS or a voice call challenge (OTP) within the same time window. The current [rate limit](https://developer.okta.com/docs/reference/rate-limits/) is one SMS/CALL challenge per phone number every 30 seconds.  * **Existing phone numbers**: Okta may return a `400 Bad Request` status code if a user attempts to enroll with a different phone number when the user has an existing mobile phone or has an existing phone with voice call capability. A user can enroll only one mobile phone for `sms` and enroll only one voice call capable phone for `call` factor.  #### Additional WebAuthn factor information  * For detailed information on the WebAuthn standard, including an up-to-date list of supported browsers, see [webauthn.me](https://a0.to/webauthnme-okta-docs).  * When you enroll a WebAuthn factor, the `activation` object in `_embedded` contains properties used to help the client to create a new WebAuthn credential for use with Okta. See the [WebAuthn spec for PublicKeyCredentialCreationOptions](https://www.w3.org/TR/webauthn/#dictionary-makecredentialoptions).  #### Additional Custom TOTP factor information  * The enrollment process involves passing both the `factorProfileId` and `sharedSecret` properties for a token.  * A factor profile represents a particular configuration of the Custom TOTP factor. It includes certain properties that match the hardware token that end users possess, such as the HMAC algorithm, passcode length, and time interval. There can be multiple Custom TOTP factor profiles per org, but users can only enroll in one Custom TOTP factor. Admins can [create Custom TOTP factor profiles](https://help.okta.com/okta_help.htm?id=ext-mfa-totp) in the Admin Console. Then, copy the `factorProfileId` from the Admin Console into the API request.  * <x-lifecycle class=\"oie\"></x-lifecycle> For Custom TOTP enrollment, Okta automaticaly enrolls a user with a `token:software:totp` factor and the `push` factor if the user isn\'t currently enrolled with these factors.
      * Enroll a factor
      * @param param the request object
      */
  enrollFactor(param: UserFactorApiEnrollFactorRequest, options?: Configuration): Promise<UserFactor>;
  /**
      * Retrieves an existing factor for the specified user
      * Retrieve a factor
      * @param param the request object
      */
  getFactor(param: UserFactorApiGetFactorRequest, options?: Configuration): Promise<UserFactor>;
  /**
      * Retrieves the status of a `push` factor verification transaction   > **Note:**  > The response body for a number matching push challenge to an Okta Verify `push` factor enrollment is different from the response body of a standard push challenge.   > The number matching push challenge [response body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus!c=200&path=1/_embedded&t=response) contains the correct answer for the challenge.  > Use [Verify a factor](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor) to configure which challenge is sent.
      * Retrieve a factor transaction status
      * @param param the request object
      */
  getFactorTransactionStatus(param: UserFactorApiGetFactorTransactionStatusRequest, options?: Configuration): Promise<UserFactorPushTransaction>;
  /**
      * Retrieves the specified YubiKey OTP token by `id`
      * Retrieve a YubiKey OTP token
      * @param param the request object
      */
  getYubikeyOtpTokenById(param: UserFactorApiGetYubikeyOtpTokenByIdRequest, options?: Configuration): Promise<UserFactorYubikeyOtpToken>;
  /**
      * Lists all enrolled factors for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only enrolled factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all enrolled factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
      * List all enrolled factors
      * @param param the request object
      */
  listFactors(param: UserFactorApiListFactorsRequest, options?: Configuration): Promise<Collection<UserFactor>>;
  /**
      * Lists all the supported factors that can be enrolled for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all supported factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
      * List all supported factors
      * @param param the request object
      */
  listSupportedFactors(param: UserFactorApiListSupportedFactorsRequest, options?: Configuration): Promise<Collection<UserFactorSupported>>;
  /**
      * Lists all available security questions for the specified user
      * List all supported security questions
      * @param param the request object
      */
  listSupportedSecurityQuestions(param: UserFactorApiListSupportedSecurityQuestionsRequest, options?: Configuration): Promise<Collection<UserFactorSecurityQuestionProfile>>;
  /**
      * Lists all YubiKey OTP tokens
      * List all YubiKey OTP tokens
      * @param param the request object
      */
  listYubikeyOtpTokens(param?: UserFactorApiListYubikeyOtpTokensRequest, options?: Configuration): Promise<Collection<UserFactorYubikeyOtpToken>>;
  /**
      * Resends an `sms`, `call`, or `email` factor challenge as part of an enrollment flow.  For `call` and `sms` factors, Okta enforces a rate limit of one OTP challenge per device every 30 seconds. You can configure your `sms` and `call` factors to use a third-party telephony provider. See the [Telephony inline hook reference](https://developer.okta.com/docs/reference/telephony-hook/). Okta alternates between SMS providers with every resend request to ensure delivery of SMS and Call OTPs across different carriers.  > **Note:** Resend operations aren\'t allowed after a factor exceeds the activation rate limit. See [Activate a factor](./#tag/UserFactor/operation/activateFactor).
      * Resend a factor enrollment
      * @param param the request object
      */
  resendEnrollFactor(param: UserFactorApiResendEnrollFactorRequest, options?: Configuration): Promise<ResendUserFactor>;
  /**
      * Unenrolls an existing factor for the specified user. You can\'t unenroll a factor from a deactivated user. Unenrolling a factor allows the user to enroll a new factor.  > **Note:** If you unenroll the `push` or the `signed_nonce` factors, Okta also unenrolls any other `totp`, `signed_nonce`, or Okta Verify `push` factors associated with the user.
      * Unenroll a factor
      * @param param the request object
      */
  unenrollFactor(param: UserFactorApiUnenrollFactorRequest, options?: Configuration): Promise<void>;
  /**
      * Uploads a seed for a user to enroll a YubiKey OTP
      * Upload a YubiKey OTP seed
      * @param param the request object
      */
  uploadYubikeyOtpTokenSeed(param: UserFactorApiUploadYubikeyOtpTokenSeedRequest, options?: Configuration): Promise<UserFactorYubikeyOtpToken>;
  /**
      * Verifies an OTP for a factor. Some factors (`call`, `email`, `push`, `sms`, `u2f`, and `webauthn`) must first issue a challenge before you can verify the factor. Do this by making a request without a body. After a challenge is issued, make another request to verify the factor.  > **Notes:** > - You can send standard push challenges or number matching push challenges to Okta Verify `push` factor enrollments. Use a [request body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!path=2/useNumberMatchingChallenge&t=request) for number matching push challenges.  > - To verify a `push` factor, use the **poll** link returned when you issue the challenge. See [Retrieve a factor transaction status](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus).
      * Verify a factor
      * @param param the request object
      */
  verifyFactor(param: UserFactorApiVerifyFactorRequest, options?: Configuration): Promise<UserFactorVerifyResponse>;
}
import { UserTypeApiRequestFactory, UserTypeApiResponseProcessor } from '../apis/UserTypeApi';
export interface UserTypeApiCreateUserTypeRequest {
    /**
      *
      * @type UserType
      * @memberof UserTypeApicreateUserType
      */
    userType: UserType;
}
export interface UserTypeApiDeleteUserTypeRequest {
    /**
      *
      * @type string
      * @memberof UserTypeApideleteUserType
      */
    typeId: string;
}
export interface UserTypeApiGetUserTypeRequest {
    /**
      *
      * @type string
      * @memberof UserTypeApigetUserType
      */
    typeId: string;
}
export interface UserTypeApiListUserTypesRequest {
}
export interface UserTypeApiReplaceUserTypeRequest {
    /**
      *
      * @type string
      * @memberof UserTypeApireplaceUserType
      */
    typeId: string;
    /**
      *
      * @type UserTypePutRequest
      * @memberof UserTypeApireplaceUserType
      */
    userType?: UserTypePutRequest;
}
export interface UserTypeApiUpdateUserTypeRequest {
    /**
      *
      * @type string
      * @memberof UserTypeApiupdateUserType
      */
    typeId: string;
    /**
      *
      * @type UserTypePostRequest
      * @memberof UserTypeApiupdateUserType
      */
    userType: UserTypePostRequest;
}
export declare class ObjectUserTypeApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UserTypeApiRequestFactory, responseProcessor?: UserTypeApiResponseProcessor);
  /**
      * Creates a new user type. Okta automatically creates a `default` user type for your org. You may add up to nine additional user types. > **Note**: New user types are based on the current default schema template. Modifications to this schema do not automatically propagate to previously created user types.
      * Create a user type
      * @param param the request object
      */
  createUserType(param: UserTypeApiCreateUserTypeRequest, options?: Configuration): Promise<UserType>;
  /**
      * Deletes a user type permanently. > **Note**: You can\'t delete the default user type or a user type that is currently assigned to users.
      * Delete a user type
      * @param param the request object
      */
  deleteUserType(param: UserTypeApiDeleteUserTypeRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a user type by ID. Use `default` to fetch the default user type.
      * Retrieve a user type
      * @param param the request object
      */
  getUserType(param: UserTypeApiGetUserTypeRequest, options?: Configuration): Promise<UserType>;
  /**
      * Lists all user types in your org
      * List all user types
      * @param param the request object
      */
  listUserTypes(param?: UserTypeApiListUserTypesRequest, options?: Configuration): Promise<Collection<UserType>>;
  /**
      * Replaces an existing user type. This operation is a full update. > **Note**: The `name` of an existing user type can\'t be changed, but must be part of the request body. You can only replace the `displayName` and `description` elements.
      * Replace a user type
      * @param param the request object
      */
  replaceUserType(param: UserTypeApiReplaceUserTypeRequest, options?: Configuration): Promise<UserType>;
  /**
      * Updates an existing user type. This operation is a partial update. > **Note**: You can only update the `displayName` and `description` elements. The `name` of an existing user type can\'t be changed.
      * Update a user type
      * @param param the request object
      */
  updateUserType(param: UserTypeApiUpdateUserTypeRequest, options?: Configuration): Promise<UserType>;
}
import { WebAuthnPreregistrationApiRequestFactory, WebAuthnPreregistrationApiResponseProcessor } from '../apis/WebAuthnPreregistrationApi';
export interface WebAuthnPreregistrationApiActivatePreregistrationEnrollmentRequest {
    /**
      * Enrollment activation request
      * @type EnrollmentActivationRequest
      * @memberof WebAuthnPreregistrationApiactivatePreregistrationEnrollment
      */
    body?: EnrollmentActivationRequest;
}
export interface WebAuthnPreregistrationApiAssignFulfillmentErrorWebAuthnPreregistrationFactorRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof WebAuthnPreregistrationApiassignFulfillmentErrorWebAuthnPreregistrationFactor
      */
    userId: string;
    /**
      * ID for a WebAuthn preregistration factor in Okta
      * @type string
      * @memberof WebAuthnPreregistrationApiassignFulfillmentErrorWebAuthnPreregistrationFactor
      */
    authenticatorEnrollmentId: string;
}
export interface WebAuthnPreregistrationApiDeleteWebAuthnPreregistrationFactorRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof WebAuthnPreregistrationApideleteWebAuthnPreregistrationFactor
      */
    userId: string;
    /**
      * ID for a WebAuthn preregistration factor in Okta
      * @type string
      * @memberof WebAuthnPreregistrationApideleteWebAuthnPreregistrationFactor
      */
    authenticatorEnrollmentId: string;
}
export interface WebAuthnPreregistrationApiEnrollPreregistrationEnrollmentRequest {
    /**
      * Enrollment initialization request
      * @type EnrollmentInitializationRequest
      * @memberof WebAuthnPreregistrationApienrollPreregistrationEnrollment
      */
    body?: EnrollmentInitializationRequest;
}
export interface WebAuthnPreregistrationApiGenerateFulfillmentRequestRequest {
    /**
      * Fulfillment request
      * @type FulfillmentRequest
      * @memberof WebAuthnPreregistrationApigenerateFulfillmentRequest
      */
    body?: FulfillmentRequest;
}
export interface WebAuthnPreregistrationApiListWebAuthnPreregistrationFactorsRequest {
    /**
      * ID of an existing Okta user
      * @type string
      * @memberof WebAuthnPreregistrationApilistWebAuthnPreregistrationFactors
      */
    userId: string;
}
export interface WebAuthnPreregistrationApiSendPinRequest {
    /**
      * Send PIN request
      * @type PinRequest
      * @memberof WebAuthnPreregistrationApisendPin
      */
    body?: PinRequest;
}
export declare class ObjectWebAuthnPreregistrationApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: WebAuthnPreregistrationApiRequestFactory, responseProcessor?: WebAuthnPreregistrationApiResponseProcessor);
  /**
      * Activates a preregistered WebAuthn factor. As part of this operation, Okta first decrypts and verifies the factor PIN and enrollment data sent by the fulfillment provider.
      * Activate a preregistered WebAuthn factor
      * @param param the request object
      */
  activatePreregistrationEnrollment(param?: WebAuthnPreregistrationApiActivatePreregistrationEnrollmentRequest, options?: Configuration): Promise<EnrollmentActivationResponse>;
  /**
      * Assigns the fulfillment error status to a WebAuthn preregistration factor for a user. The `/mark-error` path indicates that the specific `FULFILLMENT_ERRORED` AuthFactor status is set on the enrollment.
      * Assign the fulfillment error status to a WebAuthn preregistration factor
      * @param param the request object
      */
  assignFulfillmentErrorWebAuthnPreregistrationFactor(param: WebAuthnPreregistrationApiAssignFulfillmentErrorWebAuthnPreregistrationFactorRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a specific WebAuthn preregistration factor for a user
      * Delete a WebAuthn preregistration factor
      * @param param the request object
      */
  deleteWebAuthnPreregistrationFactor(param: WebAuthnPreregistrationApiDeleteWebAuthnPreregistrationFactorRequest, options?: Configuration): Promise<void>;
  /**
      * Enrolls a preregistered WebAuthn factor. This WebAuthn factor has a longer challenge timeout period to accommodate the fulfillment request process. As part of this operation, Okta generates elliptic curve (EC) key-pairs used to encrypt the factor PIN and enrollment data sent by the fulfillment provider.
      * Enroll a preregistered WebAuthn factor
      * @param param the request object
      */
  enrollPreregistrationEnrollment(param?: WebAuthnPreregistrationApiEnrollPreregistrationEnrollmentRequest, options?: Configuration): Promise<EnrollmentInitializationResponse>;
  /**
      * Generates a fulfillment request by sending a WebAuthn preregistration event to start the flow. The WebAuthn preregistration integration for Okta Workflows uses a preregistration event to populate the fulfillment request.
      * Generate a fulfillment request
      * @param param the request object
      */
  generateFulfillmentRequest(param?: WebAuthnPreregistrationApiGenerateFulfillmentRequestRequest, options?: Configuration): Promise<void>;
  /**
      * Lists all WebAuthn preregistration factors for the specified user
      * List all WebAuthn preregistration factors
      * @param param the request object
      */
  listWebAuthnPreregistrationFactors(param: WebAuthnPreregistrationApiListWebAuthnPreregistrationFactorsRequest, options?: Configuration): Promise<Collection<WebAuthnPreregistrationFactor>>;
  /**
      * Sends the decoded PIN for the specified WebAuthn preregistration enrollment. PINs are sent to the user\'s email. To resend the PIN, call this operation again.
      * Send a PIN to user
      * @param param the request object
      */
  sendPin(param?: WebAuthnPreregistrationApiSendPinRequest, options?: Configuration): Promise<void>;
}
import { YourOinIntegrationsApiRequestFactory, YourOinIntegrationsApiResponseProcessor } from '../apis/YourOinIntegrationsApi';
export interface YourOinIntegrationsApiCreateSubmissionRequest {
    /**
      *
      * @type SubmissionRequest
      * @memberof YourOinIntegrationsApicreateSubmission
      */
    submissionRequest?: SubmissionRequest;
}
export interface YourOinIntegrationsApiGetSubmissionByOperationIdRequest {
    /**
      * OIN Integration ID
      * @type string
      * @memberof YourOinIntegrationsApigetSubmissionByOperationId
      */
    submissionId: string;
}
export interface YourOinIntegrationsApiGetSubmissionTestInfoRequest {
    /**
      * OIN Integration ID
      * @type string
      * @memberof YourOinIntegrationsApigetSubmissionTestInfo
      */
    submissionId: string;
}
export interface YourOinIntegrationsApiListSubmissionsRequest {
    /**
      * A limit on the number of objects to return
      * @type number
      * @memberof YourOinIntegrationsApilistSubmissions
      */
    limit?: number;
    /**
      * Specify the pagination cursor (OIN Integration instance &#x60;id&#x60;) for the next page of OIN Integrations.
      * @type string
      * @memberof YourOinIntegrationsApilistSubmissions
      */
    after?: string;
}
export interface YourOinIntegrationsApiReplaceSubmissionRequest {
    /**
      * OIN Integration ID
      * @type string
      * @memberof YourOinIntegrationsApireplaceSubmission
      */
    submissionId: string;
    /**
      *
      * @type SubmissionRequest
      * @memberof YourOinIntegrationsApireplaceSubmission
      */
    submissionRequest?: SubmissionRequest;
}
export interface YourOinIntegrationsApiSubmitSubmissionRequest {
    /**
      * OIN Integration ID
      * @type string
      * @memberof YourOinIntegrationsApisubmitSubmission
      */
    submissionId: string;
}
export interface YourOinIntegrationsApiUploadSubmissionLogoRequest {
    /**
      *
      * @type HttpFile
      * @memberof YourOinIntegrationsApiuploadSubmissionLogo
      */
    file?: HttpFile;
}
export interface YourOinIntegrationsApiUpsertSubmissionTestInfoRequest {
    /**
      * OIN Integration ID
      * @type string
      * @memberof YourOinIntegrationsApiupsertSubmissionTestInfo
      */
    submissionId: string;
    /**
      *
      * @type TestInfo
      * @memberof YourOinIntegrationsApiupsertSubmissionTestInfo
      */
    testInfo?: TestInfo;
}
export declare class ObjectYourOinIntegrationsApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: YourOinIntegrationsApiRequestFactory, responseProcessor?: YourOinIntegrationsApiResponseProcessor);
  /**
      * Creates an OIN Integration submission for verification and publication
      * Create an OIN integration
      * @param param the request object
      */
  createSubmission(param?: YourOinIntegrationsApiCreateSubmissionRequest, options?: Configuration): Promise<SubmissionResponse>;
  /**
      * Retrieves an OIN Integration by ID
      * Retrieve an OIN integration
      * @param param the request object
      */
  getSubmissionByOperationId(param: YourOinIntegrationsApiGetSubmissionByOperationIdRequest, options?: Configuration): Promise<SubmissionResponse>;
  /**
      * Retrieves the testing information for an existing OIN Integration
      * Retrieve an OIN integration testing information
      * @param param the request object
      */
  getSubmissionTestInfo(param: YourOinIntegrationsApiGetSubmissionTestInfoRequest, options?: Configuration): Promise<TestInfo>;
  /**
      * Lists all OIN Integration submissions created through the org
      * List all OIN integrations
      * @param param the request object
      */
  listSubmissions(param?: YourOinIntegrationsApiListSubmissionsRequest, options?: Configuration): Promise<Collection<SubmissionResponse>>;
  /**
      * Replaces the properties of an OIN Integration identified by ID
      * Replace an OIN integration
      * @param param the request object
      */
  replaceSubmission(param: YourOinIntegrationsApiReplaceSubmissionRequest, options?: Configuration): Promise<SubmissionResponse>;
  /**
      * Submits an OIN Integration for Okta verification
      * Submit an OIN integration
      * @param param the request object
      */
  submitSubmission(param: YourOinIntegrationsApiSubmitSubmissionRequest, options?: Configuration): Promise<void>;
  /**
      * Uploads a logo to your org. The image uploaded must adhere to the [OIN logo guidelines](https://developer.okta.com/docs/guides/submit-app-prereq/main/#logo-guidelines). Use the URL returned in the response header to specify the [`logo`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission!path=logo&t=request) parameter when you [create your OIN Integration submission](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission). This logo appears in the OIN catalog for your app integration.
      * Upload an OIN integration logo
      * @param param the request object
      */
  uploadSubmissionLogo(param?: YourOinIntegrationsApiUploadSubmissionLogoRequest, options?: Configuration): Promise<void>;
  /**
      * Upserts (adds or replaces) testing information for an OIN Integration
      * Upsert an OIN integration testing information
      * @param param the request object
      */
  upsertSubmissionTestInfo(param: YourOinIntegrationsApiUpsertSubmissionTestInfoRequest, options?: Configuration): Promise<TestInfo>;
}
