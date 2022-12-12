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
     * Creates a risk provider. A maximum of 3 providers can be created. By default, one risk provider is created by Okta.
     * Create a Risk Provider
     * @param instance
     */
  createRiskProvider(instance: RiskProvider, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a CAPTCHA instance by `riskProviderId`
     * Delete a Risk Provider
     * @param riskProviderId &#x60;id&#x60; of the risk provider
     */
  deleteRiskProvider(riskProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a risk provider by `riskProviderId`
     * Retrieve a Risk Provider
     * @param riskProviderId &#x60;id&#x60; of the risk provider
     */
  getRiskProvider(riskProviderId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Risk Providers
     * List all Risk Providers
     */
  listRiskProviders(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a risk provider by `riskProviderId`
     * Replace a Risk Provider
     * @param riskProviderId &#x60;id&#x60; of the risk provider
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
