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
import { CustomTelephonyProviderCredentialCreateRequest } from '../models/CustomTelephonyProviderCredentialCreateRequest';
import { CustomTelephonyProviderCredentialResponse } from '../models/CustomTelephonyProviderCredentialResponse';
import { CustomTelephonyProviderCredentialSendTestRequest } from '../models/CustomTelephonyProviderCredentialSendTestRequest';
import { CustomTelephonyProviderCredentialUpdateRequest } from '../models/CustomTelephonyProviderCredentialUpdateRequest';
import { CustomTelephonyProviderCredentialsResponse } from '../models/CustomTelephonyProviderCredentialsResponse';
/**
 * no description
 */
export declare class CustomTelephonyProviderApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a custom telephony provider by its ID. You must activate a provider before it can be used.
     * Activate a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  activateCustomTelephonyCredential(customTelephonyProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a custom telephony provider with the provided credentials
     * Create a custom telephony provider
     * @param customTelephonyProviderCredentialCreateRequest
     */
  createCustomTelephonyProviderCredentials(customTelephonyProviderCredentialCreateRequest: CustomTelephonyProviderCredentialCreateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a custom telephony provider by its ID. Keep the following points in mind when you deactivate a provider: * You must deactivate a provider before deleting it. * If you have two telephony providers configured, and both are active, you can only deactivate the secondary provider. The second provider is the one that isn\'t set as the primary provider.
     * Deactivate a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  deactivateCustomTelephonyCredential(customTelephonyProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a custom telephony provider by its ID.  Before you delete a provider, ensure that it is [deactivated](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/CustomTelephonyProvider/#tag/CustomTelephonyProvider/operation/deactivateCustomTelephonyCredential). Consider setting up another telephony provider if you still plan to use telephony in your org. See [Set up an external telephony provider](https://help.okta.com/okta_help.htm?type=oie&id=about-telephony).
     * Delete a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  deleteCustomTelephonyProviderCredential(customTelephonyProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the details of a custom telephony provider by its ID
     * Retrieve a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  getCustomTelephonyProviderCredential(customTelephonyProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all custom telephony providers that are configured in your org
     * List all custom telephony providers
     */
  listAllCustomTelephonyProviderCredentials(_options?: Configuration): Promise<RequestContext>;
  /**
     * Sends a test message (SMS or call) using the specified custom telephony provider to verify that the provider is configured correctly.  You must provide a valid phone number and country code to send the test message. Send it to a phone number that you have access to so you can confirm that the message was received.
     * Send a test message from a custom telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     * @param customTelephonyProviderCredentialSendTestRequest
     */
  sendTestCustomTelephonyProviderCredential(customTelephonyProviderId: string, customTelephonyProviderCredentialSendTestRequest: CustomTelephonyProviderCredentialSendTestRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Sets a custom telephony provider as the primary telephony provider for the org. You can only set one provider as a primary provider at a time.
     * Set a custom telephony provider as a primary telephony provider
     * @param customTelephonyProviderId The ID of the custom telephony provider
     */
  setAsPrimaryCustomTelephonyCredential(customTelephonyProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the credentials of an existing custom telephony provider
     * Update a custom telephony provider credential
     * @param customTelephonyProviderId The ID of the custom telephony provider
     * @param customTelephonyProviderCredentialUpdateRequest
     */
  updateCustomTelephonyProviderCredential(customTelephonyProviderId: string, customTelephonyProviderCredentialUpdateRequest: CustomTelephonyProviderCredentialUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomTelephonyProviderApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateCustomTelephonyCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateCustomTelephonyCredential(response: ResponseContext): Promise<CustomTelephonyProviderCredentialResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomTelephonyProviderCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
  createCustomTelephonyProviderCredentials(response: ResponseContext): Promise<CustomTelephonyProviderCredentialResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateCustomTelephonyCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateCustomTelephonyCredential(response: ResponseContext): Promise<CustomTelephonyProviderCredentialResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomTelephonyProviderCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteCustomTelephonyProviderCredential(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomTelephonyProviderCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCustomTelephonyProviderCredential(response: ResponseContext): Promise<CustomTelephonyProviderCredentialResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAllCustomTelephonyProviderCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAllCustomTelephonyProviderCredentials(response: ResponseContext): Promise<CustomTelephonyProviderCredentialsResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendTestCustomTelephonyProviderCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  sendTestCustomTelephonyProviderCredential(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setAsPrimaryCustomTelephonyCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  setAsPrimaryCustomTelephonyCredential(response: ResponseContext): Promise<CustomTelephonyProviderCredentialResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCustomTelephonyProviderCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateCustomTelephonyProviderCredential(response: ResponseContext): Promise<CustomTelephonyProviderCredentialResponse>;
}
