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
exports.PasswordPolicyRuleConditions = void 0;
class PasswordPolicyRuleConditions {
  constructor() {
  }
  static getAttributeTypeMap() {
    return PasswordPolicyRuleConditions.attributeTypeMap;
  }
}
exports.PasswordPolicyRuleConditions = PasswordPolicyRuleConditions;
PasswordPolicyRuleConditions.discriminator = undefined;
PasswordPolicyRuleConditions.attributeTypeMap = [
  {
    'name': 'app',
    'baseName': 'app',
    'type': 'AppAndInstancePolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'apps',
    'baseName': 'apps',
    'type': 'AppInstancePolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'authContext',
    'baseName': 'authContext',
    'type': 'PolicyRuleAuthContextCondition',
    'format': ''
  },
  {
    'name': 'authProvider',
    'baseName': 'authProvider',
    'type': 'PasswordPolicyAuthenticationProviderCondition',
    'format': ''
  },
  {
    'name': 'beforeScheduledAction',
    'baseName': 'beforeScheduledAction',
    'type': 'BeforeScheduledActionPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'clients',
    'baseName': 'clients',
    'type': 'ClientPolicyCondition',
    'format': ''
  },
  {
    'name': 'context',
    'baseName': 'context',
    'type': 'ContextPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'device',
    'baseName': 'device',
    'type': 'DevicePolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'grantTypes',
    'baseName': 'grantTypes',
    'type': 'GrantTypePolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'groups',
    'baseName': 'groups',
    'type': 'GroupPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'identityProvider',
    'baseName': 'identityProvider',
    'type': 'IdentityProviderPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'mdmEnrollment',
    'baseName': 'mdmEnrollment',
    'type': 'MDMEnrollmentPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'network',
    'baseName': 'network',
    'type': 'PolicyNetworkCondition',
    'format': ''
  },
  {
    'name': 'people',
    'baseName': 'people',
    'type': 'PolicyPeopleCondition',
    'format': ''
  },
  {
    'name': 'platform',
    'baseName': 'platform',
    'type': 'PlatformPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'risk',
    'baseName': 'risk',
    'type': 'RiskPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'riskScore',
    'baseName': 'riskScore',
    'type': 'RiskScorePolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'scopes',
    'baseName': 'scopes',
    'type': 'OAuth2ScopesMediationPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'userIdentifier',
    'baseName': 'userIdentifier',
    'type': 'UserIdentifierPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'users',
    'baseName': 'users',
    'type': 'UserPolicyRuleCondition',
    'format': ''
  },
  {
    'name': 'userStatus',
    'baseName': 'userStatus',
    'type': 'UserStatusPolicyRuleCondition',
    'format': ''
  }
];
