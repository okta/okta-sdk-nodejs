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


'use strict';
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
Object.defineProperty(exports, '__esModule', { value: true });
exports.AppUserProfileRequestPayload = void 0;
/**
* Updates the assigned user profile > **Note:** The Okta API currently doesn\'t support entity tags for conditional updates. As long as you\'re the only user updating the the user profile, Okta recommends you fetch the most recent profile with [Retrieve an Application User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/#tag/ApplicationUsers/operation/getApplicationUser), apply your profile update, and then `POST` back the updated profile.
*/
class AppUserProfileRequestPayload {
  constructor() {
  }
  static getAttributeTypeMap() {
    return AppUserProfileRequestPayload.attributeTypeMap;
  }
}
exports.AppUserProfileRequestPayload = AppUserProfileRequestPayload;
AppUserProfileRequestPayload.discriminator = undefined;
AppUserProfileRequestPayload.attributeTypeMap = [
  {
    'name': 'profile',
    'baseName': 'profile',
    'type': 'AppUserProfile',
    'format': ''
  }
];
