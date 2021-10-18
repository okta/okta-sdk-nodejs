import localVarRequest from 'request';

export * from './acsEndpoint';
export * from './activateFactorRequest';
export * from './allowedForEnum';
export * from './appAndInstanceConditionEvaluatorAppOrInstance';
export * from './appAndInstancePolicyRuleCondition';
export * from './appInstancePolicyRuleCondition';
export * from './appLink';
export * from './appUser';
export * from './appUserCredentials';
export * from './appUserPasswordCredential';
export * from './application';
export * from './applicationAccessibility';
export * from './applicationCredentials';
export * from './applicationCredentialsOAuthClient';
export * from './applicationCredentialsScheme';
export * from './applicationCredentialsSigning';
export * from './applicationCredentialsSigningUse';
export * from './applicationCredentialsUsernameTemplate';
export * from './applicationGroupAssignment';
export * from './applicationLicensing';
export * from './applicationSettings';
export * from './applicationSettingsNotes';
export * from './applicationSettingsNotifications';
export * from './applicationSettingsNotificationsVpn';
export * from './applicationSettingsNotificationsVpnNetwork';
export * from './applicationSignOnMode';
export * from './applicationVisibility';
export * from './applicationVisibilityHide';
export * from './assignRoleRequest';
export * from './authenticationProvider';
export * from './authenticationProviderType';
export * from './authenticator';
export * from './authenticatorSettings';
export * from './authenticatorStatus';
export * from './authenticatorType';
export * from './authorizationServer';
export * from './authorizationServerCredentials';
export * from './authorizationServerCredentialsRotationMode';
export * from './authorizationServerCredentialsSigningConfig';
export * from './authorizationServerCredentialsUse';
export * from './authorizationServerPolicy';
export * from './authorizationServerPolicyRule';
export * from './authorizationServerPolicyRuleActions';
export * from './authorizationServerPolicyRuleConditions';
export * from './autoLoginApplication';
export * from './autoLoginApplicationSettings';
export * from './autoLoginApplicationSettingsSignOn';
export * from './basicApplicationSettings';
export * from './basicApplicationSettingsApplication';
export * from './basicAuthApplication';
export * from './beforeScheduledActionPolicyRuleCondition';
export * from './bookmarkApplication';
export * from './bookmarkApplicationSettings';
export * from './bookmarkApplicationSettingsApplication';
export * from './browserPluginApplication';
export * from './cAPTCHAInstance';
export * from './cAPTCHAInstanceLink';
export * from './callUserFactor';
export * from './callUserFactorProfile';
export * from './catalogApplication';
export * from './catalogApplicationStatus';
export * from './changePasswordRequest';
export * from './clientPolicyCondition';
export * from './contextPolicyRuleCondition';
export * from './createSessionRequest';
export * from './createUserRequest';
export * from './csr';
export * from './csrMetadata';
export * from './csrMetadataSubject';
export * from './csrMetadataSubjectAltNames';
export * from './customHotpUserFactor';
export * from './customHotpUserFactorProfile';
export * from './dNSRecord';
export * from './dNSRecordType';
export * from './devicePolicyRuleCondition';
export * from './devicePolicyRuleConditionPlatform';
export * from './domain';
export * from './domainCertificate';
export * from './domainCertificateMetadata';
export * from './domainCertificateSourceType';
export * from './domainCertificateType';
export * from './domainLinks';
export * from './domainListResponse';
export * from './domainResponse';
export * from './domainValidationStatus';
export * from './duration';
export * from './emailUserFactor';
export * from './emailUserFactorProfile';
export * from './enabledStatus';
export * from './errorErrorCauses';
export * from './eventHook';
export * from './eventHookChannel';
export * from './eventHookChannelConfig';
export * from './eventHookChannelConfigAuthScheme';
export * from './eventHookChannelConfigAuthSchemeType';
export * from './eventHookChannelConfigHeader';
export * from './eventSubscriptions';
export * from './factorProvider';
export * from './factorResultType';
export * from './factorStatus';
export * from './factorType';
export * from './feature';
export * from './featureStage';
export * from './featureStageState';
export * from './featureStageValue';
export * from './featureType';
export * from './forgotPasswordResponse';
export * from './grantTypePolicyRuleCondition';
export * from './group';
export * from './groupCondition';
export * from './groupPolicyRuleCondition';
export * from './groupProfile';
export * from './groupRule';
export * from './groupRuleAction';
export * from './groupRuleConditions';
export * from './groupRuleExpression';
export * from './groupRuleGroupAssignment';
export * from './groupRuleGroupCondition';
export * from './groupRulePeopleCondition';
export * from './groupRuleStatus';
export * from './groupRuleUserCondition';
export * from './groupSchema';
export * from './groupSchemaAttribute';
export * from './groupSchemaBase';
export * from './groupSchemaBaseProperties';
export * from './groupSchemaCustom';
export * from './groupSchemaDefinitions';
export * from './groupType';
export * from './hardwareUserFactor';
export * from './hardwareUserFactorProfile';
export * from './hrefObject';
export * from './hrefObjectHints';
export * from './identityProvider';
export * from './identityProviderApplicationUser';
export * from './identityProviderCredentials';
export * from './identityProviderCredentialsClient';
export * from './identityProviderCredentialsSigning';
export * from './identityProviderCredentialsTrust';
export * from './identityProviderPolicy';
export * from './identityProviderPolicyRuleCondition';
export * from './inactivityPolicyRuleCondition';
export * from './inlineHook';
export * from './inlineHookChannel';
export * from './inlineHookChannelConfig';
export * from './inlineHookChannelConfigAuthScheme';
export * from './inlineHookChannelConfigHeaders';
export * from './inlineHookResponse';
export * from './inlineHookResponseCommandValue';
export * from './inlineHookResponseCommands';
export * from './inlineHookStatus';
export * from './inlineHookType';
export * from './ionField';
export * from './ionForm';
export * from './jsonWebKey';
export * from './jwkUse';
export * from './lifecycleExpirationPolicyRuleCondition';
export * from './linkedObject';
export * from './linkedObjectDetails';
export * from './linkedObjectDetailsType';
export * from './logActor';
export * from './logAuthenticationContext';
export * from './logAuthenticationProvider';
export * from './logClient';
export * from './logCredentialProvider';
export * from './logCredentialType';
export * from './logDebugContext';
export * from './logEvent';
export * from './logGeographicalContext';
export * from './logGeolocation';
export * from './logIpAddress';
export * from './logIssuer';
export * from './logOutcome';
export * from './logRequest';
export * from './logSecurityContext';
export * from './logSeverity';
export * from './logTarget';
export * from './logTransaction';
export * from './logUserAgent';
export * from './mDMEnrollmentPolicyRuleCondition';
export * from './modelError';
export * from './networkZone';
export * from './networkZoneAddress';
export * from './networkZoneAddressType';
export * from './networkZoneLocation';
export * from './networkZoneStatus';
export * from './networkZoneType';
export * from './networkZoneUsage';
export * from './oAuth2Actor';
export * from './oAuth2Claim';
export * from './oAuth2ClaimConditions';
export * from './oAuth2Client';
export * from './oAuth2RefreshToken';
export * from './oAuth2Scope';
export * from './oAuth2ScopeConsentGrant';
export * from './oAuth2ScopeConsentGrantSource';
export * from './oAuth2ScopeConsentGrantStatus';
export * from './oAuth2ScopesMediationPolicyRuleCondition';
export * from './oAuth2Token';
export * from './oAuthApplicationCredentials';
export * from './oAuthEndpointAuthenticationMethod';
export * from './oAuthGrantType';
export * from './oAuthResponseType';
export * from './oktaSignOnPolicy';
export * from './oktaSignOnPolicyConditions';
export * from './oktaSignOnPolicyRule';
export * from './oktaSignOnPolicyRuleActions';
export * from './oktaSignOnPolicyRuleConditions';
export * from './oktaSignOnPolicyRuleSignonActions';
export * from './oktaSignOnPolicyRuleSignonSessionActions';
export * from './openIdConnectApplication';
export * from './openIdConnectApplicationConsentMethod';
export * from './openIdConnectApplicationIdpInitiatedLogin';
export * from './openIdConnectApplicationIssuerMode';
export * from './openIdConnectApplicationSettings';
export * from './openIdConnectApplicationSettingsClient';
export * from './openIdConnectApplicationSettingsClientKeys';
export * from './openIdConnectApplicationSettingsRefreshToken';
export * from './openIdConnectApplicationType';
export * from './openIdConnectRefreshTokenRotationType';
export * from './orgContactType';
export * from './orgContactTypeObj';
export * from './orgContactUser';
export * from './orgOktaCommunicationSetting';
export * from './orgOktaSupportSetting';
export * from './orgOktaSupportSettingsObj';
export * from './orgPreferences';
export * from './orgSetting';
export * from './passwordCredential';
export * from './passwordCredentialHash';
export * from './passwordCredentialHashAlgorithm';
export * from './passwordCredentialHook';
export * from './passwordDictionary';
export * from './passwordDictionaryCommon';
export * from './passwordExpirationPolicyRuleCondition';
export * from './passwordPolicy';
export * from './passwordPolicyAuthenticationProviderCondition';
export * from './passwordPolicyConditions';
export * from './passwordPolicyDelegationSettings';
export * from './passwordPolicyDelegationSettingsOptions';
export * from './passwordPolicyPasswordSettings';
export * from './passwordPolicyPasswordSettingsAge';
export * from './passwordPolicyPasswordSettingsComplexity';
export * from './passwordPolicyPasswordSettingsLockout';
export * from './passwordPolicyRecoveryEmail';
export * from './passwordPolicyRecoveryEmailProperties';
export * from './passwordPolicyRecoveryEmailRecoveryToken';
export * from './passwordPolicyRecoveryFactorSettings';
export * from './passwordPolicyRecoveryFactors';
export * from './passwordPolicyRecoveryQuestion';
export * from './passwordPolicyRecoveryQuestionComplexity';
export * from './passwordPolicyRecoveryQuestionProperties';
export * from './passwordPolicyRecoverySettings';
export * from './passwordPolicyRule';
export * from './passwordPolicyRuleAction';
export * from './passwordPolicyRuleActions';
export * from './passwordPolicyRuleConditions';
export * from './passwordPolicySettings';
export * from './platformConditionEvaluatorPlatform';
export * from './platformConditionEvaluatorPlatformOperatingSystem';
export * from './platformConditionEvaluatorPlatformOperatingSystemVersion';
export * from './platformPolicyRuleCondition';
export * from './policy';
export * from './policyAccountLink';
export * from './policyAccountLinkFilter';
export * from './policyAccountLinkFilterGroups';
export * from './policyNetworkCondition';
export * from './policyPeopleCondition';
export * from './policyRule';
export * from './policyRuleActions';
export * from './policyRuleActionsEnroll';
export * from './policyRuleActionsEnrollSelf';
export * from './policyRuleAuthContextCondition';
export * from './policyRuleConditions';
export * from './policySubject';
export * from './policySubjectMatchType';
export * from './policyType';
export * from './policyUserNameTemplate';
export * from './profileMapping';
export * from './profileMappingProperty';
export * from './profileMappingPropertyPushStatus';
export * from './profileMappingSource';
export * from './protocol';
export * from './protocolAlgorithmType';
export * from './protocolAlgorithmTypeSignature';
export * from './protocolAlgorithms';
export * from './protocolEndpoint';
export * from './protocolEndpoints';
export * from './protocolRelayState';
export * from './protocolRelayStateFormat';
export * from './protocolSettings';
export * from './provisioning';
export * from './provisioningConditions';
export * from './provisioningDeprovisionedCondition';
export * from './provisioningGroups';
export * from './provisioningSuspendedCondition';
export * from './pushUserFactor';
export * from './pushUserFactorProfile';
export * from './recoveryQuestionCredential';
export * from './resetPasswordToken';
export * from './riskPolicyRuleCondition';
export * from './riskScorePolicyRuleCondition';
export * from './role';
export * from './roleAssignmentType';
export * from './roleStatus';
export * from './roleType';
export * from './samlApplication';
export * from './samlApplicationSettings';
export * from './samlApplicationSettingsSignOn';
export * from './samlAttributeStatement';
export * from './scheduledUserLifecycleAction';
export * from './schemeApplicationCredentials';
export * from './scope';
export * from './scopeType';
export * from './securePasswordStoreApplication';
export * from './securePasswordStoreApplicationSettings';
export * from './securePasswordStoreApplicationSettingsApplication';
export * from './securityQuestion';
export * from './securityQuestionUserFactor';
export * from './securityQuestionUserFactorProfile';
export * from './session';
export * from './sessionAuthenticationMethod';
export * from './sessionIdentityProvider';
export * from './sessionIdentityProviderType';
export * from './sessionStatus';
export * from './signOnInlineHook';
export * from './singleLogout';
export * from './smsTemplate';
export * from './smsTemplateType';
export * from './smsUserFactor';
export * from './smsUserFactorProfile';
export * from './socialAuthToken';
export * from './spCertificate';
export * from './swaApplication';
export * from './swaApplicationSettings';
export * from './swaApplicationSettingsApplication';
export * from './swaThreeFieldApplication';
export * from './swaThreeFieldApplicationSettings';
export * from './swaThreeFieldApplicationSettingsApplication';
export * from './tempPassword';
export * from './threatInsightConfiguration';
export * from './tokenAuthorizationServerPolicyRuleAction';
export * from './tokenAuthorizationServerPolicyRuleActionInlineHook';
export * from './tokenUserFactor';
export * from './tokenUserFactorProfile';
export * from './totpUserFactor';
export * from './totpUserFactorProfile';
export * from './trustedOrigin';
export * from './u2fUserFactor';
export * from './u2fUserFactorProfile';
export * from './user';
export * from './userActivationToken';
export * from './userCondition';
export * from './userCredentials';
export * from './userFactor';
export * from './userIdString';
export * from './userIdentifierConditionEvaluatorPattern';
export * from './userIdentifierPolicyRuleCondition';
export * from './userIdentityProviderLinkRequest';
export * from './userLifecycleAttributePolicyRuleCondition';
export * from './userNextLogin';
export * from './userPolicyRuleCondition';
export * from './userProfile';
export * from './userSchema';
export * from './userSchemaAttribute';
export * from './userSchemaAttributeEnum';
export * from './userSchemaAttributeItems';
export * from './userSchemaAttributeMaster';
export * from './userSchemaAttributeMasterPriority';
export * from './userSchemaAttributeMasterType';
export * from './userSchemaAttributePermission';
export * from './userSchemaAttributeScope';
export * from './userSchemaAttributeType';
export * from './userSchemaAttributeUnion';
export * from './userSchemaBase';
export * from './userSchemaBaseProperties';
export * from './userSchemaDefinitions';
export * from './userSchemaProperties';
export * from './userSchemaPropertiesProfile';
export * from './userSchemaPropertiesProfileItem';
export * from './userSchemaPublic';
export * from './userStatus';
export * from './userStatusPolicyRuleCondition';
export * from './userType';
export * from './verifyFactorRequest';
export * from './verifyUserFactorResponse';
export * from './webAuthnUserFactor';
export * from './webAuthnUserFactorProfile';
export * from './webUserFactor';
export * from './webUserFactorProfile';
export * from './wsFederationApplication';
export * from './wsFederationApplicationSettings';
export * from './wsFederationApplicationSettingsApplication';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AcsEndpoint } from './acsEndpoint';
import { ActivateFactorRequest } from './activateFactorRequest';
import { AllowedForEnum } from './allowedForEnum';
import { AppAndInstanceConditionEvaluatorAppOrInstance } from './appAndInstanceConditionEvaluatorAppOrInstance';
import { AppAndInstancePolicyRuleCondition } from './appAndInstancePolicyRuleCondition';
import { AppInstancePolicyRuleCondition } from './appInstancePolicyRuleCondition';
import { AppLink } from './appLink';
import { AppUser } from './appUser';
import { AppUserCredentials } from './appUserCredentials';
import { AppUserPasswordCredential } from './appUserPasswordCredential';
import { Application } from './application';
import { ApplicationAccessibility } from './applicationAccessibility';
import { ApplicationCredentials } from './applicationCredentials';
import { ApplicationCredentialsOAuthClient } from './applicationCredentialsOAuthClient';
import { ApplicationCredentialsScheme } from './applicationCredentialsScheme';
import { ApplicationCredentialsSigning } from './applicationCredentialsSigning';
import { ApplicationCredentialsSigningUse } from './applicationCredentialsSigningUse';
import { ApplicationCredentialsUsernameTemplate } from './applicationCredentialsUsernameTemplate';
import { ApplicationGroupAssignment } from './applicationGroupAssignment';
import { ApplicationLicensing } from './applicationLicensing';
import { ApplicationSettings } from './applicationSettings';
import { ApplicationSettingsNotes } from './applicationSettingsNotes';
import { ApplicationSettingsNotifications } from './applicationSettingsNotifications';
import { ApplicationSettingsNotificationsVpn } from './applicationSettingsNotificationsVpn';
import { ApplicationSettingsNotificationsVpnNetwork } from './applicationSettingsNotificationsVpnNetwork';
import { ApplicationSignOnMode } from './applicationSignOnMode';
import { ApplicationVisibility } from './applicationVisibility';
import { ApplicationVisibilityHide } from './applicationVisibilityHide';
import { AssignRoleRequest } from './assignRoleRequest';
import { AuthenticationProvider } from './authenticationProvider';
import { AuthenticationProviderType } from './authenticationProviderType';
import { Authenticator } from './authenticator';
import { AuthenticatorSettings } from './authenticatorSettings';
import { AuthenticatorStatus } from './authenticatorStatus';
import { AuthenticatorType } from './authenticatorType';
import { AuthorizationServer } from './authorizationServer';
import { AuthorizationServerCredentials } from './authorizationServerCredentials';
import { AuthorizationServerCredentialsRotationMode } from './authorizationServerCredentialsRotationMode';
import { AuthorizationServerCredentialsSigningConfig } from './authorizationServerCredentialsSigningConfig';
import { AuthorizationServerCredentialsUse } from './authorizationServerCredentialsUse';
import { AuthorizationServerPolicy } from './authorizationServerPolicy';
import { AuthorizationServerPolicyRule } from './authorizationServerPolicyRule';
import { AuthorizationServerPolicyRuleActions } from './authorizationServerPolicyRuleActions';
import { AuthorizationServerPolicyRuleConditions } from './authorizationServerPolicyRuleConditions';
import { AutoLoginApplication } from './autoLoginApplication';
import { AutoLoginApplicationSettings } from './autoLoginApplicationSettings';
import { AutoLoginApplicationSettingsSignOn } from './autoLoginApplicationSettingsSignOn';
import { BasicApplicationSettings } from './basicApplicationSettings';
import { BasicApplicationSettingsApplication } from './basicApplicationSettingsApplication';
import { BasicAuthApplication } from './basicAuthApplication';
import { BeforeScheduledActionPolicyRuleCondition } from './beforeScheduledActionPolicyRuleCondition';
import { BookmarkApplication } from './bookmarkApplication';
import { BookmarkApplicationSettings } from './bookmarkApplicationSettings';
import { BookmarkApplicationSettingsApplication } from './bookmarkApplicationSettingsApplication';
import { BrowserPluginApplication } from './browserPluginApplication';
import { CAPTCHAInstance } from './cAPTCHAInstance';
import { CAPTCHAInstanceLink } from './cAPTCHAInstanceLink';
import { CallUserFactor } from './callUserFactor';
import { CallUserFactorProfile } from './callUserFactorProfile';
import { CatalogApplication } from './catalogApplication';
import { CatalogApplicationStatus } from './catalogApplicationStatus';
import { ChangePasswordRequest } from './changePasswordRequest';
import { ClientPolicyCondition } from './clientPolicyCondition';
import { ContextPolicyRuleCondition } from './contextPolicyRuleCondition';
import { CreateSessionRequest } from './createSessionRequest';
import { CreateUserRequest } from './createUserRequest';
import { Csr } from './csr';
import { CsrMetadata } from './csrMetadata';
import { CsrMetadataSubject } from './csrMetadataSubject';
import { CsrMetadataSubjectAltNames } from './csrMetadataSubjectAltNames';
import { CustomHotpUserFactor } from './customHotpUserFactor';
import { CustomHotpUserFactorProfile } from './customHotpUserFactorProfile';
import { DNSRecord } from './dNSRecord';
import { DNSRecordType } from './dNSRecordType';
import { DevicePolicyRuleCondition } from './devicePolicyRuleCondition';
import { DevicePolicyRuleConditionPlatform } from './devicePolicyRuleConditionPlatform';
import { Domain } from './domain';
import { DomainCertificate } from './domainCertificate';
import { DomainCertificateMetadata } from './domainCertificateMetadata';
import { DomainCertificateSourceType } from './domainCertificateSourceType';
import { DomainCertificateType } from './domainCertificateType';
import { DomainLinks } from './domainLinks';
import { DomainListResponse } from './domainListResponse';
import { DomainResponse } from './domainResponse';
import { DomainValidationStatus } from './domainValidationStatus';
import { Duration } from './duration';
import { EmailUserFactor } from './emailUserFactor';
import { EmailUserFactorProfile } from './emailUserFactorProfile';
import { EnabledStatus } from './enabledStatus';
import { ErrorErrorCauses } from './errorErrorCauses';
import { EventHook } from './eventHook';
import { EventHookChannel } from './eventHookChannel';
import { EventHookChannelConfig } from './eventHookChannelConfig';
import { EventHookChannelConfigAuthScheme } from './eventHookChannelConfigAuthScheme';
import { EventHookChannelConfigAuthSchemeType } from './eventHookChannelConfigAuthSchemeType';
import { EventHookChannelConfigHeader } from './eventHookChannelConfigHeader';
import { EventSubscriptions } from './eventSubscriptions';
import { FactorProvider } from './factorProvider';
import { FactorResultType } from './factorResultType';
import { FactorStatus } from './factorStatus';
import { FactorType } from './factorType';
import { Feature } from './feature';
import { FeatureStage } from './featureStage';
import { FeatureStageState } from './featureStageState';
import { FeatureStageValue } from './featureStageValue';
import { FeatureType } from './featureType';
import { ForgotPasswordResponse } from './forgotPasswordResponse';
import { GrantTypePolicyRuleCondition } from './grantTypePolicyRuleCondition';
import { Group } from './group';
import { GroupCondition } from './groupCondition';
import { GroupPolicyRuleCondition } from './groupPolicyRuleCondition';
import { GroupProfile } from './groupProfile';
import { GroupRule } from './groupRule';
import { GroupRuleAction } from './groupRuleAction';
import { GroupRuleConditions } from './groupRuleConditions';
import { GroupRuleExpression } from './groupRuleExpression';
import { GroupRuleGroupAssignment } from './groupRuleGroupAssignment';
import { GroupRuleGroupCondition } from './groupRuleGroupCondition';
import { GroupRulePeopleCondition } from './groupRulePeopleCondition';
import { GroupRuleStatus } from './groupRuleStatus';
import { GroupRuleUserCondition } from './groupRuleUserCondition';
import { GroupSchema } from './groupSchema';
import { GroupSchemaAttribute } from './groupSchemaAttribute';
import { GroupSchemaBase } from './groupSchemaBase';
import { GroupSchemaBaseProperties } from './groupSchemaBaseProperties';
import { GroupSchemaCustom } from './groupSchemaCustom';
import { GroupSchemaDefinitions } from './groupSchemaDefinitions';
import { GroupType } from './groupType';
import { HardwareUserFactor } from './hardwareUserFactor';
import { HardwareUserFactorProfile } from './hardwareUserFactorProfile';
import { HrefObject } from './hrefObject';
import { HrefObjectHints } from './hrefObjectHints';
import { IdentityProvider } from './identityProvider';
import { IdentityProviderApplicationUser } from './identityProviderApplicationUser';
import { IdentityProviderCredentials } from './identityProviderCredentials';
import { IdentityProviderCredentialsClient } from './identityProviderCredentialsClient';
import { IdentityProviderCredentialsSigning } from './identityProviderCredentialsSigning';
import { IdentityProviderCredentialsTrust } from './identityProviderCredentialsTrust';
import { IdentityProviderPolicy } from './identityProviderPolicy';
import { IdentityProviderPolicyRuleCondition } from './identityProviderPolicyRuleCondition';
import { InactivityPolicyRuleCondition } from './inactivityPolicyRuleCondition';
import { InlineHook } from './inlineHook';
import { InlineHookChannel } from './inlineHookChannel';
import { InlineHookChannelConfig } from './inlineHookChannelConfig';
import { InlineHookChannelConfigAuthScheme } from './inlineHookChannelConfigAuthScheme';
import { InlineHookChannelConfigHeaders } from './inlineHookChannelConfigHeaders';
import { InlineHookResponse } from './inlineHookResponse';
import { InlineHookResponseCommandValue } from './inlineHookResponseCommandValue';
import { InlineHookResponseCommands } from './inlineHookResponseCommands';
import { InlineHookStatus } from './inlineHookStatus';
import { InlineHookType } from './inlineHookType';
import { IonField } from './ionField';
import { IonForm } from './ionForm';
import { JsonWebKey } from './jsonWebKey';
import { JwkUse } from './jwkUse';
import { LifecycleExpirationPolicyRuleCondition } from './lifecycleExpirationPolicyRuleCondition';
import { LinkedObject } from './linkedObject';
import { LinkedObjectDetails } from './linkedObjectDetails';
import { LinkedObjectDetailsType } from './linkedObjectDetailsType';
import { LogActor } from './logActor';
import { LogAuthenticationContext } from './logAuthenticationContext';
import { LogAuthenticationProvider } from './logAuthenticationProvider';
import { LogClient } from './logClient';
import { LogCredentialProvider } from './logCredentialProvider';
import { LogCredentialType } from './logCredentialType';
import { LogDebugContext } from './logDebugContext';
import { LogEvent } from './logEvent';
import { LogGeographicalContext } from './logGeographicalContext';
import { LogGeolocation } from './logGeolocation';
import { LogIpAddress } from './logIpAddress';
import { LogIssuer } from './logIssuer';
import { LogOutcome } from './logOutcome';
import { LogRequest } from './logRequest';
import { LogSecurityContext } from './logSecurityContext';
import { LogSeverity } from './logSeverity';
import { LogTarget } from './logTarget';
import { LogTransaction } from './logTransaction';
import { LogUserAgent } from './logUserAgent';
import { MDMEnrollmentPolicyRuleCondition } from './mDMEnrollmentPolicyRuleCondition';
import { ModelError } from './modelError';
import { NetworkZone } from './networkZone';
import { NetworkZoneAddress } from './networkZoneAddress';
import { NetworkZoneAddressType } from './networkZoneAddressType';
import { NetworkZoneLocation } from './networkZoneLocation';
import { NetworkZoneStatus } from './networkZoneStatus';
import { NetworkZoneType } from './networkZoneType';
import { NetworkZoneUsage } from './networkZoneUsage';
import { OAuth2Actor } from './oAuth2Actor';
import { OAuth2Claim } from './oAuth2Claim';
import { OAuth2ClaimConditions } from './oAuth2ClaimConditions';
import { OAuth2Client } from './oAuth2Client';
import { OAuth2RefreshToken } from './oAuth2RefreshToken';
import { OAuth2Scope } from './oAuth2Scope';
import { OAuth2ScopeConsentGrant } from './oAuth2ScopeConsentGrant';
import { OAuth2ScopeConsentGrantSource } from './oAuth2ScopeConsentGrantSource';
import { OAuth2ScopeConsentGrantStatus } from './oAuth2ScopeConsentGrantStatus';
import { OAuth2ScopesMediationPolicyRuleCondition } from './oAuth2ScopesMediationPolicyRuleCondition';
import { OAuth2Token } from './oAuth2Token';
import { OAuthApplicationCredentials } from './oAuthApplicationCredentials';
import { OAuthEndpointAuthenticationMethod } from './oAuthEndpointAuthenticationMethod';
import { OAuthGrantType } from './oAuthGrantType';
import { OAuthResponseType } from './oAuthResponseType';
import { OktaSignOnPolicy } from './oktaSignOnPolicy';
import { OktaSignOnPolicyConditions } from './oktaSignOnPolicyConditions';
import { OktaSignOnPolicyRule } from './oktaSignOnPolicyRule';
import { OktaSignOnPolicyRuleActions } from './oktaSignOnPolicyRuleActions';
import { OktaSignOnPolicyRuleConditions } from './oktaSignOnPolicyRuleConditions';
import { OktaSignOnPolicyRuleSignonActions } from './oktaSignOnPolicyRuleSignonActions';
import { OktaSignOnPolicyRuleSignonSessionActions } from './oktaSignOnPolicyRuleSignonSessionActions';
import { OpenIdConnectApplication } from './openIdConnectApplication';
import { OpenIdConnectApplicationConsentMethod } from './openIdConnectApplicationConsentMethod';
import { OpenIdConnectApplicationIdpInitiatedLogin } from './openIdConnectApplicationIdpInitiatedLogin';
import { OpenIdConnectApplicationIssuerMode } from './openIdConnectApplicationIssuerMode';
import { OpenIdConnectApplicationSettings } from './openIdConnectApplicationSettings';
import { OpenIdConnectApplicationSettingsClient } from './openIdConnectApplicationSettingsClient';
import { OpenIdConnectApplicationSettingsClientKeys } from './openIdConnectApplicationSettingsClientKeys';
import { OpenIdConnectApplicationSettingsRefreshToken } from './openIdConnectApplicationSettingsRefreshToken';
import { OpenIdConnectApplicationType } from './openIdConnectApplicationType';
import { OpenIdConnectRefreshTokenRotationType } from './openIdConnectRefreshTokenRotationType';
import { OrgContactType } from './orgContactType';
import { OrgContactTypeObj } from './orgContactTypeObj';
import { OrgContactUser } from './orgContactUser';
import { OrgOktaCommunicationSetting } from './orgOktaCommunicationSetting';
import { OrgOktaSupportSetting } from './orgOktaSupportSetting';
import { OrgOktaSupportSettingsObj } from './orgOktaSupportSettingsObj';
import { OrgPreferences } from './orgPreferences';
import { OrgSetting } from './orgSetting';
import { PasswordCredential } from './passwordCredential';
import { PasswordCredentialHash } from './passwordCredentialHash';
import { PasswordCredentialHashAlgorithm } from './passwordCredentialHashAlgorithm';
import { PasswordCredentialHook } from './passwordCredentialHook';
import { PasswordDictionary } from './passwordDictionary';
import { PasswordDictionaryCommon } from './passwordDictionaryCommon';
import { PasswordExpirationPolicyRuleCondition } from './passwordExpirationPolicyRuleCondition';
import { PasswordPolicy } from './passwordPolicy';
import { PasswordPolicyAuthenticationProviderCondition } from './passwordPolicyAuthenticationProviderCondition';
import { PasswordPolicyConditions } from './passwordPolicyConditions';
import { PasswordPolicyDelegationSettings } from './passwordPolicyDelegationSettings';
import { PasswordPolicyDelegationSettingsOptions } from './passwordPolicyDelegationSettingsOptions';
import { PasswordPolicyPasswordSettings } from './passwordPolicyPasswordSettings';
import { PasswordPolicyPasswordSettingsAge } from './passwordPolicyPasswordSettingsAge';
import { PasswordPolicyPasswordSettingsComplexity } from './passwordPolicyPasswordSettingsComplexity';
import { PasswordPolicyPasswordSettingsLockout } from './passwordPolicyPasswordSettingsLockout';
import { PasswordPolicyRecoveryEmail } from './passwordPolicyRecoveryEmail';
import { PasswordPolicyRecoveryEmailProperties } from './passwordPolicyRecoveryEmailProperties';
import { PasswordPolicyRecoveryEmailRecoveryToken } from './passwordPolicyRecoveryEmailRecoveryToken';
import { PasswordPolicyRecoveryFactorSettings } from './passwordPolicyRecoveryFactorSettings';
import { PasswordPolicyRecoveryFactors } from './passwordPolicyRecoveryFactors';
import { PasswordPolicyRecoveryQuestion } from './passwordPolicyRecoveryQuestion';
import { PasswordPolicyRecoveryQuestionComplexity } from './passwordPolicyRecoveryQuestionComplexity';
import { PasswordPolicyRecoveryQuestionProperties } from './passwordPolicyRecoveryQuestionProperties';
import { PasswordPolicyRecoverySettings } from './passwordPolicyRecoverySettings';
import { PasswordPolicyRule } from './passwordPolicyRule';
import { PasswordPolicyRuleAction } from './passwordPolicyRuleAction';
import { PasswordPolicyRuleActions } from './passwordPolicyRuleActions';
import { PasswordPolicyRuleConditions } from './passwordPolicyRuleConditions';
import { PasswordPolicySettings } from './passwordPolicySettings';
import { PlatformConditionEvaluatorPlatform } from './platformConditionEvaluatorPlatform';
import { PlatformConditionEvaluatorPlatformOperatingSystem } from './platformConditionEvaluatorPlatformOperatingSystem';
import { PlatformConditionEvaluatorPlatformOperatingSystemVersion } from './platformConditionEvaluatorPlatformOperatingSystemVersion';
import { PlatformPolicyRuleCondition } from './platformPolicyRuleCondition';
import { Policy } from './policy';
import { PolicyAccountLink } from './policyAccountLink';
import { PolicyAccountLinkFilter } from './policyAccountLinkFilter';
import { PolicyAccountLinkFilterGroups } from './policyAccountLinkFilterGroups';
import { PolicyNetworkCondition } from './policyNetworkCondition';
import { PolicyPeopleCondition } from './policyPeopleCondition';
import { PolicyRule } from './policyRule';
import { PolicyRuleActions } from './policyRuleActions';
import { PolicyRuleActionsEnroll } from './policyRuleActionsEnroll';
import { PolicyRuleActionsEnrollSelf } from './policyRuleActionsEnrollSelf';
import { PolicyRuleAuthContextCondition } from './policyRuleAuthContextCondition';
import { PolicyRuleConditions } from './policyRuleConditions';
import { PolicySubject } from './policySubject';
import { PolicySubjectMatchType } from './policySubjectMatchType';
import { PolicyType } from './policyType';
import { PolicyUserNameTemplate } from './policyUserNameTemplate';
import { ProfileMapping } from './profileMapping';
import { ProfileMappingProperty } from './profileMappingProperty';
import { ProfileMappingPropertyPushStatus } from './profileMappingPropertyPushStatus';
import { ProfileMappingSource } from './profileMappingSource';
import { Protocol } from './protocol';
import { ProtocolAlgorithmType } from './protocolAlgorithmType';
import { ProtocolAlgorithmTypeSignature } from './protocolAlgorithmTypeSignature';
import { ProtocolAlgorithms } from './protocolAlgorithms';
import { ProtocolEndpoint } from './protocolEndpoint';
import { ProtocolEndpoints } from './protocolEndpoints';
import { ProtocolRelayState } from './protocolRelayState';
import { ProtocolRelayStateFormat } from './protocolRelayStateFormat';
import { ProtocolSettings } from './protocolSettings';
import { Provisioning } from './provisioning';
import { ProvisioningConditions } from './provisioningConditions';
import { ProvisioningDeprovisionedCondition } from './provisioningDeprovisionedCondition';
import { ProvisioningGroups } from './provisioningGroups';
import { ProvisioningSuspendedCondition } from './provisioningSuspendedCondition';
import { PushUserFactor } from './pushUserFactor';
import { PushUserFactorProfile } from './pushUserFactorProfile';
import { RecoveryQuestionCredential } from './recoveryQuestionCredential';
import { ResetPasswordToken } from './resetPasswordToken';
import { RiskPolicyRuleCondition } from './riskPolicyRuleCondition';
import { RiskScorePolicyRuleCondition } from './riskScorePolicyRuleCondition';
import { Role } from './role';
import { RoleAssignmentType } from './roleAssignmentType';
import { RoleStatus } from './roleStatus';
import { RoleType } from './roleType';
import { SamlApplication } from './samlApplication';
import { SamlApplicationSettings } from './samlApplicationSettings';
import { SamlApplicationSettingsSignOn } from './samlApplicationSettingsSignOn';
import { SamlAttributeStatement } from './samlAttributeStatement';
import { ScheduledUserLifecycleAction } from './scheduledUserLifecycleAction';
import { SchemeApplicationCredentials } from './schemeApplicationCredentials';
import { Scope } from './scope';
import { ScopeType } from './scopeType';
import { SecurePasswordStoreApplication } from './securePasswordStoreApplication';
import { SecurePasswordStoreApplicationSettings } from './securePasswordStoreApplicationSettings';
import { SecurePasswordStoreApplicationSettingsApplication } from './securePasswordStoreApplicationSettingsApplication';
import { SecurityQuestion } from './securityQuestion';
import { SecurityQuestionUserFactor } from './securityQuestionUserFactor';
import { SecurityQuestionUserFactorProfile } from './securityQuestionUserFactorProfile';
import { Session } from './session';
import { SessionAuthenticationMethod } from './sessionAuthenticationMethod';
import { SessionIdentityProvider } from './sessionIdentityProvider';
import { SessionIdentityProviderType } from './sessionIdentityProviderType';
import { SessionStatus } from './sessionStatus';
import { SignOnInlineHook } from './signOnInlineHook';
import { SingleLogout } from './singleLogout';
import { SmsTemplate } from './smsTemplate';
import { SmsTemplateType } from './smsTemplateType';
import { SmsUserFactor } from './smsUserFactor';
import { SmsUserFactorProfile } from './smsUserFactorProfile';
import { SocialAuthToken } from './socialAuthToken';
import { SpCertificate } from './spCertificate';
import { SwaApplication } from './swaApplication';
import { SwaApplicationSettings } from './swaApplicationSettings';
import { SwaApplicationSettingsApplication } from './swaApplicationSettingsApplication';
import { SwaThreeFieldApplication } from './swaThreeFieldApplication';
import { SwaThreeFieldApplicationSettings } from './swaThreeFieldApplicationSettings';
import { SwaThreeFieldApplicationSettingsApplication } from './swaThreeFieldApplicationSettingsApplication';
import { TempPassword } from './tempPassword';
import { ThreatInsightConfiguration } from './threatInsightConfiguration';
import { TokenAuthorizationServerPolicyRuleAction } from './tokenAuthorizationServerPolicyRuleAction';
import { TokenAuthorizationServerPolicyRuleActionInlineHook } from './tokenAuthorizationServerPolicyRuleActionInlineHook';
import { TokenUserFactor } from './tokenUserFactor';
import { TokenUserFactorProfile } from './tokenUserFactorProfile';
import { TotpUserFactor } from './totpUserFactor';
import { TotpUserFactorProfile } from './totpUserFactorProfile';
import { TrustedOrigin } from './trustedOrigin';
import { U2fUserFactor } from './u2fUserFactor';
import { U2fUserFactorProfile } from './u2fUserFactorProfile';
import { User } from './user';
import { UserActivationToken } from './userActivationToken';
import { UserCondition } from './userCondition';
import { UserCredentials } from './userCredentials';
import { UserFactor } from './userFactor';
import { UserIdString } from './userIdString';
import { UserIdentifierConditionEvaluatorPattern } from './userIdentifierConditionEvaluatorPattern';
import { UserIdentifierPolicyRuleCondition } from './userIdentifierPolicyRuleCondition';
import { UserIdentityProviderLinkRequest } from './userIdentityProviderLinkRequest';
import { UserLifecycleAttributePolicyRuleCondition } from './userLifecycleAttributePolicyRuleCondition';
import { UserNextLogin } from './userNextLogin';
import { UserPolicyRuleCondition } from './userPolicyRuleCondition';
import { UserProfile } from './userProfile';
import { UserSchema } from './userSchema';
import { UserSchemaAttribute } from './userSchemaAttribute';
import { UserSchemaAttributeEnum } from './userSchemaAttributeEnum';
import { UserSchemaAttributeItems } from './userSchemaAttributeItems';
import { UserSchemaAttributeMaster } from './userSchemaAttributeMaster';
import { UserSchemaAttributeMasterPriority } from './userSchemaAttributeMasterPriority';
import { UserSchemaAttributeMasterType } from './userSchemaAttributeMasterType';
import { UserSchemaAttributePermission } from './userSchemaAttributePermission';
import { UserSchemaAttributeScope } from './userSchemaAttributeScope';
import { UserSchemaAttributeType } from './userSchemaAttributeType';
import { UserSchemaAttributeUnion } from './userSchemaAttributeUnion';
import { UserSchemaBase } from './userSchemaBase';
import { UserSchemaBaseProperties } from './userSchemaBaseProperties';
import { UserSchemaDefinitions } from './userSchemaDefinitions';
import { UserSchemaProperties } from './userSchemaProperties';
import { UserSchemaPropertiesProfile } from './userSchemaPropertiesProfile';
import { UserSchemaPropertiesProfileItem } from './userSchemaPropertiesProfileItem';
import { UserSchemaPublic } from './userSchemaPublic';
import { UserStatus } from './userStatus';
import { UserStatusPolicyRuleCondition } from './userStatusPolicyRuleCondition';
import { UserType } from './userType';
import { VerifyFactorRequest } from './verifyFactorRequest';
import { VerifyUserFactorResponse } from './verifyUserFactorResponse';
import { WebAuthnUserFactor } from './webAuthnUserFactor';
import { WebAuthnUserFactorProfile } from './webAuthnUserFactorProfile';
import { WebUserFactor } from './webUserFactor';
import { WebUserFactorProfile } from './webUserFactorProfile';
import { WsFederationApplication } from './wsFederationApplication';
import { WsFederationApplicationSettings } from './wsFederationApplicationSettings';
import { WsFederationApplicationSettingsApplication } from './wsFederationApplicationSettingsApplication';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AllowedForEnum": AllowedForEnum,
        "AppAndInstanceConditionEvaluatorAppOrInstance.TypeEnum": AppAndInstanceConditionEvaluatorAppOrInstance.TypeEnum,
        "Application.StatusEnum": Application.StatusEnum,
        "ApplicationCredentialsScheme": ApplicationCredentialsScheme,
        "ApplicationCredentialsSigningUse": ApplicationCredentialsSigningUse,
        "ApplicationSignOnMode": ApplicationSignOnMode,
        "AuthenticationProviderType": AuthenticationProviderType,
        "AuthenticatorStatus": AuthenticatorStatus,
        "AuthenticatorType": AuthenticatorType,
        "AuthorizationServer.IssuerModeEnum": AuthorizationServer.IssuerModeEnum,
        "AuthorizationServer.StatusEnum": AuthorizationServer.StatusEnum,
        "AuthorizationServerCredentialsRotationMode": AuthorizationServerCredentialsRotationMode,
        "AuthorizationServerCredentialsUse": AuthorizationServerCredentialsUse,
        "AuthorizationServerPolicy.StatusEnum": AuthorizationServerPolicy.StatusEnum,
        "AuthorizationServerPolicyRule.StatusEnum": AuthorizationServerPolicyRule.StatusEnum,
        "AuthorizationServerPolicyRule.TypeEnum": AuthorizationServerPolicyRule.TypeEnum,
        "CAPTCHAInstance.TypeEnum": CAPTCHAInstance.TypeEnum,
        "CatalogApplicationStatus": CatalogApplicationStatus,
        "DNSRecordType": DNSRecordType,
        "DevicePolicyRuleCondition.TrustLevelEnum": DevicePolicyRuleCondition.TrustLevelEnum,
        "DevicePolicyRuleConditionPlatform.SupportedMDMFrameworksEnum": DevicePolicyRuleConditionPlatform.SupportedMDMFrameworksEnum,
        "DevicePolicyRuleConditionPlatform.TypesEnum": DevicePolicyRuleConditionPlatform.TypesEnum,
        "DomainCertificateSourceType": DomainCertificateSourceType,
        "DomainCertificateType": DomainCertificateType,
        "DomainResponse.CertificateSourceTypeEnum": DomainResponse.CertificateSourceTypeEnum,
        "DomainResponse.ValidationStatusEnum": DomainResponse.ValidationStatusEnum,
        "DomainValidationStatus": DomainValidationStatus,
        "EnabledStatus": EnabledStatus,
        "EventHook.StatusEnum": EventHook.StatusEnum,
        "EventHook.VerificationStatusEnum": EventHook.VerificationStatusEnum,
        "EventHookChannel.TypeEnum": EventHookChannel.TypeEnum,
        "EventHookChannelConfigAuthSchemeType": EventHookChannelConfigAuthSchemeType,
        "EventSubscriptions.TypeEnum": EventSubscriptions.TypeEnum,
        "FactorProvider": FactorProvider,
        "FactorResultType": FactorResultType,
        "FactorStatus": FactorStatus,
        "FactorType": FactorType,
        "FeatureStageState": FeatureStageState,
        "FeatureStageValue": FeatureStageValue,
        "FeatureType": FeatureType,
        "GroupRuleStatus": GroupRuleStatus,
        "GroupType": GroupType,
        "HrefObjectHints.AllowEnum": HrefObjectHints.AllowEnum,
        "IdentityProvider.IssuerModeEnum": IdentityProvider.IssuerModeEnum,
        "IdentityProvider.StatusEnum": IdentityProvider.StatusEnum,
        "IdentityProviderCredentialsTrust.RevocationEnum": IdentityProviderCredentialsTrust.RevocationEnum,
        "IdentityProviderPolicyRuleCondition.ProviderEnum": IdentityProviderPolicyRuleCondition.ProviderEnum,
        "InlineHookChannel.TypeEnum": InlineHookChannel.TypeEnum,
        "InlineHookStatus": InlineHookStatus,
        "InlineHookType": InlineHookType,
        "JwkUse.UseEnum": JwkUse.UseEnum,
        "LinkedObjectDetailsType": LinkedObjectDetailsType,
        "LogAuthenticationProvider": LogAuthenticationProvider,
        "LogCredentialProvider": LogCredentialProvider,
        "LogCredentialType": LogCredentialType,
        "LogSeverity": LogSeverity,
        "MDMEnrollmentPolicyRuleCondition.EnrollmentEnum": MDMEnrollmentPolicyRuleCondition.EnrollmentEnum,
        "NetworkZoneAddressType": NetworkZoneAddressType,
        "NetworkZoneStatus": NetworkZoneStatus,
        "NetworkZoneType": NetworkZoneType,
        "NetworkZoneUsage": NetworkZoneUsage,
        "OAuth2Claim.ClaimTypeEnum": OAuth2Claim.ClaimTypeEnum,
        "OAuth2Claim.GroupFilterTypeEnum": OAuth2Claim.GroupFilterTypeEnum,
        "OAuth2Claim.StatusEnum": OAuth2Claim.StatusEnum,
        "OAuth2Claim.ValueTypeEnum": OAuth2Claim.ValueTypeEnum,
        "OAuth2RefreshToken.StatusEnum": OAuth2RefreshToken.StatusEnum,
        "OAuth2Scope.ConsentEnum": OAuth2Scope.ConsentEnum,
        "OAuth2Scope.MetadataPublishEnum": OAuth2Scope.MetadataPublishEnum,
        "OAuth2ScopeConsentGrantSource": OAuth2ScopeConsentGrantSource,
        "OAuth2ScopeConsentGrantStatus": OAuth2ScopeConsentGrantStatus,
        "OAuth2Token.StatusEnum": OAuth2Token.StatusEnum,
        "OAuthEndpointAuthenticationMethod": OAuthEndpointAuthenticationMethod,
        "OAuthGrantType": OAuthGrantType,
        "OAuthResponseType": OAuthResponseType,
        "OktaSignOnPolicyRuleSignonActions.AccessEnum": OktaSignOnPolicyRuleSignonActions.AccessEnum,
        "OktaSignOnPolicyRuleSignonActions.FactorPromptModeEnum": OktaSignOnPolicyRuleSignonActions.FactorPromptModeEnum,
        "OpenIdConnectApplicationConsentMethod": OpenIdConnectApplicationConsentMethod,
        "OpenIdConnectApplicationIssuerMode": OpenIdConnectApplicationIssuerMode,
        "OpenIdConnectApplicationType": OpenIdConnectApplicationType,
        "OpenIdConnectRefreshTokenRotationType": OpenIdConnectRefreshTokenRotationType,
        "OrgContactType": OrgContactType,
        "OrgOktaSupportSetting": OrgOktaSupportSetting,
        "PasswordCredentialHashAlgorithm": PasswordCredentialHashAlgorithm,
        "PasswordPolicyAuthenticationProviderCondition.ProviderEnum": PasswordPolicyAuthenticationProviderCondition.ProviderEnum,
        "PasswordPolicyRecoveryEmail.StatusEnum": PasswordPolicyRecoveryEmail.StatusEnum,
        "PasswordPolicyRecoveryFactorSettings.StatusEnum": PasswordPolicyRecoveryFactorSettings.StatusEnum,
        "PasswordPolicyRecoveryQuestion.StatusEnum": PasswordPolicyRecoveryQuestion.StatusEnum,
        "PasswordPolicyRuleAction.AccessEnum": PasswordPolicyRuleAction.AccessEnum,
        "PlatformConditionEvaluatorPlatform.TypeEnum": PlatformConditionEvaluatorPlatform.TypeEnum,
        "PlatformConditionEvaluatorPlatformOperatingSystem.TypeEnum": PlatformConditionEvaluatorPlatformOperatingSystem.TypeEnum,
        "PlatformConditionEvaluatorPlatformOperatingSystemVersion.MatchTypeEnum": PlatformConditionEvaluatorPlatformOperatingSystemVersion.MatchTypeEnum,
        "Policy.StatusEnum": Policy.StatusEnum,
        "PolicyAccountLink.ActionEnum": PolicyAccountLink.ActionEnum,
        "PolicyNetworkCondition.ConnectionEnum": PolicyNetworkCondition.ConnectionEnum,
        "PolicyRule.StatusEnum": PolicyRule.StatusEnum,
        "PolicyRule.TypeEnum": PolicyRule.TypeEnum,
        "PolicyRuleActionsEnrollSelf": PolicyRuleActionsEnrollSelf,
        "PolicyRuleAuthContextCondition.AuthTypeEnum": PolicyRuleAuthContextCondition.AuthTypeEnum,
        "PolicySubjectMatchType": PolicySubjectMatchType,
        "PolicyType": PolicyType,
        "ProfileMappingPropertyPushStatus": ProfileMappingPropertyPushStatus,
        "Protocol.TypeEnum": Protocol.TypeEnum,
        "ProtocolAlgorithmTypeSignature.ScopeEnum": ProtocolAlgorithmTypeSignature.ScopeEnum,
        "ProtocolEndpoint.BindingEnum": ProtocolEndpoint.BindingEnum,
        "ProtocolEndpoint.TypeEnum": ProtocolEndpoint.TypeEnum,
        "ProtocolRelayStateFormat": ProtocolRelayStateFormat,
        "Provisioning.ActionEnum": Provisioning.ActionEnum,
        "ProvisioningDeprovisionedCondition.ActionEnum": ProvisioningDeprovisionedCondition.ActionEnum,
        "ProvisioningGroups.ActionEnum": ProvisioningGroups.ActionEnum,
        "ProvisioningSuspendedCondition.ActionEnum": ProvisioningSuspendedCondition.ActionEnum,
        "RoleAssignmentType": RoleAssignmentType,
        "RoleStatus": RoleStatus,
        "RoleType": RoleType,
        "ScheduledUserLifecycleAction.StatusEnum": ScheduledUserLifecycleAction.StatusEnum,
        "ScopeType": ScopeType,
        "SessionAuthenticationMethod": SessionAuthenticationMethod,
        "SessionIdentityProviderType": SessionIdentityProviderType,
        "SessionStatus": SessionStatus,
        "SmsTemplateType": SmsTemplateType,
        "SocialAuthToken.TokenTypeEnum": SocialAuthToken.TokenTypeEnum,
        "UserIdentifierConditionEvaluatorPattern.MatchTypeEnum": UserIdentifierConditionEvaluatorPattern.MatchTypeEnum,
        "UserIdentifierPolicyRuleCondition.TypeEnum": UserIdentifierPolicyRuleCondition.TypeEnum,
        "UserNextLogin": UserNextLogin,
        "UserSchemaAttributeMasterType": UserSchemaAttributeMasterType,
        "UserSchemaAttributeScope": UserSchemaAttributeScope,
        "UserSchemaAttributeType": UserSchemaAttributeType,
        "UserSchemaAttributeUnion": UserSchemaAttributeUnion,
        "UserStatus": UserStatus,
        "UserStatusPolicyRuleCondition.ValueEnum": UserStatusPolicyRuleCondition.ValueEnum,
        "VerifyUserFactorResponse.FactorResultEnum": VerifyUserFactorResponse.FactorResultEnum,
}

