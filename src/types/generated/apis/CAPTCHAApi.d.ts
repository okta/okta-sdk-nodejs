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
     * Creates a new CAPTCHA instance. In the current release, we only allow one CAPTCHA instance per org.
     * Create a CAPTCHA instance
     * @param instance
     */
  createCaptchaInstance(instance: CAPTCHAInstance, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.
     * Delete a CAPTCHA Instance
     * @param captchaId id of the CAPTCHA
     */
  deleteCaptchaInstance(captchaId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a CAPTCHA instance by `captchaId`
     * Retrieve a CAPTCHA Instance
     * @param captchaId id of the CAPTCHA
     */
  getCaptchaInstance(captchaId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all CAPTCHA instances with pagination support. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
     * List all CAPTCHA instances
     */
  listCaptchaInstances(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a CAPTCHA instance by `captchaId`
     * Replace a CAPTCHA instance
     * @param captchaId id of the CAPTCHA
     * @param instance
     */
  replaceCaptchaInstance(captchaId: string, instance: CAPTCHAInstance, _options?: Configuration): Promise<RequestContext>;
  /**
     * Partially updates a CAPTCHA instance by `captchaId`
     * Update a CAPTCHA instance
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
     * @params response Response returned by the server for a request to replaceCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceCaptchaInstance(response: ResponseContext): Promise<CAPTCHAInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCaptchaInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateCaptchaInstance(response: ResponseContext): Promise<CAPTCHAInstance>;
}
