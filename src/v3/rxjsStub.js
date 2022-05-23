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
exports.map = exports.mergeMap = exports.of = exports.from = exports.Observable = void 0;
class Observable {
  constructor(promise) {
    this.promise = promise;
  }
  toPromise() {
    return this.promise;
  }
  pipe(callback) {
    return new Observable(this.promise.then(callback));
  }
}
exports.Observable = Observable;
function from(promise) {
  return new Observable(promise);
}
exports.from = from;
function of(value) {
  return new Observable(Promise.resolve(value));
}
exports.of = of;
function mergeMap(callback) {
  return (value) => callback(value).toPromise();
}
exports.mergeMap = mergeMap;
function map(callback) {
  return callback;
}
exports.map = map;
