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
import { DetailedHookKeyInstance } from '../models/DetailedHookKeyInstance';
import { Embedded } from '../models/Embedded';
import { HookKey } from '../models/HookKey';
import { KeyRequest } from '../models/KeyRequest';
/**
 * no description
 */
export declare class HookKeyApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a key for use with other parts of the application, such as inline hooks  > **Note:**  Use the key name to access this key for inline hook operations.  The total number of keys that you can create in an Okta org is limited to 50.   The response is a [Key object](https://developer.okta.com/docs/reference/api/hook-keys/#key-object) that represents the   key that you create. The `id` property in the response serves as the unique ID for the key, which you can specify when   invoking other CRUD operations. The `keyId` provided in the response is the alias of the public key that you can use to get   details of the public key data in a separate call.  > **Note:** The keyId is the alias of the public key that you can use to retrieve the public key.
     * Create a key
     * @param keyRequest
     */
  createHookKey(keyRequest: KeyRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a key by `id`. After being deleted, the key is unrecoverable.  As a safety precaution, only keys that aren\'t being used are eligible for deletion.
     * Delete a key
     * @param hookKeyId ID of the Hook Key
     */
  deleteHookKey(hookKeyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the public portion of the Key object using the `id` parameter  >**Note:** The `?expand=publickey` query parameter optionally returns the full object including the details of the public key in the response body\'s `_embedded` property.
     * Retrieve a key by ID
     * @param hookKeyId ID of the Hook Key
     */
  getHookKey(hookKeyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a public key by `keyId`  >**Note:** keyId is the alias of the public key.
     * Retrieve a public key
     * @param keyId id\&quot; of the Public Key
     */
  getPublicKey(keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all keys
     * List all keys
     */
  listHookKeys(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a key by `id`  This request replaces existing properties after passing validation.  > **Note:** The only parameter that you can update is the name of the key, which must be unique at all times.
     * Replace a key
     * @param hookKeyId ID of the Hook Key
     * @param keyRequest
     */
  replaceHookKey(hookKeyId: string, keyRequest: KeyRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class HookKeyApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createHookKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  createHookKey(response: ResponseContext): Promise<DetailedHookKeyInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteHookKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteHookKey(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHookKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  getHookKey(response: ResponseContext): Promise<HookKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPublicKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPublicKey(response: ResponseContext): Promise<Embedded>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listHookKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  listHookKeys(response: ResponseContext): Promise<Array<HookKey>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceHookKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceHookKey(response: ResponseContext): Promise<DetailedHookKeyInstance>;
}
