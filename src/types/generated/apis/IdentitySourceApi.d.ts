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
import { BulkDeleteRequestBody } from '../models/BulkDeleteRequestBody';
import { BulkGroupDeleteRequestBody } from '../models/BulkGroupDeleteRequestBody';
import { BulkGroupMembershipsDeleteRequestBody } from '../models/BulkGroupMembershipsDeleteRequestBody';
import { BulkGroupMembershipsUpsertRequestBody } from '../models/BulkGroupMembershipsUpsertRequestBody';
import { BulkGroupUpsertRequestBody } from '../models/BulkGroupUpsertRequestBody';
import { BulkUpsertRequestBody } from '../models/BulkUpsertRequestBody';
import { GroupMembershipsResponseSchema } from '../models/GroupMembershipsResponseSchema';
import { GroupsRequestSchema } from '../models/GroupsRequestSchema';
import { GroupsResponseSchema } from '../models/GroupsResponseSchema';
import { IdentitySourceSession } from '../models/IdentitySourceSession';
import { MembershipRequestSchema } from '../models/MembershipRequestSchema';
import { UserRequestSchema } from '../models/UserRequestSchema';
import { UserResponseSchema } from '../models/UserResponseSchema';
import { UsersUpdateRequestSchema } from '../models/UsersUpdateRequestSchema';
/**
 * no description
 */
