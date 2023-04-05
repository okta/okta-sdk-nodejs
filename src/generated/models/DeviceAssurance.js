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
 * OpenAPI spec version: 4.0.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.DeviceAssurance = void 0;
class DeviceAssurance {
  constructor() {
  }
  static getAttributeTypeMap() {
    return DeviceAssurance.attributeTypeMap;
  }
}
exports.DeviceAssurance = DeviceAssurance;
DeviceAssurance.discriminator = undefined;
DeviceAssurance.attributeTypeMap = [
  {
    'name': 'createdBy',
    'baseName': 'createdBy',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'createdDate',
    'baseName': 'createdDate',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'diskEncryptionType',
    'baseName': 'diskEncryptionType',
    'type': 'DeviceAssuranceDiskEncryptionType',
    'format': ''
  },
  {
    'name': 'id',
    'baseName': 'id',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'jailbreak',
    'baseName': 'jailbreak',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'lastUpdatedBy',
    'baseName': 'lastUpdatedBy',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'lastUpdatedDate',
    'baseName': 'lastUpdatedDate',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'name',
    'baseName': 'name',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'osVersion',
    'baseName': 'osVersion',
    'type': 'VersionObject',
    'format': ''
  },
  {
    'name': 'platform',
    'baseName': 'platform',
    'type': 'Platform',
    'format': ''
  },
  {
    'name': 'screenLockType',
    'baseName': 'screenLockType',
    'type': 'DeviceAssuranceScreenLockType',
    'format': ''
  },
  {
    'name': 'secureHardwarePresent',
    'baseName': 'secureHardwarePresent',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': '_links',
    'baseName': '_links',
    'type': 'ApiTokenLink',
    'format': ''
  }
];
