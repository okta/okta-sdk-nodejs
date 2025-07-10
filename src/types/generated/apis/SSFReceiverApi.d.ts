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
import { SecurityEventsProviderRequest } from '../models/SecurityEventsProviderRequest';
import { SecurityEventsProviderResponse } from '../models/SecurityEventsProviderResponse';
/**
 * no description
 */
export declare class SSFReceiverApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a Security Events Provider instance by setting its status to `ACTIVE`. This operation resumes the flow of events from the Security Events Provider to Okta.
     * Activate a security events provider
     * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
     */
  activateSecurityEventsProviderInstance(securityEventProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a Security Events Provider instance
     * Create a security events provider
     * @param instance
     */
  createSecurityEventsProviderInstance(instance: SecurityEventsProviderRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a Security Events Provider instance by setting its status to `INACTIVE`. This operation stops the flow of events from the Security Events Provider to Okta.
     * Deactivate a security events provider
     * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
     */
  deactivateSecurityEventsProviderInstance(securityEventProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Security Events Provider instance specified by `id`
     * Delete a security events provider
     * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
     */
  deleteSecurityEventsProviderInstance(securityEventProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the Security Events Provider instance specified by `id`
     * Retrieve the security events provider
     * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
     */
  getSecurityEventsProviderInstance(securityEventProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Security Events Provider instances
     * List all security events providers
     */
  listSecurityEventsProviderInstances(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a Security Events Provider instance specified by `id`
     * Replace a security events provider
     * @param securityEventProviderId &#x60;id&#x60; of the Security Events Provider instance
     * @param instance
     */
  replaceSecurityEventsProviderInstance(securityEventProviderId: string, instance: SecurityEventsProviderRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class SSFReceiverApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateSecurityEventsProviderInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateSecurityEventsProviderInstance(response: ResponseContext): Promise<SecurityEventsProviderResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSecurityEventsProviderInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  createSecurityEventsProviderInstance(response: ResponseContext): Promise<SecurityEventsProviderResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateSecurityEventsProviderInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateSecurityEventsProviderInstance(response: ResponseContext): Promise<SecurityEventsProviderResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSecurityEventsProviderInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteSecurityEventsProviderInstance(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSecurityEventsProviderInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSecurityEventsProviderInstance(response: ResponseContext): Promise<SecurityEventsProviderResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSecurityEventsProviderInstances
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSecurityEventsProviderInstances(response: ResponseContext): Promise<Array<SecurityEventsProviderResponse>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceSecurityEventsProviderInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceSecurityEventsProviderInstance(response: ResponseContext): Promise<SecurityEventsProviderResponse>;
}
