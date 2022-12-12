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
exports.IdentitySourceApiResponseProcessor = exports.IdentitySourceApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class IdentitySourceApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Creates an identity source session for the given identity source instance
     * Create an Identity Source Session
     * @param identitySourceId
     */
  async createIdentitySourceSession(identitySourceId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'identitySourceId' is not null or undefined
    if (identitySourceId === null || identitySourceId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'createIdentitySourceSession', 'identitySourceId');
    }
    // Path Params
    const path = '/api/v1/identity-sources/{identitySourceId}/sessions';
    const vars = {
      ['identitySourceId']: String(identitySourceId),
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
     * Deletes an identity source session for a given `identitySourceId` and `sessionId`
     * Delete an Identity Source Session
     * @param identitySourceId
     * @param sessionId
     */
  async deleteIdentitySourceSession(identitySourceId, sessionId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'identitySourceId' is not null or undefined
    if (identitySourceId === null || identitySourceId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'deleteIdentitySourceSession', 'identitySourceId');
    }
    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'deleteIdentitySourceSession', 'sessionId');
    }
    // Path Params
    const path = '/api/v1/identity-sources/{identitySourceId}/sessions/{sessionId}';
    const vars = {
      ['identitySourceId']: String(identitySourceId),
      ['sessionId']: String(sessionId),
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
     * Retrieves an identity source session for a given identity source id and session id
     * Retrieve an Identity Source Session
     * @param identitySourceId
     * @param sessionId
     */
  async getIdentitySourceSession(identitySourceId, sessionId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'identitySourceId' is not null or undefined
    if (identitySourceId === null || identitySourceId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'getIdentitySourceSession', 'identitySourceId');
    }
    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'getIdentitySourceSession', 'sessionId');
    }
    // Path Params
    const path = '/api/v1/identity-sources/{identitySourceId}/sessions/{sessionId}';
    const vars = {
      ['identitySourceId']: String(identitySourceId),
      ['sessionId']: String(sessionId),
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
     * Lists all identity source sessions for the given identity source instance
     * List all Identity Source Sessions
     * @param identitySourceId
     */
  async listIdentitySourceSessions(identitySourceId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'identitySourceId' is not null or undefined
    if (identitySourceId === null || identitySourceId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'listIdentitySourceSessions', 'identitySourceId');
    }
    // Path Params
    const path = '/api/v1/identity-sources/{identitySourceId}/sessions';
    const vars = {
      ['identitySourceId']: String(identitySourceId),
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
     * Starts the import from the identity source described by the uploaded bulk operations
     * Start the import from the Identity Source
     * @param identitySourceId
     * @param sessionId
     */
  async startImportFromIdentitySource(identitySourceId, sessionId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'identitySourceId' is not null or undefined
    if (identitySourceId === null || identitySourceId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'startImportFromIdentitySource', 'identitySourceId');
    }
    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'startImportFromIdentitySource', 'sessionId');
    }
    // Path Params
    const path = '/api/v1/identity-sources/{identitySourceId}/sessions/{sessionId}/start-import';
    const vars = {
      ['identitySourceId']: String(identitySourceId),
      ['sessionId']: String(sessionId),
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
     * Uploads entities that need to be deleted in Okta from the identity source for the given session
     * Upload the data to be deleted in Okta
     * @param identitySourceId
     * @param sessionId
     * @param BulkDeleteRequestBody
     */
  async uploadIdentitySourceDataForDelete(identitySourceId, sessionId, BulkDeleteRequestBody, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'identitySourceId' is not null or undefined
    if (identitySourceId === null || identitySourceId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'uploadIdentitySourceDataForDelete', 'identitySourceId');
    }
    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'uploadIdentitySourceDataForDelete', 'sessionId');
    }
    // Path Params
    const path = '/api/v1/identity-sources/{identitySourceId}/sessions/{sessionId}/bulk-delete';
    const vars = {
      ['identitySourceId']: String(identitySourceId),
      ['sessionId']: String(sessionId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], BulkDeleteRequestBody);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(BulkDeleteRequestBody, 'BulkDeleteRequestBody', ''), contentType);
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
     * Uploads entities that need to be upserted in Okta from the identity source for the given session
     * Upload the data to be upserted in Okta
     * @param identitySourceId
     * @param sessionId
     * @param BulkUpsertRequestBody
     */
  async uploadIdentitySourceDataForUpsert(identitySourceId, sessionId, BulkUpsertRequestBody, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'identitySourceId' is not null or undefined
    if (identitySourceId === null || identitySourceId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'uploadIdentitySourceDataForUpsert', 'identitySourceId');
    }
    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new baseapi_1.RequiredError('IdentitySourceApi', 'uploadIdentitySourceDataForUpsert', 'sessionId');
    }
    // Path Params
    const path = '/api/v1/identity-sources/{identitySourceId}/sessions/{sessionId}/bulk-upsert';
    const vars = {
      ['identitySourceId']: String(identitySourceId),
      ['sessionId']: String(sessionId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], BulkUpsertRequestBody);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(BulkUpsertRequestBody, 'BulkUpsertRequestBody', ''), contentType);
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
exports.IdentitySourceApiRequestFactory = IdentitySourceApiRequestFactory;
class IdentitySourceApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentitySourceSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createIdentitySourceSession(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentitySourceSession>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentitySourceSession>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentitySourceSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteIdentitySourceSession(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to getIdentitySourceSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getIdentitySourceSession(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentitySourceSession', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentitySourceSession', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentitySourceSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listIdentitySourceSessions(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentitySourceSession>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentitySourceSession>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to startImportFromIdentitySource
     * @throws ApiException if the response code was not in [200, 299]
     */
  async startImportFromIdentitySource(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentitySourceSession>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentitySourceSession>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdentitySourceDataForDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
  async uploadIdentitySourceDataForDelete(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('202', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to uploadIdentitySourceDataForUpsert
     * @throws ApiException if the response code was not in [200, 299]
     */
  async uploadIdentitySourceDataForUpsert(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('202', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.IdentitySourceApiResponseProcessor = IdentitySourceApiResponseProcessor;
