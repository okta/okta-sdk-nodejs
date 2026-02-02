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
import { AgentJsonSigningKeyRequest } from '../models/AgentJsonSigningKeyRequest';
import { AgentJsonSigningKeyResponse } from '../models/AgentJsonSigningKeyResponse';
import { ListAgentJwk200Response } from '../models/ListAgentJwk200Response';
/**
 * no description
 */
export declare class AgentPublicKeyApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an AI agent\'s JSON Web Key by `keyId`  > **Note:** You can only have one active encryption key at any given time for an AI agent. When you activate an inactive key, the currently active key is automatically deactivated.
     * Activate an AI agent JSON Web Key
     * @param agentId ID of the AI agent
     * @param keyId Unique &#x60;id&#x60; of the AI agent JSON Web Key
     */
  activateAgentJsonWebKey(agentId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds a new JSON Web Key (JWK) to the AI agent\'s JWK Set (JWKS)
     * Add a JSON Web Key
     * @param agentId ID of the AI agent
     * @param agentJsonSigningKeyRequest
     */
  addAgentJwk(agentId: string, agentJsonSigningKeyRequest: AgentJsonSigningKeyRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an AI agent\'s JSON Web Key by `keyId`  > **Note:** You can only deactivate signing keys. You can\'t deactivate the active encryption key if the client has ID token encryption enabled. However, you can activate another encryption key, which makes the current key inactive.
     * Deactivate an AI agent JSON Web Key
     * @param agentId ID of the AI agent
     * @param keyId Unique &#x60;id&#x60; of the AI agent JSON Web Key
     */
  deactivateAgentJsonWebKey(agentId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an AI agent\'s JSON Web Key by `keyId`. You can only delete an inactive key.
     * Delete an AI agent JSON Web Key
     * @param agentId ID of the AI agent
     * @param keyId Unique &#x60;id&#x60; of the AI agent JSON Web Key
     */
  deleteAgentJwk(agentId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an AI agent\'s JSON Web Key by `keyId`
     * Retrieve an AI agent JSON Web Key
     * @param agentId ID of the AI agent
     * @param keyId Unique &#x60;id&#x60; of the AI agent JSON Web Key
     */
  getAgentJwk(agentId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all JSON Web Keys (JWK) for an AI agent
     * List all AI agent JSON Web Keys
     * @param agentId ID of the AI agent
     */
  listAgentJwk(agentId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class AgentPublicKeyApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAgentJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateAgentJsonWebKey(response: ResponseContext): Promise<AgentJsonSigningKeyResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addAgentJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  addAgentJwk(response: ResponseContext): Promise<AgentJsonSigningKeyResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAgentJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateAgentJsonWebKey(response: ResponseContext): Promise<AgentJsonSigningKeyResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAgentJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAgentJwk(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAgentJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAgentJwk(response: ResponseContext): Promise<AgentJsonSigningKeyResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAgentJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAgentJwk(response: ResponseContext): Promise<ListAgentJwk200Response>;
}
