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
import { ApplicationAccessibility } from './../models/ApplicationAccessibility';
import { ApplicationLicensing } from './../models/ApplicationLicensing';
import { ApplicationLifecycleStatus } from './../models/ApplicationLifecycleStatus';
import { ApplicationVisibility } from './../models/ApplicationVisibility';
import { SchemeApplicationCredentials } from './../models/SchemeApplicationCredentials';
import { TrendMicroApexOneServiceApplicationSettings } from './../models/TrendMicroApexOneServiceApplicationSettings';
/**
* Schema for Trend Micro Apex One as a Service app (key name: `trendmicroapexoneservice`)  To create a Trend Micro Apex One as a Service app, use the [Create an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication) request with the following parameters in the request body. > **Note:** The Trend Micro Apex One as a Service app only supports `SAML_2_0` sign-on mode.
*/
export declare class TrendMicroApexOneServiceApplication {
  'accessibility'?: ApplicationAccessibility;
  'credentials'?: SchemeApplicationCredentials;
  /**
    * User-defined display name for app
    */
  'label': string;
  'licensing'?: ApplicationLicensing;
  'name': TrendMicroApexOneServiceApplicationNameEnum;
  /**
    * Contains any valid JSON schema for specifying properties that can be referenced from a request (only available to OAuth 2.0 client apps)
    */
  'profile'?: {
        [key: string]: any;
    };
  'signOnMode'?: TrendMicroApexOneServiceApplicationSignOnModeEnum;
  'status'?: ApplicationLifecycleStatus;
  'visibility'?: ApplicationVisibility;
  'settings': TrendMicroApexOneServiceApplicationSettings;
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
export declare type TrendMicroApexOneServiceApplicationNameEnum = 'trendmicroapexoneservice';
export declare type TrendMicroApexOneServiceApplicationSignOnModeEnum = 'SAML_2_0';
