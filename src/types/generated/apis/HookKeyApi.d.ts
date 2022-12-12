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
import { HookKey } from '../models/HookKey';
import { JsonWebKey } from '../models/JsonWebKey';
import { KeyRequest } from '../models/KeyRequest';
/**
 * no description
 */
export declare class HookKeyApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a key
     * Create a key
     * @param keyRequest
     */
  createHookKey(keyRequest: KeyRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a key by `hookKeyId`. Once deleted, the Hook Key is unrecoverable. As a safety precaution, unused keys are eligible for deletion.
     * Delete a key
     * @param hookKeyId
     */
  deleteHookKey(hookKeyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a key by `hookKeyId`
     * Retrieve a key
     * @param hookKeyId
     */
  getHookKey(hookKeyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a public key by `keyId`
     * Retrieve a public key
     * @param keyId
     */
  getPublicKey(keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all keys
     * List all keys
     */
  listHookKeys(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a key by `hookKeyId`
     * Replace a key
     * @param hookKeyId
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
  createHookKey(response: ResponseContext): Promise<HookKey>;
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
  getPublicKey(response: ResponseContext): Promise<JsonWebKey>;
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
  replaceHookKey(response: ResponseContext): Promise<HookKey>;
}
