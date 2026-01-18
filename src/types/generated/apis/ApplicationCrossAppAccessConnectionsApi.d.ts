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
import { OrgCrossAppAccessConnection } from '../models/OrgCrossAppAccessConnection';
import { OrgCrossAppAccessConnectionPatchRequest } from '../models/OrgCrossAppAccessConnectionPatchRequest';
/**
 * no description
 */
export declare class ApplicationCrossAppAccessConnectionsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a Cross App Access connection
     * Create a Cross App Access connection
     * @param appId Application ID
     * @param orgCrossAppAccessConnection
     */
  createCrossAppAccessConnection(appId: string, orgCrossAppAccessConnection: OrgCrossAppAccessConnection, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Cross App Access connection with the specified ID
     * Delete a Cross App Access connection
     * @param appId Application ID
     * @param connectionId Connection ID
     */
  deleteCrossAppAccessConnection(appId: string, connectionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves inbound and outbound Cross App Access connections associated with an app
     * Retrieve all Cross App Access connections
     * @param appId Application ID
     * @param after Specifies the pagination cursor for the next page of connection results
     * @param limit Specifies the number of results to return per page. The values:   * -1: Return all results (up to system maximum)   * 0: Return an empty result set   * Positive integer: Return up to that many results (capped at system maximum)
     */
  getAllCrossAppAccessConnections(appId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the Cross App Access connection with the specified ID
     * Retrieve a Cross App Access connection
     * @param appId Application ID
     * @param connectionId Connection ID
     */
  getCrossAppAccessConnection(appId: string, connectionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the Cross App Access connection with the specified ID
     * Update a Cross App Access connection
     * @param appId Application ID
     * @param connectionId Connection ID
     * @param orgCrossAppAccessConnectionPatchRequest
     */
  updateCrossAppAccessConnection(appId: string, connectionId: string, orgCrossAppAccessConnectionPatchRequest: OrgCrossAppAccessConnectionPatchRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApplicationCrossAppAccessConnectionsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCrossAppAccessConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  createCrossAppAccessConnection(response: ResponseContext): Promise<OrgCrossAppAccessConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCrossAppAccessConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteCrossAppAccessConnection(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllCrossAppAccessConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAllCrossAppAccessConnections(response: ResponseContext): Promise<Array<OrgCrossAppAccessConnection>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCrossAppAccessConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCrossAppAccessConnection(response: ResponseContext): Promise<OrgCrossAppAccessConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCrossAppAccessConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateCrossAppAccessConnection(response: ResponseContext): Promise<OrgCrossAppAccessConnection>;
}
