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

const qs = require('querystring');

const Collection = require('./collection');
const models = require('./models');
const factories = require('./factories');
const ModelFactory = require('./model-factory');

/**
 * Auto-Generated API client, implements the operations as defined in the OpenaAPI JSON spec
 *
 * @class GeneratedApiClient
 */
class GeneratedApiClient {

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.includeNonDeleted]
   * @description
   * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
   * @returns {Promise<Collection>} A collection that will yield {@link Application} instances.
   */
  listApplications(queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new factories.Application());
  }

  /**
   *
   * @param {Application} application
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
   * Adds a new application to your Okta organization.
   * @returns {Promise<Application>}
   */
  createApplication(application, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [];

    const request = this.http.postJson(url, {
      body: application
    }, {resources});
    return request.then(jsonRes => new factories.Application().createInstance(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @description
   * Removes an inactive application.
   */
  deleteApplication(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches an application from your Okta organization by `id`.
   * @returns {Promise<Application>}
   */
  getApplication(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new factories.Application().createInstance(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param {Application} application
   * @description
   * Updates an application in your organization.
   * @returns {Promise<Application>}
   */
  updateApplication(appId, application) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.putJson(url, {
      body: application
    }, {resources});
    return request.then(jsonRes => new factories.Application().createInstance(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @description
   * Enumerates key credentials for an application
   * @returns {Promise<Collection>} A collection that will yield {@link JsonWebKey} instances.
   */
  listApplicationKeys(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys`;

    return new Collection(this, url, new ModelFactory(models.JsonWebKey));
  }

  /**
   *
   * @param appId {String}
   * @param keyId {String}
   * @description
   * Gets a specific [application key credential](#application-key-credential-model) by `kid`
   * @returns {Promise<JsonWebKey>}
   */
  getApplicationKey(appId, keyId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param keyId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.targetAid]
   * @description
   * Clones a X.509 certificate for an application key credential from a source application to target application.
   * @returns {Promise<JsonWebKey>}
   */
  cloneApplicationKey(appId, keyId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}/clone`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.postJson(url, null, {resources});
    return request.then(jsonRes => new models.JsonWebKey(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
   * Enumerates group assignments for an application.
   * @returns {Promise<Collection>} A collection that will yield {@link ApplicationGroupAssignment} instances.
   */
  listApplicationGroupAssignments(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.ApplicationGroupAssignment));
  }

  /**
   *
   * @param appId {String}
   * @param groupId {String}
   * @description
   * Removes a group assignment from an application.
   */
  deleteApplicationGroupAssignment(appId, groupId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches an application group assignment
   * @returns {Promise<ApplicationGroupAssignment>}
   */
  getApplicationGroupAssignment(appId, groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new models.ApplicationGroupAssignment(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param groupId {String}
   * @param {ApplicationGroupAssignment} applicationGroupAssignment
   * @description
   * Assigns a group to an application
   * @returns {Promise<ApplicationGroupAssignment>}
   */
  createApplicationGroupAssignment(appId, groupId, applicationGroupAssignment) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.putJson(url, {
      body: applicationGroupAssignment
    }, {resources});
    return request.then(jsonRes => new models.ApplicationGroupAssignment(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @description
   * Activates an inactive application.
   */
  activateApplication(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.post(url, null, {resources});
    return request;
  }

  /**
   *
   * @param appId {String}
   * @description
   * Deactivates an active application.
   */
  deactivateApplication(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.post(url, null, {resources});
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.query_scope]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.expand]
   * @description
   * Enumerates all assigned [application users](#application-user-model) for an application.
   * @returns {Promise<Collection>} A collection that will yield {@link AppUser} instances.
   */
  listApplicationUsers(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.AppUser));
  }

  /**
   *
   * @param appId {String}
   * @param {AppUser} appUser
   * @description
   * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
   * @returns {Promise<AppUser>}
   */
  assignUserToApplication(appId, appUser) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.postJson(url, {
      body: appUser
    }, {resources});
    return request.then(jsonRes => new models.AppUser(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Removes an assignment for a user from an application.
   */
  deleteApplicationUser(appId, userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param appId {String}
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches a specific user assignment for application by `id`.
   * @returns {Promise<AppUser>}
   */
  getApplicationUser(appId, userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new models.AppUser(jsonRes, this));
  }

  /**
   *
   * @param appId {String}
   * @param userId {String}
   * @param {AppUser} appUser
   * @description
   * Updates a user's profile for an application
   * @returns {Promise<AppUser>}
   */
  updateApplicationUser(appId, userId, appUser) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;

    const resources = [
      `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`,
      `${this.baseUrl}/api/v1/apps/${appId}`
    ];

    const request = this.http.postJson(url, {
      body: appUser
    }, {resources});
    return request.then(jsonRes => new models.AppUser(jsonRes, this));
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
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
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
   * @returns {Promise<Group>}
   */
  createGroup(group) {
    let url = `${this.baseUrl}/api/v1/groups`;

    const resources = [];

    const request = this.http.postJson(url, {
      body: group
    }, {resources});
    return request.then(jsonRes => new models.Group(jsonRes, this));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.expand]
   * @description
   * Lists all group rules for your organization.
   * @returns {Promise<Collection>} A collection that will yield {@link GroupRule} instances.
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
   * @returns {Promise<GroupRule>}
   */
  createRule(groupRule) {
    let url = `${this.baseUrl}/api/v1/groups/rules`;

    const resources = [];

    const request = this.http.postJson(url, {
      body: groupRule
    }, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param ruleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches a specific group rule by id from your organization
   * @returns {Promise<GroupRule>}
   */
  getRule(ruleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new models.GroupRule(jsonRes, this));
  }

  /**
   *
   * @param ruleId {String}
   * @param {GroupRule} groupRule
   * @description
   * Success
   * @returns {Promise<GroupRule>}
   */
  updateRule(ruleId, groupRule) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.putJson(url, {
      body: groupRule
    }, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.post(url, null, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/groups/rules/${ruleId}`
    ];

    const request = this.http.post(url, null, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all group rules for your organization.
   * @returns {Promise<Group>}
   */
  getGroup(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new models.Group(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param {Group} group
   * @description
   * Updates the profile for a group with `OKTA_GROUP` type from your organization.
   * @returns {Promise<Group>}
   */
  updateGroup(groupId, group) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.putJson(url, {
      body: group
    }, {resources});
    return request.then(jsonRes => new models.Group(jsonRes, this));
  }

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.managedBy]
   * @description
   * Enumerates all [users](/docs/api/resources/users.html#user-model) that are a member of a group.
   * @returns {Promise<Collection>} A collection that will yield {@link User} instances.
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

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.delete(url, null, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`,
      `${this.baseUrl}/api/v1/groups/${groupId}`
    ];

    const request = this.http.put(url, null, {resources});
    return request;
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.until]
   * @param {String} [queryParams.since]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.sortOrder]
   * @param {String} [queryParams.after]
   * @description
   * The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
   * @returns {Promise<Collection>} A collection that will yield {@link LogEvent} instances.
   */
  getLogs(queryParameters) {
    let url = `${this.baseUrl}/api/v1/logs`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new ModelFactory(models.LogEvent));
  }

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.type]
   * @param {String} [queryParams.status]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
   * Convenience method for /api/v1/policies
   * @returns {Promise<Collection>} A collection that will yield {@link Policy} instances.
   */
  listPolicies(queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this, url, new factories.Policy());
  }

  /**
   *
   * @param {Policy} policy
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
   * Convenience method for /api/v1/policies
   * @returns {Promise<Policy>}
   */
  createPolicy(policy, queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [];

    const request = this.http.postJson(url, {
      body: policy
    }, {resources});
    return request.then(jsonRes => new factories.Policy().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @description
   * Convenience method for /api/v1/policies/{policyId}
   */
  deletePolicy(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Convenience method for /api/v1/policies/{policyId}
   * @returns {Promise<Policy>}
   */
  getPolicy(policyId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new factories.Policy().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param {Policy} policy
   * @description
   * Convenience method for /api/v1/policies/{policyId}
   * @returns {Promise<Policy>}
   */
  updatePolicy(policyId, policy) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.putJson(url, {
      body: policy
    }, {resources});
    return request.then(jsonRes => new factories.Policy().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @description
   * Convenience method for /api/v1/policies/{policyId}/lifecycle/activate
   */
  activatePolicy(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.post(url, null, {resources});
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @description
   * Convenience method for /api/v1/policies/{policyId}/lifecycle/deactivate
   */
  deactivatePolicy(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.post(url, null, {resources});
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @description
   * Convenience method for /api/v1/policies/{policyId}/rules
   * @returns {Promise<Collection>} A collection that will yield {@link PolicyRule} instances.
   */
  listPolicyRules(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules`;

    return new Collection(this, url, new factories.PolicyRule());
  }

  /**
   *
   * @param policyId {String}
   * @param {PolicyRule} policyRule
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
   * Convenience method for /api/v1/policies/{policyId}/rules
   * @returns {Promise<PolicyRule>}
   */
  addPolicyRule(policyId, policyRule, queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.postJson(url, {
      body: policyRule
    }, {resources});
    return request.then(jsonRes => new factories.PolicyRule().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Convenience method for /api/v1/policies/{policyId}/rules/{ruleId}
   */
  deletePolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Convenience method for /api/v1/policies/{policyId}/rules/{ruleId}
   * @returns {Promise<PolicyRule>}
   */
  getPolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new factories.PolicyRule().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @param {PolicyRule} policyRule
   * @description
   * Convenience method for /api/v1/policies/{policyId}/rules/{ruleId}
   * @returns {Promise<PolicyRule>}
   */
  updatePolicyRule(policyId, ruleId, policyRule) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.putJson(url, {
      body: policyRule
    }, {resources});
    return request.then(jsonRes => new factories.PolicyRule().createInstance(jsonRes, this));
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Convenience method for /api/v1/policies/{policyId}/rules/{ruleId}/lifecycle/activate
   */
  activatePolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.post(url, null, {resources});
    return request;
  }

  /**
   *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * Convenience method for /api/v1/policies/{policyId}/rules/{ruleId}/lifecycle/deactivate
   */
  deactivatePolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}/lifecycle/deactivate`;

    const resources = [
      `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`,
      `${this.baseUrl}/api/v1/policies/${policyId}`
    ];

    const request = this.http.post(url, null, {resources});
    return request;
  }

  /**
   *
   * @param {CreateSessionRequest} createSessionRequest
   * @description
   * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
   * @returns {Promise<Session>}
   */
  createSession(createSessionRequest) {
    let url = `${this.baseUrl}/api/v1/sessions`;

    const resources = [];

    const request = this.http.postJson(url, {
      body: createSessionRequest
    }, {resources});
    return request.then(jsonRes => new models.Session(jsonRes, this));
  }

  /**
   *
   * @param sessionId {String}
   * @description
   * Convenience method for /api/v1/sessions/{sessionId}
   */
  endSession(sessionId) {
    let url = `${this.baseUrl}/api/v1/sessions/${sessionId}`;

    const resources = [
      `${this.baseUrl}/api/v1/sessions/${sessionId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param sessionId {String}
   * @description
   * Get details about a session.
   * @returns {Promise<Session>}
   */
  getSession(sessionId) {
    let url = `${this.baseUrl}/api/v1/sessions/${sessionId}`;

    const resources = [
      `${this.baseUrl}/api/v1/sessions/${sessionId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new models.Session(jsonRes, this));
  }

  /**
   *
   * @param sessionId {String}
   * @description
   * Convenience method for /api/v1/sessions/{sessionId}/lifecycle/refresh
   * @returns {Promise<Session>}
   */
  refreshSession(sessionId) {
    let url = `${this.baseUrl}/api/v1/sessions/${sessionId}/lifecycle/refresh`;

    const resources = [
      `${this.baseUrl}/api/v1/sessions/${sessionId}`
    ];

    const request = this.http.postJson(url, null, {resources});
    return request.then(jsonRes => new models.Session(jsonRes, this));
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
   * @returns {Promise<Collection>} A collection that will yield {@link User} instances.
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
   * @param {String} [queryParams.nextLogin]
   * @description
   * Creates a new user in your Okta organization with or without credentials.
   * @returns {Promise<User>}
   */
  createUser(user, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [];

    const request = this.http.postJson(url, {
      body: user
    }, {resources});
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
   */
  deactivateOrDeleteUser(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param userId {String}
   * @description
   * Fetches a user from your Okta organization.
   * @returns {Promise<User>}
   */
  getUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {User} user
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.strict]
   * @description
   * Update a user's profile and/or credentials using strict-update semantics.
   * @returns {Promise<User>}
   */
  updateUser(userId, user, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.putJson(url, {
      body: user
    }, {resources});
    return request.then(jsonRes => new models.User(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.showAll]
   * @description
   * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
   * @returns {Promise<Collection>} A collection that will yield {@link AppLink} instances.
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
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.strict]
   * @description
   * Changes a user's password by validating the user's current password.  This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid [password credential](#password-object)
   * @returns {Promise<UserCredentials>}
   */
  changePassword(userId, changePasswordRequest, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/change_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, {
      body: changePasswordRequest
    }, {resources});
    return request.then(jsonRes => new models.UserCredentials(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {UserCredentials} userCredentials
   * @description
   * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid [password credential](#password-object)
   * @returns {Promise<UserCredentials>}
   */
  changeRecoveryQuestion(userId, userCredentials) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/change_recovery_question`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, {
      body: userCredentials
    }, {resources});
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
   * @returns {Promise<ForgotPasswordResponse>}
   */
  forgotPassword(userId, userCredentials, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/forgot_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, {
      body: userCredentials
    }, {resources});
    return request.then(jsonRes => new models.ForgotPasswordResponse(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all the enrolled factors for the specified user
   * @returns {Promise<Collection>} A collection that will yield {@link Factor} instances.
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
   * @param {String} [queryParams.tokenLifetimeSeconds]
   * @param {String} [queryParams.activate]
   * @description
   * Enrolls a user with a supported [factor](#list-factors-to-enroll)
   * @returns {Promise<Factor>}
   */
  addFactor(userId, factor, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, {
      body: factor
    }, {resources});
    return request.then(jsonRes => new factories.Factor().createInstance(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all the [supported factors](#supported-factors-for-providers) that can be enrolled for the specified user
   * @returns {Promise<Collection>} A collection that will yield {@link Factor} instances.
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
   * @returns {Promise<Collection>} A collection that will yield {@link SecurityQuestion} instances.
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

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @description
   * Fetches a factor for the specified user
   * @returns {Promise<Factor>}
   */
  getFactor(userId, factorId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.getJson(url, null, {resources});
    return request.then(jsonRes => new factories.Factor().createInstance(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {VerifyFactorRequest} verifyFactorRequest
   * @description
   * The `sms` and `token:software:totp` [factor types](#factor-type) require activation to complete the enrollment process.
   * @returns {Promise<Factor>}
   */
  activateFactor(userId, factorId, verifyFactorRequest) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}/lifecycle/activate`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, {
      body: verifyFactorRequest
    }, {resources});
    return request.then(jsonRes => new factories.Factor().createInstance(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {VerifyFactorRequest} verifyFactorRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.templateId]
   * @param {String} [queryParams.tokenLifetimeSeconds]
   * @description
   * Verifies an OTP for a `token` or `token:hardware` factor
   * @returns {Promise<VerifyFactorResponse>}
   */
  verifyFactor(userId, factorId, verifyFactorRequest, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}/verify`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/factors/${factorId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, {
      body: verifyFactorRequest
    }, {resources});
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
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
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
   * @returns {Promise<UserActivationToken>}
   */
  activateUser(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/activate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, null, {resources});
    return request.then(jsonRes => new models.UserActivationToken(jsonRes, this));
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Deactivates a user.  This operation can only be performed on users that do not have a `DEPROVISIONED` status.  Deactivation of a user is an asynchronous operation.  The user will have the `transitioningToStatus` property with a value of `DEPROVISIONED` during deactivation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `DEPROVISIONED` when the deactivation process is complete.
   */
  deactivateUser(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/deactivate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(url, null, {resources});
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.tempPassword]
   * @description
   * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
   * @returns {Promise<TempPassword>}
   */
  expirePassword(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/expire_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, null, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(url, null, {resources});
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
   * @returns {Promise<ResetPasswordToken>}
   */
  resetPassword(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/reset_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, null, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(url, null, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(url, null, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.post(url, null, {resources});
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all roles assigned to a user.
   * @returns {Promise<Collection>} A collection that will yield {@link Role} instances.
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
   * @returns {Promise<Role>}
   */
  addRoleToUser(userId, role) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.postJson(url, {
      body: role
    }, {resources});
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

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(url, null, {resources});
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
   * Success
   * @returns {Promise<Collection>} A collection that will yield {@link Group} instances.
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
   * Success
   */
  removeGroupTargetFromRole(userId, roleId, groupId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
   * Success
   */
  addGroupTargetToRole(userId, roleId, groupId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`;

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`,
      `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`,
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.put(url, null, {resources});
    return request;
  }

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.oauthTokens]
   * @description
   * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
   */
  endAllUserSessions(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/sessions`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const resources = [
      `${this.baseUrl}/api/v1/users/${userId}`
    ];

    const request = this.http.delete(url, null, {resources});
    return request;
  }

}

module.exports = GeneratedApiClient;
