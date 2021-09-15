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


declare interface AutoLoginApplicationOptions {
  accessibility?: {
    selfService?: boolean;
    errorRedirectUrl?: string;
    loginRedirectUrl?: string;
  };
  credentials?: {
    scheme?: string; /* 'EXTERNAL_PASSWORD_SYNC' */
    userNameTemplate?: {
      template: string;
      type: string;
    };
    revealPassword?: false;
    signing?: Record<string, unknown>;
  };
  features?: string[];
  label: string;
  name?: null;
  settings: {
    app?: Record<string, unknown>;
    notifications?: {
      vpn?: {
        network?: {
          connection?: string;
        };
        message?: string;
        helpUrl?: string;
      };
    };
    signOn: {
      redirectUrl?: string;
      loginUrl: string;
    };
  };
  signOnMode: string; /* 'AUTO_LOGIN' */
  visibility: {
    autoSubmitToolbar?: boolean;
    hide?: {
      iOS?: boolean;
      web?: boolean;
    };
  };
}

export {
  AutoLoginApplicationOptions
};
