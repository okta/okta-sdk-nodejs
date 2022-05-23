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
/**
 * no description
 */
export declare class CAPTCHAApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Adds a new CAPTCHA instance to your organization. In the current release, we only allow one CAPTCHA instance per org.
     * Create new CAPTCHA instance
     * @param instance
     */
  createCaptchaInstance(instance: CAPTCHAInstance, _options?: Configuration): Promise<RequestContext>;
  /**
     * Delete a CAPTCHA instance by `id`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
     * Delete CAPTCHA Instance
     * @param captchaId id of the CAPTCHA
     */
  deleteCaptchaInstance(captchaId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a CAPTCHA instance by `id`.
     * Get CAPTCHA Instance
     * @param captchaId id of the CAPTCHA
     */
  getCaptchaInstance(captchaId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates CAPTCHA instances in your organization with pagination. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
     * List CAPTCHA instances
     */
  listCaptchaInstances(_options?: Configuration): Promise<RequestContext>;
  /**
     * Partially update a CAPTCHA instance by `id`.
     * Partial Update CAPTCHA instance
     * @param captchaId id of the CAPTCHA
     * @param instance
     */
  partialUpdateCaptchaInstance(captchaId: string, instance: CAPTCHAInstance, _options?: Configuration): Promise<RequestContext>;
  /**
     * Update a CAPTCHA instance by `id`.
     * Update CAPTCHA instance
     * @param captchaId id of the CAPTCHA
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
     * @params response Response returned by the server for a request to getCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCaptchaInstance(response: ResponseContext): Promise<CAPTCHAInstance>;
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
     * @params response Response returned by the server for a request to partialUpdateCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  partialUpdateCaptchaInstance(response: ResponseContext): Promise<CAPTCHAInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateCaptchaInstance(response: ResponseContext): Promise<CAPTCHAInstance>;
}
