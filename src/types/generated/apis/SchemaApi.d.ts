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
import { ApplicationLayouts } from '../models/ApplicationLayouts';
import { GroupSchema } from '../models/GroupSchema';
import { LogStreamSchema } from '../models/LogStreamSchema';
import { LogStreamType } from '../models/LogStreamType';
import { UserSchema } from '../models/UserSchema';
/**
 * no description
 */
export declare class SchemaApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the UI schema for an Application given `appName`, `section` and `operation`
     * Retrieve the UI schema for a section
     * @param appName
     * @param section
     * @param operation
     */
  getAppUISchema(appName: string, section: string, operation: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the links for UI schemas for an Application given `appName`
     * Retrieve the links for UI schemas for an Application
     * @param appName
     */
  getAppUISchemaLinks(appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the Schema for an App User
     * Retrieve the default Application User Schema for an Application
     * @param appInstanceId
     */
  getApplicationUserSchema(appInstanceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the group schema
     * Retrieve the default Group Schema
     */
  getGroupSchema(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the schema for a Log Stream type. The `logStreamType` element in the URL specifies the Log Stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
     * Retrieve the Log Stream Schema for the schema type
     * @param logStreamType
     */
  getLogStreamSchema(logStreamType: LogStreamType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the schema for a Schema Id
     * Retrieve a User Schema
     * @param schemaId
     */
  getUserSchema(schemaId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the schema for all log stream types visible for this org
     * List the Log Stream Schemas
     */
  listLogStreamSchemas(_options?: Configuration): Promise<RequestContext>;
  /**
     * Partially updates on the User Profile properties of the Application User Schema
     * Update the default Application User Schema for an Application
     * @param appInstanceId
     * @param body
     */
  updateApplicationUserProfile(appInstanceId: string, body?: UserSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the default group schema. This updates, adds, or removes one or more custom Group Profile properties in the schema.
     * Update the default Group Schema
     * @param GroupSchema
     */
  updateGroupSchema(GroupSchema?: GroupSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Partially updates on the User Profile properties of the user schema
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
     * @params response Response returned by the server for a request to getAppUISchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAppUISchema(response: ResponseContext): Promise<ApplicationLayout>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAppUISchemaLinks
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAppUISchemaLinks(response: ResponseContext): Promise<ApplicationLayouts>;
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
     * @params response Response returned by the server for a request to getLogStreamSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  getLogStreamSchema(response: ResponseContext): Promise<LogStreamSchema>;
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
     * @params response Response returned by the server for a request to listLogStreamSchemas
     * @throws ApiException if the response code was not in [200, 299]
     */
  listLogStreamSchemas(response: ResponseContext): Promise<Array<LogStreamSchema>>;
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
