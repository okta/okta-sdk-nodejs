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
import { RequestContext, ResponseContext, HttpFile } from '../http/http';
import { Csr } from '../models/Csr';
import { CsrMetadata } from '../models/CsrMetadata';
import { IdentityProvider } from '../models/IdentityProvider';
import { IdentityProviderApplicationUser } from '../models/IdentityProviderApplicationUser';
import { JsonWebKey } from '../models/JsonWebKey';
import { SocialAuthToken } from '../models/SocialAuthToken';
import { UserIdentityProviderLinkRequest } from '../models/UserIdentityProviderLinkRequest';
/**
 * no description
 */
export declare class IdentityProviderApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an inactive IdP
     * Activate an Identity Provider
     * @param idpId
     */
  activateIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
     * Clone a Signing Credential Key
     * @param idpId
     * @param keyId
     * @param targetIdpId
     */
  cloneIdentityProviderKey(idpId: string, keyId: string, targetIdpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new identity provider integration
     * Create an Identity Provider
     * @param identityProvider
     */
  createIdentityProvider(identityProvider: IdentityProvider, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new X.509 certificate credential to the IdP key store.
     * Create an X.509 Certificate Public Key
     * @param jsonWebKey
     */
  createIdentityProviderKey(jsonWebKey: JsonWebKey, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an active IdP
     * Deactivate an Identity Provider
     * @param idpId
     */
  deactivateIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an identity provider integration by `idpId`
     * Delete an Identity Provider
     * @param idpId
     */
  deleteIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP
     * Delete a Signing Credential Key
     * @param keyId
     */
  deleteIdentityProviderKey(keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a new key pair and returns a Certificate Signing Request for it
     * Generate a Certificate Signing Request
     * @param idpId
     * @param metadata
     */
  generateCsrForIdentityProvider(idpId: string, metadata: CsrMetadata, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
     * Generate a new Signing Credential Key
     * @param idpId
     * @param validityYears expiry of the IdP Key Credential
     */
  generateIdentityProviderSigningKey(idpId: string, validityYears: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific Certificate Signing Request model by id
     * Retrieve a Certificate Signing Request
     * @param idpId
     * @param csrId
     */
  getCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an identity provider integration by `idpId`
     * Retrieve an Identity Provider
     * @param idpId
     */
  getIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a linked IdP user by ID
     * Retrieve a User
     * @param idpId
     * @param userId
     */
  getIdentityProviderApplicationUser(idpId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific IdP Key Credential by `kid`
     * Retrieve an Credential Key
     * @param keyId
     */
  getIdentityProviderKey(keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific IdP Key Credential by `kid`
     * Retrieve a Signing Credential Key
     * @param idpId
     * @param keyId
     */
  getIdentityProviderSigningKey(idpId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
     * Link a User to a Social IdP
     * @param idpId
     * @param userId
     * @param userIdentityProviderLinkRequest
     */
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Certificate Signing Requests for an IdP
     * List all Certificate Signing Requests
     * @param idpId
     */
  listCsrsForIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all users linked to the identity provider
     * List all Users
     * @param idpId
     */
  listIdentityProviderApplicationUsers(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all IdP key credentials
     * List all Credential Keys
     * @param after Specifies the pagination cursor for the next page of keys
     * @param limit Specifies the number of key results in a page
     */
  listIdentityProviderKeys(after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all signing key credentials for an IdP
     * List all Signing Credential Keys
     * @param idpId
     */
  listIdentityProviderSigningKeys(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all identity provider integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
     * List all Identity Providers
     * @param q Searches the name property of IdPs for matching value
     * @param after Specifies the pagination cursor for the next page of IdPs
     * @param limit Specifies the number of IdP results in a page
     * @param type Filters IdPs by type
     */
  listIdentityProviders(q?: string, after?: string, limit?: number, type?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth
     * List all Tokens from a OIDC Identity Provider
     * @param idpId
     * @param userId
     */
  listSocialAuthTokens(idpId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Publishes a certificate signing request with a signed X.509 certificate and adds it into the signing key credentials for the IdP
     * Publish a Certificate Signing Request
     * @param idpId
     * @param csrId
     * @param body
     */
  publishCsrForIdentityProvider(idpId: string, csrId: string, body: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an identity provider integration by `idpId`
     * Replace an Identity Provider
     * @param idpId
     * @param identityProvider
     */
  replaceIdentityProvider(idpId: string, identityProvider: IdentityProvider, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes a certificate signing request and deletes the key pair from the IdP
     * Revoke a Certificate Signing Request
     * @param idpId
     * @param csrId
     */
  revokeCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unlinks the link between the Okta user and the IdP user
     * Unlink a User from IdP
     * @param idpId
     * @param userId
     */
  unlinkUserFromIdentityProvider(idpId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class IdentityProviderApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateIdentityProvider(response: ResponseContext): Promise<IdentityProvider>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloneIdentityProviderKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  cloneIdentityProviderKey(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  createIdentityProvider(response: ResponseContext): Promise<IdentityProvider>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentityProviderKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  createIdentityProviderKey(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateIdentityProvider(response: ResponseContext): Promise<IdentityProvider>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteIdentityProvider(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentityProviderKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteIdentityProviderKey(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  generateCsrForIdentityProvider(response: ResponseContext): Promise<Csr>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateIdentityProviderSigningKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  generateIdentityProviderSigningKey(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCsrForIdentityProvider(response: ResponseContext): Promise<Csr>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentityProvider(response: ResponseContext): Promise<IdentityProvider>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProviderApplicationUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentityProviderApplicationUser(response: ResponseContext): Promise<IdentityProviderApplicationUser>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProviderKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentityProviderKey(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProviderSigningKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentityProviderSigningKey(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to linkUserToIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  linkUserToIdentityProvider(response: ResponseContext): Promise<IdentityProviderApplicationUser>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCsrsForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  listCsrsForIdentityProvider(response: ResponseContext): Promise<Array<Csr>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentityProviderApplicationUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  listIdentityProviderApplicationUsers(response: ResponseContext): Promise<Array<IdentityProviderApplicationUser>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentityProviderKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  listIdentityProviderKeys(response: ResponseContext): Promise<Array<JsonWebKey>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentityProviderSigningKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  listIdentityProviderSigningKeys(response: ResponseContext): Promise<Array<JsonWebKey>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentityProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
  listIdentityProviders(response: ResponseContext): Promise<Array<IdentityProvider>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSocialAuthTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSocialAuthTokens(response: ResponseContext): Promise<Array<SocialAuthToken>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publishCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  publishCsrForIdentityProvider(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceIdentityProvider(response: ResponseContext): Promise<IdentityProvider>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeCsrForIdentityProvider(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unlinkUserFromIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  unlinkUserFromIdentityProvider(response: ResponseContext): Promise<void>;
}
