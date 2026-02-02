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
import { DeviceList } from '../models/DeviceList';
import { DeviceUser } from '../models/DeviceUser';
/**
 * no description
 */
export declare class DeviceApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a device by setting its status to `ACTIVE` by `deviceId`. Activated devices are used to create and delete device user links.
     * Activate a device
     * @param deviceId &#x60;id&#x60; of the device
     */
  activateDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a device by setting its status to `DEACTIVATED` by `deviceId`. Deactivation causes a device to lose all device user links. Set the device status to `DEACTIVATED` before deleting it. > **Note:** When deactivating a Device, keep in mind the following:   - Device deactivation is a destructive operation for device factors and client certificates. Device reenrollment using Okta Verify allows end users to set up new factors on the device.   - Device deletion removes the device record from Okta. Reenrollment creates a new device record.
     * Deactivate a device
     * @param deviceId &#x60;id&#x60; of the device
     */
  deactivateDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes (permanently) a device by `deviceId` if it has a status of `DEACTIVATED`. You can transition the device to `DEACTIVATED` status using the [Deactivate a Device](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Device/#tag/Device/operation/deactivateDevice) endpoint. This request is destructive and deletes all of the profile data related to the device. Once deleted, device data can\'t be recovered. However, reenrollment creates a new device record. > **Note:** Attempts to delete a device that isn\'t in a `DEACTIVATED` state raise an error.
     * Delete a device
     * @param deviceId &#x60;id&#x60; of the device
     */
  deleteDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a device by `deviceId`
     * Retrieve a device
     * @param deviceId &#x60;id&#x60; of the device
     */
  getDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Users for a device by `deviceId`
     * List all users for a device
     * @param deviceId &#x60;id&#x60; of the device
     */
  listDeviceUsers(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all devices with pagination support.  >**Note:** To list all devices enrolled by a user, use the [List all devices endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listUserDevices).  You can return a subset of devices that match a supported search criteria using the `search` query parameter. Searches for devices based on the properties specified in the `search` parameter conforming SCIM filter specifications (case-insensitive). This data is eventually consistent. The API returns different results depending on specified queries in the request. Empty list is returned if no objects match `search` request.  > **Note:** The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.  Don\'t use search results directly for record updates, as the data might be stale and therefore overwrite newer data, resulting in data loss.   Use an `id` lookup for records that you update to ensure your results contain the latest data.  This operation requires [URL encoding](https://www.w3.org/TR/html4/interact/forms.html#h-17.13.4.1). For example, `search=profile.displayName eq \"Bob\"` is encoded as `search=profile.displayName%20eq%20%22Bob%22`.
     * List all devices
     * @param after
     * @param limit A limit on the number of objects to return (recommend &#x60;20&#x60;)
     * @param search A SCIM filter expression that filters the results. Searches include all device &#x60;profile&#x60; properties and the device &#x60;id&#x60;, &#x60;status&#x60;, and &#x60;lastUpdated&#x60; properties.  Searches for devices can be filtered by the contains (&#x60;co&#x60;) operator. You can only use &#x60;co&#x60; with these select device profile attributes: &#x60;profile.displayName&#x60;, &#x60;profile.serialNumber&#x60;, &#x60;profile.imei&#x60;, &#x60;profile.meid&#x60;, &#x60;profile.udid&#x60;, and &#x60;profile.sid&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
     * @param expand Includes associated user details and management status for the device in the &#x60;_embedded&#x60; attribute
     */
  listDevices(after?: string, limit?: number, search?: string, expand?: 'user' | 'userSummary', _options?: Configuration): Promise<RequestContext>;
  /**
     * Suspends a device by setting its status to `SUSPENDED`. Use suspended devices to create and delete device user links. You can only unsuspend or deactivate suspended devices. > **Note:** `SUSPENDED` status is meant to be temporary, so it isn\'t destructive.
     * Suspend a Device
     * @param deviceId &#x60;id&#x60; of the device
     */
  suspendDevice(deviceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unsuspends a device by returning its `status` to `ACTIVE`. >**Note:** Only devices with a `SUSPENDED` status can be unsuspended.
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
     * @params response Response returned by the server for a request to listDeviceUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  listDeviceUsers(response: ResponseContext): Promise<Array<DeviceUser>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDevices
     * @throws ApiException if the response code was not in [200, 299]
     */
  listDevices(response: ResponseContext): Promise<Array<DeviceList>>;
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
