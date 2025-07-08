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
import { GroupSchema } from '../models/GroupSchema';
import { LogStreamSchema } from '../models/LogStreamSchema';
import { LogStreamType } from '../models/LogStreamType';
import { UserSchema } from '../models/UserSchema';
/**
 * no description
 */
export declare class SchemaApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the default schema for an app user.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
     * Retrieve the default app user schema for an app
     * @param appInstanceId Application ID
     */
  getApplicationUserSchema(appInstanceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the group schema  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
     * Retrieve the default group schema
     */
  getGroupSchema(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the schema for a log stream type. The `logStreamType` element in the URL specifies the log stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
     * Retrieve the log stream schema for the schema type
     * @param logStreamType
     */
  getLogStreamSchema(logStreamType: LogStreamType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the schema for a user type
     * Retrieve a user schema
     * @param schemaId Schema ID. You can also use &#x60;default&#x60; to refer to the default user type schema.
     */
  getUserSchema(schemaId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the schema for all log stream types visible for this org
     * List the log stream schemas
     */
  listLogStreamSchemas(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the app user schema. This updates, adds, or removes one or more custom profile properties or the nullability of a base property in the app user schema for an app. Changing a base property\'s nullability (for example, the value of its `required` field) is allowed only if it is nullable in the default predefined schema for the app.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
     * Update the app user profile schema for an app
     * @param appInstanceId Application ID
     * @param body
     */
  updateApplicationUserProfile(appInstanceId: string, body?: UserSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the group profile schema. This updates, adds, or removes one or more custom profile properties in a group schema. Currently Okta does not support changing base group profile properties.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
     * Update the group profile schema
     * @param groupSchema
     */
  updateGroupSchema(groupSchema?: GroupSchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a user schema. Use this request to update, add, or remove one or more profile properties in a user schema. If you specify `default` for the `schemaId`, updates will apply to the default user type.  Unlike custom user profile properties, limited changes are allowed to base user profile properties (permissions, nullability of the `firstName` and `lastName` properties, or pattern for `login`). You can\'t remove a property from the default schema if it\'s being referenced as a [`matchAttribute`](/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/createIdentityProvider!path=policy/subject/matchAttribute&t=request) in `SAML2` IdPs. Currently, all validation of SAML assertions are only performed against the default user type.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.
     * Update a user schema
     * @param schemaId Schema ID. You can also use &#x60;default&#x60; to refer to the default user type schema.
     * @param userSchema
     */
  updateUserProfile(schemaId: string, userSchema: UserSchema, _options?: Configuration): Promise<RequestContext>;
}
export declare class SchemaApiResponseProcessor {
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
