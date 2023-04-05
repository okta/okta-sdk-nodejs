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
  GroupApi,
  EventHookApi,
  NetworkZoneApi,
  ThreatInsightApi,
  OrgSettingApi,
  ApplicationApi,
  AuthorizationServerApi,
  CustomizationApi,
  TrustedOriginApi,
  UserFactorApi,
  UserApi,
  IdentityProviderApi,
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
  RoleTargetApi,
  RoleAssignmentApi,
  CustomDomainApi,
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
    this.userTypeApi = new UserTypeApi(configuration);
    this.authenticatorApi = new AuthenticatorApi(configuration);
    this.schemaApi = new SchemaApi(configuration);
    this.inlineHookApi = new InlineHookApi(configuration);
    this.profileMappingApi = new ProfileMappingApi(configuration);
    this.linkedObjectApi = new LinkedObjectApi(configuration);
    this.systemLogApi = new SystemLogApi(configuration);
    this.featureApi = new FeatureApi(configuration);
    this.groupApi = new GroupApi(configuration);
    this.eventHookApi = new EventHookApi(configuration);
    this.networkZoneApi = new NetworkZoneApi(configuration);
    this.threatInsightApi = new ThreatInsightApi(configuration);
    this.orgSettingApi = new OrgSettingApi(configuration);
    this.applicationApi = new ApplicationApi(configuration);
    this.authorizationServerApi = new AuthorizationServerApi(configuration);
    this.customizationApi = new CustomizationApi(configuration);
    this.trustedOriginApi = new TrustedOriginApi(configuration);
    this.userFactorApi = new UserFactorApi(configuration);
    this.userApi = new UserApi(configuration);
    this.identityProviderApi = new IdentityProviderApi(configuration);
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
    this.roleTargetApi = new RoleTargetApi(configuration);
    this.roleAssignmentApi = new RoleAssignmentApi(configuration);
    this.customDomainApi = new CustomDomainApi(configuration);
  }
}

module.exports = Client;
