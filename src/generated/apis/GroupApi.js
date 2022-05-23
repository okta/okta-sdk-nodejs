/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.GroupApiResponseProcessor = exports.GroupApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class GroupApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Activates a specific group rule by id from your organization
     * Activate a group Rule
     * @param ruleId
     */
  async activateGroupRule(ruleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'activateGroupRule', 'ruleId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/rules/{ruleId}/lifecycle/activate'
      .replace('{' + 'ruleId' + '}', encodeURIComponent(String(ruleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Add App Instance Target to App Administrator Role given to a Group
     * Add App Instance Target to App Administrator Role given to a Group
     * @param groupId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  async addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId, roleId, appName, applicationId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addApplicationInstanceTargetToAppAdminRoleGivenToGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addApplicationInstanceTargetToAppAdminRoleGivenToGroup', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addApplicationInstanceTargetToAppAdminRoleGivenToGroup', 'appName');
    }
    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addApplicationInstanceTargetToAppAdminRoleGivenToGroup', 'applicationId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'appName' + '}', encodeURIComponent(String(appName)))
      .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Success
     * Add Application Target to Admin Role Given to Group
     * @param groupId
     * @param roleId
     * @param appName
     */
  async addApplicationTargetToAdminRoleGivenToGroup(groupId, roleId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addApplicationTargetToAdminRoleGivenToGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addApplicationTargetToAdminRoleGivenToGroup', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addApplicationTargetToAdminRoleGivenToGroup', 'appName');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'appName' + '}', encodeURIComponent(String(appName)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Enumerates group targets for a group role.
     * Add Group Target for Group Role
     * @param groupId
     * @param roleId
     * @param targetGroupId
     */
  async addGroupTargetToGroupAdministratorRoleForGroup(groupId, roleId, targetGroupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addGroupTargetToGroupAdministratorRoleForGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addGroupTargetToGroupAdministratorRoleForGroup', 'roleId');
    }
    // verify required parameter 'targetGroupId' is not null or undefined
    if (targetGroupId === null || targetGroupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addGroupTargetToGroupAdministratorRoleForGroup', 'targetGroupId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'targetGroupId' + '}', encodeURIComponent(String(targetGroupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Adds a user to a group with 'OKTA_GROUP' type.
     * Add User to Group
     * @param groupId
     * @param userId
     */
  async addUserToGroup(groupId, userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addUserToGroup', 'groupId');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'addUserToGroup', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/users/{userId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Assigns a Role to a Group
     * Assign Role to Group
     * @param groupId
     * @param assignRoleRequest
     * @param disableNotifications
     */
  async assignRoleToGroup(groupId, assignRoleRequest, disableNotifications, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'assignRoleToGroup', 'groupId');
    }
    // verify required parameter 'assignRoleRequest' is not null or undefined
    if (assignRoleRequest === null || assignRoleRequest === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'assignRoleToGroup', 'assignRoleRequest');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (disableNotifications !== undefined) {
      requestContext.setQueryParam('disableNotifications', ObjectSerializer_1.ObjectSerializer.serialize(disableNotifications, 'boolean', ''));
    }
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(assignRoleRequest, 'AssignRoleRequest', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Adds a new group with `OKTA_GROUP` type to your organization.
     * Add Group
     * @param group
     */
  async createGroup(group, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'group' is not null or undefined
    if (group === null || group === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'createGroup', 'group');
    }
    // Path Params
    const localVarPath = '/api/v1/groups';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(group, 'Group', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Creates a group rule to dynamically add users to the specified group if they match the condition
     * Create Group Rule
     * @param groupRule
     */
  async createGroupRule(groupRule, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupRule' is not null or undefined
    if (groupRule === null || groupRule === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'createGroupRule', 'groupRule');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/rules';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(groupRule, 'GroupRule', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Deactivates a specific group rule by id from your organization
     * Deactivate a group Rule
     * @param ruleId
     */
  async deactivateGroupRule(ruleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'deactivateGroupRule', 'ruleId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/rules/{ruleId}/lifecycle/deactivate'
      .replace('{' + 'ruleId' + '}', encodeURIComponent(String(ruleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Removes a group with `OKTA_GROUP` type from your organization.
     * Remove Group
     * @param groupId
     */
  async deleteGroup(groupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'deleteGroup', 'groupId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Removes a specific group rule by id from your organization
     * Delete a group Rule
     * @param ruleId
     * @param removeUsers Indicates whether to keep or remove users from groups assigned by this rule.
     */
  async deleteGroupRule(ruleId, removeUsers, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'deleteGroupRule', 'ruleId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/rules/{ruleId}'
      .replace('{' + 'ruleId' + '}', encodeURIComponent(String(ruleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (removeUsers !== undefined) {
      requestContext.setQueryParam('removeUsers', ObjectSerializer_1.ObjectSerializer.serialize(removeUsers, 'boolean', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Fetches a group from your organization.
     * List Group Rules
     * @param groupId
     */
  async getGroup(groupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'getGroup', 'groupId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Fetches a specific group rule by id from your organization
     * Get Group Rule
     * @param ruleId
     * @param expand
     */
  async getGroupRule(ruleId, expand, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'getGroupRule', 'ruleId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/rules/{ruleId}'
      .replace('{' + 'ruleId' + '}', encodeURIComponent(String(ruleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Success
     * Get Role
     * @param groupId
     * @param roleId
     */
  async getRole(groupId, roleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'getRole', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'getRole', 'roleId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
     * List Application Targets for Application Administrator Role for Group
     * @param groupId
     * @param roleId
     * @param after
     * @param limit
     */
  async listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'listApplicationTargetsForApplicationAdministratorRoleForGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'listApplicationTargetsForApplicationAdministratorRoleForGroup', 'roleId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'int32'));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Enumerates all applications that are assigned to a group.
     * List Assigned Applications
     * @param groupId
     * @param after Specifies the pagination cursor for the next page of apps
     * @param limit Specifies the number of app results for a page
     */
  async listAssignedApplicationsForGroup(groupId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'listAssignedApplicationsForGroup', 'groupId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/apps'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'int32'));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Success
     * List Group Assigned Roles
     * @param groupId
     * @param expand
     */
  async listGroupAssignedRoles(groupId, expand, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'listGroupAssignedRoles', 'groupId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Lists all group rules for your organization.
     * List Group Rules
     * @param limit Specifies the number of rule results in a page
     * @param after Specifies the pagination cursor for the next page of rules
     * @param search Specifies the keyword to search fules for
     * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
     */
  async listGroupRules(limit, after, search, expand, _options) {
    let _config = _options || this.configuration;
    // Path Params
    const localVarPath = '/api/v1/groups/rules';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'int32'));
    }
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (search !== undefined) {
      requestContext.setQueryParam('search', ObjectSerializer_1.ObjectSerializer.serialize(search, 'string', ''));
    }
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Enumerates group targets for a group role.
     * List Group Targets for Group Role
     * @param groupId
     * @param roleId
     * @param after
     * @param limit
     */
  async listGroupTargetsForGroupRole(groupId, roleId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'listGroupTargetsForGroupRole', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'listGroupTargetsForGroupRole', 'roleId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}/targets/groups'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'int32'));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Enumerates all users that are a member of a group.
     * List Group Members
     * @param groupId
     * @param after Specifies the pagination cursor for the next page of users
     * @param limit Specifies the number of user results in a page
     */
  async listGroupUsers(groupId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'listGroupUsers', 'groupId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/users'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'int32'));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
     * List Groups
     * @param q Searches the name property of groups for matching value
     * @param search Filter expression for groups
     * @param after Specifies the pagination cursor for the next page of groups
     * @param limit Specifies the number of group results in a page
     * @param expand If specified, it causes additional metadata to be included in the response.
     */
  async listGroups(q, search, after, limit, expand, _options) {
    let _config = _options || this.configuration;
    // Path Params
    const localVarPath = '/api/v1/groups';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (q !== undefined) {
      requestContext.setQueryParam('q', ObjectSerializer_1.ObjectSerializer.serialize(q, 'string', ''));
    }
    // Query Params
    if (search !== undefined) {
      requestContext.setQueryParam('search', ObjectSerializer_1.ObjectSerializer.serialize(search, 'string', ''));
    }
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'int32'));
    }
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Remove App Instance Target to App Administrator Role given to a Group
     * Remove App Instance Target to App Administrator Role given to a Group
     * @param groupId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  async removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId, roleId, appName, applicationId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeApplicationTargetFromAdministratorRoleGivenToGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeApplicationTargetFromAdministratorRoleGivenToGroup', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeApplicationTargetFromAdministratorRoleGivenToGroup', 'appName');
    }
    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeApplicationTargetFromAdministratorRoleGivenToGroup', 'applicationId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'appName' + '}', encodeURIComponent(String(appName)))
      .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Success
     * Remove Application Target from Application Administrator Role Given to Group
     * @param groupId
     * @param roleId
     * @param appName
     */
  async removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId, roleId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup', 'appName');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'appName' + '}', encodeURIComponent(String(appName)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * remove group target for a group role.
     * Delete Group Target for Group Role
     * @param groupId
     * @param roleId
     * @param targetGroupId
     */
  async removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId, roleId, targetGroupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeGroupTargetFromGroupAdministratorRoleGivenToGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeGroupTargetFromGroupAdministratorRoleGivenToGroup', 'roleId');
    }
    // verify required parameter 'targetGroupId' is not null or undefined
    if (targetGroupId === null || targetGroupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeGroupTargetFromGroupAdministratorRoleGivenToGroup', 'targetGroupId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'targetGroupId' + '}', encodeURIComponent(String(targetGroupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Unassigns a Role from a Group
     * Remove Role from Group
     * @param groupId
     * @param roleId
     */
  async removeRoleFromGroup(groupId, roleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeRoleFromGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeRoleFromGroup', 'roleId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/roles/{roleId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Removes a user from a group with 'OKTA_GROUP' type.
     * Remove User from Group
     * @param groupId
     * @param userId
     */
  async removeUserFromGroup(groupId, userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeUserFromGroup', 'groupId');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'removeUserFromGroup', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}/users/{userId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Updates the profile for a group with `OKTA_GROUP` type from your organization.
     * Update Group
     * @param groupId
     * @param group
     */
  async updateGroup(groupId, group, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'updateGroup', 'groupId');
    }
    // verify required parameter 'group' is not null or undefined
    if (group === null || group === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'updateGroup', 'group');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/{groupId}'
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(group, 'Group', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
  /**
     * Updates a group rule. Only `INACTIVE` rules can be updated.
     * Update Group Rule
     * @param ruleId
     * @param groupRule
     */
  async updateGroupRule(ruleId, groupRule, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'updateGroupRule', 'ruleId');
    }
    // verify required parameter 'groupRule' is not null or undefined
    if (groupRule === null || groupRule === undefined) {
      throw new baseapi_1.RequiredError('GroupApi', 'updateGroupRule', 'groupRule');
    }
    // Path Params
    const localVarPath = '/api/v1/groups/rules/{ruleId}'
      .replace('{' + 'ruleId' + '}', encodeURIComponent(String(ruleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(groupRule, 'GroupRule', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['api_token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['oauth2'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
}
exports.GroupApiRequestFactory = GroupApiRequestFactory;
class GroupApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async activateGroupRule(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addApplicationInstanceTargetToAppAdminRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async addApplicationInstanceTargetToAppAdminRoleGivenToGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addApplicationTargetToAdminRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async addApplicationTargetToAdminRoleGivenToGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addGroupTargetToGroupAdministratorRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async addGroupTargetToGroupAdministratorRoleForGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addUserToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async addUserToGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignRoleToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignRoleToGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Role', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Role | void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Group', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Group', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createGroupRule(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'GroupRule', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'GroupRule', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deactivateGroupRule(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteGroupRule(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('202', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Group', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Group', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getGroupRule(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'GroupRule', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'GroupRule', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Role', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Role', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationTargetsForApplicationAdministratorRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listApplicationTargetsForApplicationAdministratorRoleForGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<CatalogApplication>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<CatalogApplication>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAssignedApplicationsForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAssignedApplicationsForGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Application>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Application>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupAssignedRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listGroupAssignedRoles(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Role>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Role>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupRules
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listGroupRules(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<GroupRule>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<GroupRule>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupTargetsForGroupRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listGroupTargetsForGroupRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Group>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Group>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listGroupUsers(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<User>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<User>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listGroups(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Group>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Group>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeApplicationTargetFromAdministratorRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeApplicationTargetFromAdministratorRoleGivenToGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeGroupTargetFromGroupAdministratorRoleGivenToGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeGroupTargetFromGroupAdministratorRoleGivenToGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeRoleFromGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeRoleFromGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeUserFromGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeUserFromGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async updateGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Group', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Group', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGroupRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async updateGroupRule(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'GroupRule', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'GroupRule', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.GroupApiResponseProcessor = GroupApiResponseProcessor;
