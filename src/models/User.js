/*!
 * Copyright (c) 2017, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/**
 *  THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/** @ignore */
var Resource = require('../resource');

/**
 * @class User
 * @extends Resource
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
  listAppLinks(queryParameters) {
    return this.client.listAppLinks(this.id, queryParameters);
  }
  changePassword(changePasswordRequest) {
    return this.client.changePassword(this.id, changePasswordRequest);
  }
  changeRecoveryQuestion(userCredentials) {
    return this.client.changeRecoveryQuestion(this.id, userCredentials);
  }
  forgotPassword(userCredentials, queryParameters) {
    return this.client.forgotPassword(this.id, userCredentials, queryParameters);
  }
  listRoles(queryParameters) {
    return this.client.listAssignedRoles(this.id, queryParameters);
  }
  addRole(role) {
    return this.client.addRoleToUser(this.id, role);
  }
  removeRole(roleId) {
    return this.client.removeRoleFromUser(this.id, roleId);
  }
  listGroupTargetsForRole(roleId, queryParameters) {
    return this.client.listGroupTargetsForRole(this.id, roleId, queryParameters);
  }
  removeGroupTargetFromRole(roleId, groupId) {
    return this.client.removeGroupTargetFromRole(this.id, roleId, groupId);
  }
  addGroupTargetToRole(roleId, groupId) {
    return this.client.addGroupTargetToRole(this.id, roleId, groupId);
  }
  listGroups(queryParameters) {
    return this.client.listUserGroups(this.id, queryParameters);
  }
  activate(queryParameters) {
    return this.client.activateUser(this.id, queryParameters);
  }
  deactivate() {
    return this.client.deactivateUser(this.id);
  }
  suspend() {
    return this.client.suspendUser(this.id);
  }
  unsuspend() {
    return this.client.unsuspendUser(this.id);
  }
  resetPassword(queryParameters) {
    return this.client.resetPassword(this.id, queryParameters);
  }
  expirePassword(queryParameters) {
    return this.client.expirePassword(this.id, queryParameters);
  }
  unlock() {
    return this.client.unlockUser(this.id);
  }
  resetFactors() {
    return this.client.resetAllFactors(this.id);
  }
  addToGroup(groupId) {
    return this.client.addUserToGroup(groupId, this.id);
  }
}

module.exports = User;
