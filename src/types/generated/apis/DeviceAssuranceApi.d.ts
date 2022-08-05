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
import { DeviceAssurance } from '../models/DeviceAssurance';
/**
 * no description
 */
export declare class DeviceAssuranceApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Adds a new Device Assurance Policy.
     * Create a Device Assurance Policy
     * @param deviceAssurance
     */
  createDeviceAssurancePolicy(deviceAssurance: DeviceAssurance, _options?: Configuration): Promise<RequestContext>;
  /**
     * Delete a Device Assurance Policy by `deviceAssuranceId`. If the Device Assurance Policy is currently being used in the org Authentication Policies, the delete will not be allowed.
     * Delete a Device Assurance Policy
     * @param deviceAssuranceId Id of the Device Assurance Policy
     */
  deleteDeviceAssurancePolicy(deviceAssuranceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a Device Assurance Policy by `deviceAssuranceId`.
     * Retrieve a Device Assurance Policy
     * @param deviceAssuranceId Id of the Device Assurance Policy
     */
  getDeviceAssurancePolicy(deviceAssuranceId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates Device Assurance Policies in your organization.
     * List all Device Assurance Policies
     */
  listDeviceAssurancePolicies(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a Device Assurance Policy by `deviceAssuranceId`.
     * Replace a Device Assurance Policy
     * @param deviceAssuranceId Id of the Device Assurance Policy
     * @param deviceAssurance
     */
  updateDeviceAssurancePolicy(deviceAssuranceId: string, deviceAssurance: DeviceAssurance, _options?: Configuration): Promise<RequestContext>;
}
export declare class DeviceAssuranceApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDeviceAssurancePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  createDeviceAssurancePolicy(response: ResponseContext): Promise<DeviceAssurance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDeviceAssurancePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteDeviceAssurancePolicy(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeviceAssurancePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDeviceAssurancePolicy(response: ResponseContext): Promise<DeviceAssurance>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDeviceAssurancePolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
  listDeviceAssurancePolicies(response: ResponseContext): Promise<Array<DeviceAssurance>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDeviceAssurancePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateDeviceAssurancePolicy(response: ResponseContext): Promise<DeviceAssurance>;
}
