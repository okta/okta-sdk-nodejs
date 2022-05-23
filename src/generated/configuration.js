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
exports.createConfiguration = void 0;
const middleware_1 = require('./middleware');
const isomorphic_fetch_1 = require('./http/isomorphic-fetch');
const servers_1 = require('./servers');
const auth_1 = require('./auth/auth');
/**
 * Configuration factory function
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: server1
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *
 * @param conf partial configuration
 */
function createConfiguration(conf = {}) {
  const configuration = {
    baseServer: conf.baseServer !== undefined ? conf.baseServer : servers_1.server1,
    httpApi: conf.httpApi || new isomorphic_fetch_1.IsomorphicFetchHttpLibrary(),
    middleware: conf.middleware || [],
    authMethods: (0, auth_1.configureAuthMethods)(conf.authMethods)
  };
  if (conf.promiseMiddleware) {
    conf.promiseMiddleware.forEach(m => configuration.middleware.push(new middleware_1.PromiseMiddlewareWrapper(m)));
  }
  return configuration;
}
exports.createConfiguration = createConfiguration;
