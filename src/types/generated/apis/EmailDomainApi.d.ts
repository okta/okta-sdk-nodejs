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
import { EmailDomain } from '../models/EmailDomain';
import { EmailDomainResponse } from '../models/EmailDomainResponse';
import { EmailDomainResponseWithEmbedded } from '../models/EmailDomainResponseWithEmbedded';
import { UpdateEmailDomain } from '../models/UpdateEmailDomain';
/**
 * no description
 */
export declare class EmailDomainApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates an Email Domain in your org
     * Create an email domain
     * @param emailDomain
     * @param expand Specifies additional metadata to be included in the response
     */
  createEmailDomain(emailDomain: EmailDomain, expand?: Array<'brands'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an Email Domain by `emailDomainId`
     * Delete an email domain
     * @param emailDomainId
     * @param expand Specifies additional metadata to be included in the response
     */
  deleteEmailDomain(emailDomainId: string, expand?: Array<'brands'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an Email Domain by `emailDomainId`
     * Retrieve an email domain
     * @param emailDomainId
     * @param expand Specifies additional metadata to be included in the response
     */
  getEmailDomain(emailDomainId: string, expand?: Array<'brands'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the Email Domains in your org
     * List all email domains
     * @param expand Specifies additional metadata to be included in the response
     */
  listEmailDomains(expand?: Array<'brands'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces associated username and sender display name by `emailDomainId`
     * Replace an email domain
     * @param emailDomainId
     * @param updateEmailDomain
     * @param expand Specifies additional metadata to be included in the response
     */
  replaceEmailDomain(emailDomainId: string, updateEmailDomain: UpdateEmailDomain, expand?: Array<'brands'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies an Email Domain by `emailDomainId`
     * Verify an email domain
     * @param emailDomainId
     */
  verifyEmailDomain(emailDomainId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class EmailDomainApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEmailDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  createEmailDomain(response: ResponseContext): Promise<EmailDomainResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEmailDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteEmailDomain(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEmailDomain(response: ResponseContext): Promise<EmailDomainResponseWithEmbedded>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEmailDomains
     * @throws ApiException if the response code was not in [200, 299]
     */
  listEmailDomains(response: ResponseContext): Promise<Array<EmailDomainResponseWithEmbedded>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceEmailDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceEmailDomain(response: ResponseContext): Promise<EmailDomainResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyEmailDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyEmailDomain(response: ResponseContext): Promise<EmailDomainResponse>;
}
