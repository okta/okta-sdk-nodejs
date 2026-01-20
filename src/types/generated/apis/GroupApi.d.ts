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
import { AssignGroupOwnerRequestBody } from '../models/AssignGroupOwnerRequestBody';
import { CreateGroupRequest } from '../models/CreateGroupRequest';
import { CreateGroupRuleRequest } from '../models/CreateGroupRuleRequest';
import { Group } from '../models/Group';
import { GroupOwner } from '../models/GroupOwner';
import { GroupRule } from '../models/GroupRule';
import { User } from '../models/User';
/**
 * no description
 */
export declare class GroupApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a specific group rule by ID from your org
     * Activate a group rule
     * @param ruleId The &#x60;id&#x60; of the group rule
     */
  activateGroupRule(ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a group owner
     * Assign a group owner
     * @param groupId The &#x60;id&#x60; of the group
     * @param groupOwner
     */
  assignGroupOwner(groupId: string, groupOwner: AssignGroupOwnerRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a user to a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
     * Assign a user to a group
     * @param groupId The &#x60;id&#x60; of the group
     * @param userId ID of an existing Okta user
     */
  assignUserToGroup(groupId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds a new group with the `OKTA_GROUP` type to your org. > **Note:** App import operations are responsible for syncing groups with `APP_GROUP` type such as Active Directory groups. See [About groups](https://help.okta.com/okta_help.htm?id=Directory_Groups) in the help documentation.
     * Add a group
     * @param group
     */
  createGroup(group: CreateGroupRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a group rule to dynamically add users to the specified group if they match the condition. > **Note:** Group rules are created with the status set to `\'INACTIVE\'`.
     * Create a group rule
     * @param groupRule
     */
  createGroupRule(groupRule: CreateGroupRuleRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a specific group rule by ID from your org
     * Deactivate a group rule
     * @param ruleId The &#x60;id&#x60; of the group rule
     */
  deactivateGroupRule(ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a group of the `OKTA_GROUP` or `APP_GROUP` type from your org. > **Note:** You can\'t remove groups of type `APP_GROUP` if they are used in a group push mapping.
     * Delete a group
     * @param groupId The &#x60;id&#x60; of the group
     */
  deleteGroup(groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a group owner from a specific group
     * Delete a group owner
     * @param groupId The &#x60;id&#x60; of the group
     * @param ownerId The &#x60;id&#x60; of the group owner
     */
  deleteGroupOwner(groupId: string, ownerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a specific group rule by `groupRuleId`
     * Delete a group rule
     * @param ruleId The &#x60;id&#x60; of the group rule
     * @param removeUsers If set to &#x60;true&#x60;, removes users from groups assigned by this rule
     */
  deleteGroupRule(ruleId: string, removeUsers?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific group by `id` from your org
     * Retrieve a group
     * @param groupId The &#x60;id&#x60; of the group
     */
  getGroup(groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific group rule by ID from your org
     * Retrieve a group rule
     * @param ruleId The &#x60;id&#x60; of the group rule
     * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
     */
  getGroupRule(ruleId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all apps that are assigned to a group. See [Application Groups API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationGroups/).
     * List all assigned apps
     * @param groupId The &#x60;id&#x60; of the group
     * @param after Specifies the pagination cursor for the next page of apps
     * @param limit Specifies the number of app results for a page
     */
  listAssignedApplicationsForGroup(groupId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all owners for a specific group
     * List all group owners
     * @param groupId The &#x60;id&#x60; of the group
     * @param search SCIM filter expression for group owners. Allows you to filter owners by type.
     * @param after Specifies the pagination cursor for the next page of owners
     * @param limit Specifies the number of owner results in a page
     */
  listGroupOwners(groupId: string, search?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group rules for your org
     * List all group rules
     * @param limit Specifies the number of rule results in a page
     * @param after Specifies the pagination cursor for the next page of rules
     * @param search Specifies the keyword to search rules for
     * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then displays group names
     */
  listGroupRules(limit?: number, after?: string, search?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all users that are a member of a group. The default user limit is set to a very high number due to historical reasons that are no longer valid for most orgs. This will change in a future version of this API. The recommended page limit is now `limit=200`.
     * List all member users
     * @param groupId The &#x60;id&#x60; of the group
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit Specifies the number of user results in a page
     */
  listGroupUsers(groupId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all groups with pagination support.  > **Note:** To list all groups belonging to a member, use the [List all groups endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserGroups).  The number of groups returned depends on the specified [`limit`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!in=query&path=limit&t=request), if you have a search, filter, and/or query parameter set, and if that parameter is not null. We recommend using a limit less than or equal to 200.  A subset of groups can be returned that match a supported filter expression, query, or search criteria.  > **Note:** The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.
     * List all groups
     * @param search Searches for groups with a supported [filtering](https://developer.okta.com/docs/api/#filter) expression for all properties except for &#x60;_embedded&#x60;, &#x60;_links&#x60;, and &#x60;objectClass&#x60;. Okta recommends this query parameter because it provides the largest range of search options and optimal performance.  This operation supports [pagination](https://developer.okta.com/docs/api/#pagination).  Using search requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding), for example, &#x60;search&#x3D;type eq \&quot;OKTA_GROUP\&quot;&#x60; is encoded as &#x60;search&#x3D;type+eq+%22OKTA_GROUP%22&#x60;.  This operation searches many properties:  * Any group profile attribute, including imported app group profile attributes. * The top-level properties: &#x60;id&#x60;, &#x60;created&#x60;, &#x60;lastMembershipUpdated&#x60;, &#x60;lastUpdated&#x60;, and &#x60;type&#x60;. * The [source](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!c&#x3D;200&amp;path&#x3D;_links/source&amp;t&#x3D;response) of groups with type of &#x60;APP_GROUP&#x60;, accessed as &#x60;source.id&#x60;.  You can also use the &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters.  Searches for groups can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. You can only use &#x60;co&#x60; with these select profile attributes: &#x60;profile.name&#x60; and &#x60;profile.description&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
     * @param filter Filter expression for groups. See [Filter](https://developer.okta.com/docs/api/#filter).  Filtering supports the following limited number of properties: &#x60;id&#x60;, &#x60;type&#x60;, &#x60;lastUpdated&#x60;, and &#x60;lastMembershipUpdated&#x60;.  &gt; **Note:** All filters must be [URL encoded](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;filter&#x3D;lastUpdated gt \&quot;2013-06-01T00:00:00.000Z\&quot;&#x60; is encoded as &#x60;filter&#x3D;lastUpdated%20gt%20%222013-06-01T00:00:00.000Z%22&#x60;.  See [Special characters](https://developer.okta.com/docs/api/#special-characters).
     * @param q Finds a group that matches the &#x60;name&#x60; property. &gt; **Note:** Paging and searching are currently mutually exclusive. You can\&#39;t page a query. The default limit for a query is 300 results. Query is intended for an auto-complete picker use case where users refine their search string to constrain the results.
     * @param after Specifies the pagination cursor for the next page of groups. The &#x60;after&#x60; cursor should be treated as an opaque value and obtained through the next link relation. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit Specifies the number of group results in a page.  Okta recommends using a specific value other than the default or maximum. If your request times out, retry your request with a smaller &#x60;limit&#x60; and [page the results](https://developer.okta.com/docs/api/#pagination).  The Okta default &#x60;Everyone&#x60; group isn\&#39;t returned for users with a group admin role.
     * @param expand If specified, additional metadata is included in the response. Possible values are &#x60;stats&#x60; and &#x60;app&#x60;. This additional metadata is listed in the [&#x60;_embedded&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/addGroup!c&#x3D;200&amp;path&#x3D;_embedded&amp;t&#x3D;response) property of the response.  &gt; **Note:** You can use the &#x60;stats&#x60; value to return the number of users within a group. This is listed as the &#x60;_embedded.stats.usersCount&#x60; value in the response. See this [Knowledge Base article](https://support.okta.com/help/s/article/Is-there-an-API-that-returns-the-number-of-users-in-a-group?language&#x3D;en_US) for more information and an example.
     * @param sortBy Specifies the field to sort by (for search queries only). &#x60;sortBy&#x60; can be any single property, for example &#x60;sortBy&#x3D;profile.name&#x60;. Groups with the same value for the &#x60;sortBy&#x60; property are ordered by &#x60;id&#x60;\&#39;. Use with &#x60;sortOrder&#x60; to control the order of results.
     * @param sortOrder Specifies sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
     */
  listGroups(search?: string, filter?: string, q?: string, after?: string, limit?: number, expand?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the profile for a group of `OKTA_GROUP` type from your org. > **Note :** You only can modify profiles for groups of the `OKTA_GROUP` type. > > App imports are responsible for updating profiles for groups of the `APP_GROUP` type, such as Active Directory groups.
     * Replace a group
     * @param groupId The &#x60;id&#x60; of the group
     * @param group
     */
  replaceGroup(groupId: string, group: CreateGroupRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a group rule > **Notes:** You can only update rules with a group whose status is set to `INACTIVE`. > > You currently can\'t update the `actions` section.
     * Replace a group rule
     * @param ruleId The &#x60;id&#x60; of the group rule
     * @param groupRule
     */
  replaceGroupRule(ruleId: string, groupRule: GroupRule, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a user from a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. > > App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
     * Unassign a user from a group
     * @param groupId The &#x60;id&#x60; of the group
     * @param userId ID of an existing Okta user
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
