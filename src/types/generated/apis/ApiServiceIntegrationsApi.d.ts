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
import { APIServiceIntegrationInstance } from '../models/APIServiceIntegrationInstance';
import { APIServiceIntegrationInstanceSecret } from '../models/APIServiceIntegrationInstanceSecret';
import { PostAPIServiceIntegrationInstance } from '../models/PostAPIServiceIntegrationInstance';
import { PostAPIServiceIntegrationInstanceRequest } from '../models/PostAPIServiceIntegrationInstanceRequest';
/**
 * no description
 */
export declare class ApiServiceIntegrationsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an API Service Integration instance Secret by `secretId`
     * Activate an API service integration instance secret
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
     */
  activateApiServiceIntegrationInstanceSecret(apiServiceId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates and authorizes an API Service Integration instance
     * Create an API service integration instance
     * @param postAPIServiceIntegrationInstanceRequest
     */
  createApiServiceIntegrationInstance(postAPIServiceIntegrationInstanceRequest: PostAPIServiceIntegrationInstanceRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an API Service Integration instance Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects.
     * Create an API service integration instance secret
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     */
  createApiServiceIntegrationInstanceSecret(apiServiceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an API Service Integration instance Secret by `secretId`
     * Deactivate an API service integration instance secret
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
     */
  deactivateApiServiceIntegrationInstanceSecret(apiServiceId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an API Service Integration instance by `id`. This operation also revokes access to scopes that were previously granted to this API Service Integration instance.
     * Delete an API service integration instance
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     */
  deleteApiServiceIntegrationInstance(apiServiceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an API Service Integration instance Secret by `secretId`. You can only delete an inactive Secret.
     * Delete an API service integration instance secret
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
     */
  deleteApiServiceIntegrationInstanceSecret(apiServiceId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an API Service Integration instance by `id`
     * Retrieve an API service integration instance
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     */
  getApiServiceIntegrationInstance(apiServiceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all client secrets for an API Service Integration instance by `apiServiceId`
     * List all API service integration instance secrets
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     */
  listApiServiceIntegrationInstanceSecrets(apiServiceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all API Service Integration instances with a pagination option
     * List all API service integration instances
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     */
  listApiServiceIntegrationInstances(after?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApiServiceIntegrationsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateApiServiceIntegrationInstanceSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateApiServiceIntegrationInstanceSecret(response: ResponseContext): Promise<APIServiceIntegrationInstanceSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApiServiceIntegrationInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  createApiServiceIntegrationInstance(response: ResponseContext): Promise<PostAPIServiceIntegrationInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApiServiceIntegrationInstanceSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  createApiServiceIntegrationInstanceSecret(response: ResponseContext): Promise<APIServiceIntegrationInstanceSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateApiServiceIntegrationInstanceSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateApiServiceIntegrationInstanceSecret(response: ResponseContext): Promise<APIServiceIntegrationInstanceSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApiServiceIntegrationInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteApiServiceIntegrationInstance(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApiServiceIntegrationInstanceSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteApiServiceIntegrationInstanceSecret(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiServiceIntegrationInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  getApiServiceIntegrationInstance(response: ResponseContext): Promise<APIServiceIntegrationInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApiServiceIntegrationInstanceSecrets
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApiServiceIntegrationInstanceSecrets(response: ResponseContext): Promise<Array<APIServiceIntegrationInstanceSecret>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApiServiceIntegrationInstances
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApiServiceIntegrationInstances(response: ResponseContext): Promise<Array<APIServiceIntegrationInstance>>;
}
