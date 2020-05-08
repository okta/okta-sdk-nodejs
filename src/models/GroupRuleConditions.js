/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const GroupRuleExpression = require('./GroupRuleExpression');
const GroupRulePeopleCondition = require('./GroupRulePeopleCondition');

/**
 * @class GroupRuleConditions
 * @extends Resource
 * @property { GroupRuleExpression } expression
 * @property { GroupRulePeopleCondition } people
 */
class GroupRuleConditions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.expression) {
      this.expression = new GroupRuleExpression(this.expression);
    }
    if (resourceJson && resourceJson.people) {
      this.people = new GroupRulePeopleCondition(this.people);
    }
  }

}

module.exports = GroupRuleConditions;
