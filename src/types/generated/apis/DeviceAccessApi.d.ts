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
import { DesktopMFAEnforceNumberMatchingChallengeOrgSetting } from '../models/DesktopMFAEnforceNumberMatchingChallengeOrgSetting';
import { DesktopMFARecoveryPinOrgSetting } from '../models/DesktopMFARecoveryPinOrgSetting';
/**
 * no description
 */
export declare class DeviceAccessApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
     * Retrieve the Desktop MFA Enforce Number Matching Challenge org setting
     */
  getDesktopMFAEnforceNumberMatchingChallengeOrgSetting(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the status of the Desktop MFA Recovery PIN feature. That is, whether or not the feature is enabled for your org.
     * Retrieve the Desktop MFA Recovery PIN org setting
     */
  getDesktopMFARecoveryPinOrgSetting(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the status of the Desktop MFA Enforce Number Matching Challenge push notifications feature. That is, whether or not the feature is enabled for your org.
     * Replace the Desktop MFA Enforce Number Matching Challenge org setting
     * @param desktopMFAEnforceNumberMatchingChallengeOrgSetting
     */
  replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting(desktopMFAEnforceNumberMatchingChallengeOrgSetting: DesktopMFAEnforceNumberMatchingChallengeOrgSetting, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the Desktop MFA Recovery PIN feature for your org
     * Replace the Desktop MFA Recovery PIN org setting
     * @param desktopMFARecoveryPinOrgSetting
     */
  replaceDesktopMFARecoveryPinOrgSetting(desktopMFARecoveryPinOrgSetting: DesktopMFARecoveryPinOrgSetting, _options?: Configuration): Promise<RequestContext>;
}
export declare class DeviceAccessApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDesktopMFAEnforceNumberMatchingChallengeOrgSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDesktopMFAEnforceNumberMatchingChallengeOrgSetting(response: ResponseContext): Promise<DesktopMFAEnforceNumberMatchingChallengeOrgSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDesktopMFARecoveryPinOrgSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDesktopMFARecoveryPinOrgSetting(response: ResponseContext): Promise<DesktopMFARecoveryPinOrgSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceDesktopMFAEnforceNumberMatchingChallengeOrgSetting(response: ResponseContext): Promise<DesktopMFAEnforceNumberMatchingChallengeOrgSetting>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceDesktopMFARecoveryPinOrgSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceDesktopMFARecoveryPinOrgSetting(response: ResponseContext): Promise<DesktopMFARecoveryPinOrgSetting>;
}
