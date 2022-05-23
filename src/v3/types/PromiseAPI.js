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
exports.PromiseAuthenticatorApi = void 0;

const ObservableAPI_2 = require('./ObservableAPI');
class PromiseAuthenticatorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_2.ObservableAuthenticatorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an authenticator by `authenticatorId`.
      * Activate Authenticator
      * @param authenticatorId
      */
  activateAuthenticator(authenticatorId, _options) {
    const result = this.api.activateAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authenticator by `authenticatorId`.
      * Deactivate Authenticator
      * @param authenticatorId
      */
  deactivateAuthenticator(authenticatorId, _options) {
    const result = this.api.deactivateAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
      * Get Authenticator
      * @param authenticatorId
      */
  getAuthenticator(authenticatorId, _options) {
    const result = this.api.getAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Enumerates authenticators in your organization.
      * List Authenticators
      */
  listAuthenticators(_options) {
    const result = this.api.listAuthenticators(_options);
    return result.toPromise();
  }
  /**
      * Updates an authenticator
      * Update Authenticator
      * @param authenticatorId
      * @param authenticator
      */
  updateAuthenticator(authenticatorId, authenticator, _options) {
    const result = this.api.updateAuthenticator(authenticatorId, authenticator, _options);
    return result.toPromise();
  }
}
exports.PromiseAuthenticatorApi = PromiseAuthenticatorApi;
