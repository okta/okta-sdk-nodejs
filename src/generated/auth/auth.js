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
exports.configureAuthMethods = exports.Oauth2Authentication = exports.ApiTokenAuthentication = void 0;
/**
 * Applies apiKey authentication to the request context.
 */
class ApiTokenAuthentication {
  /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  getName() {
    return 'apiToken';
  }
  applySecurityAuthentication(context) {
    context.setHeaderParam('Authorization', this.apiKey);
  }
}
exports.ApiTokenAuthentication = ApiTokenAuthentication;
/**
 * Applies oauth2 authentication to the request context.
 */
class Oauth2Authentication {
  /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
  constructor(accessToken) {
    this.accessToken = accessToken;
  }
  getName() {
    return 'oauth2';
  }
  applySecurityAuthentication(context) {
    context.setHeaderParam('Authorization', 'Bearer ' + this.accessToken);
  }
}
exports.Oauth2Authentication = Oauth2Authentication;
/**
 * Creates the authentication methods from a swagger description.
 *
 */
function configureAuthMethods(config) {
  let authMethods = {};
  if (!config) {
    return authMethods;
  }
  authMethods['default'] = config['default'];
  if (config['apiToken']) {
    authMethods['apiToken'] = new ApiTokenAuthentication(config['apiToken']);
  }
  if (config['oauth2']) {
    authMethods['oauth2'] = new Oauth2Authentication(config['oauth2']['accessToken']);
  }
  return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
