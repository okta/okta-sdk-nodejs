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
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 2.10.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.SwaApplicationSettingsApplicationAllOf = void 0;
class SwaApplicationSettingsApplicationAllOf {
  constructor() {
  }
  static getAttributeTypeMap() {
    return SwaApplicationSettingsApplicationAllOf.attributeTypeMap;
  }
}
exports.SwaApplicationSettingsApplicationAllOf = SwaApplicationSettingsApplicationAllOf;
SwaApplicationSettingsApplicationAllOf.discriminator = undefined;
SwaApplicationSettingsApplicationAllOf.attributeTypeMap = [
  {
    'name': 'buttonField',
    'baseName': 'buttonField',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'checkbox',
    'baseName': 'checkbox',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'loginUrlRegex',
    'baseName': 'loginUrlRegex',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'passwordField',
    'baseName': 'passwordField',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'redirectUrl',
    'baseName': 'redirectUrl',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'url',
    'baseName': 'url',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'usernameField',
    'baseName': 'usernameField',
    'type': 'string',
    'format': ''
  }
];
