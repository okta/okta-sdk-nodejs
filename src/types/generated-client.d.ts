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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

import { Collection } from './collection';
import { Application } from './models/Application';
import { ApplicationOptions } from './models/Application';
import { Response } from 'node-fetch';
import { Csr } from './models/Csr';
import { CsrMetadataOptions } from './models/CsrMetadata';
import { JsonWebKey } from './models/JsonWebKey';
import { OAuth2ScopeConsentGrant } from './models/OAuth2ScopeConsentGrant';
import { OAuth2ScopeConsentGrantOptions } from './models/OAuth2ScopeConsentGrant';
import { ApplicationGroupAssignment } from './models/ApplicationGroupAssignment';
import { ApplicationGroupAssignmentOptions } from './models/ApplicationGroupAssignment';
import { OAuth2Token } from './models/OAuth2Token';
import { AppUser } from './models/AppUser';
import { AppUserOptions } from './models/AppUser';
import { AuthorizationServer } from './models/AuthorizationServer';
import { AuthorizationServerOptions } from './models/AuthorizationServer';
import { OAuth2Claim } from './models/OAuth2Claim';
import { OAuth2ClaimOptions } from './models/OAuth2Claim';
import { OAuth2Client } from './models/OAuth2Client';
import { OAuth2RefreshToken } from './models/OAuth2RefreshToken';
import { JwkUseOptions } from './models/JwkUse';
import { AuthorizationServerPolicy } from './models/AuthorizationServerPolicy';
import { AuthorizationServerPolicyOptions } from './models/AuthorizationServerPolicy';
import { AuthorizationServerPolicyRule } from './models/AuthorizationServerPolicyRule';
import { AuthorizationServerPolicyRuleOptions } from './models/AuthorizationServerPolicyRule';
import { OAuth2Scope } from './models/OAuth2Scope';
import { OAuth2ScopeOptions } from './models/OAuth2Scope';
import { EventHook } from './models/EventHook';
import { EventHookOptions } from './models/EventHook';
import { Feature } from './models/Feature';
import { Group } from './models/Group';
import { GroupOptions } from './models/Group';
import { GroupRule } from './models/GroupRule';
import { GroupRuleOptions } from './models/GroupRule';
import { Role } from './models/Role';
import { AssignRoleRequestOptions } from './models/AssignRoleRequest';
import { CatalogApplication } from './models/CatalogApplication';
import { User } from './models/User';
import { IdentityProvider } from './models/IdentityProvider';
import { IdentityProviderOptions } from './models/IdentityProvider';
import { JsonWebKeyOptions } from './models/JsonWebKey';
import { IdentityProviderApplicationUser } from './models/IdentityProviderApplicationUser';
import { UserIdentityProviderLinkRequestOptions } from './models/UserIdentityProviderLinkRequest';
import { SocialAuthToken } from './models/SocialAuthToken';
import { InlineHook } from './models/InlineHook';
import { InlineHookOptions } from './models/InlineHook';
import { InlineHookPayloadOptions } from './models/InlineHookPayload';
import { InlineHookResponse } from './models/InlineHookResponse';
import { LogEvent } from './models/LogEvent';
import { ProfileMapping } from './models/ProfileMapping';
import { ProfileMappingOptions } from './models/ProfileMapping';
import { UserSchema } from './models/UserSchema';
import { UserSchemaOptions } from './models/UserSchema';
import { LinkedObject } from './models/LinkedObject';
import { LinkedObjectOptions } from './models/LinkedObject';
import { UserType } from './models/UserType';
import { UserTypeOptions } from './models/UserType';
import { PolicyOptions } from './models/Policy';
import { Policy } from './models/Policy';
import { PolicyRule } from './models/PolicyRule';
import { PolicyRuleOptions } from './models/PolicyRule';
import { CreateSessionRequestOptions } from './models/CreateSessionRequest';
import { Session } from './models/Session';
import { SmsTemplate } from './models/SmsTemplate';
import { SmsTemplateOptions } from './models/SmsTemplate';
import { ThreatInsightConfiguration } from './models/ThreatInsightConfiguration';
import { ThreatInsightConfigurationOptions } from './models/ThreatInsightConfiguration';
import { TrustedOrigin } from './models/TrustedOrigin';
import { TrustedOriginOptions } from './models/TrustedOrigin';
import { CreateUserRequestOptions } from './models/CreateUserRequest';
import { UserOptions } from './models/User';
import { AppLink } from './models/AppLink';
import { ChangePasswordRequestOptions } from './models/ChangePasswordRequest';
import { UserCredentials } from './models/UserCredentials';
import { UserCredentialsOptions } from './models/UserCredentials';
import { ForgotPasswordResponse } from './models/ForgotPasswordResponse';
import { UserFactor } from './models/UserFactor';
import { UserFactorOptions } from './models/UserFactor';
import { SecurityQuestion } from './models/SecurityQuestion';
import { ActivateFactorRequestOptions } from './models/ActivateFactorRequest';
import { VerifyUserFactorResponse } from './models/VerifyUserFactorResponse';
import { VerifyFactorRequestOptions } from './models/VerifyFactorRequest';
import { UserActivationToken } from './models/UserActivationToken';
import { TempPassword } from './models/TempPassword';
import { ResetPasswordToken } from './models/ResetPasswordToken';
import { ResponseLinks } from './models/ResponseLinks';
import { NetworkZone } from './models/NetworkZone';
import { NetworkZoneOptions } from './models/NetworkZone';

