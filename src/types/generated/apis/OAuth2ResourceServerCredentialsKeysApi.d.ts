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
import { OAuth2ResourceServerJsonWebKey } from '../models/OAuth2ResourceServerJsonWebKey';
import { OAuth2ResourceServerJsonWebKeyRequestBody } from '../models/OAuth2ResourceServerJsonWebKeyRequestBody';
/**
 * no description
 */
export declare class OAuth2ResourceServerCredentialsKeysApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a custom authorization server public JSON web key by key `id`. > **Note:** You can have only one active key at any given time for the authorization server. When you activate an inactive key, Okta automatically deactivates the current active key.
     * Activate a Custom Authorization Server Public JSON Web Key
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param keyId Unique &#x60;id&#x60; of the Custom Authorization Server JSON Web Key
     */
  activateOAuth2ResourceServerJsonWebKey(authServerId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds a new JSON Web Key to the custom authorization server`s JSON web keys. > **Note:** This API doesn\'t allow you to add a key if the existing key doesn\'t have a `kid`. Use the [Replace an Authorization Server](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AuthorizationServer/#tag/AuthorizationServer/operation/replaceAuthorizationServer) operation to update the JWKS or [Delete a Custom Authorization Server Public JSON Web Key](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/OAuth2ResourceServerCredentialsKeys/#tag/OAuth2ResourceServerCredentialsKeys/operation/deleteOAuth2ResourceServerJsonWebKey) and re-add the key with a `kid`. > **Note:** This API doesn\'t allow you to add a key with an ACTIVE status. You need to add an INACTIVE key first, and then ACTIVATE the key.
     * Add a JSON Web Key
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param oAuth2ResourceServerJsonWebKeyRequestBody
     */
  addOAuth2ResourceServerJsonWebKey(authServerId: string, oAuth2ResourceServerJsonWebKeyRequestBody: OAuth2ResourceServerJsonWebKeyRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a custom authorization server public JSON web key by key `id`. > **Note:** Deactivating the active key isn\'t allowed if the authorization server has access token encryption enabled. You can activate another key, which makes the current key inactive.
     * Deactivate a Custom Authorization Server Public JSON Web Key
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param keyId Unique &#x60;id&#x60; of the Custom Authorization Server JSON Web Key
     */
  deactivateOAuth2ResourceServerJsonWebKey(authServerId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a custom authorization server public JSON web key by key `id`. You can only delete an inactive key.
     * Delete a Custom Authorization Server Public JSON Web Key
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param keyId Unique &#x60;id&#x60; of the Custom Authorization Server JSON Web Key
     */
  deleteOAuth2ResourceServerJsonWebKey(authServerId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a custom authorization server public JSON web key by key `id`
     * Retrieve a Custom Authorization Server Public JSON Web Key
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     * @param keyId Unique &#x60;id&#x60; of the Custom Authorization Server JSON Web Key
     */
  getOAuth2ResourceServerJsonWebKey(authServerId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the public keys used by the custom authorization server
     * List all Custom Authorization Server Public JSON Web Keys
     * @param authServerId &#x60;id&#x60; of the Authorization Server
     */
  listOAuth2ResourceServerJsonWebKeys(authServerId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class OAuth2ResourceServerCredentialsKeysApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateOAuth2ResourceServerJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateOAuth2ResourceServerJsonWebKey(response: ResponseContext): Promise<OAuth2ResourceServerJsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addOAuth2ResourceServerJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  addOAuth2ResourceServerJsonWebKey(response: ResponseContext): Promise<OAuth2ResourceServerJsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateOAuth2ResourceServerJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateOAuth2ResourceServerJsonWebKey(response: ResponseContext): Promise<OAuth2ResourceServerJsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOAuth2ResourceServerJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteOAuth2ResourceServerJsonWebKey(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2ResourceServerJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOAuth2ResourceServerJsonWebKey(response: ResponseContext): Promise<OAuth2ResourceServerJsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2ResourceServerJsonWebKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOAuth2ResourceServerJsonWebKeys(response: ResponseContext): Promise<Array<OAuth2ResourceServerJsonWebKey>>;
}
