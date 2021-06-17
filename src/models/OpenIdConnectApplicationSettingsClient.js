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
const OAuthGrantType = require('./OAuthGrantType');
const OpenIdConnectApplicationIdpInitiatedLogin = require('./OpenIdConnectApplicationIdpInitiatedLogin');
const OpenIdConnectApplicationSettingsClientKeys = require('./OpenIdConnectApplicationSettingsClientKeys');
const OpenIdConnectApplicationSettingsRefreshToken = require('./OpenIdConnectApplicationSettingsRefreshToken');
const OAuthResponseType = require('./OAuthResponseType');

/**
 * @class OpenIdConnectApplicationSettingsClient
 * @extends Resource
 * @property { OpenIdConnectApplicationType } application_type
 * @property { string } client_uri
 * @property { OpenIdConnectApplicationConsentMethod } consent_method
 * @property { array } grant_types
 * @property { OpenIdConnectApplicationIdpInitiatedLogin } idp_initiated_login
 * @property { string } initiate_login_uri
 * @property { OpenIdConnectApplicationIssuerMode } issuer_mode
 * @property { OpenIdConnectApplicationSettingsClientKeys } jwks
 * @property { string } logo_uri
 * @property { string } policy_uri
 * @property { array } post_logout_redirect_uris
 * @property { array } redirect_uris
 * @property { OpenIdConnectApplicationSettingsRefreshToken } refresh_token
 * @property { array } response_types
 * @property { string } tos_uri
 */
class OpenIdConnectApplicationSettingsClient extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.grant_types) {
      this.grant_types = resourceJson.grant_types.map(resourceItem => new OAuthGrantType(resourceItem));
    }
    if (resourceJson && resourceJson.idp_initiated_login) {
      this.idp_initiated_login = new OpenIdConnectApplicationIdpInitiatedLogin(resourceJson.idp_initiated_login);
    }
    if (resourceJson && resourceJson.jwks) {
      this.jwks = new OpenIdConnectApplicationSettingsClientKeys(resourceJson.jwks);
    }
    if (resourceJson && resourceJson.refresh_token) {
      this.refresh_token = new OpenIdConnectApplicationSettingsRefreshToken(resourceJson.refresh_token);
    }
    if (resourceJson && resourceJson.response_types) {
      this.response_types = resourceJson.response_types.map(resourceItem => new OAuthResponseType(resourceItem));
    }
  }

}

module.exports = OpenIdConnectApplicationSettingsClient;
