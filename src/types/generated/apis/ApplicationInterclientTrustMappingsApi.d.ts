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
import { InterclientTrustMapping } from '../models/InterclientTrustMapping';
import { InterclientTrustMappingRequestBody } from '../models/InterclientTrustMappingRequestBody';
/**
 * no description
 */
export declare class ApplicationInterclientTrustMappingsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a mapping between the target app and an allowed app for interclient SSO using the interclient token
     * Create an allowed app mapping for a target app
     * @param appId Application ID
     * @param interclientTrustMappingRequestBody
     */
  createInterclientTrustMapping(appId: string, interclientTrustMappingRequestBody: InterclientTrustMappingRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the mapping between the target app and an allowed app
     * Delete an interclient trust mapping
     * @param appId Application ID
     * @param allowedAppId App ID of the allowed app instance to delete mapping from the target app.
     */
  deleteInterclientTrustMapping(appId: string, allowedAppId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all apps allowed by this app to request interclient SSO using the interclient token
     * List all allowed apps for a target app
     * @param appId Application ID
     */
  listInterclientAllowedApplications(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the target apps that allow this app to request interclient SSO using an interclient token
     * List all target apps for an allowed app
     * @param appId Application ID
     */
  listInterclientTargetApplications(appId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApplicationInterclientTrustMappingsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createInterclientTrustMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  createInterclientTrustMapping(response: ResponseContext): Promise<InterclientTrustMapping>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteInterclientTrustMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteInterclientTrustMapping(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listInterclientAllowedApplications
     * @throws ApiException if the response code was not in [200, 299]
     */
  listInterclientAllowedApplications(response: ResponseContext): Promise<Array<string>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listInterclientTargetApplications
     * @throws ApiException if the response code was not in [200, 299]
     */
  listInterclientTargetApplications(response: ResponseContext): Promise<Array<string>>;
}
