# Okta Node SDK Changelog

# 7.0.0

### Other

- [#373](https://github.com/okta/okta-sdk-nodejs/pull/373) Uses openapi-generator for creating SDK.

# 6.6.0

### Bug Fixes

- [#360](https://github.com/okta/okta-sdk-nodejs/pull/360) Fixes path and type signature issues for MemoryStore.
- [#365](https://github.com/okta/okta-sdk-nodejs/pull/365) Adds support for custom attributes in UserProfile and GroupProfile

# 6.5.0

### Features

- [#329](https://github.com/okta/okta-sdk-nodejs/pull/329) Supports EC private keys for OAuth2 service applications

### Other 

- [#323](https://github.com/okta/okta-sdk-nodejs/pull/323) Adds `userAgent` property to configurtation type and documents its usage

## 6.4.0

### Features

- [#307](https://github.com/okta/okta-sdk-nodejs/pull/307) Supports HTTPS proxy for Okta http client 
- [#306](https://github.com/okta/okta-sdk-nodejs/pull/306) 
  - Adds Email Template API
    - new models:
      - `EmailTemplate`
      - `EmailTemplateContent`
      - `EmailTemplateCustomization`
      - `EmailTemplateCustomizationRequest`
      - `EmailTemplateTestRequest`
    - Client:
      - `listEmailTemplates`
      - `getEmailTemplate`
      - `deleteEmailTemplateCustomizations`
      - `listEmailTemplateCustomizations`
      - `createEmailTemplateCustomization`
      - `deleteEmailTemplateCustomization`
      - `getEmailTemplateCustomization`
      - `updateEmailTemplateCustomization`
      - `getEmailTemplateCustomizationPreview`
      - `getEmailTemplateDefaultContent`
      - `getEmailTemplateDefaultContentPreview`
      - `sendTestEmail`
      
## 6.3.1

### Bug Fixes

- [#304](https://github.com/okta/okta-sdk-nodejs/pull/304) Fixes TypeScript compilation errors when `isolatedModules` and `importsNotUsedAsValues` flags are enabled

### Other

- [#301](https://github.com/okta/okta-sdk-nodejs/pull/301) Bumps node-fetch to 2.6.7

## 6.3.0

### Features

- [#299](https://github.com/okta/okta-sdk-nodejs/pull/299/files) Adds Subscription, Application Feature APIs and adds suppport for Org2Org applications.
  - new Models/Enum:
    - `ApplicationFeature`
    - `CapabilitiesCreateObject`
    - `CapabilitiesObject`
    - `CapabilitiesUpdateObject`
    - `ChangeEnum`
    - `LifecycleCreateSettingsObject`
    - `LifecycleDeactivateSettingsObject`
    - `NotificationType`
    - `Org2OrgApplication`
    - `Org2OrgApplicationSettings`
    - `Org2OrgApplicationSettingsApp`
    - `PasswordSettingObject`
    - `ProfileSettingObject`
    - `ProvisioningConnection`
    - `ProvisioningConnectionAuthScheme`
    - `ProvisioningConnectionProfile`
    - `ProvisioningConnectionRequest`
    - `ProvisioningConnectionStatus`
    - `SeedEnum`
    - `Subscription`
    - `SubscriptionStatus`
  - Client:
    - `getDefaultProvisioningConnectionForApplication`
    - `setDefaultProvisioningConnectionForApplication`
    - `activateDefaultProvisioningConnectionForApplication`
    - `deactivateDefaultProvisioningConnectionForApplication`
    - `listFeaturesForApplication`
    - `getFeatureForApplication`
    - `updateFeatureForApplication`
    - `updateFeatureForApplication`
    - `listRoleSubscriptions`
    - `getRoleSubscriptionByNotificationType`
    - `subscribeRoleSubscriptionByNotificationType`
    - `unsubscribeRoleSubscriptionByNotificationType`
    - `listUserSubscriptions`
    - `getUserSubscriptionByNotificationType`
    - `subscribeUserSubscriptionByNotificationType`
    - `unsubscribeUserSubscriptionByNotificationType`

## 6.2.0

### Others

- [#295](https://github.com/okta/okta-sdk-nodejs/pull/295) Upgrades `parse-link-header` to v2.0 to resolve `ReDos` vulnerability issue.

## 6.1.0

### Features

- [#288](https://github.com/okta/okta-sdk-nodejs/pull/288) Adds option for configuring Response internal buffer size for default cache middleware
## 6.0.1

### Bug Fixes

- [#293](https://github.com/okta/okta-sdk-nodejs/pull/293) Sets correct parent class for `DeviceAccessPolicyRuleCondition`

## 6.0.0

### Features

- [#289](https://github.com/okta/okta-sdk-nodejs/pull/289) Adds Brand API, Profile Enrollment and Access Policy models
  - Models/Enum:
    - added `Brand`
    - added `EmailTemplateTouchPointVariant`
    - added `EndUserDashboardTouchPointVariant`
    - added `ErrorPageTouchPointVariant`
    - added `ImageUploadResponse`
    - added `SignInPageTouchPointVariant`
    - added `Theme`
    - added `AccessPolicy`
    - added `AccessPolicyConstraint`
    - added `AccessPolicyConstraints`
    - added `AccessPolicyRule`
    - added `AccessPolicyRuleActions`
    - added `AccessPolicyRuleApplicationSignOn`
    - added `AccessPolicyRuleConditions`
    - added `AccessPolicyRuleCustomCondition`
    - added `AuthenticatorProvider`
    - added `AuthenticatorProviderConfiguration`
    - added `AuthenticatorProviderConfigurationUserNamePlate`
    - added `Compliance`
    - added `ChannelBinding`
    - added `FipsEnum`
    - added `KnowledgeConstraint`
    - added `PossessionConstraint`
    - added `PreRegistrationInlineHook`
    - added `ProfileEnrollmentPolicy`
    - added `ProfileEnrollmentPolicyRule`
    - added `ProfileEnrollmentPolicyRuleAction`
    - added `ProfileEnrollmentPolicyRuleActions`
    - added `ProfileEnrollmentPolicyRuleActivationRequirement`
    - added `ProfileEnrollmentPolicyRuleProfileAttribute`
    - added `RequiredEnum`
    - added `UserTypeCondition`
    - added `UserVerificationEnum`
    - added `VerificationMethod`
  - Client:
    - added `listBrands`
    - added `getBrand`
    - added `updateBrand`
    - added `listBrandThemes`
    - added `getBrandTheme`
    - added `updateBrandTheme`
    - added `deleteBrandThemeBackgroundImage`
    - added `uploadBrandThemeBackgroundImage`
    - added `deleteBrandThemeFavicon`
    - added `uploadBrandThemeFavicon`
    - added `deleteBrandThemeLogo`
    - added `uploadBrandThemeLogo`
    - added `updateOrgLogo`
    - added `updateAuthenticator`

- [#287](https://github.com/okta/okta-sdk-nodejs/pull/287) Adds Authenticators API
  - Models/Enum:
    - added `Authenticator`
    - added `AuthenticatorSettings`
    - added `AuthenticatorStatus`
    - added `AuthenticatorType`
  - Client:
    - added method `listAuthenticators`
    - added method `getAuthenticator`
    - added method `activateAuthenticator`
    - added method `deactivateAuthenticator`

- [#278](https://github.com/okta/okta-sdk-nodejs/pull/278) Adds Org, Group Schema, Domain API, introduces enum modules. Please see list below for detailed information:
  - Models/Enum:
    - added `AllowedForEnum`
    - added `ApplicationSettingsNotes`
    - added `DNSRecord`
    - added `DNSRecordType`
    - added `Domain`
    - added `DomainCertificate`
    - added `DomainCertificateMetadata`
    - added `DomainCertificateSourceType`
    - added `DomainCertificateType`
    - added `DomainListResponse`
    - added `DomainValidationStatus`
    - added `GroupSchema`
    - added `GroupSchemaAttribute`
    - added `GroupSchemaBase`
    - added `GroupSchemaBaseProperties`
    - added `GroupSchemaCustom`
    - added `GroupSchemaCustomDefinitions`
    - added `OrgContactType`
    - added `OrgContactTypeObject`
    - added `OrgContactUser`
    - added `OrgOktaCommunicationSetting`
    - added `OrgOktaSupportSetting`
    - added `OrgOktaSupportSettingsObj`
    - added `OrgPreferences`
    - added `OrgSetting`
    - added `TokenAuthorizationServerPolicyRuleActionInlineHook`
    - added `UserIdString`
    - added `SignOnInlineHook`
    - added `UserSchemaAttributeEnum`
    - added `UserSchemaAttributeItems`
    - added `UserSchemaAttributeMasterPriority`
    - added `UserSchemaAttributeMasterType`
    - added `UserSchemaAttributeScope`
    - added `UserSchemaAttributeType`
    - added `UserSchemaAttributeUnion`
    - added `UserSchemaAttributeUnion`
    - added `UserSchemaProperties`
    - added `UserSchemaPropertiesProfile`
    - added `UserSchemaPropertiesProfileItem`
    - converted to enum `ApllicationCredentialsScheme`
    - converted to enum `ApplicationCredentialsSigningUse`
    - converted to enum `ApplicatonSignOnMode`
    - converted to enum `AuthenticationProviderType`
    - converted to enum `AuthorizationServerCredentialsMode`
    - converted to enum `AuthorizationServerCredentialsUse`
    - converted to enum `CatalogApplicationStatus`
    - converted to enum `EnabledStatus`
    - converted to enum `EventHookChannelConfigAuthSchemeType`
    - converted to enum `FactorProvider`
    - converted to enum `FactorResultType`
    - converted to enum `FactorStatus`
    - converted to enum `FactorType`
    - converted to enum `FeatureStageState`
    - converted to enum `FeatureStageValue`
    - converted to enum `FeatureType`
    - converted to enum `GroupRuleStatus`
    - converted to enum `GroupType`
    - converted to enum `InlineHookStatus`
    - converted to enum `InlineHookType`
    - converted to enum `LinkedObjectDetailsType`
    - converted to enum `LogAuthenticationProvider`
    - converted to enum `LogCredentialsProvider`
    - converted to enum `LogCredentialType`
    - converted to enum `LogSeverity`
    - converted to enum `NetworkZoneAddressType`
    - converted to enum `NetworkZoneStatus`
    - converted to enum `NetworkZoneType`
    - converted to enum `NetworkZoneUsage`
    - converted to enum `OAuth2ScopeConsentGrantSource`
    - converted to enum `OAuth2ScopeConsentGrantStatus`
    - converted to enum `OAuthEndpointAuthenticationMethod`
    - converted to enum `OAuthGrantType`
    - converted to enum `OAuthResponseType`
    - converted to enum `OpenIdConnectApplicationConsentMethod`
    - converted to enum `OpenIdConnectApplicationIssuerMode`
    - converted to enum `OpenIdConnectApplicationType`
    - converted to enum `OpenIdConnectRefreshTokenRotationType`
    - converted to enum `PasswordCredentialHashAlgorithm`
    - converted to enum `PolicyRuleActionsEnrollSelf`
    - converted to enum `PolicySubjectMatchType`
    - converted to enum `PolicyType`
    - converted to enum `ProfileMappingPropertyPushStatus`
    - converted to enum `ProtocolRelayStateFormat`
    - converted to enum `RoleAssignmentType`
    - converted to enum `RoleStatus`
    - converted to enum `RoleType`
    - converted to enum `ScopeType`
    - converted to enum `SessionAuthenticationMethod`
    - converted to enum `SessionIdentityProviderType`
    - converted to enum `SessionStatus`
    - converted to enum `SmsTemplateType`
    - converted to enum `UserNextLogin`
    - converted to enum `UserStatus`
    - updated `ApplicationSettings` (`notes` property added)
    - updated `ApplicationVisibility` (`autoLaunch` property added)
    - updated `GroupRule` (`delete` method now accepts optional `queryParameters`)
    - updated `NetworkZone` (CRUD method return `Promise<NetworkZone>`)
    - updated `OpenIdConnectApplicationSettingsClient` (`wildcard_redirect` property added)
    - updated `SamlApplicationSettingsSignOn` (`inline_hooks` property added)
    - updated `TokenAuthorizationServerPolicyRuleAction` (`inline_hook` property added)
    - updated `User` (`getRole` method added)
    - updated `UserSchema` (`properties` property type changed to `UserSchemaProperties`)
    - updated `UserSchemaAttribute` (mulitple properties added, `type` and `scope` properties type changed to `UserSchemaAttributeType` and `UserSchemaAttributeScope` respectively)
    - updated `UserSchemaAttributeMaster` (`priority` property added, `type` property type changed to `UserSchemaAttributeMasterType`)
  - Client:
    - added `listDomains`
    - added `createDomain`
    - added `deleteDomain`
    - added `getDomain`
    - added `createCertificate`
    - added `verifyDomain`
    - added `getGroupSchema`
    - added `updateGroupSchema`
    - added `getOrgSettings`
    - added `partialUpdateOrgSetting`
    - added `updateOrgSetting`
    - added `getOrgContactTypes`
    - added `getOrgContactUser`
    - added `updateOrgContactUser`
    - added `getOrgPreferences`
    - added `hideOktaUIFooter`
    - added `showOktaUIFooter`
    - added `getOktaCommunicationSettings`
    - added `optInUsersToOktaCommunicationEmails`
    - added `optOutUsersFromOktaCommunicationEmails`
    - added `getOrgOktaSupportSettings`
    - added `extendOktaSupport`
    - added `grantOktaSupport`
    - added `revokeOktaSupport`
    - added `getUserRole`
    - updated `listPolicies` (returns `Promise<Policy>`)
    - updated `activateNetworZone` (returns `Promise<NetworkZone>`)
    - updated `deactivateNetworkZone` (returns `Promise<NetworkZone>`)
    - updated `listGroups` (no longer accepts `filter` parameter trhough `queryParameters`)
    - updated `deleteGroupRule` (`queryParameters` optional parameter added)

- [#273](https://github.com/okta/okta-sdk-nodejs/pull/273) Introduces parameterized `getApplication` and `createApplication` methods

## 5.0.0

- [#259](https://github.com/okta/okta-sdk-nodejs/pull/259) Drop support for Node 10

- [#248](https://github.com/okta/okta-sdk-nodejs/pull/248) Generates SDK over latest spec `@okta/openapi@2.2.4` that includes new endpoints and updated method signatures. Please see list below for detailed information:
  - Fixes
    - correct njwt-facing type signatures
    - force required params in js code
    - correct parsing of models' properties of array types
  - Model changes
    - `AuthorizationServer`
      - method `listPolicies`: returns `Collection<AuthorizationServerPolicy>`
      - method `createPolicy`: parameter type changed to `AuthorizationServerPolicyOptions`, returns `Collection<AuthorizationServerPolicy>`
      - method `getPolicy`: returns `Promise<AuthorizationServerPolicy>`
      - method `updatePolicy`: second parameter type changed to `AuthorizationServerPolicyOptions`, returns `Promise<AuthorizationServerPolicy>`
    - `PolicyRule`
      - added properties: `actions: PolicyRuleActions`, `conditions: PolicyRuleConditions`, `name: string`
    - `SamlApplicationSettingsSignOn`
      - added properties: `slo: SingleLogout`, `spCertificate: SpCertificate`
    - `InlineHookChannelConfig`
      - added properties: `method: string`
    - `OpenIdConnectApplicationSettingsClient`
      - added properties: `idp_initiated_login: OpenIdConnectApplicationIdpInitiatedLogin`
    - `UserType`
      - added method `replaceUserType`
    - added `AuthorizationServerPolicy`
    - added `AuthorizationServerPolicyRule`
    - added `AuthorizationServerPolicyRuleActions`
    - added `AuthorizationServerPolicyRuleActions`
    - added `AuthorizationServerPolicyRuleConditions`
    - added `NetworkZone`
    - added `NetworkZoneAddress`
    - added `NetworkZoneAddressType`
    - added `NetworkZoneLocation`
    - added `NetworkZoneStatus`
    - added `NetworkZoneType`
    - added `NetworkZoneUsage`
    - added `OpenIdConnectApplicationIdpInitiatedLogin`
    - added `PolicyRuleActions`
    - added `PolicyRuleActionsEnroll`
    - added `PolicyRuleActionsEnrollSelf`
    - added `ProfileMapping`
    - added `ProfileMappingProperty`
    - added `ProfileMappingPropertyPushStatus`
    - added `ProfileMappingSource`
    - added `SingleLogout`
    - added `SpCertificate`
    - added `ThreatInsightConfiguration`
    - added `TokenAuthorizationServerPolicyRuleAction`
    - added `UserSchema`
    - added `UserSchemaAttribute`
    - added `UserSchemaAttributeMaster`
    - added `UserSchemaAttributePermission`
    - added `UserSchemaBase`
    - added `UserSchemaBaseProperties`
    - added `UserSchemaDefinitions`
    - added `UserSchemaPublic`
  - Client changes
    - method `createAuthorizationServerPolicy`: added `authorizationServerPolicy: AuthorizationServerPolicyOptions` parameter
    - method `listAuthorizationServerPolicies`: returns `Collection<AuthorizationServerPolicy>`
    - method `getAuthorizationServerPolicy`: returns `Promise<AuthorizationServerPolicy>`
    - method `updateAuthorizationServerPolicy`: second parameter type changed to `AuthorizationServerPolicyOptions`, returns `Promise<AuthorizationServerPolicy>`
    - method `listPolicies` returns `Promise<AuthorizationServerPolicy>`
    - added method `activateAuthorizationServerPolicy`
    - added method `deactivateAuthorizationServerPolicy`
    - added method `listAuthorizationServerPolicyRules`
    - added method `createAuthorizationServerPolicyRule`
    - added method `deleteAuthorizationServerPolicyRule`
    - added method `getAuthorizationServerPolicyRule`
    - added method `updateAuthorizationServerPolicyRule`
    - added method `activateAuthorizationServerPolicyRule`
    - added method `deactivateAuthorizationServerPolicyRule`
    - added method `listProfileMappings`
    - added method `getProfileMapping`
    - added method `updateProfileMapping`
    - added method `getApplicationUserSchema`
    - added method `updateApplicationUserProfile`
    - added method `getUserSchema`
    - added method `updateUserProfile`
    - added method `getCurrentConfiguration`
    - added method `updateConfiguration`
    - added method `createNetworkZone`
    - added method `deleteNetworkZone`
    - added method `getNetworkZone`
    - added method `updateNetworkZone`
    - added method `activateNetworkZone`
    - added method `deactivateNetworkZone`
## 4.6.1
- [#300](https://github.com/okta/okta-sdk-nodejs/pull/300) Upgrade parse-link-header for security vuln

## 4.6.0

### Features

- [#237](https://github.com/okta/okta-sdk-nodejs/pull/237) Exposes models and type declarations through library root

### Bug Fixes

- [#247](https://github.com/okta/okta-sdk-nodejs/pull/247) Fixes OAuth flow error for apps using multiple JWKs

## 4.5.0

### Features

- [#231](https://github.com/okta/okta-sdk-nodejs/pull/231) Adds TypeScript type definitions

## 4.4.0

- [#218](https://github.com/okta/okta-sdk-nodejs/pull/218)
  - Uses `req.url` as key to cache response
  - Adds `json()` function to the default cache middleware response

- [#217](https://github.com/okta/okta-sdk-nodejs/pull/217) Upgrade dependencies to latest versions, include node 14 into CI test platforms

## 4.3.1

### Bug Fixes

- [#213](https://github.com/okta/okta-sdk-nodejs/pull/213) Fixes off-by-one error in Collection iterator

## 4.3.0

### Features

- [#210](https://github.com/okta/okta-sdk-nodejs/pull/210)
  - Adds properties `RefreshToken` and `Jwks` to `OpenIdConnectApplicationSettingsClient` model
  - Adds models:
    - OpenIdConnectApplicationSettingsClientKeys
    - OpenIdConnectApplicationSettingsRefreshToken
    - OpenIdConnectRefreshTokenRotationType

## 4.2.0

- [#190](https://github.com/okta/okta-sdk-nodejs/pull/190) [#194](https://github.com/okta/okta-sdk-nodejs/pull/194) Updates tests

- [#196](https://github.com/okta/okta-sdk-nodejs/pull/196) Updates dependency "flat"

- [#203](https://github.com/okta/okta-sdk-nodejs/pull/203) Upgrade isomorphic-fetch for security vuln

- [#205](https://github.com/okta/okta-sdk-nodejs/pull/205)
  - Supports required params validation
  - Adds models:
    - AcsEndpoint
    - CustomHotpUserFactor
    - CustomHotpUserFactorProfile

## 4.1.2

- [#203](https://github.com/okta/okta-sdk-nodejs/pull/203) Upgrade isomorphic-fetch for security vuln

- [#206](https://github.com/okta/okta-sdk-nodejs/pull/206) Updates dependency "flat"

## 4.1.1

- [#191](https://github.com/okta/okta-sdk-nodejs/pull/191) Fixes for...of iteration bug in collection module

- [#180](https://github.com/okta/okta-sdk-nodejs/pull/180) Fix generated url encoding issue for expirePasswordAndGetTemporaryPassword

## 4.1.0

- [#174](https://github.com/okta/okta-sdk-nodejs/pull/174) [#175](https://github.com/okta/okta-sdk-nodejs/pull/175) [#176](https://github.com/okta/okta-sdk-nodejs/pull/176) [#178](https://github.com/okta/okta-sdk-nodejs/pull/178) Updates and adds tests

- [#182](https://github.com/okta/okta-sdk-nodejs/pull/182)  Updates README for consistency and formatting

## 4.0.0

- [#167](https://github.com/okta/okta-sdk-nodejs/pull/167) Drop support for Node 8

- [#147](https://github.com/okta/okta-sdk-nodejs/pull/147) Major release to update APIs with latest `@okta/openapi` (v2.0.0) that includes new endpoints and changed method names. Please see list below for detailed information:
  - Fixes
    - Fix model constructor when initialize property models
    - Pass proper headers for http request
  - Factory changes
    - Change `FactorFactory` to `UserFactorFactory`
  - Model changes
    - Add `ActivateFactorRequest`
    - Add `AppAndInstanceConditionEvaluatorAppOrInstance`
    - Add `AppAndInstancePolicyRuleCondition`
    - Add `AppInstancePolicyRuleCondition`
    - `Application`
      - Add method `initializtion`
      - Add method `generateCsr`
      - Add method `getCsr`
      - Add method `revokeCsr`
      - Add method `listCsrs`
      - Add method `publishCerCert`
      - Add method `publishBinaryCerCert`
      - Add method `publishDerCert`
      - Add method `publishBinaryDerCert`
      - Add method`publishBinaryPemCert`
      - Add method `listOAuth2Tokens`
      - Add method`revokeOAuth2TokenForApplication`
      - Add method `getOAuth2Token`
      - Add method `revokeOAuth2Tokens`
      - Add method `listScopeConsentGrants`
      - Add method `grantConsentToScope`
      - Add method `revokeScopeConsentGrant`
      - Add method `getScopeConsentGrant`
    - Add `ApplicationCredentialsSigningUse`
    - Add `AssignRoleRequest`
    - Add `AuthorizationServer`
    - Add `AuthorizationServerCredentials`
    - Add `AuthorizationServerCredentialsRotationMode`
    - Add `AuthorizationServerCredentialsSigningConfig`
    - Add `AuthorizationServerCredentialsUse`
    - Add `BeforeScheduledActionPolicyRuleCondition`
    - Add `Csr`
    - Add `CsrMetadata`
    - Add `CsrMetadataSubject`
    - Add `CsrMetadataSubjectAltNames`
    - Change `CallFactor` to `CallUserFactor`
    - Change `CallFactorProfile` to `CallUserFactorProfile`
    - Add `CatalogApplication`
    - Add `CatalogApplicationStatus`
    - Add `ClientPolicyCondition`
    - Add `ContextPolicyRuleCondition`
    - Add `CreateUserRequest`
    - Add `DevicePolicyRuleCondition`
    - Add `DevicePolicyRuleConditionPlatform`
    - Add `Duration`
    - Remove `EmailAddress`
    - Remove `EmailStatus`
    - Remove `EmailType`
    - Change `EmailFactor` to `EmailUserFactor`
    - Change `EmailFactorProfile` to `EmailUserFactorProfile`
    - Add `EnabledStatus`
    - Add `EventHook`
    - Add `EventHookChannel`
    - Add `EventHookChannelConfig`
    - Add `EventHookChannelConfigAuthScheme`
    - Add `EventHookChannelConfigAuthSchemeType`
    - Add `EventHookChannelConfigHeader`
    - Add `EventSubscriptions`
    - Change `Factor` to `UserFactor`
    - Add `Feature`
    - Add `FeatureStage`
    - Add `FeatureStageState`
    - Add `FeatureStageValue`
    - Add `FeatureType`
    - Add `GrantTypePolicyRuleCondition`
    - `Group`
      - Add method `listApplications`
      - Add method `assignRole`
    - Add `GroupPolicyRuleCondition`
    - `GroupRule`
      - Add method `delete`
    - Add `GroupType`
    - Remove `GroupStats`
    - Change `HardwareFactor` to `HardwareUserFactor`
    - Change `HardwareFactorProfile` to `HardwareUserFactorProfile`
    - Add `IdentityProvider`
    - Add `IdentityProviderApplicationUser`
    - Add `IdentityProviderCredentials`
    - Add `IdentityProviderCredentialsClient`
    - Add `IdentityProviderCredentialsSigning`
    - Add `IdentityProviderCredentialsTrust`
    - Add `IdentityProviderPolicy`
    - Add `IdentityProviderPolicyRuleCondition`
    - Add `InactivityPolicyRuleCondition`
    - Add `InlineHook`
    - Add `InlineHookChannel`
    - Add `InlineHookChannelConfig`
    - Add `InlineHookChannelConfigAuthScheme`
    - Add `InlineHookChannelConfigHeaders`
    - Add `InlineHookPayload`
    - Add `InlineHookResponse`
    - Add `InlineHookResponseCommandValue`
    - Add `InlineHookResponseCommands`
    - Add `InlineHookStatus`
    - Add `InlineHookType`
    - Add `IonField`
    - Add `IonForm`
    - Add `JwkUse`
    - Add `LifecycleExpirationPolicyRuleCondition`
    - Add `LinkedObject`
    - Add `LinkedObjectDetails`
    - Add `LinkedObjectDetailsType`
    - Add `MDMEnrollmentPolicyRuleCondition`
    - Add `OAuth2Actor`
    - Add `OAuth2Claim`
    - Add `OAuth2ClaimConditions`
    - Add `OAuth2Client`
    - Add `OAuth2Actor`
    - Add `OAuth2Scope`
    - Add `OAuth2ScopeConsentGrant`
    - Add `OAuth2ScopeConsentGrantSource`
    - Add `OAuth2ScopeConsentGrantStatus`
    - Add `OAuth2ScopesMediationPolicyRuleCondition`
    - Add `OAuth2Token`
    - Add `OAuthAuthorizationPolicy`
    - Add `OpenIdConnectApplicationIssuerMode`
    - `PasswordCredential`
      - Add property `hash`
      - Add property `hook`
    - Add `PasswordCredentialHash`
    - Add `PasswordCredentialHashAlgorithm`
    - Add `PasswordCredentialHook`
    - Add `PasswordExpirationPolicyRuleCondition`
    - Add `PlatformConditionEvaluatorPlatform`
    - Add `PlatformConditionEvaluatorPlatformOperatingSystem`
    - Add `PlatformConditionEvaluatorPlatformOperatingSystemVersion`
    - Add `PlatformPolicyRuleCondition`
    - `Policy`
      - Add method `createRule`
    - Add `PolicyAccountLink`
    - Add `PolicyAccountLinkFilter`
    - Add `PolicyAccountLinkFilterGroups`
    - Add `PolicyRuleConditions`
    - Add `PolicySubject`
    - Add `PolicySubjectMatchType`
    - Add `PolicyUserNameTemplate`
    - Add `Protocol`
    - Add `ProtocolAlgorithmType`
    - Add `ProtocolAlgorithmTypeSignature`
    - Add `ProtocolAlgorithms`
    - Add `ProtocolEndpoint`
    - Add `ProtocolEndpoints`
    - Add `ProtocolRelayState`
    - Add `ProtocolRelayStateFormat`
    - Add `ProtocolSettings`
    - Add `Provisioning`
    - Add `ProvisioningConditions`
    - Add `ProvisioningDeprovisionedCondition`
    - Add `ProvisioningGroups`
    - Add `ProvisioningSuspendedCondition`
    - Change `PushFactor` to `PushUserFactor`
    - Change `PushFactorProfile` to `PushUserFactorProfile`
    - Add `ResponseLinks`
    - Add `RiskPolicyRuleCondition`
    - Add `RiskScorePolicyRuleCondition`
    - `Role`
      - Add method `addAdminGroupTarget`
      - Add method `addAppInstanceTargetToAdminRole`
      - Add method `addAppTargetToAdminRole`
      - Add method `addAllAppsAsTargetToRole`
      - Add method `addAppTargetToAppAdminRoleForUser`
      - Add method `addAppTargetToAdminRoleForUser`
    - Add `RoleAssignmentType`
    - Add `RoleType`
    - Add `ScheduledUserLifecycleAction`
    - Add `Scope`
    - Add `ScopeType`
    - Change `SecurityQuestionFactor` to `SecurityQuestionUserFactor`
    - Change `SecurityQuestionFactorProfile` to `SecurityQuestionUserFactorProfile`
    - Add `SmsTemplate`
    - Add `SmsTemplateTranslations`
    - Add `SmsTemplateType`
    - Change `SmsFactor` to `SmsUserFactor`
    - Change `SmsFactorProfile` to `SmsUserFactorProfile`
    - Add `SocialAuthToken`
    - Change `TokenFactor` to `TokenUserFactor`
    - Change `TokenFactorProfile` to `TokenUserFactorProfile`
    - Change `TotpFactor` to `TotpUserFactor`
    - Change `TotpFactorProfile` to `TotpUserFactorProfile`
    - Add `TrustedOrigin`
    - Change `U2fFactor` to `U2fUserFactor`
    - Change `U2fFactorProfile` to `U2fUserFactorProfile`
    - `User`
      - Add property `type`
      - Change method `endAllSessions` to `clearSessions`
      - Remove param `queryParameters` from `listAppLinks`
      - Remove method `forgotPassword`
      - Add method `forgotPasswordSetNewPassword`
      - Add method `forgotPasswordGenerateOneTimeToken`
      - Change method `addRole` to `assignRole`
      - Change method `listGroupTargetsForRole` to `listGroupTargets`
      - Change method `removeGroupTargetFromRole` to `removeGroupTarget`
      - Change method `addGroupTargetToRole` to `addGroupTarget`
      - Add method `listAssignedRoles`
      - Add method `addAllAppsAsTarget`
      - Remove param `queryParameters` from `listGroups`
      - Add method `listGrants`
      - Add method `revokeGrants`
      - Add method `revokeGrant`
      - Add method `revokeGrantsForUserAndClient`
      - Add method `listRefreshTokensForUserAndClient`
      - Add method `revokeTokenForUserAndClient`
      - Add method `getRefreshTokenForUserAndClient`
      - Add method `revokeTokensForUserAndClient`
      - Add method `listClients`
      - Add method `reactivate`
      - Remove param `queryParameters` from `expirePassword`
      - Add method `expirePasswordAndGetTemporaryPassword`
      - Add method `deleteFactor`
      - Change method `addFactor` to `enrollFactor`
      - Add method `setLinkedObject`
      - Add method `listIdentityProviders`
      - Add method `getLinkedObjects`
      - Add method `removeLinkedObject`
    - Add `UserIdentifierConditionEvaluatorPattern`
    - Add `UserIdentifierPolicyRuleCondition`
    - Add `UserIdentityProviderLinkRequest`
    - Add `UserLifecycleAttributePolicyRuleCondition`
    - Add `UserPolicyRuleCondition`
    - Add `UserStatusPolicyRuleCondition`
    - Add `UserType`
    - Remove `Verify`
    - Change `VerifyFactorResponse` to `VerifyUserFactorResponse`
    - Add `WebAuthnUserFactor`
    - Add `WebAuthnUserFactorProfile`
    - Change `WebFactor` to `WebUserFactor`
    - Change `WebFactorProfile` to `WebUserFactorProfile`
  - Client changes
    - Add method `listCsrsForApplication`
    - Add method `generateCsrForApplication`
    - Add method `revokeCsrFromApplication`
    - Add method `getCsrForApplication`
    - Add method `publishCerCert`
    - Add method `publishBinaryCerCert`
    - Add method `publishDerCert`
    - Add method `publishBinaryDerCert`
    - Add method `publishBinaryPemCert`
    - Add method `generateApplicationKey`
    - Add method `listScopeConsentGrants`
    - Add method `grantConsentToScope`
    - Add method `revokeScopeConsentGrant`
    - Add method `getScopeConsentGrant`
    - Add method `revokeOAuth2TokensForApplication`
    - Add method `listOAuth2TokensForApplication`
    - Add method `revokeOAuth2TokenForApplication`
    - Add method `getOAuth2TokenForApplication`
    - Add method `listAuthorizationServers`
    - Add method `createAuthorizationServer`
    - Add method `deleteAuthorizationServer`
    - Add method `getAuthorizationServer`
    - Add method `updateAuthorizationServer`
    - Add method `listOAuth2Claims`
    - Add method `createOAuth2Claim`
    - Add method `deleteOAuth2Claim`
    - Add method `getOAuth2Claim`
    - Add method `updateOAuth2Claim`
    - Add method `listOAuth2ClientsForAuthorizationServer`
    - Add method `revokeRefreshTokensForAuthorizationServerAndClient`
    - Add method `listRefreshTokensForAuthorizationServerAndClient`
    - Add method `revokeRefreshTokenForAuthorizationServerAndClient`
    - Add method `getRefreshTokenForAuthorizationServerAndClient`
    - Add method `listAuthorizationServerKeys`
    - Add method `rotateAuthorizationServerKeys`
    - Add method `activateAuthorizationServer`
    - Add method `deactivateAuthorizationServer`
    - Add method `listAuthorizationServerPolicies`
    - Add method `createAuthorizationServerPolicy`
    - Add method `deleteAuthorizationServerPolicy`
    - Add method `getAuthorizationServerPolicy`
    - Add method `updateAuthorizationServerPolicy`
    - Add method `listOAuth2Scopes`
    - Add method `createOAuth2Scope`
    - Add method `deleteOAuth2Scope`
    - Add method `getOAuth2Scope`
    - Add method `updateOAuth2Scope`
    - Add method `listEventHooks`
    - Add method `createEventHook`
    - Add method `deleteEventHook`
    - Add method `getEventHook`
    - Add method `updateEventHook`
    - Add method `activateEventHook`
    - Add method `deactivateEventHook`
    - Add method `verifyEventHook`
    - Add method `listFeatures`
    - Add method `getFeature`
    - Add method `listFeatureDependencies`
    - Add method `listFeatureDependents`
    - Add method `updateFeatureLifecycle`
    - Change `listRules` to `listGroupRules`
    - Change `createRule` to `createGroupRule`
    - Change `deleteRule` to `deleteGroupRule`
    - Change `getRule` to `getGroupRule`
    - Change `updateRule` to `updateGroupRule`
    - Change `activateRule` to `activateGroupRule`
    - Change `deactivateRule` to `deactivateGroupRule`
    - Add method `listAssignedApplicationsForGroup`
    - Add method `listGroupAssignedRoles`
    - Add method `assignRoleToGroup`
    - Add method `removeRoleFromGroup`
    - Add method `getRole`
    - Add method `listApplicationTargetsForApplicationAdministratorRoleForGroup`
    - Add method `removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup`
    - Add method `addApplicationTargetToAdminRoleGivenToGroup`
    - Add method `removeApplicationTargetFromAdministratorRoleGivenToGroup`
    - Add method `addApplicationInstanceTargetToAppAdminRoleGivenToGroup`
    - Add method `listGroupTargetsForGroupRole`
    - Add method `removeGroupTargetFromGroupAdministratorRoleGivenToGroup`
    - Add method `addGroupTargetToGroupAdministratorRoleForGroup`
    - Change `removeGroupUser` to `removeUserFromGroup`
    - Add method `listIdentityProviders`
    - Add method `createIdentityProvider`
    - Add method `listIdentityProviderKeys`
    - Add method `createIdentityProviderKey`
    - Add method `deleteIdentityProviderKey`
    - Add method `getIdentityProviderKey`
    - Add method `deleteIdentityProvider`
    - Add method `getIdentityProvider`
    - Add method `updateIdentityProvider`
    - Add method `listCsrsForIdentityProvider`
    - Add method `generateCsrForIdentityProvider`
    - Add method `revokeCsrForIdentityProvider`
    - Add method `getCsrForIdentityProvider`
    - Add method `publishCerCertForIdentityProvider`
    - Add method `publishBinaryCerCertForIdentityProvider`
    - Add method `publishDerCertForIdentityProvider`
    - Add method `publishBinaryDerCertForIdentityProvider`
    - Add method `publishBinaryPemCertForIdentityProvider`
    - Add method `listIdentityProviderSigningKeys`
    - Add method `generateIdentityProviderSigningKey`
    - Add method `getIdentityProviderSigningKey`
    - Add method `cloneIdentityProviderKey`
    - Add method `activateIdentityProvider`
    - Add method `deactivateIdentityProvider`
    - Add method `listIdentityProviderApplicationUsers`
    - Add method `unlinkUserFromIdentityProvider`
    - Add method `getIdentityProviderApplicationUser`
    - Add method `linkUserToIdentityProvider`
    - Add method `listSocialAuthTokens`
    - Add method `listInlineHooks`
    - Add method `createInlineHook`
    - Add method `deleteInlineHook`
    - Add method `getInlineHook`
    - Add method `updateInlineHook`
    - Add method `executeInlineHook`
    - Add method `activateInlineHook`
    - Add method `deactivateInlineHook`
    - Add method `listLinkedObjectDefinitions`
    - Add method `addLinkedObjectDefinition`
    - Add method `deleteLinkedObjectDefinition`
    - Add method `getLinkedObjectDefinition`
    - Add method `listUserTypes`
    - Add method `createUserType`
    - Add method `deleteUserType`
    - Add method `getUserType`
    - Add method `updateUserType`
    - Add method `replaceUserType`
    - Change `addPolicyRule` to `createPolicyRule`
    - Add method `listSmsTemplates`
    - Add method `createSmsTemplate`
    - Add method `deleteSmsTemplate`
    - Add method `getSmsTemplate`
    - Add method `partialUpdateSmsTemplate`
    - Add method `updateSmsTemplate`
    - Add method `listOrigins`
    - Add method `createOrigin`
    - Add method `deleteOrigin`
    - Add method `getOrigin`
    - Add method `updateOrigin`
    - Add method `activateOrigin`
    - Add method `deactivateOrigin`
    - Add method `setLinkedObjectForUser`
    - Add method `partialUpdateUser`
    - Remove param `queryParameters` from `listAppLinks`
    - Add method `listUserClients`
    - Add method `revokeGrantsForUserAndClient`
    - Add method `listGrantsForUserAndClient`
    - Add method `revokeTokensForUserAndClient`
    - Add method `listRefreshTokensForUserAndClient`
    - Add method `revokeTokenForUserAndClient`
    - Add method `getRefreshTokenForUserAndClient`
    - Remove method `forgotPassword`
    - Add method `forgotPasswordGenerateOneTimeToken`
    - Add method `forgotPasswordSetNewPassword`
    - Change `addFactor` to `enrollFactor`
    - Add method `getFactorTransactionStatus`
    - Add method `revokeUserGrants`
    - Add method `listUserGrants`
    - Add method `revokeUserGrant`
    - Add method `getUserGrant`
    - Remove param `queryParameters` from `listUserGroups`
    - Add method `listUserIdentityProviders`
    - Remove param `queryParameters` from `expirePassword`
    - Add method `expirePasswordAndGetTemporaryPassword`
    - Add method `reactivateUser`
    - Change `resetAllFactors` to `resetFactors`
    - Add method `removeLinkedObjectForUser`
    - Add method `getLinkedObjectsForUser`
    - Change `listAssignedRoles` to `listAssignedRolesForUser`
    - Change `addRoleToUser` to `assignRoleToUser`
    - Add method `listApplicationTargetsForApplicationAdministratorRoleForUser`
    - Add method `addAllAppsAsTargetToRole`
    - Add method `removeApplicationTargetFromApplicationAdministratorRoleForUser`
    - Add method `addApplicationTargetToAdminRoleForUser`
    - Add method `removeApplicationTargetFromAdministratorRoleForUser`
    - Add method `addApplicationTargetToAppAdminRoleForUser`
    - Change `endAllUserSessions` to `clearUserSessions`

## 3.3.1

- [#138](https://github.com/okta/okta-sdk-nodejs/pull/138) Add strategy to handle access token refresh

## 3.2.0

- [#128](https://github.com/okta/okta-sdk-nodejs/pull/128) Adds support for OAuth

## 3.1.0

- Updates the Okta Openapi to 1.11
- Adds functionality for Okta Sign In Policy
- Adds functionality for Password Policy
- Adds U2F Factor
- Provides options array to many models

## 3.0.0

- Dropping node.js version support for anything less than 8.15

## 2.1.1

- [#109](https://github.com/okta/okta-sdk-nodejs/pull/109) Moves openapi to devdeps; fixes test lint
- [#108](https://github.com/okta/okta-sdk-nodejs/pull/108) Fixes app creation test failures
- [#102](https://github.com/okta/okta-sdk-nodejs/pull/102) Fixes for Application hyperlinks in jsdocs
- [#100](https://github.com/okta/okta-sdk-nodejs/pull/100) Some jsdocs fixes
- [#112](https://github.com/okta/okta-sdk-nodejs/pull/112) Upgrade lodash to 4.17.14

## 2.0.0
- Drop support for Node 4
- New behavior for `expirationPoll` option on MemoryStore. The expiration poll feature is now opt-in. By default there will be *no* memory scan to proactively remove key values. Passing a number or null for `expirationPoll` will behave as before. Passing a value of `true` will use a default of 15000ms.
- The [DefaultRequestExecutor] is now used by default, if no request executor is provided.
- Enable async iteration on any Collection (#93)
- Set node support to 6.9.0 (#95)
- Enable cache expiration polling only if a truthy value is specified (#89)
- Fixes failing client create test (#80)

## 1.2.0

- Adds a default request executor that will retry requests when rate limit exceptions have occurred.  Please see the [README](README.md) for full documentation.  This executor is opt-in for now, but will be used by default in the 2.0 release.

## 1.1.0

- Add an HTTP cache for simple resources fetched by GET.
- Add support for the System Log API, including a subscription interface on collections.
- Fix: client.listUsers().each() executes once for query that returns an empty list (#12).

## ~~1.0.0~~

* Where's 1.0.0?? Due to a nuance of our CD system, this one was skipped :)

## 0.4.0

- Add support for Application and Session APIs

## 0.3.0

- Internal update for package.json

## 0.2.0

- Add support for Factors API

## 0.1.0

- First release with support for User and Group APIs

[DefaultRequestExecutor]: src/default-request-executor.js
