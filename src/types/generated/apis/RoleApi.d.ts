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
import { IamRole } from '../models/IamRole';
import { IamRoles } from '../models/IamRoles';
import { Permission } from '../models/Permission';
import { Permissions } from '../models/Permissions';
/**
 * no description
 */
export declare class RoleApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new role
     * Create a Role
     * @param instance
     */
  createRole(instance: IamRole, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a permission specified by `permissionType` to the role
     * Create a Permission
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param permissionType An okta permission type
     */
  createRolePermission(roleIdOrLabel: string, permissionType: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a role by `roleIdOrLabel`
     * Delete a Role
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     */
  deleteRole(roleIdOrLabel: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a permission from a role by `permissionType`
     * Delete a Permission
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param permissionType An okta permission type
     */
  deleteRolePermission(roleIdOrLabel: string, permissionType: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a role by `roleIdOrLabel`
     * Retrieve a Role
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     */
  getRole(roleIdOrLabel: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a permission by `permissionType`
     * Retrieve a Permission
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param permissionType An okta permission type
     */
  getRolePermission(roleIdOrLabel: string, permissionType: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all permissions of the role by `roleIdOrLabel`
     * List all Permissions
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     */
  listRolePermissions(roleIdOrLabel: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all roles with pagination support
     * List all Roles
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     */
  listRoles(after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a role by `roleIdOrLabel`
     * Replace a Role
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param instance
     */
  replaceRole(roleIdOrLabel: string, instance: IamRole, _options?: Configuration): Promise<RequestContext>;
}
export declare class RoleApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  createRole(response: ResponseContext): Promise<IamRole>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRolePermission
     * @throws ApiException if the response code was not in [200, 299]
     */
  createRolePermission(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteRole(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRolePermission
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteRolePermission(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRole(response: ResponseContext): Promise<IamRole>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRolePermission
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRolePermission(response: ResponseContext): Promise<Permission>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRolePermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRolePermissions(response: ResponseContext): Promise<Permissions>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRoles(response: ResponseContext): Promise<IamRoles>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceRole(response: ResponseContext): Promise<IamRole>;
}
