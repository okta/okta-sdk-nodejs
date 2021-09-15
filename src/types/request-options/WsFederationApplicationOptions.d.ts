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


declare interface WsFederationApplicationOptions {
  label: string;
  name: string; /* 'template_wsfed' */
  credentials?: {
    oauthClient?: {
      autoKeyRotation?: boolean;
      client_id?: string;
      client_secret?: string;
      token_endpoint_auth_method?: string;
    };
  };
  signOnMode: string; /* 'WS_FEDERATION' */
  settings: {
    app: {
      attributeStatements?: null;
      audienceRestriction: string;
      authnContextClassRef?: string;
      groupName?: string;
      groupValueFormat: string;
      groupFilter?: string;
      nameIDFormat: string;
      realm?: string;
      siteURL: string;
      usernameAttribute: string;
      wReplyOverride?: boolean;
      wReplyURL?: string;
    }
  }
}

export {
  WsFederationApplicationOptions
};
