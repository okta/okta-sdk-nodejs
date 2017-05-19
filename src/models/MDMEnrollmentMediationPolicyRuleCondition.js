/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class MDMEnrollmentMediationPolicyRuleCondition
 */
class MDMEnrollmentMediationPolicyRuleCondition {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
  }


  delete() {
    return this.client.http.delete(this._links.self.href);
  }
}

module.exports = MDMEnrollmentMediationPolicyRuleCondition;