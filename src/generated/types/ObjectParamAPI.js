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


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectPolicyApi = exports.ObjectOrgSettingApi = exports.ObjectOrgCreatorApi = exports.ObjectOperationsIntegrationApi = exports.ObjectOktaPersonalSettingsApi = exports.ObjectOktaManagedUserAccountApi = exports.ObjectOktaApplicationSettingsApi = exports.ObjectOAuth2ResourceServerCredentialsKeysApi = exports.ObjectNetworkZoneApi = exports.ObjectLogStreamApi = exports.ObjectLinkedObjectApi = exports.ObjectInlineHookApi = exports.ObjectIdentitySourceApi = exports.ObjectIdentityProviderApi = exports.ObjectHookKeyApi = exports.ObjectGroupPushMappingApi = exports.ObjectGroupApi = exports.ObjectGovernanceBundleApi = exports.ObjectFeatureApi = exports.ObjectEventHookApi = exports.ObjectEmailServerApi = exports.ObjectEmailDomainApi = exports.ObjectDisasterRecoveryApi = exports.ObjectDirectoriesIntegrationApi = exports.ObjectDevicePostureCheckApi = exports.ObjectDeviceIntegrationsApi = exports.ObjectDeviceAssuranceApi = exports.ObjectDeviceAccessApi = exports.ObjectDeviceApi = exports.ObjectCustomizationApi = exports.ObjectCustomTelephonyProviderApi = exports.ObjectCustomRoleApi = exports.ObjectCustomDomainApi = exports.ObjectCAPTCHAApi = exports.ObjectBehaviorApi = exports.ObjectAuthorizationServerApi = exports.ObjectAuthenticatorApi = exports.ObjectAttackProtectionApi = exports.ObjectAssociatedDomainCustomizationsApi = exports.ObjectApplicationSSOPublicKeysApi = exports.ObjectApplicationInterclientTrustMappingsApi = exports.ObjectApplicationCrossAppAccessConnectionsApi = exports.ObjectApplicationApi = exports.ObjectApiTokenApi = exports.ObjectApiServiceIntegrationsApi = exports.ObjectAgentRegistrationApi = exports.ObjectAgentPublicKeyApi = exports.ObjectAgentPotentialConnectionsApi = exports.ObjectAgentPoolsApi = exports.ObjectAgentConnectionsApi = void 0;
exports.ObjectYourOinIntegrationsApi = exports.ObjectWebAuthnPreregistrationApi = exports.ObjectUserTypeApi = exports.ObjectUserFactorApi = exports.ObjectUserAuthenticatorEnrollmentsApi = exports.ObjectUserApi = exports.ObjectUnconfirmedUsersApi = exports.ObjectUISchemaApi = exports.ObjectTrustedOriginApi = exports.ObjectThreatInsightApi = exports.ObjectTemplateApi = exports.ObjectSystemLogApi = exports.ObjectSubscriptionApi = exports.ObjectSessionApi = exports.ObjectServiceAccountApi = exports.ObjectSchemaApi = exports.ObjectSSFTransmitterApi = exports.ObjectSSFSecurityEventTokenApi = exports.ObjectSSFReceiverApi = exports.ObjectRoleTargetApi = exports.ObjectRoleAssignmentApi = exports.ObjectRiskProviderApi = exports.ObjectRiskEventApi = exports.ObjectResourceSetApi = exports.ObjectRealmAssignmentApi = exports.ObjectRealmApi = exports.ObjectRateLimitSettingsApi = exports.ObjectPushProviderApi = exports.ObjectProfileMappingApi = exports.ObjectPrivilegedResourceApi = exports.ObjectPrincipalRateLimitApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectAgentConnectionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAgentConnectionsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a managed connection for the agent
      * Activate a managed connection
      * @param param the request object
      */
    activateManagedConnection(param, options) {
        return this.api.activateManagedConnection(param.agentId, param.connectionId, options).toPromise();
    }
    /**
      * Creates a managed connection for the agent
      * Create a managed connection
      * @param param the request object
      */
    createManagedConnection(param, options) {
        return this.api.createManagedConnection(param.agentId, param.managedConnectionCreatable, options).toPromise();
    }
    /**
      * Deactivates a managed connection for the agent
      * Deactivate a managed connection
      * @param param the request object
      */
    deactivateManagedConnection(param, options) {
        return this.api.deactivateManagedConnection(param.agentId, param.connectionId, options).toPromise();
    }
    /**
      * Deletes a managed connection for the agent
      * Delete an agent connection
      * @param param the request object
      */
    deleteManagedConnection(param, options) {
        return this.api.deleteManagedConnection(param.agentId, param.connectionId, options).toPromise();
    }
    /**
      * Retrieves a connection for the agent
      * Retrieve an agent connection
      * @param param the request object
      */
    getManagedConnection(param, options) {
        return this.api.getManagedConnection(param.agentId, param.connectionId, options).toPromise();
    }
    /**
      * Lists all connections for the agent
      * List all agent connections
      * @param param the request object
      */
    listConnections(param, options) {
        return this.api.listConnections(param.agentId, param.after, param.limit, options).toPromise();
    }
    /**
      * Updates a managed connection for the agent
      * Update a managed connection
      * @param param the request object
      */
    updateManagedConnection(param, options) {
        return this.api.updateManagedConnection(param.agentId, param.connectionId, param.managedConnectionPatchable, options).toPromise();
    }
}
exports.ObjectAgentConnectionsApi = ObjectAgentConnectionsApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectAgentPoolsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAgentPoolsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a scheduled agent pool update
      * Activate an agent pool update
      * @param param the request object
      */
    activateAgentPoolsUpdate(param, options) {
        return this.api.activateAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Creates an agent pool update
      * Create an agent pool update
      * @param param the request object
      */
    createAgentPoolsUpdate(param, options) {
        return this.api.createAgentPoolsUpdate(param.poolId, param.AgentPoolUpdate, options).toPromise();
    }
    /**
      * Deactivates scheduled agent pool update
      * Deactivate an agent pool update
      * @param param the request object
      */
    deactivateAgentPoolsUpdate(param, options) {
        return this.api.deactivateAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Deletes agent pool update
      * Delete an agent pool update
      * @param param the request object
      */
    deleteAgentPoolsUpdate(param, options) {
        return this.api.deleteAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Retrieves an agent pool update by its `updateId`
      * Retrieve an agent pool update by ID
      * @param param the request object
      */
    getAgentPoolsUpdateInstance(param, options) {
        return this.api.getAgentPoolsUpdateInstance(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Retrieves the current state of the agent pool update instance settings
      * Retrieve an agent pool update\'s settings
      * @param param the request object
      */
    getAgentPoolsUpdateSettings(param, options) {
        return this.api.getAgentPoolsUpdateSettings(param.poolId, options).toPromise();
    }
    /**
      * Lists all agent pools with pagination support
      * List all agent pools
      * @param param the request object
      */
    listAgentPools(param = {}, options) {
        return this.api.listAgentPools(param.limitPerPoolType, param.poolType, param.after, options).toPromise();
    }
    /**
      * Lists all agent pool updates
      * List all agent pool updates
      * @param param the request object
      */
    listAgentPoolsUpdates(param, options) {
        return this.api.listAgentPoolsUpdates(param.poolId, param.scheduled, options).toPromise();
    }
    /**
      * Pauses a running or queued agent pool update
      * Pause an agent pool update
      * @param param the request object
      */
    pauseAgentPoolsUpdate(param, options) {
        return this.api.pauseAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Resumes a running or queued agent pool update
      * Resume an agent pool update
      * @param param the request object
      */
    resumeAgentPoolsUpdate(param, options) {
        return this.api.resumeAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Retries an agent pool update if the update is unsuccessful or communication with Okta was interrupted during an agent auto-update
      * Retry an agent pool update
      * @param param the request object
      */
    retryAgentPoolsUpdate(param, options) {
        return this.api.retryAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Stops an agent pool update
      * Stop an agent pool update
      * @param param the request object
      */
    stopAgentPoolsUpdate(param, options) {
        return this.api.stopAgentPoolsUpdate(param.poolId, param.updateId, options).toPromise();
    }
    /**
      * Updates an agent pool update instance and returns the latest agent pool update
      * Update an agent pool update by ID
      * @param param the request object
      */
    updateAgentPoolsUpdate(param, options) {
        return this.api.updateAgentPoolsUpdate(param.poolId, param.updateId, param.AgentPoolUpdate, options).toPromise();
    }
    /**
      * Updates an agent pool update instance settings
      * Update an agent pool update settings
      * @param param the request object
      */
    updateAgentPoolsUpdateSettings(param, options) {
        return this.api.updateAgentPoolsUpdateSettings(param.poolId, param.AgentPoolUpdateSetting, options).toPromise();
    }
}
exports.ObjectAgentPoolsApi = ObjectAgentPoolsApi;
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectAgentPotentialConnectionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableAgentPotentialConnectionsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Lists all global resource connections of a specific connection type that an AI agent can potentially connect to  Only resource connections returned from this request are valid for [creating a connection](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentConnections/#tag/AgentConnections/operation/createManagedConnection) with a matching connection-type protocol.  Include the required [`filter`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentPotentialConnections/#tag/AgentPotentialConnections/operation/listPotentialConnectionsByType!in=query&path=filter&t=request) query parameter to return potential connections with a specific `connectionType`. You can also use the [`match`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AgentPotentialConnections/#tag/AgentPotentialConnections/operation/listPotentialConnectionsByType!in=query&path=match&t=request) query parameter to apply fuzzy-matching on the returned list of potential connections.
      * List all potential connections
      * @param param the request object
      */
    listPotentialConnectionsByType(param, options) {
        return this.api.listPotentialConnectionsByType(param.filter, param.match, param.after, param.limit, options).toPromise();
    }
}
exports.ObjectAgentPotentialConnectionsApi = ObjectAgentPotentialConnectionsApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectAgentPublicKeyApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableAgentPublicKeyApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an AI agent\'s JSON Web Key by `keyId`  > **Note:** You can only have one active encryption key at any given time for an AI agent. When you activate an inactive key, the currently active key is automatically deactivated.
      * Activate an AI agent JSON Web Key
      * @param param the request object
      */
    activateAgentJsonWebKey(param, options) {
        return this.api.activateAgentJsonWebKey(param.agentId, param.keyId, options).toPromise();
    }
    /**
      * Adds a new JSON Web Key (JWK) to the AI agent\'s JWK Set (JWKS)
      * Add a JSON Web Key
      * @param param the request object
      */
    addAgentJwk(param, options) {
        return this.api.addAgentJwk(param.agentId, param.agentJsonSigningKeyRequest, options).toPromise();
    }
    /**
      * Deactivates an AI agent\'s JSON Web Key by `keyId`  > **Note:** You can only deactivate signing keys. You can\'t deactivate the active encryption key if the client has ID token encryption enabled. However, you can activate another encryption key, which makes the current key inactive.
      * Deactivate an AI agent JSON Web Key
      * @param param the request object
      */
    deactivateAgentJsonWebKey(param, options) {
        return this.api.deactivateAgentJsonWebKey(param.agentId, param.keyId, options).toPromise();
    }
    /**
      * Deletes an AI agent\'s JSON Web Key by `keyId`. You can only delete an inactive key.
      * Delete an AI agent JSON Web Key
      * @param param the request object
      */
    deleteAgentJwk(param, options) {
        return this.api.deleteAgentJwk(param.agentId, param.keyId, options).toPromise();
    }
    /**
      * Retrieves an AI agent\'s JSON Web Key by `keyId`
      * Retrieve an AI agent JSON Web Key
      * @param param the request object
      */
    getAgentJwk(param, options) {
        return this.api.getAgentJwk(param.agentId, param.keyId, options).toPromise();
    }
    /**
      * Lists all JSON Web Keys (JWK) for an AI agent
      * List all AI agent JSON Web Keys
      * @param param the request object
      */
    listAgentJwk(param, options) {
        return this.api.listAgentJwk(param.agentId, options).toPromise();
    }
}
exports.ObjectAgentPublicKeyApi = ObjectAgentPublicKeyApi;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectAgentRegistrationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableAgentRegistrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an AI agent
      * Activate an AI agent
      * @param param the request object
      */
    activateAIAgent(param, options) {
        return this.api.activateAIAgent(param.agentId, options).toPromise();
    }
    /**
      * Deactivates an AI agent
      * Deactivate an AI agent
      * @param param the request object
      */
    deactivateAIAgent(param, options) {
        return this.api.deactivateAIAgent(param.agentId, options).toPromise();
    }
    /**
      * Deletes an AI agent
      * Delete an AI agent
      * @param param the request object
      */
    deleteAIAgent(param, options) {
        return this.api.deleteAIAgent(param.agentId, options).toPromise();
    }
    /**
      * Retrieves an AI agent
      * Retrieve an AI agent
      * @param param the request object
      */
    getAIAgent(param, options) {
        return this.api.getAIAgent(param.agentId, options).toPromise();
    }
    /**
      * Retrieves an AI agent operation and its status
      * Retrieve an AI agent operation
      * @param param the request object
      */
    getAIAgentOperation(param, options) {
        return this.api.getAIAgentOperation(param.operationId, options).toPromise();
    }
    /**
      * Lists all AI agent operations. Operations are sorted in descending order from most recent to oldest by creation time.
      * List all AI agent operations
      * @param param the request object
      */
    listAIAgentOperations(param = {}, options) {
        return this.api.listAIAgentOperations(param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all AI agents
      * List all AI agents
      * @param param the request object
      */
    listAIAgents(param = {}, options) {
        return this.api.listAIAgents(param.after, param.limit, param.search, options).toPromise();
    }
    /**
      * Registers an AI agent
      * Register an AI agent
      * @param param the request object
      */
    registerAIAgent(param, options) {
        return this.api.registerAIAgent(param.body, options).toPromise();
    }
    /**
      * Replaces an AI agent
      * Replace an AI agent
      * @param param the request object
      */
    replaceAIAgent(param, options) {
        return this.api.replaceAIAgent(param.agentId, param.body, options).toPromise();
    }
    /**
      * Updates an AI agent. Use this request to perform partial updates on AI agent profile properties.
      * Update an AI agent
      * @param param the request object
      */
    updateAIAgent(param, options) {
        return this.api.updateAIAgent(param.agentId, param.body, options).toPromise();
    }
}
exports.ObjectAgentRegistrationApi = ObjectAgentRegistrationApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectApiServiceIntegrationsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableApiServiceIntegrationsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an API Service Integration instance Secret by `secretId`
      * Activate an API service integration instance secret
      * @param param the request object
      */
    activateApiServiceIntegrationInstanceSecret(param, options) {
        return this.api.activateApiServiceIntegrationInstanceSecret(param.apiServiceId, param.secretId, options).toPromise();
    }
    /**
      * Creates and authorizes an API Service Integration instance
      * Create an API service integration instance
      * @param param the request object
      */
    createApiServiceIntegrationInstance(param, options) {
        return this.api.createApiServiceIntegrationInstance(param.postAPIServiceIntegrationInstanceRequest, options).toPromise();
    }
    /**
      * Creates an API Service Integration instance Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects.
      * Create an API service integration instance secret
      * @param param the request object
      */
    createApiServiceIntegrationInstanceSecret(param, options) {
        return this.api.createApiServiceIntegrationInstanceSecret(param.apiServiceId, options).toPromise();
    }
    /**
      * Deactivates an API Service Integration instance Secret by `secretId`
      * Deactivate an API service integration instance secret
      * @param param the request object
      */
    deactivateApiServiceIntegrationInstanceSecret(param, options) {
        return this.api.deactivateApiServiceIntegrationInstanceSecret(param.apiServiceId, param.secretId, options).toPromise();
    }
    /**
      * Deletes an API Service Integration instance by `id`. This operation also revokes access to scopes that were previously granted to this API Service Integration instance.
      * Delete an API service integration instance
      * @param param the request object
      */
    deleteApiServiceIntegrationInstance(param, options) {
        return this.api.deleteApiServiceIntegrationInstance(param.apiServiceId, options).toPromise();
    }
    /**
      * Deletes an API Service Integration instance Secret by `secretId`. You can only delete an inactive Secret.
      * Delete an API service integration instance secret
      * @param param the request object
      */
    deleteApiServiceIntegrationInstanceSecret(param, options) {
        return this.api.deleteApiServiceIntegrationInstanceSecret(param.apiServiceId, param.secretId, options).toPromise();
    }
    /**
      * Retrieves an API Service Integration instance by `id`
      * Retrieve an API service integration instance
      * @param param the request object
      */
    getApiServiceIntegrationInstance(param, options) {
        return this.api.getApiServiceIntegrationInstance(param.apiServiceId, options).toPromise();
    }
    /**
      * Lists all client secrets for an API Service Integration instance by `apiServiceId`
      * List all API service integration instance secrets
      * @param param the request object
      */
    listApiServiceIntegrationInstanceSecrets(param, options) {
        return this.api.listApiServiceIntegrationInstanceSecrets(param.apiServiceId, options).toPromise();
    }
    /**
      * Lists all API Service Integration instances with a pagination option
      * List all API service integration instances
      * @param param the request object
      */
    listApiServiceIntegrationInstances(param = {}, options) {
        return this.api.listApiServiceIntegrationInstances(param.after, options).toPromise();
    }
}
exports.ObjectApiServiceIntegrationsApi = ObjectApiServiceIntegrationsApi;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectApiTokenApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableApiTokenApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the metadata for an active API token by `apiTokenId`
      * Retrieve an API token\'s metadata
      * @param param the request object
      */
    getApiToken(param, options) {
        return this.api.getApiToken(param.apiTokenId, options).toPromise();
    }
    /**
      * Lists all the metadata of the active API tokens
      * List all API token metadata
      * @param param the request object
      */
    listApiTokens(param = {}, options) {
        return this.api.listApiTokens(options).toPromise();
    }
    /**
      * Revokes an API token by `apiTokenId`
      * Revoke an API token
      * @param param the request object
      */
    revokeApiToken(param, options) {
        return this.api.revokeApiToken(param.apiTokenId, options).toPromise();
    }
    /**
      * Revokes the API token provided in the Authorization header
      * Revoke the current API token
      * @param param the request object
      */
    revokeCurrentApiToken(param = {}, options) {
        return this.api.revokeCurrentApiToken(options).toPromise();
    }
    /**
      * Upserts an API Token Network Condition by `apiTokenId`
      * Upsert an API token network condition
      * @param param the request object
      */
    upsertApiToken(param, options) {
        return this.api.upsertApiToken(param.apiTokenId, param.apiTokenUpdate, options).toPromise();
    }
}
exports.ObjectApiTokenApi = ObjectApiTokenApi;
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectApplicationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an inactive application
      * Activate an application
      * @param param the request object
      */
    activateApplication(param, options) {
        return this.api.activateApplication(param.appId, options).toPromise();
    }
    /**
      * Activates the default provisioning connection for an app
      * Activate the default provisioning connection
      * @param param the request object
      */
    activateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.activateDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Assigns an app to an [app sign-in policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/), identified by `policyId`. If the app was previously assigned to another policy, this operation replaces that assignment with the updated policy identified by `policyId`.  > **Note:** When you [merge duplicate app sign-in policies](https://help.okta.com/okta_help.htm?type=oie&id=ext-merge-auth-policies), the policy and mapping CRUD operations may be unavailable during the consolidation. When the consolidation is complete, you receive an email with merged results.
      * Assign an app sign-in policy
      * @param param the request object
      */
    assignApplicationPolicy(param, options) {
        return this.api.assignApplicationPolicy(param.appId, param.policyId, options).toPromise();
    }
    /**
      * Assigns a [Group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) to an app, which in turn assigns the app to each [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) that belongs to the group.  The resulting application user [scope](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/#tag/ApplicationUsers/operation/listApplicationUsers!c=200&path=scope&t=response) is `GROUP` since the assignment was from the group membership.
      * Assign an application group
      * @param param the request object
      */
    assignGroupToApplication(param, options) {
        return this.api.assignGroupToApplication(param.appId, param.groupId, param.applicationGroupAssignment, options).toPromise();
    }
    /**
      * Assigns a user to an app for:    * SSO only<br>     Assignments to SSO apps typically don\'t include a user profile.     However, if your SSO app requires a profile but doesn\'t have provisioning enabled, you can add profile attributes in the request body.    * SSO and provisioning<br>     Assignments to SSO and provisioning apps typically include credentials and an app-specific profile.     Profile mappings defined for the app are applied first before applying any profile properties that are specified in the request body.     > **Notes:**     > * When Universal Directory is enabled, you can only specify profile properties that aren\'t defined in profile mappings.     > * Omit mapped properties during assignment to minimize assignment errors.
      * Assign an application user
      * @param param the request object
      */
    assignUserToApplication(param, options) {
        return this.api.assignUserToApplication(param.appId, param.appUser, options).toPromise();
    }
    /**
      * Clones an X.509 certificate for an Application Key Credential from a source app to a target app.  For step-by-step instructions to clone a credential, see [Share application key credentials for IdPs across apps](https://developer.okta.com/docs/guides/sharing-cert/main/). > **Note:** Sharing certificates isn\'t a recommended security practice.
      * Clone a key credential
      * @param param the request object
      */
    cloneApplicationKey(param, options) {
        return this.api.cloneApplicationKey(param.appId, param.keyId, param.targetAid, options).toPromise();
    }
    /**
      * Configures a capability (`SSO` or `PROVISIONING`) in the app instance by automatically exchanging configuration information.
      * Configure a capability in the app instance
      * @param param the request object
      */
    configureCapabilityApplication(param, options) {
        return this.api.configureCapabilityApplication(param.appId, param.capabilityType, options).toPromise();
    }
    /**
      * Creates an app instance in your Okta org.  You can either create an OIN app instance or a custom app instance: * OIN app instances have prescribed `name` (key app definition) and `signOnMode` options. See the [OIN schemas](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/schema/GoogleApplication) for the request body. * For custom app instances, select the [signOnMode](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=0/signOnMode&t=request) that pertains to your app and specify the required parameters in the request body.
      * Create an application
      * @param param the request object
      */
    createApplication(param, options) {
        return this.api.createApplication(param.application, param.activate, param.oktaAccessGatewayAgent, options).toPromise();
    }
    /**
      * Creates a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
      * Create a federated claim
      * @param param the request object
      */
    createFederatedClaim(param, options) {
        return this.api.createFederatedClaim(param.appId, param.federatedClaimRequestBody, options).toPromise();
    }
    /**
      * Deactivates an active application  > **Note:** Deactivating an app triggers a full reconciliation of all users assigned to the app by groups. This reconcile process removes the app assignment for the deactivated app, and might also correct assignments that were supposed to be removed but failed previously.
      * Deactivate an application
      * @param param the request object
      */
    deactivateApplication(param, options) {
        return this.api.deactivateApplication(param.appId, options).toPromise();
    }
    /**
      * Deactivates the default provisioning connection for an app
      * Deactivate the default provisioning connection
      * @param param the request object
      */
    deactivateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.deactivateDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Deletes an inactive application
      * Delete an application
      * @param param the request object
      */
    deleteApplication(param, options) {
        return this.api.deleteApplication(param.appId, options).toPromise();
    }
    /**
      * Deletes a federated claim by `claimId`
      * Delete a federated claim
      * @param param the request object
      */
    deleteFederatedClaim(param, options) {
        return this.api.deleteFederatedClaim(param.appId, param.claimId, options).toPromise();
    }
    /**
      * Generates a new X.509 certificate for an app key credential > **Note:** To update an Application with the newly generated key credential, use the [Replace an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) request with the new [credentials.signing.kid](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing/kid&t=request) value in the request body. You can provide just the [Signing Credential object](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing&t=request) instead of the entire [Application Credential object](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials&t=request).
      * Generate a key credential
      * @param param the request object
      */
    generateApplicationKey(param, options) {
        return this.api.generateApplicationKey(param.appId, param.validityYears, options).toPromise();
    }
    /**
      * Generates a new key pair and returns the Certificate Signing Request(CSR) for it. The information in a CSR is used by the Certificate Authority (CA) to verify and create your certificate. It also contains the public key that is included in your certificate.  Returns CSR in `pkcs#10` format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`. > **Note:** The key pair isn\'t listed in the Key Credentials for the app until it\'s published.
      * Generate a certificate signing request
      * @param param the request object
      */
    generateCsrForApplication(param, options) {
        return this.api.generateCsrForApplication(param.appId, param.metadata, options).toPromise();
    }
    /**
      * Retrieves an application from your Okta organization by `id`
      * Retrieve an application
      * @param param the request object
      */
    getApplication(param, options) {
        return this.api.getApplication(param.appId, param.expand, options).toPromise();
    }
    /**
      * Retrieves an app group assignment
      * Retrieve an application group
      * @param param the request object
      */
    getApplicationGroupAssignment(param, options) {
        return this.api.getApplicationGroupAssignment(param.appId, param.groupId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a specific Application Key Credential by `kid`
      * Retrieve a key credential
      * @param param the request object
      */
    getApplicationKey(param, options) {
        return this.api.getApplicationKey(param.appId, param.keyId, options).toPromise();
    }
    /**
      * Retrieves a specific user assignment for a specific app
      * Retrieve an application user
      * @param param the request object
      */
    getApplicationUser(param, options) {
        return this.api.getApplicationUser(param.appId, param.userId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a Certificate Signing Request (CSR) for the app by `csrId`.  Returns a Base64-encoded CSR in DER format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`.
      * Retrieve a certificate signing request
      * @param param the request object
      */
    getCsrForApplication(param, options) {
        return this.api.getCsrForApplication(param.appId, param.csrId, options).toPromise();
    }
    /**
      * Retrieves the default provisioning connection for an app
      * Retrieve the default provisioning connection
      * @param param the request object
      */
    getDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.getDefaultProvisioningConnectionForApplication(param.appId, options).toPromise();
    }
    /**
      * Retrieves a Feature object for an app
      * Retrieve a feature
      * @param param the request object
      */
    getFeatureForApplication(param, options) {
        return this.api.getFeatureForApplication(param.appId, param.name, options).toPromise();
    }
    /**
      * Retrieves a federated claim by `claimId`
      * Retrieve a federated claim
      * @param param the request object
      */
    getFederatedClaim(param, options) {
        return this.api.getFederatedClaim(param.appId, param.claimId, options).toPromise();
    }
    /**
      * Retrieves the OAuth 2.0 authorization code from the app\'s authorization server. Use this authorization code to exchange for an access token through another endpoint to enable Express Configuration on behalf of the user.
      * Retrieve the OAuth 2.0 authorization code for Express Configuration.
      * @param param the request object
      */
    getOAuth2AccessTokenForExpressConfiguration(param, options) {
        return this.api.getOAuth2AccessTokenForExpressConfiguration(param.appId, param.token, param.capabilityType, options).toPromise();
    }
    /**
      * Retrieves a refresh token for the specified app
      * Retrieve an application token
      * @param param the request object
      */
    getOAuth2TokenForApplication(param, options) {
        return this.api.getOAuth2TokenForApplication(param.appId, param.tokenId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a single scope consent Grant object for the app
      * Retrieve an app grant
      * @param param the request object
      */
    getScopeConsentGrant(param, options) {
        return this.api.getScopeConsentGrant(param.appId, param.grantId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a JWKS for the default provisioning connection.  This can be used by the OAuth 2.0 app\'s `jwk_uri` property in the target org.
      * Retrieve a JSON Web Key Set (JWKS) for the default provisioning connection
      * @param param the request object
      */
    getUserProvisioningConnectionJWKS(param, options) {
        return this.api.getUserProvisioningConnectionJWKS(param.appId, options).toPromise();
    }
    /**
      * Grants consent for the app to request an OAuth 2.0 Okta scope
      * Grant consent to scope
      * @param param the request object
      */
    grantConsentToScope(param, options) {
        return this.api.grantConsentToScope(param.appId, param.oAuth2ScopeConsentGrant, options).toPromise();
    }
    /**
      * Lists all app group assignments
      * List all application groups
      * @param param the request object
      */
    listApplicationGroupAssignments(param, options) {
        return this.api.listApplicationGroupAssignments(param.appId, param.q, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Lists all key credentials for an app
      * List all key credentials
      * @param param the request object
      */
    listApplicationKeys(param, options) {
        return this.api.listApplicationKeys(param.appId, options).toPromise();
    }
    /**
      * Lists all assigned users for an app
      * List all application users
      * @param param the request object
      */
    listApplicationUsers(param, options) {
        return this.api.listApplicationUsers(param.appId, param.after, param.limit, param.q, param.expand, options).toPromise();
    }
    /**
      * Lists all apps in the org with pagination. A subset of apps can be returned that match a supported filter expression or query. The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the header contains a `next` link. Treat the link as an opaque value (follow it, don\'t parse it).  > **Note:** To list all of a member\'s assigned app links, use the [List all assigned app links endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listAppLinks).
      * List all applications
      * @param param the request object
      */
    listApplications(param = {}, options) {
        return this.api.listApplications(param.q, param.after, param.useOptimization, param.alwaysIncludeVpnSettings, param.limit, param.filter, param.expand, param.includeNonDeleted, options).toPromise();
    }
    /**
      * Lists all Certificate Signing Requests for an application
      * List all certificate signing requests
      * @param param the request object
      */
    listCsrsForApplication(param, options) {
        return this.api.listCsrsForApplication(param.appId, options).toPromise();
    }
    /**
      * Lists all features for an app > **Note:** This request returns an error if provisioning isn\'t enabled for the app. > To set up provisioning, see [Update the default provisioning connection](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationConnections/#tag/ApplicationConnections/operation/updateDefaultProvisioningConnectionForApplication).
      * List all features
      * @param param the request object
      */
    listFeaturesForApplication(param, options) {
        return this.api.listFeaturesForApplication(param.appId, options).toPromise();
    }
    /**
      * Lists all federated claims for your app
      * List all configured federated claims
      * @param param the request object
      */
    listFederatedClaims(param, options) {
        return this.api.listFederatedClaims(param.appId, options).toPromise();
    }
    /**
      * Lists all refresh tokens for an app  > **Note:** The results are [paginated](/#pagination) according to the `limit` parameter. > If there are multiple pages of results, the Link header contains a `next` link that you need to use as an opaque value (follow it, don\'t parse it).
      * List all application refresh tokens
      * @param param the request object
      */
    listOAuth2TokensForApplication(param, options) {
        return this.api.listOAuth2TokensForApplication(param.appId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all scope consent Grants for the app
      * List all app grants
      * @param param the request object
      */
    listScopeConsentGrants(param, options) {
        return this.api.listScopeConsentGrants(param.appId, param.expand, options).toPromise();
    }
    /**
      * Previews the SSO SAML metadata for an application
      * Preview the application SAML metadata
      * @param param the request object
      */
    previewSAMLmetadataForApplication(param, options) {
        return this.api.previewSAMLmetadataForApplication(param.appId, param.kid, options).toPromise();
    }
    /**
      * Publishes a Certificate Signing Request (CSR) for the app with a signed X.509 certificate and adds it into the Application Key Credentials. > **Note:** Publishing a certificate completes the lifecycle of the CSR and it\'s no longer accessible.
      * Publish a certificate signing request
      * @param param the request object
      */
    publishCsrFromApplication(param, options) {
        return this.api.publishCsrFromApplication(param.appId, param.csrId, param.body, options).toPromise();
    }
    /**
      * Replaces properties for an application > **Notes:** > * All required properties must be specified in the request body > * You can\'t modify system-assigned properties, such as `id`, `name`, `status`, `created`, and `lastUpdated`. The values for these properties in the PUT request body are ignored.
      * Replace an application
      * @param param the request object
      */
    replaceApplication(param, options) {
        return this.api.replaceApplication(param.appId, param.application, options).toPromise();
    }
    /**
      * Replaces a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
      * Replace a federated claim
      * @param param the request object
      */
    replaceFederatedClaim(param, options) {
        return this.api.replaceFederatedClaim(param.appId, param.claimId, param.federatedClaim, options).toPromise();
    }
    /**
      * Revokes a Certificate Signing Request and deletes the key pair from the app
      * Revoke a certificate signing request
      * @param param the request object
      */
    revokeCsrFromApplication(param, options) {
        return this.api.revokeCsrFromApplication(param.appId, param.csrId, options).toPromise();
    }
    /**
      * Revokes the specified token for the specified app
      * Revoke an application token
      * @param param the request object
      */
    revokeOAuth2TokenForApplication(param, options) {
        return this.api.revokeOAuth2TokenForApplication(param.appId, param.tokenId, options).toPromise();
    }
    /**
      * Revokes all OAuth 2.0 refresh tokens for the specified app. Any access tokens issued with these refresh tokens are also revoked, but access tokens issued without a refresh token aren\'t affected.
      * Revoke all application tokens
      * @param param the request object
      */
    revokeOAuth2TokensForApplication(param, options) {
        return this.api.revokeOAuth2TokensForApplication(param.appId, options).toPromise();
    }
    /**
      * Revokes permission for the app to grant the given scope
      * Revoke an app grant
      * @param param the request object
      */
    revokeScopeConsentGrant(param, options) {
        return this.api.revokeScopeConsentGrant(param.appId, param.grantId, options).toPromise();
    }
    /**
      * Unassigns a Group from an app
      * Unassign an application group
      * @param param the request object
      */
    unassignApplicationFromGroup(param, options) {
        return this.api.unassignApplicationFromGroup(param.appId, param.groupId, options).toPromise();
    }
    /**
      * Unassigns a user from an app  For directories like Active Directory and LDAP, they act as the owner of the user\'s credential with Okta delegating authentication (DelAuth) to that directory. If this request is successful for a user when DelAuth is enabled, then the user is in a state with no password. You can then reset the user\'s password.  > **Important:** This is a destructive operation. You can\'t recover the user\'s app profile. If the app is enabled for provisioning and configured to deactivate users, the user is also deactivated in the target app.
      * Unassign an application user
      * @param param the request object
      */
    unassignUserFromApplication(param, options) {
        return this.api.unassignUserFromApplication(param.appId, param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Updates the profile or credentials of a user assigned to an app
      * Update an application user
      * @param param the request object
      */
    updateApplicationUser(param, options) {
        return this.api.updateApplicationUser(param.appId, param.userId, param.appUser, options).toPromise();
    }
    /**
      * Updates the default provisioning connection for an app
      * Update the default provisioning connection
      * @param param the request object
      */
    updateDefaultProvisioningConnectionForApplication(param, options) {
        return this.api.updateDefaultProvisioningConnectionForApplication(param.appId, param.ProvisioningConnectionRequest, param.activate, options).toPromise();
    }
    /**
      * Updates a Feature object for an app > **Note:** This endpoint supports partial updates.
      * Update a feature
      * @param param the request object
      */
    updateFeatureForApplication(param, options) {
        return this.api.updateFeatureForApplication(param.appId, param.name, param.CapabilitiesObject, options).toPromise();
    }
    /**
      * Updates a group assignment to an app
      * Update an application group
      * @param param the request object
      */
    updateGroupAssignmentToApplication(param, options) {
        return this.api.updateGroupAssignmentToApplication(param.appId, param.groupId, param.jsonPatchOperation, options).toPromise();
    }
    /**
      * Uploads a logo for the app instance. If the app already has a logo, this operation replaces the previous logo.  The logo is visible in the Admin Console as an icon for your app instance. If you have one `appLink` object configured, this logo also appears in the End-User Dashboard as an icon for your app. > **Note:** If you have multiple `appLink` objects, use the Admin Console to add logos for each app link. > You can\'t use the API to add logos for multiple app links.
      * Upload an application logo
      * @param param the request object
      */
    uploadApplicationLogo(param, options) {
        return this.api.uploadApplicationLogo(param.appId, param.file, options).toPromise();
    }
    /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for an OAuth 2.0-based connection. Currently, this operation only supports `office365`,`google`, `zoomus`, and `slack` apps.
      * Verify the provisioning connection
      * @param param the request object
      */
    verifyProvisioningConnectionForApplication(param, options) {
        return this.api.verifyProvisioningConnectionForApplication(param.appName, param.appId, param.code, param.state, options).toPromise();
    }
    /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Google Workspace (`google`) OAuth 2.0-based connection.
      * Verify the provisioning connection for Google Workspace
      * @param param the request object
      */
    verifyProvisioningConnectionForGoogleApplication(param, options) {
        return this.api.verifyProvisioningConnectionForGoogleApplication(param.appId, param.code, param.state, options).toPromise();
    }
    /**
      * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Microsoft Office 365 (`office365`) OAuth 2.0-based connection.
      * Verify the provisioning connection for Microsoft Office 365
      * @param param the request object
      */
    verifyProvisioningConnectionForOfficeApplication(param, options) {
        return this.api.verifyProvisioningConnectionForOfficeApplication(param.appId, param.code, param.state, options).toPromise();
    }
}
exports.ObjectApplicationApi = ObjectApplicationApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectApplicationCrossAppAccessConnectionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableApplicationCrossAppAccessConnectionsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a Cross App Access connection
      * Create a Cross App Access connection
      * @param param the request object
      */
    createCrossAppAccessConnection(param, options) {
        return this.api.createCrossAppAccessConnection(param.appId, param.orgCrossAppAccessConnection, options).toPromise();
    }
    /**
      * Deletes a Cross App Access connection with the specified ID
      * Delete a Cross App Access connection
      * @param param the request object
      */
    deleteCrossAppAccessConnection(param, options) {
        return this.api.deleteCrossAppAccessConnection(param.appId, param.connectionId, options).toPromise();
    }
    /**
      * Retrieves inbound and outbound Cross App Access connections associated with an app
      * Retrieve all Cross App Access connections
      * @param param the request object
      */
    getAllCrossAppAccessConnections(param, options) {
        return this.api.getAllCrossAppAccessConnections(param.appId, param.after, param.limit, options).toPromise();
    }
    /**
      * Retrieves the Cross App Access connection with the specified ID
      * Retrieve a Cross App Access connection
      * @param param the request object
      */
    getCrossAppAccessConnection(param, options) {
        return this.api.getCrossAppAccessConnection(param.appId, param.connectionId, options).toPromise();
    }
    /**
      * Updates the Cross App Access connection with the specified ID
      * Update a Cross App Access connection
      * @param param the request object
      */
    updateCrossAppAccessConnection(param, options) {
        return this.api.updateCrossAppAccessConnection(param.appId, param.connectionId, param.orgCrossAppAccessConnectionPatchRequest, options).toPromise();
    }
}
exports.ObjectApplicationCrossAppAccessConnectionsApi = ObjectApplicationCrossAppAccessConnectionsApi;
const ObservableAPI_10 = require("./ObservableAPI");
class ObjectApplicationInterclientTrustMappingsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableApplicationInterclientTrustMappingsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a mapping between the target app and an allowed app for interclient SSO using the interclient token
      * Create an allowed app mapping for a target app
      * @param param the request object
      */
    createInterclientTrustMapping(param, options) {
        return this.api.createInterclientTrustMapping(param.appId, param.interclientTrustMappingRequestBody, options).toPromise();
    }
    /**
      * Deletes the mapping between the target app and an allowed app
      * Delete an interclient trust mapping
      * @param param the request object
      */
    deleteInterclientTrustMapping(param, options) {
        return this.api.deleteInterclientTrustMapping(param.appId, param.allowedAppId, options).toPromise();
    }
    /**
      * Lists all apps allowed by this app to request interclient SSO using the interclient token
      * List all allowed apps for a target app
      * @param param the request object
      */
    listInterclientAllowedApplications(param, options) {
        return this.api.listInterclientAllowedApplications(param.appId, options).toPromise();
    }
    /**
      * Lists all the target apps that allow this app to request interclient SSO using an interclient token
      * List all target apps for an allowed app
      * @param param the request object
      */
    listInterclientTargetApplications(param, options) {
        return this.api.listInterclientTargetApplications(param.appId, options).toPromise();
    }
}
exports.ObjectApplicationInterclientTrustMappingsApi = ObjectApplicationInterclientTrustMappingsApi;
const ObservableAPI_11 = require("./ObservableAPI");
class ObjectApplicationSSOPublicKeysApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableApplicationSSOPublicKeysApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an OAuth 2.0 Client JSON Web Key by `keyId` > **Note:** You can have only one active encryption key at any given time for app. When you activate an inactive key, the current active key is automatically deactivated.
      * Activate an OAuth 2.0 client JSON Web Key
      * @param param the request object
      */
    activateOAuth2ClientJsonWebKey(param, options) {
        return this.api.activateOAuth2ClientJsonWebKey(param.appId, param.keyId, options).toPromise();
    }
    /**
      * Activates an OAuth 2.0 Client Secret by `secretId`
      * Activate an OAuth 2.0 client secret
      * @param param the request object
      */
    activateOAuth2ClientSecret(param, options) {
        return this.api.activateOAuth2ClientSecret(param.appId, param.secretId, options).toPromise();
    }
    /**
      * Adds a new JSON Web Key to the client`s JSON Web Keys. > **Note:** This API doesn\'t allow you to add a key if the existing key doesn\'t have a `kid`. This is also consistent with how the [Dynamic Client Registration](/openapi/okta-oauth/oauth/tag/Client/) or [Applications](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/) APIs behave, as they don\'t allow the creation of multiple keys without `kids`. Use the [Replace an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) or the [Replace a Client Application](/openapi/okta-oauth/oauth/tag/Client/#tag/Client/operation/replaceClient) operation to update the JWKS or [Delete an OAuth 2.0 Client JSON Web Key](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationSSOPublicKeys/#tag/ApplicationSSOPublicKeys/operation/deletejwk) and re-add the key with a `kid`.
      * Add a JSON Web Key
      * @param param the request object
      */
    addJwk(param, options) {
        return this.api.addJwk(param.appId, param.addJwkRequest, options).toPromise();
    }
    /**
      * Creates an OAuth 2.0 Client Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects. > **Note:** This API lets you bring your own secret. If [token_endpoint_auth_method](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=4/credentials/oauthClient/token_endpoint_auth_method&t=request) of the app is `client_secret_jwt`, then the minimum length of `client_secret` is 32 characters. If no secret is specified in the request, Okta adds a new system-generated secret.
      * Create an OAuth 2.0 client secret
      * @param param the request object
      */
    createOAuth2ClientSecret(param, options) {
        return this.api.createOAuth2ClientSecret(param.appId, param.oAuth2ClientSecretRequestBody, options).toPromise();
    }
    /**
      * Deactivates an OAuth 2.0 Client JSON Web Key by `keyId`. > **Note:** You can only deactivate signing keys. Deactivating the active encryption key isn\'t allowed if the client has ID token encryption enabled. You can activate another encryption key, which makes the current key inactive.
      * Deactivate an OAuth 2.0 client JSON Web Key
      * @param param the request object
      */
    deactivateOAuth2ClientJsonWebKey(param, options) {
        return this.api.deactivateOAuth2ClientJsonWebKey(param.appId, param.keyId, options).toPromise();
    }
    /**
      * Deactivates an OAuth 2.0 Client Secret by `secretId`. You can\'t deactivate a secret if it\'s the only secret of the client.
      * Deactivate an OAuth 2.0 client secret
      * @param param the request object
      */
    deactivateOAuth2ClientSecret(param, options) {
        return this.api.deactivateOAuth2ClientSecret(param.appId, param.secretId, options).toPromise();
    }
    /**
      * Deletes an OAuth 2.0 Client Secret by `secretId`. You can only delete an inactive Secret.
      * Delete an OAuth 2.0 client secret
      * @param param the request object
      */
    deleteOAuth2ClientSecret(param, options) {
        return this.api.deleteOAuth2ClientSecret(param.appId, param.secretId, options).toPromise();
    }
    /**
      * Deletes an OAuth 2.0 Client JSON Web Key by `keyId`. You can only delete an inactive key.
      * Delete an OAuth 2.0 client JSON Web Key
      * @param param the request object
      */
    deletejwk(param, options) {
        return this.api.deletejwk(param.appId, param.keyId, options).toPromise();
    }
    /**
      * Retrieves an OAuth 2.0 Client JSON Web Key by `keyId`.
      * Retrieve an OAuth 2.0 client JSON Web Key
      * @param param the request object
      */
    getJwk(param, options) {
        return this.api.getJwk(param.appId, param.keyId, options).toPromise();
    }
    /**
      * Retrieves an OAuth 2.0 Client Secret by `secretId`
      * Retrieve an OAuth 2.0 client secret
      * @param param the request object
      */
    getOAuth2ClientSecret(param, options) {
        return this.api.getOAuth2ClientSecret(param.appId, param.secretId, options).toPromise();
    }
    /**
      * Lists all JSON Web Keys for an OAuth 2.0 client app
      * List all the OAuth 2.0 client JSON Web Keys
      * @param param the request object
      */
    listJwk(param, options) {
        return this.api.listJwk(param.appId, options).toPromise();
    }
    /**
      * Lists all client secrets for an OAuth 2.0 client app
      * List all OAuth 2.0 client secrets
      * @param param the request object
      */
    listOAuth2ClientSecrets(param, options) {
        return this.api.listOAuth2ClientSecrets(param.appId, options).toPromise();
    }
}
exports.ObjectApplicationSSOPublicKeysApi = ObjectApplicationSSOPublicKeysApi;
const ObservableAPI_12 = require("./ObservableAPI");
class ObjectAssociatedDomainCustomizationsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableAssociatedDomainCustomizationsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the content from each of the well-known URIs for a specified brand
      * Retrieve all the well-known URIs
      * @param param the request object
      */
    getAllWellKnownURIs(param, options) {
        return this.api.getAllWellKnownURIs(param.brandId, param.expand, options).toPromise();
    }
    /**
      * Retrieves the content of the `apple-app-site-assocation` well-known URI  > **Note:**  When serving this URI, Okta adds `authsrv` content to provide a seamless experience for Okta Verify. You can\'t modify the content in the `authsrv` object.
      * Retrieve the customized apple-app-site-association URI content
      * @param param the request object
      */
    getAppleAppSiteAssociationWellKnownURI(param = {}, options) {
        return this.api.getAppleAppSiteAssociationWellKnownURI(options).toPromise();
    }
    /**
      * Retrieves the content of the `assetlinks.json` well-known URI
      * Retrieve the customized assetlinks.json URI content
      * @param param the request object
      */
    getAssetLinksWellKnownURI(param = {}, options) {
        return this.api.getAssetLinksWellKnownURI(options).toPromise();
    }
    /**
      * Retrieves the customized content of a well-known URI for a specific brand and well-known URI path
      * Retrieve the customized content of the specified well-known URI
      * @param param the request object
      */
    getBrandWellKnownURI(param, options) {
        return this.api.getBrandWellKnownURI(param.brandId, param.uriPath, options).toPromise();
    }
    /**
      * Retrieves the well-known URI of a specific brand and well-known URI path
      * Retrieve the well-known URI of a specific brand
      * @param param the request object
      */
    getRootBrandWellKnownURI(param, options) {
        return this.api.getRootBrandWellKnownURI(param.brandId, param.uriPath, param.expand, options).toPromise();
    }
    /**
      * Retrieves the content of the `webauthn` well-known URI
      * Retrieve the customized webauthn URI content
      * @param param the request object
      */
    getWebAuthnWellKnownURI(param = {}, options) {
        return this.api.getWebAuthnWellKnownURI(options).toPromise();
    }
    /**
      * Replaces the content of a customized well-known URI that you specify.  There are endpoint-specific format requirements when you update the content of a customized well-known URI. See [Customize associated domains](https://developer.okta.com/docs/guides/custom-well-known-uri/main/).
      * Replace the customized well-known URI of the specific path
      * @param param the request object
      */
    replaceBrandWellKnownURI(param, options) {
        return this.api.replaceBrandWellKnownURI(param.brandId, param.uriPath, param.wellKnownURIRequest, options).toPromise();
    }
}
exports.ObjectAssociatedDomainCustomizationsApi = ObjectAssociatedDomainCustomizationsApi;
const ObservableAPI_13 = require("./ObservableAPI");
class ObjectAttackProtectionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableAttackProtectionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the Authenticator Settings for an org
      * Retrieve the authenticator settings
      * @param param the request object
      */
    getAuthenticatorSettings(param = {}, options) {
        return this.api.getAuthenticatorSettings(options).toPromise();
    }
    /**
      * Retrieves the User Lockout Settings for an org
      * Retrieve the user lockout settings
      * @param param the request object
      */
    getUserLockoutSettings(param = {}, options) {
        return this.api.getUserLockoutSettings(options).toPromise();
    }
    /**
      * Replaces the Authenticator Settings for an org
      * Replace the authenticator settings
      * @param param the request object
      */
    replaceAuthenticatorSettings(param, options) {
        return this.api.replaceAuthenticatorSettings(param.authenticatorSettings, options).toPromise();
    }
    /**
      * Replaces the User Lockout Settings for an org
      * Replace the user lockout settings
      * @param param the request object
      */
    replaceUserLockoutSettings(param, options) {
        return this.api.replaceUserLockoutSettings(param.lockoutSettings, options).toPromise();
    }
}
exports.ObjectAttackProtectionApi = ObjectAttackProtectionApi;
const ObservableAPI_14 = require("./ObservableAPI");
class ObjectAuthenticatorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableAuthenticatorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an authenticator by `authenticatorId`
      * Activate an authenticator
      * @param param the request object
      */
    activateAuthenticator(param, options) {
        return this.api.activateAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Activates a method for an authenticator identified by `authenticatorId` and `methodType`
      * Activate an authenticator method
      * @param param the request object
      */
    activateAuthenticatorMethod(param, options) {
        return this.api.activateAuthenticatorMethod(param.authenticatorId, param.methodType, options).toPromise();
    }
    /**
      * Creates an authenticator
      * Create an authenticator
      * @param param the request object
      */
    createAuthenticator(param, options) {
        return this.api.createAuthenticator(param.authenticator, param.activate, options).toPromise();
    }
    /**
      * Creates a custom AAGUID for the WebAuthn authenticator
      * Create a custom AAGUID
      * @param param the request object
      */
    createCustomAAGUID(param, options) {
        return this.api.createCustomAAGUID(param.authenticatorId, param.customAAGUIDCreateRequestObject, options).toPromise();
    }
    /**
      * Deactivates an authenticator by `authenticatorId`
      * Deactivate an authenticator
      * @param param the request object
      */
    deactivateAuthenticator(param, options) {
        return this.api.deactivateAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Deactivates a method for an authenticator identified by `authenticatorId` and `methodType`
      * Deactivate an authenticator method
      * @param param the request object
      */
    deactivateAuthenticatorMethod(param, options) {
        return this.api.deactivateAuthenticatorMethod(param.authenticatorId, param.methodType, options).toPromise();
    }
    /**
      * Deletes a custom AAGUID  You can only delete custom AAGUIDs that an admin has created.
      * Delete a custom AAGUID
      * @param param the request object
      */
    deleteCustomAAGUID(param, options) {
        return this.api.deleteCustomAAGUID(param.authenticatorId, param.aaguid, options).toPromise();
    }
    /**
      * Retrieves an authenticator from your Okta organization by `authenticatorId`
      * Retrieve an authenticator
      * @param param the request object
      */
    getAuthenticator(param, options) {
        return this.api.getAuthenticator(param.authenticatorId, options).toPromise();
    }
    /**
      * Retrieves a method identified by `methodType` of an authenticator identified by `authenticatorId`
      * Retrieve an authenticator method
      * @param param the request object
      */
    getAuthenticatorMethod(param, options) {
        return this.api.getAuthenticatorMethod(param.authenticatorId, param.methodType, options).toPromise();
    }
    /**
      * Retrieves a custom AAGUID
      * Retrieve a custom AAGUID
      * @param param the request object
      */
    getCustomAAGUID(param, options) {
        return this.api.getCustomAAGUID(param.authenticatorId, param.aaguid, options).toPromise();
    }
    /**
      * Retrieves the well-known app authenticator configuration. Includes an app authenticator\'s settings, supported methods, and other details.
      * Retrieve the well-known app authenticator configuration
      * @param param the request object
      */
    getWellKnownAppAuthenticatorConfiguration(param, options) {
        return this.api.getWellKnownAppAuthenticatorConfiguration(param.oauthClientId, options).toPromise();
    }
    /**
      * Lists all custom Authenticator Attestation Global Unique Identifiers (AAGUIDs) in the org  Only custom AAGUIDs that an admin has created are returned.
      * List all custom AAGUIDs
      * @param param the request object
      */
    listAllCustomAAGUIDs(param, options) {
        return this.api.listAllCustomAAGUIDs(param.authenticatorId, options).toPromise();
    }
    /**
      * Lists all methods of an authenticator identified by `authenticatorId`
      * List all methods of an authenticator
      * @param param the request object
      */
    listAuthenticatorMethods(param, options) {
        return this.api.listAuthenticatorMethods(param.authenticatorId, options).toPromise();
    }
    /**
      * Lists all authenticators
      * List all authenticators
      * @param param the request object
      */
    listAuthenticators(param = {}, options) {
        return this.api.listAuthenticators(options).toPromise();
    }
    /**
      * Replaces the properties for an authenticator identified by `authenticatorId`
      * Replace an authenticator
      * @param param the request object
      */
    replaceAuthenticator(param, options) {
        return this.api.replaceAuthenticator(param.authenticatorId, param.authenticator, options).toPromise();
    }
    /**
      * Replaces a method of `methodType` for an authenticator identified by `authenticatorId`
      * Replace an authenticator method
      * @param param the request object
      */
    replaceAuthenticatorMethod(param, options) {
        return this.api.replaceAuthenticatorMethod(param.authenticatorId, param.methodType, param.authenticatorMethodBase, options).toPromise();
    }
    /**
      * Replaces a custom AAGUID for the specified WebAuthn authenticator
      * Replace a custom AAGUID
      * @param param the request object
      */
    replaceCustomAAGUID(param, options) {
        return this.api.replaceCustomAAGUID(param.authenticatorId, param.aaguid, param.customAAGUIDUpdateRequestObject, options).toPromise();
    }
    /**
      * Updates the properties of a custom AAGUID by the `authenticatorId` and `aaguid` ID
      * Update a custom AAGUID
      * @param param the request object
      */
    updateCustomAAGUID(param, options) {
        return this.api.updateCustomAAGUID(param.authenticatorId, param.aaguid, param.customAAGUIDUpdateRequestObject, options).toPromise();
    }
    /**
      * Verifies the [Relying Party identifier (RP ID)](https://www.w3.org/TR/webauthn/#relying-party-identifier) domain for the specified WebAuthn authenticator and the specific `webauthn` authenticator method
      * Verify a Relying Party ID domain
      * @param param the request object
      */
    verifyRpIdDomain(param, options) {
        return this.api.verifyRpIdDomain(param.authenticatorId, param.webAuthnMethodType, options).toPromise();
    }
}
exports.ObjectAuthenticatorApi = ObjectAuthenticatorApi;
const ObservableAPI_15 = require("./ObservableAPI");
class ObjectAuthorizationServerApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableAuthorizationServerApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an authorization server
      * Activate an authorization server
      * @param param the request object
      */
    activateAuthorizationServer(param, options) {
        return this.api.activateAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Activates an authorization server policy
      * Activate a policy
      * @param param the request object
      */
    activateAuthorizationServerPolicy(param, options) {
        return this.api.activateAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Activates an authorization server policy rule
      * Activate a policy rule
      * @param param the request object
      */
    activateAuthorizationServerPolicyRule(param, options) {
        return this.api.activateAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Creates trusted relationships between the given authorization server and other authorization servers
      * Create an associated authorization server
      * @param param the request object
      */
    createAssociatedServers(param, options) {
        return this.api.createAssociatedServers(param.authServerId, param.associatedServerMediated, options).toPromise();
    }
    /**
      * Creates an authorization server
      * Create an authorization server
      * @param param the request object
      */
    createAuthorizationServer(param, options) {
        return this.api.createAuthorizationServer(param.authorizationServer, options).toPromise();
    }
    /**
      * Creates a policy
      * Create a policy
      * @param param the request object
      */
    createAuthorizationServerPolicy(param, options) {
        return this.api.createAuthorizationServerPolicy(param.authServerId, param.policy, options).toPromise();
    }
    /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy
      * Create a policy rule
      * @param param the request object
      */
    createAuthorizationServerPolicyRule(param, options) {
        return this.api.createAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.policyRule, options).toPromise();
    }
    /**
      * Creates a custom token Claim for a custom authorization server
      * Create a custom token claim
      * @param param the request object
      */
    createOAuth2Claim(param, options) {
        return this.api.createOAuth2Claim(param.authServerId, param.oAuth2Claim, options).toPromise();
    }
    /**
      * Creates a custom token scope
      * Create a custom token scope
      * @param param the request object
      */
    createOAuth2Scope(param, options) {
        return this.api.createOAuth2Scope(param.authServerId, param.oAuth2Scope, options).toPromise();
    }
    /**
      * Deactivates an authorization server
      * Deactivate an authorization server
      * @param param the request object
      */
    deactivateAuthorizationServer(param, options) {
        return this.api.deactivateAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Deactivates an authorization server policy
      * Deactivate a policy
      * @param param the request object
      */
    deactivateAuthorizationServerPolicy(param, options) {
        return this.api.deactivateAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Deactivates an authorization server policy rule
      * Deactivate a policy rule
      * @param param the request object
      */
    deactivateAuthorizationServerPolicyRule(param, options) {
        return this.api.deactivateAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Deletes an associated Authorization Server
      * Delete an associated authorization server
      * @param param the request object
      */
    deleteAssociatedServer(param, options) {
        return this.api.deleteAssociatedServer(param.authServerId, param.associatedServerId, options).toPromise();
    }
    /**
      * Deletes an authorization server
      * Delete an authorization server
      * @param param the request object
      */
    deleteAuthorizationServer(param, options) {
        return this.api.deleteAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Deletes a policy
      * Delete a policy
      * @param param the request object
      */
    deleteAuthorizationServerPolicy(param, options) {
        return this.api.deleteAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
      * Delete a policy rule
      * @param param the request object
      */
    deleteAuthorizationServerPolicyRule(param, options) {
        return this.api.deleteAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Deletes a custom token Claim specified by the `claimId`
      * Delete a custom token claim
      * @param param the request object
      */
    deleteOAuth2Claim(param, options) {
        return this.api.deleteOAuth2Claim(param.authServerId, param.claimId, options).toPromise();
    }
    /**
      * Deletes a custom token scope
      * Delete a custom token scope
      * @param param the request object
      */
    deleteOAuth2Scope(param, options) {
        return this.api.deleteOAuth2Scope(param.authServerId, param.scopeId, options).toPromise();
    }
    /**
      * Retrieves an authorization server
      * Retrieve an authorization server
      * @param param the request object
      */
    getAuthorizationServer(param, options) {
        return this.api.getAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Retrieves an Authorization Server Key specified by the `keyId`
      * Retrieve an authorization server key
      * @param param the request object
      */
    getAuthorizationServerKey(param, options) {
        return this.api.getAuthorizationServerKey(param.authServerId, param.keyId, options).toPromise();
    }
    /**
      * Retrieves a policy
      * Retrieve a policy
      * @param param the request object
      */
    getAuthorizationServerPolicy(param, options) {
        return this.api.getAuthorizationServerPolicy(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Retrieves a policy rule by `ruleId`
      * Retrieve a policy rule
      * @param param the request object
      */
    getAuthorizationServerPolicyRule(param, options) {
        return this.api.getAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Retrieves a custom token Claim by the specified `claimId`
      * Retrieve a custom token claim
      * @param param the request object
      */
    getOAuth2Claim(param, options) {
        return this.api.getOAuth2Claim(param.authServerId, param.claimId, options).toPromise();
    }
    /**
      * Retrieves a custom token scope
      * Retrieve a custom token scope
      * @param param the request object
      */
    getOAuth2Scope(param, options) {
        return this.api.getOAuth2Scope(param.authServerId, param.scopeId, options).toPromise();
    }
    /**
      * Retrieves a refresh token for a Client
      * Retrieve a refresh token for a client
      * @param param the request object
      */
    getRefreshTokenForAuthorizationServerAndClient(param, options) {
        return this.api.getRefreshTokenForAuthorizationServerAndClient(param.authServerId, param.clientId, param.tokenId, param.expand, options).toPromise();
    }
    /**
      * Lists all associated Authorization Servers by trusted type for the given `authServerId`
      * List all associated authorization servers
      * @param param the request object
      */
    listAssociatedServersByTrustedType(param, options) {
        return this.api.listAssociatedServersByTrustedType(param.authServerId, param.trusted, param.q, param.limit, param.after, options).toPromise();
    }
    /**
      * Lists all of the current, future, and expired Keys used by the Custom Authorization Server
      * List all credential keys
      * @param param the request object
      */
    listAuthorizationServerKeys(param, options) {
        return this.api.listAuthorizationServerKeys(param.authServerId, options).toPromise();
    }
    /**
      * Lists all policies
      * List all policies
      * @param param the request object
      */
    listAuthorizationServerPolicies(param, options) {
        return this.api.listAuthorizationServerPolicies(param.authServerId, options).toPromise();
    }
    /**
      * Lists all policy rules for the specified Custom Authorization Server and Policy
      * List all policy rules
      * @param param the request object
      */
    listAuthorizationServerPolicyRules(param, options) {
        return this.api.listAuthorizationServerPolicyRules(param.authServerId, param.policyId, options).toPromise();
    }
    /**
      * Lists all custom authorization servers in the org
      * List all authorization servers
      * @param param the request object
      */
    listAuthorizationServers(param = {}, options) {
        return this.api.listAuthorizationServers(param.q, param.limit, param.after, options).toPromise();
    }
    /**
      * Lists all custom token Claims defined for a specified custom authorization server
      * List all custom token claims
      * @param param the request object
      */
    listOAuth2Claims(param, options) {
        return this.api.listOAuth2Claims(param.authServerId, options).toPromise();
    }
    /**
      * Lists all client resources for which the specified authorization server has tokens.  > **Note:** To list a specific user\'s client resources for which they have tokens or grants, use the [List all clients endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserClients).
      * List all client resources for an authorization server
      * @param param the request object
      */
    listOAuth2ClientsForAuthorizationServer(param, options) {
        return this.api.listOAuth2ClientsForAuthorizationServer(param.authServerId, options).toPromise();
    }
    /**
      * Lists all custom token scopes
      * List all custom token scopes
      * @param param the request object
      */
    listOAuth2Scopes(param, options) {
        return this.api.listOAuth2Scopes(param.authServerId, param.q, param.filter, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all refresh tokens issued by an authorization server for a specific Client
      * List all refresh tokens for a client
      * @param param the request object
      */
    listRefreshTokensForAuthorizationServerAndClient(param, options) {
        return this.api.listRefreshTokensForAuthorizationServerAndClient(param.authServerId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Replaces an authorization server
      * Replace an authorization server
      * @param param the request object
      */
    replaceAuthorizationServer(param, options) {
        return this.api.replaceAuthorizationServer(param.authServerId, param.authorizationServer, options).toPromise();
    }
    /**
      * Replaces a policy
      * Replace a policy
      * @param param the request object
      */
    replaceAuthorizationServerPolicy(param, options) {
        return this.api.replaceAuthorizationServerPolicy(param.authServerId, param.policyId, param.policy, options).toPromise();
    }
    /**
      * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
      * Replace a policy rule
      * @param param the request object
      */
    replaceAuthorizationServerPolicyRule(param, options) {
        return this.api.replaceAuthorizationServerPolicyRule(param.authServerId, param.policyId, param.ruleId, param.policyRule, options).toPromise();
    }
    /**
      * Replaces a custom token Claim specified by the `claimId`
      * Replace a custom token claim
      * @param param the request object
      */
    replaceOAuth2Claim(param, options) {
        return this.api.replaceOAuth2Claim(param.authServerId, param.claimId, param.oAuth2Claim, options).toPromise();
    }
    /**
      * Replaces a custom token scope
      * Replace a custom token scope
      * @param param the request object
      */
    replaceOAuth2Scope(param, options) {
        return this.api.replaceOAuth2Scope(param.authServerId, param.scopeId, param.oAuth2Scope, options).toPromise();
    }
    /**
      * Revokes a refresh token for a Client
      * Revoke a refresh token for a client
      * @param param the request object
      */
    revokeRefreshTokenForAuthorizationServerAndClient(param, options) {
        return this.api.revokeRefreshTokenForAuthorizationServerAndClient(param.authServerId, param.clientId, param.tokenId, options).toPromise();
    }
    /**
      * Revokes all refresh tokens for a Client
      * Revoke all refresh tokens for a client
      * @param param the request object
      */
    revokeRefreshTokensForAuthorizationServerAndClient(param, options) {
        return this.api.revokeRefreshTokensForAuthorizationServerAndClient(param.authServerId, param.clientId, options).toPromise();
    }
    /**
      * Rotates the current Keys for a Custom Authorization Server. If you rotate Keys, the `ACTIVE` Key becomes the `EXPIRED` Key, the `NEXT` Key becomes the `ACTIVE` Key, and the Custom Authorization Server immediately begins using the new active Key to sign tokens.  > **Note:** Okta rotates your Keys automatically in `AUTO` mode. You can rotate Keys yourself in either mode. If Keys are rotated manually, you should invalidate any intermediate cache. and fetch the Keys again using the Keys endpoint.
      * Rotate all credential keys
      * @param param the request object
      */
    rotateAuthorizationServerKeys(param, options) {
        return this.api.rotateAuthorizationServerKeys(param.authServerId, param.use, options).toPromise();
    }
}
exports.ObjectAuthorizationServerApi = ObjectAuthorizationServerApi;
const ObservableAPI_16 = require("./ObservableAPI");
class ObjectBehaviorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableBehaviorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a behavior detection rule
      * Activate a behavior detection rule
      * @param param the request object
      */
    activateBehaviorDetectionRule(param, options) {
        return this.api.activateBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Creates a new behavior detection rule
      * Create a behavior detection rule
      * @param param the request object
      */
    createBehaviorDetectionRule(param, options) {
        return this.api.createBehaviorDetectionRule(param.rule, options).toPromise();
    }
    /**
      * Deactivates a behavior detection rule
      * Deactivate a behavior detection rule
      * @param param the request object
      */
    deactivateBehaviorDetectionRule(param, options) {
        return this.api.deactivateBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Deletes a Behavior Detection Rule by `behaviorId`
      * Delete a behavior detection rule
      * @param param the request object
      */
    deleteBehaviorDetectionRule(param, options) {
        return this.api.deleteBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Retrieves a Behavior Detection Rule by `behaviorId`
      * Retrieve a behavior detection rule
      * @param param the request object
      */
    getBehaviorDetectionRule(param, options) {
        return this.api.getBehaviorDetectionRule(param.behaviorId, options).toPromise();
    }
    /**
      * Lists all behavior detection rules with pagination support
      * List all behavior detection rules
      * @param param the request object
      */
    listBehaviorDetectionRules(param = {}, options) {
        return this.api.listBehaviorDetectionRules(options).toPromise();
    }
    /**
      * Replaces a Behavior Detection Rule by `behaviorId`
      * Replace a behavior detection rule
      * @param param the request object
      */
    replaceBehaviorDetectionRule(param, options) {
        return this.api.replaceBehaviorDetectionRule(param.behaviorId, param.rule, options).toPromise();
    }
}
exports.ObjectBehaviorApi = ObjectBehaviorApi;
const ObservableAPI_17 = require("./ObservableAPI");
class ObjectCAPTCHAApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableCAPTCHAApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new CAPTCHA instance. Currently, an org can only configure a single CAPTCHA instance.
      * Create a CAPTCHA instance
      * @param param the request object
      */
    createCaptchaInstance(param, options) {
        return this.api.createCaptchaInstance(param.instance, options).toPromise();
    }
    /**
      * Deletes a specified CAPTCHA instance > **Note:** If your CAPTCHA instance is still associated with your org, the request fails. You must first update your Org-wide CAPTCHA settings to remove the CAPTCHA instance.
      * Delete a CAPTCHA instance
      * @param param the request object
      */
    deleteCaptchaInstance(param, options) {
        return this.api.deleteCaptchaInstance(param.captchaId, options).toPromise();
    }
    /**
      * Deletes the CAPTCHA settings object for your organization
      * Delete the org-wide CAPTCHA settings
      * @param param the request object
      */
    deleteOrgCaptchaSettings(param = {}, options) {
        return this.api.deleteOrgCaptchaSettings(options).toPromise();
    }
    /**
      * Retrieves the properties of a specified CAPTCHA instance
      * Retrieve a CAPTCHA instance
      * @param param the request object
      */
    getCaptchaInstance(param, options) {
        return this.api.getCaptchaInstance(param.captchaId, options).toPromise();
    }
    /**
      * Retrieves the CAPTCHA settings object for your organization > **Note**: If the current organization hasn\'t configured CAPTCHA Settings, the request returns an empty object.
      * Retrieve the org-wide CAPTCHA settings
      * @param param the request object
      */
    getOrgCaptchaSettings(param = {}, options) {
        return this.api.getOrgCaptchaSettings(options).toPromise();
    }
    /**
      * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      * @param param the request object
      */
    listCaptchaInstances(param = {}, options) {
        return this.api.listCaptchaInstances(options).toPromise();
    }
    /**
      * Replaces the properties for a specified CAPTCHA instance
      * Replace a CAPTCHA instance
      * @param param the request object
      */
    replaceCaptchaInstance(param, options) {
        return this.api.replaceCaptchaInstance(param.captchaId, param.instance, options).toPromise();
    }
    /**
      * Replaces the CAPTCHA settings object for your organization > **Note**: You can disable CAPTCHA for your organization by setting `captchaId` and `enabledPages` to `null`.
      * Replace the org-wide CAPTCHA settings
      * @param param the request object
      */
    replacesOrgCaptchaSettings(param, options) {
        return this.api.replacesOrgCaptchaSettings(param.orgCAPTCHASettings, options).toPromise();
    }
    /**
      * Partially updates the properties of a specified CAPTCHA instance
      * Update a CAPTCHA instance
      * @param param the request object
      */
    updateCaptchaInstance(param, options) {
        return this.api.updateCaptchaInstance(param.captchaId, param.instance, options).toPromise();
    }
}
exports.ObjectCAPTCHAApi = ObjectCAPTCHAApi;
const ObservableAPI_18 = require("./ObservableAPI");
class ObjectCustomDomainApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableCustomDomainApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates your custom domain
      * Create a custom domain
      * @param param the request object
      */
    createCustomDomain(param, options) {
        return this.api.createCustomDomain(param.domain, options).toPromise();
    }
    /**
      * Deletes a custom domain by `domainId`
      * Delete a custom domain
      * @param param the request object
      */
    deleteCustomDomain(param, options) {
        return this.api.deleteCustomDomain(param.domainId, options).toPromise();
    }
    /**
      * Retrieves a custom domain by `domainId`
      * Retrieve a custom domain
      * @param param the request object
      */
    getCustomDomain(param, options) {
        return this.api.getCustomDomain(param.domainId, options).toPromise();
    }
    /**
      * Lists all verified custom domains for the org
      * List all custom domains
      * @param param the request object
      */
    listCustomDomains(param = {}, options) {
        return this.api.listCustomDomains(options).toPromise();
    }
    /**
      * Replaces a custom domain\'s brand
      * Replace a custom domain\'s brand
      * @param param the request object
      */
    replaceCustomDomain(param, options) {
        return this.api.replaceCustomDomain(param.domainId, param.UpdateDomain, options).toPromise();
    }
    /**
      * Upserts (creates or renews) the `MANUAL` certificate for the custom domain  > **Notes:** > * If the existing `certificateSourceType` is `OKTA_MANAGED`, this operation changes the source type to `MANUAL`. Okta no longer manages and renews certificates for this domain after you provide a user-managed certificate. > * Okta supports TLS certificates and private keys that are PEM-encoded and 2048, 3072, or 4096 bits. See the [Custom domain guide](https://developer.okta.com/docs/guides/custom-url-domain/main/) for more details.
      * Upsert the custom domain\'s certificate
      * @param param the request object
      */
    upsertCertificate(param, options) {
        return this.api.upsertCertificate(param.domainId, param.certificate, options).toPromise();
    }
    /**
      * Verifies the custom domain and validity of DNS records by `domainId`. Verify your custom domain to confirm that you own or control the domain and that you have properly configured the required DNS records. Furthermore, if the `certificateSourceType` in the domain is `OKTA_MANAGED`, then an attempt is made to obtain and install a certificate. After a certificate is obtained and installed by Okta, Okta manages the certificate including certificate renewal.  Verify your custom domain after you\'ve [created it](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/CustomDomain/#tag/CustomDomain/operation/createCustomDomain) and after you\'ve added your TXT and CNAME records to your domain provider. Okta doesn\'t verify your domain automatically. You must use the API to verify your custom domain if you change your DNS records or if you encounter issues with domain validation.  > **Note:** DNS record changes can take time to propagate. If you recently updated your DNS records, you may need to wait before verifying your custom domain. If you encounter issues with domain verification, double-check your DNS records and ensure that they\'re correctly configured. See [Update your DNS TXT](https://developer.okta.com/docs/guides/custom-url-domain/main/#update-your-dns-txt) for more information about verifying your custom domain.
      * Verify a custom domain
      * @param param the request object
      */
    verifyDomain(param, options) {
        return this.api.verifyDomain(param.domainId, options).toPromise();
    }
}
exports.ObjectCustomDomainApi = ObjectCustomDomainApi;
const ObservableAPI_19 = require("./ObservableAPI");
class ObjectCustomRoleApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableCustomRoleApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a custom role
      * Create a custom role
      * @param param the request object
      */
    createRole(param, options) {
        return this.api.createRole(param.instance, options).toPromise();
    }
    /**
      * Creates a permission (specified by `permissionType`) for a custom role
      * Create a custom role permission
      * @param param the request object
      */
    createRolePermission(param, options) {
        return this.api.createRolePermission(param.roleIdOrLabel, param.permissionType, param.instance, options).toPromise();
    }
    /**
      * Deletes a custom role by `roleIdOrLabel`
      * Delete a custom role
      * @param param the request object
      */
    deleteRole(param, options) {
        return this.api.deleteRole(param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Deletes a permission (identified by `permissionType`) from a custom role
      * Delete a custom role permission
      * @param param the request object
      */
    deleteRolePermission(param, options) {
        return this.api.deleteRolePermission(param.roleIdOrLabel, param.permissionType, options).toPromise();
    }
    /**
      * Retrieves a role by `roleIdOrLabel`
      * Retrieve a role
      * @param param the request object
      */
    getRole(param, options) {
        return this.api.getRole(param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Retrieves a permission (identified by `permissionType`) for a custom role
      * Retrieve a custom role permission
      * @param param the request object
      */
    getRolePermission(param, options) {
        return this.api.getRolePermission(param.roleIdOrLabel, param.permissionType, options).toPromise();
    }
    /**
      * Lists all permissions for a custom role by `roleIdOrLabel`
      * List all custom role permissions
      * @param param the request object
      */
    listRolePermissions(param, options) {
        return this.api.listRolePermissions(param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Lists all custom roles with pagination support
      * List all custom roles
      * @param param the request object
      */
    listRoles(param = {}, options) {
        return this.api.listRoles(param.after, options).toPromise();
    }
    /**
      * Replaces the label and description for a custom role by `roleIdOrLabel`
      * Replace a custom role
      * @param param the request object
      */
    replaceRole(param, options) {
        return this.api.replaceRole(param.roleIdOrLabel, param.instance, options).toPromise();
    }
    /**
      * Replaces a permission (specified by `permissionType`) for a custom role
      * Replace a custom role permission
      * @param param the request object
      */
    replaceRolePermission(param, options) {
        return this.api.replaceRolePermission(param.roleIdOrLabel, param.permissionType, param.instance, options).toPromise();
    }
}
exports.ObjectCustomRoleApi = ObjectCustomRoleApi;
const ObservableAPI_20 = require("./ObservableAPI");
class ObjectCustomTelephonyProviderApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservableCustomTelephonyProviderApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a custom telephony provider by its ID. You must activate a provider before it can be used.
      * Activate a custom telephony provider
      * @param param the request object
      */
    activateCustomTelephonyCredential(param, options) {
        return this.api.activateCustomTelephonyCredential(param.customTelephonyProviderId, options).toPromise();
    }
    /**
      * Creates a custom telephony provider with the provided credentials
      * Create a custom telephony provider
      * @param param the request object
      */
    createCustomTelephonyProviderCredentials(param, options) {
        return this.api.createCustomTelephonyProviderCredentials(param.customTelephonyProviderCredentialCreateRequest, options).toPromise();
    }
    /**
      * Deactivates a custom telephony provider by its ID. Keep the following points in mind when you deactivate a provider: * You must deactivate a provider before deleting it. * If you have two telephony providers configured, and both are active, you can only deactivate the secondary provider. The second provider is the one that isn\'t set as the primary provider.
      * Deactivate a custom telephony provider
      * @param param the request object
      */
    deactivateCustomTelephonyCredential(param, options) {
        return this.api.deactivateCustomTelephonyCredential(param.customTelephonyProviderId, options).toPromise();
    }
    /**
      * Deletes a custom telephony provider by its ID.  Before you delete a provider, ensure that it is [deactivated](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/CustomTelephonyProvider/#tag/CustomTelephonyProvider/operation/deactivateCustomTelephonyCredential). Consider setting up another telephony provider if you still plan to use telephony in your org. See [Set up an external telephony provider](https://help.okta.com/okta_help.htm?type=oie&id=about-telephony).
      * Delete a custom telephony provider
      * @param param the request object
      */
    deleteCustomTelephonyProviderCredential(param, options) {
        return this.api.deleteCustomTelephonyProviderCredential(param.customTelephonyProviderId, options).toPromise();
    }
    /**
      * Retrieves the details of a custom telephony provider by its ID
      * Retrieve a custom telephony provider
      * @param param the request object
      */
    getCustomTelephonyProviderCredential(param, options) {
        return this.api.getCustomTelephonyProviderCredential(param.customTelephonyProviderId, options).toPromise();
    }
    /**
      * Lists all custom telephony providers that are configured in your org
      * List all custom telephony providers
      * @param param the request object
      */
    listAllCustomTelephonyProviderCredentials(param = {}, options) {
        return this.api.listAllCustomTelephonyProviderCredentials(options).toPromise();
    }
    /**
      * Sends a test message (SMS or call) using the specified custom telephony provider to verify that the provider is configured correctly.  You must provide a valid phone number and country code to send the test message. Send it to a phone number that you have access to so you can confirm that the message was received.
      * Send a test message from a custom telephony provider
      * @param param the request object
      */
    sendTestCustomTelephonyProviderCredential(param, options) {
        return this.api.sendTestCustomTelephonyProviderCredential(param.customTelephonyProviderId, param.customTelephonyProviderCredentialSendTestRequest, options).toPromise();
    }
    /**
      * Sets a custom telephony provider as the primary telephony provider for the org. You can only set one provider as a primary provider at a time.
      * Set a custom telephony provider as a primary telephony provider
      * @param param the request object
      */
    setAsPrimaryCustomTelephonyCredential(param, options) {
        return this.api.setAsPrimaryCustomTelephonyCredential(param.customTelephonyProviderId, options).toPromise();
    }
    /**
      * Updates the credentials of an existing custom telephony provider
      * Update a custom telephony provider credential
      * @param param the request object
      */
    updateCustomTelephonyProviderCredential(param, options) {
        return this.api.updateCustomTelephonyProviderCredential(param.customTelephonyProviderId, param.customTelephonyProviderCredentialUpdateRequest, options).toPromise();
    }
}
exports.ObjectCustomTelephonyProviderApi = ObjectCustomTelephonyProviderApi;
const ObservableAPI_21 = require("./ObservableAPI");
class ObjectCustomizationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservableCustomizationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Removes emails from an email service bounce list.  The emails submitted in this operation are removed from the bounce list by an asynchronous job. Any email address that passes validation is accepted for the removal process, even if there are other email addresses in the request that failed validation.  > **Note:** If there are validation errors for all email addresses, a `200 OK` HTTP status is still returned.
      * Remove bounced emails
      * @param param the request object
      */
    bulkRemoveEmailAddressBounces(param = {}, options) {
        return this.api.bulkRemoveEmailAddressBounces(param.BouncesRemoveListObj, options).toPromise();
    }
    /**
      * Creates a new brand in your org
      * Create a brand
      * @param param the request object
      */
    createBrand(param = {}, options) {
        return this.api.createBrand(param.CreateBrandRequest, options).toPromise();
    }
    /**
      * Creates a new Email Customization  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, you can create a customization for any BCP47 language in addition to the Okta-supported languages.
      * Create an email customization
      * @param param the request object
      */
    createEmailCustomization(param, options) {
        return this.api.createEmailCustomization(param.brandId, param.templateName, param.instance, options).toPromise();
    }
    /**
      * Deletes all customizations for an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all customizations are deleted, including customizations for additional languages. If disabled, only customizations in Okta-supported languages are deleted.
      * Delete all email customizations
      * @param param the request object
      */
    deleteAllCustomizations(param, options) {
        return this.api.deleteAllCustomizations(param.brandId, param.templateName, options).toPromise();
    }
    /**
      * Deletes a brand by `brandId`
      * Delete a brand
      * @param param the request object
      */
    deleteBrand(param, options) {
        return this.api.deleteBrand(param.brandId, options).toPromise();
    }
    /**
      * Deletes a theme background image
      * Delete the background image
      * @param param the request object
      */
    deleteBrandThemeBackgroundImage(param, options) {
        return this.api.deleteBrandThemeBackgroundImage(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Deletes a theme favicon. The theme will use the default Okta favicon.
      * Delete the favicon
      * @param param the request object
      */
    deleteBrandThemeFavicon(param, options) {
        return this.api.deleteBrandThemeFavicon(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the logo
      * @param param the request object
      */
    deleteBrandThemeLogo(param, options) {
        return this.api.deleteBrandThemeLogo(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Deletes the customized error page. As a result, the default error page appears in your live environment.
      * Delete the customized error page
      * @param param the request object
      */
    deleteCustomizedErrorPage(param, options) {
        return this.api.deleteCustomizedErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
      * Delete the customized sign-in page
      * @param param the request object
      */
    deleteCustomizedSignInPage(param, options) {
        return this.api.deleteCustomizedSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Deletes an Email Customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, deletion of an existing additional language customization by ID doesn\'t register.
      * Delete an email customization
      * @param param the request object
      */
    deleteEmailCustomization(param, options) {
        return this.api.deleteEmailCustomization(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Deletes the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Delete the preview error page
      * @param param the request object
      */
    deletePreviewErrorPage(param, options) {
        return this.api.deletePreviewErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Delete the preview sign-in page
      * @param param the request object
      */
    deletePreviewSignInPage(param, options) {
        return this.api.deletePreviewSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves a brand by `brandId`
      * Retrieve a brand
      * @param param the request object
      */
    getBrand(param, options) {
        return this.api.getBrand(param.brandId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a theme for a brand
      * Retrieve a theme
      * @param param the request object
      */
    getBrandTheme(param, options) {
        return this.api.getBrandTheme(param.brandId, param.themeId, options).toPromise();
    }
    /**
      * Retrieves a Preview of an Email Customization. All variable references are populated from the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests for the preview of an additional language customization by ID return a `404 Not Found` error response.
      * Retrieve a preview of an email customization
      * @param param the request object
      */
    getCustomizationPreview(param, options) {
        return this.api.getCustomizationPreview(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Retrieves the customized error page. The customized error page appears in your live environment.
      * Retrieve the customized error page
      * @param param the request object
      */
    getCustomizedErrorPage(param, options) {
        return this.api.getCustomizedErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
      * Retrieve the customized sign-in page
      * @param param the request object
      */
    getCustomizedSignInPage(param, options) {
        return this.api.getCustomizedSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the default error page. The default error page appears when no customized error page exists.
      * Retrieve the default error page
      * @param param the request object
      */
    getDefaultErrorPage(param, options) {
        return this.api.getDefaultErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
      * Retrieve the default sign-in page
      * @param param the request object
      */
    getDefaultSignInPage(param, options) {
        return this.api.getDefaultSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves an email customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to retrieve an additional language customization by ID result in a `404 Not Found` error response.
      * Retrieve an email customization
      * @param param the request object
      */
    getEmailCustomization(param, options) {
        return this.api.getEmailCustomization(param.brandId, param.templateName, param.customizationId, options).toPromise();
    }
    /**
      * Retrieves an email template\'s default content  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
      * Retrieve an email template default content
      * @param param the request object
      */
    getEmailDefaultContent(param, options) {
        return this.api.getEmailDefaultContent(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Retrieves a preview of an Email Template\'s default content. All variable references are populated using the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
      * Retrieve a preview of the email template default content
      * @param param the request object
      */
    getEmailDefaultPreview(param, options) {
        return this.api.getEmailDefaultPreview(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Retrieves an email template\'s settings
      * Retrieve the email template settings
      * @param param the request object
      */
    getEmailSettings(param, options) {
        return this.api.getEmailSettings(param.brandId, param.templateName, options).toPromise();
    }
    /**
      * Retrieves the details of an email template by name
      * Retrieve an email template
      * @param param the request object
      */
    getEmailTemplate(param, options) {
        return this.api.getEmailTemplate(param.brandId, param.templateName, param.expand, options).toPromise();
    }
    /**
      * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the error page sub-resources
      * @param param the request object
      */
    getErrorPage(param, options) {
        return this.api.getErrorPage(param.brandId, param.expand, options).toPromise();
    }
    /**
      * Retrieves the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Retrieve the preview error page preview
      * @param param the request object
      */
    getPreviewErrorPage(param, options) {
        return this.api.getPreviewErrorPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Retrieve the preview sign-in page preview
      * @param param the request object
      */
    getPreviewSignInPage(param, options) {
        return this.api.getPreviewSignInPage(param.brandId, options).toPromise();
    }
    /**
      * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the sign-in page sub-resources
      * @param param the request object
      */
    getSignInPage(param, options) {
        return this.api.getSignInPage(param.brandId, param.expand, options).toPromise();
    }
    /**
      * Retrieves the sign-out page settings
      * Retrieve the sign-out page settings
      * @param param the request object
      */
    getSignOutPageSettings(param, options) {
        return this.api.getSignOutPageSettings(param.brandId, options).toPromise();
    }
    /**
      * Lists all sign-in widget versions supported by the current org
      * List all Sign-In Widget versions
      * @param param the request object
      */
    listAllSignInWidgetVersions(param, options) {
        return this.api.listAllSignInWidgetVersions(param.brandId, options).toPromise();
    }
    /**
      * Lists all domains associated with a brand by `brandId`
      * List all domains associated with a brand
      * @param param the request object
      */
    listBrandDomains(param, options) {
        return this.api.listBrandDomains(param.brandId, options).toPromise();
    }
    /**
      * Lists all the themes in your brand.  > **Important:** Currently each org supports only one theme, therefore this contains a single object only.
      * List all themes
      * @param param the request object
      */
    listBrandThemes(param, options) {
        return this.api.listBrandThemes(param.brandId, options).toPromise();
    }
    /**
      * Lists all the brands in your org
      * List all brands
      * @param param the request object
      */
    listBrands(param = {}, options) {
        return this.api.listBrands(param.expand, param.after, param.limit, param.q, options).toPromise();
    }
    /**
      * Lists all customizations of an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all existing customizations are retrieved, including customizations for additional languages. If disabled, only customizations for Okta-supported languages are returned.
      * List all email customizations
      * @param param the request object
      */
    listEmailCustomizations(param, options) {
        return this.api.listEmailCustomizations(param.brandId, param.templateName, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all supported email templates
      * List all email templates
      * @param param the request object
      */
    listEmailTemplates(param, options) {
        return this.api.listEmailTemplates(param.brandId, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Replaces a brand by `brandId`  Passing an invalid `brandId` returns a `404 Not Found` status code with the error code `E0000007`.  Not providing `agreeToCustomPrivacyPolicy` with `customPrivacyPolicyUrl` returns a `400 Bad Request` status code with the error code `E0000001`.
      * Replace a brand
      * @param param the request object
      */
    replaceBrand(param, options) {
        return this.api.replaceBrand(param.brandId, param.brand, options).toPromise();
    }
    /**
      * Replaces a theme for a brand
      * Replace a theme
      * @param param the request object
      */
    replaceBrandTheme(param, options) {
        return this.api.replaceBrandTheme(param.brandId, param.themeId, param.theme, options).toPromise();
    }
    /**
      * Replaces the customized error page. The customized error page appears in your live environment.
      * Replace the customized error page
      * @param param the request object
      */
    replaceCustomizedErrorPage(param, options) {
        return this.api.replaceCustomizedErrorPage(param.brandId, param.ErrorPage, options).toPromise();
    }
    /**
      * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
      * Replace the customized sign-in page
      * @param param the request object
      */
    replaceCustomizedSignInPage(param, options) {
        return this.api.replaceCustomizedSignInPage(param.brandId, param.SignInPage, options).toPromise();
    }
    /**
      * Replaces an email customization using property values  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to update a customization for an additional language return a `404 Not Found` error response.
      * Replace an email customization
      * @param param the request object
      */
    replaceEmailCustomization(param, options) {
        return this.api.replaceEmailCustomization(param.brandId, param.templateName, param.customizationId, param.instance, options).toPromise();
    }
    /**
      * Replaces an email template\'s settings
      * Replace the email template settings
      * @param param the request object
      */
    replaceEmailSettings(param, options) {
        return this.api.replaceEmailSettings(param.brandId, param.templateName, param.EmailSettings, options).toPromise();
    }
    /**
      * Replaces the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Replace the preview error page
      * @param param the request object
      */
    replacePreviewErrorPage(param, options) {
        return this.api.replacePreviewErrorPage(param.brandId, param.ErrorPage, options).toPromise();
    }
    /**
      * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Replace the preview sign-in page
      * @param param the request object
      */
    replacePreviewSignInPage(param, options) {
        return this.api.replacePreviewSignInPage(param.brandId, param.SignInPage, options).toPromise();
    }
    /**
      * Replaces the sign-out page settings
      * Replace the sign-out page settings
      * @param param the request object
      */
    replaceSignOutPageSettings(param, options) {
        return this.api.replaceSignOutPageSettings(param.brandId, param.HostedPage, options).toPromise();
    }
    /**
      * Sends a test email to the current user\'s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled and the `language` parameter is an additional language, the test email uses the customization corresponding to the language. 2. The email template\'s default customization 3. The email template\'s default content, translated to the current user\'s language  > **Note:** Super admins can view customized email templates with the **Send a test email** request. However, when custom email templates are sent to super admins as part of actual email notification flows, the customizations aren\'t applied. Instead, the default email template is used. This only applies to super admins.
      * Send a test email
      * @param param the request object
      */
    sendTestEmail(param, options) {
        return this.api.sendTestEmail(param.brandId, param.templateName, param.language, options).toPromise();
    }
    /**
      * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
      * Upload the background image
      * @param param the request object
      */
    uploadBrandThemeBackgroundImage(param, options) {
        return this.api.uploadBrandThemeBackgroundImage(param.brandId, param.themeId, param.file, options).toPromise();
    }
    /**
      * Uploads and replaces the favicon for the theme
      * Upload the favicon
      * @param param the request object
      */
    uploadBrandThemeFavicon(param, options) {
        return this.api.uploadBrandThemeFavicon(param.brandId, param.themeId, param.file, options).toPromise();
    }
    /**
      * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the logo
      * @param param the request object
      */
    uploadBrandThemeLogo(param, options) {
        return this.api.uploadBrandThemeLogo(param.brandId, param.themeId, param.file, options).toPromise();
    }
}
exports.ObjectCustomizationApi = ObjectCustomizationApi;
const ObservableAPI_22 = require("./ObservableAPI");
class ObjectDeviceApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableDeviceApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a device by setting its status to `ACTIVE` by `deviceId`. Activated devices are used to create and delete device user links.
      * Activate a device
      * @param param the request object
      */
    activateDevice(param, options) {
        return this.api.activateDevice(param.deviceId, options).toPromise();
    }
    /**
      * Deactivates a device by setting its status to `DEACTIVATED` by `deviceId`. Deactivation causes a device to lose all device user links. Set the device status to `DEACTIVATED` before deleting it. > **Note:** When deactivating a Device, keep in mind the following:   - Device deactivation is a destructive operation for device factors and client certificates. Device reenrollment using Okta Verify allows end users to set up new factors on the device.   - Device deletion removes the device record from Okta. Reenrollment creates a new device record.
      * Deactivate a device
      * @param param the request object
      */
    deactivateDevice(param, options) {
        return this.api.deactivateDevice(param.deviceId, options).toPromise();
    }
    /**
      * Deletes (permanently) a device by `deviceId` if it has a status of `DEACTIVATED`. You can transition the device to `DEACTIVATED` status using the [Deactivate a Device](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Device/#tag/Device/operation/deactivateDevice) endpoint. This request is destructive and deletes all of the profile data related to the device. Once deleted, device data can\'t be recovered. However, reenrollment creates a new device record. > **Note:** Attempts to delete a device that isn\'t in a `DEACTIVATED` state raise an error.
      * Delete a device
      * @param param the request object
      */
    deleteDevice(param, options) {
        return this.api.deleteDevice(param.deviceId, options).toPromise();
    }
    /**
      * Retrieves a device by `deviceId`
      * Retrieve a device
      * @param param the request object
      */
    getDevice(param, options) {
        return this.api.getDevice(param.deviceId, options).toPromise();
    }
    /**
      * Lists all Users for a device by `deviceId`
      * List all users for a device
      * @param param the request object
      */
    listDeviceUsers(param, options) {
        return this.api.listDeviceUsers(param.deviceId, options).toPromise();
    }
    /**
      * Lists all devices with pagination support.  >**Note:** To list all devices enrolled by a user, use the [List all devices endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserDevices).  You can return a subset of devices that match a supported search criteria using the `search` query parameter. Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request.  > **Note:** The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.  Don\'t use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss.   Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation requires [URL encoding](https://www.w3.org/TR/html4/interact/forms.html#h-17.13.4.1). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
      * List all devices
      * @param param the request object
      */
    listDevices(param = {}, options) {
        return this.api.listDevices(param.after, param.limit, param.search, param.expand, options).toPromise();
    }
    /**
      * Suspends a device by setting its status to `SUSPENDED`. Use suspended devices to create and delete device user links. You can only unsuspend or deactivate suspended devices. > **Note:** `SUSPENDED` status is meant to be temporary, so it isn\'t destructive.
      * Suspend a Device
      * @param param the request object
      */
    suspendDevice(param, options) {
        return this.api.suspendDevice(param.deviceId, options).toPromise();
    }
    /**
      * Unsuspends a device by returning its `status` to `ACTIVE`. >**Note:** Only devices with a `SUSPENDED` status can be unsuspended.
      * Unsuspend a Device
      * @param param the request object
      */
    unsuspendDevice(param, options) {
        return this.api.unsuspendDevice(param.deviceId, options).toPromise();
    }
}
exports.ObjectDeviceApi = ObjectDeviceApi;
const ObservableAPI_23 = require("./ObservableAPI");
class ObjectDeviceAccessApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableDeviceAccessApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
      * Retrieve the Desktop MFA Enforce Number Matching Challenge org setting
      * @param param the request object
      */
    getDesktopMFAEnforceNumberMatchingChallengeOrgSetting(param = {}, options) {
        return this.api.getDesktopMFAEnforceNumberMatchingChallengeOrgSetting(options).toPromise();
    }
    /**
      * Retrieves the status of the Desktop MFA Recovery PIN feature. That is, whether or not the feature is enabled for your org.
      * Retrieve the Desktop MFA Recovery PIN org setting
      * @param param the request object
      */
    getDesktopMFARecoveryPinOrgSetting(param = {}, options) {
        return this.api.getDesktopMFARecoveryPinOrgSetting(options).toPromise();
    }
    /**
      * Replaces the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
      * Replace the Desktop MFA Enforce Number Matching Challenge org setting
      * @param param the request object
      */
    replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting(param, options) {
        return this.api.replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting(param.desktopMFAEnforceNumberMatchingChallengeOrgSetting, options).toPromise();
    }
    /**
      * Replaces the Desktop MFA Recovery PIN feature for your org
      * Replace the Desktop MFA Recovery PIN org setting
      * @param param the request object
      */
    replaceDesktopMFARecoveryPinOrgSetting(param, options) {
        return this.api.replaceDesktopMFARecoveryPinOrgSetting(param.desktopMFARecoveryPinOrgSetting, options).toPromise();
    }
}
exports.ObjectDeviceAccessApi = ObjectDeviceAccessApi;
const ObservableAPI_24 = require("./ObservableAPI");
class ObjectDeviceAssuranceApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableDeviceAssuranceApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new device assurance policy
      * Create a device assurance policy
      * @param param the request object
      */
    createDeviceAssurancePolicy(param, options) {
        return this.api.createDeviceAssurancePolicy(param.deviceAssurance, options).toPromise();
    }
    /**
      * Deletes a device assurance policy by `deviceAssuranceId`. If the device assurance policy is currently being used in the org Authentication Policies, the delete will not be allowed.
      * Delete a device assurance policy
      * @param param the request object
      */
    deleteDeviceAssurancePolicy(param, options) {
        return this.api.deleteDeviceAssurancePolicy(param.deviceAssuranceId, options).toPromise();
    }
    /**
      * Retrieves a device assurance policy by `deviceAssuranceId`
      * Retrieve a device assurance policy
      * @param param the request object
      */
    getDeviceAssurancePolicy(param, options) {
        return this.api.getDeviceAssurancePolicy(param.deviceAssuranceId, options).toPromise();
    }
    /**
      * Lists all device assurance policies
      * List all device assurance policies
      * @param param the request object
      */
    listDeviceAssurancePolicies(param = {}, options) {
        return this.api.listDeviceAssurancePolicies(options).toPromise();
    }
    /**
      * Replaces a device assurance policy by `deviceAssuranceId`
      * Replace a device assurance policy
      * @param param the request object
      */
    replaceDeviceAssurancePolicy(param, options) {
        return this.api.replaceDeviceAssurancePolicy(param.deviceAssuranceId, param.deviceAssurance, options).toPromise();
    }
}
exports.ObjectDeviceAssuranceApi = ObjectDeviceAssuranceApi;
const ObservableAPI_25 = require("./ObservableAPI");
class ObjectDeviceIntegrationsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservableDeviceIntegrationsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a device integration and populates the related configurations by `deviceIntegrationId`
      * Activate a device integration
      * @param param the request object
      */
    activateDeviceIntegration(param, options) {
        return this.api.activateDeviceIntegration(param.deviceIntegrationId, options).toPromise();
    }
    /**
      * Deactivates a device integration by `deviceIntegrationId`
      * Deactivate a device integration
      * @param param the request object
      */
    deactivateDeviceIntegration(param, options) {
        return this.api.deactivateDeviceIntegration(param.deviceIntegrationId, options).toPromise();
    }
    /**
      * Retrieves a device integration by `deviceIntegrationId`
      * Retrieve a device integration
      * @param param the request object
      */
    getDeviceIntegration(param, options) {
        return this.api.getDeviceIntegration(param.deviceIntegrationId, options).toPromise();
    }
    /**
      * Lists all device integrations for your org. Examples include Device Posture Provider, Windows Security Center, Chrome Device Trust, OSQuery, and Android Device Trust.
      * List all device integrations
      * @param param the request object
      */
    listDeviceIntegrations(param = {}, options) {
        return this.api.listDeviceIntegrations(options).toPromise();
    }
}
exports.ObjectDeviceIntegrationsApi = ObjectDeviceIntegrationsApi;
const ObservableAPI_26 = require("./ObservableAPI");
class ObjectDevicePostureCheckApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservableDevicePostureCheckApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a device posture check
      * Create a device posture check
      * @param param the request object
      */
    createDevicePostureCheck(param, options) {
        return this.api.createDevicePostureCheck(param.devicePostureCheck, options).toPromise();
    }
    /**
      * Deletes a device posture check by `postureCheckId`. You can\'t delete the device posture check if it\'s used in a device assurance policy.
      * Delete a device posture check
      * @param param the request object
      */
    deleteDevicePostureCheck(param, options) {
        return this.api.deleteDevicePostureCheck(param.postureCheckId, options).toPromise();
    }
    /**
      * Retrieves a device posture check by `postureCheckId`
      * Retrieve a device posture check
      * @param param the request object
      */
    getDevicePostureCheck(param, options) {
        return this.api.getDevicePostureCheck(param.postureCheckId, options).toPromise();
    }
    /**
      * Lists all default device posture checks. Default device posture checks are defined by Okta. Their type will always be `BUILTIN`.
      * List all default device posture checks
      * @param param the request object
      */
    listDefaultDevicePostureChecks(param = {}, options) {
        return this.api.listDefaultDevicePostureChecks(options).toPromise();
    }
    /**
      * Lists all device posture checks
      * List all device posture checks
      * @param param the request object
      */
    listDevicePostureChecks(param = {}, options) {
        return this.api.listDevicePostureChecks(options).toPromise();
    }
    /**
      * Replaces a device posture check by `postureCheckId`
      * Replace a device posture check
      * @param param the request object
      */
    replaceDevicePostureCheck(param, options) {
        return this.api.replaceDevicePostureCheck(param.postureCheckId, param.devicePostureCheck, options).toPromise();
    }
}
exports.ObjectDevicePostureCheckApi = ObjectDevicePostureCheckApi;
const ObservableAPI_27 = require("./ObservableAPI");
class ObjectDirectoriesIntegrationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_27.ObservableDirectoriesIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Updates an Active Directory or LDAP  group membership directly in the Active Directory or LDAP server
      * Update an external directory group membership
      * @param param the request object
      */
    updateGroupMembership(param, options) {
        return this.api.updateGroupMembership(param.appInstanceId, param.agentAction, options).toPromise();
    }
}
exports.ObjectDirectoriesIntegrationApi = ObjectDirectoriesIntegrationApi;
const ObservableAPI_28 = require("./ObservableAPI");
class ObjectDisasterRecoveryApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_28.ObservableDisasterRecoveryApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the failover or failback status for all the domains for your org
      * Retrieve the disaster recovery status for all domains for your org
      * @param param the request object
      */
    getDRStatus(param = {}, options) {
        return this.api.getDRStatus(options).toPromise();
    }
    /**
      * Retrieves the failover or failback status for the domain specified in the request path
      * Retrieve the disaster recovery status for a domain
      * @param param the request object
      */
    getDRStatusForDomain(param, options) {
        return this.api.getDRStatusForDomain(param.domain, options).toPromise();
    }
    /**
      * Starts the failback of your org
      * Start the failback of your org
      * @param param the request object
      */
    startOrgFailback(param = {}, options) {
        return this.api.startOrgFailback(param.startOrgFailbackRequest, options).toPromise();
    }
    /**
      * Starts the failover of your org
      * Start the failover of your org
      * @param param the request object
      */
    startOrgFailover(param = {}, options) {
        return this.api.startOrgFailover(param.startOrgFailoverRequest, options).toPromise();
    }
}
exports.ObjectDisasterRecoveryApi = ObjectDisasterRecoveryApi;
const ObservableAPI_29 = require("./ObservableAPI");
class ObjectEmailDomainApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_29.ObservableEmailDomainApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates an Email Domain in your org
      * Create an email domain
      * @param param the request object
      */
    createEmailDomain(param, options) {
        return this.api.createEmailDomain(param.emailDomain, param.expand, options).toPromise();
    }
    /**
      * Deletes an Email Domain by `emailDomainId`
      * Delete an email domain
      * @param param the request object
      */
    deleteEmailDomain(param, options) {
        return this.api.deleteEmailDomain(param.emailDomainId, param.expand, options).toPromise();
    }
    /**
      * Retrieves an Email Domain by `emailDomainId`
      * Retrieve an email domain
      * @param param the request object
      */
    getEmailDomain(param, options) {
        return this.api.getEmailDomain(param.emailDomainId, param.expand, options).toPromise();
    }
    /**
      * Lists all the Email Domains in your org
      * List all email domains
      * @param param the request object
      */
    listEmailDomains(param = {}, options) {
        return this.api.listEmailDomains(param.expand, options).toPromise();
    }
    /**
      * Replaces associated username and sender display name by `emailDomainId`
      * Replace an email domain
      * @param param the request object
      */
    replaceEmailDomain(param, options) {
        return this.api.replaceEmailDomain(param.emailDomainId, param.updateEmailDomain, param.expand, options).toPromise();
    }
    /**
      * Verifies an Email Domain by `emailDomainId`
      * Verify an email domain
      * @param param the request object
      */
    verifyEmailDomain(param, options) {
        return this.api.verifyEmailDomain(param.emailDomainId, options).toPromise();
    }
}
exports.ObjectEmailDomainApi = ObjectEmailDomainApi;
const ObservableAPI_30 = require("./ObservableAPI");
class ObjectEmailServerApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_30.ObservableEmailServerApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a custom email SMTP server configuration for your org
      * Create a custom SMTP server
      * @param param the request object
      */
    createEmailServer(param = {}, options) {
        return this.api.createEmailServer(param.emailServerPost, options).toPromise();
    }
    /**
      * Deletes the specified custom SMTP server configuration
      * Delete an SMTP server configuration
      * @param param the request object
      */
    deleteEmailServer(param, options) {
        return this.api.deleteEmailServer(param.emailServerId, options).toPromise();
    }
    /**
      * Retrieves the specified custom SMTP server configuration
      * Retrieve an SMTP server configuration
      * @param param the request object
      */
    getEmailServer(param, options) {
        return this.api.getEmailServer(param.emailServerId, options).toPromise();
    }
    /**
      * Lists all the enrolled custom SMTP server configurations
      * List all enrolled SMTP servers
      * @param param the request object
      */
    listEmailServers(param = {}, options) {
        return this.api.listEmailServers(options).toPromise();
    }
    /**
      * Tests the specified custom SMTP Server configuration
      * Test an SMTP server configuration
      * @param param the request object
      */
    testEmailServer(param, options) {
        return this.api.testEmailServer(param.emailServerId, param.emailTestAddresses, options).toPromise();
    }
    /**
      * Updates the specified custom SMTP server configuration
      * Update an SMTP server configuration
      * @param param the request object
      */
    updateEmailServer(param, options) {
        return this.api.updateEmailServer(param.emailServerId, param.emailServerRequest, options).toPromise();
    }
}
exports.ObjectEmailServerApi = ObjectEmailServerApi;
const ObservableAPI_31 = require("./ObservableAPI");
class ObjectEventHookApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_31.ObservableEventHookApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates the event hook that matches the provided `id`
      * Activate an event hook
      * @param param the request object
      */
    activateEventHook(param, options) {
        return this.api.activateEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Creates a new event hook for your organization in `ACTIVE` status. You pass an event hook object in the JSON payload of your request. That object represents the set of required information about the event hook you\'re registering, including:   * The URI of your external service   * The [events](https://developer.okta.com/docs/reference/api/event-types/) in Okta you want to subscribe to   * An optional event hook filter that can reduce the number of event hook calls. This is a self-service Early Access (EA) feature.     See [Create an event hook filter](https://developer.okta.com/docs/concepts/event-hooks/#create-an-event-hook-filter).      Additionally, you can specify a secret API key for Okta to pass to your external service endpoint for security verification. Note that the API key you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs. Optionally, you can specify extra headers that Okta passes to your external service with each call. Your external service must use a valid HTTPS endpoint.
      * Create an event hook
      * @param param the request object
      */
    createEventHook(param, options) {
        return this.api.createEventHook(param.eventHook, options).toPromise();
    }
    /**
      * Deactivates the event hook that matches the provided `id`
      * Deactivate an event hook
      * @param param the request object
      */
    deactivateEventHook(param, options) {
        return this.api.deactivateEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Deletes the event hook that matches the provided `id`. After deletion, the event hook is unrecoverable. As a safety precaution, you can only delete event hooks with a status of `INACTIVE`.
      * Delete an event hook
      * @param param the request object
      */
    deleteEventHook(param, options) {
        return this.api.deleteEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Retrieves an event hook
      * Retrieve an event hook
      * @param param the request object
      */
    getEventHook(param, options) {
        return this.api.getEventHook(param.eventHookId, options).toPromise();
    }
    /**
      * Lists all event hooks
      * List all event hooks
      * @param param the request object
      */
    listEventHooks(param = {}, options) {
        return this.api.listEventHooks(options).toPromise();
    }
    /**
      * Replaces an event hook. Okta validates the new properties before replacing the existing values. Some event hook properties are immutable and can\'t be updated. Refer to the parameter description in the request body schema.  >**Note:** Updating the `channel` property requires you to verify the hook again.
      * Replace an event hook
      * @param param the request object
      */
    replaceEventHook(param, options) {
        return this.api.replaceEventHook(param.eventHookId, param.eventHook, options).toPromise();
    }
    /**
      * Verifies that the event hook matches the provided `eventHookId`. To verify ownership, your endpoint must send information back to Okta in JSON format. See [Event hooks](https://developer.okta.com/docs/concepts/event-hooks/#one-time-verification-request).  Only `ACTIVE` and `VERIFIED` event hooks can receive events from Okta.  If a response is not received within 3 seconds, the outbound request times out. One retry is attempted after a timeout or error response. If a successful response still isn\'t received, this operation returns a 400 error with more information about the failure.
      * Verify an event hook
      * @param param the request object
      */
    verifyEventHook(param, options) {
        return this.api.verifyEventHook(param.eventHookId, options).toPromise();
    }
}
exports.ObjectEventHookApi = ObjectEventHookApi;
const ObservableAPI_32 = require("./ObservableAPI");
class ObjectFeatureApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_32.ObservableFeatureApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves a feature by ID
      * Retrieve a feature
      * @param param the request object
      */
    getFeature(param, options) {
        return this.api.getFeature(param.featureId, options).toPromise();
    }
    /**
      * Lists all feature dependencies for a specified feature.  A feature\'s dependencies are the features that it requires to be enabled in order for itself to be enabled.
      * List all dependencies
      * @param param the request object
      */
    listFeatureDependencies(param, options) {
        return this.api.listFeatureDependencies(param.featureId, options).toPromise();
    }
    /**
      * Lists all feature dependents for the specified feature.  A feature\'s dependents are the features that need to be disabled in order for the feature itself to be disabled.
      * List all dependents
      * @param param the request object
      */
    listFeatureDependents(param, options) {
        return this.api.listFeatureDependents(param.featureId, options).toPromise();
    }
    /**
      * Lists all self-service features for your org
      * List all features
      * @param param the request object
      */
    listFeatures(param = {}, options) {
        return this.api.listFeatures(options).toPromise();
    }
    /**
      * Updates a feature\'s lifecycle status. Use this endpoint to enable or disable a feature for your org.  Use the `mode=force` parameter to override dependency restrictions for a particular feature. Normally, you can\'t enable a feature if it has one or more dependencies that aren\'t enabled.  When you use the `mode=force` parameter while enabling a feature, Okta first tries to enable any disabled features that this feature may have as dependencies. If you don\'t pass the `mode=force` parameter and the feature has dependencies that need to be enabled before the feature is enabled, a 400 error is returned.  When you use the `mode=force` parameter while disabling a feature, Okta first tries to disable any enabled features that this feature may have as dependents. If you don\'t pass the `mode=force` parameter and the feature has dependents that need to be disabled before the feature is disabled, a 400 error is returned.  The following chart shows the different state transitions for a feature.  ![State transitions of a feature](../../../../../images/features/update-ssfeat-flowchart.png \'#width=500px;\')
      * Update a feature lifecycle
      * @param param the request object
      */
    updateFeatureLifecycle(param, options) {
        return this.api.updateFeatureLifecycle(param.featureId, param.lifecycle, param.mode, options).toPromise();
    }
}
exports.ObjectFeatureApi = ObjectFeatureApi;
const ObservableAPI_33 = require("./ObservableAPI");
class ObjectGovernanceBundleApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_33.ObservableGovernanceBundleApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a governance bundle of entitlements for the Admin Console
      * Create a governance bundle
      * @param param the request object
      */
    createGovernanceBundle(param, options) {
        return this.api.createGovernanceBundle(param.governanceBundleCreateRequest, options).toPromise();
    }
    /**
      * Deletes an Admin Console governance bundle
      * Delete a governance bundle
      * @param param the request object
      */
    deleteGovernanceBundle(param, options) {
        return this.api.deleteGovernanceBundle(param.bundleId, options).toPromise();
    }
    /**
      * Retrieves a governance bundle for the Admin Console
      * Retrieve a governance bundle
      * @param param the request object
      */
    getGovernanceBundle(param, options) {
        return this.api.getGovernanceBundle(param.bundleId, options).toPromise();
    }
    /**
      * Retrieves the entitlement management opt-in status for the Admin Console
      * Retrieve the Admin Console opt-in status
      * @param param the request object
      */
    getOptInStatus(param = {}, options) {
        return this.api.getOptInStatus(options).toPromise();
    }
    /**
      * Lists all entitlement values that are specific to a governance bundle entitlement
      * List all values for a governance bundle entitlement
      * @param param the request object
      */
    listBundleEntitlementValues(param, options) {
        return this.api.listBundleEntitlementValues(param.bundleId, param.entitlementId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all entitlements specific to a governance bundle
      * List all entitlements for a governance bundle
      * @param param the request object
      */
    listBundleEntitlements(param, options) {
        return this.api.listBundleEntitlements(param.bundleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all governance bundles for the Admin Console in your org
      * List all governance bundles
      * @param param the request object
      */
    listGovernanceBundles(param = {}, options) {
        return this.api.listGovernanceBundles(param.after, param.limit, options).toPromise();
    }
    /**
      * Opts in the Admin Console to entitlement management
      * Opt in the Admin Console to entitlement management
      * @param param the request object
      */
    optIn(param = {}, options) {
        return this.api.optIn(options).toPromise();
    }
    /**
      * Opts out the Admin Console from entitlement management
      * Opt out the Admin Console from entitlement management
      * @param param the request object
      */
    optOut(param = {}, options) {
        return this.api.optOut(options).toPromise();
    }
    /**
      * Replaces the properties of a governance bundle for the Admin Console
      * Replace a governance bundle
      * @param param the request object
      */
    replaceGovernanceBundle(param, options) {
        return this.api.replaceGovernanceBundle(param.bundleId, param.governanceBundleUpdateRequest, options).toPromise();
    }
}
exports.ObjectGovernanceBundleApi = ObjectGovernanceBundleApi;
const ObservableAPI_34 = require("./ObservableAPI");
class ObjectGroupApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_34.ObservableGroupApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a specific group rule by ID from your org
      * Activate a group rule
      * @param param the request object
      */
    activateGroupRule(param, options) {
        return this.api.activateGroupRule(param.ruleId, options).toPromise();
    }
    /**
      * Assigns a group owner
      * Assign a group owner
      * @param param the request object
      */
    assignGroupOwner(param, options) {
        return this.api.assignGroupOwner(param.groupId, param.GroupOwner, options).toPromise();
    }
    /**
      * Assigns a user to a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Assign a user to a group
      * @param param the request object
      */
    assignUserToGroup(param, options) {
        return this.api.assignUserToGroup(param.groupId, param.userId, options).toPromise();
    }
    /**
      * Adds a new group with the `OKTA_GROUP` type to your org. > **Note:** App import operations are responsible for syncing groups with `APP_GROUP` type such as Active Directory groups. See [About groups](https://help.okta.com/okta_help.htm?id=Directory_Groups) in the help documentation.
      * Add a group
      * @param param the request object
      */
    createGroup(param, options) {
        return this.api.createGroup(param.group, options).toPromise();
    }
    /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition. > **Note:** Group rules are created with the status set to `\'INACTIVE\'`.
      * Create a group rule
      * @param param the request object
      */
    createGroupRule(param, options) {
        return this.api.createGroupRule(param.groupRule, options).toPromise();
    }
    /**
      * Deactivates a specific group rule by ID from your org
      * Deactivate a group rule
      * @param param the request object
      */
    deactivateGroupRule(param, options) {
        return this.api.deactivateGroupRule(param.ruleId, options).toPromise();
    }
    /**
      * Deletes a group of the `OKTA_GROUP` or `APP_GROUP` type from your org. > **Note:** You can\'t remove groups of type `APP_GROUP` if they are used in a group push mapping.
      * Delete a group
      * @param param the request object
      */
    deleteGroup(param, options) {
        return this.api.deleteGroup(param.groupId, options).toPromise();
    }
    /**
      * Deletes a group owner from a specific group
      * Delete a group owner
      * @param param the request object
      */
    deleteGroupOwner(param, options) {
        return this.api.deleteGroupOwner(param.groupId, param.ownerId, options).toPromise();
    }
    /**
      * Deletes a specific group rule by `groupRuleId`
      * Delete a group rule
      * @param param the request object
      */
    deleteGroupRule(param, options) {
        return this.api.deleteGroupRule(param.ruleId, param.removeUsers, options).toPromise();
    }
    /**
      * Retrieves a specific group by `id` from your org
      * Retrieve a group
      * @param param the request object
      */
    getGroup(param, options) {
        return this.api.getGroup(param.groupId, options).toPromise();
    }
    /**
      * Retrieves a specific group rule by ID from your org
      * Retrieve a group rule
      * @param param the request object
      */
    getGroupRule(param, options) {
        return this.api.getGroupRule(param.ruleId, param.expand, options).toPromise();
    }
    /**
      * Lists all apps that are assigned to a group. See [Application Groups API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationGroups/).
      * List all assigned apps
      * @param param the request object
      */
    listAssignedApplicationsForGroup(param, options) {
        return this.api.listAssignedApplicationsForGroup(param.groupId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all owners for a specific group
      * List all group owners
      * @param param the request object
      */
    listGroupOwners(param, options) {
        return this.api.listGroupOwners(param.groupId, param.search, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all group rules for your org
      * List all group rules
      * @param param the request object
      */
    listGroupRules(param = {}, options) {
        return this.api.listGroupRules(param.limit, param.after, param.search, param.expand, options).toPromise();
    }
    /**
      * Lists all users that are a member of a group. The default user limit is set to a very high number due to historical reasons that are no longer valid for most orgs. This will change in a future version of this API. The recommended page limit is now `limit=200`.
      * List all member users
      * @param param the request object
      */
    listGroupUsers(param, options) {
        return this.api.listGroupUsers(param.groupId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all groups with pagination support.  > **Note:** To list all groups belonging to a member, use the [List all groups endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserGroups).  The number of groups returned depends on the specified [`limit`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!in=query&path=limit&t=request), if you have a search, filter, and/or query parameter set, and if that parameter is not null. We recommend using a limit less than or equal to 200.  A subset of groups can be returned that match a supported filter expression, query, or search criteria.  > **Note:** The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.
      * List all groups
      * @param param the request object
      */
    listGroups(param = {}, options) {
        return this.api.listGroups(param.search, param.filter, param.q, param.after, param.limit, param.expand, param.sortBy, param.sortOrder, options).toPromise();
    }
    /**
      * Replaces the profile for a group of `OKTA_GROUP` type from your org. > **Note :** You only can modify profiles for groups of the `OKTA_GROUP` type. > > App imports are responsible for updating profiles for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Replace a group
      * @param param the request object
      */
    replaceGroup(param, options) {
        return this.api.replaceGroup(param.groupId, param.group, options).toPromise();
    }
    /**
      * Replaces a group rule > **Notes:** You can only update rules with a group whose status is set to `INACTIVE`. > > You currently can\'t update the `actions` section.
      * Replace a group rule
      * @param param the request object
      */
    replaceGroupRule(param, options) {
        return this.api.replaceGroupRule(param.ruleId, param.groupRule, options).toPromise();
    }
    /**
      * Unassigns a user from a group with the `OKTA_GROUP` type. > **Note:** You only can modify memberships for groups of the `OKTA_GROUP` type. > > App imports are responsible for managing group memberships for groups of the `APP_GROUP` type, such as Active Directory groups.
      * Unassign a user from a group
      * @param param the request object
      */
    unassignUserFromGroup(param, options) {
        return this.api.unassignUserFromGroup(param.groupId, param.userId, options).toPromise();
    }
}
exports.ObjectGroupApi = ObjectGroupApi;
const ObservableAPI_35 = require("./ObservableAPI");
class ObjectGroupPushMappingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_35.ObservableGroupPushMappingApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates or links a group push mapping.  **Note:** Either `targetGroupId` or `targetGroupName` must be provided, but not both. If `targetGroupId` is provided, it links to an existing group. If `targetGroupName` is provided, it creates a new group.
      * Create a group push mapping
      * @param param the request object
      */
    createGroupPushMapping(param, options) {
        return this.api.createGroupPushMapping(param.appId, param.body, options).toPromise();
    }
    /**
      * Deletes a specific group push mapping. The group push mapping must be in an `INACTIVE` state.
      * Delete a group push mapping
      * @param param the request object
      */
    deleteGroupPushMapping(param, options) {
        return this.api.deleteGroupPushMapping(param.appId, param.mappingId, param.deleteTargetGroup, options).toPromise();
    }
    /**
      * Retrieves a group push mapping by ID
      * Retrieve a group push mapping
      * @param param the request object
      */
    getGroupPushMapping(param, options) {
        return this.api.getGroupPushMapping(param.appId, param.mappingId, options).toPromise();
    }
    /**
      * Lists all group push mappings with pagination support
      * List all group push mappings
      * @param param the request object
      */
    listGroupPushMappings(param, options) {
        return this.api.listGroupPushMappings(param.appId, param.after, param.limit, param.lastUpdated, param.sourceGroupId, param.status, options).toPromise();
    }
    /**
      * Updates the status of a group push mapping
      * Update a group push mapping
      * @param param the request object
      */
    updateGroupPushMapping(param, options) {
        return this.api.updateGroupPushMapping(param.appId, param.mappingId, param.body, options).toPromise();
    }
}
exports.ObjectGroupPushMappingApi = ObjectGroupPushMappingApi;
const ObservableAPI_36 = require("./ObservableAPI");
class ObjectHookKeyApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_36.ObservableHookKeyApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a key for use with other parts of the application, such as inline hooks  > **Note:**  Use the key name to access this key for inline hook operations.  The total number of keys that you can create in an Okta org is limited to 50.   The response is a [Key object](https://developer.okta.com/docs/reference/api/hook-keys/#key-object) that represents the   key that you create. The `id` property in the response serves as the unique ID for the key, which you can specify when   invoking other CRUD operations. The `keyId` provided in the response is the alias of the public key that you can use to get   details of the public key data in a separate call.  > **Note:** The keyId is the alias of the public key that you can use to retrieve the public key.
      * Create a key
      * @param param the request object
      */
    createHookKey(param, options) {
        return this.api.createHookKey(param.keyRequest, options).toPromise();
    }
    /**
      * Deletes a key by `id`. After being deleted, the key is unrecoverable.  As a safety precaution, only keys that aren\'t being used are eligible for deletion.
      * Delete a key
      * @param param the request object
      */
    deleteHookKey(param, options) {
        return this.api.deleteHookKey(param.hookKeyId, options).toPromise();
    }
    /**
      * Retrieves the public portion of the Key object using the `id` parameter  >**Note:** The `?expand=publickey` query parameter optionally returns the full object including the details of the public key in the response body\'s `_embedded` property.
      * Retrieve a key by ID
      * @param param the request object
      */
    getHookKey(param, options) {
        return this.api.getHookKey(param.hookKeyId, options).toPromise();
    }
    /**
      * Retrieves a public key by `keyId`  >**Note:** keyId is the alias of the public key.
      * Retrieve a public key
      * @param param the request object
      */
    getPublicKey(param, options) {
        return this.api.getPublicKey(param.keyId, options).toPromise();
    }
    /**
      * Lists all keys
      * List all keys
      * @param param the request object
      */
    listHookKeys(param = {}, options) {
        return this.api.listHookKeys(options).toPromise();
    }
    /**
      * Replaces a key by `id`  This request replaces existing properties after passing validation.  > **Note:** The only parameter that you can update is the name of the key, which must be unique at all times.
      * Replace a key
      * @param param the request object
      */
    replaceHookKey(param, options) {
        return this.api.replaceHookKey(param.hookKeyId, param.keyRequest, options).toPromise();
    }
}
exports.ObjectHookKeyApi = ObjectHookKeyApi;
const ObservableAPI_37 = require("./ObservableAPI");
class ObjectIdentityProviderApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_37.ObservableIdentityProviderApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates an inactive identity provider (IdP)
      * Activate an IdP
      * @param param the request object
      */
    activateIdentityProvider(param, options) {
        return this.api.activateIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Clones an X.509 certificate for an identity provider (IdP) signing key credential from a source IdP to target IdP > **Caution:** Sharing certificates isn\'t a recommended security practice.  > **Note:** If the key is already present in the list of key credentials for the target IdP, you receive a 400 error response.
      * Clone a signing key credential for IdP
      * @param param the request object
      */
    cloneIdentityProviderKey(param, options) {
        return this.api.cloneIdentityProviderKey(param.idpId, param.keyId, param.targetIdpId, options).toPromise();
    }
    /**
      * Creates a new identity provider (IdP) integration.  #### SAML 2.0 IdP  You must first add the IdP\'s signature certificate to the IdP key store before you can add a SAML 2.0 IdP with a `kid` credential reference.   Don\'t use `fromURI` to automatically redirect a user to a particular app after successfully authenticating with a third-party IdP. Instead, use SAML deep links. Using `fromURI` isn\'t tested or supported. For more information about using deep links when signing users in using an SP-initiated flow, see [Understanding SP-Initiated Login flow](https://developer.okta.com/docs/concepts/saml/#understanding-sp-initiated-login-flow).  Use SAML deep links to automatically redirect the user to an app after successfully authenticating with a third-party IdP. To use deep links, assemble these three parts into a URL:  * SP ACS URL<br> For example: `https://${yourOktaDomain}/sso/saml2/:idpId` * The app to which the user is automatically redirected after successfully authenticating with the IdP <br> For example: `/app/:app-location/:appId/sso/saml` * Optionally, if the app is an outbound SAML app, you can specify the `relayState` passed to it.<br> For example: `?RelayState=:anyUrlEncodedValue`  The deep link for the above three parts is:<br> `https://${yourOktaDomain}/sso/saml2/:idpId/app/:app-location/:appId/sso/saml?RelayState=:anyUrlEncodedValue`  #### Smart Card X509 IdP  You must first add the IdP\'s server certificate to the IdP key store before you can add a Smart Card `X509` IdP with a `kid` credential reference. You need to upload the whole trust chain as a single key using the [Key Store API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderKeys/#tag/IdentityProviderKeys/operation/createIdentityProviderKey). Depending on the information stored in the smart card, select the proper [template](https://developer.okta.com/docs/reference/okta-expression-language/#idp-user-profile) `idpuser.subjectAltNameEmail` or `idpuser.subjectAltNameUpn`.  #### Identity verification vendors as identity providers  Identity verification (IDV) vendors work like IdPs, with a few key differences. IDV vendors verify your user\'s identities by requiring them to submit a proof of identity. There are many ways to verify user identities. For example, a proof of identity can be a selfie to determine liveliness or it can be requiring users to submit a photo of their driver\'s license and matching that information with a database.  There are three IDV vendors (Persona, CLEAR Verified, and Incode) with specific configuration settings and another IDV vendor type (Custom IDV) that lets you create a custom IDV vendor, using a [standardized IDV process](https://developer.okta.com/docs/guides/idv-integration/main/). You can configure each of the IDV vendors as IdPs in your org by creating an account with the vendor, and then creating an IdP integration. Control how the IDVs verify your users by using [Okta account management policy rules](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).  * [Persona](https://withpersona.com/)  * [CLEAR Verified](https://www.clearme.com/)  * [Incode](https://incode.com/)  * [Custom IDV](https://help.okta.com/okta_help.htm?type=oie&id=idp-add-custom-idv-vendor)
      * Create an IdP
      * @param param the request object
      */
    createIdentityProvider(param, options) {
        return this.api.createIdentityProvider(param.identityProvider, options).toPromise();
    }
    /**
      * Creates a new X.509 certificate credential in the identity provider (IdP) key store > **Note:** RSA-based certificates are supported for all IdP types. Okta currently supports EC-based certificates only for the `X509` IdP type. For EC-based certificates we support only P-256, P-384, and P-521 curves.
      * Create an IdP key credential
      * @param param the request object
      */
    createIdentityProviderKey(param, options) {
        return this.api.createIdentityProviderKey(param.jsonWebKey, options).toPromise();
    }
    /**
      * Deactivates an active identity provider (IdP)
      * Deactivate an IdP
      * @param param the request object
      */
    deactivateIdentityProvider(param, options) {
        return this.api.deactivateIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Deletes an identity provider (IdP) integration by `idpId` * All existing IdP users are unlinked with the highest order profile source taking precedence for each IdP user. * Unlinked users keep their existing authentication provider such as `FEDERATION` or `SOCIAL`.
      * Delete an IdP
      * @param param the request object
      */
    deleteIdentityProvider(param, options) {
        return this.api.deleteIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Deletes a specific identity provider (IdP) key credential by `kid` if it isn\'t currently being used by an active or inactive IdP
      * Delete an IdP key credential
      * @param param the request object
      */
    deleteIdentityProviderKey(param, options) {
        return this.api.deleteIdentityProviderKey(param.keyId, options).toPromise();
    }
    /**
      * Generates a new key pair and returns a certificate signing request (CSR) for it > **Note:** The private key isn\'t listed in the [signing key credentials for the identity provider (IdP)](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderSigningKeys/#tag/IdentityProviderSigningKeys/operation/listIdentityProviderSigningKeys) until it\'s published.
      * Generate a certificate signing request
      * @param param the request object
      */
    generateCsrForIdentityProvider(param, options) {
        return this.api.generateCsrForIdentityProvider(param.idpId, param.metadata, options).toPromise();
    }
    /**
      * Generates a new X.509 certificate for an identity provider (IdP) signing key credential to be used for signing assertions sent to the IdP. IdP signing keys are read-only. > **Note:** To update an IdP with the newly generated key credential, [update your IdP](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider) using the returned key\'s `kid` in the [signing credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/credentials/signing/kid&t=request).
      * Generate a new signing key credential for IdP
      * @param param the request object
      */
    generateIdentityProviderSigningKey(param, options) {
        return this.api.generateIdentityProviderSigningKey(param.idpId, param.validityYears, options).toPromise();
    }
    /**
      * Retrieves a specific certificate signing request (CSR) by `id`
      * Retrieve a certificate signing request
      * @param param the request object
      */
    getCsrForIdentityProvider(param, options) {
        return this.api.getCsrForIdentityProvider(param.idpId, param.csrId, options).toPromise();
    }
    /**
      * Retrieves an identity provider (IdP) integration by `idpId`
      * Retrieve an IdP
      * @param param the request object
      */
    getIdentityProvider(param, options) {
        return this.api.getIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Retrieves a linked identity provider (IdP) user by ID
      * Retrieve a user for IdP
      * @param param the request object
      */
    getIdentityProviderApplicationUser(param, options) {
        return this.api.getIdentityProviderApplicationUser(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Retrieves a specific identity provider (IdP) key credential by `kid`
      * Retrieve an IdP key credential
      * @param param the request object
      */
    getIdentityProviderKey(param, options) {
        return this.api.getIdentityProviderKey(param.keyId, options).toPromise();
    }
    /**
      * Retrieves a specific identity provider (IdP) key credential by `kid`
      * Retrieve a signing key credential for IdP
      * @param param the request object
      */
    getIdentityProviderSigningKey(param, options) {
        return this.api.getIdentityProviderSigningKey(param.idpId, param.keyId, options).toPromise();
    }
    /**
      * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
      * Link a user to IdP
      * @param param the request object
      */
    linkUserToIdentityProvider(param, options) {
        return this.api.linkUserToIdentityProvider(param.idpId, param.userId, param.userIdentityProviderLinkRequest, options).toPromise();
    }
    /**
      * Lists the active signing key credential for an identity provider (IdP)
      * List the active signing key credential for IdP
      * @param param the request object
      */
    listActiveIdentityProviderSigningKey(param, options) {
        return this.api.listActiveIdentityProviderSigningKey(param.idpId, options).toPromise();
    }
    /**
      * Lists all certificate signing requests (CSRs) for an identity provider (IdP)
      * List all certificate signing requests
      * @param param the request object
      */
    listCsrsForIdentityProvider(param, options) {
        return this.api.listCsrsForIdentityProvider(param.idpId, options).toPromise();
    }
    /**
      * Lists all the users linked to an identity provider (IdP)
      * List all users for IdP
      * @param param the request object
      */
    listIdentityProviderApplicationUsers(param, options) {
        return this.api.listIdentityProviderApplicationUsers(param.idpId, param.q, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Lists all identity provider (IdP) key credentials
      * List all IdP key credentials
      * @param param the request object
      */
    listIdentityProviderKeys(param = {}, options) {
        return this.api.listIdentityProviderKeys(param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all signing key credentials for an identity provider (IdP)
      * List all signing key credentials for IdP
      * @param param the request object
      */
    listIdentityProviderSigningKeys(param, options) {
        return this.api.listIdentityProviderSigningKeys(param.idpId, options).toPromise();
    }
    /**
      * Lists all identity provider (IdP) integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all IdPs
      * @param param the request object
      */
    listIdentityProviders(param = {}, options) {
        return this.api.listIdentityProviders(param.q, param.after, param.limit, param.type, options).toPromise();
    }
    /**
      * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
      * List all tokens from OIDC IdP
      * @param param the request object
      */
    listSocialAuthTokens(param, options) {
        return this.api.listSocialAuthTokens(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Lists the identity providers (IdPs) associated with the user
      * List all IdPs for user
      * @param param the request object
      */
    listUserIdentityProviders(param, options) {
        return this.api.listUserIdentityProviders(param.userId, options).toPromise();
    }
    /**
      * Publishes the certificate signing request (CSR) with a signed X.509 certificate and adds it into the signing key credentials for the identity provider (IdP) > **Notes:** > * Publishing a certificate completes the lifecycle of the CSR, and it\'s no longer accessible. > * If the validity period of the certificate is less than 90 days, a 400 error response is returned.
      * Publish a certificate signing request
      * @param param the request object
      */
    publishCsrForIdentityProvider(param, options) {
        return this.api.publishCsrForIdentityProvider(param.idpId, param.csrId, param.body, options).toPromise();
    }
    /**
      * Replaces an identity provider (IdP) integration by `idpId`
      * Replace an IdP
      * @param param the request object
      */
    replaceIdentityProvider(param, options) {
        return this.api.replaceIdentityProvider(param.idpId, param.identityProvider, options).toPromise();
    }
    /**
      * Replaces an identity provider (IdP) key credential by `kid`
      * Replace an IdP key credential
      * @param param the request object
      */
    replaceIdentityProviderKey(param, options) {
        return this.api.replaceIdentityProviderKey(param.keyId, param.idPKeyCredential, options).toPromise();
    }
    /**
      * Revokes a certificate signing request (CSR) and deletes the key pair from the identity provider (IdP)
      * Revoke a certificate signing request
      * @param param the request object
      */
    revokeCsrForIdentityProvider(param, options) {
        return this.api.revokeCsrForIdentityProvider(param.idpId, param.csrId, options).toPromise();
    }
    /**
      * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
      * Unlink a user from IdP
      * @param param the request object
      */
    unlinkUserFromIdentityProvider(param, options) {
        return this.api.unlinkUserFromIdentityProvider(param.idpId, param.userId, options).toPromise();
    }
}
exports.ObjectIdentityProviderApi = ObjectIdentityProviderApi;
const ObservableAPI_38 = require("./ObservableAPI");
class ObjectIdentitySourceApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_38.ObservableIdentitySourceApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a group in an identity source for the given identity source instance
      * Create an identity source group
      * @param param the request object
      */
    createIdentitySourceGroups(param, options) {
        return this.api.createIdentitySourceGroups(param.identitySourceId, param.groupsRequestSchema, options).toPromise();
    }
    /**
      * Creates the group memberships for the given identity source group
      * Create the memberships for the given identity source group
      * @param param the request object
      */
    createIdentitySourceGroupsMemberships(param, options) {
        return this.api.createIdentitySourceGroupsMemberships(param.identitySourceId, param.groupOrExternalId, param.membershipRequestSchema, options).toPromise();
    }
    /**
      * Creates an identity source session for the given identity source instance
      * Create an identity source session
      * @param param the request object
      */
    createIdentitySourceSession(param, options) {
        return this.api.createIdentitySourceSession(param.identitySourceId, options).toPromise();
    }
    /**
      * Creates a user in an identity source for the given identity source instance
      * Create an identity source user
      * @param param the request object
      */
    createIdentitySourceUser(param, options) {
        return this.api.createIdentitySourceUser(param.identitySourceId, param.userRequestSchema, options).toPromise();
    }
    /**
      * Deletes a group in an identity source for a given identity source ID and group ID
      * Delete an identity source group
      * @param param the request object
      */
    deleteIdentitySourceGroup(param, options) {
        return this.api.deleteIdentitySourceGroup(param.identitySourceId, param.groupOrExternalId, options).toPromise();
    }
    /**
      * Deletes group memberships for the specified identity source group using member external IDs
      * Delete the memberships for the specified identity source group
      * @param param the request object
      */
    deleteIdentitySourceGroupMemberships(param, options) {
        return this.api.deleteIdentitySourceGroupMemberships(param.identitySourceId, param.groupOrExternalId, param.memberExternalId, options).toPromise();
    }
    /**
      * Deletes an identity source session for a given identity source ID and session Id
      * Delete an identity source session
      * @param param the request object
      */
    deleteIdentitySourceSession(param, options) {
        return this.api.deleteIdentitySourceSession(param.identitySourceId, param.sessionId, options).toPromise();
    }
    /**
      * Deletes a user in an identity source for the given identity source instance and external ID
      * Delete an identity source user
      * @param param the request object
      */
    deleteIdentitySourceUser(param, options) {
        return this.api.deleteIdentitySourceUser(param.identitySourceId, param.externalId, options).toPromise();
    }
    /**
      * Retrieves a group from an identity source for a given identity source ID and group ID or external ID
      * Retrieve an identity source group
      * @param param the request object
      */
    getIdentitySourceGroup(param, options) {
        return this.api.getIdentitySourceGroup(param.identitySourceId, param.groupOrExternalId, options).toPromise();
    }
    /**
      * Retrieves the group memberships for the given identity source group in the given identity source instance
      * Retrieve the memberships for the given identity source group
      * @param param the request object
      */
    getIdentitySourceGroupMemberships(param, options) {
        return this.api.getIdentitySourceGroupMemberships(param.identitySourceId, param.groupOrExternalId, param.after, param.limit, options).toPromise();
    }
    /**
      * Retrieves an identity source session for a given identity source ID and session ID
      * Retrieve an identity source session
      * @param param the request object
      */
    getIdentitySourceSession(param, options) {
        return this.api.getIdentitySourceSession(param.identitySourceId, param.sessionId, options).toPromise();
    }
    /**
      * Retrieves a user by external ID in an identity source for the given identity source instance
      * Retrieve an identity source user
      * @param param the request object
      */
    getIdentitySourceUser(param, options) {
        return this.api.getIdentitySourceUser(param.identitySourceId, param.externalId, options).toPromise();
    }
    /**
      * Lists all identity source sessions for the given identity source instance
      * List all identity source sessions
      * @param param the request object
      */
    listIdentitySourceSessions(param, options) {
        return this.api.listIdentitySourceSessions(param.identitySourceId, options).toPromise();
    }
    /**
      * Replaces an existing user for the given identity source instance and external ID
      * Replace an existing identity source user
      * @param param the request object
      */
    replaceExistingIdentitySourceUser(param, options) {
        return this.api.replaceExistingIdentitySourceUser(param.identitySourceId, param.externalId, param.userRequestSchema, options).toPromise();
    }
    /**
      * Starts the import from the identity source described by the uploaded bulk operations
      * Start the import from the identity source
      * @param param the request object
      */
    startImportFromIdentitySource(param, options) {
        return this.api.startImportFromIdentitySource(param.identitySourceId, param.sessionId, options).toPromise();
    }
    /**
      * Updates a group to an identity source for the given identity source instance and group ID
      * Update an identity source group
      * @param param the request object
      */
    updateIdentitySourceGroups(param, options) {
        return this.api.updateIdentitySourceGroups(param.identitySourceId, param.groupOrExternalId, param.groupsRequestSchema, options).toPromise();
    }
    /**
      * Updates a user to an identity source for the given identity source instance and external ID
      * Update an identity source user
      * @param param the request object
      */
    updateIdentitySourceUsers(param, options) {
        return this.api.updateIdentitySourceUsers(param.identitySourceId, param.externalId, param.usersUpdateRequestSchema, options).toPromise();
    }
    /**
      * Uploads external IDs of entities that need to be deleted in Okta from the identity source for the given session
      * Upload the data to be deleted in Okta
      * @param param the request object
      */
    uploadIdentitySourceDataForDelete(param, options) {
        return this.api.uploadIdentitySourceDataForDelete(param.identitySourceId, param.sessionId, param.BulkDeleteRequestBody, options).toPromise();
    }
    /**
      * Uploads entities that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the data to be upserted in Okta
      * @param param the request object
      */
    uploadIdentitySourceDataForUpsert(param, options) {
        return this.api.uploadIdentitySourceDataForUpsert(param.identitySourceId, param.sessionId, param.BulkUpsertRequestBody, options).toPromise();
    }
    /**
      * Uploads the group memberships that need to be deleted in Okta from the identity source for the given session
      * Upload the group memberships to be deleted in Okta
      * @param param the request object
      */
    uploadIdentitySourceGroupMembershipsForDelete(param, options) {
        return this.api.uploadIdentitySourceGroupMembershipsForDelete(param.identitySourceId, param.sessionId, param.bulkGroupMembershipsDeleteRequestBody, options).toPromise();
    }
    /**
      * Uploads the group memberships that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the group memberships to be upserted in Okta
      * @param param the request object
      */
    uploadIdentitySourceGroupMembershipsForUpsert(param, options) {
        return this.api.uploadIdentitySourceGroupMembershipsForUpsert(param.identitySourceId, param.sessionId, param.bulkGroupMembershipsUpsertRequestBody, options).toPromise();
    }
    /**
      * Uploads external IDs of groups that need to be deleted in Okta from the identity source for the given session
      * Upload the group external IDs to be deleted in Okta
      * @param param the request object
      */
    uploadIdentitySourceGroupsDataForDelete(param, options) {
        return this.api.uploadIdentitySourceGroupsDataForDelete(param.identitySourceId, param.sessionId, param.bulkGroupDeleteRequestBody, options).toPromise();
    }
    /**
      * Uploads the group profiles without memberships that need to be inserted or updated in Okta from the identity source for the given session
      * Upload the group profiles without memberships to be upserted in Okta
      * @param param the request object
      */
    uploadIdentitySourceGroupsForUpsert(param, options) {
        return this.api.uploadIdentitySourceGroupsForUpsert(param.identitySourceId, param.sessionId, param.bulkGroupUpsertRequestBody, options).toPromise();
    }
}
exports.ObjectIdentitySourceApi = ObjectIdentitySourceApi;
const ObservableAPI_39 = require("./ObservableAPI");
class ObjectInlineHookApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_39.ObservableInlineHookApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates the inline hook by `inlineHookId`
      * Activate an inline hook
      * @param param the request object
      */
    activateInlineHook(param, options) {
        return this.api.activateInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Creates an inline hook  This endpoint creates an inline hook for your org in an `ACTIVE` status. You need to pass an inline hooks object in the JSON payload of your request.  That object represents the set of required information about the inline hook that you\'re registering, including:  * The URI of your external service endpoint * The type of inline hook you\'re registering * The type of authentication you\'re registering  There are two authentication options that you can configure for your inline hook: HTTP headers and OAuth 2.0 tokens.  HTTP headers let you specify a secret API key that you want Okta to pass to your external service endpoint (so that your external service can check for its presence as a security measure).  >**Note:** The API key that you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs.  You can also optionally specify extra headers that you want Okta to pass to your external service with each call.  To configure HTTP header authentication, see parameters for the `config` object.  OAuth 2.0 tokens provide enhanced security between Okta and your external service. You can configure these tokens for the following types&mdash;client secret and private key.  >**Note:** Your external service\'s endpoint needs to be a valid HTTPS endpoint. The URI you specify should always begin with `https://`.  The total number of inline hooks that you can create in an Okta org is limited to 50, which is a combined total for any combination of inline hook types.
      * Create an inline hook
      * @param param the request object
      */
    createInlineHook(param, options) {
        return this.api.createInlineHook(param.inlineHook, options).toPromise();
    }
    /**
      * Deactivates the inline hook by `inlineHookId`
      * Deactivate an inline hook
      * @param param the request object
      */
    deactivateInlineHook(param, options) {
        return this.api.deactivateInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Deletes an inline hook by `inlineHookId`. After it\'s deleted, the inline hook is unrecoverable. As a safety precaution, only inline hooks with a status of `INACTIVE` are eligible for deletion.
      * Delete an inline hook
      * @param param the request object
      */
    deleteInlineHook(param, options) {
        return this.api.deleteInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Executes the inline hook that matches the provided `inlineHookId` by using the request body as the input. This inline hook sends the provided  data through the `channel` object and returns a response if it matches the correct data contract. Otherwise it returns an error. You need to  construct a JSON payload that matches the payloads that Okta would send to your external service for this inline hook type.  A timeout of three seconds is enforced on all outbound requests, with one retry in the event of a timeout or an error response from the remote system.  If a successful response isn\'t received after the request, a 400 error is returned with more information about what failed.  >**Note:** This execution endpoint isn\'t tied to any other functionality in Okta, and you should only use it for testing purposes.
      * Execute an inline hook
      * @param param the request object
      */
    executeInlineHook(param, options) {
        return this.api.executeInlineHook(param.inlineHookId, param.payloadData, options).toPromise();
    }
    /**
      * Retrieves an inline hook by `inlineHookId`
      * Retrieve an inline hook
      * @param param the request object
      */
    getInlineHook(param, options) {
        return this.api.getInlineHook(param.inlineHookId, options).toPromise();
    }
    /**
      * Lists all inline hooks or all inline hooks of a specific type.  When listing a specific inline hook, you need to specify its type. The following types are currently supported:   | Type Value                         | Name                                                           |   |------------------------------------|----------------------------------------------------------------|   | `com.okta.import.transform`        | [User import inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createUserImportInlineHook)       |   | `com.okta.oauth2.tokens.transform` | [Token inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTokenInlineHook)               |   | `com.okta.saml.tokens.transform`   | [SAML assertion inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createSAMLAssertionInlineHook)       |   | `com.okta.telephony.provider`      | [Telephony inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTelephonyInlineHook) |   | `com.okta.user.credential.password.import` | [Password import inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createPasswordImportInlineHook)|   | `com.okta.user.pre-registration`   | [Registration inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/create-registration-hook) |
      * List all inline hooks
      * @param param the request object
      */
    listInlineHooks(param = {}, options) {
        return this.api.listInlineHooks(param.type, options).toPromise();
    }
    /**
      * Replaces an inline hook by `inlineHookId`. The submitted inline hook properties replace the existing properties after passing validation.  >**Note:** Some properties are immutable and can\'t be updated.
      * Replace an inline hook
      * @param param the request object
      */
    replaceInlineHook(param, options) {
        return this.api.replaceInlineHook(param.inlineHookId, param.inlineHook, options).toPromise();
    }
    /**
      * Updates an inline hook by `inlineHookId`
      * Update an inline hook
      * @param param the request object
      */
    updateInlineHook(param, options) {
        return this.api.updateInlineHook(param.inlineHookId, param.inlineHook, options).toPromise();
    }
}
exports.ObjectInlineHookApi = ObjectInlineHookApi;
const ObservableAPI_40 = require("./ObservableAPI");
class ObjectLinkedObjectApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_40.ObservableLinkedObjectApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a Linked Object definition
      * Create a linked object definition
      * @param param the request object
      */
    createLinkedObjectDefinition(param, options) {
        return this.api.createLinkedObjectDefinition(param.linkedObject, options).toPromise();
    }
    /**
      * Deletes the Linked Object definition specified by either the `primary` or `associated` name. The entire definition is removed, regardless of which name that you specify.
      * Delete a linked object definition
      * @param param the request object
      */
    deleteLinkedObjectDefinition(param, options) {
        return this.api.deleteLinkedObjectDefinition(param.linkedObjectName, options).toPromise();
    }
    /**
      * Retrieves a Linked Object definition
      * Retrieve a linked object definition
      * @param param the request object
      */
    getLinkedObjectDefinition(param, options) {
        return this.api.getLinkedObjectDefinition(param.linkedObjectName, options).toPromise();
    }
    /**
      * Lists all Linked Object definitions
      * List all linked object definitions
      * @param param the request object
      */
    listLinkedObjectDefinitions(param = {}, options) {
        return this.api.listLinkedObjectDefinitions(options).toPromise();
    }
}
exports.ObjectLinkedObjectApi = ObjectLinkedObjectApi;
const ObservableAPI_41 = require("./ObservableAPI");
class ObjectLogStreamApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_41.ObservableLogStreamApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a log stream by `logStreamId`
      * Activate a log stream
      * @param param the request object
      */
    activateLogStream(param, options) {
        return this.api.activateLogStream(param.logStreamId, options).toPromise();
    }
    /**
      * Creates a new log stream object
      * Create a log stream
      * @param param the request object
      */
    createLogStream(param, options) {
        return this.api.createLogStream(param.instance, options).toPromise();
    }
    /**
      * Deactivates a log stream by `logStreamId`
      * Deactivate a log stream
      * @param param the request object
      */
    deactivateLogStream(param, options) {
        return this.api.deactivateLogStream(param.logStreamId, options).toPromise();
    }
    /**
      * Deletes a log stream object from your org by ID
      * Delete a log stream
      * @param param the request object
      */
    deleteLogStream(param, options) {
        return this.api.deleteLogStream(param.logStreamId, options).toPromise();
    }
    /**
      * Retrieves a log stream object by ID
      * Retrieve a log stream
      * @param param the request object
      */
    getLogStream(param, options) {
        return this.api.getLogStream(param.logStreamId, options).toPromise();
    }
    /**
      * Lists all log stream objects in your org. You can request a paginated list or a subset of log streams that match a supported filter expression.
      * List all log streams
      * @param param the request object
      */
    listLogStreams(param = {}, options) {
        return this.api.listLogStreams(param.after, param.limit, param.filter, options).toPromise();
    }
    /**
      * Replaces the log stream object properties for a given ID.  This operation is typically used to update the configuration of a log stream. Depending on the type of log stream you want to update, certain properties can\'t be modified after the log stream is initially created. Use the [Retrieve the log stream schema for the schema type](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Schema/#tag/Schema/operation/getLogStreamSchema) request to determine which properties you can update for the specific log stream type. Log stream properties with the `\"writeOnce\" : true` attribute can\'t be updated after creation. You must still specify these `writeOnce` properties in the request body with the original values in the PUT request.  > **Note:** You don\'t have to specify properties that have both the `\"writeOnce\": true` and the `\"writeOnly\": true` attributes in the PUT request body. These property values are ignored even if you add them in the PUT request body.
      * Replace a log stream
      * @param param the request object
      */
    replaceLogStream(param, options) {
        return this.api.replaceLogStream(param.logStreamId, param.instance, options).toPromise();
    }
}
exports.ObjectLogStreamApi = ObjectLogStreamApi;
const ObservableAPI_42 = require("./ObservableAPI");
class ObjectNetworkZoneApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_42.ObservableNetworkZoneApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a Network Zone by `zoneId`
      * Activate a network zone
      * @param param the request object
      */
    activateNetworkZone(param, options) {
        return this.api.activateNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Creates a Network Zone * For an IP Network Zone, you must define either `gateways` or `proxies`. * For a Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `proxyType`. * For an Enhanced Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `ipServiceCategories`. > **Note:** To view all properties for an Enhanced Dynamic Network Zone, select `DYNAMIC_V2` from the `type` dropdown list.
      * Create a network zone
      * @param param the request object
      */
    createNetworkZone(param, options) {
        return this.api.createNetworkZone(param.zone, options).toPromise();
    }
    /**
      * Deactivates a Network Zone by `zoneId`
      * Deactivate a network zone
      * @param param the request object
      */
    deactivateNetworkZone(param, options) {
        return this.api.deactivateNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Deletes a Network Zone by `zoneId` > **Notes:** > * You can\'t delete a Network Zone that\'s used by a [Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) or [Rule](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyRules). > * For Okta Identity Engine orgs, you can\'t delete a Network Zone with an ACTIVE `status`. <x-lifecycle class=\"oie\"></x-lifecycle>
      * Delete a network zone
      * @param param the request object
      */
    deleteNetworkZone(param, options) {
        return this.api.deleteNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Retrieves a Network Zone by `zoneId`
      * Retrieve a network zone
      * @param param the request object
      */
    getNetworkZone(param, options) {
        return this.api.getNetworkZone(param.zoneId, options).toPromise();
    }
    /**
      * Lists all Network Zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id`, `usage`, and `system` properties. See [Filter](https://developer.okta.com/docs/api/#filter) for more information on the expressions that are used in filtering.
      * List all network zones
      * @param param the request object
      */
    listNetworkZones(param = {}, options) {
        return this.api.listNetworkZones(param.after, param.limit, param.filter, options).toPromise();
    }
    /**
      * Replaces a Network Zone by `zoneId`. The replaced Network Zone type must be the same as the existing type. You can replace the usage (`POLICY`, `BLOCKLIST`) of a Network Zone by updating the `usage` attribute.  **IP exempt zone**<br> If you have the IP exempt zone feature enabled, you can allow traffic from specific gateway IPs irrespective of Okta ThreatInsight configurations, blocked network zones, or IP change events within Identity Threat Protection with Okta AI.<br> <br> When you enable this feature, Okta creates a zone called `DefaultExemptIpZone`. Gateway IPs that you add to this zone always have access to Okta resources. See [IP exempt zone](https://help.okta.com/okta_help.htm?type=oie&id=csh-about-ip-exempt-zone).  > **Note:** You can\'t add trusted proxy IPs to this zone, delete the zone, or create additional exempt IP zones.
      * Replace a network zone
      * @param param the request object
      */
    replaceNetworkZone(param, options) {
        return this.api.replaceNetworkZone(param.zoneId, param.zone, options).toPromise();
    }
}
exports.ObjectNetworkZoneApi = ObjectNetworkZoneApi;
const ObservableAPI_43 = require("./ObservableAPI");
class ObjectOAuth2ResourceServerCredentialsKeysApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_43.ObservableOAuth2ResourceServerCredentialsKeysApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a custom authorization server public JSON web key by key `id`. > **Note:** You can have only one active key at any given time for the authorization server. When you activate an inactive key, Okta automatically deactivates the current active key.
      * Activate a Custom Authorization Server Public JSON Web Key
      * @param param the request object
      */
    activateOAuth2ResourceServerJsonWebKey(param, options) {
        return this.api.activateOAuth2ResourceServerJsonWebKey(param.authServerId, param.keyId, options).toPromise();
    }
    /**
      * Adds a new JSON Web Key to the custom authorization server`s JSON web keys. > **Note:** This API doesn\'t allow you to add a key if the existing key doesn\'t have a `kid`. Use the [Replace an Authorization Server](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AuthorizationServer/#tag/AuthorizationServer/operation/replaceAuthorizationServer) operation to update the JWKS or [Delete a Custom Authorization Server Public JSON Web Key](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OAuth2ResourceServerCredentialsKeys/#tag/OAuth2ResourceServerCredentialsKeys/operation/deleteOAuth2ResourceServerJsonWebKey) and re-add the key with a `kid`. > **Note:** This API doesn\'t allow you to add a key with an ACTIVE status. You need to add an INACTIVE key first, and then ACTIVATE the key.
      * Add a JSON Web Key
      * @param param the request object
      */
    addOAuth2ResourceServerJsonWebKey(param, options) {
        return this.api.addOAuth2ResourceServerJsonWebKey(param.authServerId, param.oAuth2ResourceServerJsonWebKeyRequestBody, options).toPromise();
    }
    /**
      * Deactivates a custom authorization server public JSON web key by key `id`. > **Note:** Deactivating the active key isn\'t allowed if the authorization server has access token encryption enabled. You can activate another key, which makes the current key inactive.
      * Deactivate a Custom Authorization Server Public JSON Web Key
      * @param param the request object
      */
    deactivateOAuth2ResourceServerJsonWebKey(param, options) {
        return this.api.deactivateOAuth2ResourceServerJsonWebKey(param.authServerId, param.keyId, options).toPromise();
    }
    /**
      * Deletes a custom authorization server public JSON web key by key `id`. You can only delete an inactive key.
      * Delete a Custom Authorization Server Public JSON Web Key
      * @param param the request object
      */
    deleteOAuth2ResourceServerJsonWebKey(param, options) {
        return this.api.deleteOAuth2ResourceServerJsonWebKey(param.authServerId, param.keyId, options).toPromise();
    }
    /**
      * Retrieves a custom authorization server public JSON web key by key `id`
      * Retrieve a Custom Authorization Server Public JSON Web Key
      * @param param the request object
      */
    getOAuth2ResourceServerJsonWebKey(param, options) {
        return this.api.getOAuth2ResourceServerJsonWebKey(param.authServerId, param.keyId, options).toPromise();
    }
    /**
      * Lists all the public keys used by the custom authorization server
      * List all Custom Authorization Server Public JSON Web Keys
      * @param param the request object
      */
    listOAuth2ResourceServerJsonWebKeys(param, options) {
        return this.api.listOAuth2ResourceServerJsonWebKeys(param.authServerId, options).toPromise();
    }
}
exports.ObjectOAuth2ResourceServerCredentialsKeysApi = ObjectOAuth2ResourceServerCredentialsKeysApi;
const ObservableAPI_44 = require("./ObservableAPI");
class ObjectOktaApplicationSettingsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_44.ObservableOktaApplicationSettingsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the settings for an Okta app (also known as an Okta first-party app)
      * Retrieve the Okta application settings
      * @param param the request object
      */
    getFirstPartyAppSettings(param, options) {
        return this.api.getFirstPartyAppSettings(param.appName, options).toPromise();
    }
    /**
      * Replaces the settings for an Okta app (also known as an Okta first-party app)
      * Replace the Okta application settings
      * @param param the request object
      */
    replaceFirstPartyAppSettings(param, options) {
        return this.api.replaceFirstPartyAppSettings(param.appName, param.adminConsoleSettings, options).toPromise();
    }
}
exports.ObjectOktaApplicationSettingsApi = ObjectOktaApplicationSettingsApi;
const ObservableAPI_45 = require("./ObservableAPI");
class ObjectOktaManagedUserAccountApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_45.ObservableOktaManagedUserAccountApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new Okta managed user account for managing an Okta Universal Directory user as a privileged account.  You must specify an existing Okta user in your org with the `oktaUserId` request parameter. You can\'t modify the user\'s email or username because they\'re retrieved from the Okta user profile.
      * Create an Okta managed user account
      * @param param the request object
      */
    createOktaManagedUserAccount(param, options) {
        return this.api.createOktaManagedUserAccount(param.body, options).toPromise();
    }
    /**
      * Deletes an Okta managed user account specified by ID.  This operation removes the privileged account management for the Okta user, but doesn\'t delete the user from Okta Universal Directory.
      * Delete an Okta managed user account
      * @param param the request object
      */
    deleteOktaManagedUserAccount(param, options) {
        return this.api.deleteOktaManagedUserAccount(param.id, options).toPromise();
    }
    /**
      * Retrieves an Okta managed user account specified by ID
      * Retrieve an Okta managed user account
      * @param param the request object
      */
    getOktaManagedUserAccount(param, options) {
        return this.api.getOktaManagedUserAccount(param.id, options).toPromise();
    }
    /**
      * Lists all Okta managed user accounts in your org.  Use the `match` parameter to search for accounts where the account name (`name`), username (`username`),  or email (`email`) contains the specified value.
      * List all Okta managed user accounts
      * @param param the request object
      */
    listOktaManagedUserAccounts(param = {}, options) {
        return this.api.listOktaManagedUserAccounts(param.limit, param.after, param.match, options).toPromise();
    }
    /**
      * Updates an existing Okta managed user account specified by ID.  You can only update the `name`, `description`, `ownerUserIds`, and `ownerGroupIds` properties. You can\'t modify the `oktaUserId`, `username`, and `email` properties after the account is created.
      * Update an Okta managed user account
      * @param param the request object
      */
    updateOktaManagedUserAccount(param, options) {
        return this.api.updateOktaManagedUserAccount(param.id, param.body, options).toPromise();
    }
}
exports.ObjectOktaManagedUserAccountApi = ObjectOktaManagedUserAccountApi;
const ObservableAPI_46 = require("./ObservableAPI");
class ObjectOktaPersonalSettingsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_46.ObservableOktaPersonalSettingsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Lists all blocked email domains which are excluded from app migration
      * List all blocked email domains
      * @param param the request object
      */
    listPersonalAppsExportBlockList(param = {}, options) {
        return this.api.listPersonalAppsExportBlockList(options).toPromise();
    }
    /**
      * Replaces the list of blocked email domains which are excluded from app migration
      * Replace the blocked email domains
      * @param param the request object
      */
    replaceBlockedEmailDomains(param, options) {
        return this.api.replaceBlockedEmailDomains(param.personalAppsBlockList, options).toPromise();
    }
    /**
      * Replaces Okta Personal admin settings in a Workforce org
      * Replace the Okta Personal admin settings
      * @param param the request object
      */
    replaceOktaPersonalAdminSettings(param, options) {
        return this.api.replaceOktaPersonalAdminSettings(param.oktaPersonalAdminFeatureSettings, options).toPromise();
    }
}
exports.ObjectOktaPersonalSettingsApi = ObjectOktaPersonalSettingsApi;
const ObservableAPI_47 = require("./ObservableAPI");
class ObjectOperationsIntegrationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_47.ObservableOperationsIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves an asynchronous operation and its current status
      * Retrieve an operation status
      * @param param the request object
      */
    getOperationStatus(param, options) {
        return this.api.getOperationStatus(param.operationId, options).toPromise();
    }
}
exports.ObjectOperationsIntegrationApi = ObjectOperationsIntegrationApi;
const ObservableAPI_48 = require("./ObservableAPI");
class ObjectOrgCreatorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_48.ObservableOrgCreatorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates an org (child org) that has the same features as the current requesting org (parent org). A child org inherits any new features added to the parent org, but new features added to the child org aren\'t propagated back to the parent org. > **Notes:** > * Some features associated with products, such as Atspoke, Workflows, and Okta Identity Governance, aren\'t propagated to the child org. > * Wait at least 30 seconds after a 201-Created response before you make API requests to the new child org. > * For rate limits, see [Org creation rate limits](https://developer.okta.com/docs/reference/rl-additional-limits/#org-creation-rate-limits).
      * Create an org
      * @param param the request object
      */
    createChildOrg(param = {}, options) {
        return this.api.createChildOrg(param.childOrg, options).toPromise();
    }
}
exports.ObjectOrgCreatorApi = ObjectOrgCreatorApi;
const ObservableAPI_49 = require("./ObservableAPI");
class ObjectOrgSettingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_49.ObservableOrgSettingApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Assigns the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) as the default role for new public client apps
      * Assign the default public client app role setting
      * @param param the request object
      */
    assignClientPrivilegesSetting(param = {}, options) {
        return this.api.assignClientPrivilegesSetting(param.clientPrivilegesSetting, options).toPromise();
    }
    /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to extend Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Extend Okta Support access
      * @param param the request object
      */
    extendOktaSupport(param = {}, options) {
        return this.api.extendOktaSupport(options).toPromise();
    }
    /**
      * Retrieves the Okta Aerial consent grant details for your Org. Returns a 404 Not Found error if no consent has been granted.
      * Retrieve Okta Aerial consent for your org
      * @param param the request object
      */
    getAerialConsent(param = {}, options) {
        return this.api.getAerialConsent(options).toPromise();
    }
    /**
      * Retrieves the org setting to automatically assign the Okta Admin Console when an admin role is assigned
      * Retrieve the Okta Admin Console assignment setting
      * @param param the request object
      */
    getAutoAssignAdminAppSetting(param = {}, options) {
        return this.api.getAutoAssignAdminAppSetting(options).toPromise();
    }
    /**
      * Retrieves the org setting to assign the [Super Admin role](https://help.okta.com/okta_help.htm?type=oie&id=ext_superadmin) to new public client apps
      * Retrieve the default public client app role setting
      * @param param the request object
      */
    getClientPrivilegesSetting(param = {}, options) {
        return this.api.getClientPrivilegesSetting(options).toPromise();
    }
    /**
      * Retrieves Okta Communication Settings of your org
      * Retrieve the Okta communication settings
      * @param param the request object
      */
    getOktaCommunicationSettings(param = {}, options) {
        return this.api.getOktaCommunicationSettings(options).toPromise();
    }
    /**
      * Lists all org contact types for your Okta org
      * List all org contact types
      * @param param the request object
      */
    getOrgContactTypes(param = {}, options) {
        return this.api.getOrgContactTypes(options).toPromise();
    }
    /**
      * Retrieves the ID and the user resource associated with the specified contact type
      * Retrieve the contact type user
      * @param param the request object
      */
    getOrgContactUser(param, options) {
        return this.api.getOrgContactUser(param.contactType, options).toPromise();
    }
    /**
      * Retrieves Okta Support Settings for your org
      * Retrieve the Okta Support settings
      * @param param the request object
      */
    getOrgOktaSupportSettings(param = {}, options) {
        return this.api.getOrgOktaSupportSettings(options).toPromise();
    }
    /**
      * Retrieves preferences of your Okta org
      * Retrieve the org preferences
      * @param param the request object
      */
    getOrgPreferences(param = {}, options) {
        return this.api.getOrgPreferences(options).toPromise();
    }
    /**
      * Retrieves the Org General Settings
      * Retrieve the Org general settings
      * @param param the request object
      */
    getOrgSettings(param = {}, options) {
        return this.api.getOrgSettings(options).toPromise();
    }
    /**
      * Retrieves the third-party admin setting. See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
      * Retrieve the org third-party admin setting
      * @param param the request object
      */
    getThirdPartyAdminSetting(param = {}, options) {
        return this.api.getThirdPartyAdminSetting(options).toPromise();
    }
    /**
      * Retrieves the org metadata, which includes the org ID, configured custom domains, and authentication pipeline
      * Retrieve the Org metadata
      * @param param the request object
      */
    getWellknownOrgMetadata(param = {}, options) {
        return this.api.getWellknownOrgMetadata(options).toPromise();
    }
    /**
      * Grants an Okta Aerial account consent to manage your org. If the org is a child org, consent is taken from the parent org. Grant calls directly to the child are not allowed.
      * Grant Okta Aerial access to your org
      * @param param the request object
      */
    grantAerialConsent(param = {}, options) {
        return this.api.grantAerialConsent(param.orgAerialConsent, options).toPromise();
    }
    /**
      * Grants Okta Support temporary access to your org as an administrator for eight hours  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to grant Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Grant Okta Support access
      * @param param the request object
      */
    grantOktaSupport(param = {}, options) {
        return this.api.grantOktaSupport(options).toPromise();
    }
    /**
      * Lists all Okta Support cases that the requesting principal has permission to view
      * List all Okta Support cases
      * @param param the request object
      */
    listOktaSupportCases(param = {}, options) {
        return this.api.listOktaSupportCases(options).toPromise();
    }
    /**
      * Opts in all users of this org to Okta communication emails
      * Opt in to Okta user communication emails
      * @param param the request object
      */
    optInUsersToOktaCommunicationEmails(param = {}, options) {
        return this.api.optInUsersToOktaCommunicationEmails(options).toPromise();
    }
    /**
      * Opts out all users of this org from Okta communication emails
      * Opt out of Okta user communication emails
      * @param param the request object
      */
    optOutUsersFromOktaCommunicationEmails(param = {}, options) {
        return this.api.optOutUsersFromOktaCommunicationEmails(options).toPromise();
    }
    /**
      * Replaces the user associated with the specified contact type
      * Replace the contact type user
      * @param param the request object
      */
    replaceOrgContactUser(param, options) {
        return this.api.replaceOrgContactUser(param.contactType, param.orgContactUser, options).toPromise();
    }
    /**
      * Replaces the Org General Settings for your Okta org
      * Replace the Org general settings
      * @param param the request object
      */
    replaceOrgSettings(param, options) {
        return this.api.replaceOrgSettings(param.OrgSetting, options).toPromise();
    }
    /**
      * Revokes access of an Okta Aerial account to your Org. The revoke operation will fail if the org has already been added to an Aerial account.
      * Revoke Okta Aerial access to your org
      * @param param the request object
      */
    revokeAerialConsent(param = {}, options) {
        return this.api.revokeAerialConsent(param.orgAerialConsent, options).toPromise();
    }
    /**
      * Revokes Okta Support access to your org  > **Note:** This resource is deprecated. Use the [Update an Okta Support case](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OrgSettingSupport/#tag/OrgSettingSupport/operation/updateOktaSupportCase) resource to revoke Okta Support access for a support case. > For the corresponding Okta Admin Console feature, see [Give access to Okta Support](https://help.okta.com/okta_help.htm?type=oie&id=settings-support-access).
      * Revoke Okta Support access
      * @param param the request object
      */
    revokeOktaSupport(param = {}, options) {
        return this.api.revokeOktaSupport(options).toPromise();
    }
    /**
      * Updates the org setting to automatically assign the Okta Admin Console when an admin role is assigned  > **Note:** This setting doesn\'t apply to the `SUPER_ADMIN` role. > When you assign the `SUPER_ADMIN` role to a user, the Admin Console is always assigned to the user regardless of the `autoAssignAdminAppSetting` setting.
      * Update the Okta Admin Console assignment setting
      * @param param the request object
      */
    updateAutoAssignAdminAppSetting(param = {}, options) {
        return this.api.updateAutoAssignAdminAppSetting(param.autoAssignAdminAppSetting, options).toPromise();
    }
    /**
      * Updates access to the org for an Okta Support case:  * You can enable, disable, or extend access to your org for an Okta Support case.  * You can approve Okta Support access to your org for self-assigned cases. A self-assigned case is created and assigned by the same Okta Support user.
      * Update an Okta Support case
      * @param param the request object
      */
    updateOktaSupportCase(param, options) {
        return this.api.updateOktaSupportCase(param.caseNumber, param.oktaSupportCase, options).toPromise();
    }
    /**
      * Sets the preference to hide the Okta End-User Dashboard footer for all end users of your org
      * Set the hide dashboard footer preference
      * @param param the request object
      */
    updateOrgHideOktaUIFooter(param = {}, options) {
        return this.api.updateOrgHideOktaUIFooter(options).toPromise();
    }
    /**
      * Updates partial Org General Settings
      * Update the Org general settings
      * @param param the request object
      */
    updateOrgSettings(param = {}, options) {
        return this.api.updateOrgSettings(param.OrgSetting, options).toPromise();
    }
    /**
      * Sets the preference to show the Okta UI footer for all end users of your org
      * Set the show dashboard footer preference
      * @param param the request object
      */
    updateOrgShowOktaUIFooter(param = {}, options) {
        return this.api.updateOrgShowOktaUIFooter(options).toPromise();
    }
    /**
      * Updates the third-party admin setting. This setting allows third-party admins to perform administrative actions in the Admin Console, but they can\'t do any of the following:   * Receive Okta admin email notifications   * Contact Okta support   * Sign in to the Okta Help Center  See [Configure third-party administrators](https://help.okta.com/okta_help.htm?type=oie&id=csh_admin-third) in the Okta product documentation.
      * Update the org third-party admin setting
      * @param param the request object
      */
    updateThirdPartyAdminSetting(param, options) {
        return this.api.updateThirdPartyAdminSetting(param.thirdPartyAdminSetting, options).toPromise();
    }
    /**
      * Uploads and replaces the logo for your organization
      * Upload the org logo
      * @param param the request object
      */
    uploadOrgLogo(param, options) {
        return this.api.uploadOrgLogo(param.file, options).toPromise();
    }
}
exports.ObjectOrgSettingApi = ObjectOrgSettingApi;
const ObservableAPI_50 = require("./ObservableAPI");
class ObjectPolicyApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_50.ObservablePolicyApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a policy
      * Activate a policy
      * @param param the request object
      */
    activatePolicy(param, options) {
        return this.api.activatePolicy(param.policyId, options).toPromise();
    }
    /**
      * Activates a policy rule identified by `policyId` and `ruleId`
      * Activate a policy rule
      * @param param the request object
      */
    activatePolicyRule(param, options) {
        return this.api.activatePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Clones an existing policy
      * Clone an existing policy
      * @param param the request object
      */
    clonePolicy(param, options) {
        return this.api.clonePolicy(param.policyId, options).toPromise();
    }
    /**
      * Creates a policy. There are many types of policies that you can create. See [Policies](https://developer.okta.com/docs/concepts/policies/) for an overview of the types of policies available and links to more indepth information.
      * Create a policy
      * @param param the request object
      */
    createPolicy(param, options) {
        return this.api.createPolicy(param.policy, param.activate, options).toPromise();
    }
    /**
      * Creates a policy rule  > **Note:** You can\'t create additional rules for the `PROFILE_ENROLLMENT` or `POST_AUTH_SESSION` policies.
      * Create a policy rule
      * @param param the request object
      */
    createPolicyRule(param, options) {
        return this.api.createPolicyRule(param.policyId, param.policyRule, param.limit, param.activate, options).toPromise();
    }
    /**
      * Creates a policy or policy rule simulation. The access simulation evaluates policy and policy rules based on the existing policy rule configuration. The evaluation result simulates what the real-world authentication flow is and what policy rules have been applied or matched to the authentication flow.
      * Create a policy simulation
      * @param param the request object
      */
    createPolicySimulation(param, options) {
        return this.api.createPolicySimulation(param.simulatePolicy, param.expand, options).toPromise();
    }
    /**
      * Deactivates a policy
      * Deactivate a policy
      * @param param the request object
      */
    deactivatePolicy(param, options) {
        return this.api.deactivatePolicy(param.policyId, options).toPromise();
    }
    /**
      * Deactivates a policy rule identified by `policyId` and `ruleId`
      * Deactivate a policy rule
      * @param param the request object
      */
    deactivatePolicyRule(param, options) {
        return this.api.deactivatePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Deletes a policy
      * Delete a policy
      * @param param the request object
      */
    deletePolicy(param, options) {
        return this.api.deletePolicy(param.policyId, options).toPromise();
    }
    /**
      * Deletes the resource mapping for a policy identified by `policyId` and `mappingId`
      * Delete a policy resource mapping
      * @param param the request object
      */
    deletePolicyResourceMapping(param, options) {
        return this.api.deletePolicyResourceMapping(param.policyId, param.mappingId, options).toPromise();
    }
    /**
      * Deletes a policy rule identified by `policyId` and `ruleId`
      * Delete a policy rule
      * @param param the request object
      */
    deletePolicyRule(param, options) {
        return this.api.deletePolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Retrieves a policy
      * Retrieve a policy
      * @param param the request object
      */
    getPolicy(param, options) {
        return this.api.getPolicy(param.policyId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a resource mapping for a policy identified by `policyId` and `mappingId`
      * Retrieve a policy resource mapping
      * @param param the request object
      */
    getPolicyMapping(param, options) {
        return this.api.getPolicyMapping(param.policyId, param.mappingId, options).toPromise();
    }
    /**
      * Retrieves a policy rule
      * Retrieve a policy rule
      * @param param the request object
      */
    getPolicyRule(param, options) {
        return this.api.getPolicyRule(param.policyId, param.ruleId, options).toPromise();
    }
    /**
      * Lists all policies with the specified type
      * List all policies
      * @param param the request object
      */
    listPolicies(param, options) {
        return this.api.listPolicies(param.type, param.status, param.q, param.expand, param.sortBy, param.limit, param.resourceId, param.after, options).toPromise();
    }
    /**
      * Lists all applications mapped to a policy identified by `policyId`  > **Note:** Use [List all resources mapped to a Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyMappings) to list all applications mapped to a policy.
      * List all apps mapped to a policy
      * @param param the request object
      */
    listPolicyApps(param, options) {
        return this.api.listPolicyApps(param.policyId, options).toPromise();
    }
    /**
      * Lists all resources mapped to a policy identified by `policyId`
      * List all resources mapped to a policy
      * @param param the request object
      */
    listPolicyMappings(param, options) {
        return this.api.listPolicyMappings(param.policyId, options).toPromise();
    }
    /**
      * Lists all policy rules
      * List all policy rules
      * @param param the request object
      */
    listPolicyRules(param, options) {
        return this.api.listPolicyRules(param.policyId, param.limit, options).toPromise();
    }
    /**
      * Maps a resource to a policy identified by `policyId`  > **Note:** Use the [Assign an app sign-in policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationPolicies/#tag/ApplicationPolicies/operation/assignApplicationPolicy) endpoint to assign an app sign-in policy to an app.
      * Map a resource to a policy
      * @param param the request object
      */
    mapResourceToPolicy(param, options) {
        return this.api.mapResourceToPolicy(param.policyId, param.policyMappingRequest, options).toPromise();
    }
    /**
      * Replaces the properties of a policy identified by `policyId`
      * Replace a policy
      * @param param the request object
      */
    replacePolicy(param, options) {
        return this.api.replacePolicy(param.policyId, param.policy, options).toPromise();
    }
    /**
      * Replaces the properties for a policy rule identified by `policyId` and `ruleId`
      * Replace a policy rule
      * @param param the request object
      */
    replacePolicyRule(param, options) {
        return this.api.replacePolicyRule(param.policyId, param.ruleId, param.policyRule, options).toPromise();
    }
}
exports.ObjectPolicyApi = ObjectPolicyApi;
const ObservableAPI_51 = require("./ObservableAPI");
class ObjectPrincipalRateLimitApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_51.ObservablePrincipalRateLimitApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new principal rate limit entity. Okta only allows one principal rate limit entity per org and principal.
      * Create a principal rate limit
      * @param param the request object
      */
    createPrincipalRateLimitEntity(param, options) {
        return this.api.createPrincipalRateLimitEntity(param.entity, options).toPromise();
    }
    /**
      * Retrieves a principal rate limit entity by `principalRateLimitId`
      * Retrieve a principal rate limit
      * @param param the request object
      */
    getPrincipalRateLimitEntity(param, options) {
        return this.api.getPrincipalRateLimitEntity(param.principalRateLimitId, options).toPromise();
    }
    /**
      * Lists all Principal Rate Limit entities considering the provided parameters
      * List all principal rate limits
      * @param param the request object
      */
    listPrincipalRateLimitEntities(param, options) {
        return this.api.listPrincipalRateLimitEntities(param.filter, param.after, param.limit, options).toPromise();
    }
    /**
      * Replaces a principal rate limit entity by `principalRateLimitId`
      * Replace a principal rate limit
      * @param param the request object
      */
    replacePrincipalRateLimitEntity(param, options) {
        return this.api.replacePrincipalRateLimitEntity(param.principalRateLimitId, param.entity, options).toPromise();
    }
}
exports.ObjectPrincipalRateLimitApi = ObjectPrincipalRateLimitApi;
const ObservableAPI_52 = require("./ObservableAPI");
class ObjectPrivilegedResourceApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_52.ObservablePrivilegedResourceApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Claims a specified privileged resource for management. This also marks the `status` as `ACTIVE`.
      * Claim a privileged resource for management
      * @param param the request object
      */
    claimPrivilegedResource(param, options) {
        return this.api.claimPrivilegedResource(param.id, options).toPromise();
    }
    /**
      * Creates a privileged resource either in Okta or for a specified external app. After creation, the `status` param is set to `CREATED`.
      * Create a privileged resource
      * @param param the request object
      */
    createPrivilegedResource(param, options) {
        return this.api.createPrivilegedResource(param.privilegedResource, options).toPromise();
    }
    /**
      * Deletes a privileged resource specified by ID. This also marks the `status` as `INACTIVE`.
      * Delete a privileged resource
      * @param param the request object
      */
    deletePrivilegedResource(param, options) {
        return this.api.deletePrivilegedResource(param.id, options).toPromise();
    }
    /**
      * Retrieves a privileged resource specified by ID
      * Retrieve a privileged resource
      * @param param the request object
      */
    getPrivilegedResource(param, options) {
        return this.api.getPrivilegedResource(param.id, options).toPromise();
    }
    /**
      * Retrieves privileged resources that were filtered based on the search and filtering criteria specified in the query parameters
      * Retrieve the privileged resources
      * @param param the request object
      */
    getPrivilegedResources(param, options) {
        return this.api.getPrivilegedResources(param.containerId, param.lastUpdated, param.status, param.limit, param.after, options).toPromise();
    }
    /**
      * Prepares the privileged resources by scanning imported app users and applying the privileged resource filtering criteria.  If the request contains the `lastUpdated` parameter, the privileged resource criteria filters out the imported app users that were last updated after the timestamp.  The value of the `lastUpdated` query parameter should be what the client received in the `ETag` header included in the last response of the previous resource fetch cycle.
      * Prepare the privileged resources
      * @param param the request object
      */
    preparePrivilegedResourcesToBeFetched(param, options) {
        return this.api.preparePrivilegedResourcesToBeFetched(param.containerId, param.lastUpdated, options).toPromise();
    }
    /**
      * Replaces or creates filters used to identify privileged resources. These filters are used during the privileged resource retrieval operation.
      * Replace the filters
      * @param param the request object
      */
    replaceFiltersForPrivilegedResourceIdentification(param, options) {
        return this.api.replaceFiltersForPrivilegedResourceIdentification(param.containerId, param.privilegedResourceFilters, options).toPromise();
    }
    /**
      * Replaces a privileged resource specified by ID
      * Replace a privileged resource
      * @param param the request object
      */
    replacePrivilegedResource(param, options) {
        return this.api.replacePrivilegedResource(param.id, param.privilegedResourceUpdateRequest, options).toPromise();
    }
    /**
      * Rotates the password for a specified privileged resource
      * Rotate the password for a privileged resource
      * @param param the request object
      */
    rotatePasswordForPrivilegedResource(param, options) {
        return this.api.rotatePasswordForPrivilegedResource(param.id, param.rotatePasswordRequest, options).toPromise();
    }
}
exports.ObjectPrivilegedResourceApi = ObjectPrivilegedResourceApi;
const ObservableAPI_53 = require("./ObservableAPI");
class ObjectProfileMappingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_53.ObservableProfileMappingApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves a single profile mapping referenced by its ID
      * Retrieve a profile mapping
      * @param param the request object
      */
    getProfileMapping(param, options) {
        return this.api.getProfileMapping(param.mappingId, options).toPromise();
    }
    /**
      * Lists all profile mappings in your org with [pagination](https://developer.okta.com/docs/api/#pagination). You can return a subset of profile mappings that match a supported `sourceId` and/or `targetId`.  The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the Link header contains a `next` link that you should treat as an opaque value (follow it, don\'t parse it). See [Link Header](https://developer.okta.com/docs/api/#link-header).  The response is a collection of profile mappings that include a subset of the profile mapping object\'s parameters. The profile mapping object describes the properties mapping between an Okta user and an app user profile using [JSON Schema Draft 4](https://datatracker.ietf.org/doc/html/draft-zyp-json-schema-04).
      * List all profile mappings
      * @param param the request object
      */
    listProfileMappings(param = {}, options) {
        return this.api.listProfileMappings(param.after, param.limit, param.sourceId, param.targetId, options).toPromise();
    }
    /**
      * Updates an existing profile mapping by adding, updating, or removing one or many property mappings
      * Update a profile mapping
      * @param param the request object
      */
    updateProfileMapping(param, options) {
        return this.api.updateProfileMapping(param.mappingId, param.profileMapping, options).toPromise();
    }
}
exports.ObjectProfileMappingApi = ObjectProfileMappingApi;
const ObservableAPI_54 = require("./ObservableAPI");
class ObjectPushProviderApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_54.ObservablePushProviderApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new push provider. Each Push Provider must have a unique `name`.
      * Create a push provider
      * @param param the request object
      */
    createPushProvider(param, options) {
        return this.api.createPushProvider(param.pushProvider, options).toPromise();
    }
    /**
      * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
      * Delete a push provider
      * @param param the request object
      */
    deletePushProvider(param, options) {
        return this.api.deletePushProvider(param.pushProviderId, options).toPromise();
    }
    /**
      * Retrieves a push provider by `pushProviderId`
      * Retrieve a push provider
      * @param param the request object
      */
    getPushProvider(param, options) {
        return this.api.getPushProvider(param.pushProviderId, options).toPromise();
    }
    /**
      * Lists all push providers
      * List all push providers
      * @param param the request object
      */
    listPushProviders(param = {}, options) {
        return this.api.listPushProviders(param.type, options).toPromise();
    }
    /**
      * Replaces a push provider by `pushProviderId`
      * Replace a push provider
      * @param param the request object
      */
    replacePushProvider(param, options) {
        return this.api.replacePushProvider(param.pushProviderId, param.pushProvider, options).toPromise();
    }
}
exports.ObjectPushProviderApi = ObjectPushProviderApi;
const ObservableAPI_55 = require("./ObservableAPI");
class ObjectRateLimitSettingsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_55.ObservableRateLimitSettingsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the currently configured Rate Limit Admin Notification Settings
      * Retrieve the rate limit admin notification settings
      * @param param the request object
      */
    getRateLimitSettingsAdminNotifications(param = {}, options) {
        return this.api.getRateLimitSettingsAdminNotifications(options).toPromise();
    }
    /**
      * Retrieves the currently configured Per-Client Rate Limit Settings
      * Retrieve the per-client rate limit settings
      * @param param the request object
      */
    getRateLimitSettingsPerClient(param = {}, options) {
        return this.api.getRateLimitSettingsPerClient(options).toPromise();
    }
    /**
      * Retrieves the currently configured threshold for warning notifications when the API\'s rate limit is exceeded
      * Retrieve the rate limit warning threshold percentage
      * @param param the request object
      */
    getRateLimitSettingsWarningThreshold(param = {}, options) {
        return this.api.getRateLimitSettingsWarningThreshold(options).toPromise();
    }
    /**
      * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
      * Replace the rate limit admin notification settings
      * @param param the request object
      */
    replaceRateLimitSettingsAdminNotifications(param, options) {
        return this.api.replaceRateLimitSettingsAdminNotifications(param.RateLimitAdminNotifications, options).toPromise();
    }
    /**
      * Replaces the Per-Client Rate Limit Settings and returns the configured properties
      * Replace the per-client rate limit settings
      * @param param the request object
      */
    replaceRateLimitSettingsPerClient(param, options) {
        return this.api.replaceRateLimitSettingsPerClient(param.perClientRateLimitSettings, options).toPromise();
    }
    /**
      * Replaces the Rate Limit Warning Threshold Percentage and returns the configured property
      * Replace the rate limit warning threshold percentage
      * @param param the request object
      */
    replaceRateLimitSettingsWarningThreshold(param = {}, options) {
        return this.api.replaceRateLimitSettingsWarningThreshold(param.rateLimitWarningThreshold, options).toPromise();
    }
}
exports.ObjectRateLimitSettingsApi = ObjectRateLimitSettingsApi;
const ObservableAPI_56 = require("./ObservableAPI");
class ObjectRealmApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_56.ObservableRealmApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new realm
      * Create a realm
      * @param param the request object
      */
    createRealm(param, options) {
        return this.api.createRealm(param.body, options).toPromise();
    }
    /**
      * Deletes a realm permanently. This operation can only be performed after disassociating other entities like users and identity providers from a realm.
      * Delete a realm
      * @param param the request object
      */
    deleteRealm(param, options) {
        return this.api.deleteRealm(param.realmId, options).toPromise();
    }
    /**
      * Retrieves a realm
      * Retrieve a realm
      * @param param the request object
      */
    getRealm(param, options) {
        return this.api.getRealm(param.realmId, options).toPromise();
    }
    /**
      * Lists all realms.  > **Note:** The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.
      * List all realms
      * @param param the request object
      */
    listRealms(param = {}, options) {
        return this.api.listRealms(param.limit, param.after, param.search, param.sortBy, param.sortOrder, options).toPromise();
    }
    /**
      * Replaces the realm profile
      * Replace the realm profile
      * @param param the request object
      */
    replaceRealm(param, options) {
        return this.api.replaceRealm(param.realmId, param.body, options).toPromise();
    }
}
exports.ObjectRealmApi = ObjectRealmApi;
const ObservableAPI_57 = require("./ObservableAPI");
class ObjectRealmAssignmentApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_57.ObservableRealmAssignmentApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a realm assignment
      * Activate a realm assignment
      * @param param the request object
      */
    activateRealmAssignment(param, options) {
        return this.api.activateRealmAssignment(param.assignmentId, options).toPromise();
    }
    /**
      * Creates a new realm assignment
      * Create a realm assignment
      * @param param the request object
      */
    createRealmAssignment(param, options) {
        return this.api.createRealmAssignment(param.body, options).toPromise();
    }
    /**
      * Deactivates a realm assignment
      * Deactivate a realm assignment
      * @param param the request object
      */
    deactivateRealmAssignment(param, options) {
        return this.api.deactivateRealmAssignment(param.assignmentId, options).toPromise();
    }
    /**
      * Deletes a realm assignment
      * Delete a realm assignment
      * @param param the request object
      */
    deleteRealmAssignment(param, options) {
        return this.api.deleteRealmAssignment(param.assignmentId, options).toPromise();
    }
    /**
      * Executes a realm assignment
      * Execute a realm assignment
      * @param param the request object
      */
    executeRealmAssignment(param, options) {
        return this.api.executeRealmAssignment(param.body, options).toPromise();
    }
    /**
      * Retrieves a realm assignment
      * Retrieve a realm assignment
      * @param param the request object
      */
    getRealmAssignment(param, options) {
        return this.api.getRealmAssignment(param.assignmentId, options).toPromise();
    }
    /**
      * Lists all realm assignment operations. The upper limit is 200 and operations are sorted in descending order from most recent to oldest by ID.
      * List all realm assignment operations
      * @param param the request object
      */
    listRealmAssignmentOperations(param = {}, options) {
        return this.api.listRealmAssignmentOperations(param.limit, param.after, options).toPromise();
    }
    /**
      * Lists all realm assignments
      * List all realm assignments
      * @param param the request object
      */
    listRealmAssignments(param = {}, options) {
        return this.api.listRealmAssignments(param.limit, param.after, options).toPromise();
    }
    /**
      * Replaces a realm assignment
      * Replace a realm assignment
      * @param param the request object
      */
    replaceRealmAssignment(param, options) {
        return this.api.replaceRealmAssignment(param.assignmentId, param.body, options).toPromise();
    }
}
exports.ObjectRealmAssignmentApi = ObjectRealmAssignmentApi;
const ObservableAPI_58 = require("./ObservableAPI");
class ObjectResourceSetApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_58.ObservableResourceSetApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Adds more members to a role resource set binding
      * Add more role resource set binding members
      * @param param the request object
      */
    addMembersToBinding(param, options) {
        return this.api.addMembersToBinding(param.resourceSetId, param.roleIdOrLabel, param.instance, options).toPromise();
    }
    /**
      * Adds a resource with conditions for a resource set
      * Add a resource set resource with conditions
      * @param param the request object
      */
    addResourceSetResource(param, options) {
        return this.api.addResourceSetResource(param.resourceSetId, param.instance, options).toPromise();
    }
    /**
      * Adds more resources to a resource set
      * Add more resources to a resource set
      * @param param the request object
      */
    addResourceSetResources(param, options) {
        return this.api.addResourceSetResources(param.resourceSetId, param.instance, options).toPromise();
    }
    /**
      * Creates a new resource set. See [Supported resources](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#supported-resources).  > **Note:** The maximum number of `resources` allowed in a resource set object is 1000. Resources are identified by either an Okta Resource Name (ORN) or by a REST URL format. See [Okta Resource Name](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#okta-resource-name-orn).
      * Create a resource set
      * @param param the request object
      */
    createResourceSet(param, options) {
        return this.api.createResourceSet(param.instance, options).toPromise();
    }
    /**
      * Creates a binding for the resource set, custom role, and members (users or groups)  > **Note:** If you use a custom role with permissions that don\'t apply to the resources in the resource set, it doesn\'t affect the admin role. For example,  the `okta.users.userprofile.manage` permission gives the admin no privileges if it\'s granted to a resource set that only includes `https://{yourOktaDomain}/api/v1/groups/{targetGroupId}`  resources. If you want the admin to be able to manage the users within the group, the resource set must include the corresponding `https://{yourOktaDomain}/api/v1/groups/{targetGroupId}/users` resource.
      * Create a role resource set binding
      * @param param the request object
      */
    createResourceSetBinding(param, options) {
        return this.api.createResourceSetBinding(param.resourceSetId, param.instance, options).toPromise();
    }
    /**
      * Deletes a binding of a role (identified by `roleIdOrLabel`) and a resource set (identified by `resourceSetIdOrLabel`)
      * Delete a role resource set binding
      * @param param the request object
      */
    deleteBinding(param, options) {
        return this.api.deleteBinding(param.resourceSetId, param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Deletes a resource set by `resourceSetIdOrLabel`
      * Delete a resource set
      * @param param the request object
      */
    deleteResourceSet(param, options) {
        return this.api.deleteResourceSet(param.resourceSetId, options).toPromise();
    }
    /**
      * Deletes a resource (identified by `resourceId`) from a resource set
      * Delete a resource set resource
      * @param param the request object
      */
    deleteResourceSetResource(param, options) {
        return this.api.deleteResourceSetResource(param.resourceSetId, param.resourceId, options).toPromise();
    }
    /**
      * Retrieves the binding of a role (identified by `roleIdOrLabel`) for a resource set (identified by `resourceSetIdOrLabel`)
      * Retrieve a role resource set binding
      * @param param the request object
      */
    getBinding(param, options) {
        return this.api.getBinding(param.resourceSetId, param.roleIdOrLabel, options).toPromise();
    }
    /**
      * Retrieves a member (identified by `memberId`) that belongs to a role resource set binding
      * Retrieve a role resource set binding member
      * @param param the request object
      */
    getMemberOfBinding(param, options) {
        return this.api.getMemberOfBinding(param.resourceSetId, param.roleIdOrLabel, param.memberId, options).toPromise();
    }
    /**
      * Retrieves a resource set by `resourceSetIdOrLabel`
      * Retrieve a resource set
      * @param param the request object
      */
    getResourceSet(param, options) {
        return this.api.getResourceSet(param.resourceSetId, options).toPromise();
    }
    /**
      * Retrieves a resource identified by `resourceId` in a resource set
      * Retrieve a resource set resource
      * @param param the request object
      */
    getResourceSetResource(param, options) {
        return this.api.getResourceSetResource(param.resourceSetId, param.resourceId, options).toPromise();
    }
    /**
      * Lists all bindings for a resource set with pagination support.  The returned `roles` array contains the roles for each binding associated with the specified resource set. If there are more than 100 bindings for the specified resource set, `links.next` provides the resource with pagination for the next list of bindings.
      * List all role resource set bindings
      * @param param the request object
      */
    listBindings(param, options) {
        return this.api.listBindings(param.resourceSetId, param.after, options).toPromise();
    }
    /**
      * Lists all members of a role resource set binding with pagination support
      * List all role resource set binding members
      * @param param the request object
      */
    listMembersOfBinding(param, options) {
        return this.api.listMembersOfBinding(param.resourceSetId, param.roleIdOrLabel, param.after, options).toPromise();
    }
    /**
      * Lists all resources for the resource set
      * List all resource set resources
      * @param param the request object
      */
    listResourceSetResources(param, options) {
        return this.api.listResourceSetResources(param.resourceSetId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all resource sets with pagination support
      * List all resource sets
      * @param param the request object
      */
    listResourceSets(param = {}, options) {
        return this.api.listResourceSets(param.after, options).toPromise();
    }
    /**
      * Replaces the label and description of a resource set. See [Supported resources](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#supported-resources).
      * Replace a resource set
      * @param param the request object
      */
    replaceResourceSet(param, options) {
        return this.api.replaceResourceSet(param.resourceSetId, param.instance, options).toPromise();
    }
    /**
      * Replaces the conditions of a resource identified by `resourceId` in a resource set
      * Replace the resource set resource conditions
      * @param param the request object
      */
    replaceResourceSetResource(param, options) {
        return this.api.replaceResourceSetResource(param.resourceSetId, param.resourceId, param.resourceSetResourcePutRequest, options).toPromise();
    }
    /**
      * Unassigns a member (identified by `memberId`) from a role resource set binding
      * Unassign a role resource set binding member
      * @param param the request object
      */
    unassignMemberFromBinding(param, options) {
        return this.api.unassignMemberFromBinding(param.resourceSetId, param.roleIdOrLabel, param.memberId, options).toPromise();
    }
}
exports.ObjectResourceSetApi = ObjectResourceSetApi;
const ObservableAPI_59 = require("./ObservableAPI");
class ObjectRiskEventApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_59.ObservableRiskEventApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Sends multiple IP risk events to Okta. This request is used by a third-party risk provider to send IP risk events to Okta. The third-party risk provider needs to be registered with Okta before they can send events to Okta. See [Risk Providers](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RiskProvider/). This API has a rate limit of 30 requests per minute. You can include multiple risk events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. Prioritize sending high risk signals if you have a burst of signals to send that would exceed the maximum request limits.
      * Send multiple risk events
      * @param param the request object
      */
    sendRiskEvents(param, options) {
        return this.api.sendRiskEvents(param.instance, options).toPromise();
    }
}
exports.ObjectRiskEventApi = ObjectRiskEventApi;
const ObservableAPI_60 = require("./ObservableAPI");
class ObjectRiskProviderApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_60.ObservableRiskProviderApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a risk provider object. You can create a maximum of three risk provider objects.
      * Create a risk provider
      * @param param the request object
      */
    createRiskProvider(param, options) {
        return this.api.createRiskProvider(param.instance, options).toPromise();
    }
    /**
      * Deletes a risk provider object by its ID
      * Delete a risk provider
      * @param param the request object
      */
    deleteRiskProvider(param, options) {
        return this.api.deleteRiskProvider(param.riskProviderId, options).toPromise();
    }
    /**
      * Retrieves a risk provider object by ID
      * Retrieve a risk provider
      * @param param the request object
      */
    getRiskProvider(param, options) {
        return this.api.getRiskProvider(param.riskProviderId, options).toPromise();
    }
    /**
      * Lists all risk provider objects
      * List all risk providers
      * @param param the request object
      */
    listRiskProviders(param = {}, options) {
        return this.api.listRiskProviders(options).toPromise();
    }
    /**
      * Replaces the properties for a given risk provider object ID
      * Replace a risk provider
      * @param param the request object
      */
    replaceRiskProvider(param, options) {
        return this.api.replaceRiskProvider(param.riskProviderId, param.instance, options).toPromise();
    }
}
exports.ObjectRiskProviderApi = ObjectRiskProviderApi;
const ObservableAPI_61 = require("./ObservableAPI");
class ObjectRoleAssignmentApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_61.ObservableRoleAssignmentApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Assigns a [standard role](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles) to a client app.  You can also assign a custom role to a client app, but the preferred method to assign a custom role to a client is to create a binding between the custom role, the resource set, and the client app. See [Create a role resource set binding](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a client role
      * @param param the request object
      */
    assignRoleToClient(param, options) {
        return this.api.assignRoleToClient(param.clientId, param.assignRoleRequest, options).toPromise();
    }
    /**
      * Assigns a [standard role](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles) to a group.  You can also assign a custom role to a group, but the preferred method to assign a custom role to a group is to create a binding between the custom role, the resource set, and the group. See [Create a role resource set binding](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a role to a group
      * @param param the request object
      */
    assignRoleToGroup(param, options) {
        return this.api.assignRoleToGroup(param.groupId, param.assignRoleRequest, param.disableNotifications, options).toPromise();
    }
    /**
      * Assigns a [standard role](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles) to a user.  You can also assign a custom role to a user, but the preferred method to assign a custom role to a user is to create a binding between the custom role, the resource set, and the user. See [Create a role resource set binding](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleDResourceSetBinding/#tag/RoleDResourceSetBinding/operation/createResourceSetBinding).  > **Notes:** > * The request payload is different for standard and custom role assignments. > * For IAM-based standard role assignments, use the request payload for standard roles. However, the response payload for IAM-based role assignments is similar to the custom role\'s assignment response.
      * Assign a user role
      * @param param the request object
      */
    assignRoleToUser(param, options) {
        return this.api.assignRoleToUser(param.userId, param.assignRoleRequest, param.disableNotifications, options).toPromise();
    }
    /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a client app (identified by `clientId`)
      * Unassign a client role
      * @param param the request object
      */
    deleteRoleFromClient(param, options) {
        return this.api.deleteRoleFromClient(param.clientId, param.roleAssignmentId, options).toPromise();
    }
    /**
      * Retrieves a role assigned to a group (identified by the `groupId`). The `roleAssignmentId` is the unique identifier for either a standard role group assignment object or a custom role resource set binding object.
      * Retrieve a group role assignment
      * @param param the request object
      */
    getGroupAssignedRole(param, options) {
        return this.api.getGroupAssignedRole(param.groupId, param.roleId, options).toPromise();
    }
    /**
      * Retrieves a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve a user role governance source
      * @param param the request object
      */
    getRoleAssignmentGovernanceGrant(param, options) {
        return this.api.getRoleAssignmentGovernanceGrant(param.userId, param.roleAssignmentId, param.grantId, options).toPromise();
    }
    /**
      * Retrieves the resources of a governance source (identified by `grantId`) for a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve the user role governance source resources
      * @param param the request object
      */
    getRoleAssignmentGovernanceGrantResources(param, options) {
        return this.api.getRoleAssignmentGovernanceGrantResources(param.userId, param.roleAssignmentId, param.grantId, options).toPromise();
    }
    /**
      * Retrieves a role assigned to a user (identified by `userId`). The `roleAssignmentId` parameter is the unique identifier for either a standard role assignment object or a custom role resource set binding object.
      * Retrieve a user role assignment
      * @param param the request object
      */
    getUserAssignedRole(param, options) {
        return this.api.getUserAssignedRole(param.userId, param.roleId, options).toPromise();
    }
    /**
      * Retrieves the governance sources of a role (identified by `roleAssignmentId`) that\'s assigned to a user (identified by `userId`)
      * Retrieve all user role governance sources
      * @param param the request object
      */
    getUserAssignedRoleGovernance(param, options) {
        return this.api.getUserAssignedRoleGovernance(param.userId, param.roleAssignmentId, options).toPromise();
    }
    /**
      * Lists all roles assigned to a user (identified by `userId`)
      * List all user role assignments
      * @param param the request object
      */
    listAssignedRolesForUser(param, options) {
        return this.api.listAssignedRolesForUser(param.userId, param.expand, options).toPromise();
    }
    /**
      * Lists all assigned roles of a group by `groupId`
      * List all group role assignments
      * @param param the request object
      */
    listGroupAssignedRoles(param, options) {
        return this.api.listGroupAssignedRoles(param.groupId, param.expand, options).toPromise();
    }
    /**
      * Lists all roles assigned to a client app identified by `clientId`
      * List all client role assignments
      * @param param the request object
      */
    listRolesForClient(param, options) {
        return this.api.listRolesForClient(param.clientId, options).toPromise();
    }
    /**
      * Lists all users with role assignments
      * List all users with role assignments
      * @param param the request object
      */
    listUsersWithRoleAssignments(param = {}, options) {
        return this.api.listUsersWithRoleAssignments(param.after, param.limit, options).toPromise();
    }
    /**
      * Retrieves a role assignment (identified by `roleAssignmentId`) for a client app (identified by `clientId`)
      * Retrieve a client role
      * @param param the request object
      */
    retrieveClientRole(param, options) {
        return this.api.retrieveClientRole(param.clientId, param.roleAssignmentId, options).toPromise();
    }
    /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a group (identified by the `groupId`)
      * Unassign a group role
      * @param param the request object
      */
    unassignRoleFromGroup(param, options) {
        return this.api.unassignRoleFromGroup(param.groupId, param.roleId, options).toPromise();
    }
    /**
      * Unassigns a role assignment (identified by `roleAssignmentId`) from a user (identified by `userId`)
      * Unassign a user role
      * @param param the request object
      */
    unassignRoleFromUser(param, options) {
        return this.api.unassignRoleFromUser(param.userId, param.roleId, options).toPromise();
    }
}
exports.ObjectRoleAssignmentApi = ObjectRoleAssignmentApi;
const ObservableAPI_62 = require("./ObservableAPI");
class ObjectRoleTargetApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_62.ObservableRoleTargetApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Assigns all apps as target to an `APP_ADMIN` role
      * Assign all apps as target to admin role
      * @param param the request object
      */
    assignAllAppsAsTargetToRoleForUser(param, options) {
        return this.api.assignAllAppsAsTargetToRoleForUser(param.userId, param.roleId, options).toPromise();
    }
    /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
      * Assign a group role app instance target
      * @param param the request object
      */
    assignAppInstanceTargetToAppAdminRoleForGroup(param, options) {
        return this.api.assignAppInstanceTargetToAppAdminRoleForGroup(param.groupId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to an admin user. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permission to the same OIN app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
      * Assign an admin role app instance target
      * @param param the request object
      */
    assignAppInstanceTargetToAppAdminRoleForUser(param, options) {
        return this.api.assignAppInstanceTargetToAppAdminRoleForUser(param.userId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Assigns an app instance target to an `APP_ADMIN` role assignment to a client. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage only specific configurations of the Salesforce app.
      * Assign a client role app instance target
      * @param param the request object
      */
    assignAppTargetInstanceRoleForClient(param, options) {
        return this.api.assignAppTargetInstanceRoleForClient(param.clientId, param.roleAssignmentId, param.appName, param.appId, options).toPromise();
    }
    /**
      * Assigns an OIN app target for an `APP_ADMIN` role assignment to a client. When you assign an app target from the OIN catalog, you reduce the scope of the role assignment. The role assignment applies to only app instances that are included in the specified OIN app target.  An assigned OIN app target overrides any existing app instance targets. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the administrator for all Facebook instances.
      * Assign a client role app target
      * @param param the request object
      */
    assignAppTargetRoleToClient(param, options) {
        return this.api.assignAppTargetRoleToClient(param.clientId, param.roleAssignmentId, param.appName, options).toPromise();
    }
    /**
      * Assigns an OIN app target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target. An OIN app target that\'s assigned to the role overrides any existing instance targets of the OIN app. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app with `facebook` for `appName` makes that user the administrator for all Facebook instances.
      * Assign a group role app target
      * @param param the request object
      */
    assignAppTargetToAdminRoleForGroup(param, options) {
        return this.api.assignAppTargetToAdminRoleForGroup(param.groupId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Assigns an OIN app target for an `APP_ADMIN` role assignment to an admin user. When you assign the first app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  Assigning an OIN app target overrides any existing app instance targets of the OIN app. For example, if a user was assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the admin for all Facebook instances.
      * Assign an admin role app target
      * @param param the request object
      */
    assignAppTargetToAdminRoleForUser(param, options) {
        return this.api.assignAppTargetToAdminRoleForUser(param.userId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets, but applies only to the specified target.
      * Assign a client role group target
      * @param param the request object
      */
    assignGroupTargetRoleForClient(param, options) {
        return this.api.assignGroupTargetRoleForClient(param.clientId, param.roleAssignmentId, param.groupId, options).toPromise();
    }
    /**
      * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
      * Assign a group role group target
      * @param param the request object
      */
    assignGroupTargetToGroupAdminRole(param, options) {
        return this.api.assignGroupTargetToGroupAdminRole(param.groupId, param.roleId, param.targetGroupId, options).toPromise();
    }
    /**
      * Assigns a group target for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
      * Assign an admin role group target
      * @param param the request object
      */
    assignGroupTargetToUserRole(param, options) {
        return this.api.assignGroupTargetToUserRole(param.userId, param.roleId, param.groupId, options).toPromise();
    }
    /**
      * Retrieves all role targets for an `APP_ADMIN`, `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user by user or group assignment type. If the role isn\'t scoped to specific group targets or any app targets, an empty array `[]` is returned.
      * Retrieve a role target by assignment type
      * @param param the request object
      */
    getRoleTargetsByUserIdAndRoleId(param, options) {
        return this.api.getRoleTargetsByUserIdAndRoleId(param.userId, param.roleIdOrEncodedRoleId, param.assignmentType, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all OIN app targets for an `APP_ADMIN` role that\'s assigned to a client (by `clientId`).
      * List all client role app targets
      * @param param the request object
      */
    listAppTargetRoleToClient(param, options) {
        return this.api.listAppTargetRoleToClient(param.clientId, param.roleAssignmentId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all app targets for an `APP_ADMIN` role assignment to a group. The response includes a list of OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app doesn\'t.
      * List all group role app targets
      * @param param the request object
      */
    listApplicationTargetsForApplicationAdministratorRoleForGroup(param, options) {
        return this.api.listApplicationTargetsForApplicationAdministratorRoleForGroup(param.groupId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all app targets for an `APP_ADMIN` role assigned to a user. The response is a list that includes OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app payload doesn\'t.
      * List all admin role app targets
      * @param param the request object
      */
    listApplicationTargetsForApplicationAdministratorRoleForUser(param, options) {
        return this.api.listApplicationTargetsForApplicationAdministratorRoleForUser(param.userId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
      * List all client role group targets
      * @param param the request object
      */
    listGroupTargetRoleForClient(param, options) {
        return this.api.listGroupTargetRoleForClient(param.clientId, param.roleAssignmentId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
      * List all group role group targets
      * @param param the request object
      */
    listGroupTargetsForGroupRole(param, options) {
        return this.api.listGroupTargetsForGroupRole(param.groupId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all group targets for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. If the role isn\'t scoped to specific group targets, an empty array `[]` is returned.
      * List all admin role group targets
      * @param param the request object
      */
    listGroupTargetsForRole(param, options) {
        return this.api.listGroupTargetsForRole(param.userId, param.roleId, param.after, param.limit, options).toPromise();
    }
    /**
      * Unassigns an app instance target from a role assignment to a client app  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all the apps, delete the role assignment with the instance target and create another one.  See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role app instance target
      * @param param the request object
      */
    removeAppTargetInstanceRoleForClient(param, options) {
        return this.api.removeAppTargetInstanceRoleForClient(param.clientId, param.roleAssignmentId, param.appName, param.appId, options).toPromise();
    }
    /**
      * Unassigns an OIN app target for a role assignment to a client app  > **Note:** You can\'t remove the last OIN app target from a role assignment. > If you need a role assignment that applies to all apps, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role app target
      * @param param the request object
      */
    removeAppTargetRoleFromClient(param, options) {
        return this.api.removeAppTargetRoleFromClient(param.clientId, param.roleAssignmentId, param.appName, options).toPromise();
    }
    /**
      * Unassigns a Group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app.  > **Note:** You can\'t remove the last group target from a role assignment. If you need a role assignment that applies to all groups, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
      * Unassign a client role group target
      * @param param the request object
      */
    removeGroupTargetRoleFromClient(param, options) {
        return this.api.removeGroupTargetRoleFromClient(param.clientId, param.roleAssignmentId, param.groupId, options).toPromise();
    }
    /**
      * Unassigns an app instance target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last app instance target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment and recreate a new one.
      * Unassign an admin role app instance target
      * @param param the request object
      */
    unassignAppInstanceTargetFromAdminRoleForUser(param, options) {
        return this.api.unassignAppInstanceTargetFromAdminRoleForUser(param.userId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Unassigns an app instance target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
      * Unassign a group role app instance target
      * @param param the request object
      */
    unassignAppInstanceTargetToAppAdminRoleForGroup(param, options) {
        return this.api.unassignAppInstanceTargetToAppAdminRoleForGroup(param.groupId, param.roleId, param.appName, param.applicationId, options).toPromise();
    }
    /**
      * Unassigns an OIN app target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last OIN app target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment to the user and recreate a new one.
      * Unassign an admin role app target
      * @param param the request object
      */
    unassignAppTargetFromAppAdminRoleForUser(param, options) {
        return this.api.unassignAppTargetFromAppAdminRoleForUser(param.userId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Unassigns an OIN app target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
      * Unassign a group role app target
      * @param param the request object
      */
    unassignAppTargetToAdminRoleForGroup(param, options) {
        return this.api.unassignAppTargetToAdminRoleForGroup(param.groupId, param.roleId, param.appName, options).toPromise();
    }
    /**
      * Unassigns a group target from a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group.
      * Unassign a group role group target
      * @param param the request object
      */
    unassignGroupTargetFromGroupAdminRole(param, options) {
        return this.api.unassignGroupTargetFromGroupAdminRole(param.groupId, param.roleId, param.targetGroupId, options).toPromise();
    }
    /**
      * Unassigns a group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last group target from a role assignment since this causes an exception. > If you need a role assignment that applies to all groups, delete the role assignment to the user and recreate a new one.
      * Unassign an admin role group target
      * @param param the request object
      */
    unassignGroupTargetFromUserAdminRole(param, options) {
        return this.api.unassignGroupTargetFromUserAdminRole(param.userId, param.roleId, param.groupId, options).toPromise();
    }
}
exports.ObjectRoleTargetApi = ObjectRoleTargetApi;
const ObservableAPI_63 = require("./ObservableAPI");
class ObjectSSFReceiverApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_63.ObservableSSFReceiverApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a Security Events Provider instance by setting its status to `ACTIVE`. This operation resumes the flow of events from the Security Events Provider to Okta.
      * Activate a security events provider
      * @param param the request object
      */
    activateSecurityEventsProviderInstance(param, options) {
        return this.api.activateSecurityEventsProviderInstance(param.securityEventProviderId, options).toPromise();
    }
    /**
      * Creates a Security Events Provider instance
      * Create a security events provider
      * @param param the request object
      */
    createSecurityEventsProviderInstance(param, options) {
        return this.api.createSecurityEventsProviderInstance(param.instance, options).toPromise();
    }
    /**
      * Deactivates a Security Events Provider instance by setting its status to `INACTIVE`. This operation stops the flow of events from the Security Events Provider to Okta.
      * Deactivate a security events provider
      * @param param the request object
      */
    deactivateSecurityEventsProviderInstance(param, options) {
        return this.api.deactivateSecurityEventsProviderInstance(param.securityEventProviderId, options).toPromise();
    }
    /**
      * Deletes a Security Events Provider instance specified by `id`
      * Delete a security events provider
      * @param param the request object
      */
    deleteSecurityEventsProviderInstance(param, options) {
        return this.api.deleteSecurityEventsProviderInstance(param.securityEventProviderId, options).toPromise();
    }
    /**
      * Retrieves the Security Events Provider instance specified by `id`
      * Retrieve the security events provider
      * @param param the request object
      */
    getSecurityEventsProviderInstance(param, options) {
        return this.api.getSecurityEventsProviderInstance(param.securityEventProviderId, options).toPromise();
    }
    /**
      * Lists all Security Events Provider instances
      * List all security events providers
      * @param param the request object
      */
    listSecurityEventsProviderInstances(param = {}, options) {
        return this.api.listSecurityEventsProviderInstances(options).toPromise();
    }
    /**
      * Replaces a Security Events Provider instance specified by `id`
      * Replace a security events provider
      * @param param the request object
      */
    replaceSecurityEventsProviderInstance(param, options) {
        return this.api.replaceSecurityEventsProviderInstance(param.securityEventProviderId, param.instance, options).toPromise();
    }
}
exports.ObjectSSFReceiverApi = ObjectSSFReceiverApi;
const ObservableAPI_64 = require("./ObservableAPI");
class ObjectSSFSecurityEventTokenApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_64.ObservableSSFSecurityEventTokenApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Publishes a Security Event Token (SET) sent by a Security Events Provider. After the token is verified, Okta ingests the event and performs any appropriate action.
      * Publish a security event token
      * @param param the request object
      */
    publishSecurityEventTokens(param, options) {
        return this.api.publishSecurityEventTokens(param.securityEventToken, options).toPromise();
    }
}
exports.ObjectSSFSecurityEventTokenApi = ObjectSSFSecurityEventTokenApi;
const ObservableAPI_65 = require("./ObservableAPI");
class ObjectSSFTransmitterApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_65.ObservableSSFTransmitterApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates an SSF Stream for an event receiver to start receiving security events in the form of Security Event Tokens (SETs) from Okta.  An SSF Stream is associated with the Client ID of the OAuth 2.0 access token used to create the stream. The Client ID is provided by Okta for an [OAuth 2.0 app integration](https://help.okta.com/okta_help.htm?id=ext_Apps_App_Integration_Wizard-oidc). One SSF Stream is allowed for each Client ID, hence, one SSF Stream is allowed for each app integration in Okta.  A maximum of 10 SSF Stream configurations can be created for one org.
      * Create an SSF stream
      * @param param the request object
      */
    createSsfStream(param, options) {
        return this.api.createSsfStream(param.instance, options).toPromise();
    }
    /**
      * Deletes the specified SSF Stream.  If the `stream_id` is not provided in the query string, the associated stream with the Client ID (through the request OAuth 2.0 access token) is deleted. Otherwise, the SSF Stream with the `stream_id` is deleted, if found.
      * Delete an SSF stream
      * @param param the request object
      */
    deleteSsfStream(param = {}, options) {
        return this.api.deleteSsfStream(param.streamId, options).toPromise();
    }
    /**
      * Retrieves the status of an SSF Stream. The status indicates whether the transmitter is able to transmit events over the stream.
      * Retrieve the SSF Stream status
      * @param param the request object
      */
    getSsfStreamStatus(param, options) {
        return this.api.getSsfStreamStatus(param.streamId, options).toPromise();
    }
    /**
      * Retrieves either a list of all known SSF Stream configurations or the individual configuration if specified by ID.  As Stream configurations are tied to a Client ID, only the Stream associated with the Client ID of the request OAuth 2.0 access token can be viewed.
      * Retrieve the SSF stream configuration(s)
      * @param param the request object
      */
    getSsfStreams(param = {}, options) {
        return this.api.getSsfStreams(param.streamId, options).toPromise();
    }
    /**
      * Retrieves SSF Transmitter configuration metadata. This includes all supported endpoints and key information about certain properties of the Okta org as the transmitter, such as `delivery_methods_supported`, `issuer`, and `jwks_uri`.
      * Retrieve the SSF transmitter metadata
      * @param param the request object
      */
    getWellknownSsfMetadata(param = {}, options) {
        return this.api.getWellknownSsfMetadata(options).toPromise();
    }
    /**
      * Replaces all properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is replaced.
      * Replace an SSF stream
      * @param param the request object
      */
    replaceSsfStream(param, options) {
        return this.api.replaceSsfStream(param.instance, options).toPromise();
    }
    /**
      * Updates properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is updated.
      * Update an SSF stream
      * @param param the request object
      */
    updateSsfStream(param, options) {
        return this.api.updateSsfStream(param.instance, options).toPromise();
    }
    /**
      * Verifies an SSF Stream by publishing a Verification Event requested by a Security Events Provider.  > **Note:** A successful response doesn\'t indicate that the Verification Event     was transmitted successfully, only that Okta has transmitted the event or will     at some point in the future. The SSF Receiver is responsible for validating and acknowledging     successful transmission of the request by responding with HTTP Response Status Code 202.
      * Verify an SSF stream
      * @param param the request object
      */
    verifySsfStream(param, options) {
        return this.api.verifySsfStream(param.instance, options).toPromise();
    }
}
exports.ObjectSSFTransmitterApi = ObjectSSFTransmitterApi;
const ObservableAPI_66 = require("./ObservableAPI");
class ObjectSchemaApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_66.ObservableSchemaApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the default schema for an app user.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
      * Retrieve the default app user schema for an app
      * @param param the request object
      */
    getApplicationUserSchema(param, options) {
        return this.api.getApplicationUserSchema(param.appInstanceId, options).toPromise();
    }
    /**
      * Retrieves the group schema  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
      * Retrieve the default group schema
      * @param param the request object
      */
    getGroupSchema(param = {}, options) {
        return this.api.getGroupSchema(options).toPromise();
    }
    /**
      * Retrieves the schema for a log stream type. The `logStreamType` element in the URL specifies the log stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
      * Retrieve the log stream schema for the schema type
      * @param param the request object
      */
    getLogStreamSchema(param, options) {
        return this.api.getLogStreamSchema(param.logStreamType, options).toPromise();
    }
    /**
      * Retrieves the schema for a user type
      * Retrieve a user schema
      * @param param the request object
      */
    getUserSchema(param, options) {
        return this.api.getUserSchema(param.schemaId, options).toPromise();
    }
    /**
      * Lists the schema for all log stream types visible for this org
      * List the log stream schemas
      * @param param the request object
      */
    listLogStreamSchemas(param = {}, options) {
        return this.api.listLogStreamSchemas(options).toPromise();
    }
    /**
      * Updates the app user schema. This updates, adds, or removes one or more custom profile properties or the nullability of a base property in the app user schema for an app. Changing a base property\'s nullability (for example, the value of its `required` field) is allowed only if it is nullable in the default predefined schema for the app.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to apps. All users assigned to a given app use the same app user schema. Therefore, unlike the user schema operations, the app user schema operations all specify `default` and don\'t accept a schema ID.
      * Update the app user profile schema for an app
      * @param param the request object
      */
    updateApplicationUserProfile(param, options) {
        return this.api.updateApplicationUserProfile(param.appInstanceId, param.body, options).toPromise();
    }
    /**
      * Updates the group profile schema. This updates, adds, or removes one or more custom profile properties in a group schema. Currently Okta does not support changing base group profile properties.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.  The [User Types](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/) feature does not extend to groups. All groups use the same group schema. Unlike user schema operations, group schema operations all specify `default` and don\'t accept a schema ID.
      * Update the group profile schema
      * @param param the request object
      */
    updateGroupSchema(param = {}, options) {
        return this.api.updateGroupSchema(param.GroupSchema, options).toPromise();
    }
    /**
      * Updates a user schema. Use this request to update, add, or remove one or more profile properties in a user schema. If you specify `default` for the `schemaId`, updates will apply to the default user type.  Unlike custom user profile properties, limited changes are allowed to base user profile properties (permissions, nullability of the `firstName` and `lastName` properties, or pattern for `login`). You can\'t remove a property from the default schema if it\'s being referenced as a [`matchAttribute`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/createIdentityProvider!path=policy/subject/matchAttribute&t=request) in `SAML2` IdPs. Currently, all validation of SAML assertions are only performed against the default user type.  > **Note:** You must set properties explicitly to `null` to remove them from the schema; otherwise, `POST` is interpreted as a partial update.
      * Update a user schema
      * @param param the request object
      */
    updateUserProfile(param, options) {
        return this.api.updateUserProfile(param.schemaId, param.userSchema, options).toPromise();
    }
}
exports.ObjectSchemaApi = ObjectSchemaApi;
const ObservableAPI_67 = require("./ObservableAPI");
class ObjectServiceAccountApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_67.ObservableServiceAccountApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new app service account for managing an app account
      * Create an app service account
      * @param param the request object
      */
    createAppServiceAccount(param, options) {
        return this.api.createAppServiceAccount(param.body, options).toPromise();
    }
    /**
      * Creates a new service account for managing an Okta User or SaaS app account
      * Create a service account
      * @param param the request object
      */
    createServiceAccount(param, options) {
        return this.api.createServiceAccount(param.body, options).toPromise();
    }
    /**
      * Deletes an app service account specified by ID
      * Delete an app service account
      * @param param the request object
      */
    deleteAppServiceAccount(param, options) {
        return this.api.deleteAppServiceAccount(param.id, options).toPromise();
    }
    /**
      * Deletes a service account specified by ID
      * Delete a service account
      * @param param the request object
      */
    deleteServiceAccount(param, options) {
        return this.api.deleteServiceAccount(param.id, options).toPromise();
    }
    /**
      * Retrieves an app service account specified by ID
      * Retrieve an app service account
      * @param param the request object
      */
    getAppServiceAccount(param, options) {
        return this.api.getAppServiceAccount(param.id, options).toPromise();
    }
    /**
      * Retrieves a service account specified by ID
      * Retrieve a service account
      * @param param the request object
      */
    getServiceAccount(param, options) {
        return this.api.getServiceAccount(param.id, options).toPromise();
    }
    /**
      * Lists all app service accounts
      * List all app service accounts
      * @param param the request object
      */
    listAppServiceAccounts(param = {}, options) {
        return this.api.listAppServiceAccounts(param.limit, param.after, param.match, options).toPromise();
    }
    /**
      * Lists all service accounts
      * List all service accounts
      * @param param the request object
      */
    listServiceAccounts(param = {}, options) {
        return this.api.listServiceAccounts(param.limit, param.after, param.q, options).toPromise();
    }
    /**
      * Updates an existing app service account specified by ID
      * Update an existing app service account
      * @param param the request object
      */
    updateAppServiceAccount(param, options) {
        return this.api.updateAppServiceAccount(param.id, param.body, options).toPromise();
    }
    /**
      * Updates a service account specified by ID
      * Update a service account
      * @param param the request object
      */
    updateServiceAccount(param, options) {
        return this.api.updateServiceAccount(param.id, param.body, options).toPromise();
    }
}
exports.ObjectServiceAccountApi = ObjectServiceAccountApi;
const ObservableAPI_68 = require("./ObservableAPI");
class ObjectSessionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_68.ObservableSessionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Closes the session for the user who is currently signed in. Use this method in a browser-based app to sign out a user.  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Close the current session
      * @param param the request object
      */
    closeCurrentSession(param = {}, options) {
        return this.api.closeCurrentSession(param.cookie, options).toPromise();
    }
    /**
      * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
      * Create a session with session token
      * @param param the request object
      */
    createSession(param, options) {
        return this.api.createSession(param.createSessionRequest, options).toPromise();
    }
    /**
      * Retrieves session information for the current user. Use this method in a browser-based app to determine if the user is signed in.  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Retrieve the current session
      * @param param the request object
      */
    getCurrentSession(param = {}, options) {
        return this.api.getCurrentSession(param.cookie, options).toPromise();
    }
    /**
      * Retrieves information about the session specified by the given session ID
      * Retrieve a session
      * @param param the request object
      */
    getSession(param, options) {
        return this.api.getSession(param.sessionId, options).toPromise();
    }
    /**
      * Refreshes the session for the current user  > **Note:** This operation requires a session cookie for the user. An API token isn\'t allowed for this operation.
      * Refresh the current session
      * @param param the request object
      */
    refreshCurrentSession(param = {}, options) {
        return this.api.refreshCurrentSession(param.cookie, options).toPromise();
    }
    /**
      * Refreshes an existing session using the `id` for that session. A successful response contains the refreshed session with an updated `expiresAt` timestamp.
      * Refresh a session
      * @param param the request object
      */
    refreshSession(param, options) {
        return this.api.refreshSession(param.sessionId, options).toPromise();
    }
    /**
      * Revokes the specified session
      * Revoke a session
      * @param param the request object
      */
    revokeSession(param, options) {
        return this.api.revokeSession(param.sessionId, options).toPromise();
    }
}
exports.ObjectSessionApi = ObjectSessionApi;
const ObservableAPI_69 = require("./ObservableAPI");
class ObjectSubscriptionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_69.ObservableSubscriptionApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Lists all subscriptions available to a specified Role
      * List all subscriptions for a role
      * @param param the request object
      */
    listRoleSubscriptions(param, options) {
        return this.api.listRoleSubscriptions(param.roleTypeOrRoleId, options).toPromise();
    }
    /**
      * Retrieves a subscription by `notificationType` for a specified Role
      * Retrieve a subscription for a role
      * @param param the request object
      */
    listRoleSubscriptionsByNotificationType(param, options) {
        return this.api.listRoleSubscriptionsByNotificationType(param.roleTypeOrRoleId, param.notificationType, options).toPromise();
    }
    /**
      * Lists all subscriptions available to a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
      * List all subscriptions for a user
      * @param param the request object
      */
    listUserSubscriptions(param, options) {
        return this.api.listUserSubscriptions(param.userId, options).toPromise();
    }
    /**
      * Retrieves a subscription by `notificationType` for a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
      * Retrieve a subscription for a user
      * @param param the request object
      */
    listUserSubscriptionsByNotificationType(param, options) {
        return this.api.listUserSubscriptionsByNotificationType(param.notificationType, param.userId, options).toPromise();
    }
    /**
      * Subscribes a Role to a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
      * Subscribe a role to a specific notification type
      * @param param the request object
      */
    subscribeRoleSubscriptionByNotificationType(param, options) {
        return this.api.subscribeRoleSubscriptionByNotificationType(param.roleTypeOrRoleId, param.notificationType, options).toPromise();
    }
    /**
      * Subscribes the current user to a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
      * Subscribe a user to a specific notification type
      * @param param the request object
      */
    subscribeUserSubscriptionByNotificationType(param, options) {
        return this.api.subscribeUserSubscriptionByNotificationType(param.notificationType, param.userId, options).toPromise();
    }
    /**
      * Unsubscribes a Role from a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
      * Unsubscribe a role from a specific notification type
      * @param param the request object
      */
    unsubscribeRoleSubscriptionByNotificationType(param, options) {
        return this.api.unsubscribeRoleSubscriptionByNotificationType(param.roleTypeOrRoleId, param.notificationType, options).toPromise();
    }
    /**
      * Unsubscribes the current user from a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
      * Unsubscribe a user from a specific notification type
      * @param param the request object
      */
    unsubscribeUserSubscriptionByNotificationType(param, options) {
        return this.api.unsubscribeUserSubscriptionByNotificationType(param.notificationType, param.userId, options).toPromise();
    }
}
exports.ObjectSubscriptionApi = ObjectSubscriptionApi;
const ObservableAPI_70 = require("./ObservableAPI");
class ObjectSystemLogApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_70.ObservableSystemLogApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Lists all System Log events  See [System Log query](https://developer.okta.com/docs/reference/system-log-query/) for further details and examples, and [System Log filters and search](https://help.okta.com/okta_help.htm?type=oie&id=csh-syslog-filters) for common use cases.  By default, 100 System Log events are returned. If there are more events, see the [header link](https://developer.okta.com/docs/api/#link-header) for the `next` link, or increase the number of returned objects using the `limit` parameter.  >**Note:** The value of the `clientSecret` property in the System Log is secured by a hashing function, and isn\'t the value used during authentication.
      * List all System Log events
      * @param param the request object
      */
    listLogEvents(param = {}, options) {
        return this.api.listLogEvents(param.since, param.until, param.after, param.filter, param.q, param.limit, param.sortOrder, options).toPromise();
    }
}
exports.ObjectSystemLogApi = ObjectSystemLogApi;
const ObservableAPI_71 = require("./ObservableAPI");
class ObjectTemplateApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_71.ObservableTemplateApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new custom SMS template
      * Create an SMS template
      * @param param the request object
      */
    createSmsTemplate(param, options) {
        return this.api.createSmsTemplate(param.smsTemplate, options).toPromise();
    }
    /**
      * Deletes an SMS template
      * Delete an SMS template
      * @param param the request object
      */
    deleteSmsTemplate(param, options) {
        return this.api.deleteSmsTemplate(param.templateId, options).toPromise();
    }
    /**
      * Retrieves a specific template by `id`
      * Retrieve an SMS template
      * @param param the request object
      */
    getSmsTemplate(param, options) {
        return this.api.getSmsTemplate(param.templateId, options).toPromise();
    }
    /**
      * Lists all custom SMS templates. A subset of templates can be returned that match a template type.
      * List all SMS templates
      * @param param the request object
      */
    listSmsTemplates(param = {}, options) {
        return this.api.listSmsTemplates(param.templateType, options).toPromise();
    }
    /**
      * Replaces the SMS Template > **Notes:** You can\'t update the default SMS Template.
      * Replace an SMS template
      * @param param the request object
      */
    replaceSmsTemplate(param, options) {
        return this.api.replaceSmsTemplate(param.templateId, param.smsTemplate, options).toPromise();
    }
    /**
      * Updates only some of the SMS Template properties:   * All properties within the custom SMS Template that have values are updated.   * Any translation that doesn\'t exist is added.   * Any translation with a null or empty value is removed.   * Any translation with non-empty/null value is updated.
      * Update an SMS template
      * @param param the request object
      */
    updateSmsTemplate(param, options) {
        return this.api.updateSmsTemplate(param.templateId, param.smsTemplate, options).toPromise();
    }
}
exports.ObjectTemplateApi = ObjectTemplateApi;
const ObservableAPI_72 = require("./ObservableAPI");
class ObjectThreatInsightApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_72.ObservableThreatInsightApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Retrieves the ThreatInsight configuration for the org
      * Retrieve the ThreatInsight configuration
      * @param param the request object
      */
    getCurrentConfiguration(param = {}, options) {
        return this.api.getCurrentConfiguration(options).toPromise();
    }
    /**
      * Updates the ThreatInsight configuration for the org
      * Update the ThreatInsight configuration
      * @param param the request object
      */
    updateConfiguration(param, options) {
        return this.api.updateConfiguration(param.threatInsightConfiguration, options).toPromise();
    }
}
exports.ObjectThreatInsightApi = ObjectThreatInsightApi;
const ObservableAPI_73 = require("./ObservableAPI");
class ObjectTrustedOriginApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_73.ObservableTrustedOriginApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a trusted origin. Sets the `status` to `ACTIVE`.
      * Activate a trusted origin
      * @param param the request object
      */
    activateTrustedOrigin(param, options) {
        return this.api.activateTrustedOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Creates a trusted origin
      * Create a trusted origin
      * @param param the request object
      */
    createTrustedOrigin(param, options) {
        return this.api.createTrustedOrigin(param.trustedOrigin, options).toPromise();
    }
    /**
      * Deactivates a trusted origin. Sets the `status` to `INACTIVE`.
      * Deactivate a trusted origin
      * @param param the request object
      */
    deactivateTrustedOrigin(param, options) {
        return this.api.deactivateTrustedOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Deletes a trusted origin
      * Delete a trusted origin
      * @param param the request object
      */
    deleteTrustedOrigin(param, options) {
        return this.api.deleteTrustedOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Retrieves a trusted origin
      * Retrieve a trusted origin
      * @param param the request object
      */
    getTrustedOrigin(param, options) {
        return this.api.getTrustedOrigin(param.trustedOriginId, options).toPromise();
    }
    /**
      * Lists all trusted origins
      * List all trusted origins
      * @param param the request object
      */
    listTrustedOrigins(param = {}, options) {
        return this.api.listTrustedOrigins(param.q, param.filter, param.after, param.limit, options).toPromise();
    }
    /**
      * Replaces a trusted origin
      * Replace a trusted origin
      * @param param the request object
      */
    replaceTrustedOrigin(param, options) {
        return this.api.replaceTrustedOrigin(param.trustedOriginId, param.trustedOrigin, options).toPromise();
    }
}
exports.ObjectTrustedOriginApi = ObjectTrustedOriginApi;
const ObservableAPI_74 = require("./ObservableAPI");
class ObjectUISchemaApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_74.ObservableUISchemaApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates an input for an enrollment form
      * Create a UI schema
      * @param param the request object
      */
    createUISchema(param, options) {
        return this.api.createUISchema(param.uischemabody, options).toPromise();
    }
    /**
      * Deletes a UI Schema by `id`
      * Delete a UI schema
      * @param param the request object
      */
    deleteUISchemas(param, options) {
        return this.api.deleteUISchemas(param.id, options).toPromise();
    }
    /**
      * Retrieves the UI schema for an application given `appName`, `section` and `operation`
      * Retrieve the UI schema for a section
      * @param param the request object
      */
    getAppUISchema(param, options) {
        return this.api.getAppUISchema(param.appName, param.section, param.operation, options).toPromise();
    }
    /**
      * Retrieves the links for UI schemas for an application given `appName`
      * Retrieve the links for UI schemas for an application
      * @param param the request object
      */
    getAppUISchemaLinks(param, options) {
        return this.api.getAppUISchemaLinks(param.appName, options).toPromise();
    }
    /**
      * Retrieves a UI Schema by `id`
      * Retrieve a UI schema
      * @param param the request object
      */
    getUISchema(param, options) {
        return this.api.getUISchema(param.id, options).toPromise();
    }
    /**
      * Lists all UI Schemas in your org
      * List all UI schemas
      * @param param the request object
      */
    listUISchemas(param = {}, options) {
        return this.api.listUISchemas(options).toPromise();
    }
    /**
      * Replaces a UI Schema by `id`
      * Replace a UI schema
      * @param param the request object
      */
    replaceUISchemas(param, options) {
        return this.api.replaceUISchemas(param.id, param.updateUISchemaBody, options).toPromise();
    }
}
exports.ObjectUISchemaApi = ObjectUISchemaApi;
const ObservableAPI_75 = require("./ObservableAPI");
class ObjectUnconfirmedUsersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_75.ObservableUnconfirmedUsersApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Lists all unconfirmed users for an app
      * List all unconfirmed users
      * @param param the request object
      */
    listUnconfirmedUsers(param, options) {
        return this.api.listUnconfirmedUsers(param.appId, param.after, param.limit, options).toPromise();
    }
}
exports.ObjectUnconfirmedUsersApi = ObjectUnconfirmedUsersApi;
const ObservableAPI_76 = require("./ObservableAPI");
class ObjectUserApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_76.ObservableUserApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a user.  Perform this operation only on users with a `STAGED` or `DEPROVISIONED` status. Activation of a user is an asynchronous operation. * The user has the `transitioningToStatus` property with an `ACTIVE` value during activation. This indicates that the user hasn\'t completed the asynchronous operation. * The user has an `ACTIVE` status when the activation process completes.  Users who don\'t have a password must complete the welcome flow by visiting the activation link to complete the transition to `ACTIVE` status.  > **Note:** If you want to send a branded user activation email, change the subdomain of your request to the custom domain that\'s associated with the brand. > For example, change `subdomain.okta.com` to `custom.domain.one`. See [Multibrand and custom domains](https://developer.okta.com/docs/concepts/brands/#multibrand-and-custom-domains).  > **Note:** If you have optional password enabled, visiting the activation link is optional for users who aren\'t required to enroll a password. > See [Create user with optional password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#create-user-with-optional-password).  > **Legal disclaimer** > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Activate a user
      * @param param the request object
      */
    activateUser(param, options) {
        return this.api.activateUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Updates a user\'s password by validating the user\'s current password.  This operation provides an option to delete all the sessions of the specified user. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared.  You can only perform this operation on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).  The user transitions to `ACTIVE` status when successfully invoked in `RECOVERY` status.  > **Note:** The Okta account management policy doesn\'t support the `/users/{userId}/credentials/change_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
      * Update password
      * @param param the request object
      */
    changePassword(param, options) {
        return this.api.changePassword(param.userId, param.changePasswordRequest, param.strict, options).toPromise();
    }
    /**
      * Updates a user\'s recovery question and answer credential by validating the user\'s current password. You can only perform this operation on users in `STAGED`, `ACTIVE`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).
      * Update recovery question
      * @param param the request object
      */
    changeRecoveryQuestion(param, options) {
        return this.api.changeRecoveryQuestion(param.userId, param.userCredentials, options).toPromise();
    }
    /**
      * Creates a new user in your Okta org with or without credentials.<br> > **Legal Disclaimer** > > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.  All responses return the created user. Activation of a user is an asynchronous operation. The system performs group reconciliation during activation and assigns the user to all apps via direct or indirect relationships (group memberships). * The user\'s `transitioningToStatus` property is `ACTIVE` during activation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s `status` is `ACTIVE` when the activation process is complete.  The user is emailed a one-time activation token if activated without a password.  > **Note:** If the user is assigned to an app that is configured for provisioning, the activation process triggers downstream provisioning to the app.  It is possible for a user to sign in before these apps have been successfully provisioned for the user.  > **Important:** Do not generate or send a one-time activation token when activating users with an assigned password. Users should sign in with their assigned password.  For more information about the various scenarios of creating a user listed in the examples, see the [User creation scenarios](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#user-creation-scenarios) section.
      * Create a user
      * @param param the request object
      */
    createUser(param, options) {
        return this.api.createUser(param.body, param.activate, param.provider, param.nextLogin, options).toPromise();
    }
    /**
      * Deactivates a user.  Perform this operation only on users that do not have a `DEPROVISIONED` status. * The user\'s `transitioningToStatus` property is `DEPROVISIONED` during deactivation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s status is `DEPROVISIONED` when the deactivation process is complete.  > **Important:** Deactivating a user is a **destructive** operation. The user is deprovisioned from all assigned apps, which might destroy their data such as email or files. **This action cannot be recovered!**  You can also perform user deactivation asynchronously. To invoke asynchronous user deactivation, pass an HTTP header `Prefer: respond-async` with the request.  > **Note:** Users with the `DEPROVISIONED` status won\'t have their profiles updated when running the [Update a user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/updateUser) endpoint unless you have the **Edit Deactived User Profile Updates** option turned on in the Admin Console. See [Edit deactivated user profiles](https://help.okta.com/okta_help.htm?type=oie&id=edit-deactivated-users).
      * Deactivate a user
      * @param param the request object
      */
    deactivateUser(param, options) {
        return this.api.deactivateUser(param.userId, param.sendEmail, param.prefer, options).toPromise();
    }
    /**
      * Deletes any existing relationship between the `associated` and `primary` user. For the `associated` user, this is specified by the ID. The `primary` name specifies the relationship.  The operation is successful if the relationship is deleted. The operation is also successful if the specified user isn\'t in the `associated` relationship for any instance of the specified `primary` and thus, no relationship is found.
      * Delete a linked object value
      * @param param the request object
      */
    deleteLinkedObjectForUser(param, options) {
        return this.api.deleteLinkedObjectForUser(param.userId, param.relationshipName, options).toPromise();
    }
    /**
      * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  > **Warning:** This action can\'t be recovered!  This operation on a user that hasn\'t been deactivated causes that user to be deactivated. A second delete operation is required to delete the user.  > **Note:** You can also perform user deletion asynchronously. To invoke asynchronous user deletion, pass an HTTP header `Prefer: respond-async` with the request.  This header is also supported by user deactivation, which is performed if the delete endpoint is invoked on a user that hasn\'t been deactivated.
      * Delete a user
      * @param param the request object
      */
    deleteUser(param, options) {
        return this.api.deleteUser(param.userId, param.sendEmail, param.prefer, options).toPromise();
    }
    /**
      * Ends Okta sessions for the currently signed in user. By default, the current session remains active. Use this method in a browser-based app. > **Note:** This operation requires a session cookie for the user. The API token isn\'t allowed for this operation.
      * End a current user session
      * @param param the request object
      */
    endUserSessions(param = {}, options) {
        return this.api.endUserSessions(param.keepCurrent, options).toPromise();
    }
    /**
      * Expires the password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.  > **Note:** The Okta account management policy doesn\'t support the `/users/{id}/lifecycle/expire_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
      * Expire the password
      * @param param the request object
      */
    expirePassword(param, options) {
        return this.api.expirePassword(param.userId, options).toPromise();
    }
    /**
      * Expires the password and resets the user\'s password to a temporary password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. The user\'s password is reset to a temporary password that\'s returned, and then the user\'s password is expired. If `revokeSessions` is included in the request with a value of `true`, the user\'s current outstanding sessions are revoked and require re-authentication. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.
      * Expire the password with a temporary password
      * @param param the request object
      */
    expirePasswordAndGetTemporaryPassword(param, options) {
        return this.api.expirePasswordAndGetTemporaryPassword(param.userId, param.revokeSessions, options).toPromise();
    }
    /**
      * Starts the forgot password flow.  Generates a one-time token (OTT) that you can use to reset a user\'s password.  The user must validate their security question\'s answer when visiting the reset link. Perform this operation only on users with an `ACTIVE` status and a valid [recovery question credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/recovery_question&t=request).  > **Note:** If you have migrated to Identity Engine, you can allow users to recover passwords with any enrolled MFA authenticator. See [Self-service account recovery](https://help.okta.com/oie/en-us/content/topics/identity-engine/authenticators/configure-sspr.htm?cshid=ext-config-sspr).  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.  If `sendEmail` is `false`, returns a link for the user to reset their password. This operation doesn\'t affect the status of the user.
      * Start forgot password flow
      * @param param the request object
      */
    forgotPassword(param, options) {
        return this.api.forgotPassword(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Resets the user\'s password to the specified password if the provided answer to the recovery question is correct. You must include the recovery question answer with the submission.
      * Reset password with recovery question
      * @param param the request object
      */
    forgotPasswordSetNewPassword(param, options) {
        return this.api.forgotPasswordSetNewPassword(param.userId, param.userCredentials, param.sendEmail, options).toPromise();
    }
    /**
      * Resets a password. Generates a one-time token (OTT) that you can use to reset a user\'s password. You can automatically email the OTT link to the user or return the OTT to the API caller and distribute using a custom flow.  This operation transitions the user to the `RECOVERY` status. The user is then not able to sign in or initiate a forgot password flow until they complete the reset flow.  This operation provides an option to delete all the user\'s sessions. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared. > **Note:** You can also use this API to convert a user with the Okta credential provider to use a federated provider. After this conversion, the user can\'t directly sign in with a password. > To convert a federated user back to an Okta user, use the default API call.  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.   If `sendEmail` is `false`, returns a link for the user to reset their password.
      * Reset a password
      * @param param the request object
      */
    generateResetPasswordToken(param, options) {
        return this.api.generateResetPasswordToken(param.userId, param.sendEmail, param.revokeSessions, options).toPromise();
    }
    /**
      * Retrieves a linked identity provider (IdP) user by ID
      * Retrieve a user for IdP
      * @param param the request object
      */
    getIdentityProviderApplicationUser(param, options) {
        return this.api.getIdentityProviderApplicationUser(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Retrieves a refresh token issued for the specified user and client
      * Retrieve a refresh token for a client
      * @param param the request object
      */
    getRefreshTokenForUserAndClient(param, options) {
        return this.api.getRefreshTokenForUserAndClient(param.userId, param.clientId, param.tokenId, param.expand, options).toPromise();
    }
    /**
      * Retrieves a user from your Okta org.  You can substitute `me` for the `id` to fetch the current user linked to an API token or session cookie.  * The request returns the user linked to the API token that is specified in the Authorization header, not the user linked to the active session. Details of the admin user who granted the API token is returned.  * When the end user has an active Okta session, it is typically a CORS request from the browser. Therefore, it\'s possible to retrieve the current user without the Authorization header.  When fetching a user by `login` or `login shortname`, [URL encode](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) the request parameter to ensure that special characters are escaped properly. Logins with a `/` character can only be fetched by `id` due to URL issues with escaping the `/` character. If you don\'t know a user\'s ID, you can use the [List all users](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers) endpoint to find it.  > **Note:** Some browsers block third-party cookies by default, which disrupts Okta functionality in certain flows. See [Mitigate the impact of third-party cookie deprecation](https://help.okta.com/okta_help.htm?type=oie&id=ext-third-party-cookies).
      * Retrieve a user
      * @param param the request object
      */
    getUser(param, options) {
        return this.api.getUser(param.userId, param.contentType, param.expand, options).toPromise();
    }
    /**
      * Retrieves a user\'s classification
      * Retrieve a user\'s classification
      * @param param the request object
      */
    getUserClassification(param, options) {
        return this.api.getUserClassification(param.userId, options).toPromise();
    }
    /**
      * Retrieves a grant for the specified user
      * Retrieve a user grant
      * @param param the request object
      */
    getUserGrant(param, options) {
        return this.api.getUserGrant(param.userId, param.grantId, param.expand, options).toPromise();
    }
    /**
      * Retrieves the user risk object for a user ID
      * Retrieve the user\'s risk
      * @param param the request object
      */
    getUserRisk(param, options) {
        return this.api.getUserRisk(param.userId, options).toPromise();
    }
    /**
      * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
      * Link a user to IdP
      * @param param the request object
      */
    linkUserToIdentityProvider(param, options) {
        return this.api.linkUserToIdentityProvider(param.idpId, param.userId, param.userIdentityProviderLinkRequest, options).toPromise();
    }
    /**
      * Lists all app links for all direct or indirect (through group membership) assigned apps.  > **Note:** To list all apps in an org, use the [List all applications endpoint in the Applications API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/listApplications).
      * List all assigned app links
      * @param param the request object
      */
    listAppLinks(param, options) {
        return this.api.listAppLinks(param.userId, options).toPromise();
    }
    /**
      * Lists all grants for a specified user and client
      * List all grants for a client
      * @param param the request object
      */
    listGrantsForUserAndClient(param, options) {
        return this.api.listGrantsForUserAndClient(param.userId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all the users linked to an identity provider (IdP)
      * List all users for IdP
      * @param param the request object
      */
    listIdentityProviderApplicationUsers(param, options) {
        return this.api.listIdentityProviderApplicationUsers(param.idpId, param.q, param.after, param.limit, param.expand, options).toPromise();
    }
    /**
      * Lists either the `self` link for the primary user or all associated users in the relationship specified by `relationshipName`. If the specified user isn\'t associated in any relationship, an empty array is returned.  Use `me` instead of `id` to specify the current session user.
      * List the primary or all of the associated linked object values
      * @param param the request object
      */
    listLinkedObjectsForUser(param, options) {
        return this.api.listLinkedObjectsForUser(param.userId, param.relationshipName, options).toPromise();
    }
    /**
      * Lists all refresh tokens issued for the specified user and client
      * List all refresh tokens for a client
      * @param param the request object
      */
    listRefreshTokensForUserAndClient(param, options) {
        return this.api.listRefreshTokensForUserAndClient(param.userId, param.clientId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
      * List all tokens from OIDC IdP
      * @param param the request object
      */
    listSocialAuthTokens(param, options) {
        return this.api.listSocialAuthTokens(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Lists information about how the user is blocked from accessing their account
      * List all user blocks
      * @param param the request object
      */
    listUserBlocks(param, options) {
        return this.api.listUserBlocks(param.userId, options).toPromise();
    }
    /**
      * Lists all client resources for which the specified user has grants or tokens.  > **Note:** To list all client resources for which a specified authorization server has tokens, use the [List all client resources for an authorization server in the Authorization Servers API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AuthorizationServerClients/#tag/AuthorizationServerClients/operation/listOAuth2ClientsForAuthorizationServer).
      * List all clients
      * @param param the request object
      */
    listUserClients(param, options) {
        return this.api.listUserClients(param.userId, options).toPromise();
    }
    /**
      * Lists all devices enrolled by a user.  > **Note:** To list all devices registered to an org, use the [List all devices endpoint in the Devices API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Device/#tag/Device/operation/listDevices).
      * List all devices
      * @param param the request object
      */
    listUserDevices(param, options) {
        return this.api.listUserDevices(param.userId, options).toPromise();
    }
    /**
      * Lists all grants for the specified user
      * List all user grants
      * @param param the request object
      */
    listUserGrants(param, options) {
        return this.api.listUserGrants(param.userId, param.scopeId, param.expand, param.after, param.limit, options).toPromise();
    }
    /**
      * Lists all groups of which the user is a member. > **Note:** To list all groups in your org, use the [List all groups endpoints in the Groups API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups).
      * List all groups
      * @param param the request object
      */
    listUserGroups(param, options) {
        return this.api.listUserGroups(param.userId, options).toPromise();
    }
    /**
      * Lists the identity providers (IdPs) associated with the user
      * List all IdPs for user
      * @param param the request object
      */
    listUserIdentityProviders(param, options) {
        return this.api.listUserIdentityProviders(param.userId, options).toPromise();
    }
    /**
      * Lists users in your org, with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria. Different results are returned depending on specified queries in the request.  > **Notes:**  >  * This operation omits users that have a status of `DEPROVISIONED` in the response. To return all users, use a filter or search query instead. >  * The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.
      * List all users
      * @param param the request object
      */
    listUsers(param = {}, options) {
        return this.api.listUsers(param.contentType, param.search, param.filter, param.q, param.after, param.limit, param.sortBy, param.sortOrder, param.fields, param.expand, options).toPromise();
    }
    /**
      * Reactivates a user.  Perform this operation only on users with a `PROVISIONED` or `RECOVERY` [status](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!c=200&path=status&t=response). This operation restarts the activation workflow if for some reason the user activation wasn\'t completed when using the `activationToken` from [Activate User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserLifecycle/#tag/UserLifecycle/operation/activateUser).  Users that don\'t have a password must complete the flow by completing the [Reset password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword) flow and MFA enrollment steps to transition the user to `ACTIVE` status.  If `sendEmail` is `false`, returns an activation link for the user to set up their account. The activation token can be used to create a custom activation link.
      * Reactivate a user
      * @param param the request object
      */
    reactivateUser(param, options) {
        return this.api.reactivateUser(param.userId, param.sendEmail, options).toPromise();
    }
    /**
      * Replaces a user\'s profile, credentials, or both using strict-update semantics.  All profile properties must be specified when updating a user\'s profile with a `PUT` method. Any property not specified in the request is deleted. > **Important:** Don\'t use a `PUT` method for partial updates.
      * Replace a user
      * @param param the request object
      */
    replaceUser(param, options) {
        return this.api.replaceUser(param.userId, param.user, param.strict, param.ifMatch, options).toPromise();
    }
    /**
      * Replaces the user\'s classification
      * Replace the user\'s classification
      * @param param the request object
      */
    replaceUserClassification(param, options) {
        return this.api.replaceUserClassification(param.userId, param.replaceUserClassification, options).toPromise();
    }
    /**
      * Resets all factors for the specified user. All MFA factor enrollments return to the unenrolled state. The user\'s status remains `ACTIVE`. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset the factors
      * @param param the request object
      */
    resetFactors(param, options) {
        return this.api.resetFactors(param.userId, options).toPromise();
    }
    /**
      * Revokes all grants for the specified user and client
      * Revoke all grants for a client
      * @param param the request object
      */
    revokeGrantsForUserAndClient(param, options) {
        return this.api.revokeGrantsForUserAndClient(param.userId, param.clientId, options).toPromise();
    }
    /**
      * Revokes the specified refresh and access tokens
      * Revoke a token for a client
      * @param param the request object
      */
    revokeTokenForUserAndClient(param, options) {
        return this.api.revokeTokenForUserAndClient(param.userId, param.clientId, param.tokenId, options).toPromise();
    }
    /**
      * Revokes all refresh tokens issued for the specified user and client
      * Revoke all refresh tokens for a client
      * @param param the request object
      */
    revokeTokensForUserAndClient(param, options) {
        return this.api.revokeTokensForUserAndClient(param.userId, param.clientId, options).toPromise();
    }
    /**
      * Revokes one grant for a specified user
      * Revoke a user grant
      * @param param the request object
      */
    revokeUserGrant(param, options) {
        return this.api.revokeUserGrant(param.userId, param.grantId, options).toPromise();
    }
    /**
      * Revokes all grants for a specified user
      * Revoke all user grants
      * @param param the request object
      */
    revokeUserGrants(param, options) {
        return this.api.revokeUserGrants(param.userId, options).toPromise();
    }
    /**
      * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.  You can also clear the user\'s remembered factors for all devices using the `forgetDevices` parameter. See [forgetDevices](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserSessions/#tag/UserSessions/operation/revokeUserSessions!in=query&path=forgetDevices&t=request). > **Note:** This operation doesn\'t clear the sessions created for web or native apps.
      * Revoke all user sessions
      * @param param the request object
      */
    revokeUserSessions(param, options) {
        return this.api.revokeUserSessions(param.userId, param.oauthTokens, param.forgetDevices, options).toPromise();
    }
    /**
      * Assigns the first user as the `associated` and the second user as the `primary` for the specified relationship.  If the first user is already associated with a different `primary` for this relationship, the previous link is removed. A linked object relationship can specify only one primary user for an associated user.
      * Assign a linked object value for primary
      * @param param the request object
      */
    setLinkedObjectForUser(param, options) {
        return this.api.setLinkedObjectForUser(param.associatedUserId, param.primaryRelationshipName, param.primaryUserId, options).toPromise();
    }
    /**
      * Suspends a user. Perform this operation only on users with an `ACTIVE` status. The user has a `SUSPENDED` status when the process completes.  Suspended users can\'t sign in to Okta. They can only be unsuspended or deactivated. Their group and app assignments are retained.
      * Suspend a user
      * @param param the request object
      */
    suspendUser(param, options) {
        return this.api.suspendUser(param.userId, options).toPromise();
    }
    /**
      * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
      * Unlink a user from IdP
      * @param param the request object
      */
    unlinkUserFromIdentityProvider(param, options) {
        return this.api.unlinkUserFromIdentityProvider(param.idpId, param.userId, options).toPromise();
    }
    /**
      * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that\'s blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password. > **Note:** This operation works with Okta-sourced users. It doesn\'t support directory-sourced accounts such as Active Directory.
      * Unlock a user
      * @param param the request object
      */
    unlockUser(param, options) {
        return this.api.unlockUser(param.userId, options).toPromise();
    }
    /**
      * Unsuspends a user and returns them to the `ACTIVE` state. This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a user
      * @param param the request object
      */
    unsuspendUser(param, options) {
        return this.api.unsuspendUser(param.userId, options).toPromise();
    }
    /**
      * Updates a user\'s profile or credentials with partial update semantics.  > **Important:** Use the `POST` method for partial updates. Unspecified properties are set to null with `PUT`.  `profile` and `credentials` can be updated independently or together with a single request.  > **Notes:**  > * Currently, the user type of a user can only be changed using a full replacement `PUT` operation. If the request parameters of a partial update include the `type` element from the user object, the value must match the existing type of the user. Only admins are permitted to change the user type of a user; end users are not allowed to change their own user type. > > * To update a current user\'s profile with partial semantics, you can use the `/api/v1/users/me` endpoint. But, a user can only update profile properties that they have write access for. Within the profile, if the user tries to update the primary or the secondary email IDs, verification emails are sent to those email IDs, and the fields are updated only upon verification. > > * You can update user profiles of users in the `DEPROVISIONED` status if you have the **Edit Deactivated User Profile Updates** option turned on in the Admin Console. See [deactivated user profiles](https://help.okta.com/okta_help.htm?type=oie&id=edit-deactivated-users).  If you are using this endpoint to set a password, it sets a password without validating existing user credentials. This is an administrative operation. For operations that validate credentials, refer to the [Reset password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword), [Start forgot password flow](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/forgotPassword), and [Update password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/changePassword) endpoints.
      * Update a user
      * @param param the request object
      */
    updateUser(param, options) {
        return this.api.updateUser(param.userId, param.user, param.strict, param.ifMatch, options).toPromise();
    }
    /**
      * Upserts (creates or updates) the user risk object for a user ID
      * Upsert the user\'s risk
      * @param param the request object
      */
    upsertUserRisk(param, options) {
        return this.api.upsertUserRisk(param.userId, param.userRiskRequest, options).toPromise();
    }
}
exports.ObjectUserApi = ObjectUserApi;
const ObservableAPI_77 = require("./ObservableAPI");
class ObjectUserAuthenticatorEnrollmentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_77.ObservableUserAuthenticatorEnrollmentsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a Phone authenticator enrollment that\'s automatically activated
      * Create an auto-activated Phone authenticator enrollment
      * @param param the request object
      */
    createAuthenticatorEnrollment(param, options) {
        return this.api.createAuthenticatorEnrollment(param.userId, param.authenticator, options).toPromise();
    }
    /**
      * Creates an auto-activated Temporary access code (TAC) authenticator enrollment
      * Create an auto-activated TAC authenticator enrollment
      * @param param the request object
      */
    createTacAuthenticatorEnrollment(param, options) {
        return this.api.createTacAuthenticatorEnrollment(param.userId, param.authenticator, options).toPromise();
    }
    /**
      * Deletes an existing enrollment for the specified user. The user can enroll the authenticator again.
      * Delete an authenticator enrollment
      * @param param the request object
      */
    deleteAuthenticatorEnrollment(param, options) {
        return this.api.deleteAuthenticatorEnrollment(param.userId, param.enrollmentId, options).toPromise();
    }
    /**
      * Retrieves a user\'s authenticator enrollment by `enrollmentId`
      * Retrieve an authenticator enrollment
      * @param param the request object
      */
    getAuthenticatorEnrollment(param, options) {
        return this.api.getAuthenticatorEnrollment(param.userId, param.enrollmentId, param.discloseIdentifiers, options).toPromise();
    }
    /**
      * Lists all authenticator enrollments of the specified user
      * List all authenticator enrollments
      * @param param the request object
      */
    listAuthenticatorEnrollments(param, options) {
        return this.api.listAuthenticatorEnrollments(param.userId, param.discloseIdentifiers, options).toPromise();
    }
}
exports.ObjectUserAuthenticatorEnrollmentsApi = ObjectUserAuthenticatorEnrollmentsApi;
const ObservableAPI_78 = require("./ObservableAPI");
class ObjectUserFactorApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_78.ObservableUserFactorApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a factor. Some factors (`call`, `email`, `push`, `sms`, `token:software:totp`, `u2f`, and `webauthn`) require activation to complete the enrollment process.  Okta enforces a rate limit of five activation attempts within five minutes. After a user exceeds the rate limit, Okta returns an error message.  > **Notes:**  > * If the user exceeds their SMS, call, or email factor activation rate limit, then an [OTP resend request](./#tag/UserFactor/operation/resendEnrollFactor) isn\'t allowed for the same factor. > * You can\'t use the Factors API to activate Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).
      * Activate a factor
      * @param param the request object
      */
    activateFactor(param, options) {
        return this.api.activateFactor(param.userId, param.factorId, param.body, options).toPromise();
    }
    /**
      * Enrolls a supported factor for the specified user  > **Notes:**  >   * All responses return the enrolled factor with a status of either `PENDING_ACTIVATION` or `ACTIVE`. >   * You can\'t use the Factors API to enroll Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).  #### Additional SMS/Call factor information  * **Rate limits**: Okta may return a `429 Too Many Requests` status code if you attempt to resend an SMS or a voice call challenge (OTP) within the same time window. The current [rate limit](https://developer.okta.com/docs/reference/rate-limits/) is one SMS/CALL challenge per phone number every 30 seconds.  * **Existing phone numbers**: Okta may return a `400 Bad Request` status code if a user attempts to enroll with a different phone number when the user has an existing mobile phone or has an existing phone with voice call capability. A user can enroll only one mobile phone for `sms` and enroll only one voice call capable phone for `call` factor.  #### Additional WebAuthn factor information  * For detailed information on the WebAuthn standard, including an up-to-date list of supported browsers, see [webauthn.me](https://a0.to/webauthnme-okta-docs).  * When you enroll a WebAuthn factor, the `activation` object in `_embedded` contains properties used to help the client to create a new WebAuthn credential for use with Okta. See the [WebAuthn spec for PublicKeyCredentialCreationOptions](https://www.w3.org/TR/webauthn/#dictionary-makecredentialoptions).  #### Additional Custom TOTP factor information  * The enrollment process involves passing both the `factorProfileId` and `sharedSecret` properties for a token.  * A factor profile represents a particular configuration of the Custom TOTP factor. It includes certain properties that match the hardware token that end users possess, such as the HMAC algorithm, passcode length, and time interval. There can be multiple Custom TOTP factor profiles per org, but users can only enroll in one Custom TOTP factor. Admins can [create Custom TOTP factor profiles](https://help.okta.com/okta_help.htm?id=ext-mfa-totp) in the Admin Console. Then, copy the `factorProfileId` from the Admin Console into the API request.  * <x-lifecycle class=\"oie\"></x-lifecycle> For Custom TOTP enrollment, Okta automaticaly enrolls a user with a `token:software:totp` factor and the `push` factor if the user isn\'t currently enrolled with these factors.
      * Enroll a factor
      * @param param the request object
      */
    enrollFactor(param, options) {
        return this.api.enrollFactor(param.userId, param.body, param.updatePhone, param.templateId, param.tokenLifetimeSeconds, param.activate, param.acceptLanguage, options).toPromise();
    }
    /**
      * Retrieves an existing factor for the specified user
      * Retrieve a factor
      * @param param the request object
      */
    getFactor(param, options) {
        return this.api.getFactor(param.userId, param.factorId, options).toPromise();
    }
    /**
      * Retrieves the status of a `push` factor verification transaction   > **Note:**  > The response body for a number matching push challenge to an Okta Verify `push` factor enrollment is different from the response body of a standard push challenge.   > The number matching push challenge [response body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus!c=200&path=1/_embedded&t=response) contains the correct answer for the challenge.  > Use [Verify a factor](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor) to configure which challenge is sent.
      * Retrieve a factor transaction status
      * @param param the request object
      */
    getFactorTransactionStatus(param, options) {
        return this.api.getFactorTransactionStatus(param.userId, param.factorId, param.transactionId, options).toPromise();
    }
    /**
      * Retrieves the specified YubiKey OTP token by `id`
      * Retrieve a YubiKey OTP token
      * @param param the request object
      */
    getYubikeyOtpTokenById(param, options) {
        return this.api.getYubikeyOtpTokenById(param.tokenId, options).toPromise();
    }
    /**
      * Lists all enrolled factors for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only enrolled factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all enrolled factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
      * List all enrolled factors
      * @param param the request object
      */
    listFactors(param, options) {
        return this.api.listFactors(param.userId, options).toPromise();
    }
    /**
      * Lists all the supported factors that can be enrolled for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all supported factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
      * List all supported factors
      * @param param the request object
      */
    listSupportedFactors(param, options) {
        return this.api.listSupportedFactors(param.userId, options).toPromise();
    }
    /**
      * Lists all available security questions for the specified user
      * List all supported security questions
      * @param param the request object
      */
    listSupportedSecurityQuestions(param, options) {
        return this.api.listSupportedSecurityQuestions(param.userId, options).toPromise();
    }
    /**
      * Lists all YubiKey OTP tokens
      * List all YubiKey OTP tokens
      * @param param the request object
      */
    listYubikeyOtpTokens(param = {}, options) {
        return this.api.listYubikeyOtpTokens(param.after, param.expand, param.filter, param.forDownload, param.limit, param.sortBy, param.sortOrder, options).toPromise();
    }
    /**
      * Resends an `sms`, `call`, or `email` factor challenge as part of an enrollment flow.  For `call` and `sms` factors, Okta enforces a rate limit of one OTP challenge per device every 30 seconds. You can configure your `sms` and `call` factors to use a third-party telephony provider. See the [Telephony inline hook reference](https://developer.okta.com/docs/reference/telephony-hook/). Okta alternates between SMS providers with every resend request to ensure delivery of SMS and Call OTPs across different carriers.  > **Note:** Resend operations aren\'t allowed after a factor exceeds the activation rate limit. See [Activate a factor](./#tag/UserFactor/operation/activateFactor).
      * Resend a factor enrollment
      * @param param the request object
      */
    resendEnrollFactor(param, options) {
        return this.api.resendEnrollFactor(param.userId, param.factorId, param.resendUserFactor, param.templateId, options).toPromise();
    }
    /**
      * Unenrolls an existing factor for the specified user. You can\'t unenroll a factor from a deactivated user. Unenrolling a factor allows the user to enroll a new factor.  > **Note:** If you unenroll the `push` or the `signed_nonce` factors, Okta also unenrolls any other `totp`, `signed_nonce`, or Okta Verify `push` factors associated with the user.
      * Unenroll a factor
      * @param param the request object
      */
    unenrollFactor(param, options) {
        return this.api.unenrollFactor(param.userId, param.factorId, param.removeRecoveryEnrollment, options).toPromise();
    }
    /**
      * Uploads a seed for a user to enroll a YubiKey OTP
      * Upload a YubiKey OTP seed
      * @param param the request object
      */
    uploadYubikeyOtpTokenSeed(param, options) {
        return this.api.uploadYubikeyOtpTokenSeed(param.uploadYubikeyOtpTokenSeedRequest, param.after, param.expand, param.filter, param.forDownload, param.limit, param.sortBy, param.sortOrder, options).toPromise();
    }
    /**
      * Verifies an OTP for a factor. Some factors (`call`, `email`, `push`, `sms`, `u2f`, and `webauthn`) must first issue a challenge before you can verify the factor. Do this by making a request without a body. After a challenge is issued, make another request to verify the factor.  > **Notes:** > - You can send standard push challenges or number matching push challenges to Okta Verify `push` factor enrollments. Use a [request body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!path=2/useNumberMatchingChallenge&t=request) for number matching push challenges.  > - To verify a `push` factor, use the **poll** link returned when you issue the challenge. See [Retrieve a factor transaction status](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus).
      * Verify a factor
      * @param param the request object
      */
    verifyFactor(param, options) {
        return this.api.verifyFactor(param.userId, param.factorId, param.templateId, param.tokenLifetimeSeconds, param.xForwardedFor, param.userAgent, param.acceptLanguage, param.body, options).toPromise();
    }
}
exports.ObjectUserFactorApi = ObjectUserFactorApi;
const ObservableAPI_79 = require("./ObservableAPI");
class ObjectUserTypeApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_79.ObservableUserTypeApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates a new user type. Okta automatically creates a `default` user type for your org. You may add up to nine additional user types. > **Note**: New user types are based on the current default schema template. Modifications to this schema do not automatically propagate to previously created user types.
      * Create a user type
      * @param param the request object
      */
    createUserType(param, options) {
        return this.api.createUserType(param.userType, options).toPromise();
    }
    /**
      * Deletes a user type permanently. > **Note**: You can\'t delete the default user type or a user type that is currently assigned to users.
      * Delete a user type
      * @param param the request object
      */
    deleteUserType(param, options) {
        return this.api.deleteUserType(param.typeId, options).toPromise();
    }
    /**
      * Retrieves a user type by ID. Use `default` to fetch the default user type.
      * Retrieve a user type
      * @param param the request object
      */
    getUserType(param, options) {
        return this.api.getUserType(param.typeId, options).toPromise();
    }
    /**
      * Lists all user types in your org
      * List all user types
      * @param param the request object
      */
    listUserTypes(param = {}, options) {
        return this.api.listUserTypes(options).toPromise();
    }
    /**
      * Replaces an existing user type. This operation is a full update. > **Note**: The `name` of an existing user type can\'t be changed, but must be part of the request body. You can only replace the `displayName` and `description` elements.
      * Replace a user type
      * @param param the request object
      */
    replaceUserType(param, options) {
        return this.api.replaceUserType(param.typeId, param.userType, options).toPromise();
    }
    /**
      * Updates an existing user type. This operation is a partial update. > **Note**: You can only update the `displayName` and `description` elements. The `name` of an existing user type can\'t be changed.
      * Update a user type
      * @param param the request object
      */
    updateUserType(param, options) {
        return this.api.updateUserType(param.typeId, param.userType, options).toPromise();
    }
}
exports.ObjectUserTypeApi = ObjectUserTypeApi;
const ObservableAPI_80 = require("./ObservableAPI");
class ObjectWebAuthnPreregistrationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_80.ObservableWebAuthnPreregistrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Activates a preregistered WebAuthn factor. As part of this operation, Okta first decrypts and verifies the factor PIN and enrollment data sent by the fulfillment provider.
      * Activate a preregistered WebAuthn factor
      * @param param the request object
      */
    activatePreregistrationEnrollment(param = {}, options) {
        return this.api.activatePreregistrationEnrollment(param.body, options).toPromise();
    }
    /**
      * Assigns the fulfillment error status to a WebAuthn preregistration factor for a user. The `/mark-error` path indicates that the specific `FULFILLMENT_ERRORED` AuthFactor status is set on the enrollment.
      * Assign the fulfillment error status to a WebAuthn preregistration factor
      * @param param the request object
      */
    assignFulfillmentErrorWebAuthnPreregistrationFactor(param, options) {
        return this.api.assignFulfillmentErrorWebAuthnPreregistrationFactor(param.userId, param.authenticatorEnrollmentId, options).toPromise();
    }
    /**
      * Deletes a specific WebAuthn preregistration factor for a user
      * Delete a WebAuthn preregistration factor
      * @param param the request object
      */
    deleteWebAuthnPreregistrationFactor(param, options) {
        return this.api.deleteWebAuthnPreregistrationFactor(param.userId, param.authenticatorEnrollmentId, options).toPromise();
    }
    /**
      * Enrolls a preregistered WebAuthn factor. This WebAuthn factor has a longer challenge timeout period to accommodate the fulfillment request process. As part of this operation, Okta generates elliptic curve (EC) key-pairs used to encrypt the factor PIN and enrollment data sent by the fulfillment provider.
      * Enroll a preregistered WebAuthn factor
      * @param param the request object
      */
    enrollPreregistrationEnrollment(param = {}, options) {
        return this.api.enrollPreregistrationEnrollment(param.body, options).toPromise();
    }
    /**
      * Generates a fulfillment request by sending a WebAuthn preregistration event to start the flow. The WebAuthn preregistration integration for Okta Workflows uses a preregistration event to populate the fulfillment request.
      * Generate a fulfillment request
      * @param param the request object
      */
    generateFulfillmentRequest(param = {}, options) {
        return this.api.generateFulfillmentRequest(param.body, options).toPromise();
    }
    /**
      * Lists all WebAuthn preregistration factors for the specified user
      * List all WebAuthn preregistration factors
      * @param param the request object
      */
    listWebAuthnPreregistrationFactors(param, options) {
        return this.api.listWebAuthnPreregistrationFactors(param.userId, options).toPromise();
    }
    /**
      * Sends the decoded PIN for the specified WebAuthn preregistration enrollment. PINs are sent to the user\'s email. To resend the PIN, call this operation again.
      * Send a PIN to user
      * @param param the request object
      */
    sendPin(param = {}, options) {
        return this.api.sendPin(param.body, options).toPromise();
    }
}
exports.ObjectWebAuthnPreregistrationApi = ObjectWebAuthnPreregistrationApi;
const ObservableAPI_81 = require("./ObservableAPI");
class ObjectYourOinIntegrationsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_81.ObservableYourOinIntegrationsApi(configuration, requestFactory, responseProcessor);
    }
    /**
      * Creates an OIN Integration submission for verification and publication
      * Create an OIN integration
      * @param param the request object
      */
    createSubmission(param = {}, options) {
        return this.api.createSubmission(param.submissionRequest, options).toPromise();
    }
    /**
      * Retrieves all actions for a specific capability in an OIN Integration submission
      * Retrieve all actions for OIN integration
      * @param param the request object
      */
    getSubmissionActions(param, options) {
        return this.api.getSubmissionActions(param.submissionId, param.capability, options).toPromise();
    }
    /**
      * Retrieves the authentication settings for an OIN Integration submission
      * Retrieve the authentication settings
      * @param param the request object
      */
    getSubmissionAuthSettings(param, options) {
        return this.api.getSubmissionAuthSettings(param.submissionId, options).toPromise();
    }
    /**
      * Retrieves an OIN Integration by ID
      * Retrieve an OIN integration
      * @param param the request object
      */
    getSubmissionByOperationId(param, options) {
        return this.api.getSubmissionByOperationId(param.submissionId, options).toPromise();
    }
    /**
      * Retrieves the tenant settings for an OIN Integration submission
      * Retrieve the tenant settings
      * @param param the request object
      */
    getSubmissionTenantSettings(param, options) {
        return this.api.getSubmissionTenantSettings(param.submissionId, options).toPromise();
    }
    /**
      * Retrieves the testing information for an existing OIN Integration
      * Retrieve an OIN integration testing information
      * @param param the request object
      */
    getSubmissionTestInfo(param, options) {
        return this.api.getSubmissionTestInfo(param.submissionId, options).toPromise();
    }
    /**
      * Lists all available actions from an actions provider (such as Workflows) for a specific OIN integration
      * List all available actions for an OIN integration
      * @param param the request object
      */
    listAvailableActions(param, options) {
        return this.api.listAvailableActions(param.submissionId, param.capability, param.actionsProviderType, options).toPromise();
    }
    /**
      * Lists all capabilities for an OIN Integration submission
      * List all supported capabilities
      * @param param the request object
      */
    listSubmissionCapabilities(param, options) {
        return this.api.listSubmissionCapabilities(param.submissionId, options).toPromise();
    }
    /**
      * Lists all OIN Integration submissions created through the org
      * List all OIN integrations
      * @param param the request object
      */
    listSubmissions(param = {}, options) {
        return this.api.listSubmissions(param.limit, param.after, options).toPromise();
    }
    /**
      * Replaces the properties of an OIN Integration identified by ID
      * Replace an OIN integration
      * @param param the request object
      */
    replaceSubmission(param, options) {
        return this.api.replaceSubmission(param.submissionId, param.submissionRequest, options).toPromise();
    }
    /**
      * Submits an OIN Integration for Okta verification
      * Submit an OIN integration
      * @param param the request object
      */
    submitSubmission(param, options) {
        return this.api.submitSubmission(param.submissionId, options).toPromise();
    }
    /**
      * Uploads a default logo to the OIN submission. The image must adhere to the [OIN logo guidelines](https://developer.okta.com/docs/guides/submit-app-prereq/main/#logo-guidelines). Use the URL returned in the response header to specify the [`logo`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission!path=logo&t=request) parameter when you [create your OIN Integration submission](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission). This logo appears in the OIN catalog for your app integration.
      * Upload a default logo for an OIN integration
      * @param param the request object
      */
    uploadSubmissionDefaultLogo(param = {}, options) {
        return this.api.uploadSubmissionDefaultLogo(param.file, options).toPromise();
    }
    /**
      * Uploads a logo to your org. The image uploaded must adhere to the [OIN logo guidelines](https://developer.okta.com/docs/guides/submit-app-prereq/main/#logo-guidelines). Use the URL returned in the response header to specify the [`logo`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission!path=logo&t=request) parameter when you [create your OIN Integration submission](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission). This logo appears in the OIN catalog for your app integration.
      * Upload an OIN integration logo
      * @param param the request object
      */
    uploadSubmissionLogo(param = {}, options) {
        return this.api.uploadSubmissionLogo(param.file, options).toPromise();
    }
    /**
      * Upserts (adds or replaces) actions for a specific capability in an OIN Integration submission
      * Upsert the submission actions
      * @param param the request object
      */
    upsertSubmissionActions(param, options) {
        return this.api.upsertSubmissionActions(param.submissionId, param.capability, param.submissionActions, options).toPromise();
    }
    /**
      * Upserts (adds or replaces) authentication settings for an OIN Integration submission
      * Upsert the submission authentication settings
      * @param param the request object
      */
    upsertSubmissionAuthSettings(param, options) {
        return this.api.upsertSubmissionAuthSettings(param.submissionId, param.authSettings, options).toPromise();
    }
    /**
      * Upserts (adds or replaces) capabilities for an OIN Integration submission
      * Upsert the submission supported capabilities
      * @param param the request object
      */
    upsertSubmissionCapabilities(param, options) {
        return this.api.upsertSubmissionCapabilities(param.submissionId, param.submissionCapabilities, options).toPromise();
    }
    /**
      * Upserts (adds or replaces) tenant settings for an OIN Integration submission
      * Upsert the submission tenant settings
      * @param param the request object
      */
    upsertSubmissionTenantSettings(param, options) {
        return this.api.upsertSubmissionTenantSettings(param.submissionId, param.tenantSettings, options).toPromise();
    }
    /**
      * Upserts (adds or replaces) testing information for an OIN Integration
      * Upsert an OIN integration testing information
      * @param param the request object
      */
    upsertSubmissionTestInfo(param, options) {
        return this.api.upsertSubmissionTestInfo(param.submissionId, param.testInfo, options).toPromise();
    }
    /**
      * Verifies the submission actions\' correctness with an actions provider, such as Workflows
      * Verify the submission actions
      * @param param the request object
      */
    verifyActions(param, options) {
        return this.api.verifyActions(param.submissionId, param.capability, param.actionsProviderType, options).toPromise();
    }
}
exports.ObjectYourOinIntegrationsApi = ObjectYourOinIntegrationsApi;
