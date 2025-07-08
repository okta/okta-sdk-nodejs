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
import { DeviceIntegrations } from '../models/DeviceIntegrations';
/**
 * no description
 */
export declare class DeviceIntegrationsApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a device integration and populates the related configurations by `deviceIntegrationId`
     * Activate a device integration
     * @param deviceIntegrationId The ID of the device integration
     */
  activateDeviceIntegration(deviceIntegrationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a device integration by `deviceIntegrationId`
     * Deactivate a device integration
     * @param deviceIntegrationId The ID of the device integration
     */
  deactivateDeviceIntegration(deviceIntegrationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a device integration by `deviceIntegrationId`
     * Retrieve a device integration
     * @param deviceIntegrationId The ID of the device integration
     */
  getDeviceIntegration(deviceIntegrationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all device integrations for your org. Examples include Device Posture Provider, Windows Security Center, Chrome Device Trust, OSQuery, and Android Device Trust.
     * List all device integrations
     */
  listDeviceIntegrations(_options?: Configuration): Promise<RequestContext>;
}
export declare class DeviceIntegrationsApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateDeviceIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateDeviceIntegration(response: ResponseContext): Promise<DeviceIntegrations>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateDeviceIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateDeviceIntegration(response: ResponseContext): Promise<DeviceIntegrations>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeviceIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDeviceIntegration(response: ResponseContext): Promise<DeviceIntegrations>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDeviceIntegrations
     * @throws ApiException if the response code was not in [200, 299]
     */
  listDeviceIntegrations(response: ResponseContext): Promise<Array<DeviceIntegrations>>;
}
