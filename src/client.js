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

const os = require('os');
const packageJson = require('../package.json');

const { ConfigLoader } = require('./config-loader');
const { DefaultRequestExecutor } = require('./default-request-executor');
const { Http } = require('./http');
const DEFAULT_USER_AGENT = `${packageJson.name}/${packageJson.version} node/${process.versions.node} ${os.platform()}/${os.release()}`;
const repoUrl = 'https://github.com/okta/okta-sdk-nodejs';
const { OAuth } = require('./oauth');
const {
  AuthenticatorApi,
  SchemaApi,
  UserTypeApi,
  InlineHookApi,
  ProfileMappingApi,
  LinkedObjectApi,
  SystemLogApi,
  FeatureApi,
  EventHookApi,
  NetworkZoneApi,
  ThreatInsightApi,
  TrustedOriginApi,
  UserFactorApi,
  SessionApi,
  TemplateApi,
  PolicyApi,
  SubscriptionApi,
  AgentPoolsApi,
  ApiTokenApi,
  BehaviorApi,
  PrincipalRateLimitApi,
  PushProviderApi,
  DeviceAssuranceApi,
  CustomDomainApi,
  DeviceApi,

  AttackProtectionApi,
  CAPTCHAApi,
  DeviceAccessApi,
  DeviceIntegrationsApi,
  DevicePostureCheckApi,
  DirectoriesIntegrationApi,
  DisasterRecoveryApi,
  EmailDomainApi,
  EmailServerApi,
  GovernanceBundleApi,
  GroupOwnerApi,
  HookKeyApi,
  IdentitySourceApi,
  LogStreamApi,
  OktaApplicationSettingsApi,
  OktaPersonalSettingsApi,
  OrgCreatorApi,
  PrivilegedResourceApi,
  RateLimitSettingsApi,
  RealmApi,
  RealmAssignmentApi,
  RiskEventApi,
  RiskProviderApi,
  SSFReceiverApi,
  SSFSecurityEventTokenApi,
  SSFTransmitterApi,
  ServiceAccountApi,
  UISchemaApi,
  WebAuthnPreregistrationApi,

  // consolidated apis
  CustomizationApi,
  RoleAssignmentApi,
  RoleTargetApi,
  OrgSettingApi,
  GroupApi,
  ApplicationApi,
  AuthorizationServerApi,
  IdentityProviderApi,
  UserApi,
  ResourceSetApi,
  IntegrationsApi,
  RoleApi,
} = require('./generated');
const { createConfiguration } = require('./generated/configuration');
const { ServerConfiguration } = require('./generated/servers');

/**
 * Base client that encapsulates the HTTP request mechanism, and knowledge of how to authenticate with the Okta API
 *
 * @class Client
 * @extends {GeneratedApiClient}
 */
