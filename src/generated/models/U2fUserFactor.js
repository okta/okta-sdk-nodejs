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
exports.U2fUserFactor = void 0;
const UserFactor_1 = require('./../models/UserFactor');
class U2fUserFactor extends UserFactor_1.UserFactor {
  constructor() {
    super();
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(U2fUserFactor.attributeTypeMap);
  }
}
exports.U2fUserFactor = U2fUserFactor;
U2fUserFactor.discriminator = undefined;
U2fUserFactor.attributeTypeMap = [
  {
    'name': 'profile',
    'baseName': 'profile',
    'type': 'U2fUserFactorProfile',
    'format': ''
  }
];
