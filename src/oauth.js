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


const { makeJwt } = require('./jwt');
const Http = require('./http');

function formatParams(obj) {
  var str = [];
  if (obj !== null) {
    for (var key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key) &&
          obj[key] !== undefined &&
          obj[key] !== null) {
        str.push(key + '=' + encodeURIComponent(obj[key]));
      }
    }
  }
  if (str.length) {
    return str.join('&');
  } else {
    return '';
  }
}

class OAuth {
  constructor(client) {
    this.client = client;
    this.accessToken = null;
  }

  getAccessToken() {
    if (this.accessToken) {
      return Promise.resolve(this.accessToken);
    }

    const endpoint = '/oauth2/v1/token';
    return this.getJwt(endpoint)
      .then(jwt => {
        const params = formatParams({
          grant_type: 'client_credentials',
          scope: this.client.scopes.join(' '),
          client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
          client_assertion: jwt
        });
        return this.client.requestExecutor.fetch({
          url: `${this.client.baseUrl}${endpoint}`,
          method: 'POST',
          body: params,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
      })
      .then(Http.errorFilter)
      .then(res => res.json())
      .then(accessToken => {
        this.accessToken = accessToken;
        return this.accessToken;
      });
  }

  clearCachedAccessToken() {
    this.accessToken = null;
  }

  getJwt(endpoint) {
    return makeJwt(this.client, endpoint)
      .then(jwt => jwt.compact());
  }
}

module.exports.OAuth = OAuth;
