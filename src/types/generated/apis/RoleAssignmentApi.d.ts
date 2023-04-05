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
import { AssignRoleRequest } from '../models/AssignRoleRequest';
import { Role } from '../models/Role';
/**
 * no description
 */
export declare class RoleAssignmentApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Assigns a role to a group
     * Assign a Role to a Group
     * @param groupId
     * @param assignRoleRequest
     * @param disableNotifications Setting this to &#x60;true&#x60; grants the group third-party admin status
     */
  assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a role to a user identified by `userId`
     * Assign a Role to a User
     * @param userId
     * @param assignRoleRequest
     * @param disableNotifications Setting this to &#x60;true&#x60; grants the user third-party admin status
     */
  assignRoleToUser(userId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a role identified by `roleId` assigned to group identified by `groupId`
     * Retrieve a Role assigned to Group
     * @param groupId
     * @param roleId
     */
  getGroupAssignedRole(groupId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a role identified by `roleId` assigned to a user identified by `userId`
     * Retrieve a Role assigned to a User
     * @param userId
     * @param roleId
     */
  getUserAssignedRole(userId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all roles assigned to a user identified by `userId`
     * List all Roles assigned to a User
     * @param userId
     * @param expand
     */
  listAssignedRolesForUser(userId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all assigned roles of group identified by `groupId`
     * List all Assigned Roles of Group
     * @param groupId
     * @param expand
     */
  listGroupAssignedRoles(groupId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a role identified by `roleId` assigned to group identified by `groupId`
     * Unassign a Role from a Group
     * @param groupId
     * @param roleId
     */
  unassignRoleFromGroup(groupId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a role identified by `roleId` from a user identified by `userId`
     * Unassign a Role from a User
     * @param userId
     * @param roleId
     */
  unassignRoleFromUser(userId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class RoleAssignmentApiResponseProcessor {
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
     * @params response Response returned by the server for a request to assignRoleToUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignRoleToUser(response: ResponseContext): Promise<Role>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGroupAssignedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  getGroupAssignedRole(response: ResponseContext): Promise<Role>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserAssignedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserAssignedRole(response: ResponseContext): Promise<Role>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAssignedRolesForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAssignedRolesForUser(response: ResponseContext): Promise<Array<Role>>;
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
     * @params response Response returned by the server for a request to unassignRoleFromGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignRoleFromGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignRoleFromUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignRoleFromUser(response: ResponseContext): Promise<void>;
}
