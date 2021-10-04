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
const PolicyRuleActions = require('./PolicyRuleActions');
const PolicyRuleConditions = require('./PolicyRuleConditions');

/**
 * @class PolicyRule
 * @extends Resource
 * @property { PolicyRuleActions } actions
 * @property { PolicyRuleConditions } conditions
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { integer } priority
 * @property { string } status
 * @property { boolean } system
 * @property { string } type
 */
class PolicyRule extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['actions']) {
      this['actions'] = new PolicyRuleActions(resourceJson[actions]);
    }
    if (resourceJson && resourceJson['conditions']) {
      this['conditions'] = new PolicyRuleConditions(resourceJson[conditions]);
    }
    if (resourceJson && resourceJson['created']) {
      this['created'] = resourceJson['created'];
    }
    if (resourceJson && resourceJson['id']) {
      this['id'] = resourceJson['id'];
    }
    if (resourceJson && resourceJson['lastUpdated']) {
      this['lastUpdated'] = resourceJson['lastUpdated'];
    }
    if (resourceJson && resourceJson['name']) {
      this['name'] = resourceJson['name'];
    }
    if (resourceJson && resourceJson['priority']) {
      this['priority'] = resourceJson['priority'];
    }
    if (resourceJson && resourceJson['status']) {
      this['status'] = resourceJson['status'];
    }
    if (resourceJson && resourceJson['system']) {
      this['system'] = resourceJson['system'];
    }
    if (resourceJson && resourceJson['type']) {
      this['type'] = resourceJson['type'];
    }
  }

  /**
   * @param {string} policyId
   * @returns {Promise<PolicyRule>}
   */
  update(policyId) {
    return this.httpClient.updatePolicyRule(policyId, this.id, this);
  }
  /**
   * @param {string} policyId
   */
  delete(policyId) {
    return this.httpClient.deletePolicyRule(policyId, this.id);
  }

  /**
   * @param {string} policyId
   */
  activate(policyId) {
    return this.httpClient.activatePolicyRule(policyId, this.id);
  }

  /**
   * @param {string} policyId
   */
  deactivate(policyId) {
    return this.httpClient.deactivatePolicyRule(policyId, this.id);
  }
}

module.exports = PolicyRule;
