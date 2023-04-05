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
import { UserType } from '../models/UserType';
/**
 * no description
 */
export declare class UserTypeApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
     * Create a User Type
     * @param userType
     */
  createUserType(userType: UserType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
     * Delete a User Type
     * @param typeId
     */
  deleteUserType(typeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
     * Retrieve a User Type
     * @param typeId
     */
  getUserType(typeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all User Types in your org
     * List all User Types
     */
  listUserTypes(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an existing user type
     * Replace a User Type
     * @param typeId
     * @param userType
     */
  replaceUserType(typeId: string, userType: UserType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an existing User Type
     * Update a User Type
     * @param typeId
     * @param userType
     */
  updateUserType(typeId: string, userType: UserType, _options?: Configuration): Promise<RequestContext>;
}
export declare class UserTypeApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUserType
     * @throws ApiException if the response code was not in [200, 299]
     */
  createUserType(response: ResponseContext): Promise<UserType>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUserType
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteUserType(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserType
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserType(response: ResponseContext): Promise<UserType>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserTypes(response: ResponseContext): Promise<Array<UserType>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceUserType
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceUserType(response: ResponseContext): Promise<UserType>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUserType
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateUserType(response: ResponseContext): Promise<UserType>;
}
