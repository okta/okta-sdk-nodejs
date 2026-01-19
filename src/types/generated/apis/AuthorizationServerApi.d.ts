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
import { AssociatedServerMediated } from '../models/AssociatedServerMediated';
import { AuthorizationServer } from '../models/AuthorizationServer';
import { AuthorizationServerJsonWebKey } from '../models/AuthorizationServerJsonWebKey';
import { AuthorizationServerPolicy } from '../models/AuthorizationServerPolicy';
import { AuthorizationServerPolicyRule } from '../models/AuthorizationServerPolicyRule';
import { AuthorizationServerPolicyRuleRequest } from '../models/AuthorizationServerPolicyRuleRequest';
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
     * Activates an authorization server
     * Activate an authorization server
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     */
  activateAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates an authorization server policy
     * Activate a policy
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     */
  activateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates an authorization server policy rule
     * Activate a policy rule
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     */
  activateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates trusted relationships between the given authorization server and other authorization servers
     * Create an associated authorization server
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param associatedServerMediated
     */
  createAssociatedServers(authServerId: string, associatedServerMediated: AssociatedServerMediated, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an authorization server
     * Create an authorization server
     * @param authorizationServer
     */
  createAuthorizationServer(authorizationServer: AuthorizationServer, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a policy
     * Create a policy
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policy
     */
  createAuthorizationServerPolicy(authServerId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a policy rule for the specified Custom Authorization Server and Policy
     * Create a policy rule
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     * @param policyRule
     */
  createAuthorizationServerPolicyRule(authServerId: string, policyId: string, policyRule: AuthorizationServerPolicyRuleRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a custom token Claim for a custom authorization server
     * Create a custom token claim
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param oAuth2Claim
     */
  createOAuth2Claim(authServerId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a custom token scope
     * Create a custom token scope
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param oAuth2Scope
     */
  createOAuth2Scope(authServerId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an authorization server
     * Deactivate an authorization server
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     */
  deactivateAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an authorization server policy
     * Deactivate a policy
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     */
  deactivateAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an authorization server policy rule
     * Deactivate a policy rule
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     */
  deactivateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an associated Authorization Server
     * Delete an associated authorization server
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param associatedServerId &#x60;id&#x60; of the associated Authorization Server
     */
  deleteAssociatedServer(authServerId: string, associatedServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an authorization server
     * Delete an authorization server
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     */
  deleteAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a policy
     * Delete a policy
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     */
  deleteAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
     * Delete a policy rule
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     */
  deleteAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a custom token Claim specified by the `claimId`
     * Delete a custom token claim
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param claimId &#x60;id&#x60; of Claim
     */
  deleteOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a custom token scope
     * Delete a custom token scope
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param scopeId &#x60;id&#x60; of Scope
     */
  deleteOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an authorization server
     * Retrieve an authorization server
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     */
  getAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an Authorization Server Key specified by the `keyId`
     * Retrieve an authorization server key
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param keyId &#x60;id&#x60; of the certificate key
     */
  getAuthorizationServerKey(authServerId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a policy
     * Retrieve a policy
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     */
  getAuthorizationServerPolicy(authServerId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a policy rule by `ruleId`
     * Retrieve a policy rule
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     */
  getAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a custom token Claim by the specified `claimId`
     * Retrieve a custom token claim
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param claimId &#x60;id&#x60; of Claim
     */
  getOAuth2Claim(authServerId: string, claimId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a custom token scope
     * Retrieve a custom token scope
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param scopeId &#x60;id&#x60; of Scope
     */
  getOAuth2Scope(authServerId: string, scopeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a refresh token for a Client
     * Retrieve a refresh token for a client
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param clientId &#x60;client_id&#x60; of the app
     * @param tokenId &#x60;id&#x60; of Token
     * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
     */
  getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all associated Authorization Servers by trusted type for the given `authServerId`
     * List all associated authorization servers
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param trusted Searches trusted authorization servers when &#x60;true&#x60; or searches untrusted authorization servers when &#x60;false&#x60;
     * @param q Searches for the name or audience of the associated authorization servers
     * @param limit Specifies the number of results for a page
     * @param after Specifies the pagination cursor for the next page of the associated authorization servers
     */
  listAssociatedServersByTrustedType(authServerId: string, trusted?: boolean, q?: string, limit?: number, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all of the current, future, and expired Keys used by the Custom Authorization Server
     * List all credential keys
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     */
  listAuthorizationServerKeys(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all policies
     * List all policies
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     */
  listAuthorizationServerPolicies(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all policy rules for the specified Custom Authorization Server and Policy
     * List all policy rules
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     */
  listAuthorizationServerPolicyRules(authServerId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all custom authorization servers in the org
     * List all authorization servers
     * @param q Searches the &#x60;name&#x60; and &#x60;audiences&#x60; of authorization servers for matching values
     * @param limit Specifies the number of authorization server results on a page. Maximum value: 200
     * @param after Specifies the pagination cursor for the next page of authorization servers. Treat as an opaque value and obtain through the next link relationship.
     */
  listAuthorizationServers(q?: string, limit?: number, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all custom token Claims defined for a specified custom authorization server
     * List all custom token claims
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     */
  listOAuth2Claims(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all client resources for which the specified authorization server has tokens.  > **Note:** To list a specific user\'s client resources for which they have tokens or grants, use the [List all clients endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserClients).
     * List all client resources for an authorization server
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     */
  listOAuth2ClientsForAuthorizationServer(authServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all custom token scopes
     * List all custom token scopes
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param q Searches the &#x60;name&#x60; of Custom Token Scopes for matching values
     * @param filter Filter expression for Custom Token Scopes
     * @param after Specifies the pagination cursor for the next page of scopes. Treat the after cursor as an opaque value and obtain it through the next link relationship. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](https://developer.okta.com/docs/api/#pagination).
     */
  listOAuth2Scopes(authServerId: string, q?: string, filter?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all refresh tokens issued by an authorization server for a specific Client
     * List all refresh tokens for a client
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param clientId &#x60;client_id&#x60; of the app
     * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
     * @param after Specifies the pagination cursor for the next page of tokens
     * @param limit The maximum number of tokens to return (maximum 200)
     */
  listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an authorization server
     * Replace an authorization server
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param authorizationServer
     */
  replaceAuthorizationServer(authServerId: string, authorizationServer: AuthorizationServer, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a policy
     * Replace a policy
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     * @param policy
     */
  replaceAuthorizationServerPolicy(authServerId: string, policyId: string, policy: AuthorizationServerPolicy, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
     * Replace a policy rule
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     * @param policyRule
     */
  replaceAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, policyRule: AuthorizationServerPolicyRuleRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a custom token Claim specified by the `claimId`
     * Replace a custom token claim
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param claimId &#x60;id&#x60; of Claim
     * @param oAuth2Claim
     */
  replaceOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: OAuth2Claim, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a custom token scope
     * Replace a custom token scope
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param scopeId &#x60;id&#x60; of Scope
     * @param oAuth2Scope
     */
  replaceOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: OAuth2Scope, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes a refresh token for a Client
     * Revoke a refresh token for a client
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param clientId &#x60;client_id&#x60; of the app
     * @param tokenId &#x60;id&#x60; of Token
     */
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all refresh tokens for a Client
     * Revoke all refresh tokens for a client
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param clientId &#x60;client_id&#x60; of the app
     */
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Rotates the current Keys for a Custom Authorization Server. If you rotate Keys, the `ACTIVE` Key becomes the `EXPIRED` Key, the `NEXT` Key becomes the `ACTIVE` Key, and the Custom Authorization Server immediately begins using the new active Key to sign tokens.  > **Note:** Okta rotates your Keys automatically in `AUTO` mode. You can rotate Keys yourself in either mode. If Keys are rotated manually, you should invalidate any intermediate cache. and fetch the Keys again using the Keys endpoint.
     * Rotate all credential keys
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param use
     */
  rotateAuthorizationServerKeys(authServerId: string, use: JwkUse, _options?: Configuration): Promise<RequestContext>;
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
     * @params response Response returned by the server for a request to createAssociatedServers
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAssociatedServers(response: ResponseContext): Promise<Array<AuthorizationServer>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAuthorizationServer(response: ResponseContext): Promise<AuthorizationServer>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAuthorizationServerPolicy(response: ResponseContext): Promise<AuthorizationServerPolicy>;
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
  createOAuth2Claim(response: ResponseContext): Promise<OAuth2Claim>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  createOAuth2Scope(response: ResponseContext): Promise<OAuth2Scope>;
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
     * @params response Response returned by the server for a request to deleteAssociatedServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAssociatedServer(response: ResponseContext): Promise<void>;
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
     * @params response Response returned by the server for a request to getAuthorizationServerKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAuthorizationServerKey(response: ResponseContext): Promise<AuthorizationServerJsonWebKey>;
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
     * @params response Response returned by the server for a request to listAssociatedServersByTrustedType
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAssociatedServersByTrustedType(response: ResponseContext): Promise<Array<AuthorizationServer>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthorizationServerKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAuthorizationServerKeys(response: ResponseContext): Promise<Array<AuthorizationServerJsonWebKey>>;
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
     * @params response Response returned by the server for a request to replaceAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceAuthorizationServer(response: ResponseContext): Promise<AuthorizationServer>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceAuthorizationServerPolicy(response: ResponseContext): Promise<AuthorizationServerPolicy>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceAuthorizationServerPolicyRule(response: ResponseContext): Promise<AuthorizationServerPolicyRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceOAuth2Claim
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceOAuth2Claim(response: ResponseContext): Promise<OAuth2Claim>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceOAuth2Scope(response: ResponseContext): Promise<OAuth2Scope>;
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
  rotateAuthorizationServerKeys(response: ResponseContext): Promise<Array<AuthorizationServerJsonWebKey>>;
}
