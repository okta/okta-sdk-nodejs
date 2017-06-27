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

const qs = require('querystring');

const Collection = require('./collection');
const models = require('./models');

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

    return new Collection(this, url, models.Group);
  }

  /**
   *
   * @param {Group} group
   * @description
   * Adds a new group with &#x60;OKTA_GROUP&#x60; type to your organization.
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

    return new Collection(this, url, models.GroupRule);
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
   * @description
   */
  getGroupStats(groupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/stats`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.GroupStats(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   */
  listGroupUsers(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, models.User);
  }

  /**
   *
   * @param groupId {String}
   * @param userId {String}
   * @description
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

    return new Collection(this, url, models.User);
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
   */
  listAppLinks(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/appLinks`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, models.AppLink);
  }

  /**
   *
   * @param userId {String}
   * @param {ChangePasswordRequest} changePasswordRequest
   * @description
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
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   */
  listUserGroups(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, models.Group);
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
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
   */
  listAssignedRoles(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, models.Role);
  }

  /**
   *
   * @param userId {String}
   * @param {Role} role
   * @description
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
   */
  listGroupTargetsForRole(userId, roleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, models.Group);
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
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
   */
  addGroupTargetToRole(userId, roleId, groupId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`;

    const request = this.http.put(url);
    return request;
  }

}

module.exports = GeneratedApiClient;
