/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const GroupRuleGroupAssignment = require('./GroupRuleGroupAssignment');

/**
 * @class GroupRuleAction
 * @extends Resource
 * @property { GroupRuleGroupAssignment } assignUserToGroups
 */
class GroupRuleAction extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.assignUserToGroups) {
      this.assignUserToGroups = new GroupRuleGroupAssignment(this.assignUserToGroups);
    }
  }

}

module.exports = GroupRuleAction;
