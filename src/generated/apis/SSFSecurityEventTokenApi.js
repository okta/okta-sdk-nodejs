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
exports.SSFSecurityEventTokenApiResponseProcessor = exports.SSFSecurityEventTokenApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class SSFSecurityEventTokenApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Publishes a Security Event Token (SET) sent by a Security Events Provider. After the token is verified, Okta ingests the event and performs any appropriate action.
     * Publish a security event token
     * @param securityEventToken The request body is a signed [SET](https://datatracker.ietf.org/doc/html/rfc8417), which is a type of JSON Web Token (JWT).  For SET JWT header and body descriptions, see [SET JWT header](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtHeader) and [SET JWT body payload](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtBody).
     */
  async publishSecurityEventTokens(securityEventToken, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'securityEventToken' is not null or undefined
    if (securityEventToken === null || securityEventToken === undefined) {
      throw new baseapi_1.RequiredError('SSFSecurityEventTokenApi', 'publishSecurityEventTokens', 'securityEventToken');
    }
    // Path Params
    const path = '/security/api/v1/security-events';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/secevent+jwt'
    ], securityEventToken);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(securityEventToken, 'string', ''), contentType);
    requestContext.setBody(serializedBody);
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
}
exports.SSFSecurityEventTokenApiRequestFactory = SSFSecurityEventTokenApiRequestFactory;
class SSFSecurityEventTokenApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publishSecurityEventTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
  async publishSecurityEventTokens(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('202', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'SecurityEventTokenError', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.SSFSecurityEventTokenApiResponseProcessor = SSFSecurityEventTokenApiResponseProcessor;
