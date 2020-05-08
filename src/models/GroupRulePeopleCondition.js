/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const GroupRuleGroupCondition = require('./GroupRuleGroupCondition');
const GroupRuleUserCondition = require('./GroupRuleUserCondition');

/**
 * @class GroupRulePeopleCondition
 * @extends Resource
 * @property { GroupRuleGroupCondition } groups
 * @property { GroupRuleUserCondition } users
 */
class GroupRulePeopleCondition extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.groups) {
      this.groups = new GroupRuleGroupCondition(this.groups);
    }
    if (resourceJson && resourceJson.users) {
      this.users = new GroupRuleUserCondition(this.users);
    }
  }

}

module.exports = GroupRulePeopleCondition;
