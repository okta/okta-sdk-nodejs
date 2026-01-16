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
import { CatalogApplication } from '../models/CatalogApplication';
import { Group } from '../models/Group';
import { RoleTarget } from '../models/RoleTarget';
/**
 * no description
 */
export declare class RoleTargetApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Assigns all apps as target to an `APP_ADMIN` role
     * Assign all apps as target to admin role
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     */
  assignAllAppsAsTargetToRoleForUser(userId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an app instance target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
     * Assign a group role app instance target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param applicationId Application ID
     */
  assignAppInstanceTargetToAppAdminRoleForGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an app instance target to an `APP_ADMIN` role assignment to an admin user. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permission to the same OIN app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
     * Assign an admin role app instance target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param applicationId Application ID
     */
  assignAppInstanceTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an app instance target to an `APP_ADMIN` role assignment to a client. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage only specific configurations of the Salesforce app.
     * Assign a client role app instance target
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param appId Application ID
     */
  assignAppTargetInstanceRoleForClient(clientId: string, roleAssignmentId: string, appName: string, appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an OIN app target for an `APP_ADMIN` role assignment to a client. When you assign an app target from the OIN catalog, you reduce the scope of the role assignment. The role assignment applies to only app instances that are included in the specified OIN app target.  An assigned OIN app target overrides any existing app instance targets. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the administrator for all Facebook instances.
     * Assign a client role app target
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  assignAppTargetRoleToClient(clientId: string, roleAssignmentId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an OIN app target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target. An OIN app target that\'s assigned to the role overrides any existing instance targets of the OIN app. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app with `facebook` for `appName` makes that user the administrator for all Facebook instances.
     * Assign a group role app target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  assignAppTargetToAdminRoleForGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an OIN app target for an `APP_ADMIN` role assignment to an admin user. When you assign the first app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  Assigning an OIN app target overrides any existing app instance targets of the OIN app. For example, if a user was assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the admin for all Facebook instances.
     * Assign an admin role app target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  assignAppTargetToAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets, but applies only to the specified target.
     * Assign a client role group target
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param groupId The &#x60;id&#x60; of the group
     */
  assignGroupTargetRoleForClient(clientId: string, roleAssignmentId: string, groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
     * Assign a group role group target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param targetGroupId
     */
  assignGroupTargetToGroupAdminRole(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a group target for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
     * Assign an admin role group target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param groupId The &#x60;id&#x60; of the group
     */
  assignGroupTargetToUserRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves all role targets for an `APP_ADMIN`, `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user by user or group assignment type. If the role isn\'t scoped to specific group targets or any app targets, an empty array `[]` is returned.
     * Retrieve a role target by assignment type
     * @param userId ID of an existing Okta user
     * @param roleIdOrEncodedRoleId The &#x60;id&#x60; of the role or Base32 encoded &#x60;id&#x60; of the role name
     * @param assignmentType Specifies the assignment type of the user
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  getRoleTargetsByUserIdAndRoleId(userId: string, roleIdOrEncodedRoleId: string, assignmentType?: 'USER' | 'GROUP', after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all OIN app targets for an `APP_ADMIN` role that\'s assigned to a client (by `clientId`).
     * List all client role app targets
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listAppTargetRoleToClient(clientId: string, roleAssignmentId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all app targets for an `APP_ADMIN` role assignment to a group. The response includes a list of OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app doesn\'t.
     * List all group role app targets
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all app targets for an `APP_ADMIN` role assigned to a user. The response is a list that includes OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app payload doesn\'t.
     * List all admin role app targets
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
     * List all client role group targets
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listGroupTargetRoleForClient(clientId: string, roleAssignmentId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
     * List all group role group targets
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listGroupTargetsForGroupRole(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group targets for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. If the role isn\'t scoped to specific group targets, an empty array `[]` is returned.
     * List all admin role group targets
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listGroupTargetsForRole(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an app instance target from a role assignment to a client app  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all the apps, delete the role assignment with the instance target and create another one.  See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
     * Unassign a client role app instance target
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param appId Application ID
     */
  removeAppTargetInstanceRoleForClient(clientId: string, roleAssignmentId: string, appName: string, appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an OIN app target for a role assignment to a client app  > **Note:** You can\'t remove the last OIN app target from a role assignment. > If you need a role assignment that applies to all apps, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
     * Unassign a client role app target
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  removeAppTargetRoleFromClient(clientId: string, roleAssignmentId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a Group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app.  > **Note:** You can\'t remove the last group target from a role assignment. If you need a role assignment that applies to all groups, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
     * Unassign a client role group target
     * @param clientId Client app ID
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param groupId The &#x60;id&#x60; of the group
     */
  removeGroupTargetRoleFromClient(clientId: string, roleAssignmentId: string, groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an app instance target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last app instance target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment and recreate a new one.
     * Unassign an admin role app instance target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param applicationId Application ID
     */
  unassignAppInstanceTargetFromAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an app instance target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
     * Unassign a group role app instance target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param applicationId Application ID
     */
  unassignAppInstanceTargetToAppAdminRoleForGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an OIN app target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last OIN app target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment to the user and recreate a new one.
     * Unassign an admin role app target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  unassignAppTargetFromAppAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an OIN app target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
     * Unassign a group role app target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  unassignAppTargetToAdminRoleForGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a group target from a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group.
     * Unassign a group role group target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param targetGroupId
     */
  unassignGroupTargetFromGroupAdminRole(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last group target from a role assignment since this causes an exception. > If you need a role assignment that applies to all groups, delete the role assignment to the user and recreate a new one.
     * Unassign an admin role group target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param groupId The &#x60;id&#x60; of the group
     */
  unassignGroupTargetFromUserAdminRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class RoleTargetApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAllAppsAsTargetToRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignAllAppsAsTargetToRoleForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppInstanceTargetToAppAdminRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignAppInstanceTargetToAppAdminRoleForGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppInstanceTargetToAppAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignAppInstanceTargetToAppAdminRoleForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppTargetInstanceRoleForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignAppTargetInstanceRoleForClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppTargetRoleToClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignAppTargetRoleToClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppTargetToAdminRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignAppTargetToAdminRoleForGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppTargetToAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignAppTargetToAdminRoleForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignGroupTargetRoleForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignGroupTargetRoleForClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignGroupTargetToGroupAdminRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignGroupTargetToGroupAdminRole(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignGroupTargetToUserRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignGroupTargetToUserRole(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoleTargetsByUserIdAndRoleId
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRoleTargetsByUserIdAndRoleId(response: ResponseContext): Promise<Array<RoleTarget>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppTargetRoleToClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAppTargetRoleToClient(response: ResponseContext): Promise<Array<CatalogApplication>>;
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
     * @params response Response returned by the server for a request to listApplicationTargetsForApplicationAdministratorRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApplicationTargetsForApplicationAdministratorRoleForUser(response: ResponseContext): Promise<Array<CatalogApplication>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupTargetRoleForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupTargetRoleForClient(response: ResponseContext): Promise<Array<Group>>;
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
     * @params response Response returned by the server for a request to listGroupTargetsForRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupTargetsForRole(response: ResponseContext): Promise<Array<Group>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeAppTargetInstanceRoleForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeAppTargetInstanceRoleForClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeAppTargetRoleFromClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeAppTargetRoleFromClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeGroupTargetRoleFromClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeGroupTargetRoleFromClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignAppInstanceTargetFromAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignAppInstanceTargetFromAdminRoleForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignAppInstanceTargetToAppAdminRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignAppInstanceTargetToAppAdminRoleForGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignAppTargetFromAppAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignAppTargetFromAppAdminRoleForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignAppTargetToAdminRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignAppTargetToAdminRoleForGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignGroupTargetFromGroupAdminRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignGroupTargetFromGroupAdminRole(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignGroupTargetFromUserAdminRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignGroupTargetFromUserAdminRole(response: ResponseContext): Promise<void>;
}
