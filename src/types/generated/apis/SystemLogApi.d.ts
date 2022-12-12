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
import { LogEvent } from '../models/LogEvent';
/**
 * no description
 */
export declare class SystemLogApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Lists all system log events. The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
     * List all System Log Events
     * @param since
     * @param until
     * @param filter
     * @param q
     * @param limit
     * @param sortOrder
     * @param after
     */
  listLogEvents(since?: Date, until?: Date, filter?: string, q?: string, limit?: number, sortOrder?: string, after?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class SystemLogApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
  listLogEvents(response: ResponseContext): Promise<Array<LogEvent>>;
}
