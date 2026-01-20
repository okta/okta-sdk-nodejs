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
exports.AgentPotentialConnectionsApiResponseProcessor = exports.AgentPotentialConnectionsApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class AgentPotentialConnectionsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Lists all global resource connections of a specific connection type that an AI agent can potentially connect to  Only resource connections returned from this request are valid for [creating a connection](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentConnections/#tag/AgentConnections/operation/createManagedConnection) with a matching connection-type protocol.  Include the required [`filter`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentPotentialConnections/#tag/AgentPotentialConnections/operation/listPotentialConnectionsByType!in=query&path=filter&t=request) query parameter to return potential connections with a specific `connectionType`. You can also use the [`match`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentPotentialConnections/#tag/AgentPotentialConnections/operation/listPotentialConnectionsByType!in=query&path=match&t=request) query parameter to apply fuzzy-matching on the returned list of potential connections.
     * List all potential connections
     * @param filter A required [filter](/#filter) expression to return a specific type of potential connections.  The expression supports the &#x60;eq&#x60; [operator](/#operators) and the following &#x60;connectionType&#x60; values: * &#x60;IDENTITY_ASSERTION_CUSTOM_AS&#x60; * &#x60;STS_VAULT_SECRET&#x60; * &#x60;STS_SERVICE_ACCOUNT&#x60;  You can combine multiple expressions using the &#x60;and&#x60; operator to narrow results. For example, filter by connection type and app instance ORN for &#x60;STS_SERVICE_ACCOUNT&#x60; connections.  **Note:** Query parameter percent encoding is required. See [Special characters](/#special-characters).
     * @param match A case-insensitive substring for fuzzy-match that\&#39;s prefix-friendly
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  async listPotentialConnectionsByType(filter, match, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'filter' is not null or undefined
    if (filter === null || filter === undefined) {
      throw new baseapi_1.RequiredError('AgentPotentialConnectionsApi', 'listPotentialConnectionsByType', 'filter');
    }
    // Path Params
    const path = '/workload-principals/api/v1/potential-connections';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (filter !== undefined) {
      requestContext.setQueryParam('filter', ObjectSerializer_1.ObjectSerializer.serialize(filter, 'string', 'scim-filter'));
    }
    // Query Params
    if (match !== undefined) {
      requestContext.setQueryParam('match', ObjectSerializer_1.ObjectSerializer.serialize(match, 'string', ''));
    }
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', ''));
    }
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
exports.AgentPotentialConnectionsApiRequestFactory = AgentPotentialConnectionsApiRequestFactory;
class AgentPotentialConnectionsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPotentialConnectionsByType
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listPotentialConnectionsByType(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'PotentialConnectionList', '');
      return body;
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'PotentialConnectionList'), 'PotentialConnectionList', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.AgentPotentialConnectionsApiResponseProcessor = AgentPotentialConnectionsApiResponseProcessor;
