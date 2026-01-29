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
import { AddJwkRequest } from '../models/AddJwkRequest';
import { GetJwk200Response } from '../models/GetJwk200Response';
import { ListJwk200Response } from '../models/ListJwk200Response';
import { ListJwk200ResponseKeysInner } from '../models/ListJwk200ResponseKeysInner';
import { OAuth2ClientJsonSigningKeyResponse } from '../models/OAuth2ClientJsonSigningKeyResponse';
import { OAuth2ClientSecret } from '../models/OAuth2ClientSecret';
import { OAuth2ClientSecretRequestBody } from '../models/OAuth2ClientSecretRequestBody';
/**
 * no description
 */
export declare class ApplicationSSOPublicKeysApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an OAuth 2.0 Client JSON Web Key by `keyId` > **Note:** You can have only one active encryption key at any given time for app. When you activate an inactive key, the current active key is automatically deactivated.
     * Activate an OAuth 2.0 client JSON Web Key
     * @param appId Application ID
     * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
     */
  activateOAuth2ClientJsonWebKey(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates an OAuth 2.0 Client Secret by `secretId`
     * Activate an OAuth 2.0 client secret
     * @param appId Application ID
     * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
     */
  activateOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds a new JSON Web Key to the client`s JSON Web Keys. > **Note:** This API doesn\'t allow you to add a key if the existing key doesn\'t have a `kid`. This is also consistent with how the [Dynamic Client Registration](/openapi/okta-oauth/oauth/tag/Client/) or [Applications](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/) APIs behave, as they don\'t allow the creation of multiple keys without `kids`. Use the [Replace an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) or the [Replace a Client Application](/openapi/okta-oauth/oauth/tag/Client/#tag/Client/operation/replaceClient) operation to update the JWKS or [Delete an OAuth 2.0 Client JSON Web Key](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationSSOPublicKeys/#tag/ApplicationSSOPublicKeys/operation/deletejwk) and re-add the key with a `kid`.
     * Add a JSON Web Key
     * @param appId Application ID
     * @param addJwkRequest
     */
  addJwk(appId: string, addJwkRequest: AddJwkRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an OAuth 2.0 Client Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects. > **Note:** This API lets you bring your own secret. If [token_endpoint_auth_method](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=4/credentials/oauthClient/token_endpoint_auth_method&t=request) of the app is `client_secret_jwt`, then the minimum length of `client_secret` is 32 characters. If no secret is specified in the request, Okta adds a new system-generated secret.
     * Create an OAuth 2.0 client secret
     * @param appId Application ID
     * @param oAuth2ClientSecretRequestBody
     */
  createOAuth2ClientSecret(appId: string, oAuth2ClientSecretRequestBody?: OAuth2ClientSecretRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an OAuth 2.0 Client JSON Web Key by `keyId`. > **Note:** You can only deactivate signing keys. Deactivating the active encryption key isn\'t allowed if the client has ID token encryption enabled. You can activate another encryption key, which makes the current key inactive.
     * Deactivate an OAuth 2.0 client JSON Web Key
     * @param appId Application ID
     * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
     */
  deactivateOAuth2ClientJsonWebKey(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an OAuth 2.0 Client Secret by `secretId`. You can\'t deactivate a secret if it\'s the only secret of the client.
     * Deactivate an OAuth 2.0 client secret
     * @param appId Application ID
     * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
     */
  deactivateOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an OAuth 2.0 Client Secret by `secretId`. You can only delete an inactive Secret.
     * Delete an OAuth 2.0 client secret
     * @param appId Application ID
     * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
     */
  deleteOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an OAuth 2.0 Client JSON Web Key by `keyId`. You can only delete an inactive key.
     * Delete an OAuth 2.0 client JSON Web Key
     * @param appId Application ID
     * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
     */
  deletejwk(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an OAuth 2.0 Client JSON Web Key by `keyId`.
     * Retrieve an OAuth 2.0 client JSON Web Key
     * @param appId Application ID
     * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
     */
  getJwk(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an OAuth 2.0 Client Secret by `secretId`
     * Retrieve an OAuth 2.0 client secret
     * @param appId Application ID
     * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
     */
  getOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all JSON Web Keys for an OAuth 2.0 client app
     * List all the OAuth 2.0 client JSON Web Keys
     * @param appId Application ID
     */
  listJwk(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all client secrets for an OAuth 2.0 client app
     * List all OAuth 2.0 client secrets
     * @param appId Application ID
     */
  listOAuth2ClientSecrets(appId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApplicationSSOPublicKeysApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateOAuth2ClientJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateOAuth2ClientJsonWebKey(response: ResponseContext): Promise<ListJwk200ResponseKeysInner>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateOAuth2ClientSecret(response: ResponseContext): Promise<OAuth2ClientSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  addJwk(response: ResponseContext): Promise<ListJwk200ResponseKeysInner>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  createOAuth2ClientSecret(response: ResponseContext): Promise<OAuth2ClientSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateOAuth2ClientJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateOAuth2ClientJsonWebKey(response: ResponseContext): Promise<OAuth2ClientJsonSigningKeyResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateOAuth2ClientSecret(response: ResponseContext): Promise<OAuth2ClientSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteOAuth2ClientSecret(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletejwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  deletejwk(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  getJwk(response: ResponseContext): Promise<GetJwk200Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOAuth2ClientSecret(response: ResponseContext): Promise<OAuth2ClientSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  listJwk(response: ResponseContext): Promise<ListJwk200Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2ClientSecrets
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOAuth2ClientSecrets(response: ResponseContext): Promise<Array<OAuth2ClientSecret>>;
}
