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

const FormData = require('form-data');

const OktaApiError = require('./api-error');
const HttpError = require('./http-error');
const MemoryStore = require('./memory-store');
const defaultCacheMiddleware = require('./default-cache-middleware');
const HttpsProxyAgent = require('https-proxy-agent');
const { from } = require('./generated/rxjsStub');
const { ResponseContext } = require('./generated/http/http');


/**
 * It's like fetch :) plus some extra convenience methods.
 *
 * @class Http
 */
class Http {
  static errorFilter(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
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

  constructor(httpConfig) {
    this.defaultHeaders = {};
    this.requestExecutor = httpConfig.requestExecutor;
    this.cacheStore = httpConfig.cacheStore || new MemoryStore();
    if (httpConfig.cacheMiddleware) {
      this.cacheMiddleware = httpConfig.cacheMiddleware || defaultCacheMiddleware;
    // cacheMiddleware is not provided explicitly
    } else if (httpConfig.cacheMiddleware !== null) {
      this.cacheMiddleware = defaultCacheMiddleware;
      this.defaultCacheMiddlewareResponseBufferSize = httpConfig.defaultCacheMiddlewareResponseBufferSize;
    }
    this.oauth = httpConfig.oauth;
    const proxy = httpConfig.httpsProxy || process.env.https_proxy || process.env.HTTPS_PROXY;
    if (proxy) {
      this.agent = new HttpsProxyAgent(proxy);
    }
  }

  prepareRequest(request) {
    if (!this.oauth) {
      return Promise.resolve();
    }

    return this.oauth.getAccessToken()
      .then(accessToken => {
        request.headers.Authorization = `Bearer ${accessToken.access_token}`;
      });
  }

  send(requestContext) {
    const requestOptions = {
      isCollection: requestContext.isCollection,
      resources: requestContext.affectedResources
    };
    const responsePromise = this.http(requestContext.url.href, requestContext, requestOptions).then(resp => {
      const headers = {};
      resp.headers.forEach((value, name) => {
        headers[name] = value;
      });

      const body = {
        text: () => resp.text(),
        binary: () => resp.buffer()
      };
      return new ResponseContext(resp.status, headers, body);
    });
    return from(responsePromise);
  }

  http(uri, request, context) {
    request = request || {};
    context = context || {};
    request.url = uri;
    request.headers = Object.assign({}, this.defaultHeaders, request.headers);
    request.method = request.method || request.httpMethod || 'get';
    if (this.agent) {
      request.agent = this.agent;
    }

    let retriedOnAuthError = false;
    const execute = () => {
      const getRequestPromise = () => this.prepareRequest(request)
        .then(() => this.requestExecutor.fetch(request))
        .then(Http.errorFilter)
        .catch(error => {
          // Clear cached token then retry request one more time
          if (this.oauth && error && error.status === 401 && !retriedOnAuthError) {
            retriedOnAuthError = true;
            this.oauth.clearCachedAccessToken();
            return execute();
          }

          throw error;
        });

      if (!this.cacheMiddleware) {
        return getRequestPromise();
      }

      const ctx = {
        isCollection: context.isCollection,
        resources: context.resources,
        req: request,
        cacheStore: this.cacheStore,
        defaultCacheMiddlewareResponseBufferSize: this.defaultCacheMiddlewareResponseBufferSize
      };
      return this.cacheMiddleware(ctx, () => {
        if (ctx.res) {
          return;
        }

        return getRequestPromise().then(res => ctx.res = res);
      })
        .then(() => ctx.res);
    };

    return execute();
  }

  delete(uri, request, context) {
    return this.http(uri, Object.assign(request || {}, { method: 'delete' }), context);
  }

  json(uri, request, context, hasContent = true) {
    request = request || {};
    request.headers = Object.assign({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }, request.headers);

    if (hasContent) {
      return this.http(uri, request, context).then(res => res.json());
    }
    return this.http(uri, request, context);
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

  postFormDataFile(uri, request, file, context) {
    const form = new FormData();
    form.append('file', file);

    request = Object.assign({}, request, {
      method: 'post',
      body: form
    });
    return this.http(uri, request, context);
  }

  postJson(uri, request, context, hasContent = true) {
    request = request || {};
    request.method = 'post';
    if (typeof request.body !== 'string') {
      request.body = JSON.stringify(request.body);
    }
    return this.json(uri, request, context, hasContent);
  }

  postJsonNoContent(uri, request, context) {
    return this.postJson(uri, request, context, false);
  }

  put(uri, request, context) {
    request = request || {};
    request.method = 'put';
    return this.http(uri, request, context);
  }

  putJson(uri, request, context, hasContent = true) {
    request = request || {};
    request.method = 'put';
    if (typeof request.body !== 'string') {
      request.body = JSON.stringify(request.body);
    }
    return this.json(uri, request, context, hasContent);
  }

  putJsonNoContent(uri, request, context) {
    return this.putJson(uri, request, context, false);
  }

}

module.exports.Http = Http;
