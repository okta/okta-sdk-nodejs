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
/**
 * no description
 */
export declare class LogStreamApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a log stream by `logStreamId`
     * Activate a Log Stream
     * @param logStreamId id of the log stream
     */
  activateLogStream(logStreamId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new log stream
     * Create a Log Stream
     * @param instance
     */
  createLogStream(instance: LogStream, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a log stream by `logStreamId`
     * Deactivate a Log Stream
     * @param logStreamId id of the log stream
     */
  deactivateLogStream(logStreamId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a log stream by `logStreamId`
     * Delete a Log Stream
     * @param logStreamId id of the log stream
     */
  deleteLogStream(logStreamId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a log stream by `logStreamId`
     * Retrieve a Log Stream
     * @param logStreamId id of the log stream
     */
  getLogStream(logStreamId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all log streams. You can request a paginated list or a subset of Log Streams that match a supported filter expression.
     * List all Log Streams
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     * @param limit A limit on the number of objects to return.
     * @param filter SCIM filter expression that filters the results. This expression only supports the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60;.
     */
  listLogStreams(after?: string, limit?: number, filter?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a log stream by `logStreamId`
     * Replace a Log Stream
     * @param logStreamId id of the log stream
     * @param instance
     */
  replaceLogStream(logStreamId: string, instance: LogStream, _options?: Configuration): Promise<RequestContext>;
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
