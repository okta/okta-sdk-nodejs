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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

import { Resource } from '../resource';
import { Client } from '../client';
import { OptionalKnownProperties } from '../optional-known-properties-type';
import { AppAndInstancePolicyRuleCondition } from './AppAndInstancePolicyRuleCondition';
import { AppInstancePolicyRuleCondition } from './AppInstancePolicyRuleCondition';
import { PolicyRuleAuthContextCondition } from './PolicyRuleAuthContextCondition';
import { PasswordPolicyAuthenticationProviderCondition } from './PasswordPolicyAuthenticationProviderCondition';
import { BeforeScheduledActionPolicyRuleCondition } from './BeforeScheduledActionPolicyRuleCondition';
import { ClientPolicyCondition } from './ClientPolicyCondition';
import { ContextPolicyRuleCondition } from './ContextPolicyRuleCondition';
import { DevicePolicyRuleCondition } from './DevicePolicyRuleCondition';
import { GrantTypePolicyRuleCondition } from './GrantTypePolicyRuleCondition';
import { GroupPolicyRuleCondition } from './GroupPolicyRuleCondition';
import { IdentityProviderPolicyRuleCondition } from './IdentityProviderPolicyRuleCondition';
import { MDMEnrollmentPolicyRuleCondition } from './MDMEnrollmentPolicyRuleCondition';
import { PolicyNetworkCondition } from './PolicyNetworkCondition';
import { PolicyPeopleCondition } from './PolicyPeopleCondition';
import { PlatformPolicyRuleCondition } from './PlatformPolicyRuleCondition';
import { RiskPolicyRuleCondition } from './RiskPolicyRuleCondition';
import { RiskScorePolicyRuleCondition } from './RiskScorePolicyRuleCondition';
import { OAuth2ScopesMediationPolicyRuleCondition } from './OAuth2ScopesMediationPolicyRuleCondition';
import { UserIdentifierPolicyRuleCondition } from './UserIdentifierPolicyRuleCondition';
import { UserStatusPolicyRuleCondition } from './UserStatusPolicyRuleCondition';
import { UserPolicyRuleCondition } from './UserPolicyRuleCondition';

declare class PolicyRuleConditions extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  app: AppAndInstancePolicyRuleCondition;
  apps: AppInstancePolicyRuleCondition;
  authContext: PolicyRuleAuthContextCondition;
  authProvider: PasswordPolicyAuthenticationProviderCondition;
  beforeScheduledAction: BeforeScheduledActionPolicyRuleCondition;
  clients: ClientPolicyCondition;
  context: ContextPolicyRuleCondition;
  device: DevicePolicyRuleCondition;
  grantTypes: GrantTypePolicyRuleCondition;
  groups: GroupPolicyRuleCondition;
  identityProvider: IdentityProviderPolicyRuleCondition;
  mdmEnrollment: MDMEnrollmentPolicyRuleCondition;
  network: PolicyNetworkCondition;
  people: PolicyPeopleCondition;
  platform: PlatformPolicyRuleCondition;
  risk: RiskPolicyRuleCondition;
  riskScore: RiskScorePolicyRuleCondition;
  scopes: OAuth2ScopesMediationPolicyRuleCondition;
  userIdentifier: UserIdentifierPolicyRuleCondition;
  userStatus: UserStatusPolicyRuleCondition;
  users: UserPolicyRuleCondition;

}

type PolicyRuleConditionsOptions = OptionalKnownProperties<PolicyRuleConditions>;

export {
  PolicyRuleConditions,
  PolicyRuleConditionsOptions
};
