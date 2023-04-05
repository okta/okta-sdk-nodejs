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
     * Activates scheduled Agent pool update
     * Activate an Agent Pool update
     * @param poolId Id of the agent pool for which the settings will apply
     * @param updateId Id of the update
     */
  activateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.
     * Create an Agent Pool update
     * @param poolId Id of the agent pool for which the settings will apply
     * @param AgentPoolUpdate
     */
  createAgentPoolsUpdate(poolId: string, AgentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates scheduled Agent pool update
     * Deactivate an Agent Pool update
     * @param poolId Id of the agent pool for which the settings will apply
     * @param updateId Id of the update
     */
  deactivateAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes Agent pool update
     * Delete an Agent Pool update
     * @param poolId Id of the agent pool for which the settings will apply
     * @param updateId Id of the update
     */
  deleteAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves Agent pool update from updateId
     * Retrieve an Agent Pool update by id
     * @param poolId Id of the agent pool for which the settings will apply
     * @param updateId Id of the update
     */
  getAgentPoolsUpdateInstance(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the current state of the agent pool update instance settings
     * Retrieve an Agent Pool update's settings
     * @param poolId Id of the agent pool for which the settings will apply
     */
  getAgentPoolsUpdateSettings(poolId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all agent pools with pagination support
     * List all Agent Pools
     * @param limitPerPoolType Maximum number of AgentPools being returned
     * @param poolType Agent type to search for
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     */
  listAgentPools(limitPerPoolType?: number, poolType?: AgentType, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all agent pool updates
     * List all Agent Pool updates
     * @param poolId Id of the agent pool for which the settings will apply
     * @param scheduled Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates.
     */
  listAgentPoolsUpdates(poolId: string, scheduled?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Pauses running or queued Agent pool update
     * Pause an Agent Pool update
     * @param poolId Id of the agent pool for which the settings will apply
     * @param updateId Id of the update
     */
  pauseAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Resumes running or queued Agent pool update
     * Resume an Agent Pool update
     * @param poolId Id of the agent pool for which the settings will apply
     * @param updateId Id of the update
     */
  resumeAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retries Agent pool update
     * Retry an Agent Pool update
     * @param poolId Id of the agent pool for which the settings will apply
     * @param updateId Id of the update
     */
  retryAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Stops Agent pool update
     * Stop an Agent Pool update
     * @param poolId Id of the agent pool for which the settings will apply
     * @param updateId Id of the update
     */
  stopAgentPoolsUpdate(poolId: string, updateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates Agent pool update and return latest agent pool update
     * Update an Agent Pool update by id
     * @param poolId Id of the agent pool for which the settings will apply
     * @param updateId Id of the update
     * @param AgentPoolUpdate
     */
  updateAgentPoolsUpdate(poolId: string, updateId: string, AgentPoolUpdate: AgentPoolUpdate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an agent pool update settings
     * Update an Agent Pool update settings
     * @param poolId Id of the agent pool for which the settings will apply
     * @param AgentPoolUpdateSetting
     */
  updateAgentPoolsUpdateSettings(poolId: string, AgentPoolUpdateSetting: AgentPoolUpdateSetting, _options?: Configuration): Promise<RequestContext>;
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
