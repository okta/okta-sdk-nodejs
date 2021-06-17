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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

import { Resource } from '../resource';
import { Client } from '../client';
import { OptionalKnownProperties } from '../optional-known-properties-type';
import { Collection } from '../collection';
import { Csr } from './Csr';
import { CsrMetadataOptions } from './CsrMetadata';
import { Response } from 'node-fetch';
import { JsonWebKey } from './JsonWebKey';
import { IdentityProviderApplicationUser } from './IdentityProviderApplicationUser';
import { UserIdentityProviderLinkRequestOptions } from './UserIdentityProviderLinkRequest';
import { SocialAuthToken } from './SocialAuthToken';
import { IdentityProviderPolicy } from './IdentityProviderPolicy';
import { Protocol } from './Protocol';

declare class IdentityProvider extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _links: {[name: string]: unknown};
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
  delete(): Promise<Response>;
  listSigningCsrs(): Collection<Csr>;
  generateCsr(csrMetadata: CsrMetadataOptions): Promise<Csr>;
  deleteSigningCsr(csrId: string): Promise<Response>;
  getSigningCsr(csrId: string): Promise<Csr>;
  listSigningKeys(): Collection<JsonWebKey>;
  generateSigningKey(queryParameters: {
    validityYears: number,
  }): Promise<JsonWebKey>;
  getSigningKey(keyId: string): Promise<JsonWebKey>;
  cloneKey(keyId: string, queryParameters: {
    targetIdpId: string,
  }): Promise<JsonWebKey>;
  activate(): Promise<IdentityProvider>;
  deactivate(): Promise<IdentityProvider>;
  listUsers(): Collection<IdentityProviderApplicationUser>;
  unlinkUser(userId: string): Promise<Response>;
  getUser(userId: string): Promise<IdentityProviderApplicationUser>;
  linkUser(userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequestOptions): Promise<IdentityProviderApplicationUser>;
  listSocialAuthTokens(userId: string): Collection<SocialAuthToken>;
}

type IdentityProviderOptions = OptionalKnownProperties<IdentityProvider>;

export {
  IdentityProvider,
  IdentityProviderOptions
};
