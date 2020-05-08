/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const GroupCondition = require('./GroupCondition');
const UserCondition = require('./UserCondition');

/**
 * @class PolicyPeopleCondition
 * @extends Resource
 * @property { GroupCondition } groups
 * @property { UserCondition } users
 */
class PolicyPeopleCondition extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.groups) {
      this.groups = new GroupCondition(this.groups);
    }
    if (resourceJson && resourceJson.users) {
      this.users = new UserCondition(this.users);
    }
  }

}

module.exports = PolicyPeopleCondition;
