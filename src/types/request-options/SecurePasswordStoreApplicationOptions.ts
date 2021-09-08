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


declare interface SecurePasswordStoreApplicationOptions {
  label: string;
  name: string; /* 'template_sps' */
  signOnMode: string; /* 'SECURE_PASSWORD_STORE' */
  settings: {
    app: {
      url: string;
      passwordField: string;
      usernameField: string;
      optionalField1?: string;
      optionalField1Value?: string;
      optionalField2?: string;
      optionalField2Value?: string;
      optionalField3?: string;
      optionalField3Value?: string;
    };
  };
}

export {
  SecurePasswordStoreApplicationOptions
};

