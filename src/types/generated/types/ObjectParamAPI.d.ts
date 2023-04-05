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
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
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
      * Activate an Agent Pool update
      * @param param the request object
      */
  activateAgentPoolsUpdate(param: AgentPoolsApiActivateAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.
      * Create an Agent Pool update
      * @param param the request object
      */
  createAgentPoolsUpdate(param: AgentPoolsApiCreateAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Deactivates scheduled Agent pool update
      * Deactivate an Agent Pool update
      * @param param the request object
      */
  deactivateAgentPoolsUpdate(param: AgentPoolsApiDeactivateAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Deletes Agent pool update
      * Delete an Agent Pool update
      * @param param the request object
      */
  deleteAgentPoolsUpdate(param: AgentPoolsApiDeleteAgentPoolsUpdateRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves Agent pool update from updateId
      * Retrieve an Agent Pool update by id
      * @param param the request object
      */
  getAgentPoolsUpdateInstance(param: AgentPoolsApiGetAgentPoolsUpdateInstanceRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Retrieves the current state of the agent pool update instance settings
      * Retrieve an Agent Pool update's settings
      * @param param the request object
      */
  getAgentPoolsUpdateSettings(param: AgentPoolsApiGetAgentPoolsUpdateSettingsRequest, options?: Configuration): Promise<AgentPoolUpdateSetting>;
  /**
      * Lists all agent pools with pagination support
      * List all Agent Pools
      * @param param the request object
      */
  listAgentPools(param?: AgentPoolsApiListAgentPoolsRequest, options?: Configuration): Promise<Collection<AgentPool>>;
  /**
      * Lists all agent pool updates
      * List all Agent Pool updates
      * @param param the request object
      */
  listAgentPoolsUpdates(param: AgentPoolsApiListAgentPoolsUpdatesRequest, options?: Configuration): Promise<Collection<AgentPoolUpdate>>;
  /**
      * Pauses running or queued Agent pool update
      * Pause an Agent Pool update
      * @param param the request object
      */
  pauseAgentPoolsUpdate(param: AgentPoolsApiPauseAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Resumes running or queued Agent pool update
      * Resume an Agent Pool update
      * @param param the request object
      */
  resumeAgentPoolsUpdate(param: AgentPoolsApiResumeAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Retries Agent pool update
      * Retry an Agent Pool update
      * @param param the request object
      */
  retryAgentPoolsUpdate(param: AgentPoolsApiRetryAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Stops Agent pool update
      * Stop an Agent Pool update
      * @param param the request object
      */
  stopAgentPoolsUpdate(param: AgentPoolsApiStopAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Updates Agent pool update and return latest agent pool update
      * Update an Agent Pool update by id
      * @param param the request object
      */
  updateAgentPoolsUpdate(param: AgentPoolsApiUpdateAgentPoolsUpdateRequest, options?: Configuration): Promise<AgentPoolUpdate>;
  /**
      * Updates an agent pool update settings
      * Update an Agent Pool update settings
      * @param param the request object
      */
  updateAgentPoolsUpdateSettings(param: AgentPoolsApiUpdateAgentPoolsUpdateSettingsRequest, options?: Configuration): Promise<AgentPoolUpdateSetting>;
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
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @type string
      * @memberof ApiTokenApilistApiTokens
      */
    after?: string;
    /**
      * A limit on the number of objects to return.
      * @type number
      * @memberof ApiTokenApilistApiTokens
      */
    limit?: number;
    /**
      * Finds a token that matches the name or clientName.
      * @type string
      * @memberof ApiTokenApilistApiTokens
      */
    q?: string;
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
export declare class ObjectApiTokenApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ApiTokenApiRequestFactory, responseProcessor?: ApiTokenApiResponseProcessor);
  /**
      * Retrieves the metadata for an active API token by id
      * Retrieve an API Token's Metadata
      * @param param the request object
      */
  getApiToken(param: ApiTokenApiGetApiTokenRequest, options?: Configuration): Promise<ApiToken>;
  /**
      * Lists all the metadata of the active API tokens
      * List all API Token Metadata
      * @param param the request object
      */
  listApiTokens(param?: ApiTokenApiListApiTokensRequest, options?: Configuration): Promise<Collection<ApiToken>>;
  /**
      * Revokes an API token by `apiTokenId`
      * Revoke an API Token
      * @param param the request object
      */
  revokeApiToken(param: ApiTokenApiRevokeApiTokenRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes the API token provided in the Authorization header
      * Revoke the Current API Token
      * @param param the request object
      */
  revokeCurrentApiToken(param?: ApiTokenApiRevokeCurrentApiTokenRequest, options?: Configuration): Promise<void>;
}
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor } from '../apis/ApplicationApi';
export interface ApplicationApiActivateApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiactivateApplication
      */
    appId: string;
}
export interface ApplicationApiActivateDefaultProvisioningConnectionForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiactivateDefaultProvisioningConnectionForApplication
      */
    appId: string;
}
export interface ApplicationApiAssignApplicationPolicyRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiassignApplicationPolicy
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiassignApplicationPolicy
      */
    policyId: string;
}
export interface ApplicationApiAssignGroupToApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiassignGroupToApplication
      */
    appId: string;
    /**
      *
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
      *
      * @type string
      * @memberof ApplicationApiassignUserToApplication
      */
    appId: string;
    /**
      *
      * @type AppUser
      * @memberof ApplicationApiassignUserToApplication
      */
    appUser: AppUser;
}
export interface ApplicationApiCloneApplicationKeyRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApicloneApplicationKey
      */
    appId: string;
    /**
      *
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
    OktaAccessGateway_Agent?: string;
}
export interface ApplicationApiDeactivateApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApideactivateApplication
      */
    appId: string;
}
export interface ApplicationApiDeactivateDefaultProvisioningConnectionForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApideactivateDefaultProvisioningConnectionForApplication
      */
    appId: string;
}
export interface ApplicationApiDeleteApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApideleteApplication
      */
    appId: string;
}
export interface ApplicationApiGenerateApplicationKeyRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigenerateApplicationKey
      */
    appId: string;
    /**
      *
      * @type number
      * @memberof ApplicationApigenerateApplicationKey
      */
    validityYears?: number;
}
export interface ApplicationApiGenerateCsrForApplicationRequest {
    /**
      *
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
export interface ApplicationApiGetApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplication
      */
    expand?: string;
}
export interface ApplicationApiGetApplicationGroupAssignmentRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplicationGroupAssignment
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplicationGroupAssignment
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplicationGroupAssignment
      */
    expand?: string;
}
export interface ApplicationApiGetApplicationKeyRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplicationKey
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplicationKey
      */
    keyId: string;
}
export interface ApplicationApiGetApplicationUserRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplicationUser
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplicationUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetApplicationUser
      */
    expand?: string;
}
export interface ApplicationApiGetCsrForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigetCsrForApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetCsrForApplication
      */
    csrId: string;
}
export interface ApplicationApiGetDefaultProvisioningConnectionForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigetDefaultProvisioningConnectionForApplication
      */
    appId: string;
}
export interface ApplicationApiGetFeatureForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigetFeatureForApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetFeatureForApplication
      */
    name: string;
}
export interface ApplicationApiGetOAuth2TokenForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigetOAuth2TokenForApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetOAuth2TokenForApplication
      */
    tokenId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetOAuth2TokenForApplication
      */
    expand?: string;
}
export interface ApplicationApiGetScopeConsentGrantRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApigetScopeConsentGrant
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetScopeConsentGrant
      */
    grantId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApigetScopeConsentGrant
      */
    expand?: string;
}
export interface ApplicationApiGrantConsentToScopeRequest {
    /**
      *
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
      *
      * @type string
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    q?: string;
    /**
      * Specifies the pagination cursor for the next page of assignments
      * @type string
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    after?: string;
    /**
      * Specifies the number of results for a page
      * @type number
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    limit?: number;
    /**
      *
      * @type string
      * @memberof ApplicationApilistApplicationGroupAssignments
      */
    expand?: string;
}
export interface ApplicationApiListApplicationKeysRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApilistApplicationKeys
      */
    appId: string;
}
export interface ApplicationApiListApplicationUsersRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    q?: string;
    /**
      *
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    query_scope?: string;
    /**
      * specifies the pagination cursor for the next page of assignments
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    after?: string;
    /**
      * specifies the number of results for a page
      * @type number
      * @memberof ApplicationApilistApplicationUsers
      */
    limit?: number;
    /**
      *
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    filter?: string;
    /**
      *
      * @type string
      * @memberof ApplicationApilistApplicationUsers
      */
    expand?: string;
}
export interface ApplicationApiListApplicationsRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApilistApplications
      */
    q?: string;
    /**
      * Specifies the pagination cursor for the next page of apps
      * @type string
      * @memberof ApplicationApilistApplications
      */
    after?: string;
    /**
      * Specifies the number of results for a page
      * @type number
      * @memberof ApplicationApilistApplications
      */
    limit?: number;
    /**
      * Filters apps by status, user.id, group.id or credentials.signing.kid expression
      * @type string
      * @memberof ApplicationApilistApplications
      */
    filter?: string;
    /**
      * Traverses users link relationship and optionally embeds Application User resource
      * @type string
      * @memberof ApplicationApilistApplications
      */
    expand?: string;
    /**
      *
      * @type boolean
      * @memberof ApplicationApilistApplications
      */
    includeNonDeleted?: boolean;
}
export interface ApplicationApiListCsrsForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApilistCsrsForApplication
      */
    appId: string;
}
export interface ApplicationApiListFeaturesForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApilistFeaturesForApplication
      */
    appId: string;
}
export interface ApplicationApiListOAuth2TokensForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApilistOAuth2TokensForApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApilistOAuth2TokensForApplication
      */
    expand?: string;
    /**
      *
      * @type string
      * @memberof ApplicationApilistOAuth2TokensForApplication
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof ApplicationApilistOAuth2TokensForApplication
      */
    limit?: number;
}
export interface ApplicationApiListScopeConsentGrantsRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApilistScopeConsentGrants
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApilistScopeConsentGrants
      */
    expand?: string;
}
export interface ApplicationApiPublishCsrFromApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApipublishCsrFromApplication
      */
    appId: string;
    /**
      *
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
      *
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
export interface ApplicationApiRevokeCsrFromApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApirevokeCsrFromApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApirevokeCsrFromApplication
      */
    csrId: string;
}
export interface ApplicationApiRevokeOAuth2TokenForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApirevokeOAuth2TokenForApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApirevokeOAuth2TokenForApplication
      */
    tokenId: string;
}
export interface ApplicationApiRevokeOAuth2TokensForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApirevokeOAuth2TokensForApplication
      */
    appId: string;
}
export interface ApplicationApiRevokeScopeConsentGrantRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApirevokeScopeConsentGrant
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApirevokeScopeConsentGrant
      */
    grantId: string;
}
export interface ApplicationApiUnassignApplicationFromGroupRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiunassignApplicationFromGroup
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiunassignApplicationFromGroup
      */
    groupId: string;
}
export interface ApplicationApiUnassignUserFromApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiunassignUserFromApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiunassignUserFromApplication
      */
    userId: string;
    /**
      *
      * @type boolean
      * @memberof ApplicationApiunassignUserFromApplication
      */
    sendEmail?: boolean;
}
export interface ApplicationApiUpdateApplicationUserRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiupdateApplicationUser
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiupdateApplicationUser
      */
    userId: string;
    /**
      *
      * @type AppUser
      * @memberof ApplicationApiupdateApplicationUser
      */
    appUser: AppUser;
}
export interface ApplicationApiUpdateDefaultProvisioningConnectionForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiupdateDefaultProvisioningConnectionForApplication
      */
    appId: string;
    /**
      *
      * @type ProvisioningConnectionRequest
      * @memberof ApplicationApiupdateDefaultProvisioningConnectionForApplication
      */
    ProvisioningConnectionRequest: ProvisioningConnectionRequest;
    /**
      *
      * @type boolean
      * @memberof ApplicationApiupdateDefaultProvisioningConnectionForApplication
      */
    activate?: boolean;
}
export interface ApplicationApiUpdateFeatureForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiupdateFeatureForApplication
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApiupdateFeatureForApplication
      */
    name: string;
    /**
      *
      * @type CapabilitiesObject
      * @memberof ApplicationApiupdateFeatureForApplication
      */
    CapabilitiesObject: CapabilitiesObject;
}
export interface ApplicationApiUploadApplicationLogoRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiuploadApplicationLogo
      */
    appId: string;
    /**
      *
      * @type HttpFile
      * @memberof ApplicationApiuploadApplicationLogo
      */
    file: HttpFile;
}
export declare class ObjectApplicationApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ApplicationApiRequestFactory, responseProcessor?: ApplicationApiResponseProcessor);
  /**
      * Activates an inactive application
      * Activate an Application
      * @param param the request object
      */
  activateApplication(param: ApplicationApiActivateApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Activates the default Provisioning Connection for an application
      * Activate the default Provisioning Connection
      * @param param the request object
      */
  activateDefaultProvisioningConnectionForApplication(param: ApplicationApiActivateDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an application to a policy identified by `policyId`. If the application was previously assigned to another policy, this removes that assignment.
      * Assign an Application to a Policy
      * @param param the request object
      */
  assignApplicationPolicy(param: ApplicationApiAssignApplicationPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a group to an application
      * Assign a Group
      * @param param the request object
      */
  assignGroupToApplication(param: ApplicationApiAssignGroupToApplicationRequest, options?: Configuration): Promise<ApplicationGroupAssignment>;
  /**
      * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
      * Assign a User
      * @param param the request object
      */
  assignUserToApplication(param: ApplicationApiAssignUserToApplicationRequest, options?: Configuration): Promise<AppUser>;
  /**
      * Clones a X.509 certificate for an application key credential from a source application to target application.
      * Clone a Key Credential
      * @param param the request object
      */
  cloneApplicationKey(param: ApplicationApiCloneApplicationKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Creates a new application to your Okta organization
      * Create an Application
      * @param param the request object
      */
  createApplication(param: ApplicationApiCreateApplicationRequest, options?: Configuration): Promise<Application>;
  /**
      * Deactivates an active application
      * Deactivate an Application
      * @param param the request object
      */
  deactivateApplication(param: ApplicationApiDeactivateApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates the default Provisioning Connection for an application
      * Deactivate the default Provisioning Connection for an Application
      * @param param the request object
      */
  deactivateDefaultProvisioningConnectionForApplication(param: ApplicationApiDeactivateDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an inactive application
      * Delete an Application
      * @param param the request object
      */
  deleteApplication(param: ApplicationApiDeleteApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Generates a new X.509 certificate for an application key credential
      * Generate a Key Credential
      * @param param the request object
      */
  generateApplicationKey(param: ApplicationApiGenerateApplicationKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Generates a new key pair and returns the Certificate Signing Request for it
      * Generate a Certificate Signing Request
      * @param param the request object
      */
  generateCsrForApplication(param: ApplicationApiGenerateCsrForApplicationRequest, options?: Configuration): Promise<Csr>;
  /**
      * Retrieves an application from your Okta organization by `id`
      * Retrieve an Application
      * @param param the request object
      */
  getApplication(param: ApplicationApiGetApplicationRequest, options?: Configuration): Promise<Application>;
  /**
      * Retrieves an application group assignment
      * Retrieve an Assigned Group
      * @param param the request object
      */
  getApplicationGroupAssignment(param: ApplicationApiGetApplicationGroupAssignmentRequest, options?: Configuration): Promise<ApplicationGroupAssignment>;
  /**
      * Retrieves a specific application key credential by kid
      * Retrieve a Key Credential
      * @param param the request object
      */
  getApplicationKey(param: ApplicationApiGetApplicationKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Retrieves a specific user assignment for application by `id`
      * Retrieve an Assigned User
      * @param param the request object
      */
  getApplicationUser(param: ApplicationApiGetApplicationUserRequest, options?: Configuration): Promise<AppUser>;
  /**
      * Retrieves a certificate signing request for the app by `id`
      * Retrieve a Certificate Signing Request
      * @param param the request object
      */
  getCsrForApplication(param: ApplicationApiGetCsrForApplicationRequest, options?: Configuration): Promise<Csr>;
  /**
      * Retrieves the default Provisioning Connection for application
      * Retrieve the default Provisioning Connection
      * @param param the request object
      */
  getDefaultProvisioningConnectionForApplication(param: ApplicationApiGetDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<ProvisioningConnection>;
  /**
      * Retrieves a Feature object for an application
      * Retrieve a Feature
      * @param param the request object
      */
  getFeatureForApplication(param: ApplicationApiGetFeatureForApplicationRequest, options?: Configuration): Promise<ApplicationFeature>;
  /**
      * Retrieves a token for the specified application
      * Retrieve an OAuth 2.0 Token
      * @param param the request object
      */
  getOAuth2TokenForApplication(param: ApplicationApiGetOAuth2TokenForApplicationRequest, options?: Configuration): Promise<OAuth2Token>;
  /**
      * Retrieves a single scope consent grant for the application
      * Retrieve a Scope Consent Grant
      * @param param the request object
      */
  getScopeConsentGrant(param: ApplicationApiGetScopeConsentGrantRequest, options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Grants consent for the application to request an OAuth 2.0 Okta scope
      * Grant Consent to Scope
      * @param param the request object
      */
  grantConsentToScope(param: ApplicationApiGrantConsentToScopeRequest, options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Lists all group assignments for an application
      * List all Assigned Groups
      * @param param the request object
      */
  listApplicationGroupAssignments(param: ApplicationApiListApplicationGroupAssignmentsRequest, options?: Configuration): Promise<Collection<ApplicationGroupAssignment>>;
  /**
      * Lists all key credentials for an application
      * List all Key Credentials
      * @param param the request object
      */
  listApplicationKeys(param: ApplicationApiListApplicationKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Lists all assigned [application users](#application-user-model) for an application
      * List all Assigned Users
      * @param param the request object
      */
  listApplicationUsers(param: ApplicationApiListApplicationUsersRequest, options?: Configuration): Promise<Collection<AppUser>>;
  /**
      * Lists all applications with pagination. A subset of apps can be returned that match a supported filter expression or query.
      * List all Applications
      * @param param the request object
      */
  listApplications(param?: ApplicationApiListApplicationsRequest, options?: Configuration): Promise<Collection<Application>>;
  /**
      * Lists all Certificate Signing Requests for an application
      * List all Certificate Signing Requests
      * @param param the request object
      */
  listCsrsForApplication(param: ApplicationApiListCsrsForApplicationRequest, options?: Configuration): Promise<Collection<Csr>>;
  /**
      * Lists all features for an application
      * List all Features
      * @param param the request object
      */
  listFeaturesForApplication(param: ApplicationApiListFeaturesForApplicationRequest, options?: Configuration): Promise<Collection<ApplicationFeature>>;
  /**
      * Lists all tokens for the application
      * List all OAuth 2.0 Tokens
      * @param param the request object
      */
  listOAuth2TokensForApplication(param: ApplicationApiListOAuth2TokensForApplicationRequest, options?: Configuration): Promise<Collection<OAuth2Token>>;
  /**
      * Lists all scope consent grants for the application
      * List all Scope Consent Grants
      * @param param the request object
      */
  listScopeConsentGrants(param: ApplicationApiListScopeConsentGrantsRequest, options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Publishes a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish a Certificate Signing Request
      * @param param the request object
      */
  publishCsrFromApplication(param: ApplicationApiPublishCsrFromApplicationRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Replaces an application
      * Replace an Application
      * @param param the request object
      */
  replaceApplication(param: ApplicationApiReplaceApplicationRequest, options?: Configuration): Promise<Application>;
  /**
      * Revokes a certificate signing request and deletes the key pair from the application
      * Revoke a Certificate Signing Request
      * @param param the request object
      */
  revokeCsrFromApplication(param: ApplicationApiRevokeCsrFromApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes the specified token for the specified application
      * Revoke an OAuth 2.0 Token
      * @param param the request object
      */
  revokeOAuth2TokenForApplication(param: ApplicationApiRevokeOAuth2TokenForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all tokens for the specified application
      * Revoke all OAuth 2.0 Tokens
      * @param param the request object
      */
  revokeOAuth2TokensForApplication(param: ApplicationApiRevokeOAuth2TokensForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes permission for the application to request the given scope
      * Revoke a Scope Consent Grant
      * @param param the request object
      */
  revokeScopeConsentGrant(param: ApplicationApiRevokeScopeConsentGrantRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a group from an application
      * Unassign a Group
      * @param param the request object
      */
  unassignApplicationFromGroup(param: ApplicationApiUnassignApplicationFromGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a user from an application
      * Unassign a User
      * @param param the request object
      */
  unassignUserFromApplication(param: ApplicationApiUnassignUserFromApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Updates a user's profile for an application
      * Update an Application Profile for Assigned User
      * @param param the request object
      */
  updateApplicationUser(param: ApplicationApiUpdateApplicationUserRequest, options?: Configuration): Promise<AppUser>;
  /**
      * Updates the default provisioning connection for application
      * Update the default Provisioning Connection
      * @param param the request object
      */
  updateDefaultProvisioningConnectionForApplication(param: ApplicationApiUpdateDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<ProvisioningConnection>;
  /**
      * Updates a Feature object for an application
      * Update a Feature
      * @param param the request object
      */
  updateFeatureForApplication(param: ApplicationApiUpdateFeatureForApplicationRequest, options?: Configuration): Promise<ApplicationFeature>;
  /**
      * Uploads a logo for the application. The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * Upload a Logo
      * @param param the request object
      */
  uploadApplicationLogo(param: ApplicationApiUploadApplicationLogoRequest, options?: Configuration): Promise<void>;
}
import { AttackProtectionApiRequestFactory, AttackProtectionApiResponseProcessor } from '../apis/AttackProtectionApi';
export interface AttackProtectionApiGetUserLockoutSettingsRequest {
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
      * Retrieves the User Lockout Settings for an org
      * Retrieve the User Lockout Settings
      * @param param the request object
      */
  getUserLockoutSettings(param?: AttackProtectionApiGetUserLockoutSettingsRequest, options?: Configuration): Promise<Collection<UserLockoutSettings>>;
  /**
      * Replaces the User Lockout Settings for an org
      * Replace the User Lockout Settings
      * @param param the request object
      */
  replaceUserLockoutSettings(param: AttackProtectionApiReplaceUserLockoutSettingsRequest, options?: Configuration): Promise<UserLockoutSettings>;
}
import { AuthenticatorApiRequestFactory, AuthenticatorApiResponseProcessor } from '../apis/AuthenticatorApi';
export interface AuthenticatorApiActivateAuthenticatorRequest {
    /**
      *
      * @type string
      * @memberof AuthenticatorApiactivateAuthenticator
      */
    authenticatorId: string;
}
export interface AuthenticatorApiCreateAuthenticatorRequest {
    /**
      *
      * @type Authenticator
      * @memberof AuthenticatorApicreateAuthenticator
      */
    authenticator: Authenticator;
    /**
      * Whether to execute the activation lifecycle operation when Okta creates the authenticator
      * @type boolean
      * @memberof AuthenticatorApicreateAuthenticator
      */
    activate?: boolean;
}
export interface AuthenticatorApiDeactivateAuthenticatorRequest {
    /**
      *
      * @type string
      * @memberof AuthenticatorApideactivateAuthenticator
      */
    authenticatorId: string;
}
export interface AuthenticatorApiGetAuthenticatorRequest {
    /**
      *
      * @type string
      * @memberof AuthenticatorApigetAuthenticator
      */
    authenticatorId: string;
}
export interface AuthenticatorApiGetWellKnownAppAuthenticatorConfigurationRequest {
    /**
      * Filters app authenticator configurations by &#x60;oauthClientId&#x60;
      * @type string
      * @memberof AuthenticatorApigetWellKnownAppAuthenticatorConfiguration
      */
    oauthClientId: string;
}
export interface AuthenticatorApiListAuthenticatorsRequest {
}
export interface AuthenticatorApiReplaceAuthenticatorRequest {
    /**
      *
      * @type string
      * @memberof AuthenticatorApireplaceAuthenticator
      */
    authenticatorId: string;
    /**
      *
      * @type Authenticator
      * @memberof AuthenticatorApireplaceAuthenticator
      */
    authenticator: Authenticator;
}
export declare class ObjectAuthenticatorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AuthenticatorApiRequestFactory, responseProcessor?: AuthenticatorApiResponseProcessor);
  /**
      * Activates an authenticator by `authenticatorId`
      * Activate an Authenticator
      * @param param the request object
      */
  activateAuthenticator(param: AuthenticatorApiActivateAuthenticatorRequest, options?: Configuration): Promise<Authenticator>;
  /**
      * Creates an authenticator. You can use this operation as part of the \"Create a custom authenticator\" flow. See the [Custom authenticator integration guide](https://developer.okta.com/docs/guides/authenticators-custom-authenticator/android/main/).
      * Create an Authenticator
      * @param param the request object
      */
  createAuthenticator(param: AuthenticatorApiCreateAuthenticatorRequest, options?: Configuration): Promise<Authenticator>;
  /**
      * Deactivates an authenticator by `authenticatorId`
      * Deactivate an Authenticator
      * @param param the request object
      */
  deactivateAuthenticator(param: AuthenticatorApiDeactivateAuthenticatorRequest, options?: Configuration): Promise<Authenticator>;
  /**
      * Retrieves an authenticator from your Okta organization by `authenticatorId`
      * Retrieve an Authenticator
      * @param param the request object
      */
  getAuthenticator(param: AuthenticatorApiGetAuthenticatorRequest, options?: Configuration): Promise<Authenticator>;
  /**
      * Retrieves the well-known app authenticator configuration, which includes an app authenticator's settings, supported methods and various other configuration details
      * Retrieve the Well-Known App Authenticator Configuration
      * @param param the request object
      */
  getWellKnownAppAuthenticatorConfiguration(param: AuthenticatorApiGetWellKnownAppAuthenticatorConfigurationRequest, options?: Configuration): Promise<Collection<WellKnownAppAuthenticatorConfiguration>>;
  /**
      * Lists all authenticators
      * List all Authenticators
      * @param param the request object
      */
  listAuthenticators(param?: AuthenticatorApiListAuthenticatorsRequest, options?: Configuration): Promise<Collection<Authenticator>>;
  /**
      * Replaces an authenticator
      * Replace an Authenticator
      * @param param the request object
      */
  replaceAuthenticator(param: AuthenticatorApiReplaceAuthenticatorRequest, options?: Configuration): Promise<Authenticator>;
}
import { AuthorizationServerApiRequestFactory, AuthorizationServerApiResponseProcessor } from '../apis/AuthorizationServerApi';
export interface AuthorizationServerApiActivateAuthorizationServerRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiActivateAuthorizationServerPolicyRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicy
      */
    policyId: string;
}
export interface AuthorizationServerApiActivateAuthorizationServerPolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiactivateAuthorizationServerPolicyRule
      */
    ruleId: string;
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
      *
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
      *
      * @type string
      * @memberof AuthorizationServerApicreateAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApicreateAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      *
      * @type AuthorizationServerPolicyRule
      * @memberof AuthorizationServerApicreateAuthorizationServerPolicyRule
      */
    policyRule: AuthorizationServerPolicyRule;
}
export interface AuthorizationServerApiCreateOAuth2ClaimRequest {
    /**
      *
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
      *
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
      *
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiDeactivateAuthorizationServerPolicyRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicy
      */
    policyId: string;
}
export interface AuthorizationServerApiDeactivateAuthorizationServerPolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideactivateAuthorizationServerPolicyRule
      */
    ruleId: string;
}
export interface AuthorizationServerApiDeleteAuthorizationServerRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiDeleteAuthorizationServerPolicyRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicy
      */
    policyId: string;
}
export interface AuthorizationServerApiDeleteAuthorizationServerPolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteAuthorizationServerPolicyRule
      */
    ruleId: string;
}
export interface AuthorizationServerApiDeleteOAuth2ClaimRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteOAuth2Claim
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteOAuth2Claim
      */
    claimId: string;
}
export interface AuthorizationServerApiDeleteOAuth2ScopeRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteOAuth2Scope
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApideleteOAuth2Scope
      */
    scopeId: string;
}
export interface AuthorizationServerApiGetAuthorizationServerRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiGetAuthorizationServerPolicyRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicy
      */
    policyId: string;
}
export interface AuthorizationServerApiGetAuthorizationServerPolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetAuthorizationServerPolicyRule
      */
    ruleId: string;
}
export interface AuthorizationServerApiGetOAuth2ClaimRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetOAuth2Claim
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetOAuth2Claim
      */
    claimId: string;
}
export interface AuthorizationServerApiGetOAuth2ScopeRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetOAuth2Scope
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetOAuth2Scope
      */
    scopeId: string;
}
export interface AuthorizationServerApiGetRefreshTokenForAuthorizationServerAndClientRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetRefreshTokenForAuthorizationServerAndClient
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetRefreshTokenForAuthorizationServerAndClient
      */
    clientId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetRefreshTokenForAuthorizationServerAndClient
      */
    tokenId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApigetRefreshTokenForAuthorizationServerAndClient
      */
    expand?: string;
}
export interface AuthorizationServerApiListAuthorizationServerKeysRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServerKeys
      */
    authServerId: string;
}
export interface AuthorizationServerApiListAuthorizationServerPoliciesRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServerPolicies
      */
    authServerId: string;
}
export interface AuthorizationServerApiListAuthorizationServerPolicyRulesRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServerPolicyRules
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServerPolicyRules
      */
    authServerId: string;
}
export interface AuthorizationServerApiListAuthorizationServersRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServers
      */
    q?: string;
    /**
      *
      * @type number
      * @memberof AuthorizationServerApilistAuthorizationServers
      */
    limit?: number;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServers
      */
    after?: string;
}
export interface AuthorizationServerApiListOAuth2ClaimsRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Claims
      */
    authServerId: string;
}
export interface AuthorizationServerApiListOAuth2ClientsForAuthorizationServerRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistOAuth2ClientsForAuthorizationServer
      */
    authServerId: string;
}
export interface AuthorizationServerApiListOAuth2ScopesRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    q?: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    filter?: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    cursor?: string;
    /**
      *
      * @type number
      * @memberof AuthorizationServerApilistOAuth2Scopes
      */
    limit?: number;
}
export interface AuthorizationServerApiListRefreshTokensForAuthorizationServerAndClientRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    clientId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    expand?: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof AuthorizationServerApilistRefreshTokensForAuthorizationServerAndClient
      */
    limit?: number;
}
export interface AuthorizationServerApiReplaceAuthorizationServerRequest {
    /**
      *
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
      *
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      *
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
      *
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicyRule
      */
    ruleId: string;
    /**
      *
      * @type AuthorizationServerPolicyRule
      * @memberof AuthorizationServerApireplaceAuthorizationServerPolicyRule
      */
    policyRule: AuthorizationServerPolicyRule;
}
export interface AuthorizationServerApiReplaceOAuth2ClaimRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApireplaceOAuth2Claim
      */
    authServerId: string;
    /**
      *
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
      *
      * @type string
      * @memberof AuthorizationServerApireplaceOAuth2Scope
      */
    authServerId: string;
    /**
      *
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
      *
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokenForAuthorizationServerAndClient
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokenForAuthorizationServerAndClient
      */
    clientId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokenForAuthorizationServerAndClient
      */
    tokenId: string;
}
export interface AuthorizationServerApiRevokeRefreshTokensForAuthorizationServerAndClientRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokensForAuthorizationServerAndClient
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApirevokeRefreshTokensForAuthorizationServerAndClient
      */
    clientId: string;
}
export interface AuthorizationServerApiRotateAuthorizationServerKeysRequest {
    /**
      *
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
      * Activate an Authorization Server
      * @param param the request object
      */
  activateAuthorizationServer(param: AuthorizationServerApiActivateAuthorizationServerRequest, options?: Configuration): Promise<void>;
  /**
      * Activates an authorization server policy
      * Activate a Policy
      * @param param the request object
      */
  activateAuthorizationServerPolicy(param: AuthorizationServerApiActivateAuthorizationServerPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Activates an authorization server policy rule
      * Activate a Policy Rule
      * @param param the request object
      */
  activateAuthorizationServerPolicyRule(param: AuthorizationServerApiActivateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Creates an authorization server
      * Create an Authorization Server
      * @param param the request object
      */
  createAuthorizationServer(param: AuthorizationServerApiCreateAuthorizationServerRequest, options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Creates a policy
      * Create a Policy
      * @param param the request object
      */
  createAuthorizationServerPolicy(param: AuthorizationServerApiCreateAuthorizationServerPolicyRequest, options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy
      * Create a Policy Rule
      * @param param the request object
      */
  createAuthorizationServerPolicyRule(param: AuthorizationServerApiCreateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Creates a custom token claim
      * Create a Custom Token Claim
      * @param param the request object
      */
  createOAuth2Claim(param: AuthorizationServerApiCreateOAuth2ClaimRequest, options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Creates a custom token scope
      * Create a Custom Token Scope
      * @param param the request object
      */
  createOAuth2Scope(param: AuthorizationServerApiCreateOAuth2ScopeRequest, options?: Configuration): Promise<OAuth2Scope>;
  /**
      * Deactivates an authorization server
      * Deactivate an Authorization Server
      * @param param the request object
      */
  deactivateAuthorizationServer(param: AuthorizationServerApiDeactivateAuthorizationServerRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates an authorization server policy
      * Deactivate a Policy
      * @param param the request object
      */
  deactivateAuthorizationServerPolicy(param: AuthorizationServerApiDeactivateAuthorizationServerPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates an authorization server policy rule
      * Deactivate a Policy Rule
      * @param param the request object
      */
  deactivateAuthorizationServerPolicyRule(param: AuthorizationServerApiDeactivateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an authorization server
      * Delete an Authorization Server
      * @param param the request object
      */
  deleteAuthorizationServer(param: AuthorizationServerApiDeleteAuthorizationServerRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a policy
      * Delete a Policy
      * @param param the request object
      */
  deleteAuthorizationServerPolicy(param: AuthorizationServerApiDeleteAuthorizationServerPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
      * Delete a Policy Rule
      * @param param the request object
      */
  deleteAuthorizationServerPolicyRule(param: AuthorizationServerApiDeleteAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a custom token claim
      * Delete a Custom Token Claim
      * @param param the request object
      */
  deleteOAuth2Claim(param: AuthorizationServerApiDeleteOAuth2ClaimRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a custom token scope
      * Delete a Custom Token Scope
      * @param param the request object
      */
  deleteOAuth2Scope(param: AuthorizationServerApiDeleteOAuth2ScopeRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an authorization server
      * Retrieve an Authorization Server
      * @param param the request object
      */
  getAuthorizationServer(param: AuthorizationServerApiGetAuthorizationServerRequest, options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param param the request object
      */
  getAuthorizationServerPolicy(param: AuthorizationServerApiGetAuthorizationServerPolicyRequest, options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Retrieves a policy rule by `ruleId`
      * Retrieve a Policy Rule
      * @param param the request object
      */
  getAuthorizationServerPolicyRule(param: AuthorizationServerApiGetAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Retrieves a custom token claim
      * Retrieve a Custom Token Claim
      * @param param the request object
      */
  getOAuth2Claim(param: AuthorizationServerApiGetOAuth2ClaimRequest, options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Retrieves a custom token scope
      * Retrieve a Custom Token Scope
      * @param param the request object
      */
  getOAuth2Scope(param: AuthorizationServerApiGetOAuth2ScopeRequest, options?: Configuration): Promise<OAuth2Scope>;
  /**
      * Retrieves a refresh token for a client
      * Retrieve a Refresh Token for a Client
      * @param param the request object
      */
  getRefreshTokenForAuthorizationServerAndClient(param: AuthorizationServerApiGetRefreshTokenForAuthorizationServerAndClientRequest, options?: Configuration): Promise<OAuth2RefreshToken>;
  /**
      * Lists all credential keys
      * List all Credential Keys
      * @param param the request object
      */
  listAuthorizationServerKeys(param: AuthorizationServerApiListAuthorizationServerKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Lists all policies
      * List all Policies
      * @param param the request object
      */
  listAuthorizationServerPolicies(param: AuthorizationServerApiListAuthorizationServerPoliciesRequest, options?: Configuration): Promise<Collection<AuthorizationServerPolicy>>;
  /**
      * Lists all policy rules for the specified Custom Authorization Server and Policy
      * List all Policy Rules
      * @param param the request object
      */
  listAuthorizationServerPolicyRules(param: AuthorizationServerApiListAuthorizationServerPolicyRulesRequest, options?: Configuration): Promise<Collection<AuthorizationServerPolicyRule>>;
  /**
      * Lists all authorization servers
      * List all Authorization Servers
      * @param param the request object
      */
  listAuthorizationServers(param?: AuthorizationServerApiListAuthorizationServersRequest, options?: Configuration): Promise<Collection<AuthorizationServer>>;
  /**
      * Lists all custom token claims
      * List all Custom Token Claims
      * @param param the request object
      */
  listOAuth2Claims(param: AuthorizationServerApiListOAuth2ClaimsRequest, options?: Configuration): Promise<Collection<OAuth2Claim>>;
  /**
      * Lists all clients
      * List all Clients
      * @param param the request object
      */
  listOAuth2ClientsForAuthorizationServer(param: AuthorizationServerApiListOAuth2ClientsForAuthorizationServerRequest, options?: Configuration): Promise<Collection<OAuth2Client>>;
  /**
      * Lists all custom token scopes
      * List all Custom Token Scopes
      * @param param the request object
      */
  listOAuth2Scopes(param: AuthorizationServerApiListOAuth2ScopesRequest, options?: Configuration): Promise<Collection<OAuth2Scope>>;
  /**
      * Lists all refresh tokens for a client
      * List all Refresh Tokens for a Client
      * @param param the request object
      */
  listRefreshTokensForAuthorizationServerAndClient(param: AuthorizationServerApiListRefreshTokensForAuthorizationServerAndClientRequest, options?: Configuration): Promise<Collection<OAuth2RefreshToken>>;
  /**
      * Replaces an authorization server
      * Replace an Authorization Server
      * @param param the request object
      */
  replaceAuthorizationServer(param: AuthorizationServerApiReplaceAuthorizationServerRequest, options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Replaces a policy
      * Replace a Policy
      * @param param the request object
      */
  replaceAuthorizationServerPolicy(param: AuthorizationServerApiReplaceAuthorizationServerPolicyRequest, options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
      * Replace a Policy Rule
      * @param param the request object
      */
  replaceAuthorizationServerPolicyRule(param: AuthorizationServerApiReplaceAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Replaces a custom token claim
      * Replace a Custom Token Claim
      * @param param the request object
      */
  replaceOAuth2Claim(param: AuthorizationServerApiReplaceOAuth2ClaimRequest, options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Replaces a custom token scope
      * Replace a Custom Token Scope
      * @param param the request object
      */
  replaceOAuth2Scope(param: AuthorizationServerApiReplaceOAuth2ScopeRequest, options?: Configuration): Promise<OAuth2Scope>;
  /**
      * Revokes a refresh token for a client
      * Revoke a Refresh Token for a Client
      * @param param the request object
      */
  revokeRefreshTokenForAuthorizationServerAndClient(param: AuthorizationServerApiRevokeRefreshTokenForAuthorizationServerAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all refresh tokens for a client
      * Revoke all Refresh Tokens for a Client
      * @param param the request object
      */
  revokeRefreshTokensForAuthorizationServerAndClient(param: AuthorizationServerApiRevokeRefreshTokensForAuthorizationServerAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Rotates all credential keys
      * Rotate all Credential Keys
      * @param param the request object
      */
  rotateAuthorizationServerKeys(param: AuthorizationServerApiRotateAuthorizationServerKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
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
      * Activate a Behavior Detection Rule
      * @param param the request object
      */
  activateBehaviorDetectionRule(param: BehaviorApiActivateBehaviorDetectionRuleRequest, options?: Configuration): Promise<BehaviorRule>;
  /**
      * Creates a new behavior detection rule
      * Create a Behavior Detection Rule
      * @param param the request object
      */
  createBehaviorDetectionRule(param: BehaviorApiCreateBehaviorDetectionRuleRequest, options?: Configuration): Promise<BehaviorRule>;
  /**
      * Deactivates a behavior detection rule
      * Deactivate a Behavior Detection Rule
      * @param param the request object
      */
  deactivateBehaviorDetectionRule(param: BehaviorApiDeactivateBehaviorDetectionRuleRequest, options?: Configuration): Promise<BehaviorRule>;
  /**
      * Deletes a Behavior Detection Rule by `behaviorId`
      * Delete a Behavior Detection Rule
      * @param param the request object
      */
  deleteBehaviorDetectionRule(param: BehaviorApiDeleteBehaviorDetectionRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a Behavior Detection Rule by `behaviorId`
      * Retrieve a Behavior Detection Rule
      * @param param the request object
      */
  getBehaviorDetectionRule(param: BehaviorApiGetBehaviorDetectionRuleRequest, options?: Configuration): Promise<BehaviorRule>;
  /**
      * Lists all behavior detection rules with pagination support
      * List all Behavior Detection Rules
      * @param param the request object
      */
  listBehaviorDetectionRules(param?: BehaviorApiListBehaviorDetectionRulesRequest, options?: Configuration): Promise<Collection<BehaviorRule>>;
  /**
      * Replaces a Behavior Detection Rule by `behaviorId`
      * Replace a Behavior Detection Rule
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
      * id of the CAPTCHA
      * @type string
      * @memberof CAPTCHAApideleteCaptchaInstance
      */
    captchaId: string;
}
export interface CAPTCHAApiGetCaptchaInstanceRequest {
    /**
      * id of the CAPTCHA
      * @type string
      * @memberof CAPTCHAApigetCaptchaInstance
      */
    captchaId: string;
}
export interface CAPTCHAApiListCaptchaInstancesRequest {
}
export interface CAPTCHAApiReplaceCaptchaInstanceRequest {
    /**
      * id of the CAPTCHA
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
export interface CAPTCHAApiUpdateCaptchaInstanceRequest {
    /**
      * id of the CAPTCHA
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
      * Creates a new CAPTCHA instance. In the current release, we only allow one CAPTCHA instance per org.
      * Create a CAPTCHA instance
      * @param param the request object
      */
  createCaptchaInstance(param: CAPTCHAApiCreateCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Deletes a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete a CAPTCHA Instance
      * @param param the request object
      */
  deleteCaptchaInstance(param: CAPTCHAApiDeleteCaptchaInstanceRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a CAPTCHA instance by `captchaId`
      * Retrieve a CAPTCHA Instance
      * @param param the request object
      */
  getCaptchaInstance(param: CAPTCHAApiGetCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      * @param param the request object
      */
  listCaptchaInstances(param?: CAPTCHAApiListCaptchaInstancesRequest, options?: Configuration): Promise<Collection<CAPTCHAInstance>>;
  /**
      * Replaces a CAPTCHA instance by `captchaId`
      * Replace a CAPTCHA instance
      * @param param the request object
      */
  replaceCaptchaInstance(param: CAPTCHAApiReplaceCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Partially updates a CAPTCHA instance by `captchaId`
      * Update a CAPTCHA instance
      * @param param the request object
      */
  updateCaptchaInstance(param: CAPTCHAApiUpdateCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
}
import { CustomDomainApiRequestFactory, CustomDomainApiResponseProcessor } from '../apis/CustomDomainApi';
export interface CustomDomainApiCreateCustomDomainRequest {
    /**
      *
      * @type Domain
      * @memberof CustomDomainApicreateCustomDomain
      */
    domain: Domain;
}
export interface CustomDomainApiDeleteCustomDomainRequest {
    /**
      *
      * @type string
      * @memberof CustomDomainApideleteCustomDomain
      */
    domainId: string;
}
export interface CustomDomainApiGetCustomDomainRequest {
    /**
      *
      * @type string
      * @memberof CustomDomainApigetCustomDomain
      */
    domainId: string;
}
export interface CustomDomainApiListCustomDomainsRequest {
}
export interface CustomDomainApiReplaceCustomDomainRequest {
    /**
      *
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
      *
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
      *
      * @type string
      * @memberof CustomDomainApiverifyDomain
      */
    domainId: string;
}
export declare class ObjectCustomDomainApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: CustomDomainApiRequestFactory, responseProcessor?: CustomDomainApiResponseProcessor);
  /**
      * Creates your Custom Domain
      * Create a Custom Domain
      * @param param the request object
      */
  createCustomDomain(param: CustomDomainApiCreateCustomDomainRequest, options?: Configuration): Promise<DomainResponse>;
  /**
      * Deletes a Custom Domain by `id`
      * Delete a Custom Domain
      * @param param the request object
      */
  deleteCustomDomain(param: CustomDomainApiDeleteCustomDomainRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a Custom Domain by `id`
      * Retrieve a Custom Domain
      * @param param the request object
      */
  getCustomDomain(param: CustomDomainApiGetCustomDomainRequest, options?: Configuration): Promise<DomainResponse>;
  /**
      * Lists all verified Custom Domains for the org
      * List all Custom Domains
      * @param param the request object
      */
  listCustomDomains(param?: CustomDomainApiListCustomDomainsRequest, options?: Configuration): Promise<DomainListResponse>;
  /**
      * Replaces a Custom Domain by `id`
      * Replace a Custom Domain's brandId
      * @param param the request object
      */
  replaceCustomDomain(param: CustomDomainApiReplaceCustomDomainRequest, options?: Configuration): Promise<DomainResponse>;
  /**
      * Creates or replaces the certificate for the custom domain
      * Upsert the Certificate
      * @param param the request object
      */
  upsertCertificate(param: CustomDomainApiUpsertCertificateRequest, options?: Configuration): Promise<void>;
  /**
      * Verifies the Custom Domain by `id`
      * Verify a Custom Domain
      * @param param the request object
      */
  verifyDomain(param: CustomDomainApiVerifyDomainRequest, options?: Configuration): Promise<DomainResponse>;
}
import { CustomizationApiRequestFactory, CustomizationApiResponseProcessor } from '../apis/CustomizationApi';
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
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApicreateEmailCustomization
      */
    brandId: string;
    /**
      * The name of the email template.
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
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideleteAllCustomizations
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApideleteAllCustomizations
      */
    templateName: string;
}
export interface CustomizationApiDeleteBrandRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideleteBrand
      */
    brandId: string;
}
export interface CustomizationApiDeleteBrandThemeBackgroundImageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideleteBrandThemeBackgroundImage
      */
    brandId: string;
    /**
      * The ID of the theme.
      * @type string
      * @memberof CustomizationApideleteBrandThemeBackgroundImage
      */
    themeId: string;
}
export interface CustomizationApiDeleteBrandThemeFaviconRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideleteBrandThemeFavicon
      */
    brandId: string;
    /**
      * The ID of the theme.
      * @type string
      * @memberof CustomizationApideleteBrandThemeFavicon
      */
    themeId: string;
}
export interface CustomizationApiDeleteBrandThemeLogoRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideleteBrandThemeLogo
      */
    brandId: string;
    /**
      * The ID of the theme.
      * @type string
      * @memberof CustomizationApideleteBrandThemeLogo
      */
    themeId: string;
}
export interface CustomizationApiDeleteCustomizedErrorPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideleteCustomizedErrorPage
      */
    brandId: string;
}
export interface CustomizationApiDeleteCustomizedSignInPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideleteCustomizedSignInPage
      */
    brandId: string;
}
export interface CustomizationApiDeleteEmailCustomizationRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideleteEmailCustomization
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApideleteEmailCustomization
      */
    templateName: string;
    /**
      * The ID of the email customization.
      * @type string
      * @memberof CustomizationApideleteEmailCustomization
      */
    customizationId: string;
}
export interface CustomizationApiDeletePreviewErrorPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideletePreviewErrorPage
      */
    brandId: string;
}
export interface CustomizationApiDeletePreviewSignInPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApideletePreviewSignInPage
      */
    brandId: string;
}
export interface CustomizationApiGetBrandRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetBrand
      */
    brandId: string;
}
export interface CustomizationApiGetBrandThemeRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetBrandTheme
      */
    brandId: string;
    /**
      * The ID of the theme.
      * @type string
      * @memberof CustomizationApigetBrandTheme
      */
    themeId: string;
}
export interface CustomizationApiGetCustomizationPreviewRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetCustomizationPreview
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApigetCustomizationPreview
      */
    templateName: string;
    /**
      * The ID of the email customization.
      * @type string
      * @memberof CustomizationApigetCustomizationPreview
      */
    customizationId: string;
}
export interface CustomizationApiGetCustomizedErrorPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetCustomizedErrorPage
      */
    brandId: string;
}
export interface CustomizationApiGetCustomizedSignInPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetCustomizedSignInPage
      */
    brandId: string;
}
export interface CustomizationApiGetDefaultErrorPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetDefaultErrorPage
      */
    brandId: string;
}
export interface CustomizationApiGetDefaultSignInPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetDefaultSignInPage
      */
    brandId: string;
}
export interface CustomizationApiGetEmailCustomizationRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetEmailCustomization
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApigetEmailCustomization
      */
    templateName: string;
    /**
      * The ID of the email customization.
      * @type string
      * @memberof CustomizationApigetEmailCustomization
      */
    customizationId: string;
}
export interface CustomizationApiGetEmailDefaultContentRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetEmailDefaultContent
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApigetEmailDefaultContent
      */
    templateName: string;
    /**
      * The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      * @type string
      * @memberof CustomizationApigetEmailDefaultContent
      */
    language?: string;
}
export interface CustomizationApiGetEmailDefaultPreviewRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetEmailDefaultPreview
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApigetEmailDefaultPreview
      */
    templateName: string;
    /**
      * The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      * @type string
      * @memberof CustomizationApigetEmailDefaultPreview
      */
    language?: string;
}
export interface CustomizationApiGetEmailSettingsRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetEmailSettings
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApigetEmailSettings
      */
    templateName: string;
}
export interface CustomizationApiGetEmailTemplateRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetEmailTemplate
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApigetEmailTemplate
      */
    templateName: string;
    /**
      * Specifies additional metadata to be included in the response.
      * @type Array&lt;&#39;settings&#39; | &#39;customizationCount&#39;&gt;
      * @memberof CustomizationApigetEmailTemplate
      */
    expand?: Array<'settings' | 'customizationCount'>;
}
export interface CustomizationApiGetErrorPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetErrorPage
      */
    brandId: string;
    /**
      * Specifies additional metadata to be included in the response.
      * @type Array&lt;&#39;default&#39; | &#39;customized&#39; | &#39;customizedUrl&#39; | &#39;preview&#39; | &#39;previewUrl&#39;&gt;
      * @memberof CustomizationApigetErrorPage
      */
    expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>;
}
export interface CustomizationApiGetPreviewErrorPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetPreviewErrorPage
      */
    brandId: string;
}
export interface CustomizationApiGetPreviewSignInPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetPreviewSignInPage
      */
    brandId: string;
}
export interface CustomizationApiGetSignInPageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetSignInPage
      */
    brandId: string;
    /**
      * Specifies additional metadata to be included in the response.
      * @type Array&lt;&#39;default&#39; | &#39;customized&#39; | &#39;customizedUrl&#39; | &#39;preview&#39; | &#39;previewUrl&#39;&gt;
      * @memberof CustomizationApigetSignInPage
      */
    expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>;
}
export interface CustomizationApiGetSignOutPageSettingsRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApigetSignOutPageSettings
      */
    brandId: string;
}
export interface CustomizationApiListAllSignInWidgetVersionsRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApilistAllSignInWidgetVersions
      */
    brandId: string;
}
export interface CustomizationApiListBrandDomainsRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApilistBrandDomains
      */
    brandId: string;
}
export interface CustomizationApiListBrandThemesRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApilistBrandThemes
      */
    brandId: string;
}
export interface CustomizationApiListBrandsRequest {
}
export interface CustomizationApiListEmailCustomizationsRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApilistEmailCustomizations
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApilistEmailCustomizations
      */
    templateName: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @type string
      * @memberof CustomizationApilistEmailCustomizations
      */
    after?: string;
    /**
      * A limit on the number of objects to return.
      * @type number
      * @memberof CustomizationApilistEmailCustomizations
      */
    limit?: number;
}
export interface CustomizationApiListEmailTemplatesRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApilistEmailTemplates
      */
    brandId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @type string
      * @memberof CustomizationApilistEmailTemplates
      */
    after?: string;
    /**
      * A limit on the number of objects to return.
      * @type number
      * @memberof CustomizationApilistEmailTemplates
      */
    limit?: number;
    /**
      * Specifies additional metadata to be included in the response.
      * @type Array&lt;&#39;settings&#39; | &#39;customizationCount&#39;&gt;
      * @memberof CustomizationApilistEmailTemplates
      */
    expand?: Array<'settings' | 'customizationCount'>;
}
export interface CustomizationApiReplaceBrandRequest {
    /**
      * The ID of the brand.
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
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApireplaceBrandTheme
      */
    brandId: string;
    /**
      * The ID of the theme.
      * @type string
      * @memberof CustomizationApireplaceBrandTheme
      */
    themeId: string;
    /**
      *
      * @type Theme
      * @memberof CustomizationApireplaceBrandTheme
      */
    theme: Theme;
}
export interface CustomizationApiReplaceCustomizedErrorPageRequest {
    /**
      * The ID of the brand.
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
      * The ID of the brand.
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
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApireplaceEmailCustomization
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApireplaceEmailCustomization
      */
    templateName: string;
    /**
      * The ID of the email customization.
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
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApireplaceEmailSettings
      */
    brandId: string;
    /**
      * The name of the email template.
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
      * The ID of the brand.
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
      * The ID of the brand.
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
      * The ID of the brand.
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
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApisendTestEmail
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApisendTestEmail
      */
    templateName: string;
    /**
      * The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      * @type string
      * @memberof CustomizationApisendTestEmail
      */
    language?: string;
}
export interface CustomizationApiUploadBrandThemeBackgroundImageRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApiuploadBrandThemeBackgroundImage
      */
    brandId: string;
    /**
      * The ID of the theme.
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
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApiuploadBrandThemeFavicon
      */
    brandId: string;
    /**
      * The ID of the theme.
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
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApiuploadBrandThemeLogo
      */
    brandId: string;
    /**
      * The ID of the theme.
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
      * Creates new brand in your org
      * Create a Brand
      * @param param the request object
      */
  createBrand(param?: CustomizationApiCreateBrandRequest, options?: Configuration): Promise<Brand>;
  /**
      * Creates a new email customization
      * Create an Email Customization
      * @param param the request object
      */
  createEmailCustomization(param: CustomizationApiCreateEmailCustomizationRequest, options?: Configuration): Promise<EmailCustomization>;
  /**
      * Deletes all customizations for an email template
      * Delete all Email Customizations
      * @param param the request object
      */
  deleteAllCustomizations(param: CustomizationApiDeleteAllCustomizationsRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a brand by its unique identifier
      * Delete a brand
      * @param param the request object
      */
  deleteBrand(param: CustomizationApiDeleteBrandRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme background image
      * Delete the Background Image
      * @param param the request object
      */
  deleteBrandThemeBackgroundImage(param: CustomizationApiDeleteBrandThemeBackgroundImageRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme favicon. The theme will use the default Okta favicon.
      * Delete the Favicon
      * @param param the request object
      */
  deleteBrandThemeFavicon(param: CustomizationApiDeleteBrandThemeFaviconRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the Logo
      * @param param the request object
      */
  deleteBrandThemeLogo(param: CustomizationApiDeleteBrandThemeLogoRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the customized error page. As a result, the default error page appears in your live environment.
      * Delete the Customized Error Page
      * @param param the request object
      */
  deleteCustomizedErrorPage(param: CustomizationApiDeleteCustomizedErrorPageRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
      * Delete the Customized Sign-in Page
      * @param param the request object
      */
  deleteCustomizedSignInPage(param: CustomizationApiDeleteCustomizedSignInPageRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an email customization by its unique identifier
      * Delete an Email Customization
      * @param param the request object
      */
  deleteEmailCustomization(param: CustomizationApiDeleteEmailCustomizationRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Delete the Preview Error Page
      * @param param the request object
      */
  deletePreviewErrorPage(param: CustomizationApiDeletePreviewErrorPageRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Delete the Preview Sign-in Page
      * @param param the request object
      */
  deletePreviewSignInPage(param: CustomizationApiDeletePreviewSignInPageRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a brand by `brandId`
      * Retrieve a Brand
      * @param param the request object
      */
  getBrand(param: CustomizationApiGetBrandRequest, options?: Configuration): Promise<Brand>;
  /**
      * Retrieves a theme for a brand
      * Retrieve a Theme
      * @param param the request object
      */
  getBrandTheme(param: CustomizationApiGetBrandThemeRequest, options?: Configuration): Promise<ThemeResponse>;
  /**
      * Retrieves a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of an Email Customization
      * @param param the request object
      */
  getCustomizationPreview(param: CustomizationApiGetCustomizationPreviewRequest, options?: Configuration): Promise<EmailPreview>;
  /**
      * Retrieves the customized error page. The customized error page appears in your live environment.
      * Retrieve the Customized Error Page
      * @param param the request object
      */
  getCustomizedErrorPage(param: CustomizationApiGetCustomizedErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
      * Retrieve the Customized Sign-in Page
      * @param param the request object
      */
  getCustomizedSignInPage(param: CustomizationApiGetCustomizedSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Retrieves the default error page. The default error page appears when no customized error page exists.
      * Retrieve the Default Error Page
      * @param param the request object
      */
  getDefaultErrorPage(param: CustomizationApiGetDefaultErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
      * Retrieve the Default Sign-in Page
      * @param param the request object
      */
  getDefaultSignInPage(param: CustomizationApiGetDefaultSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Retrieves an email customization by its unique identifier
      * Retrieve an Email Customization
      * @param param the request object
      */
  getEmailCustomization(param: CustomizationApiGetEmailCustomizationRequest, options?: Configuration): Promise<EmailCustomization>;
  /**
      * Retrieves an email template's default content
      * Retrieve an Email Template Default Content
      * @param param the request object
      */
  getEmailDefaultContent(param: CustomizationApiGetEmailDefaultContentRequest, options?: Configuration): Promise<EmailDefaultContent>;
  /**
      * Retrieves a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of the Email Template Default Content
      * @param param the request object
      */
  getEmailDefaultPreview(param: CustomizationApiGetEmailDefaultPreviewRequest, options?: Configuration): Promise<EmailPreview>;
  /**
      * Retrieves an email template's settings
      * Retrieve the Email Template Settings
      * @param param the request object
      */
  getEmailSettings(param: CustomizationApiGetEmailSettingsRequest, options?: Configuration): Promise<EmailSettings>;
  /**
      * Retrieves the details of an email template by name
      * Retrieve an Email Template
      * @param param the request object
      */
  getEmailTemplate(param: CustomizationApiGetEmailTemplateRequest, options?: Configuration): Promise<EmailTemplate>;
  /**
      * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Error Page Sub-Resources
      * @param param the request object
      */
  getErrorPage(param: CustomizationApiGetErrorPageRequest, options?: Configuration): Promise<PageRoot>;
  /**
      * Retrieves the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Retrieve the Preview Error Page Preview
      * @param param the request object
      */
  getPreviewErrorPage(param: CustomizationApiGetPreviewErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Retrieve the Preview Sign-in Page Preview
      * @param param the request object
      */
  getPreviewSignInPage(param: CustomizationApiGetPreviewSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Sign-in Page Sub-Resources
      * @param param the request object
      */
  getSignInPage(param: CustomizationApiGetSignInPageRequest, options?: Configuration): Promise<PageRoot>;
  /**
      * Retrieves the sign-out page settings
      * Retrieve the Sign-out Page Settings
      * @param param the request object
      */
  getSignOutPageSettings(param: CustomizationApiGetSignOutPageSettingsRequest, options?: Configuration): Promise<HostedPage>;
  /**
      * Lists all sign-in widget versions supported by the current org
      * List all Sign-in Widget Versions
      * @param param the request object
      */
  listAllSignInWidgetVersions(param: CustomizationApiListAllSignInWidgetVersionsRequest, options?: Configuration): Promise<Collection<string>>;
  /**
      * Lists all domains associated with a brand by `brandId`
      * List all Domains associated with a Brand
      * @param param the request object
      */
  listBrandDomains(param: CustomizationApiListBrandDomainsRequest, options?: Configuration): Promise<BrandDomains>;
  /**
      * Lists all the themes in your brand
      * List all Themes
      * @param param the request object
      */
  listBrandThemes(param: CustomizationApiListBrandThemesRequest, options?: Configuration): Promise<Collection<ThemeResponse>>;
  /**
      * Lists all the brands in your org
      * List all Brands
      * @param param the request object
      */
  listBrands(param?: CustomizationApiListBrandsRequest, options?: Configuration): Promise<Collection<Brand>>;
  /**
      * Lists all customizations of an email template
      * List all Email Customizations
      * @param param the request object
      */
  listEmailCustomizations(param: CustomizationApiListEmailCustomizationsRequest, options?: Configuration): Promise<Collection<EmailCustomization>>;
  /**
      * Lists all email templates
      * List all Email Templates
      * @param param the request object
      */
  listEmailTemplates(param: CustomizationApiListEmailTemplatesRequest, options?: Configuration): Promise<Collection<EmailTemplate>>;
  /**
      * Replaces a brand by `brandId`
      * Replace a Brand
      * @param param the request object
      */
  replaceBrand(param: CustomizationApiReplaceBrandRequest, options?: Configuration): Promise<Brand>;
  /**
      * Replaces a theme for a brand
      * Replace a Theme
      * @param param the request object
      */
  replaceBrandTheme(param: CustomizationApiReplaceBrandThemeRequest, options?: Configuration): Promise<ThemeResponse>;
  /**
      * Replaces the customized error page. The customized error page appears in your live environment.
      * Replace the Customized Error Page
      * @param param the request object
      */
  replaceCustomizedErrorPage(param: CustomizationApiReplaceCustomizedErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
      * Replace the Customized Sign-in Page
      * @param param the request object
      */
  replaceCustomizedSignInPage(param: CustomizationApiReplaceCustomizedSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Replaces an existing email customization using the property values provided
      * Replace an Email Customization
      * @param param the request object
      */
  replaceEmailCustomization(param: CustomizationApiReplaceEmailCustomizationRequest, options?: Configuration): Promise<EmailCustomization>;
  /**
      * Replaces an email template's settings
      * Replace the Email Template Settings
      * @param param the request object
      */
  replaceEmailSettings(param: CustomizationApiReplaceEmailSettingsRequest, options?: Configuration): Promise<void>;
  /**
      * Replaces the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Replace the Preview Error Page
      * @param param the request object
      */
  replacePreviewErrorPage(param: CustomizationApiReplacePreviewErrorPageRequest, options?: Configuration): Promise<ErrorPage>;
  /**
      * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Replace the Preview Sign-in Page
      * @param param the request object
      */
  replacePreviewSignInPage(param: CustomizationApiReplacePreviewSignInPageRequest, options?: Configuration): Promise<SignInPage>;
  /**
      * Replaces the sign-out page settings
      * Replace the Sign-out Page Settings
      * @param param the request object
      */
  replaceSignOutPageSettings(param: CustomizationApiReplaceSignOutPageSettingsRequest, options?: Configuration): Promise<HostedPage>;
  /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
      * Send a Test Email
      * @param param the request object
      */
  sendTestEmail(param: CustomizationApiSendTestEmailRequest, options?: Configuration): Promise<void>;
  /**
      * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
      * Upload the Background Image
      * @param param the request object
      */
  uploadBrandThemeBackgroundImage(param: CustomizationApiUploadBrandThemeBackgroundImageRequest, options?: Configuration): Promise<ImageUploadResponse>;
  /**
      * Uploads and replaces the favicon for the theme
      * Upload the Favicon
      * @param param the request object
      */
  uploadBrandThemeFavicon(param: CustomizationApiUploadBrandThemeFaviconRequest, options?: Configuration): Promise<ImageUploadResponse>;
  /**
      * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Logo
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
export interface DeviceApiListDevicesRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @type string
      * @memberof DeviceApilistDevices
      */
    after?: string;
    /**
      * A limit on the number of objects to return.
      * @type number
      * @memberof DeviceApilistDevices
      */
    limit?: number;
    /**
      * SCIM filter expression that filters the results. Searches include all Device &#x60;profile&#x60; properties, as well as the Device &#x60;id&#x60;, &#x60;status&#x60; and &#x60;lastUpdated&#x60; properties.
      * @type string
      * @memberof DeviceApilistDevices
      */
    search?: string;
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
      * Activates a device by `deviceId`
      * Activate a Device
      * @param param the request object
      */
  activateDevice(param: DeviceApiActivateDeviceRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates a device by `deviceId`
      * Deactivate a Device
      * @param param the request object
      */
  deactivateDevice(param: DeviceApiDeactivateDeviceRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a device by `deviceId`
      * Delete a Device
      * @param param the request object
      */
  deleteDevice(param: DeviceApiDeleteDeviceRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a device by `deviceId`
      * Retrieve a Device
      * @param param the request object
      */
  getDevice(param: DeviceApiGetDeviceRequest, options?: Configuration): Promise<Device>;
  /**
      * Lists all devices with pagination support.  A subset of Devices can be returned that match a supported search criteria using the `search` query parameter.  Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request.  > **Note:** Listing devices with `search` should not be used as a part of any critical flows—such as authentication or updates—to prevent potential data loss. `search` results may not reflect the latest information, as this endpoint uses a search index which may not be up-to-date with recent updates to the object. <br> Don't use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss. <br> Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation equires [URL encoding](http://en.wikipedia.org/wiki/Percent-encoding). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
      * List all Devices
      * @param param the request object
      */
  listDevices(param?: DeviceApiListDevicesRequest, options?: Configuration): Promise<Collection<Device>>;
  /**
      * Suspends a device by `deviceId`
      * Suspend a Device
      * @param param the request object
      */
  suspendDevice(param: DeviceApiSuspendDeviceRequest, options?: Configuration): Promise<void>;
  /**
      * Unsuspends a device by `deviceId`
      * Unsuspend a Device
      * @param param the request object
      */
  unsuspendDevice(param: DeviceApiUnsuspendDeviceRequest, options?: Configuration): Promise<void>;
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
      * Id of the Device Assurance Policy
      * @type string
      * @memberof DeviceAssuranceApideleteDeviceAssurancePolicy
      */
    deviceAssuranceId: string;
}
export interface DeviceAssuranceApiGetDeviceAssurancePolicyRequest {
    /**
      * Id of the Device Assurance Policy
      * @type string
      * @memberof DeviceAssuranceApigetDeviceAssurancePolicy
      */
    deviceAssuranceId: string;
}
export interface DeviceAssuranceApiListDeviceAssurancePoliciesRequest {
}
export interface DeviceAssuranceApiReplaceDeviceAssurancePolicyRequest {
    /**
      * Id of the Device Assurance Policy
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
      * Creates a new Device Assurance Policy
      * Create a Device Assurance Policy
      * @param param the request object
      */
  createDeviceAssurancePolicy(param: DeviceAssuranceApiCreateDeviceAssurancePolicyRequest, options?: Configuration): Promise<DeviceAssurance>;
  /**
      * Deletes a Device Assurance Policy by `deviceAssuranceId`. If the Device Assurance Policy is currently being used in the org Authentication Policies, the delete will not be allowed.
      * Delete a Device Assurance Policy
      * @param param the request object
      */
  deleteDeviceAssurancePolicy(param: DeviceAssuranceApiDeleteDeviceAssurancePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a Device Assurance Policy by `deviceAssuranceId`
      * Retrieve a Device Assurance Policy
      * @param param the request object
      */
  getDeviceAssurancePolicy(param: DeviceAssuranceApiGetDeviceAssurancePolicyRequest, options?: Configuration): Promise<DeviceAssurance>;
  /**
      * Lists all device assurance policies
      * List all Device Assurance Policies
      * @param param the request object
      */
  listDeviceAssurancePolicies(param?: DeviceAssuranceApiListDeviceAssurancePoliciesRequest, options?: Configuration): Promise<Collection<DeviceAssurance>>;
  /**
      * Replaces a Device Assurance Policy by `deviceAssuranceId`
      * Replace a Device Assurance Policy
      * @param param the request object
      */
  replaceDeviceAssurancePolicy(param: DeviceAssuranceApiReplaceDeviceAssurancePolicyRequest, options?: Configuration): Promise<DeviceAssurance>;
}
import { EmailDomainApiRequestFactory, EmailDomainApiResponseProcessor } from '../apis/EmailDomainApi';
export interface EmailDomainApiCreateEmailDomainRequest {
    /**
      *
      * @type EmailDomain
      * @memberof EmailDomainApicreateEmailDomain
      */
    emailDomain: EmailDomain;
}
export interface EmailDomainApiDeleteEmailDomainRequest {
    /**
      *
      * @type string
      * @memberof EmailDomainApideleteEmailDomain
      */
    emailDomainId: string;
}
export interface EmailDomainApiGetEmailDomainRequest {
    /**
      *
      * @type string
      * @memberof EmailDomainApigetEmailDomain
      */
    emailDomainId: string;
}
export interface EmailDomainApiListEmailDomainBrandsRequest {
    /**
      *
      * @type string
      * @memberof EmailDomainApilistEmailDomainBrands
      */
    emailDomainId: string;
}
export interface EmailDomainApiListEmailDomainsRequest {
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
      * Creates an Email Domain in your org, along with associated username and sender display name
      * Create an Email Domain
      * @param param the request object
      */
  createEmailDomain(param: EmailDomainApiCreateEmailDomainRequest, options?: Configuration): Promise<EmailDomainResponse>;
  /**
      * Deletes an Email Domain by `emailDomainId`
      * Delete an Email Domain
      * @param param the request object
      */
  deleteEmailDomain(param: EmailDomainApiDeleteEmailDomainRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an Email Domain by `emailDomainId`, along with associated username and sender display name
      * Retrieve a Email Domain
      * @param param the request object
      */
  getEmailDomain(param: EmailDomainApiGetEmailDomainRequest, options?: Configuration): Promise<EmailDomainResponse>;
  /**
      * Lists all brands linked to an email domain
      * List all brands linked to an email domain
      * @param param the request object
      */
  listEmailDomainBrands(param: EmailDomainApiListEmailDomainBrandsRequest, options?: Configuration): Promise<Collection<Brand>>;
  /**
      * Lists all the Email Domains in your org, along with associated username and sender display name
      * List all Email Domains
      * @param param the request object
      */
  listEmailDomains(param?: EmailDomainApiListEmailDomainsRequest, options?: Configuration): Promise<EmailDomainListResponse>;
  /**
      * Replaces associated username and sender display name by `emailDomainId`
      * Replace an Email Domain
      * @param param the request object
      */
  replaceEmailDomain(param: EmailDomainApiReplaceEmailDomainRequest, options?: Configuration): Promise<EmailDomainResponse>;
  /**
      * Verifies an Email Domain by `emailDomainId`
      * Verify an Email Domain
      * @param param the request object
      */
  verifyEmailDomain(param: EmailDomainApiVerifyEmailDomainRequest, options?: Configuration): Promise<EmailDomainResponse>;
}
import { EventHookApiRequestFactory, EventHookApiResponseProcessor } from '../apis/EventHookApi';
export interface EventHookApiActivateEventHookRequest {
    /**
      *
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
      *
      * @type string
      * @memberof EventHookApideactivateEventHook
      */
    eventHookId: string;
}
export interface EventHookApiDeleteEventHookRequest {
    /**
      *
      * @type string
      * @memberof EventHookApideleteEventHook
      */
    eventHookId: string;
}
export interface EventHookApiGetEventHookRequest {
    /**
      *
      * @type string
      * @memberof EventHookApigetEventHook
      */
    eventHookId: string;
}
export interface EventHookApiListEventHooksRequest {
}
export interface EventHookApiReplaceEventHookRequest {
    /**
      *
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
      *
      * @type string
      * @memberof EventHookApiverifyEventHook
      */
    eventHookId: string;
}
export declare class ObjectEventHookApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: EventHookApiRequestFactory, responseProcessor?: EventHookApiResponseProcessor);
  /**
      * Activates an event hook
      * Activate an Event Hook
      * @param param the request object
      */
  activateEventHook(param: EventHookApiActivateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Creates an event hook
      * Create an Event Hook
      * @param param the request object
      */
  createEventHook(param: EventHookApiCreateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Deactivates an event hook
      * Deactivate an Event Hook
      * @param param the request object
      */
  deactivateEventHook(param: EventHookApiDeactivateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Deletes an event hook
      * Delete an Event Hook
      * @param param the request object
      */
  deleteEventHook(param: EventHookApiDeleteEventHookRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an event hook
      * Retrieve an Event Hook
      * @param param the request object
      */
  getEventHook(param: EventHookApiGetEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Lists all event hooks
      * List all Event Hooks
      * @param param the request object
      */
  listEventHooks(param?: EventHookApiListEventHooksRequest, options?: Configuration): Promise<Collection<EventHook>>;
  /**
      * Replaces an event hook
      * Replace an Event Hook
      * @param param the request object
      */
  replaceEventHook(param: EventHookApiReplaceEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Verifies an event hook
      * Verify an Event Hook
      * @param param the request object
      */
  verifyEventHook(param: EventHookApiVerifyEventHookRequest, options?: Configuration): Promise<EventHook>;
}
import { FeatureApiRequestFactory, FeatureApiResponseProcessor } from '../apis/FeatureApi';
export interface FeatureApiGetFeatureRequest {
    /**
      *
      * @type string
      * @memberof FeatureApigetFeature
      */
    featureId: string;
}
export interface FeatureApiListFeatureDependenciesRequest {
    /**
      *
      * @type string
      * @memberof FeatureApilistFeatureDependencies
      */
    featureId: string;
}
export interface FeatureApiListFeatureDependentsRequest {
    /**
      *
      * @type string
      * @memberof FeatureApilistFeatureDependents
      */
    featureId: string;
}
export interface FeatureApiListFeaturesRequest {
}
export interface FeatureApiUpdateFeatureLifecycleRequest {
    /**
      *
      * @type string
      * @memberof FeatureApiupdateFeatureLifecycle
      */
    featureId: string;
    /**
      *
      * @type string
      * @memberof FeatureApiupdateFeatureLifecycle
      */
    lifecycle: string;
    /**
      *
      * @type string
      * @memberof FeatureApiupdateFeatureLifecycle
      */
    mode?: string;
}
export declare class ObjectFeatureApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: FeatureApiRequestFactory, responseProcessor?: FeatureApiResponseProcessor);
  /**
      * Retrieves a feature
      * Retrieve a Feature
      * @param param the request object
      */
  getFeature(param: FeatureApiGetFeatureRequest, options?: Configuration): Promise<Feature>;
  /**
      * Lists all dependencies
      * List all Dependencies
      * @param param the request object
      */
  listFeatureDependencies(param: FeatureApiListFeatureDependenciesRequest, options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Lists all dependents
      * List all Dependents
      * @param param the request object
      */
  listFeatureDependents(param: FeatureApiListFeatureDependentsRequest, options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Lists all features
      * List all Features
      * @param param the request object
      */
  listFeatures(param?: FeatureApiListFeaturesRequest, options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Updates a feature lifecycle
      * Update a Feature Lifecycle
      * @param param the request object
      */
  updateFeatureLifecycle(param: FeatureApiUpdateFeatureLifecycleRequest, options?: Configuration): Promise<Feature>;
}
import { GroupApiRequestFactory, GroupApiResponseProcessor } from '../apis/GroupApi';
export interface GroupApiActivateGroupRuleRequest {
    /**
      *
      * @type string
      * @memberof GroupApiactivateGroupRule
      */
    ruleId: string;
}
export interface GroupApiAssignGroupOwnerRequest {
    /**
      *
      * @type string
      * @memberof GroupApiassignGroupOwner
      */
    groupId: string;
    /**
      *
      * @type GroupOwner
      * @memberof GroupApiassignGroupOwner
      */
    GroupOwner: GroupOwner;
}
export interface GroupApiAssignUserToGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiassignUserToGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiassignUserToGroup
      */
    userId: string;
}
export interface GroupApiCreateGroupRequest {
    /**
      *
      * @type Group
      * @memberof GroupApicreateGroup
      */
    group: Group;
}
export interface GroupApiCreateGroupRuleRequest {
    /**
      *
      * @type GroupRule
      * @memberof GroupApicreateGroupRule
      */
    groupRule: GroupRule;
}
export interface GroupApiDeactivateGroupRuleRequest {
    /**
      *
      * @type string
      * @memberof GroupApideactivateGroupRule
      */
    ruleId: string;
}
export interface GroupApiDeleteGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApideleteGroup
      */
    groupId: string;
}
export interface GroupApiDeleteGroupOwnerRequest {
    /**
      *
      * @type string
      * @memberof GroupApideleteGroupOwner
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApideleteGroupOwner
      */
    ownerId: string;
}
export interface GroupApiDeleteGroupRuleRequest {
    /**
      *
      * @type string
      * @memberof GroupApideleteGroupRule
      */
    ruleId: string;
    /**
      * Indicates whether to keep or remove users from groups assigned by this rule.
      * @type boolean
      * @memberof GroupApideleteGroupRule
      */
    removeUsers?: boolean;
}
export interface GroupApiGetGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApigetGroup
      */
    groupId: string;
}
export interface GroupApiGetGroupRuleRequest {
    /**
      *
      * @type string
      * @memberof GroupApigetGroupRule
      */
    ruleId: string;
    /**
      *
      * @type string
      * @memberof GroupApigetGroupRule
      */
    expand?: string;
}
export interface GroupApiListAssignedApplicationsForGroupRequest {
    /**
      *
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
      *
      * @type string
      * @memberof GroupApilistGroupOwners
      */
    groupId: string;
    /**
      * SCIM Filter expression for group owners. Allows to filter owners by type.
      * @type string
      * @memberof GroupApilistGroupOwners
      */
    filter?: string;
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
      * Specifies the keyword to search fules for
      * @type string
      * @memberof GroupApilistGroupRules
      */
    search?: string;
    /**
      * If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
      * @type string
      * @memberof GroupApilistGroupRules
      */
    expand?: string;
}
export interface GroupApiListGroupUsersRequest {
    /**
      *
      * @type string
      * @memberof GroupApilistGroupUsers
      */
    groupId: string;
    /**
      * Specifies the pagination cursor for the next page of users
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
      * Searches the name property of groups for matching value
      * @type string
      * @memberof GroupApilistGroups
      */
    q?: string;
    /**
      * Filter expression for groups
      * @type string
      * @memberof GroupApilistGroups
      */
    filter?: string;
    /**
      * Specifies the pagination cursor for the next page of groups
      * @type string
      * @memberof GroupApilistGroups
      */
    after?: string;
    /**
      * Specifies the number of group results in a page
      * @type number
      * @memberof GroupApilistGroups
      */
    limit?: number;
    /**
      * If specified, it causes additional metadata to be included in the response.
      * @type string
      * @memberof GroupApilistGroups
      */
    expand?: string;
    /**
      * Searches for groups with a supported filtering expression for all attributes except for _embedded, _links, and objectClass
      * @type string
      * @memberof GroupApilistGroups
      */
    search?: string;
    /**
      * Specifies field to sort by and can be any single property (for search queries only).
      * @type string
      * @memberof GroupApilistGroups
      */
    sortBy?: string;
    /**
      * Specifies sort order &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; is not present. Groups with the same value for the &#x60;sortBy&#x60; parameter are ordered by &#x60;id&#x60;.
      * @type string
      * @memberof GroupApilistGroups
      */
    sortOrder?: string;
}
export interface GroupApiReplaceGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApireplaceGroup
      */
    groupId: string;
    /**
      *
      * @type Group
      * @memberof GroupApireplaceGroup
      */
    group: Group;
}
export interface GroupApiReplaceGroupRuleRequest {
    /**
      *
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
      *
      * @type string
      * @memberof GroupApiunassignUserFromGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiunassignUserFromGroup
      */
    userId: string;
}
export declare class ObjectGroupApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: GroupApiRequestFactory, responseProcessor?: GroupApiResponseProcessor);
  /**
      * Activates a specific group rule by `ruleId`
      * Activate a Group Rule
      * @param param the request object
      */
  activateGroupRule(param: GroupApiActivateGroupRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a group owner
      * Assign a Group Owner
      * @param param the request object
      */
  assignGroupOwner(param: GroupApiAssignGroupOwnerRequest, options?: Configuration): Promise<GroupOwner>;
  /**
      * Assigns a user to a group with 'OKTA_GROUP' type
      * Assign a User
      * @param param the request object
      */
  assignUserToGroup(param: GroupApiAssignUserToGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Creates a new group with `OKTA_GROUP` type
      * Create a Group
      * @param param the request object
      */
  createGroup(param: GroupApiCreateGroupRequest, options?: Configuration): Promise<Group>;
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition
      * Create a Group Rule
      * @param param the request object
      */
  createGroupRule(param: GroupApiCreateGroupRuleRequest, options?: Configuration): Promise<GroupRule>;
  /**
      * Deactivates a specific group rule by `ruleId`
      * Deactivate a Group Rule
      * @param param the request object
      */
  deactivateGroupRule(param: GroupApiDeactivateGroupRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a group with `OKTA_GROUP` type
      * Delete a Group
      * @param param the request object
      */
  deleteGroup(param: GroupApiDeleteGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a group owner from a specific group
      * Delete a Group Owner
      * @param param the request object
      */
  deleteGroupOwner(param: GroupApiDeleteGroupOwnerRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a specific group rule by `ruleId`
      * Delete a group Rule
      * @param param the request object
      */
  deleteGroupRule(param: GroupApiDeleteGroupRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a group by `groupId`
      * Retrieve a Group
      * @param param the request object
      */
  getGroup(param: GroupApiGetGroupRequest, options?: Configuration): Promise<Group>;
  /**
      * Retrieves a specific group rule by `ruleId`
      * Retrieve a Group Rule
      * @param param the request object
      */
  getGroupRule(param: GroupApiGetGroupRuleRequest, options?: Configuration): Promise<GroupRule>;
  /**
      * Lists all applications that are assigned to a group
      * List all Assigned Applications
      * @param param the request object
      */
  listAssignedApplicationsForGroup(param: GroupApiListAssignedApplicationsForGroupRequest, options?: Configuration): Promise<Collection<Application>>;
  /**
      * Lists all owners for a specific group
      * List all Group Owners
      * @param param the request object
      */
  listGroupOwners(param: GroupApiListGroupOwnersRequest, options?: Configuration): Promise<Collection<GroupOwner>>;
  /**
      * Lists all group rules
      * List all Group Rules
      * @param param the request object
      */
  listGroupRules(param?: GroupApiListGroupRulesRequest, options?: Configuration): Promise<Collection<GroupRule>>;
  /**
      * Lists all users that are a member of a group
      * List all Member Users
      * @param param the request object
      */
  listGroupUsers(param: GroupApiListGroupUsersRequest, options?: Configuration): Promise<Collection<User>>;
  /**
      * Lists all groups with pagination support. A subset of groups can be returned that match a supported filter expression or query.
      * List all Groups
      * @param param the request object
      */
  listGroups(param?: GroupApiListGroupsRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Replaces the profile for a group with `OKTA_GROUP` type
      * Replace a Group
      * @param param the request object
      */
  replaceGroup(param: GroupApiReplaceGroupRequest, options?: Configuration): Promise<Group>;
  /**
      * Replaces a group rule. Only `INACTIVE` rules can be updated.
      * Replace a Group Rule
      * @param param the request object
      */
  replaceGroupRule(param: GroupApiReplaceGroupRuleRequest, options?: Configuration): Promise<GroupRule>;
  /**
      * Unassigns a user from a group with 'OKTA_GROUP' type
      * Unassign a User
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
      *
      * @type string
      * @memberof HookKeyApideleteHookKey
      */
    hookKeyId: string;
}
export interface HookKeyApiGetHookKeyRequest {
    /**
      *
      * @type string
      * @memberof HookKeyApigetHookKey
      */
    hookKeyId: string;
}
export interface HookKeyApiGetPublicKeyRequest {
    /**
      *
      * @type string
      * @memberof HookKeyApigetPublicKey
      */
    keyId: string;
}
export interface HookKeyApiListHookKeysRequest {
}
export interface HookKeyApiReplaceHookKeyRequest {
    /**
      *
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
      * Creates a key
      * Create a key
      * @param param the request object
      */
  createHookKey(param: HookKeyApiCreateHookKeyRequest, options?: Configuration): Promise<HookKey>;
  /**
      * Deletes a key by `hookKeyId`. Once deleted, the Hook Key is unrecoverable. As a safety precaution, unused keys are eligible for deletion.
      * Delete a key
      * @param param the request object
      */
  deleteHookKey(param: HookKeyApiDeleteHookKeyRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a key by `hookKeyId`
      * Retrieve a key
      * @param param the request object
      */
  getHookKey(param: HookKeyApiGetHookKeyRequest, options?: Configuration): Promise<HookKey>;
  /**
      * Retrieves a public key by `keyId`
      * Retrieve a public key
      * @param param the request object
      */
  getPublicKey(param: HookKeyApiGetPublicKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Lists all keys
      * List all keys
      * @param param the request object
      */
  listHookKeys(param?: HookKeyApiListHookKeysRequest, options?: Configuration): Promise<Collection<HookKey>>;
  /**
      * Replaces a key by `hookKeyId`
      * Replace a key
      * @param param the request object
      */
  replaceHookKey(param: HookKeyApiReplaceHookKeyRequest, options?: Configuration): Promise<HookKey>;
}
import { IdentityProviderApiRequestFactory, IdentityProviderApiResponseProcessor } from '../apis/IdentityProviderApi';
export interface IdentityProviderApiActivateIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApiactivateIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiCloneIdentityProviderKeyRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApicloneIdentityProviderKey
      */
    idpId: string;
    /**
      *
      * @type string
      * @memberof IdentityProviderApicloneIdentityProviderKey
      */
    keyId: string;
    /**
      *
      * @type string
      * @memberof IdentityProviderApicloneIdentityProviderKey
      */
    targetIdpId: string;
}
export interface IdentityProviderApiCreateIdentityProviderRequest {
    /**
      *
      * @type IdentityProvider
      * @memberof IdentityProviderApicreateIdentityProvider
      */
    identityProvider: IdentityProvider;
}
export interface IdentityProviderApiCreateIdentityProviderKeyRequest {
    /**
      *
      * @type JsonWebKey
      * @memberof IdentityProviderApicreateIdentityProviderKey
      */
    jsonWebKey: JsonWebKey;
}
export interface IdentityProviderApiDeactivateIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApideactivateIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiDeleteIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApideleteIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiDeleteIdentityProviderKeyRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApideleteIdentityProviderKey
      */
    keyId: string;
}
export interface IdentityProviderApiGenerateCsrForIdentityProviderRequest {
    /**
      *
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
      *
      * @type string
      * @memberof IdentityProviderApigenerateIdentityProviderSigningKey
      */
    idpId: string;
    /**
      * expiry of the IdP Key Credential
      * @type number
      * @memberof IdentityProviderApigenerateIdentityProviderSigningKey
      */
    validityYears: number;
}
export interface IdentityProviderApiGetCsrForIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApigetCsrForIdentityProvider
      */
    idpId: string;
    /**
      *
      * @type string
      * @memberof IdentityProviderApigetCsrForIdentityProvider
      */
    csrId: string;
}
export interface IdentityProviderApiGetIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApigetIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiGetIdentityProviderApplicationUserRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderApplicationUser
      */
    idpId: string;
    /**
      *
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderApplicationUser
      */
    userId: string;
}
export interface IdentityProviderApiGetIdentityProviderKeyRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderKey
      */
    keyId: string;
}
export interface IdentityProviderApiGetIdentityProviderSigningKeyRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderSigningKey
      */
    idpId: string;
    /**
      *
      * @type string
      * @memberof IdentityProviderApigetIdentityProviderSigningKey
      */
    keyId: string;
}
export interface IdentityProviderApiLinkUserToIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApilinkUserToIdentityProvider
      */
    idpId: string;
    /**
      *
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
export interface IdentityProviderApiListCsrsForIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApilistCsrsForIdentityProvider
      */
    idpId: string;
}
export interface IdentityProviderApiListIdentityProviderApplicationUsersRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApilistIdentityProviderApplicationUsers
      */
    idpId: string;
}
export interface IdentityProviderApiListIdentityProviderKeysRequest {
    /**
      * Specifies the pagination cursor for the next page of keys
      * @type string
      * @memberof IdentityProviderApilistIdentityProviderKeys
      */
    after?: string;
    /**
      * Specifies the number of key results in a page
      * @type number
      * @memberof IdentityProviderApilistIdentityProviderKeys
      */
    limit?: number;
}
export interface IdentityProviderApiListIdentityProviderSigningKeysRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApilistIdentityProviderSigningKeys
      */
    idpId: string;
}
export interface IdentityProviderApiListIdentityProvidersRequest {
    /**
      * Searches the name property of IdPs for matching value
      * @type string
      * @memberof IdentityProviderApilistIdentityProviders
      */
    q?: string;
    /**
      * Specifies the pagination cursor for the next page of IdPs
      * @type string
      * @memberof IdentityProviderApilistIdentityProviders
      */
    after?: string;
    /**
      * Specifies the number of IdP results in a page
      * @type number
      * @memberof IdentityProviderApilistIdentityProviders
      */
    limit?: number;
    /**
      * Filters IdPs by type
      * @type string
      * @memberof IdentityProviderApilistIdentityProviders
      */
    type?: string;
}
export interface IdentityProviderApiListSocialAuthTokensRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApilistSocialAuthTokens
      */
    idpId: string;
    /**
      *
      * @type string
      * @memberof IdentityProviderApilistSocialAuthTokens
      */
    userId: string;
}
export interface IdentityProviderApiPublishCsrForIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApipublishCsrForIdentityProvider
      */
    idpId: string;
    /**
      *
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
      *
      * @type string
      * @memberof IdentityProviderApireplaceIdentityProvider
      */
    idpId: string;
    /**
      *
      * @type IdentityProvider
      * @memberof IdentityProviderApireplaceIdentityProvider
      */
    identityProvider: IdentityProvider;
}
export interface IdentityProviderApiRevokeCsrForIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApirevokeCsrForIdentityProvider
      */
    idpId: string;
    /**
      *
      * @type string
      * @memberof IdentityProviderApirevokeCsrForIdentityProvider
      */
    csrId: string;
}
export interface IdentityProviderApiUnlinkUserFromIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApiunlinkUserFromIdentityProvider
      */
    idpId: string;
    /**
      *
      * @type string
      * @memberof IdentityProviderApiunlinkUserFromIdentityProvider
      */
    userId: string;
}
export declare class ObjectIdentityProviderApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: IdentityProviderApiRequestFactory, responseProcessor?: IdentityProviderApiResponseProcessor);
  /**
      * Activates an inactive IdP
      * Activate an Identity Provider
      * @param param the request object
      */
  activateIdentityProvider(param: IdentityProviderApiActivateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
      * Clone a Signing Credential Key
      * @param param the request object
      */
  cloneIdentityProviderKey(param: IdentityProviderApiCloneIdentityProviderKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Creates a new identity provider integration
      * Create an Identity Provider
      * @param param the request object
      */
  createIdentityProvider(param: IdentityProviderApiCreateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Creates a new X.509 certificate credential to the IdP key store.
      * Create an X.509 Certificate Public Key
      * @param param the request object
      */
  createIdentityProviderKey(param: IdentityProviderApiCreateIdentityProviderKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Deactivates an active IdP
      * Deactivate an Identity Provider
      * @param param the request object
      */
  deactivateIdentityProvider(param: IdentityProviderApiDeactivateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Deletes an identity provider integration by `idpId`
      * Delete an Identity Provider
      * @param param the request object
      */
  deleteIdentityProvider(param: IdentityProviderApiDeleteIdentityProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP
      * Delete a Signing Credential Key
      * @param param the request object
      */
  deleteIdentityProviderKey(param: IdentityProviderApiDeleteIdentityProviderKeyRequest, options?: Configuration): Promise<void>;
  /**
      * Generates a new key pair and returns a Certificate Signing Request for it
      * Generate a Certificate Signing Request
      * @param param the request object
      */
  generateCsrForIdentityProvider(param: IdentityProviderApiGenerateCsrForIdentityProviderRequest, options?: Configuration): Promise<Csr>;
  /**
      * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
      * Generate a new Signing Credential Key
      * @param param the request object
      */
  generateIdentityProviderSigningKey(param: IdentityProviderApiGenerateIdentityProviderSigningKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Retrieves a specific Certificate Signing Request model by id
      * Retrieve a Certificate Signing Request
      * @param param the request object
      */
  getCsrForIdentityProvider(param: IdentityProviderApiGetCsrForIdentityProviderRequest, options?: Configuration): Promise<Csr>;
  /**
      * Retrieves an identity provider integration by `idpId`
      * Retrieve an Identity Provider
      * @param param the request object
      */
  getIdentityProvider(param: IdentityProviderApiGetIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Retrieves a linked IdP user by ID
      * Retrieve a User
      * @param param the request object
      */
  getIdentityProviderApplicationUser(param: IdentityProviderApiGetIdentityProviderApplicationUserRequest, options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Retrieves a specific IdP Key Credential by `kid`
      * Retrieve an Credential Key
      * @param param the request object
      */
  getIdentityProviderKey(param: IdentityProviderApiGetIdentityProviderKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Retrieves a specific IdP Key Credential by `kid`
      * Retrieve a Signing Credential Key
      * @param param the request object
      */
  getIdentityProviderSigningKey(param: IdentityProviderApiGetIdentityProviderSigningKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
      * Link a User to a Social IdP
      * @param param the request object
      */
  linkUserToIdentityProvider(param: IdentityProviderApiLinkUserToIdentityProviderRequest, options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Lists all Certificate Signing Requests for an IdP
      * List all Certificate Signing Requests
      * @param param the request object
      */
  listCsrsForIdentityProvider(param: IdentityProviderApiListCsrsForIdentityProviderRequest, options?: Configuration): Promise<Collection<Csr>>;
  /**
      * Lists all users linked to the identity provider
      * List all Users
      * @param param the request object
      */
  listIdentityProviderApplicationUsers(param: IdentityProviderApiListIdentityProviderApplicationUsersRequest, options?: Configuration): Promise<Collection<IdentityProviderApplicationUser>>;
  /**
      * Lists all IdP key credentials
      * List all Credential Keys
      * @param param the request object
      */
  listIdentityProviderKeys(param?: IdentityProviderApiListIdentityProviderKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Lists all signing key credentials for an IdP
      * List all Signing Credential Keys
      * @param param the request object
      */
  listIdentityProviderSigningKeys(param: IdentityProviderApiListIdentityProviderSigningKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Lists all identity provider integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all Identity Providers
      * @param param the request object
      */
  listIdentityProviders(param?: IdentityProviderApiListIdentityProvidersRequest, options?: Configuration): Promise<Collection<IdentityProvider>>;
  /**
      * Lists the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth
      * List all Tokens from a OIDC Identity Provider
      * @param param the request object
      */
  listSocialAuthTokens(param: IdentityProviderApiListSocialAuthTokensRequest, options?: Configuration): Promise<Collection<SocialAuthToken>>;
  /**
      * Publishes a certificate signing request with a signed X.509 certificate and adds it into the signing key credentials for the IdP
      * Publish a Certificate Signing Request
      * @param param the request object
      */
  publishCsrForIdentityProvider(param: IdentityProviderApiPublishCsrForIdentityProviderRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Replaces an identity provider integration by `idpId`
      * Replace an Identity Provider
      * @param param the request object
      */
  replaceIdentityProvider(param: IdentityProviderApiReplaceIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Revokes a certificate signing request and deletes the key pair from the IdP
      * Revoke a Certificate Signing Request
      * @param param the request object
      */
  revokeCsrForIdentityProvider(param: IdentityProviderApiRevokeCsrForIdentityProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Unlinks the link between the Okta user and the IdP user
      * Unlink a User from IdP
      * @param param the request object
      */
  unlinkUserFromIdentityProvider(param: IdentityProviderApiUnlinkUserFromIdentityProviderRequest, options?: Configuration): Promise<void>;
}
import { IdentitySourceApiRequestFactory, IdentitySourceApiResponseProcessor } from '../apis/IdentitySourceApi';
export interface IdentitySourceApiCreateIdentitySourceSessionRequest {
    /**
      *
      * @type string
      * @memberof IdentitySourceApicreateIdentitySourceSession
      */
    identitySourceId: string;
}
export interface IdentitySourceApiDeleteIdentitySourceSessionRequest {
    /**
      *
      * @type string
      * @memberof IdentitySourceApideleteIdentitySourceSession
      */
    identitySourceId: string;
    /**
      *
      * @type string
      * @memberof IdentitySourceApideleteIdentitySourceSession
      */
    sessionId: string;
}
export interface IdentitySourceApiGetIdentitySourceSessionRequest {
    /**
      *
      * @type string
      * @memberof IdentitySourceApigetIdentitySourceSession
      */
    identitySourceId: string;
    /**
      *
      * @type string
      * @memberof IdentitySourceApigetIdentitySourceSession
      */
    sessionId: string;
}
export interface IdentitySourceApiListIdentitySourceSessionsRequest {
    /**
      *
      * @type string
      * @memberof IdentitySourceApilistIdentitySourceSessions
      */
    identitySourceId: string;
}
export interface IdentitySourceApiStartImportFromIdentitySourceRequest {
    /**
      *
      * @type string
      * @memberof IdentitySourceApistartImportFromIdentitySource
      */
    identitySourceId: string;
    /**
      *
      * @type string
      * @memberof IdentitySourceApistartImportFromIdentitySource
      */
    sessionId: string;
}
export interface IdentitySourceApiUploadIdentitySourceDataForDeleteRequest {
    /**
      *
      * @type string
      * @memberof IdentitySourceApiuploadIdentitySourceDataForDelete
      */
    identitySourceId: string;
    /**
      *
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
      *
      * @type string
      * @memberof IdentitySourceApiuploadIdentitySourceDataForUpsert
      */
    identitySourceId: string;
    /**
      *
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
      * Create an Identity Source Session
      * @param param the request object
      */
  createIdentitySourceSession(param: IdentitySourceApiCreateIdentitySourceSessionRequest, options?: Configuration): Promise<Collection<IdentitySourceSession>>;
  /**
      * Deletes an identity source session for a given `identitySourceId` and `sessionId`
      * Delete an Identity Source Session
      * @param param the request object
      */
  deleteIdentitySourceSession(param: IdentitySourceApiDeleteIdentitySourceSessionRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves an identity source session for a given identity source id and session id
      * Retrieve an Identity Source Session
      * @param param the request object
      */
  getIdentitySourceSession(param: IdentitySourceApiGetIdentitySourceSessionRequest, options?: Configuration): Promise<IdentitySourceSession>;
  /**
      * Lists all identity source sessions for the given identity source instance
      * List all Identity Source Sessions
      * @param param the request object
      */
  listIdentitySourceSessions(param: IdentitySourceApiListIdentitySourceSessionsRequest, options?: Configuration): Promise<Collection<IdentitySourceSession>>;
  /**
      * Starts the import from the identity source described by the uploaded bulk operations
      * Start the import from the Identity Source
      * @param param the request object
      */
  startImportFromIdentitySource(param: IdentitySourceApiStartImportFromIdentitySourceRequest, options?: Configuration): Promise<Collection<IdentitySourceSession>>;
  /**
      * Uploads entities that need to be deleted in Okta from the identity source for the given session
      * Upload the data to be deleted in Okta
      * @param param the request object
      */
  uploadIdentitySourceDataForDelete(param: IdentitySourceApiUploadIdentitySourceDataForDeleteRequest, options?: Configuration): Promise<void>;
  /**
      * Uploads entities that need to be upserted in Okta from the identity source for the given session
      * Upload the data to be upserted in Okta
      * @param param the request object
      */
  uploadIdentitySourceDataForUpsert(param: IdentitySourceApiUploadIdentitySourceDataForUpsertRequest, options?: Configuration): Promise<void>;
}
import { InlineHookApiRequestFactory, InlineHookApiResponseProcessor } from '../apis/InlineHookApi';
export interface InlineHookApiActivateInlineHookRequest {
    /**
      *
      * @type string
      * @memberof InlineHookApiactivateInlineHook
      */
    inlineHookId: string;
}
export interface InlineHookApiCreateInlineHookRequest {
    /**
      *
      * @type InlineHook
      * @memberof InlineHookApicreateInlineHook
      */
    inlineHook: InlineHook;
}
export interface InlineHookApiDeactivateInlineHookRequest {
    /**
      *
      * @type string
      * @memberof InlineHookApideactivateInlineHook
      */
    inlineHookId: string;
}
export interface InlineHookApiDeleteInlineHookRequest {
    /**
      *
      * @type string
      * @memberof InlineHookApideleteInlineHook
      */
    inlineHookId: string;
}
export interface InlineHookApiExecuteInlineHookRequest {
    /**
      *
      * @type string
      * @memberof InlineHookApiexecuteInlineHook
      */
    inlineHookId: string;
    /**
      *
      * @type InlineHookPayload
      * @memberof InlineHookApiexecuteInlineHook
      */
    payloadData: InlineHookPayload;
}
export interface InlineHookApiGetInlineHookRequest {
    /**
      *
      * @type string
      * @memberof InlineHookApigetInlineHook
      */
    inlineHookId: string;
}
export interface InlineHookApiListInlineHooksRequest {
    /**
      *
      * @type string
      * @memberof InlineHookApilistInlineHooks
      */
    type?: string;
}
export interface InlineHookApiReplaceInlineHookRequest {
    /**
      *
      * @type string
      * @memberof InlineHookApireplaceInlineHook
      */
    inlineHookId: string;
    /**
      *
      * @type InlineHook
      * @memberof InlineHookApireplaceInlineHook
      */
    inlineHook: InlineHook;
}
export declare class ObjectInlineHookApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: InlineHookApiRequestFactory, responseProcessor?: InlineHookApiResponseProcessor);
  /**
      * Activates the inline hook by `inlineHookId`
      * Activate an Inline Hook
      * @param param the request object
      */
  activateInlineHook(param: InlineHookApiActivateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Creates an inline hook
      * Create an Inline Hook
      * @param param the request object
      */
  createInlineHook(param: InlineHookApiCreateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Deactivates the inline hook by `inlineHookId`
      * Deactivate an Inline Hook
      * @param param the request object
      */
  deactivateInlineHook(param: InlineHookApiDeactivateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Deletes an inline hook by `inlineHookId`. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete an Inline Hook
      * @param param the request object
      */
  deleteInlineHook(param: InlineHookApiDeleteInlineHookRequest, options?: Configuration): Promise<void>;
  /**
      * Executes the inline hook by `inlineHookId` using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute an Inline Hook
      * @param param the request object
      */
  executeInlineHook(param: InlineHookApiExecuteInlineHookRequest, options?: Configuration): Promise<InlineHookResponse>;
  /**
      * Retrieves an inline hook by `inlineHookId`
      * Retrieve an Inline Hook
      * @param param the request object
      */
  getInlineHook(param: InlineHookApiGetInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Lists all inline hooks
      * List all Inline Hooks
      * @param param the request object
      */
  listInlineHooks(param?: InlineHookApiListInlineHooksRequest, options?: Configuration): Promise<Collection<InlineHook>>;
  /**
      * Replaces an inline hook by `inlineHookId`
      * Replace an Inline Hook
      * @param param the request object
      */
  replaceInlineHook(param: InlineHookApiReplaceInlineHookRequest, options?: Configuration): Promise<InlineHook>;
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
      *
      * @type string
      * @memberof LinkedObjectApideleteLinkedObjectDefinition
      */
    linkedObjectName: string;
}
export interface LinkedObjectApiGetLinkedObjectDefinitionRequest {
    /**
      *
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
      * Creates a linked object definition
      * Create a Linked Object Definition
      * @param param the request object
      */
  createLinkedObjectDefinition(param: LinkedObjectApiCreateLinkedObjectDefinitionRequest, options?: Configuration): Promise<LinkedObject>;
  /**
      * Deletes a linked object definition
      * Delete a Linked Object Definition
      * @param param the request object
      */
  deleteLinkedObjectDefinition(param: LinkedObjectApiDeleteLinkedObjectDefinitionRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a linked object definition
      * Retrieve a Linked Object Definition
      * @param param the request object
      */
  getLinkedObjectDefinition(param: LinkedObjectApiGetLinkedObjectDefinitionRequest, options?: Configuration): Promise<LinkedObject>;
  /**
      * Lists all linked object definitions
      * List all Linked Object Definitions
      * @param param the request object
      */
  listLinkedObjectDefinitions(param?: LinkedObjectApiListLinkedObjectDefinitionsRequest, options?: Configuration): Promise<Collection<LinkedObject>>;
}
import { LogStreamApiRequestFactory, LogStreamApiResponseProcessor } from '../apis/LogStreamApi';
export interface LogStreamApiActivateLogStreamRequest {
    /**
      * id of the log stream
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
      * id of the log stream
      * @type string
      * @memberof LogStreamApideactivateLogStream
      */
    logStreamId: string;
}
export interface LogStreamApiDeleteLogStreamRequest {
    /**
      * id of the log stream
      * @type string
      * @memberof LogStreamApideleteLogStream
      */
    logStreamId: string;
}
export interface LogStreamApiGetLogStreamRequest {
    /**
      * id of the log stream
      * @type string
      * @memberof LogStreamApigetLogStream
      */
    logStreamId: string;
}
export interface LogStreamApiListLogStreamsRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @type string
      * @memberof LogStreamApilistLogStreams
      */
    after?: string;
    /**
      * A limit on the number of objects to return.
      * @type number
      * @memberof LogStreamApilistLogStreams
      */
    limit?: number;
    /**
      * SCIM filter expression that filters the results. This expression only supports the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60;.
      * @type string
      * @memberof LogStreamApilistLogStreams
      */
    filter?: string;
}
export interface LogStreamApiReplaceLogStreamRequest {
    /**
      * id of the log stream
      * @type string
      * @memberof LogStreamApireplaceLogStream
      */
    logStreamId: string;
    /**
      *
      * @type LogStream
      * @memberof LogStreamApireplaceLogStream
      */
    instance: LogStream;
}
export declare class ObjectLogStreamApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: LogStreamApiRequestFactory, responseProcessor?: LogStreamApiResponseProcessor);
  /**
      * Activates a log stream by `logStreamId`
      * Activate a Log Stream
      * @param param the request object
      */
  activateLogStream(param: LogStreamApiActivateLogStreamRequest, options?: Configuration): Promise<LogStream>;
  /**
      * Creates a new log stream
      * Create a Log Stream
      * @param param the request object
      */
  createLogStream(param: LogStreamApiCreateLogStreamRequest, options?: Configuration): Promise<LogStream>;
  /**
      * Deactivates a log stream by `logStreamId`
      * Deactivate a Log Stream
      * @param param the request object
      */
  deactivateLogStream(param: LogStreamApiDeactivateLogStreamRequest, options?: Configuration): Promise<LogStream>;
  /**
      * Deletes a log stream by `logStreamId`
      * Delete a Log Stream
      * @param param the request object
      */
  deleteLogStream(param: LogStreamApiDeleteLogStreamRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a log stream by `logStreamId`
      * Retrieve a Log Stream
      * @param param the request object
      */
  getLogStream(param: LogStreamApiGetLogStreamRequest, options?: Configuration): Promise<LogStream>;
  /**
      * Lists all log streams. You can request a paginated list or a subset of Log Streams that match a supported filter expression.
      * List all Log Streams
      * @param param the request object
      */
  listLogStreams(param?: LogStreamApiListLogStreamsRequest, options?: Configuration): Promise<Collection<LogStream>>;
  /**
      * Replaces a log stream by `logStreamId`
      * Replace a Log Stream
      * @param param the request object
      */
  replaceLogStream(param: LogStreamApiReplaceLogStreamRequest, options?: Configuration): Promise<LogStream>;
}
import { NetworkZoneApiRequestFactory, NetworkZoneApiResponseProcessor } from '../apis/NetworkZoneApi';
export interface NetworkZoneApiActivateNetworkZoneRequest {
    /**
      *
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
      *
      * @type string
      * @memberof NetworkZoneApideactivateNetworkZone
      */
    zoneId: string;
}
export interface NetworkZoneApiDeleteNetworkZoneRequest {
    /**
      *
      * @type string
      * @memberof NetworkZoneApideleteNetworkZone
      */
    zoneId: string;
}
export interface NetworkZoneApiGetNetworkZoneRequest {
    /**
      *
      * @type string
      * @memberof NetworkZoneApigetNetworkZone
      */
    zoneId: string;
}
export interface NetworkZoneApiListNetworkZonesRequest {
    /**
      * Specifies the pagination cursor for the next page of network zones
      * @type string
      * @memberof NetworkZoneApilistNetworkZones
      */
    after?: string;
    /**
      * Specifies the number of results for a page
      * @type number
      * @memberof NetworkZoneApilistNetworkZones
      */
    limit?: number;
    /**
      * Filters zones by usage or id expression
      * @type string
      * @memberof NetworkZoneApilistNetworkZones
      */
    filter?: string;
}
export interface NetworkZoneApiReplaceNetworkZoneRequest {
    /**
      *
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
      * Activates a network zone by `zoneId`
      * Activate a Network Zone
      * @param param the request object
      */
  activateNetworkZone(param: NetworkZoneApiActivateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Creates a new network zone. * At least one of either the `gateways` attribute or `proxies` attribute must be defined when creating a Network Zone. * At least one of the following attributes must be defined: `proxyType`, `locations`, or `asns`.
      * Create a Network Zone
      * @param param the request object
      */
  createNetworkZone(param: NetworkZoneApiCreateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Deactivates a network zone by `zoneId`
      * Deactivate a Network Zone
      * @param param the request object
      */
  deactivateNetworkZone(param: NetworkZoneApiDeactivateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Deletes network zone by `zoneId`
      * Delete a Network Zone
      * @param param the request object
      */
  deleteNetworkZone(param: NetworkZoneApiDeleteNetworkZoneRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a network zone by `zoneId`
      * Retrieve a Network Zone
      * @param param the request object
      */
  getNetworkZone(param: NetworkZoneApiGetNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Lists all network zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id` and `usage` properties. See [Filtering](https://developer.okta.com/docs/reference/core-okta-api/#filter) for more information on the expressions that are used in filtering.
      * List all Network Zones
      * @param param the request object
      */
  listNetworkZones(param?: NetworkZoneApiListNetworkZonesRequest, options?: Configuration): Promise<Collection<NetworkZone>>;
  /**
      * Replaces a network zone by `zoneId`. The replaced network zone type must be the same as the existing type. You may replace the usage (`POLICY`, `BLOCKLIST`) of a network zone by updating the `usage` attribute.
      * Replace a Network Zone
      * @param param the request object
      */
  replaceNetworkZone(param: NetworkZoneApiReplaceNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
}
import { OrgSettingApiRequestFactory, OrgSettingApiResponseProcessor } from '../apis/OrgSettingApi';
export interface OrgSettingApiBulkRemoveEmailAddressBouncesRequest {
    /**
      *
      * @type BouncesRemoveListObj
      * @memberof OrgSettingApibulkRemoveEmailAddressBounces
      */
    BouncesRemoveListObj?: BouncesRemoveListObj;
}
export interface OrgSettingApiExtendOktaSupportRequest {
}
export interface OrgSettingApiGetOktaCommunicationSettingsRequest {
}
export interface OrgSettingApiGetOrgContactTypesRequest {
}
export interface OrgSettingApiGetOrgContactUserRequest {
    /**
      *
      * @type string
      * @memberof OrgSettingApigetOrgContactUser
      */
    contactType: string;
}
export interface OrgSettingApiGetOrgOktaSupportSettingsRequest {
}
export interface OrgSettingApiGetOrgPreferencesRequest {
}
export interface OrgSettingApiGetOrgSettingsRequest {
}
export interface OrgSettingApiGetWellknownOrgMetadataRequest {
}
export interface OrgSettingApiGrantOktaSupportRequest {
}
export interface OrgSettingApiOptInUsersToOktaCommunicationEmailsRequest {
}
export interface OrgSettingApiOptOutUsersFromOktaCommunicationEmailsRequest {
}
export interface OrgSettingApiReplaceOrgContactUserRequest {
    /**
      *
      * @type string
      * @memberof OrgSettingApireplaceOrgContactUser
      */
    contactType: string;
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
    orgSetting: OrgSetting;
}
export interface OrgSettingApiRevokeOktaSupportRequest {
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
export interface OrgSettingApiUploadOrgLogoRequest {
    /**
      *
      * @type HttpFile
      * @memberof OrgSettingApiuploadOrgLogo
      */
    file: HttpFile;
}
export declare class ObjectOrgSettingApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: OrgSettingApiRequestFactory, responseProcessor?: OrgSettingApiResponseProcessor);
  /**
      * Removes a list of email addresses to be removed from the set of email addresses that are bounced
      * Remove Emails from Email Provider Bounce List
      * @param param the request object
      */
  bulkRemoveEmailAddressBounces(param?: OrgSettingApiBulkRemoveEmailAddressBouncesRequest, options?: Configuration): Promise<BouncesRemoveListResult>;
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
      * Extend Okta Support Access
      * @param param the request object
      */
  extendOktaSupport(param?: OrgSettingApiExtendOktaSupportRequest, options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Retrieves Okta Communication Settings of your organization
      * Retrieve the Okta Communication Settings
      * @param param the request object
      */
  getOktaCommunicationSettings(param?: OrgSettingApiGetOktaCommunicationSettingsRequest, options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Retrieves Contact Types of your organization
      * Retrieve the Org Contact Types
      * @param param the request object
      */
  getOrgContactTypes(param?: OrgSettingApiGetOrgContactTypesRequest, options?: Configuration): Promise<Collection<OrgContactTypeObj>>;
  /**
      * Retrieves the URL of the User associated with the specified Contact Type
      * Retrieve the User of the Contact Type
      * @param param the request object
      */
  getOrgContactUser(param: OrgSettingApiGetOrgContactUserRequest, options?: Configuration): Promise<OrgContactUser>;
  /**
      * Retrieves Okta Support Settings of your organization
      * Retrieve the Okta Support Settings
      * @param param the request object
      */
  getOrgOktaSupportSettings(param?: OrgSettingApiGetOrgOktaSupportSettingsRequest, options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Retrieves preferences of your organization
      * Retrieve the Org Preferences
      * @param param the request object
      */
  getOrgPreferences(param?: OrgSettingApiGetOrgPreferencesRequest, options?: Configuration): Promise<OrgPreferences>;
  /**
      * Retrieves the org settings
      * Retrieve the Org Settings
      * @param param the request object
      */
  getOrgSettings(param?: OrgSettingApiGetOrgSettingsRequest, options?: Configuration): Promise<OrgSetting>;
  /**
      * Retrieves the well-known org metadata, which includes the id, configured custom domains, authentication pipeline, and various other org settings
      * Retrieve the Well-Known Org Metadata
      * @param param the request object
      */
  getWellknownOrgMetadata(param?: OrgSettingApiGetWellknownOrgMetadataRequest, options?: Configuration): Promise<WellKnownOrgMetadata>;
  /**
      * Grants Okta Support temporary access your org as an administrator for eight hours
      * Grant Okta Support Access to your Org
      * @param param the request object
      */
  grantOktaSupport(param?: OrgSettingApiGrantOktaSupportRequest, options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Opts in all users of this org to Okta Communication emails
      * Opt in all Users to Okta Communication emails
      * @param param the request object
      */
  optInUsersToOktaCommunicationEmails(param?: OrgSettingApiOptInUsersToOktaCommunicationEmailsRequest, options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Opts out all users of this org from Okta Communication emails
      * Opt out all Users from Okta Communication emails
      * @param param the request object
      */
  optOutUsersFromOktaCommunicationEmails(param?: OrgSettingApiOptOutUsersFromOktaCommunicationEmailsRequest, options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Replaces the User associated with the specified Contact Type
      * Replace the User of the Contact Type
      * @param param the request object
      */
  replaceOrgContactUser(param: OrgSettingApiReplaceOrgContactUserRequest, options?: Configuration): Promise<OrgContactUser>;
  /**
      * Replaces the settings of your organization
      * Replace the Org Settings
      * @param param the request object
      */
  replaceOrgSettings(param: OrgSettingApiReplaceOrgSettingsRequest, options?: Configuration): Promise<OrgSetting>;
  /**
      * Revokes Okta Support access to your organization
      * Revoke Okta Support Access
      * @param param the request object
      */
  revokeOktaSupport(param?: OrgSettingApiRevokeOktaSupportRequest, options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Updates the preference hide the Okta UI footer for all end users of your organization
      * Update the Preference to Hide the Okta Dashboard Footer
      * @param param the request object
      */
  updateOrgHideOktaUIFooter(param?: OrgSettingApiUpdateOrgHideOktaUIFooterRequest, options?: Configuration): Promise<OrgPreferences>;
  /**
      * Partially updates the org settings depending on provided fields
      * Update the Org Settings
      * @param param the request object
      */
  updateOrgSettings(param?: OrgSettingApiUpdateOrgSettingsRequest, options?: Configuration): Promise<OrgSetting>;
  /**
      * Updates the preference to show the Okta UI footer for all end users of your organization
      * Update the Preference to Show the Okta Dashboard Footer
      * @param param the request object
      */
  updateOrgShowOktaUIFooter(param?: OrgSettingApiUpdateOrgShowOktaUIFooterRequest, options?: Configuration): Promise<OrgPreferences>;
  /**
      * Uploads and replaces the logo for your organization. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Org Logo
      * @param param the request object
      */
  uploadOrgLogo(param: OrgSettingApiUploadOrgLogoRequest, options?: Configuration): Promise<void>;
}
import { PolicyApiRequestFactory, PolicyApiResponseProcessor } from '../apis/PolicyApi';
export interface PolicyApiActivatePolicyRequest {
    /**
      *
      * @type string
      * @memberof PolicyApiactivatePolicy
      */
    policyId: string;
}
export interface PolicyApiActivatePolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof PolicyApiactivatePolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof PolicyApiactivatePolicyRule
      */
    ruleId: string;
}
export interface PolicyApiClonePolicyRequest {
    /**
      *
      * @type string
      * @memberof PolicyApiclonePolicy
      */
    policyId: string;
}
export interface PolicyApiCreatePolicyRequest {
    /**
      *
      * @type Policy
      * @memberof PolicyApicreatePolicy
      */
    policy: Policy;
    /**
      *
      * @type boolean
      * @memberof PolicyApicreatePolicy
      */
    activate?: boolean;
}
export interface PolicyApiCreatePolicyRuleRequest {
    /**
      *
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
}
export interface PolicyApiDeactivatePolicyRequest {
    /**
      *
      * @type string
      * @memberof PolicyApideactivatePolicy
      */
    policyId: string;
}
export interface PolicyApiDeactivatePolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof PolicyApideactivatePolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof PolicyApideactivatePolicyRule
      */
    ruleId: string;
}
export interface PolicyApiDeletePolicyRequest {
    /**
      *
      * @type string
      * @memberof PolicyApideletePolicy
      */
    policyId: string;
}
export interface PolicyApiDeletePolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof PolicyApideletePolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof PolicyApideletePolicyRule
      */
    ruleId: string;
}
export interface PolicyApiGetPolicyRequest {
    /**
      *
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
export interface PolicyApiGetPolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof PolicyApigetPolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof PolicyApigetPolicyRule
      */
    ruleId: string;
}
export interface PolicyApiListPoliciesRequest {
    /**
      *
      * @type string
      * @memberof PolicyApilistPolicies
      */
    type: string;
    /**
      *
      * @type string
      * @memberof PolicyApilistPolicies
      */
    status?: string;
    /**
      *
      * @type string
      * @memberof PolicyApilistPolicies
      */
    expand?: string;
}
export interface PolicyApiListPolicyAppsRequest {
    /**
      *
      * @type string
      * @memberof PolicyApilistPolicyApps
      */
    policyId: string;
}
export interface PolicyApiListPolicyRulesRequest {
    /**
      *
      * @type string
      * @memberof PolicyApilistPolicyRules
      */
    policyId: string;
}
export interface PolicyApiReplacePolicyRequest {
    /**
      *
      * @type string
      * @memberof PolicyApireplacePolicy
      */
    policyId: string;
    /**
      *
      * @type Policy
      * @memberof PolicyApireplacePolicy
      */
    policy: Policy;
}
export interface PolicyApiReplacePolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof PolicyApireplacePolicyRule
      */
    policyId: string;
    /**
      *
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
      * Activate a Policy
      * @param param the request object
      */
  activatePolicy(param: PolicyApiActivatePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Activates a policy rule
      * Activate a Policy Rule
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
      * Creates a policy
      * Create a Policy
      * @param param the request object
      */
  createPolicy(param: PolicyApiCreatePolicyRequest, options?: Configuration): Promise<Policy>;
  /**
      * Creates a policy rule
      * Create a Policy Rule
      * @param param the request object
      */
  createPolicyRule(param: PolicyApiCreatePolicyRuleRequest, options?: Configuration): Promise<PolicyRule>;
  /**
      * Deactivates a policy
      * Deactivate a Policy
      * @param param the request object
      */
  deactivatePolicy(param: PolicyApiDeactivatePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates a policy rule
      * Deactivate a Policy Rule
      * @param param the request object
      */
  deactivatePolicyRule(param: PolicyApiDeactivatePolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a policy
      * Delete a Policy
      * @param param the request object
      */
  deletePolicy(param: PolicyApiDeletePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a policy rule
      * Delete a Policy Rule
      * @param param the request object
      */
  deletePolicyRule(param: PolicyApiDeletePolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param param the request object
      */
  getPolicy(param: PolicyApiGetPolicyRequest, options?: Configuration): Promise<Policy>;
  /**
      * Retrieves a policy rule
      * Retrieve a Policy Rule
      * @param param the request object
      */
  getPolicyRule(param: PolicyApiGetPolicyRuleRequest, options?: Configuration): Promise<PolicyRule>;
  /**
      * Lists all policies with the specified type
      * List all Policies
      * @param param the request object
      */
  listPolicies(param: PolicyApiListPoliciesRequest, options?: Configuration): Promise<Collection<Policy>>;
  /**
      * Lists all applications mapped to a policy identified by `policyId`
      * List all Applications mapped to a Policy
      * @param param the request object
      */
  listPolicyApps(param: PolicyApiListPolicyAppsRequest, options?: Configuration): Promise<Collection<Application>>;
  /**
      * Lists all policy rules
      * List all Policy Rules
      * @param param the request object
      */
  listPolicyRules(param: PolicyApiListPolicyRulesRequest, options?: Configuration): Promise<Collection<PolicyRule>>;
  /**
      * Replaces a policy
      * Replace a Policy
      * @param param the request object
      */
  replacePolicy(param: PolicyApiReplacePolicyRequest, options?: Configuration): Promise<Policy>;
  /**
      * Replaces a policy rules
      * Replace a Policy Rule
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
      * id of the Principal Rate Limit
      * @type string
      * @memberof PrincipalRateLimitApigetPrincipalRateLimitEntity
      */
    principalRateLimitId: string;
}
export interface PrincipalRateLimitApiListPrincipalRateLimitEntitiesRequest {
    /**
      *
      * @type string
      * @memberof PrincipalRateLimitApilistPrincipalRateLimitEntities
      */
    filter?: string;
    /**
      *
      * @type string
      * @memberof PrincipalRateLimitApilistPrincipalRateLimitEntities
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof PrincipalRateLimitApilistPrincipalRateLimitEntities
      */
    limit?: number;
}
export interface PrincipalRateLimitApiReplacePrincipalRateLimitEntityRequest {
    /**
      * id of the Principal Rate Limit
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
      * Creates a new Principal Rate Limit entity. In the current release, we only allow one Principal Rate Limit entity per org and principal.
      * Create a Principal Rate Limit
      * @param param the request object
      */
  createPrincipalRateLimitEntity(param: PrincipalRateLimitApiCreatePrincipalRateLimitEntityRequest, options?: Configuration): Promise<PrincipalRateLimitEntity>;
  /**
      * Retrieves a Principal Rate Limit entity by `principalRateLimitId`
      * Retrieve a Principal Rate Limit
      * @param param the request object
      */
  getPrincipalRateLimitEntity(param: PrincipalRateLimitApiGetPrincipalRateLimitEntityRequest, options?: Configuration): Promise<PrincipalRateLimitEntity>;
  /**
      * Lists all Principal Rate Limit entities considering the provided parameters
      * List all Principal Rate Limits
      * @param param the request object
      */
  listPrincipalRateLimitEntities(param?: PrincipalRateLimitApiListPrincipalRateLimitEntitiesRequest, options?: Configuration): Promise<Collection<PrincipalRateLimitEntity>>;
  /**
      * Replaces a principal rate limit entity by `principalRateLimitId`
      * Replace a Principal Rate Limit
      * @param param the request object
      */
  replacePrincipalRateLimitEntity(param: PrincipalRateLimitApiReplacePrincipalRateLimitEntityRequest, options?: Configuration): Promise<PrincipalRateLimitEntity>;
}
import { ProfileMappingApiRequestFactory, ProfileMappingApiResponseProcessor } from '../apis/ProfileMappingApi';
export interface ProfileMappingApiGetProfileMappingRequest {
    /**
      *
      * @type string
      * @memberof ProfileMappingApigetProfileMapping
      */
    mappingId: string;
}
export interface ProfileMappingApiListProfileMappingsRequest {
    /**
      *
      * @type string
      * @memberof ProfileMappingApilistProfileMappings
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof ProfileMappingApilistProfileMappings
      */
    limit?: number;
    /**
      *
      * @type string
      * @memberof ProfileMappingApilistProfileMappings
      */
    sourceId?: string;
    /**
      *
      * @type string
      * @memberof ProfileMappingApilistProfileMappings
      */
    targetId?: string;
}
export interface ProfileMappingApiUpdateProfileMappingRequest {
    /**
      *
      * @type string
      * @memberof ProfileMappingApiupdateProfileMapping
      */
    mappingId: string;
    /**
      *
      * @type ProfileMapping
      * @memberof ProfileMappingApiupdateProfileMapping
      */
    profileMapping: ProfileMapping;
}
export declare class ObjectProfileMappingApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ProfileMappingApiRequestFactory, responseProcessor?: ProfileMappingApiResponseProcessor);
  /**
      * Retrieves a single Profile Mapping referenced by its ID
      * Retrieve a Profile Mapping
      * @param param the request object
      */
  getProfileMapping(param: ProfileMappingApiGetProfileMappingRequest, options?: Configuration): Promise<ProfileMapping>;
  /**
      * Lists all profile mappings with pagination
      * List all Profile Mappings
      * @param param the request object
      */
  listProfileMappings(param?: ProfileMappingApiListProfileMappingsRequest, options?: Configuration): Promise<Collection<ProfileMapping>>;
  /**
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings
      * Update a Profile Mapping
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
      * Creates a new push provider
      * Create a Push Provider
      * @param param the request object
      */
  createPushProvider(param: PushProviderApiCreatePushProviderRequest, options?: Configuration): Promise<PushProvider>;
  /**
      * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
      * Delete a Push Provider
      * @param param the request object
      */
  deletePushProvider(param: PushProviderApiDeletePushProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a push provider by `pushProviderId`
      * Retrieve a Push Provider
      * @param param the request object
      */
  getPushProvider(param: PushProviderApiGetPushProviderRequest, options?: Configuration): Promise<PushProvider>;
  /**
      * Lists all push providers
      * List all Push Providers
      * @param param the request object
      */
  listPushProviders(param?: PushProviderApiListPushProvidersRequest, options?: Configuration): Promise<Collection<PushProvider>>;
  /**
      * Replaces a push provider by `pushProviderId`
      * Replace a Push Provider
      * @param param the request object
      */
  replacePushProvider(param: PushProviderApiReplacePushProviderRequest, options?: Configuration): Promise<PushProvider>;
}
import { RateLimitSettingsApiRequestFactory, RateLimitSettingsApiResponseProcessor } from '../apis/RateLimitSettingsApi';
export interface RateLimitSettingsApiGetRateLimitSettingsAdminNotificationsRequest {
}
export interface RateLimitSettingsApiGetRateLimitSettingsPerClientRequest {
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
export declare class ObjectRateLimitSettingsApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RateLimitSettingsApiRequestFactory, responseProcessor?: RateLimitSettingsApiResponseProcessor);
  /**
      * Retrieves the currently configured Rate Limit Admin Notification Settings
      * Retrieve the Rate Limit Admin Notification Settings
      * @param param the request object
      */
  getRateLimitSettingsAdminNotifications(param?: RateLimitSettingsApiGetRateLimitSettingsAdminNotificationsRequest, options?: Configuration): Promise<RateLimitAdminNotifications>;
  /**
      * Retrieves the currently configured Per-Client Rate Limit Settings
      * Retrieve the Per-Client Rate Limit Settings
      * @param param the request object
      */
  getRateLimitSettingsPerClient(param?: RateLimitSettingsApiGetRateLimitSettingsPerClientRequest, options?: Configuration): Promise<PerClientRateLimitSettings>;
  /**
      * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
      * Replace the Rate Limit Admin Notification Settings
      * @param param the request object
      */
  replaceRateLimitSettingsAdminNotifications(param: RateLimitSettingsApiReplaceRateLimitSettingsAdminNotificationsRequest, options?: Configuration): Promise<RateLimitAdminNotifications>;
  /**
      * Replaces the Per-Client Rate Limit Settings and returns the configured properties
      * Replace the Per-Client Rate Limit Settings
      * @param param the request object
      */
  replaceRateLimitSettingsPerClient(param: RateLimitSettingsApiReplaceRateLimitSettingsPerClientRequest, options?: Configuration): Promise<PerClientRateLimitSettings>;
}
import { ResourceSetApiRequestFactory, ResourceSetApiResponseProcessor } from '../apis/ResourceSetApi';
export interface ResourceSetApiAddMembersToBindingRequest {
    /**
      * &#x60;id&#x60; of a resource set
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
      * &#x60;id&#x60; of a resource set
      * @type string
      * @memberof ResourceSetApiaddResourceSetResource
      */
    resourceSetId: string;
    /**
      *
      * @type ResourceSetResourcePatchRequest
      * @memberof ResourceSetApiaddResourceSetResource
      */
    instance: ResourceSetResourcePatchRequest;
}
export interface ResourceSetApiCreateResourceSetRequest {
    /**
      *
      * @type ResourceSet
      * @memberof ResourceSetApicreateResourceSet
      */
    instance: ResourceSet;
}
export interface ResourceSetApiCreateResourceSetBindingRequest {
    /**
      * &#x60;id&#x60; of a resource set
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
      * &#x60;id&#x60; of a resource set
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
      * &#x60;id&#x60; of a resource set
      * @type string
      * @memberof ResourceSetApideleteResourceSet
      */
    resourceSetId: string;
}
export interface ResourceSetApiDeleteResourceSetResourceRequest {
    /**
      * &#x60;id&#x60; of a resource set
      * @type string
      * @memberof ResourceSetApideleteResourceSetResource
      */
    resourceSetId: string;
    /**
      * &#x60;id&#x60; of a resource
      * @type string
      * @memberof ResourceSetApideleteResourceSetResource
      */
    resourceId: string;
}
export interface ResourceSetApiGetBindingRequest {
    /**
      * &#x60;id&#x60; of a resource set
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
      * &#x60;id&#x60; of a resource set
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
      * &#x60;id&#x60; of a member
      * @type string
      * @memberof ResourceSetApigetMemberOfBinding
      */
    memberId: string;
}
export interface ResourceSetApiGetResourceSetRequest {
    /**
      * &#x60;id&#x60; of a resource set
      * @type string
      * @memberof ResourceSetApigetResourceSet
      */
    resourceSetId: string;
}
export interface ResourceSetApiListBindingsRequest {
    /**
      * &#x60;id&#x60; of a resource set
      * @type string
      * @memberof ResourceSetApilistBindings
      */
    resourceSetId: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @type string
      * @memberof ResourceSetApilistBindings
      */
    after?: string;
}
export interface ResourceSetApiListMembersOfBindingRequest {
    /**
      * &#x60;id&#x60; of a resource set
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
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @type string
      * @memberof ResourceSetApilistMembersOfBinding
      */
    after?: string;
}
export interface ResourceSetApiListResourceSetResourcesRequest {
    /**
      * &#x60;id&#x60; of a resource set
      * @type string
      * @memberof ResourceSetApilistResourceSetResources
      */
    resourceSetId: string;
}
export interface ResourceSetApiListResourceSetsRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @type string
      * @memberof ResourceSetApilistResourceSets
      */
    after?: string;
}
export interface ResourceSetApiReplaceResourceSetRequest {
    /**
      * &#x60;id&#x60; of a resource set
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
export interface ResourceSetApiUnassignMemberFromBindingRequest {
    /**
      * &#x60;id&#x60; of a resource set
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
      * &#x60;id&#x60; of a member
      * @type string
      * @memberof ResourceSetApiunassignMemberFromBinding
      */
    memberId: string;
}
export declare class ObjectResourceSetApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: ResourceSetApiRequestFactory, responseProcessor?: ResourceSetApiResponseProcessor);
  /**
      * Adds more members to a resource set binding
      * Add more Members to a binding
      * @param param the request object
      */
  addMembersToBinding(param: ResourceSetApiAddMembersToBindingRequest, options?: Configuration): Promise<ResourceSetBindingResponse>;
  /**
      * Adds more resources to a resource set
      * Add more Resource to a resource set
      * @param param the request object
      */
  addResourceSetResource(param: ResourceSetApiAddResourceSetResourceRequest, options?: Configuration): Promise<ResourceSet>;
  /**
      * Creates a new resource set
      * Create a Resource Set
      * @param param the request object
      */
  createResourceSet(param: ResourceSetApiCreateResourceSetRequest, options?: Configuration): Promise<ResourceSet>;
  /**
      * Creates a new resource set binding
      * Create a Resource Set Binding
      * @param param the request object
      */
  createResourceSetBinding(param: ResourceSetApiCreateResourceSetBindingRequest, options?: Configuration): Promise<ResourceSetBindingResponse>;
  /**
      * Deletes a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Delete a Binding
      * @param param the request object
      */
  deleteBinding(param: ResourceSetApiDeleteBindingRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a role by `resourceSetId`
      * Delete a Resource Set
      * @param param the request object
      */
  deleteResourceSet(param: ResourceSetApiDeleteResourceSetRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a resource identified by `resourceId` from a resource set
      * Delete a Resource from a resource set
      * @param param the request object
      */
  deleteResourceSetResource(param: ResourceSetApiDeleteResourceSetResourceRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Retrieve a Binding
      * @param param the request object
      */
  getBinding(param: ResourceSetApiGetBindingRequest, options?: Configuration): Promise<ResourceSetBindingResponse>;
  /**
      * Retrieves a member identified by `memberId` for a binding
      * Retrieve a Member of a binding
      * @param param the request object
      */
  getMemberOfBinding(param: ResourceSetApiGetMemberOfBindingRequest, options?: Configuration): Promise<ResourceSetBindingMember>;
  /**
      * Retrieves a resource set by `resourceSetId`
      * Retrieve a Resource Set
      * @param param the request object
      */
  getResourceSet(param: ResourceSetApiGetResourceSetRequest, options?: Configuration): Promise<ResourceSet>;
  /**
      * Lists all resource set bindings with pagination support
      * List all Bindings
      * @param param the request object
      */
  listBindings(param: ResourceSetApiListBindingsRequest, options?: Configuration): Promise<ResourceSetBindings>;
  /**
      * Lists all members of a resource set binding with pagination support
      * List all Members of a binding
      * @param param the request object
      */
  listMembersOfBinding(param: ResourceSetApiListMembersOfBindingRequest, options?: Configuration): Promise<ResourceSetBindingMembers>;
  /**
      * Lists all resources that make up the resource set
      * List all Resources of a resource set
      * @param param the request object
      */
  listResourceSetResources(param: ResourceSetApiListResourceSetResourcesRequest, options?: Configuration): Promise<ResourceSetResources>;
  /**
      * Lists all resource sets with pagination support
      * List all Resource Sets
      * @param param the request object
      */
  listResourceSets(param?: ResourceSetApiListResourceSetsRequest, options?: Configuration): Promise<ResourceSets>;
  /**
      * Replaces a resource set by `resourceSetId`
      * Replace a Resource Set
      * @param param the request object
      */
  replaceResourceSet(param: ResourceSetApiReplaceResourceSetRequest, options?: Configuration): Promise<ResourceSet>;
  /**
      * Unassigns a member identified by `memberId` from a binding
      * Unassign a Member from a binding
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
      * Sends multiple IP risk events to Okta. This request is used by a third-party risk provider to send IP risk events to Okta. The third-party risk provider needs to be registered with Okta before they can send events to Okta. See [Risk Providers](/openapi/okta-management/management/tag/RiskProvider/). This API has a rate limit of 30 requests per minute. You can include multiple risk events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. Prioritize sending high risk signals if you have a burst of signals to send that would exceed the maximum request limits.
      * Send multiple Risk Events
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
      * &#x60;id&#x60; of the Risk Provider object
      * @type string
      * @memberof RiskProviderApideleteRiskProvider
      */
    riskProviderId: string;
}
export interface RiskProviderApiGetRiskProviderRequest {
    /**
      * &#x60;id&#x60; of the Risk Provider object
      * @type string
      * @memberof RiskProviderApigetRiskProvider
      */
    riskProviderId: string;
}
export interface RiskProviderApiListRiskProvidersRequest {
}
export interface RiskProviderApiReplaceRiskProviderRequest {
    /**
      * &#x60;id&#x60; of the Risk Provider object
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
      * Creates a Risk Provider object. A maximum of three Risk Provider objects can be created.
      * Create a Risk Provider
      * @param param the request object
      */
  createRiskProvider(param: RiskProviderApiCreateRiskProviderRequest, options?: Configuration): Promise<RiskProvider>;
  /**
      * Deletes a Risk Provider object by its ID
      * Delete a Risk Provider
      * @param param the request object
      */
  deleteRiskProvider(param: RiskProviderApiDeleteRiskProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a Risk Provider object by ID
      * Retrieve a Risk Provider
      * @param param the request object
      */
  getRiskProvider(param: RiskProviderApiGetRiskProviderRequest, options?: Configuration): Promise<RiskProvider>;
  /**
      * Lists all Risk Provider objects
      * List all Risk Providers
      * @param param the request object
      */
  listRiskProviders(param?: RiskProviderApiListRiskProvidersRequest, options?: Configuration): Promise<Collection<RiskProvider>>;
  /**
      * Replaces the properties for a given Risk Provider object ID
      * Replace a Risk Provider
      * @param param the request object
      */
  replaceRiskProvider(param: RiskProviderApiReplaceRiskProviderRequest, options?: Configuration): Promise<RiskProvider>;
}
import { RoleApiRequestFactory, RoleApiResponseProcessor } from '../apis/RoleApi';
export interface RoleApiCreateRoleRequest {
    /**
      *
      * @type IamRole
      * @memberof RoleApicreateRole
      */
    instance: IamRole;
}
export interface RoleApiCreateRolePermissionRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof RoleApicreateRolePermission
      */
    roleIdOrLabel: string;
    /**
      * An okta permission type
      * @type string
      * @memberof RoleApicreateRolePermission
      */
    permissionType: string;
}
export interface RoleApiDeleteRoleRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof RoleApideleteRole
      */
    roleIdOrLabel: string;
}
export interface RoleApiDeleteRolePermissionRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof RoleApideleteRolePermission
      */
    roleIdOrLabel: string;
    /**
      * An okta permission type
      * @type string
      * @memberof RoleApideleteRolePermission
      */
    permissionType: string;
}
export interface RoleApiGetRoleRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof RoleApigetRole
      */
    roleIdOrLabel: string;
}
export interface RoleApiGetRolePermissionRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof RoleApigetRolePermission
      */
    roleIdOrLabel: string;
    /**
      * An okta permission type
      * @type string
      * @memberof RoleApigetRolePermission
      */
    permissionType: string;
}
export interface RoleApiListRolePermissionsRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof RoleApilistRolePermissions
      */
    roleIdOrLabel: string;
}
export interface RoleApiListRolesRequest {
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @type string
      * @memberof RoleApilistRoles
      */
    after?: string;
}
export interface RoleApiReplaceRoleRequest {
    /**
      * &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @type string
      * @memberof RoleApireplaceRole
      */
    roleIdOrLabel: string;
    /**
      *
      * @type IamRole
      * @memberof RoleApireplaceRole
      */
    instance: IamRole;
}
export declare class ObjectRoleApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RoleApiRequestFactory, responseProcessor?: RoleApiResponseProcessor);
  /**
      * Creates a new role
      * Create a Role
      * @param param the request object
      */
  createRole(param: RoleApiCreateRoleRequest, options?: Configuration): Promise<IamRole>;
  /**
      * Creates a permission specified by `permissionType` to the role
      * Create a Permission
      * @param param the request object
      */
  createRolePermission(param: RoleApiCreateRolePermissionRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a role by `roleIdOrLabel`
      * Delete a Role
      * @param param the request object
      */
  deleteRole(param: RoleApiDeleteRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a permission from a role by `permissionType`
      * Delete a Permission
      * @param param the request object
      */
  deleteRolePermission(param: RoleApiDeleteRolePermissionRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a role by `roleIdOrLabel`
      * Retrieve a Role
      * @param param the request object
      */
  getRole(param: RoleApiGetRoleRequest, options?: Configuration): Promise<IamRole>;
  /**
      * Retrieves a permission by `permissionType`
      * Retrieve a Permission
      * @param param the request object
      */
  getRolePermission(param: RoleApiGetRolePermissionRequest, options?: Configuration): Promise<Permission>;
  /**
      * Lists all permissions of the role by `roleIdOrLabel`
      * List all Permissions
      * @param param the request object
      */
  listRolePermissions(param: RoleApiListRolePermissionsRequest, options?: Configuration): Promise<Permissions>;
  /**
      * Lists all roles with pagination support
      * List all Roles
      * @param param the request object
      */
  listRoles(param?: RoleApiListRolesRequest, options?: Configuration): Promise<IamRoles>;
  /**
      * Replaces a role by `roleIdOrLabel`
      * Replace a Role
      * @param param the request object
      */
  replaceRole(param: RoleApiReplaceRoleRequest, options?: Configuration): Promise<IamRole>;
}
import { RoleAssignmentApiRequestFactory, RoleAssignmentApiResponseProcessor } from '../apis/RoleAssignmentApi';
export interface RoleAssignmentApiAssignRoleToGroupRequest {
    /**
      *
      * @type string
      * @memberof RoleAssignmentApiassignRoleToGroup
      */
    groupId: string;
    /**
      *
      * @type AssignRoleRequest
      * @memberof RoleAssignmentApiassignRoleToGroup
      */
    assignRoleRequest: AssignRoleRequest;
    /**
      * Setting this to &#x60;true&#x60; grants the group third-party admin status
      * @type boolean
      * @memberof RoleAssignmentApiassignRoleToGroup
      */
    disableNotifications?: boolean;
}
export interface RoleAssignmentApiAssignRoleToUserRequest {
    /**
      *
      * @type string
      * @memberof RoleAssignmentApiassignRoleToUser
      */
    userId: string;
    /**
      *
      * @type AssignRoleRequest
      * @memberof RoleAssignmentApiassignRoleToUser
      */
    assignRoleRequest: AssignRoleRequest;
    /**
      * Setting this to &#x60;true&#x60; grants the user third-party admin status
      * @type boolean
      * @memberof RoleAssignmentApiassignRoleToUser
      */
    disableNotifications?: boolean;
}
export interface RoleAssignmentApiGetGroupAssignedRoleRequest {
    /**
      *
      * @type string
      * @memberof RoleAssignmentApigetGroupAssignedRole
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof RoleAssignmentApigetGroupAssignedRole
      */
    roleId: string;
}
export interface RoleAssignmentApiGetUserAssignedRoleRequest {
    /**
      *
      * @type string
      * @memberof RoleAssignmentApigetUserAssignedRole
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleAssignmentApigetUserAssignedRole
      */
    roleId: string;
}
export interface RoleAssignmentApiListAssignedRolesForUserRequest {
    /**
      *
      * @type string
      * @memberof RoleAssignmentApilistAssignedRolesForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleAssignmentApilistAssignedRolesForUser
      */
    expand?: string;
}
export interface RoleAssignmentApiListGroupAssignedRolesRequest {
    /**
      *
      * @type string
      * @memberof RoleAssignmentApilistGroupAssignedRoles
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof RoleAssignmentApilistGroupAssignedRoles
      */
    expand?: string;
}
export interface RoleAssignmentApiUnassignRoleFromGroupRequest {
    /**
      *
      * @type string
      * @memberof RoleAssignmentApiunassignRoleFromGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof RoleAssignmentApiunassignRoleFromGroup
      */
    roleId: string;
}
export interface RoleAssignmentApiUnassignRoleFromUserRequest {
    /**
      *
      * @type string
      * @memberof RoleAssignmentApiunassignRoleFromUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleAssignmentApiunassignRoleFromUser
      */
    roleId: string;
}
export declare class ObjectRoleAssignmentApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RoleAssignmentApiRequestFactory, responseProcessor?: RoleAssignmentApiResponseProcessor);
  /**
      * Assigns a role to a group
      * Assign a Role to a Group
      * @param param the request object
      */
  assignRoleToGroup(param: RoleAssignmentApiAssignRoleToGroupRequest, options?: Configuration): Promise<Role | void>;
  /**
      * Assigns a role to a user identified by `userId`
      * Assign a Role to a User
      * @param param the request object
      */
  assignRoleToUser(param: RoleAssignmentApiAssignRoleToUserRequest, options?: Configuration): Promise<Role>;
  /**
      * Retrieves a role identified by `roleId` assigned to group identified by `groupId`
      * Retrieve a Role assigned to Group
      * @param param the request object
      */
  getGroupAssignedRole(param: RoleAssignmentApiGetGroupAssignedRoleRequest, options?: Configuration): Promise<Role>;
  /**
      * Retrieves a role identified by `roleId` assigned to a user identified by `userId`
      * Retrieve a Role assigned to a User
      * @param param the request object
      */
  getUserAssignedRole(param: RoleAssignmentApiGetUserAssignedRoleRequest, options?: Configuration): Promise<Role>;
  /**
      * Lists all roles assigned to a user identified by `userId`
      * List all Roles assigned to a User
      * @param param the request object
      */
  listAssignedRolesForUser(param: RoleAssignmentApiListAssignedRolesForUserRequest, options?: Configuration): Promise<Collection<Role>>;
  /**
      * Lists all assigned roles of group identified by `groupId`
      * List all Assigned Roles of Group
      * @param param the request object
      */
  listGroupAssignedRoles(param: RoleAssignmentApiListGroupAssignedRolesRequest, options?: Configuration): Promise<Collection<Role>>;
  /**
      * Unassigns a role identified by `roleId` assigned to group identified by `groupId`
      * Unassign a Role from a Group
      * @param param the request object
      */
  unassignRoleFromGroup(param: RoleAssignmentApiUnassignRoleFromGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a role identified by `roleId` from a user identified by `userId`
      * Unassign a Role from a User
      * @param param the request object
      */
  unassignRoleFromUser(param: RoleAssignmentApiUnassignRoleFromUserRequest, options?: Configuration): Promise<void>;
}
import { RoleTargetApiRequestFactory, RoleTargetApiResponseProcessor } from '../apis/RoleTargetApi';
export interface RoleTargetApiAssignAllAppsAsTargetToRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAllAppsAsTargetToRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAllAppsAsTargetToRoleForUser
      */
    roleId: string;
}
export interface RoleTargetApiAssignAppInstanceTargetToAppAdminRoleForGroupRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForGroup
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForGroup
      */
    applicationId: string;
}
export interface RoleTargetApiAssignAppInstanceTargetToAppAdminRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForUser
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppInstanceTargetToAppAdminRoleForUser
      */
    applicationId: string;
}
export interface RoleTargetApiAssignAppTargetToAdminRoleForGroupRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForGroup
      */
    appName: string;
}
export interface RoleTargetApiAssignAppTargetToAdminRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignAppTargetToAdminRoleForUser
      */
    appName: string;
}
export interface RoleTargetApiAssignGroupTargetToGroupAdminRoleRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToGroupAdminRole
      */
    groupId: string;
    /**
      *
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
      *
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToUserRole
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToUserRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiassignGroupTargetToUserRole
      */
    groupId: string;
}
export interface RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForGroupRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    limit?: number;
}
export interface RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof RoleTargetApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    limit?: number;
}
export interface RoleTargetApiListGroupTargetsForGroupRoleRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForGroupRole
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForGroupRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForGroupRole
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof RoleTargetApilistGroupTargetsForGroupRole
      */
    limit?: number;
}
export interface RoleTargetApiListGroupTargetsForRoleRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForRole
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApilistGroupTargetsForRole
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof RoleTargetApilistGroupTargetsForRole
      */
    limit?: number;
}
export interface RoleTargetApiUnassignAppInstanceTargetFromAdminRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetFromAdminRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetFromAdminRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetFromAdminRoleForUser
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetFromAdminRoleForUser
      */
    applicationId: string;
}
export interface RoleTargetApiUnassignAppInstanceTargetToAppAdminRoleForGroupRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetToAppAdminRoleForGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetToAppAdminRoleForGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetToAppAdminRoleForGroup
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppInstanceTargetToAppAdminRoleForGroup
      */
    applicationId: string;
}
export interface RoleTargetApiUnassignAppTargetFromAppAdminRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppTargetFromAppAdminRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppTargetFromAppAdminRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppTargetFromAppAdminRoleForUser
      */
    appName: string;
}
export interface RoleTargetApiUnassignAppTargetToAdminRoleForGroupRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppTargetToAdminRoleForGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppTargetToAdminRoleForGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignAppTargetToAdminRoleForGroup
      */
    appName: string;
}
export interface RoleTargetApiUnassignGroupTargetFromGroupAdminRoleRequest {
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromGroupAdminRole
      */
    groupId: string;
    /**
      *
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
      *
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromUserAdminRole
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromUserAdminRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof RoleTargetApiunassignGroupTargetFromUserAdminRole
      */
    groupId: string;
}
export declare class ObjectRoleTargetApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: RoleTargetApiRequestFactory, responseProcessor?: RoleTargetApiResponseProcessor);
  /**
      * Assigns all Apps as Target to Role
      * Assign all Apps as Target to Role
      * @param param the request object
      */
  assignAllAppsAsTargetToRoleForUser(param: RoleTargetApiAssignAllAppsAsTargetToRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns App Instance Target to App Administrator Role given to a Group
      * Assign an Application Instance Target to Application Administrator Role
      * @param param the request object
      */
  assignAppInstanceTargetToAppAdminRoleForGroup(param: RoleTargetApiAssignAppInstanceTargetToAppAdminRoleForGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns anapplication instance target to appplication administrator role
      * Assign an Application Instance Target to an Application Administrator Role
      * @param param the request object
      */
  assignAppInstanceTargetToAppAdminRoleForUser(param: RoleTargetApiAssignAppInstanceTargetToAppAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param param the request object
      */
  assignAppTargetToAdminRoleForGroup(param: RoleTargetApiAssignAppTargetToAdminRoleForGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param param the request object
      */
  assignAppTargetToAdminRoleForUser(param: RoleTargetApiAssignAppTargetToAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a group target to a group role
      * Assign a Group Target to a Group Role
      * @param param the request object
      */
  assignGroupTargetToGroupAdminRole(param: RoleTargetApiAssignGroupTargetToGroupAdminRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a Group Target to Role
      * Assign a Group Target to Role
      * @param param the request object
      */
  assignGroupTargetToUserRole(param: RoleTargetApiAssignGroupTargetToUserRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for an Application Administrator Role
      * @param param the request object
      */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(param: RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForGroupRequest, options?: Configuration): Promise<Collection<CatalogApplication>>;
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for Application Administrator Role
      * @param param the request object
      */
  listApplicationTargetsForApplicationAdministratorRoleForUser(param: RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForUserRequest, options?: Configuration): Promise<Collection<CatalogApplication>>;
  /**
      * Lists all group targets for a group role
      * List all Group Targets for a Group Role
      * @param param the request object
      */
  listGroupTargetsForGroupRole(param: RoleTargetApiListGroupTargetsForGroupRoleRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Lists all group targets for role
      * List all Group Targets for Role
      * @param param the request object
      */
  listGroupTargetsForRole(param: RoleTargetApiListGroupTargetsForRoleRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Unassigns an application instance target from an application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param param the request object
      */
  unassignAppInstanceTargetFromAdminRoleForUser(param: RoleTargetApiUnassignAppInstanceTargetFromAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns an application instance target from application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param param the request object
      */
  unassignAppInstanceTargetToAppAdminRoleForGroup(param: RoleTargetApiUnassignAppInstanceTargetToAppAdminRoleForGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from an Application Administrator Role
      * @param param the request object
      */
  unassignAppTargetFromAppAdminRoleForUser(param: RoleTargetApiUnassignAppTargetFromAppAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from Application Administrator Role
      * @param param the request object
      */
  unassignAppTargetToAdminRoleForGroup(param: RoleTargetApiUnassignAppTargetToAdminRoleForGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a group target from a group role
      * Unassign a Group Target from a Group Role
      * @param param the request object
      */
  unassignGroupTargetFromGroupAdminRole(param: RoleTargetApiUnassignGroupTargetFromGroupAdminRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a Group Target from Role
      * Unassign a Group Target from Role
      * @param param the request object
      */
  unassignGroupTargetFromUserAdminRole(param: RoleTargetApiUnassignGroupTargetFromUserAdminRoleRequest, options?: Configuration): Promise<void>;
}
import { SchemaApiRequestFactory, SchemaApiResponseProcessor } from '../apis/SchemaApi';
export interface SchemaApiGetAppUISchemaRequest {
    /**
      *
      * @type string
      * @memberof SchemaApigetAppUISchema
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof SchemaApigetAppUISchema
      */
    section: string;
    /**
      *
      * @type string
      * @memberof SchemaApigetAppUISchema
      */
    operation: string;
}
export interface SchemaApiGetAppUISchemaLinksRequest {
    /**
      *
      * @type string
      * @memberof SchemaApigetAppUISchemaLinks
      */
    appName: string;
}
export interface SchemaApiGetApplicationUserSchemaRequest {
    /**
      *
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
      *
      * @type string
      * @memberof SchemaApigetUserSchema
      */
    schemaId: string;
}
export interface SchemaApiListLogStreamSchemasRequest {
}
export interface SchemaApiUpdateApplicationUserProfileRequest {
    /**
      *
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
      *
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
      * Retrieves the UI schema for an Application given `appName`, `section` and `operation`
      * Retrieve the UI schema for a section
      * @param param the request object
      */
  getAppUISchema(param: SchemaApiGetAppUISchemaRequest, options?: Configuration): Promise<ApplicationLayout>;
  /**
      * Retrieves the links for UI schemas for an Application given `appName`
      * Retrieve the links for UI schemas for an Application
      * @param param the request object
      */
  getAppUISchemaLinks(param: SchemaApiGetAppUISchemaLinksRequest, options?: Configuration): Promise<ApplicationLayouts>;
  /**
      * Retrieves the Schema for an App User
      * Retrieve the default Application User Schema for an Application
      * @param param the request object
      */
  getApplicationUserSchema(param: SchemaApiGetApplicationUserSchemaRequest, options?: Configuration): Promise<UserSchema>;
  /**
      * Retrieves the group schema
      * Retrieve the default Group Schema
      * @param param the request object
      */
  getGroupSchema(param?: SchemaApiGetGroupSchemaRequest, options?: Configuration): Promise<GroupSchema>;
  /**
      * Retrieves the schema for a Log Stream type. The `logStreamType` element in the URL specifies the Log Stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
      * Retrieve the Log Stream Schema for the schema type
      * @param param the request object
      */
  getLogStreamSchema(param: SchemaApiGetLogStreamSchemaRequest, options?: Configuration): Promise<LogStreamSchema>;
  /**
      * Retrieves the schema for a Schema Id
      * Retrieve a User Schema
      * @param param the request object
      */
  getUserSchema(param: SchemaApiGetUserSchemaRequest, options?: Configuration): Promise<UserSchema>;
  /**
      * Lists the schema for all log stream types visible for this org
      * List the Log Stream Schemas
      * @param param the request object
      */
  listLogStreamSchemas(param?: SchemaApiListLogStreamSchemasRequest, options?: Configuration): Promise<Collection<LogStreamSchema>>;
  /**
      * Partially updates on the User Profile properties of the Application User Schema
      * Update the default Application User Schema for an Application
      * @param param the request object
      */
  updateApplicationUserProfile(param: SchemaApiUpdateApplicationUserProfileRequest, options?: Configuration): Promise<UserSchema>;
  /**
      * Updates the default group schema. This updates, adds, or removes one or more custom Group Profile properties in the schema.
      * Update the default Group Schema
      * @param param the request object
      */
  updateGroupSchema(param?: SchemaApiUpdateGroupSchemaRequest, options?: Configuration): Promise<GroupSchema>;
  /**
      * Partially updates on the User Profile properties of the user schema
      * Update a User Schema
      * @param param the request object
      */
  updateUserProfile(param: SchemaApiUpdateUserProfileRequest, options?: Configuration): Promise<UserSchema>;
}
import { SessionApiRequestFactory, SessionApiResponseProcessor } from '../apis/SessionApi';
export interface SessionApiCreateSessionRequest {
    /**
      *
      * @type CreateSessionRequest
      * @memberof SessionApicreateSession
      */
    createSessionRequest: CreateSessionRequest;
}
export interface SessionApiGetSessionRequest {
    /**
      * &#x60;id&#x60; of a valid Session
      * @type string
      * @memberof SessionApigetSession
      */
    sessionId: string;
}
export interface SessionApiRefreshSessionRequest {
    /**
      * &#x60;id&#x60; of a valid Session
      * @type string
      * @memberof SessionApirefreshSession
      */
    sessionId: string;
}
export interface SessionApiRevokeSessionRequest {
    /**
      * &#x60;id&#x60; of a valid Session
      * @type string
      * @memberof SessionApirevokeSession
      */
    sessionId: string;
}
export declare class ObjectSessionApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SessionApiRequestFactory, responseProcessor?: SessionApiResponseProcessor);
  /**
      * Creates a new Session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
      * Create a Session with session token
      * @param param the request object
      */
  createSession(param: SessionApiCreateSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * Retrieves information about the Session specified by the given session ID
      * Retrieve a Session
      * @param param the request object
      */
  getSession(param: SessionApiGetSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * Refreshes an existing Session using the `id` for that Session. A successful response contains the refreshed Session with an updated `expiresAt` timestamp.
      * Refresh a Session
      * @param param the request object
      */
  refreshSession(param: SessionApiRefreshSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * Revokes the specified Session
      * Revoke a Session
      * @param param the request object
      */
  revokeSession(param: SessionApiRevokeSessionRequest, options?: Configuration): Promise<void>;
}
import { SubscriptionApiRequestFactory, SubscriptionApiResponseProcessor } from '../apis/SubscriptionApi';
export interface SubscriptionApiListRoleSubscriptionsRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApilistRoleSubscriptions
      */
    roleTypeOrRoleId: string;
}
export interface SubscriptionApiListRoleSubscriptionsByNotificationTypeRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApilistRoleSubscriptionsByNotificationType
      */
    roleTypeOrRoleId: string;
    /**
      *
      * @type string
      * @memberof SubscriptionApilistRoleSubscriptionsByNotificationType
      */
    notificationType: string;
}
export interface SubscriptionApiListUserSubscriptionsRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApilistUserSubscriptions
      */
    userId: string;
}
export interface SubscriptionApiListUserSubscriptionsByNotificationTypeRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApilistUserSubscriptionsByNotificationType
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof SubscriptionApilistUserSubscriptionsByNotificationType
      */
    notificationType: string;
}
export interface SubscriptionApiSubscribeRoleSubscriptionByNotificationTypeRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApisubscribeRoleSubscriptionByNotificationType
      */
    roleTypeOrRoleId: string;
    /**
      *
      * @type string
      * @memberof SubscriptionApisubscribeRoleSubscriptionByNotificationType
      */
    notificationType: string;
}
export interface SubscriptionApiSubscribeUserSubscriptionByNotificationTypeRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApisubscribeUserSubscriptionByNotificationType
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof SubscriptionApisubscribeUserSubscriptionByNotificationType
      */
    notificationType: string;
}
export interface SubscriptionApiUnsubscribeRoleSubscriptionByNotificationTypeRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApiunsubscribeRoleSubscriptionByNotificationType
      */
    roleTypeOrRoleId: string;
    /**
      *
      * @type string
      * @memberof SubscriptionApiunsubscribeRoleSubscriptionByNotificationType
      */
    notificationType: string;
}
export interface SubscriptionApiUnsubscribeUserSubscriptionByNotificationTypeRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApiunsubscribeUserSubscriptionByNotificationType
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof SubscriptionApiunsubscribeUserSubscriptionByNotificationType
      */
    notificationType: string;
}
export declare class ObjectSubscriptionApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SubscriptionApiRequestFactory, responseProcessor?: SubscriptionApiResponseProcessor);
  /**
      * Lists all subscriptions of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role
      * @param param the request object
      */
  listRoleSubscriptions(param: SubscriptionApiListRoleSubscriptionsRequest, options?: Configuration): Promise<Collection<Subscription>>;
  /**
      * Lists all subscriptions with a specific notification type of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role with a specific notification type
      * @param param the request object
      */
  listRoleSubscriptionsByNotificationType(param: SubscriptionApiListRoleSubscriptionsByNotificationTypeRequest, options?: Configuration): Promise<Subscription>;
  /**
      * Lists all subscriptions of a user. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions
      * @param param the request object
      */
  listUserSubscriptions(param: SubscriptionApiListUserSubscriptionsRequest, options?: Configuration): Promise<Collection<Subscription>>;
  /**
      * Lists all the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions by type
      * @param param the request object
      */
  listUserSubscriptionsByNotificationType(param: SubscriptionApiListUserSubscriptionsByNotificationTypeRequest, options?: Configuration): Promise<Subscription>;
  /**
      * Subscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` to a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
      * Subscribe a Custom Role to a specific notification type
      * @param param the request object
      */
  subscribeRoleSubscriptionByNotificationType(param: SubscriptionApiSubscribeRoleSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<void>;
  /**
      * Subscribes a User to a specific notification type. Only the current User can subscribe to a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Subscribe to a specific notification type
      * @param param the request object
      */
  subscribeUserSubscriptionByNotificationType(param: SubscriptionApiSubscribeUserSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<void>;
  /**
      * Unsubscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` from a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
      * Unsubscribe a Custom Role from a specific notification type
      * @param param the request object
      */
  unsubscribeRoleSubscriptionByNotificationType(param: SubscriptionApiUnsubscribeRoleSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<void>;
  /**
      * Unsubscribes a User from a specific notification type. Only the current User can unsubscribe from a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Unsubscribe from a specific notification type
      * @param param the request object
      */
  unsubscribeUserSubscriptionByNotificationType(param: SubscriptionApiUnsubscribeUserSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<void>;
}
import { SystemLogApiRequestFactory, SystemLogApiResponseProcessor } from '../apis/SystemLogApi';
export interface SystemLogApiListLogEventsRequest {
    /**
      *
      * @type Date
      * @memberof SystemLogApilistLogEvents
      */
    since?: Date;
    /**
      *
      * @type Date
      * @memberof SystemLogApilistLogEvents
      */
    until?: Date;
    /**
      *
      * @type string
      * @memberof SystemLogApilistLogEvents
      */
    filter?: string;
    /**
      *
      * @type string
      * @memberof SystemLogApilistLogEvents
      */
    q?: string;
    /**
      *
      * @type number
      * @memberof SystemLogApilistLogEvents
      */
    limit?: number;
    /**
      *
      * @type string
      * @memberof SystemLogApilistLogEvents
      */
    sortOrder?: string;
    /**
      *
      * @type string
      * @memberof SystemLogApilistLogEvents
      */
    after?: string;
}
export declare class ObjectSystemLogApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SystemLogApiRequestFactory, responseProcessor?: SystemLogApiResponseProcessor);
  /**
      * Lists all system log events. The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * List all System Log Events
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
      *
      * @type string
      * @memberof TemplateApideleteSmsTemplate
      */
    templateId: string;
}
export interface TemplateApiGetSmsTemplateRequest {
    /**
      *
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
      *
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
      *
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
      * Create an SMS Template
      * @param param the request object
      */
  createSmsTemplate(param: TemplateApiCreateSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
  /**
      * Deletes an SMS template
      * Delete an SMS Template
      * @param param the request object
      */
  deleteSmsTemplate(param: TemplateApiDeleteSmsTemplateRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a specific template by `id`
      * Retrieve an SMS Template
      * @param param the request object
      */
  getSmsTemplate(param: TemplateApiGetSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
  /**
      * Lists all custom SMS templates. A subset of templates can be returned that match a template type.
      * List all SMS Templates
      * @param param the request object
      */
  listSmsTemplates(param?: TemplateApiListSmsTemplatesRequest, options?: Configuration): Promise<Collection<SmsTemplate>>;
  /**
      * Replaces the SMS template
      * Replace an SMS Template
      * @param param the request object
      */
  replaceSmsTemplate(param: TemplateApiReplaceSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
  /**
      * Updates an SMS template
      * Update an SMS Template
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
      * Retrieves current ThreatInsight configuration
      * Retrieve the ThreatInsight Configuration
      * @param param the request object
      */
  getCurrentConfiguration(param?: ThreatInsightApiGetCurrentConfigurationRequest, options?: Configuration): Promise<ThreatInsightConfiguration>;
  /**
      * Updates ThreatInsight configuration
      * Update the ThreatInsight Configuration
      * @param param the request object
      */
  updateConfiguration(param: ThreatInsightApiUpdateConfigurationRequest, options?: Configuration): Promise<ThreatInsightConfiguration>;
}
import { TrustedOriginApiRequestFactory, TrustedOriginApiResponseProcessor } from '../apis/TrustedOriginApi';
export interface TrustedOriginApiActivateTrustedOriginRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApiactivateTrustedOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiCreateTrustedOriginRequest {
    /**
      *
      * @type TrustedOrigin
      * @memberof TrustedOriginApicreateTrustedOrigin
      */
    trustedOrigin: TrustedOrigin;
}
export interface TrustedOriginApiDeactivateTrustedOriginRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApideactivateTrustedOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiDeleteTrustedOriginRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApideleteTrustedOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiGetTrustedOriginRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApigetTrustedOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiListTrustedOriginsRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApilistTrustedOrigins
      */
    q?: string;
    /**
      *
      * @type string
      * @memberof TrustedOriginApilistTrustedOrigins
      */
    filter?: string;
    /**
      *
      * @type string
      * @memberof TrustedOriginApilistTrustedOrigins
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof TrustedOriginApilistTrustedOrigins
      */
    limit?: number;
}
export interface TrustedOriginApiReplaceTrustedOriginRequest {
    /**
      *
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
      * Activates a trusted origin
      * Activate a Trusted Origin
      * @param param the request object
      */
  activateTrustedOrigin(param: TrustedOriginApiActivateTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Creates a trusted origin
      * Create a Trusted Origin
      * @param param the request object
      */
  createTrustedOrigin(param: TrustedOriginApiCreateTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Deactivates a trusted origin
      * Deactivate a Trusted Origin
      * @param param the request object
      */
  deactivateTrustedOrigin(param: TrustedOriginApiDeactivateTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Deletes a trusted origin
      * Delete a Trusted Origin
      * @param param the request object
      */
  deleteTrustedOrigin(param: TrustedOriginApiDeleteTrustedOriginRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a trusted origin
      * Retrieve a Trusted Origin
      * @param param the request object
      */
  getTrustedOrigin(param: TrustedOriginApiGetTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Lists all trusted origins
      * List all Trusted Origins
      * @param param the request object
      */
  listTrustedOrigins(param?: TrustedOriginApiListTrustedOriginsRequest, options?: Configuration): Promise<Collection<TrustedOrigin>>;
  /**
      * Replaces a trusted origin
      * Replace a Trusted Origin
      * @param param the request object
      */
  replaceTrustedOrigin(param: TrustedOriginApiReplaceTrustedOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
}
import { UserApiRequestFactory, UserApiResponseProcessor } from '../apis/UserApi';
export interface UserApiActivateUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiactivateUser
      */
    userId: string;
    /**
      * Sends an activation email to the user if true
      * @type boolean
      * @memberof UserApiactivateUser
      */
    sendEmail: boolean;
}
export interface UserApiChangePasswordRequest {
    /**
      *
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
      *
      * @type boolean
      * @memberof UserApichangePassword
      */
    strict?: boolean;
}
export interface UserApiChangeRecoveryQuestionRequest {
    /**
      *
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
      * Executes activation lifecycle operation when creating the user
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
      * With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in.
      * @type UserNextLogin
      * @memberof UserApicreateUser
      */
    nextLogin?: UserNextLogin;
}
export interface UserApiDeactivateUserRequest {
    /**
      *
      * @type string
      * @memberof UserApideactivateUser
      */
    userId: string;
    /**
      *
      * @type boolean
      * @memberof UserApideactivateUser
      */
    sendEmail?: boolean;
}
export interface UserApiDeleteLinkedObjectForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApideleteLinkedObjectForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApideleteLinkedObjectForUser
      */
    relationshipName: string;
}
export interface UserApiDeleteUserRequest {
    /**
      *
      * @type string
      * @memberof UserApideleteUser
      */
    userId: string;
    /**
      *
      * @type boolean
      * @memberof UserApideleteUser
      */
    sendEmail?: boolean;
}
export interface UserApiExpirePasswordRequest {
    /**
      *
      * @type string
      * @memberof UserApiexpirePassword
      */
    userId: string;
}
export interface UserApiExpirePasswordAndGetTemporaryPasswordRequest {
    /**
      *
      * @type string
      * @memberof UserApiexpirePasswordAndGetTemporaryPassword
      */
    userId: string;
    /**
      * When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
      * @type boolean
      * @memberof UserApiexpirePasswordAndGetTemporaryPassword
      */
    revokeSessions?: boolean;
}
export interface UserApiForgotPasswordRequest {
    /**
      *
      * @type string
      * @memberof UserApiforgotPassword
      */
    userId: string;
    /**
      *
      * @type boolean
      * @memberof UserApiforgotPassword
      */
    sendEmail?: boolean;
}
export interface UserApiForgotPasswordSetNewPasswordRequest {
    /**
      *
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
      *
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
      * When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
      * @type boolean
      * @memberof UserApigenerateResetPasswordToken
      */
    revokeSessions?: boolean;
}
export interface UserApiGetRefreshTokenForUserAndClientRequest {
    /**
      *
      * @type string
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    clientId: string;
    /**
      *
      * @type string
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    tokenId: string;
    /**
      *
      * @type string
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    expand?: string;
    /**
      *
      * @type number
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    limit?: number;
    /**
      *
      * @type string
      * @memberof UserApigetRefreshTokenForUserAndClient
      */
    after?: string;
}
export interface UserApiGetUserRequest {
    /**
      *
      * @type string
      * @memberof UserApigetUser
      */
    userId: string;
    /**
      * Specifies additional metadata to include in the response. Possible value: &#x60;blocks&#x60;
      * @type string
      * @memberof UserApigetUser
      */
    expand?: string;
}
export interface UserApiGetUserGrantRequest {
    /**
      *
      * @type string
      * @memberof UserApigetUserGrant
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApigetUserGrant
      */
    grantId: string;
    /**
      *
      * @type string
      * @memberof UserApigetUserGrant
      */
    expand?: string;
}
export interface UserApiListAppLinksRequest {
    /**
      *
      * @type string
      * @memberof UserApilistAppLinks
      */
    userId: string;
}
export interface UserApiListGrantsForUserAndClientRequest {
    /**
      *
      * @type string
      * @memberof UserApilistGrantsForUserAndClient
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApilistGrantsForUserAndClient
      */
    clientId: string;
    /**
      *
      * @type string
      * @memberof UserApilistGrantsForUserAndClient
      */
    expand?: string;
    /**
      *
      * @type string
      * @memberof UserApilistGrantsForUserAndClient
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof UserApilistGrantsForUserAndClient
      */
    limit?: number;
}
export interface UserApiListLinkedObjectsForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApilistLinkedObjectsForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApilistLinkedObjectsForUser
      */
    relationshipName: string;
    /**
      *
      * @type string
      * @memberof UserApilistLinkedObjectsForUser
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof UserApilistLinkedObjectsForUser
      */
    limit?: number;
}
export interface UserApiListRefreshTokensForUserAndClientRequest {
    /**
      *
      * @type string
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    clientId: string;
    /**
      *
      * @type string
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    expand?: string;
    /**
      *
      * @type string
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof UserApilistRefreshTokensForUserAndClient
      */
    limit?: number;
}
export interface UserApiListUserBlocksRequest {
    /**
      *
      * @type string
      * @memberof UserApilistUserBlocks
      */
    userId: string;
}
export interface UserApiListUserClientsRequest {
    /**
      *
      * @type string
      * @memberof UserApilistUserClients
      */
    userId: string;
}
export interface UserApiListUserGrantsRequest {
    /**
      *
      * @type string
      * @memberof UserApilistUserGrants
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApilistUserGrants
      */
    scopeId?: string;
    /**
      *
      * @type string
      * @memberof UserApilistUserGrants
      */
    expand?: string;
    /**
      *
      * @type string
      * @memberof UserApilistUserGrants
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof UserApilistUserGrants
      */
    limit?: number;
}
export interface UserApiListUserGroupsRequest {
    /**
      *
      * @type string
      * @memberof UserApilistUserGroups
      */
    userId: string;
}
export interface UserApiListUserIdentityProvidersRequest {
    /**
      *
      * @type string
      * @memberof UserApilistUserIdentityProviders
      */
    userId: string;
}
export interface UserApiListUsersRequest {
    /**
      * Finds a user that matches firstName, lastName, and email properties
      * @type string
      * @memberof UserApilistUsers
      */
    q?: string;
    /**
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
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
      * Filters users with a supported expression for a subset of properties
      * @type string
      * @memberof UserApilistUsers
      */
    filter?: string;
    /**
      * Searches for users with a supported filtering expression for most properties. Okta recommends using this parameter for search for best performance.
      * @type string
      * @memberof UserApilistUsers
      */
    search?: string;
    /**
      *
      * @type string
      * @memberof UserApilistUsers
      */
    sortBy?: string;
    /**
      *
      * @type string
      * @memberof UserApilistUsers
      */
    sortOrder?: string;
}
export interface UserApiReactivateUserRequest {
    /**
      *
      * @type string
      * @memberof UserApireactivateUser
      */
    userId: string;
    /**
      * Sends an activation email to the user if true
      * @type boolean
      * @memberof UserApireactivateUser
      */
    sendEmail?: boolean;
}
export interface UserApiReplaceUserRequest {
    /**
      *
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
      *
      * @type boolean
      * @memberof UserApireplaceUser
      */
    strict?: boolean;
}
export interface UserApiResetFactorsRequest {
    /**
      *
      * @type string
      * @memberof UserApiresetFactors
      */
    userId: string;
}
export interface UserApiRevokeGrantsForUserAndClientRequest {
    /**
      *
      * @type string
      * @memberof UserApirevokeGrantsForUserAndClient
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApirevokeGrantsForUserAndClient
      */
    clientId: string;
}
export interface UserApiRevokeTokenForUserAndClientRequest {
    /**
      *
      * @type string
      * @memberof UserApirevokeTokenForUserAndClient
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApirevokeTokenForUserAndClient
      */
    clientId: string;
    /**
      *
      * @type string
      * @memberof UserApirevokeTokenForUserAndClient
      */
    tokenId: string;
}
export interface UserApiRevokeTokensForUserAndClientRequest {
    /**
      *
      * @type string
      * @memberof UserApirevokeTokensForUserAndClient
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApirevokeTokensForUserAndClient
      */
    clientId: string;
}
export interface UserApiRevokeUserGrantRequest {
    /**
      *
      * @type string
      * @memberof UserApirevokeUserGrant
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApirevokeUserGrant
      */
    grantId: string;
}
export interface UserApiRevokeUserGrantsRequest {
    /**
      *
      * @type string
      * @memberof UserApirevokeUserGrants
      */
    userId: string;
}
export interface UserApiRevokeUserSessionsRequest {
    /**
      *
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
      *
      * @type string
      * @memberof UserApisetLinkedObjectForUser
      */
    associatedUserId: string;
    /**
      *
      * @type string
      * @memberof UserApisetLinkedObjectForUser
      */
    primaryRelationshipName: string;
    /**
      *
      * @type string
      * @memberof UserApisetLinkedObjectForUser
      */
    primaryUserId: string;
}
export interface UserApiSuspendUserRequest {
    /**
      *
      * @type string
      * @memberof UserApisuspendUser
      */
    userId: string;
}
export interface UserApiUnlockUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiunlockUser
      */
    userId: string;
}
export interface UserApiUnsuspendUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiunsuspendUser
      */
    userId: string;
}
export interface UserApiUpdateUserRequest {
    /**
      *
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
      *
      * @type boolean
      * @memberof UserApiupdateUser
      */
    strict?: boolean;
}
export declare class ObjectUserApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor);
  /**
      * Activates a user. This operation can only be performed on users with a `STAGED` status. Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation. The user will have a status of `ACTIVE` when the activation process is complete. > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Activate a User
      * @param param the request object
      */
  activateUser(param: UserApiActivateUserRequest, options?: Configuration): Promise<UserActivationToken>;
  /**
      * Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
      * Change Password
      * @param param the request object
      */
  changePassword(param: UserApiChangePasswordRequest, options?: Configuration): Promise<UserCredentials>;
  /**
      * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
      * Change Recovery Question
      * @param param the request object
      */
  changeRecoveryQuestion(param: UserApiChangeRecoveryQuestionRequest, options?: Configuration): Promise<UserCredentials>;
  /**
      * Creates a new user in your Okta organization with or without credentials<br> > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Create a User
      * @param param the request object
      */
  createUser(param: UserApiCreateUserRequest, options?: Configuration): Promise<User>;
  /**
      * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
      * Deactivate a User
      * @param param the request object
      */
  deactivateUser(param: UserApiDeactivateUserRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Delete a Linked Object
      * @param param the request object
      */
  deleteLinkedObjectForUser(param: UserApiDeleteLinkedObjectForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**. Calling this on an `ACTIVE` user will transition the user to `DEPROVISIONED`.
      * Delete a User
      * @param param the request object
      */
  deleteUser(param: UserApiDeleteUserRequest, options?: Configuration): Promise<void>;
  /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login
      * Expire Password
      * @param param the request object
      */
  expirePassword(param: UserApiExpirePasswordRequest, options?: Configuration): Promise<User>;
  /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response
      * Expire Password and Set Temporary Password
      * @param param the request object
      */
  expirePasswordAndGetTemporaryPassword(param: UserApiExpirePasswordAndGetTemporaryPasswordRequest, options?: Configuration): Promise<TempPassword>;
  /**
      * Initiates the forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
      * Initiate Forgot Password
      * @param param the request object
      */
  forgotPassword(param: UserApiForgotPasswordRequest, options?: Configuration): Promise<ForgotPasswordResponse>;
  /**
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct
      * Reset Password with Recovery Question
      * @param param the request object
      */
  forgotPasswordSetNewPassword(param: UserApiForgotPasswordSetNewPasswordRequest, options?: Configuration): Promise<UserCredentials>;
  /**
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Generate a Reset Password Token
      * @param param the request object
      */
  generateResetPasswordToken(param: UserApiGenerateResetPasswordTokenRequest, options?: Configuration): Promise<ResetPasswordToken>;
  /**
      * Retrieves a refresh token issued for the specified User and Client
      * Retrieve a Refresh Token for a Client
      * @param param the request object
      */
  getRefreshTokenForUserAndClient(param: UserApiGetRefreshTokenForUserAndClientRequest, options?: Configuration): Promise<OAuth2RefreshToken>;
  /**
      * Retrieves a user from your Okta organization
      * Retrieve a User
      * @param param the request object
      */
  getUser(param: UserApiGetUserRequest, options?: Configuration): Promise<User>;
  /**
      * Retrieves a grant for the specified user
      * Retrieve a User Grant
      * @param param the request object
      */
  getUserGrant(param: UserApiGetUserGrantRequest, options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Lists all appLinks for all direct or indirect (via group membership) assigned applications
      * List all Assigned Application Links
      * @param param the request object
      */
  listAppLinks(param: UserApiListAppLinksRequest, options?: Configuration): Promise<Collection<AppLink>>;
  /**
      * Lists all grants for a specified user and client
      * List all Grants for a Client
      * @param param the request object
      */
  listGrantsForUserAndClient(param: UserApiListGrantsForUserAndClientRequest, options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Lists all linked objects for a user, relationshipName can be a primary or associated relationship name
      * List all Linked Objects
      * @param param the request object
      */
  listLinkedObjectsForUser(param: UserApiListLinkedObjectsForUserRequest, options?: Configuration): Promise<Collection<ResponseLinks>>;
  /**
      * Lists all refresh tokens issued for the specified User and Client
      * List all Refresh Tokens for a Client
      * @param param the request object
      */
  listRefreshTokensForUserAndClient(param: UserApiListRefreshTokensForUserAndClientRequest, options?: Configuration): Promise<Collection<OAuth2RefreshToken>>;
  /**
      * Lists information about how the user is blocked from accessing their account
      * List all User Blocks
      * @param param the request object
      */
  listUserBlocks(param: UserApiListUserBlocksRequest, options?: Configuration): Promise<Collection<UserBlock>>;
  /**
      * Lists all client resources for which the specified user has grants or tokens
      * List all Clients
      * @param param the request object
      */
  listUserClients(param: UserApiListUserClientsRequest, options?: Configuration): Promise<Collection<OAuth2Client>>;
  /**
      * Lists all grants for the specified user
      * List all User Grants
      * @param param the request object
      */
  listUserGrants(param: UserApiListUserGrantsRequest, options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Lists all groups of which the user is a member
      * List all Groups
      * @param param the request object
      */
  listUserGroups(param: UserApiListUserGroupsRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Lists the IdPs associated with the user
      * List all Identity Providers
      * @param param the request object
      */
  listUserIdentityProviders(param: UserApiListUserIdentityProvidersRequest, options?: Configuration): Promise<Collection<IdentityProvider>>;
  /**
      * Lists all users that do not have a status of 'DEPROVISIONED' (by default), up to the maximum (200 for most orgs), with pagination.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List all Users
      * @param param the request object
      */
  listUsers(param?: UserApiListUsersRequest, options?: Configuration): Promise<Collection<User>>;
  /**
      * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
      * Reactivate a User
      * @param param the request object
      */
  reactivateUser(param: UserApiReactivateUserRequest, options?: Configuration): Promise<UserActivationToken>;
  /**
      * Replaces a user's profile and/or credentials using strict-update semantics
      * Replace a User
      * @param param the request object
      */
  replaceUser(param: UserApiReplaceUserRequest, options?: Configuration): Promise<User>;
  /**
      * Resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset all Factors
      * @param param the request object
      */
  resetFactors(param: UserApiResetFactorsRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all grants for the specified user and client
      * Revoke all Grants for a Client
      * @param param the request object
      */
  revokeGrantsForUserAndClient(param: UserApiRevokeGrantsForUserAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes the specified refresh token
      * Revoke a Token for a Client
      * @param param the request object
      */
  revokeTokenForUserAndClient(param: UserApiRevokeTokenForUserAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all refresh tokens issued for the specified User and Client
      * Revoke all Refresh Tokens for a Client
      * @param param the request object
      */
  revokeTokensForUserAndClient(param: UserApiRevokeTokensForUserAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes one grant for a specified user
      * Revoke a User Grant
      * @param param the request object
      */
  revokeUserGrant(param: UserApiRevokeUserGrantRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all grants for a specified user
      * Revoke all User Grants
      * @param param the request object
      */
  revokeUserGrants(param: UserApiRevokeUserGrantsRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Revoke all User Sessions
      * @param param the request object
      */
  revokeUserSessions(param: UserApiRevokeUserSessionsRequest, options?: Configuration): Promise<void>;
  /**
      * Creates a linked object for two users
      * Create a Linked Object for two User
      * @param param the request object
      */
  setLinkedObjectForUser(param: UserApiSetLinkedObjectForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
      * Suspend a User
      * @param param the request object
      */
  suspendUser(param: UserApiSuspendUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that is blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password.
      * Unlock a User
      * @param param the request object
      */
  unlockUser(param: UserApiUnlockUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a User
      * @param param the request object
      */
  unsuspendUser(param: UserApiUnsuspendUserRequest, options?: Configuration): Promise<void>;
  /**
      * Updates a user partially determined by the request parameters
      * Update a User
      * @param param the request object
      */
  updateUser(param: UserApiUpdateUserRequest, options?: Configuration): Promise<User>;
}
import { UserFactorApiRequestFactory, UserFactorApiResponseProcessor } from '../apis/UserFactorApi';
export interface UserFactorApiActivateFactorRequest {
    /**
      *
      * @type string
      * @memberof UserFactorApiactivateFactor
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserFactorApiactivateFactor
      */
    factorId: string;
    /**
      *
      * @type ActivateFactorRequest
      * @memberof UserFactorApiactivateFactor
      */
    body?: ActivateFactorRequest;
}
export interface UserFactorApiEnrollFactorRequest {
    /**
      *
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
      *
      * @type boolean
      * @memberof UserFactorApienrollFactor
      */
    updatePhone?: boolean;
    /**
      * id of SMS template (only for SMS factor)
      * @type string
      * @memberof UserFactorApienrollFactor
      */
    templateId?: string;
    /**
      *
      * @type number
      * @memberof UserFactorApienrollFactor
      */
    tokenLifetimeSeconds?: number;
    /**
      *
      * @type boolean
      * @memberof UserFactorApienrollFactor
      */
    activate?: boolean;
}
export interface UserFactorApiGetFactorRequest {
    /**
      *
      * @type string
      * @memberof UserFactorApigetFactor
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserFactorApigetFactor
      */
    factorId: string;
}
export interface UserFactorApiGetFactorTransactionStatusRequest {
    /**
      *
      * @type string
      * @memberof UserFactorApigetFactorTransactionStatus
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserFactorApigetFactorTransactionStatus
      */
    factorId: string;
    /**
      *
      * @type string
      * @memberof UserFactorApigetFactorTransactionStatus
      */
    transactionId: string;
}
export interface UserFactorApiListFactorsRequest {
    /**
      *
      * @type string
      * @memberof UserFactorApilistFactors
      */
    userId: string;
}
export interface UserFactorApiListSupportedFactorsRequest {
    /**
      *
      * @type string
      * @memberof UserFactorApilistSupportedFactors
      */
    userId: string;
}
export interface UserFactorApiListSupportedSecurityQuestionsRequest {
    /**
      *
      * @type string
      * @memberof UserFactorApilistSupportedSecurityQuestions
      */
    userId: string;
}
export interface UserFactorApiUnenrollFactorRequest {
    /**
      *
      * @type string
      * @memberof UserFactorApiunenrollFactor
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserFactorApiunenrollFactor
      */
    factorId: string;
    /**
      *
      * @type boolean
      * @memberof UserFactorApiunenrollFactor
      */
    removeEnrollmentRecovery?: boolean;
}
export interface UserFactorApiVerifyFactorRequest {
    /**
      *
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    factorId: string;
    /**
      *
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    templateId?: string;
    /**
      *
      * @type number
      * @memberof UserFactorApiverifyFactor
      */
    tokenLifetimeSeconds?: number;
    /**
      *
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    X_Forwarded_For?: string;
    /**
      *
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    User_Agent?: string;
    /**
      *
      * @type string
      * @memberof UserFactorApiverifyFactor
      */
    Accept_Language?: string;
    /**
      *
      * @type VerifyFactorRequest
      * @memberof UserFactorApiverifyFactor
      */
    body?: VerifyFactorRequest;
}
export declare class ObjectUserFactorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UserFactorApiRequestFactory, responseProcessor?: UserFactorApiResponseProcessor);
  /**
      * Activates a factor. The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate a Factor
      * @param param the request object
      */
  activateFactor(param: UserFactorApiActivateFactorRequest, options?: Configuration): Promise<UserFactor>;
  /**
      * Enrolls a user with a supported factor
      * Enroll a Factor
      * @param param the request object
      */
  enrollFactor(param: UserFactorApiEnrollFactorRequest, options?: Configuration): Promise<UserFactor>;
  /**
      * Retrieves a factor for the specified user
      * Retrieve a Factor
      * @param param the request object
      */
  getFactor(param: UserFactorApiGetFactorRequest, options?: Configuration): Promise<UserFactor>;
  /**
      * Retrieves the factors verification transaction status
      * Retrieve a Factor Transaction Status
      * @param param the request object
      */
  getFactorTransactionStatus(param: UserFactorApiGetFactorTransactionStatusRequest, options?: Configuration): Promise<VerifyUserFactorResponse>;
  /**
      * Lists all the enrolled factors for the specified user
      * List all Factors
      * @param param the request object
      */
  listFactors(param: UserFactorApiListFactorsRequest, options?: Configuration): Promise<Collection<UserFactor>>;
  /**
      * Lists all the supported factors that can be enrolled for the specified user
      * List all Supported Factors
      * @param param the request object
      */
  listSupportedFactors(param: UserFactorApiListSupportedFactorsRequest, options?: Configuration): Promise<Collection<UserFactor>>;
  /**
      * Lists all available security questions for a user's `question` factor
      * List all Supported Security Questions
      * @param param the request object
      */
  listSupportedSecurityQuestions(param: UserFactorApiListSupportedSecurityQuestionsRequest, options?: Configuration): Promise<Collection<SecurityQuestion>>;
  /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor
      * Unenroll a Factor
      * @param param the request object
      */
  unenrollFactor(param: UserFactorApiUnenrollFactorRequest, options?: Configuration): Promise<void>;
  /**
      * Verifies an OTP for a `token` or `token:hardware` factor
      * Verify an MFA Factor
      * @param param the request object
      */
  verifyFactor(param: UserFactorApiVerifyFactorRequest, options?: Configuration): Promise<VerifyUserFactorResponse>;
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
      * @type UserType
      * @memberof UserTypeApireplaceUserType
      */
    userType: UserType;
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
      * @type UserType
      * @memberof UserTypeApiupdateUserType
      */
    userType: UserType;
}
export declare class ObjectUserTypeApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: UserTypeApiRequestFactory, responseProcessor?: UserTypeApiResponseProcessor);
  /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * Create a User Type
      * @param param the request object
      */
  createUserType(param: UserTypeApiCreateUserTypeRequest, options?: Configuration): Promise<UserType>;
  /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * Delete a User Type
      * @param param the request object
      */
  deleteUserType(param: UserTypeApiDeleteUserTypeRequest, options?: Configuration): Promise<void>;
  /**
      * Retrieves a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Retrieve a User Type
      * @param param the request object
      */
  getUserType(param: UserTypeApiGetUserTypeRequest, options?: Configuration): Promise<UserType>;
  /**
      * Lists all User Types in your org
      * List all User Types
      * @param param the request object
      */
  listUserTypes(param?: UserTypeApiListUserTypesRequest, options?: Configuration): Promise<Collection<UserType>>;
  /**
      * Replaces an existing user type
      * Replace a User Type
      * @param param the request object
      */
  replaceUserType(param: UserTypeApiReplaceUserTypeRequest, options?: Configuration): Promise<UserType>;
  /**
      * Updates an existing User Type
      * Update a User Type
      * @param param the request object
      */
  updateUserType(param: UserTypeApiUpdateUserTypeRequest, options?: Configuration): Promise<UserType>;
}
