/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PolicyRuleConditions = require('./PolicyRuleConditions');

/**
 * @class Policy
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
class Policy extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new PolicyRuleConditions(this.conditions);
    }
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
   * @returns {Promise<PolicyRule>}
   */
  createRule(policyRule) {
    return this.client.createPolicyRule(this.id, policyRule);
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
