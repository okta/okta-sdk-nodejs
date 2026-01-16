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
     * Lists all System Log events  See [System Log query](https://developer.okta.com/docs/reference/system-log-query/) for further details and examples, and [System Log filters and search](https://help.okta.com/okta_help.htm?type=oie&id=csh-syslog-filters) for common use cases.  By default, 100 System Log events are returned. If there are more events, see the [header link](https://developer.okta.com/docs/api/#link-header) for the `next` link, or increase the number of returned objects using the `limit` parameter.  >**Note:** The value of the `clientSecret` property in the System Log is secured by a hashing function, and isn\'t the value used during authentication.
     * List all System Log events
     * @param since Filters the lower time bound of the log events &#x60;published&#x60; property for bounded queries or persistence time for polling queries
     * @param until Filters the upper time bound of the log events &#x60;published&#x60; property for bounded queries or persistence time for polling queries.
     * @param after Retrieves the next page of results. Okta returns a link in the HTTP Header (&#x60;rel&#x3D;next&#x60;) that includes the after query parameter
     * @param filter Filter expression that filters the results. All operators except [ ] are supported. See [Filter](https://developer.okta.com/docs/api/#filter) and [Operators](https://developer.okta.com/docs/api/#operators).
     * @param q Filters log events results by one or more case insensitive keywords.
     * @param limit Sets the number of results that are returned in the response
     * @param sortOrder The order of the returned events that are sorted by the &#x60;published&#x60; property
     */
  listLogEvents(since?: string, until?: string, after?: string, filter?: string, q?: string, limit?: number, sortOrder?: 'ASCENDING' | 'DESCENDING', _options?: Configuration): Promise<RequestContext>;
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
