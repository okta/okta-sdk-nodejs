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
import { ThreatInsightConfiguration } from '../models/ThreatInsightConfiguration';
/**
 * no description
 */
export declare class ThreatInsightApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves current ThreatInsight configuration
     * Retrieve the ThreatInsight Configuration
     */
  getCurrentConfiguration(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates ThreatInsight configuration
     * Update the ThreatInsight Configuration
     * @param threatInsightConfiguration
     */
  updateConfiguration(threatInsightConfiguration: ThreatInsightConfiguration, _options?: Configuration): Promise<RequestContext>;
}
export declare class ThreatInsightApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCurrentConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCurrentConfiguration(response: ResponseContext): Promise<ThreatInsightConfiguration>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateConfiguration(response: ResponseContext): Promise<ThreatInsightConfiguration>;
}
