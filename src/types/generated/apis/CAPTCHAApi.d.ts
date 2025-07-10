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
import { CAPTCHAInstance } from '../models/CAPTCHAInstance';
import { OrgCAPTCHASettings } from '../models/OrgCAPTCHASettings';
/**
 * no description
 */
export declare class CAPTCHAApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new CAPTCHA instance. Currently, an org can only configure a single CAPTCHA instance.
     * Create a CAPTCHA instance
     * @param instance
     */
  createCaptchaInstance(instance: CAPTCHAInstance, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a specified CAPTCHA instance > **Note:** If your CAPTCHA instance is still associated with your org, the request fails. You must first update your Org-wide CAPTCHA settings to remove the CAPTCHA instance.
     * Delete a CAPTCHA instance
     * @param captchaId The unique key used to identify your CAPTCHA instance
     */
  deleteCaptchaInstance(captchaId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the CAPTCHA settings object for your organization
     * Delete the org-wide CAPTCHA settings
     */
  deleteOrgCaptchaSettings(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the properties of a specified CAPTCHA instance
     * Retrieve a CAPTCHA instance
     * @param captchaId The unique key used to identify your CAPTCHA instance
     */
  getCaptchaInstance(captchaId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the CAPTCHA settings object for your organization > **Note**: If the current organization hasn\'t configured CAPTCHA Settings, the request returns an empty object.
     * Retrieve the org-wide CAPTCHA settings
     */
  getOrgCaptchaSettings(_options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
     * List all CAPTCHA instances
     */
  listCaptchaInstances(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the properties for a specified CAPTCHA instance
     * Replace a CAPTCHA instance
     * @param captchaId The unique key used to identify your CAPTCHA instance
     * @param instance
     */
  replaceCaptchaInstance(captchaId: string, instance: CAPTCHAInstance, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the CAPTCHA settings object for your organization > **Note**: You can disable CAPTCHA for your organization by setting `captchaId` and `enabledPages` to `null`.
     * Replace the org-wide CAPTCHA settings
     * @param orgCAPTCHASettings
     */
  replacesOrgCaptchaSettings(orgCAPTCHASettings: OrgCAPTCHASettings, _options?: Configuration): Promise<RequestContext>;
  /**
     * Partially updates the properties of a specified CAPTCHA instance
     * Update a CAPTCHA instance
     * @param captchaId The unique key used to identify your CAPTCHA instance
     * @param instance
     */
  updateCaptchaInstance(captchaId: string, instance: CAPTCHAInstance, _options?: Configuration): Promise<RequestContext>;
}
export declare class CAPTCHAApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  createCaptchaInstance(response: ResponseContext): Promise<CAPTCHAInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteCaptchaInstance(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOrgCaptchaSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteOrgCaptchaSettings(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCaptchaInstance(response: ResponseContext): Promise<CAPTCHAInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrgCaptchaSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOrgCaptchaSettings(response: ResponseContext): Promise<OrgCAPTCHASettings>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCaptchaInstances
     * @throws ApiException if the response code was not in [200, 299]
     */
  listCaptchaInstances(response: ResponseContext): Promise<Array<CAPTCHAInstance>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceCaptchaInstance(response: ResponseContext): Promise<CAPTCHAInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replacesOrgCaptchaSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  replacesOrgCaptchaSettings(response: ResponseContext): Promise<OrgCAPTCHASettings>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateCaptchaInstance(response: ResponseContext): Promise<CAPTCHAInstance>;
}
