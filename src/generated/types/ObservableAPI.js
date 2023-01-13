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
exports.ObservableUserTypeApi = exports.ObservableUserFactorApi = exports.ObservableUserApi = exports.ObservableTrustedOriginApi = exports.ObservableThreatInsightApi = exports.ObservableTemplateApi = exports.ObservableSystemLogApi = exports.ObservableSubscriptionApi = exports.ObservableSessionApi = exports.ObservableSchemaApi = exports.ObservableRoleTargetApi = exports.ObservableRoleAssignmentApi = exports.ObservableRoleApi = exports.ObservableRiskProviderApi = exports.ObservableRiskEventApi = exports.ObservableResourceSetApi = exports.ObservableRateLimitSettingsApi = exports.ObservablePushProviderApi = exports.ObservableProfileMappingApi = exports.ObservablePrincipalRateLimitApi = exports.ObservablePolicyApi = exports.ObservableOrgSettingApi = exports.ObservableNetworkZoneApi = exports.ObservableLogStreamApi = exports.ObservableLinkedObjectApi = exports.ObservableInlineHookApi = exports.ObservableIdentitySourceApi = exports.ObservableIdentityProviderApi = exports.ObservableHookKeyApi = exports.ObservableGroupApi = exports.ObservableFeatureApi = exports.ObservableEventHookApi = exports.ObservableEmailDomainApi = exports.ObservableDeviceAssuranceApi = exports.ObservableDeviceApi = exports.ObservableCustomizationApi = exports.ObservableCustomDomainApi = exports.ObservableCAPTCHAApi = exports.ObservableBehaviorApi = exports.ObservableAuthorizationServerApi = exports.ObservableAuthenticatorApi = exports.ObservableAttackProtectionApi = exports.ObservableApplicationApi = exports.ObservableApiTokenApi = exports.ObservableAgentPoolsApi = void 0;
const collection_1 = require('../../collection');
const rxjsStub_1 = require('../rxjsStub');
const rxjsStub_2 = require('../rxjsStub');
const AgentPoolsApi_1 = require('../apis/AgentPoolsApi');
class ObservableAgentPoolsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new AgentPoolsApi_1.AgentPoolsApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new AgentPoolsApi_1.AgentPoolsApiResponseProcessor();
  }
  /**
      * Activates scheduled Agent pool update
      * Activate an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  activateAgentPoolsUpdate(poolId, updateId, _options) {
    const requestContextPromise = this.requestFactory.activateAgentPoolsUpdate(poolId, updateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateAgentPoolsUpdate(rsp)));
      }));
  }
  /**
      * Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.
      * Create an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdate
      */
  createAgentPoolsUpdate(poolId, AgentPoolUpdate, _options) {
    const requestContextPromise = this.requestFactory.createAgentPoolsUpdate(poolId, AgentPoolUpdate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createAgentPoolsUpdate(rsp)));
      }));
  }
  /**
      * Deactivates scheduled Agent pool update
      * Deactivate an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deactivateAgentPoolsUpdate(poolId, updateId, _options) {
    const requestContextPromise = this.requestFactory.deactivateAgentPoolsUpdate(poolId, updateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateAgentPoolsUpdate(rsp)));
      }));
  }
  /**
      * Deletes Agent pool update
      * Delete an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  deleteAgentPoolsUpdate(poolId, updateId, _options) {
    const requestContextPromise = this.requestFactory.deleteAgentPoolsUpdate(poolId, updateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteAgentPoolsUpdate(rsp)));
      }));
  }
  /**
      * Retrieves Agent pool update from updateId
      * Retrieve an Agent Pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  getAgentPoolsUpdateInstance(poolId, updateId, _options) {
    const requestContextPromise = this.requestFactory.getAgentPoolsUpdateInstance(poolId, updateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAgentPoolsUpdateInstance(rsp)));
      }));
  }
  /**
      * Retrieves the current state of the agent pool update instance settings
      * Retrieve an Agent Pool update's settings
      * @param poolId Id of the agent pool for which the settings will apply
      */
  getAgentPoolsUpdateSettings(poolId, _options) {
    const requestContextPromise = this.requestFactory.getAgentPoolsUpdateSettings(poolId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAgentPoolsUpdateSettings(rsp)));
      }));
  }
  /**
      * Lists all agent pools with pagination support
      * List all Agent Pools
      * @param limitPerPoolType Maximum number of AgentPools being returned
      * @param poolType Agent type to search for
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listAgentPools(limitPerPoolType, poolType, after, _options) {
    const requestContextPromise = this.requestFactory.listAgentPools(limitPerPoolType, poolType, after, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAgentPools(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all agent pool updates
      * List all Agent Pool updates
      * @param poolId Id of the agent pool for which the settings will apply
      * @param scheduled Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates.
      */
  listAgentPoolsUpdates(poolId, scheduled, _options) {
    const requestContextPromise = this.requestFactory.listAgentPoolsUpdates(poolId, scheduled, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAgentPoolsUpdates(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Pauses running or queued Agent pool update
      * Pause an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  pauseAgentPoolsUpdate(poolId, updateId, _options) {
    const requestContextPromise = this.requestFactory.pauseAgentPoolsUpdate(poolId, updateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.pauseAgentPoolsUpdate(rsp)));
      }));
  }
  /**
      * Resumes running or queued Agent pool update
      * Resume an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  resumeAgentPoolsUpdate(poolId, updateId, _options) {
    const requestContextPromise = this.requestFactory.resumeAgentPoolsUpdate(poolId, updateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.resumeAgentPoolsUpdate(rsp)));
      }));
  }
  /**
      * Retries Agent pool update
      * Retry an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  retryAgentPoolsUpdate(poolId, updateId, _options) {
    const requestContextPromise = this.requestFactory.retryAgentPoolsUpdate(poolId, updateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.retryAgentPoolsUpdate(rsp)));
      }));
  }
  /**
      * Stops Agent pool update
      * Stop an Agent Pool update
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      */
  stopAgentPoolsUpdate(poolId, updateId, _options) {
    const requestContextPromise = this.requestFactory.stopAgentPoolsUpdate(poolId, updateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.stopAgentPoolsUpdate(rsp)));
      }));
  }
  /**
      * Updates Agent pool update and return latest agent pool update
      * Update an Agent Pool update by id
      * @param poolId Id of the agent pool for which the settings will apply
      * @param updateId Id of the update
      * @param AgentPoolUpdate
      */
  updateAgentPoolsUpdate(poolId, updateId, AgentPoolUpdate, _options) {
    const requestContextPromise = this.requestFactory.updateAgentPoolsUpdate(poolId, updateId, AgentPoolUpdate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateAgentPoolsUpdate(rsp)));
      }));
  }
  /**
      * Updates an agent pool update settings
      * Update an Agent Pool update settings
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdateSetting
      */
  updateAgentPoolsUpdateSettings(poolId, AgentPoolUpdateSetting, _options) {
    const requestContextPromise = this.requestFactory.updateAgentPoolsUpdateSettings(poolId, AgentPoolUpdateSetting, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateAgentPoolsUpdateSettings(rsp)));
      }));
  }
}
exports.ObservableAgentPoolsApi = ObservableAgentPoolsApi;
const ApiTokenApi_1 = require('../apis/ApiTokenApi');
class ObservableApiTokenApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new ApiTokenApi_1.ApiTokenApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new ApiTokenApi_1.ApiTokenApiResponseProcessor();
  }
  /**
      * Retrieves the metadata for an active API token by id
      * Retrieve an API Token's Metadata
      * @param apiTokenId id of the API Token
      */
  getApiToken(apiTokenId, _options) {
    const requestContextPromise = this.requestFactory.getApiToken(apiTokenId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getApiToken(rsp)));
      }));
  }
  /**
      * Lists all the metadata of the active API tokens
      * List all API Token Metadata
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param q Finds a token that matches the name or clientName.
      */
  listApiTokens(after, limit, q, _options) {
    const requestContextPromise = this.requestFactory.listApiTokens(after, limit, q, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listApiTokens(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Revokes an API token by `apiTokenId`
      * Revoke an API Token
      * @param apiTokenId id of the API Token
      */
  revokeApiToken(apiTokenId, _options) {
    const requestContextPromise = this.requestFactory.revokeApiToken(apiTokenId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeApiToken(rsp)));
      }));
  }
  /**
      * Revokes the API token provided in the Authorization header
      * Revoke the Current API Token
      */
  revokeCurrentApiToken(_options) {
    const requestContextPromise = this.requestFactory.revokeCurrentApiToken(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeCurrentApiToken(rsp)));
      }));
  }
}
exports.ObservableApiTokenApi = ObservableApiTokenApi;
const ApplicationApi_1 = require('../apis/ApplicationApi');
class ObservableApplicationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new ApplicationApi_1.ApplicationApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new ApplicationApi_1.ApplicationApiResponseProcessor();
  }
  /**
      * Activates an inactive application
      * Activate an Application
      * @param appId
      */
  activateApplication(appId, _options) {
    const requestContextPromise = this.requestFactory.activateApplication(appId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateApplication(rsp)));
      }));
  }
  /**
      * Activates the default Provisioning Connection for an application
      * Activate the default Provisioning Connection
      * @param appId
      */
  activateDefaultProvisioningConnectionForApplication(appId, _options) {
    const requestContextPromise = this.requestFactory.activateDefaultProvisioningConnectionForApplication(appId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateDefaultProvisioningConnectionForApplication(rsp)));
      }));
  }
  /**
      * Assigns an application to a policy identified by `policyId`. If the application was previously assigned to another policy, this removes that assignment.
      * Assign an Application to a Policy
      * @param appId
      * @param policyId
      */
  assignApplicationPolicy(appId, policyId, _options) {
    const requestContextPromise = this.requestFactory.assignApplicationPolicy(appId, policyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignApplicationPolicy(rsp)));
      }));
  }
  /**
      * Assigns a group to an application
      * Assign a Group
      * @param appId
      * @param groupId
      * @param applicationGroupAssignment
      */
  assignGroupToApplication(appId, groupId, applicationGroupAssignment, _options) {
    const requestContextPromise = this.requestFactory.assignGroupToApplication(appId, groupId, applicationGroupAssignment, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignGroupToApplication(rsp)));
      }));
  }
  /**
      * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
      * Assign a User
      * @param appId
      * @param appUser
      */
  assignUserToApplication(appId, appUser, _options) {
    const requestContextPromise = this.requestFactory.assignUserToApplication(appId, appUser, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignUserToApplication(rsp)));
      }));
  }
  /**
      * Clones a X.509 certificate for an application key credential from a source application to target application.
      * Clone a Key Credential
      * @param appId
      * @param keyId
      * @param targetAid Unique key of the target Application
      */
  cloneApplicationKey(appId, keyId, targetAid, _options) {
    const requestContextPromise = this.requestFactory.cloneApplicationKey(appId, keyId, targetAid, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.cloneApplicationKey(rsp)));
      }));
  }
  /**
      * Creates a new application to your Okta organization
      * Create an Application
      * @param application
      * @param activate Executes activation lifecycle operation when creating the app
      * @param OktaAccessGateway_Agent
      */
  createApplication(application, activate, OktaAccessGateway_Agent, _options) {
    const requestContextPromise = this.requestFactory.createApplication(application, activate, OktaAccessGateway_Agent, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createApplication(rsp)));
      }));
  }
  /**
      * Deactivates an active application
      * Deactivate an Application
      * @param appId
      */
  deactivateApplication(appId, _options) {
    const requestContextPromise = this.requestFactory.deactivateApplication(appId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateApplication(rsp)));
      }));
  }
  /**
      * Deactivates the default Provisioning Connection for an application
      * Deactivate the default Provisioning Connection for an Application
      * @param appId
      */
  deactivateDefaultProvisioningConnectionForApplication(appId, _options) {
    const requestContextPromise = this.requestFactory.deactivateDefaultProvisioningConnectionForApplication(appId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateDefaultProvisioningConnectionForApplication(rsp)));
      }));
  }
  /**
      * Deletes an inactive application
      * Delete an Application
      * @param appId
      */
  deleteApplication(appId, _options) {
    const requestContextPromise = this.requestFactory.deleteApplication(appId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteApplication(rsp)));
      }));
  }
  /**
      * Generates a new X.509 certificate for an application key credential
      * Generate a Key Credential
      * @param appId
      * @param validityYears
      */
  generateApplicationKey(appId, validityYears, _options) {
    const requestContextPromise = this.requestFactory.generateApplicationKey(appId, validityYears, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.generateApplicationKey(rsp)));
      }));
  }
  /**
      * Generates a new key pair and returns the Certificate Signing Request for it
      * Generate a Certificate Signing Request
      * @param appId
      * @param metadata
      */
  generateCsrForApplication(appId, metadata, _options) {
    const requestContextPromise = this.requestFactory.generateCsrForApplication(appId, metadata, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.generateCsrForApplication(rsp)));
      }));
  }
  /**
      * Retrieves an application from your Okta organization by `id`
      * Retrieve an Application
      * @param appId
      * @param expand
      */
  getApplication(appId, expand, _options) {
    const requestContextPromise = this.requestFactory.getApplication(appId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getApplication(rsp)));
      }));
  }
  /**
      * Retrieves an application group assignment
      * Retrieve an Assigned Group
      * @param appId
      * @param groupId
      * @param expand
      */
  getApplicationGroupAssignment(appId, groupId, expand, _options) {
    const requestContextPromise = this.requestFactory.getApplicationGroupAssignment(appId, groupId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getApplicationGroupAssignment(rsp)));
      }));
  }
  /**
      * Retrieves a specific application key credential by kid
      * Retrieve a Key Credential
      * @param appId
      * @param keyId
      */
  getApplicationKey(appId, keyId, _options) {
    const requestContextPromise = this.requestFactory.getApplicationKey(appId, keyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getApplicationKey(rsp)));
      }));
  }
  /**
      * Retrieves a specific user assignment for application by `id`
      * Retrieve an Assigned User
      * @param appId
      * @param userId
      * @param expand
      */
  getApplicationUser(appId, userId, expand, _options) {
    const requestContextPromise = this.requestFactory.getApplicationUser(appId, userId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getApplicationUser(rsp)));
      }));
  }
  /**
      * Retrieves a certificate signing request for the app by `id`
      * Retrieve a Certificate Signing Request
      * @param appId
      * @param csrId
      */
  getCsrForApplication(appId, csrId, _options) {
    const requestContextPromise = this.requestFactory.getCsrForApplication(appId, csrId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getCsrForApplication(rsp)));
      }));
  }
  /**
      * Retrieves the default Provisioning Connection for application
      * Retrieve the default Provisioning Connection
      * @param appId
      */
  getDefaultProvisioningConnectionForApplication(appId, _options) {
    const requestContextPromise = this.requestFactory.getDefaultProvisioningConnectionForApplication(appId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getDefaultProvisioningConnectionForApplication(rsp)));
      }));
  }
  /**
      * Retrieves a Feature object for an application
      * Retrieve a Feature
      * @param appId
      * @param name
      */
  getFeatureForApplication(appId, name, _options) {
    const requestContextPromise = this.requestFactory.getFeatureForApplication(appId, name, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getFeatureForApplication(rsp)));
      }));
  }
  /**
      * Retrieves a token for the specified application
      * Retrieve an OAuth 2.0 Token
      * @param appId
      * @param tokenId
      * @param expand
      */
  getOAuth2TokenForApplication(appId, tokenId, expand, _options) {
    const requestContextPromise = this.requestFactory.getOAuth2TokenForApplication(appId, tokenId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getOAuth2TokenForApplication(rsp)));
      }));
  }
  /**
      * Retrieves a single scope consent grant for the application
      * Retrieve a Scope Consent Grant
      * @param appId
      * @param grantId
      * @param expand
      */
  getScopeConsentGrant(appId, grantId, expand, _options) {
    const requestContextPromise = this.requestFactory.getScopeConsentGrant(appId, grantId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getScopeConsentGrant(rsp)));
      }));
  }
  /**
      * Grants consent for the application to request an OAuth 2.0 Okta scope
      * Grant Consent to Scope
      * @param appId
      * @param oAuth2ScopeConsentGrant
      */
  grantConsentToScope(appId, oAuth2ScopeConsentGrant, _options) {
    const requestContextPromise = this.requestFactory.grantConsentToScope(appId, oAuth2ScopeConsentGrant, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.grantConsentToScope(rsp)));
      }));
  }
  /**
      * Lists all group assignments for an application
      * List all Assigned Groups
      * @param appId
      * @param q
      * @param after Specifies the pagination cursor for the next page of assignments
      * @param limit Specifies the number of results for a page
      * @param expand
      */
  listApplicationGroupAssignments(appId, q, after, limit, expand, _options) {
    const requestContextPromise = this.requestFactory.listApplicationGroupAssignments(appId, q, after, limit, expand, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listApplicationGroupAssignments(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all key credentials for an application
      * List all Key Credentials
      * @param appId
      */
  listApplicationKeys(appId, _options) {
    const requestContextPromise = this.requestFactory.listApplicationKeys(appId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listApplicationKeys(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all assigned [application users](#application-user-model) for an application
      * List all Assigned Users
      * @param appId
      * @param q
      * @param query_scope
      * @param after specifies the pagination cursor for the next page of assignments
      * @param limit specifies the number of results for a page
      * @param filter
      * @param expand
      */
  listApplicationUsers(appId, q, query_scope, after, limit, filter, expand, _options) {
    const requestContextPromise = this.requestFactory.listApplicationUsers(appId, q, query_scope, after, limit, filter, expand, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listApplicationUsers(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all applications with pagination. A subset of apps can be returned that match a supported filter expression or query.
      * List all Applications
      * @param q
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of results for a page
      * @param filter Filters apps by status, user.id, group.id or credentials.signing.kid expression
      * @param expand Traverses users link relationship and optionally embeds Application User resource
      * @param includeNonDeleted
      */
  listApplications(q, after, limit, filter, expand, includeNonDeleted, _options) {
    const requestContextPromise = this.requestFactory.listApplications(q, after, limit, filter, expand, includeNonDeleted, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listApplications(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all Certificate Signing Requests for an application
      * List all Certificate Signing Requests
      * @param appId
      */
  listCsrsForApplication(appId, _options) {
    const requestContextPromise = this.requestFactory.listCsrsForApplication(appId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listCsrsForApplication(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all features for an application
      * List all Features
      * @param appId
      */
  listFeaturesForApplication(appId, _options) {
    const requestContextPromise = this.requestFactory.listFeaturesForApplication(appId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listFeaturesForApplication(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all tokens for the application
      * List all OAuth 2.0 Tokens
      * @param appId
      * @param expand
      * @param after
      * @param limit
      */
  listOAuth2TokensForApplication(appId, expand, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listOAuth2TokensForApplication(appId, expand, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listOAuth2TokensForApplication(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all scope consent grants for the application
      * List all Scope Consent Grants
      * @param appId
      * @param expand
      */
  listScopeConsentGrants(appId, expand, _options) {
    const requestContextPromise = this.requestFactory.listScopeConsentGrants(appId, expand, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listScopeConsentGrants(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Publishes a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
      * Publish a Certificate Signing Request
      * @param appId
      * @param csrId
      * @param body
      */
  publishCsrFromApplication(appId, csrId, body, _options) {
    const requestContextPromise = this.requestFactory.publishCsrFromApplication(appId, csrId, body, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.publishCsrFromApplication(rsp)));
      }));
  }
  /**
      * Replaces an application
      * Replace an Application
      * @param appId
      * @param application
      */
  replaceApplication(appId, application, _options) {
    const requestContextPromise = this.requestFactory.replaceApplication(appId, application, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceApplication(rsp)));
      }));
  }
  /**
      * Revokes a certificate signing request and deletes the key pair from the application
      * Revoke a Certificate Signing Request
      * @param appId
      * @param csrId
      */
  revokeCsrFromApplication(appId, csrId, _options) {
    const requestContextPromise = this.requestFactory.revokeCsrFromApplication(appId, csrId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeCsrFromApplication(rsp)));
      }));
  }
  /**
      * Revokes the specified token for the specified application
      * Revoke an OAuth 2.0 Token
      * @param appId
      * @param tokenId
      */
  revokeOAuth2TokenForApplication(appId, tokenId, _options) {
    const requestContextPromise = this.requestFactory.revokeOAuth2TokenForApplication(appId, tokenId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeOAuth2TokenForApplication(rsp)));
      }));
  }
  /**
      * Revokes all tokens for the specified application
      * Revoke all OAuth 2.0 Tokens
      * @param appId
      */
  revokeOAuth2TokensForApplication(appId, _options) {
    const requestContextPromise = this.requestFactory.revokeOAuth2TokensForApplication(appId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeOAuth2TokensForApplication(rsp)));
      }));
  }
  /**
      * Revokes permission for the application to request the given scope
      * Revoke a Scope Consent Grant
      * @param appId
      * @param grantId
      */
  revokeScopeConsentGrant(appId, grantId, _options) {
    const requestContextPromise = this.requestFactory.revokeScopeConsentGrant(appId, grantId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeScopeConsentGrant(rsp)));
      }));
  }
  /**
      * Unassigns a group from an application
      * Unassign a Group
      * @param appId
      * @param groupId
      */
  unassignApplicationFromGroup(appId, groupId, _options) {
    const requestContextPromise = this.requestFactory.unassignApplicationFromGroup(appId, groupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignApplicationFromGroup(rsp)));
      }));
  }
  /**
      * Unassigns a user from an application
      * Unassign a User
      * @param appId
      * @param userId
      * @param sendEmail
      */
  unassignUserFromApplication(appId, userId, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.unassignUserFromApplication(appId, userId, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignUserFromApplication(rsp)));
      }));
  }
  /**
      * Updates a user's profile for an application
      * Update an Application Profile for Assigned User
      * @param appId
      * @param userId
      * @param appUser
      */
  updateApplicationUser(appId, userId, appUser, _options) {
    const requestContextPromise = this.requestFactory.updateApplicationUser(appId, userId, appUser, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateApplicationUser(rsp)));
      }));
  }
  /**
      * Updates the default provisioning connection for application
      * Update the default Provisioning Connection
      * @param appId
      * @param ProvisioningConnectionRequest
      * @param activate
      */
  updateDefaultProvisioningConnectionForApplication(appId, ProvisioningConnectionRequest, activate, _options) {
    const requestContextPromise = this.requestFactory.updateDefaultProvisioningConnectionForApplication(appId, ProvisioningConnectionRequest, activate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateDefaultProvisioningConnectionForApplication(rsp)));
      }));
  }
  /**
      * Updates a Feature object for an application
      * Update a Feature
      * @param appId
      * @param name
      * @param CapabilitiesObject
      */
  updateFeatureForApplication(appId, name, CapabilitiesObject, _options) {
    const requestContextPromise = this.requestFactory.updateFeatureForApplication(appId, name, CapabilitiesObject, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateFeatureForApplication(rsp)));
      }));
  }
  /**
      * Uploads a logo for the application. The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
      * Upload a Logo
      * @param appId
      * @param file
      */
  uploadApplicationLogo(appId, file, _options) {
    const requestContextPromise = this.requestFactory.uploadApplicationLogo(appId, file, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.uploadApplicationLogo(rsp)));
      }));
  }
}
exports.ObservableApplicationApi = ObservableApplicationApi;
const AttackProtectionApi_1 = require('../apis/AttackProtectionApi');
class ObservableAttackProtectionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new AttackProtectionApi_1.AttackProtectionApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new AttackProtectionApi_1.AttackProtectionApiResponseProcessor();
  }
  /**
      * Retrieves the User Lockout Settings for an org
      * Retrieve the User Lockout Settings
      */
  getUserLockoutSettings(_options) {
    const requestContextPromise = this.requestFactory.getUserLockoutSettings(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.getUserLockoutSettings(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces the User Lockout Settings for an org
      * Replace the User Lockout Settings
      * @param lockoutSettings
      */
  replaceUserLockoutSettings(lockoutSettings, _options) {
    const requestContextPromise = this.requestFactory.replaceUserLockoutSettings(lockoutSettings, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceUserLockoutSettings(rsp)));
      }));
  }
}
exports.ObservableAttackProtectionApi = ObservableAttackProtectionApi;
const AuthenticatorApi_1 = require('../apis/AuthenticatorApi');
class ObservableAuthenticatorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new AuthenticatorApi_1.AuthenticatorApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new AuthenticatorApi_1.AuthenticatorApiResponseProcessor();
  }
  /**
      * Activates an authenticator by `authenticatorId`
      * Activate an Authenticator
      * @param authenticatorId
      */
  activateAuthenticator(authenticatorId, _options) {
    const requestContextPromise = this.requestFactory.activateAuthenticator(authenticatorId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateAuthenticator(rsp)));
      }));
  }
  /**
      * Creates an authenticator. You can use this operation as part of the \"Create a custom authenticator\" flow. See the [Custom authenticator integration guide](https://developer.okta.com/docs/guides/authenticators-custom-authenticator/android/main/).
      * Create an Authenticator
      * @param authenticator
      * @param activate Whether to execute the activation lifecycle operation when Okta creates the authenticator
      */
  createAuthenticator(authenticator, activate, _options) {
    const requestContextPromise = this.requestFactory.createAuthenticator(authenticator, activate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createAuthenticator(rsp)));
      }));
  }
  /**
      * Deactivates an authenticator by `authenticatorId`
      * Deactivate an Authenticator
      * @param authenticatorId
      */
  deactivateAuthenticator(authenticatorId, _options) {
    const requestContextPromise = this.requestFactory.deactivateAuthenticator(authenticatorId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateAuthenticator(rsp)));
      }));
  }
  /**
      * Retrieves an authenticator from your Okta organization by `authenticatorId`
      * Retrieve an Authenticator
      * @param authenticatorId
      */
  getAuthenticator(authenticatorId, _options) {
    const requestContextPromise = this.requestFactory.getAuthenticator(authenticatorId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAuthenticator(rsp)));
      }));
  }
  /**
      * Retrieves the well-known app authenticator configuration, which includes an app authenticator's settings, supported methods and various other configuration details
      * Retrieve the Well-Known App Authenticator Configuration
      * @param oauthClientId Filters app authenticator configurations by &#x60;oauthClientId&#x60;
      */
  getWellKnownAppAuthenticatorConfiguration(oauthClientId, _options) {
    const requestContextPromise = this.requestFactory.getWellKnownAppAuthenticatorConfiguration(oauthClientId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.getWellKnownAppAuthenticatorConfiguration(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all authenticators
      * List all Authenticators
      */
  listAuthenticators(_options) {
    const requestContextPromise = this.requestFactory.listAuthenticators(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAuthenticators(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces an authenticator
      * Replace an Authenticator
      * @param authenticatorId
      * @param authenticator
      */
  replaceAuthenticator(authenticatorId, authenticator, _options) {
    const requestContextPromise = this.requestFactory.replaceAuthenticator(authenticatorId, authenticator, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceAuthenticator(rsp)));
      }));
  }
}
exports.ObservableAuthenticatorApi = ObservableAuthenticatorApi;
const AuthorizationServerApi_1 = require('../apis/AuthorizationServerApi');
class ObservableAuthorizationServerApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new AuthorizationServerApi_1.AuthorizationServerApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new AuthorizationServerApi_1.AuthorizationServerApiResponseProcessor();
  }
  /**
      * Activates an authorization server
      * Activate an Authorization Server
      * @param authServerId
      */
  activateAuthorizationServer(authServerId, _options) {
    const requestContextPromise = this.requestFactory.activateAuthorizationServer(authServerId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateAuthorizationServer(rsp)));
      }));
  }
  /**
      * Activates an authorization server policy
      * Activate a Policy
      * @param authServerId
      * @param policyId
      */
  activateAuthorizationServerPolicy(authServerId, policyId, _options) {
    const requestContextPromise = this.requestFactory.activateAuthorizationServerPolicy(authServerId, policyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateAuthorizationServerPolicy(rsp)));
      }));
  }
  /**
      * Activates an authorization server policy rule
      * Activate a Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const requestContextPromise = this.requestFactory.activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateAuthorizationServerPolicyRule(rsp)));
      }));
  }
  /**
      * Creates an authorization server
      * Create an Authorization Server
      * @param authorizationServer
      */
  createAuthorizationServer(authorizationServer, _options) {
    const requestContextPromise = this.requestFactory.createAuthorizationServer(authorizationServer, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createAuthorizationServer(rsp)));
      }));
  }
  /**
      * Creates a policy
      * Create a Policy
      * @param authServerId
      * @param policy
      */
  createAuthorizationServerPolicy(authServerId, policy, _options) {
    const requestContextPromise = this.requestFactory.createAuthorizationServerPolicy(authServerId, policy, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createAuthorizationServerPolicy(rsp)));
      }));
  }
  /**
      * Creates a policy rule for the specified Custom Authorization Server and Policy
      * Create a Policy Rule
      * @param policyId
      * @param authServerId
      * @param policyRule
      */
  createAuthorizationServerPolicyRule(policyId, authServerId, policyRule, _options) {
    const requestContextPromise = this.requestFactory.createAuthorizationServerPolicyRule(policyId, authServerId, policyRule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createAuthorizationServerPolicyRule(rsp)));
      }));
  }
  /**
      * Creates a custom token claim
      * Create a Custom Token Claim
      * @param authServerId
      * @param oAuth2Claim
      */
  createOAuth2Claim(authServerId, oAuth2Claim, _options) {
    const requestContextPromise = this.requestFactory.createOAuth2Claim(authServerId, oAuth2Claim, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createOAuth2Claim(rsp)));
      }));
  }
  /**
      * Creates a custom token scope
      * Create a Custom Token Scope
      * @param authServerId
      * @param oAuth2Scope
      */
  createOAuth2Scope(authServerId, oAuth2Scope, _options) {
    const requestContextPromise = this.requestFactory.createOAuth2Scope(authServerId, oAuth2Scope, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createOAuth2Scope(rsp)));
      }));
  }
  /**
      * Deactivates an authorization server
      * Deactivate an Authorization Server
      * @param authServerId
      */
  deactivateAuthorizationServer(authServerId, _options) {
    const requestContextPromise = this.requestFactory.deactivateAuthorizationServer(authServerId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateAuthorizationServer(rsp)));
      }));
  }
  /**
      * Deactivates an authorization server policy
      * Deactivate a Policy
      * @param authServerId
      * @param policyId
      */
  deactivateAuthorizationServerPolicy(authServerId, policyId, _options) {
    const requestContextPromise = this.requestFactory.deactivateAuthorizationServerPolicy(authServerId, policyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateAuthorizationServerPolicy(rsp)));
      }));
  }
  /**
      * Deactivates an authorization server policy rule
      * Deactivate a Policy Rule
      * @param authServerId
      * @param policyId
      * @param ruleId
      */
  deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    const requestContextPromise = this.requestFactory.deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateAuthorizationServerPolicyRule(rsp)));
      }));
  }
  /**
      * Deletes an authorization server
      * Delete an Authorization Server
      * @param authServerId
      */
  deleteAuthorizationServer(authServerId, _options) {
    const requestContextPromise = this.requestFactory.deleteAuthorizationServer(authServerId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteAuthorizationServer(rsp)));
      }));
  }
  /**
      * Deletes a policy
      * Delete a Policy
      * @param authServerId
      * @param policyId
      */
  deleteAuthorizationServerPolicy(authServerId, policyId, _options) {
    const requestContextPromise = this.requestFactory.deleteAuthorizationServerPolicy(authServerId, policyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteAuthorizationServerPolicy(rsp)));
      }));
  }
  /**
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
      * Delete a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  deleteAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options) {
    const requestContextPromise = this.requestFactory.deleteAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteAuthorizationServerPolicyRule(rsp)));
      }));
  }
  /**
      * Deletes a custom token claim
      * Delete a Custom Token Claim
      * @param authServerId
      * @param claimId
      */
  deleteOAuth2Claim(authServerId, claimId, _options) {
    const requestContextPromise = this.requestFactory.deleteOAuth2Claim(authServerId, claimId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteOAuth2Claim(rsp)));
      }));
  }
  /**
      * Deletes a custom token scope
      * Delete a Custom Token Scope
      * @param authServerId
      * @param scopeId
      */
  deleteOAuth2Scope(authServerId, scopeId, _options) {
    const requestContextPromise = this.requestFactory.deleteOAuth2Scope(authServerId, scopeId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteOAuth2Scope(rsp)));
      }));
  }
  /**
      * Retrieves an authorization server
      * Retrieve an Authorization Server
      * @param authServerId
      */
  getAuthorizationServer(authServerId, _options) {
    const requestContextPromise = this.requestFactory.getAuthorizationServer(authServerId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAuthorizationServer(rsp)));
      }));
  }
  /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param authServerId
      * @param policyId
      */
  getAuthorizationServerPolicy(authServerId, policyId, _options) {
    const requestContextPromise = this.requestFactory.getAuthorizationServerPolicy(authServerId, policyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAuthorizationServerPolicy(rsp)));
      }));
  }
  /**
      * Retrieves a policy rule by `ruleId`
      * Retrieve a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      */
  getAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options) {
    const requestContextPromise = this.requestFactory.getAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAuthorizationServerPolicyRule(rsp)));
      }));
  }
  /**
      * Retrieves a custom token claim
      * Retrieve a Custom Token Claim
      * @param authServerId
      * @param claimId
      */
  getOAuth2Claim(authServerId, claimId, _options) {
    const requestContextPromise = this.requestFactory.getOAuth2Claim(authServerId, claimId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getOAuth2Claim(rsp)));
      }));
  }
  /**
      * Retrieves a custom token scope
      * Retrieve a Custom Token Scope
      * @param authServerId
      * @param scopeId
      */
  getOAuth2Scope(authServerId, scopeId, _options) {
    const requestContextPromise = this.requestFactory.getOAuth2Scope(authServerId, scopeId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getOAuth2Scope(rsp)));
      }));
  }
  /**
      * Retrieves a refresh token for a client
      * Retrieve a Refresh Token for a Client
      * @param authServerId
      * @param clientId
      * @param tokenId
      * @param expand
      */
  getRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, expand, _options) {
    const requestContextPromise = this.requestFactory.getRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getRefreshTokenForAuthorizationServerAndClient(rsp)));
      }));
  }
  /**
      * Lists all credential keys
      * List all Credential Keys
      * @param authServerId
      */
  listAuthorizationServerKeys(authServerId, _options) {
    const requestContextPromise = this.requestFactory.listAuthorizationServerKeys(authServerId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAuthorizationServerKeys(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all policies
      * List all Policies
      * @param authServerId
      */
  listAuthorizationServerPolicies(authServerId, _options) {
    const requestContextPromise = this.requestFactory.listAuthorizationServerPolicies(authServerId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAuthorizationServerPolicies(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all policy rules for the specified Custom Authorization Server and Policy
      * List all Policy Rules
      * @param policyId
      * @param authServerId
      */
  listAuthorizationServerPolicyRules(policyId, authServerId, _options) {
    const requestContextPromise = this.requestFactory.listAuthorizationServerPolicyRules(policyId, authServerId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAuthorizationServerPolicyRules(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all authorization servers
      * List all Authorization Servers
      * @param q
      * @param limit
      * @param after
      */
  listAuthorizationServers(q, limit, after, _options) {
    const requestContextPromise = this.requestFactory.listAuthorizationServers(q, limit, after, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAuthorizationServers(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all custom token claims
      * List all Custom Token Claims
      * @param authServerId
      */
  listOAuth2Claims(authServerId, _options) {
    const requestContextPromise = this.requestFactory.listOAuth2Claims(authServerId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listOAuth2Claims(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all clients
      * List all Clients
      * @param authServerId
      */
  listOAuth2ClientsForAuthorizationServer(authServerId, _options) {
    const requestContextPromise = this.requestFactory.listOAuth2ClientsForAuthorizationServer(authServerId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listOAuth2ClientsForAuthorizationServer(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all custom token scopes
      * List all Custom Token Scopes
      * @param authServerId
      * @param q
      * @param filter
      * @param cursor
      * @param limit
      */
  listOAuth2Scopes(authServerId, q, filter, cursor, limit, _options) {
    const requestContextPromise = this.requestFactory.listOAuth2Scopes(authServerId, q, filter, cursor, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listOAuth2Scopes(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all refresh tokens for a client
      * List all Refresh Tokens for a Client
      * @param authServerId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, expand, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, expand, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listRefreshTokensForAuthorizationServerAndClient(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces an authorization server
      * Replace an Authorization Server
      * @param authServerId
      * @param authorizationServer
      */
  replaceAuthorizationServer(authServerId, authorizationServer, _options) {
    const requestContextPromise = this.requestFactory.replaceAuthorizationServer(authServerId, authorizationServer, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceAuthorizationServer(rsp)));
      }));
  }
  /**
      * Replaces a policy
      * Replace a Policy
      * @param authServerId
      * @param policyId
      * @param policy
      */
  replaceAuthorizationServerPolicy(authServerId, policyId, policy, _options) {
    const requestContextPromise = this.requestFactory.replaceAuthorizationServerPolicy(authServerId, policyId, policy, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceAuthorizationServerPolicy(rsp)));
      }));
  }
  /**
      * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
      * Replace a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      * @param policyRule
      */
  replaceAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule, _options) {
    const requestContextPromise = this.requestFactory.replaceAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceAuthorizationServerPolicyRule(rsp)));
      }));
  }
  /**
      * Replaces a custom token claim
      * Replace a Custom Token Claim
      * @param authServerId
      * @param claimId
      * @param oAuth2Claim
      */
  replaceOAuth2Claim(authServerId, claimId, oAuth2Claim, _options) {
    const requestContextPromise = this.requestFactory.replaceOAuth2Claim(authServerId, claimId, oAuth2Claim, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceOAuth2Claim(rsp)));
      }));
  }
  /**
      * Replaces a custom token scope
      * Replace a Custom Token Scope
      * @param authServerId
      * @param scopeId
      * @param oAuth2Scope
      */
  replaceOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options) {
    const requestContextPromise = this.requestFactory.replaceOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceOAuth2Scope(rsp)));
      }));
  }
  /**
      * Revokes a refresh token for a client
      * Revoke a Refresh Token for a Client
      * @param authServerId
      * @param clientId
      * @param tokenId
      */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, _options) {
    const requestContextPromise = this.requestFactory.revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeRefreshTokenForAuthorizationServerAndClient(rsp)));
      }));
  }
  /**
      * Revokes all refresh tokens for a client
      * Revoke all Refresh Tokens for a Client
      * @param authServerId
      * @param clientId
      */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, _options) {
    const requestContextPromise = this.requestFactory.revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeRefreshTokensForAuthorizationServerAndClient(rsp)));
      }));
  }
  /**
      * Rotates all credential keys
      * Rotate all Credential Keys
      * @param authServerId
      * @param use
      */
  rotateAuthorizationServerKeys(authServerId, use, _options) {
    const requestContextPromise = this.requestFactory.rotateAuthorizationServerKeys(authServerId, use, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.rotateAuthorizationServerKeys(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
}
exports.ObservableAuthorizationServerApi = ObservableAuthorizationServerApi;
const BehaviorApi_1 = require('../apis/BehaviorApi');
class ObservableBehaviorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new BehaviorApi_1.BehaviorApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new BehaviorApi_1.BehaviorApiResponseProcessor();
  }
  /**
      * Activates a behavior detection rule
      * Activate a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  activateBehaviorDetectionRule(behaviorId, _options) {
    const requestContextPromise = this.requestFactory.activateBehaviorDetectionRule(behaviorId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateBehaviorDetectionRule(rsp)));
      }));
  }
  /**
      * Creates a new behavior detection rule
      * Create a Behavior Detection Rule
      * @param rule
      */
  createBehaviorDetectionRule(rule, _options) {
    const requestContextPromise = this.requestFactory.createBehaviorDetectionRule(rule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createBehaviorDetectionRule(rsp)));
      }));
  }
  /**
      * Deactivates a behavior detection rule
      * Deactivate a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deactivateBehaviorDetectionRule(behaviorId, _options) {
    const requestContextPromise = this.requestFactory.deactivateBehaviorDetectionRule(behaviorId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateBehaviorDetectionRule(rsp)));
      }));
  }
  /**
      * Deletes a Behavior Detection Rule by `behaviorId`
      * Delete a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  deleteBehaviorDetectionRule(behaviorId, _options) {
    const requestContextPromise = this.requestFactory.deleteBehaviorDetectionRule(behaviorId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteBehaviorDetectionRule(rsp)));
      }));
  }
  /**
      * Retrieves a Behavior Detection Rule by `behaviorId`
      * Retrieve a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      */
  getBehaviorDetectionRule(behaviorId, _options) {
    const requestContextPromise = this.requestFactory.getBehaviorDetectionRule(behaviorId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getBehaviorDetectionRule(rsp)));
      }));
  }
  /**
      * Lists all behavior detection rules with pagination support
      * List all Behavior Detection Rules
      */
  listBehaviorDetectionRules(_options) {
    const requestContextPromise = this.requestFactory.listBehaviorDetectionRules(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listBehaviorDetectionRules(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a Behavior Detection Rule by `behaviorId`
      * Replace a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      * @param rule
      */
  replaceBehaviorDetectionRule(behaviorId, rule, _options) {
    const requestContextPromise = this.requestFactory.replaceBehaviorDetectionRule(behaviorId, rule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceBehaviorDetectionRule(rsp)));
      }));
  }
}
exports.ObservableBehaviorApi = ObservableBehaviorApi;
const CAPTCHAApi_1 = require('../apis/CAPTCHAApi');
class ObservableCAPTCHAApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new CAPTCHAApi_1.CAPTCHAApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new CAPTCHAApi_1.CAPTCHAApiResponseProcessor();
  }
  /**
      * Creates a new CAPTCHA instance. In the current release, we only allow one CAPTCHA instance per org.
      * Create a CAPTCHA instance
      * @param instance
      */
  createCaptchaInstance(instance, _options) {
    const requestContextPromise = this.requestFactory.createCaptchaInstance(instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createCaptchaInstance(rsp)));
      }));
  }
  /**
      * Deletes a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
      * Delete a CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  deleteCaptchaInstance(captchaId, _options) {
    const requestContextPromise = this.requestFactory.deleteCaptchaInstance(captchaId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteCaptchaInstance(rsp)));
      }));
  }
  /**
      * Retrieves a CAPTCHA instance by `captchaId`
      * Retrieve a CAPTCHA Instance
      * @param captchaId id of the CAPTCHA
      */
  getCaptchaInstance(captchaId, _options) {
    const requestContextPromise = this.requestFactory.getCaptchaInstance(captchaId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getCaptchaInstance(rsp)));
      }));
  }
  /**
      * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
      * List all CAPTCHA instances
      */
  listCaptchaInstances(_options) {
    const requestContextPromise = this.requestFactory.listCaptchaInstances(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listCaptchaInstances(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a CAPTCHA instance by `captchaId`
      * Replace a CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  replaceCaptchaInstance(captchaId, instance, _options) {
    const requestContextPromise = this.requestFactory.replaceCaptchaInstance(captchaId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceCaptchaInstance(rsp)));
      }));
  }
  /**
      * Partially updates a CAPTCHA instance by `captchaId`
      * Update a CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  updateCaptchaInstance(captchaId, instance, _options) {
    const requestContextPromise = this.requestFactory.updateCaptchaInstance(captchaId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateCaptchaInstance(rsp)));
      }));
  }
}
exports.ObservableCAPTCHAApi = ObservableCAPTCHAApi;
const CustomDomainApi_1 = require('../apis/CustomDomainApi');
class ObservableCustomDomainApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new CustomDomainApi_1.CustomDomainApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new CustomDomainApi_1.CustomDomainApiResponseProcessor();
  }
  /**
      * Creates your Custom Domain
      * Create a Custom Domain
      * @param domain
      */
  createCustomDomain(domain, _options) {
    const requestContextPromise = this.requestFactory.createCustomDomain(domain, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createCustomDomain(rsp)));
      }));
  }
  /**
      * Deletes a Custom Domain by `id`
      * Delete a Custom Domain
      * @param domainId
      */
  deleteCustomDomain(domainId, _options) {
    const requestContextPromise = this.requestFactory.deleteCustomDomain(domainId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteCustomDomain(rsp)));
      }));
  }
  /**
      * Retrieves a Custom Domain by `id`
      * Retrieve a Custom Domain
      * @param domainId
      */
  getCustomDomain(domainId, _options) {
    const requestContextPromise = this.requestFactory.getCustomDomain(domainId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getCustomDomain(rsp)));
      }));
  }
  /**
      * Lists all verified Custom Domains for the org
      * List all Custom Domains
      */
  listCustomDomains(_options) {
    const requestContextPromise = this.requestFactory.listCustomDomains(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listCustomDomains(rsp)));
      }));
  }
  /**
      * Replaces a Custom Domain by `id`
      * Replace a Custom Domain's brandId
      * @param domainId
      * @param UpdateDomain
      */
  replaceCustomDomain(domainId, UpdateDomain, _options) {
    const requestContextPromise = this.requestFactory.replaceCustomDomain(domainId, UpdateDomain, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceCustomDomain(rsp)));
      }));
  }
  /**
      * Creates or replaces the certificate for the custom domain
      * Upsert the Certificate
      * @param domainId
      * @param certificate
      */
  upsertCertificate(domainId, certificate, _options) {
    const requestContextPromise = this.requestFactory.upsertCertificate(domainId, certificate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.upsertCertificate(rsp)));
      }));
  }
  /**
      * Verifies the Custom Domain by `id`
      * Verify a Custom Domain
      * @param domainId
      */
  verifyDomain(domainId, _options) {
    const requestContextPromise = this.requestFactory.verifyDomain(domainId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.verifyDomain(rsp)));
      }));
  }
}
exports.ObservableCustomDomainApi = ObservableCustomDomainApi;
const CustomizationApi_1 = require('../apis/CustomizationApi');
class ObservableCustomizationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new CustomizationApi_1.CustomizationApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new CustomizationApi_1.CustomizationApiResponseProcessor();
  }
  /**
      * Creates new brand in your org
      * Create a Brand
      * @param CreateBrandRequest
      */
  createBrand(CreateBrandRequest, _options) {
    const requestContextPromise = this.requestFactory.createBrand(CreateBrandRequest, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createBrand(rsp)));
      }));
  }
  /**
      * Creates a new email customization
      * Create an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param instance
      */
  createEmailCustomization(brandId, templateName, instance, _options) {
    const requestContextPromise = this.requestFactory.createEmailCustomization(brandId, templateName, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createEmailCustomization(rsp)));
      }));
  }
  /**
      * Deletes all customizations for an email template
      * Delete all Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  deleteAllCustomizations(brandId, templateName, _options) {
    const requestContextPromise = this.requestFactory.deleteAllCustomizations(brandId, templateName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteAllCustomizations(rsp)));
      }));
  }
  /**
      * Deletes a brand by its unique identifier
      * Delete a brand
      * @param brandId The ID of the brand.
      */
  deleteBrand(brandId, _options) {
    const requestContextPromise = this.requestFactory.deleteBrand(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteBrand(rsp)));
      }));
  }
  /**
      * Deletes a Theme background image
      * Delete the Background Image
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  deleteBrandThemeBackgroundImage(brandId, themeId, _options) {
    const requestContextPromise = this.requestFactory.deleteBrandThemeBackgroundImage(brandId, themeId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteBrandThemeBackgroundImage(rsp)));
      }));
  }
  /**
      * Deletes a Theme favicon. The theme will use the default Okta favicon.
      * Delete the Favicon
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  deleteBrandThemeFavicon(brandId, themeId, _options) {
    const requestContextPromise = this.requestFactory.deleteBrandThemeFavicon(brandId, themeId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteBrandThemeFavicon(rsp)));
      }));
  }
  /**
      * Deletes a Theme logo. The theme will use the default Okta logo.
      * Delete the Logo
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  deleteBrandThemeLogo(brandId, themeId, _options) {
    const requestContextPromise = this.requestFactory.deleteBrandThemeLogo(brandId, themeId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteBrandThemeLogo(rsp)));
      }));
  }
  /**
      * Deletes the customized error page. As a result, the default error page appears in your live environment.
      * Delete the Customized Error Page
      * @param brandId The ID of the brand.
      */
  deleteCustomizedErrorPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.deleteCustomizedErrorPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteCustomizedErrorPage(rsp)));
      }));
  }
  /**
      * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
      * Delete the Customized Sign-in Page
      * @param brandId The ID of the brand.
      */
  deleteCustomizedSignInPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.deleteCustomizedSignInPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteCustomizedSignInPage(rsp)));
      }));
  }
  /**
      * Deletes an email customization by its unique identifier
      * Delete an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  deleteEmailCustomization(brandId, templateName, customizationId, _options) {
    const requestContextPromise = this.requestFactory.deleteEmailCustomization(brandId, templateName, customizationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteEmailCustomization(rsp)));
      }));
  }
  /**
      * Deletes the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Delete the Preview Error Page
      * @param brandId The ID of the brand.
      */
  deletePreviewErrorPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.deletePreviewErrorPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deletePreviewErrorPage(rsp)));
      }));
  }
  /**
      * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Delete the Preview Sign-in Page
      * @param brandId The ID of the brand.
      */
  deletePreviewSignInPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.deletePreviewSignInPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deletePreviewSignInPage(rsp)));
      }));
  }
  /**
      * Retrieves a brand by `brandId`
      * Retrieve a Brand
      * @param brandId The ID of the brand.
      */
  getBrand(brandId, _options) {
    const requestContextPromise = this.requestFactory.getBrand(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getBrand(rsp)));
      }));
  }
  /**
      * Retrieves a theme for a brand
      * Retrieve a Theme
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      */
  getBrandTheme(brandId, themeId, _options) {
    const requestContextPromise = this.requestFactory.getBrandTheme(brandId, themeId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getBrandTheme(rsp)));
      }));
  }
  /**
      * Retrieves a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getCustomizationPreview(brandId, templateName, customizationId, _options) {
    const requestContextPromise = this.requestFactory.getCustomizationPreview(brandId, templateName, customizationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getCustomizationPreview(rsp)));
      }));
  }
  /**
      * Retrieves the customized error page. The customized error page appears in your live environment.
      * Retrieve the Customized Error Page
      * @param brandId The ID of the brand.
      */
  getCustomizedErrorPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.getCustomizedErrorPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getCustomizedErrorPage(rsp)));
      }));
  }
  /**
      * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
      * Retrieve the Customized Sign-in Page
      * @param brandId The ID of the brand.
      */
  getCustomizedSignInPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.getCustomizedSignInPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getCustomizedSignInPage(rsp)));
      }));
  }
  /**
      * Retrieves the default error page. The default error page appears when no customized error page exists.
      * Retrieve the Default Error Page
      * @param brandId The ID of the brand.
      */
  getDefaultErrorPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.getDefaultErrorPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getDefaultErrorPage(rsp)));
      }));
  }
  /**
      * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
      * Retrieve the Default Sign-in Page
      * @param brandId The ID of the brand.
      */
  getDefaultSignInPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.getDefaultSignInPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getDefaultSignInPage(rsp)));
      }));
  }
  /**
      * Retrieves an email customization by its unique identifier
      * Retrieve an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      */
  getEmailCustomization(brandId, templateName, customizationId, _options) {
    const requestContextPromise = this.requestFactory.getEmailCustomization(brandId, templateName, customizationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getEmailCustomization(rsp)));
      }));
  }
  /**
      * Retrieves an email template's default content
      * Retrieve an Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultContent(brandId, templateName, language, _options) {
    const requestContextPromise = this.requestFactory.getEmailDefaultContent(brandId, templateName, language, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getEmailDefaultContent(rsp)));
      }));
  }
  /**
      * Retrieves a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Retrieve a Preview of the Email Template Default Content
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  getEmailDefaultPreview(brandId, templateName, language, _options) {
    const requestContextPromise = this.requestFactory.getEmailDefaultPreview(brandId, templateName, language, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getEmailDefaultPreview(rsp)));
      }));
  }
  /**
      * Retrieves an email template's settings
      * Retrieve the Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      */
  getEmailSettings(brandId, templateName, _options) {
    const requestContextPromise = this.requestFactory.getEmailSettings(brandId, templateName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getEmailSettings(rsp)));
      }));
  }
  /**
      * Retrieves the details of an email template by name
      * Retrieve an Email Template
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getEmailTemplate(brandId, templateName, expand, _options) {
    const requestContextPromise = this.requestFactory.getEmailTemplate(brandId, templateName, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getEmailTemplate(rsp)));
      }));
  }
  /**
      * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Error Page Sub-Resources
      * @param brandId The ID of the brand.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getErrorPage(brandId, expand, _options) {
    const requestContextPromise = this.requestFactory.getErrorPage(brandId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getErrorPage(rsp)));
      }));
  }
  /**
      * Retrieves the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Retrieve the Preview Error Page Preview
      * @param brandId The ID of the brand.
      */
  getPreviewErrorPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.getPreviewErrorPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getPreviewErrorPage(rsp)));
      }));
  }
  /**
      * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Retrieve the Preview Sign-in Page Preview
      * @param brandId The ID of the brand.
      */
  getPreviewSignInPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.getPreviewSignInPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getPreviewSignInPage(rsp)));
      }));
  }
  /**
      * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
      * Retrieve the Sign-in Page Sub-Resources
      * @param brandId The ID of the brand.
      * @param expand Specifies additional metadata to be included in the response.
      */
  getSignInPage(brandId, expand, _options) {
    const requestContextPromise = this.requestFactory.getSignInPage(brandId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getSignInPage(rsp)));
      }));
  }
  /**
      * Retrieves the sign-out page settings
      * Retrieve the Sign-out Page Settings
      * @param brandId The ID of the brand.
      */
  getSignOutPageSettings(brandId, _options) {
    const requestContextPromise = this.requestFactory.getSignOutPageSettings(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getSignOutPageSettings(rsp)));
      }));
  }
  /**
      * Lists all sign-in widget versions supported by the current org
      * List all Sign-in Widget Versions
      * @param brandId The ID of the brand.
      */
  listAllSignInWidgetVersions(brandId, _options) {
    const requestContextPromise = this.requestFactory.listAllSignInWidgetVersions(brandId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAllSignInWidgetVersions(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all domains associated with a brand by `brandId`
      * List all Domains associated with a Brand
      * @param brandId The ID of the brand.
      */
  listBrandDomains(brandId, _options) {
    const requestContextPromise = this.requestFactory.listBrandDomains(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listBrandDomains(rsp)));
      }));
  }
  /**
      * Lists all the themes in your brand
      * List all Themes
      * @param brandId The ID of the brand.
      */
  listBrandThemes(brandId, _options) {
    const requestContextPromise = this.requestFactory.listBrandThemes(brandId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listBrandThemes(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all the brands in your org
      * List all Brands
      */
  listBrands(_options) {
    const requestContextPromise = this.requestFactory.listBrands(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listBrands(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all customizations of an email template
      * List all Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      */
  listEmailCustomizations(brandId, templateName, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listEmailCustomizations(brandId, templateName, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listEmailCustomizations(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all email templates
      * List all Email Templates
      * @param brandId The ID of the brand.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param expand Specifies additional metadata to be included in the response.
      */
  listEmailTemplates(brandId, after, limit, expand, _options) {
    const requestContextPromise = this.requestFactory.listEmailTemplates(brandId, after, limit, expand, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listEmailTemplates(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a brand by `brandId`
      * Replace a Brand
      * @param brandId The ID of the brand.
      * @param brand
      */
  replaceBrand(brandId, brand, _options) {
    const requestContextPromise = this.requestFactory.replaceBrand(brandId, brand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceBrand(rsp)));
      }));
  }
  /**
      * Replaces a theme for a brand
      * Replace a Theme
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param theme
      */
  replaceBrandTheme(brandId, themeId, theme, _options) {
    const requestContextPromise = this.requestFactory.replaceBrandTheme(brandId, themeId, theme, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceBrandTheme(rsp)));
      }));
  }
  /**
      * Replaces the customized error page. The customized error page appears in your live environment.
      * Replace the Customized Error Page
      * @param brandId The ID of the brand.
      * @param ErrorPage
      */
  replaceCustomizedErrorPage(brandId, ErrorPage, _options) {
    const requestContextPromise = this.requestFactory.replaceCustomizedErrorPage(brandId, ErrorPage, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceCustomizedErrorPage(rsp)));
      }));
  }
  /**
      * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
      * Replace the Customized Sign-in Page
      * @param brandId The ID of the brand.
      * @param SignInPage
      */
  replaceCustomizedSignInPage(brandId, SignInPage, _options) {
    const requestContextPromise = this.requestFactory.replaceCustomizedSignInPage(brandId, SignInPage, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceCustomizedSignInPage(rsp)));
      }));
  }
  /**
      * Replaces an existing email customization using the property values provided
      * Replace an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      * @param instance Request
      */
  replaceEmailCustomization(brandId, templateName, customizationId, instance, _options) {
    const requestContextPromise = this.requestFactory.replaceEmailCustomization(brandId, templateName, customizationId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceEmailCustomization(rsp)));
      }));
  }
  /**
      * Replaces an email template's settings
      * Replace the Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param EmailSettings
      */
  replaceEmailSettings(brandId, templateName, EmailSettings, _options) {
    const requestContextPromise = this.requestFactory.replaceEmailSettings(brandId, templateName, EmailSettings, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceEmailSettings(rsp)));
      }));
  }
  /**
      * Replaces the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
      * Replace the Preview Error Page
      * @param brandId The ID of the brand.
      * @param ErrorPage
      */
  replacePreviewErrorPage(brandId, ErrorPage, _options) {
    const requestContextPromise = this.requestFactory.replacePreviewErrorPage(brandId, ErrorPage, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replacePreviewErrorPage(rsp)));
      }));
  }
  /**
      * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
      * Replace the Preview Sign-in Page
      * @param brandId The ID of the brand.
      * @param SignInPage
      */
  replacePreviewSignInPage(brandId, SignInPage, _options) {
    const requestContextPromise = this.requestFactory.replacePreviewSignInPage(brandId, SignInPage, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replacePreviewSignInPage(rsp)));
      }));
  }
  /**
      * Replaces the sign-out page settings
      * Replace the Sign-out Page Settings
      * @param brandId The ID of the brand.
      * @param HostedPage
      */
  replaceSignOutPageSettings(brandId, HostedPage, _options) {
    const requestContextPromise = this.requestFactory.replaceSignOutPageSettings(brandId, HostedPage, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceSignOutPageSettings(rsp)));
      }));
  }
  /**
      * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
      * Send a Test Email
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
      */
  sendTestEmail(brandId, templateName, language, _options) {
    const requestContextPromise = this.requestFactory.sendTestEmail(brandId, templateName, language, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.sendTestEmail(rsp)));
      }));
  }
  /**
      * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
      * Upload the Background Image
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param file
      */
  uploadBrandThemeBackgroundImage(brandId, themeId, file, _options) {
    const requestContextPromise = this.requestFactory.uploadBrandThemeBackgroundImage(brandId, themeId, file, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.uploadBrandThemeBackgroundImage(rsp)));
      }));
  }
  /**
      * Uploads and replaces the favicon for the theme
      * Upload the Favicon
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param file
      */
  uploadBrandThemeFavicon(brandId, themeId, file, _options) {
    const requestContextPromise = this.requestFactory.uploadBrandThemeFavicon(brandId, themeId, file, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.uploadBrandThemeFavicon(rsp)));
      }));
  }
  /**
      * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Logo
      * @param brandId The ID of the brand.
      * @param themeId The ID of the theme.
      * @param file
      */
  uploadBrandThemeLogo(brandId, themeId, file, _options) {
    const requestContextPromise = this.requestFactory.uploadBrandThemeLogo(brandId, themeId, file, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.uploadBrandThemeLogo(rsp)));
      }));
  }
}
exports.ObservableCustomizationApi = ObservableCustomizationApi;
const DeviceApi_1 = require('../apis/DeviceApi');
class ObservableDeviceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new DeviceApi_1.DeviceApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new DeviceApi_1.DeviceApiResponseProcessor();
  }
  /**
      * Activates a device by `deviceId`
      * Activate a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  activateDevice(deviceId, _options) {
    const requestContextPromise = this.requestFactory.activateDevice(deviceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateDevice(rsp)));
      }));
  }
  /**
      * Deactivates a device by `deviceId`
      * Deactivate a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deactivateDevice(deviceId, _options) {
    const requestContextPromise = this.requestFactory.deactivateDevice(deviceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateDevice(rsp)));
      }));
  }
  /**
      * Deletes a device by `deviceId`
      * Delete a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  deleteDevice(deviceId, _options) {
    const requestContextPromise = this.requestFactory.deleteDevice(deviceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteDevice(rsp)));
      }));
  }
  /**
      * Retrieves a device by `deviceId`
      * Retrieve a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  getDevice(deviceId, _options) {
    const requestContextPromise = this.requestFactory.getDevice(deviceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getDevice(rsp)));
      }));
  }
  /**
      * Lists all devices with pagination support.  A subset of Devices can be returned that match a supported search criteria using the `search` query parameter.  Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request.  > **Note:** Listing devices with `search` should not be used as a part of any critical flows—such as authentication or updates—to prevent potential data loss. `search` results may not reflect the latest information, as this endpoint uses a search index which may not be up-to-date with recent updates to the object. <br> Don't use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss. <br> Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation equires [URL encoding](http://en.wikipedia.org/wiki/Percent-encoding). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
      * List all Devices
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param search SCIM filter expression that filters the results. Searches include all Device &#x60;profile&#x60; properties, as well as the Device &#x60;id&#x60;, &#x60;status&#x60; and &#x60;lastUpdated&#x60; properties.
      */
  listDevices(after, limit, search, _options) {
    const requestContextPromise = this.requestFactory.listDevices(after, limit, search, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listDevices(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Suspends a device by `deviceId`
      * Suspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  suspendDevice(deviceId, _options) {
    const requestContextPromise = this.requestFactory.suspendDevice(deviceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.suspendDevice(rsp)));
      }));
  }
  /**
      * Unsuspends a device by `deviceId`
      * Unsuspend a Device
      * @param deviceId &#x60;id&#x60; of the device
      */
  unsuspendDevice(deviceId, _options) {
    const requestContextPromise = this.requestFactory.unsuspendDevice(deviceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unsuspendDevice(rsp)));
      }));
  }
}
exports.ObservableDeviceApi = ObservableDeviceApi;
const DeviceAssuranceApi_1 = require('../apis/DeviceAssuranceApi');
class ObservableDeviceAssuranceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new DeviceAssuranceApi_1.DeviceAssuranceApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new DeviceAssuranceApi_1.DeviceAssuranceApiResponseProcessor();
  }
  /**
      * Creates a new Device Assurance Policy
      * Create a Device Assurance Policy
      * @param deviceAssurance
      */
  createDeviceAssurancePolicy(deviceAssurance, _options) {
    const requestContextPromise = this.requestFactory.createDeviceAssurancePolicy(deviceAssurance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createDeviceAssurancePolicy(rsp)));
      }));
  }
  /**
      * Deletes a Device Assurance Policy by `deviceAssuranceId`. If the Device Assurance Policy is currently being used in the org Authentication Policies, the delete will not be allowed.
      * Delete a Device Assurance Policy
      * @param deviceAssuranceId Id of the Device Assurance Policy
      */
  deleteDeviceAssurancePolicy(deviceAssuranceId, _options) {
    const requestContextPromise = this.requestFactory.deleteDeviceAssurancePolicy(deviceAssuranceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteDeviceAssurancePolicy(rsp)));
      }));
  }
  /**
      * Retrieves a Device Assurance Policy by `deviceAssuranceId`
      * Retrieve a Device Assurance Policy
      * @param deviceAssuranceId Id of the Device Assurance Policy
      */
  getDeviceAssurancePolicy(deviceAssuranceId, _options) {
    const requestContextPromise = this.requestFactory.getDeviceAssurancePolicy(deviceAssuranceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getDeviceAssurancePolicy(rsp)));
      }));
  }
  /**
      * Lists all device assurance policies
      * List all Device Assurance Policies
      */
  listDeviceAssurancePolicies(_options) {
    const requestContextPromise = this.requestFactory.listDeviceAssurancePolicies(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listDeviceAssurancePolicies(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a Device Assurance Policy by `deviceAssuranceId`
      * Replace a Device Assurance Policy
      * @param deviceAssuranceId Id of the Device Assurance Policy
      * @param deviceAssurance
      */
  replaceDeviceAssurancePolicy(deviceAssuranceId, deviceAssurance, _options) {
    const requestContextPromise = this.requestFactory.replaceDeviceAssurancePolicy(deviceAssuranceId, deviceAssurance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceDeviceAssurancePolicy(rsp)));
      }));
  }
}
exports.ObservableDeviceAssuranceApi = ObservableDeviceAssuranceApi;
const EmailDomainApi_1 = require('../apis/EmailDomainApi');
class ObservableEmailDomainApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new EmailDomainApi_1.EmailDomainApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new EmailDomainApi_1.EmailDomainApiResponseProcessor();
  }
  /**
      * Creates an Email Domain in your org, along with associated username and sender display name
      * Create an Email Domain
      * @param emailDomain
      */
  createEmailDomain(emailDomain, _options) {
    const requestContextPromise = this.requestFactory.createEmailDomain(emailDomain, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createEmailDomain(rsp)));
      }));
  }
  /**
      * Deletes an Email Domain by `emailDomainId`
      * Delete an Email Domain
      * @param emailDomainId
      */
  deleteEmailDomain(emailDomainId, _options) {
    const requestContextPromise = this.requestFactory.deleteEmailDomain(emailDomainId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteEmailDomain(rsp)));
      }));
  }
  /**
      * Retrieves an Email Domain by `emailDomainId`, along with associated username and sender display name
      * Retrieve a Email Domain
      * @param emailDomainId
      */
  getEmailDomain(emailDomainId, _options) {
    const requestContextPromise = this.requestFactory.getEmailDomain(emailDomainId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getEmailDomain(rsp)));
      }));
  }
  /**
      * Lists all brands linked to an email domain
      * List all brands linked to an email domain
      * @param emailDomainId
      */
  listEmailDomainBrands(emailDomainId, _options) {
    const requestContextPromise = this.requestFactory.listEmailDomainBrands(emailDomainId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listEmailDomainBrands(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all the Email Domains in your org, along with associated username and sender display name
      * List all Email Domains
      */
  listEmailDomains(_options) {
    const requestContextPromise = this.requestFactory.listEmailDomains(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listEmailDomains(rsp)));
      }));
  }
  /**
      * Replaces associated username and sender display name by `emailDomainId`
      * Replace an Email Domain
      * @param emailDomainId
      * @param updateEmailDomain
      */
  replaceEmailDomain(emailDomainId, updateEmailDomain, _options) {
    const requestContextPromise = this.requestFactory.replaceEmailDomain(emailDomainId, updateEmailDomain, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceEmailDomain(rsp)));
      }));
  }
  /**
      * Verifies an Email Domain by `emailDomainId`
      * Verify an Email Domain
      * @param emailDomainId
      */
  verifyEmailDomain(emailDomainId, _options) {
    const requestContextPromise = this.requestFactory.verifyEmailDomain(emailDomainId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.verifyEmailDomain(rsp)));
      }));
  }
}
exports.ObservableEmailDomainApi = ObservableEmailDomainApi;
const EventHookApi_1 = require('../apis/EventHookApi');
class ObservableEventHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new EventHookApi_1.EventHookApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new EventHookApi_1.EventHookApiResponseProcessor();
  }
  /**
      * Activates an event hook
      * Activate an Event Hook
      * @param eventHookId
      */
  activateEventHook(eventHookId, _options) {
    const requestContextPromise = this.requestFactory.activateEventHook(eventHookId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateEventHook(rsp)));
      }));
  }
  /**
      * Creates an event hook
      * Create an Event Hook
      * @param eventHook
      */
  createEventHook(eventHook, _options) {
    const requestContextPromise = this.requestFactory.createEventHook(eventHook, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createEventHook(rsp)));
      }));
  }
  /**
      * Deactivates an event hook
      * Deactivate an Event Hook
      * @param eventHookId
      */
  deactivateEventHook(eventHookId, _options) {
    const requestContextPromise = this.requestFactory.deactivateEventHook(eventHookId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateEventHook(rsp)));
      }));
  }
  /**
      * Deletes an event hook
      * Delete an Event Hook
      * @param eventHookId
      */
  deleteEventHook(eventHookId, _options) {
    const requestContextPromise = this.requestFactory.deleteEventHook(eventHookId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteEventHook(rsp)));
      }));
  }
  /**
      * Retrieves an event hook
      * Retrieve an Event Hook
      * @param eventHookId
      */
  getEventHook(eventHookId, _options) {
    const requestContextPromise = this.requestFactory.getEventHook(eventHookId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getEventHook(rsp)));
      }));
  }
  /**
      * Lists all event hooks
      * List all Event Hooks
      */
  listEventHooks(_options) {
    const requestContextPromise = this.requestFactory.listEventHooks(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listEventHooks(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces an event hook
      * Replace an Event Hook
      * @param eventHookId
      * @param eventHook
      */
  replaceEventHook(eventHookId, eventHook, _options) {
    const requestContextPromise = this.requestFactory.replaceEventHook(eventHookId, eventHook, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceEventHook(rsp)));
      }));
  }
  /**
      * Verifies an event hook
      * Verify an Event Hook
      * @param eventHookId
      */
  verifyEventHook(eventHookId, _options) {
    const requestContextPromise = this.requestFactory.verifyEventHook(eventHookId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.verifyEventHook(rsp)));
      }));
  }
}
exports.ObservableEventHookApi = ObservableEventHookApi;
const FeatureApi_1 = require('../apis/FeatureApi');
class ObservableFeatureApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new FeatureApi_1.FeatureApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new FeatureApi_1.FeatureApiResponseProcessor();
  }
  /**
      * Retrieves a feature
      * Retrieve a Feature
      * @param featureId
      */
  getFeature(featureId, _options) {
    const requestContextPromise = this.requestFactory.getFeature(featureId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getFeature(rsp)));
      }));
  }
  /**
      * Lists all dependencies
      * List all Dependencies
      * @param featureId
      */
  listFeatureDependencies(featureId, _options) {
    const requestContextPromise = this.requestFactory.listFeatureDependencies(featureId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listFeatureDependencies(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all dependents
      * List all Dependents
      * @param featureId
      */
  listFeatureDependents(featureId, _options) {
    const requestContextPromise = this.requestFactory.listFeatureDependents(featureId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listFeatureDependents(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all features
      * List all Features
      */
  listFeatures(_options) {
    const requestContextPromise = this.requestFactory.listFeatures(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listFeatures(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Updates a feature lifecycle
      * Update a Feature Lifecycle
      * @param featureId
      * @param lifecycle
      * @param mode
      */
  updateFeatureLifecycle(featureId, lifecycle, mode, _options) {
    const requestContextPromise = this.requestFactory.updateFeatureLifecycle(featureId, lifecycle, mode, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateFeatureLifecycle(rsp)));
      }));
  }
}
exports.ObservableFeatureApi = ObservableFeatureApi;
const GroupApi_1 = require('../apis/GroupApi');
class ObservableGroupApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new GroupApi_1.GroupApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new GroupApi_1.GroupApiResponseProcessor();
  }
  /**
      * Activates a specific group rule by `ruleId`
      * Activate a Group Rule
      * @param ruleId
      */
  activateGroupRule(ruleId, _options) {
    const requestContextPromise = this.requestFactory.activateGroupRule(ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateGroupRule(rsp)));
      }));
  }
  /**
      * Assigns a group owner
      * Assign a Group Owner
      * @param groupId
      * @param GroupOwner
      */
  assignGroupOwner(groupId, GroupOwner, _options) {
    const requestContextPromise = this.requestFactory.assignGroupOwner(groupId, GroupOwner, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignGroupOwner(rsp)));
      }));
  }
  /**
      * Assigns a user to a group with 'OKTA_GROUP' type
      * Assign a User
      * @param groupId
      * @param userId
      */
  assignUserToGroup(groupId, userId, _options) {
    const requestContextPromise = this.requestFactory.assignUserToGroup(groupId, userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignUserToGroup(rsp)));
      }));
  }
  /**
      * Creates a new group with `OKTA_GROUP` type
      * Create a Group
      * @param group
      */
  createGroup(group, _options) {
    const requestContextPromise = this.requestFactory.createGroup(group, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createGroup(rsp)));
      }));
  }
  /**
      * Creates a group rule to dynamically add users to the specified group if they match the condition
      * Create a Group Rule
      * @param groupRule
      */
  createGroupRule(groupRule, _options) {
    const requestContextPromise = this.requestFactory.createGroupRule(groupRule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createGroupRule(rsp)));
      }));
  }
  /**
      * Deactivates a specific group rule by `ruleId`
      * Deactivate a Group Rule
      * @param ruleId
      */
  deactivateGroupRule(ruleId, _options) {
    const requestContextPromise = this.requestFactory.deactivateGroupRule(ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateGroupRule(rsp)));
      }));
  }
  /**
      * Deletes a group with `OKTA_GROUP` type
      * Delete a Group
      * @param groupId
      */
  deleteGroup(groupId, _options) {
    const requestContextPromise = this.requestFactory.deleteGroup(groupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteGroup(rsp)));
      }));
  }
  /**
      * Deletes a group owner from a specific group
      * Delete a Group Owner
      * @param groupId
      * @param ownerId
      */
  deleteGroupOwner(groupId, ownerId, _options) {
    const requestContextPromise = this.requestFactory.deleteGroupOwner(groupId, ownerId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteGroupOwner(rsp)));
      }));
  }
  /**
      * Deletes a specific group rule by `ruleId`
      * Delete a group Rule
      * @param ruleId
      * @param removeUsers Indicates whether to keep or remove users from groups assigned by this rule.
      */
  deleteGroupRule(ruleId, removeUsers, _options) {
    const requestContextPromise = this.requestFactory.deleteGroupRule(ruleId, removeUsers, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteGroupRule(rsp)));
      }));
  }
  /**
      * Retrieves a group by `groupId`
      * Retrieve a Group
      * @param groupId
      */
  getGroup(groupId, _options) {
    const requestContextPromise = this.requestFactory.getGroup(groupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getGroup(rsp)));
      }));
  }
  /**
      * Retrieves a specific group rule by `ruleId`
      * Retrieve a Group Rule
      * @param ruleId
      * @param expand
      */
  getGroupRule(ruleId, expand, _options) {
    const requestContextPromise = this.requestFactory.getGroupRule(ruleId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getGroupRule(rsp)));
      }));
  }
  /**
      * Lists all applications that are assigned to a group
      * List all Assigned Applications
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of apps
      * @param limit Specifies the number of app results for a page
      */
  listAssignedApplicationsForGroup(groupId, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listAssignedApplicationsForGroup(groupId, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAssignedApplicationsForGroup(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all owners for a specific group
      * List all Group Owners
      * @param groupId
      * @param filter SCIM Filter expression for group owners. Allows to filter owners by type.
      * @param after Specifies the pagination cursor for the next page of owners
      * @param limit Specifies the number of owner results in a page
      */
  listGroupOwners(groupId, filter, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listGroupOwners(groupId, filter, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listGroupOwners(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all group rules
      * List all Group Rules
      * @param limit Specifies the number of rule results in a page
      * @param after Specifies the pagination cursor for the next page of rules
      * @param search Specifies the keyword to search fules for
      * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
      */
  listGroupRules(limit, after, search, expand, _options) {
    const requestContextPromise = this.requestFactory.listGroupRules(limit, after, search, expand, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listGroupRules(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all users that are a member of a group
      * List all Member Users
      * @param groupId
      * @param after Specifies the pagination cursor for the next page of users
      * @param limit Specifies the number of user results in a page
      */
  listGroupUsers(groupId, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listGroupUsers(groupId, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listGroupUsers(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all groups with pagination support. A subset of groups can be returned that match a supported filter expression or query.
      * List all Groups
      * @param q Searches the name property of groups for matching value
      * @param filter Filter expression for groups
      * @param after Specifies the pagination cursor for the next page of groups
      * @param limit Specifies the number of group results in a page
      * @param expand If specified, it causes additional metadata to be included in the response.
      * @param search Searches for groups with a supported filtering expression for all attributes except for _embedded, _links, and objectClass
      * @param sortBy Specifies field to sort by and can be any single property (for search queries only).
      * @param sortOrder Specifies sort order &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; is not present. Groups with the same value for the &#x60;sortBy&#x60; parameter are ordered by &#x60;id&#x60;.
      */
  listGroups(q, filter, after, limit, expand, search, sortBy, sortOrder, _options) {
    const requestContextPromise = this.requestFactory.listGroups(q, filter, after, limit, expand, search, sortBy, sortOrder, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listGroups(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces the profile for a group with `OKTA_GROUP` type
      * Replace a Group
      * @param groupId
      * @param group
      */
  replaceGroup(groupId, group, _options) {
    const requestContextPromise = this.requestFactory.replaceGroup(groupId, group, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceGroup(rsp)));
      }));
  }
  /**
      * Replaces a group rule. Only `INACTIVE` rules can be updated.
      * Replace a Group Rule
      * @param ruleId
      * @param groupRule
      */
  replaceGroupRule(ruleId, groupRule, _options) {
    const requestContextPromise = this.requestFactory.replaceGroupRule(ruleId, groupRule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceGroupRule(rsp)));
      }));
  }
  /**
      * Unassigns a user from a group with 'OKTA_GROUP' type
      * Unassign a User
      * @param groupId
      * @param userId
      */
  unassignUserFromGroup(groupId, userId, _options) {
    const requestContextPromise = this.requestFactory.unassignUserFromGroup(groupId, userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignUserFromGroup(rsp)));
      }));
  }
}
exports.ObservableGroupApi = ObservableGroupApi;
const HookKeyApi_1 = require('../apis/HookKeyApi');
class ObservableHookKeyApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new HookKeyApi_1.HookKeyApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new HookKeyApi_1.HookKeyApiResponseProcessor();
  }
  /**
      * Creates a key
      * Create a key
      * @param keyRequest
      */
  createHookKey(keyRequest, _options) {
    const requestContextPromise = this.requestFactory.createHookKey(keyRequest, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createHookKey(rsp)));
      }));
  }
  /**
      * Deletes a key by `hookKeyId`. Once deleted, the Hook Key is unrecoverable. As a safety precaution, unused keys are eligible for deletion.
      * Delete a key
      * @param hookKeyId
      */
  deleteHookKey(hookKeyId, _options) {
    const requestContextPromise = this.requestFactory.deleteHookKey(hookKeyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteHookKey(rsp)));
      }));
  }
  /**
      * Retrieves a key by `hookKeyId`
      * Retrieve a key
      * @param hookKeyId
      */
  getHookKey(hookKeyId, _options) {
    const requestContextPromise = this.requestFactory.getHookKey(hookKeyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getHookKey(rsp)));
      }));
  }
  /**
      * Retrieves a public key by `keyId`
      * Retrieve a public key
      * @param keyId
      */
  getPublicKey(keyId, _options) {
    const requestContextPromise = this.requestFactory.getPublicKey(keyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getPublicKey(rsp)));
      }));
  }
  /**
      * Lists all keys
      * List all keys
      */
  listHookKeys(_options) {
    const requestContextPromise = this.requestFactory.listHookKeys(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listHookKeys(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a key by `hookKeyId`
      * Replace a key
      * @param hookKeyId
      * @param keyRequest
      */
  replaceHookKey(hookKeyId, keyRequest, _options) {
    const requestContextPromise = this.requestFactory.replaceHookKey(hookKeyId, keyRequest, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceHookKey(rsp)));
      }));
  }
}
exports.ObservableHookKeyApi = ObservableHookKeyApi;
const IdentityProviderApi_1 = require('../apis/IdentityProviderApi');
class ObservableIdentityProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new IdentityProviderApi_1.IdentityProviderApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new IdentityProviderApi_1.IdentityProviderApiResponseProcessor();
  }
  /**
      * Activates an inactive IdP
      * Activate an Identity Provider
      * @param idpId
      */
  activateIdentityProvider(idpId, _options) {
    const requestContextPromise = this.requestFactory.activateIdentityProvider(idpId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateIdentityProvider(rsp)));
      }));
  }
  /**
      * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
      * Clone a Signing Credential Key
      * @param idpId
      * @param keyId
      * @param targetIdpId
      */
  cloneIdentityProviderKey(idpId, keyId, targetIdpId, _options) {
    const requestContextPromise = this.requestFactory.cloneIdentityProviderKey(idpId, keyId, targetIdpId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.cloneIdentityProviderKey(rsp)));
      }));
  }
  /**
      * Creates a new identity provider integration
      * Create an Identity Provider
      * @param identityProvider
      */
  createIdentityProvider(identityProvider, _options) {
    const requestContextPromise = this.requestFactory.createIdentityProvider(identityProvider, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createIdentityProvider(rsp)));
      }));
  }
  /**
      * Creates a new X.509 certificate credential to the IdP key store.
      * Create an X.509 Certificate Public Key
      * @param jsonWebKey
      */
  createIdentityProviderKey(jsonWebKey, _options) {
    const requestContextPromise = this.requestFactory.createIdentityProviderKey(jsonWebKey, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createIdentityProviderKey(rsp)));
      }));
  }
  /**
      * Deactivates an active IdP
      * Deactivate an Identity Provider
      * @param idpId
      */
  deactivateIdentityProvider(idpId, _options) {
    const requestContextPromise = this.requestFactory.deactivateIdentityProvider(idpId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateIdentityProvider(rsp)));
      }));
  }
  /**
      * Deletes an identity provider integration by `idpId`
      * Delete an Identity Provider
      * @param idpId
      */
  deleteIdentityProvider(idpId, _options) {
    const requestContextPromise = this.requestFactory.deleteIdentityProvider(idpId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteIdentityProvider(rsp)));
      }));
  }
  /**
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP
      * Delete a Signing Credential Key
      * @param keyId
      */
  deleteIdentityProviderKey(keyId, _options) {
    const requestContextPromise = this.requestFactory.deleteIdentityProviderKey(keyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteIdentityProviderKey(rsp)));
      }));
  }
  /**
      * Generates a new key pair and returns a Certificate Signing Request for it
      * Generate a Certificate Signing Request
      * @param idpId
      * @param metadata
      */
  generateCsrForIdentityProvider(idpId, metadata, _options) {
    const requestContextPromise = this.requestFactory.generateCsrForIdentityProvider(idpId, metadata, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.generateCsrForIdentityProvider(rsp)));
      }));
  }
  /**
      * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
      * Generate a new Signing Credential Key
      * @param idpId
      * @param validityYears expiry of the IdP Key Credential
      */
  generateIdentityProviderSigningKey(idpId, validityYears, _options) {
    const requestContextPromise = this.requestFactory.generateIdentityProviderSigningKey(idpId, validityYears, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.generateIdentityProviderSigningKey(rsp)));
      }));
  }
  /**
      * Retrieves a specific Certificate Signing Request model by id
      * Retrieve a Certificate Signing Request
      * @param idpId
      * @param csrId
      */
  getCsrForIdentityProvider(idpId, csrId, _options) {
    const requestContextPromise = this.requestFactory.getCsrForIdentityProvider(idpId, csrId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getCsrForIdentityProvider(rsp)));
      }));
  }
  /**
      * Retrieves an identity provider integration by `idpId`
      * Retrieve an Identity Provider
      * @param idpId
      */
  getIdentityProvider(idpId, _options) {
    const requestContextPromise = this.requestFactory.getIdentityProvider(idpId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getIdentityProvider(rsp)));
      }));
  }
  /**
      * Retrieves a linked IdP user by ID
      * Retrieve a User
      * @param idpId
      * @param userId
      */
  getIdentityProviderApplicationUser(idpId, userId, _options) {
    const requestContextPromise = this.requestFactory.getIdentityProviderApplicationUser(idpId, userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getIdentityProviderApplicationUser(rsp)));
      }));
  }
  /**
      * Retrieves a specific IdP Key Credential by `kid`
      * Retrieve an Credential Key
      * @param keyId
      */
  getIdentityProviderKey(keyId, _options) {
    const requestContextPromise = this.requestFactory.getIdentityProviderKey(keyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getIdentityProviderKey(rsp)));
      }));
  }
  /**
      * Retrieves a specific IdP Key Credential by `kid`
      * Retrieve a Signing Credential Key
      * @param idpId
      * @param keyId
      */
  getIdentityProviderSigningKey(idpId, keyId, _options) {
    const requestContextPromise = this.requestFactory.getIdentityProviderSigningKey(idpId, keyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getIdentityProviderSigningKey(rsp)));
      }));
  }
  /**
      * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
      * Link a User to a Social IdP
      * @param idpId
      * @param userId
      * @param userIdentityProviderLinkRequest
      */
  linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options) {
    const requestContextPromise = this.requestFactory.linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.linkUserToIdentityProvider(rsp)));
      }));
  }
  /**
      * Lists all Certificate Signing Requests for an IdP
      * List all Certificate Signing Requests
      * @param idpId
      */
  listCsrsForIdentityProvider(idpId, _options) {
    const requestContextPromise = this.requestFactory.listCsrsForIdentityProvider(idpId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listCsrsForIdentityProvider(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all users linked to the identity provider
      * List all Users
      * @param idpId
      */
  listIdentityProviderApplicationUsers(idpId, _options) {
    const requestContextPromise = this.requestFactory.listIdentityProviderApplicationUsers(idpId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listIdentityProviderApplicationUsers(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all IdP key credentials
      * List all Credential Keys
      * @param after Specifies the pagination cursor for the next page of keys
      * @param limit Specifies the number of key results in a page
      */
  listIdentityProviderKeys(after, limit, _options) {
    const requestContextPromise = this.requestFactory.listIdentityProviderKeys(after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listIdentityProviderKeys(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all signing key credentials for an IdP
      * List all Signing Credential Keys
      * @param idpId
      */
  listIdentityProviderSigningKeys(idpId, _options) {
    const requestContextPromise = this.requestFactory.listIdentityProviderSigningKeys(idpId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listIdentityProviderSigningKeys(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all identity provider integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
      * List all Identity Providers
      * @param q Searches the name property of IdPs for matching value
      * @param after Specifies the pagination cursor for the next page of IdPs
      * @param limit Specifies the number of IdP results in a page
      * @param type Filters IdPs by type
      */
  listIdentityProviders(q, after, limit, type, _options) {
    const requestContextPromise = this.requestFactory.listIdentityProviders(q, after, limit, type, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listIdentityProviders(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth
      * List all Tokens from a OIDC Identity Provider
      * @param idpId
      * @param userId
      */
  listSocialAuthTokens(idpId, userId, _options) {
    const requestContextPromise = this.requestFactory.listSocialAuthTokens(idpId, userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listSocialAuthTokens(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Publishes a certificate signing request with a signed X.509 certificate and adds it into the signing key credentials for the IdP
      * Publish a Certificate Signing Request
      * @param idpId
      * @param csrId
      * @param body
      */
  publishCsrForIdentityProvider(idpId, csrId, body, _options) {
    const requestContextPromise = this.requestFactory.publishCsrForIdentityProvider(idpId, csrId, body, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.publishCsrForIdentityProvider(rsp)));
      }));
  }
  /**
      * Replaces an identity provider integration by `idpId`
      * Replace an Identity Provider
      * @param idpId
      * @param identityProvider
      */
  replaceIdentityProvider(idpId, identityProvider, _options) {
    const requestContextPromise = this.requestFactory.replaceIdentityProvider(idpId, identityProvider, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceIdentityProvider(rsp)));
      }));
  }
  /**
      * Revokes a certificate signing request and deletes the key pair from the IdP
      * Revoke a Certificate Signing Request
      * @param idpId
      * @param csrId
      */
  revokeCsrForIdentityProvider(idpId, csrId, _options) {
    const requestContextPromise = this.requestFactory.revokeCsrForIdentityProvider(idpId, csrId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeCsrForIdentityProvider(rsp)));
      }));
  }
  /**
      * Unlinks the link between the Okta user and the IdP user
      * Unlink a User from IdP
      * @param idpId
      * @param userId
      */
  unlinkUserFromIdentityProvider(idpId, userId, _options) {
    const requestContextPromise = this.requestFactory.unlinkUserFromIdentityProvider(idpId, userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unlinkUserFromIdentityProvider(rsp)));
      }));
  }
}
exports.ObservableIdentityProviderApi = ObservableIdentityProviderApi;
const IdentitySourceApi_1 = require('../apis/IdentitySourceApi');
class ObservableIdentitySourceApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new IdentitySourceApi_1.IdentitySourceApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new IdentitySourceApi_1.IdentitySourceApiResponseProcessor();
  }
  /**
      * Creates an identity source session for the given identity source instance
      * Create an Identity Source Session
      * @param identitySourceId
      */
  createIdentitySourceSession(identitySourceId, _options) {
    const requestContextPromise = this.requestFactory.createIdentitySourceSession(identitySourceId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.createIdentitySourceSession(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Deletes an identity source session for a given `identitySourceId` and `sessionId`
      * Delete an Identity Source Session
      * @param identitySourceId
      * @param sessionId
      */
  deleteIdentitySourceSession(identitySourceId, sessionId, _options) {
    const requestContextPromise = this.requestFactory.deleteIdentitySourceSession(identitySourceId, sessionId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteIdentitySourceSession(rsp)));
      }));
  }
  /**
      * Retrieves an identity source session for a given identity source id and session id
      * Retrieve an Identity Source Session
      * @param identitySourceId
      * @param sessionId
      */
  getIdentitySourceSession(identitySourceId, sessionId, _options) {
    const requestContextPromise = this.requestFactory.getIdentitySourceSession(identitySourceId, sessionId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getIdentitySourceSession(rsp)));
      }));
  }
  /**
      * Lists all identity source sessions for the given identity source instance
      * List all Identity Source Sessions
      * @param identitySourceId
      */
  listIdentitySourceSessions(identitySourceId, _options) {
    const requestContextPromise = this.requestFactory.listIdentitySourceSessions(identitySourceId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listIdentitySourceSessions(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Starts the import from the identity source described by the uploaded bulk operations
      * Start the import from the Identity Source
      * @param identitySourceId
      * @param sessionId
      */
  startImportFromIdentitySource(identitySourceId, sessionId, _options) {
    const requestContextPromise = this.requestFactory.startImportFromIdentitySource(identitySourceId, sessionId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.startImportFromIdentitySource(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Uploads entities that need to be deleted in Okta from the identity source for the given session
      * Upload the data to be deleted in Okta
      * @param identitySourceId
      * @param sessionId
      * @param BulkDeleteRequestBody
      */
  uploadIdentitySourceDataForDelete(identitySourceId, sessionId, BulkDeleteRequestBody, _options) {
    const requestContextPromise = this.requestFactory.uploadIdentitySourceDataForDelete(identitySourceId, sessionId, BulkDeleteRequestBody, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.uploadIdentitySourceDataForDelete(rsp)));
      }));
  }
  /**
      * Uploads entities that need to be upserted in Okta from the identity source for the given session
      * Upload the data to be upserted in Okta
      * @param identitySourceId
      * @param sessionId
      * @param BulkUpsertRequestBody
      */
  uploadIdentitySourceDataForUpsert(identitySourceId, sessionId, BulkUpsertRequestBody, _options) {
    const requestContextPromise = this.requestFactory.uploadIdentitySourceDataForUpsert(identitySourceId, sessionId, BulkUpsertRequestBody, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.uploadIdentitySourceDataForUpsert(rsp)));
      }));
  }
}
exports.ObservableIdentitySourceApi = ObservableIdentitySourceApi;
const InlineHookApi_1 = require('../apis/InlineHookApi');
class ObservableInlineHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new InlineHookApi_1.InlineHookApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new InlineHookApi_1.InlineHookApiResponseProcessor();
  }
  /**
      * Activates the inline hook by `inlineHookId`
      * Activate an Inline Hook
      * @param inlineHookId
      */
  activateInlineHook(inlineHookId, _options) {
    const requestContextPromise = this.requestFactory.activateInlineHook(inlineHookId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateInlineHook(rsp)));
      }));
  }
  /**
      * Creates an inline hook
      * Create an Inline Hook
      * @param inlineHook
      */
  createInlineHook(inlineHook, _options) {
    const requestContextPromise = this.requestFactory.createInlineHook(inlineHook, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createInlineHook(rsp)));
      }));
  }
  /**
      * Deactivates the inline hook by `inlineHookId`
      * Deactivate an Inline Hook
      * @param inlineHookId
      */
  deactivateInlineHook(inlineHookId, _options) {
    const requestContextPromise = this.requestFactory.deactivateInlineHook(inlineHookId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateInlineHook(rsp)));
      }));
  }
  /**
      * Deletes an inline hook by `inlineHookId`. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
      * Delete an Inline Hook
      * @param inlineHookId
      */
  deleteInlineHook(inlineHookId, _options) {
    const requestContextPromise = this.requestFactory.deleteInlineHook(inlineHookId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteInlineHook(rsp)));
      }));
  }
  /**
      * Executes the inline hook by `inlineHookId` using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
      * Execute an Inline Hook
      * @param inlineHookId
      * @param payloadData
      */
  executeInlineHook(inlineHookId, payloadData, _options) {
    const requestContextPromise = this.requestFactory.executeInlineHook(inlineHookId, payloadData, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.executeInlineHook(rsp)));
      }));
  }
  /**
      * Retrieves an inline hook by `inlineHookId`
      * Retrieve an Inline Hook
      * @param inlineHookId
      */
  getInlineHook(inlineHookId, _options) {
    const requestContextPromise = this.requestFactory.getInlineHook(inlineHookId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getInlineHook(rsp)));
      }));
  }
  /**
      * Lists all inline hooks
      * List all Inline Hooks
      * @param type
      */
  listInlineHooks(type, _options) {
    const requestContextPromise = this.requestFactory.listInlineHooks(type, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listInlineHooks(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces an inline hook by `inlineHookId`
      * Replace an Inline Hook
      * @param inlineHookId
      * @param inlineHook
      */
  replaceInlineHook(inlineHookId, inlineHook, _options) {
    const requestContextPromise = this.requestFactory.replaceInlineHook(inlineHookId, inlineHook, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceInlineHook(rsp)));
      }));
  }
}
exports.ObservableInlineHookApi = ObservableInlineHookApi;
const LinkedObjectApi_1 = require('../apis/LinkedObjectApi');
class ObservableLinkedObjectApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new LinkedObjectApi_1.LinkedObjectApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new LinkedObjectApi_1.LinkedObjectApiResponseProcessor();
  }
  /**
      * Creates a linked object definition
      * Create a Linked Object Definition
      * @param linkedObject
      */
  createLinkedObjectDefinition(linkedObject, _options) {
    const requestContextPromise = this.requestFactory.createLinkedObjectDefinition(linkedObject, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createLinkedObjectDefinition(rsp)));
      }));
  }
  /**
      * Deletes a linked object definition
      * Delete a Linked Object Definition
      * @param linkedObjectName
      */
  deleteLinkedObjectDefinition(linkedObjectName, _options) {
    const requestContextPromise = this.requestFactory.deleteLinkedObjectDefinition(linkedObjectName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteLinkedObjectDefinition(rsp)));
      }));
  }
  /**
      * Retrieves a linked object definition
      * Retrieve a Linked Object Definition
      * @param linkedObjectName
      */
  getLinkedObjectDefinition(linkedObjectName, _options) {
    const requestContextPromise = this.requestFactory.getLinkedObjectDefinition(linkedObjectName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getLinkedObjectDefinition(rsp)));
      }));
  }
  /**
      * Lists all linked object definitions
      * List all Linked Object Definitions
      */
  listLinkedObjectDefinitions(_options) {
    const requestContextPromise = this.requestFactory.listLinkedObjectDefinitions(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listLinkedObjectDefinitions(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
}
exports.ObservableLinkedObjectApi = ObservableLinkedObjectApi;
const LogStreamApi_1 = require('../apis/LogStreamApi');
class ObservableLogStreamApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new LogStreamApi_1.LogStreamApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new LogStreamApi_1.LogStreamApiResponseProcessor();
  }
  /**
      * Activates a log stream by `logStreamId`
      * Activate a Log Stream
      * @param logStreamId id of the log stream
      */
  activateLogStream(logStreamId, _options) {
    const requestContextPromise = this.requestFactory.activateLogStream(logStreamId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateLogStream(rsp)));
      }));
  }
  /**
      * Creates a new log stream
      * Create a Log Stream
      * @param instance
      */
  createLogStream(instance, _options) {
    const requestContextPromise = this.requestFactory.createLogStream(instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createLogStream(rsp)));
      }));
  }
  /**
      * Deactivates a log stream by `logStreamId`
      * Deactivate a Log Stream
      * @param logStreamId id of the log stream
      */
  deactivateLogStream(logStreamId, _options) {
    const requestContextPromise = this.requestFactory.deactivateLogStream(logStreamId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateLogStream(rsp)));
      }));
  }
  /**
      * Deletes a log stream by `logStreamId`
      * Delete a Log Stream
      * @param logStreamId id of the log stream
      */
  deleteLogStream(logStreamId, _options) {
    const requestContextPromise = this.requestFactory.deleteLogStream(logStreamId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteLogStream(rsp)));
      }));
  }
  /**
      * Retrieves a log stream by `logStreamId`
      * Retrieve a Log Stream
      * @param logStreamId id of the log stream
      */
  getLogStream(logStreamId, _options) {
    const requestContextPromise = this.requestFactory.getLogStream(logStreamId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getLogStream(rsp)));
      }));
  }
  /**
      * Lists all log streams. You can request a paginated list or a subset of Log Streams that match a supported filter expression.
      * List all Log Streams
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit A limit on the number of objects to return.
      * @param filter SCIM filter expression that filters the results. This expression only supports the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60;.
      */
  listLogStreams(after, limit, filter, _options) {
    const requestContextPromise = this.requestFactory.listLogStreams(after, limit, filter, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listLogStreams(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a log stream by `logStreamId`
      * Replace a Log Stream
      * @param logStreamId id of the log stream
      * @param instance
      */
  replaceLogStream(logStreamId, instance, _options) {
    const requestContextPromise = this.requestFactory.replaceLogStream(logStreamId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceLogStream(rsp)));
      }));
  }
}
exports.ObservableLogStreamApi = ObservableLogStreamApi;
const NetworkZoneApi_1 = require('../apis/NetworkZoneApi');
class ObservableNetworkZoneApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new NetworkZoneApi_1.NetworkZoneApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new NetworkZoneApi_1.NetworkZoneApiResponseProcessor();
  }
  /**
      * Activates a network zone by `zoneId`
      * Activate a Network Zone
      * @param zoneId
      */
  activateNetworkZone(zoneId, _options) {
    const requestContextPromise = this.requestFactory.activateNetworkZone(zoneId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateNetworkZone(rsp)));
      }));
  }
  /**
      * Creates a new network zone. * At least one of either the `gateways` attribute or `proxies` attribute must be defined when creating a Network Zone. * At least one of the following attributes must be defined: `proxyType`, `locations`, or `asns`.
      * Create a Network Zone
      * @param zone
      */
  createNetworkZone(zone, _options) {
    const requestContextPromise = this.requestFactory.createNetworkZone(zone, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createNetworkZone(rsp)));
      }));
  }
  /**
      * Deactivates a network zone by `zoneId`
      * Deactivate a Network Zone
      * @param zoneId
      */
  deactivateNetworkZone(zoneId, _options) {
    const requestContextPromise = this.requestFactory.deactivateNetworkZone(zoneId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateNetworkZone(rsp)));
      }));
  }
  /**
      * Deletes network zone by `zoneId`
      * Delete a Network Zone
      * @param zoneId
      */
  deleteNetworkZone(zoneId, _options) {
    const requestContextPromise = this.requestFactory.deleteNetworkZone(zoneId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteNetworkZone(rsp)));
      }));
  }
  /**
      * Retrieves a network zone by `zoneId`
      * Retrieve a Network Zone
      * @param zoneId
      */
  getNetworkZone(zoneId, _options) {
    const requestContextPromise = this.requestFactory.getNetworkZone(zoneId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getNetworkZone(rsp)));
      }));
  }
  /**
      * Lists all network zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id` and `usage` properties. See [Filtering](https://developer.okta.com/docs/reference/core-okta-api/#filter) for more information on the expressions that are used in filtering.
      * List all Network Zones
      * @param after Specifies the pagination cursor for the next page of network zones
      * @param limit Specifies the number of results for a page
      * @param filter Filters zones by usage or id expression
      */
  listNetworkZones(after, limit, filter, _options) {
    const requestContextPromise = this.requestFactory.listNetworkZones(after, limit, filter, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listNetworkZones(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a network zone by `zoneId`. The replaced network zone type must be the same as the existing type. You may replace the usage (`POLICY`, `BLOCKLIST`) of a network zone by updating the `usage` attribute.
      * Replace a Network Zone
      * @param zoneId
      * @param zone
      */
  replaceNetworkZone(zoneId, zone, _options) {
    const requestContextPromise = this.requestFactory.replaceNetworkZone(zoneId, zone, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceNetworkZone(rsp)));
      }));
  }
}
exports.ObservableNetworkZoneApi = ObservableNetworkZoneApi;
const OrgSettingApi_1 = require('../apis/OrgSettingApi');
class ObservableOrgSettingApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new OrgSettingApi_1.OrgSettingApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new OrgSettingApi_1.OrgSettingApiResponseProcessor();
  }
  /**
      * Removes a list of email addresses to be removed from the set of email addresses that are bounced
      * Remove Emails from Email Provider Bounce List
      * @param BouncesRemoveListObj
      */
  bulkRemoveEmailAddressBounces(BouncesRemoveListObj, _options) {
    const requestContextPromise = this.requestFactory.bulkRemoveEmailAddressBounces(BouncesRemoveListObj, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.bulkRemoveEmailAddressBounces(rsp)));
      }));
  }
  /**
      * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
      * Extend Okta Support Access
      */
  extendOktaSupport(_options) {
    const requestContextPromise = this.requestFactory.extendOktaSupport(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.extendOktaSupport(rsp)));
      }));
  }
  /**
      * Retrieves Okta Communication Settings of your organization
      * Retrieve the Okta Communication Settings
      */
  getOktaCommunicationSettings(_options) {
    const requestContextPromise = this.requestFactory.getOktaCommunicationSettings(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getOktaCommunicationSettings(rsp)));
      }));
  }
  /**
      * Retrieves Contact Types of your organization
      * Retrieve the Org Contact Types
      */
  getOrgContactTypes(_options) {
    const requestContextPromise = this.requestFactory.getOrgContactTypes(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.getOrgContactTypes(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Retrieves the URL of the User associated with the specified Contact Type
      * Retrieve the User of the Contact Type
      * @param contactType
      */
  getOrgContactUser(contactType, _options) {
    const requestContextPromise = this.requestFactory.getOrgContactUser(contactType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getOrgContactUser(rsp)));
      }));
  }
  /**
      * Retrieves Okta Support Settings of your organization
      * Retrieve the Okta Support Settings
      */
  getOrgOktaSupportSettings(_options) {
    const requestContextPromise = this.requestFactory.getOrgOktaSupportSettings(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getOrgOktaSupportSettings(rsp)));
      }));
  }
  /**
      * Retrieves preferences of your organization
      * Retrieve the Org Preferences
      */
  getOrgPreferences(_options) {
    const requestContextPromise = this.requestFactory.getOrgPreferences(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getOrgPreferences(rsp)));
      }));
  }
  /**
      * Retrieves the org settings
      * Retrieve the Org Settings
      */
  getOrgSettings(_options) {
    const requestContextPromise = this.requestFactory.getOrgSettings(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getOrgSettings(rsp)));
      }));
  }
  /**
      * Retrieves the well-known org metadata, which includes the id, configured custom domains, authentication pipeline, and various other org settings
      * Retrieve the Well-Known Org Metadata
      */
  getWellknownOrgMetadata(_options) {
    const requestContextPromise = this.requestFactory.getWellknownOrgMetadata(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getWellknownOrgMetadata(rsp)));
      }));
  }
  /**
      * Grants Okta Support temporary access your org as an administrator for eight hours
      * Grant Okta Support Access to your Org
      */
  grantOktaSupport(_options) {
    const requestContextPromise = this.requestFactory.grantOktaSupport(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.grantOktaSupport(rsp)));
      }));
  }
  /**
      * Opts in all users of this org to Okta Communication emails
      * Opt in all Users to Okta Communication emails
      */
  optInUsersToOktaCommunicationEmails(_options) {
    const requestContextPromise = this.requestFactory.optInUsersToOktaCommunicationEmails(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.optInUsersToOktaCommunicationEmails(rsp)));
      }));
  }
  /**
      * Opts out all users of this org from Okta Communication emails
      * Opt out all Users from Okta Communication emails
      */
  optOutUsersFromOktaCommunicationEmails(_options) {
    const requestContextPromise = this.requestFactory.optOutUsersFromOktaCommunicationEmails(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.optOutUsersFromOktaCommunicationEmails(rsp)));
      }));
  }
  /**
      * Replaces the User associated with the specified Contact Type
      * Replace the User of the Contact Type
      * @param contactType
      * @param orgContactUser
      */
  replaceOrgContactUser(contactType, orgContactUser, _options) {
    const requestContextPromise = this.requestFactory.replaceOrgContactUser(contactType, orgContactUser, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceOrgContactUser(rsp)));
      }));
  }
  /**
      * Replaces the settings of your organization
      * Replace the Org Settings
      * @param orgSetting
      */
  replaceOrgSettings(orgSetting, _options) {
    const requestContextPromise = this.requestFactory.replaceOrgSettings(orgSetting, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceOrgSettings(rsp)));
      }));
  }
  /**
      * Revokes Okta Support access to your organization
      * Revoke Okta Support Access
      */
  revokeOktaSupport(_options) {
    const requestContextPromise = this.requestFactory.revokeOktaSupport(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeOktaSupport(rsp)));
      }));
  }
  /**
      * Updates the preference hide the Okta UI footer for all end users of your organization
      * Update the Preference to Hide the Okta Dashboard Footer
      */
  updateOrgHideOktaUIFooter(_options) {
    const requestContextPromise = this.requestFactory.updateOrgHideOktaUIFooter(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateOrgHideOktaUIFooter(rsp)));
      }));
  }
  /**
      * Partially updates the org settings depending on provided fields
      * Update the Org Settings
      * @param OrgSetting
      */
  updateOrgSettings(OrgSetting, _options) {
    const requestContextPromise = this.requestFactory.updateOrgSettings(OrgSetting, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateOrgSettings(rsp)));
      }));
  }
  /**
      * Updates the preference to show the Okta UI footer for all end users of your organization
      * Update the Preference to Show the Okta Dashboard Footer
      */
  updateOrgShowOktaUIFooter(_options) {
    const requestContextPromise = this.requestFactory.updateOrgShowOktaUIFooter(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateOrgShowOktaUIFooter(rsp)));
      }));
  }
  /**
      * Uploads and replaces the logo for your organization. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
      * Upload the Org Logo
      * @param file
      */
  uploadOrgLogo(file, _options) {
    const requestContextPromise = this.requestFactory.uploadOrgLogo(file, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.uploadOrgLogo(rsp)));
      }));
  }
}
exports.ObservableOrgSettingApi = ObservableOrgSettingApi;
const PolicyApi_1 = require('../apis/PolicyApi');
class ObservablePolicyApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new PolicyApi_1.PolicyApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new PolicyApi_1.PolicyApiResponseProcessor();
  }
  /**
      * Activates a policy
      * Activate a Policy
      * @param policyId
      */
  activatePolicy(policyId, _options) {
    const requestContextPromise = this.requestFactory.activatePolicy(policyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activatePolicy(rsp)));
      }));
  }
  /**
      * Activates a policy rule
      * Activate a Policy Rule
      * @param policyId
      * @param ruleId
      */
  activatePolicyRule(policyId, ruleId, _options) {
    const requestContextPromise = this.requestFactory.activatePolicyRule(policyId, ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activatePolicyRule(rsp)));
      }));
  }
  /**
      * Clones an existing policy
      * Clone an existing policy
      * @param policyId
      */
  clonePolicy(policyId, _options) {
    const requestContextPromise = this.requestFactory.clonePolicy(policyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.clonePolicy(rsp)));
      }));
  }
  /**
      * Creates a policy
      * Create a Policy
      * @param policy
      * @param activate
      */
  createPolicy(policy, activate, _options) {
    const requestContextPromise = this.requestFactory.createPolicy(policy, activate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createPolicy(rsp)));
      }));
  }
  /**
      * Creates a policy rule
      * Create a Policy Rule
      * @param policyId
      * @param policyRule
      */
  createPolicyRule(policyId, policyRule, _options) {
    const requestContextPromise = this.requestFactory.createPolicyRule(policyId, policyRule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createPolicyRule(rsp)));
      }));
  }
  /**
      * Deactivates a policy
      * Deactivate a Policy
      * @param policyId
      */
  deactivatePolicy(policyId, _options) {
    const requestContextPromise = this.requestFactory.deactivatePolicy(policyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivatePolicy(rsp)));
      }));
  }
  /**
      * Deactivates a policy rule
      * Deactivate a Policy Rule
      * @param policyId
      * @param ruleId
      */
  deactivatePolicyRule(policyId, ruleId, _options) {
    const requestContextPromise = this.requestFactory.deactivatePolicyRule(policyId, ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivatePolicyRule(rsp)));
      }));
  }
  /**
      * Deletes a policy
      * Delete a Policy
      * @param policyId
      */
  deletePolicy(policyId, _options) {
    const requestContextPromise = this.requestFactory.deletePolicy(policyId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deletePolicy(rsp)));
      }));
  }
  /**
      * Deletes a policy rule
      * Delete a Policy Rule
      * @param policyId
      * @param ruleId
      */
  deletePolicyRule(policyId, ruleId, _options) {
    const requestContextPromise = this.requestFactory.deletePolicyRule(policyId, ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deletePolicyRule(rsp)));
      }));
  }
  /**
      * Retrieves a policy
      * Retrieve a Policy
      * @param policyId
      * @param expand
      */
  getPolicy(policyId, expand, _options) {
    const requestContextPromise = this.requestFactory.getPolicy(policyId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getPolicy(rsp)));
      }));
  }
  /**
      * Retrieves a policy rule
      * Retrieve a Policy Rule
      * @param policyId
      * @param ruleId
      */
  getPolicyRule(policyId, ruleId, _options) {
    const requestContextPromise = this.requestFactory.getPolicyRule(policyId, ruleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getPolicyRule(rsp)));
      }));
  }
  /**
      * Lists all policies with the specified type
      * List all Policies
      * @param type
      * @param status
      * @param expand
      */
  listPolicies(type, status, expand, _options) {
    const requestContextPromise = this.requestFactory.listPolicies(type, status, expand, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listPolicies(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all applications mapped to a policy identified by `policyId`
      * List all Applications mapped to a Policy
      * @param policyId
      */
  listPolicyApps(policyId, _options) {
    const requestContextPromise = this.requestFactory.listPolicyApps(policyId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listPolicyApps(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all policy rules
      * List all Policy Rules
      * @param policyId
      */
  listPolicyRules(policyId, _options) {
    const requestContextPromise = this.requestFactory.listPolicyRules(policyId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listPolicyRules(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a policy
      * Replace a Policy
      * @param policyId
      * @param policy
      */
  replacePolicy(policyId, policy, _options) {
    const requestContextPromise = this.requestFactory.replacePolicy(policyId, policy, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replacePolicy(rsp)));
      }));
  }
  /**
      * Replaces a policy rules
      * Replace a Policy Rule
      * @param policyId
      * @param ruleId
      * @param policyRule
      */
  replacePolicyRule(policyId, ruleId, policyRule, _options) {
    const requestContextPromise = this.requestFactory.replacePolicyRule(policyId, ruleId, policyRule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replacePolicyRule(rsp)));
      }));
  }
}
exports.ObservablePolicyApi = ObservablePolicyApi;
const PrincipalRateLimitApi_1 = require('../apis/PrincipalRateLimitApi');
class ObservablePrincipalRateLimitApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new PrincipalRateLimitApi_1.PrincipalRateLimitApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new PrincipalRateLimitApi_1.PrincipalRateLimitApiResponseProcessor();
  }
  /**
      * Creates a new Principal Rate Limit entity. In the current release, we only allow one Principal Rate Limit entity per org and principal.
      * Create a Principal Rate Limit
      * @param entity
      */
  createPrincipalRateLimitEntity(entity, _options) {
    const requestContextPromise = this.requestFactory.createPrincipalRateLimitEntity(entity, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createPrincipalRateLimitEntity(rsp)));
      }));
  }
  /**
      * Retrieves a Principal Rate Limit entity by `principalRateLimitId`
      * Retrieve a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      */
  getPrincipalRateLimitEntity(principalRateLimitId, _options) {
    const requestContextPromise = this.requestFactory.getPrincipalRateLimitEntity(principalRateLimitId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getPrincipalRateLimitEntity(rsp)));
      }));
  }
  /**
      * Lists all Principal Rate Limit entities considering the provided parameters
      * List all Principal Rate Limits
      * @param filter
      * @param after
      * @param limit
      */
  listPrincipalRateLimitEntities(filter, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listPrincipalRateLimitEntities(filter, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listPrincipalRateLimitEntities(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a principal rate limit entity by `principalRateLimitId`
      * Replace a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      * @param entity
      */
  replacePrincipalRateLimitEntity(principalRateLimitId, entity, _options) {
    const requestContextPromise = this.requestFactory.replacePrincipalRateLimitEntity(principalRateLimitId, entity, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replacePrincipalRateLimitEntity(rsp)));
      }));
  }
}
exports.ObservablePrincipalRateLimitApi = ObservablePrincipalRateLimitApi;
const ProfileMappingApi_1 = require('../apis/ProfileMappingApi');
class ObservableProfileMappingApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new ProfileMappingApi_1.ProfileMappingApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new ProfileMappingApi_1.ProfileMappingApiResponseProcessor();
  }
  /**
      * Retrieves a single Profile Mapping referenced by its ID
      * Retrieve a Profile Mapping
      * @param mappingId
      */
  getProfileMapping(mappingId, _options) {
    const requestContextPromise = this.requestFactory.getProfileMapping(mappingId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getProfileMapping(rsp)));
      }));
  }
  /**
      * Lists all profile mappings with pagination
      * List all Profile Mappings
      * @param after
      * @param limit
      * @param sourceId
      * @param targetId
      */
  listProfileMappings(after, limit, sourceId, targetId, _options) {
    const requestContextPromise = this.requestFactory.listProfileMappings(after, limit, sourceId, targetId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listProfileMappings(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings
      * Update a Profile Mapping
      * @param mappingId
      * @param profileMapping
      */
  updateProfileMapping(mappingId, profileMapping, _options) {
    const requestContextPromise = this.requestFactory.updateProfileMapping(mappingId, profileMapping, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateProfileMapping(rsp)));
      }));
  }
}
exports.ObservableProfileMappingApi = ObservableProfileMappingApi;
const PushProviderApi_1 = require('../apis/PushProviderApi');
class ObservablePushProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new PushProviderApi_1.PushProviderApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new PushProviderApi_1.PushProviderApiResponseProcessor();
  }
  /**
      * Creates a new push provider
      * Create a Push Provider
      * @param pushProvider
      */
  createPushProvider(pushProvider, _options) {
    const requestContextPromise = this.requestFactory.createPushProvider(pushProvider, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createPushProvider(rsp)));
      }));
  }
  /**
      * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
      * Delete a Push Provider
      * @param pushProviderId Id of the push provider
      */
  deletePushProvider(pushProviderId, _options) {
    const requestContextPromise = this.requestFactory.deletePushProvider(pushProviderId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deletePushProvider(rsp)));
      }));
  }
  /**
      * Retrieves a push provider by `pushProviderId`
      * Retrieve a Push Provider
      * @param pushProviderId Id of the push provider
      */
  getPushProvider(pushProviderId, _options) {
    const requestContextPromise = this.requestFactory.getPushProvider(pushProviderId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getPushProvider(rsp)));
      }));
  }
  /**
      * Lists all push providers
      * List all Push Providers
      * @param type Filters push providers by &#x60;providerType&#x60;
      */
  listPushProviders(type, _options) {
    const requestContextPromise = this.requestFactory.listPushProviders(type, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listPushProviders(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a push provider by `pushProviderId`
      * Replace a Push Provider
      * @param pushProviderId Id of the push provider
      * @param pushProvider
      */
  replacePushProvider(pushProviderId, pushProvider, _options) {
    const requestContextPromise = this.requestFactory.replacePushProvider(pushProviderId, pushProvider, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replacePushProvider(rsp)));
      }));
  }
}
exports.ObservablePushProviderApi = ObservablePushProviderApi;
const RateLimitSettingsApi_1 = require('../apis/RateLimitSettingsApi');
class ObservableRateLimitSettingsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new RateLimitSettingsApi_1.RateLimitSettingsApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new RateLimitSettingsApi_1.RateLimitSettingsApiResponseProcessor();
  }
  /**
      * Retrieves the currently configured Rate Limit Admin Notification Settings
      * Retrieve the Rate Limit Admin Notification Settings
      */
  getRateLimitSettingsAdminNotifications(_options) {
    const requestContextPromise = this.requestFactory.getRateLimitSettingsAdminNotifications(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getRateLimitSettingsAdminNotifications(rsp)));
      }));
  }
  /**
      * Retrieves the currently configured Per-Client Rate Limit Settings
      * Retrieve the Per-Client Rate Limit Settings
      */
  getRateLimitSettingsPerClient(_options) {
    const requestContextPromise = this.requestFactory.getRateLimitSettingsPerClient(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getRateLimitSettingsPerClient(rsp)));
      }));
  }
  /**
      * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
      * Replace the Rate Limit Admin Notification Settings
      * @param RateLimitAdminNotifications
      */
  replaceRateLimitSettingsAdminNotifications(RateLimitAdminNotifications, _options) {
    const requestContextPromise = this.requestFactory.replaceRateLimitSettingsAdminNotifications(RateLimitAdminNotifications, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceRateLimitSettingsAdminNotifications(rsp)));
      }));
  }
  /**
      * Replaces the Per-Client Rate Limit Settings and returns the configured properties
      * Replace the Per-Client Rate Limit Settings
      * @param perClientRateLimitSettings
      */
  replaceRateLimitSettingsPerClient(perClientRateLimitSettings, _options) {
    const requestContextPromise = this.requestFactory.replaceRateLimitSettingsPerClient(perClientRateLimitSettings, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceRateLimitSettingsPerClient(rsp)));
      }));
  }
}
exports.ObservableRateLimitSettingsApi = ObservableRateLimitSettingsApi;
const ResourceSetApi_1 = require('../apis/ResourceSetApi');
class ObservableResourceSetApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new ResourceSetApi_1.ResourceSetApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new ResourceSetApi_1.ResourceSetApiResponseProcessor();
  }
  /**
      * Adds more members to a resource set binding
      * Add more Members to a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  addMembersToBinding(resourceSetId, roleIdOrLabel, instance, _options) {
    const requestContextPromise = this.requestFactory.addMembersToBinding(resourceSetId, roleIdOrLabel, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addMembersToBinding(rsp)));
      }));
  }
  /**
      * Adds more resources to a resource set
      * Add more Resource to a resource set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param instance
      */
  addResourceSetResource(resourceSetId, instance, _options) {
    const requestContextPromise = this.requestFactory.addResourceSetResource(resourceSetId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addResourceSetResource(rsp)));
      }));
  }
  /**
      * Creates a new resource set
      * Create a Resource Set
      * @param instance
      */
  createResourceSet(instance, _options) {
    const requestContextPromise = this.requestFactory.createResourceSet(instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createResourceSet(rsp)));
      }));
  }
  /**
      * Creates a new resource set binding
      * Create a Resource Set Binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param instance
      */
  createResourceSetBinding(resourceSetId, instance, _options) {
    const requestContextPromise = this.requestFactory.createResourceSetBinding(resourceSetId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createResourceSetBinding(rsp)));
      }));
  }
  /**
      * Deletes a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Delete a Binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteBinding(resourceSetId, roleIdOrLabel, _options) {
    const requestContextPromise = this.requestFactory.deleteBinding(resourceSetId, roleIdOrLabel, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteBinding(rsp)));
      }));
  }
  /**
      * Deletes a role by `resourceSetId`
      * Delete a Resource Set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      */
  deleteResourceSet(resourceSetId, _options) {
    const requestContextPromise = this.requestFactory.deleteResourceSet(resourceSetId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteResourceSet(rsp)));
      }));
  }
  /**
      * Deletes a resource identified by `resourceId` from a resource set
      * Delete a Resource from a resource set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param resourceId &#x60;id&#x60; of a resource
      */
  deleteResourceSetResource(resourceSetId, resourceId, _options) {
    const requestContextPromise = this.requestFactory.deleteResourceSetResource(resourceSetId, resourceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteResourceSetResource(rsp)));
      }));
  }
  /**
      * Retrieves a resource set binding by `resourceSetId` and `roleIdOrLabel`
      * Retrieve a Binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getBinding(resourceSetId, roleIdOrLabel, _options) {
    const requestContextPromise = this.requestFactory.getBinding(resourceSetId, roleIdOrLabel, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getBinding(rsp)));
      }));
  }
  /**
      * Retrieves a member identified by `memberId` for a binding
      * Retrieve a Member of a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of a member
      */
  getMemberOfBinding(resourceSetId, roleIdOrLabel, memberId, _options) {
    const requestContextPromise = this.requestFactory.getMemberOfBinding(resourceSetId, roleIdOrLabel, memberId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getMemberOfBinding(rsp)));
      }));
  }
  /**
      * Retrieves a resource set by `resourceSetId`
      * Retrieve a Resource Set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      */
  getResourceSet(resourceSetId, _options) {
    const requestContextPromise = this.requestFactory.getResourceSet(resourceSetId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getResourceSet(rsp)));
      }));
  }
  /**
      * Lists all resource set bindings with pagination support
      * List all Bindings
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listBindings(resourceSetId, after, _options) {
    const requestContextPromise = this.requestFactory.listBindings(resourceSetId, after, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listBindings(rsp)));
      }));
  }
  /**
      * Lists all members of a resource set binding with pagination support
      * List all Members of a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listMembersOfBinding(resourceSetId, roleIdOrLabel, after, _options) {
    const requestContextPromise = this.requestFactory.listMembersOfBinding(resourceSetId, roleIdOrLabel, after, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listMembersOfBinding(rsp)));
      }));
  }
  /**
      * Lists all resources that make up the resource set
      * List all Resources of a resource set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      */
  listResourceSetResources(resourceSetId, _options) {
    const requestContextPromise = this.requestFactory.listResourceSetResources(resourceSetId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listResourceSetResources(rsp)));
      }));
  }
  /**
      * Lists all resource sets with pagination support
      * List all Resource Sets
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listResourceSets(after, _options) {
    const requestContextPromise = this.requestFactory.listResourceSets(after, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listResourceSets(rsp)));
      }));
  }
  /**
      * Replaces a resource set by `resourceSetId`
      * Replace a Resource Set
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param instance
      */
  replaceResourceSet(resourceSetId, instance, _options) {
    const requestContextPromise = this.requestFactory.replaceResourceSet(resourceSetId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceResourceSet(rsp)));
      }));
  }
  /**
      * Unassigns a member identified by `memberId` from a binding
      * Unassign a Member from a binding
      * @param resourceSetId &#x60;id&#x60; of a resource set
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param memberId &#x60;id&#x60; of a member
      */
  unassignMemberFromBinding(resourceSetId, roleIdOrLabel, memberId, _options) {
    const requestContextPromise = this.requestFactory.unassignMemberFromBinding(resourceSetId, roleIdOrLabel, memberId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignMemberFromBinding(rsp)));
      }));
  }
}
exports.ObservableResourceSetApi = ObservableResourceSetApi;
const RiskEventApi_1 = require('../apis/RiskEventApi');
class ObservableRiskEventApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new RiskEventApi_1.RiskEventApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new RiskEventApi_1.RiskEventApiResponseProcessor();
  }
  /**
      * Sends multiple IP risk events to Okta. This request is used by a third-party risk provider to send IP risk events to Okta. The third-party risk provider needs to be registered with Okta before they can send events to Okta. See [Risk Providers](/openapi/okta-management/management/tag/RiskProvider/). This API has a rate limit of 30 requests per minute. You can include multiple risk events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. Prioritize sending high risk signals if you have a burst of signals to send that would exceed the maximum request limits.
      * Send multiple Risk Events
      * @param instance
      */
  sendRiskEvents(instance, _options) {
    const requestContextPromise = this.requestFactory.sendRiskEvents(instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.sendRiskEvents(rsp)));
      }));
  }
}
exports.ObservableRiskEventApi = ObservableRiskEventApi;
const RiskProviderApi_1 = require('../apis/RiskProviderApi');
class ObservableRiskProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new RiskProviderApi_1.RiskProviderApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new RiskProviderApi_1.RiskProviderApiResponseProcessor();
  }
  /**
      * Creates a Risk Provider object. A maximum of three Risk Provider objects can be created.
      * Create a Risk Provider
      * @param instance
      */
  createRiskProvider(instance, _options) {
    const requestContextPromise = this.requestFactory.createRiskProvider(instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createRiskProvider(rsp)));
      }));
  }
  /**
      * Deletes a Risk Provider object by its ID
      * Delete a Risk Provider
      * @param riskProviderId &#x60;id&#x60; of the Risk Provider object
      */
  deleteRiskProvider(riskProviderId, _options) {
    const requestContextPromise = this.requestFactory.deleteRiskProvider(riskProviderId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteRiskProvider(rsp)));
      }));
  }
  /**
      * Retrieves a Risk Provider object by ID
      * Retrieve a Risk Provider
      * @param riskProviderId &#x60;id&#x60; of the Risk Provider object
      */
  getRiskProvider(riskProviderId, _options) {
    const requestContextPromise = this.requestFactory.getRiskProvider(riskProviderId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getRiskProvider(rsp)));
      }));
  }
  /**
      * Lists all Risk Provider objects
      * List all Risk Providers
      */
  listRiskProviders(_options) {
    const requestContextPromise = this.requestFactory.listRiskProviders(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listRiskProviders(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces the properties for a given Risk Provider object ID
      * Replace a Risk Provider
      * @param riskProviderId &#x60;id&#x60; of the Risk Provider object
      * @param instance
      */
  replaceRiskProvider(riskProviderId, instance, _options) {
    const requestContextPromise = this.requestFactory.replaceRiskProvider(riskProviderId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceRiskProvider(rsp)));
      }));
  }
}
exports.ObservableRiskProviderApi = ObservableRiskProviderApi;
const RoleApi_1 = require('../apis/RoleApi');
class ObservableRoleApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new RoleApi_1.RoleApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new RoleApi_1.RoleApiResponseProcessor();
  }
  /**
      * Creates a new role
      * Create a Role
      * @param instance
      */
  createRole(instance, _options) {
    const requestContextPromise = this.requestFactory.createRole(instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createRole(rsp)));
      }));
  }
  /**
      * Creates a permission specified by `permissionType` to the role
      * Create a Permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An okta permission type
      */
  createRolePermission(roleIdOrLabel, permissionType, _options) {
    const requestContextPromise = this.requestFactory.createRolePermission(roleIdOrLabel, permissionType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createRolePermission(rsp)));
      }));
  }
  /**
      * Deletes a role by `roleIdOrLabel`
      * Delete a Role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  deleteRole(roleIdOrLabel, _options) {
    const requestContextPromise = this.requestFactory.deleteRole(roleIdOrLabel, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteRole(rsp)));
      }));
  }
  /**
      * Deletes a permission from a role by `permissionType`
      * Delete a Permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An okta permission type
      */
  deleteRolePermission(roleIdOrLabel, permissionType, _options) {
    const requestContextPromise = this.requestFactory.deleteRolePermission(roleIdOrLabel, permissionType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteRolePermission(rsp)));
      }));
  }
  /**
      * Retrieves a role by `roleIdOrLabel`
      * Retrieve a Role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  getRole(roleIdOrLabel, _options) {
    const requestContextPromise = this.requestFactory.getRole(roleIdOrLabel, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getRole(rsp)));
      }));
  }
  /**
      * Retrieves a permission by `permissionType`
      * Retrieve a Permission
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param permissionType An okta permission type
      */
  getRolePermission(roleIdOrLabel, permissionType, _options) {
    const requestContextPromise = this.requestFactory.getRolePermission(roleIdOrLabel, permissionType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getRolePermission(rsp)));
      }));
  }
  /**
      * Lists all permissions of the role by `roleIdOrLabel`
      * List all Permissions
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      */
  listRolePermissions(roleIdOrLabel, _options) {
    const requestContextPromise = this.requestFactory.listRolePermissions(roleIdOrLabel, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listRolePermissions(rsp)));
      }));
  }
  /**
      * Lists all roles with pagination support
      * List all Roles
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      */
  listRoles(after, _options) {
    const requestContextPromise = this.requestFactory.listRoles(after, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listRoles(rsp)));
      }));
  }
  /**
      * Replaces a role by `roleIdOrLabel`
      * Replace a Role
      * @param roleIdOrLabel &#x60;id&#x60; or &#x60;label&#x60; of the role
      * @param instance
      */
  replaceRole(roleIdOrLabel, instance, _options) {
    const requestContextPromise = this.requestFactory.replaceRole(roleIdOrLabel, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceRole(rsp)));
      }));
  }
}
exports.ObservableRoleApi = ObservableRoleApi;
const RoleAssignmentApi_1 = require('../apis/RoleAssignmentApi');
class ObservableRoleAssignmentApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new RoleAssignmentApi_1.RoleAssignmentApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new RoleAssignmentApi_1.RoleAssignmentApiResponseProcessor();
  }
  /**
      * Assigns a role to a group
      * Assign a Role to a Group
      * @param groupId
      * @param assignRoleRequest
      * @param disableNotifications Setting this to &#x60;true&#x60; grants the group third-party admin status
      */
  assignRoleToGroup(groupId, assignRoleRequest, disableNotifications, _options) {
    const requestContextPromise = this.requestFactory.assignRoleToGroup(groupId, assignRoleRequest, disableNotifications, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignRoleToGroup(rsp)));
      }));
  }
  /**
      * Assigns a role to a user identified by `userId`
      * Assign a Role to a User
      * @param userId
      * @param assignRoleRequest
      * @param disableNotifications Setting this to &#x60;true&#x60; grants the user third-party admin status
      */
  assignRoleToUser(userId, assignRoleRequest, disableNotifications, _options) {
    const requestContextPromise = this.requestFactory.assignRoleToUser(userId, assignRoleRequest, disableNotifications, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignRoleToUser(rsp)));
      }));
  }
  /**
      * Retrieves a role identified by `roleId` assigned to group identified by `groupId`
      * Retrieve a Role assigned to Group
      * @param groupId
      * @param roleId
      */
  getGroupAssignedRole(groupId, roleId, _options) {
    const requestContextPromise = this.requestFactory.getGroupAssignedRole(groupId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getGroupAssignedRole(rsp)));
      }));
  }
  /**
      * Retrieves a role identified by `roleId` assigned to a user identified by `userId`
      * Retrieve a Role assigned to a User
      * @param userId
      * @param roleId
      */
  getUserAssignedRole(userId, roleId, _options) {
    const requestContextPromise = this.requestFactory.getUserAssignedRole(userId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getUserAssignedRole(rsp)));
      }));
  }
  /**
      * Lists all roles assigned to a user identified by `userId`
      * List all Roles assigned to a User
      * @param userId
      * @param expand
      */
  listAssignedRolesForUser(userId, expand, _options) {
    const requestContextPromise = this.requestFactory.listAssignedRolesForUser(userId, expand, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAssignedRolesForUser(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all assigned roles of group identified by `groupId`
      * List all Assigned Roles of Group
      * @param groupId
      * @param expand
      */
  listGroupAssignedRoles(groupId, expand, _options) {
    const requestContextPromise = this.requestFactory.listGroupAssignedRoles(groupId, expand, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listGroupAssignedRoles(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Unassigns a role identified by `roleId` assigned to group identified by `groupId`
      * Unassign a Role from a Group
      * @param groupId
      * @param roleId
      */
  unassignRoleFromGroup(groupId, roleId, _options) {
    const requestContextPromise = this.requestFactory.unassignRoleFromGroup(groupId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignRoleFromGroup(rsp)));
      }));
  }
  /**
      * Unassigns a role identified by `roleId` from a user identified by `userId`
      * Unassign a Role from a User
      * @param userId
      * @param roleId
      */
  unassignRoleFromUser(userId, roleId, _options) {
    const requestContextPromise = this.requestFactory.unassignRoleFromUser(userId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignRoleFromUser(rsp)));
      }));
  }
}
exports.ObservableRoleAssignmentApi = ObservableRoleAssignmentApi;
const RoleTargetApi_1 = require('../apis/RoleTargetApi');
class ObservableRoleTargetApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new RoleTargetApi_1.RoleTargetApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new RoleTargetApi_1.RoleTargetApiResponseProcessor();
  }
  /**
      * Assigns all Apps as Target to Role
      * Assign all Apps as Target to Role
      * @param userId
      * @param roleId
      */
  assignAllAppsAsTargetToRoleForUser(userId, roleId, _options) {
    const requestContextPromise = this.requestFactory.assignAllAppsAsTargetToRoleForUser(userId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignAllAppsAsTargetToRoleForUser(rsp)));
      }));
  }
  /**
      * Assigns App Instance Target to App Administrator Role given to a Group
      * Assign an Application Instance Target to Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  assignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options) {
    const requestContextPromise = this.requestFactory.assignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignAppInstanceTargetToAppAdminRoleForGroup(rsp)));
      }));
  }
  /**
      * Assigns anapplication instance target to appplication administrator role
      * Assign an Application Instance Target to an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  assignAppInstanceTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    const requestContextPromise = this.requestFactory.assignAppInstanceTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignAppInstanceTargetToAppAdminRoleForUser(rsp)));
      }));
  }
  /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  assignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options) {
    const requestContextPromise = this.requestFactory.assignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignAppTargetToAdminRoleForGroup(rsp)));
      }));
  }
  /**
      * Assigns an application target to administrator role
      * Assign an Application Target to Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  assignAppTargetToAdminRoleForUser(userId, roleId, appName, _options) {
    const requestContextPromise = this.requestFactory.assignAppTargetToAdminRoleForUser(userId, roleId, appName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignAppTargetToAdminRoleForUser(rsp)));
      }));
  }
  /**
      * Assigns a group target to a group role
      * Assign a Group Target to a Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  assignGroupTargetToGroupAdminRole(groupId, roleId, targetGroupId, _options) {
    const requestContextPromise = this.requestFactory.assignGroupTargetToGroupAdminRole(groupId, roleId, targetGroupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignGroupTargetToGroupAdminRole(rsp)));
      }));
  }
  /**
      * Assigns a Group Target to Role
      * Assign a Group Target to Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  assignGroupTargetToUserRole(userId, roleId, groupId, _options) {
    const requestContextPromise = this.requestFactory.assignGroupTargetToUserRole(userId, roleId, groupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.assignGroupTargetToUserRole(rsp)));
      }));
  }
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for an Application Administrator Role
      * @param groupId
      * @param roleId
      * @param after
      * @param limit
      */
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listApplicationTargetsForApplicationAdministratorRoleForGroup(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
      * List all Application Targets for Application Administrator Role
      * @param userId
      * @param roleId
      * @param after
      * @param limit
      */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId, roleId, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listApplicationTargetsForApplicationAdministratorRoleForUser(userId, roleId, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listApplicationTargetsForApplicationAdministratorRoleForUser(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all group targets for a group role
      * List all Group Targets for a Group Role
      * @param groupId
      * @param roleId
      * @param after
      * @param limit
      */
  listGroupTargetsForGroupRole(groupId, roleId, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listGroupTargetsForGroupRole(groupId, roleId, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listGroupTargetsForGroupRole(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all group targets for role
      * List all Group Targets for Role
      * @param userId
      * @param roleId
      * @param after
      * @param limit
      */
  listGroupTargetsForRole(userId, roleId, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listGroupTargetsForRole(userId, roleId, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listGroupTargetsForRole(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Unassigns an application instance target from an application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  unassignAppInstanceTargetFromAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    const requestContextPromise = this.requestFactory.unassignAppInstanceTargetFromAdminRoleForUser(userId, roleId, appName, applicationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignAppInstanceTargetFromAdminRoleForUser(rsp)));
      }));
  }
  /**
      * Unassigns an application instance target from application administrator role
      * Unassign an Application Instance Target from an Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  unassignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options) {
    const requestContextPromise = this.requestFactory.unassignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignAppInstanceTargetToAppAdminRoleForGroup(rsp)));
      }));
  }
  /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  unassignAppTargetFromAppAdminRoleForUser(userId, roleId, appName, _options) {
    const requestContextPromise = this.requestFactory.unassignAppTargetFromAppAdminRoleForUser(userId, roleId, appName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignAppTargetFromAppAdminRoleForUser(rsp)));
      }));
  }
  /**
      * Unassigns an application target from application administrator role
      * Unassign an Application Target from Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  unassignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options) {
    const requestContextPromise = this.requestFactory.unassignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignAppTargetToAdminRoleForGroup(rsp)));
      }));
  }
  /**
      * Unassigns a group target from a group role
      * Unassign a Group Target from a Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  unassignGroupTargetFromGroupAdminRole(groupId, roleId, targetGroupId, _options) {
    const requestContextPromise = this.requestFactory.unassignGroupTargetFromGroupAdminRole(groupId, roleId, targetGroupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignGroupTargetFromGroupAdminRole(rsp)));
      }));
  }
  /**
      * Unassigns a Group Target from Role
      * Unassign a Group Target from Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  unassignGroupTargetFromUserAdminRole(userId, roleId, groupId, _options) {
    const requestContextPromise = this.requestFactory.unassignGroupTargetFromUserAdminRole(userId, roleId, groupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unassignGroupTargetFromUserAdminRole(rsp)));
      }));
  }
}
exports.ObservableRoleTargetApi = ObservableRoleTargetApi;
const SchemaApi_1 = require('../apis/SchemaApi');
class ObservableSchemaApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new SchemaApi_1.SchemaApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new SchemaApi_1.SchemaApiResponseProcessor();
  }
  /**
      * Retrieves the UI schema for an Application given `appName`, `section` and `operation`
      * Retrieve the UI schema for a section
      * @param appName
      * @param section
      * @param operation
      */
  getAppUISchema(appName, section, operation, _options) {
    const requestContextPromise = this.requestFactory.getAppUISchema(appName, section, operation, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAppUISchema(rsp)));
      }));
  }
  /**
      * Retrieves the links for UI schemas for an Application given `appName`
      * Retrieve the links for UI schemas for an Application
      * @param appName
      */
  getAppUISchemaLinks(appName, _options) {
    const requestContextPromise = this.requestFactory.getAppUISchemaLinks(appName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAppUISchemaLinks(rsp)));
      }));
  }
  /**
      * Retrieves the Schema for an App User
      * Retrieve the default Application User Schema for an Application
      * @param appInstanceId
      */
  getApplicationUserSchema(appInstanceId, _options) {
    const requestContextPromise = this.requestFactory.getApplicationUserSchema(appInstanceId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getApplicationUserSchema(rsp)));
      }));
  }
  /**
      * Retrieves the group schema
      * Retrieve the default Group Schema
      */
  getGroupSchema(_options) {
    const requestContextPromise = this.requestFactory.getGroupSchema(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getGroupSchema(rsp)));
      }));
  }
  /**
      * Retrieves the schema for a Log Stream type. The `logStreamType` element in the URL specifies the Log Stream type, which is either `aws_eventbridge` or `splunk_cloud_logstreaming`. Use the `aws_eventbridge` literal to retrieve the AWS EventBridge type schema, and use the `splunk_cloud_logstreaming` literal retrieve the Splunk Cloud type schema.
      * Retrieve the Log Stream Schema for the schema type
      * @param logStreamType
      */
  getLogStreamSchema(logStreamType, _options) {
    const requestContextPromise = this.requestFactory.getLogStreamSchema(logStreamType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getLogStreamSchema(rsp)));
      }));
  }
  /**
      * Retrieves the schema for a Schema Id
      * Retrieve a User Schema
      * @param schemaId
      */
  getUserSchema(schemaId, _options) {
    const requestContextPromise = this.requestFactory.getUserSchema(schemaId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getUserSchema(rsp)));
      }));
  }
  /**
      * Lists the schema for all log stream types visible for this org
      * List the Log Stream Schemas
      */
  listLogStreamSchemas(_options) {
    const requestContextPromise = this.requestFactory.listLogStreamSchemas(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listLogStreamSchemas(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Partially updates on the User Profile properties of the Application User Schema
      * Update the default Application User Schema for an Application
      * @param appInstanceId
      * @param body
      */
  updateApplicationUserProfile(appInstanceId, body, _options) {
    const requestContextPromise = this.requestFactory.updateApplicationUserProfile(appInstanceId, body, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateApplicationUserProfile(rsp)));
      }));
  }
  /**
      * Updates the default group schema. This updates, adds, or removes one or more custom Group Profile properties in the schema.
      * Update the default Group Schema
      * @param GroupSchema
      */
  updateGroupSchema(GroupSchema, _options) {
    const requestContextPromise = this.requestFactory.updateGroupSchema(GroupSchema, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateGroupSchema(rsp)));
      }));
  }
  /**
      * Partially updates on the User Profile properties of the user schema
      * Update a User Schema
      * @param schemaId
      * @param userSchema
      */
  updateUserProfile(schemaId, userSchema, _options) {
    const requestContextPromise = this.requestFactory.updateUserProfile(schemaId, userSchema, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateUserProfile(rsp)));
      }));
  }
}
exports.ObservableSchemaApi = ObservableSchemaApi;
const SessionApi_1 = require('../apis/SessionApi');
class ObservableSessionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new SessionApi_1.SessionApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new SessionApi_1.SessionApiResponseProcessor();
  }
  /**
      * Creates a new Session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID to delete a session through the API instead of visiting the logout URL.
      * Create a Session with session token
      * @param createSessionRequest
      */
  createSession(createSessionRequest, _options) {
    const requestContextPromise = this.requestFactory.createSession(createSessionRequest, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createSession(rsp)));
      }));
  }
  /**
      * Retrieves information about the Session specified by the given session ID
      * Retrieve a Session
      * @param sessionId &#x60;id&#x60; of a valid Session
      */
  getSession(sessionId, _options) {
    const requestContextPromise = this.requestFactory.getSession(sessionId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getSession(rsp)));
      }));
  }
  /**
      * Refreshes an existing Session using the `id` for that Session. A successful response contains the refreshed Session with an updated `expiresAt` timestamp.
      * Refresh a Session
      * @param sessionId &#x60;id&#x60; of a valid Session
      */
  refreshSession(sessionId, _options) {
    const requestContextPromise = this.requestFactory.refreshSession(sessionId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.refreshSession(rsp)));
      }));
  }
  /**
      * Revokes the specified Session
      * Revoke a Session
      * @param sessionId &#x60;id&#x60; of a valid Session
      */
  revokeSession(sessionId, _options) {
    const requestContextPromise = this.requestFactory.revokeSession(sessionId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeSession(rsp)));
      }));
  }
}
exports.ObservableSessionApi = ObservableSessionApi;
const SubscriptionApi_1 = require('../apis/SubscriptionApi');
class ObservableSubscriptionApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new SubscriptionApi_1.SubscriptionApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new SubscriptionApi_1.SubscriptionApiResponseProcessor();
  }
  /**
      * Lists all subscriptions of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role
      * @param roleTypeOrRoleId
      */
  listRoleSubscriptions(roleTypeOrRoleId, _options) {
    const requestContextPromise = this.requestFactory.listRoleSubscriptions(roleTypeOrRoleId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listRoleSubscriptions(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all subscriptions with a specific notification type of a Role identified by `roleType` or of a Custom Role identified by `roleId`
      * List all Subscriptions of a Custom Role with a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  listRoleSubscriptionsByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const requestContextPromise = this.requestFactory.listRoleSubscriptionsByNotificationType(roleTypeOrRoleId, notificationType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listRoleSubscriptionsByNotificationType(rsp)));
      }));
  }
  /**
      * Lists all subscriptions of a user. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions
      * @param userId
      */
  listUserSubscriptions(userId, _options) {
    const requestContextPromise = this.requestFactory.listUserSubscriptions(userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listUserSubscriptions(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions by type
      * @param userId
      * @param notificationType
      */
  listUserSubscriptionsByNotificationType(userId, notificationType, _options) {
    const requestContextPromise = this.requestFactory.listUserSubscriptionsByNotificationType(userId, notificationType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listUserSubscriptionsByNotificationType(rsp)));
      }));
  }
  /**
      * Subscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` to a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
      * Subscribe a Custom Role to a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const requestContextPromise = this.requestFactory.subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.subscribeRoleSubscriptionByNotificationType(rsp)));
      }));
  }
  /**
      * Subscribes a User to a specific notification type. Only the current User can subscribe to a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Subscribe to a specific notification type
      * @param userId
      * @param notificationType
      */
  subscribeUserSubscriptionByNotificationType(userId, notificationType, _options) {
    const requestContextPromise = this.requestFactory.subscribeUserSubscriptionByNotificationType(userId, notificationType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.subscribeUserSubscriptionByNotificationType(rsp)));
      }));
  }
  /**
      * Unsubscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` from a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
      * Unsubscribe a Custom Role from a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const requestContextPromise = this.requestFactory.unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unsubscribeRoleSubscriptionByNotificationType(rsp)));
      }));
  }
  /**
      * Unsubscribes a User from a specific notification type. Only the current User can unsubscribe from a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
      * Unsubscribe from a specific notification type
      * @param userId
      * @param notificationType
      */
  unsubscribeUserSubscriptionByNotificationType(userId, notificationType, _options) {
    const requestContextPromise = this.requestFactory.unsubscribeUserSubscriptionByNotificationType(userId, notificationType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unsubscribeUserSubscriptionByNotificationType(rsp)));
      }));
  }
}
exports.ObservableSubscriptionApi = ObservableSubscriptionApi;
const SystemLogApi_1 = require('../apis/SystemLogApi');
class ObservableSystemLogApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new SystemLogApi_1.SystemLogApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new SystemLogApi_1.SystemLogApiResponseProcessor();
  }
  /**
      * Lists all system log events. The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * List all System Log Events
      * @param since
      * @param until
      * @param filter
      * @param q
      * @param limit
      * @param sortOrder
      * @param after
      */
  listLogEvents(since, until, filter, q, limit, sortOrder, after, _options) {
    const requestContextPromise = this.requestFactory.listLogEvents(since, until, filter, q, limit, sortOrder, after, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listLogEvents(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
}
exports.ObservableSystemLogApi = ObservableSystemLogApi;
const TemplateApi_1 = require('../apis/TemplateApi');
class ObservableTemplateApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new TemplateApi_1.TemplateApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new TemplateApi_1.TemplateApiResponseProcessor();
  }
  /**
      * Creates a new custom SMS template
      * Create an SMS Template
      * @param smsTemplate
      */
  createSmsTemplate(smsTemplate, _options) {
    const requestContextPromise = this.requestFactory.createSmsTemplate(smsTemplate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createSmsTemplate(rsp)));
      }));
  }
  /**
      * Deletes an SMS template
      * Delete an SMS Template
      * @param templateId
      */
  deleteSmsTemplate(templateId, _options) {
    const requestContextPromise = this.requestFactory.deleteSmsTemplate(templateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteSmsTemplate(rsp)));
      }));
  }
  /**
      * Retrieves a specific template by `id`
      * Retrieve an SMS Template
      * @param templateId
      */
  getSmsTemplate(templateId, _options) {
    const requestContextPromise = this.requestFactory.getSmsTemplate(templateId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getSmsTemplate(rsp)));
      }));
  }
  /**
      * Lists all custom SMS templates. A subset of templates can be returned that match a template type.
      * List all SMS Templates
      * @param templateType
      */
  listSmsTemplates(templateType, _options) {
    const requestContextPromise = this.requestFactory.listSmsTemplates(templateType, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listSmsTemplates(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces the SMS template
      * Replace an SMS Template
      * @param templateId
      * @param smsTemplate
      */
  replaceSmsTemplate(templateId, smsTemplate, _options) {
    const requestContextPromise = this.requestFactory.replaceSmsTemplate(templateId, smsTemplate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceSmsTemplate(rsp)));
      }));
  }
  /**
      * Updates an SMS template
      * Update an SMS Template
      * @param templateId
      * @param smsTemplate
      */
  updateSmsTemplate(templateId, smsTemplate, _options) {
    const requestContextPromise = this.requestFactory.updateSmsTemplate(templateId, smsTemplate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateSmsTemplate(rsp)));
      }));
  }
}
exports.ObservableTemplateApi = ObservableTemplateApi;
const ThreatInsightApi_1 = require('../apis/ThreatInsightApi');
class ObservableThreatInsightApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new ThreatInsightApi_1.ThreatInsightApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new ThreatInsightApi_1.ThreatInsightApiResponseProcessor();
  }
  /**
      * Retrieves current ThreatInsight configuration
      * Retrieve the ThreatInsight Configuration
      */
  getCurrentConfiguration(_options) {
    const requestContextPromise = this.requestFactory.getCurrentConfiguration(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getCurrentConfiguration(rsp)));
      }));
  }
  /**
      * Updates ThreatInsight configuration
      * Update the ThreatInsight Configuration
      * @param threatInsightConfiguration
      */
  updateConfiguration(threatInsightConfiguration, _options) {
    const requestContextPromise = this.requestFactory.updateConfiguration(threatInsightConfiguration, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateConfiguration(rsp)));
      }));
  }
}
exports.ObservableThreatInsightApi = ObservableThreatInsightApi;
const TrustedOriginApi_1 = require('../apis/TrustedOriginApi');
class ObservableTrustedOriginApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new TrustedOriginApi_1.TrustedOriginApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new TrustedOriginApi_1.TrustedOriginApiResponseProcessor();
  }
  /**
      * Activates a trusted origin
      * Activate a Trusted Origin
      * @param trustedOriginId
      */
  activateTrustedOrigin(trustedOriginId, _options) {
    const requestContextPromise = this.requestFactory.activateTrustedOrigin(trustedOriginId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateTrustedOrigin(rsp)));
      }));
  }
  /**
      * Creates a trusted origin
      * Create a Trusted Origin
      * @param trustedOrigin
      */
  createTrustedOrigin(trustedOrigin, _options) {
    const requestContextPromise = this.requestFactory.createTrustedOrigin(trustedOrigin, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createTrustedOrigin(rsp)));
      }));
  }
  /**
      * Deactivates a trusted origin
      * Deactivate a Trusted Origin
      * @param trustedOriginId
      */
  deactivateTrustedOrigin(trustedOriginId, _options) {
    const requestContextPromise = this.requestFactory.deactivateTrustedOrigin(trustedOriginId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateTrustedOrigin(rsp)));
      }));
  }
  /**
      * Deletes a trusted origin
      * Delete a Trusted Origin
      * @param trustedOriginId
      */
  deleteTrustedOrigin(trustedOriginId, _options) {
    const requestContextPromise = this.requestFactory.deleteTrustedOrigin(trustedOriginId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteTrustedOrigin(rsp)));
      }));
  }
  /**
      * Retrieves a trusted origin
      * Retrieve a Trusted Origin
      * @param trustedOriginId
      */
  getTrustedOrigin(trustedOriginId, _options) {
    const requestContextPromise = this.requestFactory.getTrustedOrigin(trustedOriginId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getTrustedOrigin(rsp)));
      }));
  }
  /**
      * Lists all trusted origins
      * List all Trusted Origins
      * @param q
      * @param filter
      * @param after
      * @param limit
      */
  listTrustedOrigins(q, filter, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listTrustedOrigins(q, filter, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listTrustedOrigins(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces a trusted origin
      * Replace a Trusted Origin
      * @param trustedOriginId
      * @param trustedOrigin
      */
  replaceTrustedOrigin(trustedOriginId, trustedOrigin, _options) {
    const requestContextPromise = this.requestFactory.replaceTrustedOrigin(trustedOriginId, trustedOrigin, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceTrustedOrigin(rsp)));
      }));
  }
}
exports.ObservableTrustedOriginApi = ObservableTrustedOriginApi;
const UserApi_1 = require('../apis/UserApi');
class ObservableUserApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new UserApi_1.UserApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new UserApi_1.UserApiResponseProcessor();
  }
  /**
      * Activates a user. This operation can only be performed on users with a `STAGED` status. Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation. The user will have a status of `ACTIVE` when the activation process is complete. > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Activate a User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  activateUser(userId, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.activateUser(userId, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateUser(rsp)));
      }));
  }
  /**
      * Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
      * Change Password
      * @param userId
      * @param changePasswordRequest
      * @param strict
      */
  changePassword(userId, changePasswordRequest, strict, _options) {
    const requestContextPromise = this.requestFactory.changePassword(userId, changePasswordRequest, strict, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.changePassword(rsp)));
      }));
  }
  /**
      * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
      * Change Recovery Question
      * @param userId
      * @param userCredentials
      */
  changeRecoveryQuestion(userId, userCredentials, _options) {
    const requestContextPromise = this.requestFactory.changeRecoveryQuestion(userId, userCredentials, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.changeRecoveryQuestion(rsp)));
      }));
  }
  /**
      * Creates a new user in your Okta organization with or without credentials<br> > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
      * Create a User
      * @param body
      * @param activate Executes activation lifecycle operation when creating the user
      * @param provider Indicates whether to create a user with a specified authentication provider
      * @param nextLogin With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in.
      */
  createUser(body, activate, provider, nextLogin, _options) {
    const requestContextPromise = this.requestFactory.createUser(body, activate, provider, nextLogin, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createUser(rsp)));
      }));
  }
  /**
      * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
      * Deactivate a User
      * @param userId
      * @param sendEmail
      */
  deactivateUser(userId, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.deactivateUser(userId, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateUser(rsp)));
      }));
  }
  /**
      * Deletes linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Delete a Linked Object
      * @param userId
      * @param relationshipName
      */
  deleteLinkedObjectForUser(userId, relationshipName, _options) {
    const requestContextPromise = this.requestFactory.deleteLinkedObjectForUser(userId, relationshipName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteLinkedObjectForUser(rsp)));
      }));
  }
  /**
      * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**. Calling this on an `ACTIVE` user will transition the user to `DEPROVISIONED`.
      * Delete a User
      * @param userId
      * @param sendEmail
      */
  deleteUser(userId, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.deleteUser(userId, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteUser(rsp)));
      }));
  }
  /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login
      * Expire Password
      * @param userId
      */
  expirePassword(userId, _options) {
    const requestContextPromise = this.requestFactory.expirePassword(userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.expirePassword(rsp)));
      }));
  }
  /**
      * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response
      * Expire Password and Set Temporary Password
      * @param userId
      * @param revokeSessions When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
      */
  expirePasswordAndGetTemporaryPassword(userId, revokeSessions, _options) {
    const requestContextPromise = this.requestFactory.expirePasswordAndGetTemporaryPassword(userId, revokeSessions, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.expirePasswordAndGetTemporaryPassword(rsp)));
      }));
  }
  /**
      * Initiates the forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
      * Initiate Forgot Password
      * @param userId
      * @param sendEmail
      */
  forgotPassword(userId, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.forgotPassword(userId, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.forgotPassword(rsp)));
      }));
  }
  /**
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct
      * Reset Password with Recovery Question
      * @param userId
      * @param userCredentials
      * @param sendEmail
      */
  forgotPasswordSetNewPassword(userId, userCredentials, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.forgotPasswordSetNewPassword(userId, userCredentials, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.forgotPasswordSetNewPassword(rsp)));
      }));
  }
  /**
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Generate a Reset Password Token
      * @param userId
      * @param sendEmail
      * @param revokeSessions When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
      */
  generateResetPasswordToken(userId, sendEmail, revokeSessions, _options) {
    const requestContextPromise = this.requestFactory.generateResetPasswordToken(userId, sendEmail, revokeSessions, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.generateResetPasswordToken(rsp)));
      }));
  }
  /**
      * Retrieves a refresh token issued for the specified User and Client
      * Retrieve a Refresh Token for a Client
      * @param userId
      * @param clientId
      * @param tokenId
      * @param expand
      * @param limit
      * @param after
      */
  getRefreshTokenForUserAndClient(userId, clientId, tokenId, expand, limit, after, _options) {
    const requestContextPromise = this.requestFactory.getRefreshTokenForUserAndClient(userId, clientId, tokenId, expand, limit, after, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getRefreshTokenForUserAndClient(rsp)));
      }));
  }
  /**
      * Retrieves a user from your Okta organization
      * Retrieve a User
      * @param userId
      * @param expand Specifies additional metadata to include in the response. Possible value: &#x60;blocks&#x60;
      */
  getUser(userId, expand, _options) {
    const requestContextPromise = this.requestFactory.getUser(userId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getUser(rsp)));
      }));
  }
  /**
      * Retrieves a grant for the specified user
      * Retrieve a User Grant
      * @param userId
      * @param grantId
      * @param expand
      */
  getUserGrant(userId, grantId, expand, _options) {
    const requestContextPromise = this.requestFactory.getUserGrant(userId, grantId, expand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getUserGrant(rsp)));
      }));
  }
  /**
      * Lists all appLinks for all direct or indirect (via group membership) assigned applications
      * List all Assigned Application Links
      * @param userId
      */
  listAppLinks(userId, _options) {
    const requestContextPromise = this.requestFactory.listAppLinks(userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAppLinks(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all grants for a specified user and client
      * List all Grants for a Client
      * @param userId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listGrantsForUserAndClient(userId, clientId, expand, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listGrantsForUserAndClient(userId, clientId, expand, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listGrantsForUserAndClient(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all linked objects for a user, relationshipName can be a primary or associated relationship name
      * List all Linked Objects
      * @param userId
      * @param relationshipName
      * @param after
      * @param limit
      */
  listLinkedObjectsForUser(userId, relationshipName, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listLinkedObjectsForUser(userId, relationshipName, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listLinkedObjectsForUser(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all refresh tokens issued for the specified User and Client
      * List all Refresh Tokens for a Client
      * @param userId
      * @param clientId
      * @param expand
      * @param after
      * @param limit
      */
  listRefreshTokensForUserAndClient(userId, clientId, expand, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listRefreshTokensForUserAndClient(userId, clientId, expand, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listRefreshTokensForUserAndClient(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists information about how the user is blocked from accessing their account
      * List all User Blocks
      * @param userId
      */
  listUserBlocks(userId, _options) {
    const requestContextPromise = this.requestFactory.listUserBlocks(userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listUserBlocks(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all client resources for which the specified user has grants or tokens
      * List all Clients
      * @param userId
      */
  listUserClients(userId, _options) {
    const requestContextPromise = this.requestFactory.listUserClients(userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listUserClients(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all grants for the specified user
      * List all User Grants
      * @param userId
      * @param scopeId
      * @param expand
      * @param after
      * @param limit
      */
  listUserGrants(userId, scopeId, expand, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listUserGrants(userId, scopeId, expand, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listUserGrants(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all groups of which the user is a member
      * List all Groups
      * @param userId
      */
  listUserGroups(userId, _options) {
    const requestContextPromise = this.requestFactory.listUserGroups(userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listUserGroups(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists the IdPs associated with the user
      * List all Identity Providers
      * @param userId
      */
  listUserIdentityProviders(userId, _options) {
    const requestContextPromise = this.requestFactory.listUserIdentityProviders(userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listUserIdentityProviders(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all users that do not have a status of 'DEPROVISIONED' (by default), up to the maximum (200 for most orgs), with pagination.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List all Users
      * @param q Finds a user that matches firstName, lastName, and email properties
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
      * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
      * @param filter Filters users with a supported expression for a subset of properties
      * @param search Searches for users with a supported filtering expression for most properties. Okta recommends using this parameter for search for best performance.
      * @param sortBy
      * @param sortOrder
      */
  listUsers(q, after, limit, filter, search, sortBy, sortOrder, _options) {
    const requestContextPromise = this.requestFactory.listUsers(q, after, limit, filter, search, sortBy, sortOrder, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listUsers(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
      * Reactivate a User
      * @param userId
      * @param sendEmail Sends an activation email to the user if true
      */
  reactivateUser(userId, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.reactivateUser(userId, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.reactivateUser(rsp)));
      }));
  }
  /**
      * Replaces a user's profile and/or credentials using strict-update semantics
      * Replace a User
      * @param userId
      * @param user
      * @param strict
      */
  replaceUser(userId, user, strict, _options) {
    const requestContextPromise = this.requestFactory.replaceUser(userId, user, strict, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceUser(rsp)));
      }));
  }
  /**
      * Resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
      * Reset all Factors
      * @param userId
      */
  resetFactors(userId, _options) {
    const requestContextPromise = this.requestFactory.resetFactors(userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.resetFactors(rsp)));
      }));
  }
  /**
      * Revokes all grants for the specified user and client
      * Revoke all Grants for a Client
      * @param userId
      * @param clientId
      */
  revokeGrantsForUserAndClient(userId, clientId, _options) {
    const requestContextPromise = this.requestFactory.revokeGrantsForUserAndClient(userId, clientId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeGrantsForUserAndClient(rsp)));
      }));
  }
  /**
      * Revokes the specified refresh token
      * Revoke a Token for a Client
      * @param userId
      * @param clientId
      * @param tokenId
      */
  revokeTokenForUserAndClient(userId, clientId, tokenId, _options) {
    const requestContextPromise = this.requestFactory.revokeTokenForUserAndClient(userId, clientId, tokenId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeTokenForUserAndClient(rsp)));
      }));
  }
  /**
      * Revokes all refresh tokens issued for the specified User and Client
      * Revoke all Refresh Tokens for a Client
      * @param userId
      * @param clientId
      */
  revokeTokensForUserAndClient(userId, clientId, _options) {
    const requestContextPromise = this.requestFactory.revokeTokensForUserAndClient(userId, clientId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeTokensForUserAndClient(rsp)));
      }));
  }
  /**
      * Revokes one grant for a specified user
      * Revoke a User Grant
      * @param userId
      * @param grantId
      */
  revokeUserGrant(userId, grantId, _options) {
    const requestContextPromise = this.requestFactory.revokeUserGrant(userId, grantId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeUserGrant(rsp)));
      }));
  }
  /**
      * Revokes all grants for a specified user
      * Revoke all User Grants
      * @param userId
      */
  revokeUserGrants(userId, _options) {
    const requestContextPromise = this.requestFactory.revokeUserGrants(userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeUserGrants(rsp)));
      }));
  }
  /**
      * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Revoke all User Sessions
      * @param userId
      * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
      */
  revokeUserSessions(userId, oauthTokens, _options) {
    const requestContextPromise = this.requestFactory.revokeUserSessions(userId, oauthTokens, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.revokeUserSessions(rsp)));
      }));
  }
  /**
      * Creates a linked object for two users
      * Create a Linked Object for two User
      * @param associatedUserId
      * @param primaryRelationshipName
      * @param primaryUserId
      */
  setLinkedObjectForUser(associatedUserId, primaryRelationshipName, primaryUserId, _options) {
    const requestContextPromise = this.requestFactory.setLinkedObjectForUser(associatedUserId, primaryRelationshipName, primaryUserId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.setLinkedObjectForUser(rsp)));
      }));
  }
  /**
      * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
      * Suspend a User
      * @param userId
      */
  suspendUser(userId, _options) {
    const requestContextPromise = this.requestFactory.suspendUser(userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.suspendUser(rsp)));
      }));
  }
  /**
      * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that is blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password.
      * Unlock a User
      * @param userId
      */
  unlockUser(userId, _options) {
    const requestContextPromise = this.requestFactory.unlockUser(userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unlockUser(rsp)));
      }));
  }
  /**
      * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
      * Unsuspend a User
      * @param userId
      */
  unsuspendUser(userId, _options) {
    const requestContextPromise = this.requestFactory.unsuspendUser(userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unsuspendUser(rsp)));
      }));
  }
  /**
      * Updates a user partially determined by the request parameters
      * Update a User
      * @param userId
      * @param user
      * @param strict
      */
  updateUser(userId, user, strict, _options) {
    const requestContextPromise = this.requestFactory.updateUser(userId, user, strict, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateUser(rsp)));
      }));
  }
}
exports.ObservableUserApi = ObservableUserApi;
const UserFactorApi_1 = require('../apis/UserFactorApi');
class ObservableUserFactorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new UserFactorApi_1.UserFactorApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new UserFactorApi_1.UserFactorApiResponseProcessor();
  }
  /**
      * Activates a factor. The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
      * Activate a Factor
      * @param userId
      * @param factorId
      * @param body
      */
  activateFactor(userId, factorId, body, _options) {
    const requestContextPromise = this.requestFactory.activateFactor(userId, factorId, body, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateFactor(rsp)));
      }));
  }
  /**
      * Enrolls a user with a supported factor
      * Enroll a Factor
      * @param userId
      * @param body Factor
      * @param updatePhone
      * @param templateId id of SMS template (only for SMS factor)
      * @param tokenLifetimeSeconds
      * @param activate
      */
  enrollFactor(userId, body, updatePhone, templateId, tokenLifetimeSeconds, activate, _options) {
    const requestContextPromise = this.requestFactory.enrollFactor(userId, body, updatePhone, templateId, tokenLifetimeSeconds, activate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.enrollFactor(rsp)));
      }));
  }
  /**
      * Retrieves a factor for the specified user
      * Retrieve a Factor
      * @param userId
      * @param factorId
      */
  getFactor(userId, factorId, _options) {
    const requestContextPromise = this.requestFactory.getFactor(userId, factorId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getFactor(rsp)));
      }));
  }
  /**
      * Retrieves the factors verification transaction status
      * Retrieve a Factor Transaction Status
      * @param userId
      * @param factorId
      * @param transactionId
      */
  getFactorTransactionStatus(userId, factorId, transactionId, _options) {
    const requestContextPromise = this.requestFactory.getFactorTransactionStatus(userId, factorId, transactionId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getFactorTransactionStatus(rsp)));
      }));
  }
  /**
      * Lists all the enrolled factors for the specified user
      * List all Factors
      * @param userId
      */
  listFactors(userId, _options) {
    const requestContextPromise = this.requestFactory.listFactors(userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listFactors(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all the supported factors that can be enrolled for the specified user
      * List all Supported Factors
      * @param userId
      */
  listSupportedFactors(userId, _options) {
    const requestContextPromise = this.requestFactory.listSupportedFactors(userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listSupportedFactors(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Lists all available security questions for a user's `question` factor
      * List all Supported Security Questions
      * @param userId
      */
  listSupportedSecurityQuestions(userId, _options) {
    const requestContextPromise = this.requestFactory.listSupportedSecurityQuestions(userId, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listSupportedSecurityQuestions(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor
      * Unenroll a Factor
      * @param userId
      * @param factorId
      * @param removeEnrollmentRecovery
      */
  unenrollFactor(userId, factorId, removeEnrollmentRecovery, _options) {
    const requestContextPromise = this.requestFactory.unenrollFactor(userId, factorId, removeEnrollmentRecovery, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unenrollFactor(rsp)));
      }));
  }
  /**
      * Verifies an OTP for a `token` or `token:hardware` factor
      * Verify an MFA Factor
      * @param userId
      * @param factorId
      * @param templateId
      * @param tokenLifetimeSeconds
      * @param X_Forwarded_For
      * @param User_Agent
      * @param Accept_Language
      * @param body
      */
  verifyFactor(userId, factorId, templateId, tokenLifetimeSeconds, X_Forwarded_For, User_Agent, Accept_Language, body, _options) {
    const requestContextPromise = this.requestFactory.verifyFactor(userId, factorId, templateId, tokenLifetimeSeconds, X_Forwarded_For, User_Agent, Accept_Language, body, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.verifyFactor(rsp)));
      }));
  }
}
exports.ObservableUserFactorApi = ObservableUserFactorApi;
const UserTypeApi_1 = require('../apis/UserTypeApi');
class ObservableUserTypeApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new UserTypeApi_1.UserTypeApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new UserTypeApi_1.UserTypeApiResponseProcessor();
  }
  /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * Create a User Type
      * @param userType
      */
  createUserType(userType, _options) {
    const requestContextPromise = this.requestFactory.createUserType(userType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createUserType(rsp)));
      }));
  }
  /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * Delete a User Type
      * @param typeId
      */
  deleteUserType(typeId, _options) {
    const requestContextPromise = this.requestFactory.deleteUserType(typeId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteUserType(rsp)));
      }));
  }
  /**
      * Retrieves a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * Retrieve a User Type
      * @param typeId
      */
  getUserType(typeId, _options) {
    const requestContextPromise = this.requestFactory.getUserType(typeId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getUserType(rsp)));
      }));
  }
  /**
      * Lists all User Types in your org
      * List all User Types
      */
  listUserTypes(_options) {
    const requestContextPromise = this.requestFactory.listUserTypes(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listUserTypes(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Replaces an existing user type
      * Replace a User Type
      * @param typeId
      * @param userType
      */
  replaceUserType(typeId, userType, _options) {
    const requestContextPromise = this.requestFactory.replaceUserType(typeId, userType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceUserType(rsp)));
      }));
  }
  /**
      * Updates an existing User Type
      * Update a User Type
      * @param typeId
      * @param userType
      */
  updateUserType(typeId, userType, _options) {
    const requestContextPromise = this.requestFactory.updateUserType(typeId, userType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateUserType(rsp)));
      }));
  }
}
exports.ObservableUserTypeApi = ObservableUserTypeApi;
