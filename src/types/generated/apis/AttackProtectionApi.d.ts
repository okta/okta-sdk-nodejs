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
import { UserLockoutSettings } from '../models/UserLockoutSettings';
/**
 * no description
 */
export declare class AttackProtectionApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the User Lockout Settings for an org
     * Retrieve the User Lockout Settings
     */
  getUserLockoutSettings(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the User Lockout Settings for an org
     * Replace the User Lockout Settings
     * @param lockoutSettings
     */
  replaceUserLockoutSettings(lockoutSettings: UserLockoutSettings, _options?: Configuration): Promise<RequestContext>;
}
export declare class AttackProtectionApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserLockoutSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserLockoutSettings(response: ResponseContext): Promise<Array<UserLockoutSettings>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceUserLockoutSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceUserLockoutSettings(response: ResponseContext): Promise<UserLockoutSettings>;
}
