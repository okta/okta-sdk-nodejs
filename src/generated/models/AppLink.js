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
exports.AppLink = void 0;
class AppLink {
  constructor() {
  }
  static getAttributeTypeMap() {
    return AppLink.attributeTypeMap;
  }
}
exports.AppLink = AppLink;
AppLink.discriminator = undefined;
AppLink.attributeTypeMap = [
  {
    'name': 'appAssignmentId',
    'baseName': 'appAssignmentId',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'appInstanceId',
    'baseName': 'appInstanceId',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'appName',
    'baseName': 'appName',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'credentialsSetup',
    'baseName': 'credentialsSetup',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'hidden',
    'baseName': 'hidden',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'id',
    'baseName': 'id',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'label',
    'baseName': 'label',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'linkUrl',
    'baseName': 'linkUrl',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'logoUrl',
    'baseName': 'logoUrl',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'sortOrder',
    'baseName': 'sortOrder',
    'type': 'number',
    'format': ''
  }
];