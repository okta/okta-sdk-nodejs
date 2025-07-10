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
import { DevicePostureCheck } from '../models/DevicePostureCheck';
/**
 * no description
 */
export declare class DevicePostureCheckApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a device posture check
     * Create a device posture check
     * @param devicePostureCheck
     */
  createDevicePostureCheck(devicePostureCheck: DevicePostureCheck, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a device posture check by `postureCheckId`. You can\'t delete the device posture check if it\'s used in a device assurance policy.
     * Delete a device posture check
     * @param postureCheckId ID of the device posture check
     */
  deleteDevicePostureCheck(postureCheckId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a device posture check by `postureCheckId`
     * Retrieve a device posture check
     * @param postureCheckId ID of the device posture check
     */
  getDevicePostureCheck(postureCheckId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all default device posture checks. Default device posture checks are defined by Okta. Their type will always be `BUILTIN`.
     * List all default device posture checks
     */
  listDefaultDevicePostureChecks(_options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all device posture checks
     * List all device posture checks
     */
  listDevicePostureChecks(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a device posture check by `postureCheckId`
     * Replace a device posture check
     * @param postureCheckId ID of the device posture check
     * @param devicePostureCheck
     */
  replaceDevicePostureCheck(postureCheckId: string, devicePostureCheck: DevicePostureCheck, _options?: Configuration): Promise<RequestContext>;
}
export declare class DevicePostureCheckApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDevicePostureCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
  createDevicePostureCheck(response: ResponseContext): Promise<DevicePostureCheck>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDevicePostureCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteDevicePostureCheck(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePostureCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDevicePostureCheck(response: ResponseContext): Promise<DevicePostureCheck>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDefaultDevicePostureChecks
     * @throws ApiException if the response code was not in [200, 299]
     */
  listDefaultDevicePostureChecks(response: ResponseContext): Promise<Array<DevicePostureCheck>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDevicePostureChecks
     * @throws ApiException if the response code was not in [200, 299]
     */
  listDevicePostureChecks(response: ResponseContext): Promise<Array<DevicePostureCheck>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceDevicePostureCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceDevicePostureCheck(response: ResponseContext): Promise<DevicePostureCheck>;
}
