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
import { LogStream } from '../models/LogStream';
import { LogStreamPutSchema } from '../models/LogStreamPutSchema';
/**
 * no description
 */
export declare class LogStreamApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a log stream by `logStreamId`
     * Activate a log stream
     * @param logStreamId Unique identifier for the log stream
     */
  activateLogStream(logStreamId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new log stream object
     * Create a log stream
     * @param instance
     */
  createLogStream(instance: LogStream, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a log stream by `logStreamId`
     * Deactivate a log stream
     * @param logStreamId Unique identifier for the log stream
     */
  deactivateLogStream(logStreamId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a log stream object from your org by ID
     * Delete a log stream
     * @param logStreamId Unique identifier for the log stream
     */
  deleteLogStream(logStreamId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a log stream object by ID
     * Retrieve a log stream
     * @param logStreamId Unique identifier for the log stream
     */
  getLogStream(logStreamId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all log stream objects in your org. You can request a paginated list or a subset of log streams that match a supported filter expression.
     * List all log streams
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     * @param filter An expression that [filters](/#filter) the returned objects. You can only use the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60; properties in the filter expression.
     */
  listLogStreams(after?: string, limit?: number, filter?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the log stream object properties for a given ID.  This operation is typically used to update the configuration of a log stream. Depending on the type of log stream you want to update, certain properties can\'t be modified after the log stream is initially created. Use the [Retrieve the log stream schema for the schema type](/openapi/okta-management/management/tag/Schema/#tag/Schema/operation/getLogStreamSchema) request to determine which properties you can update for the specific log stream type. Log stream properties with the `\"writeOnce\" : true` attribute can\'t be updated after creation. You must still specify these `writeOnce` properties in the request body with the original values in the PUT request.  > **Note:** You don\'t have to specify properties that have both the `\"writeOnce\": true` and the `\"writeOnly\": true` attributes in the PUT request body. These property values are ignored even if you add them in the PUT request body.
     * Replace a log stream
     * @param logStreamId Unique identifier for the log stream
     * @param instance
     */
  replaceLogStream(logStreamId: string, instance: LogStreamPutSchema, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogStreamApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateLogStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateLogStream(response: ResponseContext): Promise<LogStream>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  createLogStream(response: ResponseContext): Promise<LogStream>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateLogStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateLogStream(response: ResponseContext): Promise<LogStream>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteLogStream(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  getLogStream(response: ResponseContext): Promise<LogStream>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogStreams
     * @throws ApiException if the response code was not in [200, 299]
     */
  listLogStreams(response: ResponseContext): Promise<Array<LogStream>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceLogStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceLogStream(response: ResponseContext): Promise<LogStream>;
}
