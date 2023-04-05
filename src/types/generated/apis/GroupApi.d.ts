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
import { Application } from '../models/Application';
import { Group } from '../models/Group';
import { GroupOwner } from '../models/GroupOwner';
import { GroupRule } from '../models/GroupRule';
import { User } from '../models/User';
/**
 * no description
 */
export declare class GroupApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a specific group rule by `ruleId`
     * Activate a Group Rule
     * @param ruleId
     */
  activateGroupRule(ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a group owner
     * Assign a Group Owner
     * @param groupId
     * @param GroupOwner
     */
  assignGroupOwner(groupId: string, GroupOwner: GroupOwner, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a user to a group with 'OKTA_GROUP' type
     * Assign a User
     * @param groupId
     * @param userId
     */
  assignUserToGroup(groupId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new group with `OKTA_GROUP` type
     * Create a Group
     * @param group
     */
  createGroup(group: Group, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a group rule to dynamically add users to the specified group if they match the condition
     * Create a Group Rule
     * @param groupRule
     */
  createGroupRule(groupRule: GroupRule, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a specific group rule by `ruleId`
     * Deactivate a Group Rule
     * @param ruleId
     */
  deactivateGroupRule(ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a group with `OKTA_GROUP` type
     * Delete a Group
     * @param groupId
     */
  deleteGroup(groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a group owner from a specific group
     * Delete a Group Owner
     * @param groupId
     * @param ownerId
     */
  deleteGroupOwner(groupId: string, ownerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a specific group rule by `ruleId`
     * Delete a group Rule
     * @param ruleId
     * @param removeUsers Indicates whether to keep or remove users from groups assigned by this rule.
     */
  deleteGroupRule(ruleId: string, removeUsers?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a group by `groupId`
     * Retrieve a Group
     * @param groupId
     */
  getGroup(groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific group rule by `ruleId`
     * Retrieve a Group Rule
     * @param ruleId
     * @param expand
     */
  getGroupRule(ruleId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all applications that are assigned to a group
     * List all Assigned Applications
     * @param groupId
     * @param after Specifies the pagination cursor for the next page of apps
     * @param limit Specifies the number of app results for a page
     */
  listAssignedApplicationsForGroup(groupId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all owners for a specific group
     * List all Group Owners
     * @param groupId
     * @param filter SCIM Filter expression for group owners. Allows to filter owners by type.
     * @param after Specifies the pagination cursor for the next page of owners
     * @param limit Specifies the number of owner results in a page
     */
  listGroupOwners(groupId: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group rules
     * List all Group Rules
     * @param limit Specifies the number of rule results in a page
     * @param after Specifies the pagination cursor for the next page of rules
     * @param search Specifies the keyword to search fules for
     * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
     */
  listGroupRules(limit?: number, after?: string, search?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all users that are a member of a group
     * List all Member Users
     * @param groupId
     * @param after Specifies the pagination cursor for the next page of users
     * @param limit Specifies the number of user results in a page
     */
  listGroupUsers(groupId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all groups with pagination support. A subset of groups can be returned that match a supported filter expression or query.
     * List all Groups
     * @param q Searches the name property of groups for matching value
     * @param filter Filter expression for groups
     * @param after Specifies the pagination cursor for the next page of groups
     * @param limit Specifies the number of group results in a page
     * @param expand If specified, it causes additional metadata to be included in the response.
     * @param search Searches for groups with a supported filtering expression for all attributes except for _embedded, _links, and objectClass
     * @param sortBy Specifies field to sort by and can be any single property (for search queries only).
     * @param sortOrder Specifies sort order &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; is not present. Groups with the same value for the &#x60;sortBy&#x60; parameter are ordered by &#x60;id&#x60;.
     */
  listGroups(q?: string, filter?: string, after?: string, limit?: number, expand?: string, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the profile for a group with `OKTA_GROUP` type
     * Replace a Group
     * @param groupId
     * @param group
     */
  replaceGroup(groupId: string, group: Group, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a group rule. Only `INACTIVE` rules can be updated.
     * Replace a Group Rule
     * @param ruleId
     * @param groupRule
     */
  replaceGroupRule(ruleId: string, groupRule: GroupRule, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a user from a group with 'OKTA_GROUP' type
     * Unassign a User
     * @param groupId
     * @param userId
     */
  unassignUserFromGroup(groupId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class GroupApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateGroupRule(response: ResponseContext): Promise<void>;
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
     * @params response Response returned by the server for a request to assignUserToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignUserToGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  createGroup(response: ResponseContext): Promise<Group>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  createGroupRule(response: ResponseContext): Promise<GroupRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateGroupRule(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteGroup(response: ResponseContext): Promise<void>;
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
     * @params response Response returned by the server for a request to deleteGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteGroupRule(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  getGroup(response: ResponseContext): Promise<Group>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  getGroupRule(response: ResponseContext): Promise<GroupRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAssignedApplicationsForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAssignedApplicationsForGroup(response: ResponseContext): Promise<Array<Application>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupOwners
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupOwners(response: ResponseContext): Promise<Array<GroupOwner>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupRules
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupRules(response: ResponseContext): Promise<Array<GroupRule>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupUsers(response: ResponseContext): Promise<Array<User>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroups(response: ResponseContext): Promise<Array<Group>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceGroup(response: ResponseContext): Promise<Group>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceGroupRule(response: ResponseContext): Promise<GroupRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignUserFromGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignUserFromGroup(response: ResponseContext): Promise<void>;
}
