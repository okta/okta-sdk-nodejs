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
exports.UserFactorApiResponseProcessor = exports.UserFactorApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class UserFactorApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
     * Activate Factor
     * @param userId
     * @param factorId
     * @param body
     */
  async activateFactor(userId, factorId, body, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'activateFactor', 'userId');
    }
    // verify required parameter 'factorId' is not null or undefined
    if (factorId === null || factorId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'activateFactor', 'factorId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/factors/{factorId}/lifecycle/activate'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'factorId' + '}', encodeURIComponent(String(factorId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, 'ActivateFactorRequest', ''), contentType);
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
  /**
     * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
     * Delete Factor
     * @param userId
     * @param factorId
     */
  async deleteFactor(userId, factorId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'deleteFactor', 'userId');
    }
    // verify required parameter 'factorId' is not null or undefined
    if (factorId === null || factorId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'deleteFactor', 'factorId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/factors/{factorId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'factorId' + '}', encodeURIComponent(String(factorId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
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
     * Enrolls a user with a supported factor.
     * Enroll Factor
     * @param userId
     * @param body Factor
     * @param updatePhone
     * @param templateId id of SMS template (only for SMS factor)
     * @param tokenLifetimeSeconds
     * @param activate
     */
  async enrollFactor(userId, body, updatePhone, templateId, tokenLifetimeSeconds, activate, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'enrollFactor', 'userId');
    }
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'enrollFactor', 'body');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/factors'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (updatePhone !== undefined) {
      requestContext.setQueryParam('updatePhone', ObjectSerializer_1.ObjectSerializer.serialize(updatePhone, 'boolean', ''));
    }
    // Query Params
    if (templateId !== undefined) {
      requestContext.setQueryParam('templateId', ObjectSerializer_1.ObjectSerializer.serialize(templateId, 'string', ''));
    }
    // Query Params
    if (tokenLifetimeSeconds !== undefined) {
      requestContext.setQueryParam('tokenLifetimeSeconds', ObjectSerializer_1.ObjectSerializer.serialize(tokenLifetimeSeconds, 'number', 'int32'));
    }
    // Query Params
    if (activate !== undefined) {
      requestContext.setQueryParam('activate', ObjectSerializer_1.ObjectSerializer.serialize(activate, 'boolean', ''));
    }
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, 'UserFactor', ''), contentType);
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
  /**
     * Fetches a factor for the specified user
     * Get Factor
     * @param userId
     * @param factorId
     */
  async getFactor(userId, factorId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'getFactor', 'userId');
    }
    // verify required parameter 'factorId' is not null or undefined
    if (factorId === null || factorId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'getFactor', 'factorId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/factors/{factorId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'factorId' + '}', encodeURIComponent(String(factorId)));
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
     * Polls factors verification transaction for status.
     * Get Factor Transaction Status
     * @param userId
     * @param factorId
     * @param transactionId
     */
  async getFactorTransactionStatus(userId, factorId, transactionId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'getFactorTransactionStatus', 'userId');
    }
    // verify required parameter 'factorId' is not null or undefined
    if (factorId === null || factorId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'getFactorTransactionStatus', 'factorId');
    }
    // verify required parameter 'transactionId' is not null or undefined
    if (transactionId === null || transactionId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'getFactorTransactionStatus', 'transactionId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/factors/{factorId}/transactions/{transactionId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'factorId' + '}', encodeURIComponent(String(factorId)))
      .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
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
     * Enumerates all the enrolled factors for the specified user
     * List Factors
     * @param userId
     */
  async listFactors(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'listFactors', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/factors'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
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
     * Enumerates all the supported factors that can be enrolled for the specified user
     * List Supported Factors
     * @param userId
     */
  async listSupportedFactors(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'listSupportedFactors', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/factors/catalog'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
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
     * Enumerates all available security questions for a user's `question` factor
     * List Supported Security Questions
     * @param userId
     */
  async listSupportedSecurityQuestions(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'listSupportedSecurityQuestions', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/factors/questions'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
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
     * Verifies an OTP for a `token` or `token:hardware` factor
     * Verify MFA Factor
     * @param userId
     * @param factorId
     * @param templateId
     * @param tokenLifetimeSeconds
     * @param X_Forwarded_For
     * @param User_Agent
     * @param Accept_Language
     * @param body
     */
  async verifyFactor(userId, factorId, templateId, tokenLifetimeSeconds, X_Forwarded_For, User_Agent, Accept_Language, body, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'verifyFactor', 'userId');
    }
    // verify required parameter 'factorId' is not null or undefined
    if (factorId === null || factorId === undefined) {
      throw new baseapi_1.RequiredError('UserFactorApi', 'verifyFactor', 'factorId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/factors/{factorId}/verify'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'factorId' + '}', encodeURIComponent(String(factorId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (templateId !== undefined) {
      requestContext.setQueryParam('templateId', ObjectSerializer_1.ObjectSerializer.serialize(templateId, 'string', ''));
    }
    // Query Params
    if (tokenLifetimeSeconds !== undefined) {
      requestContext.setQueryParam('tokenLifetimeSeconds', ObjectSerializer_1.ObjectSerializer.serialize(tokenLifetimeSeconds, 'number', 'int32'));
    }
    // Header Params
    requestContext.setHeaderParam('X-Forwarded-For', ObjectSerializer_1.ObjectSerializer.serialize(X_Forwarded_For, 'string', ''));
    // Header Params
    requestContext.setHeaderParam('User-Agent', ObjectSerializer_1.ObjectSerializer.serialize(User_Agent, 'string', ''));
    // Header Params
    requestContext.setHeaderParam('Accept-Language', ObjectSerializer_1.ObjectSerializer.serialize(Accept_Language, 'string', ''));
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, 'VerifyFactorRequest', ''), contentType);
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
exports.UserFactorApiRequestFactory = UserFactorApiRequestFactory;
class UserFactorApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  async activateFactor(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserFactor', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserFactor', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteFactor(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enrollFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  async enrollFactor(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserFactor', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserFactor', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getFactor(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserFactor', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserFactor', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFactorTransactionStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getFactorTransactionStatus(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'VerifyUserFactorResponse', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'VerifyUserFactorResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFactors
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listFactors(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<UserFactor>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<UserFactor>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSupportedFactors
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listSupportedFactors(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<UserFactor>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<UserFactor>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSupportedSecurityQuestions
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listSupportedSecurityQuestions(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<SecurityQuestion>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<SecurityQuestion>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  async verifyFactor(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'VerifyUserFactorResponse', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'VerifyUserFactorResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.UserFactorApiResponseProcessor = UserFactorApiResponseProcessor;
