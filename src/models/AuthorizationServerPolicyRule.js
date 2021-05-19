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
const AuthorizationServerPolicyRuleActions = require('./AuthorizationServerPolicyRuleActions');
const AuthorizationServerPolicyRuleConditions = require('./AuthorizationServerPolicyRuleConditions');

/**
 * @class AuthorizationServerPolicyRule
 * @extends Resource
 * @property { AuthorizationServerPolicyRuleActions } actions
 * @property { AuthorizationServerPolicyRuleConditions } conditions
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { integer } priority
 * @property { string } status
 * @property { boolean } system
 * @property { string } type
 */
class AuthorizationServerPolicyRule extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.actions) {
      this.actions = new AuthorizationServerPolicyRuleActions(resourceJson.actions);
    }
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new AuthorizationServerPolicyRuleConditions(resourceJson.conditions);
    }
  }

  /**
   * @param {string} policyId
   * @param {string} authServerId
   * @returns {Promise<AuthorizationServerPolicyRule>}
   */
  update(policyId, authServerId) {
    return this.httpClient.updateAuthorizationServerPolicyRule(policyId, authServerId, this.id, this);
  }
  /**
   * @param {string} policyId
   * @param {string} authServerId
   */
  delete(policyId, authServerId) {
    return this.httpClient.deleteAuthorizationServerPolicyRule(policyId, authServerId, this.id);
  }

  /**
   * @param {string} authServerId
   * @param {string} policyId
   */
  activate(authServerId, policyId) {
    return this.httpClient.activateAuthorizationServerPolicyRule(authServerId, policyId, this.id);
  }

  /**
   * @param {string} authServerId
   * @param {string} policyId
   */
  deactivate(authServerId, policyId) {
    return this.httpClient.deactivateAuthorizationServerPolicyRule(authServerId, policyId, this.id);
  }
}

module.exports = AuthorizationServerPolicyRule;
