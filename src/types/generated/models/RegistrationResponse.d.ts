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


/**
 * Okta Admin Management
 * Allows customers to easily access the Okta Management APIs
 *
 * OpenAPI spec version: 5.1.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RegistrationInlineHookResponseCommandsInner } from './../models/RegistrationInlineHookResponseCommandsInner';
import { RegistrationResponseError } from './../models/RegistrationResponseError';
export declare class RegistrationResponse {
  /**
    * The `commands` object lets you invoke commands to modify or add values to the attributes in the Okta user profile that are created for this user. The object also lets you control whether or not the registration attempt is allowed to proceed.  This object is an array, allowing you to send multiple commands in your response. Each array element requires a `type` property and a `value` property. The `type` property is where you specify which of the supported commands you wish to execute, and `value` is where you supply parameters for that command.  The registration inline hook supports these three commands: * `com.okta.user.profile.update`: Change attribute values in the user\'s Okta user profile. For SSR only. Invalid if used with a Progressive Profile response. * `com.okta.action.update`: Allow or deny the user\'s registration. * `com.okta.user.progressive.profile.update`: Change attribute values in the user\'s Okta Progressive Profile.
    */
  'commands'?: Array<RegistrationInlineHookResponseCommandsInner>;
  'Error'?: RegistrationResponseError;
  static readonly discriminator: string | undefined;
  static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
  static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
  constructor();
}
