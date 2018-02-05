/*!
 * Copyright (c) 2017-2018, Okta, Inc. and/or its affiliates. All rights reserved.
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

const ConfigLoader = require('./config-loader');
const GeneratedApiClient = require('./generated-client');
const Http = require('./http');
const DEFAULT_USER_AGENT = `${packageJson.name}/${packageJson.version} node/${process.versions.node} ${os.platform()}/${os.release()}`;
const repoUrl = 'https://github.com/okta/okta-sdk-nodejs';

/**
 * Base client that encapsulates the HTTP request mechanism, and knowledge of how to authenticate with the Okta API
 *
 * @class Client
 * @extends {GeneratedApiClient}
 */
class Client extends GeneratedApiClient {
  constructor(clientConfig) {
    super();
    const configLoader = new ConfigLoader();
    configLoader.applyDefaults();
    configLoader.apply({
      client: clientConfig || {}
    });

    const parsedConfig = configLoader.config;

    if (!parsedConfig.client.orgUrl) {
      throw new Error(`Okta Org URL not provided, see ${repoUrl} for usage.`);
    }

    if (!parsedConfig.client.token) {
      throw new Error(`Okta API token not provided, see ${repoUrl} for usage.`);
    }

    this.baseUrl = parsedConfig.client.orgUrl.replace(/\/$/, '');
    this.apiToken = parsedConfig.client.token;
    this.http = new Http({
      cacheStore: clientConfig.cacheStore,
      cacheMiddleware: clientConfig.cacheMiddleware
    });
    this.http.defaultHeaders.Authorization = `SSWS ${this.apiToken}`;
    this.http.defaultHeaders['User-Agent'] = parsedConfig.client.userAgent ? parsedConfig.client.userAgent + ' ' + DEFAULT_USER_AGENT : DEFAULT_USER_AGENT;
  }
}

module.exports = Client;
