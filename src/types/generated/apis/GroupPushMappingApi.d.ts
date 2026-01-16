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
import { CreateGroupPushMappingRequest } from '../models/CreateGroupPushMappingRequest';
import { GroupPushMapping } from '../models/GroupPushMapping';
import { GroupPushMappingStatus } from '../models/GroupPushMappingStatus';
import { UpdateGroupPushMappingRequest } from '../models/UpdateGroupPushMappingRequest';
/**
 * no description
 */
export declare class GroupPushMappingApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates or links a group push mapping.  **Note:** Either `targetGroupId` or `targetGroupName` must be provided, but not both. If `targetGroupId` is provided, it links to an existing group. If `targetGroupName` is provided, it creates a new group.
     * Create a group push mapping
     * @param appId Application ID
     * @param body
     */
  createGroupPushMapping(appId: string, body: CreateGroupPushMappingRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a specific group push mapping. The group push mapping must be in an `INACTIVE` state.
     * Delete a group push mapping
     * @param appId Application ID
     * @param mappingId Group push mapping ID
     * @param deleteTargetGroup If set to &#x60;true&#x60;, the target group is also deleted. If set to &#x60;false&#x60;, the target group isn\&#39;t deleted.
     */
  deleteGroupPushMapping(appId: string, mappingId: string, deleteTargetGroup: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a group push mapping by ID
     * Retrieve a group push mapping
     * @param appId Application ID
     * @param mappingId Group push mapping ID
     */
  getGroupPushMapping(appId: string, mappingId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group push mappings with pagination support
     * List all group push mappings
     * @param appId Application ID
     * @param after Specifies the pagination cursor for the next page of mappings
     * @param limit Specifies the number of results returned
     * @param lastUpdated Filters group push mappings by last updated date. The &#x60;lastUpdated&#x60; parameter supports the following format: &#x60;YYYY-MM-DDTHH:mm:ssZ&#x60;. This filters mappings updated on or after the specified date and time in UTC.  If you don\&#39;t specify a value, all group push mappings are returned.
     * @param sourceGroupId Filters group push mappings by source group ID. If you don\&#39;t specify a value, all group push mappings are returned.
     * @param status Filters group push mappings by status. If you don\&#39;t specify a value, all group push mappings are returned.
     */
  listGroupPushMappings(appId: string, after?: string, limit?: number, lastUpdated?: string, sourceGroupId?: string, status?: GroupPushMappingStatus, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the status of a group push mapping
     * Update a group push mapping
     * @param appId Application ID
     * @param mappingId Group push mapping ID
     * @param body
     */
  updateGroupPushMapping(appId: string, mappingId: string, body: UpdateGroupPushMappingRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class GroupPushMappingApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGroupPushMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  createGroupPushMapping(response: ResponseContext): Promise<GroupPushMapping>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGroupPushMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteGroupPushMapping(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGroupPushMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  getGroupPushMapping(response: ResponseContext): Promise<GroupPushMapping>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupPushMappings
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupPushMappings(response: ResponseContext): Promise<Array<GroupPushMapping>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGroupPushMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateGroupPushMapping(response: ResponseContext): Promise<GroupPushMapping>;
}
