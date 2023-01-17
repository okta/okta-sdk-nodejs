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
import { ProviderType } from '../models/ProviderType';
import { PushProvider } from '../models/PushProvider';
/**
 * no description
 */
export declare class PushProviderApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new push provider
     * Create a Push Provider
     * @param pushProvider
     */
  createPushProvider(pushProvider: PushProvider, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.
     * Delete a Push Provider
     * @param pushProviderId Id of the push provider
     */
  deletePushProvider(pushProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a push provider by `pushProviderId`
     * Retrieve a Push Provider
     * @param pushProviderId Id of the push provider
     */
  getPushProvider(pushProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all push providers
     * List all Push Providers
     * @param type Filters push providers by &#x60;providerType&#x60;
     */
  listPushProviders(type?: ProviderType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a push provider by `pushProviderId`
     * Replace a Push Provider
     * @param pushProviderId Id of the push provider
     * @param pushProvider
     */
  replacePushProvider(pushProviderId: string, pushProvider: PushProvider, _options?: Configuration): Promise<RequestContext>;
}
export declare class PushProviderApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPushProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  createPushProvider(response: ResponseContext): Promise<PushProvider>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePushProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  deletePushProvider(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPushProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPushProvider(response: ResponseContext): Promise<PushProvider>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPushProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
  listPushProviders(response: ResponseContext): Promise<Array<PushProvider>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replacePushProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  replacePushProvider(response: ResponseContext): Promise<PushProvider>;
}
