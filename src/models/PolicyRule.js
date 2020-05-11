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
 * @class PolicyRule
 * @extends Resource
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { integer } priority
 * @property { string } status
 * @property { boolean } system
 * @property { string } type
 */
class PolicyRule extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

  /**
   * @param {string} policyId
   * @returns {Promise<PolicyRule>}
   */
  update(policyId) {
    return this.client.updatePolicyRule(policyId, this.id, this);
  }
  /**
   * @param {string} policyId
   */
  delete(policyId) {
    return this.client.deletePolicyRule(policyId, this.id);
  }

  /**
   * @param {string} policyId
   */
  activate(policyId) {
    return this.client.activatePolicyRule(policyId, this.id);
  }

  /**
   * @param {string} policyId
   */
  deactivate(policyId) {
    return this.client.deactivatePolicyRule(policyId, this.id);
  }
}

module.exports = PolicyRule;
