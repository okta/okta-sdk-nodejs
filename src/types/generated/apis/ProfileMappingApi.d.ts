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
import { ListProfileMappings } from '../models/ListProfileMappings';
import { ProfileMapping } from '../models/ProfileMapping';
import { ProfileMappingRequest } from '../models/ProfileMappingRequest';
/**
 * no description
 */
export declare class ProfileMappingApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves a single profile mapping referenced by its ID
     * Retrieve a profile mapping
     * @param mappingId &#x60;id&#x60; of the Mapping
     */
  getProfileMapping(mappingId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all profile mappings in your org with [pagination](https://developer.okta.com/docs/api/#pagination). You can return a subset of profile mappings that match a supported `sourceId` and/or `targetId`.  The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the Link header contains a `next` link that you should treat as an opaque value (follow it, don\'t parse it). See [Link Header](https://developer.okta.com/docs/api/#link-header).  The response is a collection of profile mappings that include a subset of the profile mapping object\'s parameters. The profile mapping object describes the properties mapping between an Okta user and an app user profile using [JSON Schema Draft 4](https://datatracker.ietf.org/doc/html/draft-zyp-json-schema-04).
     * List all profile mappings
     * @param after Mapping &#x60;id&#x60; that specifies the pagination cursor for the next page of mappings
     * @param limit Specifies the number of results per page
     * @param sourceId The user type or app instance ID that acts as the source of expressions in a mapping. If this parameter is included, all returned mappings have this as their &#x60;source.id&#x60;.
     * @param targetId The user type or app instance ID that acts as the target of expressions in a mapping. If this parameter is included, all returned mappings have this as their &#x60;target.id&#x60;.
     */
  listProfileMappings(after?: string, limit?: number, sourceId?: string, targetId?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an existing profile mapping by adding, updating, or removing one or many property mappings
     * Update a profile mapping
     * @param mappingId &#x60;id&#x60; of the Mapping
     * @param profileMapping
     */
  updateProfileMapping(mappingId: string, profileMapping: ProfileMappingRequest, _options?: Configuration): Promise<RequestContext>;
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
  listProfileMappings(response: ResponseContext): Promise<Array<ListProfileMappings>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProfileMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateProfileMapping(response: ResponseContext): Promise<ProfileMapping>;
}
