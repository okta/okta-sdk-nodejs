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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./AccessPolicy"), exports);
__exportStar(require("./AccessPolicyAllOf"), exports);
__exportStar(require("./AccessPolicyConstraint"), exports);
__exportStar(require("./AccessPolicyConstraints"), exports);
__exportStar(require("./AccessPolicyRule"), exports);
__exportStar(require("./AccessPolicyRuleActions"), exports);
__exportStar(require("./AccessPolicyRuleActionsAllOf"), exports);
__exportStar(require("./AccessPolicyRuleAllOf"), exports);
__exportStar(require("./AccessPolicyRuleApplicationSignOn"), exports);
__exportStar(require("./AccessPolicyRuleConditions"), exports);
__exportStar(require("./AccessPolicyRuleConditionsAllOf"), exports);
__exportStar(require("./AccessPolicyRuleCustomCondition"), exports);
__exportStar(require("./AcsEndpoint"), exports);
__exportStar(require("./ActivateFactorRequest"), exports);
__exportStar(require("./Agent"), exports);
__exportStar(require("./AgentPool"), exports);
__exportStar(require("./AgentPoolUpdate"), exports);
__exportStar(require("./AgentPoolUpdateSetting"), exports);
__exportStar(require("./AgentType"), exports);
__exportStar(require("./AgentUpdateInstanceStatus"), exports);
__exportStar(require("./AgentUpdateJobStatus"), exports);
__exportStar(require("./AllowedForEnum"), exports);
__exportStar(require("./ApiToken"), exports);
__exportStar(require("./ApiTokenLink"), exports);
__exportStar(require("./AppAndInstanceConditionEvaluatorAppOrInstance"), exports);
__exportStar(require("./AppAndInstancePolicyRuleCondition"), exports);
__exportStar(require("./AppAndInstanceType"), exports);
__exportStar(require("./AppInstancePolicyRuleCondition"), exports);
__exportStar(require("./AppLink"), exports);
__exportStar(require("./AppUser"), exports);
__exportStar(require("./AppUserCredentials"), exports);
__exportStar(require("./AppUserPasswordCredential"), exports);
__exportStar(require("./Application"), exports);
__exportStar(require("./ApplicationAccessibility"), exports);
__exportStar(require("./ApplicationCredentials"), exports);
__exportStar(require("./ApplicationCredentialsOAuthClient"), exports);
__exportStar(require("./ApplicationCredentialsScheme"), exports);
__exportStar(require("./ApplicationCredentialsSigning"), exports);
__exportStar(require("./ApplicationCredentialsSigningUse"), exports);
__exportStar(require("./ApplicationCredentialsUsernameTemplate"), exports);
__exportStar(require("./ApplicationFeature"), exports);
__exportStar(require("./ApplicationGroupAssignment"), exports);
__exportStar(require("./ApplicationLicensing"), exports);
__exportStar(require("./ApplicationLifecycleStatus"), exports);
__exportStar(require("./ApplicationSettings"), exports);
__exportStar(require("./ApplicationSettingsNotes"), exports);
__exportStar(require("./ApplicationSettingsNotifications"), exports);
__exportStar(require("./ApplicationSettingsNotificationsVpn"), exports);
__exportStar(require("./ApplicationSettingsNotificationsVpnNetwork"), exports);
__exportStar(require("./ApplicationSignOnMode"), exports);
__exportStar(require("./ApplicationVisibility"), exports);
__exportStar(require("./ApplicationVisibilityHide"), exports);
__exportStar(require("./AssignRoleRequest"), exports);
__exportStar(require("./AuthenticationProvider"), exports);
__exportStar(require("./AuthenticationProviderType"), exports);
__exportStar(require("./Authenticator"), exports);
__exportStar(require("./AuthenticatorProvider"), exports);
__exportStar(require("./AuthenticatorProviderConfiguration"), exports);
__exportStar(require("./AuthenticatorProviderConfigurationUserNameTemplate"), exports);
__exportStar(require("./AuthenticatorSettings"), exports);
__exportStar(require("./AuthenticatorStatus"), exports);
__exportStar(require("./AuthenticatorType"), exports);
__exportStar(require("./AuthorizationServer"), exports);
__exportStar(require("./AuthorizationServerCredentials"), exports);
__exportStar(require("./AuthorizationServerCredentialsRotationMode"), exports);
__exportStar(require("./AuthorizationServerCredentialsSigningConfig"), exports);
__exportStar(require("./AuthorizationServerCredentialsUse"), exports);
__exportStar(require("./AuthorizationServerPolicy"), exports);
__exportStar(require("./AuthorizationServerPolicyRule"), exports);
__exportStar(require("./AuthorizationServerPolicyRuleActions"), exports);
__exportStar(require("./AuthorizationServerPolicyRuleActionsAllOf"), exports);
__exportStar(require("./AuthorizationServerPolicyRuleAllOf"), exports);
__exportStar(require("./AuthorizationServerPolicyRuleConditions"), exports);
__exportStar(require("./AuthorizationServerPolicyRuleConditionsAllOf"), exports);
__exportStar(require("./AutoLoginApplication"), exports);
__exportStar(require("./AutoLoginApplicationAllOf"), exports);
__exportStar(require("./AutoLoginApplicationSettings"), exports);
__exportStar(require("./AutoLoginApplicationSettingsAllOf"), exports);
__exportStar(require("./AutoLoginApplicationSettingsSignOn"), exports);
__exportStar(require("./AutoUpdateSchedule"), exports);
__exportStar(require("./BasicApplicationSettings"), exports);
__exportStar(require("./BasicApplicationSettingsAllOf"), exports);
__exportStar(require("./BasicApplicationSettingsApplication"), exports);
__exportStar(require("./BasicAuthApplication"), exports);
__exportStar(require("./BasicAuthApplicationAllOf"), exports);
__exportStar(require("./BeforeScheduledActionPolicyRuleCondition"), exports);
__exportStar(require("./BehaviorDetectionRuleSettingsBasedOnDeviceVelocityInKilometersPerHour"), exports);
__exportStar(require("./BehaviorDetectionRuleSettingsBasedOnEventHistory"), exports);
__exportStar(require("./BehaviorRule"), exports);
__exportStar(require("./BehaviorRuleAnomalousDevice"), exports);
__exportStar(require("./BehaviorRuleAnomalousDeviceAllOf"), exports);
__exportStar(require("./BehaviorRuleAnomalousIP"), exports);
__exportStar(require("./BehaviorRuleAnomalousIPAllOf"), exports);
__exportStar(require("./BehaviorRuleAnomalousLocation"), exports);
__exportStar(require("./BehaviorRuleAnomalousLocationAllOf"), exports);
__exportStar(require("./BehaviorRuleSettingsAnomalousDevice"), exports);
__exportStar(require("./BehaviorRuleSettingsAnomalousIP"), exports);
__exportStar(require("./BehaviorRuleSettingsAnomalousIPAllOf"), exports);
__exportStar(require("./BehaviorRuleSettingsAnomalousLocation"), exports);
__exportStar(require("./BehaviorRuleSettingsAnomalousLocationAllOf"), exports);
__exportStar(require("./BehaviorRuleSettingsHistoryBased"), exports);
__exportStar(require("./BehaviorRuleSettingsVelocity"), exports);
__exportStar(require("./BehaviorRuleType"), exports);
__exportStar(require("./BehaviorRuleVelocity"), exports);
__exportStar(require("./BehaviorRuleVelocityAllOf"), exports);
__exportStar(require("./BookmarkApplication"), exports);
__exportStar(require("./BookmarkApplicationAllOf"), exports);
__exportStar(require("./BookmarkApplicationSettings"), exports);
__exportStar(require("./BookmarkApplicationSettingsAllOf"), exports);
__exportStar(require("./BookmarkApplicationSettingsApplication"), exports);
__exportStar(require("./BouncesRemoveListError"), exports);
__exportStar(require("./BouncesRemoveListObj"), exports);
__exportStar(require("./BouncesRemoveListResult"), exports);
__exportStar(require("./Brand"), exports);
__exportStar(require("./BrowserPluginApplication"), exports);
__exportStar(require("./BrowserPluginApplicationAllOf"), exports);
__exportStar(require("./CAPTCHAInstance"), exports);
__exportStar(require("./CAPTCHAType"), exports);
__exportStar(require("./CallUserFactor"), exports);
__exportStar(require("./CallUserFactorAllOf"), exports);
__exportStar(require("./CallUserFactorProfile"), exports);
__exportStar(require("./CapabilitiesCreateObject"), exports);
__exportStar(require("./CapabilitiesObject"), exports);
__exportStar(require("./CapabilitiesUpdateObject"), exports);
__exportStar(require("./CatalogApplication"), exports);
__exportStar(require("./CatalogApplicationStatus"), exports);
__exportStar(require("./ChangeEnum"), exports);
__exportStar(require("./ChangePasswordRequest"), exports);
__exportStar(require("./ChannelBinding"), exports);
__exportStar(require("./ClientPolicyCondition"), exports);
__exportStar(require("./Compliance"), exports);
__exportStar(require("./ContextPolicyRuleCondition"), exports);
__exportStar(require("./ContextPolicyRuleConditionAllOf"), exports);
__exportStar(require("./CreateSessionRequest"), exports);
__exportStar(require("./CreateUserRequest"), exports);
__exportStar(require("./Csr"), exports);
__exportStar(require("./CsrMetadata"), exports);
__exportStar(require("./CsrMetadataSubject"), exports);
__exportStar(require("./CsrMetadataSubjectAltNames"), exports);
__exportStar(require("./CustomHotpUserFactor"), exports);
__exportStar(require("./CustomHotpUserFactorAllOf"), exports);
__exportStar(require("./CustomHotpUserFactorProfile"), exports);
__exportStar(require("./CustomizablePage"), exports);
__exportStar(require("./DNSRecord"), exports);
__exportStar(require("./DNSRecordType"), exports);
__exportStar(require("./DeviceAccessPolicyRuleCondition"), exports);
__exportStar(require("./DeviceAccessPolicyRuleConditionAllOf"), exports);
__exportStar(require("./DevicePolicyMDMFramework"), exports);
__exportStar(require("./DevicePolicyPlatformType"), exports);
__exportStar(require("./DevicePolicyRuleCondition"), exports);
__exportStar(require("./DevicePolicyRuleConditionPlatform"), exports);
__exportStar(require("./DevicePolicyTrustLevel"), exports);
__exportStar(require("./Domain"), exports);
__exportStar(require("./DomainCertificate"), exports);
__exportStar(require("./DomainCertificateMetadata"), exports);
__exportStar(require("./DomainCertificateSourceType"), exports);
__exportStar(require("./DomainCertificateType"), exports);
__exportStar(require("./DomainLinks"), exports);
__exportStar(require("./DomainListResponse"), exports);
__exportStar(require("./DomainResponse"), exports);
__exportStar(require("./DomainValidationStatus"), exports);
__exportStar(require("./Duration"), exports);
__exportStar(require("./EmailContent"), exports);
__exportStar(require("./EmailCustomization"), exports);
__exportStar(require("./EmailCustomizationAllOf"), exports);
__exportStar(require("./EmailCustomizationAllOfLinks"), exports);
__exportStar(require("./EmailDefaultContent"), exports);
__exportStar(require("./EmailDefaultContentAllOf"), exports);
__exportStar(require("./EmailDefaultContentAllOfLinks"), exports);
__exportStar(require("./EmailPreview"), exports);
__exportStar(require("./EmailPreviewLinks"), exports);
__exportStar(require("./EmailSettings"), exports);
__exportStar(require("./EmailTemplate"), exports);
__exportStar(require("./EmailTemplateEmbedded"), exports);
__exportStar(require("./EmailTemplateLinks"), exports);
__exportStar(require("./EmailTemplateTouchPointVariant"), exports);
__exportStar(require("./EmailUserFactor"), exports);
__exportStar(require("./EmailUserFactorAllOf"), exports);
__exportStar(require("./EmailUserFactorProfile"), exports);
__exportStar(require("./EnabledStatus"), exports);
__exportStar(require("./EndUserDashboardTouchPointVariant"), exports);
__exportStar(require("./ErrorErrorCausesInner"), exports);
__exportStar(require("./ErrorPageTouchPointVariant"), exports);
__exportStar(require("./EventHook"), exports);
__exportStar(require("./EventHookChannel"), exports);
__exportStar(require("./EventHookChannelConfig"), exports);
__exportStar(require("./EventHookChannelConfigAuthScheme"), exports);
__exportStar(require("./EventHookChannelConfigAuthSchemeType"), exports);
__exportStar(require("./EventHookChannelConfigHeader"), exports);
__exportStar(require("./EventHookChannelType"), exports);
__exportStar(require("./EventHookVerificationStatus"), exports);
__exportStar(require("./EventSubscriptionType"), exports);
__exportStar(require("./EventSubscriptions"), exports);
__exportStar(require("./FactorProvider"), exports);
__exportStar(require("./FactorResultType"), exports);
__exportStar(require("./FactorStatus"), exports);
__exportStar(require("./FactorType"), exports);
__exportStar(require("./Feature"), exports);
__exportStar(require("./FeatureStage"), exports);
__exportStar(require("./FeatureStageState"), exports);
__exportStar(require("./FeatureStageValue"), exports);
__exportStar(require("./FeatureType"), exports);
__exportStar(require("./FipsEnum"), exports);
__exportStar(require("./ForgotPasswordResponse"), exports);
__exportStar(require("./GrantOrTokenStatus"), exports);
__exportStar(require("./GrantTypePolicyRuleCondition"), exports);
__exportStar(require("./Group"), exports);
__exportStar(require("./GroupCondition"), exports);
__exportStar(require("./GroupPolicyRuleCondition"), exports);
__exportStar(require("./GroupProfile"), exports);
__exportStar(require("./GroupRule"), exports);
__exportStar(require("./GroupRuleAction"), exports);
__exportStar(require("./GroupRuleConditions"), exports);
__exportStar(require("./GroupRuleExpression"), exports);
__exportStar(require("./GroupRuleGroupAssignment"), exports);
__exportStar(require("./GroupRuleGroupCondition"), exports);
__exportStar(require("./GroupRulePeopleCondition"), exports);
__exportStar(require("./GroupRuleStatus"), exports);
__exportStar(require("./GroupRuleUserCondition"), exports);
__exportStar(require("./GroupSchema"), exports);
__exportStar(require("./GroupSchemaAttribute"), exports);
__exportStar(require("./GroupSchemaBase"), exports);
__exportStar(require("./GroupSchemaBaseProperties"), exports);
__exportStar(require("./GroupSchemaCustom"), exports);
__exportStar(require("./GroupSchemaDefinitions"), exports);
__exportStar(require("./GroupType"), exports);
__exportStar(require("./HardwareUserFactor"), exports);
__exportStar(require("./HardwareUserFactorAllOf"), exports);
__exportStar(require("./HardwareUserFactorProfile"), exports);
__exportStar(require("./HostedPage"), exports);
__exportStar(require("./HostedPageType"), exports);
__exportStar(require("./HrefObject"), exports);
__exportStar(require("./HrefObjectHints"), exports);
__exportStar(require("./HttpMethod"), exports);
__exportStar(require("./IdentityProvider"), exports);
__exportStar(require("./IdentityProviderApplicationUser"), exports);
__exportStar(require("./IdentityProviderCredentials"), exports);
__exportStar(require("./IdentityProviderCredentialsClient"), exports);
__exportStar(require("./IdentityProviderCredentialsSigning"), exports);
__exportStar(require("./IdentityProviderCredentialsTrust"), exports);
__exportStar(require("./IdentityProviderCredentialsTrustRevocation"), exports);
__exportStar(require("./IdentityProviderPolicy"), exports);
__exportStar(require("./IdentityProviderPolicyAllOf"), exports);
__exportStar(require("./IdentityProviderPolicyProvider"), exports);
__exportStar(require("./IdentityProviderPolicyRuleCondition"), exports);
__exportStar(require("./IdpPolicyRuleAction"), exports);
__exportStar(require("./IdpPolicyRuleActionProvider"), exports);
__exportStar(require("./IframeEmbedScopeAllowedApps"), exports);
__exportStar(require("./ImageUploadResponse"), exports);
__exportStar(require("./InactivityPolicyRuleCondition"), exports);
__exportStar(require("./InlineHook"), exports);
__exportStar(require("./InlineHookChannel"), exports);
__exportStar(require("./InlineHookChannelConfig"), exports);
__exportStar(require("./InlineHookChannelConfigAuthScheme"), exports);
__exportStar(require("./InlineHookChannelConfigHeaders"), exports);
__exportStar(require("./InlineHookChannelType"), exports);
__exportStar(require("./InlineHookResponse"), exports);
__exportStar(require("./InlineHookResponseCommandValue"), exports);
__exportStar(require("./InlineHookResponseCommands"), exports);
__exportStar(require("./InlineHookStatus"), exports);
__exportStar(require("./InlineHookType"), exports);
__exportStar(require("./IssuerMode"), exports);
__exportStar(require("./JsonWebKey"), exports);
__exportStar(require("./JwkUse"), exports);
__exportStar(require("./JwkUseType"), exports);
__exportStar(require("./KnowledgeConstraint"), exports);
__exportStar(require("./LifecycleCreateSettingObject"), exports);
__exportStar(require("./LifecycleDeactivateSettingObject"), exports);
__exportStar(require("./LifecycleExpirationPolicyRuleCondition"), exports);
__exportStar(require("./LifecycleStatus"), exports);
__exportStar(require("./LinkedObject"), exports);
__exportStar(require("./LinkedObjectDetails"), exports);
__exportStar(require("./LinkedObjectDetailsType"), exports);
__exportStar(require("./LocationGranularity"), exports);
__exportStar(require("./LogActor"), exports);
__exportStar(require("./LogAuthenticationContext"), exports);
__exportStar(require("./LogAuthenticationProvider"), exports);
__exportStar(require("./LogClient"), exports);
__exportStar(require("./LogCredentialProvider"), exports);
__exportStar(require("./LogCredentialType"), exports);
__exportStar(require("./LogDebugContext"), exports);
__exportStar(require("./LogEvent"), exports);
__exportStar(require("./LogGeographicalContext"), exports);
__exportStar(require("./LogGeolocation"), exports);
__exportStar(require("./LogIpAddress"), exports);
__exportStar(require("./LogIssuer"), exports);
__exportStar(require("./LogOutcome"), exports);
__exportStar(require("./LogRequest"), exports);
__exportStar(require("./LogSecurityContext"), exports);
__exportStar(require("./LogSeverity"), exports);
__exportStar(require("./LogTarget"), exports);
__exportStar(require("./LogTransaction"), exports);
__exportStar(require("./LogUserAgent"), exports);
__exportStar(require("./MDMEnrollmentPolicyEnrollment"), exports);
__exportStar(require("./MDMEnrollmentPolicyRuleCondition"), exports);
__exportStar(require("./ModelError"), exports);
__exportStar(require("./NetworkZone"), exports);
__exportStar(require("./NetworkZoneAddress"), exports);
__exportStar(require("./NetworkZoneAddressType"), exports);
__exportStar(require("./NetworkZoneLocation"), exports);
__exportStar(require("./NetworkZoneStatus"), exports);
__exportStar(require("./NetworkZoneType"), exports);
__exportStar(require("./NetworkZoneUsage"), exports);
__exportStar(require("./NotificationType"), exports);
__exportStar(require("./OAuth2Actor"), exports);
__exportStar(require("./OAuth2Claim"), exports);
__exportStar(require("./OAuth2ClaimConditions"), exports);
__exportStar(require("./OAuth2ClaimGroupFilterType"), exports);
__exportStar(require("./OAuth2ClaimType"), exports);
__exportStar(require("./OAuth2ClaimValueType"), exports);
__exportStar(require("./OAuth2Client"), exports);
__exportStar(require("./OAuth2RefreshToken"), exports);
__exportStar(require("./OAuth2Scope"), exports);
__exportStar(require("./OAuth2ScopeConsentGrant"), exports);
__exportStar(require("./OAuth2ScopeConsentGrantSource"), exports);
__exportStar(require("./OAuth2ScopeConsentType"), exports);
__exportStar(require("./OAuth2ScopeMetadataPublish"), exports);
__exportStar(require("./OAuth2ScopesMediationPolicyRuleCondition"), exports);
__exportStar(require("./OAuth2Token"), exports);
__exportStar(require("./OAuthApplicationCredentials"), exports);
__exportStar(require("./OAuthApplicationCredentialsAllOf"), exports);
__exportStar(require("./OAuthEndpointAuthenticationMethod"), exports);
__exportStar(require("./OAuthGrantType"), exports);
__exportStar(require("./OAuthResponseType"), exports);
__exportStar(require("./OktaSignOnPolicy"), exports);
__exportStar(require("./OktaSignOnPolicyAllOf"), exports);
__exportStar(require("./OktaSignOnPolicyConditions"), exports);
__exportStar(require("./OktaSignOnPolicyConditionsAllOf"), exports);
__exportStar(require("./OktaSignOnPolicyFactorPromptMode"), exports);
__exportStar(require("./OktaSignOnPolicyRule"), exports);
__exportStar(require("./OktaSignOnPolicyRuleActions"), exports);
__exportStar(require("./OktaSignOnPolicyRuleActionsAllOf"), exports);
__exportStar(require("./OktaSignOnPolicyRuleAllOf"), exports);
__exportStar(require("./OktaSignOnPolicyRuleConditions"), exports);
__exportStar(require("./OktaSignOnPolicyRuleConditionsAllOf"), exports);
__exportStar(require("./OktaSignOnPolicyRuleSignonActions"), exports);
__exportStar(require("./OktaSignOnPolicyRuleSignonSessionActions"), exports);
__exportStar(require("./OpenIdConnectApplication"), exports);
__exportStar(require("./OpenIdConnectApplicationAllOf"), exports);
__exportStar(require("./OpenIdConnectApplicationConsentMethod"), exports);
__exportStar(require("./OpenIdConnectApplicationIdpInitiatedLogin"), exports);
__exportStar(require("./OpenIdConnectApplicationIssuerMode"), exports);
__exportStar(require("./OpenIdConnectApplicationSettings"), exports);
__exportStar(require("./OpenIdConnectApplicationSettingsAllOf"), exports);
__exportStar(require("./OpenIdConnectApplicationSettingsClient"), exports);
__exportStar(require("./OpenIdConnectApplicationSettingsClientKeys"), exports);
__exportStar(require("./OpenIdConnectApplicationSettingsRefreshToken"), exports);
__exportStar(require("./OpenIdConnectApplicationType"), exports);
__exportStar(require("./OpenIdConnectRefreshTokenRotationType"), exports);
__exportStar(require("./OperationalStatus"), exports);
__exportStar(require("./OrgContactType"), exports);
__exportStar(require("./OrgContactTypeObj"), exports);
__exportStar(require("./OrgContactUser"), exports);
__exportStar(require("./OrgOktaCommunicationSetting"), exports);
__exportStar(require("./OrgOktaSupportSetting"), exports);
__exportStar(require("./OrgOktaSupportSettingsObj"), exports);
__exportStar(require("./OrgPreferences"), exports);
__exportStar(require("./OrgSetting"), exports);
__exportStar(require("./PasswordCredential"), exports);
__exportStar(require("./PasswordCredentialHash"), exports);
__exportStar(require("./PasswordCredentialHashAlgorithm"), exports);
__exportStar(require("./PasswordCredentialHook"), exports);
__exportStar(require("./PasswordDictionary"), exports);
__exportStar(require("./PasswordDictionaryCommon"), exports);
__exportStar(require("./PasswordExpirationPolicyRuleCondition"), exports);
__exportStar(require("./PasswordPolicy"), exports);
__exportStar(require("./PasswordPolicyAllOf"), exports);
__exportStar(require("./PasswordPolicyAuthenticationProviderCondition"), exports);
__exportStar(require("./PasswordPolicyAuthenticationProviderType"), exports);
__exportStar(require("./PasswordPolicyConditions"), exports);
__exportStar(require("./PasswordPolicyConditionsAllOf"), exports);
__exportStar(require("./PasswordPolicyDelegationSettings"), exports);
__exportStar(require("./PasswordPolicyDelegationSettingsOptions"), exports);
__exportStar(require("./PasswordPolicyPasswordSettings"), exports);
__exportStar(require("./PasswordPolicyPasswordSettingsAge"), exports);
__exportStar(require("./PasswordPolicyPasswordSettingsComplexity"), exports);
__exportStar(require("./PasswordPolicyPasswordSettingsLockout"), exports);
__exportStar(require("./PasswordPolicyRecoveryEmail"), exports);
__exportStar(require("./PasswordPolicyRecoveryEmailProperties"), exports);
__exportStar(require("./PasswordPolicyRecoveryEmailRecoveryToken"), exports);
__exportStar(require("./PasswordPolicyRecoveryFactorSettings"), exports);
__exportStar(require("./PasswordPolicyRecoveryFactors"), exports);
__exportStar(require("./PasswordPolicyRecoveryQuestion"), exports);
__exportStar(require("./PasswordPolicyRecoveryQuestionComplexity"), exports);
__exportStar(require("./PasswordPolicyRecoveryQuestionProperties"), exports);
__exportStar(require("./PasswordPolicyRecoverySettings"), exports);
__exportStar(require("./PasswordPolicyRule"), exports);
__exportStar(require("./PasswordPolicyRuleAction"), exports);
__exportStar(require("./PasswordPolicyRuleActions"), exports);
__exportStar(require("./PasswordPolicyRuleActionsAllOf"), exports);
__exportStar(require("./PasswordPolicyRuleAllOf"), exports);
__exportStar(require("./PasswordPolicyRuleConditions"), exports);
__exportStar(require("./PasswordPolicyRuleConditionsAllOf"), exports);
__exportStar(require("./PasswordPolicySettings"), exports);
__exportStar(require("./PasswordSettingObject"), exports);
__exportStar(require("./PlatformConditionEvaluatorPlatform"), exports);
__exportStar(require("./PlatformConditionEvaluatorPlatformOperatingSystem"), exports);
__exportStar(require("./PlatformConditionEvaluatorPlatformOperatingSystemVersion"), exports);
__exportStar(require("./PlatformConditionOperatingSystemVersionMatchType"), exports);
__exportStar(require("./PlatformPolicyRuleCondition"), exports);
__exportStar(require("./Policy"), exports);
__exportStar(require("./PolicyAccess"), exports);
__exportStar(require("./PolicyAccountLink"), exports);
__exportStar(require("./PolicyAccountLinkAction"), exports);
__exportStar(require("./PolicyAccountLinkFilter"), exports);
__exportStar(require("./PolicyAccountLinkFilterGroups"), exports);
__exportStar(require("./PolicyNetworkCondition"), exports);
__exportStar(require("./PolicyNetworkConnection"), exports);
__exportStar(require("./PolicyPeopleCondition"), exports);
__exportStar(require("./PolicyPlatformOperatingSystemType"), exports);
__exportStar(require("./PolicyPlatformType"), exports);
__exportStar(require("./PolicyRule"), exports);
__exportStar(require("./PolicyRuleActions"), exports);
__exportStar(require("./PolicyRuleActionsEnroll"), exports);
__exportStar(require("./PolicyRuleActionsEnrollSelf"), exports);
__exportStar(require("./PolicyRuleAuthContextCondition"), exports);
__exportStar(require("./PolicyRuleAuthContextType"), exports);
__exportStar(require("./PolicyRuleConditions"), exports);
__exportStar(require("./PolicyRuleType"), exports);
__exportStar(require("./PolicySubject"), exports);
__exportStar(require("./PolicySubjectMatchType"), exports);
__exportStar(require("./PolicyType"), exports);
__exportStar(require("./PolicyUserNameTemplate"), exports);
__exportStar(require("./PolicyUserStatus"), exports);
__exportStar(require("./PossessionConstraint"), exports);
__exportStar(require("./PossessionConstraintAllOf"), exports);
__exportStar(require("./PreRegistrationInlineHook"), exports);
__exportStar(require("./PrincipalRateLimitEntity"), exports);
__exportStar(require("./PrincipalType"), exports);
__exportStar(require("./ProfileEnrollmentPolicy"), exports);
__exportStar(require("./ProfileEnrollmentPolicyRule"), exports);
__exportStar(require("./ProfileEnrollmentPolicyRuleAction"), exports);
__exportStar(require("./ProfileEnrollmentPolicyRuleActions"), exports);
__exportStar(require("./ProfileEnrollmentPolicyRuleActionsAllOf"), exports);
__exportStar(require("./ProfileEnrollmentPolicyRuleActivationRequirement"), exports);
__exportStar(require("./ProfileEnrollmentPolicyRuleAllOf"), exports);
__exportStar(require("./ProfileEnrollmentPolicyRuleProfileAttribute"), exports);
__exportStar(require("./ProfileMapping"), exports);
__exportStar(require("./ProfileMappingProperty"), exports);
__exportStar(require("./ProfileMappingPropertyPushStatus"), exports);
__exportStar(require("./ProfileMappingSource"), exports);
__exportStar(require("./ProfileSettingObject"), exports);
__exportStar(require("./Protocol"), exports);
__exportStar(require("./ProtocolAlgorithmType"), exports);
__exportStar(require("./ProtocolAlgorithmTypeSignature"), exports);
__exportStar(require("./ProtocolAlgorithmTypeSignatureScope"), exports);
__exportStar(require("./ProtocolAlgorithms"), exports);
__exportStar(require("./ProtocolEndpoint"), exports);
__exportStar(require("./ProtocolEndpointBinding"), exports);
__exportStar(require("./ProtocolEndpointType"), exports);
__exportStar(require("./ProtocolEndpoints"), exports);
__exportStar(require("./ProtocolRelayState"), exports);
__exportStar(require("./ProtocolRelayStateFormat"), exports);
__exportStar(require("./ProtocolSettings"), exports);
__exportStar(require("./ProtocolType"), exports);
__exportStar(require("./Provisioning"), exports);
__exportStar(require("./ProvisioningAction"), exports);
__exportStar(require("./ProvisioningConditions"), exports);
__exportStar(require("./ProvisioningConnection"), exports);
__exportStar(require("./ProvisioningConnectionAuthScheme"), exports);
__exportStar(require("./ProvisioningConnectionProfile"), exports);
__exportStar(require("./ProvisioningConnectionRequest"), exports);
__exportStar(require("./ProvisioningConnectionStatus"), exports);
__exportStar(require("./ProvisioningDeprovisionedAction"), exports);
__exportStar(require("./ProvisioningDeprovisionedCondition"), exports);
__exportStar(require("./ProvisioningGroups"), exports);
__exportStar(require("./ProvisioningGroupsAction"), exports);
__exportStar(require("./ProvisioningSuspendedAction"), exports);
__exportStar(require("./ProvisioningSuspendedCondition"), exports);
__exportStar(require("./PushUserFactor"), exports);
__exportStar(require("./PushUserFactorAllOf"), exports);
__exportStar(require("./PushUserFactorProfile"), exports);
__exportStar(require("./RecoveryQuestionCredential"), exports);
__exportStar(require("./ReleaseChannel"), exports);
__exportStar(require("./RequiredEnum"), exports);
__exportStar(require("./ResetPasswordToken"), exports);
__exportStar(require("./RiskPolicyRuleCondition"), exports);
__exportStar(require("./RiskScorePolicyRuleCondition"), exports);
__exportStar(require("./Role"), exports);
__exportStar(require("./RoleAssignmentType"), exports);
__exportStar(require("./RoleType"), exports);
__exportStar(require("./SamlApplication"), exports);
__exportStar(require("./SamlApplicationAllOf"), exports);
__exportStar(require("./SamlApplicationSettings"), exports);
__exportStar(require("./SamlApplicationSettingsAllOf"), exports);
__exportStar(require("./SamlApplicationSettingsApplication"), exports);
__exportStar(require("./SamlApplicationSettingsSignOn"), exports);
__exportStar(require("./SamlAttributeStatement"), exports);
__exportStar(require("./ScheduledUserLifecycleAction"), exports);
__exportStar(require("./SchemeApplicationCredentials"), exports);
__exportStar(require("./SchemeApplicationCredentialsAllOf"), exports);
__exportStar(require("./SecurePasswordStoreApplication"), exports);
__exportStar(require("./SecurePasswordStoreApplicationAllOf"), exports);
__exportStar(require("./SecurePasswordStoreApplicationSettings"), exports);
__exportStar(require("./SecurePasswordStoreApplicationSettingsAllOf"), exports);
__exportStar(require("./SecurePasswordStoreApplicationSettingsApplication"), exports);
__exportStar(require("./SecurityQuestion"), exports);
__exportStar(require("./SecurityQuestionUserFactor"), exports);
__exportStar(require("./SecurityQuestionUserFactorAllOf"), exports);
__exportStar(require("./SecurityQuestionUserFactorProfile"), exports);
__exportStar(require("./SeedEnum"), exports);
__exportStar(require("./Session"), exports);
__exportStar(require("./SessionAuthenticationMethod"), exports);
__exportStar(require("./SessionIdentityProvider"), exports);
__exportStar(require("./SessionIdentityProviderType"), exports);
__exportStar(require("./SessionStatus"), exports);
__exportStar(require("./SignInPage"), exports);
__exportStar(require("./SignInPageAllOf"), exports);
__exportStar(require("./SignInPageAllOfDefaultApp"), exports);
__exportStar(require("./SignInPageAllOfWidgetCustomizations"), exports);
__exportStar(require("./SignInPageTouchPointVariant"), exports);
__exportStar(require("./SignOnInlineHook"), exports);
__exportStar(require("./SingleLogout"), exports);
__exportStar(require("./SmsTemplate"), exports);
__exportStar(require("./SmsTemplateType"), exports);
__exportStar(require("./SmsUserFactor"), exports);
__exportStar(require("./SmsUserFactorAllOf"), exports);
__exportStar(require("./SmsUserFactorProfile"), exports);
__exportStar(require("./SocialAuthToken"), exports);
__exportStar(require("./SpCertificate"), exports);
__exportStar(require("./Subscription"), exports);
__exportStar(require("./SubscriptionStatus"), exports);
__exportStar(require("./SwaApplicationSettings"), exports);
__exportStar(require("./SwaApplicationSettingsAllOf"), exports);
__exportStar(require("./SwaApplicationSettingsApplication"), exports);
__exportStar(require("./TempPassword"), exports);
__exportStar(require("./Theme"), exports);
__exportStar(require("./ThemeResponse"), exports);
__exportStar(require("./ThreatInsightConfiguration"), exports);
__exportStar(require("./TokenAuthorizationServerPolicyRuleAction"), exports);
__exportStar(require("./TokenAuthorizationServerPolicyRuleActionInlineHook"), exports);
__exportStar(require("./TokenUserFactor"), exports);
__exportStar(require("./TokenUserFactorAllOf"), exports);
__exportStar(require("./TokenUserFactorProfile"), exports);
__exportStar(require("./TotpUserFactor"), exports);
__exportStar(require("./TotpUserFactorAllOf"), exports);
__exportStar(require("./TotpUserFactorProfile"), exports);
__exportStar(require("./TrustedOrigin"), exports);
__exportStar(require("./TrustedOriginScope"), exports);
__exportStar(require("./TrustedOriginScopeType"), exports);
__exportStar(require("./U2fUserFactor"), exports);
__exportStar(require("./U2fUserFactorAllOf"), exports);
__exportStar(require("./U2fUserFactorProfile"), exports);
__exportStar(require("./UpdateUserRequest"), exports);
__exportStar(require("./User"), exports);
__exportStar(require("./UserActivationToken"), exports);
__exportStar(require("./UserCondition"), exports);
__exportStar(require("./UserCredentials"), exports);
__exportStar(require("./UserFactor"), exports);
__exportStar(require("./UserIdString"), exports);
__exportStar(require("./UserIdentifierConditionEvaluatorPattern"), exports);
__exportStar(require("./UserIdentifierMatchType"), exports);
__exportStar(require("./UserIdentifierPolicyRuleCondition"), exports);
__exportStar(require("./UserIdentifierType"), exports);
__exportStar(require("./UserIdentityProviderLinkRequest"), exports);
__exportStar(require("./UserLifecycleAttributePolicyRuleCondition"), exports);
__exportStar(require("./UserNextLogin"), exports);
__exportStar(require("./UserPolicyRuleCondition"), exports);
__exportStar(require("./UserProfile"), exports);
__exportStar(require("./UserSchema"), exports);
__exportStar(require("./UserSchemaAttribute"), exports);
__exportStar(require("./UserSchemaAttributeEnum"), exports);
__exportStar(require("./UserSchemaAttributeItems"), exports);
__exportStar(require("./UserSchemaAttributeMaster"), exports);
__exportStar(require("./UserSchemaAttributeMasterPriority"), exports);
__exportStar(require("./UserSchemaAttributeMasterType"), exports);
__exportStar(require("./UserSchemaAttributePermission"), exports);
__exportStar(require("./UserSchemaAttributeScope"), exports);
__exportStar(require("./UserSchemaAttributeType"), exports);
__exportStar(require("./UserSchemaAttributeUnion"), exports);
__exportStar(require("./UserSchemaBase"), exports);
__exportStar(require("./UserSchemaBaseProperties"), exports);
__exportStar(require("./UserSchemaDefinitions"), exports);
__exportStar(require("./UserSchemaProperties"), exports);
__exportStar(require("./UserSchemaPropertiesProfile"), exports);
__exportStar(require("./UserSchemaPropertiesProfileItem"), exports);
__exportStar(require("./UserSchemaPublic"), exports);
__exportStar(require("./UserStatus"), exports);
__exportStar(require("./UserStatusPolicyRuleCondition"), exports);
__exportStar(require("./UserType"), exports);
__exportStar(require("./UserTypeCondition"), exports);
__exportStar(require("./UserVerificationEnum"), exports);
__exportStar(require("./VerificationMethod"), exports);
__exportStar(require("./VerifyFactorRequest"), exports);
__exportStar(require("./VerifyUserFactorResponse"), exports);
__exportStar(require("./VerifyUserFactorResult"), exports);
__exportStar(require("./WebAuthnUserFactor"), exports);
__exportStar(require("./WebAuthnUserFactorAllOf"), exports);
__exportStar(require("./WebAuthnUserFactorProfile"), exports);
__exportStar(require("./WebUserFactor"), exports);
__exportStar(require("./WebUserFactorAllOf"), exports);
__exportStar(require("./WebUserFactorProfile"), exports);
__exportStar(require("./WsFederationApplication"), exports);
__exportStar(require("./WsFederationApplicationAllOf"), exports);
__exportStar(require("./WsFederationApplicationSettings"), exports);
__exportStar(require("./WsFederationApplicationSettingsAllOf"), exports);
__exportStar(require("./WsFederationApplicationSettingsApplication"), exports);
const AccessPolicy_1 = require("./AccessPolicy");
const AccessPolicyAllOf_1 = require("./AccessPolicyAllOf");
const AccessPolicyConstraint_1 = require("./AccessPolicyConstraint");
const AccessPolicyConstraints_1 = require("./AccessPolicyConstraints");
const AccessPolicyRule_1 = require("./AccessPolicyRule");
const AccessPolicyRuleActions_1 = require("./AccessPolicyRuleActions");
const AccessPolicyRuleActionsAllOf_1 = require("./AccessPolicyRuleActionsAllOf");
const AccessPolicyRuleAllOf_1 = require("./AccessPolicyRuleAllOf");
const AccessPolicyRuleApplicationSignOn_1 = require("./AccessPolicyRuleApplicationSignOn");
const AccessPolicyRuleConditions_1 = require("./AccessPolicyRuleConditions");
const AccessPolicyRuleConditionsAllOf_1 = require("./AccessPolicyRuleConditionsAllOf");
const AccessPolicyRuleCustomCondition_1 = require("./AccessPolicyRuleCustomCondition");
const AcsEndpoint_1 = require("./AcsEndpoint");
const ActivateFactorRequest_1 = require("./ActivateFactorRequest");
const Agent_1 = require("./Agent");
const AgentPool_1 = require("./AgentPool");
const AgentPoolUpdate_1 = require("./AgentPoolUpdate");
const AgentPoolUpdateSetting_1 = require("./AgentPoolUpdateSetting");
const ApiToken_1 = require("./ApiToken");
const ApiTokenLink_1 = require("./ApiTokenLink");
const AppAndInstanceConditionEvaluatorAppOrInstance_1 = require("./AppAndInstanceConditionEvaluatorAppOrInstance");
const AppAndInstancePolicyRuleCondition_1 = require("./AppAndInstancePolicyRuleCondition");
const AppInstancePolicyRuleCondition_1 = require("./AppInstancePolicyRuleCondition");
const AppLink_1 = require("./AppLink");
const AppUser_1 = require("./AppUser");
const AppUserCredentials_1 = require("./AppUserCredentials");
const AppUserPasswordCredential_1 = require("./AppUserPasswordCredential");
const Application_1 = require("./Application");
const ApplicationAccessibility_1 = require("./ApplicationAccessibility");
const ApplicationCredentials_1 = require("./ApplicationCredentials");
const ApplicationCredentialsOAuthClient_1 = require("./ApplicationCredentialsOAuthClient");
const ApplicationCredentialsSigning_1 = require("./ApplicationCredentialsSigning");
const ApplicationCredentialsUsernameTemplate_1 = require("./ApplicationCredentialsUsernameTemplate");
const ApplicationFeature_1 = require("./ApplicationFeature");
const ApplicationGroupAssignment_1 = require("./ApplicationGroupAssignment");
const ApplicationLicensing_1 = require("./ApplicationLicensing");
const ApplicationSettings_1 = require("./ApplicationSettings");
const ApplicationSettingsNotes_1 = require("./ApplicationSettingsNotes");
const ApplicationSettingsNotifications_1 = require("./ApplicationSettingsNotifications");
const ApplicationSettingsNotificationsVpn_1 = require("./ApplicationSettingsNotificationsVpn");
const ApplicationSettingsNotificationsVpnNetwork_1 = require("./ApplicationSettingsNotificationsVpnNetwork");
const ApplicationVisibility_1 = require("./ApplicationVisibility");
const ApplicationVisibilityHide_1 = require("./ApplicationVisibilityHide");
const AssignRoleRequest_1 = require("./AssignRoleRequest");
const AuthenticationProvider_1 = require("./AuthenticationProvider");
const Authenticator_1 = require("./Authenticator");
const AuthenticatorProvider_1 = require("./AuthenticatorProvider");
const AuthenticatorProviderConfiguration_1 = require("./AuthenticatorProviderConfiguration");
const AuthenticatorProviderConfigurationUserNameTemplate_1 = require("./AuthenticatorProviderConfigurationUserNameTemplate");
const AuthenticatorSettings_1 = require("./AuthenticatorSettings");
const AuthorizationServer_1 = require("./AuthorizationServer");
const AuthorizationServerCredentials_1 = require("./AuthorizationServerCredentials");
const AuthorizationServerCredentialsSigningConfig_1 = require("./AuthorizationServerCredentialsSigningConfig");
const AuthorizationServerPolicy_1 = require("./AuthorizationServerPolicy");
const AuthorizationServerPolicyRule_1 = require("./AuthorizationServerPolicyRule");
const AuthorizationServerPolicyRuleActions_1 = require("./AuthorizationServerPolicyRuleActions");
const AuthorizationServerPolicyRuleActionsAllOf_1 = require("./AuthorizationServerPolicyRuleActionsAllOf");
const AuthorizationServerPolicyRuleAllOf_1 = require("./AuthorizationServerPolicyRuleAllOf");
const AuthorizationServerPolicyRuleConditions_1 = require("./AuthorizationServerPolicyRuleConditions");
const AuthorizationServerPolicyRuleConditionsAllOf_1 = require("./AuthorizationServerPolicyRuleConditionsAllOf");
const AutoLoginApplication_1 = require("./AutoLoginApplication");
const AutoLoginApplicationAllOf_1 = require("./AutoLoginApplicationAllOf");
const AutoLoginApplicationSettings_1 = require("./AutoLoginApplicationSettings");
const AutoLoginApplicationSettingsAllOf_1 = require("./AutoLoginApplicationSettingsAllOf");
const AutoLoginApplicationSettingsSignOn_1 = require("./AutoLoginApplicationSettingsSignOn");
const AutoUpdateSchedule_1 = require("./AutoUpdateSchedule");
const BasicApplicationSettings_1 = require("./BasicApplicationSettings");
const BasicApplicationSettingsAllOf_1 = require("./BasicApplicationSettingsAllOf");
const BasicApplicationSettingsApplication_1 = require("./BasicApplicationSettingsApplication");
const BasicAuthApplication_1 = require("./BasicAuthApplication");
const BasicAuthApplicationAllOf_1 = require("./BasicAuthApplicationAllOf");
const BeforeScheduledActionPolicyRuleCondition_1 = require("./BeforeScheduledActionPolicyRuleCondition");
const BehaviorDetectionRuleSettingsBasedOnDeviceVelocityInKilometersPerHour_1 = require("./BehaviorDetectionRuleSettingsBasedOnDeviceVelocityInKilometersPerHour");
const BehaviorDetectionRuleSettingsBasedOnEventHistory_1 = require("./BehaviorDetectionRuleSettingsBasedOnEventHistory");
const BehaviorRule_1 = require("./BehaviorRule");
const BehaviorRuleAnomalousDevice_1 = require("./BehaviorRuleAnomalousDevice");
const BehaviorRuleAnomalousDeviceAllOf_1 = require("./BehaviorRuleAnomalousDeviceAllOf");
const BehaviorRuleAnomalousIP_1 = require("./BehaviorRuleAnomalousIP");
const BehaviorRuleAnomalousIPAllOf_1 = require("./BehaviorRuleAnomalousIPAllOf");
const BehaviorRuleAnomalousLocation_1 = require("./BehaviorRuleAnomalousLocation");
const BehaviorRuleAnomalousLocationAllOf_1 = require("./BehaviorRuleAnomalousLocationAllOf");
const BehaviorRuleSettingsAnomalousDevice_1 = require("./BehaviorRuleSettingsAnomalousDevice");
const BehaviorRuleSettingsAnomalousIP_1 = require("./BehaviorRuleSettingsAnomalousIP");
const BehaviorRuleSettingsAnomalousIPAllOf_1 = require("./BehaviorRuleSettingsAnomalousIPAllOf");
const BehaviorRuleSettingsAnomalousLocation_1 = require("./BehaviorRuleSettingsAnomalousLocation");
const BehaviorRuleSettingsAnomalousLocationAllOf_1 = require("./BehaviorRuleSettingsAnomalousLocationAllOf");
const BehaviorRuleSettingsHistoryBased_1 = require("./BehaviorRuleSettingsHistoryBased");
const BehaviorRuleSettingsVelocity_1 = require("./BehaviorRuleSettingsVelocity");
const BehaviorRuleVelocity_1 = require("./BehaviorRuleVelocity");
const BehaviorRuleVelocityAllOf_1 = require("./BehaviorRuleVelocityAllOf");
const BookmarkApplication_1 = require("./BookmarkApplication");
const BookmarkApplicationAllOf_1 = require("./BookmarkApplicationAllOf");
const BookmarkApplicationSettings_1 = require("./BookmarkApplicationSettings");
const BookmarkApplicationSettingsAllOf_1 = require("./BookmarkApplicationSettingsAllOf");
const BookmarkApplicationSettingsApplication_1 = require("./BookmarkApplicationSettingsApplication");
const BouncesRemoveListError_1 = require("./BouncesRemoveListError");
const BouncesRemoveListObj_1 = require("./BouncesRemoveListObj");
const BouncesRemoveListResult_1 = require("./BouncesRemoveListResult");
const Brand_1 = require("./Brand");
const BrowserPluginApplication_1 = require("./BrowserPluginApplication");
const BrowserPluginApplicationAllOf_1 = require("./BrowserPluginApplicationAllOf");
const CAPTCHAInstance_1 = require("./CAPTCHAInstance");
const CallUserFactor_1 = require("./CallUserFactor");
const CallUserFactorAllOf_1 = require("./CallUserFactorAllOf");
const CallUserFactorProfile_1 = require("./CallUserFactorProfile");
const CapabilitiesCreateObject_1 = require("./CapabilitiesCreateObject");
const CapabilitiesObject_1 = require("./CapabilitiesObject");
const CapabilitiesUpdateObject_1 = require("./CapabilitiesUpdateObject");
const CatalogApplication_1 = require("./CatalogApplication");
const ChangePasswordRequest_1 = require("./ChangePasswordRequest");
const ChannelBinding_1 = require("./ChannelBinding");
const ClientPolicyCondition_1 = require("./ClientPolicyCondition");
const Compliance_1 = require("./Compliance");
const ContextPolicyRuleCondition_1 = require("./ContextPolicyRuleCondition");
const ContextPolicyRuleConditionAllOf_1 = require("./ContextPolicyRuleConditionAllOf");
const CreateSessionRequest_1 = require("./CreateSessionRequest");
const CreateUserRequest_1 = require("./CreateUserRequest");
const Csr_1 = require("./Csr");
const CsrMetadata_1 = require("./CsrMetadata");
const CsrMetadataSubject_1 = require("./CsrMetadataSubject");
const CsrMetadataSubjectAltNames_1 = require("./CsrMetadataSubjectAltNames");
const CustomHotpUserFactor_1 = require("./CustomHotpUserFactor");
const CustomHotpUserFactorAllOf_1 = require("./CustomHotpUserFactorAllOf");
const CustomHotpUserFactorProfile_1 = require("./CustomHotpUserFactorProfile");
const CustomizablePage_1 = require("./CustomizablePage");
const DNSRecord_1 = require("./DNSRecord");
const DeviceAccessPolicyRuleCondition_1 = require("./DeviceAccessPolicyRuleCondition");
const DeviceAccessPolicyRuleConditionAllOf_1 = require("./DeviceAccessPolicyRuleConditionAllOf");
const DevicePolicyRuleCondition_1 = require("./DevicePolicyRuleCondition");
const DevicePolicyRuleConditionPlatform_1 = require("./DevicePolicyRuleConditionPlatform");
const Domain_1 = require("./Domain");
const DomainCertificate_1 = require("./DomainCertificate");
const DomainCertificateMetadata_1 = require("./DomainCertificateMetadata");
const DomainLinks_1 = require("./DomainLinks");
const DomainListResponse_1 = require("./DomainListResponse");
const DomainResponse_1 = require("./DomainResponse");
const Duration_1 = require("./Duration");
const EmailContent_1 = require("./EmailContent");
const EmailCustomization_1 = require("./EmailCustomization");
const EmailCustomizationAllOf_1 = require("./EmailCustomizationAllOf");
const EmailCustomizationAllOfLinks_1 = require("./EmailCustomizationAllOfLinks");
const EmailDefaultContent_1 = require("./EmailDefaultContent");
const EmailDefaultContentAllOf_1 = require("./EmailDefaultContentAllOf");
const EmailDefaultContentAllOfLinks_1 = require("./EmailDefaultContentAllOfLinks");
const EmailPreview_1 = require("./EmailPreview");
const EmailPreviewLinks_1 = require("./EmailPreviewLinks");
const EmailSettings_1 = require("./EmailSettings");
const EmailTemplate_1 = require("./EmailTemplate");
const EmailTemplateEmbedded_1 = require("./EmailTemplateEmbedded");
const EmailTemplateLinks_1 = require("./EmailTemplateLinks");
const EmailUserFactor_1 = require("./EmailUserFactor");
const EmailUserFactorAllOf_1 = require("./EmailUserFactorAllOf");
const EmailUserFactorProfile_1 = require("./EmailUserFactorProfile");
const ErrorErrorCausesInner_1 = require("./ErrorErrorCausesInner");
const EventHook_1 = require("./EventHook");
const EventHookChannel_1 = require("./EventHookChannel");
const EventHookChannelConfig_1 = require("./EventHookChannelConfig");
const EventHookChannelConfigAuthScheme_1 = require("./EventHookChannelConfigAuthScheme");
const EventHookChannelConfigHeader_1 = require("./EventHookChannelConfigHeader");
const EventSubscriptions_1 = require("./EventSubscriptions");
const Feature_1 = require("./Feature");
const FeatureStage_1 = require("./FeatureStage");
const ForgotPasswordResponse_1 = require("./ForgotPasswordResponse");
const GrantTypePolicyRuleCondition_1 = require("./GrantTypePolicyRuleCondition");
const Group_1 = require("./Group");
const GroupCondition_1 = require("./GroupCondition");
const GroupPolicyRuleCondition_1 = require("./GroupPolicyRuleCondition");
const GroupProfile_1 = require("./GroupProfile");
const GroupRule_1 = require("./GroupRule");
const GroupRuleAction_1 = require("./GroupRuleAction");
const GroupRuleConditions_1 = require("./GroupRuleConditions");
const GroupRuleExpression_1 = require("./GroupRuleExpression");
const GroupRuleGroupAssignment_1 = require("./GroupRuleGroupAssignment");
const GroupRuleGroupCondition_1 = require("./GroupRuleGroupCondition");
const GroupRulePeopleCondition_1 = require("./GroupRulePeopleCondition");
const GroupRuleUserCondition_1 = require("./GroupRuleUserCondition");
const GroupSchema_1 = require("./GroupSchema");
const GroupSchemaAttribute_1 = require("./GroupSchemaAttribute");
const GroupSchemaBase_1 = require("./GroupSchemaBase");
const GroupSchemaBaseProperties_1 = require("./GroupSchemaBaseProperties");
const GroupSchemaCustom_1 = require("./GroupSchemaCustom");
const GroupSchemaDefinitions_1 = require("./GroupSchemaDefinitions");
const HardwareUserFactor_1 = require("./HardwareUserFactor");
const HardwareUserFactorAllOf_1 = require("./HardwareUserFactorAllOf");
const HardwareUserFactorProfile_1 = require("./HardwareUserFactorProfile");
const HostedPage_1 = require("./HostedPage");
const HrefObject_1 = require("./HrefObject");
const HrefObjectHints_1 = require("./HrefObjectHints");
const IdentityProvider_1 = require("./IdentityProvider");
const IdentityProviderApplicationUser_1 = require("./IdentityProviderApplicationUser");
const IdentityProviderCredentials_1 = require("./IdentityProviderCredentials");
const IdentityProviderCredentialsClient_1 = require("./IdentityProviderCredentialsClient");
const IdentityProviderCredentialsSigning_1 = require("./IdentityProviderCredentialsSigning");
const IdentityProviderCredentialsTrust_1 = require("./IdentityProviderCredentialsTrust");
const IdentityProviderPolicy_1 = require("./IdentityProviderPolicy");
const IdentityProviderPolicyAllOf_1 = require("./IdentityProviderPolicyAllOf");
const IdentityProviderPolicyRuleCondition_1 = require("./IdentityProviderPolicyRuleCondition");
const IdpPolicyRuleAction_1 = require("./IdpPolicyRuleAction");
const IdpPolicyRuleActionProvider_1 = require("./IdpPolicyRuleActionProvider");
const ImageUploadResponse_1 = require("./ImageUploadResponse");
const InactivityPolicyRuleCondition_1 = require("./InactivityPolicyRuleCondition");
const InlineHook_1 = require("./InlineHook");
const InlineHookChannel_1 = require("./InlineHookChannel");
const InlineHookChannelConfig_1 = require("./InlineHookChannelConfig");
const InlineHookChannelConfigAuthScheme_1 = require("./InlineHookChannelConfigAuthScheme");
const InlineHookChannelConfigHeaders_1 = require("./InlineHookChannelConfigHeaders");
const InlineHookResponse_1 = require("./InlineHookResponse");
const InlineHookResponseCommandValue_1 = require("./InlineHookResponseCommandValue");
const InlineHookResponseCommands_1 = require("./InlineHookResponseCommands");
const JsonWebKey_1 = require("./JsonWebKey");
const JwkUse_1 = require("./JwkUse");
const KnowledgeConstraint_1 = require("./KnowledgeConstraint");
const LifecycleCreateSettingObject_1 = require("./LifecycleCreateSettingObject");
const LifecycleDeactivateSettingObject_1 = require("./LifecycleDeactivateSettingObject");
const LifecycleExpirationPolicyRuleCondition_1 = require("./LifecycleExpirationPolicyRuleCondition");
const LinkedObject_1 = require("./LinkedObject");
const LinkedObjectDetails_1 = require("./LinkedObjectDetails");
const LogActor_1 = require("./LogActor");
const LogAuthenticationContext_1 = require("./LogAuthenticationContext");
const LogClient_1 = require("./LogClient");
const LogDebugContext_1 = require("./LogDebugContext");
const LogEvent_1 = require("./LogEvent");
const LogGeographicalContext_1 = require("./LogGeographicalContext");
const LogGeolocation_1 = require("./LogGeolocation");
const LogIpAddress_1 = require("./LogIpAddress");
const LogIssuer_1 = require("./LogIssuer");
const LogOutcome_1 = require("./LogOutcome");
const LogRequest_1 = require("./LogRequest");
const LogSecurityContext_1 = require("./LogSecurityContext");
const LogTarget_1 = require("./LogTarget");
const LogTransaction_1 = require("./LogTransaction");
const LogUserAgent_1 = require("./LogUserAgent");
const MDMEnrollmentPolicyRuleCondition_1 = require("./MDMEnrollmentPolicyRuleCondition");
const ModelError_1 = require("./ModelError");
const NetworkZone_1 = require("./NetworkZone");
const NetworkZoneAddress_1 = require("./NetworkZoneAddress");
const NetworkZoneLocation_1 = require("./NetworkZoneLocation");
const OAuth2Actor_1 = require("./OAuth2Actor");
const OAuth2Claim_1 = require("./OAuth2Claim");
const OAuth2ClaimConditions_1 = require("./OAuth2ClaimConditions");
const OAuth2Client_1 = require("./OAuth2Client");
const OAuth2RefreshToken_1 = require("./OAuth2RefreshToken");
const OAuth2Scope_1 = require("./OAuth2Scope");
const OAuth2ScopeConsentGrant_1 = require("./OAuth2ScopeConsentGrant");
const OAuth2ScopesMediationPolicyRuleCondition_1 = require("./OAuth2ScopesMediationPolicyRuleCondition");
const OAuth2Token_1 = require("./OAuth2Token");
const OAuthApplicationCredentials_1 = require("./OAuthApplicationCredentials");
const OAuthApplicationCredentialsAllOf_1 = require("./OAuthApplicationCredentialsAllOf");
const OktaSignOnPolicy_1 = require("./OktaSignOnPolicy");
const OktaSignOnPolicyAllOf_1 = require("./OktaSignOnPolicyAllOf");
const OktaSignOnPolicyConditions_1 = require("./OktaSignOnPolicyConditions");
const OktaSignOnPolicyConditionsAllOf_1 = require("./OktaSignOnPolicyConditionsAllOf");
const OktaSignOnPolicyRule_1 = require("./OktaSignOnPolicyRule");
const OktaSignOnPolicyRuleActions_1 = require("./OktaSignOnPolicyRuleActions");
const OktaSignOnPolicyRuleActionsAllOf_1 = require("./OktaSignOnPolicyRuleActionsAllOf");
const OktaSignOnPolicyRuleAllOf_1 = require("./OktaSignOnPolicyRuleAllOf");
const OktaSignOnPolicyRuleConditions_1 = require("./OktaSignOnPolicyRuleConditions");
const OktaSignOnPolicyRuleConditionsAllOf_1 = require("./OktaSignOnPolicyRuleConditionsAllOf");
const OktaSignOnPolicyRuleSignonActions_1 = require("./OktaSignOnPolicyRuleSignonActions");
const OktaSignOnPolicyRuleSignonSessionActions_1 = require("./OktaSignOnPolicyRuleSignonSessionActions");
const OpenIdConnectApplication_1 = require("./OpenIdConnectApplication");
const OpenIdConnectApplicationAllOf_1 = require("./OpenIdConnectApplicationAllOf");
const OpenIdConnectApplicationIdpInitiatedLogin_1 = require("./OpenIdConnectApplicationIdpInitiatedLogin");
const OpenIdConnectApplicationSettings_1 = require("./OpenIdConnectApplicationSettings");
const OpenIdConnectApplicationSettingsAllOf_1 = require("./OpenIdConnectApplicationSettingsAllOf");
const OpenIdConnectApplicationSettingsClient_1 = require("./OpenIdConnectApplicationSettingsClient");
const OpenIdConnectApplicationSettingsClientKeys_1 = require("./OpenIdConnectApplicationSettingsClientKeys");
const OpenIdConnectApplicationSettingsRefreshToken_1 = require("./OpenIdConnectApplicationSettingsRefreshToken");
const OrgContactTypeObj_1 = require("./OrgContactTypeObj");
const OrgContactUser_1 = require("./OrgContactUser");
const OrgOktaCommunicationSetting_1 = require("./OrgOktaCommunicationSetting");
const OrgOktaSupportSettingsObj_1 = require("./OrgOktaSupportSettingsObj");
const OrgPreferences_1 = require("./OrgPreferences");
const OrgSetting_1 = require("./OrgSetting");
const PasswordCredential_1 = require("./PasswordCredential");
const PasswordCredentialHash_1 = require("./PasswordCredentialHash");
const PasswordCredentialHook_1 = require("./PasswordCredentialHook");
const PasswordDictionary_1 = require("./PasswordDictionary");
const PasswordDictionaryCommon_1 = require("./PasswordDictionaryCommon");
const PasswordExpirationPolicyRuleCondition_1 = require("./PasswordExpirationPolicyRuleCondition");
const PasswordPolicy_1 = require("./PasswordPolicy");
const PasswordPolicyAllOf_1 = require("./PasswordPolicyAllOf");
const PasswordPolicyAuthenticationProviderCondition_1 = require("./PasswordPolicyAuthenticationProviderCondition");
const PasswordPolicyConditions_1 = require("./PasswordPolicyConditions");
const PasswordPolicyConditionsAllOf_1 = require("./PasswordPolicyConditionsAllOf");
const PasswordPolicyDelegationSettings_1 = require("./PasswordPolicyDelegationSettings");
const PasswordPolicyDelegationSettingsOptions_1 = require("./PasswordPolicyDelegationSettingsOptions");
const PasswordPolicyPasswordSettings_1 = require("./PasswordPolicyPasswordSettings");
const PasswordPolicyPasswordSettingsAge_1 = require("./PasswordPolicyPasswordSettingsAge");
const PasswordPolicyPasswordSettingsComplexity_1 = require("./PasswordPolicyPasswordSettingsComplexity");
const PasswordPolicyPasswordSettingsLockout_1 = require("./PasswordPolicyPasswordSettingsLockout");
const PasswordPolicyRecoveryEmail_1 = require("./PasswordPolicyRecoveryEmail");
const PasswordPolicyRecoveryEmailProperties_1 = require("./PasswordPolicyRecoveryEmailProperties");
const PasswordPolicyRecoveryEmailRecoveryToken_1 = require("./PasswordPolicyRecoveryEmailRecoveryToken");
const PasswordPolicyRecoveryFactorSettings_1 = require("./PasswordPolicyRecoveryFactorSettings");
const PasswordPolicyRecoveryFactors_1 = require("./PasswordPolicyRecoveryFactors");
const PasswordPolicyRecoveryQuestion_1 = require("./PasswordPolicyRecoveryQuestion");
const PasswordPolicyRecoveryQuestionComplexity_1 = require("./PasswordPolicyRecoveryQuestionComplexity");
const PasswordPolicyRecoveryQuestionProperties_1 = require("./PasswordPolicyRecoveryQuestionProperties");
const PasswordPolicyRecoverySettings_1 = require("./PasswordPolicyRecoverySettings");
const PasswordPolicyRule_1 = require("./PasswordPolicyRule");
const PasswordPolicyRuleAction_1 = require("./PasswordPolicyRuleAction");
const PasswordPolicyRuleActions_1 = require("./PasswordPolicyRuleActions");
const PasswordPolicyRuleActionsAllOf_1 = require("./PasswordPolicyRuleActionsAllOf");
const PasswordPolicyRuleAllOf_1 = require("./PasswordPolicyRuleAllOf");
const PasswordPolicyRuleConditions_1 = require("./PasswordPolicyRuleConditions");
const PasswordPolicyRuleConditionsAllOf_1 = require("./PasswordPolicyRuleConditionsAllOf");
const PasswordPolicySettings_1 = require("./PasswordPolicySettings");
const PasswordSettingObject_1 = require("./PasswordSettingObject");
const PlatformConditionEvaluatorPlatform_1 = require("./PlatformConditionEvaluatorPlatform");
const PlatformConditionEvaluatorPlatformOperatingSystem_1 = require("./PlatformConditionEvaluatorPlatformOperatingSystem");
const PlatformConditionEvaluatorPlatformOperatingSystemVersion_1 = require("./PlatformConditionEvaluatorPlatformOperatingSystemVersion");
const PlatformPolicyRuleCondition_1 = require("./PlatformPolicyRuleCondition");
const Policy_1 = require("./Policy");
const PolicyAccountLink_1 = require("./PolicyAccountLink");
const PolicyAccountLinkFilter_1 = require("./PolicyAccountLinkFilter");
const PolicyAccountLinkFilterGroups_1 = require("./PolicyAccountLinkFilterGroups");
const PolicyNetworkCondition_1 = require("./PolicyNetworkCondition");
const PolicyPeopleCondition_1 = require("./PolicyPeopleCondition");
const PolicyRule_1 = require("./PolicyRule");
const PolicyRuleActions_1 = require("./PolicyRuleActions");
const PolicyRuleActionsEnroll_1 = require("./PolicyRuleActionsEnroll");
const PolicyRuleAuthContextCondition_1 = require("./PolicyRuleAuthContextCondition");
const PolicyRuleConditions_1 = require("./PolicyRuleConditions");
const PolicySubject_1 = require("./PolicySubject");
const PolicyUserNameTemplate_1 = require("./PolicyUserNameTemplate");
const PossessionConstraint_1 = require("./PossessionConstraint");
const PossessionConstraintAllOf_1 = require("./PossessionConstraintAllOf");
const PreRegistrationInlineHook_1 = require("./PreRegistrationInlineHook");
const PrincipalRateLimitEntity_1 = require("./PrincipalRateLimitEntity");
const ProfileEnrollmentPolicy_1 = require("./ProfileEnrollmentPolicy");
const ProfileEnrollmentPolicyRule_1 = require("./ProfileEnrollmentPolicyRule");
const ProfileEnrollmentPolicyRuleAction_1 = require("./ProfileEnrollmentPolicyRuleAction");
const ProfileEnrollmentPolicyRuleActions_1 = require("./ProfileEnrollmentPolicyRuleActions");
const ProfileEnrollmentPolicyRuleActionsAllOf_1 = require("./ProfileEnrollmentPolicyRuleActionsAllOf");
const ProfileEnrollmentPolicyRuleActivationRequirement_1 = require("./ProfileEnrollmentPolicyRuleActivationRequirement");
const ProfileEnrollmentPolicyRuleAllOf_1 = require("./ProfileEnrollmentPolicyRuleAllOf");
const ProfileEnrollmentPolicyRuleProfileAttribute_1 = require("./ProfileEnrollmentPolicyRuleProfileAttribute");
const ProfileMapping_1 = require("./ProfileMapping");
const ProfileMappingProperty_1 = require("./ProfileMappingProperty");
const ProfileMappingSource_1 = require("./ProfileMappingSource");
const ProfileSettingObject_1 = require("./ProfileSettingObject");
const Protocol_1 = require("./Protocol");
const ProtocolAlgorithmType_1 = require("./ProtocolAlgorithmType");
const ProtocolAlgorithmTypeSignature_1 = require("./ProtocolAlgorithmTypeSignature");
const ProtocolAlgorithms_1 = require("./ProtocolAlgorithms");
const ProtocolEndpoint_1 = require("./ProtocolEndpoint");
const ProtocolEndpoints_1 = require("./ProtocolEndpoints");
const ProtocolRelayState_1 = require("./ProtocolRelayState");
const ProtocolSettings_1 = require("./ProtocolSettings");
const Provisioning_1 = require("./Provisioning");
const ProvisioningConditions_1 = require("./ProvisioningConditions");
const ProvisioningConnection_1 = require("./ProvisioningConnection");
const ProvisioningConnectionProfile_1 = require("./ProvisioningConnectionProfile");
const ProvisioningConnectionRequest_1 = require("./ProvisioningConnectionRequest");
const ProvisioningDeprovisionedCondition_1 = require("./ProvisioningDeprovisionedCondition");
const ProvisioningGroups_1 = require("./ProvisioningGroups");
const ProvisioningSuspendedCondition_1 = require("./ProvisioningSuspendedCondition");
const PushUserFactor_1 = require("./PushUserFactor");
const PushUserFactorAllOf_1 = require("./PushUserFactorAllOf");
const PushUserFactorProfile_1 = require("./PushUserFactorProfile");
const RecoveryQuestionCredential_1 = require("./RecoveryQuestionCredential");
const ResetPasswordToken_1 = require("./ResetPasswordToken");
const RiskPolicyRuleCondition_1 = require("./RiskPolicyRuleCondition");
const RiskScorePolicyRuleCondition_1 = require("./RiskScorePolicyRuleCondition");
const Role_1 = require("./Role");
const SamlApplication_1 = require("./SamlApplication");
const SamlApplicationAllOf_1 = require("./SamlApplicationAllOf");
const SamlApplicationSettings_1 = require("./SamlApplicationSettings");
const SamlApplicationSettingsAllOf_1 = require("./SamlApplicationSettingsAllOf");
const SamlApplicationSettingsApplication_1 = require("./SamlApplicationSettingsApplication");
const SamlApplicationSettingsSignOn_1 = require("./SamlApplicationSettingsSignOn");
const SamlAttributeStatement_1 = require("./SamlAttributeStatement");
const ScheduledUserLifecycleAction_1 = require("./ScheduledUserLifecycleAction");
const SchemeApplicationCredentials_1 = require("./SchemeApplicationCredentials");
const SchemeApplicationCredentialsAllOf_1 = require("./SchemeApplicationCredentialsAllOf");
const SecurePasswordStoreApplication_1 = require("./SecurePasswordStoreApplication");
const SecurePasswordStoreApplicationAllOf_1 = require("./SecurePasswordStoreApplicationAllOf");
const SecurePasswordStoreApplicationSettings_1 = require("./SecurePasswordStoreApplicationSettings");
const SecurePasswordStoreApplicationSettingsAllOf_1 = require("./SecurePasswordStoreApplicationSettingsAllOf");
const SecurePasswordStoreApplicationSettingsApplication_1 = require("./SecurePasswordStoreApplicationSettingsApplication");
const SecurityQuestion_1 = require("./SecurityQuestion");
const SecurityQuestionUserFactor_1 = require("./SecurityQuestionUserFactor");
const SecurityQuestionUserFactorAllOf_1 = require("./SecurityQuestionUserFactorAllOf");
const SecurityQuestionUserFactorProfile_1 = require("./SecurityQuestionUserFactorProfile");
const Session_1 = require("./Session");
const SessionIdentityProvider_1 = require("./SessionIdentityProvider");
const SignInPage_1 = require("./SignInPage");
const SignInPageAllOf_1 = require("./SignInPageAllOf");
const SignInPageAllOfDefaultApp_1 = require("./SignInPageAllOfDefaultApp");
const SignInPageAllOfWidgetCustomizations_1 = require("./SignInPageAllOfWidgetCustomizations");
const SignOnInlineHook_1 = require("./SignOnInlineHook");
const SingleLogout_1 = require("./SingleLogout");
const SmsTemplate_1 = require("./SmsTemplate");
const SmsUserFactor_1 = require("./SmsUserFactor");
const SmsUserFactorAllOf_1 = require("./SmsUserFactorAllOf");
const SmsUserFactorProfile_1 = require("./SmsUserFactorProfile");
const SocialAuthToken_1 = require("./SocialAuthToken");
const SpCertificate_1 = require("./SpCertificate");
const Subscription_1 = require("./Subscription");
const SwaApplicationSettings_1 = require("./SwaApplicationSettings");
const SwaApplicationSettingsAllOf_1 = require("./SwaApplicationSettingsAllOf");
const SwaApplicationSettingsApplication_1 = require("./SwaApplicationSettingsApplication");
const TempPassword_1 = require("./TempPassword");
const Theme_1 = require("./Theme");
const ThemeResponse_1 = require("./ThemeResponse");
const ThreatInsightConfiguration_1 = require("./ThreatInsightConfiguration");
const TokenAuthorizationServerPolicyRuleAction_1 = require("./TokenAuthorizationServerPolicyRuleAction");
const TokenAuthorizationServerPolicyRuleActionInlineHook_1 = require("./TokenAuthorizationServerPolicyRuleActionInlineHook");
const TokenUserFactor_1 = require("./TokenUserFactor");
const TokenUserFactorAllOf_1 = require("./TokenUserFactorAllOf");
const TokenUserFactorProfile_1 = require("./TokenUserFactorProfile");
const TotpUserFactor_1 = require("./TotpUserFactor");
const TotpUserFactorAllOf_1 = require("./TotpUserFactorAllOf");
const TotpUserFactorProfile_1 = require("./TotpUserFactorProfile");
const TrustedOrigin_1 = require("./TrustedOrigin");
const TrustedOriginScope_1 = require("./TrustedOriginScope");
const U2fUserFactor_1 = require("./U2fUserFactor");
const U2fUserFactorAllOf_1 = require("./U2fUserFactorAllOf");
const U2fUserFactorProfile_1 = require("./U2fUserFactorProfile");
const UpdateUserRequest_1 = require("./UpdateUserRequest");
const User_1 = require("./User");
const UserActivationToken_1 = require("./UserActivationToken");
const UserCondition_1 = require("./UserCondition");
const UserCredentials_1 = require("./UserCredentials");
const UserFactor_1 = require("./UserFactor");
const UserIdString_1 = require("./UserIdString");
const UserIdentifierConditionEvaluatorPattern_1 = require("./UserIdentifierConditionEvaluatorPattern");
const UserIdentifierPolicyRuleCondition_1 = require("./UserIdentifierPolicyRuleCondition");
const UserIdentityProviderLinkRequest_1 = require("./UserIdentityProviderLinkRequest");
const UserLifecycleAttributePolicyRuleCondition_1 = require("./UserLifecycleAttributePolicyRuleCondition");
const UserPolicyRuleCondition_1 = require("./UserPolicyRuleCondition");
const UserProfile_1 = require("./UserProfile");
const UserSchema_1 = require("./UserSchema");
const UserSchemaAttribute_1 = require("./UserSchemaAttribute");
const UserSchemaAttributeEnum_1 = require("./UserSchemaAttributeEnum");
const UserSchemaAttributeItems_1 = require("./UserSchemaAttributeItems");
const UserSchemaAttributeMaster_1 = require("./UserSchemaAttributeMaster");
const UserSchemaAttributeMasterPriority_1 = require("./UserSchemaAttributeMasterPriority");
const UserSchemaAttributePermission_1 = require("./UserSchemaAttributePermission");
const UserSchemaBase_1 = require("./UserSchemaBase");
const UserSchemaBaseProperties_1 = require("./UserSchemaBaseProperties");
const UserSchemaDefinitions_1 = require("./UserSchemaDefinitions");
const UserSchemaProperties_1 = require("./UserSchemaProperties");
const UserSchemaPropertiesProfile_1 = require("./UserSchemaPropertiesProfile");
const UserSchemaPropertiesProfileItem_1 = require("./UserSchemaPropertiesProfileItem");
const UserSchemaPublic_1 = require("./UserSchemaPublic");
const UserStatusPolicyRuleCondition_1 = require("./UserStatusPolicyRuleCondition");
const UserType_1 = require("./UserType");
const UserTypeCondition_1 = require("./UserTypeCondition");
const VerificationMethod_1 = require("./VerificationMethod");
const VerifyFactorRequest_1 = require("./VerifyFactorRequest");
const VerifyUserFactorResponse_1 = require("./VerifyUserFactorResponse");
const WebAuthnUserFactor_1 = require("./WebAuthnUserFactor");
const WebAuthnUserFactorAllOf_1 = require("./WebAuthnUserFactorAllOf");
const WebAuthnUserFactorProfile_1 = require("./WebAuthnUserFactorProfile");
const WebUserFactor_1 = require("./WebUserFactor");
const WebUserFactorAllOf_1 = require("./WebUserFactorAllOf");
const WebUserFactorProfile_1 = require("./WebUserFactorProfile");
const WsFederationApplication_1 = require("./WsFederationApplication");
const WsFederationApplicationAllOf_1 = require("./WsFederationApplicationAllOf");
const WsFederationApplicationSettings_1 = require("./WsFederationApplicationSettings");
const WsFederationApplicationSettingsAllOf_1 = require("./WsFederationApplicationSettingsAllOf");
const WsFederationApplicationSettingsApplication_1 = require("./WsFederationApplicationSettingsApplication");
/* tslint:disable:no-unused-variable */
let primitives = [
    'string',
    'boolean',
    'double',
    'integer',
    'long',
    'float',
    'number',
    'any'
];
const supportedMediaTypes = {
    'application/json': Infinity,
    'application/octet-stream': 0,
    'application/x-www-form-urlencoded': 0
};
let enumsMap = new Set([
    'AgentType',
    'AgentUpdateInstanceStatus',
    'AgentUpdateJobStatus',
    'AllowedForEnum',
    'AppAndInstanceType',
    'ApplicationCredentialsScheme',
    'ApplicationCredentialsSigningUse',
    'ApplicationLifecycleStatus',
    'ApplicationSignOnMode',
    'AuthenticationProviderType',
    'AuthenticatorStatus',
    'AuthenticatorType',
    'AuthorizationServerCredentialsRotationMode',
    'AuthorizationServerCredentialsUse',
    'BehaviorRuleType',
    'CAPTCHAType',
    'CatalogApplicationStatus',
    'ChangeEnum',
    'DNSRecordType',
    'DevicePolicyMDMFramework',
    'DevicePolicyPlatformType',
    'DevicePolicyTrustLevel',
    'DomainCertificateSourceType',
    'DomainCertificateType',
    'DomainValidationStatus',
    'EmailSettingsRecipientsEnum',
    'EmailTemplateTouchPointVariant',
    'EnabledStatus',
    'EndUserDashboardTouchPointVariant',
    'ErrorPageTouchPointVariant',
    'EventHookChannelConfigAuthSchemeType',
    'EventHookChannelType',
    'EventHookVerificationStatus',
    'EventSubscriptionType',
    'FactorProvider',
    'FactorResultType',
    'FactorStatus',
    'FactorType',
    'FeatureStageState',
    'FeatureStageValue',
    'FeatureType',
    'FipsEnum',
    'GrantOrTokenStatus',
    'GroupRuleStatus',
    'GroupType',
    'HostedPageType',
    'HttpMethod',
    'IdentityProviderCredentialsTrustRevocation',
    'IdentityProviderPolicyProvider',
    'IframeEmbedScopeAllowedApps',
    'InlineHookChannelType',
    'InlineHookStatus',
    'InlineHookType',
    'IssuerMode',
    'JwkUseType',
    'LifecycleStatus',
    'LinkedObjectDetailsType',
    'LocationGranularity',
    'LogAuthenticationProvider',
    'LogCredentialProvider',
    'LogCredentialType',
    'LogSeverity',
    'MDMEnrollmentPolicyEnrollment',
    'NetworkZoneAddressType',
    'NetworkZoneStatus',
    'NetworkZoneType',
    'NetworkZoneUsage',
    'NotificationType',
    'OAuth2ClaimGroupFilterType',
    'OAuth2ClaimType',
    'OAuth2ClaimValueType',
    'OAuth2ScopeConsentGrantSource',
    'OAuth2ScopeConsentType',
    'OAuth2ScopeMetadataPublish',
    'OAuthEndpointAuthenticationMethod',
    'OAuthGrantType',
    'OAuthResponseType',
    'OktaSignOnPolicyFactorPromptMode',
    'OpenIdConnectApplicationConsentMethod',
    'OpenIdConnectApplicationIssuerMode',
    'OpenIdConnectApplicationType',
    'OpenIdConnectRefreshTokenRotationType',
    'OperationalStatus',
    'OrgContactType',
    'OrgOktaSupportSetting',
    'PasswordCredentialHashAlgorithm',
    'PasswordPolicyAuthenticationProviderType',
    'PlatformConditionOperatingSystemVersionMatchType',
    'PolicyAccess',
    'PolicyAccountLinkAction',
    'PolicyNetworkConnection',
    'PolicyPlatformOperatingSystemType',
    'PolicyPlatformType',
    'PolicyRuleActionsEnrollSelf',
    'PolicyRuleAuthContextType',
    'PolicyRuleType',
    'PolicySubjectMatchType',
    'PolicyType',
    'PolicyUserStatus',
    'PrincipalType',
    'ProfileMappingPropertyPushStatus',
    'ProtocolAlgorithmTypeSignatureScope',
    'ProtocolEndpointBinding',
    'ProtocolEndpointType',
    'ProtocolRelayStateFormat',
    'ProtocolType',
    'ProvisioningAction',
    'ProvisioningConnectionAuthScheme',
    'ProvisioningConnectionStatus',
    'ProvisioningDeprovisionedAction',
    'ProvisioningGroupsAction',
    'ProvisioningSuspendedAction',
    'ReleaseChannel',
    'RequiredEnum',
    'RoleAssignmentType',
    'RoleType',
    'SeedEnum',
    'SessionAuthenticationMethod',
    'SessionIdentityProviderType',
    'SessionStatus',
    'SignInPageTouchPointVariant',
    'SmsTemplateType',
    'SubscriptionStatus',
    'TrustedOriginScopeType',
    'UserIdentifierMatchType',
    'UserIdentifierType',
    'UserNextLogin',
    'UserSchemaAttributeMasterType',
    'UserSchemaAttributeScope',
    'UserSchemaAttributeType',
    'UserSchemaAttributeUnion',
    'UserStatus',
    'UserVerificationEnum',
    'VerifyUserFactorResult',
]);
let typeMap = {
    'AccessPolicy': AccessPolicy_1.AccessPolicy,
    'AccessPolicyAllOf': AccessPolicyAllOf_1.AccessPolicyAllOf,
    'AccessPolicyConstraint': AccessPolicyConstraint_1.AccessPolicyConstraint,
    'AccessPolicyConstraints': AccessPolicyConstraints_1.AccessPolicyConstraints,
    'AccessPolicyRule': AccessPolicyRule_1.AccessPolicyRule,
    'AccessPolicyRuleActions': AccessPolicyRuleActions_1.AccessPolicyRuleActions,
    'AccessPolicyRuleActionsAllOf': AccessPolicyRuleActionsAllOf_1.AccessPolicyRuleActionsAllOf,
    'AccessPolicyRuleAllOf': AccessPolicyRuleAllOf_1.AccessPolicyRuleAllOf,
    'AccessPolicyRuleApplicationSignOn': AccessPolicyRuleApplicationSignOn_1.AccessPolicyRuleApplicationSignOn,
    'AccessPolicyRuleConditions': AccessPolicyRuleConditions_1.AccessPolicyRuleConditions,
    'AccessPolicyRuleConditionsAllOf': AccessPolicyRuleConditionsAllOf_1.AccessPolicyRuleConditionsAllOf,
    'AccessPolicyRuleCustomCondition': AccessPolicyRuleCustomCondition_1.AccessPolicyRuleCustomCondition,
    'AcsEndpoint': AcsEndpoint_1.AcsEndpoint,
    'ActivateFactorRequest': ActivateFactorRequest_1.ActivateFactorRequest,
    'Agent': Agent_1.Agent,
    'AgentPool': AgentPool_1.AgentPool,
    'AgentPoolUpdate': AgentPoolUpdate_1.AgentPoolUpdate,
    'AgentPoolUpdateSetting': AgentPoolUpdateSetting_1.AgentPoolUpdateSetting,
    'ApiToken': ApiToken_1.ApiToken,
    'ApiTokenLink': ApiTokenLink_1.ApiTokenLink,
    'AppAndInstanceConditionEvaluatorAppOrInstance': AppAndInstanceConditionEvaluatorAppOrInstance_1.AppAndInstanceConditionEvaluatorAppOrInstance,
    'AppAndInstancePolicyRuleCondition': AppAndInstancePolicyRuleCondition_1.AppAndInstancePolicyRuleCondition,
    'AppInstancePolicyRuleCondition': AppInstancePolicyRuleCondition_1.AppInstancePolicyRuleCondition,
    'AppLink': AppLink_1.AppLink,
    'AppUser': AppUser_1.AppUser,
    'AppUserCredentials': AppUserCredentials_1.AppUserCredentials,
    'AppUserPasswordCredential': AppUserPasswordCredential_1.AppUserPasswordCredential,
    'Application': Application_1.Application,
    'ApplicationAccessibility': ApplicationAccessibility_1.ApplicationAccessibility,
    'ApplicationCredentials': ApplicationCredentials_1.ApplicationCredentials,
    'ApplicationCredentialsOAuthClient': ApplicationCredentialsOAuthClient_1.ApplicationCredentialsOAuthClient,
    'ApplicationCredentialsSigning': ApplicationCredentialsSigning_1.ApplicationCredentialsSigning,
    'ApplicationCredentialsUsernameTemplate': ApplicationCredentialsUsernameTemplate_1.ApplicationCredentialsUsernameTemplate,
    'ApplicationFeature': ApplicationFeature_1.ApplicationFeature,
    'ApplicationGroupAssignment': ApplicationGroupAssignment_1.ApplicationGroupAssignment,
    'ApplicationLicensing': ApplicationLicensing_1.ApplicationLicensing,
    'ApplicationSettings': ApplicationSettings_1.ApplicationSettings,
    'ApplicationSettingsNotes': ApplicationSettingsNotes_1.ApplicationSettingsNotes,
    'ApplicationSettingsNotifications': ApplicationSettingsNotifications_1.ApplicationSettingsNotifications,
    'ApplicationSettingsNotificationsVpn': ApplicationSettingsNotificationsVpn_1.ApplicationSettingsNotificationsVpn,
    'ApplicationSettingsNotificationsVpnNetwork': ApplicationSettingsNotificationsVpnNetwork_1.ApplicationSettingsNotificationsVpnNetwork,
    'ApplicationVisibility': ApplicationVisibility_1.ApplicationVisibility,
    'ApplicationVisibilityHide': ApplicationVisibilityHide_1.ApplicationVisibilityHide,
    'AssignRoleRequest': AssignRoleRequest_1.AssignRoleRequest,
    'AuthenticationProvider': AuthenticationProvider_1.AuthenticationProvider,
    'Authenticator': Authenticator_1.Authenticator,
    'AuthenticatorProvider': AuthenticatorProvider_1.AuthenticatorProvider,
    'AuthenticatorProviderConfiguration': AuthenticatorProviderConfiguration_1.AuthenticatorProviderConfiguration,
    'AuthenticatorProviderConfigurationUserNameTemplate': AuthenticatorProviderConfigurationUserNameTemplate_1.AuthenticatorProviderConfigurationUserNameTemplate,
    'AuthenticatorSettings': AuthenticatorSettings_1.AuthenticatorSettings,
    'AuthorizationServer': AuthorizationServer_1.AuthorizationServer,
    'AuthorizationServerCredentials': AuthorizationServerCredentials_1.AuthorizationServerCredentials,
    'AuthorizationServerCredentialsSigningConfig': AuthorizationServerCredentialsSigningConfig_1.AuthorizationServerCredentialsSigningConfig,
    'AuthorizationServerPolicy': AuthorizationServerPolicy_1.AuthorizationServerPolicy,
    'AuthorizationServerPolicyRule': AuthorizationServerPolicyRule_1.AuthorizationServerPolicyRule,
    'AuthorizationServerPolicyRuleActions': AuthorizationServerPolicyRuleActions_1.AuthorizationServerPolicyRuleActions,
    'AuthorizationServerPolicyRuleActionsAllOf': AuthorizationServerPolicyRuleActionsAllOf_1.AuthorizationServerPolicyRuleActionsAllOf,
    'AuthorizationServerPolicyRuleAllOf': AuthorizationServerPolicyRuleAllOf_1.AuthorizationServerPolicyRuleAllOf,
    'AuthorizationServerPolicyRuleConditions': AuthorizationServerPolicyRuleConditions_1.AuthorizationServerPolicyRuleConditions,
    'AuthorizationServerPolicyRuleConditionsAllOf': AuthorizationServerPolicyRuleConditionsAllOf_1.AuthorizationServerPolicyRuleConditionsAllOf,
    'AutoLoginApplication': AutoLoginApplication_1.AutoLoginApplication,
    'AutoLoginApplicationAllOf': AutoLoginApplicationAllOf_1.AutoLoginApplicationAllOf,
    'AutoLoginApplicationSettings': AutoLoginApplicationSettings_1.AutoLoginApplicationSettings,
    'AutoLoginApplicationSettingsAllOf': AutoLoginApplicationSettingsAllOf_1.AutoLoginApplicationSettingsAllOf,
    'AutoLoginApplicationSettingsSignOn': AutoLoginApplicationSettingsSignOn_1.AutoLoginApplicationSettingsSignOn,
    'AutoUpdateSchedule': AutoUpdateSchedule_1.AutoUpdateSchedule,
    'BasicApplicationSettings': BasicApplicationSettings_1.BasicApplicationSettings,
    'BasicApplicationSettingsAllOf': BasicApplicationSettingsAllOf_1.BasicApplicationSettingsAllOf,
    'BasicApplicationSettingsApplication': BasicApplicationSettingsApplication_1.BasicApplicationSettingsApplication,
    'BasicAuthApplication': BasicAuthApplication_1.BasicAuthApplication,
    'BasicAuthApplicationAllOf': BasicAuthApplicationAllOf_1.BasicAuthApplicationAllOf,
    'BeforeScheduledActionPolicyRuleCondition': BeforeScheduledActionPolicyRuleCondition_1.BeforeScheduledActionPolicyRuleCondition,
    'BehaviorDetectionRuleSettingsBasedOnDeviceVelocityInKilometersPerHour': BehaviorDetectionRuleSettingsBasedOnDeviceVelocityInKilometersPerHour_1.BehaviorDetectionRuleSettingsBasedOnDeviceVelocityInKilometersPerHour,
    'BehaviorDetectionRuleSettingsBasedOnEventHistory': BehaviorDetectionRuleSettingsBasedOnEventHistory_1.BehaviorDetectionRuleSettingsBasedOnEventHistory,
    'BehaviorRule': BehaviorRule_1.BehaviorRule,
    'BehaviorRuleAnomalousDevice': BehaviorRuleAnomalousDevice_1.BehaviorRuleAnomalousDevice,
    'BehaviorRuleAnomalousDeviceAllOf': BehaviorRuleAnomalousDeviceAllOf_1.BehaviorRuleAnomalousDeviceAllOf,
    'BehaviorRuleAnomalousIP': BehaviorRuleAnomalousIP_1.BehaviorRuleAnomalousIP,
    'BehaviorRuleAnomalousIPAllOf': BehaviorRuleAnomalousIPAllOf_1.BehaviorRuleAnomalousIPAllOf,
    'BehaviorRuleAnomalousLocation': BehaviorRuleAnomalousLocation_1.BehaviorRuleAnomalousLocation,
    'BehaviorRuleAnomalousLocationAllOf': BehaviorRuleAnomalousLocationAllOf_1.BehaviorRuleAnomalousLocationAllOf,
    'BehaviorRuleSettingsAnomalousDevice': BehaviorRuleSettingsAnomalousDevice_1.BehaviorRuleSettingsAnomalousDevice,
    'BehaviorRuleSettingsAnomalousIP': BehaviorRuleSettingsAnomalousIP_1.BehaviorRuleSettingsAnomalousIP,
    'BehaviorRuleSettingsAnomalousIPAllOf': BehaviorRuleSettingsAnomalousIPAllOf_1.BehaviorRuleSettingsAnomalousIPAllOf,
    'BehaviorRuleSettingsAnomalousLocation': BehaviorRuleSettingsAnomalousLocation_1.BehaviorRuleSettingsAnomalousLocation,
    'BehaviorRuleSettingsAnomalousLocationAllOf': BehaviorRuleSettingsAnomalousLocationAllOf_1.BehaviorRuleSettingsAnomalousLocationAllOf,
    'BehaviorRuleSettingsHistoryBased': BehaviorRuleSettingsHistoryBased_1.BehaviorRuleSettingsHistoryBased,
    'BehaviorRuleSettingsVelocity': BehaviorRuleSettingsVelocity_1.BehaviorRuleSettingsVelocity,
    'BehaviorRuleVelocity': BehaviorRuleVelocity_1.BehaviorRuleVelocity,
    'BehaviorRuleVelocityAllOf': BehaviorRuleVelocityAllOf_1.BehaviorRuleVelocityAllOf,
    'BookmarkApplication': BookmarkApplication_1.BookmarkApplication,
    'BookmarkApplicationAllOf': BookmarkApplicationAllOf_1.BookmarkApplicationAllOf,
    'BookmarkApplicationSettings': BookmarkApplicationSettings_1.BookmarkApplicationSettings,
    'BookmarkApplicationSettingsAllOf': BookmarkApplicationSettingsAllOf_1.BookmarkApplicationSettingsAllOf,
    'BookmarkApplicationSettingsApplication': BookmarkApplicationSettingsApplication_1.BookmarkApplicationSettingsApplication,
    'BouncesRemoveListError': BouncesRemoveListError_1.BouncesRemoveListError,
    'BouncesRemoveListObj': BouncesRemoveListObj_1.BouncesRemoveListObj,
    'BouncesRemoveListResult': BouncesRemoveListResult_1.BouncesRemoveListResult,
    'Brand': Brand_1.Brand,
    'BrowserPluginApplication': BrowserPluginApplication_1.BrowserPluginApplication,
    'BrowserPluginApplicationAllOf': BrowserPluginApplicationAllOf_1.BrowserPluginApplicationAllOf,
    'CAPTCHAInstance': CAPTCHAInstance_1.CAPTCHAInstance,
    'CallUserFactor': CallUserFactor_1.CallUserFactor,
    'CallUserFactorAllOf': CallUserFactorAllOf_1.CallUserFactorAllOf,
    'CallUserFactorProfile': CallUserFactorProfile_1.CallUserFactorProfile,
    'CapabilitiesCreateObject': CapabilitiesCreateObject_1.CapabilitiesCreateObject,
    'CapabilitiesObject': CapabilitiesObject_1.CapabilitiesObject,
    'CapabilitiesUpdateObject': CapabilitiesUpdateObject_1.CapabilitiesUpdateObject,
    'CatalogApplication': CatalogApplication_1.CatalogApplication,
    'ChangePasswordRequest': ChangePasswordRequest_1.ChangePasswordRequest,
    'ChannelBinding': ChannelBinding_1.ChannelBinding,
    'ClientPolicyCondition': ClientPolicyCondition_1.ClientPolicyCondition,
    'Compliance': Compliance_1.Compliance,
    'ContextPolicyRuleCondition': ContextPolicyRuleCondition_1.ContextPolicyRuleCondition,
    'ContextPolicyRuleConditionAllOf': ContextPolicyRuleConditionAllOf_1.ContextPolicyRuleConditionAllOf,
    'CreateSessionRequest': CreateSessionRequest_1.CreateSessionRequest,
    'CreateUserRequest': CreateUserRequest_1.CreateUserRequest,
    'Csr': Csr_1.Csr,
    'CsrMetadata': CsrMetadata_1.CsrMetadata,
    'CsrMetadataSubject': CsrMetadataSubject_1.CsrMetadataSubject,
    'CsrMetadataSubjectAltNames': CsrMetadataSubjectAltNames_1.CsrMetadataSubjectAltNames,
    'CustomHotpUserFactor': CustomHotpUserFactor_1.CustomHotpUserFactor,
    'CustomHotpUserFactorAllOf': CustomHotpUserFactorAllOf_1.CustomHotpUserFactorAllOf,
    'CustomHotpUserFactorProfile': CustomHotpUserFactorProfile_1.CustomHotpUserFactorProfile,
    'CustomizablePage': CustomizablePage_1.CustomizablePage,
    'DNSRecord': DNSRecord_1.DNSRecord,
    'DeviceAccessPolicyRuleCondition': DeviceAccessPolicyRuleCondition_1.DeviceAccessPolicyRuleCondition,
    'DeviceAccessPolicyRuleConditionAllOf': DeviceAccessPolicyRuleConditionAllOf_1.DeviceAccessPolicyRuleConditionAllOf,
    'DevicePolicyRuleCondition': DevicePolicyRuleCondition_1.DevicePolicyRuleCondition,
    'DevicePolicyRuleConditionPlatform': DevicePolicyRuleConditionPlatform_1.DevicePolicyRuleConditionPlatform,
    'Domain': Domain_1.Domain,
    'DomainCertificate': DomainCertificate_1.DomainCertificate,
    'DomainCertificateMetadata': DomainCertificateMetadata_1.DomainCertificateMetadata,
    'DomainLinks': DomainLinks_1.DomainLinks,
    'DomainListResponse': DomainListResponse_1.DomainListResponse,
    'DomainResponse': DomainResponse_1.DomainResponse,
    'Duration': Duration_1.Duration,
    'EmailContent': EmailContent_1.EmailContent,
    'EmailCustomization': EmailCustomization_1.EmailCustomization,
    'EmailCustomizationAllOf': EmailCustomizationAllOf_1.EmailCustomizationAllOf,
    'EmailCustomizationAllOfLinks': EmailCustomizationAllOfLinks_1.EmailCustomizationAllOfLinks,
    'EmailDefaultContent': EmailDefaultContent_1.EmailDefaultContent,
    'EmailDefaultContentAllOf': EmailDefaultContentAllOf_1.EmailDefaultContentAllOf,
    'EmailDefaultContentAllOfLinks': EmailDefaultContentAllOfLinks_1.EmailDefaultContentAllOfLinks,
    'EmailPreview': EmailPreview_1.EmailPreview,
    'EmailPreviewLinks': EmailPreviewLinks_1.EmailPreviewLinks,
    'EmailSettings': EmailSettings_1.EmailSettings,
    'EmailTemplate': EmailTemplate_1.EmailTemplate,
    'EmailTemplateEmbedded': EmailTemplateEmbedded_1.EmailTemplateEmbedded,
    'EmailTemplateLinks': EmailTemplateLinks_1.EmailTemplateLinks,
    'EmailUserFactor': EmailUserFactor_1.EmailUserFactor,
    'EmailUserFactorAllOf': EmailUserFactorAllOf_1.EmailUserFactorAllOf,
    'EmailUserFactorProfile': EmailUserFactorProfile_1.EmailUserFactorProfile,
    'ErrorErrorCausesInner': ErrorErrorCausesInner_1.ErrorErrorCausesInner,
    'EventHook': EventHook_1.EventHook,
    'EventHookChannel': EventHookChannel_1.EventHookChannel,
    'EventHookChannelConfig': EventHookChannelConfig_1.EventHookChannelConfig,
    'EventHookChannelConfigAuthScheme': EventHookChannelConfigAuthScheme_1.EventHookChannelConfigAuthScheme,
    'EventHookChannelConfigHeader': EventHookChannelConfigHeader_1.EventHookChannelConfigHeader,
    'EventSubscriptions': EventSubscriptions_1.EventSubscriptions,
    'Feature': Feature_1.Feature,
    'FeatureStage': FeatureStage_1.FeatureStage,
    'ForgotPasswordResponse': ForgotPasswordResponse_1.ForgotPasswordResponse,
    'GrantTypePolicyRuleCondition': GrantTypePolicyRuleCondition_1.GrantTypePolicyRuleCondition,
    'Group': Group_1.Group,
    'GroupCondition': GroupCondition_1.GroupCondition,
    'GroupPolicyRuleCondition': GroupPolicyRuleCondition_1.GroupPolicyRuleCondition,
    'GroupProfile': GroupProfile_1.GroupProfile,
    'GroupRule': GroupRule_1.GroupRule,
    'GroupRuleAction': GroupRuleAction_1.GroupRuleAction,
    'GroupRuleConditions': GroupRuleConditions_1.GroupRuleConditions,
    'GroupRuleExpression': GroupRuleExpression_1.GroupRuleExpression,
    'GroupRuleGroupAssignment': GroupRuleGroupAssignment_1.GroupRuleGroupAssignment,
    'GroupRuleGroupCondition': GroupRuleGroupCondition_1.GroupRuleGroupCondition,
    'GroupRulePeopleCondition': GroupRulePeopleCondition_1.GroupRulePeopleCondition,
    'GroupRuleUserCondition': GroupRuleUserCondition_1.GroupRuleUserCondition,
    'GroupSchema': GroupSchema_1.GroupSchema,
    'GroupSchemaAttribute': GroupSchemaAttribute_1.GroupSchemaAttribute,
    'GroupSchemaBase': GroupSchemaBase_1.GroupSchemaBase,
    'GroupSchemaBaseProperties': GroupSchemaBaseProperties_1.GroupSchemaBaseProperties,
    'GroupSchemaCustom': GroupSchemaCustom_1.GroupSchemaCustom,
    'GroupSchemaDefinitions': GroupSchemaDefinitions_1.GroupSchemaDefinitions,
    'HardwareUserFactor': HardwareUserFactor_1.HardwareUserFactor,
    'HardwareUserFactorAllOf': HardwareUserFactorAllOf_1.HardwareUserFactorAllOf,
    'HardwareUserFactorProfile': HardwareUserFactorProfile_1.HardwareUserFactorProfile,
    'HostedPage': HostedPage_1.HostedPage,
    'HrefObject': HrefObject_1.HrefObject,
    'HrefObjectHints': HrefObjectHints_1.HrefObjectHints,
    'IdentityProvider': IdentityProvider_1.IdentityProvider,
    'IdentityProviderApplicationUser': IdentityProviderApplicationUser_1.IdentityProviderApplicationUser,
    'IdentityProviderCredentials': IdentityProviderCredentials_1.IdentityProviderCredentials,
    'IdentityProviderCredentialsClient': IdentityProviderCredentialsClient_1.IdentityProviderCredentialsClient,
    'IdentityProviderCredentialsSigning': IdentityProviderCredentialsSigning_1.IdentityProviderCredentialsSigning,
    'IdentityProviderCredentialsTrust': IdentityProviderCredentialsTrust_1.IdentityProviderCredentialsTrust,
    'IdentityProviderPolicy': IdentityProviderPolicy_1.IdentityProviderPolicy,
    'IdentityProviderPolicyAllOf': IdentityProviderPolicyAllOf_1.IdentityProviderPolicyAllOf,
    'IdentityProviderPolicyRuleCondition': IdentityProviderPolicyRuleCondition_1.IdentityProviderPolicyRuleCondition,
    'IdpPolicyRuleAction': IdpPolicyRuleAction_1.IdpPolicyRuleAction,
    'IdpPolicyRuleActionProvider': IdpPolicyRuleActionProvider_1.IdpPolicyRuleActionProvider,
    'ImageUploadResponse': ImageUploadResponse_1.ImageUploadResponse,
    'InactivityPolicyRuleCondition': InactivityPolicyRuleCondition_1.InactivityPolicyRuleCondition,
    'InlineHook': InlineHook_1.InlineHook,
    'InlineHookChannel': InlineHookChannel_1.InlineHookChannel,
    'InlineHookChannelConfig': InlineHookChannelConfig_1.InlineHookChannelConfig,
    'InlineHookChannelConfigAuthScheme': InlineHookChannelConfigAuthScheme_1.InlineHookChannelConfigAuthScheme,
    'InlineHookChannelConfigHeaders': InlineHookChannelConfigHeaders_1.InlineHookChannelConfigHeaders,
    'InlineHookResponse': InlineHookResponse_1.InlineHookResponse,
    'InlineHookResponseCommandValue': InlineHookResponseCommandValue_1.InlineHookResponseCommandValue,
    'InlineHookResponseCommands': InlineHookResponseCommands_1.InlineHookResponseCommands,
    'JsonWebKey': JsonWebKey_1.JsonWebKey,
    'JwkUse': JwkUse_1.JwkUse,
    'KnowledgeConstraint': KnowledgeConstraint_1.KnowledgeConstraint,
    'LifecycleCreateSettingObject': LifecycleCreateSettingObject_1.LifecycleCreateSettingObject,
    'LifecycleDeactivateSettingObject': LifecycleDeactivateSettingObject_1.LifecycleDeactivateSettingObject,
    'LifecycleExpirationPolicyRuleCondition': LifecycleExpirationPolicyRuleCondition_1.LifecycleExpirationPolicyRuleCondition,
    'LinkedObject': LinkedObject_1.LinkedObject,
    'LinkedObjectDetails': LinkedObjectDetails_1.LinkedObjectDetails,
    'LogActor': LogActor_1.LogActor,
    'LogAuthenticationContext': LogAuthenticationContext_1.LogAuthenticationContext,
    'LogClient': LogClient_1.LogClient,
    'LogDebugContext': LogDebugContext_1.LogDebugContext,
    'LogEvent': LogEvent_1.LogEvent,
    'LogGeographicalContext': LogGeographicalContext_1.LogGeographicalContext,
    'LogGeolocation': LogGeolocation_1.LogGeolocation,
    'LogIpAddress': LogIpAddress_1.LogIpAddress,
    'LogIssuer': LogIssuer_1.LogIssuer,
    'LogOutcome': LogOutcome_1.LogOutcome,
    'LogRequest': LogRequest_1.LogRequest,
    'LogSecurityContext': LogSecurityContext_1.LogSecurityContext,
    'LogTarget': LogTarget_1.LogTarget,
    'LogTransaction': LogTransaction_1.LogTransaction,
    'LogUserAgent': LogUserAgent_1.LogUserAgent,
    'MDMEnrollmentPolicyRuleCondition': MDMEnrollmentPolicyRuleCondition_1.MDMEnrollmentPolicyRuleCondition,
    'ModelError': ModelError_1.ModelError,
    'NetworkZone': NetworkZone_1.NetworkZone,
    'NetworkZoneAddress': NetworkZoneAddress_1.NetworkZoneAddress,
    'NetworkZoneLocation': NetworkZoneLocation_1.NetworkZoneLocation,
    'OAuth2Actor': OAuth2Actor_1.OAuth2Actor,
    'OAuth2Claim': OAuth2Claim_1.OAuth2Claim,
    'OAuth2ClaimConditions': OAuth2ClaimConditions_1.OAuth2ClaimConditions,
    'OAuth2Client': OAuth2Client_1.OAuth2Client,
    'OAuth2RefreshToken': OAuth2RefreshToken_1.OAuth2RefreshToken,
    'OAuth2Scope': OAuth2Scope_1.OAuth2Scope,
    'OAuth2ScopeConsentGrant': OAuth2ScopeConsentGrant_1.OAuth2ScopeConsentGrant,
    'OAuth2ScopesMediationPolicyRuleCondition': OAuth2ScopesMediationPolicyRuleCondition_1.OAuth2ScopesMediationPolicyRuleCondition,
    'OAuth2Token': OAuth2Token_1.OAuth2Token,
    'OAuthApplicationCredentials': OAuthApplicationCredentials_1.OAuthApplicationCredentials,
    'OAuthApplicationCredentialsAllOf': OAuthApplicationCredentialsAllOf_1.OAuthApplicationCredentialsAllOf,
    'OktaSignOnPolicy': OktaSignOnPolicy_1.OktaSignOnPolicy,
    'OktaSignOnPolicyAllOf': OktaSignOnPolicyAllOf_1.OktaSignOnPolicyAllOf,
    'OktaSignOnPolicyConditions': OktaSignOnPolicyConditions_1.OktaSignOnPolicyConditions,
    'OktaSignOnPolicyConditionsAllOf': OktaSignOnPolicyConditionsAllOf_1.OktaSignOnPolicyConditionsAllOf,
    'OktaSignOnPolicyRule': OktaSignOnPolicyRule_1.OktaSignOnPolicyRule,
    'OktaSignOnPolicyRuleActions': OktaSignOnPolicyRuleActions_1.OktaSignOnPolicyRuleActions,
    'OktaSignOnPolicyRuleActionsAllOf': OktaSignOnPolicyRuleActionsAllOf_1.OktaSignOnPolicyRuleActionsAllOf,
    'OktaSignOnPolicyRuleAllOf': OktaSignOnPolicyRuleAllOf_1.OktaSignOnPolicyRuleAllOf,
    'OktaSignOnPolicyRuleConditions': OktaSignOnPolicyRuleConditions_1.OktaSignOnPolicyRuleConditions,
    'OktaSignOnPolicyRuleConditionsAllOf': OktaSignOnPolicyRuleConditionsAllOf_1.OktaSignOnPolicyRuleConditionsAllOf,
    'OktaSignOnPolicyRuleSignonActions': OktaSignOnPolicyRuleSignonActions_1.OktaSignOnPolicyRuleSignonActions,
    'OktaSignOnPolicyRuleSignonSessionActions': OktaSignOnPolicyRuleSignonSessionActions_1.OktaSignOnPolicyRuleSignonSessionActions,
    'OpenIdConnectApplication': OpenIdConnectApplication_1.OpenIdConnectApplication,
    'OpenIdConnectApplicationAllOf': OpenIdConnectApplicationAllOf_1.OpenIdConnectApplicationAllOf,
    'OpenIdConnectApplicationIdpInitiatedLogin': OpenIdConnectApplicationIdpInitiatedLogin_1.OpenIdConnectApplicationIdpInitiatedLogin,
    'OpenIdConnectApplicationSettings': OpenIdConnectApplicationSettings_1.OpenIdConnectApplicationSettings,
    'OpenIdConnectApplicationSettingsAllOf': OpenIdConnectApplicationSettingsAllOf_1.OpenIdConnectApplicationSettingsAllOf,
    'OpenIdConnectApplicationSettingsClient': OpenIdConnectApplicationSettingsClient_1.OpenIdConnectApplicationSettingsClient,
    'OpenIdConnectApplicationSettingsClientKeys': OpenIdConnectApplicationSettingsClientKeys_1.OpenIdConnectApplicationSettingsClientKeys,
    'OpenIdConnectApplicationSettingsRefreshToken': OpenIdConnectApplicationSettingsRefreshToken_1.OpenIdConnectApplicationSettingsRefreshToken,
    'OrgContactTypeObj': OrgContactTypeObj_1.OrgContactTypeObj,
    'OrgContactUser': OrgContactUser_1.OrgContactUser,
    'OrgOktaCommunicationSetting': OrgOktaCommunicationSetting_1.OrgOktaCommunicationSetting,
    'OrgOktaSupportSettingsObj': OrgOktaSupportSettingsObj_1.OrgOktaSupportSettingsObj,
    'OrgPreferences': OrgPreferences_1.OrgPreferences,
    'OrgSetting': OrgSetting_1.OrgSetting,
    'PasswordCredential': PasswordCredential_1.PasswordCredential,
    'PasswordCredentialHash': PasswordCredentialHash_1.PasswordCredentialHash,
    'PasswordCredentialHook': PasswordCredentialHook_1.PasswordCredentialHook,
    'PasswordDictionary': PasswordDictionary_1.PasswordDictionary,
    'PasswordDictionaryCommon': PasswordDictionaryCommon_1.PasswordDictionaryCommon,
    'PasswordExpirationPolicyRuleCondition': PasswordExpirationPolicyRuleCondition_1.PasswordExpirationPolicyRuleCondition,
    'PasswordPolicy': PasswordPolicy_1.PasswordPolicy,
    'PasswordPolicyAllOf': PasswordPolicyAllOf_1.PasswordPolicyAllOf,
    'PasswordPolicyAuthenticationProviderCondition': PasswordPolicyAuthenticationProviderCondition_1.PasswordPolicyAuthenticationProviderCondition,
    'PasswordPolicyConditions': PasswordPolicyConditions_1.PasswordPolicyConditions,
    'PasswordPolicyConditionsAllOf': PasswordPolicyConditionsAllOf_1.PasswordPolicyConditionsAllOf,
    'PasswordPolicyDelegationSettings': PasswordPolicyDelegationSettings_1.PasswordPolicyDelegationSettings,
    'PasswordPolicyDelegationSettingsOptions': PasswordPolicyDelegationSettingsOptions_1.PasswordPolicyDelegationSettingsOptions,
    'PasswordPolicyPasswordSettings': PasswordPolicyPasswordSettings_1.PasswordPolicyPasswordSettings,
    'PasswordPolicyPasswordSettingsAge': PasswordPolicyPasswordSettingsAge_1.PasswordPolicyPasswordSettingsAge,
    'PasswordPolicyPasswordSettingsComplexity': PasswordPolicyPasswordSettingsComplexity_1.PasswordPolicyPasswordSettingsComplexity,
    'PasswordPolicyPasswordSettingsLockout': PasswordPolicyPasswordSettingsLockout_1.PasswordPolicyPasswordSettingsLockout,
    'PasswordPolicyRecoveryEmail': PasswordPolicyRecoveryEmail_1.PasswordPolicyRecoveryEmail,
    'PasswordPolicyRecoveryEmailProperties': PasswordPolicyRecoveryEmailProperties_1.PasswordPolicyRecoveryEmailProperties,
    'PasswordPolicyRecoveryEmailRecoveryToken': PasswordPolicyRecoveryEmailRecoveryToken_1.PasswordPolicyRecoveryEmailRecoveryToken,
    'PasswordPolicyRecoveryFactorSettings': PasswordPolicyRecoveryFactorSettings_1.PasswordPolicyRecoveryFactorSettings,
    'PasswordPolicyRecoveryFactors': PasswordPolicyRecoveryFactors_1.PasswordPolicyRecoveryFactors,
    'PasswordPolicyRecoveryQuestion': PasswordPolicyRecoveryQuestion_1.PasswordPolicyRecoveryQuestion,
    'PasswordPolicyRecoveryQuestionComplexity': PasswordPolicyRecoveryQuestionComplexity_1.PasswordPolicyRecoveryQuestionComplexity,
    'PasswordPolicyRecoveryQuestionProperties': PasswordPolicyRecoveryQuestionProperties_1.PasswordPolicyRecoveryQuestionProperties,
    'PasswordPolicyRecoverySettings': PasswordPolicyRecoverySettings_1.PasswordPolicyRecoverySettings,
    'PasswordPolicyRule': PasswordPolicyRule_1.PasswordPolicyRule,
    'PasswordPolicyRuleAction': PasswordPolicyRuleAction_1.PasswordPolicyRuleAction,
    'PasswordPolicyRuleActions': PasswordPolicyRuleActions_1.PasswordPolicyRuleActions,
    'PasswordPolicyRuleActionsAllOf': PasswordPolicyRuleActionsAllOf_1.PasswordPolicyRuleActionsAllOf,
    'PasswordPolicyRuleAllOf': PasswordPolicyRuleAllOf_1.PasswordPolicyRuleAllOf,
    'PasswordPolicyRuleConditions': PasswordPolicyRuleConditions_1.PasswordPolicyRuleConditions,
    'PasswordPolicyRuleConditionsAllOf': PasswordPolicyRuleConditionsAllOf_1.PasswordPolicyRuleConditionsAllOf,
    'PasswordPolicySettings': PasswordPolicySettings_1.PasswordPolicySettings,
    'PasswordSettingObject': PasswordSettingObject_1.PasswordSettingObject,
    'PlatformConditionEvaluatorPlatform': PlatformConditionEvaluatorPlatform_1.PlatformConditionEvaluatorPlatform,
    'PlatformConditionEvaluatorPlatformOperatingSystem': PlatformConditionEvaluatorPlatformOperatingSystem_1.PlatformConditionEvaluatorPlatformOperatingSystem,
    'PlatformConditionEvaluatorPlatformOperatingSystemVersion': PlatformConditionEvaluatorPlatformOperatingSystemVersion_1.PlatformConditionEvaluatorPlatformOperatingSystemVersion,
    'PlatformPolicyRuleCondition': PlatformPolicyRuleCondition_1.PlatformPolicyRuleCondition,
    'Policy': Policy_1.Policy,
    'PolicyAccountLink': PolicyAccountLink_1.PolicyAccountLink,
    'PolicyAccountLinkFilter': PolicyAccountLinkFilter_1.PolicyAccountLinkFilter,
    'PolicyAccountLinkFilterGroups': PolicyAccountLinkFilterGroups_1.PolicyAccountLinkFilterGroups,
    'PolicyNetworkCondition': PolicyNetworkCondition_1.PolicyNetworkCondition,
    'PolicyPeopleCondition': PolicyPeopleCondition_1.PolicyPeopleCondition,
    'PolicyRule': PolicyRule_1.PolicyRule,
    'PolicyRuleActions': PolicyRuleActions_1.PolicyRuleActions,
    'PolicyRuleActionsEnroll': PolicyRuleActionsEnroll_1.PolicyRuleActionsEnroll,
    'PolicyRuleAuthContextCondition': PolicyRuleAuthContextCondition_1.PolicyRuleAuthContextCondition,
    'PolicyRuleConditions': PolicyRuleConditions_1.PolicyRuleConditions,
    'PolicySubject': PolicySubject_1.PolicySubject,
    'PolicyUserNameTemplate': PolicyUserNameTemplate_1.PolicyUserNameTemplate,
    'PossessionConstraint': PossessionConstraint_1.PossessionConstraint,
    'PossessionConstraintAllOf': PossessionConstraintAllOf_1.PossessionConstraintAllOf,
    'PreRegistrationInlineHook': PreRegistrationInlineHook_1.PreRegistrationInlineHook,
    'PrincipalRateLimitEntity': PrincipalRateLimitEntity_1.PrincipalRateLimitEntity,
    'ProfileEnrollmentPolicy': ProfileEnrollmentPolicy_1.ProfileEnrollmentPolicy,
    'ProfileEnrollmentPolicyRule': ProfileEnrollmentPolicyRule_1.ProfileEnrollmentPolicyRule,
    'ProfileEnrollmentPolicyRuleAction': ProfileEnrollmentPolicyRuleAction_1.ProfileEnrollmentPolicyRuleAction,
    'ProfileEnrollmentPolicyRuleActions': ProfileEnrollmentPolicyRuleActions_1.ProfileEnrollmentPolicyRuleActions,
    'ProfileEnrollmentPolicyRuleActionsAllOf': ProfileEnrollmentPolicyRuleActionsAllOf_1.ProfileEnrollmentPolicyRuleActionsAllOf,
    'ProfileEnrollmentPolicyRuleActivationRequirement': ProfileEnrollmentPolicyRuleActivationRequirement_1.ProfileEnrollmentPolicyRuleActivationRequirement,
    'ProfileEnrollmentPolicyRuleAllOf': ProfileEnrollmentPolicyRuleAllOf_1.ProfileEnrollmentPolicyRuleAllOf,
    'ProfileEnrollmentPolicyRuleProfileAttribute': ProfileEnrollmentPolicyRuleProfileAttribute_1.ProfileEnrollmentPolicyRuleProfileAttribute,
    'ProfileMapping': ProfileMapping_1.ProfileMapping,
    'ProfileMappingProperty': ProfileMappingProperty_1.ProfileMappingProperty,
    'ProfileMappingSource': ProfileMappingSource_1.ProfileMappingSource,
    'ProfileSettingObject': ProfileSettingObject_1.ProfileSettingObject,
    'Protocol': Protocol_1.Protocol,
    'ProtocolAlgorithmType': ProtocolAlgorithmType_1.ProtocolAlgorithmType,
    'ProtocolAlgorithmTypeSignature': ProtocolAlgorithmTypeSignature_1.ProtocolAlgorithmTypeSignature,
    'ProtocolAlgorithms': ProtocolAlgorithms_1.ProtocolAlgorithms,
    'ProtocolEndpoint': ProtocolEndpoint_1.ProtocolEndpoint,
    'ProtocolEndpoints': ProtocolEndpoints_1.ProtocolEndpoints,
    'ProtocolRelayState': ProtocolRelayState_1.ProtocolRelayState,
    'ProtocolSettings': ProtocolSettings_1.ProtocolSettings,
    'Provisioning': Provisioning_1.Provisioning,
    'ProvisioningConditions': ProvisioningConditions_1.ProvisioningConditions,
    'ProvisioningConnection': ProvisioningConnection_1.ProvisioningConnection,
    'ProvisioningConnectionProfile': ProvisioningConnectionProfile_1.ProvisioningConnectionProfile,
    'ProvisioningConnectionRequest': ProvisioningConnectionRequest_1.ProvisioningConnectionRequest,
    'ProvisioningDeprovisionedCondition': ProvisioningDeprovisionedCondition_1.ProvisioningDeprovisionedCondition,
    'ProvisioningGroups': ProvisioningGroups_1.ProvisioningGroups,
    'ProvisioningSuspendedCondition': ProvisioningSuspendedCondition_1.ProvisioningSuspendedCondition,
    'PushUserFactor': PushUserFactor_1.PushUserFactor,
    'PushUserFactorAllOf': PushUserFactorAllOf_1.PushUserFactorAllOf,
    'PushUserFactorProfile': PushUserFactorProfile_1.PushUserFactorProfile,
    'RecoveryQuestionCredential': RecoveryQuestionCredential_1.RecoveryQuestionCredential,
    'ResetPasswordToken': ResetPasswordToken_1.ResetPasswordToken,
    'RiskPolicyRuleCondition': RiskPolicyRuleCondition_1.RiskPolicyRuleCondition,
    'RiskScorePolicyRuleCondition': RiskScorePolicyRuleCondition_1.RiskScorePolicyRuleCondition,
    'Role': Role_1.Role,
    'SamlApplication': SamlApplication_1.SamlApplication,
    'SamlApplicationAllOf': SamlApplicationAllOf_1.SamlApplicationAllOf,
    'SamlApplicationSettings': SamlApplicationSettings_1.SamlApplicationSettings,
    'SamlApplicationSettingsAllOf': SamlApplicationSettingsAllOf_1.SamlApplicationSettingsAllOf,
    'SamlApplicationSettingsApplication': SamlApplicationSettingsApplication_1.SamlApplicationSettingsApplication,
    'SamlApplicationSettingsSignOn': SamlApplicationSettingsSignOn_1.SamlApplicationSettingsSignOn,
    'SamlAttributeStatement': SamlAttributeStatement_1.SamlAttributeStatement,
    'ScheduledUserLifecycleAction': ScheduledUserLifecycleAction_1.ScheduledUserLifecycleAction,
    'SchemeApplicationCredentials': SchemeApplicationCredentials_1.SchemeApplicationCredentials,
    'SchemeApplicationCredentialsAllOf': SchemeApplicationCredentialsAllOf_1.SchemeApplicationCredentialsAllOf,
    'SecurePasswordStoreApplication': SecurePasswordStoreApplication_1.SecurePasswordStoreApplication,
    'SecurePasswordStoreApplicationAllOf': SecurePasswordStoreApplicationAllOf_1.SecurePasswordStoreApplicationAllOf,
    'SecurePasswordStoreApplicationSettings': SecurePasswordStoreApplicationSettings_1.SecurePasswordStoreApplicationSettings,
    'SecurePasswordStoreApplicationSettingsAllOf': SecurePasswordStoreApplicationSettingsAllOf_1.SecurePasswordStoreApplicationSettingsAllOf,
    'SecurePasswordStoreApplicationSettingsApplication': SecurePasswordStoreApplicationSettingsApplication_1.SecurePasswordStoreApplicationSettingsApplication,
    'SecurityQuestion': SecurityQuestion_1.SecurityQuestion,
    'SecurityQuestionUserFactor': SecurityQuestionUserFactor_1.SecurityQuestionUserFactor,
    'SecurityQuestionUserFactorAllOf': SecurityQuestionUserFactorAllOf_1.SecurityQuestionUserFactorAllOf,
    'SecurityQuestionUserFactorProfile': SecurityQuestionUserFactorProfile_1.SecurityQuestionUserFactorProfile,
    'Session': Session_1.Session,
    'SessionIdentityProvider': SessionIdentityProvider_1.SessionIdentityProvider,
    'SignInPage': SignInPage_1.SignInPage,
    'SignInPageAllOf': SignInPageAllOf_1.SignInPageAllOf,
    'SignInPageAllOfDefaultApp': SignInPageAllOfDefaultApp_1.SignInPageAllOfDefaultApp,
    'SignInPageAllOfWidgetCustomizations': SignInPageAllOfWidgetCustomizations_1.SignInPageAllOfWidgetCustomizations,
    'SignOnInlineHook': SignOnInlineHook_1.SignOnInlineHook,
    'SingleLogout': SingleLogout_1.SingleLogout,
    'SmsTemplate': SmsTemplate_1.SmsTemplate,
    'SmsUserFactor': SmsUserFactor_1.SmsUserFactor,
    'SmsUserFactorAllOf': SmsUserFactorAllOf_1.SmsUserFactorAllOf,
    'SmsUserFactorProfile': SmsUserFactorProfile_1.SmsUserFactorProfile,
    'SocialAuthToken': SocialAuthToken_1.SocialAuthToken,
    'SpCertificate': SpCertificate_1.SpCertificate,
    'Subscription': Subscription_1.Subscription,
    'SwaApplicationSettings': SwaApplicationSettings_1.SwaApplicationSettings,
    'SwaApplicationSettingsAllOf': SwaApplicationSettingsAllOf_1.SwaApplicationSettingsAllOf,
    'SwaApplicationSettingsApplication': SwaApplicationSettingsApplication_1.SwaApplicationSettingsApplication,
    'TempPassword': TempPassword_1.TempPassword,
    'Theme': Theme_1.Theme,
    'ThemeResponse': ThemeResponse_1.ThemeResponse,
    'ThreatInsightConfiguration': ThreatInsightConfiguration_1.ThreatInsightConfiguration,
    'TokenAuthorizationServerPolicyRuleAction': TokenAuthorizationServerPolicyRuleAction_1.TokenAuthorizationServerPolicyRuleAction,
    'TokenAuthorizationServerPolicyRuleActionInlineHook': TokenAuthorizationServerPolicyRuleActionInlineHook_1.TokenAuthorizationServerPolicyRuleActionInlineHook,
    'TokenUserFactor': TokenUserFactor_1.TokenUserFactor,
    'TokenUserFactorAllOf': TokenUserFactorAllOf_1.TokenUserFactorAllOf,
    'TokenUserFactorProfile': TokenUserFactorProfile_1.TokenUserFactorProfile,
    'TotpUserFactor': TotpUserFactor_1.TotpUserFactor,
    'TotpUserFactorAllOf': TotpUserFactorAllOf_1.TotpUserFactorAllOf,
    'TotpUserFactorProfile': TotpUserFactorProfile_1.TotpUserFactorProfile,
    'TrustedOrigin': TrustedOrigin_1.TrustedOrigin,
    'TrustedOriginScope': TrustedOriginScope_1.TrustedOriginScope,
    'U2fUserFactor': U2fUserFactor_1.U2fUserFactor,
    'U2fUserFactorAllOf': U2fUserFactorAllOf_1.U2fUserFactorAllOf,
    'U2fUserFactorProfile': U2fUserFactorProfile_1.U2fUserFactorProfile,
    'UpdateUserRequest': UpdateUserRequest_1.UpdateUserRequest,
    'User': User_1.User,
    'UserActivationToken': UserActivationToken_1.UserActivationToken,
    'UserCondition': UserCondition_1.UserCondition,
    'UserCredentials': UserCredentials_1.UserCredentials,
    'UserFactor': UserFactor_1.UserFactor,
    'UserIdString': UserIdString_1.UserIdString,
    'UserIdentifierConditionEvaluatorPattern': UserIdentifierConditionEvaluatorPattern_1.UserIdentifierConditionEvaluatorPattern,
    'UserIdentifierPolicyRuleCondition': UserIdentifierPolicyRuleCondition_1.UserIdentifierPolicyRuleCondition,
    'UserIdentityProviderLinkRequest': UserIdentityProviderLinkRequest_1.UserIdentityProviderLinkRequest,
    'UserLifecycleAttributePolicyRuleCondition': UserLifecycleAttributePolicyRuleCondition_1.UserLifecycleAttributePolicyRuleCondition,
    'UserPolicyRuleCondition': UserPolicyRuleCondition_1.UserPolicyRuleCondition,
    'UserProfile': UserProfile_1.UserProfile,
    'UserSchema': UserSchema_1.UserSchema,
    'UserSchemaAttribute': UserSchemaAttribute_1.UserSchemaAttribute,
    'UserSchemaAttributeEnum': UserSchemaAttributeEnum_1.UserSchemaAttributeEnum,
    'UserSchemaAttributeItems': UserSchemaAttributeItems_1.UserSchemaAttributeItems,
    'UserSchemaAttributeMaster': UserSchemaAttributeMaster_1.UserSchemaAttributeMaster,
    'UserSchemaAttributeMasterPriority': UserSchemaAttributeMasterPriority_1.UserSchemaAttributeMasterPriority,
    'UserSchemaAttributePermission': UserSchemaAttributePermission_1.UserSchemaAttributePermission,
    'UserSchemaBase': UserSchemaBase_1.UserSchemaBase,
    'UserSchemaBaseProperties': UserSchemaBaseProperties_1.UserSchemaBaseProperties,
    'UserSchemaDefinitions': UserSchemaDefinitions_1.UserSchemaDefinitions,
    'UserSchemaProperties': UserSchemaProperties_1.UserSchemaProperties,
    'UserSchemaPropertiesProfile': UserSchemaPropertiesProfile_1.UserSchemaPropertiesProfile,
    'UserSchemaPropertiesProfileItem': UserSchemaPropertiesProfileItem_1.UserSchemaPropertiesProfileItem,
    'UserSchemaPublic': UserSchemaPublic_1.UserSchemaPublic,
    'UserStatusPolicyRuleCondition': UserStatusPolicyRuleCondition_1.UserStatusPolicyRuleCondition,
    'UserType': UserType_1.UserType,
    'UserTypeCondition': UserTypeCondition_1.UserTypeCondition,
    'VerificationMethod': VerificationMethod_1.VerificationMethod,
    'VerifyFactorRequest': VerifyFactorRequest_1.VerifyFactorRequest,
    'VerifyUserFactorResponse': VerifyUserFactorResponse_1.VerifyUserFactorResponse,
    'WebAuthnUserFactor': WebAuthnUserFactor_1.WebAuthnUserFactor,
    'WebAuthnUserFactorAllOf': WebAuthnUserFactorAllOf_1.WebAuthnUserFactorAllOf,
    'WebAuthnUserFactorProfile': WebAuthnUserFactorProfile_1.WebAuthnUserFactorProfile,
    'WebUserFactor': WebUserFactor_1.WebUserFactor,
    'WebUserFactorAllOf': WebUserFactorAllOf_1.WebUserFactorAllOf,
    'WebUserFactorProfile': WebUserFactorProfile_1.WebUserFactorProfile,
    'WsFederationApplication': WsFederationApplication_1.WsFederationApplication,
    'WsFederationApplicationAllOf': WsFederationApplicationAllOf_1.WsFederationApplicationAllOf,
    'WsFederationApplicationSettings': WsFederationApplicationSettings_1.WsFederationApplicationSettings,
    'WsFederationApplicationSettingsAllOf': WsFederationApplicationSettingsAllOf_1.WsFederationApplicationSettingsAllOf,
    'WsFederationApplicationSettingsApplication': WsFederationApplicationSettingsApplication_1.WsFederationApplicationSettingsApplication,
    'AUTO_LOGIN': AutoLoginApplication_1.AutoLoginApplication,
    'BASIC_AUTH': BasicAuthApplication_1.BasicAuthApplication,
    'BOOKMARK': BookmarkApplication_1.BookmarkApplication,
    'BROWSER_PLUGIN': BrowserPluginApplication_1.BrowserPluginApplication,
    'OPENID_CONNECT': OpenIdConnectApplication_1.OpenIdConnectApplication,
    'SAML_1_1': SamlApplication_1.SamlApplication,
    'SAML_2_0': SamlApplication_1.SamlApplication,
    'SECURE_PASSWORD_STORE': SecurePasswordStoreApplication_1.SecurePasswordStoreApplication,
    'WS_FEDERATION': WsFederationApplication_1.WsFederationApplication,
    'call': CallUserFactor_1.CallUserFactor,
    'email': EmailUserFactor_1.EmailUserFactor,
    'hotp': CustomHotpUserFactor_1.CustomHotpUserFactor,
    'push': PushUserFactor_1.PushUserFactor,
    'question': SecurityQuestionUserFactor_1.SecurityQuestionUserFactor,
    'sms': SmsUserFactor_1.SmsUserFactor,
    'token': TokenUserFactor_1.TokenUserFactor,
    'token:hardware': HardwareUserFactor_1.HardwareUserFactor,
    'token:hotp': CustomHotpUserFactor_1.CustomHotpUserFactor,
    'token:software:totp': TotpUserFactor_1.TotpUserFactor,
    'u2f': U2fUserFactor_1.U2fUserFactor,
    'web': WebUserFactor_1.WebUserFactor,
    'webauthn': WebAuthnUserFactor_1.WebAuthnUserFactor,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType, discriminator) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === 'Date') {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = discriminator || typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    var discriminatedType = typeMap[discriminatorType];
                    if (discriminatedType) {
                        return discriminatedType.discriminator ? ObjectSerializer.findCorrectType(data, discriminatorType, discriminatedType.discriminator) : discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (format === 'date-time') {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) { // string.startsWith pre es6
            let subType = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            if (format == 'date') {
                let month = data.getMonth() + 1;
                month = month < 10 ? '0' + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? '0' + day.toString() : day.toString();
                return data.getFullYear() + '-' + month + '-' + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) { // string.startsWith pre es6
            let subType = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    /**
      * Normalize media type
      *
      * We currently do not handle any media types attributes, i.e. anything
      * after a semicolon. All content is assumed to be UTF-8 compatible.
      */
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(';')[0].trim().toLowerCase();
    }
    /**
      * From a list of possible media types, choose the one we can handle best.
      *
      * The order of the given media types does not have any impact on the choice
      * made.
      */
    static getPreferredMediaType(mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return 'application/json';
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error('None of the given media types are supported: ' + mediaTypes.join(', '));
        }
        return selectedMediaType;
    }
    /**
      * Convert data to a string according the given media type
      */
    static stringify(data, mediaType) {
        if (mediaType === 'application/json') {
            return JSON.stringify(data);
        }
        throw new Error('The mediaType ' + mediaType + ' is not supported by ObjectSerializer.stringify.');
    }
    /**
      * Parse data from a string according to the given media type
      */
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error('Cannot parse content. No Content-Type defined.');
        }
        if (mediaType === 'application/json') {
            return JSON.parse(rawData);
        }
        throw new Error('The mediaType ' + mediaType + ' is not supported by ObjectSerializer.parse.');
    }
}
exports.ObjectSerializer = ObjectSerializer;
