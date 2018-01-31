/*!
 * Copyright (c) 2017-2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const UserCredentials = require('./UserCredentials');
const UserProfile = require('./UserProfile');

/**
 * @class User
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { dateTime } activated
 * @property { dateTime } created
 * @property { UserCredentials } credentials
 * @property { string } id
 * @property { dateTime } lastLogin
 * @property { dateTime } lastUpdated
 * @property { dateTime } passwordChanged
 * @property { UserProfile } profile
 * @property { UserStatus } status
 * @property { dateTime } statusChanged
 * @property { UserStatus } transitioningToStatus
 */
class User extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new UserCredentials(this.credentials);
    }
    if (resourceJson && resourceJson.profile) {
      this.profile = new UserProfile(this.profile);
    }
  }

  update() {
    return this.client.updateUser(this.id, this);
  }
  delete() {
    return this.client.deactivateOrDeleteUser(this.id);
  }
  endAllSessions(queryParameters) {
    return this.client.endAllUserSessions(this.id, queryParameters);
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
  addFactor(factor, queryParameters) {
    return this.client.addFactor(this.id, factor, queryParameters);
  }
  listSupportedFactors() {
    return this.client.listSupportedFactors(this.id);
  }
  listFactors() {
    return this.client.listFactors(this.id);
  }
  listSupportedSecurityQuestions() {
    return this.client.listSupportedSecurityQuestions(this.id);
  }
  getFactor(factorId) {
    return this.client.getFactor(this.id, factorId);
  }
}

module.exports = User;
