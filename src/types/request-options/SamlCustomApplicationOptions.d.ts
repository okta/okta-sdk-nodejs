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


declare interface SamlCustomApplicationOptions {
  accessibility?: {
    selfService?: boolean;
    errorRedirectUrl?: string;
    loginRedirectUrl?: string;
  };
  features: string[];
  label: string;
  name?: null;
  signOnMode: string; /* 'SAML_2_0' */
  settings: {
    app?: Record<string, unknown>;
    signOn: {
      assertionSigned: boolean;
      attributeStatements?: {
        type: string;
        name: string;
        namespace: string;
        values: string[];
      }[];
      audience: string;
      authnContextClassRef: string;
      defaultRelayState?: string;
      destination: string;
      digestAlgorithm: string;
      honorForceAuthn: boolean;
      idpIssuer: string;
      recipient: string;
      requestCompressed: boolean;
      responseSigned: boolean;
      signatureAlgorithm: string;
      spIssuer?: string;
      ssoAcsUrl: string;
      subjectNameIdFormat: string;
      subjectNameIdTemplate: string;
    };
  };
  visibility: {
    autoSubmitToolbar: boolean;
    hide: {
      iOS: boolean;
      web: boolean;
    };
  };
}

export {
  SamlCustomApplicationOptions
};
