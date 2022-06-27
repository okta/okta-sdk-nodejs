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

import { ReadStream } from 'fs';
import { ApplicationOptions } from './parameterized-operations-client';
import * as v3 from './generated';
import { JsonWebKey } from './models/JsonWebKey';
import { Collection } from './collection';
import { Policy } from './models/Policy';
import { PolicyOptions } from './models/Policy';
import { Response } from 'node-fetch';
import { PolicyRule } from './models/PolicyRule';
import { PolicyRuleOptions } from './models/PolicyRule';
import { Subscription } from './models/Subscription';
import { CreateSessionRequestOptions } from './models/CreateSessionRequest';
import { Session } from './models/Session';
import { SmsTemplate } from './models/SmsTemplate';
import { SmsTemplateOptions } from './models/SmsTemplate';
import { ForgotPasswordResponse } from './models/ForgotPasswordResponse';

export declare class GeneratedApiClient {
  listApplications(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    filter?: string,
    expand?: string,
    includeNonDeleted?: boolean,
  }): Promise<Collection<v3.Application>>;
  createApplication(application: v3.Application, queryParameters?: {
    activate?: boolean,
  }, headerParameters?: {
    OktaAccessGateway_Agent?: string,
  }): Promise<v3.Application>;
  deleteApplication(appId: string): Promise<void>;
  getApplication(appId: string, queryParameters?: {
    expand?: string,
  }): Promise<v3.Application>;
  updateApplication(appId: string, application: v3.Application): Promise<v3.Application>;
  getDefaultProvisioningConnectionForApplication(appId: string): Promise<v3.ProvisioningConnection>;
  setDefaultProvisioningConnectionForApplication(appId: string, provisioningConnectionRequest: v3.ProvisioningConnectionRequest, queryParameters?: {
    activate?: boolean,
  }): Promise<v3.ProvisioningConnection>;
  activateDefaultProvisioningConnectionForApplication(appId: string): Promise<void>;
  deactivateDefaultProvisioningConnectionForApplication(appId: string): Promise<void>;
  listCsrsForApplication(appId: string): Promise<Collection<v3.Csr>>;
  generateCsrForApplication(appId: string, csrMetadata: v3.CsrMetadata): Promise<v3.Csr>;
  revokeCsrFromApplication(appId: string, csrId: string): Promise<void>;
  getCsrForApplication(appId: string, csrId: string): Promise<v3.Csr>;
  publishCerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  listApplicationKeys(appId: string): Promise<Collection<v3.JsonWebKey>>;
  generateApplicationKey(appId: string, queryParameters?: {
    validityYears?: number,
  }): Promise<v3.JsonWebKey>;
  getApplicationKey(appId: string, keyId: string): Promise<v3.JsonWebKey>;
  cloneApplicationKey(appId: string, keyId: string, queryParameters: {
    targetAid: string,
  }): Promise<v3.JsonWebKey>;
  listFeaturesForApplication(appId: string): Promise<Collection<v3.ApplicationFeature>>;
  getFeatureForApplication(appId: string, name: string): Promise<v3.ApplicationFeature>;
  updateFeatureForApplication(appId: string, name: string, capabilitiesObject: v3.CapabilitiesObject): Promise<v3.ApplicationFeature>;
  listScopeConsentGrants(appId: string, queryParameters?: {
    expand?: string,
  }): Promise<Collection<v3.OAuth2ScopeConsentGrant>>;
  grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: v3.OAuth2ScopeConsentGrant): Promise<v3.OAuth2ScopeConsentGrant>;
  revokeScopeConsentGrant(appId: string, grantId: string): Promise<void>;
  getScopeConsentGrant(appId: string, grantId: string, queryParameters?: {
    expand?: string,
  }): Promise<v3.OAuth2ScopeConsentGrant>;
  listApplicationGroupAssignments(appId: string, queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    expand?: string,
  }): Promise<Collection<v3.ApplicationGroupAssignment>>;
  deleteApplicationGroupAssignment(appId: string, groupId: string): Promise<void>;
  getApplicationGroupAssignment(appId: string, groupId: string, queryParameters?: {
    expand?: string,
  }): Promise<v3.ApplicationGroupAssignment>;
  createApplicationGroupAssignment(appId: string, groupId: string, applicationGroupAssignment?: v3.ApplicationGroupAssignment): Promise<v3.ApplicationGroupAssignment>;
  activateApplication(appId: string): Promise<void>;
  deactivateApplication(appId: string): Promise<void>;
  uploadApplicationLogo(appId: string, file: ReadStream): Promise<void>;
  updateApplicationPolicy(appId: string, policyId: string): Promise<Response>;
  revokeOAuth2TokensForApplication(appId: string): Promise<void>;
  listOAuth2TokensForApplication(appId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.OAuth2Token>>;
  revokeOAuth2TokenForApplication(appId: string, tokenId: string): Promise<void>;
  getOAuth2TokenForApplication(appId: string, tokenId: string, queryParameters?: {
    expand?: string,
  }): Promise<v3.OAuth2Token>;
  listApplicationUsers(appId: string, queryParameters?: {
    q?: string,
    query_scope?: string,
    after?: string,
    limit?: number,
    filter?: string,
    expand?: string,
  }): Promise<Collection<v3.AppUser>>;
  assignUserToApplication(appId: string, appUser: v3.AppUser): Promise<v3.AppUser>;
  deleteApplicationUser(appId: string, userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<void>;
  getApplicationUser(appId: string, userId: string, queryParameters?: {
    expand?: string,
  }): Promise<v3.AppUser>;
  updateApplicationUser(appId: string, userId: string, appUser: v3.AppUser): Promise<v3.AppUser>;
  listAuthenticators(): Promise<Collection<v3.Authenticator>>;
  getAuthenticator(authenticatorId: string): Promise<v3.Authenticator>;
  updateAuthenticator(authenticatorId: string, authenticator: v3.Authenticator): Promise<v3.Authenticator>;
  activateAuthenticator(authenticatorId: string): Promise<v3.Authenticator>;
  deactivateAuthenticator(authenticatorId: string): Promise<v3.Authenticator>;
  listAuthorizationServers(queryParameters?: {
    q?: string,
    limit?: string,
    after?: string,
  }): Promise<Collection<v3.AuthorizationServer>>;
  createAuthorizationServer(authorizationServer: v3.AuthorizationServer): Promise<v3.AuthorizationServer>;
  deleteAuthorizationServer(authServerId: string): Promise<void>;
  getAuthorizationServer(authServerId: string): Promise<v3.AuthorizationServer>;
  updateAuthorizationServer(authServerId: string, authorizationServer: v3.AuthorizationServer): Promise<v3.AuthorizationServer>;
  listOAuth2Claims(authServerId: string): Promise<Collection<v3.OAuth2Claim>>;
  createOAuth2Claim(authServerId: string, oAuth2Claim: v3.OAuth2Claim): Promise<v3.OAuth2Claim>;
  deleteOAuth2Claim(authServerId: string, claimId: string): Promise<void>;
  getOAuth2Claim(authServerId: string, claimId: string): Promise<v3.OAuth2Claim>;
  updateOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: v3.OAuth2Claim): Promise<v3.OAuth2Claim>;
  listOAuth2ClientsForAuthorizationServer(authServerId: string): Promise<Collection<v3.OAuth2Client>>;
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string): Promise<void>;
  listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.OAuth2RefreshToken>>;
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string): Promise<void>;
  getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, queryParameters?: {
    expand?: string,
  }): Promise<v3.OAuth2RefreshToken>;
  listAuthorizationServerKeys(authServerId: string): Promise<Collection<v3.JsonWebKey>>;
  rotateAuthorizationServerKeys(authServerId: string, jwkUse: v3.JwkUse): Promise<Collection<v3.JsonWebKey>>;
  activateAuthorizationServer(authServerId: string): Promise<void>;
  deactivateAuthorizationServer(authServerId: string): Promise<void>;
  listAuthorizationServerPolicies(authServerId: string): Promise<Collection<v3.AuthorizationServerPolicy>>;
  createAuthorizationServerPolicy(authServerId: string, authorizationServerPolicy: v3.AuthorizationServerPolicy): Promise<v3.AuthorizationServerPolicy>;
  deleteAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<void>;
  getAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<v3.AuthorizationServerPolicy>;
  updateAuthorizationServerPolicy(authServerId: string, policyId: string, authorizationServerPolicy: v3.AuthorizationServerPolicy): Promise<v3.AuthorizationServerPolicy>;
  activateAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<void>;
  deactivateAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<void>;
  listAuthorizationServerPolicyRules(policyId: string, authServerId: string): Promise<Collection<v3.AuthorizationServerPolicyRule>>;
  createAuthorizationServerPolicyRule(policyId: string, authServerId: string, authorizationServerPolicyRule: v3.AuthorizationServerPolicyRule): Promise<v3.AuthorizationServerPolicyRule>;
  deleteAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string): Promise<void>;
  getAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string): Promise<v3.AuthorizationServerPolicyRule>;
  updateAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, authorizationServerPolicyRule: v3.AuthorizationServerPolicyRule): Promise<v3.AuthorizationServerPolicyRule>;
  activateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string): Promise<void>;
  deactivateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string): Promise<void>;
  listOAuth2Scopes(authServerId: string, queryParameters?: {
    q?: string,
    filter?: string,
    cursor?: string,
    limit?: number,
  }): Promise<Collection<v3.OAuth2Scope>>;
  createOAuth2Scope(authServerId: string, oAuth2Scope: v3.OAuth2Scope): Promise<v3.OAuth2Scope>;
  deleteOAuth2Scope(authServerId: string, scopeId: string): Promise<void>;
  getOAuth2Scope(authServerId: string, scopeId: string): Promise<v3.OAuth2Scope>;
  updateOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: v3.OAuth2Scope): Promise<v3.OAuth2Scope>;
  listBrands(): Promise<Collection<v3.Brand>>;
  getBrand(brandId: string): Promise<v3.Brand>;
  updateBrand(brandId: string, brand: v3.Brand): Promise<v3.Brand>;
  listEmailTemplates(brandId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.EmailTemplate>>;
  getEmailTemplate(brandId: string, templateName: string): Promise<v3.EmailTemplate>;
  deleteEmailTemplateCustomizations(brandId: string, templateName: string): Promise<void>;
  listEmailTemplateCustomizations(brandId: string, templateName: string): Promise<Collection<v3.EmailCustomization>>;
  createEmailTemplateCustomization(brandId: string, templateName: string, instance: v3.EmailCustomization): Promise<v3.EmailCustomization>;
  deleteEmailTemplateCustomization(brandId: string, templateName: string, customizationId: string): Promise<void>;
  getEmailTemplateCustomization(brandId: string, templateName: string, customizationId: string): Promise<v3.EmailCustomization>;
  updateEmailTemplateCustomization(brandId: string, templateName: string, customizationId: string, instance: v3.EmailCustomization): Promise<v3.EmailCustomization>;
  getEmailTemplateCustomizationPreview(brandId: string, templateName: string, customizationId: string): Promise<v3.EmailPreview>;
  getEmailTemplateDefaultContent(brandId: string, templateName: string): Promise<v3.EmailDefaultContent>;
  getEmailTemplateDefaultContentPreview(brandId: string, templateName: string): Promise<v3.EmailPreview>;
  sendTestEmail(brandId: string, templateName: string, language: string): Promise<void>;
  listBrandThemes(brandId: string): Promise<Collection<v3.ThemeResponse>>;
  getBrandTheme(brandId: string, themeId: string): Promise<v3.ThemeResponse>;
  updateBrandTheme(brandId: string, themeId: string, theme: v3.Theme): Promise<v3.ThemeResponse>;
  deleteBrandThemeBackgroundImage(brandId: string, themeId: string): Promise<void>;
  uploadBrandThemeBackgroundImage(brandId: string, themeId: string, file: ReadStream): Promise<v3.ImageUploadResponse>;
  deleteBrandThemeFavicon(brandId: string, themeId: string): Promise<void>;
  uploadBrandThemeFavicon(brandId: string, themeId: string, file: ReadStream): Promise<v3.ImageUploadResponse>;
  deleteBrandThemeLogo(brandId: string, themeId: string): Promise<void>;
  uploadBrandThemeLogo(brandId: string, themeId: string, file: ReadStream): Promise<v3.ImageUploadResponse>;
  listDomains(): Promise<v3.DomainListResponse>;
  createDomain(domain: v3.Domain): Promise<v3.Domain>;
  deleteDomain(domainId: string): Promise<void>;
  getDomain(domainId: string): Promise<v3.Domain>;
  createCertificate(domainId: string, domainCertificate: v3.DomainCertificate): Promise<void>;
  verifyDomain(domainId: string): Promise<v3.Domain>;
  listEventHooks(): Promise<Collection<v3.EventHook>>;
  createEventHook(eventHook: v3.EventHook): Promise<v3.EventHook>;
  deleteEventHook(eventHookId: string): Promise<void>;
  getEventHook(eventHookId: string): Promise<v3.EventHook>;
  updateEventHook(eventHookId: string, eventHook: v3.EventHook): Promise<v3.EventHook>;
  activateEventHook(eventHookId: string): Promise<v3.EventHook>;
  deactivateEventHook(eventHookId: string): Promise<v3.EventHook>;
  verifyEventHook(eventHookId: string): Promise<v3.EventHook>;
  listFeatures(): Promise<Collection<v3.Feature>>;
  getFeature(featureId: string): Promise<v3.Feature>;
  listFeatureDependencies(featureId: string): Promise<Collection<v3.Feature>>;
  listFeatureDependents(featureId: string): Promise<Collection<v3.Feature>>;
  updateFeatureLifecycle(featureId: string, lifecycle: string, queryParameters?: {
    mode?: string,
  }): Promise<v3.Feature>;
  listGroups(queryParameters?: {
    q?: string,
    filter?: string,
    after?: string,
    limit?: number,
    expand?: string,
    search?: string,
  }): Promise<Collection<v3.Group>>;
  createGroup(group: v3.Group): Promise<v3.Group>;
  listGroupRules(queryParameters?: {
    limit?: number,
    after?: string,
    search?: string,
    expand?: string,
  }): Promise<Collection<v3.GroupRule>>;
  createGroupRule(groupRule: v3.GroupRule): Promise<v3.GroupRule>;
  deleteGroupRule(ruleId: string, queryParameters?: {
    removeUsers?: boolean,
  }): Promise<void>;
  getGroupRule(ruleId: string, queryParameters?: {
    expand?: string,
  }): Promise<v3.GroupRule>;
  updateGroupRule(ruleId: string, groupRule: v3.GroupRule): Promise<v3.GroupRule>;
  activateGroupRule(ruleId: string): Promise<void>;
  deactivateGroupRule(ruleId: string): Promise<void>;
  deleteGroup(groupId: string): Promise<void>;
  getGroup(groupId: string): Promise<v3.Group>;
  updateGroup(groupId: string, group: v3.Group): Promise<v3.Group>;
  listAssignedApplicationsForGroup(groupId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.Application>>;
  listGroupAssignedRoles(groupId: string, queryParameters?: {
    expand?: string,
  }): Promise<Collection<v3.Role>>;
  assignRoleToGroup(groupId: string, assignRoleRequest: v3.AssignRoleRequest, queryParameters?: {
    disableNotifications?: boolean,
  }): Promise<v3.Role | void>;
  removeRoleFromGroup(groupId: string, roleId: string): Promise<void>;
  getRole(groupId: string, roleId: string): Promise<v3.Role>;
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.CatalogApplication>>;
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string): Promise<void>;
  addApplicationTargetToAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string): Promise<void>;
  removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string): Promise<void>;
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string): Promise<void>;
  listGroupTargetsForGroupRole(groupId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.Group>>;
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId: string, roleId: string, targetGroupId: string): Promise<void>;
  addGroupTargetToGroupAdministratorRoleForGroup(groupId: string, roleId: string, targetGroupId: string): Promise<void>;
  listGroupUsers(groupId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.User>>;
  removeUserFromGroup(groupId: string, userId: string): Promise<void>;
  addUserToGroup(groupId: string, userId: string): Promise<void>;
  listIdentityProviders(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    type?: string,
  }): Promise<Collection<v3.IdentityProvider>>;
  createIdentityProvider(identityProvider: v3.IdentityProvider): Promise<v3.IdentityProvider>;
  listIdentityProviderKeys(queryParameters?: {
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.JsonWebKey>>;
  createIdentityProviderKey(jsonWebKey: v3.JsonWebKey): Promise<v3.JsonWebKey>;
  deleteIdentityProviderKey(keyId: string): Promise<void>;
  getIdentityProviderKey(keyId: string): Promise<v3.JsonWebKey>;
  deleteIdentityProvider(idpId: string): Promise<void>;
  getIdentityProvider(idpId: string): Promise<v3.IdentityProvider>;
  updateIdentityProvider(idpId: string, identityProvider: v3.IdentityProvider): Promise<v3.IdentityProvider>;
  listCsrsForIdentityProvider(idpId: string): Promise<Collection<v3.Csr>>;
  generateCsrForIdentityProvider(idpId: string, csrMetadata: v3.CsrMetadata): Promise<v3.Csr>;
  revokeCsrForIdentityProvider(idpId: string, csrId: string): Promise<void>;
  getCsrForIdentityProvider(idpId: string, csrId: string): Promise<v3.Csr>;
  publishCerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  listIdentityProviderSigningKeys(idpId: string): Promise<Collection<v3.JsonWebKey>>;
  generateIdentityProviderSigningKey(idpId: string, queryParameters: {
    validityYears: number,
  }): Promise<v3.JsonWebKey>;
  getIdentityProviderSigningKey(idpId: string, keyId: string): Promise<v3.JsonWebKey>;
  cloneIdentityProviderKey(idpId: string, keyId: string, queryParameters: {
    targetIdpId: string,
  }): Promise<v3.JsonWebKey>;
  activateIdentityProvider(idpId: string): Promise<v3.IdentityProvider>;
  deactivateIdentityProvider(idpId: string): Promise<v3.IdentityProvider>;
  listIdentityProviderApplicationUsers(idpId: string): Promise<Collection<v3.IdentityProviderApplicationUser>>;
  unlinkUserFromIdentityProvider(idpId: string, userId: string): Promise<void>;
  getIdentityProviderApplicationUser(idpId: string, userId: string): Promise<v3.IdentityProviderApplicationUser>;
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: v3.UserIdentityProviderLinkRequest): Promise<v3.IdentityProviderApplicationUser>;
  listSocialAuthTokens(idpId: string, userId: string): Promise<Collection<v3.SocialAuthToken>>;
  listInlineHooks(queryParameters?: {
    type?: string,
  }): Promise<Collection<v3.InlineHook>>;
  createInlineHook(inlineHook: v3.InlineHook): Promise<v3.InlineHook>;
  deleteInlineHook(inlineHookId: string): Promise<void>;
  getInlineHook(inlineHookId: string): Promise<v3.InlineHook>;
  updateInlineHook(inlineHookId: string, inlineHook: v3.InlineHook): Promise<v3.InlineHook>;
  executeInlineHook(inlineHookId: string, inlineHookPayload: v3.InlineHookPayload): Promise<v3.InlineHookResponse>;
  activateInlineHook(inlineHookId: string): Promise<v3.InlineHook>;
  deactivateInlineHook(inlineHookId: string): Promise<v3.InlineHook>;
  getLogs(queryParameters?: {
    since?: string,
    until?: string,
    filter?: string,
    q?: string,
    limit?: number,
    sortOrder?: string,
    after?: string,
  }): Promise<Collection<v3.LogEvent>>;
  listProfileMappings(queryParameters?: {
    after?: string,
    limit?: number,
    sourceId?: string,
    targetId?: string,
  }): Promise<Collection<v3.ProfileMapping>>;
  getProfileMapping(mappingId: string): Promise<v3.ProfileMapping>;
  updateProfileMapping(mappingId: string, profileMapping: v3.ProfileMapping): Promise<v3.ProfileMapping>;
  getApplicationUserSchema(appInstanceId: string): Promise<v3.UserSchema>;
  updateApplicationUserProfile(appInstanceId: string, userSchema?: v3.UserSchema): Promise<v3.UserSchema>;
  getGroupSchema(): Promise<v3.GroupSchema>;
  updateGroupSchema(groupSchema?: v3.GroupSchema): Promise<v3.GroupSchema>;
  listLinkedObjectDefinitions(): Promise<Collection<v3.LinkedObject>>;
  addLinkedObjectDefinition(linkedObject: v3.LinkedObject): Promise<v3.LinkedObject>;
  deleteLinkedObjectDefinition(linkedObjectName: string): Promise<void>;
  getLinkedObjectDefinition(linkedObjectName: string): Promise<v3.LinkedObject>;
  getUserSchema(schemaId: string): Promise<v3.UserSchema>;
  updateUserProfile(schemaId: string, userSchema: v3.UserSchema): Promise<v3.UserSchema>;
  listUserTypes(): Promise<Collection<v3.UserType>>;
  createUserType(userType: v3.UserType): Promise<v3.UserType>;
  deleteUserType(typeId: string): Promise<void>;
  getUserType(typeId: string): Promise<v3.UserType>;
  updateUserType(typeId: string, userType: v3.UserType): Promise<v3.UserType>;
  replaceUserType(typeId: string, userType: v3.UserType): Promise<v3.UserType>;
  getOrgSettings(): Promise<v3.OrgSetting>;
  partialUpdateOrgSetting(orgSetting: v3.OrgSetting): Promise<v3.OrgSetting>;
  updateOrgSetting(orgSetting: v3.OrgSetting): Promise<v3.OrgSetting>;
  getOrgContactTypes(): Promise<Collection<v3.OrgContactTypeObj>>;
  getOrgContactUser(contactType: string): Promise<v3.OrgContactUser>;
  updateOrgContactUser(contactType: string, orgContactUser: v3.OrgContactUser): Promise<v3.OrgContactUser>;
  updateOrgLogo(file: ReadStream): Promise<void>;
  getOrgPreferences(): Promise<v3.OrgPreferences>;
  hideOktaUIFooter(): Promise<v3.OrgPreferences>;
  showOktaUIFooter(): Promise<v3.OrgPreferences>;
  getOktaCommunicationSettings(): Promise<v3.OrgOktaCommunicationSetting>;
  optInUsersToOktaCommunicationEmails(): Promise<v3.OrgOktaCommunicationSetting>;
  optOutUsersFromOktaCommunicationEmails(): Promise<v3.OrgOktaCommunicationSetting>;
  getOrgOktaSupportSettings(): Promise<v3.OrgOktaSupportSettingsObj>;
  extendOktaSupport(): Promise<v3.OrgOktaSupportSettingsObj>;
  grantOktaSupport(): Promise<v3.OrgOktaSupportSettingsObj>;
  revokeOktaSupport(): Promise<v3.OrgOktaSupportSettingsObj>;
  listPolicies(queryParameters: {
    type: string,
    status?: string,
    expand?: string,
  }): Collection<Policy>;
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
  listRoleSubscriptions(roleTypeOrRoleId: string): Collection<Subscription>;
  getRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string): Promise<Subscription>;
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string): Promise<Response>;
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string): Promise<Response>;
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
  getCurrentConfiguration(): Promise<v3.ThreatInsightConfiguration>;
  updateConfiguration(threatInsightConfiguration: v3.ThreatInsightConfiguration): Promise<v3.ThreatInsightConfiguration>;
  listOrigins(queryParameters?: {
    q?: string,
    filter?: string,
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.TrustedOrigin>>;
  createOrigin(trustedOrigin: v3.TrustedOrigin): Promise<v3.TrustedOrigin>;
  deleteOrigin(trustedOriginId: string): Promise<void>;
  getOrigin(trustedOriginId: string): Promise<v3.TrustedOrigin>;
  updateOrigin(trustedOriginId: string, trustedOrigin: v3.TrustedOrigin): Promise<v3.TrustedOrigin>;
  activateOrigin(trustedOriginId: string): Promise<v3.TrustedOrigin>;
  deactivateOrigin(trustedOriginId: string): Promise<v3.TrustedOrigin>;
  listUsers(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    filter?: string,
    search?: string,
    sortBy?: string,
    sortOrder?: string,
  }): Promise<Collection<v3.User>>;
  createUser(createUserRequest: v3.CreateUserRequest, queryParameters?: {
    activate?: boolean,
    provider?: boolean,
    nextLogin?: string,
  }): Promise<v3.User>;
  setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string): Promise<void>;
  deactivateOrDeleteUser(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<void>;
  getUser(userId: string): Promise<v3.User>;
  partialUpdateUser(userId: string, user: v3.User, queryParameters?: {
    strict?: boolean,
  }): Promise<v3.User>;
  updateUser(userId: string, user: v3.User, queryParameters?: {
    strict?: boolean,
  }): Promise<v3.User>;
  listAppLinks(userId: string): Promise<Collection<v3.AppLink>>;
  listUserClients(userId: string): Promise<Collection<v3.OAuth2Client>>;
  revokeGrantsForUserAndClient(userId: string, clientId: string): Promise<void>;
  listGrantsForUserAndClient(userId: string, clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.OAuth2ScopeConsentGrant>>;
  revokeTokensForUserAndClient(userId: string, clientId: string): Promise<void>;
  listRefreshTokensForUserAndClient(userId: string, clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.OAuth2RefreshToken>>;
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string): Promise<void>;
  getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, queryParameters?: {
    expand?: string,
    limit?: number,
    after?: string,
  }): Promise<v3.OAuth2RefreshToken>;
  changePassword(userId: string, changePasswordRequest: v3.ChangePasswordRequest, queryParameters?: {
    strict?: boolean,
  }): Promise<v3.UserCredentials>;
  changeRecoveryQuestion(userId: string, userCredentials: v3.UserCredentials): Promise<v3.UserCredentials>;
  forgotPasswordGenerateOneTimeToken(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<ForgotPasswordResponse>;
  forgotPasswordSetNewPassword(userId: string, userCredentials: v3.UserCredentials, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<v3.ForgotPasswordResponse>;
  listFactors(userId: string): Promise<Collection<v3.UserFactor>>;
  enrollFactor(userId: string, userFactor: v3.UserFactor, queryParameters?: {
    updatePhone?: boolean,
    templateId?: string,
    tokenLifetimeSeconds?: number,
    activate?: boolean,
  }): Promise<v3.UserFactor>;
  listSupportedFactors(userId: string): Promise<Collection<v3.UserFactor>>;
  listSupportedSecurityQuestions(userId: string): Promise<Collection<v3.SecurityQuestion>>;
  deleteFactor(userId: string, factorId: string): Promise<void>;
  getFactor(userId: string, factorId: string): Promise<v3.UserFactor>;
  activateFactor(userId: string, factorId: string, activateFactorRequest?: v3.ActivateFactorRequest): Promise<v3.UserFactor>;
  getFactorTransactionStatus(userId: string, factorId: string, transactionId: string): Promise<v3.VerifyUserFactorResponse>;
  verifyFactor(userId: string, factorId: string, verifyFactorRequest?: v3.VerifyFactorRequest, queryParameters?: {
    templateId?: string,
    tokenLifetimeSeconds?: number,
  }, headerParameters?: {
    X_Forwarded_For?: string,
    User_Agent?: string,
    Accept_Language?: string,
  }): Promise<v3.VerifyUserFactorResponse>;
  revokeUserGrants(userId: string): Promise<void>;
  listUserGrants(userId: string, queryParameters?: {
    scopeId?: string,
    expand?: string,
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.OAuth2ScopeConsentGrant>>;
  revokeUserGrant(userId: string, grantId: string): Promise<void>;
  getUserGrant(userId: string, grantId: string, queryParameters?: {
    expand?: string,
  }): Promise<v3.OAuth2ScopeConsentGrant>;
  listUserGroups(userId: string): Promise<Collection<v3.Group>>;
  listUserIdentityProviders(userId: string): Promise<Collection<v3.IdentityProvider>>;
  activateUser(userId: string, queryParameters: {
    sendEmail: boolean,
  }): Promise<v3.UserActivationToken>;
  deactivateUser(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<void>;
  expirePassword(userId: string): Promise<v3.User>;
  expirePasswordAndGetTemporaryPassword(userId: string): Promise<v3.TempPassword>;
  reactivateUser(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<v3.UserActivationToken>;
  resetFactors(userId: string): Promise<void>;
  resetPassword(userId: string, queryParameters: {
    sendEmail: boolean,
  }): Promise<v3.ResetPasswordToken>;
  suspendUser(userId: string): Promise<void>;
  unlockUser(userId: string): Promise<void>;
  unsuspendUser(userId: string): Promise<void>;
  removeLinkedObjectForUser(userId: string, relationshipName: string): Promise<void>;
  getLinkedObjectsForUser(userId: string, relationshipName: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.ResponseLinks>>;
  listAssignedRolesForUser(userId: string, queryParameters?: {
    expand?: string,
  }): Promise<Collection<v3.Role>>;
  assignRoleToUser(userId: string, assignRoleRequest: v3.AssignRoleRequest, queryParameters?: {
    disableNotifications?: boolean,
  }): Promise<v3.Role>;
  removeRoleFromUser(userId: string, roleId: string): Promise<void>;
  getUserRole(userId: string, roleId: string): Promise<v3.Role>;
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.CatalogApplication>>;
  addAllAppsAsTargetToRole(userId: string, roleId: string): Promise<void>;
  removeApplicationTargetFromApplicationAdministratorRoleForUser(userId: string, roleId: string, appName: string): Promise<void>;
  addApplicationTargetToAdminRoleForUser(userId: string, roleId: string, appName: string): Promise<void>;
  removeApplicationTargetFromAdministratorRoleForUser(userId: string, roleId: string, appName: string, applicationId: string): Promise<void>;
  addApplicationTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string): Promise<void>;
  listGroupTargetsForRole(userId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Promise<Collection<v3.Group>>;
  removeGroupTargetFromRole(userId: string, roleId: string, groupId: string): Promise<void>;
  addGroupTargetToRole(userId: string, roleId: string, groupId: string): Promise<void>;
  clearUserSessions(userId: string, queryParameters?: {
    oauthTokens?: boolean,
  }): Promise<void>;
  listUserSubscriptions(userId: string): Collection<Subscription>;
  getUserSubscriptionByNotificationType(userId: string, notificationType: string): Promise<Subscription>;
  subscribeUserSubscriptionByNotificationType(userId: string, notificationType: string): Promise<Response>;
  unsubscribeUserSubscriptionByNotificationType(userId: string, notificationType: string): Promise<Response>;
  listNetworkZones(queryParameters?: {
    after?: string,
    limit?: number,
    filter?: string,
  }): Promise<Collection<v3.NetworkZone>>;
  createNetworkZone(networkZone: v3.NetworkZone): Promise<v3.NetworkZone>;
  deleteNetworkZone(zoneId: string): Promise<void>;
  getNetworkZone(zoneId: string): Promise<v3.NetworkZone>;
  updateNetworkZone(zoneId: string, networkZone: v3.NetworkZone): Promise<v3.NetworkZone>;
  activateNetworkZone(zoneId: string): Promise<v3.NetworkZone>;
  deactivateNetworkZone(zoneId: string): Promise<v3.NetworkZone>;
}
