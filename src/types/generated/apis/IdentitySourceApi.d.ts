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
import { IdentitySourceSession } from '../models/IdentitySourceSession';
/**
 * no description
 */
export declare class IdentitySourceApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates an identity source session for the given identity source instance
     * Create an identity source session
     * @param identitySourceId The ID of the identity source for which the session is created
     */
  createIdentitySourceSession(identitySourceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an identity source session for a given identity source ID and session Id
     * Delete an identity source session
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     */
  deleteIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an identity source session for a given identity source ID and session ID
     * Retrieve an identity source session
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     */
  getIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all identity source sessions for the given identity source instance
     * List all identity source sessions
     * @param identitySourceId The ID of the identity source for which the session is created
     */
  listIdentitySourceSessions(identitySourceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Starts the import from the identity source described by the uploaded bulk operations
     * Start the import from the identity source
     * @param identitySourceId The ID of the identity source for which the session is created
     * @param sessionId The ID of the identity source session
     */
  startImportFromIdentitySource(identitySourceId: string, sessionId: string, _options?: Configuration): Promise<RequestContext>;
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
     * @params response Response returned by the server for a request to createIdentitySourceSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  createIdentitySourceSession(response: ResponseContext): Promise<IdentitySourceSession>;
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
     * @params response Response returned by the server for a request to getIdentitySourceSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentitySourceSession(response: ResponseContext): Promise<IdentitySourceSession>;
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
     * @params response Response returned by the server for a request to startImportFromIdentitySource
     * @throws ApiException if the response code was not in [200, 299]
     */
  startImportFromIdentitySource(response: ResponseContext): Promise<IdentitySourceSession>;
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
