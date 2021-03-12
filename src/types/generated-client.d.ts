/*!
 * Copyright (c) 2017-2021, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import Collection from './collection';
import Application from './models/Application';
import CsrMetadata from './models/CsrMetadata';
import Csr from './models/Csr';
import JsonWebKey from './models/JsonWebKey';
import OAuth2ScopeConsentGrant from './models/OAuth2ScopeConsentGrant';
import ApplicationGroupAssignment from './models/ApplicationGroupAssignment';
import OAuth2Token from './models/OAuth2Token';
import AppUser from './models/AppUser';
import AuthorizationServer from './models/AuthorizationServer';
import OAuth2Claim from './models/OAuth2Claim';
import OAuth2RefreshToken from './models/OAuth2RefreshToken';
import JwkUse from './models/JwkUse';
import AuthorizationServerPolicy from './models/AuthorizationServerPolicy';
import AuthorizationServerPolicyRule from './models/AuthorizationServerPolicyRule';
import OAuth2Scope from './models/OAuth2Scope';
import EventHook from './models/EventHook';
import Feature from './models/Feature';
import Group from './models/Group';
import GroupRule from './models/GroupRule';
import AssignRoleRequest from './models/AssignRoleRequest';
import Role from './models/Role';
import IdentityProvider from './models/IdentityProvider';
import IdentityProviderApplicationUser from './models/IdentityProviderApplicationUser';
import UserIdentityProviderLinkRequest from './models/UserIdentityProviderLinkRequest';
import InlineHook from './models/InlineHook';
import InlineHookPayload from './models/InlineHookPayload';
import InlineHookResponse from './models/InlineHookResponse';
import LinkedObject from './models/LinkedObject';
import UserType from './models/UserType';
import Policy from './models/Policy';
import PolicyRule from './models/PolicyRule';
import CreateSessionRequest from './models/CreateSessionRequest';
import Session from './models/Session';
import SmsTemplate from './models/SmsTemplate';
import TrustedOrigin from './models/TrustedOrigin';
import CreateUserRequest from './models/CreateUserRequest';
import User from './models/User';
import ChangePasswordRequest from './models/ChangePasswordRequest';
import UserCredentials from './models/UserCredentials';
import ForgotPasswordResponse from './models/ForgotPasswordResponse';
import UserFactor from './models/UserFactor';
import ActivateFactorRequest from './models/ActivateFactorRequest';
import VerifyUserFactorResponse from './models/VerifyUserFactorResponse';
import VerifyFactorRequest from './models/VerifyFactorRequest';
import UserActivationToken from './models/UserActivationToken';
import TempPassword from './models/TempPassword';
import ResetPasswordToken from './models/ResetPasswordToken';

declare class GeneratedApiClient {
  listApplications(queryParameters: { 
    q: string,
    after: string,
    limit: string,
    filter: string,
    expand: string,
    includeNonDeleted: string,
  }): Promise<Collection>;
  createApplication(application: Application, queryParameters: { 
    activate: string,
  }): Promise<Application>;
  deleteApplication(appId: string): Promise<undefined>;
  getApplication(appId: string, queryParameters: { 
    expand: string,
  }): Promise<Application>;
  updateApplication(appId: string, application: Application): Promise<Application>;
  listCsrsForApplication(appId: string): Promise<Collection>;
  generateCsrForApplication(appId: string, csrMetadata: CsrMetadata): Promise<Csr>;
  revokeCsrFromApplication(appId: string, csrId: string): Promise<undefined>;
  getCsrForApplication(appId: string, csrId: string): Promise<Csr>;
  publishCerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  listApplicationKeys(appId: string): Promise<Collection>;
  generateApplicationKey(appId: string, queryParameters: { 
    validityYears: string,
  }): Promise<JsonWebKey>;
  getApplicationKey(appId: string, keyId: string): Promise<JsonWebKey>;
  cloneApplicationKey(appId: string, keyId: string, queryParameters: { 
    targetAid: string,
  }): Promise<JsonWebKey>;
  listScopeConsentGrants(appId: string, queryParameters: { 
    expand: string,
  }): Promise<Collection>;
  grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant): Promise<OAuth2ScopeConsentGrant>;
  revokeScopeConsentGrant(appId: string, grantId: string): Promise<undefined>;
  getScopeConsentGrant(appId: string, grantId: string, queryParameters: { 
    expand: string,
  }): Promise<OAuth2ScopeConsentGrant>;
  listApplicationGroupAssignments(appId: string, queryParameters: { 
    q: string,
    after: string,
    limit: string,
    expand: string,
  }): Promise<Collection>;
  deleteApplicationGroupAssignment(appId: string, groupId: string): Promise<undefined>;
  getApplicationGroupAssignment(appId: string, groupId: string, queryParameters: { 
    expand: string,
  }): Promise<ApplicationGroupAssignment>;
  createApplicationGroupAssignment(appId: string, groupId: string, applicationGroupAssignment: ApplicationGroupAssignment): Promise<ApplicationGroupAssignment>;
  activateApplication(appId: string): Promise<undefined>;
  deactivateApplication(appId: string): Promise<undefined>;
  revokeOAuth2TokensForApplication(appId: string): Promise<undefined>;
  listOAuth2TokensForApplication(appId: string, queryParameters: { 
    expand: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  revokeOAuth2TokenForApplication(appId: string, tokenId: string): Promise<undefined>;
  getOAuth2TokenForApplication(appId: string, tokenId: string, queryParameters: { 
    expand: string,
  }): Promise<OAuth2Token>;
  listApplicationUsers(appId: string, queryParameters: { 
    q: string,
    query_scope: string,
    after: string,
    limit: string,
    filter: string,
    expand: string,
  }): Promise<Collection>;
  assignUserToApplication(appId: string, appUser: AppUser): Promise<AppUser>;
  deleteApplicationUser(appId: string, userId: string, queryParameters: { 
    sendEmail: string,
  }): Promise<undefined>;
  getApplicationUser(appId: string, userId: string, queryParameters: { 
    expand: string,
  }): Promise<AppUser>;
  updateApplicationUser(appId: string, userId: string, appUser: AppUser): Promise<AppUser>;
  listAuthorizationServers(queryParameters: { 
    q: string,
    limit: string,
    after: string,
  }): Promise<Collection>;
  createAuthorizationServer(authorizationServer: AuthorizationServer): Promise<AuthorizationServer>;
  deleteAuthorizationServer(authServerId: string): Promise<undefined>;
  getAuthorizationServer(authServerId: string): Promise<AuthorizationServer>;
  updateAuthorizationServer(authServerId: string, authorizationServer: AuthorizationServer): Promise<AuthorizationServer>;
  listOAuth2Claims(authServerId: string): Promise<Collection>;
  createOAuth2Claim(authServerId: string, oAuth2Claim: OAuth2Claim): Promise<OAuth2Claim>;
  deleteOAuth2Claim(authServerId: string, claimId: string): Promise<undefined>;
  getOAuth2Claim(authServerId: string, claimId: string): Promise<OAuth2Claim>;
  updateOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: OAuth2Claim): Promise<OAuth2Claim>;
  listOAuth2ClientsForAuthorizationServer(authServerId: string): Promise<Collection>;
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string): Promise<undefined>;
  listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, queryParameters: { 
    expand: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string): Promise<undefined>;
  getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, queryParameters: { 
    expand: string,
  }): Promise<OAuth2RefreshToken>;
  listAuthorizationServerKeys(authServerId: string): Promise<Collection>;
  rotateAuthorizationServerKeys(authServerId: string, jwkUse: JwkUse): Promise<Collection>;
  activateAuthorizationServer(authServerId: string): Promise<undefined>;
  deactivateAuthorizationServer(authServerId: string): Promise<undefined>;
  listAuthorizationServerPolicies(authServerId: string): Promise<Collection>;
  createAuthorizationServerPolicy(authServerId: string, authorizationServerPolicy: AuthorizationServerPolicy): Promise<AuthorizationServerPolicy>;
  deleteAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<undefined>;
  getAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<AuthorizationServerPolicy>;
  updateAuthorizationServerPolicy(authServerId: string, policyId: string, authorizationServerPolicy: AuthorizationServerPolicy): Promise<AuthorizationServerPolicy>;
  listAuthorizationServerPolicyRules(policyId: string, authServerId: string): Promise<Collection>;
  createAuthorizationServerPolicyRule(policyId: string, authServerId: string, authorizationServerPolicyRule: AuthorizationServerPolicyRule): Promise<AuthorizationServerPolicyRule>;
  deleteAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string): Promise<undefined>;
  getAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string): Promise<AuthorizationServerPolicyRule>;
  updateAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, authorizationServerPolicyRule: AuthorizationServerPolicyRule): Promise<AuthorizationServerPolicyRule>;
  listOAuth2Scopes(authServerId: string, queryParameters: { 
    q: string,
    filter: string,
    cursor: string,
    limit: string,
  }): Promise<Collection>;
  createOAuth2Scope(authServerId: string, oAuth2Scope: OAuth2Scope): Promise<OAuth2Scope>;
  deleteOAuth2Scope(authServerId: string, scopeId: string): Promise<undefined>;
  getOAuth2Scope(authServerId: string, scopeId: string): Promise<OAuth2Scope>;
  updateOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: OAuth2Scope): Promise<OAuth2Scope>;
  listEventHooks(): Promise<Collection>;
  createEventHook(eventHook: EventHook): Promise<EventHook>;
  deleteEventHook(eventHookId: string): Promise<undefined>;
  getEventHook(eventHookId: string): Promise<EventHook>;
  updateEventHook(eventHookId: string, eventHook: EventHook): Promise<EventHook>;
  activateEventHook(eventHookId: string): Promise<EventHook>;
  deactivateEventHook(eventHookId: string): Promise<EventHook>;
  verifyEventHook(eventHookId: string): Promise<EventHook>;
  listFeatures(): Promise<Collection>;
  getFeature(featureId: string): Promise<Feature>;
  listFeatureDependencies(featureId: string): Promise<Collection>;
  listFeatureDependents(featureId: string): Promise<Collection>;
  updateFeatureLifecycle(featureId: string, lifecycle: string, queryParameters: { 
    mode: string,
  }): Promise<Feature>;
  listGroups(queryParameters: { 
    q: string,
    filter: string,
    after: string,
    limit: string,
    expand: string,
  }): Promise<Collection>;
  createGroup(group: Group): Promise<Group>;
  listGroupRules(queryParameters: { 
    limit: string,
    after: string,
    search: string,
    expand: string,
  }): Promise<Collection>;
  createGroupRule(groupRule: GroupRule): Promise<GroupRule>;
  deleteGroupRule(ruleId: string): Promise<undefined>;
  getGroupRule(ruleId: string, queryParameters: { 
    expand: string,
  }): Promise<GroupRule>;
  updateGroupRule(ruleId: string, groupRule: GroupRule): Promise<GroupRule>;
  activateGroupRule(ruleId: string): Promise<undefined>;
  deactivateGroupRule(ruleId: string): Promise<undefined>;
  deleteGroup(groupId: string): Promise<undefined>;
  getGroup(groupId: string): Promise<Group>;
  updateGroup(groupId: string, group: Group): Promise<Group>;
  listAssignedApplicationsForGroup(groupId: string, queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  listGroupAssignedRoles(groupId: string, queryParameters: { 
    expand: string,
  }): Promise<Collection>;
  assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleRequest, queryParameters: { 
    disableNotifications: string,
  }): Promise<Role>;
  removeRoleFromGroup(groupId: string, roleId: string): Promise<undefined>;
  getRole(groupId: string, roleId: string): Promise<Role>;
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string): Promise<undefined>;
  addApplicationTargetToAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string): Promise<undefined>;
  removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string): Promise<undefined>;
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string): Promise<undefined>;
  listGroupTargetsForGroupRole(groupId: string, roleId: string, queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId: string, roleId: string, targetGroupId: string): Promise<undefined>;
  addGroupTargetToGroupAdministratorRoleForGroup(groupId: string, roleId: string, targetGroupId: string): Promise<undefined>;
  listGroupUsers(groupId: string, queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  removeUserFromGroup(groupId: string, userId: string): Promise<undefined>;
  addUserToGroup(groupId: string, userId: string): Promise<undefined>;
  listIdentityProviders(queryParameters: { 
    q: string,
    after: string,
    limit: string,
    type: string,
  }): Promise<Collection>;
  createIdentityProvider(identityProvider: IdentityProvider): Promise<IdentityProvider>;
  listIdentityProviderKeys(queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  createIdentityProviderKey(jsonWebKey: JsonWebKey): Promise<JsonWebKey>;
  deleteIdentityProviderKey(keyId: string): Promise<undefined>;
  getIdentityProviderKey(keyId: string): Promise<JsonWebKey>;
  deleteIdentityProvider(idpId: string): Promise<undefined>;
  getIdentityProvider(idpId: string): Promise<IdentityProvider>;
  updateIdentityProvider(idpId: string, identityProvider: IdentityProvider): Promise<IdentityProvider>;
  listCsrsForIdentityProvider(idpId: string): Promise<Collection>;
  generateCsrForIdentityProvider(idpId: string, csrMetadata: CsrMetadata): Promise<Csr>;
  revokeCsrForIdentityProvider(idpId: string, csrId: string): Promise<undefined>;
  getCsrForIdentityProvider(idpId: string, csrId: string): Promise<Csr>;
  publishCerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  listIdentityProviderSigningKeys(idpId: string): Promise<Collection>;
  generateIdentityProviderSigningKey(idpId: string, queryParameters: { 
    validityYears: string,
  }): Promise<JsonWebKey>;
  getIdentityProviderSigningKey(idpId: string, keyId: string): Promise<JsonWebKey>;
  cloneIdentityProviderKey(idpId: string, keyId: string, queryParameters: { 
    targetIdpId: string,
  }): Promise<JsonWebKey>;
  activateIdentityProvider(idpId: string): Promise<IdentityProvider>;
  deactivateIdentityProvider(idpId: string): Promise<IdentityProvider>;
  listIdentityProviderApplicationUsers(idpId: string): Promise<Collection>;
  unlinkUserFromIdentityProvider(idpId: string, userId: string): Promise<undefined>;
  getIdentityProviderApplicationUser(idpId: string, userId: string): Promise<IdentityProviderApplicationUser>;
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest): Promise<IdentityProviderApplicationUser>;
  listSocialAuthTokens(idpId: string, userId: string): Promise<Collection>;
  listInlineHooks(queryParameters: { 
    type: string,
  }): Promise<Collection>;
  createInlineHook(inlineHook: InlineHook): Promise<InlineHook>;
  deleteInlineHook(inlineHookId: string): Promise<undefined>;
  getInlineHook(inlineHookId: string): Promise<InlineHook>;
  updateInlineHook(inlineHookId: string, inlineHook: InlineHook): Promise<InlineHook>;
  executeInlineHook(inlineHookId: string, inlineHookPayload: InlineHookPayload): Promise<InlineHookResponse>;
  activateInlineHook(inlineHookId: string): Promise<InlineHook>;
  deactivateInlineHook(inlineHookId: string): Promise<InlineHook>;
  getLogs(queryParameters: { 
    since: string,
    until: string,
    filter: string,
    q: string,
    limit: string,
    sortOrder: string,
    after: string,
  }): Promise<Collection>;
  listLinkedObjectDefinitions(): Promise<Collection>;
  addLinkedObjectDefinition(linkedObject: LinkedObject): Promise<LinkedObject>;
  deleteLinkedObjectDefinition(linkedObjectName: string): Promise<undefined>;
  getLinkedObjectDefinition(linkedObjectName: string): Promise<LinkedObject>;
  listUserTypes(): Promise<Collection>;
  createUserType(userType: UserType): Promise<UserType>;
  deleteUserType(typeId: string): Promise<undefined>;
  getUserType(typeId: string): Promise<UserType>;
  updateUserType(typeId: string, userType: UserType): Promise<UserType>;
  replaceUserType(typeId: string, userType: UserType): Promise<UserType>;
  listPolicies(queryParameters: { 
    type: string,
    status: string,
    expand: string,
  }): Promise<Collection>;
  createPolicy(policy: Policy, queryParameters: { 
    activate: string,
  }): Promise<Policy>;
  deletePolicy(policyId: string): Promise<undefined>;
  getPolicy(policyId: string, queryParameters: { 
    expand: string,
  }): Promise<Policy>;
  updatePolicy(policyId: string, policy: Policy): Promise<Policy>;
  activatePolicy(policyId: string): Promise<undefined>;
  deactivatePolicy(policyId: string): Promise<undefined>;
  listPolicyRules(policyId: string): Promise<Collection>;
  createPolicyRule(policyId: string, policyRule: PolicyRule): Promise<PolicyRule>;
  deletePolicyRule(policyId: string, ruleId: string): Promise<undefined>;
  getPolicyRule(policyId: string, ruleId: string): Promise<PolicyRule>;
  updatePolicyRule(policyId: string, ruleId: string, policyRule: PolicyRule): Promise<PolicyRule>;
  activatePolicyRule(policyId: string, ruleId: string): Promise<undefined>;
  deactivatePolicyRule(policyId: string, ruleId: string): Promise<undefined>;
  createSession(createSessionRequest: CreateSessionRequest): Promise<Session>;
  endSession(sessionId: string): Promise<undefined>;
  getSession(sessionId: string): Promise<Session>;
  refreshSession(sessionId: string): Promise<Session>;
  listSmsTemplates(queryParameters: { 
    templateType: string,
  }): Promise<Collection>;
  createSmsTemplate(smsTemplate: SmsTemplate): Promise<SmsTemplate>;
  deleteSmsTemplate(templateId: string): Promise<undefined>;
  getSmsTemplate(templateId: string): Promise<SmsTemplate>;
  partialUpdateSmsTemplate(templateId: string, smsTemplate: SmsTemplate): Promise<SmsTemplate>;
  updateSmsTemplate(templateId: string, smsTemplate: SmsTemplate): Promise<SmsTemplate>;
  listOrigins(queryParameters: { 
    q: string,
    filter: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  createOrigin(trustedOrigin: TrustedOrigin): Promise<TrustedOrigin>;
  deleteOrigin(trustedOriginId: string): Promise<undefined>;
  getOrigin(trustedOriginId: string): Promise<TrustedOrigin>;
  updateOrigin(trustedOriginId: string, trustedOrigin: TrustedOrigin): Promise<TrustedOrigin>;
  activateOrigin(trustedOriginId: string): Promise<TrustedOrigin>;
  deactivateOrigin(trustedOriginId: string): Promise<TrustedOrigin>;
  listUsers(queryParameters: { 
    q: string,
    after: string,
    limit: string,
    filter: string,
    search: string,
    sortBy: string,
    sortOrder: string,
  }): Promise<Collection>;
  createUser(createUserRequest: CreateUserRequest, queryParameters: { 
    activate: string,
    provider: string,
    nextLogin: string,
  }): Promise<User>;
  setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string): Promise<undefined>;
  deactivateOrDeleteUser(userId: string, queryParameters: { 
    sendEmail: string,
  }): Promise<undefined>;
  getUser(userId: string): Promise<User>;
  partialUpdateUser(userId: string, user: User, queryParameters: { 
    strict: string,
  }): Promise<User>;
  updateUser(userId: string, user: User, queryParameters: { 
    strict: string,
  }): Promise<User>;
  listAppLinks(userId: string): Promise<Collection>;
  listUserClients(userId: string): Promise<Collection>;
  revokeGrantsForUserAndClient(userId: string, clientId: string): Promise<undefined>;
  listGrantsForUserAndClient(userId: string, clientId: string, queryParameters: { 
    expand: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  revokeTokensForUserAndClient(userId: string, clientId: string): Promise<undefined>;
  listRefreshTokensForUserAndClient(userId: string, clientId: string, queryParameters: { 
    expand: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string): Promise<undefined>;
  getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, queryParameters: { 
    expand: string,
    limit: string,
    after: string,
  }): Promise<OAuth2RefreshToken>;
  changePassword(userId: string, changePasswordRequest: ChangePasswordRequest, queryParameters: { 
    strict: string,
  }): Promise<UserCredentials>;
  changeRecoveryQuestion(userId: string, userCredentials: UserCredentials): Promise<UserCredentials>;
  forgotPasswordGenerateOneTimeToken(userId: string, queryParameters: { 
    sendEmail: string,
  }): Promise<ForgotPasswordResponse>;
  forgotPasswordSetNewPassword(userId: string, userCredentials: UserCredentials, queryParameters: { 
    sendEmail: string,
  }): Promise<ForgotPasswordResponse>;
  listFactors(userId: string): Promise<Collection>;
  enrollFactor(userId: string, userFactor: UserFactor, queryParameters: { 
    updatePhone: string,
    templateId: string,
    tokenLifetimeSeconds: string,
    activate: string,
  }): Promise<UserFactor>;
  listSupportedFactors(userId: string): Promise<Collection>;
  listSupportedSecurityQuestions(userId: string): Promise<Collection>;
  deleteFactor(userId: string, factorId: string): Promise<undefined>;
  getFactor(userId: string, factorId: string): Promise<UserFactor>;
  activateFactor(userId: string, factorId: string, activateFactorRequest: ActivateFactorRequest): Promise<UserFactor>;
  getFactorTransactionStatus(userId: string, factorId: string, transactionId: string): Promise<VerifyUserFactorResponse>;
  verifyFactor(userId: string, factorId: string, verifyFactorRequest: VerifyFactorRequest, queryParameters: { 
    templateId: string,
    tokenLifetimeSeconds: string,
  }): Promise<VerifyUserFactorResponse>;
  revokeUserGrants(userId: string): Promise<undefined>;
  listUserGrants(userId: string, queryParameters: { 
    scopeId: string,
    expand: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  revokeUserGrant(userId: string, grantId: string): Promise<undefined>;
  getUserGrant(userId: string, grantId: string, queryParameters: { 
    expand: string,
  }): Promise<OAuth2ScopeConsentGrant>;
  listUserGroups(userId: string): Promise<Collection>;
  listUserIdentityProviders(userId: string): Promise<Collection>;
  activateUser(userId: string, queryParameters: { 
    sendEmail: string,
  }): Promise<UserActivationToken>;
  deactivateUser(userId: string, queryParameters: { 
    sendEmail: string,
  }): Promise<undefined>;
  expirePassword(userId: string): Promise<User>;
  expirePasswordAndGetTemporaryPassword(userId: string): Promise<TempPassword>;
  reactivateUser(userId: string, queryParameters: { 
    sendEmail: string,
  }): Promise<UserActivationToken>;
  resetFactors(userId: string): Promise<undefined>;
  resetPassword(userId: string, queryParameters: { 
    sendEmail: string,
  }): Promise<ResetPasswordToken>;
  suspendUser(userId: string): Promise<undefined>;
  unlockUser(userId: string): Promise<undefined>;
  unsuspendUser(userId: string): Promise<undefined>;
  removeLinkedObjectForUser(userId: string, relationshipName: string): Promise<undefined>;
  getLinkedObjectsForUser(userId: string, relationshipName: string, queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  listAssignedRolesForUser(userId: string, queryParameters: { 
    expand: string,
  }): Promise<Collection>;
  assignRoleToUser(userId: string, assignRoleRequest: AssignRoleRequest, queryParameters: { 
    disableNotifications: string,
  }): Promise<Role>;
  removeRoleFromUser(userId: string, roleId: string): Promise<undefined>;
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  addAllAppsAsTargetToRole(userId: string, roleId: string): Promise<undefined>;
  removeApplicationTargetFromApplicationAdministratorRoleForUser(userId: string, roleId: string, appName: string): Promise<undefined>;
  addApplicationTargetToAdminRoleForUser(userId: string, roleId: string, appName: string): Promise<undefined>;
  removeApplicationTargetFromAdministratorRoleForUser(userId: string, roleId: string, appName: string, applicationId: string): Promise<undefined>;
  addApplicationTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string): Promise<undefined>;
  listGroupTargetsForRole(userId: string, roleId: string, queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  removeGroupTargetFromRole(userId: string, roleId: string, groupId: string): Promise<undefined>;
  addGroupTargetToRole(userId: string, roleId: string, groupId: string): Promise<undefined>;
  clearUserSessions(userId: string, queryParameters: { 
    oauthTokens: string,
  }): Promise<undefined>;
}

export default GeneratedApiClient;
