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
import { Device } from '../models/Device';
/**
 * no description
 */
export declare class DeviceApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a device by `deviceId`
     * Activate a Device
     * @param deviceId &#x60;id&#x60; of the device
     */
  activateDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a device by `deviceId`
     * Deactivate a Device
     * @param deviceId &#x60;id&#x60; of the device
     */
  deactivateDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a device by `deviceId`
     * Delete a Device
     * @param deviceId &#x60;id&#x60; of the device
     */
  deleteDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a device by `deviceId`
     * Retrieve a Device
     * @param deviceId &#x60;id&#x60; of the device
     */
  getDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all devices with pagination support.  A subset of Devices can be returned that match a supported search criteria using the `search` query parameter.  Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request.  > **Note:** Listing devices with `search` should not be used as a part of any critical flows—such as authentication or updates—to prevent potential data loss. `search` results may not reflect the latest information, as this endpoint uses a search index which may not be up-to-date with recent updates to the object. <br> Don't use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss. <br> Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation equires [URL encoding](http://en.wikipedia.org/wiki/Percent-encoding). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
     * List all Devices
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     * @param limit A limit on the number of objects to return.
     * @param search SCIM filter expression that filters the results. Searches include all Device &#x60;profile&#x60; properties, as well as the Device &#x60;id&#x60;, &#x60;status&#x60; and &#x60;lastUpdated&#x60; properties.
     */
  listDevices(after?: string, limit?: number, search?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Suspends a device by `deviceId`
     * Suspend a Device
     * @param deviceId &#x60;id&#x60; of the device
     */
  suspendDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unsuspends a device by `deviceId`
     * Unsuspend a Device
     * @param deviceId &#x60;id&#x60; of the device
     */
  unsuspendDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class DeviceApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateDevice(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateDevice(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteDevice(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDevice(response: ResponseContext): Promise<Device>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDevices
     * @throws ApiException if the response code was not in [200, 299]
     */
  listDevices(response: ResponseContext): Promise<Array<Device>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to suspendDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
  suspendDevice(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unsuspendDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
  unsuspendDevice(response: ResponseContext): Promise<void>;
}
