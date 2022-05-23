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


/**
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 2.10.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AppAndInstancePolicyRuleCondition } from './AppAndInstancePolicyRuleCondition';
import { AppInstancePolicyRuleCondition } from './AppInstancePolicyRuleCondition';
import { BeforeScheduledActionPolicyRuleCondition } from './BeforeScheduledActionPolicyRuleCondition';
import { ClientPolicyCondition } from './ClientPolicyCondition';
import { ContextPolicyRuleCondition } from './ContextPolicyRuleCondition';
import { DevicePolicyRuleCondition } from './DevicePolicyRuleCondition';
import { GrantTypePolicyRuleCondition } from './GrantTypePolicyRuleCondition';
import { GroupPolicyRuleCondition } from './GroupPolicyRuleCondition';
import { IdentityProviderPolicyRuleCondition } from './IdentityProviderPolicyRuleCondition';
import { MDMEnrollmentPolicyRuleCondition } from './MDMEnrollmentPolicyRuleCondition';
import { OAuth2ScopesMediationPolicyRuleCondition } from './OAuth2ScopesMediationPolicyRuleCondition';
import { PasswordPolicyAuthenticationProviderCondition } from './PasswordPolicyAuthenticationProviderCondition';
import { PlatformPolicyRuleCondition } from './PlatformPolicyRuleCondition';
import { PolicyNetworkCondition } from './PolicyNetworkCondition';
import { PolicyPeopleCondition } from './PolicyPeopleCondition';
import { PolicyRuleAuthContextCondition } from './PolicyRuleAuthContextCondition';
import { RiskPolicyRuleCondition } from './RiskPolicyRuleCondition';
import { RiskScorePolicyRuleCondition } from './RiskScorePolicyRuleCondition';
import { UserIdentifierPolicyRuleCondition } from './UserIdentifierPolicyRuleCondition';
import { UserPolicyRuleCondition } from './UserPolicyRuleCondition';
import { UserStatusPolicyRuleCondition } from './UserStatusPolicyRuleCondition';
export declare class AuthorizationServerPolicyRuleConditions {
  'app'?: AppAndInstancePolicyRuleCondition;
  'apps'?: AppInstancePolicyRuleCondition;
  'authContext'?: PolicyRuleAuthContextCondition;
  'authProvider'?: PasswordPolicyAuthenticationProviderCondition;
  'beforeScheduledAction'?: BeforeScheduledActionPolicyRuleCondition;
  'clients'?: ClientPolicyCondition;
  'context'?: ContextPolicyRuleCondition;
  'device'?: DevicePolicyRuleCondition;
  'grantTypes'?: GrantTypePolicyRuleCondition;
  'groups'?: GroupPolicyRuleCondition;
  'identityProvider'?: IdentityProviderPolicyRuleCondition;
  'mdmEnrollment'?: MDMEnrollmentPolicyRuleCondition;
  'network'?: PolicyNetworkCondition;
  'people'?: PolicyPeopleCondition;
  'platform'?: PlatformPolicyRuleCondition;
  'risk'?: RiskPolicyRuleCondition;
  'riskScore'?: RiskScorePolicyRuleCondition;
  'scopes'?: OAuth2ScopesMediationPolicyRuleCondition;
  'userIdentifier'?: UserIdentifierPolicyRuleCondition;
  'userStatus'?: UserStatusPolicyRuleCondition;
  'users'?: UserPolicyRuleCondition;
  static readonly discriminator: string | undefined;
  static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
  static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
  constructor();
}
