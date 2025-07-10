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
import { RiskProvider } from '../models/RiskProvider';
/**
 * no description
 */
export declare class RiskProviderApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a risk provider object. You can create a maximum of three risk provider objects.
     * Create a risk provider
     * @param instance
     */
  createRiskProvider(instance: RiskProvider, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a risk provider object by its ID
     * Delete a risk provider
     * @param riskProviderId &#x60;id&#x60; of the risk provider object
     */
  deleteRiskProvider(riskProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a risk provider object by ID
     * Retrieve a risk provider
     * @param riskProviderId &#x60;id&#x60; of the risk provider object
     */
  getRiskProvider(riskProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all risk provider objects
     * List all risk providers
     */
  listRiskProviders(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the properties for a given risk provider object ID
     * Replace a risk provider
     * @param riskProviderId &#x60;id&#x60; of the risk provider object
     * @param instance
     */
  replaceRiskProvider(riskProviderId: string, instance: RiskProvider, _options?: Configuration): Promise<RequestContext>;
}
export declare class RiskProviderApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRiskProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  createRiskProvider(response: ResponseContext): Promise<RiskProvider>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRiskProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteRiskProvider(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRiskProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRiskProvider(response: ResponseContext): Promise<RiskProvider>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRiskProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRiskProviders(response: ResponseContext): Promise<Array<RiskProvider>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceRiskProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceRiskProvider(response: ResponseContext): Promise<RiskProvider>;
}
