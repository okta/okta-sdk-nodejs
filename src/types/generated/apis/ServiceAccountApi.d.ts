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
import { AppServiceAccount } from '../models/AppServiceAccount';
import { AppServiceAccountForUpdate } from '../models/AppServiceAccountForUpdate';
import { ServiceAccount } from '../models/ServiceAccount';
import { ServiceAccountForUpdate } from '../models/ServiceAccountForUpdate';
/**
 * no description
 */
export declare class ServiceAccountApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new app service account for managing an app account
     * Create an app service account
     * @param body
     */
  createAppServiceAccount(body: AppServiceAccount, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new service account for managing an Okta User or SaaS app account
     * Create a service account
     * @param body
     */
  createServiceAccount(body: ServiceAccount, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an app service account specified by ID
     * Delete an app service account
     * @param id ID of an existing service account
     */
  deleteAppServiceAccount(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a service account specified by ID
     * Delete a service account
     * @param id ID of an existing service account
     */
  deleteServiceAccount(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an app service account specified by ID
     * Retrieve an app service account
     * @param id ID of an existing service account
     */
  getAppServiceAccount(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a service account specified by ID
     * Retrieve a service account
     * @param id ID of an existing service account
     */
  getServiceAccount(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all app service accounts
     * List all app service accounts
     * @param limit A limit on the number of objects to return
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param match Searches for app service accounts where the account name (&#x60;name&#x60;), username (&#x60;username&#x60;), app instance label (&#x60;containerInstanceName&#x60;), or OIN app key name (&#x60;containerGlobalName&#x60;) contains the given value
     */
  listAppServiceAccounts(limit?: number, after?: string, match?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all service accounts
     * List all service accounts
     * @param limit Specifies the number of results returned
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param q Searches for service accounts where the account name, username, app instance name, or global app name contains the given value
     */
  listServiceAccounts(limit?: number, after?: string, q?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an existing app service account specified by ID
     * Update an existing app service account
     * @param id ID of an existing service account
     * @param body
     */
  updateAppServiceAccount(id: string, body?: AppServiceAccountForUpdate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a service account specified by ID
     * Update a service account
     * @param id ID of an existing service account
     * @param body
     */
  updateServiceAccount(id: string, body?: ServiceAccountForUpdate, _options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceAccountApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAppServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAppServiceAccount(response: ResponseContext): Promise<AppServiceAccount>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  createServiceAccount(response: ResponseContext): Promise<ServiceAccount>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAppServiceAccount(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteServiceAccount(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAppServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAppServiceAccount(response: ResponseContext): Promise<AppServiceAccount>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  getServiceAccount(response: ResponseContext): Promise<ServiceAccount>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppServiceAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAppServiceAccounts(response: ResponseContext): Promise<Array<AppServiceAccount>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServiceAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
  listServiceAccounts(response: ResponseContext): Promise<Array<ServiceAccount>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAppServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateAppServiceAccount(response: ResponseContext): Promise<AppServiceAccount>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateServiceAccount(response: ResponseContext): Promise<ServiceAccount>;
}
