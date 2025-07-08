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
import { RequestContext, ResponseContext, HttpFile } from '../http/http';
import { APIServiceIntegrationInstance } from '../models/APIServiceIntegrationInstance';
import { APIServiceIntegrationInstanceSecret } from '../models/APIServiceIntegrationInstanceSecret';
import { PostAPIServiceIntegrationInstance } from '../models/PostAPIServiceIntegrationInstance';
import { PostAPIServiceIntegrationInstanceRequest } from '../models/PostAPIServiceIntegrationInstanceRequest';
import { SubmissionRequest } from '../models/SubmissionRequest';
import { SubmissionResponse } from '../models/SubmissionResponse';
import { TestInfo } from '../models/TestInfo';
/**
 * no description
 */
export declare class IntegrationsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an API Service Integration instance Secret by `secretId`
     * Activate an API service integration instance secret
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
     */
  activateApiServiceIntegrationInstanceSecret(apiServiceId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates and authorizes an API Service Integration instance
     * Create an API service integration instance
     * @param postAPIServiceIntegrationInstanceRequest
     */
  createApiServiceIntegrationInstance(postAPIServiceIntegrationInstanceRequest: PostAPIServiceIntegrationInstanceRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an API Service Integration instance Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects.
     * Create an API service integration instance secret
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     */
  createApiServiceIntegrationInstanceSecret(apiServiceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an OIN Integration submission for verification and publication
     * Create an OIN integration
     * @param submissionRequest
     */
  createSubmission(submissionRequest?: SubmissionRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an API Service Integration instance Secret by `secretId`
     * Deactivate an API service integration instance secret
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
     */
  deactivateApiServiceIntegrationInstanceSecret(apiServiceId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an API Service Integration instance by `id`. This operation also revokes access to scopes that were previously granted to this API Service Integration instance.
     * Delete an API service integration instance
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     */
  deleteApiServiceIntegrationInstance(apiServiceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an API Service Integration instance Secret by `secretId`. You can only delete an inactive Secret.
     * Delete an API service integration instance secret
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     * @param secretId &#x60;id&#x60; of the API Service Integration instance Secret
     */
  deleteApiServiceIntegrationInstanceSecret(apiServiceId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an API Service Integration instance by `id`
     * Retrieve an API service integration instance
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     */
  getApiServiceIntegrationInstance(apiServiceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an OIN Integration by ID
     * Retrieve an OIN integration
     * @param submissionId OIN Integration ID
     */
  getSubmissionByOperationId(submissionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the testing information for an existing OIN Integration
     * Retrieve an OIN integration testing information
     * @param submissionId OIN Integration ID
     */
  getSubmissionTestInfo(submissionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all client secrets for an API Service Integration instance by `apiServiceId`
     * List all API service integration instance secrets
     * @param apiServiceId &#x60;id&#x60; of the API Service Integration instance
     */
  listApiServiceIntegrationInstanceSecrets(apiServiceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all API Service Integration instances with a pagination option
     * List all API service integration instances
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     */
  listApiServiceIntegrationInstances(after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all OIN Integration submissions created through the org
     * List all OIN integrations
     * @param limit A limit on the number of objects to return
     * @param after Specify the pagination cursor (OIN Integration instance &#x60;id&#x60;) for the next page of OIN Integrations.
     */
  listSubmissions(limit?: number, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the properties of an OIN Integration identified by ID
     * Replace an OIN integration
     * @param submissionId OIN Integration ID
     * @param submissionRequest
     */
  replaceSubmission(submissionId: string, submissionRequest?: SubmissionRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Submits an OIN Integration for Okta verification
     * Submit an OIN integration
     * @param submissionId OIN Integration ID
     */
  submitSubmission(submissionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads a logo to your org. The image uploaded must adhere to the [OIN logo guidelines](https://developer.okta.com/docs/guides/submit-app-prereq/main/#logo-guidelines). Use the URL returned in the response header to specify the [`logo`](/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission!path=logo&t=request) parameter when you [create your OIN Integration submission](/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission). This logo appears in the OIN catalog for your app integration.
     * Upload an OIN integration logo
     * @param file
     */
  uploadSubmissionLogo(file?: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Upserts (adds or replaces) testing information for an OIN Integration
     * Upsert an OIN integration testing information
     * @param submissionId OIN Integration ID
     * @param testInfo
     */
  upsertSubmissionTestInfo(submissionId: string, testInfo?: TestInfo, _options?: Configuration): Promise<RequestContext>;
}
export declare class IntegrationsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateApiServiceIntegrationInstanceSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateApiServiceIntegrationInstanceSecret(response: ResponseContext): Promise<APIServiceIntegrationInstanceSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApiServiceIntegrationInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  createApiServiceIntegrationInstance(response: ResponseContext): Promise<PostAPIServiceIntegrationInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApiServiceIntegrationInstanceSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  createApiServiceIntegrationInstanceSecret(response: ResponseContext): Promise<APIServiceIntegrationInstanceSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSubmission
     * @throws ApiException if the response code was not in [200, 299]
     */
  createSubmission(response: ResponseContext): Promise<SubmissionResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateApiServiceIntegrationInstanceSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateApiServiceIntegrationInstanceSecret(response: ResponseContext): Promise<APIServiceIntegrationInstanceSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApiServiceIntegrationInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteApiServiceIntegrationInstance(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApiServiceIntegrationInstanceSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteApiServiceIntegrationInstanceSecret(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiServiceIntegrationInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
  getApiServiceIntegrationInstance(response: ResponseContext): Promise<APIServiceIntegrationInstance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubmissionByOperationId
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSubmissionByOperationId(response: ResponseContext): Promise<SubmissionResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubmissionTestInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSubmissionTestInfo(response: ResponseContext): Promise<TestInfo>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApiServiceIntegrationInstanceSecrets
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApiServiceIntegrationInstanceSecrets(response: ResponseContext): Promise<Array<APIServiceIntegrationInstanceSecret>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApiServiceIntegrationInstances
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApiServiceIntegrationInstances(response: ResponseContext): Promise<Array<APIServiceIntegrationInstance>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSubmissions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSubmissions(response: ResponseContext): Promise<Array<SubmissionResponse>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceSubmission
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceSubmission(response: ResponseContext): Promise<SubmissionResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitSubmission
     * @throws ApiException if the response code was not in [200, 299]
     */
  submitSubmission(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadSubmissionLogo
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadSubmissionLogo(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertSubmissionTestInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
  upsertSubmissionTestInfo(response: ResponseContext): Promise<TestInfo>;
}
