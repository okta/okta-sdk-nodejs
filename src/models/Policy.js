/*!
 * Copyright (c) 2017-2018, Okta, Inc. and/or its affiliates. All rights reserved.
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


/**
 * @class Policy
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
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
class Policy extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

  /**
   * @returns {Promise<Policy>}
   */
  update() {
    return this.client.updatePolicy(this.id, this);
  }
  delete() {
    return this.client.deletePolicy(this.id);
  }

  activate() {
    return this.client.activatePolicy(this.id);
  }

  deactivate() {
    return this.client.deactivatePolicy(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link PolicyRule} instances.
   */
  listPolicyRules() {
    return this.client.listPolicyRules(this.id);
  }

  /**
   * @param {PolicyRule} policyRule
   * @param {object} queryParameters
   * @returns {Promise<PolicyRule>}
   */
  createRule(policyRule, queryParameters) {
    return this.client.addPolicyRule(this.id, policyRule, queryParameters);
  }

  /**
   * @param {string} ruleId
   * @returns {Promise<PolicyRule>}
   */
  getPolicyRule(ruleId) {
    return this.client.getPolicyRule(this.id, ruleId);
  }
}

module.exports = Policy;
