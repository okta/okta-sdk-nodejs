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
exports.FeatureApiResponseProcessor = exports.FeatureApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class FeatureApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Success
     * Get Feature
     * @param featureId
     */
  async getFeature(featureId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'featureId' is not null or undefined
    if (featureId === null || featureId === undefined) {
      throw new baseapi_1.RequiredError('FeatureApi', 'getFeature', 'featureId');
    }
    // Path Params
    const localVarPath = '/api/v1/features/{featureId}'
      .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)));
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
     * Success
     * List Feature Dependencies
     * @param featureId
     */
  async listFeatureDependencies(featureId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'featureId' is not null or undefined
    if (featureId === null || featureId === undefined) {
      throw new baseapi_1.RequiredError('FeatureApi', 'listFeatureDependencies', 'featureId');
    }
    // Path Params
    const localVarPath = '/api/v1/features/{featureId}/dependencies'
      .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)));
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
     * Success
     * List Feature Dependents
     * @param featureId
     */
  async listFeatureDependents(featureId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'featureId' is not null or undefined
    if (featureId === null || featureId === undefined) {
      throw new baseapi_1.RequiredError('FeatureApi', 'listFeatureDependents', 'featureId');
    }
    // Path Params
    const localVarPath = '/api/v1/features/{featureId}/dependents'
      .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)));
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
     * Success
     * List Features
     */
  async listFeatures(_options) {
    let _config = _options || this.configuration;
    // Path Params
    const localVarPath = '/api/v1/features';
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
     * Success
     * Update Feature Lifecycle
     * @param featureId
     * @param lifecycle
     * @param mode
     */
  async updateFeatureLifecycle(featureId, lifecycle, mode, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'featureId' is not null or undefined
    if (featureId === null || featureId === undefined) {
      throw new baseapi_1.RequiredError('FeatureApi', 'updateFeatureLifecycle', 'featureId');
    }
    // verify required parameter 'lifecycle' is not null or undefined
    if (lifecycle === null || lifecycle === undefined) {
      throw new baseapi_1.RequiredError('FeatureApi', 'updateFeatureLifecycle', 'lifecycle');
    }
    // Path Params
    const localVarPath = '/api/v1/features/{featureId}/{lifecycle}'
      .replace('{' + 'featureId' + '}', encodeURIComponent(String(featureId)))
      .replace('{' + 'lifecycle' + '}', encodeURIComponent(String(lifecycle)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (mode !== undefined) {
      requestContext.setQueryParam('mode', ObjectSerializer_1.ObjectSerializer.serialize(mode, 'string', ''));
    }
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
}
exports.FeatureApiRequestFactory = FeatureApiRequestFactory;
class FeatureApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getFeature(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Feature', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Feature', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFeatureDependencies
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listFeatureDependencies(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Feature>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Feature>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFeatureDependents
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listFeatureDependents(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Feature>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Feature>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFeatures
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listFeatures(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Feature>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Feature>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFeatureLifecycle
     * @throws ApiException if the response code was not in [200, 299]
     */
  async updateFeatureLifecycle(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Feature', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Feature', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.FeatureApiResponseProcessor = FeatureApiResponseProcessor;
