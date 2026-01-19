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
import { UnconfirmedUserResponseSchema } from '../models/UnconfirmedUserResponseSchema';
/**
 * no description
 */
export declare class UnconfirmedUsersApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Lists all unconfirmed users for an app
     * List all unconfirmed users
     * @param appId Application ID
     * @param after Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
     * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
     */
  listUnconfirmedUsers(appId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class UnconfirmedUsersApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUnconfirmedUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUnconfirmedUsers(response: ResponseContext): Promise<UnconfirmedUserResponseSchema>;
}
