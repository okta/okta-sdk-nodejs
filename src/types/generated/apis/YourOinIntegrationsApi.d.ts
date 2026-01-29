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
import { AuthSettings } from '../models/AuthSettings';
import { AvailableActions } from '../models/AvailableActions';
import { SubmissionActions } from '../models/SubmissionActions';
import { SubmissionCapabilities } from '../models/SubmissionCapabilities';
import { SubmissionRequest } from '../models/SubmissionRequest';
import { SubmissionResponse } from '../models/SubmissionResponse';
import { TenantSettings } from '../models/TenantSettings';
import { TestInfo } from '../models/TestInfo';
import { VerifyActions200Response } from '../models/VerifyActions200Response';
/**
 * no description
 */
export declare class YourOinIntegrationsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates an OIN Integration submission for verification and publication
     * Create an OIN integration
     * @param submissionRequest
     */
  createSubmission(submissionRequest?: SubmissionRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves all actions for a specific capability in an OIN Integration submission
     * Retrieve all actions for OIN integration
     * @param submissionId OIN Integration ID
     * @param capability Capability
     */
  getSubmissionActions(submissionId: string, capability: 'sso' | 'universal_logout' | 'provisioning' | 'entitlements' | 'shared', _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the authentication settings for an OIN Integration submission
     * Retrieve the authentication settings
     * @param submissionId OIN Integration ID
     */
  getSubmissionAuthSettings(submissionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an OIN Integration by ID
     * Retrieve an OIN integration
     * @param submissionId OIN Integration ID
     */
  getSubmissionByOperationId(submissionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the tenant settings for an OIN Integration submission
     * Retrieve the tenant settings
     * @param submissionId OIN Integration ID
     */
  getSubmissionTenantSettings(submissionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the testing information for an existing OIN Integration
     * Retrieve an OIN integration testing information
     * @param submissionId OIN Integration ID
     */
  getSubmissionTestInfo(submissionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all available actions from an actions provider (such as Workflows) for a specific OIN integration
     * List all available actions for an OIN integration
     * @param submissionId OIN Integration ID
     * @param capability Capability
     * @param actionsProviderType Actions provider type
     */
  listAvailableActions(submissionId: string, capability: 'sso' | 'universal_logout' | 'provisioning' | 'entitlements' | 'shared', actionsProviderType: 'workflows', _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all capabilities for an OIN Integration submission
     * List all supported capabilities
     * @param submissionId OIN Integration ID
     */
  listSubmissionCapabilities(submissionId: string, _options?: Configuration): Promise<RequestContext>;
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
     * Uploads a default logo to the OIN submission. The image must adhere to the [OIN logo guidelines](https://developer.okta.com/docs/guides/submit-app-prereq/main/#logo-guidelines). Use the URL returned in the response header to specify the [`logo`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission!path=logo&t=request) parameter when you [create your OIN Integration submission](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission). This logo appears in the OIN catalog for your app integration.
     * Upload a default logo for an OIN integration
     * @param file
     */
  uploadSubmissionDefaultLogo(file?: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads a logo to your org. The image uploaded must adhere to the [OIN logo guidelines](https://developer.okta.com/docs/guides/submit-app-prereq/main/#logo-guidelines). Use the URL returned in the response header to specify the [`logo`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission!path=logo&t=request) parameter when you [create your OIN Integration submission](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/YourOinIntegrations/#tag/YourOinIntegrations/operation/createSubmission). This logo appears in the OIN catalog for your app integration.
     * Upload an OIN integration logo
     * @param file
     */
  uploadSubmissionLogo(file?: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Upserts (adds or replaces) actions for a specific capability in an OIN Integration submission
     * Upsert the submission actions
     * @param submissionId OIN Integration ID
     * @param capability Capability
     * @param submissionActions
     */
  upsertSubmissionActions(submissionId: string, capability: 'sso' | 'universal_logout' | 'provisioning' | 'entitlements' | 'shared', submissionActions?: SubmissionActions, _options?: Configuration): Promise<RequestContext>;
  /**
     * Upserts (adds or replaces) authentication settings for an OIN Integration submission
     * Upsert the submission authentication settings
     * @param submissionId OIN Integration ID
     * @param authSettings
     */
  upsertSubmissionAuthSettings(submissionId: string, authSettings?: AuthSettings, _options?: Configuration): Promise<RequestContext>;
  /**
     * Upserts (adds or replaces) capabilities for an OIN Integration submission
     * Upsert the submission supported capabilities
     * @param submissionId OIN Integration ID
     * @param submissionCapabilities
     */
  upsertSubmissionCapabilities(submissionId: string, submissionCapabilities?: SubmissionCapabilities, _options?: Configuration): Promise<RequestContext>;
  /**
     * Upserts (adds or replaces) tenant settings for an OIN Integration submission
     * Upsert the submission tenant settings
     * @param submissionId OIN Integration ID
     * @param tenantSettings
     */
  upsertSubmissionTenantSettings(submissionId: string, tenantSettings?: TenantSettings, _options?: Configuration): Promise<RequestContext>;
  /**
     * Upserts (adds or replaces) testing information for an OIN Integration
     * Upsert an OIN integration testing information
     * @param submissionId OIN Integration ID
     * @param testInfo
     */
  upsertSubmissionTestInfo(submissionId: string, testInfo?: TestInfo, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies the submission actions\' correctness with an actions provider, such as Workflows
     * Verify the submission actions
     * @param submissionId OIN Integration ID
     * @param capability Capability
     * @param actionsProviderType Actions provider type
     */
  verifyActions(submissionId: string, capability: 'sso' | 'universal_logout' | 'provisioning' | 'entitlements' | 'shared', actionsProviderType: 'workflows', _options?: Configuration): Promise<RequestContext>;
}
export declare class YourOinIntegrationsApiResponseProcessor {
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
     * @params response Response returned by the server for a request to getSubmissionActions
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSubmissionActions(response: ResponseContext): Promise<SubmissionActions>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubmissionAuthSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSubmissionAuthSettings(response: ResponseContext): Promise<AuthSettings>;
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
     * @params response Response returned by the server for a request to getSubmissionTenantSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSubmissionTenantSettings(response: ResponseContext): Promise<TenantSettings>;
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
     * @params response Response returned by the server for a request to listAvailableActions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAvailableActions(response: ResponseContext): Promise<AvailableActions>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSubmissionCapabilities
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSubmissionCapabilities(response: ResponseContext): Promise<SubmissionCapabilities>;
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
     * @params response Response returned by the server for a request to uploadSubmissionDefaultLogo
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadSubmissionDefaultLogo(response: ResponseContext): Promise<void>;
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
     * @params response Response returned by the server for a request to upsertSubmissionActions
     * @throws ApiException if the response code was not in [200, 299]
     */
  upsertSubmissionActions(response: ResponseContext): Promise<SubmissionActions>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertSubmissionAuthSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  upsertSubmissionAuthSettings(response: ResponseContext): Promise<AuthSettings>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertSubmissionCapabilities
     * @throws ApiException if the response code was not in [200, 299]
     */
  upsertSubmissionCapabilities(response: ResponseContext): Promise<SubmissionCapabilities>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertSubmissionTenantSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  upsertSubmissionTenantSettings(response: ResponseContext): Promise<TenantSettings>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertSubmissionTestInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
  upsertSubmissionTestInfo(response: ResponseContext): Promise<TestInfo>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyActions
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyActions(response: ResponseContext): Promise<VerifyActions200Response>;
}
