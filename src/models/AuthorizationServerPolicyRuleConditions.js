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
const ClientPolicyCondition = require('./ClientPolicyCondition');
const GrantTypePolicyRuleCondition = require('./GrantTypePolicyRuleCondition');
const PolicyPeopleCondition = require('./PolicyPeopleCondition');
const OAuth2ScopesMediationPolicyRuleCondition = require('./OAuth2ScopesMediationPolicyRuleCondition');

/**
 * @class AuthorizationServerPolicyRuleConditions
 * @extends Resource
 * @property { ClientPolicyCondition } clients
 * @property { GrantTypePolicyRuleCondition } grantTypes
 * @property { PolicyPeopleCondition } people
 * @property { OAuth2ScopesMediationPolicyRuleCondition } scopes
 */
class AuthorizationServerPolicyRuleConditions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.clients) {
      this.clients = new ClientPolicyCondition(resourceJson.clients);
    }
    if (resourceJson && resourceJson.grantTypes) {
      this.grantTypes = new GrantTypePolicyRuleCondition(resourceJson.grantTypes);
    }
    if (resourceJson && resourceJson.people) {
      this.people = new PolicyPeopleCondition(resourceJson.people);
    }
    if (resourceJson && resourceJson.scopes) {
      this.scopes = new OAuth2ScopesMediationPolicyRuleCondition(resourceJson.scopes);
    }
  }

}

module.exports = AuthorizationServerPolicyRuleConditions;
