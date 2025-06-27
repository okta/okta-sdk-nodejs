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
  // OrgSettingApi,
  ApplicationApi,
  AuthorizationServerApi,
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
  CustomDomainApi,
  DeviceApi,
  ApplicationUsersApi,
  UserLifecycleApi,
  RoleBTargetAdminApi,
  ApplicationSSOCredentialKeyApi,
  ApplicationFeaturesApi,
  ApplicationLogosApi,
  ApplicationConnectionsApi,
  ApplicationGroupsApi,
  ApplicationGrantsApi,
  ApplicationTokensApi,
  AuthorizationServerScopesApi,
  AuthorizationServerClaimsApi,
  AuthorizationServerKeysApi,
  AuthorizationServerPoliciesApi,
  AuthorizationServerRulesApi,
  BrandsApi,
  ThemesApi,
  RoleAssignmentAUserApi,
  RoleAssignmentBGroupApi,
  GroupRuleApi,
  IdentityProviderUsersApi,
  IdentityProviderKeysApi,
  IdentityProviderSigningKeysApi,
} = require('./generated');
const { createConfiguration } = require('./generated/configuration');
const { ServerConfiguration } = require('./generated/servers');

// Rules to generate consolidated api classes
const apiConsolidationRules = {
  // TODO: method renames, eg. createGroup -> addGroup for GroupApi
  // TODO: applicationConnectionsApi.updateDefaultProvisioningConnectionForApplication has param rename:
  //       ProvisioningConnectionRequest -> updateDefaultProvisioningConnectionForApplicationRequest
  ApplicationApi: {
    apis: [
      ApplicationApi,
      ApplicationUsersApi,
      ApplicationGroupsApi,
      ApplicationConnectionsApi,
      ApplicationTokensApi,
      ApplicationGrantsApi,
      ApplicationSSOCredentialKeyApi,
      ApplicationFeaturesApi,
      ApplicationLogosApi,
    ]
  },
  AuthorizationServerApi: {
    apis: [
      AuthorizationServerApi,
      AuthorizationServerScopesApi,
      AuthorizationServerClaimsApi,
      AuthorizationServerKeysApi,
      AuthorizationServerPoliciesApi,
      AuthorizationServerRulesApi,
    ]
  },
  CustomizationApi: {
    apis: [
      BrandsApi,
      ThemesApi,
    ]
  },
  RoleAssignmentApi: {
    apis: [
      RoleAssignmentAUserApi,
      RoleAssignmentBGroupApi,
    ]
  },
  RoleTargetApi: {
    apis: [
      RoleBTargetAdminApi,
    ]
  },
  GroupApi: {
    apis: [
      GroupApi,
      GroupRuleApi,
    ]
  },
  IdentityProviderApi: {
    apis: [
      IdentityProviderApi,
      IdentityProviderUsersApi,
      IdentityProviderKeysApi,
      IdentityProviderSigningKeysApi,
    ]
  },
  UserApi: {
    apis: [
      UserApi,
      UserLifecycleApi,
    ]
  }
};

// Generate consolidated api classes
const consolidatedApis = {};
for (const consolidatedClassName in apiConsolidationRules) {
  const rule = apiConsolidationRules[consolidatedClassName];
  const {apis} = rule;
  consolidatedApis[consolidatedClassName] = class {
    constructor() {
      for (const ApiClass of apis) {
        this[ApiClass.name] = new ApiClass(...arguments);
        const apiMethodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this[ApiClass.name]));
        for (const apiMethodName of apiMethodNames) {
          if (apiMethodName !== 'constructor') {
            this[apiMethodName] = this[ApiClass.name][apiMethodName].bind(this[ApiClass.name]);
          }
        }
      }
    }
  };
}

/**
 * Base client that encapsulates the HTTP request mechanism, and knowledge of how to authenticate with the Okta API
 *
 * @class ApiClient
 * @extends {GeneratedApiClient}
 */
class ApiClient {
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
    this.applicationApi = new consolidatedApis['ApplicationApi'](configuration);
    this.authorizationServerApi = new consolidatedApis['AuthorizationServerApi'](configuration);
    this.customizationApi = new consolidatedApis['CustomizationApi'](configuration);
    this.roleAssignmentApi = new consolidatedApis['RoleAssignmentApi'](configuration);
    this.roleTargetApi = new consolidatedApis['RoleTargetApi'](configuration);
    this.groupApi = new consolidatedApis['GroupApi'](configuration);
    this.identityProviderApi = new consolidatedApis['IdentityProviderApi'](configuration);
    this.userApi = new consolidatedApis['UserApi'](configuration);

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
    // this.orgSettingApi = new OrgSettingApi(configuration);
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

    // this.applicationSSOCredentialKeyApi = new ApplicationSSOCredentialKeyApi(configuration);
    // this.applicationFeaturesApi = new ApplicationFeaturesApi(configuration);
    // this.applicationLogosApi = new ApplicationLogosApi(configuration);
    // this.applicationConnectionsApi = new ApplicationConnectionsApi(configuration);
    // this.applicationGroupsApi = new ApplicationGroupsApi(configuration);
    // this.applicationGrantsApi = new ApplicationGrantsApi(configuration);
    // this.applicationUsersApi = new ApplicationUsersApi(configuration);
    // this.applicationTokensApi = new ApplicationTokensApi(configuration);
    // this.authorizationServerScopesApi = new AuthorizationServerScopesApi(configuration);
    // this.authorizationServerClaimsApi = new AuthorizationServerClaimsApi(configuration);
    // this.authorizationServerKeysApi = new AuthorizationServerKeysApi(configuration);
    // this.authorizationServerPoliciesApi = new AuthorizationServerPoliciesApi(configuration);
    // this.authorizationServerRulesApi = new AuthorizationServerRulesApi(configuration);
    // this.brandsApi = new BrandsApi(configuration);
    // this.themesApi = new ThemesApi(configuration);
    // this.groupRuleApi = new GroupRuleApi(configuration);
    // this.identityProviderUsersApi = new IdentityProviderUsersApi(configuration);
    // this.identityProviderKeysApi = new IdentityProviderKeysApi(configuration);
    // this.identityProviderSigningKeysApi = new IdentityProviderSigningKeysApi(configuration);
    // this.userLifecycleApi = new UserLifecycleApi(configuration);
    // this.roleAssignmentAUserApi = new RoleAssignmentAUserApi(configuration);
    // this.roleBTargetAdminApi = new RoleBTargetAdminApi(configuration);
  }
}

module.exports = ApiClient;
