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
import { CreateUISchema } from '../models/CreateUISchema';
import { UISchemasResponseObject } from '../models/UISchemasResponseObject';
import { UpdateUISchema } from '../models/UpdateUISchema';
/**
 * no description
 */
export declare class UISchemaApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates an input for an enrollment form
     * Create a UI schema
     * @param uischemabody
     */
  createUISchema(uischemabody: CreateUISchema, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a UI Schema by `id`
     * Delete a UI schema
     * @param id The unique ID of the UI Schema
     */
  deleteUISchemas(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the UI schema for an application given `appName`, `section` and `operation`
     * Retrieve the UI schema for a section
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param section
     * @param operation
     */
  getAppUISchema(appName: string, section: string, operation: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the links for UI schemas for an application given `appName`
     * Retrieve the links for UI schemas for an application
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  getAppUISchemaLinks(appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a UI Schema by `id`
     * Retrieve a UI schema
     * @param id The unique ID of the UI Schema
     */
  getUISchema(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all UI Schemas in your org
     * List all UI schemas
     */
  listUISchemas(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a UI Schema by `id`
     * Replace a UI schema
     * @param id The unique ID of the UI Schema
     * @param updateUISchemaBody
     */
  replaceUISchemas(id: string, updateUISchemaBody: UpdateUISchema, _options?: Configuration): Promise<RequestContext>;
}
export declare class UISchemaApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUISchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  createUISchema(response: ResponseContext): Promise<UISchemasResponseObject>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUISchemas
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteUISchemas(response: ResponseContext): Promise<void>;
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
     * @params response Response returned by the server for a request to getUISchema
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUISchema(response: ResponseContext): Promise<UISchemasResponseObject>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUISchemas
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUISchemas(response: ResponseContext): Promise<Array<UISchemasResponseObject>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceUISchemas
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceUISchemas(response: ResponseContext): Promise<UISchemasResponseObject>;
}
