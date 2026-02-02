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
import { CsrMetadata } from '../models/CsrMetadata';
import { IdPCertificateCredential } from '../models/IdPCertificateCredential';
import { IdPCsr } from '../models/IdPCsr';
import { IdPKeyCredential } from '../models/IdPKeyCredential';
import { IdentityProvider } from '../models/IdentityProvider';
import { IdentityProviderApplicationUser } from '../models/IdentityProviderApplicationUser';
import { IdentityProviderType } from '../models/IdentityProviderType';
import { SocialAuthToken } from '../models/SocialAuthToken';
import { UserIdentityProviderLinkRequest } from '../models/UserIdentityProviderLinkRequest';
/**
 * no description
 */
export declare class IdentityProviderApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an inactive identity provider (IdP)
     * Activate an IdP
     * @param idpId &#x60;id&#x60; of IdP
     */
  activateIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Clones an X.509 certificate for an identity provider (IdP) signing key credential from a source IdP to target IdP > **Caution:** Sharing certificates isn\'t a recommended security practice.  > **Note:** If the key is already present in the list of key credentials for the target IdP, you receive a 400 error response.
     * Clone a signing key credential for IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param keyId Unique &#x60;id&#x60; of the IdP key credential
     * @param targetIdpId &#x60;id&#x60; of the target IdP
     */
  cloneIdentityProviderKey(idpId: string, keyId: string, targetIdpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new identity provider (IdP) integration.  #### SAML 2.0 IdP  You must first add the IdP\'s signature certificate to the IdP key store before you can add a SAML 2.0 IdP with a `kid` credential reference.   Don\'t use `fromURI` to automatically redirect a user to a particular app after successfully authenticating with a third-party IdP. Instead, use SAML deep links. Using `fromURI` isn\'t tested or supported. For more information about using deep links when signing users in using an SP-initiated flow, see [Understanding SP-Initiated Login flow](https://developer.okta.com/docs/concepts/saml/#understanding-sp-initiated-login-flow).  Use SAML deep links to automatically redirect the user to an app after successfully authenticating with a third-party IdP. To use deep links, assemble these three parts into a URL:  * SP ACS URL<br> For example: `https://${yourOktaDomain}/sso/saml2/:idpId` * The app to which the user is automatically redirected after successfully authenticating with the IdP <br> For example: `/app/:app-location/:appId/sso/saml` * Optionally, if the app is an outbound SAML app, you can specify the `relayState` passed to it.<br> For example: `?RelayState=:anyUrlEncodedValue`  The deep link for the above three parts is:<br> `https://${yourOktaDomain}/sso/saml2/:idpId/app/:app-location/:appId/sso/saml?RelayState=:anyUrlEncodedValue`  #### Smart Card X509 IdP  You must first add the IdP\'s server certificate to the IdP key store before you can add a Smart Card `X509` IdP with a `kid` credential reference. You need to upload the whole trust chain as a single key using the [Key Store API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderKeys/#tag/IdentityProviderKeys/operation/createIdentityProviderKey). Depending on the information stored in the smart card, select the proper [template](https://developer.okta.com/docs/reference/okta-expression-language/#idp-user-profile) `idpuser.subjectAltNameEmail` or `idpuser.subjectAltNameUpn`.  #### Identity verification vendors as identity providers  Identity verification (IDV) vendors work like IdPs, with a few key differences. IDV vendors verify your user\'s identities by requiring them to submit a proof of identity. There are many ways to verify user identities. For example, a proof of identity can be a selfie to determine liveliness or it can be requiring users to submit a photo of their driver\'s license and matching that information with a database.  There are three IDV vendors (Persona, CLEAR Verified, and Incode) with specific configuration settings and another IDV vendor type (Custom IDV) that lets you create a custom IDV vendor, using a [standardized IDV process](https://developer.okta.com/docs/guides/idv-integration/main/). You can configure each of the IDV vendors as IdPs in your org by creating an account with the vendor, and then creating an IdP integration. Control how the IDVs verify your users by using [Okta account management policy rules](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).  * [Persona](https://withpersona.com/)  * [CLEAR Verified](https://www.clearme.com/)  * [Incode](https://incode.com/)  * [Custom IDV](https://help.okta.com/okta_help.htm?type=oie&id=idp-add-custom-idv-vendor)
     * Create an IdP
     * @param identityProvider IdP settings
     */
  createIdentityProvider(identityProvider: IdentityProvider, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new X.509 certificate credential in the identity provider (IdP) key store > **Note:** RSA-based certificates are supported for all IdP types. Okta currently supports EC-based certificates only for the `X509` IdP type. For EC-based certificates we support only P-256, P-384, and P-521 curves.
     * Create an IdP key credential
     * @param jsonWebKey
     */
  createIdentityProviderKey(jsonWebKey: IdPCertificateCredential, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an active identity provider (IdP)
     * Deactivate an IdP
     * @param idpId &#x60;id&#x60; of IdP
     */
  deactivateIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an identity provider (IdP) integration by `idpId` * All existing IdP users are unlinked with the highest order profile source taking precedence for each IdP user. * Unlinked users keep their existing authentication provider such as `FEDERATION` or `SOCIAL`.
     * Delete an IdP
     * @param idpId &#x60;id&#x60; of IdP
     */
  deleteIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a specific identity provider (IdP) key credential by `kid` if it isn\'t currently being used by an active or inactive IdP
     * Delete an IdP key credential
     * @param keyId Unique &#x60;id&#x60; of the IdP key credential
     */
  deleteIdentityProviderKey(keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a new key pair and returns a certificate signing request (CSR) for it > **Note:** The private key isn\'t listed in the [signing key credentials for the identity provider (IdP)](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProviderSigningKeys/#tag/IdentityProviderSigningKeys/operation/listIdentityProviderSigningKeys) until it\'s published.
     * Generate a certificate signing request
     * @param idpId &#x60;id&#x60; of IdP
     * @param metadata
     */
  generateCsrForIdentityProvider(idpId: string, metadata: CsrMetadata, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a new X.509 certificate for an identity provider (IdP) signing key credential to be used for signing assertions sent to the IdP. IdP signing keys are read-only. > **Note:** To update an IdP with the newly generated key credential, [update your IdP](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider) using the returned key\'s `kid` in the [signing credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/credentials/signing/kid&t=request).
     * Generate a new signing key credential for IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param validityYears expiry of the IdP key credential
     */
  generateIdentityProviderSigningKey(idpId: string, validityYears: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific certificate signing request (CSR) by `id`
     * Retrieve a certificate signing request
     * @param idpId &#x60;id&#x60; of IdP
     * @param csrId &#x60;id&#x60; of the IdP CSR
     */
  getCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an identity provider (IdP) integration by `idpId`
     * Retrieve an IdP
     * @param idpId &#x60;id&#x60; of IdP
     */
  getIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a linked identity provider (IdP) user by ID
     * Retrieve a user for IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param userId ID of an existing Okta user
     */
  getIdentityProviderApplicationUser(idpId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific identity provider (IdP) key credential by `kid`
     * Retrieve an IdP key credential
     * @param keyId Unique &#x60;id&#x60; of the IdP key credential
     */
  getIdentityProviderKey(keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific identity provider (IdP) key credential by `kid`
     * Retrieve a signing key credential for IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param keyId Unique &#x60;id&#x60; of the IdP key credential
     */
  getIdentityProviderSigningKey(idpId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
     * Link a user to IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param userId ID of an existing Okta user
     * @param userIdentityProviderLinkRequest
     */
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the active signing key credential for an identity provider (IdP)
     * List the active signing key credential for IdP
     * @param idpId &#x60;id&#x60; of IdP
     */
  listActiveIdentityProviderSigningKey(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all certificate signing requests (CSRs) for an identity provider (IdP)
     * List all certificate signing requests
     * @param idpId &#x60;id&#x60; of IdP
     */
  listCsrsForIdentityProvider(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the users linked to an identity provider (IdP)
     * List all users for IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param q Searches the records for matching value
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     * @param expand Expand user data
     */
  listIdentityProviderApplicationUsers(idpId: string, q?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all identity provider (IdP) key credentials
     * List all IdP key credentials
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  listIdentityProviderKeys(after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all signing key credentials for an identity provider (IdP)
     * List all signing key credentials for IdP
     * @param idpId &#x60;id&#x60; of IdP
     */
  listIdentityProviderSigningKeys(idpId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all identity provider (IdP) integrations with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
     * List all IdPs
     * @param q Searches the &#x60;name&#x60; property of IdPs for matching value
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     * @param type Filters IdPs by &#x60;type&#x60;
     */
  listIdentityProviders(q?: string, after?: string, limit?: number, type?: IdentityProviderType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
     * List all tokens from OIDC IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param userId ID of an existing Okta user
     */
  listSocialAuthTokens(idpId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the identity providers (IdPs) associated with the user
     * List all IdPs for user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  listUserIdentityProviders(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Publishes the certificate signing request (CSR) with a signed X.509 certificate and adds it into the signing key credentials for the identity provider (IdP) > **Notes:** > * Publishing a certificate completes the lifecycle of the CSR, and it\'s no longer accessible. > * If the validity period of the certificate is less than 90 days, a 400 error response is returned.
     * Publish a certificate signing request
     * @param idpId &#x60;id&#x60; of IdP
     * @param csrId &#x60;id&#x60; of the IdP CSR
     * @param body
     */
  publishCsrForIdentityProvider(idpId: string, csrId: string, body: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an identity provider (IdP) integration by `idpId`
     * Replace an IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param identityProvider Updated configuration for the IdP
     */
  replaceIdentityProvider(idpId: string, identityProvider: IdentityProvider, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an identity provider (IdP) key credential by `kid`
     * Replace an IdP key credential
     * @param keyId Unique &#x60;id&#x60; of the IdP key credential
     * @param idPKeyCredential Updated IdP key credential
     */
  replaceIdentityProviderKey(keyId: string, idPKeyCredential: IdPKeyCredential, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes a certificate signing request (CSR) and deletes the key pair from the identity provider (IdP)
     * Revoke a certificate signing request
     * @param idpId &#x60;id&#x60; of IdP
     * @param csrId &#x60;id&#x60; of the IdP CSR
     */
  revokeCsrForIdentityProvider(idpId: string, csrId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
     * Unlink a user from IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param userId ID of an existing Okta user
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
  cloneIdentityProviderKey(response: ResponseContext): Promise<IdPKeyCredential>;
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
  createIdentityProviderKey(response: ResponseContext): Promise<IdPKeyCredential>;
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
  generateCsrForIdentityProvider(response: ResponseContext): Promise<IdPCsr>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateIdentityProviderSigningKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  generateIdentityProviderSigningKey(response: ResponseContext): Promise<IdPKeyCredential>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCsrForIdentityProvider(response: ResponseContext): Promise<IdPCsr>;
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
  getIdentityProviderKey(response: ResponseContext): Promise<IdPKeyCredential>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProviderSigningKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentityProviderSigningKey(response: ResponseContext): Promise<IdPKeyCredential>;
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
     * @params response Response returned by the server for a request to listActiveIdentityProviderSigningKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  listActiveIdentityProviderSigningKey(response: ResponseContext): Promise<void | Array<IdPKeyCredential>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCsrsForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  listCsrsForIdentityProvider(response: ResponseContext): Promise<Array<IdPCsr>>;
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
  listIdentityProviderKeys(response: ResponseContext): Promise<Array<IdPKeyCredential>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentityProviderSigningKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  listIdentityProviderSigningKeys(response: ResponseContext): Promise<Array<IdPKeyCredential>>;
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
     * @params response Response returned by the server for a request to listUserIdentityProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserIdentityProviders(response: ResponseContext): Promise<Array<IdentityProvider>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publishCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  publishCsrForIdentityProvider(response: ResponseContext): Promise<IdPKeyCredential>;
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
     * @params response Response returned by the server for a request to replaceIdentityProviderKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceIdentityProviderKey(response: ResponseContext): Promise<IdPKeyCredential>;
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
