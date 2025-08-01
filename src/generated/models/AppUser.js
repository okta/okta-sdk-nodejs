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
exports.AppUser = void 0;
/**
* The application user object defines a user\'s app-specific profile and credentials for an app
*/
class AppUser {
  constructor() {
  }
  static getAttributeTypeMap() {
    return AppUser.attributeTypeMap;
  }
}
exports.AppUser = AppUser;
AppUser.discriminator = undefined;
AppUser.attributeTypeMap = [
  {
    'name': 'created',
    'baseName': 'created',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'credentials',
    'baseName': 'credentials',
    'type': 'AppUserCredentials',
    'format': ''
  },
  {
    'name': 'externalId',
    'baseName': 'externalId',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'id',
    'baseName': 'id',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'lastSync',
    'baseName': 'lastSync',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'lastUpdated',
    'baseName': 'lastUpdated',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'passwordChanged',
    'baseName': 'passwordChanged',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'profile',
    'baseName': 'profile',
    'type': 'AppUserProfile',
    'format': ''
  },
  {
    'name': 'scope',
    'baseName': 'scope',
    'type': 'AppUserScopeEnum',
    'format': ''
  },
  {
    'name': 'status',
    'baseName': 'status',
    'type': 'AppUserStatus',
    'format': ''
  },
  {
    'name': 'statusChanged',
    'baseName': 'statusChanged',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'syncState',
    'baseName': 'syncState',
    'type': 'AppUserSyncState',
    'format': ''
  },
  {
    'name': '_embedded',
    'baseName': '_embedded',
    'type': '{ [key: string]: any; }',
    'format': ''
  },
  {
    'name': '_links',
    'baseName': '_links',
    'type': 'LinksAppAndUser',
    'format': ''
  }
];
