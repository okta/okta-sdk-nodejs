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

const _ = require('lodash');

module.exports = function defaultCacheMiddleware(ctx, next) {
  let cacheCheck, cacheHit = false;
  if (ctx.req.method.toLowerCase() === 'get' && !ctx.isCollection) {
    cacheCheck = ctx.cacheStore.get(ctx.req.uri)
    .then(body => {
      if (body) {
        cacheHit = true;
        ctx.res = {
          status: 200,
          text() {
            return Promise.resolve(body);
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
      // store response in cache
      return ctx.res.clone().text()
      .then(text => {
        try {
          const selfHref = _.get(JSON.parse(text), '_links.self.href');
          if (selfHref) {
            ctx.cacheStore.set(selfHref, text);
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