class Client {
  constructor(config) {
    const configLoader = new ConfigLoader();
    const clientConfig = Object.assign({}, config);
    configLoader.applyDefaults();
    configLoader.apply({
      client: clientConfig || {}
    });

    const parsedConfig = configLoader.config;
    this.requestExecutor = clientConfig.requestExecutor || new DefaultRequestExecutor();
    const errors = [];
    if (!parsedConfig.client.orgUrl) {
      errors.push('Okta Org URL not provided');
    }

    if (!parsedConfig.client.token && parsedConfig.client.authorizationMode !== 'PrivateKey') {
      errors.push('Okta API token not provided');
    }

    if (parsedConfig.client.authorizationMode === 'PrivateKey') {
      if (!parsedConfig.client.clientId) {
        errors.push('Okta Client ID not provided');
      }
      if (!parsedConfig.client.scopes) {
        errors.push('Scopes not provided');
      }
      if (!parsedConfig.client.privateKey) {
        errors.push('Private Key not provided');
      }
    } else if (parsedConfig.client.authorizationMode !== 'SSWS') {
      errors.push('Unknown Authorization Mode');
    }
    if (errors.length) {
      throw new Error(`Found ${errors.length} errors:\n${errors.join('\n')}\nSee ${repoUrl} for usage.`);
    }
    this.authorizationMode = parsedConfig.client.authorizationMode;
    this.baseUrl = parsedConfig.client.orgUrl.replace(/\/$/, '');
    this.apiToken = parsedConfig.client.token;

    if (this.authorizationMode === 'PrivateKey') {
      this.clientId = parsedConfig.client.clientId;
      this.scopes = parsedConfig.client.scopes.split(' ');
      this.privateKey = parsedConfig.client.privateKey;
      this.keyId = parsedConfig.client.keyId;
      this.oauth = new OAuth(this);
    }

    this.http = new Http({
      httpsProxy: clientConfig.httpsProxy,
      cacheStore: clientConfig.cacheStore,
      cacheMiddleware: clientConfig.cacheMiddleware,
      defaultCacheMiddlewareResponseBufferSize: clientConfig.defaultCacheMiddlewareResponseBufferSize,
      requestExecutor: this.requestExecutor,
      oauth: this.oauth
    });
    if (this.authorizationMode === 'SSWS') {
      this.http.defaultHeaders.Authorization = `SSWS ${this.apiToken}`;
    }
    this.http.defaultHeaders['User-Agent'] = parsedConfig.client.userAgent ? parsedConfig.client.userAgent + ' ' + DEFAULT_USER_AGENT : DEFAULT_USER_AGENT;

    const configuration = createConfiguration({
      baseServer: new ServerConfiguration(parsedConfig.client.orgUrl),
      httpApi: this.http,
    });

    // consolidated apis
    this.applicationApi = new ApplicationApi(configuration);
    this.authorizationServerApi = new AuthorizationServerApi(configuration);
    this.customizationApi = new CustomizationApi(configuration);
    this.roleAssignmentApi = new RoleAssignmentApi(configuration);
    this.roleTargetApi = new RoleTargetApi(configuration);
    this.groupApi = new GroupApi(configuration);
    this.identityProviderApi = new IdentityProviderApi(configuration);
    this.userApi = new UserApi(configuration);
    this.orgSettingApi = new OrgSettingApi(configuration);
    this.resourceSetApi = new ResourceSetApi(configuration);
    this.integrationsApi = new IntegrationsApi(configuration);
    this.roleApi = new RoleApi(configuration);

    this.userTypeApi = new UserTypeApi(configuration);
    this.authenticatorApi = new AuthenticatorApi(configuration);
    this.schemaApi = new SchemaApi(configuration);
    this.inlineHookApi = new InlineHookApi(configuration);
    this.profileMappingApi = new ProfileMappingApi(configuration);
    this.linkedObjectApi = new LinkedObjectApi(configuration);
    this.systemLogApi = new SystemLogApi(configuration);
    this.featureApi = new FeatureApi(configuration);
    this.eventHookApi = new EventHookApi(configuration);
    this.networkZoneApi = new NetworkZoneApi(configuration);
    this.threatInsightApi = new ThreatInsightApi(configuration);
    this.trustedOriginApi = new TrustedOriginApi(configuration);
    this.userFactorApi = new UserFactorApi(configuration);
    this.sessionApi = new SessionApi(configuration);
    this.templateApi = new TemplateApi(configuration);
    this.policyApi = new PolicyApi(configuration);
    this.subscriptionApi = new SubscriptionApi(configuration);
    this.agentPoolsApi = new AgentPoolsApi(configuration);
    this.apiTokenApi = new ApiTokenApi(configuration);
    this.behaviorApi = new BehaviorApi(configuration);
    this.principalRateLimitApi = new PrincipalRateLimitApi(configuration);
    this.pushProviderApi = new PushProviderApi(configuration);
    this.deviceAssuranceApi = new DeviceAssuranceApi(configuration);
    this.customDomainApi = new CustomDomainApi(configuration);
    this.deviceApi = new DeviceApi(configuration);

    this.attackProtectionApi = new AttackProtectionApi(configuration);
    this.captchaApi = new CAPTCHAApi(configuration);
    this.deviceAccessApi = new DeviceAccessApi(configuration);
    this.deviceIntegrationsApi = new DeviceIntegrationsApi(configuration);
    this.devicePostureCheckApi = new DevicePostureCheckApi(configuration);
    this.directoriesIntegrationApi = new DirectoriesIntegrationApi(configuration);
    this.disasterRecoveryApi = new DisasterRecoveryApi(configuration);
    this.emailDomainApi = new EmailDomainApi(configuration);
    this.emailServerApi = new EmailServerApi(configuration);
    this.governanceBundleApi = new GovernanceBundleApi(configuration);
    this.groupOwnerApi = new GroupOwnerApi(configuration);
    this.hookKeyApi = new HookKeyApi(configuration);
    this.identitySourceApi = new IdentitySourceApi(configuration);
    this.logStreamApi = new LogStreamApi(configuration);
    this.oktaApplicationSettingsApi = new OktaApplicationSettingsApi(configuration);
    this.oktaPersonalSettingsApi = new OktaPersonalSettingsApi(configuration);
    this.orgCreatorApi = new OrgCreatorApi(configuration);
    this.privilegedResourceApi = new PrivilegedResourceApi(configuration);
    this.rateLimitSettingsApi = new RateLimitSettingsApi(configuration);
    this.realmApi = new RealmApi(configuration);
    this.realmAssignmentApi = new RealmAssignmentApi(configuration);
    this.riskEventApi = new RiskEventApi(configuration);
    this.riskProviderApi = new RiskProviderApi(configuration);
    this.ssfReceiverApi = new SSFReceiverApi(configuration);
    this.ssfSecurityEventTokenApi = new SSFSecurityEventTokenApi(configuration);
    this.ssfTransmitterApi = new SSFTransmitterApi(configuration);
    this.serviceAccountApi = new ServiceAccountApi(configuration);
    this.uiSchemaApi = new UISchemaApi(configuration);
    this.webAuthnPreregistrationApi = new WebAuthnPreregistrationApi(configuration);
  }
}

module.exports = Client;
