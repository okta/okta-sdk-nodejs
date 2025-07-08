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
import { AuthenticatorEnrollment } from '../models/AuthenticatorEnrollment';
import { AuthenticatorEnrollmentCreateRequest } from '../models/AuthenticatorEnrollmentCreateRequest';
import { AuthenticatorEnrollmentCreateRequestTac } from '../models/AuthenticatorEnrollmentCreateRequestTac';
import { TacAuthenticatorEnrollment } from '../models/TacAuthenticatorEnrollment';
/**
 * no description
 */
export declare class UserAuthenticatorEnrollmentsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a Phone authenticator enrollment that\'s automatically activated
     * Create an auto-activated Phone authenticator enrollment
     * @param userId ID of an existing Okta user
     * @param authenticator
     */
  createAuthenticatorEnrollment(userId: string, authenticator: AuthenticatorEnrollmentCreateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an auto-activated Temporary Access Code (TAC) authenticator enrollment
     * Create an auto-activated TAC authenticator enrollment
     * @param userId ID of an existing Okta user
     * @param authenticator
     */
  createTacAuthenticatorEnrollment(userId: string, authenticator: AuthenticatorEnrollmentCreateRequestTac, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an existing enrollment for the specified user. The user can enroll the authenticator again.
     * Delete an authenticator enrollment
     * @param userId ID of an existing Okta user
     * @param enrollmentId Unique identifier of an enrollment
     */
  deleteAuthenticatorEnrollment(userId: string, enrollmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a user\'s authenticator enrollment by `enrollmentId`
     * Retrieve an authenticator enrollment
     * @param userId ID of an existing Okta user
     * @param enrollmentId Unique identifier of an enrollment
     */
  getAuthenticatorEnrollment(userId: string, enrollmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all authenticator enrollments of the specified user
     * List all authenticator enrollments
     * @param userId ID of an existing Okta user
     */
  listAuthenticatorEnrollments(userId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class UserAuthenticatorEnrollmentsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthenticatorEnrollment
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAuthenticatorEnrollment(response: ResponseContext): Promise<AuthenticatorEnrollment>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTacAuthenticatorEnrollment
     * @throws ApiException if the response code was not in [200, 299]
     */
  createTacAuthenticatorEnrollment(response: ResponseContext): Promise<TacAuthenticatorEnrollment>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAuthenticatorEnrollment
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAuthenticatorEnrollment(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthenticatorEnrollment
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAuthenticatorEnrollment(response: ResponseContext): Promise<AuthenticatorEnrollment>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthenticatorEnrollments
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAuthenticatorEnrollments(response: ResponseContext): Promise<AuthenticatorEnrollment>;
}
