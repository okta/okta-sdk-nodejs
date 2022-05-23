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
exports.RequiredError = exports.BaseAPIRequestFactory = exports.COLLECTION_FORMATS = void 0;
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPIRequestFactory {
  constructor(configuration) {
    this.configuration = configuration;
  }
}
exports.BaseAPIRequestFactory = BaseAPIRequestFactory;

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
  constructor(api, method, field) {
    super('Required parameter ' + field + ' was null or undefined when calling ' + api + '.' + method + '.');
    this.api = api;
    this.method = method;
    this.field = field;
    this.name = 'RequiredError';
  }
}
exports.RequiredError = RequiredError;
