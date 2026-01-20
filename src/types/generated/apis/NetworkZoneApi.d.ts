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
     * Activates a Network Zone by `zoneId`
     * Activate a network zone
     * @param zoneId &#x60;id&#x60; of the Network Zone
     */
  activateNetworkZone(zoneId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a Network Zone * For an IP Network Zone, you must define either `gateways` or `proxies`. * For a Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `proxyType`. * For an Enhanced Dynamic Network Zone, you must define at least one of the following: `asns`, `locations`, or `ipServiceCategories`. > **Note:** To view all properties for an Enhanced Dynamic Network Zone, select `DYNAMIC_V2` from the `type` dropdown list.
     * Create a network zone
     * @param zone
     */
  createNetworkZone(zone: NetworkZone, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a Network Zone by `zoneId`
     * Deactivate a network zone
     * @param zoneId &#x60;id&#x60; of the Network Zone
     */
  deactivateNetworkZone(zoneId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Network Zone by `zoneId` > **Notes:** > * You can\'t delete a Network Zone that\'s used by a [Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) or [Rule](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyRules). > * For Okta Identity Engine orgs, you can\'t delete a Network Zone with an ACTIVE `status`. <x-lifecycle class=\"oie\"></x-lifecycle>
     * Delete a network zone
     * @param zoneId &#x60;id&#x60; of the Network Zone
     */
  deleteNetworkZone(zoneId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Network Zone by `zoneId`
     * Retrieve a network zone
     * @param zoneId &#x60;id&#x60; of the Network Zone
     */
  getNetworkZone(zoneId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Network Zones with pagination. A subset of zones can be returned that match a supported filter expression or query.  This operation requires URL encoding. For example, `filter=(id eq \"nzoul0wf9jyb8xwZm0g3\" or id eq \"nzoul1MxmGN18NDQT0g3\")` is encoded as `filter=%28id+eq+%22nzoul0wf9jyb8xwZm0g3%22+or+id+eq+%22nzoul1MxmGN18NDQT0g3%22%29`.  Okta supports filtering on the `id`, `usage`, and `system` properties. See [Filter](https://developer.okta.com/docs/api/#filter) for more information on the expressions that are used in filtering.
     * List all network zones
     * @param after
     * @param limit
     * @param filter
     */
  listNetworkZones(after?: string, limit?: number, filter?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a Network Zone by `zoneId`. The replaced Network Zone type must be the same as the existing type. You can replace the usage (`POLICY`, `BLOCKLIST`) of a Network Zone by updating the `usage` attribute.  **IP exempt zone**<br> If you have the IP exempt zone feature enabled, you can allow traffic from specific gateway IPs irrespective of Okta ThreatInsight configurations, blocked network zones, or IP change events within Identity Threat Protection with Okta AI.<br> <br> When you enable this feature, Okta creates a zone called `DefaultExemptIpZone`. Gateway IPs that you add to this zone always have access to Okta resources. See [IP exempt zone](https://help.okta.com/okta_help.htm?type=oie&id=csh-about-ip-exempt-zone).  > **Note:** You can\'t add trusted proxy IPs to this zone, delete the zone, or create additional exempt IP zones.
     * Replace a network zone
     * @param zoneId &#x60;id&#x60; of the Network Zone
     * @param zone
     */
  replaceNetworkZone(zoneId: string, zone: NetworkZone, _options?: Configuration): Promise<RequestContext>;
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
     * @params response Response returned by the server for a request to replaceNetworkZone
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceNetworkZone(response: ResponseContext): Promise<NetworkZone>;
}
