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
import { OAuth2Claim } from './OAuth2Claim';
import { OAuth2ClaimOptions } from './OAuth2Claim';
import { Response } from 'node-fetch';
import { OAuth2Client } from './OAuth2Client';
import { OAuth2RefreshToken } from './OAuth2RefreshToken';
import { JsonWebKey } from './JsonWebKey';
import { JwkUseOptions } from './JwkUse';
import { AuthorizationServerPolicy } from './AuthorizationServerPolicy';
import { AuthorizationServerPolicyOptions } from './AuthorizationServerPolicy';
import { OAuth2Scope } from './OAuth2Scope';
import { OAuth2ScopeOptions } from './OAuth2Scope';
import { AuthorizationServerCredentials } from './AuthorizationServerCredentials';

declare class AuthorizationServer extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _links: {[name: string]: unknown};
  audiences: string[];
  readonly created: string;
  credentials: AuthorizationServerCredentials;
  description: string;
  readonly id: string;
  issuer: string;
  issuerMode: string;
  readonly lastUpdated: string;
  name: string;
  status: string;

  update(): Promise<AuthorizationServer>;
  delete(): Promise<Response>;
  listOAuth2Claims(): Collection<OAuth2Claim>;
  createOAuth2Claim(oAuth2Claim: OAuth2ClaimOptions): Promise<OAuth2Claim>;
  deleteOAuth2Claim(claimId: string): Promise<Response>;
  getOAuth2Claim(claimId: string): Promise<OAuth2Claim>;
  updateOAuth2Claim(claimId: string, oAuth2Claim: OAuth2ClaimOptions): Promise<OAuth2Claim>;
  listOAuth2Clients(): Collection<OAuth2Client>;
  revokeRefreshTokensForClient(clientId: string): Promise<Response>;
  listRefreshTokensForClient(clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2RefreshToken>;
  getRefreshTokenForClient(clientId: string, tokenId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2RefreshToken>;
  revokeRefreshTokenForClient(clientId: string, tokenId: string): Promise<Response>;
  listKeys(): Collection<JsonWebKey>;
  rotateKeys(jwkUse: JwkUseOptions): Collection<JsonWebKey>;
  activate(): Promise<Response>;
  deactivate(): Promise<Response>;
  listPolicies(): Collection<AuthorizationServerPolicy>;
  createPolicy(authorizationServerPolicy: AuthorizationServerPolicyOptions): Promise<AuthorizationServerPolicy>;
  deletePolicy(policyId: string): Promise<Response>;
  getPolicy(policyId: string): Promise<AuthorizationServerPolicy>;
  updatePolicy(policyId: string, authorizationServerPolicy: AuthorizationServerPolicyOptions): Promise<AuthorizationServerPolicy>;
  listOAuth2Scopes(queryParameters?: {
    q?: string,
    filter?: string,
    cursor?: string,
    limit?: number,
  }): Collection<OAuth2Scope>;
  createOAuth2Scope(oAuth2Scope: OAuth2ScopeOptions): Promise<OAuth2Scope>;
  deleteOAuth2Scope(scopeId: string): Promise<Response>;
  getOAuth2Scope(scopeId: string): Promise<OAuth2Scope>;
  updateOAuth2Scope(scopeId: string, oAuth2Scope: OAuth2ScopeOptions): Promise<OAuth2Scope>;
}

type AuthorizationServerOptions = OptionalKnownProperties<AuthorizationServer>;

export {
  AuthorizationServer,
  AuthorizationServerOptions
};
