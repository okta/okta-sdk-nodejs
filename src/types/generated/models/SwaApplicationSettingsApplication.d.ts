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
export declare class SwaApplicationSettingsApplication {
  /**
    * CSS selector for the **Sign-In** button in the sign-in form (for SWA apps with the `template_swa` app name definition)
    */
  'buttonField': string;
  /**
    * CSS selector for the **Sign-In**  button in the sign-in form (for three-field SWA apps with the `template_swa3field` app name definition)
    */
  'buttonSelector'?: string;
  /**
    * Enter the CSS selector for the extra field (for three-field SWA apps with the `template_swa3field` app name definition).
    */
  'extraFieldSelector'?: string;
  /**
    * Enter the value for the extra field in the form (for three-field SWA apps with the `template_swa3field` app name definition).
    */
  'extraFieldValue'?: string;
  /**
    * A regular expression that further restricts targetURL to the specified regular expression
    */
  'loginUrlRegex'?: string;
  /**
    * CSS selector for the **Password** field in the sign-in form (for SWA apps with the `template_swa` app name definition)
    */
  'passwordField': string;
  /**
    * CSS selector for the **Password** field in the sign-in form (for three-field SWA apps with the `template_swa3field` app name definition)
    */
  'passwordSelector'?: string;
  /**
    * The URL of the sign-in page for this app (for three-field SWA apps with the `template_swa3field` app name definition)
    */
  'targetURL'?: string;
  /**
    * The URL of the sign-in page for this app (for SWA apps with the `template_swa` app name definition)
    */
  'url': string;
  /**
    * CSS selector for the **Username** field in the sign-in form (for SWA apps with the `template_swa` app name definition)
    */
  'usernameField': string;
  /**
    * CSS selector for the **Username** field in the sign-in form (for three-field SWA apps with the `template_swa3field` app name definition)
    */
  'userNameSelector'?: string;
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
