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
import { AssignGroupOwnerRequestBody } from '../models/AssignGroupOwnerRequestBody';
import { GroupOwner } from '../models/GroupOwner';
/**
 * no description
 */
export declare class GroupOwnerApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Assigns a group owner
     * Assign a group owner
     * @param groupId The &#x60;id&#x60; of the group
     * @param groupOwner
     */
  assignGroupOwner(groupId: string, groupOwner: AssignGroupOwnerRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a group owner from a specific group
     * Delete a group owner
     * @param groupId The &#x60;id&#x60; of the group
     * @param ownerId The &#x60;id&#x60; of the group owner
     */
  deleteGroupOwner(groupId: string, ownerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all owners for a specific group
     * List all group owners
     * @param groupId The &#x60;id&#x60; of the group
     * @param search SCIM filter expression for group owners. Allows you to filter owners by type.
     * @param after Specifies the pagination cursor for the next page of owners
     * @param limit Specifies the number of owner results in a page
     */
  listGroupOwners(groupId: string, search?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class GroupOwnerApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignGroupOwner
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignGroupOwner(response: ResponseContext): Promise<GroupOwner>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGroupOwner
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteGroupOwner(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupOwners
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupOwners(response: ResponseContext): Promise<Array<GroupOwner>>;
}