export declare class IdentitySourceApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a group in an identity source for the given identity source instance
     * Create an identity source group
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param groupsRequestSchema
     */
  createIdentitySourceGroups(identitySourceId: string, groupsRequestSchema?: GroupsRequestSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates the group memberships for the given identity source group
     * Create the memberships for the given identity source group
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param groupOrExternalId The Okta group ID or external ID of the identity source group
     * @param membershipRequestSchema
     */
  createIdentitySourceGroupsMemberships(identitySourceId: string, groupOrExternalId: string, membershipRequestSchema?: MembershipRequestSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an identity source session for the given identity source instance
     * Create an identity source session
     * @param identitySourceId The ID of the identity source for which the session is created
     */
  createIdentitySourceSession(identitySourceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a user in an identity source for the given identity source instance
     * Create an identity source user
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param userRequestSchema
     */
  createIdentitySourceUser(identitySourceId: string, userRequestSchema?: UserRequestSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a group in an identity source for a given identity source ID and group ID
     * Delete an identity source group
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param groupOrExternalId The Okta group ID or external ID of the identity source group
     */
  deleteIdentitySourceGroup(identitySourceId: string, groupOrExternalId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes group memberships for the specified identity source group using member external IDs
     * Delete the memberships for the specified identity source group
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param groupOrExternalId The Okta group ID or external ID of the identity source group
     * @param memberExternalId The external ID of the identity source user
     */
  deleteIdentitySourceGroupMemberships(identitySourceId: string, groupOrExternalId: string, memberExternalId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an identity source session for a given identity source ID and session Id
     * Delete an identity source session
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     */
  deleteIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a user in an identity source for the given identity source instance and external ID
     * Delete an identity source user
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param externalId The external ID of the user
     */
  deleteIdentitySourceUser(identitySourceId: string, externalId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a group from an identity source for a given identity source ID and group ID or external ID
     * Retrieve an identity source group
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param groupOrExternalId The Okta group ID or external ID of the identity source group
     */
  getIdentitySourceGroup(identitySourceId: string, groupOrExternalId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the group memberships for the given identity source group in the given identity source instance
     * Retrieve the memberships for the given identity source group
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param groupOrExternalId The Okta group ID or external ID of the identity source group
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit Specifies the number of group membership results in a page. Okta recommends using a specific value other than the default or maximum. If your request times out, retry your request with a smaller &#x60;limit&#x60; and [page the results](https://developer.okta.com/docs/api/#pagination).
     */
  getIdentitySourceGroupMemberships(identitySourceId: string, groupOrExternalId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an identity source session for a given identity source ID and session ID
     * Retrieve an identity source session
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     */
  getIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a user by external ID in an identity source for the given identity source instance
     * Retrieve an identity source user
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param externalId The external ID of the user
     */
  getIdentitySourceUser(identitySourceId: string, externalId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all identity source sessions for the given identity source instance
     * List all identity source sessions
     * @param identitySourceId The ID of the identity source for which the session is created
     */
  listIdentitySourceSessions(identitySourceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an existing user for the given identity source instance and external ID
     * Replace an existing identity source user
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param externalId The external ID of the user
     * @param userRequestSchema
     */
  replaceExistingIdentitySourceUser(identitySourceId: string, externalId: string, userRequestSchema?: UserRequestSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Starts the import from the identity source described by the uploaded bulk operations
     * Start the import from the identity source
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     */
  startImportFromIdentitySource(identitySourceId: string, sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a group to an identity source for the given identity source instance and group ID
     * Update an identity source group
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param groupOrExternalId The Okta group ID or external ID of the identity source group
     * @param groupsRequestSchema
     */
  updateIdentitySourceGroups(identitySourceId: string, groupOrExternalId: string, groupsRequestSchema?: GroupsRequestSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a user to an identity source for the given identity source instance and external ID
     * Update an identity source user
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param externalId The external ID of the user
     * @param usersUpdateRequestSchema
     */
  updateIdentitySourceUsers(identitySourceId: string, externalId: string, usersUpdateRequestSchema?: UsersUpdateRequestSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads external IDs of entities that need to be deleted in Okta from the identity source for the given session
     * Upload the data to be deleted in Okta
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     * @param bulkDeleteRequestBody
     */
  uploadIdentitySourceDataForDelete(identitySourceId: string, sessionId: string, bulkDeleteRequestBody?: BulkDeleteRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads entities that need to be inserted or updated in Okta from the identity source for the given session
     * Upload the data to be upserted in Okta
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     * @param bulkUpsertRequestBody
     */
  uploadIdentitySourceDataForUpsert(identitySourceId: string, sessionId: string, bulkUpsertRequestBody?: BulkUpsertRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads the group memberships that need to be deleted in Okta from the identity source for the given session
     * Upload the group memberships to be deleted in Okta
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     * @param bulkGroupMembershipsDeleteRequestBody
     */
  uploadIdentitySourceGroupMembershipsForDelete(identitySourceId: string, sessionId: string, bulkGroupMembershipsDeleteRequestBody?: BulkGroupMembershipsDeleteRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads the group memberships that need to be inserted or updated in Okta from the identity source for the given session
     * Upload the group memberships to be upserted in Okta
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     * @param bulkGroupMembershipsUpsertRequestBody
     */
  uploadIdentitySourceGroupMembershipsForUpsert(identitySourceId: string, sessionId: string, bulkGroupMembershipsUpsertRequestBody?: BulkGroupMembershipsUpsertRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads external IDs of groups that need to be deleted in Okta from the identity source for the given session
     * Upload the group external IDs to be deleted in Okta
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     * @param bulkGroupDeleteRequestBody
     */
  uploadIdentitySourceGroupsDataForDelete(identitySourceId: string, sessionId: string, bulkGroupDeleteRequestBody?: BulkGroupDeleteRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads the group profiles without memberships that need to be inserted or updated in Okta from the identity source for the given session
     * Upload the group profiles without memberships to be upserted in Okta
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     * @param bulkGroupUpsertRequestBody
     */
  uploadIdentitySourceGroupsForUpsert(identitySourceId: string, sessionId: string, bulkGroupUpsertRequestBody?: BulkGroupUpsertRequestBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class IdentitySourceApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentitySourceGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
  createIdentitySourceGroups(response: ResponseContext): Promise<GroupsResponseSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentitySourceGroupsMemberships
     * @throws ApiException if the response code was not in [200, 299]
     */
  createIdentitySourceGroupsMemberships(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentitySourceSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  createIdentitySourceSession(response: ResponseContext): Promise<IdentitySourceSession>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentitySourceUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  createIdentitySourceUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentitySourceGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteIdentitySourceGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentitySourceGroupMemberships
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteIdentitySourceGroupMemberships(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentitySourceSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteIdentitySourceSession(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentitySourceUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteIdentitySourceUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentitySourceGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentitySourceGroup(response: ResponseContext): Promise<GroupsResponseSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentitySourceGroupMemberships
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentitySourceGroupMemberships(response: ResponseContext): Promise<GroupMembershipsResponseSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentitySourceSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentitySourceSession(response: ResponseContext): Promise<IdentitySourceSession>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentitySourceUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentitySourceUser(response: ResponseContext): Promise<UserResponseSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentitySourceSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listIdentitySourceSessions(response: ResponseContext): Promise<Array<IdentitySourceSession>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceExistingIdentitySourceUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceExistingIdentitySourceUser(response: ResponseContext): Promise<UserResponseSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to startImportFromIdentitySource
     * @throws ApiException if the response code was not in [200, 299]
     */
  startImportFromIdentitySource(response: ResponseContext): Promise<IdentitySourceSession>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIdentitySourceGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateIdentitySourceGroups(response: ResponseContext): Promise<GroupsResponseSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIdentitySourceUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateIdentitySourceUsers(response: ResponseContext): Promise<UserResponseSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdentitySourceDataForDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadIdentitySourceDataForDelete(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdentitySourceDataForUpsert
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadIdentitySourceDataForUpsert(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdentitySourceGroupMembershipsForDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadIdentitySourceGroupMembershipsForDelete(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdentitySourceGroupMembershipsForUpsert
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadIdentitySourceGroupMembershipsForUpsert(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdentitySourceGroupsDataForDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadIdentitySourceGroupsDataForDelete(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdentitySourceGroupsForUpsert
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadIdentitySourceGroupsForUpsert(response: ResponseContext): Promise<void>;
}
