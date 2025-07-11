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
exports.AccessPolicyConstraints = void 0;
/**
* Specifies constraints for the authenticator. Constraints are logically evaluated such that only one constraint object needs to be satisfied. But, within a constraint object, each constraint property must be satisfied.
*/
class AccessPolicyConstraints {
  constructor() {
  }
  static getAttributeTypeMap() {
    return AccessPolicyConstraints.attributeTypeMap;
  }
}
exports.AccessPolicyConstraints = AccessPolicyConstraints;
AccessPolicyConstraints.discriminator = undefined;
AccessPolicyConstraints.attributeTypeMap = [
  {
    'name': 'knowledge',
    'baseName': 'knowledge',
    'type': 'KnowledgeConstraint',
    'format': ''
  },
  {
    'name': 'possession',
    'baseName': 'possession',
    'type': 'PossessionConstraint',
    'format': ''
  }
];
