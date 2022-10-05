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
/**
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.OpenIdConnectApplicationSettingsClient = void 0;
class OpenIdConnectApplicationSettingsClient {
  constructor() {
  }
  static getAttributeTypeMap() {
    return OpenIdConnectApplicationSettingsClient.attributeTypeMap;
  }
}
exports.OpenIdConnectApplicationSettingsClient = OpenIdConnectApplicationSettingsClient;
OpenIdConnectApplicationSettingsClient.discriminator = undefined;
OpenIdConnectApplicationSettingsClient.attributeTypeMap = [
  {
    'name': 'application_type',
    'baseName': 'application_type',
    'type': 'OpenIdConnectApplicationType',
    'format': ''
  },
  {
    'name': 'client_uri',
    'baseName': 'client_uri',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'consent_method',
    'baseName': 'consent_method',
    'type': 'OpenIdConnectApplicationConsentMethod',
    'format': ''
  },
  {
    'name': 'grant_types',
    'baseName': 'grant_types',
    'type': 'Array<OAuthGrantType>',
    'format': ''
  },
  {
    'name': 'idp_initiated_login',
    'baseName': 'idp_initiated_login',
    'type': 'OpenIdConnectApplicationIdpInitiatedLogin',
    'format': ''
  },
  {
    'name': 'initiate_login_uri',
    'baseName': 'initiate_login_uri',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'issuer_mode',
    'baseName': 'issuer_mode',
    'type': 'OpenIdConnectApplicationIssuerMode',
    'format': ''
  },
  {
    'name': 'jwks',
    'baseName': 'jwks',
    'type': 'OpenIdConnectApplicationSettingsClientKeys',
    'format': ''
  },
  {
    'name': 'logo_uri',
    'baseName': 'logo_uri',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'policy_uri',
    'baseName': 'policy_uri',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'post_logout_redirect_uris',
    'baseName': 'post_logout_redirect_uris',
    'type': 'Array<string>',
    'format': ''
  },
  {
    'name': 'redirect_uris',
    'baseName': 'redirect_uris',
    'type': 'Array<string>',
    'format': ''
  },
  {
    'name': 'refresh_token',
    'baseName': 'refresh_token',
    'type': 'OpenIdConnectApplicationSettingsRefreshToken',
    'format': ''
  },
  {
    'name': 'response_types',
    'baseName': 'response_types',
    'type': 'Array<OAuthResponseType>',
    'format': ''
  },
  {
    'name': 'tos_uri',
    'baseName': 'tos_uri',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'wildcard_redirect',
    'baseName': 'wildcard_redirect',
    'type': 'string',
    'format': ''
  }
];