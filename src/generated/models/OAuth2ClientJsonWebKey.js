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
exports.OAuth2ClientJsonWebKey = void 0;
class OAuth2ClientJsonWebKey {
  constructor() {
  }
  static getAttributeTypeMap() {
    return OAuth2ClientJsonWebKey.attributeTypeMap;
  }
}
exports.OAuth2ClientJsonWebKey = OAuth2ClientJsonWebKey;
OAuth2ClientJsonWebKey.discriminator = undefined;
OAuth2ClientJsonWebKey.attributeTypeMap = [
  {
    'name': 'alg',
    'baseName': 'alg',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'created',
    'baseName': 'created',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'e',
    'baseName': 'e',
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
    'name': 'kid',
    'baseName': 'kid',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'kty',
    'baseName': 'kty',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'lastUpdated',
    'baseName': 'lastUpdated',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'n',
    'baseName': 'n',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'status',
    'baseName': 'status',
    'type': 'OAuth2ClientJsonWebKeyStatusEnum',
    'format': ''
  },
  {
    'name': 'use',
    'baseName': 'use',
    'type': 'string',
    'format': ''
  },
  {
    'name': '_links',
    'baseName': '_links',
    'type': 'OAuthClientSecretLinks',
    'format': ''
  }
];
