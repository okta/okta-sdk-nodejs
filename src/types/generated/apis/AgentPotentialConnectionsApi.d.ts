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
import { PotentialConnectionList } from '../models/PotentialConnectionList';
/**
 * no description
 */
export declare class AgentPotentialConnectionsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Lists all global resource connections of a specific connection type that an AI agent can potentially connect to  Only resource connections returned from this request are valid for [creating a connection](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentConnections/#tag/AgentConnections/operation/createManagedConnection) with a matching connection-type protocol.  Include the required [`filter`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentPotentialConnections/#tag/AgentPotentialConnections/operation/listPotentialConnectionsByType!in=query&path=filter&t=request) query parameter to return potential connections with a specific `connectionType`. You can also use the [`match`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentPotentialConnections/#tag/AgentPotentialConnections/operation/listPotentialConnectionsByType!in=query&path=match&t=request) query parameter to apply fuzzy-matching on the returned list of potential connections.
     * List all potential connections
     * @param filter A required [filter](/#filter) expression to return a specific type of potential connections.  The expression supports the &#x60;eq&#x60; [operator](/#operators) and the following &#x60;connectionType&#x60; values: * &#x60;IDENTITY_ASSERTION_CUSTOM_AS&#x60; * &#x60;STS_VAULT_SECRET&#x60; * &#x60;STS_SERVICE_ACCOUNT&#x60;  You can combine multiple expressions using the &#x60;and&#x60; operator to narrow results. For example, filter by connection type and app instance ORN for &#x60;STS_SERVICE_ACCOUNT&#x60; connections.  **Note:** Query parameter percent encoding is required. See [Special characters](/#special-characters).
     * @param match A case-insensitive substring for fuzzy-match that\&#39;s prefix-friendly
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  listPotentialConnectionsByType(filter: string, match?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class AgentPotentialConnectionsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPotentialConnectionsByType
     * @throws ApiException if the response code was not in [200, 299]
     */
  listPotentialConnectionsByType(response: ResponseContext): Promise<PotentialConnectionList>;
}
