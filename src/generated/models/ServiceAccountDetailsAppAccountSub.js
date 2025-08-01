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
exports.ServiceAccountDetailsAppAccountSub = void 0;
/**
* Details for a SaaS app account, which will be managed as a service account
*/
class ServiceAccountDetailsAppAccountSub {
  constructor() {
  }
  static getAttributeTypeMap() {
    return ServiceAccountDetailsAppAccountSub.attributeTypeMap;
  }
}
exports.ServiceAccountDetailsAppAccountSub = ServiceAccountDetailsAppAccountSub;
ServiceAccountDetailsAppAccountSub.discriminator = undefined;
ServiceAccountDetailsAppAccountSub.attributeTypeMap = [
  {
    'name': 'appGlobalName',
    'baseName': 'appGlobalName',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'appInstanceName',
    'baseName': 'appInstanceName',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'credentials',
    'baseName': 'credentials',
    'type': 'AppServiceAccountCredentials',
    'format': ''
  },
  {
    'name': 'oktaApplicationId',
    'baseName': 'oktaApplicationId',
    'type': 'string',
    'format': ''
  }
];
