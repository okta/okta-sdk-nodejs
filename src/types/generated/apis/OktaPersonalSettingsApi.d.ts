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
import { OktaPersonalAdminFeatureSettings } from '../models/OktaPersonalAdminFeatureSettings';
import { PersonalAppsBlockList } from '../models/PersonalAppsBlockList';
/**
 * no description
 */
export declare class OktaPersonalSettingsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Lists all blocked email domains which are excluded from app migration
     * List all blocked email domains
     */
  listPersonalAppsExportBlockList(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the list of blocked email domains which are excluded from app migration
     * Replace the blocked email domains
     * @param personalAppsBlockList
     */
  replaceBlockedEmailDomains(personalAppsBlockList: PersonalAppsBlockList, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces Okta Personal admin settings in a Workforce org
     * Replace the Okta Personal admin settings
     * @param oktaPersonalAdminFeatureSettings
     */
  replaceOktaPersonalAdminSettings(oktaPersonalAdminFeatureSettings: OktaPersonalAdminFeatureSettings, _options?: Configuration): Promise<RequestContext>;
}
export declare class OktaPersonalSettingsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPersonalAppsExportBlockList
     * @throws ApiException if the response code was not in [200, 299]
     */
  listPersonalAppsExportBlockList(response: ResponseContext): Promise<PersonalAppsBlockList>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceBlockedEmailDomains
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceBlockedEmailDomains(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceOktaPersonalAdminSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceOktaPersonalAdminSettings(response: ResponseContext): Promise<void>;
}
