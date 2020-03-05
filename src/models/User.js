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

  /**
   * @param {object} queryParameters
   * @returns {Promise<User>}
   */
  update(queryParameters) {
    return this.httpClient.updateUser(this.id, this, queryParameters);
  }
  /**
   * @param {object} queryParameters
   */
  delete(queryParameters) {
    return this.httpClient.deactivateOrDeleteUser(this.id, queryParameters);
  }

  /**
   * @param {object} queryParameters
   */
  endAllSessions(queryParameters) {
    return this.httpClient.endAllUserSessions(this.id, queryParameters);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link AppLink} instances.
   */
  listAppLinks(queryParameters) {
    return this.httpClient.listAppLinks(this.id, queryParameters);
  }

  /**
   * @param {ChangePasswordRequest} changePasswordRequest
   * @param {object} queryParameters
   * @returns {Promise<UserCredentials>}
   */
  changePassword(changePasswordRequest, queryParameters) {
    return this.httpClient.changePassword(this.id, changePasswordRequest, queryParameters);
  }

  /**
   * @param {UserCredentials} userCredentials
   * @returns {Promise<UserCredentials>}
   */
  changeRecoveryQuestion(userCredentials) {
    return this.httpClient.changeRecoveryQuestion(this.id, userCredentials);
  }

  /**
   * @param {UserCredentials} userCredentials
   * @param {object} queryParameters
   * @returns {Promise<ForgotPasswordResponse>}
   */
  forgotPassword(userCredentials, queryParameters) {
    return this.httpClient.forgotPassword(this.id, userCredentials, queryParameters);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link Role} instances.
   */
  listRoles(queryParameters) {
    return this.httpClient.listAssignedRoles(this.id, queryParameters);
  }

  /**
   * @param {Role} role
   * @returns {Promise<Role>}
   */
  addRole(role) {
    return this.httpClient.addRoleToUser(this.id, role);
  }

  /**
   * @param {string} roleId
   */
  removeRole(roleId) {
    return this.httpClient.removeRoleFromUser(this.id, roleId);
  }

  /**
   * @param {string} roleId
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
   */
  listGroupTargetsForRole(roleId, queryParameters) {
    return this.httpClient.listGroupTargetsForRole(this.id, roleId, queryParameters);
  }

  /**
   * @param {string} roleId
   * @param {string} groupId
   */
  removeGroupTargetFromRole(roleId, groupId) {
    return this.httpClient.removeGroupTargetFromRole(this.id, roleId, groupId);
  }

  /**
   * @param {string} roleId
   * @param {string} groupId
   */
  addGroupTargetToRole(roleId, groupId) {
    return this.httpClient.addGroupTargetToRole(this.id, roleId, groupId);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
   */
  listGroups(queryParameters) {
    return this.httpClient.listUserGroups(this.id, queryParameters);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<UserActivationToken>}
   */
  activate(queryParameters) {
    return this.httpClient.activateUser(this.id, queryParameters);
  }

  /**
   * @param {object} queryParameters
   */
  deactivate(queryParameters) {
    return this.httpClient.deactivateUser(this.id, queryParameters);
  }

  suspend() {
    return this.httpClient.suspendUser(this.id);
  }

  unsuspend() {
    return this.httpClient.unsuspendUser(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<ResetPasswordToken>}
   */
  resetPassword(queryParameters) {
    return this.httpClient.resetPassword(this.id, queryParameters);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<TempPassword>}
   */
  expirePassword(queryParameters) {
    return this.httpClient.expirePassword(this.id, queryParameters);
  }

  unlock() {
    return this.httpClient.unlockUser(this.id);
  }

  resetFactors() {
    return this.httpClient.resetAllFactors(this.id);
  }

  /**
   * @param {string} groupId
   */
  addToGroup(groupId) {
    return this.httpClient.addUserToGroup(groupId, this.id);
  }

  /**
   * @param {Factor} factor
   * @param {object} queryParameters
   * @returns {Promise<Factor>}
   */
  addFactor(factor, queryParameters) {
    return this.httpClient.addFactor(this.id, factor, queryParameters);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Factor} instances.
   */
  listSupportedFactors() {
    return this.httpClient.listSupportedFactors(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Factor} instances.
   */
  listFactors() {
    return this.httpClient.listFactors(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link SecurityQuestion} instances.
   */
  listSupportedSecurityQuestions() {
    return this.httpClient.listSupportedSecurityQuestions(this.id);
  }

  /**
   * @param {string} factorId
   * @returns {Promise<Factor>}
   */
  getFactor(factorId) {
    return this.httpClient.getFactor(this.id, factorId);
  }
}

module.exports = User;
