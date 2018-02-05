/*!
 * Copyright (c) 2017-2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


const fetch = require('isomorphic-fetch');

const OktaApiError = require('./api-error');
const HttpError = require('./http-error');
const MemoryStore = require('./memory-store');
const defaultCacheMiddleware = require('./default-cache-middleware');

/**
 * It's like fetch :) plus some extra convenience methods.
 *
 * @class Http
 */
class Http {
  constructor(httpConfig) {
    this.defaultHeaders = {};
    this.cacheStore = httpConfig.cacheStore || new MemoryStore();
    if (httpConfig.cacheMiddleware !== null) {
      this.cacheMiddleware = httpConfig.cacheMiddleware || defaultCacheMiddleware;
    }
  }

  errorFilter(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      return response.text()
      .then(body => {
        let err;

        // If the response is JSON, assume it's an Okta API error. Otherwise, assume it's some other HTTP error

        try {
          err = new OktaApiError(response.url, response.status, JSON.parse(body), response.headers);
        } catch (e) {
          err = new HttpError(response.url, response.status, body, response.headers);
        }
        throw err;
      });
    }
  }

  http(uri, request, context) {
    request = request || {};
    context = context || {};
    request.headers = Object.assign(this.defaultHeaders, request.headers);
    request.method = request.method || 'get';
    if (!this.cacheMiddleware) {
      return fetch(uri, request)
      .then(this.errorFilter);
    }
    const ctx = {
      uri,
      isCollection: context.isCollection,
      resources: context.resources,
      req: request,
      cacheStore: this.cacheStore
    };
    return this.cacheMiddleware(ctx, () => {
      return Promise.resolve(ctx.res ||
        fetch(uri, request)
        .then(this.errorFilter)
        .then(res => ctx.res = res)
      );
    })
    .then(() => ctx.res);
  }

  delete(uri, request, context) {
    return this.http(uri, Object.assign(request || {}, { method: 'delete' }), context);
  }

  json(uri, request, context) {
    request = request || {};
    request.headers = Object.assign({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }, request.headers);
    return this.http(uri, request, context)
    .then(res => res.json());
  }

  getJson(uri, request, context) {
    request = request || {};
    request.method = 'get';
    return this.json(uri, request, context);
  }

  post(uri, request, context) {
    request = request || {};
    request.method = 'post';
    return this.http(uri, request, context);
  }

  postJson(uri, request, context) {
    request = request || {};
    request.method = 'post',
    request.body = JSON.stringify(request.body);
    return this.json(uri, request, context);
  }

  putJson(uri, request, context) {
    request = request || {};
    request.method = 'put';
    request.body = JSON.stringify(request.body);
    return this.json(uri, request, context);
  }

  put(uri, request, context) {
    request = request || {};
    request.method = 'put';
    return this.http(uri, request, context);
  }
}

module.exports = Http;
