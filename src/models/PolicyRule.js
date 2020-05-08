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