export declare class GeneratedApiClient {
  listApplications(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    filter?: string,
    expand?: string,
    includeNonDeleted?: boolean,
  }): Collection<Application>;
  createApplication(application: ApplicationOptions, queryParameters?: {
    activate?: boolean,
  }): Promise<Application>;
  deleteApplication(appId: string): Promise<Response>;
  getApplication(appId: string, queryParameters?: {
    expand?: string,
  }): Promise<Application>;
  updateApplication(appId: string, application: ApplicationOptions): Promise<Application>;
  listCsrsForApplication(appId: string): Collection<Csr>;
  generateCsrForApplication(appId: string, csrMetadata: CsrMetadataOptions): Promise<Csr>;
  revokeCsrFromApplication(appId: string, csrId: string): Promise<Response>;
  getCsrForApplication(appId: string, csrId: string): Promise<Csr>;
  publishCerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  listApplicationKeys(appId: string): Collection<JsonWebKey>;
  generateApplicationKey(appId: string, queryParameters?: {
    validityYears?: number,
  }): Promise<JsonWebKey>;
  getApplicationKey(appId: string, keyId: string): Promise<JsonWebKey>;
  cloneApplicationKey(appId: string, keyId: string, queryParameters: {
    targetAid: string,
  }): Promise<JsonWebKey>;
  listScopeConsentGrants(appId: string, queryParameters?: {
    expand?: string,
  }): Collection<OAuth2ScopeConsentGrant>;
  grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrantOptions): Promise<OAuth2ScopeConsentGrant>;
  revokeScopeConsentGrant(appId: string, grantId: string): Promise<Response>;
  getScopeConsentGrant(appId: string, grantId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2ScopeConsentGrant>;
  listApplicationGroupAssignments(appId: string, queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    expand?: string,
  }): Collection<ApplicationGroupAssignment>;
  deleteApplicationGroupAssignment(appId: string, groupId: string): Promise<Response>;
  getApplicationGroupAssignment(appId: string, groupId: string, queryParameters?: {
    expand?: string,
  }): Promise<ApplicationGroupAssignment>;
  createApplicationGroupAssignment(appId: string, groupId: string, applicationGroupAssignment?: ApplicationGroupAssignmentOptions): Promise<ApplicationGroupAssignment>;
  activateApplication(appId: string): Promise<Response>;
  deactivateApplication(appId: string): Promise<Response>;
  revokeOAuth2TokensForApplication(appId: string): Promise<Response>;
  listOAuth2TokensForApplication(appId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2Token>;
  revokeOAuth2TokenForApplication(appId: string, tokenId: string): Promise<Response>;
  getOAuth2TokenForApplication(appId: string, tokenId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2Token>;
  listApplicationUsers(appId: string, queryParameters?: {
    q?: string,
    query_scope?: string,
    after?: string,
    limit?: number,
    filter?: string,
    expand?: string,
  }): Collection<AppUser>;
  assignUserToApplication(appId: string, appUser: AppUserOptions): Promise<AppUser>;
  deleteApplicationUser(appId: string, userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<Response>;
  getApplicationUser(appId: string, userId: string, queryParameters?: {
    expand?: string,
  }): Promise<AppUser>;
  updateApplicationUser(appId: string, userId: string, appUser: AppUserOptions): Promise<AppUser>;
  listAuthorizationServers(queryParameters?: {
    q?: string,
    limit?: string,
    after?: string,
  }): Collection<AuthorizationServer>;
  createAuthorizationServer(authorizationServer: AuthorizationServerOptions): Promise<AuthorizationServer>;
  deleteAuthorizationServer(authServerId: string): Promise<Response>;
  getAuthorizationServer(authServerId: string): Promise<AuthorizationServer>;
  updateAuthorizationServer(authServerId: string, authorizationServer: AuthorizationServerOptions): Promise<AuthorizationServer>;
  listOAuth2Claims(authServerId: string): Collection<OAuth2Claim>;
  createOAuth2Claim(authServerId: string, oAuth2Claim: OAuth2ClaimOptions): Promise<OAuth2Claim>;
  deleteOAuth2Claim(authServerId: string, claimId: string): Promise<Response>;
  getOAuth2Claim(authServerId: string, claimId: string): Promise<OAuth2Claim>;
  updateOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: OAuth2ClaimOptions): Promise<OAuth2Claim>;
  listOAuth2ClientsForAuthorizationServer(authServerId: string): Collection<OAuth2Client>;
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string): Promise<Response>;
  listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2RefreshToken>;
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string): Promise<Response>;
  getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2RefreshToken>;
  listAuthorizationServerKeys(authServerId: string): Collection<JsonWebKey>;
  rotateAuthorizationServerKeys(authServerId: string, jwkUse: JwkUseOptions): Collection<JsonWebKey>;
  activateAuthorizationServer(authServerId: string): Promise<Response>;
  deactivateAuthorizationServer(authServerId: string): Promise<Response>;
  listAuthorizationServerPolicies(authServerId: string): Collection<AuthorizationServerPolicy>;
  createAuthorizationServerPolicy(authServerId: string, authorizationServerPolicy: AuthorizationServerPolicyOptions): Promise<AuthorizationServerPolicy>;
  deleteAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<Response>;
  getAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<AuthorizationServerPolicy>;
  updateAuthorizationServerPolicy(authServerId: string, policyId: string, authorizationServerPolicy: AuthorizationServerPolicyOptions): Promise<AuthorizationServerPolicy>;
  activateAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<Response>;
  deactivateAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<Response>;
  listAuthorizationServerPolicyRules(policyId: string, authServerId: string): Collection<AuthorizationServerPolicyRule>;
  createAuthorizationServerPolicyRule(policyId: string, authServerId: string, authorizationServerPolicyRule: AuthorizationServerPolicyRuleOptions): Promise<AuthorizationServerPolicyRule>;
  deleteAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string): Promise<Response>;
  getAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string): Promise<AuthorizationServerPolicyRule>;
  updateAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, authorizationServerPolicyRule: AuthorizationServerPolicyRuleOptions): Promise<AuthorizationServerPolicyRule>;
  activateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string): Promise<Response>;
  deactivateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string): Promise<Response>;
  listOAuth2Scopes(authServerId: string, queryParameters?: {
    q?: string,
    filter?: string,
    cursor?: string,
    limit?: number,
  }): Collection<OAuth2Scope>;
  createOAuth2Scope(authServerId: string, oAuth2Scope: OAuth2ScopeOptions): Promise<OAuth2Scope>;
  deleteOAuth2Scope(authServerId: string, scopeId: string): Promise<Response>;
  getOAuth2Scope(authServerId: string, scopeId: string): Promise<OAuth2Scope>;
  updateOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: OAuth2ScopeOptions): Promise<OAuth2Scope>;
  listEventHooks(): Collection<EventHook>;
  createEventHook(eventHook: EventHookOptions): Promise<EventHook>;
  deleteEventHook(eventHookId: string): Promise<Response>;
  getEventHook(eventHookId: string): Promise<EventHook>;
  updateEventHook(eventHookId: string, eventHook: EventHookOptions): Promise<EventHook>;
  activateEventHook(eventHookId: string): Promise<EventHook>;
  deactivateEventHook(eventHookId: string): Promise<EventHook>;
  verifyEventHook(eventHookId: string): Promise<EventHook>;
  listFeatures(): Collection<Feature>;
  getFeature(featureId: string): Promise<Feature>;
  listFeatureDependencies(featureId: string): Collection<Feature>;
  listFeatureDependents(featureId: string): Collection<Feature>;
  updateFeatureLifecycle(featureId: string, lifecycle: string, queryParameters?: {
    mode?: string,
  }): Promise<Feature>;
  listGroups(queryParameters?: {
    q?: string,
    filter?: string,
    after?: string,
    limit?: number,
    expand?: string,
  }): Collection<Group>;
  createGroup(group: GroupOptions): Promise<Group>;
  listGroupRules(queryParameters?: {
    limit?: number,
    after?: string,
    search?: string,
    expand?: string,
  }): Collection<GroupRule>;
  createGroupRule(groupRule: GroupRuleOptions): Promise<GroupRule>;
  deleteGroupRule(ruleId: string): Promise<Response>;
  getGroupRule(ruleId: string, queryParameters?: {
    expand?: string,
  }): Promise<GroupRule>;
  updateGroupRule(ruleId: string, groupRule: GroupRuleOptions): Promise<GroupRule>;
  activateGroupRule(ruleId: string): Promise<Response>;
  deactivateGroupRule(ruleId: string): Promise<Response>;
  deleteGroup(groupId: string): Promise<Response>;
  getGroup(groupId: string): Promise<Group>;
  updateGroup(groupId: string, group: GroupOptions): Promise<Group>;
  listAssignedApplicationsForGroup(groupId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<Application>;
  listGroupAssignedRoles(groupId: string, queryParameters?: {
    expand?: string,
  }): Collection<Role>;
  assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleRequestOptions, queryParameters?: {
    disableNotifications?: string,
  }): Promise<Role>;
  removeRoleFromGroup(groupId: string, roleId: string): Promise<Response>;
  getRole(groupId: string, roleId: string): Promise<Role>;
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<CatalogApplication>;
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string): Promise<Response>;
  addApplicationTargetToAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string): Promise<Response>;
  removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string): Promise<Response>;
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string): Promise<Response>;
  listGroupTargetsForGroupRole(groupId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<Group>;
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId: string, roleId: string, targetGroupId: string): Promise<Response>;
  addGroupTargetToGroupAdministratorRoleForGroup(groupId: string, roleId: string, targetGroupId: string): Promise<Response>;
  listGroupUsers(groupId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<User>;
  removeUserFromGroup(groupId: string, userId: string): Promise<Response>;
  addUserToGroup(groupId: string, userId: string): Promise<Response>;
  listIdentityProviders(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    type?: string,
  }): Collection<IdentityProvider>;
  createIdentityProvider(identityProvider: IdentityProviderOptions): Promise<IdentityProvider>;
  listIdentityProviderKeys(queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<JsonWebKey>;
  createIdentityProviderKey(jsonWebKey: JsonWebKeyOptions): Promise<JsonWebKey>;
  deleteIdentityProviderKey(keyId: string): Promise<Response>;
  getIdentityProviderKey(keyId: string): Promise<JsonWebKey>;
  deleteIdentityProvider(idpId: string): Promise<Response>;
  getIdentityProvider(idpId: string): Promise<IdentityProvider>;
  updateIdentityProvider(idpId: string, identityProvider: IdentityProviderOptions): Promise<IdentityProvider>;
  listCsrsForIdentityProvider(idpId: string): Collection<Csr>;
  generateCsrForIdentityProvider(idpId: string, csrMetadata: CsrMetadataOptions): Promise<Csr>;
  revokeCsrForIdentityProvider(idpId: string, csrId: string): Promise<Response>;
  getCsrForIdentityProvider(idpId: string, csrId: string): Promise<Csr>;
  publishCerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  listIdentityProviderSigningKeys(idpId: string): Collection<JsonWebKey>;
  generateIdentityProviderSigningKey(idpId: string, queryParameters: {
    validityYears: number,
  }): Promise<JsonWebKey>;
  getIdentityProviderSigningKey(idpId: string, keyId: string): Promise<JsonWebKey>;
  cloneIdentityProviderKey(idpId: string, keyId: string, queryParameters: {
    targetIdpId: string,
  }): Promise<JsonWebKey>;
  activateIdentityProvider(idpId: string): Promise<IdentityProvider>;
  deactivateIdentityProvider(idpId: string): Promise<IdentityProvider>;
  listIdentityProviderApplicationUsers(idpId: string): Collection<IdentityProviderApplicationUser>;
  unlinkUserFromIdentityProvider(idpId: string, userId: string): Promise<Response>;
  getIdentityProviderApplicationUser(idpId: string, userId: string): Promise<IdentityProviderApplicationUser>;
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequestOptions): Promise<IdentityProviderApplicationUser>;
  listSocialAuthTokens(idpId: string, userId: string): Collection<SocialAuthToken>;
  listInlineHooks(queryParameters?: {
    type?: string,
  }): Collection<InlineHook>;
  createInlineHook(inlineHook: InlineHookOptions): Promise<InlineHook>;
  deleteInlineHook(inlineHookId: string): Promise<Response>;
  getInlineHook(inlineHookId: string): Promise<InlineHook>;
  updateInlineHook(inlineHookId: string, inlineHook: InlineHookOptions): Promise<InlineHook>;
  executeInlineHook(inlineHookId: string, inlineHookPayload: InlineHookPayloadOptions): Promise<InlineHookResponse>;
  activateInlineHook(inlineHookId: string): Promise<InlineHook>;
  deactivateInlineHook(inlineHookId: string): Promise<InlineHook>;
  getLogs(queryParameters?: {
    since?: string,
    until?: string,
    filter?: string,
    q?: string,
    limit?: number,
    sortOrder?: string,
    after?: string,
  }): Collection<LogEvent>;
  listProfileMappings(queryParameters?: {
    after?: string,
    limit?: number,
    sourceId?: string,
    targetId?: string,
  }): Collection<ProfileMapping>;
  getProfileMapping(mappingId: string): Promise<ProfileMapping>;
  updateProfileMapping(mappingId: string, profileMapping: ProfileMappingOptions): Promise<ProfileMapping>;
  getApplicationUserSchema(appInstanceId: string): Promise<UserSchema>;
  updateApplicationUserProfile(appInstanceId: string, userSchema?: UserSchemaOptions): Promise<UserSchema>;
  listLinkedObjectDefinitions(): Collection<LinkedObject>;
  addLinkedObjectDefinition(linkedObject: LinkedObjectOptions): Promise<LinkedObject>;
  deleteLinkedObjectDefinition(linkedObjectName: string): Promise<Response>;
  getLinkedObjectDefinition(linkedObjectName: string): Promise<LinkedObject>;
  getUserSchema(schemaId: string): Promise<UserSchema>;
  updateUserProfile(schemaId: string, userSchema: UserSchemaOptions): Promise<UserSchema>;
  listUserTypes(): Collection<UserType>;
  createUserType(userType: UserTypeOptions): Promise<UserType>;
  deleteUserType(typeId: string): Promise<Response>;
  getUserType(typeId: string): Promise<UserType>;
  updateUserType(typeId: string, userType: UserTypeOptions): Promise<UserType>;
  replaceUserType(typeId: string, userType: UserTypeOptions): Promise<UserType>;
  listPolicies(queryParameters: {
    type: string,
    status?: string,
    expand?: string,
  }): Collection<AuthorizationServerPolicy>;
  createPolicy(policy: PolicyOptions, queryParameters?: {
    activate?: boolean,
  }): Promise<Policy>;
  deletePolicy(policyId: string): Promise<Response>;
  getPolicy(policyId: string, queryParameters?: {
    expand?: string,
  }): Promise<Policy>;
  updatePolicy(policyId: string, policy: PolicyOptions): Promise<Policy>;
  activatePolicy(policyId: string): Promise<Response>;
  deactivatePolicy(policyId: string): Promise<Response>;
  listPolicyRules(policyId: string): Collection<PolicyRule>;
  createPolicyRule(policyId: string, policyRule: PolicyRuleOptions): Promise<PolicyRule>;
  deletePolicyRule(policyId: string, ruleId: string): Promise<Response>;
  getPolicyRule(policyId: string, ruleId: string): Promise<PolicyRule>;
  updatePolicyRule(policyId: string, ruleId: string, policyRule: PolicyRuleOptions): Promise<PolicyRule>;
  activatePolicyRule(policyId: string, ruleId: string): Promise<Response>;
  deactivatePolicyRule(policyId: string, ruleId: string): Promise<Response>;
  createSession(createSessionRequest: CreateSessionRequestOptions): Promise<Session>;
  endSession(sessionId: string): Promise<Response>;
  getSession(sessionId: string): Promise<Session>;
  refreshSession(sessionId: string): Promise<Session>;
  listSmsTemplates(queryParameters?: {
    templateType?: string,
  }): Collection<SmsTemplate>;
  createSmsTemplate(smsTemplate: SmsTemplateOptions): Promise<SmsTemplate>;
  deleteSmsTemplate(templateId: string): Promise<Response>;
  getSmsTemplate(templateId: string): Promise<SmsTemplate>;
  partialUpdateSmsTemplate(templateId: string, smsTemplate: SmsTemplateOptions): Promise<SmsTemplate>;
  updateSmsTemplate(templateId: string, smsTemplate: SmsTemplateOptions): Promise<SmsTemplate>;
  getCurrentConfiguration(): Promise<ThreatInsightConfiguration>;
  updateConfiguration(threatInsightConfiguration: ThreatInsightConfigurationOptions): Promise<ThreatInsightConfiguration>;
  listOrigins(queryParameters?: {
    q?: string,
    filter?: string,
    after?: string,
    limit?: number,
  }): Collection<TrustedOrigin>;
  createOrigin(trustedOrigin: TrustedOriginOptions): Promise<TrustedOrigin>;
  deleteOrigin(trustedOriginId: string): Promise<Response>;
  getOrigin(trustedOriginId: string): Promise<TrustedOrigin>;
  updateOrigin(trustedOriginId: string, trustedOrigin: TrustedOriginOptions): Promise<TrustedOrigin>;
  activateOrigin(trustedOriginId: string): Promise<TrustedOrigin>;
  deactivateOrigin(trustedOriginId: string): Promise<TrustedOrigin>;
  listUsers(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    filter?: string,
    search?: string,
    sortBy?: string,
    sortOrder?: string,
  }): Collection<User>;
  createUser(createUserRequest: CreateUserRequestOptions, queryParameters?: {
    activate?: boolean,
    provider?: boolean,
    nextLogin?: string,
  }): Promise<User>;
  setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string): Promise<Response>;
  deactivateOrDeleteUser(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<Response>;
  getUser(userId: string): Promise<User>;
  partialUpdateUser(userId: string, user: UserOptions, queryParameters?: {
    strict?: boolean,
  }): Promise<User>;
  updateUser(userId: string, user: UserOptions, queryParameters?: {
    strict?: boolean,
  }): Promise<User>;
  listAppLinks(userId: string): Collection<AppLink>;
  listUserClients(userId: string): Collection<OAuth2Client>;
  revokeGrantsForUserAndClient(userId: string, clientId: string): Promise<Response>;
  listGrantsForUserAndClient(userId: string, clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2ScopeConsentGrant>;
  revokeTokensForUserAndClient(userId: string, clientId: string): Promise<Response>;
  listRefreshTokensForUserAndClient(userId: string, clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2RefreshToken>;
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string): Promise<Response>;
  getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, queryParameters?: {
    expand?: string,
    limit?: number,
    after?: string,
  }): Promise<OAuth2RefreshToken>;
  changePassword(userId: string, changePasswordRequest: ChangePasswordRequestOptions, queryParameters?: {
    strict?: boolean,
  }): Promise<UserCredentials>;
  changeRecoveryQuestion(userId: string, userCredentials: UserCredentialsOptions): Promise<UserCredentials>;
  forgotPasswordGenerateOneTimeToken(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<ForgotPasswordResponse>;
  forgotPasswordSetNewPassword(userId: string, userCredentials: UserCredentialsOptions, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<ForgotPasswordResponse>;
  listFactors(userId: string): Collection<UserFactor>;
  enrollFactor(userId: string, userFactor: UserFactorOptions, queryParameters?: {
    updatePhone?: boolean,
    templateId?: string,
    tokenLifetimeSeconds?: number,
    activate?: boolean,
  }): Promise<UserFactor>;
  listSupportedFactors(userId: string): Collection<UserFactor>;
  listSupportedSecurityQuestions(userId: string): Collection<SecurityQuestion>;
  deleteFactor(userId: string, factorId: string): Promise<Response>;
  getFactor(userId: string, factorId: string): Promise<UserFactor>;
  activateFactor(userId: string, factorId: string, activateFactorRequest?: ActivateFactorRequestOptions): Promise<UserFactor>;
  getFactorTransactionStatus(userId: string, factorId: string, transactionId: string): Promise<VerifyUserFactorResponse>;
  verifyFactor(userId: string, factorId: string, verifyFactorRequest?: VerifyFactorRequestOptions, queryParameters?: {
    templateId?: string,
    tokenLifetimeSeconds?: number,
  }): Promise<VerifyUserFactorResponse>;
  revokeUserGrants(userId: string): Promise<Response>;
  listUserGrants(userId: string, queryParameters?: {
    scopeId?: string,
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2ScopeConsentGrant>;
  revokeUserGrant(userId: string, grantId: string): Promise<Response>;
  getUserGrant(userId: string, grantId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2ScopeConsentGrant>;
  listUserGroups(userId: string): Collection<Group>;
  listUserIdentityProviders(userId: string): Collection<IdentityProvider>;
  activateUser(userId: string, queryParameters: {
    sendEmail: boolean,
  }): Promise<UserActivationToken>;
  deactivateUser(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<Response>;
  expirePassword(userId: string): Promise<User>;
  expirePasswordAndGetTemporaryPassword(userId: string): Promise<TempPassword>;
  reactivateUser(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<UserActivationToken>;
  resetFactors(userId: string): Promise<Response>;
  resetPassword(userId: string, queryParameters: {
    sendEmail: boolean,
  }): Promise<ResetPasswordToken>;
  suspendUser(userId: string): Promise<Response>;
  unlockUser(userId: string): Promise<Response>;
  unsuspendUser(userId: string): Promise<Response>;
  removeLinkedObjectForUser(userId: string, relationshipName: string): Promise<Response>;
  getLinkedObjectsForUser(userId: string, relationshipName: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<ResponseLinks>;
  listAssignedRolesForUser(userId: string, queryParameters?: {
    expand?: string,
  }): Collection<Role>;
  assignRoleToUser(userId: string, assignRoleRequest: AssignRoleRequestOptions, queryParameters?: {
    disableNotifications?: string,
  }): Promise<Role>;
  removeRoleFromUser(userId: string, roleId: string): Promise<Response>;
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<CatalogApplication>;
  addAllAppsAsTargetToRole(userId: string, roleId: string): Promise<Response>;
  removeApplicationTargetFromApplicationAdministratorRoleForUser(userId: string, roleId: string, appName: string): Promise<Response>;
  addApplicationTargetToAdminRoleForUser(userId: string, roleId: string, appName: string): Promise<Response>;
  removeApplicationTargetFromAdministratorRoleForUser(userId: string, roleId: string, appName: string, applicationId: string): Promise<Response>;
  addApplicationTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string): Promise<Response>;
  listGroupTargetsForRole(userId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<Group>;
  removeGroupTargetFromRole(userId: string, roleId: string, groupId: string): Promise<Response>;
  addGroupTargetToRole(userId: string, roleId: string, groupId: string): Promise<Response>;
  clearUserSessions(userId: string, queryParameters?: {
    oauthTokens?: boolean,
  }): Promise<Response>;
  listNetworkZones(queryParameters?: {
    after?: string,
    limit?: number,
    filter?: string,
  }): Collection<NetworkZone>;
  createNetworkZone(networkZone: NetworkZoneOptions): Promise<NetworkZone>;
  deleteNetworkZone(zoneId: string): Promise<Response>;
  getNetworkZone(zoneId: string): Promise<NetworkZone>;
  updateNetworkZone(zoneId: string, networkZone: NetworkZoneOptions): Promise<NetworkZone>;
  activateNetworkZone(zoneId: string): Promise<Response>;
  deactivateNetworkZone(zoneId: string): Promise<Response>;
}
