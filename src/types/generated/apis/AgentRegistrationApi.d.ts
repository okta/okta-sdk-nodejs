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
import { AIAgent } from '../models/AIAgent';
import { AIAgentOperationListResponse } from '../models/AIAgentOperationListResponse';
import { AIAgentOperationResponse } from '../models/AIAgentOperationResponse';
import { CreateAIAgentRequest } from '../models/CreateAIAgentRequest';
import { ListAIAgents200Response } from '../models/ListAIAgents200Response';
import { PatchAIAgentRequest } from '../models/PatchAIAgentRequest';
import { UpdateAIAgentRequest } from '../models/UpdateAIAgentRequest';
/**
 * no description
 */
export declare class AgentRegistrationApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an AI agent
     * Activate an AI agent
     * @param agentId ID of the AI agent
     */
  activateAIAgent(agentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an AI agent
     * Deactivate an AI agent
     * @param agentId ID of the AI agent
     */
  deactivateAIAgent(agentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an AI agent
     * Delete an AI agent
     * @param agentId ID of the AI agent
     */
  deleteAIAgent(agentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an AI agent
     * Retrieve an AI agent
     * @param agentId ID of the AI agent
     */
  getAIAgent(agentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an AI agent operation and its status
     * Retrieve an AI agent operation
     * @param operationId ID of the AI agent operation
     */
  getAIAgentOperation(operationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all AI agent operations. Operations are sorted in descending order from most recent to oldest by creation time.
     * List all AI agent operations
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  listAIAgentOperations(after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all AI agents
     * List all AI agents
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     * @param search Searches for AI agents with a filtering expression that supports: *  &#x60;eq&#x60; operator for the &#x60;status&#x60; and &#x60;appId&#x60; property *  &#x60;sw&#x60;, &#x60;co&#x60; and &#x60;eq&#x60; operator for the &#x60;profile.name&#x60; property  &gt; **Note:** Query parameter percent encoding is required. See [Special characters](https://developer.okta.com/docs/api/#special-characters).
     */
  listAIAgents(after?: string, limit?: number, search?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Registers an AI agent
     * Register an AI agent
     * @param body
     */
  registerAIAgent(body: CreateAIAgentRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an AI agent
     * Replace an AI agent
     * @param agentId ID of the AI agent
     * @param body
     */
  replaceAIAgent(agentId: string, body: UpdateAIAgentRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an AI agent. Use this request to perform partial updates on AI agent profile properties.
     * Update an AI agent
     * @param agentId ID of the AI agent
     * @param body
     */
  updateAIAgent(agentId: string, body: PatchAIAgentRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class AgentRegistrationApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAIAgent
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateAIAgent(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAIAgent
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateAIAgent(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAIAgent
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAIAgent(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAIAgent
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAIAgent(response: ResponseContext): Promise<AIAgent>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAIAgentOperation
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAIAgentOperation(response: ResponseContext): Promise<AIAgentOperationResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAIAgentOperations
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAIAgentOperations(response: ResponseContext): Promise<AIAgentOperationListResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAIAgents
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAIAgents(response: ResponseContext): Promise<ListAIAgents200Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to registerAIAgent
     * @throws ApiException if the response code was not in [200, 299]
     */
  registerAIAgent(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAIAgent
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceAIAgent(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAIAgent
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateAIAgent(response: ResponseContext): Promise<void>;
}
