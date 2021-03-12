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
import Collection from '../collection';
import CsrMetadata from './CsrMetadata';
import Csr from './Csr';
import JsonWebKey from './JsonWebKey';
import IdentityProviderApplicationUser from './IdentityProviderApplicationUser';
import UserIdentityProviderLinkRequest from './UserIdentityProviderLinkRequest';
import IdentityProviderPolicy from './IdentityProviderPolicy';
import Protocol from './Protocol';

declare class IdentityProvider extends Resource {
  constructor(resourceJson: string, client: any);

  readonly _links: {
    [name: string]: unknown;
  };
  readonly created: string;
  readonly id: string;
  issuerMode: string;
  readonly lastUpdated: string;
  name: string;
  policy: IdentityProviderPolicy;
  protocol: Protocol;
  status: string;
  type: string;

  update(): Promise<IdentityProvider>;
  delete(): Promise<undefined>;
  listSigningCsrs(): Collection;
  generateCsr(csrMetadata: CsrMetadata): Promise<Csr>;
  deleteSigningCsr(csrId: string): Promise<undefined>;
  getSigningCsr(csrId: string): Promise<Csr>;
  listSigningKeys(): Collection;
  generateSigningKey(queryParameters?: { 
    validityYears: string,
  }): Promise<JsonWebKey>;
  getSigningKey(keyId: string): Promise<JsonWebKey>;
  cloneKey(keyId: string, queryParameters?: { 
    targetIdpId: string,
  }): Promise<JsonWebKey>;
  activate(): Promise<IdentityProvider>;
  deactivate(): Promise<IdentityProvider>;
  listUsers(): Collection;
  unlinkUser(userId: string): Promise<undefined>;
  getUser(userId: string): Promise<IdentityProviderApplicationUser>;
  linkUser(userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest): Promise<IdentityProviderApplicationUser>;
  listSocialAuthTokens(userId: string): Collection;
}


export default IdentityProvider;
