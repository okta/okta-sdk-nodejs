/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

const qs = require('querystring');

const Client = require('./client');
const Collection = require('./collection');
const models = require('./models');

/**
 * Auto-Generated extension of {@link BaseClient}, adding the operations as defined in the API JSON spec
 *
 * @class ApiClient
 * @extends {Client}
 */
class ApiClient extends Client {
  constructor(opts) {
    super(opts);
  }

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

    return new Collection(this.http, url, models.UserGroup);
  }

  /**
   *
   * @param {UserGroup} userGroup
   * @description
   * Adds a new group with &#x60;OKTA_GROUP&#x60; type to your organization.
   */
  createGroup(userGroup) {
    let url = `${this.baseUrl}/api/v1/groups`;

    const request = this.http.postJson(url, {
      body: userGroup
    });
    return request.then(jsonRes => new models.UserGroup(jsonRes, this));
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

    return new Collection(this.http, url, models.GroupMembershipMediationRule);
  }

  /**
   *
   * @param {GroupMembershipMediationRule} groupMembershipMediationRule
   * @description
   * Creates a group rule to dynamically add users to the specified group if they match the condition
   */
  createRule(groupMembershipMediationRule) {
    let url = `${this.baseUrl}/api/v1/groups/rules`;

    const request = this.http.postJson(url, {
      body: groupMembershipMediationRule
    });
    return request.then(jsonRes => new models.GroupMembershipMediationRule(jsonRes, this));
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
    return request.then(jsonRes => new models.GroupMembershipMediationRule(jsonRes, this));
  }

  /**
   *
   * @param ruleId {String}
   * @param {GroupMembershipMediationRule} groupMembershipMediationRule
   * @description
   */
  updateRule(ruleId, groupMembershipMediationRule) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;

    const request = this.http.putJson(url, {
      body: groupMembershipMediationRule
    });
    return request.then(jsonRes => new models.GroupMembershipMediationRule(jsonRes, this));
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
    return request.then(jsonRes => new models.UserGroup(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param {UserGroup} userGroup
   * @description
   */
  updateGroup(groupId, userGroup) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;

    const request = this.http.putJson(url, {
      body: userGroup
    });
    return request.then(jsonRes => new models.UserGroup(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @description
   */
  getUserGroupStats(groupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/stats`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.UserGroupStats(jsonRes, this));
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

    return new Collection(this.http, url, models.User);
  }

  /**
   *
   * @param groupId {String}
   * @param userId {String}
   * @description
   */
  removeUserFromGroup(groupId, userId) {
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

    return new Collection(this.http, url, models.User);
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
  updateUserWithDefaults(userId, user) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;

    const request = this.http.postJson(url, {
      body: user
    });
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

    return new Collection(this.http, url, models.AppLink);
  }

  /**
   *
   * @param userId {String}
   * @param {ChangePasswordCredentials} changePasswordCredentials
   * @description
   */
  changePassword(userId, changePasswordCredentials) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/change_password`;

    const request = this.http.postJson(url, {
      body: changePasswordCredentials
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
  forgotPasswordWithRecoveryAnswer(userId, userCredentials, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/forgot_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: userCredentials
    });
    return request.then(jsonRes => new models.BaseCredentialsObject(jsonRes, this));
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

    return new Collection(this.http, url, models.UserGroup);
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

    const request = this.http.post(url);
    return request.then(jsonRes => new models.ActivationToken(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   */
  lifecycleDeactivateUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/deactivate`;

    const request = this.http.post(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   */
  forgotPassword(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/forgot_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.post(url);
    return request.then(jsonRes => new models.ResetPasswordToken(jsonRes, this));
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

    return new Collection(this.http, url, models.MediationRoleAssignment);
  }

  /**
   *
   * @param userId {String}
   * @param {MediationRoleAssignment} mediationRoleAssignment
   * @description
   */
  assignRoleToUser(userId, mediationRoleAssignment) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;

    const request = this.http.postJson(url, {
      body: mediationRoleAssignment
    });
    return request.then(jsonRes => new models.MediationRoleAssignment(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @description
   */
  unassignRoleFromUser(userId, roleId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`;

    const request = this.http.delete(url);
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @description
   */
  getRoleForUser(userId, roleId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.MediationRoleAssignment(jsonRes, this));
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

    return new Collection(this.http, url, models.UserGroup);
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

module.exports = ApiClient;