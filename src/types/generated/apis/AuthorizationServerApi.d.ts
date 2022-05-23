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


import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AuthorizationServer } from '../models/AuthorizationServer';
import { AuthorizationServerPolicy } from '../models/AuthorizationServerPolicy';
import { AuthorizationServerPolicyRule } from '../models/AuthorizationServerPolicyRule';
import { JsonWebKey } from '../models/JsonWebKey';
import { JwkUse } from '../models/JwkUse';
import { OAuth2Claim } from '../models/OAuth2Claim';
import { OAuth2Client } from '../models/OAuth2Client';
import { OAuth2RefreshToken } from '../models/OAuth2RefreshToken';
import { OAuth2Scope } from '../models/OAuth2Scope';
/**
 * no description
 */
export declare class AuthorizationServerApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Success
     * Activate Authorization Server
     * @param authServerId
     */
  activateAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activate Authorization Server Policy
     * Activate Authorization Server Policy
     * @param authServerId
     * @param policyId
     */
  activateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activate Authorization Server Policy Rule
     * Activate Authorization Server Policy Rule
     * @param authServerId
     * @param policyId
     * @param ruleId
     */
  activateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Create Authorization Server
     * @param authorizationServer
     */
  createAuthorizationServer(authorizationServer: AuthorizationServer, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Create Authorization Server Policy
     * @param authServerId
     * @param policy
     */
  createAuthorizationServerPolicy(authServerId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a policy rule for the specified Custom Authorization Server and Policy.
     * Create Authorization Server Policy Rule
     * @param policyId
     * @param authServerId
     * @param policyRule
     */
  createAuthorizationServerPolicyRule(policyId: string, authServerId: string, policyRule: AuthorizationServerPolicyRule, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Create Custom OAuth 2.0 Token Claim
     * @param authServerId
     * @param oAuth2Claim
     */
  createOAuth2Claim(authServerId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Create Oauth2scope
     * @param authServerId
     * @param oAuth2Scope
     */
  createOAuth2Scope(authServerId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Deactivate Authorization Server
     * @param authServerId
     */
  deactivateAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivate Authorization Server Policy
     * Deactivate Authorization Server Policy
     * @param authServerId
     * @param policyId
     */
  deactivateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivate Authorization Server Policy Rule
     * Deactivate Authorization Server Policy Rule
     * @param authServerId
     * @param policyId
     * @param ruleId
     */
  deactivateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Delete Authorization Server
     * @param authServerId
     */
  deleteAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Delete Authorization Server Policy
     * @param authServerId
     * @param policyId
     */
  deleteAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.
     * Delete Authorization Server Policy Rule
     * @param policyId
     * @param authServerId
     * @param ruleId
     */
  deleteAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Delete Custom OAuth 2.0 Token Claim
     * @param authServerId
     * @param claimId
     */
  deleteOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Delete Oauth2scope
     * @param authServerId
     * @param scopeId
     */
  deleteOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Get Authorization Server
     * @param authServerId
     */
  getAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Get Authorization Server Policy
     * @param authServerId
     * @param policyId
     */
  getAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.
     * Get Authorization Server Policy Rule
     * @param policyId
     * @param authServerId
     * @param ruleId
     */
  getAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Get Oauth2claim
     * @param authServerId
     * @param claimId
     */
  getOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Get Oauth2scope
     * @param authServerId
     * @param scopeId
     */
  getOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Get Refresh Token for Authorization Server and Client
     * @param authServerId
     * @param clientId
     * @param tokenId
     * @param expand
     */
  getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List Authorization Server Keys
     * @param authServerId
     */
  listAuthorizationServerKeys(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List Authorization Server Policies
     * @param authServerId
     */
  listAuthorizationServerPolicies(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
     * List Authorization Server Policy Rules
     * @param policyId
     * @param authServerId
     */
  listAuthorizationServerPolicyRules(policyId: string, authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List Authorization Servers
     * @param q
     * @param limit
     * @param after
     */
  listAuthorizationServers(q?: string, limit?: string, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List Custom OAuth 2.0 Token Claims
     * @param authServerId
     */
  listOAuth2Claims(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List Oauth2clients for Authorization Server
     * @param authServerId
     */
  listOAuth2ClientsForAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List Oauth2scopes
     * @param authServerId
     * @param q
     * @param filter
     * @param cursor
     * @param limit
     */
  listOAuth2Scopes(authServerId: string, q?: string, filter?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List Refresh Tokens for Authorization Server and Client
     * @param authServerId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
  listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Revoke Refresh Token for Authorization Server and Client
     * @param authServerId
     * @param clientId
     * @param tokenId
     */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Revoke Refresh Tokens for Authorization Server and Client
     * @param authServerId
     * @param clientId
     */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Rotate Authorization Server Keys
     * @param authServerId
     * @param use
     */
  rotateAuthorizationServerKeys(authServerId: string, use: JwkUse, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Update Authorization Server
     * @param authServerId
     * @param authorizationServer
     */
  updateAuthorizationServer(authServerId: string, authorizationServer: AuthorizationServer, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Update Authorization Server Policy
     * @param authServerId
     * @param policyId
     * @param policy
     */
  updateAuthorizationServerPolicy(authServerId: string, policyId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
     * Update Authorization Server Policy Rule
     * @param policyId
     * @param authServerId
     * @param ruleId
     * @param policyRule
     */
  updateAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, policyRule: AuthorizationServerPolicyRule, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Update Custom OAuth 2.0 Token Claim
     * @param authServerId
     * @param claimId
     * @param oAuth2Claim
     */
  updateOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Update Oauth2scope
     * @param authServerId
     * @param scopeId
     * @param oAuth2Scope
     */
  updateOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthorizationServerApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateAuthorizationServer(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateAuthorizationServerPolicy(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateAuthorizationServerPolicyRule(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAuthorizationServer(response: ResponseContext): Promise<AuthorizationServer | void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAuthorizationServerPolicy(response: ResponseContext): Promise<void | AuthorizationServerPolicy>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAuthorizationServerPolicyRule(response: ResponseContext): Promise<AuthorizationServerPolicyRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuth2Claim
     * @throws ApiException if the response code was not in [200, 299]
     */
  createOAuth2Claim(response: ResponseContext): Promise<void | OAuth2Claim>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  createOAuth2Scope(response: ResponseContext): Promise<void | OAuth2Scope>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateAuthorizationServer(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateAuthorizationServerPolicy(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateAuthorizationServerPolicyRule(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAuthorizationServer(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAuthorizationServerPolicy(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAuthorizationServerPolicyRule(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOAuth2Claim
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteOAuth2Claim(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteOAuth2Scope(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAuthorizationServer(response: ResponseContext): Promise<AuthorizationServer>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAuthorizationServerPolicy(response: ResponseContext): Promise<AuthorizationServerPolicy>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAuthorizationServerPolicyRule(response: ResponseContext): Promise<AuthorizationServerPolicyRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2Claim
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOAuth2Claim(response: ResponseContext): Promise<OAuth2Claim>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOAuth2Scope(response: ResponseContext): Promise<OAuth2Scope>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRefreshTokenForAuthorizationServerAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRefreshTokenForAuthorizationServerAndClient(response: ResponseContext): Promise<OAuth2RefreshToken>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthorizationServerKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAuthorizationServerKeys(response: ResponseContext): Promise<Array<JsonWebKey>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthorizationServerPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAuthorizationServerPolicies(response: ResponseContext): Promise<Array<AuthorizationServerPolicy>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthorizationServerPolicyRules
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAuthorizationServerPolicyRules(response: ResponseContext): Promise<Array<AuthorizationServerPolicyRule>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthorizationServers
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAuthorizationServers(response: ResponseContext): Promise<Array<AuthorizationServer>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2Claims
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOAuth2Claims(response: ResponseContext): Promise<Array<OAuth2Claim>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2ClientsForAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOAuth2ClientsForAuthorizationServer(response: ResponseContext): Promise<Array<OAuth2Client>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2Scopes
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOAuth2Scopes(response: ResponseContext): Promise<Array<OAuth2Scope>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRefreshTokensForAuthorizationServerAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRefreshTokensForAuthorizationServerAndClient(response: ResponseContext): Promise<Array<OAuth2RefreshToken>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeRefreshTokenForAuthorizationServerAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeRefreshTokenForAuthorizationServerAndClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeRefreshTokensForAuthorizationServerAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeRefreshTokensForAuthorizationServerAndClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rotateAuthorizationServerKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  rotateAuthorizationServerKeys(response: ResponseContext): Promise<Array<JsonWebKey>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateAuthorizationServer(response: ResponseContext): Promise<AuthorizationServer>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateAuthorizationServerPolicy(response: ResponseContext): Promise<AuthorizationServerPolicy>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateAuthorizationServerPolicyRule(response: ResponseContext): Promise<AuthorizationServerPolicyRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOAuth2Claim
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateOAuth2Claim(response: ResponseContext): Promise<OAuth2Claim>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateOAuth2Scope(response: ResponseContext): Promise<OAuth2Scope>;
}
