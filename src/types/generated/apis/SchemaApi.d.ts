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
import { ApplicationLayout } from '../models/ApplicationLayout';
import { GroupSchema } from '../models/GroupSchema';
import { UserSchema } from '../models/UserSchema';
/**
 * no description
 */
export declare class SchemaApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Takes an Application name as an input parameter and retrieves the App Instance page Layout for that Application.
     * Retrieve the UI Layout for an Application
     * @param appName
     */
  getApplicationLayout(appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches the Schema for an App User
     * Retrieve the default Application User Schema for an Application
     * @param appInstanceId
     */
  getApplicationUserSchema(appInstanceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches the group schema
     * Retrieve the default Group Schema
     */
  getGroupSchema(_options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches the schema for a Schema Id.
     * Retrieve a User Schema
     * @param schemaId
     */
  getUserSchema(schemaId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Partial updates on the User Profile properties of the Application User Schema.
     * Update the default Application User Schema for an Application
     * @param appInstanceId
     * @param body
     */
  updateApplicationUserProfile(appInstanceId: string, body?: UserSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates, adds or removes one or more custom Group Profile properties in the schema
     * Update the default Group Schema
     * @param GroupSchema
     */
  updateGroupSchema(GroupSchema?: GroupSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Partial updates on the User Profile properties of the user schema.
     * Update a User Schema
     * @param schemaId
     * @param userSchema
     */
  updateUserProfile(schemaId: string, userSchema: UserSchema, _options?: Configuration): Promise<RequestContext>;
}
export declare class SchemaApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationLayout
     * @throws ApiException if the response code was not in [200, 299]
     */
  getApplicationLayout(response: ResponseContext): Promise<ApplicationLayout>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationUserSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  getApplicationUserSchema(response: ResponseContext): Promise<UserSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGroupSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  getGroupSchema(response: ResponseContext): Promise<GroupSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserSchema(response: ResponseContext): Promise<UserSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationUserProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateApplicationUserProfile(response: ResponseContext): Promise<UserSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGroupSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateGroupSchema(response: ResponseContext): Promise<GroupSchema>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUserProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateUserProfile(response: ResponseContext): Promise<UserSchema>;
}
