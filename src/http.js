/*!
 * Copyright (c) 2017, Okta, Inc. and/or its affiliates. All rights reserved.
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

/**
 * It's like fetch :) plus some extra convenience methods.
 *
 * @class Http
 */
class Http {
  constructor() {
    this.defaultHeaders = {};
  }

  errorFilter(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      return response.text()
      .then((body) => {
        let err;

        // If the response is JSON, assume it's an Okta API error. Otherwise, assume it's some other HTTP error

        try {
          err = new OktaApiError(response.url, response.status, JSON.parse(body));
        } catch (e) {
          err = new HttpError(response.url, response.status, body);
        }
        throw err;
      });
    }
  }

  http(uri, request) {
    request = request || {};
    request.headers = Object.assign(this.defaultHeaders, request.headers);
    return fetch(uri, request)
    .then(this.errorFilter);
  }

  delete(uri, request) {
    return this.http(uri, Object.assign(request || {}, { method: 'delete' }));
  }

  json(uri, request) {
    request = request || {};
    request.headers = Object.assign({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }, request.headers);
    return this.http(uri, request)
    .then(res => res.json());
  }

  getJson(uri, request) {
    request = request || {};
    request.method = 'get';
    return this.json(uri, request);
  }

  post(uri, request) {
    request = request || {};
    request.method = 'post';
    return this.http(uri, request);
  }

  postJson(uri, request) {
    request = request || {};
    request.method = 'post',
    request.body = JSON.stringify(request.body);
    return this.json(uri, request);
  }

  putJson(uri, request) {
    request = request || {};
    request.method = 'put';
    request.body = JSON.stringify(request.body);
    return this.json(uri, request);
  }

  put(uri, request) {
    request = request || {};
    request.method = 'put';
    return this.http(uri, request);
  }
}

module.exports = Http;
