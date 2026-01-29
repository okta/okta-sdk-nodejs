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
exports.CustomTelephonyProviderApiResponseProcessor = exports.CustomTelephonyProviderApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class CustomTelephonyProviderApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Activates a custom telephony provider by its ID. You must activate a provider before it can be used.
     * Activate a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  async activateCustomTelephonyCredential(customTelephonyProviderId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'customTelephonyProviderId' is not null or undefined
    if (customTelephonyProviderId === null || customTelephonyProviderId === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'activateCustomTelephonyCredential', 'customTelephonyProviderId');
    }
    // Path Params
    const path = '/api/v1/telephony-providers/{customTelephonyProviderId}/lifecycle/activate';
    const vars = {
      ['customTelephonyProviderId']: String(customTelephonyProviderId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Creates a custom telephony provider with the provided credentials
     * Create a custom telephony provider
     * @param customTelephonyProviderCredentialCreateRequest
     */
  async createCustomTelephonyProviderCredentials(customTelephonyProviderCredentialCreateRequest, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'customTelephonyProviderCredentialCreateRequest' is not null or undefined
    if (customTelephonyProviderCredentialCreateRequest === null || customTelephonyProviderCredentialCreateRequest === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'createCustomTelephonyProviderCredentials', 'customTelephonyProviderCredentialCreateRequest');
    }
    // Path Params
    const path = '/api/v1/telephony-providers';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], customTelephonyProviderCredentialCreateRequest);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(customTelephonyProviderCredentialCreateRequest, 'CustomTelephonyProviderCredentialCreateRequest', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Deactivates a custom telephony provider by its ID. Keep the following points in mind when you deactivate a provider: * You must deactivate a provider before deleting it. * If you have two telephony providers configured, and both are active, you can only deactivate the secondary provider. The second provider is the one that isn\'t set as the primary provider.
     * Deactivate a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  async deactivateCustomTelephonyCredential(customTelephonyProviderId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'customTelephonyProviderId' is not null or undefined
    if (customTelephonyProviderId === null || customTelephonyProviderId === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'deactivateCustomTelephonyCredential', 'customTelephonyProviderId');
    }
    // Path Params
    const path = '/api/v1/telephony-providers/{customTelephonyProviderId}/lifecycle/deactivate';
    const vars = {
      ['customTelephonyProviderId']: String(customTelephonyProviderId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Deletes a custom telephony provider by its ID.  Before you delete a provider, ensure that it is [deactivated](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/CustomTelephonyProvider/#tag/CustomTelephonyProvider/operation/deactivateCustomTelephonyCredential). Consider setting up another telephony provider if you still plan to use telephony in your org. See [Set up an external telephony provider](https://help.okta.com/okta_help.htm?type=oie&id=about-telephony).
     * Delete a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  async deleteCustomTelephonyProviderCredential(customTelephonyProviderId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'customTelephonyProviderId' is not null or undefined
    if (customTelephonyProviderId === null || customTelephonyProviderId === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'deleteCustomTelephonyProviderCredential', 'customTelephonyProviderId');
    }
    // Path Params
    const path = '/api/v1/telephony-providers/{customTelephonyProviderId}';
    const vars = {
      ['customTelephonyProviderId']: String(customTelephonyProviderId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Retrieves the details of a custom telephony provider by its ID
     * Retrieve a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  async getCustomTelephonyProviderCredential(customTelephonyProviderId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'customTelephonyProviderId' is not null or undefined
    if (customTelephonyProviderId === null || customTelephonyProviderId === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'getCustomTelephonyProviderCredential', 'customTelephonyProviderId');
    }
    // Path Params
    const path = '/api/v1/telephony-providers/{customTelephonyProviderId}';
    const vars = {
      ['customTelephonyProviderId']: String(customTelephonyProviderId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Lists all custom telephony providers that are configured in your org
     * List all custom telephony providers
     */
  async listAllCustomTelephonyProviderCredentials(_options) {
    let _config = _options || this.configuration;
    // Path Params
    const path = '/api/v1/telephony-providers';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Sends a test message (SMS or call) using the specified custom telephony provider to verify that the provider is configured correctly.  You must provide a valid phone number and country code to send the test message. Send it to a phone number that you have access to so you can confirm that the message was received.
     * Send a test message from a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     * @param customTelephonyProviderCredentialSendTestRequest
     */
  async sendTestCustomTelephonyProviderCredential(customTelephonyProviderId, customTelephonyProviderCredentialSendTestRequest, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'customTelephonyProviderId' is not null or undefined
    if (customTelephonyProviderId === null || customTelephonyProviderId === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'sendTestCustomTelephonyProviderCredential', 'customTelephonyProviderId');
    }
    // verify required parameter 'customTelephonyProviderCredentialSendTestRequest' is not null or undefined
    if (customTelephonyProviderCredentialSendTestRequest === null || customTelephonyProviderCredentialSendTestRequest === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'sendTestCustomTelephonyProviderCredential', 'customTelephonyProviderCredentialSendTestRequest');
    }
    // Path Params
    const path = '/api/v1/telephony-providers/{customTelephonyProviderId}/test';
    const vars = {
      ['customTelephonyProviderId']: String(customTelephonyProviderId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], customTelephonyProviderCredentialSendTestRequest);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(customTelephonyProviderCredentialSendTestRequest, 'CustomTelephonyProviderCredentialSendTestRequest', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Sets a custom telephony provider as the primary telephony provider for the org. You can only set one provider as a primary provider at a time.
     * Set a custom telephony provider as a primary telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  async setAsPrimaryCustomTelephonyCredential(customTelephonyProviderId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'customTelephonyProviderId' is not null or undefined
    if (customTelephonyProviderId === null || customTelephonyProviderId === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'setAsPrimaryCustomTelephonyCredential', 'customTelephonyProviderId');
    }
    // Path Params
    const path = '/api/v1/telephony-providers/{customTelephonyProviderId}/setAsPrimary';
    const vars = {
      ['customTelephonyProviderId']: String(customTelephonyProviderId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Updates the credentials of an existing custom telephony provider
     * Update a custom telephony provider credential
     * @param customTelephonyProviderId The ID of the custom telephony provider
     * @param customTelephonyProviderCredentialUpdateRequest
     */
  async updateCustomTelephonyProviderCredential(customTelephonyProviderId, customTelephonyProviderCredentialUpdateRequest, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'customTelephonyProviderId' is not null or undefined
    if (customTelephonyProviderId === null || customTelephonyProviderId === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'updateCustomTelephonyProviderCredential', 'customTelephonyProviderId');
    }
    // verify required parameter 'customTelephonyProviderCredentialUpdateRequest' is not null or undefined
    if (customTelephonyProviderCredentialUpdateRequest === null || customTelephonyProviderCredentialUpdateRequest === undefined) {
      throw new baseapi_1.RequiredError('CustomTelephonyProviderApi', 'updateCustomTelephonyProviderCredential', 'customTelephonyProviderCredentialUpdateRequest');
    }
    // Path Params
    const path = '/api/v1/telephony-providers/{customTelephonyProviderId}';
    const vars = {
      ['customTelephonyProviderId']: String(customTelephonyProviderId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PATCH, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], customTelephonyProviderCredentialUpdateRequest);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(customTelephonyProviderCredentialUpdateRequest, 'CustomTelephonyProviderCredentialUpdateRequest', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
exports.CustomTelephonyProviderApiRequestFactory = CustomTelephonyProviderApiRequestFactory;
class CustomTelephonyProviderApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateCustomTelephonyCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  async activateCustomTelephonyCredential(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'CustomTelephonyProviderCredentialResponse'), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomTelephonyProviderCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createCustomTelephonyProviderCredentials(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'CustomTelephonyProviderCredentialResponse'), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateCustomTelephonyCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deactivateCustomTelephonyCredential(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'CustomTelephonyProviderCredentialResponse'), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomTelephonyProviderCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteCustomTelephonyProviderCredential(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomTelephonyProviderCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getCustomTelephonyProviderCredential(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'CustomTelephonyProviderCredentialResponse'), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAllCustomTelephonyProviderCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAllCustomTelephonyProviderCredentials(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'CustomTelephonyProviderCredentialsResponse', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'CustomTelephonyProviderCredentialsResponse'), 'CustomTelephonyProviderCredentialsResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendTestCustomTelephonyProviderCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  async sendTestCustomTelephonyProviderCredential(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setAsPrimaryCustomTelephonyCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  async setAsPrimaryCustomTelephonyCredential(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'CustomTelephonyProviderCredentialResponse'), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCustomTelephonyProviderCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  async updateCustomTelephonyProviderCredential(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'CustomTelephonyProviderCredentialResponse'), 'CustomTelephonyProviderCredentialResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.CustomTelephonyProviderApiResponseProcessor = CustomTelephonyProviderApiResponseProcessor;
