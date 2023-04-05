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
import { ApiToken } from '../models/ApiToken';
/**
 * no description
 */
export declare class ApiTokenApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the metadata for an active API token by id
     * Retrieve an API Token's Metadata
     * @param apiTokenId id of the API Token
     */
  getApiToken(apiTokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the metadata of the active API tokens
     * List all API Token Metadata
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     * @param limit A limit on the number of objects to return.
     * @param q Finds a token that matches the name or clientName.
     */
  listApiTokens(after?: string, limit?: number, q?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes an API token by `apiTokenId`
     * Revoke an API Token
     * @param apiTokenId id of the API Token
     */
  revokeApiToken(apiTokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes the API token provided in the Authorization header
     * Revoke the Current API Token
     */
  revokeCurrentApiToken(_options?: Configuration): Promise<RequestContext>;
}
export declare class ApiTokenApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiToken
     * @throws ApiException if the response code was not in [200, 299]
     */
  getApiToken(response: ResponseContext): Promise<ApiToken>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApiTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApiTokens(response: ResponseContext): Promise<Array<ApiToken>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeApiToken
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeApiToken(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeCurrentApiToken
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeCurrentApiToken(response: ResponseContext): Promise<void>;
}
