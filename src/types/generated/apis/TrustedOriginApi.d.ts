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
import { TrustedOrigin } from '../models/TrustedOrigin';
import { TrustedOriginWrite } from '../models/TrustedOriginWrite';
/**
 * no description
 */
export declare class TrustedOriginApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a trusted origin. Sets the `status` to `ACTIVE`.
     * Activate a trusted origin
     * @param trustedOriginId &#x60;id&#x60; of the trusted origin
     */
  activateTrustedOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a trusted origin
     * Create a trusted origin
     * @param trustedOrigin
     */
  createTrustedOrigin(trustedOrigin: TrustedOriginWrite, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a trusted origin. Sets the `status` to `INACTIVE`.
     * Deactivate a trusted origin
     * @param trustedOriginId &#x60;id&#x60; of the trusted origin
     */
  deactivateTrustedOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a trusted origin
     * Delete a trusted origin
     * @param trustedOriginId &#x60;id&#x60; of the trusted origin
     */
  deleteTrustedOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a trusted origin
     * Retrieve a trusted origin
     * @param trustedOriginId &#x60;id&#x60; of the trusted origin
     */
  getTrustedOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all trusted origins
     * List all trusted origins
     * @param q A search string that prefix matches against the &#x60;name&#x60; and &#x60;origin&#x60;
     * @param filter [Filter](https://developer.okta.com/docs/api/#filter) trusted origins with a supported expression for a subset of properties. You can filter on the following properties: &#x60;name&#x60;, &#x60;origin&#x60;, &#x60;status&#x60;, and &#x60;type&#x60; (type of scopes).
     * @param after After cursor provided by a prior request
     * @param limit Specifies the number of results
     */
  listTrustedOrigins(q?: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a trusted origin
     * Replace a trusted origin
     * @param trustedOriginId &#x60;id&#x60; of the trusted origin
     * @param trustedOrigin
     */
  replaceTrustedOrigin(trustedOriginId: string, trustedOrigin: TrustedOrigin, _options?: Configuration): Promise<RequestContext>;
}
export declare class TrustedOriginApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateTrustedOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateTrustedOrigin(response: ResponseContext): Promise<TrustedOrigin>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTrustedOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  createTrustedOrigin(response: ResponseContext): Promise<TrustedOrigin>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateTrustedOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateTrustedOrigin(response: ResponseContext): Promise<TrustedOrigin>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTrustedOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteTrustedOrigin(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTrustedOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  getTrustedOrigin(response: ResponseContext): Promise<TrustedOrigin>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTrustedOrigins
     * @throws ApiException if the response code was not in [200, 299]
     */
  listTrustedOrigins(response: ResponseContext): Promise<Array<TrustedOrigin>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceTrustedOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceTrustedOrigin(response: ResponseContext): Promise<TrustedOrigin>;
}
