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
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'app')) {
      this.app = new AppAndInstancePolicyRuleCondition(resourceJson.app);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'apps')) {
      this.apps = new AppInstancePolicyRuleCondition(resourceJson.apps);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'authContext')) {
      this.authContext = new PolicyRuleAuthContextCondition(resourceJson.authContext);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'authProvider')) {
      this.authProvider = new PasswordPolicyAuthenticationProviderCondition(resourceJson.authProvider);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'beforeScheduledAction')) {
      this.beforeScheduledAction = new BeforeScheduledActionPolicyRuleCondition(resourceJson.beforeScheduledAction);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'clients')) {
      this.clients = new ClientPolicyCondition(resourceJson.clients);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'context')) {
      this.context = new ContextPolicyRuleCondition(resourceJson.context);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'device')) {
      this.device = new DevicePolicyRuleCondition(resourceJson.device);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'grantTypes')) {
      this.grantTypes = new GrantTypePolicyRuleCondition(resourceJson.grantTypes);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'groups')) {
      this.groups = new GroupPolicyRuleCondition(resourceJson.groups);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'identityProvider')) {
      this.identityProvider = new IdentityProviderPolicyRuleCondition(resourceJson.identityProvider);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'mdmEnrollment')) {
      this.mdmEnrollment = new MDMEnrollmentPolicyRuleCondition(resourceJson.mdmEnrollment);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'network')) {
      this.network = new PolicyNetworkCondition(resourceJson.network);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'people')) {
      this.people = new PolicyPeopleCondition(resourceJson.people);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'platform')) {
      this.platform = new PlatformPolicyRuleCondition(resourceJson.platform);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'risk')) {
      this.risk = new RiskPolicyRuleCondition(resourceJson.risk);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'riskScore')) {
      this.riskScore = new RiskScorePolicyRuleCondition(resourceJson.riskScore);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'scopes')) {
      this.scopes = new OAuth2ScopesMediationPolicyRuleCondition(resourceJson.scopes);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'userIdentifier')) {
      this.userIdentifier = new UserIdentifierPolicyRuleCondition(resourceJson.userIdentifier);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'userStatus')) {
      this.userStatus = new UserStatusPolicyRuleCondition(resourceJson.userStatus);
    }
    if (resourceJson && Object.prototype.hasOwnProperty.call(resourceJson, 'users')) {
      this.users = new UserPolicyRuleCondition(resourceJson.users);
    }
  }

}

module.exports = PolicyRuleConditions;
