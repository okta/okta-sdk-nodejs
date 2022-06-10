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
 * OpenAPI spec version: 3.0.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.PasswordCredentialHash = void 0;
class PasswordCredentialHash {
  constructor() {
  }
  static getAttributeTypeMap() {
    return PasswordCredentialHash.attributeTypeMap;
  }
}
exports.PasswordCredentialHash = PasswordCredentialHash;
PasswordCredentialHash.discriminator = undefined;
PasswordCredentialHash.attributeTypeMap = [
  {
    'name': 'algorithm',
    'baseName': 'algorithm',
    'type': 'PasswordCredentialHashAlgorithm',
    'format': ''
  },
  {
    'name': 'salt',
    'baseName': 'salt',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'saltOrder',
    'baseName': 'saltOrder',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'value',
    'baseName': 'value',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'workFactor',
    'baseName': 'workFactor',
    'type': 'number',
    'format': ''
  }
];
