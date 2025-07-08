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
import { UpdateGroupPushMappingRequest } from '../models/UpdateGroupPushMappingRequest';
/**
 * no description
 */
export declare class GroupPushMappingApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates or links a group push mapping
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
     * @param search Searches for group push mappings with a supported [filtering](https://developer.okta.com/docs/api/#filter) expression for all properties except for &#x60;_links&#x60;. This operation supports [pagination](https://developer.okta.com/docs/api/#pagination).  Using search requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding), for example, &#x60;search&#x3D;status eq \&quot;ACTIVE\&quot;&#x60; is encoded as &#x60;search&#x3D;status+eq+%22ACTIVE%22&#x60;. See [Special characters](https://developer.okta.com/docs/api/#special-characters).   You can also use the &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters.  Searches for group push mappings can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
     * @param sortBy Specifies field to sort by **(for search queries only)**. &#x60;sortBy&#x60; can be any single property.
     * @param sortOrder Specifies sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present. Group push mappings with the same value for the &#x60;sortBy&#x60; property are ordered by &#x60;id&#x60;.
     */
  listGroupPushMappings(appId: string, after?: string, limit?: number, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext>;
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
