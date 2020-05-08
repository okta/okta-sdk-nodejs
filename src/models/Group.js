/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const GroupProfile = require('./GroupProfile');

/**
 * @class Group
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastMembershipUpdated
 * @property { dateTime } lastUpdated
 * @property { array } objectClass
 * @property { GroupProfile } profile
 * @property { GroupType } type
 */
class Group extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new GroupProfile(this.profile);
    }
  }

  /**
   * @returns {Promise<Group>}
   */
  update() {
    return this.client.updateGroup(this.id, this);
  }
  delete() {
    return this.client.deleteGroup(this.id);
  }

  /**
   * @param {string} userId
   */
  removeUser(userId) {
    return this.client.removeUserFromGroup(this.id, userId);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link User} instances.
   */
  listUsers(queryParameters) {
    return this.client.listGroupUsers(this.id, queryParameters);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link Application} instances.
   */
  listApplications(queryParameters) {
    return this.client.listAssignedApplicationsForGroup(this.id, queryParameters);
  }

  /**
   * @param {AssignRoleRequest} assignRoleRequest
   * @param {object} queryParameters
   * @returns {Promise<Role>}
   */
  assignRole(assignRoleRequest, queryParameters) {
    return this.client.assignRoleToGroup(this.id, assignRoleRequest, queryParameters);
  }
}

module.exports = Group;
