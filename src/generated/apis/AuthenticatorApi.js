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
exports.AuthenticatorApiResponseProcessor = exports.AuthenticatorApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class AuthenticatorApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Activates an authenticator by `authenticatorId`.
     * Activate Authenticator
     * @param authenticatorId
     */
  async activateAuthenticator(authenticatorId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authenticatorId' is not null or undefined
    if (authenticatorId === null || authenticatorId === undefined) {
      throw new baseapi_1.RequiredError('AuthenticatorApi', 'activateAuthenticator', 'authenticatorId');
    }
    // Path Params
    const localVarPath = '/api/v1/authenticators/{authenticatorId}/lifecycle/activate'
      .replace('{' + 'authenticatorId' + '}', encodeURIComponent(String(authenticatorId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Deactivates an authenticator by `authenticatorId`.
     * Deactivate Authenticator
     * @param authenticatorId
     */
  async deactivateAuthenticator(authenticatorId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authenticatorId' is not null or undefined
    if (authenticatorId === null || authenticatorId === undefined) {
      throw new baseapi_1.RequiredError('AuthenticatorApi', 'deactivateAuthenticator', 'authenticatorId');
    }
    // Path Params
    const localVarPath = '/api/v1/authenticators/{authenticatorId}/lifecycle/deactivate'
      .replace('{' + 'authenticatorId' + '}', encodeURIComponent(String(authenticatorId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Fetches an authenticator from your Okta organization by `authenticatorId`.
     * Get Authenticator
     * @param authenticatorId
     */
  async getAuthenticator(authenticatorId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authenticatorId' is not null or undefined
    if (authenticatorId === null || authenticatorId === undefined) {
      throw new baseapi_1.RequiredError('AuthenticatorApi', 'getAuthenticator', 'authenticatorId');
    }
    // Path Params
    const localVarPath = '/api/v1/authenticators/{authenticatorId}'
      .replace('{' + 'authenticatorId' + '}', encodeURIComponent(String(authenticatorId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Enumerates authenticators in your organization.
     * List Authenticators
     */
  async listAuthenticators(_options) {
    let _config = _options || this.configuration;
    // Path Params
    const localVarPath = '/api/v1/authenticators';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Updates an authenticator
     * Update Authenticator
     * @param authenticatorId
     * @param authenticator
     */
  async updateAuthenticator(authenticatorId, authenticator, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authenticatorId' is not null or undefined
    if (authenticatorId === null || authenticatorId === undefined) {
      throw new baseapi_1.RequiredError('AuthenticatorApi', 'updateAuthenticator', 'authenticatorId');
    }
    // verify required parameter 'authenticator' is not null or undefined
    if (authenticator === null || authenticator === undefined) {
      throw new baseapi_1.RequiredError('AuthenticatorApi', 'updateAuthenticator', 'authenticator');
    }
    // Path Params
    const localVarPath = '/api/v1/authenticators/{authenticatorId}'
      .replace('{' + 'authenticatorId' + '}', encodeURIComponent(String(authenticatorId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(authenticator, 'Authenticator', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
}
exports.AuthenticatorApiRequestFactory = AuthenticatorApiRequestFactory;
class AuthenticatorApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  async activateAuthenticator(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Authenticator', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Authenticator', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deactivateAuthenticator(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Authenticator', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Authenticator', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getAuthenticator(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Authenticator', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Authenticator', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthenticators
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAuthenticators(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Authenticator>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Authenticator>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  async updateAuthenticator(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Authenticator', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Authenticator', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.AuthenticatorApiResponseProcessor = AuthenticatorApiResponseProcessor;
