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
const PolicyRuleConditions = require('./PolicyRuleConditions');

/**
 * @class AuthorizationServerPolicy
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { PolicyRuleConditions } conditions
 * @property { dateTime } created
 * @property { string } description
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { integer } priority
 * @property { string } status
 * @property { boolean } system
 * @property { PolicyType } type
 */
class AuthorizationServerPolicy extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new PolicyRuleConditions(resourceJson.conditions);
    }
  }

  /**
   * @param {string} authServerId
   * @returns {Promise<AuthorizationServerPolicy>}
   */
  update(authServerId) {
    return this.httpClient.updateAuthorizationServerPolicy(authServerId, this.id, this);
  }
  /**
   * @param {string} authServerId
   */
  delete(authServerId) {
    return this.httpClient.deleteAuthorizationServerPolicy(authServerId, this.id);
  }

  /**
   * @param {string} authServerId
   * @returns {Promise<Collection>} A collection that will yield {@link AuthorizationServerPolicyRule} instances.
   */
  listPolicyRules(authServerId) {
    return this.httpClient.listAuthorizationServerPolicyRules(this.id, authServerId);
  }

  /**
   * @param {string} authServerId
   * @param {AuthorizationServerPolicyRule} authorizationServerPolicyRule
   * @returns {Promise<AuthorizationServerPolicyRule>}
   */
  createPolicyRule(authServerId, authorizationServerPolicyRule) {
    return this.httpClient.createAuthorizationServerPolicyRule(this.id, authServerId, authorizationServerPolicyRule);
  }

  /**
   * @param {string} authServerId
   * @param {string} ruleId
   * @returns {Promise<AuthorizationServerPolicyRule>}
   */
  getPolicyRule(authServerId, ruleId) {
    return this.httpClient.getAuthorizationServerPolicyRule(this.id, authServerId, ruleId);
  }

  /**
   * @param {string} authServerId
   * @param {string} ruleId
   */
  deletePolicyRule(authServerId, ruleId) {
    return this.httpClient.deleteAuthorizationServerPolicyRule(this.id, authServerId, ruleId);
  }

  /**
   * @param {string} authServerId
   */
  activate(authServerId) {
    return this.httpClient.activateAuthorizationServerPolicy(authServerId, this.id);
  }

  /**
   * @param {string} authServerId
   */
  deactivate(authServerId) {
    return this.httpClient.deactivateAuthorizationServerPolicy(authServerId, this.id);
  }
}

module.exports = AuthorizationServerPolicy;
