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
const ProtocolAlgorithms = require('./ProtocolAlgorithms');
const IdentityProviderCredentials = require('./IdentityProviderCredentials');
const ProtocolEndpoints = require('./ProtocolEndpoints');
const ProtocolEndpoint = require('./ProtocolEndpoint');
const ProtocolRelayState = require('./ProtocolRelayState');
const ProtocolSettings = require('./ProtocolSettings');

/**
 * @class Protocol
 * @extends Resource
 * @property { ProtocolAlgorithms } algorithms
 * @property { IdentityProviderCredentials } credentials
 * @property { ProtocolEndpoints } endpoints
 * @property { ProtocolEndpoint } issuer
 * @property { ProtocolRelayState } relayState
 * @property { array } scopes
 * @property { ProtocolSettings } settings
 * @property { string } type
 */
class Protocol extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.algorithms) {
      this.algorithms = new ProtocolAlgorithms(resourceJson.algorithms);
    }
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new IdentityProviderCredentials(resourceJson.credentials);
    }
    if (resourceJson && resourceJson.endpoints) {
      this.endpoints = new ProtocolEndpoints(resourceJson.endpoints);
    }
    if (resourceJson && resourceJson.issuer) {
      this.issuer = new ProtocolEndpoint(resourceJson.issuer);
    }
    if (resourceJson && resourceJson.relayState) {
      this.relayState = new ProtocolRelayState(resourceJson.relayState);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new ProtocolSettings(resourceJson.settings);
    }
  }

}

module.exports = Protocol;
