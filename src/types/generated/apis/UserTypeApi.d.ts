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
import { UserTypePostRequest } from '../models/UserTypePostRequest';
import { UserTypePutRequest } from '../models/UserTypePutRequest';
/**
 * no description
 */
export declare class UserTypeApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new user type. Okta automatically creates a `default` user type for your org. You may add up to nine additional user types. > **Note**: New user types are based on the current default schema template. Modifications to this schema do not automatically propagate to previously created user types.
     * Create a user type
     * @param userType
     */
  createUserType(userType: UserType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a user type permanently. > **Note**: You can\'t delete the default user type or a user type that is currently assigned to users.
     * Delete a user type
     * @param typeId
     */
  deleteUserType(typeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a user type by ID. Use `default` to fetch the default user type.
     * Retrieve a user type
     * @param typeId
     */
  getUserType(typeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all user types in your org
     * List all user types
     */
  listUserTypes(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an existing user type. This operation is a full update. > **Note**: The `name` of an existing user type can\'t be changed, but must be part of the request body. You can only replace the `displayName` and `description` elements.
     * Replace a user type
     * @param typeId
     * @param userType
     */
  replaceUserType(typeId: string, userType?: UserTypePutRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an existing user type. This operation is a partial update. > **Note**: You can only update the `displayName` and `description` elements. The `name` of an existing user type can\'t be changed.
     * Update a user type
     * @param typeId
     * @param userType
     */
  updateUserType(typeId: string, userType: UserTypePostRequest, _options?: Configuration): Promise<RequestContext>;
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
