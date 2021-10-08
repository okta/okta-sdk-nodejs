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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ProtocolEndpoint = require('./ProtocolEndpoint');

/**
 * @class ProtocolEndpoints
 * @extends Resource
 * @property { ProtocolEndpoint } acs
 * @property { ProtocolEndpoint } authorization
 * @property { ProtocolEndpoint } jwks
 * @property { ProtocolEndpoint } metadata
 * @property { ProtocolEndpoint } slo
 * @property { ProtocolEndpoint } sso
 * @property { ProtocolEndpoint } token
 * @property { ProtocolEndpoint } userInfo
 */
class ProtocolEndpoints extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'acs')) {
      this.acs = new ProtocolEndpoint(resourceJson.acs);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'authorization')) {
      this.authorization = new ProtocolEndpoint(resourceJson.authorization);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'jwks')) {
      this.jwks = new ProtocolEndpoint(resourceJson.jwks);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'metadata')) {
      this.metadata = new ProtocolEndpoint(resourceJson.metadata);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'slo')) {
      this.slo = new ProtocolEndpoint(resourceJson.slo);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'sso')) {
      this.sso = new ProtocolEndpoint(resourceJson.sso);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'token')) {
      this.token = new ProtocolEndpoint(resourceJson.token);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'userInfo')) {
      this.userInfo = new ProtocolEndpoint(resourceJson.userInfo);
    }
  }

}

module.exports = ProtocolEndpoints;
