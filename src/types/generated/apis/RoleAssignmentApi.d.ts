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
import { AssignRoleToGroupRequest } from '../models/AssignRoleToGroupRequest';
import { AssignRoleToUser201Response } from '../models/AssignRoleToUser201Response';
import { AssignRoleToUserRequest } from '../models/AssignRoleToUserRequest';
import { ListGroupAssignedRoles200ResponseInner } from '../models/ListGroupAssignedRoles200ResponseInner';
import { RoleAssignedUsers } from '../models/RoleAssignedUsers';
import { RoleGovernance } from '../models/RoleGovernance';
import { RoleGovernanceResources } from '../models/RoleGovernanceResources';
import { RoleGovernanceSource } from '../models/RoleGovernanceSource';
/**
 * no description
 */
export declare class RoleAssignmentApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Assigns a [standard role](/openapi/okta-management/guides/roles/#standard-roles) to a client app.  You can also assign a custom role to a client app, but the preferred method to assign a custom role to a client is to create a binding between the custom role, the resource set, and the client app. See [Create a role resource set binding](/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
     * Assign a client role
     * @param clientId Client app ID
     * @param assignRoleRequest
     */
  assignRoleToClient(clientId: string, assignRoleRequest: AssignRoleToGroupRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a [standard role](/openapi/okta-management/guides/roles/#standard-roles) to a group.  You can also assign a custom role to a group, but the preferred method to assign a custom role to a group is to create a binding between the custom role, the resource set, and the group. See [Create a role resource set binding](/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
     * Assign a role to a group
     * @param groupId The &#x60;id&#x60; of the group
     * @param assignRoleRequest
     * @param disableNotifications Grants the group third-party admin status when set to &#x60;true&#x60;
     */
  assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleToGroupRequest, disableNotifications?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a [standard role](/openapi/okta-management/guides/roles/#standard-roles) to a user.  You can also assign a custom role to a user, but the preferred method to assign a custom role to a user is to create a binding between the custom role, the resource set, and the user. See [Create a role resource set binding](/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
     * Assign a user role
     * @param userId ID of an existing Okta user
     * @param assignRoleRequest
     * @param disableNotifications Setting this to &#x60;true&#x60; grants the user third-party admin status
     */
  assignRoleToUser(userId: string, assignRoleRequest: AssignRoleToUserRequest, disableNotifications?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a role assignment (identified by `roleAssignmentId`) from a client app (identified by `clientId`)
     * Unassign a client role
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     */
  deleteRoleFromClient(clientId: string, roleAssignmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a role assigned to a group (identified by the `groupId`). The `roleAssignmentId` is the unique identifier for either a standard role group assignment object or a custom role resource set binding object.
     * Retrieve a group role assignment
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     */
  getGroupAssignedRole(groupId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
     * Retrieve a user role governance source
     * @param userId ID of an existing Okta user
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param grantId Grant ID
     */
  getRoleAssignmentGovernanceGrant(userId: string, roleAssignmentId: string, grantId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the resources of a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
     * Retrieve the user role governance source resources
     * @param userId ID of an existing Okta user
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param grantId Grant ID
     */
  getRoleAssignmentGovernanceGrantResources(userId: string, roleAssignmentId: string, grantId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a role assigned to a user (identified by `userId`). The `roleAssignmentId` parameter is the unique identifier for either a standard role assignment object or a custom role resource set binding object.
     * Retrieve a user role assignment
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     */
  getUserAssignedRole(userId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the governance sources of a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
     * Retrieve all user role governance sources
     * @param userId ID of an existing Okta user
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     */
  getUserAssignedRoleGovernance(userId: string, roleAssignmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all roles assigned to a user (identified by `userId`)
     * List all user role assignments
     * @param userId ID of an existing Okta user
     * @param expand An optional parameter used to return targets configured for the standard role assignment in the &#x60;embedded&#x60; property. Supported values: &#x60;targets/groups&#x60; or &#x60;targets/catalog/apps&#x60;
     */
  listAssignedRolesForUser(userId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all assigned roles of a group by `groupId`
     * List all group role assignments
     * @param groupId The &#x60;id&#x60; of the group
     * @param expand An optional parameter used to return targets configured for the standard role assignment in the &#x60;embedded&#x60; property. Supported values: &#x60;targets/groups&#x60; or &#x60;targets/catalog/apps&#x60;
     */
  listGroupAssignedRoles(groupId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all roles assigned to a client app identified by `clientId`
     * List all client role assignments
     * @param clientId Client app ID
     */
  listRolesForClient(clientId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all users with role assignments
     * List all users with role assignments
     * @param after Specifies the pagination cursor for the next page of targets
     * @param limit Specifies the number of results returned. Defaults to &#x60;100&#x60;.
     */
  listUsersWithRoleAssignments(after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a role assignment (identified by `roleAssignmentId`) for a client app (identified by `clientId`)
     * Retrieve a client role
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     */
  retrieveClientRole(clientId: string, roleAssignmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a role assignment (identified by `roleAssignmentId`) from a group (identified by the `groupId`)
     * Unassign a group role
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     */
  unassignRoleFromGroup(groupId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a role assignment (identified by `roleAssignmentId`) from a user (identified by `userId`)
     * Unassign a user role
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     */
  unassignRoleFromUser(userId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class RoleAssignmentApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignRoleToClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignRoleToClient(response: ResponseContext): Promise<ListGroupAssignedRoles200ResponseInner>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignRoleToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignRoleToGroup(response: ResponseContext): Promise<ListGroupAssignedRoles200ResponseInner | void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignRoleToUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignRoleToUser(response: ResponseContext): Promise<AssignRoleToUser201Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRoleFromClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteRoleFromClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGroupAssignedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  getGroupAssignedRole(response: ResponseContext): Promise<ListGroupAssignedRoles200ResponseInner>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoleAssignmentGovernanceGrant
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRoleAssignmentGovernanceGrant(response: ResponseContext): Promise<RoleGovernanceSource>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoleAssignmentGovernanceGrantResources
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRoleAssignmentGovernanceGrantResources(response: ResponseContext): Promise<RoleGovernanceResources>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserAssignedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserAssignedRole(response: ResponseContext): Promise<ListGroupAssignedRoles200ResponseInner>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserAssignedRoleGovernance
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserAssignedRoleGovernance(response: ResponseContext): Promise<RoleGovernance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAssignedRolesForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAssignedRolesForUser(response: ResponseContext): Promise<Array<ListGroupAssignedRoles200ResponseInner>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupAssignedRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupAssignedRoles(response: ResponseContext): Promise<Array<ListGroupAssignedRoles200ResponseInner>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRolesForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRolesForClient(response: ResponseContext): Promise<Array<ListGroupAssignedRoles200ResponseInner>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUsersWithRoleAssignments
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUsersWithRoleAssignments(response: ResponseContext): Promise<RoleAssignedUsers>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveClientRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  retrieveClientRole(response: ResponseContext): Promise<ListGroupAssignedRoles200ResponseInner>;
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
