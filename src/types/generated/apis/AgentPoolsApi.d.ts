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
import { AgentPool } from '../models/AgentPool';
import { AgentPoolUpdate } from '../models/AgentPoolUpdate';
import { AgentPoolUpdateSetting } from '../models/AgentPoolUpdateSetting';
import { AgentType } from '../models/AgentType';
/**
 * no description
 */
export declare class AgentPoolsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a scheduled agent pool update
     * Activate an agent pool update
     * @param poolId ID of the agent pool for which the settings apply to
     * @param updateId ID of the update
     */
  activateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an agent pool update
     * Create an agent pool update
     * @param poolId ID of the agent pool for which the settings apply to
     * @param agentPoolUpdate
     */
  createAgentPoolsUpdate(poolId: string, agentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates scheduled agent pool update
     * Deactivate an agent pool update
     * @param poolId ID of the agent pool for which the settings apply to
     * @param updateId ID of the update
     */
  deactivateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes agent pool update
     * Delete an agent pool update
     * @param poolId ID of the agent pool for which the settings apply to
     * @param updateId ID of the update
     */
  deleteAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an agent pool update by its `updateId`
     * Retrieve an agent pool update by ID
     * @param poolId ID of the agent pool for which the settings apply to
     * @param updateId ID of the update
     */
  getAgentPoolsUpdateInstance(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the current state of the agent pool update instance settings
     * Retrieve an agent pool update\'s settings
     * @param poolId ID of the agent pool for which the settings apply to
     */
  getAgentPoolsUpdateSettings(poolId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all agent pools with pagination support
     * List all agent pools
     * @param limitPerPoolType Maximum number of agent pools returned
     * @param poolType Agent type to search for
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     */
  listAgentPools(limitPerPoolType?: number, poolType?: AgentType, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all agent pool updates
     * List all agent pool updates
     * @param poolId ID of the agent pool for which the settings apply to
     * @param scheduled Return only scheduled or ad-hoc updates. If this parameter isn\&#39;t provided, Okta returns the entire list of updates.
     */
  listAgentPoolsUpdates(poolId: string, scheduled?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Pauses a running or queued agent pool update
     * Pause an agent pool update
     * @param poolId ID of the agent pool for which the settings apply to
     * @param updateId ID of the update
     */
  pauseAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Resumes a running or queued agent pool update
     * Resume an agent pool update
     * @param poolId ID of the agent pool for which the settings apply to
     * @param updateId ID of the update
     */
  resumeAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retries an agent pool update if the update is unsuccessful or communication with Okta was interrupted during an agent auto-update
     * Retry an agent pool update
     * @param poolId ID of the agent pool for which the settings apply to
     * @param updateId ID of the update
     */
  retryAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Stops an agent pool update
     * Stop an agent pool update
     * @param poolId ID of the agent pool for which the settings apply to
     * @param updateId ID of the update
     */
  stopAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an agent pool update instance and returns the latest agent pool update
     * Update an agent pool update by ID
     * @param poolId ID of the agent pool for which the settings apply to
     * @param updateId ID of the update
     * @param agentPoolUpdate
     */
  updateAgentPoolsUpdate(poolId: string, updateId: string, agentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an agent pool update instance settings
     * Update an agent pool update settings
     * @param poolId ID of the agent pool for which the settings apply to
     * @param agentPoolUpdateSetting
     */
  updateAgentPoolsUpdateSettings(poolId: string, agentPoolUpdateSetting: AgentPoolUpdateSetting, _options?: Configuration): Promise<RequestContext>;
}
export declare class AgentPoolsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAgentPoolsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateAgentPoolsUpdate(response: ResponseContext): Promise<AgentPoolUpdate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAgentPoolsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAgentPoolsUpdate(response: ResponseContext): Promise<AgentPoolUpdate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAgentPoolsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateAgentPoolsUpdate(response: ResponseContext): Promise<AgentPoolUpdate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAgentPoolsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAgentPoolsUpdate(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAgentPoolsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAgentPoolsUpdateInstance(response: ResponseContext): Promise<AgentPoolUpdate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAgentPoolsUpdateSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAgentPoolsUpdateSettings(response: ResponseContext): Promise<AgentPoolUpdateSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAgentPools
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAgentPools(response: ResponseContext): Promise<Array<AgentPool>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAgentPoolsUpdates
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAgentPoolsUpdates(response: ResponseContext): Promise<Array<AgentPoolUpdate>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pauseAgentPoolsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
  pauseAgentPoolsUpdate(response: ResponseContext): Promise<AgentPoolUpdate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resumeAgentPoolsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
  resumeAgentPoolsUpdate(response: ResponseContext): Promise<AgentPoolUpdate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retryAgentPoolsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
  retryAgentPoolsUpdate(response: ResponseContext): Promise<AgentPoolUpdate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to stopAgentPoolsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
  stopAgentPoolsUpdate(response: ResponseContext): Promise<AgentPoolUpdate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAgentPoolsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateAgentPoolsUpdate(response: ResponseContext): Promise<AgentPoolUpdate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAgentPoolsUpdateSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateAgentPoolsUpdateSettings(response: ResponseContext): Promise<AgentPoolUpdateSetting>;
}
