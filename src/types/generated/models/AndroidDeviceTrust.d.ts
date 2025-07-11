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
import { DeviceIntegrity } from './../models/DeviceIntegrity';
import { PlayProtectVerdict } from './../models/PlayProtectVerdict';
import { ScreenLockComplexity } from './../models/ScreenLockComplexity';
/**
* Android Device Trust integration provider
*/
export declare class AndroidDeviceTrust {
  'deviceIntegrityLevel'?: DeviceIntegrity;
  /**
    * Indicates whether a device has a network proxy disabled
    */
  'networkProxyDisabled'?: boolean;
  'playProtectVerdict'?: PlayProtectVerdict;
  /**
    * Indicates whether the device needs to be on the latest major version available to the device  **Note:** This option requires an `osVersion.dynamicVersionRequirement` value to be supplied with the `osVersion.dynamicVersionRequirement.type` as either `MINIMUM` or `EXACT`.
    */
  'requireMajorVersionUpdate'?: boolean;
  'screenLockComplexity'?: ScreenLockComplexity;
  /**
    * Indicates whether Android Debug Bridge (adb) over USB is disabled
    */
  'usbDebuggingDisabled'?: boolean;
  /**
    * Indicates whether a device is on a password-protected Wi-Fi network
    */
  'wifiSecured'?: boolean;
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
