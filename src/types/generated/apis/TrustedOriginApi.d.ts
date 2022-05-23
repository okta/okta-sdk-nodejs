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
     * Success
     * Activate Trusted Origin
     * @param trustedOriginId
     */
  activateOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Create Trusted Origin
     * @param trustedOrigin
     */
  createOrigin(trustedOrigin: TrustedOrigin, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Deactivate Trusted Origin
     * @param trustedOriginId
     */
  deactivateOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Delete Trusted Origin
     * @param trustedOriginId
     */
  deleteOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Get Trusted Origin
     * @param trustedOriginId
     */
  getOrigin(trustedOriginId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List Trusted Origins
     * @param q
     * @param filter
     * @param after
     * @param limit
     */
  listOrigins(q?: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Update Trusted Origin
     * @param trustedOriginId
     * @param trustedOrigin
     */
  updateOrigin(trustedOriginId: string, trustedOrigin: TrustedOrigin, _options?: Configuration): Promise<RequestContext>;
}
export declare class TrustedOriginApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateOrigin(response: ResponseContext): Promise<TrustedOrigin>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  createOrigin(response: ResponseContext): Promise<TrustedOrigin>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateOrigin(response: ResponseContext): Promise<TrustedOrigin>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteOrigin(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOrigin(response: ResponseContext): Promise<TrustedOrigin>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrigins
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOrigins(response: ResponseContext): Promise<Array<TrustedOrigin>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrigin
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateOrigin(response: ResponseContext): Promise<TrustedOrigin>;
}
