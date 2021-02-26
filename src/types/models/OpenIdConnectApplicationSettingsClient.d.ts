/*!
 * Copyright (c) 2017-2021, Okta, Inc. and/or its affiliates. All rights reserved.
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

import Resource from '../resource';
import OpenIdConnectApplicationType from './OpenIdConnectApplicationType';
import OpenIdConnectApplicationConsentMethod from './OpenIdConnectApplicationConsentMethod';
import OpenIdConnectApplicationIssuerMode from './OpenIdConnectApplicationIssuerMode';
import OpenIdConnectApplicationSettingsClientKeys from './OpenIdConnectApplicationSettingsClientKeys';
import OpenIdConnectApplicationSettingsRefreshToken from './OpenIdConnectApplicationSettingsRefreshToken';

declare class OpenIdConnectApplicationSettingsClient extends Resource {
  constructor(resourceJson: string, client: any);

  application_type: OpenIdConnectApplicationType;
  client_uri: string;
  consent_method: OpenIdConnectApplicationConsentMethod;
  grant_types: [];
  initiate_login_uri: string;
  issuer_mode: OpenIdConnectApplicationIssuerMode;
  jwks: OpenIdConnectApplicationSettingsClientKeys;
  logo_uri: string;
  policy_uri: string;
  post_logout_redirect_uris: [];
  redirect_uris: [];
  refresh_token: OpenIdConnectApplicationSettingsRefreshToken;
  response_types: [];
  tos_uri: string;

}

export {
  OpenIdConnectApplicationSettingsClient
};
export default OpenIdConnectApplicationSettingsClient;
