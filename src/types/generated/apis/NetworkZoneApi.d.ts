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
import { NetworkZone } from '../models/NetworkZone';
/**
 * no description
 */
export declare class NetworkZoneApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activate Network Zone
     * Activate Network Zone
     * @param zoneId
     */
  activateNetworkZone(zoneId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds a new network zone to your Okta organization.
     * Add Network Zone
     * @param zone
     */
  createNetworkZone(zone: NetworkZone, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a network zone.
     * Deactivate Network Zone
     * @param zoneId
     */
  deactivateNetworkZone(zoneId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Removes network zone.
     * Delete Network Zone
     * @param zoneId
     */
  deleteNetworkZone(zoneId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a network zone from your Okta organization by `id`.
     * Get Network Zone
     * @param zoneId
     */
  getNetworkZone(zoneId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
     * List Network Zones
     * @param after Specifies the pagination cursor for the next page of network zones
     * @param limit Specifies the number of results for a page
     * @param filter Filters zones by usage or id expression
     */
  listNetworkZones(after?: string, limit?: number, filter?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a network zone in your organization.
     * Update Network Zone
     * @param zoneId
     * @param zone
     */
  updateNetworkZone(zoneId: string, zone: NetworkZone, _options?: Configuration): Promise<RequestContext>;
}
export declare class NetworkZoneApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateNetworkZone
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateNetworkZone(response: ResponseContext): Promise<NetworkZone>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNetworkZone
     * @throws ApiException if the response code was not in [200, 299]
     */
  createNetworkZone(response: ResponseContext): Promise<NetworkZone>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateNetworkZone
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateNetworkZone(response: ResponseContext): Promise<NetworkZone>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNetworkZone
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteNetworkZone(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNetworkZone
     * @throws ApiException if the response code was not in [200, 299]
     */
  getNetworkZone(response: ResponseContext): Promise<NetworkZone>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNetworkZones
     * @throws ApiException if the response code was not in [200, 299]
     */
  listNetworkZones(response: ResponseContext): Promise<Array<NetworkZone>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateNetworkZone
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateNetworkZone(response: ResponseContext): Promise<NetworkZone>;
}
