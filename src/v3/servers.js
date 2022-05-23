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


'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.servers = exports.server2 = exports.server1 = exports.ServerConfiguration = void 0;
const http_1 = require('./http/http');
/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
class ServerConfiguration {
  constructor(url, variableConfiguration) {
    this.url = url;
    this.variableConfiguration = variableConfiguration;
  }
  /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */
  setVariables(variableConfiguration) {
    Object.assign(this.variableConfiguration, variableConfiguration);
  }
  getConfiguration() {
    return this.variableConfiguration;
  }
  getUrl() {
    let replacedUrl = this.url;
    for (const key in this.variableConfiguration) {
      var re = new RegExp('{' + key + '}', 'g');
      replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
    }
    return replacedUrl;
  }
  /**
     * Creates a new request context for this server using the url with variables
     * replaced with their respective values and the endpoint of the request appended.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     *
     */
  makeRequestContext(endpoint, httpMethod) {
    return new http_1.RequestContext(this.getUrl() + endpoint, httpMethod);
  }
}
exports.ServerConfiguration = ServerConfiguration;
exports.server1 = new ServerConfiguration('https://{subdomain}.{domain}', { 'subdomain': 'your-subdomain', 'domain': 'okta.com' });
exports.server2 = new ServerConfiguration('https://{customDomain}', { 'customDomain': 'auth.your-custom-domain.com' });
exports.servers = [exports.server1, exports.server2];
