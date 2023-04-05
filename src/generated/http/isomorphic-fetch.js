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
exports.IsomorphicFetchHttpLibrary = void 0;
const http_1 = require('./http');
const rxjsStub_1 = require('../rxjsStub');
const node_fetch_1 = require('node-fetch');
class IsomorphicFetchHttpLibrary {
  send(request) {
    let method = request.getHttpMethod().toString();
    let body = request.getBody();
    const resultPromise = (0, node_fetch_1.default)(request.getUrl(), {
      method: method,
      body: body,
      headers: request.getHeaders(),
      agent: request.getAgent(),
    }).then((resp) => {
      const headers = {};
      resp.headers.forEach((value, name) => {
        headers[name] = value;
      });
      const body = {
        text: () => resp.text(),
        binary: () => resp.buffer()
      };
      return new http_1.ResponseContext(resp.status, headers, body);
    });
    return (0, rxjsStub_1.from)(resultPromise);
  }
}
exports.IsomorphicFetchHttpLibrary = IsomorphicFetchHttpLibrary;
