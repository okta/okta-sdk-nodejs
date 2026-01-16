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
import { PrincipalRateLimitEntity } from '../models/PrincipalRateLimitEntity';
/**
 * no description
 */
export declare class PrincipalRateLimitApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new principal rate limit entity. Okta only allows one principal rate limit entity per org and principal.
     * Create a principal rate limit
     * @param entity
     */
  createPrincipalRateLimitEntity(entity: PrincipalRateLimitEntity, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a principal rate limit entity by `principalRateLimitId`
     * Retrieve a principal rate limit
     * @param principalRateLimitId ID of the principal rate limit
     */
  getPrincipalRateLimitEntity(principalRateLimitId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Principal Rate Limit entities considering the provided parameters
     * List all principal rate limits
     * @param filter Filters the list of principal rate limit entities by the provided principal type (&#x60;principalType&#x60;). For example, &#x60;filter&#x3D;principalType eq \&quot;SSWS_TOKEN\&quot;&#x60; or &#x60;filter&#x3D;principalType eq \&quot;OAUTH_CLIENT\&quot;&#x60;.
     * @param after The cursor to use for pagination. It\&#39;s an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit Specifies the number of items to return in a single response page.
     */
  listPrincipalRateLimitEntities(filter: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a principal rate limit entity by `principalRateLimitId`
     * Replace a principal rate limit
     * @param principalRateLimitId ID of the principal rate limit
     * @param entity
     */
  replacePrincipalRateLimitEntity(principalRateLimitId: string, entity: PrincipalRateLimitEntity, _options?: Configuration): Promise<RequestContext>;
}
export declare class PrincipalRateLimitApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPrincipalRateLimitEntity
     * @throws ApiException if the response code was not in [200, 299]
     */
  createPrincipalRateLimitEntity(response: ResponseContext): Promise<PrincipalRateLimitEntity>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrincipalRateLimitEntity
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPrincipalRateLimitEntity(response: ResponseContext): Promise<PrincipalRateLimitEntity>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPrincipalRateLimitEntities
     * @throws ApiException if the response code was not in [200, 299]
     */
  listPrincipalRateLimitEntities(response: ResponseContext): Promise<Array<PrincipalRateLimitEntity>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replacePrincipalRateLimitEntity
     * @throws ApiException if the response code was not in [200, 299]
     */
  replacePrincipalRateLimitEntity(response: ResponseContext): Promise<PrincipalRateLimitEntity>;
}
