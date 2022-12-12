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
     * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
     * Create a Session with Session Token
     * @param createSessionRequest
     */
  createSession(createSessionRequest: CreateSessionRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the details about a session
     * Retrieve a Session
     * @param sessionId
     */
  getSession(sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Refreshes a session
     * Refresh a Session
     * @param sessionId
     */
  refreshSession(sessionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes a session
     * Revoke a Session
     * @param sessionId
     */
  revokeSession(sessionId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class SessionApiResponseProcessor {
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
     * @params response Response returned by the server for a request to getSession
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSession(response: ResponseContext): Promise<Session>;
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
