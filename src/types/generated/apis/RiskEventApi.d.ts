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
import { RiskEvent } from '../models/RiskEvent';
/**
 * no description
 */
export declare class RiskEventApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Sends multiple risk events to Okta. This API is intended for Risk Providers. This API has a rate limit of 30 requests per minute. The caller should include multiple Risk Events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. If a client has more risk signals to send than what the API supports, we recommend prioritizing posting high risk signals.
     * Send multiple Risk Events
     * @param instance
     */
  sendRiskEvents(instance: Array<RiskEvent>, _options?: Configuration): Promise<RequestContext>;
}
export declare class RiskEventApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendRiskEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
  sendRiskEvents(response: ResponseContext): Promise<void>;
}
