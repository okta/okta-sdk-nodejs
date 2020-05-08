/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const GroupRuleAction = require('./GroupRuleAction');
const GroupRuleConditions = require('./GroupRuleConditions');

/**
 * @class GroupRule
 * @extends Resource
 * @property { GroupRuleAction } actions
 * @property { GroupRuleConditions } conditions
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { GroupRuleStatus } status
 * @property { string } type
 */
class GroupRule extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.actions) {
      this.actions = new GroupRuleAction(this.actions);
    }
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new GroupRuleConditions(this.conditions);
    }
  }

  /**
   * @returns {Promise<GroupRule>}
   */
  update() {
    return this.client.updateGroupRule(this.id, this);
  }
  delete() {
    return this.client.deleteGroupRule(this.id);
  }

  activate() {
    return this.client.activateGroupRule(this.id);
  }

  deactivate() {
    return this.client.deactivateGroupRule(this.id);
  }
}

module.exports = GroupRule;
