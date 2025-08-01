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
import { TokenHookResponseCommandsInner } from './../models/TokenHookResponseCommandsInner';
import { TokenHookResponseError } from './../models/TokenHookResponseError';
/**
* For the token inline hook, the `commands` and `error` objects that you can return in the JSON payload of your response are defined in the following sections. > **Note:** The size of your response payload must be less than 256 KB.
*/
export declare class TokenHookResponse {
  /**
    * You can use the `commands` object to provide commands to Okta. It\'s where you can tell Okta to add more claims to the token. The `commands` object is an array, allowing you to send multiple commands. In each array element, there needs to be a `type` property and `value` property. The `type` property is where you specify which of the supported commands you want to execute, and `value` is where you supply an operand for that command. In the case of the token hook type, the `value` property is itself a nested object in which you specify a particular operation, a path to act on, and a value.
    */
  'commands'?: Array<TokenHookResponseCommandsInner>;
  'error'?: TokenHookResponseError;
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
