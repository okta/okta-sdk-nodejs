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
const GeneratedApiClient = require('./generated-client');
const { Http } = require('./http');
const DEFAULT_USER_AGENT = `${packageJson.name}/${packageJson.version} node/${process.versions.node} ${os.platform()}/${os.release()}`;
const repoUrl = 'https://github.com/okta/okta-sdk-nodejs';
const { OAuth } = require('./oauth');
const { getAffectedResources } = require('./request-middleware');
const { AuthenticatorApi, SchemaApi, UserTypeApi, InlineHookApi, ProfileMappingApi, DomainApi, LinkedObjectApi, SystemLogApi, FeatureApi } = require('./generated');
const { createConfiguration } = require('./generated/configuration');
const { ServerConfiguration } = require('./generated/servers');
const { Observable } = require('./generated/rxjsStub');


/**
 * Base client that encapsulates the HTTP request mechanism, and knowledge of how to authenticate with the Okta API
 *
 * @class Client
 * @extends {GeneratedApiClient}
 */
class Client extends GeneratedApiClient {
  constructor(config) {
    super();
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
      middleware: [{
        pre: function (req) {
          req.setAffectedResources(getAffectedResources(req.url.href));
          return new Observable(Promise.resolve(req));
        },
        post: function (resp) {
          return new Observable(Promise.resolve(resp));
        }
      }],
    });
    this.userTypeApi = new UserTypeApi(configuration);
    this.authenticatorApi = new AuthenticatorApi(configuration);
    this.schemaApi = new SchemaApi(configuration);
    this.inlineHookApi = new InlineHookApi(configuration);
    this.profileMappingApi = new ProfileMappingApi(configuration);
    this.domainApi = new DomainApi(configuration);
    this.linkedObjectApi = new LinkedObjectApi(configuration);
    this.systemLogApi = new SystemLogApi(configuration);
    this.featureApi = new FeatureApi(configuration);
  }
}

module.exports = Client;
