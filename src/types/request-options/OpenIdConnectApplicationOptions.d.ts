/*!
 * Copyright (c) 2017-present; Okta; Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License; Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing; software
 * distributed under the License is distributed on an "AS IS" BASIS; WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND; either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


declare interface OpenIdConnectApplicationOptions {
  label: string;
  name: string; /* 'oidc_client' */
  credentials?: {
    oauthClient?: {
      autoKeyRotation?: boolean;
      client_id?: string;
      client_secret?: string;
      token_endpoint_auth_method?: string;
    };
  };
  signOnMode: string; /* "OPENID_CONNECT" */
  settings: {
    app?: Record<string, unknown>;
    oauthClient: {
      application_type?: string;
      client_uri?: string;
      consent_method?: string;
      grant_types: string[];
      initiate_login_uri?: string;
      issuer_mode?: string;
      idp_initiated_login?: {
        default_scope?: string[];
        mode?: string;
      };
      logo_uri?: string;
      policy_uri?: string;
      post_logout_redirect_uris?: string[];
      redirect_uris?: string[];
      response_types?: string[];
      refresh_token?: {
        leeway?: number;
        rotation_type?: string;
      };

      tos_uri?:	string;
      wildcard_redirect?: string;
    };
  };
}

export {
  OpenIdConnectApplicationOptions
};
