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


/**
 * @class ProvisioningConnection
 * @extends Resource
 * @property { hash } _links
 * @property { ProvisioningConnectionAuthScheme } authScheme
 * @property { ProvisioningConnectionStatus } status
 */
class ProvisioningConnection extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }


  /**
   * @param {string} appId
   * @returns {Promise<ProvisioningConnection>}
   */
  getDefaultProvisioningConnectionForApplication(appId) {
    return this.httpClient.getDefaultProvisioningConnectionForApplication(appId);
  }

  /**
   * @param {string} appId
   */
  activateDefaultProvisioningConnectionForApplication(appId) {
    return this.httpClient.activateDefaultProvisioningConnectionForApplication(appId);
  }

  /**
   * @param {string} appId
   */
  deactivateDefaultProvisioningConnectionForApplication(appId) {
    return this.httpClient.deactivateDefaultProvisioningConnectionForApplication(appId);
  }
}

module.exports = ProvisioningConnection;
