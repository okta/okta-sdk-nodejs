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
const qs = require('querystring');

const Collection = require('./collection');
const models = require('./models');
const factories = require('./factories');
const ModelFactory = require('./model-factory');

/**
 * Auto-Generated API client, implementes the operations as defined in the OpenaAPI JSON spec
 *
 * @class GeneratedApiClient
 * @extends {Client}
 */
class GeneratedApiClient {

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
   * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
   */
  listGroups(queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.Group));
  }

  /**
   *
   * @param {Group} group
   * @description
   * Adds a new group with `OKTA_GROUP` type to your organization.
   */
  createGroup(group) {
    let url = `${this.baseUrl}/api/v1/groups`;

    const request = this.http.postJson(url, {
      body: group
    });
    return request.then(jsonRes => new models.Group(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.after]
   * @description
   * Lists all group rules for your organization.
   */
  listRules(queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/rules`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.GroupRule));
  }

  /**
   *
   * @param {GroupRule} groupRule
   * @description
   * Creates a group rule to dynamically add users to the specified group if they match the condition
   */
  createRule(groupRule) {
    let url = `${this.baseUrl}/api/v1/groups/rules`;

    const request = this.http.postJson(url, {
      body: groupRule
    });
    return request.then(jsonRes => new models.GroupRule(jsonRes, this));
  }

  /**
   *
   * @param ruleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.removeUsers]
   * @description
   * Removes a specific group rule by id from your organization
   */
  deleteRule(ruleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.delete(url);
    return request;
  }

  /**
   *
   * @param ruleId {String}
   * @description
   * Fetches a specific group rule by id from your organization
   */
  getRule(ruleId) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.GroupRule(jsonRes, this));
  }

  /**
   *
   * @param ruleId {String}
   * @param {GroupRule} groupRule
   * @description
   * Convenience method for /api/v1/groups/rules/{ruleId}
   */
  updateRule(ruleId, groupRule) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;

    const request = this.http.putJson(url, {
      body: groupRule
    });
    return request.then(jsonRes => new models.GroupRule(jsonRes, this));
  }

  /**
   *
   * @param ruleId {String}
   * @description
   * Activates a specific group rule by id from your organization
   */
  activateRule(ruleId) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}/lifecycle/activate`;

    const request = this.http.post(url);
    return request;
  }

  /**
   *
   * @param ruleId {String}
   * @description
   * Deactivates a specific group rule by id from your organization
   */
  deactivateRule(ruleId) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}/lifecycle/deactivate`;

    const request = this.http.post(url);
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @description
   * Removes a group with `OKTA_GROUP` type from your organization.
   */
  deleteGroup(groupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;

    const request = this.http.delete(url);
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all group rules for your organization.
   */
  getGroup(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.Group(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param {Group} group
   * @description
   * Updates the profile for a group with `OKTA_GROUP` type from your organization.
   */
  updateGroup(groupId, group) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;

    const request = this.http.putJson(url, {
      body: group
    });
    return request.then(jsonRes => new models.Group(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Enumerates all [users](/docs/api/resources/users.html#user-model) that are a member of a group.
   */
  listGroupUsers(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.User));
  }

  /**
   *
   * @param groupId {String}
   * @param userId {String}
   * @description
   * Removes a [user](users.html#user-model) from a group with `OKTA_GROUP` type.
   */
  removeGroupUser(groupId, userId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`;

    const request = this.http.delete(url);
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param userId {String}
   * @description
   * Adds a [user](users.html#user-model) to a group with `OKTA_GROUP` type.
   */
  addUserToGroup(groupId, userId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`;

    const request = this.http.put(url);
    return request;
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.format]
   * @param {String} [queryParams.search]
   * @param {String} [queryParams.expand]
   * @description
   * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
   */
  listUsers(queryParameters) {
    let url = `${this.baseUrl}/api/v1/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.User));
  }

  /**
   *
   * @param {User} user
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @param {String} [queryParams.provider]
   * @description
   * Creates a new user in your Okta organization with or without credentials.
   */
  createUser(user, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: user
    });
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
   */
  deactivateOrDeleteUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;

    const request = this.http.delete(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @description
   * Fetches a user from your Okta organization.
   */
  getUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {User} user
   * @description
   * Update a user's profile and/or credentials using strict-update semantics.
   */
  updateUser(userId, user) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;

    const request = this.http.putJson(url, {
      body: user
    });
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.showAll]
   * @description
   * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
   */
  listAppLinks(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/appLinks`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.AppLink));
  }

  /**
   *
   * @param userId {String}
   * @param {ChangePasswordRequest} changePasswordRequest
   * @description
   * Changes a user's password by validating the user's current password.  This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid [password credential](#password-object)
   */
  changePassword(userId, changePasswordRequest) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/change_password`;

    const request = this.http.postJson(url, {
      body: changePasswordRequest
    });
    return request.then(jsonRes => new models.UserCredentials(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {UserCredentials} userCredentials
   * @description
   * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid [password credential](#password-object)
   */
  changeRecoveryQuestion(userId, userCredentials) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/change_recovery_question`;

    const request = this.http.postJson(url, {
      body: userCredentials
    });
    return request.then(jsonRes => new models.UserCredentials(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {UserCredentials} userCredentials
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Generates a one-time token (OTT) that can be used to reset a user's password.  The user will be required to validate their security question's answer when visiting the reset link.  This operation can only be performed on users with a valid [recovery question credential](#recovery-question-object) and have an `ACTIVE` status.
   */
  forgotPassword(userId, userCredentials, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/forgot_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: userCredentials
    });
    return request.then(jsonRes => new models.ForgotPasswordResponse(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all the enrolled factors for the specified user
   */
  listFactors(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors`;

    return new Collection(this, url, new factories.Factor());
  }

  /**
   *
   * @param userId {String}
   * @param {Factor} factor
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.updatePhone]
   * @param {String} [queryParams.templateId]
   * @description
   * Enrolls a user with a supported [factor](#list-factors-to-enroll)
   */
  addFactor(userId, factor, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: factor
    });
    return request.then(jsonRes => new factories.Factor().createInstance(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all the [supported factors](#supported-factors-for-providers) that can be enrolled for the specified user
   */
  listSupportedFactors(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/catalog`;

    return new Collection(this, url, new factories.Factor());
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all available security questions for a user's `question` factor
   */
  listSupportedSecurityQuestions(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/questions`;

    return new Collection(this, url, new ModelFactory(models.SecurityQuestion));
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @description
   * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
   */
  deleteFactor(userId, factorId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`;

    const request = this.http.delete(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @description
   * Fetches a factor for the specified user
   */
  getFactor(userId, factorId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new factories.Factor().createInstance(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {VerifyFactorRequest} verifyFactorRequest
   * @description
   * The `sms` and `token:software:totp` [factor types](#factor-type) require activation to complete the enrollment process.
   */
  activateFactor(userId, factorId, verifyFactorRequest) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}/lifecycle/activate`;

    const request = this.http.postJson(url, {
      body: verifyFactorRequest
    });
    return request.then(jsonRes => new factories.Factor().createInstance(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {VerifyFactorRequest} verifyFactorRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.templateId]
   * @description
   * Verifies an OTP for a `token` or `token:hardware` factor
   */
  verifyFactor(userId, factorId, verifyFactorRequest, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}/verify`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: verifyFactorRequest
    });
    return request.then(jsonRes => new models.VerifyFactorResponse(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Fetches the groups of which the user is a member.
   */
  listUserGroups(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.Group));
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation.  The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
   */
  activateUser(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/activate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url);
    return request.then(jsonRes => new models.UserActivationToken(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Deactivates a user.  This operation can only be performed on users that do not have a `DEPROVISIONED` status.  Deactivation of a user is an asynchronous operation.  The user will have the `transitioningToStatus` property with a value of `DEPROVISIONED` during deactivation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `DEPROVISIONED` when the deactivation process is complete.
   */
  deactivateUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/deactivate`;

    const request = this.http.post(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.tempPassword]
   * @description
   * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
   */
  expirePassword(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/expire_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url);
    return request.then(jsonRes => new models.TempPassword(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
   */
  resetAllFactors(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/reset_factors`;

    const request = this.http.post(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.provider]
   * @param {String} [queryParams.sendEmail]
   * @description
   * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
   */
  resetPassword(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/reset_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url);
    return request.then(jsonRes => new models.ResetPasswordToken(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
   */
  suspendUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/suspend`;

    const request = this.http.post(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @description
   * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
   */
  unlockUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/unlock`;

    const request = this.http.post(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @description
   * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
   */
  unsuspendUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/unsuspend`;

    const request = this.http.post(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all roles assigned to a user.
   */
  listAssignedRoles(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.Role));
  }

  /**
   *
   * @param userId {String}
   * @param {Role} role
   * @description
   * Assigns a role to a user.
   */
  addRoleToUser(userId, role) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;

    const request = this.http.postJson(url, {
      body: role
    });
    return request.then(jsonRes => new models.Role(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @description
   * Unassigns a role from a user.
   */
  removeRoleFromUser(userId, roleId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`;

    const request = this.http.delete(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Convenience method for /api/v1/users/{userId}/roles/{roleId}/targets/groups
   */
  listGroupTargetsForRole(userId, roleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.Group));
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
   * Convenience method for /api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}
   */
  removeGroupTargetFromRole(userId, roleId, groupId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`;

    const request = this.http.delete(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
   * Convenience method for /api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}
   */
  addGroupTargetToRole(userId, roleId, groupId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`;

    const request = this.http.put(url);
    return request;
  }

}

module.exports = GeneratedApiClient;
