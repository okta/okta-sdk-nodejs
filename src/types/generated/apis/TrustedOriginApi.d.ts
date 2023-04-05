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
/**
 * no description
 */
export declare class TrustedOriginApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a trusted origin
     * Activate a Trusted Origin
     * @param trustedOriginId
     */
  activateTrustedOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a trusted origin
     * Create a Trusted Origin
     * @param trustedOrigin
     */
  createTrustedOrigin(trustedOrigin: TrustedOrigin, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a trusted origin
     * Deactivate a Trusted Origin
     * @param trustedOriginId
     */
  deactivateTrustedOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a trusted origin
     * Delete a Trusted Origin
     * @param trustedOriginId
     */
  deleteTrustedOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a trusted origin
     * Retrieve a Trusted Origin
     * @param trustedOriginId
     */
  getTrustedOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all trusted origins
     * List all Trusted Origins
     * @param q
     * @param filter
     * @param after
     * @param limit
     */
  listTrustedOrigins(q?: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a trusted origin
     * Replace a Trusted Origin
     * @param trustedOriginId
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
