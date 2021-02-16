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
import LogAuthenticationProvider from './LogAuthenticationProvider';
import LogCredentialProvider from './LogCredentialProvider';
import LogCredentialType from './LogCredentialType';
import LogIssuer from './LogIssuer';

declare class LogAuthenticationContext extends Resource {
  constructor(resourceJson: string, client: any);

  authenticationProvider: LogAuthenticationProvider;
  authenticationStep: number;
  credentialProvider: LogCredentialProvider;
  credentialType: LogCredentialType;
  externalSessionId: string;
  interface: string;
  issuer: LogIssuer;

}

export default LogAuthenticationContext;
