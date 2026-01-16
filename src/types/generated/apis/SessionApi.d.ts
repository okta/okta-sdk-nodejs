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
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { Session } from '../models/Session';
/**
 * no description
 */
export declare class SessionApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Closes the Session for the user who is currently signed in. Use this method in a browser-based application to sign out a user.  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
     * Close the current session
     * @param cookie
     */
  closeCurrentSession(cookie?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new Session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
     * Create a session with session token
     * @param createSessionRequest
     */
  createSession(createSessionRequest: CreateSessionRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves Session information for the current user. Use this method in a browser-based application to determine if the user is signed in.   > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
     * Retrieve the current session
     * @param cookie
     */
  getCurrentSession(cookie?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves information about the Session specified by the given session ID
     * Retrieve a session
     * @param sessionId &#x60;id&#x60; of the Session
     */
  getSession(sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Refreshes the Session for the current user  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
     * Refresh the current session
     * @param cookie
     */
  refreshCurrentSession(cookie?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Refreshes an existing Session using the `id` for that Session. A successful response contains the refreshed Session with an updated `expiresAt` timestamp.
     * Refresh a session
     * @param sessionId &#x60;id&#x60; of the Session
     */
  refreshSession(sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes the specified Session
     * Revoke a session
     * @param sessionId &#x60;id&#x60; of the Session
     */
  revokeSession(sessionId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class SessionApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to closeCurrentSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  closeCurrentSession(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  createSession(response: ResponseContext): Promise<Session>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCurrentSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCurrentSession(response: ResponseContext): Promise<Session>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSession(response: ResponseContext): Promise<Session>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refreshCurrentSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  refreshCurrentSession(response: ResponseContext): Promise<Session>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refreshSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  refreshSession(response: ResponseContext): Promise<Session>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeSession(response: ResponseContext): Promise<void>;
}
