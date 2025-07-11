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
exports.ECKeyJWK = void 0;
/**
* Elliptic curve key in JSON Web Key (JWK) format. It\'s used during enrollment to encrypt fulfillment requests to Yubico, or during activation to verify Yubico\'s JWS (JSON Web Signature) objects in fulfillment responses. The currently agreed protocol uses P-384.
*/
class ECKeyJWK {
  constructor() {
  }
  static getAttributeTypeMap() {
    return ECKeyJWK.attributeTypeMap;
  }
}
exports.ECKeyJWK = ECKeyJWK;
ECKeyJWK.discriminator = undefined;
ECKeyJWK.attributeTypeMap = [
  {
    'name': 'crv',
    'baseName': 'crv',
    'type': 'ECKeyJWKCrvEnum',
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
    'type': 'ECKeyJWKKtyEnum',
    'format': ''
  },
  {
    'name': 'use',
    'baseName': 'use',
    'type': 'ECKeyJWKUseEnum',
    'format': ''
  },
  {
    'name': 'x',
    'baseName': 'x',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'y',
    'baseName': 'y',
    'type': 'string',
    'format': ''
  }
];
