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


function OktaResponseHeaders(responseHeadersMap) {
  return Object.entries(responseHeadersMap)
  .reduce((acc, arr) => {
    const key = arr[0];
    const value = arr[1][0];
    switch (key) {
      case 'x-okta-request-id':
        acc[key] = value;
        break;
      case 'x-rate-limit-limit':
        acc[key] = parseInt(value, 10);
        break;
      case 'x-rate-limit-remaining':
        acc[key] = parseInt(value, 10);
        break;
      case 'x-rate-limit-reset':
        acc[key] = parseInt(value, 10);
        break;
    }
    return acc;
  }, {});
}

module.exports = OktaResponseHeaders;
