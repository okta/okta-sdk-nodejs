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
exports.PromiseMiddlewareWrapper = void 0;
const rxjsStub_1 = require('./rxjsStub');
class PromiseMiddlewareWrapper {
  constructor(middleware) {
    this.middleware = middleware;
  }
  pre(context) {
    return (0, rxjsStub_1.from)(this.middleware.pre(context));
  }
  post(context) {
    return (0, rxjsStub_1.from)(this.middleware.post(context));
  }
}
exports.PromiseMiddlewareWrapper = PromiseMiddlewareWrapper;
