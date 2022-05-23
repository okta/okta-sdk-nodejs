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
exports.Authenticator = void 0;
class Authenticator {
  constructor() {
  }
  static getAttributeTypeMap() {
    return Authenticator.attributeTypeMap;
  }
}
exports.Authenticator = Authenticator;
Authenticator.discriminator = undefined;
Authenticator.attributeTypeMap = [
  {
    'name': '_links',
    'baseName': '_links',
    'type': '{ [key: string]: any; }',
    'format': ''
  },
  {
    'name': 'created',
    'baseName': 'created',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'id',
    'baseName': 'id',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'key',
    'baseName': 'key',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'status',
    'baseName': 'status',
    'type': 'AuthenticatorStatus',
    'format': ''
  },
  {
    'name': 'lastUpdated',
    'baseName': 'lastUpdated',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'name',
    'baseName': 'name',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'provider',
    'baseName': 'provider',
    'type': 'AuthenticatorProvider',
    'format': ''
  },
  {
    'name': 'type',
    'baseName': 'type',
    'type': 'AuthenticatorType',
    'format': ''
  },
  {
    'name': 'settings',
    'baseName': 'settings',
    'type': 'AuthenticatorSettings',
    'format': ''
  }
];
