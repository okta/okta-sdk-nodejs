/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

var Resource = require('../resource');

/**
 * @class User
 */
class User extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
  }

  update() {
    return this.client.updateUser(this.id, this);
  }
  delete() {
    return this.client.deactivateOrDeleteUser(this.id);
  }
  listGroups(queryParameters) {
    return this.client.listUserGroups(this.id, queryParameters);
  }
  activate(queryParameters) {
    return this.client.activateUser(this.id, queryParameters);
  }
  deactivate() {
    return this.client.lifecycleDeactivateUser(this.id);
  }
  suspend() {
    return this.client.suspendUser(this.id);
  }
  unsuspend() {
    return this.client.unsuspendUser(this.id);
  }
  unlock() {
    return this.client.unlockUser(this.id);
  }
  forgotPassword(queryParameters) {
    return this.client.forgotPassword(this.id, queryParameters);
  }
  resetFactors() {
    return this.client.resetAllFactors(this.id);
  }
  addToGroup(groupId) {
    return this.client.addUserToGroup(groupId, this.id);
  }
}

module.exports = User;