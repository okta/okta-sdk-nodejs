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


import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
/**
 * no description
 */
export declare class SSFSecurityEventTokenApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Publishes a Security Event Token (SET) sent by a Security Events Provider. After the token is verified, Okta ingests the event and performs any appropriate action.
     * Publish a security event token
     * @param securityEventToken The request body is a signed [SET](https://datatracker.ietf.org/doc/html/rfc8417), which is a type of JSON Web Token (JWT).  For SET JWT header and body descriptions, see [SET JWT header](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtHeader) and [SET JWT body payload](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtBody).
     */
  publishSecurityEventTokens(securityEventToken: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class SSFSecurityEventTokenApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publishSecurityEventTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
  publishSecurityEventTokens(response: ResponseContext): Promise<void>;
}
