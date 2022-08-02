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
exports.ObservableUserTypeApi = exports.ObservableUserFactorApi = exports.ObservableUserApi = exports.ObservableTrustedOriginApi = exports.ObservableThreatInsightApi = exports.ObservableTemplateApi = exports.ObservableSystemLogApi = exports.ObservableSubscriptionApi = exports.ObservableSessionApi = exports.ObservableSchemaApi = exports.ObservableProfileMappingApi = exports.ObservablePrincipalRateLimitApi = exports.ObservablePolicyApi = exports.ObservableOrgSettingApi = exports.ObservableNetworkZoneApi = exports.ObservableLinkedObjectApi = exports.ObservableInlineHookApi = exports.ObservableIdentityProviderApi = exports.ObservableGroupApi = exports.ObservableFeatureApi = exports.ObservableEventHookApi = exports.ObservableDomainApi = exports.ObservableCustomizationApi = exports.ObservableCAPTCHAApi = exports.ObservableBehaviorApi = exports.ObservableAuthorizationServerApi = exports.ObservableAuthenticatorApi = exports.ObservableApplicationApi = exports.ObservableApiTokenApi = exports.ObservableAgentPoolsApi = void 0;
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
      * Fetches AgentPools based on request parameters for a given org
      * List all Agent Pools
      * @param limitPerPoolType Maximum number of AgentPools being returned
      * @param poolType Agent type to search for
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      */
  getAgentPools(limitPerPoolType, poolType, after, _options) {
    const requestContextPromise = this.requestFactory.getAgentPools(limitPerPoolType, poolType, after, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.getAgentPools(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Gets Agent pool update from updateId
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
      * Gets the current state of the agent pool update instance settings
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
      * Gets List of Agent pool updates
      * List all Agent Pool updates
      * @param poolId Id of the agent pool for which the settings will apply
      * @param scheduled Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates.
      */
  getAgentPoolsUpdates(poolId, scheduled, _options) {
    const requestContextPromise = this.requestFactory.getAgentPoolsUpdates(poolId, scheduled, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.getAgentPoolsUpdates(rsp),
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
      * Updates Agent pool update settings
      * Update an Agent pool update settings
      * @param poolId Id of the agent pool for which the settings will apply
      * @param AgentPoolUpdateSetting
      */
  setAgentPoolsUpdateSettings(poolId, AgentPoolUpdateSetting, _options) {
    const requestContextPromise = this.requestFactory.setAgentPoolsUpdateSettings(poolId, AgentPoolUpdateSetting, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.setAgentPoolsUpdateSettings(rsp)));
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
      * Get the metadata for an active API token by id.
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
      * Enumerates the metadata of the active API tokens in your organization.
      * List all API Token Metadata
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
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
      * Revoke an API token by id.
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
      * Revokes the API token provided in the Authorization header.
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
      * Activates an inactive application.
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
      * Activates the default Provisioning Connection for an application.
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
      * Adds a new application to your Okta organization.
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
      * Assigns a group to an application
      * Assign a Group
      * @param appId
      * @param groupId
      * @param applicationGroupAssignment
      */
  createApplicationGroupAssignment(appId, groupId, applicationGroupAssignment, _options) {
    const requestContextPromise = this.requestFactory.createApplicationGroupAssignment(appId, groupId, applicationGroupAssignment, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createApplicationGroupAssignment(rsp)));
      }));
  }
  /**
      * Deactivates an active application.
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
      * Deactivates the default Provisioning Connection for an application.
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
      * Removes an inactive application.
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
      * Removes a group assignment from an application.
      * Unassign a Group
      * @param appId
      * @param groupId
      */
  deleteApplicationGroupAssignment(appId, groupId, _options) {
    const requestContextPromise = this.requestFactory.deleteApplicationGroupAssignment(appId, groupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteApplicationGroupAssignment(rsp)));
      }));
  }
  /**
      * Removes an assignment for a user from an application.
      * Unassign a User
      * @param appId
      * @param userId
      * @param sendEmail
      */
  deleteApplicationUser(appId, userId, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.deleteApplicationUser(appId, userId, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteApplicationUser(rsp)));
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
      * Generates a new key pair and returns the Certificate Signing Request for it.
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
      * Fetches an application from your Okta organization by `id`.
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
      * Fetches an application group assignment
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
      * Gets a specific application key credential by kid
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
      * Fetches a specific user assignment for application by `id`.
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
      * Fetches a certificate signing request for the app by `id`.
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
      * Get default Provisioning Connection for application
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
      * Fetches a Feature object for an application.
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
      * Gets a token for the specified application
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
      * Fetches a single scope consent grant for the application
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
      * Enumerates group assignments for an application.
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
      * Enumerates key credentials for an application
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
      * Enumerates all assigned [application users](#application-user-model) for an application.
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
      * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
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
      * Enumerates Certificate Signing Requests for an application
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
      * List Features for application
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
      * Updates a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
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
      * Revokes a certificate signing request and deletes the key pair from the application.
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
      * Set default Provisioning Connection for application
      * Update the default Provisioning Connection
      * @param appId
      * @param ProvisioningConnectionRequest
      * @param activate
      */
  setDefaultProvisioningConnectionForApplication(appId, ProvisioningConnectionRequest, activate, _options) {
    const requestContextPromise = this.requestFactory.setDefaultProvisioningConnectionForApplication(appId, ProvisioningConnectionRequest, activate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.setDefaultProvisioningConnectionForApplication(rsp)));
      }));
  }
  /**
      * Updates an application in your organization.
      * Replace an Application
      * @param appId
      * @param application
      */
  updateApplication(appId, application, _options) {
    const requestContextPromise = this.requestFactory.updateApplication(appId, application, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateApplication(rsp)));
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
      * Updates a Feature object for an application.
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
      * The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
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
const AuthenticatorApi_1 = require('../apis/AuthenticatorApi');
class ObservableAuthenticatorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new AuthenticatorApi_1.AuthenticatorApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new AuthenticatorApi_1.AuthenticatorApiResponseProcessor();
  }
  /**
      * Activates an authenticator by `authenticatorId`.
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
      * Deactivates an authenticator by `authenticatorId`.
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
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
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
      * Enumerates authenticators in your organization.
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
      * Updates an authenticator
      * Replace an Authenticator
      * @param authenticatorId
      * @param authenticator
      */
  updateAuthenticator(authenticatorId, authenticator, _options) {
    const requestContextPromise = this.requestFactory.updateAuthenticator(authenticatorId, authenticator, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateAuthenticator(rsp)));
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
      * Success
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
      * Activate Authorization Server Policy
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
      * Activate Authorization Server Policy Rule
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
      * Success
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
      * Success
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
      * Creates a policy rule for the specified Custom Authorization Server and Policy.
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
      * Success
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
      * Success
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
      * Success
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
      * Deactivate Authorization Server Policy
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
      * Deactivate Authorization Server Policy Rule
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
      * Success
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
      * Success
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
      * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
  /**
      * Success
      * Replace an Authorization Server
      * @param authServerId
      * @param authorizationServer
      */
  updateAuthorizationServer(authServerId, authorizationServer, _options) {
    const requestContextPromise = this.requestFactory.updateAuthorizationServer(authServerId, authorizationServer, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateAuthorizationServer(rsp)));
      }));
  }
  /**
      * Success
      * Replace a Policy
      * @param authServerId
      * @param policyId
      * @param policy
      */
  updateAuthorizationServerPolicy(authServerId, policyId, policy, _options) {
    const requestContextPromise = this.requestFactory.updateAuthorizationServerPolicy(authServerId, policyId, policy, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateAuthorizationServerPolicy(rsp)));
      }));
  }
  /**
      * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
      * Replace a Policy Rule
      * @param policyId
      * @param authServerId
      * @param ruleId
      * @param policyRule
      */
  updateAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule, _options) {
    const requestContextPromise = this.requestFactory.updateAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateAuthorizationServerPolicyRule(rsp)));
      }));
  }
  /**
      * Success
      * Replace a Custom Token Claim
      * @param authServerId
      * @param claimId
      * @param oAuth2Claim
      */
  updateOAuth2Claim(authServerId, claimId, oAuth2Claim, _options) {
    const requestContextPromise = this.requestFactory.updateOAuth2Claim(authServerId, claimId, oAuth2Claim, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateOAuth2Claim(rsp)));
      }));
  }
  /**
      * Success
      * Replace a Custom Token Scope
      * @param authServerId
      * @param scopeId
      * @param oAuth2Scope
      */
  updateOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options) {
    const requestContextPromise = this.requestFactory.updateOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateOAuth2Scope(rsp)));
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
      * Activate Behavior Detection Rule
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
      * Adds a new Behavior Detection Rule to your organization.
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
      * Deactivate Behavior Detection Rule
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
      * Delete a Behavior Detection Rule by `behaviorId`.
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
      * Fetches a Behavior Detection Rule by `behaviorId`.
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
      * Enumerates Behavior Detection Rules in your organization with pagination.
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
      * Update a Behavior Detection Rule by `behaviorId`.
      * Replace a Behavior Detection Rule
      * @param behaviorId id of the Behavior Detection Rule
      * @param rule
      */
  updateBehaviorDetectionRule(behaviorId, rule, _options) {
    const requestContextPromise = this.requestFactory.updateBehaviorDetectionRule(behaviorId, rule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateBehaviorDetectionRule(rsp)));
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
      * Adds a new CAPTCHA instance to your organization. In the current release, we only allow one CAPTCHA instance per org.
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
      * Delete a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
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
      * Fetches a CAPTCHA instance by `captchaId`.
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
      * Enumerates CAPTCHA instances in your organization with pagination. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
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
      * Partially update a CAPTCHA instance by `captchaId`.
      * Update a CAPTCHA instance
      * @param captchaId id of the CAPTCHA
      * @param instance
      */
  partialUpdateCaptchaInstance(captchaId, instance, _options) {
    const requestContextPromise = this.requestFactory.partialUpdateCaptchaInstance(captchaId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.partialUpdateCaptchaInstance(rsp)));
      }));
  }
  /**
      * Update a CAPTCHA instance by `captchaId`.
      * Replace a CAPTCHA instance
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
const CustomizationApi_1 = require('../apis/CustomizationApi');
class ObservableCustomizationApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new CustomizationApi_1.CustomizationApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new CustomizationApi_1.CustomizationApiResponseProcessor();
  }
  /**
      * Creates a new email customization.
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
      * Deletes all customizations for an email template.
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
      * Deletes a Theme background image.
      * Delete the Background Image
      * @param brandId
      * @param themeId
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
      * @param brandId
      * @param themeId
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
      * @param brandId
      * @param themeId
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
      * Deletes an email customization by its unique identifier.
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
      * Fetches a brand by `brandId`
      * Retrieve a Brand
      * @param brandId
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
      * Fetches a theme for a brand
      * Retrieve a Theme
      * @param brandId
      * @param themeId
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
      * Generates a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview an Email Customization
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
      * Gets an email customization by its unique identifier.
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
      * Gets an email template's default content.
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
      * Generates a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
      * Preview the Email Template Default Content
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
      * Gets an email template's settings.
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
      * Gets the details of an email template by name.
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
      * List all the themes in your brand
      * List all Themes
      * @param brandId
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
      * List all the brands in your org.
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
      * Lists all customizations of an email template.
      * List all Email Customizations
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
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
      * Lists all email templates.
      * List all Email Templates
      * @param brandId The ID of the brand.
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
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
      * Previews the error page.
      * Preview the Error Page
      * @param brandId The ID of the brand.
      * @param CustomizablePage
      */
  previewErrorPage(brandId, CustomizablePage, _options) {
    const requestContextPromise = this.requestFactory.previewErrorPage(brandId, CustomizablePage, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.previewErrorPage(rsp)));
      }));
  }
  /**
      * Preview the sign-in page.
      * Preview the Sign-in Page.
      * @param brandId The ID of the brand.
      * @param SignInPage
      */
  previewSignInPage(brandId, SignInPage, _options) {
    const requestContextPromise = this.requestFactory.previewSignInPage(brandId, SignInPage, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.previewSignInPage(rsp)));
      }));
  }
  /**
      * Replaces the error page.
      * Replace the Error Page
      * @param brandId The ID of the brand.
      * @param CustomizablePage
      */
  replaceErrorPage(brandId, CustomizablePage, _options) {
    const requestContextPromise = this.requestFactory.replaceErrorPage(brandId, CustomizablePage, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceErrorPage(rsp)));
      }));
  }
  /**
      * Replaces the sign-in page.
      * Replace the Sign-in Page
      * @param brandId The ID of the brand.
      * @param SignInPage
      */
  replaceSignInPage(brandId, SignInPage, _options) {
    const requestContextPromise = this.requestFactory.replaceSignInPage(brandId, SignInPage, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.replaceSignInPage(rsp)));
      }));
  }
  /**
      * Replaces the sign-out page settings.
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
      * Resets the error page.
      * Reset the Error Page
      * @param brandId The ID of the brand.
      */
  resetErrorPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.resetErrorPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.resetErrorPage(rsp)));
      }));
  }
  /**
      * Reset the sign-in page.
      * Reset the Sign-in Page
      * @param brandId The ID of the brand.
      */
  resetSignInPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.resetSignInPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.resetSignInPage(rsp)));
      }));
  }
  /**
      * Retrieves the error page.
      * Retrieve the Error Page
      * @param brandId The ID of the brand.
      */
  retrieveErrorPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.retrieveErrorPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.retrieveErrorPage(rsp)));
      }));
  }
  /**
      * Retrieves the sign-in page.
      * Retrieve the Sign-in Page
      * @param brandId The ID of the brand.
      */
  retrieveSignInPage(brandId, _options) {
    const requestContextPromise = this.requestFactory.retrieveSignInPage(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.retrieveSignInPage(rsp)));
      }));
  }
  /**
      * Retrieves the sign-out page settings.
      * Retrieve the Sign-out Page Settings
      * @param brandId The ID of the brand.
      */
  retrieveSignOutPageSettings(brandId, _options) {
    const requestContextPromise = this.requestFactory.retrieveSignOutPageSettings(brandId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.retrieveSignOutPageSettings(rsp)));
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
      * Updates a brand by `brandId`
      * Replace a Brand
      * @param brandId
      * @param brand
      */
  updateBrand(brandId, brand, _options) {
    const requestContextPromise = this.requestFactory.updateBrand(brandId, brand, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateBrand(rsp)));
      }));
  }
  /**
      * Updates a theme for a brand
      * Replace a Theme
      * @param brandId
      * @param themeId
      * @param theme
      */
  updateBrandTheme(brandId, themeId, theme, _options) {
    const requestContextPromise = this.requestFactory.updateBrandTheme(brandId, themeId, theme, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateBrandTheme(rsp)));
      }));
  }
  /**
      * Updates an existing email customization using the property values provided.
      * Replace an Email Customization
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param customizationId The ID of the email customization.
      * @param instance Request
      */
  updateEmailCustomization(brandId, templateName, customizationId, instance, _options) {
    const requestContextPromise = this.requestFactory.updateEmailCustomization(brandId, templateName, customizationId, instance, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateEmailCustomization(rsp)));
      }));
  }
  /**
      * Updates an email template's settings.
      * Replace the Email Template Settings
      * @param brandId The ID of the brand.
      * @param templateName The name of the email template.
      * @param EmailSettings
      */
  updateEmailSettings(brandId, templateName, EmailSettings, _options) {
    const requestContextPromise = this.requestFactory.updateEmailSettings(brandId, templateName, EmailSettings, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateEmailSettings(rsp)));
      }));
  }
  /**
      * Updates the background image for your Theme
      * Upload the Background Image
      * @param brandId
      * @param themeId
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
      * Updates the favicon for your theme
      * Upload the Favicon
      * @param brandId
      * @param themeId
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
      * Updates the logo for your Theme
      * Upload the Logo
      * @param brandId
      * @param themeId
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
const DomainApi_1 = require('../apis/DomainApi');
class ObservableDomainApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new DomainApi_1.DomainApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new DomainApi_1.DomainApiResponseProcessor();
  }
  /**
      * Creates the Certificate for the Domain.
      * Replace the Certificate
      * @param domainId
      * @param certificate
      */
  createCertificate(domainId, certificate, _options) {
    const requestContextPromise = this.requestFactory.createCertificate(domainId, certificate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createCertificate(rsp)));
      }));
  }
  /**
      * Creates your domain.
      * Create a Domain
      * @param domain
      */
  createDomain(domain, _options) {
    const requestContextPromise = this.requestFactory.createDomain(domain, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createDomain(rsp)));
      }));
  }
  /**
      * Deletes a Domain by `id`.
      * Delete a Domain
      * @param domainId
      */
  deleteDomain(domainId, _options) {
    const requestContextPromise = this.requestFactory.deleteDomain(domainId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteDomain(rsp)));
      }));
  }
  /**
      * Fetches a Domain by `id`.
      * Retrieve a Domain
      * @param domainId
      */
  getDomain(domainId, _options) {
    const requestContextPromise = this.requestFactory.getDomain(domainId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getDomain(rsp)));
      }));
  }
  /**
      * List all verified custom Domains for the org.
      * List all Domains
      */
  listDomains(_options) {
    const requestContextPromise = this.requestFactory.listDomains(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.listDomains(rsp)));
      }));
  }
  /**
      * Verifies the Domain by `id`.
      * Verify a Domain
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
exports.ObservableDomainApi = ObservableDomainApi;
const EventHookApi_1 = require('../apis/EventHookApi');
class ObservableEventHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new EventHookApi_1.EventHookApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new EventHookApi_1.EventHookApiResponseProcessor();
  }
  /**
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
      * Replace an Event Hook
      * @param eventHookId
      * @param eventHook
      */
  updateEventHook(eventHookId, eventHook, _options) {
    const requestContextPromise = this.requestFactory.updateEventHook(eventHookId, eventHook, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateEventHook(rsp)));
      }));
  }
  /**
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Success
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
      * Activates a specific group rule by id from your organization
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
      * Add App Instance Target to App Administrator Role given to a Group
      * Assign an Application Instance Target to Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId, roleId, appName, applicationId, _options) {
    const requestContextPromise = this.requestFactory.addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId, roleId, appName, applicationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addApplicationInstanceTargetToAppAdminRoleGivenToGroup(rsp)));
      }));
  }
  /**
      * Success
      * Assign an Application Target to Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  addApplicationTargetToAdminRoleGivenToGroup(groupId, roleId, appName, _options) {
    const requestContextPromise = this.requestFactory.addApplicationTargetToAdminRoleGivenToGroup(groupId, roleId, appName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addApplicationTargetToAdminRoleGivenToGroup(rsp)));
      }));
  }
  /**
      * Enumerates group targets for a group role.
      * Assign a Group Target for Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  addGroupTargetToGroupAdministratorRoleForGroup(groupId, roleId, targetGroupId, _options) {
    const requestContextPromise = this.requestFactory.addGroupTargetToGroupAdministratorRoleForGroup(groupId, roleId, targetGroupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addGroupTargetToGroupAdministratorRoleForGroup(rsp)));
      }));
  }
  /**
      * Adds a user to a group with 'OKTA_GROUP' type.
      * Assign a User
      * @param groupId
      * @param userId
      */
  addUserToGroup(groupId, userId, _options) {
    const requestContextPromise = this.requestFactory.addUserToGroup(groupId, userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addUserToGroup(rsp)));
      }));
  }
  /**
      * Assigns a Role to a Group
      * Assign a Role
      * @param groupId
      * @param assignRoleRequest
      * @param disableNotifications
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
      * Adds a new group with `OKTA_GROUP` type to your organization.
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
      * Deactivates a specific group rule by id from your organization
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
      * Removes a group with `OKTA_GROUP` type from your organization.
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
      * Removes a specific group rule by id from your organization
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
      * Fetches a group from your organization.
      * List all Group Rules
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
      * Fetches a specific group rule by id from your organization
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
      * Success
      * Retrieve a Role
      * @param groupId
      * @param roleId
      */
  getRole(groupId, roleId, _options) {
    const requestContextPromise = this.requestFactory.getRole(groupId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
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
      * Enumerates all applications that are assigned to a group.
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
      * Success
      * List all Assigned Roles
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
      * Lists all group rules for your organization.
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
      * Enumerates group targets for a group role.
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
      * Enumerates all users that are a member of a group.
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
      * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
      * List all Groups
      * @param q Searches the name property of groups for matching value
      * @param search Filter expression for groups
      * @param after Specifies the pagination cursor for the next page of groups
      * @param limit Specifies the number of group results in a page
      * @param expand If specified, it causes additional metadata to be included in the response.
      */
  listGroups(q, search, after, limit, expand, _options) {
    const requestContextPromise = this.requestFactory.listGroups(q, search, after, limit, expand, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listGroups(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Remove App Instance Target to App Administrator Role given to a Group
      * Delete an Application Instance Target to Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId, roleId, appName, applicationId, _options) {
    const requestContextPromise = this.requestFactory.removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId, roleId, appName, applicationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeApplicationTargetFromAdministratorRoleGivenToGroup(rsp)));
      }));
  }
  /**
      * Success
      * Delete an Application Target from Application Administrator Role
      * @param groupId
      * @param roleId
      * @param appName
      */
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId, roleId, appName, _options) {
    const requestContextPromise = this.requestFactory.removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId, roleId, appName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(rsp)));
      }));
  }
  /**
      * remove group target for a group role.
      * Delete a Group Target for Group Role
      * @param groupId
      * @param roleId
      * @param targetGroupId
      */
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId, roleId, targetGroupId, _options) {
    const requestContextPromise = this.requestFactory.removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId, roleId, targetGroupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeGroupTargetFromGroupAdministratorRoleGivenToGroup(rsp)));
      }));
  }
  /**
      * Unassigns a Role from a Group
      * Delete a Role
      * @param groupId
      * @param roleId
      */
  removeRoleFromGroup(groupId, roleId, _options) {
    const requestContextPromise = this.requestFactory.removeRoleFromGroup(groupId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeRoleFromGroup(rsp)));
      }));
  }
  /**
      * Removes a user from a group with 'OKTA_GROUP' type.
      * Unassign a User
      * @param groupId
      * @param userId
      */
  removeUserFromGroup(groupId, userId, _options) {
    const requestContextPromise = this.requestFactory.removeUserFromGroup(groupId, userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeUserFromGroup(rsp)));
      }));
  }
  /**
      * Updates the profile for a group with `OKTA_GROUP` type from your organization.
      * Replace a Group
      * @param groupId
      * @param group
      */
  updateGroup(groupId, group, _options) {
    const requestContextPromise = this.requestFactory.updateGroup(groupId, group, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateGroup(rsp)));
      }));
  }
  /**
      * Updates a group rule. Only `INACTIVE` rules can be updated.
      * Replace a Group Rule
      * @param ruleId
      * @param groupRule
      */
  updateGroupRule(ruleId, groupRule, _options) {
    const requestContextPromise = this.requestFactory.updateGroupRule(ruleId, groupRule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateGroupRule(rsp)));
      }));
  }
}
exports.ObservableGroupApi = ObservableGroupApi;
const IdentityProviderApi_1 = require('../apis/IdentityProviderApi');
class ObservableIdentityProviderApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new IdentityProviderApi_1.IdentityProviderApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new IdentityProviderApi_1.IdentityProviderApiResponseProcessor();
  }
  /**
      * Activates an inactive IdP.
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
      * Adds a new IdP to your organization.
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
      * Adds a new X.509 certificate credential to the IdP key store.
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
      * Deactivates an active IdP.
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
      * Removes an IdP from your organization.
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
      * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.
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
      * Generates a new key pair and returns a Certificate Signing Request for it.
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
      * Gets a specific Certificate Signing Request model by id
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
      * Fetches an IdP by `id`.
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
      * Fetches a linked IdP user by ID
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
      * Gets a specific IdP Key Credential by `kid`
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
      * Gets a specific IdP Key Credential by `kid`
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
      * Enumerates Certificate Signing Requests for an IdP
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
      * Find all the users linked to an identity provider
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
      * Enumerates IdP key credentials.
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
      * Enumerates signing key credentials for an IdP
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
      * Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
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
      * Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.
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
      * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
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
      * Revoke a Certificate Signing Request and delete the key pair from the IdP
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
      * Removes the link between the Okta user and the IdP user.
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
  /**
      * Updates the configuration for an IdP.
      * Replace an Identity Provider
      * @param idpId
      * @param identityProvider
      */
  updateIdentityProvider(idpId, identityProvider, _options) {
    const requestContextPromise = this.requestFactory.updateIdentityProvider(idpId, identityProvider, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateIdentityProvider(rsp)));
      }));
  }
}
exports.ObservableIdentityProviderApi = ObservableIdentityProviderApi;
const InlineHookApi_1 = require('../apis/InlineHookApi');
class ObservableInlineHookApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new InlineHookApi_1.InlineHookApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new InlineHookApi_1.InlineHookApiResponseProcessor();
  }
  /**
      * Activates the Inline Hook matching the provided id
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
      * Success
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
      * Deactivates the Inline Hook matching the provided id
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
      * Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
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
      * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
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
      * Gets an inline hook by ID
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
      * Success
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
      * Updates an inline hook by ID
      * Replace an Inline Hook
      * @param inlineHookId
      * @param inlineHook
      */
  updateInlineHook(inlineHookId, inlineHook, _options) {
    const requestContextPromise = this.requestFactory.updateInlineHook(inlineHookId, inlineHook, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateInlineHook(rsp)));
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
      * Success
      * Create a Linked Object Definition
      * @param linkedObject
      */
  addLinkedObjectDefinition(linkedObject, _options) {
    const requestContextPromise = this.requestFactory.addLinkedObjectDefinition(linkedObject, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addLinkedObjectDefinition(rsp)));
      }));
  }
  /**
      * Success
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
      * Success
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
      * Success
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
const NetworkZoneApi_1 = require('../apis/NetworkZoneApi');
class ObservableNetworkZoneApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new NetworkZoneApi_1.NetworkZoneApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new NetworkZoneApi_1.NetworkZoneApiResponseProcessor();
  }
  /**
      * Activate Network Zone
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
      * Adds a new network zone to your Okta organization.
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
      * Deactivates a network zone.
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
      * Removes network zone.
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
      * Fetches a network zone from your Okta organization by `id`.
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
      * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
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
      * Updates a network zone in your organization.
      * Replace a Network Zone
      * @param zoneId
      * @param zone
      */
  updateNetworkZone(zoneId, zone, _options) {
    const requestContextPromise = this.requestFactory.updateNetworkZone(zoneId, zone, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateNetworkZone(rsp)));
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
      * A list of email addresses to be removed from the set of email addresses that are bounced.
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
      * Gets Okta Communication Settings of your organization.
      * Retreive the Okta Communication Settings
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
      * Gets Contact Types of your organization.
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
      * Retrieves the URL of the User associated with the specified Contact Type.
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
      * Gets Okta Support Settings of your organization.
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
      * Gets preferences of your organization.
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
      * Get settings of your organization.
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
      * Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.
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
      * Hide the Okta UI footer for all end users of your organization.
      * Update the Preference to Hide the Okta Dashboard Footer
      */
  hideOktaUIFooter(_options) {
    const requestContextPromise = this.requestFactory.hideOktaUIFooter(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.hideOktaUIFooter(rsp)));
      }));
  }
  /**
      * Opts in all users of this org to Okta Communication emails.
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
      * Opts out all users of this org from Okta Communication emails.
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
      * Partial update settings of your organization.
      * Update the Org Settings
      * @param OrgSetting
      */
  partialUpdateOrgSetting(OrgSetting, _options) {
    const requestContextPromise = this.requestFactory.partialUpdateOrgSetting(OrgSetting, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.partialUpdateOrgSetting(rsp)));
      }));
  }
  /**
      * Revokes Okta Support access to your organization.
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
      * Makes the Okta UI footer visible for all end users of your organization.
      * Update the Preference to Show the Okta Dashboard Footer
      */
  showOktaUIFooter(_options) {
    const requestContextPromise = this.requestFactory.showOktaUIFooter(_options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.showOktaUIFooter(rsp)));
      }));
  }
  /**
      * Updates the User associated with the specified Contact Type.
      * Replace the User of the Contact Type
      * @param contactType
      * @param orgContactUser
      */
  updateOrgContactUser(contactType, orgContactUser, _options) {
    const requestContextPromise = this.requestFactory.updateOrgContactUser(contactType, orgContactUser, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateOrgContactUser(rsp)));
      }));
  }
  /**
      * Updates the logo for your organization.
      * Upload the Org Logo
      * @param file
      */
  updateOrgLogo(file, _options) {
    const requestContextPromise = this.requestFactory.updateOrgLogo(file, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateOrgLogo(rsp)));
      }));
  }
  /**
      * Update settings of your organization.
      * Replace the Org Settings
      * @param orgSetting
      */
  updateOrgSetting(orgSetting, _options) {
    const requestContextPromise = this.requestFactory.updateOrgSetting(orgSetting, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateOrgSetting(rsp)));
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
      * Activates a policy.
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
      * Activates a policy rule.
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
      * Clones an existing policy.
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
      * Creates a policy.
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
      * Creates a policy rule.
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
      * Deactivates a policy.
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
      * Deactivates a policy rule.
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
      * Removes a policy.
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
      * Removes a policy rule.
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
      * Gets a policy.
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
      * Gets a policy rule.
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
      * Gets all policies with the specified type.
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
      * Enumerates all policy rules.
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
      * Updates a policy.
      * Replace a Policy
      * @param policyId
      * @param policy
      */
  updatePolicy(policyId, policy, _options) {
    const requestContextPromise = this.requestFactory.updatePolicy(policyId, policy, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updatePolicy(rsp)));
      }));
  }
  /**
      * Updates a policy rule.
      * Replace a Policy Rule
      * @param policyId
      * @param ruleId
      * @param policyRule
      */
  updatePolicyRule(policyId, ruleId, policyRule, _options) {
    const requestContextPromise = this.requestFactory.updatePolicyRule(policyId, ruleId, policyRule, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updatePolicyRule(rsp)));
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
      * Adds a new Principal Rate Limit entity to your organization. In the current release, we only allow one Principal Rate Limit entity per org and principal.
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
      * Delete a Principal Rate Limit.
      * Delete a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      */
  deletePrincipalRateLimitEntity(principalRateLimitId, _options) {
    const requestContextPromise = this.requestFactory.deletePrincipalRateLimitEntity(principalRateLimitId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deletePrincipalRateLimitEntity(rsp)));
      }));
  }
  /**
      * Fetches a Principal Rate Limit entity by `principalRateLimitId`.
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
      * Lists all Principal Rate Limit entities considering the provided parameters.
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
      * Update a  Principal Rate Limit entity by `principalRateLimitId`.
      * Replace a Principal Rate Limit
      * @param principalRateLimitId id of the Principal Rate Limit
      * @param entity
      */
  updatePrincipalRateLimitEntity(principalRateLimitId, entity, _options) {
    const requestContextPromise = this.requestFactory.updatePrincipalRateLimitEntity(principalRateLimitId, entity, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updatePrincipalRateLimitEntity(rsp)));
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
      * Fetches a single Profile Mapping referenced by its ID.
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
      * Enumerates Profile Mappings in your organization with pagination.
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
      * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings.
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
const SchemaApi_1 = require('../apis/SchemaApi');
class ObservableSchemaApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new SchemaApi_1.SchemaApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new SchemaApi_1.SchemaApiResponseProcessor();
  }
  /**
      * Fetches the Schema for an App User
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
      * Fetches the group schema
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
      * Fetches the schema for a Schema Id.
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
      * Partial updates on the User Profile properties of the Application User Schema.
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
      * Updates, adds or removes one or more custom Group Profile properties in the schema
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
      * Partial updates on the User Profile properties of the user schema.
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
      * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
      * Create a Session with Session Token
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
      * End a session.
      * Delete a Session
      * @param sessionId
      */
  endSession(sessionId, _options) {
    const requestContextPromise = this.requestFactory.endSession(sessionId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.endSession(rsp)));
      }));
  }
  /**
      * Get details about a session.
      * Retrieve a Session
      * @param sessionId
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
      * Refresh a session.
      * Refresh a Session
      * @param sessionId
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
      * When roleType Get subscriptions of a Role with a specific notification type. Else when roleId Get subscription of a Custom Role with a specific notification type.
      * List all Subscriptions of a Custom Role with a specific notification type
      * @param roleTypeOrRoleId
      * @param notificationType
      */
  getRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    const requestContextPromise = this.requestFactory.getRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getRoleSubscriptionByNotificationType(rsp)));
      }));
  }
  /**
      * Get the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
      * List all Subscriptions by type
      * @param userId
      * @param notificationType
      */
  getUserSubscriptionByNotificationType(userId, notificationType, _options) {
    const requestContextPromise = this.requestFactory.getUserSubscriptionByNotificationType(userId, notificationType, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getUserSubscriptionByNotificationType(rsp)));
      }));
  }
  /**
      * When roleType List all subscriptions of a Role. Else when roleId List subscriptions of a Custom Role
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
      * List subscriptions of a User. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
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
      * When roleType Subscribes a Role to a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Subscribes a Custom Role to a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
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
      * When roleType Unsubscribes a Role from a specific notification type. When you change the subscription status of a Role, it overrides the subscription of any individual user of that Role. Else when roleId Unsubscribes a Custom Role from a specific notification type. When you change the subscription status of a Custom Role, it overrides the subscription of any individual user of that Custom Role.
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
      * The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
      * List all System Log Events
      * @param since
      * @param until
      * @param filter
      * @param q
      * @param limit
      * @param sortOrder
      * @param after
      */
  getLogs(since, until, filter, q, limit, sortOrder, after, _options) {
    const requestContextPromise = this.requestFactory.getLogs(since, until, filter, q, limit, sortOrder, after, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.getLogs(rsp),
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
      * Adds a new custom SMS template to your organization.
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
      * Removes an SMS template.
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
      * Fetches a specific template by `id`
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
      * Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.
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
      * Updates only some of the SMS template properties:
      * Update an SMS Template
      * @param templateId
      * @param smsTemplate
      */
  partialUpdateSmsTemplate(templateId, smsTemplate, _options) {
    const requestContextPromise = this.requestFactory.partialUpdateSmsTemplate(templateId, smsTemplate, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.partialUpdateSmsTemplate(rsp)));
      }));
  }
  /**
      * Updates the SMS template.
      * Replace an SMS Template
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
      * Gets current ThreatInsight configuration
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
      * Success
      * Activate a Trusted Origin
      * @param trustedOriginId
      */
  activateOrigin(trustedOriginId, _options) {
    const requestContextPromise = this.requestFactory.activateOrigin(trustedOriginId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.activateOrigin(rsp)));
      }));
  }
  /**
      * Success
      * Create a Trusted Origin
      * @param trustedOrigin
      */
  createOrigin(trustedOrigin, _options) {
    const requestContextPromise = this.requestFactory.createOrigin(trustedOrigin, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createOrigin(rsp)));
      }));
  }
  /**
      * Success
      * Deactivate a Trusted Origin
      * @param trustedOriginId
      */
  deactivateOrigin(trustedOriginId, _options) {
    const requestContextPromise = this.requestFactory.deactivateOrigin(trustedOriginId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateOrigin(rsp)));
      }));
  }
  /**
      * Success
      * Delete a Trusted Origin
      * @param trustedOriginId
      */
  deleteOrigin(trustedOriginId, _options) {
    const requestContextPromise = this.requestFactory.deleteOrigin(trustedOriginId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteOrigin(rsp)));
      }));
  }
  /**
      * Success
      * Retrieve a Trusted Origin
      * @param trustedOriginId
      */
  getOrigin(trustedOriginId, _options) {
    const requestContextPromise = this.requestFactory.getOrigin(trustedOriginId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getOrigin(rsp)));
      }));
  }
  /**
      * Success
      * List all Trusted Origins
      * @param q
      * @param filter
      * @param after
      * @param limit
      */
  listOrigins(q, filter, after, limit, _options) {
    const requestContextPromise = this.requestFactory.listOrigins(q, filter, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listOrigins(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Success
      * Replace a Trusted Origin
      * @param trustedOriginId
      * @param trustedOrigin
      */
  updateOrigin(trustedOriginId, trustedOrigin, _options) {
    const requestContextPromise = this.requestFactory.updateOrigin(trustedOriginId, trustedOrigin, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateOrigin(rsp)));
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
      * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
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
      * Assign all Apps as Target to Role
      * Assign all Apps as Target to Role
      * @param userId
      * @param roleId
      */
  addAllAppsAsTargetToRole(userId, roleId, _options) {
    const requestContextPromise = this.requestFactory.addAllAppsAsTargetToRole(userId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addAllAppsAsTargetToRole(rsp)));
      }));
  }
  /**
      * Success
      * Assign an Application Target to Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  addApplicationTargetToAdminRoleForUser(userId, roleId, appName, _options) {
    const requestContextPromise = this.requestFactory.addApplicationTargetToAdminRoleForUser(userId, roleId, appName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addApplicationTargetToAdminRoleForUser(rsp)));
      }));
  }
  /**
      * Add App Instance Target to App Administrator Role given to a User
      * Assign an Application Instance Target to an Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  addApplicationTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    const requestContextPromise = this.requestFactory.addApplicationTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addApplicationTargetToAppAdminRoleForUser(rsp)));
      }));
  }
  /**
      * Assign a Group Target to Role
      * Assign a Group Target to Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  addGroupTargetToRole(userId, roleId, groupId, _options) {
    const requestContextPromise = this.requestFactory.addGroupTargetToRole(userId, roleId, groupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.addGroupTargetToRole(rsp)));
      }));
  }
  /**
      * Assigns a role to a user.
      * Assign a Role
      * @param userId
      * @param assignRoleRequest
      * @param disableNotifications
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
      * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
      * Delete all User Sessions
      * @param userId
      * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
      */
  clearUserSessions(userId, oauthTokens, _options) {
    const requestContextPromise = this.requestFactory.clearUserSessions(userId, oauthTokens, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.clearUserSessions(rsp)));
      }));
  }
  /**
      * Creates a new user in your Okta organization with or without credentials.
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
      * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
      * Delete a User
      * @param userId
      * @param sendEmail
      */
  deactivateOrDeleteUser(userId, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.deactivateOrDeleteUser(userId, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deactivateOrDeleteUser(rsp)));
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
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
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
      * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response.
      * Expire Password and Set Temporary Password
      * @param userId
      */
  expirePasswordAndGetTemporaryPassword(userId, _options) {
    const requestContextPromise = this.requestFactory.expirePasswordAndGetTemporaryPassword(userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
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
      * Initiate forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
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
      * Resets the user's password to the specified password if the provided answer to the recovery question is correct.
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
      * Get linked objects for a user, relationshipName can be a primary or associated relationship name
      * List all Linked Objects
      * @param userId
      * @param relationshipName
      * @param after
      * @param limit
      */
  getLinkedObjectsForUser(userId, relationshipName, after, limit, _options) {
    const requestContextPromise = this.requestFactory.getLinkedObjectsForUser(userId, relationshipName, after, limit, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.getLinkedObjectsForUser(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Gets a refresh token issued for the specified User and Client.
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
      * Fetches a user from your Okta organization.
      * Retrieve a User
      * @param userId
      */
  getUser(userId, _options) {
    const requestContextPromise = this.requestFactory.getUser(userId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
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
      * Gets a grant for the specified user
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
      * Gets role that is assigned to user.
      * Retrieve a Role
      * @param userId
      * @param roleId
      */
  getUserRole(userId, roleId, _options) {
    const requestContextPromise = this.requestFactory.getUserRole(userId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getUserRole(rsp)));
      }));
  }
  /**
      * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
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
      * Lists all roles assigned to a user.
      * List all Assigned Roles
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
      * Success
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
      * Lists all refresh tokens issued for the specified User and Client.
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
      * Lists all client resources for which the specified user has grants or tokens.
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
      * Fetches the groups of which the user is a member.
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
      * Lists the IdPs associated with the user.
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
      * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
      * List all Users
      * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
      * @param q Finds a user that matches firstName, lastName, and email properties
      * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
      * @param filter Filters users with a supported expression for a subset of properties
      * @param search Searches for users with a supported filtering  expression for most properties
      * @param sortBy
      * @param sortOrder
      */
  listUsers(after, q, limit, filter, search, sortBy, sortOrder, _options) {
    const requestContextPromise = this.requestFactory.listUsers(after, q, limit, filter, search, sortBy, sortOrder, _options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listUsers(rsp),
    };
    return (0, rxjsStub_1.from)(requestContextPromise).pipe((0, rxjsStub_2.mergeMap)((ctx) => {
      return (0, rxjsStub_1.from)(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
      * Update a User
      * @param userId
      * @param user
      * @param strict
      */
  partialUpdateUser(userId, user, strict, _options) {
    const requestContextPromise = this.requestFactory.partialUpdateUser(userId, user, strict, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.partialUpdateUser(rsp)));
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
      * Remove App Instance Target to App Administrator Role given to a User
      * Unassign an Application Instance Target to Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      * @param applicationId
      */
  removeApplicationTargetFromAdministratorRoleForUser(userId, roleId, appName, applicationId, _options) {
    const requestContextPromise = this.requestFactory.removeApplicationTargetFromAdministratorRoleForUser(userId, roleId, appName, applicationId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeApplicationTargetFromAdministratorRoleForUser(rsp)));
      }));
  }
  /**
      * Success
      * Unassign an Application Target from Application Administrator Role
      * @param userId
      * @param roleId
      * @param appName
      */
  removeApplicationTargetFromApplicationAdministratorRoleForUser(userId, roleId, appName, _options) {
    const requestContextPromise = this.requestFactory.removeApplicationTargetFromApplicationAdministratorRoleForUser(userId, roleId, appName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeApplicationTargetFromApplicationAdministratorRoleForUser(rsp)));
      }));
  }
  /**
      * Unassign a Group Target from Role
      * Unassign a Group Target from Role
      * @param userId
      * @param roleId
      * @param groupId
      */
  removeGroupTargetFromRole(userId, roleId, groupId, _options) {
    const requestContextPromise = this.requestFactory.removeGroupTargetFromRole(userId, roleId, groupId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeGroupTargetFromRole(rsp)));
      }));
  }
  /**
      * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
      * Delete a Linked Object
      * @param userId
      * @param relationshipName
      */
  removeLinkedObjectForUser(userId, relationshipName, _options) {
    const requestContextPromise = this.requestFactory.removeLinkedObjectForUser(userId, relationshipName, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeLinkedObjectForUser(rsp)));
      }));
  }
  /**
      * Unassigns a role from a user.
      * Delete a Role
      * @param userId
      * @param roleId
      */
  removeRoleFromUser(userId, roleId, _options) {
    const requestContextPromise = this.requestFactory.removeRoleFromUser(userId, roleId, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.removeRoleFromUser(rsp)));
      }));
  }
  /**
      * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
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
      * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
      * Reset Password
      * @param userId
      * @param sendEmail
      */
  resetPassword(userId, sendEmail, _options) {
    const requestContextPromise = this.requestFactory.resetPassword(userId, sendEmail, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.resetPassword(rsp)));
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
      * Revokes the specified refresh token.
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
      * Revokes all refresh tokens issued for the specified User and Client.
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
      * Sets a linked object for two users.
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
      * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
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
      * Update a user's profile and/or credentials using strict-update semantics.
      * Replace a User
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
      * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
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
      * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
      * Delete a Factor
      * @param userId
      * @param factorId
      * @param removeEnrollmentRecovery
      */
  deleteFactor(userId, factorId, removeEnrollmentRecovery, _options) {
    const requestContextPromise = this.requestFactory.deleteFactor(userId, factorId, removeEnrollmentRecovery, _options);
    // build promise chain
    let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
      pipe((0, rxjsStub_2.mergeMap)((response) => {
        let middlewarePostObservable = (0, rxjsStub_1.of)(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.deleteFactor(rsp)));
      }));
  }
  /**
      * Enrolls a user with a supported factor.
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
      * Fetches a factor for the specified user
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
      * Polls factors verification transaction for status.
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
      * Enumerates all the enrolled factors for the specified user
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
      * Enumerates all the supported factors that can be enrolled for the specified user
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
      * Enumerates all available security questions for a user's `question` factor
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
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
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
      * Fetches all User Types in your org
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
      * Replace an existing User Type
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
