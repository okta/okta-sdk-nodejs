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
exports.ObservableAuthenticatorApi = void 0;
const collection_1 = require('../../collection');
const rxjsStub_1 = require('../rxjsStub');
const rxjsStub_2 = require('../rxjsStub');

const AuthenticatorApi_1 = require('../apis/AuthenticatorApi');
class ObservableAuthenticatorApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new AuthenticatorApi_1.AuthenticatorApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new AuthenticatorApi_1.AuthenticatorApiResponseProcessor();
  }
  /**
      * Activates an authenticator by `authenticatorId`.
      * Activate Authenticator
      * @param authenticatorId
      */
  activateAuthenticator(authenticatorId, _options) {
    const requestContextPromise = this.requestFactory.activateAuthenticator(authenticatorId, _options);
    // build promise chain
    let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
      pipe(rxjsStub_2.mergeMap((response) => {
        let middlewarePostObservable = rxjsStub_1.of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.activateAuthenticator(rsp)));
      }));
  }
  /**
      * Deactivates an authenticator by `authenticatorId`.
      * Deactivate Authenticator
      * @param authenticatorId
      */
  deactivateAuthenticator(authenticatorId, _options) {
    const requestContextPromise = this.requestFactory.deactivateAuthenticator(authenticatorId, _options);
    // build promise chain
    let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
      pipe(rxjsStub_2.mergeMap((response) => {
        let middlewarePostObservable = rxjsStub_1.of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.deactivateAuthenticator(rsp)));
      }));
  }
  /**
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
      * Get Authenticator
      * @param authenticatorId
      */
  getAuthenticator(authenticatorId, _options) {
    const requestContextPromise = this.requestFactory.getAuthenticator(authenticatorId, _options);
    // build promise chain
    let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
      pipe(rxjsStub_2.mergeMap((response) => {
        let middlewarePostObservable = rxjsStub_1.of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.getAuthenticator(rsp)));
      }));
  }
  /**
      * Enumerates authenticators in your organization.
      * List Authenticators
      */
  listAuthenticators(_options) {
    const requestContextPromise = this.requestFactory.listAuthenticators(_options);
    const modelFactory = {
      parseResponse: (rsp) => this.responseProcessor.listAuthenticators(rsp),
    };
    return rxjsStub_1.from(requestContextPromise).pipe(rxjsStub_2.mergeMap((ctx) => {
      return rxjsStub_1.from(Promise.resolve(new collection_1.Collection(this.configuration.httpApi, ctx.getUrl(), modelFactory, ctx)));
    }));
  }
  /**
      * Updates an authenticator
      * Update Authenticator
      * @param authenticatorId
      * @param authenticator
      */
  updateAuthenticator(authenticatorId, authenticator, _options) {
    const requestContextPromise = this.requestFactory.updateAuthenticator(authenticatorId, authenticator, _options);
    // build promise chain
    let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
    }
    return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
      pipe(rxjsStub_2.mergeMap((response) => {
        let middlewarePostObservable = rxjsStub_1.of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.updateAuthenticator(rsp)));
      }));
  }
}
