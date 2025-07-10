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
import { ApiTokenUpdate } from '../models/ApiTokenUpdate';
/**
 * no description
 */
export declare class ApiTokenApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the metadata for an active API token by `apiTokenId`
     * Retrieve an API token\'s metadata
     * @param apiTokenId id of the API Token
     */
  getApiToken(apiTokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the metadata of the active API tokens
     * List all API token metadata
     */
  listApiTokens(_options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes an API token by `apiTokenId`
     * Revoke an API token
     * @param apiTokenId id of the API Token
     */
  revokeApiToken(apiTokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes the API token provided in the Authorization header
     * Revoke the current API token
     */
  revokeCurrentApiToken(_options?: Configuration): Promise<RequestContext>;
  /**
     * Upserts an API Token Network Condition by `apiTokenId`
     * Upsert an API token network condition
     * @param apiTokenId id of the API Token
     * @param apiTokenUpdate
     */
  upsertApiToken(apiTokenId: string, apiTokenUpdate: ApiTokenUpdate, _options?: Configuration): Promise<RequestContext>;
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
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertApiToken
     * @throws ApiException if the response code was not in [200, 299]
     */
  upsertApiToken(response: ResponseContext): Promise<ApiToken>;
}
