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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class OpenIdConnectApplicationSettingsClient
 * @extends Resource
 * @property { OpenIdConnectApplicationType } application_type
 * @property { string } client_uri
 * @property { OpenIdConnectApplicationConsentMethod } consent_method
 * @property { array } grant_types
 * @property { string } logo_uri
 * @property { string } policy_uri
 * @property { array } redirect_uris
 * @property { array } response_types
 * @property { string } tos_uri
 */
class OpenIdConnectApplicationSettingsClient extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = OpenIdConnectApplicationSettingsClient;
