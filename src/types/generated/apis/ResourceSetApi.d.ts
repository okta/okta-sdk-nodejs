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
import { CreateResourceSetRequest } from '../models/CreateResourceSetRequest';
import { ResourceSet } from '../models/ResourceSet';
import { ResourceSetBindingAddMembersRequest } from '../models/ResourceSetBindingAddMembersRequest';
import { ResourceSetBindingCreateRequest } from '../models/ResourceSetBindingCreateRequest';
import { ResourceSetBindingEditResponse } from '../models/ResourceSetBindingEditResponse';
import { ResourceSetBindingMember } from '../models/ResourceSetBindingMember';
import { ResourceSetBindingMembers } from '../models/ResourceSetBindingMembers';
import { ResourceSetBindingResponse } from '../models/ResourceSetBindingResponse';
import { ResourceSetBindings } from '../models/ResourceSetBindings';
import { ResourceSetResource } from '../models/ResourceSetResource';
import { ResourceSetResourcePatchRequest } from '../models/ResourceSetResourcePatchRequest';
import { ResourceSetResourcePostRequest } from '../models/ResourceSetResourcePostRequest';
import { ResourceSetResourcePutRequest } from '../models/ResourceSetResourcePutRequest';
import { ResourceSetResources } from '../models/ResourceSetResources';
import { ResourceSets } from '../models/ResourceSets';
/**
 * no description
 */
export declare class ResourceSetApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Adds more members to a role resource set binding
     * Add more role resource set binding members
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param instance
     */
  addMembersToBinding(resourceSetId: string, roleIdOrLabel: string, instance: ResourceSetBindingAddMembersRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds a resource with conditions for a resource set
     * Add a resource set resource with conditions
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param instance
     */
  addResourceSetResource(resourceSetId: string, instance: ResourceSetResourcePostRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds more resources to a resource set
     * Add more resources to a resource set
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param instance
     */
  addResourceSetResources(resourceSetId: string, instance: ResourceSetResourcePatchRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new resource set. See [Supported resources](/openapi/okta-management/guides/roles/#supported-resources).  > **Note:** The maximum number of `resources` allowed in a resource set object is 1000. Resources are identified by either an Okta Resource Name (ORN) or by a REST URL format. See [Okta Resource Name](/openapi/okta-management/guides/roles/#okta-resource-name-orn).
     * Create a resource set
     * @param instance
     */
  createResourceSet(instance: CreateResourceSetRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a binding for the resource set, custom role, and members (users or groups)
     * Create a role resource set binding
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param instance
     */
  createResourceSetBinding(resourceSetId: string, instance: ResourceSetBindingCreateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a binding of a role (identified by `roleIdOrLabel`) and a resource set (identified by `resourceSetIdOrLabel`)
     * Delete a role resource set binding
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     */
  deleteBinding(resourceSetId: string, roleIdOrLabel: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a resource set by `resourceSetIdOrLabel`
     * Delete a resource set
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     */
  deleteResourceSet(resourceSetId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a resource (identified by `resourceId`) from a resource set
     * Delete a resource set resource
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param resourceId &#x60;id&#x60; of the resource
     */
  deleteResourceSetResource(resourceSetId: string, resourceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the binding of a role (identified by `roleIdOrLabel`) for a resource set (identified by `resourceSetIdOrLabel`)
     * Retrieve a role resource set binding
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     */
  getBinding(resourceSetId: string, roleIdOrLabel: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a member (identified by `memberId`) that belongs to a role resource set binding
     * Retrieve a role resource set binding member
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param memberId &#x60;id&#x60; of the member
     */
  getMemberOfBinding(resourceSetId: string, roleIdOrLabel: string, memberId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a resource set by `resourceSetIdOrLabel`
     * Retrieve a resource set
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     */
  getResourceSet(resourceSetId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a resource identified by `resourceId` in a resource set
     * Retrieve a resource set resource
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param resourceId &#x60;id&#x60; of the resource
     */
  getResourceSetResource(resourceSetId: string, resourceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all bindings for a resource set with pagination support.  The returned `roles` array contains the roles for each binding associated with the specified resource set. If there are more than 100 bindings for the specified resource set, `links.next` provides the resource with pagination for the next list of bindings.
     * List all role resource set bindings
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     */
  listBindings(resourceSetId: string, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all members of a role resource set binding with pagination support
     * List all role resource set binding members
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     */
  listMembersOfBinding(resourceSetId: string, roleIdOrLabel: string, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all resources for the resource set
     * List all resource set resources
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     */
  listResourceSetResources(resourceSetId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all resource sets with pagination support
     * List all resource sets
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     */
  listResourceSets(after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the label and description of a resource set
     * Replace a resource set
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param instance
     */
  replaceResourceSet(resourceSetId: string, instance: ResourceSet, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the conditions of a resource identified by `resourceId` in a resource set
     * Replace the resource set resource conditions
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param resourceId &#x60;id&#x60; of the resource
     * @param resourceSetResourcePutRequest
     */
  replaceResourceSetResource(resourceSetId: string, resourceId: string, resourceSetResourcePutRequest: ResourceSetResourcePutRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a member (identified by `memberId`) from a role resource set binding
     * Unassign a role resource set binding member
     * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param memberId &#x60;id&#x60; of the member
     */
  unassignMemberFromBinding(resourceSetId: string, roleIdOrLabel: string, memberId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ResourceSetApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addMembersToBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
  addMembersToBinding(response: ResponseContext): Promise<ResourceSetBindingEditResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addResourceSetResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  addResourceSetResource(response: ResponseContext): Promise<ResourceSetResource>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addResourceSetResources
     * @throws ApiException if the response code was not in [200, 299]
     */
  addResourceSetResources(response: ResponseContext): Promise<ResourceSet>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createResourceSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  createResourceSet(response: ResponseContext): Promise<ResourceSet>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createResourceSetBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
  createResourceSetBinding(response: ResponseContext): Promise<ResourceSetBindingEditResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteBinding(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteResourceSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteResourceSet(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteResourceSetResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteResourceSetResource(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
  getBinding(response: ResponseContext): Promise<ResourceSetBindingResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMemberOfBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
  getMemberOfBinding(response: ResponseContext): Promise<ResourceSetBindingMember>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getResourceSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  getResourceSet(response: ResponseContext): Promise<ResourceSet>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getResourceSetResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  getResourceSetResource(response: ResponseContext): Promise<ResourceSetResource>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBindings
     * @throws ApiException if the response code was not in [200, 299]
     */
  listBindings(response: ResponseContext): Promise<ResourceSetBindings>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMembersOfBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
  listMembersOfBinding(response: ResponseContext): Promise<ResourceSetBindingMembers>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listResourceSetResources
     * @throws ApiException if the response code was not in [200, 299]
     */
  listResourceSetResources(response: ResponseContext): Promise<ResourceSetResources>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listResourceSets
     * @throws ApiException if the response code was not in [200, 299]
     */
  listResourceSets(response: ResponseContext): Promise<ResourceSets>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceResourceSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceResourceSet(response: ResponseContext): Promise<ResourceSet>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceResourceSetResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceResourceSetResource(response: ResponseContext): Promise<ResourceSetResource>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignMemberFromBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignMemberFromBinding(response: ResponseContext): Promise<void>;
}
