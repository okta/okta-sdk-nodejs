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
     * Creates a new Principal Rate Limit entity. In the current release, we only allow one Principal Rate Limit entity per org and principal.
     * Create a Principal Rate Limit
     * @param entity
     */
  createPrincipalRateLimitEntity(entity: PrincipalRateLimitEntity, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Principal Rate Limit entity by `principalRateLimitId`
     * Retrieve a Principal Rate Limit
     * @param principalRateLimitId id of the Principal Rate Limit
     */
  getPrincipalRateLimitEntity(principalRateLimitId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Principal Rate Limit entities considering the provided parameters
     * List all Principal Rate Limits
     * @param filter
     * @param after
     * @param limit
     */
  listPrincipalRateLimitEntities(filter?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a principal rate limit entity by `principalRateLimitId`
     * Replace a Principal Rate Limit
     * @param principalRateLimitId id of the Principal Rate Limit
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
