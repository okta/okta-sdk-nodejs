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
import { ProfileMapping } from '../models/ProfileMapping';
/**
 * no description
 */
export declare class ProfileMappingApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves a single Profile Mapping referenced by its ID
     * Retrieve a Profile Mapping
     * @param mappingId
     */
  getProfileMapping(mappingId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all profile mappings with pagination
     * List all Profile Mappings
     * @param after
     * @param limit
     * @param sourceId
     * @param targetId
     */
  listProfileMappings(after?: string, limit?: number, sourceId?: string, targetId?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings
     * Update a Profile Mapping
     * @param mappingId
     * @param profileMapping
     */
  updateProfileMapping(mappingId: string, profileMapping: ProfileMapping, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProfileMappingApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProfileMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  getProfileMapping(response: ResponseContext): Promise<ProfileMapping>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProfileMappings
     * @throws ApiException if the response code was not in [200, 299]
     */
  listProfileMappings(response: ResponseContext): Promise<Array<ProfileMapping>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProfileMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateProfileMapping(response: ResponseContext): Promise<ProfileMapping>;
}
