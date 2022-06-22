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
/* global Response */
const _ = require('lodash');
const { Stream, PassThrough } = require('stream');


function cloneNodeFetchResponse(response, highWaterMark) {
  function setInternalsBodyStream(response, stream) {
    let internalsSymbol = Object.getOwnPropertySymbols(response)[0];
    response[internalsSymbol].body = stream;
  }

  if (response && response.body instanceof Stream) {
    let body = response.body;
    let s1 = new PassThrough({highWaterMark});
    let s2 = new PassThrough({highWaterMark});
    body.pipe(s1);
    body.pipe(s2);
    setInternalsBodyStream(response, s1);
    return new Response(s2, {
      url: response.url,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      ok: response.ok,
      redirected: response.redirected
    });
  }

  throw new Error('Unable to clone response');
}

module.exports = function defaultCacheMiddleware(ctx, next) {
  let cacheCheck, cacheHit = false;
  if (ctx.req.method.toLowerCase() === 'get' && !ctx.isCollection) {
    cacheCheck = ctx.cacheStore.get(ctx.req.url)
      .then(cachedValue => {
        if (cachedValue) {
          cacheHit = true;
          const [body, headersStr] = cachedValue.split('\0');
          const headers = headersStr && JSON.parse(headersStr) || {};
          const headersMap = new Map(Object.entries(headers));
          headers.forEach = headersMap.forEach.bind(headersMap);
          ctx.res = {
            headers,
            status: 200,
            text() {
              return Promise.resolve(body);
            },
            json() {
              try {
                return Promise.resolve(JSON.parse(body));
              } catch (err) {
                return Promise.reject(err);
              }
            }
          };
        }
      });
  }
  return Promise.resolve(cacheCheck)
    .then(() => next())
    .then(() => {
      if (cacheHit || ctx.isCollection) {
        return;
      }
      if (ctx.req.method.toLowerCase() === 'get') {
        const headers = {};
        ctx.res.headers?.forEach?.((value, name) => {
          headers[name] = value;
        });
        const headersStr = Object.keys(headers).length ? JSON.stringify(headers) : '';

        const customResponseBufferSize = ctx.defaultCacheMiddlewareResponseBufferSize;
        const clonedResponse = customResponseBufferSize ?
          cloneNodeFetchResponse(ctx.res, customResponseBufferSize) : ctx.res.clone();
        // store response in cache
        return clonedResponse.text()
          .then(text => {
            const valueToCache = text + (headersStr ? '\0' + headersStr : '');
            try {
              const selfHref = _.get(JSON.parse(text), '_links.self.href');
              if (selfHref) {
                ctx.cacheStore.set(selfHref, valueToCache);
              }
            } catch (e) {
              // TODO: add custom logger
            }
          });
      } else {
      // clear cache for affected resources
        const affected = [];
        const resources = ctx.resources || [];
        for (let resource of resources) {
          affected.push(ctx.cacheStore.delete(resource));
        }
        return Promise.all(affected);
      }
    });
};
