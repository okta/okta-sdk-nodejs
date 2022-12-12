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
import { BulkUpsertRequestBody } from '../models/BulkUpsertRequestBody';
import { IdentitySourceSession } from '../models/IdentitySourceSession';
/**
 * no description
 */
export declare class IdentitySourceApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates an identity source session for the given identity source instance
     * Create an Identity Source Session
     * @param identitySourceId
     */
  createIdentitySourceSession(identitySourceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an identity source session for a given `identitySourceId` and `sessionId`
     * Delete an Identity Source Session
     * @param identitySourceId
     * @param sessionId
     */
  deleteIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an identity source session for a given identity source id and session id
     * Retrieve an Identity Source Session
     * @param identitySourceId
     * @param sessionId
     */
  getIdentitySourceSession(identitySourceId: string, sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all identity source sessions for the given identity source instance
     * List all Identity Source Sessions
     * @param identitySourceId
     */
  listIdentitySourceSessions(identitySourceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Starts the import from the identity source described by the uploaded bulk operations
     * Start the import from the Identity Source
     * @param identitySourceId
     * @param sessionId
     */
  startImportFromIdentitySource(identitySourceId: string, sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads entities that need to be deleted in Okta from the identity source for the given session
     * Upload the data to be deleted in Okta
     * @param identitySourceId
     * @param sessionId
     * @param BulkDeleteRequestBody
     */
  uploadIdentitySourceDataForDelete(identitySourceId: string, sessionId: string, BulkDeleteRequestBody?: BulkDeleteRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads entities that need to be upserted in Okta from the identity source for the given session
     * Upload the data to be upserted in Okta
     * @param identitySourceId
     * @param sessionId
     * @param BulkUpsertRequestBody
     */
  uploadIdentitySourceDataForUpsert(identitySourceId: string, sessionId: string, BulkUpsertRequestBody?: BulkUpsertRequestBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class IdentitySourceApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentitySourceSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  createIdentitySourceSession(response: ResponseContext): Promise<Array<IdentitySourceSession>>;
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
  startImportFromIdentitySource(response: ResponseContext): Promise<Array<IdentitySourceSession>>;
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
}
