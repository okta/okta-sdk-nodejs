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
import { Authenticator } from '../models/Authenticator';
/**
 * no description
 */
export declare class AuthenticatorApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an authenticator by `authenticatorId`.
     * Activate Authenticator
     * @param authenticatorId
     */
  activateAuthenticator(authenticatorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an authenticator by `authenticatorId`.
     * Deactivate Authenticator
     * @param authenticatorId
     */
  deactivateAuthenticator(authenticatorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches an authenticator from your Okta organization by `authenticatorId`.
     * Get Authenticator
     * @param authenticatorId
     */
  getAuthenticator(authenticatorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates authenticators in your organization.
     * List Authenticators
     */
  listAuthenticators(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an authenticator
     * Update Authenticator
     * @param authenticatorId
     * @param authenticator
     */
  updateAuthenticator(authenticatorId: string, authenticator: Authenticator, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthenticatorApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateAuthenticator(response: ResponseContext): Promise<Authenticator>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateAuthenticator(response: ResponseContext): Promise<Authenticator>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAuthenticator(response: ResponseContext): Promise<Authenticator>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthenticators
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAuthenticators(response: ResponseContext): Promise<Array<Authenticator>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateAuthenticator(response: ResponseContext): Promise<Authenticator>;
}