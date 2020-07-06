/*!
 * Copyright (c) 2017-2020, Okta, Inc. and/or its affiliates. All rights reserved.
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
const UserType = require('./UserType');

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
 * @property { UserType } type
 */
class User extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new UserCredentials(resourceJson.credentials);
    }
    if (resourceJson && resourceJson.profile) {
      this.profile = new UserProfile(resourceJson.profile);
    }
    if (resourceJson && resourceJson.type) {
      this.type = new UserType(resourceJson.type);
    }
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<User>}
   */
  update(queryParameters) {
    return this.client.updateUser(this.id, this, queryParameters);
  }
  /**
   * @param {object} queryParameters
   */
  delete(queryParameters) {
    return this.client.deactivateOrDeleteUser(this.id, queryParameters);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link AppLink} instances.
   */
  listAppLinks() {
    return this.client.listAppLinks(this.id);
  }

  /**
   * @param {ChangePasswordRequest} changePasswordRequest
   * @param {object} queryParameters
   * @returns {Promise<UserCredentials>}
   */
  changePassword(changePasswordRequest, queryParameters) {
    return this.client.changePassword(this.id, changePasswordRequest, queryParameters);
  }

  /**
   * @param {UserCredentials} userCredentials
   * @returns {Promise<UserCredentials>}
   */
  changeRecoveryQuestion(userCredentials) {
    return this.client.changeRecoveryQuestion(this.id, userCredentials);
  }

  /**
   * @param {UserCredentials} userCredentials
   * @param {object} queryParameters
   * @returns {Promise<ForgotPasswordResponse>}
   */
  forgotPasswordSetNewPassword(userCredentials, queryParameters) {
    return this.client.forgotPasswordSetNewPassword(this.id, userCredentials, queryParameters);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<ForgotPasswordResponse>}
   */
  forgotPasswordGenerateOneTimeToken(queryParameters) {
    return this.client.forgotPasswordGenerateOneTimeToken(this.id, queryParameters);
  }

  /**
   * @param {AssignRoleRequest} assignRoleRequest
   * @param {object} queryParameters
   * @returns {Promise<Role>}
   */
  assignRole(assignRoleRequest, queryParameters) {
    return this.client.assignRoleToUser(this.id, assignRoleRequest, queryParameters);
  }

  /**
   * @param {string} roleId
   */
  removeRole(roleId) {
    return this.client.removeRoleFromUser(this.id, roleId);
  }

  /**
   * @param {string} roleId
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
   */
  listGroupTargets(roleId, queryParameters) {
    return this.client.listGroupTargetsForRole(this.id, roleId, queryParameters);
  }

  /**
   * @param {string} roleId
   * @param {string} groupId
   */
  removeGroupTarget(roleId, groupId) {
    return this.client.removeGroupTargetFromRole(this.id, roleId, groupId);
  }

  /**
   * @param {string} roleId
   * @param {string} groupId
   */
  addGroupTarget(roleId, groupId) {
    return this.client.addGroupTargetToRole(this.id, roleId, groupId);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link Role} instances.
   */
  listAssignedRoles(queryParameters) {
    return this.client.listAssignedRolesForUser(this.id, queryParameters);
  }

  /**
   * @param {string} roleId
   */
  addAllAppsAsTarget(roleId) {
    return this.client.addAllAppsAsTargetToRole(this.id, roleId);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
   */
  listGroups() {
    return this.client.listUserGroups(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2ScopeConsentGrant} instances.
   */
  listGrants(queryParameters) {
    return this.client.listUserGrants(this.id, queryParameters);
  }

  revokeGrants() {
    return this.client.revokeUserGrants(this.id);
  }

  /**
   * @param {string} grantId
   */
  revokeGrant(grantId) {
    return this.client.revokeUserGrant(this.id, grantId);
  }

  /**
   * @param {string} clientId
   */
  revokeGrantsForUserAndClient(clientId) {
    return this.client.revokeGrantsForUserAndClient(this.id, clientId);
  }

  /**
   * @param {string} clientId
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2RefreshToken} instances.
   */
  listRefreshTokensForUserAndClient(clientId, queryParameters) {
    return this.client.listRefreshTokensForUserAndClient(this.id, clientId, queryParameters);
  }

  /**
   * @param {string} clientId
   * @param {string} tokenId
   */
  revokeTokenForUserAndClient(clientId, tokenId) {
    return this.client.revokeTokenForUserAndClient(this.id, clientId, tokenId);
  }

  /**
   * @param {string} clientId
   * @param {string} tokenId
   * @param {object} queryParameters
   * @returns {Promise<OAuth2RefreshToken>}
   */
  getRefreshTokenForUserAndClient(clientId, tokenId, queryParameters) {
    return this.client.getRefreshTokenForUserAndClient(this.id, clientId, tokenId, queryParameters);
  }

  /**
   * @param {string} clientId
   */
  revokeTokensForUserAndClient(clientId) {
    return this.client.revokeTokensForUserAndClient(this.id, clientId);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link OAuth2Client} instances.
   */
  listClients() {
    return this.client.listUserClients(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<UserActivationToken>}
   */
  activate(queryParameters) {
    return this.client.activateUser(this.id, queryParameters);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<UserActivationToken>}
   */
  reactivate(queryParameters) {
    return this.client.reactivateUser(this.id, queryParameters);
  }

  /**
   * @param {object} queryParameters
   */
  deactivate(queryParameters) {
    return this.client.deactivateUser(this.id, queryParameters);
  }

  suspend() {
    return this.client.suspendUser(this.id);
  }

  unsuspend() {
    return this.client.unsuspendUser(this.id);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<ResetPasswordToken>}
   */
  resetPassword(queryParameters) {
    return this.client.resetPassword(this.id, queryParameters);
  }

  /**
   * @returns {Promise<User>}
   */
  expirePassword() {
    return this.client.expirePassword(this.id);
  }

  /**
   * @returns {Promise<TempPassword>}
   */
  expirePasswordAndGetTemporaryPassword() {
    return this.client.expirePasswordAndGetTemporaryPassword(this.id);
  }

  unlock() {
    return this.client.unlockUser(this.id);
  }

  resetFactors() {
    return this.client.resetFactors(this.id);
  }

  /**
   * @param {string} factorId
   */
  deleteFactor(factorId) {
    return this.client.deleteFactor(this.id, factorId);
  }

  /**
   * @param {string} groupId
   */
  addToGroup(groupId) {
    return this.client.addUserToGroup(groupId, this.id);
  }

  /**
   * @param {UserFactor} userFactor
   * @param {object} queryParameters
   * @returns {Promise<UserFactor>}
   */
  enrollFactor(userFactor, queryParameters) {
    return this.client.enrollFactor(this.id, userFactor, queryParameters);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link UserFactor} instances.
   */
  listSupportedFactors() {
    return this.client.listSupportedFactors(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link UserFactor} instances.
   */
  listFactors() {
    return this.client.listFactors(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link SecurityQuestion} instances.
   */
  listSupportedSecurityQuestions() {
    return this.client.listSupportedSecurityQuestions(this.id);
  }

  /**
   * @param {string} factorId
   * @returns {Promise<UserFactor>}
   */
  getFactor(factorId) {
    return this.client.getFactor(this.id, factorId);
  }

  /**
   * @param {string} primaryRelationshipName
   * @param {string} primaryUserId
   */
  setLinkedObject(primaryRelationshipName, primaryUserId) {
    return this.client.setLinkedObjectForUser(this.id, primaryRelationshipName, primaryUserId);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link IdentityProvider} instances.
   */
  listIdentityProviders() {
    return this.client.listUserIdentityProviders(this.id);
  }

  /**
   * @param {string} relationshipName
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link ResponseLinks} instances.
   */
  getLinkedObjects(relationshipName, queryParameters) {
    return this.client.getLinkedObjectsForUser(this.id, relationshipName, queryParameters);
  }

  /**
   * @param {object} queryParameters
   */
  clearSessions(queryParameters) {
    return this.client.clearUserSessions(this.id, queryParameters);
  }

  /**
   * @param {string} relationshipName
   */
  removeLinkedObject(relationshipName) {
    return this.client.removeLinkedObjectForUser(this.id, relationshipName);
  }
}

module.exports = User;
