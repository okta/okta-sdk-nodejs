/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const DevicePolicyRuleConditionPlatform = require('./DevicePolicyRuleConditionPlatform');

/**
 * @class DevicePolicyRuleCondition
 * @extends Resource
 * @property { boolean } migrated
 * @property { DevicePolicyRuleConditionPlatform } platform
 * @property { boolean } rooted
 * @property { string } trustLevel
 */
class DevicePolicyRuleCondition extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.platform) {
      this.platform = new DevicePolicyRuleConditionPlatform(this.platform);
    }
  }

}

module.exports = DevicePolicyRuleCondition;
