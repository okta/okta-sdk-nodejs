/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const Duration = require('./Duration');
const ScheduledUserLifecycleAction = require('./ScheduledUserLifecycleAction');

/**
 * @class BeforeScheduledActionPolicyRuleCondition
 * @extends Resource
 * @property { Duration } duration
 * @property { ScheduledUserLifecycleAction } lifecycleAction
 */
class BeforeScheduledActionPolicyRuleCondition extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.duration) {
      this.duration = new Duration(this.duration);
    }
    if (resourceJson && resourceJson.lifecycleAction) {
      this.lifecycleAction = new ScheduledUserLifecycleAction(this.lifecycleAction);
    }
  }

}

module.exports = BeforeScheduledActionPolicyRuleCondition;
