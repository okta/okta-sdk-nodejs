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
exports.servers = exports.server1 = exports.ServerConfiguration = void 0;
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
  getEndpointUrl(endpoint, vars) {
    const endpointWithVars = endpoint.replace(/{(\w+)}/g, (match, key) => vars?.[key] || match);
    return this.getUrl() + endpointWithVars;
  }
  getAffectedResources(path, vars) {
    const resources = [];
    let pl = path.length;
    while (pl--) {
      if (path[pl] === '}') {
        const resourcePath = path.slice(0, pl + 1).replace(/{(\w+)}/g, (match, key) => vars?.[key] || match);
        resources.push(this.getUrl() + resourcePath);
      }
    }
    return resources;
  }
  /**
     * Creates a new request context for this server using the base url and the endpoint
     * with variables replaced with their respective values.
     * Sets affected resources.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     * @param vars variables in endpoint to be replaced
     *
     */
  makeRequestContext(endpoint, httpMethod, vars) {
    const ctx = new http_1.RequestContext(this.getEndpointUrl(endpoint, vars), httpMethod);
    const affectedResources = this.getAffectedResources(endpoint, vars);
    ctx.setAffectedResources(affectedResources);
    return ctx;
  }
}
exports.ServerConfiguration = ServerConfiguration;
exports.server1 = new ServerConfiguration('https://{yourOktaDomain}', { 'yourOktaDomain': 'subdomain.okta.com' });
exports.servers = [exports.server1];
