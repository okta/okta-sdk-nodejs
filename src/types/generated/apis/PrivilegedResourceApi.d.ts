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
import { PrivilegedResource } from '../models/PrivilegedResource';
import { PrivilegedResourceAccountAppResponse } from '../models/PrivilegedResourceAccountAppResponse';
import { PrivilegedResourceFilters } from '../models/PrivilegedResourceFilters';
import { PrivilegedResourceUpdateRequest } from '../models/PrivilegedResourceUpdateRequest';
import { RotatePasswordRequest } from '../models/RotatePasswordRequest';
/**
 * no description
 */
export declare class PrivilegedResourceApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Claims a specified privileged resource for management. This also marks the `status` as `ACTIVE`.
     * Claim a privileged resource for management
     * @param id ID of an existing privileged resource
     */
  claimPrivilegedResource(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a privileged resource either in Okta or for a specified external app. After creation, the `status` param is set to `CREATED`.
     * Create a privileged resource
     * @param privilegedResource
     */
  createPrivilegedResource(privilegedResource: PrivilegedResource, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a privileged resource specified by ID. This also marks the `status` as `INACTIVE`.
     * Delete a privileged resource
     * @param id ID of an existing privileged resource
     */
  deletePrivilegedResource(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a privileged resource specified by ID
     * Retrieve a privileged resource
     * @param id ID of an existing privileged resource
     */
  getPrivilegedResource(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves privileged resources that were filtered based on the search and filtering criteria specified in the query parameters
     * Retrieve the privileged resources
     * @param containerId ID of an existing container, such as an app instance
     * @param lastUpdated Last updated timestamp query parameter
     * @param status The status of the privileged resource to filter on
     * @param limit Specifies the batch size of the results to be returned
     * @param after The cursor used for pagination. It represents the last privileged resource ID returned in the previous fetch operation.
     */
  getPrivilegedResources(containerId: string, lastUpdated?: string, status?: string, limit?: number, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Prepares the privileged resources by scanning imported app users and applying the privileged resource filtering criteria.  If the request contains the `lastUpdated` parameter, the privileged resource criteria filters out the imported app users that were last updated after the timestamp.  The value of the `lastUpdated` query parameter should be what the client received in the `ETag` header included in the last response of the previous resource fetch cycle.
     * Prepare the privileged resources
     * @param containerId ID of an existing container, such as an app instance
     * @param lastUpdated Last updated timestamp query parameter
     */
  preparePrivilegedResourcesToBeFetched(containerId: string, lastUpdated?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces or creates filters used to identify privileged resources. These filters are used during the privileged resource retrieval operation.
     * Replace the filters
     * @param containerId ID of an existing container, such as an app instance
     * @param privilegedResourceFilters
     */
  replaceFiltersForPrivilegedResourceIdentification(containerId: string, privilegedResourceFilters: PrivilegedResourceFilters, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a privileged resource specified by ID
     * Replace a privileged resource
     * @param id ID of an existing privileged resource
     * @param privilegedResourceUpdateRequest
     */
  replacePrivilegedResource(id: string, privilegedResourceUpdateRequest: PrivilegedResourceUpdateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Rotates the password for a specified privileged resource
     * Rotate the password for a privileged resource
     * @param id ID of an existing privileged resource
     * @param rotatePasswordRequest
     */
  rotatePasswordForPrivilegedResource(id: string, rotatePasswordRequest: RotatePasswordRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class PrivilegedResourceApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to claimPrivilegedResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  claimPrivilegedResource(response: ResponseContext): Promise<PrivilegedResource>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPrivilegedResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  createPrivilegedResource(response: ResponseContext): Promise<PrivilegedResource>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePrivilegedResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  deletePrivilegedResource(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrivilegedResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPrivilegedResource(response: ResponseContext): Promise<PrivilegedResource>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrivilegedResources
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPrivilegedResources(response: ResponseContext): Promise<Array<PrivilegedResourceAccountAppResponse>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to preparePrivilegedResourcesToBeFetched
     * @throws ApiException if the response code was not in [200, 299]
     */
  preparePrivilegedResourcesToBeFetched(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceFiltersForPrivilegedResourceIdentification
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceFiltersForPrivilegedResourceIdentification(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replacePrivilegedResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  replacePrivilegedResource(response: ResponseContext): Promise<PrivilegedResource>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rotatePasswordForPrivilegedResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  rotatePasswordForPrivilegedResource(response: ResponseContext): Promise<PrivilegedResource>;
}
