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
import { AppAndInstancePolicyRuleCondition } from './../models/AppAndInstancePolicyRuleCondition';
import { AppInstancePolicyRuleCondition } from './../models/AppInstancePolicyRuleCondition';
import { BeforeScheduledActionPolicyRuleCondition } from './../models/BeforeScheduledActionPolicyRuleCondition';
import { ClientPolicyCondition } from './../models/ClientPolicyCondition';
import { ContextPolicyRuleCondition } from './../models/ContextPolicyRuleCondition';
import { DevicePolicyRuleCondition } from './../models/DevicePolicyRuleCondition';
import { GrantTypePolicyRuleCondition } from './../models/GrantTypePolicyRuleCondition';
import { GroupPolicyRuleCondition } from './../models/GroupPolicyRuleCondition';
import { IdentityProviderPolicyRuleCondition } from './../models/IdentityProviderPolicyRuleCondition';
import { MDMEnrollmentPolicyRuleCondition } from './../models/MDMEnrollmentPolicyRuleCondition';
import { OAuth2ScopesMediationPolicyRuleCondition } from './../models/OAuth2ScopesMediationPolicyRuleCondition';
import { PasswordPolicyAuthenticationProviderCondition } from './../models/PasswordPolicyAuthenticationProviderCondition';
import { PlatformPolicyRuleCondition } from './../models/PlatformPolicyRuleCondition';
import { PolicyNetworkCondition } from './../models/PolicyNetworkCondition';
import { PolicyPeopleCondition } from './../models/PolicyPeopleCondition';
import { PolicyRuleAuthContextCondition } from './../models/PolicyRuleAuthContextCondition';
import { RiskPolicyRuleCondition } from './../models/RiskPolicyRuleCondition';
import { RiskScorePolicyRuleCondition } from './../models/RiskScorePolicyRuleCondition';
import { UserIdentifierPolicyRuleCondition } from './../models/UserIdentifierPolicyRuleCondition';
import { UserPolicyRuleCondition } from './../models/UserPolicyRuleCondition';
import { UserStatusPolicyRuleCondition } from './../models/UserStatusPolicyRuleCondition';
export declare class OktaSignOnPolicyRuleConditions {
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
  'users'?: UserPolicyRuleCondition;
  'userStatus'?: UserStatusPolicyRuleCondition;
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
