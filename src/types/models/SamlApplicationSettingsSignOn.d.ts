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
import Client from '../client';


declare class SamlApplicationSettingsSignOn extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  acsEndpoints: [];
  allowMultipleAcsEndpoints: boolean;
  assertionSigned: boolean;
  attributeStatements: [];
  audience: string;
  audienceOverride: string;
  authnContextClassRef: string;
  defaultRelayState: string;
  destination: string;
  destinationOverride: string;
  digestAlgorithm: string;
  honorForceAuthn: boolean;
  idpIssuer: string;
  recipient: string;
  recipientOverride: string;
  requestCompressed: boolean;
  responseSigned: boolean;
  signatureAlgorithm: string;
  spIssuer: string;
  ssoAcsUrl: string;
  ssoAcsUrlOverride: string;
  subjectNameIdFormat: string;
  subjectNameIdTemplate: string;

}


export default SamlApplicationSettingsSignOn;
