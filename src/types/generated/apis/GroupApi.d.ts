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
import { AssignRoleRequest } from '../models/AssignRoleRequest';
import { CatalogApplication } from '../models/CatalogApplication';
import { Group } from '../models/Group';
import { GroupRule } from '../models/GroupRule';
import { Role } from '../models/Role';
import { User } from '../models/User';
/**
 * no description
 */
export declare class GroupApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a specific group rule by id from your organization
     * Activate a Group Rule
     * @param ruleId
     */
  activateGroupRule(ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Add App Instance Target to App Administrator Role given to a Group
     * Assign an Application Instance Target to Application Administrator Role
     * @param groupId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Assign an Application Target to Administrator Role
     * @param groupId
     * @param roleId
     * @param appName
     */
  addApplicationTargetToAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates group targets for a group role.
     * Assign a Group Target for Group Role
     * @param groupId
     * @param roleId
     * @param targetGroupId
     */
  addGroupTargetToGroupAdministratorRoleForGroup(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds a user to a group with 'OKTA_GROUP' type.
     * Assign a User
     * @param groupId
     * @param userId
     */
  addUserToGroup(groupId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a Role to a Group
     * Assign a Role
     * @param groupId
     * @param assignRoleRequest
     * @param disableNotifications
     */
  assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds a new group with `OKTA_GROUP` type to your organization.
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
     * Deactivates a specific group rule by id from your organization
     * Deactivate a Group Rule
     * @param ruleId
     */
  deactivateGroupRule(ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Removes a group with `OKTA_GROUP` type from your organization.
     * Delete a Group
     * @param groupId
     */
  deleteGroup(groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Removes a specific group rule by id from your organization
     * Delete a group Rule
     * @param ruleId
     * @param removeUsers Indicates whether to keep or remove users from groups assigned by this rule.
     */
  deleteGroupRule(ruleId: string, removeUsers?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a group from your organization.
     * List all Group Rules
     * @param groupId
     */
  getGroup(groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a specific group rule by id from your organization
     * Retrieve a Group Rule
     * @param ruleId
     * @param expand
     */
  getGroupRule(ruleId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Retrieve a Role
     * @param groupId
     * @param roleId
     */
  getRole(groupId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
     * List all Application Targets for an Application Administrator Role
     * @param groupId
     * @param roleId
     * @param after
     * @param limit
     */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates all applications that are assigned to a group.
     * List all Assigned Applications
     * @param groupId
     * @param after Specifies the pagination cursor for the next page of apps
     * @param limit Specifies the number of app results for a page
     */
  listAssignedApplicationsForGroup(groupId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List all Assigned Roles
     * @param groupId
     * @param expand
     */
  listGroupAssignedRoles(groupId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group rules for your organization.
     * List all Group Rules
     * @param limit Specifies the number of rule results in a page
     * @param after Specifies the pagination cursor for the next page of rules
     * @param search Specifies the keyword to search fules for
     * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
     */
  listGroupRules(limit?: number, after?: string, search?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates group targets for a group role.
     * List all Group Targets for a Group Role
     * @param groupId
     * @param roleId
     * @param after
     * @param limit
     */
  listGroupTargetsForGroupRole(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates all users that are a member of a group.
     * List all Member Users
     * @param groupId
     * @param after Specifies the pagination cursor for the next page of users
     * @param limit Specifies the number of user results in a page
     */
  listGroupUsers(groupId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
     * List all Groups
     * @param q Searches the name property of groups for matching value
     * @param filter Filter expression for groups
     * @param after Specifies the pagination cursor for the next page of groups
     * @param limit Specifies the number of group results in a page
     * @param expand If specified, it causes additional metadata to be included in the response.
     * @param search Searches for groups with a supported filtering expression for all attributes except for _embedded, _links, and objectClass
     */
  listGroups(q?: string, filter?: string, after?: string, limit?: number, expand?: string, search?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Remove App Instance Target to App Administrator Role given to a Group
     * Delete an Application Instance Target to Application Administrator Role
     * @param groupId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Delete an Application Target from Application Administrator Role
     * @param groupId
     * @param roleId
     * @param appName
     */
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * remove group target for a group role.
     * Delete a Group Target for Group Role
     * @param groupId
     * @param roleId
     * @param targetGroupId
     */
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a Role from a Group
     * Delete a Role
     * @param groupId
     * @param roleId
     */
  removeRoleFromGroup(groupId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Removes a user from a group with 'OKTA_GROUP' type.
     * Unassign a User
     * @param groupId
     * @param userId
     */
  removeUserFromGroup(groupId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the profile for a group with `OKTA_GROUP` type from your organization.
     * Replace a Group
     * @param groupId
     * @param group
     */
  updateGroup(groupId: string, group: Group, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a group rule. Only `INACTIVE` rules can be updated.
     * Replace a Group Rule
     * @param ruleId
     * @param groupRule
     */
  updateGroupRule(ruleId: string, groupRule: GroupRule, _options?: Configuration): Promise<RequestContext>;
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
     * @params response Response returned by the server for a request to addApplicationInstanceTargetToAppAdminRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addApplicationTargetToAdminRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  addApplicationTargetToAdminRoleGivenToGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addGroupTargetToGroupAdministratorRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  addGroupTargetToGroupAdministratorRoleForGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addUserToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  addUserToGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignRoleToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignRoleToGroup(response: ResponseContext): Promise<Role | void>;
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
     * @params response Response returned by the server for a request to getRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRole(response: ResponseContext): Promise<Role>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationTargetsForApplicationAdministratorRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(response: ResponseContext): Promise<Array<CatalogApplication>>;
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
     * @params response Response returned by the server for a request to listGroupAssignedRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupAssignedRoles(response: ResponseContext): Promise<Array<Role>>;
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
     * @params response Response returned by the server for a request to listGroupTargetsForGroupRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupTargetsForGroupRole(response: ResponseContext): Promise<Array<Group>>;
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
     * @params response Response returned by the server for a request to removeApplicationTargetFromAdministratorRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeApplicationTargetFromAdministratorRoleGivenToGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeGroupTargetFromGroupAdministratorRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeRoleFromGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeRoleFromGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeUserFromGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeUserFromGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateGroup(response: ResponseContext): Promise<Group>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateGroupRule(response: ResponseContext): Promise<GroupRule>;
}
