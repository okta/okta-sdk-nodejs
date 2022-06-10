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
exports.UserPolicyRuleCondition = void 0;
class UserPolicyRuleCondition {
  constructor() {
  }
  static getAttributeTypeMap() {
    return UserPolicyRuleCondition.attributeTypeMap;
  }
}
exports.UserPolicyRuleCondition = UserPolicyRuleCondition;
UserPolicyRuleCondition.discriminator = undefined;
UserPolicyRuleCondition.attributeTypeMap = [
  {
    'name': 'exclude',
    'baseName': 'exclude',
    'type': 'Array<string>',
    'format': ''
  },
  {
    'name': 'inactivity',
    'baseName': 'inactivity',
    'type': 'InactivityPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'include',
    'baseName': 'include',
    'type': 'Array<string>',
    'format': ''
  },
  {
    'name': 'lifecycleExpiration',
    'baseName': 'lifecycleExpiration',
    'type': 'LifecycleExpirationPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'passwordExpiration',
    'baseName': 'passwordExpiration',
    'type': 'PasswordExpirationPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'userLifecycleAttribute',
    'baseName': 'userLifecycleAttribute',
    'type': 'UserLifecycleAttributePolicyRuleCondition',
    'format': ''
  }
];
