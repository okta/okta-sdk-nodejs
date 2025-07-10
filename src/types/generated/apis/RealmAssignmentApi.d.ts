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
import { CreateRealmAssignmentRequest } from '../models/CreateRealmAssignmentRequest';
import { OperationRequest } from '../models/OperationRequest';
import { OperationResponse } from '../models/OperationResponse';
import { RealmAssignment } from '../models/RealmAssignment';
import { UpdateRealmAssignmentRequest } from '../models/UpdateRealmAssignmentRequest';
/**
 * no description
 */
export declare class RealmAssignmentApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a realm assignment
     * Activate a realm assignment
     * @param assignmentId ID of the realm assignment
     */
  activateRealmAssignment(assignmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new realm assignment
     * Create a realm assignment
     * @param body
     */
  createRealmAssignment(body: CreateRealmAssignmentRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a realm assignment
     * Deactivate a realm assignment
     * @param assignmentId ID of the realm assignment
     */
  deactivateRealmAssignment(assignmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a realm assignment
     * Delete a realm assignment
     * @param assignmentId ID of the realm assignment
     */
  deleteRealmAssignment(assignmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Executes a realm assignment
     * Execute a realm assignment
     * @param body
     */
  executeRealmAssignment(body: OperationRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a realm assignment
     * Retrieve a realm assignment
     * @param assignmentId ID of the realm assignment
     */
  getRealmAssignment(assignmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all realm assignment operations. The upper limit is 200 and operations are sorted in descending order from most recent to oldest by ID.
     * List all realm assignment operations
     * @param limit A limit on the number of objects to return
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     */
  listRealmAssignmentOperations(limit?: number, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all realm assignments
     * List all realm assignments
     * @param limit A limit on the number of objects to return
     * @param after The cursor used for pagination. It represents the priority of the last realm assignment returned in the previous fetch operation.
     */
  listRealmAssignments(limit?: number, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a realm assignment
     * Replace a realm assignment
     * @param assignmentId ID of the realm assignment
     * @param body
     */
  replaceRealmAssignment(assignmentId: string, body: UpdateRealmAssignmentRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RealmAssignmentApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateRealmAssignment
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateRealmAssignment(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRealmAssignment
     * @throws ApiException if the response code was not in [200, 299]
     */
  createRealmAssignment(response: ResponseContext): Promise<RealmAssignment>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateRealmAssignment
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateRealmAssignment(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRealmAssignment
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteRealmAssignment(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to executeRealmAssignment
     * @throws ApiException if the response code was not in [200, 299]
     */
  executeRealmAssignment(response: ResponseContext): Promise<OperationResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRealmAssignment
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRealmAssignment(response: ResponseContext): Promise<RealmAssignment>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRealmAssignmentOperations
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRealmAssignmentOperations(response: ResponseContext): Promise<Array<OperationResponse>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRealmAssignments
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRealmAssignments(response: ResponseContext): Promise<Array<RealmAssignment>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceRealmAssignment
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceRealmAssignment(response: ResponseContext): Promise<RealmAssignment>;
}
