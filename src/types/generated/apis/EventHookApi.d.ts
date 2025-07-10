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
     * Activates the event hook that matches the provided `id`
     * Activate an event hook
     * @param eventHookId &#x60;id&#x60; of the Event Hook
     */
  activateEventHook(eventHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new event hook for your organization in `ACTIVE` status. You pass an event hook object in the JSON payload of your request. That object represents the set of required information about the event hook you\'re registering, including:   * The URI of your external service   * The [events](https://developer.okta.com/docs/reference/api/event-types/) in Okta you want to subscribe to   * An optional event hook filter that can reduce the number of event hook calls. This is a self-service Early Access (EA) feature.     See [Create an event hook filter](https://developer.okta.com/docs/concepts/event-hooks/#create-an-event-hook-filter).      Additionally, you can specify a secret API key for Okta to pass to your external service endpoint for security verification. Note that the API key you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs. Optionally, you can specify extra headers that Okta passes to your external service with each call. Your external service must use a valid HTTPS endpoint.
     * Create an event hook
     * @param eventHook
     */
  createEventHook(eventHook: EventHook, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates the event hook that matches the provided `id`
     * Deactivate an event hook
     * @param eventHookId &#x60;id&#x60; of the Event Hook
     */
  deactivateEventHook(eventHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the event hook that matches the provided `id`. After deletion, the event hook is unrecoverable. As a safety precaution, you can only delete event hooks with a status of `INACTIVE`.
     * Delete an event hook
     * @param eventHookId &#x60;id&#x60; of the Event Hook
     */
  deleteEventHook(eventHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an event hook
     * Retrieve an event hook
     * @param eventHookId &#x60;id&#x60; of the Event Hook
     */
  getEventHook(eventHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all event hooks
     * List all event hooks
     */
  listEventHooks(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an event hook. Okta validates the new properties before replacing the existing values. Some event hook properties are immutable and can\'t be updated. Refer to the parameter description in the request body schema.  >**Note:** Updating the `channel` property requires you to verify the hook again.
     * Replace an event hook
     * @param eventHookId &#x60;id&#x60; of the Event Hook
     * @param eventHook
     */
  replaceEventHook(eventHookId: string, eventHook: EventHook, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies that the event hook matches the provided `eventHookId`. To verify ownership, your endpoint must send information back to Okta in JSON format. See [Event hooks](https://developer.okta.com/docs/concepts/event-hooks/#one-time-verification-request).  Only `ACTIVE` and `VERIFIED` event hooks can receive events from Okta.  If a response is not received within 3 seconds, the outbound request times out. One retry is attempted after a timeout or error response. If a successful response still isn\'t received, this operation returns a 400 error with more information about the failure.
     * Verify an event hook
     * @param eventHookId &#x60;id&#x60; of the Event Hook
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
     * @params response Response returned by the server for a request to replaceEventHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceEventHook(response: ResponseContext): Promise<EventHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyEventHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyEventHook(response: ResponseContext): Promise<EventHook>;
}
