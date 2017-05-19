/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class AuthContextMediationPolicyRuleCondition
 */
class AuthContextMediationPolicyRuleCondition {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
  }


  delete() {
    return this.client.http.delete(this._links.self.href);
  }
}

module.exports = AuthContextMediationPolicyRuleCondition;