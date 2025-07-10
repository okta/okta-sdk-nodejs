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
import { AdminConsoleSettings } from '../models/AdminConsoleSettings';
/**
 * no description
 */
export declare class OktaApplicationSettingsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the settings for an Okta app (also known as an Okta first-party app)
     * Retrieve the Okta application settings
     * @param appName The key name for the Okta app.&lt;br&gt; Supported apps:   * Okta Admin Console (&#x60;admin-console&#x60;)
     */
  getFirstPartyAppSettings(appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the settings for an Okta app (also known as an Okta first-party app)
     * Replace the Okta application settings
     * @param appName The key name for the Okta app.&lt;br&gt; Supported apps:   * Okta Admin Console (&#x60;admin-console&#x60;)
     * @param adminConsoleSettings
     */
  replaceFirstPartyAppSettings(appName: string, adminConsoleSettings: AdminConsoleSettings, _options?: Configuration): Promise<RequestContext>;
}
export declare class OktaApplicationSettingsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFirstPartyAppSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getFirstPartyAppSettings(response: ResponseContext): Promise<AdminConsoleSettings>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceFirstPartyAppSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceFirstPartyAppSettings(response: ResponseContext): Promise<AdminConsoleSettings>;
}
