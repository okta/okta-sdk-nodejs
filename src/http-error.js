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


var util = require('util');

/**
 * Coerce a generic HTTP error into an Error object that is easy to grok.
 *
 * @param {String} url The API url that was requested when the error occurred
 * @param {Number|String} status The HTTP status code of the response
 * @param {String} responseBody The text of the response body
 */
function HttpError(url, status, responseBody, headers) {
  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.status = status;
  this.url = url;
  this.headers = headers;
  this.stack = '';
  this.message = `HTTP ${this.status} ${responseBody}`;
}

util.inherits(HttpError, Error);

module.exports = HttpError;
