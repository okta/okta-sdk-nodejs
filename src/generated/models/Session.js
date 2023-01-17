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
exports.Session = void 0;
class Session {
  constructor() {
  }
  static getAttributeTypeMap() {
    return Session.attributeTypeMap;
  }
}
exports.Session = Session;
Session.discriminator = undefined;
Session.attributeTypeMap = [
  {
    'name': 'amr',
    'baseName': 'amr',
    'type': 'Array<SessionAuthenticationMethod>',
    'format': ''
  },
  {
    'name': 'createdAt',
    'baseName': 'createdAt',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'expiresAt',
    'baseName': 'expiresAt',
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
    'name': 'idp',
    'baseName': 'idp',
    'type': 'SessionIdentityProvider',
    'format': ''
  },
  {
    'name': 'lastFactorVerification',
    'baseName': 'lastFactorVerification',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'lastPasswordVerification',
    'baseName': 'lastPasswordVerification',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'login',
    'baseName': 'login',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'status',
    'baseName': 'status',
    'type': 'SessionStatus',
    'format': ''
  },
  {
    'name': 'userId',
    'baseName': 'userId',
    'type': 'string',
    'format': ''
  },
  {
    'name': '_links',
    'baseName': '_links',
    'type': '{ [key: string]: any; }',
    'format': ''
  }
];
