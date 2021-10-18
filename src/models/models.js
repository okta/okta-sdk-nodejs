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
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./acsEndpoint"), exports);
__exportStar(require("./activateFactorRequest"), exports);
__exportStar(require("./allowedForEnum"), exports);
__exportStar(require("./appAndInstanceConditionEvaluatorAppOrInstance"), exports);
__exportStar(require("./appAndInstancePolicyRuleCondition"), exports);
__exportStar(require("./appInstancePolicyRuleCondition"), exports);
__exportStar(require("./appLink"), exports);
__exportStar(require("./appUser"), exports);
__exportStar(require("./appUserCredentials"), exports);
__exportStar(require("./appUserPasswordCredential"), exports);
__exportStar(require("./application"), exports);
__exportStar(require("./applicationAccessibility"), exports);
__exportStar(require("./applicationCredentials"), exports);
__exportStar(require("./applicationCredentialsOAuthClient"), exports);
__exportStar(require("./applicationCredentialsScheme"), exports);
__exportStar(require("./applicationCredentialsSigning"), exports);
__exportStar(require("./applicationCredentialsSigningUse"), exports);
__exportStar(require("./applicationCredentialsUsernameTemplate"), exports);
__exportStar(require("./applicationGroupAssignment"), exports);
__exportStar(require("./applicationLicensing"), exports);
__exportStar(require("./applicationSettings"), exports);
__exportStar(require("./applicationSettingsNotes"), exports);
__exportStar(require("./applicationSettingsNotifications"), exports);
__exportStar(require("./applicationSettingsNotificationsVpn"), exports);
__exportStar(require("./applicationSettingsNotificationsVpnNetwork"), exports);
__exportStar(require("./applicationSignOnMode"), exports);
__exportStar(require("./applicationVisibility"), exports);
__exportStar(require("./applicationVisibilityHide"), exports);
__exportStar(require("./assignRoleRequest"), exports);
__exportStar(require("./authenticationProvider"), exports);
__exportStar(require("./authenticationProviderType"), exports);
__exportStar(require("./authenticator"), exports);
__exportStar(require("./authenticatorSettings"), exports);
__exportStar(require("./authenticatorStatus"), exports);
__exportStar(require("./authenticatorType"), exports);
__exportStar(require("./authorizationServer"), exports);
__exportStar(require("./authorizationServerCredentials"), exports);
__exportStar(require("./authorizationServerCredentialsRotationMode"), exports);
__exportStar(require("./authorizationServerCredentialsSigningConfig"), exports);
__exportStar(require("./authorizationServerCredentialsUse"), exports);
__exportStar(require("./authorizationServerPolicy"), exports);
__exportStar(require("./authorizationServerPolicyRule"), exports);
__exportStar(require("./authorizationServerPolicyRuleActions"), exports);
__exportStar(require("./authorizationServerPolicyRuleConditions"), exports);
__exportStar(require("./autoLoginApplication"), exports);
__exportStar(require("./autoLoginApplicationSettings"), exports);
__exportStar(require("./autoLoginApplicationSettingsSignOn"), exports);
__exportStar(require("./basicApplicationSettings"), exports);
__exportStar(require("./basicApplicationSettingsApplication"), exports);
__exportStar(require("./basicAuthApplication"), exports);
__exportStar(require("./beforeScheduledActionPolicyRuleCondition"), exports);
__exportStar(require("./bookmarkApplication"), exports);
__exportStar(require("./bookmarkApplicationSettings"), exports);
__exportStar(require("./bookmarkApplicationSettingsApplication"), exports);
__exportStar(require("./browserPluginApplication"), exports);
__exportStar(require("./cAPTCHAInstance"), exports);
__exportStar(require("./cAPTCHAInstanceLink"), exports);
__exportStar(require("./callUserFactor"), exports);
__exportStar(require("./callUserFactorProfile"), exports);
__exportStar(require("./catalogApplication"), exports);
__exportStar(require("./catalogApplicationStatus"), exports);
__exportStar(require("./changePasswordRequest"), exports);
__exportStar(require("./clientPolicyCondition"), exports);
__exportStar(require("./contextPolicyRuleCondition"), exports);
__exportStar(require("./createSessionRequest"), exports);
__exportStar(require("./createUserRequest"), exports);
__exportStar(require("./csr"), exports);
__exportStar(require("./csrMetadata"), exports);
__exportStar(require("./csrMetadataSubject"), exports);
__exportStar(require("./csrMetadataSubjectAltNames"), exports);
__exportStar(require("./customHotpUserFactor"), exports);
__exportStar(require("./customHotpUserFactorProfile"), exports);
__exportStar(require("./dNSRecord"), exports);
__exportStar(require("./dNSRecordType"), exports);
__exportStar(require("./devicePolicyRuleCondition"), exports);
__exportStar(require("./devicePolicyRuleConditionPlatform"), exports);
__exportStar(require("./domain"), exports);
__exportStar(require("./domainCertificate"), exports);
__exportStar(require("./domainCertificateMetadata"), exports);
__exportStar(require("./domainCertificateSourceType"), exports);
__exportStar(require("./domainCertificateType"), exports);
__exportStar(require("./domainLinks"), exports);
__exportStar(require("./domainListResponse"), exports);
__exportStar(require("./domainResponse"), exports);
__exportStar(require("./domainValidationStatus"), exports);
__exportStar(require("./duration"), exports);
__exportStar(require("./emailUserFactor"), exports);
__exportStar(require("./emailUserFactorProfile"), exports);
__exportStar(require("./enabledStatus"), exports);
__exportStar(require("./errorErrorCauses"), exports);
__exportStar(require("./eventHook"), exports);
__exportStar(require("./eventHookChannel"), exports);
__exportStar(require("./eventHookChannelConfig"), exports);
__exportStar(require("./eventHookChannelConfigAuthScheme"), exports);
__exportStar(require("./eventHookChannelConfigAuthSchemeType"), exports);
__exportStar(require("./eventHookChannelConfigHeader"), exports);
__exportStar(require("./eventSubscriptions"), exports);
__exportStar(require("./factorProvider"), exports);
__exportStar(require("./factorResultType"), exports);
__exportStar(require("./factorStatus"), exports);
__exportStar(require("./factorType"), exports);
__exportStar(require("./feature"), exports);
__exportStar(require("./featureStage"), exports);
__exportStar(require("./featureStageState"), exports);
__exportStar(require("./featureStageValue"), exports);
__exportStar(require("./featureType"), exports);
__exportStar(require("./forgotPasswordResponse"), exports);
__exportStar(require("./grantTypePolicyRuleCondition"), exports);
__exportStar(require("./group"), exports);
__exportStar(require("./groupCondition"), exports);
__exportStar(require("./groupPolicyRuleCondition"), exports);
__exportStar(require("./groupProfile"), exports);
__exportStar(require("./groupRule"), exports);
__exportStar(require("./groupRuleAction"), exports);
__exportStar(require("./groupRuleConditions"), exports);
__exportStar(require("./groupRuleExpression"), exports);
__exportStar(require("./groupRuleGroupAssignment"), exports);
__exportStar(require("./groupRuleGroupCondition"), exports);
__exportStar(require("./groupRulePeopleCondition"), exports);
__exportStar(require("./groupRuleStatus"), exports);
__exportStar(require("./groupRuleUserCondition"), exports);
__exportStar(require("./groupSchema"), exports);
__exportStar(require("./groupSchemaAttribute"), exports);
__exportStar(require("./groupSchemaBase"), exports);
__exportStar(require("./groupSchemaBaseProperties"), exports);
__exportStar(require("./groupSchemaCustom"), exports);
__exportStar(require("./groupSchemaDefinitions"), exports);
__exportStar(require("./groupType"), exports);
__exportStar(require("./hardwareUserFactor"), exports);
__exportStar(require("./hardwareUserFactorProfile"), exports);
__exportStar(require("./hrefObject"), exports);
__exportStar(require("./hrefObjectHints"), exports);
__exportStar(require("./identityProvider"), exports);
__exportStar(require("./identityProviderApplicationUser"), exports);
__exportStar(require("./identityProviderCredentials"), exports);
__exportStar(require("./identityProviderCredentialsClient"), exports);
__exportStar(require("./identityProviderCredentialsSigning"), exports);
__exportStar(require("./identityProviderCredentialsTrust"), exports);
__exportStar(require("./identityProviderPolicy"), exports);
__exportStar(require("./identityProviderPolicyRuleCondition"), exports);
__exportStar(require("./inactivityPolicyRuleCondition"), exports);
__exportStar(require("./inlineHook"), exports);
__exportStar(require("./inlineHookChannel"), exports);
__exportStar(require("./inlineHookChannelConfig"), exports);
__exportStar(require("./inlineHookChannelConfigAuthScheme"), exports);
__exportStar(require("./inlineHookChannelConfigHeaders"), exports);
__exportStar(require("./inlineHookResponse"), exports);
__exportStar(require("./inlineHookResponseCommandValue"), exports);
__exportStar(require("./inlineHookResponseCommands"), exports);
__exportStar(require("./inlineHookStatus"), exports);
__exportStar(require("./inlineHookType"), exports);
__exportStar(require("./ionField"), exports);
__exportStar(require("./ionForm"), exports);
__exportStar(require("./jsonWebKey"), exports);
__exportStar(require("./jwkUse"), exports);
__exportStar(require("./lifecycleExpirationPolicyRuleCondition"), exports);
__exportStar(require("./linkedObject"), exports);
__exportStar(require("./linkedObjectDetails"), exports);
__exportStar(require("./linkedObjectDetailsType"), exports);
__exportStar(require("./logActor"), exports);
__exportStar(require("./logAuthenticationContext"), exports);
__exportStar(require("./logAuthenticationProvider"), exports);
__exportStar(require("./logClient"), exports);
__exportStar(require("./logCredentialProvider"), exports);
__exportStar(require("./logCredentialType"), exports);
__exportStar(require("./logDebugContext"), exports);
__exportStar(require("./logEvent"), exports);
__exportStar(require("./logGeographicalContext"), exports);
__exportStar(require("./logGeolocation"), exports);
__exportStar(require("./logIpAddress"), exports);
__exportStar(require("./logIssuer"), exports);
__exportStar(require("./logOutcome"), exports);
__exportStar(require("./logRequest"), exports);
__exportStar(require("./logSecurityContext"), exports);
__exportStar(require("./logSeverity"), exports);
__exportStar(require("./logTarget"), exports);
__exportStar(require("./logTransaction"), exports);
__exportStar(require("./logUserAgent"), exports);
__exportStar(require("./mDMEnrollmentPolicyRuleCondition"), exports);
__exportStar(require("./modelError"), exports);
__exportStar(require("./networkZone"), exports);
__exportStar(require("./networkZoneAddress"), exports);
__exportStar(require("./networkZoneAddressType"), exports);
__exportStar(require("./networkZoneLocation"), exports);
__exportStar(require("./networkZoneStatus"), exports);
__exportStar(require("./networkZoneType"), exports);
__exportStar(require("./networkZoneUsage"), exports);
__exportStar(require("./oAuth2Actor"), exports);
__exportStar(require("./oAuth2Claim"), exports);
__exportStar(require("./oAuth2ClaimConditions"), exports);
__exportStar(require("./oAuth2Client"), exports);
__exportStar(require("./oAuth2RefreshToken"), exports);
__exportStar(require("./oAuth2Scope"), exports);
__exportStar(require("./oAuth2ScopeConsentGrant"), exports);
__exportStar(require("./oAuth2ScopeConsentGrantSource"), exports);
__exportStar(require("./oAuth2ScopeConsentGrantStatus"), exports);
__exportStar(require("./oAuth2ScopesMediationPolicyRuleCondition"), exports);
__exportStar(require("./oAuth2Token"), exports);
__exportStar(require("./oAuthApplicationCredentials"), exports);
__exportStar(require("./oAuthEndpointAuthenticationMethod"), exports);
__exportStar(require("./oAuthGrantType"), exports);
__exportStar(require("./oAuthResponseType"), exports);
__exportStar(require("./oktaSignOnPolicy"), exports);
__exportStar(require("./oktaSignOnPolicyConditions"), exports);
__exportStar(require("./oktaSignOnPolicyRule"), exports);
__exportStar(require("./oktaSignOnPolicyRuleActions"), exports);
__exportStar(require("./oktaSignOnPolicyRuleConditions"), exports);
__exportStar(require("./oktaSignOnPolicyRuleSignonActions"), exports);
__exportStar(require("./oktaSignOnPolicyRuleSignonSessionActions"), exports);
__exportStar(require("./openIdConnectApplication"), exports);
__exportStar(require("./openIdConnectApplicationConsentMethod"), exports);
__exportStar(require("./openIdConnectApplicationIdpInitiatedLogin"), exports);
__exportStar(require("./openIdConnectApplicationIssuerMode"), exports);
__exportStar(require("./openIdConnectApplicationSettings"), exports);
__exportStar(require("./openIdConnectApplicationSettingsClient"), exports);
__exportStar(require("./openIdConnectApplicationSettingsClientKeys"), exports);
__exportStar(require("./openIdConnectApplicationSettingsRefreshToken"), exports);
__exportStar(require("./openIdConnectApplicationType"), exports);
__exportStar(require("./openIdConnectRefreshTokenRotationType"), exports);
__exportStar(require("./orgContactType"), exports);
__exportStar(require("./orgContactTypeObj"), exports);
__exportStar(require("./orgContactUser"), exports);
__exportStar(require("./orgOktaCommunicationSetting"), exports);
__exportStar(require("./orgOktaSupportSetting"), exports);
__exportStar(require("./orgOktaSupportSettingsObj"), exports);
__exportStar(require("./orgPreferences"), exports);
__exportStar(require("./orgSetting"), exports);
__exportStar(require("./passwordCredential"), exports);
__exportStar(require("./passwordCredentialHash"), exports);
__exportStar(require("./passwordCredentialHashAlgorithm"), exports);
__exportStar(require("./passwordCredentialHook"), exports);
__exportStar(require("./passwordDictionary"), exports);
__exportStar(require("./passwordDictionaryCommon"), exports);
__exportStar(require("./passwordExpirationPolicyRuleCondition"), exports);
__exportStar(require("./passwordPolicy"), exports);
__exportStar(require("./passwordPolicyAuthenticationProviderCondition"), exports);
__exportStar(require("./passwordPolicyConditions"), exports);
__exportStar(require("./passwordPolicyDelegationSettings"), exports);
__exportStar(require("./passwordPolicyDelegationSettingsOptions"), exports);
__exportStar(require("./passwordPolicyPasswordSettings"), exports);
__exportStar(require("./passwordPolicyPasswordSettingsAge"), exports);
__exportStar(require("./passwordPolicyPasswordSettingsComplexity"), exports);
__exportStar(require("./passwordPolicyPasswordSettingsLockout"), exports);
__exportStar(require("./passwordPolicyRecoveryEmail"), exports);
__exportStar(require("./passwordPolicyRecoveryEmailProperties"), exports);
__exportStar(require("./passwordPolicyRecoveryEmailRecoveryToken"), exports);
__exportStar(require("./passwordPolicyRecoveryFactorSettings"), exports);
__exportStar(require("./passwordPolicyRecoveryFactors"), exports);
__exportStar(require("./passwordPolicyRecoveryQuestion"), exports);
__exportStar(require("./passwordPolicyRecoveryQuestionComplexity"), exports);
__exportStar(require("./passwordPolicyRecoveryQuestionProperties"), exports);
__exportStar(require("./passwordPolicyRecoverySettings"), exports);
__exportStar(require("./passwordPolicyRule"), exports);
__exportStar(require("./passwordPolicyRuleAction"), exports);
__exportStar(require("./passwordPolicyRuleActions"), exports);
__exportStar(require("./passwordPolicyRuleConditions"), exports);
__exportStar(require("./passwordPolicySettings"), exports);
__exportStar(require("./platformConditionEvaluatorPlatform"), exports);
__exportStar(require("./platformConditionEvaluatorPlatformOperatingSystem"), exports);
__exportStar(require("./platformConditionEvaluatorPlatformOperatingSystemVersion"), exports);
__exportStar(require("./platformPolicyRuleCondition"), exports);
__exportStar(require("./policy"), exports);
__exportStar(require("./policyAccountLink"), exports);
__exportStar(require("./policyAccountLinkFilter"), exports);
__exportStar(require("./policyAccountLinkFilterGroups"), exports);
__exportStar(require("./policyNetworkCondition"), exports);
__exportStar(require("./policyPeopleCondition"), exports);
__exportStar(require("./policyRule"), exports);
__exportStar(require("./policyRuleActions"), exports);
__exportStar(require("./policyRuleActionsEnroll"), exports);
__exportStar(require("./policyRuleActionsEnrollSelf"), exports);
__exportStar(require("./policyRuleAuthContextCondition"), exports);
__exportStar(require("./policyRuleConditions"), exports);
__exportStar(require("./policySubject"), exports);
__exportStar(require("./policySubjectMatchType"), exports);
__exportStar(require("./policyType"), exports);
__exportStar(require("./policyUserNameTemplate"), exports);
__exportStar(require("./profileMapping"), exports);
__exportStar(require("./profileMappingProperty"), exports);
__exportStar(require("./profileMappingPropertyPushStatus"), exports);
__exportStar(require("./profileMappingSource"), exports);
__exportStar(require("./protocol"), exports);
__exportStar(require("./protocolAlgorithmType"), exports);
__exportStar(require("./protocolAlgorithmTypeSignature"), exports);
__exportStar(require("./protocolAlgorithms"), exports);
__exportStar(require("./protocolEndpoint"), exports);
__exportStar(require("./protocolEndpoints"), exports);
__exportStar(require("./protocolRelayState"), exports);
__exportStar(require("./protocolRelayStateFormat"), exports);
__exportStar(require("./protocolSettings"), exports);
__exportStar(require("./provisioning"), exports);
__exportStar(require("./provisioningConditions"), exports);
__exportStar(require("./provisioningDeprovisionedCondition"), exports);
__exportStar(require("./provisioningGroups"), exports);
__exportStar(require("./provisioningSuspendedCondition"), exports);
__exportStar(require("./pushUserFactor"), exports);
__exportStar(require("./pushUserFactorProfile"), exports);
__exportStar(require("./recoveryQuestionCredential"), exports);
__exportStar(require("./resetPasswordToken"), exports);
__exportStar(require("./riskPolicyRuleCondition"), exports);
__exportStar(require("./riskScorePolicyRuleCondition"), exports);
__exportStar(require("./role"), exports);
__exportStar(require("./roleAssignmentType"), exports);
__exportStar(require("./roleStatus"), exports);
__exportStar(require("./roleType"), exports);
__exportStar(require("./samlApplication"), exports);
__exportStar(require("./samlApplicationSettings"), exports);
__exportStar(require("./samlApplicationSettingsSignOn"), exports);
__exportStar(require("./samlAttributeStatement"), exports);
__exportStar(require("./scheduledUserLifecycleAction"), exports);
__exportStar(require("./schemeApplicationCredentials"), exports);
__exportStar(require("./scope"), exports);
__exportStar(require("./scopeType"), exports);
__exportStar(require("./securePasswordStoreApplication"), exports);
__exportStar(require("./securePasswordStoreApplicationSettings"), exports);
__exportStar(require("./securePasswordStoreApplicationSettingsApplication"), exports);
__exportStar(require("./securityQuestion"), exports);
__exportStar(require("./securityQuestionUserFactor"), exports);
__exportStar(require("./securityQuestionUserFactorProfile"), exports);
__exportStar(require("./session"), exports);
__exportStar(require("./sessionAuthenticationMethod"), exports);
__exportStar(require("./sessionIdentityProvider"), exports);
__exportStar(require("./sessionIdentityProviderType"), exports);
__exportStar(require("./sessionStatus"), exports);
__exportStar(require("./signOnInlineHook"), exports);
__exportStar(require("./singleLogout"), exports);
__exportStar(require("./smsTemplate"), exports);
__exportStar(require("./smsTemplateType"), exports);
__exportStar(require("./smsUserFactor"), exports);
__exportStar(require("./smsUserFactorProfile"), exports);
__exportStar(require("./socialAuthToken"), exports);
__exportStar(require("./spCertificate"), exports);
__exportStar(require("./swaApplication"), exports);
__exportStar(require("./swaApplicationSettings"), exports);
__exportStar(require("./swaApplicationSettingsApplication"), exports);
__exportStar(require("./swaThreeFieldApplication"), exports);
__exportStar(require("./swaThreeFieldApplicationSettings"), exports);
__exportStar(require("./swaThreeFieldApplicationSettingsApplication"), exports);
__exportStar(require("./tempPassword"), exports);
__exportStar(require("./threatInsightConfiguration"), exports);
__exportStar(require("./tokenAuthorizationServerPolicyRuleAction"), exports);
__exportStar(require("./tokenAuthorizationServerPolicyRuleActionInlineHook"), exports);
__exportStar(require("./tokenUserFactor"), exports);
__exportStar(require("./tokenUserFactorProfile"), exports);
__exportStar(require("./totpUserFactor"), exports);
__exportStar(require("./totpUserFactorProfile"), exports);
__exportStar(require("./trustedOrigin"), exports);
__exportStar(require("./u2fUserFactor"), exports);
__exportStar(require("./u2fUserFactorProfile"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./userActivationToken"), exports);
__exportStar(require("./userCondition"), exports);
__exportStar(require("./userCredentials"), exports);
__exportStar(require("./userFactor"), exports);
__exportStar(require("./userIdString"), exports);
__exportStar(require("./userIdentifierConditionEvaluatorPattern"), exports);
__exportStar(require("./userIdentifierPolicyRuleCondition"), exports);
__exportStar(require("./userIdentityProviderLinkRequest"), exports);
__exportStar(require("./userLifecycleAttributePolicyRuleCondition"), exports);
__exportStar(require("./userNextLogin"), exports);
__exportStar(require("./userPolicyRuleCondition"), exports);
__exportStar(require("./userProfile"), exports);
__exportStar(require("./userSchema"), exports);
__exportStar(require("./userSchemaAttribute"), exports);
__exportStar(require("./userSchemaAttributeEnum"), exports);
__exportStar(require("./userSchemaAttributeItems"), exports);
__exportStar(require("./userSchemaAttributeMaster"), exports);
__exportStar(require("./userSchemaAttributeMasterPriority"), exports);
__exportStar(require("./userSchemaAttributeMasterType"), exports);
__exportStar(require("./userSchemaAttributePermission"), exports);
__exportStar(require("./userSchemaAttributeScope"), exports);
__exportStar(require("./userSchemaAttributeType"), exports);
__exportStar(require("./userSchemaAttributeUnion"), exports);
__exportStar(require("./userSchemaBase"), exports);
__exportStar(require("./userSchemaBaseProperties"), exports);
__exportStar(require("./userSchemaDefinitions"), exports);
__exportStar(require("./userSchemaProperties"), exports);
__exportStar(require("./userSchemaPropertiesProfile"), exports);
__exportStar(require("./userSchemaPropertiesProfileItem"), exports);
__exportStar(require("./userSchemaPublic"), exports);
__exportStar(require("./userStatus"), exports);
__exportStar(require("./userStatusPolicyRuleCondition"), exports);
__exportStar(require("./userType"), exports);
__exportStar(require("./verifyFactorRequest"), exports);
__exportStar(require("./verifyUserFactorResponse"), exports);
__exportStar(require("./webAuthnUserFactor"), exports);
__exportStar(require("./webAuthnUserFactorProfile"), exports);
__exportStar(require("./webUserFactor"), exports);
__exportStar(require("./webUserFactorProfile"), exports);
__exportStar(require("./wsFederationApplication"), exports);
__exportStar(require("./wsFederationApplicationSettings"), exports);
__exportStar(require("./wsFederationApplicationSettingsApplication"), exports);
var acsEndpoint_1 = require("./acsEndpoint");
var activateFactorRequest_1 = require("./activateFactorRequest");
var allowedForEnum_1 = require("./allowedForEnum");
var appAndInstanceConditionEvaluatorAppOrInstance_1 = require("./appAndInstanceConditionEvaluatorAppOrInstance");
var appAndInstancePolicyRuleCondition_1 = require("./appAndInstancePolicyRuleCondition");
var appInstancePolicyRuleCondition_1 = require("./appInstancePolicyRuleCondition");
var appLink_1 = require("./appLink");
var appUser_1 = require("./appUser");
var appUserCredentials_1 = require("./appUserCredentials");
var appUserPasswordCredential_1 = require("./appUserPasswordCredential");
var application_1 = require("./application");
var applicationAccessibility_1 = require("./applicationAccessibility");
var applicationCredentials_1 = require("./applicationCredentials");
var applicationCredentialsOAuthClient_1 = require("./applicationCredentialsOAuthClient");
var applicationCredentialsScheme_1 = require("./applicationCredentialsScheme");
var applicationCredentialsSigning_1 = require("./applicationCredentialsSigning");
var applicationCredentialsSigningUse_1 = require("./applicationCredentialsSigningUse");
var applicationCredentialsUsernameTemplate_1 = require("./applicationCredentialsUsernameTemplate");
var applicationGroupAssignment_1 = require("./applicationGroupAssignment");
var applicationLicensing_1 = require("./applicationLicensing");
var applicationSettings_1 = require("./applicationSettings");
var applicationSettingsNotes_1 = require("./applicationSettingsNotes");
var applicationSettingsNotifications_1 = require("./applicationSettingsNotifications");
var applicationSettingsNotificationsVpn_1 = require("./applicationSettingsNotificationsVpn");
var applicationSettingsNotificationsVpnNetwork_1 = require("./applicationSettingsNotificationsVpnNetwork");
var applicationSignOnMode_1 = require("./applicationSignOnMode");
var applicationVisibility_1 = require("./applicationVisibility");
var applicationVisibilityHide_1 = require("./applicationVisibilityHide");
var assignRoleRequest_1 = require("./assignRoleRequest");
var authenticationProvider_1 = require("./authenticationProvider");
var authenticationProviderType_1 = require("./authenticationProviderType");
var authenticator_1 = require("./authenticator");
var authenticatorSettings_1 = require("./authenticatorSettings");
var authenticatorStatus_1 = require("./authenticatorStatus");
var authenticatorType_1 = require("./authenticatorType");
var authorizationServer_1 = require("./authorizationServer");
var authorizationServerCredentials_1 = require("./authorizationServerCredentials");
var authorizationServerCredentialsRotationMode_1 = require("./authorizationServerCredentialsRotationMode");
var authorizationServerCredentialsSigningConfig_1 = require("./authorizationServerCredentialsSigningConfig");
var authorizationServerCredentialsUse_1 = require("./authorizationServerCredentialsUse");
var authorizationServerPolicy_1 = require("./authorizationServerPolicy");
var authorizationServerPolicyRule_1 = require("./authorizationServerPolicyRule");
var authorizationServerPolicyRuleActions_1 = require("./authorizationServerPolicyRuleActions");
var authorizationServerPolicyRuleConditions_1 = require("./authorizationServerPolicyRuleConditions");
var autoLoginApplication_1 = require("./autoLoginApplication");
var autoLoginApplicationSettings_1 = require("./autoLoginApplicationSettings");
var autoLoginApplicationSettingsSignOn_1 = require("./autoLoginApplicationSettingsSignOn");
var basicApplicationSettings_1 = require("./basicApplicationSettings");
var basicApplicationSettingsApplication_1 = require("./basicApplicationSettingsApplication");
var basicAuthApplication_1 = require("./basicAuthApplication");
var beforeScheduledActionPolicyRuleCondition_1 = require("./beforeScheduledActionPolicyRuleCondition");
var bookmarkApplication_1 = require("./bookmarkApplication");
var bookmarkApplicationSettings_1 = require("./bookmarkApplicationSettings");
var bookmarkApplicationSettingsApplication_1 = require("./bookmarkApplicationSettingsApplication");
var browserPluginApplication_1 = require("./browserPluginApplication");
var cAPTCHAInstance_1 = require("./cAPTCHAInstance");
var cAPTCHAInstanceLink_1 = require("./cAPTCHAInstanceLink");
var callUserFactor_1 = require("./callUserFactor");
var callUserFactorProfile_1 = require("./callUserFactorProfile");
var catalogApplication_1 = require("./catalogApplication");
var catalogApplicationStatus_1 = require("./catalogApplicationStatus");
var changePasswordRequest_1 = require("./changePasswordRequest");
var clientPolicyCondition_1 = require("./clientPolicyCondition");
var contextPolicyRuleCondition_1 = require("./contextPolicyRuleCondition");
var createSessionRequest_1 = require("./createSessionRequest");
var createUserRequest_1 = require("./createUserRequest");
var csr_1 = require("./csr");
var csrMetadata_1 = require("./csrMetadata");
var csrMetadataSubject_1 = require("./csrMetadataSubject");
var csrMetadataSubjectAltNames_1 = require("./csrMetadataSubjectAltNames");
var customHotpUserFactor_1 = require("./customHotpUserFactor");
var customHotpUserFactorProfile_1 = require("./customHotpUserFactorProfile");
var dNSRecord_1 = require("./dNSRecord");
var dNSRecordType_1 = require("./dNSRecordType");
var devicePolicyRuleCondition_1 = require("./devicePolicyRuleCondition");
var devicePolicyRuleConditionPlatform_1 = require("./devicePolicyRuleConditionPlatform");
var domain_1 = require("./domain");
var domainCertificate_1 = require("./domainCertificate");
var domainCertificateMetadata_1 = require("./domainCertificateMetadata");
var domainCertificateSourceType_1 = require("./domainCertificateSourceType");
var domainCertificateType_1 = require("./domainCertificateType");
var domainLinks_1 = require("./domainLinks");
var domainListResponse_1 = require("./domainListResponse");
var domainResponse_1 = require("./domainResponse");
var domainValidationStatus_1 = require("./domainValidationStatus");
var duration_1 = require("./duration");
var emailUserFactor_1 = require("./emailUserFactor");
var emailUserFactorProfile_1 = require("./emailUserFactorProfile");
var enabledStatus_1 = require("./enabledStatus");
var errorErrorCauses_1 = require("./errorErrorCauses");
var eventHook_1 = require("./eventHook");
var eventHookChannel_1 = require("./eventHookChannel");
var eventHookChannelConfig_1 = require("./eventHookChannelConfig");
var eventHookChannelConfigAuthScheme_1 = require("./eventHookChannelConfigAuthScheme");
var eventHookChannelConfigAuthSchemeType_1 = require("./eventHookChannelConfigAuthSchemeType");
var eventHookChannelConfigHeader_1 = require("./eventHookChannelConfigHeader");
var eventSubscriptions_1 = require("./eventSubscriptions");
var factorProvider_1 = require("./factorProvider");
var factorResultType_1 = require("./factorResultType");
var factorStatus_1 = require("./factorStatus");
var factorType_1 = require("./factorType");
var feature_1 = require("./feature");
var featureStage_1 = require("./featureStage");
var featureStageState_1 = require("./featureStageState");
var featureStageValue_1 = require("./featureStageValue");
var featureType_1 = require("./featureType");
var forgotPasswordResponse_1 = require("./forgotPasswordResponse");
var grantTypePolicyRuleCondition_1 = require("./grantTypePolicyRuleCondition");
var group_1 = require("./group");
var groupCondition_1 = require("./groupCondition");
var groupPolicyRuleCondition_1 = require("./groupPolicyRuleCondition");
var groupProfile_1 = require("./groupProfile");
var groupRule_1 = require("./groupRule");
var groupRuleAction_1 = require("./groupRuleAction");
var groupRuleConditions_1 = require("./groupRuleConditions");
var groupRuleExpression_1 = require("./groupRuleExpression");
var groupRuleGroupAssignment_1 = require("./groupRuleGroupAssignment");
var groupRuleGroupCondition_1 = require("./groupRuleGroupCondition");
var groupRulePeopleCondition_1 = require("./groupRulePeopleCondition");
var groupRuleStatus_1 = require("./groupRuleStatus");
var groupRuleUserCondition_1 = require("./groupRuleUserCondition");
var groupSchema_1 = require("./groupSchema");
var groupSchemaAttribute_1 = require("./groupSchemaAttribute");
var groupSchemaBase_1 = require("./groupSchemaBase");
var groupSchemaBaseProperties_1 = require("./groupSchemaBaseProperties");
var groupSchemaCustom_1 = require("./groupSchemaCustom");
var groupSchemaDefinitions_1 = require("./groupSchemaDefinitions");
var groupType_1 = require("./groupType");
var hardwareUserFactor_1 = require("./hardwareUserFactor");
var hardwareUserFactorProfile_1 = require("./hardwareUserFactorProfile");
var hrefObject_1 = require("./hrefObject");
var hrefObjectHints_1 = require("./hrefObjectHints");
var identityProvider_1 = require("./identityProvider");
var identityProviderApplicationUser_1 = require("./identityProviderApplicationUser");
var identityProviderCredentials_1 = require("./identityProviderCredentials");
var identityProviderCredentialsClient_1 = require("./identityProviderCredentialsClient");
var identityProviderCredentialsSigning_1 = require("./identityProviderCredentialsSigning");
var identityProviderCredentialsTrust_1 = require("./identityProviderCredentialsTrust");
var identityProviderPolicy_1 = require("./identityProviderPolicy");
var identityProviderPolicyRuleCondition_1 = require("./identityProviderPolicyRuleCondition");
var inactivityPolicyRuleCondition_1 = require("./inactivityPolicyRuleCondition");
var inlineHook_1 = require("./inlineHook");
var inlineHookChannel_1 = require("./inlineHookChannel");
var inlineHookChannelConfig_1 = require("./inlineHookChannelConfig");
var inlineHookChannelConfigAuthScheme_1 = require("./inlineHookChannelConfigAuthScheme");
var inlineHookChannelConfigHeaders_1 = require("./inlineHookChannelConfigHeaders");
var inlineHookResponse_1 = require("./inlineHookResponse");
var inlineHookResponseCommandValue_1 = require("./inlineHookResponseCommandValue");
var inlineHookResponseCommands_1 = require("./inlineHookResponseCommands");
var inlineHookStatus_1 = require("./inlineHookStatus");
var inlineHookType_1 = require("./inlineHookType");
var ionField_1 = require("./ionField");
var ionForm_1 = require("./ionForm");
var jsonWebKey_1 = require("./jsonWebKey");
var jwkUse_1 = require("./jwkUse");
var lifecycleExpirationPolicyRuleCondition_1 = require("./lifecycleExpirationPolicyRuleCondition");
var linkedObject_1 = require("./linkedObject");
var linkedObjectDetails_1 = require("./linkedObjectDetails");
var linkedObjectDetailsType_1 = require("./linkedObjectDetailsType");
var logActor_1 = require("./logActor");
var logAuthenticationContext_1 = require("./logAuthenticationContext");
var logAuthenticationProvider_1 = require("./logAuthenticationProvider");
var logClient_1 = require("./logClient");
var logCredentialProvider_1 = require("./logCredentialProvider");
var logCredentialType_1 = require("./logCredentialType");
var logDebugContext_1 = require("./logDebugContext");
var logEvent_1 = require("./logEvent");
var logGeographicalContext_1 = require("./logGeographicalContext");
var logGeolocation_1 = require("./logGeolocation");
var logIpAddress_1 = require("./logIpAddress");
var logIssuer_1 = require("./logIssuer");
var logOutcome_1 = require("./logOutcome");
var logRequest_1 = require("./logRequest");
var logSecurityContext_1 = require("./logSecurityContext");
var logSeverity_1 = require("./logSeverity");
var logTarget_1 = require("./logTarget");
var logTransaction_1 = require("./logTransaction");
var logUserAgent_1 = require("./logUserAgent");
var mDMEnrollmentPolicyRuleCondition_1 = require("./mDMEnrollmentPolicyRuleCondition");
var modelError_1 = require("./modelError");
var networkZone_1 = require("./networkZone");
var networkZoneAddress_1 = require("./networkZoneAddress");
var networkZoneAddressType_1 = require("./networkZoneAddressType");
var networkZoneLocation_1 = require("./networkZoneLocation");
var networkZoneStatus_1 = require("./networkZoneStatus");
var networkZoneType_1 = require("./networkZoneType");
var networkZoneUsage_1 = require("./networkZoneUsage");
var oAuth2Actor_1 = require("./oAuth2Actor");
var oAuth2Claim_1 = require("./oAuth2Claim");
var oAuth2ClaimConditions_1 = require("./oAuth2ClaimConditions");
var oAuth2Client_1 = require("./oAuth2Client");
var oAuth2RefreshToken_1 = require("./oAuth2RefreshToken");
var oAuth2Scope_1 = require("./oAuth2Scope");
var oAuth2ScopeConsentGrant_1 = require("./oAuth2ScopeConsentGrant");
var oAuth2ScopeConsentGrantSource_1 = require("./oAuth2ScopeConsentGrantSource");
var oAuth2ScopeConsentGrantStatus_1 = require("./oAuth2ScopeConsentGrantStatus");
var oAuth2ScopesMediationPolicyRuleCondition_1 = require("./oAuth2ScopesMediationPolicyRuleCondition");
var oAuth2Token_1 = require("./oAuth2Token");
var oAuthApplicationCredentials_1 = require("./oAuthApplicationCredentials");
var oAuthEndpointAuthenticationMethod_1 = require("./oAuthEndpointAuthenticationMethod");
var oAuthGrantType_1 = require("./oAuthGrantType");
var oAuthResponseType_1 = require("./oAuthResponseType");
var oktaSignOnPolicy_1 = require("./oktaSignOnPolicy");
var oktaSignOnPolicyConditions_1 = require("./oktaSignOnPolicyConditions");
var oktaSignOnPolicyRule_1 = require("./oktaSignOnPolicyRule");
var oktaSignOnPolicyRuleActions_1 = require("./oktaSignOnPolicyRuleActions");
var oktaSignOnPolicyRuleConditions_1 = require("./oktaSignOnPolicyRuleConditions");
var oktaSignOnPolicyRuleSignonActions_1 = require("./oktaSignOnPolicyRuleSignonActions");
var oktaSignOnPolicyRuleSignonSessionActions_1 = require("./oktaSignOnPolicyRuleSignonSessionActions");
var openIdConnectApplication_1 = require("./openIdConnectApplication");
var openIdConnectApplicationConsentMethod_1 = require("./openIdConnectApplicationConsentMethod");
var openIdConnectApplicationIdpInitiatedLogin_1 = require("./openIdConnectApplicationIdpInitiatedLogin");
var openIdConnectApplicationIssuerMode_1 = require("./openIdConnectApplicationIssuerMode");
var openIdConnectApplicationSettings_1 = require("./openIdConnectApplicationSettings");
var openIdConnectApplicationSettingsClient_1 = require("./openIdConnectApplicationSettingsClient");
var openIdConnectApplicationSettingsClientKeys_1 = require("./openIdConnectApplicationSettingsClientKeys");
var openIdConnectApplicationSettingsRefreshToken_1 = require("./openIdConnectApplicationSettingsRefreshToken");
var openIdConnectApplicationType_1 = require("./openIdConnectApplicationType");
var openIdConnectRefreshTokenRotationType_1 = require("./openIdConnectRefreshTokenRotationType");
var orgContactType_1 = require("./orgContactType");
var orgContactTypeObj_1 = require("./orgContactTypeObj");
var orgContactUser_1 = require("./orgContactUser");
var orgOktaCommunicationSetting_1 = require("./orgOktaCommunicationSetting");
var orgOktaSupportSetting_1 = require("./orgOktaSupportSetting");
var orgOktaSupportSettingsObj_1 = require("./orgOktaSupportSettingsObj");
var orgPreferences_1 = require("./orgPreferences");
var orgSetting_1 = require("./orgSetting");
var passwordCredential_1 = require("./passwordCredential");
var passwordCredentialHash_1 = require("./passwordCredentialHash");
var passwordCredentialHashAlgorithm_1 = require("./passwordCredentialHashAlgorithm");
var passwordCredentialHook_1 = require("./passwordCredentialHook");
var passwordDictionary_1 = require("./passwordDictionary");
var passwordDictionaryCommon_1 = require("./passwordDictionaryCommon");
var passwordExpirationPolicyRuleCondition_1 = require("./passwordExpirationPolicyRuleCondition");
var passwordPolicy_1 = require("./passwordPolicy");
var passwordPolicyAuthenticationProviderCondition_1 = require("./passwordPolicyAuthenticationProviderCondition");
var passwordPolicyConditions_1 = require("./passwordPolicyConditions");
var passwordPolicyDelegationSettings_1 = require("./passwordPolicyDelegationSettings");
var passwordPolicyDelegationSettingsOptions_1 = require("./passwordPolicyDelegationSettingsOptions");
var passwordPolicyPasswordSettings_1 = require("./passwordPolicyPasswordSettings");
var passwordPolicyPasswordSettingsAge_1 = require("./passwordPolicyPasswordSettingsAge");
var passwordPolicyPasswordSettingsComplexity_1 = require("./passwordPolicyPasswordSettingsComplexity");
var passwordPolicyPasswordSettingsLockout_1 = require("./passwordPolicyPasswordSettingsLockout");
var passwordPolicyRecoveryEmail_1 = require("./passwordPolicyRecoveryEmail");
var passwordPolicyRecoveryEmailProperties_1 = require("./passwordPolicyRecoveryEmailProperties");
var passwordPolicyRecoveryEmailRecoveryToken_1 = require("./passwordPolicyRecoveryEmailRecoveryToken");
var passwordPolicyRecoveryFactorSettings_1 = require("./passwordPolicyRecoveryFactorSettings");
var passwordPolicyRecoveryFactors_1 = require("./passwordPolicyRecoveryFactors");
var passwordPolicyRecoveryQuestion_1 = require("./passwordPolicyRecoveryQuestion");
var passwordPolicyRecoveryQuestionComplexity_1 = require("./passwordPolicyRecoveryQuestionComplexity");
var passwordPolicyRecoveryQuestionProperties_1 = require("./passwordPolicyRecoveryQuestionProperties");
var passwordPolicyRecoverySettings_1 = require("./passwordPolicyRecoverySettings");
var passwordPolicyRule_1 = require("./passwordPolicyRule");
var passwordPolicyRuleAction_1 = require("./passwordPolicyRuleAction");
var passwordPolicyRuleActions_1 = require("./passwordPolicyRuleActions");
var passwordPolicyRuleConditions_1 = require("./passwordPolicyRuleConditions");
var passwordPolicySettings_1 = require("./passwordPolicySettings");
var platformConditionEvaluatorPlatform_1 = require("./platformConditionEvaluatorPlatform");
var platformConditionEvaluatorPlatformOperatingSystem_1 = require("./platformConditionEvaluatorPlatformOperatingSystem");
var platformConditionEvaluatorPlatformOperatingSystemVersion_1 = require("./platformConditionEvaluatorPlatformOperatingSystemVersion");
var platformPolicyRuleCondition_1 = require("./platformPolicyRuleCondition");
var policy_1 = require("./policy");
var policyAccountLink_1 = require("./policyAccountLink");
var policyAccountLinkFilter_1 = require("./policyAccountLinkFilter");
var policyAccountLinkFilterGroups_1 = require("./policyAccountLinkFilterGroups");
var policyNetworkCondition_1 = require("./policyNetworkCondition");
var policyPeopleCondition_1 = require("./policyPeopleCondition");
var policyRule_1 = require("./policyRule");
var policyRuleActions_1 = require("./policyRuleActions");
var policyRuleActionsEnroll_1 = require("./policyRuleActionsEnroll");
var policyRuleActionsEnrollSelf_1 = require("./policyRuleActionsEnrollSelf");
var policyRuleAuthContextCondition_1 = require("./policyRuleAuthContextCondition");
var policyRuleConditions_1 = require("./policyRuleConditions");
var policySubject_1 = require("./policySubject");
var policySubjectMatchType_1 = require("./policySubjectMatchType");
var policyType_1 = require("./policyType");
var policyUserNameTemplate_1 = require("./policyUserNameTemplate");
var profileMapping_1 = require("./profileMapping");
var profileMappingProperty_1 = require("./profileMappingProperty");
var profileMappingPropertyPushStatus_1 = require("./profileMappingPropertyPushStatus");
var profileMappingSource_1 = require("./profileMappingSource");
var protocol_1 = require("./protocol");
var protocolAlgorithmType_1 = require("./protocolAlgorithmType");
var protocolAlgorithmTypeSignature_1 = require("./protocolAlgorithmTypeSignature");
var protocolAlgorithms_1 = require("./protocolAlgorithms");
var protocolEndpoint_1 = require("./protocolEndpoint");
var protocolEndpoints_1 = require("./protocolEndpoints");
var protocolRelayState_1 = require("./protocolRelayState");
var protocolRelayStateFormat_1 = require("./protocolRelayStateFormat");
var protocolSettings_1 = require("./protocolSettings");
var provisioning_1 = require("./provisioning");
var provisioningConditions_1 = require("./provisioningConditions");
var provisioningDeprovisionedCondition_1 = require("./provisioningDeprovisionedCondition");
var provisioningGroups_1 = require("./provisioningGroups");
var provisioningSuspendedCondition_1 = require("./provisioningSuspendedCondition");
var pushUserFactor_1 = require("./pushUserFactor");
var pushUserFactorProfile_1 = require("./pushUserFactorProfile");
var recoveryQuestionCredential_1 = require("./recoveryQuestionCredential");
var resetPasswordToken_1 = require("./resetPasswordToken");
var riskPolicyRuleCondition_1 = require("./riskPolicyRuleCondition");
var riskScorePolicyRuleCondition_1 = require("./riskScorePolicyRuleCondition");
var role_1 = require("./role");
var roleAssignmentType_1 = require("./roleAssignmentType");
var roleStatus_1 = require("./roleStatus");
var roleType_1 = require("./roleType");
var samlApplication_1 = require("./samlApplication");
var samlApplicationSettings_1 = require("./samlApplicationSettings");
var samlApplicationSettingsSignOn_1 = require("./samlApplicationSettingsSignOn");
var samlAttributeStatement_1 = require("./samlAttributeStatement");
var scheduledUserLifecycleAction_1 = require("./scheduledUserLifecycleAction");
var schemeApplicationCredentials_1 = require("./schemeApplicationCredentials");
var scope_1 = require("./scope");
var scopeType_1 = require("./scopeType");
var securePasswordStoreApplication_1 = require("./securePasswordStoreApplication");
var securePasswordStoreApplicationSettings_1 = require("./securePasswordStoreApplicationSettings");
var securePasswordStoreApplicationSettingsApplication_1 = require("./securePasswordStoreApplicationSettingsApplication");
var securityQuestion_1 = require("./securityQuestion");
var securityQuestionUserFactor_1 = require("./securityQuestionUserFactor");
var securityQuestionUserFactorProfile_1 = require("./securityQuestionUserFactorProfile");
var session_1 = require("./session");
var sessionAuthenticationMethod_1 = require("./sessionAuthenticationMethod");
var sessionIdentityProvider_1 = require("./sessionIdentityProvider");
var sessionIdentityProviderType_1 = require("./sessionIdentityProviderType");
var sessionStatus_1 = require("./sessionStatus");
var signOnInlineHook_1 = require("./signOnInlineHook");
var singleLogout_1 = require("./singleLogout");
var smsTemplate_1 = require("./smsTemplate");
var smsTemplateType_1 = require("./smsTemplateType");
var smsUserFactor_1 = require("./smsUserFactor");
var smsUserFactorProfile_1 = require("./smsUserFactorProfile");
var socialAuthToken_1 = require("./socialAuthToken");
var spCertificate_1 = require("./spCertificate");
var swaApplication_1 = require("./swaApplication");
var swaApplicationSettings_1 = require("./swaApplicationSettings");
var swaApplicationSettingsApplication_1 = require("./swaApplicationSettingsApplication");
var swaThreeFieldApplication_1 = require("./swaThreeFieldApplication");
var swaThreeFieldApplicationSettings_1 = require("./swaThreeFieldApplicationSettings");
var swaThreeFieldApplicationSettingsApplication_1 = require("./swaThreeFieldApplicationSettingsApplication");
var tempPassword_1 = require("./tempPassword");
var threatInsightConfiguration_1 = require("./threatInsightConfiguration");
var tokenAuthorizationServerPolicyRuleAction_1 = require("./tokenAuthorizationServerPolicyRuleAction");
var tokenAuthorizationServerPolicyRuleActionInlineHook_1 = require("./tokenAuthorizationServerPolicyRuleActionInlineHook");
var tokenUserFactor_1 = require("./tokenUserFactor");
var tokenUserFactorProfile_1 = require("./tokenUserFactorProfile");
var totpUserFactor_1 = require("./totpUserFactor");
var totpUserFactorProfile_1 = require("./totpUserFactorProfile");
var trustedOrigin_1 = require("./trustedOrigin");
var u2fUserFactor_1 = require("./u2fUserFactor");
var u2fUserFactorProfile_1 = require("./u2fUserFactorProfile");
var user_1 = require("./user");
var userActivationToken_1 = require("./userActivationToken");
var userCondition_1 = require("./userCondition");
var userCredentials_1 = require("./userCredentials");
var userFactor_1 = require("./userFactor");
var userIdString_1 = require("./userIdString");
var userIdentifierConditionEvaluatorPattern_1 = require("./userIdentifierConditionEvaluatorPattern");
var userIdentifierPolicyRuleCondition_1 = require("./userIdentifierPolicyRuleCondition");
var userIdentityProviderLinkRequest_1 = require("./userIdentityProviderLinkRequest");
var userLifecycleAttributePolicyRuleCondition_1 = require("./userLifecycleAttributePolicyRuleCondition");
var userNextLogin_1 = require("./userNextLogin");
var userPolicyRuleCondition_1 = require("./userPolicyRuleCondition");
var userProfile_1 = require("./userProfile");
var userSchema_1 = require("./userSchema");
var userSchemaAttribute_1 = require("./userSchemaAttribute");
var userSchemaAttributeEnum_1 = require("./userSchemaAttributeEnum");
var userSchemaAttributeItems_1 = require("./userSchemaAttributeItems");
var userSchemaAttributeMaster_1 = require("./userSchemaAttributeMaster");
var userSchemaAttributeMasterPriority_1 = require("./userSchemaAttributeMasterPriority");
var userSchemaAttributeMasterType_1 = require("./userSchemaAttributeMasterType");
var userSchemaAttributePermission_1 = require("./userSchemaAttributePermission");
var userSchemaAttributeScope_1 = require("./userSchemaAttributeScope");
var userSchemaAttributeType_1 = require("./userSchemaAttributeType");
var userSchemaAttributeUnion_1 = require("./userSchemaAttributeUnion");
var userSchemaBase_1 = require("./userSchemaBase");
var userSchemaBaseProperties_1 = require("./userSchemaBaseProperties");
var userSchemaDefinitions_1 = require("./userSchemaDefinitions");
var userSchemaProperties_1 = require("./userSchemaProperties");
var userSchemaPropertiesProfile_1 = require("./userSchemaPropertiesProfile");
var userSchemaPropertiesProfileItem_1 = require("./userSchemaPropertiesProfileItem");
var userSchemaPublic_1 = require("./userSchemaPublic");
var userStatus_1 = require("./userStatus");
var userStatusPolicyRuleCondition_1 = require("./userStatusPolicyRuleCondition");
var userType_1 = require("./userType");
var verifyFactorRequest_1 = require("./verifyFactorRequest");
var verifyUserFactorResponse_1 = require("./verifyUserFactorResponse");
var webAuthnUserFactor_1 = require("./webAuthnUserFactor");
var webAuthnUserFactorProfile_1 = require("./webAuthnUserFactorProfile");
var webUserFactor_1 = require("./webUserFactor");
var webUserFactorProfile_1 = require("./webUserFactorProfile");
var wsFederationApplication_1 = require("./wsFederationApplication");
var wsFederationApplicationSettings_1 = require("./wsFederationApplicationSettings");
var wsFederationApplicationSettingsApplication_1 = require("./wsFederationApplicationSettingsApplication");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AllowedForEnum": allowedForEnum_1.AllowedForEnum,
    "AppAndInstanceConditionEvaluatorAppOrInstance.TypeEnum": appAndInstanceConditionEvaluatorAppOrInstance_1.AppAndInstanceConditionEvaluatorAppOrInstance.TypeEnum,
    "Application.StatusEnum": application_1.Application.StatusEnum,
    "ApplicationCredentialsScheme": applicationCredentialsScheme_1.ApplicationCredentialsScheme,
    "ApplicationCredentialsSigningUse": applicationCredentialsSigningUse_1.ApplicationCredentialsSigningUse,
    "ApplicationSignOnMode": applicationSignOnMode_1.ApplicationSignOnMode,
    "AuthenticationProviderType": authenticationProviderType_1.AuthenticationProviderType,
    "AuthenticatorStatus": authenticatorStatus_1.AuthenticatorStatus,
    "AuthenticatorType": authenticatorType_1.AuthenticatorType,
    "AuthorizationServer.IssuerModeEnum": authorizationServer_1.AuthorizationServer.IssuerModeEnum,
    "AuthorizationServer.StatusEnum": authorizationServer_1.AuthorizationServer.StatusEnum,
    "AuthorizationServerCredentialsRotationMode": authorizationServerCredentialsRotationMode_1.AuthorizationServerCredentialsRotationMode,
    "AuthorizationServerCredentialsUse": authorizationServerCredentialsUse_1.AuthorizationServerCredentialsUse,
    "AuthorizationServerPolicy.StatusEnum": authorizationServerPolicy_1.AuthorizationServerPolicy.StatusEnum,
    "AuthorizationServerPolicyRule.StatusEnum": authorizationServerPolicyRule_1.AuthorizationServerPolicyRule.StatusEnum,
    "AuthorizationServerPolicyRule.TypeEnum": authorizationServerPolicyRule_1.AuthorizationServerPolicyRule.TypeEnum,
    "CAPTCHAInstance.TypeEnum": cAPTCHAInstance_1.CAPTCHAInstance.TypeEnum,
    "CatalogApplicationStatus": catalogApplicationStatus_1.CatalogApplicationStatus,
    "DNSRecordType": dNSRecordType_1.DNSRecordType,
    "DevicePolicyRuleCondition.TrustLevelEnum": devicePolicyRuleCondition_1.DevicePolicyRuleCondition.TrustLevelEnum,
    "DevicePolicyRuleConditionPlatform.SupportedMDMFrameworksEnum": devicePolicyRuleConditionPlatform_1.DevicePolicyRuleConditionPlatform.SupportedMDMFrameworksEnum,
    "DevicePolicyRuleConditionPlatform.TypesEnum": devicePolicyRuleConditionPlatform_1.DevicePolicyRuleConditionPlatform.TypesEnum,
    "DomainCertificateSourceType": domainCertificateSourceType_1.DomainCertificateSourceType,
    "DomainCertificateType": domainCertificateType_1.DomainCertificateType,
    "DomainResponse.CertificateSourceTypeEnum": domainResponse_1.DomainResponse.CertificateSourceTypeEnum,
    "DomainResponse.ValidationStatusEnum": domainResponse_1.DomainResponse.ValidationStatusEnum,
    "DomainValidationStatus": domainValidationStatus_1.DomainValidationStatus,
    "EnabledStatus": enabledStatus_1.EnabledStatus,
    "EventHook.StatusEnum": eventHook_1.EventHook.StatusEnum,
    "EventHook.VerificationStatusEnum": eventHook_1.EventHook.VerificationStatusEnum,
    "EventHookChannel.TypeEnum": eventHookChannel_1.EventHookChannel.TypeEnum,
    "EventHookChannelConfigAuthSchemeType": eventHookChannelConfigAuthSchemeType_1.EventHookChannelConfigAuthSchemeType,
    "EventSubscriptions.TypeEnum": eventSubscriptions_1.EventSubscriptions.TypeEnum,
    "FactorProvider": factorProvider_1.FactorProvider,
    "FactorResultType": factorResultType_1.FactorResultType,
    "FactorStatus": factorStatus_1.FactorStatus,
    "FactorType": factorType_1.FactorType,
    "FeatureStageState": featureStageState_1.FeatureStageState,
    "FeatureStageValue": featureStageValue_1.FeatureStageValue,
    "FeatureType": featureType_1.FeatureType,
    "GroupRuleStatus": groupRuleStatus_1.GroupRuleStatus,
    "GroupType": groupType_1.GroupType,
    "HrefObjectHints.AllowEnum": hrefObjectHints_1.HrefObjectHints.AllowEnum,
    "IdentityProvider.IssuerModeEnum": identityProvider_1.IdentityProvider.IssuerModeEnum,
    "IdentityProvider.StatusEnum": identityProvider_1.IdentityProvider.StatusEnum,
    "IdentityProviderCredentialsTrust.RevocationEnum": identityProviderCredentialsTrust_1.IdentityProviderCredentialsTrust.RevocationEnum,
    "IdentityProviderPolicyRuleCondition.ProviderEnum": identityProviderPolicyRuleCondition_1.IdentityProviderPolicyRuleCondition.ProviderEnum,
    "InlineHookChannel.TypeEnum": inlineHookChannel_1.InlineHookChannel.TypeEnum,
    "InlineHookStatus": inlineHookStatus_1.InlineHookStatus,
    "InlineHookType": inlineHookType_1.InlineHookType,
    "JwkUse.UseEnum": jwkUse_1.JwkUse.UseEnum,
    "LinkedObjectDetailsType": linkedObjectDetailsType_1.LinkedObjectDetailsType,
    "LogAuthenticationProvider": logAuthenticationProvider_1.LogAuthenticationProvider,
    "LogCredentialProvider": logCredentialProvider_1.LogCredentialProvider,
    "LogCredentialType": logCredentialType_1.LogCredentialType,
    "LogSeverity": logSeverity_1.LogSeverity,
    "MDMEnrollmentPolicyRuleCondition.EnrollmentEnum": mDMEnrollmentPolicyRuleCondition_1.MDMEnrollmentPolicyRuleCondition.EnrollmentEnum,
    "NetworkZoneAddressType": networkZoneAddressType_1.NetworkZoneAddressType,
    "NetworkZoneStatus": networkZoneStatus_1.NetworkZoneStatus,
    "NetworkZoneType": networkZoneType_1.NetworkZoneType,
    "NetworkZoneUsage": networkZoneUsage_1.NetworkZoneUsage,
    "OAuth2Claim.ClaimTypeEnum": oAuth2Claim_1.OAuth2Claim.ClaimTypeEnum,
    "OAuth2Claim.GroupFilterTypeEnum": oAuth2Claim_1.OAuth2Claim.GroupFilterTypeEnum,
    "OAuth2Claim.StatusEnum": oAuth2Claim_1.OAuth2Claim.StatusEnum,
    "OAuth2Claim.ValueTypeEnum": oAuth2Claim_1.OAuth2Claim.ValueTypeEnum,
    "OAuth2RefreshToken.StatusEnum": oAuth2RefreshToken_1.OAuth2RefreshToken.StatusEnum,
    "OAuth2Scope.ConsentEnum": oAuth2Scope_1.OAuth2Scope.ConsentEnum,
    "OAuth2Scope.MetadataPublishEnum": oAuth2Scope_1.OAuth2Scope.MetadataPublishEnum,
    "OAuth2ScopeConsentGrantSource": oAuth2ScopeConsentGrantSource_1.OAuth2ScopeConsentGrantSource,
    "OAuth2ScopeConsentGrantStatus": oAuth2ScopeConsentGrantStatus_1.OAuth2ScopeConsentGrantStatus,
    "OAuth2Token.StatusEnum": oAuth2Token_1.OAuth2Token.StatusEnum,
    "OAuthEndpointAuthenticationMethod": oAuthEndpointAuthenticationMethod_1.OAuthEndpointAuthenticationMethod,
    "OAuthGrantType": oAuthGrantType_1.OAuthGrantType,
    "OAuthResponseType": oAuthResponseType_1.OAuthResponseType,
    "OktaSignOnPolicyRuleSignonActions.AccessEnum": oktaSignOnPolicyRuleSignonActions_1.OktaSignOnPolicyRuleSignonActions.AccessEnum,
    "OktaSignOnPolicyRuleSignonActions.FactorPromptModeEnum": oktaSignOnPolicyRuleSignonActions_1.OktaSignOnPolicyRuleSignonActions.FactorPromptModeEnum,
    "OpenIdConnectApplicationConsentMethod": openIdConnectApplicationConsentMethod_1.OpenIdConnectApplicationConsentMethod,
    "OpenIdConnectApplicationIssuerMode": openIdConnectApplicationIssuerMode_1.OpenIdConnectApplicationIssuerMode,
    "OpenIdConnectApplicationType": openIdConnectApplicationType_1.OpenIdConnectApplicationType,
    "OpenIdConnectRefreshTokenRotationType": openIdConnectRefreshTokenRotationType_1.OpenIdConnectRefreshTokenRotationType,
    "OrgContactType": orgContactType_1.OrgContactType,
    "OrgOktaSupportSetting": orgOktaSupportSetting_1.OrgOktaSupportSetting,
    "PasswordCredentialHashAlgorithm": passwordCredentialHashAlgorithm_1.PasswordCredentialHashAlgorithm,
    "PasswordPolicyAuthenticationProviderCondition.ProviderEnum": passwordPolicyAuthenticationProviderCondition_1.PasswordPolicyAuthenticationProviderCondition.ProviderEnum,
    "PasswordPolicyRecoveryEmail.StatusEnum": passwordPolicyRecoveryEmail_1.PasswordPolicyRecoveryEmail.StatusEnum,
    "PasswordPolicyRecoveryFactorSettings.StatusEnum": passwordPolicyRecoveryFactorSettings_1.PasswordPolicyRecoveryFactorSettings.StatusEnum,
    "PasswordPolicyRecoveryQuestion.StatusEnum": passwordPolicyRecoveryQuestion_1.PasswordPolicyRecoveryQuestion.StatusEnum,
    "PasswordPolicyRuleAction.AccessEnum": passwordPolicyRuleAction_1.PasswordPolicyRuleAction.AccessEnum,
    "PlatformConditionEvaluatorPlatform.TypeEnum": platformConditionEvaluatorPlatform_1.PlatformConditionEvaluatorPlatform.TypeEnum,
    "PlatformConditionEvaluatorPlatformOperatingSystem.TypeEnum": platformConditionEvaluatorPlatformOperatingSystem_1.PlatformConditionEvaluatorPlatformOperatingSystem.TypeEnum,
    "PlatformConditionEvaluatorPlatformOperatingSystemVersion.MatchTypeEnum": platformConditionEvaluatorPlatformOperatingSystemVersion_1.PlatformConditionEvaluatorPlatformOperatingSystemVersion.MatchTypeEnum,
    "Policy.StatusEnum": policy_1.Policy.StatusEnum,
    "PolicyAccountLink.ActionEnum": policyAccountLink_1.PolicyAccountLink.ActionEnum,
    "PolicyNetworkCondition.ConnectionEnum": policyNetworkCondition_1.PolicyNetworkCondition.ConnectionEnum,
    "PolicyRule.StatusEnum": policyRule_1.PolicyRule.StatusEnum,
    "PolicyRule.TypeEnum": policyRule_1.PolicyRule.TypeEnum,
    "PolicyRuleActionsEnrollSelf": policyRuleActionsEnrollSelf_1.PolicyRuleActionsEnrollSelf,
    "PolicyRuleAuthContextCondition.AuthTypeEnum": policyRuleAuthContextCondition_1.PolicyRuleAuthContextCondition.AuthTypeEnum,
    "PolicySubjectMatchType": policySubjectMatchType_1.PolicySubjectMatchType,
    "PolicyType": policyType_1.PolicyType,
    "ProfileMappingPropertyPushStatus": profileMappingPropertyPushStatus_1.ProfileMappingPropertyPushStatus,
    "Protocol.TypeEnum": protocol_1.Protocol.TypeEnum,
    "ProtocolAlgorithmTypeSignature.ScopeEnum": protocolAlgorithmTypeSignature_1.ProtocolAlgorithmTypeSignature.ScopeEnum,
    "ProtocolEndpoint.BindingEnum": protocolEndpoint_1.ProtocolEndpoint.BindingEnum,
    "ProtocolEndpoint.TypeEnum": protocolEndpoint_1.ProtocolEndpoint.TypeEnum,
    "ProtocolRelayStateFormat": protocolRelayStateFormat_1.ProtocolRelayStateFormat,
    "Provisioning.ActionEnum": provisioning_1.Provisioning.ActionEnum,
    "ProvisioningDeprovisionedCondition.ActionEnum": provisioningDeprovisionedCondition_1.ProvisioningDeprovisionedCondition.ActionEnum,
    "ProvisioningGroups.ActionEnum": provisioningGroups_1.ProvisioningGroups.ActionEnum,
    "ProvisioningSuspendedCondition.ActionEnum": provisioningSuspendedCondition_1.ProvisioningSuspendedCondition.ActionEnum,
    "RoleAssignmentType": roleAssignmentType_1.RoleAssignmentType,
    "RoleStatus": roleStatus_1.RoleStatus,
    "RoleType": roleType_1.RoleType,
    "ScheduledUserLifecycleAction.StatusEnum": scheduledUserLifecycleAction_1.ScheduledUserLifecycleAction.StatusEnum,
    "ScopeType": scopeType_1.ScopeType,
    "SessionAuthenticationMethod": sessionAuthenticationMethod_1.SessionAuthenticationMethod,
    "SessionIdentityProviderType": sessionIdentityProviderType_1.SessionIdentityProviderType,
    "SessionStatus": sessionStatus_1.SessionStatus,
    "SmsTemplateType": smsTemplateType_1.SmsTemplateType,
    "SocialAuthToken.TokenTypeEnum": socialAuthToken_1.SocialAuthToken.TokenTypeEnum,
    "UserIdentifierConditionEvaluatorPattern.MatchTypeEnum": userIdentifierConditionEvaluatorPattern_1.UserIdentifierConditionEvaluatorPattern.MatchTypeEnum,
    "UserIdentifierPolicyRuleCondition.TypeEnum": userIdentifierPolicyRuleCondition_1.UserIdentifierPolicyRuleCondition.TypeEnum,
    "UserNextLogin": userNextLogin_1.UserNextLogin,
    "UserSchemaAttributeMasterType": userSchemaAttributeMasterType_1.UserSchemaAttributeMasterType,
    "UserSchemaAttributeScope": userSchemaAttributeScope_1.UserSchemaAttributeScope,
    "UserSchemaAttributeType": userSchemaAttributeType_1.UserSchemaAttributeType,
    "UserSchemaAttributeUnion": userSchemaAttributeUnion_1.UserSchemaAttributeUnion,
    "UserStatus": userStatus_1.UserStatus,
    "UserStatusPolicyRuleCondition.ValueEnum": userStatusPolicyRuleCondition_1.UserStatusPolicyRuleCondition.ValueEnum,
    "VerifyUserFactorResponse.FactorResultEnum": verifyUserFactorResponse_1.VerifyUserFactorResponse.FactorResultEnum,
};
var typeMap = {
    "AcsEndpoint": acsEndpoint_1.AcsEndpoint,
    "ActivateFactorRequest": activateFactorRequest_1.ActivateFactorRequest,
    "AppAndInstanceConditionEvaluatorAppOrInstance": appAndInstanceConditionEvaluatorAppOrInstance_1.AppAndInstanceConditionEvaluatorAppOrInstance,
    "AppAndInstancePolicyRuleCondition": appAndInstancePolicyRuleCondition_1.AppAndInstancePolicyRuleCondition,
    "AppInstancePolicyRuleCondition": appInstancePolicyRuleCondition_1.AppInstancePolicyRuleCondition,
    "AppLink": appLink_1.AppLink,
    "AppUser": appUser_1.AppUser,
    "AppUserCredentials": appUserCredentials_1.AppUserCredentials,
    "AppUserPasswordCredential": appUserPasswordCredential_1.AppUserPasswordCredential,
    "Application": application_1.Application,
    "ApplicationAccessibility": applicationAccessibility_1.ApplicationAccessibility,
    "ApplicationCredentials": applicationCredentials_1.ApplicationCredentials,
    "ApplicationCredentialsOAuthClient": applicationCredentialsOAuthClient_1.ApplicationCredentialsOAuthClient,
    "ApplicationCredentialsSigning": applicationCredentialsSigning_1.ApplicationCredentialsSigning,
    "ApplicationCredentialsUsernameTemplate": applicationCredentialsUsernameTemplate_1.ApplicationCredentialsUsernameTemplate,
    "ApplicationGroupAssignment": applicationGroupAssignment_1.ApplicationGroupAssignment,
    "ApplicationLicensing": applicationLicensing_1.ApplicationLicensing,
    "ApplicationSettings": applicationSettings_1.ApplicationSettings,
    "ApplicationSettingsNotes": applicationSettingsNotes_1.ApplicationSettingsNotes,
    "ApplicationSettingsNotifications": applicationSettingsNotifications_1.ApplicationSettingsNotifications,
    "ApplicationSettingsNotificationsVpn": applicationSettingsNotificationsVpn_1.ApplicationSettingsNotificationsVpn,
    "ApplicationSettingsNotificationsVpnNetwork": applicationSettingsNotificationsVpnNetwork_1.ApplicationSettingsNotificationsVpnNetwork,
    "ApplicationVisibility": applicationVisibility_1.ApplicationVisibility,
    "ApplicationVisibilityHide": applicationVisibilityHide_1.ApplicationVisibilityHide,
    "AssignRoleRequest": assignRoleRequest_1.AssignRoleRequest,
    "AuthenticationProvider": authenticationProvider_1.AuthenticationProvider,
    "Authenticator": authenticator_1.Authenticator,
    "AuthenticatorSettings": authenticatorSettings_1.AuthenticatorSettings,
    "AuthorizationServer": authorizationServer_1.AuthorizationServer,
    "AuthorizationServerCredentials": authorizationServerCredentials_1.AuthorizationServerCredentials,
    "AuthorizationServerCredentialsSigningConfig": authorizationServerCredentialsSigningConfig_1.AuthorizationServerCredentialsSigningConfig,
    "AuthorizationServerPolicy": authorizationServerPolicy_1.AuthorizationServerPolicy,
    "AuthorizationServerPolicyRule": authorizationServerPolicyRule_1.AuthorizationServerPolicyRule,
    "AuthorizationServerPolicyRuleActions": authorizationServerPolicyRuleActions_1.AuthorizationServerPolicyRuleActions,
    "AuthorizationServerPolicyRuleConditions": authorizationServerPolicyRuleConditions_1.AuthorizationServerPolicyRuleConditions,
    "AutoLoginApplication": autoLoginApplication_1.AutoLoginApplication,
    "AutoLoginApplicationSettings": autoLoginApplicationSettings_1.AutoLoginApplicationSettings,
    "AutoLoginApplicationSettingsSignOn": autoLoginApplicationSettingsSignOn_1.AutoLoginApplicationSettingsSignOn,
    "BasicApplicationSettings": basicApplicationSettings_1.BasicApplicationSettings,
    "BasicApplicationSettingsApplication": basicApplicationSettingsApplication_1.BasicApplicationSettingsApplication,
    "BasicAuthApplication": basicAuthApplication_1.BasicAuthApplication,
    "BeforeScheduledActionPolicyRuleCondition": beforeScheduledActionPolicyRuleCondition_1.BeforeScheduledActionPolicyRuleCondition,
    "BookmarkApplication": bookmarkApplication_1.BookmarkApplication,
    "BookmarkApplicationSettings": bookmarkApplicationSettings_1.BookmarkApplicationSettings,
    "BookmarkApplicationSettingsApplication": bookmarkApplicationSettingsApplication_1.BookmarkApplicationSettingsApplication,
    "BrowserPluginApplication": browserPluginApplication_1.BrowserPluginApplication,
    "CAPTCHAInstance": cAPTCHAInstance_1.CAPTCHAInstance,
    "CAPTCHAInstanceLink": cAPTCHAInstanceLink_1.CAPTCHAInstanceLink,
    "CallUserFactor": callUserFactor_1.CallUserFactor,
    "CallUserFactorProfile": callUserFactorProfile_1.CallUserFactorProfile,
    "CatalogApplication": catalogApplication_1.CatalogApplication,
    "ChangePasswordRequest": changePasswordRequest_1.ChangePasswordRequest,
    "ClientPolicyCondition": clientPolicyCondition_1.ClientPolicyCondition,
    "ContextPolicyRuleCondition": contextPolicyRuleCondition_1.ContextPolicyRuleCondition,
    "CreateSessionRequest": createSessionRequest_1.CreateSessionRequest,
    "CreateUserRequest": createUserRequest_1.CreateUserRequest,
    "Csr": csr_1.Csr,
    "CsrMetadata": csrMetadata_1.CsrMetadata,
    "CsrMetadataSubject": csrMetadataSubject_1.CsrMetadataSubject,
    "CsrMetadataSubjectAltNames": csrMetadataSubjectAltNames_1.CsrMetadataSubjectAltNames,
    "CustomHotpUserFactor": customHotpUserFactor_1.CustomHotpUserFactor,
    "CustomHotpUserFactorProfile": customHotpUserFactorProfile_1.CustomHotpUserFactorProfile,
    "DNSRecord": dNSRecord_1.DNSRecord,
    "DevicePolicyRuleCondition": devicePolicyRuleCondition_1.DevicePolicyRuleCondition,
    "DevicePolicyRuleConditionPlatform": devicePolicyRuleConditionPlatform_1.DevicePolicyRuleConditionPlatform,
    "Domain": domain_1.Domain,
    "DomainCertificate": domainCertificate_1.DomainCertificate,
    "DomainCertificateMetadata": domainCertificateMetadata_1.DomainCertificateMetadata,
    "DomainLinks": domainLinks_1.DomainLinks,
    "DomainListResponse": domainListResponse_1.DomainListResponse,
    "DomainResponse": domainResponse_1.DomainResponse,
    "Duration": duration_1.Duration,
    "EmailUserFactor": emailUserFactor_1.EmailUserFactor,
    "EmailUserFactorProfile": emailUserFactorProfile_1.EmailUserFactorProfile,
    "ErrorErrorCauses": errorErrorCauses_1.ErrorErrorCauses,
    "EventHook": eventHook_1.EventHook,
    "EventHookChannel": eventHookChannel_1.EventHookChannel,
    "EventHookChannelConfig": eventHookChannelConfig_1.EventHookChannelConfig,
    "EventHookChannelConfigAuthScheme": eventHookChannelConfigAuthScheme_1.EventHookChannelConfigAuthScheme,
    "EventHookChannelConfigHeader": eventHookChannelConfigHeader_1.EventHookChannelConfigHeader,
    "EventSubscriptions": eventSubscriptions_1.EventSubscriptions,
    "Feature": feature_1.Feature,
    "FeatureStage": featureStage_1.FeatureStage,
    "ForgotPasswordResponse": forgotPasswordResponse_1.ForgotPasswordResponse,
    "GrantTypePolicyRuleCondition": grantTypePolicyRuleCondition_1.GrantTypePolicyRuleCondition,
    "Group": group_1.Group,
    "GroupCondition": groupCondition_1.GroupCondition,
    "GroupPolicyRuleCondition": groupPolicyRuleCondition_1.GroupPolicyRuleCondition,
    "GroupProfile": groupProfile_1.GroupProfile,
    "GroupRule": groupRule_1.GroupRule,
    "GroupRuleAction": groupRuleAction_1.GroupRuleAction,
    "GroupRuleConditions": groupRuleConditions_1.GroupRuleConditions,
    "GroupRuleExpression": groupRuleExpression_1.GroupRuleExpression,
    "GroupRuleGroupAssignment": groupRuleGroupAssignment_1.GroupRuleGroupAssignment,
    "GroupRuleGroupCondition": groupRuleGroupCondition_1.GroupRuleGroupCondition,
    "GroupRulePeopleCondition": groupRulePeopleCondition_1.GroupRulePeopleCondition,
    "GroupRuleUserCondition": groupRuleUserCondition_1.GroupRuleUserCondition,
    "GroupSchema": groupSchema_1.GroupSchema,
    "GroupSchemaAttribute": groupSchemaAttribute_1.GroupSchemaAttribute,
    "GroupSchemaBase": groupSchemaBase_1.GroupSchemaBase,
    "GroupSchemaBaseProperties": groupSchemaBaseProperties_1.GroupSchemaBaseProperties,
    "GroupSchemaCustom": groupSchemaCustom_1.GroupSchemaCustom,
    "GroupSchemaDefinitions": groupSchemaDefinitions_1.GroupSchemaDefinitions,
    "HardwareUserFactor": hardwareUserFactor_1.HardwareUserFactor,
    "HardwareUserFactorProfile": hardwareUserFactorProfile_1.HardwareUserFactorProfile,
    "HrefObject": hrefObject_1.HrefObject,
    "HrefObjectHints": hrefObjectHints_1.HrefObjectHints,
    "IdentityProvider": identityProvider_1.IdentityProvider,
    "IdentityProviderApplicationUser": identityProviderApplicationUser_1.IdentityProviderApplicationUser,
    "IdentityProviderCredentials": identityProviderCredentials_1.IdentityProviderCredentials,
    "IdentityProviderCredentialsClient": identityProviderCredentialsClient_1.IdentityProviderCredentialsClient,
    "IdentityProviderCredentialsSigning": identityProviderCredentialsSigning_1.IdentityProviderCredentialsSigning,
    "IdentityProviderCredentialsTrust": identityProviderCredentialsTrust_1.IdentityProviderCredentialsTrust,
    "IdentityProviderPolicy": identityProviderPolicy_1.IdentityProviderPolicy,
    "IdentityProviderPolicyRuleCondition": identityProviderPolicyRuleCondition_1.IdentityProviderPolicyRuleCondition,
    "InactivityPolicyRuleCondition": inactivityPolicyRuleCondition_1.InactivityPolicyRuleCondition,
    "InlineHook": inlineHook_1.InlineHook,
    "InlineHookChannel": inlineHookChannel_1.InlineHookChannel,
    "InlineHookChannelConfig": inlineHookChannelConfig_1.InlineHookChannelConfig,
    "InlineHookChannelConfigAuthScheme": inlineHookChannelConfigAuthScheme_1.InlineHookChannelConfigAuthScheme,
    "InlineHookChannelConfigHeaders": inlineHookChannelConfigHeaders_1.InlineHookChannelConfigHeaders,
    "InlineHookResponse": inlineHookResponse_1.InlineHookResponse,
    "InlineHookResponseCommandValue": inlineHookResponseCommandValue_1.InlineHookResponseCommandValue,
    "InlineHookResponseCommands": inlineHookResponseCommands_1.InlineHookResponseCommands,
    "IonField": ionField_1.IonField,
    "IonForm": ionForm_1.IonForm,
    "JsonWebKey": jsonWebKey_1.JsonWebKey,
    "JwkUse": jwkUse_1.JwkUse,
    "LifecycleExpirationPolicyRuleCondition": lifecycleExpirationPolicyRuleCondition_1.LifecycleExpirationPolicyRuleCondition,
    "LinkedObject": linkedObject_1.LinkedObject,
    "LinkedObjectDetails": linkedObjectDetails_1.LinkedObjectDetails,
    "LogActor": logActor_1.LogActor,
    "LogAuthenticationContext": logAuthenticationContext_1.LogAuthenticationContext,
    "LogClient": logClient_1.LogClient,
    "LogDebugContext": logDebugContext_1.LogDebugContext,
    "LogEvent": logEvent_1.LogEvent,
    "LogGeographicalContext": logGeographicalContext_1.LogGeographicalContext,
    "LogGeolocation": logGeolocation_1.LogGeolocation,
    "LogIpAddress": logIpAddress_1.LogIpAddress,
    "LogIssuer": logIssuer_1.LogIssuer,
    "LogOutcome": logOutcome_1.LogOutcome,
    "LogRequest": logRequest_1.LogRequest,
    "LogSecurityContext": logSecurityContext_1.LogSecurityContext,
    "LogTarget": logTarget_1.LogTarget,
    "LogTransaction": logTransaction_1.LogTransaction,
    "LogUserAgent": logUserAgent_1.LogUserAgent,
    "MDMEnrollmentPolicyRuleCondition": mDMEnrollmentPolicyRuleCondition_1.MDMEnrollmentPolicyRuleCondition,
    "ModelError": modelError_1.ModelError,
    "NetworkZone": networkZone_1.NetworkZone,
    "NetworkZoneAddress": networkZoneAddress_1.NetworkZoneAddress,
    "NetworkZoneLocation": networkZoneLocation_1.NetworkZoneLocation,
    "OAuth2Actor": oAuth2Actor_1.OAuth2Actor,
    "OAuth2Claim": oAuth2Claim_1.OAuth2Claim,
    "OAuth2ClaimConditions": oAuth2ClaimConditions_1.OAuth2ClaimConditions,
    "OAuth2Client": oAuth2Client_1.OAuth2Client,
    "OAuth2RefreshToken": oAuth2RefreshToken_1.OAuth2RefreshToken,
    "OAuth2Scope": oAuth2Scope_1.OAuth2Scope,
    "OAuth2ScopeConsentGrant": oAuth2ScopeConsentGrant_1.OAuth2ScopeConsentGrant,
    "OAuth2ScopesMediationPolicyRuleCondition": oAuth2ScopesMediationPolicyRuleCondition_1.OAuth2ScopesMediationPolicyRuleCondition,
    "OAuth2Token": oAuth2Token_1.OAuth2Token,
    "OAuthApplicationCredentials": oAuthApplicationCredentials_1.OAuthApplicationCredentials,
    "OktaSignOnPolicy": oktaSignOnPolicy_1.OktaSignOnPolicy,
    "OktaSignOnPolicyConditions": oktaSignOnPolicyConditions_1.OktaSignOnPolicyConditions,
    "OktaSignOnPolicyRule": oktaSignOnPolicyRule_1.OktaSignOnPolicyRule,
    "OktaSignOnPolicyRuleActions": oktaSignOnPolicyRuleActions_1.OktaSignOnPolicyRuleActions,
    "OktaSignOnPolicyRuleConditions": oktaSignOnPolicyRuleConditions_1.OktaSignOnPolicyRuleConditions,
    "OktaSignOnPolicyRuleSignonActions": oktaSignOnPolicyRuleSignonActions_1.OktaSignOnPolicyRuleSignonActions,
    "OktaSignOnPolicyRuleSignonSessionActions": oktaSignOnPolicyRuleSignonSessionActions_1.OktaSignOnPolicyRuleSignonSessionActions,
    "OpenIdConnectApplication": openIdConnectApplication_1.OpenIdConnectApplication,
    "OpenIdConnectApplicationIdpInitiatedLogin": openIdConnectApplicationIdpInitiatedLogin_1.OpenIdConnectApplicationIdpInitiatedLogin,
    "OpenIdConnectApplicationSettings": openIdConnectApplicationSettings_1.OpenIdConnectApplicationSettings,
    "OpenIdConnectApplicationSettingsClient": openIdConnectApplicationSettingsClient_1.OpenIdConnectApplicationSettingsClient,
    "OpenIdConnectApplicationSettingsClientKeys": openIdConnectApplicationSettingsClientKeys_1.OpenIdConnectApplicationSettingsClientKeys,
    "OpenIdConnectApplicationSettingsRefreshToken": openIdConnectApplicationSettingsRefreshToken_1.OpenIdConnectApplicationSettingsRefreshToken,
    "OrgContactTypeObj": orgContactTypeObj_1.OrgContactTypeObj,
    "OrgContactUser": orgContactUser_1.OrgContactUser,
    "OrgOktaCommunicationSetting": orgOktaCommunicationSetting_1.OrgOktaCommunicationSetting,
    "OrgOktaSupportSettingsObj": orgOktaSupportSettingsObj_1.OrgOktaSupportSettingsObj,
    "OrgPreferences": orgPreferences_1.OrgPreferences,
    "OrgSetting": orgSetting_1.OrgSetting,
    "PasswordCredential": passwordCredential_1.PasswordCredential,
    "PasswordCredentialHash": passwordCredentialHash_1.PasswordCredentialHash,
    "PasswordCredentialHook": passwordCredentialHook_1.PasswordCredentialHook,
    "PasswordDictionary": passwordDictionary_1.PasswordDictionary,
    "PasswordDictionaryCommon": passwordDictionaryCommon_1.PasswordDictionaryCommon,
    "PasswordExpirationPolicyRuleCondition": passwordExpirationPolicyRuleCondition_1.PasswordExpirationPolicyRuleCondition,
    "PasswordPolicy": passwordPolicy_1.PasswordPolicy,
    "PasswordPolicyAuthenticationProviderCondition": passwordPolicyAuthenticationProviderCondition_1.PasswordPolicyAuthenticationProviderCondition,
    "PasswordPolicyConditions": passwordPolicyConditions_1.PasswordPolicyConditions,
    "PasswordPolicyDelegationSettings": passwordPolicyDelegationSettings_1.PasswordPolicyDelegationSettings,
    "PasswordPolicyDelegationSettingsOptions": passwordPolicyDelegationSettingsOptions_1.PasswordPolicyDelegationSettingsOptions,
    "PasswordPolicyPasswordSettings": passwordPolicyPasswordSettings_1.PasswordPolicyPasswordSettings,
    "PasswordPolicyPasswordSettingsAge": passwordPolicyPasswordSettingsAge_1.PasswordPolicyPasswordSettingsAge,
    "PasswordPolicyPasswordSettingsComplexity": passwordPolicyPasswordSettingsComplexity_1.PasswordPolicyPasswordSettingsComplexity,
    "PasswordPolicyPasswordSettingsLockout": passwordPolicyPasswordSettingsLockout_1.PasswordPolicyPasswordSettingsLockout,
    "PasswordPolicyRecoveryEmail": passwordPolicyRecoveryEmail_1.PasswordPolicyRecoveryEmail,
    "PasswordPolicyRecoveryEmailProperties": passwordPolicyRecoveryEmailProperties_1.PasswordPolicyRecoveryEmailProperties,
    "PasswordPolicyRecoveryEmailRecoveryToken": passwordPolicyRecoveryEmailRecoveryToken_1.PasswordPolicyRecoveryEmailRecoveryToken,
    "PasswordPolicyRecoveryFactorSettings": passwordPolicyRecoveryFactorSettings_1.PasswordPolicyRecoveryFactorSettings,
    "PasswordPolicyRecoveryFactors": passwordPolicyRecoveryFactors_1.PasswordPolicyRecoveryFactors,
    "PasswordPolicyRecoveryQuestion": passwordPolicyRecoveryQuestion_1.PasswordPolicyRecoveryQuestion,
    "PasswordPolicyRecoveryQuestionComplexity": passwordPolicyRecoveryQuestionComplexity_1.PasswordPolicyRecoveryQuestionComplexity,
    "PasswordPolicyRecoveryQuestionProperties": passwordPolicyRecoveryQuestionProperties_1.PasswordPolicyRecoveryQuestionProperties,
    "PasswordPolicyRecoverySettings": passwordPolicyRecoverySettings_1.PasswordPolicyRecoverySettings,
    "PasswordPolicyRule": passwordPolicyRule_1.PasswordPolicyRule,
    "PasswordPolicyRuleAction": passwordPolicyRuleAction_1.PasswordPolicyRuleAction,
    "PasswordPolicyRuleActions": passwordPolicyRuleActions_1.PasswordPolicyRuleActions,
    "PasswordPolicyRuleConditions": passwordPolicyRuleConditions_1.PasswordPolicyRuleConditions,
    "PasswordPolicySettings": passwordPolicySettings_1.PasswordPolicySettings,
    "PlatformConditionEvaluatorPlatform": platformConditionEvaluatorPlatform_1.PlatformConditionEvaluatorPlatform,
    "PlatformConditionEvaluatorPlatformOperatingSystem": platformConditionEvaluatorPlatformOperatingSystem_1.PlatformConditionEvaluatorPlatformOperatingSystem,
    "PlatformConditionEvaluatorPlatformOperatingSystemVersion": platformConditionEvaluatorPlatformOperatingSystemVersion_1.PlatformConditionEvaluatorPlatformOperatingSystemVersion,
    "PlatformPolicyRuleCondition": platformPolicyRuleCondition_1.PlatformPolicyRuleCondition,
    "Policy": policy_1.Policy,
    "PolicyAccountLink": policyAccountLink_1.PolicyAccountLink,
    "PolicyAccountLinkFilter": policyAccountLinkFilter_1.PolicyAccountLinkFilter,
    "PolicyAccountLinkFilterGroups": policyAccountLinkFilterGroups_1.PolicyAccountLinkFilterGroups,
    "PolicyNetworkCondition": policyNetworkCondition_1.PolicyNetworkCondition,
    "PolicyPeopleCondition": policyPeopleCondition_1.PolicyPeopleCondition,
    "PolicyRule": policyRule_1.PolicyRule,
    "PolicyRuleActions": policyRuleActions_1.PolicyRuleActions,
    "PolicyRuleActionsEnroll": policyRuleActionsEnroll_1.PolicyRuleActionsEnroll,
    "PolicyRuleAuthContextCondition": policyRuleAuthContextCondition_1.PolicyRuleAuthContextCondition,
    "PolicyRuleConditions": policyRuleConditions_1.PolicyRuleConditions,
    "PolicySubject": policySubject_1.PolicySubject,
    "PolicyUserNameTemplate": policyUserNameTemplate_1.PolicyUserNameTemplate,
    "ProfileMapping": profileMapping_1.ProfileMapping,
    "ProfileMappingProperty": profileMappingProperty_1.ProfileMappingProperty,
    "ProfileMappingSource": profileMappingSource_1.ProfileMappingSource,
    "Protocol": protocol_1.Protocol,
    "ProtocolAlgorithmType": protocolAlgorithmType_1.ProtocolAlgorithmType,
    "ProtocolAlgorithmTypeSignature": protocolAlgorithmTypeSignature_1.ProtocolAlgorithmTypeSignature,
    "ProtocolAlgorithms": protocolAlgorithms_1.ProtocolAlgorithms,
    "ProtocolEndpoint": protocolEndpoint_1.ProtocolEndpoint,
    "ProtocolEndpoints": protocolEndpoints_1.ProtocolEndpoints,
    "ProtocolRelayState": protocolRelayState_1.ProtocolRelayState,
    "ProtocolSettings": protocolSettings_1.ProtocolSettings,
    "Provisioning": provisioning_1.Provisioning,
    "ProvisioningConditions": provisioningConditions_1.ProvisioningConditions,
    "ProvisioningDeprovisionedCondition": provisioningDeprovisionedCondition_1.ProvisioningDeprovisionedCondition,
    "ProvisioningGroups": provisioningGroups_1.ProvisioningGroups,
    "ProvisioningSuspendedCondition": provisioningSuspendedCondition_1.ProvisioningSuspendedCondition,
    "PushUserFactor": pushUserFactor_1.PushUserFactor,
    "PushUserFactorProfile": pushUserFactorProfile_1.PushUserFactorProfile,
    "RecoveryQuestionCredential": recoveryQuestionCredential_1.RecoveryQuestionCredential,
    "ResetPasswordToken": resetPasswordToken_1.ResetPasswordToken,
    "RiskPolicyRuleCondition": riskPolicyRuleCondition_1.RiskPolicyRuleCondition,
    "RiskScorePolicyRuleCondition": riskScorePolicyRuleCondition_1.RiskScorePolicyRuleCondition,
    "Role": role_1.Role,
    "SamlApplication": samlApplication_1.SamlApplication,
    "SamlApplicationSettings": samlApplicationSettings_1.SamlApplicationSettings,
    "SamlApplicationSettingsSignOn": samlApplicationSettingsSignOn_1.SamlApplicationSettingsSignOn,
    "SamlAttributeStatement": samlAttributeStatement_1.SamlAttributeStatement,
    "ScheduledUserLifecycleAction": scheduledUserLifecycleAction_1.ScheduledUserLifecycleAction,
    "SchemeApplicationCredentials": schemeApplicationCredentials_1.SchemeApplicationCredentials,
    "Scope": scope_1.Scope,
    "SecurePasswordStoreApplication": securePasswordStoreApplication_1.SecurePasswordStoreApplication,
    "SecurePasswordStoreApplicationSettings": securePasswordStoreApplicationSettings_1.SecurePasswordStoreApplicationSettings,
    "SecurePasswordStoreApplicationSettingsApplication": securePasswordStoreApplicationSettingsApplication_1.SecurePasswordStoreApplicationSettingsApplication,
    "SecurityQuestion": securityQuestion_1.SecurityQuestion,
    "SecurityQuestionUserFactor": securityQuestionUserFactor_1.SecurityQuestionUserFactor,
    "SecurityQuestionUserFactorProfile": securityQuestionUserFactorProfile_1.SecurityQuestionUserFactorProfile,
    "Session": session_1.Session,
    "SessionIdentityProvider": sessionIdentityProvider_1.SessionIdentityProvider,
    "SignOnInlineHook": signOnInlineHook_1.SignOnInlineHook,
    "SingleLogout": singleLogout_1.SingleLogout,
    "SmsTemplate": smsTemplate_1.SmsTemplate,
    "SmsUserFactor": smsUserFactor_1.SmsUserFactor,
    "SmsUserFactorProfile": smsUserFactorProfile_1.SmsUserFactorProfile,
    "SocialAuthToken": socialAuthToken_1.SocialAuthToken,
    "SpCertificate": spCertificate_1.SpCertificate,
    "SwaApplication": swaApplication_1.SwaApplication,
    "SwaApplicationSettings": swaApplicationSettings_1.SwaApplicationSettings,
    "SwaApplicationSettingsApplication": swaApplicationSettingsApplication_1.SwaApplicationSettingsApplication,
    "SwaThreeFieldApplication": swaThreeFieldApplication_1.SwaThreeFieldApplication,
    "SwaThreeFieldApplicationSettings": swaThreeFieldApplicationSettings_1.SwaThreeFieldApplicationSettings,
    "SwaThreeFieldApplicationSettingsApplication": swaThreeFieldApplicationSettingsApplication_1.SwaThreeFieldApplicationSettingsApplication,
    "TempPassword": tempPassword_1.TempPassword,
    "ThreatInsightConfiguration": threatInsightConfiguration_1.ThreatInsightConfiguration,
    "TokenAuthorizationServerPolicyRuleAction": tokenAuthorizationServerPolicyRuleAction_1.TokenAuthorizationServerPolicyRuleAction,
    "TokenAuthorizationServerPolicyRuleActionInlineHook": tokenAuthorizationServerPolicyRuleActionInlineHook_1.TokenAuthorizationServerPolicyRuleActionInlineHook,
    "TokenUserFactor": tokenUserFactor_1.TokenUserFactor,
    "TokenUserFactorProfile": tokenUserFactorProfile_1.TokenUserFactorProfile,
    "TotpUserFactor": totpUserFactor_1.TotpUserFactor,
    "TotpUserFactorProfile": totpUserFactorProfile_1.TotpUserFactorProfile,
    "TrustedOrigin": trustedOrigin_1.TrustedOrigin,
    "U2fUserFactor": u2fUserFactor_1.U2fUserFactor,
    "U2fUserFactorProfile": u2fUserFactorProfile_1.U2fUserFactorProfile,
    "User": user_1.User,
    "UserActivationToken": userActivationToken_1.UserActivationToken,
    "UserCondition": userCondition_1.UserCondition,
    "UserCredentials": userCredentials_1.UserCredentials,
    "UserFactor": userFactor_1.UserFactor,
    "UserIdString": userIdString_1.UserIdString,
    "UserIdentifierConditionEvaluatorPattern": userIdentifierConditionEvaluatorPattern_1.UserIdentifierConditionEvaluatorPattern,
    "UserIdentifierPolicyRuleCondition": userIdentifierPolicyRuleCondition_1.UserIdentifierPolicyRuleCondition,
    "UserIdentityProviderLinkRequest": userIdentityProviderLinkRequest_1.UserIdentityProviderLinkRequest,
    "UserLifecycleAttributePolicyRuleCondition": userLifecycleAttributePolicyRuleCondition_1.UserLifecycleAttributePolicyRuleCondition,
    "UserPolicyRuleCondition": userPolicyRuleCondition_1.UserPolicyRuleCondition,
    "UserProfile": userProfile_1.UserProfile,
    "UserSchema": userSchema_1.UserSchema,
    "UserSchemaAttribute": userSchemaAttribute_1.UserSchemaAttribute,
    "UserSchemaAttributeEnum": userSchemaAttributeEnum_1.UserSchemaAttributeEnum,
    "UserSchemaAttributeItems": userSchemaAttributeItems_1.UserSchemaAttributeItems,
    "UserSchemaAttributeMaster": userSchemaAttributeMaster_1.UserSchemaAttributeMaster,
    "UserSchemaAttributeMasterPriority": userSchemaAttributeMasterPriority_1.UserSchemaAttributeMasterPriority,
    "UserSchemaAttributePermission": userSchemaAttributePermission_1.UserSchemaAttributePermission,
    "UserSchemaBase": userSchemaBase_1.UserSchemaBase,
    "UserSchemaBaseProperties": userSchemaBaseProperties_1.UserSchemaBaseProperties,
    "UserSchemaDefinitions": userSchemaDefinitions_1.UserSchemaDefinitions,
    "UserSchemaProperties": userSchemaProperties_1.UserSchemaProperties,
    "UserSchemaPropertiesProfile": userSchemaPropertiesProfile_1.UserSchemaPropertiesProfile,
    "UserSchemaPropertiesProfileItem": userSchemaPropertiesProfileItem_1.UserSchemaPropertiesProfileItem,
    "UserSchemaPublic": userSchemaPublic_1.UserSchemaPublic,
    "UserStatusPolicyRuleCondition": userStatusPolicyRuleCondition_1.UserStatusPolicyRuleCondition,
    "UserType": userType_1.UserType,
    "VerifyFactorRequest": verifyFactorRequest_1.VerifyFactorRequest,
    "VerifyUserFactorResponse": verifyUserFactorResponse_1.VerifyUserFactorResponse,
    "WebAuthnUserFactor": webAuthnUserFactor_1.WebAuthnUserFactor,
    "WebAuthnUserFactorProfile": webAuthnUserFactorProfile_1.WebAuthnUserFactorProfile,
    "WebUserFactor": webUserFactor_1.WebUserFactor,
    "WebUserFactorProfile": webUserFactorProfile_1.WebUserFactorProfile,
    "WsFederationApplication": wsFederationApplication_1.WsFederationApplication,
    "WsFederationApplicationSettings": wsFederationApplicationSettings_1.WsFederationApplicationSettings,
    "WsFederationApplicationSettingsApplication": wsFederationApplicationSettingsApplication_1.WsFederationApplicationSettingsApplication,
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
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
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
