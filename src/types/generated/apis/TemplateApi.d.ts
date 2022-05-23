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
import { SmsTemplate } from '../models/SmsTemplate';
import { SmsTemplateType } from '../models/SmsTemplateType';
/**
 * no description
 */
export declare class TemplateApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Adds a new custom SMS template to your organization.
     * Add SMS Template
     * @param smsTemplate
     */
  createSmsTemplate(smsTemplate: SmsTemplate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Removes an SMS template.
     * Remove SMS Template
     * @param templateId
     */
  deleteSmsTemplate(templateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a specific template by `id`
     * Get SMS Template
     * @param templateId
     */
  getSmsTemplate(templateId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.
     * List SMS Templates
     * @param templateType
     */
  listSmsTemplates(templateType?: SmsTemplateType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates only some of the SMS template properties:
     * Partial SMS Template Update
     * @param templateId
     * @param smsTemplate
     */
  partialUpdateSmsTemplate(templateId: string, smsTemplate: SmsTemplate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the SMS template.
     * Update SMS Template
     * @param templateId
     * @param smsTemplate
     */
  updateSmsTemplate(templateId: string, smsTemplate: SmsTemplate, _options?: Configuration): Promise<RequestContext>;
}
export declare class TemplateApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSmsTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
  createSmsTemplate(response: ResponseContext): Promise<SmsTemplate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSmsTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteSmsTemplate(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSmsTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSmsTemplate(response: ResponseContext): Promise<SmsTemplate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSmsTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSmsTemplates(response: ResponseContext): Promise<Array<SmsTemplate>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to partialUpdateSmsTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
  partialUpdateSmsTemplate(response: ResponseContext): Promise<SmsTemplate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSmsTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateSmsTemplate(response: ResponseContext): Promise<SmsTemplate>;
}
