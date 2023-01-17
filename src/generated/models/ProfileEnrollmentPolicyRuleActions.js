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
exports.ProfileEnrollmentPolicyRuleActions = void 0;
class ProfileEnrollmentPolicyRuleActions {
  constructor() {
  }
  static getAttributeTypeMap() {
    return ProfileEnrollmentPolicyRuleActions.attributeTypeMap;
  }
}
exports.ProfileEnrollmentPolicyRuleActions = ProfileEnrollmentPolicyRuleActions;
ProfileEnrollmentPolicyRuleActions.discriminator = undefined;
ProfileEnrollmentPolicyRuleActions.attributeTypeMap = [
  {
    'name': 'enroll',
    'baseName': 'enroll',
    'type': 'PolicyRuleActionsEnroll',
    'format': ''
  },
  {
    'name': 'idp',
    'baseName': 'idp',
    'type': 'IdpPolicyRuleAction',
    'format': ''
  },
  {
    'name': 'passwordChange',
    'baseName': 'passwordChange',
    'type': 'PasswordPolicyRuleAction',
    'format': ''
  },
  {
    'name': 'selfServicePasswordReset',
    'baseName': 'selfServicePasswordReset',
    'type': 'PasswordPolicyRuleAction',
    'format': ''
  },
  {
    'name': 'selfServiceUnlock',
    'baseName': 'selfServiceUnlock',
    'type': 'PasswordPolicyRuleAction',
    'format': ''
  },
  {
    'name': 'signon',
    'baseName': 'signon',
    'type': 'OktaSignOnPolicyRuleSignonActions',
    'format': ''
  },
  {
    'name': 'profileEnrollment',
    'baseName': 'profileEnrollment',
    'type': 'ProfileEnrollmentPolicyRuleAction',
    'format': ''
  }
];
