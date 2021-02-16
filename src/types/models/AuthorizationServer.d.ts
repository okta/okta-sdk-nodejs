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
import OAuth2Claim from './OAuth2Claim';
import OAuth2RefreshToken from './OAuth2RefreshToken';
import JwkUse from './JwkUse';
import AuthorizationServerPolicy from './AuthorizationServerPolicy';
import OAuth2Scope from './OAuth2Scope';
import AuthorizationServerCredentials from './AuthorizationServerCredentials';

declare class AuthorizationServer extends Resource {
  constructor(resourceJson: string, client: any);

  _links: {
    [name: string]: unknown;
  };
  audiences: [];
  created: string;
  credentials: AuthorizationServerCredentials;
  description: string;
  id: string;
  issuer: string;
  issuerMode: string;
  lastUpdated: string;
  name: string;
  status: string;

  update(): Promise<AuthorizationServer>;
  delete(): Promise<undefined>;
  listOAuth2Claims(): Promise<Collection>;
  createOAuth2Claim(oAuth2Claim: OAuth2Claim): Promise<OAuth2Claim>;
  deleteOAuth2Claim(claimId: string): Promise<undefined>;
  getOAuth2Claim(claimId: string): Promise<OAuth2Claim>;
  updateOAuth2Claim(claimId: string, oAuth2Claim: OAuth2Claim): Promise<OAuth2Claim>;
  listOAuth2Clients(): Promise<Collection>;
  revokeRefreshTokensForClient(clientId: string): Promise<undefined>;
  listRefreshTokensForClient(clientId: string, queryParameters: { 
    expand: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  getRefreshTokenForClient(clientId: string, tokenId: string, queryParameters: { 
    expand: string,
  }): Promise<OAuth2RefreshToken>;
  revokeRefreshTokenForClient(clientId: string, tokenId: string): Promise<undefined>;
  listKeys(): Promise<Collection>;
  rotateKeys(jwkUse: JwkUse): Promise<Collection>;
  activate(): Promise<undefined>;
  deactivate(): Promise<undefined>;
  listPolicies(): Promise<Collection>;
  createPolicy(authorizationServerPolicy: AuthorizationServerPolicy): Promise<AuthorizationServerPolicy>;
  deletePolicy(policyId: string): Promise<undefined>;
  getPolicy(policyId: string): Promise<AuthorizationServerPolicy>;
  updatePolicy(policyId: string, authorizationServerPolicy: AuthorizationServerPolicy): Promise<AuthorizationServerPolicy>;
  listOAuth2Scopes(queryParameters: { 
    q: string,
    filter: string,
    cursor: string,
    limit: string,
  }): Promise<Collection>;
  createOAuth2Scope(oAuth2Scope: OAuth2Scope): Promise<OAuth2Scope>;
  deleteOAuth2Scope(scopeId: string): Promise<undefined>;
  getOAuth2Scope(scopeId: string): Promise<OAuth2Scope>;
  updateOAuth2Scope(scopeId: string, oAuth2Scope: OAuth2Scope): Promise<OAuth2Scope>;
}

export default AuthorizationServer;
