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
import { InlineHook } from '../models/InlineHook';
import { InlineHookResponse } from '../models/InlineHookResponse';
/**
 * no description
 */
export declare class InlineHookApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates the Inline Hook matching the provided id
     * Activate an Inline Hook
     * @param inlineHookId
     */
  activateInlineHook(inlineHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Create an Inline Hook
     * @param inlineHook
     */
  createInlineHook(inlineHook: InlineHook, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates the Inline Hook matching the provided id
     * Deactivate an Inline Hook
     * @param inlineHookId
     */
  deactivateInlineHook(inlineHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
     * Delete an Inline Hook
     * @param inlineHookId
     */
  deleteInlineHook(inlineHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
     * Execute an Inline Hook
     * @param inlineHookId
     * @param payloadData
     */
  executeInlineHook(inlineHookId: string, payloadData: any, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets an inline hook by ID
     * Retrieve an Inline Hook
     * @param inlineHookId
     */
  getInlineHook(inlineHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List all Inline Hooks
     * @param type
     */
  listInlineHooks(type?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an inline hook by ID
     * Replace an Inline Hook
     * @param inlineHookId
     * @param inlineHook
     */
  updateInlineHook(inlineHookId: string, inlineHook: InlineHook, _options?: Configuration): Promise<RequestContext>;
}
export declare class InlineHookApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateInlineHook(response: ResponseContext): Promise<InlineHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  createInlineHook(response: ResponseContext): Promise<InlineHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateInlineHook(response: ResponseContext): Promise<InlineHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteInlineHook(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to executeInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  executeInlineHook(response: ResponseContext): Promise<InlineHookResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  getInlineHook(response: ResponseContext): Promise<InlineHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listInlineHooks
     * @throws ApiException if the response code was not in [200, 299]
     */
  listInlineHooks(response: ResponseContext): Promise<Array<InlineHook>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateInlineHook(response: ResponseContext): Promise<InlineHook>;
}
