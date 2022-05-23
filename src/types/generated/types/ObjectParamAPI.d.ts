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
export interface ApplicationApiCreateApplicationGroupAssignmentRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApicreateApplicationGroupAssignment
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApicreateApplicationGroupAssignment
      */
    groupId: string;
    /**
      *
      * @type ApplicationGroupAssignment
      * @memberof ApplicationApicreateApplicationGroupAssignment
      */
    applicationGroupAssignment?: ApplicationGroupAssignment;
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
export interface ApplicationApiDeleteApplicationGroupAssignmentRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApideleteApplicationGroupAssignment
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApideleteApplicationGroupAssignment
      */
    groupId: string;
}
export interface ApplicationApiDeleteApplicationUserRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApideleteApplicationUser
      */
    appId: string;
    /**
      *
      * @type string
      * @memberof ApplicationApideleteApplicationUser
      */
    userId: string;
    /**
      *
      * @type boolean
      * @memberof ApplicationApideleteApplicationUser
      */
    sendEmail?: boolean;
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
export interface ApplicationApiSetDefaultProvisioningConnectionForApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApisetDefaultProvisioningConnectionForApplication
      */
    appId: string;
    /**
      *
      * @type ProvisioningConnectionRequest
      * @memberof ApplicationApisetDefaultProvisioningConnectionForApplication
      */
    ProvisioningConnectionRequest: ProvisioningConnectionRequest;
    /**
      *
      * @type boolean
      * @memberof ApplicationApisetDefaultProvisioningConnectionForApplication
      */
    activate?: boolean;
}
export interface ApplicationApiUpdateApplicationRequest {
    /**
      *
      * @type string
      * @memberof ApplicationApiupdateApplication
      */
    appId: string;
    /**
      *
      * @type Application
      * @memberof ApplicationApiupdateApplication
      */
    application: Application;
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
      * Activates an inactive application.
      * Activate Application
      * @param param the request object
      */
  activateApplication(param: ApplicationApiActivateApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Activates the default Provisioning Connection for an application.
      * Activate default Provisioning Connection for application
      * @param param the request object
      */
  activateDefaultProvisioningConnectionForApplication(param: ApplicationApiActivateDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
      * Assign User to Application for SSO & Provisioning
      * @param param the request object
      */
  assignUserToApplication(param: ApplicationApiAssignUserToApplicationRequest, options?: Configuration): Promise<AppUser>;
  /**
      * Clones a X.509 certificate for an application key credential from a source application to target application.
      * Clone Application Key Credential
      * @param param the request object
      */
  cloneApplicationKey(param: ApplicationApiCloneApplicationKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Adds a new application to your Okta organization.
      * Add Application
      * @param param the request object
      */
  createApplication(param: ApplicationApiCreateApplicationRequest, options?: Configuration): Promise<Application>;
  /**
      * Assigns a group to an application
      * Assign Group to Application
      * @param param the request object
      */
  createApplicationGroupAssignment(param: ApplicationApiCreateApplicationGroupAssignmentRequest, options?: Configuration): Promise<ApplicationGroupAssignment>;
  /**
      * Deactivates an active application.
      * Deactivate Application
      * @param param the request object
      */
  deactivateApplication(param: ApplicationApiDeactivateApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates the default Provisioning Connection for an application.
      * Deactivate default Provisioning Connection for application
      * @param param the request object
      */
  deactivateDefaultProvisioningConnectionForApplication(param: ApplicationApiDeactivateDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Removes an inactive application.
      * Delete Application
      * @param param the request object
      */
  deleteApplication(param: ApplicationApiDeleteApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Removes a group assignment from an application.
      * Remove Group from Application
      * @param param the request object
      */
  deleteApplicationGroupAssignment(param: ApplicationApiDeleteApplicationGroupAssignmentRequest, options?: Configuration): Promise<void>;
  /**
      * Removes an assignment for a user from an application.
      * Remove User from Application
      * @param param the request object
      */
  deleteApplicationUser(param: ApplicationApiDeleteApplicationUserRequest, options?: Configuration): Promise<void>;
  /**
      * Generates a new X.509 certificate for an application key credential
      * Generate Key Credential for Application
      * @param param the request object
      */
  generateApplicationKey(param: ApplicationApiGenerateApplicationKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Generates a new key pair and returns the Certificate Signing Request for it.
      * Generate Certificate Signing Request for Application
      * @param param the request object
      */
  generateCsrForApplication(param: ApplicationApiGenerateCsrForApplicationRequest, options?: Configuration): Promise<Csr>;
  /**
      * Fetches an application from your Okta organization by `id`.
      * Get Application
      * @param param the request object
      */
  getApplication(param: ApplicationApiGetApplicationRequest, options?: Configuration): Promise<Application>;
  /**
      * Fetches an application group assignment
      * Get Assigned Group for Application
      * @param param the request object
      */
  getApplicationGroupAssignment(param: ApplicationApiGetApplicationGroupAssignmentRequest, options?: Configuration): Promise<ApplicationGroupAssignment>;
  /**
      * Gets a specific application key credential by kid
      * Get Key Credential for Application
      * @param param the request object
      */
  getApplicationKey(param: ApplicationApiGetApplicationKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Fetches a specific user assignment for application by `id`.
      * Get Assigned User for Application
      * @param param the request object
      */
  getApplicationUser(param: ApplicationApiGetApplicationUserRequest, options?: Configuration): Promise<AppUser>;
  /**
      * Fetches a certificate signing request for the app by `id`.
      * Get Certificate Signing Request
      * @param param the request object
      */
  getCsrForApplication(param: ApplicationApiGetCsrForApplicationRequest, options?: Configuration): Promise<Csr>;
  /**
      * Get default Provisioning Connection for application
      * Fetches the default Provisioning Connection for an application.
      * @param param the request object
      */
  getDefaultProvisioningConnectionForApplication(param: ApplicationApiGetDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<ProvisioningConnection>;
  /**
      * Fetches a Feature object for an application.
      * Fetches a Feature object for an application.
      * @param param the request object
      */
  getFeatureForApplication(param: ApplicationApiGetFeatureForApplicationRequest, options?: Configuration): Promise<ApplicationFeature>;
  /**
      * Gets a token for the specified application
      * Get OAuth 2.0 Token for Application
      * @param param the request object
      */
  getOAuth2TokenForApplication(param: ApplicationApiGetOAuth2TokenForApplicationRequest, options?: Configuration): Promise<OAuth2Token>;
  /**
      * Fetches a single scope consent grant for the application
      * Get Scope Consent Grant for Application
      * @param param the request object
      */
  getScopeConsentGrant(param: ApplicationApiGetScopeConsentGrantRequest, options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Grants consent for the application to request an OAuth 2.0 Okta scope
      * Grant Consent to Scope for Application
      * @param param the request object
      */
  grantConsentToScope(param: ApplicationApiGrantConsentToScopeRequest, options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Enumerates group assignments for an application.
      * List Groups Assigned to Application
      * @param param the request object
      */
  listApplicationGroupAssignments(param: ApplicationApiListApplicationGroupAssignmentsRequest, options?: Configuration): Promise<Collection<ApplicationGroupAssignment>>;
  /**
      * Enumerates key credentials for an application
      * List Key Credentials for Application
      * @param param the request object
      */
  listApplicationKeys(param: ApplicationApiListApplicationKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Enumerates all assigned [application users](#application-user-model) for an application.
      * List Users Assigned to Application
      * @param param the request object
      */
  listApplicationUsers(param: ApplicationApiListApplicationUsersRequest, options?: Configuration): Promise<Collection<AppUser>>;
  /**
      * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
      * List Applications
      * @param param the request object
      */
  listApplications(param?: ApplicationApiListApplicationsRequest, options?: Configuration): Promise<Collection<Application>>;
  /**
      * Enumerates Certificate Signing Requests for an application
      * List Certificate Signing Requests for Application
      * @param param the request object
      */
  listCsrsForApplication(param: ApplicationApiListCsrsForApplicationRequest, options?: Configuration): Promise<Collection<Csr>>;
  /**
      * List Features for application
      * Fetches the Feature objects for an application.
      * @param param the request object
      */
  listFeaturesForApplication(param: ApplicationApiListFeaturesForApplicationRequest, options?: Configuration): Promise<Collection<ApplicationFeature>>;
  /**
      * Lists all tokens for the application
      * Lists OAuth 2.0 Tokens for Application
      * @param param the request object
      */
  listOAuth2TokensForApplication(param: ApplicationApiListOAuth2TokensForApplicationRequest, options?: Configuration): Promise<Collection<OAuth2Token>>;
  /**
      * Lists all scope consent grants for the application
      * List Scope Consent Grants for Application
      * @param param the request object
      */
  listScopeConsentGrants(param: ApplicationApiListScopeConsentGrantsRequest, options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Updates a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish Certificate Signing Request
      * @param param the request object
      */
  publishCsrFromApplication(param: ApplicationApiPublishCsrFromApplicationRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Revokes a certificate signing request and deletes the key pair from the application.
      * Revoke Certificate Signing Request
      * @param param the request object
      */
  revokeCsrFromApplication(param: ApplicationApiRevokeCsrFromApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes the specified token for the specified application
      * Revoke an OAuth 2.0 Token for Application
      * @param param the request object
      */
  revokeOAuth2TokenForApplication(param: ApplicationApiRevokeOAuth2TokenForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all tokens for the specified application
      * Revoke All OAuth 2.0 Tokens for Application
      * @param param the request object
      */
  revokeOAuth2TokensForApplication(param: ApplicationApiRevokeOAuth2TokensForApplicationRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes permission for the application to request the given scope
      * Revoke Scope Consent Grant for Application
      * @param param the request object
      */
  revokeScopeConsentGrant(param: ApplicationApiRevokeScopeConsentGrantRequest, options?: Configuration): Promise<void>;
  /**
      * Set default Provisioning Connection for application
      * Sets the default Provisioning Connection for an application.
      * @param param the request object
      */
  setDefaultProvisioningConnectionForApplication(param: ApplicationApiSetDefaultProvisioningConnectionForApplicationRequest, options?: Configuration): Promise<ProvisioningConnection>;
  /**
      * Updates an application in your organization.
      * Update Application
      * @param param the request object
      */
  updateApplication(param: ApplicationApiUpdateApplicationRequest, options?: Configuration): Promise<Application>;
  /**
      * Updates a user's profile for an application
      * Update Application Profile for Assigned User
      * @param param the request object
      */
  updateApplicationUser(param: ApplicationApiUpdateApplicationUserRequest, options?: Configuration): Promise<AppUser>;
  /**
      * Updates a Feature object for an application.
      * Updates a Feature object for an application.
      * @param param the request object
      */
  updateFeatureForApplication(param: ApplicationApiUpdateFeatureForApplicationRequest, options?: Configuration): Promise<ApplicationFeature>;
  /**
      * Update the logo for an application.
      * The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * @param param the request object
      */
  uploadApplicationLogo(param: ApplicationApiUploadApplicationLogoRequest, options?: Configuration): Promise<void>;
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
export interface AuthenticatorApiListAuthenticatorsRequest {
}
export interface AuthenticatorApiUpdateAuthenticatorRequest {
    /**
      *
      * @type string
      * @memberof AuthenticatorApiupdateAuthenticator
      */
    authenticatorId: string;
    /**
      *
      * @type Authenticator
      * @memberof AuthenticatorApiupdateAuthenticator
      */
    authenticator: Authenticator;
}
export declare class ObjectAuthenticatorApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AuthenticatorApiRequestFactory, responseProcessor?: AuthenticatorApiResponseProcessor);
  /**
      * Activates an authenticator by `authenticatorId`.
      * Activate Authenticator
      * @param param the request object
      */
  activateAuthenticator(param: AuthenticatorApiActivateAuthenticatorRequest, options?: Configuration): Promise<Authenticator>;
  /**
      * Deactivates an authenticator by `authenticatorId`.
      * Deactivate Authenticator
      * @param param the request object
      */
  deactivateAuthenticator(param: AuthenticatorApiDeactivateAuthenticatorRequest, options?: Configuration): Promise<Authenticator>;
  /**
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
      * Get Authenticator
      * @param param the request object
      */
  getAuthenticator(param: AuthenticatorApiGetAuthenticatorRequest, options?: Configuration): Promise<Authenticator>;
  /**
      * Enumerates authenticators in your organization.
      * List Authenticators
      * @param param the request object
      */
  listAuthenticators(param?: AuthenticatorApiListAuthenticatorsRequest, options?: Configuration): Promise<Collection<Authenticator>>;
  /**
      * Updates an authenticator
      * Update Authenticator
      * @param param the request object
      */
  updateAuthenticator(param: AuthenticatorApiUpdateAuthenticatorRequest, options?: Configuration): Promise<Authenticator>;
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
      * @type string
      * @memberof AuthorizationServerApilistAuthorizationServers
      */
    limit?: string;
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
export interface AuthorizationServerApiUpdateAuthorizationServerRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateAuthorizationServer
      */
    authServerId: string;
    /**
      *
      * @type AuthorizationServer
      * @memberof AuthorizationServerApiupdateAuthorizationServer
      */
    authorizationServer: AuthorizationServer;
}
export interface AuthorizationServerApiUpdateAuthorizationServerPolicyRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateAuthorizationServerPolicy
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateAuthorizationServerPolicy
      */
    policyId: string;
    /**
      *
      * @type AuthorizationServerPolicy
      * @memberof AuthorizationServerApiupdateAuthorizationServerPolicy
      */
    policy: AuthorizationServerPolicy;
}
export interface AuthorizationServerApiUpdateAuthorizationServerPolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateAuthorizationServerPolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateAuthorizationServerPolicyRule
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateAuthorizationServerPolicyRule
      */
    ruleId: string;
    /**
      *
      * @type AuthorizationServerPolicyRule
      * @memberof AuthorizationServerApiupdateAuthorizationServerPolicyRule
      */
    policyRule: AuthorizationServerPolicyRule;
}
export interface AuthorizationServerApiUpdateOAuth2ClaimRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateOAuth2Claim
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateOAuth2Claim
      */
    claimId: string;
    /**
      *
      * @type OAuth2Claim
      * @memberof AuthorizationServerApiupdateOAuth2Claim
      */
    oAuth2Claim: OAuth2Claim;
}
export interface AuthorizationServerApiUpdateOAuth2ScopeRequest {
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateOAuth2Scope
      */
    authServerId: string;
    /**
      *
      * @type string
      * @memberof AuthorizationServerApiupdateOAuth2Scope
      */
    scopeId: string;
    /**
      *
      * @type OAuth2Scope
      * @memberof AuthorizationServerApiupdateOAuth2Scope
      */
    oAuth2Scope: OAuth2Scope;
}
export declare class ObjectAuthorizationServerApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: AuthorizationServerApiRequestFactory, responseProcessor?: AuthorizationServerApiResponseProcessor);
  /**
      * Success
      * Activate Authorization Server
      * @param param the request object
      */
  activateAuthorizationServer(param: AuthorizationServerApiActivateAuthorizationServerRequest, options?: Configuration): Promise<void>;
  /**
      * Activate Authorization Server Policy
      * Activate Authorization Server Policy
      * @param param the request object
      */
  activateAuthorizationServerPolicy(param: AuthorizationServerApiActivateAuthorizationServerPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Activate Authorization Server Policy Rule
      * Activate Authorization Server Policy Rule
      * @param param the request object
      */
  activateAuthorizationServerPolicyRule(param: AuthorizationServerApiActivateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Create Authorization Server
      * @param param the request object
      */
  createAuthorizationServer(param: AuthorizationServerApiCreateAuthorizationServerRequest, options?: Configuration): Promise<AuthorizationServer | void>;
  /**
      * Success
      * Create Authorization Server Policy
      * @param param the request object
      */
  createAuthorizationServerPolicy(param: AuthorizationServerApiCreateAuthorizationServerPolicyRequest, options?: Configuration): Promise<void | AuthorizationServerPolicy>;
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy.
      * Create Authorization Server Policy Rule
      * @param param the request object
      */
  createAuthorizationServerPolicyRule(param: AuthorizationServerApiCreateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Success
      * Create Custom OAuth 2.0 Token Claim
      * @param param the request object
      */
  createOAuth2Claim(param: AuthorizationServerApiCreateOAuth2ClaimRequest, options?: Configuration): Promise<void | OAuth2Claim>;
  /**
      * Success
      * Create Oauth2scope
      * @param param the request object
      */
  createOAuth2Scope(param: AuthorizationServerApiCreateOAuth2ScopeRequest, options?: Configuration): Promise<void | OAuth2Scope>;
  /**
      * Success
      * Deactivate Authorization Server
      * @param param the request object
      */
  deactivateAuthorizationServer(param: AuthorizationServerApiDeactivateAuthorizationServerRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivate Authorization Server Policy
      * Deactivate Authorization Server Policy
      * @param param the request object
      */
  deactivateAuthorizationServerPolicy(param: AuthorizationServerApiDeactivateAuthorizationServerPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivate Authorization Server Policy Rule
      * Deactivate Authorization Server Policy Rule
      * @param param the request object
      */
  deactivateAuthorizationServerPolicyRule(param: AuthorizationServerApiDeactivateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Delete Authorization Server
      * @param param the request object
      */
  deleteAuthorizationServer(param: AuthorizationServerApiDeleteAuthorizationServerRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Delete Authorization Server Policy
      * @param param the request object
      */
  deleteAuthorizationServerPolicy(param: AuthorizationServerApiDeleteAuthorizationServerPolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Delete Authorization Server Policy Rule
      * @param param the request object
      */
  deleteAuthorizationServerPolicyRule(param: AuthorizationServerApiDeleteAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Delete Custom OAuth 2.0 Token Claim
      * @param param the request object
      */
  deleteOAuth2Claim(param: AuthorizationServerApiDeleteOAuth2ClaimRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Delete Oauth2scope
      * @param param the request object
      */
  deleteOAuth2Scope(param: AuthorizationServerApiDeleteOAuth2ScopeRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Get Authorization Server
      * @param param the request object
      */
  getAuthorizationServer(param: AuthorizationServerApiGetAuthorizationServerRequest, options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Success
      * Get Authorization Server Policy
      * @param param the request object
      */
  getAuthorizationServerPolicy(param: AuthorizationServerApiGetAuthorizationServerPolicyRequest, options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.
      * Get Authorization Server Policy Rule
      * @param param the request object
      */
  getAuthorizationServerPolicyRule(param: AuthorizationServerApiGetAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Success
      * Get Oauth2claim
      * @param param the request object
      */
  getOAuth2Claim(param: AuthorizationServerApiGetOAuth2ClaimRequest, options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Success
      * Get Oauth2scope
      * @param param the request object
      */
  getOAuth2Scope(param: AuthorizationServerApiGetOAuth2ScopeRequest, options?: Configuration): Promise<OAuth2Scope>;
  /**
      * Success
      * Get Refresh Token for Authorization Server and Client
      * @param param the request object
      */
  getRefreshTokenForAuthorizationServerAndClient(param: AuthorizationServerApiGetRefreshTokenForAuthorizationServerAndClientRequest, options?: Configuration): Promise<OAuth2RefreshToken>;
  /**
      * Success
      * List Authorization Server Keys
      * @param param the request object
      */
  listAuthorizationServerKeys(param: AuthorizationServerApiListAuthorizationServerKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Success
      * List Authorization Server Policies
      * @param param the request object
      */
  listAuthorizationServerPolicies(param: AuthorizationServerApiListAuthorizationServerPoliciesRequest, options?: Configuration): Promise<Collection<AuthorizationServerPolicy>>;
  /**
      * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
      * List Authorization Server Policy Rules
      * @param param the request object
      */
  listAuthorizationServerPolicyRules(param: AuthorizationServerApiListAuthorizationServerPolicyRulesRequest, options?: Configuration): Promise<Collection<AuthorizationServerPolicyRule>>;
  /**
      * Success
      * List Authorization Servers
      * @param param the request object
      */
  listAuthorizationServers(param?: AuthorizationServerApiListAuthorizationServersRequest, options?: Configuration): Promise<Collection<AuthorizationServer>>;
  /**
      * Success
      * List Custom OAuth 2.0 Token Claims
      * @param param the request object
      */
  listOAuth2Claims(param: AuthorizationServerApiListOAuth2ClaimsRequest, options?: Configuration): Promise<Collection<OAuth2Claim>>;
  /**
      * Success
      * List Oauth2clients for Authorization Server
      * @param param the request object
      */
  listOAuth2ClientsForAuthorizationServer(param: AuthorizationServerApiListOAuth2ClientsForAuthorizationServerRequest, options?: Configuration): Promise<Collection<OAuth2Client>>;
  /**
      * Success
      * List Oauth2scopes
      * @param param the request object
      */
  listOAuth2Scopes(param: AuthorizationServerApiListOAuth2ScopesRequest, options?: Configuration): Promise<Collection<OAuth2Scope>>;
  /**
      * Success
      * List Refresh Tokens for Authorization Server and Client
      * @param param the request object
      */
  listRefreshTokensForAuthorizationServerAndClient(param: AuthorizationServerApiListRefreshTokensForAuthorizationServerAndClientRequest, options?: Configuration): Promise<Collection<OAuth2RefreshToken>>;
  /**
      * Success
      * Revoke Refresh Token for Authorization Server and Client
      * @param param the request object
      */
  revokeRefreshTokenForAuthorizationServerAndClient(param: AuthorizationServerApiRevokeRefreshTokenForAuthorizationServerAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Revoke Refresh Tokens for Authorization Server and Client
      * @param param the request object
      */
  revokeRefreshTokensForAuthorizationServerAndClient(param: AuthorizationServerApiRevokeRefreshTokensForAuthorizationServerAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Rotate Authorization Server Keys
      * @param param the request object
      */
  rotateAuthorizationServerKeys(param: AuthorizationServerApiRotateAuthorizationServerKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Success
      * Update Authorization Server
      * @param param the request object
      */
  updateAuthorizationServer(param: AuthorizationServerApiUpdateAuthorizationServerRequest, options?: Configuration): Promise<AuthorizationServer>;
  /**
      * Success
      * Update Authorization Server Policy
      * @param param the request object
      */
  updateAuthorizationServerPolicy(param: AuthorizationServerApiUpdateAuthorizationServerPolicyRequest, options?: Configuration): Promise<AuthorizationServerPolicy>;
  /**
      * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Update Authorization Server Policy Rule
      * @param param the request object
      */
  updateAuthorizationServerPolicyRule(param: AuthorizationServerApiUpdateAuthorizationServerPolicyRuleRequest, options?: Configuration): Promise<AuthorizationServerPolicyRule>;
  /**
      * Success
      * Update Custom OAuth 2.0 Token Claim
      * @param param the request object
      */
  updateOAuth2Claim(param: AuthorizationServerApiUpdateOAuth2ClaimRequest, options?: Configuration): Promise<OAuth2Claim>;
  /**
      * Success
      * Update Oauth2scope
      * @param param the request object
      */
  updateOAuth2Scope(param: AuthorizationServerApiUpdateOAuth2ScopeRequest, options?: Configuration): Promise<OAuth2Scope>;
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
export interface CAPTCHAApiPartialUpdateCaptchaInstanceRequest {
    /**
      * id of the CAPTCHA
      * @type string
      * @memberof CAPTCHAApipartialUpdateCaptchaInstance
      */
    captchaId: string;
    /**
      *
      * @type CAPTCHAInstance
      * @memberof CAPTCHAApipartialUpdateCaptchaInstance
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
      * Adds a new CAPTCHA instance to your organization. In the current release, we only allow one CAPTCHA instance per org.
      * Create new CAPTCHA instance
      * @param param the request object
      */
  createCaptchaInstance(param: CAPTCHAApiCreateCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Delete a CAPTCHA instance by `id`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete CAPTCHA Instance
      * @param param the request object
      */
  deleteCaptchaInstance(param: CAPTCHAApiDeleteCaptchaInstanceRequest, options?: Configuration): Promise<void>;
  /**
      * Fetches a CAPTCHA instance by `id`.
      * Get CAPTCHA Instance
      * @param param the request object
      */
  getCaptchaInstance(param: CAPTCHAApiGetCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Enumerates CAPTCHA instances in your organization with pagination. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List CAPTCHA instances
      * @param param the request object
      */
  listCaptchaInstances(param?: CAPTCHAApiListCaptchaInstancesRequest, options?: Configuration): Promise<Collection<CAPTCHAInstance>>;
  /**
      * Partially update a CAPTCHA instance by `id`.
      * Partial Update CAPTCHA instance
      * @param param the request object
      */
  partialUpdateCaptchaInstance(param: CAPTCHAApiPartialUpdateCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
  /**
      * Update a CAPTCHA instance by `id`.
      * Update CAPTCHA instance
      * @param param the request object
      */
  updateCaptchaInstance(param: CAPTCHAApiUpdateCaptchaInstanceRequest, options?: Configuration): Promise<CAPTCHAInstance>;
}
import { CustomizationApiRequestFactory, CustomizationApiResponseProcessor } from '../apis/CustomizationApi';
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
export interface CustomizationApiDeleteBrandThemeBackgroundImageRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApideleteBrandThemeBackgroundImage
      */
    brandId: string;
    /**
      *
      * @type string
      * @memberof CustomizationApideleteBrandThemeBackgroundImage
      */
    themeId: string;
}
export interface CustomizationApiDeleteBrandThemeFaviconRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApideleteBrandThemeFavicon
      */
    brandId: string;
    /**
      *
      * @type string
      * @memberof CustomizationApideleteBrandThemeFavicon
      */
    themeId: string;
}
export interface CustomizationApiDeleteBrandThemeLogoRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApideleteBrandThemeLogo
      */
    brandId: string;
    /**
      *
      * @type string
      * @memberof CustomizationApideleteBrandThemeLogo
      */
    themeId: string;
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
export interface CustomizationApiGetBrandRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApigetBrand
      */
    brandId: string;
}
export interface CustomizationApiGetBrandThemeRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApigetBrandTheme
      */
    brandId: string;
    /**
      *
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
}
export interface CustomizationApiListBrandThemesRequest {
    /**
      *
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
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
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
      * The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
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
export interface CustomizationApiUpdateBrandRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApiupdateBrand
      */
    brandId: string;
    /**
      *
      * @type Brand
      * @memberof CustomizationApiupdateBrand
      */
    brand: Brand;
}
export interface CustomizationApiUpdateBrandThemeRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApiupdateBrandTheme
      */
    brandId: string;
    /**
      *
      * @type string
      * @memberof CustomizationApiupdateBrandTheme
      */
    themeId: string;
    /**
      *
      * @type Theme
      * @memberof CustomizationApiupdateBrandTheme
      */
    theme: Theme;
}
export interface CustomizationApiUpdateEmailCustomizationRequest {
    /**
      * The ID of the brand.
      * @type string
      * @memberof CustomizationApiupdateEmailCustomization
      */
    brandId: string;
    /**
      * The name of the email template.
      * @type string
      * @memberof CustomizationApiupdateEmailCustomization
      */
    templateName: string;
    /**
      * The ID of the email customization.
      * @type string
      * @memberof CustomizationApiupdateEmailCustomization
      */
    customizationId: string;
    /**
      * Request
      * @type EmailCustomization
      * @memberof CustomizationApiupdateEmailCustomization
      */
    instance?: EmailCustomization;
}
export interface CustomizationApiUploadBrandThemeBackgroundImageRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApiuploadBrandThemeBackgroundImage
      */
    brandId: string;
    /**
      *
      * @type string
      * @memberof CustomizationApiuploadBrandThemeBackgroundImage
      */
    themeId: string;
}
export interface CustomizationApiUploadBrandThemeFaviconRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApiuploadBrandThemeFavicon
      */
    brandId: string;
    /**
      *
      * @type string
      * @memberof CustomizationApiuploadBrandThemeFavicon
      */
    themeId: string;
}
export interface CustomizationApiUploadBrandThemeLogoRequest {
    /**
      *
      * @type string
      * @memberof CustomizationApiuploadBrandThemeLogo
      */
    brandId: string;
    /**
      *
      * @type string
      * @memberof CustomizationApiuploadBrandThemeLogo
      */
    themeId: string;
}
export declare class ObjectCustomizationApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: CustomizationApiRequestFactory, responseProcessor?: CustomizationApiResponseProcessor);
  /**
      * Creates a new email customization.
      * Create Email Customization
      * @param param the request object
      */
  createEmailCustomization(param: CustomizationApiCreateEmailCustomizationRequest, options?: Configuration): Promise<EmailCustomization>;
  /**
      * Deletes all customizations for an email template.
      * Delete All Email Customizations
      * @param param the request object
      */
  deleteAllCustomizations(param: CustomizationApiDeleteAllCustomizationsRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme background image
      * Deletes a Theme background image
      * @param param the request object
      */
  deleteBrandThemeBackgroundImage(param: CustomizationApiDeleteBrandThemeBackgroundImageRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme favicon. The org then uses the Okta default favicon.
      * Deletes a Theme favicon. The org then uses the Okta default favicon.
      * @param param the request object
      */
  deleteBrandThemeFavicon(param: CustomizationApiDeleteBrandThemeFaviconRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a Theme logo. The org then uses the Okta default logo.
      * Deletes a Theme logo. The org then uses the Okta default logo.
      * @param param the request object
      */
  deleteBrandThemeLogo(param: CustomizationApiDeleteBrandThemeLogoRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes an email customization by its unique identifier.
      * Delete Email Customization
      * @param param the request object
      */
  deleteEmailCustomization(param: CustomizationApiDeleteEmailCustomizationRequest, options?: Configuration): Promise<void>;
  /**
      * Fetches a brand by `brandId`
      * Get Brand
      * @param param the request object
      */
  getBrand(param: CustomizationApiGetBrandRequest, options?: Configuration): Promise<Brand>;
  /**
      * Fetches a theme for a brand
      * Get a theme for a brand
      * @param param the request object
      */
  getBrandTheme(param: CustomizationApiGetBrandThemeRequest, options?: Configuration): Promise<ThemeResponse>;
  /**
      * Generates a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview Email Customization
      * @param param the request object
      */
  getCustomizationPreview(param: CustomizationApiGetCustomizationPreviewRequest, options?: Configuration): Promise<EmailPreview>;
  /**
      * Gets an email customization by its unique identifier.
      * Get Email Customization
      * @param param the request object
      */
  getEmailCustomization(param: CustomizationApiGetEmailCustomizationRequest, options?: Configuration): Promise<EmailCustomization>;
  /**
      * Gets an email template's default content.
      * Get Email Template Default Content
      * @param param the request object
      */
  getEmailDefaultContent(param: CustomizationApiGetEmailDefaultContentRequest, options?: Configuration): Promise<EmailDefaultContent>;
  /**
      * Generates a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview Email Template Default Content
      * @param param the request object
      */
  getEmailDefaultPreview(param: CustomizationApiGetEmailDefaultPreviewRequest, options?: Configuration): Promise<EmailPreview>;
  /**
      * Gets the details of an email template by name.
      * Get Email Template
      * @param param the request object
      */
  getEmailTemplate(param: CustomizationApiGetEmailTemplateRequest, options?: Configuration): Promise<EmailTemplate>;
  /**
      * List all the themes in your brand
      * Get Brand Themes
      * @param param the request object
      */
  listBrandThemes(param: CustomizationApiListBrandThemesRequest, options?: Configuration): Promise<Collection<ThemeResponse>>;
  /**
      * List all the brands in your org.
      * List Brands
      * @param param the request object
      */
  listBrands(param?: CustomizationApiListBrandsRequest, options?: Configuration): Promise<Collection<Brand>>;
  /**
      * Lists all customizations of an email template.
      * List Email Customizations
      * @param param the request object
      */
  listEmailCustomizations(param: CustomizationApiListEmailCustomizationsRequest, options?: Configuration): Promise<Collection<EmailCustomization>>;
  /**
      * Lists all email templates.
      * List Email Templates
      * @param param the request object
      */
  listEmailTemplates(param: CustomizationApiListEmailTemplatesRequest, options?: Configuration): Promise<Collection<EmailTemplate>>;
  /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
      * Send Test Email
      * @param param the request object
      */
  sendTestEmail(param: CustomizationApiSendTestEmailRequest, options?: Configuration): Promise<void>;
  /**
      * Updates a brand by `brandId`
      * Update Brand
      * @param param the request object
      */
  updateBrand(param: CustomizationApiUpdateBrandRequest, options?: Configuration): Promise<Brand>;
  /**
      * Updates a theme for a brand
      * Update a theme for a brand
      * @param param the request object
      */
  updateBrandTheme(param: CustomizationApiUpdateBrandThemeRequest, options?: Configuration): Promise<ThemeResponse>;
  /**
      * Updates an existing email customization using the property values provided.
      * Update Email Customization
      * @param param the request object
      */
  updateEmailCustomization(param: CustomizationApiUpdateEmailCustomizationRequest, options?: Configuration): Promise<EmailCustomization>;
  /**
      * Updates the background image for your Theme
      * Updates the background image for your Theme
      * @param param the request object
      */
  uploadBrandThemeBackgroundImage(param: CustomizationApiUploadBrandThemeBackgroundImageRequest, options?: Configuration): Promise<ImageUploadResponse>;
  /**
      * Updates the favicon for your theme
      * Updates the favicon for your theme
      * @param param the request object
      */
  uploadBrandThemeFavicon(param: CustomizationApiUploadBrandThemeFaviconRequest, options?: Configuration): Promise<ImageUploadResponse>;
  /**
      * Updates the logo for your Theme
      * Update a themes logo
      * @param param the request object
      */
  uploadBrandThemeLogo(param: CustomizationApiUploadBrandThemeLogoRequest, options?: Configuration): Promise<ImageUploadResponse>;
}
import { DomainApiRequestFactory, DomainApiResponseProcessor } from '../apis/DomainApi';
export interface DomainApiCreateCertificateRequest {
    /**
      *
      * @type string
      * @memberof DomainApicreateCertificate
      */
    domainId: string;
    /**
      *
      * @type DomainCertificate
      * @memberof DomainApicreateCertificate
      */
    certificate: DomainCertificate;
}
export interface DomainApiCreateDomainRequest {
    /**
      *
      * @type Domain
      * @memberof DomainApicreateDomain
      */
    domain: Domain;
}
export interface DomainApiDeleteDomainRequest {
    /**
      *
      * @type string
      * @memberof DomainApideleteDomain
      */
    domainId: string;
}
export interface DomainApiGetDomainRequest {
    /**
      *
      * @type string
      * @memberof DomainApigetDomain
      */
    domainId: string;
}
export interface DomainApiListDomainsRequest {
}
export interface DomainApiVerifyDomainRequest {
    /**
      *
      * @type string
      * @memberof DomainApiverifyDomain
      */
    domainId: string;
}
export declare class ObjectDomainApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: DomainApiRequestFactory, responseProcessor?: DomainApiResponseProcessor);
  /**
      * Creates the Certificate for the Domain.
      * Create Certificate
      * @param param the request object
      */
  createCertificate(param: DomainApiCreateCertificateRequest, options?: Configuration): Promise<void>;
  /**
      * Creates your domain.
      * Create Domain
      * @param param the request object
      */
  createDomain(param: DomainApiCreateDomainRequest, options?: Configuration): Promise<DomainResponse>;
  /**
      * Deletes a Domain by `id`.
      * Delete Domain
      * @param param the request object
      */
  deleteDomain(param: DomainApiDeleteDomainRequest, options?: Configuration): Promise<void>;
  /**
      * Fetches a Domain by `id`.
      * Get Domain
      * @param param the request object
      */
  getDomain(param: DomainApiGetDomainRequest, options?: Configuration): Promise<DomainResponse>;
  /**
      * List all verified custom Domains for the org.
      * List Domains
      * @param param the request object
      */
  listDomains(param?: DomainApiListDomainsRequest, options?: Configuration): Promise<DomainListResponse>;
  /**
      * Verifies the Domain by `id`.
      * Verify Domain
      * @param param the request object
      */
  verifyDomain(param: DomainApiVerifyDomainRequest, options?: Configuration): Promise<DomainResponse>;
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
export interface EventHookApiUpdateEventHookRequest {
    /**
      *
      * @type string
      * @memberof EventHookApiupdateEventHook
      */
    eventHookId: string;
    /**
      *
      * @type EventHook
      * @memberof EventHookApiupdateEventHook
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
      * Success
      * Activate Event Hook
      * @param param the request object
      */
  activateEventHook(param: EventHookApiActivateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * Create Event Hook
      * @param param the request object
      */
  createEventHook(param: EventHookApiCreateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * Deactivate Event Hook
      * @param param the request object
      */
  deactivateEventHook(param: EventHookApiDeactivateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * Delete Event Hook
      * @param param the request object
      */
  deleteEventHook(param: EventHookApiDeleteEventHookRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Get Event Hook
      * @param param the request object
      */
  getEventHook(param: EventHookApiGetEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * List Event Hooks
      * @param param the request object
      */
  listEventHooks(param?: EventHookApiListEventHooksRequest, options?: Configuration): Promise<Collection<EventHook>>;
  /**
      * Success
      * Update Event Hook
      * @param param the request object
      */
  updateEventHook(param: EventHookApiUpdateEventHookRequest, options?: Configuration): Promise<EventHook>;
  /**
      * Success
      * Verify Event Hook
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
      * Success
      * Get Feature
      * @param param the request object
      */
  getFeature(param: FeatureApiGetFeatureRequest, options?: Configuration): Promise<Feature>;
  /**
      * Success
      * List Feature Dependencies
      * @param param the request object
      */
  listFeatureDependencies(param: FeatureApiListFeatureDependenciesRequest, options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Success
      * List Feature Dependents
      * @param param the request object
      */
  listFeatureDependents(param: FeatureApiListFeatureDependentsRequest, options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Success
      * List Features
      * @param param the request object
      */
  listFeatures(param?: FeatureApiListFeaturesRequest, options?: Configuration): Promise<Collection<Feature>>;
  /**
      * Success
      * Update Feature Lifecycle
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
export interface GroupApiAddApplicationInstanceTargetToAppAdminRoleGivenToGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiaddApplicationInstanceTargetToAppAdminRoleGivenToGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiaddApplicationInstanceTargetToAppAdminRoleGivenToGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof GroupApiaddApplicationInstanceTargetToAppAdminRoleGivenToGroup
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof GroupApiaddApplicationInstanceTargetToAppAdminRoleGivenToGroup
      */
    applicationId: string;
}
export interface GroupApiAddApplicationTargetToAdminRoleGivenToGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiaddApplicationTargetToAdminRoleGivenToGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiaddApplicationTargetToAdminRoleGivenToGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof GroupApiaddApplicationTargetToAdminRoleGivenToGroup
      */
    appName: string;
}
export interface GroupApiAddGroupTargetToGroupAdministratorRoleForGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiaddGroupTargetToGroupAdministratorRoleForGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiaddGroupTargetToGroupAdministratorRoleForGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof GroupApiaddGroupTargetToGroupAdministratorRoleForGroup
      */
    targetGroupId: string;
}
export interface GroupApiAddUserToGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiaddUserToGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiaddUserToGroup
      */
    userId: string;
}
export interface GroupApiAssignRoleToGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiassignRoleToGroup
      */
    groupId: string;
    /**
      *
      * @type AssignRoleRequest
      * @memberof GroupApiassignRoleToGroup
      */
    assignRoleRequest: AssignRoleRequest;
    /**
      *
      * @type boolean
      * @memberof GroupApiassignRoleToGroup
      */
    disableNotifications?: boolean;
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
export interface GroupApiGetRoleRequest {
    /**
      *
      * @type string
      * @memberof GroupApigetRole
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApigetRole
      */
    roleId: string;
}
export interface GroupApiListApplicationTargetsForApplicationAdministratorRoleForGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof GroupApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof GroupApilistApplicationTargetsForApplicationAdministratorRoleForGroup
      */
    limit?: number;
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
export interface GroupApiListGroupAssignedRolesRequest {
    /**
      *
      * @type string
      * @memberof GroupApilistGroupAssignedRoles
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApilistGroupAssignedRoles
      */
    expand?: string;
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
export interface GroupApiListGroupTargetsForGroupRoleRequest {
    /**
      *
      * @type string
      * @memberof GroupApilistGroupTargetsForGroupRole
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApilistGroupTargetsForGroupRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof GroupApilistGroupTargetsForGroupRole
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof GroupApilistGroupTargetsForGroupRole
      */
    limit?: number;
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
    search?: string;
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
}
export interface GroupApiRemoveApplicationTargetFromAdministratorRoleGivenToGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiremoveApplicationTargetFromAdministratorRoleGivenToGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiremoveApplicationTargetFromAdministratorRoleGivenToGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof GroupApiremoveApplicationTargetFromAdministratorRoleGivenToGroup
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof GroupApiremoveApplicationTargetFromAdministratorRoleGivenToGroup
      */
    applicationId: string;
}
export interface GroupApiRemoveApplicationTargetFromApplicationAdministratorRoleGivenToGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiremoveApplicationTargetFromApplicationAdministratorRoleGivenToGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiremoveApplicationTargetFromApplicationAdministratorRoleGivenToGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof GroupApiremoveApplicationTargetFromApplicationAdministratorRoleGivenToGroup
      */
    appName: string;
}
export interface GroupApiRemoveGroupTargetFromGroupAdministratorRoleGivenToGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiremoveGroupTargetFromGroupAdministratorRoleGivenToGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiremoveGroupTargetFromGroupAdministratorRoleGivenToGroup
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof GroupApiremoveGroupTargetFromGroupAdministratorRoleGivenToGroup
      */
    targetGroupId: string;
}
export interface GroupApiRemoveRoleFromGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiremoveRoleFromGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiremoveRoleFromGroup
      */
    roleId: string;
}
export interface GroupApiRemoveUserFromGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiremoveUserFromGroup
      */
    groupId: string;
    /**
      *
      * @type string
      * @memberof GroupApiremoveUserFromGroup
      */
    userId: string;
}
export interface GroupApiUpdateGroupRequest {
    /**
      *
      * @type string
      * @memberof GroupApiupdateGroup
      */
    groupId: string;
    /**
      *
      * @type Group
      * @memberof GroupApiupdateGroup
      */
    group: Group;
}
export interface GroupApiUpdateGroupRuleRequest {
    /**
      *
      * @type string
      * @memberof GroupApiupdateGroupRule
      */
    ruleId: string;
    /**
      *
      * @type GroupRule
      * @memberof GroupApiupdateGroupRule
      */
    groupRule: GroupRule;
}
export declare class ObjectGroupApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: GroupApiRequestFactory, responseProcessor?: GroupApiResponseProcessor);
  /**
      * Activates a specific group rule by id from your organization
      * Activate a group Rule
      * @param param the request object
      */
  activateGroupRule(param: GroupApiActivateGroupRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Add App Instance Target to App Administrator Role given to a Group
      * Add App Instance Target to App Administrator Role given to a Group
      * @param param the request object
      */
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(param: GroupApiAddApplicationInstanceTargetToAppAdminRoleGivenToGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Add Application Target to Admin Role Given to Group
      * @param param the request object
      */
  addApplicationTargetToAdminRoleGivenToGroup(param: GroupApiAddApplicationTargetToAdminRoleGivenToGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Enumerates group targets for a group role.
      * Add Group Target for Group Role
      * @param param the request object
      */
  addGroupTargetToGroupAdministratorRoleForGroup(param: GroupApiAddGroupTargetToGroupAdministratorRoleForGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Adds a user to a group with 'OKTA_GROUP' type.
      * Add User to Group
      * @param param the request object
      */
  addUserToGroup(param: GroupApiAddUserToGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a Role to a Group
      * Assign Role to Group
      * @param param the request object
      */
  assignRoleToGroup(param: GroupApiAssignRoleToGroupRequest, options?: Configuration): Promise<Role | void>;
  /**
      * Adds a new group with `OKTA_GROUP` type to your organization.
      * Add Group
      * @param param the request object
      */
  createGroup(param: GroupApiCreateGroupRequest, options?: Configuration): Promise<Group>;
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition
      * Create Group Rule
      * @param param the request object
      */
  createGroupRule(param: GroupApiCreateGroupRuleRequest, options?: Configuration): Promise<GroupRule>;
  /**
      * Deactivates a specific group rule by id from your organization
      * Deactivate a group Rule
      * @param param the request object
      */
  deactivateGroupRule(param: GroupApiDeactivateGroupRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Removes a group with `OKTA_GROUP` type from your organization.
      * Remove Group
      * @param param the request object
      */
  deleteGroup(param: GroupApiDeleteGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Removes a specific group rule by id from your organization
      * Delete a group Rule
      * @param param the request object
      */
  deleteGroupRule(param: GroupApiDeleteGroupRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Fetches a group from your organization.
      * List Group Rules
      * @param param the request object
      */
  getGroup(param: GroupApiGetGroupRequest, options?: Configuration): Promise<Group>;
  /**
      * Fetches a specific group rule by id from your organization
      * Get Group Rule
      * @param param the request object
      */
  getGroupRule(param: GroupApiGetGroupRuleRequest, options?: Configuration): Promise<GroupRule>;
  /**
      * Success
      * Get Role
      * @param param the request object
      */
  getRole(param: GroupApiGetRoleRequest, options?: Configuration): Promise<Role>;
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List Application Targets for Application Administrator Role for Group
      * @param param the request object
      */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(param: GroupApiListApplicationTargetsForApplicationAdministratorRoleForGroupRequest, options?: Configuration): Promise<Collection<CatalogApplication>>;
  /**
      * Enumerates all applications that are assigned to a group.
      * List Assigned Applications
      * @param param the request object
      */
  listAssignedApplicationsForGroup(param: GroupApiListAssignedApplicationsForGroupRequest, options?: Configuration): Promise<Collection<Application>>;
  /**
      * Success
      * List Group Assigned Roles
      * @param param the request object
      */
  listGroupAssignedRoles(param: GroupApiListGroupAssignedRolesRequest, options?: Configuration): Promise<Collection<Role>>;
  /**
      * Lists all group rules for your organization.
      * List Group Rules
      * @param param the request object
      */
  listGroupRules(param?: GroupApiListGroupRulesRequest, options?: Configuration): Promise<Collection<GroupRule>>;
  /**
      * Enumerates group targets for a group role.
      * List Group Targets for Group Role
      * @param param the request object
      */
  listGroupTargetsForGroupRole(param: GroupApiListGroupTargetsForGroupRoleRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Enumerates all users that are a member of a group.
      * List Group Members
      * @param param the request object
      */
  listGroupUsers(param: GroupApiListGroupUsersRequest, options?: Configuration): Promise<Collection<User>>;
  /**
      * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
      * List Groups
      * @param param the request object
      */
  listGroups(param?: GroupApiListGroupsRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Remove App Instance Target to App Administrator Role given to a Group
      * Remove App Instance Target to App Administrator Role given to a Group
      * @param param the request object
      */
  removeApplicationTargetFromAdministratorRoleGivenToGroup(param: GroupApiRemoveApplicationTargetFromAdministratorRoleGivenToGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Remove Application Target from Application Administrator Role Given to Group
      * @param param the request object
      */
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(param: GroupApiRemoveApplicationTargetFromApplicationAdministratorRoleGivenToGroupRequest, options?: Configuration): Promise<void>;
  /**
      * remove group target for a group role.
      * Delete Group Target for Group Role
      * @param param the request object
      */
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(param: GroupApiRemoveGroupTargetFromGroupAdministratorRoleGivenToGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a Role from a Group
      * Remove Role from Group
      * @param param the request object
      */
  removeRoleFromGroup(param: GroupApiRemoveRoleFromGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Removes a user from a group with 'OKTA_GROUP' type.
      * Remove User from Group
      * @param param the request object
      */
  removeUserFromGroup(param: GroupApiRemoveUserFromGroupRequest, options?: Configuration): Promise<void>;
  /**
      * Updates the profile for a group with `OKTA_GROUP` type from your organization.
      * Update Group
      * @param param the request object
      */
  updateGroup(param: GroupApiUpdateGroupRequest, options?: Configuration): Promise<Group>;
  /**
      * Updates a group rule. Only `INACTIVE` rules can be updated.
      * Update Group Rule
      * @param param the request object
      */
  updateGroupRule(param: GroupApiUpdateGroupRuleRequest, options?: Configuration): Promise<GroupRule>;
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
export interface IdentityProviderApiUpdateIdentityProviderRequest {
    /**
      *
      * @type string
      * @memberof IdentityProviderApiupdateIdentityProvider
      */
    idpId: string;
    /**
      *
      * @type IdentityProvider
      * @memberof IdentityProviderApiupdateIdentityProvider
      */
    identityProvider: IdentityProvider;
}
export declare class ObjectIdentityProviderApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: IdentityProviderApiRequestFactory, responseProcessor?: IdentityProviderApiResponseProcessor);
  /**
      * Activates an inactive IdP.
      * Activate Identity Provider
      * @param param the request object
      */
  activateIdentityProvider(param: IdentityProviderApiActivateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
      * Clone Signing Key Credential for IdP
      * @param param the request object
      */
  cloneIdentityProviderKey(param: IdentityProviderApiCloneIdentityProviderKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Adds a new IdP to your organization.
      * Add Identity Provider
      * @param param the request object
      */
  createIdentityProvider(param: IdentityProviderApiCreateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Adds a new X.509 certificate credential to the IdP key store.
      * Add X.509 Certificate Public Key for Identity Providers
      * @param param the request object
      */
  createIdentityProviderKey(param: IdentityProviderApiCreateIdentityProviderKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Deactivates an active IdP.
      * Deactivate Identity Provider
      * @param param the request object
      */
  deactivateIdentityProvider(param: IdentityProviderApiDeactivateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Removes an IdP from your organization.
      * Delete Identity Provider
      * @param param the request object
      */
  deleteIdentityProvider(param: IdentityProviderApiDeleteIdentityProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.
      * Delete Key
      * @param param the request object
      */
  deleteIdentityProviderKey(param: IdentityProviderApiDeleteIdentityProviderKeyRequest, options?: Configuration): Promise<void>;
  /**
      * Generates a new key pair and returns a Certificate Signing Request for it.
      * Generate Certificate Signing Request for IdP
      * @param param the request object
      */
  generateCsrForIdentityProvider(param: IdentityProviderApiGenerateCsrForIdentityProviderRequest, options?: Configuration): Promise<Csr>;
  /**
      * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
      * Generate New IdP Signing Key Credential
      * @param param the request object
      */
  generateIdentityProviderSigningKey(param: IdentityProviderApiGenerateIdentityProviderSigningKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Gets a specific Certificate Signing Request model by id
      * Get Csr for Identity Provider
      * @param param the request object
      */
  getCsrForIdentityProvider(param: IdentityProviderApiGetCsrForIdentityProviderRequest, options?: Configuration): Promise<Csr>;
  /**
      * Fetches an IdP by `id`.
      * Get Identity Provider
      * @param param the request object
      */
  getIdentityProvider(param: IdentityProviderApiGetIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
  /**
      * Fetches a linked IdP user by ID
      * Get Identity Provider Application User
      * @param param the request object
      */
  getIdentityProviderApplicationUser(param: IdentityProviderApiGetIdentityProviderApplicationUserRequest, options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Gets a specific IdP Key Credential by `kid`
      * Get Identity Provider Key
      * @param param the request object
      */
  getIdentityProviderKey(param: IdentityProviderApiGetIdentityProviderKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Gets a specific IdP Key Credential by `kid`
      * Get Signing Key Credential for IdP
      * @param param the request object
      */
  getIdentityProviderSigningKey(param: IdentityProviderApiGetIdentityProviderSigningKeyRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
      * Link a user to a Social IdP without a transaction
      * @param param the request object
      */
  linkUserToIdentityProvider(param: IdentityProviderApiLinkUserToIdentityProviderRequest, options?: Configuration): Promise<IdentityProviderApplicationUser>;
  /**
      * Enumerates Certificate Signing Requests for an IdP
      * List Certificate Signing Requests for IdP
      * @param param the request object
      */
  listCsrsForIdentityProvider(param: IdentityProviderApiListCsrsForIdentityProviderRequest, options?: Configuration): Promise<Collection<Csr>>;
  /**
      * Find all the users linked to an identity provider
      * Find Users
      * @param param the request object
      */
  listIdentityProviderApplicationUsers(param: IdentityProviderApiListIdentityProviderApplicationUsersRequest, options?: Configuration): Promise<Collection<IdentityProviderApplicationUser>>;
  /**
      * Enumerates IdP key credentials.
      * List Identity Provider Keys
      * @param param the request object
      */
  listIdentityProviderKeys(param?: IdentityProviderApiListIdentityProviderKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Enumerates signing key credentials for an IdP
      * List Signing Key Credentials for IdP
      * @param param the request object
      */
  listIdentityProviderSigningKeys(param: IdentityProviderApiListIdentityProviderSigningKeysRequest, options?: Configuration): Promise<Collection<JsonWebKey>>;
  /**
      * Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List Identity Providers
      * @param param the request object
      */
  listIdentityProviders(param?: IdentityProviderApiListIdentityProvidersRequest, options?: Configuration): Promise<Collection<IdentityProvider>>;
  /**
      * Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.
      * Social Authentication Token Operation
      * @param param the request object
      */
  listSocialAuthTokens(param: IdentityProviderApiListSocialAuthTokensRequest, options?: Configuration): Promise<Collection<SocialAuthToken>>;
  /**
      * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
      * Publish Csr for Identity Provider
      * @param param the request object
      */
  publishCsrForIdentityProvider(param: IdentityProviderApiPublishCsrForIdentityProviderRequest, options?: Configuration): Promise<JsonWebKey>;
  /**
      * Revoke a Certificate Signing Request and delete the key pair from the IdP
      * Revoke Csr for Identity Provider
      * @param param the request object
      */
  revokeCsrForIdentityProvider(param: IdentityProviderApiRevokeCsrForIdentityProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Removes the link between the Okta user and the IdP user.
      * Unlink User from IdP
      * @param param the request object
      */
  unlinkUserFromIdentityProvider(param: IdentityProviderApiUnlinkUserFromIdentityProviderRequest, options?: Configuration): Promise<void>;
  /**
      * Updates the configuration for an IdP.
      * Update Identity Provider
      * @param param the request object
      */
  updateIdentityProvider(param: IdentityProviderApiUpdateIdentityProviderRequest, options?: Configuration): Promise<IdentityProvider>;
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
      * @type any
      * @memberof InlineHookApiexecuteInlineHook
      */
    payloadData: any;
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
export interface InlineHookApiUpdateInlineHookRequest {
    /**
      *
      * @type string
      * @memberof InlineHookApiupdateInlineHook
      */
    inlineHookId: string;
    /**
      *
      * @type InlineHook
      * @memberof InlineHookApiupdateInlineHook
      */
    inlineHook: InlineHook;
}
export declare class ObjectInlineHookApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: InlineHookApiRequestFactory, responseProcessor?: InlineHookApiResponseProcessor);
  /**
      * Activates the Inline Hook matching the provided id
      * Activate Inline Hook
      * @param param the request object
      */
  activateInlineHook(param: InlineHookApiActivateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Success
      * Create Inline Hook
      * @param param the request object
      */
  createInlineHook(param: InlineHookApiCreateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Deactivates the Inline Hook matching the provided id
      * Deactivate Inline Hook
      * @param param the request object
      */
  deactivateInlineHook(param: InlineHookApiDeactivateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete Inline Hook
      * @param param the request object
      */
  deleteInlineHook(param: InlineHookApiDeleteInlineHookRequest, options?: Configuration): Promise<void>;
  /**
      * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute Inline Hook
      * @param param the request object
      */
  executeInlineHook(param: InlineHookApiExecuteInlineHookRequest, options?: Configuration): Promise<InlineHookResponse>;
  /**
      * Gets an inline hook by ID
      * Get Inline Hook
      * @param param the request object
      */
  getInlineHook(param: InlineHookApiGetInlineHookRequest, options?: Configuration): Promise<InlineHook>;
  /**
      * Success
      * List Inline Hooks
      * @param param the request object
      */
  listInlineHooks(param?: InlineHookApiListInlineHooksRequest, options?: Configuration): Promise<Collection<InlineHook>>;
  /**
      * Updates an inline hook by ID
      * Update Inline Hook
      * @param param the request object
      */
  updateInlineHook(param: InlineHookApiUpdateInlineHookRequest, options?: Configuration): Promise<InlineHook>;
}
import { LinkedObjectApiRequestFactory, LinkedObjectApiResponseProcessor } from '../apis/LinkedObjectApi';
export interface LinkedObjectApiAddLinkedObjectDefinitionRequest {
    /**
      *
      * @type LinkedObject
      * @memberof LinkedObjectApiaddLinkedObjectDefinition
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
      * Success
      * Add Linked Object Definition
      * @param param the request object
      */
  addLinkedObjectDefinition(param: LinkedObjectApiAddLinkedObjectDefinitionRequest, options?: Configuration): Promise<LinkedObject>;
  /**
      * Success
      * Delete Linked Object Definition
      * @param param the request object
      */
  deleteLinkedObjectDefinition(param: LinkedObjectApiDeleteLinkedObjectDefinitionRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Get Linked Object Definition
      * @param param the request object
      */
  getLinkedObjectDefinition(param: LinkedObjectApiGetLinkedObjectDefinitionRequest, options?: Configuration): Promise<LinkedObject>;
  /**
      * Success
      * List Linked Object Definitions
      * @param param the request object
      */
  listLinkedObjectDefinitions(param?: LinkedObjectApiListLinkedObjectDefinitionsRequest, options?: Configuration): Promise<Collection<LinkedObject>>;
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
export interface NetworkZoneApiUpdateNetworkZoneRequest {
    /**
      *
      * @type string
      * @memberof NetworkZoneApiupdateNetworkZone
      */
    zoneId: string;
    /**
      *
      * @type NetworkZone
      * @memberof NetworkZoneApiupdateNetworkZone
      */
    zone: NetworkZone;
}
export declare class ObjectNetworkZoneApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: NetworkZoneApiRequestFactory, responseProcessor?: NetworkZoneApiResponseProcessor);
  /**
      * Activate Network Zone
      * Activate Network Zone
      * @param param the request object
      */
  activateNetworkZone(param: NetworkZoneApiActivateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Adds a new network zone to your Okta organization.
      * Add Network Zone
      * @param param the request object
      */
  createNetworkZone(param: NetworkZoneApiCreateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Deactivates a network zone.
      * Deactivate Network Zone
      * @param param the request object
      */
  deactivateNetworkZone(param: NetworkZoneApiDeactivateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Removes network zone.
      * Delete Network Zone
      * @param param the request object
      */
  deleteNetworkZone(param: NetworkZoneApiDeleteNetworkZoneRequest, options?: Configuration): Promise<void>;
  /**
      * Fetches a network zone from your Okta organization by `id`.
      * Get Network Zone
      * @param param the request object
      */
  getNetworkZone(param: NetworkZoneApiGetNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
  /**
      * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
      * List Network Zones
      * @param param the request object
      */
  listNetworkZones(param?: NetworkZoneApiListNetworkZonesRequest, options?: Configuration): Promise<Collection<NetworkZone>>;
  /**
      * Updates a network zone in your organization.
      * Update Network Zone
      * @param param the request object
      */
  updateNetworkZone(param: NetworkZoneApiUpdateNetworkZoneRequest, options?: Configuration): Promise<NetworkZone>;
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
export interface OrgSettingApiGrantOktaSupportRequest {
}
export interface OrgSettingApiHideOktaUIFooterRequest {
}
export interface OrgSettingApiOptInUsersToOktaCommunicationEmailsRequest {
}
export interface OrgSettingApiOptOutUsersFromOktaCommunicationEmailsRequest {
}
export interface OrgSettingApiPartialUpdateOrgSettingRequest {
    /**
      *
      * @type OrgSetting
      * @memberof OrgSettingApipartialUpdateOrgSetting
      */
    OrgSetting?: OrgSetting;
}
export interface OrgSettingApiRevokeOktaSupportRequest {
}
export interface OrgSettingApiShowOktaUIFooterRequest {
}
export interface OrgSettingApiUpdateOrgContactUserRequest {
    /**
      *
      * @type string
      * @memberof OrgSettingApiupdateOrgContactUser
      */
    contactType: string;
    /**
      *
      * @type OrgContactUser
      * @memberof OrgSettingApiupdateOrgContactUser
      */
    orgContactUser: OrgContactUser;
}
export interface OrgSettingApiUpdateOrgLogoRequest {
}
export interface OrgSettingApiUpdateOrgSettingRequest {
    /**
      *
      * @type OrgSetting
      * @memberof OrgSettingApiupdateOrgSetting
      */
    orgSetting: OrgSetting;
}
export declare class ObjectOrgSettingApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: OrgSettingApiRequestFactory, responseProcessor?: OrgSettingApiResponseProcessor);
  /**
      * A list of email addresses to be removed from the set of email addresses that are bounced.
      * Remove Emails from Email Provider Bounce List
      * @param param the request object
      */
  bulkRemoveEmailAddressBounces(param?: OrgSettingApiBulkRemoveEmailAddressBouncesRequest, options?: Configuration): Promise<BouncesRemoveListResult>;
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
      * Extend Okta Support
      * @param param the request object
      */
  extendOktaSupport(param?: OrgSettingApiExtendOktaSupportRequest, options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Gets Okta Communication Settings of your organization.
      * Get Okta Communication Settings
      * @param param the request object
      */
  getOktaCommunicationSettings(param?: OrgSettingApiGetOktaCommunicationSettingsRequest, options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Gets Contact Types of your organization.
      * Get org contact types
      * @param param the request object
      */
  getOrgContactTypes(param?: OrgSettingApiGetOrgContactTypesRequest, options?: Configuration): Promise<Collection<OrgContactTypeObj>>;
  /**
      * Retrieves the URL of the User associated with the specified Contact Type.
      * Get org contact user
      * @param param the request object
      */
  getOrgContactUser(param: OrgSettingApiGetOrgContactUserRequest, options?: Configuration): Promise<OrgContactUser>;
  /**
      * Gets Okta Support Settings of your organization.
      * Get Okta Support settings
      * @param param the request object
      */
  getOrgOktaSupportSettings(param?: OrgSettingApiGetOrgOktaSupportSettingsRequest, options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Gets preferences of your organization.
      * Get org preferences
      * @param param the request object
      */
  getOrgPreferences(param?: OrgSettingApiGetOrgPreferencesRequest, options?: Configuration): Promise<OrgPreferences>;
  /**
      * Get settings of your organization.
      * Get org settings
      * @param param the request object
      */
  getOrgSettings(param?: OrgSettingApiGetOrgSettingsRequest, options?: Configuration): Promise<OrgSetting>;
  /**
      * Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.
      * Grant Okta Support
      * @param param the request object
      */
  grantOktaSupport(param?: OrgSettingApiGrantOktaSupportRequest, options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Hide the Okta UI footer for all end users of your organization.
      * Show Okta UI Footer
      * @param param the request object
      */
  hideOktaUIFooter(param?: OrgSettingApiHideOktaUIFooterRequest, options?: Configuration): Promise<OrgPreferences>;
  /**
      * Opts in all users of this org to Okta Communication emails.
      * Opt in all users to Okta Communication emails
      * @param param the request object
      */
  optInUsersToOktaCommunicationEmails(param?: OrgSettingApiOptInUsersToOktaCommunicationEmailsRequest, options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Opts out all users of this org from Okta Communication emails.
      * Opt out all users from Okta Communication emails
      * @param param the request object
      */
  optOutUsersFromOktaCommunicationEmails(param?: OrgSettingApiOptOutUsersFromOktaCommunicationEmailsRequest, options?: Configuration): Promise<OrgOktaCommunicationSetting>;
  /**
      * Partial update settings of your organization.
      * Partial update Org Setting
      * @param param the request object
      */
  partialUpdateOrgSetting(param?: OrgSettingApiPartialUpdateOrgSettingRequest, options?: Configuration): Promise<OrgSetting>;
  /**
      * Revokes Okta Support access to your organization.
      * Extend Okta Support
      * @param param the request object
      */
  revokeOktaSupport(param?: OrgSettingApiRevokeOktaSupportRequest, options?: Configuration): Promise<OrgOktaSupportSettingsObj>;
  /**
      * Makes the Okta UI footer visible for all end users of your organization.
      * Show Okta UI Footer
      * @param param the request object
      */
  showOktaUIFooter(param?: OrgSettingApiShowOktaUIFooterRequest, options?: Configuration): Promise<OrgPreferences>;
  /**
      * Updates the User associated with the specified Contact Type.
      * Update org contact user
      * @param param the request object
      */
  updateOrgContactUser(param: OrgSettingApiUpdateOrgContactUserRequest, options?: Configuration): Promise<OrgContactUser>;
  /**
      * Updates the logo for your organization.
      * Update org logo
      * @param param the request object
      */
  updateOrgLogo(param?: OrgSettingApiUpdateOrgLogoRequest, options?: Configuration): Promise<void>;
  /**
      * Update settings of your organization.
      * Update Org setting
      * @param param the request object
      */
  updateOrgSetting(param: OrgSettingApiUpdateOrgSettingRequest, options?: Configuration): Promise<OrgSetting>;
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
export interface PolicyApiListPolicyRulesRequest {
    /**
      *
      * @type string
      * @memberof PolicyApilistPolicyRules
      */
    policyId: string;
}
export interface PolicyApiUpdatePolicyRequest {
    /**
      *
      * @type string
      * @memberof PolicyApiupdatePolicy
      */
    policyId: string;
    /**
      *
      * @type Policy
      * @memberof PolicyApiupdatePolicy
      */
    policy: Policy;
}
export interface PolicyApiUpdatePolicyRuleRequest {
    /**
      *
      * @type string
      * @memberof PolicyApiupdatePolicyRule
      */
    policyId: string;
    /**
      *
      * @type string
      * @memberof PolicyApiupdatePolicyRule
      */
    ruleId: string;
    /**
      *
      * @type PolicyRule
      * @memberof PolicyApiupdatePolicyRule
      */
    policyRule: PolicyRule;
}
export declare class ObjectPolicyApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: PolicyApiRequestFactory, responseProcessor?: PolicyApiResponseProcessor);
  /**
      * Activates a policy.
      * Activate Policy
      * @param param the request object
      */
  activatePolicy(param: PolicyApiActivatePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Activates a policy rule.
      * Activate Policy Rule
      * @param param the request object
      */
  activatePolicyRule(param: PolicyApiActivatePolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Creates a policy.
      * Create Policy
      * @param param the request object
      */
  createPolicy(param: PolicyApiCreatePolicyRequest, options?: Configuration): Promise<Policy>;
  /**
      * Creates a policy rule.
      * Create Policy Rule
      * @param param the request object
      */
  createPolicyRule(param: PolicyApiCreatePolicyRuleRequest, options?: Configuration): Promise<PolicyRule>;
  /**
      * Deactivates a policy.
      * Deactivate Policy
      * @param param the request object
      */
  deactivatePolicy(param: PolicyApiDeactivatePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates a policy rule.
      * Deactivate Policy Rule
      * @param param the request object
      */
  deactivatePolicyRule(param: PolicyApiDeactivatePolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Removes a policy.
      * Delete Policy
      * @param param the request object
      */
  deletePolicy(param: PolicyApiDeletePolicyRequest, options?: Configuration): Promise<void>;
  /**
      * Removes a policy rule.
      * Delete Policy Rule
      * @param param the request object
      */
  deletePolicyRule(param: PolicyApiDeletePolicyRuleRequest, options?: Configuration): Promise<void>;
  /**
      * Gets a policy.
      * Get Policy
      * @param param the request object
      */
  getPolicy(param: PolicyApiGetPolicyRequest, options?: Configuration): Promise<Policy>;
  /**
      * Gets a policy rule.
      * Get Policy Rule
      * @param param the request object
      */
  getPolicyRule(param: PolicyApiGetPolicyRuleRequest, options?: Configuration): Promise<PolicyRule>;
  /**
      * Gets all policies with the specified type.
      * List Policies
      * @param param the request object
      */
  listPolicies(param: PolicyApiListPoliciesRequest, options?: Configuration): Promise<Collection<Policy>>;
  /**
      * Enumerates all policy rules.
      * List Policy Rules
      * @param param the request object
      */
  listPolicyRules(param: PolicyApiListPolicyRulesRequest, options?: Configuration): Promise<Collection<PolicyRule>>;
  /**
      * Updates a policy.
      * Update Policy
      * @param param the request object
      */
  updatePolicy(param: PolicyApiUpdatePolicyRequest, options?: Configuration): Promise<Policy>;
  /**
      * Updates a policy rule.
      * Update Policy Rule
      * @param param the request object
      */
  updatePolicyRule(param: PolicyApiUpdatePolicyRuleRequest, options?: Configuration): Promise<PolicyRule>;
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
      * Fetches a single Profile Mapping referenced by its ID.
      * Get Profile Mapping
      * @param param the request object
      */
  getProfileMapping(param: ProfileMappingApiGetProfileMappingRequest, options?: Configuration): Promise<ProfileMapping>;
  /**
      * Enumerates Profile Mappings in your organization with pagination.
      * List Profile Mappings
      * @param param the request object
      */
  listProfileMappings(param?: ProfileMappingApiListProfileMappingsRequest, options?: Configuration): Promise<Collection<ProfileMapping>>;
  /**
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings.
      * Update Profile Mapping
      * @param param the request object
      */
  updateProfileMapping(param: ProfileMappingApiUpdateProfileMappingRequest, options?: Configuration): Promise<ProfileMapping>;
}
import { SchemaApiRequestFactory, SchemaApiResponseProcessor } from '../apis/SchemaApi';
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
export interface SchemaApiGetUserSchemaRequest {
    /**
      *
      * @type string
      * @memberof SchemaApigetUserSchema
      */
    schemaId: string;
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
      * Fetches the Schema for an App User
      * Fetches the Schema for an App User
      * @param param the request object
      */
  getApplicationUserSchema(param: SchemaApiGetApplicationUserSchemaRequest, options?: Configuration): Promise<UserSchema>;
  /**
      * Fetches the group schema
      * Fetches the group schema
      * @param param the request object
      */
  getGroupSchema(param?: SchemaApiGetGroupSchemaRequest, options?: Configuration): Promise<GroupSchema>;
  /**
      * Fetches the schema for a Schema Id.
      * Fetches the schema for a Schema Id.
      * @param param the request object
      */
  getUserSchema(param: SchemaApiGetUserSchemaRequest, options?: Configuration): Promise<UserSchema>;
  /**
      * Partial updates on the User Profile properties of the Application User Schema.
      * Partial updates on the User Profile properties of the Application User Schema.
      * @param param the request object
      */
  updateApplicationUserProfile(param: SchemaApiUpdateApplicationUserProfileRequest, options?: Configuration): Promise<UserSchema>;
  /**
      * Updates, adds ore removes one or more custom Group Profile properties in the schema
      * Updates, adds ore removes one or more custom Group Profile properties in the schema
      * @param param the request object
      */
  updateGroupSchema(param?: SchemaApiUpdateGroupSchemaRequest, options?: Configuration): Promise<GroupSchema>;
  /**
      * Partial updates on the User Profile properties of the user schema.
      * Update User Profile
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
export interface SessionApiEndSessionRequest {
    /**
      *
      * @type string
      * @memberof SessionApiendSession
      */
    sessionId: string;
}
export interface SessionApiGetSessionRequest {
    /**
      *
      * @type string
      * @memberof SessionApigetSession
      */
    sessionId: string;
}
export interface SessionApiRefreshSessionRequest {
    /**
      *
      * @type string
      * @memberof SessionApirefreshSession
      */
    sessionId: string;
}
export declare class ObjectSessionApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SessionApiRequestFactory, responseProcessor?: SessionApiResponseProcessor);
  /**
      * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
      * Create Session with Session Token
      * @param param the request object
      */
  createSession(param: SessionApiCreateSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * End a session.
      * End Session
      * @param param the request object
      */
  endSession(param: SessionApiEndSessionRequest, options?: Configuration): Promise<void>;
  /**
      * Get details about a session.
      * Get Session
      * @param param the request object
      */
  getSession(param: SessionApiGetSessionRequest, options?: Configuration): Promise<Session>;
  /**
      * Refresh a session.
      * Refresh Session
      * @param param the request object
      */
  refreshSession(param: SessionApiRefreshSessionRequest, options?: Configuration): Promise<Session>;
}
import { SubscriptionApiRequestFactory, SubscriptionApiResponseProcessor } from '../apis/SubscriptionApi';
export interface SubscriptionApiGetRoleSubscriptionByNotificationTypeRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApigetRoleSubscriptionByNotificationType
      */
    roleTypeOrRoleId: string;
    /**
      *
      * @type string
      * @memberof SubscriptionApigetRoleSubscriptionByNotificationType
      */
    notificationType: string;
}
export interface SubscriptionApiGetUserSubscriptionByNotificationTypeRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApigetUserSubscriptionByNotificationType
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof SubscriptionApigetUserSubscriptionByNotificationType
      */
    notificationType: string;
}
export interface SubscriptionApiListRoleSubscriptionsRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApilistRoleSubscriptions
      */
    roleTypeOrRoleId: string;
}
export interface SubscriptionApiListUserSubscriptionsRequest {
    /**
      *
      * @type string
      * @memberof SubscriptionApilistUserSubscriptions
      */
    userId: string;
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
      * When roleType Get subscriptions of a Role with a specific notification type. Else when roleId Get subscription of a Custom Role with a specific notification type.
      * Get subscriptions of a Custom Role with a specific notification type
      * @param param the request object
      */
  getRoleSubscriptionByNotificationType(param: SubscriptionApiGetRoleSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<Subscription>;
  /**
      * Get the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * Get the subscription of a User with a specific notification type
      * @param param the request object
      */
  getUserSubscriptionByNotificationType(param: SubscriptionApiGetUserSubscriptionByNotificationTypeRequest, options?: Configuration): Promise<Subscription>;
  /**
      * When roleType List all subscriptions of a Role. Else when roleId List subscriptions of a Custom Role
      * List all subscriptions of a Custom Role
      * @param param the request object
      */
  listRoleSubscriptions(param: SubscriptionApiListRoleSubscriptionsRequest, options?: Configuration): Promise<Collection<Subscription>>;
  /**
      * List subscriptions of a User. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List subscriptions of a User
      * @param param the request object
      */
  listUserSubscriptions(param: SubscriptionApiListUserSubscriptionsRequest, options?: Configuration): Promise<Collection<Subscription>>;
  /**
      * When roleType Subscribes a Role to a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Subscribes a Custom Role to a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
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
      * When roleType Unsubscribes a Role from a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Unsubscribes a Custom Role from a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
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
export interface SystemLogApiGetLogsRequest {
    /**
      *
      * @type Date
      * @memberof SystemLogApigetLogs
      */
    since?: Date;
    /**
      *
      * @type Date
      * @memberof SystemLogApigetLogs
      */
    until?: Date;
    /**
      *
      * @type string
      * @memberof SystemLogApigetLogs
      */
    filter?: string;
    /**
      *
      * @type string
      * @memberof SystemLogApigetLogs
      */
    q?: string;
    /**
      *
      * @type number
      * @memberof SystemLogApigetLogs
      */
    limit?: number;
    /**
      *
      * @type string
      * @memberof SystemLogApigetLogs
      */
    sortOrder?: string;
    /**
      *
      * @type string
      * @memberof SystemLogApigetLogs
      */
    after?: string;
}
export declare class ObjectSystemLogApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: SystemLogApiRequestFactory, responseProcessor?: SystemLogApiResponseProcessor);
  /**
      * The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * Fetch a list of events from your Okta organization system log.
      * @param param the request object
      */
  getLogs(param?: SystemLogApiGetLogsRequest, options?: Configuration): Promise<Collection<LogEvent>>;
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
export interface TemplateApiPartialUpdateSmsTemplateRequest {
    /**
      *
      * @type string
      * @memberof TemplateApipartialUpdateSmsTemplate
      */
    templateId: string;
    /**
      *
      * @type SmsTemplate
      * @memberof TemplateApipartialUpdateSmsTemplate
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
      * Adds a new custom SMS template to your organization.
      * Add SMS Template
      * @param param the request object
      */
  createSmsTemplate(param: TemplateApiCreateSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
  /**
      * Removes an SMS template.
      * Remove SMS Template
      * @param param the request object
      */
  deleteSmsTemplate(param: TemplateApiDeleteSmsTemplateRequest, options?: Configuration): Promise<void>;
  /**
      * Fetches a specific template by `id`
      * Get SMS Template
      * @param param the request object
      */
  getSmsTemplate(param: TemplateApiGetSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
  /**
      * Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.
      * List SMS Templates
      * @param param the request object
      */
  listSmsTemplates(param?: TemplateApiListSmsTemplatesRequest, options?: Configuration): Promise<Collection<SmsTemplate>>;
  /**
      * Updates only some of the SMS template properties:
      * Partial SMS Template Update
      * @param param the request object
      */
  partialUpdateSmsTemplate(param: TemplateApiPartialUpdateSmsTemplateRequest, options?: Configuration): Promise<SmsTemplate>;
  /**
      * Updates the SMS template.
      * Update SMS Template
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
      * Gets current ThreatInsight configuration
      * Get Current Configuration
      * @param param the request object
      */
  getCurrentConfiguration(param?: ThreatInsightApiGetCurrentConfigurationRequest, options?: Configuration): Promise<ThreatInsightConfiguration>;
  /**
      * Updates ThreatInsight configuration
      * Update Configuration
      * @param param the request object
      */
  updateConfiguration(param: ThreatInsightApiUpdateConfigurationRequest, options?: Configuration): Promise<ThreatInsightConfiguration>;
}
import { TrustedOriginApiRequestFactory, TrustedOriginApiResponseProcessor } from '../apis/TrustedOriginApi';
export interface TrustedOriginApiActivateOriginRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApiactivateOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiCreateOriginRequest {
    /**
      *
      * @type TrustedOrigin
      * @memberof TrustedOriginApicreateOrigin
      */
    trustedOrigin: TrustedOrigin;
}
export interface TrustedOriginApiDeactivateOriginRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApideactivateOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiDeleteOriginRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApideleteOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiGetOriginRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApigetOrigin
      */
    trustedOriginId: string;
}
export interface TrustedOriginApiListOriginsRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApilistOrigins
      */
    q?: string;
    /**
      *
      * @type string
      * @memberof TrustedOriginApilistOrigins
      */
    filter?: string;
    /**
      *
      * @type string
      * @memberof TrustedOriginApilistOrigins
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof TrustedOriginApilistOrigins
      */
    limit?: number;
}
export interface TrustedOriginApiUpdateOriginRequest {
    /**
      *
      * @type string
      * @memberof TrustedOriginApiupdateOrigin
      */
    trustedOriginId: string;
    /**
      *
      * @type TrustedOrigin
      * @memberof TrustedOriginApiupdateOrigin
      */
    trustedOrigin: TrustedOrigin;
}
export declare class ObjectTrustedOriginApi {
  private api;
  constructor(configuration: Configuration, requestFactory?: TrustedOriginApiRequestFactory, responseProcessor?: TrustedOriginApiResponseProcessor);
  /**
      * Success
      * Activate Trusted Origin
      * @param param the request object
      */
  activateOrigin(param: TrustedOriginApiActivateOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Success
      * Create Trusted Origin
      * @param param the request object
      */
  createOrigin(param: TrustedOriginApiCreateOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Success
      * Deactivate Trusted Origin
      * @param param the request object
      */
  deactivateOrigin(param: TrustedOriginApiDeactivateOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Success
      * Delete Trusted Origin
      * @param param the request object
      */
  deleteOrigin(param: TrustedOriginApiDeleteOriginRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Get Trusted Origin
      * @param param the request object
      */
  getOrigin(param: TrustedOriginApiGetOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
  /**
      * Success
      * List Trusted Origins
      * @param param the request object
      */
  listOrigins(param?: TrustedOriginApiListOriginsRequest, options?: Configuration): Promise<Collection<TrustedOrigin>>;
  /**
      * Success
      * Update Trusted Origin
      * @param param the request object
      */
  updateOrigin(param: TrustedOriginApiUpdateOriginRequest, options?: Configuration): Promise<TrustedOrigin>;
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
export interface UserApiAddAllAppsAsTargetToRoleRequest {
    /**
      *
      * @type string
      * @memberof UserApiaddAllAppsAsTargetToRole
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApiaddAllAppsAsTargetToRole
      */
    roleId: string;
}
export interface UserApiAddApplicationTargetToAdminRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiaddApplicationTargetToAdminRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApiaddApplicationTargetToAdminRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof UserApiaddApplicationTargetToAdminRoleForUser
      */
    appName: string;
}
export interface UserApiAddApplicationTargetToAppAdminRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiaddApplicationTargetToAppAdminRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApiaddApplicationTargetToAppAdminRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof UserApiaddApplicationTargetToAppAdminRoleForUser
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof UserApiaddApplicationTargetToAppAdminRoleForUser
      */
    applicationId: string;
}
export interface UserApiAddGroupTargetToRoleRequest {
    /**
      *
      * @type string
      * @memberof UserApiaddGroupTargetToRole
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApiaddGroupTargetToRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof UserApiaddGroupTargetToRole
      */
    groupId: string;
}
export interface UserApiAssignRoleToUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiassignRoleToUser
      */
    userId: string;
    /**
      *
      * @type AssignRoleRequest
      * @memberof UserApiassignRoleToUser
      */
    assignRoleRequest: AssignRoleRequest;
    /**
      *
      * @type boolean
      * @memberof UserApiassignRoleToUser
      */
    disableNotifications?: boolean;
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
export interface UserApiClearUserSessionsRequest {
    /**
      *
      * @type string
      * @memberof UserApiclearUserSessions
      */
    userId: string;
    /**
      * Revoke issued OpenID Connect and OAuth refresh and access tokens
      * @type boolean
      * @memberof UserApiclearUserSessions
      */
    oauthTokens?: boolean;
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
export interface UserApiDeactivateOrDeleteUserRequest {
    /**
      *
      * @type string
      * @memberof UserApideactivateOrDeleteUser
      */
    userId: string;
    /**
      *
      * @type boolean
      * @memberof UserApideactivateOrDeleteUser
      */
    sendEmail?: boolean;
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
export interface UserApiGetLinkedObjectsForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApigetLinkedObjectsForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApigetLinkedObjectsForUser
      */
    relationshipName: string;
    /**
      *
      * @type string
      * @memberof UserApigetLinkedObjectsForUser
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof UserApigetLinkedObjectsForUser
      */
    limit?: number;
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
export interface UserApiGetUserRoleRequest {
    /**
      *
      * @type string
      * @memberof UserApigetUserRole
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApigetUserRole
      */
    roleId: string;
}
export interface UserApiListAppLinksRequest {
    /**
      *
      * @type string
      * @memberof UserApilistAppLinks
      */
    userId: string;
}
export interface UserApiListApplicationTargetsForApplicationAdministratorRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof UserApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof UserApilistApplicationTargetsForApplicationAdministratorRoleForUser
      */
    limit?: number;
}
export interface UserApiListAssignedRolesForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApilistAssignedRolesForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApilistAssignedRolesForUser
      */
    expand?: string;
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
export interface UserApiListGroupTargetsForRoleRequest {
    /**
      *
      * @type string
      * @memberof UserApilistGroupTargetsForRole
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApilistGroupTargetsForRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof UserApilistGroupTargetsForRole
      */
    after?: string;
    /**
      *
      * @type number
      * @memberof UserApilistGroupTargetsForRole
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
      * Specifies the pagination cursor for the next page of users
      * @type string
      * @memberof UserApilistUsers
      */
    after?: string;
    /**
      * Specifies the number of results returned
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
      * Searches for users with a supported filtering  expression for most properties
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
export interface UserApiPartialUpdateUserRequest {
    /**
      *
      * @type string
      * @memberof UserApipartialUpdateUser
      */
    userId: string;
    /**
      *
      * @type User
      * @memberof UserApipartialUpdateUser
      */
    user: User;
    /**
      *
      * @type boolean
      * @memberof UserApipartialUpdateUser
      */
    strict?: boolean;
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
export interface UserApiRemoveApplicationTargetFromAdministratorRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiremoveApplicationTargetFromAdministratorRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApiremoveApplicationTargetFromAdministratorRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof UserApiremoveApplicationTargetFromAdministratorRoleForUser
      */
    appName: string;
    /**
      *
      * @type string
      * @memberof UserApiremoveApplicationTargetFromAdministratorRoleForUser
      */
    applicationId: string;
}
export interface UserApiRemoveApplicationTargetFromApplicationAdministratorRoleForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiremoveApplicationTargetFromApplicationAdministratorRoleForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApiremoveApplicationTargetFromApplicationAdministratorRoleForUser
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof UserApiremoveApplicationTargetFromApplicationAdministratorRoleForUser
      */
    appName: string;
}
export interface UserApiRemoveGroupTargetFromRoleRequest {
    /**
      *
      * @type string
      * @memberof UserApiremoveGroupTargetFromRole
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApiremoveGroupTargetFromRole
      */
    roleId: string;
    /**
      *
      * @type string
      * @memberof UserApiremoveGroupTargetFromRole
      */
    groupId: string;
}
export interface UserApiRemoveLinkedObjectForUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiremoveLinkedObjectForUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApiremoveLinkedObjectForUser
      */
    relationshipName: string;
}
export interface UserApiRemoveRoleFromUserRequest {
    /**
      *
      * @type string
      * @memberof UserApiremoveRoleFromUser
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserApiremoveRoleFromUser
      */
    roleId: string;
}
export interface UserApiResetFactorsRequest {
    /**
      *
      * @type string
      * @memberof UserApiresetFactors
      */
    userId: string;
}
export interface UserApiResetPasswordRequest {
    /**
      *
      * @type string
      * @memberof UserApiresetPassword
      */
    userId: string;
    /**
      *
      * @type boolean
      * @memberof UserApiresetPassword
      */
    sendEmail: boolean;
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
      * @type User
      * @memberof UserApiupdateUser
      */
    user: User;
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
      * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
      * Activate User
      * @param param the request object
      */
  activateUser(param: UserApiActivateUserRequest, options?: Configuration): Promise<UserActivationToken>;
  /**
      * Success
      * Add All Apps as Target to Role
      * @param param the request object
      */
  addAllAppsAsTargetToRole(param: UserApiAddAllAppsAsTargetToRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Add Application Target to Admin Role for User
      * @param param the request object
      */
  addApplicationTargetToAdminRoleForUser(param: UserApiAddApplicationTargetToAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Add App Instance Target to App Administrator Role given to a User
      * Add App Instance Target to App Administrator Role given to a User
      * @param param the request object
      */
  addApplicationTargetToAppAdminRoleForUser(param: UserApiAddApplicationTargetToAppAdminRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Add Group Target to Role
      * @param param the request object
      */
  addGroupTargetToRole(param: UserApiAddGroupTargetToRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Assigns a role to a user.
      * Assign Role to User
      * @param param the request object
      */
  assignRoleToUser(param: UserApiAssignRoleToUserRequest, options?: Configuration): Promise<Role>;
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
      * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Clear User Sessions
      * @param param the request object
      */
  clearUserSessions(param: UserApiClearUserSessionsRequest, options?: Configuration): Promise<void>;
  /**
      * Creates a new user in your Okta organization with or without credentials.
      * Create User
      * @param param the request object
      */
  createUser(param: UserApiCreateUserRequest, options?: Configuration): Promise<User>;
  /**
      * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
      * Delete User
      * @param param the request object
      */
  deactivateOrDeleteUser(param: UserApiDeactivateOrDeleteUserRequest, options?: Configuration): Promise<void>;
  /**
      * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
      * Deactivate User
      * @param param the request object
      */
  deactivateUser(param: UserApiDeactivateUserRequest, options?: Configuration): Promise<void>;
  /**
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
      * Expire Password
      * @param param the request object
      */
  expirePassword(param: UserApiExpirePasswordRequest, options?: Configuration): Promise<User>;
  /**
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response.
      * Expire Password and Set Temporary Password
      * @param param the request object
      */
  expirePasswordAndGetTemporaryPassword(param: UserApiExpirePasswordAndGetTemporaryPasswordRequest, options?: Configuration): Promise<TempPassword>;
  /**
      * Initiate forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
      * Initiate Forgot Password
      * @param param the request object
      */
  forgotPassword(param: UserApiForgotPasswordRequest, options?: Configuration): Promise<ForgotPasswordResponse>;
  /**
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct.
      * Reset Password with Recovery Question
      * @param param the request object
      */
  forgotPasswordSetNewPassword(param: UserApiForgotPasswordSetNewPasswordRequest, options?: Configuration): Promise<UserCredentials>;
  /**
      * Get linked objects for a user, relationshipName can be a primary or associated relationship name
      * Get Linked Objects for User
      * @param param the request object
      */
  getLinkedObjectsForUser(param: UserApiGetLinkedObjectsForUserRequest, options?: Configuration): Promise<Collection<any>>;
  /**
      * Gets a refresh token issued for the specified User and Client.
      * Get Refresh Token for User and Client
      * @param param the request object
      */
  getRefreshTokenForUserAndClient(param: UserApiGetRefreshTokenForUserAndClientRequest, options?: Configuration): Promise<OAuth2RefreshToken>;
  /**
      * Fetches a user from your Okta organization.
      * Get User
      * @param param the request object
      */
  getUser(param: UserApiGetUserRequest, options?: Configuration): Promise<User>;
  /**
      * Gets a grant for the specified user
      * Get User Grant
      * @param param the request object
      */
  getUserGrant(param: UserApiGetUserGrantRequest, options?: Configuration): Promise<OAuth2ScopeConsentGrant>;
  /**
      * Gets role that is assigned to user.
      * Get User Role
      * @param param the request object
      */
  getUserRole(param: UserApiGetUserRoleRequest, options?: Configuration): Promise<Role>;
  /**
      * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
      * Get Assigned App Links
      * @param param the request object
      */
  listAppLinks(param: UserApiListAppLinksRequest, options?: Configuration): Promise<Collection<AppLink>>;
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List Application Targets for Application Administrator Role for User
      * @param param the request object
      */
  listApplicationTargetsForApplicationAdministratorRoleForUser(param: UserApiListApplicationTargetsForApplicationAdministratorRoleForUserRequest, options?: Configuration): Promise<Collection<CatalogApplication>>;
  /**
      * Lists all roles assigned to a user.
      * List Assigned Roles for User
      * @param param the request object
      */
  listAssignedRolesForUser(param: UserApiListAssignedRolesForUserRequest, options?: Configuration): Promise<Collection<Role>>;
  /**
      * Lists all grants for a specified user and client
      * List Grants for User and Client
      * @param param the request object
      */
  listGrantsForUserAndClient(param: UserApiListGrantsForUserAndClientRequest, options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Success
      * List Group Targets for Role
      * @param param the request object
      */
  listGroupTargetsForRole(param: UserApiListGroupTargetsForRoleRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Lists all refresh tokens issued for the specified User and Client.
      * List Refresh Tokens for User and Client
      * @param param the request object
      */
  listRefreshTokensForUserAndClient(param: UserApiListRefreshTokensForUserAndClientRequest, options?: Configuration): Promise<Collection<OAuth2RefreshToken>>;
  /**
      * Lists all client resources for which the specified user has grants or tokens.
      * List User Clients
      * @param param the request object
      */
  listUserClients(param: UserApiListUserClientsRequest, options?: Configuration): Promise<Collection<OAuth2Client>>;
  /**
      * Lists all grants for the specified user
      * List User Grants
      * @param param the request object
      */
  listUserGrants(param: UserApiListUserGrantsRequest, options?: Configuration): Promise<Collection<OAuth2ScopeConsentGrant>>;
  /**
      * Fetches the groups of which the user is a member.
      * Get Member Groups
      * @param param the request object
      */
  listUserGroups(param: UserApiListUserGroupsRequest, options?: Configuration): Promise<Collection<Group>>;
  /**
      * Lists the IdPs associated with the user.
      * Listing IdPs associated with a user
      * @param param the request object
      */
  listUserIdentityProviders(param: UserApiListUserIdentityProvidersRequest, options?: Configuration): Promise<Collection<IdentityProvider>>;
  /**
      * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List Users
      * @param param the request object
      */
  listUsers(param?: UserApiListUsersRequest, options?: Configuration): Promise<Collection<User>>;
  /**
      * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
      * Partial Update User
      * @param param the request object
      */
  partialUpdateUser(param: UserApiPartialUpdateUserRequest, options?: Configuration): Promise<User>;
  /**
      * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
      * Reactivate User
      * @param param the request object
      */
  reactivateUser(param: UserApiReactivateUserRequest, options?: Configuration): Promise<UserActivationToken>;
  /**
      * Remove App Instance Target to App Administrator Role given to a User
      * Remove App Instance Target to App Administrator Role given to a User
      * @param param the request object
      */
  removeApplicationTargetFromAdministratorRoleForUser(param: UserApiRemoveApplicationTargetFromAdministratorRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Remove Application Target from Application Administrator Role for User
      * @param param the request object
      */
  removeApplicationTargetFromApplicationAdministratorRoleForUser(param: UserApiRemoveApplicationTargetFromApplicationAdministratorRoleForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Success
      * Remove Group Target from Role
      * @param param the request object
      */
  removeGroupTargetFromRole(param: UserApiRemoveGroupTargetFromRoleRequest, options?: Configuration): Promise<void>;
  /**
      * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Remove Linked Object for User
      * @param param the request object
      */
  removeLinkedObjectForUser(param: UserApiRemoveLinkedObjectForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unassigns a role from a user.
      * Remove Role from User
      * @param param the request object
      */
  removeRoleFromUser(param: UserApiRemoveRoleFromUserRequest, options?: Configuration): Promise<void>;
  /**
      * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset Factors
      * @param param the request object
      */
  resetFactors(param: UserApiResetFactorsRequest, options?: Configuration): Promise<void>;
  /**
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Reset Password
      * @param param the request object
      */
  resetPassword(param: UserApiResetPasswordRequest, options?: Configuration): Promise<ResetPasswordToken>;
  /**
      * Revokes all grants for the specified user and client
      * Revoke Grants for User and Client
      * @param param the request object
      */
  revokeGrantsForUserAndClient(param: UserApiRevokeGrantsForUserAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes the specified refresh token.
      * Revoke Token for User and Client
      * @param param the request object
      */
  revokeTokenForUserAndClient(param: UserApiRevokeTokenForUserAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all refresh tokens issued for the specified User and Client.
      * Revoke Tokens for User and Client
      * @param param the request object
      */
  revokeTokensForUserAndClient(param: UserApiRevokeTokensForUserAndClientRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes one grant for a specified user
      * Revoke User Grant
      * @param param the request object
      */
  revokeUserGrant(param: UserApiRevokeUserGrantRequest, options?: Configuration): Promise<void>;
  /**
      * Revokes all grants for a specified user
      * Revoke User Grants
      * @param param the request object
      */
  revokeUserGrants(param: UserApiRevokeUserGrantsRequest, options?: Configuration): Promise<void>;
  /**
      * Sets a linked object for a user.
      * Set Linked Object for User
      * @param param the request object
      */
  setLinkedObjectForUser(param: UserApiSetLinkedObjectForUserRequest, options?: Configuration): Promise<void>;
  /**
      * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
      * Suspend User
      * @param param the request object
      */
  suspendUser(param: UserApiSuspendUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
      * Unlock User
      * @param param the request object
      */
  unlockUser(param: UserApiUnlockUserRequest, options?: Configuration): Promise<void>;
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend User
      * @param param the request object
      */
  unsuspendUser(param: UserApiUnsuspendUserRequest, options?: Configuration): Promise<void>;
  /**
      * Update a user's profile and/or credentials using strict-update semantics.
      * Update User
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
export interface UserFactorApiDeleteFactorRequest {
    /**
      *
      * @type string
      * @memberof UserFactorApideleteFactor
      */
    userId: string;
    /**
      *
      * @type string
      * @memberof UserFactorApideleteFactor
      */
    factorId: string;
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
      * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate Factor
      * @param param the request object
      */
  activateFactor(param: UserFactorApiActivateFactorRequest, options?: Configuration): Promise<UserFactor>;
  /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
      * Delete Factor
      * @param param the request object
      */
  deleteFactor(param: UserFactorApiDeleteFactorRequest, options?: Configuration): Promise<void>;
  /**
      * Enrolls a user with a supported factor.
      * Enroll Factor
      * @param param the request object
      */
  enrollFactor(param: UserFactorApiEnrollFactorRequest, options?: Configuration): Promise<UserFactor>;
  /**
      * Fetches a factor for the specified user
      * Get Factor
      * @param param the request object
      */
  getFactor(param: UserFactorApiGetFactorRequest, options?: Configuration): Promise<UserFactor>;
  /**
      * Polls factors verification transaction for status.
      * Get Factor Transaction Status
      * @param param the request object
      */
  getFactorTransactionStatus(param: UserFactorApiGetFactorTransactionStatusRequest, options?: Configuration): Promise<VerifyUserFactorResponse>;
  /**
      * Enumerates all the enrolled factors for the specified user
      * List Factors
      * @param param the request object
      */
  listFactors(param: UserFactorApiListFactorsRequest, options?: Configuration): Promise<Collection<UserFactor>>;
  /**
      * Enumerates all the supported factors that can be enrolled for the specified user
      * List Supported Factors
      * @param param the request object
      */
  listSupportedFactors(param: UserFactorApiListSupportedFactorsRequest, options?: Configuration): Promise<Collection<UserFactor>>;
  /**
      * Enumerates all available security questions for a user's `question` factor
      * List Supported Security Questions
      * @param param the request object
      */
  listSupportedSecurityQuestions(param: UserFactorApiListSupportedSecurityQuestionsRequest, options?: Configuration): Promise<Collection<SecurityQuestion>>;
  /**
      * Verifies an OTP for a `token` or `token:hardware` factor
      * Verify MFA Factor
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
      * Create User Type
      * @param param the request object
      */
  createUserType(param: UserTypeApiCreateUserTypeRequest, options?: Configuration): Promise<UserType>;
  /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * Delete User Type
      * @param param the request object
      */
  deleteUserType(param: UserTypeApiDeleteUserTypeRequest, options?: Configuration): Promise<void>;
  /**
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Get User Type
      * @param param the request object
      */
  getUserType(param: UserTypeApiGetUserTypeRequest, options?: Configuration): Promise<UserType>;
  /**
      * Fetches all User Types in your org
      * List User Types
      * @param param the request object
      */
  listUserTypes(param?: UserTypeApiListUserTypesRequest, options?: Configuration): Promise<Collection<UserType>>;
  /**
      * Replace an existing User Type
      * Replace User Type
      * @param param the request object
      */
  replaceUserType(param: UserTypeApiReplaceUserTypeRequest, options?: Configuration): Promise<UserType>;
  /**
      * Updates an existing User Type
      * Update User Type
      * @param param the request object
      */
  updateUserType(param: UserTypeApiUpdateUserTypeRequest, options?: Configuration): Promise<UserType>;
}
