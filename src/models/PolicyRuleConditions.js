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

var Resource = require('../resource');
const AppAndInstancePolicyRuleCondition = require('./AppAndInstancePolicyRuleCondition');
const AppInstancePolicyRuleCondition = require('./AppInstancePolicyRuleCondition');
const PolicyRuleAuthContextCondition = require('./PolicyRuleAuthContextCondition');
const PasswordPolicyAuthenticationProviderCondition = require('./PasswordPolicyAuthenticationProviderCondition');
const BeforeScheduledActionPolicyRuleCondition = require('./BeforeScheduledActionPolicyRuleCondition');
const ClientPolicyCondition = require('./ClientPolicyCondition');
const ContextPolicyRuleCondition = require('./ContextPolicyRuleCondition');
const DevicePolicyRuleCondition = require('./DevicePolicyRuleCondition');
const GrantTypePolicyRuleCondition = require('./GrantTypePolicyRuleCondition');
const GroupPolicyRuleCondition = require('./GroupPolicyRuleCondition');
const IdentityProviderPolicyRuleCondition = require('./IdentityProviderPolicyRuleCondition');
const MDMEnrollmentPolicyRuleCondition = require('./MDMEnrollmentPolicyRuleCondition');
const PolicyNetworkCondition = require('./PolicyNetworkCondition');
const PolicyPeopleCondition = require('./PolicyPeopleCondition');
const PlatformPolicyRuleCondition = require('./PlatformPolicyRuleCondition');
const RiskPolicyRuleCondition = require('./RiskPolicyRuleCondition');
const RiskScorePolicyRuleCondition = require('./RiskScorePolicyRuleCondition');
const OAuth2ScopesMediationPolicyRuleCondition = require('./OAuth2ScopesMediationPolicyRuleCondition');
const UserIdentifierPolicyRuleCondition = require('./UserIdentifierPolicyRuleCondition');
const UserStatusPolicyRuleCondition = require('./UserStatusPolicyRuleCondition');
const UserPolicyRuleCondition = require('./UserPolicyRuleCondition');

/**
 * @class PolicyRuleConditions
 * @extends Resource
 * @property { AppAndInstancePolicyRuleCondition } app
 * @property { AppInstancePolicyRuleCondition } apps
 * @property { PolicyRuleAuthContextCondition } authContext
 * @property { PasswordPolicyAuthenticationProviderCondition } authProvider
 * @property { BeforeScheduledActionPolicyRuleCondition } beforeScheduledAction
 * @property { ClientPolicyCondition } clients
 * @property { ContextPolicyRuleCondition } context
 * @property { DevicePolicyRuleCondition } device
 * @property { GrantTypePolicyRuleCondition } grantTypes
 * @property { GroupPolicyRuleCondition } groups
 * @property { IdentityProviderPolicyRuleCondition } identityProvider
 * @property { MDMEnrollmentPolicyRuleCondition } mdmEnrollment
 * @property { PolicyNetworkCondition } network
 * @property { PolicyPeopleCondition } people
 * @property { PlatformPolicyRuleCondition } platform
 * @property { RiskPolicyRuleCondition } risk
 * @property { RiskScorePolicyRuleCondition } riskScore
 * @property { OAuth2ScopesMediationPolicyRuleCondition } scopes
 * @property { UserIdentifierPolicyRuleCondition } userIdentifier
 * @property { UserStatusPolicyRuleCondition } userStatus
 * @property { UserPolicyRuleCondition } users
 */
class PolicyRuleConditions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = PolicyRuleConditions;
