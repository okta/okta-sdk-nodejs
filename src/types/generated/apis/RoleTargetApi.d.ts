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
/**
 * no description
 */
export declare class RoleTargetApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Assigns all Apps as Target to Role
     * Assign all Apps as Target to Role
     * @param userId
     * @param roleId
     */
  assignAllAppsAsTargetToRoleForUser(userId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns App Instance Target to App Administrator Role given to a Group
     * Assign an Application Instance Target to Application Administrator Role
     * @param groupId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  assignAppInstanceTargetToAppAdminRoleForGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns anapplication instance target to appplication administrator role
     * Assign an Application Instance Target to an Application Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  assignAppInstanceTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an application target to administrator role
     * Assign an Application Target to Administrator Role
     * @param groupId
     * @param roleId
     * @param appName
     */
  assignAppTargetToAdminRoleForGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an application target to administrator role
     * Assign an Application Target to Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     */
  assignAppTargetToAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a group target to a group role
     * Assign a Group Target to a Group Role
     * @param groupId
     * @param roleId
     * @param targetGroupId
     */
  assignGroupTargetToGroupAdminRole(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a Group Target to Role
     * Assign a Group Target to Role
     * @param userId
     * @param roleId
     * @param groupId
     */
  assignGroupTargetToUserRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Promise<RequestContext>;
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
     * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
     * List all Application Targets for Application Administrator Role
     * @param userId
     * @param roleId
     * @param after
     * @param limit
     */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group targets for a group role
     * List all Group Targets for a Group Role
     * @param groupId
     * @param roleId
     * @param after
     * @param limit
     */
  listGroupTargetsForGroupRole(groupId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group targets for role
     * List all Group Targets for Role
     * @param userId
     * @param roleId
     * @param after
     * @param limit
     */
  listGroupTargetsForRole(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an application instance target from an application administrator role
     * Unassign an Application Instance Target from an Application Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  unassignAppInstanceTargetFromAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an application instance target from application administrator role
     * Unassign an Application Instance Target from an Application Administrator Role
     * @param groupId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  unassignAppInstanceTargetToAppAdminRoleForGroup(groupId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an application target from application administrator role
     * Unassign an Application Target from an Application Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     */
  unassignAppTargetFromAppAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns an application target from application administrator role
     * Unassign an Application Target from Application Administrator Role
     * @param groupId
     * @param roleId
     * @param appName
     */
  unassignAppTargetToAdminRoleForGroup(groupId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a group target from a group role
     * Unassign a Group Target from a Group Role
     * @param groupId
     * @param roleId
     * @param targetGroupId
     */
  unassignGroupTargetFromGroupAdminRole(groupId: string, roleId: string, targetGroupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a Group Target from Role
     * Unassign a Group Target from Role
     * @param userId
     * @param roleId
     * @param groupId
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