let typeMap: {[index: string]: any} = {
    "AcsEndpoint": AcsEndpoint,
    "ActivateFactorRequest": ActivateFactorRequest,
    "AppAndInstanceConditionEvaluatorAppOrInstance": AppAndInstanceConditionEvaluatorAppOrInstance,
    "AppAndInstancePolicyRuleCondition": AppAndInstancePolicyRuleCondition,
    "AppInstancePolicyRuleCondition": AppInstancePolicyRuleCondition,
    "AppLink": AppLink,
    "AppUser": AppUser,
    "AppUserCredentials": AppUserCredentials,
    "AppUserPasswordCredential": AppUserPasswordCredential,
    "Application": Application,
    "ApplicationAccessibility": ApplicationAccessibility,
    "ApplicationCredentials": ApplicationCredentials,
    "ApplicationCredentialsOAuthClient": ApplicationCredentialsOAuthClient,
    "ApplicationCredentialsSigning": ApplicationCredentialsSigning,
    "ApplicationCredentialsUsernameTemplate": ApplicationCredentialsUsernameTemplate,
    "ApplicationGroupAssignment": ApplicationGroupAssignment,
    "ApplicationLicensing": ApplicationLicensing,
    "ApplicationSettings": ApplicationSettings,
    "ApplicationSettingsNotes": ApplicationSettingsNotes,
    "ApplicationSettingsNotifications": ApplicationSettingsNotifications,
    "ApplicationSettingsNotificationsVpn": ApplicationSettingsNotificationsVpn,
    "ApplicationSettingsNotificationsVpnNetwork": ApplicationSettingsNotificationsVpnNetwork,
    "ApplicationVisibility": ApplicationVisibility,
    "ApplicationVisibilityHide": ApplicationVisibilityHide,
    "AssignRoleRequest": AssignRoleRequest,
    "AuthenticationProvider": AuthenticationProvider,
    "Authenticator": Authenticator,
    "AuthenticatorSettings": AuthenticatorSettings,
    "AuthorizationServer": AuthorizationServer,
    "AuthorizationServerCredentials": AuthorizationServerCredentials,
    "AuthorizationServerCredentialsSigningConfig": AuthorizationServerCredentialsSigningConfig,
    "AuthorizationServerPolicy": AuthorizationServerPolicy,
    "AuthorizationServerPolicyRule": AuthorizationServerPolicyRule,
    "AuthorizationServerPolicyRuleActions": AuthorizationServerPolicyRuleActions,
    "AuthorizationServerPolicyRuleConditions": AuthorizationServerPolicyRuleConditions,
    "AutoLoginApplication": AutoLoginApplication,
    "AutoLoginApplicationSettings": AutoLoginApplicationSettings,
    "AutoLoginApplicationSettingsSignOn": AutoLoginApplicationSettingsSignOn,
    "BasicApplicationSettings": BasicApplicationSettings,
    "BasicApplicationSettingsApplication": BasicApplicationSettingsApplication,
    "BasicAuthApplication": BasicAuthApplication,
    "BeforeScheduledActionPolicyRuleCondition": BeforeScheduledActionPolicyRuleCondition,
    "BookmarkApplication": BookmarkApplication,
    "BookmarkApplicationSettings": BookmarkApplicationSettings,
    "BookmarkApplicationSettingsApplication": BookmarkApplicationSettingsApplication,
    "BrowserPluginApplication": BrowserPluginApplication,
    "CAPTCHAInstance": CAPTCHAInstance,
    "CAPTCHAInstanceLink": CAPTCHAInstanceLink,
    "CallUserFactor": CallUserFactor,
    "CallUserFactorProfile": CallUserFactorProfile,
    "CatalogApplication": CatalogApplication,
    "ChangePasswordRequest": ChangePasswordRequest,
    "ClientPolicyCondition": ClientPolicyCondition,
    "ContextPolicyRuleCondition": ContextPolicyRuleCondition,
    "CreateSessionRequest": CreateSessionRequest,
    "CreateUserRequest": CreateUserRequest,
    "Csr": Csr,
    "CsrMetadata": CsrMetadata,
    "CsrMetadataSubject": CsrMetadataSubject,
    "CsrMetadataSubjectAltNames": CsrMetadataSubjectAltNames,
    "CustomHotpUserFactor": CustomHotpUserFactor,
    "CustomHotpUserFactorProfile": CustomHotpUserFactorProfile,
    "DNSRecord": DNSRecord,
    "DevicePolicyRuleCondition": DevicePolicyRuleCondition,
    "DevicePolicyRuleConditionPlatform": DevicePolicyRuleConditionPlatform,
    "Domain": Domain,
    "DomainCertificate": DomainCertificate,
    "DomainCertificateMetadata": DomainCertificateMetadata,
    "DomainLinks": DomainLinks,
    "DomainListResponse": DomainListResponse,
    "DomainResponse": DomainResponse,
    "Duration": Duration,
    "EmailUserFactor": EmailUserFactor,
    "EmailUserFactorProfile": EmailUserFactorProfile,
    "ErrorErrorCauses": ErrorErrorCauses,
    "EventHook": EventHook,
    "EventHookChannel": EventHookChannel,
    "EventHookChannelConfig": EventHookChannelConfig,
    "EventHookChannelConfigAuthScheme": EventHookChannelConfigAuthScheme,
    "EventHookChannelConfigHeader": EventHookChannelConfigHeader,
    "EventSubscriptions": EventSubscriptions,
    "Feature": Feature,
    "FeatureStage": FeatureStage,
    "ForgotPasswordResponse": ForgotPasswordResponse,
    "GrantTypePolicyRuleCondition": GrantTypePolicyRuleCondition,
    "Group": Group,
    "GroupCondition": GroupCondition,
    "GroupPolicyRuleCondition": GroupPolicyRuleCondition,
    "GroupProfile": GroupProfile,
    "GroupRule": GroupRule,
    "GroupRuleAction": GroupRuleAction,
    "GroupRuleConditions": GroupRuleConditions,
    "GroupRuleExpression": GroupRuleExpression,
    "GroupRuleGroupAssignment": GroupRuleGroupAssignment,
    "GroupRuleGroupCondition": GroupRuleGroupCondition,
    "GroupRulePeopleCondition": GroupRulePeopleCondition,
    "GroupRuleUserCondition": GroupRuleUserCondition,
    "GroupSchema": GroupSchema,
    "GroupSchemaAttribute": GroupSchemaAttribute,
    "GroupSchemaBase": GroupSchemaBase,
    "GroupSchemaBaseProperties": GroupSchemaBaseProperties,
    "GroupSchemaCustom": GroupSchemaCustom,
    "GroupSchemaDefinitions": GroupSchemaDefinitions,
    "HardwareUserFactor": HardwareUserFactor,
    "HardwareUserFactorProfile": HardwareUserFactorProfile,
    "HrefObject": HrefObject,
    "HrefObjectHints": HrefObjectHints,
    "IdentityProvider": IdentityProvider,
    "IdentityProviderApplicationUser": IdentityProviderApplicationUser,
    "IdentityProviderCredentials": IdentityProviderCredentials,
    "IdentityProviderCredentialsClient": IdentityProviderCredentialsClient,
    "IdentityProviderCredentialsSigning": IdentityProviderCredentialsSigning,
    "IdentityProviderCredentialsTrust": IdentityProviderCredentialsTrust,
    "IdentityProviderPolicy": IdentityProviderPolicy,
    "IdentityProviderPolicyRuleCondition": IdentityProviderPolicyRuleCondition,
    "InactivityPolicyRuleCondition": InactivityPolicyRuleCondition,
    "InlineHook": InlineHook,
    "InlineHookChannel": InlineHookChannel,
    "InlineHookChannelConfig": InlineHookChannelConfig,
    "InlineHookChannelConfigAuthScheme": InlineHookChannelConfigAuthScheme,
    "InlineHookChannelConfigHeaders": InlineHookChannelConfigHeaders,
    "InlineHookResponse": InlineHookResponse,
    "InlineHookResponseCommandValue": InlineHookResponseCommandValue,
    "InlineHookResponseCommands": InlineHookResponseCommands,
    "IonField": IonField,
    "IonForm": IonForm,
    "JsonWebKey": JsonWebKey,
    "JwkUse": JwkUse,
    "LifecycleExpirationPolicyRuleCondition": LifecycleExpirationPolicyRuleCondition,
    "LinkedObject": LinkedObject,
    "LinkedObjectDetails": LinkedObjectDetails,
    "LogActor": LogActor,
    "LogAuthenticationContext": LogAuthenticationContext,
    "LogClient": LogClient,
    "LogDebugContext": LogDebugContext,
    "LogEvent": LogEvent,
    "LogGeographicalContext": LogGeographicalContext,
    "LogGeolocation": LogGeolocation,
    "LogIpAddress": LogIpAddress,
    "LogIssuer": LogIssuer,
    "LogOutcome": LogOutcome,
    "LogRequest": LogRequest,
    "LogSecurityContext": LogSecurityContext,
    "LogTarget": LogTarget,
    "LogTransaction": LogTransaction,
    "LogUserAgent": LogUserAgent,
    "MDMEnrollmentPolicyRuleCondition": MDMEnrollmentPolicyRuleCondition,
    "ModelError": ModelError,
    "NetworkZone": NetworkZone,
    "NetworkZoneAddress": NetworkZoneAddress,
    "NetworkZoneLocation": NetworkZoneLocation,
    "OAuth2Actor": OAuth2Actor,
    "OAuth2Claim": OAuth2Claim,
    "OAuth2ClaimConditions": OAuth2ClaimConditions,
    "OAuth2Client": OAuth2Client,
    "OAuth2RefreshToken": OAuth2RefreshToken,
    "OAuth2Scope": OAuth2Scope,
    "OAuth2ScopeConsentGrant": OAuth2ScopeConsentGrant,
    "OAuth2ScopesMediationPolicyRuleCondition": OAuth2ScopesMediationPolicyRuleCondition,
    "OAuth2Token": OAuth2Token,
    "OAuthApplicationCredentials": OAuthApplicationCredentials,
    "OktaSignOnPolicy": OktaSignOnPolicy,
    "OktaSignOnPolicyConditions": OktaSignOnPolicyConditions,
    "OktaSignOnPolicyRule": OktaSignOnPolicyRule,
    "OktaSignOnPolicyRuleActions": OktaSignOnPolicyRuleActions,
    "OktaSignOnPolicyRuleConditions": OktaSignOnPolicyRuleConditions,
    "OktaSignOnPolicyRuleSignonActions": OktaSignOnPolicyRuleSignonActions,
    "OktaSignOnPolicyRuleSignonSessionActions": OktaSignOnPolicyRuleSignonSessionActions,
    "OpenIdConnectApplication": OpenIdConnectApplication,
    "OpenIdConnectApplicationIdpInitiatedLogin": OpenIdConnectApplicationIdpInitiatedLogin,
    "OpenIdConnectApplicationSettings": OpenIdConnectApplicationSettings,
    "OpenIdConnectApplicationSettingsClient": OpenIdConnectApplicationSettingsClient,
    "OpenIdConnectApplicationSettingsClientKeys": OpenIdConnectApplicationSettingsClientKeys,
    "OpenIdConnectApplicationSettingsRefreshToken": OpenIdConnectApplicationSettingsRefreshToken,
    "OrgContactTypeObj": OrgContactTypeObj,
    "OrgContactUser": OrgContactUser,
    "OrgOktaCommunicationSetting": OrgOktaCommunicationSetting,
    "OrgOktaSupportSettingsObj": OrgOktaSupportSettingsObj,
    "OrgPreferences": OrgPreferences,
    "OrgSetting": OrgSetting,
    "PasswordCredential": PasswordCredential,
    "PasswordCredentialHash": PasswordCredentialHash,
    "PasswordCredentialHook": PasswordCredentialHook,
    "PasswordDictionary": PasswordDictionary,
    "PasswordDictionaryCommon": PasswordDictionaryCommon,
    "PasswordExpirationPolicyRuleCondition": PasswordExpirationPolicyRuleCondition,
    "PasswordPolicy": PasswordPolicy,
    "PasswordPolicyAuthenticationProviderCondition": PasswordPolicyAuthenticationProviderCondition,
    "PasswordPolicyConditions": PasswordPolicyConditions,
    "PasswordPolicyDelegationSettings": PasswordPolicyDelegationSettings,
    "PasswordPolicyDelegationSettingsOptions": PasswordPolicyDelegationSettingsOptions,
    "PasswordPolicyPasswordSettings": PasswordPolicyPasswordSettings,
    "PasswordPolicyPasswordSettingsAge": PasswordPolicyPasswordSettingsAge,
    "PasswordPolicyPasswordSettingsComplexity": PasswordPolicyPasswordSettingsComplexity,
    "PasswordPolicyPasswordSettingsLockout": PasswordPolicyPasswordSettingsLockout,
    "PasswordPolicyRecoveryEmail": PasswordPolicyRecoveryEmail,
    "PasswordPolicyRecoveryEmailProperties": PasswordPolicyRecoveryEmailProperties,
    "PasswordPolicyRecoveryEmailRecoveryToken": PasswordPolicyRecoveryEmailRecoveryToken,
    "PasswordPolicyRecoveryFactorSettings": PasswordPolicyRecoveryFactorSettings,
    "PasswordPolicyRecoveryFactors": PasswordPolicyRecoveryFactors,
    "PasswordPolicyRecoveryQuestion": PasswordPolicyRecoveryQuestion,
    "PasswordPolicyRecoveryQuestionComplexity": PasswordPolicyRecoveryQuestionComplexity,
    "PasswordPolicyRecoveryQuestionProperties": PasswordPolicyRecoveryQuestionProperties,
    "PasswordPolicyRecoverySettings": PasswordPolicyRecoverySettings,
    "PasswordPolicyRule": PasswordPolicyRule,
    "PasswordPolicyRuleAction": PasswordPolicyRuleAction,
    "PasswordPolicyRuleActions": PasswordPolicyRuleActions,
    "PasswordPolicyRuleConditions": PasswordPolicyRuleConditions,
    "PasswordPolicySettings": PasswordPolicySettings,
    "PlatformConditionEvaluatorPlatform": PlatformConditionEvaluatorPlatform,
    "PlatformConditionEvaluatorPlatformOperatingSystem": PlatformConditionEvaluatorPlatformOperatingSystem,
    "PlatformConditionEvaluatorPlatformOperatingSystemVersion": PlatformConditionEvaluatorPlatformOperatingSystemVersion,
    "PlatformPolicyRuleCondition": PlatformPolicyRuleCondition,
    "Policy": Policy,
    "PolicyAccountLink": PolicyAccountLink,
    "PolicyAccountLinkFilter": PolicyAccountLinkFilter,
    "PolicyAccountLinkFilterGroups": PolicyAccountLinkFilterGroups,
    "PolicyNetworkCondition": PolicyNetworkCondition,
    "PolicyPeopleCondition": PolicyPeopleCondition,
    "PolicyRule": PolicyRule,
    "PolicyRuleActions": PolicyRuleActions,
    "PolicyRuleActionsEnroll": PolicyRuleActionsEnroll,
    "PolicyRuleAuthContextCondition": PolicyRuleAuthContextCondition,
    "PolicyRuleConditions": PolicyRuleConditions,
    "PolicySubject": PolicySubject,
    "PolicyUserNameTemplate": PolicyUserNameTemplate,
    "ProfileMapping": ProfileMapping,
    "ProfileMappingProperty": ProfileMappingProperty,
    "ProfileMappingSource": ProfileMappingSource,
    "Protocol": Protocol,
    "ProtocolAlgorithmType": ProtocolAlgorithmType,
    "ProtocolAlgorithmTypeSignature": ProtocolAlgorithmTypeSignature,
    "ProtocolAlgorithms": ProtocolAlgorithms,
    "ProtocolEndpoint": ProtocolEndpoint,
    "ProtocolEndpoints": ProtocolEndpoints,
    "ProtocolRelayState": ProtocolRelayState,
    "ProtocolSettings": ProtocolSettings,
    "Provisioning": Provisioning,
    "ProvisioningConditions": ProvisioningConditions,
    "ProvisioningDeprovisionedCondition": ProvisioningDeprovisionedCondition,
    "ProvisioningGroups": ProvisioningGroups,
    "ProvisioningSuspendedCondition": ProvisioningSuspendedCondition,
    "PushUserFactor": PushUserFactor,
    "PushUserFactorProfile": PushUserFactorProfile,
    "RecoveryQuestionCredential": RecoveryQuestionCredential,
    "ResetPasswordToken": ResetPasswordToken,
    "RiskPolicyRuleCondition": RiskPolicyRuleCondition,
    "RiskScorePolicyRuleCondition": RiskScorePolicyRuleCondition,
    "Role": Role,
    "SamlApplication": SamlApplication,
    "SamlApplicationSettings": SamlApplicationSettings,
    "SamlApplicationSettingsSignOn": SamlApplicationSettingsSignOn,
    "SamlAttributeStatement": SamlAttributeStatement,
    "ScheduledUserLifecycleAction": ScheduledUserLifecycleAction,
    "SchemeApplicationCredentials": SchemeApplicationCredentials,
    "Scope": Scope,
    "SecurePasswordStoreApplication": SecurePasswordStoreApplication,
    "SecurePasswordStoreApplicationSettings": SecurePasswordStoreApplicationSettings,
    "SecurePasswordStoreApplicationSettingsApplication": SecurePasswordStoreApplicationSettingsApplication,
    "SecurityQuestion": SecurityQuestion,
    "SecurityQuestionUserFactor": SecurityQuestionUserFactor,
    "SecurityQuestionUserFactorProfile": SecurityQuestionUserFactorProfile,
    "Session": Session,
    "SessionIdentityProvider": SessionIdentityProvider,
    "SignOnInlineHook": SignOnInlineHook,
    "SingleLogout": SingleLogout,
    "SmsTemplate": SmsTemplate,
    "SmsUserFactor": SmsUserFactor,
    "SmsUserFactorProfile": SmsUserFactorProfile,
    "SocialAuthToken": SocialAuthToken,
    "SpCertificate": SpCertificate,
    "SwaApplication": SwaApplication,
    "SwaApplicationSettings": SwaApplicationSettings,
    "SwaApplicationSettingsApplication": SwaApplicationSettingsApplication,
    "SwaThreeFieldApplication": SwaThreeFieldApplication,
    "SwaThreeFieldApplicationSettings": SwaThreeFieldApplicationSettings,
    "SwaThreeFieldApplicationSettingsApplication": SwaThreeFieldApplicationSettingsApplication,
    "TempPassword": TempPassword,
    "ThreatInsightConfiguration": ThreatInsightConfiguration,
    "TokenAuthorizationServerPolicyRuleAction": TokenAuthorizationServerPolicyRuleAction,
    "TokenAuthorizationServerPolicyRuleActionInlineHook": TokenAuthorizationServerPolicyRuleActionInlineHook,
    "TokenUserFactor": TokenUserFactor,
    "TokenUserFactorProfile": TokenUserFactorProfile,
    "TotpUserFactor": TotpUserFactor,
    "TotpUserFactorProfile": TotpUserFactorProfile,
    "TrustedOrigin": TrustedOrigin,
    "U2fUserFactor": U2fUserFactor,
    "U2fUserFactorProfile": U2fUserFactorProfile,
    "User": User,
    "UserActivationToken": UserActivationToken,
    "UserCondition": UserCondition,
    "UserCredentials": UserCredentials,
    "UserFactor": UserFactor,
    "UserIdString": UserIdString,
    "UserIdentifierConditionEvaluatorPattern": UserIdentifierConditionEvaluatorPattern,
    "UserIdentifierPolicyRuleCondition": UserIdentifierPolicyRuleCondition,
    "UserIdentityProviderLinkRequest": UserIdentityProviderLinkRequest,
    "UserLifecycleAttributePolicyRuleCondition": UserLifecycleAttributePolicyRuleCondition,
    "UserPolicyRuleCondition": UserPolicyRuleCondition,
    "UserProfile": UserProfile,
    "UserSchema": UserSchema,
    "UserSchemaAttribute": UserSchemaAttribute,
    "UserSchemaAttributeEnum": UserSchemaAttributeEnum,
    "UserSchemaAttributeItems": UserSchemaAttributeItems,
    "UserSchemaAttributeMaster": UserSchemaAttributeMaster,
    "UserSchemaAttributeMasterPriority": UserSchemaAttributeMasterPriority,
    "UserSchemaAttributePermission": UserSchemaAttributePermission,
    "UserSchemaBase": UserSchemaBase,
    "UserSchemaBaseProperties": UserSchemaBaseProperties,
    "UserSchemaDefinitions": UserSchemaDefinitions,
    "UserSchemaProperties": UserSchemaProperties,
    "UserSchemaPropertiesProfile": UserSchemaPropertiesProfile,
    "UserSchemaPropertiesProfileItem": UserSchemaPropertiesProfileItem,
    "UserSchemaPublic": UserSchemaPublic,
    "UserStatusPolicyRuleCondition": UserStatusPolicyRuleCondition,
    "UserType": UserType,
    "VerifyFactorRequest": VerifyFactorRequest,
    "VerifyUserFactorResponse": VerifyUserFactorResponse,
    "WebAuthnUserFactor": WebAuthnUserFactor,
    "WebAuthnUserFactorProfile": WebAuthnUserFactorProfile,
    "WebUserFactor": WebUserFactor,
    "WebUserFactorProfile": WebUserFactorProfile,
    "WsFederationApplication": WsFederationApplication,
    "WsFederationApplicationSettings": WsFederationApplicationSettings,
    "WsFederationApplicationSettingsApplication": WsFederationApplicationSettingsApplication,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
