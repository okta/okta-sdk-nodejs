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
exports.PolicyRule = void 0;
class PolicyRule {
  constructor() {
    // this.type = 'PolicyRule';
  }
  static getAttributeTypeMap() {
    return PolicyRule.attributeTypeMap;
  }
}
exports.PolicyRule = PolicyRule;
PolicyRule.discriminator = 'type';
PolicyRule.mapping = {
  'ACCESS_POLICY': 'AccessPolicyRule',
  'ENTITY_RISK': 'EntityRiskPolicyRule',
  'IDP_DISCOVERY': 'IdpDiscoveryPolicyRule',
  'MFA_ENROLL': 'AuthenticatorEnrollmentPolicyRule',
  'PASSWORD': 'PasswordPolicyRule',
  'POST_AUTH_SESSION': 'PostAuthSessionPolicyRule',
  'PROFILE_ENROLLMENT': 'ProfileEnrollmentPolicyRule',
  'SIGN_ON': 'OktaSignOnPolicyRule',
};
PolicyRule.attributeTypeMap = [
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
    'name': 'priority',
    'baseName': 'priority',
    'type': 'number',
    'format': ''
  },
  {
    'name': 'status',
    'baseName': 'status',
    'type': 'LifecycleStatus',
    'format': ''
  },
  {
    'name': 'system',
    'baseName': 'system',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'type',
    'baseName': 'type',
    'type': 'PolicyRuleType',
    'format': ''
  },
  {
    'name': '_links',
    'baseName': '_links',
    'type': 'PolicyLinks',
    'format': ''
  }
];
