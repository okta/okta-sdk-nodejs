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
import { ManagedConnection } from '../models/ManagedConnection';
import { ManagedConnectionCreatable } from '../models/ManagedConnectionCreatable';
import { ManagedConnectionList } from '../models/ManagedConnectionList';
import { ManagedConnectionPatchable } from '../models/ManagedConnectionPatchable';
/**
 * no description
 */
export declare class AgentConnectionsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a managed connection for the agent
     * Activate a managed connection
     * @param agentId ID of the agent
     * @param connectionId ID of the connection
     */
  activateManagedConnection(agentId: string, connectionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a managed connection for the agent
     * Create a managed connection
     * @param agentId ID of the agent
     * @param managedConnectionCreatable
     */
  createManagedConnection(agentId: string, managedConnectionCreatable: ManagedConnectionCreatable, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a managed connection for the agent
     * Deactivate a managed connection
     * @param agentId ID of the agent
     * @param connectionId ID of the connection
     */
  deactivateManagedConnection(agentId: string, connectionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a managed connection for the agent
     * Delete an agent connection
     * @param agentId ID of the agent
     * @param connectionId ID of the connection
     */
  deleteManagedConnection(agentId: string, connectionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a connection for the agent
     * Retrieve an agent connection
     * @param agentId ID of the agent
     * @param connectionId ID of the connection
     */
  getManagedConnection(agentId: string, connectionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all connections for the agent
     * List all agent connections
     * @param agentId ID of the agent
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  listConnections(agentId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a managed connection for the agent
     * Update a managed connection
     * @param agentId ID of the agent
     * @param connectionId ID of the connection
     * @param managedConnectionPatchable
     */
  updateManagedConnection(agentId: string, connectionId: string, managedConnectionPatchable: ManagedConnectionPatchable, _options?: Configuration): Promise<RequestContext>;
}
export declare class AgentConnectionsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateManagedConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateManagedConnection(response: ResponseContext): Promise<ManagedConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createManagedConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  createManagedConnection(response: ResponseContext): Promise<ManagedConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateManagedConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateManagedConnection(response: ResponseContext): Promise<ManagedConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteManagedConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteManagedConnection(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getManagedConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  getManagedConnection(response: ResponseContext): Promise<ManagedConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
  listConnections(response: ResponseContext): Promise<ManagedConnectionList>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateManagedConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateManagedConnection(response: ResponseContext): Promise<ManagedConnection>;
}
