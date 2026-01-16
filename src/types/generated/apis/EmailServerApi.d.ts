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
import { EmailServerListResponse } from '../models/EmailServerListResponse';
import { EmailServerPost } from '../models/EmailServerPost';
import { EmailServerRequest } from '../models/EmailServerRequest';
import { EmailServerResponse } from '../models/EmailServerResponse';
import { EmailTestAddresses } from '../models/EmailTestAddresses';
/**
 * no description
 */
export declare class EmailServerApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a custom email SMTP server configuration for your org
     * Create a custom SMTP server
     * @param emailServerPost
     */
  createEmailServer(emailServerPost?: EmailServerPost, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the specified custom SMTP server configuration
     * Delete an SMTP server configuration
     * @param emailServerId
     */
  deleteEmailServer(emailServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the specified custom SMTP server configuration
     * Retrieve an SMTP server configuration
     * @param emailServerId
     */
  getEmailServer(emailServerId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the enrolled custom SMTP server configurations
     * List all enrolled SMTP servers
     */
  listEmailServers(_options?: Configuration): Promise<RequestContext>;
  /**
     * Tests the specified custom SMTP Server configuration
     * Test an SMTP server configuration
     * @param emailServerId
     * @param emailTestAddresses
     */
  testEmailServer(emailServerId: string, emailTestAddresses?: EmailTestAddresses, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the specified custom SMTP server configuration
     * Update an SMTP server configuration
     * @param emailServerId
     * @param emailServerRequest
     */
  updateEmailServer(emailServerId: string, emailServerRequest?: EmailServerRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class EmailServerApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEmailServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  createEmailServer(response: ResponseContext): Promise<EmailServerResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEmailServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteEmailServer(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEmailServer(response: ResponseContext): Promise<EmailServerResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEmailServers
     * @throws ApiException if the response code was not in [200, 299]
     */
  listEmailServers(response: ResponseContext): Promise<EmailServerListResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testEmailServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  testEmailServer(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEmailServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateEmailServer(response: ResponseContext): Promise<EmailServerResponse>;
}
