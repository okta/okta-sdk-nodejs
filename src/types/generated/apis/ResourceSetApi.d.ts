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
import { ResourceSet } from '../models/ResourceSet';
import { ResourceSetBindingAddMembersRequest } from '../models/ResourceSetBindingAddMembersRequest';
import { ResourceSetBindingCreateRequest } from '../models/ResourceSetBindingCreateRequest';
import { ResourceSetBindingMember } from '../models/ResourceSetBindingMember';
import { ResourceSetBindingMembers } from '../models/ResourceSetBindingMembers';
import { ResourceSetBindingResponse } from '../models/ResourceSetBindingResponse';
import { ResourceSetBindings } from '../models/ResourceSetBindings';
import { ResourceSetResourcePatchRequest } from '../models/ResourceSetResourcePatchRequest';
import { ResourceSetResources } from '../models/ResourceSetResources';
import { ResourceSets } from '../models/ResourceSets';
/**
 * no description
 */
export declare class ResourceSetApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Adds more members to a resource set binding
     * Add more Members to a binding
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param instance
     */
  addMembersToBinding(resourceSetId: string, roleIdOrLabel: string, instance: ResourceSetBindingAddMembersRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds more resources to a resource set
     * Add more Resource to a resource set
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param instance
     */
  addResourceSetResource(resourceSetId: string, instance: ResourceSetResourcePatchRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new resource set
     * Create a Resource Set
     * @param instance
     */
  createResourceSet(instance: ResourceSet, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new resource set binding
     * Create a Resource Set Binding
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param instance
     */
  createResourceSetBinding(resourceSetId: string, instance: ResourceSetBindingCreateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a resource set binding by `resourceSetId` and `roleIdOrLabel`
     * Delete a Binding
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     */
  deleteBinding(resourceSetId: string, roleIdOrLabel: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a role by `resourceSetId`
     * Delete a Resource Set
     * @param resourceSetId &#x60;id&#x60; of a resource set
     */
  deleteResourceSet(resourceSetId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a resource identified by `resourceId` from a resource set
     * Delete a Resource from a resource set
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param resourceId &#x60;id&#x60; of a resource
     */
  deleteResourceSetResource(resourceSetId: string, resourceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a resource set binding by `resourceSetId` and `roleIdOrLabel`
     * Retrieve a Binding
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     */
  getBinding(resourceSetId: string, roleIdOrLabel: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a member identified by `memberId` for a binding
     * Retrieve a Member of a binding
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param memberId &#x60;id&#x60; of a member
     */
  getMemberOfBinding(resourceSetId: string, roleIdOrLabel: string, memberId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a resource set by `resourceSetId`
     * Retrieve a Resource Set
     * @param resourceSetId &#x60;id&#x60; of a resource set
     */
  getResourceSet(resourceSetId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all resource set bindings with pagination support
     * List all Bindings
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     */
  listBindings(resourceSetId: string, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all members of a resource set binding with pagination support
     * List all Members of a binding
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     */
  listMembersOfBinding(resourceSetId: string, roleIdOrLabel: string, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all resources that make up the resource set
     * List all Resources of a resource set
     * @param resourceSetId &#x60;id&#x60; of a resource set
     */
  listResourceSetResources(resourceSetId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all resource sets with pagination support
     * List all Resource Sets
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     */
  listResourceSets(after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a resource set by `resourceSetId`
     * Replace a Resource Set
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param instance
     */
  replaceResourceSet(resourceSetId: string, instance: ResourceSet, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a member identified by `memberId` from a binding
     * Unassign a Member from a binding
     * @param resourceSetId &#x60;id&#x60; of a resource set
     * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
     * @param memberId &#x60;id&#x60; of a member
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
  addMembersToBinding(response: ResponseContext): Promise<ResourceSetBindingResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addResourceSetResource
     * @throws ApiException if the response code was not in [200, 299]
     */
  addResourceSetResource(response: ResponseContext): Promise<ResourceSet>;
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
  createResourceSetBinding(response: ResponseContext): Promise<ResourceSetBindingResponse>;
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
     * @params response Response returned by the server for a request to unassignMemberFromBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignMemberFromBinding(response: ResponseContext): Promise<void>;
}
