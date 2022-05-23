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
import { EventHook } from '../models/EventHook';
/**
 * no description
 */
export declare class EventHookApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Success
     * Activate Event Hook
     * @param eventHookId
     */
  activateEventHook(eventHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Create Event Hook
     * @param eventHook
     */
  createEventHook(eventHook: EventHook, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Deactivate Event Hook
     * @param eventHookId
     */
  deactivateEventHook(eventHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Delete Event Hook
     * @param eventHookId
     */
  deleteEventHook(eventHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Get Event Hook
     * @param eventHookId
     */
  getEventHook(eventHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List Event Hooks
     */
  listEventHooks(_options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Update Event Hook
     * @param eventHookId
     * @param eventHook
     */
  updateEventHook(eventHookId: string, eventHook: EventHook, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Verify Event Hook
     * @param eventHookId
     */
  verifyEventHook(eventHookId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class EventHookApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateEventHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateEventHook(response: ResponseContext): Promise<EventHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEventHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  createEventHook(response: ResponseContext): Promise<EventHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateEventHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateEventHook(response: ResponseContext): Promise<EventHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEventHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteEventHook(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEventHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEventHook(response: ResponseContext): Promise<EventHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEventHooks
     * @throws ApiException if the response code was not in [200, 299]
     */
  listEventHooks(response: ResponseContext): Promise<Array<EventHook>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEventHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateEventHook(response: ResponseContext): Promise<EventHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyEventHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyEventHook(response: ResponseContext): Promise<EventHook>;
}
