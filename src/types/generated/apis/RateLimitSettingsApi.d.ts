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
import { PerClientRateLimitSettings } from '../models/PerClientRateLimitSettings';
import { RateLimitAdminNotifications } from '../models/RateLimitAdminNotifications';
import { RateLimitWarningThresholdRequest } from '../models/RateLimitWarningThresholdRequest';
import { RateLimitWarningThresholdResponse } from '../models/RateLimitWarningThresholdResponse';
/**
 * no description
 */
export declare class RateLimitSettingsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the currently configured Rate Limit Admin Notification Settings
     * Retrieve the rate limit admin notification settings
     */
  getRateLimitSettingsAdminNotifications(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the currently configured Per-Client Rate Limit Settings
     * Retrieve the per-client rate limit settings
     */
  getRateLimitSettingsPerClient(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the currently configured threshold for warning notifications when the API\'s rate limit is exceeded
     * Retrieve the rate limit warning threshold percentage
     */
  getRateLimitSettingsWarningThreshold(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the Rate Limit Admin Notification Settings and returns the configured properties
     * Replace the rate limit admin notification settings
     * @param rateLimitAdminNotifications
     */
  replaceRateLimitSettingsAdminNotifications(rateLimitAdminNotifications: RateLimitAdminNotifications, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the Per-Client Rate Limit Settings and returns the configured properties
     * Replace the per-client rate limit settings
     * @param perClientRateLimitSettings
     */
  replaceRateLimitSettingsPerClient(perClientRateLimitSettings: PerClientRateLimitSettings, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the Rate Limit Warning Threshold Percentage and returns the configured property
     * Replace the rate limit warning threshold percentage
     * @param rateLimitWarningThreshold
     */
  replaceRateLimitSettingsWarningThreshold(rateLimitWarningThreshold?: RateLimitWarningThresholdRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RateLimitSettingsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRateLimitSettingsAdminNotifications
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRateLimitSettingsAdminNotifications(response: ResponseContext): Promise<RateLimitAdminNotifications>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRateLimitSettingsPerClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRateLimitSettingsPerClient(response: ResponseContext): Promise<PerClientRateLimitSettings>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRateLimitSettingsWarningThreshold
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRateLimitSettingsWarningThreshold(response: ResponseContext): Promise<RateLimitWarningThresholdResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceRateLimitSettingsAdminNotifications
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceRateLimitSettingsAdminNotifications(response: ResponseContext): Promise<RateLimitAdminNotifications>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceRateLimitSettingsPerClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceRateLimitSettingsPerClient(response: ResponseContext): Promise<PerClientRateLimitSettings>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceRateLimitSettingsWarningThreshold
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceRateLimitSettingsWarningThreshold(response: ResponseContext): Promise<RateLimitWarningThresholdResponse>;
}
