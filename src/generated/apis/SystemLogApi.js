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
exports.SystemLogApiResponseProcessor = exports.SystemLogApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class SystemLogApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Lists all System Log events  See [System Log query](https://developer.okta.com/docs/reference/system-log-query/) for further details and examples, and [System Log filters and search](https://help.okta.com/okta_help.htm?type=oie&id=csh-syslog-filters) for common use cases.  By default, 100 System Log events are returned. If there are more events, see the [header link](https://developer.okta.com/docs/api/#link-header) for the `next` link, or increase the number of returned objects using the `limit` parameter.  >**Note:** The value of the `clientSecret` property in the System Log is secured by a hashing function, and isn\'t the value used during authentication.
     * List all System Log events
     * @param since Filters the lower time bound of the log events &#x60;published&#x60; property for bounded queries or persistence time for polling queries
     * @param until Filters the upper time bound of the log events &#x60;published&#x60; property for bounded queries or persistence time for polling queries.
     * @param after Retrieves the next page of results. Okta returns a link in the HTTP Header (&#x60;rel&#x3D;next&#x60;) that includes the after query parameter
     * @param filter Filter expression that filters the results. All operators except [ ] are supported. See [Filter](https://developer.okta.com/docs/api/#filter) and [Operators](https://developer.okta.com/docs/api/#operators).
     * @param q Filters log events results by one or more case insensitive keywords.
     * @param limit Sets the number of results that are returned in the response
     * @param sortOrder The order of the returned events that are sorted by the &#x60;published&#x60; property
     */
  async listLogEvents(since, until, after, filter, q, limit, sortOrder, _options) {
    let _config = _options || this.configuration;
    // Path Params
    const path = '/api/v1/logs';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (since !== undefined) {
      requestContext.setQueryParam('since', ObjectSerializer_1.ObjectSerializer.serialize(since, 'string', 'ISO 8601 compliant timestamp'));
    }
    // Query Params
    if (until !== undefined) {
      requestContext.setQueryParam('until', ObjectSerializer_1.ObjectSerializer.serialize(until, 'string', 'ISO 8601 compliant timestamp'));
    }
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', 'Opaque token'));
    }
    // Query Params
    if (filter !== undefined) {
      requestContext.setQueryParam('filter', ObjectSerializer_1.ObjectSerializer.serialize(filter, 'string', 'SCIM Filter expression'));
    }
    // Query Params
    if (q !== undefined) {
      requestContext.setQueryParam('q', ObjectSerializer_1.ObjectSerializer.serialize(q, 'string', 'URL encoded string. Max length is 40 characters per keyword, with a maximum of 10 keyword filters per query (before encoding)'));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'Integer between 0 and 1000'));
    }
    // Query Params
    if (sortOrder !== undefined) {
      requestContext.setQueryParam('sortOrder', ObjectSerializer_1.ObjectSerializer.serialize(sortOrder, '\'ASCENDING\' | \'DESCENDING\'', ''));
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
exports.SystemLogApiRequestFactory = SystemLogApiRequestFactory;
class SystemLogApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listLogEvents(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<LogEvent>', '');
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
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<LogEvent>'), 'Array<LogEvent>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.SystemLogApiResponseProcessor = SystemLogApiResponseProcessor;
