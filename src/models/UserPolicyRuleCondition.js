/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const InactivityPolicyRuleCondition = require('./InactivityPolicyRuleCondition');
const LifecycleExpirationPolicyRuleCondition = require('./LifecycleExpirationPolicyRuleCondition');
const PasswordExpirationPolicyRuleCondition = require('./PasswordExpirationPolicyRuleCondition');
const UserLifecycleAttributePolicyRuleCondition = require('./UserLifecycleAttributePolicyRuleCondition');

/**
 * @class UserPolicyRuleCondition
 * @extends Resource
 * @property { array } exclude
 * @property { InactivityPolicyRuleCondition } inactivity
 * @property { array } include
 * @property { LifecycleExpirationPolicyRuleCondition } lifecycleExpiration
 * @property { PasswordExpirationPolicyRuleCondition } passwordExpiration
 * @property { UserLifecycleAttributePolicyRuleCondition } userLifecycleAttribute
 */
class UserPolicyRuleCondition extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.inactivity) {
      this.inactivity = new InactivityPolicyRuleCondition(this.inactivity);
    }
    if (resourceJson && resourceJson.lifecycleExpiration) {
      this.lifecycleExpiration = new LifecycleExpirationPolicyRuleCondition(this.lifecycleExpiration);
    }
    if (resourceJson && resourceJson.passwordExpiration) {
      this.passwordExpiration = new PasswordExpirationPolicyRuleCondition(this.passwordExpiration);
    }
    if (resourceJson && resourceJson.userLifecycleAttribute) {
      this.userLifecycleAttribute = new UserLifecycleAttributePolicyRuleCondition(this.userLifecycleAttribute);
    }
  }

}

module.exports = UserPolicyRuleCondition;
