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


'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PromisePolicyApi = exports.PromiseOrgSettingApi = exports.PromiseOrgCreatorApi = exports.PromiseOperationsIntegrationApi = exports.PromiseOktaPersonalSettingsApi = exports.PromiseOktaManagedUserAccountApi = exports.PromiseOktaApplicationSettingsApi = exports.PromiseOAuth2ResourceServerCredentialsKeysApi = exports.PromiseNetworkZoneApi = exports.PromiseLogStreamApi = exports.PromiseLinkedObjectApi = exports.PromiseInlineHookApi = exports.PromiseIdentitySourceApi = exports.PromiseIdentityProviderApi = exports.PromiseHookKeyApi = exports.PromiseGroupPushMappingApi = exports.PromiseGroupApi = exports.PromiseGovernanceBundleApi = exports.PromiseFeatureApi = exports.PromiseEventHookApi = exports.PromiseEmailServerApi = exports.PromiseEmailDomainApi = exports.PromiseDisasterRecoveryApi = exports.PromiseDirectoriesIntegrationApi = exports.PromiseDevicePostureCheckApi = exports.PromiseDeviceIntegrationsApi = exports.PromiseDeviceAssuranceApi = exports.PromiseDeviceAccessApi = exports.PromiseDeviceApi = exports.PromiseCustomizationApi = exports.PromiseCustomTelephonyProviderApi = exports.PromiseCustomRoleApi = exports.PromiseCustomDomainApi = exports.PromiseCAPTCHAApi = exports.PromiseBehaviorApi = exports.PromiseAuthorizationServerApi = exports.PromiseAuthenticatorApi = exports.PromiseAttackProtectionApi = exports.PromiseAssociatedDomainCustomizationsApi = exports.PromiseApplicationSSOPublicKeysApi = exports.PromiseApplicationInterclientTrustMappingsApi = exports.PromiseApplicationCrossAppAccessConnectionsApi = exports.PromiseApplicationApi = exports.PromiseApiTokenApi = exports.PromiseApiServiceIntegrationsApi = exports.PromiseAgentRegistrationApi = exports.PromiseAgentPublicKeyApi = exports.PromiseAgentPotentialConnectionsApi = exports.PromiseAgentPoolsApi = exports.PromiseAgentConnectionsApi = void 0;
exports.PromiseYourOinIntegrationsApi = exports.PromiseWebAuthnPreregistrationApi = exports.PromiseUserTypeApi = exports.PromiseUserFactorApi = exports.PromiseUserAuthenticatorEnrollmentsApi = exports.PromiseUserApi = exports.PromiseUnconfirmedUsersApi = exports.PromiseUISchemaApi = exports.PromiseTrustedOriginApi = exports.PromiseThreatInsightApi = exports.PromiseTemplateApi = exports.PromiseSystemLogApi = exports.PromiseSubscriptionApi = exports.PromiseSessionApi = exports.PromiseServiceAccountApi = exports.PromiseSchemaApi = exports.PromiseSSFTransmitterApi = exports.PromiseSSFSecurityEventTokenApi = exports.PromiseSSFReceiverApi = exports.PromiseRoleTargetApi = exports.PromiseRoleAssignmentApi = exports.PromiseRiskProviderApi = exports.PromiseRiskEventApi = exports.PromiseResourceSetApi = exports.PromiseRealmAssignmentApi = exports.PromiseRealmApi = exports.PromiseRateLimitSettingsApi = exports.PromisePushProviderApi = exports.PromiseProfileMappingApi = exports.PromisePrivilegedResourceApi = exports.PromisePrincipalRateLimitApi = void 0;
const ObservableAPI_1 = require('./ObservableAPI');
class PromiseAgentConnectionsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_1.ObservableAgentConnectionsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a managed connection for the agent
      * Activate a managed connection
      * @param agentId ID of the agent
      * @param connectionId ID of the connection
      */
  activateManagedConnection(agentId, connectionId, _options) {
    const result = this.api.activateManagedConnection(agentId, connectionId, _options);
    return result.toPromise();
  }
  /**
      * Creates a managed connection for the agent
      * Create a managed connection
      * @param agentId ID of the agent
      * @param managedConnectionCreatable
      */
  createManagedConnection(agentId, managedConnectionCreatable, _options) {
    const result = this.api.createManagedConnection(agentId, managedConnectionCreatable, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a managed connection for the agent
      * Deactivate a managed connection
      * @param agentId ID of the agent
      * @param connectionId ID of the connection
      */
  deactivateManagedConnection(agentId, connectionId, _options) {
    const result = this.api.deactivateManagedConnection(agentId, connectionId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a managed connection for the agent
      * Delete an agent connection
      * @param agentId ID of the agent
      * @param connectionId ID of the connection
      */
  deleteManagedConnection(agentId, connectionId, _options) {
    const result = this.api.deleteManagedConnection(agentId, connectionId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a connection for the agent
      * Retrieve an agent connection
      * @param agentId ID of the agent
      * @param connectionId ID of the connection
      */
  getManagedConnection(agentId, connectionId, _options) {
    const result = this.api.getManagedConnection(agentId, connectionId, _options);
    return result.toPromise();
  }
  /**
      * Lists all connections for the agent
      * List all agent connections
      * @param agentId ID of the agent
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listConnections(agentId, after, limit, _options) {
    const result = this.api.listConnections(agentId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Updates a managed connection for the agent
      * Update a managed connection
      * @param agentId ID of the agent
      * @param connectionId ID of the connection
      * @param managedConnectionPatchable
      */
  updateManagedConnection(agentId, connectionId, managedConnectionPatchable, _options) {
    const result = this.api.updateManagedConnection(agentId, connectionId, managedConnectionPatchable, _options);
    return result.toPromise();
  }
}
exports.PromiseAgentConnectionsApi = PromiseAgentConnectionsApi;
const ObservableAPI_2 = require('./ObservableAPI');
class PromiseAgentPoolsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_2.ObservableAgentPoolsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a scheduled agent pool update
      * Activate an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  activateAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.activateAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Creates an agent pool update
      * Create an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param agentPoolUpdate
      */
  createAgentPoolsUpdate(poolId, agentPoolUpdate, _options) {
    const result = this.api.createAgentPoolsUpdate(poolId, agentPoolUpdate, _options);
    return result.toPromise();
  }
  /**
      * Deactivates scheduled agent pool update
      * Deactivate an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  deactivateAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.deactivateAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Deletes agent pool update
      * Delete an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  deleteAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.deleteAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an agent pool update by its `updateId`
      * Retrieve an agent pool update by ID
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  getAgentPoolsUpdateInstance(poolId, updateId, _options) {
    const result = this.api.getAgentPoolsUpdateInstance(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the current state of the agent pool update instance settings
      * Retrieve an agent pool update\'s settings
      * @param poolId ID of the agent pool for which the settings apply to
      */
  getAgentPoolsUpdateSettings(poolId, _options) {
    const result = this.api.getAgentPoolsUpdateSettings(poolId, _options);
    return result.toPromise();
  }
  /**
      * Lists all agent pools with pagination support
      * List all agent pools
      * @param limitPerPoolType Maximum number of agent pools returned
      * @param poolType Agent type to search for
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      */
  listAgentPools(limitPerPoolType, poolType, after, _options) {
    const result = this.api.listAgentPools(limitPerPoolType, poolType, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all agent pool updates
      * List all agent pool updates
      * @param poolId ID of the agent pool for which the settings apply to
      * @param scheduled Return only scheduled or ad-hoc updates. If this parameter isn\&#39;t provided, Okta returns the entire list of updates.
      */
  listAgentPoolsUpdates(poolId, scheduled, _options) {
    const result = this.api.listAgentPoolsUpdates(poolId, scheduled, _options);
    return result.toPromise();
  }
  /**
      * Pauses a running or queued agent pool update
      * Pause an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  pauseAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.pauseAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Resumes a running or queued agent pool update
      * Resume an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  resumeAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.resumeAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Retries an agent pool update if the update is unsuccessful or communication with Okta was interrupted during an agent auto-update
      * Retry an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  retryAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.retryAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Stops an agent pool update
      * Stop an agent pool update
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      */
  stopAgentPoolsUpdate(poolId, updateId, _options) {
    const result = this.api.stopAgentPoolsUpdate(poolId, updateId, _options);
    return result.toPromise();
  }
  /**
      * Updates an agent pool update instance and returns the latest agent pool update
      * Update an agent pool update by ID
      * @param poolId ID of the agent pool for which the settings apply to
      * @param updateId ID of the update
      * @param agentPoolUpdate
      */
  updateAgentPoolsUpdate(poolId, updateId, agentPoolUpdate, _options) {
    const result = this.api.updateAgentPoolsUpdate(poolId, updateId, agentPoolUpdate, _options);
    return result.toPromise();
  }
  /**
      * Updates an agent pool update instance settings
      * Update an agent pool update settings
      * @param poolId ID of the agent pool for which the settings apply to
      * @param agentPoolUpdateSetting
      */
  updateAgentPoolsUpdateSettings(poolId, agentPoolUpdateSetting, _options) {
    const result = this.api.updateAgentPoolsUpdateSettings(poolId, agentPoolUpdateSetting, _options);
    return result.toPromise();
  }
}
exports.PromiseAgentPoolsApi = PromiseAgentPoolsApi;
const ObservableAPI_3 = require('./ObservableAPI');
class PromiseAgentPotentialConnectionsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_3.ObservableAgentPotentialConnectionsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Lists all global resource connections of a specific connection type that an AI agent can potentially connect to  Only resource connections returned from this request are valid for [creating a connection](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentConnections/#tag/AgentConnections/operation/createManagedConnection) with a matching connection-type protocol.  Include the required [`filter`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentPotentialConnections/#tag/AgentPotentialConnections/operation/listPotentialConnectionsByType!in=query&path=filter&t=request) query parameter to return potential connections with a specific `connectionType`. You can also use the [`match`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentPotentialConnections/#tag/AgentPotentialConnections/operation/listPotentialConnectionsByType!in=query&path=match&t=request) query parameter to apply fuzzy-matching on the returned list of potential connections.
      * List all potential connections
      * @param filter A required [filter](/#filter) expression to return a specific type of potential connections.  The expression supports the &#x60;eq&#x60; [operator](/#operators) and the following &#x60;connectionType&#x60; values: * &#x60;IDENTITY_ASSERTION_CUSTOM_AS&#x60; * &#x60;STS_VAULT_SECRET&#x60; * &#x60;STS_SERVICE_ACCOUNT&#x60;  You can combine multiple expressions using the &#x60;and&#x60; operator to narrow results. For example, filter by connection type and app instance ORN for &#x60;STS_SERVICE_ACCOUNT&#x60; connections.  **Note:** Query parameter percent encoding is required. See [Special characters](/#special-characters).
      * @param match A case-insensitive substring for fuzzy-match that\&#39;s prefix-friendly
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listPotentialConnectionsByType(filter, match, after, limit, _options) {
    const result = this.api.listPotentialConnectionsByType(filter, match, after, limit, _options);
    return result.toPromise();
  }
}
exports.PromiseAgentPotentialConnectionsApi = PromiseAgentPotentialConnectionsApi;
const ObservableAPI_4 = require('./ObservableAPI');
class PromiseAgentPublicKeyApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_4.ObservableAgentPublicKeyApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an AI agent\'s JSON Web Key by `keyId`  > **Note:** You can only have one active encryption key at any given time for an AI agent. When you activate an inactive key, the currently active key is automatically deactivated.
      * Activate an AI agent JSON Web Key
      * @param agentId ID of the AI agent
      * @param keyId Unique &#x60;id&#x60; of the AI agent JSON Web Key
      */
  activateAgentJsonWebKey(agentId, keyId, _options) {
    const result = this.api.activateAgentJsonWebKey(agentId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Adds a new JSON Web Key (JWK) to the AI agent\'s JWK Set (JWKS)
      * Add a JSON Web Key
      * @param agentId ID of the AI agent
      * @param agentJsonSigningKeyRequest
      */
  addAgentJwk(agentId, agentJsonSigningKeyRequest, _options) {
    const result = this.api.addAgentJwk(agentId, agentJsonSigningKeyRequest, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an AI agent\'s JSON Web Key by `keyId`  > **Note:** You can only deactivate signing keys. You can\'t deactivate the active encryption key if the client has ID token encryption enabled. However, you can activate another encryption key, which makes the current key inactive.
      * Deactivate an AI agent JSON Web Key
      * @param agentId ID of the AI agent
      * @param keyId Unique &#x60;id&#x60; of the AI agent JSON Web Key
      */
  deactivateAgentJsonWebKey(agentId, keyId, _options) {
    const result = this.api.deactivateAgentJsonWebKey(agentId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an AI agent\'s JSON Web Key by `keyId`. You can only delete an inactive key.
      * Delete an AI agent JSON Web Key
      * @param agentId ID of the AI agent
      * @param keyId Unique &#x60;id&#x60; of the AI agent JSON Web Key
      */
  deleteAgentJwk(agentId, keyId, _options) {
    const result = this.api.deleteAgentJwk(agentId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an AI agent\'s JSON Web Key by `keyId`
      * Retrieve an AI agent JSON Web Key
      * @param agentId ID of the AI agent
      * @param keyId Unique &#x60;id&#x60; of the AI agent JSON Web Key
      */
  getAgentJwk(agentId, keyId, _options) {
    const result = this.api.getAgentJwk(agentId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Lists all JSON Web Keys (JWK) for an AI agent
      * List all AI agent JSON Web Keys
      * @param agentId ID of the AI agent
      */
  listAgentJwk(agentId, _options) {
    const result = this.api.listAgentJwk(agentId, _options);
    return result.toPromise();
  }
}
exports.PromiseAgentPublicKeyApi = PromiseAgentPublicKeyApi;
const ObservableAPI_5 = require('./ObservableAPI');
class PromiseAgentRegistrationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_5.ObservableAgentRegistrationApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an AI agent
      * Activate an AI agent
      * @param agentId ID of the AI agent
      */
  activateAIAgent(agentId, _options) {
    const result = this.api.activateAIAgent(agentId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an AI agent
      * Deactivate an AI agent
      * @param agentId ID of the AI agent
      */
  deactivateAIAgent(agentId, _options) {
    const result = this.api.deactivateAIAgent(agentId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an AI agent
      * Delete an AI agent
      * @param agentId ID of the AI agent
      */
  deleteAIAgent(agentId, _options) {
    const result = this.api.deleteAIAgent(agentId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an AI agent
      * Retrieve an AI agent
      * @param agentId ID of the AI agent
      */
  getAIAgent(agentId, _options) {
    const result = this.api.getAIAgent(agentId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an AI agent operation and its status
      * Retrieve an AI agent operation
      * @param operationId ID of the AI agent operation
      */
  getAIAgentOperation(operationId, _options) {
    const result = this.api.getAIAgentOperation(operationId, _options);
    return result.toPromise();
  }
  /**
      * Lists all AI agent operations. Operations are sorted in descending order from most recent to oldest by creation time.
      * List all AI agent operations
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listAIAgentOperations(after, limit, _options) {
    const result = this.api.listAIAgentOperations(after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all AI agents
      * List all AI agents
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      * @param search Searches for AI agents with a filtering expression that supports: *  &#x60;eq&#x60; operator for the &#x60;status&#x60; and &#x60;appId&#x60; property *  &#x60;sw&#x60;, &#x60;co&#x60; and &#x60;eq&#x60; operator for the &#x60;profile.name&#x60; property  &gt; **Note:** Query parameter percent encoding is required. See [Special characters](https://developer.okta.com/docs/api/#special-characters).
      */
  listAIAgents(after, limit, search, _options) {
    const result = this.api.listAIAgents(after, limit, search, _options);
    return result.toPromise();
  }
  /**
      * Registers an AI agent
      * Register an AI agent
      * @param body
      */
  registerAIAgent(body, _options) {
    const result = this.api.registerAIAgent(body, _options);
    return result.toPromise();
  }
  /**
      * Replaces an AI agent
      * Replace an AI agent
      * @param agentId ID of the AI agent
      * @param body
      */
  replaceAIAgent(agentId, body, _options) {
    const result = this.api.replaceAIAgent(agentId, body, _options);
    return result.toPromise();
  }
  /**
      * Updates an AI agent. Use this request to perform partial updates on AI agent profile properties.
      * Update an AI agent
      * @param agentId ID of the AI agent
      * @param body
      */
  updateAIAgent(agentId, body, _options) {
    const result = this.api.updateAIAgent(agentId, body, _options);
    return result.toPromise();
  }
}
exports.PromiseAgentRegistrationApi = PromiseAgentRegistrationApi;
const ObservableAPI_6 = require('./ObservableAPI');
class PromiseApiServiceIntegrationsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_6.ObservableApiServiceIntegrationsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an API Service Integration instance Secret by `secretId`
      * Activate an API service integration instance secret
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
      */
  activateApiServiceIntegrationInstanceSecret(apiServiceId, secretId, _options) {
    const result = this.api.activateApiServiceIntegrationInstanceSecret(apiServiceId, secretId, _options);
    return result.toPromise();
  }
  /**
      * Creates and authorizes an API Service Integration instance
      * Create an API service integration instance
      * @param postAPIServiceIntegrationInstanceRequest
      */
  createApiServiceIntegrationInstance(postAPIServiceIntegrationInstanceRequest, _options) {
    const result = this.api.createApiServiceIntegrationInstance(postAPIServiceIntegrationInstanceRequest, _options);
    return result.toPromise();
  }
  /**
      * Creates an API Service Integration instance Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects.
      * Create an API service integration instance secret
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      */
  createApiServiceIntegrationInstanceSecret(apiServiceId, _options) {
    const result = this.api.createApiServiceIntegrationInstanceSecret(apiServiceId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an API Service Integration instance Secret by `secretId`
      * Deactivate an API service integration instance secret
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
      */
  deactivateApiServiceIntegrationInstanceSecret(apiServiceId, secretId, _options) {
    const result = this.api.deactivateApiServiceIntegrationInstanceSecret(apiServiceId, secretId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an API Service Integration instance by `id`. This operation also revokes access to scopes that were previously granted to this API Service Integration instance.
      * Delete an API service integration instance
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      */
  deleteApiServiceIntegrationInstance(apiServiceId, _options) {
    const result = this.api.deleteApiServiceIntegrationInstance(apiServiceId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an API Service Integration instance Secret by `secretId`. You can only delete an inactive Secret.
      * Delete an API service integration instance secret
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
      */
  deleteApiServiceIntegrationInstanceSecret(apiServiceId, secretId, _options) {
    const result = this.api.deleteApiServiceIntegrationInstanceSecret(apiServiceId, secretId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an API Service Integration instance by `id`
      * Retrieve an API service integration instance
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      */
  getApiServiceIntegrationInstance(apiServiceId, _options) {
    const result = this.api.getApiServiceIntegrationInstance(apiServiceId, _options);
    return result.toPromise();
  }
  /**
      * Lists all client secrets for an API Service Integration instance by `apiServiceId`
      * List all API service integration instance secrets
      * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
      */
  listApiServiceIntegrationInstanceSecrets(apiServiceId, _options) {
    const result = this.api.listApiServiceIntegrationInstanceSecrets(apiServiceId, _options);
    return result.toPromise();
  }
  /**
      * Lists all API Service Integration instances with a pagination option
      * List all API service integration instances
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      */
  listApiServiceIntegrationInstances(after, _options) {
    const result = this.api.listApiServiceIntegrationInstances(after, _options);
    return result.toPromise();
  }
}
exports.PromiseApiServiceIntegrationsApi = PromiseApiServiceIntegrationsApi;
const ObservableAPI_7 = require('./ObservableAPI');
class PromiseApiTokenApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_7.ObservableApiTokenApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the metadata for an active API token by `apiTokenId`
      * Retrieve an API token\'s metadata
      * @param apiTokenId id of the API Token
      */
  getApiToken(apiTokenId, _options) {
    const result = this.api.getApiToken(apiTokenId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the metadata of the active API tokens
      * List all API token metadata
      */
  listApiTokens(_options) {
    const result = this.api.listApiTokens(_options);
    return result.toPromise();
  }
  /**
      * Revokes an API token by `apiTokenId`
      * Revoke an API token
      * @param apiTokenId id of the API Token
      */
  revokeApiToken(apiTokenId, _options) {
    const result = this.api.revokeApiToken(apiTokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the API token provided in the Authorization header
      * Revoke the current API token
      */
  revokeCurrentApiToken(_options) {
    const result = this.api.revokeCurrentApiToken(_options);
    return result.toPromise();
  }
  /**
      * Upserts an API Token Network Condition by `apiTokenId`
      * Upsert an API token network condition
      * @param apiTokenId id of the API Token
      * @param apiTokenUpdate
      */
  upsertApiToken(apiTokenId, apiTokenUpdate, _options) {
    const result = this.api.upsertApiToken(apiTokenId, apiTokenUpdate, _options);
    return result.toPromise();
  }
}
exports.PromiseApiTokenApi = PromiseApiTokenApi;
const ObservableAPI_8 = require('./ObservableAPI');
class PromiseApplicationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_8.ObservableApplicationApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an inactive application
      * Activate an application
      * @param appId Application ID
      */
  activateApplication(appId, _options) {
    const result = this.api.activateApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Activates the default provisioning connection for an app
      * Activate the default provisioning connection
      * @param appId Application ID
      */
  activateDefaultProvisioningConnectionForApplication(appId, _options) {
    const result = this.api.activateDefaultProvisioningConnectionForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Assigns an app to an [app sign-in policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/), identified by `policyId`. If the app was previously assigned to another policy, this operation replaces that assignment with the updated policy identified by `policyId`.  > **Note:** When you [merge duplicate app sign-in policies](https://help.okta.com/okta_help.htm?type=oie&id=ext-merge-auth-policies), the policy and mapping CRUD operations may be unavailable during the consolidation. When the consolidation is complete, you receive an email with merged results.
      * Assign an app sign-in policy
      * @param appId Application ID
      * @param policyId &#x60;id&#x60; of the Policy
      */
  assignApplicationPolicy(appId, policyId, _options) {
    const result = this.api.assignApplicationPolicy(appId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Assigns a [Group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) to an app, which in turn assigns the app to each [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) that belongs to the group.  The resulting application user [scope](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/#tag/ApplicationUsers/operation/listApplicationUsers!c=200&path=scope&t=response) is `GROUP` since the assignment was from the group membership.
      * Assign an application group
      * @param appId Application ID
      * @param groupId The &#x60;id&#x60; of the group
      * @param applicationGroupAssignment
      */
  assignGroupToApplication(appId, groupId, applicationGroupAssignment, _options) {
    const result = this.api.assignGroupToApplication(appId, groupId, applicationGroupAssignment, _options);
    return result.toPromise();
  }
  /**
      * Assigns a user to an app for:    * SSO only<br>     Assignments to SSO apps typically don\'t include a user profile.     However, if your SSO app requires a profile but doesn\'t have provisioning enabled, you can add profile attributes in the request body.    * SSO and provisioning<br>     Assignments to SSO and provisioning apps typically include credentials and an app-specific profile.     Profile mappings defined for the app are applied first before applying any profile properties that are specified in the request body.     > **Notes:**     > * When Universal Directory is enabled, you can only specify profile properties that aren\'t defined in profile mappings.     > * Omit mapped properties during assignment to minimize assignment errors.
      * Assign an application user
      * @param appId Application ID
      * @param appUser
      */
  assignUserToApplication(appId, appUser, _options) {
    const result = this.api.assignUserToApplication(appId, appUser, _options);
    return result.toPromise();
  }
  /**
      * Clones an X.509 certificate for an Application Key Credential from a source app to a target app.  For step-by-step instructions to clone a credential, see [Share application key credentials for IdPs across apps](https://developer.okta.com/docs/guides/sharing-cert/main/). > **Note:** Sharing certificates isn\'t a recommended security practice.
      * Clone a key credential
      * @param appId Application ID
      * @param keyId ID of the Key Credential for the application
      * @param targetAid Unique key of the target Application
      */
  cloneApplicationKey(appId, keyId, targetAid, _options) {
    const result = this.api.cloneApplicationKey(appId, keyId, targetAid, _options);
    return result.toPromise();
  }
  /**
      * Configures a capability (`SSO` or `PROVISIONING`) in the app instance by automatically exchanging configuration information.
      * Configure a capability in the app instance
      * @param appId Application ID
      * @param capabilityType Capability type
      */
  configureCapabilityApplication(appId, capabilityType, _options) {
    const result = this.api.configureCapabilityApplication(appId, capabilityType, _options);
    return result.toPromise();
  }
  /**
      * Creates an app instance in your Okta org.  You can either create an OIN app instance or a custom app instance: * OIN app instances have prescribed `name` (key app definition) and `signOnMode` options. See the [OIN schemas](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/schema/GoogleApplication) for the request body. * For custom app instances, select the [signOnMode](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=0/signOnMode&t=request) that pertains to your app and specify the required parameters in the request body.
      * Create an application
      * @param application
      * @param activate Executes activation lifecycle operation when creating the app
      * @param oktaAccessGatewayAgent
      */
  createApplication(application, activate, oktaAccessGatewayAgent, _options) {
    const result = this.api.createApplication(application, activate, oktaAccessGatewayAgent, _options);
    return result.toPromise();
  }
  /**
      * Creates a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
      * Create a federated claim
      * @param appId Application ID
      * @param federatedClaimRequestBody
      */
  createFederatedClaim(appId, federatedClaimRequestBody, _options) {
    const result = this.api.createFederatedClaim(appId, federatedClaimRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an active application  > **Note:** Deactivating an app triggers a full reconciliation of all users assigned to the app by groups. This reconcile process removes the app assignment for the deactivated app, and might also correct assignments that were supposed to be removed but failed previously.
      * Deactivate an application
      * @param appId Application ID
      */
  deactivateApplication(appId, _options) {
    const result = this.api.deactivateApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates the default provisioning connection for an app
      * Deactivate the default provisioning connection
      * @param appId Application ID
      */
  deactivateDefaultProvisioningConnectionForApplication(appId, _options) {
    const result = this.api.deactivateDefaultProvisioningConnectionForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an inactive application
      * Delete an application
      * @param appId Application ID
      */
  deleteApplication(appId, _options) {
    const result = this.api.deleteApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a federated claim by `claimId`
      * Delete a federated claim
      * @param appId Application ID
      * @param claimId The unique &#x60;id&#x60; of the federated claim
      */
  deleteFederatedClaim(appId, claimId, _options) {
    const result = this.api.deleteFederatedClaim(appId, claimId, _options);
    return result.toPromise();
  }
  /**
      * Generates a new X.509 certificate for an app key credential > **Note:** To update an Application with the newly generated key credential, use the [Replace an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) request with the new [credentials.signing.kid](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing/kid&t=request) value in the request body. You can provide just the [Signing Credential object](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing&t=request) instead of the entire [Application Credential object](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials&t=request).
      * Generate a key credential
      * @param appId Application ID
      * @param validityYears Expiry years of the Application Key Credential
      */
  generateApplicationKey(appId, validityYears, _options) {
    const result = this.api.generateApplicationKey(appId, validityYears, _options);
    return result.toPromise();
  }
  /**
      * Generates a new key pair and returns the Certificate Signing Request(CSR) for it. The information in a CSR is used by the Certificate Authority (CA) to verify and create your certificate. It also contains the public key that is included in your certificate.  Returns CSR in `pkcs#10` format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`. > **Note:** The key pair isn\'t listed in the Key Credentials for the app until it\'s published.
      * Generate a certificate signing request
      * @param appId Application ID
      * @param metadata
      */
  generateCsrForApplication(appId, metadata, _options) {
    const result = this.api.generateCsrForApplication(appId, metadata, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an application from your Okta organization by `id`
      * Retrieve an application
      * @param appId Application ID
      * @param expand An optional query parameter to return the specified [Application User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/) in the &#x60;_embedded&#x60; property. Valid value: &#x60;expand&#x3D;user/{userId}&#x60;
      */
  getApplication(appId, expand, _options) {
    const result = this.api.getApplication(appId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an app group assignment
      * Retrieve an application group
      * @param appId Application ID
      * @param groupId The &#x60;id&#x60; of the group
      * @param expand An optional query parameter to return the corresponding assigned [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) or  the group assignment metadata details in the &#x60;_embedded&#x60; property.
      */
  getApplicationGroupAssignment(appId, groupId, expand, _options) {
    const result = this.api.getApplicationGroupAssignment(appId, groupId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific Application Key Credential by `kid`
      * Retrieve a key credential
      * @param appId Application ID
      * @param keyId ID of the Key Credential for the application
      */
  getApplicationKey(appId, keyId, _options) {
    const result = this.api.getApplicationKey(appId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific user assignment for a specific app
      * Retrieve an application user
      * @param appId Application ID
      * @param userId ID of an existing Okta user
      * @param expand An optional query parameter to return the corresponding [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) object in the &#x60;_embedded&#x60; property. Valid value: &#x60;user&#x60;
      */
  getApplicationUser(appId, userId, expand, _options) {
    const result = this.api.getApplicationUser(appId, userId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Certificate Signing Request (CSR) for the app by `csrId`.  Returns a Base64-encoded CSR in DER format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`.
      * Retrieve a certificate signing request
      * @param appId Application ID
      * @param csrId &#x60;id&#x60; of the CSR
      */
  getCsrForApplication(appId, csrId, _options) {
    const result = this.api.getCsrForApplication(appId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the default provisioning connection for an app
      * Retrieve the default provisioning connection
      * @param appId Application ID
      */
  getDefaultProvisioningConnectionForApplication(appId, _options) {
    const result = this.api.getDefaultProvisioningConnectionForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Feature object for an app
      * Retrieve a feature
      * @param appId Application ID
      * @param name Name of the Feature
      */
  getFeatureForApplication(appId, name, _options) {
    const result = this.api.getFeatureForApplication(appId, name, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a federated claim by `claimId`
      * Retrieve a federated claim
      * @param appId Application ID
      * @param claimId The unique &#x60;id&#x60; of the federated claim
      */
  getFederatedClaim(appId, claimId, _options) {
    const result = this.api.getFederatedClaim(appId, claimId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the OAuth 2.0 authorization code from the app\'s authorization server. Use this authorization code to exchange for an access token through another endpoint to enable Express Configuration on behalf of the user.
      * Retrieve the OAuth 2.0 authorization code for Express Configuration.
      * @param appId Application ID
      * @param token XSRF token
      * @param capabilityType The capability type (for example, &#x60;SSO&#x60;) for which the user intends to perform Express Configuration.
      */
  getOAuth2AccessTokenForExpressConfiguration(appId, token, capabilityType, _options) {
    const result = this.api.getOAuth2AccessTokenForExpressConfiguration(appId, token, capabilityType, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a refresh token for the specified app
      * Retrieve an application token
      * @param appId Application ID
      * @param tokenId &#x60;id&#x60; of Token
      * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      */
  getOAuth2TokenForApplication(appId, tokenId, expand, _options) {
    const result = this.api.getOAuth2TokenForApplication(appId, tokenId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a single scope consent Grant object for the app
      * Retrieve an app grant
      * @param appId Application ID
      * @param grantId Grant ID
      * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      */
  getScopeConsentGrant(appId, grantId, expand, _options) {
    const result = this.api.getScopeConsentGrant(appId, grantId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a JWKS for the default provisioning connection.  This can be used by the OAuth 2.0 app\'s `jwk_uri` property in the target org.
      * Retrieve a JSON Web Key Set (JWKS) for the default provisioning connection
      * @param appId Application ID
      */
  getUserProvisioningConnectionJWKS(appId, _options) {
    const result = this.api.getUserProvisioningConnectionJWKS(appId, _options);
    return result.toPromise();
  }
  /**
      * Grants consent for the app to request an OAuth 2.0 Okta scope
      * Grant consent to scope
      * @param appId Application ID
      * @param oAuth2ScopeConsentGrant
      */
  grantConsentToScope(appId, oAuth2ScopeConsentGrant, _options) {
    const result = this.api.grantConsentToScope(appId, oAuth2ScopeConsentGrant, _options);
    return result.toPromise();
  }
  /**
      * Lists all app group assignments
      * List all application groups
      * @param appId Application ID
      * @param q Specifies a filter for a list of assigned groups returned based on their names. The value of &#x60;q&#x60; is matched against the group &#x60;name&#x60;.  This filter only supports the &#x60;startsWith&#x60; operation that matches the &#x60;q&#x60; string against the beginning of the [group name](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!c&#x3D;200&amp;path&#x3D;profile/name&amp;t&#x3D;response).
      * @param after Specifies the pagination cursor for the &#x60;next&#x60; page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
      * @param expand An optional query parameter to return the corresponding assigned [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) or  the group assignment metadata details in the &#x60;_embedded&#x60; property.
      */
  listApplicationGroupAssignments(appId, q, after, limit, expand, _options) {
    const result = this.api.listApplicationGroupAssignments(appId, q, after, limit, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all key credentials for an app
      * List all key credentials
      * @param appId Application ID
      */
  listApplicationKeys(appId, _options) {
    const result = this.api.listApplicationKeys(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all assigned users for an app
      * List all application users
      * @param appId Application ID
      * @param after Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
      * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
      * @param q Specifies a filter for the list of application users returned based on their profile attributes. The value of &#x60;q&#x60; is matched against the beginning of the following profile attributes: &#x60;userName&#x60;, &#x60;firstName&#x60;, &#x60;lastName&#x60;, and &#x60;email&#x60;. This filter only supports the &#x60;startsWith&#x60; operation that matches the &#x60;q&#x60; string against the beginning of the attribute values. &gt; **Note:** For OIDC apps, user profiles don\&#39;t contain the &#x60;firstName&#x60; or &#x60;lastName&#x60; attributes. Therefore, the query only matches against the &#x60;userName&#x60; or &#x60;email&#x60; attributes.
      * @param expand An optional query parameter to return the corresponding [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) object in the &#x60;_embedded&#x60; property. Valid value: &#x60;user&#x60;
      */
  listApplicationUsers(appId, after, limit, q, expand, _options) {
    const result = this.api.listApplicationUsers(appId, after, limit, q, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all apps in the org with pagination. A subset of apps can be returned that match a supported filter expression or query. The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the header contains a `next` link. Treat the link as an opaque value (follow it, don\'t parse it).  > **Note:** To list all of a member\'s assigned app links, use the [List all assigned app links endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listAppLinks).
      * List all applications
      * @param q Searches for apps with &#x60;name&#x60; or &#x60;label&#x60; properties that starts with the &#x60;q&#x60; value using the &#x60;startsWith&#x60; operation
      * @param after Specifies the [pagination](/#pagination) cursor for the next page of results. Treat this as an opaque value obtained through the &#x60;next&#x60; link relationship.
      * @param useOptimization Specifies whether to use query optimization. If you specify &#x60;useOptimization&#x3D;true&#x60; in the request query, the response contains a subset of app instance properties.
      * @param alwaysIncludeVpnSettings Specifies whether to include the VPN configuration for existing notifications in the result, regardless of whether VPN notifications are configured
      * @param limit Specifies the number of results per page
      * @param filter Filters apps with a supported expression for a subset of properties. Filtering supports the following limited number of properties: &#x60;id&#x60;, &#x60;status&#x60;, &#x60;credentials.signing.kid&#x60;, &#x60;settings.slo.enabled&#x60;, or &#x60;name&#x60;. See [Filter](https://developer.okta.com/docs/api/#filter).
      * @param expand An optional parameter used for link expansion to embed more resources in the response. Only supports &#x60;expand&#x3D;user/{userId}&#x60; and must be used with the &#x60;user.id eq \&quot;{userId}\&quot;&#x60; filter query for the same user. Returns the assigned [application user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/) in the &#x60;_embedded&#x60; property.
      * @param includeNonDeleted Specifies whether to include non-active, but not deleted apps in the results
      */
  listApplications(q, after, useOptimization, alwaysIncludeVpnSettings, limit, filter, expand, includeNonDeleted, _options) {
    const result = this.api.listApplications(q, after, useOptimization, alwaysIncludeVpnSettings, limit, filter, expand, includeNonDeleted, _options);
    return result.toPromise();
  }
  /**
      * Lists all Certificate Signing Requests for an application
      * List all certificate signing requests
      * @param appId Application ID
      */
  listCsrsForApplication(appId, _options) {
    const result = this.api.listCsrsForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all features for an app > **Note:** This request returns an error if provisioning isn\'t enabled for the app. > To set up provisioning, see [Update the default provisioning connection](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationConnections/#tag/ApplicationConnections/operation/updateDefaultProvisioningConnectionForApplication).
      * List all features
      * @param appId Application ID
      */
  listFeaturesForApplication(appId, _options) {
    const result = this.api.listFeaturesForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all federated claims for your app
      * List all configured federated claims
      * @param appId Application ID
      */
  listFederatedClaims(appId, _options) {
    const result = this.api.listFederatedClaims(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all refresh tokens for an app  > **Note:** The results are [paginated](/#pagination) according to the `limit` parameter. > If there are multiple pages of results, the Link header contains a `next` link that you need to use as an opaque value (follow it, don\'t parse it).
      * List all application refresh tokens
      * @param appId Application ID
      * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      * @param after Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
      * @param limit A limit on the number of objects to return
      */
  listOAuth2TokensForApplication(appId, expand, after, limit, _options) {
    const result = this.api.listOAuth2TokensForApplication(appId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all scope consent Grants for the app
      * List all app grants
      * @param appId Application ID
      * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
      */
  listScopeConsentGrants(appId, expand, _options) {
    const result = this.api.listScopeConsentGrants(appId, expand, _options);
    return result.toPromise();
  }
  /**
      * Previews the SSO SAML metadata for an application
      * Preview the application SAML metadata
      * @param appId Application ID
      * @param kid
      */
  previewSAMLmetadataForApplication(appId, kid, _options) {
    const result = this.api.previewSAMLmetadataForApplication(appId, kid, _options);
    return result.toPromise();
  }
  /**
      * Publishes a Certificate Signing Request (CSR) for the app with a signed X.509 certificate and adds it into the Application Key Credentials. > **Note:** Publishing a certificate completes the lifecycle of the CSR and it\'s no longer accessible.
      * Publish a certificate signing request
      * @param appId Application ID
      * @param csrId &#x60;id&#x60; of the CSR
      * @param body
      */
  publishCsrFromApplication(appId, csrId, body, _options) {
    const result = this.api.publishCsrFromApplication(appId, csrId, body, _options);
    return result.toPromise();
  }
  /**
      * Replaces properties for an application > **Notes:** > * All required properties must be specified in the request body > * You can\'t modify system-assigned properties, such as `id`, `name`, `status`, `created`, and `lastUpdated`. The values for these properties in the PUT request body are ignored.
      * Replace an application
      * @param appId Application ID
      * @param application
      */
  replaceApplication(appId, application, _options) {
    const result = this.api.replaceApplication(appId, application, _options);
    return result.toPromise();
  }
  /**
      * Replaces a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
      * Replace a federated claim
      * @param appId Application ID
      * @param claimId The unique &#x60;id&#x60; of the federated claim
      * @param federatedClaim
      */
  replaceFederatedClaim(appId, claimId, federatedClaim, _options) {
    const result = this.api.replaceFederatedClaim(appId, claimId, federatedClaim, _options);
    return result.toPromise();
  }
  /**
      * Revokes a Certificate Signing Request and deletes the key pair from the app
      * Revoke a certificate signing request
      * @param appId Application ID
      * @param csrId &#x60;id&#x60; of the CSR
      */
  revokeCsrFromApplication(appId, csrId, _options) {
    const result = this.api.revokeCsrFromApplication(appId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the specified token for the specified app
      * Revoke an application token
      * @param appId Application ID
      * @param tokenId &#x60;id&#x60; of Token
      */
  revokeOAuth2TokenForApplication(appId, tokenId, _options) {
    const result = this.api.revokeOAuth2TokenForApplication(appId, tokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all OAuth 2.0 refresh tokens for the specified app. Any access tokens issued with these refresh tokens are also revoked, but access tokens issued without a refresh token aren\'t affected.
      * Revoke all application tokens
      * @param appId Application ID
      */
  revokeOAuth2TokensForApplication(appId, _options) {
    const result = this.api.revokeOAuth2TokensForApplication(appId, _options);
    return result.toPromise();
  }
  /**
      * Revokes permission for the app to grant the given scope
      * Revoke an app grant
      * @param appId Application ID
      * @param grantId Grant ID
      */
  revokeScopeConsentGrant(appId, grantId, _options) {
    const result = this.api.revokeScopeConsentGrant(appId, grantId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a Group from an app
      * Unassign an application group
      * @param appId Application ID
      * @param groupId The &#x60;id&#x60; of the group
      */
  unassignApplicationFromGroup(appId, groupId, _options) {
    const result = this.api.unassignApplicationFromGroup(appId, groupId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a user from an app  For directories like Active Directory and LDAP, they act as the owner of the user\'s credential with Okta delegating authentication (DelAuth) to that directory. If this request is successful for a user when DelAuth is enabled, then the user is in a state with no password. You can then reset the user\'s password.  > **Important:** This is a destructive operation. You can\'t recover the user\'s app profile. If the app is enabled for provisioning and configured to deactivate users, the user is also deactivated in the target app.
      * Unassign an application user
      * @param appId Application ID
      * @param userId ID of an existing Okta user
      * @param sendEmail Sends a deactivation email to the administrator if &#x60;true&#x60;
      */
  unassignUserFromApplication(appId, userId, sendEmail, _options) {
    const result = this.api.unassignUserFromApplication(appId, userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Updates the profile or credentials of a user assigned to an app
      * Update an application user
      * @param appId Application ID
      * @param userId ID of an existing Okta user
      * @param appUser
      */
  updateApplicationUser(appId, userId, appUser, _options) {
    const result = this.api.updateApplicationUser(appId, userId, appUser, _options);
    return result.toPromise();
  }
  /**
      * Updates the default provisioning connection for an app
      * Update the default provisioning connection
      * @param appId Application ID
      * @param provisioningConnectionRequest
      * @param activate Activates the provisioning connection
      */
  updateDefaultProvisioningConnectionForApplication(appId, provisioningConnectionRequest, activate, _options) {
    const result = this.api.updateDefaultProvisioningConnectionForApplication(appId, provisioningConnectionRequest, activate, _options);
    return result.toPromise();
  }
  /**
      * Updates a Feature object for an app > **Note:** This endpoint supports partial updates.
      * Update a feature
      * @param appId Application ID
      * @param name Name of the Feature
      * @param capabilitiesObject
      */
  updateFeatureForApplication(appId, name, capabilitiesObject, _options) {
    const result = this.api.updateFeatureForApplication(appId, name, capabilitiesObject, _options);
    return result.toPromise();
  }
  /**
      * Updates a group assignment to an app
      * Update an application group
      * @param appId Application ID
      * @param groupId The &#x60;id&#x60; of the group
      * @param jsonPatchOperation
      */
  updateGroupAssignmentToApplication(appId, groupId, jsonPatchOperation, _options) {
    const result = this.api.updateGroupAssignmentToApplication(appId, groupId, jsonPatchOperation, _options);
    return result.toPromise();
  }
  /**
      * Uploads a logo for the app instance. If the app already has a logo, this operation replaces the previous logo.  The logo is visible in the Admin Console as an icon for your app instance. If you have one `appLink` object configured, this logo also appears in the End-User Dashboard as an icon for your app. > **Note:** If you have multiple `appLink` objects, use the Admin Console to add logos for each app link. > You can\'t use the API to add logos for multiple app links.
      * Upload an application logo
      * @param appId Application ID
      * @param file The image file containing the logo.  The file must be in PNG, JPG, SVG, or GIF format, and less than one MB in size. For best results, use an image with a transparent background and a square dimension of 200 x 200 pixels to prevent upscaling.  &gt; **Notes:** &gt; * Only SVG files encoded in UTF-8 are supported. For example, &#x60;&lt;xml version&#x3D;\\\&quot;1.0\\\&quot; encoding&#x3D;\\\&quot;UTF-8\\\&quot;&gt;&#x60; is a valid SVG file declaration. &gt; * &#x60;multipart/form-data&#x60; isn\\\&#39;t supported for Python. Remove the &#x60;\\\&quot;Content-Type\\\&quot;: \\\&quot;multipart/form-data\\\&quot;&#x60; line if you use the Python request sample code.
      */
  uploadApplicationLogo(appId, file, _options) {
    const result = this.api.uploadApplicationLogo(appId, file, _options);
    return result.toPromise();
  }
  /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for an OAuth 2.0-based connection. Currently, this operation only supports `office365`,`google`, `zoomus`, and `slack` apps.
      * Verify the provisioning connection
      * @param appName
      * @param appId Application ID
      * @param code
      * @param state
      */
  verifyProvisioningConnectionForApplication(appName, appId, code, state, _options) {
    const result = this.api.verifyProvisioningConnectionForApplication(appName, appId, code, state, _options);
    return result.toPromise();
  }
  /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Google Workspace (`google`) OAuth 2.0-based connection.
      * Verify the provisioning connection for Google Workspace
      * @param appId Application ID
      * @param code
      * @param state
      */
  verifyProvisioningConnectionForGoogleApplication(appId, code, state, _options) {
    const result = this.api.verifyProvisioningConnectionForGoogleApplication(appId, code, state, _options);
    return result.toPromise();
  }
  /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Microsoft Office 365 (`office365`) OAuth 2.0-based connection.
      * Verify the provisioning connection for Microsoft Office 365
      * @param appId Application ID
      * @param code
      * @param state
      */
  verifyProvisioningConnectionForOfficeApplication(appId, code, state, _options) {
    const result = this.api.verifyProvisioningConnectionForOfficeApplication(appId, code, state, _options);
    return result.toPromise();
  }
}
exports.PromiseApplicationApi = PromiseApplicationApi;
const ObservableAPI_9 = require('./ObservableAPI');
class PromiseApplicationCrossAppAccessConnectionsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_9.ObservableApplicationCrossAppAccessConnectionsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a Cross App Access connection
      * Create a Cross App Access connection
      * @param appId Application ID
      * @param orgCrossAppAccessConnection
      */
  createCrossAppAccessConnection(appId, orgCrossAppAccessConnection, _options) {
    const result = this.api.createCrossAppAccessConnection(appId, orgCrossAppAccessConnection, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Cross App Access connection with the specified ID
      * Delete a Cross App Access connection
      * @param appId Application ID
      * @param connectionId Connection ID
      */
  deleteCrossAppAccessConnection(appId, connectionId, _options) {
    const result = this.api.deleteCrossAppAccessConnection(appId, connectionId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves inbound and outbound Cross App Access connections associated with an app
      * Retrieve all Cross App Access connections
      * @param appId Application ID
      * @param after Specifies the pagination cursor for the next page of connection results
      * @param limit Specifies the number of results to return per page. The values:   * -1: Return all results (up to system maximum)   * 0: Return an empty result set   * Positive integer: Return up to that many results (capped at system maximum)
      */
  getAllCrossAppAccessConnections(appId, after, limit, _options) {
    const result = this.api.getAllCrossAppAccessConnections(appId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the Cross App Access connection with the specified ID
      * Retrieve a Cross App Access connection
      * @param appId Application ID
      * @param connectionId Connection ID
      */
  getCrossAppAccessConnection(appId, connectionId, _options) {
    const result = this.api.getCrossAppAccessConnection(appId, connectionId, _options);
    return result.toPromise();
  }
  /**
      * Updates the Cross App Access connection with the specified ID
      * Update a Cross App Access connection
      * @param appId Application ID
      * @param connectionId Connection ID
      * @param orgCrossAppAccessConnectionPatchRequest
      */
  updateCrossAppAccessConnection(appId, connectionId, orgCrossAppAccessConnectionPatchRequest, _options) {
    const result = this.api.updateCrossAppAccessConnection(appId, connectionId, orgCrossAppAccessConnectionPatchRequest, _options);
    return result.toPromise();
  }
}
exports.PromiseApplicationCrossAppAccessConnectionsApi = PromiseApplicationCrossAppAccessConnectionsApi;
const ObservableAPI_10 = require('./ObservableAPI');
class PromiseApplicationInterclientTrustMappingsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_10.ObservableApplicationInterclientTrustMappingsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a mapping between the target app and an allowed app for interclient SSO using the interclient token
      * Create an allowed app mapping for a target app
      * @param appId Application ID
      * @param interclientTrustMappingRequestBody
      */
  createInterclientTrustMapping(appId, interclientTrustMappingRequestBody, _options) {
    const result = this.api.createInterclientTrustMapping(appId, interclientTrustMappingRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Deletes the mapping between the target app and an allowed app
      * Delete an interclient trust mapping
      * @param appId Application ID
      * @param allowedAppId App ID of the allowed app instance to delete mapping from the target app.
      */
  deleteInterclientTrustMapping(appId, allowedAppId, _options) {
    const result = this.api.deleteInterclientTrustMapping(appId, allowedAppId, _options);
    return result.toPromise();
  }
  /**
      * Lists all apps allowed by this app to request interclient SSO using the interclient token
      * List all allowed apps for a target app
      * @param appId Application ID
      */
  listInterclientAllowedApplications(appId, _options) {
    const result = this.api.listInterclientAllowedApplications(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the target apps that allow this app to request interclient SSO using an interclient token
      * List all target apps for an allowed app
      * @param appId Application ID
      */
  listInterclientTargetApplications(appId, _options) {
    const result = this.api.listInterclientTargetApplications(appId, _options);
    return result.toPromise();
  }
}
exports.PromiseApplicationInterclientTrustMappingsApi = PromiseApplicationInterclientTrustMappingsApi;
const ObservableAPI_11 = require('./ObservableAPI');
class PromiseApplicationSSOPublicKeysApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_11.ObservableApplicationSSOPublicKeysApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an OAuth 2.0 Client JSON Web Key by `keyId` > **Note:** You can have only one active encryption key at any given time for app. When you activate an inactive key, the current active key is automatically deactivated.
      * Activate an OAuth 2.0 client JSON Web Key
      * @param appId Application ID
      * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      */
  activateOAuth2ClientJsonWebKey(appId, keyId, _options) {
    const result = this.api.activateOAuth2ClientJsonWebKey(appId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Activates an OAuth 2.0 Client Secret by `secretId`
      * Activate an OAuth 2.0 client secret
      * @param appId Application ID
      * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      */
  activateOAuth2ClientSecret(appId, secretId, _options) {
    const result = this.api.activateOAuth2ClientSecret(appId, secretId, _options);
    return result.toPromise();
  }
  /**
      * Adds a new JSON Web Key to the client`s JSON Web Keys. > **Note:** This API doesn\'t allow you to add a key if the existing key doesn\'t have a `kid`. This is also consistent with how the [Dynamic Client Registration](/openapi/okta-oauth/oauth/tag/Client/) or [Applications](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/) APIs behave, as they don\'t allow the creation of multiple keys without `kids`. Use the [Replace an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) or the [Replace a Client Application](/openapi/okta-oauth/oauth/tag/Client/#tag/Client/operation/replaceClient) operation to update the JWKS or [Delete an OAuth 2.0 Client JSON Web Key](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationSSOPublicKeys/#tag/ApplicationSSOPublicKeys/operation/deletejwk) and re-add the key with a `kid`.
      * Add a JSON Web Key
      * @param appId Application ID
      * @param addJwkRequest
      */
  addJwk(appId, addJwkRequest, _options) {
    const result = this.api.addJwk(appId, addJwkRequest, _options);
    return result.toPromise();
  }
  /**
      * Creates an OAuth 2.0 Client Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects. > **Note:** This API lets you bring your own secret. If [token_endpoint_auth_method](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=4/credentials/oauthClient/token_endpoint_auth_method&t=request) of the app is `client_secret_jwt`, then the minimum length of `client_secret` is 32 characters. If no secret is specified in the request, Okta adds a new system-generated secret.
      * Create an OAuth 2.0 client secret
      * @param appId Application ID
      * @param oAuth2ClientSecretRequestBody
      */
  createOAuth2ClientSecret(appId, oAuth2ClientSecretRequestBody, _options) {
    const result = this.api.createOAuth2ClientSecret(appId, oAuth2ClientSecretRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an OAuth 2.0 Client JSON Web Key by `keyId`. > **Note:** You can only deactivate signing keys. Deactivating the active encryption key isn\'t allowed if the client has ID token encryption enabled. You can activate another encryption key, which makes the current key inactive.
      * Deactivate an OAuth 2.0 client JSON Web Key
      * @param appId Application ID
      * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      */
  deactivateOAuth2ClientJsonWebKey(appId, keyId, _options) {
    const result = this.api.deactivateOAuth2ClientJsonWebKey(appId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an OAuth 2.0 Client Secret by `secretId`. You can\'t deactivate a secret if it\'s the only secret of the client.
      * Deactivate an OAuth 2.0 client secret
      * @param appId Application ID
      * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      */
  deactivateOAuth2ClientSecret(appId, secretId, _options) {
    const result = this.api.deactivateOAuth2ClientSecret(appId, secretId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an OAuth 2.0 Client Secret by `secretId`. You can only delete an inactive Secret.
      * Delete an OAuth 2.0 client secret
      * @param appId Application ID
      * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      */
  deleteOAuth2ClientSecret(appId, secretId, _options) {
    const result = this.api.deleteOAuth2ClientSecret(appId, secretId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an OAuth 2.0 Client JSON Web Key by `keyId`. You can only delete an inactive key.
      * Delete an OAuth 2.0 client JSON Web Key
      * @param appId Application ID
      * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      */
  deletejwk(appId, keyId, _options) {
    const result = this.api.deletejwk(appId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an OAuth 2.0 Client JSON Web Key by `keyId`.
      * Retrieve an OAuth 2.0 client JSON Web Key
      * @param appId Application ID
      * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
      */
  getJwk(appId, keyId, _options) {
    const result = this.api.getJwk(appId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an OAuth 2.0 Client Secret by `secretId`
      * Retrieve an OAuth 2.0 client secret
      * @param appId Application ID
      * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
      */
  getOAuth2ClientSecret(appId, secretId, _options) {
    const result = this.api.getOAuth2ClientSecret(appId, secretId, _options);
    return result.toPromise();
  }
  /**
      * Lists all JSON Web Keys for an OAuth 2.0 client app
      * List all the OAuth 2.0 client JSON Web Keys
      * @param appId Application ID
      */
  listJwk(appId, _options) {
    const result = this.api.listJwk(appId, _options);
    return result.toPromise();
  }
  /**
      * Lists all client secrets for an OAuth 2.0 client app
      * List all OAuth 2.0 client secrets
      * @param appId Application ID
      */
  listOAuth2ClientSecrets(appId, _options) {
    const result = this.api.listOAuth2ClientSecrets(appId, _options);
    return result.toPromise();
  }
}
exports.PromiseApplicationSSOPublicKeysApi = PromiseApplicationSSOPublicKeysApi;
const ObservableAPI_12 = require('./ObservableAPI');
class PromiseAssociatedDomainCustomizationsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_12.ObservableAssociatedDomainCustomizationsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the content from each of the well-known URIs for a specified brand
      * Retrieve all the well-known URIs
      * @param brandId The ID of the brand
      * @param expand Specifies additional metadata to include in the response
      */
  getAllWellKnownURIs(brandId, expand, _options) {
    const result = this.api.getAllWellKnownURIs(brandId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the content of the `apple-app-site-assocation` well-known URI  > **Note:**  When serving this URI, Okta adds `authsrv` content to provide a seamless experience for Okta Verify. You can\'t modify the content in the `authsrv` object.
      * Retrieve the customized apple-app-site-association URI content
      */
  getAppleAppSiteAssociationWellKnownURI(_options) {
    const result = this.api.getAppleAppSiteAssociationWellKnownURI(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the content of the `assetlinks.json` well-known URI
      * Retrieve the customized assetlinks.json URI content
      */
  getAssetLinksWellKnownURI(_options) {
    const result = this.api.getAssetLinksWellKnownURI(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the customized content of a well-known URI for a specific brand and well-known URI path
      * Retrieve the customized content of the specified well-known URI
      * @param brandId The ID of the brand
      * @param uriPath The path of the well-known URI
      */
  getBrandWellKnownURI(brandId, uriPath, _options) {
    const result = this.api.getBrandWellKnownURI(brandId, uriPath, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the well-known URI of a specific brand and well-known URI path
      * Retrieve the well-known URI of a specific brand
      * @param brandId The ID of the brand
      * @param uriPath The path of the well-known URI
      * @param expand Specifies additional metadata to include in the response
      */
  getRootBrandWellKnownURI(brandId, uriPath, expand, _options) {
    const result = this.api.getRootBrandWellKnownURI(brandId, uriPath, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the content of the `webauthn` well-known URI
      * Retrieve the customized webauthn URI content
      */
  getWebAuthnWellKnownURI(_options) {
    const result = this.api.getWebAuthnWellKnownURI(_options);
    return result.toPromise();
  }
  /**
      * Replaces the content of a customized well-known URI that you specify.  There are endpoint-specific format requirements when you update the content of a customized well-known URI. See [Customize associated domains](https://developer.okta.com/docs/guides/custom-well-known-uri/main/).
      * Replace the customized well-known URI of the specific path
      * @param brandId The ID of the brand
      * @param uriPath The path of the well-known URI
      * @param wellKnownURIRequest
      */
  replaceBrandWellKnownURI(brandId, uriPath, wellKnownURIRequest, _options) {
    const result = this.api.replaceBrandWellKnownURI(brandId, uriPath, wellKnownURIRequest, _options);
    return result.toPromise();
  }
}
exports.PromiseAssociatedDomainCustomizationsApi = PromiseAssociatedDomainCustomizationsApi;
const ObservableAPI_13 = require('./ObservableAPI');
class PromiseAttackProtectionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_13.ObservableAttackProtectionApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the Authenticator Settings for an org
      * Retrieve the authenticator settings
      */
  getAuthenticatorSettings(_options) {
    const result = this.api.getAuthenticatorSettings(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the User Lockout Settings for an org
      * Retrieve the user lockout settings
      */
  getUserLockoutSettings(_options) {
    const result = this.api.getUserLockoutSettings(_options);
    return result.toPromise();
  }
  /**
      * Replaces the Authenticator Settings for an org
      * Replace the authenticator settings
      * @param authenticatorSettings
      */
  replaceAuthenticatorSettings(authenticatorSettings, _options) {
    const result = this.api.replaceAuthenticatorSettings(authenticatorSettings, _options);
    return result.toPromise();
  }
  /**
      * Replaces the User Lockout Settings for an org
      * Replace the user lockout settings
      * @param lockoutSettings
      */
  replaceUserLockoutSettings(lockoutSettings, _options) {
    const result = this.api.replaceUserLockoutSettings(lockoutSettings, _options);
    return result.toPromise();
  }
}
exports.PromiseAttackProtectionApi = PromiseAttackProtectionApi;
const ObservableAPI_14 = require('./ObservableAPI');
class PromiseAuthenticatorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_14.ObservableAuthenticatorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an authenticator by `authenticatorId`
      * Activate an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      */
  activateAuthenticator(authenticatorId, _options) {
    const result = this.api.activateAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Activates a method for an authenticator identified by `authenticatorId` and `methodType`
      * Activate an authenticator method
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param methodType Type of authenticator method
      */
  activateAuthenticatorMethod(authenticatorId, methodType, _options) {
    const result = this.api.activateAuthenticatorMethod(authenticatorId, methodType, _options);
    return result.toPromise();
  }
  /**
      * Creates an authenticator
      * Create an authenticator
      * @param authenticator
      * @param activate Whether to execute the activation lifecycle operation when Okta creates the authenticator
      */
  createAuthenticator(authenticator, activate, _options) {
    const result = this.api.createAuthenticator(authenticator, activate, _options);
    return result.toPromise();
  }
  /**
      * Creates a custom AAGUID for the WebAuthn authenticator
      * Create a custom AAGUID
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param customAAGUIDCreateRequestObject
      */
  createCustomAAGUID(authenticatorId, customAAGUIDCreateRequestObject, _options) {
    const result = this.api.createCustomAAGUID(authenticatorId, customAAGUIDCreateRequestObject, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authenticator by `authenticatorId`
      * Deactivate an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      */
  deactivateAuthenticator(authenticatorId, _options) {
    const result = this.api.deactivateAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a method for an authenticator identified by `authenticatorId` and `methodType`
      * Deactivate an authenticator method
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param methodType Type of authenticator method
      */
  deactivateAuthenticatorMethod(authenticatorId, methodType, _options) {
    const result = this.api.deactivateAuthenticatorMethod(authenticatorId, methodType, _options);
    return result.toPromise();
  }
  /**
      * Deletes a custom AAGUID  You can only delete custom AAGUIDs that an admin has created.
      * Delete a custom AAGUID
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param aaguid Unique ID of a custom AAGUID
      */
  deleteCustomAAGUID(authenticatorId, aaguid, _options) {
    const result = this.api.deleteCustomAAGUID(authenticatorId, aaguid, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an authenticator from your Okta organization by `authenticatorId`
      * Retrieve an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      */
  getAuthenticator(authenticatorId, _options) {
    const result = this.api.getAuthenticator(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a method identified by `methodType` of an authenticator identified by `authenticatorId`
      * Retrieve an authenticator method
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param methodType Type of authenticator method
      */
  getAuthenticatorMethod(authenticatorId, methodType, _options) {
    const result = this.api.getAuthenticatorMethod(authenticatorId, methodType, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a custom AAGUID
      * Retrieve a custom AAGUID
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param aaguid Unique ID of a custom AAGUID
      */
  getCustomAAGUID(authenticatorId, aaguid, _options) {
    const result = this.api.getCustomAAGUID(authenticatorId, aaguid, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the well-known app authenticator configuration. Includes an app authenticator\'s settings, supported methods, and other details.
      * Retrieve the well-known app authenticator configuration
      * @param oauthClientId Filters app authenticator configurations by &#x60;oauthClientId&#x60;
      */
  getWellKnownAppAuthenticatorConfiguration(oauthClientId, _options) {
    const result = this.api.getWellKnownAppAuthenticatorConfiguration(oauthClientId, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom Authenticator Attestation Global Unique Identifiers (AAGUIDs) in the org  Only custom AAGUIDs that an admin has created are returned.
      * List all custom AAGUIDs
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      */
  listAllCustomAAGUIDs(authenticatorId, _options) {
    const result = this.api.listAllCustomAAGUIDs(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Lists all methods of an authenticator identified by `authenticatorId`
      * List all methods of an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      */
  listAuthenticatorMethods(authenticatorId, _options) {
    const result = this.api.listAuthenticatorMethods(authenticatorId, _options);
    return result.toPromise();
  }
  /**
      * Lists all authenticators
      * List all authenticators
      */
  listAuthenticators(_options) {
    const result = this.api.listAuthenticators(_options);
    return result.toPromise();
  }
  /**
      * Replaces the properties for an authenticator identified by `authenticatorId`
      * Replace an authenticator
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param authenticator
      */
  replaceAuthenticator(authenticatorId, authenticator, _options) {
    const result = this.api.replaceAuthenticator(authenticatorId, authenticator, _options);
    return result.toPromise();
  }
  /**
      * Replaces a method of `methodType` for an authenticator identified by `authenticatorId`
      * Replace an authenticator method
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param methodType Type of authenticator method
      * @param authenticatorMethodBase
      */
  replaceAuthenticatorMethod(authenticatorId, methodType, authenticatorMethodBase, _options) {
    const result = this.api.replaceAuthenticatorMethod(authenticatorId, methodType, authenticatorMethodBase, _options);
    return result.toPromise();
  }
  /**
      * Replaces a custom AAGUID for the specified WebAuthn authenticator
      * Replace a custom AAGUID
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param aaguid Unique ID of a custom AAGUID
      * @param customAAGUIDUpdateRequestObject
      */
  replaceCustomAAGUID(authenticatorId, aaguid, customAAGUIDUpdateRequestObject, _options) {
    const result = this.api.replaceCustomAAGUID(authenticatorId, aaguid, customAAGUIDUpdateRequestObject, _options);
    return result.toPromise();
  }
  /**
      * Updates the properties of a custom AAGUID by the `authenticatorId` and `aaguid` ID
      * Update a custom AAGUID
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param aaguid Unique ID of a custom AAGUID
      * @param customAAGUIDUpdateRequestObject
      */
  updateCustomAAGUID(authenticatorId, aaguid, customAAGUIDUpdateRequestObject, _options) {
    const result = this.api.updateCustomAAGUID(authenticatorId, aaguid, customAAGUIDUpdateRequestObject, _options);
    return result.toPromise();
  }
  /**
      * Verifies the [Relying Party identifier (RP ID)](https://www.w3.org/TR/webauthn/#relying-party-identifier) domain for the specified WebAuthn authenticator and the specific `webauthn` authenticator method
      * Verify a Relying Party ID domain
      * @param authenticatorId &#x60;id&#x60; of the authenticator
      * @param webAuthnMethodType Type of authenticator method
      */
  verifyRpIdDomain(authenticatorId, webAuthnMethodType, _options) {
    const result = this.api.verifyRpIdDomain(authenticatorId, webAuthnMethodType, _options);
    return result.toPromise();
  }
}
exports.PromiseAuthenticatorApi = PromiseAuthenticatorApi;
const ObservableAPI_15 = require('./ObservableAPI');
class PromiseAuthorizationServerApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_15.ObservableAuthorizationServerApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an authorization server
      * Activate an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  activateAuthorizationServer(authServerId, _options) {
    const result = this.api.activateAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Activates an authorization server policy
      * Activate a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  activateAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.activateAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Activates an authorization server policy rule
      * Activate a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const result = this.api.activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Creates trusted relationships between the given authorization server and other authorization servers
      * Create an associated authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param associatedServerMediated
      */
  createAssociatedServers(authServerId, associatedServerMediated, _options) {
    const result = this.api.createAssociatedServers(authServerId, associatedServerMediated, _options);
    return result.toPromise();
  }
  /**
      * Creates an authorization server
      * Create an authorization server
      * @param authorizationServer
      */
  createAuthorizationServer(authorizationServer, _options) {
    const result = this.api.createAuthorizationServer(authorizationServer, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy
      * Create a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policy
      */
  createAuthorizationServerPolicy(authServerId, policy, _options) {
    const result = this.api.createAuthorizationServerPolicy(authServerId, policy, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy
      * Create a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policyRule
      */
  createAuthorizationServerPolicyRule(authServerId, policyId, policyRule, _options) {
    const result = this.api.createAuthorizationServerPolicyRule(authServerId, policyId, policyRule, _options);
    return result.toPromise();
  }
  /**
      * Creates a custom token Claim for a custom authorization server
      * Create a custom token claim
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param oAuth2Claim
      */
  createOAuth2Claim(authServerId, oAuth2Claim, _options) {
    const result = this.api.createOAuth2Claim(authServerId, oAuth2Claim, _options);
    return result.toPromise();
  }
  /**
      * Creates a custom token scope
      * Create a custom token scope
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param oAuth2Scope
      */
  createOAuth2Scope(authServerId, oAuth2Scope, _options) {
    const result = this.api.createOAuth2Scope(authServerId, oAuth2Scope, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authorization server
      * Deactivate an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  deactivateAuthorizationServer(authServerId, _options) {
    const result = this.api.deactivateAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authorization server policy
      * Deactivate a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  deactivateAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.deactivateAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an authorization server policy rule
      * Deactivate a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const result = this.api.deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an associated Authorization Server
      * Delete an associated authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param associatedServerId &#x60;id&#x60; of the associated Authorization Server
      */
  deleteAssociatedServer(authServerId, associatedServerId, _options) {
    const result = this.api.deleteAssociatedServer(authServerId, associatedServerId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an authorization server
      * Delete an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  deleteAuthorizationServer(authServerId, _options) {
    const result = this.api.deleteAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a policy
      * Delete a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  deleteAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.deleteAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
      * Delete a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  deleteAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const result = this.api.deleteAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a custom token Claim specified by the `claimId`
      * Delete a custom token claim
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param claimId &#x60;id&#x60; of Claim
      */
  deleteOAuth2Claim(authServerId, claimId, _options) {
    const result = this.api.deleteOAuth2Claim(authServerId, claimId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a custom token scope
      * Delete a custom token scope
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param scopeId &#x60;id&#x60; of Scope
      */
  deleteOAuth2Scope(authServerId, scopeId, _options) {
    const result = this.api.deleteOAuth2Scope(authServerId, scopeId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an authorization server
      * Retrieve an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  getAuthorizationServer(authServerId, _options) {
    const result = this.api.getAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an Authorization Server Key specified by the `keyId`
      * Retrieve an authorization server key
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param keyId &#x60;id&#x60; of the certificate key
      */
  getAuthorizationServerKey(authServerId, keyId, _options) {
    const result = this.api.getAuthorizationServerKey(authServerId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a policy
      * Retrieve a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  getAuthorizationServerPolicy(authServerId, policyId, _options) {
    const result = this.api.getAuthorizationServerPolicy(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a policy rule by `ruleId`
      * Retrieve a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  getAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const result = this.api.getAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a custom token Claim by the specified `claimId`
      * Retrieve a custom token claim
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param claimId &#x60;id&#x60; of Claim
      */
  getOAuth2Claim(authServerId, claimId, _options) {
    const result = this.api.getOAuth2Claim(authServerId, claimId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a custom token scope
      * Retrieve a custom token scope
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param scopeId &#x60;id&#x60; of Scope
      */
  getOAuth2Scope(authServerId, scopeId, _options) {
    const result = this.api.getOAuth2Scope(authServerId, scopeId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a refresh token for a Client
      * Retrieve a refresh token for a client
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param clientId &#x60;client_id&#x60; of the app
      * @param tokenId &#x60;id&#x60; of Token
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      */
  getRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, expand, _options) {
    const result = this.api.getRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all associated Authorization Servers by trusted type for the given `authServerId`
      * List all associated authorization servers
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param trusted Searches trusted authorization servers when &#x60;true&#x60; or searches untrusted authorization servers when &#x60;false&#x60;
      * @param q Searches for the name or audience of the associated authorization servers
      * @param limit Specifies the number of results for a page
      * @param after Specifies the pagination cursor for the next page of the associated authorization servers
      */
  listAssociatedServersByTrustedType(authServerId, trusted, q, limit, after, _options) {
    const result = this.api.listAssociatedServersByTrustedType(authServerId, trusted, q, limit, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all of the current, future, and expired Keys used by the Custom Authorization Server
      * List all credential keys
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  listAuthorizationServerKeys(authServerId, _options) {
    const result = this.api.listAuthorizationServerKeys(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all policies
      * List all policies
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  listAuthorizationServerPolicies(authServerId, _options) {
    const result = this.api.listAuthorizationServerPolicies(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all policy rules for the specified Custom Authorization Server and Policy
      * List all policy rules
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      */
  listAuthorizationServerPolicyRules(authServerId, policyId, _options) {
    const result = this.api.listAuthorizationServerPolicyRules(authServerId, policyId, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom authorization servers in the org
      * List all authorization servers
      * @param q Searches the &#x60;name&#x60; and &#x60;audiences&#x60; of authorization servers for matching values
      * @param limit Specifies the number of authorization server results on a page. Maximum value: 200
      * @param after Specifies the pagination cursor for the next page of authorization servers. Treat as an opaque value and obtain through the next link relationship.
      */
  listAuthorizationServers(q, limit, after, _options) {
    const result = this.api.listAuthorizationServers(q, limit, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom token Claims defined for a specified custom authorization server
      * List all custom token claims
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  listOAuth2Claims(authServerId, _options) {
    const result = this.api.listOAuth2Claims(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all client resources for which the specified authorization server has tokens.  > **Note:** To list a specific user\'s client resources for which they have tokens or grants, use the [List all clients endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserClients).
      * List all client resources for an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  listOAuth2ClientsForAuthorizationServer(authServerId, _options) {
    const result = this.api.listOAuth2ClientsForAuthorizationServer(authServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom token scopes
      * List all custom token scopes
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param q Searches the &#x60;name&#x60; of Custom Token Scopes for matching values
      * @param filter Filter expression for Custom Token Scopes
      * @param after Specifies the pagination cursor for the next page of scopes. Treat the after cursor as an opaque value and obtain it through the next link relationship. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listOAuth2Scopes(authServerId, q, filter, after, limit, _options) {
    const result = this.api.listOAuth2Scopes(authServerId, q, filter, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all refresh tokens issued by an authorization server for a specific Client
      * List all refresh tokens for a client
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param clientId &#x60;client_id&#x60; of the app
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @param after Specifies the pagination cursor for the next page of tokens
      * @param limit The maximum number of tokens to return (maximum 200)
      */
  listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, expand, after, limit, _options) {
    const result = this.api.listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Replaces an authorization server
      * Replace an authorization server
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param authorizationServer
      */
  replaceAuthorizationServer(authServerId, authorizationServer, _options) {
    const result = this.api.replaceAuthorizationServer(authServerId, authorizationServer, _options);
    return result.toPromise();
  }
  /**
      * Replaces a policy
      * Replace a policy
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policy
      */
  replaceAuthorizationServerPolicy(authServerId, policyId, policy, _options) {
    const result = this.api.replaceAuthorizationServerPolicy(authServerId, policyId, policy, _options);
    return result.toPromise();
  }
  /**
      * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
      * Replace a policy rule
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      * @param policyRule
      */
  replaceAuthorizationServerPolicyRule(authServerId, policyId, ruleId, policyRule, _options) {
    const result = this.api.replaceAuthorizationServerPolicyRule(authServerId, policyId, ruleId, policyRule, _options);
    return result.toPromise();
  }
  /**
      * Replaces a custom token Claim specified by the `claimId`
      * Replace a custom token claim
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param claimId &#x60;id&#x60; of Claim
      * @param oAuth2Claim
      */
  replaceOAuth2Claim(authServerId, claimId, oAuth2Claim, _options) {
    const result = this.api.replaceOAuth2Claim(authServerId, claimId, oAuth2Claim, _options);
    return result.toPromise();
  }
  /**
      * Replaces a custom token scope
      * Replace a custom token scope
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param scopeId &#x60;id&#x60; of Scope
      * @param oAuth2Scope
      */
  replaceOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options) {
    const result = this.api.replaceOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options);
    return result.toPromise();
  }
  /**
      * Revokes a refresh token for a Client
      * Revoke a refresh token for a client
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param clientId &#x60;client_id&#x60; of the app
      * @param tokenId &#x60;id&#x60; of Token
      */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, _options) {
    const result = this.api.revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all refresh tokens for a Client
      * Revoke all refresh tokens for a client
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param clientId &#x60;client_id&#x60; of the app
      */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, _options) {
    const result = this.api.revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, _options);
    return result.toPromise();
  }
  /**
      * Rotates the current Keys for a Custom Authorization Server. If you rotate Keys, the `ACTIVE` Key becomes the `EXPIRED` Key, the `NEXT` Key becomes the `ACTIVE` Key, and the Custom Authorization Server immediately begins using the new active Key to sign tokens.  > **Note:** Okta rotates your Keys automatically in `AUTO` mode. You can rotate Keys yourself in either mode. If Keys are rotated manually, you should invalidate any intermediate cache. and fetch the Keys again using the Keys endpoint.
      * Rotate all credential keys
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param use
      */
  rotateAuthorizationServerKeys(authServerId, use, _options) {
    const result = this.api.rotateAuthorizationServerKeys(authServerId, use, _options);
    return result.toPromise();
  }
}
exports.PromiseAuthorizationServerApi = PromiseAuthorizationServerApi;
const ObservableAPI_16 = require('./ObservableAPI');
class PromiseBehaviorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_16.ObservableBehaviorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a behavior detection rule
      * Activate a behavior detection rule
      * @param behaviorId ID of the Behavior Detection Rule
      */
  activateBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.activateBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new behavior detection rule
      * Create a behavior detection rule
      * @param rule
      */
  createBehaviorDetectionRule(rule, _options) {
    const result = this.api.createBehaviorDetectionRule(rule, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a behavior detection rule
      * Deactivate a behavior detection rule
      * @param behaviorId ID of the Behavior Detection Rule
      */
  deactivateBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.deactivateBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Behavior Detection Rule by `behaviorId`
      * Delete a behavior detection rule
      * @param behaviorId ID of the Behavior Detection Rule
      */
  deleteBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.deleteBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Behavior Detection Rule by `behaviorId`
      * Retrieve a behavior detection rule
      * @param behaviorId ID of the Behavior Detection Rule
      */
  getBehaviorDetectionRule(behaviorId, _options) {
    const result = this.api.getBehaviorDetectionRule(behaviorId, _options);
    return result.toPromise();
  }
  /**
      * Lists all behavior detection rules with pagination support
      * List all behavior detection rules
      */
  listBehaviorDetectionRules(_options) {
    const result = this.api.listBehaviorDetectionRules(_options);
    return result.toPromise();
  }
  /**
      * Replaces a Behavior Detection Rule by `behaviorId`
      * Replace a behavior detection rule
      * @param behaviorId ID of the Behavior Detection Rule
      * @param rule
      */
  replaceBehaviorDetectionRule(behaviorId, rule, _options) {
    const result = this.api.replaceBehaviorDetectionRule(behaviorId, rule, _options);
    return result.toPromise();
  }
}
exports.PromiseBehaviorApi = PromiseBehaviorApi;
const ObservableAPI_17 = require('./ObservableAPI');
class PromiseCAPTCHAApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_17.ObservableCAPTCHAApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new CAPTCHA instance. Currently, an org can only configure a single CAPTCHA instance.
      * Create a CAPTCHA instance
      * @param instance
      */
  createCaptchaInstance(instance, _options) {
    const result = this.api.createCaptchaInstance(instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes a specified CAPTCHA instance > **Note:** If your CAPTCHA instance is still associated with your org, the request fails. You must first update your Org-wide CAPTCHA settings to remove the CAPTCHA instance.
      * Delete a CAPTCHA instance
      * @param captchaId The unique key used to identify your CAPTCHA instance
      */
  deleteCaptchaInstance(captchaId, _options) {
    const result = this.api.deleteCaptchaInstance(captchaId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the CAPTCHA settings object for your organization
      * Delete the org-wide CAPTCHA settings
      */
  deleteOrgCaptchaSettings(_options) {
    const result = this.api.deleteOrgCaptchaSettings(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the properties of a specified CAPTCHA instance
      * Retrieve a CAPTCHA instance
      * @param captchaId The unique key used to identify your CAPTCHA instance
      */
  getCaptchaInstance(captchaId, _options) {
    const result = this.api.getCaptchaInstance(captchaId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the CAPTCHA settings object for your organization > **Note**: If the current organization hasn\'t configured CAPTCHA Settings, the request returns an empty object.
      * Retrieve the org-wide CAPTCHA settings
      */
  getOrgCaptchaSettings(_options) {
    const result = this.api.getOrgCaptchaSettings(_options);
    return result.toPromise();
  }
  /**
      * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      */
  listCaptchaInstances(_options) {
    const result = this.api.listCaptchaInstances(_options);
    return result.toPromise();
  }
  /**
      * Replaces the properties for a specified CAPTCHA instance
      * Replace a CAPTCHA instance
      * @param captchaId The unique key used to identify your CAPTCHA instance
      * @param instance
      */
  replaceCaptchaInstance(captchaId, instance, _options) {
    const result = this.api.replaceCaptchaInstance(captchaId, instance, _options);
    return result.toPromise();
  }
  /**
      * Replaces the CAPTCHA settings object for your organization > **Note**: You can disable CAPTCHA for your organization by setting `captchaId` and `enabledPages` to `null`.
      * Replace the org-wide CAPTCHA settings
      * @param orgCAPTCHASettings
      */
  replacesOrgCaptchaSettings(orgCAPTCHASettings, _options) {
    const result = this.api.replacesOrgCaptchaSettings(orgCAPTCHASettings, _options);
    return result.toPromise();
  }
  /**
      * Partially updates the properties of a specified CAPTCHA instance
      * Update a CAPTCHA instance
      * @param captchaId The unique key used to identify your CAPTCHA instance
      * @param instance
      */
  updateCaptchaInstance(captchaId, instance, _options) {
    const result = this.api.updateCaptchaInstance(captchaId, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseCAPTCHAApi = PromiseCAPTCHAApi;
const ObservableAPI_18 = require('./ObservableAPI');
class PromiseCustomDomainApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_18.ObservableCustomDomainApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates your custom domain
      * Create a custom domain
      * @param domain
      */
  createCustomDomain(domain, _options) {
    const result = this.api.createCustomDomain(domain, _options);
    return result.toPromise();
  }
  /**
      * Deletes a custom domain by `domainId`
      * Delete a custom domain
      * @param domainId &#x60;id&#x60; of the Domain
      */
  deleteCustomDomain(domainId, _options) {
    const result = this.api.deleteCustomDomain(domainId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a custom domain by `domainId`
      * Retrieve a custom domain
      * @param domainId &#x60;id&#x60; of the Domain
      */
  getCustomDomain(domainId, _options) {
    const result = this.api.getCustomDomain(domainId, _options);
    return result.toPromise();
  }
  /**
      * Lists all verified custom domains for the org
      * List all custom domains
      */
  listCustomDomains(_options) {
    const result = this.api.listCustomDomains(_options);
    return result.toPromise();
  }
  /**
      * Replaces a custom domain\'s brand
      * Replace a custom domain\'s brand
      * @param domainId &#x60;id&#x60; of the Domain
      * @param updateDomain
      */
  replaceCustomDomain(domainId, updateDomain, _options) {
    const result = this.api.replaceCustomDomain(domainId, updateDomain, _options);
    return result.toPromise();
  }
  /**
      * Upserts (creates or renews) the `MANUAL` certificate for the custom domain  > **Notes:** > * If the existing `certificateSourceType` is `OKTA_MANAGED`, this operation changes the source type to `MANUAL`. Okta no longer manages and renews certificates for this domain after you provide a user-managed certificate. > * Okta supports TLS certificates and private keys that are PEM-encoded and 2048, 3072, or 4096 bits. See the [Custom domain guide](https://developer.okta.com/docs/guides/custom-url-domain/main/) for more details.
      * Upsert the custom domain\'s certificate
      * @param domainId &#x60;id&#x60; of the Domain
      * @param certificate
      */
  upsertCertificate(domainId, certificate, _options) {
    const result = this.api.upsertCertificate(domainId, certificate, _options);
    return result.toPromise();
  }
  /**
      * Verifies the custom domain and validity of DNS records by `domainId`. Verify your custom domain to confirm that you own or control the domain and that you have properly configured the required DNS records. Furthermore, if the `certificateSourceType` in the domain is `OKTA_MANAGED`, then an attempt is made to obtain and install a certificate. After a certificate is obtained and installed by Okta, Okta manages the certificate including certificate renewal.  Verify your custom domain after you\'ve [created it](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/CustomDomain/#tag/CustomDomain/operation/createCustomDomain) and after you\'ve added your TXT and CNAME records to your domain provider. Okta doesn\'t verify your domain automatically. You must use the API to verify your custom domain if you change your DNS records or if you encounter issues with domain validation.  > **Note:** DNS record changes can take time to propagate. If you recently updated your DNS records, you may need to wait before verifying your custom domain. If you encounter issues with domain verification, double-check your DNS records and ensure that they\'re correctly configured. See [Update your DNS TXT](https://developer.okta.com/docs/guides/custom-url-domain/main/#update-your-dns-txt) for more information about verifying your custom domain.
      * Verify a custom domain
      * @param domainId &#x60;id&#x60; of the Domain
      */
  verifyDomain(domainId, _options) {
    const result = this.api.verifyDomain(domainId, _options);
    return result.toPromise();
  }
}
exports.PromiseCustomDomainApi = PromiseCustomDomainApi;
const ObservableAPI_19 = require('./ObservableAPI');
class PromiseCustomRoleApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_19.ObservableCustomRoleApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a custom role
      * Create a custom role
      * @param instance
      */
  createRole(instance, _options) {
    const result = this.api.createRole(instance, _options);
    return result.toPromise();
  }
  /**
      * Creates a permission (specified by `permissionType`) for a custom role
      * Create a custom role permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An Okta [permission](https://developer.okta.com/docs/api/openapi/okta-management/guides/permissions)
      * @param instance
      */
  createRolePermission(roleIdOrLabel, permissionType, instance, _options) {
    const result = this.api.createRolePermission(roleIdOrLabel, permissionType, instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes a custom role by `roleIdOrLabel`
      * Delete a custom role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteRole(roleIdOrLabel, _options) {
    const result = this.api.deleteRole(roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Deletes a permission (identified by `permissionType`) from a custom role
      * Delete a custom role permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An Okta [permission](https://developer.okta.com/docs/api/openapi/okta-management/guides/permissions)
      */
  deleteRolePermission(roleIdOrLabel, permissionType, _options) {
    const result = this.api.deleteRolePermission(roleIdOrLabel, permissionType, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a role by `roleIdOrLabel`
      * Retrieve a role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getRole(roleIdOrLabel, _options) {
    const result = this.api.getRole(roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a permission (identified by `permissionType`) for a custom role
      * Retrieve a custom role permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An Okta [permission](https://developer.okta.com/docs/api/openapi/okta-management/guides/permissions)
      */
  getRolePermission(roleIdOrLabel, permissionType, _options) {
    const result = this.api.getRolePermission(roleIdOrLabel, permissionType, _options);
    return result.toPromise();
  }
  /**
      * Lists all permissions for a custom role by `roleIdOrLabel`
      * List all custom role permissions
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  listRolePermissions(roleIdOrLabel, _options) {
    const result = this.api.listRolePermissions(roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom roles with pagination support
      * List all custom roles
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      */
  listRoles(after, _options) {
    const result = this.api.listRoles(after, _options);
    return result.toPromise();
  }
  /**
      * Replaces the label and description for a custom role by `roleIdOrLabel`
      * Replace a custom role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  replaceRole(roleIdOrLabel, instance, _options) {
    const result = this.api.replaceRole(roleIdOrLabel, instance, _options);
    return result.toPromise();
  }
  /**
      * Replaces a permission (specified by `permissionType`) for a custom role
      * Replace a custom role permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An Okta [permission](https://developer.okta.com/docs/api/openapi/okta-management/guides/permissions)
      * @param instance
      */
  replaceRolePermission(roleIdOrLabel, permissionType, instance, _options) {
    const result = this.api.replaceRolePermission(roleIdOrLabel, permissionType, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseCustomRoleApi = PromiseCustomRoleApi;
const ObservableAPI_20 = require('./ObservableAPI');
class PromiseCustomTelephonyProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_20.ObservableCustomTelephonyProviderApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a custom telephony provider by its ID. You must activate a provider before it can be used.
      * Activate a custom telephony provider
      * @param customTelephonyProviderId The ID of the custom telephony provider
      */
  activateCustomTelephonyCredential(customTelephonyProviderId, _options) {
    const result = this.api.activateCustomTelephonyCredential(customTelephonyProviderId, _options);
    return result.toPromise();
  }
  /**
      * Creates a custom telephony provider with the provided credentials
      * Create a custom telephony provider
      * @param customTelephonyProviderCredentialCreateRequest
      */
  createCustomTelephonyProviderCredentials(customTelephonyProviderCredentialCreateRequest, _options) {
    const result = this.api.createCustomTelephonyProviderCredentials(customTelephonyProviderCredentialCreateRequest, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a custom telephony provider by its ID. Keep the following points in mind when you deactivate a provider: * You must deactivate a provider before deleting it. * If you have two telephony providers configured, and both are active, you can only deactivate the secondary provider. The second provider is the one that isn\'t set as the primary provider.
      * Deactivate a custom telephony provider
      * @param customTelephonyProviderId The ID of the custom telephony provider
      */
  deactivateCustomTelephonyCredential(customTelephonyProviderId, _options) {
    const result = this.api.deactivateCustomTelephonyCredential(customTelephonyProviderId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a custom telephony provider by its ID.  Before you delete a provider, ensure that it is [deactivated](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/CustomTelephonyProvider/#tag/CustomTelephonyProvider/operation/deactivateCustomTelephonyCredential). Consider setting up another telephony provider if you still plan to use telephony in your org. See [Set up an external telephony provider](https://help.okta.com/okta_help.htm?type=oie&id=about-telephony).
      * Delete a custom telephony provider
      * @param customTelephonyProviderId The ID of the custom telephony provider
      */
  deleteCustomTelephonyProviderCredential(customTelephonyProviderId, _options) {
    const result = this.api.deleteCustomTelephonyProviderCredential(customTelephonyProviderId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the details of a custom telephony provider by its ID
      * Retrieve a custom telephony provider
      * @param customTelephonyProviderId The ID of the custom telephony provider
      */
  getCustomTelephonyProviderCredential(customTelephonyProviderId, _options) {
    const result = this.api.getCustomTelephonyProviderCredential(customTelephonyProviderId, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom telephony providers that are configured in your org
      * List all custom telephony providers
      */
  listAllCustomTelephonyProviderCredentials(_options) {
    const result = this.api.listAllCustomTelephonyProviderCredentials(_options);
    return result.toPromise();
  }
  /**
      * Sends a test message (SMS or call) using the specified custom telephony provider to verify that the provider is configured correctly.  You must provide a valid phone number and country code to send the test message. Send it to a phone number that you have access to so you can confirm that the message was received.
      * Send a test message from a custom telephony provider
      * @param customTelephonyProviderId The ID of the custom telephony provider
      * @param customTelephonyProviderCredentialSendTestRequest
      */
  sendTestCustomTelephonyProviderCredential(customTelephonyProviderId, customTelephonyProviderCredentialSendTestRequest, _options) {
    const result = this.api.sendTestCustomTelephonyProviderCredential(customTelephonyProviderId, customTelephonyProviderCredentialSendTestRequest, _options);
    return result.toPromise();
  }
  /**
      * Sets a custom telephony provider as the primary telephony provider for the org. You can only set one provider as a primary provider at a time.
      * Set a custom telephony provider as a primary telephony provider
      * @param customTelephonyProviderId The ID of the custom telephony provider
      */
  setAsPrimaryCustomTelephonyCredential(customTelephonyProviderId, _options) {
    const result = this.api.setAsPrimaryCustomTelephonyCredential(customTelephonyProviderId, _options);
    return result.toPromise();
  }
  /**
      * Updates the credentials of an existing custom telephony provider
      * Update a custom telephony provider credential
      * @param customTelephonyProviderId The ID of the custom telephony provider
      * @param customTelephonyProviderCredentialUpdateRequest
      */
  updateCustomTelephonyProviderCredential(customTelephonyProviderId, customTelephonyProviderCredentialUpdateRequest, _options) {
    const result = this.api.updateCustomTelephonyProviderCredential(customTelephonyProviderId, customTelephonyProviderCredentialUpdateRequest, _options);
    return result.toPromise();
  }
}
exports.PromiseCustomTelephonyProviderApi = PromiseCustomTelephonyProviderApi;
const ObservableAPI_21 = require('./ObservableAPI');
class PromiseCustomizationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_21.ObservableCustomizationApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Removes emails from an email service bounce list.  The emails submitted in this operation are removed from the bounce list by an asynchronous job. Any email address that passes validation is accepted for the removal process, even if there are other email addresses in the request that failed validation.  > **Note:** If there are validation errors for all email addresses, a `200 OK` HTTP status is still returned.
      * Remove bounced emails
      * @param bouncesRemoveListObj
      */
  bulkRemoveEmailAddressBounces(bouncesRemoveListObj, _options) {
    const result = this.api.bulkRemoveEmailAddressBounces(bouncesRemoveListObj, _options);
    return result.toPromise();
  }
  /**
      * Creates a new brand in your org
      * Create a brand
      * @param createBrandRequest
      */
  createBrand(createBrandRequest, _options) {
    const result = this.api.createBrand(createBrandRequest, _options);
    return result.toPromise();
  }
  /**
      * Creates a new Email Customization  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, you can create a customization for any BCP47 language in addition to the Okta-supported languages.
      * Create an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param instance
      */
  createEmailCustomization(brandId, templateName, instance, _options) {
    const result = this.api.createEmailCustomization(brandId, templateName, instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes all customizations for an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all customizations are deleted, including customizations for additional languages. If disabled, only customizations in Okta-supported languages are deleted.
      * Delete all email customizations
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      */
  deleteAllCustomizations(brandId, templateName, _options) {
    const result = this.api.deleteAllCustomizations(brandId, templateName, _options);
    return result.toPromise();
  }
  /**
      * Deletes a brand by `brandId`
      * Delete a brand
      * @param brandId The ID of the brand
      */
  deleteBrand(brandId, _options) {
    const result = this.api.deleteBrand(brandId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a theme background image
      * Delete the background image
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      */
  deleteBrandThemeBackgroundImage(brandId, themeId, _options) {
    const result = this.api.deleteBrandThemeBackgroundImage(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a theme favicon. The theme will use the default Okta favicon.
      * Delete the favicon
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      */
  deleteBrandThemeFavicon(brandId, themeId, _options) {
    const result = this.api.deleteBrandThemeFavicon(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the logo
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      */
  deleteBrandThemeLogo(brandId, themeId, _options) {
    const result = this.api.deleteBrandThemeLogo(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the customized error page. As a result, the default error page appears in your live environment.
      * Delete the customized error page
      * @param brandId The ID of the brand
      */
  deleteCustomizedErrorPage(brandId, _options) {
    const result = this.api.deleteCustomizedErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
      * Delete the customized sign-in page
      * @param brandId The ID of the brand
      */
  deleteCustomizedSignInPage(brandId, _options) {
    const result = this.api.deleteCustomizedSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an Email Customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, deletion of an existing additional language customization by ID doesn\'t register.
      * Delete an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param customizationId The ID of the email customization
      */
  deleteEmailCustomization(brandId, templateName, customizationId, _options) {
    const result = this.api.deleteEmailCustomization(brandId, templateName, customizationId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Delete the preview error page
      * @param brandId The ID of the brand
      */
  deletePreviewErrorPage(brandId, _options) {
    const result = this.api.deletePreviewErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Delete the preview sign-in page
      * @param brandId The ID of the brand
      */
  deletePreviewSignInPage(brandId, _options) {
    const result = this.api.deletePreviewSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a brand by `brandId`
      * Retrieve a brand
      * @param brandId The ID of the brand
      * @param expand Specifies additional metadata to be included in the response
      */
  getBrand(brandId, expand, _options) {
    const result = this.api.getBrand(brandId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a theme for a brand
      * Retrieve a theme
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      */
  getBrandTheme(brandId, themeId, _options) {
    const result = this.api.getBrandTheme(brandId, themeId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Preview of an Email Customization. All variable references are populated from the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests for the preview of an additional language customization by ID return a `404 Not Found` error response.
      * Retrieve a preview of an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param customizationId The ID of the email customization
      */
  getCustomizationPreview(brandId, templateName, customizationId, _options) {
    const result = this.api.getCustomizationPreview(brandId, templateName, customizationId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the customized error page. The customized error page appears in your live environment.
      * Retrieve the customized error page
      * @param brandId The ID of the brand
      */
  getCustomizedErrorPage(brandId, _options) {
    const result = this.api.getCustomizedErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
      * Retrieve the customized sign-in page
      * @param brandId The ID of the brand
      */
  getCustomizedSignInPage(brandId, _options) {
    const result = this.api.getCustomizedSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the default error page. The default error page appears when no customized error page exists.
      * Retrieve the default error page
      * @param brandId The ID of the brand
      */
  getDefaultErrorPage(brandId, _options) {
    const result = this.api.getDefaultErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
      * Retrieve the default sign-in page
      * @param brandId The ID of the brand
      */
  getDefaultSignInPage(brandId, _options) {
    const result = this.api.getDefaultSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an email customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to retrieve an additional language customization by ID result in a `404 Not Found` error response.
      * Retrieve an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param customizationId The ID of the email customization
      */
  getEmailCustomization(brandId, templateName, customizationId, _options) {
    const result = this.api.getEmailCustomization(brandId, templateName, customizationId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an email template\'s default content  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
      * Retrieve an email template default content
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param language The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
      */
  getEmailDefaultContent(brandId, templateName, language, _options) {
    const result = this.api.getEmailDefaultContent(brandId, templateName, language, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a preview of an Email Template\'s default content. All variable references are populated using the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
      * Retrieve a preview of the email template default content
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param language The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
      */
  getEmailDefaultPreview(brandId, templateName, language, _options) {
    const result = this.api.getEmailDefaultPreview(brandId, templateName, language, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an email template\'s settings
      * Retrieve the email template settings
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      */
  getEmailSettings(brandId, templateName, _options) {
    const result = this.api.getEmailSettings(brandId, templateName, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the details of an email template by name
      * Retrieve an email template
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param expand Specifies additional metadata to be included in the response
      */
  getEmailTemplate(brandId, templateName, expand, _options) {
    const result = this.api.getEmailTemplate(brandId, templateName, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the error page sub-resources
      * @param brandId The ID of the brand
      * @param expand Specifies additional metadata to be included in the response
      */
  getErrorPage(brandId, expand, _options) {
    const result = this.api.getErrorPage(brandId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Retrieve the preview error page preview
      * @param brandId The ID of the brand
      */
  getPreviewErrorPage(brandId, _options) {
    const result = this.api.getPreviewErrorPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Retrieve the preview sign-in page preview
      * @param brandId The ID of the brand
      */
  getPreviewSignInPage(brandId, _options) {
    const result = this.api.getPreviewSignInPage(brandId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the sign-in page sub-resources
      * @param brandId The ID of the brand
      * @param expand Specifies additional metadata to be included in the response
      */
  getSignInPage(brandId, expand, _options) {
    const result = this.api.getSignInPage(brandId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the sign-out page settings
      * Retrieve the sign-out page settings
      * @param brandId The ID of the brand
      */
  getSignOutPageSettings(brandId, _options) {
    const result = this.api.getSignOutPageSettings(brandId, _options);
    return result.toPromise();
  }
  /**
      * Lists all sign-in widget versions supported by the current org
      * List all Sign-In Widget versions
      * @param brandId The ID of the brand
      */
  listAllSignInWidgetVersions(brandId, _options) {
    const result = this.api.listAllSignInWidgetVersions(brandId, _options);
    return result.toPromise();
  }
  /**
      * Lists all domains associated with a brand by `brandId`
      * List all domains associated with a brand
      * @param brandId The ID of the brand
      */
  listBrandDomains(brandId, _options) {
    const result = this.api.listBrandDomains(brandId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the themes in your brand.  > **Important:** Currently each org supports only one theme, therefore this contains a single object only.
      * List all themes
      * @param brandId The ID of the brand
      */
  listBrandThemes(brandId, _options) {
    const result = this.api.listBrandThemes(brandId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the brands in your org
      * List all brands
      * @param expand Specifies additional metadata to be included in the response
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      * @param q Searches the records for matching value
      */
  listBrands(expand, after, limit, q, _options) {
    const result = this.api.listBrands(expand, after, limit, q, _options);
    return result.toPromise();
  }
  /**
      * Lists all customizations of an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all existing customizations are retrieved, including customizations for additional languages. If disabled, only customizations for Okta-supported languages are returned.
      * List all email customizations
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listEmailCustomizations(brandId, templateName, after, limit, _options) {
    const result = this.api.listEmailCustomizations(brandId, templateName, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all supported email templates
      * List all email templates
      * @param brandId The ID of the brand
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      * @param expand Specifies additional metadata to be included in the response
      */
  listEmailTemplates(brandId, after, limit, expand, _options) {
    const result = this.api.listEmailTemplates(brandId, after, limit, expand, _options);
    return result.toPromise();
  }
  /**
      * Replaces a brand by `brandId`  Passing an invalid `brandId` returns a `404 Not Found` status code with the error code `E0000007`.  Not providing `agreeToCustomPrivacyPolicy` with `customPrivacyPolicyUrl` returns a `400 Bad Request` status code with the error code `E0000001`.
      * Replace a brand
      * @param brandId The ID of the brand
      * @param brand
      */
  replaceBrand(brandId, brand, _options) {
    const result = this.api.replaceBrand(brandId, brand, _options);
    return result.toPromise();
  }
  /**
      * Replaces a theme for a brand
      * Replace a theme
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      * @param theme
      */
  replaceBrandTheme(brandId, themeId, theme, _options) {
    const result = this.api.replaceBrandTheme(brandId, themeId, theme, _options);
    return result.toPromise();
  }
  /**
      * Replaces the customized error page. The customized error page appears in your live environment.
      * Replace the customized error page
      * @param brandId The ID of the brand
      * @param errorPage
      */
  replaceCustomizedErrorPage(brandId, errorPage, _options) {
    const result = this.api.replaceCustomizedErrorPage(brandId, errorPage, _options);
    return result.toPromise();
  }
  /**
      * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
      * Replace the customized sign-in page
      * @param brandId The ID of the brand
      * @param signInPage
      */
  replaceCustomizedSignInPage(brandId, signInPage, _options) {
    const result = this.api.replaceCustomizedSignInPage(brandId, signInPage, _options);
    return result.toPromise();
  }
  /**
      * Replaces an email customization using property values  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to update a customization for an additional language return a `404 Not Found` error response.
      * Replace an email customization
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param customizationId The ID of the email customization
      * @param instance Request
      */
  replaceEmailCustomization(brandId, templateName, customizationId, instance, _options) {
    const result = this.api.replaceEmailCustomization(brandId, templateName, customizationId, instance, _options);
    return result.toPromise();
  }
  /**
      * Replaces an email template\'s settings
      * Replace the email template settings
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param emailSettings
      */
  replaceEmailSettings(brandId, templateName, emailSettings, _options) {
    const result = this.api.replaceEmailSettings(brandId, templateName, emailSettings, _options);
    return result.toPromise();
  }
  /**
      * Replaces the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Replace the preview error page
      * @param brandId The ID of the brand
      * @param errorPage
      */
  replacePreviewErrorPage(brandId, errorPage, _options) {
    const result = this.api.replacePreviewErrorPage(brandId, errorPage, _options);
    return result.toPromise();
  }
  /**
      * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Replace the preview sign-in page
      * @param brandId The ID of the brand
      * @param signInPage
      */
  replacePreviewSignInPage(brandId, signInPage, _options) {
    const result = this.api.replacePreviewSignInPage(brandId, signInPage, _options);
    return result.toPromise();
  }
  /**
      * Replaces the sign-out page settings
      * Replace the sign-out page settings
      * @param brandId The ID of the brand
      * @param hostedPage
      */
  replaceSignOutPageSettings(brandId, hostedPage, _options) {
    const result = this.api.replaceSignOutPageSettings(brandId, hostedPage, _options);
    return result.toPromise();
  }
  /**
      * Sends a test email to the current user\'s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled and the `language` parameter is an additional language, the test email uses the customization corresponding to the language. 2. The email template\'s default customization 3. The email template\'s default content, translated to the current user\'s language  > **Note:** Super admins can view customized email templates with the **Send a test email** request. However, when custom email templates are sent to super admins as part of actual email notification flows, the customizations aren\'t applied. Instead, the default email template is used. This only applies to super admins.
      * Send a test email
      * @param brandId The ID of the brand
      * @param templateName The name of the email template
      * @param language The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
      */
  sendTestEmail(brandId, templateName, language, _options) {
    const result = this.api.sendTestEmail(brandId, templateName, language, _options);
    return result.toPromise();
  }
  /**
      * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
      * Upload the background image
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      * @param file
      */
  uploadBrandThemeBackgroundImage(brandId, themeId, file, _options) {
    const result = this.api.uploadBrandThemeBackgroundImage(brandId, themeId, file, _options);
    return result.toPromise();
  }
  /**
      * Uploads and replaces the favicon for the theme
      * Upload the favicon
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      * @param file
      */
  uploadBrandThemeFavicon(brandId, themeId, file, _options) {
    const result = this.api.uploadBrandThemeFavicon(brandId, themeId, file, _options);
    return result.toPromise();
  }
  /**
      * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the logo
      * @param brandId The ID of the brand
      * @param themeId The ID of the theme
      * @param file
      */
  uploadBrandThemeLogo(brandId, themeId, file, _options) {
    const result = this.api.uploadBrandThemeLogo(brandId, themeId, file, _options);
    return result.toPromise();
  }
}
exports.PromiseCustomizationApi = PromiseCustomizationApi;
const ObservableAPI_22 = require('./ObservableAPI');
class PromiseDeviceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_22.ObservableDeviceApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a device by setting its status to `ACTIVE` by `deviceId`. Activated devices are used to create and delete device user links.
      * Activate a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  activateDevice(deviceId, _options) {
    const result = this.api.activateDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a device by setting its status to `DEACTIVATED` by `deviceId`. Deactivation causes a device to lose all device user links. Set the device status to `DEACTIVATED` before deleting it. > **Note:** When deactivating a Device, keep in mind the following:   - Device deactivation is a destructive operation for device factors and client certificates. Device reenrollment using Okta Verify allows end users to set up new factors on the device.   - Device deletion removes the device record from Okta. Reenrollment creates a new device record.
      * Deactivate a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deactivateDevice(deviceId, _options) {
    const result = this.api.deactivateDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Deletes (permanently) a device by `deviceId` if it has a status of `DEACTIVATED`. You can transition the device to `DEACTIVATED` status using the [Deactivate a Device](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Device/#tag/Device/operation/deactivateDevice) endpoint. This request is destructive and deletes all of the profile data related to the device. Once deleted, device data can\'t be recovered. However, reenrollment creates a new device record. > **Note:** Attempts to delete a device that isn\'t in a `DEACTIVATED` state raise an error.
      * Delete a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deleteDevice(deviceId, _options) {
    const result = this.api.deleteDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a device by `deviceId`
      * Retrieve a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  getDevice(deviceId, _options) {
    const result = this.api.getDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Lists all Users for a device by `deviceId`
      * List all users for a device
      * @param deviceId &#x60;id&#x60; of the device
      */
  listDeviceUsers(deviceId, _options) {
    const result = this.api.listDeviceUsers(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Lists all devices with pagination support.  >**Note:** To list all devices enrolled by a user, use the [List all devices endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserDevices).  You can return a subset of devices that match a supported search criteria using the `search` query parameter. Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request.  > **Note:** The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.  Don\'t use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss.   Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation requires [URL encoding](https://www.w3.org/TR/html4/interact/forms.html#h-17.13.4.1). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
      * List all devices
      * @param after
      * @param limit A limit on the number of objects to return (recommend &#x60;20&#x60;)
      * @param search A SCIM filter expression that filters the results. Searches include all device &#x60;profile&#x60; properties and the device &#x60;id&#x60;, &#x60;status&#x60;, and &#x60;lastUpdated&#x60; properties.  Searches for devices can be filtered by the contains (&#x60;co&#x60;) operator. You can only use &#x60;co&#x60; with these select device profile attributes: &#x60;profile.displayName&#x60;, &#x60;profile.serialNumber&#x60;, &#x60;profile.imei&#x60;, &#x60;profile.meid&#x60;, &#x60;profile.udid&#x60;, and &#x60;profile.sid&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @param expand Includes associated user details and management status for the device in the &#x60;_embedded&#x60; attribute
      */
  listDevices(after, limit, search, expand, _options) {
    const result = this.api.listDevices(after, limit, search, expand, _options);
    return result.toPromise();
  }
  /**
      * Suspends a device by setting its status to `SUSPENDED`. Use suspended devices to create and delete device user links. You can only unsuspend or deactivate suspended devices. > **Note:** `SUSPENDED` status is meant to be temporary, so it isn\'t destructive.
      * Suspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  suspendDevice(deviceId, _options) {
    const result = this.api.suspendDevice(deviceId, _options);
    return result.toPromise();
  }
  /**
      * Unsuspends a device by returning its `status` to `ACTIVE`. >**Note:** Only devices with a `SUSPENDED` status can be unsuspended.
      * Unsuspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  unsuspendDevice(deviceId, _options) {
    const result = this.api.unsuspendDevice(deviceId, _options);
    return result.toPromise();
  }
}
exports.PromiseDeviceApi = PromiseDeviceApi;
const ObservableAPI_23 = require('./ObservableAPI');
class PromiseDeviceAccessApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_23.ObservableDeviceAccessApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
      * Retrieve the Desktop MFA Enforce Number Matching Challenge org setting
      */
  getDesktopMFAEnforceNumberMatchingChallengeOrgSetting(_options) {
    const result = this.api.getDesktopMFAEnforceNumberMatchingChallengeOrgSetting(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the status of the Desktop MFA Recovery PIN feature. That is, whether or not the feature is enabled for your org.
      * Retrieve the Desktop MFA Recovery PIN org setting
      */
  getDesktopMFARecoveryPinOrgSetting(_options) {
    const result = this.api.getDesktopMFARecoveryPinOrgSetting(_options);
    return result.toPromise();
  }
  /**
      * Replaces the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
      * Replace the Desktop MFA Enforce Number Matching Challenge org setting
      * @param desktopMFAEnforceNumberMatchingChallengeOrgSetting
      */
  replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting(desktopMFAEnforceNumberMatchingChallengeOrgSetting, _options) {
    const result = this.api.replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting(desktopMFAEnforceNumberMatchingChallengeOrgSetting, _options);
    return result.toPromise();
  }
  /**
      * Replaces the Desktop MFA Recovery PIN feature for your org
      * Replace the Desktop MFA Recovery PIN org setting
      * @param desktopMFARecoveryPinOrgSetting
      */
  replaceDesktopMFARecoveryPinOrgSetting(desktopMFARecoveryPinOrgSetting, _options) {
    const result = this.api.replaceDesktopMFARecoveryPinOrgSetting(desktopMFARecoveryPinOrgSetting, _options);
    return result.toPromise();
  }
}
exports.PromiseDeviceAccessApi = PromiseDeviceAccessApi;
const ObservableAPI_24 = require('./ObservableAPI');
class PromiseDeviceAssuranceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_24.ObservableDeviceAssuranceApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new device assurance policy
      * Create a device assurance policy
      * @param deviceAssurance
      */
  createDeviceAssurancePolicy(deviceAssurance, _options) {
    const result = this.api.createDeviceAssurancePolicy(deviceAssurance, _options);
    return result.toPromise();
  }
  /**
      * Deletes a device assurance policy by `deviceAssuranceId`. If the device assurance policy is currently being used in the org Authentication Policies, the delete will not be allowed.
      * Delete a device assurance policy
      * @param deviceAssuranceId Id of the device assurance policy
      */
  deleteDeviceAssurancePolicy(deviceAssuranceId, _options) {
    const result = this.api.deleteDeviceAssurancePolicy(deviceAssuranceId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a device assurance policy by `deviceAssuranceId`
      * Retrieve a device assurance policy
      * @param deviceAssuranceId Id of the device assurance policy
      */
  getDeviceAssurancePolicy(deviceAssuranceId, _options) {
    const result = this.api.getDeviceAssurancePolicy(deviceAssuranceId, _options);
    return result.toPromise();
  }
  /**
      * Lists all device assurance policies
      * List all device assurance policies
      */
  listDeviceAssurancePolicies(_options) {
    const result = this.api.listDeviceAssurancePolicies(_options);
    return result.toPromise();
  }
  /**
      * Replaces a device assurance policy by `deviceAssuranceId`
      * Replace a device assurance policy
      * @param deviceAssuranceId Id of the device assurance policy
      * @param deviceAssurance
      */
  replaceDeviceAssurancePolicy(deviceAssuranceId, deviceAssurance, _options) {
    const result = this.api.replaceDeviceAssurancePolicy(deviceAssuranceId, deviceAssurance, _options);
    return result.toPromise();
  }
}
exports.PromiseDeviceAssuranceApi = PromiseDeviceAssuranceApi;
const ObservableAPI_25 = require('./ObservableAPI');
class PromiseDeviceIntegrationsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_25.ObservableDeviceIntegrationsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a device integration and populates the related configurations by `deviceIntegrationId`
      * Activate a device integration
      * @param deviceIntegrationId The ID of the device integration
      */
  activateDeviceIntegration(deviceIntegrationId, _options) {
    const result = this.api.activateDeviceIntegration(deviceIntegrationId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a device integration by `deviceIntegrationId`
      * Deactivate a device integration
      * @param deviceIntegrationId The ID of the device integration
      */
  deactivateDeviceIntegration(deviceIntegrationId, _options) {
    const result = this.api.deactivateDeviceIntegration(deviceIntegrationId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a device integration by `deviceIntegrationId`
      * Retrieve a device integration
      * @param deviceIntegrationId The ID of the device integration
      */
  getDeviceIntegration(deviceIntegrationId, _options) {
    const result = this.api.getDeviceIntegration(deviceIntegrationId, _options);
    return result.toPromise();
  }
  /**
      * Lists all device integrations for your org. Examples include Device Posture Provider, Windows Security Center, Chrome Device Trust, OSQuery, and Android Device Trust.
      * List all device integrations
      */
  listDeviceIntegrations(_options) {
    const result = this.api.listDeviceIntegrations(_options);
    return result.toPromise();
  }
}
exports.PromiseDeviceIntegrationsApi = PromiseDeviceIntegrationsApi;
const ObservableAPI_26 = require('./ObservableAPI');
class PromiseDevicePostureCheckApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_26.ObservableDevicePostureCheckApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a device posture check
      * Create a device posture check
      * @param devicePostureCheck
      */
  createDevicePostureCheck(devicePostureCheck, _options) {
    const result = this.api.createDevicePostureCheck(devicePostureCheck, _options);
    return result.toPromise();
  }
  /**
      * Deletes a device posture check by `postureCheckId`. You can\'t delete the device posture check if it\'s used in a device assurance policy.
      * Delete a device posture check
      * @param postureCheckId ID of the device posture check
      */
  deleteDevicePostureCheck(postureCheckId, _options) {
    const result = this.api.deleteDevicePostureCheck(postureCheckId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a device posture check by `postureCheckId`
      * Retrieve a device posture check
      * @param postureCheckId ID of the device posture check
      */
  getDevicePostureCheck(postureCheckId, _options) {
    const result = this.api.getDevicePostureCheck(postureCheckId, _options);
    return result.toPromise();
  }
  /**
      * Lists all default device posture checks. Default device posture checks are defined by Okta. Their type will always be `BUILTIN`.
      * List all default device posture checks
      */
  listDefaultDevicePostureChecks(_options) {
    const result = this.api.listDefaultDevicePostureChecks(_options);
    return result.toPromise();
  }
  /**
      * Lists all device posture checks
      * List all device posture checks
      */
  listDevicePostureChecks(_options) {
    const result = this.api.listDevicePostureChecks(_options);
    return result.toPromise();
  }
  /**
      * Replaces a device posture check by `postureCheckId`
      * Replace a device posture check
      * @param postureCheckId ID of the device posture check
      * @param devicePostureCheck
      */
  replaceDevicePostureCheck(postureCheckId, devicePostureCheck, _options) {
    const result = this.api.replaceDevicePostureCheck(postureCheckId, devicePostureCheck, _options);
    return result.toPromise();
  }
}
exports.PromiseDevicePostureCheckApi = PromiseDevicePostureCheckApi;
const ObservableAPI_27 = require('./ObservableAPI');
class PromiseDirectoriesIntegrationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_27.ObservableDirectoriesIntegrationApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Updates an Active Directory or LDAP  group membership directly in the Active Directory or LDAP server
      * Update an external directory group membership
      * @param appInstanceId ID of the Active Directory or LDAP app instance in Okta
      * @param agentAction
      */
  updateGroupMembership(appInstanceId, agentAction, _options) {
    const result = this.api.updateGroupMembership(appInstanceId, agentAction, _options);
    return result.toPromise();
  }
}
exports.PromiseDirectoriesIntegrationApi = PromiseDirectoriesIntegrationApi;
const ObservableAPI_28 = require('./ObservableAPI');
class PromiseDisasterRecoveryApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_28.ObservableDisasterRecoveryApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the failover or failback status for all the domains for your org
      * Retrieve the disaster recovery status for all domains for your org
      */
  getDRStatus(_options) {
    const result = this.api.getDRStatus(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the failover or failback status for the domain specified in the request path
      * Retrieve the disaster recovery status for a domain
      * @param domain The Okta domain name of your org or one of your custom domains
      */
  getDRStatusForDomain(domain, _options) {
    const result = this.api.getDRStatusForDomain(domain, _options);
    return result.toPromise();
  }
  /**
      * Starts the failback of your org
      * Start the failback of your org
      * @param startOrgFailbackRequest The request body is optional. You can specify a list of domains to failback, an empty object (&#x60;{}&#x60;), or no payload.
      */
  startOrgFailback(startOrgFailbackRequest, _options) {
    const result = this.api.startOrgFailback(startOrgFailbackRequest, _options);
    return result.toPromise();
  }
  /**
      * Starts the failover of your org
      * Start the failover of your org
      * @param startOrgFailoverRequest The request body is optional. You can specify a list of domains to failover, an empty object (&#x60;{}&#x60;), or no payload.
      */
  startOrgFailover(startOrgFailoverRequest, _options) {
    const result = this.api.startOrgFailover(startOrgFailoverRequest, _options);
    return result.toPromise();
  }
}
exports.PromiseDisasterRecoveryApi = PromiseDisasterRecoveryApi;
const ObservableAPI_29 = require('./ObservableAPI');
class PromiseEmailDomainApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_29.ObservableEmailDomainApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates an Email Domain in your org
      * Create an email domain
      * @param emailDomain
      * @param expand Specifies additional metadata to be included in the response
      */
  createEmailDomain(emailDomain, expand, _options) {
    const result = this.api.createEmailDomain(emailDomain, expand, _options);
    return result.toPromise();
  }
  /**
      * Deletes an Email Domain by `emailDomainId`
      * Delete an email domain
      * @param emailDomainId
      * @param expand Specifies additional metadata to be included in the response
      */
  deleteEmailDomain(emailDomainId, expand, _options) {
    const result = this.api.deleteEmailDomain(emailDomainId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an Email Domain by `emailDomainId`
      * Retrieve an email domain
      * @param emailDomainId
      * @param expand Specifies additional metadata to be included in the response
      */
  getEmailDomain(emailDomainId, expand, _options) {
    const result = this.api.getEmailDomain(emailDomainId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all the Email Domains in your org
      * List all email domains
      * @param expand Specifies additional metadata to be included in the response
      */
  listEmailDomains(expand, _options) {
    const result = this.api.listEmailDomains(expand, _options);
    return result.toPromise();
  }
  /**
      * Replaces associated username and sender display name by `emailDomainId`
      * Replace an email domain
      * @param emailDomainId
      * @param updateEmailDomain
      * @param expand Specifies additional metadata to be included in the response
      */
  replaceEmailDomain(emailDomainId, updateEmailDomain, expand, _options) {
    const result = this.api.replaceEmailDomain(emailDomainId, updateEmailDomain, expand, _options);
    return result.toPromise();
  }
  /**
      * Verifies an Email Domain by `emailDomainId`
      * Verify an email domain
      * @param emailDomainId
      */
  verifyEmailDomain(emailDomainId, _options) {
    const result = this.api.verifyEmailDomain(emailDomainId, _options);
    return result.toPromise();
  }
}
exports.PromiseEmailDomainApi = PromiseEmailDomainApi;
const ObservableAPI_30 = require('./ObservableAPI');
class PromiseEmailServerApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_30.ObservableEmailServerApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a custom email SMTP server configuration for your org
      * Create a custom SMTP server
      * @param emailServerPost
      */
  createEmailServer(emailServerPost, _options) {
    const result = this.api.createEmailServer(emailServerPost, _options);
    return result.toPromise();
  }
  /**
      * Deletes the specified custom SMTP server configuration
      * Delete an SMTP server configuration
      * @param emailServerId
      */
  deleteEmailServer(emailServerId, _options) {
    const result = this.api.deleteEmailServer(emailServerId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the specified custom SMTP server configuration
      * Retrieve an SMTP server configuration
      * @param emailServerId
      */
  getEmailServer(emailServerId, _options) {
    const result = this.api.getEmailServer(emailServerId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the enrolled custom SMTP server configurations
      * List all enrolled SMTP servers
      */
  listEmailServers(_options) {
    const result = this.api.listEmailServers(_options);
    return result.toPromise();
  }
  /**
      * Tests the specified custom SMTP Server configuration
      * Test an SMTP server configuration
      * @param emailServerId
      * @param emailTestAddresses
      */
  testEmailServer(emailServerId, emailTestAddresses, _options) {
    const result = this.api.testEmailServer(emailServerId, emailTestAddresses, _options);
    return result.toPromise();
  }
  /**
      * Updates the specified custom SMTP server configuration
      * Update an SMTP server configuration
      * @param emailServerId
      * @param emailServerRequest
      */
  updateEmailServer(emailServerId, emailServerRequest, _options) {
    const result = this.api.updateEmailServer(emailServerId, emailServerRequest, _options);
    return result.toPromise();
  }
}
exports.PromiseEmailServerApi = PromiseEmailServerApi;
const ObservableAPI_31 = require('./ObservableAPI');
class PromiseEventHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_31.ObservableEventHookApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates the event hook that matches the provided `id`
      * Activate an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      */
  activateEventHook(eventHookId, _options) {
    const result = this.api.activateEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new event hook for your organization in `ACTIVE` status. You pass an event hook object in the JSON payload of your request. That object represents the set of required information about the event hook you\'re registering, including:   * The URI of your external service   * The [events](https://developer.okta.com/docs/reference/api/event-types/) in Okta you want to subscribe to   * An optional event hook filter that can reduce the number of event hook calls. This is a self-service Early Access (EA) feature.     See [Create an event hook filter](https://developer.okta.com/docs/concepts/event-hooks/#create-an-event-hook-filter).      Additionally, you can specify a secret API key for Okta to pass to your external service endpoint for security verification. Note that the API key you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs. Optionally, you can specify extra headers that Okta passes to your external service with each call. Your external service must use a valid HTTPS endpoint.
      * Create an event hook
      * @param eventHook
      */
  createEventHook(eventHook, _options) {
    const result = this.api.createEventHook(eventHook, _options);
    return result.toPromise();
  }
  /**
      * Deactivates the event hook that matches the provided `id`
      * Deactivate an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      */
  deactivateEventHook(eventHookId, _options) {
    const result = this.api.deactivateEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the event hook that matches the provided `id`. After deletion, the event hook is unrecoverable. As a safety precaution, you can only delete event hooks with a status of `INACTIVE`.
      * Delete an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      */
  deleteEventHook(eventHookId, _options) {
    const result = this.api.deleteEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an event hook
      * Retrieve an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      */
  getEventHook(eventHookId, _options) {
    const result = this.api.getEventHook(eventHookId, _options);
    return result.toPromise();
  }
  /**
      * Lists all event hooks
      * List all event hooks
      */
  listEventHooks(_options) {
    const result = this.api.listEventHooks(_options);
    return result.toPromise();
  }
  /**
      * Replaces an event hook. Okta validates the new properties before replacing the existing values. Some event hook properties are immutable and can\'t be updated. Refer to the parameter description in the request body schema.  >**Note:** Updating the `channel` property requires you to verify the hook again.
      * Replace an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      * @param eventHook
      */
  replaceEventHook(eventHookId, eventHook, _options) {
    const result = this.api.replaceEventHook(eventHookId, eventHook, _options);
    return result.toPromise();
  }
  /**
      * Verifies that the event hook matches the provided `eventHookId`. To verify ownership, your endpoint must send information back to Okta in JSON format. See [Event hooks](https://developer.okta.com/docs/concepts/event-hooks/#one-time-verification-request).  Only `ACTIVE` and `VERIFIED` event hooks can receive events from Okta.  If a response is not received within 3 seconds, the outbound request times out. One retry is attempted after a timeout or error response. If a successful response still isn\'t received, this operation returns a 400 error with more information about the failure.
      * Verify an event hook
      * @param eventHookId &#x60;id&#x60; of the Event Hook
      */
  verifyEventHook(eventHookId, _options) {
    const result = this.api.verifyEventHook(eventHookId, _options);
    return result.toPromise();
  }
}
exports.PromiseEventHookApi = PromiseEventHookApi;
const ObservableAPI_32 = require('./ObservableAPI');
class PromiseFeatureApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_32.ObservableFeatureApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves a feature by ID
      * Retrieve a feature
      * @param featureId &#x60;id&#x60; of the feature
      */
  getFeature(featureId, _options) {
    const result = this.api.getFeature(featureId, _options);
    return result.toPromise();
  }
  /**
      * Lists all feature dependencies for a specified feature.  A feature\'s dependencies are the features that it requires to be enabled in order for itself to be enabled.
      * List all dependencies
      * @param featureId &#x60;id&#x60; of the feature
      */
  listFeatureDependencies(featureId, _options) {
    const result = this.api.listFeatureDependencies(featureId, _options);
    return result.toPromise();
  }
  /**
      * Lists all feature dependents for the specified feature.  A feature\'s dependents are the features that need to be disabled in order for the feature itself to be disabled.
      * List all dependents
      * @param featureId &#x60;id&#x60; of the feature
      */
  listFeatureDependents(featureId, _options) {
    const result = this.api.listFeatureDependents(featureId, _options);
    return result.toPromise();
  }
  /**
      * Lists all self-service features for your org
      * List all features
      */
  listFeatures(_options) {
    const result = this.api.listFeatures(_options);
    return result.toPromise();
  }
  /**
      * Updates a feature\'s lifecycle status. Use this endpoint to enable or disable a feature for your org.  Use the `mode=force` parameter to override dependency restrictions for a particular feature. Normally, you can\'t enable a feature if it has one or more dependencies that aren\'t enabled.  When you use the `mode=force` parameter while enabling a feature, Okta first tries to enable any disabled features that this feature may have as dependencies. If you don\'t pass the `mode=force` parameter and the feature has dependencies that need to be enabled before the feature is enabled, a 400 error is returned.  When you use the `mode=force` parameter while disabling a feature, Okta first tries to disable any enabled features that this feature may have as dependents. If you don\'t pass the `mode=force` parameter and the feature has dependents that need to be disabled before the feature is disabled, a 400 error is returned.  The following chart shows the different state transitions for a feature.  ![State transitions of a feature](../../../../../images/features/update-ssfeat-flowchart.png \'#width=500px;\')
      * Update a feature lifecycle
      * @param featureId &#x60;id&#x60; of the feature
      * @param lifecycle Whether to &#x60;ENABLE&#x60; or &#x60;DISABLE&#x60; the feature
      * @param mode Indicates if you want to force enable or disable a feature. Supported value is &#x60;force&#x60;.
      */
  updateFeatureLifecycle(featureId, lifecycle, mode, _options) {
    const result = this.api.updateFeatureLifecycle(featureId, lifecycle, mode, _options);
    return result.toPromise();
  }
}
exports.PromiseFeatureApi = PromiseFeatureApi;
const ObservableAPI_33 = require('./ObservableAPI');
class PromiseGovernanceBundleApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_33.ObservableGovernanceBundleApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a governance bundle of entitlements for the Admin Console
      * Create a governance bundle
      * @param governanceBundleCreateRequest
      */
  createGovernanceBundle(governanceBundleCreateRequest, _options) {
    const result = this.api.createGovernanceBundle(governanceBundleCreateRequest, _options);
    return result.toPromise();
  }
  /**
      * Deletes an Admin Console governance bundle
      * Delete a governance bundle
      * @param bundleId The &#x60;id&#x60; of a bundle
      */
  deleteGovernanceBundle(bundleId, _options) {
    const result = this.api.deleteGovernanceBundle(bundleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a governance bundle for the Admin Console
      * Retrieve a governance bundle
      * @param bundleId The &#x60;id&#x60; of a bundle
      */
  getGovernanceBundle(bundleId, _options) {
    const result = this.api.getGovernanceBundle(bundleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the entitlement management opt-in status for the Admin Console
      * Retrieve the Admin Console opt-in status
      */
  getOptInStatus(_options) {
    const result = this.api.getOptInStatus(_options);
    return result.toPromise();
  }
  /**
      * Lists all entitlement values that are specific to a governance bundle entitlement
      * List all values for a governance bundle entitlement
      * @param bundleId The &#x60;id&#x60; of a bundle
      * @param entitlementId The &#x60;id&#x60; of a bundle entitlement
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listBundleEntitlementValues(bundleId, entitlementId, after, limit, _options) {
    const result = this.api.listBundleEntitlementValues(bundleId, entitlementId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all entitlements specific to a governance bundle
      * List all entitlements for a governance bundle
      * @param bundleId The &#x60;id&#x60; of a bundle
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listBundleEntitlements(bundleId, after, limit, _options) {
    const result = this.api.listBundleEntitlements(bundleId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all governance bundles for the Admin Console in your org
      * List all governance bundles
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listGovernanceBundles(after, limit, _options) {
    const result = this.api.listGovernanceBundles(after, limit, _options);
    return result.toPromise();
  }
  /**
      * Opts in the Admin Console to entitlement management
      * Opt in the Admin Console to entitlement management
      */
  optIn(_options) {
    const result = this.api.optIn(_options);
    return result.toPromise();
  }
  /**
      * Opts out the Admin Console from entitlement management
      * Opt out the Admin Console from entitlement management
      */
  optOut(_options) {
    const result = this.api.optOut(_options);
    return result.toPromise();
  }
  /**
      * Replaces the properties of a governance bundle for the Admin Console
      * Replace a governance bundle
      * @param bundleId The &#x60;id&#x60; of a bundle
      * @param governanceBundleUpdateRequest
      */
  replaceGovernanceBundle(bundleId, governanceBundleUpdateRequest, _options) {
    const result = this.api.replaceGovernanceBundle(bundleId, governanceBundleUpdateRequest, _options);
    return result.toPromise();
  }
}
exports.PromiseGovernanceBundleApi = PromiseGovernanceBundleApi;
const ObservableAPI_34 = require('./ObservableAPI');
class PromiseGroupApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_34.ObservableGroupApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a specific group rule by ID from your org
      * Activate a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      */
  activateGroupRule(ruleId, _options) {
    const result = this.api.activateGroupRule(ruleId, _options);
    return result.toPromise();
  }
  /**
      * Assigns a group owner
      * Assign a group owner
      * @param groupId The &#x60;id&#x60; of the group
      * @param groupOwner
      */
  assignGroupOwner(groupId, groupOwner, _options) {
    const result = this.api.assignGroupOwner(groupId, groupOwner, _options);
    return result.toPromise();
  }
  /**
      * Assigns a user to a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Assign a user to a group
      * @param groupId The &#x60;id&#x60; of the group
      * @param userId ID of an existing Okta user
      */
  assignUserToGroup(groupId, userId, _options) {
    const result = this.api.assignUserToGroup(groupId, userId, _options);
    return result.toPromise();
  }
  /**
      * Adds a new group with the `OKTA_GROUP` type to your org. > **Note:** App import operations are responsible for syncing groups with `APP_GROUP` type such as Active Directory groups. See [About groups](https://help.okta.com/okta_help.htm?id=Directory_Groups) in the help documentation.
      * Add a group
      * @param group
      */
  createGroup(group, _options) {
    const result = this.api.createGroup(group, _options);
    return result.toPromise();
  }
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition. > **Note:** Group rules are created with the status set to `\'INACTIVE\'`.
      * Create a group rule
      * @param groupRule
      */
  createGroupRule(groupRule, _options) {
    const result = this.api.createGroupRule(groupRule, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a specific group rule by ID from your org
      * Deactivate a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      */
  deactivateGroupRule(ruleId, _options) {
    const result = this.api.deactivateGroupRule(ruleId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a group of the `OKTA_GROUP` or `APP_GROUP` type from your org. > **Note:** You can\'t remove groups of type `APP_GROUP` if they are used in a group push mapping.
      * Delete a group
      * @param groupId The &#x60;id&#x60; of the group
      */
  deleteGroup(groupId, _options) {
    const result = this.api.deleteGroup(groupId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a group owner from a specific group
      * Delete a group owner
      * @param groupId The &#x60;id&#x60; of the group
      * @param ownerId The &#x60;id&#x60; of the group owner
      */
  deleteGroupOwner(groupId, ownerId, _options) {
    const result = this.api.deleteGroupOwner(groupId, ownerId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a specific group rule by `groupRuleId`
      * Delete a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      * @param removeUsers If set to &#x60;true&#x60;, removes users from groups assigned by this rule
      */
  deleteGroupRule(ruleId, removeUsers, _options) {
    const result = this.api.deleteGroupRule(ruleId, removeUsers, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific group by `id` from your org
      * Retrieve a group
      * @param groupId The &#x60;id&#x60; of the group
      */
  getGroup(groupId, _options) {
    const result = this.api.getGroup(groupId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific group rule by ID from your org
      * Retrieve a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
      */
  getGroupRule(ruleId, expand, _options) {
    const result = this.api.getGroupRule(ruleId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all apps that are assigned to a group. See [Application Groups API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationGroups/).
      * List all assigned apps
      * @param groupId The &#x60;id&#x60; of the group
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of app results for a page
      */
  listAssignedApplicationsForGroup(groupId, after, limit, _options) {
    const result = this.api.listAssignedApplicationsForGroup(groupId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all owners for a specific group
      * List all group owners
      * @param groupId The &#x60;id&#x60; of the group
      * @param search SCIM filter expression for group owners. Allows you to filter owners by type.
      * @param after Specifies the pagination cursor for the next page of owners
      * @param limit Specifies the number of owner results in a page
      */
  listGroupOwners(groupId, search, after, limit, _options) {
    const result = this.api.listGroupOwners(groupId, search, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all group rules for your org
      * List all group rules
      * @param limit Specifies the number of rule results in a page
      * @param after Specifies the pagination cursor for the next page of rules
      * @param search Specifies the keyword to search rules for
      * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then displays group names
      */
  listGroupRules(limit, after, search, expand, _options) {
    const result = this.api.listGroupRules(limit, after, search, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all users that are a member of a group. The default user limit is set to a very high number due to historical reasons that are no longer valid for most orgs. This will change in a future version of this API. The recommended page limit is now `limit=200`.
      * List all member users
      * @param groupId The &#x60;id&#x60; of the group
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit Specifies the number of user results in a page
      */
  listGroupUsers(groupId, after, limit, _options) {
    const result = this.api.listGroupUsers(groupId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all groups with pagination support.  > **Note:** To list all groups belonging to a member, use the [List all groups endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserGroups).  The number of groups returned depends on the specified [`limit`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!in=query&path=limit&t=request), if you have a search, filter, and/or query parameter set, and if that parameter is not null. We recommend using a limit less than or equal to 200.  A subset of groups can be returned that match a supported filter expression, query, or search criteria.  > **Note:** The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.
      * List all groups
      * @param search Searches for groups with a supported [filtering](https://developer.okta.com/docs/api/#filter) expression for all properties except for &#x60;_embedded&#x60;, &#x60;_links&#x60;, and &#x60;objectClass&#x60;. Okta recommends this query parameter because it provides the largest range of search options and optimal performance.  This operation supports [pagination](https://developer.okta.com/docs/api/#pagination).  Using search requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding), for example, &#x60;search&#x3D;type eq \&quot;OKTA_GROUP\&quot;&#x60; is encoded as &#x60;search&#x3D;type+eq+%22OKTA_GROUP%22&#x60;.  This operation searches many properties:  * Any group profile attribute, including imported app group profile attributes. * The top-level properties: &#x60;id&#x60;, &#x60;created&#x60;, &#x60;lastMembershipUpdated&#x60;, &#x60;lastUpdated&#x60;, and &#x60;type&#x60;. * The [source](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!c&#x3D;200&amp;path&#x3D;_links/source&amp;t&#x3D;response) of groups with type of &#x60;APP_GROUP&#x60;, accessed as &#x60;source.id&#x60;.  You can also use the &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters.  Searches for groups can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. You can only use &#x60;co&#x60; with these select profile attributes: &#x60;profile.name&#x60; and &#x60;profile.description&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @param filter Filter expression for groups. See [Filter](https://developer.okta.com/docs/api/#filter).  Filtering supports the following limited number of properties: &#x60;id&#x60;, &#x60;type&#x60;, &#x60;lastUpdated&#x60;, and &#x60;lastMembershipUpdated&#x60;.  &gt; **Note:** All filters must be [URL encoded](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;filter&#x3D;lastUpdated gt \&quot;2013-06-01T00:00:00.000Z\&quot;&#x60; is encoded as &#x60;filter&#x3D;lastUpdated%20gt%20%222013-06-01T00:00:00.000Z%22&#x60;.  See [Special characters](https://developer.okta.com/docs/api/#special-characters).
      * @param q Finds a group that matches the &#x60;name&#x60; property. &gt; **Note:** Paging and searching are currently mutually exclusive. You can\&#39;t page a query. The default limit for a query is 300 results. Query is intended for an auto-complete picker use case where users refine their search string to constrain the results.
      * @param after Specifies the pagination cursor for the next page of groups. The &#x60;after&#x60; cursor should be treated as an opaque value and obtained through the next link relation. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of group results in a page.  Okta recommends using a specific value other than the default or maximum. If your request times out, retry your request with a smaller &#x60;limit&#x60; and [page the results](https://developer.okta.com/docs/api/#pagination).  The Okta default &#x60;Everyone&#x60; group isn\&#39;t returned for users with a group admin role.
      * @param expand If specified, additional metadata is included in the response. Possible values are &#x60;stats&#x60; and &#x60;app&#x60;. This additional metadata is listed in the [&#x60;_embedded&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/addGroup!c&#x3D;200&amp;path&#x3D;_embedded&amp;t&#x3D;response) property of the response.  &gt; **Note:** You can use the &#x60;stats&#x60; value to return the number of users within a group. This is listed as the &#x60;_embedded.stats.usersCount&#x60; value in the response. See this [Knowledge Base article](https://support.okta.com/help/s/article/Is-there-an-API-that-returns-the-number-of-users-in-a-group?language&#x3D;en_US) for more information and an example.
      * @param sortBy Specifies the field to sort by (for search queries only). &#x60;sortBy&#x60; can be any single property, for example &#x60;sortBy&#x3D;profile.name&#x60;. Groups with the same value for the &#x60;sortBy&#x60; property are ordered by &#x60;id&#x60;\&#39;. Use with &#x60;sortOrder&#x60; to control the order of results.
      * @param sortOrder Specifies sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
      */
  listGroups(search, filter, q, after, limit, expand, sortBy, sortOrder, _options) {
    const result = this.api.listGroups(search, filter, q, after, limit, expand, sortBy, sortOrder, _options);
    return result.toPromise();
  }
  /**
      * Replaces the profile for a group of `OKTA_GROUP` type from your org. > **Note :** You only can modify profiles for groups of the `OKTA_GROUP` type. > > App imports are responsible for updating profiles for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Replace a group
      * @param groupId The &#x60;id&#x60; of the group
      * @param group
      */
  replaceGroup(groupId, group, _options) {
    const result = this.api.replaceGroup(groupId, group, _options);
    return result.toPromise();
  }
  /**
      * Replaces a group rule > **Notes:** You can only update rules with a group whose status is set to `INACTIVE`. > > You currently can\'t update the `actions` section.
      * Replace a group rule
      * @param ruleId The &#x60;id&#x60; of the group rule
      * @param groupRule
      */
  replaceGroupRule(ruleId, groupRule, _options) {
    const result = this.api.replaceGroupRule(ruleId, groupRule, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a user from a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. > > App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Unassign a user from a group
      * @param groupId The &#x60;id&#x60; of the group
      * @param userId ID of an existing Okta user
      */
  unassignUserFromGroup(groupId, userId, _options) {
    const result = this.api.unassignUserFromGroup(groupId, userId, _options);
    return result.toPromise();
  }
}
exports.PromiseGroupApi = PromiseGroupApi;
const ObservableAPI_35 = require('./ObservableAPI');
class PromiseGroupPushMappingApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_35.ObservableGroupPushMappingApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates or links a group push mapping.  **Note:** Either `targetGroupId` or `targetGroupName` must be provided, but not both. If `targetGroupId` is provided, it links to an existing group. If `targetGroupName` is provided, it creates a new group.
      * Create a group push mapping
      * @param appId Application ID
      * @param body
      */
  createGroupPushMapping(appId, body, _options) {
    const result = this.api.createGroupPushMapping(appId, body, _options);
    return result.toPromise();
  }
  /**
      * Deletes a specific group push mapping. The group push mapping must be in an `INACTIVE` state.
      * Delete a group push mapping
      * @param appId Application ID
      * @param mappingId Group push mapping ID
      * @param deleteTargetGroup If set to &#x60;true&#x60;, the target group is also deleted. If set to &#x60;false&#x60;, the target group isn\&#39;t deleted.
      */
  deleteGroupPushMapping(appId, mappingId, deleteTargetGroup, _options) {
    const result = this.api.deleteGroupPushMapping(appId, mappingId, deleteTargetGroup, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a group push mapping by ID
      * Retrieve a group push mapping
      * @param appId Application ID
      * @param mappingId Group push mapping ID
      */
  getGroupPushMapping(appId, mappingId, _options) {
    const result = this.api.getGroupPushMapping(appId, mappingId, _options);
    return result.toPromise();
  }
  /**
      * Lists all group push mappings with pagination support
      * List all group push mappings
      * @param appId Application ID
      * @param after Specifies the pagination cursor for the next page of mappings
      * @param limit Specifies the number of results returned
      * @param lastUpdated Filters group push mappings by last updated date. The &#x60;lastUpdated&#x60; parameter supports the following format: &#x60;YYYY-MM-DDTHH:mm:ssZ&#x60;. This filters mappings updated on or after the specified date and time in UTC.  If you don\&#39;t specify a value, all group push mappings are returned.
      * @param sourceGroupId Filters group push mappings by source group ID. If you don\&#39;t specify a value, all group push mappings are returned.
      * @param status Filters group push mappings by status. If you don\&#39;t specify a value, all group push mappings are returned.
      */
  listGroupPushMappings(appId, after, limit, lastUpdated, sourceGroupId, status, _options) {
    const result = this.api.listGroupPushMappings(appId, after, limit, lastUpdated, sourceGroupId, status, _options);
    return result.toPromise();
  }
  /**
      * Updates the status of a group push mapping
      * Update a group push mapping
      * @param appId Application ID
      * @param mappingId Group push mapping ID
      * @param body
      */
  updateGroupPushMapping(appId, mappingId, body, _options) {
    const result = this.api.updateGroupPushMapping(appId, mappingId, body, _options);
    return result.toPromise();
  }
}
exports.PromiseGroupPushMappingApi = PromiseGroupPushMappingApi;
const ObservableAPI_36 = require('./ObservableAPI');
class PromiseHookKeyApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_36.ObservableHookKeyApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a key for use with other parts of the application, such as inline hooks  > **Note:**  Use the key name to access this key for inline hook operations.  The total number of keys that you can create in an Okta org is limited to 50.   The response is a [Key object](https://developer.okta.com/docs/reference/api/hook-keys/#key-object) that represents the   key that you create. The `id` property in the response serves as the unique ID for the key, which you can specify when   invoking other CRUD operations. The `keyId` provided in the response is the alias of the public key that you can use to get   details of the public key data in a separate call.  > **Note:** The keyId is the alias of the public key that you can use to retrieve the public key.
      * Create a key
      * @param keyRequest
      */
  createHookKey(keyRequest, _options) {
    const result = this.api.createHookKey(keyRequest, _options);
    return result.toPromise();
  }
  /**
      * Deletes a key by `id`. After being deleted, the key is unrecoverable.  As a safety precaution, only keys that aren\'t being used are eligible for deletion.
      * Delete a key
      * @param hookKeyId ID of the Hook Key
      */
  deleteHookKey(hookKeyId, _options) {
    const result = this.api.deleteHookKey(hookKeyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the public portion of the Key object using the `id` parameter  >**Note:** The `?expand=publickey` query parameter optionally returns the full object including the details of the public key in the response body\'s `_embedded` property.
      * Retrieve a key by ID
      * @param hookKeyId ID of the Hook Key
      */
  getHookKey(hookKeyId, _options) {
    const result = this.api.getHookKey(hookKeyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a public key by `keyId`  >**Note:** keyId is the alias of the public key.
      * Retrieve a public key
      * @param keyId id\&quot; of the Public Key
      */
  getPublicKey(keyId, _options) {
    const result = this.api.getPublicKey(keyId, _options);
    return result.toPromise();
  }
  /**
      * Lists all keys
      * List all keys
      */
  listHookKeys(_options) {
    const result = this.api.listHookKeys(_options);
    return result.toPromise();
  }
  /**
      * Replaces a key by `id`  This request replaces existing properties after passing validation.  > **Note:** The only parameter that you can update is the name of the key, which must be unique at all times.
      * Replace a key
      * @param hookKeyId ID of the Hook Key
      * @param keyRequest
      */
  replaceHookKey(hookKeyId, keyRequest, _options) {
    const result = this.api.replaceHookKey(hookKeyId, keyRequest, _options);
    return result.toPromise();
  }
}
exports.PromiseHookKeyApi = PromiseHookKeyApi;
const ObservableAPI_37 = require('./ObservableAPI');
class PromiseIdentityProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_37.ObservableIdentityProviderApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates an inactive identity provider (IdP)
      * Activate an IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  activateIdentityProvider(idpId, _options) {
    const result = this.api.activateIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Clones an X.509 certificate for an identity provider (IdP) signing key credential from a source IdP to target IdP > **Caution:** Sharing certificates isn\'t a recommended security practice.  > **Note:** If the key is already present in the list of key credentials for the target IdP, you receive a 400 error response.
      * Clone a signing key credential for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      * @param targetIdpId &#x60;id&#x60; of the target IdP
      */
  cloneIdentityProviderKey(idpId, keyId, targetIdpId, _options) {
    const result = this.api.cloneIdentityProviderKey(idpId, keyId, targetIdpId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new identity provider (IdP) integration.  #### SAML 2.0 IdP  You must first add the IdP\'s signature certificate to the IdP key store before you can add a SAML 2.0 IdP with a `kid` credential reference.   Don\'t use `fromURI` to automatically redirect a user to a particular app after successfully authenticating with a third-party IdP. Instead, use SAML deep links. Using `fromURI` isn\'t tested or supported. For more information about using deep links when signing users in using an SP-initiated flow, see [Understanding SP-Initiated Login flow](https://developer.okta.com/docs/concepts/saml/#understanding-sp-initiated-login-flow).  Use SAML deep links to automatically redirect the user to an app after successfully authenticating with a third-party IdP. To use deep links, assemble these three parts into a URL:  * SP ACS URL<br> For example: `https://${yourOktaDomain}/sso/saml2/:idpId` * The app to which the user is automatically redirected after successfully authenticating with the IdP <br> For example: `/app/:app-location/:appId/sso/saml` * Optionally, if the app is an outbound SAML app, you can specify the `relayState` passed to it.<br> For example: `?RelayState=:anyUrlEncodedValue`  The deep link for the above three parts is:<br> `https://${yourOktaDomain}/sso/saml2/:idpId/app/:app-location/:appId/sso/saml?RelayState=:anyUrlEncodedValue`  #### Smart Card X509 IdP  You must first add the IdP\'s server certificate to the IdP key store before you can add a Smart Card `X509` IdP with a `kid` credential reference. You need to upload the whole trust chain as a single key using the [Key Store API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderKeys/#tag/IdentityProviderKeys/operation/createIdentityProviderKey). Depending on the information stored in the smart card, select the proper [template](https://developer.okta.com/docs/reference/okta-expression-language/#idp-user-profile) `idpuser.subjectAltNameEmail` or `idpuser.subjectAltNameUpn`.  #### Identity verification vendors as identity providers  Identity verification (IDV) vendors work like IdPs, with a few key differences. IDV vendors verify your user\'s identities by requiring them to submit a proof of identity. There are many ways to verify user identities. For example, a proof of identity can be a selfie to determine liveliness or it can be requiring users to submit a photo of their driver\'s license and matching that information with a database.  There are three IDV vendors (Persona, CLEAR Verified, and Incode) with specific configuration settings and another IDV vendor type (Custom IDV) that lets you create a custom IDV vendor, using a [standardized IDV process](https://developer.okta.com/docs/guides/idv-integration/main/). You can configure each of the IDV vendors as IdPs in your org by creating an account with the vendor, and then creating an IdP integration. Control how the IDVs verify your users by using [Okta account management policy rules](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).  * [Persona](https://withpersona.com/)  * [CLEAR Verified](https://www.clearme.com/)  * [Incode](https://incode.com/)  * [Custom IDV](https://help.okta.com/okta_help.htm?type=oie&id=idp-add-custom-idv-vendor)
      * Create an IdP
      * @param identityProvider IdP settings
      */
  createIdentityProvider(identityProvider, _options) {
    const result = this.api.createIdentityProvider(identityProvider, _options);
    return result.toPromise();
  }
  /**
      * Creates a new X.509 certificate credential in the identity provider (IdP) key store > **Note:** RSA-based certificates are supported for all IdP types. Okta currently supports EC-based certificates only for the `X509` IdP type. For EC-based certificates we support only P-256, P-384, and P-521 curves.
      * Create an IdP key credential
      * @param jsonWebKey
      */
  createIdentityProviderKey(jsonWebKey, _options) {
    const result = this.api.createIdentityProviderKey(jsonWebKey, _options);
    return result.toPromise();
  }
  /**
      * Deactivates an active identity provider (IdP)
      * Deactivate an IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  deactivateIdentityProvider(idpId, _options) {
    const result = this.api.deactivateIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an identity provider (IdP) integration by `idpId` * All existing IdP users are unlinked with the highest order profile source taking precedence for each IdP user. * Unlinked users keep their existing authentication provider such as `FEDERATION` or `SOCIAL`.
      * Delete an IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  deleteIdentityProvider(idpId, _options) {
    const result = this.api.deleteIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a specific identity provider (IdP) key credential by `kid` if it isn\'t currently being used by an active or inactive IdP
      * Delete an IdP key credential
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      */
  deleteIdentityProviderKey(keyId, _options) {
    const result = this.api.deleteIdentityProviderKey(keyId, _options);
    return result.toPromise();
  }
  /**
      * Generates a new key pair and returns a certificate signing request (CSR) for it > **Note:** The private key isn\'t listed in the [signing key credentials for the identity provider (IdP)](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderSigningKeys/#tag/IdentityProviderSigningKeys/operation/listIdentityProviderSigningKeys) until it\'s published.
      * Generate a certificate signing request
      * @param idpId &#x60;id&#x60; of IdP
      * @param metadata
      */
  generateCsrForIdentityProvider(idpId, metadata, _options) {
    const result = this.api.generateCsrForIdentityProvider(idpId, metadata, _options);
    return result.toPromise();
  }
  /**
      * Generates a new X.509 certificate for an identity provider (IdP) signing key credential to be used for signing assertions sent to the IdP. IdP signing keys are read-only. > **Note:** To update an IdP with the newly generated key credential, [update your IdP](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider) using the returned key\'s `kid` in the [signing credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/credentials/signing/kid&t=request).
      * Generate a new signing key credential for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param validityYears expiry of the IdP key credential
      */
  generateIdentityProviderSigningKey(idpId, validityYears, _options) {
    const result = this.api.generateIdentityProviderSigningKey(idpId, validityYears, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific certificate signing request (CSR) by `id`
      * Retrieve a certificate signing request
      * @param idpId &#x60;id&#x60; of IdP
      * @param csrId &#x60;id&#x60; of the IdP CSR
      */
  getCsrForIdentityProvider(idpId, csrId, _options) {
    const result = this.api.getCsrForIdentityProvider(idpId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an identity provider (IdP) integration by `idpId`
      * Retrieve an IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  getIdentityProvider(idpId, _options) {
    const result = this.api.getIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a linked identity provider (IdP) user by ID
      * Retrieve a user for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  getIdentityProviderApplicationUser(idpId, userId, _options) {
    const result = this.api.getIdentityProviderApplicationUser(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific identity provider (IdP) key credential by `kid`
      * Retrieve an IdP key credential
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      */
  getIdentityProviderKey(keyId, _options) {
    const result = this.api.getIdentityProviderKey(keyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific identity provider (IdP) key credential by `kid`
      * Retrieve a signing key credential for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      */
  getIdentityProviderSigningKey(idpId, keyId, _options) {
    const result = this.api.getIdentityProviderSigningKey(idpId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
      * Link a user to IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      * @param userIdentityProviderLinkRequest
      */
  linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options) {
    const result = this.api.linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options);
    return result.toPromise();
  }
  /**
      * Lists the active signing key credential for an identity provider (IdP)
      * List the active signing key credential for IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  listActiveIdentityProviderSigningKey(idpId, _options) {
    const result = this.api.listActiveIdentityProviderSigningKey(idpId, _options);
    return result.toPromise();
  }
  /**
      * Lists all certificate signing requests (CSRs) for an identity provider (IdP)
      * List all certificate signing requests
      * @param idpId &#x60;id&#x60; of IdP
      */
  listCsrsForIdentityProvider(idpId, _options) {
    const result = this.api.listCsrsForIdentityProvider(idpId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the users linked to an identity provider (IdP)
      * List all users for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param q Searches the records for matching value
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      * @param expand Expand user data
      */
  listIdentityProviderApplicationUsers(idpId, q, after, limit, expand, _options) {
    const result = this.api.listIdentityProviderApplicationUsers(idpId, q, after, limit, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all identity provider (IdP) key credentials
      * List all IdP key credentials
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listIdentityProviderKeys(after, limit, _options) {
    const result = this.api.listIdentityProviderKeys(after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all signing key credentials for an identity provider (IdP)
      * List all signing key credentials for IdP
      * @param idpId &#x60;id&#x60; of IdP
      */
  listIdentityProviderSigningKeys(idpId, _options) {
    const result = this.api.listIdentityProviderSigningKeys(idpId, _options);
    return result.toPromise();
  }
  /**
      * Lists all identity provider (IdP) integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all IdPs
      * @param q Searches the &#x60;name&#x60; property of IdPs for matching value
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      * @param type Filters IdPs by &#x60;type&#x60;
      */
  listIdentityProviders(q, after, limit, type, _options) {
    const result = this.api.listIdentityProviders(q, after, limit, type, _options);
    return result.toPromise();
  }
  /**
      * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
      * List all tokens from OIDC IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  listSocialAuthTokens(idpId, userId, _options) {
    const result = this.api.listSocialAuthTokens(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Lists the identity providers (IdPs) associated with the user
      * List all IdPs for user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listUserIdentityProviders(userId, _options) {
    const result = this.api.listUserIdentityProviders(userId, _options);
    return result.toPromise();
  }
  /**
      * Publishes the certificate signing request (CSR) with a signed X.509 certificate and adds it into the signing key credentials for the identity provider (IdP) > **Notes:** > * Publishing a certificate completes the lifecycle of the CSR, and it\'s no longer accessible. > * If the validity period of the certificate is less than 90 days, a 400 error response is returned.
      * Publish a certificate signing request
      * @param idpId &#x60;id&#x60; of IdP
      * @param csrId &#x60;id&#x60; of the IdP CSR
      * @param body
      */
  publishCsrForIdentityProvider(idpId, csrId, body, _options) {
    const result = this.api.publishCsrForIdentityProvider(idpId, csrId, body, _options);
    return result.toPromise();
  }
  /**
      * Replaces an identity provider (IdP) integration by `idpId`
      * Replace an IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param identityProvider Updated configuration for the IdP
      */
  replaceIdentityProvider(idpId, identityProvider, _options) {
    const result = this.api.replaceIdentityProvider(idpId, identityProvider, _options);
    return result.toPromise();
  }
  /**
      * Replaces an identity provider (IdP) key credential by `kid`
      * Replace an IdP key credential
      * @param keyId Unique &#x60;id&#x60; of the IdP key credential
      * @param idPKeyCredential Updated IdP key credential
      */
  replaceIdentityProviderKey(keyId, idPKeyCredential, _options) {
    const result = this.api.replaceIdentityProviderKey(keyId, idPKeyCredential, _options);
    return result.toPromise();
  }
  /**
      * Revokes a certificate signing request (CSR) and deletes the key pair from the identity provider (IdP)
      * Revoke a certificate signing request
      * @param idpId &#x60;id&#x60; of IdP
      * @param csrId &#x60;id&#x60; of the IdP CSR
      */
  revokeCsrForIdentityProvider(idpId, csrId, _options) {
    const result = this.api.revokeCsrForIdentityProvider(idpId, csrId, _options);
    return result.toPromise();
  }
  /**
      * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
      * Unlink a user from IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  unlinkUserFromIdentityProvider(idpId, userId, _options) {
    const result = this.api.unlinkUserFromIdentityProvider(idpId, userId, _options);
    return result.toPromise();
  }
}
exports.PromiseIdentityProviderApi = PromiseIdentityProviderApi;
const ObservableAPI_38 = require('./ObservableAPI');
class PromiseIdentitySourceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_38.ObservableIdentitySourceApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a group in an identity source for the given identity source instance
      * Create an identity source group
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param groupsRequestSchema
      */
  createIdentitySourceGroups(identitySourceId, groupsRequestSchema, _options) {
    const result = this.api.createIdentitySourceGroups(identitySourceId, groupsRequestSchema, _options);
    return result.toPromise();
  }
  /**
      * Creates the group memberships for the given identity source group
      * Create the memberships for the given identity source group
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param groupOrExternalId The Okta group ID or external ID of the identity source group
      * @param membershipRequestSchema
      */
  createIdentitySourceGroupsMemberships(identitySourceId, groupOrExternalId, membershipRequestSchema, _options) {
    const result = this.api.createIdentitySourceGroupsMemberships(identitySourceId, groupOrExternalId, membershipRequestSchema, _options);
    return result.toPromise();
  }
  /**
      * Creates an identity source session for the given identity source instance
      * Create an identity source session
      * @param identitySourceId The ID of the identity source for which the session is created
      */
  createIdentitySourceSession(identitySourceId, _options) {
    const result = this.api.createIdentitySourceSession(identitySourceId, _options);
    return result.toPromise();
  }
  /**
      * Creates a user in an identity source for the given identity source instance
      * Create an identity source user
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param userRequestSchema
      */
  createIdentitySourceUser(identitySourceId, userRequestSchema, _options) {
    const result = this.api.createIdentitySourceUser(identitySourceId, userRequestSchema, _options);
    return result.toPromise();
  }
  /**
      * Deletes a group in an identity source for a given identity source ID and group ID
      * Delete an identity source group
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param groupOrExternalId The Okta group ID or external ID of the identity source group
      */
  deleteIdentitySourceGroup(identitySourceId, groupOrExternalId, _options) {
    const result = this.api.deleteIdentitySourceGroup(identitySourceId, groupOrExternalId, _options);
    return result.toPromise();
  }
  /**
      * Deletes group memberships for the specified identity source group using member external IDs
      * Delete the memberships for the specified identity source group
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param groupOrExternalId The Okta group ID or external ID of the identity source group
      * @param memberExternalId The external ID of the identity source user
      */
  deleteIdentitySourceGroupMemberships(identitySourceId, groupOrExternalId, memberExternalId, _options) {
    const result = this.api.deleteIdentitySourceGroupMemberships(identitySourceId, groupOrExternalId, memberExternalId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an identity source session for a given identity source ID and session Id
      * Delete an identity source session
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      */
  deleteIdentitySourceSession(identitySourceId, sessionId, _options) {
    const result = this.api.deleteIdentitySourceSession(identitySourceId, sessionId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a user in an identity source for the given identity source instance and external ID
      * Delete an identity source user
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param externalId The external ID of the user
      */
  deleteIdentitySourceUser(identitySourceId, externalId, _options) {
    const result = this.api.deleteIdentitySourceUser(identitySourceId, externalId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a group from an identity source for a given identity source ID and group ID or external ID
      * Retrieve an identity source group
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param groupOrExternalId The Okta group ID or external ID of the identity source group
      */
  getIdentitySourceGroup(identitySourceId, groupOrExternalId, _options) {
    const result = this.api.getIdentitySourceGroup(identitySourceId, groupOrExternalId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the group memberships for the given identity source group in the given identity source instance
      * Retrieve the memberships for the given identity source group
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param groupOrExternalId The Okta group ID or external ID of the identity source group
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit Specifies the number of group membership results in a page. Okta recommends using a specific value other than the default or maximum. If your request times out, retry your request with a smaller &#x60;limit&#x60; and [page the results](https://developer.okta.com/docs/api/#pagination).
      */
  getIdentitySourceGroupMemberships(identitySourceId, groupOrExternalId, after, limit, _options) {
    const result = this.api.getIdentitySourceGroupMemberships(identitySourceId, groupOrExternalId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an identity source session for a given identity source ID and session ID
      * Retrieve an identity source session
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      */
  getIdentitySourceSession(identitySourceId, sessionId, _options) {
    const result = this.api.getIdentitySourceSession(identitySourceId, sessionId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a user by external ID in an identity source for the given identity source instance
      * Retrieve an identity source user
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param externalId The external ID of the user
      */
  getIdentitySourceUser(identitySourceId, externalId, _options) {
    const result = this.api.getIdentitySourceUser(identitySourceId, externalId, _options);
    return result.toPromise();
  }
  /**
      * Lists all identity source sessions for the given identity source instance
      * List all identity source sessions
      * @param identitySourceId The ID of the identity source for which the session is created
      */
  listIdentitySourceSessions(identitySourceId, _options) {
    const result = this.api.listIdentitySourceSessions(identitySourceId, _options);
    return result.toPromise();
  }
  /**
      * Replaces an existing user for the given identity source instance and external ID
      * Replace an existing identity source user
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param externalId The external ID of the user
      * @param userRequestSchema
      */
  replaceExistingIdentitySourceUser(identitySourceId, externalId, userRequestSchema, _options) {
    const result = this.api.replaceExistingIdentitySourceUser(identitySourceId, externalId, userRequestSchema, _options);
    return result.toPromise();
  }
  /**
      * Starts the import from the identity source described by the uploaded bulk operations
      * Start the import from the identity source
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      */
  startImportFromIdentitySource(identitySourceId, sessionId, _options) {
    const result = this.api.startImportFromIdentitySource(identitySourceId, sessionId, _options);
    return result.toPromise();
  }
  /**
      * Updates a group to an identity source for the given identity source instance and group ID
      * Update an identity source group
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param groupOrExternalId The Okta group ID or external ID of the identity source group
      * @param groupsRequestSchema
      */
  updateIdentitySourceGroups(identitySourceId, groupOrExternalId, groupsRequestSchema, _options) {
    const result = this.api.updateIdentitySourceGroups(identitySourceId, groupOrExternalId, groupsRequestSchema, _options);
    return result.toPromise();
  }
  /**
      * Updates a user to an identity source for the given identity source instance and external ID
      * Update an identity source user
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param externalId The external ID of the user
      * @param usersUpdateRequestSchema
      */
  updateIdentitySourceUsers(identitySourceId, externalId, usersUpdateRequestSchema, _options) {
    const result = this.api.updateIdentitySourceUsers(identitySourceId, externalId, usersUpdateRequestSchema, _options);
    return result.toPromise();
  }
  /**
      * Uploads external IDs of entities that need to be deleted in Okta from the identity source for the given session
      * Upload the data to be deleted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkDeleteRequestBody
      */
  uploadIdentitySourceDataForDelete(identitySourceId, sessionId, bulkDeleteRequestBody, _options) {
    const result = this.api.uploadIdentitySourceDataForDelete(identitySourceId, sessionId, bulkDeleteRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Uploads entities that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the data to be upserted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkUpsertRequestBody
      */
  uploadIdentitySourceDataForUpsert(identitySourceId, sessionId, bulkUpsertRequestBody, _options) {
    const result = this.api.uploadIdentitySourceDataForUpsert(identitySourceId, sessionId, bulkUpsertRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Uploads the group memberships that need to be deleted in Okta from the identity source for the given session
      * Upload the group memberships to be deleted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkGroupMembershipsDeleteRequestBody
      */
  uploadIdentitySourceGroupMembershipsForDelete(identitySourceId, sessionId, bulkGroupMembershipsDeleteRequestBody, _options) {
    const result = this.api.uploadIdentitySourceGroupMembershipsForDelete(identitySourceId, sessionId, bulkGroupMembershipsDeleteRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Uploads the group memberships that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the group memberships to be upserted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkGroupMembershipsUpsertRequestBody
      */
  uploadIdentitySourceGroupMembershipsForUpsert(identitySourceId, sessionId, bulkGroupMembershipsUpsertRequestBody, _options) {
    const result = this.api.uploadIdentitySourceGroupMembershipsForUpsert(identitySourceId, sessionId, bulkGroupMembershipsUpsertRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Uploads external IDs of groups that need to be deleted in Okta from the identity source for the given session
      * Upload the group external IDs to be deleted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkGroupDeleteRequestBody
      */
  uploadIdentitySourceGroupsDataForDelete(identitySourceId, sessionId, bulkGroupDeleteRequestBody, _options) {
    const result = this.api.uploadIdentitySourceGroupsDataForDelete(identitySourceId, sessionId, bulkGroupDeleteRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Uploads the group profiles without memberships that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the group profiles without memberships to be upserted in Okta
      * @param identitySourceId The ID of the identity source for which the session is created
      * @param sessionId The ID of the identity source session
      * @param bulkGroupUpsertRequestBody
      */
  uploadIdentitySourceGroupsForUpsert(identitySourceId, sessionId, bulkGroupUpsertRequestBody, _options) {
    const result = this.api.uploadIdentitySourceGroupsForUpsert(identitySourceId, sessionId, bulkGroupUpsertRequestBody, _options);
    return result.toPromise();
  }
}
exports.PromiseIdentitySourceApi = PromiseIdentitySourceApi;
const ObservableAPI_39 = require('./ObservableAPI');
class PromiseInlineHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_39.ObservableInlineHookApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates the inline hook by `inlineHookId`
      * Activate an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      */
  activateInlineHook(inlineHookId, _options) {
    const result = this.api.activateInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Creates an inline hook  This endpoint creates an inline hook for your org in an `ACTIVE` status. You need to pass an inline hooks object in the JSON payload of your request.  That object represents the set of required information about the inline hook that you\'re registering, including:  * The URI of your external service endpoint * The type of inline hook you\'re registering * The type of authentication you\'re registering  There are two authentication options that you can configure for your inline hook: HTTP headers and OAuth 2.0 tokens.  HTTP headers let you specify a secret API key that you want Okta to pass to your external service endpoint (so that your external service can check for its presence as a security measure).  >**Note:** The API key that you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs.  You can also optionally specify extra headers that you want Okta to pass to your external service with each call.  To configure HTTP header authentication, see parameters for the `config` object.  OAuth 2.0 tokens provide enhanced security between Okta and your external service. You can configure these tokens for the following types&mdash;client secret and private key.  >**Note:** Your external service\'s endpoint needs to be a valid HTTPS endpoint. The URI you specify should always begin with `https://`.  The total number of inline hooks that you can create in an Okta org is limited to 50, which is a combined total for any combination of inline hook types.
      * Create an inline hook
      * @param inlineHook
      */
  createInlineHook(inlineHook, _options) {
    const result = this.api.createInlineHook(inlineHook, _options);
    return result.toPromise();
  }
  /**
      * Deactivates the inline hook by `inlineHookId`
      * Deactivate an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      */
  deactivateInlineHook(inlineHookId, _options) {
    const result = this.api.deactivateInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Deletes an inline hook by `inlineHookId`. After it\'s deleted, the inline hook is unrecoverable. As a safety precaution, only inline hooks with a status of `INACTIVE` are eligible for deletion.
      * Delete an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      */
  deleteInlineHook(inlineHookId, _options) {
    const result = this.api.deleteInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Executes the inline hook that matches the provided `inlineHookId` by using the request body as the input. This inline hook sends the provided  data through the `channel` object and returns a response if it matches the correct data contract. Otherwise it returns an error. You need to  construct a JSON payload that matches the payloads that Okta would send to your external service for this inline hook type.  A timeout of three seconds is enforced on all outbound requests, with one retry in the event of a timeout or an error response from the remote system.  If a successful response isn\'t received after the request, a 400 error is returned with more information about what failed.  >**Note:** This execution endpoint isn\'t tied to any other functionality in Okta, and you should only use it for testing purposes.
      * Execute an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      * @param payloadData
      */
  executeInlineHook(inlineHookId, payloadData, _options) {
    const result = this.api.executeInlineHook(inlineHookId, payloadData, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an inline hook by `inlineHookId`
      * Retrieve an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      */
  getInlineHook(inlineHookId, _options) {
    const result = this.api.getInlineHook(inlineHookId, _options);
    return result.toPromise();
  }
  /**
      * Lists all inline hooks or all inline hooks of a specific type.  When listing a specific inline hook, you need to specify its type. The following types are currently supported:   | Type Value                         | Name                                                           |   |------------------------------------|----------------------------------------------------------------|   | `com.okta.import.transform`        | [User import inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createUserImportInlineHook)       |   | `com.okta.oauth2.tokens.transform` | [Token inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTokenInlineHook)               |   | `com.okta.saml.tokens.transform`   | [SAML assertion inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createSAMLAssertionInlineHook)       |   | `com.okta.telephony.provider`      | [Telephony inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTelephonyInlineHook) |   | `com.okta.user.credential.password.import` | [Password import inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createPasswordImportInlineHook)|   | `com.okta.user.pre-registration`   | [Registration inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/create-registration-hook) |
      * List all inline hooks
      * @param type One of the supported inline hook types
      */
  listInlineHooks(type, _options) {
    const result = this.api.listInlineHooks(type, _options);
    return result.toPromise();
  }
  /**
      * Replaces an inline hook by `inlineHookId`. The submitted inline hook properties replace the existing properties after passing validation.  >**Note:** Some properties are immutable and can\'t be updated.
      * Replace an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      * @param inlineHook
      */
  replaceInlineHook(inlineHookId, inlineHook, _options) {
    const result = this.api.replaceInlineHook(inlineHookId, inlineHook, _options);
    return result.toPromise();
  }
  /**
      * Updates an inline hook by `inlineHookId`
      * Update an inline hook
      * @param inlineHookId &#x60;id&#x60; of the inline hook
      * @param inlineHook
      */
  updateInlineHook(inlineHookId, inlineHook, _options) {
    const result = this.api.updateInlineHook(inlineHookId, inlineHook, _options);
    return result.toPromise();
  }
}
exports.PromiseInlineHookApi = PromiseInlineHookApi;
const ObservableAPI_40 = require('./ObservableAPI');
class PromiseLinkedObjectApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_40.ObservableLinkedObjectApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a Linked Object definition
      * Create a linked object definition
      * @param linkedObject
      */
  createLinkedObjectDefinition(linkedObject, _options) {
    const result = this.api.createLinkedObjectDefinition(linkedObject, _options);
    return result.toPromise();
  }
  /**
      * Deletes the Linked Object definition specified by either the `primary` or `associated` name. The entire definition is removed, regardless of which name that you specify.
      * Delete a linked object definition
      * @param linkedObjectName Primary or Associated name
      */
  deleteLinkedObjectDefinition(linkedObjectName, _options) {
    const result = this.api.deleteLinkedObjectDefinition(linkedObjectName, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Linked Object definition
      * Retrieve a linked object definition
      * @param linkedObjectName Primary or Associated name
      */
  getLinkedObjectDefinition(linkedObjectName, _options) {
    const result = this.api.getLinkedObjectDefinition(linkedObjectName, _options);
    return result.toPromise();
  }
  /**
      * Lists all Linked Object definitions
      * List all linked object definitions
      */
  listLinkedObjectDefinitions(_options) {
    const result = this.api.listLinkedObjectDefinitions(_options);
    return result.toPromise();
  }
}
exports.PromiseLinkedObjectApi = PromiseLinkedObjectApi;
const ObservableAPI_41 = require('./ObservableAPI');
class PromiseLogStreamApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_41.ObservableLogStreamApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a log stream by `logStreamId`
      * Activate a log stream
      * @param logStreamId Unique identifier for the log stream
      */
  activateLogStream(logStreamId, _options) {
    const result = this.api.activateLogStream(logStreamId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new log stream object
      * Create a log stream
      * @param instance
      */
  createLogStream(instance, _options) {
    const result = this.api.createLogStream(instance, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a log stream by `logStreamId`
      * Deactivate a log stream
      * @param logStreamId Unique identifier for the log stream
      */
  deactivateLogStream(logStreamId, _options) {
    const result = this.api.deactivateLogStream(logStreamId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a log stream object from your org by ID
      * Delete a log stream
      * @param logStreamId Unique identifier for the log stream
      */
  deleteLogStream(logStreamId, _options) {
    const result = this.api.deleteLogStream(logStreamId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a log stream object by ID
      * Retrieve a log stream
      * @param logStreamId Unique identifier for the log stream
      */
  getLogStream(logStreamId, _options) {
    const result = this.api.getLogStream(logStreamId, _options);
    return result.toPromise();
  }
  /**
      * Lists all log stream objects in your org. You can request a paginated list or a subset of log streams that match a supported filter expression.
      * List all log streams
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      * @param filter An expression that [filters](/#filter) the returned objects. You can only use the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60; properties in the filter expression.
      */
  listLogStreams(after, limit, filter, _options) {
    const result = this.api.listLogStreams(after, limit, filter, _options);
    return result.toPromise();
  }
  /**
      * Replaces the log stream object properties for a given ID.  This operation is typically used to update the configuration of a log stream. Depending on the type of log stream you want to update, certain properties can\'t be modified after the log stream is initially created. Use the [Retrieve the log stream schema for the schema type](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Schema/#tag/Schema/operation/getLogStreamSchema) request to determine which properties you can update for the specific log stream type. Log stream properties with the `\"writeOnce\" : true` attribute can\'t be updated after creation. You must still specify these `writeOnce` properties in the request body with the original values in the PUT request.  > **Note:** You don\'t have to specify properties that have both the `\"writeOnce\": true` and the `\"writeOnly\": true` attributes in the PUT request body. These property values are ignored even if you add them in the PUT request body.
      * Replace a log stream
      * @param logStreamId Unique identifier for the log stream
      * @param instance
      */
  replaceLogStream(logStreamId, instance, _options) {
    const result = this.api.replaceLogStream(logStreamId, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseLogStreamApi = PromiseLogStreamApi;
const ObservableAPI_42 = require('./ObservableAPI');
class PromiseNetworkZoneApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_42.ObservableNetworkZoneApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a Network Zone by `zoneId`
      * Activate a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      */
  activateNetworkZone(zoneId, _options) {
    const result = this.api.activateNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Creates a Network Zone * For an IP Network Zone, you must define either `gateways` or `proxies`. * For a Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `proxyType`. * For an Enhanced Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `ipServiceCategories`. > **Note:** To view all properties for an Enhanced Dynamic Network Zone, select `DYNAMIC_V2` from the `type` dropdown list.
      * Create a network zone
      * @param zone
      */
  createNetworkZone(zone, _options) {
    const result = this.api.createNetworkZone(zone, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a Network Zone by `zoneId`
      * Deactivate a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      */
  deactivateNetworkZone(zoneId, _options) {
    const result = this.api.deactivateNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Network Zone by `zoneId` > **Notes:** > * You can\'t delete a Network Zone that\'s used by a [Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) or [Rule](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyRules). > * For Okta Identity Engine orgs, you can\'t delete a Network Zone with an ACTIVE `status`. <x-lifecycle class=\"oie\"></x-lifecycle>
      * Delete a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      */
  deleteNetworkZone(zoneId, _options) {
    const result = this.api.deleteNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a Network Zone by `zoneId`
      * Retrieve a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      */
  getNetworkZone(zoneId, _options) {
    const result = this.api.getNetworkZone(zoneId, _options);
    return result.toPromise();
  }
  /**
      * Lists all Network Zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id`, `usage`, and `system` properties. See [Filter](https://developer.okta.com/docs/api/#filter) for more information on the expressions that are used in filtering.
      * List all network zones
      * @param after
      * @param limit
      * @param filter
      */
  listNetworkZones(after, limit, filter, _options) {
    const result = this.api.listNetworkZones(after, limit, filter, _options);
    return result.toPromise();
  }
  /**
      * Replaces a Network Zone by `zoneId`. The replaced Network Zone type must be the same as the existing type. You can replace the usage (`POLICY`, `BLOCKLIST`) of a Network Zone by updating the `usage` attribute.  **IP exempt zone**<br> If you have the IP exempt zone feature enabled, you can allow traffic from specific gateway IPs irrespective of Okta ThreatInsight configurations, blocked network zones, or IP change events within Identity Threat Protection with Okta AI.<br> <br> When you enable this feature, Okta creates a zone called `DefaultExemptIpZone`. Gateway IPs that you add to this zone always have access to Okta resources. See [IP exempt zone](https://help.okta.com/okta_help.htm?type=oie&id=csh-about-ip-exempt-zone).  > **Note:** You can\'t add trusted proxy IPs to this zone, delete the zone, or create additional exempt IP zones.
      * Replace a network zone
      * @param zoneId &#x60;id&#x60; of the Network Zone
      * @param zone
      */
  replaceNetworkZone(zoneId, zone, _options) {
    const result = this.api.replaceNetworkZone(zoneId, zone, _options);
    return result.toPromise();
  }
}
exports.PromiseNetworkZoneApi = PromiseNetworkZoneApi;
const ObservableAPI_43 = require('./ObservableAPI');
class PromiseOAuth2ResourceServerCredentialsKeysApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_43.ObservableOAuth2ResourceServerCredentialsKeysApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a custom authorization server public JSON web key by key `id`. > **Note:** You can have only one active key at any given time for the authorization server. When you activate an inactive key, Okta automatically deactivates the current active key.
      * Activate a Custom Authorization Server Public JSON Web Key
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param keyId Unique &#x60;id&#x60; of the Custom Authorization Server JSON Web Key
      */
  activateOAuth2ResourceServerJsonWebKey(authServerId, keyId, _options) {
    const result = this.api.activateOAuth2ResourceServerJsonWebKey(authServerId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Adds a new JSON Web Key to the custom authorization server`s JSON web keys. > **Note:** This API doesn\'t allow you to add a key if the existing key doesn\'t have a `kid`. Use the [Replace an Authorization Server](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AuthorizationServer/#tag/AuthorizationServer/operation/replaceAuthorizationServer) operation to update the JWKS or [Delete a Custom Authorization Server Public JSON Web Key](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OAuth2ResourceServerCredentialsKeys/#tag/OAuth2ResourceServerCredentialsKeys/operation/deleteOAuth2ResourceServerJsonWebKey) and re-add the key with a `kid`. > **Note:** This API doesn\'t allow you to add a key with an ACTIVE status. You need to add an INACTIVE key first, and then ACTIVATE the key.
      * Add a JSON Web Key
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param oAuth2ResourceServerJsonWebKeyRequestBody
      */
  addOAuth2ResourceServerJsonWebKey(authServerId, oAuth2ResourceServerJsonWebKeyRequestBody, _options) {
    const result = this.api.addOAuth2ResourceServerJsonWebKey(authServerId, oAuth2ResourceServerJsonWebKeyRequestBody, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a custom authorization server public JSON web key by key `id`. > **Note:** Deactivating the active key isn\'t allowed if the authorization server has access token encryption enabled. You can activate another key, which makes the current key inactive.
      * Deactivate a Custom Authorization Server Public JSON Web Key
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param keyId Unique &#x60;id&#x60; of the Custom Authorization Server JSON Web Key
      */
  deactivateOAuth2ResourceServerJsonWebKey(authServerId, keyId, _options) {
    const result = this.api.deactivateOAuth2ResourceServerJsonWebKey(authServerId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a custom authorization server public JSON web key by key `id`. You can only delete an inactive key.
      * Delete a Custom Authorization Server Public JSON Web Key
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param keyId Unique &#x60;id&#x60; of the Custom Authorization Server JSON Web Key
      */
  deleteOAuth2ResourceServerJsonWebKey(authServerId, keyId, _options) {
    const result = this.api.deleteOAuth2ResourceServerJsonWebKey(authServerId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a custom authorization server public JSON web key by key `id`
      * Retrieve a Custom Authorization Server Public JSON Web Key
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      * @param keyId Unique &#x60;id&#x60; of the Custom Authorization Server JSON Web Key
      */
  getOAuth2ResourceServerJsonWebKey(authServerId, keyId, _options) {
    const result = this.api.getOAuth2ResourceServerJsonWebKey(authServerId, keyId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the public keys used by the custom authorization server
      * List all Custom Authorization Server Public JSON Web Keys
      * @param authServerId &#x60;id&#x60; of the Authorization Server
      */
  listOAuth2ResourceServerJsonWebKeys(authServerId, _options) {
    const result = this.api.listOAuth2ResourceServerJsonWebKeys(authServerId, _options);
    return result.toPromise();
  }
}
exports.PromiseOAuth2ResourceServerCredentialsKeysApi = PromiseOAuth2ResourceServerCredentialsKeysApi;
const ObservableAPI_44 = require('./ObservableAPI');
class PromiseOktaApplicationSettingsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_44.ObservableOktaApplicationSettingsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the settings for an Okta app (also known as an Okta first-party app)
      * Retrieve the Okta application settings
      * @param appName The key name for the Okta app.&lt;br&gt; Supported apps:   * Okta Admin Console (&#x60;admin-console&#x60;)
      */
  getFirstPartyAppSettings(appName, _options) {
    const result = this.api.getFirstPartyAppSettings(appName, _options);
    return result.toPromise();
  }
  /**
      * Replaces the settings for an Okta app (also known as an Okta first-party app)
      * Replace the Okta application settings
      * @param appName The key name for the Okta app.&lt;br&gt; Supported apps:   * Okta Admin Console (&#x60;admin-console&#x60;)
      * @param adminConsoleSettings
      */
  replaceFirstPartyAppSettings(appName, adminConsoleSettings, _options) {
    const result = this.api.replaceFirstPartyAppSettings(appName, adminConsoleSettings, _options);
    return result.toPromise();
  }
}
exports.PromiseOktaApplicationSettingsApi = PromiseOktaApplicationSettingsApi;
const ObservableAPI_45 = require('./ObservableAPI');
class PromiseOktaManagedUserAccountApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_45.ObservableOktaManagedUserAccountApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new Okta managed user account for managing an Okta Universal Directory user as a privileged account.  You must specify an existing Okta user in your org with the `oktaUserId` request parameter. You can\'t modify the user\'s email or username because they\'re retrieved from the Okta user profile.
      * Create an Okta managed user account
      * @param body
      */
  createOktaManagedUserAccount(body, _options) {
    const result = this.api.createOktaManagedUserAccount(body, _options);
    return result.toPromise();
  }
  /**
      * Deletes an Okta managed user account specified by ID.  This operation removes the privileged account management for the Okta user, but doesn\'t delete the user from Okta Universal Directory.
      * Delete an Okta managed user account
      * @param id ID of an existing Okta managed user account
      */
  deleteOktaManagedUserAccount(id, _options) {
    const result = this.api.deleteOktaManagedUserAccount(id, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an Okta managed user account specified by ID
      * Retrieve an Okta managed user account
      * @param id ID of an existing Okta managed user account
      */
  getOktaManagedUserAccount(id, _options) {
    const result = this.api.getOktaManagedUserAccount(id, _options);
    return result.toPromise();
  }
  /**
      * Lists all Okta managed user accounts in your org.  Use the `match` parameter to search for accounts where the account name (`name`), username (`username`),  or email (`email`) contains the specified value.
      * List all Okta managed user accounts
      * @param limit A limit on the number of objects to return
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param match Searches for Okta managed user accounts where the account name (&#x60;name&#x60;) or username (&#x60;username&#x60;) contains the given value
      */
  listOktaManagedUserAccounts(limit, after, match, _options) {
    const result = this.api.listOktaManagedUserAccounts(limit, after, match, _options);
    return result.toPromise();
  }
  /**
      * Updates an existing Okta managed user account specified by ID.  You can only update the `name`, `description`, `ownerUserIds`, and `ownerGroupIds` properties. You can\'t modify the `oktaUserId`, `username`, and `email` properties after the account is created.
      * Update an Okta managed user account
      * @param id ID of an existing Okta managed user account
      * @param body
      */
  updateOktaManagedUserAccount(id, body, _options) {
    const result = this.api.updateOktaManagedUserAccount(id, body, _options);
    return result.toPromise();
  }
}
exports.PromiseOktaManagedUserAccountApi = PromiseOktaManagedUserAccountApi;
const ObservableAPI_46 = require('./ObservableAPI');
class PromiseOktaPersonalSettingsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_46.ObservableOktaPersonalSettingsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Lists all blocked email domains which are excluded from app migration
      * List all blocked email domains
      */
  listPersonalAppsExportBlockList(_options) {
    const result = this.api.listPersonalAppsExportBlockList(_options);
    return result.toPromise();
  }
  /**
      * Replaces the list of blocked email domains which are excluded from app migration
      * Replace the blocked email domains
      * @param personalAppsBlockList
      */
  replaceBlockedEmailDomains(personalAppsBlockList, _options) {
    const result = this.api.replaceBlockedEmailDomains(personalAppsBlockList, _options);
    return result.toPromise();
  }
  /**
      * Replaces Okta Personal admin settings in a Workforce org
      * Replace the Okta Personal admin settings
      * @param oktaPersonalAdminFeatureSettings
      */
  replaceOktaPersonalAdminSettings(oktaPersonalAdminFeatureSettings, _options) {
    const result = this.api.replaceOktaPersonalAdminSettings(oktaPersonalAdminFeatureSettings, _options);
    return result.toPromise();
  }
}
exports.PromiseOktaPersonalSettingsApi = PromiseOktaPersonalSettingsApi;
const ObservableAPI_47 = require('./ObservableAPI');
class PromiseOperationsIntegrationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_47.ObservableOperationsIntegrationApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves an asynchronous operation and its current status
      * Retrieve an operation status
      * @param operationId ID of the asynchronous operation in Okta
      */
  getOperationStatus(operationId, _options) {
    const result = this.api.getOperationStatus(operationId, _options);
    return result.toPromise();
  }
}
exports.PromiseOperationsIntegrationApi = PromiseOperationsIntegrationApi;
const ObservableAPI_48 = require('./ObservableAPI');
class PromiseOrgCreatorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_48.ObservableOrgCreatorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates an org (child org) that has the same features as the current requesting org (parent org). A child org inherits any new features added to the parent org, but new features added to the child org aren\'t propagated back to the parent org. > **Notes:** > * Some features associated with products, such as Atspoke, Workflows, and Okta Identity Governance, aren\'t propagated to the child org. > * Wait at least 30 seconds after a 201-Created response before you make API requests to the new child org. > * For rate limits, see [Org creation rate limits](https://developer.okta.com/docs/reference/rl-additional-limits/#org-creation-rate-limits).
      * Create an org
      * @param childOrg
      */
  createChildOrg(childOrg, _options) {
    const result = this.api.createChildOrg(childOrg, _options);
    return result.toPromise();
  }
}
exports.PromiseOrgCreatorApi = PromiseOrgCreatorApi;
const ObservableAPI_49 = require('./ObservableAPI');
class PromiseOrgSettingApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_49.ObservableOrgSettingApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Assigns the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) as the default role for new public client apps
      * Assign the default public client app role setting
      * @param clientPrivilegesSetting
      */
  assignClientPrivilegesSetting(clientPrivilegesSetting, _options) {
    const result = this.api.assignClientPrivilegesSetting(clientPrivilegesSetting, _options);
    return result.toPromise();
  }
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to extend Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Extend Okta Support access
      */
  extendOktaSupport(_options) {
    const result = this.api.extendOktaSupport(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the Okta Aerial consent grant details for your Org. Returns a 404 Not Found error if no consent has been granted.
      * Retrieve Okta Aerial consent for your org
      */
  getAerialConsent(_options) {
    const result = this.api.getAerialConsent(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the org setting to automatically assign the Okta Admin Console when an admin role is assigned
      * Retrieve the Okta Admin Console assignment setting
      */
  getAutoAssignAdminAppSetting(_options) {
    const result = this.api.getAutoAssignAdminAppSetting(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the org setting to assign the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) to new public client apps
      * Retrieve the default public client app role setting
      */
  getClientPrivilegesSetting(_options) {
    const result = this.api.getClientPrivilegesSetting(_options);
    return result.toPromise();
  }
  /**
      * Retrieves Okta Communication Settings of your org
      * Retrieve the Okta communication settings
      */
  getOktaCommunicationSettings(_options) {
    const result = this.api.getOktaCommunicationSettings(_options);
    return result.toPromise();
  }
  /**
      * Lists all org contact types for your Okta org
      * List all org contact types
      */
  getOrgContactTypes(_options) {
    const result = this.api.getOrgContactTypes(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the ID and the user resource associated with the specified contact type
      * Retrieve the contact type user
      * @param contactType
      */
  getOrgContactUser(contactType, _options) {
    const result = this.api.getOrgContactUser(contactType, _options);
    return result.toPromise();
  }
  /**
      * Retrieves Okta Support Settings for your org
      * Retrieve the Okta Support settings
      */
  getOrgOktaSupportSettings(_options) {
    const result = this.api.getOrgOktaSupportSettings(_options);
    return result.toPromise();
  }
  /**
      * Retrieves preferences of your Okta org
      * Retrieve the org preferences
      */
  getOrgPreferences(_options) {
    const result = this.api.getOrgPreferences(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the Org General Settings
      * Retrieve the Org general settings
      */
  getOrgSettings(_options) {
    const result = this.api.getOrgSettings(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the third-party admin setting. See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
      * Retrieve the org third-party admin setting
      */
  getThirdPartyAdminSetting(_options) {
    const result = this.api.getThirdPartyAdminSetting(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the org metadata, which includes the org ID, configured custom domains, and authentication pipeline
      * Retrieve the Org metadata
      */
  getWellknownOrgMetadata(_options) {
    const result = this.api.getWellknownOrgMetadata(_options);
    return result.toPromise();
  }
  /**
      * Grants an Okta Aerial account consent to manage your org. If the org is a child org, consent is taken from the parent org. Grant calls directly to the child are not allowed.
      * Grant Okta Aerial access to your org
      * @param orgAerialConsent
      */
  grantAerialConsent(orgAerialConsent, _options) {
    const result = this.api.grantAerialConsent(orgAerialConsent, _options);
    return result.toPromise();
  }
  /**
      * Grants Okta Support temporary access to your org as an administrator for eight hours  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to grant Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Grant Okta Support access
      */
  grantOktaSupport(_options) {
    const result = this.api.grantOktaSupport(_options);
    return result.toPromise();
  }
  /**
      * Lists all Okta Support cases that the requesting principal has permission to view
      * List all Okta Support cases
      */
  listOktaSupportCases(_options) {
    const result = this.api.listOktaSupportCases(_options);
    return result.toPromise();
  }
  /**
      * Opts in all users of this org to Okta communication emails
      * Opt in to Okta user communication emails
      */
  optInUsersToOktaCommunicationEmails(_options) {
    const result = this.api.optInUsersToOktaCommunicationEmails(_options);
    return result.toPromise();
  }
  /**
      * Opts out all users of this org from Okta communication emails
      * Opt out of Okta user communication emails
      */
  optOutUsersFromOktaCommunicationEmails(_options) {
    const result = this.api.optOutUsersFromOktaCommunicationEmails(_options);
    return result.toPromise();
  }
  /**
      * Replaces the user associated with the specified contact type
      * Replace the contact type user
      * @param contactType
      * @param orgContactUser
      */
  replaceOrgContactUser(contactType, orgContactUser, _options) {
    const result = this.api.replaceOrgContactUser(contactType, orgContactUser, _options);
    return result.toPromise();
  }
  /**
      * Replaces the Org General Settings for your Okta org
      * Replace the Org general settings
      * @param orgSetting
      */
  replaceOrgSettings(orgSetting, _options) {
    const result = this.api.replaceOrgSettings(orgSetting, _options);
    return result.toPromise();
  }
  /**
      * Revokes access of an Okta Aerial account to your Org. The revoke operation will fail if the org has already been added to an Aerial account.
      * Revoke Okta Aerial access to your org
      * @param orgAerialConsent
      */
  revokeAerialConsent(orgAerialConsent, _options) {
    const result = this.api.revokeAerialConsent(orgAerialConsent, _options);
    return result.toPromise();
  }
  /**
      * Revokes Okta Support access to your org  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to revoke Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Revoke Okta Support access
      */
  revokeOktaSupport(_options) {
    const result = this.api.revokeOktaSupport(_options);
    return result.toPromise();
  }
  /**
      * Updates the org setting to automatically assign the Okta Admin Console when an admin role is assigned  > **Note:** This setting doesn\'t apply to the `SUPER_ADMIN` role. > When you assign the `SUPER_ADMIN` role to a user, the Admin Console is always assigned to the user regardless of the `autoAssignAdminAppSetting` setting.
      * Update the Okta Admin Console assignment setting
      * @param autoAssignAdminAppSetting
      */
  updateAutoAssignAdminAppSetting(autoAssignAdminAppSetting, _options) {
    const result = this.api.updateAutoAssignAdminAppSetting(autoAssignAdminAppSetting, _options);
    return result.toPromise();
  }
  /**
      * Updates access to the org for an Okta Support case:  * You can enable, disable, or extend access to your org for an Okta Support case.  * You can approve Okta Support access to your org for self-assigned cases. A self-assigned case is created and assigned by the same Okta Support user.
      * Update an Okta Support case
      * @param caseNumber
      * @param oktaSupportCase
      */
  updateOktaSupportCase(caseNumber, oktaSupportCase, _options) {
    const result = this.api.updateOktaSupportCase(caseNumber, oktaSupportCase, _options);
    return result.toPromise();
  }
  /**
      * Sets the preference to hide the Okta End-User Dashboard footer for all end users of your org
      * Set the hide dashboard footer preference
      */
  updateOrgHideOktaUIFooter(_options) {
    const result = this.api.updateOrgHideOktaUIFooter(_options);
    return result.toPromise();
  }
  /**
      * Updates partial Org General Settings
      * Update the Org general settings
      * @param orgSetting
      */
  updateOrgSettings(orgSetting, _options) {
    const result = this.api.updateOrgSettings(orgSetting, _options);
    return result.toPromise();
  }
  /**
      * Sets the preference to show the Okta UI footer for all end users of your org
      * Set the show dashboard footer preference
      */
  updateOrgShowOktaUIFooter(_options) {
    const result = this.api.updateOrgShowOktaUIFooter(_options);
    return result.toPromise();
  }
  /**
      * Updates the third-party admin setting. This setting allows third-party admins to perform administrative actions in the Admin Console, but they can\'t do any of the following:   * Receive Okta admin email notifications   * Contact Okta support   * Sign in to the Okta Help Center  See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
      * Update the org third-party admin setting
      * @param thirdPartyAdminSetting
      */
  updateThirdPartyAdminSetting(thirdPartyAdminSetting, _options) {
    const result = this.api.updateThirdPartyAdminSetting(thirdPartyAdminSetting, _options);
    return result.toPromise();
  }
  /**
      * Uploads and replaces the logo for your organization
      * Upload the org logo
      * @param file The file must be in PNG, JPG, or GIF format and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      */
  uploadOrgLogo(file, _options) {
    const result = this.api.uploadOrgLogo(file, _options);
    return result.toPromise();
  }
}
exports.PromiseOrgSettingApi = PromiseOrgSettingApi;
const ObservableAPI_50 = require('./ObservableAPI');
class PromisePolicyApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_50.ObservablePolicyApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a policy
      * Activate a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  activatePolicy(policyId, _options) {
    const result = this.api.activatePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Activates a policy rule identified by `policyId` and `ruleId`
      * Activate a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  activatePolicyRule(policyId, ruleId, _options) {
    const result = this.api.activatePolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Clones an existing policy
      * Clone an existing policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  clonePolicy(policyId, _options) {
    const result = this.api.clonePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy. There are many types of policies that you can create. See [Policies](https://developer.okta.com/docs/concepts/policies/) for an overview of the types of policies available and links to more indepth information.
      * Create a policy
      * @param policy
      * @param activate This query parameter is only valid for Classic Engine orgs.
      */
  createPolicy(policy, activate, _options) {
    const result = this.api.createPolicy(policy, activate, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy rule  > **Note:** You can\'t create additional rules for the `PROFILE_ENROLLMENT` or `POST_AUTH_SESSION` policies.
      * Create a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policyRule
      * @param limit Defines the number of policy rules returned. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param activate Set this parameter to &#x60;false&#x60; to create an &#x60;INACTIVE&#x60; rule.
      */
  createPolicyRule(policyId, policyRule, limit, activate, _options) {
    const result = this.api.createPolicyRule(policyId, policyRule, limit, activate, _options);
    return result.toPromise();
  }
  /**
      * Creates a policy or policy rule simulation. The access simulation evaluates policy and policy rules based on the existing policy rule configuration. The evaluation result simulates what the real-world authentication flow is and what policy rules have been applied or matched to the authentication flow.
      * Create a policy simulation
      * @param simulatePolicy
      * @param expand Use &#x60;expand&#x3D;EVALUATED&#x60; to include a list of evaluated but not matched policies and policy rules. Use &#x60;expand&#x3D;RULE&#x60; to include details about why a rule condition wasn\&#39;t matched.
      */
  createPolicySimulation(simulatePolicy, expand, _options) {
    const result = this.api.createPolicySimulation(simulatePolicy, expand, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a policy
      * Deactivate a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  deactivatePolicy(policyId, _options) {
    const result = this.api.deactivatePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a policy rule identified by `policyId` and `ruleId`
      * Deactivate a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  deactivatePolicyRule(policyId, ruleId, _options) {
    const result = this.api.deactivatePolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a policy
      * Delete a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  deletePolicy(policyId, _options) {
    const result = this.api.deletePolicy(policyId, _options);
    return result.toPromise();
  }
  /**
      * Deletes the resource mapping for a policy identified by `policyId` and `mappingId`
      * Delete a policy resource mapping
      * @param policyId &#x60;id&#x60; of the Policy
      * @param mappingId &#x60;id&#x60; of the policy resource Mapping
      */
  deletePolicyResourceMapping(policyId, mappingId, _options) {
    const result = this.api.deletePolicyResourceMapping(policyId, mappingId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a policy rule identified by `policyId` and `ruleId`
      * Delete a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  deletePolicyRule(policyId, ruleId, _options) {
    const result = this.api.deletePolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a policy
      * Retrieve a policy
      * @param policyId &#x60;id&#x60; of the Policy
      * @param expand
      */
  getPolicy(policyId, expand, _options) {
    const result = this.api.getPolicy(policyId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a resource mapping for a policy identified by `policyId` and `mappingId`
      * Retrieve a policy resource mapping
      * @param policyId &#x60;id&#x60; of the Policy
      * @param mappingId &#x60;id&#x60; of the policy resource Mapping
      */
  getPolicyMapping(policyId, mappingId, _options) {
    const result = this.api.getPolicyMapping(policyId, mappingId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a policy rule
      * Retrieve a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      */
  getPolicyRule(policyId, ruleId, _options) {
    const result = this.api.getPolicyRule(policyId, ruleId, _options);
    return result.toPromise();
  }
  /**
      * Lists all policies with the specified type
      * List all policies
      * @param type Specifies the type of policy to return. The following policy types are available only with the Okta Identity Engine - &#x60;ACCESS_POLICY&#x60;, &lt;x-lifecycle class&#x3D;\&quot;ea\&quot;&gt;&lt;/x-lifecycle&gt; &#x60;DEVICE_SIGNAL_COLLECTION&#x60;, &#x60;PROFILE_ENROLLMENT&#x60;, &#x60;POST_AUTH_SESSION&#x60; and &#x60;ENTITY_RISK&#x60;.
      * @param status Refines the query by the &#x60;status&#x60; of the policy - &#x60;ACTIVE&#x60; or &#x60;INACTIVE&#x60;
      * @param q Refines the query by policy name prefix (startWith method) passed in as &#x60;q&#x3D;string&#x60;
      * @param expand
      * @param sortBy Refines the query by sorting on the policy &#x60;name&#x60; in ascending order
      * @param limit Defines the number of policies returned, see [Pagination](https://developer.okta.com/docs/api/#pagination)
      * @param resourceId Reference to the associated authorization server
      * @param after End page cursor for pagination, see [Pagination](https://developer.okta.com/docs/api/#pagination)
      */
  listPolicies(type, status, q, expand, sortBy, limit, resourceId, after, _options) {
    const result = this.api.listPolicies(type, status, q, expand, sortBy, limit, resourceId, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all applications mapped to a policy identified by `policyId`  > **Note:** Use [List all resources mapped to a Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyMappings) to list all applications mapped to a policy.
      * List all apps mapped to a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  listPolicyApps(policyId, _options) {
    const result = this.api.listPolicyApps(policyId, _options);
    return result.toPromise();
  }
  /**
      * Lists all resources mapped to a policy identified by `policyId`
      * List all resources mapped to a policy
      * @param policyId &#x60;id&#x60; of the Policy
      */
  listPolicyMappings(policyId, _options) {
    const result = this.api.listPolicyMappings(policyId, _options);
    return result.toPromise();
  }
  /**
      * Lists all policy rules
      * List all policy rules
      * @param policyId &#x60;id&#x60; of the Policy
      * @param limit Defines the number of policy rules returned. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      */
  listPolicyRules(policyId, limit, _options) {
    const result = this.api.listPolicyRules(policyId, limit, _options);
    return result.toPromise();
  }
  /**
      * Maps a resource to a policy identified by `policyId`  > **Note:** Use the [Assign an app sign-in policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationPolicies/#tag/ApplicationPolicies/operation/assignApplicationPolicy) endpoint to assign an app sign-in policy to an app.
      * Map a resource to a policy
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policyMappingRequest
      */
  mapResourceToPolicy(policyId, policyMappingRequest, _options) {
    const result = this.api.mapResourceToPolicy(policyId, policyMappingRequest, _options);
    return result.toPromise();
  }
  /**
      * Replaces the properties of a policy identified by `policyId`
      * Replace a policy
      * @param policyId &#x60;id&#x60; of the Policy
      * @param policy
      */
  replacePolicy(policyId, policy, _options) {
    const result = this.api.replacePolicy(policyId, policy, _options);
    return result.toPromise();
  }
  /**
      * Replaces the properties for a policy rule identified by `policyId` and `ruleId`
      * Replace a policy rule
      * @param policyId &#x60;id&#x60; of the Policy
      * @param ruleId &#x60;id&#x60; of the policy rule
      * @param policyRule
      */
  replacePolicyRule(policyId, ruleId, policyRule, _options) {
    const result = this.api.replacePolicyRule(policyId, ruleId, policyRule, _options);
    return result.toPromise();
  }
}
exports.PromisePolicyApi = PromisePolicyApi;
const ObservableAPI_51 = require('./ObservableAPI');
class PromisePrincipalRateLimitApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_51.ObservablePrincipalRateLimitApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new principal rate limit entity. Okta only allows one principal rate limit entity per org and principal.
      * Create a principal rate limit
      * @param entity
      */
  createPrincipalRateLimitEntity(entity, _options) {
    const result = this.api.createPrincipalRateLimitEntity(entity, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a principal rate limit entity by `principalRateLimitId`
      * Retrieve a principal rate limit
      * @param principalRateLimitId ID of the principal rate limit
      */
  getPrincipalRateLimitEntity(principalRateLimitId, _options) {
    const result = this.api.getPrincipalRateLimitEntity(principalRateLimitId, _options);
    return result.toPromise();
  }
  /**
      * Lists all Principal Rate Limit entities considering the provided parameters
      * List all principal rate limits
      * @param filter Filters the list of principal rate limit entities by the provided principal type (&#x60;principalType&#x60;). For example, &#x60;filter&#x3D;principalType eq \&quot;SSWS_TOKEN\&quot;&#x60; or &#x60;filter&#x3D;principalType eq \&quot;OAUTH_CLIENT\&quot;&#x60;.
      * @param after The cursor to use for pagination. It\&#39;s an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of items to return in a single response page.
      */
  listPrincipalRateLimitEntities(filter, after, limit, _options) {
    const result = this.api.listPrincipalRateLimitEntities(filter, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Replaces a principal rate limit entity by `principalRateLimitId`
      * Replace a principal rate limit
      * @param principalRateLimitId ID of the principal rate limit
      * @param entity
      */
  replacePrincipalRateLimitEntity(principalRateLimitId, entity, _options) {
    const result = this.api.replacePrincipalRateLimitEntity(principalRateLimitId, entity, _options);
    return result.toPromise();
  }
}
exports.PromisePrincipalRateLimitApi = PromisePrincipalRateLimitApi;
const ObservableAPI_52 = require('./ObservableAPI');
class PromisePrivilegedResourceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_52.ObservablePrivilegedResourceApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Claims a specified privileged resource for management. This also marks the `status` as `ACTIVE`.
      * Claim a privileged resource for management
      * @param id ID of an existing privileged resource
      */
  claimPrivilegedResource(id, _options) {
    const result = this.api.claimPrivilegedResource(id, _options);
    return result.toPromise();
  }
  /**
      * Creates a privileged resource either in Okta or for a specified external app. After creation, the `status` param is set to `CREATED`.
      * Create a privileged resource
      * @param privilegedResource
      */
  createPrivilegedResource(privilegedResource, _options) {
    const result = this.api.createPrivilegedResource(privilegedResource, _options);
    return result.toPromise();
  }
  /**
      * Deletes a privileged resource specified by ID. This also marks the `status` as `INACTIVE`.
      * Delete a privileged resource
      * @param id ID of an existing privileged resource
      */
  deletePrivilegedResource(id, _options) {
    const result = this.api.deletePrivilegedResource(id, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a privileged resource specified by ID
      * Retrieve a privileged resource
      * @param id ID of an existing privileged resource
      */
  getPrivilegedResource(id, _options) {
    const result = this.api.getPrivilegedResource(id, _options);
    return result.toPromise();
  }
  /**
      * Retrieves privileged resources that were filtered based on the search and filtering criteria specified in the query parameters
      * Retrieve the privileged resources
      * @param containerId ID of an existing container, such as an app instance
      * @param lastUpdated Last updated timestamp query parameter
      * @param status The status of the privileged resource to filter on
      * @param limit Specifies the batch size of the results to be returned
      * @param after The cursor used for pagination. It represents the last privileged resource ID returned in the previous fetch operation.
      */
  getPrivilegedResources(containerId, lastUpdated, status, limit, after, _options) {
    const result = this.api.getPrivilegedResources(containerId, lastUpdated, status, limit, after, _options);
    return result.toPromise();
  }
  /**
      * Prepares the privileged resources by scanning imported app users and applying the privileged resource filtering criteria.  If the request contains the `lastUpdated` parameter, the privileged resource criteria filters out the imported app users that were last updated after the timestamp.  The value of the `lastUpdated` query parameter should be what the client received in the `ETag` header included in the last response of the previous resource fetch cycle.
      * Prepare the privileged resources
      * @param containerId ID of an existing container, such as an app instance
      * @param lastUpdated Last updated timestamp query parameter
      */
  preparePrivilegedResourcesToBeFetched(containerId, lastUpdated, _options) {
    const result = this.api.preparePrivilegedResourcesToBeFetched(containerId, lastUpdated, _options);
    return result.toPromise();
  }
  /**
      * Replaces or creates filters used to identify privileged resources. These filters are used during the privileged resource retrieval operation.
      * Replace the filters
      * @param containerId ID of an existing container, such as an app instance
      * @param privilegedResourceFilters
      */
  replaceFiltersForPrivilegedResourceIdentification(containerId, privilegedResourceFilters, _options) {
    const result = this.api.replaceFiltersForPrivilegedResourceIdentification(containerId, privilegedResourceFilters, _options);
    return result.toPromise();
  }
  /**
      * Replaces a privileged resource specified by ID
      * Replace a privileged resource
      * @param id ID of an existing privileged resource
      * @param privilegedResourceUpdateRequest
      */
  replacePrivilegedResource(id, privilegedResourceUpdateRequest, _options) {
    const result = this.api.replacePrivilegedResource(id, privilegedResourceUpdateRequest, _options);
    return result.toPromise();
  }
  /**
      * Rotates the password for a specified privileged resource
      * Rotate the password for a privileged resource
      * @param id ID of an existing privileged resource
      * @param rotatePasswordRequest
      */
  rotatePasswordForPrivilegedResource(id, rotatePasswordRequest, _options) {
    const result = this.api.rotatePasswordForPrivilegedResource(id, rotatePasswordRequest, _options);
    return result.toPromise();
  }
}
exports.PromisePrivilegedResourceApi = PromisePrivilegedResourceApi;
const ObservableAPI_53 = require('./ObservableAPI');
class PromiseProfileMappingApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_53.ObservableProfileMappingApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves a single profile mapping referenced by its ID
      * Retrieve a profile mapping
      * @param mappingId &#x60;id&#x60; of the Mapping
      */
  getProfileMapping(mappingId, _options) {
    const result = this.api.getProfileMapping(mappingId, _options);
    return result.toPromise();
  }
  /**
      * Lists all profile mappings in your org with [pagination](https://developer.okta.com/docs/api/#pagination). You can return a subset of profile mappings that match a supported `sourceId` and/or `targetId`.  The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the Link header contains a `next` link that you should treat as an opaque value (follow it, don\'t parse it). See [Link Header](https://developer.okta.com/docs/api/#link-header).  The response is a collection of profile mappings that include a subset of the profile mapping object\'s parameters. The profile mapping object describes the properties mapping between an Okta user and an app user profile using [JSON Schema Draft 4](https://datatracker.ietf.org/doc/html/draft-zyp-json-schema-04).
      * List all profile mappings
      * @param after Mapping &#x60;id&#x60; that specifies the pagination cursor for the next page of mappings
      * @param limit Specifies the number of results per page
      * @param sourceId The user type or app instance ID that acts as the source of expressions in a mapping. If this parameter is included, all returned mappings have this as their &#x60;source.id&#x60;.
      * @param targetId The user type or app instance ID that acts as the target of expressions in a mapping. If this parameter is included, all returned mappings have this as their &#x60;target.id&#x60;.
      */
  listProfileMappings(after, limit, sourceId, targetId, _options) {
    const result = this.api.listProfileMappings(after, limit, sourceId, targetId, _options);
    return result.toPromise();
  }
  /**
      * Updates an existing profile mapping by adding, updating, or removing one or many property mappings
      * Update a profile mapping
      * @param mappingId &#x60;id&#x60; of the Mapping
      * @param profileMapping
      */
  updateProfileMapping(mappingId, profileMapping, _options) {
    const result = this.api.updateProfileMapping(mappingId, profileMapping, _options);
    return result.toPromise();
  }
}
exports.PromiseProfileMappingApi = PromiseProfileMappingApi;
const ObservableAPI_54 = require('./ObservableAPI');
class PromisePushProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_54.ObservablePushProviderApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new push provider. Each Push Provider must have a unique `name`.
      * Create a push provider
      * @param pushProvider
      */
  createPushProvider(pushProvider, _options) {
    const result = this.api.createPushProvider(pushProvider, _options);
    return result.toPromise();
  }
  /**
      * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
      * Delete a push provider
      * @param pushProviderId Id of the push provider
      */
  deletePushProvider(pushProviderId, _options) {
    const result = this.api.deletePushProvider(pushProviderId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a push provider by `pushProviderId`
      * Retrieve a push provider
      * @param pushProviderId Id of the push provider
      */
  getPushProvider(pushProviderId, _options) {
    const result = this.api.getPushProvider(pushProviderId, _options);
    return result.toPromise();
  }
  /**
      * Lists all push providers
      * List all push providers
      * @param type Filters push providers by &#x60;providerType&#x60;
      */
  listPushProviders(type, _options) {
    const result = this.api.listPushProviders(type, _options);
    return result.toPromise();
  }
  /**
      * Replaces a push provider by `pushProviderId`
      * Replace a push provider
      * @param pushProviderId Id of the push provider
      * @param pushProvider
      */
  replacePushProvider(pushProviderId, pushProvider, _options) {
    const result = this.api.replacePushProvider(pushProviderId, pushProvider, _options);
    return result.toPromise();
  }
}
exports.PromisePushProviderApi = PromisePushProviderApi;
const ObservableAPI_55 = require('./ObservableAPI');
class PromiseRateLimitSettingsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_55.ObservableRateLimitSettingsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the currently configured Rate Limit Admin Notification Settings
      * Retrieve the rate limit admin notification settings
      */
  getRateLimitSettingsAdminNotifications(_options) {
    const result = this.api.getRateLimitSettingsAdminNotifications(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the currently configured Per-Client Rate Limit Settings
      * Retrieve the per-client rate limit settings
      */
  getRateLimitSettingsPerClient(_options) {
    const result = this.api.getRateLimitSettingsPerClient(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the currently configured threshold for warning notifications when the API\'s rate limit is exceeded
      * Retrieve the rate limit warning threshold percentage
      */
  getRateLimitSettingsWarningThreshold(_options) {
    const result = this.api.getRateLimitSettingsWarningThreshold(_options);
    return result.toPromise();
  }
  /**
      * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
      * Replace the rate limit admin notification settings
      * @param rateLimitAdminNotifications
      */
  replaceRateLimitSettingsAdminNotifications(rateLimitAdminNotifications, _options) {
    const result = this.api.replaceRateLimitSettingsAdminNotifications(rateLimitAdminNotifications, _options);
    return result.toPromise();
  }
  /**
      * Replaces the Per-Client Rate Limit Settings and returns the configured properties
      * Replace the per-client rate limit settings
      * @param perClientRateLimitSettings
      */
  replaceRateLimitSettingsPerClient(perClientRateLimitSettings, _options) {
    const result = this.api.replaceRateLimitSettingsPerClient(perClientRateLimitSettings, _options);
    return result.toPromise();
  }
  /**
      * Replaces the Rate Limit Warning Threshold Percentage and returns the configured property
      * Replace the rate limit warning threshold percentage
      * @param rateLimitWarningThreshold
      */
  replaceRateLimitSettingsWarningThreshold(rateLimitWarningThreshold, _options) {
    const result = this.api.replaceRateLimitSettingsWarningThreshold(rateLimitWarningThreshold, _options);
    return result.toPromise();
  }
}
exports.PromiseRateLimitSettingsApi = PromiseRateLimitSettingsApi;
const ObservableAPI_56 = require('./ObservableAPI');
class PromiseRealmApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_56.ObservableRealmApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new realm
      * Create a realm
      * @param body
      */
  createRealm(body, _options) {
    const result = this.api.createRealm(body, _options);
    return result.toPromise();
  }
  /**
      * Deletes a realm permanently. This operation can only be performed after disassociating other entities like users and identity providers from a realm.
      * Delete a realm
      * @param realmId ID of the realm
      */
  deleteRealm(realmId, _options) {
    const result = this.api.deleteRealm(realmId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a realm
      * Retrieve a realm
      * @param realmId ID of the realm
      */
  getRealm(realmId, _options) {
    const result = this.api.getRealm(realmId, _options);
    return result.toPromise();
  }
  /**
      * Lists all realms.  > **Note:** The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.
      * List all realms
      * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;search&#x60; is provided.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param search Searches for realms with a supported filtering expression for most properties.  Searches for realms can be filtered by the contains (&#x60;co&#x60;) operator. You can only use &#x60;co&#x60; with the &#x60;profile.name&#x60; property. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @param sortBy Specifies the field to sort by and can be any single property (for search queries only)
      * @param sortOrder Specifies sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
      */
  listRealms(limit, after, search, sortBy, sortOrder, _options) {
    const result = this.api.listRealms(limit, after, search, sortBy, sortOrder, _options);
    return result.toPromise();
  }
  /**
      * Replaces the realm profile
      * Replace the realm profile
      * @param realmId ID of the realm
      * @param body
      */
  replaceRealm(realmId, body, _options) {
    const result = this.api.replaceRealm(realmId, body, _options);
    return result.toPromise();
  }
}
exports.PromiseRealmApi = PromiseRealmApi;
const ObservableAPI_57 = require('./ObservableAPI');
class PromiseRealmAssignmentApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_57.ObservableRealmAssignmentApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a realm assignment
      * Activate a realm assignment
      * @param assignmentId ID of the realm assignment
      */
  activateRealmAssignment(assignmentId, _options) {
    const result = this.api.activateRealmAssignment(assignmentId, _options);
    return result.toPromise();
  }
  /**
      * Creates a new realm assignment
      * Create a realm assignment
      * @param body
      */
  createRealmAssignment(body, _options) {
    const result = this.api.createRealmAssignment(body, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a realm assignment
      * Deactivate a realm assignment
      * @param assignmentId ID of the realm assignment
      */
  deactivateRealmAssignment(assignmentId, _options) {
    const result = this.api.deactivateRealmAssignment(assignmentId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a realm assignment
      * Delete a realm assignment
      * @param assignmentId ID of the realm assignment
      */
  deleteRealmAssignment(assignmentId, _options) {
    const result = this.api.deleteRealmAssignment(assignmentId, _options);
    return result.toPromise();
  }
  /**
      * Executes a realm assignment
      * Execute a realm assignment
      * @param body
      */
  executeRealmAssignment(body, _options) {
    const result = this.api.executeRealmAssignment(body, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a realm assignment
      * Retrieve a realm assignment
      * @param assignmentId ID of the realm assignment
      */
  getRealmAssignment(assignmentId, _options) {
    const result = this.api.getRealmAssignment(assignmentId, _options);
    return result.toPromise();
  }
  /**
      * Lists all realm assignment operations. The upper limit is 200 and operations are sorted in descending order from most recent to oldest by ID.
      * List all realm assignment operations
      * @param limit A limit on the number of objects to return
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      */
  listRealmAssignmentOperations(limit, after, _options) {
    const result = this.api.listRealmAssignmentOperations(limit, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all realm assignments
      * List all realm assignments
      * @param limit A limit on the number of objects to return
      * @param after The cursor used for pagination. It represents the priority of the last realm assignment returned in the previous fetch operation.
      */
  listRealmAssignments(limit, after, _options) {
    const result = this.api.listRealmAssignments(limit, after, _options);
    return result.toPromise();
  }
  /**
      * Replaces a realm assignment
      * Replace a realm assignment
      * @param assignmentId ID of the realm assignment
      * @param body
      */
  replaceRealmAssignment(assignmentId, body, _options) {
    const result = this.api.replaceRealmAssignment(assignmentId, body, _options);
    return result.toPromise();
  }
}
exports.PromiseRealmAssignmentApi = PromiseRealmAssignmentApi;
const ObservableAPI_58 = require('./ObservableAPI');
class PromiseResourceSetApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_58.ObservableResourceSetApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Adds more members to a role resource set binding
      * Add more role resource set binding members
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  addMembersToBinding(resourceSetId, roleIdOrLabel, instance, _options) {
    const result = this.api.addMembersToBinding(resourceSetId, roleIdOrLabel, instance, _options);
    return result.toPromise();
  }
  /**
      * Adds a resource with conditions for a resource set
      * Add a resource set resource with conditions
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param instance
      */
  addResourceSetResource(resourceSetId, instance, _options) {
    const result = this.api.addResourceSetResource(resourceSetId, instance, _options);
    return result.toPromise();
  }
  /**
      * Adds more resources to a resource set
      * Add more resources to a resource set
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param instance
      */
  addResourceSetResources(resourceSetId, instance, _options) {
    const result = this.api.addResourceSetResources(resourceSetId, instance, _options);
    return result.toPromise();
  }
  /**
      * Creates a new resource set. See [Supported resources](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#supported-resources).  > **Note:** The maximum number of `resources` allowed in a resource set object is 1000. Resources are identified by either an Okta Resource Name (ORN) or by a REST URL format. See [Okta Resource Name](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#okta-resource-name-orn).
      * Create a resource set
      * @param instance
      */
  createResourceSet(instance, _options) {
    const result = this.api.createResourceSet(instance, _options);
    return result.toPromise();
  }
  /**
      * Creates a binding for the resource set, custom role, and members (users or groups)  > **Note:** If you use a custom role with permissions that don\'t apply to the resources in the resource set, it doesn\'t affect the admin role. For example,  the `okta.users.userprofile.manage` permission gives the admin no privileges if it\'s granted to a resource set that only includes `https://{yourOktaDomain}/api/v1/groups/{targetGroupId}`  resources. If you want the admin to be able to manage the users within the group, the resource set must include the corresponding `https://{yourOktaDomain}/api/v1/groups/{targetGroupId}/users` resource.
      * Create a role resource set binding
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param instance
      */
  createResourceSetBinding(resourceSetId, instance, _options) {
    const result = this.api.createResourceSetBinding(resourceSetId, instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes a binding of a role (identified by `roleIdOrLabel`) and a resource set (identified by `resourceSetIdOrLabel`)
      * Delete a role resource set binding
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteBinding(resourceSetId, roleIdOrLabel, _options) {
    const result = this.api.deleteBinding(resourceSetId, roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Deletes a resource set by `resourceSetIdOrLabel`
      * Delete a resource set
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      */
  deleteResourceSet(resourceSetId, _options) {
    const result = this.api.deleteResourceSet(resourceSetId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a resource (identified by `resourceId`) from a resource set
      * Delete a resource set resource
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param resourceId &#x60;id&#x60; of the resource
      */
  deleteResourceSetResource(resourceSetId, resourceId, _options) {
    const result = this.api.deleteResourceSetResource(resourceSetId, resourceId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the binding of a role (identified by `roleIdOrLabel`) for a resource set (identified by `resourceSetIdOrLabel`)
      * Retrieve a role resource set binding
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getBinding(resourceSetId, roleIdOrLabel, _options) {
    const result = this.api.getBinding(resourceSetId, roleIdOrLabel, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a member (identified by `memberId`) that belongs to a role resource set binding
      * Retrieve a role resource set binding member
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of the member
      */
  getMemberOfBinding(resourceSetId, roleIdOrLabel, memberId, _options) {
    const result = this.api.getMemberOfBinding(resourceSetId, roleIdOrLabel, memberId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a resource set by `resourceSetIdOrLabel`
      * Retrieve a resource set
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      */
  getResourceSet(resourceSetId, _options) {
    const result = this.api.getResourceSet(resourceSetId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a resource identified by `resourceId` in a resource set
      * Retrieve a resource set resource
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param resourceId &#x60;id&#x60; of the resource
      */
  getResourceSetResource(resourceSetId, resourceId, _options) {
    const result = this.api.getResourceSetResource(resourceSetId, resourceId, _options);
    return result.toPromise();
  }
  /**
      * Lists all bindings for a resource set with pagination support.  The returned `roles` array contains the roles for each binding associated with the specified resource set. If there are more than 100 bindings for the specified resource set, `links.next` provides the resource with pagination for the next list of bindings.
      * List all role resource set bindings
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      */
  listBindings(resourceSetId, after, _options) {
    const result = this.api.listBindings(resourceSetId, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all members of a role resource set binding with pagination support
      * List all role resource set binding members
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      */
  listMembersOfBinding(resourceSetId, roleIdOrLabel, after, _options) {
    const result = this.api.listMembersOfBinding(resourceSetId, roleIdOrLabel, after, _options);
    return result.toPromise();
  }
  /**
      * Lists all resources for the resource set
      * List all resource set resources
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param after Specifies the pagination cursor for the next page of targets
      * @param limit Specifies the number of results returned. Defaults to &#x60;100&#x60;.
      */
  listResourceSetResources(resourceSetId, after, limit, _options) {
    const result = this.api.listResourceSetResources(resourceSetId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all resource sets with pagination support
      * List all resource sets
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      */
  listResourceSets(after, _options) {
    const result = this.api.listResourceSets(after, _options);
    return result.toPromise();
  }
  /**
      * Replaces the label and description of a resource set. See [Supported resources](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#supported-resources).
      * Replace a resource set
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param instance
      */
  replaceResourceSet(resourceSetId, instance, _options) {
    const result = this.api.replaceResourceSet(resourceSetId, instance, _options);
    return result.toPromise();
  }
  /**
      * Replaces the conditions of a resource identified by `resourceId` in a resource set
      * Replace the resource set resource conditions
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param resourceId &#x60;id&#x60; of the resource
      * @param resourceSetResourcePutRequest
      */
  replaceResourceSetResource(resourceSetId, resourceId, resourceSetResourcePutRequest, _options) {
    const result = this.api.replaceResourceSetResource(resourceSetId, resourceId, resourceSetResourcePutRequest, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a member (identified by `memberId`) from a role resource set binding
      * Unassign a role resource set binding member
      * @param resourceSetId &#x60;id&#x60; or &#x60;label&#x60; of the resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of the member
      */
  unassignMemberFromBinding(resourceSetId, roleIdOrLabel, memberId, _options) {
    const result = this.api.unassignMemberFromBinding(resourceSetId, roleIdOrLabel, memberId, _options);
    return result.toPromise();
  }
}
exports.PromiseResourceSetApi = PromiseResourceSetApi;
const ObservableAPI_59 = require('./ObservableAPI');
class PromiseRiskEventApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_59.ObservableRiskEventApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Sends multiple IP risk events to Okta. This request is used by a third-party risk provider to send IP risk events to Okta. The third-party risk provider needs to be registered with Okta before they can send events to Okta. See [Risk Providers](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RiskProvider/). This API has a rate limit of 30 requests per minute. You can include multiple risk events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. Prioritize sending high risk signals if you have a burst of signals to send that would exceed the maximum request limits.
      * Send multiple risk events
      * @param instance
      */
  sendRiskEvents(instance, _options) {
    const result = this.api.sendRiskEvents(instance, _options);
    return result.toPromise();
  }
}
exports.PromiseRiskEventApi = PromiseRiskEventApi;
const ObservableAPI_60 = require('./ObservableAPI');
class PromiseRiskProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_60.ObservableRiskProviderApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a risk provider object. You can create a maximum of three risk provider objects.
      * Create a risk provider
      * @param instance
      */
  createRiskProvider(instance, _options) {
    const result = this.api.createRiskProvider(instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes a risk provider object by its ID
      * Delete a risk provider
      * @param riskProviderId &#x60;id&#x60; of the risk provider object
      */
  deleteRiskProvider(riskProviderId, _options) {
    const result = this.api.deleteRiskProvider(riskProviderId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a risk provider object by ID
      * Retrieve a risk provider
      * @param riskProviderId &#x60;id&#x60; of the risk provider object
      */
  getRiskProvider(riskProviderId, _options) {
    const result = this.api.getRiskProvider(riskProviderId, _options);
    return result.toPromise();
  }
  /**
      * Lists all risk provider objects
      * List all risk providers
      */
  listRiskProviders(_options) {
    const result = this.api.listRiskProviders(_options);
    return result.toPromise();
  }
  /**
      * Replaces the properties for a given risk provider object ID
      * Replace a risk provider
      * @param riskProviderId &#x60;id&#x60; of the risk provider object
      * @param instance
      */
  replaceRiskProvider(riskProviderId, instance, _options) {
    const result = this.api.replaceRiskProvider(riskProviderId, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseRiskProviderApi = PromiseRiskProviderApi;
const ObservableAPI_61 = require('./ObservableAPI');
class PromiseRoleAssignmentApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_61.ObservableRoleAssignmentApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Assigns a [standard role](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles) to a client app.  You can also assign a custom role to a client app, but the preferred method to assign a custom role to a client is to create a binding between the custom role, the resource set, and the client app. See [Create a role resource set binding](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a client role
      * @param clientId &#x60;client_id&#x60; of the app
      * @param assignRoleRequest
      */
  assignRoleToClient(clientId, assignRoleRequest, _options) {
    const result = this.api.assignRoleToClient(clientId, assignRoleRequest, _options);
    return result.toPromise();
  }
  /**
      * Assigns a [standard role](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles) to a group.  You can also assign a custom role to a group, but the preferred method to assign a custom role to a group is to create a binding between the custom role, the resource set, and the group. See [Create a role resource set binding](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a role to a group
      * @param groupId The &#x60;id&#x60; of the group
      * @param assignRoleRequest
      * @param disableNotifications Grants the group third-party admin status when set to &#x60;true&#x60;
      */
  assignRoleToGroup(groupId, assignRoleRequest, disableNotifications, _options) {
    const result = this.api.assignRoleToGroup(groupId, assignRoleRequest, disableNotifications, _options);
    return result.toPromise();
  }
  /**
      * Assigns a [standard role](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles) to a user.  You can also assign a custom role to a user, but the preferred method to assign a custom role to a user is to create a binding between the custom role, the resource set, and the user. See [Create a role resource set binding](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a user role
      * @param userId ID of an existing Okta user
      * @param assignRoleRequest
      * @param disableNotifications Setting this to &#x60;true&#x60; grants the user third-party admin status
      */
  assignRoleToUser(userId, assignRoleRequest, disableNotifications, _options) {
    const result = this.api.assignRoleToUser(userId, assignRoleRequest, disableNotifications, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a client app (identified by `clientId`)
      * Unassign a client role
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      */
  deleteRoleFromClient(clientId, roleAssignmentId, _options) {
    const result = this.api.deleteRoleFromClient(clientId, roleAssignmentId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a role assigned to a group (identified by the `groupId`). The `roleAssignmentId` is the unique identifier for either a standard role group assignment object or a custom role resource set binding object.
      * Retrieve a group role assignment
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      */
  getGroupAssignedRole(groupId, roleId, _options) {
    const result = this.api.getGroupAssignedRole(groupId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve a user role governance source
      * @param userId ID of an existing Okta user
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param grantId Grant ID
      */
  getRoleAssignmentGovernanceGrant(userId, roleAssignmentId, grantId, _options) {
    const result = this.api.getRoleAssignmentGovernanceGrant(userId, roleAssignmentId, grantId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the resources of a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve the user role governance source resources
      * @param userId ID of an existing Okta user
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param grantId Grant ID
      */
  getRoleAssignmentGovernanceGrantResources(userId, roleAssignmentId, grantId, _options) {
    const result = this.api.getRoleAssignmentGovernanceGrantResources(userId, roleAssignmentId, grantId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a role assigned to a user (identified by `userId`). The `roleAssignmentId` parameter is the unique identifier for either a standard role assignment object or a custom role resource set binding object.
      * Retrieve a user role assignment
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      */
  getUserAssignedRole(userId, roleId, _options) {
    const result = this.api.getUserAssignedRole(userId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the governance sources of a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve all user role governance sources
      * @param userId ID of an existing Okta user
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      */
  getUserAssignedRoleGovernance(userId, roleAssignmentId, _options) {
    const result = this.api.getUserAssignedRoleGovernance(userId, roleAssignmentId, _options);
    return result.toPromise();
  }
  /**
      * Lists all roles assigned to a user (identified by `userId`)
      * List all user role assignments
      * @param userId ID of an existing Okta user
      * @param expand An optional parameter used to return targets configured for the standard role assignment in the &#x60;embedded&#x60; property. Supported values: &#x60;targets/groups&#x60; or &#x60;targets/catalog/apps&#x60;
      */
  listAssignedRolesForUser(userId, expand, _options) {
    const result = this.api.listAssignedRolesForUser(userId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all assigned roles of a group by `groupId`
      * List all group role assignments
      * @param groupId The &#x60;id&#x60; of the group
      * @param expand An optional parameter used to return targets configured for the standard role assignment in the &#x60;embedded&#x60; property. Supported values: &#x60;targets/groups&#x60; or &#x60;targets/catalog/apps&#x60;
      */
  listGroupAssignedRoles(groupId, expand, _options) {
    const result = this.api.listGroupAssignedRoles(groupId, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists all roles assigned to a client app identified by `clientId`
      * List all client role assignments
      * @param clientId &#x60;client_id&#x60; of the app
      */
  listRolesForClient(clientId, _options) {
    const result = this.api.listRolesForClient(clientId, _options);
    return result.toPromise();
  }
  /**
      * Lists all users with role assignments
      * List all users with role assignments
      * @param after Specifies the pagination cursor for the next page of targets
      * @param limit Specifies the number of results returned. Defaults to &#x60;100&#x60;.
      */
  listUsersWithRoleAssignments(after, limit, _options) {
    const result = this.api.listUsersWithRoleAssignments(after, limit, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a role assignment (identified by `roleAssignmentId`) for a client app (identified by `clientId`)
      * Retrieve a client role
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      */
  retrieveClientRole(clientId, roleAssignmentId, _options) {
    const result = this.api.retrieveClientRole(clientId, roleAssignmentId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a group (identified by the `groupId`)
      * Unassign a group role
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      */
  unassignRoleFromGroup(groupId, roleId, _options) {
    const result = this.api.unassignRoleFromGroup(groupId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a user (identified by `userId`)
      * Unassign a user role
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      */
  unassignRoleFromUser(userId, roleId, _options) {
    const result = this.api.unassignRoleFromUser(userId, roleId, _options);
    return result.toPromise();
  }
}
exports.PromiseRoleAssignmentApi = PromiseRoleAssignmentApi;
const ObservableAPI_62 = require('./ObservableAPI');
class PromiseRoleTargetApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_62.ObservableRoleTargetApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Assigns all apps as target to an `APP_ADMIN` role
      * Assign all apps as target to admin role
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      */
  assignAllAppsAsTargetToRoleForUser(userId, roleId, _options) {
    const result = this.api.assignAllAppsAsTargetToRoleForUser(userId, roleId, _options);
    return result.toPromise();
  }
  /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
      * Assign a group role app instance target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param applicationId Application ID
      */
  assignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options) {
    const result = this.api.assignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to an admin user. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permission to the same OIN app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
      * Assign an admin role app instance target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param applicationId Application ID
      */
  assignAppInstanceTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    const result = this.api.assignAppInstanceTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to a client. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage only specific configurations of the Salesforce app.
      * Assign a client role app instance target
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param appId Application ID
      */
  assignAppTargetInstanceRoleForClient(clientId, roleAssignmentId, appName, appId, _options) {
    const result = this.api.assignAppTargetInstanceRoleForClient(clientId, roleAssignmentId, appName, appId, _options);
    return result.toPromise();
  }
  /**
      * Assigns an OIN app target for an `APP_ADMIN` role assignment to a client. When you assign an app target from the OIN catalog, you reduce the scope of the role assignment. The role assignment applies to only app instances that are included in the specified OIN app target.  An assigned OIN app target overrides any existing app instance targets. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the administrator for all Facebook instances.
      * Assign a client role app target
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  assignAppTargetRoleToClient(clientId, roleAssignmentId, appName, _options) {
    const result = this.api.assignAppTargetRoleToClient(clientId, roleAssignmentId, appName, _options);
    return result.toPromise();
  }
  /**
      * Assigns an OIN app target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target. An OIN app target that\'s assigned to the role overrides any existing instance targets of the OIN app. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app with `facebook` for `appName` makes that user the administrator for all Facebook instances.
      * Assign a group role app target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  assignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options) {
    const result = this.api.assignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Assigns an OIN app target for an `APP_ADMIN` role assignment to an admin user. When you assign the first app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  Assigning an OIN app target overrides any existing app instance targets of the OIN app. For example, if a user was assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the admin for all Facebook instances.
      * Assign an admin role app target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  assignAppTargetToAdminRoleForUser(userId, roleId, appName, _options) {
    const result = this.api.assignAppTargetToAdminRoleForUser(userId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets, but applies only to the specified target.
      * Assign a client role group target
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param groupId The &#x60;id&#x60; of the group
      */
  assignGroupTargetRoleForClient(clientId, roleAssignmentId, groupId, _options) {
    const result = this.api.assignGroupTargetRoleForClient(clientId, roleAssignmentId, groupId, _options);
    return result.toPromise();
  }
  /**
      * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
      * Assign a group role group target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param targetGroupId
      */
  assignGroupTargetToGroupAdminRole(groupId, roleId, targetGroupId, _options) {
    const result = this.api.assignGroupTargetToGroupAdminRole(groupId, roleId, targetGroupId, _options);
    return result.toPromise();
  }
  /**
      * Assigns a group target for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
      * Assign an admin role group target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param groupId The &#x60;id&#x60; of the group
      */
  assignGroupTargetToUserRole(userId, roleId, groupId, _options) {
    const result = this.api.assignGroupTargetToUserRole(userId, roleId, groupId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves all role targets for an `APP_ADMIN`, `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user by user or group assignment type. If the role isn\'t scoped to specific group targets or any app targets, an empty array `[]` is returned.
      * Retrieve a role target by assignment type
      * @param userId ID of an existing Okta user
      * @param roleIdOrEncodedRoleId The &#x60;id&#x60; of the role or Base32 encoded &#x60;id&#x60; of the role name
      * @param assignmentType Specifies the assignment type of the user
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  getRoleTargetsByUserIdAndRoleId(userId, roleIdOrEncodedRoleId, assignmentType, after, limit, _options) {
    const result = this.api.getRoleTargetsByUserIdAndRoleId(userId, roleIdOrEncodedRoleId, assignmentType, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all OIN app targets for an `APP_ADMIN` role that\'s assigned to a client (by `clientId`).
      * List all client role app targets
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listAppTargetRoleToClient(clientId, roleAssignmentId, after, limit, _options) {
    const result = this.api.listAppTargetRoleToClient(clientId, roleAssignmentId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all app targets for an `APP_ADMIN` role assignment to a group. The response includes a list of OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app doesn\'t.
      * List all group role app targets
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, after, limit, _options) {
    const result = this.api.listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all app targets for an `APP_ADMIN` role assigned to a user. The response is a list that includes OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app payload doesn\'t.
      * List all admin role app targets
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId, roleId, after, limit, _options) {
    const result = this.api.listApplicationTargetsForApplicationAdministratorRoleForUser(userId, roleId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
      * List all client role group targets
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listGroupTargetRoleForClient(clientId, roleAssignmentId, after, limit, _options) {
    const result = this.api.listGroupTargetRoleForClient(clientId, roleAssignmentId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
      * List all group role group targets
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listGroupTargetsForGroupRole(groupId, roleId, after, limit, _options) {
    const result = this.api.listGroupTargetsForGroupRole(groupId, roleId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all group targets for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. If the role isn\'t scoped to specific group targets, an empty array `[]` is returned.
      * List all admin role group targets
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      */
  listGroupTargetsForRole(userId, roleId, after, limit, _options) {
    const result = this.api.listGroupTargetsForRole(userId, roleId, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Unassigns an app instance target from a role assignment to a client app  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all the apps, delete the role assignment with the instance target and create another one.  See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role app instance target
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param appId Application ID
      */
  removeAppTargetInstanceRoleForClient(clientId, roleAssignmentId, appName, appId, _options) {
    const result = this.api.removeAppTargetInstanceRoleForClient(clientId, roleAssignmentId, appName, appId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns an OIN app target for a role assignment to a client app  > **Note:** You can\'t remove the last OIN app target from a role assignment. > If you need a role assignment that applies to all apps, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role app target
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  removeAppTargetRoleFromClient(clientId, roleAssignmentId, appName, _options) {
    const result = this.api.removeAppTargetRoleFromClient(clientId, roleAssignmentId, appName, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a Group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app.  > **Note:** You can\'t remove the last group target from a role assignment. If you need a role assignment that applies to all groups, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role group target
      * @param clientId &#x60;client_id&#x60; of the app
      * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
      * @param groupId The &#x60;id&#x60; of the group
      */
  removeGroupTargetRoleFromClient(clientId, roleAssignmentId, groupId, _options) {
    const result = this.api.removeGroupTargetRoleFromClient(clientId, roleAssignmentId, groupId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns an app instance target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last app instance target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment and recreate a new one.
      * Unassign an admin role app instance target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param applicationId Application ID
      */
  unassignAppInstanceTargetFromAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    const result = this.api.unassignAppInstanceTargetFromAdminRoleForUser(userId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns an app instance target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
      * Unassign a group role app instance target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param applicationId Application ID
      */
  unassignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options) {
    const result = this.api.unassignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns an OIN app target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last OIN app target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment to the user and recreate a new one.
      * Unassign an admin role app target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  unassignAppTargetFromAppAdminRoleForUser(userId, roleId, appName, _options) {
    const result = this.api.unassignAppTargetFromAppAdminRoleForUser(userId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Unassigns an OIN app target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
      * Unassign a group role app target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  unassignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options) {
    const result = this.api.unassignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a group target from a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group.
      * Unassign a group role group target
      * @param groupId The &#x60;id&#x60; of the group
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param targetGroupId
      */
  unassignGroupTargetFromGroupAdminRole(groupId, roleId, targetGroupId, _options) {
    const result = this.api.unassignGroupTargetFromGroupAdminRole(groupId, roleId, targetGroupId, _options);
    return result.toPromise();
  }
  /**
      * Unassigns a group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last group target from a role assignment since this causes an exception. > If you need a role assignment that applies to all groups, delete the role assignment to the user and recreate a new one.
      * Unassign an admin role group target
      * @param userId ID of an existing Okta user
      * @param roleId The &#x60;id&#x60; of the role assignment
      * @param groupId The &#x60;id&#x60; of the group
      */
  unassignGroupTargetFromUserAdminRole(userId, roleId, groupId, _options) {
    const result = this.api.unassignGroupTargetFromUserAdminRole(userId, roleId, groupId, _options);
    return result.toPromise();
  }
}
exports.PromiseRoleTargetApi = PromiseRoleTargetApi;
const ObservableAPI_63 = require('./ObservableAPI');
class PromiseSSFReceiverApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_63.ObservableSSFReceiverApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a Security Events Provider instance by setting its status to `ACTIVE`. This operation resumes the flow of events from the Security Events Provider to Okta.
      * Activate a security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      */
  activateSecurityEventsProviderInstance(securityEventProviderId, _options) {
    const result = this.api.activateSecurityEventsProviderInstance(securityEventProviderId, _options);
    return result.toPromise();
  }
  /**
      * Creates a Security Events Provider instance
      * Create a security events provider
      * @param instance
      */
  createSecurityEventsProviderInstance(instance, _options) {
    const result = this.api.createSecurityEventsProviderInstance(instance, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a Security Events Provider instance by setting its status to `INACTIVE`. This operation stops the flow of events from the Security Events Provider to Okta.
      * Deactivate a security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      */
  deactivateSecurityEventsProviderInstance(securityEventProviderId, _options) {
    const result = this.api.deactivateSecurityEventsProviderInstance(securityEventProviderId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a Security Events Provider instance specified by `id`
      * Delete a security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      */
  deleteSecurityEventsProviderInstance(securityEventProviderId, _options) {
    const result = this.api.deleteSecurityEventsProviderInstance(securityEventProviderId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the Security Events Provider instance specified by `id`
      * Retrieve the security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      */
  getSecurityEventsProviderInstance(securityEventProviderId, _options) {
    const result = this.api.getSecurityEventsProviderInstance(securityEventProviderId, _options);
    return result.toPromise();
  }
  /**
      * Lists all Security Events Provider instances
      * List all security events providers
      */
  listSecurityEventsProviderInstances(_options) {
    const result = this.api.listSecurityEventsProviderInstances(_options);
    return result.toPromise();
  }
  /**
      * Replaces a Security Events Provider instance specified by `id`
      * Replace a security events provider
      * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
      * @param instance
      */
  replaceSecurityEventsProviderInstance(securityEventProviderId, instance, _options) {
    const result = this.api.replaceSecurityEventsProviderInstance(securityEventProviderId, instance, _options);
    return result.toPromise();
  }
}
exports.PromiseSSFReceiverApi = PromiseSSFReceiverApi;
const ObservableAPI_64 = require('./ObservableAPI');
class PromiseSSFSecurityEventTokenApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_64.ObservableSSFSecurityEventTokenApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Publishes a Security Event Token (SET) sent by a Security Events Provider. After the token is verified, Okta ingests the event and performs any appropriate action.
      * Publish a security event token
      * @param securityEventToken The request body is a signed [SET](https://datatracker.ietf.org/doc/html/rfc8417), which is a type of JSON Web Token (JWT).  For SET JWT header and body descriptions, see [SET JWT header](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtHeader) and [SET JWT body payload](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/SSFSecurityEventToken/#tag/SSFSecurityEventToken/schema/SecurityEventTokenRequestJwtBody).
      */
  publishSecurityEventTokens(securityEventToken, _options) {
    const result = this.api.publishSecurityEventTokens(securityEventToken, _options);
    return result.toPromise();
  }
}
exports.PromiseSSFSecurityEventTokenApi = PromiseSSFSecurityEventTokenApi;
const ObservableAPI_65 = require('./ObservableAPI');
class PromiseSSFTransmitterApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_65.ObservableSSFTransmitterApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates an SSF Stream for an event receiver to start receiving security events in the form of Security Event Tokens (SETs) from Okta.  An SSF Stream is associated with the Client ID of the OAuth 2.0 access token used to create the stream. The Client ID is provided by Okta for an [OAuth 2.0 app integration](https://help.okta.com/okta_help.htm?id=ext_Apps_App_Integration_Wizard-oidc). One SSF Stream is allowed for each Client ID, hence, one SSF Stream is allowed for each app integration in Okta.  A maximum of 10 SSF Stream configurations can be created for one org.
      * Create an SSF stream
      * @param instance
      */
  createSsfStream(instance, _options) {
    const result = this.api.createSsfStream(instance, _options);
    return result.toPromise();
  }
  /**
      * Deletes the specified SSF Stream.  If the `stream_id` is not provided in the query string, the associated stream with the Client ID (through the request OAuth 2.0 access token) is deleted. Otherwise, the SSF Stream with the `stream_id` is deleted, if found.
      * Delete an SSF stream
      * @param streamId The ID of the specified SSF Stream configuration
      */
  deleteSsfStream(streamId, _options) {
    const result = this.api.deleteSsfStream(streamId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the status of an SSF Stream. The status indicates whether the transmitter is able to transmit events over the stream.
      * Retrieve the SSF Stream status
      * @param streamId The ID of the specified SSF Stream configuration
      */
  getSsfStreamStatus(streamId, _options) {
    const result = this.api.getSsfStreamStatus(streamId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves either a list of all known SSF Stream configurations or the individual configuration if specified by ID.  As Stream configurations are tied to a Client ID, only the Stream associated with the Client ID of the request OAuth 2.0 access token can be viewed.
      * Retrieve the SSF stream configuration(s)
      * @param streamId The ID of the specified SSF Stream configuration
      */
  getSsfStreams(streamId, _options) {
    const result = this.api.getSsfStreams(streamId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves SSF Transmitter configuration metadata. This includes all supported endpoints and key information about certain properties of the Okta org as the transmitter, such as `delivery_methods_supported`, `issuer`, and `jwks_uri`.
      * Retrieve the SSF transmitter metadata
      */
  getWellknownSsfMetadata(_options) {
    const result = this.api.getWellknownSsfMetadata(_options);
    return result.toPromise();
  }
  /**
      * Replaces all properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is replaced.
      * Replace an SSF stream
      * @param instance
      */
  replaceSsfStream(instance, _options) {
    const result = this.api.replaceSsfStream(instance, _options);
    return result.toPromise();
  }
  /**
      * Updates properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is updated.
      * Update an SSF stream
      * @param instance
      */
  updateSsfStream(instance, _options) {
    const result = this.api.updateSsfStream(instance, _options);
    return result.toPromise();
  }
  /**
      * Verifies an SSF Stream by publishing a Verification Event requested by a Security Events Provider.  > **Note:** A successful response doesn\'t indicate that the Verification Event     was transmitted successfully, only that Okta has transmitted the event or will     at some point in the future. The SSF Receiver is responsible for validating and acknowledging     successful transmission of the request by responding with HTTP Response Status Code 202.
      * Verify an SSF stream
      * @param instance
      */
  verifySsfStream(instance, _options) {
    const result = this.api.verifySsfStream(instance, _options);
    return result.toPromise();
  }
}
exports.PromiseSSFTransmitterApi = PromiseSSFTransmitterApi;
const ObservableAPI_66 = require('./ObservableAPI');
class PromiseSchemaApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_66.ObservableSchemaApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the default schema for an app user.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
      * Retrieve the default app user schema for an app
      * @param appInstanceId Application ID
      */
  getApplicationUserSchema(appInstanceId, _options) {
    const result = this.api.getApplicationUserSchema(appInstanceId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the group schema  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
      * Retrieve the default group schema
      */
  getGroupSchema(_options) {
    const result = this.api.getGroupSchema(_options);
    return result.toPromise();
  }
  /**
      * Retrieves the schema for a log stream type. The `logStreamType` element in the URL specifies the log stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
      * Retrieve the log stream schema for the schema type
      * @param logStreamType
      */
  getLogStreamSchema(logStreamType, _options) {
    const result = this.api.getLogStreamSchema(logStreamType, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the schema for a user type
      * Retrieve a user schema
      * @param schemaId Schema ID. You can also use &#x60;default&#x60; to refer to the default user type schema.
      */
  getUserSchema(schemaId, _options) {
    const result = this.api.getUserSchema(schemaId, _options);
    return result.toPromise();
  }
  /**
      * Lists the schema for all log stream types visible for this org
      * List the log stream schemas
      */
  listLogStreamSchemas(_options) {
    const result = this.api.listLogStreamSchemas(_options);
    return result.toPromise();
  }
  /**
      * Updates the app user schema. This updates, adds, or removes one or more custom profile properties or the nullability of a base property in the app user schema for an app. Changing a base property\'s nullability (for example, the value of its `required` field) is allowed only if it is nullable in the default predefined schema for the app.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
      * Update the app user profile schema for an app
      * @param appInstanceId Application ID
      * @param body
      */
  updateApplicationUserProfile(appInstanceId, body, _options) {
    const result = this.api.updateApplicationUserProfile(appInstanceId, body, _options);
    return result.toPromise();
  }
  /**
      * Updates the group profile schema. This updates, adds, or removes one or more custom profile properties in a group schema. Currently Okta does not support changing base group profile properties.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
      * Update the group profile schema
      * @param groupSchema
      */
  updateGroupSchema(groupSchema, _options) {
    const result = this.api.updateGroupSchema(groupSchema, _options);
    return result.toPromise();
  }
  /**
      * Updates a user schema. Use this request to update, add, or remove one or more profile properties in a user schema. If you specify `default` for the `schemaId`, updates will apply to the default user type.  Unlike custom user profile properties, limited changes are allowed to base user profile properties (permissions, nullability of the `firstName` and `lastName` properties, or pattern for `login`). You can\'t remove a property from the default schema if it\'s being referenced as a [`matchAttribute`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/createIdentityProvider!path=policy/subject/matchAttribute&t=request) in `SAML2` IdPs. Currently, all validation of SAML assertions are only performed against the default user type.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.
      * Update a user schema
      * @param schemaId Schema ID. You can also use &#x60;default&#x60; to refer to the default user type schema.
      * @param userSchema
      */
  updateUserProfile(schemaId, userSchema, _options) {
    const result = this.api.updateUserProfile(schemaId, userSchema, _options);
    return result.toPromise();
  }
}
exports.PromiseSchemaApi = PromiseSchemaApi;
const ObservableAPI_67 = require('./ObservableAPI');
class PromiseServiceAccountApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_67.ObservableServiceAccountApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new app service account for managing an app account
      * Create an app service account
      * @param body
      */
  createAppServiceAccount(body, _options) {
    const result = this.api.createAppServiceAccount(body, _options);
    return result.toPromise();
  }
  /**
      * Creates a new service account for managing an Okta User or SaaS app account
      * Create a service account
      * @param body
      */
  createServiceAccount(body, _options) {
    const result = this.api.createServiceAccount(body, _options);
    return result.toPromise();
  }
  /**
      * Deletes an app service account specified by ID
      * Delete an app service account
      * @param id ID of an existing service account
      */
  deleteAppServiceAccount(id, _options) {
    const result = this.api.deleteAppServiceAccount(id, _options);
    return result.toPromise();
  }
  /**
      * Deletes a service account specified by ID
      * Delete a service account
      * @param id ID of an existing service account
      */
  deleteServiceAccount(id, _options) {
    const result = this.api.deleteServiceAccount(id, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an app service account specified by ID
      * Retrieve an app service account
      * @param id ID of an existing service account
      */
  getAppServiceAccount(id, _options) {
    const result = this.api.getAppServiceAccount(id, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a service account specified by ID
      * Retrieve a service account
      * @param id ID of an existing service account
      */
  getServiceAccount(id, _options) {
    const result = this.api.getServiceAccount(id, _options);
    return result.toPromise();
  }
  /**
      * Lists all app service accounts
      * List all app service accounts
      * @param limit A limit on the number of objects to return
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param match Searches for app service accounts where the account name (&#x60;name&#x60;), username (&#x60;username&#x60;), app instance label (&#x60;containerInstanceName&#x60;), or OIN app key name (&#x60;containerGlobalName&#x60;) contains the given value
      */
  listAppServiceAccounts(limit, after, match, _options) {
    const result = this.api.listAppServiceAccounts(limit, after, match, _options);
    return result.toPromise();
  }
  /**
      * Lists all service accounts
      * List all service accounts
      * @param limit Specifies the number of results returned
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param q Searches for service accounts where the account name, username, app instance name, or global app name contains the given value
      */
  listServiceAccounts(limit, after, q, _options) {
    const result = this.api.listServiceAccounts(limit, after, q, _options);
    return result.toPromise();
  }
  /**
      * Updates an existing app service account specified by ID
      * Update an existing app service account
      * @param id ID of an existing service account
      * @param body
      */
  updateAppServiceAccount(id, body, _options) {
    const result = this.api.updateAppServiceAccount(id, body, _options);
    return result.toPromise();
  }
  /**
      * Updates a service account specified by ID
      * Update a service account
      * @param id ID of an existing service account
      * @param body
      */
  updateServiceAccount(id, body, _options) {
    const result = this.api.updateServiceAccount(id, body, _options);
    return result.toPromise();
  }
}
exports.PromiseServiceAccountApi = PromiseServiceAccountApi;
const ObservableAPI_68 = require('./ObservableAPI');
class PromiseSessionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_68.ObservableSessionApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Closes the session for the user who is currently signed in. Use this method in a browser-based app to sign out a user.  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Close the current session
      * @param cookie
      */
  closeCurrentSession(cookie, _options) {
    const result = this.api.closeCurrentSession(cookie, _options);
    return result.toPromise();
  }
  /**
      * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
      * Create a session with session token
      * @param createSessionRequest
      */
  createSession(createSessionRequest, _options) {
    const result = this.api.createSession(createSessionRequest, _options);
    return result.toPromise();
  }
  /**
      * Retrieves session information for the current user. Use this method in a browser-based app to determine if the user is signed in.  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Retrieve the current session
      * @param cookie
      */
  getCurrentSession(cookie, _options) {
    const result = this.api.getCurrentSession(cookie, _options);
    return result.toPromise();
  }
  /**
      * Retrieves information about the session specified by the given session ID
      * Retrieve a session
      * @param sessionId &#x60;id&#x60; of the session
      */
  getSession(sessionId, _options) {
    const result = this.api.getSession(sessionId, _options);
    return result.toPromise();
  }
  /**
      * Refreshes the session for the current user  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Refresh the current session
      * @param cookie
      */
  refreshCurrentSession(cookie, _options) {
    const result = this.api.refreshCurrentSession(cookie, _options);
    return result.toPromise();
  }
  /**
      * Refreshes an existing session using the `id` for that session. A successful response contains the refreshed session with an updated `expiresAt` timestamp.
      * Refresh a session
      * @param sessionId &#x60;id&#x60; of the session
      */
  refreshSession(sessionId, _options) {
    const result = this.api.refreshSession(sessionId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the specified session
      * Revoke a session
      * @param sessionId &#x60;id&#x60; of the session
      */
  revokeSession(sessionId, _options) {
    const result = this.api.revokeSession(sessionId, _options);
    return result.toPromise();
  }
}
exports.PromiseSessionApi = PromiseSessionApi;
const ObservableAPI_69 = require('./ObservableAPI');
class PromiseSubscriptionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_69.ObservableSubscriptionApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Lists all subscriptions available to a specified Role
      * List all subscriptions for a role
      * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
      */
  listRoleSubscriptions(roleTypeOrRoleId, _options) {
    const result = this.api.listRoleSubscriptions(roleTypeOrRoleId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a subscription by `notificationType` for a specified Role
      * Retrieve a subscription for a role
      * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
      * @param notificationType
      */
  listRoleSubscriptionsByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const result = this.api.listRoleSubscriptionsByNotificationType(roleTypeOrRoleId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * Lists all subscriptions available to a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
      * List all subscriptions for a user
      * @param userId ID of an existing Okta user
      */
  listUserSubscriptions(userId, _options) {
    const result = this.api.listUserSubscriptions(userId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a subscription by `notificationType` for a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
      * Retrieve a subscription for a user
      * @param notificationType
      * @param userId ID of an existing Okta user
      */
  listUserSubscriptionsByNotificationType(notificationType, userId, _options) {
    const result = this.api.listUserSubscriptionsByNotificationType(notificationType, userId, _options);
    return result.toPromise();
  }
  /**
      * Subscribes a Role to a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
      * Subscribe a role to a specific notification type
      * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
      * @param notificationType
      */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const result = this.api.subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * Subscribes the current user to a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
      * Subscribe a user to a specific notification type
      * @param notificationType
      * @param userId ID of an existing Okta user
      */
  subscribeUserSubscriptionByNotificationType(notificationType, userId, _options) {
    const result = this.api.subscribeUserSubscriptionByNotificationType(notificationType, userId, _options);
    return result.toPromise();
  }
  /**
      * Unsubscribes a Role from a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
      * Unsubscribe a role from a specific notification type
      * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
      * @param notificationType
      */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const result = this.api.unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options);
    return result.toPromise();
  }
  /**
      * Unsubscribes the current user from a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
      * Unsubscribe a user from a specific notification type
      * @param notificationType
      * @param userId ID of an existing Okta user
      */
  unsubscribeUserSubscriptionByNotificationType(notificationType, userId, _options) {
    const result = this.api.unsubscribeUserSubscriptionByNotificationType(notificationType, userId, _options);
    return result.toPromise();
  }
}
exports.PromiseSubscriptionApi = PromiseSubscriptionApi;
const ObservableAPI_70 = require('./ObservableAPI');
class PromiseSystemLogApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_70.ObservableSystemLogApi(configuration, requestFactory, responseProcessor);
  }
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
  listLogEvents(since, until, after, filter, q, limit, sortOrder, _options) {
    const result = this.api.listLogEvents(since, until, after, filter, q, limit, sortOrder, _options);
    return result.toPromise();
  }
}
exports.PromiseSystemLogApi = PromiseSystemLogApi;
const ObservableAPI_71 = require('./ObservableAPI');
class PromiseTemplateApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_71.ObservableTemplateApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new custom SMS template
      * Create an SMS template
      * @param smsTemplate
      */
  createSmsTemplate(smsTemplate, _options) {
    const result = this.api.createSmsTemplate(smsTemplate, _options);
    return result.toPromise();
  }
  /**
      * Deletes an SMS template
      * Delete an SMS template
      * @param templateId &#x60;id&#x60; of the Template
      */
  deleteSmsTemplate(templateId, _options) {
    const result = this.api.deleteSmsTemplate(templateId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a specific template by `id`
      * Retrieve an SMS template
      * @param templateId &#x60;id&#x60; of the Template
      */
  getSmsTemplate(templateId, _options) {
    const result = this.api.getSmsTemplate(templateId, _options);
    return result.toPromise();
  }
  /**
      * Lists all custom SMS templates. A subset of templates can be returned that match a template type.
      * List all SMS templates
      * @param templateType
      */
  listSmsTemplates(templateType, _options) {
    const result = this.api.listSmsTemplates(templateType, _options);
    return result.toPromise();
  }
  /**
      * Replaces the SMS Template > **Notes:** You can\'t update the default SMS Template.
      * Replace an SMS template
      * @param templateId &#x60;id&#x60; of the Template
      * @param smsTemplate
      */
  replaceSmsTemplate(templateId, smsTemplate, _options) {
    const result = this.api.replaceSmsTemplate(templateId, smsTemplate, _options);
    return result.toPromise();
  }
  /**
      * Updates only some of the SMS Template properties:   * All properties within the custom SMS Template that have values are updated.   * Any translation that doesn\'t exist is added.   * Any translation with a null or empty value is removed.   * Any translation with non-empty/null value is updated.
      * Update an SMS template
      * @param templateId &#x60;id&#x60; of the Template
      * @param smsTemplate
      */
  updateSmsTemplate(templateId, smsTemplate, _options) {
    const result = this.api.updateSmsTemplate(templateId, smsTemplate, _options);
    return result.toPromise();
  }
}
exports.PromiseTemplateApi = PromiseTemplateApi;
const ObservableAPI_72 = require('./ObservableAPI');
class PromiseThreatInsightApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_72.ObservableThreatInsightApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Retrieves the ThreatInsight configuration for the org
      * Retrieve the ThreatInsight configuration
      */
  getCurrentConfiguration(_options) {
    const result = this.api.getCurrentConfiguration(_options);
    return result.toPromise();
  }
  /**
      * Updates the ThreatInsight configuration for the org
      * Update the ThreatInsight configuration
      * @param threatInsightConfiguration
      */
  updateConfiguration(threatInsightConfiguration, _options) {
    const result = this.api.updateConfiguration(threatInsightConfiguration, _options);
    return result.toPromise();
  }
}
exports.PromiseThreatInsightApi = PromiseThreatInsightApi;
const ObservableAPI_73 = require('./ObservableAPI');
class PromiseTrustedOriginApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_73.ObservableTrustedOriginApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a trusted origin. Sets the `status` to `ACTIVE`.
      * Activate a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      */
  activateTrustedOrigin(trustedOriginId, _options) {
    const result = this.api.activateTrustedOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Creates a trusted origin
      * Create a trusted origin
      * @param trustedOrigin
      */
  createTrustedOrigin(trustedOrigin, _options) {
    const result = this.api.createTrustedOrigin(trustedOrigin, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a trusted origin. Sets the `status` to `INACTIVE`.
      * Deactivate a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      */
  deactivateTrustedOrigin(trustedOriginId, _options) {
    const result = this.api.deactivateTrustedOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a trusted origin
      * Delete a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      */
  deleteTrustedOrigin(trustedOriginId, _options) {
    const result = this.api.deleteTrustedOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a trusted origin
      * Retrieve a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      */
  getTrustedOrigin(trustedOriginId, _options) {
    const result = this.api.getTrustedOrigin(trustedOriginId, _options);
    return result.toPromise();
  }
  /**
      * Lists all trusted origins
      * List all trusted origins
      * @param q A search string that prefix matches against the &#x60;name&#x60; and &#x60;origin&#x60;
      * @param filter [Filter](https://developer.okta.com/docs/api/#filter) trusted origins with a supported expression for a subset of properties. You can filter on the following properties: &#x60;name&#x60;, &#x60;origin&#x60;, &#x60;status&#x60;, and &#x60;type&#x60; (type of scopes).
      * @param after After cursor provided by a prior request
      * @param limit Specifies the number of results
      */
  listTrustedOrigins(q, filter, after, limit, _options) {
    const result = this.api.listTrustedOrigins(q, filter, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Replaces a trusted origin
      * Replace a trusted origin
      * @param trustedOriginId &#x60;id&#x60; of the trusted origin
      * @param trustedOrigin
      */
  replaceTrustedOrigin(trustedOriginId, trustedOrigin, _options) {
    const result = this.api.replaceTrustedOrigin(trustedOriginId, trustedOrigin, _options);
    return result.toPromise();
  }
}
exports.PromiseTrustedOriginApi = PromiseTrustedOriginApi;
const ObservableAPI_74 = require('./ObservableAPI');
class PromiseUISchemaApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_74.ObservableUISchemaApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates an input for an enrollment form
      * Create a UI schema
      * @param uischemabody
      */
  createUISchema(uischemabody, _options) {
    const result = this.api.createUISchema(uischemabody, _options);
    return result.toPromise();
  }
  /**
      * Deletes a UI Schema by `id`
      * Delete a UI schema
      * @param id The unique ID of the UI Schema
      */
  deleteUISchemas(id, _options) {
    const result = this.api.deleteUISchemas(id, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the UI schema for an application given `appName`, `section` and `operation`
      * Retrieve the UI schema for a section
      * @param appName Name of the app definition (the OIN catalog app key name)
      * @param section
      * @param operation
      */
  getAppUISchema(appName, section, operation, _options) {
    const result = this.api.getAppUISchema(appName, section, operation, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the links for UI schemas for an application given `appName`
      * Retrieve the links for UI schemas for an application
      * @param appName Name of the app definition (the OIN catalog app key name)
      */
  getAppUISchemaLinks(appName, _options) {
    const result = this.api.getAppUISchemaLinks(appName, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a UI Schema by `id`
      * Retrieve a UI schema
      * @param id The unique ID of the UI Schema
      */
  getUISchema(id, _options) {
    const result = this.api.getUISchema(id, _options);
    return result.toPromise();
  }
  /**
      * Lists all UI Schemas in your org
      * List all UI schemas
      */
  listUISchemas(_options) {
    const result = this.api.listUISchemas(_options);
    return result.toPromise();
  }
  /**
      * Replaces a UI Schema by `id`
      * Replace a UI schema
      * @param id The unique ID of the UI Schema
      * @param updateUISchemaBody
      */
  replaceUISchemas(id, updateUISchemaBody, _options) {
    const result = this.api.replaceUISchemas(id, updateUISchemaBody, _options);
    return result.toPromise();
  }
}
exports.PromiseUISchemaApi = PromiseUISchemaApi;
const ObservableAPI_75 = require('./ObservableAPI');
class PromiseUnconfirmedUsersApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_75.ObservableUnconfirmedUsersApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Lists all unconfirmed users for an app
      * List all unconfirmed users
      * @param appId Application ID
      * @param after Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
      * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
      */
  listUnconfirmedUsers(appId, after, limit, _options) {
    const result = this.api.listUnconfirmedUsers(appId, after, limit, _options);
    return result.toPromise();
  }
}
exports.PromiseUnconfirmedUsersApi = PromiseUnconfirmedUsersApi;
const ObservableAPI_76 = require('./ObservableAPI');
class PromiseUserApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_76.ObservableUserApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a user.  Perform this operation only on users with a `STAGED` or `DEPROVISIONED` status. Activation of a user is an asynchronous operation. * The user has the `transitioningToStatus` property with an `ACTIVE` value during activation. This indicates that the user hasn\'t completed the asynchronous operation. * The user has an `ACTIVE` status when the activation process completes.  Users who don\'t have a password must complete the welcome flow by visiting the activation link to complete the transition to `ACTIVE` status.  > **Note:** If you want to send a branded user activation email, change the subdomain of your request to the custom domain that\'s associated with the brand. > For example, change `subdomain.okta.com` to `custom.domain.one`. See [Multibrand and custom domains](https://developer.okta.com/docs/concepts/brands/#multibrand-and-custom-domains).  > **Note:** If you have optional password enabled, visiting the activation link is optional for users who aren\'t required to enroll a password. > See [Create user with optional password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#create-user-with-optional-password).  > **Legal disclaimer** > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Activate a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail Sends an activation email to the user if &#x60;true&#x60;
      */
  activateUser(userId, sendEmail, _options) {
    const result = this.api.activateUser(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Updates a user\'s password by validating the user\'s current password.  This operation provides an option to delete all the sessions of the specified user. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared.  You can only perform this operation on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).  The user transitions to `ACTIVE` status when successfully invoked in `RECOVERY` status.  > **Note:** The Okta account management policy doesn\'t support the `/users/{userId}/credentials/change_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
      * Update password
      * @param userId ID of an existing Okta user
      * @param changePasswordRequest
      * @param strict If true, validates against the password minimum age policy
      */
  changePassword(userId, changePasswordRequest, strict, _options) {
    const result = this.api.changePassword(userId, changePasswordRequest, strict, _options);
    return result.toPromise();
  }
  /**
      * Updates a user\'s recovery question and answer credential by validating the user\'s current password. You can only perform this operation on users in `STAGED`, `ACTIVE`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).
      * Update recovery question
      * @param userId ID of an existing Okta user
      * @param userCredentials
      */
  changeRecoveryQuestion(userId, userCredentials, _options) {
    const result = this.api.changeRecoveryQuestion(userId, userCredentials, _options);
    return result.toPromise();
  }
  /**
      * Creates a new user in your Okta org with or without credentials.<br> > **Legal Disclaimer** > > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.  All responses return the created user. Activation of a user is an asynchronous operation. The system performs group reconciliation during activation and assigns the user to all apps via direct or indirect relationships (group memberships). * The user\'s `transitioningToStatus` property is `ACTIVE` during activation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s `status` is `ACTIVE` when the activation process is complete.  The user is emailed a one-time activation token if activated without a password.  > **Note:** If the user is assigned to an app that is configured for provisioning, the activation process triggers downstream provisioning to the app.  It is possible for a user to sign in before these apps have been successfully provisioned for the user.  > **Important:** Do not generate or send a one-time activation token when activating users with an assigned password. Users should sign in with their assigned password.  For more information about the various scenarios of creating a user listed in the examples, see the [User creation scenarios](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#user-creation-scenarios) section.
      * Create a user
      * @param body
      * @param activate Executes an [activation lifecycle](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserLifecycle/#tag/UserLifecycle/operation/activateUser) operation when creating the user
      * @param provider Indicates whether to create a user with a specified authentication provider
      * @param nextLogin With &#x60;activate&#x3D;true&#x60;, if &#x60;nextLogin&#x3D;changePassword&#x60;, a user is created, activated, and the password is set to &#x60;EXPIRED&#x60;. The user must change it the next time they sign in.
      */
  createUser(body, activate, provider, nextLogin, _options) {
    const result = this.api.createUser(body, activate, provider, nextLogin, _options);
    return result.toPromise();
  }
  /**
      * Deactivates a user.  Perform this operation only on users that do not have a `DEPROVISIONED` status. * The user\'s `transitioningToStatus` property is `DEPROVISIONED` during deactivation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s status is `DEPROVISIONED` when the deactivation process is complete.  > **Important:** Deactivating a user is a **destructive** operation. The user is deprovisioned from all assigned apps, which might destroy their data such as email or files. **This action cannot be recovered!**  You can also perform user deactivation asynchronously. To invoke asynchronous user deactivation, pass an HTTP header `Prefer: respond-async` with the request.  > **Note:** Users with the `DEPROVISIONED` status won\'t have their profiles updated when running the [Update a user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/updateUser) endpoint unless you have the **Edit Deactived User Profile Updates** option turned on in the Admin Console. See [Edit deactivated user profiles](https://help.okta.com/okta_help.htm?type=oie&id=edit-deactivated-users).
      * Deactivate a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail Sends a deactivation email to the admin if &#x60;true&#x60;
      * @param prefer Request asynchronous processing
      */
  deactivateUser(userId, sendEmail, prefer, _options) {
    const result = this.api.deactivateUser(userId, sendEmail, prefer, _options);
    return result.toPromise();
  }
  /**
      * Deletes any existing relationship between the `associated` and `primary` user. For the `associated` user, this is specified by the ID. The `primary` name specifies the relationship.  The operation is successful if the relationship is deleted. The operation is also successful if the specified user isn\'t in the `associated` relationship for any instance of the specified `primary` and thus, no relationship is found.
      * Delete a linked object value
      * @param userId If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
      * @param relationshipName Name of the &#x60;primary&#x60; or &#x60;associated&#x60; relationship being queried
      */
  deleteLinkedObjectForUser(userId, relationshipName, _options) {
    const result = this.api.deleteLinkedObjectForUser(userId, relationshipName, _options);
    return result.toPromise();
  }
  /**
      * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  > **Warning:** This action can\'t be recovered!  This operation on a user that hasn\'t been deactivated causes that user to be deactivated. A second delete operation is required to delete the user.  > **Note:** You can also perform user deletion asynchronously. To invoke asynchronous user deletion, pass an HTTP header `Prefer: respond-async` with the request.  This header is also supported by user deactivation, which is performed if the delete endpoint is invoked on a user that hasn\'t been deactivated.
      * Delete a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail Sends a deactivation email to the admin if &#x60;true&#x60;
      * @param prefer
      */
  deleteUser(userId, sendEmail, prefer, _options) {
    const result = this.api.deleteUser(userId, sendEmail, prefer, _options);
    return result.toPromise();
  }
  /**
      * Ends Okta sessions for the currently signed in user. By default, the current session remains active. Use this method in a browser-based app. > **Note:** This operation requires a session cookie for the user. The API token isn\'t allowed for this operation.
      * End a current user session
      * @param keepCurrent
      */
  endUserSessions(keepCurrent, _options) {
    const result = this.api.endUserSessions(keepCurrent, _options);
    return result.toPromise();
  }
  /**
      * Expires the password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.  > **Note:** The Okta account management policy doesn\'t support the `/users/{id}/lifecycle/expire_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
      * Expire the password
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  expirePassword(userId, _options) {
    const result = this.api.expirePassword(userId, _options);
    return result.toPromise();
  }
  /**
      * Expires the password and resets the user\'s password to a temporary password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. The user\'s password is reset to a temporary password that\'s returned, and then the user\'s password is expired. If `revokeSessions` is included in the request with a value of `true`, the user\'s current outstanding sessions are revoked and require re-authentication. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.
      * Expire the password with a temporary password
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param revokeSessions Revokes the user\&#39;s existing sessions if &#x60;true&#x60;
      */
  expirePasswordAndGetTemporaryPassword(userId, revokeSessions, _options) {
    const result = this.api.expirePasswordAndGetTemporaryPassword(userId, revokeSessions, _options);
    return result.toPromise();
  }
  /**
      * Starts the forgot password flow.  Generates a one-time token (OTT) that you can use to reset a user\'s password.  The user must validate their security question\'s answer when visiting the reset link. Perform this operation only on users with an `ACTIVE` status and a valid [recovery question credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/recovery_question&t=request).  > **Note:** If you have migrated to Identity Engine, you can allow users to recover passwords with any enrolled MFA authenticator. See [Self-service account recovery](https://help.okta.com/oie/en-us/content/topics/identity-engine/authenticators/configure-sspr.htm?cshid=ext-config-sspr).  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.  If `sendEmail` is `false`, returns a link for the user to reset their password. This operation doesn\'t affect the status of the user.
      * Start forgot password flow
      * @param userId ID of an existing Okta user
      * @param sendEmail Sends a forgot password email to the user if &#x60;true&#x60;
      */
  forgotPassword(userId, sendEmail, _options) {
    const result = this.api.forgotPassword(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Resets the user\'s password to the specified password if the provided answer to the recovery question is correct. You must include the recovery question answer with the submission.
      * Reset password with recovery question
      * @param userId ID of an existing Okta user
      * @param userCredentials
      * @param sendEmail
      */
  forgotPasswordSetNewPassword(userId, userCredentials, sendEmail, _options) {
    const result = this.api.forgotPasswordSetNewPassword(userId, userCredentials, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Resets a password. Generates a one-time token (OTT) that you can use to reset a user\'s password. You can automatically email the OTT link to the user or return the OTT to the API caller and distribute using a custom flow.  This operation transitions the user to the `RECOVERY` status. The user is then not able to sign in or initiate a forgot password flow until they complete the reset flow.  This operation provides an option to delete all the user\'s sessions. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared. > **Note:** You can also use this API to convert a user with the Okta credential provider to use a federated provider. After this conversion, the user can\'t directly sign in with a password. > To convert a federated user back to an Okta user, use the default API call.  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.   If `sendEmail` is `false`, returns a link for the user to reset their password.
      * Reset a password
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail
      * @param revokeSessions Revokes all user sessions, except for the current session, if set to &#x60;true&#x60;
      */
  generateResetPasswordToken(userId, sendEmail, revokeSessions, _options) {
    const result = this.api.generateResetPasswordToken(userId, sendEmail, revokeSessions, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a linked identity provider (IdP) user by ID
      * Retrieve a user for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  getIdentityProviderApplicationUser(idpId, userId, _options) {
    const result = this.api.getIdentityProviderApplicationUser(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a refresh token issued for the specified user and client
      * Retrieve a refresh token for a client
      * @param userId ID of an existing Okta user
      * @param clientId &#x60;client_id&#x60; of the app
      * @param tokenId &#x60;id&#x60; of Token
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      */
  getRefreshTokenForUserAndClient(userId, clientId, tokenId, expand, _options) {
    const result = this.api.getRefreshTokenForUserAndClient(userId, clientId, tokenId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a user from your Okta org.  You can substitute `me` for the `id` to fetch the current user linked to an API token or session cookie.  * The request returns the user linked to the API token that is specified in the Authorization header, not the user linked to the active session. Details of the admin user who granted the API token is returned.  * When the end user has an active Okta session, it is typically a CORS request from the browser. Therefore, it\'s possible to retrieve the current user without the Authorization header.  When fetching a user by `login` or `login shortname`, [URL encode](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) the request parameter to ensure that special characters are escaped properly. Logins with a `/` character can only be fetched by `id` due to URL issues with escaping the `/` character. If you don\'t know a user\'s ID, you can use the [List all users](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers) endpoint to find it.  > **Note:** Some browsers block third-party cookies by default, which disrupts Okta functionality in certain flows. See [Mitigate the impact of third-party cookie deprecation](https://help.okta.com/okta_help.htm?type=oie&id=ext-third-party-cookies).
      * Retrieve a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param contentType Specifies the media type of the resource. Optional &#x60;okta-response&#x60; value can be included for performance optimization.  Complex DelAuth configurations may degrade performance when fetching specific parts of the response, and passing this parameter can omit these parts, bypassing the bottleneck.  Enum values for &#x60;okta-response&#x60;:   * &#x60;omitCredentials&#x60;: Omits the credentials subobject from the response.   * &#x60;omitCredentialsLinks&#x60;: Omits the following HAL links from the response: Update password, Change recovery question, Start forgot password flow, Reset password, Reset factors, Unlock.   * &#x60;omitTransitioningToStatus&#x60;: Omits the &#x60;transitioningToStatus&#x60; field from the response.
      * @param expand An optional parameter to include metadata in the &#x60;_embedded&#x60; attribute. Valid value: &#x60;blocks&#x60;.
      */
  getUser(userId, contentType, expand, _options) {
    const result = this.api.getUser(userId, contentType, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a user\'s classification
      * Retrieve a user\'s classification
      * @param userId ID of an existing Okta user
      */
  getUserClassification(userId, _options) {
    const result = this.api.getUserClassification(userId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a grant for the specified user
      * Retrieve a user grant
      * @param userId ID of an existing Okta user
      * @param grantId Grant ID
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      */
  getUserGrant(userId, grantId, expand, _options) {
    const result = this.api.getUserGrant(userId, grantId, expand, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the user risk object for a user ID
      * Retrieve the user\'s risk
      * @param userId ID of an existing Okta user
      */
  getUserRisk(userId, _options) {
    const result = this.api.getUserRisk(userId, _options);
    return result.toPromise();
  }
  /**
      * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
      * Link a user to IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      * @param userIdentityProviderLinkRequest
      */
  linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options) {
    const result = this.api.linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options);
    return result.toPromise();
  }
  /**
      * Lists all app links for all direct or indirect (through group membership) assigned apps.  > **Note:** To list all apps in an org, use the [List all applications endpoint in the Applications API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/listApplications).
      * List all assigned app links
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listAppLinks(userId, _options) {
    const result = this.api.listAppLinks(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all grants for a specified user and client
      * List all grants for a client
      * @param userId ID of an existing Okta user
      * @param clientId &#x60;client_id&#x60; of the app
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of tokens to return
      */
  listGrantsForUserAndClient(userId, clientId, expand, after, limit, _options) {
    const result = this.api.listGrantsForUserAndClient(userId, clientId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all the users linked to an identity provider (IdP)
      * List all users for IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param q Searches the records for matching value
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit A limit on the number of objects to return
      * @param expand Expand user data
      */
  listIdentityProviderApplicationUsers(idpId, q, after, limit, expand, _options) {
    const result = this.api.listIdentityProviderApplicationUsers(idpId, q, after, limit, expand, _options);
    return result.toPromise();
  }
  /**
      * Lists either the `self` link for the primary user or all associated users in the relationship specified by `relationshipName`. If the specified user isn\'t associated in any relationship, an empty array is returned.  Use `me` instead of `id` to specify the current session user.
      * List the primary or all of the associated linked object values
      * @param userId If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
      * @param relationshipName Name of the &#x60;primary&#x60; or &#x60;associated&#x60; relationship being queried
      */
  listLinkedObjectsForUser(userId, relationshipName, _options) {
    const result = this.api.listLinkedObjectsForUser(userId, relationshipName, _options);
    return result.toPromise();
  }
  /**
      * Lists all refresh tokens issued for the specified user and client
      * List all refresh tokens for a client
      * @param userId ID of an existing Okta user
      * @param clientId &#x60;client_id&#x60; of the app
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of tokens to return
      */
  listRefreshTokensForUserAndClient(userId, clientId, expand, after, limit, _options) {
    const result = this.api.listRefreshTokensForUserAndClient(userId, clientId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
      * List all tokens from OIDC IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  listSocialAuthTokens(idpId, userId, _options) {
    const result = this.api.listSocialAuthTokens(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Lists information about how the user is blocked from accessing their account
      * List all user blocks
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listUserBlocks(userId, _options) {
    const result = this.api.listUserBlocks(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all client resources for which the specified user has grants or tokens.  > **Note:** To list all client resources for which a specified authorization server has tokens, use the [List all client resources for an authorization server in the Authorization Servers API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AuthorizationServerClients/#tag/AuthorizationServerClients/operation/listOAuth2ClientsForAuthorizationServer).
      * List all clients
      * @param userId ID of an existing Okta user
      */
  listUserClients(userId, _options) {
    const result = this.api.listUserClients(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all devices enrolled by a user.  > **Note:** To list all devices registered to an org, use the [List all devices endpoint in the Devices API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Device/#tag/Device/operation/listDevices).
      * List all devices
      * @param userId ID of an existing Okta user
      */
  listUserDevices(userId, _options) {
    const result = this.api.listUserDevices(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all grants for the specified user
      * List all user grants
      * @param userId ID of an existing Okta user
      * @param scopeId The scope ID to filter on
      * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
      * @param limit Specifies the number of grants to return
      */
  listUserGrants(userId, scopeId, expand, after, limit, _options) {
    const result = this.api.listUserGrants(userId, scopeId, expand, after, limit, _options);
    return result.toPromise();
  }
  /**
      * Lists all groups of which the user is a member. > **Note:** To list all groups in your org, use the [List all groups endpoints in the Groups API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups).
      * List all groups
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listUserGroups(userId, _options) {
    const result = this.api.listUserGroups(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists the identity providers (IdPs) associated with the user
      * List all IdPs for user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  listUserIdentityProviders(userId, _options) {
    const result = this.api.listUserIdentityProviders(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists users in your org, with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria. Different results are returned depending on specified queries in the request.  > **Notes:**  >  * This operation omits users that have a status of `DEPROVISIONED` in the response. To return all users, use a filter or search query instead. >  * The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.
      * List all users
      * @param contentType Specifies the media type of the resource. Optional &#x60;okta-response&#x60; value can be included for performance optimization.  Complex DelAuth configurations may degrade performance when fetching specific parts of the response, and passing this parameter can omit these parts, bypassing the bottleneck.  Enum values for &#x60;okta-response&#x60;:   * &#x60;omitCredentials&#x60;: Omits the credentials subobject from the response.   * &#x60;omitCredentialsLinks&#x60;: Omits the following HAL links from the response: Update password, Change recovery question, Start forgot password flow, Reset password, Reset factors, Unlock.   * &#x60;omitTransitioningToStatus&#x60;: Omits the &#x60;transitioningToStatus&#x60; field from the response.
      * @param search Searches for users with a supported filtering expression for most properties. Okta recommends this query parameter because it provides the largest range of search options and optimal performance.  &gt; **Note:** Using an overly complex or long search query can result in an error.  This operation supports [pagination](https://developer.okta.com/docs/api/#pagination). Use an ID lookup for records that you update to ensure your results contain the latest data. Returned users include those with the &#x60;DEPROVISIONED&#x60; status.  Property names in the search parameter are case sensitive, whereas operators (&#x60;eq&#x60;, &#x60;sw&#x60;, and so on) and string values are case insensitive. Unlike with user logins, diacritical marks are significant in search string values: a search for &#x60;isaac.brock&#x60; finds &#x60;Isaac.Brock&#x60;, but doesn\&#39;t find a property whose value is &#x60;isáàc.bröck&#x60;.  This operation requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). See [Special characters](https://developer.okta.com/docs/api/#special-characters).  This operation searches many properties:   * Any user profile attribute, including custom-defined attributes   * The top-level properties: &#x60;id&#x60;, &#x60;status&#x60;, &#x60;created&#x60;, &#x60;activated&#x60;, &#x60;statusChanged&#x60;, and &#x60;lastUpdated&#x60;   * The [user type](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/#tag/UserType/operation/updateUserType) accessed as &#x60;type.id&#x60;   * Properties that have array values  &gt; **Note:** &lt;x-lifecycle class&#x3D;\&quot;ea\&quot;&gt;&lt;/x-lifecycle&gt; The ability to search by user classification is available as an [Early Access](https://developer.okta.com/docs/api/openapi/okta-management/guides/release-lifecycle/#early-access-ea) feature. The &#x60;classification.type&#x60; property cannot be used in conjunction with other search terms. You can search using &#x60;classification.type eq \&quot;LITE\&quot;&#x60; or &#x60;classification.type eq \&quot;STANDARD\&quot;&#x60;.  You can also use &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters. The &#x60;ne&#x60; (not equal) operator isn\&#39;t supported, but you can obtain the same result by using &#x60;lt ... or ... gt&#x60;. For example, to see all users except those that have a status of &#x60;STAGED&#x60;, use &#x60;(status lt \&quot;STAGED\&quot; or status gt \&quot;STAGED\&quot;)&#x60;.  You can search properties that are arrays. If any element matches the search term, the entire array (object) is returned. Okta follows the [SCIM Protocol Specification](https://tools.ietf.org/html/rfc7644#section-3.4.2.2) for searching arrays. You can search multiple arrays, multiple values in an array, as well as using the standard logical and filtering operators. See [Filter](https://developer.okta.com/docs/reference/core-okta-api/#filter).  Searches for users can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. You can only use &#x60;co&#x60; with these select user profile attributes: &#x60;profile.firstName&#x60;, &#x60;profile.lastName&#x60;, &#x60;profile.email&#x60;, and &#x60;profile.login&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
      * @param filter Filters users with a supported expression for a subset of properties.  &gt; **Note:** Returned users include those with the &#x60;DEPROVISIONED&#x60; status.  This requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;filter&#x3D;lastUpdated gt \&quot;2013-06-01T00:00:00.000Z\&quot;&#x60; is encoded as &#x60;filter&#x3D;lastUpdated%20gt%20%222013-06-01T00:00:00.000Z%22&#x60;. Filtering is case-sensitive for property names and query values, while operators are case-insensitive.  Filtering supports the following limited number of properties: &#x60;status&#x60;, &#x60;lastUpdated&#x60;, &#x60;id&#x60;, &#x60;profile.login&#x60;, &#x60;profile.email&#x60;, &#x60;profile.firstName&#x60;, and &#x60;profile.lastName&#x60;.  Additionally, filtering supports only the equal &#x60;eq&#x60; operator from the standard Okta API filtering semantics, except in the case of the &#x60;lastUpdated&#x60; property. This property can also use the inequality operators (&#x60;gt&#x60;, &#x60;ge&#x60;, &#x60;lt&#x60;, and &#x60;le&#x60;). For logical operators, only the logical operators &#x60;and&#x60; and &#x60;or&#x60; are supported. The &#x60;not&#x60; operator isn\&#39;t supported. See [Filter](https://developer.okta.com/docs/api/#filter) and [Operators](https://developer.okta.com/docs/api/#operators).
      * @param q Finds users who match the specified query. Use the &#x60;q&#x60; parameter for simple queries, such as a lookup of users by name when creating a people picker.  The value of &#x60;q&#x60; is matched against &#x60;firstName&#x60;, &#x60;lastName&#x60;, or &#x60;email&#x60;. This performs a &#x60;startsWith&#x60; match, but this is an implementation detail and can change without notice. You don\&#39;t need to specify &#x60;firstName&#x60;, &#x60;lastName&#x60;, or &#x60;email&#x60;.  &gt; **Notes:**  &gt; * Using the &#x60;q&#x60; parameter in a request omits users that have a status of &#x60;DEPROVISIONED&#x60;. To return all users, use a &#x60;filter&#x60; or &#x60;search&#x60; query instead. &gt; * This doesn\&#39;t support pagination, but you can use &#x60;limit&#x60;.  &gt; * This isn\&#39;t designed for large data sets. For optimal performance, use the &#x60;search&#x60; parameter instead.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
      * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.  You can use &#x60;limit&#x60; with &#x60;after&#x60; to define the cursor location in the data set and manage the user records per page.
      * @param sortBy Specifies the field to sort by (for search queries only). This can be any single property, for example &#x60;sortBy&#x3D;profile.lastName&#x60;. Users with the same value for the &#x60;sortBy&#x60; property are ordered by &#x60;id&#x60;. Use with &#x60;sortOrder&#x60; to control the order of results.
      * @param sortOrder Specifies sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
      * @param fields Specifies a select set of user properties to query. Any other properties will be filtered out of the returned users. This is often called field projections in APIs, which can reduce payload size, improve performance, and limit unneccessary data exposure.  Requested fields should be comma-separated. Comma-separate the fields and place sub-fields in the profile object inside a &#x60;profile:()&#x60; directive, for example &#x60;profile:(firstName, city)&#x60;. The &#x60;id&#x60; field is always included, regardless of whether it\&#39;s specified in the &#x60;fields&#x60; parameter.
      * @param expand A parameter to include metadata in the &#x60;_embedded&#x60; property. Supported value: &#x60;classification&#x60;.
      */
  listUsers(contentType, search, filter, q, after, limit, sortBy, sortOrder, fields, expand, _options) {
    const result = this.api.listUsers(contentType, search, filter, q, after, limit, sortBy, sortOrder, fields, expand, _options);
    return result.toPromise();
  }
  /**
      * Reactivates a user.  Perform this operation only on users with a `PROVISIONED` or `RECOVERY` [status](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!c=200&path=status&t=response). This operation restarts the activation workflow if for some reason the user activation wasn\'t completed when using the `activationToken` from [Activate User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserLifecycle/#tag/UserLifecycle/operation/activateUser).  Users that don\'t have a password must complete the flow by completing the [Reset password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword) flow and MFA enrollment steps to transition the user to `ACTIVE` status.  If `sendEmail` is `false`, returns an activation link for the user to set up their account. The activation token can be used to create a custom activation link.
      * Reactivate a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param sendEmail Sends an activation email to the user if &#x60;true&#x60;
      */
  reactivateUser(userId, sendEmail, _options) {
    const result = this.api.reactivateUser(userId, sendEmail, _options);
    return result.toPromise();
  }
  /**
      * Replaces a user\'s profile, credentials, or both using strict-update semantics.  All profile properties must be specified when updating a user\'s profile with a `PUT` method. Any property not specified in the request is deleted. > **Important:** Don\'t use a `PUT` method for partial updates.
      * Replace a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param user
      * @param strict If &#x60;true&#x60;, validates against minimum age and history password policy
      * @param ifMatch The ETag value of the user\&#39;s expected current state. This becomes a conditional request used for concurrency control. See [Conditional Requests and Entity Tags](/#conditional-requests-and-entity-tags).
      */
  replaceUser(userId, user, strict, ifMatch, _options) {
    const result = this.api.replaceUser(userId, user, strict, ifMatch, _options);
    return result.toPromise();
  }
  /**
      * Replaces the user\'s classification
      * Replace the user\'s classification
      * @param userId ID of an existing Okta user
      * @param replaceUserClassification
      */
  replaceUserClassification(userId, replaceUserClassification, _options) {
    const result = this.api.replaceUserClassification(userId, replaceUserClassification, _options);
    return result.toPromise();
  }
  /**
      * Resets all factors for the specified user. All MFA factor enrollments return to the unenrolled state. The user\'s status remains `ACTIVE`. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset the factors
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  resetFactors(userId, _options) {
    const result = this.api.resetFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all grants for the specified user and client
      * Revoke all grants for a client
      * @param userId ID of an existing Okta user
      * @param clientId &#x60;client_id&#x60; of the app
      */
  revokeGrantsForUserAndClient(userId, clientId, _options) {
    const result = this.api.revokeGrantsForUserAndClient(userId, clientId, _options);
    return result.toPromise();
  }
  /**
      * Revokes the specified refresh and access tokens
      * Revoke a token for a client
      * @param userId ID of an existing Okta user
      * @param clientId &#x60;client_id&#x60; of the app
      * @param tokenId &#x60;id&#x60; of Token
      */
  revokeTokenForUserAndClient(userId, clientId, tokenId, _options) {
    const result = this.api.revokeTokenForUserAndClient(userId, clientId, tokenId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all refresh tokens issued for the specified user and client
      * Revoke all refresh tokens for a client
      * @param userId ID of an existing Okta user
      * @param clientId &#x60;client_id&#x60; of the app
      */
  revokeTokensForUserAndClient(userId, clientId, _options) {
    const result = this.api.revokeTokensForUserAndClient(userId, clientId, _options);
    return result.toPromise();
  }
  /**
      * Revokes one grant for a specified user
      * Revoke a user grant
      * @param userId ID of an existing Okta user
      * @param grantId Grant ID
      */
  revokeUserGrant(userId, grantId, _options) {
    const result = this.api.revokeUserGrant(userId, grantId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all grants for a specified user
      * Revoke all user grants
      * @param userId ID of an existing Okta user
      */
  revokeUserGrants(userId, _options) {
    const result = this.api.revokeUserGrants(userId, _options);
    return result.toPromise();
  }
  /**
      * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.  You can also clear the user\'s remembered factors for all devices using the `forgetDevices` parameter. See [forgetDevices](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserSessions/#tag/UserSessions/operation/revokeUserSessions!in=query&path=forgetDevices&t=request). > **Note:** This operation doesn\'t clear the sessions created for web or native apps.
      * Revoke all user sessions
      * @param userId ID of an existing Okta user
      * @param oauthTokens Revokes issued OpenID Connect and OAuth refresh and access tokens
      * @param forgetDevices Clears the user\&#39;s remembered factors for all devices. &gt; **Note:** This parameter defaults to false in Classic Engine.
      */
  revokeUserSessions(userId, oauthTokens, forgetDevices, _options) {
    const result = this.api.revokeUserSessions(userId, oauthTokens, forgetDevices, _options);
    return result.toPromise();
  }
  /**
      * Assigns the first user as the `associated` and the second user as the `primary` for the specified relationship.  If the first user is already associated with a different `primary` for this relationship, the previous link is removed. A linked object relationship can specify only one primary user for an associated user.
      * Assign a linked object value for primary
      * @param associatedUserId If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
      * @param primaryRelationshipName Name of the &#x60;primary&#x60; relationship being assigned
      * @param primaryUserId User ID to be assigned to the &#x60;primary&#x60; relationship for the &#x60;associated&#x60; user
      */
  setLinkedObjectForUser(associatedUserId, primaryRelationshipName, primaryUserId, _options) {
    const result = this.api.setLinkedObjectForUser(associatedUserId, primaryRelationshipName, primaryUserId, _options);
    return result.toPromise();
  }
  /**
      * Suspends a user. Perform this operation only on users with an `ACTIVE` status. The user has a `SUSPENDED` status when the process completes.  Suspended users can\'t sign in to Okta. They can only be unsuspended or deactivated. Their group and app assignments are retained.
      * Suspend a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  suspendUser(userId, _options) {
    const result = this.api.suspendUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
      * Unlink a user from IdP
      * @param idpId &#x60;id&#x60; of IdP
      * @param userId ID of an existing Okta user
      */
  unlinkUserFromIdentityProvider(idpId, userId, _options) {
    const result = this.api.unlinkUserFromIdentityProvider(idpId, userId, _options);
    return result.toPromise();
  }
  /**
      * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that\'s blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password. > **Note:** This operation works with Okta-sourced users. It doesn\'t support directory-sourced accounts such as Active Directory.
      * Unlock a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  unlockUser(userId, _options) {
    const result = this.api.unlockUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state. This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      */
  unsuspendUser(userId, _options) {
    const result = this.api.unsuspendUser(userId, _options);
    return result.toPromise();
  }
  /**
      * Updates a user\'s profile or credentials with partial update semantics.  > **Important:** Use the `POST` method for partial updates. Unspecified properties are set to null with `PUT`.  `profile` and `credentials` can be updated independently or together with a single request.  > **Notes:**  > * Currently, the user type of a user can only be changed using a full replacement `PUT` operation. If the request parameters of a partial update include the `type` element from the user object, the value must match the existing type of the user. Only admins are permitted to change the user type of a user; end users are not allowed to change their own user type. > > * To update a current user\'s profile with partial semantics, you can use the `/api/v1/users/me` endpoint. But, a user can only update profile properties that they have write access for. Within the profile, if the user tries to update the primary or the secondary email IDs, verification emails are sent to those email IDs, and the fields are updated only upon verification. > > * You can update user profiles of users in the `DEPROVISIONED` status if you have the **Edit Deactivated User Profile Updates** option turned on in the Admin Console. See [deactivated user profiles](https://help.okta.com/okta_help.htm?type=oie&id=edit-deactivated-users).  If you are using this endpoint to set a password, it sets a password without validating existing user credentials. This is an administrative operation. For operations that validate credentials, refer to the [Reset password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword), [Start forgot password flow](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/forgotPassword), and [Update password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/changePassword) endpoints.
      * Update a user
      * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
      * @param user
      * @param strict If true, validates against minimum age and history password policy
      * @param ifMatch The ETag value of the user\&#39;s expected current state. This becomes a conditional request used for concurrency control. See [Conditional Requests and Entity Tags](/#conditional-requests-and-entity-tags).
      */
  updateUser(userId, user, strict, ifMatch, _options) {
    const result = this.api.updateUser(userId, user, strict, ifMatch, _options);
    return result.toPromise();
  }
  /**
      * Upserts (creates or updates) the user risk object for a user ID
      * Upsert the user\'s risk
      * @param userId ID of an existing Okta user
      * @param userRiskRequest
      */
  upsertUserRisk(userId, userRiskRequest, _options) {
    const result = this.api.upsertUserRisk(userId, userRiskRequest, _options);
    return result.toPromise();
  }
}
exports.PromiseUserApi = PromiseUserApi;
const ObservableAPI_77 = require('./ObservableAPI');
class PromiseUserAuthenticatorEnrollmentsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_77.ObservableUserAuthenticatorEnrollmentsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a Phone authenticator enrollment that\'s automatically activated
      * Create an auto-activated Phone authenticator enrollment
      * @param userId ID of an existing Okta user
      * @param authenticator
      */
  createAuthenticatorEnrollment(userId, authenticator, _options) {
    const result = this.api.createAuthenticatorEnrollment(userId, authenticator, _options);
    return result.toPromise();
  }
  /**
      * Creates an auto-activated Temporary access code (TAC) authenticator enrollment
      * Create an auto-activated TAC authenticator enrollment
      * @param userId ID of an existing Okta user
      * @param authenticator
      */
  createTacAuthenticatorEnrollment(userId, authenticator, _options) {
    const result = this.api.createTacAuthenticatorEnrollment(userId, authenticator, _options);
    return result.toPromise();
  }
  /**
      * Deletes an existing enrollment for the specified user. The user can enroll the authenticator again.
      * Delete an authenticator enrollment
      * @param userId ID of an existing Okta user
      * @param enrollmentId Unique identifier of an enrollment
      */
  deleteAuthenticatorEnrollment(userId, enrollmentId, _options) {
    const result = this.api.deleteAuthenticatorEnrollment(userId, enrollmentId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a user\'s authenticator enrollment by `enrollmentId`
      * Retrieve an authenticator enrollment
      * @param userId ID of an existing Okta user
      * @param enrollmentId Unique identifier of an enrollment
      * @param discloseIdentifiers Indicates whether or not the identifier of an authenticator enrollment is disclosed or anonymized. If it\&#39;s included in the operation query, then the identifier of the authenticator enrollment (the actual phone number, for example) is included in the response.
      */
  getAuthenticatorEnrollment(userId, enrollmentId, discloseIdentifiers, _options) {
    const result = this.api.getAuthenticatorEnrollment(userId, enrollmentId, discloseIdentifiers, _options);
    return result.toPromise();
  }
  /**
      * Lists all authenticator enrollments of the specified user
      * List all authenticator enrollments
      * @param userId ID of an existing Okta user
      * @param discloseIdentifiers Indicates whether or not the identifier of an authenticator enrollment is disclosed or anonymized. If it\&#39;s included in the operation query, then the identifier of the authenticator enrollment (the actual phone number, for example) is included in the response.
      */
  listAuthenticatorEnrollments(userId, discloseIdentifiers, _options) {
    const result = this.api.listAuthenticatorEnrollments(userId, discloseIdentifiers, _options);
    return result.toPromise();
  }
}
exports.PromiseUserAuthenticatorEnrollmentsApi = PromiseUserAuthenticatorEnrollmentsApi;
const ObservableAPI_78 = require('./ObservableAPI');
class PromiseUserFactorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_78.ObservableUserFactorApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a factor. Some factors (`call`, `email`, `push`, `sms`, `token:software:totp`, `u2f`, and `webauthn`) require activation to complete the enrollment process.  Okta enforces a rate limit of five activation attempts within five minutes. After a user exceeds the rate limit, Okta returns an error message.  > **Notes:**  > * If the user exceeds their SMS, call, or email factor activation rate limit, then an [OTP resend request](./#tag/UserFactor/operation/resendEnrollFactor) isn\'t allowed for the same factor. > * You can\'t use the Factors API to activate Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).
      * Activate a factor
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param body
      */
  activateFactor(userId, factorId, body, _options) {
    const result = this.api.activateFactor(userId, factorId, body, _options);
    return result.toPromise();
  }
  /**
      * Enrolls a supported factor for the specified user  > **Notes:**  >   * All responses return the enrolled factor with a status of either `PENDING_ACTIVATION` or `ACTIVE`. >   * You can\'t use the Factors API to enroll Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).  #### Additional SMS/Call factor information  * **Rate limits**: Okta may return a `429 Too Many Requests` status code if you attempt to resend an SMS or a voice call challenge (OTP) within the same time window. The current [rate limit](https://developer.okta.com/docs/reference/rate-limits/) is one SMS/CALL challenge per phone number every 30 seconds.  * **Existing phone numbers**: Okta may return a `400 Bad Request` status code if a user attempts to enroll with a different phone number when the user has an existing mobile phone or has an existing phone with voice call capability. A user can enroll only one mobile phone for `sms` and enroll only one voice call capable phone for `call` factor.  #### Additional WebAuthn factor information  * For detailed information on the WebAuthn standard, including an up-to-date list of supported browsers, see [webauthn.me](https://a0.to/webauthnme-okta-docs).  * When you enroll a WebAuthn factor, the `activation` object in `_embedded` contains properties used to help the client to create a new WebAuthn credential for use with Okta. See the [WebAuthn spec for PublicKeyCredentialCreationOptions](https://www.w3.org/TR/webauthn/#dictionary-makecredentialoptions).  #### Additional Custom TOTP factor information  * The enrollment process involves passing both the `factorProfileId` and `sharedSecret` properties for a token.  * A factor profile represents a particular configuration of the Custom TOTP factor. It includes certain properties that match the hardware token that end users possess, such as the HMAC algorithm, passcode length, and time interval. There can be multiple Custom TOTP factor profiles per org, but users can only enroll in one Custom TOTP factor. Admins can [create Custom TOTP factor profiles](https://help.okta.com/okta_help.htm?id=ext-mfa-totp) in the Admin Console. Then, copy the `factorProfileId` from the Admin Console into the API request.  * <x-lifecycle class=\"oie\"></x-lifecycle> For Custom TOTP enrollment, Okta automaticaly enrolls a user with a `token:software:totp` factor and the `push` factor if the user isn\'t currently enrolled with these factors.
      * Enroll a factor
      * @param userId ID of an existing Okta user
      * @param body Factor
      * @param updatePhone If &#x60;true&#x60;, indicates that you are replacing the currently registered phone number for the specified user. This parameter is ignored if the existing phone number is used by an activated factor.
      * @param templateId ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors. If the provided ID doesn\&#39;t exist, the default template is used instead.
      * @param tokenLifetimeSeconds Defines how long the token remains valid
      * @param activate If &#x60;true&#x60;, the factor is immediately activated as part of the enrollment. An activation process isn\&#39;t required. Currently auto-activation is supported by &#x60;sms&#x60;, &#x60;call&#x60;, &#x60;email&#x60; and &#x60;token:hotp&#x60; (Custom TOTP) factors.
      * @param acceptLanguage An ISO 639-1 two-letter language code that defines a localized message to send. This parameter is only used by &#x60;sms&#x60; factors. If a localized message doesn\&#39;t exist or the &#x60;templateId&#x60; is incorrect, the default template is used instead.
      */
  enrollFactor(userId, body, updatePhone, templateId, tokenLifetimeSeconds, activate, acceptLanguage, _options) {
    const result = this.api.enrollFactor(userId, body, updatePhone, templateId, tokenLifetimeSeconds, activate, acceptLanguage, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an existing factor for the specified user
      * Retrieve a factor
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      */
  getFactor(userId, factorId, _options) {
    const result = this.api.getFactor(userId, factorId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the status of a `push` factor verification transaction   > **Note:**  > The response body for a number matching push challenge to an Okta Verify `push` factor enrollment is different from the response body of a standard push challenge.   > The number matching push challenge [response body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus!c=200&path=1/_embedded&t=response) contains the correct answer for the challenge.  > Use [Verify a factor](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor) to configure which challenge is sent.
      * Retrieve a factor transaction status
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param transactionId ID of an existing factor verification transaction
      */
  getFactorTransactionStatus(userId, factorId, transactionId, _options) {
    const result = this.api.getFactorTransactionStatus(userId, factorId, transactionId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the specified YubiKey OTP token by `id`
      * Retrieve a YubiKey OTP token
      * @param tokenId ID of a YubiKey token
      */
  getYubikeyOtpTokenById(tokenId, _options) {
    const result = this.api.getYubikeyOtpTokenById(tokenId, _options);
    return result.toPromise();
  }
  /**
      * Lists all enrolled factors for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only enrolled factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all enrolled factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
      * List all enrolled factors
      * @param userId ID of an existing Okta user
      */
  listFactors(userId, _options) {
    const result = this.api.listFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all the supported factors that can be enrolled for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all supported factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
      * List all supported factors
      * @param userId ID of an existing Okta user
      */
  listSupportedFactors(userId, _options) {
    const result = this.api.listSupportedFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all available security questions for the specified user
      * List all supported security questions
      * @param userId ID of an existing Okta user
      */
  listSupportedSecurityQuestions(userId, _options) {
    const result = this.api.listSupportedSecurityQuestions(userId, _options);
    return result.toPromise();
  }
  /**
      * Lists all YubiKey OTP tokens
      * List all YubiKey OTP tokens
      * @param after Specifies the pagination cursor for the next page of tokens
      * @param expand Embeds the [user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) resource if the YubiKey token is assigned to a user and &#x60;expand&#x60; is set to &#x60;user&#x60;
      * @param filter The expression used to filter tokens
      * @param forDownload Returns tokens in a CSV to download instead of in the response. When you use this query parameter, the &#x60;limit&#x60; default changes to 1000.
      * @param limit Specifies the number of results per page
      * @param sortBy The value of how the tokens are sorted
      * @param sortOrder Specifies the sort order, either &#x60;ASC&#x60; or &#x60;DESC&#x60;
      */
  listYubikeyOtpTokens(after, expand, filter, forDownload, limit, sortBy, sortOrder, _options) {
    const result = this.api.listYubikeyOtpTokens(after, expand, filter, forDownload, limit, sortBy, sortOrder, _options);
    return result.toPromise();
  }
  /**
      * Resends an `sms`, `call`, or `email` factor challenge as part of an enrollment flow.  For `call` and `sms` factors, Okta enforces a rate limit of one OTP challenge per device every 30 seconds. You can configure your `sms` and `call` factors to use a third-party telephony provider. See the [Telephony inline hook reference](https://developer.okta.com/docs/reference/telephony-hook/). Okta alternates between SMS providers with every resend request to ensure delivery of SMS and Call OTPs across different carriers.  > **Note:** Resend operations aren\'t allowed after a factor exceeds the activation rate limit. See [Activate a factor](./#tag/UserFactor/operation/activateFactor).
      * Resend a factor enrollment
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param resendUserFactor
      * @param templateId ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors.
      */
  resendEnrollFactor(userId, factorId, resendUserFactor, templateId, _options) {
    const result = this.api.resendEnrollFactor(userId, factorId, resendUserFactor, templateId, _options);
    return result.toPromise();
  }
  /**
      * Unenrolls an existing factor for the specified user. You can\'t unenroll a factor from a deactivated user. Unenrolling a factor allows the user to enroll a new factor.  > **Note:** If you unenroll the `push` or the `signed_nonce` factors, Okta also unenrolls any other `totp`, `signed_nonce`, or Okta Verify `push` factors associated with the user.
      * Unenroll a factor
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param removeRecoveryEnrollment If &#x60;true&#x60;, removes the phone number as both a recovery method and a factor. This parameter is only used for the &#x60;sms&#x60; and &#x60;call&#x60; factors.
      */
  unenrollFactor(userId, factorId, removeRecoveryEnrollment, _options) {
    const result = this.api.unenrollFactor(userId, factorId, removeRecoveryEnrollment, _options);
    return result.toPromise();
  }
  /**
      * Uploads a seed for a user to enroll a YubiKey OTP
      * Upload a YubiKey OTP seed
      * @param uploadYubikeyOtpTokenSeedRequest
      * @param after Specifies the pagination cursor for the next page of tokens
      * @param expand Embeds the [user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) resource if the YubiKey token is assigned to a user and &#x60;expand&#x60; is set to &#x60;user&#x60;
      * @param filter The expression used to filter tokens
      * @param forDownload Returns tokens in a CSV to download instead of in the response. When you use this query parameter, the &#x60;limit&#x60; default changes to 1000.
      * @param limit Specifies the number of results per page
      * @param sortBy The value of how the tokens are sorted
      * @param sortOrder Specifies the sort order, either &#x60;ASC&#x60; or &#x60;DESC&#x60;
      */
  uploadYubikeyOtpTokenSeed(uploadYubikeyOtpTokenSeedRequest, after, expand, filter, forDownload, limit, sortBy, sortOrder, _options) {
    const result = this.api.uploadYubikeyOtpTokenSeed(uploadYubikeyOtpTokenSeedRequest, after, expand, filter, forDownload, limit, sortBy, sortOrder, _options);
    return result.toPromise();
  }
  /**
      * Verifies an OTP for a factor. Some factors (`call`, `email`, `push`, `sms`, `u2f`, and `webauthn`) must first issue a challenge before you can verify the factor. Do this by making a request without a body. After a challenge is issued, make another request to verify the factor.  > **Notes:** > - You can send standard push challenges or number matching push challenges to Okta Verify `push` factor enrollments. Use a [request body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!path=2/useNumberMatchingChallenge&t=request) for number matching push challenges.  > - To verify a `push` factor, use the **poll** link returned when you issue the challenge. See [Retrieve a factor transaction status](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus).
      * Verify a factor
      * @param userId ID of an existing Okta user
      * @param factorId ID of an existing user factor
      * @param templateId ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors.
      * @param tokenLifetimeSeconds Defines how long the token remains valid
      * @param xForwardedFor Public IP address for the user agent
      * @param userAgent Type of user agent detected when the request is made. Required to verify &#x60;push&#x60; factors.
      * @param acceptLanguage An ISO 639-1 two-letter language code that defines a localized message to send. This parameter is only used by &#x60;sms&#x60; factors. If a localized message doesn\&#39;t exist or the &#x60;templateId&#x60; is incorrect, the default template is used instead.
      * @param body Verifies an OTP for a factor. Some factors (&#x60;call&#x60;, &#x60;email&#x60;, &#x60;push&#x60;, &#x60;sms&#x60;, &#x60;u2f&#x60;, and &#x60;webauthn&#x60;) must first issue a challenge before you can verify the factor. Do this by making a request without a body. After a challenge is issued, make another request to verify the factor.  &gt; **Note:** &gt; Unlike standard push challenges that don\&#39;t require a request body, a number matching [&#x60;push&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!path&#x3D;2/useNumberMatchingChallenge&amp;t&#x3D;request) challenge requires a request body. &#x60;useNumberMatchingChallenge&#x60; must be set to &#x60;true&#x60;. &gt; When a number matching challenge is issued for an Okta Verify &#x60;push&#x60; factor enrollment, a &#x60;correctAnswer&#x60; challenge object is returned in the [&#x60;_embedded&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!c&#x3D;200&amp;path&#x3D;_embedded&amp;t&#x3D;response) object.
      */
  verifyFactor(userId, factorId, templateId, tokenLifetimeSeconds, xForwardedFor, userAgent, acceptLanguage, body, _options) {
    const result = this.api.verifyFactor(userId, factorId, templateId, tokenLifetimeSeconds, xForwardedFor, userAgent, acceptLanguage, body, _options);
    return result.toPromise();
  }
}
exports.PromiseUserFactorApi = PromiseUserFactorApi;
const ObservableAPI_79 = require('./ObservableAPI');
class PromiseUserTypeApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_79.ObservableUserTypeApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates a new user type. Okta automatically creates a `default` user type for your org. You may add up to nine additional user types. > **Note**: New user types are based on the current default schema template. Modifications to this schema do not automatically propagate to previously created user types.
      * Create a user type
      * @param userType
      */
  createUserType(userType, _options) {
    const result = this.api.createUserType(userType, _options);
    return result.toPromise();
  }
  /**
      * Deletes a user type permanently. > **Note**: You can\'t delete the default user type or a user type that is currently assigned to users.
      * Delete a user type
      * @param typeId
      */
  deleteUserType(typeId, _options) {
    const result = this.api.deleteUserType(typeId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves a user type by ID. Use `default` to fetch the default user type.
      * Retrieve a user type
      * @param typeId
      */
  getUserType(typeId, _options) {
    const result = this.api.getUserType(typeId, _options);
    return result.toPromise();
  }
  /**
      * Lists all user types in your org
      * List all user types
      */
  listUserTypes(_options) {
    const result = this.api.listUserTypes(_options);
    return result.toPromise();
  }
  /**
      * Replaces an existing user type. This operation is a full update. > **Note**: The `name` of an existing user type can\'t be changed, but must be part of the request body. You can only replace the `displayName` and `description` elements.
      * Replace a user type
      * @param typeId
      * @param userType
      */
  replaceUserType(typeId, userType, _options) {
    const result = this.api.replaceUserType(typeId, userType, _options);
    return result.toPromise();
  }
  /**
      * Updates an existing user type. This operation is a partial update. > **Note**: You can only update the `displayName` and `description` elements. The `name` of an existing user type can\'t be changed.
      * Update a user type
      * @param typeId
      * @param userType
      */
  updateUserType(typeId, userType, _options) {
    const result = this.api.updateUserType(typeId, userType, _options);
    return result.toPromise();
  }
}
exports.PromiseUserTypeApi = PromiseUserTypeApi;
const ObservableAPI_80 = require('./ObservableAPI');
class PromiseWebAuthnPreregistrationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_80.ObservableWebAuthnPreregistrationApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Activates a preregistered WebAuthn factor. As part of this operation, Okta first decrypts and verifies the factor PIN and enrollment data sent by the fulfillment provider.
      * Activate a preregistered WebAuthn factor
      * @param body Enrollment activation request
      */
  activatePreregistrationEnrollment(body, _options) {
    const result = this.api.activatePreregistrationEnrollment(body, _options);
    return result.toPromise();
  }
  /**
      * Assigns the fulfillment error status to a WebAuthn preregistration factor for a user. The `/mark-error` path indicates that the specific `FULFILLMENT_ERRORED` AuthFactor status is set on the enrollment.
      * Assign the fulfillment error status to a WebAuthn preregistration factor
      * @param userId ID of an existing Okta user
      * @param authenticatorEnrollmentId ID for a WebAuthn preregistration factor in Okta
      */
  assignFulfillmentErrorWebAuthnPreregistrationFactor(userId, authenticatorEnrollmentId, _options) {
    const result = this.api.assignFulfillmentErrorWebAuthnPreregistrationFactor(userId, authenticatorEnrollmentId, _options);
    return result.toPromise();
  }
  /**
      * Deletes a specific WebAuthn preregistration factor for a user
      * Delete a WebAuthn preregistration factor
      * @param userId ID of an existing Okta user
      * @param authenticatorEnrollmentId ID for a WebAuthn preregistration factor in Okta
      */
  deleteWebAuthnPreregistrationFactor(userId, authenticatorEnrollmentId, _options) {
    const result = this.api.deleteWebAuthnPreregistrationFactor(userId, authenticatorEnrollmentId, _options);
    return result.toPromise();
  }
  /**
      * Enrolls a preregistered WebAuthn factor. This WebAuthn factor has a longer challenge timeout period to accommodate the fulfillment request process. As part of this operation, Okta generates elliptic curve (EC) key-pairs used to encrypt the factor PIN and enrollment data sent by the fulfillment provider.
      * Enroll a preregistered WebAuthn factor
      * @param body Enrollment initialization request
      */
  enrollPreregistrationEnrollment(body, _options) {
    const result = this.api.enrollPreregistrationEnrollment(body, _options);
    return result.toPromise();
  }
  /**
      * Generates a fulfillment request by sending a WebAuthn preregistration event to start the flow. The WebAuthn preregistration integration for Okta Workflows uses a preregistration event to populate the fulfillment request.
      * Generate a fulfillment request
      * @param body Fulfillment request
      */
  generateFulfillmentRequest(body, _options) {
    const result = this.api.generateFulfillmentRequest(body, _options);
    return result.toPromise();
  }
  /**
      * Lists all WebAuthn preregistration factors for the specified user
      * List all WebAuthn preregistration factors
      * @param userId ID of an existing Okta user
      */
  listWebAuthnPreregistrationFactors(userId, _options) {
    const result = this.api.listWebAuthnPreregistrationFactors(userId, _options);
    return result.toPromise();
  }
  /**
      * Sends the decoded PIN for the specified WebAuthn preregistration enrollment. PINs are sent to the user\'s email. To resend the PIN, call this operation again.
      * Send a PIN to user
      * @param body Send PIN request
      */
  sendPin(body, _options) {
    const result = this.api.sendPin(body, _options);
    return result.toPromise();
  }
}
exports.PromiseWebAuthnPreregistrationApi = PromiseWebAuthnPreregistrationApi;
const ObservableAPI_81 = require('./ObservableAPI');
class PromiseYourOinIntegrationsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_81.ObservableYourOinIntegrationsApi(configuration, requestFactory, responseProcessor);
  }
  /**
      * Creates an OIN Integration submission for verification and publication
      * Create an OIN integration
      * @param submissionRequest
      */
  createSubmission(submissionRequest, _options) {
    const result = this.api.createSubmission(submissionRequest, _options);
    return result.toPromise();
  }
  /**
      * Retrieves all actions for a specific capability in an OIN Integration submission
      * Retrieve all actions for OIN integration
      * @param submissionId OIN Integration ID
      * @param capability Capability
      */
  getSubmissionActions(submissionId, capability, _options) {
    const result = this.api.getSubmissionActions(submissionId, capability, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the authentication settings for an OIN Integration submission
      * Retrieve the authentication settings
      * @param submissionId OIN Integration ID
      */
  getSubmissionAuthSettings(submissionId, _options) {
    const result = this.api.getSubmissionAuthSettings(submissionId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves an OIN Integration by ID
      * Retrieve an OIN integration
      * @param submissionId OIN Integration ID
      */
  getSubmissionByOperationId(submissionId, _options) {
    const result = this.api.getSubmissionByOperationId(submissionId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the tenant settings for an OIN Integration submission
      * Retrieve the tenant settings
      * @param submissionId OIN Integration ID
      */
  getSubmissionTenantSettings(submissionId, _options) {
    const result = this.api.getSubmissionTenantSettings(submissionId, _options);
    return result.toPromise();
  }
  /**
      * Retrieves the testing information for an existing OIN Integration
      * Retrieve an OIN integration testing information
      * @param submissionId OIN Integration ID
      */
  getSubmissionTestInfo(submissionId, _options) {
    const result = this.api.getSubmissionTestInfo(submissionId, _options);
    return result.toPromise();
  }
  /**
      * Lists all available actions from an actions provider (such as Workflows) for a specific OIN integration
      * List all available actions for an OIN integration
      * @param submissionId OIN Integration ID
      * @param capability Capability
      * @param actionsProviderType Actions provider type
      */
  listAvailableActions(submissionId, capability, actionsProviderType, _options) {
    const result = this.api.listAvailableActions(submissionId, capability, actionsProviderType, _options);
    return result.toPromise();
  }
  /**
      * Lists all capabilities for an OIN Integration submission
      * List all supported capabilities
      * @param submissionId OIN Integration ID
      */
  listSubmissionCapabilities(submissionId, _options) {
    const result = this.api.listSubmissionCapabilities(submissionId, _options);
    return result.toPromise();
  }
  /**
      * Lists all OIN Integration submissions created through the org
      * List all OIN integrations
      * @param limit A limit on the number of objects to return
      * @param after Specify the pagination cursor (OIN Integration instance &#x60;id&#x60;) for the next page of OIN Integrations.
      */
  listSubmissions(limit, after, _options) {
    const result = this.api.listSubmissions(limit, after, _options);
    return result.toPromise();
  }
  /**
      * Replaces the properties of an OIN Integration identified by ID
      * Replace an OIN integration
      * @param submissionId OIN Integration ID
      * @param submissionRequest
      */
  replaceSubmission(submissionId, submissionRequest, _options) {
    const result = this.api.replaceSubmission(submissionId, submissionRequest, _options);
    return result.toPromise();
  }
  /**
      * Submits an OIN Integration for Okta verification
      * Submit an OIN integration
      * @param submissionId OIN Integration ID
      */
  submitSubmission(submissionId, _options) {
    const result = this.api.submitSubmission(submissionId, _options);
    return result.toPromise();
  }
  /**
      * Uploads a default logo to the OIN submission. The image must adhere to the [OIN logo guidelines](https://developer.okta.com/docs/guides/submit-app-prereq/main/#logo-guidelines). Use the URL returned in the response header to specify the [`logo`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission!path=logo&t=request) parameter when you [create your OIN Integration submission](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission). This logo appears in the OIN catalog for your app integration.
      * Upload a default logo for an OIN integration
      * @param file
      */
  uploadSubmissionDefaultLogo(file, _options) {
    const result = this.api.uploadSubmissionDefaultLogo(file, _options);
    return result.toPromise();
  }
  /**
      * Uploads a logo to your org. The image uploaded must adhere to the [OIN logo guidelines](https://developer.okta.com/docs/guides/submit-app-prereq/main/#logo-guidelines). Use the URL returned in the response header to specify the [`logo`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission!path=logo&t=request) parameter when you [create your OIN Integration submission](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission). This logo appears in the OIN catalog for your app integration.
      * Upload an OIN integration logo
      * @param file
      */
  uploadSubmissionLogo(file, _options) {
    const result = this.api.uploadSubmissionLogo(file, _options);
    return result.toPromise();
  }
  /**
      * Upserts (adds or replaces) actions for a specific capability in an OIN Integration submission
      * Upsert the submission actions
      * @param submissionId OIN Integration ID
      * @param capability Capability
      * @param submissionActions
      */
  upsertSubmissionActions(submissionId, capability, submissionActions, _options) {
    const result = this.api.upsertSubmissionActions(submissionId, capability, submissionActions, _options);
    return result.toPromise();
  }
  /**
      * Upserts (adds or replaces) authentication settings for an OIN Integration submission
      * Upsert the submission authentication settings
      * @param submissionId OIN Integration ID
      * @param authSettings
      */
  upsertSubmissionAuthSettings(submissionId, authSettings, _options) {
    const result = this.api.upsertSubmissionAuthSettings(submissionId, authSettings, _options);
    return result.toPromise();
  }
  /**
      * Upserts (adds or replaces) capabilities for an OIN Integration submission
      * Upsert the submission supported capabilities
      * @param submissionId OIN Integration ID
      * @param submissionCapabilities
      */
  upsertSubmissionCapabilities(submissionId, submissionCapabilities, _options) {
    const result = this.api.upsertSubmissionCapabilities(submissionId, submissionCapabilities, _options);
    return result.toPromise();
  }
  /**
      * Upserts (adds or replaces) tenant settings for an OIN Integration submission
      * Upsert the submission tenant settings
      * @param submissionId OIN Integration ID
      * @param tenantSettings
      */
  upsertSubmissionTenantSettings(submissionId, tenantSettings, _options) {
    const result = this.api.upsertSubmissionTenantSettings(submissionId, tenantSettings, _options);
    return result.toPromise();
  }
  /**
      * Upserts (adds or replaces) testing information for an OIN Integration
      * Upsert an OIN integration testing information
      * @param submissionId OIN Integration ID
      * @param testInfo
      */
  upsertSubmissionTestInfo(submissionId, testInfo, _options) {
    const result = this.api.upsertSubmissionTestInfo(submissionId, testInfo, _options);
    return result.toPromise();
  }
  /**
      * Verifies the submission actions\' correctness with an actions provider, such as Workflows
      * Verify the submission actions
      * @param submissionId OIN Integration ID
      * @param capability Capability
      * @param actionsProviderType Actions provider type
      */
  verifyActions(submissionId, capability, actionsProviderType, _options) {
    const result = this.api.verifyActions(submissionId, capability, actionsProviderType, _options);
    return result.toPromise();
  }
}
exports.PromiseYourOinIntegrationsApi = PromiseYourOinIntegrationsApi;
